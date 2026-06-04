# Phase 2 candidates — chunk-07

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spider venom is the kind of thing a spirit-fire purges into something occult — alchemical logic a player reads immediately
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire route (M-11) is more thematically natural for a mob toxin; imbuement works mechanically but duplicates the above sink without adding a second pillar already delivered — one route is enough, avoid over-specifying
- from: undergroundworlds:temple_bricks / pyramid_bricks (deco stone set) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone-dressed dungeon brick crushes back to gravel/sand + XP — familiar Create recycling loop, reads as salvage after clearing a dungeon
- from: undergroundworlds:desert_charm / antidote_flask | via: occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: charms are utility wearables, not reagents; routing them into a ritual as consumable inputs breaks their primary purpose and reads as waste, not integration — LEAVE on the charms

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw (Crab drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare animal claw that already grants a reach effect brews naturally into Ars as an exotic reagent — combat spoils feeding spellcraft
- from: friendsandfoes:copper_golem_head / copper_button set | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copper_buttons are vanilla-style craftables that sell as decoration, not dungeon-brick salvage; crushing a crafted copper block back to nuggets is mechanical busy-work with no interesting economy — the deco has no surplus problem. LEAVE for this line.
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: imbuement (M-02/M-10) is already accepted for this drop; duplicating with spirit_fire without adding a second pillar is redundant — one route is the correct depth here

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye (portal eye, must-have) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a ritual that transmutes wither skeleton skulls + bone meal into an undead-aspected eye — stuck players get a crafting path that is costly and thematic, without making all eyes trivial
- from: endrem:nether_eye | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: nether-themed eye synthesized from blaze powder + nether wart in a ritual — demands nether progression before you can skip the loot RNG, which is the correct gating
- from: endrem:magical_eye / exotic_eye (harder rarities) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: assembling an incomplete_eye through a sequenced chain (precision glass + ender fluid step) as a costly but deterministic path for one of the hardest eyes — End access touches the Create spine
- from: endrem:corrupted_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: "corrupted" theming implies rot/curse, which clashes with Create's mechanical cleanliness; a ritual route (M-11) fits far better thematically — do not route corruption through a machine chain
- from: endrem:guardian_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: guardian-themed eye from an underwater boss already has a clear loot-drop source (Elder Guardian); making it craftable via imbuement risks trivializing guardian progression — the exploration intent must be preserved; LEAVE this eye loot-only

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (datapack-overridable) | via: numismatics coin seeding | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatics coins (cog/spur) into Catacombs and Spider Cave chests makes dungeon-crawling a direct economy activity — finding a dungeon has economic weight, not just gear weight
- from: betterdungeons loot tables | via: bountiful:bountyboard decree targeting betterdungeons mob kills | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bountiful Decrees pointing at Catacombs skeletons/zombies as kill objectives turns these dungeons into bounty-board targets — combat feeds the economy pillar directly (provisional motif)
- from: betterdungeons loot tables | via: occultism/ars reagent seeding in chests | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: dropping foreign reagents in loot tables is valid but betterdungeons has no items of its own — this is a loot-table edit that lives in a separate mod's dossier scope; the weave is real but should be attributed to the reagent-owning mod, not here. LEAVE as a note.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single-item builder QoL utility (two filter items); no material outputs, no reagent surface, no coherent 2nd pillar. Forcing a connection (e.g. "shuffle filter crafted with magic") would be pure gate-tax with no design upside.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: in-tavern cartographer villager trade | via: numismatics (coin-payout config or KubeJS trade swap) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; the cartographer trades emeralds (vanilla), so routing this to Numismatics requires a trade-table edit that is plausible but requires gate-0 sign-off on M-21. Surface for review only. (provisional motif)
- from: dungeons-and-taverns structure loot tables | via: bountiful:bountyboard decree targeting dungeon-adjacent mobs | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Dungeons & Taverns adds 100+ structures with their own mob spawners; pointing Bountiful Decrees at those structures' mob populations turns exploration into a bounty-economy activity — players are paid coin to clear the structures they would explore anyway (provisional motif — same caveat as M-14)
- from: dungeons-and-taverns loot (treasure chests in taverns/towers) | via: numismatics coin seeding | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a few Numismatics coins into tavern and tower loot tables rewards structure-hunting with the pack's actual currency — the tavern is already a commerce node, coins in the chest are thematically obvious

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt is an ore that crushes to salt dust (+ maybe extra yield) — the same Create ore-doubling logic that applies to any mineral; salt is a regional ore so crushing is a natural Create-powered extraction step
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-gated luxury) | via: numismatics (trade good / sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese takes real time in a cask — a player who invests that time has a natural sellable; cheese as a coin-generating luxury good reads as completely obvious in a commerce-driven pack
- from: expandeddelight:cinnamon (dust/crop) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling dried cinnamon bark → cinnamon dust is exactly the Millstone's job; a spice processed through the Create spine makes cinnamon an ingredient in the food-Create web
- from: expandeddelight:cranberry (crop) | via: serene seasons gating (seasonal reagent) | to: survival/Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: cranberries are a late-autumn/winter crop in real life; gating their harvest to the appropriate Serene Season gives them natural scarcity and makes cranberry-based recipes season-sensitive
- from: expandeddelight:peanut_butter / chili-based foods | via: numismatics (luxury good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: cheese wheel already covers the luxury-food→coin weave for this mod; stacking every processed food into the coin system dilutes the scarcity signal — pick the time-gated cheese as the representative, leave faster-cooking foods outside the economy weave

## createlowheated   [anchors: Create (1)]
- LEAVE — a single-block heat-mechanic tweak with no items to route, no tradeable surface, and no reagent join key. It deepens Create internally (making heat a managed resource) but offers no handle for a 2nd pillar without inventing a forced gate-tax.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — pure effect/behavior mod with zero items, blocks, or material outputs. The well-rested buff affects the player only; there is no material join key to route through any method. No coherent 2nd pillar possible.

## bountiful   [anchors: economy (1)]
- from: bountiful reward pool (configurable) | via: numismatics coin payout (set reward = numismatics:cog / spur) | to: economy (deepens existing pillar + connects to Create-minted coin) | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounties that pay out in Numismatics coins make the bounty board the primary coin faucet — every mob kill, harvest, or crafted item turned in earns spendable currency; the economy pillar becomes self-reinforcing (provisional motif)
- from: bountiful objective pool (configurable) | via: Create-processed goods as required items (e.g. iron sheet, brass ingot, processed crops) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Decrees that request Create-processed intermediates mean the bounty board pulls players toward the Create spine — the demand node for processed goods is a job board, not a market; emergent cooperation pressure
- from: bountiful objective pool | via: magic reagents as required items (ars source gem, occultism spirit solution) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty that asks for an Ars gem or an occultism reagent ties magic crafting into the economy loop — magic specialists have a direct coin-earning path that doesn't require combat
- from: bountiful objective pool | via: farm/harvest outputs from Serene Seasons crops | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is a reagent-gating motif (season-gated input → method); pointing Decrees at seasonal crops is a config/data decision, not a recipe weave — it's valid pack design but not a motif-routed weave. Record as a design recommendation, not a ACCEPT row.

== CHUNK COMPLETE ==







