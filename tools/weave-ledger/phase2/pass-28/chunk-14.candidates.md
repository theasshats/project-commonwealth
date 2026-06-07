# Phase 2 candidates — chunk-14

---

## astikorcartsredux   [anchors: survival (1)]

power-read: everyday farm tool — low-tech wooden implements, early-to-mid game. No registered recipe-types; no loot table. Its only join key is the cart/implement items themselves (consumed wood + seeds, output harvested crops).

- from: plow/reaper/seed-drill (iron-fitted implements) | via: create:item_application or crafting (iron sheet applied to wooden frame) | to: Create | motif: M-20 (deploy-application upgrade — applying a Create-processed iron sheet onto the wooden base) | power: everyday | tone: ok (iron-shod farm implements are exactly what a blacksmith would upgrade) | verdict: ACCEPT | hook: A freshly-pressed iron sheet from the rolling mill gives the plow a steel edge — now it tills twice as fast.
- from: astikorcartsredux:oak_supply_cart (bulk haulage) | via: loot-seed / trade — frame cart as a goods-mover that competes with/precedes aeronautics logistics | to: aeronautics | motif: M-31 (logistics-required bulk good — the cart is the pre-aeronautics logistics tier; bulk harvest output needs a cart before a ship) | power: everyday | tone: ok | verdict: REJECT | reason: M-31 is about the *good* being so bulky it needs logistics; it isn't about the cart itself being a logistics tier. No method routes the cart into a logistics chain — it's a player-driven transport behavior, not a recipe edge. No-motif for the cart-as-logistics-tool framing; tone is fine but the connection is ambient, not a weave.
- from: reaper (bulk crop output) | via: create:milling → farmersdelight processing chain | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the reaper just harvests existing crops faster; it doesn't change what gets milled. This is not a cross-mod material join — the reaper's output is vanilla crops already covered by any Create milling recipe. Adding it here would be a phantom edge.

REWORK: dossier's M-05 candidate ("gate plow blade on Create-processed iron sheets") — the dossier cites M-05 (native-method gating) but the plow is an everyday tool; gating it hard behind a Create method violates the "never gate a basic behind a complex recipe" guardrail. Reframe as M-20 (light deploy-application upgrade of the iron-fitted tier), not M-05 deep gating. The ACCEPT above reflects that correction.

---

## curios   [anchors: support/library (1)]

Zero content surface — no items, no blocks, no loot, no recipe-types. Pure slot-framework API.

- LEAVE — genuine zero-surface library (provides slot types; no material to route, no loot to seed, no recipes to hook). Its weave value is enabling Ars Nouveau / Iron's Spellbooks accessories — those edges belong to those mods' dossiers, not here.

---

## ctov   [anchors: survival (1)]

`loot=yes`. Structures only — no registered items, no recipe-types. But the loot tables are a real hook.

- from: ctov village chest loot | via: loot-seed (Phase-3 datapack edit) | to: economy | motif: M-08 (player-minted currency — seed Numismatics coin finds into village chests so exploration yields the settlement medium, making villages the physical anchor for the trade economy) | power: everyday | tone: ok (finding coin in a chest is vanilla-adjacent; villages become natural trading hubs) | verdict: ACCEPT | hook: Looting a chest in the desert village turns up a handful of copper spurs — the first time a new player holds Numismatics currency.
- from: ctov village chest loot | via: loot-seed | to: magic | motif: M-02 (mob-drop/loot reagent sink — seed a low-tier magic reagent or Ars source gem into rare village chests, so magic has an exploration acquisition route early) | power: everyday | tone: ok | verdict: REJECT | reason: source gems are the M-01 arcane currency hub and are reagent-ownership reserved; seeding them as loot would devalue the minting route (M-08). A low-tier Ars or Iron's item *could* work, but the dossier gives no item specifics — REJECT pending a concrete item candidate from magic dossiers; flag for context-fed pass.
- from: ctov village structures (trade hub) | via: loot-seed (Numismatics trade stall loot / villager trade row) | to: economy | motif: M-33 (service-for-hire — village structures become physical trade nodes where players set up stalls; the seed is a Trading Floor item or stall-deed in chests) | power: mid | tone: ok | verdict: REJECT | reason: M-33 is about players performing labor; seeding a stall deed into a chest is closer to M-08 (currency gateway). The service angle isn't coherent here — the village is a location, not a service provider. Already covered by the M-08 ACCEPT above.

