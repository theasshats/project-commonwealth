// Create spine — WEAVE: create_sa (Create Stuff & Additions) tier-anchored (#132/#289-C, handoff §5).
//
// The mod is already well-formed (engines are sequenced-assembly; jetpacks/exoskeletons are mostly
// mechanical_crafting) — "the one clean weave." What it lacked was ANCHORS into the pack's chains, so:
//   - ENGINE TIERS map onto the ladder and pull pack seams in:
//       heat_engine  (T1) — assembled ON a createlowheated:basic_burner base (1 per engine): the HEAT
//                            engine literally contains the heat ladder's burner (seam: create_sa <->
//                            lowheated; every jetpack/exoskeleton built on it inherits the dependency).
//       steam_engine (T2) — its andesite-alloy deploy becomes #c:ingots/steel: the STEAM engine pulls the
//                            T2 steel chain (seam: create_sa <-> TFMG/ironworks steel).
//       hydraulic_engine (T2, copper/water) — untouched, already anchored via copper + spout filling.
//   - JETPACKS: REMOVED from create_sa (#87, 57-jetpacks.js) — create_jetpack is the canonical flight
//     line. The engines now power exoskeletons/tools, not flight.
//   - #87 POWER GEAR -> EARLY T3, each piece gated on the FUNCTIONAL part it works like (the Part 2b-ii
//     family exception — thematic part-sets over the generic token, same tier math):
//       brass exoskeleton  -> 2x createaddition:capacitor   (powered armor — the one place the token reads)
//       portable drill     -> createoreexcavation:drill     (carries a real drill head — Ore Excavation seam)
//       flamethrower       -> tfmg:steel_fluid_tank         (the fuel tank — TFMG fuel-industry seam)
//       grappling whisk    -> simulated:plunger_launcher    (the launcher, rope coupling included — aeronautics seam)
//       fan component      -> createaddition:electric_motor (a motorized nozzle fan)
//     All assemble on the Mechanical Crafter; the andesite/copper exoskeletons stay pre-T3 entry rungs.
//     Cycle-checked: none of the four donor parts consumes create_sa content.
//   - Left alone: drones (already mechanical_crafting + precision), tanks/components, tools/armor.
//
// LOAD-SAFE / UNVERIFIED: structures reproduced verbatim from tools/recipe-dump/pcmc-recipes.json (their
// own serialized shapes kept, incl. chanced byproducts); single-ingredient swaps only. NOT playtest-verified.

