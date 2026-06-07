# Phase 2 candidates — chunk-06 (pass-24, blind)

## alexsmobs   [anchors: survival (1)]
- from: void_worm_beak / ender_residue / ambergris (exotic boss/biome drops) | via: occultism:ritual or occultism:spirit_fire | to: magic | motif: M-11 | power: endgame (void_worm is a boss) / mid (ambergris) | tone: ok | verdict: ACCEPT | hook: the void worm's beak is exactly the kind of impossible-to-fake reagent an occult ritual would demand.
- from: ender_residue / soul-tied drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue refines into source — end-touched matter feeding the arcane.
- from: bear_dust / bone / shell drops | via: create:crushing / create:mixing | to: create | motif: M-02/M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk mob drops crush into useful powders so the menagerie feeds the machines.
- from: void_worm_beak (boss-signature) | via: gated Create/tech recipe input | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm drop is a boss-key on-ramp to a high-tier machine.
- from: rare tames/drops | via: numismatics sell | to: economy | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis.

## terralith   [anchors: survival (1)]
- LEAVE — pure data-only worldgen overhaul (0 items/0 blocks/0 methods). Its weave is indirect: the biome surface other mods' spawns/ore-scarcity ride on. loot=yes is vanilla-passthrough biome loot, not its own tables, so no distinctive loot-seed target. No coherent recipe/method edge to author.

## byzantine   [anchors: survival (1)]
- LEAVE — pure MineColonies schematic/style pack (0 items/0 blocks/0 loot). Its only "weave" is through MineColonies' Builder consuming Domum Ornamentum materials; nothing of its own to route to a 2nd system. Don't force one.

## glitchcore   [anchors: support/library (1)]
- LEAVE — genuine zero-content loader-abstraction library (backs Serene Seasons et al.). Nothing to route.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — well-rested buff mechanic, 0 items/blocks/tags. No material join key. Thematic kinship with seasons/Cold Sweat is real but offers no wireable surface. (Note: a config-tie sleep↔seasons cross-hook is conceivable but it's a tuning choice, not a weave edge.)

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
- LEAVE — generic dropped-item-entity merger, no content; nothing mod-specific to route.

## lithostitched   [anchors: support/library (1)]
- LEAVE — genuine zero-content worldgen library (underpins Tectonic). Nothing to weave.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — transient ping-marker QoL, no items/materials. Good co-op fit, no weave surface.

## createlowheated   [anchors: create (1)]
- from: heat-tier requirement (the "lowheated" gating condition) on basin recipes | via: create heat-condition on woven processing recipes | to: create (depth) | motif: M-05 (native-method gating, analogue) | power: mid | tone: ok | verdict: ACCEPT | hook: route weave-relevant Create basin recipes (e.g. magic-reagent refining via create:mixing) to require the managed lowheated tier, so the burner fuel-cost threads into other webs' processing steps rather than being a free passive heat. (Delivery: tag the heat level on existing/new mixing recipes — deepens Create, doesn't add a 2nd system on its own.)
- from: basic_burner fuel demand | via: create:mixing | to: survival | verdict: REJECT | reason: fuel is generic furnace fuel (coal/charcoal); no distinctive survival join key — it's a Create-internal balance tweak. REWORK n/a (single-anchor support tier within Create; honestly support-tier).

## fogoverrides   [anchors: support/client (1)]
- LEAVE — cosmetic fog config, 0 content. No weave.

## imfast   [anchors: support/compat (1)]
- LEAVE — server-side movement-validation patch; functionally serves aeronautics but as a behavioral fix, not a wireable resource. No content surface.

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — vanilla-scoreboard datapack (tab-list death tally), 0 items. Nothing to route.

