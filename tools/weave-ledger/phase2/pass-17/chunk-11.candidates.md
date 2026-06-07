# Phase 2 candidates — chunk-11

## foodeffecttooltips   [anchors: support/QoL (1)]
LEAVE — pure client tooltip renderer; zero items, blocks, or methods; no material surface to route; sanctioned support role.

## pantographsandwires   [anchors: Create, aeronautics (2)]
OK — connections sound. Already at 2 anchors (Create spine via 6 inbound recipe-types incl. sequenced_assembly; aeronautics pillar via rail/train logistics context). The coal_coke and graphite outputs are tagged (c:item/dusts/coal_coke, c:item/ingots/graphite) and could theoretically be pulled further, but the mod is already well integrated into the spine and any new link would be a modest incremental gain rather than a structural closure. Reviewed:

- from: pantographsandwires:coal_coke | via: tfmg:coking | to: Create (TFMG fuel chain) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is already tagged and available to TFMG's coking chain without a recipe addition — the tag connection is implicit; adding an explicit recipe edge would be redundant and arbitrary without a clear player-facing "of course" moment. The mod's purpose is overhead-line infrastructure, not fuel supply.
- from: pantographsandwires:graphite | via: create:milling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: graphite is already produced within the mod's own Create-routed recipes (it is an intermediate, not a standalone output orphaned from the spine). Adding another processing step for a material that already has a defined role in the mod's own recipes is overweaving with no loop advancement.
REWORK: none — existing 2-anchor connections are coherent and well-grounded in the mod's actual content.

## createfurnitureseats   [anchors: support/compat, aeronautics (2)]
LEAVE — zero items, zero blocks, zero recipe-types; pure behavior bridge making furniture blocks sittable on Create contraptions and Aeronautics sub-levels. Already touches the aeronautics pillar by definition (it makes ship interiors rideable). No material surface to route through any method. Forcing an economy or magic edge (e.g. "craft the compat") would be meaningless — the mod IS compat glue.

## sereneseasons   [anchors: survival (1)]
Power-read: sereneseasons is the pack's calendar engine — season_sensor emits redstone on season change; crop fertility is the ambient world rule; greenhouse_glass is the unlock. No registered recipe-types of its own. The "join key" is the sensor signal (machine-readable) and the fertility list (any crop can be slotted).

Candidates via method-pull:

- from: sereneseasons:season_sensor (redstone signal) | via: create:deploying / contraption logic | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: "wire the season sensor into a Create gearshift so the automated wheat farm switches to winter crops on the first frost — the machine knows what time of year it is."
  Red-team: is this a real weave or just "use redstone"? The Create belt/gearshift ecosystem legitimately reads redstone state to gate contraptions; the sensor is block-output, not just ambient data. M-16 explicitly calls for "season-gated input → Create/magic method." This is the input-gating side of M-16: the sensor gates which automated farm runs, not which ingredient enters a machine — one step upstream but fully within M-16's spirit. Tone: industrial-seasonal calendar feeding the machine spine — players would nod at this. ACCEPT.

- from: seasonal crops (any out-of-season crop flagged scarce by Serene Seasons fertility rules) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: "winter strawberries fetch coin at the trading floor — out-of-season produce is a luxury when half the crop patches are dormant."
  Red-team: the scarcity is real (the fertility penalty does make out-of-season crops genuinely harder to produce), but the "luxury good → coin" link doesn't depend on a specific Serene Seasons item — it's a config-level truth (seasonal scarcity → trade value). Still, M-09 rides on any high-effort consumable that's economically valuable, and seasonal scarcity is exactly that kind of enforced effort. The motif fits; the delivery is a Numismatics price entry, not a new recipe. Tone: survival-pressure feeding economy trade is core loop. ACCEPT.

- from: sereneseasons:season_sensor | via: ars_nouveau:scry_ritual or occultism:ritual gate | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: the sensor's redstone output is not a meaningful input to a ritual — a ritual consumes items, not redstone signals. The seasonal-reagent motif (M-16) fits better when a physical seasonal crop/material is required, not a sensor signal. Forcing a ritual gating on a redstone block is mechanically incoherent (rituals don't read redstone). No natural player "of course" moment here.

