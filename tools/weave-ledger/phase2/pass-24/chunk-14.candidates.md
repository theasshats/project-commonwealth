# Phase 2 candidates — chunk-14

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit / dark_metal | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark Metal ore through a crusher yields ingots + a dark nugget byproduct, so the spooky metal enters the tech spine rather than sitting as a dead-end bench recipe
- from: born_in_chaos_v1:bundle_of_bones + boss drops (Pumpkin Staff/Soul Saber) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame (boss drop) / mid (bundle_of_bones) | tone: ok | verdict: ACCEPT | hook: cursed undead bones fed into spirit-fire transmute into a necromantic intermediate — the chaos bestiary directly feeds the magic web's ritual chain, thematically natural
- from: born_in_chaos_v1:dark_metal / drop stream | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; dark-metal drops are bounty-eligible in the same trivial way as any mob drop; the Create and magic anchors above are the distinctive 2nd and 3rd ties
- from: born_in_chaos_v1:black_argillite (build set) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: argillite is a decoration-palette bonus, not a progression material; M-04 recycles deco that players already mass-produce — black argillite is obtainable from BIC structures but nobody accumulates a surplus of it intentionally; low-value edge, don't add noise

REWORK: existing connection (survival only) — OK as far as it goes; the two new ACCEPTs above (M-03 Create + M-11 magic) are the recommended additions to reach ≥2 anchors.

## modelfix   [anchors: support (1)]
LEAVE — pure client rendering patch; zero content surface (0 items, 0 blocks, no loot, no recipes). No coherent weave possible.

## minecolonies   [anchors: survival, Create (2)]
OK — connections sound. M-05 native-method gating (quarries on Create parts) is authored in 98-minecolonies.js; survival is the settlement/food face. No new edge needed here — dossier notes economy (M-09 colony food as sellable goods) as an emergent 3rd that belongs to the 0.9 economy pillar, not this pass.

## ritchiesprojectilelib   [anchors: support (1)]
LEAVE — pure projectile/ballistics API; 0 items/blocks/loot/recipes. Indirectly enables Create Big Cannons but has no content surface of its own to route.

## modernfix   [anchors: support (1)]
LEAVE — JVM/loader performance patches only; 0 items/blocks/loot/recipes. No content surface.

## betterclouds   [anchors: support (1)]
LEAVE — client volumetric cloud renderer; 0 items/blocks/loot/recipes. No content surface.

## terrablender   [anchors: support (1)]
LEAVE — worldgen library/API; 0 items/blocks/loot/recipes. No content surface.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- from: build-helper tools (hammer, chisel, trowel, hardhat) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as forced — builder utilities are consumable convenience items, not progression gates; routing them through M-05 native-method gating implies they are milestone items, which they aren't; a forced edge adds cost without advancing the loop
LEAVE — builder convenience datapack; the 30 items are all utility tools with no processing surface and no loot table. No coherent 2nd anchor without force.

## dndesires   [anchors: Create (1)]
- from: dndesires milkshake foods (chocolate_milkshake, glowberry_milkshake, etc.) | via: farmersdelight:cooking / diet system | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-factory milkshakes fill a diet group (Sugars/Protein) — a direct Create-machine output feeding the survival pressure loop; a player running the diet system wants milkshakes, which means running the Create mixing chain
- from: dndesires:rubber (from Hydraulic Press, sap+water) | via: create:sequenced_assembly or as a crafting intermediate for aeronautics gaskets/seals | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber is the canonical gasket/seal material; Aeronautics engines and control surfaces need airtight fittings — routing rubber as a required intermediate in drivetrain/propulsion recipes makes the Hydraulic Press a non-optional step in the ship build chain
- from: dndesires:cardboard_package_* | via: aeronautics cargo logic | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — cardboard boxes as ship cargo containers is a thematic fit but there is no structural motif covering "packaging items are required in the logistics arm"; would need a Gate-0 new motif; record for review
- from: dndesires fan-processing (sanding/freezing/seething) on crops/ore-dusts | via: dndesires:sanding or dndesires:seething | to: survival (food prep step) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: method-direction is wrong — M-12 is about routing a crop/material through another mod's method; dndesires' methods ARE available for other mods to pull through (they are the host methods, not the guest material); the correct framing is that other mods' crops/drops GET a sanding/seething recipe, not that dndesires anchors to survival by being processed through someone else; the food anchor is already covered by the milkshake ACCEPT above

