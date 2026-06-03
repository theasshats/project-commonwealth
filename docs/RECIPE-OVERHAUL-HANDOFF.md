# PR #62 — "Made through Create" recipe overhaul: handoff

> **For a fresh Claude instance** continuing/finishing/verifying the Create recipe overhaul on branch
> `claude/recipe-overhaul`. Self-contained: read before acting. The deep design + full triage live in
> `docs/RECIPES.md`; this is the continuation brief (state, conventions, how to extend, what's left).

## 1. What this PR is
Re-authors crafting across the pack so it flows **through Create** — its parts (`andesite_alloy`, sheets,
casings, cogs, `precision_mechanism`, `electron_tube`) and methods (`pressing`, `mixing`, `crushing`,
`mechanical_crafting`, `sequenced_assembly`). The bar is **coherence** ("of course you'd build this with
Create parts"), **not** grind. Minecraft **1.21.1 / NeoForge 21.1.228**, KubeJS-driven.

## 2. State
- **Green** on all `pr-checks.yml` gates, **rebased onto `main`** (v0.4.6). The PR is **large**; the next
  step is **in-game playtest → merge** (§6), not more scope. Bridging the long tail of "islands" (§8) is
  **paused** by maintainer call until this lands.
- Scope of THIS PR: the Create tech weave, the **decoration/equipment weave** (`81`, §4a — new this round),
  a first **island-bridging** batch (`35`, §8), two flavor items (bible `89`, meadow cheese `99`), a
  first-pass magic essence bridge (`33-magic-web.js`), **and a connectivity-measurement toolkit** (§7a).
- **Magic is a separate PR (#75, `claude/magic-web`, stacked here).** `33-magic-web.js` is superseded by it
  (native-machine magic bridges). If #62 merges first, rebase #75 onto main. Do **not** add magic weave here.
- KubeJS is **headless here** — everything is `node --check`'d only; real verification is in-game (§6).

## 3. File layout (`kubejs/server_scripts/recipes/`)
- `00-create-ify.js` — shared notes + load check (no recipes).
- `05-metals.js` — **foundation, runs first.** Routes steel/brass/bronze through Create at the source; via
  `#c:` tags + `almost-unified` this auto-propagates to every downstream mod. (Audit conclusion in-file:
  steel/brass/bronze are fully Create-gated; the occultengineering "brass bypass" is a recycle loop.)
- `10`–`99` — one file per converted mod/branch (immersive_armors, samurai, modular_golems, northstar,
  irons_spellbooks, mffs, travelersbackpack, securitycraft, drones, astikor, exposure, smokeleaf,
  supplementaries, swashbucklers, gliders, netmusic, minecolonies, + bible/cheese flavor).
- `35-web-bridges.js` — **island bridges** (§8): additive Create-crushing recipes that rejoin orphaned
  worldgen materials (quark stones, createnuclear autunite, tfmg asphalt) to the web. Nothing gated.
- `81-decoration-metal.js` — **the decoration/equipment weave** (§4a): routes metal decoration + kitchenware
  through Create-pressed sheets via `event.replaceInput` (ingredient-only, shapes/yields preserved).
- `kubejs/startup_scripts/01-intermediate-parts.js` — registers the `derpack:incomplete_*` transitional
  items used by the MFFS `sequenced_assembly` chains (`60-mffs.js`). If you add a sequenced_assembly chain,
  register its in-progress item here.

## 4. Conventions & guardrails (honor these)
- **Gate by complexity, not uniformly.** Simple/bulk gear → one light part gate (a pressed sheet). Endgame
  machines → real Create **methods** (`mechanical_crafting` off the Mechanical Crafter, or multi-stage
  `sequenced_assembly`). Northstar/MFFS are the reference for depth; don't settle for the cheapest gate on a flagship.
- **Keep difficulty comparable to the original.** (Exception: TaCZ guns are deliberately hard — not in this PR.)
- **One gate per tier** — don't stack requirements within a tier.
- **Decoration MAY route through Create now (matured rubric).** Earlier guidance was "leave decoration
  vanilla"; the maintainer revised it to *"decoration through Create is a plus — it earns a pure-decoration
  mod a second pillar"* — **provided it's cost-neutral and not a grind** (see §4a). Don't gate decoration
  behind grindy multi-step chains; route its metal through a pressed sheet, no more.
- **Don't over-gate magic** — it routes through its own apparatus (that's PR #75's domain, additively).
- **Comment the original.** Every swap keeps the original ingredients as an `// orig:` comment so review can
  catch accidental easier/harder shifts (e.g. don't silently drop a Totem-of-Undying gate).
- **Additive / never strand an item.** Pair every `event.remove` with a Create replacement.
- **Cross-mod synergy (TaCZ style):** flagship devices may source real components from sibling mods
  (`create_new_age:copper_circuit`, `createaddition:copper_wire`, `galosphere:*_shard`, `create:propeller`)
  — every ingredient *thematically* justified, no filler.

## 4a. The decoration/equipment weave (`81-decoration-metal.js`)
A broad, **safe** weave distinct from the per-mod gating above. Instead of `remove`+`shaped` (which can
silently change shapes/yields), it uses **`event.replaceInput(filter, from, to)`** — swap only the
*ingredient*, preserving every recipe's shape/count/yield and leaving non-metal variants untouched. Used to
route raw metal in currently-vanilla decoration + kitchenware through Create-pressed sheets:
- MCW metal doors/windows/fences, handcrafted, Supplementaries candle-holders/gold/fire_pit → `create:{iron,
  copper,golden}_sheet` (cost-neutral: a sheet is a pressed ingot).
- Delight kitchenware (FD cooking_pot/skillet/stove, extradelight chiller/tap) → pressed sheet (food↔Create).
**Rules learned the hard way:** use **concrete `create:*_sheet` items, never `#c:plates/*` tags** (addon-
filled → unobtainable in JEI; that was the steel-plate breakage). `replaceInput` is the preferred tool for
any "route the metal through Create" weave. Deliberately left: stonecut fences; a forced "lights need a
bulb" pass (organic lamps); details + the playtest flag on the FD early-gate are in `docs/RECIPES.md`.

## 5. How to extend (convert another mod) — the loop
1. **Ground-truth first.** Read `tools/mod-data/recipes/<mod>.txt` (format: `recipe_id | type | referenced-ids`).
   Don't guess ids. (Regenerate digests via the **Ground-truth** Action if missing.) Pull the jar only if a
   shape/count is ambiguous (CurseForge URL = `https://mediafilez.forgecdn.net/files/<fileid first4>/<rest>/<file>`).
2. **Decide if it's even actionable.** Per the triage in `docs/RECIPES.md`: convert **metal/mechanical** craftables
   that bypass Create. Leave organic/decoration/food/mob/worldgen/magic. Prefer **keystone gating** — if a mod
   funnels through one part (a template, a core, a wheel), gate that single keystone and the whole branch follows.
3. **Author** in a new `NN-<mod>.js`:
   ```js
   ServerEvents.recipes(event => {
     // orig <id>: <original ingredients from digest>
     event.remove({ id: 'mod:thing' })            // precise; never {output} if it'd nuke a Create path too
     event.shaped('mod:thing', ['SBS','BPB','SBS'], { S:'create:brass_sheet', B:'#c:ingots/brass', P:'create:precision_mechanism' })
   })
   ```
   Create methods: `event.recipes.create.pressing/mixing/compacting(...)`, `.mechanical_crafting(out,[pattern],{key})`,
   `.sequenced_assembly([out], seed, [steps]).transitionalItem('derpack:incomplete_x').loops(n)`.
4. **`node --check`** the file. **Run `./tools/packwiz refresh`** (vendored binary — see `tools/README.md`)
   and commit `index.toml`/`pack.toml` — the `pr-checks.yml` "packwiz index" job fails otherwise.
5. Update the ledger/triage in `docs/RECIPES.md`.

## 6. What's left (to finish/merge #62)
- **In-game playtest (the only real verification).** For each changed item: JEI/EMI shows the new recipe,
  the original is gone, no recipe errors in the log, cost feels comparable. Highest-risk checks:
  - `05-metals.js`: steel only craftable via Create (samurai blast / mffs smelt gone; TFMG/Ironworks/CBC paths remain).
  - MFFS `60`: the `sequenced_assembly` chains stage correctly on Mechanical Crafters (intermediates from `01-…`).
  - MineColonies `98`: quarries craft with the in-grid `structurize:sceptergold` stamp preserved.
  - **`81-decoration-metal.js`**: MCW metal doors/windows + handcrafted + candle-holders show `create:*_sheet`
    (not raw ingots); FD cooking_pot/skillet/stove want a pressed iron sheet (the early-gate flag); the
    already-gated Supplementaries kinetic blocks (`94`) are unchanged (no collision).
  - **`35-web-bridges.js`**: new Create crushing recipes resolve in JEI (quark stones/autunite/asphalt → gravel/
    uranium_powder); purely additive, so confirm nothing's original recipe vanished.
  - Polymorph flags no recipe conflicts on changed outputs.
  - **Live playtest checklist (the merge gate): pinned PR comment "Playtest checklist — recipe overhaul (v2)"
    + its deltas.** Re-verify the post-report fixes (northstar load error `ad587cb`; steel/martian_steel →
    concrete sheets `d2ca48c`).
- **Maintainer scope calls** still open (not coherence skips): **umapyoi** (cosmetic — see #60). MineColonies
  quarries already done; Structurize confirmed utility (no change).
- **#17 leftover**: "death note" — no craftable recipe found in any installed mod; needs an item pointer if one exists.
- Decide ordering vs **PR #75** (rebase #75 to main after this merges; it replaces `33-magic-web.js`).

## 7a. Connectivity toolkit (`tools/recipe-graph*`, `docs/CONNECTIVITY.md`)
Operationalizes the north star *"every item forms one or two cohesive webs, not many clusters."* Builds an
item graph from the digests **+ the live kubejs overlay** and reports the giant component ("the web") vs
islands. Key properties (full math in `docs/CONNECTIVITY.md`):
- `python3 tools/recipe-graph/recipe-graph.py` — metrics: web %, depth-to-Create-spine, cut-vertices, islands-by-mod.
  Default lens filters vanilla `minecraft:` (it glues everything); `--with-vanilla`, `--jars-only`,
  `--remove a,b,c` (e.g. `--remove minecraft,create` to see how Create's addons weave).
- `python3 tools/recipe-graph/recipe-graph-viz.py` → `tools/recipe-graph/recipe-web.html` — **interactive offline** mod map; toggle
  mods / presets and watch components + web % recompute. Core shared in `tools/recipe-graph/recipe_graph_lib.py`.
- **Counts Create PARTS *and* METHODS** — a modded recipe-type (`create:mixing`, `occultism:ritual`, …)
  links every item it produces. This is **all-mod**, so it already lights up magic apparatus connectivity —
  **important for the #75 magic-weave PR** (run `--remove create` / inspect occultism/ars clusters there).
- Current state: **~78%** in the web (no-vanilla, overlay on), avg **1.8 hops** to Create; load-bearing
  mods `create`/`extradelight`. Re-run after any recipe change; it's also a regression check.

## 8. Island bridging — PAUSED (worklist for later / next PR)
Closing islands was started (`35-web-bridges.js`) then **paused to get this PR merged.** Resume via the
toolkit. Triage of what's left (non-magic; magic is #75):
- **Coherent, do next:** metal unification (`create_d2d` steel/tin, northstar tungsten → tag into `c:ingots/*`);
  `vinery` grapes → Create press → juice; remaining worldgen stones.
- **Open maintainer fork (the blocker):** cosmetic vanilla-material variant families (coral blocks in
  `more_slabs`/`upgrade_aquatic`, `securitycraft` reinforced blocks, `domum_ornamentum`) + organic/mob gear
  (`alexsmobs`, `naturalist`, `cataclysm`…) — ~600 items where a Create link is **arbitrary**. Options posed:
  *one natural link per material* (recommended), *coherent-only/stop*, or *force-everything-to-100%*. Get the
  call before authoring; forcing all of these would be the grind the guardrails forbid.

## 9. Parked for follow-up (playtest fallout)
- **Steel/bronze dedup (needs an almost-unified config — do carefully).** The pack has ~6 steel items
  (create_ironworks, tfmg, createbigcannons, createnuclear, mffs, samurai_dynasty) and 2 bronze
  (create_ironworks, createbigcannons). almost-unified is installed but **ships no config**, and steel/bronze
  aren't in its default `materials` list, so they aren't unified — the player sees all of them. Fix =
  `config/almostunified/unify.json` (camelCase keys, v1.4.x): add `"steel"`/`"bronze"` to `materials`, set
  `priorityOverrides` (or `modPriorities`) so **create_ironworks** is dominant, `itemsHidingJeiRei: true`
  (auto-hides the rest, incl. the recipe-less mffs/samurai steel). **Gotcha:** a shipped `unify.json`
  *replaces* the generated default, so it must also reproduce AU's full default materials/tags or it drops
  unification for every other metal. Safest path: grab the in-game-generated `unify.json` from a test
  instance, then edit only those fields. (Maintainer asked to keep ironworks for both; tfmg steel is also fine.)
- **Magic → Immersive Armors (for PR #75).** Loop the magic mods into a few Immersive Armors sets — e.g. the
  Divine/robe-adjacent sets could take an Ars/Iron's arcane component, giving magic a gear outlet. Additive,
  magic-PR scope; noted here so it isn't lost.

## 7. Pointers
- Design + full triage + deliberately-not-gated ledger: `docs/RECIPES.md`.
- Digests: `tools/mod-data/recipes/*.txt` (ground truth). Loot: `tools/mod-data/loot/*.txt`.
- Wider weave roadmap (beyond Create): `docs/WEAVE-HANDOFF.md`, `docs/INTEGRATION-BRAINSTORM.md`.
- Related issues: #17 (recipes to change), #51 (meadow cheese — closed by `99`), #56/#58 (eco ore-gen + Blockchain).
