# The systems — how Derpack X interlocks

> **Status: workshop draft.** This is the successor to the "five systems / five pillars" framing in
> `docs/DESIGN.md`. We're defining the pack's structure concretely — as a *causal loop*, not a flat list
> of peers. It may still resolve to ~five named systems, but the structure comes first and the count
> falls out of it. **Much of the production/trade interlock below is design *intent*, not yet
> implemented** — recipe difficulty, locked outputs, and boss/colony gating are targets the recipe and
> progression work (#17, #18, weave) build toward. Flagged inline where it matters.
>
> Other docs (`CLAUDE.md`, `docs/ROADMAP.md`, `docs/RELEASE-CADENCE.md`, `docs/CONNECTIVITY.md`,
> `docs/MODLIST-AUDIT.md`, `docs/CURATION.md`) still use "five systems" language — reconciling them to
> this model is **follow-up work**, not done here.

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

The pack isn't five parallel things. It's one loop, and naming the parts is secondary to seeing the
flow:

```
   SCARCITY  ──drives──▶  PRESSURE  ──creates demand──▶  PRODUCTION  ──feeds──▶  DISTRIBUTION
  (foundation)        (Survival + Danger)               (the makers)            (the movers)
       ▲ ▲                                                    │                         │
       │ └──── production damages the world; scarcity worsens ◀┘                        │
       └─────────────  goods are consumed & appetite grows; scarcity renews  ◀──────────┘
```

- **Scarcity** is the axiom — the premise everything else rests on.
- **Pressure** turns scarcity into moment-to-moment *demand* (you need things).
- **Production** makes the things — but no single route can make *everything*, by design — **and it has
  an ecological cost: industry damages the shared world, feeding back into scarcity and pressure** (§3a).
- **Distribution** moves value and matter between players, so the gaps in any one player's production
  get filled by trade.

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

> **Bosses sit in two places at once** (like aeronautics straddles production and distribution): they're
> a *pressure* (the danger that drives demand and gear progression) **and** a *production route* (their
> high-tier drops — §3). That dual role is intentional, not a contradiction.

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

> **Locked exclusives are the load-bearing wall, because our specialization is *soft*.** Eco enforces
> specialization with a hard skill-point cap — you *cannot* learn everything. Derpack's interdependence
> is softer: scarcity + time make self-sufficiency *expensive*, but nothing stops a dedicated player (or
> a tight bloc) from eventually covering every route, at which point the trade loop **erodes**. Locked
> outputs are the closest thing to Eco's hard wall — the one mechanic that keeps interdependence from
> decaying as players scale. So they're not just one trade incentive among several; they're *the*
> anti-erosion device, and should be defended as such when tuning recipes.

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

## 4. Distribution — the movers

The two systems that move things between players, closing the gaps that exclusivity opens:

- **Economy — moves *value*.** Numismatics + Trading Floor + bounties. **No longer "optional flavor":**
  it's the *necessary consequence* of production exclusivity. Because no route makes everything and base
  crafting is hard, players must exchange — economy is the layer that exchange runs on. Scarcity →
  pressure → exclusive production → **trade**. *(The hard part — dynamic pricing and Eco-style
  player-minted currencies — is unsolved; see "Open / unsettled.")*
- **Aeronautics & logistics — moves *matter & reach*.** Create Aeronautics ships, trains, drones. A
  **producer⇄connector hybrid**: it's *built and powered through Create* (a producer output), but it
  *functions* as the distribution network for matter. It's also the system that most **threatens the
  scarcity foundation** — cheap flight collapses the distance that makes regions specialize — so it
  carries its own dedicated balance lens (keep travel meaningful, don't let logistics erase regional
  scarcity).

---

## 5. Closing the loop — distribution relieves scarcity, it doesn't end it

The return arrow is the load-bearing part, and it's easy to get wrong: if distribution *solved* scarcity
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

**The balance constraint this implies (the aeronautics lens).** Distribution must **relieve scarcity
locally without erasing it globally.** The failure mode is cheap, frictionless logistics — especially
aeronautics — making *everything* reachable by *everyone*: that collapses regional specialization, makes
players self-sufficient, and breaks the loop. So the connectors are tuned to *bridge* distance at a
cost, never to *annihilate* it. Keep travel and trade meaningful; if the map stops mattering, the whole
machine stops.

---

## 6. What this means for mod fit (curation)

Every mod still has to anchor *somewhere in this loop* — the `docs/CURATION.md` rubric, restated against
the loop instead of "five systems":

- a **pressure** source — environmental (survival/seasons/scarcity) or danger (hostile mobs, bosses,
  perilous exploration), or
- a **producer**, a producer's **exclusive output**, or an **alternate route** into one (Create /
  MineColonies / Magic / boss drops), or
