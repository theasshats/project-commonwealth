# Phase 2 candidates — chunk-10

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — zero-content client display mod (borderless fullscreen option); no items, no blocks, no material surface, no loot. Pure windowing QoL; no weave is possible.

## create_cheese   [anchors: Create, survival (2)]
- REWORK: dossier 2nd-anchor candidate cites M-09 ("aged cheese sellable for coin") — M-09 is retired; bare sell link is the ambient endpoint, not a weave. Drop that candidate.
- from: create_cheese:maturing (aged cheese output) | via: create_cheese:maturing → colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists demand provisioned food; aged cheese is a prestige food the colony Cook or Tavern requests, making the maturing wait a colony-supply obligation rather than optional flavor.
- from: create_cheese:brie / camembert (finished cheeses) | via: farmersdelight:cooking or extradelight:feast | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: aged cheeses as a cooking ingredient in FD recipes (cheese toast, fondue) pulls them into the diet-variety chain — another food group covered by a processed output.
- from: create_cheese:maturing (aging station, generic tag-based output) | via: M-35 maturation | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cheese Cellar IS the canonical maturation method (M-35 explicitly cites create_cheese:maturing); any other mod's ageable item can be routed through it, making cheese specialists the aging-service provider.
- OK — existing Create+survival anchors sound; three new links accepted above (M-28, M-12, M-35).

## txnilib   [anchors: support/library (1)]
- LEAVE — pure developer code library; 0 items, 0 blocks, no material surface, no loot. Nothing to weave.

## kubejs   [anchors: support/modpack-tooling (1)]
- LEAVE — the scripting engine that authors weaves; not itself a weave target. No items, no blocks, no game content.

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — client-only HUD display (armor durability icons); 0 items, 0 blocks, no material, no loot. Pure visual overlay; no weave surface.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical caps (effect-bearing) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a deadly or mythical mushroom (amanita, death cap) transmuted through spirit-fire into an occult essence — dark-organic material sinking into the ritual web makes thematic sense; the cap's deadly effect reinforces the eldritch cost.
- from: mushroomquest common edible caps | via: farmersdelight:cooking / extradelight:oven or mortar | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mushrooms as a cooking/processing feedstock (mushroom soup, sautéed caps, mortar-ground spore powder) slots naturally into the FD food chain and satisfies another diet group — fungi-Protein or Vegetable.
- from: mushroomquest rare foraged caps | via: emergent trade (M-34) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mythical shrooms are biome/region-locked (Mushroom Island); a foraging specialist who knows the biome supplies them to magic users who need the reagent, creating a combat-adjacent supply trade (M-34 is the supplier side of scarce-source items).
- from: mushroomquest:resin_orb | via: create:milling or occultism:spirit_fire | to: Create/magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Resin orb is an unusual drop from stumps — routing it through spirit-fire into a binding essence (occult glue/catalyst) gives it a concrete magic use and avoids it being orphaned.
- from: mushroomquest rare cap → sellable luxury | via: bare sell | to: economy | motif: — | verdict: REJECT | reason: M-09 retired; "sell rares for coin" is the ambient endpoint, not a demand-gating weave. The M-34 trade link above covers the economy angle properly.
- REWORK: dossier candidate "economy via Numismatics shopkeeper" cites M-09 (retired) — drop it; replaced by M-34 above.

## railways   [anchors: Create, aeronautics (2)]
- REWORK: dossier says "no coherent magic/economy/survival routing without forcing" — check for M-29 cross-route or M-31 logistics.
- from: railways locometal blocks (bulk structural building material, 617 block variants) | via: emergent logistics demand | to: economy/aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk locometal and track goods are heavy construction stock; trading them at scale across the server map is naturally a train/ship cargo problem — the mod's own output becomes a reason to use the logistics arm it extends (self-reinforcing loop).
- from: railways:conductor_cap (conductor entity mechanic) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a conductor NPC can run automated cargo routes for other players (remote-redstone + toolbox carrier); a railways specialist offers "I'll run your shipment" as a contracted service, making train-operation a player labor offering.
- from: railways track/boiler construction | via: create:mechanical_crafting + sequenced_assembly (already inbound) | to: Create | motif: — | verdict: REJECT | reason: already captured by the existing Create anchor (these are the inbound weaves already recorded); not a new link.
- OK — existing Create+aeronautics anchors sound; two new links accepted (M-31, M-33).

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API library; 0 items, 0 blocks, no loot, no game content. Invisible infrastructure; no weave surface.

