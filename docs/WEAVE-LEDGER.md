# Weave Ledger — the running design state of the pack's web

> The persistent, shared design state every weaving chunk **reads before it writes** (docs/WEAVING-PLAN.md
> §2–4). It is the source of truth for *what is woven and why* — **not** the connectivity %. Three parts:
> the **motif registry** (shared vocabulary), the **reagent-ownership** table (no double-spend), and the
> **weave log** (every connection proposed/authored). Machine mirror: `tools/weave-ledger/weaves.json`
> (kept in sync; `tools/weave-ledger/check.py` asserts they agree). The per-mod understanding layer lives
> in `tools/mod-data/dossiers/`; the catalogue of methods to weave *through* is
> `tools/weave-ledger/methods-palette.md`.

**Read-first / write-last protocol for a weaving chunk:**
1. Read the motif registry + reagent-ownership below, and the dossiers for the mods in scope.
2. Compose weaves from **existing motifs** (most are *method-routings* — route material X through mod Y's
   method). A weave that fits no motif ⇒ **stop and queue a Gate-0 decision** (don't invent a one-off).
3. Append every weave to the log, update `weaves.json`, and record any new-motif / ambiguous calls in
   `DECISIONS.md`.

---

## 1. Motif registry — the shared vocabulary

A **motif** is a reusable *kind of connection*; **most are method-routings** ("run X through Y's method").
Adding a motif usually means adopting a new connective method — that's a **Gate 0** decision (maintainer
sign-off), because it propagates globally. Reusing an approved motif does not need a gate.

| ID | Motif | Method it rides | Pillars | Status / seed |
|---|---|---|---|---|
| M-01 | **Arcane currency** — Ars `source_gem` is the universal magic currency; foreign essences mint into/out of it | `ars_nouveau:imbuement` · `enchanting_apparatus` | magic↔magic | established · `33-magic-web-spine.js` |
| M-02 | **Mob-drop reagent sink** — an isolated mob/boss drop is given a use as a magic/economy input | the consuming mod's native method | organic↔magic/economy | established · `35-magic-web-mobs.js` |
| M-03 | **Create ore-doubling** — ore → crushed (+byproduct); a *reward*, vanilla smelt path stays | `create:crushing` | any↔Create | established · `RECIPES.md` |
| M-04 | **Create recycles deco** — metal/stone deco crushes back to raw/gravel + an XP nugget; lossy | `create:crushing` | block/deco↔Create | established · `35-web-bridges.js` |
| M-05 | **Native-method gating** — a mod's flagship item is built *in its own machine*, gated on Create parts as inputs | the mod's own machine type | any↔Create | established · `60-mffs.js` |
| M-06 | **Sequenced-assembly keystone** — endgame items are multi-stage chains through a `derpack:incomplete_*` part | `create:sequenced_assembly` | Create (depth) | established · `60-mffs.js` |
| M-07 | **Attunement catalyst** — a worldgen consumable (Galosphere allurite/lumiere shards) gates a conversion so it isn't free arbitrage | rides the host method as a catalyst | magic + survival/worldgen | established · `33`/`80`/`97` |
| M-08 | **Coin from processed scarcity** — scarce regional metal → Create-processed → minted into coin | `create:*` → `numismatics` mint | Create↔economy | proposed · #136 |
| M-09 | **Luxury good → coin** — a high-effort consumable (wine, cheese, processed crop) is a sellable trade good | `numismatics` sell/price | survival/food↔economy | proposed |
| M-10 | **Arcane infusion pull** — a foreign material is refined/attuned into a magic reagent through an arcane infusion method | `ars_nouveau:imbuement` · `forbidden_arcanus:*infusion*` | any↔magic | proposed (generalizes M-01) |
| M-11 | **Ritual / transmutation sink** — a drop or material is transmuted into an essence through a ritual/spirit method | `occultism:spirit_fire` / `ritual` | organic↔magic | proposed · `34`/`35-magic-web-*` |
| M-12 | **Processing-chain pull** — a raw crop/material is run through another mod's processing method into a finished/sellable good | `farmersdelight:cooking`/`cutting` · `create:milling`/`mixing` · `extradelight:*` | survival↔Create/economy | proposed (generalizes M-03/M-09) |

_Motif rules: **compose, don't invent**; a motif carries its **anti-arbitrage rule** (M-01/M-07
round-trips lose value; M-04 is lossy). New motifs enter via Gate 0 — log the request in `DECISIONS.md`._

---

## 2. Reagent-ownership — reserved connective items (no double-spend)

Before giving an item a **new** connective role, check here. A conflict is a `DECISIONS.md` escalation,
not a local override. (Two chunks repurposing the same reagent incompatibly is a top fragmentation risk.)

| Reagent | Reserved role | Motif |
|---|---|---|
| `ars_nouveau:source_gem` | the universal magic currency hub | M-01 |
| `galosphere:allurite_shard` / `lumiere_shard` | attunement catalyst (gates magic conversions; not free arbitrage) | M-07 |
| `occultengineering:spirit_solution` | the occult intermediate (reuse; don't invent a new reagent) | M-11 |
| `create:experience_nugget` | standard `create:crushing` byproduct | M-03 / M-04 |
| `numismatics:*` (cog / spur / bevel / sprocket / crown / sun) | the coin sink — owned by the economy pillar | M-08 / M-09 |
| `irons_spellbooks:arcane_essence` | Iron's-side magic currency, bonded to source via M-01 | M-01 |

---

## 3. Weave log

Each authored or proposed connection. Status is a state machine:
`proposed → approved → authored → validated(static) → playtested`. Confidence is two independent flags:
**COHERENT** (an LLM can assert) and **BALANCE-OK / BALANCE-PENDING** (only play confirms).

Format:
```
W-### | from: <mod/material> → to: <pillar/mod> | hook: <why a player says "of course">
      | motif: M-## | method: <recipe-type the weave routes through>
      | status: <state> | confidence: COHERENT, BALANCE-PENDING
      | pillars-added: <mod> gains <pillar> (now N) | sources: [digest][url]
```

_No weaves authored yet — Phase 0/1 build the understanding layer (dossiers) first; authoring is Phase 3._

<!-- WEAVES: append below this line; keep weaves.json in sync. -->
