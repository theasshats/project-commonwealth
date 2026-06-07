# Phase 2 candidates — chunk-15

## mru   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); pure code-sharing library for itsmineblock11 mods. No material surface to route through any method.

## resourcefullib   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); pure cross-platform API/utility library. No material surface to route through any method.

## yungsapi   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); jigsaw/structure tooling API for YUNG's mods. No material surface; all weave potential lives in the dependent YUNG structure mods, not here.

## configuration   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); config-screen GUI library. No material surface to route through any method.

## voicechat   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); proximity voice-chat infrastructure. No material surface; weaving would be purely contrived.

## crash_assistant   [anchors: support (1)]
- LEAVE — zero player-facing content (0 blocks, 0 items, loot=no); client crash-diagnostics utility. No material surface to route through any method.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — no items/blocks (0 blocks, 0 items, loot=no); sleep/rest-buff mechanic only (status effects applied to player). Pairs thematically with temperature and seasonal survival but offers no material join key — any connection would be a contrived config-tie with no player-legible hook. The well-rested buff is a survival pressure signal, not a connectable resource.

## born_in_chaos_v1   [anchors: survival (1)]
Power-read: dark_metal is a mid-tier material (bench-crafted mob drops from ~7–16% rare kill drops, not mineable); boss weapons (Soul Saber, Great Reaper Axe) are endgame-adjacent. bundle_of_bones is an everyday drop block. loot=yes (dungeon/structure loot potential). Spooky-gothic vibe; graveyard/soul aesthetic.

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal ore runs through the crusher like any other metal — the spooky forge feeds the same industrial pipeline, doubling yield with a sinister dust byproduct.
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: The haunted bone bundle is ritual kindling — burning it in spirit-fire transmutes it into a necromantic reagent intermediate, connecting the undead kill-loop to the occult pillar.
- from: born_in_chaos_v1:dark_metal (boss-drop weapons / Soul Saber) | via: bountiful board + numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bounty boards call for proof of the chaos incursions; dark metal blades and boss drops are the receipts, paying out coin and converting the danger loop to trade goods.
- from: born_in_chaos_v1:bagof_candy / seasonal Pumpkinhead loot | via: loot-seed | to: economy | motif: M-14 (provisional motif) | power: everyday | tone: ok | verdict: ACCEPT | hook: Pumpkinhead's seasonal chest drops include the candy bag as a time-limited collectible; seeding it into the loot table as a rare trade item links seasonal danger to the coin economy.
- from: born_in_chaos_v1:dark_metal | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal passed through the soul-fire haunt process gains a spirit-infused cursed quality — a natural Create→occult bridge using metal already steeped in undead lore.
- from: born_in_chaos_v1:argillite blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco-block recycling back to raw material; argillite is primarily a build palette, not a processed material — crushing it to gravel/dust is coherent but adds little loop-value; the dark_metal M-03 edge already anchors Create, and adding argillite crushing is redundant depth-padding for a basic block. Low ROI; keep Create anchor tight to the metal edge.
- from: born_in_chaos_v1:great_reaper_axe (boss weapon) | via: cataclysm:weapon_fusion | to: survival | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: No motif covers "cross-mod boss weapon fusion into cataclysm's anvil" and the tone pairing (Halloween-spooky born_in_chaos + dark-fantasy Cataclysm) is workable but the fusion target would be arbitrary — cataclysm's fusion path is for its own boss lineage. No-motif → reject-for-review.

OK — existing connection (survival) is sound. New edges add Create (M-03, M-19), magic (M-11), economy (M-14) — taking born_in_chaos to 3–4 anchors.

## gravestone   [anchors: survival (1)]
Power-read: 1 block (gravestone), 2 items (gravestone + obituary); loot=yes (the grave itself is a loot container). A death-QoL utility; no ore/reagent content. The obituary item is a record of death stats.

