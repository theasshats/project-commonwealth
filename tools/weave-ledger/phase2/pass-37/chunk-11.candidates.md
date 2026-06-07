# Phase 2 candidates — chunk-11

## cbc_at   [anchors: create, aeronautics (2)]

Dossier says ≥2 anchors already (Create + aeronautics). Review existing connections first.

REWORK: OK — connections sound. Create-machined munitions arming Aeronautics ships is a clean causal path, tightly motivated. No arbitrary or lore-clashing links.

New candidate via method-pull:

The dossier itself names boss-drop gating as the obvious deepening. The heavy autocannon barrel / rocket pod are high-tier ship weapons — endgame by the pack's cost model. A boss-drop gate (M-15) on the heavy tier fits the "more steps for higher tiers" rule precisely: light autocannon = standard Create chain; heavy autocannon + rocket pod = same chain plus a boss-drop input (the gate is the extra *step*, not a cost multiplier).

- from: cbc_at:bronze_heavy_autocannon_barrel / cbc_at:bronze_rocket_pod_breech | via: KubeJS recipe gate (boss drop as required input, added to existing create:cutting/CBC assembly chain) | to: survival (boss-drop route) | motif: M-15 | power: endgame | tone: ok — heavier weapons demanding a proof-of-danger kill is immediately legible; PvPvE pack, so ship weaponry gating on the dangerous world is thematically clean | verdict: ACCEPT | hook: you can build light autocannons off the factory floor, but the heavy barrel and rocket pod demand a kill-trophy — the world has to push back before you arm a warship

- from: cbc_at:bronze_heavy_autocannon_barrel (combat-route supply) | via: emergent player trade | to: economy | motif: M-34 | power: endgame | tone: ok — combat specialists farm boss drops → trade heavy-weapon components to shipwrights who don't fight; the loop closes without forcing a recipe | verdict: ACCEPT | hook: the fighter and the builder need each other — a fighter sells the boss key that unlocks the heavy turret, a builder sells the hull the fighter flies on

- from: cbc_at:ap_rocket_item (munitions as a consumption sink) | via: M-26 consumption (munitions are spent against danger/pressure) | to: survival | motif: M-26 | power: mid | tone: ok — ammunition is literally consumable in combat; demand never zeroes | verdict: ACCEPT | hook: munitions burn through combat; a warship's magazine is a standing order, keeping munitions makers relevant even when no new ships are being built

- from: cbc_at munitions materials (gunpowder, propellant inputs) | via: regional-scarcity gate (propellant precursors are region-locked ores) | to: economy (scarcity foundation) | motif: M-30 | power: mid | tone: ok — propellant chemistry needs saltpeter or nitrate precursors; region-locking those makes the warship economy depend on who controls the raw inputs | verdict: ACCEPT | hook: whoever settles the saltpeter region controls the ammunition supply — regional scarcity makes the munitions trade non-optional

- from: cbc_at weapons as Colony unlock | via: MineColonies research/supply gate | to: economy (colony route) | motif: M-28 | power: endgame | tone: clash — armaments aren't a colony-production natural fit (colony produces basics, not bespoke weapons); forced | verdict: REJECT | reason: thematic clash — a MineColonies production route for advanced autocannon barrels contradicts the colony-as-basics-producer model; boss-drop route (M-15, above) is the correct high-tier gate here

## occultengineering   [anchors: create, magic (2)]

REWORK: OK — connections sound. occultengineering IS the Create×Occultism bridge by construction; both anchors are well-motivated. The dossier also correctly identifies the dossier's own "weak" sterling silver→coin link (M-08) — reviewed below.

New candidate via method-pull:

sterling_silver (c:ingots/sterling_silver, an occult alloy) is tagged and usable as a coin metal. It is scarce (Occultism-tied, not freely obtained), which is what M-08 requires — player-minted currency from scarce regional metal → Create-processed → Numismatics coin. This is flagged WEAK in the dossier but let's power-read it: sterling silver is a genuine alloy with Occultism depth (requires spirit-fire or ritual to produce), it is not trivially obtainable, and minting it as a distinct high-value coin tier gives it a second system anchor beyond the Create×magic bridge it already is.

- from: occultengineering:sterling_silver (ingot) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid (requires Occultism progression to obtain) | tone: ok — an occult alloy as a premium coin tier is thematically coherent (alchemy/silver → money is a real historical chain) and a player would accept it; the key test: is sterling silver scarce enough to make minting a specialization? Yes — it's behind Occultism's spirit-fire, not trivially farmable | verdict: ACCEPT | hook: the alchemist's silver pressed into coin — the occult specialist is also the mint-master, and the economy runs on their output

