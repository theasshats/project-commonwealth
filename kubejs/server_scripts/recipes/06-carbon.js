// Carbon unification (#102) — REPLACE graphene with graphite (Option 1), the harder route.
//
// The pack shipped two carbon intermediates for one role:
//   - createnuclear:graphene      — Create-PRESSED from coal DUST (c:dusts/coal), untagged. Its only
//                                   use is createnuclear:graphite_rod, which feeds the anti-radiation
//                                   armour line (the 16 coloured anti_radiation_chestplates).
//   - pantographsandwires graphite ingot — Create-COMPACTED from coal-coke dust, tagged c:ingots/graphite.
//                                   Coke is itself blast-smelted from coal, so this line is fuel-gated.
//
// Decision (zagwar): err on the side of harder. So we collapse to the single tagged material and retire
// graphene, which routes the nuclear carbon part through the coke chain instead of plain crushed coal —
// reactors/anti-rad gear now cost the extra coking step (ties #84, harder Create). The cheaper-graphite
// escape hatch #102 offered is deliberately NOT taken.
ServerEvents.recipes(event => {
  // 1) Repoint graphene's only consumer — createnuclear:graphite_rod (a Create mechanical-crafting
  //    recipe) — onto the tagged graphite ingot, 1:1. replaceInput keeps the recipe's pattern/counts
  //    and just swaps the material, so any mod that provides c:ingots/graphite now satisfies it.
  event.replaceInput({}, 'createnuclear:graphene', '#c:ingots/graphite')

  // 2) Remove graphene's coal-dust pressing recipe — the cheap route Option 1 retires. With its only
  //    consumer repointed and its only recipe gone, graphene is no longer craftable or used (it stays
  //    registered as an inert orphan; nothing references it).
  event.remove({ id: 'createnuclear:pressing/graphene' })
})
