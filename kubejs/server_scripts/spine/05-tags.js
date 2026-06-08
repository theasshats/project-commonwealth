// Create spine — spine tags.
//
// #derpack:boss_keys — the FLAT boss-gate roster (CREATE-SPINE.md 3b: no primary; any roster drop opens a
// fork). Pattern B recipes require this tag, so any listed boss drop satisfies a gate — no single fight is
// a chokepoint. Consumed for repeat components, one-time key for machine unlocks (per recipe).
//
// All IDs verified against tools/mod-data/by-mod/. Roster: Cataclysm, Mowzie's, Grimoire of Gaia, Born in
// Chaos. (Mutants — namespace `mutantszombies` — ships only spawn eggs, no boss-drop items, so it can't
// supply a key; excluded until/unless it adds a drop item.)

ServerEvents.tags('item', event => {
  event.add('derpack:boss_keys', [
    // L_Ender's Cataclysm
    'cataclysm:ignitium_ingot',
    'cataclysm:cursium_ingot',
    'cataclysm:witherite_ingot',
    'cataclysm:void_core',
    'cataclysm:monstrous_horn',
    'cataclysm:essence_of_the_storm',
    // Mowzie's Mobs (Frostmaw / Ferrous Wroughtnaut)
    'mowziesmobs:ice_crystal',
    'mowziesmobs:earthrend_gauntlet',
    // Grimoire of Gaia
    'grimoireofgaia:rotten_heart',
    'grimoireofgaia:fireshard',
    // Born in Chaos
    'born_in_chaos_v1:lifestealer_skull',
    'born_in_chaos_v1:nightmare_stalker_skull'
  ])

  // Mowzie's MID-tier bosses (~Frostmaw difficulty) — the T3 advanced-electric gate accepts ANY of these
  // ("any Mowzie's boss equivalent to the Frostmaw"). Per mowziesmobs' own entity_type/bosses tag, the mid
  // band is Frostmaw + Sculptor (Wroughtnaut is early, Umvuthi is late). Add naga_fang if you want it laxer.
  event.add('derpack:mowzies_mid', [
    'mowziesmobs:ice_crystal',     // Frostmaw
    'mowziesmobs:sculptor_staff'   // Sculptor
  ])
})
