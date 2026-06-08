// Create spine — #220 Pattern A (route-exclusive locking).
//
// Strip every non-Create recipe for an output so only the Create line makes it — the anti-erosion wall
// (SYSTEMS.md §3). v0.7.0 slice: the two signature gate components (spec says start small, expand if
// playtest shows erosion). Load-safe: removes are no-ops if no alt recipe exists.
//
// Pattern B (boss gates) lives in the complete tier-gate ladder: 40-gates.js.

ServerEvents.recipes(event => {
  ;['create:precision_mechanism', 'create:electron_tube'].forEach(id =>
    event.remove({ output: id, not: { mod: 'create' } })
  )
})
