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

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- REWORK: The dossier says "none — leave" which is the right call for a cosmetic skin layer. However, it currently has only 1 formal anchor. There is one legitimate light weave that reads naturally: dyed levitite/tires consume a vanilla dye in their crafting recipe — routing the dye step through `create:toolbox_dyeing` (Create's toolbox dye method) rather than a crafting table would give this a legitimate Create inbound without being contrived, making it aeronautics + Create (2). This is a M-20 (deploy-application upgrade) borderline or simply `create:toolbox_dyeing` — the dye IS the step, not a complex chain, so it passes the "not gating basics behind complexity" test. The dossier dismisses this as "gilding" but it's not: it's the difference between 1 pillar and 2, and the connection is natural (a Create-flavored dye step on a Create-adjacent component). Flag for review rather than LEAVE unconditionally.
- REWORK: Alternatively, if the dye recipe cannot route through a Create method (toolbox_dyeing applies to toolboxes, not levitite), then the LEAVE conclusion is correct and the dossier should state that more explicitly as a confirmed dead end, not just a "WEAK — none."

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound. The Create inbound weave (create:filling + create:mixing confirmed in made-by digest) is solid and appropriate. The M-09 economy candidate (bottled spirits as luxury sell goods) is the natural 3rd-pillar deepening and is correctly identified as STRONG — this is a manufacturing chain with a clear high-effort output (alcoholic drinks with effects), which is precisely the M-09 pattern. The only audit note: the 0.9 player-run-currency caveat on M-09 should be attached to this candidate as well (same global flag as for extradelight/chefsdelight). Mark accordingly.

## ars_nouveau   [anchors: magic (1)]
- REWORK: The dossier lists anchors as magic (1) with two 2nd-pillar candidates but does NOT reflect any authored inbound weaves in made-by (digest shows vanilla only). The Vitalic/Agronomic sourcelink connection (M-02, organic→magic) and the imbuement hub (M-01/M-10) are both proposed but not yet authored. This is a Phase 2 proposal state, which is correct — but the audit finding is: the 1-pillar status is accurate until these are authored, and the candidates are well-identified. No rework to the logic needed.
- REWORK: The M-09 economy candidate (source_gem/spell scrolls as sellable goods) is correctly marked WEAK and deprioritized in favor of dedicated arcane-currency weaves. However, there is an unnoticed connection: Ars Nouveau's `ars_nouveau:crush` method (listed in registered recipe-types) could accept foreign minerals/ores as an alternative arcane crushing path — this is a methods-palette method that no dossier has flagged as a pull target. Worth noting as a candidate: foreign materials crushed via `ars_nouveau:crush` would give Ars a mechanical role beyond spellcasting, strengthening the Create↔magic spine via an alternative processing route (M-12). This is not in the current dossier candidates — flag as a new candidate for review.
- from: foreign ore/mineral | via: ars_nouveau:crush | to: Create/magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT (for review) | hook: the Arcane Crusher grinds metals into dust by channeling Source — the magic web contributes to processing, not just buffs








