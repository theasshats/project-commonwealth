# Phase 2 candidates — chunk-17

## fxntstorage   [anchors: Create, survival (2)]
- from: andesite/copper/brass/hardened storage boxes & deco trims | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (lossy deco recycling) is technically composable, but the boxes are already Create-tier-gated UP a material ladder (made-by create:mechanical_crafting); crushing the metal box back to raw is the trivial inverse of its own crafting and adds nothing causal — redundant self-loop, not a cross-system advance.
- from: backpack flight/fall-damage upgrade modules | via: deploy/aeronautics gating | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: a worn personal gadget is not a wireable resource and the flight upgrade is personal mobility, not the economy's logistics arm (M-31 is bulk-good freight, not pocket flight). No motif fits; forcing an aeronautics edge here is the kind of "why is this that?" defect the brief warns against.
- OK — connections sound: Create (made-by create:mechanical_crafting, climbing andesite→brass) + survival (inventory/QoL under the survival loop) are both genuine and the material ladder already routes it through the Create spine. No REWORK needed.

## curios   [anchors: support (library) (1)]
- LEAVE — pure equipment-slot API; registers 0 blocks/0 items/no recipe types and carries no material to route. Its weave value is letting OTHER mods' rings/amulets (Ars, Iron's) exist; genuine zero-content code library.

## alternate_current   [anchors: support (1)]
- LEAVE — redstone-propagation performance patch; 0 items/blocks, pure behavior rewrite, no material surface. Sanctioned perf support role; nothing to weave.

## better_lib   [anchors: support (library) (1)]
- LEAVE — config/messaging shared-systems library; 0 content, dependency only. Genuine zero-surface code library.

## occultengineering   [anchors: Create, magic (2)]
- from: sterling_silver ingots/blocks (its c:tag material) | via: create:* processing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: sterling_silver here is a *processing intermediate inside the occult-automation chain*, not a region-scarce metal whose minting is a specialization; M-08 wants a scarce regional metal as the coin medium. The dossier itself flags this [WEAK]. Minting an internal alloy reads as arbitrary coin-faucet, and the player-run rework demands the medium be a scarce/regional thing (M-30-anchored), which sterling_silver is not established to be.
- from: spirit_solution (reserved occult intermediate) + automated occult dusts | via: occultism:ritual / occultengineering native | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: this is the mod's *own* anchor, not a cross-system pull — it already IS the M-05/M-11 Create×Occultism bridge. spirit_solution is reagent-owned (M-11) and reserved; re-routing it would be a double-spend, not a new weave.
- REWORK: none. OK — connections sound. By construction it is the canonical Create↔magic glue (inbound from both create:* AND occultism:ritual/spirit_fire); both anchors are load-bearing and correctly costed. The only candidate 2nd-economy edge (sterling_silver mint) is rejected above; the mod does not need a third.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — config-screen UI library (YACL); 0 content, client config plumbing only. Genuine zero-surface library.

## appleseed   [anchors: survival (1)]
- from: diet-variety demand (the five nutrient groups) | via: config/tuning (demand-driver, not a recipe) | to: production (Create/farming/cooking) | motif: M-26 | power: n/a (mechanic) | tone: ok | verdict: ACCEPT | hook: a balanced diet is standing demand — it keeps diverse crops, meat and cooked dishes continuously worth producing (pressure → production → trade, the loop in miniature). | NOTE: this is the *consumption/pressure* edge (M-26 demand-renewal, food face), authored as the mod's role, not a new recipe; it is the natural 2nd anchor (production-by-demand) the SYSTEMS model points at.
- from: high-nutrient / multi-group foods being valuable | via: numismatics sell | to: economy | motif: no-motif | power: n/a | tone: clash | verdict: REJECT | reason: the dossier's old M-09 "sellable food" line is exactly the retired bare-sell endpoint (economy is player-run, #163/#240) — "varied food has value" is the *ambient* loop endpoint, not a demand-gating weave. No surviving motif; REJECT-for-review.
- REWORK: the dossier's economy candidate cites the retired M-09 — drop it. The survival anchor is sound; its real 2nd anchor is the M-26 demand edge above (production-by-demand), which is genuine, not the sell link.

## jamlib   [anchors: support (library) (1)]
- LEAVE — Architectury-based platform/config library for JamCoreModding mods; 0 content. Genuine zero-surface library.

