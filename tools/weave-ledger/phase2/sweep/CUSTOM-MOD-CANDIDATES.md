# Custom-mod candidates — weave-program features that want code, not KubeJS

> **Why this file exists:** the maintainer ruled (2026-06-12) that the pack is *not* shying away
> from custom mods for cool/good features — and the pipeline already exists (`docs/CUSTOM-MODS.md`:
> the mod-mirror pattern, with `pcmc-killfeed` shipped and **`pcmc-arcana` as a skeleton-stage
> magic-weave bridge**). That changes the disposition of weave findings whose mechanism doesn't
> exist: instead of DROP / "build task someday," they collect HERE as candidate features for
> maintainer cherry-pick. A candidate still needs the same loop justification as any weave —
> custom code is a delivery mechanism, not an exemption from the design test.
>
> Routing: maintainer picks a candidate → it becomes an issue on the owning mod repo
> (`pcmc-arcana` for magic-side hooks, a new repo per `docs/CUSTOM-MODS.md` for standalone
> mechanics) → ships into the pack via the mod-mirror manifest like any other mod.

## The four standing mechanism-pending systems (now with a real implementation route)

| Candidate | Tracked | Loop edge | Note |
|---|---|---|---|
| **Perishability** (M-36) | #238 (v0.9.0) | consumption renews demand; logistics *speed* matters | Was "mod-add or KubeJS rot-timers"; a small custom mod owns it cleanly (per-item decay tags + config). The strongest candidate of the four — already scheduled. |
| **Tooling wear** (M-38) | #239 (backlog) | even self-sufficient producers depend on a toolmaker | Flagship case ready: createoreexcavation drill-head tiers (DEFERred to #239 by triage). |
| **Ecological cost** (M-25) | #222 | production damages the commons → scarcity/pressure feedback | The hard one: must be claim/footprint-bound and event-driven (SYSTEMS §3a blockers). Custom mod is the *only* plausible route; still needs the design cracked first. |
| **Dynamic pricing / currency trust** | #240 (+#221 spike) | the economy's price signal | Run the #221 tooling spike first; a custom Numismatics-adjacent mod is now an acceptable spike outcome rather than a dead end. |

## Candidates surfaced by the V2-S sweep (pilot wave)

- **Banker fuel upkeep** — numismatics `blaze_banker` consuming blaze rods per transaction/time
  (P-1 found no mechanism in the digest and dropped the M-26 row). As a custom hook: a clean,
  tiny consumption sink on the economy's own infrastructure. Loop: demand renewal on the banking layer.
- **Ritual event hooks (moon-gated magic)** — P-2 re-scoped the Ars Wilden-ritual lunar gate because
  rituals are code-driven and the NeoForge RitualEvent path is unproven. This is **squarely
  pcmc-arcana's charter**: a small event listener gating ritual starts on Enhanced Celestials /
  ender-moon events would unlock M-22 across every ritual system at once.
- **Sprinkler magic-fluid effects** — sliceanddice's fluid behaviors are code-side; if the effect
  table proves hardcoded (P-1 verify), a tiny mixin/hook registering "source-infused fluid → growth
  boost" delivers the ratified M-29 cross-route weave properly.
- **Levitite arcane crystallization** (full version) — the blend→levitite step is code-only; the
  ratified weave re-scoped onto the mixing recipe (authorable now, stands). A code hook adding a
  *catalyst requirement to crystallization itself* is the deeper version if the cheap one
  underwhelms in play. Low priority.

## Candidates from sweep waves 2–3 (act: CUSTOM)

- **Bookshelf source-bonus (woodworks → magic, M-10)** — Ars Nouveau has no bookshelf-power mechanic
  or apparatus config, so the ratified "config" delivery is unauthorable; the loop-positive idea
  (magic throughput buying the woodworker's palette) needs a small **pcmc-arcana** hook reading
  nearby bookshelf variants at the apparatus. (S-09)
- **Winter-scaled burner fuel draw (createlowheated × Serene Seasons, M-16)** — make low-heat burners
  draw more fuel in winter so cold season tightens the fuel market; no config surface exists for
  season-keyed burn rates — needs a code hook. Pairs with the coal-coke hearth-fuel weave. (S-10)

## Candidates from sweep waves 4–5 (act: CUSTOM)

- **Delivery-contract bounty type (bountiful, M-31)** — a bounty that pays on physically hauling
  goods to a distant board would give the logistics arm its labor market; Bountiful has no such
  objective type — small addon or PR-upstream. (S-16)
- **Bookshelf apparatus amplifier (quark `ancient_bookshelf` → Ars, M-10)** — same pcmc-arcana
  hook family as the woodworks candidate; one hook serves both. (S-15)
- **Faction-lord relic drop (valarian_conquest, M-02)** — the mod ships zero entity loot tables;
  a unique relic drop (custom loot injection + item) would give the conquest pillar its reagent
  edge; the ratified row's "relic" never existed. (S-13)
- **Horde-night drop hook (zombiemoon, M-22)** — event-conditioned drops during horde moons need
  an event-listener hook; joins the pcmc-arcana moon-event family (ritual gating, EC
  moon-conditioned recipes — one listener serves all three). (S-13, S-16)

## Process note (applies from chunk S-05 onward)

The sweep BRIEFING gains one line once the in-flight S-01…S-04 wave lands (not edited mid-wave):
*when a weave is loop-positive but mechanism-absent, do not DROP — record `act: CUSTOM` with the
feature one-liner; it routes here.* The S-01…S-04 agents' "build task / no mechanism" notes get
converted to this disposition at fold time by hand.

## Approval outcomes (maintainer, 2026-06-12) — all routed

- **Perishability (A1)** — already tracked: #238 (v0.9.0). No new filing needed.
- **Moon-event listener (A2)** — APPROVED → spec'd 1:1-translatable in #118 (comment), pcmc-arcana.
- **Bookshelf amplifier (A3)** — APPROVED with the design ruling that vanilla bookshelves count as
  the baseline tier → spec'd alongside A2 in #118.
- **Sprinkler magic fluids (A4)** — APPROVED → #331 (v0.11.0).
- **Winter burner fuel draw (A5)** — APPROVED → #332 (v0.9.0).
- **VC faction-lord relic (A6)** — soft: folded into #328 (loot-table actions) as a low-priority
  idea with uses.
- **Tooling wear (A7)** — re-framed as a production update → #239 moved to v0.11.0 with the
  drill-head flagship scope.
- **Delivery-contract bounties (B2)** — parked for the economy/government plan → #329 (v0.13.0,
  zagwar tagged).
- **Banker fuel upkeep (B3)** — parked likewise → #330 (v0.13.0, zagwar tagged).
- **Dynamic pricing (B1)** — no new issue; sweep inputs delivered to #240 as a comment
  (mint ladder, faucet constraint, marginal-mint precedent), zagwar tagged.
- **Coin-loot-seed ruling** — SIGNED; implementation checklist in #328.
