# Phase 2 candidates — chunk-09 (context-fed)

## terrablender   [anchors: support (1)]
LEAVE — pure worldgen API library; 0 items/blocks/methods; no material surface to route.

## jamlib   [anchors: support (1)]
LEAVE — pure code library (JSON5 config + platform helpers); 0 items/blocks/methods; nothing to route.

## moogs_structures   [anchors: support (1)]
LEAVE — pure structure-framework library; 0 items/blocks/loot; nothing to weave.

## do_a_barrel_roll   [anchors: support (1)]
LEAVE — client elytra-flight camera tweak; no items, blocks, or methods; nothing to route.

## ding   [anchors: support (1)]
LEAVE — client audio-cue on load; no items/blocks/methods; nothing to route.

## rightclickharvest   [anchors: support (1)]
LEAVE — interaction-behavior QoL (right-click harvest); no items/blocks/methods.

## sounds   [anchors: support (1)]
LEAVE — client SFX-overhaul; no items/blocks/methods.

## bigsignwriter   [anchors: support (1)]
LEAVE — client sign-GUI utility; no items/blocks/methods.

## necronomicon   [anchors: support (1)]
LEAVE — pure code library (config/datagen helpers); 0 items/blocks/methods.

## corgilib   [anchors: support (1)]
LEAVE — pure code library (loot/worldgen/datagen helpers); 0 items/blocks/methods.

## naturescompass   [anchors: support (1)]

Existing rows: M-05 gate-via-Create REJECT (majority correct); M-30 recipe-requires-regional-ore ACCEPT (2, but weakly framed).

- CHALLENGE | from: naturescompass:naturescompass (bare "biome compass helps find regional ore biomes") | via: recipe (vanilla, no change) | to: economy | motif: M-30 | verdict: REJECT | hook: the accepted M-30 rows don't propose an actual recipe change — they label an existing tool "useful near regional scarcity" without routing any region-locked material through its crafting. M-30 requires the *good's key input* to be region-locked; the bare navigator-utility framing doesn't satisfy that.
- NEW | from: naturescompass:naturescompass | via: recipe (add one region-specific ore/gem shard — e.g. a GTMOGS c:gems/amethyst_shard or a regional flint variant — as a crafting ingredient) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the biome-finder itself consumes a piece of the terrain it reads — a player in the desert uses desert-quartz in their compass, someone in snow-lands needs a frozen-ore shard; the tool that maps scarcity is shaped by it.


