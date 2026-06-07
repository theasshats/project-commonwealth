# Phase 2 candidates — chunk-05

## createfurnitureseats   [anchors: support + aeronautics (2)]
- LEAVE — genuine zero-content compat bridge; no items, no recipes, no material surface. Already touches aeronautics (sittable furniture on Sable sub-levels). Forcing any production/economy edge would be meaningless.
- OK — connections sound (support + aeronautics is the correct read).

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — pure client-side render optimization; no items, no loot, no material graph. Genuine zero-content library.

## just_blahaj   [anchors: decoration/flavor (1)]
- LEAVE — 31 decorative plush variants crafted from vanilla wool/dye; no processed material, no method to route through, no loot table of weave significance. Forcing a Create or magic edge here is the failure mode the briefing warns against. Pure curated flavor.

## immersive_armors   [anchors: survival (1)]
**Power-read:** 10 armor sets ranging everyday (Bone/Wooden) to mid-tier (Prismarine/Slime) to endgame (Heavy/Divine/Steampunk). The Steampunk and Heavy sets are the natural depth candidates; Bone is everyday and must not be gated heavily.

- from: immersive_armors:heavy_chestplate (mid/endgame armor) | via: create:mechanical_crafting | to: create | motif: M-05 | power: endgame | tone: ok — "Heavy armor needs machine-pressed plate" is completely coherent for a Create pack | verdict: ACCEPT | hook: Heavy and Steampunk sets require Create-pressed steel/brass plates in mechanical_crafting, tying the combat loadout to the tech spine.
- from: immersive_armors:divine_chestplate (endgame Divine set) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok — the Divine set (blocks one hit per minute) reads as arcane; finishing it through an enchanting apparatus is thematically obvious | verdict: ACCEPT | hook: The Divine set's passive implies magical warding — completing it via Ars apparatus ties a combat armor tier to the magic web.
- from: immersive_armors:emerald_chestplate (mid-tier) | via: numismatics mint / sellable | to: economy | motif: M-09 (RETIRED) | power: mid | tone: n/a | verdict: REJECT | reason: M-09 retired; bare sell link is the ambient endpoint, not a weave. Economy link only counts when it gates demand.
- REWORK: dossier candidate "economy via numismatics" cites M-09 (retired) — discard it. The two ACCEPT entries above cover the natural 2nd anchors.

## createaddoncompatibility   [anchors: support (1)]
- LEAVE — pure unification-rules compat layer; no items, no loot, no method surface of its own. Already serves the Create spine by collapsing addon duplicates; no coherent 2nd anchor exists without forcing.

## immersivearmorhud   [anchors: support/client (1)]
- LEAVE — client-only HUD display; no items, no recipes, no material graph. Genuine zero-content support mod.

## drones   [anchors: aeronautics (1)]
**Power-read:** Wood_rotor = early/everyday; iron_rotor = mid; ion_thruster = endgame. The controller+frame is mid-tier. The ion thruster is the natural depth target; wood rotor must not be gated.

