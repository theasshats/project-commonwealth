# The systems — how Derpack X interlocks

> **Status: accepted** (ratified by Xela112233 + zagwar, v0.6.0). This is the **canonical structural
> model** for the pack — it **replaces the old flat "five systems / five pillars" framing** (that phrasing
> is retired). The structure is a *causal loop*, not a list of peers:
> **scarcity → pressure → production → economy**, and back. The systems a mod can anchor to are
> **Create** and **Magic** (production), **Survival** (pressure), and **Economy** (distribution & trade) —
> with **logistics/aeronautics** as the Economy's physical movement arm, **scarcity** the foundation, and
> **MineColonies + boss drops** the cross-cutting production routes. Don't count systems; read the loop.
>
> **Much of the production/trade interlock below is design *intent*, not yet implemented** — the recipe
> cost model, locked exclusives, and boss/colony gating are targets the per-pillar feature work builds
> toward (tracked: #219 cost model, #220 KubeJS locking/gating, #221 economy tooling, #222 ecology).
> Flagged inline where it matters. The other docs (`docs/DESIGN.md`, `CLAUDE.md`, `docs/ROADMAP.md`,
> `docs/archive/RELEASE-CADENCE.md`, `docs/CONNECTIVITY.md`, `docs/archive/MODLIST-AUDIT.md`, `docs/RECIPES.md`,
> `docs/CURATION.md`) have been reconciled to this model.

---

## Design inspiration — Eco

The loop's north star is **[Eco](https://play.eco/)** (Strange Loop Games) — the collaborative-economy
survival game where a server of players must build a civilization together, **specialization is forced**
so nobody can do everything alone, and the **economy is player-run and necessary**, not decorative. The
ore-gen scarcity layer is already named the "Eco foundation" in `docs/ROADMAP.md` (Phase 1). What
Derpack borrows: *forced specialization → emergent interdependence → a real player economy*. Where it
reaches Eco's effect by different means (regional resource scarcity + locked production routes vs. Eco's
hard skill-point cap) and where it deliberately diverges (no civilization-wide deadline; no formal
governance) is called out inline and in **Open / unsettled**.

## The core loop

The pack isn't a list of parallel systems. It's one loop, and naming the parts is secondary to seeing
the flow:

```
   SCARCITY  ──drives──▶  PRESSURE  ──creates demand──▶  PRODUCTION  ──feeds──▶  ECONOMY
  (foundation)        (Survival + Danger)               (the makers)         (trade + logistics)
       ▲ ▲                                                    │                       │
       │ └──── production damages the world; scarcity worsens ◀┘                      │
       └────────────  goods are consumed & appetite grows; scarcity renews  ◀─────────┘
```

- **Scarcity** is the axiom — the premise everything else rests on.
- **Pressure** turns scarcity into moment-to-moment *demand* (you need things).
- **Production** makes the things — but no single route can make *everything*, by design — **and it has
  an ecological cost: industry damages the shared world, feeding back into scarcity and pressure** (§3a).
