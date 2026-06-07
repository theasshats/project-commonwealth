# Aeronautics data gap — context + recovery (read before acting on the registry dump)

## The problem (one line)
Create Aeronautics registers its blocks/items in **Java code**, so `scripts/extract-mod-data.sh` (a static
jar scanner) captures them as **0 blocks / 0 items**. The aeronautics PILLAR — the whole airship/vehicle layer
— is therefore invisible to the digest, the dossiers, and the Phase-2 weave passes. Re-running the scan or
`build-dossiers.py` will NOT fix it (confirmed: tree clean, by-mod still empty after a regen). This is the real
shape of #131 for this mod: a *scanner-can't-see-code* limit, not stale data.

## What we already did (so it isn't redone)
- Found the content namespace is **`aeronautics:`** (not `aeronautics_bundled:`). The bundle jar
  (`create-aeronautics-bundled-1.21.1-1.2.1`) ships three sub-modules: Simulated, Aeronautics, Offroad; all need
  **Sable** (physics). Addon ns `aeronautics_dyeable_components` (tires/levitite) DID scan — it has real items.
- Only one aeronautics item is digest-grounded: `aeronautics:levitite_blend_bucket` (recovered from recipe data).
- Hand-authored a wiki-researched dossier: `tools/mod-data/dossiers/aeronautics.md` (NOT frozen; reviewable).
  Backing research: `tools/weave-ledger/phase2/aeronautics-research-A.md` + `-B.md`.
- **Confidence caveat:** the live wikis blocked direct fetch (Fandom 403, Miraheze 503). The dossier is built
  from search snippets + the GitHub changelog (the most authoritative source that DID load) + secondary guides.
  Component *families* and the levitite/Create/fuel dependencies are solid; **exact item IDs and most recipes
  are unknown.** Good enough for proposal-level passes; NOT authoritative for Phase-3 authoring.

## What is known (wiki/changelog-grounded)
- **Levitite** = the lift keystone; **zinc-gated** (Create-native), made via a **"levitite blend"** intermediate
  finished by **in-world crystallization** (a code recipe — why the scanner misses it). 10 kpg lift; End Stone
  substitutes at 2 kpg. **Levitite Alloy** = higher tier (recipe unknown).
- **Gyroscopic Propeller Bearing** = wooden slab + Gyroscopic Mechanism + Brass Casing (the one confirmed recipe → mid/brass Create tier).
- Propeller bearing + sail blocks (wool/wooden 0.5×, sail 1×, phantom 2×); hot-air burner (any furnace fuel) + envelope; **Physics Assembler** (turns a build into a vehicle); control/sensor blocks; portable engine; borehead bearing (flying drill); rope/docking connectors; dyeable tires (4 sizes).
- Honey Glue uses `#c:honey`.

## What is STILL missing (needs the registry dump — see the issue)
Exact `aeronautics:` item/block IDs; the levitite-blend recipe; Physics Assembler recipe; propeller bearing
recipe; levitite alloy recipe; tire names/recipes; offroad engine fuel type. Also unconfirmed: whether the
levitite crystallization step can accept a magic catalyst (the aeronautics↔magic seam — needs source check).

## After the dump lands
Use the resume prompt (issue body / handoff). Short version: drop the dump into `tools/mod-data/by-mod/` (or
hand-fill `aeronautics.md`'s AUTO-DIGEST-FACTS), rerun `build-dossiers.py`, confirm `aeronautics` shows real
counts, run ONE more full pass (`--full`) so the now-visible parts get woven, then re-derive the freeze with
`phase2-freeze.py --passes 13,14,15,<new>` and re-merge.

---

## RESUME PROMPT (give to a fresh instance AFTER the registry dump / lang extraction lands — issue #179)

> Continue the Derpack X weaving workstream on branch `claude/weaving-plan` (do NOT rename, do NOT open a PR).
> Read CLAUDE.md, docs/WEAVING-PLAN.md, DECISIONS.md, and
> tools/weave-ledger/phase2/{NEXT-SESSION.md, AERONAUTICS-DATA-GAP.md, PHASE2-BRIEFING.md}.
>
> Context: issue #179 (Create Aeronautics is code-registered; the jar scanner saw it as 0/0). A maintainer has
> now landed authoritative aeronautics data (registry/recipe dump or a lang-file extraction into
> tools/mod-data/by-mod/create-aeronautics-bundled-*.txt, and possibly recipes/loot files).
>
> Do this, in order:
> 0. PARSE THE RAW DROP: the maintainer committed raw extraction under `tools/mod-data/raw-aeronautics/`
>    (per #179 — likely `en_us.json` lang file, maybe `registries.json` / recipe / loot JSONs, or the jar
>    itself). If only the jar is there, `unzip -p <jar> assets/aeronautics/lang/en_us.json`. Parse the
>    `item.aeronautics.* / block.aeronautics.*` keys into real `aeronautics:` ids and write them into the
>    `## blocks` / `## items` sections of `tools/mod-data/by-mod/create-aeronautics-bundled-1.21.1-1.2.1.txt`
>    (one id per line, match the format of any populated by-mod file). Add recipe/loot lines to
>    `tools/mod-data/recipes/` & `loot/` if the raw drop has them. If `raw-aeronautics/` is empty, STOP — the
>    extraction didn't land.
> 1. VERIFY: `grep -A2 'items' tools/mod-data/by-mod/create-aeronautics-bundled-*.txt` now shows real
>    `aeronautics:` IDs (non-empty).
> 2. Rebuild dossiers: `python3 scripts/build-dossiers.py`. Confirm `tools/mod-data/dossiers/aeronautics.md`
>    AUTO-DIGEST-FACTS now shows real counts. NOTE: build-dossiers may regenerate aeronautics.md from the jar
>    and could clobber the hand-authored sweep — preserve the wiki-grounded "2nd-anchor candidates" + "open gaps"
>    notes (levitite→economy/magic, burner→M-13, etc.) by re-folding them above the AUTO mark. Also delete the
>    now-redundant `aeronautics_bundled.md` stub if the real `aeronautics.md` supersedes it.
> 3. Reconcile the levitite-blend / Physics Assembler / propeller-bearing / levitite-alloy recipes from the new
>    data into the dossier's make-chains; resolve the open gaps listed in AERONAUTICS-DATA-GAP.md. If the
>    crystallization step can take a magic catalyst, flag it as a real aeronautics↔magic Gate-0 candidate.
> 4. Confirm usage is OK, then run ONE more FULL weave pass so the now-visible aeronautics content gets woven:
>    `python3 scripts/phase2-chunks.py --pass 16 --seed 16 --full` → dispatch 36 blind agents (opus on the
>    MANIFEST opus_chunk, rest sonnet) with the standard blind prompt from NEXT-SESSION.md → commit each chunk →
>    `python3 scripts/phase2-merge.py`.
> 5. Re-derive the freeze with the new sample added: `python3 scripts/phase2-freeze.py --passes 13,14,15,16 --write`,
>    verify `frozen ∩ accepts = NONE`, commit.
> 6. Report: aeronautics' new candidate count, whether the in/outbound hooks (levitite→economy/magic, M-13/M-23/
>    M-24 inbound) survived with real IDs, and the updated convergence totals. Then resume normal blind passes on
>    the reduced (post-freeze) set toward Gate 2.
>
> Keep your own context light during runs; commit per chunk; no PR; don't put the model id in commits.