- from: drones:ion_thruster (endgame thrust tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok — an ion thruster that provides flight is exactly the kind of multi-stage Create manufacturing piece; "sequenced assembly for the ion drive" a player would nod at | verdict: ACCEPT | hook: The ion thruster is a precision flight component — sequenced assembly (brass casing, gear, winding step) earns its power tier.
- from: drones:iron_rotor (mid-tier thrust) | via: create:pressing | to: create | motif: M-05 | power: mid | tone: ok — pressing a metal plate into a rotor disk is a one-step Create weave appropriate for mid-tier | verdict: ACCEPT | hook: Iron rotors need Create-pressed iron plates, keeping drone tiers threaded through the tech spine at the right depth.
- from: drones:pocket_drone (equipped item) | via: bare sell / numismatics | to: economy | motif: M-09 (RETIRED) | power: mid | tone: n/a | verdict: REJECT | reason: M-09 retired; "drone as a sellable good" is the ambient endpoint, not a demand-gating weave.
- REWORK: dossier candidate "economy via pocket_drone → coin" cites M-09 (retired) — discard. The two Create-depth links above are the correct 2nd anchor.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — animation/entity API with no content; genuine zero-surface library. Required dependency only.

## bookshelf   [anchors: support/library (1)]
- LEAVE — mod-dev utility library (Darkhax); no player-facing items, no recipes, no loot. Genuine zero-content library.

## collective   [anchors: support/library (1)]
- LEAVE — shared-code library (Serilum); no items, no loot, no material graph. Genuine zero-content library.

## underground_village   [anchors: survival (1)]
**Power-read:** loot=yes; the Stoneholm structure itself is the content surface — a discoverable underground settlement with vanilla villagers and loot chests.

- from: underground_village loot chests | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok — seeding Numismatics coins into Stoneholm chest loot makes the underground village an in-world economy node (players find coin; they don't manufacture it from scratch here — that's M-08's player-minted angle, but a loot-seed putting coin into the world is a coherent scarcity-anchored economy tie) | verdict: REJECT | reason: M-08 is player-minted currency (scarce ore → Create processing → pressed into coin by players). Seeding coins into loot would be an NPC coin faucet, which is exactly the M-14/M-21 pattern that was CUT. Loot chests inserting pre-minted coin bypasses the player-minting requirement. REJECT.
- from: underground_village loot chests | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok — seeding an Ars Nouveau or Occultism reagent/book fragment into Stoneholm chests ties exploration rewards to the magic web; finding a scattered source_gem or spell glyph in a subterranean village is thematically consistent | verdict: ACCEPT | hook: Exploration of underground settlements occasionally yields a magic reagent (Ars glyph scroll, Occultism ritual fragment), making the world's hidden places feed the magic web.
- from: underground_village villager trades | via: config-tie (villager profession/trade list) | to: economy | motif: M-33 | power: everyday | tone: ok — Stoneholm villagers offering a service (e.g. enchanting for goods, trading specific crafted items) is a player-economy service node rather than an NPC coin faucet; the trade is goods-for-goods or goods-for-work, not coin vending | verdict: ACCEPT | hook: Underground village specialists offer goods-for-goods or service trades, making exploration of Stoneholm settlements an economy node that routes through the player-run trade web.

## jeed   [anchors: support/client (1)]
- LEAVE — JEI display provider only; its two "recipe-types" (jeed:effect_provider, jeed:potion_provider) are viewer display categories, not processable methods. No content, no material graph. Genuine zero-surface support mod.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — client-only zoom/keybind tweak on the vanilla spyglass; no items, no recipes, no material graph. Genuine zero-content support mod.

## sablecollisiondamage   [anchors: support/aeronautics (1)]
- LEAVE — physics behavior addon for Sable ships; no items, no loot, no material graph. Already correctly serves the aeronautics pillar. No coherent 2nd anchor without forcing.

## createnuclear   [anchors: create (1)]
**Power-read:** uranium/steel are mid-to-endgame; reactor_core is endgame. Anti-rad gear is mid-tier. The steel alloy (c:ingots/steel) is shared and everyday-useful to many addons. Uranium fuel chain is deep.

- from: createnuclear:uranium (regional ore) | via: GTMOGS regional ore-gen | to: economy | motif: M-30 | power: endgame | tone: ok — uranium being region-locked forces the nuclear-power specialist to trade for it; the reactor fuel chain then locks SU behind regional dependency | verdict: ACCEPT | hook: Uranium veins are region-locked; the reactor specialist must trade for ore or fuel, making nuclear SU a node in the regional economy rather than self-sufficient power.
- from: createnuclear steel (c:ingots/steel) | via: create:pressing / sequenced_assembly downstream use | to: create | motif: M-32 | power: mid | tone: ok — steel is a byproduct/co-output of the nuclear chain (lead+steel from reactor processing) that feeds other Create-addon recipes needing c:ingots/steel (airframes, structural parts) | verdict: ACCEPT | hook: Nuclear processing yields steel as a side-stream; that steel feeds the structural supply chain (M-23/airframe recipes), closing the byproduct loop.
- from: createnuclear:anti_radiation gear | via: ars_nouveau:enchanting_apparatus or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: clash — radiation shielding as arcane infusion feels forced; hazmat is an industrial concept, not a magical one; the tone clash is real | verdict: REJECT | reason: Tone clash — anti-radiation gear is industrial/tech; routing it through arcane infusion contradicts both mods' aesthetics. No natural motif survives the red-team.
- from: createnuclear (reactor SU output) | via: aeronautics engine intake | to: aeronautics | motif: M-13 | power: endgame | tone: ok — a nuclear-powered airship drive (reactor SU → aeronautics engine) is coherent thematically and mechanically; SU → engine is the standard Create propulsion path | verdict: ACCEPT | hook: A reactor-powered airship is the endgame aeronautics milestone — nuclear SU feeds the engine intake, making the reactor a late-game propulsion source.
- REWORK: dossier candidate "economy via numismatics mint (M-08)" — uranium/steel as coin feedstock is borderline; M-08 requires a scarce regional metal → Create-processed → player-pressed into coin. Uranium qualifies if it's region-locked (M-30 above), but the dossier listed M-08 AND M-09 together; the M-09 component is retired. The M-30 (regional scarcity gate) is the stronger and cleaner economy anchor. The M-08 (player-minted coin from steel/uranium via Create processing) remains valid as a secondary economy tie — retain if desired, but M-30 is the primary weave.

## configuration   [anchors: support/library (1)]
- LEAVE — config-screen library (Fzzy); no player-facing items, no recipes, no loot. Genuine zero-content library.

## create_new_age   [anchors: create (1)]
**Power-read:** basic_motor/energiser = mid; advanced_motor = endgame; thorium_ore = endgame; wires/generators = mid. The `energising` recipe method is the key weave surface — it converts rotation+FE+item into an energised output.

- from: create_new_age:energising (method) → endgame keystone item (e.g. aeronautics controller / magic focus) | via: create_new_age:energising | to: aeronautics | motif: M-06 | power: endgame | tone: ok — "energised" components for high-tier aeronautics control surfaces reads naturally in a Create-electric pack | verdict: ACCEPT | hook: Aeronautics control surfaces and high-tier propulsion components require an energised step (Create-electric), making Create New Age's power tier a prerequisite for advanced flight.
- from: create_new_age:energising (method) → magic focus/reagent | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok — charging a magic focus or spell catalyst through the FE energiser is exactly what M-17 describes; electricity bridging into magic gear | verdict: ACCEPT | hook: An Ars Nouveau wand focus or Iron's Spellbooks scroll is "energised" before use, bridging the electric tier into the magic web.
- from: create_new_age thorium_ore (regional) | via: GTMOGS ore-gen (2 biome-modifiers) | to: economy | motif: M-30 | power: endgame | tone: ok — thorium being region-specific creates a reactor-fuel dependency that forces trade between regions | verdict: ACCEPT | hook: Thorium is region-locked; the nuclear specialist must trade for fuel, and reactor heat/SU becomes a regionally scarce commodity.
- REWORK: dossier candidate "economy via numismatics (M-08, WEAK)" — this is the ambient endpoint for energised products; REJECT as bare sell. The M-30 (thorium regional scarcity) is the correct economy anchor.

## foodeffecttooltips   [anchors: support/QoL (1)]
- LEAVE — client-only tooltip renderer; no items, no recipes, no material graph. Genuine zero-content support mod.

## modulargolems   [anchors: create (1)]
**Power-read:** wood/iron golem bodies = everyday/mid; boss-metal bodies (dragonsteel, cursium) = endgame; the golem_workbench + part templates are mid. Already uses create:sequenced_assembly (Create anchor is well-established).

- from: modulargolems golem body (boss-metal tier — cursium/dragonsteel) | via: modulargolems:golem_assemble | to: survival | motif: M-02 | power: endgame | tone: ok — assembling a golem from a boss-tier metal (Ice&Fire dragonsteel requires boss kill; Cataclysm cursium same) means the best golems are combat-route rewards | verdict: ACCEPT | hook: A Dragonsteel or Cursium golem body requires killing the source boss — the best constructs are gated behind the combat specialist's drops, not craftable from scratch.
- from: modulargolems golem (magic upgrade slot) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok — a golem-core upgrade that requires an imbuement step (ars source_gem or occultism spirit fire to "animate" the construct's soul) is thematically plausible for golemancy | verdict: ACCEPT | hook: A golem's animating core is imbuement-finished — the construct requires a spark of arcane life, tying golemancy to the magic web.
- REWORK: dossier's "magic via golem_assemble [WEAK, M-10/M-11]" is flagged weak but is actually coherent (golemancy = construct animation = arcane life); upgrade to ACCEPT-candidate rather than leaving it as WEAK. The ACCEPT above reflects this.

## oceansdelight   [anchors: survival (1)]
**Power-read:** Raw seafood drops = everyday; prepared dishes (elder_guardian_roll, fugu_slice) = mid; elder_guardian_soup/slab = endgame (Elder Guardian kill required).

- from: oceansdelight:elder_guardian_roll / oceansdelight:elder_guardian_slab | via: farmersdelight:cooking | to: economy | motif: M-26 | power: endgame | tone: ok — elder guardian dishes restore high hunger and grant buffs; consumed against pressure (diet variety for Diet mod; combat sustain), so demand never zeroes out | verdict: ACCEPT | hook: Elder guardian seafood is a high-nutrition combat/diet food that gets consumed against survival pressure, keeping the fishing/ocean specialist in continuous demand.
- from: oceansdelight:fugu_slice (risk food — poison chance) | via: farmersdelight:cooking chain | to: magic | motif: M-12 | power: mid | tone: ok — pufferfish/fugu as a poison-extract intermediate for Occultism rituals or Ars brewing is thematically coherent (toxic ingredient as reagent); fugu_slice routed through a processing chain into a poison reagent | verdict: ACCEPT | hook: Fugu flesh is processed (cutting board → fugu_slice → extract step) into a poison reagent for Occultism ritual ingredients, tying the ocean kitchen to the magic web.
- from: oceansdelight dishes | via: numismatics / bare sell | to: economy | motif: M-09 (RETIRED) | power: mid | tone: n/a | verdict: REJECT | reason: M-09 retired. "Coast specialist sells seafood dishes to inland" is the ambient endpoint, not a demand-gating weave. The M-26 (consumption sink) above is the correct economy-adjacent anchor.
- REWORK: dossier candidates M-09 (retired) and bare-sell "economy/Create" links should be replaced with the M-26 consumption-sink angle (sustained demand from diet variety pressure) and M-12 processing-chain pull for the fugu/poison-reagent route.

== CHUNK COMPLETE ==
