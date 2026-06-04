# Phase 2 candidates — chunk-09
<!-- quality-audit pass: mods claimed at ≥2 pillars; list REWORK items or OK -->

## create   [anchors: Create (1) — IS the pillar]
OK — connections sound. Create is the method library, not a weave target; the dossier correctly
marks it as the hub other mods weave INTO. No edges need authoring onto Create itself.
Note: dossier lists only 1 anchor (Create) — this is intentional and documented; the "2nd-pillar
goal" explicitly does not apply to Create.

## extradelight   [anchors: survival, Create (2)]
OK — connections sound. The existing inbound weaves (create:mixing, farmersdelight:cooking/cutting,
butchercraft:grinder) are coherent: a rich food mod routes raw crops/fluids through Create and FD
stations — exactly what a deep-kitchen survival↔Create connection should look like.
REWORK (minor): the dossier notes "deepening" via create:milling/crushing/pressing for grain→flour
and coffee grinding, and economy via M-09. These are both valid *deepening* items, not broken
connections. No existing connection is arbitrary or mis-costed. The "already fed BY create:mixing"
is correctly sized (fluids/batter via mixing = everyday, one step — appropriate per §7).
No mandatory rework; the M-09 luxury→coin deepening opportunity should be carried forward as a
future proposal.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. The inbound weave set (create:compacting, create:filling, create:haunting,
create:item_application, create:mixing, create:pressing, occultism:ritual, occultism:spirit_fire)
is comprehensive and thematically tight: a bridge mod whose entire purpose is routing Create
kinetics into Occultism ritual infrastructure. M-05 (native-method gating) and M-11 (ritual/
transmutation sink) both apply correctly.
REWORK (minor, not critical): the dossier's "3rd-pillar" idea of M-08 (sterling_silver→coin) is
WEAK and would be redundant with other metal-coin weaves — leave unless the economy pillar
explicitly needs another scarce-metal source. The reserved occultengineering:spirit_solution
reagent is correctly noted; no double-spend risk found.
No existing connection is lore-clashing or mis-costed.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. Numismatics is correctly positioned as the economy HUB (destination, not
source). The dossier's note that "the weaving direction is foreign goods → numismatics vendor/
price" is accurate and consistent with M-08/M-09 motif semantics. No outgoing edges on numismatics
make sense; it is the terminal node for all sellable-goods weaves. No rework needed.

## aeronautics_bundled   [anchors: aeronautics (1) — bundle wrapper, Create de-facto]
REWORK (dossier consistency): the dossier claims 1 anchor but acknowledges Create as de-facto 2nd
via component crafting. The chunk assigns it to ≥2 pillar audit — this is a dossier debt: the
anchor field should be updated to "aeronautics, Create (2)" to reflect the reality that levitite/
propeller/hot-air-burner construction already routes through Create sheets/casings/sequenced-
assembly (M-06/M-23/M-24).
Existing connection quality: the de-facto Create→aeronautics bridge is sound. The note that "weaving
belongs on the `aeronautics` namespace dossier, not this bundle wrapper" is correct — this jar
registers 0 items/blocks; real auditing should happen on the aeronautics dossier. No arbitrary
or mis-costed connections visible here because there are none registered.
Action: update anchor field in dossier from "aeronautics (1)" to "aeronautics, Create (2)" to
resolve the inconsistency. No recipe authoring implied.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
REWORK (chunk mis-assignment): dossier shows 1 pillar (aeronautics only). This mod is a pure
cosmetic permutation layer (dye + levitite/tire = colored variant) with no processing recipes
and no cross-pillar connections. The dossier itself says "none — leave." Including it in the
≥2-pillar quality-audit chunk appears to be a mis-assignment.
Existing connection quality: no cross-pillar connections exist to audit. The vanilla-crafting dye
step is correctly evaluated as too thin to be a real 2nd pillar.
Action: flag for chunk re-assignment (should be in the 1-pillar / LEAVE candidates, not the
quality-audit set). Do not force a connection.

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound. Inbound weaves (create:filling, create:mixing) are the correct methods:
the Alcohol Boiler builds on a Create-mixed Alcohol Base fluid → a natural Create↔survival food
processing chain. The sizing is appropriate: everyday Create mixing input, mid-tier finished
spirit output (M-12 processing-chain pull).
REWORK (opportunity, not broken): the dossier flags M-09 (luxury→coin) as a STRONG 3rd-pillar
candidate — bottled spirits are a natural trade commodity. This is a valid deepening; no existing
connection is wrong. Worth carrying forward as a Phase 3 proposal for the economy weave pass.
No lore clash, no mis-costing detected.

