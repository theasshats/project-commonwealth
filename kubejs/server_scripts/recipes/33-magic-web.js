// Magic web — weave the magic mods into one progression, around an arcane SPINE (Ars Nouveau +
// Iron's Spellbooks, the two understandable spellcasters).  Per the maintainer steer: don't jam one
// mod's component into all the others — instead add a few PURELY ADDITIVE bridge recipes (no existing
// magic recipe is touched) that let progression flow between the systems:
//
//   Born in Chaos (necromancy)  ──▶  Occultism (summoning)  ──▶  arcane SPINE  ◀──▶  (Ars ↔ Iron's)
//
// Galosphere's allurite / lumiere shards are the connective thread — the "arcane attunement crystal"
// that catalyses the cross-school conversions (this also gives an underused worldgen mod a magic
// purpose, and makes the bridges cost a real item so they aren't free essence-arbitrage).
//
// All recipes are ADDITIVE (alt paths), so nothing's existing acquisition breaks. Ratios are a
// first pass — tune in playtest against the real essence economies.
//
// Ids verified against tools/mod-data/recipes/{ars_nouveau,irons_spellbooks,occultism,
// born_in_chaos,Galosphere}-*.txt.

ServerEvents.recipes(event => {
  // ── SPINE BOND — Ars Nouveau Source ⇄ Iron's Spellbooks arcane essence. Each direction consumes
  //    an attunement crystal, so round-tripping costs crystals (no free arbitrage). ──
  // Ars Source crystallised into Iron's arcane essence (blue allurite attunement).
  event.shapeless('2x irons_spellbooks:arcane_essence', ['ars_nouveau:source_gem', 'galosphere:allurite_shard'])
  // …and back: arcane essence condensed into a Source gem (pink lumiere attunement).
  event.shapeless('ars_nouveau:source_gem', [
    'irons_spellbooks:arcane_essence', 'irons_spellbooks:arcane_essence', 'galosphere:lumiere_shard'
  ])

  // ── OCCULTISM ──▶ SPINE — the demonic branch joins the arcane web through its higher, ritual-made
  //    otherworld_essence (NOT the cheap farmable datura essence), refined with an attunement crystal. ──
  event.shapeless('2x irons_spellbooks:arcane_essence', ['occultism:otherworld_essence', 'galosphere:allurite_shard'])

  // ── BORN IN CHAOS ──▶ OCCULTISM — massage the necromancy outlier in: its spirit matter feeds the
  //    occult spirit economy, so Born in Chaos drops finally have a place in the pack's magic. ──
  event.shapeless('occultism:demons_dream_essence', ['born_in_chaos_v1:spiritual_dust', 'born_in_chaos_v1:spiritual_dust'])
})
