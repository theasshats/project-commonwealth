# Create spine — implementation reference (Phase 3 foundation)

> The build-side companion to `docs/CREATE-SPINE.md` (the ratified design). This is the **action plan +
> living reference** for the Phase 3 *foundation*: the tier trees, the cost engine, the lock/fork
> patterns, and the power ladder. Tracks #219/#220/#145/#92. Player-facing version: `docs/wiki/create-progression.md`.

> **Status: FOUNDATION COMPLETE — draft, playtest-gated.** The structural foundation is authored: tier
> trees, Pattern A/B locks, the **complete** boss roster, the **resolved** generator audit (free-source
> solar cost-gated), the root cost dial (`andesite_alloy` ~3×), and the **flagship** aeronautics-core fork.
> What remains is the per-mod **content** tail — applying the dials across all addons (§5) — which is *not*
> the foundation. Nothing here is verified in-game (CI only parses); stays draft on #234 until playtest.

## 1. Files (this foundation)

| File | Issue | Role |
|---|---|---|
| `kubejs/server_scripts/spine/00-tiers.js` | — | The **tier trees** as a shared data object (`global.SPINE`); console summary on load; changes no recipes itself. |
| `kubejs/server_scripts/spine/10-locks.js` | #220 | Pattern A (route-exclusive lock) on the 2 exclusives. |
| `kubejs/server_scripts/spine/40-gates.js` | #92/#220 | The **complete tier-gate ladder** — Pattern B boss gates at every tier, one data-driven table (`global.SPINE_GATES`). |
| `kubejs/server_scripts/spine/20-power-ladder.js` | #145 | The rung gates + the generator converter-vs-free-source stance. |
| `kubejs/server_scripts/spine/30-cost-basics.js` | #219 | The 3× dial on core Create tier-1 fabricated items + the step-depth helper the content batches use. |
| `kubejs/server_scripts/spine/05-tags.js` | #220 | `#pcmc:boss_keys` (flat boss roster, reserved) + `#pcmc:mowzies_mid` (in use). |
| `docs/wiki/create-progression.md` | — | Player-facing progression guide. |

Loads alongside the existing `00-create-ify.js` overhaul hub (the pattern templates there feed the
per-mod content batches). Convention reference: `docs/RECIPES.md`.

## 2. The tier trees (authoritative)

The single source of truth for "what tier is X, how is it gated, what does it cost." Mirrored in
`00-tiers.js` as `global.SPINE.tiers`. Power rungs map to `CREATE-SPINE.md` Part 1.

