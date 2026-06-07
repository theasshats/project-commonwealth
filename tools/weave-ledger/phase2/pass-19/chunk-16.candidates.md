# Phase 2 candidates — chunk-16

## trashcans   [anchors: support/automation-QoL (1)]
- LEAVE — pure void-sink; voiding is anti-scarcity by nature in a scarcity-driven pack. No item/fluid output, no method to route through. Weaving it would reward deleting byproducts rather than trading them — a design defect, not a plus. One-system support role is appropriate here.

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats grab-bag (rare hat) | via: loot-seed (boss/structure loot tables) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare cosmetic hats as a prestige sink — players buy/sell them for coin, giving Numismatics a vanity drain. Seed drop into boss/dungeon loot tables so hats circulate without inflating.
- from: simplehats grab-bag | via: loot-seed (bounty board reward) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty→coin payout, not coin→cosmetic; hats as a bounty *reward* is unorthodox and mis-uses the motif. M-09 as a trade-good sink is the cleaner routing.

## revelationary   [anchors: support/progression-gating library (1)]
- LEAVE — pure code library (advancement-gated block visibility API); 0 items/blocks/loot. Nothing to route. Its value is expressed through the mods that depend on it (e.g. Occultism otherworld reveal). No coherent independent weave.

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — client-only windowing option; 0 items/blocks/loot, no server-side presence. Zero content surface.

## letsdocompat   [anchors: survival (1)]
- from: letsdocompat food-tag unification (leafy_green, foods) | via: config-tie / tag-merge | to: survival (food-web coherence across Let's Do + Farmer's Delight + Farm&Charm) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the compat mod IS the M-12 processing-chain-pull across the food cluster; its c:foods/leafy_green tag seeds interop that makes crop outputs fungible across all cooking stations.
- REWORK: current anchor is bare "survival (1)." The M-12 food-chain-pull across Let's Do/FD/Farm&Charm is an active second vector into Create (milling/mixing consume these tags), so a Create anchor is latent here. Not a new recipe — just recognizing that the food tags this mod provides are already consumed by Create:milling paths. Flag for anchor-credit review: survival + Create(2).

## create_connected   [anchors: Create (1)]
- LEAVE — pure Create-internal QoL/expansion (copycat, kinetic parts, logic). Its blocks are crafted from Create parts; no foreign material to import, no external system to feed. Already firmly anchored on Create; the support role is appropriate and deliberate.

## ohthetreesyoullgrow   [anchors: support/worldgen-library (1)]
- LEAVE — pure sapling-growth framework library; 0 blocks, 0 items, 0 loot. No content surface.

## securitycraft   [anchors: support (1)]
- from: securitycraft:reinforcing (block_reinforcing_recipe) requires vanilla/modded metal | via: recipe — gate reinforcing compound behind Create-processed iron sheet or brass sheet as a required input | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: base security costs real fabricated metal — you need the Create factory running before your base is truly lockable; a natural cost progression for a PvPvE pack.
- from: securitycraft sentry / high-tier devices | via: recipe — sentry upgrade module requires a Create sequenced-assembly electronics part | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: sentries/security cameras are mid-tier utility items, not endgame flagships; M-06 is the deep-chain motif reserved for endgame keystones. Depth here would feel punishing rather than rewarding. M-05 (gate basic reinforcing on Create parts) is the right tier.
- from: securitycraft reinforced block / keycard | via: recipe — keycard reader requires a Numismatics coin or spur as a component | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Numismatics coins are the economy's output/currency, not a raw material. Using a coin as a crafting ingredient is a coin-sink, not a coin-earning weave — it doesn't advance the loop (scarcity→pressure→production→economy). REJECT; the Create-gates anchor (M-05) is sufficient.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / oat | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route farm grains through the Create Millstone → flour → bread chain; the farmstead feeds the factory's provisioning line and ties the two food worlds together with one step.
- from: farm_and_charm:butter / eggs / bacon surplus | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: animal-husbandry surplus — feed animals more, get more drops, sell the excess as traded goods; the "feed loop" becomes a production-for-trade engine naturally.
- REWORK: current anchor is bare "survival (1)." Both candidates above are STRONG and the dossier itself rates the grain-milling candidate STRONG and the economy candidate MED. These should upgrade farm_and_charm to survival + Create + economy (3) once authored — flag for anchor-count update.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. Already a 2-anchor bridge mod (colony farming/jobs + Create Stock Link storage courier). Its whole job is cross-system wiring; no new forced edge needed.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin runtime adapter; 0 items/blocks/loot, no player-facing content. Pure language plumbing.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: metal doors that didn't fit your build crush back to scrap iron + XP nugget in a Create Depot — deco surplus feeds the metal loop rather than clogging inventory. Lossy is correct: you lose some value, not a round-trip.
- from: mcwdoors wooden door variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden doors crush to planks/sticks in vanilla; an additional Create crushing step for wood is redundant and adds no value to the scarcity loop. Only metal variants warrant M-04 here.

## sky_whale_ship   [anchors: survival (1)]
- from: sky whale loot chests | via: loot-seed — seed Aeronautics structural or fuel component into whale-back loot tables | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales are a natural aeronautics destination — an airship crew that raids a whale's back finds a piece of structural alloy or hull material they couldn't otherwise easily source; the loot justifies building a ship to reach them.
- from: sky whale loot chests | via: loot-seed — seed a Numismatics coin cache (bounty-raid payoff) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales as a bounty target — bring back proof-of-raid (rare item from chest) to a bounty board and earn coin; the aerial hunt feeds the player economy.
- from: sky whale loot chests | via: loot-seed — seed a magic reagent (Ars source_gem or Occultism essence) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: sky whales are not organically "magical" entities — they're whimsical-adventure set-pieces. A magic reagent drop would feel arbitrary rather than thematically coherent. M-23 (aeronautics) and M-14 (economy bounty) are the right pairings; magic loot does not survive the tone-fit check.

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure painting-selection UI; 0 items/blocks/loot. No content surface to route.

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial distillery's output is luxury liquor — a scarce, multi-step Create product that commands real coin; taverns and traders want it, closing the production→economy loop elegantly.
- REWORK: existing anchors (Create + survival) are sound. The M-09 economy candidate is STRONG per the dossier itself; once accepted this becomes Create + survival + economy (3). Flag for anchor-count update after authoring.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen API/library; 0 items/blocks/loot. No player-facing content surface.

## byzantine   [anchors: survival/colony (1)]
- LEAVE — pure MineColonies schematic/style pack; 0 items/blocks/loot. Its "weave" already routes through MineColonies entirely. No independent second anchor coherent.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds loot chests | via: loot-seed — seed a coin cache (Numismatics cog/spur) into stronghold chest loot tables | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: strongholds are a major delve destination; finding coin rewards among the loot signals that dungeon-running is profitable, feeding it into the broader economy loop without breaking vanilla feel.
- from: betterstrongholds loot chests | via: loot-seed — seed a Create-gated boss-key component (e.g. an alloy fragment) in deep stronghold rooms | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: strongholds are not boss encounters — they're exploration spaces. M-15 is the boss-key motif (reserved for boss drops gating complex tech); seeding a "tech key" in a random chest bypasses the boss-drop exclusivity contract. REJECT; the economy loot-seed (M-08) is appropriate and sufficient.

## kiwi   [anchors: support/library (1)]
- LEAVE — Snownee modding library (registration helpers, GUI/font utilities); 0 items/blocks/loot. Pure developer plumbing.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — data-driven structure-generation framework; 0 items/blocks/loot. Pure worldgen plumbing.

== CHUNK COMPLETE ==
