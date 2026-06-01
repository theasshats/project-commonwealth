# Recipe Overhaul — "Made through Create"

> **Principle:** re-author recipes across the pack so crafting flows *through* Create — its
> **parts** and **methods** — weaving Create through every branch. **This is NOT a grind.** The bar
> is *coherence* ("of course you'd build this with Create parts"), never extra steps for their own sake.

## Guardrails (keeps it "Create-ified," not GregTech)
- **Gate by complexity, not uniformly.** Simple gear / shared components get a single light part
  gate; **complex / endgame machines should require real Create *methods*** — `mechanical_crafting`
  (forces the Mechanical Crafters multiblock) or `sequenced_assembly`, built from mechanisms,
  casings and electron tubes (incl. TFMG's endgame steel parts: `tfmg:steel_casing`,
  `tfmg:steel_mechanism`). Don't settle for the cheapest gate on a flagship machine. Northstar is
  the reference: trivial gear rides a pressed plate, but rocket stations / sealers / circuits go
  through `mechanical_crafting` + `sequenced_assembly`.
- One Create-part "gate" per tier is plenty — don't stack requirements *within a tier*.
- Keep yields fair for everyday gear; don't stretch a 1-step craft into five unless it warrants it.
- **Endgame / flagship machines SHOULD be multi-stage `sequenced_assembly` chains** (maintainer
  call — depth is wanted here, GregTech-leaning is OK *for endgame only*). The chain's in-progress
  item is a registered `derpack:incomplete_*` part (see `kubejs/startup_scripts/`) that Create
  cycles through `deploying`/`pressing` stages on the Mechanical Crafters. Everyday gear stays a
  single coherent gate — the heavy chains are the *reward-tier* ceiling, not the baseline.
- Ore→metal uses Create **crushing** (the ore-doubling players already like) — a *reward*, not a tax;
  the vanilla 1:1 smelt path stays.
- Never break a chain: if you `remove` a recipe, always add the Create replacement.
- **Comment the original.** Every swap keeps the original recipe's ingredients as an `orig:` comment
  (from the recipe digest) so review can weigh the author's intent and catch *accidental
  easier/harder* shifts — e.g. don't silently drop a Totem-of-Undying gate. (Digest = ingredients;
  exact shape/counts come from the jar when one's on hand.)

## Create "parts palette" (the recipe vocabulary)
Ingredients used to signal/gate tiers (verified in Create 6):
- **Tier-0 connective:** `create:andesite_alloy` — the universal "made with Create" marker
- **Shafts / cogs:** `create:shaft`, `create:cogwheel`, `create:large_cogwheel`
- **Sheets (pressed):** `create:iron_sheet`, `create:copper_sheet`, `create:brass_sheet`, `create:golden_sheet`
- **Casings:** `create:andesite_casing`, `create:copper_casing`, `create:brass_casing`
- **Tier-up gate:** `create:precision_mechanism`, `create:electron_tube`, `create:brass_ingot`
- **Cross-mod metals via tags:** `#c:ingots/<metal>`, `#c:plates/<metal>`, `#c:nuggets/<metal>`
  (`almost-unified` collapses duplicates, so tags are safe)
- **Higher metal tiers — already Create-made by addons, *use* don't rebuild:** bronze
  (`create_ironworks:bronze_ingot`/`_sheet`), steel (`#c:ingots/steel` — TFMG + Ironworks) and
  TFMG's steel parts (`tfmg:steel_mechanism`, `tfmg:steel_casing`, `tfmg:steel_cogwheel`), plus
  Create: Metalwork's molten-metal casting (`create:compacting` from molten buckets).

## Create "methods palette"
- `crushing` — ore → crushed (+byproduct): the ore-processing path
- `pressing` — ingot → sheet
- `mixing` — alloys / compounds (heated when the recipe needs it)
- `mechanical_crafting` — large multi-block crafts (marquee items)
- `deploying`, `filling` / `emptying`, `cutting`, `milling`, `compacting` — situational
- *reserved, sparing:* `sequenced_assembly` — special items only

## KubeJS mechanics
Files live in `kubejs/server_scripts/recipes/`, numbered for readability. Core pattern:
```js
ServerEvents.recipes(event => {
  event.remove({ output: 'somemod:fancy_gizmo' })           // kill the bypass recipe
  event.shaped('somemod:fancy_gizmo', ['SBS','BPB','SBS'], {  // re-add the Create way
    S: 'create:brass_sheet', B: '#c:ingots/brass', P: 'create:precision_mechanism'
  })
})
```
- Target by **tags** where possible so a change spans mods.
- `remove({ output })` kills all recipes for an item without needing its exact id.
- Verify in-game: JEI/EMI shows the new recipe; no recipe errors in the log.

## Scope & sequence (per-branch)
Each branch's key craftables get a Create-part gate or Create-method build:
1. **Metals & base materials — already Create-ified; leverage, don't rebuild.** Create (sheets,
   andesite_alloy), **Create: Metalwork** (molten-metal melting + `compacting`), **TFMG** (steel
   tier + sheets), and **Create: Ironworks** (bronze/steel + sheets) already route metal processing
   through Create. We *use* these parts as the gating vocabulary below — only add a missing
   pressing/crushing recipe if a specific pack metal lacks one. **The real work is steps 2–5.**