| Tier | Power rung | Anchor mods | Defining items / families | Gate (entry) | Cost target |
|---|---|---|---|---|---|
| **T0 Manual** | 0 hand crank | `create` | andesite alloy, shafts, cogs, iron/copper sheet, andesite casing | none (bootstrap) | 3× basics |
| **T1 Water/Wind** | 1–2 water wheel / windmill | `create`, `createaddition`, `gnkinetics` | brass + brass casing, electron tube, zinc sheet, brass gear; **basic hot-air balloon** (`aeronautics:adjustable_burner` + envelope) | windmill: sail cloth + windmill bearing | 3× basics; 2 stages |
| **T2 Steam** | 3 steam engine | `create`, `tfmg`, `create_ironworks`, `gnkinetics` | precision mechanism, steel, heavy casing, industrial gear, circuit T1; **propelled balloon + analog control** (`create_tweaked_controllers`) | steam fluid/heat chain (inherent) | 2–3×; 3 stages |
| **T3 Electric-low** | 4 alternator/electric | `tfmg`, `createaddition`, `create_new_age`, `gnkinetics` | TFMG circuit ladder (etched/coated), capacitor, energiser, electric motor, planetary gear; **complex analog control** (`aeronautics:gyroscopic_propeller_bearing`) | electric **needs rung-3 kinetic** to drive | 2–3×; 4 stages |
| **T4 Electric-high** | 5 reactor | `create_new_age`, `aeronautics`, `createoreexcavation` | reactor multiblock + ignitium-sheathed rods, advanced energiser, pearlescent levitite, the vein-drilling machine (end-game sink); **digital control** (`create-aeroworks`, `aeronautics:smart_propeller`) | **boss fork** — ignitium → `reactor_rod`, cursium → the netherite jetpacks; colony bypass deferred (#220) | 2–3×; 5 stages + gate |

**Aeronautics control-complexity thread** (woven across tiers, per `CREATE-SPINE.md` 4a): T1 balloon →
T2 propelled/analog → T3 complex analog → T4 digital. The **boss fork sits at the T3→T4 jump**.

**T3–T4 mod spine** (per 4b): Additions = rung-4 converter under T3; TFMG (T3) → New Age (T4) via steel +
circuits (no graphite seam — that premise was wrong, see §9). _Create: Nuclear cut for 1.0 (#289); the T4
capstone is New Age's ignitium-gated `reactor_rod`._

## 3. Patterns (#220)

- **Pattern A — route-exclusive lock.** `event.remove({ output, not: { mod: 'create' } })` — strip every
  non-Create recipe for the locked output. v0.7.0 slice: `create:precision_mechanism`, `create:electron_tube`.
- **Pattern B — boss fork.** Gated item is re-recipe'd to require a boss drop. _As implemented_
  (`40-gates.js`): thematic **per-tier drops** (ancient_metal → cursium → ignitium ascend Cataclysm;
  `#pcmc:mowzies_mid` is the one band-tag gate) — "no chokepoint" holds **across** the ladder, not within
  each gate. The flat `#pcmc:boss_keys` roster stays registered for future *generic* gates (colony fork,
  #220). **Consumed** for repeat components, **one-time key** for machine unlocks. Colony bypass is a
  deferred second route (not built in v0.7.0).

## 4. Power ladder (#145)

- Rungs 0–1 stay cheap (bootstrap). Rung 2 (windmill) gated by sail cloth + windmill bearing. Rung 3
  (steam) gated by its inherent fluid/heat chain — no extra lock. Rung 4 (electric) gated by **needing
  rung-3 kinetic to drive** (no double-tax). Rung 5 behind the boss fork.
- **Generator audit — RESOLVED** (`20-power-ladder.js`): converters preserved (`createaddition:alternator`,
  New Age `basic/advanced/reinforced_motor` + `generator_coil`, `createnuclear:reactor_controller`); the two
  free-source items (`create_new_age:basic/advanced_solar_heating_plate`) are **cost-gated** behind
  electron_tube / capacitor — the settled stance (cost-gate, not re-recipe) — so solar isn't early free power.

## 5. Per-mod cost application — staged (the content tail)

The exhaustive 3×-basics + step-depth application across all Create addons is **defined by the trees** and
authored in reviewable batches, one sibling file per mod-family, after this foundation. Batch order
(highest-value first): `create` basics → `tfmg` (T3 industrial) → `createaddition`/`create_new_age` (T3–T4
electric) → ~~`createnuclear` (T4)~~ _(cut, #289)_ → `aeronautics` (control ladder) → the long tail
_(the §4/§5 integrated mods — lowheated/excavation/create_sa/treadmill — carried their dials in
`20-power-ladder` / `55-weave-excavation` / `56-weave-stuff-additions`)_. Each batch: remove+replace
per `00-create-ify.js` patterns, target `#c:` tags, carry its own playtest sub-block on #234.

## 6. Playtest gates (foundation)

- Client boots; fresh world creates with no KubeJS load errors from the `spine/` scripts.
- `precision_mechanism` + `electron_tube` craft **only** via the Create line (JEI shows no alt recipe).
- The aeronautics-core fork shows a boss-key recipe in JEI; non-boss path is gone.
- Power: windmill bearing costs sail cloth; no free-source generator produces FE from nothing early.
- The 3×-dialed basics show the new cost in JEI and are still craftable.

## 7. Boss progression — drop-placement reference

Rough difficulty ordering per mod, so boss drops map to tiers. **The flat `#pcmc:boss_keys` tag suits a
generic "beat a boss" gate, but it mixes early drops with endgame ones — so a *tiered* fork must pick a
specific tier-appropriate drop from this table, not the flat tag.** (D1 uses ignitium = T4; D2 uses
cursium = T3.)

### L_Ender's Cataclysm — the premier boss-gate mod (spans T2→T4)
Structure-gated bosses, a clear endgame ramp. Rough order: Netherite Monstrosity → Ender Guardian →
Harbinger → Leviathan → Ancient Remnant → Maledictus → Scylla → **Ignis** (hardest, "boss of all bosses").

| Boss | Structure | Signature drop | Suggested tier |
|---|---|---|---|
| Netherite Monstrosity | (entry boss) | `monstrous_horn` | T2–T3 |
| Ender Guardian | End gateway | `void_core` | T3 |
| The Harbinger | underground | `witherite_ingot` | T3 |
| Maledictus | Frosted Prison | `cursium_ingot` | T3 |
| Scylla / storm | ocean/storm | `essence_of_the_storm` | T3–T4 |
| **Ignis** | Burning Arena | `ignitium_ingot` | **T4 (endgame)** |

### Mowzie's Mobs — mid-tier ability bosses (T2→T3)
| Boss | Drop | Tier |
|---|---|---|
| Ferrous Wroughtnaut (iron-accessible, first) | `earthrend_gauntlet` (assoc.) | T2 |
| Frostmaw (snowy) | `ice_crystal` | T2–T3 |
| Umvuthi / Sculptor (late) | — | T3 |

### Born in Chaos — EARLY accessible minibosses (T1→T2)
Spawn naturally after a few in-game days and scale with world age; the skulls are a 5% drop — easy-ish.
**⚠️ Early-tier — do not place these on high-tier gates.**
| Miniboss | Appears | Drop | Tier |
|---|---|---|---|
| Lifestealer | 10th night | `lifestealer_skull` | T1–T2 |
| Nightmare Stalker | ~day 3 (scales to day 100) | `nightmare_stalker_skull` | T1–T2 |

### Grimoire of Gaia — elite-mob drops, FARMABLE (T2–T3, weak gate)
Gaia mobs spawn in the world (not one-time bosses), so their drops are grindable — better as **consumed
component** gates than one-time keys. `rotten_heart` is a common drop (a food item — borderline too common
to gate with); `fireshard` from fire-themed mobs is a better pick.

### Suggested tier → drop palette for future forks
- **T1–T2 gate:** Born in Chaos `lifestealer_skull` / `nightmare_stalker_skull`.
- **T2–T3 gate:** Mowzie's `ice_crystal`; Cataclysm `monstrous_horn` / `witherite_ingot` / `cursium_ingot`.
- **T3–T4 gate:** Cataclysm `essence_of_the_storm`.
- **T4 gate:** Cataclysm `ignitium_ingot`.

## 8. The complete tier-gate ladder (`40-gates.js`)

A gate at **every** tier transition — the tier-key item re-recipe'd to require a tier-matched drop. One
data-driven table (`global.SPINE_GATES`) so the whole ladder is reviewable/tweakable in one place.

| Tier | Gated item | Required drop | Source boss | Rationale |
|---|---|---|---|---|
| **T3** | `create_new_age:reinforced_energiser` | `#pcmc:mowzies_mid` (Frostmaw/Sculptor) | Mowzie's mid bosses | Any Frostmaw-equivalent Mowzie's boss. Gates **advanced** electric; basic alternator stays kinetic-gated (per spec). |
| **T3** | `aeronautics:gyroscopic_propeller_bearing` | `cataclysm:ancient_metal_ingot` | Ancient Remnant (mid) | Flagship ship-core fork. |
| **T4** | `create_jetpack:netherite_jetpack` | `cataclysm:cursium_ingot` | Maledictus (mid–late) | Jetpack gate — through the Crafter; the remove also wipes the mod's netherite_upgrade smithing bypasses. _(#87: create_sa's parallel jetpacks are disabled in `57-jetpacks.js`; the base `create_jetpack:jetpack` is costed early-T3 with a capacitor.)_ |
| **T4** | `create_new_age:reactor_rod` | `cataclysm:ignitium_ingot` | Ignis (endgame) | Reactor capstone — repointed from the cut `createnuclear:reactor_core`; the one mandatory reactor part `52-weave` doesn't touch. |

_T1 + T2 boss gates **pulled** — early tiers are cost/scarcity-gated per the lineage; bosses start at T3. Ascending Cataclysm gate: ancient_metal (mid) → cursium (mid–late) → ignitium (endgame)._

> **⚠️ This EXTENDS the ratified ladder.** `CREATE-SPINE.md` gated bosses only at T4; this adds T1–T3
> exploration gates per the "force players out" direction. **Pending sign-off** — if rejected, trim the
> table to the T4 rows. Safety rails: water-wheel power is ungated, and every recipe grid is a tunable
> placeholder. If a gate feels wrong, edit/delete its one row in `SPINE_GATES`.

**Drops used, by mod:** Mowzie's (T3 advanced electric) · Cataclysm (T3 ship core `ancient_metal` → T4
jetpacks `cursium` (both mods') → T4 reactor rods `ignitium`). Grimoire + Born in Chaos drops now sit only
in the flat `#pcmc:boss_keys` roster for future generic gates (their early-tier gates were pulled).

## 9. Cross-tier recipe chains — the lineage (`50-cross-tier.js`)

Weaving the T3–T4 addon spine so tiers flow into each other. **Two design corrections** the recipe dumps
forced (spec Part 4b updated):
- **No graphite seam.** New Age has *no* graphite and no "energising→graphite" recipe. _(The graphite
  chain that did exist was Nuclear-internal and left with the Create: Nuclear cut, #289.)_
- ~~**Nuclear↔TFMG already linked**~~ _(historical — Nuclear cut; its steel seam went with it.)_

**Built now (safe, additive):**
- **Aeronautics analog→digital** — `aeronautics:smart_propeller` re-recipe'd to require `aeroworks:mechanical_servo`, so digital flight genuinely needs create-aeroworks (T4) on top of the T3 analog `gyroscopic_mechanism`.
- **Additions↔TFMG spool bridge** — 1:1 `tfmg:copper_spool` ⟷ `createaddition:copper_spool`, connecting the two electric ecosystems without re-authoring any machine.
- **TFMG→New Age** — `create_new_age:advanced_energiser` now requires a `tfmg:etched_circuit_board`, so New Age's T4 tier depends on the T3 TFMG circuit ladder (real grid from the recipe dump).

**Staged → status after the §2/§4/§5 batch:**
- **TFMG→New Age:** ✅ DONE — `52-weave-tfmg-newage.js` re-recipes `reactor_casing` (steel-plate deploy) +
  the reactor parts/motors/coil/magnet; `50-cross-tier.js` did `advanced_energiser` (etched circuit).
- **Additions→TFMG (hard):** ✅ DONE — `51-weave-additions-tfmg.js` re-authors the sequenced
  `tfmg:electric_motor` with a `createaddition:capacitor` deploy stage (native assembly preserved; the
  added stage brings the motor to T3's 5-stage step-depth target). No staged spine seams remain.

**Real ingredient reference (from dumps; updated post-cut):**
- `create_new_age:advanced_energiser` = `basic_energiser` + `overcharged_gold` + `lightning_rod` (+ the woven `tfmg:etched_circuit_board`).
- `create_new_age:reactor_casing` = sequenced on `incomplete_reactor_casing` from `c:plates/steel` (woven; was iron) + `bricks`.
- `create_new_age:reactor_rod` = 5×4 mechanical_crafting: `reactor_casing` + `reactor_glass` + `nuclear_fuel` + gold plates, 2× out — the gate swaps the two band-center plates for `cataclysm:ignitium_ingot` (`40-gates.js`).
- `tfmg:electric_motor` = sequenced from `tfmg:copper_spool` + `magnet` + `nickel_sheet` + `steel_casing` + `steel_mechanism` + `winding` + `create:shaft`.
- ~~`createnuclear:reactor_core`~~ _(mod cut, #289)._
- `create_new_age:reactor_controller` — **answered:** no such recipe exists in the live dump; the reactor has no controller block. The capstone part is `reactor_rod`.
