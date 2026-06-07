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






