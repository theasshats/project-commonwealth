# Phase 2 candidates — chunk-11

## createpickywheels   [anchors: create (1)]
- from: biome/placement constraint | via: config tie | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the biome/open-air gate is a behavioral rule on Create's own machines, not a material routed through any method; no item crosses into survival — the "survival flavor" is tone, not a method-routing or loot-seed, and no motif covers a pure config-constraint weave. LEAVE as Create-internal support.
- LEAVE — pure behavioral patch on Create's water_wheel/windmill; no items, no loot, no method surface to route a 2nd anchor through. The biome-gating *feels* like survival pressure but there is no material or method vector to formalize it.

OK — connections sound (single Create anchor is honest; no forced edge warranted).

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — zero-item client-only zoom tweak; no items, no loot, no recipes, no method surface. Genuine zero-content UI library from the weave standpoint.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice comms infrastructure; no items, blocks, loot, or any method surface. Genuine zero-content support mod.

## trashslot   [anchors: support/QoL (1)]
- LEAVE — UI-only inventory trash slot; no items, no loot, no method surface. Genuine zero-content client QoL mod.

## betteranimationscollection   [anchors: support/visual (1)]
- LEAVE — client animation replacement; no items, blocks, loot, or method surface. Genuine zero-content rendering mod.

## formations   [anchors: survival (1)]
- from: generated structures | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: scattered ruins already drop loot — seed coin or bounty-key drops into Formation structure chests so players looting overworld ruins feed the economy; a discovered altar pays out coin the way a treasure pays out adventure.
- from: generated structures | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mossy altar or pedestal in the ruins contains a magic reagent or source-gem fragment, tying the exploration find to the arcane web; a ruin as a low-tier magic reagent source is coherent worldbuilding.
- from: generated structures | via: loot-seed | to: survival (danger) | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: M-15 is "boss-key unlock — boss drop gates a complex recipe"; Formation structures have no bosses and their loot is decorative, not a progression gate. Misfit motif — loot-seed treasure is M-08/M-14 territory, not M-15. Logging the reject to block future mis-application.

REWORK: existing anchor is survival (exploration) — only 1 anchor. The loot-seed candidates above are real; both M-14 (coin-seeded drops) and M-02 (magic reagent in loot) can be authored as Phase-3 datapack loot edits and would add economy and magic anchors respectively without any recipe.

## createlowheated   [anchors: create (1)]
- from: createlowheated:basic_burner | via: recipe (KubeJS gate) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: the mod has no scarce metal — it consumes generic solid fuel (coal/charcoal); the basic_burner itself is a low-tier Create accessory worth maybe iron + a Create shaft. M-08 requires a scarce regional metal → coin chain; there is nothing here to mint. Not a match.
- from: basic_burner / heat-as-resource | via: config tie (survival pressure) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the fuel-consumption cost is a Create-internal pressure, not survival pressure routed through a survival-pillar method. No motif covers "makes fuel cost real." LEAVE as Create-internal support.
- LEAVE — the mod is a balance tweak deepening Create's heat tier; it has a single block (basic_burner, made via create:mixing already inbound), no tradeable outputs, and no magic/survival/economy method surface. Stays Create anchor; no coherent 2nd anchor without inventing an edge.

