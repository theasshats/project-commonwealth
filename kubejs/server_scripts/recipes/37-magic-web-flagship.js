// Magic Web v2 — FLAGSHIP depth tier (§10 of docs/MAGIC-WEB-HANDOFF.md).  The cross-school bridges in
// 33-36 are the light "currency" tier; this is the heavy tier the #62 benchmark asks for: a flagship
// item built through a MULTI-STEP chain on the mods' OWN native magic stations — the magic analogue of
// 60-mffs.js's sequenced_assembly, but kept entirely magic (NOT routed through Create, by design).
//
// "Arcane Convergence": every school feeds one endgame forge of Iron's arcane ingot (the metal behind
// its flagship spell gear). Two real stages, so it's a chain, not a one-step trade:
//   1. IMBUEMENT CHAMBER — distil occultism's premium ritual essence into a `converged_essence` core
//      (both Galosphere attunement shards consumed; heavy source cost).
//   2. ENCHANTING APPARATUS — spend that core as the reagent while the four remaining schools converge
//      on the pedestals (Ars source, Iron's arcane essence, occult demon essence, Born-in-Chaos spirit)
//      to forge the arcane ingots (heavy sourceCost).
//
// ADDITIVE — the vanilla arcane_ingot craft stays; this is a deliberately premium prestige/bulk path,
// far more costly per ingot than the original (rubric #1: never make a power item cheaper). Schemas are
// the jar-verified ones from §4 (imbuement / enchanting_apparatus). Counts/source are first-pass — tune
// in playtest. `derpack:converged_essence` is registered in startup_scripts/01-intermediate-parts.js.

ServerEvents.recipes(event => {
  // STAGE 1 — Imbuement Chamber: occult premium essence + both attunement shards -> the converged core.
  event.custom({
    type: 'ars_nouveau:imbuement',
    input: { item: 'occultism:otherworld_essence' },
    output: { count: 1, id: 'derpack:converged_essence' },
    source: 2000,
    pedestalItems: [
      { item: 'galosphere:allurite_shard' },
      { item: 'galosphere:lumiere_shard' }
    ]
  })

  // STAGE 2 — Enchanting Apparatus: the core as reagent, the other four schools on the pedestals,
  // forged into Iron's flagship arcane metal. Heavy sourceCost gates the convergence.
  event.custom({
    type: 'ars_nouveau:enchanting_apparatus',
    reagent: { item: 'derpack:converged_essence' },
    pedestalItems: [
      { item: 'ars_nouveau:source_gem' },          // Ars Nouveau (the spine)
      { item: 'irons_spellbooks:arcane_essence' },  // Iron's Spellbooks
      { item: 'occultism:demons_dream_essence' },   // Occultism
      { item: 'born_in_chaos_v1:ethereal_spirit' }  // Born in Chaos
    ],
    result: { count: 4, id: 'irons_spellbooks:arcane_ingot' },
    sourceCost: 3000,
    keepNbtOfReagent: false
  })
})
