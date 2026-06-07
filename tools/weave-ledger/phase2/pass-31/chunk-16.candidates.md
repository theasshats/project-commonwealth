# Phase 2 candidates — chunk-16

## puzzleslib   [anchors: support/library (1)]
- LEAVE — pure code library (0 items, 0 blocks, no recipe-types, no gameplay surface); nothing to weave.

## bookshelf   [anchors: support/library (1)]
- LEAVE — pure code library (0 items, 0 blocks, no recipe-types); the datapack hook for durability-damaging recipes is a dev feature, not a weave surface for this pack.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — this mod IS already a weave (magic-internal bridge between Ars Nouveau and Iron's Spellbooks); its 0 items and no external material surface mean there is no foreign pillar to route it through without forcing an artificial edge. It satisfies the two-system goal by being a magic↔magic connector but has no handle for a third pillar.

## jeed   [anchors: client UI/support (1)]
- LEAVE — pure JEI display provider (0 items, 0 blocks); its two registered "recipe-types" are viewer categories, not processing methods; nothing to weave.

## valarian_conquest   [anchors: survival (1)]
- from: faction loot (shields, armor, knight items, banners) | via: loot-seed (add boss-key items / magic reagents to structure/captain loot tables) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a captured faction captain's kit yields a rare alchemical component — you need the combat specialist to fund the magic specialist.
- from: faction loot | via: loot-seed (seed coin-minting metal into Outpost/Keep chests) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: faction strongholds in distant regions guard the regional metal a coin-minter needs — exploration pressure drives the economy's settlement medium.
- from: mercenary hire / citizen recruitment | via: emergent trade (combat specialist trades protection services for goods) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat-focused player sells mercenary escort or faction-clearing services to colony builders who can't fight.
- from: faction gear (armorsmith station output) | via: Create gate — add Create-processed metal parts as inputs to armorsmith station recipes | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: dossier itself flags this WEAK; the faction armorsmith is thematically a blacksmith, not a factory worker — gating medieval knight armor on precision-machined Create parts is a tone clash; the other three accepted links are richer and less forced.
- from: faction economy / coin trades | via: bare sell | to: economy | motif: none | verdict: REJECT | reason: the dossier's M-09 coin candidate is a bare sell link (retired M-09); player-run economy rule: "sellable" is ambient, not a weave.
- OK — survival anchor is sound (combat/exploration content).
- REWORK: dossier's 2nd-anchor candidate references M-09 (retired); replace with M-02 + M-30 + M-33 as above.

## trailandtales_delight   [anchors: survival (1)]
- from: Lantern Fruit / cherry blossom / pitcher pod | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create mill pulps Lantern Fruit into a floral extract — the miller feeds the cook.
- from: cheese wheel / curd block | via: create_cheese:maturing (or create:mixing milk + rennin) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the cheese-making chain slots cleanly into the Create food-processing web; a mixing step for curd and a maturing stage for aged cheese feel natural.
- from: ancient coffee / cherry petal tea | via: colony demand — MineColonies tavern/inn building requests exotic drinks as upkeep goods | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony innkeeper needs ancient coffee to keep settlers happy — the food specialist supplies the colony that supplies the buildings.
- from: cherry cheese pie / stuffed sniffer egg | via: consumable upkeep (high-saturation prestige foods consumed in bulk at MineColonies feasts or player runs) | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: prestige dishes are consumed, never stockpiled — the cook always has a market.
- from: Lantern Fruit (golden variant) | via: ars_nouveau:imbuement — golden magical fruit as an attunement component | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a sniffer-recovered golden fruit from a lost age holds latent arcane energy — the magic user buys it from the farmer.
- from: luxury foods → coin | via: bare sell | motif: none | verdict: REJECT | reason: bare M-09 sell link (retired); "sellable" is the ambient endpoint not a weave.
- REWORK: dossier's M-09 economy candidate is a retired-motif bare sell link; the M-28/M-26 colony-demand links above are the correct economy weave.

## controlling   [anchors: support/client UI (1)]
- LEAVE — pure client keybind-menu UI (0 items, 0 blocks); nothing to weave.

## immersive_paintings   [anchors: decoration/support (1)]
- LEAVE — pure decorative-expression mod (4 items, no recipe-types, no material processing surface); forcing a Create frame recipe or economy sale would be busywork with no "of course" payoff.

## create_pattern_schematics   [anchors: Create (1)]
- LEAVE — Create-internal build-automation tooling (3 items, no recipe-types); no foreign material or pillar surface. Adding a 2nd anchor would be a contrived edge on a QoL tool.

## better_lib   [anchors: support/library (1)]
- LEAVE — pure code library (0 items, 0 blocks, config/messaging API only); nothing to weave.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — pure combat-behavior framework (0 items, 0 blocks); no material in/out, no processing surface; routing a resource "through" it is incoherent.

## rhino   [anchors: support/library (1)]
- LEAVE — KubeJS JavaScript engine; zero items, zero blocks, zero gameplay surface; pure runtime library.

## smokeleafindustries   [anchors: survival (1)]
- from: hemp bud / raw hemp | via: create:milling (mill raw hemp fibers into hemp pulp / hemp oil feedstock, feeding the extract chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create mill is how you get bulk hemp pulp before the extractor — the factory floor and the grow-house connect.
- from: smokeleafindustries:generator (FE output) | via: createaddition:charging (FE → kinetic energy bridge) | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the hemp farm's generator charges a Create rotational shaft — a stoner-industrial power arm feeding the main factory.
- from: refined extract / gummy | via: smokeleafindustries machines gated on Create-processed inputs (e.g. synthesizer requires Create brass components) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial synthesizer is brass-tier tech — the builder needs a Create workshop before the strain lab pays off.
- from: refined gummies / extract | via: ars_nouveau:imbuement (potent botanical extract as a reagent in spell imbuing, given the psychoactive theme overlaps with Ars potion flasks) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the alchemist finds that concentrated hemp extract resonates with source energy — the farm feeds the mage's potion lab.
- from: refined extract / gummies | via: MineColonies colony demand (apothecary or tavern requests analgesic edibles) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony medic stocks hemp gummies as a pain-relief supply — the grow-house feeds the colony, which builds more colony.
- from: strain buds / edibles → bare coin sell | motif: none | verdict: REJECT | reason: the dossier's M-09 candidate is a bare sell link (retired M-09); player-run economy rule rejects it; M-28 colony-demand above is the correct economy weave.
- from: hemp building blocks (hemp_planks, hemp_bricks) | via: create:crushing → recycle back to raw hemp | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the recycling weave (M-04) is fine in principle but the hemp building blocks are a decoration palette that players will rarely recycle; the loop closure is weak and the "of course" hook is missing — a player won't expect the crusher to recycle deco hemp brick. Reject in favour of the M-12 / M-05 links that carry real weight.
- REWORK: dossier's FE-bridge candidate is listed as M-05 but the correct motif is M-17 (electric/FE charging bridge); M-17 accepted above. Dossier's M-03/M-12 candidate accepted as M-12. Dossier's M-09 economy candidate rejected (retired motif).

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen library (0 items, 0 blocks, 0 recipe-types); provides data-driven biome/terrain modifiers for dependent mods (Tectonic); nothing to weave.

## createpickywheels   [anchors: Create (1)]
- from: biome-gated power placement requirement | via: config tie — the river/biome check makes early-game power depend on world geography, reinforcing the scarcity/survival pressure that drives the loop | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: you can't just plant a water wheel anywhere — you have to find a river, which means exploring, which means running into danger; the map becomes the gating layer.
- REWORK: the dossier's 2nd-anchor candidate is listed as "survival via biome-gated power" without a motif; M-30 regional-scarcity gate (world geography gates a good/process) is the correct motif — the river biome is the "region" that locks early power, same scarcity logic.

## createmechanicalcompanion   [anchors: Create (1)]
- from: Mechanical Wolf (combat utility) | via: boss drop as a required input (e.g. optical_sensor or quantum_drive requires a boss-drop component) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wolf's perception core can't be made without what lives in the deepest dungeon — the builder needs the explorer.
- from: Mechanical Wolf | via: emergent service (a combat-outfitted player rents wolf escort to vulnerable crafters) | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wolf-owner sells patrol contracts — mechanical muscle as a paid service in the server economy.
- from: Mechanical Wolf modules (shock/fire attack) | via: ars_nouveau:imbuement (enchanting the wolf's combat core with Ars source for a magic-infused upgrade) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: the wolf is purely a mechanical automaton; injecting Ars magic into a clockwork device clashes tonally (steam-punk vs arcane-scholarly); the "of course" hook is not there. M-15 + M-33 cover it sufficiently.
- OK — Create anchor (deep sequenced-assembly chain) is sound.

## direct_chute   [anchors: Create (1)]
- LEAVE — single Create logistics block (1 item/block, zinc-based recipe, no processing surface); a nominal aeronautics-logistics tie would be contrived; no coherent 2nd anchor.

## sparsestructures   [anchors: support/QoL (1)]
- LEAVE — pure worldgen config mod (0 items, 0 blocks, no gameplay surface); no material to weave.

## invtweaksemuforipn   [anchors: support/client QoL (1)]
- LEAVE — client compat shim (0 items, 0 blocks); pure UI emulation layer; nothing to weave.

## knightlib   [anchors: support/library (1)]
- LEAVE — utility library whose content items (grails, chalice, essences, homunculus) are inert without Knight Quest, which is not in this pack. Weaving dead items would create phantom dependencies. If Knight Quest is ever added, knightlib:great_essence is the natural M-02 reagent candidate.

== CHUNK COMPLETE ==
