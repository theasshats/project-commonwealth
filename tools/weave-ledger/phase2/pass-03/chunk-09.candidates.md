# Phase 2 candidates — chunk-09
<!-- pass-03 · mode=blind · quality-audit (all mods ≥2 pillars) -->

## create   [anchors: Create (1 — IS the pillar)]
OK — connections sound. Create is the hub, not a recipient. Dossier correctly marks it N/A as a weave target. No rework items.

## extradelight   [anchors: survival, Create (2)]
OK — connections sound. Existing anchors are solid: made-by `create:mixing` (inbound Create weave) + `farmersdelight:cooking/cutting` (survival chain). Dossier proposes deepening Create (milling/crushing for grains/coffee) via M-12 and an economy lift via M-09 (feasts as luxury sellables) — both coherent and well-reasoned. No existing connection is arbitrary or mis-costed. The two pillars are correctly identified.

REWORK (minor): Dossier lists the M-09 economy candidate as "[MED]" without noting the M-09 player-run-currency caveat. Flag for the 0.9 review: feast prices must be set by players/server, not hardcoded vendor prices — keep the note visible so it doesn't get authored incorrectly.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. By construction the Create×Occultism bridge: eight inbound foreign recipe-types (create:compacting/filling/haunting/item_application/mixing/pressing + occultism:ritual/spirit_fire) confirm both pillars are real and deep. `spirit_solution` correctly reserved as the occult intermediate. The weak M-08 sterling-silver→coin candidate is noted as WEAK, appropriately; no pressure to activate it now.

REWORK (minor): The dossier lists `sterling_silver` as a c:tag material but doesn't explicitly confirm whether it appears in the `c:ingots/sterling_silver` tag used by other mods' recipes. Worth verifying before any M-08 authoring — a mis-tagged material would produce a silent no-op.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. Numismatics is correctly identified as the destination hub (M-08/M-09 target), not a source requiring a weave out. The dossier's "leave as destination" guidance is correct — all weaving should point *to* numismatics vendors/prices, not route numismatics outputs elsewhere.

## aeronautics_bundled   [anchors: aeronautics (1 — IS the pillar spine)]
OK — connections sound. Bundle wrapper with 0 items/blocks; real weaving belongs on the `aeronautics` namespace dossier (correctly noted). The de-facto Create 2nd pillar via component crafting is real (levitite/propellers/tires all route through Create sheets/casings), but since this namespace registers nothing, no recipe-level connection can be authored here. No rework needed; flag the `aeronautics` dossier as the right authoring target if a formal 2nd-pillar record is needed.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
REWORK: Dossier records this at 1 pillar — does NOT qualify for quality-audit strictly speaking, but it is included here. The dossier's own analysis ("none — leave") is correct: this mod is a pure cosmetic permutation (dye + tire/levitite → colored variant). Forcing a Create-routing for the dye step would be gilding, and there is no economy or magic angle that isn't contrived. The correct disposition is LEAVE — cosmetic color skin layer; no coherent 2nd pillar; survives as a 1-pillar support mod under the aeronautics spine.

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound. Inbound weaves are real (`create:filling` + `create:mixing` confirmed in made-by). Create and survival are both genuine. The dossier's M-09 economy candidate (bottled spirits as luxury sellable) is STRONG and correct — this is a natural 3rd connection to propose, not a rework of existing ones.

REWORK (none on existing connections). The M-09 economy upgrade path is well-reasoned and ready for Phase 3 authoring, subject to 0.9 currency-review caveat.

## ars_nouveau   [anchors: magic (1)]
REWORK: Dossier lists 1 pillar (magic only) — does NOT qualify for quality-audit strictly; it is a 1-pillar mod in this chunk. Per briefing rules, this should receive standard phase-2 proposal treatment rather than audit-only. Noting the gap:

