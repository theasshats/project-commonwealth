# Phase 2 candidates — chunk-12

## blockui   [anchors: support/library (1)]
- LEAVE — pure UI framework (XML windowing API); no items, no methods, no material surface. Hard dep of MineColonies; sanctioned support role, nothing to weave.

## tfmg   [anchors: create (1)]
- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (TFMG distillation outputs) | via: aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: refinery runs around the clock so the airship fleet never stalls for fuel — the distillation tower IS the logistics spine
- from: tfmg:steel (Industrial Blast Furnace output) | via: aeronautics construction recipe (structural material) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: you need the blast furnace running before you can fabricate a hull strong enough to fly
- from: tfmg:combustion_engine (diesel/gasoline engine block) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the combustion engine bolts directly into an Aeronautics propulsion mount — TFMG builds the drivetrain, Aeronautics flies it
- from: tfmg:aluminum_ingot (Bauxite → hot_blast chain) | via: aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: aluminum is the lightweight structural metal; airframes that need to stay airborne use it
- from: tfmg:steel / tfmg:aluminum_ingot | via: numismatics (processed-scarcity coin sink) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the aeronautics anchors are far stronger uses of these metals
- REWORK: existing Create anchor is solid (8 inbound Create methods). No REWORK needed on production side. The gap is aeronautics/economy — the four ACCEPT rows above close it. After those, tfmg moves from (1) to create+aeronautics (2), which is the target.
- OK — Create connections sound.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster (endgame thrust block for drone bodies) | via: create:sequenced_assembly (precision fabrication; brass/precision parts as inputs) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster isn't whittled from wood — it needs precision machined parts from the Create line before your drone can outrun anything
- from: drones:iron_rotor (mid-tier rotor) | via: create:mechanical_crafting (crafted from Create metal outputs — iron + shafts) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the iron rotor is a spinning mechanical component; of course it's built on a mechanical crafter
- from: drones:controller (assembly controller) | via: create:sequenced_assembly (brass + andesite casings assembled in sequence) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the controller is the "brain" of the drone — a precision electronics assembly, not a bench craft
- from: drones:pocket_drone (finished assembled drone) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the Create fabrication anchors are the real story here
- REWORK: aeronautics anchor is coherent but lone. Three ACCEPT rows above bring it to aeronautics+create (2) — that is the natural pairing for a flight device built from mechanical parts.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero item/material surface; it IS the magic↔magic weave (Ars↔Iron's mana unification). Nothing to route a second pillar through. Sanctioned internal-magic connector.

## alcohol_industry   [anchors: create, survival (2)]
- from: alcohol_industry:whiskey / vodka / tequila / beer (bottled finished spirits) | via: numismatics sell or Bountiful trade-good | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the mod is already at 2 anchors (Create + survival); a bare "liquor = sell for coins" link is saturated
- from: alcohol_industry:alcohol_base (Create-mixed intermediate fluid) | via: irons_spellbooks:alchemist_cauldron_brew (spirits as an alchemical solvent or potion base) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-proof spirit is the obvious solvent for an alchemist's cauldron — whiskey as the brewing medium gives the spell-book cauldron a Create supply chain
- REWORK: existing Create + survival anchors are sound. The above adds a third (magic) via the alchemist cauldron, which is thematically clean (alcohol as alchemical solvent is a real-world concept, not forced). OK otherwise.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull (rare drop, ~mob death) | via: occultism:spirit_fire (transmutation into a necromantic intermediate) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a skull from an underground lizard-folk civilization feels right as an occult reagent — Occultism's spirit fire is already the pack's transmutation sink for cursed/organic drops
- from: kobolds:kobold_skull | via: ars_nouveau:enchanting_apparatus (as an exotic catalyst) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire) is cleaner and already owns the skull→occult slot; two magic routes for the same drop is redundant without a reason to split them
- OK — economy and survival anchors are sound (emerald trade + underground creature pressure). Magic via skull-reagent adds a clean third.

## exposure   [anchors: create, survival (2)]
- from: exposure:black_and_white_film (consumable film stock, crafted from silver compound) | via: create:milling (mill a silver ore/compound to produce photographic silver halide — makes film production a Create processing step) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: film is already produced via vanilla crafting and the mod's Create integration (sequenced_assembly develops it); adding a milling step on top just taxes the everyday component — violates the depth-scaling rule
- from: exposure:photograph (printed photo, unique item) | via: loot-seed in structure loot tables (seed developed photographs into exploration loot — "found photo" flavor) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — a loot-seed of a purely cosmetic item doesn't advance any loop node; it's decoration, not a structural tie
- from: exposure:camera (craft item, gold + glass + precision parts) | via: create:mechanical_crafting (precision optics assembly — lens/shutter require Create-level fabrication) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a camera with adjustable focal length and shutter isn't assembled at a bench — precision optics need the mechanical crafter
- OK — Create (sequenced_assembly develops film, mechanical_crafting for camera body) + survival is a coherent 2-anchor state. The camera-mechanical_crafting weave deepens the Create side; mod is well-connected.

