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
- **Green** on all `pr-checks.yml` gates, **rebased onto `main`** (v0.4.6). Ready for **playtest → merge**.
- Scope of THIS PR: the Create tech weave **plus** two flavor items (bible `89`, meadow cheese `99`) and a
  first-pass magic essence bridge (`33-magic-web.js`). **Note:** `33-magic-web.js` is **superseded by PR
  #75** (`claude/magic-web`, stacked on this branch), which replaces it with native-machine magic bridges.
  If #62 merges first, rebase #75 onto main.
- KubeJS is **headless here** — everything is `node --check`'d only; real verification is in-game (§6).

## 3. File layout (`kubejs/server_scripts/recipes/`)
- `00-create-ify.js` — shared notes + load check (no recipes).
- `05-metals.js` — **foundation, runs first.** Routes steel/brass/bronze through Create at the source; via
  `#c:` tags + `almost-unified` this auto-propagates to every downstream mod. (Audit conclusion in-file:
  steel/brass/bronze are fully Create-gated; the occultengineering "brass bypass" is a recycle loop.)
- `10`–`99` — one file per converted mod/branch (immersive_armors, samurai, modular_golems, northstar,
  irons_spellbooks, mffs, travelersbackpack, securitycraft, drones, astikor, exposure, smokeleaf,
  supplementaries, swashbucklers, gliders, netmusic, minecolonies, + bible/cheese flavor).
- `kubejs/startup_scripts/01-intermediate-parts.js` — registers the `derpack:incomplete_*` transitional
  items used by the MFFS `sequenced_assembly` chains (`60-mffs.js`). If you add a sequenced_assembly chain,
  register its in-progress item here.

## 4. Conventions & guardrails (honor these)
- **Gate by complexity, not uniformly.** Simple/bulk gear → one light part gate (a pressed sheet). Endgame
  machines → real Create **methods** (`mechanical_crafting` off the Mechanical Crafter, or multi-stage
  `sequenced_assembly`). Northstar/MFFS are the reference for depth; don't settle for the cheapest gate on a flagship.
- **Keep difficulty comparable to the original.** (Exception: TaCZ guns are deliberately hard — not in this PR.)
- **One gate per tier** — don't stack requirements within a tier.
- **Decoration stays vanilla-craftable** — never Create-gate candle holders, slabs, furniture, etc.
- **Don't over-gate magic** — it routes through its own apparatus (that's PR #75's domain, additively).
- **Comment the original.** Every swap keeps the original ingredients as an `// orig:` comment so review can
  catch accidental easier/harder shifts (e.g. don't silently drop a Totem-of-Undying gate).
- **Additive / never strand an item.** Pair every `event.remove` with a Create replacement.
- **Cross-mod synergy (TaCZ style):** flagship devices may source real components from sibling mods
  (`create_new_age:copper_circuit`, `createaddition:copper_wire`, `galosphere:*_shard`, `create:propeller`)
  — every ingredient *thematically* justified, no filler.

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
4. **`node --check`** the file. **Run `packwiz refresh`** (binary: `go install github.com/packwiz/packwiz@latest`)
   and commit `index.toml`/`pack.toml` — the `pr-checks.yml` "packwiz index" job fails otherwise.
5. Update the ledger/triage in `docs/RECIPES.md`.

## 6. What's left (to finish/merge #62)
- **In-game playtest (the only real verification).** For each changed item: JEI/EMI shows the new recipe,
  the original is gone, no recipe errors in the log, cost feels comparable. Highest-risk checks:
  - `05-metals.js`: steel only craftable via Create (samurai blast / mffs smelt gone; TFMG/Ironworks/CBC paths remain).
  - MFFS `60`: the `sequenced_assembly` chains stage correctly on Mechanical Crafters (intermediates from `01-…`).
  - MineColonies `98`: quarries craft with the in-grid `structurize:sceptergold` stamp preserved.
  - Polymorph flags no recipe conflicts on changed outputs.
- **Maintainer scope calls** still open (not coherence skips): **umapyoi** (cosmetic — see #60). MineColonies
  quarries already done; Structurize confirmed utility (no change).
- **#17 leftover**: "death note" — no craftable recipe found in any installed mod; needs an item pointer if one exists.
- Decide ordering vs **PR #75** (rebase #75 to main after this merges; it replaces `33-magic-web.js`).

## 7. Pointers
- Design + full triage + deliberately-not-gated ledger: `docs/RECIPES.md`.
- Digests: `tools/mod-data/recipes/*.txt` (ground truth). Loot: `tools/mod-data/loot/*.txt`.
- Wider weave roadmap (beyond Create): `docs/WEAVE-HANDOFF.md`, `docs/INTEGRATION-BRAINSTORM.md`.
- Related issues: #17 (recipes to change), #51 (meadow cheese — closed by `99`), #56/#58 (eco ore-gen + Blockchain).
