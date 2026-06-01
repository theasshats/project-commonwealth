# Derpack X — Weave & Integration Handoff

> **For a fresh Claude instance.** This is a self-contained brief to continue the work of making every
> mod in Derpack X feel *intentional* (anchored to a pillar, connected to the others), not "thrown in."
> Read this top-to-bottom before acting. It carries the context, the conventions already established,
> the API patterns verified this session (so you don't re-derive them), and a prioritized backlog.
> Companion docs: `docs/RECIPES.md` (the Create + magic recipe weave), `docs/INTEGRATION-BRAINSTORM.md`
> (the short version of the ideas), `docs/ARCANA-BRIDGE-MOD.md` (the helper-mod design).

---
## 0. How to use this doc
- Each backlog item lists **mechanism**, **concrete targets/ids**, and **effort/risk**. Pick from the
  prioritized list (§5). Prefer **one system that absorbs many mods** over per-mod bespoke hooks.
- Everything is **additive** unless a `remove`+replace is paired. Never break acquisition of an item.
- You can't test in-game (KubeJS + the mod are headless here) — lean on **CI** (the mod compiles in
  `build-arcana.yml`; recipes are JSON/JS-linted by `pr-checks.yml`) and clearly flag what needs a playtest.

## 1. Pack context & the five pillars
Minecraft **1.21.1 / NeoForge 21.1.228**, ~356 mods, packwiz-distributed. Every mod should anchor to ≥1:
1. **Create spine** — "made through Create" (tech mods: done, PR #62).
2. **Magic web** — Ars Nouveau + Iron's Spellbooks spine, Occultism branch, **Galosphere** allurite/
   lumiere as connective reagent (recipes PR #75 + the **Arcana** helper mod PR #80).
3. **Eco-economy** — Numismatics, Create: Blockchain, Trading Floor, Better Villagers, **Bountiful**.
   *Most underused, highest leverage — a trade/bounty layer makes dozens of content mods purposeful at once.*
4. **Aeronautics & logistics** — Create Aeronautics (+compat), Steam'n'Rails/Threaded Trains, Mobile
   Packages, Drones/Buddy Drones, Astikor Carts, flight ladder (gliders → jetpack → ships).
5. **Survival & seasons** — Serene Seasons, Spice of Life (×2), Cold Sweat, the Farmer's Delight / Let's Do food set.

## 2. Current state (what exists)
- **PR #62** `claude/recipe-overhaul` — full Create recipe weave (all tech mods). Green, rebased on main.
- **PR #75** `claude/magic-web` (stacked on #62) — magic essence bridges (`kubejs/server_scripts/recipes/
  33-magic-web-*.js`): Ars↔Iron's, Occultism via `occultengineering:spirit_solution`, Born-in-Chaos feeder,
  Gaia/Mowzie's drop sinks, Galosphere catalyst. Green.
- **PR #80** `claude/arcana-mod` — the **Arcana** helper mod (`mods-src/derpack-arcana/`): P1 Attunement
  Font (Ars Source→Iron's mana block), P2 spell-power crossover, P3 Soul Reaping (Born-in-Chaos kills →
  Occultism essence). Compiles green. **In-game testing pending** (mana sync, balance, Ars event bus).
- Branches are stacked: #75 on #62; #80 off `main`. If #62 merges, rebase #75 to main.

## 3. Established conventions & VERIFIED patterns (do not re-derive)
### Pulling mod jars to verify APIs / item ids / recipe schemas
- **CurseForge** (mode `metadata:curseforge` in the `.pw.toml`): URL = `https://mediafilez.forgecdn.net/
  files/<first-4-digits-of-fileid>/<rest-no-leading-zero>/<filename>`. E.g. Ars file `7764018` →
  `.../files/7764/18/ars_nouveau-1.21.1-5.11.3.jar`.
- **Modrinth**: the `url =` is in the `.pw.toml` directly.
- Inspect with `unzip -Z1`, `unzip -p`, and `javap -cp jar <fqcn>` (JDK 21 is on PATH). Clean up jars after.
### Verified recipe schemas (1.21.1)
- `ars_nouveau:imbuement` = `{type, input:{item|tag}, output:{count,id}, source:<int>, pedestalItems:[...]}`.
- `ars_nouveau:enchanting_apparatus` = `{type, reagent:{item}, pedestalItems:[...], result:{count,id},
  sourceCost:<int>, keepNbtOfReagent:<bool>}`.
- `occultism:spirit_fire` = `{type, ingredient:{item}, result:{count,id}}`.
- `occultengineering:spirit_solution` is a **FLUID**, minted by *heated* `create:mixing` (mb amounts).
- `occultism:ritual` = `{activation_item, duration, entity_to_sacrifice:{tag}, entity_to_summon,
  ingredients:[tag|item], pentacle_id, result, ritual_dummy, ritual_type, ...}` — rituals consume item
  ingredients + sacrifice a mob by **tag**. There is **no clean ritual-completion event API**.
### KubeJS idioms (used across the recipe weave)
- `event.recipes.create.mixing/compacting/pressing(...)` (+ `.heated()`) — proven Create builders.
- `event.custom({...raw json...})` — for modded recipe types (Ars/occultism) using the schemas above.
- `event.shaped/shapeless('2x mod:item', [ingredients])` — vanilla crafting; `#c:tag` ingredients OK.
- `event.remove({id})` (precise) or `({output})` (broad). `almost-unified` collapses `#c:` duplicates.
- After ANY pack change you must run `packwiz refresh` (binary: `go install github.com/packwiz/packwiz@latest`)
  and commit `index.toml`/`pack.toml`, or the `pr-checks.yml` "packwiz index" job fails. `mods-src/` is
  in `.packwizignore` (it's mod source, not pack content).
### Arcana mod — soft-dep pattern (reuse for every code integration)
- Each feature lives in `com.derpack.arcana.bridge.*` and is registered ONLY inside a
  `Config.<toggle>.get() && DerpackArcana.loaded("modid")` guard in the `@Mod` constructor, so a class
  that references another mod's types never classloads when that mod is absent.
- **Zero-compile-dep pattern** (P3 Soul Reaping): reference other mods purely by string — entity/item
  registry lookups (`BuiltInRegistries.ITEM.get(ResourceLocation.fromNamespaceAndPath(...))`, namespace
  checks on `entity.getType()`) + a vanilla event (`LivingDropsEvent`). No cursemaven dep needed.
- **Compile-dep pattern** (P1/P2): add `compileOnly "curse.maven:<slug>-<projectid>:<fileid>"` with the
  `https://cursemaven.com` repo, then call the mod's API directly (e.g. `MagicData.getPlayerMagicData`,
  `SourceUtil.takeSourceWithParticles`, Ars/Iron's `SpellDamageEvent`).
### Verified API entry points (already used)
- Ars source: `com.hollingsworth.arsnouveau.api.util.SourceUtil.takeSourceWithParticles(pos, level, range, amount)`.
- Ars spell dmg event: `com.hollingsworth.arsnouveau.api.event.SpellDamageEvent` (public `caster`, `damage`).
- Ars attribute: `com.hollingsworth.arsnouveau.api.perk.PerkAttributes.SPELL_DAMAGE_BONUS` (Holder<Attribute>).
- Iron's mana: `io.redspace.ironsspellbooks.api.magic.MagicData.getPlayerMagicData(LivingEntity).addMana(float)`.
- Iron's spell dmg event: `io.redspace.ironsspellbooks.api.events.SpellDamageEvent` (`getAmount/setAmount`,
  caster via `getSpellDamageSource().getEntity()`).
- Iron's attribute: `io.redspace.ironsspellbooks.api.registry.AttributeRegistry.SPELL_POWER` (Holder<Attribute>).

## 4. The integration backlog (brainstorm — concrete)
### A. Mob mods (~17) — the worst "thrown in" offenders
- **Generalized drop-bridge** (extends Arcana P3): a data-driven table `{mob namespace OR entity tag →
  drop item + chance + optional player-kill-only}` read from config or a JSON datapack the mod loads, so
  weaving *any* mob mod = one entry. Targets: alexsmobs, naturalist, mutantmonsters, born_in_chaos,
  rottencreatures, kobolds, ribbits, friendsandfoes, ArPhEx, illagerinvasion, creeperoverhaul. Map drops
  to a thematic pillar item (dark/undead → `occultism:demons_dream_essence`; beast → cooking/leather;
  insectoid → alchemy reagent; humanoid → `numismatics` coin/trophy).
- **Spawn region-gating**: per-mod spawn weight + biome config so each mob has a *home* (also fixes the
  **#42 TPS** density problem). Mechanism: mod configs + `neoforge` biome modifiers / spawn data.
- **Boss → keystone progression**: Cataclysm, Bosses of Mass Destruction, End Remastered, Valarian
  Conquest, Grimoire of Gaia minibosses drop a material that **gates an endgame** in another pillar
  (a top Create machine part, a flight-ship upgrade, a spell capstone). Ties combat → tech/magic/flight.

### B. Eco-economy (build this; a dozen mods light up at once)
- **Bountiful pools** that target each mob mod (bounty = "kill N of <mod mob>", reward coins/keystones).
  Datapack `data/bountiful/...` entries. Gives every mob a *reason to exist*.
- **Numismatics + Better Villagers + Trading Floor**: vendor trade tables that **buy** mob/adventure drops
  and **sell** structure-exclusive loot. Datapack/config. "Why is this drop here?" → "it sells / a vendor wants it."
- **Loot injection**: add Numismatics coins + the boss/structure keystones into adventure-structure loot
  tables (`LootTableLoadEvent` in Arcana, or datapack loot modifiers `neoforge:loot_table_modifier`).

### C. Aeronautics & logistics
- **Flight ladder**: gate `create_jetpack` behind a glider-tier item, and Aeronautics ship parts behind the
  jetpack tier — make them sequential, not parallel side-grades (KubeJS recipe edits).
- **Logistics layer**: Drones / Mobile Packages / trains as the transport that *delivers goods to vendors*
  and *feeds Create factories* — a quest/tutorial line could establish it.
- Extend **aeronauticscompat** coverage for any third-party mod that misbehaves on physics ships.

### D. Survival & seasons (makes the food sprawl intentional)
- One loop: **Serene Seasons** gates crop growth (seasonal modded crops) × **Spice of Life** rewards diet
  diversity (high-effort modded foods give bigger/longer bonuses) × **Cold Sweat** temperature ties to
  seasons/biomes and to Create heating/cooling gear. Configs + a couple of KubeJS food-property tweaks.

### E. Magic web — deeper (Arcana mod)
- **Create → Ars Source generator**: an Arcana block that converts Create rotational power (`getSpeed` on
  a kinetic BE / a stress unit) into Ars Source — a real energy bridge tech↔magic.
- **Modular Golems as Create labor**: golem upgrades from Create parts; or golems that operate/haul for
  Create (capability). Or keep the light "animated by source" tie already drafted.
- **DeeperDarker echo/sculk → occult**: echo shards as an occult reagent (recipe bridge), tying the deep-dark
  exploration tier into Occultism.

### F. Decoration / building — "available, not gated" is the intentional frame
- mcw-*, Supplementaries, Handcrafted, Copycats, Rechiseled, Domum Ornamentum (a MineColonies dep) are the
  **settlement/colony build palette**. Frame them around **MineColonies/Structurize** ("the toolkit for
  building your town"). No gating — intentionality = a cohesive aesthetic role, documented, maybe a
  creative/guide entry. Don't Create-gate decoration (established guardrail).

## 5. Prioritized execution order
1. **Generalized drop-bridge** in Arcana (data-driven mob→item). Small, extends the live mod, weaves all
   17 mob mods with one system. *Start here.*
2. **Eco-economy connective layer** — Bountiful pools + Numismatics/Better-Villagers trades for mob &
   adventure drops. Highest reach; datapack-heavy.
3. **Boss → keystone progression** — 3–4 bosses gate a capstone in another pillar.
4. **Survival-food cohesion** — seasons × spice-of-life × cold-sweat.
5. **Flight-ladder tiering**.

## 6. Guardrails (carried from this session — honor them)
- **Don't over-gate magic** — it routes through its own apparatus; bridges are additive, not taxes.
- **Keep difficulty comparable to originals** — *except* guns (TaCZ), which are deliberately hard.
- **Decoration stays vanilla-craftable** — don't Create-gate it.
- **Coherence over grind** — one gate per tier; thematically justified ingredients, no filler.
- **Additive bridges** — never break an item's existing acquisition.
- **One system absorbs many mods** — scales better than bespoke per-mod hooks across 356 mods.

## 7. Pointers
- Recipe weave files: `kubejs/server_scripts/recipes/*.js` (`00`–`99`, magic at `33-35`).
- Arcana mod: `mods-src/derpack-arcana/` (build via `build-arcana.yml`; `gradle build`).
- Docs: `docs/RECIPES.md`, `docs/ARCANA-BRIDGE-MOD.md`, `docs/INTEGRATION-BRAINSTORM.md`, this file.
- Issues: #42 (TPS/mob density — the spawn-gating work helps close it), #56/#58 (eco ore-gen + Blockchain),
  #17 (recipes to change), #60 (umapyoi keep/cut — the "does it fit the Eco direction?" test).
