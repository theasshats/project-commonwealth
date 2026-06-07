# Phase 2 candidates — chunk-07 (context-fed)

## create_pattern_schematics   [anchors: create (1)]

OK — existing rows sufficient.

## puzzleslib   [anchors: support/library (1)]

LEAVE — pure code library; 0 blocks, 0 items, no gameplay surface. No weave possible.

## mcwstairs   [anchors: support/decoration (1)]

The existing row landscape is split: stone-family M-04 (crush to gravel + XP nugget) has a strong multi-pass ACCEPT plurality, wooden-family M-04 / M-12 have consistent REJECTs. The contested ground is clear. Let me check whether any dimension was missed.

A nuance all existing rows miss: the dossier notes `loot=yes`. That means mcwstairs has loot tables — possibly structure loot (colony building interiors, dungeon chests). The briefing says not to LEAVE a loot-bearing mod without checking loot-seed first. However: the loot here is almost certainly the *drop table* of placed blocks (blocks drop themselves), not a chest loot table seeding. mcwstairs is a decoration mod with no structure content of its own, so `loot=yes` reflects self-drop on mining, not a dungeon chest population. No loot-seed angle applies.

The M-04 stone-crush angle is already thoroughly mapped. One gap: could stone railing/balcony variants feed **create:sandpaper_polishing** as an *inbound* step — i.e., require polished stone as a recipe input — turning the builder into a consumer of a Create-processed intermediate? That's an M-29 cross-route dependency angle (builder needs Create-polished stone for fancy railing variants). The mcwwindows ACCEPT for `sandpaper_polishing` as input was already flagged. Does the same apply here?

- NEW | from: mcwstairs:andesite_railing / mcwstairs:andesite_terrace_stairs (polished-stone family) | via: recipe (require create:sandpaper_polishing output — polished andesite intermediate — as crafting input for the polished-stone stair family) | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: fancy andesite railings need machine-polished stone, not hand-cut cobble — the builder buys lapped slabs from the Create player