ServerEvents.recipes(event => {
  // ── heat_engine — the BASE becomes a basic_burner (was a loose andesite_alloy): the engine is built
  //    AROUND its heat source, exactly one burner per engine. Every deploy step (cog / large cog / zinc /
  //    copper, x3 loops) stays verbatim, so the T1 cost only shifts by alloy->burner at the root — in the
  //    3x band, not multiplied (a x3-looped burner step would have cost 3 burners; this costs 1). ──
  event.remove({ output: 'create_sa:heat_engine' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { item: 'createlowheated:basic_burner' },
    loops: 3,
    results: [
      { chance: 120.0, item: { id: 'create_sa:heat_engine' } },
      { chance: 8.0, item: { id: 'create:zinc_nugget' } },
      { chance: 4.0, item: { id: 'create:andesite_alloy' } }
    ],
    sequence: [
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_heat_engine' }, { item: 'create:cogwheel' }],
        results: [{ item: { id: 'create_sa:incomplete_heat_engine' } }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_heat_engine' }, { item: 'create:large_cogwheel' }],
        results: [{ item: { id: 'create_sa:incomplete_heat_engine' } }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_heat_engine' }, { tag: 'c:nuggets/zinc' }],
        results: [{ item: { id: 'create_sa:incomplete_heat_engine' } }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_heat_engine' }, { tag: 'c:nuggets/copper' }],
        results: [{ item: { id: 'create_sa:incomplete_heat_engine' } }] }
    ],
    transitional_item: { item: { id: 'create_sa:incomplete_heat_engine' } }
  })

  // ── steam_engine — same assembly; the andesite-alloy deploy becomes steel (T2 chain). ──
  event.remove({ output: 'create_sa:steam_engine' })
  event.custom({
    type: 'create:sequenced_assembly',
    ingredient: { tag: 'c:plates/brass' },
    loops: 3,
    results: [
      { chance: 120.0, item: { id: 'create_sa:steam_engine' } },
      { chance: 8.0, item: { id: 'create:brass_sheet' } },
      { chance: 4.0, item: { id: 'create:andesite_alloy' } }
    ],
    sequence: [
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_steam_engine' }, { item: 'create:cogwheel' }],
        results: [{ item: { id: 'create_sa:incomplete_steam_engine' } }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_steam_engine' }, { item: 'create:large_cogwheel' }],
        results: [{ item: { id: 'create_sa:incomplete_steam_engine' } }] },
      { type: 'create:deploying',
        ingredients: [{ item: 'create_sa:incomplete_steam_engine' }, { item: 'create:propeller' }],
        results: [{ item: { id: 'create_sa:incomplete_steam_engine' } }] },
      { type: 'create:deploying',                // was create:andesite_alloy — steam tier runs on steel
        ingredients: [{ item: 'create_sa:incomplete_steam_engine' }, { tag: 'c:ingots/steel' }],
        results: [{ item: { id: 'create_sa:incomplete_steam_engine' } }] }
    ],
    transitional_item: { item: { id: 'create_sa:incomplete_steam_engine' } }
  })

  // ── copper_exoskeleton — vanilla bench -> Mechanical Crafter (grid/keys verbatim). Kept PRE-T3:
  //    it's the entry exoskeleton (hydraulic/copper tier); the power gear above it carries the gate. ──
  event.remove({ output: 'create_sa:copper_exoskeleton_chestplate' })
  event.recipes.create.mechanical_crafting('create_sa:copper_exoskeleton_chestplate', [
    'ACA',
    'THT',
    'BSB'
  ], { A: '#c:ingots/copper', C: 'create:cogwheel', H: 'create_sa:hydraulic_engine',
       T: 'create:fluid_tank', S: 'create:andesite_alloy', B: '#c:storage_blocks/copper' })

  // ════ #87 — the SNA POWER GEAR is early-T3, gated on FUNCTIONAL thematic parts (see header). ════

  // ── portable_drill — carries a REAL drill head (Ore Excavation; was: bare brass ingot on top). ──
  event.remove({ output: 'create_sa:portable_drill' })
  event.recipes.create.mechanical_crafting('create_sa:portable_drill', [
    ' Z ',
    'CSC',
    ' D '
  ], { Z: 'createoreexcavation:drill', C: 'create:cogwheel', S: 'create_sa:steam_engine',
       D: 'create_sa:brass_drill_head' })

  // ── brass_exoskeleton (strength/haste — the TOP exoskeleton) — native 5x3 kept; the two andesite
  //    alloys in the engine row become capacitors. ──
  event.remove({ output: 'create_sa:brass_exoskeleton_chestplate' })
  event.recipes.create.mechanical_crafting('create_sa:brass_exoskeleton_chestplate', [
    'AAFAA',
    'ZASAZ',
    'KAXAK'
  ], { A: '#c:ingots/brass', F: 'create:flywheel', S: 'create_sa:steam_engine',
       Z: 'createaddition:capacitor', X: 'create:andesite_alloy', K: '#c:storage_blocks/brass' })

  // ── grapplin_whisk (traversal) — native 3x5 kept; the tip is the aeronautics plunger launcher. ──
  event.remove({ output: 'create_sa:grapplin_whisk' })
  event.recipes.create.mechanical_crafting('create_sa:grapplin_whisk', [
    ' Z ',
    'CHC',
    'MMM',
    'MMM',
    ' W '
  ], { Z: 'simulated:plunger_launcher', C: 'create:cogwheel', H: 'create_sa:heat_engine',
       M: 'create:minecart_coupling', W: 'create:whisk' })

  // ── flamethrower (backtank gadget) — native shape kept; built around a TFMG steel fluid tank. ──
  event.remove({ output: 'create_sa:flamethrower' })
  event.recipes.create.mechanical_crafting('create_sa:flamethrower', [
    'ABHOZ',
    'AAO  '
  ], { A: 'create:andesite_alloy', B: 'create:blaze_burner', H: 'create_sa:heat_engine',
       O: '#c:plates/obsidian', Z: 'tfmg:steel_fluid_tank' })

  // ── fan_component (the nozzle-fan air gadget) — bench -> Crafter; spins on an Additions electric motor. ──
  event.remove({ output: 'create_sa:fan_component' })
  event.recipes.create.mechanical_crafting('create_sa:fan_component', [
    'NAN',
    'APA',
    'NZN'
  ], { N: '#c:ingots/zinc', A: 'create:andesite_alloy', P: 'create:propeller',
       Z: 'createaddition:electric_motor' })

  console.info('[pcmc-spine] weave create_sa: heat_engine seams to the basic_burner, steam_engine to steel; the #87 power gear is early-T3 on the Crafter via functional parts (drill head / fluid tank / plunger launcher / electric motor; brass exo keeps capacitors).')
})
