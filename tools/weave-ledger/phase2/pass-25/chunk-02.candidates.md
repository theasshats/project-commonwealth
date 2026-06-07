# Phase 2 candidates — chunk-02

## timm   [anchors: support/QoL (1)]
LEAVE — client UI only; no items, blocks, or methods. Zero content surface; nothing to weave.

## trashcans   [anchors: support/automation-QoL (1)]
- from: trashcans:ultimate_trash_can | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the ultimate void-all block earns its convenience — build it through Create's mechanical crafter so it costs real fabricated parts, not just a crafting table; keeps it from trivializing byproduct value too cheaply
- from: trashcans blocks (any) | via: generic-sellable | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
- REWORK: no existing connections to flag. OK — single anchor is accurate.

## createaddoncompatibility   [anchors: support/glue (1)]
LEAVE — zero items/blocks; pure tag-unification glue. It enables other weaves (keeps plastic/gearbox canonical) but is itself not a weave target. The single TFMG distillation recipe it adds is a fix, not a weave.

## ctl   [anchors: Create, aeronautics (2)]
OK — connections sound. Already at 2-pillar goal (Create sequenced_assembly + aeronautics/train lighting). No new edges needed.
- from: ctl:htlb_block | via: generic-sellable | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; train lights are an intermediate, not a finished luxury good

## citadel   [anchors: support/library (1)]
LEAVE — library/API, no player-facing content of its own. The items (debug, effect_item, icon_item, fancy_item) are dev tooling, not gameplay. Weaving dead dev items would be forced.

## l2library   [anchors: support/library (1)]
LEAVE — pure code library; 0 blocks, 0 items, no methods, nothing routable.

## gtmogs   [anchors: survival, economy (2)]
OK — connections sound. It IS the scarcity foundation (regional vein ore-gen) and feeds directly into the economy loop. The appropriate downstream weaves (M-03 ore-doubling, M-08 coin-from-scarcity) are on the consuming mods, not on this framework. No further edge needed here.
- from: gtmogs marker blocks | via: worldgen config as Create input | to: create | motif: no-motif | verdict: REJECT | reason: the markers are author tooling (dimension vein configs), not in-game materials; routing them into a recipe makes no sense

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — zero content surface; generic drop-merge behavior mod, no items or methods to route.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Create-package logistics delivered by autonomous flying couriers is a clean 2-pillar anchor (Create + aeronautics/logistics arm of economy).
- from: cmpackagecouriers:cardboard_plane | via: economy/logistics route | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the cardboard plane is a logistics vehicle, not a bounty/mob-drop trade; M-14 is combat→economy, not logistics; forcing the frame is structurally wrong. The aeronautics anchor already captures this mod's economy-logistics character.

## nochatreports   [anchors: support/privacy (1)]
LEAVE — no items, blocks, or methods; pure networking/chat-privacy layer.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice / oceansdelight:cooked_stuffed_squid | via: create:mixing or farmersdelight:cooking | to: survival→economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean cuisine is a coastal specialty — prepared seafood (elder guardian roll, fugu, stuffed squid) runs through a Create mixing or extra-delight process (brine/spice slurry) into a finished trade good that coastal specialists sell to landlocked players; scarcity of ocean drops makes it genuinely non-trivial
- from: oceansdelight:fugu_slice | via: ars_nouveau:enchanting_apparatus or occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: fugu's natural poison-risk chemistry (paralytic toxin) is a real-world magic-precursor archetype — fugu_slice as a reagent input to a poison/paralysis spell/ritual; the "dangerous coastal delicacy as alchemical ingredient" reads as obvious to any player
- from: oceansdelight:guardian (raw) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: clash | verdict: REJECT | reason: crushing an organic mob-drop into "ore-doubling" framing (M-03) is tonally wrong — M-03 is the ore doubling motif, not a food-processing route; tone clash + wrong motif
- from: oceansdelight dishes | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the M-12 ACCEPT above already captures the processing/trade-good angle more distinctively
- REWORK: existing survival anchor (via FD cooking/cutting) is sound but single-pillar — the two ACCEPTs above address the gap.

## accessories   [anchors: support (1)]
LEAVE — slot-API library; no items/blocks of its own. Wearables live in dependent mods.

## kubejs   [anchors: support/tooling (1)]
LEAVE — modpack scripting engine; it is the weaving tool, not a weave target.

## supermartijn642configlib   [anchors: support/library (1)]
LEAVE — pure config API library; no content.

## bettercombat   [anchors: support/combat-framework (1)]
LEAVE — behavior-only framework (JSON weapon movesets); no items, blocks, or routeable materials. Forcing a weave onto a combat-feel mod makes no sense; its value is underpinning magic/melee weapon play, not being a recipe node.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns ocean village | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: floating ocean trading villages are a natural coin-economy node — seed Numismatics coin pouches and trade-ledger items into the village chest loot tables so ocean explorers find early currency (coins as loot reward for finding a remote settlement, feeding the economy loop's distribution layer)
- from: tidal-towns ocean village | via: loot-seed | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: the village adds no mob drops of its own (vanilla-only blocks/mobs) so M-02 (mob-drop reagent sink) can't bind here — the village has vanilla villagers/guards, not a unique boss/drop to route
- REWORK: survival anchor is correct but the structure's exploration hook is underused — the economy loot-seed ACCEPT above gives it a second anchor.

## knightlib   [anchors: support/library (1)]
LEAVE — library for Knight Quest mods; Knight Quest is not in this pack, so the content items (great_chalice, grails, essences, homunculus) are inert. Weaving dead/unused items is a defect per the briefing guardrails.

## dummmmmmy   [anchors: support/QoL (1)]
LEAVE — single-item combat-test prop; no processing, no outputs, no pillar weave coherent.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising (method) | via: create_new_age:energising | to: magic | motif: M-17 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: the Energiser charges a magic focus/essence (e.g. irons_spellbooks arcane essence or ars_nouveau source gem) — electricity + rotation imbues a spell focus with accumulated charge, bridging the electric tier into magic gear depth; "charge your arcane focus in the generator room" reads as obvious in an industrial-magic pack
- from: create_new_age:corium (reactor waste) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: radioactive reactor slag (corium) is a potent arcane precursor — a hazardous alchemical input that an imbuing ritual refines into a high-tier magic reagent; endgame gate is thematically right (you need a running nuclear reactor before you unlock that spell tier)
- from: create_new_age:thorium_ore | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: thorium is a regional scarce ore (2 biome-modifiers); crushing gives a byproduct yield (experience nugget + ore-doubled output) before smelting, standard ore-depth loop — but thorium is notably rarer than iron so the reward ratio is appropriate
- from: create_new_age:advanced_motor | via: aeronautics engine intake | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the advanced electric motor is the obvious drivetrain upgrade for Aeronautics engines — a top-tier propulsion component that makes electric-powered ships distinctly faster/more capable than steam; fits the M-24 mechanical-component→drivetrain seam
- from: create_new_age energised outputs | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; energised items are interesting because of what they unlock, not because they're mintable
- REWORK: single Create anchor currently — the 4 ACCEPTs above add magic (×2), Create-depth, and aeronautics.

## foodeffecttooltips   [anchors: support/QoL (1)]
LEAVE — client tooltip renderer; no items, blocks, or methods to weave.

== CHUNK COMPLETE ==
