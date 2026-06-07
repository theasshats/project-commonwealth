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

## securitycraft   [anchors: support (1)]

Existing connections: none authored. Dossier notes two weak candidates: economy-via-scarce-metals (M-08 framing) and Create-gating of reinforcing/sentry (M-05 framing).

**Method-pull analysis:**
- `securitycraft:block_reinforcing_recipe` — the core method: takes any block and converts it to an owner-locked reinforced variant. The reinforcing agent itself is currently vanilla-material only. Gating the reinforcing agent (the "Universal Block Reinforcer" tool) or a key component behind Create-made parts is M-05. Mid-tier power (reinforcing is a significant capability — base security).
- Sentry (auto-turret block): a defensive gun emplacement. Routing its crafting components through Create mechanical_crafting or sequenced_assembly (M-05/M-06) is coherent — the sentry is effectively a Create-style automated device. Power: mid.
- `securitycraft:limited_use_keycard_recipe` — keycards degrade (limited use). This has a hint of M-38 (tooling wear) but M-38 is mechanism-pending; cannot propose it. The degradation is already built in; no new weave.
- Loot=yes: securitycraft blocks appear in dungeon-like structures? The jar suggests some loot tables. But securitycraft doesn't generate structures of its own; its loot tables are for player-built trap mines/chests, not world-generated structures. Not a loot-seed candidate.
- Economy: reinforced-block security as a service-for-hire — a player specializing in base hardening provides security consulting for coin. M-33 (service-for-hire: one player reinforces another's base for payment). Coherent in the ~10-player co-op context. No item to trade; the service is the labor.
- Create: the `securitycraft:block_reinforcing_recipe` requires the "Universal Block Reinforcer" to be crafted. Gating that Reinforcer's recipe behind Create:electron_tube or a Create-fabricated part is M-05 (native-method gating). Mid-tier — the Reinforcer is the unlocking tool, not trivial.

- from: securitycraft Universal Block Reinforcer (the reinforcing tool) | via: create:mechanical_crafting (gate key component on Create parts — electron tube / precision mechanism) | to: Create | motif: M-05 | power: mid | tone: ok — a sophisticated electronic-security device needing precision machined parts is sensible | verdict: ACCEPT | hook: the Reinforcer needs a precision mechanism from a Create press before you can harden any block; base-defense is gated on tech investment.

- from: securitycraft sentry (auto-turret) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok — a sentry auto-turret is a sophisticated mechanical device; routing it through sequenced assembly (incomplete_sentry_frame stages) is coherent | verdict: ACCEPT | hook: building a sentry requires staged assembly on Create machinery; automated defense demands automated manufacture.

- from: securitycraft base-hardening labor | via: player-service | to: economy | motif: M-33 | power: mid | tone: ok — in a ~10-player co-op a "base security specialist" service role is plausible and directly player-run | verdict: ACCEPT | hook: a player who masters reinforcing and traps offers to harden teammates' bases in exchange for goods; security is a labor service, not a product you buy.

- from: securitycraft:limited_use_keycard_recipe | via: M-38 tooling-wear angle | to: economy | motif: M-38 | power: everyday | tone: ok | verdict: REJECT | reason: M-38 is mechanism-pending (#239); keycards already degrade natively but the wear → remade-by-toolmaker loop has no implementation method; cannot propose as a weave.

- from: securitycraft reinforced blocks as high-value scarce-metal sink (M-08 framing) | via: numismatics | to: economy | motif: M-08 | power: mid | tone: clash — M-08 is player-minted *coin*, not "sell this for coin"; securitycraft does not process any ore into currency; the link was trying to say "security gear is expensive so it creates trade demand" which is ambient loop, not a weave | verdict: REJECT | reason: misframed as M-08; the real link is either M-05 (Create-gated) or M-33 (service) — both already accepted above.

