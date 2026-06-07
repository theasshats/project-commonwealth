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

## exposure   [anchors: Create, survival (2)]

Already at 2 anchors (Create via `create:sequenced_assembly` for film development + survival as self-expression hobby). Dossier listed economy via M-09 (luxury → coin) — M-09 is RETIRED. Reviewing for real new candidates and REWORK.

**Method-pull pass:**
- `exposure:photograph_aging` — this is M-35 (maturation/aging)! Photographs age to gain value; `exposure:photograph_aging` is listed explicitly in the M-35 motif as one of its implementing methods: "create_cheese:maturing · vinery ferment · extradelight:drying_rack/evaporator · alcohol_industry · tfmg:coking · **exposure:photograph_aging**". This is already cited in the motif registry as a confirmed example of M-35.
- M-35 (maturation/aging): aged photographs as value-added trade goods — a photographer ages prints to increase their rarity/value, creating a time-specialist role. Power: mid (takes time/effort). Tone: excellent — an analog photograph that gains beauty over time is thematically perfect. Via: `exposure:photograph_aging`. Economy anchor: aged photographs as player-economy goods. This IS an economy link via M-35 that gates demand (you have to wait).
- `exposure:film_developing` → can it use other mod's chemicals? The Lightroom develops film. Could Create mixing produce a development fluid that the Lightroom consumes? Thematic: darkroom chemicals (silver nitrate, developer fluid) could be a Create mixing output (create:mixing → chemical fluid → used in Lightroom development). Power: mid (adds a step). Tone: ok — industrial chemistry makes film development a Create-gated process. Via: create:mixing → chemical → exposure:film_developing. This is M-29 (cross-route dependency: a magic/Create intermediate in a survival-process chain). But checking existing inbound: `create:sequenced_assembly` is already inbound for film development — so the Create link exists. A new chemical-mixer step would DEEPEN the Create link (more steps, GregTech-style) rather than add a new anchor. Not a new anchor but a deepening.
- Silver chemistry: film uses silver salts. `galosphere:silver_ingot` is actually palladium (per CLAUDE.md gotcha — NEVER use galosphere silver as silver). True silver for film chemistry would need `occultism`'s silver. Could Occultism silver → chemical processing → film emulsion be a magic↔survival cross-link? Power: mid (one chemical step). Tone: ok. Via: occultism silver + create:mixing → silver_emulsion → exposure:film_developing (as a better film). This is M-29 (cross-route dependency: magic-mod material in Create/exposure chain). Genuine.
- Aeronautics: aerial photography — a camera mounted on an airship taking photographs. Emergent gameplay, not a recipe weave. REJECT as not mechanical.

**Candidates:**

- from: exposure:aged_photograph (photograph_aging method) | via: exposure:photograph_aging → player trade | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: A freshly developed photograph is a souvenir; one that has aged into sepia and crackling edges commands a real price — the photographer's patience is the product, and aged prints become the server's artisan luxury good.

- from: occultism silver + create:mixing | via: create:mixing → silver chemical emulsion → exposure:film_developing | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: True photographic emulsion needs real silver salts — the Occultism lab's silver feeds a Create chemical mixer that produces superior film stock, threading magic and Create chemistry into the photographer's darkroom supply chain.

- from: exposure:photograph (any printed photo) | via: supplementaries:item_lore or blackboard_duplicate | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Using Supplementaries to copy/annotate photographs is a QoL decoration edge with no motif. No motif → reject-for-review per the rules.

REWORK: Dossier's economy candidate used M-09 (luxury→coin) — RETIRED. Replace with M-35 (maturation/aging via photograph_aging) as accepted above. This is a genuine economy weave, not a bare sell-link.

OK — existing connections (Create via sequenced_assembly + survival) are sound. Two new ACCEPT candidates: M-35 economy aging and M-29 magic-silver cross-route.

## born_in_chaos_v1   [anchors: survival (1)]

1 anchor; 355 items, 111 blocks, 50 biome-modifiers, loot=yes. Rich drop surface: dark_metal, bundle_of_bones, candy, boss drops (Pumpkin Staff, Soul Saber). No registered methods of its own; gear is bench-crafted from drops.

