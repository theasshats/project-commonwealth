# Taste-Weaving Plan — building the cohesive web with LLM tools

> **Status: living execution plan — substantially under way.** This is the plan commissioned by
> [`docs/WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md): *how* to accomplish **meaningful (taste) weaving**
> primarily with LLM tools, at minimal human effort, without fragmenting the global web. It is a strategy
> document — **nothing here authors a single recipe.** When adopted it runs as the recurring weave pass
> that rides the odd/even cadence ([`ROADMAP.md`](ROADMAP.md), former rationale archived at
> [`archive/RELEASE-CADENCE.md`](archive/RELEASE-CADENCE.md)).
>
> **Two reconciliations folded in (v0.6.0):**
> 1. **The model is the loop, not five flat systems.** The north star is now the *Eco*-style **causal
>    loop — scarcity → pressure → production → economy → back** — ratified in
>    [`docs/SYSTEMS.md`](SYSTEMS.md) (which *replaces* the retired "five systems / five pillars" framing).
>    A mod anchors somewhere **on the loop**; "**≥2 anchors**" stays as the concrete operational test, but
>    its *purpose* is now "put the mod on the loop," not "raise a connectivity count." **Don't count
>    systems; read the loop.**
> 2. **Live state lives in two siblings, not here.** The **motif registry** (the running vocabulary) is
>    [`docs/WEAVE-LEDGER.md`](WEAVE-LEDGER.md); every maintainer gate-call is logged in
>    [`DECISIONS.md`](../DECISIONS.md). This plan carries a **synced snapshot** of the motif table (§2.1)
>    for self-containment, but **the ledger is authoritative** — if they disagree, the ledger wins.
>
> **Where execution stands (read the status banners in §5):** Phase 0 (scaffolding) and Phase 1 (per-mod
> dossiers) are **done** — ~351 `VERIFIED` dossiers, Gate 1 passed. Phase 2 (opportunity mapping) has run
> as **16 convergence passes → ~1991 candidates** (after excluding cut mods) and is at/near saturation; **Gate 2 (the maintainer
> approve/reject) is the immediate next step**, then Phase 2.5 files milestone issues. Phase 3 (authoring)
> onward is milestone work on the odd feature versions. The motif vocabulary grew from the 12 seeds to
> **M-01…M-24** (all Gate-0 accepted bar M-21).

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
   through a ritual," "luxury goods mint into coin"), not invented per-mod. This keeps ~350 locally-authored
   decisions reading as **one driving loop** instead of ~350 ad-hoc edges, and prevents context-window
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

From [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md), [`DESIGN.md`](DESIGN.md) and the structural model in
[`SYSTEMS.md`](SYSTEMS.md):

- **The goal:** the pack reads as **one driving causal loop** — *scarcity → pressure → production →
  economy → back* — not many isolated clusters. The systems a mod can anchor to are **Create** and
  **magic** (production), **survival** (pressure), and the **economy** (distribution & trade, including
  its **logistics/aeronautics** arm), on a **scarcity** foundation, with **MineColonies + boss drops** the
  cross-cutting production routes. Every mod should anchor **≥2** places on the loop — one is the floor,
  two is the target. What makes the pack **AAA rather than kitchen-sink** is the *weave*: the loop
  actually turning.
- **The operational test (unchanged in mechanics, reframed in purpose):** "anchors to **≥2 systems**,"
  measured with `tools/recipe-graph/`. The loop just makes the *natural pair* obvious — a healthy mod is
  usually *something you produce that pressure demands and the economy moves* ([`SYSTEMS.md`](SYSTEMS.md) §6).
  **Don't count systems; read the loop.**
- **Two depths:** *structural* (tags unified, recipes valid, nothing orphaned — **largely done**) and
  *meaningful/taste* (connections that are actually good and themed — **the open work**).
- **Obstacle 1 — no play-knowledge.** Authoring deep weaves for mods nobody on the team has played
  yields *lifeless threads*: technically connected, not fun. The digest (`tools/mod-data/`) gives IDs,
  tags, recipes, loot — **not "what this mod is for" or "how it plays."**
- **Obstacle 2 — the metric can't supply taste.** Connectivity % (`tools/recipe-graph/`) finds isolated
  clusters but can't tell a meaningful weave from a bridge-for-the-metric. It's a **compass, not a gate**
  (Goodhart — targeting it invites gaming, already visible in some recipes).

**Definition of "done" for a weave** (the bar every authored connection clears), inherited from
[`RECIPES.md`](RECIPES.md), the settled cost model in [`SYSTEMS.md`](SYSTEMS.md) §3, and the magic-web
precedent ([`archive/MAGIC-WEB-HANDOFF.md`](archive/MAGIC-WEB-HANDOFF.md)):

> A weave is *coherent* if a player would say **"of course you'd connect these"** — the input matches the
> output, it **routes through the right *method*** (the mod's own machine / ritual / infusion / processing
> type, not a bare crafting table), it's additive (or a removal is replaced), it respects the cost model
> (≈3× basics, GregTech-style **step-depth** for tiers — never makes a power item cheaper), and it gives a
> mod a **second place on the loop** it didn't have. A weave is *done* only when it's also been **seen
> in-game and playtested** — that last step is human.

---

## 2. The core idea: methods + a persistent ledger (how global cohesion survives chunking)

This is the load-bearing concept; everything else is plumbing around it.

A web of ~350 mods cannot be held in one context window, so the work **must** be chunked — and naive
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

A **motif** is a reusable *kind of connection* with a theme and a home loop-seam. **Most motifs are a
*method-routing*** — "run material X through mod Y's mechanic." The table below is a **synced snapshot of
[`docs/WEAVE-LEDGER.md`](WEAVE-LEDGER.md) — the authoritative live registry**; maintain it there and treat
any divergence as the ledger being right. The pillar/seam column is loop-aware (production = Create/magic,
pressure = survival, economy = distribution incl. logistics).

| ID | Motif | Method it rides | Seam | Status |
|---|---|---|---|---|
| M-01 | **Arcane currency** — Ars `source_gem` is the universal magic currency; foreign essences mint into/out of it | `ars_nouveau:imbuement` · `enchanting_apparatus` | magic↔magic | established |
| M-02 | **Mob-drop reagent sink** — an isolated mob/boss drop is given a use as a magic/economy input | the consuming mod's native method | pressure→production/economy | established |
| M-03 | **Create ore-doubling** — ore → crushed (+byproduct); a *reward*, vanilla smelt path stays | `create:crushing` | any↔Create | established |
| M-04 | **Create recycles deco** — metal/stone deco crushes back to raw/gravel + an XP nugget; lossy | `create:crushing` | block/deco↔Create | established |
| M-05 | **Native-method gating** — a mod's flagship item is built *in its own machine*, gated on Create parts as inputs | the mod's own machine type | any↔Create | established |
| M-06 | **Sequenced-assembly keystone** — endgame items are multi-stage chains through a `derpack:incomplete_*` part | `create:sequenced_assembly` | Create (depth) | established |
| M-07 | **Attunement catalyst** — a worldgen consumable (Galosphere allurite/lumiere shards) gates a conversion so it isn't free arbitrage | rides the host method as a catalyst | magic + survival/worldgen | established |
| M-08 | **Coin from processed scarcity** — scarce regional metal → Create-processed → minted into coin | `create:*` → `numismatics` mint | Create↔economy | accepted · #136 |
| M-09 | **Luxury good → coin** — a high-effort consumable (wine, cheese, processed crop) is a sellable trade good | `numismatics` sell/price | survival/food↔economy | accepted — ⚠ player-run-currency review at v0.9.0 |
| M-10 | **Arcane infusion pull** — a foreign material is refined/attuned into a magic reagent through an arcane infusion method | `ars_nouveau:imbuement` · `forbidden_arcanus:*infusion*` | any↔magic | accepted (generalizes M-01) — ⚠ no basic components |
| M-11 | **Ritual / transmutation sink** — a drop or material is transmuted into an essence through a ritual/spirit method | `occultism:spirit_fire` / `ritual` | pressure→magic | accepted |
| M-12 | **Processing-chain pull** — a raw crop/material is run through another mod's processing method into a finished good **or useful intermediate** | `farmersdelight:cooking`/`cutting` · `create:milling`/`mixing` · `extradelight:*` | survival↔Create/economy | accepted (generalizes M-03/M-09) |
| M-13 | **Fuel → propulsion** — refined fuel powers an Aeronautics engine/generator (the airship/vehicle supply line) | TFMG / Create-Addition fuel → engine intake | Create↔logistics | accepted · #143 |
| M-14 | **Bounty → drop economy** — a bounty board consumes mob drops and pays coin (pressure → economy) | `bountiful` board → `numismatics` payout | pressure↔economy | accepted (provisional) · #137 — ⚠ keep currency **player-run**; revisit v0.9.0 |
| M-15 | **Boss-key unlock** — a boss drop is the gate item for a complex Create/tech recipe (the production on-ramp) | the gated machine's own recipe (boss drop as input) | pressure↔Create | accepted · #92 — must stay sensible |
| M-16 | **Seasonal reagent** — a crop/material obtainable only in a given Serene Season feeds a machine/ritual | season-gated input → Create/magic method | survival↔Create/magic | accepted · #91 — Serene Seasons is a **priority** survival lever |
| M-17 | **Electric / FE charging bridge** — Create electricity (New Age / Create Addition FE) charges a tool/focus/reagent | `createaddition:charging` | Create↔magic/tech | accepted — only when it makes sense |
| M-18 | **Summoned-spirit logistics** — Occultism dimensional miner-spirits / spirit-trade acquire a scarce material or trade | `occultism:miner` / `spirit_trade` | magic↔Create/economy | accepted |
| M-19 | **Soul / haunting seam** — `create:haunting` (Create's soul-fire) transmutes an item into a soul/spirit output | `create:haunting` | Create↔magic | accepted |
| M-20 | **Deploy-application upgrade** — `create:deploying` / `item_application` applies a woven part onto a base to upgrade it | `create:deploying` / `item_application` | any↔Create | accepted — light single-step sibling of M-06; not for basics |
| M-21 | **Trade-seam to economy** — a villager profession / wandering-trader routes into Numismatics | villager trade → `numismatics` | any↔economy | **provisional — EXPLORE only** (maintainer leans *no*) |
| M-22 | **Lunar / celestial reagent** — a material/effect available only during a moon event feeds a method; **all** the moons | lunar-event-gated input → Create/magic method | survival↔magic/Create | accepted — extend across every moon event |
| M-23 | **Structural alloy → airframe/hull** — a load-bearing metal plate/beam/alloy is a required build ingredient for Aeronautics airframes/hulls | fabricated structural part → aeronautics construction recipe | Create/survival↔logistics | accepted — scale depth with ship tier |
| M-24 | **Mechanical component → propulsion/control** — a mod's mechanical part feeds Aeronautics propellers/engines/control surfaces | component → aeronautics drivetrain/control recipe | Create↔logistics | accepted — companion to M-23/M-13 |

> The motif table is **the methods palette in motif form** — adding a motif usually means *adopting a new
> method as a connective resource*. New methods/motifs enter through Gate 0 (§10). A "behavioral-constraint"
> motif (createpickywheels/solclassic) is **held** pending a maintainer call; those mods stay `LEAVE`.

**Rules that make motifs the anti-fragmentation device:**

- **Compose, don't invent.** An authored weave must cite the motif(s) it instantiates. "Doesn't fit any
  motif" is a signal to *stop and escalate* (a Gate-0 row in `DECISIONS.md`), not to invent a one-off edge.
- **New motifs are a human gate (Gate 0).** Because a motif propagates globally, registering a *new* one
  needs maintainer sign-off. Reusing an approved motif does not. This caps "motif sprawl."
- **A motif carries its anti-arbitrage rule.** M-01/M-07 round-trips should lose value (but a 1:1 swap is
  legitimate for genuinely-equivalent materials — see §7); M-04 is lossy by design. The rule travels with
  the motif so every chunk applies it the same way.
- **Never gate a *basic / everyday component* behind a complex recipe** — depth scales with the item's
  power (everyday = one light step; flagship = deep chain; §7). This is why M-10 arcane-infusion and M-06
  sequenced-assembly are *not* for basic components.
- **Actively *grow* the vocabulary — with evidence.** The registry **should expand** (12 seeds → 24 today),
  best drawn from **how mods and curated packs integrate things *right now***, each carrying a one-line
  precedent. Blue-sky proposals are welcome, flagged for Gate-0. *Guardrail:* the value is a **shared,
  legible** vocabulary — resist sprawl; the 0.15 review retires any motif nobody composes from.

### 2.2 The reagent-ownership table — no double-spend

A second fragmentation source is two chunks repurposing the same item incompatibly. A short
**reagent-ownership table** in [`WEAVE-LEDGER.md`](WEAVE-LEDGER.md) reserves the connective items (synced
snapshot):

```
ars_nouveau:source_gem                        → M-01 magic currency hub. DO NOT repurpose.
galosphere:allurite_shard / lumiere_shard     → M-07 attunement catalyst (magic).
occultengineering:spirit_solution             → the occult intermediate (reuse; don't invent a new one).
create:experience_nugget                       → standard create:crushing byproduct (M-03/M-04).
numismatics:* (cog/spur/bevel/sprocket/…)      → M-08/M-09 coin sink — owned by the economy.
irons_spellbooks:arcane_essence                → Iron's-side magic currency, bonded to source via M-01.
tfmg:diesel / gasoline / lubricant (fuels)     → M-13 Aeronautics propulsion fuel.
each boss's signature drop (per boss)          → M-15 boss-key gate item.
```

Before a chunk gives an item a new role, it checks this table. Conflicts are escalated, not resolved
locally. (⚠ The Galosphere `silver`=**PALLADIUM** gotcha and the `samurai_dynasty` silver split (#177)
are live escalation cases — see CLAUDE.md.)

### 2.3 The weave ledger — the running design state

One persistent, append-only record every chunk reads first and writes last —
[`docs/WEAVE-LEDGER.md`](WEAVE-LEDGER.md) (human) + `tools/weave-ledger/weaves.json` (machine mirror). It
is the generalization of the ad-hoc `*-HANDOFF.md` docs the magic web used, into a single index that keeps
the whole web in view. **The ledger — not the metric — is the source of truth for "what is woven and
why."** Maintainer gate-calls made during autonomous runs are logged in
[`DECISIONS.md`](../DECISIONS.md) (ratify/override at leisure).

---

## 3. The chunking scheme (work the pieces, keep the whole in view)

**Key insight: the unit of *understanding* and the unit of *weaving* are different, so they chunk
differently.**

### 3.1 Understanding chunks = one mod each (embarrassingly parallel)

Per-mod understanding is atomic: one mod → one web sweep → one dossier card. ~350 tiny, independent
tasks, each comfortably inside a context window, each grounded against that mod's digest files. This maps
**exactly** onto the per-mod sweep #160 already specifies for conflicts — so it's **folded into the same
pass**. **Done** (Phase 1): see §5.

### 3.2 Weaving chunks = loop-seam neighborhoods (never a lone system)

A weave connects ≥2 mods across the loop, so its chunk must be a *neighborhood*, not a single mod. The
neighborhood is defined to **force cross-loop thinking by construction**:

- **Primary axis = the cadence's pillar.** The odd version in flight sets the focal node
  ([`ROADMAP.md`](ROADMAP.md)): **0.7 Create spine → 0.9 Economy & logistics (incl. aeronautics) → 0.11
  Magic → 0.13 Survival → 0.15 weave review**. *(This pillar order changed in v0.6.0: aeronautics folded
  into the Economy's logistics arm at 0.9; survival moved to 0.13.)*
- **Each chunk is a *seam* — `focal node × an adjacent loop node`** — production↔economy,
  pressure↔production, scarcity↔production, economy↔logistics. You cannot author a single-system chunk; the
  chunk *is* the second-anchor search. This is the ≥2-anchor rule made structural, now loop-aware.
- **Sub-chunked by mod family / recipe-graph neighborhood** to fit a context window.

The recipe-graph's island table and buckets (`tech/gear`, `block/deco`, `organic/mob`, `magic`,
`security`, `phantom` — [`CONNECTIVITY.md`](CONNECTIVITY.md)) give the ready-made neighborhood map: each
off-web cluster is a candidate sub-chunk, already triaged by whether it's worth bridging.

> **Practice note (Phase 2.x):** the multi-pass exploration (§5) **abolished the coverage/audit split and
> reviews EVERY mod each pass**, re-shuffling chunk membership per pass so a mod sees different neighbours.
> The loop-seam framing above is how a *human-directed* per-pillar pass (Phase 3, on the odd versions)
> scopes its work; the autonomous Phase-2 passes chunk the whole universe randomly for breadth.

### 3.3 How chunks hand off (and don't fragment)

1. **Read-ledger-first.** Every weaving session opens by reading the motif registry, reagent-ownership
   table, and the ledger/dossiers for the mods in scope. It works *within* the existing vocabulary.
2. **Write-ledger-last.** It appends its proposed/authored weaves, any new-motif requests (flagged for
   Gate 0 in `DECISIONS.md`), and a one-paragraph **handoff stub**.
3. **The coordinator** (a thin driver session or the maintainer) sequences chunks, resolves cross-chunk
   conflicts surfaced in stubs, and owns the motif registry. Most chunks interact *through the ledger*.
4. **The global backstop** is the comprehensive weave review at **0.15** (in the cadence): the whole
   ledger is audited, every loop seam against every other, dead motifs retired, contradictions closed.

---

## 4. The ledger structure (concrete)

Stored in-repo, plain text, diff-friendly, parseable by a small cross-check script:

```
tools/mod-data/dossiers/<mod>.md      # one understanding card per mod, incl. its METHODS (Phase 1 output)
tools/weave-ledger/methods-palette.md # pack-wide inventory of every mod's methods/recipe-types (auto-gen)
docs/WEAVE-LEDGER.md                  # motif registry + reagent-ownership + weave log (human-readable)
tools/weave-ledger/weaves.json        # machine-readable mirror of the weave log (for cross-check)
tools/weave-ledger/check.py           # ledger ↔ kubejs ↔ recipe-graph consistency checker
DECISIONS.md                          # the maintainer-gate queue (G0/G2/G3 calls; ratify/override)
```

The **methods palette** is the union of every dossier's `methods` block — the catalogue of *connective
mechanics* the weaver shops from. It's auto-generated from the digest's recipe-type column (§9), filtered
to **installed** namespaces, so it's jar-grounded and free. (Current: 221 methods across 56 mods.)

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
anchors:    survival/food (1)           ← current anchor count on the loop
2nd-anchor candidates (prefer method-routings — see §6):
  - economy:  wine/cheese as sellable luxury goods (M-09, via numismatics sell)   [STRONG, thematic]
  - Create:   run grapes through create:pressing → must, OR feed Create farms into the barrel (M-12) [MED]
  - magic:    none obvious — leave (don't force)
how-packs-integrate: <url> — commonly a food/trade mod; pairs with Farmer's Delight.
sources:    [modrinth url] [wiki url] [digest]
status:     VERIFIED                    ← or UNVERIFIED (blocks use as a weave basis)
```

The `methods` block is the heart of the card. Its **recipe-types are auto-filled from the digest**; the
**non-recipe mechanics** are what the web sweep adds. `consumes / outputs` is the join key for
opportunity-finding (§6). Some mods register content in **code**, near-invisible to the scanner: **Diet
AppleSeed** (a contentless mechanic) stays **hand-authored** against [`SYSTEMS.md`](SYSTEMS.md); **Create
Aeronautics** was too, until **#179** parsed its registry dump into the digest — its card is now `GROUNDED`
(141 blocks / 18 items + jar-confirmed make-chains). The additive-digest / scanner blind spot is #131.

### 4.2 Motif registry & reagent-ownership

The tables in [`WEAVE-LEDGER.md`](WEAVE-LEDGER.md), snapshotted in [§2.1](#21-the-motif-registry--the-shared-vocabulary)
/ [§2.2](#22-the-reagent-ownership-table--no-double-spend).

### 4.3 Weave log entry

```
W-037 | from: vinery → to: economy(numismatics) | hook: wine is a millennia-old trade good
       | motif: M-09 | mechanism: numismatics depositor price / sale recipe (verify schema)
       | status: proposed → [Gate 2 approved] → authored(kubejs/.../0x-economy-food.js) → playtest-pending
       | confidence: COHERENT, BALANCE-PENDING
       | anchors-added: vinery gains economy (now 2)  | sources: [digest][modrinth]
```

`status` is a small state machine: `proposed → approved → authored → validated(static) → playtested`.
`confidence` is two independent flags: **COHERENT** (LLM can assert) and **BALANCE-OK / BALANCE-PENDING**
(only play confirms — see [§8](#8-pre--vs-post-release-what-the-llm-can-and-cant-do)).

### 4.4 The cross-check script (`check.py`)

A small stdlib-Python tool, sibling to the recipe-graph, that asserts the ledger and the code agree:

- Every `authored` weave in `weaves.json` has a matching recipe in `kubejs/server_scripts/recipes/`.
- Every kubejs bridge recipe (the same parse the recipe-graph overlay already does) is logged in the
  ledger — **catches un-ledgered edges that would fragment the vocabulary.**
- Every weave cites a registered motif; every cited reagent honors the ownership table.
- Reports dossier coverage: mods with no dossier, mods at 0/1 anchor, `UNVERIFIED` cards.

This makes "the web stayed coherent" a *checkable* property, not a vibe — without turning the
connectivity % into a target.

---

## 5. The phases

Each phase states inputs → outputs → tools → the human gate. **Status banners reflect where execution
actually is.**

### Phase 0 — Scaffolding & vocabulary  ✅ DONE
- **Did:** built the dossier generator (§9.1); defined `WEAVE-LEDGER.md` + `weaves.json` schema; **seeded
  the motif registry and reagent-ownership from the *existing* weaves** so we started from the vocabulary
  the pack already spoke.
- **Out:** scaffolded ledger; the seed motifs (now grown to M-01…M-24). **Gate 0 (seed list)** ratified.

### Phase 0.5 — Vocabulary expansion  ✅ DONE (and ongoing)
- **Did:** mined how mods/curated packs integrate things now → proposed M-13…M-22; the maintainer
  Gate-0'd them (M-23/M-24 added for aeronautics depth; logistics-carrier/cardboard **rejected**;
  behavioral-constraint **held**). **All M-01…M-24 are Gate-0 accepted except M-21 (provisional).**
- **Standing:** the registry keeps growing through Gate 0; the 0.15 review retires unused motifs.

### Phase 1 — Per-mod understanding (folded into #160)  ✅ DONE
- **Did:** for every mod, one targeted web sweep → filled the dossier judgment fields; inventoried methods
  (recipe-types auto-pulled, non-recipe mechanics from the sweep); cross-grounded every claim.
- **Out:** **~351 `VERIFIED` dossiers** (367 built → 16 pruned across the EMI/cut sweeps and the v0.6.0
  reconcile); the **methods palette**; a worklist of 0/1-anchor mods.
- **Gate 1:** **PASSED** — spot-check of a sample + all load-bearing hub mods was clean (sourced, no
  hallucination).
- **Upkeep (#161):** mod updates regenerate touched dossiers. ⚠ The digest is **additive and never deletes
  uninstalled mods** (#131), so the dossier corpus is reconciled against the **manifest**, not the digest:
  cut mods are pruned and added to `build-dossiers.py`'s `CUT_NS`; a clean digest regen on the box (#131)
  is the durable fix. (v0.6.0 example: diet-`appleseed` dossier added; BOMD / SoL-onion / SoL-classic /
  umapyoi / lib dossiers pruned.)

### Phase 2 — Opportunity mapping  ✅ effectively complete (Gate 2 pending)
- **Do (per chunk):**
  1. **Issue sweep (step 0).** Search/filter the repo's GitHub issues relevant to the chunk and **pass
     them through** as inputs (e.g. #136 economy, #146 magic-gating, #119 dropped recipes, #219 cost
     model, #220 locking) — existing design intent feeds the weave list instead of being rediscovered.
  2. **Find candidates.** recipe-graph as a **compass** plus dossier **thematic adjacencies and method-pull
     matches** (§6). Mark intentionally-vanilla islands (organic/mob) as **leave**.
  3. **Power-read each candidate.** Gauge the item's tier in its *own* mod and size the integration to it
     (§7) — deep for endgame, light for everyday, respecting the cost model.
  4. **Theme-fit.** Tone-tags + the adversarial red-team pass (§7); drop or flag clashes.
  5. **Quality audit (the ≥2-anchor track).** Review whether already-anchored mods' *existing* connections
     are on-theme and balanced; list rework items.
- **Out:** a **candidate weave list** per chunk — one line each: (from-material, →through-**method**,
  to-loop-node, hook, motif, **power-tier**, **tone-fit**, **delivery mechanism**, confidence) — **plus** a
  **rework list** and the full **considered-set including rejects** (with kill reasons; nothing silently
  dropped).
- **Gate 2 — the main taste gate:** maintainer reads the candidate list (cheap: one-liners) and marks each
  **approve / reject / needs-discussion**, *before* authoring.

### Phase 2.x — iterative multi-pass convergence  ✅ ~16 passes; at/near saturation
A single Phase-2 pass under-produces (the first 9-chunk run found ~98 accepts — thinner than the truth).
So Phase 2 is re-run as **many independent passes**, accumulating *every* candidate into one master table
that **counts how many passes proposed each** — turning "did we find it?" into a **confidence** signal.

**Where it stands:** **16 passes** (pass-00…pass-15) → **~1991 unique candidates** (deduped on
mod + item + pillar + motif, after the merge excludes cut mods), **556 at ≥2-pass agreement, 225
opus-corroborated**. Passes 13/14/15 were
**full passes** (every dossier). The convergence table is `tools/weave-ledger/phase2/CANDIDATES.{md,tsv}`.

1. **Randomize the chunking per pass** (`scripts/phase2-chunks.py --pass N --seed N`) so each pass sees
   different neighbours — testing whether chunk composition surfaces new cross-mod rhymes.
2. **Fan the chunks on Sonnet** (robust + cheap), one **Opus** agent per pass cycling chunks (gets the
   IDENTICAL prompt — never told it's the comparison; the `MANIFEST.json` records which chunk was Opus and
   the merge flags it `from_opus`).
3. **Merge** (`scripts/phase2-merge.py`): one row per unique candidate with `times_suggested` (confidence)
   and `from_opus`. **Read `times` and `consensus` together** — a high `times` with `consensus: REJECT` is
   "robustly noticed and rejected," not a candidate (the dedup key omits the verdict, so accepts+rejects of
   one edge collapse to one row with a `verdicts` split).
4. **Full coverage — every pass reviews every mod (no library freeze).** Per the maintainer's standing rule
   — *nothing is excluded; reviewing a mod alongside the others can surface new links* — each pass chunks
   **all** dossiers. An earlier **library-freeze** optimization (skip ~160 zero-content libs to save tokens)
   was **retired**: its content test trusted the **digest**, which **false-zeroes code-registered & mechanic
   content** (Aeronautics parts, diet/AppleSeed, sleep/`midnightthoughts`, `fishingreal`), so it silently
   skipped real content mods and missed their weaves — re-introducing the exclusion the "review everything"
   rule had removed. Pure libraries simply `LEAVE` each pass (cheap); only CUT mods (no dossier) are absent.
5. **Delivery mechanisms (not just recipes).** A weave can be delivered by **recipe**, **loot-table
   seeding** (structure/dungeon mods → seed coin/reagent/boss-key drops — a Phase-3 datapack task),
   **worldgen/event gating**, **trade**, or **config/tag** — recorded per candidate so loot-bearing
   structure mods are reviewed, not auto-`LEAVE`'d.

**Blind → context-fed switch (the convergence gate).** Early passes run **blind** (no prior context) as
independent samples. While blind passes keep adding genuinely new candidates, keep them blind; when a fresh
pass adds little, switch later passes to **context-fed** (`--mode context-fed`, ~1.8× token cost): hand the
agent the accumulated rows for its mods and ask only for **what's missing**. **Stop at saturation** (even a
context-fed pass adds almost nothing). End state: high-`times` rows are the confident, multiply-rediscovered
weaves; `1`-count rows are speculative.

> **⚠ v0.6.0 reconcile.** The accumulator was built before the v0.6.0 modlist landed, so it referenced
> **cut mods**. `phase2-merge.py` now **excludes cut mods automatically** (sourcing `build-dossiers.py`
> `CUT_NS`), so the re-merge already dropped **62 candidates for 4 cut mods** — `bosses_of_mass_destruction`
> (**BOMD, confirmed intentional cut**), `solclassic`, `solonion`, `umapyoi`. A broader manifest
> re-validation is still good practice before Phase-2.5 issue-filing (the additive digest hides subtler
> version/slug cases). **The aeronautics pillar is now reviewable** — **#179** parsed its code-registered
> parts into the digest (`aeronautics.md` is `GROUNDED`), closing the blind spot that had it weave only
> *into* aeronautics.

### Phase 2.5 — Issue authoring & handoff (the instance's last step)  ⏳ NEXT
- **Do:** turn each **accepted** integration into a **GitHub issue attached to the right milestone** (its
  loop node's odd version per [`ROADMAP.md`](ROADMAP.md): Create→0.7, economy+logistics→0.9, magic→0.11,
  survival→0.13; curation/hygiene→0.6 or Backlog), with method / motif / power-tier / delivery / sources
  inlined. **Fold a candidate into an existing pillar issue rather than duplicating** (#136 economy, #137
  bounties, #143 aeronautics fuel, #92 boss-drop gating, #91 survival/seasons). Then **commit all context**.
- **Why it exists:** **authoring (Phase 3) and everything after is milestone work, done elsewhere** — the
  planning instance is **shut down after Phase 2.5**. Phase 2.5 *is* the handoff: the durable artifacts are
  the milestone-attached issues + the committed ledger.
- **Gate:** maintainer confirms the issue set before the instance retires.

### Phase 3 — Authoring (per chunk, rides odd versions)  ⏳ milestone work
- **Do:** **jar-verify the *method* schema** for each target mechanic before writing (the magic-web
  discipline — reuse the verified schemas in `archive/MAGIC-WEB-HANDOFF.md` §4); author KubeJS weaves
  **composing approved motifs**, **defaulting to the mod's native method/recipe-type** but using a
  crafting-table recipe where that's the genuinely coherent form (§7); apply the **cost model** (≈3×
  basics, step-depth for tiers — #219) and the **KubeJS locking/gating** where the pillar's lock list calls
  for it (#220); log each in the ledger; run static validation.
- **Tools:** KubeJS — **method-first**: `event.recipes.<mod>.<method>(...)` and
  `event.custom({ type: '<mod>:<method>', … })`; `event.shaped/shapeless` where a table recipe is the
  coherent form; `event.remove`; loot-table datapacks for the loot-seeding delivery; `./tools/packwiz
  refresh`, `node --check`, `check.py`, recipe-graph regression.
- **Gate (Gate 0 + Gate 3):** a *new* motif → Gate 0; genuine ambiguity → Gate 3, a **few sharp questions**.

### Phase 4 — Validation (per chunk)  ⏳ milestone work
- **Do:** static checks (CI gates `node --check`, packwiz freshness, TOML/JSON parse); connectivity
  **regression** (did we shatter anything / did the intended island rejoin — *not* "did % rise"); then the
  human-only gates: JEI renders the recipe on the right station; the `## Playtest` checklist on a fresh
  world. Tag each weave's `BALANCE` confidence from play.
- **Gate (Gate 4):** the playtest sign-off — the PR stays **draft** until a human ticks the checklist
  (CLAUDE.md rule; the sandbox cannot launch the game).

### Phase 5 — Global cohesion review + recurring upkeep  ⏳ at 0.15
- **Do:** at **0.15**, the comprehensive **weave review** — audit the full ledger, every loop seam against
  every other, retire dead motifs, close contradictions, confirm "the loop turns." Ongoing: #161 mod
  updates regenerate touched dossiers and re-validate their weaves; #160 keeps conflict reputation fresh.

---

## 6. Finding weave opportunities (compass, never target)

Three complementary signals, used to *find* candidates — never as an acceptance number — with one loop
heuristic on top:

> **The loop heuristic.** A weave is strongest when it **advances the loop**: it takes the *output* of one
> loop node and feeds it into the *next* (scarcity → a producer's input; a producer's output → the
> economy; pressure → demand for a producer). Ask not just "does this give a 2nd anchor?" but "**which way
> round the loop does this push?**" — the answer is usually a method-pull.

1. **Method-pull (the highest-yield — see §2.0).** Cross the dossiers' `consumes/outputs` against the
   **methods palette**: a mod with a loose material and another mod whose **method could consume or produce
   it** is a prime candidate — *route the material through that method*. Ask first: **"whose
   machine/ritual/infusion *wants* this material?"** before "what crafts into what."
2. **Structural (recipe-graph as compass).** The island table surfaces off-web clusters; the
   `--remove create` lens shows how a node coheres with the spine pulled out. For each island, ask the
   [`CONNECTIVITY.md`](CONNECTIVITY.md) question: **intentional (cosmetic/organic — leave it) or a real gap
   (bridge it with ~one edge)?** The cheapest real bridge is usually a method-pull (#1).
3. **Thematic (dossier adjacency).** Mining dossier vibes/signatures surfaces rhymes the metric can't see —
   a mob that drops embers next to a mod that smelts with embers; wine next to a coin economy. The best of
   these usually resolve *into* a method-pull (#1).

**The worklist has two tracks, not one:**
- **(a) Coverage** — mods at **0 or 1** anchor need a *new* weave: `tech/gear` islands first, then per-
  material `block/deco`, with `organic/mob`/`magic`-residual/`phantom` out of scope by design.
- **(b) Quality** — **a mod at ≥2 anchors is *not* automatically done.** Its existing connections must be
  on-theme, tasteful, and balanced; an arbitrary, lore-clashing, or mis-costed weave is a defect even when
  the anchor tally looks fine. So Phase 2 also **audits the connections of already-anchored mods** (sampled
  + the deep-woven hubs). Anchor count is necessary, never sufficient — the end goal is **every connection
  feels intentional**, not a green number.

> **Anti-Goodhart, stated as policy:** no phase, gate, or PR acceptance criterion is allowed to be a
> connectivity-% target. The metric appears only as (a) a compass that *lists candidates* and (b) a
> *regression* check that we didn't shatter the web. A weave is justified by its **motif + theme + which
> way it turns the loop**, never by the points it adds.

---

## 7. Authoring without lifeless threads

This is where LLM limits bite hardest, so the mitigations are layered — and the last one is honest.

1. **Compose from motifs (the strongest mitigation).** A weave built from an established, *already-
   playtested* motif inherits its life. Fresh-invented edges are where lifelessness lives — and those are
   exactly what Gate 0 throttles.
2. **The established-pattern library.** The motif registry *is* the pattern library (the methods palette in
   motif form — §2.1), seeded from the pack's own working weaves and the wider modpack-integration canon.
3. **The theme-coherence rubric** (every weave passes, from [`RECIPES.md`](RECIPES.md) + the settled cost
   model in [`SYSTEMS.md`](SYSTEMS.md) §3):
   - **Reach for a *method* first.** If any installed mod has a machine/ritual/infusion/processing type that
     *fits*, author into it. The bare crafting table is **not a lesser fallback** — where a shaped/shapeless
     recipe is the coherent way to make the thing, it **is** the right answer. Default to the method; use
     the table when it makes sense.
   - Input **matches** output ("computers cost computer parts; a drone costs rotors + a motor").
   - **Additive**, or a `remove` is always paired with a replacement (never break a chain).
   - **Balance-first, to the settled cost model.** Basics cost ≈**3×** the naive baseline; **higher tiers
     gain depth through more *steps* (GregTech-style chains), not multiplied ingredient counts** ([`SYSTEMS.md`](SYSTEMS.md)
     §3, #219). Never make a power item *cheaper* than its original. Depth scales with power (light gate for
     cheap gear; `sequenced_assembly` keystone for flagships — M-05/M-06).
   - **Honor locked exclusives and the production routes.** Each route (Create-tech, MineColonies, Magic)
     holds outputs only it can make; the high-tier fork is **boss drop *or* MineColonies-crafted part**.
     Don't author a weave that lets one route make another's exclusive (that erodes the trade loop —
     [`SYSTEMS.md`](SYSTEMS.md) §3). Locking/gating is **KubeJS**, lock list incremental per pillar (#220).
   - **Scale the integration to the item's power (read its place in its own mod first).** Signals: loot
     rarity (`tools/mod-data/loot/`), recipe depth/cost, wiki tier, attribute/enchant values. Powerful
     endgame items are the key targets for *large, deep* integrations; everyday items get *small* ones.
   - **Never the inverse: no complex recipe for a basic component.** Over-gating basics is as much a defect
     as under-gating flagships.
   - **Mind the logistics lens.** A weave that makes regions reachable/everything cheap can erase scarcity —
     the loop's failure mode ([`SYSTEMS.md`](SYSTEMS.md) §5). Relieve scarcity locally, don't annihilate it.
   - Gives the mod a **real second place on the loop**, not a magic↔magic-only essence trade.
4. **The "lifeless thread" test** (explicit anti-patterns — any hit ⇒ reject or escalate):
   - A bridge that exists only to move the metric.
   - A conversion no player would ever actually do.
   - A reagent repurposed against its own lore/vibe, **or a pairing whose two mods' tones clash** (the
     per-mod dossier catches single-mod misuse but **not** bad *pairwise* fit — see point 5).
   - Free round-trip arbitrage (A→B→A with no loss) **as a rule** — but it's **legitimate for equivalent-
     material unification** (the three limestones already swap 1:1 in `35-web-bridges.js`). Use sparingly.
   - A forced edge onto a deliberately-vanilla island (organic/mob) — "why is jasper convertible to
     granite?" incoherence.
5. **Pairwise theme-fit check (the dossier is *not* enough).** A weave *joins two mods*, and a pairing can
   clash even when both vibes are individually fine. Two complementary catches:
   - **Tone tags + a clash check.** Tag every mod with a small **tone/setting taxonomy** (`medieval-
     fantasy`, `arcane`, `industrial`, `sci-fi`, `eldritch`, `naturalist`, `whimsical/meme`, `historical`)
     as a structured dossier field. A candidate that crosses *incompatible* tones is auto-flagged.
   - **Adversarial red-team pass (independent reviewer).** Before a candidate is authored, a *different*
     agent argues the case **against** the pairing. The proposer must answer or drop it. This feeds Gate 2.
6. **The honest limit.** An LLM can verify 1–5 — *coherence*. It **cannot reliably judge fun**. **Fun is
   the human gate, and playtest is where lifelessness is truly exposed.** The plan gets weaves to "sensible
   and grounded" and routes "fun" to Gates 2 and 4.

---

## 8. Pre- vs post-release: what the LLM can and can't do

The open question from [`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) resolves into a **split**, not a side:

**Feasible pre-release with LLM tools (the bulk of the labor):**
- All ~350 dossiers and the opportunity map. **(Done / converging.)**
- The full **coherence** layer: motif-composed, jar-verified, theme-checked, balance-*safe* weaves that
  give 0/1-anchor mods a sensible second place on the loop and collapse the real islands.

**Still needs actual play (LLM cannot front-run):**
- **Balance tuning.** Source-costs, fluid amounts, drop rates, coin prices ship **first-pass** and are
  tuned in play — exactly as the magic web's ratios already are. Marked `BALANCE-PENDING`.
- **Fun confirmation.** Whether a coherent weave is *used* and *enjoyed* vs. ignored.
- **Emergent-economy behavior.** Whether trade actually emerges and the loop *turns* (the economy is
  emergent in mechanism though **load-bearing** by design — only play tells you if it took, and whether
  soft specialization holds or needs the lock-list hardened — [`SYSTEMS.md`](SYSTEMS.md) §3).

**Resolution:** do the coherence layer pre-release, ship every weave **confidence-tagged** (`COHERENT` +
`BALANCE-PENDING`), and let the cadence absorb the rest — even stabilization versions tune the
`BALANCE-PENDING` flags; post-1.0 content updates accrete the deep weave through play.

---

## 9. Tooling (minimal, grounded in what exists)

The digest and recipe-graph do the heavy lifting; the genuinely new pieces are small and **already built**:

1. **Dossier generator** — `scripts/build-dossiers.py` ✅. Scaffolds one `tools/mod-data/dossiers/<ns>.md`
   per mod, pre-filling the factual fields from the digest — and the `methods` block (the recipe-*types* a
   mod registers, from the `recipes/<jar>.txt` 2nd column). Leaves judgment fields for the Phase-1 sweep;
   preserves swept content on re-run (idempotent above the AUTO mark). Emits `methods-palette.md`. **Keyed
   off the digest**, so it carries a `CUT_NS` skip-list to ignore the digest's additive drift (#131) — that
   list, not the digest, is the authority on what's cut (⚠ a naive manifest filter is unsafe: slug↔namespace
   is not 1:1, and most digest "orphans" are version-drift of *installed* mods, which must not be cut). **A
   full regen is deferred until the on-box clean-digest regen (#131)** — running it against the drifted,
   additive digest would spawn stale-mod skeletons + namespace duplicates.
2. **The ledger format** — `docs/WEAVE-LEDGER.md` (human) + `tools/weave-ledger/weaves.json` (machine
   mirror) ✅. Plain text, schema in §4.
3. **`tools/weave-ledger/check.py`** ✅ — the §4.4 cross-check (ledger ↔ kubejs ↔ recipe-graph ↔
   motif/reagent rules + dossier-coverage report). Reuses the kubejs-overlay parse in `recipe_graph_lib.py`.
   Advisory in `pr-checks.yml` for now (→ required at 0.15).
4. **Phase-2 convergence harness** ✅ — `scripts/phase2-chunks.py` (per-pass randomized **full-coverage**
   chunking — every dossier, every pass), `scripts/phase2-merge.py` (the master `CANDIDATES.{md,tsv}`
   accumulator with `times_suggested` / `from_opus`, cut-mod-aware). Briefings + state in
   `tools/weave-ledger/phase2/`. (The earlier `phase2-freeze.py` library-freeze was **retired** — its
   digest-based content test false-zeroed code-registered/mechanic content and silently skipped real mods; §5.)

**Digest extension:** the dossier is a *new layer beside* the digest that *consumes* it. The digest stays
the verbatim-jar ground truth; the dossier is the interpreted layer on top. #161 regenerates the digest on
updates, so the dossier generator just re-runs after it. **Known gap:** the digest is **additive** (never
deletes uninstalled mods — #131) and **scanner-blind to code-registered content** (the AppleSeed mechanic;
Aeronautics until **#179** parsed its registry dump in), so the dossier layer is reconciled against the
**manifest** and the residual gaps are hand-authored.

---

## 10. Human taste gates (where the human decides; everything else is LLM-autonomous)

The principle: **LLM = labor + decision-surfacing; human = taste, batched and cheap.** Surface decisions
as digestible batches — a candidate list, a motif proposal, a handful of sharp questions — **never a
~350-row dump.** During autonomous runs, every reserved decision is **logged in
[`DECISIONS.md`](../DECISIONS.md) instead of blocking** (ratify/override at leisure; nothing is load-bearing
until confirmed).

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
   build/vet — all gated by `pr-checks.yml`. **Green CI ≠ it loads** (CLAUDE.md): CI is parse-only.
2. **Ledger cross-check** (`check.py`) — no un-ledgered edges, motifs cited, reagents owned. Advisory →
   required once stable.
3. **Connectivity regression** — re-run `recipe-graph.py` after each chunk; assert we **didn't shatter**
   the web and the *intended* island rejoined. **Compass, not target.**
4. **Schema verification (pre-authoring)** — jar-verify each recipe type before writing it (the GTMOGS
   `targets`-vs-`target` class of bug sails through CI). Reuse the `archive/MAGIC-WEB-HANDOFF.md` §4 schemas.
5. **In-game JEI sanity** — the recipe renders on the correct station (recipe viewer is **JEI, not EMI** —
   EMI can't render Create processing). Human, in-game.
6. **Playtest** — the per-PR `## Playtest` checklist on a fresh world; PR stays draft until ticked. The
   load-bearing gate where lifelessness and imbalance actually surface.
7. **Recurring** — #161 regenerates touched dossiers and re-validates their weaves; #160 keeps the surface
   honest. Both ride the cadence.

---

## 12. How it rides the cadence

| Cadence slot | Weave-plan activity |
|---|---|
| **Now / Backlog-living** | Phases 0–1 (scaffold + dossiers) **done**; Phase 2 multi-pass **converging → Gate 2 → Phase 2.5**. Cadence-independent. |
| **Odd feature versions** (0.7 Create · 0.9 Economy & logistics · 0.11 Magic · 0.13 Survival) | Phases 3–4 for that version's **loop-seam** chunks. The end-of-version **thunderdome** ([`CURATION.md`](CURATION.md)) curates the *set*; a mod that resists *any* coherent first anchor after honest effort is a **cut** candidate — weaving and curation are two sides of the ≥2-anchor test. |
| **Even stabilization versions** (0.8, 0.10, …) | Tune `BALANCE-PENDING` weaves from playtest; #160 conflict sweep; no new weaves. |
| **0.15 — last call + weave review** | Phase 5: comprehensive weave review across the full ledger; retire dead motifs; close the loop seams before the 1.0 freeze. |
| **Post-1.0** | Recurring odd/even rhythm accretes the deep weave through play — no resets. |

---

## 13. Risks & failure modes

| Risk | How it shows up | Mitigation |
|---|---|---|
| **Lifeless threads** | Technically-connected, not fun | Compose from playtested motifs (§7.1); theme rubric + lifeless-thread test (§7.3–4); G2 kills bad ideas pre-authoring; **playtest (G4) is the real exposure** — accepted limit. |
| **Ingredient tunnel-vision** | Only flat crafting-table swaps; the rich method web ignored → a shallow pack | The §2.0 first principle; `methods` is a first-class dossier block + a pack-wide palette; method-pull leads §6 and §7; recipe-types auto-extracted. |
| **Metric-gaming (Goodhart)** | Bridge-for-the-%, arbitrary edges | Hard policy: connectivity % is **never** a target (§6); weaves justified by motif + theme + which way they turn the loop. |
| **Context fragmentation** | ~350 local decisions → many clusters | The motif registry + reagent-ownership + read-ledger-first + `check.py` + the 0.15 global review (§2–3). |
| **Hallucinated mod facts** | Weave built on contents a mod doesn't have | **Digest-or-URL grounding rule**; `UNVERIFIED` blocks use; generator pre-fills facts *from the jar*; G1 spot-checks hubs; schema verified before authoring. |
| **Modlist drift** | Dossiers/candidates reference cut mods (BOMD, SoL forks); the digest is additive | Reconcile the dossier corpus against the **manifest** (`CUT_NS` + prune), re-validate candidates before Gate 2; the durable fix is the on-box clean-digest regen (#131). |
| **Motif sprawl** | So many motifs there's no vocabulary | New motifs gated (G0); 0.15 review retires unused ones. |
| **Over-weaving / scarcity erosion** | Forced edges onto vanilla islands; cheap logistics collapsing regions | `CONNECTIVITY.md` triage marks islands **leave**; the logistics lens (§7, [`SYSTEMS.md`](SYSTEMS.md) §5) keeps travel meaningful. |
| **Ledger rot** | Code and ledger drift apart | `check.py` asserts ledger ↔ kubejs ↔ recipe-graph agree; #161 regenerates dossiers on update. |

---

## 14. A worked micro-example (illustrative of *process* — not a committed weave)

To show the pipeline end-to-end on one mod. **This authors nothing**; it illustrates the shape — and how
it reads as the loop turning.

1. **Dossier (Phase 1).** `vinery` → web sweep + digest: *"winemaking & Mediterranean cuisine."* Vibe:
   rustic/agrarian/artisanal. Signature: grapes, wines, cheese, fermentation barrel (each cross-referenced
   to a digest id). **Anchors: survival/food (1)** → on the 2nd-anchor worklist. Candidate: *economy —
   wine/cheese are classic luxury trade goods.* `status: VERIFIED`.
2. **Opportunity (Phase 2).** recipe-graph shows `vinery` as a 114-item food island (compass: real gap,
   not cosmetic). Dossier adjacency: *luxury food ↔ Numismatics economy.* The loop heuristic: **pressure
   (diet variety) demands varied food → vinery produces it → the economy moves it.** Candidate line:
   `vinery wine → economy | hook: ancient trade good | motif: M-09 luxury→coin | delivery: numismatics sale`.
   **→ G2:** maintainer reads the one-liner, approves.
3. **Author (Phase 3).** Verify the Numismatics price/sale schema against the jar; author a motif-M-09
   weave (additive, priced to the cost model); log `W-037`; cite M-09 + the `numismatics:*` reagent owner.
   No new motif ⇒ no G0.
4. **Validate (Phase 4).** `node --check` + packwiz refresh + `check.py` + recipe-graph regression (the
   wine island now joins via the economy seam). Then human: JEI shows the sale; playtest confirms wine is
   worth selling. Tag `COHERENT, BALANCE-PENDING` → tune the price on the even stabilization pass.

Net: `vinery` went from 1 anchor (food/pressure-fed) to 2 (food + economy) via an existing motif, one
bridge, one cheap human gate — **and that single edge is the loop in miniature** (pressure → production →
economy). The ledger records *why*, so the next chunk won't re-spend wine on something else.

**A second, method-centric case (the §2.0 lever in one line).** A mob mod drops a thematically "spectral"
item that's a dead-end island. The opportunity is found by **method-pull** (§6.1): the palette shows
Occultism's `spirit_fire` and Ars's `imbuement` both *want* spirit-flavored inputs. Candidate:
`<mob>:spectral_drop → through occultism:spirit_fire → magic | motif: M-11`. The weave isn't a craft — it's
*running the drop through an existing ritual method*, giving the mob mod a production-side magic anchor
**and** engaging a whole mechanic the player builds. *The method is the weave* — that's the true web.

---

## 15. Decisions (the §15 questions — RESOLVED; live log in `DECISIONS.md`)

The plan's original open questions are settled (see [`DECISIONS.md`](../DECISIONS.md) for the full call +
how to undo each):

1. **Ledger home → separate.** `docs/WEAVE-LEDGER.md` + `tools/weave-ledger/`, **not** folded into
   `RECIPES.md` (it spans the whole loop, not just recipes).
2. **Dossier depth → scaffold all from the digest, deep-sweep the worklist + hubs.** Done — ~351 `VERIFIED`
   dossiers; the AppleSeed mechanic hand-authored; Aeronautics now digest-`GROUNDED` via #179.
3. **`check.py` enforcement → advisory now, required at 0.15.**
4. **Coordinator model → the autonomous instance + the `DECISIONS.md` queue.** Approved ("decisions are
   good"): proceed on best judgment, log every reserved gate-call, ratify/override later.
5. **Seed motif list → expanded and ratified.** M-01…M-24 are Gate-0 accepted **except M-21 (provisional —
   explore only)**; the behavioral-constraint motif is **held**. The registry keeps growing through Gate 0.

**Carry-over (not yet decided):** M-09/M-14 player-run-currency caveats (revisit in the **v0.9.0** economy
update); M-21 trade-seam (maintainer leans no — surface, don't author). _(The aeronautics digest gap is
now **closed** — #179 grounded it.)_

---

_Refs: [`SYSTEMS.md`](SYSTEMS.md) (the causal-loop model — the north star this serves),
[`WEAVING-STRATEGY.md`](WEAVING-STRATEGY.md) (the question this answers), [`DESIGN.md`](DESIGN.md) (the
goal), [`ROADMAP.md`](ROADMAP.md) + [`archive/RELEASE-CADENCE.md`](archive/RELEASE-CADENCE.md) (the cadence
it rides), [`CURATION.md`](CURATION.md) (the thunderdome rubric — the cut/keep side of the ≥2-anchor test),
[`CONNECTIVITY.md`](CONNECTIVITY.md) + `tools/recipe-graph/` (the compass), [`RECIPES.md`](RECIPES.md) (the
recipe rubric + pattern source), [`archive/MAGIC-WEB-HANDOFF.md`](archive/MAGIC-WEB-HANDOFF.md) (the
precedent workstream), [`WEAVE-LEDGER.md`](WEAVE-LEDGER.md) + [`DECISIONS.md`](../DECISIONS.md) (the live
registry + gate log), `tools/mod-data/` (the digest the dossier grounds against), `tools/weave-ledger/`
(ledger + phase2 harness). Issues: #219 cost model · #220 KubeJS locking/gating · #131 digest regen ·
#129/#113 connectivity · #160/#161 recurring passes · #136/#137/#143/#92/#91 pillar issues · #157 curation
rubric._
