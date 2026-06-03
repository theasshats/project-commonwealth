// Magic Web v2 — OCCULT branch.  Emulates Create: Occult Engineering's keystone trick: route the
// occult side through its EXISTING intermediate `occultengineering:spirit_solution` rather than
// inventing one. Verified against the OE jar: spirit_solution is a FLUID (mb), minted by a HEATED
// create:mixing of an item + water fluid (e.g. otherworld_essence+1000mb water -> 1000mb solution,
// datura+100mb -> 100mb). We add more minting paths INTO that fluid from the spine + the necromancy
// mods, so every occult branch funnels through the one reagent OE already uses.
//
// spirit_fire schema verified against the occultism jar: {ingredient:{item}, result:{count,id}}.
// create:mixing uses the pack's proven event.recipes.create.mixing builder. occultism:ritual is NOT
// authored (pentacle/spirit-bound; not KubeJS-safe). ALL ADDITIVE.

ServerEvents.recipes(event => {
  const spiritFire = (output, input) => event.custom({
    type: 'occultism:spirit_fire',
    ingredient: { item: input },
    result: { count: 1, id: output }
  })

  // ── MINT THE INTERMEDIATE (a FLUID) — heated create:mixing, mirroring OE's own recipes. ──
  // Ars source -> spirit_solution (the spine produces the occult intermediate).
  event.recipes.create.mixing(Fluid.of('occultengineering:spirit_solution', 250),
    ['ars_nouveau:source_gem', Fluid.water(250)]).heated()
  // Born in Chaos ethereal_spirit -> spirit_solution (its biggest drop feeds the occult intermediate).
  event.recipes.create.mixing(Fluid.of('occultengineering:spirit_solution', 1000),
    ['born_in_chaos_v1:ethereal_spirit', Fluid.water(1000)]).heated()

  // ── BORN IN CHAOS on-ramp: spirit dust burned in occult spirit-fire -> the cheap occult essence. ──
  spiritFire('occultism:demons_dream_essence', 'born_in_chaos_v1:spiritual_dust')

  // ── NECROMANCY cash-out: ethereal spirit refined into the higher otherworld_essence (which bridges
  //    back to the arcane spine in 33). ──
  spiritFire('occultism:otherworld_essence', 'born_in_chaos_v1:ethereal_spirit')
})
