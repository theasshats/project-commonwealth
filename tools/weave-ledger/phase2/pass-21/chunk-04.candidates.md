# Phase 2 candidates — chunk-04

## betterclouds   [anchors: support/client-visual (1)]
- LEAVE — zero content surface (client-only cloud renderer, no items/blocks/loot); no coherent gameplay anchor. Support role, confirmed.

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — zero content surface (client-only model/animation replacer, no items/blocks/loot); no coherent gameplay anchor. Support role, confirmed.

## edf-remastered-5.0-beta4   [anchors: survival/boss-difficulty (1)]
- from: ender dragon loot table (vanilla dragon_death loot) | via: loot-seed | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a harder dragon fight that actually pays out — seed coin (numismatics crown/sun) into the dragon's loot table so slaying the ramped-up boss converts directly to top-tier economy currency; combat pressure → economy loop
- from: ender dragon loot table (vanilla dragon_death loot) | via: loot-seed | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the dragon's enhanced fight drops a scarce Ars/Occultism reagent (e.g. source gem or void crystal used in high-tier rituals) — clearing the End pumps magic currency into the magic pillar
- from: ender dragon loot table (boss kill) | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a boss-key component (dragon-derived, unique) into the dragon loot to gate a flagship Create sequenced-assembly recipe — reinforces the kill-unlock progression the pack already intends (M-15); the harder fight makes earning the key feel proportionate
- from: dragon fight difficulty | via: no material route possible | to: anything | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: the mod adds no items of its own and cannot be a FROM node for any method-routing; all weaves must go through loot-seed; any attempt to create a crafting/processing route from a pure-behavior mod is a phantom edge

## glitchcore   [anchors: support/library (1)]
- LEAVE — pure code library (loader-abstraction for Glitchfiend mods); zero content surface, no items/blocks/loot. Backs Serene Seasons which itself carries the M-16 seasonal weave; glitchcore contributes nothing independently.

## ponderjs   [anchors: support/Create-tooling (1)]
- LEAVE — developer-documentation tooling only (KubeJS Ponder scene authoring); no items/blocks/loot, no material surface. Supports the Create spine's UX but is not a gameplay node.

## inventoryprofilesnext   [anchors: client-QoL/support (1)]
- LEAVE — client-only inventory ergonomics (sort, dump, lock slots); no items/blocks/loot and no gameplay surface. Cannot be a method node or material source.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: vanilla-block cuts (stone/wood slabs, stairs, walls — 847 blocks) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create saw can produce any of the 847 cut variants in bulk — a player who builds large ships or colony structures runs wood/stone through the mechanical saw instead of hand-crafting; decoration joins the Create production spine naturally
- from: stone/concrete gravity-bearing cuts (concrete-powder slabs, gravel stairs, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing a misplaced gravity-cut (concrete-powder slab, gravel wall) yields back sand/gravel + an XP nugget — closes the lossy recycle loop the motif requires; standard M-04 application
- from: more_slabs_stairs_and_walls cuts | via: create:cutting | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: building blocks as luxury trade goods is a stretch — M-09 targets high-effort consumables (food/wine/processed crops). Decoration cuts are not a luxury good; routing them as sellable commodity is thematically off and would flood the economy with low-effort items.
- REWORK: existing anchor is "support/decoration (1)". The M-04 cutting route is the natural second anchor (create) — worth adding as the primary recommendation for the create spine pass.
- OK — no existing recipe connections to flag as weak (none authored yet).

## chefsdelight   [anchors: survival + economy (2)]
- from: Cook/Chef villager trades (FD meals) | via: loot-seed / config | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: route the Cook/Chef villager payouts to also accept/dispense Numismatics coin instead of only emeralds — cooked meals become a real trade good in the pack's currency, advancing the survival→economy loop
- from: Cook/Chef villager trades | via: M-21 villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no per maintainer note); the same intent is already captured under M-09 which is the accepted motif for luxury-good→coin. Do not double-count with the provisional motif.
- OK — existing survival + economy anchors are coherent; the village-cook→food-supply→economy flow is exactly right. The M-09 deepening is an enhancement, not a correction.

