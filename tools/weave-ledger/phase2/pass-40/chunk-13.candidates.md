# Phase 2 candidates — chunk-13 (context-fed)

## create_compressed   [anchors: create (1)]
- NEW | from: create_compressed:crushed_<scarce>_pile blocks (crushed_platinum_pile, crushed_quicksilver_pile, crushed_silver_pile, crushed_lead_pile — coin-grade metals in 9× compressed form) | via: aeronautics cargo (M-31 bulk-good logistics) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a crate of compressed palladium ore is the natural export unit of a Create mining base — bulk enough that moving it by airship is the practical route, making the compressed pile the logistics system's native cargo atom
- CHALLENGE | from: create_compressed:iron_sheet_block / brass_sheet_block | via: aeronautics construction | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is for fabricated structural alloys (plates, beams shaped for a hull); a compressed 9-sheet storage block is just bulk convenience storage, not a structural material — the real airframe ingredient is the underlying create:iron_sheet; re-scope these accepted rows to M-31 (logistics bulk good) which correctly names why compression matters for shipment

## dataanchor
LEAVE — pure developer data-attachment library; zero items, blocks, loot, or recipe types. No content surface to weave.

## createoreexcavation   [anchors: create, economy (2)]
- NEW | from: createoreexcavation:vein_finder (3-chunk survey tool that reveals which ore a vein holds) | via: M-33 service-for-hire (a prospecting specialist uses the finder on a client's land and charges for the survey result) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the vein-finder specialist sells *information*, not ore — "I'll survey your claim for two crowns" is a labor transaction that needs no NPC and no recipe, emerging purely from the tool's function

## oceansdelight   [anchors: survival (1)]
- NEW | from: oceansdelight:fugu_slice (toxic fish flesh — prepared danger food) | via: create:mixing (brine-cure the sliced fugu with salt fluid in a mixer — a Create-processed step producing a preserved fugu portion as a safer cooking intermediate) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: fugu is the ocean's deadliest catch; industrialising the cure step — mixing with salt brine in a Create basin — makes the Create spine part of making it edible, not just the cooking board
- NEW | from: oceansdelight:elder_guardian_roll / oceansdelight:guardian_soup (high-saturation effect dishes) | via: M-16 seasonal reagent (Serene Seasons winter makes ocean surface dangerous/icy, making guardian farming harder — config the dishes as Bountiful objectives that pay extra in winter, tying ocean food scarcity to seasons) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian soup is rarer in winter when the ocean is dangerous to reach — the seasonal driver feeds back into this pillar's premium food without touching guardian AI
- CHALLENGE | from: oceansdelight:cut_tentacles / guardian flesh | via: farmersdelight:cutting → create:milling (fishmeal) | to: create | motif: M-12 | verdict: REJECT | hook: the most common existing ACCEPT for this route (consensus REJECT 9v4) is correctly rejected — no fishmeal item or Create consumer for it exists in the pack; the processing chain dead-ends at FD and adds no cross-system edge; the existing rejection consensus is right and should be the settled verdict

## sound_physics_remastered
LEAVE — client-only audio simulation mod; zero items, blocks, loot, or recipe types. No content surface to weave.

## chat_heads
LEAVE — client UI overlay drawing player faces in chat; zero items, blocks, loot, or recipe types. No content surface to weave.

## cmpackagepipebomb   [anchors: create (1)]
LEAVE — every proposed weave correctly rejected across all blind passes. The pipebomb is a Create-flavored PvP prank item with no coherent second-pillar hook: M-06 over-gates a gag; M-29 (nitropowder fill) tone-clashes with a novelty trap; M-34 misuses the combat-supply motif (no boss loot here). The dossier's own verdict (leave) is correct.

## openpartiesandclaims   [anchors: support (1)]
LEAVE — server protection/social framework; zero items, blocks, recipe types, or loot. No material to route. The two existing rows (M-30 and M-28 attempts) are correctly rejected. The chunk-claim system advances the PvPvE territory premise but has no content surface for a recipe weave.

## l2library
LEAVE — shared developer library for LightLand mods; zero items, blocks, loot, or recipe types. No content surface to weave.

## notenoughcrashes
LEAVE — crash-recovery utility; zero items, blocks, loot, or recipe types. No content surface to weave.

## brazil_legends   [anchors: magic, economy (2+)]
- NEW | from: brazil_legends:big_tongue (Cuca/Akaname drop — monstrous organic tongue of a folklore creature) | via: irons_spellbooks:alchemist_cauldron_brew (brew a slow-acting toxin or hex-potion using the Cuca's tongue as the prime reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cuca is a witch-like entity; her tongue as a cauldron reagent for a curse-brew is the most thematically coherent delivery — distinct from the capelobo_claw's spirit_fire path and adding a second magic method for the same folklore set
- NEW | from: brazil_legends:bloodmoon_sickle | via: M-22 lunar/celestial reagent (require the bloodmoon_sickle to be crafted only when the Enhanced Celestials blood moon is active — or have its drop rate spike under it — tying the weapon's acquisition to the lunar event it's named for) | to: survival | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the bloodmoon sickle earned under a real blood moon is not just a named weapon — the lunar gate makes it genuinely rare and gives the Enhanced Celestials moon a mechanical sting; existing M-22 rows converge on this but at low score (1 each); it's correct and under-affirmed
- CHALLENGE | from: brazil_legends:big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: the capelobo_claw already fills the M-11 spirit_fire slot for brazil_legends at consensus 29 ACCEPT — adding big_tongue to the same motif/method is redundant overlap; the Cuca's tongue earns its magic weave via the Iron's cauldron (above), not a duplicate spirit_fire transmute; using both for identical M-11 routes fragments rather than deepens

## cmparallelpipes   [anchors: create (1)]
LEAVE — Create fluid-pipe QoL tool (Pipe Wrench); 2 items, no blocks, no loot, no registered recipe types. All proposed weaves correctly rejected across blind passes. The wrench is a pure-utility interaction item with no material that can be routed into a second pillar without forcing a contrived edge.

## underground_village   [anchors: survival (1)]
- NEW | from: underground_village Stoneholm library/chest loot | via: loot-seed (seed a MineColonies research-tome or blueprint scroll into the deepest Stoneholm chest — a document that fast-tracks one colony research tier when recovered and used) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the Stoneholm's lost settlers left records; whoever recovers them gains a colony research head-start — knowledge, not coin, is the treasure, and it flows into the MineColonies research gate (M-37) as a discovered unlock rather than a purchased one
- NEW | from: underground_village Stoneholm structure blocks (stone bricks, cobblestone, deepslate brick) dismantled by a raiding player | via: create:crushing (M-04 — deco recycles to crushed stone/gravel + XP nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stripping a Stoneholm ruin through the millstone is productive salvage — the underground village is not just a loot box but a stone supply cache; exploration has a material dividend through the Create spine

## collective
LEAVE — Serilum shared code library; zero items, blocks, loot, or recipe types. No content surface to weave.

## recipe_integration   [anchors: support/bridge (1)]
- NEW | from: recipe_integration createaddition:rolling and createaddition:charging active paths (the mod fires these for any installed mod whose materials match) | via: audit action — confirm which rolling/charging entries fire for pack-installed mods (gnkinetics gears? magic-mod ingots?); if charging paths touch Ars/Iron's materials, this auto-delivers M-17 electric-bridge weaves without further authoring | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: recipe_integration may already be silently firing electric-charging bridges for magic-mod metals via createaddition:charging — an audit that confirms this validates those M-17 weaves without any Phase-3 recipe work; if they're absent, seeding them here is the natural Phase-3 action
- CHALLENGE | from: recipe_integration inert c:tags (aether, mekanism, MI, GT… — uninstalled mods) | via: any | to: any | motif: n/a | verdict: REJECT | hook: the existing rejection consensus is correct — these 82 c:tags are dormant and should be audited for KubeJS tag-override conflicts, not proposed as weaves; flagging them here as a Phase-3 audit task is the right scope, not a weave proposal

## toomanypaintings
LEAVE — decorative painting mod with a placement GUI; zero items, blocks, loot, or recipe types. The one existing row (Supplementaries item_lore on a painting) was correctly rejected as no-motif narrative. No content surface exists to route through any method.

## gnkinetics   [anchors: create, aeronautics (2)]
- NEW | from: gnkinetics:planetary_gear / gnkinetics:worm_gear (precision high-ratio gear components) | via: modulargolems:golem_assemble (require a planetary gear as a mechanical-golem torso component — a golem powered by gnkinetics gear-ratio precision rather than magic; M-29 cross-route: Create-made precision gear required inside an Occultism-adjacent golem assembly) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the mechanical golem's locomotion assembly demands precision gearing that only a Create kinetics specialist can supply — the golem master must trade with the gear-smith; modulargolems:golem_assemble is in the methods palette and the cross-route dependency is mechanically grounded
- NEW | from: gnkinetics:worm_gear (specialty slow-ratio gear — harder to machine than a standard cog) | via: M-28 colony route (MineColonies Blacksmith/Mechanic hut produces worm gears faster and cheaper than hand-fabrication — colony-cheaper variant of a Create-expensive component) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: worm gears are tricky precision work; a colony smith churns them out for the airship builder who can't be bothered to run a full fabrication line — the colony cheaper-basics route applies cleanly to a specialist component

## create_jetpack   [anchors: create (1)]
- NEW | from: create_jetpack:jetpack (brass tier — personal flight via compressed air) | via: M-33 service-for-hire (a jetpack-equipped courier charges for high-speed delivery of small high-value goods between player bases — the backtank flight capability is itself the labor; payment emergent) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the jetpack specialist is not selling goods — they're selling *speed*; "I'll courier this stack of magic reagents to the coast colony for three crowns" is a player-economy labor role that the brass jetpack uniquely enables without an Aeronautics airship
- CHALLENGE | from: create_jetpack:jetpack (brass tier) | via: boss-key gate | to: survival | motif: M-15 | verdict: REJECT | hook: several ACCEPT rows gate the *brass* jetpack (mid-tier first-flight item) behind a boss drop — this over-prices the entry tier; M-15 boss gates belong on the *netherite* endgame variant, not the first personal-flight item; gating brass flight behind a boss means early aerial scouting is impossible until late-game combat is cleared, which breaks the pack's intended progression shape; the brass jetpack should be a brass-tier milestone (MineColonies research or colony-tier, not boss-drop)

## bountiful   [anchors: economy, survival (2+)]
- NEW | from: bountiful:decree objective pool (high-tier/epic Decree) | via: M-22 lunar reagent tie — configure a Decree category that only appears (or pays triple) during an Enhanced Celestials blood moon event, requesting lunar-event drops (brazil_legends bloodmoon materials, enhanced moon mob drops) | to: survival | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: a blood-moon Decree board lights up during the red event, paying premium coin for the night's dangerous harvest — the bounty board becomes a lunar-event economy sink, tying Enhanced Celestials into the demand loop
- NEW | from: bountiful Decree tier architecture (common/uncommon/rare/epic) | via: config design — map Decree tiers to the pack's production tiers: common = everyday farm/hunt outputs, uncommon = Create-processed intermediates, rare = magic reagents, epic = boss drops + endgame components; this isn't a single weave but a structural config decision that makes every other Decree-based ACCEPT coherent | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: aligning Decree rarity to production-system depth means the board's implicit progression ladder mirrors the loop — a new player does common farm bounties, a Create specialist fills uncommon metal orders, a combat veteran hunts epic boss contracts; the tiers themselves become the cross-route dependency structure

















