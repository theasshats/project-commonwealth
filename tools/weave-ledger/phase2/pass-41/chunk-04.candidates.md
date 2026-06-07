# Phase 2 candidates — chunk-04 (context-fed)

## cbc_at   [anchors: create, aeronautics (2)]

Existing rows cover M-15, M-34, M-26, M-28, M-30, M-31, M-37, M-29, M-05, M-06, M-19, M-02. Coverage is broad. Two gaps and one structural challenge noted.

- CHALLENGE | from: cbc_at heavy-autocannon/rocket-pod tier (several accepted rows labelled M-05 for the boss-drop gate) | via: native-method gating on Create parts | to: create | motif: M-05 | verdict: REJECT | hook: M-05 is "mod's flagship item built in its own machine, gated on Create parts as inputs"; the heavy autocannon already uses create:cutting + CBC assembly as its method — the boss-drop gate is M-15 (the trophy is the gate item, not a Create part). Filing the same boss-gate under M-05 misapplies the motif; M-05 should be reserved for the TFMG steel/hot-blast barrel-material-upgrade weave (which is a distinct, legitimately M-05 edge), not the trophy-gate.
- NEW | from: cbc_at barrel blanks / TFMG steel casting slag | via: tfmg:hot_blast → create:crushing (slag byproduct recycle) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial blast furnace that hardens nethersteel barrels produces slag — Crushing Wheels recover iron grit that feeds back into the munitions line, closing the arms-factory waste loop

## steves_lava_chicken_music_disc   [anchors: support (1)]

Existing rows: two REJECT attempts (loot-seed, M-34). Both correctly refused. Single-item easter-egg with zero gameplay surface — no item processing, no loot tables that could introduce pack-relevant drops. Prior passes exhausted plausible angles.

LEAVE — a single meme music disc; zero content surface; forcing any weave is noise.

## particlerain   [anchors: support (1)]

No prior rows. Zero items, zero blocks, zero loot, client-only rendering mod. No material to route through any method.

LEAVE — pure client visual layer; no content surface whatsoever.

## wits   [anchors: support (1)]

No prior rows. Zero items, zero blocks, server-side command utility only. No material, no loot.

LEAVE — debug command mod; no content surface.

## tide   [anchors: survival (1)]

Existing rows cover M-12/M-16/M-22/M-28/M-30/M-26/M-32/M-34/M-35/M-11 and M-05 (Angling Table). Coverage is strong. One nuance the existing rows miss entirely: M-33 (fishing-as-service). All existing economy rows frame tide fish as traded goods (M-30/M-28/M-34), but the Angling Table's customization work (rod tuning for lure/void fishing, seasonal-catch optimization) is a skilled service, not a sold product. Separately, the M-26 bait-consumption row is accepted but frames bait as "crop inputs consumed per cast" — the deeper version is that biome-rare bait (crafted from exotic inputs) creates a *demand chain* that can't be collapsed by the fisher alone.

