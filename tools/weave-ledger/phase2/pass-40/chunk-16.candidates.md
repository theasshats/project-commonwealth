# Phase 2 candidates — chunk-16 (context-fed)

## meadow   [anchors: survival (1)]

Existing rows are dense — salt (M-03/M-12/M-30), cheese (M-35/M-28/M-26), herbs (M-10/M-16), felt (M-23), and a season gate (M-16) are all well-represented and have high-confidence ACCEPTs. What is missing:

- NEW | from: meadow:climbing_rope | via: create:mechanical_crafting (rope woven into a coiled climbing-kit component) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: a meadow alpine rope is the natural rigging for an Aeronautics balloon envelope or rope-ladder gangway — the mountain harvest feeds the shipyard
- NEW | from: meadow:alpine_salt (via meadow:alpine_salt_ore regional lock) | via: create_cheese:maturing (salt as a required Calendar-Page-tier-2 maturing input for aged cheese — forces salt-region and cheese-region players to trade) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a wheel of aged Gouda can't cure without alpine salt — the fromagerie depends on the highland salt miner
- CHALLENGE | from: meadow:chambray_wool | via: create:mechanical_crafting | to: create | motif: M-05 | verdict: REJECT | hook: M-05 is "flagship item built in its own machine, gated on Create parts"; chambray felt feeding a mechanical_crafting recipe for a structural part is fine as M-23 (structural textile for airframes), but calling it M-05 is a motif mismatch — the weave already exists more precisely under M-23 (envelope/gasbag material); keep M-23, drop M-05 framing

## notenoughanimations   [anchors: support/visual (1)]

LEAVE — zero items/blocks/methods; pure client cosmetic animation library. No content surface to weave.

## createmechanicalcompanion   [anchors: Create (1)]

Existing rows: M-15 boss-gate on quantum_drive/motherboard is well-accepted (3–4 independent ACCEPTs). M-06 sequenced-assembly motherboard chain is accepted. M-33 service-for-hire (wolf-builder specialist) has 1 ACCEPT but is underdeveloped. M-24 booster_rocket→aeronautics has 2 ACCEPTs but also rejections for good reason (wolf is ground-companion).

- NEW | from: createmechanicalcompanion:mechanical_wolf (functional combat companion, high-value personal asset) | via: occultism:spirit_trade (a spirit-trade deal: a wizard offers an occultism-sourced rare part — e.g. an afrit essence — in exchange for a quantum_drive component, creating a cross-route dependency where the Create wolf-builder needs a magic-side reagent) | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wolf's quantum brain runs on a spirit-fused timing crystal — the clockwork builder must trade with the occultist
- CHALLENGE | from: createmechanicalcompanion:booster_rocket | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | verdict: REJECT | hook: the booster_rocket is a bespoke wolf-companion movement module; it has no generic propulsion interface and physically fits the wolf's small frame — scaling it as a ship thruster ignores that it's a personal-companion part, not a loose propulsive component with a standard interface; existing REJECT consensus is correct and the 2 ACCEPTs are unconvincing

## snowyspirit   [anchors: survival (1)]

Existing rows: ginger→M-12 (milling/FD cooking) is the dominant ACCEPT. M-16 seasonal gate on ginger is also well-accepted. Eggnog→M-35 aging and M-35 maturation got 1 accept each.

- NEW | from: snowyspirit:gingerbread_cookie / snowyspirit:eggnog | via: minecolonies colony hut request (Tavern/Cook hut) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony tavern keeper stocks the winter menu — gingerbread and eggnog go on the colony request board, making the snowyspirit food line a recurring colony-supply commodity
- CHALLENGE | from: snowyspirit:sled | via: create:mechanical_crafting | to: create | motif: M-05 | verdict: REJECT | hook: M-05 requires a mod's flagship item to be "built in its own machine, gated on Create parts as inputs"; the sled is already self-craftable and has no natural Create-parts-gate — there is nothing inherently Create-industrial about a wooden snow sled; the single ACCEPT on this row is weak and the motif doesn't fit (the sled isn't a mod machine, it's a terrain vehicle)

