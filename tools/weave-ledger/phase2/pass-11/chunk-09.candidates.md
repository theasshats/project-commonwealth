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

## astikorcartsredux   [anchors: survival (1)]
- REWORK: The dossier's M-05 candidate (gate plow blade/reaper on Create-processed iron sheets) is the right instinct but the reasoning is labeled WEAK — this underrates it. An iron sheet requirement on the metal-bearing implements (plow, reaper) is a single light step proportionate to an everyday/mid item, and it ties the farm-tools tier to the tech spine exactly as M-05 intends. The WEAK rating should be reconsidered: the connection is thematically legible (forged plow blade vs. raw wood carts), architecturally correct, and does not over-engineer. The only honest reason to call it WEAK is if the cart items are fully wooden and iron sheets would be a tier jump — which may be true for the hand_cart/animal_cart but NOT for the plow/reaper (which are metal tools). Recommend splitting: leave wood-only carts vanilla, give plow + reaper a Create iron-sheet input. This is a sound M-05 connection.
- REWORK: The "none strong — leave" conclusion on the survival-only anchor should be explicit that 1 pillar is acceptable for a flavor/logistics mod, not that no path exists. The plow/reaper M-05 path is viable; the dossier currently soft-dismisses it.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound. The Create inbound weaves (create:item_application + create:splashing confirmed in made-by digest) are appropriate. The M-04 deco-recycle candidate (tile blocks crushable via create:crushing) is a correct optional deepening. One minor audit flag: the dossier cites survival as the 2nd pillar (broad decoration palette for builds), which is thematically accurate but architecturally thin — decoration alone is a weak survival anchor. The stronger story is that bits_n_bobs is Create + Create-depth (chain drives, nixie displays are functional mechanical tools, not just deco). If the second pillar is characterized as "Create-kinetic depth" rather than "survival decoration," the case is stronger. Not a blocking rework but worth noting for clarity.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. The Create inbound (create:cutting confirmed in made-by digest, plus CBC assembly chain) is correct. The aeronautics anchor (arms ships/contraptions) is legitimate. The M-05 progression note (gate heavy autocannon/rocket tier behind boss drop or MineColonies) is a design-depth improvement, correctly scoped as optional deepening rather than a missing pillar. No rework needed on existing connections.

## chefsdelight   [anchors: survival, economy (2)]
- REWORK: The existing economy anchor is characterized as "villager-trade source to the economy pillar" — but villager trades use emeralds (vanilla currency), not Numismatics coins. This means the economy pillar claim rests on an emerald economy, not the pack's actual currency layer. The connection is real (food enters the trade economy) but it's not wired to the pack's economy pillar properly until the emerald→Numismatics bridge is made. The dossier's M-09/M-21 candidate (route cook trades onto numismatics coins) is the fix. The current 2-pillar claim is overstated: chefsdelight is survival + proto-economy, not survival + economy proper. Flag this for the 0.9 economy update.
- REWORK: The made-by digest shows no foreign recipe types (vanilla only) and 0 items — the mod's content is purely villager profession + structure data. This means there are no recipe-typed inbound weaves to audit; all connections would be data-driven (trade JSON overrides or KubeJS). That's fine, but should be explicit in the dossier: no recipe-type weaves possible here, weaving is trade-table only.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Create inbound (create:cutting + create:deploying confirmed in made-by digest) is correct. The aeronautics anchor (autonomous flying courier) is a genuine logistics/aeronautics pillar contribution. The light economy adjacency (remote trade fulfilment) is correctly left as an optional note rather than a forced edge. No rework needed.

## companions   [anchors: survival (1)]
- REWORK: The dossier's magic candidate (M-11/M-02: Crystallized Blood / soul gems / essences into Occultism spirit_fire or Ars imbuement) is the strongest and most natural weave path, correctly rated STRONG. The connection is thematically coherent (soul alchemy → occult processing), proportionate (mid-tier drops from hostile companions mobs), and doesn't gate basics. This should be the primary connection to propose.
- REWORK: The M-09 economy candidate (Relic Gold / soul gems as sell goods) is correctly rated MED. One clarification the dossier misses: companions has its own copper/nether/end coins that conflict with Numismatics. The dossier notes this but doesn't fully resolve it — the resolution path is either (a) suppress companions' coins in favor of Numismatics, or (b) define companions' coins as a separate dungeon-only loot currency that doesn't compete (like D&D treasure). This is a design decision that should be logged before authoring any economy weave for companions.
- REWORK: The M-04 Create candidate (Tesla/voltaic deco → copper/metal scrap via create:crushing) is rated WEAK, which is accurate. The Tesla coil/voltaic pillar aesthetic is gothic-electrical, and crushing it back to copper is mechanically sound but thematically thin (it doesn't add depth, just recyclability). Acceptable as a very light M-04 edge but not a priority.

== CHUNK COMPLETE ==













