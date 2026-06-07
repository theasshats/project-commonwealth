# Phase 2 candidates — chunk-05

## tacz   [anchors: support (1)]
- from: tacz:ammo (gunpowder + metal casings) | via: create:mechanical_crafting / create:pressing | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: brass casings pressed on a Create line gating ammo production — ore scarcity throttles warfare, gun_smith_table stays native
- from: tacz:modern_kinetic_gun (high-tier firearm) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-calibre weapon assembled in multi-stage sequence (barrel boring → stock fitting → action assembly) earns its power through Create depth
- from: tacz:ammo / tacz:modern_kinetic_gun | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ammunition as a consumable war-materiel trade good — scarce metal → pressed casing → ammo → coin; combat output feeds the market
- from: tacz loot tables (loot=yes, tactical vibe) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: defeated armed enemies drop coin or weapon-parts bounty, closing combat → economy loop (provisional motif, tag accordingly) (provisional motif)
- from: tacz:modern_kinetic_gun (vehicle-mounted thematic) | via: aeronautics construction | to: aeronautics | motif: M-24 | power: endgame | tone: clash | verdict: REJECT | reason: TACZ doesn't natively integrate with Aeronautics turret mounts; aeronauticscompat covers other turret mods, not TACZ; forcing it is fabrication, not a supportable weave

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees log/branch drops | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT output is standard vanilla logs/sticks — milling logs is already handled by vanilla Create recipes; no new edge needed, it's inherited, not a distinct weave
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Dendro Potion is a tree-growth catalyst; treating it as an arcane infusion input is thematically strained (growth potion ≠ arcane reagent) and the dossier explicitly notes DT forcing a Create edge would be contrived — same logic applies to magic
- LEAVE — dynamictrees feeds the vanilla log economy; its outputs (logs/sticks/saplings) naturally flow into downstream processing that is already covered by other mods' weaves. DT has no distinct material surface that isn't already a standard wood product. Forcing a bespoke edge would be contrived per the dossier's own assessment.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: more_slabs_stairs_and_walls stone/wood cut variants | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk building automation — mechanical saw turns logs/stone into decorative cut variants; 847 blocks suddenly belong to the Create-automation web
- from: more_slabs_stairs_and_walls gravity/stone cut variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier rates this WEAK and the gain is marginal — adding 847 crushing-back recipes is noise; the cutting weave is the clean one; recycle-crushing is at most optional DLC, not a priority accept