## ars_nouveau   [anchors: magic (1)]
REWORK (chunk mis-assignment): dossier explicitly shows 1 pillar (magic). This mod is the magic
pillar's spine, not yet wired to Create/economy/survival beyond its own internal loops.
The dossier's 2nd-pillar candidates are sound (M-02 survival via Vitalic/Agronomic Sourcelinks;
M-01/M-10 imbuement hub) but remain unauth'd proposals. Including it in a ≥2-pillar quality-audit
chunk appears to be a mis-assignment.
Existing connection quality: no cross-pillar connections are in the weave log yet for ars_nouveau,
so there is nothing to audit as "existing." The made-by methods field shows only vanilla recipes.
Action: flag for chunk re-assignment. The M-01/M-02/M-10 candidates from the dossier are strong
and should be actioned in Phase 3 once properly placed in a 1-pillar weave chunk.

## astikorcartsredux   [anchors: survival (1)]
REWORK (chunk mis-assignment): dossier shows 1 pillar (survival). Pure rustic cart/farm-implement
mod; no processing recipes; no registered recipe types. The dossier evaluated M-05 (Create iron
sheets for plow/reaper) as WEAK and said "leave." Including it in a ≥2-pillar quality-audit chunk
is a mis-assignment.
Existing connection quality: no cross-pillar connections to audit. No inbound weaves from any
non-vanilla method. Made-by shows no foreign methods.
Action: flag for chunk re-assignment. Survival-only leave status is correctly assessed in the
dossier. Do not force a connection.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound. Inbound weaves (create:item_application, create:splashing) are lightweight
and appropriate for a decorative Create addon — items are finished via Create application methods,
tying the deco palette into the Create spine (M-20 deploy-application upgrade; M-04 recycles deco
potential). The sizing is correct: decorative items don't need deep chains.
REWORK (minor): the dossier's M-04 crushing-back suggestion (tile/chair → crushed-stone) is a
valid tightening of the Create↔deco loop. Not broken, but worth authoring as one simple crushing
recipe row. No lore clash, no mis-costing in existing connections.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. Inbound weaves (create:cutting, createbigcannons:*_munition_assembly types)
are the canonical methods for metal barrel fabrication and munition assembly — exactly how a
Create-native artillery addon should integrate. M-05 (native-method gating for heavy tier) is
correctly identified as a deepening option, not a missing pillar.
REWORK (opportunity, not broken): the boss-drop gate (M-05 / M-15) for heavy-autocannon/rocket
tier is a clean progression hook that the dossier flags but has not been authored. This is a
design-level proposal for the scarcity curve. No existing connection is arbitrary or mis-costed.
The Create↔aeronautics pairing is thematically tight (ship-to-ship combat needs Create-fabricated
cannons on Aeronautics ships).

## chefsdelight   [anchors: survival, economy (2)]
OK — connections sound. The economy pillar connection is via villager trades (Cook/Chef
professions selling FD meals), which is a legitimate organic→economy route even though it uses
vanilla emerald trade rather than Numismatics. No cross-pillar recipe methods are registered.
REWORK (moderate): the dossier correctly notes that wiring Cook/Chef trades onto Numismatics coins
instead of emeralds (M-09) would tighten the pack's currency coherence — the current emerald
trade is a parallel economy that bypasses Numismatics. This is a KubeJS config opportunity (not
a broken connection, but an integration gap where the economy anchor rests on vanilla rather than
the pack's actual currency layer). Worth flagging for the 0.9 economy update.
No lore clash; sizing is appropriate (meals = everyday goods, correct cost level).

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Inbound weaves (create:cutting, create:deploying) correctly place the
cardboard plane construction inside the Create craft graph — cutting cardboard + deploying
assembled components is exactly the right method tier for a logistics addon item. The aeronautics
anchor (autonomous flying courier = logistics/transport) is coherent and thematically natural.
No deepening needed; the light-economy adjacency (remote trade fulfillment) noted in the dossier
is a valid optional future edge but not a gap. No rework required.

## companions   [anchors: survival (1)]
REWORK (chunk mis-assignment): dossier shows 1 pillar (survival). Large standalone companion/boss
mod with its own internal coin system (copper/nether/end_coin) and no cross-pillar recipe methods
in the made-by field. Including it in a ≥2-pillar quality-audit chunk is a mis-assignment.
Existing connection quality: no cross-pillar connections to audit. The dossier's proposals (M-11
magic via Occultism spirit_fire for Crystallized Blood/soul gems; M-09 economy via Relic Gold) are
strong unauth'd candidates, not existing connections.
Action: flag for chunk re-assignment. The magic (M-11) and economy (M-09) proposals from the
dossier should be actioned in Phase 3 as 1-pillar→2-pillar weaves. The internal coin system
(copper/nether/end_coin) represents a competing-currency risk: if companions coins circulate
alongside Numismatics, they dilute the pack's economy coherence — this is worth a DECISION note.

== CHUNK COMPLETE ==