REWORK: existing connection (Create only, 1 anchor) — the milkshake+survival ACCEPT and rubber+aeronautics ACCEPT raise it to 3 anchors; both recommended.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments (nuggets, rare drops per creature tier) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid (common drops) / endgame (mini-boss busts) | tone: ok | verdict: ACCEPT | hook: mythic creature fragments (harpy feather, gorgon scale, minotaur horn analog) fed into spirit-fire become ritual intermediates — the bestiary's varied drop set directly populates the magic-web's reagent pool; thematically exact (folklore creatures → occult components)
- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the same mythic fragments infused through the enchanting apparatus attune foreign materials — adds a second magic delivery mechanism (Ars side), so Gaia drops serve both the Occultism and Ars branches of the magic web; player naturally wants to kill mythic mobs before unlocking high-tier spells
- from: grimoireofgaia:boss busts (bust_gorgon/minotaur/sphinx/valkyrie/vampire) | via: bountiful board → numismatics | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; boss busts are high-value drops but the link is just "sell rare thing for coin"; the two magic ACCEPTs above are the distinctive 2nd-system ties; a bounty for defeating mini-bosses is valid flavor but not a structural economy anchor
- from: grimoireofgaia drops (c:nuggets/diamond, c:nuggets/emerald) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: these are already c:-tagged nuggets and would pass through vanilla smelt/create paths without a dedicated recipe edge; the c:tag unification covers it; adding an explicit recipe edge is low-signal noise

REWORK: existing connection (survival only, 1 anchor) — M-11 + M-10 magic ACCEPTs are the recommended 2nd anchor; both route through magic delivery mechanisms on the same drop set.

## mffs   [anchors: Create, survival (2)]
OK — connections sound. M-05 + M-06 gold-standard Create weave is authored (60-mffs.js); TFMG steel mid-tier. No new edge needed; dossier correctly flags this as the reference implementation.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window, train_step_brass, train_slide_brass | via: create:pressing (brass sheet input) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as low-value (M-04-adjacent deco weave); pressed brass sheet → train window is a weak edge — it only formalizes that brass parts use brass sheet, which is implicit already; doesn't advance the loop meaningfully; the mod is support-tier transport deco and a forced 2nd anchor adds nothing
LEAVE — train detailing/deco for the aeronautics/transport pillar; support-tier; no coherent non-forced 2nd anchor; accept as 1-anchor support deco.

## do_a_barrel_roll   [anchors: support (1)]
LEAVE — pure client flight-camera behavior; 0 items/blocks/loot/recipes; touches vanilla elytra, not Aeronautics ships; no content surface to weave.

## sliceanddice   [anchors: Create, survival (2)]
OK — connections sound. The mod IS the Create↔FarmersDelight automation bridge (M-12 by design). No additional weave needed.

## inventoryprofilesnext   [anchors: support (1)]
LEAVE — pure client inventory UI; 0 items/blocks/loot/recipes. No content surface.

## mru   [anchors: support (1)]
LEAVE — pure code-sharing library; 0 items/blocks/loot/recipes. No content surface.

## bettermodsbutton   [anchors: support (1)]
LEAVE — client UI (pause-screen mods button); 0 items/blocks/loot/recipes. No content surface.

## ldlib2   [anchors: support (1)]
LEAVE — developer library (UI/rendering/sync infrastructure); 2 dev/test blocks with no gameplay meaning; nothing to route.

## tide   [anchors: survival (1)]
- from: tide fish (cooked, diverse biome-locked species) | via: farmersdelight:cooking / create:mixing (fish soup/chowder chain) | to: Create | motif: M-12 | power: everyday (common fish) / mid (biome-rare species) | tone: ok | verdict: ACCEPT | hook: Create mixing-basin processes bulk fish + vegetables + seaweed into a fish chowder that fills a distinct diet group — fishing output feeds the Create-automation cooking chain, which in turn feeds the diet-pressure loop; Serene Seasons compat already gates seasonal catches, reinforcing the scarcity angle
- from: tide:abyss_angler / void-caught exotic fish | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame (void/abyss catches, rare) | tone: ok | verdict: ACCEPT | hook: creatures fished from the void or abyss are already occult in flavor; spirit-fire transmutes them into a dark fluid or deep-sea essence used in rituals — fishing the unknown reaches of the world feeds the magic reagent pool; rare enough that it doesn't flood the reagent supply
- from: tide fish (common, abundant catches) | via: numismatics sell / bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; fish are the canonical "sell to villager" item in vanilla; the fact that Tide fish are sellable for coin is obvious and adds no structural loop closure; the Create and magic anchors above are the distinctive ties

REWORK: existing connection (survival only, 1 anchor) — M-12 Create ACCEPT + M-02 magic ACCEPT raise it to 3 anchors; both recommended.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / bulk ammo (finished rounds) | via: specialization / economy trade | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced ammo manufactured in a Create brass-tier factory is a genuine scarcity-gated distribution node — only players with the brass/andesite Create chain can produce ammunition at scale, making an "arms dealer" specialization structurally necessary for the rest of the server; this is loop-closing (Create production → economy distribution node), not merely "sells for coins"
- from: createimmersivetacz ammo / gun parts | via: bountiful bounty payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the above ACCEPT already captures the economy anchor via the more distinctive specialization-node framing (M-08 scarcity-gated distribution); a second economy link via bounty payout is redundant and adds no new structural tie

REWORK: existing connection (Create only, 1 anchor) — the M-08 economy ACCEPT is recommended as the 2nd anchor; ammo production is one of the clearest specialization-defining distribution nodes in the pack.

== CHUNK COMPLETE ==
