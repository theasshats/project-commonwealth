# Phase 2 candidates — chunk-32

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — genuine zero-content scripting bridge; no items, no blocks, no loot, no methods. Extends Create's Ponder documentation UI via KubeJS scripts; the weaving happens in the scripts it enables, not in this mod itself.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (appliance blocks) | via: recipe (M-05 native-method gating — gate upgraded kitchen appliances on Create brass/copper sheets as crafting inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen deserves proper fabricated parts — brass fittings for the oven, copper plumbing for the sink
- from: cookingforblockheads (as downstream food aggregator) | via: recipe → numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: cookingforblockheads adds no new sellable items — it's a recipe-discovery convenience layer over other mods' foods; the economy hook belongs to the food mods it aggregates (Farmer's Delight, Vinery, etc.), not to the kitchen appliance itself. Forcing a coin tie here is arbitrary.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE-charge method) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the alternator's surplus electricity charges Iron's Spellbooks focus batteries and enchanted gear — the electric tier threads directly into the magic toolkit
- from: createaddition:seed_oil / bioethanol (crop-oil fuels) | via: createaddition:liquid_burning + numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a surplus barrel of bioethanol or seed-oil is a commodity — fuel is trade-able; farming specialists sell refined fuel to the Create operators
- from: createaddition:bioethanol (refined crop fuel) | via: createaddition:liquid_burning → aeronautics engine intake (as an alternative light-tier propellant) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: bioethanol is a renewable lower-tier fuel that can run a small airship before the crew has diesel/gasoline; escalates the aeronautics fuel supply line to include a farm-sourced tier
- REWORK: the dossier's "survival/economy via liquid_burning of crop oils" candidate is marked WEAK but is actually sound — seed_oil/bioethanol already feeds liquid_burning (existing inbound via create:filling/mixing) and the oils are named c:tag goods; an M-09 coin-sell is coherent and should be promoted to ACCEPT.

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits) | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a finished bottle of whiskey or tequila is a luxury good — tavern-trade staple; the distillery specialist earns coin selling product to other players
- from: alcohol_industry:alcohol_base fluid | via: occultism:ritual or ars_nouveau:imbuement (use concentrated spirits as a ritual solvent/catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: distilled spirits as an arcane solvent in a ritual is a natural cross-cultural trope — alchemists have always used alcohol as a base; the distillery feeds the magic lab
- OK — existing Create + survival anchors are well-grounded (uses create:filling + create:mixing as inbound methods, and the boiler is a proper Create-driven processing chain).

## necronomicon   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; 0 blocks, 0 items, loot=no. Pure code API for dependents (opacpvp). Nothing to weave.

## bettermineshafts   [anchors: survival (1)]
- from: bettermineshafts structures (expanded mineshaft network, loot=no per dossier but uses vanilla mineshaft loot tables) | via: loot-seed (inject a weave-relevant item into vanilla mineshaft chest loot that bettermineshafts populates — e.g. a coin cache M-08, magic scroll/reagent M-02, or a boss-key fragment M-15) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: deeper, more dangerous mine → richer payoff; a coin cache or reagent cache in the expanded side-rooms makes spelunking into an economy/magic act, not just ore-hunting
- from: bettermineshafts structures | via: loot-seed (inject a rare magic reagent or allurite shard as a dungeon find) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: something unusual survived in the mine long enough to be arcane; abandoned mineshafts as a source of rare reagents ties exploration to the magic progression
- NOTE: dossier states loot=no (no custom loot tables), but this means bettermineshafts uses vanilla mineshaft chests unmodified — the loot-seed delivery here targets those same vanilla loot tables that bettermineshafts' structures inherit; Phase 3 action is a datapack edit to `minecraft:chests/abandoned_mineshaft` which bettermineshafts populates. Valid delivery.

## kubejs_create   [anchors: support/tooling (1)]
- LEAVE — genuine zero-content scripting bridge; 0 blocks, 0 items, loot=no. Exposes Create recipe-types to KubeJS; the weaving is authored through it, not in it.

## minecolonies_tweaks   [anchors: support/QoL (1)]
- from: minecolonies_tweaks:inventoryscroll / copyscroll (handheld colony-storage tools) | via: recipe (gate the scrolls on Create brass — M-05 native-method gating: printed brass circuit / brass sheet as a scroll component, reflecting precision colonial logistics) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: colony logistics scrolls that manage hundreds of items of colony inventory should cost real fabricated precision parts — a brass-inlaid scroll is the right tier for a colony management tool
- from: minecolonies_tweaks c:crops/* unified tags (corn, rice, soybean, tomato…) | via: config tie / KubeJS tag-targeting (the harmonized crop tags let Create milling/mixing recipes target any modded grain without per-mod IDs — the tags ARE the weave delivery) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony-harmonized grain tags mean the flour mill accepts every modded crop; the QoL-tag layer is invisible infrastructure that makes the food→Create chain coherent
- REWORK: dossier marks minecolonies_tweaks as pure support with "nothing to weave," but the inventoryscroll items are real craftable items that would benefit from an M-05 brass-gating tie; not pure zero-surface. The 38 items + 89 c:tags are exactly the hook the dossier under-valued.

## fogoverrides   [anchors: support/client-visual (1)]
- LEAVE — genuine zero-content client visual mod; 0 blocks, 0 items, loot=no. Config-only fog tuning with no material/recipe surface. No coherent pillar link possible.

## sable   [anchors: support/physics-backend (1)]
- LEAVE — genuine zero-content physics engine library; 0 blocks, 0 items, loot=no. The weaving target is Create Aeronautics (which builds on sable), not sable itself.

== CHUNK COMPLETE ==
