# Phase 2 candidates — chunk-10

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — pure networking/privacy utility; 0 items, 0 methods, no material surface. Sanctioned support role; no weave possible.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled decorative blocks | via: create:crushing (M-04) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed decorative variants back into raw base material + XP nugget — the Mechanical Chisel feeds the crusher loop
- REWORK: the dossier flags rechiseledcreate's Mechanical Chisel as a candidate under M-04. Confirm rechiseledcreate is actually in the pack; if it is, the Create anchor is already partially present and the REWORK note is that the dossier should record it as a realised anchor (create), not merely a candidate.

## better_lib   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items, zero recipe types; config/messaging API only. Sanctioned support role.

## create_compressed   [anchors: create (1)]
- from: create_compressed crushed-ore pile blocks (e.g. crushed_copper_pile) | via: create:splashing (bulk washing) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the mod's own documented mechanic (bulk-wash block → 9× nuggets) — it's an intra-Create operation, not a cross-system weave; proposing it as a new link adds nothing
- from: create_compressed:wheat_flour_pile / dough_block | via: bakery / farm_and_charm:crafting_bowl or stove | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: compressed flour/dough blocks feed directly into bakery cooking chains — bulk Create milling output becomes bakery feedstock without manual splitting, closing the production→survival food loop
- REWORK: dossier says "2nd-anchor candidates — none — leave" but the compressed flour/dough pile makes a real survival production link via the cooking-chain (M-12). Flag for dossier update.

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — client-side map UI, 0 items, 0 methods. No material surface; support role.

## wits   [anchors: support/debug (1)]
- LEAVE — server command utility, 0 items, 0 methods. No material surface; support role.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj plush variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — crushing a decorative plush shark is tonally wrong for a wholesome/cozy item; the mod's point is charm, not material recycling
- LEAVE — pure flavor decoration, no meaningful second anchor. Wool/dye consumption is trivially vanilla; no routing makes thematic sense.

## structurize   [anchors: support/library (1)]
- LEAVE — build-engine dependency for MineColonies; its weave belongs entirely to MineColonies. 0 items player-facing, no recipe types. Sanctioned support role.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's Hallowed Gem is an arcane trophy; feeding it into an Ars Nouveau imbuement ritual gives the boss fight a magic payoff — boss-drop reagent sink anchors survival→magic
- from: illagerinvasion:illusionary_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary Dust transmutes through Occultism spirit fire into a raw essence — the illusioner's trick-magic vibe slots naturally into spirit-fire transmutation
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk is an illager raid drop, not an ore — routing it through ore-doubling (M-03) is mechanically forced and thematically thin; the scarcity angle is better served by a magic sink or boss-key gate (M-15) than generic crushing
- from: illagerinvasion:hallowed_gem | via: boss-key gate (M-15) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: gate a high-tier Create/tech recipe (e.g. a complex mechanism or sealed blueprint) behind the Hallowed Gem — killing the Invoker unlocks a real production milestone, advancing the scarcity→production→economy loop

