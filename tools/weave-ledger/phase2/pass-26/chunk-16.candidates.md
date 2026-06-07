# Phase 2 candidates — chunk-16

## justenoughbreeding   [anchors: support/QoL (1)]
LEAVE — pure JEI plugin; zero items/blocks/material flows. No content surface to weave.

## createblockchain   [anchors: economy, Create (2)]
OK — connections sound. The FE→coin faucet (economy) built via create:mechanical_crafting/mixing (Create) is a coherent 2-anchor story. The geode scarcity of Mining Cores gives it a real constraint rather than a free faucet. No new anchor is strictly needed; the one candidate worth noting:

- from: createblockchain:currency_miner (FE demand) | via: createaddition:charging / FE from processed scarcity | to: Create | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: this is a refinement of the existing Create anchor (make the FE route explicit through TFMG/Create-Addition), not a new system anchor — it deepens Create↔economy but adds no third pillar; record as a depth-note, not a new weave candidate
- from: createblockchain:mining_core (worldgen geode consumable) | via: loot-seed into geode chest | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Mining Cores are already consumed by the miner; a seasonal loot-seed on geode chests (core rarity boosted in summer, reduced in winter?) could touch survival, but the geode generation is itself already scarcity-gated and a seasonal overlay on a worldgen ore is thin — no-motif for this specific angle, forcing it

REWORK: existing economy link is sound but the dossier notes "FE from Create-side" as the connection — worth confirming that the miner's FE port is actually served by createaddition or a TFMG generator (not just a creative source) before Phase 3; flag for playtest.

## do_a_barrel_roll   [anchors: support (1)]
LEAVE — pure client camera/movement behavior mod; zero items, zero material flow, zero recipe types. No content surface to weave.

## betterbiomereblend   [anchors: support (1)]
LEAVE — client-only color-blend renderer; zero items/blocks, no material flows. Genuine zero-surface library.

## createfisheryindustry   [anchors: Create, survival (2)]
OK — Create (kinetic peeler/traps built via create:*) + survival (food output + diving gear) is solid. Review for a third weave:

- from: createfisheryindustry:fish_skin (leather-substitute c:tag output) | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish_skin as a pressed leather substitute is already implicit in the Create anchor (pressing is an existing inbound method); adding it explicitly is a depth note, not a new system anchor — stays within Create
- from: createfisheryindustry:seafood_chowder / cooked_lobster / steaks (high-effort processed seafood) | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Seafood being sellable adds nothing structural; no loop-closing sink or scarcity-gating node
- from: createfisheryindustry:fish_skin | via: ars_nouveau:imbuement (fish-scale attunement reagent) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw fish skin, a byproduct of the cannery line, is imbued with water-attuned source — the fishery feeds the magic lab as well as the kitchen; players with a cannery naturally supply an Ars reagent, binding the two specializations. Fish-scale/aquatic theme is coherent with water-attuned Ars glyphs. Power is everyday (fish_skin is abundant if you have a trap line), so a single imbuement step is proportionate.

REWORK: none — existing Create + survival anchors are well-grounded.

## yet_another_config_lib_v3   [anchors: support (1)]
LEAVE — config-screen API library; zero items/blocks, no material flows. Genuine zero-surface library.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors:*_iron_door / metal-family variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a metal door stripped of its frame crushes back to scrap — the same recycling logic that applies to any fabricated metal object; players salvage old doors on the Create line rather than voiding them. M-04 (lossy deco recycle) is designed for exactly this case. One light step, proportionate for everyday deco.
- from: mcwdoors:*_barn_door / *_stable_door / wooden families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden door variants have negligible raw-material value; crushing wood deco to sawdust/sticks is mechanically thin and adds no loop pressure — the metal variants are the ones worth the recycling edge; don't extend the crush sweep to all 246 variants wholesale

REWORK: The dossier flags this as a "candidate for a deco-family pass wholesale" — that is correct framing. Do the iron/metal-door variants only; skip wood.

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert readable item with no mechanics, crafting, or world interaction. A forced recipe edge would be noise; sanctioned novelty anchor.

## foodeffecttooltips   [anchors: support (1)]
LEAVE — tooltip-rendering only; zero items/blocks, no material flows. Genuine zero-surface client mod.

## sable   [anchors: support/library (1)]
LEAVE — physics engine library; zero items/blocks, no material flows. The weaving happens in mods that build on it (aeronautics). Genuine zero-surface infrastructure.

## xaeroworldmap   [anchors: support (1)]
LEAVE — client map UI; zero items/blocks, no material flows. Genuine zero-surface client mod.

## moreoverlays   [anchors: support (1)]
LEAVE — client HUD overlays; zero items/blocks, no material flows. Genuine zero-surface client mod.

