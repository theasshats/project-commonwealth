# Phase 2 candidates — chunk-10 (pass-28, blind)

## ritchiesprojectilelib   [anchors: support (1)]
- LEAVE — zero-content projectile/ballistics API; 0 blocks/items/loot, no recipe-types. Serves Create Big Cannons as a hard dep but has no material surface to weave.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth / boiler (fuel-burning climate machine) | via: M-05 native-method gating (Create brass/casing as build inputs, or Create steam/lava piped as fuel) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a real multiblock furnace — gating it on Create brass/casing ties climate-control to the tech spine.
- from: cold_sweat:filled_waterskin (hot/cold water carrier) | via: M-26 consumption (waterskins are spent/refilled as expedition upkeep against the temperature pressure) | to: survival/economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crew heading into a harsh biome burns through hot/cold waterskins — a renewing demand, not a one-time buy.
- from: insulated cold-climate armor (chameleon/hoglin/goat_fur sets) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired); "survival gear is sellable" is the ambient endpoint, not a demand-gating weave. Real demand already captured by M-26 (consumption against temperature pressure).
- from: ANY warm/cold fur or hide from other mob mods | via: sewing-table insulation filler | to: survival | motif: — | power: everyday | tone: ok | verdict: REJECT | reason: same-anchor (survival↔survival) tag-unification convenience, not a cross-system weave; no motif.
- REWORK: existing survival anchor is sound; the dossier's listed M-09 economy candidate is the only weak one — re-expressed above as M-26 consumption.

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config-framework library; 0 blocks/items/loot, no content surface.

## bcc   [anchors: support (1)]
- LEAVE — version-handshake utility; no items/blocks/loot, modpack-ops only.

## bettermodsbutton   [anchors: support (1)]
- LEAVE — client pause-screen UI button; zero gameplay content.

