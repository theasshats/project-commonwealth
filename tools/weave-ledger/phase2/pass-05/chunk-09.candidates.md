# Phase 2 candidates — chunk-09

## create   [anchors: Create (1 — IS the pillar)]
OK — connections sound. Create is the method-library hub; other mods weave INTO it. Dossier correctly marks it as the pull-target, not a recipient needing new edges. No new connections to author.

## extradelight   [anchors: survival, Create (2)]
REWORK: The dossier's "2nd pillar = Create" claim rests on a single existing inbound weave (create:mixing feeds it). That is a thin thread — one inbound recipe type does not make a pillar; it means Create already *reaches* it. The connection reads correctly in direction and motif (M-12 processing-chain pull), but the depth is understated and not yet authored. Flag for Phase 3 to confirm at least two Create methods are actively authored (create:milling for grain→flour/coffee, create:pressing for oil/juice) before the Create anchor is treated as solid.
REWORK: The economy candidate (M-09, feasts → coin via Numismatics vendor) is valid but listed as "MED" with no authored hook. It is actually the strongest single new edge: extradelight feasts are the highest-effort cooked items in the pack and the most natural luxury-good trade candidate. Elevate priority, make explicit that it needs a curated price list rather than a blanket "feasts are sellable."
OK — no forced or lore-clashing edges found. Both existing pillars are thematically coherent (rustic kitchen + Create industrial automation is the pack's intended pairing).

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. This mod is the canonical Create×Occultism bridge; its made-by weaves (create:compacting/filling/haunting/item_application/mixing/pressing + occultism:ritual/spirit_fire) are deep and coherent. The spirit_solution reagent is correctly reserved. The weak M-08 economy candidate (sterling silver → coin) is correctly rated weak — sterling silver is a mid-tier occult alloy and giving it a coin role risks diluting the scarcity signal. Leave as-is.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. Numismatics is the economy pillar's destination hub; the dossier correctly identifies the flow direction as inbound (foreign goods → vendor) and declines to author outgoing edges. Reagent-ownership reservation is correct. No rework needed.

## aeronautics_bundled   [anchors: aeronautics (1 — bundle wrapper)]
REWORK: The dossier flags that "weaving belongs on the `aeronautics` namespace dossier, not this bundle wrapper" — this is correct, but it means this entry is essentially a stub. The quality-audit concern is that the bundle wrapper is listed in the chunk as if it needs a standalone audit when its real content namespace is `aeronautics`. If an `aeronautics` dossier doesn't exist or is incomplete, that is the gap. Flag: ensure the `aeronautics` ns dossier exists and carries the M-06/M-23/M-24 anchor audit; this wrapper entry can remain "pass-through, no edges authored here."
OK — no incorrect connections on this entry (it has none).

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
OK — connections sound. Dossier correctly identifies this as a cosmetic palette layer with no coherent recipe-weave candidate. The note that routing dye through create:mixing "would be gilding" is correct — the dye step is already a crafting-table recipe with a dye item and adding a machine step for a cosmetic result has no design payoff. LEAVE is the right call; one aeronautics anchor is justified for a pure-cosmetic support mod.

## alcohol_industry   [anchors: Create, survival (2)]
REWORK: The dossier's existing connections are sound (Create via filling+mixing inbound; survival via drinkable outputs). The M-09 economy candidate (finished liquors as sellable luxury goods) is rated "STRONG" in the dossier — this is correct and should be explicitly surfaced: bottled spirits are a natural trade commodity with a clear "player would nod" hook ("distilled spirits fetch coin at the vendor"), and the Numismatics vendor requires no recipe authoring, only a price config. Elevate from candidate to near-authored recommendation. Flag for Phase 3.
OK — no tone clashes or mis-costings on existing connections.

## ars_nouveau   [anchors: magic (1)]
REWORK: The dossier lists magic as the sole anchor, with two strong 2nd-pillar candidates (survival via Vitalic/Agronomic Sourcelink = M-02; and M-01/M-10 arcane currency hub). Both are listed as proposals not yet authored. This is not a quality defect in the connections themselves but a gap in anchor status — ars_nouveau should already count magic+survival given the Sourcelink organic→magic sink is a *native mechanic*, not a recipe we need to author. The dossier may be under-counting. Flag: the Vitalic/Agronomic Sourcelink is a native passive mechanic (no KubeJS needed); if the pack's organic mods (Farmer's Delight crops, Alex's Mobs deaths) are simply present, ars_nouveau already has a survival seam. The anchor should reflect that. Recommend updating the anchor count before Phase 3 authoring.
REWORK: The economy candidate (M-09, source_gem/spell scrolls → coin) is correctly rated WEAK and de-prioritized. Good — source_gem is the reserved M-01 magic-currency hub; giving it a coin role risks blurring the magic/economy boundary. Leave as rejected.
OK — no lore-clashing or mis-costed connections found.

## astikorcartsredux   [anchors: survival (1)]
OK — connections sound. The dossier's two weak candidates are honestly rated: M-05 Create gating of the iron plow blade is a plausible light touch but not strong; the "leave" recommendation for the second is correct. This mod's value is vanilla-style pastoral flavor, and forcing an economy/Create edge would be contrived. One pillar is the floor; the pack's CLAUDE.md accepts this. No rework needed.

## bits_n_bobs   [anchors: Create, survival (2)]
REWORK: The existing made-by weaves (create:item_application + create:splashing) are both inbound from Create, making both pillars Create-internal. The "survival" anchor is softer than it looks — it derives from "decoration palette for builds," which is a weak survival claim. The actual 2nd-pillar deepening candidate in the dossier (M-04 recycles deco — tile/chair blocks crushable back to crushed-stone via create:crushing) would reinforce the Create side, not add a second distinct pillar. If the intent is Create+survival, the survival anchor needs a more explicit hook (e.g. chain pulley used in player housing contraptions, or the deco blocks being part of survival-build progression). Flag for Phase 3: confirm what justifies "survival" as a genuine second pillar or reclassify to Create (1) with M-04 as a deepening, not a 2nd-pillar grant.
OK — no tone clashes.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. Munition assembly pipeline (create:cutting + CBC methods → assembled cannon/rocket for aeronautics ships) is deep and coherent. The M-05 boss-key gating suggestion for heavy-autocannon tier is a good fit for the pack's progression design — not a missing pillar but a depth recommendation for Phase 3. No rework needed.

## chefsdelight   [anchors: survival, economy (2)]
REWORK: The economy anchor rests on villager emerald trades, not Numismatics. In a pack where Numismatics is the currency backbone, emerald-based trades are economy-adjacent but not economy-pillar-native. The dossier notes this and suggests routing trades to Numismatics coins (M-09) via KubeJS. This is the one real gap: the existing economy pillar claim is somewhat provisional because the pack's economy is coin-based, not emerald-based. Flag: the economy anchor should be reviewed at Phase 3 — either the coin-trade bridge is authored (strengthening it) or the anchor is soft until then. The survival anchor (FD meals from Cook/Chef villagers) is solid.
OK — no lore clashes. Cook/Chef profession fits naturally as a village-economy food source.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Create-package logistics via autonomous flying courier is a clean Create↔aeronautics bridge; made-by weaves (create:cutting + create:deploying) confirm Create construction. The light economy adjacency (remote trade fulfilment) is correctly left as a note rather than an authored edge — it would be a real edge only if Numismatics vendor blocks send orders via packages, which is speculative. No rework needed.

## companions   [anchors: survival (1)]
REWORK: This mod has three candidates listed, none authored, and the existing anchor is survival only — it is genuinely a 1-pillar mod that needs a 2nd. The quality audit concern is not on connections (there are none yet) but on the candidate quality:
- The M-11/M-02 magic candidate (Crystallized Blood / soul gems → occultism:spirit_fire or ars imbuement) is the strongest. Soul Furnace → occult reagent is thematically coherent (gothic-alchemical vibe matches Occultism's eldritch tone). This should be the primary 2nd-pillar target.
- The M-09 economy candidate (Relic Gold / soul gems → Numismatics vendor) is valid but secondary — boss drops as coin-priced trade goods (M-09/M-15 hybrid) is a natural fit.
- The M-04 Create-recycles-deco candidate (Tesla/voltaic blocks crush to copper scrap) is weak; crushing decorative blocks to copper is a contrived edge. The tesla aesthetic doesn't naturally belong in a Create machine list. Mark REJECT.
Flag: companions is a 1-pillar mod that should be upgraded to 2 via the M-11 magic route in Phase 3. The soul_furnace method (companions:soul_furnace) takes mob drops/foods/gems and outputs soul-state reagents — this is a natural feed into occultism's spirit/ritual chain or ars_nouveau:imbuement.

== CHUNK COMPLETE ==

