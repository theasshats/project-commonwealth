# Phase 2 candidates — chunk-08

## spawn   [anchors: survival (1)]

Existing connections: anchored to survival via FD cooking/cutting. Has a registered method `spawn:casting_net_clam`. The dossier flags M-09 (luxury→coin) and M-12 — M-09 is retired and must not be proposed.

**Candidate 1 — clam/crab/seafood → Create milling / FD cutting chain (M-12)**
Power-read: clams and crabs are everyday ambient drops, not progression gates. A light additional step (milling clam shells into shell dust, or cutting crab into crab meat then cooking) advances the food chain without over-costing a common drop. Theme: seafood → industrial food processing reads naturally in a Create pack (think cannery). Red-team: milling a clam shell for dust is plausible only if that dust has an onward use (seasoning, fertilizer); without a downstream the step is noise. Verdict: accept the food-chain routing (FD/Create milling → cooked seafood → diet groups), flag that the intermediate must connect to something else to avoid a dead end.
- from: spawn:clam / spawn:crab drop | via: farmersdelight:cutting → farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spawn's crabs and clams become raw protein for Farmer's Delight cutting boards and cooking pots, broadening the Protein and Grains diet groups

**Candidate 2 — clam shell → create:milling for shell-meal (M-12 → survival/Create)**
Power-read: everyday drop. A light Create-milling step (clam shell → shell-meal/calcium dust) as a crop fertilizer or cooking additive would thread Spawn into Create. Red-team: shell-meal as a fertilizer has zero demand signal in this pack (no crop-fertilizer mechanic is established). Without a confirmed downstream use this is an invented edge, not a loop-advancing weave.
- from: spawn:clam shell | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: no confirmed downstream use for shell-meal/calcium dust in the pack; would be a dead-end branch, not loop-advancing

**Candidate 3 — date-palm wood → create:crushing recycle (M-04)**
Power-read: everyday deco wood. Theme: all mod deco woods are candidates for M-04 recycle. Red-team: EveryComp already generates cross-mod variants; recycling date logs back to sawdust/planks is trivially coherent.
- from: spawn:date_log / date_planks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Date-palm timber from new biomes crushes back to sawdust/wood pulp in Create, closing the resource loop on a renewable wood

**Candidate 4 — seafood drops as Bountiful board objectives (M-26 consumption sink / M-34 combat-route supply)**
Power-read: everyday. Bountiful boards can request specific items; seafood/critter drops are clean daily-repeatable objectives. Red-team: this is a config/data lever, not a recipe edge — but it qualifies as M-26 (consumption sink that renews demand). Economy link via demand-gating, not a bare sell.
- from: spawn:crab_claw / clam / angler_fish | via: bountiful decree objective pool | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bountiful boards list crab catches and clam harvests as daily objectives, creating repeating demand for fishing/marine output and tying Spawn into the economy's bounty loop

REWORK: existing link (FD cooking/cutting) is sound — no rework needed. The dossier candidate M-09 (luxury→coin) is correctly dead on arrival given the retired status.
OK — existing FD connection sound; three new candidates above advance the loop.

## betterclouds   [anchors: support/client-visual (1)]

Zero items, zero blocks, zero loot, client-only volumetric cloud renderer. No content surface whatsoever.
- LEAVE — pure client-side renderer; no items/blocks/loot; zero material surface; any edge would be invented noise.

## sereneseasons   [anchors: survival (1)]

Serene Seasons is the pack's priority survival lever (per WEAVE-LEDGER M-16: "Serene Seasons is a priority survival lever; want more of these"). It has a season_sensor block, a calendar item, and a loot=yes tag. The dossier flags M-09 (retired) as the economy candidate — must not be proposed. The real candidates are the M-16 motif (seasonal reagent) and the sensor→Create logic link.

**Candidate 1 — season_sensor → Create gearshift/contraption automation (M-16 + Create production)**
Power-read: the season_sensor is a redstone block — everyday, available once you know about it. Routing it into Create's shaft gearshifts or analog levers to flip automated farm configurations per season is exactly the loop: seasonal scarcity → Create automation adapts → production shifts. Theme: a Create farm that auto-switches crops when the sensor fires a new season signal is textbook Create-pack play. Red-team: this is a config/contraption design, not a recipe edge — but the delivery is `via: config tie / Create contraption logic`, which is a valid delivery mechanism. The motif is M-16 (seasonal reagent as a gating input to a Create process — here the gating is automated contraption switching, not a recipe ingredient per se). Strictly M-16 is "seasonal crop/material feeds a machine"; the sensor-as-redstone-signal to switch a contraption is slightly adjacent. However: a cleaner M-16 read is that out-of-season crops produce much less, so a player must time planting to season — the sensor just makes that timing automatable via Create.
- from: sereneseasons:season_sensor (redstone output) | via: Create contraption redstone/gearshift | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wire the season sensor to Create gearshifts so an automated farm contraption switches its crop rotation when the season changes — the calendar forces production planning

