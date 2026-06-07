# Phase 2 candidates — chunk-12

## modulargolems   [anchors: create (1)]
- from: boss-tier metals (dragonsteel / cursium / scylla drop) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best golem bodies are gated on boss-kill metals — construct-crafting becomes a reward for defeating Cataclysm/Ice&Fire bosses, not just a crafting-table purchase
- from: Ars Nouveau source_gem / occultism otherstone | via: modulargolems:golem_add_slot (upgrade slot) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: "magic core for a mechanically-assembled golem" is thematically incoherent — the golem frame is industrial metal-casting, not infused arcana; forcing an arcane material into a metal-upgrade slot feels arbitrary; M-10 applies better where the host mod IS arcane in nature; stick to M-15 boss-metal gate
- from: modulargolems golem entity (assembled combat automaton) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a combat specialist farms dragonsteel, a Create specialist mass-produces parts via sequenced_assembly, a third player buys the assembled golem — multi-route production creates cross-player dependency; the golem IS the traded product

REWORK: existing dossier candidate for magic anchor (M-10/M-11) is noted as WEAK — confirmed, reject it (see above). The Create anchor is solid (create:sequenced_assembly + mechanical_crafting gate the assembly). Economy via M-34 is new and valid.

---

## createpickywheels   [anchors: create (1)]
- from: river-biome requirement for water wheel power | via: worldgen/biome placement (behavioral gate) | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: river-biome gating makes early Create power *location-dependent* — a survival player must scout or settle near a river, anchoring the base-location decision to the world's geography; this is regional scarcity applied to power (not ore, but the same loop node)
- from: open-air / Overworld-only windmill gate | via: config-driven mechanic (no recipe, worldgen pressure) | to: survival | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: same motif as the river-wheel above — two ACCEPT rows for the same mod + motif is redundant; the biome-gate concept already captures both generators; one accept is sufficient

REWORK: dossier lists "survival via biome-gated power [MED]" — that's the right read, but labels it with no motif. M-30 regional-scarcity gate is the correct fit (power availability is regionally scarce, not a sellable — but the structural position in the loop is scarcity→pressure on the Create builder, which is exactly M-30's role). Promote to ACCEPT, assign M-30.

---

## t_and_t   [anchors: survival (1)]
- from: t_and_t structure loot chests (conquerable forts / ocean ships / village variants) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Numismatics coin denominations into fort/ship loot — players exploring T&T structures find minted coin, bootstrapping early economy circulation without an NPC faucet (coin minted from the world, not an NPC vendor)
- from: t_and_t village variants as natural trade hubs | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed pack-economy trade-goods (rare ore samples, Create components, magic reagent fragments) into T&T outpost/fort chests — making combat-to-exploration a supply route for traders; the structure becomes a combat-supply node (M-34) that distributes goods normally only craftable
- from: t_and_t village variants housing villager traders | via: villager trade table edit | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 CUT (NPC coin faucet, contradicts player-run economy ruling)
- from: t_and_t ocean sail-ships as aeronautics-aesthetic inspiration | via: thematic / no method | to: aeronautics | motif: no-motif | power: flavor | tone: ok | verdict: REJECT | reason: no-motif, purely visual; no material or method surface to weave through

REWORK: dossier note "M-09 luxury-good→coin" for economy candidate — M-09 RETIRED; replaced with M-08 loot-seeded coin (see ACCEPT above) and M-34 loot-seeded combat-supply goods.

---

