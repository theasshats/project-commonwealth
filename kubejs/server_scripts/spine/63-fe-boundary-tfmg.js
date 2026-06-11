// Create spine — the TFMG FE BOUNDARY (the voltage-layer overlap, resolved).
//
// TFMG ships a third electric network: a real circuit sim in SI units (volts/amps/watts/ohms — U=IR
// voltage splitting, transformer turn ratios), parallel to the createaddition/New Age FE wires. Its
// internal accounting shares the FE number space (goggles print "Energy Production: N fe/t"), but its
// kinetic exchange rate is NOT on the pack's pegged base rate (0.029296875 FE per SU·tick, shared by
// createaddition's 480FE/t@256RPM/16384SU and New Age's suToEnergy):
//
//   tfmg:generator     = 40 W per RPM against a 50 SU/RPM impact  ->  ~0.8 FE/t per SU if exported,
//                        ~27x the pegged rate (read from tfmg-1.2.0 bytecode: GeneratorBlockEntity
//                        powerGeneration/voltageGeneration; TFMGBlocks stress registrations)
//   tfmg:rotor/stator  = the large generator, impact 240 SU/RPM — same family, same problem
//   tfmg:electric_motor = volts -> SU at a 12 SU/RPM capacity (the third FE->SU converter by another name)
//
// Exactly TWO blocks bridge the volt grid to Forge Energy (the only IEnergyStorage registrations in
// tfmg-1.2.0): tfmg:converter (FE in -> grid power) and tfmg:accumulator (charges from the grid,
// exposes standard extractable FE out). Left craftable, the cheap-generator -> accumulator -> FE-wire
// chain mints FE at ~27x the price every pegged converter pays — and the inbound converter makes TFMG's
// un-pegged motor a competing FE->SU path.
//
// POLICY (this file): close the boundary in both directions by removing both blocks' recipes. TFMG
// volts become a CLOSED energy currency — its generators power its own machines and lights (the
// polarizer's 2000 W, the electric pump, neon), exactly the "industrial mains" role, and the volt grid
// keeps its showcase physics without touching FE pricing. FE storage stays with
// createaddition:modular_accumulator. SU->volts->SU through TFMG's own generator+motor remains possible
// and is fine: it pays TFMG's grid resistance and the generator's heavy 50 SU/RPM impact, and no FE is
// involved.
//
// Load-safe: removals are no-ops if the ids vanish. 60-machines-tfmg.js deliberately does not re-add
// the accumulator (see the note there). JEI will show both blocks as recipe-less; if that confuses
// playtesters, a JEI-hide client script can follow. In-game verification + the running-balance audit
// live in #315. Revisit when the 2.0 electricity overhaul (#282, Create: Power Grid) re-tiers the
// whole electric stack.
//
// STATUS: rates read from mod bytecode, load-safe, UNVERIFIED IN-GAME.

ServerEvents.recipes(event => {
  // tfmg:converter (1 recipe: crafting/materials/converter) — FE -> volt-grid inbound.
  // tfmg:accumulator (2 recipes: lead + lithium variants) — volt-grid -> FE outbound.
  ;['tfmg:converter', 'tfmg:accumulator'].forEach(id => event.remove({ output: id }))

  console.info('[pcmc-spine] TFMG FE boundary closed: converter + accumulator recipes removed; volt grid is a closed currency')
})
