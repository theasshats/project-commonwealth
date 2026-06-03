# Release cadence — odd/even versioning (proposal)

> **Status: proposal** (for review). Establishes a predictable rhythm for the build-out and recasts
> the milestone roadmap to match. Pairs with the recurring passes: the curation rubric (#157), the
> mod-conflict catalog (#160), and the mod-update pass (#161).

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

## The odd-version workflow ("thunderdome")

1. **Add** — start the update by adding the candidate mods for the pillar in scope.
2. **Integrate** — weave them into the systems (recipes / configs / the Create web — #62, #132).
3. **Thunderdome (end of update)** — every mod *(the new adds **and** the existing related set)* is
   reviewed against all the others by **feature merit** (the #157 gates: system-anchor,
   no-redundant-mechanic, woven-not-floating). Winners stay; losers are **cut or reworked**. Freeze the
   version once the field has settled.

## The even-version workflow (stabilization)

1. **Profile** the prior odd version's feature dump (spark routine, #147).
2. **Prune for performance** (#157 perf gate), **fix bugs** (boot-log pass — #119/#120/#121), **balance**.
3. **No new mods or features** — even versions only stabilize what the preceding odd version added.

## Proposed roadmap

One **pillar per odd version**, each followed by a **dedicated even stabilization pass** so feature debt
never stacks. Extends past 0.11 — the version count is whatever the pillars need.

| Version | Parity | Type | Focus |
|---|---|---|---|
| **0.6.0** | even | Stabilization (Foundation) | CI, boot-log, perf baseline, modlist hygiene — decks cleared. *(already even-aligned)* |
| **0.7.0** | odd | **Feature** | **Create spine** — recipe-web cohesion, addon integration, complex-tech gating. *Everything builds on this, so it goes first.* |
| **0.8.0** | even | Stabilization I | Profile + balance + bug-fix everything 0.7 added. |
| **0.9.0** | odd | **Feature** | **Economy** — player-minted coins, vendors/pricing, bounties, wired mob/structure inputs. |
| **0.10.0** | even | Stabilization II | Profile + balance + bug-fix everything 0.9 added. |
| **0.11.0** | odd | **Feature** | **Survival & Magic** — the seasons × temperature × food interlock, and the balanced magic web. |
| **0.12.0** | even | Stabilization III | Profile + balance + bug-fix everything 0.11 added. |
| **0.13.0** | odd | **Feature** | **Aeronautics & logistics** — the airship payoff + the transport/logistics ladder. |
| **0.14.0** | even | Stabilization IV | Profile + balance + bug-fix everything 0.13 added. |
| **0.15.0** | odd | **Feature — LAST CALL** | **Polish & site** — wiki, onboarding, QoL, claims, the open decisions. Final additions/integrations; then feature freeze. |
| **1.0.0** | even | **Release (perf patch)** | Feature-frozen. Final performance + RAM tuning, ore-gen finalized, renamed, CI required → ship the public build. |

**Migration note.** This expands the milestone set to one pillar per odd version. From the current
scheme: **Economy** 0.8 → 0.9, **Survival & Magic** 0.9 → 0.11, **Aeronautics & logistics** 0.10 → 0.13,
**Polish & site** 0.11 → 0.15; **0.6 Foundation** and **1.0 Release** stay; and **four new even
stabilization milestones** (0.8, 0.10, 0.12, 0.14) are created. Trade-off: more release ceremony, but
every pillar gets its own profile/balance pass before the next piles on. The order of pillars across the
odd slots is adjustable. (Milestones are re-organised in the GitHub UI; the automated tooling here can
set an issue's milestone but can't create or rename one.)

## Post-1.0

Keep the rhythm for live content updates — no world resets; freshness comes from curated content updates
per `docs/DESIGN.md`: **1.1 odd** (feature / thunderdome) → **1.2 even** (perf / balance) → …

## Recurring passes that ride the cadence

- **Mod-update / verify / changelog / integrate (#161)** — updates land; new features get captured in the
  changelog and assessed for the next odd thunderdome.
- **Mod-conflict catalog (#160)** — runs on the **even** perf/stabilization pass.
- **Curation rubric (#157)** — its gates split across the cadence: the *merit* gates fire in the odd
  thunderdome, the *performance* gate fires in even stabilization.

---

_Refs: `docs/DESIGN.md` (the five-system goal + content-update model), `docs/MODLIST-AUDIT.md` (path
forward), #157 (curation rubric), #160 (conflict catalog), #161 (mod-update pass), #147 (spark routine)._
