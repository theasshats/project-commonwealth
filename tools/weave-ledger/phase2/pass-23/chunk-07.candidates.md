# Phase 2 candidates — chunk-07

## minecolonies_tweaks   [anchors: support/QoL (1)]

Tag-harmonization glue; its OUTPUT is the `c:crops/*` / `c:foods/*` tag set that enables food-web weaves
elsewhere, not a content node in its own right. Nothing to route through a method.

- LEAVE — pure tag/QoL support role; it ENABLES food-web weaves on other mods by unifying crop tags, but has
  no consumes/outputs of its own and no items that could anchor a second system. Analogous to lootjs for loot.
  REWORK: not applicable (1 anchor, no existing weave connections).

---

## tfmg   [anchors: Create (1)]

Power-read: steel, diesel/gasoline, and a Voltage power grid — all mid-to-endgame outputs. The Distillation Tower
is a flagged mid-game wall. Fuels are already reagent-owned as Aeronautics propulsion (M-13). Steel is mid
(behind the Blast Furnace chain).

- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (fuel fractions) | via: TFMG Distillation → Aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: "refine crude oil in the Distillation Tower, fuel the airship's combustion engine — the whole fuel supply line is one Create chain"
- from: tfmg:steel_ingot (c:ingots/steel) | via: fabrication into structural plate → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: "a steel-framed hull isn't made of brass — TFMG's blast-furnace steel becomes the structural spine of heavier airship frames"
- from: tfmg:steel_ingot → Aeronautics propeller/engine block | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: "combustion engine components need steel shafts and flywheels — TFMG supplies the drivetrain"
- from: tfmg:steel_ingot / tfmg:aluminum_ingot (scarce processed metals) | via: numismatics vendor price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "a steel ingot out of the Blast Furnace is real effort — mint it into coin; the industrial tier has its own trade value"
- from: tfmg:gasoline / tfmg:diesel (refined fuel) | via: numismatics vendor (fuel-can trade) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "fuel is a high-effort processed good with a captive market (every ship pilot needs it) — sell cans at the trading floor"
- from: tfmg flamethrower / napalm weaponry | via: survival combat | to: survival | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no-motif; weapon combat does not route the loop (scarcity→pressure→production→economy); forced combat-flavor edge with no motif match
- REWORK: tfmg is already mostly well-mapped (M-13 fuels noted in dossier). The aeronautics structural/drivetrain seams (M-23/M-24) and economy seam (M-08/M-09) are the missing second anchors. Once accepted those four weaves land tfmg solidly on Create + aeronautics + economy — 3 anchors.

---

## createnuclear   [anchors: Create (1)]

Power-read: uranium fuel chain is deep (raw ore → crush → mix/press → enrichment → fuel); the reactor is clearly endgame (massive SU). Steel + lead are shared mid-tier metals (c:ingots/steel, c:ingots/lead). `createnuclear:enriched` recipe type is a live connective method.

- from: createnuclear:uranium_ore / processed uranium (scarce regional ore) | via: create:crushing → coin via numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "uranium is a rare regional ore — processed and minted, it's the pack's most valuable coin trade good; reactor-grade fuel commands a premium"
- from: createnuclear:steel_ingot / createnuclear:lead_ingot (c-tagged) | via: numismatics vendor price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "reactor-processed lead/steel flows into the Numismatics trade tier as high-value industrial metals"
- from: createnuclear:autunite (glowing mineral) | via: ars_nouveau:imbuement (glow-attunement input) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: "radioactive autunite pulses with arcane potential — infuse it to unlock a high-tier magic reagent; the atomic and the arcane share the same glow"
- from: radiation hazard + anti_radiation armor | via: survival/Cold Sweat hazard hook | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif; Cold Sweat is temperature-not-radiation; there is no existing motif for a pure hazard-gear layer; the structural pressure comes from scarcity, not a new radiation hazard system
- from: createnuclear:enriched_soul_soil | via: create:haunting (soul-fire bridge) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: "haunting the enriched soul soil in Create's soul-fire process transmutes it into a charged soul-essence — atomic enrichment and soul energy are two flavors of the same underlying power"
- REWORK: createnuclear has no existing weave connections. The four ACCEPTs above add economy (M-08 ×2) and magic (M-10, M-19), landing it on Create + economy + magic — solid 3-anchor web.

