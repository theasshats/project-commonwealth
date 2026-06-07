# Phase 2 candidates — chunk-02 (pass-28)

## jade   [anchors: client-only UI/support (1)]
LEAVE — zero items, no loot, no recipe surface; pure display overlay. Nothing to weave.

---

## corgilib   [anchors: support/library (1)]
LEAVE — pure code library, no blocks/items/loot. No content surface to route through any method.

---

## freefbible   [anchors: support/flavor (1)]
LEAVE — a single inert novelty readable item; no mechanics, no loot. Any forced recipe edge would be noise. Sanctioned as gag/easter-egg; a 2nd pillar would be meaningless here.

---

## modernfix   [anchors: support/performance (1)]
LEAVE — JVM-level perf patches, no blocks/items/loot. Zero content surface.

---

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal ore runs through Create crushers for doubled yield, pulling a gothic-metal material into the tech spine naturally
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 ore-doubling already covers this ore; M-04 (recycling deco blocks) is secondary and weaker — the ore doubling is the primary weave; redundant to list both for the same material
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: bundle of bones — a literal cursed undead drop — feeds a spirit-fire ritual as necromantic feedstock; thematically tight (gothic undead → occult)
- from: born_in_chaos_v1:dark_metal_deposit | via: numismatics mint (via create:pressing) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 requires a regional-scarcity case and the coin is a player-settlement medium — dark metal is thematically a combat/hostile drop, not a monetary metal; palladium (galosphere) is the reserved regional-scarcity candidate; forcing a second coin-metal here dilutes regional specialization. Reject in favor of the Create+magic weave.
- from: born_in_chaos_v1:boss loot (Pumpkin Staff/Soul Saber) | via: loot-seed / KubeJS lock | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal Pumpkinhead boss drop gates a complex dark-metal Create recipe, making the Halloween window matter to tech progression
- from: born_in_chaos_v1:black_argillite (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: argillite brick deco can be crushed back to raw stone + XP nugget (lossy), completing the industrial recycling loop for gothic build materials
- REWORK: existing dossier candidate for M-02 (mob-drop reagent sink → Bountiful bounties) — M-02 is valid in principle (mob drop as magic/economy input) but the economy framing in the dossier leans on sell-for-coin which is the retired M-09/M-14 framing. Reframe: the dark metal / bundle_of_bones become M-11 ritual inputs (done above) or M-34 combat-supply (a combat specialist farms drops and trades them to magic users who need the ritual feedstock).
- from: born_in_chaos_v1:dark_metal / bundle_of_bones | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist farms BIC mobs for dark metal and bone bundles, trading them to the magic player who needs spirit-fire reagents — the hostile mob loop creates inter-player supply

---

## createpickywheels   [anchors: create (1)]
- from: biome/geography-gated power generation (water wheel in River biome, windmill in open Overworld) | via: config-tie (behavioral) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the dossier correctly flags this as a survival-flavor link but there is no motif that covers "behavioral geography gates"; it is a design rule, not a material-routing weave. No item/method involved — the constraint operates entirely through config, not through any method in the methods palette. no-motif → reject-for-review.
- LEAVE — no items, no loot, no recipe-type. The biome-gating enriches Create's survival dimension but there is no method-routable content surface; a 2nd pillar cannot be authored here in Phase 3.

---

## smartbrainlib   [anchors: support/library (1)]
LEAVE — pure AI-framework code library, no blocks/items/loot. Zero content surface.

---

## create_confectionery   [anchors: create, survival (2)]
- from: create_confectionery:bar_of_ruby_chocolate / hot_chocolate | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ruby chocolate — a gem-tinted confection processed through Create — feeds an arcane imbuement as a rare luxury catalyst; the alchemical tradition of "sweet essences" is plausible and the processing depth (cocoa → crushed → mixed → molded) matches the imbuement tier
- from: create_confectionery:*_candy (Speed/Saturation effect candies) | via: ars_nouveau:potion_flask | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: effect candies already satisfy the survival anchor (food/effects); routing them ALSO into potion flasks at this tier would double-dip cheaply without real depth — the imbuement route (ruby chocolate) is the stronger, more thematically grounded magic tie. Reject to avoid dilution.
- from: create_confectionery chocolate fluids (black/white/ruby/caramel buckets) | via: create:mixing as ingredient | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: chocolate fluid becomes a cross-route dependency — another food mod's recipe (e.g. Farmer's Delight pastry, CookingForBlockheads baking, or a custom confection chain) requires liquid chocolate as an input, meaning the Create-specialist chocolate-maker must supply the food-specialist's kitchen; nobody can run both chains solo
- from: create_confectionery:gingerbread_block / caramel_bricks / chocolate_bricks (deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Create anchor is already established (all processing rides create:mixing/pressing/etc.); adding M-04 recycle on deco is a minor incremental that doesn't add a new system. The two accepted weaves (M-10 + M-29) are the better investments. Reject as superfluous.
- REWORK: dossier lists M-09 (luxury good → coin) as a candidate — M-09 is RETIRED. The economy link should be the cross-route dependency (M-29, above) or a colony-supply route (M-28: colonist requesters for candy/chocolate) rather than NPC coin sale.
- from: create_confectionery:*_candy | via: minecolonies requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony children/workers request candy as a comfort item; a confectionery specialist supplies the colony's morale goods (demand is structural, not a vendor sale)

---

## better_climbing   [anchors: support/QoL (1)]
LEAVE — movement-feel tweak only, no items/blocks/loot. No content surface.

---

## stylecolonies   [anchors: support/decoration (1)]
LEAVE — pure blueprint/style pack for MineColonies; no items, no recipe types, no loot. The Steampunk style naturally consumes Create blocks at build time but that is a player-action design link, not an authorable weave. Nothing to route through methods.

---

## galosphere   [anchors: survival (1) — magic is real 2nd via M-07, already established]
- REWORK: dossier notes anchors as survival (1) but the M-07 magic link (allurite/lumiere → attunement catalysts) is "established" and "already gating magic conversions in 33/80/97" — that is a real authored 2nd anchor (magic). Should read: survival + magic (2). Flag for ledger correction.
- OK — the M-07 magic link is the correct 2nd anchor and is properly documented. The two additional candidates in the dossier (M-08 via palladium → numismatics coin, and M-03 create:crushing ore-doubling) are reviewed below.
- from: galosphere:deepslate_palladium_ore / raw palladium | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore runs through the Create crusher for a doubled yield (ore-doubling is an established reward for routing through the tech spine); gives the cave-biome's regional metal a Create tie and draws explorers underground
- from: galosphere:silver_ingot (=palladium) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is explicitly flagged as a scarce regional metal in the pack (CLAUDE.md); once Create-refined, a minting specialist presses it into coin — the regional distribution of the ore makes palladium coin a genuine trade driver (not every player has the biome)
- from: galosphere:allurite_block / lumiere_block deco | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (crush deco back to raw + XP nugget) is a valid structural motif but galosphere's primary create link is already M-03 (ore doubling on palladium), which is the stronger, more impactful weave; adding M-04 on the crystal deco blocks is a thin incremental. The shards are RESERVED (M-07) — don't crush the shards, only the shaped bricks. Marginal value, reject to keep the weave set focused.
- from: galosphere:silver_bomb (4× silver + TNT) | via: loot-seed / combat | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the silver bomb is an anti-undead weapon, not a farmed drop. M-34 covers combat-route supply (boss/danger output → trade), but this item is crafted, not dropped. No combat-route farming dynamic — reject.

---

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / _netherite (higher tiers) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: diamond and netherite gliders require Create-assembled parts (reinforced frames, precision components) — the tech spine gates personal flight gear so the aeronautics pillar roots into production rather than being a vanilla-crafting add-on
- from: vc_gliders:paraglider_iron (base tier) | via: create:pressing (reinforced paper = pressed sheets) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: gating the BASE glider tier behind Create would frustrate early-game access — the cost-model rule says basics ≈ 3× but not through a complex chain; iron tier should stay accessible. Gate only the mid/endgame tiers. Reject for the iron tier specifically.
- from: vc_gliders damaged/repaired gliders | via: create:item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) is for applying a woven part onto a base to UPGRADE it, not for repair. Glider repair already uses smithing table with reinforced paper. Forcing a create:item_application repair edge would be a flavor mismatch and adds complexity without advancing the loop. Reject.
- from: vc_gliders:copper_upgrade / nether_upgrade | via: create:pressing / mixing | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: glider upgrades (copper thermal management, nether insulation) require Create-processed copper sheets / nether alloy — the upgrade line deepens into the tech spine, making each capability unlock a production step