## farmersdelight   [anchors: survival, create (2)]
- from: high-tier cooked dishes (pies/feasts) | via: numismatics sell / MineColonies provisioning | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare luxury-good→coin is generic-sellable under economy de-emphasis; not loop-closing/scarcity-gated. (Surfaced for review only — a *provisioning sink* into MineColonies would be distinctive but that's a colony-feed mechanic, not a coin sale.)
- from: cooked meals as MineColonies colonist food supply | via: minecolonies:composting / colonist-feed config | to: economy(logistics)/survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the kitchen's surplus stews become the colony's rations — food production feeding the settlement's labor pool (a real consumption sink, not a sale).
- from: stale/spoiled food + scraps | via: minecolonies:composting → fertilizer | to: survival (loop-back) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: kitchen byproducts compost back into the farm — closes the food loop.
- REWORK: existing Create weave (create:milling/mixing/filling → flour/ingredients) is sound and on-theme; keep. The survival anchor is core. OK on existing connections.

## create_better_villagers   [anchors: create, economy (2)]
- from: emerald-denominated Create-part trades | via: re-denominate to numismatics coins | to: economy (proper) | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the Create workers should deal in the pack's own minted currency, not vanilla emeralds — wires them into the real economy pillar instead of a parallel emerald one. (Distinctive: it's the specialization/distribution node for Create parts, not a bare sale.)
- REWORK: existing economy anchor rides *vanilla emeralds*, which sits beside (not inside) the Numismatics economy pillar — flag as mis-targeted; the coin re-denomination above is the fix. Create anchor (professions keyed to real Create workstations) is sound.

## tipsmod   [anchors: support/client (1)]
- LEAVE — loading-screen tips UI, 0 content. Could carry onboarding/progression hints (pack authoring) but that's not a pillar weave.

## spawn   [anchors: survival (1)]
- from: clam / crab / anglerfish seafood drops | via: farmersdelight:cooking / cutting (deeper meal chains) | to: survival/create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the new seafood pushes deeper into the cooking web than a single FD bridge — feast/meal chains. (Extends existing FD inbound weave with intent.)
- from: clams / pigment-shifted fish (color variants, casting-net catch) | via: createfisheryindustry mechanized harvesting | to: create/aeronautics(logistics) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: clams and exotic catches are natural inputs to Create-driven aquatic harvesting — fishing goes industrial.
- from: clam-pearl / exotic catch variants | via: numismatics sell | to: economy | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis.
- REWORK: existing FD bridge (drops→cooking/cutting) is sound; it's just thin. The deeper M-12 routing above is the upgrade. OK on the existing connection.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — genuine zero-content animation/entity API for L_Ender's mods. Nothing to weave.

## searchables   [anchors: support/library (1)]
- LEAVE — genuine zero-content client-UI search library. Nothing to weave.

## irons_spellbooks   [anchors: magic, create (2)]
- from: mithril / pyrium ore (Y<38 scarce metals) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the wizard metals get the same ore-doubling reward as everything else, threading scarce magic ore into the Create spine.
- from: apothecarist / mob-drop reagents | via: irons_spellbooks:alchemist_cauldron_brew (its own method) as inputs, or occultism:ritual | to: magic | motif: M-02/M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: stray mob drops become brew/scroll reagents instead of vendor trash.
- from: arcane_essence ↔ ars_nouveau:source_gem | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT (RESERVED-reagent: arcane_essence is the Iron's-side currency, ledger §2 — this is the sanctioned M-01 bond, not a repurpose) | hook: the two magic currencies convert, unifying the magic web.
- from: alchemist cauldron brews / affinity gear | via: numismatics sell | to: economy | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis.
- REWORK: existing Create weave (alchemist_cauldron via create:emptying/filling) is sound and thematic — fluid magic plugged into Create fluid handling. Magic anchor is the spine. OK on existing connections.

## touhou_little_maid   [anchors: survival (1)]
- from: a magic reagent or boss-drop as an Altar recipe input | via: touhou_little_maid:altar_recipe_serializers (its native ritual-style method, KubeJS-addable) | to: magic | motif: M-05 / M-11 | power: mid-endgame (maids/upgrades) | tone: ok | verdict: ACCEPT | hook: the Torii altar already reads as a summoning rite — gating a maid or upgrade on an arcane reagent makes it the magic pillar's non-Create ritual path.
- from: power-point bottles (the altar's offering currency, village-loot/fairy-drop sourced) | via: occultism/magic reagent conversion into power points | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: scarce magic essence can be spent as altar power, tying the maid economy to the magic web's reagents rather than only village loot.
- from: power-point bottles buyable/sellable | via: numismatics | to: economy | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis (power points are an internal currency; minting them is bare arbitrage).
- from: maid labor / altar | via: create routing | to: create | verdict: REJECT | reason: no coherent Create edge without a forced "why"; the altar is deliberately the non-Create path (per dossier). no-motif.

== CHUNK COMPLETE ==
