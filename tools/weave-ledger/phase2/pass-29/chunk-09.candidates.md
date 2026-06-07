# Phase 2 candidates — chunk-09

## modulargolems   [anchors: create (1)]

- from: boss/modded metals (dragonsteel, cursium) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: defeating Cataclysm/Ice&Fire bosses yields the metals that build the best golems — constructs are earned, not just purchased
- from: ars_nouveau:source_gem (or Occultism otherstone) | via: modulargolems:golem_assemble (core upgrade slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: infusing arcane energy into a golem core via an Ars apparatus bridges construct-crafting into the magic spine; a golem with a source-gem core can channel spells
- from: Create-processed metal sheets/rods | via: create:mechanical_crafting → golem_assemble | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: dossier already records Create as the primary anchor (crushing/mechanical_crafting/sequenced_assembly inbound); adding another Create-in step doesn't add a 2nd pillar, it deepens an existing 1st anchor — no new system gained
- from: modulargolems assembled combat golem (entity) | via: service / deployed guarding | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: a golemancer rents assembled guardian golems to non-combat players to protect their colony / roost / workshop — pure player-labor trade, no NPC faucet
- REWORK: existing "Create" anchor is sound. No bad existing connections noted.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

- LEAVE — zero-surface behavior mod (no items, no methods, no loot); drop-merge is entirely generic; no content face to weave into any system.

## betteranimationscollection   [anchors: support/visual (1)]

- LEAVE — pure client-side model/animation replacement; zero items, zero methods, zero loot; nothing to route.

## samurai_dynasty   [anchors: survival (1)]

- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: samurai-world ores feed straight into the Create crushing web for ore-doubling; pulling them through the same stone-crusher as iron keeps the tech spine coherent and earns the ores a place in the production chain
- from: samurai_dynasty:akaname_tongue / yokai drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an akaname's tongue is already folklore-cursed; burning it in spirit fire to yield a necromantic essence is coherent yokai-occult flavour — the combat loop feeds the magic spine
- from: samurai_dynasty yokai drops (akaname_tongue, etc.) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (Occultism spirit_fire) is the stronger, more flavour-coherent route for these "cursed/undead" drops; doubling up with Ars imbuement on the same material is redundant — pick the better-fit method (occultism), flag this as secondary if the primary fails
- from: samurai_dynasty:steel / jade (c:tagged) | via: create:crushing + numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai-region steel and jade are regionally scarce gems; minting them through Create presses into a Numismatics coin makes the samurai zone a distinct currency-production region, driving trade between biomes
- from: samurai_dynasty structures (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding yokai-combat rare drops (boss weapon fragments, spirit stone keys) into samurai_dynasty loot tables gives combat specialists unique trade goods non-combat players will want
- REWORK: none needed — connections are proposed here for the first time (no existing cross-system connections noted in dossier). OK as a starting 1-anchor candidate.

## sable   [anchors: support/library (1)]

- LEAVE — zero items, zero loot, zero recipe surface; physics engine backend; weaving lives in the mods built on top of it (Aeronautics etc.), not in Sable itself.

## owo   [anchors: support/library (1)]

- LEAVE — pure GUI/config API library; zero player-facing surface; nothing to route.

## dynamictreesplus   [anchors: survival/worldgen (1)]

- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: desert saguaro fruit milled in a Create mill yields a cactus-pulp dye intermediate or a food paste — raw forage fed into the Create processing spine, one light step appropriate to an everyday crop
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk blocks) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega-mushroom cap blocks milled → mushroom powder, a cooking/alchemy intermediate; huge felled mushrooms become a bulk mill feedstock rather than dead end blocks
- from: dynamictreesplus:saguaro_fruit | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: a cactus fruit being an arcane reagent has no thematic grounding — the mod is naturalistic worldgen, not magical; forced and tone-clashing against the yokai/arcane reagent aesthetic of the magic spine
- from: mushroom cap blocks (bulk forage) | via: farmersdelight:cooking / extradelight:melting_pot | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: giant mushroom caps are a foraging surplus; routing them into FD cooking pots as a food ingredient gives the consumption-side a foraging pressure-valve — foragers vs. farmers, a division of labour

## formations   [anchors: survival (1)]

- LEAVE — no items of its own (template_editor is a dev tool, not a loot drop); structures are built from existing block palettes; loot=no confirmed in digest; forced recipe-edge has no content face to grab. The scatter-structure ambience is its full contribution.

## ldlib2   [anchors: support/library (1)]

- LEAVE — pure developer library (UI/rendering/sync); no player items, no loot, no recipe surface.

## cristellib   [anchors: support/library (1)]

- LEAVE — structure-config framework library; no items, no loot, no content; weaving belongs in the structure mods it supports (t_and_t, expanded_ecosphere).

## freefbible   [anchors: support/flavor (1)]

- LEAVE — single inert readable item, no mechanics, no loot; any recipe-edge would be noise.

## necronomicon   [anchors: support/library (1)]

- LEAVE — pure API/helper library; zero items, zero recipe surface.

## born_in_chaos_v1   [anchors: survival (1)]

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the gothic-dark metal ore is crushed through Create like iron — one clean step that connects the chaos-mob danger loop to the tech spine; dark-metal gear becomes a Create production outcome, not just bench-crafting from loot
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bundle of bones from chaos undead burned in spirit fire transmutes into a necromantic bone-ash reagent — thematically the cleanest possible pairing; the horror loot feeds the dark-magic spine
- from: born_in_chaos_v1:dark_metal (processed) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: bundle_of_bones is the stronger, more organic magic candidate from this mod; routing dark_metal into occultism as well feels like double-dipping the same mob-drop motif on two items. Reserve dark_metal for the Create spine (M-03) so the two pillars each get a distinct material.
- from: born_in_chaos_v1 boss drops (Pumpkinhead Staff / Soul Saber) | via: loot-seed / boss drop as gate item | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal Pumpkinhead boss drop becomes a KubeJS-gated component in a complex Create recipe (e.g. a haunted press plate or cursed sequenced-assembly part), making the seasonal combat event a tech-progression unlock
- from: born_in_chaos_v1 mob drops (dark_metal, bones, candy) | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: chaos-mob loot (especially seasonal candy and boss weapons) are drops a dedicated combat specialist farms and trades to crafters/decorators who won't fight — the combat loop is a supply route
- REWORK: OK — no existing cross-system connections to audit.

## nochatreports   [anchors: support/privacy (1)]

- LEAVE — networking/privacy utility; zero items, zero methods, zero loot; no content surface.

## create_integrated_farming   [anchors: create, survival (2)]

- OK — connections sound. Already spans Create + survival (automated poultry husbandry feeding the food chain). The M-09-tagged economy candidate in the dossier is correctly flagged as weak/retired; no new bare sell-link should be added.
- from: create_integrated_farming roost product stream (eggs/feathers/meat) | via: farmersdelight:cooking / extradelight methods | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: roost-automated egg/meat output feeds FD/ED cooking recipes that *consume* those products continuously — the roost closes the consumption loop (production → cooked food → eaten → demand renewed); this is a consumption-sink connection, not a sell link
- from: create_integrated_farming:fishing_net loot | via: loot-seed + colony | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: fishing nets auto-produce fish bulk; a MineColonies Fisherman hut is a colony route for the same goods — seeding both paths means fish/aquatic bulk is a commodity that flows player-to-player via the colony distribution mechanic, not just a bench-craft ingredient

## fzzy_config   [anchors: support/library (1)]

- LEAVE — config serialisation API; zero player items, zero recipe surface, zero loot.

## northstar   [anchors: create, aeronautics (2)]

- OK — two anchors already solid. Reviewing for new/better links and REWORK.
- from: northstar:titanium_ingot / tungsten_ingot (scarce off-world metals) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium and tungsten are obtainable only off-world (regional scarcity by dimension); a player who flies to Mars and smelts these can mint a high-value coin denomination — the rocket run is the minting specialisation, completing the economy loop from aeronautics through currency
- from: northstar:advanced_circuit | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: advanced_circuit is already produced by northstar's own circuit engraver (M-05 native-method); adding a sequenced_assembly chain on top would gate the circuit behind Create twice — over-gating an endgame item that already has appropriate depth
- from: northstar:advanced_circuit | via: KubeJS cross-recipe | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's high-tier spellbook upgrade (or an Occultism endgame ritual) requires an advanced circuit as one component — forcing the magic specialist to trade with the rocket engineer; nobody is self-sufficient at the top tier
- from: northstar:biofuel | via: createaddition:liquid_burning → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: northstar's biofuel (harvested from off-world flora) is a renewable rocket/engine fuel alternative to TFMG diesel; aeronautics can burn it, giving a non-petroleum fuel route and a reason to grow off-world crops
- from: northstar titanium/tungsten (regional dimension-locked) | via: GTMOGS region-gate consideration | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: REJECT | reason: M-30 is specifically for overworld regional ore-gen (GTMOGS biome-locked deposits); northstar metals are dimension-locked (off-world), which is a different scarcity mechanism — re-expressing this as M-30 would conflate two distinct scarcity levers. The M-08 coin-minting candidate above already captures the economic value of their rarity.
- REWORK: existing Create + aeronautics anchors are sound and well-evidenced by the made-by methods list.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]