- from: occultengineering:spirit_solution (reserved reagent) | via: occultism:ritual as a gate for cross-route items (a ritual requiring spirit_solution to produce a Create-needed component) | to: economy (cross-route dependency) | motif: M-29 | power: mid | tone: ok — a Create component that can only be finished through an Occultism ritual locks in that cross-dependency | verdict: ACCEPT | hook: the brass gear needs a whisper of spirit to hold — the machinist trades with the occultist or the machine won't turn

- from: occultengineering:phlogiport (wireless logistics teleporter) | via: logistics bulk-goods movement | to: aeronautics/economy (logistics arm) | motif: M-31 | power: mid-endgame | tone: clash — M-31 is specifically about goods that require aeronautics/trains to move at scale; a teleporter *bypasses* that logistics arm and threatens regional scarcity rather than serving it; the loop says keep travel meaningful | verdict: REJECT | reason: phlogiports are a logistics-erase mechanic for the scarcity foundation — proposing them as M-31 (logistics-required bulk good) contradicts the balance lens (§5); the right framing is a design-tension flag, not a weave

## fogoverrides   [anchors: support/client-QoL (1)]

0 items, 0 blocks, 0 loot, pure config-driven visual. No material surface to route through any method.

LEAVE — genuine zero-content config mod; atmospheric/visual only; no items, no loot, no recipe surface to weave on any motif.

## trashslot   [anchors: support/QoL-client (1)]

0 items, 0 blocks, 0 loot. UI-only inventory slot; deletes items, produces nothing.

LEAVE — zero-content client UI mod; no material surface to weave; the void-slot function has no loop coupling.

## create_hypertube   [anchors: create, aeronautics (2)]

