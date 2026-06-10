// ⚠️ TEMPORARY DEV TOOL — remove before v0.7.0 ships. Loaded on the v0.7.0 branch so the recipe dump runs
// when the pack boots. Canonical copy + docs: tools/recipe-dump/. It dumps the FULL recipe JSON (grids,
// keys, counts) for the Create-spine namespaces, which the tools/mod-data digest lacks.
//
// USE: boot v0.7.0 (world or server), run `/reload` (or just load once). It writes
//   <instance>/kubejs/derpack-recipes.json
// and logs each recipe to latest.log prefixed `DERPACK_RECIPE` (fallback). Send back the JSON.
//
// ⚠️ DELETE THIS FILE before the version ships — it re-dumps (and log-spams) on every reload.

ServerEvents.recipes(event => {
  const NAMESPACES = [
    'create', 'createaddition', 'tfmg', 'create_new_age',
    'aeronautics', 'aeroworks', 'simulated', 'create_tweaked_controllers', 'gnkinetics'
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
    console.info(`DERPACK_RECIPE ${id} ${json}`)   // bulletproof log fallback
  })

  try {
    JsonIO.write('kubejs/derpack-recipes.json', out)
    console.info(`[derpack] recipe dump: wrote ${n} recipes -> kubejs/derpack-recipes.json`)
  } catch (e) {
    console.warn(`[derpack] JsonIO.write failed (${e}); use the DERPACK_RECIPE log lines instead. Dumped ${n}.`)
  }
})
