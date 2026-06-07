# Phase 2 candidates — chunk-07

## moblassos   [anchors: survival (1)]

Power-read: The lasso tiers escalate by capture rules — golden for land animals (everyday), aqua for water mobs (everyday), diamond for any mob with no timer (mid), emerald for villagers (mid), hostile for monsters at low HP (mid-endgame). No machine or processing recipe of its own. The core value is mob-transport as a logistics primitive.

Method-pull: No registered recipe-types. Its items are crafting-table outputs; nothing processes *through* moblassos. The material to weave IS the captured mob itself — moved livestock = farm inputs, moved villagers = colony inputs, moved monsters = combat trophies in transit.

- from: moblassos:emerald_lasso (villager-transport) | via: loot-seed / thematic adjacency | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: ferrying a villager to your colony is how MineColonies gets its first workers — the lasso is the colony supply tool; a specialist "wrangler" role emerges naturally
- from: moblassos:hostile_lasso (live monster capture) | via: recipe (using captured-mob as an input to Occultism spirit-fire or Ars ritual) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: capturing a live creature and feeding it into a ritual/spirit-fire is exactly the kind of "dark acquisition" Occultism implies; transmuting it into spirit-essence is coherent
- from: moblassos:aqua_lasso (water-mob capture) | via: recipe (released aquatic mob → tide fish capture expansion) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: tide already covers aquatic catch via angling; routing aqua_lasso into tide's fish roster is a round-trip substitute (catch-and-relocate vs. angle-and-keep) with no added depth — duplicate edge, not a second anchor
- from: moblassos:golden_lasso (livestock ferry) | via: thematic | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: "livestock on a ship" is a vibe point, not a mechanic — there's no method to route through, and no existing motif captures "mob transport aboard a contraption"; would need M-new to be meaningful

REWORK: existing connection (survival) is thin — animal-transport QoL is noted as "loose fit; mostly convenience." The M-28 colony-supply link (above) is the stronger second anchor that firms the first into a real two-system mod. OK for the survival anchor to stand as-is, but the M-28 accept above lifts it.

---

## do_a_barrel_roll   [anchors: support (1)]

Power-read: Pure client flight-feel. Zero items, zero blocks, zero loot. Camera/physics behavior only. No content surface at all.

- LEAVE — genuine zero-content behavior mod (client camera/movement only; no items, loot, or recipes to route through any method). Support role is correct anchor.

---

## yungsapi   [anchors: support (1)]

Power-read: Library/API. Zero items, zero blocks, zero loot. Code utilities only.

- LEAVE — genuine zero-content code library (jigsaw/structure API; no player-facing content). Support role is the correct anchor.

---

## rolling_down_in_the_deep   [anchors: support (1)]

Power-read: Client-side swimming-camera extension of do_a_barrel_roll. Zero items, zero blocks, zero loot. Camera behavior only.

- LEAVE — genuine zero-content behavior mod (client camera/movement only; depends on do_a_barrel_roll; no content surface). Support role is correct.

---

## tide   [anchors: survival (1)]

Power-read: 402 items — a large fish roster across biomes, bait, rod components (amethyst/diamond/lapis/copper/gold/iron inputs), an angling minigame, crates, display blocks, and a fishing journal. Serene Seasons compat (seasonal catches). loot=yes. Already wires into farmersdelight:cutting. This is a mid-large content mod with strong seasonal hooks and a food output stream; the single survival anchor understates it.

Method-pull: tide fish → create:milling/crushing (fishmeal fertilizer M-12); void/deep-sea fish → ars_nouveau:imbuement or occultism:spirit_fire (exotic reagents, M-02/M-11); biome-locked rare fish → regional scarcity gate (M-30); seasonal-only catches → Serene Seasons input (M-16); fishy-note crates → loot-seed for exploration incentive.

Dossier noted M-09 "economy via Numismatics" — that's the retired luxury-sell motif; reject it in this pass and reframe to demand-gating.

