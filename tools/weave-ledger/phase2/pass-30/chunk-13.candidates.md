# Phase 2 candidates — chunk-13

## comforts   [anchors: survival (1)]
- LEAVE — pure QoL sleeping-utility mod (sleeping bags / hammocks) built from wool+string; no processing methods, no material outputs that feed any machine or ritual; forced edges would be noise.

---

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: vanilla base blocks (logs/stone/concrete) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create sawmill bulk-producing the 847 cut variants is the exact automation story the mod wants — builders running a stone-and-wood supply chain can automate every shape without hand-crafting
- from: gravity/stone cuts (concrete-powder, sand, gravel slabs) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself flags this WEAK; recycling gravity-block deco cuts back to sand/gravel is a marginal edge with almost no practical use-case; depth/value ratio is too low

REWORK: none required — mod had only a "support" anchor with no existing cross-system connections.

---

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice (c:foods/fruit) | via: create:milling → farmersdelight:cooking / extradelight methods | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut meat milled into coconut flour → cooking recipes for tropical dishes feeds the Spice of Life variety pressure from the survival side into the Create production spine
- from: ecologics:coconut woodset logs | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla-style wood planks/logs recycled through a saw is functionally indistinct from all other woodsets; dossier flags WEAK; no scarcity angle makes it a non-weave decoration housekeeping step
- from: ecologics:azalea_flower (sheared) | via: ars_nouveau:imbuement or create:mixing | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: azalea flower has no established reagent identity; using it as an arcane input is arbitrary theme-fit — the flower has no magical lore hook in Ars Nouveau's system; REJECT without a clearer thematic peg

REWORK: none required — survival anchor was the only existing anchor.

---

## zeta   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items); pure modular framework and Quark dependency; nothing to route through any method.

---

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry:whiskey / vodka / beer (bottled liquors with status effects) | via: alcohol_industry:alcohol_boiling → output as colony-requested luxury | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies tavern requests bottled spirits as upkeep stock — the distillery specialist must run the full Create→boiling chain to satisfy colony demand, making spirits a real supply-chain good rather than a personal buff
- from: alcohol_industry:alcohol_base (fluid, assembled by Create mixing/filling) | via: M-35 aging — alcohol_boiling IS the maturation step for spirits | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: whiskey and aged spirits take real processing time in the Boiler (maturation motif); the time-cost makes them a genuine specialty good that commands a trade premium — a distillery operator specializes, not every player
- from: alcohol_industry:beer / tequila / vodka | via: sellable to player economy | to: economy | motif: bare sell | verdict: REJECT | reason: M-09 retired; "liquors as sellable luxury" is the ambient endpoint of the loop — not a weave. The M-28 colony-route above captures the demand-gating version

OK — connections sound (Create + survival both real and method-grounded); the two new links extend into economy via demand-gating, hitting the ≥2 target plus a third.

---

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — zero items/blocks, zero recipe surface; pure client-side map rendering; nothing to route.

---