## owo   [anchors: support/library (1)]
- LEAVE — pure developer-infrastructure library (UI/config/networking framework); no items/blocks/loot, no material surface. Backs dependent mods but has no gameplay presence of its own.

## mousetweaks   [anchors: client-QoL/support (1)]
- LEAVE — client-only inventory input-handling (drag/scroll mechanics); no items/blocks/loot. No gameplay surface to weave.

## betterbiomereblend   [anchors: support/performance-client (1)]
- LEAVE — client-only biome color-blending optimizer; no items/blocks/loot, no material surface. Performance mod with zero content.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (music disc) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: clash | verdict: REJECT | reason: seeding a meme music disc as a bounty payout or coin drop is flavorful but sets a low bar — it's a single cosmetic item with no material value, and M-14 targets mob drops → coin; a joke disc is not a meaningful economic node. Would be noise.
- LEAVE — single-item joke mod (one music disc); no coherent second anchor. The disc's only role is atmosphere. Forcing an economy or magic edge onto a Minecraft Movie meme song would be noise.

## dynamictrees   [anchors: survival/wood-gathering (1)]
- from: dynamictrees species seeds (oak_seed, birch_seed, jungle_seed, etc.) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling a Dynamic Trees species seed yields sawdust + a chance at a rarer extract (resin/sap analog) — makes the seed conversion feed the Create processing chain and gives players a reason to collect off-species seeds beyond replanting; survival resource → Create spine
- from: dynamictrees:branch (generic branch item) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling harvested branches yields sawdust/pulp, feeding Create's material chain; branches are a side-product of whole-tree felling that currently has no dedicated use — giving them a mechanical processing path is coherent
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: the dendro potion accelerates tree growth — it's a targeted utility potion with its own purpose. Routing it into magic infusion is thematically odd (a tree-growth accelerant as a magic reagent), and more importantly the dossier notes DT trees are awkward for Create automated harvesters; there's no strong loop payoff. Tone clash between living-forest naturalism and arcane infusion.
- from: dynamictrees species diversity (biome-specific tree types) | via: create:milling / farmersdelight:cutting | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: DT's biome/season-dependent growth is emergent behavior, not a discrete seasonal gating on a specific material. The season dependency is passive (growth rate), not an explicit "this item exists only in season X" hook that M-16 requires. Cannot cleanly implement as a season-gated recipe.
- REWORK: existing 1-anchor (survival) is sound. The M-12 milling routes (seeds → pulp, branches → sawdust) are low-effort and natural; worth proposing in the Create-spine pass as a quiet +1 anchor.

