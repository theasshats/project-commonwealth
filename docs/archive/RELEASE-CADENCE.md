# Release cadence — odd/even versioning

> **📦 ARCHIVED (v0.6.0).** Accepted and folded into **`docs/ROADMAP.md`**, which is now the canonical
> cadence map + rationale. Kept here for the extended reasoning. Also note: the milestone scheme changed
> after this was written — aeronautics folded into the Economy pillar (v0.9.0), and Survival & Magic split
> into their own pillars (v0.11.0 Magic, v0.13.0 Survival). See `docs/ROADMAP.md` / `docs/SYSTEMS.md`.

> **Status: accepted** — the canonical cadence. `docs/ROADMAP.md`, `CLAUDE.md`, and `docs/CONNECTIVITY.md`
> have been reconciled to match: the thunderdome runs on the **odd** feature versions, perf-pruning on the
> **evens**, and the roadmap is expanded to 0.6 → 0.15 → 1.0. Pairs with the recurring passes: the curation
> rubric (`docs/CURATION.md`, #157), the mod-conflict catalog (#160), and the mod-update pass (#161). The
> structural model the pillars build out is `docs/SYSTEMS.md` (the *Eco*-style production/trade loop).

## The model

The minor version's **parity** sets the update's job:

| Parity | Versions | Job |
|---|---|---|
| **EVEN** | 0.6, 0.8, 0.10, 0.12, 0.14, **1.0** | **Stabilization** — performance, bug-fixes, balance. *No new mods or features.* |
| **ODD** | 0.7, 0.9, 0.11, 0.13, 0.15 | **Feature / integration** — add mods, weave them in, then curate by merit (**the thunderdome**). |

- **1.0.0 is even → a performance patch.** Release is a stabilization version: feature-frozen, profiled,
  balanced, shipped.
- **The last odd version before release (0.15) is the last call for major additions / integrations.**
  After it: feature freeze through 1.0.
- **Version count is open** — extend with as many odd/even pairs as the pillars need (0.12, 0.13, 0.14,
  0.15, …); each feature version earns its own stabilization version.

## Two kinds of curation (the key distinction)

Curation happens on *both* parities, for different reasons — both apply the rubric in #157, on different
gates:

- **ODD = feature-based curation ("the thunderdome").** Does a mod earn its place *on merit, against the
  alternatives*? Mods are added, then made to fight each other and the existing set. This is curation
  **by competition** — *not* removal for performance.
- **EVEN = performance-based pruning.** Is a mod's TPS/RAM cost justified? Cut or optimize the expensive,
  fix what broke, balance.

## Two depths of weaving (plumbing vs. taste)

A cohesive web is the goal, and it has two layers:

- **Structural weaving — plumbing.** Tags unified, no hard duplicates, recipes valid, nothing orphaned,
  every mod *can* connect. Largely done — the pack runs. Judgment-light, automatable, hard to fake.
- **Meaningful / taste weaving.** The cross-system connections that are actually *good* and themed — the
  hard part, and the thing that makes the pack AAA rather than kitchen-sink.

**How the taste layer gets built — how far LLM tools can take it, and whether it lands pre- or
post-release — is an open question**, worked separately in
[`docs/WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md). For the cadence: the odd-version thunderdome lays the
plumbing and curates the *set*; the taste depth is the weaving-strategy question, not a settled
per-release deliverable here.

> **Web % is a compass, not a gate.** Use the connectivity tool (#129) to *find* off-web clusters worth a
> human look — never as a release target. Target a coverage % and it gets gamed
> (bridge-recipes-for-the-metric — Goodhart's law). Ask "is this island *intentional* (cosmetic — fine)
> or a *real gap*?", not "are we at N%."

## The odd-version workflow ("thunderdome")

1. **Add** — start the update by adding the candidate mods for the pillar in scope.
2. **Integrate (structurally)** — weave them into the systems at the *plumbing* level (tags, valid
   recipes, no duplicates — #62, #132). The taste layer is the weaving-strategy question
   (`docs/WEAVING-STRATEGY.md`).
3. **Thunderdome (end of update)** — every mod *(the new adds **and** the existing related set)* is
   reviewed against all the others by **feature merit** (the #157 gates: system-anchor,
   no-redundant-mechanic, woven-not-floating). Winners stay; losers are **cut or reworked**. Freeze the
   version once the field has settled.

> Cuts run as a *process* — the field competed, these lost — **depersonalized by design**. The rubric
> (#157) defaults an unjustified mod to **cut unless argued for**, so the front-loaded modlist's inertia
> works *for* curation instead of against it.

## The even-version workflow (stabilization)

1. **Profile** the prior odd version's feature dump (spark routine, #147).
2. **Prune for performance** (#157 perf gate), **fix bugs** (boot-log pass — #119/#120/#121), **balance**.
3. **No new mods or features** — even versions only stabilize what the preceding odd version added.

## Pillar-weave review (between pillars)

The thunderdome reviews **mods against each other** *within* a feature version. The **weave review**
reviews **systems against each other** — the loop seams *between* the systems, which no single pillar
version owns. At this stage it checks the seams **connect and function** (structural); the *deep* taste
weaving is the open weaving-strategy question (`docs/WEAVING-STRATEGY.md`).

- **Incremental** — as each system lands (its odd version), it's wired into the systems already built,
  and the following even stabilization checks those seams didn't break.
- **Comprehensive at 0.15** — the last feature version includes a full weave review: does the whole
  loop actually interlock before the 1.0 freeze? Close the gaps and contradictions.

Seams to check (examples): Create ↔ economy (coins minted from Create-processed scarce metals, #136),
Create ↔ magic (magic gated behind Create components, #146), Create ↔ aeronautics (ships powered and
built through Create, #143), survival ↔ aeronautics (altitude → Cold Sweat, #124), economy ↔ everything
(mob-drop bounties #137 + regional trade #139 fed by mining and seasonal crops).

## Proposed roadmap

One **pillar per odd version**, each followed by a **dedicated even stabilization pass** so feature debt
never stacks. Extends past 0.11 — the version count is whatever the pillars need.

| Version | Parity | Type | Focus |
|---|---|---|---|
| **0.6.0** | even | Stabilization (Foundation) | CI, boot-log, perf baseline, modlist hygiene — decks cleared. *(already even-aligned)* |
| **0.7.0** | odd | **Feature** | **Create spine** — recipe-web cohesion, addon integration, complex-tech gating. *Everything builds on this, so it goes first.* |
| **0.8.0** | even | Stabilization I | Profile + balance + bug-fix everything 0.7 added. |
| **0.9.0** | odd | **Feature** | **Economy & logistics** — player-minted coins, vendors/pricing, bounties, wired inputs, **plus the logistics/aeronautics movement arm** (airship payoff + transport ladder). The economy *is* the distribution stage; aeronautics is its physical arm, so they build together. |
| **0.10.0** | even | Stabilization II | Profile + balance + bug-fix everything 0.9 added. |
| **0.11.0** | odd | **Feature** | **Magic** — the magic web bridged into one progression, balanced, with its own locked exclusives. |
| **0.12.0** | even | Stabilization III | Profile + balance + bug-fix everything 0.11 added. |
| **0.13.0** | odd | **Feature** | **Survival** — the seasons × temperature × diet interlock; the world pushing back, tuned. |
| **0.14.0** | even | Stabilization IV | Profile + balance + bug-fix everything 0.13 added. |
| **0.15.0** | odd | **Feature — LAST CALL + weave review** | **Polish & site** — wiki, onboarding, QoL, claims, the open decisions — **plus the comprehensive weave review** (all systems reviewed *between* each other — the loop seams). Final additions/integrations; then feature freeze. |
| **1.0.0** | even | **Release (perf patch)** | Feature-frozen. Final performance + RAM tuning, ore-gen finalized, renamed, CI required → ship the public build. |

**Milestone shape.** One system per odd version, each followed by its even stabilization. The feature
pillars are **Create (0.7) → Economy & logistics (0.9) → Magic (0.11) → Survival (0.13) → Polish + weave
(0.15)** — note **aeronautics folds into the Economy pillar** (it's the economy's logistics arm, not a
separate system — `docs/SYSTEMS.md`), and **Survival and Magic are split into their own pillars** (they
were briefly combined). **0.15 stays the last feature** version. (Milestones are re-organised in the
GitHub UI or via the milestone-restructure script shipped with this change; the automated MCP tooling can
set an issue's milestone but can't create or rename one.)

## Why one pillar per release (not mixed)

We considered mixing pillars / per-release web-% targets / integration-depth tiers, and chose **one themed
pillar per feature version** because:

- **Themed milestones motivate.** On a small crew, "ship the Economy update" *feels* like an
  accomplishment in a way "raise cohesion to 78%" doesn't — and motivation is a real resource.
- **Each pillar release is a natural ecosystem-survey** — a moment to step back and pull in what's new
  and good. Especially **Aeronautics**: its addon ecosystem is young and growing weekly, so reaching it
  *late* (0.13) is a feature — riper, more stable choices than grabbing everything now.
- The mixed model was rejected mainly because a **per-release web-% target is gameable** (see the compass
  note above), and the deep-weaving question is better handled on its own (`docs/WEAVING-STRATEGY.md`).

## Docs reconciled (on acceptance)

Accepted; the canonical docs were updated to match, folded in atomically:

- **`docs/ROADMAP.md` + `CLAUDE.md`** — rewritten to the odd/even cadence: expanded to 0.6–0.15 → 1.0 (one
  pillar per *odd* version + stabilization evens), with the **thunderdome moved onto the odd feature
  versions** and perf-pruning on the evens. "Thunderdome" now means one thing across the docs.
- **`docs/CONNECTIVITY.md`** — added the **compass-not-gate** caveat (find islands with the %; don't target
  it — it's gameable).
- **`docs/DESIGN.md`** — no change needed; "every mod earns its place / cut what anchors to nothing" and the
  "emergent, optional economy" framing already align (the curation rubric #157 and player-minted economy
  #136 operationalize it at the issue level).

## Post-1.0

Keep the rhythm for live content updates — no world resets; freshness comes from curated content updates
per `docs/DESIGN.md`: **1.1 odd** (feature / thunderdome) → **1.2 even** (perf / balance) → …

## Recurring passes that ride the cadence

- **Mod-update / verify / changelog / integrate (#161)** — updates land; new features get captured in the
  changelog and assessed for the next odd thunderdome.
- **Mod-conflict catalog (#160)** — runs on the **even** perf/stabilization pass.
- **Curation rubric (#157)** — its gates split across the cadence: the *merit* gates fire in the odd
  thunderdome, the *performance* gate fires in even stabilization.
- **Pillar-weave review** — incremental as each pillar lands; comprehensive at **0.15** before the freeze.

---

_Refs: `docs/SYSTEMS.md` (the systems loop), `docs/DESIGN.md` (the goal + content-update model), `docs/WEAVING-STRATEGY.md` (the
taste-weaving question), `docs/archive/MODLIST-AUDIT.md` (path forward), #157 (curation rubric), #160 (conflict
catalog), #161 (mod-update pass), #147 (spark routine)._
