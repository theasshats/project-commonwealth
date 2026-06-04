# Phase 2 candidates — chunk-09
<!-- quality-audit chunk: mods already at ≥2 pillars. Format: REWORK or OK. -->

## create   [anchors: Create (1)]
OK — connections sound. `create` is the method library itself; the dossier correctly marks it as the hub all other mods weave INTO, not a mod that gains pillars. The leave-as-destination note is accurate and no edge should be authored consuming Create as a target. No rework needed.

## extradelight   [anchors: survival, Create (2)]
OK — connections sound. Inbound Create weave (create:mixing) is real and grounded; the M-12 processing-chain-pull note (milling/crushing grain→flour, coffee grinding feeding the Oven/Mortar downstream) is a coherent deepening, not a new pillar. The M-09 luxury-feast → Numismatics note is a valid 3rd-pillar candidate, properly bounded. No rework; the quality concern would be ensuring the Create inbound edge (create:mixing) is actually recipe-authored rather than just depended-on, but that is a Phase 3 authoring issue.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. By construction the canonical Create×Occultism bridge (M-05/M-11); made-by list (create:compacting, create:filling, create:haunting, create:mixing, create:pressing, occultism:ritual, occultism:spirit_fire) confirms both pillars are actively woven. The weak M-08 sterling-silver→coin note is correctly flagged WEAK and left un-authored. The reagent-ownership reservation of `occultengineering:spirit_solution` as the occult intermediate is correctly respected. No rework needed.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. Numismatics IS the economy pillar's keystone; the dossier correctly identifies the weaving direction as foreign goods → vendor/price (M-08/M-09) and does not add an outgoing edge. Both pillars (economy + Create styling/deps) are genuine. Reagent-ownership table correctly reserves numismatics:* coins to the economy pillar. No rework needed.

## aeronautics_bundled   [anchors: aeronautics (1)]
REWORK: dossier claims 1 pillar but lists Create as "de-facto 2nd via component crafting." This is ambiguous — if the component-crafting weave (levitite/propellers/tires through Create sheets/casings/sequenced-assembly, M-06) is considered authored, the anchor count should be updated to aeronautics + Create (2). However, the bundle ns registers 0 items and 0 recipe-types, so no weave can be anchored on this namespace specifically — the real content lives under the `aeronautics` namespace. The dossier's own note ("weaving belongs on the `aeronautics` namespace dossier, not this bundle wrapper") is correct. Rework: strip the 2nd-pillar candidate note from this dossier and redirect reviewers to the `aeronautics` dossier; leave the anchor at aeronautics (1) for this wrapper and mark it as a pass-through container, not a weavable mod.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
OK — connections sound. The dossier is correct that this is a cosmetic skin layer (dyed levitite/tires). No weave is needed or appropriate; the leave-as-cosmetic note is well-reasoned. A Create:toolbox_dyeing or create:mixing dye route would be technically possible but gratuitous — the dossier correctly rejects it as "gilding." No rework.

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound. Inbound create:filling + create:mixing weave is real (grounded in made-by list). The M-09 economy note (bottled spirits → Numismatics luxury good) is a well-judged 3rd-pillar candidate, correctly labeled STRONG. The two existing pillars (Create processing chain, survival consumable/buff) are coherent and not forced. No rework.

## ars_nouveau   [anchors: magic (1)]
REWORK: dossier lists magic (1) only, but the 2nd-pillar candidates section has two strong candidates (M-02 mob-drop organic→magic via Vitalic/Agronomic sourcelink; M-01/M-10 imbuement magic-internal hub) that are the pack's established spine for the magic pillar. Neither is authored yet (made-by: none / vanilla only). The anchor count should stay at magic (1) until those weaves are authored, but the dossier should flag that M-01 (arcane currency, reserved to `ars_nouveau:source_gem`) and M-02 (mob-drop reagent sink) are *the* Phase 3 priority items for this mod — they're not optional 2nd-pillar candidates, they're foundational to the whole magic web. Rework: elevate the M-01/M-02 candidates from "candidates" to "Phase 3 priority — magic web spine"; the survival pillar connection (sourcelinks passively consuming farm/mob output) is arguably already live natively, which could count as the 2nd pillar without requiring authoring, but this needs a deliberate decision before marking anchor count 2.

## astikorcartsredux   [anchors: survival (1)]
OK — connections sound. The dossier correctly identifies this as a 1-pillar mod with no strong 2nd-pillar candidate (rustic agrarian flavor; forcing a Create edge on wooden carts would be contrived). The leave note is appropriate. No rework.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound. Hard-depends on Create; made-by list (create:item_application, create:splashing) confirms the inbound Create weave. The survival anchor is valid (decorative building layer). The M-04 strengthening note (tile blocks crushable back to stone via create:crushing) is a coherent optional deepen, not required. No rework.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. Both pillars are genuine and well-grounded: made-by list shows inbound create:cutting and all the CBC munition-assembly types; the mod exists specifically to arm Aeronautics contraptions. The M-15 boss-drop gating note (heavy autocannon/rocket tier behind a boss drop or MineColonies unlock) is a valid progression-design note, not a missing pillar. No rework.

## chefsdelight   [anchors: survival, economy (2)]
OK — connections sound. Survival anchor (FD meals in village food supply) and economy anchor (villager Cook/Chef professions offering trades) are both coherent and un-forced. The M-09 deepening note (redirect emerald trades to Numismatics coins via KubeJS) is a valid optional weave — correctly labeled MED and flagged as config/KubeJS work. The zero item/block count in the digest reflects that this mod is pure profession/trade-table content, which matches the dossier narrative. No rework.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Made-by list (create:cutting, create:deploying) confirms the Create inbound weave; the cardboard-plane courier is genuinely aeronautics/logistics pillar content. The light economy-adjacency note is correctly left un-authored. No rework.

## companions   [anchors: survival (1)]
REWORK: dossier lists survival (1) only, with M-11 (Crystallized Blood/soul gems → Occultism spirit_fire/ritual) as the STRONG 2nd-pillar candidate. This is the clearest case in the chunk of a mod that has a natural and well-supported magic weave not yet authored. Additionally, the dossier notes that companions has its own copper/nether/end coins that are NOT Numismatics — this is a design tension that needs explicit resolution: either bridge those coins to Numismatics (or suppress them) so two currency systems don't compete in the same pack, or document the decision not to. Rework two items: (1) elevate M-11 Crystallized Blood→Occultism ritual as Phase 3 priority for magic pillar; (2) add a flag in the dossier that the in-mod coin system needs an explicit keep/bridge/suppress decision before the economy pillar is finalized in v0.9.

== CHUNK COMPLETE ==