## aeronautics   [anchors: aeronautics (1); Create de-facto 2nd]
The dossier lists several strong 2nd-anchor candidates; evaluate each:

- from: aeronautics:levitite_blend_bucket / aeronautics:levitite (zinc-gated bulk lift material) | via: numismatics sell / mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Levitite being sellable is trivially true of any scarce processed material; the scarcity is real but "sell it" is not a structural loop link
- from: aeronautics:levitite_blend → levitite crystallization step | via: ars_nouveau:imbuement catalyst (Ars source adjacent, KubeJS gate) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the mysterious mineral that defies gravity requires a thread of arcane infusion to crystallize from the blend — the magic lab isn't just a consumer of Create outputs, it gatekeeps the sky. This makes the aeronautics tier require at least one player touching magic, a structural specialization lock. Theme fits (levitite as arcane-anomaly mineral). The delivery is a KubeJS modification of the in-world crystallization step to require a source-gem or ars reagent adjacent — confirmed feasible since the step is code-driven and already targeted for future KubeJS work.
- from: aeronautics:adjustable_burner (hot-air envelope lift) | via: tag extension to accept tfmg:diesel/gasoline | to: Create (deepens TFMG↔aeronautics) | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the dieselpunk refinery doesn't just power your factory — it fuels the airship fleet. Hot-air burners accepting refined fuel means a fuel-supply chain from TFMG's oil derricks to the sky. Tag-JSON only (no KubeJS needed). This is the M-13 fuel→propulsion link confirmed in the dossier.
- from: simulated:engine_assembly / portable engine (create:sequenced_assembly endgame) | via: tfmg:industrial_blasting (steel engine block as a component) | to: Create | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: a portable ship engine needs an industrially blasted steel housing before the Create sequenced assembly can finish it — the factory and the shipyard are one supply chain. TFMG hot_blast/industrial_blasting gives steel, steel feeds the engine_assembly chain. Proportionate depth for an endgame propulsion item.
- from: simulated:rope_coupling / simulated:contraption_diagram | via: config/design — docking nodes at Numismatics trade posts | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: this is an emergent design/server-config idea, not a recipe weave; no deliverable Phase-3 action exists (it's a "build your docking post here" social note, not a KubeJS/datapack action)
- from: offroad:tire (dyeable, addon) | via: numismatics trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no per ledger); dyeable cosmetic tires as trade goods is low-signal regardless

REWORK: aeronautics anchor is correct but the Create de-facto 2nd needs to be formalized — the dossier says "Create is a de-facto 2nd (zinc/brass/gyro-mechanism/casing all Create)"; Phase 3 should mark Create as a confirmed second anchor when the existing sequenced_assembly + mixing inbound weaves are authoring targets.

## balm   [anchors: support (1)]
LEAVE — multi-loader abstraction library; zero items/blocks, no material flows. Genuine zero-surface library.

## owo   [anchors: support (1)]
LEAVE — GUI/config library; zero items/blocks, no material flows. Genuine zero-surface library.

