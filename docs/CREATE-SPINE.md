# The Create spine — design spec (v0.7.0)

> **Status: PROPOSED — pending @zagwar sign-off.** This is the design draft for the v0.7.0 "Create
> spine" milestone. It turns the *intent* in `docs/SYSTEMS.md` §3 into concrete, buildable definitions
> for three settled-but-unspecified questions:
>
> 1. **The kinetic/electric power tier ladder** (#145)
> 2. **The recipe cost model** — the concrete "3×" baseline + the step-depth ladder (#219)
> 3. **The KubeJS locking + gating patterns**, and the **Create-spine lock list** (#220, #92)
>
> Nothing here is implemented yet. The point is to settle the *numbers and lists* so the implementation
> PRs that follow are mechanical. Where a value is a genuine judgement call, it's flagged **⚖️ decision**
> so @zagwar can weigh in directly. Once ratified, this doc becomes the spec the #145/#219/#220/#92 PRs
> build against, and the disputed values move from "proposed" to "settled."
>
> **Phase 1 working session (Xela + zagwar) — RATIFIED.** The cost model, the power-ladder pacing, the
> boss-gate roster, the T3–T4 mod spine, the aeronautics control-complexity ladder, and the
> MineColonies-deferral below are settled. **Part 4** captures the session's additions; the open-decisions
> table at the foot is marked resolved. Implementation (the #145/#219/#220/#92 + aeronautics PRs) is the
> remaining work.

Grounds against: `docs/SYSTEMS.md` §3 (the loop), `docs/RECIPES.md` (balance > theme > cost),
`docs/CONNECTIVITY.md` (the web to preserve). Pairs with the addon-cohesion umbrella (#132).

---

## Part 1 — The power tier ladder (#145)

**Problem.** Power generation is currently a flat pick-any: a player can build a windmill on turn one
and skip the whole early curve, and the electric addons (`createaddition`, `create-new-age`) offer a
parallel free-power route that bypasses the kinetic spine. We want power to be a *progression* where
stress capacity and convenience scale with investment, and electricity *plugs into* the ladder rather
than sidestepping it.

### The ladder (six rungs)

| Rung | Source | Mod | Stress / role | Gate (how you reach it) |
|---|---|---|---|---|
| **0 — Manual** | Hand crank | `create` | Tiny, momentary SU; bootstraps the first machines | Free (starting tech) |
| **1 — Early renewable** | Water wheel, large water wheel | `create` | Low continuous SU; needs flowing water (terrain-gated) | Andesite tier — cheap, but sited |
| **2 — Wind** | Windmill (sail bearing) | `create` | Higher SU but **area + height hungry** and weather-variable | Brass-adjacent: sail cloth + a windmill bearing (see cost notes) |
| **3 — Thermal** | Steam engine (boiler + flywheel) | `create` | The workhorse mid-game tier; scales with boiler size + fuel | Steam tier — requires the fluid/heat chain (pump, boiler, blaze burner) |
| **4 — Electric (basic)** | Alternator + electric motor, energisers | `createaddition`, `create-new-age` | Converts SU↔FE; enables wiring, machine compaction, cross-base transport of *power* | **Plugs in above steam** — its generators are *driven by* rung-3 kinetic, not a free source |
| **5 — Electric (high)** | Reactor (`create-new-age`), overcharged wires | `create-new-age` | High-density FE; the end-game power tier | Gated behind rung-4 + the high-tier fork (boss/colony part — Part 3). _Create: Nuclear cut for 1.0 (#289); returns with the 2.0 Power Grid (#282)._ |

### The load-bearing rule: electricity is a *converter*, not a *source*

The whole reason electric addons flatten progression is that some of their generators make power from
nothing (or from trivially cheap fuel) the moment you can craft them. The fix is a **stance, applied per
generator** during the #145 implementation pass:

- **Allowed (converter):** anything that turns **kinetic SU → FE** (`createaddition` alternator driven
  by a shaft) or **a real, spine-made fuel → FE**. These *plug into* the ladder — you still had to climb
  rungs 1–3 to spin the alternator.
- **Curtailed (free source):** any generator that makes FE from a cheap renewable with no kinetic input.
  Where one exists, either (a) raise its recipe to a rung-4+ cost so it's not an *early* free route, or
  (b) re-recipe it to require a kinetic input. **Settled:** prefer (a) cost-gating over (b)
  re-reciping where possible — less likely to break addon assumptions, easier to revert.

> **Audit task (part of #145 PR):** enumerate every generator block across `createaddition` /
> `create-new-age` (+ `createtreadmill`, tiered as a capped rung-0/1 source), tag each **converter** vs
> **free source**, and apply the stance. The item lists are in `tools/mod-data/by-mod/`
> (`createaddition-1.6.0`, `create-new-age-*`). Resolved in `kubejs/server_scripts/spine/20-power-ladder.js`.

### What gates what (the climb)

The gate is **recipe cost + step-depth** (Part 2), not a tech-tree mod. Concretely:

- Rungs 0–1 are *cheap* — you must be able to bootstrap. Don't over-gate the hand crank / water wheel.
- Rung 2 (windmill) costs **sail cloth + windmill bearing**; it's the first "you invested" tier.
- Rung 3 (steam) is gated by its **fluid/heat dependency chain** — you can't make a boiler without the
  pump + a heat source + copper fluid line, which is its own multi-step climb. That dependency *is* the
  gate; no extra lock needed. **The heat ladder makes the heat source explicit** (`createlowheated`,
  integrated per #289): Blaze Burner *passive* heat is disabled, so heat climbs
  **low heat** (`createlowheated:basic_burner` — a built component; enough for a basic boiler and
  temperate processing) → **heated** (Blaze Burner) → **superheated** (+ Blaze Cake). Low heat is
  *constructed*, never free — steam stays earned. Don't author pack recipes at `heated` where
  `lowheated` would do; the hotter levels are the T2→T3+ premium.
- Rung 4 (electric) is gated by requiring **steam-tier kinetic to drive it** + the wire/coil crafting
  chain. **Settled:** "needs rung-3 to spin" is enough of a gate on its own — don't double-tax the
  electric machines.
- Rung 5 (reactor) sits behind the **high-tier fork** (Part 3) — a boss drop *or* a colony part — so
  end-game power is the same two-route choice as other high-tier goods. Concretely: the New Age
  reactor's **rods are ignitium-sheathed** (Ignis — the `40-gates.js` capstone), its casings/glass ride
  the TFMG chain (52-weave), and the colony leg lands with the colony hook (#220).

This ladder feeds the future onboarding/quest work (a guidebook walking rungs 0→5).

### Pacing — front-loaded fast, back-loaded slow

The climb is **not** linear. Early rungs come quickly so players are flying through basic automation in
their first sessions; the back half is where the time goes. Target curve for a *dedicated* player:

- **Rungs 0→3 (Manual → Steam): ~1–2 days — *if you find the resources*.** The recipes here are cheap and
  simple; the only thing between a player and a steam base is **sourcing the materials**. Regional ore
  scarcity is the real early gate, not recipe complexity — a player who finds (or trades for) the right
  resources moves fast; one who hasn't is gated on exploration and trade.
- **Rung 3→4 (Steam → Electric-low / T3): ~a week.** The heavy jump — here *both* dials bite: deep
  step-depth chains **and** scarcer cross-regional inputs. Electricity should *feel earned*.

The gate is **step-depth + scarcity, never artificial timers.** Early tiers lean almost entirely on
**scarcity** (find/trade the resources); later tiers stack **step-depth** on top. An optimizing player
still takes ~a week to electric because the chains are deep and the inputs are regionally scarce — never
because a cooldown blocks them.

---

## Part 2 — The recipe cost model (#219)

`docs/SYSTEMS.md` §3 settles the *direction* (basics ~3×; higher tiers gain depth via more steps, not
multiplied cost). This part settles the *numbers* so it's applicable.

### 2a. The "3×" baseline for basics

**Settled — what "3×" measures against.** Definition:

> **3× = roughly triple the total raw-material floor of the vanilla/naive recipe**, measured in **base
> resource units** (ore/ingot/log equivalents), **not** a literal "multiply every ingredient count by
> 3." A recipe hits the target when producing one unit costs ~3× the raw inputs it would in vanilla —
> whether that's via more ingredients, a lower output count, or an added processing input.

Why this framing: blindly tripling counts produces silly recipes (9 planks for a crafting table) and
ignores that Create recipes often *consume the same item through more steps*. Measuring the **raw floor**
keeps the target meaningful across both crafting-table and Create-processing recipes.

**Scope of "basics".** The ~3× dial applies to **tier-1 fabricated items** — the things every route
needs constantly: basic machine components, casings, plates/sheets, the andesite-tier Create parts,
basic tools. It does **not** apply to:

- **Raw resources** (ores, logs, crops) — scarcity is handled by ore-gen (#93), not recipe cost.
- **Higher tiers** — those use step-depth (2b), not the multiplier.
- **The MineColonies route** — the *whole point* of 3× basics is that the colony route makes them
  **cheaper/faster**, so the colony recipes stay at ~1× (or are the worker-hut "free over time" path).
  The 3× tax on the Create hand-craft is what makes the colony route worth using (`SYSTEMS.md` §3).

**Settled — multiplier band.** 3× is the target; the *band* is **2.5–3.5×** as the acceptable range so
we're not hunting a false-precision number per recipe. Punishing >4×; toothless <2×.

### 2b. Step-depth ladder for higher tiers

Higher tiers get **harder by gaining stages**, GregTech-style — a tier-N item passes through more
distinct Create processes than a tier-(N-1) one. Proposed **stage budget per tier**:

| Tier | Example outputs | Target distinct Create stages (min) | Notes |
|---|---|---|---|
| **T1 — basic** | iron sheet, andesite alloy, brass casing | 1–2 | The 3× dial lives here, not step-depth |
| **T2 — mid** | precision mechanism, electron tube, steam parts | 3–4 | Already roughly true in stock Create — formalize it |
| **T3 — advanced** | electric/wire chains, TFMG steel parts, reactor parts | 5–6 | Multi-machine chains; cross-addon bridges (#132) live here |
| **T4 — high** | aeronautics controller, reactor core, end-game gear | 6+ **and** the high-tier fork | Step-depth **plus** a boss/colony gate (Part 3) |

"Stage" = a distinct Create operation (pressing, mixing, washing, deploying, sequenced-assembly step,
spout, haunting…) or a cross-machine handoff. The metric is **process length**, not ingredient count —
a T3 item might use cheap inputs but pass through six machines.

**Anti-grind guardrail (from `docs/RECIPES.md`).** Step-depth must read as *interesting chain*, not
*tedious repetition*. Rules of thumb:

- No stage should be a pure copy of the previous (no "press it, then press it again").
- Each added stage should introduce a **new input or a new machine**, so depth = breadth of the web.
- Sequenced assembly is the preferred vehicle for T3+ (it's *one* placed multi-step item, not N manual
  handoffs) — better UX than a literal six-machine line.

### 2c. How the two dials interact

A high-tier item is **not** 3× *and* deep — the multiplier is a tier-1 tool, depth is the tier-N tool.
The progression a player feels:

```
T1: cheap inputs, ~3× floor, 1–2 stages   →  "basics cost real resources"
T2: moderate inputs, 3–4 stages           →  "now I'm building a small line"
T3: cross-addon inputs, 5–6 stages        →  "the web connects; I need others' outputs"
T4: T3 + a boss/colony part               →  "I fight or I settle to finish this"
```

---

## Part 3 — KubeJS locking + gating (#220, #92)

Two distinct mechanics, both KubeJS, both with reusable patterns to build once and reapply per pillar.

### 3a. Pattern A — route-exclusive locking ("only Create can make X")

The **anti-erosion wall** (`SYSTEMS.md` §3): each route holds outputs only it can make, so a master of
one route still trades for others'. The KubeJS pattern is simply: **remove every alternative recipe for
the locked output, leaving only the route's own.**

```js
// Pattern A — lock an output to a single production route.
// Example: lock create:precision_mechanism so ONLY the Create line makes it
// (strip any colony/auto-craft/alt recipe that would let another route produce it).
ServerEvents.recipes(event => {
  event.remove({ output: 'create:precision_mechanism', not: { type: 'create:sequenced_assembly' } })
})
```

The work in the #220 PR is **deciding the list**, not the code — the code is one `event.remove` per
locked item. See 3c for the proposed Create-spine list.

### 3b. Pattern B — progression gating ("you need a boss/colony part to craft X")

The **high-tier fork** (`SYSTEMS.md` §3, #92): top items require *either* a boss drop *or* a
MineColonies-crafted part — two routes to the same goal. KubeJS pattern: **re-recipe the gated item so
the gate item is a required (ideally non-consumed where it's a "key") ingredient, and provide both
variants.**

```js
// Pattern B — gate a high-tier item behind the boss-OR-colony fork.
// Two recipes for the same output: one consuming a boss drop, one a colony-made part.
ServerEvents.recipes(event => {
  // Route 1 — the fighter: a Cataclysm boss drop is the catalyst.
  event.recipes.create.sequenced_assembly(/* ...controller..., requires */ 'cataclysm:<boss_drop>')
  // Route 2 — the settler: a MineColonies-crafted part is the catalyst.
  event.recipes.create.sequenced_assembly(/* ...controller..., requires */ 'minecolonies:<colony_part>')
})
```

**Settled (3b):**
- **Consumed vs. key.** **Settled: consumed** for components you make repeatedly (keeps the
  fighter/settler trade alive), **key/one-time** for machine-tier unlocks — a per-item call within that
  rule.
- **Which bosses? — RATIFIED: no primary, draw from them all.** Gate drops are pulled across **every**
  installed boss mod — **L_Ender's Cataclysm, Mowzie's Mobs, Grimoire of Gaia, Born in Chaos, Mutants** —
  rather than funnelling through one. Spread gate items across bosses so no single fight is the chokepoint
  and players engage the whole roster. (`bosses-of-mass-destruction` from older issues is **not** in the
  pack — ignore it.)
- **Which colony part? — DEFERRED.** MineColonies is **fully out of scope for v0.7.0** — the fork ships
  **boss-only** now, with a clean hook for the colony route to be added in a later patch. The whole point
  of the difficulty added now is to make the colony bypass *worth building* when that pillar lands.
  (Colony-part selection moves to the MineColonies pillar work, not the #92 PR.)

### 3c. The Create-spine lock list (proposed — the v0.7.0 slice)

Per `SYSTEMS.md`, the lock list is **incremental per pillar** — this is *only* the Create slice; Economy
(v0.9.0), Magic (v0.11.0), Survival (v0.13.0) add theirs later. Proposed starting set:

**Create-exclusive (Pattern A — only the Create line makes these):**
- `create:precision_mechanism` — the signature Create gate component; the canonical "you must run a
  Create line" item. Strong lock candidate.
- `create:electron_tube` — second tier-2 gate component.
- The above two are the **safe, high-value** locks. Going broader (locking sheets/casings) risks
  over-restricting basics that should stay craftable — **settled: lock only the two mechanisms for
  v0.7.0**, expand later if playtest shows erosion.

**Colony-cheaper (stays ~1× on the colony route, 3× on Create hand-craft — Pattern via cost, not lock):**
- The tier-1 basics (sheets, andesite alloy, basic casings) — the colony makes them cheap/slow; Create
  makes them fast/expensive. This is the 3× dial (Part 2a), not a hard lock.

**First high-tier fork (Pattern B — boss OR colony):**
- **The Aeronautics controller** — the worked example from `SYSTEMS.md` §3. End-game logistics tech
  gated behind a **boss drop** (any of the roster — see 3b; **boss-only for v0.7.0**, the colony route is
  deferred). This is the flagship demonstration of the fork and the single best v0.7.0 target to prove the
  pattern. (Exact controller item id + chosen boss drop: filled in the #92 PR against the
  `create-aeronautics-bundled` recipe dump.)

> **Scope discipline:** the v0.7.0 lock list is deliberately *small* — two exclusives + one fork. The
> mechanism (Patterns A/B) is the deliverable; a long lock list is explicitly *not* the goal this
> milestone (`SYSTEMS.md`: incremental, soft-for-now, revisit near release).

---

## Part 4 — Aeronautics ladder + the T3–T4 mod spine (Phase 1 additions)

### 4a. Aeronautics as a control-complexity ladder (T1→T4)

Aeronautics is **not** a single high-tier unlock — it's a thread woven across the whole ladder, gated by
**control complexity** as much as materials. This supersedes the "Aeronautics controller is one T4 fork
item" framing in 3c: the boss fork now sits at the **T3→T4 jump** (unlocking digital control).

| Tier | Aeronautics capability | Real items / how |
|---|---|---|
| **T1 — Water/Wind** | Basic **hot-air balloon** — lift only, no real control | `aeronautics:adjustable_burner` + envelope + wooden/andesite propeller |
| **T2 — Steam** | **Propelled balloon** — heavy steam engine drives a propeller; first **analog controls** (player learns control systems) | steam engine → propeller; `create_tweaked_controllers` / manual bearings |
| **T3 — Electric-low** | **Complex analog control** — hands-on; "understand it to build cool stuff" | `aeronautics:gyroscopic_propeller_bearing` + control surfaces; TFMG circuits |
| **T4 — Electric-high** | **Digital control** — large/complex flying machines become easy | **`create-aeroworks`** (added v0.7.0) + `aeronautics:smart_propeller` |

The **boss fork gates the T3→T4 transition** (analog → digital control) — the flagship demonstration of
Pattern B.

> **New dependency:** the T4 digital-control rung requires **Create: Aeroworks** (`create-aeroworks`),
> added to the pack on v0.7.0. [`create-avionics`](https://modrinth.com/mod/create-avionics) is parked
> for a **future review** as a possible richer digital-control layer — not in scope now. Note: Northstar
> (pulled, #273) was the old `advanced_circuit`/control-surface supplier, so T3–T4 control surfaces now
> lean on `create_tweaked_controllers` + TFMG circuits.

### 4b. The T3–T4 mod spine

**T3 = TFMG** (industrial / electric-low). **T4 = New Age** (electric-high). **Additions** is the
rung-4 FE *converter* that bolts under T3. _(Create: Nuclear was cut for 1.0 — #289/#283; it returns as
the standalone heavy generator in the 2.0 Power Grid overhaul, #282.)_

```
ADDITIONS (rung-4 converter)            <- SU<->FE alternator/motor + wires = the electricity layer
   |  TFMG machines RUN ON this FE (no T3 industry without first building the converter)
   v
TFMG  (T3 industrial)
   |- steel ingots / casings ----------------------------->  New Age reactor_casing / structure
   `- circuit ladder (empty->unfinished->etched->coated) ->  New Age energiser / reactor circuits
                                          v
NEW AGE (T4)                            <- rung-5 FE gen, behind the boss fork
                                           (capstone: ignitium-sheathed reactor_rod, 40-gates)
```

**The three bolt-ons, concretely:**

- **Additions → TFMG.** `createaddition` provides SU↔FE conversion (alternator / electric_motor) + the
  wire/coil chain. TFMG's `electric_motor`/`engine_controller`/industrial machines are gated behind a
  `createaddition` power feed, so electricity is a **converter driven by steam-tier kinetic, never a free
  source** (the Part 1 load-bearing rule). Also `createaddition:rolling` → `c:rods/*` → TFMG/aeronautics frames.
- **TFMG → New Age.** New Age's advanced parts require TFMG **steel + circuits** — the intended seam is to
  re-recipe New Age's `reactor_casing` / energisers to consume `tfmg:steel` + a TFMG circuit, so the T3
  climb is a prerequisite for T4. _(Correction: there is **no** "coking→energising→graphite" seam — New Age
  has no graphite at all. That premise was wrong; see `docs/CREATE-SPINE-IMPL.md` §9.)_
- **Nuclear → ~~TFMG/New Age~~ cut.** _Create: Nuclear was removed for 1.0 (#289-A): beta +
  All-Rights-Reserved + redundant with New Age's reactor. Its T4 capstone role moved onto the New Age
  **reactor_rod** (ignitium gate, `40-gates.js`); its uranium worldgen was deleted (thorium/lead veins
  reverted to their namesake metals). Nuclear returns as the standalone heavy end-game generator in the
  2.0 Power Grid overhaul (#282), where the old two-route overhaul design (#258) is the starting point._

---

## Open decisions summary — RATIFIED (Phase 1 session, Xela + zagwar)

All rows below were **accepted as the proposed default** in the Phase 1 session; the P4 rows are that
session's additions.

| # | Decision | Resolution (proposed default, accepted) |
|---|---|---|
| P1 | Curtail free-source generators via cost-gate vs. re-recipe | Cost-gate where possible |
| P1 | Double-tax electric machines, or is "needs rung-3 kinetic" enough? | Enough on its own; don't double-tax |
| P2 | What "3×" measures against | Raw-material floor in base resource units, not literal ×3 counts |
| P2 | Acceptable multiplier band | 2.5–3.5× |
| P3 | Boss/colony part: consumed per craft vs. one-time key | Consumed for components, key for machine unlocks |
| P3 | Boss source | **No primary** — draw gate drops from all installed bosses (see P4 roster) |
| P3 | v0.7.0 lock list breadth | 2 exclusives (precision_mechanism, electron_tube) + 1 fork (aeronautics controller) |
| P4 | Power-ladder pacing | Rungs 0→3 ~1–2 days; rung 3→4 ~a week; gate = step-depth + scarcity, never timers |
| P4 | Boss-gate roster | **No primary** — draw gate drops from all installed bosses (Cataclysm, Mowzie's, Grimoire, Born in Chaos, Mutants) |
| P4 | T3–T4 mod spine | T3 = TFMG; T4 = New Age + Nuclear; Additions = rung-4 converter under T3 _(post-ratification update: Nuclear cut for 1.0 → #289; T4 = New Age alone)_ |
| P4 | Aeronautics gating | Control-complexity ladder T1→T4; digital control via `create-aeroworks` (added); boss fork at the T3→T4 jump |
| P4 | MineColonies scope | Fully out of scope for v0.7.0 — boss-only fork now, colony bypass a later patch |

**Ratified.** Each line is now a concrete PR: #145 (ladder + generator audit), #219 (apply the cost
dials), #220 (Patterns A/B + the two exclusives), #92 (the boss fork at the aeronautics T3→T4 jump), plus
the aeronautics control-ladder + T3–T4 spine work (Part 4). MineColonies is hooked, not built.
