# Derpack X — Design

This document captures the **why** behind the architectural decisions in Derpack X. The README and per-folder docs cover the **what**: how to install, how to add a mod, where things live. This is for when someone is staring at something and wondering why it's structured that way.

If a decision feels weird, look here first. If it isn't here, it should be — propose an addition.

---

## What is this thing

Derpack X is a Minecraft 1.21.1 / NeoForge modpack distributed via [packwiz](https://packwiz.infra.link/) manifests. The repo doesn't contain mod jars; it contains URLs and hashes. CI builds one small release artifact, a Prism installer zip. End-users' launchers fetch jars from each mod's authoritative source at install time. A custom Go-based local editor handles routine pack maintenance through a web UI; GitHub Actions workflows are a fallback.

---

## The goal — five systems, every mod earns its place

**Derpack X is a cooperative PvPvE Create pack for a small crew (~10) where scarcity means nobody can do everything alone — so specializing and trading happen on their own, not as a forced economy. Every mod earns its place: it feeds one of the five systems — Create, magic, economy, aeronautics, survival — or it's cut. Progression pushes you to specialize, complex tech unlocks through MineColonies or boss drops, and freshness comes from curated content updates, not resets.**

That's the whole goal. The rest of this section is what it means in practice.

**Breadth is intentional, but not unconditional.** The pack is large and varied — food, structures, magic, colonies, mobs, decoration, vehicles — because the friend group wants a world with a lot to do. Breadth's failure mode is **incoherence**: a heap of mods that never talk to each other. The fix is *not* "route everything through Create" (the old framing) — it's that every mod **anchors to at least one of five systems, and ideally *two*** (one pillar is the floor; the target is two — a mod tied to only one is a candidate for a second weave). Pictured as a graph — every item linked to what it's used for — the pack should read as **one or two cohesive webs, not many isolated clusters** (measurable: `tools/recipe-graph/`, `docs/CONNECTIVITY.md`). The five systems:

1. **Create spine** — the tech core; things made through Create.
2. **Magic web** — Ars Nouveau / Iron's Spellbooks / Occultism, bridged into one progression.
3. **Economy** — Numismatics + Trading Floor + bounties: the trade layer that gives content a reason to exist. *The most underused, highest-leverage system — building it makes much of the content sprawl purposeful at once.*
4. **Aeronautics & logistics** — Create Aeronautics ships, trains, drones; the flight/transport ladder. The pack's flagship content.
5. **Survival & seasons** — Serene Seasons × Spice of Life × Cold Sweat: the world pushing back.

**The test for any add or change:** *what system does this anchor to — and, since one is the floor, what's its second?* A mod doesn't have to route through Create; magic, economy, aeronautics, and survival are all legitimate homes. Anything that anchors to nothing — just more content — gets cut; anything anchored to only one is a candidate for a second weave (decoration-through-Create, a sellable reagent, a crop that feeds a machine). (This replaces the earlier "we never cut, only integrate" rule: integration is still preferred wherever a mod *can* anchor, but content that hooks into nothing is removed.)

**Specialization & trade, not a forced economy.** With ~10 players and scarce regional ores, no one can comfortably solo every system (~3 people to cover all production). Trade emerges from that — people running MineColonies at different rates, different regions holding different ores — rather than from enforced economy mechanics. The player count is small, so the economy is **emergent and optional**: flavor that's nice when it happens, not infrastructure that must work.

**Progression on-ramps.** Complex Create tech unlocks through **MineColonies** (settlement progress) or **boss drops** — weaving colonies and combat *into* the tech tree as on-ramps, rather than leaving them as parallel side-games. MineColonies is a first-class part of the pack, not "a rival economy to disable."

**Freshness without wipes.** Curated content updates keep the world fresh; we don't do seasonal world resets (high-effort, and they destroy the build investment that's half the fun for a friend group). The detailed per-branch weaving (recipes #17, loot #18) happens phase by phase; this section is the *why* behind all of it.

---

## 1. Why packwiz

Why this isn't just a folder of jars. A naive modpack distribution model would zip the mod jars and host the zip somewhere. That model has several problems we wanted to avoid:

1. **Licensing.** Most mod licenses don't permit redistribution. Bundling jars puts the maintainer in legal gray territory at best, and burns trust with mod authors at worst.
2. **File size.** A zip with ~200 mod jars is 500+ MB. Hosting and downloading that for every release is wasteful when the actual *change* between versions is usually a handful of files.
3. **Updates.** A zip is a snapshot. To stay current, the user has to re-download and re-import. That's enough friction that most users just don't update.
4. **Collaboration.** Multiple maintainers pushing big binary blobs into git is painful. Diffs are unreadable, merge conflicts are a nightmare, and the repo's history bloats fast.
5. **Version tracking.** Plain-text manifests have meaningful diffs. You can see at a glance which mod was bumped, which version was pinned, when something was added or removed — both in PR review and in `git log`.

packwiz addresses all of these. The repo holds tiny `.pw.toml` manifests — one per mod — describing where to fetch the jar (Modrinth or CurseForge) and what its hash should be. Releases ship those manifests as a small Prism installer zip (~5 MB). The user's launcher fetches the actual jars from each mod's authoritative source at install time, with hash verification.

The trade-off: every install needs internet on first launch, and ongoing operation depends on Modrinth/CurseForge staying reachable. Acceptable — anyone playing modded MC is already online.

---

## 2. Why version-named branches (provisionally)

For now, branches are named after the next release version. If `main` is at `0.3.2`, work-in-progress goes on a branch called `0.3.3` for patches, `0.4.0` for bigger work. The branch name and the eventual release tag are the same string.

**This convention is provisional.** The team is small (one maintainer + one regular collaborator), the workflow is still settling, and the "right" branching strategy depends on patterns we haven't seen yet. Expect this to change.

The convention works *for now* because:

- We can usually answer "what's the next version?" at any moment, so the branch name is obvious.
- There's typically only one branch in flight at a time.
- Branch name = release tag means no translation needed when cutting a release.

Alternatives we'll probably revisit when the workflow matures:

- **Personal branches** (`zagwar/whatever`, `xela/cool-stuff`). Likely the right move once parallel work becomes common — each contributor gets their own lane and merge ordering becomes about review, not version sequencing. Probably the next step if the version-named branch starts feeling like a collision point.
- **Feature branches** (`add-create-cafe`, `fix-quark-crash`). The traditional one-feature-per-branch model. Worth considering if we ever want to track work by *what* it is, not *when* it ships.
- **Continuous delivery** — drop the concept of versioned releases entirely; the installer-style instance always pulls from `main`. Genuinely interesting since the installer-style distribution already auto-syncs. Would let us ship the moment a PR merges, no version dance. Big workflow shift, not on the near-term radar but worth keeping in mind.

No version-naming dogma. Pick the convention that matches how the team actually works at any given moment, and rewrite this section when you do.

---

## 3. Why the editor exists

Why a custom editor instead of just using packwiz CLI or the GitHub Actions workflows. Both alternatives existed before the editor and worked fine for a single technical maintainer. The editor came out of a specific collaboration friction.

The original workflow was: maintainer runs `packwiz` commands locally; collaborator triggers GitHub Actions workflows in the browser ("Add mod" with a slug field, "Update mods," etc.). That worked, sort of. The collaborator was actually editing locally with raw jars and never touching the repo's workflows at all — the friction of "click button, fill form, wait 30 seconds, refresh page" was high enough that he just downloaded jars manually and told the maintainer what to add. The repo and the actually-played pack drifted apart constantly.

The editor exists to close that gap. It's a single .exe that runs from the repo, opens a local web UI, and exposes packwiz operations as buttons. The collaborator can edit the pack the same way the maintainer does, branch and PR through GitHub Desktop, never touch git or YAML or a terminal. The maintainer benefits too — many edits are faster through the UI than through CLI flags or workflow forms.

Three principles drive the design:

1. **The editor doesn't do git.** GitHub Desktop already handles clone/branch/commit/push/PR with a polished UI. Reimplementing any of that would be wasted effort and a worse experience. The editor only edits files in the working directory; git records those changes; GitHub Desktop helps push them.
2. **The editor doesn't replace anything.** The packwiz CLI still works. The GitHub Actions workflows still work. The editor is *an additional path*, not a forced one. If it breaks, the underlying mechanisms are unchanged.
3. **The editor is a thin wrapper.** It shells out to packwiz for operations packwiz already supports (add, remove, pin, update, refresh). It only reimplements operations that needed new logic — Modrinth API calls for the version picker, hash recomputation for pinned mods, Prism instance bundling for local testing.

Net effect: the collaborator's friction dropped from "I'll just edit my own folder and tell you" to "I added these mods on branch 0.4.0, PR open." That's the win that justified building the thing.

---

## 4. Why we don't redistribute jars

The build only ships manifests, not jars. Releases attach one small artifact: a Prism installer zip (manifests + a launcher script, ~5 MB). The user's launcher fetches actual mod jars from each mod's authoritative source — Modrinth or CurseForge — at install time.

We previously also attached a `.mrpack` (manifests in Modrinth's format), but dropped it (issue #73): packwiz's `mr export` bundles the entire `overrides/` tree — `config/`, `kubejs/`, `resourcepacks/`, `shaderpacks/` — so the "manifest-only" file had quietly bloated to ~200 MB, headed for the same 2 GiB asset cap that killed the bundled zip below. Nobody on the friend-group server used it, and the installer is the recommended path anyway, so the export step came out of `build.yml`.

Earlier in the project we also shipped a "bundled" Prism zip with all jars baked in. It worked, but we dropped it for two reasons:

1. **Licensing.** Most mod licenses don't permit re-hosting jars. Some explicitly forbid it. By distributing a zip with someone else's jar in it, the maintainer is the one violating that license, even though they're not making money or claiming authorship. It's the kind of thing that quietly damages the relationship between modpack maintainers and mod authors, and at scale it makes mod authors more restrictive about future licensing.
2. **GitHub release asset cap.** GitHub releases have a 2 GiB per-asset limit. The bundled zip was approaching that ceiling as the pack grew. The server-pack variant blew past it. Rather than build infrastructure to host large artifacts elsewhere (S3, R2, a self-hosted box), it was cleaner to drop the bundled artifact entirely.

The trade-off: every install needs internet on first launch. Acceptable — anyone playing modded MC is online anyway, and Modrinth/CurseForge are reliable enough that "fetch on install" is a non-event.

The editor's "Build & Launch in Prism" feature still does jar bundling, but it's local-only — never published. That's how the maintainer tests pack changes before pushing. The result lives on their machine and is never uploaded anywhere.

---

## 5. Why no server pack right now

There is no server pack artifact, and there isn't going to be one. When we first built the release pipeline, a server pack was the fourth release artifact. It got dropped because:

1. **The 2 GiB GitHub release asset cap.** With ~200 mods, the bundled server zip pushed past 2 GiB. GitHub returned `size must be less than 2147483648` and refused the upload. Workable with splits, but ugly.
2. **No actual users.** No one is hosting a server. Building an artifact nobody downloads is wasted CI time.
3. **A server doesn't need a special build anyway.** packwiz-installer-bootstrap works server-side just like it does client-side. A future server admin can run it directly against the repo's `pack.toml` URL — same mechanism the client installer zip uses. The CI doesn't need to produce anything special; the server pulls what it needs.

The build step has been removed from `build.yml`. If we ever want to host a server, the procedure will be:

1. SSH to the server box
2. Install Java 21 and grab `packwiz-installer-bootstrap.jar`
3. Run it against `https://raw.githubusercontent.com/<repo>/main/pack.toml` with `-s server`
4. Configure the launch script and start it up

No CI involvement. The server stays in sync the same way clients do — every restart pulls latest from `main`, exactly like the installer-style client behavior.

---

## 6. We had a build cache, then removed it

Earlier iterations of the build pipeline had a content-keyed cache in `build.yml`. It hashed the build inputs (manifests, configs, scripts), looked up that hash in GitHub Actions cache, and reused artifacts on hits. This was meaningful when the build pipeline included a bundled-jars zip — fetching ~500 MB of jars takes minutes, and skipping it when nothing material changed was a real win.

Once we stopped distributing bundled jars (see "Why we don't redistribute jars"), the build dropped to ~30 seconds end to end. Caching saved at most 25 seconds while adding two cache steps, a fingerprint computation, and a "version field stripped from `pack.toml`" hack to keep test/release builds compatible. The complexity outweighed the savings.

The cache logic was removed. If pack distribution ever shifts back to a model where builds are slow (server-side jar fetching for some artifact, generated content from KubeJS, etc.), reintroduce caching. The version-field-stripping pattern is the non-obvious bit worth remembering: hash everything *except* the version, so a workflow_dispatch test build at `0.3.3-dev` can be reused for the `0.3.3` release tag.

---

## 7. Why batch-add forces side=both

The Wishlist (batch-add) feature in the editor always sets newly-added mods to `side = "both"`, even if Modrinth says otherwise. The single Add Mod path lets the user pick a side; batch-add doesn't ask, it just forces both.

The reason: Modrinth's `client_side` / `server_side` metadata is unreliable in practice. Many mods have it set wrong. The mod author copied a template, didn't think hard about the field, and now `client_side: required, server_side: unsupported` ends up in the metadata even though the mod absolutely requires the server too. packwiz reads this faithfully and writes `side = "client"` to the manifest. The mod then quietly fails to register on dedicated servers, and the maintainer spends an evening figuring out why.

When you're adding mods one at a time, you're paying attention. You see the side selector, you pick "both" if that's right. When you're batch-adding 20 mods from a wishlist, you're not paying that level of attention to each one. The most common case for batch-adding is "I want all these content mods" and the answer for those is *almost always* both. So we default to that.

The escape hatch: any mod's side can be flipped from the table afterward via the side dropdown on its row. If a mod really is client-only (a minimap, a tooltip mod, a settings menu mod), one click puts it back. The flow is "default to both, fix the few exceptions" rather than "trust upstream metadata, fix the many exceptions."

A more conservative design would inspect each mod's metadata, default to the upstream value, and require explicit override. We chose the opinionated default because the failure mode of "wrong side, mod silently doesn't load" is much worse than "right side, but I had to fix three of them."

---

## 8. Why the editor doesn't do git

The editor only edits files in the working directory. It doesn't touch git, doesn't commit, doesn't push, doesn't open PRs. All of that is GitHub Desktop's job.

The temptation to add git operations was real. The editor already knows when an operation modifies the manifests; adding a "Commit and Push" button would be a few lines of code. But every time we considered it, the same answer came up: GitHub Desktop already does this better than we could.

What GitHub Desktop gives you for free:

- A polished diff viewer with syntax highlighting
- Visual conflict resolution
- Branch management (create, switch, delete, fetch, pull, push)
- PR creation that integrates with GitHub's review UI
- Authentication via stored OAuth tokens, no `git config` setup
- History browser with revert
- Stashing for in-progress work

Reimplementing any of that in our editor would mean shipping a worse version of features the user already has. And duplicating those features creates two states to keep in sync — what the editor thinks is committed vs. what GitHub Desktop thinks. Diverging UIs lead to bugs where the user trusts one and the other is the source of truth.

The contract is sharper for being narrow: the editor edits files; git records changes; GitHub Desktop helps push them. Each tool has one job. If a contributor breaks something with the editor, GitHub Desktop's diff view shows it in the same UI they'd use for any other change, and recovery is the same as recovering any other bad commit.

One concession: the editor *displays* git information (current branch, files changed since last commit) when those would help the user decide what to do. It just never *modifies* git state.

---

## 9. Operations baked into the binary

The editor's operations — Add, Remove, Pin, Set Version, Build & Launch, etc. — are hardcoded in the binary. A v2 alternative would let the repo declare custom operations via something like `.editor/operations.toml`, dynamically rendered as buttons.

The honest reason v1 is baked-in: it was simpler to ship. We had a working set of ~10 operations that covered everything we needed; deferring "make this configurable" let us ship the whole editor in a few sessions instead of designing a config schema first.

A note from session 1 of editor design called this out as a "v2 idea" and it has stayed there. The trigger to actually build v2 would be wanting pack-specific automation that doesn't belong in the binary — something like a custom validator, a per-pack tweaks profile, or pack-specific deployment hooks. None of that has come up yet.

If v2 happens, the migration would be: define an `operations.toml` schema (operation name, button label, what command to invoke, what arguments to collect from the user), implement a loader that reads it on editor startup, render dynamic buttons. The existing baked-in operations would become the defaults when no `operations.toml` exists.

Until then, baking operations into the binary is a "good enough" choice rather than the right one. CI rebuilds the binary on every push to `tools/editor-src/`, so adding a button is a code change but not a heavy one.

---

## 10. Why guns route through Create (and are deliberately hard)

The TaCZ gun integration (Create: Armorer + Create: Immersive TaCZ — full detail in `GUN-PACKS.md`)
is the gun branch of the **Create** system — and the one place we *deliberately* want extra friction,
so we hold it to a strict Create gate: a gun is **never** a quick craft from raw ore.
Every gun, ammo round, and attachment is gated behind Create parts and processed metals (steel,
brass/aluminum sheet, precision mechanisms, deployers), so standing up a gun line *means* standing up
a Create line first.

Two non-obvious choices worth recording:

- **Assembly happens at the TaCZ gun smith table, and the core parts use plain shaped recipes.**
  Immersive TaCZ's native Create recipes (`mechanical_crafting`, etc.) load fine but **don't render in
  EMI** on our Create 6.0.10 build — we burned real time confirming that (recipes present in the
  manager, no parse errors, just invisible). Rather than fight the viewer, the parts (`gun_barrel`,
  `gun_trigger`, `firing_mechanism`) ship as vanilla shaped recipes so they're discoverable, while
  their *ingredients* stay all-Create so the gating is intact. The native Create tree still loads as a
  parallel (un-surfaced) path; if a future Create/EMI version fixes that display we could collapse
  back onto it.

- **Difficulty is intentional, ~2-3 notches above a naive "convert the original recipe" baseline.**
  Cost is concentrated in the shared components (an 8-steel barrel + a deployer/RSC firing mechanism
  per gun), bulk fillers are roughly doubled, ammo yields run lean, and the 40mm cannon is a ~70-steel
  megaproject on purpose. Guns are a mid-to-late-game payoff, not an early convenience. Thematic
  variety comes from leaning on the wider Create ecosystem (Aeronautics propeller bearings/levitite,
  TFMG aluminum, Create Addition rods/wire/electrum) so parts read like what they build. It's all
  data-driven via a generator, so retuning is changing inputs, not hand-editing ~40 files.

---

## When updating this doc

If you're making a decision that future-you might forget the rationale for, add it here. If you're undoing a decision that's documented here, update or remove the section — don't leave stale "why we did X" notes after we've stopped doing X.

If a decision is clearly mundane ("we used Go because we know Go") it doesn't need a section. If it's contentious, novel, or a trap we already fell into once, it does.