**Candidate 2 — seasonal crop scarcity as Bountiful demand gates (M-16 / M-26)**
Power-read: out-of-season crops are scarce (everyday when in-season, rare off-season). Pointing Bountiful Decrees at out-of-season crops makes seasonal scarcity generate economic demand — someone who has a greenhouse farm can sell warm-season crops in winter. This is M-16 threading into M-26/economy demand gating.
- from: out-of-season crops (sereneseasons fertility modifier) | via: bountiful decree objective pool | to: economy | motif: M-16 | power: everyday/scarce off-season | tone: ok | verdict: ACCEPT | hook: Bountiful boards request out-of-season produce, making a greenhouse operator the seasonal supplier — Serene Seasons scarcity becomes an economy pressure

**Candidate 3 — season-locked crop → magic ritual ingredient (M-16)**
Power-read: mid (requires knowing the season). WEAVE-LEDGER explicitly calls for more M-16 links. An Ars Nouveau or Occultism ritual requiring a spring-only bloom or autumn-harvested grain gates a magic recipe behind the seasonal calendar.
- from: seasonal crop (spring/autumn exclusive) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic ritual requires a blossom that only grows in spring — the season sensor tells you when to harvest, and a magician must time their craft to the calendar

REWORK: dossier candidate M-09 is correctly retired. No existing connections to flag. All three above are genuine M-16 extensions.

## immersivearmorhud   [anchors: client-only UI / support (1)]

Zero items, zero blocks, zero loot. Purely a visual HUD renderer for armor durability. No material surface.
- LEAVE — client-only UI with no items/blocks/loot; a display mod with zero weaving surface.

## copperagebackport   [anchors: survival (1)]

70 blocks, 81 items, loot=yes. Copper tools/armor, Copper Golem (item-sorting mob), copper deco blocks in four oxidation stages. Core material: copper ingots (c:ingots/copper — a Create staple). The dossier identifies M-04 (recycle) and M-03 (ore-doubling), plus an aeronautics Copper Golem candidate (flagged WEAK).

**Candidate 1 — copper deco/tools → create:crushing recycle (M-04)**
Power-read: everyday copper deco (lanterns, bars, chains, chests). Crushing oxidized copper blocks back to copper nuggets/raw + XP nugget is the clean M-04 application. No tone clash — Create already crushes all vanilla copper; this just extends the same pattern to the backported blocks. Red-team: the minecraft:-namespaced blocks should already be crushed by vanilla Create rules if Create covers them; only the copperagebackport:-namespaced button variants would be genuinely new. Worth confirming scope, but the principle is sound.
- from: copperagebackport:copper_button (oxidized variants) / minecraft:copper_bars / copper_chain / copper_chest | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Weathered and oxidized copper fittings crush back to copper nuggets on a Create millstone, closing the deco→materials loop on the backported copper set

**Candidate 2 — copper tools/armor → create:crushing (M-04, tool recycling)**
Power-read: everyday tools. Copper tools are weaker than iron and quickly replaced; crushing them back to nuggets gives a gentle recycle path consistent with M-04's "lossy" spirit. Red-team: vanilla Create already handles copper ingots; the tool/armor shapes are likely not covered unless explicitly added. Coherent extension.
- from: minecraft:copper_axe / copper_sword / copper_boots etc. | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Worn-out copper tools crushed in a millstone yield copper nuggets — the backport's tool tier feeds back into Create's copper economy without requiring a dedicated smelter

