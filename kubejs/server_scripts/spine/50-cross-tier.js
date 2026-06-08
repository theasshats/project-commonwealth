// Create spine — CROSS-TIER recipe chains (the lineage; CREATE-SPINE.md Part 4b).
//
// Weaves the T3-T4 addon spine so tiers FLOW into each other instead of self-sourcing. Grounded in the
// real recipes (tools/mod-data/recipes). Two important DESIGN CORRECTIONS the dumps surfaced:
//   • New Age has NO graphite and no "energising->graphite" recipe — the spec's coking->graphite seam is
//     WRONG. The real graphite chain is Nuclear's own: createnuclear:graphene (press coal dust) ->
//     graphite_rod (+ steel). (CREATE-SPINE.md Part 4b corrected.)
//   • The real existing cross-mod seam between Nuclear and TFMG is the shared `c:ingots/steel` tag (both
//     consume it) — TFMG is already the steel supplier for Nuclear. No new bridge needed there.
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
  event.remove({ output: 'aeronautics:smart_propeller' })
  event.shaped('aeronautics:smart_propeller', [
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

  console.info('[derpack-spine] cross-tier: aeronautics analog->digital gated; Additions<->TFMG spool bridged. TFMG->New Age + Nuclear re-recipes staged (see IMPL doc).')
})

// STAGED (not built here — need careful authoring + playtest; real ingredient sets in IMPL doc §9):
//   • TFMG -> New Age: make create_new_age:reactor_casing / advanced_energiser require tfmg:steel +
//     tfmg circuit, so T4 New Age depends on the T3 TFMG climb.
//   • Additions -> TFMG (hard dependency): re-recipe tfmg:electric_motor (sequenced) to consume a
//     createaddition electric part, not just the spool bridge above.
//   • Nuclear: already steel-linked to TFMG via c:ingots/steel; graphite stays Nuclear-internal (graphene).
