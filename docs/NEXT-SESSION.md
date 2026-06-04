# Next-session pickup prompt

Paste the block below to start the next Claude session. (Lives here so it survives the ephemeral sandbox.)

---

You're continuing **Derpack X** — a cooperative PvPvE **Create** pack (MC **1.21.1 / NeoForge 21.1.228**)
for a small crew (~10). Every mod earns its place by anchoring to one of **five systems — Create, magic,
economy, aeronautics, survival** — or it's cut; scarcity drives emergent trade. North star + guardrails:
`CLAUDE.md` (read it) and `docs/DESIGN.md`. Milestones + sequenced backlog: `docs/ROADMAP.md`.

## What's already on `main` (shipped) — current release **v0.5.2**
- **v0.5.2 — Magic web (#75).** KubeJS bridges weaving Ars Nouveau / Iron's Spells / Occultism into the
  Create spine. Balance follow-up: #122; flagship depth (conceded from #75): #123.
- **v0.5.1 — GTMOGS ore-gen (#82).** GregTech-style strictly-regional mix veins replaced the #56 per-ore
  model (now retired). Tuning open: #81 (bootstrap), #116 (cave-ore biome follow), #58 (review).
- **v0.5.0 — Curation / spawn-gating (#88).** Mob/boss cuts + In Control! gating + kobold swap.
  Follow-ups: #94, #106, #107, #108, #60, #100.
- **v0.4.6 — "Made Through Create" recipe overhaul (#62).** Crafting routed through Create parts +
  methods; almost-unified dedup; EMI→JEI. Convention + ledger: `docs/RECIPES.md`. Dedup follow-ups:
  #101/#102/#103/#113.
- **Phase 0–2:** packwiz pack + editor + CI; guns (TaCZ + Create Armorer).
- **Tooling on `main`:** `tools/mod-data/` ground-truth digests (grep these — never guess recipes);
  `tools/recipe-graph/` connectivity metric + viz; `tools/packwiz` vendored binary (`./tools/packwiz refresh`).

## Active work — the only open PR
| PR | Branch | Holds | State |
|---|---|---|---|
| **#80** | `claude/arcana-mod` | Derpack Arcana code-bridge mod (skeleton, `mods-src/`) — the magic bridges KubeJS can't express | draft until P1 "Attunement Font" is ready; deviation tracked in #118 |

Everything else is now **issue work, not stacked PRs**, organized into GitHub **milestones** on an
**odd/even cadence** (`docs/RELEASE-CADENCE.md`): odd = feature/integration + the curation thunderdome,
even = stabilization (perf/bug/balance, no new mods). One pillar per odd — `v0.7.0` Create spine →
`v0.9.0` Economy → `v0.11.0` Survival & Magic → `v0.13.0` Aeronautics → `v0.15.0` Polish + weave review —
each trailed by a stabilization even; `v0.6.0` Foundation and `v1.0.0` (even, feature-frozen perf patch)
bookend. Full map in `docs/ROADMAP.md` ("Milestones"). **Every new issue must be filed under a milestone**
(an unmilestoned issue is untriaged). Near-term is **v0.6.0 — Foundation**: quick wins
(#111/#105/#100/#127/#131/#154/#126) → boot-log (#119/#120/#121) → perf baseline (#147/#151) → modlist
hygiene (#157 rubric → #83/#107/#106/#108/#60/#110). The Economy (#136–#139/#150), Survival/Magic
(#146/#152/#155) and Aeronautics (#140–#144) pillars are ticketed out under their (now odd) milestones.

## Hard constraints
- **Headless sandbox** — can't run Minecraft/KubeJS. Validate `node --check` (JS) + JSON/TOML only;
  **everything needs an in-game playtest before merge.**
- **`main` is branch-protected** — work on branches / open PRs; never commit to `main`. Rename the
  harness's random branch to `claude/<topic>` before pushing.
- **Network:** GitHub reachable; **Modrinth/CurseForge gated by default** — use `tools/mod-data/` digests
  (or `tools/packwiz` if the session was granted Modrinth/CDN access).

## Watch-outs (see CLAUDE.md "gotchas")
- **`galosphere:silver_ingot` is PALLADIUM** (legacy id) — never unify it as silver. Pin almost-unified (#111).
- Don't re-add EMI. Don't add Veil. itemphysic/FoamFix are client-only. Aeronautics breaks under shaders.
