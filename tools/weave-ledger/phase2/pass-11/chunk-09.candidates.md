# Phase 2 candidates — chunk-09

## create   [anchors: Create (1 — IS pillar #1)]
OK — connections sound. Create is the method library (hub), not a mod that needs a 2nd pillar. The dossier correctly notes it is the *destination* of M-03..M-06/M-08/M-12 weaves, not an outgoing edge source. No action required.

## extradelight   [anchors: survival, Create (2)]
- REWORK: The existing "Create via create:mixing" inbound weave is the right skeleton but is thin — it wires only the fluid/ingredient mixing side. The dossier candidate to "deepen via milling/crushing/pressing (grain→flour, coffee grinding)" is sound and should be concretely specified: coffee beans → `create:milling` → ground coffee (feeds extradelight morning-brew recipes); raw grain → `create:milling` → flour (feeds `extradelight:flour_dough`); sugar cane → `create:pressing` → raw juice feeding the Vat evaporation chain. These are M-12 (processing-chain pull) and are proportionate (everyday→one light step). The connections as currently described are underspecified but architecturally sound — tighten, don't replace.
- REWORK: The M-09 economy candidate (feasts as luxury sell goods) is correct but must carry the 0.9 player-run-currency caveat explicitly. Mark it provisional against that review milestone rather than open-ended ACCEPT.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. The dual-pillar is structural (the mod is a Create×Occultism bridge by design); inbound weaves from `create:compacting/filling/haunting/mixing/pressing` and `occultism:ritual/spirit_fire` are all confirmed in the made-by digest. The reserved `spirit_solution` reagent is correctly flagged. The M-08 economy candidate (sterling_silver → coin) is noted as WEAK and optional — that assessment is sound: sterling_silver is primarily an occult alloy and minting it into the pack's main currency risks diluting scarcity without adding a meaningful weave. Leave as-is unless the economy pillar specifically wants it.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. Numismatics is the economy-pillar hub and correctly identified as the *destination* (M-08/M-09), not a source requiring more outgoing edges. The dossier correctly says "leave as the destination." One minor note: the made-by digest shows no foreign recipe types (vanilla only), which is correct for a currency system — coins are crafted but the trade/bank mechanics are runtime, not recipe-typed. No rework needed.

## aeronautics_bundled   [anchors: aeronautics (1); Create de-facto 2nd)]
- REWORK: The dossier correctly deflects to the `aeronautics` namespace dossier for real weaving, but this wrapper mod still lists only 1 formal anchor (aeronautics), with Create as "de-facto." This is an audit gap: if the real content ids live under `aeronautics`/`sable` (not this namespace), the *bundle wrapper* itself is correctly 1-pillar and should be documented as such explicitly — it's a distribution artifact, not a content mod, so the connection tracking lives on the real `aeronautics` dossier. The dossier should say "this namespace: no connections to audit — see aeronautics dossier" rather than leaving M-06 half-attributed here. Low priority but clarify to avoid double-counting in connectivity metrics.