**Method-pull pass:**
- `born_in_chaos_v1:dark_metal_deposit` / `born_in_chaos_v1:dark_metal_block` — these are ore/metal blocks. Does dark_metal_deposit function as an ore (minable from the world)? Per dossier: "Dark Metal piles from Fallen Chaos Knight ~9%, Missionary ~16%, Skeleton Thrasher ~7%" — it's a MOB DROP, not a mineable ore. However "dark_metal_deposit" is a block item that sounds like a deposit/ore node. Need to check: if it spawns in the world as a minable block, M-03 (ore-doubling) applies; if it's only a mob drop, M-03 doesn't apply cleanly. The dossier says drops are from mobs, but the block's name "dark_metal_deposit" suggests a geological deposit. Treat conservatively: propose as M-03 with a flag that it may need verification whether the deposit block actually spawns in worldgen.
- `create:crushing` on dark_metal_deposit → M-03 ore-doubling reward. Power: mid (dark metal is late-mob-tier material). Tone: ok (an industrial foundry crushing sinister ore fits the dark-fantasy theme). Via: create:crushing.
- `born_in_chaos_v1:bundle_of_bones` → `occultism:spirit_fire` → M-11 (ritual/transmutation sink). Bundle of bones = necromantic material par excellence. Tone: perfect fit (bones into a spirit fire gives essence). Power: everyday–mid (bones drop from BIC mobs; not endgame). 
- `born_in_chaos_v1:Soul Saber` / `born_in_chaos_v1:soul-adjacent drops` → `ars_nouveau:imbuement` → M-10 (arcane infusion pull). Soul-type drops refined through Ars imbuement into a magic reagent. Power: mid–endgame (boss drops). Tone: ok (soul energy → Ars arcane reagent is thematically coherent).
- Seasonal mechanic: the Pumpkinhead boss only spawns Oct 25–Nov 5 (or summoned). M-22 (lunar/celestial) does NOT apply — it's a date-window event, not a moon phase. M-16 (seasonal reagent) applies conceptually (seasonal threat), but the boss's exclusive drops (Pumpkin Staff) are seasonal scarcity. Via: the boss is season-gated → its drop is seasonal → makes it a priority seasonal reagent input. This is M-16 (seasonal reagent): Pumpkin Staff / seasonal candy only available in-season.
- `born_in_chaos_v1:bagof_candy` (seasonal) → `extradelight:evaporator` or `farmersdelight:cooking` → candy-based food or reagent (M-12 processing-chain pull). Power: everyday (seasonal candy). Tone: ok (confectionery processing). Via: farmersdelight:cooking.
- Economy M-34 (combat-route supply): BIC's boss drops (Pumpkin Staff, Soul Saber) as combat-specialist-supplied items that non-combat players need. Tone: ok — a spooky seasonal boss's weapon is a trade commodity.

**Candidates:**

- from: born_in_chaos_v1:dark_metal_deposit (if worldgen ore) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: The sinister dark ore crushed in an industrial mill yields dark-metal dust and a trace of XP — the engineer doubles the yield of a material only the brave can mine (flag: verify deposit spawns in worldgen, not only as mob drop). ⚠ verify worldgen spawn.

- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: A bundle of cursed bones from a fallen Chaos Knight, burned in spirit fire, transmutes into the necromantic intermediate the Occultism lab craves — the combat player's trash is the alchemist's treasure.

- from: born_in_chaos_v1:pumpkin_staff / seasonal boss drops | via: seasonal gating (Oct 25–Nov 5 boss availability) → player trade | to: economy | motif: M-16 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Pumpkinhead boss only walks the world in the autumn window — its staff and exclusive drops are inherently seasonal scarcity; the combat specialist who clears it during the event becomes the server's only supplier until next year.

- from: born_in_chaos_v1:great_reaper_axe / soul_saber (boss-drop weapons) | via: loot-seed / player trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The weapons only a BIC dungeon survivor holds are exactly what non-combat players will pay for — the danger specialist farms and supplies; the economy circulates it.

