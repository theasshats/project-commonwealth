// Magic Web v2 — OCCULT branch.  Emulates Create: Occult Engineering's keystone trick: route the
// occult side through its EXISTING dedicated intermediate `occultengineering:spirit_solution` rather
// than inventing a new reagent. OE already mints spirit_solution by create:mixing of
// occultism:otherworld_essence / occultism:datura + water; we add more native create:mixing minting
// paths INTO it from the spine and the necromancy mods, so every occult branch funnels through the
// one reagent the bridge mod already uses.
//
// AUTHORING: create:mixing uses the pack's proven event.recipes.create.mixing builder (safe, see
// 00-create-ify.js). The occultism:spirit_fire sinks use event.custom({...}) (raw JSON — isolated
// failure skips just that recipe) paired with an event.shapeless table fallback. occultism:ritual is
// intentionally NOT authored (pentacle/spirit-bound; not KubeJS-safe).
//
// ALL ADDITIVE. Ids verified against tools/mod-data/recipes/{occultengineering,occultism,
// born_in_chaos,ars_nouveau}-*.txt.

ServerEvents.recipes(event => {
  // Helper: occultism spirit_fire transform (single ingredient -> result) + table fallback.
  const spiritFire = (output, input) => {
    event.custom({
      type: 'occultism:spirit_fire',
      ingredient: { item: input },
      result: { item: output, count: 1 }
    })
    event.shapeless(output, [input]) // fallback if the spirit_fire schema needs an in-game tweak
  }

  // ── MINT THE INTERMEDIATE — spirit_solution from the spine + the necromancy branch, via the same
  //    native create:mixing OE itself uses (parallels OE's _from_essence / _from_fruit recipes). ──
  // Ars source -> spirit_solution (the spine produces the occult intermediate).
  event.recipes.create.mixing('occultengineering:spirit_solution', ['ars_nouveau:source_gem', Fluid.water(250)])
  // Born in Chaos ethereal_spirit -> spirit_solution (deepens the necromancy tie; its biggest drop
  // finally has a sink straight into the occult intermediate).
  event.recipes.create.mixing('occultengineering:spirit_solution', ['born_in_chaos_v1:ethereal_spirit', Fluid.water(250)])

  // ── BORN IN CHAOS low-tier on-ramp (kept from v1): spirit dust -> the cheap occult essence. ──
  event.shapeless('occultism:demons_dream_essence', ['born_in_chaos_v1:spiritual_dust', 'born_in_chaos_v1:spiritual_dust'])

  // ── NECROMANCY cash-out: BiC ethereal spirit refined in occult spirit-fire into the higher
  //    otherworld_essence (which itself bridges to the arcane spine in 33). ──
  spiritFire('occultism:otherworld_essence', 'born_in_chaos_v1:ethereal_spirit')
})
