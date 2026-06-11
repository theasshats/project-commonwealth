// Artillery <-> armory seams (#132-pattern weave; v0.7.0 spine review round 2).
//
// Create Big Cannons and the gun line (createimmersivetacz / Create: Armorer) are one weapons industry —
// the guns already consume CBC parts (recoil springs, the steel autocannon barrel). This file runs the
// seam the other way, so the armory's propellant line feeds the artillery:
//
//   - powder_charge fills from the armory's gunpowder fluid at a spout (200mb = 4 gunpowder), and that
//     is the ONLY route (06-11 playtest decision): the stock shapeless (packed_gunpowder + empty
//     charge) is removed, and with it packed_gunpowder's compacting source — big cartridges fill from
//     the NITROPOWDER tag in code (verified in the 5.11.3 jar), so that shapeless was packed_gunpowder's
//     only consumer. The orphaned item is JEI-hidden via
//     kubejs/data/c/tags/item/hidden_from_recipe_viewers.json. One propellant industry, two calibers.

ServerEvents.recipes(event => {
  event.remove({ id: 'createbigcannons:powder_charge' })
  event.remove({ id: 'createbigcannons:compacting/packed_gunpowder' })

  event.recipes.create.filling('createbigcannons:powder_charge', [
    'createbigcannons:empty_powder_charge',
    Fluid.of('createimmersivetacz:gunpowder_fluid', 200)
  ])

  console.info('[pcmc] artillery seam: powder charges fill from gunpowder fluid only (armory propellant feeds the cannons).')
})
