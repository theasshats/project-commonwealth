# PR checks (merge-gating CI)

`.github/workflows/pr-checks.yml` runs on every pull request. It catches the mistakes that slip
past `packwiz refresh` but break the pack at **install or update time** — before they reach `main`
or a release. All of it is fast (~1–2 min) and needs no Modrinth/CurseForge network (`packwiz
refresh` and `mr export` are local operations).

Until now the repo had **no PR-triggered CI** — every workflow was `workflow_dispatch`, release-tag,
or push-to-`main`. A bad `.pw.toml`, a silently-ignored `pin`, a stale `index.toml`, broken KubeJS
JSON/JS, or a non-compiling editor change could all land unreviewed by a machine.

## The jobs

| Job | What it checks | Why it matters |
|---|---|---|
| **packwiz index** | Runs `scripts/index-guard.sh` (refresh + verdict). **Passes** on a fresh or auto-fixable index (`sync-index` commits the refresh for you); **fails only** on the `.packwizignore` guard — a `packwiz refresh` that pulls files in under a new top-level path. | A new un-ignored dir would vacuum into the index. Routine staleness is auto-handled, so this never flickers red — only the one human case does. |
| **manifest lint** | `scripts/lint-manifests.py`: required fields, valid `side`, valid `hash-format`, and the **pin-placement gotcha** (a `pin =` under any `[section]` is silently ignored by `packwiz update`). | A malformed manifest or a misplaced pin breaks install or lets a pinned mod drift on update — both are silent. |
| **kubejs / config data** | `node --check` every `kubejs/**/*.js`; `scripts/validate-data.py` parses every JSON under `kubejs/`, `config/`, `defaultconfigs/` and every TOML under `config/`, `defaultconfigs/`. | The sandbox is headless and can't run Minecraft/KubeJS — a syntax error in a recipe or config only surfaces in-game otherwise. This is the cheapest possible guard. |
| **go build & vet** | `go build` + `go vet` for `tools/editor-src/`. | The editor binary is rebuilt by `build-editor.yml` only on push to `main`, so this catches a broken Go change *on the PR* instead of after merge. (The player site moved to its own repo, `derpack-org/derpack-site`, which carries its own build CI.) |

## Running the same checks locally

```bash
# packwiz index verdict — prints fresh / fixable / violation (exit 1 only on violation)
bash scripts/index-guard.sh

# manifests + shipped data
python3 scripts/lint-manifests.py
python3 scripts/validate-data.py
find kubejs -name '*.js' -exec node --check {} +

# go
(cd tools/editor-src && go build ./... && go vet ./...)
```

## Notes & deliberate choices

- **`side` is not required.** ~150 existing manifests omit it (packwiz defaults to `both`). The lint
  only rejects an *invalid* `side` value, so it doesn't churn the whole modlist. The "new mods are
  forced to `both`" convention is enforced by the editor, not here.
