# Phase 2 candidates — chunk-17

## ars_n_spells   [anchors: magic (1)]
- LEAVE — pure magic↔magic connective tissue (Ars Nouveau ↔ Iron's Spellbooks mana unification); zero item surface, no foreign-material I/O; the mod IS the internal weave already. Forcing a 2nd-pillar edge would be invented.
- OK — connections sound (single magic anchor is correct for a glue-library of this kind; no REWORK warranted)

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries:*_extract / *_gummy (refined product) | via: createaddition:charging (FE↔kinetic bridge — the generator produces FE; Create Addition's liquid_burning accepts fluid fuels; alternatively route FE output into createaddition:charging to power a Create machine) | to: create | motif: M-05 | power: mid | tone: ok (industrial hemp processing joins industrial-Create spine plausibly — two different industrial tones but not a clash) | verdict: ACCEPT | hook: your Create rotational network powers the smokeleaf extractor chain — the grow-to-extract loop is now a node on the Create spine rather than an isolated FE island
- from: smokeleafindustries:hemp_crop / hemp fiber (raw harvest) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hemp stalks milled in a Create Millstone yield fiber that feeds the hemp-fiber processing branch, weaving the first step of the processing chain into Create
- from: smokeleafindustries:*_gummy / *_bud (effect-granting consumable) | via: generic-sellable (dealer/stoner trade → numismatics payout) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the dealer/stoner trades already prove it; adding Numismatics prices adds no structural loop-closing
- REWORK: survival anchor is thin — the mod is a flavor farm with effect items but those effects don't feed survival pressure in a meaningful loop (they're buffs, not necessities). Existing anchor is correct but weak; the Create milling + FE-bridge ACCEPTs above are the real second anchor.

## txnilib   [anchors: support/library (1)]
- LEAVE — zero-content code library (no items, no blocks, no loot, no recipe surface); sanctioned support role.

## invtweaksemuforipn   [anchors: support/client-QoL (1)]
- LEAVE — client-only compat shim; no items, no blocks, no content surface; sanctioned support role.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL (slab-break interaction); registers no content; sanctioned support role.

## necronomicon   [anchors: support/library (1)]
- LEAVE — pure code/config library (Necronomicon API); zero content; sanctioned support role.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — config-only worldgen spacing mod; no items, no blocks, no loot table of its own; sanctioned support role. (Its *effect* is to increase structure rarity, indirectly strengthening scarcity pressure, but there is no item/method surface to anchor a weave through.)

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein-table (datapack-configurable ore outputs) | via: createoreexcavation:vein (KubeJS/datapack config — no new recipe, a pack-design lever) | to: economy | motif: M-08 | power: mid | tone: ok (infinite-but-slow ore faucet feeding a coin mint is exactly the regional-scarcity-to-economy seam) | verdict: ACCEPT | hook: configure the vein table to include tin/scarce regional metals so the drill rig feeds the Create → mint chain; infinite but slow means the drill becomes a bottleneck asset worth trading around
- from: createoreexcavation:drilling_machine (complex kinetic multiblock) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the drilling machine is already made via Create methods (create:crushing/cutting/milling/mechanical_crafting per existing inbound weaves); adding sequenced_assembly on top would double-gate a machine that is itself a mining automation tool — depth-scales poorly and turns a useful mid-game tool into an endgame gate, violating cost-model proportionality
- OK — Create anchor is sound (SU-powered, Create-made machines); the vein-table economy ACCEPT is the natural 2nd anchor

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood / companions:soul_gem | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok (gothic-alchemical Soul Furnace output → Occultism spirit-fire ritual is tonally coherent — both are dark-alchemy/soul-magic) | verdict: ACCEPT | hook: Crystallized Blood smelted in occultism spirit fire yields a spirit-solution intermediate, threading the Soul Furnace economy into the Occultism ritual web
- from: companions:crystallized_blood | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok (soul-crystallized blood as an arcane infusion catalyst is a natural Ars material) | verdict: ACCEPT | hook: imbuement of an Ars reagent with Crystallized Blood produces an Ars-side essence, making the Soul Furnace a supplier to the Ars magic web
- from: companions (Sacred Pontiff boss) drop — companions:old_cloth / companions:relic_gold | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; Relic Gold being valuable is assumed; the unique weave is through magic (accepted above), not merely pricing the boss drop
- from: companions:copper_coin / nether_coin / end_coin (self-contained internal coins) | via: numismatics conversion | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bridging two coin systems together is a design decision for the v0.9.0 economy update, not a Phase-2 recipe weave; flagging it exists but non-distinctive and premature
- REWORK: survival anchor is valid (mob content + danger) but the mod's Soul Furnace mechanic (item→reagent transformation) is a production-flavored method that currently has no magic-pillar connection — the M-11 + M-10 ACCEPTs above are the REWORK fix.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid QoL overlay; no items, no blocks, no methods; sanctioned support role.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — server-side TPS optimization (parallelizes Create train calculations); no content surface; sanctioned support role.

## architectury   [anchors: support/library (1)]
- LEAVE — cross-platform modding API library; no player-facing content; sanctioned support role.

## zombiemoon   [anchors: survival (1)]
- from: zombiemoon hostile mobs (Zombie Brute, Crawler, Spitter, Mutant Brute) — no unique drops per dossier | via: loot-seed | to: survival / magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: dossier confirms no unique drops (vanilla rotten-flesh-style only, loot=no in jar); there is no distinctive reagent to seed into loot tables — forcing a drop-reagent here would be an invented edge. Re-evaluate if a mod update adds unique drops.
- LEAVE — no unique item surface (confirmed loot=no); mob-difficulty-only content. Survival anchor is correct and the only viable one.

## libipn   [anchors: support/library (1)]
- LEAVE — GUI/config library for Inventory Profiles Next; zero content; sanctioned support role.

## detect-afk-1.2.2   [anchors: support/QoL-server (1)]
- LEAVE — behavioral server-admin utility (AFK detection); no items, blocks, or processing; sanctioned support role.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs stone/brick stair variants (andesite_bulk_stairs, brick_terrace_stairs, blackstone_* etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok (stone deco family crushing back to raw/gravel is the established Create deco-recycle pattern) | verdict: ACCEPT | hook: break down a misplaced stone railing or balcony in a Create Crushing Wheel — lossy but not wasteful; fits the deco-recycle motif
- from: mcwstairs wood stair variants (acacia_railing, oak_platform, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crushing back to planks/sawdust is already covered by vanilla logs + Create sawing; adding mcwstairs wood variants is redundant with the existing processing path and adds no distinct node
- NOTE: this is a deco-family wholesale pass candidate — recommend batching the M-04 stone/brick crush with the other Macaw's deco mods in the same pass rather than doing it mod-by-mod.
- OK (for decoration anchor — sanctioned support; only the stone/brick subset warrants the M-04 ACCEPT above)

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure decoration (painting entity GUI); no items, blocks, loot, or methods; sanctioned support role.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore / raw_tin → create:crushing → tin ingot → numismatics mint | via: create:crushing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok (Tin is a fresh, biome-limited ore; the crush→mint chain is exactly the scarcity-to-coin seam; Tin's 3 biome-modifiers make it genuinely regional) | verdict: ACCEPT | hook: tin is only in certain biomes — crush it into ingots and mint coin; the drill press that processes tin is how a Create base funds the player economy
- from: create_ironworks:steel_ingot / steel_plate | via: aeronautics structural recipe (as airframe/hull material) | to: aeronautics | motif: M-23 | power: endgame | tone: ok (steel plate as a structural hull material for airships is self-evidently sensible — it IS a structural material) | verdict: ACCEPT | hook: steel plate from the Create ironworks line is the structural alloy that scales up airframes from wooden starters to armored mid-tier hulls
- from: create_ironworks:bronze_ingot / bronze_plate | via: aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok (bronze gears and bearings as propeller/control-surface components is coherent industrial-era engineering) | verdict: ACCEPT | hook: bronze plates machined into propeller blades and rudder fittings — the Create ironworks' bronze tier earns its place as the drivetrain metal for mid-tier ships
- from: create_ironworks:steel_ingot | via: occultism:spirit_fire or ars_nouveau:imbuement (arcane tempering of steel) | to: magic | motif: M-10 | power: endgame | tone: ok (but cautious — arcane-forged steel is a classic fantasy trope; however no magic system's output currently *needs* a specific steel input, so the demand side is unclear) | verdict: REJECT | reason: no-motif-demand — the magic systems don't currently have a clear steel-input slot; the link would be a push (we tell magic to accept steel) rather than a pull (method-pull from an existing magic method that wants a refined metal); revisit when magic exclusives are specified
- REWORK: Create anchor is solid and the 3 biome-modifiers + full Create processing chain make it well-grounded. The economy (M-08) and aeronautics (M-23/M-24) ACCEPTs above are the missing 2nd + 3rd anchors. No existing connections to REWORK.

## ohthetreesyoullgrow   [anchors: support/worldgen-library (1)]
- LEAVE — tree-generation framework library (defines sapling growth algorithms for dependent mods); no player-facing items or blocks; sanctioned support role.

## terralith   [anchors: survival (1)]
- from: terralith biomes (65 c:tags confirmed) — no direct item outputs | via: worldgen/spawn gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Terralith adds no items of its own (vanilla-blocks-only datapack); M-16 requires a *material* obtainable only in a given season/biome. Terralith's value is as the terrain other mods' biome-spawned content lands on; the weave is indirect (regional scarcity riding its biome tags) and is already captured by the scarcity foundation design. No recipe-surface exists.
- LEAVE (for recipe weaving) — worldgen overhaul with no item surface; survival anchor is correct and the only viable one. Its real contribution to the loop is enabling regional ore scarcity through biome diversity, not through a direct recipe edge.

== CHUNK COMPLETE ==
