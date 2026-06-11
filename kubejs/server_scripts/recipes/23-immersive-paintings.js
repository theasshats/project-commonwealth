// Immersive Paintings (#172) — the four craftables route through Create processing.
//
// The keep/cut question was settled by #94 (mod KEPT, custom-image uploads locked server-side:
// config/immersivepaintings.json uploadPermissionLevel=5 — players can't register images, built-ins
// only). This file does the other half: the recipe weave that earns the mod its Create anchor.
//
// Deco stays CHEAP (per #84's settled answer: difficulty lands on tech, not decoration) — same
// material families as stock, only the METHOD moves onto Create processing:
//   painting      = dye deployed onto paper            (a mechanized print bed)
//   graffiti      = dye + gunpowder + bucket, mixed    (pressurized spray can in a basin)
//   glow variants = glow ink deployed onto the base
//
// #immersive_paintings:dye is the mod's own item TAG (the 16 vanilla dyes) — the mod registers no
// dye item. Written as event.custom() raw JSON, NOT event.recipes.create.*: in the create schema's
// item-or-fluid ingredient union a bare '#ns:path' string lands in the FLUID branch — deploying then
// fails parse ("Recipe has more fluid inputs (1) than supported (0)", the 06-11 playtest error) and
// mixing silently took the dye as an EMPTY fluid tag, so graffiti listed only gunpowder + bucket.
// A raw {tag:} ingredient object is unambiguous. Playtest items on #234.

ServerEvents.recipes(event => {
  event.remove({ output: 'immersive_paintings:painting' })
  event.custom({
    type: 'create:deploying',
    ingredients: [{ item: 'minecraft:paper' }, { tag: 'immersive_paintings:dye' }],
    results: [{ id: 'immersive_paintings:painting' }]
  }).id('pcmc:paintings/painting')

  event.remove({ output: 'immersive_paintings:graffiti' })
  event.custom({
    type: 'create:mixing',
    ingredients: [{ tag: 'immersive_paintings:dye' }, { item: 'minecraft:gunpowder' }, { item: 'minecraft:bucket' }],
    results: [{ id: 'immersive_paintings:graffiti' }]
  }).id('pcmc:paintings/graffiti')

  event.remove({ output: 'immersive_paintings:glow_painting' })
  event.custom({
    type: 'create:deploying',
    ingredients: [{ item: 'immersive_paintings:painting' }, { item: 'minecraft:glow_ink_sac' }],
    results: [{ id: 'immersive_paintings:glow_painting' }]
  }).id('pcmc:paintings/glow_painting')

  event.remove({ output: 'immersive_paintings:glow_graffiti' })
  event.custom({
    type: 'create:deploying',
    ingredients: [{ item: 'immersive_paintings:graffiti' }, { item: 'minecraft:glow_ink_sac' }],
    results: [{ id: 'immersive_paintings:glow_graffiti' }]
  }).id('pcmc:paintings/glow_graffiti')

  console.info('[pcmc] immersive paintings: painting/graffiti + glow variants route through Create (deploying/mixing); uploads stay locked via config (#94).')
})