REWORK: OK — connections sound. Kinetic-powered player/entity transport through tube networks cleanly anchors to both Create (kinetic power, sequenced_assembly crafting) and the aeronautics/logistics pillar (moving entities across the map, the economy's physical arm).

New candidate via method-pull:

The hypertube itself is built via create:sequenced_assembly (confirmed in dossier made-by). Its blocks are: hypertube, hypertube_accelerator, hypertube_entrance — 4 blocks / 6 items. Power-reading: the tube network is an infrastructure build, equivalent to train track. At high scale (connecting colonies, player bases, trade hubs) it becomes a logistics service.

- from: create_hypertube tube network (infrastructure) | via: M-33 service-for-hire (a player who builds/maintains the tube network charges passage or route construction fees to others) | to: economy | motif: M-33 | power: mid-endgame | tone: ok — a tube-network builder as an infrastructure specialist-for-hire fits the PvPvE social model cleanly; "pay the engineer to run a spur to your base" is exactly how a player economy generates labor value | verdict: ACCEPT | hook: the tube network is infrastructure — someone built it, and someone pays for the connection

- from: create_hypertube:hypertube_entrance (requires kinetic power) | via: consumption sink (kinetic energy burned to sustain the tube) | to: survival/Create | motif: M-26 | power: everyday | tone: ok — the tube consumes rotational power continuously; a large network is an ongoing energy demand | verdict: ACCEPT | hook: the faster you want to travel, the bigger your power plant needs to be — tube networks drive generator demand

- from: create_hypertube as a colony logistics seam | via: MineColonies courier/delivery routes threaded through hypertube nodes | to: economy (colony route) | motif: M-28 | power: mid | tone: clash — MineColonies colonists can't actually use hypertubes (no villager-NPC pathfinding through the tube mechanic); forced behavioral coupling that the mod doesn't support | verdict: REJECT | reason: no technical hook for colonists to enter/exit tube networks; coupling is cosmetic not mechanical

## citadel   [anchors: support/library (1)]

0 player-facing items (debug/dev artifacts only), 0 recipe-types, loot=yes but only dev/internal. A pure animation-framework and spawn-rate library for sbom_xela mods. The single `citadel:lectern` is a dev block, not a gameplay item.

LEAVE — genuine zero-gameplay library; the loot=yes flag is a dev artifact, not an exploitable loot surface; no content to weave.

## createthreadedtrains   [anchors: support/performance (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. Pure server-side threading optimization for Create's railway scheduler. No material surface at all.

LEAVE — genuine zero-content performance mod; no items or methods; threading optimization is invisible infrastructure with no weave surface.

## exposure   [anchors: create, survival (2)]

REWORK: existing connections reviewed.
- Create anchor (sequenced_assembly film development + deployer-tended stands): sound — the mod's own made-by confirms create:sequenced_assembly. The Create automation path is real and documented.
- Survival anchor: plausible as a self-expression/keepsake hobby, but somewhat soft — "survival hobby" is an ambient anchor more than a loop-advancing one. Not flagged as REWORK-worthy (sanctioned flavor role), but noted.
- The dossier's M-09 candidate ("photographs as sellable mementos") is dead — M-09 is retired. Correct to have marked it WEAK.

OK — connections sound. The Create automation anchor is genuine; the survival/hobby anchor is light but not arbitrary (photography as a player-expression activity in a co-op pack has real social value, even without hard loop coupling).

New candidates via method-pull:

Power-reading exposure's item surface: camera (gold/regular), lightroom, black_and_white_film, album, photograph frames, camera_stand. The aging method (`exposure:photograph_aging`) is noteworthy — it is a time-based maturation mechanic on photographs.

- from: exposure:aged_photograph (photograph aged via exposure:photograph_aging) | via: exposure:photograph_aging (time-based maturation) | to: economy (maturation/value-add specialty) | motif: M-35 | power: mid | tone: ok — aged photographs as a specialist trade good (an aging photographer sells prints that have been properly aged, not fresh snaps) fits the M-35 maturation axis naturally; a player would nod at "aged photographs command a premium, like aged wine" | verdict: ACCEPT | hook: fresh photographs are keepsakes; aged photographs are art — the darkroom specialist who waits earns more

- from: exposure:camera (gold variant) | via: create:sequenced_assembly (already used for film development) | to: Create (deepening) | motif: M-06 | power: mid | tone: ok — the gold camera as a sequenced-assembly flagship item (multi-stage precision instrument) fits M-06's keystone-assembly pattern; the gold camera is clearly a higher-tier tool than the base camera | verdict: ACCEPT | hook: the precision camera isn't hand-assembled — it comes off the sequenced line, lens-ground and timed by the machine

- from: exposure:black_and_white_film (consumable per 16 shots) | via: M-26 consumption sink (film is spent with every shoot) | to: survival | motif: M-26 | power: everyday | tone: ok — film is a genuine consumable; it runs out, creating repeating demand for whoever makes it; not forced | verdict: ACCEPT | hook: film runs out — the photographer is always the chemist's best customer

- from: exposure photographs as map-art/records for colony or aeronautics routes | via: M-33 service-for-hire (a photographer charges to document builds, map routes, or provide portraits) | to: economy | motif: M-33 | power: everyday-mid | tone: ok — in a PvPvE co-op context, a designated photographer providing documentation or portraits to others is a real player-economy service; the social mechanic is the connection, not a recipe | verdict: ACCEPT | hook: the cartographer flies the airship; the photographer documents the route — and charges for the album

- from: exposure photographs as a KubeJS-gated progression unlock (a photograph of a specific landmark/boss required to advance a recipe chain) | via: KubeJS custom recipe gate | to: survival/create | motif: M-15 | power: mid | tone: clash — a photograph as a boss-key substitute is thematically forced; M-15 is about a boss *drop* gating tech, not a player-captured image; the conceptual connection is cute but doesn't survive red-teaming as a clean motif application | verdict: REJECT | reason: M-15 requires a boss drop as the gate item; a photograph is not a drop; the "proof of exploration" angle isn't implemented by any existing method and would need a novel mechanic outside the palette

## rechiseledcreate   [anchors: create, support/decoration (2)]

REWORK: existing connections reviewed.
- Create anchor: sound — the Mechanical Chisel is a genuine Create kinetic block; the dossier confirms it.
- Support/decoration anchor: valid — it IS the chiseling bridge for the Create decorative palette.
OK — connections sound.

New candidates via method-pull:

Power-reading: 242 blocks (chiseled variants of Create stone + wood window patterns), 242 items, loot=yes. All content is decorative deco variants — andesite cut polished, asurine cut small brick, wood window panes/diagonals, etc. No consumable, no ore, no magic reagent.

- from: rechiseledcreate chiseled blocks (large inventory of high-quality decorative stone/window variants) | via: M-04 Create-recycles-deco (chiseled variants crush back via create:crushing to raw + XP nugget) | to: Create | motif: M-04 | power: everyday | tone: ok — deco blocks recycling through crushing is the established M-04 pattern; adding rechiseledcreate's 242 variants to the crushing tag set is a one-step extension of existing behavior, not a new concept | verdict: ACCEPT | hook: over-chiseled? The crusher un-makes it — you lose some, but the material comes back

- from: rechiseledcreate window-pattern blocks (acacia/birch/oak etc. _window_panes, _diagonal, _large) as colony-building material | via: M-28 colony route (MineColonies builder huts requesting chiseled window variants for higher-tier colony buildings) | to: economy | motif: M-28 | power: mid | tone: ok — colony buildings commonly require decorative blocks as upgrade materials; chiseled windows as colony building requests is thematically coherent (a settlement's architecture improves with crafted stone and glass) | verdict: ACCEPT | hook: the colony architect's upgrade request: "bring me six chiseled asurine windows — the mason's hut isn't just a shed anymore"

- from: rechiseledcreate blocks as a regional-scarcity gated decoration (asurine/andesite variants require regionally scarce stone types from GTMOGS ore-gen) | via: M-30 | to: economy | motif: M-30 | power: mid | tone: clash — decorative blocks behind regional scarcity is a thin excuse; the scarcity already exists at the raw material level (asurine/andesite sourcing), and adding scarcity to deco blocks is punishing player creativity without advancing the loop; the region-lock should live at the raw ore level, not at the decorative output | verdict: REJECT | reason: decorative blocks gated by regional scarcity is disproportionate (deco depth doesn't warrant scarcity gating); the loop advances better by leaving deco accessible and locking functional outputs

## aileron   [anchors: aeronautics (1)]

0 blocks, 0 items, 0 recipe-types, loot=yes (enchantment-related loot injection). Purely behavioral — reworks Elytra flight physics + adds Elytra enchantments.

Power-reading: the mod injects Elytra enchantments into loot (loot=yes). The Elytra is vanilla; aileron's enchants are presumably datapack-accessible. The dossier's own candidate (Ars/Iron's enchanting applying aileron's enchants, M-10-adjacent) is flagged WEAK — let's test it:

Red-team M-10 angle: M-10 is "a foreign material refined/attuned into a magic reagent through an arcane infusion method." Applying an enchantment *to* an Elytra via Ars Nouveau's enchanting apparatus is not really M-10 (material → reagent); it's closer to a service (M-33 enchant-for-hire) or an upgrade (M-20 deploy-application). The dossier is right that it's M-10-adjacent but not a clean match.

- from: aileron Elytra enchantments (in loot=yes tables) | via: loot-seed — seed aileron's Elytra enchants into dungeon/structure loot tables as discoverable upgrade books | to: survival (danger/exploration) | motif: M-02 | power: mid | tone: ok — finding an Elytra enchantment book in a dangerous structure loot chest (dungeon, fortress, etc.) ties personal-flight advancement to exploration-pressure; the "mob/boss drop reagent sink" motif generalizes to structure loot seeding here (the loot=yes flag confirms aileron already seeds loot); a player finds the upgrade, not buys it | verdict: ACCEPT | hook: the wind-riding trick isn't in any book — you find it in the ruins

- from: aileron Elytra enchantments as Ars Nouveau enchanting apparatus targets | via: ars_nouveau:enchanting_apparatus (a foreign item — Elytra — is enchanted through the arcane apparatus with aileron's enchants) | to: magic | motif: M-20 | power: mid | tone: ok — applying a specialized enchant to the Elytra through the Ars apparatus (item_application-adjacent) fits M-20 (deploy-application upgrade) better than M-10; the Ars apparatus is exactly this kind of upgrade station | verdict: ACCEPT | hook: the Elytra isn't just found, it's tuned — the arcanist's apparatus imprints the flight glyphs onto the membrane

- from: aileron Elytra enchants as combat-specialist drop | via: emergent trade (a combat player farms the enchantment book from dangerous loot, sells it to a builder/logistics player who wants Elytra mobility) | to: economy | motif: M-34 | power: mid | tone: ok — Elytra enchantment books as a combat-route supply item is coherent: the fighter explores dangerous structures, finds the enchantment, and the logistics/aeronautics player buys it | verdict: ACCEPT | hook: the enchantment drops in a place nobody safe visits — so the fighter and the flyer need each other

- from: aileron + Quark elytra duplication | via: quark:elytra_duplication (Quark method already in the palette) | to: survival/Create | motif: M-29 | power: mid | tone: clash — Quark's elytra duplication is a vanilla-adjacent crafting recipe (phantom membrane + elytra), not a Create or magic cross-route dependency; tying aileron to it is not a cross-route dependency, just stacking two vanilla-adjacent systems; no genuine loop advancement | verdict: REJECT | reason: quark:elytra_duplication is not a cross-route (M-29 is magic-in-Create-chain or Create-in-ritual); this pairing is vanilla-adjacent and doesn't advance the loop

## dragonlib   [anchors: support/library (1)]

0 player-facing items (the dragonlib:dragon block/item is a dev artifact), 0 recipe-types, 0 loot.

LEAVE — genuine zero-content library; the single dev block is not a gameplay item; no material surface to weave on any motif.

## entity_texture_features   [anchors: support/client-rendering (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. Pure client-side texture-rendering engine (ETF) for OptiFine-format random/emissive mob textures. Zero content surface.

LEAVE — genuine zero-content client rendering mod; no items, no loot, no recipe surface; cosmetic engine only.

## controlling   [anchors: support/client-QoL (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. Pure client UI mod (keybind search bar). Zero content surface.

LEAVE — genuine zero-content client UI utility; no material surface to weave.

## rhino   [anchors: support/library (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. KubeJS's JavaScript runtime engine (Mozilla Rhino fork). Enables the pack's kubejs/ scripts to run, but has zero player-facing content of its own.

LEAVE — genuine zero-content library/engine; no items or methods; the JS runtime is infrastructure, not a content mod.

## freefbible   [anchors: support/curated-flavor (1)]

1 item (freefbible:freef_bible — inert readable book), 0 blocks, 0 loot, 0 recipe-types. Novelty/easter-egg gag. The item has no effects, crafting downstream, or world interaction.

The dossier is right: any forced recipe edge would be noise. However, let's test one angle before committing to LEAVE: the item is a book — could it be routed through `supplementaries:antique_book` to make it "aged"? Power-read: supplementaries:antique_book is a method in the palette. But an antique Bible is cute, not loop-advancing; it's still an inert item that doesn't connect to any system. The tone would be fine but the motif would be no-motif (no accepted motif covers "flavor item → antique flavor item"). REJECT-for-review.

- from: freefbible:freef_bible | via: supplementaries:antique_book | to: support/flavor | motif: no-motif | power: everyday | tone: ok (cute) | verdict: REJECT | reason: no-motif — "flavor item gains flavor property" doesn't compose any accepted motif; the loop isn't advanced

LEAVE — zero-content gag item; no coherent loop coupling possible without inventing a motif.

## solmaiddream   [anchors: survival (1)]

1 item (food_book — UI inspect tool for maid diet), 0 blocks, 0 loot. A Touhou Little Maid addon tracking unique foods fed to maids; stat milestones when food variety grows.

Power-reading: the mechanic is food-variety → maid stats. It rides the pack's food pool entirely. The food_book is a UI item (right-click maid to inspect), not a craftable or processable.

The dossier's verdict ("tiny flavour addon; forcing a second edge would be artificial") is right — this is a thin layer on top of Touhou Little Maid + the food system. Let's test one angle: food variety is survival pressure (M-16 seasonal reagent angle — seasonal crops feeding maids to get seasonal stat bonuses). Is that a weave? Red-team: M-16 requires a crop obtainable only in a given season to feed a machine/ritual. Feeding a maid in summer to unlock a summer-stat milestone is thematically ok but mechanically the mod doesn't gate milestones by season — it counts unique foods regardless of season. So the seasonal hook is cosmetic, not structural.

- from: food diversity pool (seasonal foods per M-16 can be included) | via: M-16 seasonal reagent (seasonal crops fed to maids trigger additional milestone thresholds if config-tuned) | to: survival | motif: M-16 | power: everyday | tone: ok — seasonal feeding for maid bonuses is thematically coherent (summer strawberries = summer bonus) | verdict: REJECT | reason: solmaiddream's milestone system counts unique food IDs, not seasons; the mod has no season-aware gate, so this would need a config that doesn't exist; the connection is conceptual, not mechanical — can't be authored against existing methods

LEAVE — thin companion-flavor addon; no mechanical hook for a second anchor beyond the food-variety survival pressure it already inherits from its hard dep (touhou_little_maid + the pack's food pool); any second edge would require new mod behavior.

## staaaaaaaaaaaack   [anchors: support/QoL-perf (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. Generic item-entity merge utility (oversized drop stacks for perf). Zero content surface.

LEAVE — genuine zero-content QoL/perf mod; no material surface; the drop-merge behavior has no loop coupling.

## puzzleslib   [anchors: support/library (1)]

0 blocks, 0 items, 0 loot, 0 recipe-types. Multi-loader library (Fuzs). Zero content surface.

LEAVE — genuine zero-content library; no items or methods to route; dependency-only.

## ldlib2   [anchors: support/library (1)]

2 blocks and 1 item (ldlib2:renderer_model, ldlib2:test_2) are confirmed dev/test artifacts, not gameplay items. 0 recipe-types, 0 loot. UI/rendering/sync infrastructure for GregTech-lineage mods.

LEAVE — genuine zero-content library; the registered blocks/items are dev artifacts; no material surface to weave.

## gnkinetics   [anchors: create (1)]

33 blocks / 31 items (all kinetic components: ring gears, planetary gears, worm gears, chainable cogwheels, industrial gears, etc.), loot=yes, 0 recipe-types registered.

Power-reading: gnkinetics is a pure Create kinetics expansion — its components are mechanisms, not materials with a secondary identity. The dossier correctly notes it IS Create; any second pillar weave has to find a hook outside the kinetic-mechanism space.

Method-pull: what consumes or is made FROM kinetic components? 
- M-24: mechanical component → Aeronautics propellers/engines/control surfaces. Gnkinetics' ring gears, planetary gears, worm gears are exactly the "mechanical component" class M-24 was designed for. The worm gear and planetary gear in particular are realistic drivetrain components used in real propeller/transmission design.
- M-23: structural alloy → airframe. Not applicable (gnkinetics makes mechanisms, not structural material).
- M-05: native-method gating (flagship item built in its own machine, gated on Create parts). Not applicable as a second-anchor — gnkinetics IS the Create side.

- from: gnkinetics:planetary_gear / gnkinetics:worm_gear / gnkinetics:ring_gear | via: aeronautics drivetrain/control recipe (these gear types as required inputs for Aeronautics propellers, rudder gearboxes, and engine transmissions) | to: aeronautics | motif: M-24 | power: mid-endgame (planetary/worm gears are mid-high tier gnkinetics items — more complex than a basic cogwheel) | tone: ok — planetary and worm gears are real-world drivetrain components used in aircraft and vehicle transmissions; a player building an airship would immediately accept "this gear set goes in the propeller shaft" | verdict: ACCEPT | hook: the propeller doesn't just mount on a shaft — it takes a planetary gearbox to tune the torque, and gnkinetics makes that gearbox

- from: gnkinetics:industrial_gear / gnkinetics:large_industrial_gear | via: aeronautics structural component (heavy industrial gears as required parts for large/industrial-tier airframe actuators or wing-control linkages) | to: aeronautics | motif: M-24 | power: endgame | tone: ok — industrial-scale gear sets are exactly what you'd use in a large aircraft's control linkage (ailerons, flaps, engine nacelles) | verdict: ACCEPT | hook: the heavy airframe's control surfaces are driven by industrial gears — the kinetics specialist's output goes into the sky

- from: gnkinetics:worm_gear as a colony-locked specialty part | via: MineColonies blacksmith/mechanic hut producing worm gears (colony-exclusive precision component) | to: economy | motif: M-28 | power: mid | tone: ok — a worm gear is exactly the kind of precision component a colony's specialized blacksmith would produce, and if it's a required aeronautics input (M-24 above), the colony-route path into aeronautics is a natural lock | verdict: ACCEPT | hook: worm gears are tricky to machine — the colony's specialist smith is faster than hand-forging, and the airship builder needs both

- from: gnkinetics:chainable_cogwheel / gnkinetics:magnet_gear (power-routing innovations) | via: M-32 byproduct→input (surplus kinetic power from gnkinetics-enabled high-ratio gear trains as feedstock for Create-powered processes, creating an efficiency loop) | to: Create | motif: M-32 | power: everyday | tone: clash — M-32 is "a production byproduct/waste is another process's feedstock"; rotational power isn't a byproduct, it's the output of a machine; coupling gnkinetics gears to M-32 is a category error — kinetic components don't produce waste-stream byproducts | verdict: REJECT | reason: M-32 requires a waste/byproduct stream; gnkinetics produces mechanisms not waste; the loop coupling doesn't hold mechanically

== CHUNK COMPLETE ==

