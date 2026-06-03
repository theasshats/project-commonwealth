# Next-session pickup prompt

Paste the block below to start the next Claude session. (Lives here so it survives the ephemeral sandbox.)

---

You're continuing **Derpack X** — a cooperative PvPvE **Create** pack (MC **1.21.1 / NeoForge 21.1.228**)
for a small crew (~10). Every mod earns its place by anchoring to one of **five systems — Create, magic,
economy, aeronautics, survival** — or it's cut; scarcity drives emergent trade. North star + guardrails:
`CLAUDE.md` (read it) and `docs/DESIGN.md`.

## What's already on `main` (shipped)
- **Phase 3 — "made through Create" recipe overhaul (#62, MERGED ~v0.4.6).** Crafting routed through
  Create **parts + methods** across the pack; decoration/equipment weave; worldgen-island bridges; two
  flavor items; **EMI→JEI** switch (+ JER/JEED — EMI can't render Create recipes); **almost-unified**
  dedup of steel/bronze/lead/cast_iron (→ Ironworks/TFMG) + pasta (→ Farmer's Delight). Convention +
  full triage ledger: `docs/RECIPES.md`. Handoff (now historical): `docs/RECIPE-OVERHAUL-HANDOFF.md`.
- **Phase 0–2:** packwiz pack + editor + CI; ore-gen #56 model; guns (TaCZ + Create Armorer).
- **Tooling on `main`:** `tools/mod-data/` ground-truth digests (grep these — never guess recipes);
  **`tools/recipe-graph/`** connectivity metric + interactive viz (`recipe-web.html`, CI-regenerated);
  **`tools/packwiz`** vendored binary (`./tools/packwiz refresh`).

## Active work — open PR branches (the real direction)
| PR | Branch | Holds | State |
|---|---|---|---|
| **#88** | `claude/awesome-brown-s4bBD` | Curation pass (#83): mob/boss cuts + In Control! spawn gating + kobold swap (absorbed #86) | **merge target before 0.5.0** — needs playtest (`docs/SPAWN-GATING.md`) |
| **#82** | `claude/trusting-heisenberg-cbWYb` | GTMOGS GregTech-style ore-gen rework | gated on #81 bootstrap + model decision |
| **#80** | `claude/arcana-mod` | Derpack Arcana code-bridge mod (skeleton, `mods-src/`) | land *with* the magic layer |
| **#75** | `claude/magic-web` | Magic-web v2 KubeJS bridges (Ars spine) | **retarget base → `main`** (was stacked on #62) |

**Merge order:** #88 → 0.5.0 bump; magic layer (#75 then #80) together; #82 ore-gen on its own.

## Open issues worth knowing
- **#103** — reconcile functional-duplicate fabricated parts (e.g. TFMG `heavy_plate` vs steel sheet/plate);
  AU-tag or KubeJS-convert. Follow-up to the recipe overhaul.
- **#81** — early-game ore bootstrap (couples to #82). **#83** — curation strategy (#88 executes part of it).

## Hard constraints
- **Headless sandbox** — can't run Minecraft/KubeJS. Validate `node --check` (JS) + JSON/TOML only;
  **everything needs an in-game playtest before merge.**
- **`main` is branch-protected** — work on branches / open PRs; never commit to `main`.
- **Network:** GitHub reachable; **Modrinth/CurseForge gated by default** — use `tools/mod-data/` digests
  (or `tools/packwiz` if the session was granted Modrinth/CDN access).

## Watch-outs (see CLAUDE.md "gotchas")
- **`galosphere:silver_ingot` is PALLADIUM** (legacy id) — never unify it as silver.
- Don't re-add EMI. Don't add Veil. itemphysic/FoamFix are client-only. Aeronautics breaks under shaders.
