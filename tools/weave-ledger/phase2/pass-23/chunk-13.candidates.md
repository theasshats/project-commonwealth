# Phase 2 candidates — chunk-13

## ctl   [anchors: create, aeronautics (2)]
- OK — connections sound. Already at 2-pillar goal (Create sequenced_assembly construction + aeronautics/train lighting purpose). No new weave needed; the incomplete-intermediates pattern (ic_ilb_block / ic_htlb_block through sequenced_assembly) already places it firmly in the Create spine and the aeronautics arm.

## mousetweaks   [anchors: support — client QoL (1)]
- LEAVE — pure client input-handler; zero items, zero methods, zero material surface. No coherent weave exists.

## jei   [anchors: client-only UI support (1)]
- LEAVE — pure client recipe-viewer with no items, blocks, or material outputs. Load-bearing for Create-recipe display (reason pack uses JEI over EMI), but that's an infrastructure role, not a weave anchor.

## startuptime   [anchors: support — perf/diagnostic (1)]
- LEAVE — boot-time logger; produces a single log line and nothing else. Genuine zero-surface utility.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is bulk forage biomass — milling it into a yellow dye intermediate or cactus meal links the desert biome's harvest directly to Create's processing web
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: huge dynamic mushroom caps yield the same milled output as vanilla mushrooms (spores/powder), routing the bulk mushroom harvest through Create's mill for a fungal intermediate used in cooking or dye recipes
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is a renewable everyday drop that scales with cactus growth — making it directly sellable for coin removes scarcity pressure and creates an infinite coin tap; better wired as a processing input (M-12) than a direct sell good

## cubes_without_borders   [anchors: support — client QoL (1)]
- LEAVE — pure client display/windowing option; zero content surface. No weave possible.

## configuration   [anchors: support — library (1)]
- LEAVE — config-screen API library; zero items, methods, or material. Genuine zero-surface library.

## searchables   [anchors: support — UI library (1)]
- LEAVE — client search/filter API library; zero items or material. Genuine zero-surface library.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a rare whale-derived waxy substance — infusing it in the Enchanting Apparatus as an arcane catalyst for a water/ocean-themed glyph or potion of the sea makes immediate thematic sense
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue is the void's own secretion — burning it in Occultism's spirit fire transmutes it into an occult essence, threading End-biome hunting into the magic web
- from: alexsmobs:bear_dust | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear_dust is a bone-analogue drop — routing it through Create's millstone/crusher yields a grinding byproduct (bone meal equivalent or a fertilizer intermediate) so hunted fauna directly feeds Create's resource loops
- from: alexsmobs:void_worm_beak (boss-tier drop) | via: create:sequenced_assembly or mechanical_crafting | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is the pack's End boss — its beak is the boss-key gate for a top-tier Create component (e.g. a high-output flywheel or deep-drilling bit), making the End progression a required unlock for late automation
- from: alexsmobs:banana | via: farmersdelight:cooking or extradelight:juicer | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: banana is a foodstuff from Alex's jungle fauna — processing it into a banana smoothie or dessert in Farmers Delight chains Alex's mobs into the food economy
- from: alexsmobs:skunk_spray | via: create:mixing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: skunk spray is a highly situational/comedic drop with no natural industrial use; routing it through a mixing recipe for a "stink bomb" or solvent forces a tone clash between Alex's naturalist vibe and Create's industrial processing — no coherent hook a player would find satisfying
- REWORK: current anchor is survival only (1). The boss-drop candidate (M-15 void worm beak) and reagent sinks (M-10/M-11) are strong enough that this should reach 2 pillars; the single-anchor status is a gap.

## bundle_recipe   [anchors: support — QoL/vanilla-parity (1)]
- LEAVE — pure crafting-recipe enabler for vanilla bundles; no new items, no processing method. Support role confirmed.

## ding   [anchors: support — client QoL (1)]
- LEAVE — client-only audio cue at load complete; zero items, blocks, or methods. Genuine zero-surface QoL utility.

## create_ultimate_factory   [anchors: create (1)]
- LEAVE — pure recipe datapack; all recipes route through Create machines it already sits inside, deepening the Create pillar. No items of its own to route into a second pillar. Support-tier recipe content.

## patchouli   [anchors: support — library/docs (1)]
- LEAVE — guide-book library with no material outputs except the book items themselves (patchouli:guide_book), which have no processing use. Genuine support role; any "weave" would be fictional.

