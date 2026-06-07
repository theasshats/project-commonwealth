# `docs/` — index

The durable documentation for Derpack X. This folder is **reference**, not scratch: every file here is
meant to stay useful. Ephemeral session/handoff prompts don't belong in `docs/` (see the convention at
the bottom). `docs/` is fully `.packwizignore`'d, so nothing here touches the packwiz index or CI.

Start at `../CLAUDE.md` (the north star + guardrails) and `DESIGN.md` (the why). Everything else hangs
off those two.

## Canonical reference — "this is how it is"

| Doc | Purpose |
|---|---|
| [`DESIGN.md`](DESIGN.md) | **The why** behind the architecture — the systems-loop rationale and all the architectural decisions. If a decision feels weird, look here first. |
| [`SYSTEMS.md`](SYSTEMS.md) | **The canonical structural model** — the systems as one causal loop (scarcity → pressure → production → economy; *Eco*-inspired). How the parts interlock: production (Create/magic), the economy (trade + logistics/aeronautics), pressure (survival), the recipe/gating spine, the ecological cost. The old flat "five systems" framing is retired here. |
| [`CURATION.md`](CURATION.md) | **The curation rubric** — the charter every keep/cut pass scores mods against (the 8 gates). |
| [`RECIPES.md`](RECIPES.md) | The "Made through Create" recipe convention **and the live triage ledger** — the most-referenced doc; the source of truth for recipe changes. |
| [`CONNECTIVITY.md`](CONNECTIVITY.md) | The "one web, not many clusters" connectivity metric — turns the north-star web goal into a number you can re-check (`tools/recipe-graph/`). |
| [`ORE-GENERATION.md`](ORE-GENERATION.md) | The GTMOGS mix-vein ore-gen model (GTNH-style regional veins) and its config. |
| [`GUN-PACKS.md`](GUN-PACKS.md) | The gun system — TaCZ wired into Create via two add-ons. |
| [`SPAWN-GATING.md`](SPAWN-GATING.md) | The spawn-control / mob-curation work from the #83 pass — what each file does and what needs in-game verification. |
| [`ARCANA-BRIDGE-MOD.md`](ARCANA-BRIDGE-MOD.md) | Scoping doc for the **Derpack Arcana** code-level magic-weave helper mod (PR #80, `mods-src/`). |

## Setup & how-to

| Doc | Purpose |
|---|---|
| [`PRISM-SETUP.md`](PRISM-SETUP.md) | Player-facing install walkthrough (Prism Launcher). |
| [`EDITING.md`](EDITING.md) | How to add mods / change configs / ship updates — the editor flow plus the packwiz CLI fallback. |
| [`CI-CHECKS.md`](CI-CHECKS.md) | What the merge-gating `pr-checks.yml` validates (and how to make the checks required). |

## Planning & process — living docs

| Doc | Purpose |
|---|---|
| [`ROADMAP.md`](ROADMAP.md) | **The plan** — multi-phase build-out and the milestone map (the road to 1.0). The sequencing source of truth; can lag `main`. |
| [`MODLIST-AUDIT.md`](MODLIST-AUDIT.md) | Modlist-vs-goals audit. A **planning artifact / snapshot**, explicitly not a final decision list. |
| [`TRIAGE.md`](TRIAGE.md) | Issue-triage playbook (re-label / milestone / assign / close / sequence). |
| [`RELEASE-CADENCE.md`](RELEASE-CADENCE.md) | Odd/even versioning rhythm — **proposal**, for review. |
| [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) | Weave-the-web thinking — **DRAFT**, not settled. |

## Player-facing copy

| Doc | Purpose |
|---|---|
| [`PATCHNOTES.md`](PATCHNOTES.md) | Hand-maintained changelog. **Kept and maintained** (CLAUDE.md treats it as canonical player-facing copy) — `build.yml` cuts GitHub Releases on tag, but the prose release notes live here. Professional plain prose only. |

## Archive — `archive/`

Historical handoff docs for **merged** PRs. Kept for the conventions and file maps, not for current
priorities. See [`archive/`](archive/):

- `archive/RECIPE-OVERHAUL-HANDOFF.md` — the #62 "Made through Create" overhaul (merged ~v0.4.6). Live convention now lives in `RECIPES.md`.
- `archive/MAGIC-WEB-HANDOFF.md` — the #75 magic-web recipe weave (merged ~v0.5.2). Live design in `RECIPES.md` ("Magic web").
- `archive/MAGIC-WEB-PLAYTEST.md` — the #75 in-game playtest checklist.

### Archive candidates — proposed (we have too many live docs)

The `docs/` set has grown; these are flagged to **trim once their work lands** (move to `archive/`, or
fold their durable bits into the canonical doc and delete). Not yet moved — listed so the call is tracked:

- **`MODLIST-AUDIT.md`** — explicitly a snapshot/planning artifact, now largely **superseded** by
  `SYSTEMS.md` (model) + `CURATION.md` (rubric) + `ROADMAP.md` (plan). **Action:** file any remaining live
  findings as issues, then archive. *(Strongest candidate.)*
- **`ROTTEN-CREATURES-STRUCTURES.md`** — the #106 spawn-allowlist review sheet. **Action:** archive once
  #106 is playtested (its durable rules live in `SPAWN-GATING.md`).
- **`RELEASE-CADENCE.md`** — accepted; its rhythm now lives in `ROADMAP.md` + `CLAUDE.md`. **Action:**
  fold the odd/even *rationale* into `ROADMAP.md`, then archive to remove the duplication.
- **`ARCANA-BRIDGE-MOD.md`** — scoping doc for the Derpack Arcana helper mod (PR #80). **Action:** archive
  if/when #80 has landed (it's a pre-build scoping doc, not live reference).
- **`BOOT-LOG-BASELINE.md`** — **keep** as a living reference (the accepted boot-log-noise catalog future
  passes check against), but trim the #119/#120/#121-specific sections now those have closed.

## Conventions

**The canonical split — don't duplicate the systems preamble.** Several docs open with a version of
the systems-loop framing; they are **not** interchangeable:
- `SYSTEMS.md` is **canonical for the structure** (the *how it interlocks* — the loop). The model itself.
- `DESIGN.md` is **canonical for the rationale** (the *why*) — cite it; don't re-argue it elsewhere.
- `ROADMAP.md` is the **plan** (the *when / in what order*).
- `MODLIST-AUDIT.md` is a **snapshot audit** (a planning artifact, not a decision).
- `CURATION.md` is the **keep/cut charter** (the gates a mod must pass).

**`EDITING.md` ↔ `../mods/README.md`.** `EDITING.md` is the **task walkthrough** (add a mod, change a
config, ship an update, with the editor + packwiz CLI fallback); `mods/README.md` is the **manifest reference**
(the `.pw.toml` format, the `pin`-placement gotcha, hash workflows). Link across for depth; keep the
walkthrough out of the reference and vice-versa.

**No ephemeral handoff / pickup prompts in `docs/`.** "Paste this to start the next session" prompts and
per-PR handoff briefs rot the moment work moves. Keep them in the **PR description** (or a gitignored
scratch dir) while live. When a PR with a handoff doc **merges**, either fold its durable conventions into
the canonical doc it points at (e.g. `RECIPES.md`) or move the handoff to `archive/` as a historical
record — don't leave it loose in `docs/` claiming to be current.