- from: tide fish (biome-locked rare species — e.g. tide:abyss_angler from deep ocean) | via: create:crushing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crush/mill raw fish into fishmeal — a fertilizer feedstock for farm machines; the angling specialist becomes the farming specialist's fertilizer supplier
- from: tide fish (seasonal-only catches, Serene Seasons compat) | via: seasonal input gate | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain fish appear only in a given season — their flesh or oil is a recipe ingredient tied to that window, so a cook or alchemist must plan ahead or buy from a fishing specialist
- from: tide:abyss_angler / void fish (exotic, deep-biome) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a creature that lives in the void or deepest abyss transmutes into spirit-essence when offered to Occultism's spirit fire — exotic catch feeds the dark-arts pipeline
- from: tide fish (biome-locked rare species) | via: regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: a fish only catchable in a given biome-type is a regional good — fishing specialists in cold-ocean regions trade it to inland players who can't access it; scarcity by geography, not recipe
- from: tide:fishy_note (crate loot hint) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: fishy notes hint at fish locations — they're exploration flavor, not a combat-supply chain; M-34 is combat-route supply, which doesn't fit a navigation hint. No clean motif; no-motif reject.
- from: tide fish → ars_nouveau:imbuement (as foreign material reagent) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit-fire transmutation) is already accepted above for exotic fish; adding a second magic link via imbuement for the same fish roster is redundant and inflates the web. One clean magic anchor is enough unless a distinct subset of fish warrants a different magic method — keep M-11.
- from: tide fish (biome-locked) | via: Numismatics trade | to: economy | motif: M-09 (retired) | power: everyday | tone: clash (M-09 retired) | verdict: REJECT | reason: bare sell-for-coin link; M-09 is retired — the demand-gating is already captured by M-30 above (regional scarcity). Not a separate weave.

REWORK: existing survival anchor is fine. No existing weave connections to flag. The four accepted links above move tide from 1→4 anchors (survival×2 + create + magic + economy) — healthy; the M-16 and M-30 are the strongest adds.

---

## extradelight   [anchors: survival, Create (2)]

Power-read: 826 blocks, 1447 items — the pack's culinary backbone. 16 registered recipe-types, the richest method surface of any food mod. Already made-by create:mixing + farmersdelight:cooking/cutting. Feasts, high-end meals, seasonal ingredients (coffee, garlic, ginger, citrus crops). loot=yes.

Already at 2 anchors; brief REWORK check, then look for a third.

Dossier flagged M-09 "feasts/high-tier dishes → coin" — that's the retired luxury-sell motif; reject.

Method-pull: extradelight:drying_rack + extradelight:evaporator + extradelight:vat → M-35 maturation (spice-aged goods, salt-reduced syrups); extradelight:mortar → create:milling (grain-to-flour handoff as Create-pull alternative); colony provisioning of feast-tier food → M-28 (MineColonies kitchen-hut output); seasonal crop inputs (ginger via snowyspirit, citrus) → M-16 seasonal reagent; feast output as colony worker provisioning (M-28).

- from: extradelight:drying_rack / evaporator / vat outputs (dried goods, salts, syrups, reduced fluids) | via: extradelight:evaporator + extradelight:drying_rack | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: aging/drying/evaporating transforms a raw ingredient into a value-added good that commands trade; the time-cost creates a "food-artisan" specialist role and keeps demand continuous
- from: feast-tier cooked output (e.g. banquet items) | via: MineColonies colony provisioning (kitchen hut worker output) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies chef/cook hut produces large feast dishes cheaper than hand-cooking — the colony becomes the town's caterer, with extradelight feasts as the colony's luxury output traded to other players
- from: snowyspirit:ginger / ginger crops (c:crops/ginger) | via: extradelight:mortar (grinding into spice) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a winter-only crop (Serene Seasons / snowy-spirit spawn); grinding it into spice in the Mortar makes the winter season a farm-priority window — seasonal pressure drives the production calendar
- from: extradelight:mortar grain-to-flour | via: create:milling (as a parallel/alternative path) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Create is already an anchor (made-by create:mixing); adding milling for flour duplicates an existing weave rather than opening a new system — the Create anchor is already established. Deeper Create integration is welcome but doesn't add a new system anchor; this is an intra-pillar deepening, not a new weave
- from: feasts / luxury dishes | via: Numismatics | to: economy | motif: M-09 (retired) | power: mid | tone: clash (M-09 retired) | verdict: REJECT | reason: retired luxury-sell motif; demand-gating via M-28 colony provisioning already accepted above

REWORK: existing Create anchor (made-by create:mixing) is sound. Survival anchor is sound. M-12 noted in dossier is a good intra-pillar deepening but not a new system (Create is already anchored). The two new accepts (M-35, M-28) add economy as a third anchor — strong outcome.

OK — existing Create + survival connections sound. M-35 and M-28 open economy as a third pillar.

---

## ritchiesprojectilelib   [anchors: support (1)]

Power-read: Library/API. Zero items, zero blocks, zero loot. Projectile physics framework consumed by Create Big Cannons.