**Candidate 3 — Copper Golem as a low-tech item-logistics tier (M-20 / aeronautics-adjacent)**
Power-read: mid (requires copper blocks + crafting, available early). The Copper Golem routes items between copper chests — an organic item-logistics mob predating Create's mechanical logistics. Theme: it could be framed as a "pre-automation" logistics step before Create belts, reinforcing the "Create is the spine, not the only option" message. Red-team: the aeronautics link is very thin — the Golem doesn't move cargo spatially, it sorts locally. The logistics arm of economy is about *physical transport*, not local sorting. Not a clean aeronautics or economy weave; the golem is a survival/early-game QoL mob. Flagging REJECT for aeronautics framing; it doesn't advance the loop.
- from: minecraft:copper_golem_statue (Copper Golem item-sorting) | via: n/a | to: aeronautics | motif: no-motif | power: mid | tone: clash (local sorting ≠ cargo transport) | verdict: REJECT | reason: Copper Golem is a local chest-sorter, not a cargo logistics tool; forcing it into the aeronautics/logistics arm misrepresents its scale and advances no meaningful loop edge

**Candidate 4 — copper oxidation stages as Create splashing input (M-12 / Create processing)**
Power-read: everyday. Create's splashing method uses water; oxidized copper deoxidizing (via scraping in vanilla — waxing/unwaxing) could be represented as a splashing step to clean oxidized copper back to fresh copper, or inversely, splashing copper blocks to accelerate oxidation. Theme: coherent with Create's water-handling. Red-team: vanilla already has scraping with an axe; a Create splashing override for the same result is redundant unless it produces a distinct byproduct. Without a meaningful byproduct (verdigris dust? a dye?) the step is a parallel of vanilla, not an advance.
- from: oxidized copper variants | via: create:splashing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: splashing to de-oxidize copper duplicates vanilla axe-scraping without a meaningful byproduct; depth without a downstream use is not a loop-advancing step

REWORK: no existing connections to flag (mod currently at 1 anchor).

## freefbible   [anchors: support/curated-flavor (1)]

Single inert readable item. No mechanics, no loot, no recipe types. Pure novelty/joke item added by the pack maintainers as a friend-group easter egg.
- LEAVE — single inert readable item with no mechanics, no loot, and no material surface; forcing any recipe edge would be noise on a gag item.

## configuration   [anchors: support/library (1)]

Pure config-screen library. Zero blocks, items, biome modifiers, loot. No player-facing content whatsoever.
- LEAVE — genuine zero-content code library (config-screen framework); no items/blocks/loot; weaving is impossible.

## jade   [anchors: client-only UI / support (1)]

Zero blocks, zero items, zero loot. Pure informational HUD overlay. No material surface.
- LEAVE — client-only informational overlay; zero items/blocks/loot; no weaving surface exists.

## netmusic   [anchors: support/QoL-flavor (1)]

4 blocks, 6 items, loot=yes (though loot=yes on a flavor mod likely means it can spawn in world). Already routes music_cd through `touhou_little_maid:altar_recipe_serializers`. Primary surface: music players, CD burner, computer, megaphone. The dossier flags LEAVE — let's verify by power-reading if any edge exists.

Power-read: the items are cosmetic audio devices. The music_cd is NBT-encoded cosmetic content. The loot=yes flag is interesting — if netmusic items appear in loot tables they could be a discovery reward. But the loot surface is probably just that the mod is "loot-capable" by architecture, not that it seeds tables with music gear.

Red-team against any weave: the mod's content is fully cosmetic audio. A "jukebox plays ambience in your Create factory" link is cultural (a player would understand it) but it's not a loop-advancing weave — it doesn't advance scarcity→pressure→production→economy. There's no material to route. The TLM altar connection already gives it a second-mod touch point, making it arguably 2-mod connected even if not 2-system connected. However, the altar touch is also cosmetic (the music_cd being crafted through TLM is still a flavor item).

Candidate: could the music_cd be a trade good — a specialized craftsman burns custom CDs for other players, a service-for-hire moment? That's M-33 (service-for-hire labor) — the CD burner requires knowing how to set up the computer/URL, which is player skill. Red-team: this is vanishingly thin as a loop mechanism; any player can make any CD with the same steps, so there's no specialization pressure. The "knowledge" is trivial. REJECT.
- from: netmusic:music_cd | via: player-operated CD burner + custom URL knowledge | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: CD burning requires no meaningful specialist skill or material gatekeeping; any player can replicate it with the same trivial steps — no real specialization pressure, no loop advancement

LEAVE — flavor/audio mod; the TLM altar already connects it to one method; all remaining surfaces are cosmetic audio with no loop-relevant material to route. Any forced edge would be invented noise.

## mysterious_mountain_lib   [anchors: support/library (1)]

Zero blocks, zero items, zero biome modifiers, zero loot. Pure code library (base classes, FoodInfo compat, registry helpers) for MMF-Group mods.
- LEAVE — genuine zero-content code library; no blocks/items/loot; not even a thin player-facing surface exists.