- from: born_in_chaos_v1:bagof_candy | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Seasonal candy as a cooking input produces a confectionery intermediate, but candy is already a food (c:foods/candy in Supplementaries). This would be an everyday food-chain recipe — too shallow to be a meaningful weave, and the processing result doesn't produce a useful intermediate not already available from sugar. M-12 requires a useful distinct intermediate. REJECT.

- from: born_in_chaos_v1:dark_metal_block | via: create:crushing | to: create | motif: M-04 | power: mid | tone: clash | verdict: REJECT | reason: M-04 covers DECO blocks recycled back to raw. dark_metal_block is a boss-material storage/crafting block, not a decorative block. M-04 is the wrong motif here; the correct approach for dark metal processing is M-03 (ore-doubling) if it's an ore, or M-15 (boss-key unlock) if it's the gate material. REJECT as mis-motif.

OK — existing survival anchor is sound. Four new ACCEPT candidates (Create M-03, magic M-11, economy M-16 seasonal, economy M-34 combat-supply) make born_in_chaos 5-anchor connected.

## astikorcartsredux   [anchors: survival (1)]

1 anchor. 67 items (the cart/plow/reaper/seed-drill variants per wood type), 0 blocks, loot=no. Low-tech farm transport and field implements. No recipe methods of its own; vanilla-table crafted.