## numismatics   [anchors: economy, Create (2)]
- from: (it is the HUB, weaves point TO it, not from) | via: — | to: — | motif: M-08 | power: — | tone: ok | verdict: REJECT (as an *outgoing* edge) | reason: numismatics is the economy keystone and the settlement-medium destination — foreign scarce/processed metals route INTO it (M-08 player-mint), goods gate demand THROUGH vendors. Adding an outgoing weave from coins is backwards; coins are reagent-owned as the player-to-player medium. Leave as the sink.
- REWORK: the dossier's framing still cites "M-09 luxury-good→coin" and "sellable mod good routes here" — under the player-run rework that bare-sell framing is retired. The *correct* inbound framing is: M-08 (scarce metal → player-pressed coin) is the legitimate mint edge; vendors gate demand only via M-26/M-30/M-33 (player shops selling needed goods), never as an NPC coin faucet (M-14/M-21 cut). Re-tag inbound expectations to M-08/M-26/M-30, drop the M-09 wording. Both anchors (economy keystone + Create addon, crafted via Create) are sound.

## upgrade_aquatic   [anchors: survival (1)]
- from: raw fish (pike/perch/lionfish, c:item/foods/raw_fish) | via: farmersdelight:cooking / create:milling | to: survival (food web) → economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a netted pike isn't a meal — run it through the cooking/cutting chain into a finished dish, joining the pack's food web (and feeding diet variety, ties into appleseed's M-26 demand). | NOTE: light single-step processing, sized to everyday food; pulls an isolated aquatic-food mod into the shared cooking web (one of two webs the recipe graph should read as).
- from: cooked-fish / seafood dishes | via: numismatics sell | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: dossier's M-09 "luxury seafood sellable" is the retired bare-sell endpoint — not a demand-gating weave. The demand comes from diet variety (M-26 via appleseed), already captured by the food-web link; a bare sell edge adds nothing.
- from: driftwood/riverwood + coralstone deco | via: create:cutting / woodworks:sawmill | to: Create | motif: M-04/M-12 | power: everyday | tone: ok | verdict: REJECT | reason: it ALREADY routes its woods through woodworks:sawmill (existing inbound weave); adding a near-identical create:cutting edge for the same woods is duplicative, and crushing coralstone deco back to materials (M-04) is a trivial lossy inverse with no causal payoff. The food chain above is the meaningful 2nd anchor; this is redundant.
- REWORK: the dossier lists an M-09 economy candidate (sellable seafood) — drop it under the player-run rework. The survival anchor + the existing woodworks:sawmill wood routing are sound; the new genuine 2nd anchor is the M-12 food-cooking link above.

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure mixin/runtime compat patcher (0 items/blocks) making foreign mods ship-aware on Sable contraptions; REQUIRED per CLAUDE.md but a behavior glue with no material surface. Genuine zero-content support; nothing to weave.

## particlerain   [anchors: support (client/atmosphere) (1)]
- LEAVE — client-side weather/particle rendering only; 0 items/blocks, no material or method surface. A thematic pairing with Serene Seasons is flavor, not a method edge. Sanctioned client-ambience support.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: 16× dyed levitite + dyed tire variants | via: create:toolbox_dyeing / create:mixing (dye step) | to: Create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: this is a pure cosmetic color-permutation of base aeronautics parts (dye + tire → colored tire); the dossier itself calls a Create dye route "gilding." Decoration palette is already a sanctioned support role and the dye step rides vanilla dyes; forcing a Create edge onto a reskin layer is a non-edge.
- LEAVE — cosmetic dye-variant skin layer for Create Aeronautics; anchors to aeronautics (its host) as a decoration palette (sanctioned support). No coherent 2nd anchor — every candidate is gilding a reskin. Don't force.

## invtweaksemuforipn   [anchors: support (1)]
- LEAVE — client-only InvTweaks-keybind emulation shim over IPN; 0 content, pure client compat glue. Genuine zero-surface support.

## bundle_recipe   [anchors: support (QoL/vanilla-parity) (1)]
- from: minecraft:bundle (re-enabled vanilla recipe) | via: numismatics / logistics | to: economy/aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: this mod only re-adds the vanilla bundle crafting recipe (a datapack parity fix); the bundle is a vanilla everyday QoL container, not a mod good. Weaving a vanilla-parity recipe into a production/economy chain would gate a basic container behind complexity (guardrail violation) and there's no motif for "re-enable vanilla recipe." 
- LEAVE — vanilla-parity recipe enabler (0 items of its own, just restores minecraft:bundle); it is a QoL datapack, not a content mod with a material to route. Genuine zero-surface support role.

## smokeleafindustries   [anchors: survival (1)]
- from: generator burnable inputs (FE production) | via: createaddition:liquid_burning / FE↔kinetic bridge | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the strain farm's machines run on FE — bridge that to Create's rotational/FE generation (createaddition) so the weed-tech farm joins the Create spine instead of being a standalone FE island. | NOTE: the dossier flags this mod as the textbook one-pillar-island; a native FE bridge (its generator ↔ Create-Addition) is the cleanest cross-route join without retheming. Mid-tier (it's a full machine tree), so a real bridge, not a basic gate.
- from: raw buds / hemp harvest | via: create:milling / create:crushing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create's mill is an alternate route to grind buds/hemp the way it mills other crops — an optional Create on-ramp parallel to the mod's own grinder, weaving the recipe graph. | NOTE: alternate processing route (not replacing its own grinder); keep it a *reward*/parallel like M-03 ore-doubling, don't gate the mod's own chain behind Create.
- from: hemp building set (planks/bricks/stone) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-recycling is composable but low-value here — the hemp deco is a self-contained palette and crushing it back to plant matter is a trivial inverse; the FE bridge + milling links above are the meaningful Create joins. Adding a deco-crush edge is gilding.
- from: refined extracts / gummies | via: numismatics sell | to: economy | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: the dossier's [STRONG] line is the retired M-09 "luxury-good→coin" bare-sell, and its own dealer/stoner *NPC* village trades are exactly the NPC coin-faucet pattern the player-run rework (M-14/M-21 cut) forbids. The genuine economy hook is M-26: effect-edibles are *consumed* (spent giving effects), so demand renews — but that's the consumption sink riding the food/consumable space, not a sell weave. Reframe to M-26 (below), reject the sell link.
- from: effect-granting edibles (buds/gummies/joints) | via: consumption (eaten for effects) | to: survival/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: the edibles are spent when eaten for their effect, so demand never zeroes — a recreational/medicinal consumable a specialist supplies and others keep needing. | NOTE: this is the demand-renewal edge (M-26), the player-run-correct replacement for the rejected M-09 sell line; pairs with the consumable/food space (overlaps appleseed's diet pressure only loosely — these are effect items, not nutrition).
- REWORK: the dossier's economy candidate ([STRONG] M-09 + reliance on its NPC dealer trades) must be reworked — M-09 retired, NPC coin faucets cut. Recast as M-26 consumption (above). The Create FE/milling candidates are sound and are the priority 2nd-anchor.

## irons_lib   [anchors: support (library) (1)]
- LEAVE — framework library for Iron's Spellbooks; its only player-facing blocks (transmog_table, player_statue) are cosmetic GUI/skin actions with no routable material (transmog edits NBT, statues store a skin). It incidentally underpins the magic pillar as Iron's dependency, but carries no material to weave. Treat as a zero-surface library per the brief — don't weave a library's cosmetic blocks.

## txnilib   [anchors: support (library) (1)]
- LEAVE — pure multiversion code library for Txni's mods; 0 content, dependency only. Genuine zero-surface library.

## dynamictreesplus   [anchors: survival (worldgen/foraging) (1)]
- from: saguaro_fruit + red/brown mushroom caps | via: create:milling / create:crushing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a saguaro fruit or mushroom cap isn't just forage — mill it into a dye or food intermediate, the classic "raw forage → processed good" Create route. | NOTE: light everyday processing sized to bulk forage; pulls an ambient-worldgen mod into the Create/cooking web. Weave only the Plus-namespace OUTPUTS (saguaro_fruit, caps) — the parent dynamictrees ns owns the seed/sapling methods (mega_seed/seed_conversion), don't double-claim them.
- from: saguaro_fruit / mushroom blocks | via: numismatics sell | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: dossier's [WEAK] M-09 "cheap regional sell-good" is the retired bare-sell endpoint. If anything anchors these to economy it's regional scarcity (M-30 — desert/mushroom-biome locked forage traded across regions), but as cheap ambient organic feedstock it doesn't carry a hard region-gate worth authoring; the M-12 processing link is the real 2nd anchor. Reject the sell edge.
- REWORK: drop the dossier's M-09 economy candidate. Survival anchor + the M-12 milling link are the sound pair.

## ponderjs   [anchors: support (Create tooling/docs) (1)]
- LEAVE — KubeJS authoring tool for custom Create Ponder scenes; 0 content, documents the Create spine rather than feeding a pillar. Genuine zero-surface support/tooling.

== CHUNK COMPLETE ==