- NEW | from: tide angling-table customization expertise (void-fishing rod setup, biome-matched bait loading) | via: service-for-hire (player performs rod setup on another player's materials at the Angling Table) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the fishing specialist who has grinded the void-bobber unlock and biome bait tables tunes your rod for you — knowledge the builder doesn't have and can't simply buy off a stall

## createaddoncompatibility   [anchors: support (1)]

One prior row: REJECT (weave belongs on the plastic-producing mod, not this shim). Correct. Support/glue layer with zero material throughput of its own; only tag unification rules.

LEAVE — support compat shim; nothing to route through any method.

## cristellib   [anchors: support (1)]

No prior rows. Library with zero blocks, items, loot. Provides structure-config framework only.

LEAVE — pure code library; no content surface.

## create_ltab-3.9.2   [anchors: create, survival (2)]

Already ≥2. Existing rows cover M-08 (coin loot-seed, strong accept 13×), M-23 (airship-fragment loot-seed, accepted 2×), M-02 (magic reagent loot-seed, mixed). The M-34 row (combat/exploration specialist loots fabricated components) is accepted only 1× and deserves a cleaner framing: the existing M-08 coin-seed already anchors the structure to the economy loop. The M-34 angle is real but redundant with M-08's narrative unless the loot type is explicitly non-coin fabricated goods (combat drops vs. coin is a distinction worth preserving).

- NEW | from: create_ltab structure loot tables (rare chest in Create-era ruins) | via: loot-seed (seed a mid-tier cbc_at damaged-munition component — an inert shell casing, a bent barrel fragment) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: whoever ran this abandoned workshop left behind a warhead that didn't go off; finding a dud AP shell in a Create ruin tells you the military tier exists before you've built your first cannon

## create_train_parts   [anchors: aeronautics (1)]

Existing rows are crowded with M-20/M-23/M-04 all describing the same "require pressed brass/copper sheets" weave, plus M-28 (colony requests) and M-24/M-31 (arm_extender / logistics). The sheet-input weave has split verdicts because M-04 and M-20 and M-23 are being used interchangeably for it — that's the real problem. Challenge the motif confusion; then note the one missing angle.

- CHALLENGE | from: create_train_parts brass/copper sliding window / train step (pressed-sheet-input rows filed under M-04, M-20, and M-23 simultaneously) | via: create:pressing (brass/copper sheets as recipe inputs) | to: create | motif: M-04 | verdict: REJECT | hook: the same weave ("require Create-pressed sheet as crafting input") is accepted under three different motif labels in the existing rows — M-04 (deco-recycle), M-20 (deploy-application upgrade), and M-23 (structural alloy→airframe). Only one is correct: M-20 (a single light deploy/application step that consumes a pressed sheet as input to make the fitting feel machined) is the right motif for everyday deco fittings; M-04 is specifically lossy crush-recycle, and M-23 is load-bearing structural hull alloy — neither fits a cosmetic train window. Consolidate to M-20 and retire the M-04/M-23 variants.
- NEW | from: create_train_parts brass/copper train fittings (windows, steps, slides) as a bulk commodity for equipping multiple trains | via: MineColonies colony builder requests at scale (stationmaster hut orders fittings for platform upgrades) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony's station-building project orders twenty brass steps and six sliding windows from the Create shop — the train fitter becomes a standing supplier, not a one-time crafter

## createthreadedtrains   [anchors: support (1)]

No prior rows. Zero items/blocks, pure server-side performance threading for Create's railway network.

LEAVE — performance mod; no content surface.

## accessories   [anchors: support (1)]

No prior rows. Zero items/blocks, slot-framework API only.

LEAVE — pure library/API; no content surface.

## mcwroofs   [anchors: support (decoration palette) (1)]

Existing rows: all M-04 (stone/brick crush-recycle), all split 50/50 or REJECT-majority. The dossier itself flags this as WEAK (600-block wholesale pass is low-value busywork). No existing row attempts a different angle. Worth a targeted NEW rather than a wholesale M-04 sweep:

The 600-block M-04 pass is the wrong framing — it's not about the count, it's about whether a *specific small subset* of high-tier or modded-stone roof blocks has real recycling value. That subset exists: terracotta/deepslate roof variants are expensive to obtain; a crush-recycle path for those specifically is non-trivial. But this is still low-value for the pack's purposes — the dossier is right. However, one genuinely untried angle: mcwroofs provides roof-geometry blocks that could serve as MineColonies colony building material, creating a demand-gate that earns a second anchor.

- NEW | from: mcwroofs stone/brick/terracotta roof variants (a curated subset — e.g. deepslate roof, andesite roof) | via: MineColonies builder hut requests (colony town-hall or house tier-up requests specific roof blocks for architectural upgrades) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony architect's tier-3 town hall spec calls for proper cut-stone roof tiles — not stairs stacked sideways — and the builder submits the request to whoever has the Macaw's Roofs stock

## letmefeedyou   [anchors: support (QoL) (1)]

One prior REJECT (M-33 framing). Behavior-only mod; no items, no loot, no material surface.

LEAVE — multiplayer convenience behavior; nothing to weave.

## galosphere   [anchors: survival (1)]

Existing rows cover M-03, M-04, M-07, M-08, M-30 very thoroughly. M-10 (amber preservation as arcane infusion) and M-19 (haunting) correctly rejected. M-35 (amber preservation as aging) correctly rejected (preservation stops time, doesn't add value-via-time). One genuine gap: the cross-route dependency angle using `galosphere:preserved_transform_recipe` as a *catalyst vessel* that bridges the magic pillar. Galosphere's amber preservation can lock an organic item "in time" — a preserved magic reagent that doesn't decay. No existing row captures this as M-29 (cross-route dependency: magic route requires galosphere preservation as a step, not just as a catalyst):

- NEW | from: galosphere:preserved_transform_recipe (amber preservation — locks an organic item permanently) | via: galosphere:preserved_transform_recipe → ars_nouveau:imbuement or occultism:ritual (a preserved exotic organic as a required stable-reagent input in a magic recipe that would otherwise need a fresh/perishable item) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: amber preservation lets the magic specialist stockpile a perishable organic reagent indefinitely — the preserved specimen is the only form stable enough to survive the imbuement furnace; the cave-biome explorer and the arcane researcher need each other