OK — connections sound (single Create anchor; the mod's job is Create-internal fuel management).

## moonlight   [anchors: support/library (1)]
- LEAVE — pure shared library (API: dynamic registration, data-driven trades, virtual fluids, map markers). No player-facing items/blocks to route. The mods that depend on it carry their own anchors.

## chefsdelight   [anchors: survival, economy (2)]
- from: Cook/Chef villager food trades | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: route Cook/Chef villager meal trades through Numismatics coin pricing so the village food economy joins the pack's real currency; a chef who sells roast chicken for coin rather than emeralds is intuitive in a trade-economy pack.
- from: Farmer's Delight feasts/cooked meals (Chef trades) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort FD feasts (Roast Chicken, Honey Glazed Ham) become sellable luxury trade goods at the Chef villager; a player specializing in food production can move meals for coin — food → economy link, the loop's production→economy seam.

REWORK: existing survival + economy anchors are sound. The M-09 candidate above deepens the economy anchor by making meals explicitly coin-priced luxury goods (not just "villager sells stuff"). The M-21 candidate adds a specific currency-bridge delivery. Both build on what's there rather than forcing a new link.

## railways   [anchors: create, aeronautics (2)]
- from: railways locometal blocks (structural metal aesthetic) | via: recipe (KubeJS) | to: create (M-23 structural alloy) | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: locometal is a *decorative* metal cladding derived from Create alloys, not a structural alloy in the M-23 sense (which is about load-bearing hull plates for Aeronautics airframes). Using locometal as Aeronautics hull material is a stretch — it's carriage-cladding, not airframe steel. The existing Aeronautics anchor already covers the transport connection.
- from: railways conductor_cap / conductor entity | via: recipe (KubeJS) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: conductor caps are operational train gear, not luxury goods. The economy anchor is already solid (train logistics IS the economy's movement arm). No coherent M-09 link here.
- from: rails / track gauge variants | via: config tie / worldgen event | to: survival | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: track laying is a Create production behavior, not a survival-pressure method and no motif covers it.

OK — Create + aeronautics anchors are solid and well-supported. No new link needed; existing 2-anchor coverage is honest.

## terralith   [anchors: survival (1)]
- from: Terralith biomes (biome surface context) | via: worldgen/spawn gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is "seasonal reagent" — crop/material gated by Serene Seasons. Terralith defines biomes but contributes no items or seasonal gating of its own. The biome variety feeds other mods' conditional spawning but Terralith itself has no item/method surface to anchor M-16 on.
- from: Terralith's loot=yes flag (65 c:tags, structures spawning) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith's fantastical biomes (Skylands, Moonlight Grove, Mirage Isles) are naturally legendary destinations — seed rare coins or bounty-key fragments into Terralith's vanilla-compatible structure loot in those biomes; finding the Skylands pays out a coin beyond what vanilla drops. This is a loot-table action, not a recipe.
- from: Terralith biome-specific features | via: worldgen/spawn gating | to: magic | motif: M-22 | power: everyday | tone: ok | verdict: REJECT | reason: M-22 is lunar/celestial reagent — specific to moon-event gating. Terralith biome spawning is not moon-gated. Terralith does have a "Moonlight Grove" biome but that is a biome name, not a lunar event. No match.

REWORK: single survival anchor. The loot-seed M-14 candidate above is the minimum viable 2nd anchor — a Phase-3 datapack loot edit seeding coin into Terralith's biome-specific feature loot. Genuine, not forced.

## createadditionallogistics   [anchors: create, aeronautics (2)]
- from: flexible shaft / lazy cogwheel (kinetic infra parts) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: flexible shafts are drive-train components but they are generic kinetics infrastructure, not specifically propulsion or control surfaces for Aeronautics. M-24 targets propellers/engines/rudders/ailerons, not general shaft runs. Forcing a M-24 link here dilutes the motif.
- from: colored seats (train-seat logistics) | via: recipe (KubeJS) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: seats are craft-able infrastructure blocks, not luxury trade goods. M-09 is for high-effort consumables (wine, cheese, processed crops). A seat is not a sellable good.

OK — Create + aeronautics anchors are well-grounded (kinetics + Stock Keeper seat logistics). No forced 2nd weave needed.

## do_a_barrel_roll   [anchors: support/QoL (1)]
- LEAVE — pure client elytra movement-feel mod; no items, no loot, no method surface. Rewrites camera/flight behavior only. Genuine zero-content support mod.

## ribbits   [anchors: survival (1)]
- from: Ribbit merchant Amethyst-Shard trades | via: villager trade → numismatics (KubeJS) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: Ribbit merchants already run a coherent trade economy (amethyst shards); bridging it so amethyst shards denominate in coin (or ribbon-goods sell for coin at the Trading Floor) makes the frog village an outpost of the pack's real economy, not an isolated barter node. Players venturing into swamps to trade with frog-folk is credible exploration-economy loop.
- from: toadstool blocks / mossy-oak woodset | via: create:crushing / create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: toadstool and mossy-oak are generic decorative wood/fungal blocks. Routing them through Create crushing for gravel + XP nugget is technically valid M-04 (deco recycles) but provides no meaningful player motivation — there are dozens of deco wood sets and none of them *need* a Create tie to justify their presence. The M-04 weave here is arbitrary filler, not a purposeful loop connection. Reject.
- from: swamp goods (toadstool, swamp_lantern, giant_lilypad) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: the swamp goods are blocks/deco, not coin. M-14 is "bounty board consumes mob drops → coin payout." The Ribbit village is already a trade node; no loot-seed needed — it's a living economy node, not a dungeon chest. The M-21 candidate above is the right delivery here.
- from: ribbits:ribbit_sorcerer (sorcerer grants buffs) | via: villager trade (magic buff source) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-02 is "isolated mob/boss drop is given a use as magic/economy input." The sorcerer grants buffs but the buffs are in-world behavior, not a drop to route through a magic method. No item vector.

REWORK: single survival anchor. The M-21 (provisional) economy candidate is the 2nd anchor: bridge Ribbit Amethyst-Shard trades to Numismatics so the frog village integrates into the economy loop. Provisional motif acknowledged — surface for Gate-2 review.

## geckolib   [anchors: support/library (1)]
- LEAVE — animation/rendering API; zero blocks, zero items, zero loot. Genuine zero-content library. No weave possible or warranted.

## createnuclear   [anchors: create (1)]
- from: createnuclear:steel (c:ingots/steel) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is a scarce regional alloy (smelted from uranium-site iron + coal through Create's compacting chain); minting refined steel bars into coin gives the nuclear metalworker a natural trade good — the reactor site doubles as a steel-coin mint.
- from: createnuclear:reactor_core / reactor build | via: create:sequenced_assembly + boss-key (KubeJS gate) | to: economy | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the reactor is the pack's highest-tier power source (>2M SU); gate reactor_core assembly behind a boss drop via sequenced assembly, making the reactor a cross-pillar endgame sink (combat × Create × economy). A boss-drop gate on the most powerful generator is thematically coherent: "you must have faced the worst to harness the atom."
- from: createnuclear:anti_radiation gear (hazmat set) | via: recipe (Create pressing / mechanical_crafting) | to: survival (danger) | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: anti-radiation armor is gated behind a Create-pressed lead plate + fabric, tying radiation-hazard survival gear to the tech spine; players near uranium/reactors must build (or trade for) Create-gated gear — survival pressure demanding production output, the scarcity→pressure→production seam.
- from: createnuclear:enriched recipe type | via: createnuclear:enriched | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: "enriching" in Create Nuclear is a campfire/fire-based item processing method for irradiation, not arcane infusion. Thematically it is nuclear-industrial, not magical. Routing a magic reagent through an enriching_campfire clashes — an arcane crystal "enriched" by radioactive campfire is a tone mismatch. Reject.
- from: createnuclear:lead (c:ingots/lead) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: lead is a generic by-product metal; while it qualifies as a scarce regional ore, the steel M-08 above already establishes the coin-mint pathway for createnuclear. Two M-08 entries from the same mod inflate without adding loop diversity. Lead can be minted but the steel candidate is the flagship one; lead can ride the same mint recipe without a separate candidate entry.

REWORK: currently 1 anchor (Create). Three accepted candidates: M-08 (steel→coin, economy), M-06 (reactor_core gated sequence, Create depth + economy gate), M-05 (anti-rad armor gated on Create pressing, survival). These would take createnuclear to Create + economy + survival — three anchors, well warranted for the pack's highest-tier power mod.

## byzantine   [anchors: survival (1)]
- from: Byzantine MineColonies schematics | via: MineColonies zero_waste / composting | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: Byzantine is a pure schematic style-pack for MineColonies (no items, no blocks, just build data). There is no item surface to route through any Create/economy/magic method. Forcing a Create or economy link onto "a set of building blueprints" has no player-facing meaning.
- LEAVE — pure MineColonies style/schematic pack; zero items, zero loot. Its "weave" is entirely through MineColonies. No standalone content surface to anchor a 2nd pillar to. Genuine LEAVE for a schematic-only data mod.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate (Heavy set — high armor/toughness) | via: create:pressing / create:mechanical_crafting (KubeJS gate) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Heavy armor (near-zero knockback + high armor) is gated on Create-pressed iron plates; a player speccing into tank-build must engage the Create spine to complete the set — survival gear demanding tech production, the pressure→production seam.
- from: immersive_armors:divine_helmet (Divine set — blocks one attack/min) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Divine set's one-hit-block aura feels like a blessing; route its crafting through the Enchanting Apparatus (arcane infusion of a gold base + source gems), giving the set an explicitly magical production path and tying the magic specialist to high-end armor supply.
- from: immersive_armors:steampunk set | via: create:mechanical_crafting or create:sequenced_assembly (KubeJS gate) | to: create | motif: M-06 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: the Steampunk set is thematically Create (gears, pipes, brass aesthetic); gating it on a sequenced-assembly step or Create mechanical_crafting with brass plates is an obvious thematic lock — the Create artisan builds the steam-punk armor, not a vanilla workbench. Depth via more steps (GregTech principle).
- from: immersive_armors:bone_chestplate (Bone set — pacifies skeletons) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: armor sets are personal gear; players equip them rather than selling them. The economy anchor here is weak — M-09 is for high-effort *consumable* goods (wine, cheese) that players naturally produce in surplus for trade. An armor set has no surplus dynamic. Reject.
- from: immersive_armors:robe set | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: the Robe set is listed as light protection + magic-caster flavor. A separate imbuement path for the Robe is redundant next to the Divine/Enchanting-Apparatus candidate above — it adds a second magic-armor entry that doesn't differentiate enough. Keep one magic tie (Divine via Apparatus); a second magic armor weave dilutes both. Reject on redundancy.

REWORK: single survival anchor. Three accepted candidates: M-05 (Heavy armor gated on Create pressing, Create anchor), M-10 (Divine armor via Enchanting Apparatus, magic anchor), M-06 (Steampunk armor via sequenced assembly, deeper Create anchor). These collectively move immersive_armors to survival + create + magic — three anchors, earned by differentiating the sets along thematic lines (mundane=Create, divine=magic, steampunk=Create endgame).

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — pure behavior-only farming interaction (right-click harvest/replant); no items, no loot, no method surface. Genuine zero-content QoL mod; no weave possible.

## ars_n_spells   [anchors: magic (1)]
- from: unified mana pool (Ars source ↔ Iron's mana) | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: REJECT | reason: M-01 is already the established spine for Ars source_gem as universal magic currency. ars_n_spells implements that unification natively — it IS the M-01 carrier for the Iron's/Ars bridge. Re-listing M-01 here as a new candidate is circular; the mod already enacts what M-01 describes. The weave is present; no new candidate is needed.
- from: ars_n_spells two-tablet cross-cast ritual | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: M-11 is "drop/material → essence through spirit_fire/ritual." The cross-cast ritual here is a meta-mechanic (lets any item store a cross-mod spell), not a material transmutation. No mob drop is consumed; no essence is produced. Motif mismatch.
- from: cross-mod mana unification | via: create_new_age:energising | to: create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 is "Create FE charging bridge — charges a tool/focus/reagent." ars_n_spells has no item surface (0 items, 0 blocks); there is no tool or focus defined here that the energiser charges. The mana unification is purely a data/config mechanic. No item to energise.
- LEAVE — connective tissue between Ars Nouveau and Iron's Spellbooks; no independent item surface (0 items, 0 blocks). It IS a weave (internal magic-magic), already enacted via M-01. Adding a 2nd-pillar anchor requires an item surface that doesn't exist here. Genuine LEAVE from a weave standpoint — the mod's job is already done in the magic pillar.

OK — single magic anchor is honest for a zero-item bridge mod. The internal M-01 connection is its entire purpose.

== CHUNK COMPLETE ==
