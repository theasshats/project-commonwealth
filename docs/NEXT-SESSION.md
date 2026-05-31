# Next-session pickup prompt

Paste the block below to start the next Claude session. (Lives here so it survives the ephemeral sandbox.)

---

You're continuing **Derpack X** — a broad kitchen-sink survival modpack (MC 1.21.1 / NeoForge) unified
by a **Create-driven scarcity economy** (mine → process through Create → sell for Numismatics). A fresh
clone of `main` has only the tooling + ground-truth digest + older worldgen — **the current direction
and the active work live in open PR branches.** Read these first:

1. **Direction & plan — PR #61, branch `claude/modlist-audit`** (⚠️ NOT on `main` yet; held for zagwar's review):
   - `docs/ROADMAP.md` — the multi-phase plan, status, and which PR/branch each phase lives on. **Start here.**
   - `docs/DESIGN.md` → "**The design spine**" section, and the `CLAUDE.md` intro — the north star:
     *"does this plug into the Create spine, or bypass it?"*
   - `docs/MODLIST-AUDIT.md` — fit flags, duplicate-mechanic clusters, the two big open calls.
2. **Ground truth — on `main`:** `tools/mod-data/` (facts + recipe + loot indexes for 354 mods).
   **Grep these for exact recipes — never guess.** Regenerate via Actions ▸ "Ground-truth digest".

**Active work — recipe overhaul, PR #62 / branch `claude/recipe-overhaul`** (check this out to continue;
it also carries the digest and `docs/RECIPES.md`): route crafting through Create **parts + methods**,
**NOT a grind** (coherence over tedium). Done so far: the convention, the **metals foundation**
(steel → Create, auto-propagates via `#c:ingots/steel`), **Immersive Armors**, **Samurai Dynasty**.
**Next: continue per-mod from the digest — Modular Golems → Northstar → magic → storage.** For each:
read its file in `tools/mod-data/recipes/`, gate the metal/mechanical craftables behind Create parts,
leave organic/thematic ones alone, keep the original recipe as an `orig:` comment, and do **one commit +
one PR comment per mod** (the maintainer wants a per-mod record on #62).

**Hard constraints:**
- **Headless sandbox** — can't run Minecraft/KubeJS. Validate JS syntax (`node --check`) and JSON only;
  **everything needs an in-game playtest before merge** (issues #58 ore-gen, #59 guns).
- **`main` is branch-protected — work on branches and open PRs; never commit to `main`.**
- **Network:** GitHub reachable; Modrinth/CurseForge are **not** — jar ground truth comes from the digest
  or maintainer uploads.

**Don't assume — open decisions for the maintainers:** MineColonies auto-production gating; meme removals
(#45, umapyoi #60); duplicate-mechanic cleanups (#38, trees, moons, …). Ask before large/destructive changes.

**Other open PRs:** #56 ore-gen (20 veins + blockchain gate; playtest #58) · #55 guns (needs
`create_armorer-1.2.0.1.zip` mirrored to the `mod-mirror` release; playtest #59).