CHALLENGE | from: mcwstairs:*_stone/*_brick/*_blackstone variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: the 15-vs-17 vote split shows genuine contention; the dossier itself flags this as WEAK and only valid in a "wholesale deco-family pass" — if that pass runs, it belongs to a combined mcwstairs+mcwdoors+mcwwindows stone-deco sweep, not to mcwstairs alone. Proposing it for mcwstairs in isolation over-represents the same M-04 edge already captured for the whole Macaw's family.

## mcwdoors   [anchors: support/decoration (1)]

Existing rows converge: metal/iron door variants → create:crushing (M-04) has plurality acceptance; wooden variants consistently reject; M-12 cutting for barn/stable doors has one ACCEPT and one REJECT.

One angle absent from the existing rows: the M-29 polished-stone / Create-intermediate angle used for mcwwindows. Does it apply to mcwdoors? The relevant family would be "modern" door types (glass-and-metal framed doors) that require a fabricated intermediate. However mcwdoors modern doors use plain iron ingots and glass panes in vanilla crafting — the "modern" style is already implied by its ingredients. Gating a *cosmetic* door variant on a Create-processed intermediate violates the basic-component cost rule (everyday deco shouldn't require a complex chain). Reject.

One gap: the **colony route (M-28)**. One row proposed "colony Builder hut places MCW doors in colony structures" (ACCEPT, 1 vote). The framing is slightly off — a Builder hut consumes door items from the colony's request system. A more precise read: a MineColonies Builder hut can be configured to *request* mcwdoors variants for colony structures, making the door-maker a supplier to the colony. That's a genuine M-28 angle. It already has 1 ACCEPT but was never challenged or deepened in the pile.

- NEW | from: mcwdoors:*_barn_door / *_cottage_door (wood families used in colony stable/cottage schematics) | via: minecolonies colony Builder request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Builder hut constructing a Stable schematic requests 40 barn doors — the colony pull makes a door-crafter a necessary supplier, not just a decorator

## configuration   [anchors: support/library (1)]

LEAVE — pure config-screen library; 0 blocks, 0 items, no gameplay surface. No weave possible.

## mcwwindows   [anchors: support/decoration (1)]

Existing rows: stone parapet/arrow-slit → create:crushing (M-04) converged as ACCEPT (19 vs 12 but split narrows on mosaic glass, which correctly rejects). The M-29 polished-stone input angle got 1 ACCEPT. The curtain/wool angles consistently reject on tone. The M-20 sandpaper-polishing angle got 1 ACCEPT.

Gaps to probe:

1. The **M-29 sandpaper-polishing inbound** angle (require a Create-polished stone intermediate as input for fancy stone window variants) is the same as proposed for mcwstairs above. It has only 1 ACCEPT and the question is whether it's well-grounded. Red-team: a player wants to craft an andesite window — does it feel natural that it requires a machine-polished stone slab? For a decorative block that's otherwise vanilla-table-crafted, this is over-engineering everyday content. The existing ACCEPT was from a single pass; the 0 REJECT is not convergence, it's sparse. Proposing a CHALLENGE.

2. **Curtain rod** (mcwwindows:acacia_curtain_rod — an iron/wood item) has never been cleanly addressed. The rods are pure deco. They contain iron in the rod form. Could iron curtain rods crush back to iron nuggets (M-04)? Red-team: the iron rod is a small item, crushing it adds negligible material return and is recipe noise. Reject — too thin.

3. The M-28 colony angle for mcwwindows has never been proposed. A Builder hut constructing window frames for colony buildings could request arrow-slit variants for a Fortress schematic. Same logic as mcwdoors M-28 above, equally valid.

- NEW | from: mcwwindows:*_arrow_slit / *_parapet (fortification window variants used in colony Fortress/Guard-tower schematics) | via: minecolonies colony Builder request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: building a colony Guard Tower requires arrow-slit windows — the window-maker becomes a colony supplier, not just a decorator
- CHALLENGE | from: mcwwindows stone window/parapet variants (andesite) | via: create:sandpaper_polishing (polished-stone intermediate as recipe input) | to: create | motif: M-29 | verdict: REJECT | hook: gating an everyday decorative window on a Create-processed intermediate violates the basic-component cost rule; the single existing ACCEPT is not convergence — the block is everyday decoration that should craft from vanilla stone, not from a machine-lapped slab

## gnkinetics   [anchors: create, aeronautics (2)]

Existing rows heavily converge: M-24 (planetary/worm/ring gear → Aeronautics drivetrain) has 18+8+8 ACCEPTs. M-28 (worm gear via colony blacksmith) has 2 ACCEPTs. M-29 (precision gear → golem assembly) has 1 ACCEPT. The dossier's own "leave" recommendation was superseded by the M-24 convergence. The mod now sits at 2 anchors (Create + aeronautics).

Does gnkinetics have a plausible third anchor or a deeper weave? The dossier is explicit: its parts are pure mechanism with no magic/survival/economy thematic surface. Let me push on the one gap the existing rows show:

**The M-17 / magnet-gear angle** was rejected for good reason (electromagnetic magnetism ≠ FE charging, tone works but the mechanism is wrong). No new angle there.

**Service-for-hire (M-33)**: A kinetics specialist who designs efficient gear-ratio contraptions sells *the gear-ratio knowledge as a service* — configuring another player's factory, not selling the gears. This is emergent play, not a recipe action. No Phase-3 author action. Pass.

**M-32 byproduct → input**: gnkinetics produces no waste stream. Correctly rejected everywhere.

One angle genuinely not explored: gnkinetics **shaftless variants** (shaftless_brass_gear, shaftless_industrial_gear) enable Create contraptions to transmit rotation through non-standard paths. In the aeronautics context, shaftless gears allow rotation to cross ship structural members without a visible shaft — a design-relevant distinction for hull construction. This is a *use-context nuance* on M-24, not a new anchor.

OK — existing rows sufficient. (gnkinetics sits at 2 anchors via M-24; no third anchor reachable without forcing.)

## irons_spellbooks   [anchors: magic, create (2)]

Existing rows are extremely dense — nearly every plausible surface has been explored across 50+ rows. The mod already sits at 2 anchors (magic + Create via the alchemist cauldron's emptying/filling inbound). Let me audit the converged ACCEPTs and look for anything missing or challenged:

Converged ACCEPTs: M-01 (arcane_essence ↔ source_gem), M-03 (mithril ore-doubling), M-02 (apothecarist drops as reagents), M-11 (apothecarist drops via spirit_fire), M-12 (cauldron fluid I/O via create:filling), M-16 (seasonal brew needing cold-only ginger), M-19 (pyrium via haunting), M-26 (scrolls as consumables), M-28 (endgame gear colony-locked), M-29 (cross-route brew needing electric solvent), M-30 (mithril regional scarcity), M-34 (boss drops traded to non-combat players), M-35 (aged brews?), M-37 (spell-school research gate via MineColonies).

One nuance missing: the **M-22 lunar reagent** applied specifically to Iron's Spellbooks' school-specific brews. M-22 is accepted and bridges to blood/eldritch schools. A Blood Moon is thematically the perfect catalyst for an Iron's *blood-school* brew — requiring the brew to be initiated only under a Blood Moon (event-as-precondition on the alchemist_cauldron_brew) adds a temporal scarcity the existing M-16 ginger row doesn't cover (that's seasonal, not lunar). No existing row proposes M-22 specifically for Iron's cauldron brews.

- NEW | from: irons_spellbooks:alchemist_cauldron_brew (blood-school brew requiring active Blood Moon as event-precondition) | via: event-gating on irons_spellbooks:alchemist_cauldron_brew (KubeJS recipe condition) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the blood-school's most potent brews only complete under a Blood Moon — a lunar rarity that forces the specialist to stock ingredients and wait for the right night, or trade with someone who did

Also: **M-20 (deploy-application upgrade)** for affinity rings got 1 ACCEPT. This is plausible — a blank affinity ring upgraded with a school gem via create:deploying is a light single-step Create touch. Red-team: Iron's already has its own Arcane Anvil upgrade path; adding a create:deploying step is additive friction on an already-gated item. The 1-ACCEPT vs 0-explicit-REJECT in that row is sparse. Challenging it as weak.

- CHALLENGE | from: irons_spellbooks:affinity_ring (school-specific magic gear) | via: create:deploying | to: create | motif: M-20 | verdict: REJECT | hook: the Arcane Anvil is Iron's native upgrade machine; adding create:deploying as a *second* upgrade gate for the same item doubles the friction without advancing the loop — M-20 is the "light sibling of M-06" but should apply where no native upgrade path exists, not as a parallel gate on an already-deep item

## s_a_b   [anchors: create, aeronautics (2)]

Existing rows converge heavily: M-06/M-23 (hardsteelblock via sequenced-assembly + aeronautics hull), M-30 (steel scarcity gates armor), M-34 (combat-supply route), M-26 (armor consumed under PvPvE fire), M-28 (colony blacksmith for basic light-steel), M-15 (boss-key gate for hard-steel). The mod sits at 2 anchors (Create + aeronautics).

Gaps:

1. The **brass glyph/letter blocks** (s_a_b:brass_a … brass_z, 0–9, punctuation) are a large set that appears in the block list. Two rows propose using them (M-12 as brass-plate-cut signage, M-04 as pressed brass-sheet signage). These rows have 1 ACCEPT each and represent a genuine *second material surface* in s_a_b that is distinct from the steel armor theme. The brass typeface is a natural Create-adjacent output (brass plate stamped into letters), and signage for industrial bases is a real player use. The M-12 row is cleaner (create:cutting mills a brass plate into glyph blocks) than M-04 (pressed sheet), because M-04 is deco-recycle while M-12 is processing-chain pull.

- NEW | from: s_a_b:brass_a … s_a_b:brass_z (the full brass typeface set — letters, numerals, punctuation blocks) | via: create:cutting (a mechanical saw mills a brass sheet into individual letter/numeral blocks; scale: the full alphabet requires one automated cutting run) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the same rolling mill that makes brass gears and pipes stamps out factory signage — a brass letter block is an ambient Create output, turning s_a_b's full typeface into part of the Create material loop

2. The **M-29 cross-route**: does s_a_b's hardsteelblock feed any magic or survival recipe? No thematic surface exists. Steel armor into magic is a genre clash. Pass.

3. One weak row to challenge: M-04 "autunite deco bricks crush back to raw uranium-bearing gravel + XP nugget" (1 ACCEPT from an Opus pass) — this row is tagged under *createnuclear* but the Opus pass filed it under s_a_b context. Not applicable here; disregard.

OK — s_a_b existing rows sufficient for the core anchors; brass typeface M-12 is the one genuine gap.

## glitchcore   [anchors: support/library (1)]

LEAVE — pure loader-abstraction library; 0 blocks, 0 items, no gameplay surface. No weave possible.

## zombiemoon   [anchors: survival (1)]

Existing rows are exhausted and the dossier is explicit: 0 items, 0 blocks, `loot=no`, vanilla rotten flesh drops only. No unique reagent exists to route through any method. The split on M-34 (3 ACCEPTs vs. 4 REJECTs) is interesting — let me re-examine.

M-34 "combat specialist farms harder undead and trades surplus drops" is structurally correct in the loop (danger → combat-supply → economy), but the drops are indistinguishable from vanilla zombie drops. A "combat specialist" farms harder zombiemoon Brutes and harvests *rotten flesh at higher volume* — that's quantitative, not qualitative. For M-34 to count, the drop needs to be distinct enough that players trade specifically for it. Rotten flesh is not. The M-34 ACCEPTs overstate the case.

- CHALLENGE | from: zombiemoon mob drops (Zombie Brute / Crawler / Spitter — harder undead variants) | via: emergent trade | to: economy | motif: M-34 | verdict: REJECT | hook: M-34 requires a *distinct* drop that non-combat players specifically trade for; zombiemoon drops are vanilla rotten flesh at higher volume — quantity isn't distinctiveness, and there's no demand-gate that makes rotten flesh a trade good players seek out by name

LEAVE — no second anchor reachable; the mod is a pure survival-pressure (difficulty) addition with no routable material surface.

