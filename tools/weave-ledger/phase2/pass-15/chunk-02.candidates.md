# Phase 2 candidates — chunk-02

## moreoverlays   [anchors: support/QoL-client (1)]
- LEAVE — genuine zero-content client overlay; 0 items, 0 blocks, no loot, no material surface to route. HUD-only mod.

## recipe_integration   [anchors: support/infrastructure (1)]
- LEAVE — this mod IS the connective tissue layer; it ships recipes of other mods' types but registers no items, no loot, and no player-facing content. It is the weaving tool for the pack, not a weave target. Its dormant c:tags reference mods not in this pack and are inert. Nothing to route.

## knightlib   [anchors: support/library (1)]
- from: knightlib:great_essence / knightlib:homunculus | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: knightlib content (chalice, grail, essence, homunculus) is inert in this pack — Knight Quest (the dependent mod) is absent. Weaving items that serve no active mod is dead-letter design; flag for reconsideration only if Knight Quest is ever added.
- LEAVE — library; bundled content is dormant without Knight Quest. Not zero-surface in principle (6 items, 1 block, loot=yes), but those items have no functional role without the dependent. Revisit if Knight Quest enters the pack.

## immersive_paintings   [anchors: decoration/flavor (1)]
- from: immersive_paintings:glow_painting | via: create_new_age:energising | to: Create | motif: M-17 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — charging a painting with FE electricity makes no thematic sense; a painting glowing from electricity is an odd "of course" break. The glow effect is purely aesthetic/client, not a power-requiring function.
- from: immersive_paintings:painting (crafting mats) | via: create:mechanical_crafting | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: forcing painting frames through a Create machine is pure busywork with no narrative "of course." The briefing explicitly warns against forced edges for decoration mods.
- LEAVE — pure decorative/expression mod; 4 items (the canvases themselves), no loot, no material outputs with a coherent routing. No forced edge survives the red-team. Dossier correctly identifies this.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo (bulk finished rounds) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player running an ammo-factory line can vend bulk shells to the town for coin — the "arms dealer" specialization emerges naturally from the Create automation already required. Multi-step Create chain (sequenced_assembly) earns the luxury-good price.
- from: createimmersivetacz:gun_barrel / firing_mechanism (gun parts) | via: numismatics sell/price | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: finished gun components are high-value trade goods; a specialist armourer sells barrels/mechanisms to players without Create factories — mirrors real-world arms trade.
- from: createimmersivetacz:nitropowder_bucket (fluid) | via: tfmg:distillation or tfmg:coking | to: Create (TFMG depth) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: nitropowder is a refined propellant — routing through TFMG's industrial chemistry (coking/distillation) to produce it from coal/coal tar grounds it in the industrial-chemistry pillar already in the pack. Deepens the ammo supply chain past "craft gunpowder → done."
- from: createimmersivetacz:primer (andesite alloy consumer) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: primer already IS a sequenced_assembly product per the dossier — this would be double-counting an existing weave, not a new connection.
- REWORK: existing Create anchor is solid. The ammo→coin weave (M-09) is the priority second pillar; the TFMG nitropowder route (M-12) is additive depth, not a separate pillar. Together they give createimmersivetacz Create + economy (2 pillars).

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cheese_slice | via: create:milling or create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: milk curdling → cheese is a processing chain that fits Create's mixing bowl analogy; Create milling herbs/rennet into curd, or mixing to churn cream, is the "of course" step that pulls the dairy chain through the Create spine.
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea (luxury drinks) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hand-brewed ancient coffee from Sniffer-recovered crops is a prestige good — exactly the kind of artisanal product a colony market or Numismatics shop would carry. The multi-step recipe (sniffer finds seed → grow → brew) already costs enough to justify a trade price.
- from: trailandtales_delight:lantern_fruit (tagged item/foods/berry) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling lantern fruit into a flour/powder that feeds a further Create-side recipe (dye, essence, fermentation) keeps even the everyday crop inside the Create processing web.
- from: trailandtales_delight:cherry_cheese_pie / cherry_cake (slice-able blocks) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: subsumed — the luxury-food→coin weave is already captured by ancient_coffee/cherry_petal_tea above. Adding every individual dish would dilute the signal. One or two flagship goods per mod is sufficient; the pie/cake items can share the same economy weave without a separate row.
- from: trailandtales_delight:curd_block / sniffer_eggshell | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — transmuting dairy curds or eggshells into occult essences has no thematic coherence. The archaeological/rustic flavor of this mod does not map to Occultism's demonic-summoning vibe.
- REWORK: existing survival anchor is sound. Two accepted weaves (cheese chain via M-12 + ancient_coffee via M-09) give survival + Create and survival + economy = trailandtales_delight reaches 3 pillars if both land. Prioritize M-09 (economy) as the cleaner second pillar; M-12 (Create milling) is the follow-on.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — the scripting engine that authors all weaves in this pack; has 0 items of its own (besides a placeholder generated_bucket), no loot, no content surface. It is the mechanism, not the target. Correct dossier assessment.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; 0 blocks, 0 items, 0 loot. API/physics backend for Create Big Cannons. Nothing to route.

## kiwi   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; 0 blocks, 0 items, 0 loot. Dev-plumbing only. Nothing to route.

## formationsnether   [anchors: survival/exploration (1)]
- from: formationsnether loot tables (nether structure chests/altars) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: players clearing Nether ruins (altars, castles, cabins) find coin or a coin-grade processed scarcity drop — looting the Nether pays, turning exploration into an economic act. Seeding Numismatics coin or a nether-metal scarcity item into the structure chests is a single datapack loot-table edit.
- from: formationsnether loot tables (ritual altars specifically) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ritual altars seeded with Occultism/Ars reagents (soul ash, source gem fragments, infused stone) gives magic players a reason to brave the Nether ruins — the altar structure thematically calls for arcane materials; a player who finds one says "of course a ritual altar has magic stuff." Delivery: loot-table datapack seeding the altars' loot pool.
- from: formationsnether loot tables (boss-adjacent structure — castles/sanctuaries) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is for boss drops gating complex tech; formationsnether registers no boss, and seeding a boss-key item into a generic structure chest would devalue the gatekeeping intent. Wrong motif for a structure loot context — better served by M-02/M-08 above.
- REWORK: dossier flagged M-08 as "WEAK"; via: loot-seed the delivery is fully legit (see Phase 2 briefing — structure loot is a real delivery). Upgrading to ACCEPT. The key insight is that both altars (magic seed, M-02) and exploration chests (coin seed, M-08) are coherent; the dossier's hesitance was from not distinguishing the delivery mechanism. formationsnether reaches survival + magic + economy with two loot-seeds.

== CHUNK COMPLETE ==
