# Phase 2 candidates — chunk-13

## citadel   [anchors: support/library (1)]
- LEAVE — pure code library (animation framework + spawn tooling for Alex's Mobs / Caves; no items, no recipes, no materials to route). Sanctioned support role; weaving is impossible by definition.

## bakery   [anchors: survival (1)]
- from: wheat→flour (c:crops/wheat) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds grain to flour before it hits the baker's station — Create feeds the bakery chain, not just the stonecutter
- from: bakery finished goods (cakes / tarts / cupcakes) | via: MineColonies cook-hut delivery demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colony cook hut requests a weekly cake order, creating repeating demand a bakery specialist fills
- from: bakery luxury goods (cakes / tarts) | via: "sellable" | to: economy | motif: M-09 retired | power: mid | tone: — | verdict: REJECT | reason: bare sell link; M-09 retired — ambient endpoint, not a weave
- from: bakery crops → Ars Sourcelink | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: baked goods as a magic reagent source is thematically strained; farm mods own this surface better; dossier rates it WEAK
REWORK: dossier's existing M-09 candidate ("economy via numismatics sell") is retired-motif — must re-express as M-28 colony demand or M-26 consumption if it is to stand; flag for update.

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — pure Create build-tooling (pattern-schematic repeater); 0 blocks/items, no material surface to route, no foreign feedstock. Deepens the Create spine only.

## notenoughanimations   [anchors: support/visual (1)]
- LEAVE — client-side cosmetic animation override; 0 items/blocks, no gameplay surface. Sanctioned support role.

## create_sa   [anchors: Create, aeronautics (2)]
- from: blazing tools (blaze-fueled pickaxe / axe / cleaver) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: an arcane infusion charges the blaze core, linking the Create-forged blazing tool to the magic spine; a magic specialist unlocks the hottest tier
- from: brass_drone_item | via: create:sequenced_assembly (deeper chain add) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: already deeply woven into sequenced_assembly (dossier confirms gold-standard Create weave present); re-layering the drone is redundant depth, not a new connection
OK — connections sound (Create + aeronautics already established; blazing-tool→magic is the natural 3rd edge if the pack wants it)
REWORK: none — existing connections are coherent.

## cristellib   [anchors: support/library (1)]
- LEAVE — structure-config library; no items, no gameplay surface. Sanctioned support role.

## yungsapi   [anchors: support/library (1)]
- LEAVE — API-only; no items, no gameplay surface. Sanctioned support role.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — performance patch (leaf-decay tick replacement); no items, no gameplay surface. Sanctioned support role.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: log/stone cuts (847 variants) | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk stonecutter/saw production of the missing cuts automates construction supply — the Create spine feeds building at scale
- from: stone/gravel-gravity cuts | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is valid in principle but the dossier rates it WEAK; deco-recycle is cosmetically low value and the crushing recipes would be a large maintenance surface for 847 blocks; defer to a deco-family pass if that happens at all
REWORK: none — single anchor is correct for a pure-deco mod; the create:cutting edge is the obvious and sufficient 2nd anchor.

## oceansdelight   [anchors: survival (1)]
- from: guardian/elder-guardian drops (tentacles, flesh) | via: farmersdelight:cutting → create:milling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: tentacles run through a Create mill/press to yield a preserved extract (a dense seafood ingredient for higher-tier dishes), threading ocean content into the tech spine
- from: fugu_slice / elder_guardian_roll (high-risk delicacy) | via: MineColonies cook-hut request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a coastal colony cook hut demands elder-guardian rolls as an exotic supply order, creating cross-biome trade between ocean divers and inland colonies
- from: finished seafood dishes | via: "sellable for coin" | to: economy | motif: M-09 retired | power: — | tone: — | verdict: REJECT | reason: bare sell link; M-09 retired
REWORK: dossier's both existing candidates rely on M-09 or bare M-12 sell link; the M-28 colony-demand and M-12-to-Create-processing replacements above are the correct re-expressions.

## structurize   [anchors: support/MineColonies-engine (1)]
- LEAVE — MineColonies build engine; no recipes, no material surface of its own (its weave is MineColonies' weave). Sanctioned support role.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear (high-ratio kinetic components) | via: create:sequenced_assembly (gated ingredient) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the gears are already Create-native; routing them through sequenced_assembly is circular depth within the same pillar, not a cross-system connection — doesn't earn a new anchor
- from: gnkinetics:industrial_gear | via: aeronautics drivetrain recipe (as a specialized transmission component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a precision planetary-gear set becomes a required drivetrain component for mid-tier Aeronautics propellers, making Create's kinetics supplier the gearworks needed to fly
REWORK: none needed for existing connections; the M-24 edge is the clear natural 2nd anchor for this purely-kinetic mod.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier labels this WEAK; metal-fence recycle is minor flavor at best, not a meaningful connection; reserved for a deco-family pass if at all
- LEAVE — decoration palette is a sanctioned support anchor; no coherent non-forced 2nd anchor identified. Metal crush is too marginal to justify; no thematic hook into survival/magic/economy. Best treated as pure builder's palette.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen library (biome injectors, density functions); no items/blocks. Sanctioned support role.

## snowyspirit   [anchors: survival (1)]
- from: ginger crop (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds ginger root to ground spice, feeding it into the Create-adjacent cooking chain as a seasonal ingredient; winter crop meets tech spine
- from: ginger crop (c:crops/ginger) | via: farmersdelight:cutting (ginger→ginger powder/slice) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: both endpoints are survival (farmersdelight is survival-anchored); this stays within one pillar and doesn't earn a new anchor — the create:milling route above is the better cross-system edge
- from: gingerbread/candy decor seasonal goods | via: seasonal-gated sell | to: economy | motif: M-09 retired | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare sell link
- from: ginger/eggnog as Serene Seasons winter-only food items | via: season-gated input → Create/magic recipe | to: survival↔Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is only harvestable in non-frozen seasons (Serene Seasons); milling it in winter requires a stored stock, creating a seasonal preparation incentive that drives winter-prep demand
REWORK: none — one anchor is correct; the two edges above (M-12 milling + M-16 seasonal reagent) together give it a solid Create 2nd anchor with a seasonal pressure dimension.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- from: Courier ↔ Create Stock Link bridge | via: colony-logistics route | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: colony couriers pull from Create stock networks — the colony route and the Create tech spine share inventory, cross-wiring two production routes so neither is isolated
- from: Butcher/Cook jobs processing FD/modded recipes | via: MineColonies colony demand | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: the colony demand is already the mod's native function (it IS a colony bridge mod); this is restating its anchor, not adding a new cross-system connection
OK — connections sound at 2; the M-29 cross-route edge is a genuine 3rd touch if the pack wants it, but the mod is already well-integrated by nature. No REWORK needed on existing connections.

## domum_ornamentum   [anchors: decoration/support (1)]
- from: any Create-produced stone/casing block (andesite alloy casing cosmetics, processed stone) | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: andesite-alloy panels and processed stone from the Create spine become framed architectural blocks in the cutter — Create-made stone earns a decorative output path, and DO gets a Create-material feed
- from: DO timberframes using MineColonies-exclusive materials | via: MineColonies colony route (colony-locked input block) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony-specific stone type (only craftable by a Mason hut) unlocks a unique timberframe variant — the building specialist holds an exclusive palette piece traded to other builders
REWORK: existing anchor is decoration/support only (1 anchor); both above edges are genuine cross-system links. The MineColonies dependency makes M-28 particularly natural here.

## trailandtales_delight   [anchors: survival (1)]
- from: milk → curd → cheese wheel | via: create:mixing (churning milk) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the mixing basin churns milk into curd at scale — the cheese-making chain becomes an automated dairy production line through the Create spine
- from: cheese wheel / cherry cheese pie | via: MineColonies cook-hut demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony cook hut requests cheese wheels as a standing supply order — the dairy specialist feeds the settlement, creating player-to-colony trade
- from: Lantern Fruit (sniffer-recovered crop, rare seed) | via: season-gated or biome-locked availability | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: M-16 requires Serene Seasons gating; Lantern Fruit is sniffer-seed rare but not season-locked by default — this would need a config/KubeJS season lock to be real, making it a build-task not a weave; also stays within survival pillar
- from: ancient_coffee / cherry_petal_tea | via: create:mixing (steep/brew step) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milk/cheese path above is the better Create anchor (more distinctive and already mid-tier); adding a second Create link for the drinks is redundant depth within the same motif and same pillar; one is sufficient
REWORK: dossier's existing M-09 candidate is retired; M-12 candidate lacked specificity. The two ACCEPTs above (M-12 cheese-chain + M-28 colony demand) are the proper re-expressions.

## mffs   [anchors: Create, survival (2)]
- from: mffs:projector / interdiction_matrix | via: already authored sequenced_assembly chain | to: Create | motif: M-05/M-06 | power: endgame | tone: — | verdict: REJECT | reason: the gold-standard Create weave is already authored (60-mffs.js); re-proposing it is redundant
- from: mffs:anti_hostile_module | via: boss-drop gating | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the anti-mob interdiction module requires a boss signature drop as a catalyst — you must defeat the danger before you can automate its suppression; combat investment gates automated safety
OK — connections are sound and already the reference implementation. M-15 boss-gate on the anti-hostile module is the natural deepening if the pack wants it.
REWORK: none — M-05/M-06 authored correctly; survival anchor via base-defense is coherent.

## aileron   [anchors: aeronautics (1)]
- from: Elytra enchantments (Aileron's custom enchants) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the arcane enchanting apparatus applies Aileron's flight enchants — magic unlocks the best Elytra performance tier, threading the flight rebalance into the magic progression
- from: Elytra | via: create:sequenced_assembly (applying Aileron enchant as a component) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: Aileron registers no items; applying its enchants via deployer/item_application is only viable if its enchant books drop/craft normally — this is speculative without confirming the enchant is an item; dossier notes enchants are behavior-only; no-motif risk without grounded confirmation
REWORK: none — aeronautics anchor is correct; the ars:enchanting_apparatus edge is the natural 2nd anchor for a flight-enchant mod.

== CHUNK COMPLETE ==
