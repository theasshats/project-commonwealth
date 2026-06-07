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

## createfood   [anchors: survival, Create (2)]

Existing connections: already 2 anchors; it is a massive consumer of Create + FarmersDelight methods (dozens of inbound weave uses). Dossier candidate is M-09 (cut). Evaluating whether 3rd-anchor or better weave exists.

**Method-pull analysis:**
- createfood outputs: 1993 items, primarily finished dishes and placeable food blocks across all five diet groups. It consumes `c:foods/raw_meats/*`, `c:foods/doughs`, fish, cheese. Already fully wired into Create + FD methods — this is the *endpoint* of M-12.
- As an endpoint of the food chain, its finished dishes are M-26 consumption sinks (eaten against diet pressure) — but that's ambient loop, the existing survival anchor already covers it.
- Colony route: MineColonies cook hut could produce subset of createfood dishes as colony output — M-28. This adds the colony route (economy-adjacent via MineColonies) as a cheaper-basics path for common dishes. A cook's hut mass-producing bread/pastries is cheaper than running a full Create bakery — natural.
- Seasonal reagent: some createfood dishes require seasonal crops (autumn pumpkins, summer strawberries via other food mods). If those ingredient slots are filled by season-locked crops the dish is implicitly seasonal — M-16. Not an authoring task now (depends on crop-mod presence), but the hook is real.
- The placeable food deco blocks (pizza/cake slices on a plate) are essentially decorative. `create:crushing` crushing them back is M-04 (lossy), but it would be comical to crush a pizza. REJECT.
- Magic: an Ars_nouveau ritual requiring a specific createfood item as a feast-offering? The `ars_nouveau:summon_ritual` or `enchanting_apparatus` could accept a dish as part of a catalyst. Thematically: feeding the apparatus a created cake feels whimsical but coherent in Ars's flavor. Power: everyday. M-10 (arcane infusion pull — a food item refined through imbuement). However, deep cuisine being a magic reagent is thematically borderline — Ars does use food components in some recipes. Survives red-team marginally.

- from: createfood finished dishes (all five diet groups) | via: minecolonies cook hut production | to: economy | motif: M-28 | power: everyday | tone: ok — a cook in a colony producing bread and pastries cheaper than running Create sequences is a natural colony-route cheaper-basics path | verdict: ACCEPT | hook: the colony cook churns out everyday dishes without firing up the Create processing line; specialists trade Create's elaborate multi-stage creations for the basics the colony handles.

- from: createfood dishes using season-locked crop inputs | via: season-gated ingredient → Create/FD method | to: survival | motif: M-16 | power: mid | tone: ok — a pumpkin pie only craftable in autumn, or a summer-berry ice cream, creates a seasonal pull on the food chain | verdict: ACCEPT | hook: the autumn harvest is the only window to stock pumpkin pies for the winter; the food calendar drives the kitchen calendar.

- from: createfood high-tier dish (e.g. elaborate cake/feast item) | via: ars_nouveau:enchanting_apparatus (as feast-offering catalyst) | to: magic | motif: M-10 | power: mid | tone: clash — feeding elaborate cake into an arcane apparatus feels forced; food is not Ars's material language; the dish has no magic resonance beyond "organic" | verdict: REJECT | reason: thematic mismatch; Ars reagents are gems/essences/organic-magical materials, not culinary outputs; a pizza-as-magic-catalyst strains credulity.

- from: createfood placeable food blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash — crushing a pizza back to flour/crumbs is mechanically possible but tonally ridiculous and serves no gameplay function; M-04 is for stone/metal deco, not food | verdict: REJECT | reason: thematic absurdity; M-04's anti-arbitrage/lossy logic is for block materials, not culinary items.

OK — existing Create + survival connections sound and deep. M-28 (colony cook) and M-16 (seasonal ingredient gate) are genuine additions. Economy via M-09 (retired) is correctly removed from dossier.

## chat_heads   [anchors: support/QoL (1)]

LEAVE — pure client chat-UI overlay; zero items, blocks, loot, or any content surface. Sanctioned support role with no weave possible.

## curios   [anchors: support/library (1)]

