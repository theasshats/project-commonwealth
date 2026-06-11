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
  //   decompacting); the ironworks/cbc "from_block"/"from_nuggets" steel recipes are
  //   likewise storage conversions — you must already own steel.
  // ALREADY Create-only: bronze & brass (Ironworks/Metalwork create:mixing / compacting / splashing).
  // RESOLVED (was a FLAG): occultengineering smelt/blast brass_dust -> create:brass_ingot is NOT a
  //   bypass — full-pack audit shows brass_dust's only source is occultism:crushing/brass_dust_from_ingot
  //   (crushing a brass INGOT). It's a recycle loop fed by Create-made brass, so no non-Create brass
  //   can enter. Bronze has no non-Create source either. So steel/brass/bronze are all fully
  //   Create-gated at the source.

  // ONE molten steel (06-11 playtest: "block of steel melts to CBC molten steel"). CBC's basin-foundry
  // melts output createbigcannons:molten_steel alongside TFMG's fluid — the last steel-form duplicate
  // AlmostUnified can't collapse (it doesn't unify fluids). Everything DOWNSTREAM of molten steel
  // already keys on the c:molten_steel TAG (verified in the 5.11.3 jar: cannon_casting block recipes,
  // the forge_steel_* compacting, and the c/fluid_casting_time data), so the melts re-point to
  // tfmg:molten_steel and CBC's fluid goes inert — dropped from c:molten_steel and JEI-hidden, both in
  // kubejs/data/c/tags/. CBC's other molten metals (cast iron / bronze / nethersteel) have no TFMG
  // twin and stay on their own scale.
  // ONE SCALE (06-11 round 3, maintainer call): 144 mb/ingot — TFMG's standard — everywhere. CBC's
  // stock 90 mb/ingot melts AND its 90 mb forge compacting are both re-authored to 16/144/1296
  // (nugget/ingot/block), so melt -> compact is lossless and melt -> TFMG-cast is lossless; no route
  // profits. (Melting at 144 against 90-mb compacting would inflate — the two MUST move together.)
  // Cannon casting consumes fixed mb per cast shape (code-side), so steel cannons get proportionally
  // cheaper in ingot terms under the richer melt — flagged on the PR playtest.
  const STEEL_MELTS = [
    ['melt_steel_nugget', 'c:nuggets/steel', 16, 20],
    ['melt_steel_ingot', 'c:ingots/steel', 144, 180],
    ['melt_steel_block', 'c:storage_blocks/steel', 1296, 1620]
  ]
  STEEL_MELTS.forEach(([name, tag, mb, ticks]) => {
    event.remove({ id: 'createbigcannons:melting/' + name })
    event.custom({
      type: 'createbigcannons:melting',
      heat_requirement: 'heated',
      ingredients: [{ tag: tag }],
      processing_time: ticks,
      results: [{ amount: mb, id: 'tfmg:molten_steel' }]
    }).id('pcmc:melting/' + name)
  })

  // The matching half of the 144 rescale: CBC's forge compacting (molten -> solid) moves from the
  // stock 90-mb scale to 16/144/1296. Outputs keep CBC's items — AlmostUnified rewrites them to the
  // canonical TFMG forms at runtime.
  const STEEL_FORGES = [
    ['forge_steel_nugget', 16, 'createbigcannons:steel_scrap'],
    ['forge_steel_ingot', 144, 'createbigcannons:steel_ingot'],
    ['forge_steel_block', 1296, 'createbigcannons:steel_block']
  ]
  STEEL_FORGES.forEach(([name, mb, out]) => {
    event.remove({ id: 'createbigcannons:compacting/' + name })
    event.custom({
      type: 'create:compacting',
      ingredients: [{ type: 'neoforge:tag', amount: mb, tag: 'c:molten_steel' }],
      results: [{ id: out }]
    }).id('pcmc:compacting/' + name)
  })

  // ONE steel plate (06-11 round 3, #103): ironworks' pressing (steel ingot -> steel_sheet) unifies to
  // the same item as TFMG's heavy_plate, so JEI showed two routes — a 1-step press beside TFMG's
  // 2-step sequenced assembly. The assembly is the canonical route; the press shortcut goes.
  event.remove({ id: 'create_ironworks:materials/plates/steel_sheet' })
})