- LEAVE — genuine zero-content code library (ballistics/projectile API; no player-facing content or loot). Support role is the correct anchor.

---

## moonlight   [anchors: support (1)]

Power-read: Library/API for MehVahdJukaar mods. Technically has 2 items (spawn_box, placeable_item) but these are internal helper/debug entries, not player-facing. Zero gameplay loot.

- LEAVE — genuine zero-content code library (API/registry helpers; internal items are not gameplay content). Support role is the correct anchor.

---

## buildguide   [anchors: support (1)]

Power-read: Client-side render overlay. Zero items, zero blocks, zero loot.

- LEAVE — genuine zero-content behavior mod (geometric overlay; no player content). Support role is correct.

---

## bettermodsbutton   [anchors: support (1)]

Power-read: Client UI utility. Zero items, zero blocks, zero loot.

- LEAVE — genuine zero-content UI mod (pause-screen button; no gameplay content). Support role is correct.

---

## mysterious_mountain_lib   [anchors: support (1)]

Power-read: Library/API for MMF-Group mods. Zero items, zero blocks, zero loot.

- LEAVE — genuine zero-content code library (base classes/registry helpers; no gameplay content). Support role is correct.

---

## create_connected   [anchors: Create (1)]

Power-read: 65 blocks, 57 items — kinetic parts (gearboxes, clutches, battery, bridge), logic/redstone-link blocks, copycats, item silos, inventory bridges. Made-by create:cutting, create:filling, create:item_application, create:sequenced_assembly. loot=yes. A substantial Create-internal expansion with a broad logistics surface (silos, vaults, bridges) and a copycat system that can skin any foreign block.

Method-pull: the item silo / inventory bridge are bulk-logistics primitives — they route goods *within* a contraption/base. The copycat family is a "wear any texture" deco tool — a candidate for a Create→deco weave. The kinetic battery stores rotation energy. Logic/redstone-link blocks gate contraption behavior conditionally.

Dossier says "leave" for the Create-internal support role, but loot=yes and 57 items means there's real content to evaluate — revisit.

- from: create_connected:item_silo + inventory_bridge (bulk logistics blocks) | via: thematic adjacency (these ARE the local logistics layer that feeds Aeronautics cargo operations) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: the item silo is how you stage bulk goods for loading onto an airship; the inventory bridge connects the ship's storage to docking logistics — a player running cargo routes naturally builds with these to load/unload efficiently
- from: create_connected:kinetic_battery (rotation storage) | via: create (internal — stores energy for portable/aeronautics engines) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a kinetic battery buffers the rotation output feeding an Aeronautics portable engine — exactly the kind of "stored power for intermittent vehicle use" that the drivetrain supply chain needs
- from: create_connected:copycat_* family | via: any foreign block as skin | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: copycats are a cosmetic "apply any texture" tool — no existing motif covers "deco mod wears a foreign surface"; M-04 (Create recycles deco, lossy crush) doesn't fit a copycat that merely renders another block's texture. Aesthetic interest but no-motif reject.
- from: create_connected:fan_*_catalyst blocks | via: create fan-processing (blasting/haunting/freezing/smoking/splashing/withering) | to: Create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: fan catalysts are Create-internal depth (extending fan-processing methods already in create:haunting etc.) — this is a within-Create deepening, not a cross-system weave into a new anchor. M-19 requires a Create→magic edge; fan catalysts stay within Create. Intra-pillar, not a new weave.

REWORK: dossier wrote "leave" for 2nd anchor, but item_silo + kinetic_battery have genuine aeronautics utility (M-31 + M-24). The Create anchor is sound. Two accepts add aeronautics as a second anchor.

---

## packetfixer   [anchors: support (1)]

Power-read: Compatibility/network fix. Zero items, zero blocks, zero loot.

- LEAVE — genuine zero-content compat mod (network packet limit fix; no gameplay content). Support role is correct.

---

## snowyspirit   [anchors: survival (1)]

Power-read: 46 blocks, 65 items — sled (snow vehicle with chest/sack carry), ginger crop (c:crops/ginger, c:seeds/ginger), gingerbread building blocks, gumdrop/candy decor, string lights, gingerbread_golem. Serene Seasons winter integration. loot=yes. Dossier notes ginger as c:crops/ginger — it's already in extradelight's c:tags hit (extradelight mortar consumes c:crops/ginger). Seasonal food output is real.