- a **connector** (economy or aeronautics/logistics), or
- a sanctioned **support role** (library/API, performance, QoL, decoration palette, curated flavor).

Anchors to **nothing** → cut. The target is still **two** anchors — and the loop makes the natural pair
obvious: a healthy mod is usually *something you produce that pressure demands and a connector moves.*

---

## Open / unsettled

- **Naming & count.** Whether DESIGN leads with this loop or keeps "five systems" as familiar branding
  layered on top is undecided. The distinct parts here are: scarcity (foundation), Survival (pressure),
  four producers (Create / MineColonies / Magic / bosses), two connectors (economy / aeronautics) — so
  it's *not* a clean five, and forcing the count back to five would hide the structure. (Pressure
  itself has two faces — Survival and Danger — and bosses double as a producer, so the parts don't
  partition cleanly.)
- **Bosses — settled as dual-role.** They're *both* a pressure (the dangerous world — §2) and a
  high-tier production route (§3), the same way aeronautics straddles production and distribution. Not a
  contradiction; the loop allows a thing to occupy two slots.
- **Ecological / production-consequence pressure — ADOPTED in principle, *how* unsolved (§3a).** Eco's
  signature mechanic (industry damages the shared world) is **in** as a goal, but two hard blockers stand
  in the way and need cracking before it's built: **(a) an infinite world** — players just move on, so
  damage must follow their *settled/claimed footprint*, not a global commons; and **(b) TPS** — it must
  be event-driven and locality-bounded, never a global world-scan. May end up scoped down to "your
  colony/claim degrades its surroundings." Likely custom KubeJS/datapack; no drop-in mod exists.
- **Dynamic pricing + player-minted currency — the economy's hard problem (unsolved).** A real economy
  needs **dynamic prices** (supply/demand, not flat vendors) and, Eco-style, **players minting their own
  currencies**. We have *some levers* in the current mods (Numismatics for Create-minted coinage,
  Trading Floor for stalls/orders), but a refined, well-made version is genuinely tricky — *how* players
  mint and others come to trust/accept a currency is a social-mechanic design problem MC doesn't hand
  us. **Needs a dedicated design pass** (what's possible with current mods vs. what needs custom work).
  (No formal governance/laws layer is planned — a deliberate divergence for a small PvPvE group.)
- **Diet — settled (keep all five).** Diet – AppleSeed Edition is in the modlist (replacing SoL) and
  runs on its **default five groups** (no pruning config) — see "Food." Only optional per-category buff/
  decay tuning remains, and it's usable as-is.
- **Weather as a survival-pressure addition — considered, not committed.** Dynamic/severe weather would
  enrich the Survival face (storms, exposure), but it's **another TPS hit** (weather sim + effects), so
  it competes against the perf budget the same way ecology does. Park it as a *nice-to-have* pending a
  perf-cost assessment, not a planned add.
- **Implementation gap.** The recipe-difficulty rebalance, the MineColonies locked-outputs / cheaper-
  basics tuning, and boss/colony high-tier gating are all **design intent** — the issues/work to build
  them aren't scoped yet.

---

_Refs: `docs/DESIGN.md` (the goal this refines), `docs/CURATION.md` (the rubric that scores against
this loop), `docs/RECIPES.md` (recipe philosophy — balance > theme > cost), `docs/CONNECTIVITY.md` (the
web the loop should read as), `docs/RELEASE-CADENCE.md` (when the weave/curation work runs)._
