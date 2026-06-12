# Governance mod — Path B technical spec (issue #260)

> **Status: DRAFT spec, not accepted.** This is the technical design for **Path B** from
> `docs/GOVERNANCE.md` — a purpose-built NeoForge mod that adds the hierarchical-governance layer
> *on top of* the claim systems the pack already runs, owning no claims of its own. It assumes the
> governance direction is pursued; the decision to commit is still open. Nothing here is built.
>
> Per `docs/CUSTOM-MODS.md`, a custom mod lives in **its own repo** under `theasshats` (working name
> **`theasshats/pcmc-realms`**) and reaches the pack via the mod-mirror packwiz pattern — it is *not*
> developed in this repo. This doc is the design reference that would seed that repo.

---

## 1. Design principle — a layer, not a claim system

The single most important constraint (from #260): **do not introduce a third claim system.** The pack
already runs two — **MineColonies** colony borders and **Open Parties and Claims (OPAC)** chunk claims.
The governance mod **reads** those and hangs political state off them. An "entity" owns *references*
(colony IDs, OPAC claim keys), never raw claims. This is what keeps it from "fighting MineColonies."

```
   MineColonies colony ──┐
                         ├──► governs ──► ENTITY (municipality | federation)
   OPAC claim region  ───┘                  │
                                            ├─ tier, parent, children (recursive tree)
                                            ├─ members / capital
                                            ├─ laws  (typed rules, tier-priority resolver)
                                            └─ treasury + mint policy (Numismatics bridge)
```

---

## 2. Data model

All persisted as a server-level `SavedData` (`RealmsSavedData`, attached to the overworld), serialized to
NBT. No per-chunk data of our own — chunk→entity resolution goes through the claim mods' lookups (§6).

### Entity

| Field | Type | Notes |
| --- | --- | --- |
| `id` | UUID | Stable identity. |
| `name` | String | Player-set. |
| `tier` | enum `Tier` | See §3. |
| `kind` | enum `{MUNICIPALITY, FEDERATION}` | Municipality = solo-founded leaf; federation = composed. |
| `parentId` | UUID? | Null for a top-level entity. The recursive link. |
| `childIds` | Set<UUID> | Sub-regions / member municipalities. |
| `colonyIds` | Set<int> | MineColonies colonies this entity governs (municipalities mainly). |
| `claimKeys` | Set<ClaimKey> | OPAC claim references, if used directly. |
| `capitalId` | UUID? | For federations: the member that is the seat. |
| `members` | Map<UUID playerId, Role> | Role ∈ `{LEADER, OFFICER, CITIZEN}`. |
| `laws` | List<Law> | §4. |
| `treasury` | Treasury | §5. |
| `createdTick` | long | For promotion cooldowns / audit. |

### Tier

`Tier` is an ordered enum carrying its **rank** (for law precedence) and its **kind**:

```
MUNICIPALITY kind:  SETTLEMENT(0) → VILLAGE(1) → TOWN(2) → CITY(3)
FEDERATION   kind:  COUNTY(4)     → KINGDOM(5) → EMPIRE(6)
```

Rank is the integer in parens — used directly by the law resolver (§4) and to validate parent/child
nesting (a child's rank must be < its parent's).

---

## 3. Tier ladder & promotion

**Inputs are free from MineColonies** — no new metrics to invent or tick:

- **population** = sum of `IColony.getCitizenManager().getCitizens().size()` across `colonyIds`.
- **footprint** = claimed-chunk count (MineColonies claim radius + any OPAC claims).
- **development** = highest building level in the colony (Town Hall level is the cleanest single proxy).

Promotion is **player-initiated and validated**, not automatic (avoids surprise tier-ups and per-tick
scanning):

- A municipality leader runs `/realm promote`; the mod checks the next tier's thresholds (configurable in
  `realms-server.toml`) and either promotes or reports the unmet criterion.
- Federations are **created by composition**, not promoted into: `/realm federate <name>` requires ≥ N
  consenting member municipalities (config; default 2) of at least tier TOWN. The new federation's tier
  is the lowest legal federation tier (COUNTY) and climbs as more/larger members join.