## create_confectionery   [anchors: Create, survival (2)]

Existing rows: M-04 deco-crush, M-26 consumption, M-28 colony request, M-35 tempering/aging, M-29 cross-route via chocolate fluid, M-16 seasonal cocoa gate are all well-represented. The mod is already 2-pillar.

- NEW | from: create_confectionery:black_chocolate_candy / snowyspirit:ginger (cross-mod input) | via: create:mixing (ginger extract from snowyspirit ginger is a required mixing input for the premium dark-ginger candy variant) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the confectioner's finest batch calls for real alpine ginger — a snowyspirit-region dependency forces the chocolate specialist to trade with the winter-crop farmer, a genuine cross-production-route link
- NEW | from: create_confectionery:bar_of_ruby_chocolate (endgame confection, multi-step) | via: create_cheese:maturing (optional tempering stage: ruby chocolate aged in the Cheese Cellar becomes "tempered ruby chocolate" with a stronger effect — M-35 maturation, creating a time-invested prestige sub-product) | to: economy | motif: M-35 | power: endgame | tone: ok | verdict: ACCEPT | hook: tempered ruby chocolate that sat a week in the cellar fetches a premium — the aging wait is the confectioner's mark of quality, and only the specialist bothers

## moreculling   [anchors: support/performance (1)]

LEAVE — pure client render-culling optimization, zero items/blocks. No content surface.

## everycomp   [anchors: support/decoration (1)]

OK — existing rows sufficient (both REJECT correctly; the weave surface belongs to host mods, not the generator itself).

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

OK — existing rows sufficient (both correctly REJECT forced weaves; single joke disc has no gameplay surface).

## platform   [anchors: support/library (1)]

LEAVE — zero items/blocks/methods; pure cross-loader API library. No content surface.

## create_enchantment_industry   [anchors: Create (1)]

Existing rows: liquid XP→ars imbuement (M-10) and liquid XP→Iron's cauldron (M-10) both heavily ACCEPT. Printer→M-37 (3 ACCEPTs) and Printer+Enchanter→M-33 enchant-for-hire (2 ACCEPTs) are solid. XP→occultism ritual (M-11/M-29) has 3 ACCEPTs. REWORK concern on arbitrage loop was flagged.

