# Phase 2 candidates — chunk-05

## beachparty   [anchors: survival (1)]

Power-read: The mod's two registered methods (`beachparty:mini_fridge_freezing`, `beachparty:palm_bar_mixing`) are mid-tier convenience appliances, not industrial machines. The cocktail buffs are everyday-grade consumables (short status effects, cheap fruit/honey inputs). Ice output from the mini fridge is an everyday material.

**Candidate 1 — mini_fridge ice → Create cooling / cold-chain input (M-12)**
The mini_fridge_freezing method produces packed ice / ice cheaply at any biome without farming frozen oceans. Create uses ice as a cooling reactant in several recipes (e.g. `create:mixing` cooling — recipes involving frozen/chilled intermediates). Routing this as a cheap ice feedstock into Create's cold-mixing chain is a plausible processing-chain pull. Red-team: Create can freeze things via `create:deploying` into a snow/ice biome or with snowballs; the fridge is not strictly required and the integration is thin. It also only works if there are ice-consuming Create mixing recipes in this modlist worth pointing at; there's no special Create ice-processing chain here that demands a dedicated source. Verdict: reject — the link is weak and not motif-compelling; it's "ice is convenient" not a real system edge.

- from: beachparty:mini_fridge ice output | via: beachparty:mini_fridge_freezing → create:mixing (cold feedstock) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: thin convenience link — Create doesn't depend on beachparty ice specifically; no demand-gating; the fridge is a duplicate of other cold-block acquisition routes.

**Candidate 2 — cocktail buffs as diet/nutrition filler (M-26)**
The Pack uses Diet–AppleSeed Edition; its five groups include Sugars and Fruits. Cocktails made at the Palm Bar (honey, melon, cocoa, coconut) pull from Fruits/Sugars food groups, contributing to diet variety. The demand is real: players who lack tropical-biome access lack coconuts and thus one food-diversity vector. Red-team: this is thematically sound but the "weave" is purely ambient — diet demand already covers all food, and cocktails aren't different in kind from any other sweet/fruit food. The motif M-26 (consumption sink) applies because cocktails are consumed against survival pressure (diet buffs), but the demand-gating is the diet system already doing it universally, not a specific created hook. The action is "cocktails pull from scarce tropical ingredients → diet demand" which is already inherent to the mod being a food mod. This is the ambient endpoint, not a new weave.

- from: beachparty cocktails | via: beachparty:palm_bar_mixing | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: ambient loop endpoint — all foods already hit M-26 via diet system; no distinctive demand-gating action beyond beachparty simply being food. Not a new weave edge.

