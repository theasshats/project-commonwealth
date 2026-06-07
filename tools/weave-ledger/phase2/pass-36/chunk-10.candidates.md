# Phase 2 candidates — chunk-10

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag_* (16 dyed variants) | via: recipe (crafting) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no second system to cross into — sleeping bags are pure travel QoL; any link to Create/economy/magic would be forced noise with no thematic grip
- LEAVE — Sleeping bags and hammocks are vanilla-crafted QoL items (wool+string) with no material join surface; the mod's only anchor is survival-flavor support and there is no coherent second system to route through. Forced edges would be defects, not weaves.

## drones   [anchors: aeronautics (1)]

- from: drones:ion_thruster | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is obviously an advanced fabrication — it demands precision assembly from Create's sequencer, making the best drones a real Create build milestone rather than a crafting-table shortcut
- from: drones:iron_rotor | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: mid-tier rotors made on the mechanical crafter tie drone flight progression to the Create spine — the step between wood-rotor toy and ion-thruster marvel
- from: drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the assembly controller is the "heart" of drone building; requiring precision-crafted brass internals (via mechanical crafting) anchors the whole drone system in Create's progression
- from: drones:pocket_drone (assembled drill drone) | via: config tie / economy | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: a drone specialist assembles custom pocket drones-for-hire — crafting a drill or beacon-attack drone to order for players who can't afford the full Create tier themselves (service labor, not a bare sell)
- from: drones:wood_rotor | via: recipe (crafting) | to: create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: wood rotors are intentionally entry-level; gating them behind a Create method would violate the "never gate basic/everyday component behind complex recipe" guardrail — they should stay vanilla-craftable
- REWORK: the dossier's 2nd-anchor candidate M-09 ("sellable crafted good → Numismatics") is now a retired motif — REJECT that framing; the M-33 service-labor reading above is the right economy link for a custom-assembled product

## ferritecore   [anchors: support/perf (1)]

- LEAVE — Pure runtime memory-optimization library; zero blocks, zero items, no gameplay surface, no loot. Genuine zero-content support role; LEAVE is correct with no forced edge possible.

## immersivearmorhud   [anchors: support/client-UI (1)]

- LEAVE — Client-side HUD overlay only; no items, no methods, no material surface. Zero-content support role; nothing to weave.

## azurelib   [anchors: support/library (1)]

- LEAVE — Animation/rendering API library (GeckoLib fork); one internal utility block (azurelib:lightblock) with no recipe or gameplay role. Genuine zero-content library — the weaving happens in dependent mods (Cataclysm, etc.), not here.

## aileron   [anchors: aeronautics (1)]

- from: aileron Elytra enchantments (loot=yes) | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Aileron's Elytra enchantments as obtainable rewards through Ars Nouveau's enchanting apparatus makes flight mastery part of the magic progression — arcane flight upgrades you can't just grind at a table
- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: applying a flight-stabilization or momentum enchantment through the Enchanting Apparatus ties Ars magic into personal aviation, giving magic players a distinct flight-upgrade path; contingent on Aileron's enchants being datapack-accessible as enchantment targets
- from: aileron Elytra enchantments | via: create:deploying + M-20 | to: create | motif: M-20 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — a Create deployer physically stamping a new flight-physics override onto an Elytra reads as incoherent; flight-physics enchants belong in a magic context, not an industrial press



