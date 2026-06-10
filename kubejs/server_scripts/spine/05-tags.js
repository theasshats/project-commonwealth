// Create spine — spine tags.
//
// #pcmc:boss_keys — the FLAT boss-gate roster (CREATE-SPINE.md 3b: no primary across the ladder). NOTE
// the implemented 40-gates ladder uses THEMATIC per-tier drops (ancient_metal/cursium/ignitium ascend
// Cataclysm; #pcmc:mowzies_mid is the one band-tag in use) — the "no chokepoint" rule is satisfied ACROSS
// gates (four gates, three mods' bosses), not within each one. This flat tag stays registered as the
// roster for FUTURE generic gates (e.g. the colony-fork pattern, #220); nothing consumes it yet.
//
// All IDs verified against tools/mod-data/by-mod/. Roster: Cataclysm, Mowzie's, Grimoire of Gaia, Born in
// Chaos. (Mutants — namespace `mutantszombies` — ships only spawn eggs, no boss-drop items, so it can't
// supply a key; excluded until/unless it adds a drop item.)

ServerEvents.tags('item', event => {
  event.add('pcmc:boss_keys', [
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
  event.add('pcmc:mowzies_mid', [
    'mowziesmobs:ice_crystal',     // Frostmaw
    'mowziesmobs:sculptor_staff'   // Sculptor
  ])

  // ── HEAT LADDER -> FLIGHT seam: the hot-air balloon's adjustable burner takes any aeronautics
  //    burner_fire item as its fire source — the heat ladder's basic_burner joins the tag, so the
  //    T1 flight chain runs on the same built heat as the kitchen and the first boilers. ──
  event.add('aeronautics:burner_fire', ['createlowheated:basic_burner'])
})
