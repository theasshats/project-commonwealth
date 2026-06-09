// Game Discs (#170, part 2) — the six non-starter discs as exploration finds.
//
// Most structures in the pack are MODDED (CTOV villages, When Dungeons Arise, the YUNG's set, Towns &
// Towers, Tidal Towns, Stoneholm, Underground Worlds, Dungeons & Taverns, Valarian Conquest, …), so we
// inject by loot TYPE — every chest table, vanilla and modded alike — instead of naming vanilla
// structure tables that mostly no longer generate. Rarity is a per-chest random chance, tiered by fame:
//
//   common   ~6%  — Blocktris, Froggie
//   uncommon ~3%  — Flappy Bird, Slime
//   rare    ~1.5% — Rabbit, TNT Sweeper
//
// (Pong is the craftable starter — see recipes/99-gamediscs.js.) Chances are a STARTING preset; tune
// against how dense the modded-structure chest count turns out to be. LootJS 3.x API: addTableModifier
// with LootType.CHEST is the non-deprecated "all chests" target; conditions (randomChance) are checked
// before the addLoot action.
LootJS.lootTables(event => {
  // (Rhino/KubeJS doesn't support rest params — pass the discs as an array.)
  const find = (chance, discs) => discs.forEach(disc =>
    event.addTableModifier(LootType.CHEST).randomChance(chance).addLoot(disc)
  )

  find(0.06,  ['gamediscs:game_disc_blocktris', 'gamediscs:game_disc_froggie'])
  find(0.03,  ['gamediscs:game_disc_flappy_bird', 'gamediscs:game_disc_slime'])
  find(0.015, ['gamediscs:game_disc_rabbit', 'gamediscs:game_disc_tnt_sweeper'])
})
