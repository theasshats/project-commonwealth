# Phase 2 candidates — chunk-09

## createfood   [anchors: survival, create (2)]

Already has 2 anchors (survival + Create). Reviewing existing connections first, then looking for richer links.

REWORK: OK — connections sound. Create processing chain (create:milling/mixing/pressing/compacting/deploying) producing high-effort finished dishes is exactly the right arc; survival via diet/nutrition is solid. No arbitrary edges.

New candidates:

- from: createfood finished dishes (pizzas, pastries, ice cream) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare "sellable luxury = coin" is the ambient loop endpoint, not a weave — this re-states M-09 which is retired. There is no demand-gating here, just "cook and sell." Economy link only earns its place when it gates demand (M-26/M-28/M-29/M-30), not when it just observes that food is tradeable.

- from: createfood finished dishes (plated blocks — cakes, pies, cheesecakes eaten by slice) | via: consumption (M-26) | to: survival → economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Plated dishes are placed in communal spaces and eaten slice-by-slice — they degrade on use, so the baker must keep restocking; the consumption-sink closes the diet-demand loop natively without any recipe change. This is already in-game; the weave is naming it explicitly so the diet-system and demand accounting recognise createfood as a M-26 node.

- from: createfood raw meat/crop tags (c:foods/raw_*, c:foods/doughs) | via: farmersdelight:cooking / create:milling as M-12 pull | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: createfood's 2424 c:tags already pull raw crops and meats through Create/FD methods into finished dishes — the processing chain is the mod's core mechanism. Acknowledging this as M-12 means the graph reads correctly: farm output (survival-side) flows through Create machines (Create-side) into food (back to survival). Confirming the arc keeps the web coherent.

- from: createfood finished dishes (seasonal fruit pies, jam variants) | via: Serene Seasons seasonal gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Apple/berry-flavour lines could require seasonally-available fruits (apples heavy autumn, berries spring/summer) — a baker can't stock the full menu year-round, making seasonal pies a specialization product with variable supply. Depth matches everyday-to-mid tier (one extra seasonal-ingredient step). A Phase-3 KubeJS gating, not a recipe rewrite.

## moreoverlays   [anchors: support — QoL/client (1)]

LEAVE — Confirmed zero-content client HUD overlay (spawn markers, chunk-grid, JEI search dim). No items, no blocks, no loot, no processing. Nothing to route or weave.

## ars_nouveau   [anchors: magic (1)]

Single anchor — magic pillar spine. Target is a 2nd anchor. Large method surface (18 recipe types), strong potential.

REWORK: No existing cross-system connections to audit — it's listed as 1 anchor only.

Candidates:

- from: ars_nouveau Agronomic/Vitalic Sourcelink (consumes crop growth, mob deaths natively) | via: Source generation mechanic (non-recipe sink) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Every farm animal death and every crop maturation in radius silently feeds Source — a magic specialist's power supply is literally built on survival-side output. Already works natively; tagging this M-02 arc makes the loop explicit and keeps mob/farm mods from being designed around it.

