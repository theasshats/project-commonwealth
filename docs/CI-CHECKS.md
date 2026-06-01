# PR checks (merge-gating CI)

`.github/workflows/pr-checks.yml` runs on every pull request. It catches the mistakes that slip
past `packwiz refresh` but break the pack at **install or update time** — before they reach `main`
or a release. All of it is fast (~1–2 min) and needs no Modrinth/CurseForge network (`packwiz
refresh` and `mr export` are local operations).

Until now the repo had **no PR-triggered CI** — every workflow was `workflow_dispatch`, release-tag,
or push-to-`main`. A bad `.pw.toml`, a silently-ignored `pin`, a stale `index.toml`, broken KubeJS
JSON/JS, or a non-compiling editor/site change could all land unreviewed by a machine.

## The jobs

| Job | What it checks | Why it matters |
|---|---|---|
| **packwiz index** | Runs `packwiz refresh`, then fails if `index.toml` / `pack.toml` changed — i.e. the contributor edited a manifest/config but didn't refresh. | A stale index ships the *old* file set to players (the new mod/config never installs). |
| **manifest lint** | `scripts/lint-manifests.py`: required fields, valid `side`, valid `hash-format`, and the **pin-placement gotcha** (a `pin =` under any `[section]` is silently ignored by `packwiz update`). | A malformed manifest or a misplaced pin breaks install or lets a pinned mod drift on update — both are silent. |
| **kubejs / config data** | `node --check` every `kubejs/**/*.js`; `scripts/validate-data.py` parses every JSON under `kubejs/`, `config/`, `defaultconfigs/` and every TOML under `config/`, `defaultconfigs/`. | The sandbox is headless and can't run Minecraft/KubeJS — a syntax error in a recipe or config only surfaces in-game otherwise. This is the cheapest possible guard. |
| **go build & vet** | `go build` + `go vet` for both `site/` and `tools/editor-src/` (and `go test` for the site). | The editor binary is rebuilt by `build-editor.yml` only on push to `main`; the site isn't compiled in CI at all. This catches a broken Go change *on the PR* instead of after merge. |

## Running the same checks locally

```bash
# packwiz index is committed (no diff after refresh)
packwiz refresh && git diff --exit-code -- index.toml pack.toml

# manifests + shipped data
python3 scripts/lint-manifests.py
python3 scripts/validate-data.py
find kubejs -name '*.js' -exec node --check {} +

# go
(cd site && go build ./... && go vet ./... && go test ./...)
(cd tools/editor-src && go build ./... && go vet ./...)
```

## Notes & deliberate choices

- **`side` is not required.** ~150 existing manifests omit it (packwiz defaults to `both`). The lint
  only rejects an *invalid* `side` value, so it doesn't churn the whole modlist. The "new mods are
  forced to `both`" convention is enforced by the editor/add workflows, not here.
- **No `.mrpack` step.** The release no longer ships a `.mrpack` (it had bloated to ~200 MB by
  bundling `overrides/`, and nobody used it — issue **#73**, dropped in `build.yml`). The Prism
  installer is the only release artifact, so there's nothing to size-check here.
- **`packwiz.bin` is committed**, so the editor's `//go:embed assets/packwiz.bin` compiles in CI
  without the build-time download that `tools/editor-src/build.sh` does for release.

## Making the checks *required* (manual, one-time)

The workflow runs on PRs automatically, but GitHub won't *block* a merge on it until you say so —
that's a repo setting, not something a committed file can do. As a repo admin:

1. **Settings ▸ Branches** (or **Settings ▸ Rules ▸ Rulesets**) → add a rule targeting `main`.
2. Enable **Require status checks to pass before merging**.
3. Add these checks: **packwiz index**, **manifest lint**, **kubejs / config data**,
   **go build & vet** (search by job name; they appear after the workflow has run once on a PR).
4. Optionally enable **Require branches to be up to date before merging**.

Once set, a PR can't merge into `main` until all four jobs are green.
