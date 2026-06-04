# Phase 2 candidates — chunk-09
<!-- pass-06 · blind · quality-audit (mods already ≥2 pillars) -->

## create   [anchors: Create (1 — it IS pillar #1)]
OK — connections sound. `create` is the method library, not a weave recipient. The dossier correctly flags it as N/A for a 2nd-pillar edge. No rework needed; leave as the hub.

## extradelight   [anchors: survival, Create (2)]
- REWORK: The existing Create weave (inbound `create:mixing`) is real but thin — it only covers fluid/ingredient mixing. The dossier's 2nd-pillar candidates point at `create:milling`/`create:crushing`/`create:pressing` for grain→flour, coffee grinding, and sugar as the backbone deepening. This is sound and the hook is clear (Oven/Mortar stations become Create's downstream kitchen). No mis-costing flag; the existing edge is correctly sized. The M-09 economy candidate (feasts as luxury goods via Numismatics vendor) is also coherent — feasts are mid/endgame output, priced as a luxury trade good fits M-09 cleanly. Neither candidate is lore-clashing. Both should advance.
- REWORK: Confirm whether `create:pressing` → olive oil / juice is actually authored or only proposed; the dossier lists it as a candidate but the made-by methods line shows only `create:mixing`. If unpublished, the pressing/milling deepening is still proposed work, not an existing connection — it should not be counted in pillar tally until authored.
- OK — the two-pillar anchor (survival + Create) is legitimate as stated.

## occultengineering   [anchors: Create, magic (2)]
- OK — connections sound. The Create↔magic weave is the mod's entire reason for existence; made-by methods confirm `create:compacting`, `create:filling`, `create:haunting`, `create:item_application`, `create:mixing`, `create:pressing` + `occultism:ritual`, `occultism:spirit_fire` all fire inbound. That is a dense, coherent two-pillar web. The dossier's only extra candidate (M-08 sterling_silver coin via Numismatics) is marked WEAK and optional — correct assessment; the mod doesn't need it for pillar count. No rework needed.

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics IS the economy pillar hub; its Create anchor is structural (depends on Create, coins crafted via Create). The dossier correctly directs weaving TO it (M-08/M-09 as destination), not FROM it. No outgoing edge needed. No rework.

## aeronautics_bundled   [anchors: aeronautics (1)]
- REWORK: The dossier claims Create as a "de-facto 2nd via component crafting" but the made-by methods line is empty (`none / vanilla only`) — the bundle jar registers nothing and its 0 items mean there are no authored inbound Create edges here. The real content lives under the `aeronautics` namespace (not in this dossier). The 2-pillar claim is premature for this namespace specifically. This dossier should note that pillar count applies to the `aeronautics` namespace dossier, and `aeronautics_bundled` itself should remain 1-pillar (wrapper jar). No recipe authoring needed here; the REWORK is a dossier-accuracy note.
- OK — the "weaving belongs on the `aeronautics` namespace" note in the dossier is correct; flag it as a documentation clarity issue only.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- OK — connections sound for a cosmetic skin mod. The dossier correctly calls LEAVE for a 2nd-pillar edge. Forcing Create/economy onto dyed tires is contrived. One pillar is the right call here; this is a sanctioned cosmetic support role. No rework.

## alcohol_industry   [anchors: Create, survival (2)]
- OK — connections sound. The two Create inbound edges (`create:filling`, `create:mixing`) are real and well-sized for the mod's role as a Create distillery. The M-09 economy candidate (finished liquors as Numismatics luxury goods) is the obvious 3rd-pillar deepening — strong and coherent. No lore clash; bottled spirits as trade goods is immediately legible. No rework on existing connections; the economy candidate is not yet authored (made-by shows only Create methods) but is correctly identified.

