# Phase 2 candidates — chunk-09

## create   [anchors: Create (1 — IS the pillar)]

The dossier is clear: Create is the method-library hub that other mods weave INTO. It is not a mod that
needs a 2nd pillar — it is pillar #1 and every M-03/M-04/M-05/M-06/M-08/M-12/M-19/M-20 connection
rides one of its 17 recipe-types. No outgoing weave edge belongs on Create itself.

- LEAVE — Create is the universal pull-target (the method library); every pillar already threads through
  its recipe-types. Adding an outbound edge would invert the weaving direction. Dossier confirms
  explicitly: "N/A as a recipient — do not author edges that consume Create itself."

## extradelight   [anchors: survival, Create (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- survival ← its 146+ meals, 43 feasts, crops, kitchen decor. Solid.
- Create ← `create:mixing` (inbound weave in made-by; fluids/ingredients mixed via Create). This is a
  single upstream edge. The dossier flags the opportunity to deepen it: milling→flour, crushing→ground
  coffee/spices, pressing→juice/oil, with the Vat/Evaporator fluid-reduction using Create as input.

Audit of EXISTING connections:
- OK — survival anchor is well-grounded; the food variety is genuinely survival-facing.
- REWORK (depth): the Create weave is currently a single `create:mixing` inbound edge — thin for a mod
  with 16 registered recipe types of its own. The dossier identifies the correct tightening: route
  grain → flour via `create:milling`, coffee/garlic/spice grinding via `create:milling`, and liquid
  reductions (apple cider, syrups, salt) into `create:mixing` / `create:compacting` before they hit the
  Vat/Evaporator. That turns extradelight's kitchen into a *downstream* consumer of Create intermediates,
  not just something Create can mix ingredients for. This is M-12 (processing-chain pull) — accepted motif,
  depth scales correctly with these everyday inputs.

New candidates to deepen the 2nd pillar:

- from: grain crops (c:crops/wheat etc.) | via: create:milling → extradelight:oven/dough_shaping | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds flour that feeds the bakery — the Create spine runs through the kitchen

- from: coffee beans (c:crops/coffee) | via: create:milling → extradelight:oven/mixing_bowl | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: industrial coffee grinding before brewing is exactly what the mill is for

- from: extradelight feast dishes (high-effort cooked products) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a feast platter is the colony chef's premium trade good; cook effort → coin is coherent

- from: extradelight:apple_cider / fruit syrups (fluid outputs) | via: create:compacting / numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled cider is a sellable luxury — the same chain Alcohol Industry rides

- from: extradelight:drying_rack outputs (dried herbs/fruits) | via: ars_nouveau:imbuement (herb-infusion) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: dried culinary herbs going into arcane infusion is a stretch — the tone is domestic-kitchen, not apothecary; theme-fit fails. Leave culinary herbs as food, not magic reagents.

## occultengineering   [anchors: Create, magic (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- Create ← `create:compacting, create:filling, create:haunting, create:item_application, create:mixing, create:pressing` — a full inbound suite; deep and grounded.
- magic ← `occultism:ritual, occultism:spirit_fire` — the OCE bridge-mod is literally the Create×Occultism joint. These connections are structural, not incidental.

Audit of EXISTING connections:
- OK — both pillars are genuinely present. The mod exists *specifically* to be this bridge; the connections are not forced.
- OK — `occultengineering:spirit_solution` is correctly reserved in the reagent-ownership table; it's the occult intermediate (M-11). No double-spend risk here.
- REWORK (very light): the dossier flags a WEAK 3rd-pillar candidate — sterling silver (c:ingots/sterling_silver) minted into coin via M-08. This is worth surfacing but probably not worth authoring until the 0.9 economy pass. Note: sterling silver is a scarce occult alloy; Create-crushing → numismatics mint reads as coherent (M-08), but it's a bonus weave, not a gap.

Optional candidate (not a gap, improvement only):

- from: occultengineering:sterling_silver (ingot, Create-processed scarcity) | via: create:crushing → numismatics vendor/mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT (low priority — 0.9 economy pass) | hook: occult alloy refined through the industrial spine enters circulation as a premium coin metal

- from: occultengineering:spirit_solution | via: ars_nouveau:imbuement (arcane conversion) | to: magic (Ars) | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is reserved as the Occultism-side intermediate (M-11); cross-wiring it into Ars imbuement would double-spend the reagent across two magic systems without a Gate-0 decision. Escalate if desired.

## numismatics   [anchors: economy, Create (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- economy ← numismatics IS the economy pillar keystone. Coins, vendors, bank accounts — this is the destination for M-08/M-09/M-14 weaves.
- Create ← hard dependency; coins/machines are Create-styled; crafted via Create.

Audit of EXISTING connections:
- OK — both pillars are structurally present and correct. Numismatics is the destination node for the economy web; it is correct that it has no outbound edges into other pillars. The dossier notes: "leave as the destination, don't add an outgoing edge."
- OK — reagent-ownership is clean; the coin types (spur..sun) are reserved to the economy pillar.
- No REWORK items needed. The existing weaving direction (other mods → numismatics vendor) is correct.

No new candidates: this mod is the economy hub, not a mod that itself needs weaving. All economy connections are inbound.

- LEAVE — numismatics is the economy-pillar hub; it functions as the destination in every M-08/M-09/M-14/M-21 weave. Adding outbound edges from coins would invert the design. No 2nd-pillar gap.

## aeronautics_bundled   [anchors: aeronautics (1)]

The dossier is clear: this is a bundle-wrapper jar that registers 0 blocks, 0 items, and 0 recipe types
under the `aeronautics_bundled` namespace. Real content (levitite, propeller bearing, envelope/hot-air
burner, etc.) registers under the `aeronautics`/`sable` namespaces. The dossier explicitly states that
"weaving belongs on the `aeronautics` namespace dossier, not this bundle wrapper."

Power-read: there is nothing to weave here — no materials, no recipe-types, no outputs.

- LEAVE — bundle-wrapper with zero content under this namespace. Weave candidates belong on the `aeronautics` dossier. Forcing an edge here would be attaching to nothing.

