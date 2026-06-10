# Weaving strategy — building the cohesive web (DRAFT)

> **DRAFT — thinking in progress, not settled.** Captured from a cadence brainstorm for review and
> noodling. The detailed execution plan is being commissioned separately (an LLM-driven taste-weaving
> plan). Nothing here is a decision yet.

## The goal

Project Commonwealth's identity is *"one or two cohesive webs, not many clusters"* — every mod tied into ≥2 of the
systems (Create / magic — production; survival — pressure; economy — distribution & trade, incl.
logistics/aeronautics), which form one causal loop (the *Eco*-style scarcity → pressure → production →
economy; canonical model in `docs/SYSTEMS.md`). The pack is broad on purpose; what makes it **AAA rather
than kitchen-sink** is the **weave**: the sense that the mods *belong together* and
feed each other. The stated ambition is to reach that **with minimal manual effort** — i.e. accomplish
the weave **primarily with LLM tools**.

## Where we are

~90% of mods are in, and **the pack runs** — recipes resolve, no fatal conflicts, no "scary seams" to
de-risk. So the *structural* layer is largely there. The open work is the layer above structure: making
the connections **meaningful**, not just present.

## Two depths of weaving

- **Structural (plumbing)** — tags unified, no hard duplicates, recipes valid, nothing orphaned, mods
  *can* connect. Largely done; LLM-able; hard to fake. (Most of the recipe-overhaul #62 + cohesion #132
  work.)
- **Meaningful (taste)** — the connections that are actually *good*: themed, fun, intentional, the kind a
  hand-curated pack has. This is the hard part, and the subject of this doc.

## The hard problem: taste at scale, with LLMs

Two obstacles to LLM-driven taste-weaving:

1. **LLMs lack play-knowledge.** Authoring deep weaves for mods nobody has played tends to yield
   *lifeless or uninformed threads* — technically connected, but not fun. The digest (`tools/mod-data/`)
   gives IDs / tags / recipes, not "what this mod is *for*" or "how it actually plays." The bet is that
   with real per-mod understanding (what each mod does, its theme, its contents), LLM tools can do much
   better than they have so far.
2. **The metric can't supply taste.** Connectivity % (`tools/recipe-graph/`) finds isolated clusters but
   can't tell a meaningful weave from a bridge-for-the-metric — so it's a **compass, not a gate**
   (targeting it invites gaming — Goodhart; already visible in some recipes).

## Open question: when does taste-weaving happen?

- **Defer to post-release (one view):** taste needs play; do shallow structure pre-1.0 and let the deep
  weave accrete post-launch through actual play (fits "no resets; freshness from content updates").
- **Do it pre-release with LLM tools (the path being pursued):** if LLM tools, *given real per-mod
  understanding*, can produce non-lifeless weaves, taste-weaving can largely happen before launch — which
  is preferred.
- **Maintainer lean:** not convinced taste edits should wait for post-release; the pack runs today, so
  pursue the LLM-driven pre-release path and see how far it gets. ← this is what the commissioned plan
  targets.

## The commissioned plan (separate workstream)

A dedicated pass will produce a **comprehensive, cohesive plan to accomplish taste-weaving primarily with
LLM tools**, centered on:

- Building a real **per-mod understanding** — for every mod: what it *does*, its *theme*, what it *has*
  (blocks/items/mechanics) — beyond the ID/tag digest.
- **Chunking** that understanding (356 mods is far too much for one context) **without losing global
  cohesion** — some shared ledger/index that keeps the whole web in view while working in pieces.
- Turning that understanding into authored weaves (KubeJS recipes/tags) with humans kept in the loop only
  at the **taste gates**, plus how to keep the output from being lifeless threads.

## Principles to carry in (from the brainstorm)

- **Web % is a compass, not a gate** (above).
- **Default unjustified mods to cut.** The front-loaded modlist was added without per-mod justification;
  the curation rubric (#157) flips the inertia so an unargued mod is cut, and the thunderdome cuts as a
  *depersonalized process*.
- **LLM = labor + decision-surfacing; human = taste at a few gates.** The open bet is how far the
  "labor" can extend into the "taste" with the right per-mod context.

---

_Refs: `docs/archive/RELEASE-CADENCE.md` (the cadence this rides), `docs/DESIGN.md` (the goal), `docs/SYSTEMS.md` (the systems loop),
`docs/CONNECTIVITY.md` + `tools/recipe-graph/` (the web metric), `tools/mod-data/` (the digest),
#62 / #132 (structural weave to date), #157 (curation rubric), #160 (per-mod web research)._
