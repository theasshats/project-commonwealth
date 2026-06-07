# Phase 2 candidates — chunk-05

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (geode worldgen) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: mining_core is a worldgen consumable that gates the miner — crushing it away would remove the scarcity gate the whole mod is designed around; the join is destructive arbitrage, not additive
- from: FE supply chain (createaddition → miner) | via: recipe (FE source must be scarce-metal-derived) | to: Create/scarcity | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins only mint if you smelted the regional ore into FE first — tracing coin output back to regional scarcity without a new recipe, just a supply-chain constraint documented in config/KubeJS power-source gating
- from: createblockchain:piggy_bank (loot=yes, drops coin spread) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; piggy banks already ARE the coin faucet flavor; no structural gain
REWORK: existing Create anchor is sound (mechanical_crafting/mixing to build the miner). Existing economy anchor is the mod's entire point. OK — connections sound; M-08 supply-chain constraint is a config/design note, not a new recipe edge.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- LEAVE — already ≥2 anchors (Create kinetic method + decoration palette); the mod IS the bridge earning Rechiseled its Create pillar; no coherent additional system weave possible (no foreign material surface, 0 c:tags, no food/mob/magic content).
OK — connections sound.

## controlling   [anchors: support/QoL (1)]
- LEAVE — pure client UI (keybind search); zero items/blocks/loot; no content surface to weave.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger, c:seeds/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds ginger root into a spice powder that feeds ExtraDelight/Farmer's Delight recipes — a seasonal crop entering the Create-powered food-processing web
- from: snowyspirit:ginger (c:crops/ginger) | via: farmersdelight:cooking or extradelight:mortar | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mortar-ground ginger as a spice ingredient unlocks gingerbread cookie and eggnog recipe variants through FD cooking, deepening the winter food chain without forcing Create
- from: snowyspirit:eggnog / gingerbread_cookie (c:foods/cookie, c:foods/candy) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; every food is trivially sellable; no structural loop value
- from: snowyspirit:sled | via: aeronautics/transport pairing | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: sled is a ground snow-slide vehicle; thematic clash with airships; no coherent motif
- from: snowyspirit:ginger (c:crops/ginger) | via: ars_nouveau:imbuement (seasonal crop as attunement catalyst) | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger harvested only in Serene Seasons winter becomes a seasonal reagent for a winter-attuned Ars Nouveau imbuement (cold/frost spells), tying the festive crop into the magic web via M-16 seasonal reagent

## geckolib   [anchors: support/library (1)]
- LEAVE — pure animation/rendering API; zero items/blocks/loot; no content surface to weave.

## emojitype   [anchors: support/QoL (1)]
- LEAVE — pure client chat input helper; zero items/blocks/loot; no content surface to weave.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo (bulk consumable) | via: bountiful decree objective | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the bounty board lists "arms dealer" bounties — supply X rounds for coin payout — turning the Create ammo factory's surplus into a genuine economy node (the arms-dealer specialization is structurally distinctive: only a Create-tech player can mass-produce ammo at viable rates)
- from: createimmersivetacz:gun_barrel / firing_mechanism (endgame parts) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the mod already uses sequenced_assembly as its core mechanism (inbound weave confirmed in made-by methods); recording as REJECT to avoid double-counting an existing weave
- from: createimmersivetacz:nitropowder_bucket (fluid) | via: tfmg:distillation or tfmg:coking | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: nitropowder as a distillation byproduct from TFMG's coking/refinery chain — connecting the ammo supply line to the industrial chemistry tier rather than treating gunpowder as a free worldgen input

## dataanchor   [anchors: support/library (1)]
- LEAVE — pure data-attachment/networking library; zero items/blocks/loot; no content surface to weave.

## cristellib   [anchors: support/library (1)]
- LEAVE — pure structure-config library; zero items/blocks/loot; no content surface to weave.

## curios   [anchors: support/library (1)]
- LEAVE — equipment-slot API; zero items/blocks/loot of its own; no content surface to weave.

