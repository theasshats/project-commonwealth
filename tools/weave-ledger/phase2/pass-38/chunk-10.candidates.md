# Phase 2 candidates — chunk-10

## cloth_config   [anchors: support/library (1)]
LEAVE — genuine zero-content config-screen API library; no items, no blocks, no recipe methods, no material surface to route. Config screens for other mods, nothing to weave.

## cataclysm   [anchors: survival (1)]

Already-proposed connections in dossier are good starting points. Cataclysm has loot=yes, 301 items, registered `cataclysm:weapon_fusion` and `cataclysm:amethyst_bless` methods, and boss-drop materials (Witherite, Ignitium, Cursium, ancient_metal_ingot, Void Core). It sits at 1 anchor (survival/danger) — the goal is ≥2.

**Method-pull pass:**
- Witherite/Ignitium/ancient_metal are novel ingot-tier materials. Who wants ingots? `create:crushing` → M-03 ore-doubling (reward path); `create:pressing` for sheets → M-05 native-method gating. The dossier explicitly names these as the canonical DESIGN.md boss-drop→Create-tech gate.
- Cursium (cursed/dark thematic) → `occultism:spirit_fire` for transmutation; `ars_nouveau:imbuement` → M-11/M-10 mob-drop reagent sink.
- Boss-drop loot-table side: `cataclysm:weapon_fusion` requires Witherite Ingots — that method is owned by cataclysm, but Phase 3 could seed Witherite/Ignitium into Create processing recipes as inputs for high-tier components, gating them behind the boss fight. This is M-15 boss-key unlock.
- `amethyst_bless` (Altar of Amethyst) consumes amethyst — cosmetically, the Cataclysm altars themselves could be seeded with Ars `source_gem` or Occultism ritual catalysts as construction materials, but that crosses into forcing Create/magic onto Cataclysm's own altars — tone-check: the altars are physical structures in dungeons, not workshop equipment. Red-team: seeding Ars gems INTO the Cataclysm altars as a construction input is awkward (the altar is looted, not crafted). Reject that direction.
- Economy angle: `cataclysm:ancient_metal_ingot` as M-08 coin-feedstock? Power-check: ancient_metal is boss-drop, endgame — putting it into Numismatics as a minting feedstock means the hardest-to-get material mints the strongest coin. That fits M-08 (scarce regional metal → Create-processed → mint), but ancient metal is not a regional ore — it's a boss drop, not GTMOGS regional. The M-08 motif specifically calls out "scarce regional metal" → Create → mint. Using a boss drop instead of a regional ore is off-motif. However: the combat specialist farms boss drops → trades them (M-34 combat-route supply) to others who lack the combat skill. That is coherent and advances the loop.

**Candidates:**

- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot | via: create:pressing → create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Only a player who has cleared Cataclysm's dungeon bosses holds the ingots needed to unlock the deepest Create machine tier — the fighter's victory key opens the engineer's door.

- from: cataclysm:ancient_metal_ingot (processed sheet/rod) | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: The rarest structural metal in the world — forged from an ancient boss's corpse — is exactly the material an endgame airship hull deserves; it makes the largest/highest-tier airframe builds demand a dungeon-cleared supply chain.

