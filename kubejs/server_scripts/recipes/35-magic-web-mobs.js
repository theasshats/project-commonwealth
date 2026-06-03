// Magic Web v2 — fold in the ISOLATED magic mods.  Grimoire of Gaia and Mowzie's Mobs have signature
// mystical DROPS with no crafting sink; Modular Golems' construction sits outside the magic economy.
// Give each a sink INTO the spine (source / occult intermediate / occult essence) — without consuming
// any intended reward GEAR. Schemas jar-verified (see 33/34). ALL ADDITIVE.

ServerEvents.recipes(event => {
  const imbue = (output, input, source) => event.custom({
    type: 'ars_nouveau:imbuement', input: { item: input },
    output: { count: 1, id: output }, source: source, pedestalItems: []
  })
  const spiritFire = (output, input) => event.custom({
    type: 'occultism:spirit_fire', ingredient: { item: input }, result: { count: 1, id: output }
  })

  // ── GRIMOIRE OF GAIA — soul / arcane / necromancy drops ──
  // soulfire (soul drop) -> the occult intermediate FLUID, via the same heated mixing OE uses.
  event.recipes.create.mixing(Fluid.of('occultengineering:spirit_solution', 500),
    ['grimoireofgaia:soulfire', Fluid.water(500)]).heated()
  imbue('ars_nouveau:source_gem', 'grimoireofgaia:shiny_pearl', 600)   // arcane drop -> spine currency
  spiritFire('occultism:demons_dream_essence', 'grimoireofgaia:withered_brain') // necromancy organs ->
  spiritFire('occultism:demons_dream_essence', 'grimoireofgaia:rotten_heart')   //   occult essence

  // ── MOWZIE'S MOBS — elemental / luminous / nature drops (reward gear left untouched) ──
  imbue('ars_nouveau:water_essence', 'mowziesmobs:ice_crystal', 500)   // frost -> water essence
  imbue('ars_nouveau:source_gem', 'mowziesmobs:glowing_jelly', 500)    // luminous -> source
  spiritFire('occultism:datura', 'mowziesmobs:foliaath_seed')          // nature seed -> occult feedstock

  // ── MODULAR GOLEMS — a golem core "animated by source": an alternative Ars path to the upgrade
  //    base, joining golem construction to the magic economy (the Create-gated recipe in
  //    30-modular-golems.js stays; real source cost so it isn't a shortcut). ──
  imbue('modulargolems:empty_upgrade', 'ars_nouveau:source_gem', 400)
})
