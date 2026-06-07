# Phase 2 candidates — chunk-13

## cbc_at   [anchors: create, aeronautics (2)]
- REWORK: existing connections sound — Create-machined munitions arming Aeronautics ships is a coherent loop node; no arbitrary edges found.
- from: cbc_at boss/loot drop (rocket_pod/heavy_autocannon tier) | via: KubeJS gating — boss-drop input to heavy barrel assembly | to: survival (scarcity/progression) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heaviest autocannon barrel requires a drop from a major boss — you can't just machine it, you have to earn it
- from: cbc_at:ap_rocket_item (ammo supply) | via: emergent trade — combat specialist farms/produces rounds, non-combat players buy them | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a munitions specialist runs the ammo line; everyone else on the server is their customer before a raid
- from: cbc_at heavy-tier munition assembly | via: MineColonies research (unlock recipe) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy munitions schematics are unlocked via MineColonies military research, not just crafted blind
- from: cbc_at munitions as bulk consumable | via: aeronautics cargo — shipping crates of rounds by airship to forward bases | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a ship's ammo supply is heavy enough that you haul it by airship, not by hand
- REJECT: bare sell link (mint munitions → coin) — M-09 retired; ambient endpoint only, no demand-gate mechanism. REJECT reason: player-run economy rule; "sellable" is ambient.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot | via: create:crushing → sheet/nugget byproduct, then create:pressing for Ancient Metal Plate | to: create | motif: M-03 | power: endgame | tone: ok | verdict: ACCEPT | hook: the alien metal from a dungeon boss runs through the mill and press like any other material — it's just rarer and much more dangerous to obtain
- from: cataclysm:ancient_metal_ingot (as a boss-key gate) | via: KubeJS — ancient metal is a required input in a sequenced-assembly recipe for a high-tier Create machine | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the boss's metal is the keystone: without killing the Ancient Remnant, the highest-tier automation stays locked
- from: cataclysm:witherite_ingot / cursium drop | via: occultism:spirit_fire transmutation → spirit essence | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the demonic residue in Witherite is exactly the kind of raw material a spirit fire would render into occult essence
- from: cataclysm boss drops (scarce, region-locked by dungeon presence) | via: emergent trade — combat specialist sells boss mats to tech/magic players | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: solo players specialize in raiding; the rest of the server buys the materials they can't survive to collect
- REJECT: cataclysm:amethyst_crab_meat via ars_nouveau:imbuement — thematic clash; a raw crab meat chunk flowing through an arcane infusion apparatus has no sensible alchemical interpretation. REJECT reason: tone clash.
- REJECT: M-08 (ancient metal → coin) — ancient metal is a boss-gated structural material, not a mint feedstock; pressing it into coins would drain a progression-critical resource. REJECT reason: balance/wrong use of the material.

## cloth_config   [anchors: support (library)]
- LEAVE — pure config-screen API library; no items, no methods, no loot. Nothing to weave.

## meadow   [anchors: survival (1)]
- from: meadow:alpine_salt | via: create:milling → salt dust (usable as a flavoring/preservative input in Create cooking chains) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the alpine salt ore goes through a millstone and the dust feeds every Create mixing recipe that calls for a seasoning
- from: meadow:cheese_wheel (cured, multi-step dairy product) | via: meadow:cheese maturing already in place; seeded as a trade commodity that non-dairy-biome players must import | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese only comes from alpine biomes — players elsewhere trade for it rather than set up their own alpine dairy run
- from: meadow:chambray_wool (felted textile) | via: create:pressing → felt sheet as a crafting intermediate (acoustic/thermal insulation layer in a machine recipe) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: felted wool presses into a panel that pads a machine housing — a natural industrial textile use
- REJECT: meadow:cheese_wheel → Numismatics coin (M-08 luxury mint) — cheese is not a metal; the motif requires a scarce regional metal → Create-processed → minted. REJECT reason: M-08 is player-minted metallic currency, cheese doesn't fit the mint pathway.
- REJECT: M-09 (cheese as luxury sellable) — M-09 retired; ambient endpoint. REJECT reason: retired motif.
- REWORK: dossier candidate "economy via Numismatics bounties/trade [M-09]" is retired — re-express as M-30 regional-scarcity demand gate (accepted above) or M-26 consumption sink. Flag for dossier update.

## create_ultimate_factory   [anchors: create (1)]
- LEAVE — pure recipe datapack with no items/blocks of its own; deepens Create processing but has no material surface to bridge to a second pillar. A second anchor would require inventing items that don't exist here.

## knightlib   [anchors: support (library)]
- LEAVE — dependency library for Knight Quest, which is not in the pack; the chalice/grail/essence content is inert without its dependent mod. Weaving dead items is a forced edge.

## fusion   [anchors: support (client/library)]
- LEAVE — texture rendering library; no items, no loot, no methods. Nothing to weave.