- from: cataclysm:cursium (cursed drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: The corrupted essence extracted from a cursed boss drop is the occult world's premium necromantic input — dungeon-diving feeds the Occultism lab.

- from: cataclysm:witherite_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's imbuement refines the wither-metal's latent void energy into a high-tier arcane reagent; the magic specialist would pay well for it.

- from: cataclysm boss drops (loot tables) | via: loot-seed | to: economy | motif: M-34 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: A combat specialist who can clear Cataclysm dungeons becomes the server's supplier of boss-drop materials that all production routes need — the fighter's loot is everyone's feedstock, and trade is the bridge.

- from: cataclysm:ignitium_ingot | via: create:crushing (ore-doubling processing reward) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Ignitium is a boss drop, not an ore — M-03 is specifically the ore→crushed→byproduct reward for mining scarcity. Applying it to a boss-drop ingot misrepresents the motif (there is no ore form to double). The correct motif for gating Create tech behind boss drops is M-15. REJECT, log for review.

- from: cataclysm:amethyst_crab_shell | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Amethyst crab shell is a combat-loot drop, not a decorative block — M-04 covers deco blocks back to raw materials. Routing mob-drop shells through M-04 is motif misapplication. Also tone clash: amethyst shell as industrial feedstock is contrived. REJECT.

REWORK: Dossier candidate "economy via numismatics — boss-material ingots or trophy drops as high-value sellable scarcity (M-08 coin-from-processed-scarcity)" is mis-motif. Boss drops are not regional ores; M-08 specifically anchors to regional scarce ores processed through Create → mint. The correct frame is M-34 (combat-route supply) — flagging REWORK on that dossier suggestion. The accepted M-34 above supersedes it.

## mcwwindows   [anchors: support/decoration palette (1)]

328 blocks, 326 items, loot=yes. No registered recipe methods; crafted from vanilla glass/planks/wool/stone. Pure decoration palette anchor — the sanctioned support role. Goal: find any coherent 2nd anchor.

**Method-pull pass:**
- The stone-variant parapets/arrow slits are stone/blackstone-derivative blocks. `create:crushing` → M-04 (deco-block → raw/gravel + xp nugget, lossy). Power-check: these are everyday deco blocks, so one light step is appropriate; M-04's lossy rule fits. Tone-check: "crush a decorative parapet back to gravel" — players expect deco blocks to be crushable; this is coherent.
- Wool curtains → `create:milling`? Milling cloth into fibers is possible but no specific milling-wool recipe exists in palette as a weave; and the wool input isn't novel (vanilla wool already has paths). Weak.
- Mosaic glass variants: `create:crushing` would yield glass panes/shards — M-04. But glass crushing is already a vanilla-adjacent Create behavior; the Macaw's-specific mosaic glass isn't special enough to warrant a dedicated weave. Marginal.
- Arrow slits are functional defensive blocks (reduce mob line-of-sight). These could feed a M-33 service angle (build a fortified structure for another player) but that is too abstract for a recipe weave — it's emergent gameplay.
- Colony/MineColonies: Macaw's window blocks as a construction material for colony buildings (M-28 colony route)? MineColonies colony buildings use whatever blocks are available in the world; the mod doesn't consume specific deco items as building inputs. REJECT as not mechanical.
- The dossier notes this is "decoration palette (sanctioned support anchor); only weave as part of a wholesale deco-family pass." That's the right read.

**Candidates:**

- from: mcwwindows stone parapet / arrow-slit blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone parapets crushed back to gravel and a trace of XP — the engineer recycles the builder's offcuts, and nothing is wasted. One light step, lossy, appropriate to everyday deco.

- from: mcwwindows mosaic glass blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Mosaic glass crushing duplicates already-available glass->glass-pane paths in Create; no unique byproduct or novel material join. Not worth an authored recipe — marginal value, just noise in the recipe graph.

- from: mcwwindows:*_curtain (wool-based) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: Milling curtains back to fibers is thematically backwards and doesn't produce a useful intermediate not already available from wool directly. Tone clash (milling a curtain is absurd). REJECT.

OK — the single M-04 stone-parapet crush is the right scale. A deco mod earning one light Create recycling hook is appropriate; forcing more is over-engineering it.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — genuine zero-content behavior mod. Merges dropped item entities to cut lag; no items, no blocks, no recipe methods, no material graph. The drop-merge behavior is a server performance benefit, not a weave surface. Nothing to route through any method.

## formations   [anchors: survival (1)]

0 items except the template_editor (a dev tool), 0 blocks, loot=no. Scatter-structure worldgen using existing palettes; adds no own items/blocks and no loot tables of its own.

**Method-pull pass:**
- loot=no is decisive: the briefing says "do NOT LEAVE a loot-bearing structure mod just because it has no recipes" — but formations has loot=no and 0 items. It has no loot tables of its own to seed, and its generated structures use vanilla/modded palettes it doesn't own.
- The template_editor is a dev authoring tool (1 item) — not a player-facing material to weave.
- Could worldgen structures from this mod contain loot chests with seeded drops? Formations' structures (altars, cabins, ruins, campsites) may contain vanilla loot chests using vanilla loot tables — but the mod itself does not register those loot tables as its own (loot=no in dossier). Seeding drops into structures you don't own is a different mod's loot-seed. This would need confirming via a pack-side datapack, not a Formations weave.
- Red-team: Formations' "1 anchor" (survival, worldgen atmosphere) is correct for a scatter-structure mod with zero item/block content of its own. The dossier's "none — leave" assessment is sound.

LEAVE — cosmetic scatter-structure worldgen with no own items or loot tables; loot=no confirmed in dossier auto-digest. No material surface to route; forced economy/recipe edge wouldn't be coherent. Survival anchor (exploration atmosphere) stands alone; this is an appropriate single-anchor support-adjacent role.

## dataanchor   [anchors: support/library (1)]
LEAVE — genuine zero-content developer library (data-attachment + network plumbing). No items, no blocks, no recipe methods, no material surface. Weaving a code plumbing library is not meaningful.

## createfisheryindustry   [anchors: Create, survival (2)]

Already at 2 anchors (Create spine via peeling/bait-trap/sequenced-assembly + survival via food/diving gear). Dossier proposed a 3rd economy anchor via M-09 (luxury good → coin) — M-09 is RETIRED. Checking for real candidates.

**Method-pull pass:**
- `createfisheryindustry:fish_skin` tagged as `c:foods/raw_cod`/`c:foods/raw_salmon` adjacent; fish_skin itself is a leather-like output. Who wants leather-equivalent materials? Occultism uses leather in some ritual/binding recipes; Ars Nouveau uses leather for scrolls/books. Power-check: fish_skin is an everyday output of the peeler; a one-step recipe is correct.
- `createfisheryindustry:fish_skin` → `occultism:spirit_fire` or `ars_nouveau:imbuement` as a leather-equivalent reagent input (M-10/M-11): tone-check: "fish-derived leather feeds occult rituals" is thematically coherent for a dark-craft system — not a clash. The "mob-drop reagent sink" framing (M-02) applies since fish_skin is a processed mob-derived output.
- `createfisheryindustry:seafood_chowder` / lobster soup as a high-nutrition food: diet pressure (M-26 consumption) — seafood foods fulfill the Protein diet group demand, creating repeating hunger/diet pressure. Power: everyday food. Tone: ok. But M-26 is "an item is spent against pressure" — food consumption is the ambient use of food, which is precisely what M-27 (diet-demand) noted and rejected as "ambient endpoint." Red-team: M-26 requires the item to be the *specific* consumption sink that closes the loop (fuel, food, upkeep). Food as fuel for the diet system does qualify — diet variety is a mechanic (Diet AppleSeed). But this is the ambient end state: fish food is eaten because players are hungry. This is not a designed weave edge; it's just food being food. REJECT as ambient.
- `createfisheryindustry:harpoon` / pneumatic harpoon gun: these are combat tools (harpoon as low-damage trident-like). Could route through `createbigcannons:cartridge_assembly` or `tacz:gun_smith_table_crafting`? Power-check: harpoon is mid-tier combat tool, not endgame; a Create-processing step to make its components fits M-05 (native-method gating). But the mod already routes its own harpoon through create:sequenced_assembly. Checking: yes, "made-by methods" includes create:sequenced_assembly. So harpoon is already gated behind Create — no additional weave needed there.
- Bait-trap → seasonal bait materials: `serene_seasons` seasonal fish spawn rates? If fish are seasonally scarce, bait availability becomes seasonal — M-16 (seasonal reagent). But the bait itself (what the bait_trap consumes) is not explicitly a seasonal material. Needs a seasonal-specific bait crop or reagent to be a real M-16 candidate. Without a specific seasonal bait, this is speculative.
- Economy angle: `createfisheryindustry:seafood_chowder` as a M-33 service? A fishery specialist sells prepared seafood to non-fisher players — but this is ambient loop endpoint (food trade), not a gated demand mechanism. REJECT as bare sell-link.
- MineColonies M-28: A Fisherman's hut in MineColonies could produce fish, making the colony route a cheaper fish-acquisition alternative to automated Create bait-traps. This is a colony-route dependency: Create (bait traps, mechanical peeler) vs. MineColonies (fisherman hut) producing the same fish category, with the colony route cheaper for basics. This IS a M-28 candidate. Power: everyday-mid (fish basics). Tone: ok. Via: config/MineColonies Fisherman hut integration.

**Candidates:**

- from: createfisheryindustry:fish_skin | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: Fish-processed leather has an uncanny organic resonance that Ars Nouveau's imbuement draws on — the maritime artisan becomes a supplier to the magic workshop.

- from: createfisheryindustry:fish_skin | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: The alchemist transmutes sea-creature skin through spirit fire into a ritual intermediate — an unexpected but flavor-coherent link between the fishery and the occult lab.

- from: createfisheryindustry (fish basics — cod/salmon) | via: minecolonies:Fisherman hut | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A colony player's Fisherman hut produces fish cheaper than a Create bait-trap automation setup, making the settlement-builder the server's cheapest fish supplier — two routes to the same resource, never fully self-sufficient.

- from: createfisheryindustry:seafood_chowder | via: farmersdelight:cooking (already inbound) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: Food consumption is the ambient use of food in a survival game — not a designed weave edge (M-27 noted diet-demand as not needing a motif). Seafood chowder is just food being food. REJECT as ambient endpoint, not a loop-advancing weave.

REWORK: Dossier listed "economy via numismatics (M-09 luxury good → coin)" — M-09 is RETIRED. Replace with M-34 (combat-route supply via harpoon/seafood specialist) if pursued, or M-28 (colony fish route) as above. The accepted M-28 is the stronger demand-gating link.

OK — existing connections (Create + survival) are sound and well-chosen. The magic fish_skin hooks are new additions that genuinely advance the loop (fishery → magic lab supply chain).

## supplementaries   [anchors: Create, survival (2)]

Already ≥2 anchors, deeply cross-woven per dossier. The dossier says "none — leave (already ≥2 pillars and deeply cross-woven)." Reviewing existing connections for REWORK candidates.

**Existing connection review:**
- Create anchor: `create:haunting`, `create:mixing`, `create:splashing` are inbound recipe methods already. Ash (from haunting), soap (from mixing/splashing) are genuinely Create-processed outputs. Sound.
- Survival anchor: `farmersdelight:cutting` inbound; flax crop (c:crops/flax) is a farm input for rope/string. Sound.
- Flax → rope is a native survival-production edge; ash → construction material (ash bricks) also survival-facing.

**New weave candidates:**
- `supplementaries:flax` (c:crops/flax, c:seeds/flax) → `create:milling` → fibers/string as a mid-step (M-12 processing-chain pull). Power: everyday crop. Tone: ok (a mill processes flax into linen fiber is historically correct and thematically natural). But: does flax → string already go through a Create path? The "made-by" field shows create:haunting/mixing/splashing inbound, and farmersdelight:cutting. Flax-to-string via milling is a new path, not a duplicate. ACCEPT as a light M-12 link.
- `supplementaries:ash` (c:dusts/ash) → `create:compacting` or `tfmg:coking` as an industrial byproduct intermediate (M-32 byproduct→input). Ash as a fluxing agent in TFMG's metallurgy or as cinder-flour substitute: tone-check: ash-as-flux in a blast furnace is historically authentic (potash from wood ash). Power: everyday. Tone: ok. This is a genuine M-32 byproduct-to-input edge.
- `supplementaries:safe` → colony (M-28)? Safes as locked storage in colony trading posts is emergent design, not a recipe weave. REJECT as not mechanical.
- `supplementaries:faucet` + `supplementaries:jar` as fluid-handling nodes that mesh with Create piping — already noted as a Create connection in the dossier. Not a new weave, existing connection.
- `supplementaries:ash_bricks` / `ashen_basalt` → `create:crushing` (M-04 lossy recycling of deco blocks back to ash/gravel). Power: everyday. Tone: ok. Light step, correct scale for deco.

**Candidates:**

- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Flax stalks run through a millstone yield linen fiber — the farm's specialty crop feeds the Create processing chain as a textile intermediate, and the spinner becomes a supplier to crafters who need rope or fabric inputs.

- from: supplementaries:ash (c:dusts/ash) | via: tfmg:hot_blast or create:compacting | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wood-ash is potash flux — the supplementaries forge's byproduct feeds TFMG's hot blast as a fluxing agent, industrial circularity that makes burning always worth doing.

- from: supplementaries:ash_bricks / ashen_basalt | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ash-brick offcuts crushed back to ash dust and gravel — the builder's waste re-enters the Create cycle, lossy but never truly discarded.

- from: supplementaries:candy (c:foods/candy) | via: farmersdelight:cooking / extradelight:evaporator | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: candy is tagged c:foods/candy but it's a sugar-tier food, and routing sugar/candy through cooking methods is ambient food-chain behavior. No unique intermediate produced; M-12 requires a useful distinct intermediate, not just sugar-candy in a cooking pot. REJECT as too shallow.

- from: supplementaries:flax (c:seeds/flax) | via: serene_seasons seasonal availability | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Flax grows only in the right season — a seasonal crop whose fiber output gates Create textile inputs, so the rope-and-linen supply chain has a seasonal rhythm that forces planning and storage.

OK — existing connections (Create + survival) are sound. Three new ACCEPT candidates extend without over-engineering.

## rolling_down_in_the_deep   [anchors: support/client QoL (1)]
LEAVE — client-only camera/movement behavior mod with no items, no blocks, no recipe methods, no material surface. Extends swimming camera feel. A sanctioned support role with zero weave surface.

## ctl   [anchors: Create, aeronautics (2)]

Already at 2 anchors (Create via sequenced_assembly + aeronautics as the train/contraption lighting tool). Reviewing existing connections.

**Existing connection review:**
- Create anchor via `create:sequenced_assembly` inbound: sound — the IC (incomplete) intermediate items confirm this is properly gated behind a Create processing step.
- Aeronautics anchor: all blocks are lamp/light types for trains and contraptions — the primary purpose is train/rolling-stock detailing. Sound.

**New weave candidates:**
- Lamps are light-emitting blocks on trains. Could HTLB/ILB blocks feed an Aeronautics build requirement (airship navigation lights)? M-23 (structural alloy → airframe) wouldn't apply — lights are functional, not structural. M-24 (mechanical component → propulsion/control) doesn't apply either — lights aren't drive components. A possible M-05 (native-method gating on these lamps as required airship navigation outputs) — but that's gating a train-lamp into an airship component; thematic mismatch: train lamps for trains, not airships. Tone: mild clash. REJECT.
- Colony route (M-28): a MineColonies Train Station building could require HTLB/ILB lamps as construction items — cheaper infrastructure via colony. Power: mid (sequenced-assembly lamps are already Create-gated). Tone: ok. Via: MineColonies hut construction recipe. This is a valid M-28 candidate — makes the lamp a colony-construction material, linking the train-lighting mod into the colony production route.
- Economy via M-33 (service): train operators as a service profession in the player economy — but the lamp blocks don't gate this, it's emergent gameplay. Not a recipe weave. REJECT.

**Candidate:**

- from: ctl:ilb_block / ctl:htlb_block (finished train lamps) | via: minecolonies hut construction requirement | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Station or Rail-maintenance hut requests interior/head-tail lamps as part of its construction — the colony builder needs the Create engineer's sequenced-assembly lamps, tying the two production routes together at the infrastructure level.

- from: ctl:htlb_block (auto-directional head/tail light) | via: create:item_application to a train chassis | to: aeronautics | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: CTL lamps are already placed directly on train contraptions (that's their whole function), not applied via deployer. M-20 (deploy-application upgrade) applies when a deployer applies a woven part onto a base — here the lamp is placed, not deployed-applied. Mis-method. REJECT.

OK — existing connections (Create + aeronautics) are sound. The M-28 colony-infrastructure candidate is the natural extension.

## createmetalwork   [anchors: Create (1)]

1 anchor; target ≥2. Rich method surface: rides `create:compacting`, `create:crushing`, `create:mixing` with 55 c:tags for crushed materials across almost the entire metal roster. Molten fluid outputs from every metal.

**Method-pull pass:**
- M-08 (player-minted currency): The dossier notes this as STRONG. Createmetalwork → molten/processed metal → Numismatics coin. Power-check: molten_gold, molten_brass are mid-tier; the minting step is Create-gated (M-08 requires "scarce regional metal → Create-processed → player-pressed into coin"). Createmetalwork IS the Create-processing step for these metals. The regional scarcity comes from GTMOGS ore-gen. Tone: ok — a foundry that melts ore into ingots is precisely what feeds a mint. This is a genuine M-08 candidate (the processing step that makes the mint worth being a specialization).
- M-03 (ore-doubling): Createmetalwork already IS M-03's implementation — it authors the crush+melt recipes that yield the ore-doubling reward. This is the existing anchor, not a new weave.
- Magic-mod ores through the crush+melt pipeline (M-03): Galosphere palladium ore, Occultism's silver ore — these can be tagged into the createmetalwork crushing pipeline for a doubling. Power: mid (processed magic-mod metals). Tone: ok. Via: create:crushing (already in made-by). This is a real candidate: createmetalwork extends M-03 to magic-mod metals, creating a cross-system link (magic ore → Create processing).
- Aeronautics via M-23 (structural alloy → airframe): `createmetalwork:molten_steel` or `createmetalwork:molten_bronze` as the raw material for cast structural components used in Aeronautics airframes. Power-check: steel/bronze are mid-tier alloys; basic airframe components made from cast steel fit a mid-tier airship build. Tone: ok — a foundry that produces cast-steel beams is exactly what a shipwright needs. Via: createmetalwork molten output → `create:compacting` cast component → Aeronautics recipe. This is M-23 (structural alloy → airframe).
- `createmetalwork:molten_netherite_bucket` at endgame tier → Aeronautics endgame hull component (M-23). Power: endgame. Tone: ok — netherite-cast frames for the most advanced ships.

**Candidates:**

- from: createmetalwork molten metals (gold/silver/platinum) | via: create:compacting → numismatics mint | to: economy | motif: M-08 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: The foundry that melts and pours regional metals is the natural upstream step to the player mint — refined molten metal cast into blanks, then pressed into coin; the metallurgist controls the currency supply.

- from: createmetalwork:molten_steel / molten_bronze | via: create:compacting → cast structural beams → aeronautics frame recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Cast-steel beams and bronze brackets are the structural skeleton of a working airship — the foundry's output is the shipwright's raw material; you can't build without it.

- from: occultism / galosphere magic-mod ores | via: create:crushing (createmetalwork pipeline) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Magic-world ores run through the same industrial crushing-and-melting line as mundane metals, doubling yield and threading the arcane resource into the Create spine — the magic specialist's ore earns an engineer's reward.

- from: createmetalwork:molten_netherite_bucket | via: create:compacting → endgame aeronautics hull block | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: A netherite-cast hull plate is the material of a flagship warship — only the most advanced foundry operation produces the stock that armors the skies.

- from: createmetalwork crushed_raw_materials (all metals) | via: create:crushing → create:mixing → ingot | to: create | motif: M-03 | power: everyday–mid | tone: ok | verdict: REJECT | reason: This describes createmetalwork's own existing function — it IS the ore-doubling spine. Logging the existing anchor as a new candidate would be redundant. The Create anchor is already established. REJECT as duplicate.

OK — existing Create anchor is correct and well-grounded. Three new ACCEPT candidates (economy M-08, aeronautics M-23 ×2, magic M-03) advance the loop meaningfully.

## zombiemoon   [anchors: survival (1)]

0 blocks, 0 items, loot=no. Hostile mob behaviors only; no unique drops surfaced in dossier. The dossier's "none — leave" assessment is correct per the facts, but the briefing says to re-examine carefully.

**Method-pull pass:**
- loot=no, 0 items. The mobs (Zombie Brute, Crawler, Spitter, Mutant Brute, etc.) drop vanilla rotten flesh / bones per dossier note "vanilla rotten-flesh-style drops (no unique reagent to weave)." No unique drop item to route.
- Could add a custom loot-table seed for these mobs that introduces a unique drop? That would be a Phase-3 authoring action (add loot table entries for these mobs), not a weave — but proposing it as a loot-seed candidate is valid if it makes sense. What drop would fit? "Mutant flesh" or "zombie brute bone" could be an M-02 reagent-sink candidate. Tone-check: thematically coherent (tough zombie → tough drop → occult reagent). But the dossier explicitly states "no unique reagent to weave" and the mobs are confirmed to drop only vanilla items. Adding a new drop via loot-seed would require authoring a new item or routing to an existing one.
- Could we loot-seed these mobs to drop `born_in_chaos_v1:bundle_of_bones` (which IS a registered item from BIC, a thematic fit — zombie mobs → bones bundle)? That's a cross-mod loot-seed. But the method would be loot-seed (Phase-3 datapack), not a recipe, and the material origin would become shared between two zombie-type mods — possible reagent-ownership question. This is speculative enough that it deserves a REJECT-for-review rather than acceptance.
- No loot tables means no structure to seed into either.

**Candidate:**

- from: zombiemoon mutant mob drops (vanilla rotten flesh/bones) | via: loot-seed (add loot table entry for a unique drop e.g. mutant_marrow) → occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Zombiemoon registers no unique drop items (0 items, loot=no); a loot-seed would require inventing a new item or borrowing from another mod. The dossier confirms vanilla-only drops. Proposing a loot-seed here requires first authoring the drop item — that is Phase-3 content creation, not a route through existing methods. Log for review if a custom mutant-mob drop item is later added to the mod or pack. REJECT as no existing material to route.

LEAVE — confirmed zero weave surface at current item/loot state. Survival (danger) anchor stands alone; the mobs push back on players but carry nothing to weave.

## solmaiddream   [anchors: survival (1)]

1 item (food_book), loot=no, 0 blocks. A tiny flavour addon for Touhou Little Maid feeding maid stats via varied food. Hard dep on touhou_little_maid.

**Method-pull pass:**
- The food_book is an inspection tool — it shows which foods a maid has eaten. No recipe, no processing.
- The mechanic (maid stat growth from food variety) rides on the entire pack's food pool — it's a cross-system benefit from the diet/survival layer.
- Could the maid feeding mechanic drive demand for rare foods from magic/Create routes? Technically yes — a maid fed every food group (including magic-mod foods or Create-processed dishes) would grow faster. But this is emergent gameplay, not a recipe weave.
- The food_book as a recipe input anywhere? No coherent use as a material input to another method.
- M-33 service: maid-keepers as a "companion service" profession? Too abstract; not a recipe weave.
- The companion army upgrade path (more powerful maids from a varied diet) could be seen as M-26 (consumption): rare foods are spent to grow maid power. Power: everyday (maids eat anything). But M-26 requires items "spent against pressure" — maid-feeding is not survival pressure, it's companion progression. Tone: strained. REJECT.

LEAVE — tiny flavour addon; one-item (inspection tool), behavior-only mechanic riding on the ambient food pool. No material surface for a coherent weave; the dossier's "none — leave" is correct.

## bettercombat   [anchors: support/combat framework (1)]
LEAVE — behavior framework; no items, no blocks, no recipe methods. JSON-driven melee overhaul that re-skins existing weapons with movesets. "Better Combat" is a behavior framework for foreign weapons — no material to route through any method. The support role (making weapons feel better to use) is its whole content.



