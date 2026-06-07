# Phase 2 candidates — chunk-17

## platform   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, 0 recipes; pure registry/biome framework for ItsBlackGear mods). Nothing to route.

## openpartiesandclaims   [anchors: support/server-protection (1)]
- LEAVE — no items, no methods, no loot. Chunk-claim + party protection is infrastructure; no pillar weave is coherent. Sanctioned support role.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create + aeronautics/logistics are the correct anchors for a drone-delivery layer built on Create's Logistics Network. No new surface to route.
- from: robo_bee port network | via: economy demand-gate | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: The drone ports move goods between players, but there is no recipe or method that *gates* an economy link — the delivery layer is infrastructure. A bare "goods flow through it" link is the ambient endpoint (M-09 pattern), not a demand-gating weave. No additional anchor warranted.

## zeta   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items; module/registration framework for Quark). Nothing to route.

## formations   [anchors: survival (1)]
- from: scattered ruins/altars | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: formations:loot=no per the digest — the mod places structures using vanilla/modded palettes but registers no loot tables of its own. A loot-seed is datapack work on whatever it generates, not a weave on Formations itself. No method surface.
- LEAVE — cosmetic scatter-structure worldgen, loot=no, 0 items to process. The only player-facing item (template_editor) is a dev tool. No coherent 2nd anchor without inventing one.

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot instancing operates on existing loot tables transparently; ships only reskinned container blocks with no material join key. Support role: multiplayer fairness, nothing to route into a second system.

## buildguide   [anchors: support/client-QoL (1)]
- LEAVE — client-side ghost-block render overlay; 0 items, 0 recipes, 0 loot. Pure construction aid with no gameplay surface.

## betteroceanmonuments   [anchors: survival (1)]
- from: monument loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Players who dive the monument return with minted-coin precursor materials or rare reagents — the ocean becomes a regional supply node rather than a one-time vanilla crawl. loot=yes confirmed; adding a scarce regional metal or numismatics coin-press component to the chest loot tables seeds M-08 without adding items to the mod itself.
- from: monument loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Guardian drops and monument chests seed a magic reagent (e.g. a fluid essence or sea-crystal catalyst for Ars/Occultism) — aquatic magic becomes regionally locked, pushing ocean specialists to supply inland mages.

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — vanilla-scoreboard datapack; 0 items, 0 recipes, 0 loot. A tab-list death tally is pure social cosmetic; nothing to weave.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure recipe-compat glue for the Let's Do / Farm&Charm / FD food cluster; registers no items, no blocks, no methods of its own. Its existence already functions as M-12 processing-chain unification across food mods. No further weave surfaces.

## architectury   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library (0 blocks, 0 items; cross-platform event/registry/networking framework). Nothing to route.