## edf-remastered-5.0-beta4   [anchors: survival/endgame (1)]
- LEAVE — behavior datapack only; 0 items, 0 blocks, does not modify dragon drop table. No material surface to route through any method; a forced edge would be inventing content the mod does not have.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron / _gold / _diamond / _netherite | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: glider frames are assembled on a Mechanical Crafter using Create metal sheets — personal flight gear earns its tier through the tech spine, giving Create a reason to produce the sheets
- from: vc_gliders reinforced-paper feedstock | via: create:milling (paper pulp chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced paper is a basic/everyday entry component; gating it behind Create milling adds friction to the first-tier glider without proportionate depth gain — violates the "never gate a basic component behind a complex recipe" guardrail
- from: vc_gliders:copper_upgrade | via: create:item_application / create:deploying | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: apply the copper upgrade onto a base glider through a Create Deployer — upgrades ride the deployment method, tying glider progression to the automation spine

## cmpackagepipebomb   [anchors: create (1)]
- LEAVE — novelty PvP trap gag; 4 items, no recipe types, no coherent cross-system weave without forcing it. Curated friend-group flavor on top of Create packages.

## appleskin   [anchors: support/QoL (1)]
- LEAVE — food HUD display only; 0 items, 0 methods. Support role.

## bakery   [anchors: survival (1)]
- from: bakery luxury foods (cakes, tarts, cupcakes, jams) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; nearly every high-effort food is trivially sellable; this is not a structurally distinctive economy link
- from: bakery:bread / bakery:baguette (wheat-based staples) | via: create:milling (wheat → flour feedstock) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bakery's flour needs come from Create's milling chain — the baker's station becomes a downstream consumer of the Create mill, integrating the food production loop into the tech spine
- from: bakery baked goods (multi-group foods: grain + fruit + sugar) | via: appleseed diet mechanic (demand signal) | to: survival | motif: M-16 (seasonal) | power: mid | tone: ok | verdict: REJECT | reason: M-16 requires a season-gated input; bakery crops aren't season-locked by default; this is a possible config tie but not a genuine M-16 motif
- from: bakery seasonal fruit goods (strawberry/apple outputs, if tied to Serene Seasons crop availability) | via: season-gated input → bakery processing | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: strawberries and apples only appear in the bakery's jam/tart recipes when in-season — Serene Seasons gates the luxury food tier, making seasonal produce genuinely scarce and bakery output temporally valuable
- REWORK: existing survival anchor is sound; the Create milling link (M-12) is the strongest new weave — it directly routes the tech spine's milling output into bakery's flour demand. Add create anchor.

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — client-side render optimization, 0 items, 0 methods. Support role; no weave possible.

## appleseed   [anchors: survival (1)]
- from: appleseed diet-variety demand signal | via: config/demand (no recipe) | to: survival+production | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is specifically a seasonal-gating motif (season-locked material → method); appleseed is a standing demand signal, not a seasonal-gating mechanic — the motif doesn't fit. The loop role is real but has no matching motif.
- from: appleseed balanced-diet buffs as a multi-group food demand driver | via: no-motif | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the "balanced diet makes diverse food valuable → specialist cook sells to others" logic is real and matches the Eco-style loop, but it is a systemic/mechanic driver, not a recipe-type routing. No motif fits it cleanly; flag for Gate-0 if a "demand-driver" motif is ever added.
- LEAVE — mechanic HUD mod with 0 items/blocks; its loop role (pressure → demand → production) is real and documented in SYSTEMS.md, but it routes through systemic config/tuning, not through any existing motif's method. No new edges to propose without inventing a motif.

## bookshelf   [anchors: support/library (1)]
- LEAVE — modder utility library; 0 blocks, 0 items, 0 recipe types. Sanctioned support role.

## recipe_integration   [anchors: support/connective-bridge (1)]
- from: recipe_integration cross-mod bridge recipes (create:milling/mixing/pressing paths for modded materials) | via: create:milling / create:pressing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: recipe_integration's conditional datapack fires live Create ore-processing paths for any installed modded metal — it is itself a weave multiplier; treating it as a Create-anchor support is correct, and its active recipe set should be audited against this modlist to confirm which of its 82 c:tags are live vs. dormant
- REWORK: dossier says "support role; no weave needed" but recipe_integration actively injects Create recipe types into the pack's processing web — it belongs as a co-anchor of the Create system (it is a weave *delivery* tool, not merely inert infrastructure). Recommend updating anchor from "support" to "support + create" and auditing which conditional recipes actually fire.

## createtreadmill   [anchors: create (1)]
- from: createtreadmill:treadmill | via: survival labor mechanic | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — treadmill-as-player-labor could conceptually tie to the survival pressure pillar (you physically run to generate power), but no existing motif covers "player exertion as a survival→Create bridge." Don't invent a motif here.
- from: createtreadmill:maid_motor (touhou_little_maid Soul Orb intake) | via: create:mechanical_crafting or recipe | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the cross-mod tie is Create↔TLM (flavor mod), not a loop-system weave; TLM is not a pillar anchor so this doesn't advance the scarcity→production→economy loop
- LEAVE — both power sources are intra-Create novelty; neither advances to a second loop system without forcing it. Single-anchor Create is appropriate.

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — client chat UI cosmetic; 0 items, 0 methods. Support role.

== CHUNK COMPLETE ==
