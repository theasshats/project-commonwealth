# Phase 2 candidates — chunk-04

## foodeffecttooltips   [anchors: support/QoL (1)]

LEAVE — pure client tooltip renderer, zero items/blocks/loot, no content surface to route through any method. Sanctioned support role.

## naturalist   [anchors: survival (1)]

Existing connections: none authored. Dossier notes M-09 for meat sales (cut) and M-04 for shellstone crushing. Evaluating fresh.

**Method-pull analysis:**
- `naturalist:venison` / `naturalist:bushmeat` — tagged meat items; `createfood` and `farmersdelight` both consume `c:foods/raw_meats/*` — naturalist meat slots directly into the food-processing chain (M-12).
- `naturalist:antler` — dense bone analog; `occultism:spirit_fire` and `ars_nouveau:imbuement` want unusual organic reagents for rituals and infusions. No reserved ownership. Plausible M-02/M-11 sink.
- `naturalist:glow_goop` — bioluminescent fluid from fireflies; thematically adjacent to luminescent reagents; `ars_nouveau:imbuement` could consume it as a light-essence catalyst (M-10), or `create:splashing` could use it as a dye-analog (weak). No reserved ownership.
- `naturalist:shellstone` / `naturalist:froglass` — decorative stone/glass set; `create:crushing` crushes stone deco back to raw + xp nugget (M-04, lossy). Coherent, zero stakes.
- Loot table seeding: naturalist mobs generate in biomes (loot=yes); could seed a magic reagent drop onto Naturalist bosses/alpha-tier animals if any exist — but no boss-tier in the mod, just ambient fauna. Weak loot-seed candidate.

- from: naturalist:bushmeat / naturalist:venison | via: farmersdelight:cooking + createfood processing chain | to: survival (food pillar depth) + Create | motif: M-12 | power: everyday | tone: ok — wild game feeding the kitchen is obvious | verdict: ACCEPT | hook: hunted bushmeat runs through the Farmer's Delight cutting board and CreateFood's sequences; the wilderness feeds the kitchen.

- from: naturalist:antler | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — antler as a ritual component is thematically coherent (bone-analog keratin from a large beast) | verdict: ACCEPT | hook: antler burned in spirit fire transmutes into an occult essence; hunters supply the magic specialist.

- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok — bioluminescent goo as a light-essence component makes immediate sense | verdict: ACCEPT | hook: firefly glow-goop imbued into a luminescent source gem additive; gatherers provide what the mage needs.

- from: naturalist:shellstone (deco blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — deco stone recycling is the standard lossy-recycle edge | verdict: ACCEPT | hook: shellstone crushes back to gravel + xp; nothing is wasted.

- from: naturalist:glow_goop | via: create:splashing | to: Create | motif: M-04 (deco recycle analog) | power: everyday | tone: clash — splashing is a water-washing method; goo-as-dye-in-splashing has no mechanical grounding; the glow isn't a dye | verdict: REJECT | reason: no coherent method; M-04 is for block→raw recycle, not for applying a light fluid via splashing; forced.

REWORK: dossier candidate "economy via numismatics sale of cooked venison/bushmeat — M-09" — M-09 is retired; bare sell link not a weave. The correct frame would be M-26 (consumption sink: hunters supply the food chain which gets consumed against diet pressure) or M-34 (combat-route supply: hunters sell to non-hunters). The diet-demand angle is ambient (M-27 n/a). If noting a trade value it should be M-34. Not a formal weave but the dossier mis-labelled.

OK — the M-12 / M-11 / M-10 / M-04 candidates above are coherent.

## create_integrated_farming   [anchors: Create, survival (2)]

Existing connections: already 2 anchors; the mod is a Create-automation wrapper for husbandry (roosts → steady animal products feeding the food chain). Dossier's candidate economy-via-numismatics (M-09) is cut.

**Method-pull analysis:**
- Roost outputs: eggs, feathers, raw poultry at scale — bulk organic goods. `farmersdelight:cooking` and `createfood` chains consume them naturally (deepens survival pillar, already anchored). No new system hop needed here.
- Feathers are a fletching/arrow material; `create:milling` can process feathers into quill-dust as a magic-ink reagent? No native consumer — too speculative, no motif.
- The fishing_net / lava_fishing_net: lava fishing produces blaze rods and nether drops — `occultism:spirit_fire` uses blaze rods as a ritual fuel; routing lava-net catches into the occult spine is coherent. M-12 (processing-chain: automated nether-material acquisition feeding a magic method).
- Roost outputs as M-26 consumption sink: eggs/feathers are consumed continuously against diet demand — ambient loop-closing, no weave needed (the mod already anchors survival through production).
- Loot=yes but no structure — not a loot-seed candidate.
- MineColonies colony-scale: a chicken-farm hut could be a colony-route cheaper analog — M-28. But that's infrastructure design, not a recipe weave here.

- from: create_integrated_farming:lava_fishing_net drops (blaze rods / nether fish) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — lava fishing in the nether is a natural blaze-rod supply; burning them in spirit fire is an occult ritual sink | verdict: ACCEPT | hook: a lava net running in the Nether steadily feeds a spirit-fire ritual altar; the Create farmer supplies the magic specialist.

- from: create_integrated_farming:fishing_net (steady fish output) | via: farmersdelight:cooking / createfood | to: survival (food depth) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is an internal deepening within the mod's existing survival anchor — no new system hop, survival is already anchored; not a weave candidate, just normal use.

- from: roost feather output | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — feathers are not a magic item; using them as a "light essence" catalyst is forced; no resonance with Ars's known component language | verdict: REJECT | reason: thematic clash; a basic mundane material pushed through arcane infusion with no lore grounding.

OK — existing Create + survival connections sound; add the lava-net → spirit-fire (M-11) as the economy of magic reagents (hunter/farmer → magic specialist). The second anchor holds; this is a value-add third touch.

REWORK: dossier economy candidate (M-09 luxury → coin) — M-09 retired; dismiss. No replacement needed as the 2-anchor state is already solid; the lava-net M-11 is a bonus, not a patch.