## create_hypertube   [anchors: Create, aeronautics (2)]
- from: create_hypertube:hypertube_entrance / hypertube_accelerator (crafted via create:sequenced_assembly) | via: M-29 cross-route dependency — require a magic reagent (e.g. an Ars source_gem or Iron's arcane_essence) as a sub-component in its sequenced assembly | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a kinetic tube entrance that punches players across regions at speed feels like it needs a spark of arcane acceleration — requiring a source_gem in its sequenced recipe ties the transport specialist to the magic specialist, forcing a trade
- from: create_hypertube:hypertube (the tube segment) | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: hypertube is already built inside Create (sequenced_assembly already confirmed as the made-by method) — adding a second Create method step is redundant depth with no new cross-system link; the existing anchor is already solid
- from: hypertube network (player/entity transit) | via: M-31 logistics-required bulk good | to: aeronautics/economy | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: hypertubes move players/entities, not goods — M-31 is for goods that require aeronautics to transport at scale; entity transit is a different lane; the aeronautics anchor it already holds covers this conceptually without forcing the motif

OK — connections sound (Create sequenced_assembly + aeronautics/logistics role both real); M-29 cross-route adds the magic link.

---

## kambrik   [anchors: support/library (1)]
- LEAVE — zero player-facing content; Kotlin dev framework pulled as a dependency; no items, no recipe surface.

---

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — zero items/blocks; pure JSON-driven combat behavior framework; no material to route through any method. Combat feel upgrade but nothing to weave.

---

## supplementaries   [anchors: Create, survival (2)]
- from: supplementaries:flax crop (c:crops/flax, c:seeds/flax) | via: create:milling → linen fiber → rope/string → sequenced_assembly | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax is the only farmable fiber crop; milling it into thread/fiber feeds a Create string-processing chain (rope, filters, belts) — the farm specialist grows flax, the factory specialist mills it, so a domestic supply chain emerges
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement (ash as a purification reagent) or create:mixing (soap production already established) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: ash already has a grounded Create/FD role (soap = ash+lye via create:mixing per the dossier's existing inbound weaves); adding a magic role would double-spend its reagent identity without a clear theme hook — ashes as arcane purification feels grafted-on vs. its industrial soap role
- from: supplementaries:faucet + jar fluid network | via: M-29 cross-route — faucet/jar already accept Create fluid pipes; ensure a magic fluid (Ars source liquid or Iron's brew) can be stored in a jar and transferred via faucet, making supplementaries the universal fluid connector | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: this is a config/compat question, not a recipe weave — whether the faucet accepts modded fluid types is a block behavior matter; without a recipe action it doesn't qualify as a Phase-3 weave; no motif maps cleanly to "pipe works with fluid"

OK — connections sound (already deeply woven: Create haunting/mixing/splashing + FD cutting confirmed in made-by methods); M-12 flax-milling adds the explicit Create processing step that was latent.

---

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_table / *_shelf / *_cupboard (wood furniture) | via: create:cutting (mechanical saw shaping the raw wood forms) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a carpenter running the Create mechanical-saw to bulk-produce furniture sets turns the homestead build into a real production line — building materials flow off the Create spine into habitable interiors, and the furniture specialist's output is tradeable to colony builders and new players
- from: handcrafted:berry_jam_jar (food item) | via: extradelight:dynamic_jam or farmersdelight:cooking chain | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: berry jam requires berries processed through a cooking/jar recipe — already thematically grounded in food production; routes the food-adjacent item into the survival cooking web rather than leaving it as an isolated craft
- from: handcrafted furniture blocks | via: minecolonies colony builder requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colony builders legitimately request interior furnishings to upgrade building tiers — handcrafted furniture as a colony supply target gives the furniture specialist a persistent colony-demand sink (M-28 colony route), not just "sell to a player"
- from: handcrafted furniture sets | via: bare sell to player | to: economy | motif: bare sell | verdict: REJECT | reason: M-09 retired; "furniture is luxury sellable" is ambient endpoint; the M-28 colony-route above is the demand-gating version that counts

REWORK: none — mod had only decoration anchor; all new links are additive.

---

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — zero items/blocks; pure mixin/behavior patcher for Sable/Aeronautics ship compat; nothing to route through any method. Required in pack but not weavable.

---

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending (fan-ending method, Dragon Head catalyst) | via: create_dragons_plus:ending → end-infuse foreign materials (e.g. an Ars Nouveau reagent or endgame boss-drop blank) to produce endgame components | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: routing an endgame magic reagent through Bulk Ending (which needs Dragon's Breath, itself a rare End resource) creates a cross-route dependency — the magic specialist needs the Create tech specialist's Bulk Ending line, which in turn needs End resources, forcing a vertical trade chain
- from: create_dragons_plus:dragon_breath fluid | via: create:emptying / filling (already in made-by) → used as catalyst in ending process | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Dragon's Breath is an End-combat drop (harvested from the dragon fight or end islands); the survival/combat specialist farms and sells dragon_breath fluid to Create operators who need it for Bulk Ending — this is the combat-route supply completing the production loop
- from: create_dragons_plus:freezing (Bulk Freezing, Powder Snow catalyst) | via: create_dragons_plus:freezing → seasonal-gated: Serene Seasons locks Powder Snow availability to winter | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Powder Snow is a Serene Seasons winter drop — Bulk Freezing lines that need it can only run in-season, making create_dragons_plus's freezing processor a seasonal production bottleneck that naturally distributes winter specialty goods

REWORK: mod had only Create anchor; all three links are new cross-system additions.

---

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly as a required keystone component | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw is a hard mid-boss fight; using its ice_crystal to gate a high-tier Create cooling/refrigeration or a sequenced precision-engineering recipe is the exact "boss-key unlock" design pattern — you need to defeat the world to build the machine
- from: mowziesmobs:wrought gear / earthrend_gauntlet (Wroughtnaut drop) | via: ars_nouveau:imbuement or occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: wrought-metal artifacts transmuted through spirit fire yield a unique magic essence — the combat specialist sells raw artifacts, the magic specialist processes them; the transmutation sink means boss drops flow through the magic pillar, not just the tech pillar
- from: mowziesmobs:sol_visage (Barako drop, solar-power mask) | via: ars_nouveau:imbuement as an attunement step | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Sol Visage is a solar-mythic artifact; attuning it through Ars imbuement (or using it as an imbuement catalyst) makes it the premier sun-attuned reagent — unique, combat-gated, thematically grounded
- from: mowziesmobs boss drops | via: Numismatics bounty post (player places bounty for boss kills) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a non-combat player posts a coin bounty for ice_crystals or sol_visage masks; the combat specialist hunts and delivers — pure player-run combat-supply market, no NPC faucet
- from: mowziesmobs boss drops | via: bare sell | to: economy | motif: bare sell | verdict: REJECT | reason: M-09 retired; ambient sell is not a weave; the M-34 bounty version above is the demand-gating form

REWORK: none — only had survival anchor; all links are new.

---

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration (1)]
- from: dungeon/tavern loot tables (structures with trial_key / ominous_trial_key + vanilla loot) | via: loot-seed — seed minted Numismatics coin denominations into dungeon chests as discoverable wealth | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: explorers discovering taverns and dungeons find a handful of pre-minted coin — seeding currency into the world through exploration rather than production is the correct scarcity-driven injection (coins come from somewhere, and exploration is one credible source); this is player-minted currency finding its way into the world, not an NPC faucet
- from: dungeons-and-taverns-v4.4.4 structure loot | via: loot-seed — seed a Mowzie's or other boss-adjacent reagent fragment into high-tier dungeon loot | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon vaults as a secondary, non-boss route to a rare magic reagent fragment ties the structure mod into the magic web — exploration becomes an alternative grind path (slower than boss kill, faster than farming)
- from: in-tavern cartographer villager | via: vanilla emerald trade | to: economy | motif: bare sell (NPC) | verdict: REJECT | reason: NPC trade for vanilla emeralds is not a player-run economy weave; M-21 is cut; this is ambience not a weave

REWORK: none — only had survival anchor.

---

## exposure   [anchors: Create, survival (2)]
- from: exposure:photograph (developed print) | via: exposure:photograph_aging (the aging method — photographs get more valuable with in-world age, M-35) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: an aged photograph of a rare place (End city, Nether fortress, a ship in flight) commands a higher trade price than a fresh print — the aging method makes the photography specialist's time investment real, and aged prints are a player-traded collectible with no NPC sink
- from: exposure:camera construction (gold camera variant) | via: create:sequenced_assembly (already made-by) — deepening the gold camera to require a sequenced precision step beyond the base camera | to: create | motif: M-06 | power: mid-endgame | tone: ok | verdict: REJECT | reason: exposure already has create:sequenced_assembly as a made-by method for film development — adding it for camera construction too is double-dipping the same method without cross-system gain; M-06 is for multi-stage chains with new value, not adding depth to an already-anchored connection
- from: exposure:aged_photograph | via: ars_nouveau imbuement — aged photographs of magical structures as an imbuement catalyst | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: photographs as magic catalysts is a tone mismatch — Exposure is mundane analog photography; using a developed photo as an arcane reagent feels jarring and arbitrary; the analog-darkroom vibe and the arcane-apparatus vibe don't share vocabulary; tone: clash

OK — connections sound (Create sequenced_assembly + survival hobby real and method-grounded); M-35 aging extends into economy via demand-gating.

---

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:lantern_fruit (c:foods/berry, sniffer-crop) | via: create:milling or extradelight:juicer → a unique fruit juice/concentrate as a cooking ingredient | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: sniffer-recovered fruit milled into a rare tropical concentrate feeds a Create-automated cooking chain — the sniffer breeding specialist trades fruit to the production specialist who mills and cooks specialty dishes, pressure flowing through the Create spine
- from: trailandtales_delight:cheese_wheel / cheese_slice | via: create_cheese:maturing (the pack's cheese maturation method) | to: create | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: trailandtales_delight makes cheese from milk (curd→cheese_wheel) — routing those wheels through create_cheese:maturing adds an aging step that raises their value, making aged sniffer-egg cheese a specialty trade good and tying TTD's food into the Create cheese-aging specialist's production line
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea | via: M-28 colony demand — a MineColonies Tavern hut requests these drinks as restockable consumables | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient coffee and herbal teas as colony tavern supplies create persistent demand for the food specialist's rarest multi-step recipes — colony upkeep drives production without an NPC coin faucet
- from: luxury dishes (cherry cheese pie, stuffed sniffer egg) | via: bare sell | to: economy | motif: bare sell | verdict: REJECT | reason: M-09 retired; "high-effort food is naturally sellable" is ambient endpoint; the M-28 colony route captures the demand-gating form

REWORK: none — only had survival anchor.

---

## sounds   [anchors: support/client-polish (1)]
- LEAVE — zero items/blocks; pure client-side SFX overhaul; nothing to route through any method.

---

## staaaaaaaaaaaack   [anchors: support/QoL-perf (1)]
- LEAVE — zero items/blocks; item-entity drop-merge QoL; nothing to route.

---

## jamlib   [anchors: support/library (1)]
- LEAVE — zero player-facing content; Kotlin/Architectury dev library; nothing to route through any method.

---

== CHUNK COMPLETE ==
