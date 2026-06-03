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

## Auto-resolving the index conflict (automatic)

`.github/workflows/resolve-conflicts.yml` handles the one conflict that stacked PRs keep hitting:
the **packwiz-generated files**. When two PRs both add/remove mods, they collide in `index.toml`
and in the `[index]` hash of `pack.toml` — but there's nothing to *decide*. Both are derived from
the real content (`mods/*.pw.toml`, `config/`, `kubejs/…`), and the fix is always the same:
regenerate with `packwiz refresh`.

It runs **automatically** — no command needed:

- **on every push to `main`** — re-checks every open PR, since a branch only starts conflicting
  once `main` moves ahead of it;
- **when a PR is opened or reopened** — resolves it straight away if it already collides;
- **`workflow_dispatch`** with a PR number — to resolve one on demand.

For each PR it merges the latest `main`, regenerates the index from the *combined* mod list, and
pushes the result back. That push re-triggers `pr-checks.yml`, so the index-freshness job confirms
the regeneration was correct. (No infinite loop: after a resolution the branch is up to date with
`main`, so the next run's merge is a no-op and nothing is pushed.)

It is deliberately conservative — it **only** auto-resolves when *every* conflicting file is
regenerable:

- `index.toml` — always (rebuilt wholesale by `refresh`).
- `pack.toml` — only if the two sides differ *solely* in the `[index]` hash line. If either side
  also touched `version`, `minecraft`, or `neoforge`, that's a real human decision and the workflow
  bails.
- **Anything else** (the same `.pw.toml` edited on both branches, KubeJS, config) is a genuine
  content conflict — the merge is aborted and the PR is asked to resolve it by hand (once, when the
  PR is opened — it won't re-nag on every push to `main`; the red index-freshness check carries that
  signal).

Notes: the `push`/`pull_request` triggers run from the copy of the workflow on the **default
branch**, so this only takes full effect once it's merged to `main`. It can't push to PRs opened
from forks (it skips them); this repo's shared version-branches are same-repo, so that's not the
normal case.

## Auto-refreshing a stale index (automatic)

`resolve-conflicts.yml` (above) only fires on **push-to-`main`** and **PR open/reopen** — it heals
the *conflict* stacked PRs hit. The other way the index goes stale has nothing to do with conflicts:
you edit a tracked pack file (a KubeJS script, a config, a manifest) and push **without** running
`packwiz refresh`. That's a `synchronize` event resolve-conflicts never sees, so the only signal
was the red **packwiz index** check and a "run refresh and commit" nag.

`.github/workflows/refresh-index.yml` closes that gap. On a PR **opened / reopened / synchronized**
it runs `packwiz refresh` and, *only if* `index.toml` / `pack.toml` drifted, commits the result
(`[skip ci]`) and pushes it back to the PR branch. `refresh` can only ever rewrite those two files;
if it somehow touches anything else the job **bails** instead of committing (that'd mean the
assumption is wrong and a human should look). Fork PRs are skipped — `GITHUB_TOKEN` can't push to
another repo's branch, so those authors still refresh by hand.

**It preserves the `.packwizignore` guard.** The index-freshness check doubles as a guard: add a new
directory that *should* be ignored but isn't (e.g. `site/`), and `packwiz refresh` vacuums it into
the index, drifting it and failing the check so a human notices. Auto-committing every refresh would
silently defeat that. So this workflow only auto-commits **pure hash drift** — the same set of
indexed file *paths*, with changed `hash` values (someone edited a tracked file but forgot to
refresh). If refresh **adds or removes `[[files]]` entries** (a new dir vacuumed in, a new
mod/script, a removal), it does *not* touch it: the working tree is left dirty and the red **packwiz
index** check carries the signal to a human — exactly the pre-existing behaviour. So a forgotten
`.packwizignore` entry still fails CI; it isn't auto-papered-over.

> **Caveat — it can't make the check go green by itself.** Pushes made with `GITHUB_TOKEN` don't
> trigger another `pull_request` run, so the auto-refresh commit fires at most once per author push
> (no loop), but it also **won't re-run `pr-checks.yml`** on that bot commit. The branch is now
> correct, yet the **packwiz index** check sits on the previous commit. For fully hands-off merging
> with required checks you need a **PAT or GitHub App token** on the push (a repo-secret decision,
> not committable here) so the refreshed commit re-triggers the checks. Until then: the index is
> auto-fixed, and a trivial re-run / next push turns the check green.

### Manual fallback (when it bails)

When the workflow bails — a genuine content conflict, or `pack.toml` differing beyond the `[index]`
hash (e.g. the PR is just behind a `version` bump) — resolve it by hand:

1. On the PR branch, `git merge origin/main` — everything except the generated files auto-merges.
2. **Don't hand-edit the conflict markers in `index.toml` / `pack.toml`** — regenerate instead:
   - PR **adds/removes mods or configs** → `packwiz refresh`, then `git add -A`.
   - PR is **docs / `CLAUDE.md` only** (no indexable changes) → just take main's:
     `git checkout origin/main -- index.toml pack.toml`.
3. Resolve any genuine content conflicts (a `.pw.toml` edited on both sides, KubeJS, config) normally.
4. `git commit` the merge and push — `pr-checks.yml`'s index-freshness job confirms the result.

(The `version`-bump case is a *false* bail: `git merge` auto-resolves `version` to main's, so the
generated files really are regenerable — the workflow is just being conservative about `pack.toml`.)

## Making the checks *required* (manual, one-time)

The workflow runs on PRs automatically, but GitHub won't *block* a merge on it until you say so —
that's a repo setting, not something a committed file can do. As a repo admin:

1. **Settings ▸ Branches** (or **Settings ▸ Rules ▸ Rulesets**) → add a rule targeting `main`.
2. Enable **Require status checks to pass before merging**.
3. Add these checks: **packwiz index**, **manifest lint**, **kubejs / config data**,
   **go build & vet** (search by job name; they appear after the workflow has run once on a PR).
4. Optionally enable **Require branches to be up to date before merging**.

Once set, a PR can't merge into `main` until all four jobs are green.
