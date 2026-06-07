# Phase 2 candidates — chunk-01

## exposure   [anchors: create, survival (2)]
- REWORK: the dossier's only economy candidate is M-09 (luxury good → coin) — that motif is retired. The existing 2-anchor connection (Create sequenced_assembly + survival) is sound; the dossier's "sellable mementos" economy note is dead weight under the player-run ruling.
- OK — connections sound (Create via sequenced_assembly film development + deployer-tended stands is genuine; survival as a hobby/keepsake layer fits).
- from: exposure:aged_photograph (aging method M-35) | via: exposure:photograph_aging → supplementaries:antique_book (annotate) or supplementaries:item_lore | to: economy | motif: M-35 | power: everyday | tone: ok — aged photographs as signed/dated provenance documents fit the analog-photography vibe; a Supplementaries antique_book or item_lore record pairs naturally | verdict: ACCEPT | hook: a player timestamps their aerial survey photographs in the darkroom; those aged + annotated prints are the cartographer-specialist's trade good, not raw snapshots
- from: exposure:camera (gold variant) | via: create:sequenced_assembly (multi-stage automated studio) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the camera is already woven inbound via sequenced_assembly (the dossier confirms it); repeating the link adds no new anchor — this would be a same-system deepening, not a cross-system edge
- from: exposure:album (photograph collection) | via: bountiful decree (bounty objective: submit N developed photographs of a region) | to: economy | motif: M-37 | power: everyday | tone: ok — a bounty for "photograph the new trade outpost" is a service-for-knowledge task, not just an item sink | verdict: REJECT | reason: M-37 is research/knowledge gate (unlocking a recipe by knowledge), not a bounty objective; the correct motif for a bounty-objective pull would be M-33 (service-for-hire) — the bounty board pays a cartographer-specialist to document an area; but this requires Bountiful Decree config (datapack edit), which is a delivery mechanism but not a recipe weave; the motif fit is cleaner if framed as M-33
- from: exposure:album | via: bountiful decree config | to: economy | motif: M-33 | power: everyday | tone: ok — commissioned aerial/exploration photography as a paid service; a Create-aeronautics airship cartographer shoots a route, develops the film onboard, and delivers the album | verdict: ACCEPT | hook: the logistics pilot doubles as expedition photographer; a bounty board "photograph the northern trade route" pays coin and only someone with the camera + darkroom skill + an airship can fill it

## fusion   [anchors: support/library (1)]
- LEAVE — pure client rendering library (connected textures); zero items, zero methods, zero loot. No content surface to weave; sanctioned support role.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-only fishing tweak; zero items, zero blocks, zero loot of its own. Its sole function is remapping fish-item catches to live mob entities. The weaving belongs to the fish-content and cooking mods that sit beneath it (createfisheryindustry, farmersdelight, etc.), not here. No content surface to route through any method.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — networking/privacy utility; zero items, zero methods, zero loot. Pure support role (chat-signing interception); no content surface whatsoever.

## biolith   [anchors: support/worldgen-library (1)]
- LEAVE — worldgen API/biome-placement library; zero items, zero blocks, zero loot. Operates on biome registry data only; the content to weave lives in the mods that depend on it. Sanctioned support role.

## bits_n_bobs   [anchors: create, survival (2)]
- OK — connections sound. Create anchor is genuine: chain-pulley/drives transmit rotation (kinetic), nixie boards are live signal displays, all hard-depend on Create. Survival anchor is the decoration palette (123 blocks, 85 items of Create-aesthetic deco). Existing inbound via create:item_application + create:splashing confirmed in jar.
- from: bits_n_bobs tile/chair blocks (andesite_tiles, crimsite_tiles, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — industrial deco crushing back to crushed stone / gravel + XP nugget is exactly the M-04 idiom; the Create-stone tiles are the same material family as the Create ores that M-04 was designed for | verdict: ACCEPT | hook: over-built a factory floor of asurine tiles? the crusher reclaims the raw stone — nothing wasted in a Create workshop
- from: bits_n_bobs:brass_lamp / nixie_board (signal display) | via: create:deploying (automate scoreboard/display lines on contraptions) | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: this is a same-system (Create internal) deepening, not a cross-system edge; M-20 is deploy-application for upgrades, not display automation; no new anchor is added
- from: bits_n_bobs:large_nixie_tube (multi-digit scoreboard) | via: economy (player-to-player price display at a Trading Floor stall) | to: economy | motif: M-33 | power: everyday | tone: ok — a market stall with a nixie board showing current coin rates is flavorful and real; the nixie board is manufactured Create-chain output that the economy arm buys from the Create specialist | verdict: ACCEPT | hook: the merchant's Trading Floor stall has a brass nixie board showing today's iron ingot price; it's a Create product that only a Create player can make and sell, binding the economy arm to the tech spine