- NEW | from: create_enchantment_industry:super_experience_nugget (dense distilled XP node, endgame) | via: ars_nouveau:enchanting_apparatus (as a high-cost reagent on the pedestal for an endgame Ars book upgrade — the "industrial XP condenser powers the arcane upgrade") | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Ars master needs a super-XP nugget to push a tier-5 spell book — the factory enchanter and the arcane scholar depend on each other's ceiling
- NEW | from: create_enchantment_industry:printer (mechanical book copier, liquid-XP fuelled) | via: minecolonies research (the Printer's output — copied enchanted books — is a required input for unlocking a MineColonies research tier, making book-scale production a colony-progress gate) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony's University research branch stalls without printed spell-books — the enchantment factory feeds colony advancement, not just gear
- CHALLENGE | from: create_enchantment_industry:experience_bucket | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-17 | verdict: REJECT | hook: M-17 is specifically "FE/electric charging bridge" (Create electricity charges a tool/focus); liquid XP is not FE and is not an electrical charge — this is a motif mislabel; the correct motif for liquid XP feeding a magic method is M-10 (arcane infusion pull) or M-05 (native-method gating); several rows in the existing set misapply M-17 to this link and should be relabelled M-10 in the merge

## fogoverrides   [anchors: support/QoL (1)]

LEAVE — zero items/blocks/methods; pure client fog-config mod. No content surface.

## create_cheese   [anchors: Create, survival (2)]

Existing rows: M-35 aging specialist, M-28 colony food, M-26 consumption, M-31 ship's rations, M-33 service-for-hire are all covered. The cellar-as-generic-aging-host (accepting foreign perishables) is noted. Missing:

- NEW | from: create_cheese:cheese_cellar (maturing station, tag-extensible) | via: create_cheese:maturing (accepting meadow:alpine_salt as a required input tag for Calendar-Page-tier-2+ maturation — the salt is consumed in the maturing step, not just a recipe ingredient) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: proper aged cheese demands salt from the highland — the fromagerie can't hit tier-2 maturation without alpine salt, welding dairy and salt-mining into one supply chain
- NEW | from: create_cheese:aged_cheese (any tier-2/3 variety, high-nutrition, high-effort) | via: config/KubeJS diet-system tag (tag aged cheese into the Protein group with a bonus multiplier in Diet AppleSeed Edition, making it the premium Protein source that satisfies more diet-variety than plain meat) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheddar covers a week's protein in one slice — a player grinding diet variety craves the cellar cheese the fromagerie specialist hoards

## cristellib   [anchors: support/library (1)]

LEAVE — zero items/blocks/methods; structure-config framework library. No content surface.

## glitchcore   [anchors: support/library (1)]

LEAVE — zero items/blocks/methods; loader-abstraction API. No content surface.

## formations   [anchors: survival (1)]

Existing rows: multiple ACCEPT rows on M-02 loot-seed into altars/pedestals, and M-34 scattered-ruins loot-seed. However, the dossier's AUTO-DIGEST confirms loot=no — the mod adds structures but owns no loot tables of its own.

- CHALLENGE | from: formations generated altars/pedestals | via: loot-seed | to: magic | motif: M-02 | verdict: REJECT | hook: formations registers loot=no (confirmed in jar digest); it builds structures from foreign block palettes but owns no loot tables — you cannot seed drops "into this mod's loot tables" because there are none; the correct action for altar-based loot is to seed into vanilla chest/structure loot tables at the positions formations places, which is a datapack edit independent of this mod; the M-02 ACCEPTs in the existing set are based on a false premise that formations owns loot tables

## better_climbing   [anchors: support/QoL (1)]

LEAVE — zero items/blocks/methods; pure climbing-physics movement tweak. No content surface.

## letsdocompat   [anchors: survival/support (1)]

OK — existing rows sufficient (all correctly REJECT or flag it as circular self-reference; the mod is pure food-web glue).

## bundle_recipe   [anchors: support/QoL (1)]

OK — existing rows sufficient (both correctly REJECT; vanilla-parity recipe re-enabler with no weave surface).

## playeranimator   [anchors: support/library (1)]

LEAVE — zero items/blocks/methods; pure client animation API. No content surface.

## pantographsandwires   [anchors: Create, aeronautics (2)]

Existing rows: M-32 coal_coke→TFMG coking is the top ACCEPT. M-29 graphite→create_new_age energising and M-31 catenary as logistics backbone are both accepted. M-17 graphite→energising also accepted.

- NEW | from: pantographsandwires:graphite (c:item/ingots/graphite — a mod-unique tagged material) | via: create:haunting (soul-fire transmutes graphite into a "soul-coke" intermediate usable as a magic ritual material — graphite's carbon structure absorbs soul essence) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: haunting a graphite rod over soul-fire yields soul-carbon — a dense ritual conductor the occultist needs for high-tier infusion circles
- CHALLENGE | from: pantographsandwires:graphite | via: occultism:ritual or spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: M-11 is "organic/mob drop transmuted via spirit_fire into a magic essence"; graphite is an industrial mineral intermediate, not an organic drop — the motif explicitly targets organic/mob material going into spirit-fire; the correct motif for graphite as a magic circuit material via haunting is M-19 (Create haunting transmutes an item), not M-11; the existing 1-ACCEPT row misnaming this M-11 should be corrected in the merge

== CHUNK COMPLETE ==