- from: ars_nouveau:source_gem (the M-01 hub reagent) | via: ars_nouveau:imbuement | to: magic (internal / cross-magic) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Foreign magic essences (Iron's arcane_essence, Occultism spirit remnants) imbuement-convert into source_gem — the universal magic currency. Reserved in reagent-ownership. Confirming the arc; do NOT repurpose source_gem as a non-magic reagent.

- from: ars_nouveau enchanted gear / spell scrolls | via: ars_nouveau:enchanting_apparatus service | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic specialist offers enchanting-for-hire: non-magic players bring their tools, the Ars player provides the Source and the apparatus work — payment is emergent (coin, trade goods). This is pure service-labor economy without any NPC faucet, exactly M-33.

- from: ars_nouveau Create-adjacent: Archwood logs as a superior Volcanic Sourcelink fuel | via: ars_nouveau:volcanic_sourcelink (non-recipe mechanic) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood logs give a Source bonus when burned in the Volcanic Sourcelink vs. regular wood — a Create sawmill (create:cutting) bulk-producing archwood planks/logs becomes the high-throughput fuel line for the magic Source farm. The Create lumber line feeds the magic energy system; that's a real production→magic arc. (Light single step — M-12 processing pull, everyday tier.)

- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement as a Create-part catalyst | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A mid-tier Create machine component (e.g. a precision mechanism) could require an imbuement step with source_gem as catalyst — the Create tech specialist must trade with the magic player for the gem or buy it. Symmetrical cross-route: magic reagent in a tech chain. M-29 cross-route dependency; forces the two specialists to interact without either self-supplying.

- from: ars_nouveau boss drop (Arch-Illager / Guardian summon loot) | via: loot-seed into ars_nouveau dungeon/ritual loot tables | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ars summon-ritual bosses are already a combat output; a loot-seed adding a scarce arcane component (e.g. a rare essence) that non-combat players need for high-tier magic turns the combat specialist into a supplier. Economy arc without NPC faucet. via: loot-seed.

- from: ars_nouveau Drygmy mob-drop farm | via: Drygmy passive collection of magic/organic reagents | to: economy | motif: M-33 | power: mid | tone: clash | verdict: REJECT | reason: The Drygmy outputs raw mob drops that any player can farm manually — making it a "service" is a stretch, it's self-serve automation. The economy link here collapses to "you can sell mob drops," which is the ambient endpoint. No clean demand-gate.

- from: ars_nouveau spell scrolls | via: KubeJS locking as Create-gated unlock | to: Create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: Spell scrolls unlocking Create recipes is thematically inverted — Create gates *tech*, not magic. A magic-locked tech recipe reads backwards to players. M-29 requires the cross-dependency to feel natural ("of course the Create part needs the magic reagent") not arbitrary. This direction doesn't survive the red-team.

## lionfishapi   [anchors: support (library/API) (1)]

LEAVE — Verified zero-content animation/entity API. 0 blocks, 0 items, no loot, no methods. Required dependency for L_Ender mods only. Nothing to route or weave.

## more_slabs_stairs_and_walls   [anchors: support — decoration palette (1)]

847 blocks (all vanilla-style cuts), loot=yes, stonecutter-shaped. A large decoration palette. Target: 2nd anchor via Create.

Candidates:

- from: more_slabs_stairs_and_walls stone/wood/concrete cut variants | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A player running a Create lumber/stone mill bulk-cuts log/stone slabs and walls automatically — the 847 variants become automation outputs of the Create spine, not just hand-crafted deco. Saw recipes are the natural form; stonecutter-shaped blocks already have a conceptual predecessor in create:cutting. Light single step per variant, everyday tier. This earns the deco set a genuine Create anchor.

- from: more_slabs_stairs_and_walls gravity-block variants (concrete powder slabs, sand/gravel slabs) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushed-back-to-sand / gravel / powder closes the recycle loop on gravity cuts — a small but coherent loss-return (M-04 is lossy by design). Gravel/sand recycling from over-built or mis-placed cuts is thematically sound for a Create pack. Everyday tier, one step.

- from: more_slabs_stairs_and_walls amethyst/stone variants | via: ars_nouveau:imbuement as decorative substrate | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Imbuement of decorative slabs into magic reagents is purely arbitrary — there is no lore reason amethyst slabs (vs. amethyst itself) would be a magic input, and it would confuse the crafting graph by making deco blocks into magic feedstock. Theme clash.

- from: more_slabs_stairs_and_walls bulk cut variants (for airship hull builds) | via: aeronautics ship-construction as build material | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 requires a *structural alloy / load-bearing material* (metal plate/beam), not decorative cut stone. Stone slabs don't thematically read as hull material on an airship; the connection is forced. A player would ask "why does my ship need basalt stairs?" — fails the nod test.

## rhino   [anchors: support (library/engine) (1)]

LEAVE — Verified pure JavaScript runtime (Mozilla Rhino fork) for KubeJS. 0 blocks, 0 items, no loot, no methods. Indirectly enables all KubeJS recipe weaving but has zero direct content surface. Nothing to weave.

## fzzy_config   [anchors: support (library) (1)]

LEAVE — Verified config-serialization library (Kotlin TOML backend). 0 blocks, 0 items, no loot, no methods. Pure developer infrastructure. Nothing to route or weave.

## aeronauticscompat   [anchors: aeronautics (1)]

LEAVE — Verified pure behavior-patch / mixin glue with 0 blocks, 0 items, no loot, no processing methods. Required (CLAUDE.md) for the aeronautics pillar, but has no content surface to weave. Its single anchor is correctly labeled aeronautics.

## entity_model_features   [anchors: support (client rendering/resourcepack) (1)]

LEAVE — Verified client-only model-replacement engine. 0 blocks, 0 items, no loot, no methods. Purely cosmetic render support; nothing to weave.

## jei   [anchors: client-only UI (support) (1)]

LEAVE — Verified client UI recipe viewer. 0 blocks, 0 items, no loot, no processing methods. Load-bearing for Create recipe visibility (do not swap to EMI per CLAUDE.md). Nothing to weave.

## valarian_conquest   [anchors: survival (1)]

76 blocks, 319 items, loot=yes. Medieval factions, custom crafting stations (armorsmith, builder, barber_surgeon), faction loot. Single anchor — survival. Rich content; target a 2nd anchor.

Candidates:

- from: valarian_conquest faction gear (shields, faction armor, weapons) | via: create:mechanical_crafting or create:pressing as a gating input | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Valarian's armorsmith station crafts faction gear — gate it on a Create-pressed steel plate or brass fitting as a required input, so the martial gear line depends on Create production. A medieval armorer using industrially-pressed plate is coherent (Valarian's vibe is quasi-realistic medieval conquest). Mid tier; the armorsmith station is the "own machine" of M-05. Depth scales with gear tier (basic shields = lighter gate; knight armor = heavier gate).

