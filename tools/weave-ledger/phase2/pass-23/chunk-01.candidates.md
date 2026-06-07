# Phase 2 candidates — chunk-01

## rhino   [anchors: support (1)]
- LEAVE — genuine zero-surface code library (JS runtime engine for KubeJS; no items, no methods, no loot). Indirectly enables the pack's recipe-weaving but has no content surface to weave.

## netmusic   [anchors: support/flavor (1)]
- from: netmusic:music_cd (NBT-encoded custom disc) | via: recipe (crafting table) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: forcing a coin-sale edge on an audio-cosmetic item is contrived — the disc carries no scarcity or production value; tone clash between "URL-streamed music" and the economic loop; loot=yes but drops are incidental. The mod's content is behavior, not tradeable goods.
- REWORK: existing connection through `touhou_little_maid:altar_recipe_serializers` is light flavor (maid altar crafts a CD). OK as flavor weave — no rework needed; it's already scoped to its sanctioned support role.

## createshufflefilter   [anchors: Create (1)]
- from: createshufflefilter:shuffle_filter / weighted_shuffle_filter | via: recipe (crafting) | to: Create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: the filters are a Create-internal builder utility with no cross-system surface. Giving them a Create-processing recipe step would add cost with no narrative payoff — nobody cross-system needs a shuffle filter. One-item QoL addon; no coherent 2nd anchor without forcing it.
- LEAVE — single Create-internal utility; no routable material, no loot, no foreign method consumer.

## vinery   [anchors: survival (1)]
- from: vinery wines/ciders (effect-bearing finished beverages) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Bottled wines are multi-step (cultivate grapes → ferment → age) luxury goods with real potion effects — a classic sell-at-market trade good; a vineyard specialist selling aged wine to the server is exactly the Eco-style trade the loop wants.
- from: vinery:apple_mash / grape_juice | via: create:milling or create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Routing grapes or apples through a Create Mill before the fermentation barrel fits naturally — the mill shreds the fruit into mash without the grapevine_pot stomp, giving the Create player an inline production step that feeds Vinery's own downstream. Deepens the food-processing chain without bloating cost (one extra step for the raw ingredient, not the finished wine).
- from: vinery:apple_juice / apple_cider | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is effectively the same M-12 edge as above (apple-press already handles apples→mash in-mod; adding a second Create mixing route for juice would duplicate the mash candidate and fragment the chain; one M-12 entry is cleaner).
- REWORK: existing anchor is survival only. Both ACCEPT candidates above are 2nd-pillar additions (economy + Create), so the mod moves from 1 to potentially 3 anchors — keep only the strongest pair: M-09 economy (strong, fits the loop) and M-12 Create (med, completes a food-chain pull). OK — no existing connections to rework, both are net-new.

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / naturalist:bushmeat (cooked variants) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Hunted game is a renewable luxury food supply — a hunter specialist selling butchered game at the Trading Floor closes the diet-variety demand loop cleanly; naturalist's unique meats are distinct from vanilla beef/pork so the sell incentive is real.
- from: naturalist:glow_goop (firefly drop — luminescent fluid/material) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A bioluminescent goop from a rare ambient creature as a light-attuned arcane reagent refined through the Imbuement Chamber fits the Ars Nouveau vibe naturally (harvested light essence → arcane input); mid-tier because firefly netting is not trivial. Advances the organic→magic edge.
- from: naturalist:antler (bone-analog drop from deer) | via: farmersdelight:cutting or create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: antler has no established consumer in the Create/food chain — milling an antler into bone meal / powder is mechanically valid but thematically weak (antlers as ground powder feels like a stretch, not "of course"). The stronger story for antler is the magic path (M-02/M-10) rather than Create processing. One accepted Create-adjacent edge is enough here.
- from: naturalist:shellstone / naturalist:froglass deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flagged this as WEAK; shellstone/froglass are obtained in-world as worldgen blocks, not crafted, so the "recycle deco back to raw" story is thin — players won't be mass-placing then crushing these. M-04 is a lossy recycle motif best applied to craftable deco, not naturally generated stone. Not worth an edge.
- from: naturalist mob drops (venison, bushmeat, glow_goop) | via: bountiful board (loot-seed) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bounty boards paying coin for harvested game meat / glow_goop creates a combat-hunter economy loop — players patrol biomes for Naturalist animals, fulfill bounties, earn coin. Reinforces the survival→economy edge and makes the unique fauna economically meaningful.
- REWORK: no existing connections to rework. OK after new candidates.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack higher-tier packs (netherite/dragon themed variants) | via: create:sequenced_assembly | to: Create | motif: M-20 | power: endgame | tone: ok | verdict: ACCEPT | hook: A Deploy step stitching reinforcing plates or processed leathers onto a high-tier backpack blank fits the "assembled gear" fantasy — the endgame dragon or netherite pack requires a Create fabrication step, grounding exploration logistics in the production system. Depth scales appropriately (only endgame variants, not basic packs).
- from: travelersbackpack:tank upgrades (fluid-tank upgrade modules) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is for a mod's flagship item built in its own machine gated on Create parts — tank upgrades are an accessory, not the mod's flagship; routing them through mechanical_crafting for a mid-tier component isn't clearly the "native method" story M-05 tells. Better kept as a vanilla crafting step or folded into M-20 for the high-tier pack assembly. Avoid doubling up weave motifs on support-level items.
- from: travelersbackpack packs (fluid-tank, portable buffer) | via: aeronautics thematic tie | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: the aeronautics tie is thematic (explorers use backpacks on long voyages) but there's no routing mechanic to name — a "because an explorer takes it on a ship" connection has no motif and no recipe/method form. Thematic adjacency without a material route doesn't qualify.
- LEAVE (2nd candidate accepted: Create via M-20). The accepted M-20 edge gives a 2nd anchor; no further candidates survive red-team.