## createfood   [anchors: survival, Create (2)]
- from: createfood finished dishes (pizza, pie, ice cream, milkshakes) | via: create:mixing / farmersdelight:cooking chain output | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: High-effort processed dishes are consumed by players under Cold Sweat / Spice-of-Life pressure, so demand never zeroes — baker/cook specialists must keep supplying the server; food is the consumption-sink closing the loop.
- from: createfood high-tier dishes | via: minecolonies requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies citizens/workers request complex foods as upkeep — a bakery/kitchen production route that makes createfood output a colony-supply input, gating colony growth behind the cook specialist.
- from: createfood dishes (seasonal crop inputs) | via: season-gated crop → create:milling/mixing chain | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Signature dishes like apple pie, cherry pastries, and berry ice cream are naturally season-locked when their crop inputs (from Serene Seasons) are only harvestable in one season — the food calendar emerges without artificial gating.
- from: economy via M-09 (luxury → coin) | — | — | motif: M-09 | — | verdict: REJECT | reason: M-09 is retired (#163/#240). "Dishes are sellable" is the ambient endpoint. The real weave is the demand-gating already captured in M-26/M-28 above.
- REWORK: dossier 2nd-anchor candidate "economy via numismatics mint" cites M-09 which is retired; reformulated as M-26 + M-28 above (demand-gating, not sell-for-coin).

## create_ultimate_factory   [anchors: Create (1)]
- from: renewable diamond / blaze-rod outputs | via: create:compacting / create:haunting | to: Create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: This is purely internal to the Create pillar — byproduct loops within one system don't add a second anchor. The mod deepens Create's self-sufficiency but M-32 requires the byproduct feeding a *different* system's input.
- from: coal-block → diamond chain (endgame scarcity bypass) | via: create:compacting (heated) | to: scarcity/economy | motif: M-30 | power: endgame | tone: clash | verdict: REJECT | reason: Renewable diamond explicitly undercuts M-30 regional-scarcity gating — if anything, this recipe is a *design conflict* to review, not a weave. Scarcity is the pack's foundation; a renewable diamond path may need to be tuned/removed.
- LEAVE — recipe datapack only; no items/methods of its own to route into a second system. Deepens the Create pillar; the scarcity-bypass concern is a balance flag, not a weave.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single joke music disc; 0 blocks, 0 methods. Forcing any recipe/economy edge would be noise.

## woodworks   [anchors: survival (1)]
- from: woodworks deco blocks (chests, boards, bookshelves, ladders) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wood deco blocks that players don't want crush back to planks + sawdust + XP nugget — lossy but recoverable; ties the decoration palette into Create's recycling web and gives a reason to run deco blocks through a crushing wheel.
- from: woodworks:sawmill recipe type | via: woodworks:sawmill | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The Sawmill is a stonecutter-for-wood, not a Create method. Routing Create-processed wood through a separate Sawmill doesn't add a pillar anchor — it's parallel infrastructure, not method-pull into Create. Overlap with create:cutting is cosmetic, not a weave.
- REWORK: dossier lists "create:cutting — overlap Sawmill outputs" as a 2nd-anchor candidate; this is correctly weak (M-12 cited but the method pull is cosmetic overlap, not a real cross-system edge). M-04 crushing is the stronger and more coherent link.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP piped from Create's mob farm into an Ars imbuement altar replaces the vanilla "stand next to an enchanting table" flow — the magic pillar draws on Create's industrial XP supply, making Create-scale mob farms upstream of magic progression.
- from: create_enchantment_industry blaze_enchanter output (enchanted gear) | via: occultism:ritual | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: An Occultism ritual that requires an industrially-enchanted item as a component forces magic and Create-enchanting to depend on each other — the enchant factory becomes upstream of the summoning circle, not a standalone shortcut.
- from: create_enchantment_industry:grinding (Mechanical Grindstone) | via: create_enchantment_industry:grinding | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The Mechanical Grindstone is already an in-pillar Create method (automated grindstone on the Create spine); gating a create output behind its own machine isn't a cross-system weave.
- from: liquid XP → magic ritual fuel | via: occultism:ritual (XP cost) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Occultism rituals already consume XP natively via their level requirement; piping liquid XP to substitute doesn't add a new cross-system link — it just automates what already exists. Captured better by the imbuement link above.
- REWORK: dossier 2nd-anchor candidate "M-10 Forbidden Arcanus / Ars feed liquid XP" is sound in principle; formalized as the imbuement link (ACCEPT) above. The "M-05 native-gating" candidate is better expressed as M-10 since Create-Enchantment is itself a Create add-on (gating its own machine behind Create parts is circular, not cross-system).

## knightlib   [anchors: support/library (1)]
- LEAVE — utility library; its content items (grail, chalice, homunculus, essence) are inert without Knight Quest, which is not in this pack. Weaving dead items is prohibited. If Knight Quest is ever added, knightlib:great_essence is a natural M-02 reagent candidate.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid QoL buttons (rotate/balance/clear); 0 items, 0 recipes, 0 loot. No gameplay surface.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (ore) — region-locked heavy-metal ore | via: GTMOGS regional ore-gen | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: Uranium spawns only in specific biome strata (confirmed: 3 biome-modifiers in the jar), so reactor-grade fuel is regionally locked — players without uranium must trade with whoever controls the uranium region, making the reactor a genuine specialization node rather than a personal build.
- from: createnuclear:steel_block / c:ingots/steel | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Reactor-grade steel plate becomes a required structural alloy for mid-tier Aeronautics airframes and hull plating — the materials refinery and the shipyard become interdependent production chains.
- from: createnuclear reactor (massive SU output) | via: create:* power → aeronautics engine | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: REJECT | reason: M-13 covers fuel→propulsion, but the reactor outputs SU (rotational force), not a fuel item that an engine intake consumes. The reactor powers Create machines generally; it doesn't feed a dedicated aeronautics fuel line. No direct method routing here.
- from: createnuclear:enriched recipe type | via: createnuclear:enriched | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: The enriched/soul enrichment method (enriching_campfire using soul fire) has a thematic overlap with Occultism's soul mechanics, but applying nuclear enrichment as a magic reagent prep step is a tone clash (atomic-industrial vs. occult-mystical) and there's no method bridge in the palette that makes this coherent.
- from: createnuclear anti-radiation gear | via: KubeJS cross-mod craft | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Anti-radiation armor requires a Cold Sweat thermal-resistance component (or a relevant survival reagent) as a crafting ingredient — nuclear hazard and environmental survival pressure interlock, making the hazmat suit a cross-route product neither a pure Create nor a pure survival specialist can make alone.
- REWORK: dossier 2nd-anchor candidate "economy via numismatics mint" for uranium/steel cites M-08 correctly; reformulated here as M-30 (regional-scarcity gate on uranium → trade demand) which is the stronger demand-gating weave. M-08 (player-minted coin from uranium) is also valid but subordinate.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (endgame companion) | via: occultism:spirit_fire or ritual | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: The wolf's quantum_drive or optical_sensor component requires a spirit-infused sub-part made via Occultism — building the ultimate Create companion demands a collaboration with the magic specialist, because a soul-bound focus can't be machined.
- from: createmechanicalcompanion modules (combat/utility) | via: boss drop as gating input | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A high-tier wolf module (e.g. Combat: fire/shock attack) is locked behind a boss drop ingredient — the companion grows in power as players take on the world's bosses, making exploration/combat a prerequisite for the clockwork pet's full potential.
- from: createmechanicalcompanion:illager_engineer_spawn_egg | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: The illager_engineer is a hostile mob (spawn egg present); seeding its drops as trade goods is M-34 combat-supply. However, loot=yes but no confirmed loot table for the illager — the drop is the spawn egg itself, not a commodity. Flagging as REJECT pending confirmation that the illager_engineer drops a unique non-trivial item worth weaving.
- REWORK: dossier says "none — leave" for 2nd anchor due to "combat isn't a pillar." That's correct for a bare combat link, but the magic-cross-route (M-29 above) and boss-key unlock (M-15 above) are coherent and don't require combat to be a pillar — they anchor to magic and survival respectively. The "leave" verdict was too conservative.

== CHUNK COMPLETE ==