- **Recursion:** a federation at rank ≥ KINGDOM may `/realm carve <name>` a sub-region (a child federation
  or municipality) one rank below itself, reassigning some of its members/colonies to the child.

Thresholds live in config so they're tunable per-server without a code change. All checks fire **on the
command**, never on a tick.

---

## 4. Law engine

A **law is a typed rule**, not free text — so it can be enforced and resolved deterministically.

```java
record Law(UUID id, LawType type, ScopeRef scope, Value value, boolean enabled) {}

enum LawType {
  PVP,             // value: ALLOW | DENY
  BLOCK_INTERACT,  // value: ALLOW | DENY  (build/use by non-members)
  ITEM_BAN,        // value: item/tag set
  TAX,             // value: rate (bps) on a taxable event (sales via Trading Floor, colony output)
  CURFEW/optional, // value: tick window (defer to v2 — TPS-sensitive)
}
```

### Enforcement

Each enforceable `LawType` maps to a **NeoForge event handler** that resolves the governing entity for
the action's position (§6), walks that entity's ancestry, and applies the winning law (§ resolver below):

| LawType | Event | Effect |
| --- | --- | --- |
| PVP | `LivingIncomingDamageEvent` (player→player) | Cancel if the governing entity resolves PVP=DENY. |
| BLOCK_INTERACT | `BlockEvent.BreakEvent` / `PlayerInteractEvent.RightClickBlock` | Cancel for non-members if DENY. |
| ITEM_BAN | `PlayerInteractEvent` / tick-light inventory check on region entry | Block use of banned items in-region. |
| TAX | hook on Trading Floor sale + (optional) colony output | Skim `rate` into the entity treasury (§5). |

All handlers are **event-driven and position-local** — no global world scan, matching the perf doctrine
in `SYSTEMS.md` §3a. The chunk→entity lookup must be **O(1)-ish and cached** (§6), since these events are
hot paths (block break, combat).

### Precedence resolver (the core rule #260 asks for)

For a given action at a position:

1. Resolve the **leaf entity** governing that position (§6).
2. Walk **leaf → root** via `parentId`, collecting any law of the action's `LawType`.
3. **Highest tier rank wins.** An EMPIRE(6) PVP=DENY overrides a CITY(3) PVP=ALLOW. *(A higher tier sets
   the floor; a subordinate cannot override its parent — only fill gaps the parent leaves unset.)*
4. **Same-rank tie** (can only happen for two unrelated entities over the same position — a claim overlap):
   resolve by the more-specific (smaller-footprint) entity, else the older `createdTick`. Document the
   rule; overlaps should be rare because claims come from the underlying mods.
5. If no entity in the chain sets that `LawType`, **vanilla/pack default applies** (no law = no change).

This gives the cascading "empire > kingdom > county > city > settlement" semantics with a defined
conflict rule, and makes sub-region laws **subordinate to** (never override) their parent — the natural
reading of a hierarchy.

---

## 5. Treasury & minting (the hard part — Numismatics bridge)

This is the **least certain** part and should be **MVP-deferred** behind laws/hierarchy. Two viable
shapes; pick after a Numismatics API spike:

- **Option 1 — ledger + entity notes (recommended).** Each entity has a `Treasury` = a Numismatics
  **bank account** (Numismatics already has accounts/cards) plus the authority to issue **entity notes** —
  a custom item denominated in that entity's currency, **backed by reserves** held in the treasury account.
  A note is redeemable at the issuing entity's bank for its reserve value. Inflation control = **you can
  only mint notes against reserves** (a hard backing ratio in config), so an entity can't print free money.
  Rival currencies "compete" by their redemption trust; exchange is manual (player-to-player) or via a
  Trading Floor stall. This rides Numismatics' existing money rather than forking the coin system.
- **Option 2 — new coin denominations.** True new coins via Numismatics' coin registry, if its API permits
  registering denominations at runtime (**unverified — likely not**). Higher fidelity, much higher risk;
  only if the spike shows Numismatics supports it. Default assumption: **it does not**, so Option 1.

**Minting authority by tier:** config-gated; default **only FEDERATION-kind entities (COUNTY+) may mint**,
so a lone settlement can't issue currency — minting is a privilege of scale, reinforcing the federation
incentive. TAX revenue (§4) flows into the treasury account; that's the **value-loop weave** #260 wants —
taxes/tribute fund the mint, minted notes circulate via Trading Floor, governance becomes a real trade
driver, not flavor.

