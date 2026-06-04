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

0. **First principle: methods are resources (§2.0).** A mod is a bag of items **and *methods*** — custom
   recipe types, machines, rituals, infusions, processing chains. The strongest weave is "**run material X
   *through* mod Y's method**" (a shard refined in Ars's Imbuement Chamber, a drop transmuted in
   Occultism's Spirit Fire, a crop pressed/fermented), not a flat crafting-table ingredient swap. Treating
   every mod's mechanics as a pack-wide **methods palette** to pull from is what makes it a *true* web —
   and it's exactly the edge the connectivity tool already rewards ("made in that machine" *is* a link).
1. **A shared design vocabulary (a *motif registry*) + a persistent *weave ledger*.** Weaves are
   *composed from a small set of approved, recurring connective motifs* — most of them **method-routings**
   (e.g. "Ars source is the universal magic currency," "Create crushing recycles deco," "transmute a drop
   through a ritual," "luxury goods mint into coin"), not invented per-mod. This keeps 356 locally-authored
   decisions reading as **one or two webs** instead of 356 ad-hoc edges, and prevents context-window
   chunking from fragmenting global cohesion.
2. **A per-mod understanding layer (the *dossier*)** that teaches the weaver what each mod is, its vibe,
   its signature contents, **and its methods** (what it can *do*) — built by a per-mod web sweep (folded
   into #160) and **grounded against the jar digest** so facts can't be hallucinated.
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
[`RECIPES.md`](RECIPES.md) and the magic-web precedent ([`archive/MAGIC-WEB-HANDOFF.md`](archive/MAGIC-WEB-HANDOFF.md)):

> A weave is *coherent* if a player would say **"of course you'd connect these"** — the input matches the
> output, it **routes through the right *method*** (the mod's own machine / ritual / infusion / processing
> type, not a bare crafting table), it's additive (or a removal is replaced), it doesn't make a power item
> cheaper, and it gives a mod a **second pillar** it didn't have. A weave is *done* only when it's also
> been **seen in-game and playtested** — that last step is human.

---

## 2. The core idea: motifs + a persistent ledger (how global cohesion survives chunking)

This is the load-bearing concept; everything else is plumbing around it.

A web of 356 mods cannot be held in one context window, so the work **must** be chunked — and naive
chunking is exactly what produces "many clusters": each chunk invents its own local connections, reuses
the same reagent three incompatible ways, and the global picture fragments. The fix is to make weaves
**compositions of a shared, small, named vocabulary** that every chunk reads before it writes.

### 2.0 First principle: methods are resources — weave *through* mechanics, not just ingredients

The single most important reframe in this plan, and the thing that makes the result a **true web** rather
than an ingredient-bridge web:

> **A mod is not just a bag of items — it is a bag of *items **and methods***.** Every mod that matters
> adds *mechanics*: custom recipe types, machines, multiblocks, rituals, infusions, transmutations,
> fermentation, spell-casting, processing chains. **Those methods are first-class resources to pull
> from.** The strongest weave is rarely "item A is an ingredient in item B's crafting recipe" — it's
> "**a material from mod X is processed *through mod Y's method***": a Galosphere shard refined in Ars's
> **Imbuement Chamber**; a mob drop transmuted in Occultism's **Spirit Fire**; an ingot pressed on
> Create's **Press**; a crop run through a **fermentation barrel**; a reagent infused on a
> **Forbidden Arcanus altar**.

Why this is *the* lever, not a nicety:

- **It's what the connectivity tool actually rewards.** `recipe_graph_lib.py` makes every modded
  recipe-*type* (`create:mixing`, `occultism:ritual`, `ars_nouveau:enchanting_apparatus`,
  `farmersdelight:cooking`, …) a graph node that links **everything it produces**. "Made in that machine"
  *is* connectivity — it's literally what connected `createfood` to `create` (its food is made *in*
  Create machines, not *from* Create items). Routing a material through a foreign method is therefore the
  highest-yield, most *meaningful* edge you can author — and the one most likely to feel intentional.
- **It produces depth, not just a bridge.** A crafting-table ingredient swap is one flat edge. Routing
  through a method engages the *whole mechanic* — the player builds and runs the machine, which is the fun.
  This is the difference between #62's deep weave (parts **and methods**, the `60-mffs.js`
  `sequenced_assembly` gold standard) and a shallow ingredient tax.
