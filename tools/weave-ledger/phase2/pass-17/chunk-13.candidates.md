# Phase 2 candidates — chunk-13

## miningspeedtooltips   [anchors: support/client-QoL (1)]

LEAVE — pure client tooltip-render mod; no items, no methods, no materials to route. Reading tool mining-speed is informational only. No coherent second anchor exists; any forced connection would be noise.

## ohthetreesyoullgrow   [anchors: support/worldgen-library (1)]

LEAVE — pure worldgen/sapling-growth code library; 0 blocks, 0 items, 0 loot tables. It is a dependency pulled for other mods that define trees. No material surface, no coherent second anchor. Genuine zero-content library — the correct LEAVE case.

## create_cheese   [anchors: create, survival (2)]

OK — existing connections sound. create_cheese sits squarely in the Create/survival production arm: cheese is fabricated through create:mixing/compacting for curds and then through create_cheese:maturing, which is itself an automatable Create-style station. Milk/dairy as survival food, the tiered Calendar Pages as depth, and the named cheeses as output are all coherent. No arbitrary or lore-clashing existing connections.

New weave candidates:

- from: create_cheese:cheddar (and other aged cheeses) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese takes real processing time (300–900 ticks in the Cellar + upstream Create mixing); a high-effort perishable luxury good is exactly the sell-stall trade item the economy pillar wants. Every player needs varied food (appleseed diet pressure), so the demand is real and not manufactured.

- from: create_cheese:cheese_curds (intermediate) | via: farmersdelight:cooking or extradelight:melting_pot | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: curds as an ingredient in cooked dishes (cheese sauce, fondue-style recipe) weaves the Create dairy chain into the FarmersDelight cooking method, deepening the food production route without gating basics. The Create upstream already makes curds; routing them into FD cooking is one light step that ties two mods' food spaces together.

- from: create_cheese:aged_cheese (any tier-2/3 variety) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — transmuting dairy products through arcane infusion or spirit fire is tonally incoherent; the rustic-artisanal fromagerie vibe has no magic resonance. The connection would read as arbitrary rather than "of course."

REWORK: none — both existing anchors (Create + survival) are structurally grounded and the recipes use the correct methods.

## durabilitytooltip   [anchors: support/client-QoL (1)]

LEAVE — client-only numeric durability overlay with no items, methods, or materials. No gameplay effect, nothing to route. Genuine zero-content UI layer.

## lootr   [anchors: support/QoL-loot-fairness (1)]

Lootr is a per-player loot instancing mechanic: it intercepts structure loot containers and gives every player their own independent roll. It does have loot=yes (its blocks reskin containers) but it does NOT define its own loot tables — it passes through to vanilla/modded loot tables that already exist. So the question is whether lootr itself can act as a loot-seed target.

- from: lootr (loot instances in modded structure chests) | via: loot-seed (adding weave-relevant drops to the tables lootr already passes through) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: lootr does not own loot tables — it is a delivery layer over existing tables. Seeding drops into structure loot tables (e.g. bountiful decrees, numismatics coin) is a valid Phase-3 action but it targets the *structure mods' own loot tables*, not lootr. Lootr is transparently mediating, not the target. The right action (if any) is to seed the structure mods' tables, not to flag lootr as the weave point. LEAVE as support.

LEAVE — multiplayer-fairness loot mechanic; no own loot tables, no material surface. Its loot=yes is the reskin container items (lootr:lootr_chest etc.), not loot-table content.

## appleseed   [anchors: survival (1)]

Power-read: appleseed is the pack's diet-pressure engine — zero items, zero blocks, but it re-reads the entire modlist's food items and auto-derives nutrition groups from recipe ingredients. Its output is a standing demand signal, not a craftable material. The loop: survival pressure (diet variety needed) → production demand → food-producing mods.

