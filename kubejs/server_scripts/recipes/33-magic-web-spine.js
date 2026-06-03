// Magic Web v2 — SPINE (Ars Nouveau is the hub).  Separate PR from the Create overhaul.
//
// Pattern emulated from the pack's own bridge mods: Ars 'n Spells makes Ars the casting hub that
// wields Iron's spells (→ Ars is the spine); here Ars `source_gem` is the universal magic currency.
// Foreign essences are MINTED FROM / CASHED BACK INTO source through Ars's own refine stations — the
// Imbuement Chamber and Enchanting Apparatus — NOT a crafting table.
//
// Recipe schemas verified against the actual jar (ars_nouveau-1.21.1-5.11.3): imbuement =
// {input, output:{count,id}, source, pedestalItems}; enchanting_apparatus = {reagent, pedestalItems,
// result:{count,id}, sourceCost, keepNbtOfReagent}. Authored via event.custom (matches the mod's own
// datapack format exactly). Galosphere shards ride along as the "arcane attunement" pedestal — woven
// in thematically and consumed, so conversions cost a real item. ALL ADDITIVE (no recipe removed).

ServerEvents.recipes(event => {
  // Ars Imbuement Chamber: input + source (+ optional pedestal items) -> output.
  const imbue = (output, input, source, pedestals) => event.custom({
    type: 'ars_nouveau:imbuement',
    input: { item: input },
    output: { count: 1, id: output },
    source: source,
    pedestalItems: (pedestals || []).map(p => ({ item: p }))
  })

  // ── SPINE BOND: Ars source ⇄ Iron's arcane essence ───────────────────────────────────────────
  // Source crystallised into Iron's arcane essence (Imbuement, blue allurite attunement pedestal).
  imbue('irons_spellbooks:arcane_essence', 'ars_nouveau:source_gem', 1000, ['galosphere:allurite_shard'])

  // Cash arcane essence back into source on the Enchanting Apparatus (pink lumiere attunement pedestal).
  event.custom({
    type: 'ars_nouveau:enchanting_apparatus',
    reagent: { item: 'irons_spellbooks:arcane_essence' },
    pedestalItems: [
      { item: 'irons_spellbooks:arcane_essence' },
      { item: 'galosphere:lumiere_shard' }
    ],
    result: { count: 2, id: 'ars_nouveau:source_gem' },
    sourceCost: 500,
    keepNbtOfReagent: false
  })

  // ── SPINE -> OCCULT FEEDSTOCK: source mints the cheap occult entry essence (on-ramp into the
  //    occult branch handled in 34-magic-web-occult.js). ──
  imbue('occultism:demons_dream_essence', 'ars_nouveau:source_gem', 800)

  // ── OCCULT -> SPINE RETURN: occultism's *premium* ritual-made otherworld_essence cashes back into
  //    the arcane spine (this is the path 34-magic-web-occult.js refers to as "bridges back to the
  //    arcane spine in 33"). Allurite-catalysed like the source->essence bond; low source top-up
  //    because the value rides in the essence. First-pass ratio — tune in playtest. ──
  imbue('irons_spellbooks:arcane_essence', 'occultism:otherworld_essence', 200, ['galosphere:allurite_shard'])
})
