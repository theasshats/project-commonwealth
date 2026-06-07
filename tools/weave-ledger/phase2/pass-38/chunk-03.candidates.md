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

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction armor / weapons / shields | via: loot-seed into faction keep/outpost loot tables | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a faction stronghold yields processed war gear the fighter sells to settlers who can't fight — combat is a supply route, not just adventure
- from: valarian_conquest:armorsmith station | via: create:pressing or create:mechanical_crafting as gated input to armorsmith recipes | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: guild-quality plate armor still needs machine-pressed metal sheets — the armorsmith can't work without the tech player's output
- from: valarian_conquest citizen/mercenary hire | via: emergent player-to-player labor market (M-33 service) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a mercenary specialist escorts caravans or guards a colony for coin — protection is a hired service like any other trade
- from: valarian_conquest faction gear (citizen professions) | via: minecolonies hut worker integration (M-28 colony route) | to: create | motif: M-28 | power: mid | tone: clash | verdict: REJECT | reason: recruited citizens in Valarian Conquest take vanilla professions, not MineColonies hut assignments — the two colony systems don't interoperate at the recipe level; behavioral adjacency without a method-routing to compose
- from: valarian_conquest economy via numismatics coin | via: vendor pricing | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 RETIRED — bare "sell faction goods for coin" is the ambient endpoint of the loop, not a weave; the economy link is already captured via M-34 loot-seed above

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:processor | via: create:mechanical_crafting (precision_mechanism as processor component) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the output is a purely cosmetic toy — gating a joke item behind Create engineering effort advances nothing in the loop; a forced edge whose output never drives demand, consumption, or scarcity. Loop test fails: this doesn't advance scarcity→pressure→production→economy in any direction.

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — genuine zero-content client UI mod; no items, no blocks, no loot; nothing to weave

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single meme music disc; the loot=yes surface is one item with no resource role in the loop; forcing any recipe or economy edge onto a joke disc is noise that fails the "would a player nod at this?" test

## tacz   [anchors: survival/combat-flavor (1)]
- from: tacz:gun_smith_table_crafting inputs (metal casings, mechanisms) | via: create:pressing (metal sheets → casings) + create:mechanical_crafting (fire mechanism) as required gun_smith_table ingredients | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: every gun starts as Create-pressed sheet metal and a machined firing mechanism — the armorer depends on the factory
- from: tacz endgame gun/rifle | via: create:sequenced_assembly (multi-stage barrel blank → receiver → assembled gun) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the finest rifle in the pack takes a full assembly line — a sequenced_assembly keystone that earns its depth
- from: tacz:ammo (consumable) | via: tacz:gun_smith_table_crafting ammo recipe + consumption on fire | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo disappears every fight — the demand never zeros out, so the armorer always has buyers
- from: tacz guns / ammo as traded war materiel | via: emergent player trade + numismatics vendor | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist builds the guns the colony needs and the merchant sells — war materiel is the pack's most reliable traded good
- from: tacz high-tier gun barrel material | via: GTMOGS regional ore (scarce alloy) → tacz:gun_smith_table_crafting | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: only one region has the high-grade steel for precision barrels — everyone else buys from the miner who settled there
- from: tacz airship-mounted weapons | via: aeronautics integration | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: TACZ doesn't natively integrate with Create Aeronautics turrets; aeronauticscompat covers other turret mods; this is flavor-only adjacency with no method to compose; no-motif → reject-for-review

## minecolonies   [anchors: survival, create (2)]
- REWORK: OK — connections sound. Survival (settlement/food/farming) and Create (quarries gated on Create parts, M-05) are both load-bearing and correctly authored. The M-09 deferral in the dossier is correct post-retirement.
- from: minecolonies:blockhutmysticalsite / blockhutenchanter | via: ars_nouveau:source_gem or occultism essence as required research/work material input | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the settlement's mystical wing needs magic reagents to do its research — the colony and the mage must trade or the colony can't advance its arcane branch
- from: minecolonies colony food / goods at bulk (apple_pie, baked_salmon, bread) | via: Create trains / aeronautics cargo hold as the necessary transport for bulk trade | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony that produces food at scale needs a cargo ship to move it — the colony's output is what fills the aeronaut's hold
- from: minecolonies University research tree | via: KubeJS knowledge-gate (research progress is non-tradeable) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: you can buy the colony's goods but you can't buy the colony's research level — the knowledge gap is what keeps the settlement specialist irreplaceable

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — vanilla-parity recipe restore; its whole value is restoring a basic utility item at minimal cost; gating it on Create parts would contradict its purpose ("never gate a basic/everyday component behind a complex recipe"); nothing to weave without violating the cost model

## ding   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-content client audio mod; plays a sound on menu/world load; no items, no blocks, no loot; nothing to weave

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — genuine zero-content client render optimization; no items, no blocks, no loot; nothing to weave

## gtmogs   [anchors: survival, economy (2)]
- REWORK: OK — connections sound. Survival (regional ore exploration) and economy (the scarcity foundation that forces trade) are both correct and load-bearing. GTMOGS is the axiom the loop rests on; its weave role is enabling motifs downstream (M-03 ore-doubling, M-08 coin-from-scarcity, M-30 regional-scarcity gate) rather than being a target for new anchors itself. No new anchor candidates — a third anchor would be forced onto a worldgen framework with no recipe surface.

## mru   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library; no items, no blocks, no loot; nothing to weave

## mousetweaks   [anchors: support/client-QoL (1)]
- LEAVE — genuine zero-content client inventory-management tweak; no items, no blocks, no loot; nothing to weave

== CHUNK COMPLETE ==



















