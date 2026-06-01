// Magic Web v2 — fold in the ISOLATED magic mods.  Grimoire of Gaia and Mowzie's Mobs have signature
// mystical mob DROPS with no crafting sink, and Modular Golems' construction sits outside the magic
// economy. Give each a sink INTO the spine (source / occult intermediate), so their drops finally
// have a purpose — without consuming any intended reward GEAR.
//
// AUTHORING mirrors the other web files: create:mixing via the proven builder; Ars imbuement +
// occultism spirit_fire via event.custom({...}) with event.shapeless table fallbacks. All ADDITIVE.
//
// Ids verified against tools/mod-data/{recipes,loot}/{GrimoireOfGaia4,mowziesmobs,modulargolems}-*.txt.

ServerEvents.recipes(event => {
  const imbue = (output, input, source) => {
    event.custom({ type: 'ars_nouveau:imbuement', input: { item: input }, output: { id: output, count: 1 }, source: source })
    event.shapeless(output, [input, 'galosphere:allurite_shard']) // fallback (shard keeps it non-trivial)
  }
  const spiritFire = (output, input) => {
    event.custom({ type: 'occultism:spirit_fire', ingredient: { item: input }, result: { item: output, count: 1 } })
    event.shapeless(output, [input])
  }

  // ── GRIMOIRE OF GAIA — soul/arcane/necromancy drops into the web ──
  // soulfire (soul drop) -> the occult intermediate, via the same create:mixing OE uses.
  event.recipes.create.mixing('occultengineering:spirit_solution', ['grimoireofgaia:soulfire', Fluid.water(250)])
  // shiny_pearl (arcane drop) -> spine currency.
  imbue('ars_nouveau:source_gem', 'grimoireofgaia:shiny_pearl', 600)
  // necromancy-flavoured organs -> the cheap occult essence (ties Gaia to the dark branch).
  spiritFire('occultism:demons_dream_essence', 'grimoireofgaia:withered_brain')
  spiritFire('occultism:demons_dream_essence', 'grimoireofgaia:rotten_heart')

  // ── MOWZIE'S MOBS — elemental/luminous/nature drops into the web (gear left untouched) ──
  imbue('ars_nouveau:water_essence', 'mowziesmobs:ice_crystal', 500)   // frost -> water essence
  imbue('ars_nouveau:source_gem', 'mowziesmobs:glowing_jelly', 500)    // luminous -> source (light = arcane)
  spiritFire('occultism:datura', 'mowziesmobs:foliaath_seed')          // nature seed -> occult feedstock

  // ── MODULAR GOLEMS — a golem core "animated by source": an alternative Ars path to the upgrade
  //    base, joining golem construction to the magic economy (additive; the Create-gated recipe in
  //    30-modular-golems.js stays). Real source cost so it isn't a shortcut. ──
  imbue('modulargolems:empty_upgrade', 'ars_nouveau:source_gem', 400)
})
