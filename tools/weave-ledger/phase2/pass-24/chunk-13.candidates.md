# Phase 2 candidates — chunk-13

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack themed variant (e.g. dragon/blaze/enderman pack) | via: recipe (travelersbackpack:backpack_shaped) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: endgame-tier backpacks (dragon, netherite) require a Create-pressed plate or precision-mechanism as a structural brace — the pack becomes a manufactured good, not just a crafting-table assembly; mid-tier effort matches a mid-tier mobility item
- from: travelersbackpack:backpack_tank upgrade | via: create:pressing → tank blank | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the fluid-tank upgrade is literally a pressed copper/zinc tank — routes the upgrade through Create's pressing step so the tank slot earns its place in the Create spine
- from: travelersbackpack (worn, portable fluid tanks) | via: aeronautics carry-context | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — passive item carried on a ship; this is a usage story, not a mechanical weave; the aeronautics connection has no method to route through
- REWORK: existing survival anchor is sound — carry capacity + respawn is genuine pressure-side. No rework needed.

## betterstrongholds   [anchors: survival (1)]
- from: stronghold loot tables (chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: stronghold delving is one of the game's largest commitment runs — seeding a coin denomination (e.g. a Sprocket or Bevel) into a stronghold chest rewards the expedition with currency, closing the loop: exploration pressure → structure combat → coin reward → economy; structurally distinctive because the stronghold is the hardest vanilla structure and this makes currency acquisition dangerous, not passive
- from: stronghold loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a mid-tier magic reagent (e.g. ars source gem or occultism's silvermirage drop) into the deeper stronghold rooms so delving into the stronghold opens a magic research path — exploration feeds magic production; the stronghold's end-dungeon vibe pairs with arcane payoffs
- REWORK: survival anchor OK — exploration/world-feel is the right pillar. No rework needed.

## create   [anchors: create (1)]
- LEAVE — create IS the hub; the design north star. Its methods are the connective tissue for every other mod — it is the weave method library, not a weave target. Do not propose edges that consume Create itself. OK — connections sound (the dossier explicitly flags this).

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (the placed controller block) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the tweaked controller is already crafted from precision mechanisms + electron tubes (Create parts); formalising that the controller block itself requires Create's Mechanical Crafter (a multiblock craft) adds one more step to the control-surface build, consistent with M-05 native-method gating — the vehicle cockpit is a proper Create-tier item, not a crafting-table trinket
- from: create_tweaked_controllers controller signal output | via: config/gameplay (redstone-link to drive Aeronautics propulsion) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a controller that maps player inputs to redstone frequencies is literally the control surface feeding Aeronautics propellers and rudders — this is M-24's "control mechanism" arm. Already present by function; flagging as M-24 to formalise its aeronautics anchor
- REWORK: existing aeronautics anchor is sound. The create anchor is implicit (craft uses Create parts) but not formal — the M-05 ACCEPT above would formalise it.

## voicechat   [anchors: support (1)]
- LEAVE — zero-content comms infrastructure; no items, no methods, no loot. Genuine zero-surface mod.

## corgilib   [anchors: support/library (1)]
- LEAVE — pure code library; zero items, zero methods, zero loot. Genuine zero-surface mod.

## citadel   [anchors: support/library (1)]
- LEAVE — library/API; items present are internal tooling (debug/icon/effect), not survival content. No coherent weave target.

## lootjs   [anchors: support/library (1)]
- LEAVE — packdev scripting tool; no items, no methods. It enables loot-seed weaves (M-02, M-08) but is not itself a node in the web.

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream maid stat-growth mechanic (feeding diverse foods grows companion stats) | via: farmersdelight:cooking / extradelight methods | to: survival (food-variety pressure) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: M-12 covers processing raw crops into finished goods; the weave here would be "feed the maid processed food so she grows faster" — but solmaiddream itself has no method; it passively listens to any food the player gives a maid. The connection is thematic usage (food mods feed this addon), not a routable method-pull. No coherent mechanical step to add. Stays at 1 anchor.
- LEAVE — tiny flavour addon with one item (a food inspection book); the food-variety chain is already survival-anchored; forcing a magic/Create/economy edge would be contrived. 1 anchor is appropriate for its footprint.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (iron/steel/copper) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal fences crush back to raw nuggets + an experience nugget (lossy) — same as any other metal deco block; keeps the Create recycling loop coherent and gives over-built metal fences a disposal path; scope is one simple crushing recipe per metal type, not a deep chain
- from: mcwfences wood/stone variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood/stone fence variants are ordinary deco with vanilla materials; M-04 is specifically for *metal/stone deco crushes back to raw + xp nugget* — stone works but stone fences are extremely low-value; including them would bloat crushing tables with negligible gain. Limit M-04 to the metal variants only.
- REWORK: decoration anchor is the appropriate single anchor. M-04 metal-crush is the only coherent second — the ACCEPT above formalises it.

## createfurnitureseats   [anchors: support/aeronautics (1)]
- LEAVE — compat glue; no items, no methods, no loot. Its aeronautics touch is already noted in the dossier (sittable furniture on ships). Genuine zero-surface mod beyond that.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single-entity combat test prop; no processing, no loot, no method surface. Forcing an edge would be contrived.

## entity_model_features   [anchors: support/client (1)]
- LEAVE — client model-replacement engine; no items, no methods, no loot. Genuine zero-surface mod.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver; no items, no methods. Support role confirmed.

## durabilitytooltip   [anchors: support/client (1)]
- LEAVE — client tooltip UI; no items, no methods. Genuine zero-surface mod.

## jeed   [anchors: support/client (1)]
- LEAVE — JEI display addon; its two "recipe-types" are documentation categories in JEI, not craftable methods. No material surface.

## libipn   [anchors: support/library (1)]
- LEAVE — GUI/config library for IPN; no items, no methods. Genuine zero-surface mod.

## timm   [anchors: support/client (1)]
- LEAVE — client biome-title UI overlay; no items, no methods, no loot. Genuine zero-surface mod.

## blockui   [anchors: support/library (1)]
- LEAVE — XML UI framework for MineColonies; no items, no methods. Genuine zero-surface mod.

## azurelib   [anchors: support/library (1)]
- LEAVE — animation engine library; no items, no methods. Genuine zero-surface mod.

== CHUNK COMPLETE ==