REWORK: existing connection is survival only (1 anchor). Both accepted links above advance the loop: survival pressure (seasons) → Create production (M-16 sensor automation) and survival pressure → economy (M-09 seasonal luxury). Together they bring sereneseasons to 3 system touches (survival + Create + economy) — strong structural closure for the pack's calendar engine.

## vinery   [anchors: survival (1)]
Power-read: vinery is the pack's winemaking tier — fermentation_barrel, apple_press, grape/cherry cultivation, dozens of named effect-bearing wines. Its outputs are high-value finished consumables (luxury trade goods). No Create inbound weave currently. loot=yes (chests).

Candidates via method-pull:

- from: vinery:wine (any bottled wine — apple_wine, cherry_wine, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "aged cherry wine sells for coin at the trading floor — the vineyard player exports what the combat crew can't grow themselves."
  Red-team: wines are exactly what M-09 names — a "high-effort consumable (wine, cheese, processed crop) is a sellable trade good." The motif was literally designed for this case. Effect-bearing wines are non-trivial to produce (cultivation → press → ferment → age) and create genuine specialization pressure. Tone: rustic agrarian food chain feeds the economy — natural loop closure. ACCEPT.

- from: vinery grapes / apple_mash | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "press a barrel of grapes in the mechanical press — bulk juice for the vineyard's fermentation barrels, no foot-stomping required at scale."
  Red-team: create:pressing is the natural Create analogue of the grapevine_pot foot-stomp. The dossier names this explicitly as a candidate. M-12 processing-chain pull: a raw crop run through a foreign processing method into a useful intermediate (grape juice → feeds fermentation_barrel). Depth: everyday tier (grapes are common farmland produce), so one light press step is appropriate. Tone: Create-scale food processing for a rustic crop — coherent (other Create packs do this). ACCEPT.

- from: vinery:apple_mash | via: extradelight:vat or create:mixing | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: apple_mash → vat fermentation is already covered by the pressing link above (same material, same destination). Doubling up with a second method for the same material at the same power tier is redundant; the pressing link is the cleaner single step.

- from: vinery wine bottles (aged) | via: loot-seed into trek or dungeon loot tables | to: survival (exploration reward) | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: while a rare aged wine as dungeon loot is thematically nice, it doesn't advance a *cross-system loop* — it stays within survival (exploration → food). M-09 requires selling for coin to reach the economy; this is just an exploration drop. Not a second anchor, just a loot flavor note.

REWORK: existing connection is survival only (1 anchor). Two accepted links bring vinery to: survival + Create + economy — 3 system touches. The Create pressing link advances the production chain; the Numismatics wine-trade link closes production → economy.

## letsdocompat   [anchors: survival (1)]
Power-read: letsdocompat is pure food-web connective tissue — it registers cross-mod tags and recipes so the Let's Do / Farm&Charm / Farmer's Delight cluster interoperates. Zero items, zero blocks, zero recipe-types of its own. Its existence is already a structural weave (M-12-style food chain unification), but entirely within the survival pillar.

Candidates via method-pull:

- from: letsdocompat food-web tags (items/foods/leafy_green, unified crop tags) | via: extradelight:juicing or farmersdelight:cooking | to: survival (internal cross-mod glue) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod's entire function IS M-12 food-chain unification — adding an explicit candidate here just redescribes what the mod already does. There is no second-pillar advancement; this stays within survival. The dossier correctly identifies it as support glue with no second-anchor candidate.

- from: letsdocompat unified food tags | via: numismatics sell/price (a tag-based trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the economy weave (M-09) properly attaches to specific high-value finished goods (wine, cheese, aged produce) rather than to the tag-unification shim. The sellable items are Vinery's wines, Expanded Delight's cheese, etc. — those mods carry the weave. Attaching M-09 to the compat bridge doubles up on already-accepted links in those mods and diffuses ownership. LEAVE this mod as support.

LEAVE — support glue; no items or methods of its own; the food-web unification it provides is already captured by weave candidates on the individual content mods (Vinery, Expanded Delight, etc.). Forcing a second anchor here would mean attaching the weave to infrastructure rather than to content.

## touhou_little_maid   [anchors: survival (1)]
Power-read: Touhou Little Maid has a custom recipe-type (altar_recipe_serializers) — a multiblock altar that consumes item inputs plus power-point bottles to summon maids and craft mod items. The altar is the mod's sole progression gate. Power-point bottles drop from fairy-type mobs and are tradeable. The altar is KubeJS-extensible (dep: kubejs), meaning its recipe list is pack-configurable. loot=yes (maids/items from fairy drops). Default maid recipe cost: lapis + diamond + gold + redstone + iron + coal — mid-tier materials, not trivial.

Candidates via method-pull:

- from: any magic reagent (e.g. ars_nouveau:source_gem, occultism:spirit_fire ingredient, irons_spellbooks:arcane_essence) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: "the maid altar demands a source gem and a spirit's ember alongside the traditional offerings — summoning a shrine maiden requires arcane favor, not just materials."
  Red-team: does forcing magic reagents into an anime-shrine altar feel coherent, or is it a theme clash? The altar's aesthetic IS ritual/shrine (Torii gate, offerings, power points as soul-bottle currency) — it reads as a non-Create arcane method even before any weave. Adding a magic-pillar ingredient gates the altar on the magic progression rather than just vanilla mats, which is exactly M-05's intent (flagship item built in its own machine, gated on Create/magic parts). Tone: shrine-maiden summoning requiring arcane essence — a player familiar with both Occultism's spirit trade and the altar's offering ritual would find this thematically plausible. The altar is not a tech machine, so it fits magic better than Create. ACCEPT.

- from: touhou_little_maid:power_point_bottle (fairy drop) | via: numismatics sell/price or bountiful board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are a mod-internal currency (feeding the altar), not a loose mob drop that naturally becomes a trade commodity. Inserting them into a Numismatics bounty loop would create two competing uses for the same currency item, diluting the altar's progression gate. M-14 (bounty → drop economy) works best on drops with no other pack use. Here the conflict is real: the bottle already has a reserved role (altar fuel). Reject on reagent-conflict grounds.

- from: touhou_little_maid:broom (rideable flight item) | via: aeronautics context (maid on broom as a ship sub-level rider) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the broom is a rideable mob, not a crafted structural/mechanical part. No existing motif covers "rideable entity as aeronautics component." This is a thematic adjacency with no actionable recipe or data link; fits no motif, reject per briefing rules (no-motif = reject-for-review).

REWORK: existing anchor is survival only (1). The accepted magic link (altar requiring magic reagent) brings touhou_little_maid to survival + magic (2 anchors). The altar's shrine-ritual aesthetic makes the magic connection the natural second anchor — it reads as the pack's "non-Create arcane summoning method," which is exactly what M-05 native-method gating is designed to recognize.

## expandeddelight   [anchors: survival (1)]
Power-read: Expanded Delight adds crops (asparagus, chili, peanut, sweet potato, cranberry), a Juicer (expandeddelight:juicing), cheese casks (time-gated milk→cheese), and — critically — salt_ore (a new ore, c:item/ores/salt) plus cinnamon (c:item/dusts/cinnamon). Already uses farmersdelight:cooking/cutting inbound. loot=yes. Salt and cinnamon are freely taggable reagents; cheese is time-gated. 40 c:tags — a well-tagged mod.

Candidates via method-pull:

- from: expandeddelight:salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: "crush salt rock in the millstone for doubled salt yield — the pack's ore-doubling rule applies to Expanded Delight's salt vein just as it does to zinc and copper."
  Red-team: salt_ore is tagged c:item/ores/salt; M-03 is the standard ore-doubling motif (ore → crushed + byproduct). This is a direct application of an established motif to a new ore. Depth is light (one crush step) — appropriate for an everyday seasoning ingredient. Tone: an ore being crushed is completely natural in a Create pack. ACCEPT.

- from: expandeddelight:cinnamon_dust | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "run dried cinnamon bark through the millstone to grind spice — the Create spine handles industrial-scale seasoning the same way it handles coal dust."
  Red-team: cinnamon is a bark/wood-derived spice; create:milling handles soft/organic materials → dusts (analogous to how Create mills wheat). The result feeds cooking recipes already in the mod. One light step, everyday power. M-12 processing-chain pull. The c:item/dusts/cinnamon tag already exists, so this is routing through Create to produce it rather than harvesting it directly — depth gain without arbitrariness. ACCEPT.

- from: expandeddelight:cheese_wheel (aged, time-gated output) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "a properly aged wheel of cheese fetches real coin — time-gated luxury goods are what the trading floor was built for."
  Red-team: M-09 literally names cheese as an example ("wine, cheese, processed crop"). The cask's time-gating makes cheese a genuine scarcity-driven trade good. Tone: rustic agrarian food → economy trade, core loop. ACCEPT.

- from: expandeddelight:salt (dust/item) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: salt as a magic reagent (purification/warding associations) is thematically plausible but no motif already anchors salt to a specific magic method. M-10 (arcane infusion pull) is for materials refined INTO a magic reagent — using salt as a magic input would require it to have a defined role in Ars Nouveau or Occultism's recipe graph, which doesn't exist. Adding an arbitrary "salt → source gem conversion" would be thin and disconnected from any lore or mechanic the magic mods provide. Reject: would need a new motif or a specific Occultism/Ars recipe that already calls for salt. No natural player "of course" here.

- from: expandeddelight:peanut / sweet_potato (crop outputs, seasonal context) | via: sereneseasons fertility gate | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is a config-level connection (slotting the crops into Serene Seasons' fertility list), not a recipe weave. M-16 calls for a seasonal reagent feeding a machine/ritual — the motif is about the output of a seasonal crop flowing INTO a Create/magic method, not about the crop being seasonal itself. The correct formulation would be "chili pepper only available in summer → feeds a hot-sauce recipe as a seasonal input," but that's a Serene Seasons config edit, not a Phase-2 recipe candidate. Tag as config-layer, not a weave edge; reject here.

REWORK: existing anchor survival only (1). Three accepted links: salt ore → Create (M-03), cinnamon milling → Create (M-12), cheese wheel → economy (M-09). Together: survival + Create + economy — strong 3-system closure. The salt and cinnamon Create links are light single-step, appropriate for everyday ingredients; the cheese economy link is mid-tier (time-gated).

## detect-afk-1.2.2   [anchors: support/QoL (1)]
LEAVE — pure server-side behavioral mod; zero items, zero blocks, zero methods; AFK detection has no material surface to route through any system. No content weave is coherent.

## inventoryprofilesnext   [anchors: client QoL/support (1)]
LEAVE — client-only UI mod; zero items, zero blocks, zero recipe-types; inventory sorting/slot management has no game-content surface to weave. Sanctioned support role (CLAUDE.md notes the overlay_new.png fix — it's a known, deliberate client-side integration point, not a content mod).

## polymorph   [anchors: support/compat (1)]
LEAVE — zero items, blocks, or methods; resolves recipe conflicts silently; no material surface to route. Sanctioned support role.

## create   [anchors: Create (1)]
Power-read: Create is the pack's tech spine and universal method library — 17 registered recipe-types, 643 blocks, 775 items, the hub every other pillar weaves INTO. The dossier explicitly flags it as N/A as a recipient: "Create is the hub other mods weave INTO, not a mod that needs a 2nd pillar."

- from: (all candidates) | verdict: REJECT | reason: per dossier guidance, Create is the method library — authoring edges that "consume Create itself" is not the weave direction. Every other mod's weave USES Create methods; Create has no second pillar to acquire. This is correct and deliberate.

OK — connections sound. Create sits at the center of the loop by design; it is the production pillar and the universal method provider. Reviewing it as a recipient would produce only forced edges. The pack's recipe graph is designed to flow through Create, not to weave Create into other systems.
REWORK: none.

## trashslot   [anchors: support/QoL (1)]
LEAVE — client-side UI-only mod; zero items, blocks, or recipe-types; deletes items, does not produce anything routeable. Sanctioned support role.

## moonlight   [anchors: support/library (1)]
LEAVE — shared library/API for MehVahdJukaar mods; zero gameplay content; its data-driven-trade and virtual-fluid APIs are exercised entirely by the mods that depend on it (Supplementaries, etc.). No material surface to weave.

## entity_model_features   [anchors: support/client (1)]
LEAVE — client rendering mod (OptiFine CEM replacement); zero items, blocks, methods; pure model-replacement engine. No content weave possible.

## configuration   [anchors: support/library (1)]
LEAVE — config-screen library; zero items, blocks, or methods; provides in-game settings GUI to other mods. No content surface.

## sable   [anchors: support/physics-library (1)]
LEAVE — physics engine library; provides the sub-level backend for Create Aeronautics but adds zero survival content. The weaving happens in the mods that build on it (Aeronautics, createfurnitureseats). No material surface.

## cloth_config   [anchors: support/library (1)]
LEAVE — config-screen API library; zero items, blocks, methods. Pulled as a dependency, never wired directly.

## cmparallelpipes   [anchors: Create (1)]
Power-read: cmparallelpipes adds a Pipe Wrench (2 items: pipe_wrench + pipe_wrench_gear) that locks fluid-pipe connections for dense parallel runs. Pure Create fluid-logistics QoL. No loot, no recipe-types registered.

Candidates via method-pull:

- from: cmparallelpipes:pipe_wrench_gear | via: create:mechanical_crafting | to: Create (depth) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the pipe_wrench_gear is a crafting intermediate — making it require a Mechanical Crafter step would add depth, but the wrench is a QoL utility tool (not a flagship item), and M-05 is for flagship items gated in their own machine. Gating a simple wrench behind a mechanical crafter is over-engineering for a convenience tool. Depth should scale with power; a QoL wrench doesn't warrant endgame-tier crafting.

- from: cmparallelpipes:pipe_wrench | via: economy (trading-floor sale as a specialist tool) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: a specialist Create utility tool as a trade good is implausible — players make them; they don't buy them. M-21 (provisional villager trade) is flagged as "lean no" and doesn't fit a tool with no luxury character. No player "of course" moment.

LEAVE — single-purpose Create utility tool with no explorable second anchor; the dossier's conclusion is correct. Supports the Create spine cleanly.

## trek-b0.6.1.1   [anchors: survival (1)]
Power-read: Trek is a structure-only worldgen mod (150+ vanilla-block structures) with loot=yes. No items, no blocks of its own, no recipe-types. The only entry point for weaving is the loot tables in its structures.

Candidates via method-pull (loot-seed):

- from: trek structure loot tables | via: loot-seed — seed magic reagents (ars_nouveau:source_gem, occultism:silver_coin, boss-key fragments) into rare trek chests | to: magic / economy | motif: M-02 / M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "the forgotten fortress hides a cache of source gems and silver coin — exploration pressure drives players to brave Trek's rarer structures for magic and economic seed capital."
  Red-team: trek structures are vanilla-block ruins spread across biomes; seeding a magic gem or coin cache into rare chest loot is a standard loot-seed move — players exploring for structures find rewards that feed the magic and economy pillars. M-02 names "mob/boss drop given a use as a magic/economy input" — a structure find seeding a magic reagent into the exploration tier is exactly the spirit of M-02/M-14 (exploration output → magic/economy input). The loot-seed delivery (Phase-3 datapack edit to trek's loot tables) is the correct mechanism. ACCEPT.

- from: trek structure loot tables | via: loot-seed — seed numismatics coin (coin types, not just generic gold) into captain's chests in trek's ship/fortress structures | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "the sunken galleon's strongbox holds coin rather than vanilla gold — buried treasure feeds the Numismatics economy rather than going straight to the furnace."
  Red-team: this is a tighter, more specific variant of the above; the distinction is ship/fortress loot → coin specifically, which is the M-08 motif (processed scarcity → coin). But M-08 is "scarce metal → Create-processed → minted into coin." A direct loot-seed of coin is closer to M-14 (bounty payout in coin) or simply M-09 flavor. The correct motif is arguably M-14 (combat/exploration → economy coin payout) since the player earns coin through exploration risk, not through a Create machine. However M-14's formal definition is "bounty board consumes mob drops and pays coin" — this is loot-seed, not a bounty board. Still, the WEAVE-LEDGER notes that loot-seed of coin (M-08/M-14) into structure loot is a "REAL candidate." Accept under M-14 / loot-seed; flag as borderline M-08 vs M-14 for Gate 2 review.
  Revised verdict: ACCEPT (motif: M-14, via: loot-seed; note M-08 borderline — Gate 2 to confirm motif assignment).

- from: trek structure variety (exploration pull) | via: Create logistics (train/ship routes planned around trek structure locations) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: "players will route trains to structures" is an emergent play behavior, not a weave (no recipe, no loot-seed, no data edit). Fits no existing motif; no-motif → reject.

REWORK: existing connection is survival only (1). Two accepted loot-seed links bring trek-b0.6.1.1 to: survival + magic/economy (2–3 touches). This is appropriate: the briefing explicitly names loot-seed as a valid delivery for structure mods with no items of their own, and cautions against LEAVE when loot=yes.

== CHUNK COMPLETE ==

