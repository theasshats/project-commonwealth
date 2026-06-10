// Artillery <-> armory seams (#132-pattern weave; v0.7.0 spine review round 2).
//
// Create Big Cannons and the gun line (createimmersivetacz / Create: Armorer) are one weapons industry —
// the guns already consume CBC parts (recoil springs, the steel autocannon barrel). These ADDITIVE
// recipes run the seam the other way, so the armory's propellant line feeds the artillery:
//
//   - powder_charge can be FILLED from the armory's gunpowder fluid (200mb = 4 gunpowder, in the same
//     band as the native packed-gunpowder compacting route, which stays untouched). One propellant
//     industry, two calibers.
//
// Additive only — nothing removed, both native routes intact. LOAD-SAFE / UNVERIFIED in-game.

ServerEvents.recipes(event => {
  event.recipes.create.filling('createbigcannons:powder_charge', [
    'createbigcannons:empty_powder_charge',
    Fluid.of('createimmersivetacz:gunpowder_fluid', 200)
  ])

  console.info('[pcmc] artillery seam: powder charges fill from gunpowder fluid (armory propellant feeds the cannons).')
})