## bakery   [anchors: survival (1)]
- from: bakery flour/dough processing | via: create:milling (wheat → flour) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat into flour on a millstone is the obvious Create entry into the baking chain — one light kinetic step that ties the bakery's staple ingredient to the Create spine without over-gating bread
- from: bakery cakes/tarts (high-effort finished goods) | via: emergent consumption sink | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: baked goods are consumed (eaten), so demand never zeroes — a baker's products are a repeating consumption sink that keeps trade flowing; specialty cakes are the food-specialist's economy output
- from: bakery baked goods as MineColonies cook/bakery output | via: minecolonies hut recipes | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a Colony baker's hut can produce basic bread/buns via M-28 colony route, freeing player bakers to specialize in cakes/luxury tier — cheaper basics via colony, premium tier from the player specialist
- from: bakery high-saturation cakes granting Speed+Strength buff | via: sell link | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 RETIRED; bare sell link rejected; economy connection already captured by M-26 consumption + M-28 colony route
- from: bakery crops (berries/wheat/sugar) seasonal availability | via: season-gated ingredient (Serene Seasons) | to: create/magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: strawberry cakes only craftable in spring when berries are available; chocolate tarts only when cocoa conditions match the season — seasonal scarcity makes the bakery a time-gated specialty and elevates seasonal output value

REWORK: dossier "economy via numismatics sell [M-09]" flagged REJECT (M-09 retired). Three valid economy-adjacent weaves identified via M-26/M-28/M-16.

---

## createfisheryindustry   [anchors: create, survival (2)]
- from: fish_skin output (leather-substitute byproduct of peeling) | via: create:pressing or farmersdelight:cutting → leather substitute | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: the peeler's fish_skin byproduct feeds leather-consuming recipes (backpacks, saddles, book-binding) — industrial fishing generates a crafting material, not just food, making the fishery a multi-output production node
- from: seafood dishes (chowder/soups) as colony food supply | via: minecolonies hut food requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies colony requests varied cooked food including seafood — the fishery+peeler chain supplies colony food demand, tying the production mod to the colony economy route
- from: seafood chowder/lobster as combat sustain food | via: consumable combat supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: high-saturation seafood dishes are traded combat-supply goods — a fisher specialist supplies the combat players who burn food in boss fights; closes the fishery→economy loop
- from: createfisheryindustry harpoon gun via Create backtank | via: aeronautics / ship-mounted use | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: harpoon gun is a handheld weapon that happens to use the backtank for air; mounting it on a ship is player-emergent, not a designed weave; M-24 is for drivetrain/control components, not handheld weapons
- from: mussels/lobster as rare catch | via: regional-scarcity (ocean biome required) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: ocean-biome dependence is baked into normal fishing mechanics, not a GTMOGS-style regional ore-gen gate; M-30 should be reserved for ore-gen-controlled scarcity, not biome-dependent mob spawning which is much softer; already covered by M-28/M-34

OK — Create + survival connections are sound; three new economy-facing edges added.

---

## staaaaaaaaaaaack   [anchors: support (1)]
- LEAVE — pure behavior mod (merged dropped item-entity stacking); zero material/recipe surface, no loot, no content to weave

---

## tacz   [anchors: support (1)]
- from: tacz:ammo (consumable ammunition) | via: tacz:gun_smith_table_crafting with Create-pressed metal casings | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: ammo casings need Create-pressed brass/iron sheets — the gun smith table becomes dependent on the Create spine for its consumable materials; ore scarcity throttles ammunition supply
- from: tacz:modern_kinetic_gun (high-tier firearm) | via: create:sequenced_assembly for barrel/mechanism assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: endgame gun assembly runs through the sequenced assembly line (barrel rifling → receiver fit → action assembly) — a multi-step Create chain gates the best firearms, making them a Create-specialist product
- from: tacz ammo as consumable combat-supply good | via: emergent trade (non-combat players buy from combat/Create specialists) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: ammo is consumed in PvPvE — combat players must trade for it or make it; the Create specialist who makes casings is the supplier; closes the combat-supply loop
- from: tacz guns/attachments as region-locked materials (copper/iron from scarce ore gen) | via: GTMOGS regional ore-gen → ammo input | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: regional iron/copper scarcity gates ammo production — only the region with the ore can manufacture that ammo type; creates cross-region gun trade
- from: tacz aeronautics-mounted weapons (thematic) | via: no registering method | to: aeronautics | motif: no-motif | power: flavor | tone: ok | verdict: REJECT | reason: no-motif; TACZ doesn't integrate natively with Aeronautics turrets; aeronauticscompat handles separate turret mods; flavor link only

