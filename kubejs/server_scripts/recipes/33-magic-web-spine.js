// Magic Web v2 — SPINE (Ars Nouveau is the hub).  Separate PR from the Create overhaul.
//
// The pack's own bridge mods set the pattern we emulate: Ars 'n Spells makes Ars Nouveau the casting
// hub that wields Iron's spells (so Ars is the magic spine), and Create: Occult Engineering bridges
// via native machines + a dedicated intermediate. Here, Ars `source_gem` is the universal magic
// currency: foreign essences are MINTED FROM and CASHED BACK INTO source through Ars's own refine
// stations — the Imbuement Chamber and Enchanting Apparatus — not a crafting table.
//
// AUTHORING: the Ars custom-recipe JSON schemas (imbuement / enchanting_apparatus) can't be confirmed
// headless, so each native recipe is shipped via event.custom({...}) (an isolated failure just skips
// that one recipe) AND paired with an event.shapeless TABLE FALLBACK so progression never dead-ends
// while the schema is verified in-game. Field names (output vs result, source vs sourceCost) are
// best-guess — see docs/RECIPES.md and verify in JEI/EMI on first load.
//
// ALL ADDITIVE — no existing recipe is removed. Galosphere allurite/lumiere shards remain the
// connective "arcane attunement" catalyst (and keep each conversion non-free so it isn't arbitrage).
//
// Ids verified against tools/mod-data/recipes/{ars_nouveau,irons_spellbooks,occultism,Galosphere}-*.txt.

ServerEvents.recipes(event => {
  // Helper: an Ars Imbuement Chamber recipe (input -> output, costs source), with a table fallback.
  const imbue = (output, input, source, fallbackExtra) => {
    event.custom({
      type: 'ars_nouveau:imbuement',
      input: { item: input },
      output: { id: output, count: 1 },
      source: source
    })
    // table fallback (slightly costlier — adds the attunement shard so it's not strictly better)
    event.shapeless(output, [input, ...(fallbackExtra || [])])
  }

  // ── SPINE BOND: Ars source ⇄ Iron's arcane essence ───────────────────────────────────────────
  // Source minted into arcane essence (Imbuement; fallback table craft via blue attunement shard).
  imbue('irons_spellbooks:arcane_essence', 'ars_nouveau:source_gem', 1000, ['galosphere:allurite_shard'])

  // Cash arcane essence back into source on the Enchanting Apparatus (pink attunement pedestal).
  event.custom({
    type: 'ars_nouveau:enchanting_apparatus',
    reagent: { item: 'irons_spellbooks:arcane_essence' },
    pedestalItems: [{ item: 'galosphere:lumiere_shard' }],
    result: { id: 'ars_nouveau:source_gem', count: 2 },
    sourceCost: 500,
    keepNbtOfReagent: false
  })
  // table fallback for the cash-back (keep v1's lossy ratio: 2 essence + shard -> 1 source).
  event.shapeless('ars_nouveau:source_gem', [
    'irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'galosphere:lumiere_shard'
  ])

  // ── SPINE -> OCCULT FEEDSTOCK: source mints the cheap occult entry essence (the on-ramp into the
  //    occult branch handled in 34-magic-web-occult.js). ──
  imbue('occultism:demons_dream_essence', 'ars_nouveau:source_gem', 800)
})