**Candidate 3 — coconut as a scarce tropical regional crop / seasonal reagent (M-16 / M-30)**
Coconuts grow only on palm trees in beach/tropical biomes. This makes them a regionally scarce crop: a player in a taiga or mountains never has access to coconuts unless they trade for them or travel. That scarcity-to-economy edge is real and thematic. The demand endpoint: cocktails require coconut, so coconut's tropical scarcity gates cocktail production and thus trade. Red-team: this is the loop's scarcity→economy arm, which is exactly M-30 (regional scarcity gate) — but M-30 requires the key input to be region-locked by ore-gen (GTMOGS regional ore-gen → recipe input). Coconut is biome-locked not ore-gen locked; a player can always travel or use bonemeal to grow palms elsewhere. The scarcity is soft. Still, biome-restricted crops are functionally identical to regional scarcity in game feel — a northern player must import or travel. The motif is M-30 stretched to biome-crop. Also M-16 is seasonal reagent; coconuts are not Serene Seasons seasonal (they're just biome-restricted). So M-16 doesn't apply cleanly.

- from: beachparty:coconut (tropical biome crop) | via: beachparty:palm_bar_mixing | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: A plains or taiga player who wants cocktail buffs must source coconuts from someone near a beach — beachparty's biome restriction naturally becomes a trade good with no extra recipe authoring, just a config acknowledgment. The scarcity is soft (biome, not ore-gen) but real enough to generate import demand from land-locked players.

**Candidate 4 — sprinkler / fertilizer in the beachparty ecosystem** — Not a beachparty item; those are sliceanddice. Skip.

**Candidate 5 — palm wood as a decoration-trade commodity (M-08 / economy sell)**
Palm planks/logs are a unique wood type only found in beach biomes. This is another scarcity point for non-coastal builds. Red-team: this is bare "it's sellable" M-09 territory (retired). The trade demand is ambient, not demand-gated. Reject.

- from: beachparty palm lumber | via: biome-locked worldgen | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: bare sellable link — M-09 retired; palm wood is a decorative sell-good with no demand-gating mechanic.

**Existing connections review:** Only 1 anchor (survival). The dossier's own candidate M-09 coin-sell was already retired. The one coherent new weave is the regional-scarcity read on coconuts (M-30 soft).

REWORK: The dossier's 2nd-anchor candidate lists M-09 (luxury→coin sell) — that motif is retired (#163/#240). The candidate should be redrafted as M-30 (regional scarcity gate via biome restriction) or the M-26 consumption angle. Neither is strong enough to author now but M-30 is the better framing.

## geckolib   [anchors: support/library (1)]

Zero blocks, zero items, no recipe types, no loot. Pure animation API. No content surface to route through any method. No motif applies.

- LEAVE — genuine zero-content animation/rendering library; 0 items, 0 loot, no methods. Nothing to weave.

## dynamic_fps   [anchors: support/performance (1)]

Client-only performance throttler. Zero blocks, zero items, no recipe types, no loot. No material, no method, no content.

- LEAVE — zero-content client performance utility; nothing to weave.

## jade   [anchors: support/client-UI (1)]

Client-only informational overlay. Zero items, zero blocks, no recipe types, no loot. Purely display-side; no material hooks.

- LEAVE — zero-content client UI overlay; nothing to weave.

## bettermineshafts   [anchors: survival (1)]

Structure overhaul only. Zero blocks, zero items, no recipe types. The dossier notes loot=no (uses vanilla mineshaft loot tables unchanged). No material of its own.

Power-read: It expands and enriches the mineshaft structure, making underground exploration more rewarding and more dangerous. It does not add new loot tables — it overrides the physical structure but keeps vanilla chests. The question is whether the expanded structure is a hook for loot-seeding.

**Candidate 1 — loot-seed weave-relevant drops into its expanded chests (loot-seed delivery)**
Since Better Mineshafts uses vanilla mineshaft loot (loot=no means no *new* tables, but the expanded chests still pull from `chests/abandoned_mineshaft`), a Phase 3 action could augment vanilla mineshaft loot tables with weave-relevant items (boss-key drops, magic reagents, Numismatics coin, regional scarcity clues). However: the loot=no tag means the mod doesn't register its own loot table path — any enrichment would target vanilla's `chests/abandoned_mineshaft`, which is shared with all mineshafts regardless of whether Better Mineshafts generated them. That's not specifically a bettermineshafts link; it's a vanilla loot-table edit. The structure mod's only distinct hook is its more elaborate architecture (more chests, side rooms), which increases the yield from vanilla loot but doesn't offer a targeted drop path. Red-team: loot-seeding vanilla's mineshaft table benefits all mineshafts, not specifically Better Mineshafts. The mod is a structure enhancer, not a structure that registers unique loot-table paths.

- from: bettermineshafts expanded mineshaft structure | via: loot-seed (vanilla `chests/abandoned_mineshaft`) | to: survival/economy | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: no unique loot table path — loot-seeding the vanilla mineshaft table is a vanilla edit, not bettermineshafts-specific; the mod offers no targetable loot hook.

The dossier's own read is correct: no items, no methods, nothing to weave beyond structure worldgen.

- LEAVE — structure overhaul with no new items/loot-table paths; loot enrichment would target vanilla tables not specific to this mod.

## azurelib   [anchors: support/library (1)]

GeckoLib 4.x fork — animation API. One utility block (`azurelib:lightblock`) that is an internal renderer helper with no player use. Zero items, no recipe types, no loot.

- LEAVE — genuine zero-content animation library (one internal render-helper block, no player items, no loot, no methods); nothing to weave.

## recipe_integration   [anchors: support/recipe-bridge (1)]

Load-conditioned cross-mod recipe datapack. Zero blocks, zero items, no loot. It authors recipes of other mods' types but registers none itself.

Power-read: This mod fires recipes conditionally when mods are present. Its `made-by` list includes `create:milling`, `create:mixing`, `create:pressing`, `createaddition:charging`, `createaddition:rolling`, `ars_nouveau:scry_ritual`, `occultism:crushing`, `farmersdelight:cutting` — all present in this pack. It may already be adding cross-mod bridges the pack needs. However: the dossier correctly identifies most of its 82 c:tags as dormant (Aether, Mekanism, MI, GT are not installed). It is itself a connective tool, not a mod to weave.

**Candidate 1 — audit which of its live recipes fire for this modlist, and flag conflicts with curated weave authoring**
This is not a weave candidate — it's a tool that may create bridges automatically. The risk is it authors bridges that contradict curated decisions (e.g. free ore-doubling that bypasses the designed scarcity model, or unifying items that should stay distinct). This is an ops concern, not a Phase 2 weave.

- from: recipe_integration auto-bridges | via: conditional recipe datapack | to: cross-system | motif: no-motif | verdict: REJECT | reason: not a content mod to weave — it is the bridge layer itself; the relevant action is an audit of which of its live recipes conflict with or duplicate curated weaves, not authoring a new weave against it.

- LEAVE — support/recipe-bridge layer; it is the connective tool, not a weave target. Recommend a modlist-active-recipes audit (outside Phase 2 scope).

## imfast   [anchors: support/QoL-compat (1)]

Server-side movement-validation patch. Zero blocks, zero items, no loot, no recipe types. Pure behavioral fix enabling fast vehicles to avoid anti-cheat kicks.

- LEAVE — zero-content behavioral patch; functionally enables the aeronautics pillar but registers nothing wireable.

## l2library   [anchors: support/library (1)]

LightLand shared code library. Zero blocks, zero items, no recipe types, no loot.

- LEAVE — genuine zero-content library/API; nothing to weave.

## kubejs   [anchors: support/modpack-tooling (1)]

The pack's scripting backbone. Zero blocks, one internal generated_bucket item, no recipe types of its own. It is the mechanism by which all weaving is authored, not a weave target.

- LEAVE — the weaving tool itself, not a content node; nothing to weave against it.

## just_blahaj   [anchors: decoration/flavor (1)]

31 plush shark variants in dye colors and pride flags. No recipe types, no loot of its own (loot=yes but it's the block-drop loot, not a structure loot source). Consumes vanilla wool/dye.

Power-read: Pure decorative placeable. Crafted from cheap vanilla wool + dye. No material to route. No method. The "loot=yes" is block-drop loot (you get the plush back), not a structure chest.

**Candidate 1 — Create dye processing → colored blahaj (M-04 / M-12)**
Create's `toolbox_dyeing` or generic crafting could dye blahaj variants. Red-team: the mod already has 31 variants craftable with vanilla dye — you just craft the color you want directly. Adding a Create dyeing recipe is pure redundancy with zero gameplay value. Reject.

- from: just_blahaj colored variants | via: create:toolbox_dyeing or create:mixing | to: Create | motif: M-04 | power: everyday | tone: clash (dye-mob-plushies via industrial mixer is absurd) | verdict: REJECT | reason: pure redundancy — 31 direct craft variants already exist; forced Create route adds no value and the tone is a clear clash.

**Candidate 2 — wool/dye scarcity → blahaj as a luxury decoration good (M-30)**
In a scarcity-driven pack, wool comes from sheep (farmable) and dye from crops/plants. Neither is regionally scarce in an interesting way for this mod specifically. The blahaj has no system role beyond decoration.

- LEAVE — pure decoration flavor mod; no content, method, or material to route into the loop. Forcing any edge here is the failure mode the briefing warns against.

## tipsmod   [anchors: support/QoL-client (1)]

Loading-screen tips display. Zero items, zero blocks, no recipe types, no loot. Client UI only.

- LEAVE — zero-content client UI utility; nothing to weave.

## modelfix   [anchors: support/bugfix (1)]

Client rendering/model fix. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content client rendering bugfix; nothing to weave.

## followersteleporttoo   [anchors: support/QoL (1)]

Pet-teleport convenience fix. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content behavioral QoL fix; nothing to weave.

## betterclouds   [anchors: support/visual (1)]

Client volumetric cloud renderer. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content client visual mod; nothing to weave.

## sliceanddice   [anchors: Create, survival (2)]

Already 2 anchors. The dossier correctly identifies it as a Create×survival M-12 processing-chain bridge by design. Items: slicer, sprinkler, fertilizer, wet_air. The sprinkler is the most interesting handle — it can pipe any fluid over crops.

Power-read: The Slicer is a kinetic automation block (mid-tier Create machine); the Sprinkler is also mid-tier. The fertilizer bucket is more everyday. These are all in the "production infrastructure" band — automation of food processing, not endgame.

**Candidate 1 — Sprinkler + magic fluid (Ars Nouveau source fluid or potion fluid) as crop accelerant / enchanted-harvest (M-10 / M-29)**
The Sprinkler pipes any fluid over a crop area. If the pack has liquid magic (Ars source fluid, Occultism spirit fire in fluid form, or potions as fluids via Create), the sprinkler is a cross-route dependency bridge: route magic fluid through the Sprinkler to get enchanted crop yield, requiring a Create machine (slicer) AND a magic production route (source generation). Red-team: Ars Nouveau source fluid is not a standard Minecraft fluid you can bucket; it's a source gem–based energy form, not a bucketable liquid. Occultism doesn't output pipeable fluids either. There's no obvious liquid magic in this pack that the sprinkler would accept. The method requires a pipeable Forge fluid. The concept is evocative but the material join doesn't exist cleanly. Could be done if a mod provides a pipeable magic fluid (e.g. Create Enchantment Industry enchant fluids or a potion fluid from Vinery/Extra Delight). Worth flagging as a concept but the specific material-join is uncertain.

- from: magic fluid (potion / enchant fluid via Create Enchantment Industry) | via: sliceanddice sprinkler | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create farmer who wants boosted crop yields must source enchanted fluid from a magic specialist and route it through the Sprinkler — a real cross-route dependency that makes the farm's output quality depend on the magic player's output. Delivery: recipe/config tie confirming the sprinkler accepts potion fluids from the pack's installed potion-fluid sources.

**Candidate 2 — Slicer + seasonal ingredient automation (M-16)**
The Slicer auto-runs all FD cutting recipes. Serene Seasons makes some crops seasonal. If a winter-only or summer-only crop has a cutting recipe, the Slicer becomes a bottleneck that concentrates seasonal processing — the farm runs hot in harvest season and the Slicer queue matters. This is not a new recipe weave but a framing note: the M-16 seasonal reagent motif gains teeth specifically because the Slicer can be the automation step, making seasonal processing lines a real build goal. Red-team: this is already implicit in M-16 + sliceanddice coexisting in the pack. No new weave is needed — it's ambient. But it is worth noting as a REWORK flag if sliceanddice's existing anchor doesn't capture this.

- from: seasonal crop (Serene Seasons–restricted) | via: sliceanddice:slicer (kinetic FD cutting) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a seasonal harvest line — the Slicer processes the limited-season crop at scale, making the Create food chain explicitly seasonal and tying the survival-pressure season driver into the Create production spine.

**Candidate 3 — Slicer automation → MineColonies cooking supply (M-28)**
The Slicer's output (sliced vegetables, meats) feeds cooking. MineColonies cooks/farmers request food; a Slicer-based line could pre-process ingredients for colony kitchens. Red-team: this is ambient loop (Create output → colony input) already covered by M-28 in general. Not a specifically sliceanddice weave.

- from: sliceanddice slicer output (sliced food) | via: create:mixing → minecolonies kitchen | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: ambient Create→colony edge; not specifically a sliceanddice weave; covered by M-28 at the pack level.

**Existing connections review:**
- OK — Create + survival anchors are well-grounded and the mod is the design's FD×Create bridge as intended.
- No REWORK on existing connections.

## mru   [anchors: support/library (1)]

Mineblock's Repeated Utilities — shared library. Zero blocks, zero items, no recipe types, no loot.

- LEAVE — genuine zero-content library; nothing to weave.

## notenoughcrashes   [anchors: support/stability (1)]

Crash-recovery utility. Zero blocks, zero items, no recipe types, no loot.

- LEAVE — zero-content stability/UX mod; nothing to weave.

## midnightthoughts   [anchors: survival (1)]

Sleep/rest overhaul granting well-rested buffs. Zero blocks, zero items, no recipe types, no loot. Purely event/effect driven.

Power-read: The well-rested mechanic confers status buffs from sleeping. No items to route. The question is whether the well-rested buff state creates any material demand (e.g. bedding materials, sleeping aids) or a cross-system join.

**Candidate 1 — well-rested buff → demand for bedding materials / sleep-aid consumables (M-26)**
If rest quality depends on bed quality or consumable sleep aids, that creates production demand. However: midnightthoughts is purely event-driven; it grants buffs based on sleep timing, no special bed block or consumable is required. There is no material hook.

- from: midnightthoughts well-rested buff | via: sleep event | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: no material hook — the mod is purely event-driven; well-rested requires no crafted item; no production demand is created.

**Candidate 2 — well-rested buff state × Cold Sweat temperature comfort (config tie / M-26)**
Cold Sweat penalizes players who are cold/hot. A well-rested player might resist temperature debuffs better — thematic but requires a config bridge between two mods that don't natively interact. This is a config-tie delivery (M-26 consumption side). Red-team: this would be a custom KubeJS event integration (if well-rested → apply a Cold Sweat resistance attribute). No existing method bridges this; it would be a new system effect. It fits no existing motif cleanly (no method in the palette handles it). Mark no-motif.

- from: midnightthoughts well-rested state | via: config/KubeJS event bridge | to: survival | motif: no-motif | verdict: REJECT | reason: no-motif; the cross-mod attribute bridge would need a Gate-0 motif before authoring; thematic but mechanically ungrounded in existing methods.

The dossier's LEAVE verdict is correct. No items, no loot, no method to route through.

- LEAVE — purely event/effect-driven rest mod; no items, no loot, no method handle; a second anchor would require inventing a new mechanic.

## alcohol_industry   [anchors: Create, survival (2)]

Already 2 anchors. Create-driven industrial distillery: Alcohol Base assembled via `create:filling` + `create:mixing`, then boiled in the Alcohol Boiler (`alcohol_industry:alcohol_boiling`) into beer/vodka/whiskey/tequila. Items: alcohol_boiler, alcohol_base (+ bucket), beer, vodka, whiskey, tequila, temperature_controller, glass_tube.

Power-read: The distillery chain is mid-tier Create (requires heated processing; temperature_controller is a non-trivial component). The finished spirits are everyday consumables once the distillery is running, but establishing it is mid-tier. The spirits grant status effects — short buffs (equivalent to the beachparty cocktails tier).

**Candidate 1 — spirits as a M-35 maturation / aging good (M-35)**
Whiskey and tequila are canonically aged spirits. The M-35 motif (maturation/aging) explicitly lists `alcohol_industry` in its seed list. The Alcohol Boiler produces the spirit but a maturing step would require the spirit to sit under the right conditions (temperature, container). The delivery method `create_cheese:maturing` is already in the pack's methods palette. An aging step on whiskey/tequila — sit the bottled spirit in a warm/cool environment for N days using `create_cheese:maturing` or a custom analog — would differentiate aged vs. unaged spirits with better buffs. Red-team: the two mods (`alcohol_industry` and `create_cheese`) are thematically compatible (industrial food/drink production); the aging motif fits whiskey/tequila exactly. The cost is proportional: beer stays fast; aged spirits take time (maturation depth). The maturing method is already in the pack. This is a strong M-35 candidate.

- from: alcohol_industry:whiskey / tequila (raw-distilled) | via: create_cheese:maturing | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Raw-distilled whiskey and tequila get a maturing step — a player who sits their spirits in the right conditions gets aged-spirits with better effects than fresh-distilled; aged spirits become a premium trade commodity (takes time you can't just buy) vs. the commodity-beer that anyone can mass-produce.

**Candidate 2 — alcohol byproduct (wash/mash) as Create feedstock / compost input (M-32)**
Distillation produces a "spent grain" or mash byproduct in real brewing. If the Alcohol Boiler output includes a waste fluid or item, it could be routed into composting (`minecolonies:composting`) or a Create-side process (e.g. crushing/milling into fertilizer). Red-team: the dossier lists no byproduct output — only the finished spirits and glass_tube/temperature_controller as items. The Alcohol Boiler outputs just the spirit. Without a registered byproduct, M-32 has no material to route. A KubeJS recipe could add a byproduct but that's authoring, not proposing — skip.

- from: alcohol distillation waste (hypothetical byproduct) | via: minecolonies:composting | to: economy | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: no registered byproduct output — the Alcohol Boiler produces only finished spirits; a byproduct would require authoring a new output, not routing an existing material.

**Candidate 3 — spirits as a colony consumption good / tavern supply (M-28)**
MineColonies colonists could have a demand for spirits (a tavern building). If spirits feed colonist happiness or a colony-building that the pack authors, that's M-28 (colony route). Red-team: MineColonies has a tavern building that feeds colonists; spirits could be a supplied good for colonist happiness/productivity. The delivery is a config tie or KubeJS colonist-needs override. This is a real economy anchor: the distillery feeds the colony, the colony route makes spirits a demand good not just an effect item. The hook is: "run a distillery to supply your colony's tavern — colonists who drink are happier workers."

- from: alcohol_industry spirits | via: minecolonies tavern / colonist supply (config tie or KubeJS) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies colony with a tavern needs a spirits supply — the distillery player becomes the colony's brewer, making spirits a demanded good rather than an optional buff item; supply disruption slows colony expansion.

**Candidate 4 — spirits as a regional-scarcity good (M-30)**
Different spirits require different flavoring inputs (grain for beer/vodka, agave-analog for tequila, oak-analog for whiskey). If flavor inputs are regionally scarce or biome-gated, spirits become regionally specialized. Red-team: the current dossier doesn't specify what flavor ingredients the mod uses beyond "Alcohol Base fluid." Without confirmed distinct regional inputs per spirit type, this is speculative. The base creation already pulls through Create mixing, but it's unclear whether specific spirits need distinct scarce ingredients.

- from: alcohol_industry spirits (per-type inputs) | via: alcohol_industry:alcohol_boiling | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: insufficient grounding — the dossier doesn't specify distinct regional/scarce inputs per spirit type; the base fluid is generic; authoring M-30 here requires confirming distinct flavoring inputs per spirit, which would need a jar-level recipe audit.

**Candidate 5 — dossier's own 3rd-anchor suggestion: M-09 (retired)**
The dossier suggests M-09 (luxury→coin economy sell) as a 3rd anchor. M-09 is retired. The economy anchor should be M-35 (aging adds premium value → trade commodity) or M-28 (colony supply creates demand), both of which are accepted above.

**Existing connections review:**
- Create anchor: SOUND — the chain runs through `create:filling` + `create:mixing` + the Boiler.
- Survival anchor: SOUND — spirits are consumables with status effects.
- REWORK needed on dossier's 3rd-anchor suggestion: M-09 (retired) should be replaced with M-35 (maturation) and/or M-28 (colony demand). Flag the dossier's economy candidate as using a retired motif.

REWORK: dossier lists M-09 (luxury→coin sell) as the economy candidate. M-09 is retired. Replace with M-35 maturation (aging premium) and M-28 colony supply (tavern demand) — both accepted above.

== CHUNK COMPLETE ==
