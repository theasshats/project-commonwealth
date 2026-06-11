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
// dye item, so the bare id fails to resolve; the stock bench recipes use the tag too. LOAD-SAFE /
// UNVERIFIED in-game; playtest items on #234.

ServerEvents.recipes(event => {
  event.remove({ output: 'immersive_paintings:painting' })
  event.recipes.create.deploying('immersive_paintings:painting',
    ['minecraft:paper', '#immersive_paintings:dye'])

  event.remove({ output: 'immersive_paintings:graffiti' })
  event.recipes.create.mixing('immersive_paintings:graffiti',
    ['#immersive_paintings:dye', 'minecraft:gunpowder', 'minecraft:bucket'])

  event.remove({ output: 'immersive_paintings:glow_painting' })
  event.recipes.create.deploying('immersive_paintings:glow_painting',
    ['immersive_paintings:painting', 'minecraft:glow_ink_sac'])

  event.remove({ output: 'immersive_paintings:glow_graffiti' })
  event.recipes.create.deploying('immersive_paintings:glow_graffiti',
    ['immersive_paintings:graffiti', 'minecraft:glow_ink_sac'])

  console.info('[pcmc] immersive paintings: painting/graffiti + glow variants route through Create (deploying/mixing); uploads stay locked via config (#94).')
})