---

## bettermineshafts   [anchors: survival (1)]

Structure/worldgen overhaul only; loot=no (uses vanilla loot). No items, no methods.

- LEAVE — zero-surface structure overhaul; uses vanilla mineshaft loot tables with no new items or methods. No hook for a second anchor without forcing vanilla loot-seed, which would belong on vanilla content, not this mod.

---

## createtreadmill   [anchors: Create (1)]

Two blocks: a Treadmill (player-powered SU) and a Maid Motor (TLM Soul Orb/Photo input). Low-tier power source; the TLM crossover is whimsical flavor.

- from: createtreadmill:treadmill (player effort → SU) | via: numismatics vendor (players sell SU-minutes? no — can't price effort) | to: economy | motif: no-motif | verdict: REJECT | reason: no-motif; player labor is not a tradeable material; no method to route it into the economy loop
- from: touhou_little_maid Soul Orb/Photo → Maid Motor | via: magic (soul items as spirit reagents) | to: magic | motif: M-19 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — TLM Soul Orbs are kawaii/anime flavor, not the pack's Occultism/Ars soul-spirit framework; routing them through M-19 (haunting) mixes lore registers awkwardly; no player would say "of course"
- LEAVE — the treadmill itself earns no clean 2nd anchor beyond its Create role. The TLM crossover is curated friend-group flavor, not a pillar node. The mod is a novelty power source; forcing a weave adds noise.

---

## woodworks   [anchors: survival (1)]

Wood decoration + Sawmill block. Mid-tier blocks (crafted from logs); purely deco.

- from: woodworks:*_chest / *_bookshelf / *_boards (wood-deco blocks) | via: create:crushing → planks/sawdust + xp nugget (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: "every wood-deco block can be reclaimed through a Create millstone — nothing is wasted on a contraption; plank dust settles into the hopper"
- from: woodworks:*_sawmill outputs | via: woodworks:sawmill (overlap with create:cutting web) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill and create:cutting both convert logs→deco; giving both the same outputs makes one redundant; the cutting weave adds no new node to the loop — it's a recipe-cosmetic, not a loop advance. M-04 (crush-reclaim) is the cleaner single weave
- REWORK: not applicable (1 anchor, no existing connections). M-04 ACCEPT lifts woodworks to survival + Create.

---

## numismatics   [anchors: economy, Create (2)]

The economy keystone. Already well-connected. Direction of weaving is foreign goods → numismatics, not from it.

- OK — connections sound. numismatics is the HUB destination (M-08/M-09 inbound edges); it has no outgoing weaves to propose because coins are the terminal node of the production→economy step. The dossier correctly notes "don't add an outgoing edge." Two anchors (economy + Create) is the appropriate ceiling.

---

## everycomp   [anchors: support (1)]

Runtime block-recipe generator; no items/blocks of its own. Its outputs ride host mods' recipes.

- LEAVE — support generator; any weaving belongs on the host mods it bridges (Create, Macaw's, Woodworks), not on everycomp itself. Zero independent content surface.

---

## copycats   [anchors: Create (2)]

Already noted as Create-decoration; dossier marks it ≥2 anchors (Create + decoration-adjacent). Zinc-built, Create-dependent.

- from: copycats:copycat_slope / copycat_panel (zinc-built deco shapes) | via: create:crushing → zinc dust/nugget + xp nugget (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: "even copycat panels feed back into the Create zinc cycle through the millstone — the pack's deco isn't a dead end"
- from: copycats copycat blocks (structural/architectural forms) | via: aeronautics hull skin (copycat texture = hull panelling) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: copycats are cosmetic skin containers, not structural materials; using them as aeronautics structural inputs (M-23) conflates aesthetics with load-bearing hull; a copycat panel is not a hull plate — tone mismatch for the structural seam
- REWORK: dossier says "Create ≥2 anchors" but the stated 2nd anchor is "decoration-adjacent" (not a clean system label). The M-04 crush-reclaim ACCEPT tightens the Create anchor without forcing a third pillar. OK — connections sound once M-04 is added.

---

## companion   [anchors: support (1)]

Behavior-only pet-safety mod. No items, no methods.

- LEAVE — pure behavior/QoL mod; no items, no methods, no material throughput. Nothing to weave.

---

## fogoverrides   [anchors: support (1)]

Client-side fog config. No items, no methods.

- LEAVE — visual/client config mod; cosmetic only. No content surface.

---

## steves_lava_chicken_music_disc   [anchors: support (1)]

One meme music disc. Forcing a coin/recipe edge would be noise.

- LEAVE — single flavor music disc; no method or material surface. A loot-seed into a structure chest could technically work (M-14-adjacent?) but a joke disc as an economy item is noise, not signal.

---

## towntalk   [anchors: support (1)]

MineColonies audio flavor; no items, no methods.

- LEAVE — audio-only flavor add-on for MineColonies; no items, no recipe methods, no material throughput. Rides on MineColonies' own weaves.

---

## createaddoncompatibility   [anchors: support (1)]

Tag-unification glue for Create addons (plastic, lubricant, copycats). No items of its own.

- LEAVE — support/compat role; it enforces tag priorities via Almost Unified but registers no items and has no content surface. The one `tfmg:distillation` recipe it ships belongs to TFMG's weave pass, not to this mod. Note: the CLAUDE.md galosphere palladium/silver warning applies — verify this mod's unify.json never touches `galosphere:*silver*`.

---

## blockui   [anchors: support (1)]

UI library; no items, no methods.

- LEAVE — pure UI API; hard dependency of MineColonies, no player-facing content.

---

## mcwstairs   [anchors: support (1)]

Macaw's Stairs — 224 stair/railing/platform blocks across wood + stone types. Deco-only.

- from: mcwstairs:*_balcony / *_railing / *_platform (stone/brick variants) | via: create:crushing → raw/gravel + xp nugget (lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: "a broken balcony railing feeds the millstone — stone deco recycles back to gravel and a sliver of XP; nothing goes to waste on a Create build site"
- from: mcwstairs:*_balcony / *_railing (wood variants) | via: create:crushing → planks/sawdust + xp nugget | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: same reclaim-loop logic as above but for wood variants
- Note: this weave is best done as a **wholesale deco-family pass** (all Macaw's mods at once) to avoid per-mod recipe noise; flag for a batch M-04 pass in Phase 3.
- REWORK: not applicable (1 anchor, no existing connections). M-04 ACCEPTs lift mcwstairs to survival + Create.

---

## followersteleporttoo   [anchors: support (1)]

Pet teleport QoL behavior mod. No items.

- LEAVE — behavior-only QoL fix; no items, no methods, no material surface. Overlaps slightly with `companion` (both are pet-safety mods); verify no redundancy at curation time, but no weave is possible or needed.

---

## create_central_kitchen   [anchors: Create, survival (2)]

Already 2 anchors. Dossier notes optional 3rd (economy via M-09) flagged as weak.

- from: create_central_kitchen automated feast/dish outputs | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "a contraption that mass-produces gourmet pies and feasts sells them at the Trading Floor — automated food production is the pack's most accessible luxury-goods business"
- REWORK: OK — existing Create + survival connections are sound (it IS the Create↔FarmersDelight bridge by design). The M-09 ACCEPT adds economy as a genuine 3rd anchor — the loop reads production (Create automation) → finished luxury food → economy (Numismatics sale).

---

## create_ltab-3.9.2   [anchors: Create, survival (2)]

Structure worldgen with loot tables (loot=yes). Already 2 anchors.

- from: create_ltab structure loot tables | via: loot-table seeding — seed numismatics coin (spur/cog) into structure chests | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: "a Create-themed ruin holds a forgotten cog — discovery rewards the explorer with the pack's currency, tying worldgen to the trade economy"
- from: create_ltab structure loot tables | via: loot-table seeding — seed magic reagent (ars_nouveau:source_gem, small) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: "the ruins of an industrial past hold scattered arcane shards — exploration bridges the Create and magic pillars"
- REWORK: OK — Create + survival anchors are sound. The two loot-seed ACCEPTs add economy (M-08) and magic (M-02), lifting to 4 anchors — broad reach for a worldgen mod, which is appropriate for a structure that players encounter early and repeatedly.

---

## kotlinforforge-5.11.0-all   [anchors: support (1)]

Kotlin language adapter; no player-facing content.

- LEAVE — pure language loader / runtime shim; registers no items, no methods, no world content. Required dependency of Kotlin-based mods; nothing to weave.

---

== CHUNK COMPLETE ==
