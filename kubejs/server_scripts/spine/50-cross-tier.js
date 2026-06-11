// Create spine — CROSS-TIER recipe chains (the lineage; CREATE-SPINE.md Part 4b).
//
// Weaves the T3-T4 addon spine so tiers FLOW into each other instead of self-sourcing. Grounded in the
// real recipes (tools/mod-data/recipes). DESIGN CORRECTION the dumps surfaced:
//   • New Age has NO graphite and no "energising->graphite" recipe — the spec's coking->graphite seam was
//     WRONG. (Create: Nuclear, which had the only graphite chain, was cut for 1.0 — see 2.0 overhaul.)
//
// This file builds the SAFE, additive weaves now. The invasive re-recipes (making TFMG's sequenced
// electric_motor depend on Additions, New Age energisers require TFMG circuits) are STAGED — they re-author
// complex sequenced_assembly/mechanical_crafting recipes with no grid data in the dumps, so they need
// careful per-recipe work + playtest, not blind authoring. Real ingredient sets are in docs/CREATE-SPINE-IMPL.md.

ServerEvents.recipes(event => {
  // ── SEAM 4 — Aeronautics control ladder: analog (T3) -> digital (T4). ──
  // Real chain present: simulated:gyroscopic_mechanism -> gimbal_sensor -> aeroworks:gyroscope. But
  // aeronautics:smart_propeller (the "digital" propeller) currently needs only the ANALOG gyroscopic
  // mechanism, so digital flight isn't actually gated behind a digital part. Weave it: require an aeroworks
  // servo, making smart flight genuinely T4 (needs create-aeroworks). Base ingredients verified vs the dump.
  // Mechanical Crafter build (06-11: aeronautics flight machines are Crafter work, see 54-weave).
  event.remove({ output: 'aeronautics:smart_propeller' })
  event.recipes.create.mechanical_crafting('aeronautics:smart_propeller', [
    ' M ',
    'GPG',
    ' B '
  ], {
    M: 'aeroworks:mechanical_servo',          // T4 DIGITAL control component (create-aeroworks)
    G: 'simulated:gyroscopic_mechanism',      // T3 analog core
    P: 'create:propeller',
    B: 'create:brass_casing'
  })

  // ── SEAM 1 — Additions <-> TFMG: share the copper spool so the two electric ecosystems connect. ──
  // TFMG self-sources tfmg:copper_spool; Additions has createaddition:copper_spool. A 1:1 bridge lets a
  // TFMG electric build consume Additions' spool (and vice-versa), weaving Additions' converter parts into
  // the TFMG (T3) industrial chain. Additive — no machine recipe is re-authored.
  event.shapeless('tfmg:copper_spool', ['createaddition:copper_spool'])
  event.shapeless('createaddition:copper_spool', ['tfmg:copper_spool'])

  // ── SEAM 2 — TFMG -> New Age: the advanced energiser (the T3->T4 electric step) now needs a TFMG etched
  //    circuit, so New Age's T4 tier depends on the T3 TFMG circuit ladder. Real grid verified vs the dump
  //    (GEG / .R. / .R.; G=overcharged_gold E=basic_energiser R=lightning_rod) — circuit row woven in. ──
  event.remove({ output: 'create_new_age:advanced_energiser' })
  event.shaped('create_new_age:advanced_energiser', [
    'GEG',
    'ZRZ',
    ' R '
  ], {
    G: 'create_new_age:overcharged_gold',
    E: 'create_new_age:basic_energiser',
    R: 'minecraft:lightning_rod',
    Z: 'tfmg:etched_circuit_board'            // T3 TFMG circuit gates the T4 energiser
  })

  console.info('[pcmc-spine] cross-tier: aeronautics analog->digital gated; Additions<->TFMG spool bridged; New Age advanced_energiser now needs a TFMG circuit. (Nuclear already steel-linked to TFMG.)')
})

// CROSS-MOD TRUTH (verified vs the recipe dump in tools/recipe-dump/):
//   • Create: Nuclear was CUT for 1.0 (returns in the 2.0 Power Grid overhaul) — New Age's reactor is the
//     end-game generator now. The old Nuclear weave (graphite chain, reactor gating) was removed with it.
//   • Additions -> TFMG: tfmg:engine_controller already accepts #c:wires/copper, which createaddition's
//     copper_wire is tagged — Additions' wire already feeds TFMG machinery (+ the spool weld above).
//   • TFMG electric_motor is tfmg:sequenced_assembly/motor (winding tfmg:copper_spool onto an unfinished
//     motor) — re-authored in 51-weave-additions-tfmg.js with a createaddition:capacitor stage (the last
//     staged seam, done); the spool weld additionally lets Additions' spool feed the winding.
