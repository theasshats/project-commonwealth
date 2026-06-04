# Phase 2 candidates — chunk-21

## formationsnether   [anchors: survival (1)]
- from: nether structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: ruined nether altars drop scorched coin fragments — minting requires the forge, so exploring pays out proportionally to the danger
- from: nether structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sanctuaries hold reagent caches (soul embers, spirit essences) — the Nether was always where the arcane lingered
- from: nether structure loot | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: nether castle keeps a rare engineering blueprint/boss-key component that gates a Create deepslate machine tier — you raid the ruin to unlock the machine
- from: nether structure loot | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards offer contracts for Formations-Nether altar exploration rewards — combat + exploration feeds coin
- from: formationsnether structures | via: loot-seed | to: aeronautics | motif: M-23 | power: mid | tone: clash | verdict: REJECT | reason: nether ruin aesthetics and airship hull material have no plausible narrative bridge; a forced drop with no thematic grounding

## sereneseasons   [anchors: survival (1)]
- from: season_sensor redstone output | via: config/worldgen | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the season_sensor feeds a Create gearshift — automated farms swap crop routing by season without a player touch; the machine reads the world's calendar
- from: out-of-season crop scarcity | via: trade (numismatics sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crop grown off-season under greenhouse glass is rarer and sells for premium — the calendar creates a natural commodity market without any forced mechanic
- from: season-gated crop fertility | via: config tie | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Ars Nouveau reagent crops (sourceberry or a configured analog) only reach full potency in spring — the ritual supply line breathes with the seasons
- from: seasonal snowmelt/rain patterns | via: worldgen/event gating | to: Create | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: water-source-rate variation is not directly connectable to a Create processing recipe; no concrete delivery method exists without writing a custom mechanic — no-motif-delivery
REWORK: no existing connections flagged — mod is 1-pillar; candidates above address that.

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs tile/chair/deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a room of mismatched andesite chairs can be fed back to the crusher for crushed-stone + an XP nugget — decoration has a dignified exit
- from: bits_n_bobs:brass_lamp | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: lamp is already crafted; a deploy-application upgrade on top would need a clear upgrade output — nothing distinct to apply *to* a lamp; forced
- from: bits_n_bobs:chain_pulley | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Aeronautics rigging and winch assemblies naturally call for a chain-pulley component — the chain-drive mechanism is exactly what a control-surface linkage needs
OK — connections are sound (Create + survival already achieved); M-04 tightens the loop, M-24 extends to aeronautics cleanly.

## jakes-build-tools-2.0.1.5   [anchors: QoL/building (1)]
- LEAVE — pure builder-convenience datapack (hammer/chisel/trowel/tape measure/hardhat); items are consumable or behavior-only utilities with no processing surface. loot=no. No coherent 2nd-pillar edge exists without forcing a thematic non-sequitur. Gating a trowel behind a Create recipe (M-05) would be arbitrary and punitive for a builder convenience tool.

## platform   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, no loot). Biome-modifier in digest is the framework's own registration hook, not player content. Pure infrastructure.

## invtweaksemuforipn   [anchors: client QoL/compat (1)]
- LEAVE — pure client-side InvTweaks API emulation shim (0 blocks, 0 items, no loot). No material surface, no world content. Genuine zero-content behavior/compat layer.

## everycomp   [anchors: support/decoration compat (1)]
- LEAVE — runtime cross-mod wood-variant generator; 0 blocks registered under its own namespace (host mods own the outputs), 1 creative-tab item. Any weave belongs on the host mods (Create wood shapes, Macaw doors, etc.), not on the generator. Correct per dossier.

## mutantszombies   [anchors: survival (1)]
- from: mutant zombie variants | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards post contracts for mutant-variant kills — these tougher zombies are a distinct threat tier that earns coin proportionally; combat danger translates to income
- from: mutant zombie variants | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: add a rare drop (mutated flesh / biotic reagent) to the mutant brute/rotten mutant loot tables — Occultism spirit-fire or Ars imbuement sinks a "corrupted organic" that only the dangerous variant yields
- from: mutant zombie variants | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: clash | verdict: REJECT | reason: zombie variants are not thematically a gate to engineering/mechanical progression; a boss-key to a Create machine from zombie loot would feel arbitrary and tone-clashing (M-15 caveats "must stay thematically sensible")
Note: loot=no in digest — any M-02/M-14 delivery requires *adding* a loot table to these mobs as a Phase-3 datapack action; that's valid but must be noted.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — sleep-overlay and well-rested buff mechanic; 0 blocks, 0 items, no loot. The well-rested effect is a pure config-driven status-effect system with no material join key. Pairing with Cold Sweat/Serene Seasons is thematic but not a pillar connection (they share a survival pillar already). A forced economy edge ("sleep for coin") would require authoring a custom event that doesn't exist in any registered method.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising method | via: recipe (create_new_age:energising) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: a raw arcane focus or Ars source crystal is run through the Energiser to produce a fully-charged variant — electricity "overcharges" the enchantment, bridging the electric tier into magic gear
- from: create_new_age:thorium_ore (regional scarce ore) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: thorium is a rare regional find; crushed → processed ingot → minted as a high-denomination coin — the nuclear fuel supply line routes through the economy
- from: create_new_age:corium (reactor waste product) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: corium is a dangerous radioactive melt — spirit-fire transmutes it into a volatile occult essence (the arcane thrives in the aftermath of nuclear heat); waste becomes reagent
- from: create_new_age:energising method | via: recipe (create_new_age:energising) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Aeronautics advanced electric motors and control surfaces require an energised copper coil as a component — electricity is the high-tier drivetrain, not just a power source
- from: create_new_age:energising method | via: recipe | to: magic | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is sequenced-assembly depth (multi-stage Create chain); energising is a single-step method — using it as an M-06 keystone misidentifies the motif; the correct motif is M-17 (already accepted above) or M-05 native-method gating, not M-06
- from: create_new_age:fluxuated_magnetite | via: create_new_age:energising | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a magnetised alloy is a natural compass/gyroscope material; Aeronautics navigation systems call for an energised magnetite core — the electric sub-pillar earns its place in ship-building
REWORK: existing dossier candidates are sound but under-specify delivery — the energising method is the key connective surface and should be the explicit delivery for every magic/aeronautics link, not just a generic "gated through the Energiser."

== CHUNK COMPLETE ==
