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