- from: appleseed diet-variety demand | via: config/system coupling (diet forces demand for diverse food production) | to: create (production) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the five-group diet requirement pulls on every food-producing mod in the pack — FarmersDelight, ExtraDelight, create_cheese, vinery, naturalist venison — so appleseed's pressure arm feeds directly into the Create/food production nodes. The coupling is a config/system link (no recipe needed) but it is a real loop edge: appleseed creates demand that production mods service. This is the pressure → production arrow in miniature.

- from: appleseed high-nutrition-value foods (multi-group meals, cooked game, aged cheese) | via: numismatics sell / bountiful bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: because diet variety has mechanical value (buffs withheld without it), multi-group foods are genuinely valuable goods — a cook/farmer player produces what others need for their buffs. This creates the food-as-trade-good economy link: balanced-diet pressure → demand for multi-nutrient foods → economy (sellable). Via numismatics price or bountiful objective pool.

- from: appleseed Sugars/Fruits group | via: vinery:wine_fermentation or extradelight:vat (fermented beverages give Fruits/Sugars score) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: this is a weave on vinery/extradelight, not on appleseed. Appleseed is the demand side; the processing route lives in those mods. Don't attribute the weave to appleseed as a source — it has no material or method output. Flagging for vinery/extradelight dossiers instead.

REWORK: The dossier already identifies both weave directions (demand → production, food → economy via M-09) and marks them correctly. No existing connections are arbitrary; the single survival anchor is the correct base. The system-coupling note (no new recipe needed) is accurate for the production-demand edge.

## chat_heads   [anchors: support/client-QoL (1)]

LEAVE — client-side chat UI cosmetic; renders player heads next to chat lines. 0 blocks, 0 items, no loot, no methods. No material surface. Genuine zero-content client mod.

## modulargolems   [anchors: create (1)]

Power-read: modulargolems has 308 items and a full golem-assembly system (assemble/replace_part/add_slot), already consuming Create methods (create:crushing, create:mechanical_crafting, create:sequenced_assembly). Boss-tier metals (dragonsteel, cursium) are already confirmed as golem-body materials. The mod is endgame/mid-tier; golem bodies from vanilla metals are mid, boss-metal bodies are endgame.

OK — the existing Create anchor is solid (the assembly recipes are gated on Create methods and the parts are made with create:mechanical_crafting and create:sequenced_assembly). No mis-costing or lore clash in existing connections.

New weave candidates:

- from: boss-drop metals (Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies (boss-metal tier) are gated behind killing a Cataclysm or Ice&Fire boss — combat progression drives golem power. This is M-15 (boss-key unlock): the boss drop is the gate item for the complex Create/tech recipe (the golem-assemble uses the drop as body material). The player has to fight for the best constructs, not just automate.

- from: Cataclysm/Ice&Fire mob drops (cataclysm:igneous_rock, iceandfire:dragonsteel_ingot) | via: modulargolems:golem_assemble | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: isolated boss/elite drops (M-02 mob-drop reagent sink) are given a crafting home as golem-body parts — a construct specialized for fire immunity (ice dragonsteel body) or fire damage (fire dragonsteel body). The drop isn't just vendor trash; it feeds the automaton-making route. Note: this partially overlaps with M-15 (boss-key) but M-02 is the correct motif where the drop is the *material* (not just a one-time unlock key); both can coexist.

- from: ars_nouveau:source_gem or occultism:otherstone | via: modulargolems:golem_assemble (golem-core upgrade slot) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — injecting arcane gem currency into a metallic golem-assembly workbench reads as arbitrary plumbing, not a player-coherent pairing. The golemancy here is industrial-arcane in tone but its magic hook is via Ars Nouveau's own golem system (if active), not an imbuement of a metallic golem-part. Forcing source_gem into modulargolems:golem_assemble would be a recipe-table join without narrative sense. Skip.

- from: Create-processed metal parts (create:pressing sheets, create:mechanical_crafting frames) | via: modulargolems:golem_assemble | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: this is already the existing anchor — modulargolems already uses create:mechanical_crafting and create:sequenced_assembly. Adding another Create-facing edge here adds no new system anchor; it deepens Create only (already 1 anchor). Not adding a second system. Mark as duplicate-of-existing.

- from: modulargolems golem units (assembled endgame constructs) | via: bountiful board (kill/deliver bounty) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a bounty for "deliver a Cataclysm-metal golem unit" or "have a golem defeat N mobs" creates an economy sink for the expensive assembled construct — the specialist golem-builder sells constructs (or their labor) via the bounty board. This is M-14 (bounty→drop economy) generalized to a constructed entity, routing the endgame production into the economy pillar. The player investment (boss drops + Create assembly) justifies the high reward. Via bountiful objective pool (deliver item / entity-kill counted by golem proximity).

REWORK: none — existing Create anchor is structurally sound. The mod already correctly uses create:mechanical_crafting / create:sequenced_assembly.

## betterbiomereblend   [anchors: support/performance (1)]

LEAVE — client-side render optimization (OKLab biome color blending); 0 blocks, 0 items, no loot, no methods. Pure rendering engine; no material surface.

## gravestone   [anchors: survival (1)]

Power-read: gravestone is a death-recovery utility — 1 block (the gravestone), 2 items (gravestone block-item + obituary). The obituary is an informational record. The gravestone block spawns at death and holds inventory. loot=yes is the death drop of the gravestone container, not seeded treasure.

- from: gravestone:obituary (the death-log item) | via: recipe (craft with paper/ink) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no motif fits a death-record document. No method-routing is coherent — the obituary is informational only, and making it a trade good or reagent is contrived. No-motif → reject.

- from: gravestone block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the gravestone block is a functional utility block (death recovery), not a decoration block. M-04 is for deco blocks crushing back to raw/gravel + XP nugget. Applying M-04 to a death-utility block is technically possible but semantically wrong — players would be crushed by having their grave destroyed and recycled. The tone is actively anti-player-welfare. Reject.

LEAVE — death-recovery utility with no routable material. Both candidate edges are either no-motif or anti-player in tone. No coherent second anchor.

## packetfixer   [anchors: support/compat (1)]

LEAVE — pure network packet-limit fix; 0 blocks, 0 items, no loot. Invisible infrastructure; no material surface. Genuine zero-content behavior mod.

## naturalist   [anchors: survival (1)]

Power-read: 28 blocks, 104 items, loot=yes, 4 biome-modifiers, 7 c:tags. The mod adds ~24 wildlife animals (deer, boar, bear, snakes, butterflies, fireflies, fish variants, tortoise). Key outputs: naturalist:venison, naturalist:bushmeat (food meats), naturalist:antler (bone-analog), naturalist:glow_goop (light reagent), shellstone/froglass blocks (deco stone set). The net recipe (naturalist:net) captures small critters. The dossier correctly flags M-09, M-04, and M-12 as candidates.

- from: naturalist:venison + naturalist:bushmeat (raw/cooked game meats) | via: farmersdelight:cutting or farmersdelight:cooking | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw game from the wild (venison from deer, bushmeat from boar) is processed at a FD Cutting Board into portion cuts or cooked on a stove — exactly the processing-chain pull M-12 describes. This weaves the wildlife hunting route into the food-production chain (FarmersDelight's backbone), giving naturalist meat a second home beyond simple crafting-table cooking. Everyday power: hunting is early-game.

- from: naturalist:venison / naturalist:bushmeat (cooked portions) | via: numismatics sell / bountiful bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: cooked wild game (venison steak, bushmeat chop) is a renewable hunting-route food with diet-variety value (Protein group via appleseed). A hunter specialist sells cooked game at a stall — the most natural food-trade-good in the pack. M-09 luxury-good → coin. Via numismatics price or bountiful objective ("deliver 8 cooked venison").

- from: naturalist:antler | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: antlers are an organic animal-derived reagent with no current consumer — exactly the M-02 mob-drop reagent sink. An antler as a magic infusion catalyst (Ars imbuement accelerator or Occultism spirit-fire reagent) gives the hunting route a magic-system anchor. Tone fits: organic bone/horn from wildlife feeding arcane processes is a standard fantasy trope, not a clash. Mid power (deer aren't bosses, so the ingredient level is appropriate).

- from: naturalist:glow_goop (bioluminescent firefly extract) | via: create:mixing or create_new_age:energising | to: create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: M-19 is the create:haunting (soul-fire) seam, not mixing. Glow_goop as a Create input doesn't map to any of the established Create-side motifs cleanly. There is no motif for "bioluminescent fluid as Create ingredient." No-motif → reject. Could revisit if a Bioluminescence/Glowstone processing motif were established at Gate 0.

- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a bioluminescent firefly extract refined through Ars infusion into a light-resonant magic reagent (e.g. scaling source_gem shine or powering a light-generation ritual) reads naturally. The goop has no current recipe consumer, so M-10 (arcane infusion pull) gives it a magic home. Tone: bioluminescence → light magic is coherent.

- from: naturalist:shellstone / naturalist:froglass (deco stone variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: M-04 (Create recycles deco) — shellstone crushes back to sand + XP nugget (lossy), froglass to glass fragments + XP nugget. The deco set gets a Create home without gating construction. Low-depth single-step, appropriate for everyday building material.

- from: naturalist wildlife with seasonal behavior (bears hibernate, migrating birds) | via: seasonal spawn tuning (Serene Seasons config integration) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: game meat from seasonal animals (deer active in autumn/spring, bears emerging in spring) creates seasonal demand spikes for the hunter role — M-16 (seasonal reagent / availability) applied to food supply. Hunting venison is better in hunting season; planning food stores matters. Delivery: config/seasonal spawn-weight tuning rather than a recipe.

REWORK: none — existing survival anchor is correct. The mod's connections are organic (pun intended).

## comforts   [anchors: survival (1)]

Power-read: 33 blocks, 33 items (sleeping bags + hammocks in 16 colors each + rope_and_nail). Purely vanilla-recipe wool/string crafted items. No processing methods, no magic connection, no loot tables. The dossier correctly concludes LEAVE.

- from: comforts:sleeping_bag_* (colored wool items) | via: create:item_application (dyeing) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: sleeping bags are already craftable in any color from dyed wool — adding a create:item_application dye step adds no depth, just friction on a basic QoL item. M-20 is for upgrading items with non-trivial applied parts; dyeing a blanket doesn't fit its intent ("a woven part onto a base to upgrade it"). Reject: guards against gating basics.

- from: comforts:sleeping_bag (a portable bed) | via: aeronautics airship cabin recipe | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: the framing is M-23 (structural alloy → airframe); a sleeping bag is not a structural material. Sleeping bags aboard airships is flavor, not a structural component. No motif cleanly covers "camping gear as a cabin furnishing ingredient" — no-motif territory. Reject.

LEAVE — small vanilla-recipe QoL/deco survival mod. No coherent second anchor without forcing. The dossier's conclusion holds.

## byzantine   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, no loot. Pure schematic/style data pack for MineColonies — Byzantine architectural style (domes, arches, ornate decoration). The mod's only "content" is the colony schematics that MineColonies' Builder constructs. All material consumption flows through MineColonies' building requests (vanilla/Domum Ornamentum materials), not through any byzantine-specific recipe or method.

The dossier assigns survival anchor via MineColonies colony content — reasonable, since colony building and settlement are the survival/settlement layer. However, MineColonies itself is explicitly named in SYSTEMS.md as a cross-cutting production route, so a colony style-pack is transitively anchored to production (specifically MineColonies production route).

- from: byzantine schematics | via: MineColonies building supply chain | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 (native-method gating) requires a mod's flagship item to be built *in its own machine, gated on Create parts*. Byzantine's buildings are constructed by MineColonies' Builder hut — not a mod-specific machine gated on Create. Forcing a Create-parts requirement onto a schematic-style pack would be a config/recipe authoring task in MineColonies, not a byzantine weave. Reject: wrong mod to attribute it to.

- from: byzantine colony buildings (Byzantine ornate structures) | via: MineColonies material request using Domum Ornamentum blocks | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: Domum Ornamentum blocks require crafting from raw materials; a colony building style that uses fancy blocks makes demand for them — but this is a MineColonies/Domum Ornamentum weave, not one to attribute to the byzantine style-pack. No-motif for byzantine itself.

LEAVE — pure colony style/schematic pack. All weave surfaces belong to MineColonies and Domum Ornamentum, not to this data pack. No coherent second anchor of its own.

## bountiful   [anchors: economy (1)]

Power-read: 1 block (bountyboard), 9 items (bounty contracts at 4 rarity tiers, decree, board). No loot=yes. bountiful is the pack's bounty/job-board engine. Reward and objective pools are entirely data-driven (Decrees configure which items/kills appear). Its current single economy anchor is correctly placed.

The key opportunity: reward pools can be set to numismatics coin items, and objective pools can demand any modded item or kill — connecting bountiful to Numismatics (M-14) and to every other mod's outputs as demanded sinks.

- from: bountiful:bounty payouts | via: numismatics:coin_denomination (set as the reward) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties pay Numismatics coin (cog/spur) instead of gold ingots — the board becomes a coin faucet (combat kills, item delivery → currency), binding Bountiful firmly into the Numismatics economy as its demand-side complement. M-14 (bounty→drop economy) is exactly this. The pack already has both mods; the link is a config/data edit.

- from: mob-kill bounties (Decree pool requesting monster kills) | via: bountiful:bounty (kill-mob objectives) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties requesting kills of pack monsters (Cataclysm bosses, naturalist bears, born_in_chaos hostiles) create structured demand for the combat/danger route. The mob-drop reagent sink (M-02) applies here in reverse: the combat system (survival pressure/danger) is incentivized by the economy (bounty reward) — closing the survival ↔ economy arc. The dangerous world has a monetary upside.

- from: Create-processed item delivery bounties (Decree pool requesting iron sheets, crushed ore, mechanical components) | via: bountiful:bounty (item-delivery objectives) | to: create | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties requesting Create-produced goods (iron sheet, brass casing, mechanism) turn Create production surplus into coin via the bounty board. A producer-specialist can farm bounties as a revenue stream — production → bounty → coin → economy. M-09 (luxury good → coin) generalized to processed goods. Delivery: Decree data file targeting Create item tags.

- from: magic-reagent delivery bounties (Decree pool requesting ars_nouveau:source_gem, irons_spellbooks:arcane_essence) | via: bountiful:bounty (item-delivery objectives) | to: magic | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: magic reagents as bounty items creates structured demand for the magic-production route — a mage fills reagent bounties for coin. This makes magic production economically rewarded, not just self-serving. Gives bountiful a magic anchor and gives the magic pillar an economy route.

- from: bounty board itself | via: minecolonies building (colony-placed bounty board) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no motif covers "a block placed inside a colony building to extend its function." This is a theming desire, not a method-routing. No-motif → reject.

REWORK: existing single economy anchor is correct. The mod lacks a second anchor — all four ACCEPT candidates above work toward adding create / survival / magic as second/third anchors via config/data Decrees and reward-pool targeting.

## knightlib   [anchors: support/library (1)]

Power-read: 1 block (knightlib:great_chalice), 6 items (empty_grail / filled_grail / great_chalice / great_essence / small_essence / homunculus), loot=yes. However, the dossier clearly states these items are dormant without Knight Quest, which is NOT in the pack. The loot=yes is structural (the library registers its data) but the content is inert here.

- from: knightlib:great_essence / knightlib:small_essence | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the dossier explicitly states "no Knight Quest in this pack means the chalice/grail content is unused; do not weave dead items." The essences have no acquisition path (no Knight Quest to drop/generate them) — weaving an item with no source is phantom plumbing. Reject: weave dead items only when the dependent mod exists.

- from: knightlib:homunculus | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: same as above — homunculus is a Knight Quest mechanic, inert in this pack. Plus occultism's spirit_fire/ritual already has a defined sink (occultengineering). Phantom plumbing.

LEAVE — library with dormant content (Knight Quest not in pack). The items exist in JARs but have no acquisition path. Do not weave items without a source.

## owo   [anchors: support/library (1)]

LEAVE — pure UI/config/networking code library; 0 blocks, 0 items, no loot, no methods. Developer infrastructure; no material surface. Genuine zero-content library.

## ldlib2   [anchors: support/library (1)]

LEAVE — modding infrastructure library (UI/rendering/sync); 0 real items (2 entries are dev/test blocks, not player content), no loot, no methods. Required dependency for tech mods; nothing to weave. Genuine zero-content library.

## trashcans   [anchors: support/automation-QoL (1)]

Power-read: 4 blocks (item_trash_can, liquid_trash_can, energy_trash_can, ultimate_trash_can), 4 items (same), loot=yes (the blocks drop their item form). Void blocks accepting items/fluids/FE. The dossier correctly flags the scarcity tension: voiding is anti-economy by nature.

- from: trashcans:item_trash_can | via: recipe (requires Create-processed parts — brass casing, iron sheet) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gating the trash cans behind Create-processed components (a few steps of material processing rather than raw iron) doesn't make voiding harder to use, but it ties a utility block into the Create production chain. Mid-power: these are useful automation tools, not basics. M-05 (native-method gating) applied lightly — the trash can's construction requires Create, even if its operation doesn't. This is appropriate given the scarcity-pack concern about trivially voiding byproducts.

- from: trashcans:ultimate_trash_can | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ultimate trash can (voids items + fluids + FE) is genuinely an endgame convenience tool — gating it behind a sequenced-assembly chain (an incomplete_trash_mechanism intermediate) makes acquiring the most powerful void sink a Create endgame task. This is M-06 (sequenced-assembly keystone) applied appropriately: only the top-tier version gets the deep chain, not the basic cans. Keeps the scarcity tension by making total-void convenience expensive.

- from: trashcans void blocks | via: economy (sell surplus → waste less) | motif: M-09 | verdict: REJECT | reason: trash cans are the antithesis of the economy loop — they void value instead of circulating it. An explicit economy weave here (e.g. "sell trash-can output as coin") would contradict the pack's scarcity model. The right stance is that a scarcity pack should gate or tax the void, not reward it. Reject.

- from: trashcans:liquid_trash_can | via: require a specific scarce liquid-handling part | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: this is covered by the first ACCEPT above (Create-gated construction); a separate liquid_trash_can-specific recipe edge is redundant. Reject as duplicate-coverage.

REWORK: The dossier notes the scarcity-pack concern ("don't make it trivialize byproduct value") but hasn't flagged a concrete remedy. The ACCEPT candidates above propose the remedy: gating construction behind Create parts (M-05) and making the ultimate version a sequenced-assembly task (M-06). This is a weak spot in the current design — trash cans currently are vanilla-cheap and the scarcity note is unacted-on. Flag for recipe-authoring in Phase 3.

## almostunified   [anchors: support/recipe-graph (1)]

Power-read: 0 blocks, 0 items, no loot, 1 biome-modifier (likely spurious/auto). almostunified is pure recipe-graph infrastructure — it picks dominant items per c: material tag and rewrites recipes. Its "content" is the priority list (config) and the unified tag set. Critical CLAUDE.md gotcha applies: never unify galosphere:*silver* as c:ingots/silver (galosphere "silver" is actually palladium).

- from: almostunified priority list | via: config — adds/removes material unifications | to: create | motif: no-motif | verdict: REJECT | reason: almostunified operates ON the recipe graph, it doesn't add a system anchor. There is no motif for "the unifier itself gains a system anchor" — it's foundational infrastructure, not a content node. No-motif.

LEAVE — recipe-graph plumbing; no content to weave. The galosphere palladium gotcha must be respected: any unification pass must exclude galosphere:*silver* from c:ingots/silver. This is the mod's only notable design constraint, not a weave.

== CHUNK COMPLETE ==