## nochatreports   [anchors: support — privacy/QoL (1)]
- LEAVE — networking/privacy interceptor; zero items, blocks, or methods. No content surface.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite (aeronautics_dyeable_components:*_levitite) | via: create:toolbox_dyeing or create:mixing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the dye step is already performed by the mod itself (offhand dye + catalysing); routing it through a Create method is redundant re-processing with no added depth — the mod's own in-world dye mechanic IS the application, and M-20 is for upgrading a base item with a woven part, not re-dyeing something that's already dyed. Forcing it clashes with the "don't gate a basic/everyday component behind a complex recipe" rule.
- LEAVE — cosmetic dye-variant layer for aeronautics parts. One genuine anchor (aeronautics). No coherent second anchor; the whole surface is color permutations of existing parts. No tone clash, just no hook.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a cutter's hull is fabricated from timber and iron — routing it through Create's mechanical crafting table gates the mid-tier ship behind the tech spine the same way armored vehicles require fabricated plates
- from: hpm:corvette_steamship_item | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the corvette steamship is the largest/WIP flagship vessel — assembling it via sequenced assembly (hull + steam engine + boiler components as stages) anchors the end-game ship to deep Create progression, making it a ship-building capstone
- from: hpm:cannonball | via: create:pressing or create:compacting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: iron shot should come from a Create press (pressing iron ingots into shot blanks) rather than hand-crafting, linking naval armament supply to Create's metalworking line
- from: hpm (finished ships as high-value goods) | via: numismatics sell/bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a completed cutter or war-cutter is a high-value capital good that a shipwright could sell through the Numismatics trade board — naval vessels as the economy's most expensive tangible exports
- from: hpm:hand_cannon | via: create:pressing + create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the hand cannon is a melee-ranged weapon with its own identity separate from Create Big Cannons (which already occupies the large-artillery role) — gating hpm's handheld cannon behind Create components creates a parallel artillery gate that dilutes both mods' role; the curation note in the dossier (role-split with createbigcannons) flags this for the thunderdome, not a recipe weave

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo is a werewolf-cryptid — its claw burned in spirit fire transmutes into an occult essence fitting the folk-horror/ritual theme perfectly
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is a preserved-resin fossil material — infusing it in the Enchanting Apparatus as a catalyst for a preservation or time-bending glyph makes thematic sense (fossilized time = arcane stasis)
- from: brazil_legends:big_tongue | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: "big tongue" as a Farmers Delight cutting ingredient for a gross folk-food dish is a forced tone clash between Brazilian folklore's eerie mythic vibe and the cozy cooking aesthetic of Farmers Delight; no coherent hook a player would find satisfying rather than off-putting
- from: brazil_legends:amber_shard | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: amber shards are a mob-drop from common folklore mobs — making them directly sellable for coin is a weak hook that creates a renewable coin source from ordinary mob grinding; better routed through magic (M-10) than the economy directly

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (c:item/foods/raw_fish tags) | via: farmersdelight:cooking | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pike, perch, and lionfish are real fish with distinct flavors — cooking them in Farmers Delight's kitchen creates named ocean dishes that let a dedicated fisher supply the food web with variety
- from: upgrade_aquatic cooked/prepared fish | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: fresh sea catch becomes a priced commodity — a fisherman who gears up for ocean diving can sell cooked aquatic delicacies at the trading post, giving aquatic exploration an economic return
- from: upgrade_aquatic:driftwood_* / riverwood_* | via: create:cutting (saw) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: driftwood and riverwood are aquatic-biome wood sets — routing them through Create's saw produces planks/slabs for shipbuilding and decoration, threading ocean exploration into the lumber supply chain
- from: upgrade_aquatic coralstone family | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone is a decorative building block; crushing it back to gravel/powder is generic M-04 recycling with low gameplay interest — it does not advance the loop or give players a reason to seek coralstone over vanilla stone; the wood-cutting weave (above) is the stronger play for this mod

## tide   [anchors: survival (1)]
- from: tide rare/exotic fish (tide:abyss_angler, void-biome catches) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an abyss angler dredged from the void is inherently occult material — burning or infusing the exotic catch routes deep-sea/void fishing into the magic web, making rare catches matter beyond the fishing journal
- from: tide fish (common cooked fish) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tide already wires into Farmers Delight cutting (filleting); extending the output to Numismatics-priced fish dishes gives fishing a clear economic loop: catch → fillet → cook → sell
- from: tide raw fish (bulk) | via: create:milling or farmersdelight:cooking | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk catch milled into fishmeal feeds a Create mixing recipe for fertilizer or animal feed, turning mass fishing into a farm-support supply line
- from: tide: Serene Seasons seasonal-catch compat | via: seasonal gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain fish species only bite in a given season (already in Tide's compat) — making a rare seasonal catch the unique reagent for a magic recipe (M-16) or a limited-edition sell item amplifies the seasons-as-pressure-driver with real gameplay stakes
- from: tide:abyss_angler as boss-key material | via: crafting gate | to: create | motif: M-15 | power: endgame | verdict: REJECT | reason: abyss_angler is a catchable fish, not a boss drop — using it as a boss-key gate (M-15) misapplies the motif; boss-key gates are reserved for genuine boss drops (reagent-ownership table), and gating a Create recipe on a rare-but-farmable fish without a boss kill devalues the motif's hard lock.

## underground_village   [anchors: survival (1)]
- from: underground_village Stoneholm villagers | via: numismatics villager-trade seating | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: Stoneholm is an underground economy node — seating Numismatics-adjacent trades there (stone-goods merchants, underground ore dealers) makes the settlement a discoverable economic hub rather than a generic loot stop; discovery pressure (find it to trade there) adds survival-exploration payoff
- from: underground_village loot chests | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding Stoneholm chests with a small Numismatics coin cache (a "buried savings" feel) makes the underground village discovery immediately rewarding in the pack's currency — and signals the economy layer exists from early exploration

== CHUNK COMPLETE ==
