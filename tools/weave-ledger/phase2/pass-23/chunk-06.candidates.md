# Phase 2 candidates — chunk-06

## libipn   [anchors: support/library (1)]
- LEAVE — pure GUI/config library for IPN; zero items, zero methods, zero content surface. Nothing to weave.

## knightlib   [anchors: support/library (1)]
- LEAVE — library for Knight Quest, which is not in the pack. The bundled content (great_chalice, grails, homunculus, essences) is inert without Knight Quest as a dependent. Weaving dead/inaccessible items is a forced edge. Note: if Knight Quest is ever added, knightlib:great_essence is a natural M-02 (mob-drop reagent sink) candidate.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / meadow:amethyst_cheese_wheel / meadow:buffalo_cheese_wheel | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Alpine cheese is a slow-crafted luxury — a meadow specialist sells wheels to inland players who lack the dairy chain.
- from: meadow:alpine_salt | via: create:milling (salt → fine salt crystals / seasoning) then into create:mixing or farmersdelight:cooking chains | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt is a universal seasoning input; milling it brings the alpine biome's unique ore into the Create processing web as a cooking/preservation reagent.
- from: meadow:chambray_wool / meadow:felt (felted textiles) | via: create:pressing (compress felt into panels) or sell as trade cloth | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Chambray/felt are deco textiles, not clearly luxury goods with Numismatics price hooks; the economy angle is thinner than cheese/salt, and pressing felt → panels stretches the theme. Cheese + salt already secures the 2nd anchor.
- REWORK: existing connections — none beyond survival anchor. OK for now once M-09 + M-12 land.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE → item charge) applied to irons_spellbooks:arcane_essence storage items / focus batteries | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: The electric layer isn't just for motors — a mage powers their focus capacitor off the same copper-wire grid, threading the Create electrical spine into the magic pillar.
- from: createaddition:seed_oil / bioethanol (liquid fuel) | via: createaddition:liquid_burning → FE → propulsion / tfmg fuel feed | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Farmed seeds become airship fuel; the agricultural loop feeds the logistics arm (crop → seed oil → engine).
- from: createaddition:electrum_ingot | via: createaddition:rolling (electrum → wire/rod) as required component for aeronautics wiring/control surfaces | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Electrum as a drivetrain control-surface material is plausible but thinly motivated — aeronautics propulsion is better served by M-13 fuel or M-23 structural alloys; adding a third anchor via electrum wiring over-fragments the proposal when two stronger ones already land (M-17 + M-13).
- REWORK: existing connections — Create only (1 anchor). M-17 + M-13 each add a real second anchor; pick at least one.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs / Undead Fortress / Spider Cave chests) | via: loot-seed — inject Numismatics coin drops (cog/spur) into dungeon chest loot so defeating a dungeon yields starter currency | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Clearing a crypt funds your first coin purse — the scarcity loop closes: danger → combat → starter coin.
- from: betterdungeons loot tables | via: loot-seed — inject Ars Nouveau/Occultism reagents (source gem shards, raw essence) into dungeon chests so exploration gates early magic progression | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: The catacombs hold the first arcane ingredients; magic users must explore to kickstart their craft.
- REWORK: existing connections — survival only (1 anchor). Both loot-seeds are orthogonal and both should land.