- from: gravestone:obituary | via: supplementaries:item_lore or recipe | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: "Sell your death report for coin" has no motif coverage and reads as forced flavor; the obituary is a QoL record, not a tradeable good. No-motif + tone: forced → reject.
- from: gravestone:gravestone (loot table) | via: loot-seed | to: economy | motif: M-14 (provisional motif) | power: everyday | tone: clash | verdict: REJECT | reason: Gravestone is a death-recovery vessel; seeding coin into its loot table (pay to loot your own grave?) inverts its utility design and is confusing to players. The recovery mechanic is anti-frustration; monetizing it creates a friction-punishment loop the mod was designed to prevent. Theme clash → reject.
- LEAVE — after exhausting candidates: the mod has 2 items total (gravestone + obituary) and its sole mechanic is inventory recovery. No material input/output, no processing surface. Any 2nd anchor requires forcing a connection the mod isn't built for. The single survival anchor is its correct role.

## railways   [anchors: Create, aeronautics (2)]
Power-read: 617 blocks, 1015 items; loot=yes; already uses create:mechanical_crafting + create:sequenced_assembly (inbound). Conductor caps, locometal stock, bench carts, semaphores. Mature 2-anchor mod.

REWORK check: Create + aeronautics is a strong, coherent pairing for a train-system add-on. The anchors are correctly assigned and the inbound recipe methods are appropriate (a train mod building on Create's assembly line is exactly right). No rework needed.

- from: railways:locometal blocks (structural steel-adjacent material) | via: aeronautics airframe construction | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: Locometal is a train-body building block, not a structural alloy for airframes; its role is already in the aeronautics pillar as train/rail logistics. Applying M-23 (airframe hull) to locometal would conflate train-rolling-stock with airship construction — tonally adjacent but functionally inappropriate. The aeronautics anchor is already carried by the rail-transport role; M-23 would be double-counting in a confusing way.
- from: railways:conductor_cap (completed caps) | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Conductor caps are a cosmetic crafting output, not a processed scarce good with economy loop significance. A vendor selling caps creates an economy edge but the trade is trivial (bench-craftable cosmetics); it doesn't meaningfully advance the scarcity→pressure→production→economy loop. Low value, skip.

OK — connections sound. Create + aeronautics (transport arm) is the right 2-anchor fit; no new edges needed.

## drones   [anchors: aeronautics (1)]
Power-read: 6 blocks, 7 items, loot=yes. Tiers: wood_rotor (basic, everyday-cheap) → iron_rotor (mid) → ion_thruster (endgame — power dense). Controller and frame are mid-tier support structures. The pocket_drone is equipped-item form; abilities come from which blocks you embed. Strong Create-recipe weave opportunity.

- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The ion thruster isn't a simple craft — it's a multi-stage precision assembly: brass casing stamped, precision parts inserted in sequence, charged in the rolling mill. A Create sequenced-assembly keystone gates the best drone tier behind the full Create spine.
- from: drones:iron_rotor | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron rotors are manufactured, not smithed — they require precise tolerances that only a mechanical crafter can hold. Mid-tier drone flight is gated on reaching Create's mechanical crafter tier.
- from: drones:controller | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The assembly controller is the brain of the drone operation; it takes brass internals and precision components only the Create mechanical crafter can produce, tying drone automation to the tech spine.
- from: drones:pocket_drone (fully assembled, drill variant) | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: A drone is player-built from assembled blocks, not a processed scarce good — pricing it as a vendor trade good is awkward (you'd have to pre-build and sell pocket drones, which conflicts with how the mod works: the assembly is personal, not factory-produced). The economy angle is mechanically incoherent given the block-assembly model. Reject.
- from: drones:wood_rotor | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: Wood rotors are the entry tier — per the cost model guardrail, basics should NOT be gated behind complex recipes. Wood rotor = everyday → one light step at most, not a mechanical crafter requirement. Accept iron/ion tiers (above) but not wood. Gate depth scales with power.

OK — aeronautics (1 anchor) is correct. New edges: Create via M-05 (iron_rotor + controller) and M-06 (ion_thruster) takes drones to Create + aeronautics (2 anchors).

## cataclysm   [anchors: survival (1)]
Power-read: 138 blocks, 301 items, loot=yes. Boss-drop materials (ancient_metal_ingot, Witherite, Ignitium, Cursium, Void Core) are true endgame — gated behind 8 distinct boss encounters. The weapon_fusion method (Mechanical Fusion Anvil) is a registered native recipe type. CLAUDE.md explicitly names cataclysm bosses as the canonical boss-drop tech gate.

- from: cataclysm:ancient_metal_ingot | via: create:crushing + create:pressing | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ancient metal — forged in pre-civilization fires — demands industrial treatment: crushed to shards, pressed to sheets. Reaching that recipe means defeating the Ancient Remnant; boss kill unlocks the processing chain, and the chain unlocks late-tier Create components. The DESIGN's on-ramp: combat → tech.
- from: cataclysm:witherite_ingot | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Witherite — harvested from the Netherite Monstrosity — is too unstable for a bench recipe. Only sequenced assembly, with precise timing and interlocking steps, can shape it into a usable alloy component. The hardest boss feeds the deepest Create chain.
- from: cataclysm:cursium_ingot / cataclysm:void_core | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Cursium is the residue of souls bound in dark ritual; passing it through occultism's spirit fire is transmutation, not smelting — and the result is a high-tier necromantic reagent unavailable any other way. Two endgame pillars intersect at the darkest material in the pack.
- from: cataclysm:ignitium_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ignis's volcanic metal holds latent fire-arcana; soaking it in an imbuement ritual draws out the elemental charge and produces a fire-magic reagent that no mundane process can extract. Boss material → arcane infusion → magic fuel.
- from: cataclysm:ancient_metal_ingot / boss trophy drops | via: numismatics vendor | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: The rarest metals in the world command the highest prices; a Numismatics vendor priced in crowns/suns reflects true scarcity — boss fighters become the pack's most specialized suppliers.
- from: cataclysm:amethyst_crab_meat (blessed) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: Blessed Amethyst Crab Meat is obtainable only at the non-craftable Altar of Amethyst inside the Sunken City — cooking it is thematically fine, but the item is purpose-built as a status-effect consumable for a specific boss encounter (Leviathan Darkness immunity). Routing it into general cooking is trivially coherent but doesn't advance the loop; its role is already survival (boss prep). No meaningful new pillar connection; skip this for focus.
- from: cataclysm:azure_seastone blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Seastone is a dungeon build-palette block; crushing it to rubble/gravel is technically M-04 (deco→Create recycles), but seastone is deep in a biome-specific dungeon — a player who has ancient_metal_ingot will not be recycling seastone bricks. Low value / wrong depth for the tier. The M-15/M-06 boss-ingot edges are the right endgame Create connections.

REWORK: survival (1) is correct but thin — cataclysm is the pack's endgame pressure spike. The existing connection is sound; new edges add Create (M-15, M-06), magic (M-11, M-10), economy (M-08) — net 4 pillars, well above the target.

## pantographsandwires   [anchors: Create, aeronautics (2)]
Power-read: 101 blocks, 94 items, loot=yes; heavy Create inbound weave (6 recipe types incl. sequenced_assembly). Produces coal_coke (c:item/dusts/coal_coke) and graphite (c:item/ingots/graphite) as tagged intermediate materials. Overhead catenary infrastructure for electric trains.

REWORK check: Create + aeronautics is correct and the inbound recipe depth is substantial. No rework needed; connections are sound.

- from: pantographsandwires:coal_coke | via: tfmg:coking / create:mixing | to: Create | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: Coal coke is already an intermediate in pantographsandwires' own recipe chain (makes graphite/catenary parts) — using it as a fuel (M-13 aeronautics propulsion) is tempting since coke is a real-world locomotive fuel, but the mod already has Create + aeronautics at 2 anchors, and adding a fuel route for coke doesn't advance the loop further (coke fueling trains is implicit in the train infra already). Low incremental value; don't add edge.
- from: pantographsandwires:graphite | via: create_new_age:energising | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: Graphite has an electric/conductive vibe and c:ingots/graphite is a shared tag — an energy-charging role is plausible. However M-17 (FE charging bridge) specifically applies to charging tools/foci, and graphite-as-conductor is a materials tag, not a chargeable item. The motif doesn't fit cleanly; this would be a no-motif edge. Reject-for-review.
- from: pantographsandwires graphite blocks | via: create_enchantment_industry:grinding | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Graphite-ore-grinding is not a scarcity-ore-doubling situation — pantographsandwires makes graphite through its own industrial chain (coal_coke + pressing). M-03 is for raw ore → crushed doubling; this would be a downstream product, not an ore. Motif misfit → reject.

OK — connections sound. Two anchors well-justified; the coal_coke and graphite tags are available for other mods to pull (notably TFMG and createaddition's fuel chain), but no outgoing edge from pantographsandwires is needed.