- **Economy** is the distribution stage: it moves **value** (trade — Numismatics/Trading Floor) **and
  matter** (its **logistics/aeronautics** arm), so the gaps in any one player's production get filled by
  trade. *(Distribution isn't a separate system — it **is** the economy.)*

The whole point: **nobody is self-sufficient**, so specialization and trade *emerge* from the mechanics
rather than being forced by an economy mod. (~10 players, ~3 needed to cover all production.) Unlike
Eco's civilization-wide common goal (the meteor deadline), the cooperation here is **bilateral trade
interdependence, not a shared win condition** — a persistent sandbox, by design (freshness comes from
content updates, not resets — `docs/DESIGN.md`).

---

## 1. Foundation — scarcity

Regional ore scarcity is the axiom: **no one region has everything.** Different areas hold different
ores, so where you settle decides what you can make and what you must trade for.

**Seasons is not its own system — it's a driver.** Serene Seasons feeds *two* things and is named in
neither as a pillar:

- it drives **scarcity** (seasonal crop/resource availability — what's growable *when*), and
- it drives **survival** (winter = cold pressure, below).

So "seasons" shows up as an *input* to scarcity and to survival, not as a standalone pillar.

---

## 2. Pressure — the world pushing back

Pressure's job is to **generate demand** — it's *why* anyone bothers to produce. No pressure → producers
make things nobody needs and the trade loop never turns. It has **two faces**:

- **Survival (environmental).** Temperature (Cold Sweat), hunger and **diet variety (a five-group
  nutrition system — Diet – AppleSeed Edition, replacing Spice of Life; see "Food: the diet system"
  below — a direct Eco parallel: Eco rewards varied nutrition with skill points; here diet variety is
  its own ongoing demand that pulls on farming/ranching/cooking production)**, the
  climate. *(Renamed from "Survival & seasons" → **Survival**, since seasons is now a driver, not a
  co-headline.)* Seasons feeds this — winter is cold pressure.
- **Danger (the hostile world).** The world is **dangerous to exist in and dangerous to explore** —
  hostile mobs, **bosses**, perilous structures and biomes. Danger pushes players to gear up (demand for
  the producers' output), to settle defensibly, and to travel in groups — and it makes the high-tier
  combat route (below) a real choice, not a free one.

Scarcity is itself the deepest pressure — it underlies both faces.

> **Bosses sit in two places at once** (like aeronautics is both a Create build *and* the economy's
> logistics arm): they're a *pressure* (the danger that drives demand and gear progression) **and** a
> *production route* (their high-tier drops — §3). That dual role is intentional, not a contradiction.

### Food: the diet system (replacing Spice of Life)

Diet variety is the food face of survival pressure. The pack moves **off Spice of Life** (currently two
overlapping diet mechanics — SoL: Classic Edition + SoL: Onion — which is itself redundant) onto **Diet –
AppleSeed Edition** (`diet-appleseed-edition`, Modrinth, 1.21.1/NeoForge) — the maintained successor of
the classic Diet mod. Why it fits:

- **It auto-derives nutrition from recipe ingredients**, so it covers the entire sprawling modlist
  *without* hand-tagging every food — decisive for a ~200-mod pack.
- A balanced diet grants buffs / an imbalanced one withholds them — the diet-variety *demand* that pulls
  on farming, ranching/hunting, and cooking production.

**Keep all five default groups** — Grains, Vegetables, Protein, Fruits, Sugars. (We considered pruning
to three, but AppleSeed's auto-calc is tied to its five fixed presets: disabling groups buys nothing
mechanically and custom labels would forfeit the auto-calc, so the five-group default is both richer
diet variety *and* zero-config.) Per-category buff/decay tuning, if any, is a later config pass — but
the mod is usable on defaults as-is.

---

## 3. Production — the makers (and why they don't overlap)

This is the engine of the whole economy: **each production route is deliberately non-overlapping, with
exclusive locked outputs, and base crafting is intentionally hard** — so the alternate routes are worth
using and no one route is self-sufficient.

| Route | What it is | Cost / access shape |
|---|---|---|
| **Create** | The universal tech spine; the deep, do-it-yourself path | Base recipes **intentionally harder / more expensive** — the slow, high-ceiling route |
| **MineColonies** | The alternate route, across **both tech *and* magic** | **Cheaper & faster for basics** (e.g. a mechanic's hut), **plus its own locked outputs** only a colony can produce |
| **Magic** | Ars Nouveau / Iron's Spellbooks / Occultism, bridged into one progression | Specialists hold **exclusive** reagents / components / enchants; **also partly reachable via MineColonies**, mirroring Create |
| **Bosses** | Combat route to **high-tier components** (also a *pressure* — §2) | Drops the high-tier parts that MineColonies can otherwise craft |

**The two forces that make trade necessary:**

1. **Hard base recipes + cheaper colony route.** Because raw Create crafting is expensive, a
   **MineColonies player produces basics cheaper and faster** — so even a tech player has a reason to
   buy basics from a colony player rather than grind them.
2. **Locked exclusives.** Each route (Create-tech, MineColonies, Magic) holds outputs **only it can
   make**. A Create master still *must* trade with a colony player or a magic specialist for their
   exclusives, and vice-versa.

**The cost model (settled).** Two dials, applied differently by tier:

- **Basics: ~3× cost.** Roughly triple the vanilla/naive cost for basic items — enough to make the
  cheaper MineColonies route worth using, without being punishing.
- **Higher tiers: more *steps*, not just more cost (GregTech-style).** Depth comes from **longer
  multi-step processing chains**, the way GregTech gates advancement behind stages — not from simply
  multiplying ingredient counts. A high-tier item should *take more process*, which is also where the
  Create spine, the colony route, and boss/colony gating naturally hang off.

> **Mechanism: KubeJS.** Both the **locking** of exclusives and the **progression gating** (Create tech
> behind colony progress / boss drops; the high-tier fork) are implemented in **KubeJS**, not a
> dedicated mod. The **lock list is defined incrementally** — each update's pillar work decides what that
> pillar locks, rather than authoring one big list upfront. (And each **mod-update pass** (#161) should
> include a refine step: re-check the updated content against this model.)

> **Locked exclusives are the load-bearing wall, because our specialization is *soft*.** Eco enforces
> specialization with a hard skill-point cap — you *cannot* learn everything. Derpack's interdependence
> is softer: scarcity + time make self-sufficiency *expensive*, but nothing stops a dedicated player (or
> a tight bloc) from eventually covering every route, at which point the trade loop **erodes**. Locked
> outputs are the closest thing to Eco's hard wall — the one mechanic that keeps interdependence from
> decaying as players scale. So they're not just one trade incentive among several; they're *the*
> anti-erosion device, and should be defended as such when tuning recipes.
>
> **Ruling: soft for now.** We accept soft specialization for the time being — it suits a ~10-person
> co-op group. **Revisit closer to release** if playtesting shows the loop erodes in practice (players
> going self-sufficient and trade drying up); if so, the lever to harden is the lock list, not a new
> mechanic.

**The high-tier fork.** Top-end items require *either* a **boss drop** *or* a **MineColonies-crafted
part** — two routes to the same goods. Worked example: a **high-tier Aeronautics controller** needs a
boss drop **unless** you craft it through MineColonies. So the **fighter** and the **settlement-builder**
are two playstyles reaching the same high-tier ceiling, while the Create-purist trades for either. (All
design intent — the recipe/gating work to realize it is future.)

**MineColonies is a first-class production route, not a rival to disable.** It's the cheap-basics +
locked-exclusives node that the trade web hangs on. Earlier framing treated it as "a rival economy" — it
is the opposite: the thing that *makes* the economy turn.

### 3a. Production has an ecological cost (adopted — Eco's signature mechanic)

> **Decision: adopted.** Production damages the shared world. This is the one big Eco idea the loop was
> missing, and it's in.

The pure extract-and-build loop has no downside for the world; Eco's core insight is that **industry
should cost the commons.** So Create-scale production carries an **ecological footprint** that feeds back
into the loop's left side:

- **It worsens scarcity.** Heavy extraction degrades the local environment, so over-mining a region
  doesn't just deplete *your* stock (§5) — it makes the *shared* resource situation worse, turning
  scarcity from a static map fact into a **dynamic** one the players themselves drive.
- **It feeds pressure.** Industrial output can push the survival layer — e.g. pollution raising local
  temperature into Cold Sweat's range, fouling water/crops — so the more you industrialize, the harder
  the world pushes back.
- **It creates a real Create-vs-world tension** and a *collective* cost: one player's mega-factory is
  everyone's problem, which is itself another pull toward specialization and restraint (and a natural
  hook for the economy — clean-up, remediation, or "green" production as tradeable value).

This closes the loop tightly: **PRODUCTION → SCARCITY/PRESSURE** is now a direct edge, not only the
indirect consumption edge.

**Implementation is open, and it is hard — two specific blockers, not just "no mod exists":**

1. **An infinite world defeats naive enforcement.** Eco's ecology bites because the map is *bounded* — a
   finite world means finite forests and finite clean air, so damage matters. Minecraft is effectively
   infinite: a player who exhausts/pollutes one region just moves on, and the "shared commons" never
   actually runs out. So the mechanic only has teeth if it's tied to something players *can't* outrun —
   **their own claimed/settled area, their colony's footprint, or per-chunk state near bases** — not a
   global resource. Damage has to follow the player's *investment*, not the whole world.
2. **It's TPS-heavy.** Per-chunk extraction/pollution tracking, decay ticks, and feedback into
   Serene Seasons / Cold Sweat / crop or mob behavior is exactly the kind of always-on world-scanning
   that costs server tick — and perf is already the pack's tightest budget (the stabilization-even
   versions exist for this). Any design has to be **event-driven and locality-bounded** (fire on
   place/break/process near a base, not a global sweep) to be affordable.

So this is likely **custom KubeJS/datapack** work scoped to settled/claimed areas, event-driven, cheap
per-tick. **The mechanic is adopted; the *how* is genuinely unsolved** — the infinite-world and TPS
constraints above are the design problem to crack before it's built, and it may end up scoped down to
"your colony/claim degrades its surroundings" rather than world-wide ecology.

---

## 4. Economy — distribution & trade (it moves value *and* matter)

The distribution stage **is** the economy: the one system that moves things between players, closing the
gaps that exclusivity opens. It has two arms:

- **Trade — moves *value*.** Numismatics + Trading Floor + bounties. **No longer "optional flavor":** it's
  the *necessary consequence* of production exclusivity. Because no route makes everything and base
  crafting is hard, players must exchange — the economy is the layer that exchange runs on. Scarcity →
  pressure → exclusive production → **trade**. *(The hard part — dynamic pricing and Eco-style
  player-minted currencies — is unsolved; see "Open / unsettled.")*
- **Logistics / aeronautics — moves *matter & reach*.** Create Aeronautics ships, trains, drones: the
  economy's **physical movement arm**. It's *built and powered through Create* (so it doubles as a Create
  build) but its *role in the loop* is distribution — it's how goods physically get to where they're
  traded and used. It's also the part that most **threatens the scarcity foundation** — cheap flight
  collapses the distance that makes regions specialize — so it carries its own **balance lens** (keep
  travel meaningful; don't let logistics erase regional scarcity — §5).

> **Why aeronautics folds in here.** It used to be framed as a co-equal "connector" beside the economy;
> it's cleaner as the economy's logistics arm — distribution of *matter* serving the same trade loop as
> distribution of *value*. It keeps its own **build milestone** (flagship content; folded into the
> Economy pillar — v0.9.0), but it isn't a separate top-level system.

---

## 5. Closing the loop — the economy relieves scarcity, it doesn't end it

The return arrow is the load-bearing part, and it's easy to get wrong: if the economy *solved* scarcity
the loop would run once and stop (everyone self-sufficient, no more trade). It doesn't, for three
reasons:

- **Trade redistributes scarcity; it never creates the missing resource.** Moving goods between regions
  doesn't put ore where there is none — a region still *lacks what it lacks*, so the dependency persists.
  Distribution makes scarcity **survivable**, not **solved**: you keep needing to buy what you can't
  make, which is exactly what keeps the trade loop turning.
- **Consumption draws goods back down.** Goods don't accumulate forever — they're *spent* against
  pressure: eaten, worn out, lost on death, burned as fuel (airships, machines), sunk into builds and
  colony upkeep. Finite regional inputs keep getting consumed, so the demand never zeroes out.
- **Growth renews scarcity one tier up.** As players scale (bigger colonies, fleets, high-tier gear)
  their appetite grows and pushes them into farther, **more dangerous and scarcer** frontiers — new
  scarcity *and* new danger-pressure. The loop re-opens at a higher tier rather than closing.

**The balance constraint this implies (the logistics lens).** The economy must **relieve scarcity
locally without erasing it globally.** The failure mode is cheap, frictionless logistics — especially
aeronautics — making *everything* reachable by *everyone*: that collapses regional specialization, makes
players self-sufficient, and breaks the loop. So the logistics arm is tuned to *bridge* distance at a
cost, never to *annihilate* it. Keep travel and trade meaningful; if the map stops mattering, the whole
machine stops.

---

## 6. What this means for mod fit (curation)

Every mod still has to anchor *somewhere in this loop* — the `docs/CURATION.md` rubric, restated against
the loop. A mod anchors to one of the four systems (or a sanctioned support role):

- **Survival** (pressure) — environmental (Cold Sweat / diet / seasons) or danger (hostile mobs, bosses,
  perilous exploration), or
- **Create** or **Magic** (production) — a producer, a producer's **exclusive output**, or an **alternate
  route** into one (the MineColonies or boss-drop routes), or
- **Economy** (distribution & trade) — a trade/currency/bounty mechanic, **or logistics/aeronautics** (the
  movement arm), or
- a sanctioned **support role** (library/API, performance, QoL, decoration palette, curated flavor).

Anchors to **nothing** → cut. The target is still **two** anchors — and the loop makes the natural pair
obvious: a healthy mod is usually *something you produce that pressure demands and the economy moves.*

---

## Open / unsettled

- **Naming & count — settled: drop the "five systems" framing.** The pack is the **loop**, not a flat
  count. A mod anchors to one of four systems — **Create, Magic** (production), **Survival** (pressure),
  **Economy** (distribution & trade) — with **scarcity** the foundation, **MineColonies + boss drops** the
  cross-cutting production routes, and **logistics/aeronautics** the economy's movement arm. (Pressure has
  two faces — Survival and Danger — and bosses double as a production route, so the parts deliberately
  don't partition into a tidy number; that's why the loop, not the count, is the framing.)
- **Bosses — settled as dual-role.** They're *both* a pressure (the dangerous world — §2) and a
  high-tier production route (§3), the same way aeronautics is both a Create build and the economy's
  logistics arm. Not a contradiction; the loop allows a thing to occupy two slots.
- **Ecological / production-consequence pressure — ADOPTED in principle, *how* unsolved (§3a).** Eco's
  signature mechanic (industry damages the shared world) is **in** as a goal, but two hard blockers stand
  in the way and need cracking before it's built: **(a) an infinite world** — players just move on, so
  damage must follow their *settled/claimed footprint*, not a global commons; and **(b) TPS** — it must
  be event-driven and locality-bounded, never a global world-scan. May end up scoped down to "your
  colony/claim degrades its surroundings." Likely custom KubeJS/datapack; no drop-in mod exists.
- **Dynamic pricing + player-minted currency — the economy's hard problem (DEFERRED to v0.9.0).** A real
  economy needs **dynamic prices** (supply/demand, not flat vendors) and, Eco-style, **players minting
  their own currencies** — *how* players mint and others come to trust/accept a currency is a
  social-mechanic problem MC doesn't hand us. We have *some levers* now (Numismatics for Create-minted
  coinage, Trading Floor for stalls/orders) but **the tooling is an unknown**: what's achievable with
  current mods vs. what needs custom work will be **determined when the Economy pillar (v0.9.0) is
  built**, not now.
- **Formal governance/laws layer — REOPENED (under consideration, v0.9.0).** Earlier this was ruled out
  ("no formal governance — a deliberate divergence from Eco for a small PvPvE group"); that was
  *unsettled*, and #260 reopens it. A player-driven hierarchical governance system (municipalities →
  counties/kingdoms/empires, cascading laws, entity-minted currency, layered on MineColonies/claims) is
  now a candidate Economy-pillar project, with a Survival second weave. **Scoped in `docs/GOVERNANCE.md`**
  (survey + implementation paths). Not yet accepted as a committed feature; the *whether* and the *how*
  are open. This supersedes the earlier "no governance" divergence — that framing is retired.
- **Diet — settled (keep all five).** Diet – AppleSeed Edition is in the modlist (replacing SoL) and
  runs on its **default five groups** (no pruning config) — see "Food." Only optional per-category buff/
  decay tuning remains, and it's usable as-is.
- **Weather as a survival-pressure addition — considered, not committed.** Dynamic/severe weather would
  enrich the Survival face (storms, exposure), but it's **another TPS hit** (weather sim + effects), so
  it competes against the perf budget the same way ecology does. Park it as a *nice-to-have* pending a
  perf-cost assessment, not a planned add.

### Settled this pass (recipe/gating spine)

- **Recipe cost — settled (§3).** Basics ~**3×**; higher tiers gain depth through **more steps**
  (GregTech-style chains), not multiplied cost.
- **Locking + gating mechanism — settled: KubeJS (§3).** Both locked exclusives and progression gating
  (colony/boss, the high-tier fork) are KubeJS. No dedicated mod.
- **Lock list — incremental, per feature milestone.** Defined as each **feature pillar (v0.7.0, v0.9.0,
  …)** is built — that pillar's content is refined against this model and its locks decided then, not
  authored upfront. (The mod-update pass #161 feeds candidates in.)
- **Soft specialization — accepted for now (§3), revisit near release** via playtest; the hardening
  lever, if needed, is the lock list.

---

_Refs: `docs/DESIGN.md` (the goal this refines), `docs/CURATION.md` (the rubric that scores against
this loop), `docs/RECIPES.md` (recipe philosophy — balance > theme > cost), `docs/CONNECTIVITY.md` (the
web the loop should read as), `docs/archive/RELEASE-CADENCE.md` (when the weave/curation work runs)._
