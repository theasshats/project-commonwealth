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









