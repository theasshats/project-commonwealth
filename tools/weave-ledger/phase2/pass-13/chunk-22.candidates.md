# Phase 2 candidates — chunk-22

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — pure client UI utility (transient ping markers only); zero items, zero methods, no material surface to route through any pillar.

## mousetweaks   [anchors: support/QoL-client (1)]
- LEAVE — client-only inventory input-handling tweak; no items, no methods, no material outputs. Weaving a UI mod is a forced edge by definition.

## zombiemoon   [anchors: survival (1)]
- from: (mob drops — vanilla rotten flesh / no unique reagent) | via: `occultism:ritual` | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: zombiemoon adds no unique drop whatsoever (0 items in jar; uses vanilla rotten flesh). M-02 requires a distinct drop to give a use to — routing vanilla rotten flesh here is not a zombiemoon weave, it's a vanilla weave. No coherent material surface exists.
- from: (mob spawn threat) | via: `bountiful` bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: a bounty targeting "kill a Zombie Brute" is mechanically possible but the mod exposes no item id — the brute is an entity subtype with vanilla drops. A bounty board can't distinguish a zombiemoon brute kill from a vanilla zombie kill without a unique drop or advancement. Forced edge.
- LEAVE — no unique items, no methods; its pillar contribution is survival difficulty only. One coherent pillar is correct for a purely-mob-variant mod with zero items.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single crafted prop (target_dummy) that is placed to absorb hits and display numbers; no method, no resource output, no processing surface. Its only "tie" to magic would be "you can test spell damage on it," which is a use-case description, not a weave. Forcing a recipe route is contrived.

## shulkerboxtooltip   [anchors: support/QoL-client (1)]
- LEAVE — pure client-side tooltip renderer; no items, no methods, no materials. Nothing to weave.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — client audio notification on load; no items, no methods, no materials. Nothing to weave.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. Already at 2-pillar goal (Create spine + broad deco/survival). Existing weave: its items are MADE-BY `create:item_application` + `create:splashing`, correctly anchoring it in Create.
- REWORK: no rework needed on existing connections — both are Create-native methods, coherent with the mod's identity as a Create aesthetic addon.
- from: bits_n_bobs tile/chair/girder deco blocks | via: `create:crushing` | to: Create (recycle loop) | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Smash a tile wall in a crusher and get crushed andesite back — your deco investment isn't a dead end; the Create loop stays closed. Lossy (XP nugget byproduct), so no free round-trip.

## create_enchantment_industry   [anchors: Create (1)]
- from: `create_enchantment_industry:experience_bucket` (liquid XP) | via: `occultism:ritual` | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals consume XP; piping liquid XP from the Blaze Enchanter directly into a ritual basin is the obvious "the factory feeds the circle" moment — industrial enchanting bridges to arcane practice.
- from: `create_enchantment_industry:experience_bucket` (liquid XP) | via: `ars_nouveau:imbuement` | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP as imbuement fuel — the enchanting factory makes Ars infusion cheaper at scale; a tank of XP is the industrial wizard's reagent stockpile.
- from: `create_enchantment_industry:mechanical_grindstone` output (stripped-enchant residue / liquid XP) | via: `irons_spellbooks:alchemist_cauldron_brew` | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Disenchanted residue distilled in the alchemist's cauldron produces a spell-grade extract — the iron's spellbooks side of the XP economy. Three magic connections feel like one too many; this is the weakest.
- from: liquid XP as Occultism XP source | via: `occultism:ritual` | to: magic | motif: M-10 | power: mid | tone: clash (slight) | verdict: REJECT | reason: M-10 and M-11 already cover this angle; three separate liquid-XP→magic edges dilute rather than strengthen. Keep the two cleanest (M-11 ritual + M-10 imbuement). Iron's cauldron is the third and weakest — reject.
- REWORK: existing anchor is Create (1 pillar). No existing cross-pillar connections to rework — the issue is under-connection, not bad connections. The magic weaves above add the needed 2nd pillar.

## sounds   [anchors: support/client-polish (1)]
- LEAVE — 170+ SFX additions, client-only, no items/blocks/methods. Audio polish with no material surface. A forced weave would be thematic decoration, not a real connection.

## revelationary   [anchors: support/library (1)]
- LEAVE — pure progression-gating library; zero items, zero methods, no material outputs. Its function (advancement-gated block reveals) is infrastructure that other mods ride; it has no standalone content to weave. Correctly identified in its dossier as the mechanism behind M-05 uses by dependents — that credit belongs to those dependents, not revelationary itself.

== CHUNK COMPLETE ==
