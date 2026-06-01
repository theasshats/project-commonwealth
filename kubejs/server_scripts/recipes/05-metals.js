// Metals — source the alloy metals through Create (FOUNDATION pass; runs before the per-mod files).
//
// Bronze & brass are already Create-only here (Ironworks / Metalwork create:mixing of copper+tin /
// copper+zinc). STEEL had clean Create paths (TFMG casting, Metalwork molten->compacting, Create Big
// Cannons compacting, Ironworks) AND two trivial NON-Create shortcuts. Closing those routes ALL steel
// through Create — and because steel is shared via #c:ingots/steel (almost-unified), this
// auto-propagates to every steel-using mod (Samurai, MFFS, …) with no per-mod edits.
//
// Not a grind: steel just becomes a mid-tier "needs a bit of Create running" metal (one heating/
// casting step), then it's used freely. Vanilla iron/copper/gold smelting is untouched.
//
// Verified against tools/mod-data/recipes/ — the Create steel sources below remain after removal.

ServerEvents.recipes(event => {
  // Remove non-Create steel shortcuts BY RECIPE ID (never by output — that would nuke the Create paths).
  // orig: samurai_dynasty:steel_ingot_from_blasting_iron_ingot = blast(minecraft:iron_ingot) -> steel
  event.remove({ id: 'samurai_dynasty:steel_ingot_from_blasting_iron_ingot' })
  // orig: mffs:steel_compound = shaped(c:ingots/iron + coal) -> steel_compound
  // orig: mffs:steel_ingot    = smelt(mffs:steel_compound)   -> steel
  event.remove({ id: 'mffs:steel_compound' })
  event.remove({ id: 'mffs:steel_ingot' })

  // KEPT — the Create steel chain (steel stays craftable through these):
  //   tfmg:casting/steel · createmetalwork …compacting(molten_steel) · createbigcannons:compacting/forge_steel_ingot · create_ironworks
  // Also KEPT (not bypasses): samurai_dynasty:steel_ingot is just steel_block->9 ingots (storage
  //   decompacting); the createnuclear/ironworks/cbc "from_block"/"from_nuggets" steel recipes are
  //   likewise storage conversions — you must already own steel.
  // ALREADY Create-only: bronze & brass (Ironworks/Metalwork create:mixing / compacting / splashing).
  // RESOLVED (was a FLAG): occultengineering smelt/blast brass_dust -> create:brass_ingot is NOT a
  //   bypass — full-pack audit shows brass_dust's only source is occultism:crushing/brass_dust_from_ingot
  //   (crushing a brass INGOT). It's a recycle loop fed by Create-made brass, so no non-Create brass
  //   can enter. Bronze has no non-Create source either. So steel/brass/bronze are all fully
  //   Create-gated at the source.
})