---

## 6. Claim integration & chunk→entity resolution

The performance-critical primitive: **given a (level, chunkPos), which entity governs it?**

- **MineColonies:** `IColonyManager.getInstance().getColonyByDimensionAndId(...)` / position lookup gives a
  colony; we map `colonyId → entityId` via a reverse index kept in `RealmsSavedData`.
- **OPAC:** resolve via OPAC's published API (the `xaero.pac.api` claims manager) to a claim owner/party,
  mapped `claimKey → entityId` the same way.
- **Cache:** a `Long2ObjectMap<UUID>` (packed chunk key → leaf entity id), invalidated on claim change /
  entity edit. This keeps the hot-path handlers (§4) cheap. The ancestry walk (leaf→root) is over the
  in-memory entity tree, not storage.

Federation governance over a chunk is **derived**, not stored per-chunk: a chunk resolves to its leaf
(municipality) entity, and the ancestry walk reaches the federations above it. So claims only ever attach
at the municipality level; higher tiers govern transitively.

---

## 7. Commands & UI (MVP = commands; GUI later)

`/realm` tree (permission-checked against member `Role`):

```
/realm found <name>                 (bind current colony as a SETTLEMENT)
/realm info [name]                  (tier, members, laws, treasury)
/realm promote                      (attempt next municipality tier)
/realm federate <name>              (compose a federation from consenting members)
/realm carve <name> <tier>          (recursive sub-region)
/realm law set <type> <value>       (issue/replace a law)
/realm law list
/realm member <add|remove|role> ...
/realm mint <amount>                (federation+, against reserves)
/realm map                          (optional: render governed borders — reuse OPAC/MineColonies render)
```

A GUI (entity screen, law list, treasury) is a **v2** nicety; commands are the MVP so the system is
playable before any screen work.

---

## 8. Scope / phasing — MVP first

The full vision is multi-week; ship it in slices, each independently playtestable on the box:

| Phase | Delivers | Gate |
| --- | --- | --- |
| **0 — spike** | Verify OPAC + MineColonies + Numismatics APIs do what §3/§5/§6 assume. | Decides Option 1 vs 2 for minting; confirms chunk→entity lookup is cheap. |
| **1 — MVP** | Entity model, found/promote, the **law engine + resolver** (PVP, BLOCK_INTERACT), chunk→entity cache. **No federation, no minting.** | A single municipality can set & enforce laws on its colony. |
| **2 — hierarchy** | Federations, recursive carve, ancestry-based law cascade. | Empire>kingdom>city precedence verified in-game. |
| **3 — economy** | TAX laws → treasury, Option-1 minting + entity notes, Trading Floor weave. | Taxes fund a mint; notes circulate. |
| **4 — polish** | GUI, map render, ITEM_BAN, config surface. | — |

Phase 1 alone is a shippable, useful feature (per-municipality PvP/build laws) and de-risks the rest.

---

## 9. Perf & compat notes

- **Event-driven, position-local only** — no global tick scan (matches `SYSTEMS.md` §3a doctrine and the
  pack's tight TPS budget). The only always-resident cost is the chunk→entity cache (small) and the
  in-memory entity tree.
- **Server-authoritative.** All law checks server-side; the mod is `side = "both"` but enforcement never
  trusts the client. (Map render is the only client-side piece.)
- **Soft-dep on the claim mods.** If MineColonies or OPAC is absent, the corresponding resolver no-ops
  rather than crashing — so the mod degrades instead of hard-failing. (In-pack both are always present.)
- **`aeronauticscompat`-style courtesy:** laws resolve by block position, so a moving Aeronautics ship is
  governed by whatever chunk it's over — acceptable; flag for playtest whether that feels right over
  contested borders.

---

_Refs: `docs/GOVERNANCE.md` (the scoping doc + path comparison this realizes); `docs/CUSTOM-MODS.md` (the
own-repo + mod-mirror pattern this mod follows); `docs/SYSTEMS.md` §3a (the event-driven/locality-bounded
perf doctrine); issue #260._