- from: valarian_conquest citizenship items / faction allegiance gates | via: KubeJS colony-route lock (M-28) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies tavern/barracks could be the recruitment point for Valarian citizens — getting a citizenship item cheaper/faster if you have a colony structure, making the colony player a natural faction-hub. Colony route links the economy's settlement arm to the survival faction system. Players who build colonies become political brokers as well as producers.

- from: valarian_conquest boss/dungeon loot (faction dungeon/keep chest loot, loot=yes) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Faction keeps and outposts hold loot; seed a scarce Create part or magic reagent into those chests — the combat specialist who raids faction strongholds brings back components that non-combat players need. Turns the faction danger into the supplier half of the boss-economy loop (M-34). via: loot-seed.

- from: valarian_conquest mercenary hire / faction trade | via: Numismatics coin as hire medium | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Hiring mercenaries or buying faction allegiance through Numismatics coin makes the faction system a demand sink for minted currency — players who control coin also control military labor. This is M-08 (player-minted currency finding a demand node) not M-09 (NPC vendor), because the mercenaries are player-adjacent economic agents, not NPCs paying out coin — the player spends coin. The demand-gate on coin is the weave.

- from: valarian_conquest armorsmith / builder / barber_surgeon stations as ≥3 crafting surfaces | via: KubeJS locked-exclusive gating | to: economy | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: M-37 is research/knowledge gate (MineColonies research, Ars spell-knowledge). Valarian's stations are just crafting blocks, not a research unlock — they don't carry the "knowledge isn't tradeable" mechanic M-37 requires. The connection would be a misuse of the motif. REJECT; the armorsmith station is better served under M-05.

- from: valarian_conquest faction banner blocks (76 blocks include many banner variants) | via: create:cutting deco (M-04) | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Crushing faction banners back to raw material (M-04 recycles deco) would be jarring — these are quest/allegiance items with narrative weight, not generic deco blocks. Theme clash: a player would find it odd that their Barathian banner gets mechanically shredded for fiber.

## ding   [anchors: support (client QoL) (1)]

