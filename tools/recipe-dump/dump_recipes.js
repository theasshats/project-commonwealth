// Project Commonwealth — DEV recipe-dump tool. NOT shipped: it lives in tools/ (packwiz-ignored) and must be COPIED
// into an instance's kubejs/server_scripts/ to run. Delete it from there when done.
//
// Why: the committed tools/mod-data digest only has ingredient ID *sets* — no grids, keys, or counts — so
// sequenced_assembly / mechanical_crafting recipes can't be safely re-authored from it. This dumps the
// FULL, exact recipe JSON (type, pattern, key, ingredients, result counts) for the Create-spine namespaces.
//
// HOW TO RUN (on a machine with the pack installed — not the agent sandbox):
//   1. Copy this file to  <instance>/kubejs/server_scripts/zz_dump_recipes.js
//   2. Launch the pack (single-player world or dedicated server) so recipes load.
//   3. Run  /reload  in-game (or just boot once). It writes:
//        <instance>/kubejs/pcmc-recipes.json
//      It ALSO logs every matched recipe to latest.log, prefixed  PCMC_RECIPE  (use this if the file
//      write fails on your KubeJS version: `grep PCMC_RECIPE logs/latest.log`).
//   4. Send back that JSON (or just the recipes you care about) so exact grids are available.
//   5. DELETE the copied file — it re-dumps on every reload.
//
// Edit NAMESPACES to widen/narrow what gets dumped.

ServerEvents.recipes(event => {
  const NAMESPACES = [
    'create', 'createaddition', 'tfmg', 'create_new_age',
    'aeronautics', 'aeroworks', 'simulated', 'create_tweaked_controllers', 'gnkinetics',
    // §4/§5 integrations (create_new_age already covers the reactor parts):
    'createlowheated', 'createoreexcavation', 'create_sa', 'create_ironworks'
  ]

  const out = {}
  let n = 0
  event.forEachRecipe({}, r => {
    let id
    try { id = String(r.getOrCreateId()) } catch (e) {
      try { id = String(r.getId()) } catch (e2) { return }
    }
    if (NAMESPACES.indexOf(id.split(':')[0]) === -1) return

    let json = null
    try { json = r.json } catch (e) { /* some recipe types may not expose .json */ }
    out[id] = json
    n++
    console.info(`PCMC_RECIPE ${id} ${json}`)   // bulletproof log fallback
  })

  try {
    JsonIO.write('kubejs/pcmc-recipes.json', out)
    console.info(`[pcmc] recipe dump: wrote ${n} recipes -> kubejs/pcmc-recipes.json`)
  } catch (e) {
    console.warn(`[pcmc] JsonIO.write failed (${e}); use the PCMC_RECIPE log lines instead. Dumped ${n}.`)
  }
})
