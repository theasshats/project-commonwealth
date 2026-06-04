# Phase 2 candidates — chunk-14

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot | via: recipe (create:crushing → create:pressing) | to: Create | motif: M-03 | power: endgame | tone: ok | verdict: ACCEPT | hook: Boss-metal ingots feed the Create ore-doubling chain — players who've cleared the dungeon get sheets and byproduct from the machine rather than straight smelt, and the crushing yield becomes feedstock for higher-tier processing.
- from: cataclysm boss-drop ingots (witherite/ignitium/ancient_metal) | via: recipe (boss drop as gating input to a complex Create machine recipe) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "You need what the Netherite Monstrosity drops to build the sequenced-assembly line" — exactly the boss-key unlock DESIGN.md calls out; cataclysm dungeons become the prerequisite combat layer for late Create tech.
- from: cataclysm:cursium_ingot / witherite_ingot | via: recipe (occultism:spirit_fire or ars_nouveau:imbuement) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Dark-flavored boss metals are exactly the material a spirit ritual would transmute into occult reagent — Cursium smells of the undead and slots cleanly into the occultism spirit-fire path.
- from: cataclysm boss-trophy drop | via: loot-seed (add numismatics coin payout to boss loot tables) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: Slaying the Leviathan drops a handful of high-denomination coins — the bounty economy pays out on the hardest kills.
- from: cataclysm:azure_seastone / black_steel deco blocks | via: recipe (create:crushing, lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Deco-crushing is a nice-to-have but M-04 is already well-represented in the pack; cataclysm's deco blocks are boss-dungeon flavor, not mass-produced decoration, so a lossy crush path adds little player value — the M-15 boss-key and M-03 ingot paths cover the Create link more meaningfully.
REWORK: no existing cross-pillar connections to audit (currently 1-pillar survival).

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — genuine single-item flavor mod (one music disc, no items with material function, no loot tables, no crafting surface). Forcing an economy or recipe edge onto a meme disc would be noise. loot=yes in jar counts is likely a false positive from vanilla disc behavior; the mod itself adds no loot-table entries of its own.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux plow / reaper (iron-bearing farm implements) | via: recipe (require create:pressing iron → iron_sheet as a component in the plow-blade / reaper-blade recipe) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: The iron blade on a plow or reaper ought to be a pressed sheet, not a raw ingot — one light Create-processing step makes the farming toolset feel like it belongs in a pack with a machine spine, without gating a basic cart behind deep tech.
- from: astikorcartsredux:oak_supply_cart (wooden cart) | via: recipe | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: Supply/hand/animal carts are pure wood-and-plank items; pulling them through Create would over-engineer a rustic wooden box. Only the metal-bladed implements (plow, reaper) have a sensible pressed-sheet hook — the wooden carts are fine as vanilla-recipe items.
REWORK: no existing cross-pillar connections to audit (1-pillar survival).

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns ocean-village structures | via: loot-seed (seed numismatics coins + magic reagents into the generated villager-chest loot tables) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: The floating ocean villages feel like a trading post — finding one should reward a handful of coins and perhaps a Forbidden Arcanus scroll, tying sea exploration to the economy pillar without adding new items.
- from: tidal-towns ocean-village blacksmith chest | via: loot-seed (seed cataclysm amethyst_crab_meat or irons_spellbooks scroll as rare find) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: The structure uses pure vanilla blocks/loot — injecting foreign-mod reagent items into a vanilla-faithful structure datapack's loot tables is possible but feels mismatched with the "vanilla-faithful" vibe; the M-08 coin seed is sufficient for a second pillar and is more thematically coherent (a sea trading post pays coin, not arcane scrolls).
REWORK: no existing cross-pillar connections to audit (1-pillar survival).

## cerbons_api   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, no loot tables). No player-facing surface to weave.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (harvestable block) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: A fallen meteor is exactly the kind of dense alien rock a Create crushing wheel eats — yields iron nuggets / nickel dust + an xp-nugget byproduct, giving players a reason to hunt impact sites beyond deco.
- from: Blood Moon active (world-state event) | via: config/worldgen event-gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: A Blood Moon is the canonical dark-ritual window — gate an Occultism ritual or Ars Nouveau summon ritual to require a Blood Moon night; the world's threat state becomes the reagent. (Delivery: config tie in occultism/ars ritual JSON conditions, not a new item recipe.)
- from: Harvest Moon active (world-state event) | via: config/worldgen event-gating | to: magic/Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Harvest Moon accelerates crop growth globally — a seasonal-reagent window for any processing-chain recipe (M-16) that wants a bumper-crop moment; can also gate a Create-Ponder automation chain that harvests only during the moon window (flavor note, not a hard recipe gate).
- from: Blue Moon → Luck buff | via: loot-seed | to: economy | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: The Blue Moon's Luck buff already upgrades loot-table quality globally — piggybacking an economy coin drop on top would double-dip the same event. The Blood Moon / Harvest Moon ritual and crush weaves are cleaner; the Blue Moon is better left as atmosphere.
- from: enhancedcelestials:space_moss_block | via: recipe (ars_nouveau:imbuement or occultism:spirit_fire) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: Space moss is a cosmetic worldgen block with no in-lore connection to arcane systems; forcing it into imbuement feels arbitrary. The event-gating weaves (M-22/M-16) are the stronger link for this mod — adding an item-level reagent weave on top risks clutter.
REWORK: no existing cross-pillar connections to audit (1-pillar survival).

## invtweaksemuforipn   [anchors: support/client QoL (1)]
- LEAVE — pure client-side inventory-management compat shim (0 blocks, 0 items, no loot tables, no server-side behavior). Nothing to weave.

## patchouli   [anchors: support/library (1)]
- LEAVE — guide-book library/developer-infra mod. Its 9 items are empty book covers used as recipe inputs to craft mod-specific guidebooks (dependency role). No material gameplay surface. Forcing a coin or recipe edge onto a blank guide-book would be artificial.

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — zero-content behavior-only compat patch (0 blocks, 0 items, no loot tables). Makes Create: Stuff 'N Additions gear work on Aeronautics ships; no player-facing items to weave.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore goes through the crushing wheel for doubled yield + a tiny salt-dust byproduct — a perfect low-tier ore-doubling candidate that also feeds the cooking web (salt is a seasoning reagent).
- from: expandeddelight:cinnamon (dust/bark) | via: recipe (create:milling) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cinnamon bark milled in a Millstone gives ground cinnamon dust, the same move as coffee beans — pulls the spice into the Create processing chain and gives Millstone setups another product line.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-aged) | via: recipe (numismatics sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: An aged cheese wheel is a high-effort luxury — time-gate plus milk/goat-milk input makes it a natural sellable trade good on the Numismatics market; cheese-makers can run a specialty trade rather than just combat.
- from: expandeddelight:chili_pepper / hot foods | via: config tie (Serene Seasons winter survival or Tough-as-Nails temperature) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: expandeddelight is already a survival-pillar mod; a config tie to Serene Seasons adds a second survival-internal link, not a second *pillar*. Motif M-16 requires routing into Create or magic. The three accepted weaves (Create crushing, Create milling, economy coin) already earn a solid second pillar.
- from: expandeddelight:sweet_potato / peanut crops | via: recipe (create:compacting → peanut_butter, sweet_potato_starch) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Salt crushing and cinnamon milling already cover the Create weave amply; adding a third Create processing route for crops risks over-engineering the food side. One clear ore-doubling and one clear mill route is sufficient depth at the everyday tier; starch/peanut-butter compacting would add complexity without proportionate player value.
REWORK: existing inbound weave (farmersdelight:cooking/cutting) is a food-mod-to-food-mod tie, not a cross-pillar link — it correctly stays within survival and doesn't need reworking; the accepted weaves above add the genuine 2nd pillar.

== CHUNK COMPLETE ==