**Method-pull pass:**
- Plow blade / reaper blade — these metal implements could require Create-processed iron sheets. M-05 (native-method gating): the metal implement tier gated on Create:pressing (iron→iron sheet) as a component. Power: everyday (the plow is a basic farm tool). Tone: ok — a metal plow blade forged from pressed iron sheets is coherent farm-tech. Via: create:pressing → iron sheet → plow recipe. One light step appropriate to an everyday tool.
- Red-team: the plow is a low-tech horse-drawn implement — it should feel accessible, pre-industrial. Gating it behind a Create pressing step may be over-teching the tool (it's supposed to be a wooden-cart-era tool, not a steam-era one). However, the METAL implements (plow/reaper blades) plausibly need smithed iron; Create pressing is the smithing equivalent. Tone passes if the gate is one step (not a multi-step chain). The basic wooden carts should definitely not need Create.
- Could carts fill a logistics role (M-31 logistics-required bulk good)? M-31 is "a good is heavy/bulky enough that trading at scale requires aeronautics/logistics." Carts are the PRE-aeronautics logistics: horse-drawn hauling before you have trains. They fill the early-game logistics gap. However M-31 specifically requires the aeronautics/logistics arm as the method — cart logistics is the analog to aeronautics, not dependent on it. Tone: mild clash (carts and aeronautics are rivals for the same slot, not complements). REJECT M-31.
- Survival M-26 (consumption sink): cart wooden frames wear down and need replacing — could be a maintenance consumption, but Create/Minecraft has no cart-durability mechanic, so M-26 doesn't apply without mechanism.
- MineColonies M-28: a MineColonies Farm or Fields hut could request supply carts as infrastructure equipment, making the colony-farmer the natural cart-driver. Power: everyday. Tone: ok (a colony farm needing a supply cart for harvest transport is very natural). Via: MineColonies hut construction/equipment request.
- Aeronautics M-31: carts serve the pre-flight logistics tier; once aeronautics is available, bulk goods shift to ships. This is an implicit design arc (carts → trains → airships) not a recipe weave.

**Candidates:**

- from: astikorcartsredux:oak_plow / oak_reaper (metal-implement variants) | via: create:pressing → iron sheet as craft component | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: A plow blade worth pulling through a field needs pressed iron, not just raw planks — the farm-tool crafter depends on the Create engineer's pressed sheets, tying pre-industrial farming to the industrial spine at exactly one light step.

- from: astikorcartsredux:oak_supply_cart | via: minecolonies hut construction/equipment requirement | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: The colony Farmer's and Lumberjack's huts request supply carts for field transport — the settlement builder buys the carpenter's output; carts become a colony-procurement trade good.

- from: astikorcartsredux (all carts) | via: create:pressing / any Create machine | to: create | motif: M-29 | power: everyday | tone: clash | verdict: REJECT | reason: The carts are pre-industrial horse-drawn tools. Routing them through Create machines to produce other goods inverts the design: carts should receive Create parts (M-05, accepted), not produce them. A cross-route dependency (M-29 requires a recipe in one route consuming an input from another route) doesn't apply naturally here. REJECT as forced.

OK — one anchor is the floor; two ACCEPT candidates (Create M-05 for metal implements, Economy M-28 via colony) bring it to 3-system connected.

## create_compressed   [anchors: Create (1)]

1 anchor. Create-internal storage compression layer. The dossier says "none — support role." Review for real candidates.

**Method-pull pass:**
- 30 blocks (compressed crushed-ore piles, sheet blocks, mechanism blocks), 30 items. Uses `create:crushing`, `create:milling`, `create:mixing`, `create:sandpaper_polishing`, `create:splashing` inbound — all Create-internal. This mod compresses Create's own intermediates.
- The crushed_<metal>_pile blocks are bulk-storage compressed forms. Aeronautics ships carry bulk cargo; Create-compressed piles ARE the natural bulk-cargo form for resource transport. M-31 (logistics-required bulk good): the compressed pile blocks make ore/sheet transport via ships meaningful (a ship carrying 2 double chests of compressed crushed-iron piles is ~2 × 9 × 9 = 162 crushed ore blocks). This is a genuine logistics link: create_compressed makes bulk aerial ore transport practical. Via: aeronautics cargo (no recipe, a design/packaging affordance).
- Red-team: M-31 requires that trading at scale *requires* the logistics arm. Is compressed ore *required* to use ships, or just convenient? In vanilla Create there's no hard requirement — players can ship anything. But the design affordance (compressed = practical to load/unload) is real. This is an emergent-design link, not a recipe. The briefing allows "config tie" and "worldgen/spawn" as delivery mechanisms alongside recipes. A "design affordance" may not qualify. However: this is exactly the kind of bulk-good that aeronautics is designed to move, and acknowledging it makes the logistics arm more meaningful.
- Could a colony workshop (M-28) request compressed ore piles for smelting? MineColonies' Smeltery or Miner requests raw materials — compressed piles would be a colony-integration way to supply in bulk. Power: mid. Tone: ok. Via: MineColonies Smeltery resource request (Phase-3 colony recipe/request).
- Economy M-08: Create-compressed doesn't process metals into coins directly; it compresses intermediates. Not a M-08 candidate.
- Deco blocks (cogwheel_block, mechanism_block, belt_block, shaft_bundle) → M-04? These are compressed Create component blocks for display/storage. M-04 (deco-block → raw + xp nugget, lossy). They already undo via wrench/washing — the mod itself handles the reverse. Not a new M-04 weave, it's a native feature.

**Candidates:**

- from: create_compressed bulk crushed-ore pile blocks | via: aeronautics ship cargo | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: A double-chest of compressed crushed-iron piles is the difference between a viable ore-shipping run and a worthless trickle — the compressor makes bulk aerial trade in raw materials practical, and aeronautics becomes the bridge between regional ore sources.

- from: create_compressed pile blocks (crushed ore) | via: minecolonies:Smeltery resource request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A colony smeltery orders compressed crushed-ore piles in bulk — the colony's production route takes compressed intermediates as its raw feed, making the Create-compressed engineer a natural supplier to colony-builders who lack crusher automation.

- from: create_compressed:wheat_flour_pile | via: farmersdelight:cooking (as batch-flour input) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Wheat flour pile is a compressed form of Create milled flour for storage convenience — using it in cooking is just "using flour." No distinct intermediate produced; the pile unpacks to flour trivially. M-12 requires a useful intermediate, not a bulk-storage form of something already available. REJECT as no-value add.

OK — existing Create anchor is correct. Two ACCEPT candidates extend to aeronautics (M-31) and economy (M-28).

## letmefeedyou   [anchors: support/QoL (1)]
LEAVE — behavior-only QoL mod. No items, no blocks, no recipe methods. Lets players right-click each other to share food. This is a multiplayer convenience behavior with zero material surface to route through any method; the support role is appropriate.

## chat_heads   [anchors: support/QoL-client (1)]
LEAVE — client-side chat-UI overlay. Renders player head icons in chat. No items, no blocks, no recipe methods, no material surface. Genuine zero-content cosmetic mod.

== CHUNK COMPLETE ==


