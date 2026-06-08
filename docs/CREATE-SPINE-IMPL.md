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
| `kubejs/server_scripts/spine/10-locks.js` | #220 | Pattern A (route-exclusive lock) on the 2 exclusives; Pattern B (boss-fork helper) + the flagship aeronautics-core fork. |
| `kubejs/server_scripts/spine/20-power-ladder.js` | #145 | The rung gates + the generator converter-vs-free-source stance. |
| `kubejs/server_scripts/spine/30-cost-basics.js` | #219 | The 3× dial on core Create tier-1 fabricated items + the step-depth helper the content batches use. |
| `kubejs/server_scripts/tags/10-spine-tags.js` | #220 | `#derpack:boss_keys` (flat boss roster) + any spine tags. |
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
| **T4 Electric-high** | 5 reactor / nuclear | `create_new_age`, `createnuclear`, `aeronautics` | reactor multiblock, fusion, advanced energiser, pearlescent levitite; **digital control** (`create-aeroworks`, `aeronautics:smart_propeller`) | **boss fork** (any roster drop); colony bypass deferred | 2–3×; 5 stages + gate |

**Aeronautics control-complexity thread** (woven across tiers, per `CREATE-SPINE.md` 4a): T1 balloon →
T2 propelled/analog → T3 complex analog → T4 digital. The **boss fork sits at the T3→T4 jump**.

**T3–T4 mod spine** (per 4b): Additions = rung-4 converter under T3; TFMG (T3) → New Age (T4) via steel +
circuits + the coking→graphite carbon seam; Nuclear = T4 capstone on New Age (shared FE grid).

## 3. Patterns (#220)

- **Pattern A — route-exclusive lock.** `event.remove({ output, not: { mod: 'create' } })` — strip every
  non-Create recipe for the locked output. v0.7.0 slice: `create:precision_mechanism`, `create:electron_tube`.
- **Pattern B — boss fork.** Gated item requires a member of `#derpack:boss_keys` (flat roster — any boss
  works, no chokepoint). **consumed** for repeat components, **one-time key** for machine unlocks. Colony
  bypass is a deferred second route (not built in v0.7.0). Helper: `spineBossFork(event, output, recipeFn)`.

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
electric) → `createnuclear` (T4) → `aeronautics` (control ladder) → the long tail. Each batch: remove+replace
per `00-create-ify.js` patterns, target `#c:` tags, carry its own playtest sub-block on #234.

## 6. Playtest gates (foundation)

- Client boots; fresh world creates with no KubeJS load errors from the `spine/` scripts.
- `precision_mechanism` + `electron_tube` craft **only** via the Create line (JEI shows no alt recipe).
- The aeronautics-core fork shows a boss-key recipe in JEI; non-boss path is gone.
- Power: windmill bearing costs sail cloth; no free-source generator produces FE from nothing early.
- The 3×-dialed basics show the new cost in JEI and are still craftable.