## collective   [anchors: support (1)]
LEAVE — shared code library; zero items/blocks, no material flows. Genuine zero-surface library.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled:* (chiseling recipe groups — 3627 decorative block variants) | via: rechiseled+rechiseledcreate kinetic Mechanical Chisel | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel (rechiseledcreate, already in pack) runs chiseling recipes on Create rotation — the entire decoration palette is powered by the spine, and a builder's workshop needs a running Create line to mass-produce decorative variants. This is already identified as the STRONG candidate in the dossier and the companion mod is confirmed in-pack; the link just needs to be stated as a formal proposal so Phase 3 can confirm rechiseledcreate is wired and rechiseled gains Create as 2nd anchor.
- from: rechiseled stone/metal variants | via: create:crushing (M-04 lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Mechanical Chisel weave already covers Create↔rechiseled via the processing side; adding a separate crush-recycle on top of the kinetic-chisel weave is redundant — the stronger delivery (kinetic processing) subsumes it

REWORK: none — existing decoration anchor is sound; M-04 via rechiseledcreate is the correct 2nd-anchor delivery.

## xaerominimap   [anchors: support (1)]
LEAVE — client minimap UI; zero items/blocks, no material flows. Genuine zero-surface client mod.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore (c:ores/salt) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt is a mundane ore that the Create crushing line processes the way it processes any mineral — doubling yield and feeding the cooking chain downstream; the Millstone or Crushing Wheels become the standard salt-production route. One light step, everyday power, proportionate. Salt is not a magic reagent (no ownership conflict).
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (time-gated aging) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Aged cheese being sellable is trivially true; no structural loop close.
- from: expandeddelight:cinnamon (c:dusts/cinnamon) | via: ars_nouveau:imbuement (warm/fire-attuned reagent) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon dust, a spiced agricultural byproduct, has latent thermal essence — imbuing it concentrates that into a fire-adjacent source reagent. The farm feeds the lab: a survival crop becomes a magic input, linking the two pillars across the kitchen. Everyday power → one imbuement step is correct depth. Cinnamon is not a reserved reagent; tone fits (spice/warmth → fire-attuned Ars).
- from: expandeddelight:chili_pepper / expandeddelight:asparagus (new crops with seasonal biome growth) | via: serene seasons gating (harvest only in appropriate season) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: chili peppers ripen only in hot-season warmth; asparagus is a spring vegetable. Gating their field yields (or at least their wild-spawn loot) to the appropriate Serene Seasons season adds seasonal pressure to the food chain — the cook can't always get these ingredients, so the economy of preserved/processed food matters. Delivery: config-tie or datapack biome-temperature gating on crop growth speed. M-16 is accepted; the dossier explicitly notes the pack wants more of these.

REWORK: none — survival anchor is sound; the three accepted links give it Create (ore crushing), magic (cinnamon imbuement), and survival deepening (seasonal crops) — a well-woven mod.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (distilled fuels, c:fluids) | via: aeronautics adjustable burner fuel tag / combustion engine → Aeronautics propulsion | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the refinery's output doesn't stay in the factory — the diesel line from the distillation tower runs to the airship dock. TFMG's fuel is the canonical supply for the aeronautics fleet's propulsion (M-13 accepted, refinery→engine is the core loop-advance from Create production to aeronautics logistics). Strong structural link; delivery is tag JSON (extend aeronautics burner/engine fuel tag to tfmg fuels).
- from: tfmg:steel / tfmg:cast_iron (blast-furnace alloys, c:ingots/steel) | via: aeronautics M-23 structural alloy → airframe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plates from the blast furnace are the structural skeleton of a serious airship hull — you don't build a flying machine from andesite; TFMG's industrial process gates the mid-tier and higher airframe tiers. Delivery: recipe (KubeJS/datapack gating airframe/hull recipes behind tfmg:steel_plate or c:ingots/steel). M-23 is accepted; this is the intended use.
- from: tfmg:aluminum (bauxite → aluminum via industrial_blasting, c:ingots/aluminum) | via: aeronautics M-23 lightweight hull/component | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: high-tier ships use aluminum hulls — lighter than steel, requiring the full industrial chain (bauxite ore → alumina → aluminum). A third aeronautics tier, properly deep for an endgame build. Delivery: recipe gating a higher airframe tier behind tfmg:aluminum. Proportionate (endgame material → endgame hull).
- from: tfmg:plastic (vat-processed synthetic, c:ingots/plastic) | via: create:sequenced_assembly (insulated wiring harness or control surface skin) | to: Create/aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the control surfaces and wiring of a sophisticated ship need plastic insulation — the vat-chemistry chain produces the component that the sequenced assembler installs into the control block. A fourth material from TFMG threading into aeronautics drivetrain. Delivery: recipe (plastic as ingredient in aeronautics control block or sensor assembly, via sequenced_assembly or mechanical_crafting). M-24 (mechanical component → propulsion/control).
- from: tfmg:combustion_engine / generators (FE sources) | via: createblockchain currency_miner FE intake | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the refinery doesn't just move goods — it mints money. A TFMG combustion engine or generator plugged into the createblockchain Currency Miner turns refined fuel into coins at scale, linking the industrial tier to the economy's money supply. This is structurally distinctive (the loop closure is fuel → FE → coin, a multi-step chain that requires the full refinery, not just "sell steel"); M-08 (coin from processed scarcity) fits.
- from: tfmg:steel / tfmg:fuels (high-effort processed outputs) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The combustion-engine→createblockchain→coin link above is the structural economy anchor; bare sell of steel/fuel adds nothing to it.
- from: tfmg biomass / plant-matter vat input | via: survival crop/harvest feeding the vat | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the bioplastic and biomass vat chain needs bulk plant matter — the farm isn't just feeding players, it's feeding the factory. Crop surpluses from MineColonies fields flow into TFMG's vat, closing the loop from survival pressure (grow enough to eat AND to fuel industry). Delivery: config/tag ensuring tfmg:vat_machine_recipe accepts common crop tags (wheat/potatoes/sugar cane already likely accepted — verify). M-12 (processing-chain pull).

REWORK: Create anchor is sound (deep inbound from create:crushing/mixing/sequenced_assembly). The dossier's aeronautics candidate (diesel/engines) and economy candidate (processed scarcity) are both covered above with correct motifs.

== CHUNK COMPLETE ==
