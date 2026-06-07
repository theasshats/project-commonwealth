# Phase 2 candidates — chunk-03

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Millstone grinds barley and oat into flour — the kitchen breadchain runs through Create's spine, tying the farmstead to the production web
- from: farm_and_charm:barley (grain straw byproduct) | via: create:haunting | to: magic | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: no coherent "haunted barley straw" output — forcing a soul-fire route on grain waste has no thematic grounding; no downstream magic recipe wants it
- from: farm_and_charm:butter / farm_and_charm:eggs (husbandry surplus) | via: minecolonies huts/requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Cook/Farmer hut requests butter and eggs for colony upkeep, so husbandry surplus feeds the colony route and makes livestock raising a specialist supply job
- from: farm_and_charm grain/meat (bulk commodity) | via: aeronautics/logistics | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: grain and butter are low-density; M-31 targets bulk goods that *require* logistics at scale — food is the ambient case, not a compelling aeronautics lock; reject unless a seasonal scarcity argument is added (which would be M-16 + M-30, a different proposal)
- from: farm_and_charm:barley (grain, seasonal window) | via: season-gated crop fertility (sereneseasons config) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley grows only in spring/summer; out-of-season flour is scarce, making the miller a valued specialist in winter

REWORK: dossier candidate "economy via numismatics — sell surplus" is M-09 retired — reject as bare sell. The colony (M-28) candidate above replaces it with a demand-gating read.

## lionfishapi   [anchors: support/library (0 game anchors)]

- LEAVE — pure entity-animation API; 0 blocks, 0 items, no loot, no recipe surface. Genuine zero-content library.

## upgrade_aquatic   [anchors: survival (1)]

- from: upgrade_aquatic:raw_pike / raw_perch / raw_lionfish (raw fish) | via: farmersdelight:cooking | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farmer's Delight cutting board and cooking pot process the new fish into finished seafood dishes, pulling the ocean expansion into the food-production web alongside FD's existing fish chain
- from: upgrade_aquatic:*_coralstone (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: coralstone crushes back to prismarine dust / experience nugget — a lossy-recycle path for excess deco, closing the loop through Create's spine
- from: upgrade_aquatic:raw_lionfish (rare / food-poisoning fish) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: lionfish venom is transmuted in spirit-fire into a toxic reagent — an aquatic-danger input for Occultism rituals; thematically the "cursed fish" makes a coherent offering
- from: upgrade_aquatic cooked fish (seasonal ocean food) | via: sereneseasons crop-fertility + season-gated fishing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: ocean fishing isn't directly modulated by Serene Seasons crop fertility (fish aren't crops); the seasonal hook only applies to fishable if a separate config enables it — insufficient grounding; drop in favour of the cooking/spirit-fire links above
- from: upgrade_aquatic:driftwood_* / riverwood_* (wood set) | via: woodworks:sawmill (already inbound) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill is ALREADY an inbound weave on this mod (made-by methods in the dossier) — not a new link, existing connection; no new anchor added

REWORK: dossier candidate "economy via numismatics sell" is M-09 retired — bare sell; drop. Replace with M-11 spirit-fire (accepted above) or M-28 colony provisioning if a deeper pass reveals a colony food request for seafood.

## bookshelf   [anchors: support/library (0 game anchors)]

- LEAVE — modder utility library (codecs/registration/datapack hooks); 0 blocks, 0 items, no loot. Genuine zero-content library.

## appleseed   [anchors: survival (1)]

- from: appleseed diet-variety demand | via: config/tuning tie | to: create | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the diet system creates continuous repeating demand across Grains/Protein/Vegetables/Fruits/Sugars groups — this IS M-26 (consumption sink that never zeroes); diverse food output from Create's milling/cooking chain is always worth producing because the diet clock resets each meal; no new recipe needed, the link is the config-level demand signal
- from: appleseed balanced-diet buff | via: minecolonies colony food requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony requesting diverse food types (Grains + Protein + Vegetables) for worker happiness is the demand-gate; the diet system's buff categories map onto the colony's provisioning request list, making the cook/farmer a colony supplier
- from: appleseed diet mechanic | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: "nutritional infusion" has no Ars thematic grounding; the diet mod has no items to run through imbuement; forced and tonally wrong

## formationsnether   [anchors: survival (1)]

