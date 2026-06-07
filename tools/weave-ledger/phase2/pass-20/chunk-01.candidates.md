# Phase 2 candidates — chunk-01

## smartbrainlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; provides AI behavior framework with no items, blocks, recipe-types, or material surface. Nothing to route through any method.

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight cooked dishes (stews/pies) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who masters the kitchen can sell hearty stews to colonists and travelers for coin — food craftsmanship becomes tradeable output
- from: farmersdelight:cabbage / tomato / onion crops | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier already records create:milling as an existing inbound weave (made-by); this is documented as partly existing — adding it as a new candidate would duplicate a live connection. Flag as OK on this axis.
- REWORK: existing Create connection (create:milling/mixing/filling) — OK, well-established and the dossier correctly records it. The economy angle (M-09) is the genuine gap.
- OK — connections sound on survival↔Create; economy is the recommended extension.

## irons_lib   [anchors: library/API (1)]
- LEAVE — support library (transmog table + player statue are cosmetic blocks with no routable material surface; no c:tags; no recipe-types). No coherent weave.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structure loot chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a pirate-ship chest or fortress vault is the right place to find a few coins — exploration finds feed the Numismatics economy without forcing a recipe
- from: trek structure loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient ruins and towers are exactly where a player expects to stumble on a strange reagent — seeds Ars source gems or Iron's spellbook pages as exploration rewards, tying discovery to magic progression
- from: trek structure loot chests | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is a boss-key gate item for a complex tech recipe — Trek structures have no boss; seeding a boss-key into a chest with no fight attached breaks the motif's logic. Loot-seed for coins and reagents is the right scope here.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction citizen/mercenary trades | via: numismatics sell/price (villager-adjacent) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary swordsman for coin makes instinctive sense — the faction quartermaster becomes a real economy node; (provisional motif — flag for Gate-2 review)
- from: valarian_conquest faction armor / knight gear | via: create:mechanical_crafting or armorsmith station gating | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the armorsmith station is a valarian-native workstation; gating it on Create parts would require KubeJS wrapping a station that isn't a proper machine-type in the methods palette — the coherence is weak and would feel forced for mid-tier faction gear. Theme-fit OK but method routing is fragile; flag for reconsideration only if higher-tier knightly gear earns endgame depth.
- from: valarian_conquest faction drops (shields, faction banners) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: defeating faction soldiers dropping coin-equivalent plunder or bounty tokens ties combat to the economy loop naturally; (M-14 provisional — flag for Gate-2 review)

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — pure config-screen UI library; zero items, blocks, or material surface. Nothing to route.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid convenience overlay (rotate/balance/clear buttons); zero items, blocks, recipe-types. Nothing to route.

## drones   [anchors: aeronautics (1)]
- from: drones:iron_rotor / drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is more than an iron block and a piston — it needs precision parts and a sequenced-assembly step; the engineering investment matches the flight capability it unlocks
- from: drones:iron_rotor | via: create:pressing (sheet metal → rotor blades) | to: Create | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rotor blades are stamped metal — running iron sheets through a Create press to make rotor-grade blades is exactly the kind of light mid-tier fabrication step the motif calls for
- from: drones:pocket_drone (assembled, sold) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: a pocket drone is a player-built personal tool assembled from a custom multiblock, not a fungible consumable; the luxury-good→coin motif works better for food/craft goods than player-assembled robots. The value loop is already covered by the Create weave (production → drone = its own reward). Economy link is thin.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — biome-locating information tool; a single compass item, no recipe-types, no material surface. A QoL utility that serves the scarcity foundation (find the biome, get the ore) but has no routable surface itself.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic gemstone ores go through the same crushing-and-byproduct chain as every other ore — jade dust and ruby shards are the reward for routing them through the tech spine
- from: samurai_dynasty:akaname_tongue / Yokai drops | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a demon's tongue is exactly the kind of grim organic reagent the spirit-fire demands — killing Yokai to fuel occult rituals is a coherent pressure-to-magic link
- from: samurai_dynasty:akaname_tongue / Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-02 (mob-drop reagent sink via spirit_fire) is the cleaner single-path for Yokai drops — routing the same drop through both occultism AND Ars imbuement is redundant and spreads the reagent across two ownership domains. Pick one (spirit_fire/M-02) and leave Ars for a different drop. Reject M-10 here to avoid double-spend.
- from: samurai_dynasty steel (c:ingots/steel) | via: create:crushing / tfmg:hot_blast | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai steel folds into the same c:ingots/steel unification the tech spine already reads — crushed ore to ingot via Create/TFMG hot-blast is the correct production path, making the mod's metals first-class citizens of the ore web

## necronomicon   [anchors: support/library (1)]
- LEAVE — code library (config/datagen/worldgen helpers); zero items, blocks, recipe-types. Nothing to route.

## jamlib   [anchors: library/API (1)]
- LEAVE — cross-platform developer library; zero items, blocks, recipe-types. Nothing to route.

## recipe_integration   [anchors: support/recipe-bridge (1)]
- LEAVE — this mod IS the connective layer; it authors recipes of other mods' types rather than being a content node itself. Weaving it as a target would be circular. The pack-side action is to audit which of its 82 c:tags fire against the actual modlist and prune dead stubs — that's a maintenance action, not a weave.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI plugin exposing breeding data; zero items, blocks, no material flows. Nothing to route.

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchants (loot=yes, injected into loot tables) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Aileron's enchantments are Elytra-specific behavior modifiers, not mob drops or reagents — routing enchantment books from a loot table through M-02 (mob-drop reagent sink) is a motif mismatch. The mod's item surface is the vanilla Elytra, and there's no coherent magic-production link. The aeronautics anchor stands alone.
- LEAVE — behavior-only overhaul with no craftable items under its namespace; loot=yes but its loot tables inject flight enchantments, not materials. No coherent second anchor; aeronautics is sufficient.

## exposure   [anchors: Create, survival (2)]
- from: exposure developed photographs | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a framed photograph of a rare structure or sunset is a genuine novelty trade good — players sell expedition photos to other players or MineColonies residents for coin, making the darkroom a small economy node
- REWORK: existing Create connection (create:sequenced_assembly for film development) — OK, well-grounded in the dossier. Economy is the genuine gap.
- OK — connections sound on Create↔survival; economy extension is incremental and proportionate.

## multipiston   [anchors: support — MineColonies dependency (1)]
- LEAVE — a single functional block (block-translocation piston) used internally by Structurize/MineColonies builders; no item processing, no material surface. Colony infrastructure dependency; nothing to weave.

## platform   [anchors: support/library (1)]
- LEAVE — pure cross-platform developer library; zero items, blocks, material surface. Nothing to route.

## createfurnitureseats   [anchors: support/compat, aeronautics (2)]
- OK — connections sound (support compat bridge + aeronautics ship-interior seating already the full scope of this mod; no material surface to extend further).

## bettermineshafts   [anchors: survival (1)]
- from: bettermineshafts expanded mineshaft structures | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a deeper, more dangerous mineshaft earns better payoff — seeding a few coins or trade tokens into the deeper ore-cavern chests turns spelunking pressure into economy reward, tightening the scarcity→economy loop
- from: bettermineshafts expanded mineshaft structures | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss-key drop from a meaningful fight; mineshafts have no boss encounter — seeding a boss-key component into ambient mineshaft loot would trivialize the gating intent. Coin seeding (M-08) is the right scope.

== CHUNK COMPLETE ==
