# Phase 2 candidates — chunk-06 (pass-06, blind)

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure/worldgen overhaul only; 0 blocks/0 items/0 methods, uses vanilla mineshaft loot. No material join key exists to route through any method. Indirectly serves the scarce-ore mining loop but offers no recipe hook. Forcing an edge here would be a defect.

## friendsandfoes   [anchors: survival (1)]
- from: crab_claw / Wildfire / Illusioner drops | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Wildfire's loot is the kind of charged drop a spirit-fire or imbuement chamber wants — combat loot feeds spellcraft.
- from: copper_golem_head / copper buttons / lightning rods | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: balance — copper deco recycling to nuggets is a generic lossy edge with no flavor; the copper set is already plain copper and crushing it adds nothing the player would notice. Thin, vanilla-faithful mod — don't force.
- from: copper_golem behavior | via: — | to: Create/automation | motif: — | verdict: REJECT | reason: no-motif — copper golem button-pressing is a behavioral mob mechanic with no material to route; tempting "automation" framing has no method seam.

## samurai_dynasty   [anchors: survival (1)]
- from: jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: new gem ores get the same Create ore-doubling reward every other ore enjoys, folding the samurai tier into the tech spine.
- from: steel ingots (c:ingots/steel) | via: c:tag unification + create metal web | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: its steel joins the shared c:ingots/steel web so Create pressing/processing recognizes it as the same metal.
- from: Yokai drops (akaname_tongue etc.) | via: occultism:spirit_fire / ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: yokai folklore drops are spirit-stuff — a natural spirit-fire/imbuement reagent, and the weapon-absorb mechanic already reads as arcane.
- from: silver_ore / silver ingot | via: c:tag unification | to: Create/economy | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: balance/CLAUDE.md caveat — silver unification is a known landmine (galosphere palladium / occultism silver); samurai_dynasty tags its own c:silver, so unifying risks a three-way silver collision. Leave silver alone, flag for human.

## dynamictreesplus   [anchors: survival (1)]
- from: saguaro_fruit / mushroom caps | via: create:milling or farmersdelight:cutting | to: Create/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk forage runs through milling into a dye or food intermediate, the classic raw-forage-to-processed-good seam — one light step for an everyday item.
- from: saguaro_fruit / mushroom blocks | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: balance — ambient bulk worldgen flora as a sell-good is near-infinite and would undercut the scarcity economy; cheap renewable forage is exactly what shouldn't mint coin directly. Better as a processing feedstock (the M-12 accept), not a raw sell.

## createpickywheels   [anchors: Create (1)]
- from: river/open-air/biome gating of water wheels & windmills | via: biome-gated power (behavioral, no recipe) | to: survival | motif: — | power: n/a | tone: ok | verdict: ACCEPT (no-motif, flag) | hook: the world dictates where you can build early Create power — geography pushes back, which IS the survival pillar. No material join key, so it fits no method-routing motif; this is a behavioral/thematic 2nd pillar, surfaced for human review (provisional, like the survival-flavor reads in the dossier).
- note: pure balance-patch mod, 0 items/0 methods — there is no recipe weave to author; the survival tie is real but lives in config/biome lists, not a recipe. Genuinely 2-pillar by behavior even though un-weavable by method.

## sky_whale_ship   [anchors: survival (1)]
- from: whale-back loot chests | via: loot-table routing → aeronautics/Create progression drops | to: aeronautics | motif: M-05 (loosely) | power: endgame | tone: ok | verdict: ACCEPT | hook: floating sky-towns are the natural raid-target for a Create Aeronautics airship — fly up to board them, and the loot rewards ship-tech, closing the loop between building a ship and having somewhere to fly it. Ties M-23/M-24 aeronautics seams to a destination.
- from: whale loot rarities | via: numismatics | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: balance/no-clean-key — it has no registered items, so "sell whale loot" depends entirely on what custom loot is pointed there; routing the SAME loot to both aeronautics-reward and economy double-spends one slot. Pick the aeronautics framing; economy is a thinner duplicate.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — well-rested buff + sleep overlay; 0 items/0 blocks/0 methods. Purely an effect applied to the player, no material to route. Pairs thematically with Cold Sweat/Serene Seasons survival but offers no join key for a 2nd pillar. Forcing one would be a defect.

## cold_sweat   [anchors: survival (1)]
- from: hearth / boiler / higher-tier emitter | via: create:filling + Create brass/casing gating (native-method gating) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a fuel-burning climate multiblock — gating it (or a higher tier) on Create brass/casing, or piping Create steam/lava as its fuel, ties seasons-survival to the tech spine. Its create:filling waterskin edge already exists, so this deepens an established seam. Don't gate the basic waterskin/sewing-table tier behind Create — only the multiblock.
- from: goat_fur / chameleon_molt / hoglin-hide insulation armor | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: insulated cold/heat gear is a high-effort survival good a crew heading to a harsh biome would buy from a specialist — exactly the emergent-trade niche. Mid-tier effort, light single sell edge.
- from: ANY warm/cold fur or hide from other mob mods | via: cold_sweat sewing table insulation | to: survival (inbound) | motif: M-02 (loosely) | power: everyday | tone: ok | verdict: REJECT | reason: same-pillar — this widens insulation inputs but both ends are survival; it's a nice compat tag-fill, not a 2nd-pillar weave. Surface as a tag-unification nicety, not a pillar add.

## oceansdelight   [anchors: survival (1)]
- from: finished seafood dishes (fugu_slice, elder_guardian_roll, guardian_soup) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort coastal delicacies are the luxury trade good coast specialists sell inland — a textbook M-09 luxury-to-coin, and the elder-guardian dishes are effort-gated enough to be worth real coin.
- from: raw guardian/tentacle drops | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: red-team — the mod's whole identity is that its prep routes through farmersdelight cutting/cooking; adding a parallel create:cutting path for the same raw drops is redundant and tonally off (Create's mechanical saw vs. a cutting board for fish). The FD chain already owns this; don't fork it.

## drones   [anchors: aeronautics (1)]
- from: iron_rotor / ion_thruster / controller | via: create:sequenced_assembly + Create brass/precision parts gating | to: Create | motif: M-06 / M-05 | power: endgame (ion_thruster) / mid (iron_rotor) | tone: ok | verdict: ACCEPT | hook: the ion thruster is the drone's flagship thrust tier — building it as a sequenced-assembly chain off Create precision parts makes the good drone a real Create build, threading the tech spine into personal flight. Scale depth to tier: iron_rotor = light native gating, ion_thruster = deep chain. Keep wood_rotor cheap (everyday floor).
- from: drones:drill block | via: deploy/item_application of a Create drill head, or Create-part gating | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the drill ability block is literally a mining head — applying/gating it on Create drill components reads as obvious and ties the auto-mining drone to Create. Light single-step (M-20), sibling of the M-06 thruster chain.
- from: pocket_drone (finished) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: balance/redundant — a finished pocket drone is a one-shot crafted tool, not a renewable trade good; selling it is a thin edge and the Create-gating accepts already give the strong 2nd pillar. Don't stack a weak economy edge when aeronautics+Create is the coherent web.

== CHUNK COMPLETE ==