- from: formationsnether structure loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a player-mintable scarce Nether alloy (e.g. ancient debris fragment or a Numismatics blank disk) into formationsnether's altar/sanctuary chests — explorers bring back raw mint-stock from the Nether, so dangerous exploration feeds the currency supply
- from: formationsnether structure loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a Nether-exclusive magic reagent (an Occultism spirit essence or Ars Nouveau's fire essence) into the ritual-altar loot — the Nether ruins are where you find the rare reagent that opens a ritual progression tier; "of course" the altar would have that
- from: formationsnether structure loot | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 boss-key unlock requires a *boss drop*, not generic structure chest loot; formationsnether has no boss mob — a chest find isn't a boss-key; mis-categorised, reject on motif grounds

## moreculling   [anchors: support/performance (0 game anchors)]

- LEAVE — client render-culling performance mod; 0 blocks, 0 items, no loot. Genuine zero-content library/perf mod.

## sereneseasons   [anchors: survival (1)]

- from: sereneseasons:season_sensor (redstone signal on season change) | via: create contraption/gearshift logic | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: wire the sensor's redstone output into a Create clutch/gearshift so an automated farm's conveyor belt switches crops or opens greenhouse shutters by season — the spine responds to the world's calendar
- from: out-of-season crop scarcity (sereneseasons fertility) | via: season-gated ingredient in Create/magic recipe | to: create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a recipe on the Create milling or magic-ritual side requires a summer-only grain or spring blossom as an ingredient, making the seasonal window a real production bottleneck — the loop's scarcity arm running through the calendar
- from: sereneseasons winter scarcity (low-growth season) | via: minecolonies colony supply interruption | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colony farmers have reduced output in winter because sereneseasons cuts crop yields; the colony's food-request shortage becomes a trade demand signal — players with greenhouses or warm-biome farms become suppliers to colonies that can't self-sustain in winter
- from: sereneseasons:calendar (seasonal date item) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: the calendar is an informational item, not a reagent; imbuement-ing the calendar has no thematic anchor — it's a clock, not a catalyst; reject for incoherence

REWORK: dossier candidate "economy via seasonal scarcity — bounty/numismatics sell" is M-09 retired. The M-28 colony read above replaces it with a demand-gating mechanic.
Existing M-05 "season_sensor → Create" candidate in dossier is sound — ACCEPT confirmed above.
OK on the survival anchor — it IS the primary calendar/pressure driver; the three new links above round it to a strong multi-system mod.

## entity_texture_features   [anchors: support/client rendering (0 game anchors)]

- LEAVE — client texture-engine for OptiFine resourcepacks; 0 blocks, 0 items, no loot. Genuine zero-content client mod.

## appleskin   [anchors: support/client UI (0 game anchors)]

- LEAVE — food HUD readout; 0 blocks, 0 items, no loot. Genuine zero-content QoL mod.

## kotlinforforge-5.11.0-all   [anchors: support/library (0 game anchors)]

- LEAVE — Kotlin language adapter; 0 blocks, 0 items, no loot. Genuine zero-content language loader.

## bigsignwriter   [anchors: support/client UI (0 game anchors)]

- LEAVE — sign GUI utility; 0 blocks, 0 items, no loot. Genuine zero-content UI mod.

## libipn   [anchors: support/library (0 game anchors)]

- LEAVE — IPN GUI/config library; 0 blocks, 0 items, no loot. Genuine zero-content library.

## pingwheel   [anchors: support/QoL (0 game anchors)]

- LEAVE — co-op ping marker; 0 blocks, 0 items, no loot. Genuine zero-content QoL mod. (Correct fit for the pack's ~10-player design; no weave surface.)

## cmpackagepipebomb   [anchors: create (1)]

- from: cmpackagepipebomb:pipebomb (crafted explosive trap) | via: createbigcannons:cartridge_assembly | to: create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: a pipebomb-as-cartridge-filler is thematically adjacent but the pipebomb is a trap/gag item, not an anti-armor munition; forcing it through CBC's assembly line misreads the item's purpose; tone clash (prank vs. military ordnance)
- from: cmpackagepipebomb:pipebomb (TNT-based, consumes gunpowder) | via: minecolonies guard hut / combat supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: M-34 is for boss-drop trading (a combat specialist farms a boss drop and trades it to non-combat players); pipebombs are a crafted trap, not a boss-route output; the motif doesn't fit
- LEAVE — no coherent second-system weave. A three-item PvP prank mod riding on Create packages; its "loop" is player-versus-player flavor, not a systemic link. Dossier conclusion (leave) is correct.

## timm   [anchors: support/QoL (0 game anchors)]

- LEAVE — client biome-title overlay; 0 blocks, 0 items, no loot. Genuine zero-content immersion mod.

## betteranimationscollection   [anchors: support/visual (0 game anchors)]

- LEAVE — client mob model animation replacements; 0 blocks, 0 items, no loot. Genuine zero-content visual mod.

## chefsdelight   [anchors: survival, economy (2)]

- from: chefsdelight Cook/Chef villager trades (FD meals for emeralds) | via: numismatics coin substitution | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: M-08 is player-minted currency (scarce metal → Create-processed → minted coin); having a villager accept coins instead of emeralds is an NPC coin faucet in reverse — it's M-21-adjacent (NPC economy tie), which was cut; the villager-trade currency is emeralds by design and converting to coins is an NPC sink re-entry; reject
- from: chefsdelight Cook villager (workstation = farmersdelight:skillet) | via: minecolonies Cook hut recipe | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Cook hut can reference the Chef's meal outputs as colony-requested dishes — the FD/chefsdelight production chain becomes a colony supplier, gating colony happiness on diverse cooked goods; the chef specialist trades meals into the colony economy
- from: chefsdelight feast-tier meals (Roast Chicken / Honey Glazed Ham) | via: appleseed diet groups | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: feast meals span multiple diet groups (Protein + Grains + Vegetables) simultaneously — the diet system's consumption sink keeps demand for these complex dishes continuously non-zero; a feast feeds the whole party's diet tracker in one serving, making the Chef a sought-after specialist

REWORK: existing "economy via villager trades" anchor is sound but shallow — it's NPC-mediated, which nudges toward the cut M-21 pattern. The M-28 colony read above is the stronger player-run-economy frame; flag the villager-trade anchor for review to confirm it doesn't reopen a coin-faucet loop. OK — connections sound on the two-anchor (survival + economy) designation, but deepen with M-28 + M-26.

## playeranimator   [anchors: support/library (0 game anchors)]

- LEAVE — player animation API library; 0 blocks, 0 items, no loot. Genuine zero-content developer library.

## sable_sa_compat   [anchors: support/compat (0 game anchors)]

- LEAVE — behavior compat patch (Create: Stuff 'N Additions × Sable/Aeronautics); 0 blocks, 0 items, no loot. Genuine zero-content compat glue.

== CHUNK COMPLETE ==
