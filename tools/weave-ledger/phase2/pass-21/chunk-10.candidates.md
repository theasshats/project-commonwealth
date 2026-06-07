# Phase 2 candidates — chunk-10

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config-API library; zero items, zero recipe types, no gameplay surface to weave.

## resourcefullib   [anchors: support (1)]
- LEAVE — pure utility/API library; zero items, zero recipe types, no gameplay surface to weave.

## create_cheese   [anchors: Create, survival (2)]
- from: aged cheese (brie/gouda/cheddar/etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who ran the Cheese Cellar for a week of maturing time has a luxury good nobody else can rush — of course it sells
- from: create_cheese:cheese_curds | via: ars_nouveau:imbuement (cheese as a catalyst curiosity) | to: magic | motif: no-motif | verdict: REJECT | reason: no thematic link between dairy curds and arcane infusion; tone clash, no motif fits
- REWORK: existing connections sound. Create (compacting/mixing inbound) + survival (food chain) are both coherent and correctly sized. The M-09 economy edge is the one gap — add it.

## jei   [anchors: client-only UI (support — 1)]
- LEAVE — recipe-viewer UI; zero items, no gameplay surface. Load-bearing for the pack (Create recipe rendering), but unweaveable by definition.

## entity_texture_features   [anchors: support (client rendering — 1)]
- LEAVE — client texture-engine library; no items, no gameplay surface to weave.

## detect-afk-1.2.2   [anchors: support (QoL/server-admin — 1)]
- LEAVE — behavioral server-admin utility; no items, no methods, nothing to weave.

## railways   [anchors: Create, aeronautics (2)]
- from: railways:conductor_cap (incomplete variant → finished cap) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: a conductor's cap assembled step-by-step on the line — of course the train mod uses Create's own assembly stage
- from: railways:locometal blocks (brass/copper/iron wrapped) | via: create:crushing → recycle | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: scrap your surplus locometal boiler plates back into material — a Create pack player expects this from any metal-deco block
- from: railways locometal/boiler blocks | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a specialized train-builder produces locometal decorative stock in bulk and sells it to other players who want train aesthetics without running the full assembly line
- from: railways:big_buffer / semaphore | via: ars_nouveau:imbuement | to: magic | motif: no-motif | verdict: REJECT | reason: no thematic link between train signaling hardware and arcane infusion; tone clash, no motif fits
- OK — existing Create + aeronautics anchors are coherent. Three additional candidates above (M-06 sequenced-assembly for conductor cap, M-04 locometal recycle, M-09 trade good) would push it to three anchors; all are optional enrichments, not corrections.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create Millstone grinding farmhouse grain into flour — exactly what the Millstone is for
- from: farm_and_charm:butter / eggs / surplus meat | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the husbandry loop (feed animals → more drops) naturally produces a surplus that other players buy — the animal farmer is the food specialist
- from: farm_and_charm:barley | via: vinery:wine_fermentation (barley→ale, analogous to grape) | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley is the brewing grain; routing it into the fermentation barrel for a grain-based drink extends the brewing web and connects the two Let's Do mods
- from: farm_and_charm cooked dishes | via: appleseed diet demand | to: survival (diet loop) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farm & Charm's diverse grain+meat+veg dishes each fill a different nutrient group — the diet system pulls on this production naturally (delivery: config tuning, not a recipe)
- from: farm_and_charm:mincer / roaster recipes | via: farmersdelight:cutting (cross-tag) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mincer and FD's cutting board share crop tags (cabbage/onion/tomato) — confirming recipes work cross-mod is the weave; no new recipe needed, just tag alignment
- from: farm_and_charm grain/produce | via: minecolonies colony provisioning | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies citizens need food provisioned; a Farm & Charm animal-husbandry specialist supplying the colony is the emergent economy node (delivery: config/loot-seed)
- from: farm_and_charm:fertilized_farmland | via: create:deploying (apply fertilizer to farmland via deployer arm) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create deployer arm applying fertilized farmland in an automated crop plot — a natural farm-automation loop, one light step
- REWORK: currently survival-only (1 anchor). The M-12 milling candidate (barley/oat into flour via Millstone) is the clearest first weave; it ties directly into the Create spine with one light step. Recommend prioritising that over the economy edges.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window / brass_train_step | via: create:pressing (brass sheet → window frame) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: applying a pressed brass sheet to a glass pane to make a sliding train window — one light deploy-application step that ties train fittings to the Create materials ladder
- from: create_train_parts blocks | via: create:crushing (recycle back to materials) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the blocks are pure deco fittings with no lore weight; a recycle step would be noise, not value — there is no surplus-production loop driving scrap here
- OK — existing aeronautics anchor is coherent (contraption fittings for the transport pillar). The M-20 pressing candidate is a light step worth adding to give it a Create anchor too.

## biolith   [anchors: support (worldgen API — 1)]
- LEAVE — worldgen-library/API; no items, no biome-modifiers, no gameplay surface to weave.

## vinery   [anchors: survival (1)]
- from: vinery wines/ciders (apple_wine, cherry_wine, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged, effect-bearing wine is the textbook luxury trade good — a vineyard specialist sells to players who want the effects without the fermentation wait
- from: vinery:apple_mash / grape_juice | via: create:milling or create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pressing apples/grapes through a Create mechanical press instead of stomping them by hand — an automation path for the juice step
- from: vinery wines | via: ars_nouveau:imbuement (wine as potion-basis catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a complex aged wine, rich with reaction products, drawn into an arcane infusion as a fluid catalyst for a potion-like enchantment effect — alchemical fermentation is a classic magic-adjacent trope
- from: vinery:fermentation_barrel (grain slot) | via: farm_and_charm:barley → vinery fermentation | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley in the fermentation barrel's ingredient slots for a grain ale — connects the two Let's Do mods and extends diet variety
- from: vinery chorus_wine | via: occultism:spirit_fire (transmute void-adjacent liquid) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Chorus Wine (made from Chorus Fruit — an End/void material) is exactly the kind of liminal consumable an occultist transmutes into spirit essence — End material feeds the occult route naturally
- from: vinery apple_cider | via: create_cheese:maturing (aged cider as a companion cellar product) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the Cheese Cellar's maturing method is tag-driven and could accept bottles, but seating cider alongside cheese in the same station is thematically muddled (dairy vs. beverage) — better to keep the pressing/Create route
- REWORK: currently survival-only (1 anchor). The M-09 economy edge (wines as luxury goods) is the clearest and most necessary weave. M-12 pressing route to Create is a strong second. Recommend both as priority candidates.

## chat_heads   [anchors: support (QoL/client — 1)]
- LEAVE — client-UI cosmetic only; no items, no gameplay surface to weave.

## underground_village   [anchors: survival (1)]
- from: Stoneholm villager trades | via: numismatics economy seating | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: underground settlement villagers priced in Numismatics coin — a buried trading post becomes an economy node players navigate to (delivery: loot-seed / datapack trade-price edit)
- from: Stoneholm chest loot | via: loot-seed (coin drops / magic reagent drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: exploring to the underground village rewards coin — scarcity-driven travel to an economy node, advancing the loop (delivery: loot-seed)
- from: Stoneholm structures | via: bountiful bounty board (bounty seeded for "find Stoneholm") | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty posted for underground exploration — exploration pressure → economy payout (provisional motif)
- from: Stoneholm village | via: knightlib/kobolds thematic adjacency (underground civilization) | to: survival | motif: no-motif | verdict: REJECT | reason: placing knightlib items in Stoneholm loot is thematic flavor, not a system weave — no motif applies
- REWORK: currently survival-only (1 anchor). The M-09 trade-seating and M-08 coin loot-seed candidates are both strong and standard for structure mods; recommend both.

## knightlib   [anchors: support (library — 1)]
- LEAVE — library/API whose content (chalice, grail, essence, homunculus) is inert without Knight Quest, which is not in this pack. Weaving dead items is explicitly prohibited by the briefing guardrails.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an occultist transmuting the skull of a subterranean lizard-folk into spirit essence — underground creature's death feeds the ritual, a coherent dark-fantasy bridge
- from: kobolds Prospector enchantment (via Enchanter kobold trade) | via: economy node — acquiring a rare mining enchantment from kobold civilization ties the underground dungeon to the scarcity → production loop | to: Create/economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the Prospector enchant (ore-finding bonus) is exactly what a Create-focused miner pays kobold coin for — bounty/trade node that feeds the scarcity spine (provisional motif; delivery: loot-seed / trade-price)
- from: kobolds:kobold_iron_* tools | via: create:crushing (scrap kobold iron drops) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: kobold iron tools are mob-drop items of equal tier to vanilla iron — recycling them is practical noise, not a system weave; no surplus-production loop
- OK — existing economy + survival anchors are sound. M-11 skull transmutation is the cleanest 3rd anchor (magic). M-14 Prospector trade-bounty is the subtler economy-depth add.

## dummmmmmy   [anchors: support (QoL/combat-testing — 1)]
- LEAVE — damage-test prop; single item, no processing, no material surface. A forced Create or magic edge (e.g. "craft dummy from golem parts") would be contrived and add nothing to the loop.

## fxntstorage   [anchors: Create, survival (2)]
- from: fxntstorage:backpack_flight_upgrade | via: aeronautics structural input (flight upgrade requires an Aeronautics propulsion part) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: a personal flight backpack upgrade that needs a real Aeronautics drive component — the drivetrain side of the airship supply line also powers the personal flyer
- from: fxntstorage:hardened_backpack | via: create:sequenced_assembly (multi-stage hardened assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier hardened backpack assembled step-by-step through the sequencer — depth scales with tier, the briefing's explicit rule
- from: fxntstorage:storage_controller | via: aeronautics logistics arm (storage controller powers an on-ship inventory network) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the storage_controller is a passive item-routing block; connecting it to aeronautics drivetrain (M-24) is a category error — M-24 is mechanical components, not logistics blocks. No matching motif for a "ship inventory network" weave.
- OK — existing Create + survival anchors are correct. M-24 flight-upgrade + M-06 hardened-backpack sequenced assembly are the two recommended additions (aeronautics + Create depth).

## valarian_conquest   [anchors: survival (1)]
- from: faction quartermaster / mercenary-hire trades | via: numismatics coin pricing | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary swordsman or pledging faction allegiance costs coin — combat specialization feeds the coin economy (delivery: datapack trade-price / loot-seed)
- from: valarian_conquest faction loot (shields, banners, faction armor) | via: loot-seed (coin + scarcity drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding an enemy faction Outpost rewards coin — combat feeds the economy, advancing the loop (delivery: loot-seed)
- from: valarian_conquest:*_citizenship items | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a faction-allegiance bounty ("earn Barathian citizenship") converts combat achievement into coin payout (provisional motif; delivery: bounty config)
- from: valarian_conquest:armorsmith station | via: create:mechanical_crafting (gate faction plate on Create parts) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: faction gear is already mid-tier survival content; gating a medieval armorsmith's output on Create industrial parts is a tone clash (steam-punk vs. medieval-martial). M-05 is for a mod's flagship machine gated on Create — the armorsmith is not a Create-native machine, so forcing Create inputs reads as arbitrary.
- REWORK: currently survival-only (1 anchor). The M-09 coin-pricing and M-08 loot-seed candidates are the primary economy edges. M-14 bounty is a strong third. The M-05 Create gate is rejected on tone grounds.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* | via: numismatics sell (adventuring kit resale) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: sleeping bags are vanilla-recipe trivial items (wool + string) with negligible production depth; pricing a trivial item inflates the economy signal without adding loop value. Red-team: a stranger would find "buy a sleeping bag at the coin shop" weird in a Create pack. Leave.
- from: comforts:hammock_* | via: create:deploying (deploy hammock between posts) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: a deployer hanging a hammock is a whimsical flavor idea but not a system weave — the hammock's only function is day→night skip; routing it through a deployer adds nothing to the loop.
- LEAVE — sleeping bags / hammocks are vanilla-recipe QoL/deco; every candidate fails the red-team. The mod earns its place on survival QoL (travel sleep) without a forced second anchor.

## appleseed   [anchors: survival (1)]
- from: diet-variety demand | via: config tuning (production-by-demand signal) | to: Create/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the diet system creates standing demand for diverse foods — cooking specialists (FD / Farm & Charm / Vinery) supply the diet loop and sell surplus, so appleseed is the pressure node that drives the entire food production → economy chain (delivery: config tuning, not a recipe)
- from: appleseed balanced-diet buffs | via: numismatics sell (priced cooked meals as diet-complete trade goods) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player who ate a balanced diet from a cooking specialist bought it because the diet buff is worth coin — the diet mechanic makes food economically valuable
- from: appleseed | via: ars_nouveau or magic infusion | to: magic | motif: no-motif | verdict: REJECT | reason: there is no item surface (0 items registered); nutrition is a HUD mechanic, not a material — nothing to route through a magic method.
- REWORK: currently survival-only (1 anchor). Both accepted candidates are delivery-level (config/trade-price, no new recipe) but genuine: appleseed is the pressure driver that makes the food → economy sub-loop function. Anchors would extend to survival + economy.

== CHUNK COMPLETE ==
