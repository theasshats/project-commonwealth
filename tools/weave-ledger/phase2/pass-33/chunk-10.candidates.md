# Phase 2 candidates — chunk-10

## puzzleslib   [anchors: support/library (1)]
- LEAVE — pure code library (Fuzs framework); 0 items, 0 blocks, 0 recipe-types. No content surface to weave.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library (BlayTheNinth); 0 items, 0 recipe-types; ships only internal scaffolding tags. No content surface to weave.

## multipiston   [anchors: support/MineColonies dependency (1)]
- LEAVE — functional block used internally by Structurize/MineColonies builders; no item-processing, no routable material. Not surfaced to players as standalone content.

## createimmersivetacz   [anchors: Create (1)]
REWORK: dossier 2nd-anchor candidate cites M-09 (luxury good → coin) — that motif is retired (#163/#240). Re-scope.

- from: createimmersivetacz:twelve_gauge_shell / bulk ammo output | via: emergent player trade (ammo as consumable supply) | to: economy | motif: M-34 combat-route supply | power: mid | tone: ok | verdict: ACCEPT | hook: a Create arms-factory player mass-produces shells via sequenced_assembly and sells rounds to fighters who can't run their own production line — the supplier side of the PvPvE combat loop
- from: createimmersivetacz:twelve_gauge_shell / rounds | via: consumption in combat | to: survival | motif: M-26 consumption sink | power: mid | tone: ok | verdict: ACCEPT | hook: ammo is a recurring consumable; demand never zeroes out as long as the hostile world keeps pushing back, keeping the factory running
- from: createimmersivetacz:gun_barrel / firing_mechanism (brass-tier endgame parts) | via: create:sequenced_assembly gating behind a colony-crafted intermediate | to: economy (M-28 colony route) | motif: M-28 colony route | power: endgame | tone: ok | verdict: ACCEPT | hook: a mechanic's hut can fabricate a precision-machined lockwork that a solo Create player would otherwise need many more steps to produce — the high-tier fork in action
- from: ammo → aeronautics supply role | via: logistics (aeronautics bulk transport of ammo to front-line outposts) | to: aeronautics | motif: M-31 logistics-required bulk good | power: mid | tone: ok | verdict: ACCEPT | hook: bulk shells are heavy; shipping crates of ammo between the factory and the front by airship is exactly why the logistics arm exists
- from: "arms economy via NPC sell" | verdict: REJECT | reason: bare sell link — ambient endpoint of the loop, not a weave; M-09 is retired; economy link only counts when it gates demand (redirected to M-34 above)

## biolith   [anchors: support/worldgen API (1)]
- LEAVE — worldgen placement library (Terraformers); 0 items, 0 blocks, 0 recipe-types. No content surface to weave.

## sereneseasons   [anchors: survival (1)]
REWORK: dossier 2nd-anchor candidate "economy via seasonal scarcity → M-09" is retired. The Create/season_sensor candidate (M-05 native-method gating) is the right framing but needs sharpening.

- from: sereneseasons:season_sensor redstone output | via: config tie / Create logic (redstone → gearshift → contraption) | to: Create | motif: M-16 seasonal reagent | power: everyday | tone: ok | verdict: ACCEPT | hook: an automated greenhouse farm reads the season_sensor and flips a gearshift to switch which crop belt runs — seasonal scheduling becomes a Create automation challenge, not a manual chore
- from: out-of-season crops (scarce in winter) | via: serene seasons crop-fertility gate → scarcity foundation | to: economy | motif: M-30 regional-scarcity gate | power: everyday | tone: ok | verdict: ACCEPT | hook: a winter greenhouse specialist holds a regional monopoly on summer crops during off-season, so out-of-season produce is a real trade good — seasonal scarcity forces inter-player exchange
- from: season_sensor as "Create native-method gating" M-05 | verdict: REJECT | reason: M-05 is for a mod's own flagship machine gated on Create parts; the season_sensor drives Create externally rather than being gated by it — M-16 is the correct motif (seasonal input to Create/magic); keep as M-16 ACCEPT above

## vinery   [anchors: survival (1)]
REWORK: dossier 2nd-anchor candidates cite M-09 (luxury good → coin) — retired. Re-scope the economy link to a demand-gating motif.

- from: vinery wines / ciders (effect-bearing consumables) | via: consumption as buffs burned in production/combat | to: economy | motif: M-26 consumption sink | power: mid | tone: ok | verdict: ACCEPT | hook: effect wines (speed, regen, resistance) are spent during factory runs and fights, not stockpiled — demand re-opens every time players gear up or run machines, putting the winemaker in steady supply mode
- from: vinery:apple_mash / grape_juice (intermediate fluids) | via: create:mixing or create:milling as alt extraction path | to: Create | motif: M-12 processing-chain pull | power: everyday | tone: ok | verdict: ACCEPT | hook: routing apples through Create's millstone yields apple mash that feeds back into vinery fermentation OR into Farmer's Delight recipes — the juice/mash becomes a shared intermediate bridging the two food webs
- from: vinery wines as a maturing product | via: vinery fermentation barrel → M-35 aging | to: economy | motif: M-35 maturation/aging | power: mid | tone: ok | verdict: ACCEPT | hook: a wine aged a full in-game year commands a premium; the aging specialist who warehouses the best vintages controls a time-gated luxury that can't be rushed, which is a natural trade differentiation
- from: "wines sold for coin at NPC" | verdict: REJECT | reason: bare sell link; M-09 retired; redirected to M-26 consumption sink and M-35 maturation above
- from: "economy via Numismatics vendor" | verdict: REJECT | reason: same as above — ambient endpoint, not a demand gate

## mcwdoors   [anchors: support/decoration palette (1)]
- from: metal-variant doors (iron/steel frame doors) | via: create:crushing back to nuggets + xp_nugget | to: Create | motif: M-04 Create recycles deco | power: everyday | tone: ok | verdict: ACCEPT | hook: a misplaced or scrapped reinforced door gives back its metal at a small loss — Create doesn't waste, it recycles, and 260-item packs mean lots of accidental builds; this is the "deco family pass" light version
- from: "wooden door variants as special crafting target" | verdict: REJECT | reason: 250 wooden door variants already exist in vanilla style; routing them through a special process has no mechanical payoff and would clutter recipes — depth doesn't scale with a plain plank door; M-04 applies only to metal variants

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration (1)]
- from: structure loot tables (dungeon chests, tavern caches, trial vault rewards) | via: loot-seed — seed weave-relevant drops (Grimoire of Gaia boss fragments, magic reagents, Numismatics coin) into its loot tables | to: magic | motif: M-02 mob-drop reagent sink | power: mid | tone: ok | verdict: ACCEPT | hook: finding a Gaia fragment in a dungeon chest makes exploration pay off for magic specialists, not just gear farmers — exploration feeds the magic web
- from: structure loot tables | via: loot-seed with Numismatics coins (player-minted coin seeded as rare dungeon loot) | to: economy | motif: M-08 player-minted currency | power: mid | tone: ok | verdict: ACCEPT | hook: recovered coins from ruins represent old wealth circulating back into the player economy — exploration is a source of currency, not just gear, which makes the tavern cartographer's maps worth buying
- from: tavern cartographer villager → exploration reward | via: service-for-hire framing (a player acts as guide/escort to the cartographer's structures for payment) | to: economy | motif: M-33 service-for-hire | power: mid | tone: ok | verdict: ACCEPT | hook: a "scout" player sells treasure-map contracts; others pay for the coordinates — the tavern becomes a node in the player economy, not just a vanilla loot stop
- from: "cartographer villager emerald trades → Numismatics" | verdict: REJECT | reason: NPC coin faucet (villager → coin = M-21, CUT); the economy link must be player-to-player, not NPC-mediated

## meadow   [anchors: survival (1)]
REWORK: dossier 2nd-anchor candidates cite M-09 (luxury good → coin) — retired. Re-scope.

- from: meadow:alpine_salt | via: create:milling (salt ore → alpine_salt crystals) or create:mixing (brine solution) | to: Create | motif: M-12 processing-chain pull | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt milled from ore is a universal food preservative — feeding it into Create mixing chains (brining, curing, cheese-making) slots it into the industrial food web, not just the cottage kitchen
- from: meadow:cheese_wheel (matured, high-value dairy product) | via: meadow:cheese method → M-35 aging (cheese mass cured for time) | to: economy | motif: M-35 maturation/aging | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of aged alpine cheese takes real time to mature and can't be rushed; the alpine dairy specialist who stocks them holds a time-gated trade good
- from: meadow:chambray_wool / felt textiles | via: create:mechanical_crafting as a structural component (felt padding in aeronautics gondola furnishing or MineColonies building request) | to: aeronautics | motif: M-23 structural alloy → airframe | power: mid | tone: ok | verdict: ACCEPT | hook: gondola interiors and colony workshop padding require felted insulation — chambray felt becomes a colonial-supply-line material, linking the alpine farming chain to ship/colony builds (thematic: alpine textile → airship cabin linings)
- from: meadow alpine crops (lavender, yarrow) as seasonal inputs | via: season-gated growth (Serene Seasons) → magic ritual ingredient | to: magic | motif: M-16 seasonal reagent | power: mid | tone: ok | verdict: ACCEPT | hook: lavender blooms only in spring; a ritual needing it must wait for the season or trade with an alpine greenhouse farmer — seasonal scarcity drives magic demand
- from: "cheese wheels sold at Numismatics counter" | verdict: REJECT | reason: bare sell link; M-09 retired; redirected to M-35 above
- from: "alpine salt as Create ore-doubling target" M-03 | verdict: REJECT | reason: M-03 is for ore → crushed ore (+byproduct) as a reward on top of smelting; salt is a food ingredient, not a smeltable ore — the correct motif is M-12 processing-chain pull (ACCEPT above)

## knightlib   [anchors: support/library (1)]
- LEAVE — utility library for Knight Quest; content items (grail, chalice, essence) are inert without Knight Quest, which is not in the pack. Weaving dead items is a guardrail violation.

## accessories_compat_layer   [anchors: support/compat shim (1)]
- LEAVE — pure API compat shim (Curios/Trinkets → Accessories translation); 0 items, 0 blocks, no gameplay content to weave.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments / nuggets (large catalogue of distinct drops) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 ritual/transmutation sink | power: mid | tone: ok | verdict: ACCEPT | hook: burning a Gaia harpy feather or gorgon shard in spirit fire extracts an occult essence — the bestiary becomes a gathering run for magic specialists, turning combat pressure into magic production input
- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement as attunement reagents | to: magic | motif: M-02 mob-drop reagent sink | power: mid | tone: ok | verdict: ACCEPT | hook: a dryad petal or vampire fang is attuned into a source-adjacent reagent — the mythic-fantasy bestiary and the Ars magic system share a thematic world; players who farm mobs feed the mages
- from: grimoireofgaia boss bust / artifact ring drops | via: boss-drop combat supply trade | to: economy | motif: M-34 combat-route supply | power: endgame | tone: ok | verdict: ACCEPT | hook: a combat specialist farms valkyrie busts and artifact rings that non-combat players can't obtain — these gate-worthy items become trade currency between playstyles
- from: grimoireofgaia mini-boss drops | via: boss-key gate on a complex Create/tech recipe | to: Create | motif: M-15 boss-key unlock | power: endgame | tone: ok | verdict: ACCEPT | hook: a sphinx fragment is the gate item for a high-tier precision mechanism — you either fight for it or buy it from a combat specialist; the mythic enemy earns its place in the tech chain
- from: grimoireofgaia c:nuggets/diamond + c:nuggets/emerald drops | via: create:crushing processing of Gaia mob drops | to: Create | motif: M-03 Create ore-doubling | power: mid | tone: ok | verdict: ACCEPT | hook: crushing a Gaia gem-shard yields fractional gem dust — a soft ore-doubling bonus for a different kind of "mining" (hunting), routing combat output into the Create processing chain
- from: "nuggets/rare loot sold for Numismatics coin at counter" | verdict: REJECT | reason: bare sell link; M-09 retired; economy link redirected to M-34 combat-route supply above

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats grab-bags (mob/loot chest drops) | via: loot-seed — seed rare hats into boss/structure/dungeon chests (Dungeons & Taverns loot tables, Grimoire of Gaia boss drops) | to: survival | motif: M-34 combat-route supply | power: everyday | tone: ok | verdict: ACCEPT | hook: a rare hat in a boss chest is a cosmetic trophy from a dangerous encounter — the dangerous world rewards exploration and combat with vanity flair, which is its own player-retention pressure
- from: simplehats:hat → player-to-player cosmetic trade | via: emergent player trade (rare hats as vanity collectibles players swap or sell to each other) | to: economy | motif: M-33 service-for-hire | power: everyday | tone: ok | verdict: ACCEPT | hook: a player with a duplicate rare hat lists it at a Trading Floor stall; another pays coin for it — cosmetic scarcity drives a micro-economy layer; the scraps→upgrade-bag system already prices rarity, so the coin exchange is a natural extension
- from: "hats sold to NPC vendors for coin" | verdict: REJECT | reason: NPC coin faucet (M-09 retired / M-14 cut); economy only counts when player-to-player demand gates it — redirected to M-33 above
- from: simplehats custom_hatscraps recycling | via: create:crushing as an alternate scrap source (a damaged hat fed into a grinder yields hatscraps) | verdict: REJECT | reason: tone clash — a cosmetic hat in an industrial grinder is tonally absurd; the mod's own scrap-bag mechanic already handles recycling; no player would expect this routing

## attributefix   [anchors: support/bugfix (1)]
- LEAVE — attribute-cap bugfix library; 0 items, 0 blocks, 0 recipe-types. Pure compatibility patch enabling other mods' gear to scale correctly. No weave possible or needed.

## solmaiddream   [anchors: survival (1)]
- from: maid diet variety mechanic | via: consumption of every food in the pack, pulling on the full food-production web | to: survival | motif: M-26 consumption sink | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding maids a varied diet of modded foods (Vinery wines, Meadow cheese, Farmer's Delight dishes) consumes production outputs and softly pressures players to diversify food production — the maid is a second mouth pulling on the cooking economy
- from: solmaiddream as a second survival/magic anchor | verdict: REJECT | reason: the mechanic rides Touhou Little Maid (a companion mod); a second anchor could be argued as magic/companion, but the maid's stat growth gives no magic-system outputs — it's a survivability buff, not a magic weave; forcing a magic edge would be artificial. The M-26 consumption link is the coherent second touch.

## revelationary   [anchors: support/library (1)]
- LEAVE — progression-gating library/API; 0 items, 0 blocks, 0 recipe-types. Mechanically enables M-05 native-method gating in dependent mods but has no material surface of its own.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-side build-assist render overlay; 0 items, 0 blocks, no material surface, no game-state interaction. Pure visual helper.

## byzantine   [anchors: survival/MineColonies (1)]
- from: Byzantine schematic styles | via: MineColonies colony route (Builder constructs buildings from Domum Ornamentum + vanilla materials per schematic) | to: economy | motif: M-28 colony route | power: mid | tone: ok | verdict: ACCEPT | hook: Byzantine domes and arched markets are the colony's visual identity; a colony player building in this style feeds a sustained demand for Domum Ornamentum materials, limestone, terracotta, and sandstone — the colony economy routes through the building queue
- from: Byzantine style as a pure schematic decoration pack with no second mechanical hook | verdict: REJECT | reason: the M-28 accept above is the strongest coherent link; forcing a Create or magic edge onto a schematic-data pack would be artificial — it has no items, no recipes, no processing; the one edge is through colony building material demand

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — combat behavior framework (JSON weapon movesets); 0 items, 0 blocks, 0 recipe-types. No material surface to weave. Underpins how combat weapons feel but is not itself a resource in the loop.

== CHUNK COMPLETE ==
