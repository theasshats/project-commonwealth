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

Existing rows: M-05 gate-via-Create REJECT (majority correct); M-30 recipe-requires-regional-ore ACCEPT (2, but weakly framed as bare utility labelling).

- CHALLENGE | from: naturescompass:naturescompass (bare "biome compass helps find regional ore biomes") | via: recipe (vanilla, no change) | to: economy | motif: M-30 | verdict: REJECT | hook: the accepted M-30 rows label an existing tool "useful near regional scarcity" without routing any region-locked material through its crafting — M-30 requires the good's key input to be region-locked in its recipe, not merely useful for finding regions.
- NEW | from: naturescompass:naturescompass | via: recipe (add one GTMOGS region-specific ore/gem — e.g. a biome-restricted mineral shard — as a crafting input alongside vanilla compass materials) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the biome-finder is shaped by the scarcity it navigates — crafting a compass requires a fragment of the very ore-type whose biome you want to find, so the tool that maps regional scarcity is itself a product of it.

## beachparty   [anchors: survival (1)]

Existing rows cover: coconut→Create milling/juicing (M-12, ACCEPT majority); cocktails→consumption sink (M-26, ACCEPT majority); palm biome regional scarcity (M-30, ACCEPT); Palm Bar as player service (M-33, ACCEPT); summer-gated melon cocktail (M-16, ACCEPT 1); cocktail maturation via vinery/vat (M-35, ACCEPT 1/REJECT 1). Palm wood M-04/M-12 REJECT (correct — generic wood). Mini-fridge ice REJECT (correct — free/trivial ice).

The existing rows already establish beachparty's two anchors (survival primary + Create via M-12 coconut/M-30 biome/M-33 service). What's missing:

- NEW | from: beachparty cocktails (coconut_cocktail / honey_cocktail / melon_cocktail — finished drink fluids) | via: create:filling (bottle the cocktail batch into casks for bulk economy distribution, the same way vinery wine is cask-filled) | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk cocktail output fills Create casks that a logistics specialist ships by cardboard-plane courier — the beach bar's production needs the aeronautics arm to reach inland buyers, giving the logistics route a frivolous-but-real cargo.
- NEW | from: beachparty:coconut_open + tropical fruit (melon/cocoa) | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling (ferment coconut water / tropical juice into a hard beach-liquor base before palm_bar_mixing) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a premium cocktail requires a fermented tropical base — the beach specialist needs the winery's aging method, so the bar and the brewer depend on each other; maturation adds a second tier above the default coconut_cocktail.
- CHALLENGE | from: beachparty:message_in_a_bottle (exploration item) | via: loot-seed — place a Numismatics coin or magic scroll inside | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 requires a scarce regional metal → Create-processed → player-pressed into coin; message-in-a-bottle is a random-float flavor object with no metal-processing story; seeding coin into it is arbitrary and defeats the player-run minting rationale. The existing REJECT (×1) is correct.