## bountiful   [anchors: economy (1)]
- from: bountiful board (reward pool) | via: config/datapack decree pointing payouts to numismatics:* coins | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards pay Numismatics coin for fetch/kill objectives — the canonical loop-closing faucet that makes mob drops and farm surplus convert into the pack's currency; structurally distinctive because it is the only demand-pull node that prices ANY surplus at market
- from: bountiful decree objectives (CREATE goods — processed sheets, mechanisms, etc.) | via: decree config | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a Fabrication decree requests Create-processed intermediates (brass plates, mechanisms) for coin payout — meaning only a player who built a Create factory can fill large-quantity bounties; creates a genuine specialization-pressure node
- from: bountiful decree objectives (magic reagents — source gems, essences) | via: decree config | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Reagent decree requests magic drops and essences for coin reward — only magic-pillar players can fill these, enforcing specialization and giving magic outputs an economy outlet
- from: bountiful decree objectives (fish/crops from Tide/Upgrade Aquatic) | via: decree config | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Provisions decree requests seasonal fish, crops, and processed foods — turning the survival pillar's food outputs into a coin income stream that naturally scales with Serene Seasons availability
REWORK: existing economy anchor is the mod's entire point. The new links above (Create goods decree, magic reagent decree, survival provisions decree, numismatics payout) collectively give Bountiful ≥5 system touches, all structurally valid as loop-closing demand nodes — not generic sellable flagging.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: create_ltab structures (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins yield a Numismatics coin scatter as a discoverable economy seed — players exploring these structures find their first real coins, anchoring the economy pillar to exploration progression without a forced recipe
- from: create_ltab structures (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: LTAB is Create-flavoured; seeding magic reagents (Ars source gems, occultism drops) into Create-industrial ruins is a thematic mismatch — clashes with the industrial vibe of the structures
OK — existing 2-anchor connections (Create theme + survival/worldgen) are sound; adding economy via loot-seed is additive and coherent.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic cooked fish (c:foods/cooked_fish, cooked_pike, cooked_perch, cooked_lionfish) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farmer's Delight's cutting board fillets raw UA fish into portions that cook into proper FD meals — aquatic foods enter the full food-processing web rather than sitting as raw snacks
- from: upgrade_aquatic:driftwood_* / riverwood_* | via: woodworks:sawmill (already inbound) + create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: driftwood and riverwood logs crush back to gravel/raw material + an XP nugget in a Create mill — the aquatic wood set joins the deco-recycling loop already established by M-04
- from: upgrade_aquatic coralstone (deco block family) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: coralstone deco crushes to gravel + prismarine dust byproduct — a distinctive output (prismarine as a Create byproduct) that's coherent with the aquatic theme and feeds further crafting
- from: upgrade_aquatic rare fish / thrasher drops | via: bountiful decree | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; any rare drop is trivially a bounty objective; the structural distinctiveness is in Tide's specialization (see tide entry), not duplicated here

## wits   [anchors: support (1)]
- LEAVE — pure server-side structure-identification command; zero items/blocks/loot; no content surface to weave.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack themed variants (dragon, netherite, blaze, enderman packs) | via: create:deploying / item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a Deployer applies a Create-forged decorative plate (brass or andesite emblem) onto a blank backpack to produce the themed variant — putting mid-tier backpack customization on Create's automation line; light single step, not a full sequenced chain
- from: travelersbackpack:backpack (fluid tanks + hose) | via: aeronautics logistics role (portable fluid buffer for fuel/coolant) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: the backpack tank stores fluid but is not a recipe or processing step — there is no recipe-graph hook; M-13 is for fuel → engine intake, not a passive carry item; no-motif for the passive-logistics angle
- from: travelersbackpack upgrades (crafting/blast/smelting) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is native-method gating (a mod's own machine gated behind Create parts); the backpack's upgrades are vanilla crafting, not a mod machine — misapplied motif; use M-20 (deploy application) instead, which is already accepted above

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear / industrial_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the worm gear's high-torque / low-speed ratio makes it the natural drivetrain component for Aeronautics propeller shafts and control-surface actuators — a GnK gear becomes a required part in aeronautics propulsion recipes, tying the kinetics addon to the logistics arm
- from: gnkinetics:ring_gear / chainable_cogwheel | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: redundant with the worm/planetary gear ACCEPT above — adding a second GnK→aeronautics link dilutes the signal; one distinctive part is enough; record as REJECT to avoid over-weaving

## quark   [anchors: support/decoration (1)]
- from: quark decorative stone variants (andesite_bricks, andesite_pillar, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's andesite bricks and polished stone deco crush back to andesite gravel + an XP nugget — deco recycling closing the build-and-reclaim loop for the pack's most common block palette
- from: quark storage crates (apple_crate, carrot_crate, etc. — c:storage_blocks/* tags) | via: create:compacting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create compactor presses 9 root crops into a Quark storage crate, giving the farm surplus an automated compact-storage step that's worth automating at scale
- from: quark:ancient_wood / ancient_log (Glimmering Weald) | via: woodworks:sawmill | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Quark's unique Ancient wood (Glimmering Weald cave biome) runs through the Woodworks sawmill for higher plank yield — tying a rare exploration-gated wood into the wood-processing web
- from: quark smithing rune | via: quark:smithing_rune | to: magic | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — Quark runes are purely cosmetic armor appearance; no magic-method hook; don't force a magic link on cosmetic smithing

## bettermodsbutton   [anchors: support/QoL (1)]
- LEAVE — pure client pause-screen UI button; zero items/blocks/loot; no content surface to weave.

## create_compressed   [anchors: Create (1)]
- LEAVE — Create-internal storage/QoL layer covering Create's own intermediates only; no foreign material surface; no coherent second-pillar weave possible.

## tide   [anchors: survival (1)]
- from: tide raw fish (c:foods/raw_fish, 100+ biome-gated species) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farmer's Delight's cutting board fillets Tide's raw fish into portions and fish roe — already partially wired (inbound: farmersdelight:cutting), so this is deepening/confirming the existing weave path
- from: tide exotic/abyss fish (abyss_angler, void catches — biome-locked, rare) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: creatures from the abyss and void logically carry occult resonance — spirit-firing a rare deep-sea fish yields a unique essence or transmutes it into a magic reagent (mob-drop reagent sink, M-02 is exact fit here)
- from: tide:angling_table crafting (consumes amethyst / prismarine / copper) | via: create:pressing / create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Angling Table's rod customization parts (specialized hooks, precision line guides) are fabricated with a Create Mechanical Press on copper/brass sheet — gating the advanced fishing rig behind Create tech without touching basic rods
- from: tide fish (rare biome-locked catches) | via: bountiful decree (fishing bounty board) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a Fisher's Guild decree requests specific rare fish for coin payout — structurally distinctive because biome-locking + Serene Seasons seasonal windows mean only a dedicated angler with the right gear can fill it reliably; this is a genuine specialization node, not generic sellability
- from: tide fish (common catches) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; common fish are trivially sellable from any fishing mod; only the rare/biome-locked bounty link (above) is structurally distinctive

== CHUNK COMPLETE ==
