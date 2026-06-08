// Create spine — spine tags.
//
// #derpack:boss_keys — the FLAT boss-gate roster (CREATE-SPINE.md 3b: no primary; any roster drop opens a
// fork). Pattern B recipes require this tag, so any listed boss drop satisfies a gate — no single fight is
// a chokepoint. Consumed for repeat components, one-time key for machine unlocks (per recipe).
//
// IDs below are verified against tools/mod-data/by-mod/. The roster is Cataclysm, Mowzie's, Grimoire of
// Gaia, Born in Chaos, Mutants — the Cataclysm + Mowzie's drops are filled in; the others are TODO until
// their exact drop IDs are confirmed against the digest (kept out for now to keep the boot log clean).

ServerEvents.tags('item', event => {
  // L_Ender's Cataclysm — verified drops (purpose-built boss-drop progression).
  event.add('derpack:boss_keys', [
    'cataclysm:ignitium_ingot',
    'cataclysm:cursium_ingot',
    'cataclysm:witherite_ingot',
    'cataclysm:void_core',
    'cataclysm:monstrous_horn',
    'cataclysm:essence_of_the_storm'
  ])

  // Mowzie's Mobs — Frostmaw / Ferrous Wroughtnaut drops.
  event.add('derpack:boss_keys', ['mowziesmobs:ice_crystal'])

  // TODO (verify IDs in tools/mod-data, then add for full flat roster):
  //   grimoireofgaia:<boss drop>, borninchaos:<boss drop>, mutantmonsters:<boss drop>
})
