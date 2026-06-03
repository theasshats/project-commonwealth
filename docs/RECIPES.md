# Recipe Overhaul — "Made through Create"

> **Principle:** re-author recipes across the pack so crafting flows *through* Create — its
> **parts** and **methods** — weaving Create through every branch. **This is NOT a grind.** The bar
> is *coherence* ("of course you'd build this with Create parts"), never extra steps for their own sake.

## Design rubric (priority order — supersedes older "costs ~comparable" framing)
When weighing any recipe change, decide in this order:

1. **Balance first.** Nerf powerful things; gate strong gear/weapons/machines deeply. **A swap must
   never make a powerful item *cheaper* than its vanilla recipe** — an accidental cost *reduction* on
   a power item is a bug to fix, not a free pass. (Cautionary case: heavy armor was briefly made from
   pressed sheets and came out *cheaper* than its iron-block original — that's the regression to avoid.)
2. **Theme second.** Ingredients should *match the output*: **computers cost computer parts, lights
   cost light bulbs / vacuum cubes, lasers cost optical parts, a drone costs rotors + a motor.** Theme
   is worth a higher cost.
3. **Cost-comparability is OPTIONAL.** Don't pare a coherent, well-themed recipe just to match the
   original count. Only rein in costs that "get out of hand."
4. **Multi-pillar weaving is the goal.** The pack's five systems are Create / magic / economy /
   aeronautics / survival; *ideally a mod anchors to two or more of them.* So **decoration or flavor
   that now needs Create is great** (it weaves that mod into the Create pillar) — as long as it's
   thematically coherent and not too expensive. The old "leave decoration vanilla" instinct only
   applies when a Create gate would *invert progression* (e.g. starter-tier copper) or break theme.
5. **`60-mffs.js` is the gold standard.** Its `sequenced_assembly` chain (staged on the Mechanical
   Crafters through a registered `derpack:incomplete_*` transitional item) is what "truly woven in"
   looks like. Use it as the model for powerful/endgame machines; reach for that depth wherever an
   item's power justifies it, not just where a mod happened to already be complex.

## Guardrails (keeps it "Create-ified," not GregTech)
- **Gate by complexity, not uniformly.** Simple gear / shared components get a single light part
  gate; **complex / endgame machines should require real Create *methods*** — `mechanical_crafting`
  (forces the Mechanical Crafters multiblock) or `sequenced_assembly`, built from mechanisms,
  casings and electron tubes (incl. TFMG's endgame steel parts: `tfmg:steel_casing`,
  `tfmg:steel_mechanism`). Don't settle for the cheapest gate on a flagship machine. Northstar is
  the reference: trivial gear rides a pressed plate, but rocket stations / sealers / circuits go
  through `mechanical_crafting` + `sequenced_assembly`.
- One Create-part "gate" per tier is plenty *for everyday/low-power gear* — don't stack requirements
  on something weak. Power items are the exception: gate them as deeply as their strength warrants
  (balance-first), up to the full `sequenced_assembly` treatment.
- Keep yields fair for everyday gear; don't stretch a trivial craft into five steps for its own sake.
  But richer, well-themed recipes are welcome where they weave mods together (see the rubric).
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

> Re-checked under the matured rubric (decoration-through-Create is *encouraged*, not avoided): these
> still hold, but for the right reason — each would **invert progression** (gating starter/exploration
> tier) or **break theme** (mob-drop devices want mob drops), *not* because "decoration stays vanilla."
> A coherent, non-progression-inverting Create touch on any of them later is welcome.

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
  gating steel at the source, and **`81-decoration-metal.js`** — an *aggressive decoration + equipment
  weave* via **`event.replaceInput`** (ingredient-only swap: shapes/yields/non-metal variants untouched,
  ~cost-neutral, so a mod earns the Create pillar without becoming a grind). Routes base metal **ingots
  (iron/copper/gold) → concrete `create:{iron,copper,golden}_sheet`** across: Macaw's metal
  doors/windows/fences/roof-tools, handcrafted metal furniture, Supplementaries metal decoration
  (candle-holders, gold bars/door/trapdoor/hourglass, fire_pit), and **Delight cooking equipment**
  (Farmer's Delight cooking_pot/skillet/stove/iron_knife, extradelight chiller/tap — kitchenware as the
  food↔Create bridge). `replaceInput` is the preferred tool for this kind of broad "route the metal
  through Create" weave — reach for it over `remove`+`shaped` whenever you only need to change *what* an
  item is made of, not its shape. **Always target concrete `create:*_sheet` items, not `#c:plates/*`
  tags** (addon-filled → read as unobtainable in JEI; that was the steel-plate breakage).
  - *Deliberately left alone:* Macaw's metal **fences** (stonecut from iron_bars, not the table — cheap
    decoration on an awkward path); and a blanket "lights cost a bulb" pass — the pack's lamps are
    **organic** (Galosphere crystal+glowstone, Quark corundum, torch-lit) so a bulb would break theme,
    while the genuinely electric lights are already woven (bits_n_bobs bulb-lamps, Northstar plate-lamps,
    securitycraft). Theme-coherence beats forcing the rule.
  - *Playtest flag:* the Farmer's Delight kitchenware gate is an **early** Create touch on the core
    cooking loop (a hand-pressed iron sheet before a cooking_pot) — kept because the pack's whole premise
    is Create-as-spine, but flagged to pull back if it feels bad early.
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
- **Let's Do Meadow cheese** (`99`, closes #51) — additive Create path: Create Cheese's soft curd +
  Meadow rennet, compacted → a Meadow cheese wheel. Native cheese_form left intact.