## ars_nouveau   [anchors: magic (1)]
- REWORK: The dossier lists `magic (1)` as the anchor, but the made-by methods line shows `none / vanilla only` — meaning NO foreign methods feed Ars Nouveau's recipes yet. The M-01 hub (source_gem as universal magic currency) and M-10 (imbuement pulls foreign essences) are described as candidates but are NOT yet authored inbound edges. The dossier reads as though the magic pillar is established by being the "spine of the magic pillar," but pillar-anchor legitimacy requires at least one authored outgoing or inbound cross-pillar edge. The survival↔magic route via Vitalic/Agronomic Sourcelink consuming crop/mob output is thematically native (not a recipe edge — it's a world-mechanic), so it may not show in made-by; that's a fair reason to count survival as soft anchor. However the dossier only lists magic(1), so no mis-count here.
- REWORK: The M-01/M-10 imbuement connections (foreign essences → source_gem) are the most important authoring target for this mod; the dossier correctly marks them STRONG but they must be authored before Ars Nouveau can claim a 2nd pillar. Flag as highest-priority weave work for this mod.
- OK — the single-pillar call is accurate given current authored state.

## astikorcartsredux   [anchors: survival (1)]
- OK — connections sound. The dossier calls LEAVE for a 2nd pillar, correctly noting forced Create/economy edges would be contrived on a vanilla-style agrarian tool. Survival anchor stands. No rework.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. The two Create inbound edges (`create:item_application`, `create:splashing`) are real and well-sized (kinetic/display machinery routes through Create). The M-04 recycles-deco candidate (crushing tile blocks back to crushed stone) is a light deepening, not a missing pillar — correct assessment. No rework on existing connections.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. The Create inbound edges (`create:cutting` + CBC's own `*_munition_assembly` types) and the aeronautics anchor (arming Aeronautics ships) are both real and coherent. The made-by methods confirm this is genuinely two-pillar. The M-05 boss-gate candidate (gating heavy autocannon/rocket tier behind a boss drop) is a good progression note. No rework on existing connections.

## chefsdelight   [anchors: survival, economy (2)]
- REWORK: The economy pillar anchor is claimed via "villager-trade source" — but the made-by methods line shows `none / vanilla only`, meaning no Numismatics or trade-network methods fire inbound. The economy claim rests entirely on vanilla emerald trades (villager professions), which predates the pack's Numismatics economy layer. The dossier's own optional deepening (route trades onto Numismatics coins, M-09) is the fix — until that's authored, the economy pillar claim is soft/provisional. Flag: economy anchor depends on vanilla emerald trades, not the pack's coin economy; strengthen or mark provisional.
- REWORK: The M-21 trade-seam-to-economy motif (villager trade → Numismatics) is provisional and leans no per the registry. The route here should be M-09 (luxury good → coin via Numismatics vendor pricing for the foods Chef sells), which is fully accepted. That's a cleaner path than trying to make the villager profession itself Numismatics-native.
- OK — survival anchor (FD meals in village economy) is sound.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections sound. Both inbound Create methods (`create:cutting`, `create:deploying`) are real and the aeronautics/logistics anchor (autonomous flying delivery) is coherent. The light economy adjacency note (remote trade fulfilment) is correctly left as optional. No rework.

## companions   [anchors: survival (1)]
- REWORK: The dossier correctly shows survival(1) and no authored inbound edges. The M-11 magic candidate (Soul Furnace drops → Occultism spirit_fire / Ars imbuement as reagents) is STRONG and well-identified — this is the primary 2nd-pillar path. The M-09 economy candidate (Relic Gold / soul gems via Numismatics) is coherent but secondary. The M-04 Create deco-recycle candidate (Tesla/voltaic blocks crushing to copper) is WEAK and correctly so — forcing a Create edge on gothic-alchemical electrical deco reads slightly contrived, though not a clash. Priority: author the magic weave first (Soul Furnace reagents → Occultism/Ars); economy can follow as a soft 3rd.
- REWORK: The in-mod coin system (copper/nether/end_coin) is a potential confusion point with Numismatics. The dossier flags it ("NOT the pack's Numismatics economy") but no resolution is proposed. This deserves a DECISIONS.md entry: either explicitly price-convert companions coins → Numismatics (M-09 via vendor, selling companions coins for Numismatics spurs) or document that they're intentionally separate flavor items. Leaving two coin systems active without a note risks player confusion.

== CHUNK COMPLETE ==