## modulargolems   [anchors: create (1)]
- from: modular golem body (boss-drop metals: dragonsteel from Ice&Fire, cursium from Cataclysm) | via: modulargolems:golem_assemble (the endgame golem bodies gate on boss-drop metals) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: you can't build a dragonsteel golem without killing the dragon first — the golem is the payoff for surviving the boss fight
- from: ars_nouveau:source_gem (or occultism material) | via: modulargolems:golem_add_slot (a magic-infused upgrade slot requires an arcane catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: unlocking an extra ability slot on a mechanical construct requires channeling arcane source — the golemancer needs a mage or their own supply
- from: modulargolems golem-part blanks | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
- REWORK: Create anchor (crushing, mechanical_crafting, sequenced_assembly for parts) is solid. The two ACCEPTs lift this to create+survival+magic (3), which is strong. OK on Create side.

## multipiston   [anchors: support (1)]
- LEAVE — MineColonies/Structurize colony dependency block; moves world blocks internally for the builder AI. No item processing surface, no material I/O, no coherent weave path.

## pingwheel   [anchors: support (1)]
- LEAVE — pure keybind-to-server-marker UI layer; zero item/block/material surface. Co-op QoL, sanctioned support role.

## notenoughanimations   [anchors: support (1)]
- LEAVE — client-side cosmetic animation overrides; no items, no recipes, no material surface. Sanctioned support role.

## dragonlib   [anchors: support (1)]
- LEAVE — developer API/framework library for MrJulsen mods. The single dragonlib:dragon item is a dev artifact. No player-facing content, nothing to weave.

## resourcefullib   [anchors: support (1)]
- LEAVE — cross-platform modding API (Team Resourceful); zero gameplay content, pure utility. Sanctioned support role.

## followersteleporttoo   [anchors: support (1)]
- LEAVE — pet teleport behavior tweak; zero items/blocks/materials. Sanctioned QoL support role.

## prickle   [anchors: support (1)]
- LEAVE — config-format serialization library (Darkhax). Zero gameplay content. Sanctioned support role.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit (ore block drop from Fallen Chaos Knight ~9%) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal is an ore — of course the ore crusher handles it; suddenly the survival danger feeds the Create production line as a regional ore source
- from: born_in_chaos_v1:bundle_of_bones (common mob drop) | via: occultism:spirit_fire (transmute into an undead-essence intermediate for necromantic rituals) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bundle of bones from cursed undead is exactly what Occultism's spirit fire transmutes into essence — the Halloween mob danger feeds the magic production route
- from: born_in_chaos_v1:dark_metal (processed metal) | via: bountiful bounty → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the Create ore and magic transmutation anchors are far more distinctive loop-advancing ties
- from: born_in_chaos_v1:pumpkin_staff / soul_saber (boss-only drops, seasonal Pumpkinhead) | via: gating a Create recipe (boss drop as required input to a dark-metal machine component) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Pumpkinhead is the seasonal challenge; its staff/saber drop unlocks the next tier of Create gear — fight the seasonal boss, unlock the production upgrade
- REWORK: survival anchor is solid (50 biome-modifiers, seasonal boss, hostile pressure). Three ACCEPTs bring it to survival+create+magic (3). OK on survival side.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite (levitite + dye → colored levitite, offhand catalyst mechanic) | via: create:toolbox_dyeing or create:mixing (batch dye levitite in a Create mixer for production-scale colored hull blocks) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: hand-dyeing one block at a time is fine for a prototype; a real shipyard mixes dye in bulk — route dyed levitite through Create mixing for production runs
- from: dyed tires | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; cosmetic tire variants are not a loop-advancing economy node
- REWORK: aeronautics anchor is sound. The Create mixing ACCEPT adds a second anchor, making the dye step part of the Create production web rather than a purely vanilla craft.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block dropped/found after impact) | via: create:crushing (crush the meteor rock → iron dust + nickel dust + xp-nugget byproduct) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a meteor is a rock from space; the ore crusher handles rocks — crushing it yields iron and a trace of nickel, a small reward for finding the impact site
- from: Blood Moon / Blue Moon event state | via: ars_nouveau:summon_ritual or occultism:ritual (ritual only completable under a specific moon — celestial event as the gating condition) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a lunar ritual is a classic trope — the Blood Moon is when dangerous magic works; M-22 (lunar/celestial reagent) exists precisely for this
- from: enhancedcelestials:space_moss_block (harvestable worldgen block) | via: ars_nouveau:imbuement (space moss as a celestial-origin attunement catalyst for a minor infusion) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: moss that fell from space carries celestial charge; the enchanting apparatus uses it as a mild attunement catalyst
- REWORK: survival anchor is solid (lunar event pressure + spawn surges). Three ACCEPTs move to survival+create+magic (3). Existing connections: OK.

## clumps   [anchors: support (1)]
- LEAVE — server-performance XP-orb merge; no items/blocks/materials, no gameplay surface. Sanctioned support role.

## moogs_structures   [anchors: support (1)]
- LEAVE — worldgen structure-placement library/framework for Moog's structure mods; no standalone content, no item surface, nothing to weave.

== CHUNK COMPLETE ==