REWORK: dossier's "economy via villagers/Numismatics — M-09 luxury-good→coin" candidate — M-09 is RETIRED. The connection is real but the motif is wrong. Re-expressed correctly as M-08 (coin loot-seed, ACCEPT above).

---

## mowziesmobs   [anchors: survival (1)]

`loot=yes`. Boss drops: ice_crystal, sol_visage, earthrend_gauntlet, wrought helm, elokosa_paw, captured_grottol. No registered recipe-types.

- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-06 (sequenced-assembly keystone — ice_crystal is the cold-tier boss key gating a high-tier Create refrigeration or cryo-processing component) | power: endgame | tone: ok (ice magic artifact fuelling an industrial cryo system is thematically coherent in a Create context) | verdict: ACCEPT | hook: Automating the ice-press chamber requires a Frostmaw's crystal at the heart of the sequencing chain — only the cold survives it.
- from: mowziesmobs:sol_visage (Barako drop, sun-power mask) | via: occultism:spirit_fire | to: magic | motif: M-11 (ritual/transmutation sink — the sun-mask burns in spirit fire to yield a solar afrit essence or solar aspect reagent, linking Mowzie's tribal magic to Occultism) | power: endgame | tone: ok (spirit fire consuming a powerful artifact is exactly the Occultism idiom; the tribal sun-worship flavor maps well to elemental spirits) | verdict: ACCEPT | hook: Hold the Sol Visage over the spirit fire: it doesn't burn — it *transforms*, releasing the solar Afrit bound inside.
- from: mowziesmobs:earthrend_gauntlet (Wroughtnaut drop, earth-power artifact) | via: ars_nouveau:imbuement | to: magic | motif: M-10 (arcane infusion pull — imbuement channels the gauntlet's earth-rend force into an Ars Nouveau enchantment focus or armor augment, bridging its unique power into the Ars magic web) | power: endgame | tone: ok (imbuement consuming a powerful artifact to extract its essence is an established Ars idiom) | verdict: ACCEPT | hook: Placing the gauntlet in the Imbuement Chamber channels its earth-rending force into a knockback augment no enchantment table can replicate.
- from: mowziesmobs boss drops (any signature drop) | via: emergent trade (combat-route supply) | to: economy | motif: M-34 (combat-route supply — boss drops are farmed by combat specialists and traded to Create/magic players who need them as gate keys) | power: endgame | tone: ok | verdict: ACCEPT | hook: The Wroughtnaut only spawns deep underground once — fighters trade its axe head to smiths who need it for the high-tier forge.
- from: mowziesmobs:ice_crystal | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: duplicate of the sol_visage M-11 ACCEPT pattern applied to ice_crystal, but the Create M-06 ACCEPT already gives ice_crystal a home; two endgame sinks on the same item inflates its role. Keep M-06 (Create gating) for ice_crystal and M-11 (spirit_fire) for sol_visage so each drop has a distinct destination.
- from: mowziesmobs:elokosa_paw (moon-phase drop — Elokosa howls at different moon phases) | via: occultism:ritual / seasonal timing | to: magic | motif: M-22 (lunar/celestial reagent — the Elokosa paw is more powerful / only drops during specific moon phases per Enhanced Celestials) | power: mid | tone: ok | verdict: ACCEPT | hook: The Elokosa only hunts on the full moon — bring its paw to the pentacle while the moon is high.

REWORK: dossier's M-05/M-06 recommendation — both are cited together; M-05 is native-method gating (mod's own machine as gate) and M-06 is sequenced-assembly keystone (Create's method). Since Mowzie's has no machines of its own, M-05 is inapplicable; the correct motif is M-06 only. The dossier should drop the M-05 citation. ACCEPT above uses M-06 correctly.
REWORK: dossier's "economy via Numismatics bounty" is flagged [WEAK] and references M-08 — but a bounty paying coin is an NPC faucet pattern (M-14, CUT). Correctly expressed as M-34 (combat-route supply, ACCEPT above). The bare bounty link is REJECT.

---

## expandeddelight   [anchors: survival (1)]

`loot=yes`. 40 c:tags, salt_ore, cinnamon, new crops, cheese-aging casks, juicer.

- from: expandeddelight:salt_ore | via: create:crushing | to: Create | motif: M-03 (Create ore-doubling — salt_ore → salt dust + possible mineral byproduct; the vanilla smelt path stays) | power: everyday | tone: ok (salt is a staple; routing it through a crusher is exactly the Create ore-doubling idiom) | verdict: ACCEPT | hook: Running salt ore through the crusher yields two portions of salt dust — and a faint mineral residue the chemist finds interesting.
- from: expandeddelight:cinnamon (c:dusts/cinnamon, seasonal — cinnamon trees could be gated by Serene Seasons warm biome) | via: create:milling | to: Create | motif: M-16 (seasonal reagent — cinnamon from warm-climate trees is available only when the right season and biome align; milling it yields a concentrated spice powder that feeds cooking chains) | power: everyday | tone: ok | verdict: ACCEPT | hook: Cinnamon bark must be milled when the harvest season is right — the millstone turns fragrant bark into the spice that powers a dozen recipes.
- from: expandeddelight:cheese_wheel (time-gated via cheese cask aging) | via: farmersdelight:cooking / extradelight methods + trade | to: economy | motif: M-35 (maturation/aging — cheese ages in a cask over real time; value comes from the wait, creating an aging specialist who sells matured wheels) | power: mid | tone: ok (cheese-aging is already the mod's signature mechanic; mapping it to M-35 is natural) | verdict: ACCEPT | hook: A wheel of aged goat cheese takes days to mature — the dairy specialist sells them to players who can't wait.
- from: expandeddelight:chili_pepper (c:crops/chili_pepper, hot biome crop) | via: create:mixing → heat-tagged fluid (Cold Sweat interaction) | to: survival | motif: M-16 (seasonal/regional reagent — chili grows only in hot biomes; consumed or processed into a warming compound it feeds Cold Sweat's temperature system) | power: everyday | tone: ok | verdict: ACCEPT | hook: Chili paste from the mixing barrel adds a burn to any soup — and keeps you warm in the mountain cold.
- from: expandeddelight:asparagus / sweet_potato (new crops) | via: farmersdelight:cooking / extradelight:juicing → diet groups | to: survival | motif: M-26 (consumption sink — new food groups feed the diet-variety demand engine, ensuring ongoing pressure on farming production) | power: everyday | tone: ok | verdict: ACCEPT | hook: Asparagus frittata covers two diet groups at once — the nutrition bar visibly climbs.
- from: expandeddelight salt / cinnamon | via: minecolonies request / supply | to: economy | motif: M-28 (colony route — colony cooks request salt and spices as colony-exclusive seasoning inputs; a player farming these supplies the colony market) | power: everyday | tone: ok | verdict: ACCEPT | hook: The colony's tavern keeper puts in a standing order for salt and cinnamon — someone has to keep the mine-town fed.
- from: expandeddelight:cheese_wheel (luxury food) | via: bare sell / Numismatics coin | to: economy | motif: none (bare sell link — M-09 retired) | verdict: REJECT | reason: "aged cheese is sellable" is the ambient loop endpoint, not a weave. The M-35 maturation ACCEPT above correctly captures the aging-specialist value. A bare sell link adds nothing.

REWORK: dossier's "economy via numismatics — M-09 luxury-good→coin" — M-09 is RETIRED. Re-expressed as M-35 maturation (ACCEPT above) and M-28 colony route (ACCEPT above).

---

## mousetweaks   [anchors: support/QoL (1)]

Zero content — client input handling only.

- LEAVE — genuine zero-surface client QoL library. No items, no loot, no methods.

---

## detect-afk-1.2.2   [anchors: support/server-admin (1)]

Zero content — behavioral server utility.

- LEAVE — genuine zero-surface server utility. No items, no loot, no methods.

---

## spark   [anchors: support/performance (1)]

Zero content — performance profiler.

- LEAVE — genuine zero-surface diagnostics tool. No items, no loot, no methods.

---

## simplehats   [anchors: support/cosmetic (1)]

351 items (hats), `loot=no` per jar data. Recipe-types: simplehats:custom_hatscraps, simplehats:custom_hatvariants. Closed self-contained cosmetic economy (hats ↔ scraps ↔ bags). No loot table entry in jar, though hats drop via mob grab-bags at runtime.

- from: simplehats grab-bags (mob drops from hostile mobs) | via: loot-seed (add rare hat bags to boss loot tables — e.g. Mowzie's / Cataclysm boss chests) | to: survival | motif: M-34 (combat-route supply — rare hats in boss loot tables mean combat specialists farm collectibles that non-combat players want, creating a cosmetic trade lane) | power: mid | tone: ok (rare cosmetic drops in boss chests are industry-standard; a cosmetic economy side-channel alongside gear is coherent) | verdict: ACCEPT | hook: Defeating the Iron Golem boss has a small chance to yield an ornate helm-crest grab-bag — collectors will pay for it.
- from: simplehats:*_hat (cosmetic, high-rarity variants) | via: Numismatics trade / Trading Floor (player-to-player) | to: economy | motif: M-34 (combat-route supply — cosmetics become a player-run vanity market; combat players farm and trade them) | power: mid | tone: ok | verdict: REJECT | reason: pure "hats are tradeable" is the ambient endpoint. The M-34 ACCEPT above (loot-seed into boss tables) is the actual weave; a bare "sell hats for coin" is M-09 (RETIRED). The demand gate is the rarity + boss gate, not the coin transaction itself.
- from: simplehats hat scraps (custom_hatscraps recipe) | via: create:crushing or create:milling (scrap mats into fabric/dye byproduct) | to: Create | motif: M-04 (Create recycles deco — hat scraps crush back to cloth/dye dust, lossy) | power: everyday | tone: clash — hat scraps through an industrial crusher is tonally jarring (whimsical collectibles ≠ industrial feedstock) | verdict: REJECT | reason: tone clash; also the hatscraps mechanic is already a native recycling loop (scrap → better bag). Forcing Create milling onto it is contrived and the tone is wrong.

OK — existing support anchor is sound. The M-34 loot-seed ACCEPT adds a survival/danger tie via boss-drop tables, giving simplehats a second anchor.

---

## mcwroofs   [anchors: support/decoration (1)]

605 blocks, `loot=yes`. No recipe-types registered. Stone/brick/terracotta variants are the crushable surface.

- from: mcwroofs stone/brick/andesite roof blocks | via: create:crushing | to: Create | motif: M-04 (Create recycles deco — stone and brick roof blocks crush back to gravel/rubble + xp nugget, lossy; the 1:1 forward craft stays) | power: everyday | tone: ok (crushing excess building blocks back to raw is vanilla-adjacent and expected) | verdict: ACCEPT | hook: A leftover stack of andesite roof blocks runs back through the crusher — not as efficient as raw stone, but nothing goes to waste.
- from: mcwroofs:*_roof (all 600+ variants) | via: wholesale M-04 crush sweep | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600-block exhaustive crush pass is low Phase-3 value and the dossier flags this explicitly. ACCEPT above is scoped to the stone/brick/andesite sub-family (a manageable set); doing every plank variant adds nothing mechanically. Scope the Phase-3 action to the mineral-derivative variants only.

OK — decoration anchor stands. M-04 scoped to mineral variants is sufficient for a 2nd Create anchor.

---

## t_and_t   [anchors: survival (1)]

`loot=yes`. No items, no recipe-types. Structures only.

- from: t_and_t conquerable forts / village chest loot | via: loot-seed | to: economy | motif: M-08 (player-minted currency — seed Numismatics coin finds into fort/village chests, especially the harder-to-reach ocean ships and conquerable outposts, scaling coin reward to exploration difficulty) | power: mid | tone: ok (harder structure = better loot, including the pack's currency, is sound design) | verdict: ACCEPT | hook: The ocean sail-ship's captain's chest holds a Numismatics crown — the currency of whoever last called it home.
- from: t_and_t conquerable forts | via: loot-seed | to: survival | motif: M-34 (combat-route supply — forts are defended; clearing one yields loot that non-combat players want, making the combat specialist the expedition lead) | power: mid | tone: ok | verdict: ACCEPT | hook: The pillager fort's armory chest holds Create components stripped from defeated constructs — worth fighting for, worth trading afterward.
- from: t_and_t ocean sail-ship structure | via: loot-seed | to: aeronautics | motif: M-23 (structural alloy → airframe/hull — seed a blueprint/schematic or structural component recipe-key into the ship's loot, making it the discovery trigger for early aeronautics construction knowledge) | power: mid | tone: ok (a sail-ship is the predecessor of an airship; finding its logs teaching you to build a better vessel is thematically resonant) | verdict: ACCEPT | hook: The ship's log in the captain's chest contains a strange annotated diagram — the first clue toward building something that doesn't need water.
- from: t_and_t village chest loot | via: loot-seed (raw materials for Create/magic) | to: Create | motif: M-05 (native-method gating — seed a Create part or processed material into village chests as a head-start on the spine) | power: everyday | tone: ok | verdict: REJECT | reason: seeding Create parts into loot is not a gating/routing edge — it's just easier access to existing items. M-05 requires the item to be the gate in a recipe; it doesn't apply to loot-finding. Covered by the M-08 economy seed already.

REWORK: dossier's "economy via villagers/Numismatics — M-09" is RETIRED. Re-expressed as M-08 loot-seed (ACCEPT above) and M-34 combat-route (ACCEPT above). Both are cleaner framings than the bare sell link.

---

## createimmersivetacz   [anchors: Create (1)]

14 items, `loot=no`. Routes TACZ gun/ammo production through Create (cutting, filling, mechanical_crafting, mixing, sequenced_assembly). Join keys: brass plates, andesite alloy, gunpowder.

- from: createimmersivetacz:twelve_gauge_shell / ammo rounds (consumable, mass-produced) | via: create:sequenced_assembly (existing) → trade | to: economy | motif: M-26 (consumption sink — ammo is spent in combat and can never be stockpiled to zero demand; the arms dealer specialization sells rounds to combat players who don't run a brass factory) | power: mid | tone: ok (ammo as a recurring consumption good driving a trade lane is exactly the industrial-economy idiom) | verdict: ACCEPT | hook: Shells don't last — the gunner orders another crate from the brass-works every week.
- from: createimmersivetacz:gun_barrel / firing_mechanism (intermediate parts) | via: create:sequenced_assembly (existing) | to: economy | motif: M-29 (cross-route dependency — require an Occultism-side spirit-enchanted component or a magic-side material in the gun barrel, so arms production cross-depends on the magic pillar) | power: mid | tone: ok (a magically-treated firing pin that doesn't corrode is a coherent industrial-magic hybrid) | verdict: ACCEPT | hook: The precision barrel needs a spirit-treated bore — the gunsmith can't finish the rifle without a visit to the summoner's workshop.
- from: createimmersivetacz ammo (nitropowder fluid) | via: tfmg:distillation (existing TFMG pipeline) | to: Create | motif: M-32 (byproduct → input — distillation byproduct from TFMG coking/cracking feeds the nitropowder fluid synthesized in the Create mixing machine) | power: mid | tone: ok (industrial chemistry byproduct chain is coherent) | verdict: ACCEPT | hook: The coke-oven byproduct gases, captured by a condenser, feed straight into the nitropowder mixer — the ammo line runs on industrial waste.
- from: createimmersivetacz guns (mass-produced weapons) | via: emergent trade | to: economy | motif: M-34 (combat-route supply — the Create arms factory is the supplier side; combat players buy guns and ammo from the factory specialist) | power: mid | tone: ok | verdict: REJECT | reason: this is the same M-26 consumption ACCEPT re-stated from the demand side. M-26 already captures "ammo is consumed by combat players, creating ongoing demand." Listing M-34 separately for the same dynamic is redundant — REJECT duplicate.

REWORK: dossier's "economy via numismatics — M-09" is RETIRED. Re-expressed as M-26 consumption sink (ACCEPT above). The arms-dealer link is real but must be demand-gating not bare sell.

---

## startuptime   [anchors: support/diagnostic (1)]

Zero content.

- LEAVE — genuine zero-surface diagnostic utility (log line at boot; no items, no methods, no loot).

---

## rechiseledcreate   [anchors: Create + support/decoration (2)]

242 blocks/items, `loot=yes`. Bridges Rechiseled chiseling onto Create decorative blocks via the Mechanical Chisel. Already 2 anchors.

- from: rechiseledcreate chiseled Create-stone variants (andesite_cut_polished, asurine_cut_*) | via: create:crushing | to: Create | motif: M-04 (Create recycles deco — the chiseled variants crush back to raw andesite/asurine + xp nugget, lossy; rounds out the deco-recycle loop for the Create-palette variants specifically) | power: everyday | tone: ok | verdict: ACCEPT | hook: Over-chiseled andesite tiles that don't fit the build go back into the crusher — not as efficient as raw stone, but nothing wasted.
- from: rechiseledcreate window variants (oak_window_panes, etc.) | via: create:cutting | to: Create | motif: M-12 (processing-chain pull — patterned window glass cut from plain glass panes via the saw, then chiseled into rechiseled variants on the Mechanical Chisel, forming a two-step decorative processing chain) | power: everyday | tone: ok | verdict: REJECT | reason: this describes an internal cosmetic workflow, not a cross-system material join. M-12 is for routing foreign materials into useful intermediates that feed other processes; window variants are decoration endpoints, not intermediates. No material flows to another system. REJECT.

OK — connections sound. Already 2-pillar (Create + decoration). The M-04 ACCEPT deepens the Create recycle loop for its specific block set.

---

## create_better_villagers   [anchors: Create + economy (2)]

No items/blocks, `loot=no`. Villager professions buying/selling Create parts for emeralds.

- from: create_better_villagers trade economy (emerald→Create parts) | via: config/KubeJS recipe — re-denominate from emeralds to Numismatics coins | to: economy | motif: M-08 (player-minted currency — trades denominated in player-minted Numismatics coin rather than vanilla emeralds anchor the villager trade to the pack's settlement medium; the Brass Worker becomes a price anchor in the coin economy) | power: mid | tone: ok (replacing emerald denominations with Numismatics coins is exactly the M-08 framing — and the dossier flags this as its own "optional deepen") | verdict: ACCEPT | hook: The Brass Worker only accepts spurs now — and the exchange rate tells you something about how rare good gears are becoming.
- from: create_better_villagers Miner villager (requests raw materials) | via: MineColonies colony supply chain | to: economy | motif: M-28 (colony route — the Miner villager is a natural demand node for ore that colony miners produce; wire their request list to colony deliveries) | power: mid | tone: ok | verdict: REJECT | reason: MineColonies and the villager professions are different systems with no method-routing edge between them. Saying "colony mines ore that the Miner villager wants" is an ambient player-economy link, not a weave — it would happen naturally without any recipe. REJECT; no authoring target.

OK — existing 2-anchor (Create + economy) is sound. The M-08 re-denomination ACCEPT tightens the economy pillar connection from vanilla emeralds to the pack's actual currency.

---

## occultism   [anchors: magic (1)]

596 items, 164 blocks, 158 c:tags, `loot=yes`. Rich recipe surface: ritual, spirit_fire, crushing, crystallize, miner, spirit_trade. Primary magic pillar.

- from: occultism:silver_ingot (real silver, ores/silver) | via: create:crushing | to: Create | motif: M-03 (Create ore-doubling — silver_ore → crushed silver + byproduct; vanilla smelt stays; Occultism's silver is the pack's real silver) | power: everyday | tone: ok | verdict: ACCEPT | hook: Silver ore crushed in the fan yields a second ingot's worth of dust — and the Occultist is first in line for the overflow.
- from: occultism:iesnium_ingot (unique otherworld metal) | via: create:sequenced_assembly | to: Create | motif: M-06 (sequenced-assembly keystone — iesnium, obtainable only from dimensional mining, gates a high-tier Create machine component; forces the Create specialist to trade with the Occultism specialist or run a dimensional mineshaft themselves) | power: endgame | tone: ok (otherworld metal in an advanced machine is coherent; the dimensional mineshaft makes it a logistics challenge) | verdict: ACCEPT | hook: The dimensional forge-plate needs iesnium at its core — go to the summoner, or open your own void mine.
- from: foreign mob drops (via M-02 pattern) | via: occultism:spirit_fire | to: magic | motif: M-11 (ritual/transmutation sink — foreign drops transmuted into spirit essences through spirit fire; this is the canonical Occultism intake) | power: mid | tone: ok | verdict: ACCEPT | hook: The blaze rod doesn't burn here — it transforms, releasing the fire-spirit inside.
- from: occultism:datura (crop, c:crops/datura) | via: ars_nouveau:imbuement | to: magic | motif: M-10 (arcane infusion pull — datura, a ritual narcotic, is used as an imbuement catalyst in Ars Nouveau infusion, bridging the two magic systems through a shared botanical reagent) | power: mid | tone: ok (datura as a psychoactive ritual plant used by both summoners and arcane practitioners is thematically tight) | verdict: ACCEPT | hook: Datura blossoms soaked in source energy catalyze the deepest imbuement reactions — the summoner and the arcanist both want the harvest.
- from: occultism dimensional_mineshaft (passive ore logistics from void dimension) | via: occultism:miner / spirit binding | to: economy | motif: M-18 (summoned-spirit logistics — the dimensional mineshaft is Occultism's native logistics arm; a summoning specialist running a mineshaft is a supply-chain node for scarce ores, filling the same role aeronautics fills for matter movement but through magic) | power: mid | tone: ok (spirit-powered ore logistics competing with/complementing aeronautics cargo is strong economy flavor) | verdict: ACCEPT | hook: While the airship route to the northern iron seam takes a day, the Djinni's mineshaft opens the same vein from the base — at a cost in binding reagents.
- from: occultism:spirit_trade (summoned merchant) | via: occultism:spirit_trade method | to: economy | motif: M-33 (service-for-hire — the summoned spirit trader is a player-run service: the Occultism specialist binds a Marid or Djinni spirit-trader and offers its otherworld inventory to other players for a fee) | power: mid | tone: ok | verdict: ACCEPT | hook: The summoner's spirit-trader deals in goods that don't exist in this world — their shop is the only place to find certus quartz this side of the void.
- from: occultism crushing (parallel ore-doubling) | via: occultism:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 is already ACCEPTED for occultism silver ore + create:crushing above. occultism:crushing is a parallel method that duplicates the ore-doubling function; listing it separately as a distinct ACCEPT would create redundant edges on the same material. The Create-crush route is the canonical pack path (M-03 is explicitly a Create method motif); occultism:crushing is the magic-side parallel — not a new weave, just a competing method. Flag for config decision (which path is primary) rather than proposing it as a new weave.

REWORK: dossier's "economy via occultism:spirit_trade — M-09 / M-02" — M-09 is RETIRED. Re-expressed as M-33 (service-for-hire, ACCEPT above) and M-18 (summoned-spirit logistics, ACCEPT above). Both are cleaner demand-gating framings.
REWORK: dossier's "Create: occultism:crushing as parallel ore-doubling M-03/M-05" — M-05 does not apply here (M-05 is native-method gating of the mod's flagship item behind its own machine; ore-doubling is not the flagship gate). The M-03 ore-doubling is correct but should anchor to create:crushing, not occultism:crushing, as the canonical pack route. Flagged above.

---

## chat_heads   [anchors: support/QoL (1)]

Zero content — client UI overlay.

- LEAVE — genuine zero-surface client QoL mod. No items, no methods, no loot.

---

## kubejs_create   [anchors: support/tooling (1)]

Zero content — scripting bridge.

- LEAVE — genuine zero-surface modpack tooling. No items, no methods, no loot. Its value is enabling the other weaves in this chunk; the weave edges belong to the mods being wired, not here.

---

## immersivearmorhud   [anchors: support/client-UI (1)]

Zero content — HUD overlay.

- LEAVE — genuine zero-surface client UI mod. No items, no methods, no loot.

---

## fusion   [anchors: support/library (1)]

Zero content — rendering library.

- LEAVE — genuine zero-surface visual library. No items, no methods, no loot.

---

== CHUNK COMPLETE ==
