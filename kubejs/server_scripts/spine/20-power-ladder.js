// Create spine — #145 power ladder + generator audit.
//
// The ladder is gated by recipe cost + dependency chains, NOT a tech-tree mod (CREATE-SPINE.md Part 1):
//   rungs 0-1 cheap (bootstrap) · rung 2 windmill = sail cloth + windmill bearing · rung 3 steam = its
//   inherent fluid/heat chain (no extra lock) · rung 4 electric = NEEDS rung-3 kinetic to drive (no
//   double-tax) · rung 5 reactor/nuclear = behind the boss fork.
//
// The load-bearing rule: electricity is a CONVERTER, not a SOURCE. The generator audit below tags every
// FE generator converter (allowed: SU->FE or real-fuel->FE) vs free-source (curtail via COST-GATE — the
// settled stance, not re-reciping). This file carries the audit DATA + stance; the per-generator
// curtailment recipes are authored in the #145 batch against verified IDs (each with a playtest gate),
// because blind generator re-recipes risk world-load crashes.

global.SPINE_GENERATORS = {
  // converter — plugs into the ladder; leave as-is (you climbed rungs 1-3 to spin it).
  converter: [
    'createaddition:alternator',        // SU -> FE (the canonical converter; top #145 priority to preserve)
    'createaddition:portable_energy_interface'
  ],
  // free_source candidates — AUDIT: confirm each makes FE from nothing/cheap renewable, then cost-gate to
  // rung-4+ so it is not an EARLY free route. Verify exact block IDs in tools/mod-data before re-reciping.
  free_source_audit: [
    'create_new_age:*generator*',       // enumerate New Age generators; tag converter vs free-source
    'createaddition:*'                  // sweep for any non-alternator FE source
  ]
}

ServerEvents.recipes(event => {
  // No blind recipe changes here (see header). The gates that ARE safe + inherent:
  //  - rung 3 (steam): already gated by the pump + blaze burner + copper fluid line — no edit needed.
  //  - rung 4 (electric): gated by requiring rung-3 kinetic to drive the alternator — preserved by NOT
  //    curtailing the alternator (a converter), and by cost-gating any free-source generator the audit finds.
  console.info(`[derpack-spine] power ladder loaded; generator audit pending (${global.SPINE_GENERATORS.free_source_audit.length} sweep targets)`)
})
