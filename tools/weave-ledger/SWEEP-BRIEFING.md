# Dossier sweep — agent briefing (READ FIRST)

You are filling in **per-mod weave dossiers** for the Derpack X modpack (Minecraft 1.21.1 / NeoForge, a
cooperative Create pack). The goal of the whole project: the pack reads as **one driving causal loop**, not
many clusters — the *Eco*-style **scarcity → pressure → production → economy → back** (canonical model:
`docs/SYSTEMS.md`). Every mod should anchor **≥2** places on that loop. Your job is the *understanding*
layer that later weaving depends on. Do it grounded and concise. **Do not author any recipes.**

## Your task
For **every** mod namespace listed in your batch file, open `tools/mod-data/dossiers/<ns>.md` and fill the
fields marked `TODO` (everything **above** the `AUTO-DIGEST-FACTS` line). The facts **below** that line are
jar-grounded — use them; **never edit below the line.** Then set `status:`.

## The loop's systems — anchor to ≥1, ideally 2 (don't count systems, read the loop — `docs/SYSTEMS.md`)
The systems are not flat peers; they form a loop. A mod anchors somewhere on it:
- **production** — **Create** (tech spine, made-through-Create) or **magic** (Ars Nouveau / Iron's
  Spellbooks / Occultism / Forbidden Arcanus). The *makers*.
- **pressure** — **survival**: Serene Seasons × Cold Sweat × **Diet – AppleSeed** (diet variety) food;
  the hostile/dangerous world (mobs, bosses, perilous biomes). The demand that drives production.
- **economy** — **Numismatics** coins + trade (sellable goods, bounties), **and its logistics/aeronautics
  arm** (Create Aeronautics ships/planes/trains/drones — distribution of *matter*). The distribution stage.
Under it: **scarcity** (regional ore-gen) is the foundation; **MineColonies + boss drops** are cross-cutting
production routes. Tag anchors with the labels `create / magic / economy / aeronautics / survival`
(`aeronautics` = the economy's logistics arm). The natural 2nd anchor is usually *something you produce that
pressure demands and the economy moves.* Sanctioned **support roles** (a valid anchor, need no weave):
library/API, performance, QoL, client-only UI, decoration palette, curated friend-group flavor.

## THE KEY IDEA — methods are resources (fill the `methods` block well)
A mod is a bag of items **AND methods** (machines, rituals, infusions, processing types). The strongest
weave is **"route material X *through* mod Y's method"** — e.g. a gem refined in Ars's Imbuement Chamber, a
drop transmuted in Occultism's Spirit Fire, a crop run through a fermentation/cooking method. The dossier's
`registered recipe-types` line is already auto-filled (jar truth) — your job is the **non-recipe mechanics**
(auras, on-kill effects, growth, multiblock behaviors, spell/ritual effects not expressed as a recipe type)
and **consumes/outputs** (what foreign material this mod's methods could accept or feed — the join key for
finding weaves).

## Motif vocabulary — use these IDs in `2nd-anchor candidates` (prefer method-routings)
M-01 Arcane currency (Ars source) · M-02 Mob-drop reagent sink · M-03 Create ore-doubling (crushing) ·
M-04 Create recycles deco (crushing) · M-05 Native-method gating · M-06 Sequenced-assembly keystone ·
M-07 Attunement catalyst (Galosphere shards) · M-08 Coin from processed scarcity · M-09 Luxury good→coin ·
M-10 Arcane infusion pull (Ars imbuement / Forbidden Arcanus) · M-11 Ritual/transmutation sink (Occultism
spirit_fire/ritual) · M-12 Processing-chain pull (farmersdelight/extradelight/create milling). **The
registry now runs M-01..M-24** (also fuel→propulsion, boss-key unlock, seasonal/lunar reagent, FE-charging,
the aeronautics build/drivetrain seams) — full list + each motif's loop-seam: `docs/WEAVE-LEDGER.md`.
Methods you can route through: `tools/weave-ledger/methods-palette.md`.

## How to research (one mod at a time)
- **WebSearch** the mod by name + "minecraft mod" (use the jar name in the dossier for the exact mod;
  many are "Let's Do", "Create: X", "YUNG's", etc.). **WebFetch** the Modrinth/CurseForge/wiki page when a
  result looks authoritative for a crisp summary.
- **Grounding rule (hard):** every content claim must trace to either a digest line (already in the file)
  or a **source URL** you put in `sources`. If the web yields nothing reliable, leave the judgment fields
  brief/`TODO` and set `status: UNVERIFIED`. **Do not invent contents or mechanics.**
- **Fast-path obvious support mods** (libraries, APIs, perf, client UI, pure deco): one-line + `vibe` +
  `anchors: support (library/perf/QoL/client)` + `2nd-anchor candidates: none — support role` + a Modrinth
  URL → `status: VERIFIED`. Don't over-research these. Spend your effort on **content** mods (blocks,
  items, mobs, food, magic, tech, machines).

## Filling the fields
- `one-line` — what it is/does, one sentence.
- `vibe` — theme/aesthetic (arcane-scholarly, rustic-agrarian, industrial, eldritch, whimsical…).
- `signature` — the 3–6 items/blocks a player actually cares about (pick real ids from the facts below the line).
- `non-recipe mechanics` / `consumes / outputs` — see "methods are resources" above.
- `anchors` — which loop system(s) it ALREADY feeds + the count, e.g. `magic (1)` or `survival, economy (2)`.
- `2nd-anchor candidates` — for mods at <2 anchors, the most coherent ways to add an anchor, **as a
  method-routing where possible**, each tagged STRONG/MED/WEAK and citing a motif. If nothing is coherent
  (e.g. a vanilla-style mob mod), write `none — leave` (do NOT force an edge — forced edges are the failure
  mode we're avoiding).
- `how-packs-integrate` — one line on how curated packs commonly wire it, with a URL if found.
- `sources` — the URLs you used.
- `status` — `VERIFIED` once filled + sourced; else `UNVERIFIED`.

## Style
Terse. A dossier is a card, not an essay. No emoji. Keep each filled field to 1–2 lines. Replace the
`TODO`/placeholder lines; keep the field labels. Edit **only above** the `AUTO-DIGEST-FACTS` line.

When done, return a compact summary: one line per mod — `ns: anchors(N) | 2nd-anchor candidate or 'leave' | status`.