LEAVE — equipment slot API with zero content of its own; its role is infrastructure enabling other mods' accessories (Ars rings, Iron's amulets). Sanctioned library/support role; the weave value is already expressed through those consumer mods, not Curios itself.

## create_dragons_plus   [anchors: Create (1)]

Existing connections: 1 anchor (Create). Dossier says "support role — leave." Re-evaluating whether the `ending`/`freezing` fan methods open a real second anchor.

**Method-pull analysis:**
- `create_dragons_plus:ending` — Bulk Ending fan mode (dragon breath catalyst → End-infuses items). This is a Create method that could be used by OTHER mods to route through (other chunks' mods route THROUGH this). But from create_dragons_plus's perspective, can it gain a second anchor by virtue of its ending method being used for magic or survival outputs?
- Routing items through `ending` produces End-touched variants. If End-touched items are magic reagents or supply occult rituals, that is a second anchor for this mod as an intermediate method provider. For example: `ars_nouveau:imbuement` consumes End-infused materials in some packs. The `ending` method could produce an End-primed intermediate that feeds ars or occultism. M-10 (arcane infusion pull) — the ending method as a pre-processing step before imbuement.
- `create_dragons_plus:freezing` — Bulk Freezing (powder snow catalyst). Frozen items could be magic-adjacent (ice = winter = lunar?). A lunar/celestial reagent gate via freezing? Weak without a specific item.
- The dragon_breath fluid itself: could be a reagent for occultism rituals or Ars imbuement as a high-tier catalyst. Dragon breath is already an exotic material. `occultism:spirit_fire` or `ars_nouveau:imbuement` using dragon breath as a catalyst. M-10 (arcane infusion pull — exotic fluid as infusion catalyst).
- Red-team: create_dragons_plus is a library for its own add-on family. Its "methods" are weave-targets that other mods route through; it gains anchors as the routing station, but the anchor is Create (which it already has). The magic angle requires authoring a recipe that routes something through `ending` or uses dragon_breath as an imbuement input — both are other-mod-consumer recipes, not create_dragons_plus-authored items. The mod earns a second anchor when another mod's recipe routes through its methods. That is a valid anchor addition, but it would be authored against create_dragons_plus's method, not as create_dragons_plus's own item output.
- The argument: if `create_dragons_plus:ending` is used to produce a magic intermediate (e.g., an End-infused ore that then goes into Ars imbuement), then create_dragons_plus is a processing step in the magic chain — it gains magic as a second anchor.

- from: create_dragons_plus:ending method (via dragon breath catalyst) producing End-infused intermediate | via: create_dragons_plus:ending → ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — End-infusion as a pre-processing step before arcane imbuement makes thematic sense; dragon breath is already an exotic exotic-world material | verdict: ACCEPT | hook: an End-attuned ore run through the Ending fan becomes an infusion-ready substrate; the Create processor feeds the magic pillar with prepared materials.

- from: create_dragons_plus:dragon_breath fluid | via: ars_nouveau:imbuement (as exotic catalyst) | to: magic | motif: M-10 | power: mid | tone: ok — dragon breath as an arcane catalyst is lore-coherent; it's a rare End-world material | verdict: REJECT | reason: overlaps the ending-method accept above (both are the same dragon-breath→magic edge at different abstraction levels); keep the method-routing (ending → imbuement) over the raw-fluid edge; consolidate.

- from: create_dragons_plus:freezing method (powder snow catalyst) | via: create_dragons_plus:freezing → lunar/seasonal reagent path | to: survival/magic | motif: M-22 | power: everyday | tone: clash — powder snow + freezing is winter-flavored but the moon-lunar hook is a stretch; the freezing method is Create-practical, not celestial | verdict: REJECT | reason: M-22 requires lunar-event gating; this is just a temperature-themed processing step with no lunar mechanic behind it.

REWORK: dossier says "leave — support role." The ending method does open a real second anchor (magic) when used as an M-10 intermediate step. Not a forced leave; upgrade to 2-anchor via the accepted M-10 edge.

## do_a_barrel_roll   [anchors: support/client QoL (1)]

LEAVE — pure client elytra-camera behavior mod; zero items, blocks, loot, or content surface. Sanctioned support role; nothing to route through any method, and its elytra connection is control feel, not Create Aeronautics ships content.

## blockui   [anchors: support/library (1)]

LEAVE — XML UI framework library; zero content surface. Hard dependency of MineColonies pulled automatically; a genuine zero-surface code library with no items/blocks/loot.

## jeed   [anchors: support/client UI (1)]

LEAVE — JEI display provider (effect documentation); its two "recipe-types" are JEI viewer categories, not craftable methods. Zero items, blocks, no loot. Sanctioned support role with no content to weave.

## comforts   [anchors: survival (1)]

Existing connections: 1 anchor (survival). Dossier says "leave" — evaluating.

**Method-pull analysis:**
- Sleeping bags: wool + string. No novel material; no foreign import/export. The output is a QoL tool (portable sleep), not a production input.
- Hammocks: same material profile.
- `comforts:rope_and_nail` — a unique item component. Could be a crafting intermediate gated on Create (a nail = pressed metal, M-05)? Power: everyday. But a rope-and-nail is trivial — gating it behind Create pressing for a sleeping bag component would be disproportionate depth for a basic QoL item. The briefing's hard guardrail: "never gate a basic/everyday component behind a complex recipe."
- Dyed sleeping bags: 16 colors of wool → 16 bags. `create_dragons_plus:bulk_dyeing` could re-dye bags (fun but not a weave). No coherent second anchor.
- Loot=yes (comforts loot tables): sleeping bags might appear in structure loot. As a survivability aid in dungeon chests, they slightly feed the exploration-reward loop but add no cross-system connection.
- Thematic: comforts is survival-flavor QoL at the most basic level. A forced Create edge on a sleeping bag is noise.

- from: comforts:rope_and_nail | via: create:pressing (nail from a metal sheet pressed component) | to: Create | motif: M-05 | power: everyday | tone: clash — pressing metal to make a nail-sized component then using it in a sleeping bag recipe is disproportionate; the guardrail prohibits gating everyday basics behind complex recipes | verdict: REJECT | reason: hard guardrail — everyday QoL item; depth does not scale with power here; the nail is trivially basic.

LEAVE — no coherent second anchor that survives the everyday-component guardrail. One light survival-touch mod; the loop doesn't need it wired deeper.

## mffs   [anchors: Create, survival (2)]

Existing connections: 2 anchors, already the gold-standard authored weave (60-mffs.js: M-05 focus_matrix on electron_tube; M-06 projector/interdiction_matrix as sequenced_assembly chains through derpack:incomplete_* parts; TFMG steel mid-tier). Dossier confirms "no new edge needed."

**Reviewing existing connections:**
- M-05 (focus_matrix ← electron_tube): correct application — the focus is a flagship mid-tier component gated on Create precision. Sound.
- M-06 (projector/interdiction_matrix sequenced_assembly through incomplete_* parts): correct application — the endgame defense system is a multi-stage chain. Sound.
- TFMG steel mid-tier: sound — uses the industrial steel route for mid-tier machines.
- Survival anchor: base-defense / PvE protection. Coherent — MFFS is the "no one can take your base" security layer; danger pressure drives demand for it.

No new weave needed. Could M-33 (service-for-hire) apply — a player who owns MFFS equipment and offers to build/configure force fields for others? Thematically yes, but it's ambient player behavior, not a recipe weave.

OK — connections sound. M-05 + M-06 authoring is the reference implementation; no additions needed.

## alcohol_industry   [anchors: Create, survival (2)]

Existing connections: 2 anchors (Create + survival). Dossier proposes M-09 (economy via luxury → coin), which is retired.

**Method-pull analysis:**
- Finished liquors (beer, vodka, whiskey, tequila) are buff foods. They satisfy diet diversity (if tagged correctly) — deepens survival. Already anchored survival via consumable buffs.
- `alcohol_industry:alcohol_boiling` method: the Alcohol Boiler is a heat-processing block. What other materials could route through it? The boiler processes an Alcohol Base fluid into specific spirits — it's a conversion method. Could a magic reagent be produced by boiling a specific herbal infusion? Not a stretch — mead-with-magic-herbs → a usable potion? M-12 (processing-chain pull: herbal input → boiler → magic-adjacent output). However, this is highly speculative with no concrete herb→spirit established.
- Maturation angle: spirits improve with age? `alcohol_industry` doesn't have a maturation mechanic, but `alcohol_industry:alcohol_boiling` produces a raw spirit that could then mature via `vinery`/M-35 aging. This is a cross-mod processing chain — M-32 (byproduct → input: raw spirit → aging step → matured spirit). Mid-tier; the aged product has higher value. Coherent.
- Economy via M-35 maturation: spirits that must age to reach full value create a maturation-specialist role. An alcohol_industry player produces raw spirits and either sells them raw or matures them via the vinery/extradelight drying rack. This is an economy connection (maturation → sellable trade good) via M-35.
- M-26 consumption: spirits are consumed against the survival/buff layer continuously — ambient loop-closing, no weave.

- from: alcohol_industry:beer/vodka/whiskey/tequila (raw spirits) | via: vinery:wine_fermentation or extradelight:evaporator (aging/maturation post-step) | to: economy | motif: M-35 | power: mid | tone: ok — spirits that improve with age create a maturation-specialist role; the distiller produces raw output, the cellar-keeper ages it, the trader sells it | verdict: ACCEPT | hook: raw spirits from the boiler go into barrels or evaporator vats to mature; only aged bottles command a premium on the trading floor.

- from: alcohol_industry:alcohol_base | via: ars_nouveau:imbuement (herbal-spirits → arcane extract) | to: magic | motif: M-10 | power: mid | tone: clash — forcing arcane infusion of a distilled alcohol base is thematically strained; Ars's reagent language is gems/essences/nature-materials, not industrial spirits | verdict: REJECT | reason: thematic mismatch; alcohol-as-magic-catalyst has no lore grounding in Ars Nouveau; forced.

REWORK: dossier M-09 candidate — correctly retired; the replacement is M-35 (maturation), which the dossier didn't identify. The Create + survival anchors are sound; M-35 adds the economy dimension properly.

## mowziesmobs   [anchors: survival (1)]

Existing connections: 1 anchor (survival). Dossier identifies three candidates: M-05/M-06 Create gating, M-11/M-02 magic, M-08 economy bounty (weak).

**Method-pull analysis:**
- Boss drops: `mowziesmobs:ice_crystal` (Frostmaw), `mowziesmobs:sol_visage` (Barako), `mowziesmobs:earthrend_gauntlet` / wrought helm (Wroughtnaut). These are artifact-grade items — the canonical boss-key gate material per CLAUDE.md and SYSTEMS.md §3.
- `mowziesmobs:earthrend_gauntlet` / wrought metal: a heavy dense artifact → could gate a high-tier Create sequenced_assembly (M-15 boss-key unlock: "boss drop as a keystone in a complex Create/tech recipe"). Mid-to-endgame. Thematic: a dense wrought-metal artifact from the earth-wroughtnaut becomes a component in a heavy Create machine frame. Coherent.
- `mowziesmobs:ice_crystal` (grants ice attacks): magic-adjacent — cold/ice essence. `ars_nouveau:imbuement` could use it as an arcane catalyst for ice-type spells/runes (M-02 mob-drop reagent sink / M-10 arcane infusion pull). Power: mid. Thematic: ice crystal from a glacier giant as a magic catalyst — very coherent.
- `mowziesmobs:sol_visage` (sun powers): solar/fire essence. `occultism:ritual` or `ars_nouveau:imbuement` wanting a solar-attuned artifact as a catalyst. M-02/M-10. Power: endgame. Thematic: the sun god's mask as a ritual reagent — coherent, high-cost.
- `mowziesmobs:elokosa_paw` — a moon-phase-sensitive wolf-mob drop (Elokosa howler). The paw could be a M-22 lunar reagent — available when the Elokosa spawns (which may be moon-dependent) and consumed in a lunar-gated magic recipe. Power: mid. Thematic: werewolf paw as a lunar reagent is the classic trope — excellent tone fit.
- Economy bounty (M-34 combat-route supply): players who farm Mowzie bosses supply the rare drops to non-combat players via trade. M-34 (combat-route supply) — the supply side of the boss dual-role. The drops are not minted into coin (M-08 would be wrong); they're traded goods that a fighter produces for a crafter/mage who needs them. Coherent as M-34.
- Loot=yes and biome modifier: Mowzie structures (Barakoa villages, Frostmaw lair) contain loot tables. Could seed magic reagents or Create-relevant materials into those loot tables to reward exploration with cross-system goods. Via: loot-seed. M-30 or M-34 flavor.

- from: mowziesmobs:earthrend_gauntlet / wrought metal boss material | via: create:sequenced_assembly (as keystone component in endgame machine frame) | to: Create | motif: M-15 | power: endgame | tone: ok — a dense artifact from a metal-armored earth giant becoming a foundational component in a Create-forged machine frame is thematically excellent | verdict: ACCEPT | hook: the Wroughtnaut's gauntlet, melted down through Create sequences, yields a structural component no smithy can fabricate; you must fight for what you build.

- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok — Frostmaw's crystallized ice as an arcane catalyst for frost-type imbuement is a perfect thematic fit | verdict: ACCEPT | hook: the Frostmaw's drop is the only source of an ice-essence needed for cold-aligned magic; defeat the glacier giant or buy the crystal from someone who did.

- from: mowziesmobs:elokosa_paw | via: magic ritual / ars_nouveau:imbuement | to: magic | motif: M-22 | power: mid | tone: ok — a howler-wolf paw as a lunar reagent is the archetypal trope; if the Elokosa spawns on specific moon phases it doubles down | verdict: ACCEPT | hook: the howler paw, gathered during the crescent moon, feeds a lunar imbuement ritual; the moon cycles dictate when you can cast this spell.

- from: mowziesmobs:sol_visage (solar boss mask) | via: occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok — the sun god's mask as a ritual sacrificial component for an occult solar ritual is tonally coherent in Occultism's dark-magic aesthetic | verdict: ACCEPT | hook: the Sol Visage, burned in Occultism's spirit fire, powers a high ritual no mundane offering can fuel.

- from: mowziesmobs boss drops | via: player trade / combat specialization | to: economy | motif: M-34 | power: mid-endgame | tone: ok — the combat specialist farms Mowzie bosses and sells the drops to non-combat players who need them for their Create/magic work | verdict: ACCEPT | hook: the fighter who downed the Wroughtnaut trades its gauntlet; the mage who needs ice crystal buys from the explorer — neither can cover both roles alone.

- from: mowziesmobs structures (Barakoa villages) | via: loot-seed | to: survival/economy | motif: M-34 | power: everyday | tone: ok — seeding Create component blueprints or magic-reagent primers into Barakoa loot rewards dungeon exploration with cross-system goods | verdict: ACCEPT | hook: clearing the Barakoa village yields not just loot but a rare schematic or magic primer that feeds production; exploration pays forward.

- from: mowziesmobs boss kills | via: numismatics bounty (M-08) | to: economy | motif: M-08 | power: mid | tone: clash — M-08 is player-minted currency from processed ore, not NPC bounty payouts; a bounty board paying coin for boss kills would be M-14 (cut as NPC faucet) | verdict: REJECT | reason: dossier misframes as M-08; the NPC-bounty read is M-14 (cut); player-to-player drop trade is M-34 (accepted above).

## create_mobile_packages   [anchors: Create, aeronautics (2)]

Existing connections: 2 anchors (Create + aeronautics/logistics). Dossier correctly identifies these and notes "leave" for economy-adjacency since it's infrastructure.

**Reviewing existing connections:**
- Create anchor: uses Create parts to build Bee/Drone Ports and Robo Bee couriers; extends Create's Logistics network. Sound.
- Aeronautics/logistics anchor: airborne drone delivery is the economy's physical movement arm. Sound — this is the most direct embodiment of the logistics pillar (matter movement).
- Dossier economy-adjacency note: the mod carries goods between players but doesn't itself do currency/trade. The infrastructure role is appropriate.

Can a 3rd touch be meaningful? M-31 (logistics-required bulk good) — the mod IS the logistics mechanism, so it can't also be the bulk good. M-33 (service-for-hire: a player offers courier-drone delivery as a paid service) — plausible in the ~10-player context; this is ambient player behavior, not a recipe.
- Could the robo_bee or bee_port itself be gated behind Create precision components to add depth to the logistics arm? M-05/M-06: the bee_port or robo_bee recipe gated on sequenced_assembly or Create mechanical_crafting. This would add depth to aeronautics construction (making the logistics arm cost real fabrication, per M-23/M-24 spirit). Power: mid for the port, everyday for the robo_bee.

- from: create_mobile_packages:drone_port / robo_bee | via: create:sequenced_assembly or create:mechanical_crafting (gate port construction on precision components) | to: Create | motif: M-06 | power: mid | tone: ok — an airborne drone port needs precision engineering; routing it through Create sequenced assembly deepens the logistics arm's cost appropriately | verdict: ACCEPT | hook: building a drone port is not trivial wood-craft; the sequencer builds each port in stages from precision-fabricated components — deploying a logistics network is itself a Create project.

OK — existing Create + aeronautics connections sound. The M-06 depth-add for port construction is a genuine improvement to the logistics arm's fabrication cost.

## companion   [anchors: support/QoL (1)]

LEAVE — behavior-only pet-safety mod; zero items, blocks, loot, no content surface. Sanctioned support role.

## cataclysm   [anchors: survival (1)]

Existing connections: 1 anchor (survival). Dossier identifies three candidates: Create M-05/M-06, magic M-02/M-11, economy M-08. Large boss mod — rich candidate surface.

**Method-pull analysis:**
- Boss materials: `cataclysm:ancient_metal_ingot`, `cataclysm:witherite_ingot`, `cataclysm:ignitium_ingot`, `cataclysm:cursium_ingot`, `cataclysm:void_core` — a full set of exotic metals/materials, each from a different boss.
- `cataclysm:ancient_metal_ingot` → Create processing: crushing/pressing/rolling into ancient metal sheets (M-03 ore-doubling analog). Then ancient metal sheets as a sequenced_assembly keystone for high-tier Create machines (M-15 boss-key unlock). This is EXACTLY the CLAUDE.md-named mechanism: "complex Create tech unlocks via boss drops." Power: endgame. Thematic: ancient war-metal from a relic boss becomes the substrate for a precision Create machine. Strong.
- `cataclysm:witherite_ingot` (Netherite Monstrosity drop) → occultism:ritual or ars_nouveau:imbuement as a dark-metal reagent. The Witherite is a shadow-infused metal from the Nether boss — perfect for a dark-ritual sink (M-11 ritual/transmutation sink or M-02 mob-drop reagent sink). Power: mid-endgame.
- `cataclysm:ignitium_ingot` (Ignis drop — fire boss) → Could feed as a Create fuel? No — it's a metal, not a fuel. Could gate an Aeronautics heat-engine component (M-24 mechanical component → propulsion)? An Ignitium-plated heat engine? Mid-endgame, coherent with the fire boss. M-24.
- `cataclysm:void_core` (Harbinger drop) → Ars_nouveau:imbuement as an ultimate arcane catalyst? The void core is an endgame boss drop; making it the pinnacle magic reagent (M-10 arcane infusion pull) is very strong thematically. Endgame.
- `cataclysm:amethyst_bless` method: the Altar of Amethyst blesses Amethyst Crab Meat. This is already a boss-site mechanic. Could a Create item be "blessed" at the altar? Thematically forced for Create, but for magic — could an Ars gem be blessed at the altar for an extra enchant? Stretch.
- `cataclysm:weapon_fusion` (Mechanical Fusion Anvil): fuses tools/armor. Could a Create-made component be fusioned into a weapon here (M-20 deploy-application upgrade analog)? M-20 is deploying-based; weapon_fusion is Cataclysm's own method. Not a standard motif fit, but a method-routing: Create → Cataclysm's anvil → enhanced gear. No motif for this specific cross (Create parts into a foreign fusion method). REJECT — no-motif.
- Loot=yes: eight dungeon bosses each with unique structures. Loot-seeding Create technical schematics or magic primer items into boss chests rewards endgame exploration with cross-system goods. M-34 (combat-route supply via loot-seed).
- Economy: boss materials are naturally traded goods (M-34 combat-route supply — fighters sell boss drops to crafters). The `ancient_metal_ingot` and `void_core` especially have high trade value without needing a coin peg.
- Aeronautics: `cataclysm:ignitium_ingot` as a heat-resistant lining for Aeronautics engine components? M-24 (mechanical component → propulsion). An Ignitium-lined boiler/heat-exchanger as an Aeronautics engine part, gated on defeating the fire boss. Endgame; strong thematic fit (fire boss → fire engine part).

- from: cataclysm:ancient_metal_ingot | via: create:crushing → create:pressing (sheets) → create:sequenced_assembly (keystone component) | to: Create | motif: M-15 | power: endgame | tone: ok — ancient war-metal processed through Create becomes a structural keystone no ordinary forge can produce; you must defeat the Ancient Remnant to build the highest-tier machines | verdict: ACCEPT | hook: the boss is the gate; only the ancient metal, run through Create's full processing chain, unlocks the high-tier machine recipe.

- from: cataclysm:witherite_ingot | via: occultism:ritual (as dark-metal offering) | to: magic | motif: M-11 | power: mid-endgame | tone: ok — Witherite is shadow-infused metal from a Nether boss; burning it in a spirit-fire ritual as a dark offering is tonally perfect for Occultism | verdict: ACCEPT | hook: the Netherite Monstrosity's shadow metal fuels Occultism's darkest rituals; combat specialist and magic specialist are interdependent.

- from: cataclysm:void_core | via: ars_nouveau:imbuement (as pinnacle arcane catalyst) | to: magic | motif: M-10 | power: endgame | tone: ok — the Void Core, drawn from the Harbinger, is the arcane equivalent of endgame power; the most complex Ars imbuement consumes it | verdict: ACCEPT | hook: the Void Core is the one reagent no magic formula can substitute; only the team that downed the Harbinger can unlock those spells.

- from: cataclysm:ignitium_ingot | via: aeronautics engine component recipe (ignitium-lined boiler/heat exchanger) | to: aeronautics | motif: M-24 | power: endgame | tone: ok — a fire-boss metal as a heat-resistant lining for an Aeronautics high-power engine component; the hottest engines need the fire boss's material | verdict: ACCEPT | hook: the ignitium-lined boiler is what separates a fast ship from the fastest; you fight the fire boss to fly faster.

- from: cataclysm boss drops | via: player trade | to: economy | motif: M-34 | power: endgame | tone: ok — combat specialists farm the eight Cataclysm bosses and trade the materials to crafters and mages who need them; no one can do everything | verdict: ACCEPT | hook: the raider sells ancient metal to the engineer, witherite to the occultist, void cores to the archmage; specialization is enforced by who is willing to fight.

- from: cataclysm dungeon structures | via: loot-seed | to: economy/Create | motif: M-34 | power: mid | tone: ok — seeding boss-dungeon chests with Create schematics or magic primers rewards exploration with cross-system progression materials | verdict: ACCEPT | hook: clearing the Cataclysm dungeon yields not just the boss drop but a schematic for the machine that needs it.

- from: cataclysm:weapon_fusion (Mechanical Fusion Anvil) | via: Create-component → weapon_fusion | to: Create | motif: no-motif | power: mid | tone: ok — a Create precision component fused onto a weapon is thematically fine but no established motif covers "Create parts into a foreign fusion method" (M-20 is deploying, not fusion) | verdict: REJECT | reason: no-motif; would need a Gate 0 decision for a new routing motif before this can be authored.

- from: cataclysm:amethyst_bless (Altar of Amethyst) | via: magic item → amethyst_bless blessing | to: magic | motif: M-10 | power: endgame | tone: clash — the altar is world-unique (only in the Sunken City) and designed for a specific boss fight mechanic; co-opting it for general magic item blessing feels like it would cheapen the boss-site context and conflict with the intended scarcity | verdict: REJECT | reason: thematic conflict with the intended boss-fight scarcity mechanic; the altar is not a general infusion station.