## alcohol_industry   [anchors: create, survival (2)]
- OK — connections sound (Create-driven processing → drinkable consumables is a coherent two-anchor loop node).
- from: alcohol_industry finished spirits (beer/vodka/whiskey/tequila) as repeating consumables | via: player consumption — spirits are drunk for effects and must be continuously restocked | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a tavern keeper keeps the distillery running because the buffs wear off and players keep coming back
- from: alcohol_industry:whiskey / tequila (regional-flavor spirit) | via: emergent trade — regional grain/fermentable scarcity means not every player can source every spirit | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tequila needs agave (region-locked crop); the distillery player trades it to everyone else
- REJECT: alcohol_industry → M-35 (maturation/aging) — the mod's boiler is a heat-processing step, not a passive aging mechanic; the motif is for time-based maturing (vinery/create_cheese style). REJECT reason: wrong motif; the method is active heat-processing, not passive aging.
- REWORK: dossier candidate "economy via Numismatics [M-09 luxury→coin]" — M-09 retired. Re-express as M-26 consumption or M-30 scarcity demand gate (accepted above). Flag for dossier update.

## supplementaries   [anchors: create, survival (2)]
- OK — connections sound (already woven through create:haunting/mixing/splashing and farmersdelight:cutting; deeply cross-connected as a connector mod).
- from: supplementaries:flax crop (c:crops/flax) | via: create:milling → flax fiber dust, then create:mixing → linen cloth intermediate feeding rope or textile recipes | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax goes through the mill and mixer to produce the fibers a Create rope machine needs — a natural industrial textile chain
- REJECT: supplementaries:safe / jars as economy nodes — "sold at a shop" is ambient endpoint; no demand-gate mechanism. REJECT reason: M-09 retired; bare sell link.

## blood_n_particles_datapack   [anchors: support (cosmetic)]
- LEAVE — cosmetic particle-effect mod; no real items, no loot table with collectable drops, no methods. Nothing to weave.

## wits   [anchors: support (utility)]
- LEAVE — server-side /wits debug command; no items, no loot, no methods. Nothing to weave.

## betterbiomereblend   [anchors: support (client/perf)]
- LEAVE — client render-performance mod; no items, no methods. Nothing to weave.

## bundle_recipe   [anchors: support (QoL)]
- LEAVE — pure vanilla-parity recipe datapack re-enabling bundles (leather + string); no new items or methods, no pillar material to bridge.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure overhaul of the End island with no items, no loot tables, no methods. Nothing to weave. (The mod makes the dragon fight more spectacular but adds no material surface.)

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure compat-patch library that makes foreign mods behave on Aeronautics ships; no items, no methods, no loot. Required per CLAUDE.md but not a weave candidate.

## occultism   [anchors: magic (1)]
- from: occultism:spirit_fire / :ritual (prime foreign-material sinks) | via: cataclysm boss drops → spirit_fire → afrit/djinni essence | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the corrupted metals from dungeon bosses are exactly what spirit fire renders into otherworld essence — the demonic residue finds its natural home
- from: occultism:crushing (ore-doubling) | via: parallel ore-doubling path alongside create:crushing; route any pack ore through occultism:crushing for a magic-cost ore doubler | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the spirit crusher doubles your ore yield but costs demonic ritual setup — a magic-route alternative to the machine-room crusher
- from: occultism:dimensional_mineshaft (passive ore logistics via Djinni) | via: M-18 summoned-spirit logistics — bound Djinni mines a void dimension and delivers ore to a chest | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic specialist runs a Djinni mine as a service for the server — they provide ore streams nobody else can, selling the logistics as a specialization
- from: occultism:silver_ingot (real c:ingots/silver, region-locked ore) | via: regional scarcity — silver ore only in certain areas forces cross-server trade for occultism recipes that need it | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the only real silver in the pack comes from occultism's ore; everyone building silver-requiring recipes must trade for it
- from: occultism:spirit_trade (summoned trader) | via: player-economy integration — the spirit merchant trades otherworld goods players can't obtain otherwise, creating a supply the magic specialist sells | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: only a magic specialist can summon the spirit trader; everyone else is their customer for otherworld materials
- REJECT: occultism spirit_trade → M-09 (NPC coin faucet) — M-09 retired; bare sell-to-NPC is not a weave. REJECT reason: retired motif; contradicts player-run economy ruling.
- REWORK: dossier candidate "economy via occultism:spirit_trade — M-09/M-02" — M-09 retired. Re-express as M-33 service-for-hire (accepted above). Flag for dossier update.

## dragonlib   [anchors: support (library)]
- LEAVE — code library / developer framework; the lone dragonlib:dragon block is a dev test artifact. No player-facing items or methods to weave.

## createadditionallogistics   [anchors: create, aeronautics (2)]
- OK — connections sound (kinetics infrastructure for Create + seats enabling Stock Keeper/train logistics for the aeronautics/transport pillar is a coherent two-anchor node; dossier notes no new edge needed).

## architectury   [anchors: support (library)]
- LEAVE — cross-platform API library; no items, no methods, no loot. Nothing to weave.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — YUNG's mineshaft structure overhaul; no own items or loot tables (uses vanilla mineshaft loot). No material surface to bridge. (It serves the scarce-ore mining loop atmospherically but offers no hook.)

== CHUNK COMPLETE ==