- **The digest already hands us the inventory for free.** The `recipes/<jar>.txt` second column is a
  ready-made, jar-grounded list of every custom recipe type a mod registers (see §4.1/§9). Methods that
  *aren't* recipe types — a passive aura, an on-kill effect, an entity interaction, a multiblock behavior
  — are exactly what the Phase-1 web sweep is for. Both go into the dossier as a first-class **methods**
  inventory, and the union across all mods is the pack-wide **methods palette** the weaver shops from.

So the motifs below, the dossier (§4.1), opportunity-finding (§6) and authoring (§7) are all built around
**methods as the connective tissue** — items flow *between* mods *through* each other's mechanics.

### 2.1 The motif registry — the shared vocabulary

A **motif** is a reusable *kind of connection* with a theme and a home pillar-pair. **Most motifs are a
*method-routing*** — "run material X through mod Y's mechanic" — so the table names the **method** each one
rides (per the §2.0 first principle). The pack already has several, authored ad hoc; this plan makes them
canonical and additive-only-by-gate:

| ID | Motif | Method it rides | Pillars | Seeded from |
|---|---|---|---|---|
| M-01 | **Arcane currency** — Ars `source_gem` is the universal magic currency; foreign essences mint into/out of it | `ars_nouveau:imbuement` / `enchanting_apparatus` | magic↔magic | `33-magic-web-spine.js` |
| M-02 | **Mob-drop reagent sink** — an isolated mob/boss drop is given a use as a magic/economy input | the consuming mod's native method | organic↔magic/economy | `35-magic-web-mobs.js` |
| M-03 | **Create ore-doubling** — ore → crushed (+byproduct); a *reward*, vanilla smelt path stays | `create:crushing` | any↔Create | `RECIPES.md` |
| M-04 | **Create recycles deco** — metal/stone deco crushes back to raw/gravel + an XP nugget; lossy | `create:crushing` | block/deco↔Create | `35-web-bridges.js` |
| M-05 | **Native-method gating** — a mod's flagship item is built *in its own machine*, gated on Create parts as inputs | the mod's own machine type | any↔Create | `RECIPES.md`, `60-mffs.js` |
| M-06 | **Sequenced-assembly keystone** — endgame items are multi-stage chains through a `derpack:incomplete_*` part | `create:sequenced_assembly` | Create (depth) | `60-mffs.js`, `startup_scripts/01-intermediate-parts.js` |
| M-07 | **Attunement catalyst** — a worldgen consumable (Galosphere allurite/lumiere shards) gates a conversion so it isn't free arbitrage | rides the host method as a catalyst | magic + survival/worldgen | `33`/`80`/`97` |
| M-08 | **Coin from processed scarcity** — scarce regional metal → Create-processed → minted into coin | `create:*` → `numismatics` mint | Create↔economy | #136 (planned) |
| M-09 | **Luxury good → coin** — a high-effort consumable (wine, cheese, processed crop) is a sellable trade good | `numismatics` sell/price | survival/food↔economy | proposed |
| M-10 | **Arcane infusion pull** — a foreign material is refined/attuned into a magic reagent **through an arcane infusion method** (Ars imbuement/apparatus, Forbidden Arcanus altar) — the textbook "method as the edge" | `ars_nouveau:imbuement` · `forbidden_arcanus:*infusion*` | any↔magic | generalizes M-01 |
| M-11 | **Ritual / transmutation sink** — a drop or material is transmuted into an essence **through a ritual/spirit method** | `occultism:spirit_fire` / `ritual` | organic↔magic | `34`/`35-magic-web-*` |
| M-12 | **Processing-chain pull** — a raw crop/material is run **through another mod's processing method** (fermentation, cooking, milling/mixing) into a finished/sellable good | `farmersdelight:cooking` · `create:milling`/`mixing` · fermentation | survival↔Create/economy | generalizes M-03/M-09 |

> The motif table is **the methods palette in motif form** — adding a motif usually means *adopting a new
> method as a connective resource*. New methods/motifs enter through Gate 0 (§10).

**Rules that make motifs the anti-fragmentation device:**

