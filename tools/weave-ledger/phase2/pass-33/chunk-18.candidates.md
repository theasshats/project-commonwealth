# Phase 2 candidates — chunk-18

## create_tweaked_controllers   [anchors: aeronautics (1)]

- LEAVE — pure control-interface device; no items/materials to route and no machine method to pull through. Its craft already gates on Create parts (precision mechanism, electron tubes). No coherent magic/economy/survival surface — any connection would be forced.
- REWORK: existing aeronautics anchor is sound (controller drives contraptions/vehicles).

## prickle   [anchors: support/library (1)]

- LEAVE — zero-content config-format library; 0 blocks, 0 items, loot=no. Genuine zero-surface dependency — nothing to route through any method.

## quark   [anchors: support/decoration (1)]

- from: quark decorative blocks (vertical slabs, polished stone variants, brick blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create mason crushes scrap deco blocks back to rough stone + an XP nugget — lossy but useful; players building with Quark stone variants get a recycling path without stashing orphaned blocks.
- from: quark crop/commodity storage blocks (apple_crate, carrot_crate, potato_crate, sugar_cane_block, etc.) | via: create:milling | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's bulk-storage blocks (compressed crops) are a natural feedstock for Create's mill — a crate of apples feeds a juicing/milling chain without unpacking, giving Create a first-class bulk-crop intake shortcut.
- from: quark:ancient_bookshelf / quark:bookshelf variants | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's Enchanting Apparatus already consumes bookshelves for power; Quark's richer bookshelf variants (ancient_bookshelf, wood-specific bookshelves) can serve as higher-tier bookshelf inputs, deepening the ritual without new items.
- from: quark storage blocks as compressed-material node | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: loot-seeding compressed commodity blocks into structures is ambient filler, not a demand-gating weave; no real combat-supply arc — REJECT bare loot.
- REWORK: existing single anchor is honest — Quark is a broad vanilla-plus decoration palette; 3 accepted links above give it 2 solid additional system touches (Create + magic). OK — connections sound once the above are adopted.

## trek-b0.6.1.1   [anchors: survival (1)]

- from: trek structure chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding a magic reagent (e.g. a small source gem, a wisp drop, an occultism raw soul) into Trek's varied chests (ruined fortress, pyramid, ship) rewards exploration with a magic on-ramp — the first arcane material a player finds might be from a Trek ruin, not a magic mob.
- from: trek structure chest loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Trek's rarer structures (fortress ruins, ancient mansions) are a natural place to seed a boss-adjacent component or a scarce early material that combat-specialized players farm and trade — combat-route supply flowing out of exploration.
- from: trek structure loot | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: boss-key unlock (M-15) requires a mod with its own boss-fight identity; Trek is a passive structure mod with no boss mob — seeding a tech gate item here would bypass the intended boss-encounter design. REJECT; keep boss keys behind actual bosses.
- REWORK: single survival anchor is correct for a structure-only mod with no items. Loot-seed approach (M-02 + M-34) adds two systems without forcing content. OK — existing anchor sound; new loot-seed links above fill the gap.

## naturalist   [anchors: survival (1)]

- from: naturalist:venison / naturalist:bushmeat (raw or cooked) | via: farmersdelight:cooking + create:milling | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Venison and bushmeat slot into the Farmer's Delight cutting board and pot as distinct ingredients — a hunter specialist's game meat feeds the food-processing chain, creating a trade incentive between hunters and cooks.
- from: naturalist:antler | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: An antler bone from a deer hunt carries natural essence — imbuement converts it into a magic reagent (bone-analog for arcane infusion), giving the hunter a second income stream beyond food and weaving naturalist into the magic pillar.
- from: naturalist:glow_goop | via: create:mixing | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: Firefly glow_goop is a luminescent organic byproduct; mixed with a base material in Create it yields a glowing dye or lamp fluid — industrial circularity routing a weird mob drop into a useful intermediate.
- from: naturalist:shellstone / naturalist:froglass (decorative blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Shellstone and froglass are biome-deco blocks with no alternate use; crushing them lossy into sand/glass + XP nugget gives builders a recycling outlet.
- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: glow_goop already accepted via M-32 (create:mixing) and assigning a second magic role on the same item risks double-spend; M-02 (antler) already covers the naturalist→magic slot. Avoid concentrating both magic weaves on single drops. REJECT to keep it clean — re-evaluate if antler M-02 is dropped.
- REWORK: dossier candidate M-09 (venison sale for coin) — this is a retired motif (bare sell = ambient, not a weave). Flag as REWORK: replace with M-12 (processing chain pull into food system) or M-34 (combat-specialist supply) — done above.

## ecologics   [anchors: survival (1)]

- from: ecologics:coconut / ecologics:coconut_slice | via: create:milling + extradelight:juicer | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Coconuts are a beach-biome renewable — milling them yields coconut flour (for baking) or juicing yields coconut milk, a cooking intermediate; gives the Create milling/extradelight chain a tropical food branch that a beach-specialist player produces for inland traders.
- from: ecologics:azalea_flower (sheared, seasonal) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Azalea flowers have a seasonal bloom pattern; tying them to imbuement as a reagent catalyst creates a seasonal window for a particular infusion recipe — a Serene Seasons pressure lever feeding the magic pillar.
- from: ecologics:seashell (storage block / item) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: seashell crushing is a one-step recycling fallback with no interesting output beyond sand — low-value mechanical connection that adds clutter without advancing the loop. The coconut + flower links above already cover ecologics' two main material types. REJECT.
- REWORK: existing survival-only anchor is honest. The azalea_flower seasonal link (M-16) is particularly strong because Serene Seasons is flagged as a priority survival lever (WEAVE-LEDGER note on M-16) — this is exactly the kind of weave to accumulate. OK — links above bring ecologics to 3 systems.

## cubes_without_borders   [anchors: support/client QoL (1)]

- LEAVE — client-only display mod (borderless window); 0 blocks, 0 items, loot=no. No material surface, no world effect. Genuine zero-content utility; no weave possible or desirable.

## timm   [anchors: support/QoL (1)]

- LEAVE — client-side UI overlay (biome title display); 0 blocks, 0 items, loot=no. No material surface. Genuine zero-content immersion mod — nothing to route through any method.

## create_hypertube   [anchors: Create, aeronautics (2)]

- OK — connections sound. Already at 2 anchors (Create spine + aeronautics/logistics arm). The hypertube craft already routes through create:sequenced_assembly. No further weave is coherent — it is a pure transport network that moves players/entities, not materials; forcing a magic or survival edge would be arbitrary. A deeper aeronautics integration (M-24 drivetrain) was considered: the hypertube entrance is kinetic-driven but it's a lateral transport device, not a propulsion component — REJECT M-24 would be category error.
- from: hypertube entrance/accelerator (kinetic transit node) | via: M-31 logistics-required bulk good framing | to: aeronautics/economy | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: M-31 applies to goods that require transport at scale; the hypertube moves people, not bulk goods — the motif doesn't apply here. REJECT.

## securitycraft   [anchors: support (1)]

- from: securitycraft reinforced block recipe (block_reinforcing_recipe consumes a vanilla/modded block) | via: securitycraft:block_reinforcing_recipe gated on Create-made parts as co-ingredient | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Reinforcing a block to owner-only hardness is a mid-tier base-defense unlock; requiring a Create-fabricated component (e.g. a zinc plate or sturdy sheet) as the "bonding agent" in the reinforcing recipe gates base hardening behind the Create tech spine — defense players need a Create producer.
- from: securitycraft:sentry / securitycraft:keycard_reader (automated defense gear) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: High-end sentry turrets or keycard access panels require precision — gating their recipe behind create:mechanical_crafting (precision mechanism, electron tube) makes automated base defense a Create output, tying the security pillar to the tech spine.
- from: securitycraft high-tier devices (block_pocket_manager, sentries) | via: MineColonies research | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: A colony Barracks or Guard Tower research could unlock blueprint-level securitycraft devices — defense scales with colony investment, making base hardening a colony route exclusive alongside the Create-parts route. Colony and Create become two non-overlapping ways to unlock advanced defense.
- from: securitycraft loot tables (loot=yes) | via: loot-seed | to: survival/economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: securitycraft's loot tables are for its own placed mines/traps — seeding third-party drops there would be thematically odd (looting a mine for magic reagents?). REJECT — loot here is the mod's own trap content, not a natural chest-chest exploration context.
- REWORK: dossier candidate "economy via Numismatics — gate reinforcing on traded metals as M-08" — this is partially mis-framed (coin-sink would be NPC-ish unless it's a player-to-player supply chain). The correct framing is M-29 cross-route dependency: if reinforcing requires a scarce regional metal (M-30) plus a Create part, the demand for that metal gates the base-defense supply chain, pulling the economy into it without an NPC faucet. REWORK the dossier candidate; the Create gating (M-05) accepted above is the cleaner first move.

== CHUNK COMPLETE ==