- from: crop/mob surplus (any mod's output) | via: Agronomic/Vitalic Sourcelink (non-recipe, passive) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: your farm and mob farm passively charge the arcane network — the magic machine feeds itself.
- from: `ars_nouveau:source_gem` ↔ foreign essences | via: `ars_nouveau:imbuement` | to: magic (internal hub) | motif: M-01/M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: every magic mod's essence converts through the same arcane currency.
- from: spell scrolls / source gems | via: `numismatics` vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier correctly flags this WEAK — prefer dedicated arcane-currency weaves; adding a direct spell-scroll vendor cheapens the magic pillar's internal economy.

Effective anchors after M-02 + M-01/M-10: magic + survival (2).

## astikorcartsredux   [anchors: survival (1)]
REWORK: Dossier records 1 pillar — does NOT qualify for quality-audit. 1-pillar mod; standard phase-2 disposition:

- from: plow blade / reaper | via: `create:cutting` or `create:pressing` (iron sheets as gated component) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: dossier correctly calls this WEAK — the mod is vanilla-crafted wooden carts and hand tools; injecting a Create gate on the plow blade contradicts the rustic-agrarian vibe (a farmer shouldn't need a mechanical press to build a wooden plow). Forced.
- LEAVE — rustic agrarian transport flavor; no coherent 2nd pillar that isn't contrived. Survives on survival anchor alone. Candidate for cut review if the one-pillar bar is enforced strictly.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound. Both pillars confirmed by inbound weaves (`create:item_application` + `create:splashing` — chain pulley is kinetic Create content; deco tiles + chairs fill the survival/decoration pillar). M-04 crush-back-to-stone candidate is a coherent deepening of the Create pillar, noted as [MED] — appropriate. No rework items.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. Inbound weaves confirm both: `create:cutting` + CBC's own assembly recipe-types for munitions (Create manufacturing), and the mod's explicit purpose is arming Aeronautics ships. The M-05 boss-key suggestion for heavy-autocannon/rocket tier is a good progression note.

REWORK (suggestion): Dossier frames the M-05 boss-key as "deepening only" but it is actually the pack's intended Create-tech unlock mechanic (DESIGN north star: complex Create tech unlocks via MineColonies or boss drops). This should be promoted from a casual note to a formal M-05 candidate in Phase 3 planning — the rocket/heavy-autocannon tier is clearly endgame/flagship and the boss-drop gate is thematically sensible (power = endgame → deep chain warranted).

## chefsdelight   [anchors: survival, economy (2)]
OK — connections sound. Two pillars are genuine: survival (FD meals / food content) and economy (Cook + Chef villager professions selling food). The M-09 / M-21 upgrade (bridging villager emerald trades to numismatics coins) is noted as [MED] and correctly flagged as config/KubeJS work.

REWORK (minor): The M-21 (trade-seam to economy) motif is provisional and leans "no" from the maintainer. The dossier mentions routing trades onto numismatics but doesn't flag the M-21 provisional status. If this connection is proposed in Phase 3, it should explicitly cite M-21 provisional and request Gate-0 sign-off before authoring — the existing M-09 framing (luxury-good→coin) is safer if the cook's dishes are sold via a numismatics vendor block rather than modifying the villager trade itself.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound. Both pillars confirmed by inbound weaves (`create:cutting` + `create:deploying` for the cardboard plane). Aeronautics/logistics pillar is real — autonomous flying package delivery is the aeronautics logistics use-case directly. Light economy adjacency (remote trade fulfilment) exists but is correctly left as a note rather than a proposed edge.

## companions   [anchors: survival (1)]
REWORK: Dossier records 1 pillar — does NOT qualify for quality-audit. 1-pillar mod; standard phase-2 disposition:

- from: Crystallized Blood / soul gems / essences (Soul Furnace outputs) | via: `occultism:spirit_fire` or `ars_nouveau:imbuement` | to: magic | motif: M-11 / M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's transmuted reagents feed the arcane web — ritual ingredients rather than a private island.
- from: Relic Gold / soul gems (Sacred Pontiff boss drop) | via: `numismatics` vendor | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: rare boss-drop relics fetch coin from arcane traders — combat pays.
- from: Tesla/Voltaic deco blocks | via: `create:crushing` | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Voltaic Pillars and Tesla Coils are gothic-alchemical set dressing; framing them as "Create recycles deco" implies they're just scrap metal — tonal clash. The mod's vibe is arcane-gothic, not industrial; the crushing loop feels like a forced Create tollgate.

Effective anchors after M-11 + M-09: survival + magic + economy (3). Magic is the priority 2nd pillar.

== CHUNK COMPLETE ==
