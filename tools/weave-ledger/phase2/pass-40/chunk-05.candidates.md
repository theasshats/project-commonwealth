# Phase 2 candidates — chunk-05 (context-fed)

## naturescompass   [anchors: support/QoL (1)]
- CHALLENGE | from: naturescompass:naturescompass | via: recipe (regional-ore input) | to: economy | motif: M-30 | verdict: REJECT | hook: the compass is an everyday exploration tool; region-locking the recipe means players in certain regions literally cannot craft a basic navigation aid — the power-read (everyday = one light step, never blocked) conflicts with a regional-ore gate that is only accessible after finding a biome you already need the compass to locate; circular and over-gates a utility

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — pure client HUD overlay; 0 items, 0 methods, no material surface to route through any motif

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — code library only (GUI/block/BE/packet scaffolding); 0 items, 0 methods, no content surface

## spark   [anchors: support/performance (1)]
- LEAVE — server performance profiler; 0 items, 0 methods; diagnostics tooling has no material routing

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — packdev scripting tool for Create Ponder scenes; 0 items, 0 methods; documents the spine but produces no content to weave

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — chat-signing/reporting intercept; 0 items, 0 methods; purely a networking privacy mod

## rechiseledcreate   [anchors: Create, decoration (2)]
OK — existing rows sufficient; mod already has ≥2 anchors (Create kinetic method + decoration palette); M-04 deco-recycle ACCEPT and M-28 colony window request ACCEPT cover the real edges; no uncaptured motif survives red-team

## t_and_t   [anchors: survival (1)]
- CHALLENGE | from: t_and_t sail-ship loot | via: loot-seed | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is "structural alloy/plate → airframe hull construction ingredient"; a schematic or canvas found in a sail-ship chest is not a structural alloy — the motif is misapplied; the correct motif for a loot-seeded blueprint/gate-item is M-15 (boss-key unlock: the document gates a complex aeronautics recipe) or M-34 (exploration/combat yields supply); M-23 should not tag informational loot drops
- NEW | from: t_and_t village/fort structures | via: loot-seed (worldgen-placed Trading Floor stall block seeded into T&T village structure templates via datapack structure override) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: each biome-specific T&T village has one pre-placed Trading Floor stall wired into its central square — the village is a trade hub by structure, not just by suggestion; players travel to a jungle village expecting different goods than the tundra village, and the stall confirms it mechanically

## spawn   [anchors: survival (1)]
- NEW | from: spawn:date_bunch (date palm fruit from date_log tree set) | via: vinery:apple_fermenting → aged date wine | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: date palms yield a fruit that ferments in a vinery barrel over time — a date wine that must age before it's worth anything, tying the spawn wood set's unique fruit into the maturation-specialist role; the aging time (not just the processing step) is what creates value and makes this M-35 rather than M-12

## owo   [anchors: support/library (1)]
- LEAVE — declarative GUI/config library; 0 items, 0 methods, no player-facing content

## quark   [anchors: support/decoration (1)]
- NEW | from: quark:apple_crate / quark:leather_block / quark:blaze_rod_block (compressed c:storage_blocks/* commodity bales) | via: aeronautics cargo (storage crates as the standard bulk-cargo unit for airship trade runs) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Quark storage crates are the natural compression format for bulk goods — a chest full of apple_crates or leather_blocks is the cargo a trader loads onto an airship hold; the crate form makes bulk agricultural and craft goods logistics-viable, tying Quark's storage system to the aeronautics distribution arm without inventing a recipe

## copycats   [anchors: Create (2)]
OK — existing rows sufficient; mod already has ≥2 anchors (Create zinc consumption + decoration palette); M-04 deco-recycle and M-23 hull cladding ACCEPTs cover the real weave surfaces; no further motif survives red-team

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn-handling library for Alex's Mobs; 0 gameplay items, 0 methods; the loot=yes is likely a debug/guide item, not a structure drop worth seeding

## mffs   [anchors: Create, survival (2)]
- NEW | from: mffs:projector / mffs:anti_hostile_module (endgame force-field system) | via: MineColonies research-gate (a MineColonies colony at "Fortress" research tier can *request* a delivered projector as a construction requisition, tying colony growth to the Create tech player who built the projector) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony's Fortress research unlocks the *ability to commission* a force-field projector — the colony can't make one, only request it; the tech player who mastered the Create-sequenced-assembly chain fills the order; neither route is self-sufficient
- CHALLENGE | from: mffs:coercion_deriver / projector | via: aeronautics structural (force-field emitters mounted in airship hull) | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is "structural alloy/plate → load-bearing airframe hull ingredient"; a force-field projector is a functional defense system, not a structural hull material — routing it as M-23 misapplies the motif; the correct framing is M-24 (mechanical component → propulsion/control, if it's a ship-mounted defense control block) or M-26 (consumption sink — the ship's Fortron supply fuels its shields); the "armed airship" is a valid design concept but needs a motif that fits the object's role

## grimoireofgaia   [anchors: survival (1)]
- NEW | from: grimoireofgaia:bust_valkyrie / bust_gorgon / bust_sphinx (mini-boss decorative trophies) | via: MineColonies colony delivery (a MineColonies Great Hall or Barracks upgrade at high tier *requests* a named boss bust as a construction delivery to unlock the tier) | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Barracks upgrade to "Fortress Hall" requires a Gorgon bust delivered to the builder — a colony milestone that forces the settlement-builder to either fight the Grimoire bestiary or buy the bust from a combat specialist; colony growth and combat supply lock together
- NEW | from: grimoireofgaia:book_of_memory (lore-heavy rare drop, proof of facing the bestiary) | via: ars_nouveau:glyph research (feeding the Book of Memory into the Ars glyph-learning system unlocks a spell tier that can't be researched by any other means) | to: magic | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Ars mage who wants the Bestiary-Tier glyph must either face the Grimoire creatures themselves or purchase a Book of Memory from a combat specialist — knowledge that can't be bought, only earned through combat or trade with someone who earned it; M-37 (research gate) is more precise than M-15 here because the unlock is knowledge, not a machine input

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — config-schema/GUI library; 0 items, 0 methods, no material surface

## just_blahaj   [anchors: decoration/flavor (1)]
OK — existing rows sufficient; unanimous REJECTs on every attempted weave are correct; LEAVE confirmed; pure wholesome decoration flavor with no material surface; forcing any edge is the failure mode the briefing warns against