## occultism   [anchors: magic (1)]
- from: occultism:spirit_trade (summoned spirit trader) | via: occultism:spirit_trade mechanic | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a bound spirit acts as a supernatural merchant — players run spirit-trade as a service, brokering otherworld goods (iesnium, rare essences) to non-magic players; the demon is the labor, the magician is the specialist.
- from: foreign mob/boss drops (via c:tag intake) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: foreign drops (Cataclysm boss relics, Alex's mobs drops) burnt in spirit-fire yield djinni/afrit essences — the canonical drop-sink that funnels combat loot into the magic web.
- from: occultism:crushing (ore-doubling) | via: occultism:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Occultism crushing provides a parallel ore-doubling path alongside Create:crushing; a magic specialist offers crushed ore → player buys processed ore from them instead of running their own Create crusher.
- from: occultism:dimensional_mineshaft (passive ore mining) | via: M-18 spirit logistics | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Djinni mines a void dimension passively; this is magic-as-logistics (ore acquisition without surface extraction), feeding the economy with materials the summoner can trade — the spirit is the logistics arm.
- from: occultism:silver_ingot (c:ingots/silver — real silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: occultism's real silver is a regional magic ore (iesnium/silver veins); processed via Create into a silver plate and then minted into coin by a Numismatics press, it gives the magic pillar a controlled coinage route — the magic specialist controls the silver supply.
- from: occultism:datura (crop) | via: M-16 seasonal reagent | to: survival/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: if Datura (belladonna) grows only in specific seasons (spring/summer Serene Seasons), its availability gates certain rituals to warm months — a seasonal pressure on the magic production route.
- from: "occultism parts via spirit_trade" → bare sell | via: bare sell | to: economy | motif: — | verdict: REJECT | reason: M-09 retired; selling essence for coin is the ambient endpoint; the M-33 service link and M-18 spirit-logistics link cover the economy angle with genuine demand-gating.
- REWORK: dossier 2nd-anchor "economy via spirit_trade — M-09/M-02" incorrectly cites M-09 (retired); the valid read is M-33 (service-for-hire) + M-18 (spirit logistics). Also, "Create: M-03 / M-05" is partially correct (M-03 for crushing) but M-05 would gate a non-occultism item behind occultism machines — not yet implemented; keep as a future candidate. Existing magic anchor is sound; accepting 6 links above adds Create + economy anchors.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client elytra-flight feel mod; 0 items, 0 blocks, no loot, no material surface. Control/camera behavior only; not an aeronautics content mod; no weave surface.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / steampunk set | via: create:mechanical_crafting or create:sequenced_assembly (M-05 native-method gating via KubeJS re-recipe) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy and Steampunk armor sets are thematically industrial; requiring Create-pressed plates + assembly table (instead of pure vanilla crafting) threads them into the tech spine and makes a Create specialist the prerequisite for the best protection.
- from: immersive_armors:divine_chestplate / robe set | via: ars_nouveau:enchanting_apparatus or ars_nouveau:armor_upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Divine and Robe sets are magical/celestial in theme; finishing them through an enchanting apparatus (infuse with source) is a sensible arcane-completion step, routing the magic-themed sets through the magic production pillar.
- from: immersive_armors:bone_chestplate / wither set | via: occultism:ritual (a wither-skull ritual step) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Bone/Wither armor thematically calls on undead power; requiring an occultism ritual step (e.g. sacrifice wither skeleton skulls at a pentacle to imbue the armor) makes the dark-themed set a magic-route product, linking combat gear to the occult pillar.
- from: immersive_armors endgame sets → bare sell | via: bare sell | to: economy | motif: — | verdict: REJECT | reason: M-09 retired; armor selling is the ambient endpoint; no demand-gating weave applies here without forcing.
- OK — survival anchor is sound; three new links accepted (M-05, M-10, M-11).

## sablecollisiondamage   [anchors: support/aeronautics-addon (1)]
- LEAVE — physics behavior addon (collision damage on Sable sub-levels); 0 items, 0 blocks, no loot, no material surface. Behavior layer on aeronautics; no content to weave through any method.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure code library (base classes + FoodInfo helpers for MMF-Group mods); 0 items, 0 blocks, no loot. Nothing to weave.

## moblassos   [anchors: survival (1)]
- from: moblassos:golden_lasso (carries livestock) | via: M-31 logistics-required bulk good (mob transport at scale) | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: shipping breeding pairs to a remote colony or farm via Aeronautics requires carrying the animals aboard — the lasso is the enabler that makes mob-cargo a viable ship/train operation; without it, moving a herd by airship is impractical. Logistics mod earns its aeronautics tie.
- from: moblassos:emerald_lasso (captures villagers) | via: MineColonies colony-stocking | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: stocking a MineColonies village with existing villagers (trader types) is a colony bootstrapping task; the emerald lasso enables it — colony-route dependency earns an economy/production tie.
- from: moblassos:hostile_lasso (captures damaged monsters) | via: occultism:ritual sacrifice | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: capturing a weakened boss-mob via the hostile lasso and delivering it live to an occultism pentacle as a ritual sacrifice (a live mob in a trapped pentacle is a genuine ritual pattern) makes the lasso a magic utility — the captor supplies live reagents to the magician.
- from: moblassos lasso crafting → bare aeronautics | via: utility synergy only | to: aeronautics | motif: — | verdict: REJECT | reason: dossier correctly flags "utility synergy, no method to route through" — the M-31 link above captures the real logistics tie; a pure "useful on ships" utility note is not a weave.
- REWORK: dossier "none — leave" for 2nd anchor was too conservative; three genuine links found (M-31, M-28, M-11) by looking at the lasso's function in the pack context rather than its item graph.

## edf-remastered-5.0-beta4   [anchors: survival/endgame-boss (1)]
- from: Ender Dragon fight (harder, multi-phase, loot=yes) | via: loot-seed — add weave-relevant dragon drops (e.g. a boss-key component or magic reagent seed) into edf's loot table | to: Create/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a harder dragon fight (500 HP, multi-phase) justifies a proportionally better reward; seeding the dragon loot table with a boss-key unlock item (required for a high-tier Create machine or aeronautics component) makes the Ender fight the gate to the top production tier — exactly M-15's role.
- from: Ender Dragon harder fight → more pressure | via: M-34 combat-route supply | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a more dangerous dragon means the End is a genuine combat-specialist zone; the boss-key drop the dragon yields is traded by combat-route players to tech/magic specialists who need it — the danger creates a supply market for the drops, running M-34.
- REWORK: dossier "none — leave" was correct for material routing but missed loot=yes (confirmed in AUTO-DIGEST-FACTS). The briefing explicitly warns: "do NOT LEAVE a loot-bearing structure mod just because it has no recipes — tag via: loot-seed." Dragon loot table can carry boss-key + economy seed drops.
- OK — survival anchor is the natural home; two new links accepted (M-15 loot-seed, M-34 combat-supply).

## cristellib   [anchors: support/library (1)]
- LEAVE — pure structure-config library (runtime datapack framework for structure mods); 0 items, 0 blocks, no loot. No weave surface; its value is enabling structure mods (t_and_t, expanded_ecosphere) that are weaved separately.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice (food, clears effects) | via: farmersdelight:cooking or extradelight:juicer | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut is a beach-biome regional food; juiced into coconut milk (extradelight:juicer) or cooked into a tropical dish, it becomes a food-processing feedstock with diet-variety value and a Create:mixing downstream path.
- from: ecologics:azalea_flower | via: ars_nouveau:dye or ars_nouveau:imbuement (as a botanical reagent) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: azalea flower is a delicate botanical with a living, nature-charged aesthetic; routing it through Ars Nouveau imbuement as a floral essence (fae/nature attunement catalyst) fits the arcane-infusion pull motif and gives the flower a magic use beyond dye.
- from: ecologics:coconut_husk (bowl substitute) | via: create:milling (into coconut fiber/byproduct) | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling the husk yields coconut fiber, a byproduct usable as a Create filter medium or packing material — industrial circularity from a food byproduct.
- from: ecologics coconut (beach-biome regional) | via: M-30 regional scarcity | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts grow only on beaches (biome-specific GTMOGS-style scarcity); a player not near a beach must trade for coconut-based dishes or coconut milk — the biome-lock turns a food ingredient into a trade good.
- from: ecologics:coconut_woodset | via: create:cutting (into planks+byproduct) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut wood is a distinct woodset; running it through Create's cutting saw gives it a Create-processed identity (sawdust byproduct, precise planks) — light single-step M-04 deco-recycles tie appropriate for everyday wood.
- REWORK: dossier 2nd-anchor candidate "M-04 — WEAK — vanilla-style woods, low priority" undersells it; M-04 is approved for deco woods and is a one-step light tie — ACCEPT at low depth. The M-12 coconut processing and M-10 azalea flower links are the stronger ones.
- OK — survival anchor sound; five links accepted (M-12, M-10, M-32, M-30, M-04).

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — pure config-library API; 0 items, 0 blocks, no loot, no material surface. Infrastructure dependency; no weave surface.

## handcrafted   [anchors: support/decoration-palette (1)]
- from: handcrafted furniture (wood/stone variants) | via: create:cutting (re-recipe a subset of high-end furniture through Create wood-cutting) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing some furniture pieces (shelves, cabinets, fancy beds) through Create's cutting-saw step means a Create-powered sawmill is needed for the best furnishings — light one-step tie appropriate for decoration-palette depth, per CLAUDE.md sanction.
- from: handcrafted:bear_trophy / trophies | via: MineColonies decoration/request system | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists request furnished housing; trophies and quality furniture pieces become colony supply requests — the colony route creates a steady consumption sink for the furniture producer's output.
- from: handcrafted furniture (deco supply at scale) | via: M-31 logistics-required bulk | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: furnishing a MineColonies town or a remote base requires bulk transport of furniture; trading a ship-load of chairs and shelves is the logistics arm doing distribution — turning handcrafted into a cargo the aeronautics economy moves.
- from: handcrafted → bare sell for coin | via: bare sell | to: economy | motif: — | verdict: REJECT | reason: M-09 retired; furniture-for-coin is the ambient endpoint; M-28 and M-31 above capture the real demand-gating economy ties.
- OK — deco-palette anchor is sound; three links accepted (M-12, M-28, M-31).

## create_better_villagers   [anchors: Create, economy (2)]
- from: create_better_villagers villager trades (emerald-denominated) | via: KubeJS trade re-denomination to Numismatics coin | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: re-denominating the villager trades to Numismatics currency (Cog/Spur) ties these professions into the pack's player-run coin economy; buying Create parts with minted coin means players who smelt regional ore into coin can spend it at a villager specialist — minted currency finds a real sink.
- from: create_better_villagers Miner profession (buys raw ore) | via: M-30 regional scarcity | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Miner profession buys/sells raw regional metals; in a regional scarcity world, a Miner villager in a copper-rich region is a sanctioned way to convert regional abundance into trade goods (a player sells excess copper to the Miner for coin, then uses coin to buy what their region lacks).
- from: create_better_villagers Create-parts trades | via: M-37 research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Create parts available only via Brass Worker (a trade) are not self-craftable without Create knowledge/progression; the villager trade is a knowledge shortcut that's legitimately gated — buying a sequenced part from a Brass Worker rather than making the machine to produce it positions the profession as a "research bypass" that the economy prices in.
- from: create_better_villagers trade → re-denominate emeralds to NPC coin | via: M-21 cut | to: economy | motif: — | verdict: REJECT | reason: M-21 is cut (NPC coin faucet, villager→coin is banned); the M-08 re-denomination above is the correct framing — players mint coin and spend it at villagers, not villagers handing out coin.
- REWORK: existing economy anchor via vanilla emerald trades is technically sound but weak under the player-run ruling — the mod trades in emeralds, not Numismatics coin, so the "economy" tag is currently an NPC-trade anchor (analogous to cut M-21). The M-08 re-denomination candidate (already in dossier) should be prioritized to make the economy anchor genuinely player-run. Flag for Phase 3.
- OK — Create anchor solid; economy anchor needs M-08 re-denomination to be pack-compliant; three links accepted (M-08, M-30, M-37).

== CHUNK COMPLETE ==