REWORK: dossier notes "economy via M-09" — M-09 RETIRED; ammo economy re-expressed as M-34 combat-supply (ACCEPT above). Create weave is strong and well-supported.

---

## createlowheated   [anchors: create (1)]
- from: createlowheated:basic_burner fuel consumption | via: any solid fuel (coal/charcoal/biomass) as a managed input | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the basic burner actively consumes fuel — heat is no longer free, so Create processing creates real ongoing fuel demand; a charcoal/coal supplier becomes a production-support specialist
- from: charcoal/biomass fuel as Create heat source | via: createlowheated basic burner + create:milling (wood → charcoal chain) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the processing-chain pull (M-12) here is just "make charcoal to burn"; that's vanilla tree-farming into furnaces, nothing cross-system — the real weave is M-26 consumption pressure on fuel supply, which the first ACCEPT captures; second edge would be redundant
- from: lowheated heat tier as an Aeronautics fuel-grade | via: config / behavioral tie | to: aeronautics | motif: M-13 | power: everyday | tone: ok | verdict: REJECT | reason: createlowheated is a basin-heat mod, not an engine-fuel mod; M-13 is for liquid fuels (TFMG diesel/gasoline) powering Aeronautics propulsion engines — not solid basin burners; category mismatch

REWORK: dossier "none — leave" was the prior candidate. Reconsidering: M-26 consumption pressure is real and makes the fuel-supply sub-chain meaningful. One ACCEPT, leave the rest.

---

## modonomicon   [anchors: support (1)]
- LEAVE — pure documentation/guidebook engine; zero material, recipe, loot, or processing surface; no coherent weave target

---

## create_confectionery   [anchors: create, survival (2)]
- from: chocolate fluid (molten black/ruby/white chocolate) as a baking/confectionery ingredient | via: bakery:blank_cake_interaction or farm_and_charm cooking | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: bakery cakes can use chocolate fluid as a filling ingredient — the Create confectionery chain feeds the bakery's premium tier, creating a cross-mod food processing web (cocoa→chocolate fluid→chocolate cake); a two-mod cooking chain
- from: create_confectionery candies (Speed/Saturation effect candies) as consumable combat/work items | via: consumption sink | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: effect candies are consumed for short-duration buffs in combat/labor — demand never zeroes; a confectionery specialist supplies candy to combat/mining players
- from: create_confectionery Restful chocolate (repels Phantoms) as a sleep-substitute trade good | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Restful chocolate lets you skip sleep/phantoms — a player who can't manage sleep (mining deep, ship voyage) trades for it; the confectionery specialist supplies a real survival need
- from: chocolate/caramel bricks as construction material for aeronautics ships | via: aesthetic (deco) | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif; "chocolate ship" is decorative whimsy, not a structural weave; forces tone-clash between the industrial/engineering aeronautics pillar and confectionery; this is M-04-adjacent (deco crushing) but nobody needs chocolate in a hull
- from: create_confectionery cocoa/chocolate chain as M-09 luxury sell | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 RETIRED; economy connection already handled by M-26/M-34 above

OK — Create + survival connections sound. Three valid new weave edges added.

---

## moogs_structures   [anchors: support (1)]
- LEAVE — pure worldgen library/API; zero items, loot, recipes; the weaving happens in dependent structure mods that use it, not here

---

## kleeslabs   [anchors: support (1)]
- LEAVE — behavior-only QoL (break one half of a double slab); zero items, recipes, loot; nothing to weave

---

