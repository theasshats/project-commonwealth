# Phase 2 candidates — chunk-15

## fluid   [anchors: create, aeronautics (2)]
- REWORK: OK — connections sound. Already at 2 anchors (Create spine fluid tooling + aeronautics/logistics). The dossier's 2nd-anchor note is correct: the centrifugal pump and smart fluid interfaces are genuine Create-spine parts used for fluid routing on airships and bases. No forced third needed.
- from: fluid:centrifugal_pump | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: The pump is a fluid-logistics device, not a drivetrain/propulsion component — routing it as M-24 (mechanical component→propulsion/control) misapplies the motif. It already carries the aeronautics anchor through its logistics role (piping fuel, water, etc. aboard ships). Forcing a recipe-seam here adds no new system bridge.
- from: fluid:neon_tube / deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Neon tubes are decorative copper/glass elements; a recycling crush path is mechanically coherent but adds nothing to the loop (the mod is already at 2 anchors and doesn't need the deco-recycle edge). Low payoff.

## do_a_barrel_roll   [anchors: support / client QoL (1)]
- LEAVE — pure client camera/movement behavior; zero items, zero recipe types, zero loot. No content surface to weave. The elytra-flight theme is aeronautics-adjacent but this mod touches vanilla elytra only, not Create Aeronautics ships or items.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood / soul gems (Soul Furnace outputs) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul-harvested blood and gems feed the spirit-fire transmutation web — the gothic-alchemy aesthetic matches Occultism perfectly, and it gives the Soul Furnace's reagents a system purpose beyond the private island.
- from: companions:crystallized_blood | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 via occultism:spirit_fire is the stronger and more thematically coherent path for dark soul-reagents; routing the same material through Ars imbuement as well would double-spend crystallized_blood without gaining a new system link. One clear conduit is enough.
- from: companions:relic_gold (boss drop from Sacred Pontiff) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic gold is explicitly named as a high-tier boss drop — smelting/processing it into coin through Create's mint is a natural economy bridge, and places the Companions boss in the M-15/M-08 supply chain.
- from: companions:copper_coin / nether_coin / end_coin | via: numismatics trade | to: economy | motif: M-21 | power: everyday | tone: clash | verdict: REJECT | reason: The mod ships its own parallel coin set. Bridging these private coins into Numismatics as equivalents risks a 1:1 round-trip swap (M-21 is provisional and the ledger specifically warns against competing coin systems). Better to leave the companions coins as purely flavor/vendor currency and not route them into the Numismatics economy. M-21 provisional + anti-round-trip rule.
- from: companions:voltaic_pillar / tesla_coil_block (deco-electrical blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: While deco recycling via M-04 is valid in principle, the Tesla/voltaic blocks are central decorative pillars of the mod's aesthetic — crushing them to copper scrap is a weak edge that adds no loop value for a mod that now has 2 anchors via ACCEPT above.
- REWORK: existing anchor is survival (1) — the two ACCEPTs above add magic + economy, bringing it to 3. No existing connections need rework since the mod had none authored yet.

## tipsmod   [anchors: support / QoL (1)]
- LEAVE — zero items, zero recipe types, zero loot. A UI-only loading-screen tip display; its only value is the tip text that maintainers can author. No content surface to weave.

## createadditionallogistics   [anchors: create, aeronautics (2)]
- REWORK: OK — connections sound. Already at 2 anchors (Create kinetics infrastructure + aeronautics/logistics via Stock-Keeper seats). The dossier's assessment is correct: lazy shafts/cogs are purely Create infrastructure (perf benefit), and the seat variants tie to logistics; a third anchor would be forced.
- from: createadditionallogistics:flexible_shaft variants | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Flexible shafts are transmission elements, not drivetrain/propulsion/control for Aeronautics — they belong to the Create spine (already the first anchor). Trying to make them an M-24 component overstretches the motif. The aeronautics anchor already exists via the seat variants.