LEAVE — Verified client audio-cue only (load-complete sound). 0 blocks, 0 items, no loot, no methods. No material surface; nothing to weave.

## better_climbing   [anchors: support (QoL) (1)]

LEAVE — Verified pure movement-feel tweak (ladder/vine climbing physics). 0 blocks, 0 items, no loot, no methods. No content surface; nothing to weave.

## prickle   [anchors: support (library/API) (1)]

LEAVE — Verified config-format library (Darkhax Prickle JSON). 0 blocks, 0 items, no loot, no methods. Developer infrastructure; nothing to weave.

## zeta   [anchors: support (library/framework) (1)]

LEAVE — Verified modular framework library (Vazkii / Quark's module loader). 0 blocks, 0 items, no methods. The 1 biome-modifier is framework scaffolding, not player content. Nothing to weave.

## gravestone   [anchors: survival (1)]

1 block (gravestone:gravestone), 2 items (gravestone, obituary), loot=yes. Death-recovery utility. Single anchor — survival.

The dossier suggests LEAVE. Red-teaming harder:

- from: gravestone:gravestone (the placed grave block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Mechanically crushing a gravestone block (which holds a dead player's inventory) back to cobble/stone would be a jarring, griefable interaction — tonally wrong and exploitable. M-04 is for decorative blocks, not functional player containers. Theme clash and gameplay harm.

- from: gravestone:obituary (item — logs coordinates, equipment snapshot, death details) | via: supplementaries:item_lore or supplementaries:antique_book enhancement | to: economy | motif: no-motif | verdict: REJECT | reason: The obituary is a death-log keepsake with no economy function. There is no coherent M-## that maps "read a death diary" to economic value without inventing a motif.

- from: gravestone chest loot (loot=yes — but gravestone's loot is the dead player's own inventory, not worldgen chest loot) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: clash | verdict: REJECT | reason: The loot=yes flag here is the grave restoring the player's OWN items, not a worldgen loot table that can be seeded. Misidentifying this as a loot-seed target is a mistake — it is not the correct delivery. No weave possible via loot-seed.

LEAVE — Death-recovery utility. The gravestone block and obituary items are functional containers/keepsakes with no thematic or mechanical bridge to Create, magic, economy, or aeronautics. Any edge would be contrived. The one-anchor survival role is appropriate and complete.

## betterstrongholds   [anchors: survival (1)]

0 blocks, 0 items (no registry), loot=yes. YUNG's stronghold overhaul — structure + custom loot tables. Single anchor — survival. The dossier had deferred loot-seed as "possible but deferred." Revisiting:

- from: betterstrongholds stronghold chest loot | via: loot-seed (datapack edit) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The stronghold is the pack's most dangerous pre-End structure — the combat specialist who clears it should bring back something the production economy needs. Seeding a scarce Create component (e.g. a precision mechanism fragment) or a magic reagent (e.g. a rare essence shard) into stronghold chests makes dungeon-delving a supplier role for the rest of the server. Classic M-34 (combat-route supply). Delivery: via loot-seed (datapack). Endgame tier (the player has to reach and clear the stronghold to access it). Theme: a dungeon holding advanced tech fragments or arcane relics is coherent for a medieval-industrial pack. Nod test: "of course the deepest vanilla dungeon rewards you with a component nobody else can get."

- from: betterstrongholds stronghold chest loot | via: loot-seed | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mob-drop reagents (M-02 established motif) can be seeded into the stronghold's mob-boss room chests — specifically a rare essence or Ars Nouveau ingredient that the magic pillar needs but can't farm passively. The stronghold's unique danger profile (silverfish, evokers in YUNG's variant) makes it a natural rare-reagent source. Delivery: via loot-seed.

- from: betterstrongholds structural loot (trapped room / hidden room chests) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Seed a boss-key component (M-15 — a required ingredient for a complex Create recipe, e.g. a high-tier sequenced-assembly unlock) into the stronghold's deepest chest. The stronghold becomes the single-source gate for that component — a player *must* venture down to progress the tech tree. This advances the loop (danger → production) and is the canonical M-15 use. Delivery: via loot-seed. Endgame.

## gnkinetics   [anchors: Create (1)]

33 blocks, 31 items, loot=yes. Create Gears n' Kinetics — pure Create kinetic addon. Single anchor — Create. Dossier flagged "leave — second pillar would be forced." Re-evaluating with fresh eyes.

The dossier's conclusion is correct but let's verify against the motif palette:

- from: gnkinetics:planetary_gear / ring_gear (gear-ratio/torque mechanics) | via: aeronautics drivetrain | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Planetary and ring gears are exactly the kind of drivetrain component an Aeronautics engine/propulsion system needs for variable gear ratios — a prop-drive that can shift speed/torque. Seeding gnkinetics gears as required components in mid-to-high-tier Aeronautics propeller or engine recipes (M-24 mechanical component → propulsion/control) earns them a genuine aeronautics anchor. The pairing is mechanically coherent — a player would say "of course a variable-pitch prop needs a planetary gearset." Mid tier.

- from: gnkinetics:worm_gear (non-back-drivable — common in control surfaces) | via: aeronautics control surface (rudder/aileron) recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Worm gears are the canonical "actuator/control" gear (self-locking, high reduction) — seeding one into a rudder/aileron recipe is precisely what M-24 covers (control surfaces as well as propulsion). Gives the worm gear a dedicated role distinct from the planetary.

- from: gnkinetics:large_industrial_gear / industrial_gear | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 requires the mod's OWN machine as the gating method. gnkinetics doesn't register its own recipe types — it uses standard Create methods. Forcing M-05 here would mean "crafting gnkinetics parts requires gnkinetics parts," which is circular and not a real cross-system gate. Not a valid M-05 application.

- from: gnkinetics gears as Create spine deepening | via: native Create spin (no weave needed) | verdict: REWORK note — the dossier's "leave — a deepening of the Create spine" conclusion was partially correct for magic/economy/survival, but M-24 into aeronautics is a genuine second anchor that was missed. The aeronautics arm IS the economy's logistics arm, so this also earns gnkinetics an economy-adjacent tag. The correct verdict is: gnkinetics gains aeronautics as a 2nd anchor via M-24 planetary/worm gear → drivetrain seams.

## trading_floor   [anchors: Create, economy (2)]

Already at 2 anchors. Review existing connections, then look for new/richer links.

REWORK: OK — connections sound. The Trading Depot is a Create block (hard dep) that automates villager trades — Create + economy is exactly the right arc and the two anchors are load-bearing, not arbitrary. The dossier's M-08 note is slightly imprecise (the depot itself doesn't *mint* coin — it converts goods into trade outputs), but the functional arc is correct.

New candidates:

- from: trading_floor:trading_depot | via: create:deploying (applying a villager-trade ticket/filter onto the depot) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: The depot already fully exists as a Create component — adding a deploying-application upgrade layer on top is unnecessarily complex for what is already a Create machine. M-20 is for upgrading a base into a more capable version; the depot doesn't need an upgrade path, it IS the upgraded version of manual villager interaction. Over-engineering a 2-anchor mod.

- from: trading_floor automated emerald/book output | via: aeronautics cargo hold | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create-automated Trade Depot producing emeralds or enchanted books at volume is exactly the bulk good that needs an aeronautics logistics network to distribute — one settlement's trading post serves another's economy via airship cargo run. M-31 (logistics-required bulk good). The volume of automated trade output makes it natural for aeronautics to move rather than walk.

- from: trading_floor:trading_depot (enabling automated villager trait farms) | via: MineColonies villager hall as the supply source | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies colony with a Tavern/market keeps a population of specialist villagers — pairing the Trading Depot directly adjacent to the colony's villager housing makes the colony the organic supply node for automated trade. Colony builder → villager supply → Trade Depot → Create belt output. M-28 (colony route) feeds the economy arm. The colony player's settlement becomes the logistics hub.

