Method-pull: ginger → extradelight:mortar (spice grinding, M-12); ginger → create:milling (grain-adjacent crop, M-12); sled → aeronautics/logistics thematic but no method; gingerbread golem → Occultism/Ars mob as ritual input (M-11); candy/cookie output → diet system (survival, M-26 consumption sink).

Dossier flagged M-09 "economy via gingerbread decor" — retired; reject. Dossier flagged "aeronautics/sled" as weak utility synergy — agree, no method.

- from: snowyspirit:ginger (c:crops/ginger) | via: extradelight:mortar | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling/grinding winter ginger into spice in the Mortar is the most natural use of the crop — it enters the food-processing chain at the spice stage, and since ginger only grows in winter, it drives seasonal harvesting behavior
- from: snowyspirit:ginger (winter-only crop) | via: seasonal input gate | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger grows (and can be wild-foraged) only in winter; a Create or cooking recipe that requires ground ginger is only satisfiable in-season — Serene Seasons pressure drives a winter-harvest window, exactly what M-16 is for
- from: snowyspirit:gingerbread_golem (a mob) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the gingerbread golem is a friendly/whimsical creature — feeding it to a dark-ritual spirit fire is a significant tone clash (a cozy holiday companion going into occult sacrifice); survives red-team only poorly. Reject on theme.
- from: snowyspirit:sled | via: thematic (winter logistics) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: sled is a snow terrain vehicle, not a Create Aeronautics contraption; no existing motif covers "winter ground transport as aeronautics logistics." The thematic adjacency is surface-level and no method exists to route through. No-motif reject; aeronautics arm is ships/planes, not sleds.
- from: snowyspirit:candy / gumdrop decor | via: Numismatics | to: economy | motif: M-09 (retired) | power: everyday | tone: clash (M-09 retired) | verdict: REJECT | reason: retired luxury-sell motif; decorative candy has no demand-gating mechanic.

REWORK: survival anchor is sound (winter seasonal content). Two accepts (M-12 + M-16) add Create as a second anchor.

---

## immersive_paintings   [anchors: support/decoration (1)]

Power-read: 4 items (painting, glow_painting, graffiti, glow_graffiti). Zero loot. Client-side painting creation; vanilla crafting mats only. No processing surface.

The dossier notes an Exposure compat addon (photograph → painting pipeline). That's interesting — but Exposure is in the pack and the compat is an *addon*, not built into immersive_paintings itself. No method to route through.

- from: immersive_paintings:painting / glow_painting | via: thematic adjacency to Exposure:photograph | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: an Exposure→ImmersivePaintings pipeline (photo becomes painting) is flavor, not a system anchor; no existing motif covers "convert photograph to decorative art." No-motif reject.
- LEAVE — decoration-expression mod with no coherent system anchor beyond its support role; zero loot, no foreign material flows. Even the Exposure compat doesn't create a loop node. Forcing an edge would be busywork.

---

## freefbible   [anchors: support/curated flavor (1)]

Power-read: 1 item (readable book), zero blocks, zero loot, zero recipe-types.

- LEAVE — genuine zero-content novelty mod (single inert readable item; no gameplay material to weave). Support/flavor role is the correct anchor.

---

## aeronautics   [anchors: aeronautics (1)]

Power-read: 141 blocks, 18 items — the aeronautics pillar's entire content layer (levitite, propeller bearings, gyroscopic bearings, hot-air burner+envelopes, Physics Assembler, portable engine, rope/docking connectors, dyeable tires). Made-by create:mixing, create:sequenced_assembly, create:deploying, create:crushing, create:filling, create:splashing, create:mechanical_crafting. Already deeply Create-routed (zinc/brass/andesite through Create methods). loot=yes. This is the pillar's own content mod — its 2nd-anchor potential is outbound from the levitite/propulsion layer.

Dossier already identified strong candidates; red-team each:

- from: aeronautics:levitite_blend → aeronautics:levitite (zinc-gated, create:mixing) | via: create:mixing + Numismatics player-minting | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite production requires zinc (a regional ore); a player who settles in a zinc-rich region becomes the server's lift-material supplier — minting levitite as a tradeable commodity whose price the market sets. Zinc scarcity makes levitite genuinely scarce, not crafted away trivially.
- from: aeronautics:levitite (in-world crystallization step — the blend-to-levitite code recipe) | via: KubeJS requiring Occultism/Ars catalyst adjacent | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the in-world crystallization of levitite (a floating mineral that defies gravity) requiring an arcane catalyst is thematically coherent — magical attunement helps the crystal form; ties aeronautics to the magic pillar without making magic mandatory for basics (the blend itself is Create)
- from: aeronautics adjustable_burner (burns fuel) | via: TFMG diesel fuel tag extension | to: create | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: extending the burner's fuel tag to include TFMG diesel makes the fuel-refinery output a direct aeronautics propulsion input — a refinery specialist fuels the fleet, closing the fuel supply loop between the TFMG industrial chain and airship operations
- from: simulated:rope_coupling / docking_connector (aeronautics logistics docking) | via: config/thematic | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: docking connectors at a Numismatics trading-post or MineColonies colony make airships the physical cargo layer of trade — bulk goods move between players via the docking/rope logistics rather than by player carrying
- from: offroad:tire / dyeable variants | via: trade (cosmetic cargo) | to: economy | motif: M-09 (retired) | power: everyday | tone: clash | verdict: REJECT | reason: "dyeable tires as cosmetic trade goods" is a bare M-09 luxury-sell link; M-09 is retired. No demand-gating mechanism.
- from: aeronautics:levitite (endgame flying-machine core) | via: create:sequenced_assembly as M-06 keystone | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the levitite+Physics Assembler combination is the sequenced-assembly capstone — the multi-step chain that defines the "fully automated airship construction" achievement tier; levitite is the endgame item whose production chain runs through Create's sequenced-assembly
- from: aeronautics borehead bearing (flying drill) → ores extracted | via: create:crushing (ore → crushed ore) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: the borehead bearing extracts ores in-flight, which are already processable by create:crushing (M-03 is already an established motif for any ore). This is not a new weave specific to aeronautics — it's the existing M-03 applied to what the borehead happens to produce. The weave is already covered; no new edge needed.

REWORK: aeronautics is the pillar spine — one anchor is expected and correct. The four accepts (M-08, M-10, M-13, M-06) open economy, magic, and Create as additional anchors. The Create de-facto anchor (confirmed by made-by chains) is now explicit via M-06 + M-13.

OK — existing aeronautics anchor is the intended pillar spine. New links above are the outbound weaves the pillar was missing.

---

## create_tweaked_controllers   [anchors: aeronautics (1)]

Power-read: 1 block (tweaked_lectern_controller), 21 items. Crafted from Create precision mechanism + electron tubes — already routes through Create parts (vanilla crafting only in the made-by, but inputs are Create parts). No registered recipe-types. loot=yes (but 1 block, 21 items likely the linked-controller variants). A control-surface device for contraptions.

Method-pull: The controller maps gamepad/keyboard → redstone frequencies for Create contraptions/vehicles. Its value is *control*, not material. There's no processing method to route through. The craft uses Create parts (precision mechanism, electron tubes) — that's an inbound Create weave, not an outbound one.

- from: create_tweaked_controllers:tweaked_lectern_controller (contraption control surface) | via: thematic (controls aeronautics vehicles) | to: create | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the lectern controller is the human-interface layer of the aeronautics drivetrain — mapping player input to vehicle control surfaces is exactly what M-24 (mechanical component → propulsion/control) targets; the controller is the "control" half of the drivetrain
- from: create_tweaked_controllers craft (uses Create precision mechanism) | via: create:sequenced_assembly (the precision mechanism is a sequenced-assembly output) | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is "mod's flagship item built in its own machine, gated on Create parts" — the controller IS already gated on Create parts (precision mechanism), so this is the existing inbound relationship, not a new weave. Documenting an already-existing edge, not a new system link. Reject as redundant.

REWORK: aeronautics anchor is correct (vehicle control device). The M-24 accept above adds Create as a second anchor and is the genuine new weave for this mod.

---

## sablecollisiondamage   [anchors: support (1)]

Power-read: Zero items, zero blocks, zero loot. Physics behavior hook on Sable collisions.

- from: sablecollisiondamage (collision damage on ship impact) | via: thematic/behavior | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: collision damage is a physics-realism behavior, not a combat-route supply chain — M-34 covers the supply side of combat (boss drops → trade), not a damage mechanic. No existing motif covers "ramming damage as a PvPvE mechanic." No-motif reject.
- LEAVE — genuine zero-content physics addon (behavior hook; no items, loot, or material graph). Support role is the correct anchor.

---

## fusion   [anchors: support (1)]

Power-read: Zero items, zero blocks, zero loot. Client rendering library for connected textures.

- LEAVE — genuine zero-content rendering library (texture model types for resource packs; no gameplay content). Support role is correct.

---

== CHUNK COMPLETE ==