## sliceanddice   [anchors: create, survival (2)]
- from: sliceanddice:sprinkler dispensing modded fluids (potions, Ars fluid, Create fluids) onto crops | via: create:filling (fluid pipe to sprinkler) + survival crop acceleration | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: pipe an Ars Nouveau Source solution or Iron's Spellbooks brew through the Sprinkler to accelerate magical crop growth — magic fluid becomes an agricultural reagent through a Create-connected kinetic delivery system; cross-route dependency between magic and food production
- from: sliceanddice:slicer automating farmersdelight:cutting | via: existing weave (already the mod's core purpose) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is the mod's existing anchor — not a new weave, already counted

OK — Create + survival connections sound. Sprinkler-with-magic-fluid is a genuine new cross-route edge (M-10 via fluid delivery). One ACCEPT.

---

## sable   [anchors: support (1)]
- LEAVE — pure physics-engine library (Rapier sub-level backend for Aeronautics); zero items, recipes, loot; no material surface to weave; the aeronautics weaves happen in the mods that build on it

---

## exposure   [anchors: create, survival (2)]
- from: exposure:photograph_aging (aged photos gain value/aesthetic) | via: exposure:photograph_aging method | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: aging a photograph takes time and the right conditions — a "seasoned" photograph is worth more (M-35 maturation); a photographer specialist ages prints for trade with architects/decorators who want aged maps/portraits; the aging method is exactly M-35's pattern
- from: exposure:aged_photograph as a map-art / trade token | via: emergent player trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: photography-as-service — a player with a high-tier Create-automated Lightroom does commission photography (expedition portraits, ship-dedication photos, base-maps) and trades aged prints; labor flows player→player (M-33 service-for-hire), no vendor involved
- from: exposure film (black_and_white_film / color) as a silver-halide chemistry input | via: create:mixing (silver dust + gelatin emulsion → film) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: film emulsion requires processed silver — Create mills/mixes silver ore into photographic chemistry; a Create production line supplies the Exposure photographer's consumable; cross-route dependency between Create metallurgy and the photography hobby
- from: exposure:aged_photograph as luxury sell good | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 RETIRED; economy expression already captured by M-35 + M-33 above

REWORK: dossier "economy via numismatics sell [M-09] WEAK" — M-09 retired; replaced with M-35 maturation (aging photography is the exact motif pattern) and M-33 service-for-hire. Both stronger and more player-run.

---

## spawn   [anchors: survival (1)]
- from: spawn clams / crab / anglerfish (exotic aquatic drops) | via: createfisheryindustry:peeling or farmersdelight:cutting → further Create processing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: route clam meat and crab through the Create fishery's mechanical peeler (createfisheryindustry:peeling) for skin/meat split — the mod's exotic aquatics feed the automated fishery processing chain, adding variety to its outputs
- from: spawn seafood drops as MineColonies colony food | via: minecolonies:composting or food-request chain | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colony workers eat varied food; spawn's exotic seafood (crab, anglerfish, seal meat) fulfills higher-tier colony food requests — the aquatic fauna become a colony supply chain
- from: spawn date palm wood (new wood set) | via: create:cutting (log→planks automation) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: routing a wood type through create:cutting is too generic — every wood mod gets this trivially, it adds no unique cross-system texture; the clam/crab food-chain weave (above) is the distinctive one for this mod
- from: spawn exotic seafood as Numismatics luxury sell | via: sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 RETIRED; economy via M-28 colony route (ACCEPT) is stronger
- from: spawn ant_farm/anthill mechanics as Create automation input | via: ant_pupa or ant products into Create processing | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: ant farming is a biome-flavor feature; pushing ant pupae into Create crushers is tone-clash (industrial grotesque vs. cute critter); the food chain (clam/crab) is the correct hook

REWORK: dossier economy via M-09 flagged REJECT (retired). Two clean ACCEPTs via M-12 food-chain pull and M-28 colony route.

---

## betteranimationscollection   [anchors: support (1)]
- LEAVE — client-only visual mod (animation replacements); zero items, recipes, loot, server-side content; nothing to weave

---

## aileron   [anchors: aeronautics (1)]
- from: Aileron Elytra enchantments (new flight enchants) | via: ars_nouveau:enchanting_apparatus applying pack-registered enchants | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchants (if exposed as an enchantment type) can be applied via the Ars Enchanting Apparatus — magic-level flight tuning through an arcane infusion ritual; the Apparatus becomes the upgrade station for serious aerial players
- from: Aileron elytra enchantments | via: create_enchantment_industry:grinding (grinding existing enchants to distill them) | to: create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: grinding Aileron's enchants into experience via Create's enchantment industry doesn't create a forward dependency — it's a consume/degrade path, not a production cross-route; M-29 requires a *positive* cross-route dependency (X needs Y's output to make Z); this is just enchant-grinding, which would work on any enchantment
- from: Aileron elytra as personal-transport complement to Aeronautics ships | via: behavioral / emergent design | to: aeronautics | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: Aileron is already anchored to aeronautics; the elytra being used around ships is emergent play, not a designed weave; M-33 service-for-hire requires a labor exchange, not just thematic adjacency

REWORK: existing dossier suggestion for magic via Enchanting Apparatus is WEAK-flagged but survives the red-team if Aileron's enchants are exposed. Mark ACCEPT with a caveat: verify enchantment types are exposed/craftable at the Apparatus before authoring.

---

## pantographsandwires   [anchors: create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) as TFMG coking input | via: tfmg:coking | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: coal coke from the overhead-line infrastructure doubles as TFMG coking feedstock — a byproduct of building railway electrification feeds the industrial fuel chain; M-32 byproduct→input circularity
- from: pantographsandwires:graphite (c:item/ingots/graphite) as Occultism chalk / ritual ingredient | via: occultism:ritual or spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite from wire-making can substitute for chalk in Occultism chalk circles / ritual drawing — the railway builder's waste material becomes a magic reagent; a Create-specialist byproduct feeds the magic pillar
- from: pantographsandwires copper wires (c:item/wires/copper) as Create-Addition charging infrastructure | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: pantographsandwires copper wire is an overhead *infrastructure* wire for trains, not an electrical conduit for item-charging; mapping it to createaddition:charging conflates two different "copper wire" concepts — tone-clash; the wire here is physical catenary, not an FE cable
- from: pantographsandwires as aeronautics build cost (rail infra requires masts/concrete) | via: existing anchor — it's already aeronautics | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: pantographsandwires is already aeronautics-anchored; this is the existing connection, not a new weave

OK — Create + aeronautics connections sound. Two new cross-system edges: M-32 coke byproduct and M-11 graphite as ritual reagent.

---

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack fluid tanks (portable fluid buffer) | via: Create fluid logistics — fill tanks with TFMG diesel/lubricant or Ars source-liquid for long expeditions | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: a ship engineer carries a backpack tank filled with diesel for emergency refueling mid-voyage — the portable fluid buffer is the aeronautics arm's logistics gap-filler; turns a survival item into an aeronautics supply component
- from: travelersbackpack endgame variants (dragon/netherite) | via: create:sequenced_assembly for the reinforcement step | to: create | motif: M-20 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite-tier or dragon-themed backpack gets a Create deployer-applied reinforcement plate as an upgrade step — one light deployment step on a high-tier item, the M-20 single-deploy pattern
- from: travelersbackpack sleeping_bag (respawn-anywhere) | via: aeronautics expedition respawn support | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: the sleeping bag is a passive item feature on the backpack; M-31 is for bulk goods that *require logistics to move at scale*; a personal respawn item doesn't need the logistics arm, it IS part of the carrier
- from: travelersbackpack 30+ mob-themed variants as MineColonies deliverable goods | via: minecolonies requests / colony economy | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies doesn't request backpacks by default; this would require a KubeJS recipe override to add backpacks to the colony request tree, and there's no natural colony-use for a backpack; the link is forced, not coherent

OK — survival anchor is solid. Two new weave edges via M-13 (fluid-tank for aeronautics) and M-20 (deployer reinforcement step on endgame tier).

---

== CHUNK COMPLETE ==