2. **Tools / armor / machines** — gate tier-ups behind `precision_mechanism` / sheets.
3. **Magic** (Ars, Iron's Spells, Occultism) — foci/altars want Create parts.
4. **Guns / vehicles** — TaCZ already routed via Immersive TaCZ; extend to Big Cannons / Aeronautics.
5. **Storage / QoL** — backpack & upgrade tiers behind Create parts.

Pure bypass-recipe removals happen alongside each branch.

## Deliberately NOT gated (reconsidered ledger)
These mods were re-examined against the ground-truth digest and **left vanilla on purpose**.
Recorded here so the calls aren't re-litigated; revisit only if the stated reason changes.

- **copperagebackport** — copper tools/armor/buttons are *starter tier* (and register under the
  `minecraft:` namespace). A Create press gate would **invert progression** — a grind on the
  cheapest gear. Tier-coherence wins.
- **Galosphere** — 271 recipes, ~all decoration (allurite/amethyst bricks via stonecutting →
  correctly vanilla). Its only "gear" (`burrow_anchor`, `chandelier`) is **palladium**, an
  exploration-tier metal; gating it inverts progression the same way copper does.
- **Alex's Mobs** — every device (`echolocator` = whale tooth + ambergris, `dimensional_carver` =
  void-worm parts, `blood_sprayer` = blood sac + proboscis) is built from **mob drops as the
  primary material**; metal is a minor binder. Create parts would be thematically incoherent.
- **companions** — the summon/Tesla items (`tesla_coil`, `arm_cannon`, `empty_puppet`) wrap
  found/dropped `*_block`/`*_arm` parts that **have no standalone recipe**; there's no keystone to
  gate, and metal is incidental. Revisit only with the jar in hand.
- **jakes-build-tools** — digest shows `warped_fungus_on_a_stick` in nearly every tool (chisel,
  trowel, wrench, tape_measure…), almost certainly a **mis-parsed ingredient**. The metal tools
  (esp. `wrench`/`hammer`) *would* be coherent Create candidates, but authoring `remove`s from a
  confused digest is too risky — defer until a jar confirms the real shapes.

> Also untouched pending a maintainer scope call (not a coherence skip): **MineColonies /
> Structurize / umapyoi** (huge own-system progressions) and a full **Supplementaries** decoration
> pass.

## Full-pack triage (all 158 digested mods)
Every mod in `tools/mod-data/recipes/` was swept for the only signal that matters — *own-namespace
metal/mechanical crafts that bypass Create*. Buckets:

- **Converted** (own files, `10`–`97`): immersive_armors, samurai_dynasty, modulargolems, northstar,
  irons_spellbooks, mffs, travelersbackpack, securitycraft, drones, astikor-carts, exposure,
  smokeleaf, supplementaries (kinetic blocks only), swashbucklers, **gliders** (metal paraglider
  tiers → pressed plates), **netmusic** (computer/cd_burner → electron_tube). Plus `05-metals.js`
  gating steel at the source.
- **Create addons — already route through Create, nothing to do** (~70 mods): everything `create*`
  / `cbc` / `tfmg` / `railways` / `GnKinetics` / `createbigcannons` / `CreateNumismatics` /
  `create_ironworks` / `createmetalwork` / `createnuclear` / `pantographs` / `direct_chute` /
  `sliceanddice` / `rechiseledcreate` / **DnDesires** (uses andesite_alloy + brass_casing +
  precision_mechanism + cogwheel + electron_tube already), etc.
- **Correctly vanilla — organic / decoration / food / mob / worldgen / cosmetic** (the long tail):
  all `letsdo-*` + `*delight` + cookingforblockheads + alcohol_industry (food); `mcw-*` + woodworks
  + handcrafted + moreslabsstairsandwalls + rechiseled + domum-ornamentum + copycats + simplehats
  (decoration/cosmetic); alexsmobs + mowziesmobs + mutantmonsters + born_in_chaos + rottencreatures
  + GrimoireOfGaia + IllagerInvasion + naturalist + friendsandfoes + ribbits + kobolds +
  **ArPhEx** (mob-drop gauntlets, netherite binder) + **Cataclysm** (boss-drop gear) (mobs/combat);
  Terralith + undergroundworlds + deeperdarker + ecologics + upgrade_aquatic (worldgen); Quark
  (vanilla-style tweaks); **tide** (early fishing tackle); **ColdSweat** (survival utility);
  gravestone/comforts/bountiful/trashcans (QoL).
- **Magic — routes through its own apparatus/ritual, gating would violate the spine**: ars_nouveau,
  occultism, occultengineering.
- **Guns — already routed via Immersive TaCZ**: tacz (only workbenches/ammo-boxes use metal; fine).
- **Deliberately not gated** — see the ledger above (copperage, Galosphere, companions, jakes).
- **MineColonies** (`98`) — *integrated where feasible*: the two **quarries** (real mining machines)
  now build from Create (andesite_casing/cogwheel → brass_casing/precision_mechanism), keeping the
  non-consumed `structurize:sceptergold` stamp. The ~55 worker-hut blocks are the colony's own
  build-tool spine and the cooking/chainmail trees are vanilla-parallel — both left alone.
- **Supplementaries** (`94`, full pass) — beyond cog_block/turn_table, the mechanical/instrument
  blocks now route through Create: **wrench** (andesite alloy), **pulley** (cogwheel+shaft),
  **altimeter** + **wind_vane** (aeronautics instruments → electron_tube / cogwheel). The 20+ candle
  holders, gold/iron gates & doors, goblets, lamps, and the redstone/explosive novelty gadgets stay
  vanilla decoration.
- **Structurize** — confirmed a build-*utility* (scepters, build tool, scan/paste); nothing mechanical
  to gate. No change, by design.
- **Maintainer scope call** — umapyoi (own cosmetic progression) remains the only deferred item.

## Ground truth
- Mods with jars on hand → recipes read directly for precise `remove` + replace.
- Everything else → the **`tools/mod-data/recipes/`** digest (CI) lists each recipe as
  `id | type | referenced-ids`; grep an item to find what to remove. Run **Actions ▸ Ground-truth
  digest** to populate it.
