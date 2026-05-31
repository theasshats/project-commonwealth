// Northstar — "made through Create" (already-routed metal, plate the flagship).
//
// Northstar's space-age alloy martian_steel is ALREADY Create-made at the source: the ingot is
// cast via `create:compacting` (raw_martian_iron + titanium + volcanic_ash) and pressed into
// `c:plates/martian_steel` via `create:pressing`. The space suits and martian_steel LAMPS already
// build from that pressed PLATE — but the base martian_steel ARMOR set still uses the raw INGOT,
// bypassing the press. So the one coherent touch (the Samurai Dynasty pattern): route the flagship
// armor through the Create-pressed plate too, matching its own space-suit recipes.
//
// Northstar already gates its COMPLEX tech deeply through Create — rocket_station, oxygen_sealer,
// atmospheric_concentrator, solar_panel etc. via create:mechanical_crafting, and its circuits /
// hardened_precision_mechanism via create:sequenced_assembly. So depth-by-complexity is already the
// house style here; we only fill the one gap (base armor) and match it: the flagship CHESTPLATE
// gets a create:precision_mechanism core (its "powered" piece), the rest ride the pressed plate.
//
// LEFT ALONE: martian_steel itself (already create:compacting/pressing), titanium/tungsten
// ingot<->block<->nugget storage math, decorative plating/sheetmetal slabs+stairs, wood/stone/
// fabric, the space suits (already plates + create:copper_backtank + fabric), and every
// engine/separator/machine (already gated on create: parts / mechanical_crafting).
//
// Verified against tools/mod-data/recipes/Northstar-0.5.4+1.21.1.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }
  const P = '#c:plates/martian_steel' // create:pressing of martian_steel (already in-pack)

  // orig each: northstar:martian_steel (raw ingot) — now the Create-pressed plate, as the
  // space-suit tier already does.
  swap('northstar:martian_steel_helmet',   ['PPP', 'P P'],        { P })
  swap('northstar:martian_steel_leggings', ['PPP', 'P P', 'P P'], { P })
  swap('northstar:martian_steel_boots',    ['P P', 'P P'],        { P })
  // CHESTPLATE — marquee piece: pressed plate + a precision_mechanism core, matching how
  // Northstar's own tech earns mechanisms. orig: northstar:martian_steel (raw ingot).
  swap('northstar:martian_steel_chestplate', ['P P', 'PMP', 'PPP'], { P, M: 'create:precision_mechanism' })
})