## create_pattern_schematics   [anchors: Create (1)]

Zero blocks, 3 items (pattern_schematic, empty_pattern_schematic, pattern_schematic_and_quill), no loot, no registered recipe types. Pure Create build-automation tooling — tiles a schematic infinitely. The dossier correctly flags LEAVE.

Power-read: the pattern schematic items are build-automation tools, not production goods. They consume no foreign materials and produce nothing tradeable. Red-team for any weave: these are specialist design tools for large-scale contraption builders. Could they be an economy service? A player who builds a pattern schematic library for hire (M-33 service-for-hire) is a stretch — the schematic itself holds no material value, and the knowledge of how to set one up is trivial.

Could the items be gated behind Create progression (M-05 native-method gating)? They're already Create-internal tools. Making them require a boss drop to craft (M-15) would be a tone clash — they're workflow tools, not power gear. REJECT any forced edge.
- from: create_pattern_schematics:pattern_schematic | via: any | to: any | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: build-automation workflow tool with no tradeable output or material surface; any gate/weave would be arbitrary friction on a workflow item

LEAVE — Create-internal build tooling with no foreign material surface, no loot, and no loop-advancing potential; the dossier's LEAVE is confirmed.

## illagerinvasion   [anchors: survival (1)]

2 blocks, 24 items, loot=yes. Key drops: hallowed_gem (Invoker boss), illusionary_dust, platinum_chunk, horn_of_sight, lost_candle. Imbuing Table = copper multiblock that uses enchanted book + hallowed_gem to push enchantments past vanilla cap. The dossier identifies strong candidates M-02 + M-05/M-11 for magic, and M-08 for economy. One note: M-08 (player-minted currency) requires a Create-processed → numismatics route; platinum_chunk is the clearest candidate.