---

## fishingreal   [anchors: survival (1)]
LEAVE — behavioral tweak that spawns live fish entities from fishing catches; no items, no loot, no recipe-type. The weaving surface belongs to the fish-content and cooking mods beneath it (createfisheryindustry, farmersdelight), not this behavior layer.

---

## sablecollisiondamage   [anchors: support/physics (1)]
LEAVE — collision-damage physics addon for Sable/Aeronautics; no items, no loot, no recipe-type. Enhances the aeronautics pillar but has no authorable content surface.

---

## createshufflefilter   [anchors: create (1)]
LEAVE — two filter items that extend Create Deployer behavior; no material graph, no loot, no recipe type. A builder utility QoL; no coherent 2nd pillar without forcing an edge.

---

## aeronautics   [anchors: aeronautics (1); create de-facto 2nd, now jar-proven]
Note: The dossier has a git-conflict artifact (<<<<<<< HEAD / ======= / >>>>>>> blocks) for the anchors/2nd-anchor-candidates section. Both sides say essentially the same thing; the jar-grounded side is the correct reading. Flagging: the conflict markers should be resolved in the dossier file.

- from: aeronautics:levitite_blend | via: create:mixing → in-world crystallization → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite blend (zinc + end-stone powder, mixed in a Create basin) is the bulk lift material every shipbuilder needs; a mass-production specialist becomes the server's lift supplier, and the zinc scarcity gates how fast the fleet can grow
- from: aeronautics:levitite blend (in-world crystallization step) | via: KubeJS catalyst requirement (adjacent Occultism/Ars reagent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the blend→levitite crystallization step (code recipe) is the one natural seam for a magic catalyst requirement — an allurite shard (M-07 attunement) or source gem placed adjacent would make airship lift an aeronautics↔magic cross-route; no player can run both alone
- from: aeronautics:adjustable_burner | via: config-tie (TFMG fuel tag extension) | to: survival/create | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: extending the burner's fuel tag to accept TFMG diesel makes the fuel-refinery specialist the fleet's heat source — a charcoal/fuel supplier serves every ship, not just the Create tech spine
- from: aeronautics:levitite_blend | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: duplicates the crystallization-catalyst proposal above (both are magic↔aeronautics seams on the same material/step). The KubeJS catalyst approach (ACCEPT above) is cleaner and more architecturally controlled than a second imbuement route on the same item. Reject to avoid double-coverage.
- from: simulated:rope_coupling / docking connector | via: config / world design | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: docking stations at player-built trading posts make the airship a real logistics-for-hire service; a logistics specialist charges for cargo runs between settlements — aeronautics enables the economy's physical movement arm as a labor/service market
- from: aeronautics:end_stone_powder | via: create:mixing | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: end_stone_powder is a direct recipe input (levitite blend needs it), not a byproduct; M-32 is for production byproduct/waste becoming feedstock. This is a direct ingredient, not a circular waste-stream. Reject as mis-motif.
- REWORK: dossier candidate "dyeable tires → economy NPC trade goods (M-09)" — M-09 is RETIRED. Cosmetic tire variants don't gate demand; drop this candidate. No replacement motif is coherent here (tires are functional, not service or regional-scarcity items).
- REWORK: dossier candidate "levitite → economy M-08 mint-adjacent / M-09 sell" — M-09 is RETIRED; the M-08 framing is correct (player-minted currency from regional zinc scarcity) and is ACCEPTED above. The "M-09 sell" half should be struck.

---

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_counter / *_cupboard / *_shelf (kitchen/storage blocks) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running wood planks through a Create mechanical saw to produce the finished furniture components gives the decoration layer a production-chain tie; a woodworking specialist uses the saw to supply furnishings (the Create spine produces the deco layer, not just machines)
- from: handcrafted:*_fancy_bed / *_couch / *_dining_bench (upholstered furniture) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is for a mod's FLAGSHIP item built in its own machine gated on Create parts. Handcrafted has no machine of its own, and upholstered furniture is not a flagship tech item — routing beds through mechanical_crafting would feel arbitrary and frustrating (everyday comfort items behind a complex rig). The create:cutting approach (M-12, ACCEPTED) is the correct, appropriately-scaled tie. Reject M-05 for handcrafted.
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the jam jar is a cross-mod ingredient — a Farmer's Delight or Extra Delight recipe uses handcrafted's jam as an input (spreading on toast, filling a pastry), binding the furniture mod's one food item into the cooking web
- from: handcrafted furniture (high-end sets) | via: minecolonies colonist requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists request handcrafted furnishings for their home upgrades — a carpenter/furniture specialist supplies the colony's domestic tier, creating persistent structural demand for deco production

---

## copycats   [anchors: create (2 — decoration addon, zinc-built)]
- OK — connections sound. Copycats is a Create decoration addon built from zinc; it already sits squarely in the Create pillar and the dossier correctly notes that a forced second pillar would be artificial. The one candidate flagged in the dossier (LEAVE) is correct. No REWORK needed.
- from: copycats:copycat_block / copycat_panel | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (lossy recycle of deco blocks) is an option but all copycat shapes ARE zinc-derived Create items — crushing them back to zinc dust/gravel is the literal M-04 application. However, this adds no system link; Copycats is already in Create. There is no second pillar gained, just an internal Create recycling loop. Reject as no new pillar added.

---

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (flagship appliance blocks) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Oven, Fridge, and Sink are the kitchen's flagship machines; gating them on Create-pressed copper/brass components (or a sequenced Deployer step) makes the kitchen infrastructure a product of the tech spine — a Create specialist supplies kitchen appliances to the food cluster
- from: cookingforblockheads:cooking_table (hub block) | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the Cooking Table is the recipe-discovery interface, not a processing machine — gating even the basic hub behind Create would frustrate early food access. Only the appliance machines (oven/fridge/sink) warrant M-05 depth. Reject for the cooking table itself.
- from: cookingforblockheads kitchen (demand aggregator) | via: minecolonies colony cook hut | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies cook hut uses a cooking table equivalent; a colony food-production chain that routes through CookingForBlockheads appliances gives the kitchen a structural colony-demand tie (M-28 colony route — basics cheaper/faster via colony)

---

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate set / steampunk set (high-tier) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy and Steampunk armor sets require Create-pressed iron/steel plates assembled on a mechanical crafter — endgame armor becomes a tech-spine product, the armorsmith needs Create infrastructure to supply combat gear
- from: immersive_armors:divine_chestplate set | via: ars_nouveau:enchanting_apparatus or armor_upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Divine set's "block-one-attack-per-minute" passive is explicitly magical — finishing it through an arcane apparatus (source gem + reagents in an enchanting apparatus) is thematically coherent; the magic specialist finishes the armor the combat player wears
- from: immersive_armors:bone_chestplate set | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: the Bone armor set is crafted from vanilla bones — it is a LOW-tier set (movement bonus, pacify skeletons), not a magical endgame item. Routing a basic-tier bone armor through spirit fire would gate an everyday item behind a late-game method; violates the depth-scales-with-power rule. Reject.
- from: immersive_armors:prismarine_chestplate set | via: create:crushing (prismarine shard grinding) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: M-03 is ore-doubling — running an ore through Create to yield a doubled material. Prismarine shards are already a vanilla crafting ingredient, not an ore. Crushing prismarine into shards is M-04 territory (lossy recycle) and even that is thin — prismarine isn't a deco "block" in the recycling sense. No clean motif fit. Reject.
- from: immersive_armors:heavy_chestplate / steampunk armor | via: emergent trade (crafted by armorsmith, demanded by combat players) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a dedicated Create-armed armorsmith produces Heavy/Steampunk sets and sells them to combat specialists who can't maintain the Create rig themselves; the combat-supply chain (M-34) runs from tech production to the front line

== CHUNK COMPLETE ==
