// ⚠️ TEMPORARY DEV TOOL — remove before v0.7.0 ships. Loaded on the v0.7.0 branch so the recipe dump runs
// when the pack boots. Canonical copy + docs: tools/recipe-dump/. It dumps the FULL recipe JSON (grids,
// keys, counts) for the Create-spine namespaces, which the tools/mod-data digest lacks.
//
// USE: boot v0.7.0 (world or server), run `/reload` (or just load once). It writes
//   <instance>/kubejs/pcmc-recipes.json
// and logs each recipe to latest.log prefixed `PCMC_RECIPE` (fallback). Send back the JSON.
//
// ⚠️ DELETE THIS FILE before the version ships — it re-dumps (and log-spams) on every reload.

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
