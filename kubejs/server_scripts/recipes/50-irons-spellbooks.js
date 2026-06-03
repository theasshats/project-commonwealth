// Iron's Spells & Spellbooks — "made through Create" (single restrained touch).
//
// Iron's Spellbooks is an inscription/essence MAGIC mod: spell scrolls, runes, arcane & cloth
// armor, staffs and the alchemist cauldron are routed through the Inscription Table / Alchemist
// Cauldron, not the crafting table — all thematic, all LEFT ALONE. Over-gating magic is wrong.
//
// The one structurally-separable metal keystone is `weapon_parts` (the forged metal core that the
// metal weapons — boreal_blade, spellbreaker, twilight_gale — are built from). Gating it once,
// lightly, transitively Create-routes that small metal-weapon branch without touching any spell.
//
// Verified against tools/mod-data/recipes/irons_spellbooks-1.21.1-3.15.6.txt.

ServerEvents.recipes(event => {
  // orig weapon_parts: c:ingots/mithril + irons_spellbooks:arcane_ingot
  // Keep the mithril + arcane core; fit it into a Create-pressed iron sheet (the forged casing) —
  // one light gate, so the downstream weapons stay ~comparable in cost.
  event.remove({ output: 'irons_spellbooks:weapon_parts' })
  event.shaped('irons_spellbooks:weapon_parts', ['M', 'S', 'A'], {
    M: '#c:ingots/mithril', S: 'create:iron_sheet', A: 'irons_spellbooks:arcane_ingot'
  })

  // LEFT ALONE: arcane_ingot (essence-bound), all spell books / scrolls / runes / upgrade orbs,
  // wizard & cloth armor, staffs, amulets, and every inscription-table / alchemist-cauldron output.
})