- **The Bible** (`89`, #17) — de-memed per maintainer call ("sensible, but hard"): the joke recipe
  (apple/diamond_sword/mutton/…) becomes a gilded, quill-bound holy book built around a **Totem of
  Undying** — a rare evoker/raid drop as the difficulty gate. Flavor relic, not Create-gated.
- **Maintainer scope call** — umapyoi (own cosmetic progression) remains the only deferred item.

## Exhaustive re-verification (the "is anything left?" pass)
A full second sweep across all 32k digested recipes and the 355-mod install list, widened well past
the first metal-ingot grep:

- **Recipe-type census** — surfaced foreign tech-mod recipe types (`immersiveengineering:metal_press`,
  `mekanism:*`, `modern_industrialization:*`, `tconstruct:*`, `pneumaticcraft:*`, `railcraft:*`,
  `energizedpower:*`, …). **All come from `recipe_integration` conditional compat and none of those
  mods are installed** — they never load, so there is *no* rival-tech Create-bypass in the pack.
- **Alloy-metal source audit** — checked every recipe whose output is a steel/brass/bronze ingot.
  Steel's only real shortcuts were already closed (`05`); the rest are storage decompacting. Brass's
  occultengineering smelt/blast is a recycle loop fed by Create-made brass (its only dust source is
  crushing a brass ingot). **steel/brass/bronze are fully Create-gated at the source** — and via
  `#c:` tags + almost-unified that propagates to every downstream mod.
- **Power/machine keyword net** (machine/generator/reactor/engine/turbine/drill/pump/motor/laser/
  jetpack/…) over every non-Create mod — turned up only already-handled cases: DnDesires &
  alcohol_industry are themselves Create addons; ColdSweat/tide are survival/fishing; Cataclysm is
  boss-drop; occultism/occultengineering are magic; gamediscs is a self-contained arcade novelty.
  **Nothing new to route.**

Conclusion: the routing work is complete — what remains un-converted is deliberately so.

## Endgame / "should be harder" review
Asked whether high-power items are too cheap. Finding: **the pack's power items already gate on
Create's mid/late vocabulary**, so they're endgame-appropriate without extra taxing —
- **create_jetpack** — `create:copper_backtank` + `precision_mechanism` + shaft + brass plates via
  mechanical-crafting; netherite tier is a smithing upgrade off a `netherite_backtank`. Flight is
  correctly backtank-gated.
- **createnuclear** — reactor blueprint needs steel (now Create-routed) + `precision_mechanism` +
  display_board; the reactor is a multiblock. Endgame by construction.
- **create_new_age** — motors/energisers built on andesite/brass casings + "overcharged" mats.
- **mffs** force-field gear and **modular golems** were already routed onto Create parts in their
  passes; steel-gating (`05`) pushes their metal tier behind a running Create setup.

No item was found that is both high-power *and* trivially craftable in the first sweep. Under the
matured rubric (**balance first**), the standing instruction is stronger than the old "costs stay
~comparable": where a power item *does* read as too cheap, **raise it** (deeper Create gate, up to
`sequenced_assembly`) rather than leave it. Final numeric tuning (jetpack/nuclear/etc.) is still a
**playtest call**, but the direction is "nerf the strong," not "preserve parity."