## lithostitched   [anchors: support/library (1)]
- LEAVE — zero-surface worldgen library. Registers no items, no loot, no recipes. Shapes terrain; nothing to weave.

## txnilib   [anchors: support/library (1)]
- LEAVE — pure developer code library. Zero items, zero methods, zero loot.

## zombiemoon   [anchors: survival (1)]
- from: zombiemoon hostile mobs (Zombie Brute, Spitter, Mutant Brute, etc.) | via: bountiful board (loot-seed) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: dossier explicitly confirms no unique drops (loot=no, vanilla rotten-flesh-style only). A bounty board paying coin for killing mutant zombies is structurally valid under M-14, but WITHOUT a unique drop to differentiate the bounty target, the board entry is "kill zombie for coin" — effectively the same as vanilla zombies, diluting the bounty pool. The mod earns its place as survival/danger pressure; forcing a paper-thin economy edge adds no loop value. Leave as a clean 1-anchor danger/pressure mod.
- LEAVE — no unique drops, no items, no methods. The danger-pressure role is its justified position; a forced bounty edge without differentiated drops is a defect, not a weave.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — pure behavior framework (combat animation/hitbox system). No items, no methods, no loot, no recipes. A behavior mod that reshapes how weapons feel; nothing to route material through.

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure MineColonies blueprint content (architectural styles). Registers no items, no methods, no loot. The Steampunk style's consumption of Create blocks at build time is a natural design-level tie (MineColonies consumes the Create production chain) but it's not a recipe-weave; it's a structural design fact already noted in the dossier. No actionable candidate.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem (arcane currency) | via: ars_nouveau:imbuement (foreign essences → source_gem) | to: magic (internal hub) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: source_gem is the established M-01 spine — all foreign magic essences mint into/out of it through imbuement; this is the reserved reagent's core role and anchors the magic pillar's internal web. (Established motif — record for completeness, not a new proposal.)
- from: ars_nouveau Vitalic/Agronomic Sourcelinks (absorb mob deaths, crop/tree growth) | via: config/worldgen tie (organic surplus → Source generation) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Every animal death, crop harvest, and baby mob nearby feeds Source into nearby jars without a recipe — the organic→magic sink is live natively; the pack's farming/ranching/mob mods become a passive power source for the magic pillar. No new recipe needed; the method exists. Makes the survival→magic edge real for any farmer or rancher specializing.
- from: ars_nouveau:source_gem / spell_scrolls | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier correctly flags this as WEAK and prefers dedicated arcane-currency weaves for the economy edge. A spell scroll as a sellable is plausible but the better economy story for Ars is a specialist selling magic services/reagents through the Trading Floor — not a simple numismatics price tag on a source_gem. The motif fits but the weave is thin; park unless the 0.9 economy pass wants it. The magic↔economy tie is better threaded when the economy pillar is built (v0.9.0).
- from: ars_nouveau archwood logs | via: ars_nouveau:imbuement / Volcanic Sourcelink (burns for bonus Source) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: archwood→Source via Volcanic Sourcelink is in-mod behavior, not a cross-system method-pull. Routing archwood through a Create method (e.g. milling) for a bonus output is possible but has no existing consumer and would be thin-flavored. Not a priority; no strong loop contribution.
- REWORK: current anchor is magic (1) only. M-01 and M-02 together give survival + magic (2) — this is the primary gap to close. No existing authored connections to rework. OK once M-02 is implemented.

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot tables (nether ruin/altar/campsite chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding bounty-board reward coins or Numismatics tokens into Nether ruin chest loot turns dangerous Nether exploration into an economic incentive — players brave Nether hazards to loot ruins and bring back currency, feeding the trade loop directly. The loot-seed delivery requires no recipe; a datapack edit to the chest loot tables is the Phase-3 action.
- from: formationsnether nether altar/sanctuary structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether altars and sanctuaries are thematically arcane — seeding Ars Nouveau essences or occultism spirit-drops into their loot tables makes them a naturally dangerous source of magic reagents. A player who wants magic materials must venture into the Nether and raid these ruins, creating a survival-pressure→magic-production supply chain. Fits the danger-pressure→production narrative of the loop.
- REWORK: no existing connections. Both accepted loot-seeds add 2nd + 3rd anchors (economy and magic) appropriately scoped to the mod's actual surface (loot tables). OK.

## create_confectionery   [anchors: Create, survival (2)]
- from: create_confectionery finished chocolates / effect candies (bar_of_black_chocolate, ruby_chocolate_candy, hot_chocolate) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Multi-step Create-processed sweets (cocoa → crushed → mixed → molded → bottled) are exactly the luxury consumables M-09 targets — a confectionery specialist selling artisan chocolates and effect candies at the Trading Floor is the kind of niche production→trade story the pack rewards. Depth is already in the chain (Create crushing/mixing/compacting); the sell step costs nothing extra.
- REWORK: existing Create + survival anchors are both sound (the mod genuinely uses create:crushing/mixing/compacting and outputs food items). OK — connections sound. M-09 is a bonus 3rd anchor.

## irons_lib   [anchors: library/support (1)]
- LEAVE — library/API dependency for Iron's Spellbooks. Transmog table and player statue are cosmetic-only with no routable material. Nothing to weave.

## bigsignwriter   [anchors: support/UI (1)]
- LEAVE — client-side UI utility that adds large-character typing to signs. Zero items, zero methods, zero loot. Sanctioned decoration-aid role.

## smartbrainlib   [anchors: support/library (1)]
- LEAVE — AI framework library. Zero items, zero methods, zero loot. Pure code dependency.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — config API library. Zero items, zero methods, zero loot.

## dragonlib   [anchors: support/library (1)]
- LEAVE — developer tooling library. One dev/test artifact block (dragonlib:dragon) that is not a real gameplay item. Zero methods, zero loot.

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — Create build-automation QoL tool (pattern schematic tiles an existing schematic). Zero blocks, three utility items (schematic/quill), no methods, no loot. No foreign material to route; the items are build-workflow instruments, not tradeable goods or processable materials. One Create anchor is appropriate.

== CHUNK COMPLETE ==
