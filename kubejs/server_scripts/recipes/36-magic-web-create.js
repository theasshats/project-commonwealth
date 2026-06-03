// Magic Web v2 — magic ▶ CREATE pillar.  Files 33–35 weave the magic mods to EACH OTHER, and 34 already
// routes the occult side through Create (source/spirits -> spirit_solution via create:mixing).  This file
// adds the OTHER half of the multi-pillar goal (RECIPES.md rubric #4): put the magic-spine MODS' metals on
// the Create tech spine, by giving them a Create-crusher route they don't have today.  ALL ADDITIVE — every
// native blasting / occult-crusher path stays; this only adds a Create path (+ a little XP, like 35-web-bridges).
//
// Ars Nouveau has no metal (it's source-based) and is already Create-woven via the source -> spirit_solution
// mixing in 34.  Item ids verified against tools/mod-data/{by-mod,recipes}/*.

ServerEvents.recipes(event => {
  // KubeJS Create 1.21: chance outputs use CreateItem.of(item, chance) (NOT .withChance()).
  const xp = chance => CreateItem.of('create:experience_nugget', chance)

  // Iron's Spellbooks mithril — the spine's magic metal, with NO Create route today (vanilla blasting only:
  // raw -> scrap -> ingot). Silk-touched ore -> doubled raw in the crusher, mirroring Create's own ore-
  // doubling; both ore variants. The blasting chain is untouched, so this is purely an added Create path.
  ;['irons_spellbooks:mithril_ore', 'irons_spellbooks:deepslate_mithril_ore'].forEach(ore =>
    event.recipes.create.crushing(['2x irons_spellbooks:raw_mithril', xp(0.25)], ore)
  )

  // Occultism iesnium — occultism crushes it in its OWN (spirit) crusher; add a Create-crusher route too,
  // so the occult metal flows through the Create spine as well. The dust already smelts back to the ingot
  // (occultism:smelting/iesnium_ingot_from_dust), so this doubling path is real, not a dead-end.
  event.recipes.create.crushing(['2x occultism:iesnium_dust', xp(0.25)], 'occultism:iesnium_ore')
})
