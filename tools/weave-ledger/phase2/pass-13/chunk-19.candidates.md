# Phase 2 candidates — chunk-19

## rightclickharvest   [anchors: support / QoL (1)]
- LEAVE — behavior-only mod; zero items/blocks/methods; no material surface to route through or weave into any pillar.

## jakes-build-tools-2.0.1.5   [anchors: QoL / building support (1)]
- from: minecraft:experience_flask_* | via: create:mixing (XP-bottle input) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: The experience flasks are builder-utility consumables, not a progression material. Routing them through a Create machine step is cosmetically weave-like but adds no meaningful depth — a player would ask "why does the XP flask need a mixer?" with no satisfying answer. Forced edge; dossier explicitly calls this out as not coherent.
- from: tool set (hammer/chisel/trowel) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: These are vanilla-cost consumable builder utilities (iron/diamond), not progression items. Gating builder convenience behind a mechanical crafter violates the "never gate basic/everyday components behind complex recipes" guardrail. The dossier itself notes this would be a forced edge.
- LEAVE — no coherent 2nd pillar. Pure builder QoL; nothing to refine, trade, or ritualise.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot / bronze_ingot / steel_ingot (c:ingots/*) | via: numismatics mint | to: economy | motif: M-08 | power: mid (bronze) / endgame (steel) | tone: ok | verdict: ACCEPT | hook: Tin is the pack's new scarce regional metal — smelting it into coin naturally drives specialization and trade; bronze and steel coins feel earned.
- from: create_ironworks:steel_plate / steel_ingot | via: aeronautics airframe/hull recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel plate as a structural hull ingredient for mid/high-tier Aeronautics airframes — a fabricated alloy that makes building a real warship cost real metallurgy.
- from: create_ironworks:bronze_ingot / bronze_plate | via: cbc_at munition assembly (cbc_at:ha_munition_assembly / rocket_assembly) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Autocannon barrels are already bronze (cbc_at names them `bronze_*_barrel`); routing bronze plate from Ironworks into the munition/weapon assembly chain is the natural supply-line — Ironworks becomes the armoury feeder for CBC-AT weapons on ships.
- from: create_ironworks:steel_ingot | via: occultism:ritual (steel as a binding-circle catalyst for higher-tier spirit summons) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Forged steel as a binding material for powerful spirits — iron isn't strong enough to hold an Afrit; steel is. A one-step ritual input, not a gated basic.
- OK — existing Create anchor is sound (all alloys born from create:mixing/pressing/crushing). No REWORK needed on existing connections.

## terralith   [anchors: survival / worldgen (1)]
- LEAVE — data-only worldgen overhaul; no items, no methods, no material surface. Its weave is architectural (other mods' biome-modifiers and ore-modifiers key off its biomes) not a recipe edge. Forcing a recipe connection to a biome mod with zero items would be incoherent.

## cbc_at   [anchors: Create, aeronautics (2)]
- from: cbc_at heavy-autocannon barrel / rocket pod breech | via: M-15 boss-key unlock (gate the heavy/rocket tier behind a boss drop or MineColonies colony unlock) | to: Create/survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Autocannon barrels are ship-killing hardware — gating the heavy tier behind a boss drop (e.g. Cataclysm Ender Dragon variant or Ignis drop) matches the DESIGN principle that complex Create tech unlocks via boss drops; a player who wants ship-killing guns has to fight for them first.
- from: cbc_at:ap_rocket_item / apds_item | via: occultism:spirit_fire (infuse a mundane warhead with spirit energy for a soul-fire variant munition) | to: magic | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: A spirit-fire-infused AP rocket whose detonation leaves a brief soul-fire patch — Occultism magic weaponized for aerial bombardment. Endgame only; the base AP munition stays vanilla-fabricated.
- REWORK: The dossier notes cbc_at already has 2 pillars (Create + aeronautics) and lists only a deepening suggestion. The existing anchor set is sound and the methods are correct. However, no explicit boss-key or magic tie exists yet — the two ACCEPT rows above add those. No existing connection needs reworking.

## necronomicon   [anchors: support / library (1)]
- LEAVE — pure code library (config/datagen/registry helpers); 0 blocks, 0 items, 0 recipe types. No content surface; genuine zero-content library. Leave as support dependency.

## corgilib   [anchors: support / library (1)]
- LEAVE — pure code library (loot/worldgen/datagen helpers); 0 blocks, 0 items. No content surface. Leave as support dependency.

## occultism   [anchors: magic (1)]
- from: occultism:silver_ingot (real silver, c:ingots/silver) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Real silver from Occultism's dimensional mines is the pack's scarce precious metal — minting it into coin makes the spirit-miner a meaningful economy driver; players running dimensional mineshafts become the silver supply.
- from: occultism:afrit_essence / djinni_essence / foliot_essence / marid_essence | via: ars_nouveau:imbuement (spirit essences as catalysts for imbuement tiers) | to: magic | motif: M-01 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: Spirit essences as power-tier catalysts for Ars imbuement — Occultism and Ars speak the same "arcane energy" language; a Djinni essence powering a Tier-3 imbuement is a player "of course" moment.
- from: occultism:iesnium_ingot | via: create:haunting (iesnium soul-fire transmutation — the otherworld metal passes through soul-fire and gains a spirit charge) | to: Create | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: Iesnium is already an otherworld metal with elemental resonance — running it through Create's haunting (soul-fire) to unlock an "iesnium soul-shard" or empowered form is coherent worldbuilding and ties Create's soul-fire process to Occultism's ore.
- from: mob drops (any c:tags mob drop) | via: occultism:spirit_fire → essences | to: organic/magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spirit fire as the universal mob-drop transmuter — every enemy that dies near a pentacle can contribute to the magic web. Already partially noted in the dossier; confirm as the canonical second-pillar route.
- from: occultism:spirit_trade (summoned merchant spirit) | via: numismatics coin as trade currency | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: A spirit-trader who accepts and pays in coin rather than arbitrary item barter — Occultism's otherworld commerce becomes part of the player economy. Tag provisional per M-21 status.
- OK — magic anchor is strong. The economy + Create sub-weaves are well-founded (M-08 silver, M-11 spirit-fire, M-18 miner as logistics). No existing connection needs REWORK; the dossier's candidates map cleanly to accepted motifs.

## cmparallelpipes   [anchors: Create (1)]
- LEAVE — single utility tool (pipe wrench) for Create fluid networks; no material output, no foreign-material surface, no processing method. Forcing a coin/recipe edge onto a plumbing wrench would be noise. Confirmed support-tier Create tool.

## steves_lava_chicken_music_disc   [anchors: support / flavor (1)]
- LEAVE — single music disc; zero content surface beyond a jukebox item. A forced coin or ritual edge would be parody, not design.

== CHUNK COMPLETE ==