- **Compose, don't invent.** An authored weave must cite the motif(s) it instantiates. "Doesn't fit any
  motif" is a signal to *stop and escalate*, not to invent a one-off edge.
- **New motifs are a human gate (Gate 0).** Because a motif propagates globally, registering a *new* one
  needs maintainer sign-off. Reusing an approved motif does not. This caps "motif sprawl" (too many
  motifs = no vocabulary).
- **A motif carries its anti-arbitrage rule.** M-01/M-07 round-trips should lose value (but a 1:1 swap is
  legitimate for genuinely-equivalent materials — see §7); M-04 is lossy by design. The rule travels with
  the motif so every chunk applies it the same way.
- **Actively *grow* the vocabulary — with evidence.** The 12 seeds are a floor, not a ceiling; the registry
  (and the reagent table) **should expand**. New motifs/reagents are best drawn from **how mods and curated
  packs integrate things *right now*** — not only our own past weaves — each carrying a one-line precedent
  ("seen in `<pack/mod>`"). **Zero-history, blue-sky proposals are welcome too**, flagged as such for the
  human Gate-0 review. They must **make sense, stay on-theme, and be balanced**. *Guardrail:* the value is a
  **shared, legible** vocabulary, so each motif must earn its place — resist sprawl, and the 0.15 review
  retires any motif nobody composes from (a registry that's never cited is just noise). A dedicated
  research-backed **vocabulary-expansion pass** (mine current mods/packs for integration patterns) is a
  Phase-0.5 task, gated like any bulk pass.

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
tools/mod-data/dossiers/<mod>.md      # one understanding card per mod, incl. its METHODS (Phase 1 output)
tools/weave-ledger/methods-palette.md # pack-wide inventory of every mod's methods/recipe-types (auto-gen)
docs/WEAVE-LEDGER.md                  # motif registry + reagent-ownership + weave log (human-readable)
tools/weave-ledger/weaves.json        # machine-readable mirror of the weave log (for cross-check)
tools/weave-ledger/check.py           # ledger ↔ kubejs ↔ recipe-graph consistency checker
```

The **methods palette** is the union of every dossier's `methods` block — the catalogue of *connective
mechanics* the weaver shops from (every `create:*`, `ars_nouveau:*`, `occultism:*`, `farmersdelight:*`, …
recipe type, plus the non-recipe mechanics the sweep found). It's auto-generated from the digest's
recipe-type column (§9), so it's jar-grounded and free.

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
methods (FIRST-CLASS — what this mod can DO, the resources others pull through):
  recipe-types (auto, from recipes/<jar>.txt 2nd column):  vinery:fermentation_barrel, vinery:...
  non-recipe mechanics (from sweep):  grape-vine growth; press→must→ferment chain; aging
  consumes / outputs: takes fruit → outputs wine/must  ← what foreign material it could accept/feed
anchors:    survival/food (1)           ← current pillar count
2nd-pillar candidates (prefer method-routings — see §6):
  - economy:  wine/cheese as sellable luxury goods (M-09, via numismatics sell)   [STRONG, thematic]
  - Create:   run grapes through create:pressing → must, OR feed Create farms into the barrel (M-12) [MED]
  - magic:    none obvious — leave (don't force)
how-packs-integrate: <url> — commonly a food/trade mod; pairs with Farmer's Delight.
sources:    [modrinth url] [wiki url] [digest]
status:     VERIFIED                    ← or UNVERIFIED (blocks use as a weave basis)
```

The `methods` block is the heart of the card. Its **recipe-types are auto-filled from the digest** (the
`recipes/<jar>.txt` 2nd column is exactly this list — jar-grounded, no hallucination); the **non-recipe
mechanics** (auras, on-kill effects, growth/processing behaviors, multiblock actions) are what the web
sweep adds. `consumes / outputs` is the join key for opportunity-finding: it says what foreign material a
mod's method could *accept* or *feed*.

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
as Backlog/living, like #160/#161); **Phase 2 → 2.5 is the planning instance's terminal run** — it maps
opportunities and emits milestone-attached issues, then the instance is **retired** and **Phase 3
(authoring) onward is milestone work done elsewhere**, riding the odd feature versions; 5 is the 0.15
review + recurring upkeep.

### Phase 0 — Scaffolding & vocabulary (one-time)
- **Do:** build the dossier generator (§9.1); define `WEAVE-LEDGER.md` + `weaves.json` schema; **seed the
  motif registry and reagent-ownership table from the *existing* weaves** (magic-web, `35-web-bridges`,
  `60-mffs`, numismatics) so we start from the vocabulary the pack already speaks.
- **In:** the repo's current kubejs + docs. **Out:** empty-but-scaffolded ledger; 12 seed motifs.
- **Tools:** `tools/mod-data/`, existing kubejs, a new generator script.
- **Gate:** maintainer approves the ledger format + the seed motif list (Gate 0, once).

### Phase 0.5 — Vocabulary expansion (research-backed, gated)
- **Do:** mine **how mods and curated packs integrate things right now** for additional motifs/reagents
  beyond the seed 12 — each with a precedent note; plus blue-sky zero-history proposals, flagged. Keep the
  registry legible (resist sprawl).
- **In:** the seed registry + web/pack research. **Out:** a *proposed* motif/reagent expansion for review.
- **Gate (Gate 0):** maintainer approves each new motif/reagent before it can be used to author. Runs as a
  bounded fan-out (cheaper models, approval-first — see the run policy in `DECISIONS.md`).

### Phase 1 — Per-mod understanding (parallel, folded into #160)
- **Do:** for every mod, one targeted web sweep → fill the dossier's judgment fields; **inventory its
  methods/mechanics** (recipe-types auto-pulled from the digest; non-recipe mechanics from the sweep) and
  what they consume/output; cross-ground every content claim to a digest line or URL; tag current
  pillar-anchor count and 2nd-pillar candidates.
- **In:** digest + web. **Out:** ~356 `VERIFIED` dossiers; the **pack-wide methods palette**; a worklist
  of 0/1-pillar mods.
- **Tools:** dossier generator (pre-fills facts **and the recipe-type method list**), web search, the digest.
- **Gate (Gate 1):** maintainer spot-checks a **sample** + **all load-bearing hub mods** (the
  recipe-graph cut-vertices: `create`, `extradelight`, `touhou_little_maid`, …) for hallucination. Not
  all 356 — sampling + hubs is the high-leverage check.

### Phase 2 — Opportunity mapping (per chunk)
- **Do (per chunk):**
  1. **Issue sweep (step 0).** An agent searches the repo's GitHub issues, **filters** those relevant to
     the chunk's pillar/mods (e.g. #136 economy, #146 magic-gating, #119 dropped recipes, #103 dup parts,
     #171/#172 re-author-through-Create), and **passes them through** as inputs — so existing design intent
     and known problems feed the weave list instead of being rediscovered.
  2. **Find candidates.** recipe-graph as a **compass** (island table + `--remove create`/`--remove
     minecraft` lenses) plus dossier **thematic adjacencies and method-pull matches** (a mod's loose
     material ↔ another mod's method that could consume it — §6). Mark intentionally-vanilla islands
     (organic/mob) as **leave**.
  3. **Power-read each candidate.** Gauge the item's tier in its *own* mod (loot rarity, recipe depth, wiki
     tier — §7) so the proposed integration depth is **sized to the item**: deep for endgame, light for
     everyday.
  4. **Theme-fit.** Apply the tone-tags + the adversarial red-team pass (§7 point 5); drop or flag clashes.
  5. **Quality audit (the ≥2-pillar track).** For the chunk's already-anchored mods, review whether their
     *existing* connections are on-theme and balanced (not merely present); list rework items.
- **In:** dossiers + recipe-graph + ledger + filtered issues. **Out:** a **candidate weave list** per
  chunk — one line each: (from-material, →through-**method**, to-pillar, hook, motif, **power-tier**,
  **tone-fit**, confidence) — **plus** a short **rework list** for existing weaves that fail the audit.
- **Record EVERYTHING — including the rejects.** Every proposed integration is logged in the ledger's
  `considered` set, **including the ones the red-team or theme-fit shot down**, with the kill reason.
  Nothing is silently dropped: a human reviews the full considered-set (accepted *and* rejected) **before
  Phase 3**, so a good idea killed for a fixable reason isn't lost and a pattern in the rejects is visible.
- **Gate (Gate 2 — the main taste gate):** maintainer reads the candidate list (cheap: one-liners, not
  code) and marks each **approve / reject / needs-discussion**. This kills lifeless ideas *before*
  authoring, where rejection is nearly free.

### Phase 2.5 — Issue authoring & handoff (the instance's last step)
- **Do:** turn each **accepted** integration into a **GitHub issue attached to the right milestone** (its
  pillar's odd version per [`RELEASE-CADENCE.md`](RELEASE-CADENCE.md): Create→0.7, economy→0.9,
  survival/magic→0.11, aeronautics→0.13; curation/hygiene→0.6 or Backlog), with the candidate's
  method / motif / power-tier / sources inlined so the issue is self-contained. **Fold a candidate into an
  existing issue rather than duplicating it** (the repo already has many milestone-attached pillar issues —
  e.g. #137 bounties, #143 aeronautics fuel, #92 boss-drop gating, #91 survival/seasons). Then **commit all
  context** (ledger, dossiers, considered-set).
- **Why it exists:** **authoring (Phase 3) and everything after is milestone work, done elsewhere** — this
  planning instance is **shut down after Phase 2.5**. Phase 2.5 *is* the handoff: the durable artifacts are
  the milestone-attached issues + the committed ledger, not a running session.
- **In:** approved candidate list + considered-set. **Out:** one milestone-tagged issue per accepted
  integration (or a comment on the issue it belongs to); committed context.
- **Gate:** maintainer confirms the issue set before the instance is retired.

### Phase 3 — Authoring (per chunk, rides odd versions)
- **Do:** **jar-verify the *method* schema** for each target mechanic before writing (the magic-web
  discipline — `unzip -p` the jar; reuse the verified schemas in `archive/MAGIC-WEB-HANDOFF.md` §4); author KubeJS
  weaves **composing approved motifs**, **defaulting to the mod's native method/recipe-type** but using a
  crafting-table recipe where that's the genuinely coherent form (not a lesser fallback — §7); log each in
  the ledger; run static validation.
- **In:** approved candidate list + verified schemas + ledger. **Out:** KubeJS recipes + ledger entries +
  a draft PR with a `## Playtest` checklist.
- **Tools:** KubeJS — **method-first**: `event.recipes.<mod>.<method>(...)` (e.g. `.create.mixing`,
  `.create.crushing`) and `event.custom({ type: '<mod>:<method>', … })` for any mod's custom recipe type
  (Ars imbuement, Occultism spirit_fire, etc.); `event.shaped/shapeless` where a table recipe is the
  coherent form (not a lesser fallback); `event.remove`; `./tools/packwiz refresh`, `node --check`,
  `check.py`, recipe-graph regression.
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

Three complementary signals, used to *find* candidates — never as an acceptance number:

1. **Method-pull (the highest-yield — see §2.0).** Cross the dossiers' `consumes/outputs` against the
   **methods palette**: a mod with a loose material (a drop, crop, gem, ingot with nowhere to go) and
   another mod whose **method could consume or produce it** is a prime candidate — *route the material
   through that method*. This is the edge the connectivity tool rewards most (methods are nodes that link
   everything they touch) and the one that feels most intentional in play (the player runs a real
   mechanic). Ask first: **"whose machine/ritual/infusion *wants* this material?"** before "what crafts
   into what."
2. **Structural (recipe-graph as compass).** The island table surfaces off-web clusters; the
   `--remove create` lens shows how a pillar coheres with the spine pulled out (the magic web reads ~99%
   in-web only because of vanilla glue — the no-vanilla / `--remove` lenses find the *real* islands). For
   each island, ask the [`CONNECTIVITY.md`](CONNECTIVITY.md) question: **intentional (cosmetic/organic —
   leave it) or a real gap (bridge it with ~one edge)?** The cheapest real bridge is usually a method-pull
   (#1). One bridge collapses a whole island; do **not** gate every variant.
3. **Thematic (dossier adjacency).** Even on-web mods can be *thematically* unconnected. Mining dossier
   vibes/signatures surfaces rhymes the metric can't see — a mob that drops embers next to a mod that
   smelts with embers; wine next to a coin economy. These are the *taste* opportunities, and they're the
   reason the dossier layer exists. The best of these usually resolve *into* a method-pull (#1).

**The worklist has two tracks, not one:**
- **(a) Coverage** — mods at **0 or 1** pillar need a *new* weave: `tech/gear` islands first (per
  [`CONNECTIVITY.md`](CONNECTIVITY.md) triage), then per-material `block/deco`, with
  `organic/mob`/`magic`-residual/`phantom` out of scope by design.
- **(b) Quality** — **a mod at ≥2 pillars is *not* automatically done.** Its existing connections still
  have to be on-theme, tasteful, and balanced; a weave that exists but is arbitrary, lore-clashing, or
  mis-costed is a defect even when the pillar tally looks fine. So Phase 2 also **audits the connections of
  already-anchored mods** (sampled, plus the deep-woven hubs from the cut-vertex list), not just fills
  gaps. Pillar count is necessary, never sufficient — the end goal is **every connection feels
  intentional**, not a green number.

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
2. **The established-pattern library.** The motif registry *is* the pattern library (which is the methods
   palette in motif form — §2.1), seeded from the pack's own working weaves and the wider
   modpack-integration canon (ore-doubling-as-reward, essence currencies, **arcane infusion**,
   **ritual transmutation**, native-method gating, mob-drop sinks, **processing-chain pulls**,
   catalyst-gated conversions, tiered gating, coin-from-scarcity). Authoring picks from it; the dossier's
   "how-packs-integrate" field feeds it.
3. **The theme-coherence rubric** (every weave passes, from [`RECIPES.md`](RECIPES.md)):
   - **Reach for a *method* first.** If any installed mod has a machine/ritual/infusion/processing type
     that *fits*, author into it (`event.recipes.<mod>.<method>` / `event.custom`) — routing through a
     mechanic is the higher-yield, more intentional weave. But the bare crafting table is **not a lesser
     fallback**; it's simply not the *default*. Where a shaped/shapeless recipe is the coherent, in-
     character way to make the thing, it **is** the right answer. Default to the method; use the table when
     it makes sense.
   - Input **matches** output ("computers cost computer parts; a drone costs rotors + a motor").
   - **Additive**, or a `remove` is always paired with a replacement (never break a chain).
   - **Balance-first:** never makes a power item *cheaper* than its original; depth scales with power
     (light gate for cheap gear; `sequenced_assembly` keystone for flagships — M-05/M-06).
   - **Scale the integration to the item's power (read its place in its own mod first).** Before weaving,
     gauge where the item sits in *its mod's* balance — everyday (cheap, early, common) vs. powerful/
     endgame (rare or boss drop, deep recipe, high stats). Signals: loot-table rarity
     (`tools/mod-data/loot/`), recipe depth/cost, the wiki's stated tier, attribute/enchant values.
     **Powerful endgame items are the key targets for *large, deep* integrations** (multi-step native-
     method chains, M-05/M-06); **everyday items get *small* integrations** (one coherent gate). Both
     matter equally — the end goal is that *everything* feels intentional, sized to what it is, not that
     only the flagships get attention.
   - **Never the inverse: no complex recipe for a basic component.** The flip side of power-scaling — an
     everyday/basic item (a common ingredient, a starter part) must **never** be gated behind a multi-step
     or infusion/ritual chain. Over-gating basics is as much a defect as under-gating flagships; keep the
     simple things simple (this is why M-10 arcane-infusion is *not* for basic components).
   - Gives the mod a **real second pillar**, not a magic↔magic-only essence trade.
4. **The "lifeless thread" test** (explicit anti-patterns — any hit ⇒ reject or escalate):
   - A bridge that exists only to move the metric.
   - A conversion no player would ever actually do.
   - A reagent repurposed against its own lore/vibe, **or a pairing whose two mods' tones clash** even
     though each is fine alone — the per-mod dossier catches single-mod misuse but **not** bad *pairwise*
     fit (see the theme-fit check, point 6).
   - Free round-trip arbitrage (A→B→A with no loss) **as a rule** — it usually signals a non-weave. But
     it's **legitimate for equivalent-material unification**: the three limestones already swap 1:1 in
     `35-web-bridges.js`, and that's the cleanest current handling. Use it sparingly, only where the items
     genuinely *are* interchangeable; prefer a better mechanic where one exists — a 1:1 swap is an honest
     placeholder, not a failure.
   - A forced edge onto a deliberately-vanilla island (organic/mob) — "why is jasper convertible to
     granite?" incoherence.
5. **Pairwise theme-fit check (the dossier is *not* enough).** A per-mod dossier captures each mod's vibe
   in isolation, but a weave *joins two mods*, and a pairing can clash even when both vibes are individually
   fine (a whimsical meme drop feeding a solemn arcane ritual; a sci-fi circuit in a druidic altar). Two
   complementary catches, neither relying on the dossier alone:
   - **Tone tags + a clash check.** Tag every mod with a small **tone/setting taxonomy** (e.g.
     `medieval-fantasy`, `arcane`, `industrial`, `sci-fi`, `eldritch`, `naturalist`, `whimsical/meme`,
     `historical`) as a structured dossier field. A candidate weave that crosses *incompatible* tones is
     auto-flagged for human review — making "does this fit?" systematic instead of per-reviewer vibes.
   - **Adversarial red-team pass (independent reviewer).** Before a candidate is authored, a *different*
     agent than the one that proposed it argues the case **against** the pairing ("why would a player find
     this jarring or nonsensical?"). The proposer must answer the objection or drop the weave. Independent
     judgment catches forced/clashing pairings the proposer rationalized; it's the cross-mod analogue of
     the lifeless-thread test, and it feeds Gate 2.
6. **The honest limit.** An LLM can verify 1–5 — *coherence*. It **cannot reliably judge fun**: whether a
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
   `tools/mod-data/dossiers/<mod>.md` per mod, **pre-filling the factual fields from the digest** — and,
   crucially, **the `methods` block: the distinct set of recipe-*types* a mod registers, read straight from
   the `recipes/<jar>.txt` 2nd column** (e.g. `ars_nouveau:imbuement`, `occultism:spirit_fire`,
   `create:mixing`) — plus signature items, tags, deps. It leaves the judgment fields (`one-line`, `vibe`,
   non-recipe mechanics, `2nd-pillar candidates`, `sources`) for the Phase-1 sweep. *Grounded by
   construction* — the skeleton is the jar's truth, so the sweep can't silently invent contents or methods.
   The same pass emits `tools/weave-ledger/methods-palette.md` (the union, grouped by pillar) — the
   shopping list of connective mechanics. (Re-runs after `extract-mod-data.sh` on every #161 update.)
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
   `targets`-vs-`target` class of bug sails through CI). Reuse the `archive/MAGIC-WEB-HANDOFF.md` §4 verified
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
| **Ingredient tunnel-vision** | Only flat crafting-table ingredient swaps; the rich method/mechanic web (infusions, rituals, processing) is ignored → a shallow pack | The §2.0 first principle (methods are resources); `methods` is a first-class dossier block + a pack-wide palette; method-pull is the lead opportunity signal (§6.1) and the lead authoring check (§7.3); recipe-types auto-extracted so the inventory is never missed. |
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

**A second, method-centric case (the §2.0 lever in one line).** Suppose a mob mod drops a thematically
"spectral" item that's a dead-end island (drops → nothing). The opportunity is found by **method-pull**
(§6.1), not ingredient adjacency: the methods palette shows Occultism's `spirit_fire` and Ars's
`imbuement` both *want* spirit-flavored inputs. Candidate line:
`<mob>:spectral_drop → through occultism:spirit_fire → magic | motif: M-11 ritual/transmutation | →essence`.
The weave isn't a craft — it's *running the drop through an existing ritual method* (`event.custom({ type:
'occultism:spirit_fire', … })`), which gives the mob mod a magic pillar **and** engages a whole mechanic
the player builds. Same shape would route a glowing gem through `ars_nouveau:imbuement` (M-10) or a crop
through a fermentation/`create:milling` chain (M-12). *The method is the weave* — that's the true web.

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
[`archive/MAGIC-WEB-HANDOFF.md`](archive/MAGIC-WEB-HANDOFF.md) (the precedent workstream), `tools/mod-data/` (the digest the
dossier grounds against), #157 (curation rubric / thunderdome), #160 (per-mod web sweep — Phase 1 rides it),
#161 (mod-update pass — keeps dossiers fresh)._
