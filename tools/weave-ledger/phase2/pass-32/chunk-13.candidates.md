# Phase 2 candidates — chunk-13

## collective   [anchors: support/library (1)]
LEAVE — pure code/event library (Serilum family); 0 items, 0 blocks, 0 loot. Genuine zero-surface library; no recipe, method, or loot-seed surface exists.

## followersteleporttoo   [anchors: support/QoL (1)]
LEAVE — behavior-only QoL (pet teleport follow); 0 items, 0 blocks, no loot. No content surface to weave against.

## s_a_b   [anchors: create, aeronautics (2)]
OK — connections sound. Already sits at Create (compacting/mixing inbound) + aeronautics (armored hull material for Big Cannons / Aeronautics ships). Two solid anchors; the loop path is scarcity→Create steel chain→armored hull→aeronautics build. No rework needed.
- from: s_a_b:hardsteelblock / colorized armor plates | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: REJECT | reason: M-04 (lossy crush-back) adds nothing meaningful when the primary role is structural/aeronautics armor; crush-back of a mid-tier armor block into raw + XP nugget is low-value and adds no loop advancement — the mod earns its keep through M-23 already

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window / copper steps | via: crafting route requiring create:pressed_brass / create:copper_sheet | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: train windows and boarding steps are fabricated from pressed sheets off the Create line — the train fitter naturally sources them from the factory floor
- REWORK: current 1-anchor (aeronautics only) is the floor; the above M-05 native-method gating via pressed-sheet inputs lifts it to create + aeronautics (2). The existing connection is sound but needs the recipe weave to formalize the Create anchor.

## packetfixer   [anchors: support/compat-perf (1)]
LEAVE — pure network-fix infrastructure; 0 items, 0 blocks, no loot. Genuine zero-surface infra mod.

## create_ltab-3.9.2   [anchors: create, survival (2)]
OK — connections sound. Create-themed worldgen structures + survival/exploration already gives 2 anchors. The loot=yes flag opens a loot-seed path to economy/magic but the dossier correctly notes it is weak (arbitrary reagent drop into a Create ruin). Consider only if a pack-design decision targets exploration-driven progression gating.
- from: create_ltab structure loot tables | via: loot-seed (datapack edit) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: seeding minted coin directly into structure loot is a bare find-coin reward, not a demand-gating link — it's the ambient endpoint (any loot is "valuable"), not an economy weave; no demand-side node is engaged
- from: create_ltab structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: mob-drop reagent sink (M-02) requires an organic drop with a consuming magic method; a structure loot table seeding a magic reagent is thematically plausible but doesn't satisfy M-02 (no mob, no consuming method defined) — would need a named consuming method to become a real candidate

## lionfishapi   [anchors: support/library (1)]
LEAVE — animation/entity API library; 0 items, 0 blocks, no loot. Genuine zero-surface library for L_Ender's mods.

## gtmogs   [anchors: survival, economy (2)]
OK — connections sound. GTMOGS is the worldgen substrate of the pack's scarcity model; it enables M-03, M-08, M-30 downstream rather than needing its own weave. It is correctly anchored as the scarcity foundation feeding survival (exploration, depth-gated veins) and economy (regional scarcity forcing trade). No weave to propose against a worldgen-config framework.

## rechiseledcreate   [anchors: create, support/decoration (2)]
OK — connections sound. The Mechanical Chisel is a genuine Create-kinetic method; the mod IS the Rechiseled×Create bridge. Two anchors (Create kinetics + decoration palette) are well-grounded; no forced third edge needed.

## betterendisland   [anchors: survival (1)]
LEAVE — End-island structure overhaul; 0 items, 0 blocks, loot=no. No content surface; the redesigned arena improves the fight spectacle but offers no recipe, item, or loot-seed handle.

## doubledoors   [anchors: support/QoL (1)]
LEAVE — interaction-behavior QoL (paired door opening); 0 items, 0 blocks, no loot. Genuine zero-surface behavior mod.

## particlerain   [anchors: support/client-atmosphere (1)]
LEAVE — client-side weather/particle rendering; 0 items, 0 blocks, no loot. No server-side or recipe surface.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences:*_metal_fence / *_metal_fence_gate (iron/chain variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scrap-metal fence pulled through the Crushing Wheels yields a nugget + XP pellet — industrial recycling of decorative ironwork back into the material chain; lossy by design
- from: mcwfences:*_hedge variants | via: create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: milling a decorative hedge block into leaves/seeds is a tone-clash — hedges are a finished-form garden block, not a raw crop; forcing processing-chain pull on garden-trim is incoherent

## lithostitched   [anchors: support/library (1)]
LEAVE — worldgen-modifier library; 0 items, 0 blocks, no loot. Genuine zero-surface dependency for terrain mods (Tectonic).

## bundle_recipe   [anchors: support/QoL (1)]
LEAVE — vanilla-parity datapack (bundle crafting recipe); no new items, no methods. The bundle itself is vanilla; the mod only re-enables the recipe. No content surface.

## txnilib   [anchors: support/library (1)]
LEAVE — multiversion code library; 0 items, 0 blocks, no loot. Genuine zero-surface library.

## jeed   [anchors: client-only UI/support (1)]
LEAVE — JEI Effects documentation addon; 0 items, 0 blocks, no loot. Its two registered recipe-types (jeed:effect_provider, jeed:potion_provider) are JEI display categories only, not craftable methods. No weave surface.

## sound_physics_remastered   [anchors: support/client-immersion (1)]
LEAVE — client-side audio attenuation/reverb; 0 items, 0 blocks, no loot. No material or server-side surface.

## creativecore   [anchors: support/library (1)]
LEAVE — CreativeMD GUI/packet/recipe library; 0 items, 0 blocks, no loot. Genuine zero-surface library.

## cubes_without_borders   [anchors: support/client-QoL (1)]
LEAVE — client windowing option (borderless fullscreen); 0 items, 0 blocks, no loot. Client display feature only.

== CHUNK COMPLETE ==
