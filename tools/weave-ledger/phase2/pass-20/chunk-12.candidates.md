# Phase 2 candidates — chunk-12

## ritchiesprojectilelib   [anchors: support (1)]
- LEAVE — genuine zero-content code library; projectile/ballistics API consumed by Create Big Cannons, no items, no recipe types, nothing to weave.

## ohthetreesyoullgrow   [anchors: support/worldgen (1)]
- LEAVE — zero blocks/items, pure sapling-growth framework for dependent tree mods; no player-facing surface to route through any method.

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — client-only movement-feel tweak; no items, no recipe types, no material flows. Forcing any edge would be contrived.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- OK — connections sound. The Mechanical Chisel is a genuine Create kinetic method (earns the Create anchor) and it routes an entire decoration palette through that method. Already at the 2-pillar goal. No new edge needed; no REWORK candidates.

## patchouli   [anchors: support/docs (1)]
- LEAVE — library for in-game guide books; the only items are colored book covers with no material role. No recipe type, no processing method, no material sink. All gameplay value is in dependent mods (Ars, Occultism) that already carry their own anchors.

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies (processed strain outputs) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok — luxury consumables are the canonical sellable good; cannabis edibles as a niche trade commodity is on-brand for a humor-friendly pack | verdict: ACCEPT | hook: the strain farm has its own dealer villager; connecting refined gummies to coin prices makes the narco-economy a real revenue stream, not a dead-end island.
- from: smokeleafindustries FE generator (burns burnable inputs) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: mid | tone: ok — industrial FE generator feeding Create energy loop is coherent; no theme clash | verdict: ACCEPT | hook: run a Create rotational source into the smokeleaf machines so the weed-tech farm joins the Create spine instead of being an isolated FE island.
- from: raw hemp buds / raw weed | via: create:milling or smokeleafindustries:manual_grinder | to: Create | motif: M-12 | power: everyday | tone: ok — processing a farm crop through Create grinding is natural; the manual-grinder entry tier already mirrors this | verdict: REJECT | reason: smokeleafindustries already registers its own grinder/manual_grinder as the canonical processing path; routing the same material through create:milling is redundant and adds no depth — prefer M-17 FE bridge as the genuine Create seam.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion items (optical_sensor, quantum_drive, wolf modules) | via: any magic/occult method | to: magic | motif: no-motif | power: endgame | tone: clash — a clockwork robot wolf and eldritch/arcane magic are tonally opposite; no clear reagent overlap | verdict: REJECT | reason: theme clash + no motif fit; the companion is a personal combat reward gated behind Create, not an economy or magic node.
- from: createmechanicalcompanion:loot (loot=yes, spawns illager engineer + potato cannon illager) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok — the engineer-illager variant is a combat target; seeding coin/bounty into its loot ties combat output to the economy | verdict: ACCEPT | hook: defeating the mechanical wolf's illager engineer variant pays out coin, giving the Create combat-pet track a tangible economy reward.
- REWORK: the single Create anchor is solid (sequenced assembly chain is deep). The loot=yes flag was unreviewed — worth adding a bounty/coin seed so the combat drop loop is closed.

## betterendisland   [anchors: survival (1)]
- LEAVE — pure structural worldgen overhaul of the End island; no items, no loot tables (loot=no), no recipe types. Nothing to weave.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled decoration variants | via: rechiseledcreate Mechanical Chisel (already in pack) | to: Create | motif: M-04 | power: everyday | tone: ok — kinetic chiseling of vanilla-material deco blocks is exactly what rechiseledcreate adds; the two mods form a pair | verdict: ACCEPT | hook: the Mechanical Chisel in rechiseledcreate runs all 3,600+ rechiseled variants on Create power, pulling the entire decoration palette into the Create spine.
- from: rechiseled stone/wood deco variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — lossy recycle of deco blocks back to raw/cobble is the established M-04 pattern | verdict: REJECT | reason: M-04 is already expressed by rechiseledcreate (which is the explicit Create bridge for rechiseled); adding a separate crushing recipe would duplicate intent. One M-04 expression per palette is enough.

## create_compressed   [anchors: Create (1)]
- LEAVE — Create-internal QoL storage layer; all its content is Create's own intermediates (crushed ores, sheets, flour) compressed to blocks and back. No foreign material to weave; no 2nd-anchor surface that wouldn't be artificial.

