# V2-S sweep briefing — strong-model, single pass, context-fed (READ FULLY, THEN WORK)

You are one chunk-agent in a **pilot sweep** of Project Commonwealth's weave program. The discovery
corpus and a ratified weave slate already exist; v0.7.0 has since **shipped** (real recipes, removed
mods, new mods, a rewritten ore map). Your job is to re-judge and extend the slate for YOUR mods
against the **shipped reality**, with the judgment quality the earlier (weaker-model) run couldn't
provide. **You author nothing in the pack** — your output is a findings file.

## Calibrate on the LOOP, not on counting systems

The pack's model (docs/SYSTEMS.md) is one causal loop:

```
SCARCITY ──drives──▶ PRESSURE ──creates demand──▶ PRODUCTION ──feeds──▶ ECONOMY
    ▲ (regional ore-gen)   (survival + danger)        (Create/magic;       (trade + the
    │                                                  colony/boss routes)  aeronautics/logistics arm)
    └──── return edges: consumption renews demand; trade relieves scarcity locally
          without erasing it; growth re-opens scarcity a tier up ────────────────┘
```

**The acceptance test for ANY weave is: which loop edge does it advance?** (Pressure pulling on
production; production output the economy must move; a scarcity gate forcing cross-region trade; a
consumption edge renewing demand.) "It adds a second system/anchor" is **bookkeeping, not a
justification** — a link with no loop motion is the known failure mode (the demoted deco-crush class).
Pillar/milestone tags in the data are filing labels only. When you write a verdict, name the loop edge
in the `loop:` field; if you can't name one, that IS the verdict.

## Inputs (read for each of your mods)

- **Dossier:** `tools/mod-data/dossiers/<ns>.md`. For the digest-only NEW mods your chunk file names,
  read the raw digest `tools/mod-data/by-mod/<file>.txt` instead (you don't need the dossier layer).
- **Ratified slate rows:** `awk -F'\t' 'NR==1||$1=="<ns>"' tools/weave-ledger/phase2/triage/decisions-ratified.tsv`
  — judge rows with `ratified` ∈ {KEEP, PLUMB}; ignore CUT/MERGE/REMOVED history unless you need it.
- **Shipped recipes:** grep `kubejs/server_scripts/` — v0.7.0 shipped ~116 recipe files; a slate weave
  may already exist, partially exist, or be contradicted.
- **Motif registry + reagent ownership:** `docs/WEAVE-LEDGER.md` (M-01..M-38; retired M-09, cut
  M-14/M-21; MECHANISM-PENDING M-25/M-36/M-38 are build tasks, never weaves).
- **Drop-only context** (mob drops nothing consumes): the table in `docs/CONNECTIVITY.md` — a scope
  input where your mod holds a pile (tide, grimoireofgaia, born_in_chaos_v1, deeperdarker,
  minecolonies, irons_spellbooks…). Self-useful drops (gear/food/discs) need no weave.
- Corpus history if a call needs it: `tools/weave-ledger/phase2/CANDIDATES.tsv` (col 3 = mod).

## Hard rules (carried from the rulings — do not relitigate)

- **Economy is player-run.** No NPC coin faucets; "sellable" is ambient, never a weave. An economy
  link counts only as demand-gating (M-08/M-26/M-28/M-29/M-30/M-33/M-34/M-37).
- **Mechanism-pending ≠ weave:** M-25 ecological cost, M-36 perishability, M-38 tooling wear, dynamic
  pricing — build tasks (#222/#238/#239/#240). Flag fits, don't propose them as authorable.
- **Depth scales with power** — never gate an everyday item behind a deep chain.
- **Reagent ownership table is binding** (no double-spend; ambergris is M-10's).
- **`galosphere:*silver*` is PALLADIUM** (legacy id) — never treat it as silver; real silver is occultism.
- **No forced weaves on cosmetic/organic identity** — LEAVE is a valid, respected verdict.
- Blanket deco-crush (M-04) is plumbing: grants nothing, lives in one batch — don't re-propose it per mod.

## What to produce, per mod (six channels)

For EVERY ratified KEEP row of the mod: **confirm**, **challenge**, or **shipped**. Then add **new**
findings only where you'd stake your judgment on them. Use **leave** when the mod has no coherent
loop surface (one line; don't force).

- `confirm` — the weave survives your scrutiny against shipped reality. One line; cite evidence.
- `challenge` — it should be dropped/changed: tone, balance, motif misfit, contradicted by shipped
  recipes, loop-inert. Say exactly why; this channel is your highest value. **If the weave is right
  but its delivery is wrong/unauthorable, use `act: RESCOPE` and state the corrected delivery in the
  note** (pilot lesson — don't overload challenge+KEEP).
- **Balance tensions are not verdicts:** if a row is sound but supply/inflation/rates need play data
  (e.g. two demands on one vein), keep your verdict and append `[BALANCE-PENDING: <one clause>]` to
  the note — these route to playtest, not the ledger.
- `shipped` — the weave (or a real equivalent) ALREADY exists in `kubejs/` — cite the file. (act: DONE)
- `new` — a weave the old run missed: deeper, multi-step, mechanism-grounded. **Where your mods allow,
  probe the two starved seams: pressure→aeronautics demand (does cold/season/danger ever pull on the
  logistics arm?) and Create→magic flow.** Quality over count — an empty new-channel is acceptable;
  a padded one is not.
- `leave` — zero-surface (libraries, admin tools, pure cosmetics).
- `custom` — the weave is **loop-positive but its mechanism doesn't exist** and KubeJS/datapack can't
  reach it (code-side behavior, missing system). Do NOT drop these: `kind: custom | act: CUSTOM`,
  state the wanted feature in one line — the pack builds purpose-built mods (`docs/CUSTOM-MODS.md`;
  `pcmc-arcana` is the magic-side landing zone) and these route to `sweep/CUSTOM-MOD-CANDIDATES.md`
  for maintainer cherry-pick. (The standing M-25/M-36/M-38/pricing build-tasks keep their issues —
  this channel is for *new* mechanism-absent finds.)

## Output format (STRICT — one line per finding; machine-parsed later)

Append to your chunk's findings file (path in your task prompt) **incrementally, one mod at a time**:

```
## <ns>
- kind: confirm|challenge|shipped|new|leave | ref: <the slate row's link text, or for new: NEW <ns:item(+ns:item)> → via <method> → <target>> | motif: M-##|none | loop: <which loop edge this advances, one clause> | act: KEEP|DROP|DONE|ADD|LEAVE | evidence: <dossier/digest fact, kubejs file, or slate citation> | note: <≤25 words>
```

End the file with exactly: `== CHUNK COMPLETE ==`

## Budget discipline

This pass costs real usage. Be deep where there is signal, terse where there isn't: confirms are one
line; challenges get your full reasoning compressed into evidence+note; don't restate dossiers; don't
enumerate what you aren't judging. Cap `new` at what you would personally defend to the maintainer.
