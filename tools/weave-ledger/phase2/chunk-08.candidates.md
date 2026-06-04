# Phase 2 candidates — chunk-08

## modulargolems   [anchors: Create (1)]

- from: boss-tier metals (dragonsteel — Ice&Fire fire/ice/lightning dragon; cursium — Cataclysm Koroleth/Ender Guardian) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: you kill a fire dragon, you get dragonsteel, you build a fire-immune combat golem — the construct is the boss-progression payoff, not an afterthought

- from: Ars Nouveau source_gem or Occultism otherstone | via: ars_nouveau:imbuement / occultism:ritual into golem_add_slot upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: modulargolems is explicitly an industrial/metallic construct mod; adding arcane infusion on top of the existing Create-assembly chain + boss-drop metals would over-engineer upgrade slots; M-10 guards against gating basic components behind infusion, but even for mid-tier upgrades this forces two exotic inputs (Create chain AND magic ritual) onto ordinary ability slots — depth doesn't scale with the item's power tier here; the industrial-automaton vibe fits Create + combat-progression more coherently than arcane golemancy

- from: golem entity loot (loot=yes) | via: occultism:spirit_fire / numismatics bounty | to: magic / economy | motif: M-02 / M-14 | power: everyday | tone: ok | verdict: REJECT | reason: loot=yes in the digest likely references the golem_workbench block's loot table, not a meaningful mob-drop stream — assembled golems are player-constructed entities, not spawned mobs with exploitable drops; no specific golem drop item is identified in the digest; routing phantom drops into magic/economy is a forced edge

- from: TFMG steel (via TFMG industrial chain) as golem-body material | via: modulargolems:golem_assemble | to: Create (same pillar) | motif: none | power: mid | tone: ok | verdict: REJECT | reason: TFMG steel feeding golem bodies deepens the Create spine but creates no cross-pillar edge — both mods are Create-anchored; this is same-pillar depth, not a 2nd pillar

## tfmg   [anchors: Create (1)]

- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (TFMG distillation outputs) | via: TFMG combustion engine → Aeronautics engine/generator fuel intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the distillation tower refines crude oil into the exact fuels that power Aeronautics airship engines — the fuel supply line from derrick to deck is a single coherent chain; reagent-ownership table already reserves these fuels under M-13, confirming this as the intended 2nd pillar

- from: tfmg:steel_ingot (iron → Industrial Blast Furnace → steel) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 requires scarce regional metal; steel is a processing chain on abundant iron + coal, not a regionally scarce ore — with any meaningful automation it becomes trivially producible, undermining the scarcity premise; the M-08 pattern is designed for ores that can't spawn everywhere, not for smelting chains on common inputs

- from: tfmg:fuel_can / tfmg:steel_ingot as high-effort trade goods | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 carries an ⚠ player-run-currency review caveat (0.9 economy update); beyond the flag, automation trivializes fuel/steel production once the multiblock chain is built, so these are not sustainably scarce luxury goods — the economy pillar needs items that stay scarce under automation pressure; fuel is already claimed as Aeronautics propulsion (M-13) and giving it a dual economy role dilutes the pillar assignment

- from: TFMG Voltage/FE power grid | via: createaddition:charging → magic tool/focus charging | to: magic | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — TFMG's industrial dieselpunk power grid (diesel generators, cables, transformers, smog) charging arcane foci or Ars spellbooks is a jarring juxtaposition; M-17 is valid only "when it makes sense"; a purpose-built magical power source (Create New Age, or a magic mod's native charger) is more coherent for charging magical tools than an oil-burning industrial grid

- from: TFMG combustion engine as Create kinetic source | via: create:sequenced_assembly | to: Create (same pillar) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 deepens Create complexity but cannot add a 2nd pillar — TFMG is already Create-anchored; routing through sequenced_assembly produces more Create depth, not a cross-pillar bridge; keep as pure Create depth work if needed, but it doesn't earn a 2nd pillar here

== CHUNK COMPLETE ==
