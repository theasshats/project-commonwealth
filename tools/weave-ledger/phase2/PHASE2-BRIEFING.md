# Phase 2 — opportunity-mapping briefing (READ FIRST)

You map **candidate weaves** for a chunk of mods in the Derpack X pack. **You author NOTHING** — no
recipes, no KubeJS, no edits to pack files. Phase 2 is a *proposal* pass; a human reviews your output at
Gate 2 and authoring happens later as milestone work.

## Inputs (read these)
- Your chunk's mod list: `tools/weave-ledger/phase2/chunk-NN.txt` (NN given in your task).
- For each mod: its dossier `tools/mod-data/dossiers/<ns>.md` (what it is, its **methods**, consumes/outputs, current anchors, 2nd-pillar candidates).
- The motif registry + reagent-ownership: `docs/WEAVE-LEDGER.md`.
- The methods you can route THROUGH: `tools/weave-ledger/methods-palette.md`.

## What to produce, per mod
For every mod in your chunk, propose the connection(s) that give it a **2nd pillar** (or, for a mod already
at ≥2 pillars in the *quality-audit* chunk, audit its EXISTING connections). The core move is **method-pull**
(WEAVING-PLAN §2.0/§6): cross the mod's loose materials (its `consumes/outputs`) against the methods palette
and ask **"whose machine / ritual / infusion / processing method WANTS this material?"** — then route it
through that method.

For each candidate, decide ACCEPT or REJECT and record BOTH (the rejects are wanted — see below). Steps:
1. **Find** candidates via method-pull + thematic adjacency (dossier vibe).
2. **Power-read**: tier the item in its own mod (everyday / mid / endgame, from loot rarity, recipe depth,
   wiki). Size the integration to it — deep multi-step only for endgame/flagship; one light step for everyday.
3. **Theme-fit / red-team**: would a player find the pairing sensible, or do the two mods' tones clash? Argue
   *against* it briefly; keep only if it survives. A clash → REJECT (record it).
4. **Motif**: cite the accepted motif it composes (M-01..M-22 in the ledger). If it fits no motif, mark it
   `no-motif` and REJECT-for-review (don't invent one). `M-14` and `M-21` are **provisional** — you may
   surface candidates but tag them `(provisional motif)`.

## Hard guardrails
- **Never gate a basic/everyday component behind a complex recipe.** Depth scales with power, both ways.
- **Don't force edges onto deliberately-vanilla mobs/organic content** — if nothing is coherent, write
  `LEAVE — <reason>`. A forced "why is this convertible to that?" edge is a defect.
- **1:1 round-trip swaps** only for genuinely equivalent materials (rare); otherwise avoid.
- **Method-first**, but a crafting-table recipe is fine where it's the coherent form (not a lesser fallback).
- Respect **reagent-ownership** (don't repurpose a reserved reagent).

## Output — write INCREMENTALLY (so partial work survives a usage cutout)
Append to `tools/weave-ledger/phase2/chunk-NN.candidates.md` (NN = your chunk number) as you finish each mod —
**one mod at a time**, do not hold it all to the end. Format:

```
# Phase 2 candidates — chunk-NN
## <ns>   [anchors: <pillars> (N)]
- from: <material> | via: <method> | to: <pillar> | motif: M-## | power: everyday|mid|endgame | tone: ok|clash | verdict: ACCEPT | hook: <one line a player would nod at>
- from: <…> | … | verdict: REJECT | reason: <red-team/theme/balance/no-motif reason>
- LEAVE — <reason>                       (use when no coherent 2nd pillar; don't force)
## <next ns> …
```
For a **quality-audit** mod (already ≥2 pillars): instead list `REWORK:` items on its *existing* connections
(arbitrary / lore-clashing / mis-costed), or `OK — connections sound`.

When EVERY mod in your chunk is done, write a final line exactly: `== CHUNK COMPLETE ==`
(this marker is how the run knows the chunk finished vs. was interrupted).

Then return a short summary: per mod, `ns: N accepted / M rejected / leave`.