**Candidate 1 — hallowed_gem → Ars Nouveau imbuement or Occultism ritual as arcane reagent (M-02 + M-10)**
Power-read: endgame — hallowed_gem drops only from the Invoker boss (raid content). Depth should be deep/multi-step. Theme: Hallowed Gem carries a "consecrated" or "sacred" aura (from an Invoker's magic); routing it through Ars imbuement as an arcane catalyst (e.g. powering an arcane imbuing that produces a high-tier Ars spell component) is tonally coherent — illager magic fusing into mage magic. Red-team: does the enchantment-boosting function of the Imbuing Table already claim this item, making it redundant as a magic reagent? Not redundant — the Imbuing Table is a standalone multiblock that uses the gem to push enchant levels; separately routing the gem as an Ars imbuement catalyst for a different output (an arcane component, not an enchant) is a parallel use without conflict. The gem is boss-gated, so this would be an endgame magic unlock. Strong loop: boss drop (danger-pressure) → magic production input → magic specialist produces a locked exclusive.
- from: illagerinvasion:hallowed_gem | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Invoker's consecrated gem, infused in an Ars Nouveau apparatus, catalyzes a high-tier arcane component only the magic specialist can produce — boss danger gates a magic exclusive

**Candidate 2 — illusionary_dust → occultism:ritual as ritual component (M-02 + M-11)**
Power-read: mid (Illusioner drop from raids, not the main boss). Theme: illusionary dust from a creature of illusion feeding an Occultism ritual involving phantasmal/spirit effects is a clean lore match — spirits of illusion powering spirit magic. Red-team: is this a round-trip? No — dust goes in, a ritual output (a spirit-tier product) comes out; it's directional. A solid M-11 application.
- from: illagerinvasion:illusionary_dust | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Dust harvested from the Illusioner's phantasmal body is thrown into an Occultism ritual, conjuring a spirit component that only a magic specialist can channel

**Candidate 3 — platinum_chunk → create:crushing into a processed metal (M-02 + M-03)**
Power-read: mid-to-endgame drop (Invoker/rare). Method-pull: M-02 says "an isolated mob/boss drop is given a use as a magic/economy input." Platinum processed through Create crushing yields platinum ingot/powder — a novel metal for economy or magic use. Red-team: is platinum already covered by another mod? The dossier doesn't flag a conflict. The key question is whether platinum_chunk, once processed, has an onward use. If it's just another metal without a locked downstream, it's a dead end. The design intent is that boss drops feed locked-exclusive recipes (M-15 or M-29). If platinum becomes a required ingredient in, say, a colony-locked item, the loop closes properly.
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: Platinum dropped by the Invoker's lieutenants is crushed in a Create millstone to yield platinum dust — a refined ingredient for tech or magic recipes that only combat specialists can supply

**Candidate 4 — Imbuing Table enchant-service as economy M-33 (service-for-hire)**
Power-read: endgame (requires Invoker-boss hallowed_gem + an enchanted book + copper multiblock). An enchantment specialist who holds hallowed gems can offer over-cap enchantments as a paid service to other players. Theme: pay a combat specialist for their boss drops + the service of imbuing your gear. This is exactly M-33 — the specialist performs work on another player's materials, value flows player→player. Red-team: the mechanic is per-use (gem consumed each imbue), which naturally recycles demand. Strong loop-advancing edge: danger-pressure (raid) → combat-specialist holds the gem supply → enchant-service economy node.
- from: illagerinvasion:imbuing_table + hallowed_gem | via: service (enchant-imbuing performed for hire) | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: A raider who farms Invokers holds the only hallowed gems; other players pay them to boost enchantments past vanilla cap — the Imbuing Table becomes a combat-specialist service node

**Candidate 5 — Create crushing platinum for Numismatics coin mint (M-08)**
Power-read: endgame. The dossier flags M-08 economy as a candidate. Platinum is a plausible high-tier coin metal (more valuable than gold). Route: platinum_chunk → create:crushing → platinum powder/ingot → numismatics press → platinum coin. Red-team: Numismatics already has a coin progression (cog/spur/bevel/sprocket/crown/sun); introducing platinum as a new coin metal may conflict with the established coin tiers or fragment the currency. The currency notes in reagent-ownership specify numismatics:* coins are the player-to-player settlement medium — adding a new coin metal is a system-level decision, not a recipe edge. This is worth flagging but risks conflicting with the established settlement medium design unless platinum maps to one of the existing coin tiers via a press recipe rather than a new coin denomination.
- from: illagerinvasion:platinum_chunk | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: introducing a new coin metal risks fragmenting the established Numismatics settlement medium (cog/spur/bevel/sprocket/crown/sun tiers); the mint-mapping needs a Gate-0 decision about whether platinum maps to an existing tier or adds a new one — not a recipe edge to author in Phase 3 without that ruling

REWORK: no existing connections; mod is at 1 anchor. Candidates 1-4 accepted give it survival + magic + Create + economy anchors — strong multi-system mod.

## bountiful   [anchors: economy (1)]

1 block, 9 items, no loot. Bounty board that consumes any configured item/kill and pays out configured rewards. Fully data-driven objective and reward pools. The dossier lists M-08/M-09 for coin payout, M-09 is retired. The real candidates under the player-run economy ruling: M-26 (consumption sink), M-37 (research gate analogy), and survival via objective targeting.

**Candidate 1 — Decree objectives targeting farm/hunt output (M-26 survival demand)**
Power-read: everyday. Pointing Decrees at Serene Seasons crops, Spawn seafood, hunted meat (FD cutting targets) makes bounties reward the pack's actual food/resource production loop. The demand is renewed each board cycle. Theme: a notice-board commissioning crops/seafood is rustic-village commerce — completely coherent. Red-team: this is a config action, not a recipe edge; delivery is `via: config/data (Decree objective pool)`. Valid per the briefing's note that delivery can be "config tie."
- from: farm/hunt/fish outputs (seasonal crops, Spawn seafood, FD meats) | via: bountiful:decree objective pool config | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bountiful boards commission the pack's farm and hunt produce — a wheat harvest in winter or a barrel of crabs in summer becomes a paid job, directly rewarding survival production

**Candidate 2 — Decree objectives targeting Create-processed goods (M-26 / M-29 cross-route)**
Power-read: mid. Create-processed goods (iron sheets, brass, treated wood) as bounty objectives give the Create production route a reliable external demand signal. Cross-route: a magic specialist might commission a Create-processed reagent holder, or vice versa. This is M-29 (cross-route dependency) in its demand-gating form.
- from: Create-processed goods (iron_sheet, brass_ingot, treated_wood) | via: bountiful:decree objective pool config | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The bounty board requests Create-processed fittings — iron sheets and treated planks for a colony build — pulling the tech specialist into the economy's demand circuit

**Candidate 3 — Bounty payout in Numismatics coin (M-08 gateway, not bare coin)**
Power-read: the reward pool. Per the player-run ruling, NPC coin faucets (M-14 cut) are banned, but the question is whether a bounty board paying Numismatics coins is an NPC faucet or a player-structured demand. The board itself is player-placed and player-configured (Decrees are authored by the pack/operators); the objectives pool player-produced goods. If a player operates a board as their shop front, the coin comes from the player's configured reward — but ultimately the coin appears from nowhere (it's a reward, not taken from another player's wallet). This is the NPC-coin-faucet problem in disguise: coin entering the economy without a corresponding player-to-player transfer. REJECT as a bare coin faucet.
- from: bountiful:bounty turn-in | via: numismatics coin reward | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: bounty payout in minted coin is an NPC-style coin faucet (coin appears from nowhere, not from another player's wallet); the player-run economy ruling (#163/#240) prohibits this; the correct design is goods-for-goods bounties or coin sourced from a player's own mint

**Candidate 4 — Decree objectives targeting magic reagents (M-37 research gate / M-02)**
Power-read: mid-to-endgame. A bounty board requesting Ars Nouveau source gems, Occultism silver dust, or Iron's Spellbooks arcane essence as objectives makes the magic production chain have external demand — a non-magic player hires a magic specialist's surplus. This is an economy-demand gate (M-37 flavor: knowledge outputs have economic value even if knowledge itself is non-tradeable).
- from: magic reagents (ars_nouveau:source_gem, occultism:silver_dust, irons_spellbooks:arcane_essence) | via: bountiful:decree objective pool | to: magic | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: The bounty board commissions a batch of source gems or arcane essence — a tech player paying a magic specialist for their surplus, threading magic production into the trade loop

REWORK: existing connection is "economy (1)." The three accepted candidates above add survival, Create, and magic demand-gating — bringing it to ≥4-system reach. No existing connections to flag for rework (it had no connections, just an anchor).

## spark   [anchors: support/performance (1)]

Zero blocks, zero items, zero loot. Server-side profiler. No player-facing content.
- LEAVE — performance profiler with no items/blocks/loot; zero weaving surface; this is a diagnostic tool, not a content mod.

## trading_floor   [anchors: Create, economy (2)]

Already at 2 anchors. 1 block, 1 item (trading_depot), loot=yes. The Trading Depot automates villager trades on a Create belt. The dossier already identifies it as a Create×economy keystone for M-08 (Create-processed goods → emeralds).

REWORK check on existing connections:
- Create anchor: solid — it is literally a Create depot variant, hard Create dependency.
- Economy anchor: solid — its sole purpose is automated trade (villager → belt output).
Both connections are mechanically load-bearing, not arbitrary. OK — connections sound.

**Additional candidate — Trading Depot as cross-route dependency node (M-29)**
Power-read: mid (requires Create infrastructure + a villager hall). A Trading Depot in a Create supply chain that converts magic-specialist outputs (enchanted books via an Ars enchanting setup) into emeralds, or vice-versa, creates a cross-route dependency: magic specialists need Create logistics to run their trade. This is M-29 in its distribution-arm form. Red-team: this is more a design pattern than a new recipe edge; the depot itself has no recipe to author. Delivery: `via: design pattern / Create belt configuration`. Valid as a weave proposal (a Phase-3 action might be "configure the bounty reward / trading depot interaction so magic outputs feed the Create trade line").
- from: magic enchanted goods or Create-processed goods | via: trading_floor:trading_depot (Create belt → villager trade) | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The Trading Depot on a Create belt converts Create-processed brass or magic-enchanted books into emerald currency — a cross-route bridge where tech and magic outputs meet the trade economy without a direct recipe edge

**Additional candidate — aeronautics supply run delivering trade inputs (M-31)**
Power-read: mid-to-endgame. A Trading Depot operating at scale (bulk emerald generation) needs bulk Create-processed inputs delivered. If those inputs are heavy/regional, the aeronautics arm (trains, ships) is how you supply the depot from a remote production base. This is M-31 (logistics-required bulk good). Red-team: the logistic need emerges from how the player builds the depot setup; it's not a recipe edge. Valid as a design-lever candidate.
- from: bulk Create-processed goods (iron_sheet, brass, treated_wood) | via: aeronautics/train delivery to trading_floor:trading_depot | to: aeronautics | motif: M-31 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: A remote Create factory ships bulk iron sheets by train to a Trading Depot near the village — the airship/logistics arm earns its keep feeding the automated trade line

## gravestone   [anchors: survival (1)]

1 block (gravestone), 2 items (gravestone, obituary), loot=yes. Death-QoL utility. No recipe types registered. No crafting surface beyond the gravestone block itself. The obituary is a lore item. The dossier correctly flags LEAVE.

Power-read: the gravestone is a utility block placed on death. It has no recipe inputs/outputs for processing. The obituary is informational. The loot=yes tag likely means the gravestone can be silk-touched and placed — still no material input/output loop.

Candidate stretch — obituary as a Bountiful bounty objective (M-34 / economy)? An obituary records where and how you died; a bounty board could theoretically request "bring me proof of death at a dungeon" (the obituary). Red-team: the obituary is a personal keepsake, not a commodity; requiring players to hand over obituaries as bounty proof is thematically macabre in a way that might not serve the pack's tone, and mechanically trivial (you can die on purpose). More importantly, the delivery would be a config trick that repurposes a personal item — a forced edge.
- from: gravestone:obituary | via: bountiful decree objective | to: economy | motif: M-34 | power: everyday | tone: clash (obituary-as-bounty-proof is morbidly gimmicky; trivially farmable) | verdict: REJECT | reason: obituary has no meaningful scarcity or specialization gating; a player can die on purpose to farm them; the personal-keepsake tone clashes with being a trade commodity

LEAVE — death-recovery utility with no tradeable material surface; the only item (obituary) fails the theme/red-team test as a trade good; no loop-advancing weave exists.

## modonomicon   [anchors: support/documentation (1)]

Zero blocks, 6 items (book variants + leaflet), no loot, no recipe types. Pure in-game guidebook framework. The dossier correctly flags support role, no weave candidates.

Power-read: the book items are documentation carriers. Could Modonomicon books be gated behind progression (M-37 research gate analog)? The modonomicon book IS the progression gate mechanism — packs use it to document and gate knowledge. But the book itself has no material value; it's a wiki. No loot table makes it impossible to seed via loot-seed. Red-team: any "book as trade good" framing is invented noise; the books contain documentation, not power.
- LEAVE — documentation/guidebook framework; books are information carriers with no material surface or production value; no loop-advancing weave exists.

## createoreexcavation   [anchors: Create (1)]

6 blocks, 11 items, loot=yes. Three registered recipe types: createoreexcavation:drilling, createoreexcavation:extracting, createoreexcavation:vein. Key mechanic: datapack-defined per-chunk infinite ore veins, mined by a SU-powered Drilling Machine. The vein table is the pack's configurable join key — any ore can be added. The dossier identifies the economy/scarcity lever (M-30/M-08 adjacent).

**Candidate 1 — vein-table configured with regional scarce metals → scarcity/economy (M-30)**
Power-read: mid-to-endgame (requires drilling machine, Create infrastructure). The vein table is datapack-configurable per-chunk; if the pack's regional ores (GTMOGS veins) are mapped as createoreexcavation:vein recipes, the Drilling Machine becomes a Create-based regional extraction endpoint. This threads the scarcity foundation (regional ore-gen) into Create production (M-30: regional-scarcity gate). The Drilling Machine then has economic value — a base with a gold vein under it can drill infinite-but-slow gold, making that base's location a regional economic asset.
- from: regional scarce metals (GTMOGS ore types) | via: createoreexcavation:vein table config | to: economy | motif: M-30 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: Map the pack's regional ores into Create Ore Excavation's vein table — a base's chunk vein becomes a long-term economic asset, and the drill becomes the Create-spine equivalent of a regional mine

**Candidate 2 — drill-head items as wear-adjacent logistics cost (M-38 — MECHANISM-PENDING, REJECT)**
The drill_head / diamond_drill / netherite_drill items wear out when drills deplete; this is a natural M-38 (tooling wear) surface. However, M-38 is explicitly MECHANISM-PENDING (#239) — no degradation mechanic exists in the pack. Do not propose this as a Phase-3 weave.
- from: createoreexcavation:drill / diamond_drill | via: tooling wear | to: production | motif: M-38 | power: mid | tone: ok | verdict: REJECT | reason: M-38 is MECHANISM-PENDING (#239); no tool-degradation mechanic exists in the pack; cannot author this as a Phase-3 weave

**Candidate 3 — vein ore output → create:crushing ore-doubling (M-03)**
Power-read: mid. Vein-mined raw ores (raw_diamond, raw_redstone, raw_emerald appear in the item sample) feed directly into Create's crushing for ore-doubling. This is the standard M-03 path — it's already an established motif; Create Ore Excavation's raw ore output is a natural consumer.
- from: createoreexcavation:raw_diamond / raw_emerald / raw_redstone | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Ore drilled from a chunk vein goes straight to Create's crusher for bonus yield — the excavation machine feeds the processing spine in one continuous automation chain

**Candidate 4 — Extractor fluid output → TFMG distillation / Create processing (M-12)**
Power-read: mid-to-endgame. The Extractor pulls infinite fluid reservoirs (per the extracting recipe type). If a fluid reservoir contains crude oil (TFMG) or another processable fluid, the Extractor becomes a Create-based infinite oil well feeding TFMG distillation → diesel → Aeronautics fuel (M-13 chain). This is a three-mod chain: createoreexcavation:extracting → tfmg:distillation → M-13 fuel. Strong loop: Create spine (drilling automation) → fuel production (M-12 processing chain) → Aeronautics propulsion (M-13).
- from: createoreexcavation:extracting (fluid reservoir) | via: tfmg:distillation → aeronautics engine | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: A chunk fluid reservoir tapped by the Extractor feeds a TFMG distillation column — the Create drilling base becomes an airship fuel supply depot

REWORK: no existing connections; mod is at 1 anchor. Three accepted candidates above add economy (M-30 scarcity gate), Create (M-03 crushing), and aeronautics (M-13 fuel chain) — a four-system web through a single Create-spine mod.

## createlowheated   [anchors: Create (1)]

1 block (basic_burner), 1 item (basic_burner), loot=yes. Reworks Create heating — removes passive heaters, adds a solid-fuel Basic Burner, and introduces a "lowheated" heat tier. Consumes furnace fuel. No foreign recipe types registered; injects a heat condition into basin recipes.

Power-read: the basic_burner is an everyday early Create block — it's how you heat a basin now. The lowheated tier is a recipe heat condition, not an item. No tradeable output. The mechanic is "fuel-in → heat-out," which is a M-26 consumption mechanic (fuel is spent as upkeep), not a new recipe edge.

**Candidate 1 — solid fuel consumption as ongoing demand (M-26)**
The basic_burner consumes any solid furnace fuel — coal, charcoal, wood, etc. This makes Create heating an active fuel sink. Charcoal production (a Create + survival loop: wood → create:milling/pressing → charcoal alternative, or vanilla smelting) now has a continuous demand from every heated basin in a base. This is M-26 (consumption sink) — the fuel demand never zeroes out as long as the base runs heated basins.
- from: coal / charcoal (solid fuel) | via: createlowheated:basic_burner consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Every heated Create basin now burns real fuel — a coal mine or charcoal kiln becomes a logistics bottleneck for any automated base, threading survival resource pressure into the Create production spine

**Candidate 2 — lowheated tier enabling seasonal reagents (M-16 bridge)**
Power-read: the lowheated heat condition can be used by any basin recipe added via KubeJS. If a seasonal reagent (M-16) — e.g. an autumnal crop distilled at low heat in a basin — gets a lowheated recipe, createlowheated becomes the heat-tier bridge enabling seasonal Create processing. Red-team: this is a design note rather than a direct recipe — it says "assign the lowheated tier to seasonal basin recipes," making createlowheated the enabling mechanism. The delivery is a recipe-authoring decision; the motif is M-16.
- from: seasonal crop (sereneseasons fertility modifier) | via: create:mixing (lowheated tier) → createlowheated:basic_burner | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A cold-season distillation of winter herbs runs at "low heat" in a Create basin — the createlowheated tier lets seasonal recipes require a burner without the full heat of a furnace, making the heat tier part of the seasonal recipe vocabulary

**Candidate 3 — aeronautics/TFMG fuel as a "better" burner fuel (M-13 adjacent)**
Power-read: mid-to-endgame. TFMG diesel/gasoline are the Aeronautics fuel (M-13). Could the basic_burner accept liquid fuel (via a fluid fill input) for higher-efficiency low-heat output? Red-team: the basic_burner consumes solid fuel only per the mechanic description; there's no fluid intake. This would require the mod to support a liquid-fuel mode that it doesn't. REJECT — the mechanic doesn't support it.
- from: tfmg:diesel or gasoline | via: createlowheated:basic_burner (liquid mode) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: basic_burner consumes solid furnace fuel only; no liquid fuel intake mode exists; this would require mod capability that isn't present

REWORK: no existing connections; mod at 1 anchor. Two accepted candidates (M-26 fuel consumption, M-16 seasonal heat tier) give it survival anchors alongside Create.