## moblassos   [anchors: survival (1)]
- from: moblassos (mob-transport capability) | via: no recipe method — utility synergy only | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: "carry a mob aboard a ship" is a thematic synergy not a method-routed weave; no motif covers utility-synergy-only links, and no recipe/loot/config change is needed to realize it — it already works by construction.
- LEAVE — item-utility mod (mob capture → relocate); no material flows, no processing surface, no loot table. The aeronautics synergy above is noted but rejected for lack of a motif. Genuine 2nd anchor cannot be forced.

## bettermodsbutton   [anchors: support/UI (1)]
- LEAVE — client UI mod adding a pause-screen mods button; zero items, zero content, pure UI convenience. Nothing to weave.

## searchables   [anchors: support/UI-library (1)]
- LEAVE — client-side search/autocomplete API; zero items, zero recipe types, consumed only by other mods' UI screens. Nothing to weave.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single-item combat-testing prop (target dummy); the item's only function is to display damage numbers when hit. No material flow, no processing surface, forcing any edge would be contrived.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- from: minecraft:experience_flask_* (XP storage/release items, ships under the minecraft ns) | via: create:haunting or occultism:spirit_fire | to: magic | motif: M-19 | power: mid | tone: ok — XP-flask → soul/spirit transmutation is coherent (soul fire transmutes XP-adjacent items in vanilla; haunting is Create's soul-fire path) | verdict: REJECT | reason: the experience_flask items are registered under the `minecraft:` namespace (datapack-style), which makes them ambiguous targets for recipe injection; and the XP-flask is a builder utility, not a magic-progression item — pulling it through Create haunting / spirit_fire is a surface-level coincidence, not a loop-advancing link. No motif fits cleanly (M-19 is for items already in the Create→occult pipeline).
- LEAVE — build-assist tools (hammer/chisel/trowel/magnet/ladder/tape-measure); vanilla-mat crafting, no processing surface, no foreign-material sink. The experience_flask edge above explored and rejected. No coherent 2nd anchor.

## occultism   [anchors: magic (1)]
- from: occultism:spirit_trade (summoned merchant spirit) | via: occultism:spirit_trade → numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — a bound spirit trader dealing in otherworld goods that convert to coin is coherent; eldritch goods-for-coin is exactly the luxury-good→economy seam | verdict: ACCEPT | hook: bind a Djinni spirit as a shop; otherworld drops (iesnium dust, datura, essences) flow through the spirit market and cash out as coin, threading magic into the economy loop.
- from: foreign mob drops / boss materials | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid–endgame | tone: ok — spirit_fire transmutes drops into essences; this is the canonical use and the primary established weave vector | verdict: ACCEPT | hook: burn enemy drops (from invasion mods, bosses, exotic biome mobs) in an Occultism ritual bowl to yield afrit/djinni/marid essences — mob pressure converts directly into magic fuel.
- from: occultism:crushing | via: occultism:crushing (ore doubling) | to: Create | motif: M-03 | power: everyday | tone: ok — crushing is mechanically identical to Create crushing but runs on Djinni-bound spirit power; dual ore-doubling paths (Create + Occultism) serve different specializations | verdict: ACCEPT | hook: an Occultist doubles ore through spirit-crushing while a Create engineer uses mechanical crushing — each path is valid, keeping the production pillar non-monopolistic.
- from: occultism:dimensional_mineshaft (passive spirit mining) | via: occultism:miner | to: economy | motif: M-18 | power: endgame | tone: ok — a summoned Djinni mines a void dimension passively; that ore output is tradeable scarcity — the magic pillar becomes an acquisition/logistics provider | verdict: ACCEPT | hook: bind a Djinni Mineshaft to pull iesnium and scarce ores from the void; the magic specialist becomes the server's passive ore broker, feeding the economy without a single pickaxe swing.
- REWORK: existing anchors — magic is the only listed anchor; Create is noted as a "de facto" touch but not formalized. The M-03 and M-18 candidates above, if accepted, would add economy and Create as formal 2nd/3rd anchors. The dossier's 2nd-anchor candidates are all strong and align with established motifs — no arbitrary existing connections to REWORK, but the anchor count should be updated once these are authored.

## towntalk   [anchors: support/flavor (1)]
- LEAVE — audio-only flavor addon for MineColonies (colonist voice barks); no items, no blocks, no recipe types, no gameplay mechanics. Rides on MineColonies which carries the real colony/economy weave. Nothing to weave independently.

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs tile/chair blocks (andesite/asurine/crimsite/deepslate/etc. tile sets) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — deco tiles crushing back to crushed-stone is exactly the M-04 "Create recycles deco" pattern; lossy, a reward for using deco not a trap | verdict: ACCEPT | hook: over-decorated tiles can be fed into a crusher to recover crushed stone, tightening the deco→Create loop and discouraging block-waste.
- OK — existing Create + survival connections are sound. The chain-drive kinetics and nixie displays anchor it to Create; the broad decoration palette earns a survival/building anchor. The M-04 candidate above reinforces rather than replaces.

## aeronautics   [anchors: aeronautics (1) — Create is de-facto, unformalized]
- from: levitite (bulk zinc-gated lift material, jar-confirmed) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — zinc+end-stone scarcity makes levitite a natural traded commodity; a mass-production specialist supplies the server's airship fleet | verdict: ACCEPT | hook: levitite is the server's lift commodity — produce it at scale and sell it to fellow builders who can't process enough zinc; the aeronautics pillar generates a genuine economy pull.
- from: levitite blend crystallization (in-world code step, zinc+end-stone+water) | via: KubeJS catalyst requirement (add Occultism/Ars reagent adjacent during crystallization) | to: magic | motif: M-10 | power: mid | tone: ok — a magical catalyst tuning the crystallization seam is coherent (lift material shaped by arcane force) | verdict: ACCEPT | hook: the levitite crystallization step requires an Ars source gem or Occultism essence placed adjacent, threading the aeronautics supply chain through the magic pillar once per batch.
- from: adjustable hot-air burner (burns furnace fuel) | via: config-tie / fuel tag extension to tfmg:diesel | to: Create/economy | motif: M-13 | power: everyday | tone: ok — burner already takes coal/charcoal; extending the fuel tag to TFMG diesel is a tag-JSON change, no KubeJS needed, and ties the aeronautics fleet to the refining economy | verdict: ACCEPT | hook: diesel-fueled hot-air burners mean the TFMG refinery matters to every airship pilot, not just Create engineers.
- from: levitite (endgame lift) | via: loot-seed — drop probability or recipe via boss drop gate | to: survival (boss pressure) | motif: M-15 | power: endgame | tone: ok — gating higher-tier pearlescent levitite behind a boss drop is the M-15 pattern (boss drop as recipe input) | verdict: REJECT | reason: the dossier notes the pearlescent/alloy tier recipe is code-only and JEI-pending; gating an item whose recipe chain is unconfirmed is premature — revisit after JEI verification.
- from: rope/docking connector (aeronautics logistics layer) | via: config — Numismatics trading post with a docking station adjacent | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); and a config-only "trading post near a dock" is a worldbuilding suggestion, not a weaveable method — no recipe/loot/tag change is implied. Better logged as a server-setup recommendation than a Phase-3 authoring task.
- REWORK: aeronautics is listed as 1 anchor; Create is noted as a "de facto" second but not formalized. All four accepted candidates above add economy (×2) and magic anchors. The M-13/fuel seam and M-24 inbound (sequenced-assembly portable engine) effectively add Create as a formal anchor too — anchor count should be updated to aeronautics+Create+economy+magic once authored.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok — a boss drop from a dark-mystical raider faction is a natural arcane reagent; the Invoker is the mod's flagship boss, so gating a high-tier imbuement behind it is appropriate depth | verdict: ACCEPT | hook: the Invoker drops a Hallowed Gem; bring it to an Ars Nouveau apparatus or an Occultism ritual circle to unlock an over-cap enchantment catalyst — the illager boss becomes a magic-pillar milestone.
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — illusionary dust transmuting into a spirit essence through spirit fire is coherent; dust → spirit is a natural alchemical metaphor | verdict: ACCEPT | hook: toss illusionary dust into the Occultism spirit-fire bowl and draw out a Djinni essence — raider loot feeds the summoning circle.
- from: illagerinvasion:platinum_chunk (rare Invoker-adjacent drop) | via: numismatics sell / bounty board | to: economy | motif: M-08 | power: mid | tone: ok — a scarce metal chunk from a boss is exactly the processed-scarcity→coin pattern; platinum is already named as a premium metal | verdict: ACCEPT | hook: mint platinum chunks into high-denomination coin via a Create press + Numismatics mint, making the Invoker raid payoff tangible in the economy.
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok — ore-doubling a boss-adjacent chunk via crushing is the standard M-03 treatment | verdict: REJECT | reason: platinum_chunk is a raid boss drop, not a regular ore — routing it through standard ore-doubling diminishes its boss-drop identity and duplicates what M-08 (mint to coin) already does better. One connection per material; M-08 is the stronger and more loop-advancing link.
- REWORK: existing survival anchor is the only one; all three accepted candidates above add magic (×2) and economy anchors. No arbitrary existing connections to correct — the mod was correctly assessed as 1-anchor; the weave candidates are genuine additions.

== CHUNK COMPLETE ==
