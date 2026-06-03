# Release cadence — odd/even versioning (proposal)

> **Status: proposal** (for review). Establishes a predictable rhythm for the build-out and recasts
> the milestone roadmap to match. Pairs with the recurring passes: the curation rubric (#157), the
> mod-conflict catalog (#160), and the mod-update pass (#161).

## The model

The minor version's **parity** sets the update's job:

| Parity | Versions | Job |
|---|---|---|
| **EVEN** | 0.6, 0.8, 0.10, **1.0** | **Stabilization** — performance, bug-fixes, balance. *No new mods or features.* |
| **ODD** | 0.7, 0.9, 0.11 | **Feature / integration** — add mods, weave them in, then curate by merit (**the thunderdome**). |

- **1.0.0 is even → a performance patch.** Release is a stabilization version: feature-frozen, profiled,
  balanced, shipped.
- **The version before release (0.11, odd) is the last call for major additions / integrations.** After
  it: feature freeze through 1.0.

## Two kinds of curation (the key distinction)

Curation happens on *both* parities, for different reasons — both apply the rubric in #157, on different
gates:

- **ODD = feature-based curation ("the thunderdome").** Does a mod earn its place *on merit, against the
  alternatives*? Mods are added, then made to fight each other and the existing set. This is curation
  **by competition** — *not* removal for performance.
- **EVEN = performance-based pruning.** Is a mod's TPS/RAM cost justified? Cut or optimize the expensive,
  fix what broke, balance.

## The odd-version workflow ("thunderdome")

1. **Add** — start the update by adding the candidate mods for the pillar(s) in scope.
2. **Integrate** — weave them into the systems (recipes / configs / the Create web — #62, #132).
3. **Thunderdome (end of update)** — every mod *(the new adds **and** the existing related set)* is
   reviewed against all the others by **feature merit** (the #157 gates: system-anchor,
   no-redundant-mechanic, woven-not-floating). Winners stay; losers are **cut or reworked**. Freeze the
   version once the field has settled.

## The even-version workflow (stabilization)

1. **Profile** the prior odd version's feature dump (spark routine, #147).
2. **Prune for performance** (#157 perf gate), **fix bugs** (boot-log pass — #119/#120/#121), **balance**.
3. **No new mods or features** — even versions only stabilize what odd versions added.

## Proposed roadmap

Recasts the current pillar-per-version milestones onto the parity model. Feature pillars move onto **odd**
versions; **even** versions become the stabilization passes between them.

| Version | Parity | Type | Focus |
|---|---|---|---|
| **0.6.0** | even | Stabilization (Foundation) | CI, boot-log, perf baseline, modlist hygiene — decks cleared. *(already even-aligned)* |
| **0.7.0** | odd | **Feature** | **Create spine** — recipe-web cohesion, addon integration, complex-tech gating. *Everything builds on this, so it goes first.* |
| **0.8.0** | even | Stabilization I | Profile + balance + bug-fix everything 0.7 added. |
| **0.9.0** | odd | **Feature** | **Economy + Survival & Magic** — the player-minted trade loop, the seasons × temperature × food interlock, the magic web. |
| **0.10.0** | even | Stabilization II | Profile + balance + bug-fix everything 0.9 added. |
| **0.11.0** | odd | **Feature — LAST CALL** | **Aeronautics & logistics** (the payoff) **+ Polish / site / onboarding**. Final major additions/integrations; then feature freeze. |
| **1.0.0** | even | **Release (perf patch)** | Feature-frozen. Final performance + RAM tuning, ore-gen finalized, renamed, CI required → ship the public build. |

**Migration note.** This reshapes the existing milestones: the even ones (0.8 / 0.10) stop being pillar
milestones and become *Stabilization I / II*; **Economy** moves 0.8 → 0.9 and **Aeronautics** moves
0.10 → 0.11. The bundling/ordering of pillars across the three odd slots is adjustable — e.g. split
Economy and Survival & Magic into their own odd versions if 0.9 is too heavy (which extends the
pre-1.0 version count). (Milestones are re-organised in the GitHub UI; the automated tooling here can
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
