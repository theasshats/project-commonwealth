# Phase 2 candidates — chunk-16

## almostunified   [anchors: support (1)]
- LEAVE — genuine zero-content infrastructure: no items, no blocks, no loot, no recipe types. It is the recipe-graph plumbing layer itself; weaving belongs to the content mods it unifies, not to this mod. ⚠ GOTCHA: never unify galosphere:*silver* as c:ingots/silver — the "silver" is PALLADIUM (tagged c:ingots/palladium); real silver is occultism.

## sablecollisiondamage   [anchors: support/aeronautics physics (1)]
- LEAVE — genuine zero-content behavior addon: 0 items, 0 blocks, loot=no, no recipe types. It is a physics-damage behavior layer on Aeronautics ships; the aeronautics pillar already covers it functionally. No material surface to weave through.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:steel_ingot / steel_plate (c:ingots/steel, c:plates/steel) | via: recipe (crafting table or create:mechanical_crafting) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: building an airframe hull out of anything less than steel feels flimsy — steel plates are the obvious structural skin for a serious ship
- from: create_ironworks:tin_ore → crushed tin → create:mixing/pressing → tin ingot → numismatics mint | via: recipe (create:crushing + numismatics mint) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: tin is a regional scarcity metal; processing it into coin makes prospecting tin-rich biomes worthwhile beyond just gear
- from: create_ironworks:bronze_ingot / bronze_plate | via: recipe (create:mechanical_crafting) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: bronze is the lighter, cheaper tier — good for early airframe bracing before you can make steel
- from: create_ironworks:steel_ingot | via: recipe (the gated machine's own recipe, steel as input) | to: Create (depth) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 calls for a boss DROP as the gate key, not a processed alloy; steel is earned through Create processing, not a combat reward — the motif doesn't fit cleanly. Use M-23 for aeronautics instead.
- REWORK: dossier lists "economy via numismatics [M-08, STRONG]" as a candidate with no existing weave entry — it's unauthored but sound; promote to ACCEPT (listed above). The survival/worldgen note is good flavor but M-08 already covers it — no separate weave needed there.
- OK — Create anchor is solid (tin/bronze/steel chain through create:crushing/mixing/pressing is its spine).

## fishingreal   [anchors: survival (1)]
- LEAVE — genuine zero-content behavior mod: 0 items, 0 blocks, loot=no, 0 c:tags, no recipe types. It intercepts fishing catches and spawns live entities — the weave surface belongs to the fish/food content mods it sits beneath (createfisheryindustry, farmersdelight, naturalist). Nothing to route through here.

## aeronautics_bundled   [anchors: aeronautics (1)]
- LEAVE — bundle wrapper jar only: 0 items, 0 blocks under this namespace. All real content registers under `aeronautics` / `sable`; weaving belongs on those dossiers. This entry is effectively a distribution artifact.

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight high-tier cooked dishes (farmersdelight:beef_stew, farmersdelight:roast_chicken, farmersdelight:apple_pie, etc.) | via: trade (numismatics sell / MineColonies provisioning) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a traveling merchant paying coin for a crate of stew makes the kitchen a trade output, not just a buff station
- from: farmersdelight crops (c:crops/cabbage, c:crops/tomato, c:crops/onion, c:crops/rice) — season-locked growth via Serene Seasons | via: config tie (Serene Seasons crop-season config) | to: survival (seasonal depth) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: tomatoes only in summer, cabbage in autumn — the kitchen menu actually changes with the year, making meals feel tied to the land
- from: farmersdelight:cooking_pot output (hearty soups/stews) as a crew ration | via: config (MineColonies colony cook/provisioning) | to: Create/MineColonies | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony cook draws from the pack's actual cuisine instead of vanilla bread — the Create-powered farm feeds the colony workforce
- from: farmersdelight:rice → create:milling → rice flour → create:mixing → batter | via: recipe (create:milling / create:mixing) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: rice gets its own milling path, deepening the grain→flour→baked-goods chain already established for wheat
- REWORK: existing inbound weaves include immersiveengineering:cloche/crusher/fermenter/squeezer — these are IE methods, and IE may not be in the pack's final mod list (the dossier's "made-by" lines suggest it was imported from a template sweep). Flag for human review: if IE is not installed, those inbound weave tags are dead entries. The create:milling/mixing/filling inbounds are sound and should stay.
- OK — survival + Create 2-pillar foundation is solid.

## bookshelf   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 items, 0 blocks, loot=no, no recipe types, no c:tags. Pulled as a dependency by Darkhax mods; no player-facing surface to weave.

## midnightlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content config library: 0 items, 0 blocks, loot=no, no recipe types. Annotation-based config/screen scaffolding for dependents; no material graph at all.

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — genuine zero-content utility: 0 items, 0 blocks, loot=no. Client-server version handshake only; no gameplay surface, nothing to weave.

## chat_heads   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-content client-UI mod: 0 items, 0 blocks, loot=no. Renders player heads in chat. No material graph, no weave surface.

== CHUNK COMPLETE ==