## pantographsandwires   [anchors: create, aeronautics (2)]
- from: pantographsandwires:graphite_block / coal_coke (crafting intermediates, c:item/ingots/graphite, c:item/dusts/coal_coke) | via: M-32 byproduct→input (its graphite/coke tags feed another production route that wants carbon — e.g. steel alloying, electrode/lubricant chains) | to: create/production | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the wires line already smelts coke and graphite — let those carbon tags feed the metal/chemical routes instead of being a dead-end intermediate.
- from: catenary masts/wires (overhead electric-rail infra) | via: M-31 logistics-required (electrified trains are the bulk-good move method for the economy's logistics arm) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: stringing pantograph lines is what makes long-haul electric freight runs viable — the distribution backbone earns its keep.
- REWORK: existing Create + aeronautics anchors are sound (6 inbound Create recipe-types incl. sequenced_assembly, serves rail transport). OK — connections sound; the two additions above are pluses (carbon-tag sharing + explicit logistics role).

## letmefeedyou   [anchors: support (1)]
- LEAVE — behavior-only co-op QoL (feed another player); registers no items, nothing to route.

## crash_assistant   [anchors: support (1)]
- LEAVE — client crash-diagnostic utility; zero content.

## ribbits   [anchors: survival (1)]
- from: Ribbit merchant Amethyst-Shard trade economy | via: numismatics shard↔coin bridge | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: an NPC merchant faucet — converting a villager trade into coin is exactly the M-14/M-21 NPC-coin-faucet pattern that's cut under the player-run ruling; not a player-to-player demand gate.
- from: ribbits:toadstool / mossy_oak woodset (deco blocks) | via: create:cutting/milling | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: generic deco recycle on cozy whimsy woods; thin, no demand created, and clashes with leaving the charming swamp-village mob vanilla-flavored.
- from: ribbits:maraca + swamp goods (exotic biome-locked produce) | via: M-33 service / M-30 regional gate | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: swamp goods are obtainable anywhere swamps spawn (not ore-region-locked); no genuine regional scarcity to gate. No coherent player-demand weave; leave the mob as cozy population.
- LEAVE — survival flavor mob; all economy candidates resolve to NPC faucets or fail the regional-scarcity test.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw / Wildfire / Illusioner combat drops | via: M-02 mob-drop reagent sink (route into ars/occultism imbuement or spirit-fire as a reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: isolated combat loot (crab claw, wildfire/illusioner drops) earns a use as a spell reagent instead of dead-ending in a chest.
- from: hostile mob-vote drops (Iceologer/Illusioner/Wildfire) | via: M-34 combat-route supply (combat specialists farm these to trade to non-combat players who need the reagent) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: once M-02 gives the drops a magic use, the combat crew can supply them to the spellcasters — boss/danger loot's player-to-player side.
- from: copper buttons / lightning rods / copper_golem_head (copper deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: lossy deco-crush on deliberately vanilla-faithful copper items; thin, no demand, the mod is meant to read as base-game.

## beachparty   [anchors: survival (1)]
- from: beachparty:mini_fridge ice output (no-power ice source) | via: create:filling/cooling feedstock — bulk ice into other mods' cold/freezing recipes | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: ice is trivially vanilla-available; routing it as feedstock creates no scarcity or demand, just an alt source — no motif gain.
- from: beachparty:coconut_cocktail (cocktail luxury drinks) | via: numismatics sell / tavern stock | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired); cocktails being sellable is the ambient endpoint, not a demand-gating weave.
- from: beachparty:open_coconut + fruit → palm_bar_mixing cocktails (buff drinks) | via: M-26 consumption (buff drinks spent against survival pressure as ongoing demand) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: cocktails give timed buffs you drink and re-make — a small renewing demand on the food/drink loop, same anchor reinforced via consumption.
- LEAVE-adjacent: mostly tropical decoration; one light M-26 consumption edge accepted, rest is deco palette — do not force Create weaves on palm furniture.

## sounds   [anchors: support (1)]
- LEAVE — client SFX-overhaul, audio only; zero content.

## mcwdoors   [anchors: support (decoration) (1)]
- from: mcwdoors metal/iron/glass door variants | via: create:crushing back to nuggets/raw + xp nugget | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: deco crush is a "plus, not necessity" per the deco-family policy; ~250 variants, lossy generic recycle, no demand created. Decoration is a sanctioned support anchor — leave unless done in a wholesale deco-family pass.
- LEAVE — decoration palette; sanctioned support role, no compelling cross-system demand gate.

## dummmmmmy   [anchors: support (1)]
- LEAVE — single target-dummy combat-test prop; its only value is measuring hits, a contrived edge would force it (dossier concurs).

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: tweaked_lectern_controller / linked_controller (vehicle control surface) | via: M-24 mechanical component → control (the controller IS the control-input layer for Create/Aeronautics vehicles) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: same anchor it already holds (aeronautics) — M-24 would not add a second system, and its craft already routes through Create parts. No cross-system gain.
- REWORK: aeronautics anchor sound; craft already routes through Create precision-mechanism/electron-tubes. OK — connections sound; no coherent 2nd system (magic/economy/survival) to add. Effective LEAVE for new weaves.

## notenoughcrashes   [anchors: support (1)]
- LEAVE — crash-recovery stability utility; zero content.

## securitycraft   [anchors: support (1)]
- from: high-tier security gear (block_reinforcing, retinal/keycard scanners, sentries) | via: M-29 cross-route dependency (gate the strongest reinforcing/scanner components on a magic reagent OR a Create part so defense pulls from another production route) | to: create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a base worth defending should cost real fabricated/arcane parts — top-tier reinforcing needs a Create or magic input, so the defense specialist trades with a producer.
- from: block-mine variants (ore-disguised explosives) + sentries | via: M-34 combat-route supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: SecurityCraft devices are crafted utilities, not danger/boss outputs farmed by a combat specialist; M-34 doesn't fit. The defense-costs-trade angle is better carried by M-29 above.
- from: security gear → numismatics coin | via: sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link; "defense gear is sellable" is the ambient endpoint. Demand is gated by M-29 (cross-route component cost), not by minting.

## entity_model_features   [anchors: support (1)]
- LEAVE — client model-replacement engine (EMF/CEM); zero content.

## create_ironworks   [anchors: create (1)]
- from: create_ironworks:tin (fresh scarce/regional metal, set by 3 biome-modifiers) | via: M-30 regional-scarcity gate (tin ore-gen region-locked → tin-dependent goods are region-locked and must be traded) | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tin only generates in certain regions, so anything alloyed from it (bronze, steel-adjacent gear) anchors to the scarcity foundation and crosses regions to trade.
- from: create_ironworks:tin → Create-processed → numismatics mint | via: M-08 player-minted currency | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a clean candidate scarce metal to press into player-minted coin — minting it is a specialization, not an NPC sale.
- from: create_ironworks:steel_plate / bronze plate (structural fabricated metal, c:item/plates/steel) | via: M-23 structural alloy → airframe/hull | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plate is the load-bearing material an airship hull should actually cost — scales airframe depth with ship tier.
- from: create_ironworks:steel_ingot (near-Netherite tier metal) | via: M-29 cross-route dependency (require steel in a magic/ritual high-tier recipe so the metallurgist and mage must trade) | to: magic/production | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-tier ritual frame or magic tool needs forged steel — the smith and the caster can't each do the other's half.
- REWORK: dossier's existing "economy via numismatics" candidate is sound (re-expressed as M-08 + M-30 above, properly demand-gating rather than bare sell). Create anchor sound.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: structure loot tables (taverns/towers/dungeons/trial chambers) | via: loot-seed — inject magic reagents (M-02) or a boss/progression key (M-15) into its loot tables | to: magic/create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a structure datapack with 100+ loot points is a natural place to seed scarce magic reagents/keys, giving exploration a feed into the producer routes.
- from: trial-chamber vaults (exclusive trial/ominous keys) | via: loot-seed — seed player-minted coin metals or a locked-exclusive component into the exclusive vaults | to: economy/scarcity | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: its exclusive trial vaults are a high-effort gate — fitting to seed scarce coin metal or a region-gated component, feeding the player economy via earned loot not an NPC.
- from: in-tavern cartographer villager trade (emeralds → maps) | via: numismatics bridge | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: NPC villager trade faucet — cut under the player-run ruling (M-14/M-21); converting it to coin is an NPC faucet, not player demand.

== CHUNK COMPLETE ==