- **No `.mrpack` step.** The release no longer ships a `.mrpack` (it had bloated to ~200 MB by
  bundling `overrides/`, and nobody used it — issue **#73**, dropped in `build.yml`). The Prism
  installer is the only release artifact, so there's nothing to size-check here.
- **`packwiz.bin` is committed**, so the editor's `//go:embed assets/packwiz.bin` compiles in CI
  without the build-time download that `tools/editor-src/build.sh` does for release.

## Keeping the index in sync (automatic)

`.github/workflows/sync-index.yml` is the **single owner** of regenerating the packwiz-generated
files (`index.toml` and `pack.toml`'s `[index]` hash) on a PR. It heals both ways they go wrong —
folding together what used to be two overlapping workflows (`resolve-conflicts.yml` +
`refresh-index.yml`), which fired on the same PR events and could race each other's push (issue
**#127**). One workflow with **per-PR concurrency** can't race itself.

It runs **automatically** — no command needed:

- **on every push to `main`** — re-checks every open PR, since a branch only starts conflicting once
  `main` moves ahead of it;
- **when a PR is opened, reopened, or synchronized** (new commits);
- **`workflow_dispatch`** with a PR number — to sync one on demand.

For each PR it merges the latest `main` if the branch is behind, regenerates the index with
`packwiz refresh`, and pushes the result back (via the shared `push-with-retry` composite action).
That push re-triggers `pr-checks.yml`, confirming the regeneration. (No infinite loop: pushes use
`GITHUB_TOKEN`, which doesn't re-trigger `pull_request`, and once the branch is up to date the next
run is a no-op.)

It distinguishes the two cases, because their commit policy differs:

- **Behind main (conflict).** It merges and regenerates from the *combined* content, committing
  whatever `refresh` produces — file-list changes from `main` are legitimate (a mod added on another
  branch). It auto-resolves **only** when every conflicting file is regenerable:
  - `index.toml` — always (rebuilt wholesale by `refresh`).
  - `pack.toml` — when the sides differ *solely* in the `[index]` hash, or *solely* in the `version`
    line with this branch's version **ahead** of main's (a version branch folding in the current
    release while keeping its own higher version). A branch whose version is *below* main's is treated
    as **superseded** (flagged, or auto-retired if it's an empty staged slot); any other field
    (`minecraft` / `neoforge`) differing is a human decision → it bails.
  - **Anything else** (a `.pw.toml` edited on both sides, KubeJS, config) is a real content
    conflict — the merge is aborted and the PR is asked to resolve by hand (once — it won't re-nag on
    every push to `main`). **Exception:** `docs/PATCHNOTES.md` is auto-merged by a `merge=union` driver
    (`.gitattributes`) — both sides' changelog sections are kept, so the changelog never blocks a fold.
- **Stale (no merge needed).** The branch is already up to date but the author edited a tracked pack
  file and pushed without `packwiz refresh`. It auto-commits (with `[skip ci]`) as long as the index's
  changes stay within **known pack directories** — the dirs in `scripts/instance-dirs.txt` (the shared
  source of truth) plus `mods/`, and any top-level path already in the index. So adding/removing files
  under those — a new mod manifest, a config, a `tacz/` zip — is intentional churn and **rolls over**.
  It bails **only** when `refresh` pulls a file in under a **brand-new top-level path** (something not
  in that set): that's a directory that should have been `.packwizignore`d (a new un-ignored top-level dir),
  so it leaves the working tree dirty and the red **packwiz index** check for a human — who either adds
  the `.packwizignore` line, or, if it's real pack content, an `instance-dirs.txt` line. (A change at
  the **repo root** that isn't a known pack dir is exactly this case, and is what fails it.) This is
  the `.packwizignore` guard, narrowed from "any file-list change" to "a *new top-level path*", so
  legitimate content edits stop tripping it.

Notes: the `push`/`pull_request` triggers run from the copy of the workflow on the **default
branch**, so a change to it only takes full effect once merged to `main`. Fork PRs are skipped —
`GITHUB_TOKEN` can't push to another repo's branch — so those authors refresh by hand.

> **Note — displaying checks on a bot-pushed commit needs `SYNC_PAT`.** `GITHUB_TOKEN` pushes don't
> re-trigger `pull_request` runs (anti-recursion), so the bot's fold/refresh commit wouldn't re-run
> `pr-checks` on its own — and `workflow_dispatch` doesn't help either: those check runs exist on the
> commit but GitHub **does not surface them in the PR** (no green tick, no required-check status). The
> fix is a token whose push GitHub treats normally: set a fine-grained **PAT** (or GitHub App token —
> the more locked-down option, tracked for 1.0.0) as the `SYNC_PAT` secret (`contents` +
> `pull-requests: write`). `sync-index` (and `release.yml`'s `open-next`) use `${{ secrets.SYNC_PAT ||
> secrets.GITHUB_TOKEN }}`, so with the secret a folded/staged PR shows normal green checks; without it,
> the workflows still run and fix the index, but a bot-pushed commit won't display checks until a human
> pushes. (The **packwiz index** job is guard-aware regardless, so routine staleness never goes red.)
>
> **Also — opening PRs from a workflow.** `release.yml`'s `open-next` calls `gh pr create`. The default
> `GITHUB_TOKEN` is **blocked** from creating PRs unless **Settings ▸ Actions ▸ General ▸ Workflow
> permissions ▸ "Allow GitHub Actions to create and approve pull requests"** is enabled (error:
> *"GitHub Actions is not permitted to create or approve pull requests"*). A **PAT** (`SYNC_PAT`) is
> **not** subject to that restriction, so setting the secret fixes PR creation *and* check display at
> once. If you stay on `GITHUB_TOKEN`, enable that checkbox or `open-next` will stage the branch but not
> open its PR.

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

## Other automatic workflows (not merge-gating)

Two more workflows keep generated artifacts fresh. Neither gates merges; both **commit back**, so a
bot commit appearing on your PR (or on `main`) is expected, not a glitch.

- **`ground-truth.yml` — mod-data facts digest.** Fetches every mod jar (CI has the network the dev
  sandbox doesn't) and extracts a license-safe facts digest (IDs / tags / biome-modifiers only, via
  `scripts/extract-mod-data.sh`) into `tools/mod-data/`, so recipe-design sessions have offline ground
  truth. Triggers on `mods/**` / `pack.toml` (push to `main` **and** PRs, including drafts — committed
  back to the PR branch), a weekly cron backstop, and `workflow_dispatch`. It doesn't watch
  `tools/mod-data/**`, so its own commit can't re-trigger it; that commit instead feeds `recipe-web.yml`.
- **`recipe-web.yml` — connectivity viz.** Rebuilds `tools/recipe-graph/recipe-web.html` and the data
  block in `docs/CONNECTIVITY.md` whenever the recipes, the digest, or the recipe-graph tooling change
  (push to `main`, or `workflow_dispatch`). Commits back with `[skip ci]` to avoid a loop.