## ctov   [anchors: survival (1)]
- from: ctov village loot tables (custom food/armour/goods in biome-variant chests) | via: loot-seed — inject Numismatics coin into ctov-specific chests so settlements have a starter economic feel | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: ctov uses vanilla loot tables with only minor additions; seeding coin into every village variant inflates starter liquidity. betterdungeons is the better loot-seed target for M-08 (it has genuine danger-gating). ctov's value is settlement flavor, not a scarcity-loop node. LEAVE this edge; if economy wants a village coin source, it belongs on a bounty board tied to ctov's trade hubs, not its chest loot.
- LEAVE — structure/worldgen flavor; its only economy seam is an off-the-shelf loot tweak that's weaker than betterdungeons. Anchoring it to economy via trivial coin loot would be a forced edge. OK at survival (1) for a worldbuilding support role.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot tables (onboard chests, hard-to-reach loot) | via: loot-seed — inject a Create Aeronautics component or a unique structural part into whale-chest loot so reaching them by airship is mechanically rewarded | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Sky whales are the natural destination for a completed airship — seeding a rare aeronautics blueprint or hull component into their loot makes the flight there worth it as progression, not just scenery.
- from: sky_whale_ship loot tables | via: loot-seed — inject a unique magic reagent (an M-02 mob-drop style rare) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: The sky whale's tone is whimsical-adventure, not arcane. A magic reagent in a floating whale's loot chest is thematically awkward — the aeronautics/exploration reward is far cleaner. One strong anchor addition (aeronautics via M-15) is enough; the magic seed is a stretch.
- REWORK: existing connections — survival only (1 anchor). M-15 loot-seed to aeronautics is the right 2nd anchor.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire transmutation → occultism essence or spirit solution | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul dust drifts up from the Otherside and into the alchemist's crucible — the silent dark feeds the occult directly.
- from: deeperdarker:heart_of_the_deep (Warden drop, rare) | via: ars_nouveau:imbuement (gate a high-tier Ars ritual on the Heart as a catalyst) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Warden's Heart is the Otherside's boss drop — imbuing it into a high-tier spell focus makes the deepest danger a required magic on-ramp (M-15 / M-10 flavor).
- from: deeperdarker block families (gloomslate / sculk_stone) | via: create:crushing → gravel + experience_nugget | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Gloomslate hauls from the Otherside crush into grit and XP — deco blocks don't pile up uselessly; the Create spine recycles them. (Already partially wired — inbound create:crushing shown in dossier.)
- from: deeperdarker:warden_carapace | via: numismatics sell (scarce endgame material from a dimension boss mob) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: Warden Carapace is better reserved as a boss-key material (M-15) for tech gating; making it a coin-sink simultaneously splits its design purpose and dilutes both motifs. One strong use is better than two weak ones.
- REWORK: existing connections — survival only (1). Three accepted weaves land magic (M-11), magic (M-10), and Create (M-04) as 2nd anchors.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build engine; no standalone recipes, no routable material. Its weave is MineColonies' weave.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — pure door-interaction behavior mod; no items, no methods, no content surface.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — leaf-decay performance patch; zero content, zero items, zero methods.

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn-rate library for Alex's Mobs author's mods; the bundled items (citadel_book, debug, effect_item) are dev/tooling, not player-facing gameplay content. Nothing to weave.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / vc_gliders:paraglider_netherite (high tiers) | via: create:mechanical_crafting (gate the diamond/netherite glider on Create-made reinforced frame parts, not bare diamond) | to: create | motif: M-05 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: The best glider isn't bought from a crafting table — it's built on a Mechanical Crafter from pressed iron sheets and precision-cut leather, tying personal flight gear to the Create spine.
- from: vc_gliders:paraglider_iron (starter tier) | via: create:pressing (reinforced paper feedstock requires pressed leather sheet or milled paper pulp) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Gating the starter/entry-level glider behind Create processing violates the "never gate a basic component behind a complex recipe" guardrail — the iron glider is the entry-point for flight and must stay accessible; depth belongs on the higher tiers only (M-05 already handles that).
- REWORK: existing connections — aeronautics only (1 anchor). M-05 on mid/endgame tiers adds Create as a coherent 2nd anchor without blocking entry.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — loading-screen tips UI; zero items, zero methods, zero content surface. Its value is pack authoring (tip text), not a pillar weave.

## jamlib   [anchors: support/library (1)]
- LEAVE — JamCoreModding platform-abstraction library; no items, no methods, nothing to route.

## rolling_down_in_the_deep   [anchors: support/client-QoL (1)]
- LEAVE — client-only underwater camera extension; no gameplay items, no methods, no content.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- from: cmpackagecouriers:cardboard_plane (the delivery courier) | existing weave already present: create:cutting + create:deploying | to: Create + aeronautics | motif: M-24 (autonomous airborne logistics component) | power: mid | tone: ok | verdict: — (already ≥2 anchors; reviewing for REWORK)
- OK — connections sound. Create (build/deploy method) + aeronautics (autonomous aerial logistics arm) are exactly the right two anchors. The light economy adjacency (remote trade fulfilment) is real but thin; leave it unless the economy pillar explicitly wants a courier-node hook in 0.9. No rework needed.

## create_compressed   [anchors: Create (1)]
- LEAVE — Create-internal storage/QoL (compresses crushed ores and sheets into blocks); all it touches is Create's own intermediates. No foreign material to route, no thematic seam to another pillar. The dossier's own conclusion is correct.

## architectury   [anchors: support/library (1)]
- LEAVE — cross-platform API dependency; zero gameplay content, zero items, zero methods.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice (high-difficulty ocean dishes) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A coastal outpost that clears ocean monuments can sell elder guardian rolls to inland crews — dangerous seafood becomes a tradeable luxury, pulling the ocean into the economy loop.
- from: oceansdelight:cut_tentacles / oceansdelight:guardian (raw ocean drops) | via: create:milling or farmersdelight:cutting into an intermediate (e.g. ground tentacle powder used as a fertiliser or alchemical input) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Ground-tentacle-powder-as-fertiliser is a plausible chain but thematically thin; the Create processing web doesn't clearly want ocean-mob byproducts, and fabricating an "alchemical" use for it leans forced. The economy hook (M-09) is the coherent 2nd anchor; adding a Create intermediary edge alongside it would be over-weaving. One strong 2nd anchor is the target.
- REWORK: existing connections — survival only (1), already routes through farmersdelight:cooking + cutting (correct FD integration). M-09 lands economy as 2nd anchor.

== CHUNK COMPLETE ==