## mcwwindows   [anchors: support/decoration (1)]
- from: stone parapet/arrow-slit variants (mcwwindows:*_parapet, *_arrow_slit) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing mis-placed stone window parapets or arrow slits back to cobble/gravel + XP nugget — standard M-04 recycle; stone-cut deco rejoins the Create loop without forcing novel content
- from: mcwwindows glass variants (mosaic glass, curtain rod) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla glass already has no crush recipe (intentionally fragile by design); adding crush routes for mosaic-glass variants would be inconsistent with the pack's M-04 scope (M-04 is for stone/metal deco, not glass); glass crush is better handled by a dedicated glass-processing pass if ever desired.
- from: mcwwindows curtains (wool-based) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: milling curtains back to wool fiber is contrived — there is no meaningful output and it inverts normal crafting logic. Tone clash (soft furnishings don't mill into useful intermediates). M-12 requires the output to feed further recipes; wool fiber doesn't.
- REWORK: existing 1-anchor (support/decoration) is correct. The only viable weave is the M-04 stone-parapet crush; it's weak and should be bundled into a wholesale deco-family crush pass rather than prioritized alone.

## justenoughbreeding   [anchors: support/JEI-plugin (1)]
- LEAVE — pure JEI/REI/EMI breeding-info plugin; no items/blocks/loot, no material surface. Cannot be a weave node.

## gamediscs   [anchors: survival/flavor (1)]
- from: gamediscs:processor | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the console's processor component (its "flagship" part) is built on the Create mechanical crafter rather than a plain crafting table — electronics require mechanical assembly, which is consistent with the pack's GregTech-style depth principle and makes the console a small but genuine Create build goal
- from: gamediscs:gaming_console (disc + console unit) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed a game disc (the rarer mob-kill variant, e.g. slime or frog disc) into a Bountiful bounty reward — a novelty bounty that pays out in an easter-egg item; gives the bounty board a whimsical entry and connects the mob-kill mechanic to the economy board without inventing heavy infrastructure
- from: gamediscs components (battery, control_pad, display, redstone_circuit) | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: gating every component behind mechanical crafting over-engineers a novelty mod (cost scales with power; this is an easter-egg arcade toy, not endgame tech). Only the flagship "processor" deserves the M-05 treatment — apply that one and leave other components as vanilla crafted.
- REWORK: single survival anchor is weak given the mod has craftable tech-flavored items (processor, circuit). The M-05 processor route and M-14 bounty-loot seed are the minimum to give it a second anchor without overweighting it.

## cmpackagepipebomb   [anchors: create (1)]
- from: cmpackagepipebomb:pipebomb_rigged (explosive package trap) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed the pipe bomb into a rare/hazardous bounty reward or structure loot (illager hideout, dungeon chest) — a booby-trapped "reward" that pays out in PvPvE mischief; connects the Create-package system to the economy/exploration loop via a dark-humor structural seeding
- from: cmpackagepipebomb:pipebomb | via: createbigcannons:cartridge_assembly | to: create | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the pipe bomb is a small-scale improvised trap, not a vehicle propulsion component; routing it through Create Big Cannons assembly (M-24 is for drivetrain/propulsion) is a thematic mismatch — a pipe bomb is not a cannonball, and the motif requires a mechanical component → aeronautics drivetrain, which doesn't fit at all.
- from: cmpackagepipebomb:pipebomb (crafting) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: a joke/PvP prank mod should stay lightweight; gating the pipe bomb behind a sequenced assembly chain (M-06 is for endgame keystones) is wildly out of proportion for a whimsical one-block trap. Depth scales with power; this is a novelty item.
- REWORK: the existing single Create anchor is earned (the package delivery mechanic genuinely rides Create's package system). The loot-seed economy link (M-14) is the only coherent second anchor; keep it lightweight.

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — client-only world map recorder; no items/blocks/loot. Cannot be a weave node. Pairs with Xaero's Minimap as navigation infrastructure.

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration-structures (1)]
- from: tavern structure loot / dungeon chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed coin (numismatics cog/spur/bevel) into the tavern and dungeon loot tables — players exploring and looting structures naturally acquire pack currency, threading exploration into the economy loop; the tavern especially is a natural coin-bearing location
- from: tavern structure (in-built cartographer villager) | via: loot-seed | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 (villager trade → numismatics) is provisional and maintainer leans no; the coin-in-loot path via M-08 already captures the exploration→economy link without the provisional villager-trade mechanism
- from: trial chambers (dungeon-and-taverns extra trial vaults) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Ars Nouveau source gems or Iron's Spellbooks arcane essence into the trial vault loot — trial chamber completion rewards magic currency, making dangerous exploration a viable alternative acquisition route for magic reagents (reduces grind-gating on magic progression)
- from: dungeons-and-taverns structures (varied biome) | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed one rare boss-key fragment (a partial component usable in a KubeJS-gated Create sequenced-assembly recipe) into the hardest dungeon tier (illager hideout / deep dungeon) — exploration yields a progression key that unlocks advanced Create tech; reinforces the exploration→production link
- REWORK: existing 1-anchor (survival/exploration) is correct but thin given the `loot=yes` flag. The three loot-seed candidates (M-08 coin, M-02 reagent, M-15 key) are the standard play for any structure mod — all of them apply here.

## cristellib   [anchors: support/library (1)]
- LEAVE — pure code library (structure-config framework and conditional datapack plumbing); no items/blocks/loot. Backs structure mods (Towns & Towers, Explorify, Terralith) that carry their own anchors. No content surface to weave.

== CHUNK COMPLETE ==