## s_a_b   [anchors: Create, aeronautics (2)]
- OK — connections sound. s_a_b is already wired to Create (compacting/mixing inbound) and aeronautics (hull/armor material for ships/vehicles). Two anchors present.
- REWORK: no existing connections appear mis-costed or lore-clashing. The dossier notes a possible M-06 sequenced-assembly deepening for hard-steel variants — that is a valid optional depth pass, not a rework of a broken connection.
- from: s_a_b:hardsteelblock (peak tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard steel armor-plate assembled in multiple compacting/forging stages — endgame tier earns its power through Create depth, not just bigger numbers

## puzzleslib   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Pure code library; no material surface to weave.

## fluid   [anchors: Create, aeronautics (2)]
- OK — connections sound. fluid is already a Create-spine fluid tooling mod (parts made through Create methods) and anchors to aeronautics via centrifugal pump + smart interfaces serving ship/base fluid logistics. Two anchors present.
- REWORK: none. Connections are coherent and correctly costed.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul materials from the Otherside dimension transmute into occult essences — dimensional peril feeds the magic web directly
- from: deeperdarker:heart_of_the_deep (rare Warden drop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the rarest Otherside key-item imbued into a high-tier arcane reagent; dimension-clearing earns magic progression
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk sculk-stone crushes to gravel + XP nugget, pulling the deep-dark building palette into Create's recycle loop (already partly wired per dossier)
- from: deeperdarker:warden_carapace / sculk_bone (dangerous-to-obtain) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier rates this WEAK (secondary to the magic routing); a third anchor via coin is reasonable but only after magic weave is confirmed — defer; don't stack weak edges

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (multiblock climate machine) | via: create:mechanical_crafting + create:compacting for brass components | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth's smokestack requires Create-fabricated brass fittings — cold-climate survival demands the tech spine, not just vanilla materials
- from: cold_sweat:goat_fur_chestplate / chameleon/hoglin armor (insulated survival gear) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier rates economy tie WEAK; insulated armor is personal-use gear, not a natural traded luxury good in the PvPvE context — the Create-gating weave is the priority
- from: cold_sweat insulating materials (fur, molt, hide) | via: create:filling (already inbound) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already an inbound weave (waterskin fill); this is already wired, not a new edge

## mru   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Pure code library; no material surface to weave.

## particlerain   [anchors: support/atmosphere (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Client-only visual rendering mod; no material surface to weave.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Pure API library; no material surface to weave.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem (universal magic currency) | via: ars_nouveau:imbuement (M-01 spine) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: foreign essences and gems mint into/out of source_gem through imbuement — this IS the magic currency hub, already the reserved reagent; confirming it as the established spine
- from: ars_nouveau Agronomic/Vitalic Sourcelinks | via: config-tie (passive Source from farm/mob surplus) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: farm crops, animal deaths, and baby growth feed Source generation natively — the survival pillar's output powers the magic machine without a recipe edge needed
- from: ars_nouveau:source_gem / spell scrolls | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier rates economy tie WEAK and prefers leaving economy to dedicated arcane-currency weaves; source_gem's reserved role as magic currency hub should not double as a coin commodity (risk of reagent-ownership bleed)
- REWORK: ars_nouveau has only 1 anchor currently (magic) despite strong organic ties to survival via sourcelinks. The survival anchor should be formalized — the Vitalic/Agronomic sourcelink config-tie (M-02) is not a forced edge, it is a native mechanic already running; the dossier correctly flags it STRONG. This is an existing connection that simply needs to be acknowledged in the ledger rather than invented.

## securitycraft   [anchors: support (1)]
- from: securitycraft reinforced blocks / sentry components | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: sentry and keycard hardware require Create-fabricated precision parts — base defense costs real tech infrastructure
- from: securitycraft high-tier security gear (scanner, Block Pocket Manager) | via: numismatics sell/price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: dossier rates both candidates WEAK; security gear is utility equipment, not a traded commodity — forcing a coin tie is arbitrary and wouldn't survive a player's "why?" test
- from: securitycraft loot tables (loot=yes, 657 blocks / 690 items with mines/traps) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: SecurityCraft doesn't have dungeons or structure loot tables in the conventional sense — its loot= flag reflects the mine/trap block registry, not findable loot chests; loot-seeding here would be fabricating a mechanic that doesn't exist (provisional motif)

## zeta   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Pure code framework for Quark; no material surface to weave.

## collective   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Pure code library; no material surface to weave.

## kubejs_create   [anchors: support/tooling (1)]
- LEAVE — no player-facing content (0 blocks, 0 items). Scripting bridge that enables Create-recipe weaving; it is the tool, not a weave target.

## lithium   [anchors: support/performance (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Server/client performance optimization; no material surface to weave.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — no player-facing content (0 blocks, 1 generated_bucket placeholder). The pack's recipe-scripting engine; it is the weaving tool, not a weave target.

## playeranimator   [anchors: support/library (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no). Client animation API library; no material surface to weave.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising method | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: an arcane focus or Iron's Spellbooks scroll energised through the Energiser bridges the electric tier into magic crafting — FE-charged magic gear makes the electricity upgrade feel purposeful
- from: create_new_age:thorium_ore (scarce regional biome-gated ore) | via: create:crushing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: thorium is a rare regional ore; Create-processed → coin mirrors the iron/steel scarcity coin-chain and gives nuclear fuel a second economic role before it reaches the reactor
- from: create_new_age:corium (reactor waste byproduct) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: Corium is radioactive waste — routing it into a magic ritual is tonally awkward (industrial-waste-as-arcane-reagent doesn't survive the player's "why?" test); the M-17 energising weave is the clean magic edge; this would be a forced second one
- from: create_new_age advanced motor / energiser (endgame drivetrain) | via: aeronautics construction | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: an advanced electric motor as a required component for high-tier Aeronautics propulsion drives — the nuclear-electric tier earns its place by powering the best airships

== CHUNK COMPLETE ==
