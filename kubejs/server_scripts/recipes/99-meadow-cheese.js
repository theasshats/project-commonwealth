// Let's Do Meadow cheese -> made through Create Cheese  (closes issue #51).
//
// Meadow makes its cheese natively in a `meadow:cheese_form` (milk bucket + rennet, the mod's own
// block) — a Create BYPASS. Create Cheese already runs a full Create pipeline: milk --mixing-->
// cheese_curds --compacting--> soft_curd_cheese --maturing--> aged wheels. #51 asks for Meadow's
// cheeses to flow through that pipeline, so we ADD a Create path (we do NOT remove Meadow's native
// cheese_form — purely additive): compact Create's soft curd with Meadow's rennet into a Meadow
// cheese wheel. Meadow cheese now drops out of the Create cheese line.
//
// Scope: the BASE `meadow:cheese_wheel` (the generic one). The animal/colored variants
// (buffalo/goat/sheep/grain/warped/amethyst) stay on Meadow's cheese_form — they're gated on
// animal-specific milks that aren't Create fluids, and that animal tie-in is intentional.
//
// Verified against tools/mod-data/recipes/{letsdo-meadow,create_cheese_factory}-*.txt.

ServerEvents.recipes(event => {
  // Create-made soft curd + Meadow rennet, pressed -> a Meadow cheese wheel (the Create route).
  event.recipes.create.compacting('meadow:cheese_wheel', ['create_cheese:soft_curd_cheese', 'meadow:rennet'])
})