- LEAVE — builder-utility tools with no processing surface; 30 items registered under minecraft: ns, all vanilla-crafted; no methods, no loot; a forced Create gating would be noise on consumable build assists.

## woodworks   [anchors: survival (1)]

- from: woodworks deco blocks (chests, boards, bookshelves) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood deco blocks crush back to planks + sawdust + XP nugget in a Create crusher — lossy recycling that ties Woodworks' full palette into the Create recycle web; decorators know their offcuts have a use
- from: modded wood logs (Northstar argyre/calorian, Samurai red_maple, etc.) | via: woodworks:sawmill | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Sawmill cuts exotic mod-added logs into their plank/slab/boards variants — a single method that absorbs every foreign wood type into the deco web; any mod adding trees immediately gains decoration outputs through the Sawmill
- from: woodworks:*_bookshelf / chiseled_bookshelf variants | via: occultism:ritual / ars_nouveau | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: routing bookshelves through magic methods is thematically forced — bookshelves are ambient deco, not arcane materials; the Ars "bookshelf boosts enchanting" mechanic is already vanilla-level, not a weave; clash between rustic deco tone and ritual ingredient framing
- REWORK: OK — no existing cross-system connections to audit; fresh 1-anchor candidate.

## createtreadmill   [anchors: create (1)]

- from: createtreadmill:treadmill (player-powered SU source) | via: service / player-labour | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: a specialist "treadmill operator" or maid-motor farm provides SU-as-a-service to a neighbour's Create contraption; players without the machinery can sell physical labour — the human/maid is the means of production, traded as a service
- from: createtreadmill:maid_motor (touhou_little_maid Soul Orb/Photo consumed) | via: create kinetic output | to: create | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: this is an internal Create-system interaction (TLM soul orb → SU), not a 2nd-pillar crossing; M-26 consumption applies to pressure-closing loops (food/fuel/upkeep consumed by survival systems), not just any item being spent inside Create; it doesn't advance the loop to a new node
- from: createtreadmill:treadmill SU output | via: aeronautics contraption | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: a treadmill's output is ~2 hand-cranks of SU — far too weak to meaningfully drive an aeronautics propulsion system; using it as an aeronautics drivetrain component is tone-wrong (a hamster wheel powering a spacecraft); M-24 scales with component power, and this is deliberately low-tier
- REWORK: OK — Create anchor is clear; the TLM bridge is noted as flavour, not a pillar.

== CHUNK COMPLETE ==
