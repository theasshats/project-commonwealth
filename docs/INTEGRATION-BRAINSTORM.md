# Making every mod feel intentional — integration brainstorm

> Goal: no mod should feel "thrown in." Every mod should anchor to at least one **pillar** and connect
> to the others through a deliberate hook. This is the ideas backlog behind the recipe weave (PR #62/#75)
> and the Arcana mod (PR #80). Pick from the prioritized list at the bottom.

## The five pillars (the anchors)
1. **Create spine** — "made through Create." (Tech mods: largely done — PR #62.)
2. **Magic web** — Ars Nouveau + Iron's spine, occult branch, Galosphere as connective reagent.
   (Recipes PR #75 + the Arcana mod: Attunement Font, spell-power crossover, soul reaping.)
3. **Eco-economy** — Numismatics currency, scarce gated ore-gen, Create: Blockchain, Trading Floor,
   Better Villagers, **Bountiful** bounties. *Currently the most underused pillar — and the highest-leverage
   one, because a trade/bounty layer makes dozens of content mods purposeful at once.*
4. **Aeronautics & logistics** — Create Aeronautics (+compat), Steam'n'Rails / Threaded Trains, Mobile
   Packages, Drones, Astikor Carts, the flight ladder (gliders → jetpack → ships).
5. **Survival & seasons** — Serene Seasons, Spice of Life (×2), Cold Sweat, the Farmer's Delight / Let's Do
   food constellation.

## Per-category strategy (the "thrown in" feeling, fixed)

### Mob mods (~17 — the worst offenders for feeling random)
Three intentional hooks, applied per mod by tier:
- **Drops → systems.** Generalize the Arcana "soul reaping" pattern: notable mob drops feed a pillar.
  (Grimoire of Gaia / Mowzie's already feed the magic web.) Alex's Mobs / Naturalist drops → cooking &
  economy; undead/dark mobs → occult essence; insectoid (ArPhEx) → alchemy reagents.
- **Spawns → region gating.** Each mob mod's spawns bound to intentional biomes/structures (config spawn
  weights + structure spawns). Doubles as the **#42 TPS** fix — intentional density, not 17 mods all
  spawning everywhere.
- **Bosses → progression keystones.** Cataclysm / Bosses of Mass Destruction / End Remastered / Valarian
  Conquest bosses drop a material that *gates an endgame* (a top-tier Create machine part, a flight-ship
  upgrade, a spellcasting capstone). Makes bosses matter beyond trophies — and ties combat mods to the
  tech/magic/flight pillars.

### Adventure / structures
- **Structure loot = the only source** of a needed keystone (so exploring is required progression, not
  optional flavor). Towns & Towers / When Dungeons Arise / YUNG's / Dungeons & Taverns / Stoneholm.
- **Themed placement** — structures spawn in biomes that match them (sparsestructures + biome modifiers).
- **Tide** (fishing) → food + economy: rare fish are trade goods / cooking inputs, not a dead-end.

### Eco-economy (the connective tissue — build this and a dozen mods light up)
- **Numismatics vendors + Better Villagers** that *buy* mob/adventure drops and *sell* structure loot →
  every content mod feeds one economy.
- **Bountiful** bounty pools target the mob mods → a concrete reason to fight each one.
- **Blockchain / Trading Floor** as the money sinks (already gated per #58).
- Net effect: "why is this mob here?" → "it's a bounty target and its drop sells/crafts into X."

### Aeronautics & logistics
- **Flight ladder** as real progression: glider (early) → jetpack (mid, backtank-gated) → Aeronautics ship
  (late). Don't let them be parallel side-grades.
- **Logistics layer**: Drones / Mobile Packages / trains as the automation transport for Create factories
  and the economy (deliver goods to vendors).
- Extend **aeronauticscompat** coverage as third-party mods misbehave on ships.

### Survival & seasons (makes the food sprawl intentional)
- **Serene Seasons × Spice of Life × Cold Sweat** = one loop: seasonal crops, diet diversity matters,
  temperature pushes Create heating/cooling. The dozens of food/Let's-Do mods become "the ingredients
  that feed the diversity system," not random snacks.

## Mechanisms toolbox (how each idea ships)
- **KubeJS recipes** — material/recipe weave (done for tech + magic essences).
- **Arcana mod (code)** — events / attributes / capabilities. The soul-reaping pattern generalizes (below).
- **Numismatics trades + Bountiful pools** — datapack/config; the cheapest way to weave many mods.
- **Worldgen biome modifiers + structure sets** — datapack; region gating & themed placement.
- **Loot injection** — datapack/`LootTableLoadEvent`; add keystones/economy items to structure & mob loot.
- **Config** — spawn weights, boss difficulty, gating toggles.

## Prioritized next builds (highest "intentional" leverage first)
1. **Generalize soul-reaping into a data-driven "drop bridge"** in the Arcana mod: a config/JSON table of
   `{mob namespace or tag → drop item + chance}`, so weaving *any* isolated mob mod is one data entry, not
   new code. Turns the per-mod hardcode into a scalable system. **(Small, extends the live mod, big reach.)**
2. **Eco-economy connective layer** — Numismatics/Better-Villagers trades + Bountiful pools for mob &
   adventure drops. One system → dozens of mods feel purposeful. **(Datapack-heavy, very high reach.)**
3. **Boss → keystone progression** — pick 3–4 bosses (Cataclysm, BOMD, End Remastered, Valarian) whose
   drops gate a Create / flight / magic capstone. **(Ties combat mods to the other pillars.)**
4. **Survival-food cohesion** — Serene Seasons + Spice of Life loop config.
5. **Flight-ladder tiering** — gate jetpack/ship behind the glider/backtank line.

> Cross-cutting principle: prefer **one system that absorbs many mods** (the economy layer, the drop-bridge
> table) over per-mod bespoke hooks — it scales, and it's how "intentional" stays maintainable across 356 mods.
