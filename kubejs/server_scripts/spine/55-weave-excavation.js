// Create spine — WEAVE: createoreexcavation reframed as the T4 END-GAME RESOURCE SINK (#289-B, handoff §4b).
//
// The mod drills infinite bedrock veins — left at brass-tier that's an anti-scarcity faucet. The reframe
// keeps it but moves the whole extraction line to T4: at end-game it SPENDS surplus power and effort for
// ore instead of undercutting early/mid scarcity. Concretely:
//   - drilling_machine + extractor: TFMG end-products replace the brass-tier smarts — etched circuit
//     boards (was electron tubes) and electric motors (was precision mechanisms). You climb the full
//     TFMG chain before vein-drilling exists.
//   - drill + diamond_drill: routed off the vanilla bench onto the Mechanical Crafter, and the drill body
//     is STEEL (was iron) — the T2 steel chain feeds the consumable. Netherite stays a vanilla smithing
//     upgrade of the diamond drill (minecraft:netherite_drill_smithing — consistent with vanilla tooling).
//   - The SINK mechanics are native and deliberately kept: drills wear out (consumable heads), drilling
//     recipes draw heavy stress (256-2048 SU) and eat fluid (e.g. 1000mb lava per netherite op).
//   - PROSPECTING stays EARLY and bench-crafted (finding veins is fine, even good for planning;
//     EXTRACTING is the T4 privilege) — but the kit now reads as Create tech: the vein finder's ender
//     eye becomes an electron tube (the Create sensor) and the atlas binds with a clipboard. The
//     sample_drill is untouched (already brass-tier mechanical_crafting). drilling/* vein yields stay
//     stock (finite/curated veins tracked for v0.9.0).
//
// LOAD-SAFE / UNVERIFIED: grids taken from tools/recipe-dump/pcmc-recipes.json (real dump); ingredient
// swaps only, patterns/counts preserved. Parses + static-checks, but NOT playtest-verified.

ServerEvents.recipes(event => {
  // ── drilling_machine — keep the native 5x5 mechanical_crafting; T4-ify the smarts. ──
  // SWAPPED: e electron_tube -> tfmg:etched_circuit_board, m precision_mechanism -> createaddition:electric_motor (was tfmg:electric_motor until the voltage-layer removal, 63).
  event.remove({ output: 'createoreexcavation:drilling_machine' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      B: { tag: 'c:storage_blocks/brass' },
      C: { item: 'create:brass_casing' },
      D: { item: 'create:mechanical_drill' },
      F: { item: 'create:brass_tunnel' },
      S: { item: 'create:spout' },
      b: { tag: 'c:plates/brass' },
      e: { item: 'tfmg:etched_circuit_board' },  // was create:electron_tube — T4 smarts
      m: { item: 'createaddition:electric_motor' }, // was create:precision_mechanism — T4 drive (tfmg motor retired w/ voltage layer)
      s: { tag: 'c:plates/obsidian' },
      t: { item: 'create:copper_casing' }
    },
    pattern: ['BbtbB', 'beSeb', 'CmDmF', 'bsssb', 'BbbbB'],
    result: { count: 1, id: 'createoreexcavation:drilling_machine' }
  })

  // ── extractor (the fluid-vein variant) — same T4 treatment as the drilling machine. ──
  event.remove({ output: 'createoreexcavation:extractor' })
  event.custom({
    type: 'create:mechanical_crafting',
    accept_mirrored: true,
    category: 'misc',
    key: {
      B: { tag: 'c:storage_blocks/brass' },
      C: { item: 'create:brass_casing' },
      D: { item: 'create:mechanical_drill' },
      H: { item: 'create:hose_pulley' },
      P: { item: 'create:mechanical_pump' },
      b: { tag: 'c:plates/brass' },
      e: { item: 'tfmg:etched_circuit_board' },  // was create:electron_tube
      m: { item: 'createaddition:electric_motor' }, // was create:precision_mechanism
      s: { tag: 'c:plates/obsidian' }
    },
    pattern: ['BbPbB', 'beHeb', 'CmDmb', 'bsssb', 'BbbbB'],
    result: { count: 1, id: 'createoreexcavation:extractor' }
  })

  // ── drill (the consumable head, base tier) — off the bench, onto the Crafter; body becomes STEEL. ──
  // Stock pattern kept (2 blocks + 5 ingots); i iron -> #c:ingots/steel feeds the T2 steel chain into
  // every head you burn.
  event.remove({ output: 'createoreexcavation:drill' })
  event.recipes.create.mechanical_crafting('createoreexcavation:drill', [
    'BI ',
    'IBI',
    ' II'
  ], { B: '#c:storage_blocks/iron', I: '#c:ingots/steel' })

  // ── diamond_drill — same move (method only; materials were already diamond-tier). ──
  event.remove({ output: 'createoreexcavation:diamond_drill' })
  event.recipes.create.mechanical_crafting('createoreexcavation:diamond_drill', [
    'BI ',
    'IDI',
    ' II'
  ], { B: '#c:storage_blocks/diamond', I: '#c:gems/diamond', D: 'createoreexcavation:drill' })

  // ── prospecting kit — early-tier, BENCH-kept (handheld tools per the 51 doctrine); one Create part
  //    each ties the all-game prospecting loop to the spine. Shapes preserved from the stock grids. ──
  event.remove({ output: 'createoreexcavation:vein_finder' })
  event.shaped('createoreexcavation:vein_finder', [
    'TA',
    'RS',
    ' S'
  ], { T: 'create:electron_tube',              // the Create sensor (was minecraft:ender_eye)
       A: '#c:gems/amethyst', R: '#c:ores/redstone', S: '#c:rods/wooden' })

  event.remove({ output: 'createoreexcavation:vein_atlas' })
  event.shaped('createoreexcavation:vein_atlas', [
    'CA',
    'MB'
  ], { C: '#c:chests',
       A: 'create:clipboard',                  // survey records (was a loose amethyst)
       M: 'minecraft:map', B: 'minecraft:writable_book' })

  console.info('[pcmc-spine] weave excavation: drilling_machine/extractor T4-gated on TFMG circuits+motors; drill heads steel-bodied through the Mechanical Crafter (netherite via vanilla smithing); prospecting kit early-tier with Create sensor/clipboard ties.')
})
