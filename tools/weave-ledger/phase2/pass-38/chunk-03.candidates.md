# Phase 2 candidates — chunk-03

## gnkinetics   [anchors: create (1)]
- from: gnkinetics:planetary_gear / ring_gear | via: aeronautics construction recipe (crafting/M-24) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gearset is exactly how you gear down an engine to a propeller — the player who builds the kinetics tree makes the drivetrain parts the aeronaut needs
- from: gnkinetics:worm_gear | via: create:mechanical_crafting (aeronautics rudder/aileron control surface) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: worm gears handle orthogonal torque conversion — plausible in a control surface, but gnkinetics:planetary_gear is the stronger flagship fit and using both risks diluting the single clean edge; one well-targeted M-24 weave is enough here
- from: gnkinetics:ring_gear | via: create:mechanical_crafting (aeronautics airframe ring-frame piece) | to: aeronautics | motif: M-23 | power: mid | tone: clash | verdict: REJECT | reason: ring gears are kinetic transmission parts, not structural hull elements — calling one an airframe component is a category error even if the shape matches

## yungsapi   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; no items, no loot, no mechanics to weave

## multipiston   [anchors: support/colony-dependency (1)]
- LEAVE — functional utility block used internally by Structurize colony builders; not a player-craftable or recipe-routable item; no coherent weave surface

## knightlib   [anchors: support/library (1)]
- LEAVE — library whose content items (chalice, grail, homunculus, essences) are dormant without Knight Quest (not in this pack); dossier explicitly says do not weave dead items; the medieval/alchemical flavor is appealing but wiring inert items is authoring noise

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — zero items, zero blocks, zero loot; pure client-side movement physics tweak; nothing to weave

## creativecore   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (GUI API, event/packet systems); no items, no blocks, no loot; nothing to weave

## numismatics   [anchors: economy, create (2)]
- REWORK: OK — connections sound. Economy (keystone) and Create (addon dependency, coin blocks crafted via Create) are both load-bearing and correctly framed. Numismatics IS the hub other mods weave TO (M-08 player-minted currency); it doesn't need outgoing weaves of its own. No new anchors proposed — adding a third would dilute its role as the settlement-medium node. The dossier's note about M-09 being the natural 2nd-anchor candidate is now moot since M-09 was retired; the framing should stay as-is.
- from: numismatics vendor block | via: config-based pricing on combat drops (M-34 combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the economy link is already the mod's primary anchor; a "combat drops priced at vendors" edge is the ambient endpoint of the loop (every product sells), which is exactly what the retire of M-09 ruled out as a weave; the weave belongs on the combat-drop mod, not here

## createaddition   [anchors: create (1)]
- from: createaddition:charging (FE charger) | via: createaddition:charging recipe on Iron's Spellbooks charged foci/spell-batteries | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the Create electrician runs the charging station that tops up the mage's spell battery — a sensible division of labor across the two production routes
- from: createaddition:seed_oil (farmed crop → liquid fuel) | via: create:milling (seeds→powder) or extradelight:juicer → createaddition:liquid_burning (FE from bio-oil) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: an agrarian player grows oilseeds to supply the factory's generators — farming feeds the electric spine rather than just feeding people
- from: createaddition:rolling → c:rods/wires | via: aeronautics construction recipe (wiring/control surface ingredient) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a ship's electrical control surfaces need rolled copper wire — the electrical specialist becomes the aeronaut's supply chain for wiring
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning as aeronautics generator fuel | to: aeronautics | motif: M-13 | power: everyday | tone: ok | verdict: REJECT | reason: M-13 (fuel → propulsion) is already reserved for TFMG diesel/gasoline/lubricant per reagent-ownership; bio-oil as aeronautics fuel would conflict with the defined propulsion-fuel hierarchy — better left as an FE-generation fuel (survival weave) rather than competing with M-13's reserved fuels








