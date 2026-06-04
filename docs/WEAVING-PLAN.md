# Taste-Weaving Plan — building the cohesive web with LLM tools

> **Status: plan / proposal.** This is the execution plan commissioned by
> [`docs/WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md): *how* to accomplish **meaningful (taste) weaving**
> primarily with LLM tools, at minimal human effort, without fragmenting the global web. It is a strategy
> document — **nothing here authors a single recipe.** When it's adopted, the work it describes runs as
> the recurring weave pass that rides the odd/even cadence ([`RELEASE-CADENCE.md`](RELEASE-CADENCE.md)).

## TL;DR

The structural weave is largely done (the pack runs; ~78% giant component, avg ~1.8 hops to the Create
spine). What's left is the **taste** layer — connections that are *good, themed, and fun*, not merely
present. Two things block an LLM from doing that well: it **lacks play-knowledge** (the digest has IDs,
not "what a mod is *for*"), and **the connectivity metric can't supply taste** (target it and it gets
gamed). This plan solves both with one central idea and a supporting pipeline:

1. **A shared design vocabulary (a *motif registry*) + a persistent *weave ledger*.** Weaves are
   *composed from a small set of approved, recurring connective motifs* (e.g. "Ars source is the
   universal magic currency," "Create crushing recycles deco," "luxury goods mint into coin"), not
   invented per-mod. This is the mechanism that keeps 356 locally-authored decisions reading as **one or
   two webs** instead of 356 ad-hoc edges — and it's the thing that prevents context-window chunking from
   fragmenting global cohesion.
2. **A per-mod understanding layer (the *dossier*)** that teaches the weaver what each mod is, its vibe,
   and its signature contents — built by a per-mod web sweep (folded into #160) and **grounded against
   the jar digest** so facts can't be hallucinated.
3. **A phased pipeline** — scaffold → understand → map opportunities → author → validate → globally
   review — with humans at a handful of **cheap, batched taste gates**, not in the per-mod grind.

**Honest framing up front:** an LLM can make a weave *coherent, themed, grounded, and balance-safe* —
which is necessary but **not sufficient** for *fun*. Fun is confirmed by play. So the LLM target
pre-release is **coherence**; **balance and fun-confirmation are explicitly deferred to playtest** and
the post-release content cadence. This plan maximizes what's feasible pre-release and is honest about the
line LLMs can't cross alone.

---

## 1. The problem, stated precisely

From [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) and [`DESIGN.md`](DESIGN.md):

- **The goal:** the pack reads as *"one or two cohesive webs, not many clusters"* — every mod tied into
  **≥2 of the five systems** (Create / magic / economy / aeronautics / survival). One pillar is the
  floor; two is the target. What makes the pack **AAA rather than kitchen-sink** is the *weave*.
- **Two depths:** *structural* (tags unified, recipes valid, nothing orphaned — **largely done**) and
  *meaningful/taste* (connections that are actually good and themed — **the open work**).
- **Obstacle 1 — no play-knowledge.** Authoring deep weaves for mods nobody on the team has played
  yields *lifeless threads*: technically connected, not fun. The digest (`tools/mod-data/`) gives IDs,
  tags, recipes, loot — **not "what this mod is for" or "how it plays."**
- **Obstacle 2 — the metric can't supply taste.** Connectivity % (`tools/recipe-graph/`) finds isolated
  clusters but can't tell a meaningful weave from a bridge-for-the-metric. It's a **compass, not a gate**
  (Goodhart — targeting it invites gaming, already visible in some recipes).

**Definition of "done" for a weave** (the bar every authored connection clears), inherited from
[`RECIPES.md`](RECIPES.md) and the magic-web precedent ([`MAGIC-WEB-HANDOFF.md`](MAGIC-WEB-HANDOFF.md)):

> A weave is *coherent* if a player would say **"of course you'd connect these"** — the ingredient
> matches the output, it routes through the right machine, it's additive (or a removal is replaced), it
> doesn't make a power item cheaper, and it gives a mod a **second pillar** it didn't have. A weave is
> *done* only when it's also been **seen in-game and playtested** — that last step is human.

---

## 2. The core idea: motifs + a persistent ledger (how global cohesion survives chunking)

This is the load-bearing concept; everything else is plumbing around it.

A web of 356 mods cannot be held in one context window, so the work **must** be chunked — and naive
chunking is exactly what produces "many clusters": each chunk invents its own local connections, reuses
the same reagent three incompatible ways, and the global picture fragments. The fix is to make weaves
**compositions of a shared, small, named vocabulary** that every chunk reads before it writes.

### 2.1 The motif registry — the shared vocabulary

A **motif** is a reusable *kind of connection* with a theme and a home pillar-pair. The pack already has
several, authored ad hoc; this plan makes them canonical and additive-only-by-gate:

| ID | Motif | Pillars | Seeded from |
|---|---|---|---|
| M-01 | **Arcane currency** — Ars `source_gem` is the universal magic currency; foreign essences mint into/out of it via Ars's own stations | magic↔magic | `33-magic-web-spine.js` |
| M-02 | **Mob-drop reagent sink** — an isolated mob/boss drop is given a use as a magic/economy input via the consuming mod's native machine | organic↔magic/economy | `35-magic-web-mobs.js` |
| M-03 | **Create ore-doubling** — ore → crushed via `create:crushing` (+byproduct); a *reward*, vanilla smelt path stays | any↔Create | `RECIPES.md` |
| M-04 | **Create recycles deco** — metal/stone deco crushes back to raw/gravel + an XP nugget; lossy, so not free dup | block/deco↔Create | `35-web-bridges.js` |
| M-05 | **Native-machine gating** — a mod's flagship item is built in *its own* machine, gated on Create parts as ingredients | any↔Create | `RECIPES.md`, `60-mffs.js` |
| M-06 | **Sequenced-assembly keystone** — endgame/flagship items are multi-stage `sequenced_assembly` chains through a `derpack:incomplete_*` part | Create (depth) | `60-mffs.js`, `startup_scripts/01-intermediate-parts.js` |
| M-07 | **Attunement catalyst** — a worldgen consumable (Galosphere allurite/lumiere shards) gates a conversion so it isn't free arbitrage | magic + survival/worldgen | `33`/`80`/`97` |
| M-08 | **Coin from processed scarcity** — scarce regional metal → Create-processed → minted into Numismatics coin (the economy seam) | Create↔economy | #136 (planned) |
| M-09 | **Luxury good → coin** — a high-effort consumable (wine, cheese, processed crop) is a sellable trade good | survival/food↔economy | proposed |

**Rules that make motifs the anti-fragmentation device:**

- **Compose, don't invent.** An authored weave must cite the motif(s) it instantiates. "Doesn't fit any
  motif" is a signal to *stop and escalate*, not to invent a one-off edge.
- **New motifs are a human gate (Gate 0).** Because a motif propagates globally, registering a *new* one
  needs maintainer sign-off. Reusing an approved motif does not. This caps "motif sprawl" (too many
  motifs = no vocabulary).
- **A motif carries its anti-arbitrage rule.** M-01/M-07 round-trips must lose value; M-04 is lossy by
  design. The rule travels with the motif so every chunk applies it the same way.

### 2.2 The reagent-ownership table — no double-spend

The second fragmentation source is two chunks repurposing the same item incompatibly. A short
**reagent-ownership table** in the ledger reserves the connective items:

```
galosphere:allurite_shard / lumiere_shard   → M-07 attunement catalyst (magic). DO NOT repurpose.
ars_nouveau:source_gem                       → M-01 magic currency hub.
create:experience_nugget                     → standard crushing byproduct (M-03/M-04).
occultengineering:spirit_solution            → the occult intermediate (reuse; don't invent a new one).
numismatics:* (cog/spur/…)                   → M-08 coin sink — owned by the economy pillar.
```

Before a chunk gives an item a new role, it checks this table. Conflicts are escalated, not resolved
locally.

### 2.3 The weave ledger — the running design state

One persistent, append-only record every chunk reads first and writes last. It is the generalization of
the ad-hoc `*-HANDOFF.md` docs the magic web already used, into a single index that keeps the whole web
in view. Schema and storage in [§4](#4-the-ledger-structure-concrete). **The ledger — not the metric —
is the source of truth for "what is woven and why."**

---

## 3. The chunking scheme (work the pieces, keep the whole in view)

**Key insight: the unit of *understanding* and the unit of *weaving* are different, so they chunk
differently.**

### 3.1 Understanding chunks = one mod each (embarrassingly parallel)

Per-mod understanding is atomic: one mod → one web sweep → one dossier card. ~356 tiny, independent
tasks, each comfortably inside a context window, each grounded against that mod's digest files. This maps
**exactly** onto the per-mod sweep #160 already specifies for conflicts — so it's **folded into the same
pass** (one web visit per mod captures both "what it's for" *and* its conflict reputation). No global
state needed here beyond appending the card.

### 3.2 Weaving chunks = pillar-seam neighborhoods (never a lone pillar)

A weave connects ≥2 mods, so its chunk must be a *neighborhood*, not a single mod. The neighborhood is
defined to **force cross-pillar thinking by construction**:

- **Primary axis = the cadence's pillar.** The odd version in flight sets the focal pillar (0.7 Create,
  0.9 economy, 0.11 survival & magic, 0.13 aeronautics — [`RELEASE-CADENCE.md`](RELEASE-CADENCE.md)).
- **Each chunk is a *seam*, i.e. `focal-pillar × one other pillar`** — Create↔economy, magic↔survival,
  etc. You cannot author a single-pillar chunk; the chunk *is* the second-pillar search. This is the
  ≥2-pillar rule made structural.
- **Sub-chunked by mod family / recipe-graph neighborhood** to fit a context window — e.g. the Create
  odd version sub-chunks into {metals, food-through-Create, tech/gear islands, decoration-through-Create},
  each a working session.

The recipe-graph's island table and buckets (`tech/gear`, `block/deco`, `organic/mob`, `magic`,
`security`, `phantom` — [`CONNECTIVITY.md`](CONNECTIVITY.md)) give the ready-made neighborhood map: each
off-web cluster is a candidate sub-chunk, already triaged by whether it's worth bridging.

### 3.3 How chunks hand off (and don't fragment)

1. **Read-ledger-first.** Every weaving session opens by reading the motif registry, reagent-ownership
   table, and the ledger entries for the mods in scope. It works *within* the existing vocabulary.
2. **Write-ledger-last.** It appends its proposed/authored weaves, any new-motif requests (flagged for
   Gate 0), and a one-paragraph **handoff stub** (what it did, what it deferred, open questions) — the
   same role the `*-HANDOFF.md` docs play today, now centralized.
3. **The coordinator** (a thin driver session or the maintainer) sequences chunks, resolves cross-chunk
   conflicts surfaced in stubs, and owns the motif registry. Most chunks never interact directly; they
   interact *through the ledger*.
4. **The global backstop** is the comprehensive pillar-weave review at **0.15** (already in the cadence):
   the whole ledger is audited, every pillar against every other, dead motifs retired, contradictions
   closed. Chunking can drift slightly between here and there; this is where drift is caught.

---

## 4. The ledger structure (concrete)

Stored in-repo, plain text, diff-friendly, parseable by a small cross-check script. Proposed layout:

```
tools/mod-data/dossiers/<mod>.md      # one understanding card per mod (Phase 1 output)
docs/WEAVE-LEDGER.md                  # motif registry + reagent-ownership + weave log (human-readable)
tools/weave-ledger/weaves.json        # machine-readable mirror of the weave log (for cross-check)
tools/weave-ledger/check.py           # ledger ↔ kubejs ↔ recipe-graph consistency checker
```

### 4.1 Dossier card (per mod) — the understanding layer

Markdown so it diffs well; the **factual** fields are pre-filled from the digest by a generator (§9) so
the web sweep only fills the *judgment* fields, and every content claim is **traceable to a jar line or a
URL**:

```markdown
# vinery — dossier
jar:        Vinery-1.21.1-...           (digest: tools/mod-data/by-mod/Vinery-...txt)
one-line:   winemaking & Mediterranean cuisine — grow grapes, ferment wine, cook regional dishes.
vibe:       rustic, agrarian, Mediterranean; slow-craft artisanal.
signature:  vinery:red_grape, vinery:wine_press(?), vinery:* wines, vinery:cheese  [each → digest id]
machines:   vinery:fermentation_barrel (native method, if any — verify in recipes/<jar>.txt)
anchors:    survival/food (1)           ← current pillar count
2nd-pillar candidates:
  - economy: wine/cheese as sellable luxury goods (M-09)  [STRONG, thematic]
  - Create:  press grapes via create:pressing? (verify juice item)  [WEAK, check theme]
how-packs-integrate: <url> — commonly a food/trade mod; pairs with Farmer's Delight.
sources:    [modrinth url] [wiki url] [digest]
status:     VERIFIED                    ← or UNVERIFIED (blocks use as a weave basis)
```

### 4.2 Motif registry & reagent-ownership

The tables in [§2.1](#21-the-motif-registry--the-shared-vocabulary) and
[§2.2](#22-the-reagent-ownership-table--no-double-spend), maintained at the top of `WEAVE-LEDGER.md`.

### 4.3 Weave log entry

```
W-037 | from: vinery → to: economy(numismatics) | hook: wine is a millennia-old trade good
       | motif: M-09 | mechanism: numismatics depositor price / sale recipe (verify schema)
       | status: proposed → [Gate 2 approved] → authored(kubejs/.../0x-economy-food.js) → playtest-pending
       | confidence: COHERENT, BALANCE-PENDING
       | pillars-added: vinery gains economy (now 2)  | sources: [digest][modrinth]
```

`status` is a small state machine: `proposed → approved → authored → validated(static) → playtested`.
`confidence` is two independent flags: **COHERENT** (LLM can assert) and **BALANCE-OK / BALANCE-PENDING**
(only play confirms — see [§8](#8-pre--vs-post-release-what-the-llm-can-and-cant-do)).

### 4.4 The cross-check script (`check.py`)

A small stdlib-Python tool, sibling to the recipe-graph, that asserts the ledger and the code agree:

- Every `authored` weave in `weaves.json` has a matching recipe in `kubejs/server_scripts/recipes/`.
- Every kubejs bridge recipe (the same parse the recipe-graph overlay already does in
  `recipe_graph_lib.py`) is logged in the ledger — **catches un-ledgered edges that would fragment the
  vocabulary.**
- Every weave cites a registered motif; every cited reagent honors the ownership table.
- Reports dossier coverage: mods with no dossier, mods at 0/1 pillar, `UNVERIFIED` cards.

This makes "the web stayed coherent" a *checkable* property, not a vibe — without turning the
connectivity % into a target.

---

## 5. The phases

Each phase states inputs → outputs → tools → the human gate. Phases 0–1 are cadence-independent (run now,
as Backlog/living, like #160/#161); 2–4 ride the odd feature versions; 5 is the 0.15 review + recurring
upkeep.

### Phase 0 — Scaffolding & vocabulary (one-time)
- **Do:** build the dossier generator (§9.1); define `WEAVE-LEDGER.md` + `weaves.json` schema; **seed the
  motif registry and reagent-ownership table from the *existing* weaves** (magic-web, `35-web-bridges`,
  `60-mffs`, numismatics) so we start from the vocabulary the pack already speaks.
- **In:** the repo's current kubejs + docs. **Out:** empty-but-scaffolded ledger; ~9 seed motifs.
- **Tools:** `tools/mod-data/`, existing kubejs, a new generator script.
- **Gate:** maintainer approves the ledger format + the seed motif list (Gate 0, once).

### Phase 1 — Per-mod understanding (parallel, folded into #160)
- **Do:** for every mod, one targeted web sweep → fill the dossier's judgment fields; cross-ground every
  content claim to a digest line or URL; tag current pillar-anchor count and 2nd-pillar candidates.
- **In:** digest + web. **Out:** ~356 `VERIFIED` dossiers; a worklist of 0/1-pillar mods.
- **Tools:** dossier generator (pre-fills facts), web search, the digest.
- **Gate (Gate 1):** maintainer spot-checks a **sample** + **all load-bearing hub mods** (the
  recipe-graph cut-vertices: `create`, `extradelight`, `touhou_little_maid`, …) for hallucination. Not
  all 356 — sampling + hubs is the high-leverage check.

### Phase 2 — Opportunity mapping (per chunk)
- **Do:** run the recipe-graph as a **compass** (island table + `--remove create`/`--remove minecraft`
  lenses) and mine dossier **thematic adjacencies**; produce a **candidate weave list** per pillar-seam
  chunk — one line each: (from, to/pillar, hook, motif, rough mechanism, confidence-guess). Mark islands
  that are *intentionally* vanilla (organic/mob per [`CONNECTIVITY.md`](CONNECTIVITY.md)) as **leave**.
- **In:** dossiers + recipe-graph + ledger. **Out:** an approved candidate list per chunk.
- **Gate (Gate 2 — the main taste gate):** maintainer reads the candidate list (cheap: one-liners, not
  code) and marks each **approve / reject / needs-discussion**. This kills lifeless ideas *before*
  authoring, where rejection is nearly free.

### Phase 3 — Authoring (per chunk, rides odd versions)
- **Do:** **jar-verify the recipe schema** for each target machine before writing (the magic-web
  discipline — `unzip -p` the jar; reuse the verified schemas in `MAGIC-WEB-HANDOFF.md` §4); author KubeJS
  weaves **composing approved motifs**; log each in the ledger; run static validation.
- **In:** approved candidate list + verified schemas + ledger. **Out:** KubeJS recipes + ledger entries +
  a draft PR with a `## Playtest` checklist.
- **Tools:** KubeJS (`event.recipes.create.*`, `event.custom`, `event.shaped/shapeless`, `event.remove`),
  `./tools/packwiz refresh`, `node --check`, `check.py`, recipe-graph regression.
- **Gate (Gate 0 + Gate 3):** a *new* motif → Gate 0; genuine ambiguity (theme clash, balance risk,
  "is this island intentional?") → Gate 3, surfaced as a **few sharp questions** (AskUserQuestion-style),
  not a bulk dump.

### Phase 4 — Validation (per chunk)
- **Do:** static checks (CI already gates `node --check`, packwiz freshness, TOML/JSON parse); connectivity
  **regression** (did we shatter anything / did the intended island rejoin — *not* "did % rise"); then the
  human-only gates: JEI renders the recipe on the right station; the `## Playtest` checklist on a fresh
  world; log scan for rejected `event.custom`. Tag each weave's `BALANCE` confidence from play.
- **In:** the draft PR. **Out:** a merge-ready (playtested) PR; ledger statuses advanced.
- **Gate (Gate 4):** the playtest sign-off — the PR stays **draft** until a human ticks the checklist
  (CLAUDE.md rule; the sandbox cannot launch the game).

### Phase 5 — Global cohesion review + recurring upkeep
- **Do:** at **0.15**, the comprehensive pillar-weave review — audit the full ledger, every pillar against
  every other, retire dead motifs, close contradictions, confirm "one or two webs." Ongoing: #161 mod
  updates regenerate touched dossiers and re-validate their weaves; #160 keeps conflict reputation fresh.
- **Gate:** maintainer-led review (the 0.15 thunderdome-adjacent pass).

---

## 6. Finding weave opportunities (compass, never target)

Two complementary signals, used to *find* candidates — never as an acceptance number:

1. **Structural (recipe-graph as compass).** The island table surfaces off-web clusters; the
   `--remove create` lens shows how a pillar coheres with the spine pulled out (the magic web reads ~99%
   in-web only because of vanilla glue — the no-vanilla / `--remove` lenses find the *real* islands). For
   each island, ask the [`CONNECTIVITY.md`](CONNECTIVITY.md) question: **intentional (cosmetic/organic —
   leave it) or a real gap (bridge it with ~one edge)?** One bridge collapses a whole island; do **not**
   gate every variant.
2. **Thematic (dossier adjacency).** Even on-web mods can be *thematically* unconnected. Mining dossier
   vibes/signatures surfaces rhymes the metric can't see — a mob that drops embers next to a mod that
   smelts with embers; wine next to a coin economy. These are the *taste* opportunities, and they're the
   reason the dossier layer exists.

**The worklist priority** is the ≥2-pillar rule: mods at **0 or 1** pillar (from the dossier anchor
count), `tech/gear` islands first (per [`CONNECTIVITY.md`](CONNECTIVITY.md) triage), then per-material
`block/deco` calls, with `organic/mob`/`magic`-residual/`phantom` **out of scope by design**.

> **Anti-Goodhart, stated as policy:** no phase, gate, or PR acceptance criterion is allowed to be a
> connectivity-% target. The metric appears only as (a) a compass that *lists candidates* and (b) a
> *regression* check that we didn't shatter the web. A weave is justified by its **motif + theme**, never
> by the points it adds.

---

## 7. Authoring without lifeless threads

This is where LLM limits bite hardest, so the mitigations are layered — and the last one is honest.

1. **Compose from motifs (the strongest mitigation).** A weave built from an established, *already-
   playtested* motif inherits its life. Fresh-invented edges are where lifelessness lives — and those are
   exactly what Gate 0 throttles.
2. **The established-pattern library.** The motif registry *is* the pattern library, seeded from the
   pack's own working weaves and the wider modpack-integration canon (ore-doubling-as-reward, essence
   currencies, native-machine gating, mob-drop sinks, catalyst-gated conversions, tiered gating,
   coin-from-scarcity). Authoring picks from it; the dossier's "how-packs-integrate" field feeds it.
3. **The theme-coherence rubric** (every weave passes, from [`RECIPES.md`](RECIPES.md)):
   - Ingredient **matches** output ("computers cost computer parts; a drone costs rotors + a motor").
   - Routes through the mod's **native machine**, not a crafting table, where the mod has one.
   - **Additive**, or a `remove` is always paired with a replacement (never break a chain).
   - **Balance-first:** never makes a power item *cheaper* than its original; depth scales with power
     (light gate for cheap gear; `sequenced_assembly` keystone for flagships — M-05/M-06).
   - Gives the mod a **real second pillar**, not a magic↔magic-only essence trade.
4. **The "lifeless thread" test** (explicit anti-patterns — any hit ⇒ reject or escalate):
   - A bridge that exists only to move the metric.
   - A conversion no player would ever actually do.
   - A reagent repurposed against its own lore/vibe (the dossier catches this).
   - Free round-trip arbitrage (A→B→A with no loss) — violates the motif's anti-arbitrage rule.
   - A forced edge onto a deliberately-vanilla island (organic/mob) — "why is jasper convertible to
     granite?" incoherence.
5. **The honest limit.** An LLM can verify 1–4 — *coherence*. It **cannot reliably judge fun**: whether a
   sensible weave is, in play, tedious, ignored, or delightful. **Fun is the human gate, and playtest is
   where lifelessness is truly exposed.** The plan does not pretend otherwise; it gets weaves to
   "sensible and grounded" (which LLMs are good at) and routes "fun" to Gates 2 and 4.

---

## 8. Pre- vs post-release: what the LLM can and can't do

The open question from [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) — does taste-weaving land pre- or
post-release — resolves into a **split**, not a side:

**Feasible pre-release with LLM tools (the bulk of the labor):**
- All ~356 dossiers and the opportunity map.
- The full **coherence** layer: motif-composed, jar-verified, theme-checked, balance-*safe* weaves that
  give 0/1-pillar mods a sensible second pillar and collapse the real islands. This gets the pack to "one
  or two cohesive webs" *structurally and thematically*.

**Still needs actual play (LLM cannot front-run):**
- **Balance tuning.** Source-costs, fluid amounts, drop rates, coin prices ship **first-pass** and are
  tuned in play — exactly as the magic web's ratios already are. Marked `BALANCE-PENDING`.
- **Fun confirmation.** Whether a coherent weave is *used* and *enjoyed* vs. ignored.
- **Emergent-economy behavior.** Whether trade actually emerges (the whole economy pillar is "emergent,
  optional flavor" — only play tells you if it took).

**Resolution:** do the coherence layer pre-release (it's where the LLM leverage is), ship every weave
**confidence-tagged** (`COHERENT` + `BALANCE-PENDING`), and let the cadence absorb the rest — even
stabilization versions tune the `BALANCE-PENDING` flags; post-1.0 content updates accrete the deep weave
through play (fits "no resets; freshness from content"). This makes pre-release weaving **as feasible as
it honestly can be**, while naming the line play has to finish.

---

## 9. Tooling to build (minimal, grounded in what exists)

Resist building a pipeline; the digest and recipe-graph already do the heavy lifting. The genuinely new
pieces are small:

1. **Dossier generator** — `scripts/build-dossiers.py` (sibling to `extract-mod-data.sh`). Scaffolds one
   `tools/mod-data/dossiers/<mod>.md` per mod, **pre-filling the factual fields from the digest**
   (signature items, native methods from `recipes/<jar>.txt`, tags, deps) and leaving the judgment fields
   (`one-line`, `vibe`, `2nd-pillar candidates`, `sources`) for the Phase-1 sweep. *Grounded by
   construction* — the skeleton is the jar's truth, so the sweep can't silently invent contents.
2. **The ledger format** — `docs/WEAVE-LEDGER.md` (human) + `tools/weave-ledger/weaves.json` (machine
   mirror). Plain text, schema in §4. No database.
3. **`tools/weave-ledger/check.py`** — the §4.4 cross-check (ledger ↔ kubejs ↔ recipe-graph ↔
   motif/reagent rules + dossier-coverage report). Reuses the kubejs-overlay parse already in
   `recipe_graph_lib.py`. Wire it into `pr-checks.yml` as a non-blocking advisory at first.
4. **(Optional) a dossier-coverage line in the recipe-graph report** — "N mods, M dossiered, K at <2
   pillars, J UNVERIFIED" — a worklist dashboard, no new tool.

**Digest extension:** rather than bloat `extract-mod-data.sh`, the dossier is a *new layer beside* the
digest that *consumes* it. The digest stays the verbatim-jar ground truth; the dossier is the interpreted
layer on top — clean separation, and #161 already regenerates the digest on updates, so the dossier
generator just re-runs after it.

---

## 10. Human taste gates (where the human decides; everything else is LLM-autonomous)

The principle: **LLM = labor + decision-surfacing; human = taste, batched and cheap.** Surface decisions
as digestible batches — a candidate list, a motif proposal, a handful of sharp questions — **never a
356-row dump.**

| Gate | When | What the human does | Cost | LLM proceeds autonomously when… |
|---|---|---|---|---|
| **G0 — Motif approval** | A *new* connective motif is proposed | Approve/reject the vocabulary item (it propagates globally) | Low, rare | …reusing an approved motif |
| **G1 — Dossier spot-check** | End of Phase 1 | Verify a sample + all hub mods aren't hallucinated | Low, once | …for the long tail of sampled-OK mods |
| **G2 — Candidate list** *(main taste gate)* | End of Phase 2, per chunk | Approve/reject one-line weave candidates | Low, batched | …authoring an already-approved candidate |
| **G3 — Ambiguity escalation** | During authoring | Answer a *few* sharp questions (theme/balance/"is this island intentional?") | Low, sporadic | …no ambiguity; rubric + motif resolve it |
| **G4 — Playtest sign-off** | Phase 4, per PR | Boot a fresh world, tick the `## Playtest` checklist | Medium, required | …never — the sandbox can't launch the game |

Everything between gates — dossier drafting, opportunity mining, schema verification, KubeJS authoring,
ledger upkeep, static validation, regression checks — is LLM-autonomous.

---

## 11. Validation (the pack must keep running)

Layered, cheapest first; the last two are human because the sandbox can't launch the game:

1. **Static / CI** — `node --check` (JS), `./tools/packwiz refresh` freshness, TOML/JSON parse, Go
   build/vet — all already gated by `pr-checks.yml`. **Green CI ≠ it loads** (CLAUDE.md): CI is parse-only.
2. **Ledger cross-check** (`check.py`) — no un-ledgered edges, motifs cited, reagents owned, schemas
   referenced. Advisory → required once stable.
3. **Connectivity regression** — re-run `recipe-graph.py` after each chunk; assert we **didn't shatter**
   the web and the *intended* island rejoined. **Compass, not target** — never an acceptance %.
4. **Schema verification (pre-authoring)** — jar-verify each recipe type before writing it (the GTMOGS
   `targets`-vs-`target` class of bug sails through CI). Reuse the `MAGIC-WEB-HANDOFF.md` §4 verified
   schemas.
5. **In-game JEI/EMI sanity** — the recipe renders on the correct station (recipe viewer is **JEI, not
   EMI** — EMI can't render Create processing). Human, in-game.
6. **Playtest** — the per-PR `## Playtest` checklist on a fresh world; PR stays draft until ticked. The
   load-bearing gate where lifelessness and imbalance actually surface.
7. **Recurring** — #161 (update→verify→changelog→assess) regenerates touched dossiers and re-validates
   their weaves; #160 (conflict sweep) keeps the surface honest. Both ride the cadence already.

---

## 12. How it rides the cadence

| Cadence slot | Weave-plan activity |
|---|---|
| **Now / Backlog-living** | Phase 0 (scaffold) + Phase 1 (dossiers, folded into #160). Cadence-independent — start immediately. |
| **Odd feature versions** (0.7, 0.9, 0.11, 0.13) | Phases 2–4 for that version's **pillar-seam** chunks. The end-of-version **thunderdome** (#157) curates the *set*; a mod that resists *any* coherent first pillar after honest effort is a **cut** candidate — weaving and curation are two sides of the ≥2-pillar test. |
| **Even stabilization versions** (0.8, 0.10, …) | Tune `BALANCE-PENDING` weaves from playtest; #160 conflict sweep; no new weaves (matches "even = stabilize, no new features"). |
| **0.15 — last call + weave review** | Phase 5: comprehensive pillar-weave review across the full ledger; retire dead motifs; close seams before the 1.0 freeze. |
| **Post-1.0** | Recurring odd/even rhythm accretes the deep weave through play — no resets. |

---

## 13. Risks & failure modes

| Risk | How it shows up | Mitigation |
|---|---|---|
| **Lifeless threads** | Technically-connected, not fun | Compose from playtested motifs (§7.1); theme rubric + lifeless-thread test (§7.3–4); G2 kills bad ideas pre-authoring; **playtest (G4) is the real exposure** — accepted limit, not solved by LLM. |
| **Metric-gaming (Goodhart)** | Bridge-for-the-%, arbitrary edges | Hard policy: connectivity % is **never** a target/acceptance criterion (§6); weaves justified by motif+theme; metric used only as compass + regression. |
| **Context fragmentation** | 356 local decisions → many clusters | The motif registry (shared vocabulary) + reagent-ownership (no double-spend) + read-ledger-first + `check.py` (no un-ledgered edges) + the 0.15 global review backstop (§2–3). |
| **Hallucinated mod facts** | Weave built on contents a mod doesn't have | **Digest-or-URL grounding rule** — every claim cites a jar line or source; `UNVERIFIED` blocks use; dossier generator pre-fills facts *from the jar*; G1 spot-checks hubs; schema verified against the jar before authoring. |
| **Motif sprawl** | So many motifs there's no vocabulary | New motifs gated (G0); 0.15 review retires unused ones. |
| **Over-weaving** | Forced edges onto deliberately-vanilla islands | `CONNECTIVITY.md` triage marks organic/mob/cosmetic islands **leave**; the lifeless-test flags incoherent forced bridges. |
| **Ledger rot** | Code and ledger drift apart | `check.py` asserts ledger ↔ kubejs ↔ recipe-graph agree; #161 regenerates dossiers on update. |

---

## 14. A worked micro-example (illustrative of *process* — not a committed weave)

To show the pipeline end-to-end on one mod. **This authors nothing**; it illustrates the shape.

1. **Dossier (Phase 1).** `vinery` → web sweep + digest: *"winemaking & Mediterranean cuisine."* Vibe:
   rustic/agrarian/artisanal. Signature: grapes, wines, cheese, fermentation barrel (each cross-referenced
   to a digest id). **Anchors: survival/food (1)** → on the 2nd-pillar worklist. Candidate: *economy —
   wine/cheese are classic luxury trade goods.* `status: VERIFIED`.
2. **Opportunity (Phase 2).** recipe-graph shows `vinery` as a 114-item food island (compass: real gap,
   not cosmetic). Dossier adjacency: *luxury food ↔ Numismatics economy.* Candidate line:
   `vinery wine → economy | hook: ancient trade good | motif: M-09 luxury→coin | mechanism: sale/price`.
   **→ G2:** maintainer reads the one-liner, approves (wine→trade is obviously sensible and fun — *not*
   metric-gaming).
3. **Author (Phase 3).** Verify the Numismatics price/sale schema against the jar; author a motif-M-09
   weave (additive); log `W-037`; cite M-09 + the `numismatics:*` reagent owner. No new motif ⇒ no G0.
4. **Validate (Phase 4).** `node --check` + packwiz refresh + `check.py` (ledger agrees) + recipe-graph
   regression (the wine island now joins via the economy seam, not shattered). Then human: JEI shows the
   sale; playtest confirms wine is worth selling. Tag `COHERENT, BALANCE-PENDING` → tune the price on the
   even stabilization pass.

Net: `vinery` went from 1 pillar (food) to 2 (food + economy) via an existing motif, one bridge, one cheap
human gate — and the ledger now records *why*, so the next chunk won't re-spend wine on something else.

---

## 15. Open questions for the maintainer (decide before/at Phase 0)

1. **Ledger home** — `docs/WEAVE-LEDGER.md` + `tools/weave-ledger/` as proposed, or fold into the
   existing `RECIPES.md` ledger sections? (Proposed: separate, because it spans all five pillars, not just
   recipes.)
2. **Dossier depth** — full card for all 356, or skip the deliberately-vanilla organic/mob long tail
   (dossier only the weave-worklist)? (Proposed: scaffold all from the digest cheaply; deep-sweep only the
   0/1-pillar worklist + hubs.)
3. **`check.py` enforcement** — advisory or required in `pr-checks.yml`, and from when? (Proposed:
   advisory through 0.13, required at 0.15.)
4. **Coordinator model** — a standing driver session that owns the ledger and sequences chunks, or the
   maintainer plays coordinator? (Affects how autonomous the per-chunk sessions can be.)
5. **Seed motif list** — is the §2.1 nine-motif seed the right starting vocabulary, or add/remove before
   locking it (Gate 0, once)?

---

_Refs: [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) (the question this answers), [`RELEASE-CADENCE.md`](RELEASE-CADENCE.md)
(the cadence it rides), [`DESIGN.md`](DESIGN.md) (five-system north star), [`CONNECTIVITY.md`](CONNECTIVITY.md) +
`tools/recipe-graph/` (the compass), [`RECIPES.md`](RECIPES.md) (the recipe rubric + pattern source),
[`MAGIC-WEB-HANDOFF.md`](MAGIC-WEB-HANDOFF.md) (the precedent workstream), `tools/mod-data/` (the digest the
dossier grounds against), #157 (curation rubric / thunderdome), #160 (per-mod web sweep — Phase 1 rides it),
#161 (mod-update pass — keeps dossiers fresh)._