## Cross-mod synergy style (mirrors Create: Immersive TaCZ)
Immersive TaCZ doesn't gate a gun behind one token part — it builds intermediate components
(`gun_barrel` via `mechanical_crafting` of steel, `firing_mechanism` from deployer+cogwheels,
`primer` by `create:filling` andesite_alloy with gunpowder *fluid*, casings by `create:cutting` brass
sheet) and then **assembles the gun on the Mechanical Crafter** from those parts, with tiered cores
(cogwheel → precision_mechanism). So building it actually runs the Create machines *and* ties mods
together. We mirror that in KubeJS for **flagship devices**: prefer a Create *method*
(`event.recipes.create.mechanical_crafting` / `filling` / `cutting` / `deploying`) over the crafting
table, and source real components from sibling mods — every ingredient *thematically* justified, no
filler. Verified palette in this
pack: `create` (electron_tube, propeller, framed_glass, sturdy_sheet, fluid_tank, copper_backtank),
`create_new_age` (copper_circuit/wire — themselves Create-deployed), `createaddition`
(copper_wire/spool, capacitor, electric_motor, brass_rod), `tfmg` (circuit_board, heavy_plate,
machinery_casing), `galosphere` (allurite/lumiere shards = glowing optical/readout elements, silver).
**Difficulty rule (per the rubric above — balance > theme > cost):** strong items (the TaCZ guns,
force-field machines, flight tech) are *deliberately* hard because they're powerful — gate them
deeply. For weak/everyday gear, a richer well-themed table craft is fine; **cost-comparability is
optional, so theme can raise the cost** as long as it doesn't get out of hand. Reach for
`mechanical_crafting` / `sequenced_assembly` whenever an item's *power* warrants it (MFFS is the
model), not only when a mod was already complex — but don't put a Mechanical-Crafter gate on a
trinket.

Full-pass status (every flagship file reviewed):
- **Enriched** (cross-mod parts, comparable cost): `netmusic` computer (framed_glass + copper_circuit
  + electron_tube + copper_wire) & cd_burner (allurite_shard "laser" + wiring); `supplementaries`
  altimeter (brass + glowing lumiere readout) & wind_vane (a `create:propeller` on a cogwheel);
  `drones` controller + ion_thruster (createaddition copper_wire / electric_motor — a drone is an
  electric machine); `securitycraft` laser_block (galosphere allurite_shard emitter + rose-quartz
  lens) & portable_radar (copper_wire antenna); `exposure` camera (rose-quartz lens) + interplanar
  projector (lumiere_shard lamp).
- **Already in this style — kept**: `mffs` (TFMG steel casings + electron tubes + precision mechs via
  `sequenced_assembly` off Mechanical Crafters — the exemplar); `northstar` (its rocket/oxygen/solar
  tech already `mechanical_crafting` + `sequenced_assembly`).
- **Reviewed, intentionally left thin** (enriching would inflate cost or break theme): `immersive_armors`
  (bulk pressed-sheet armor — mechanizing every piece = grind), `samurai_dynasty` (thematic
  steel+jade, no machine parts), `modular_golems` / `astikor_carts` / `smokeleaf` (single-keystone
  gates — one touch routes the whole mod), `irons_spellbooks` (magic; one metal keystone),
  `travelers_backpack` / `gliders` (already pressed-sheet, light), `swashbucklers` (black-powder
  flintlocks — kept simple, not TaCZ-hard).

## Magic web (weaving the magic mods together)
Separate from the Create spine, the **magic** mods are woven into one progression around an arcane
**spine — Ars Nouveau + Iron's Spellbooks** (the two understandable spellcasters). The rule (maintainer
steer): *don't force one mod's component into all the others* — so the weave is a handful of **purely
additive bridge recipes** (`33-magic-web.js`) that never touch an existing magic recipe; they just add
alt paths so progression flows between systems:

```
Born in Chaos (necromancy) ──▶ Occultism (summoning) ──▶ arcane SPINE ◀──▶ (Ars ⇄ Iron's)
```

- **Ars ⇄ Iron's** — Source gem ⇄ arcane essence, each direction catalysed by a **Galosphere** shard
  (so round-trips cost crystals — no free essence-arbitrage).
- **Occultism ▶ spine** — joins via its *ritual-made* `otherworld_essence` (not the cheap farmable
  datura essence), refined with an attunement crystal.
- **Born in Chaos ▶ Occultism** — its `spiritual_dust` feeds the occult spirit economy, finally giving
  the necromancy outlier a place in the pack.

**Galosphere's allurite / lumiere shards are the connective thread** (the "arcane attunement crystal"),
which also gives an underused worldgen mod a magic purpose. All ratios are first-pass — tune in playtest
against the real essence economies. occultism↔Create was *already* bridged by the **occultengineering**
mod (create:mixing/compacting/filling), so that branch needs no KubeJS.

Material (non-magic) bridges follow the same additive pattern — e.g. Meadow cheese ▶ Create Cheese
(`99`, #51). A sweep for more found the material layer is **already woven by `c:` tags +
almost-unified**: `createfood`'s mozzarella pulls `c:cheeses` (so Meadow *and* Create cheese feed it
for free), `c:flour` is referenced 127× (Create's mill flour flows to every baking mod), etc. The
genuine gap was the Meadow cheese *wheel* (its own non-tag item wasn't Create-producible) — closed by
`99`. Adding further manual bridges would just duplicate tag unification, so none were.

## Ground truth
- Mods with jars on hand → recipes read directly for precise `remove` + replace.
- Everything else → the **`tools/mod-data/recipes/`** digest (CI) lists each recipe as
  `id | type | referenced-ids`; grep an item to find what to remove. Run **Actions ▸ Ground-truth
  digest** to populate it.
