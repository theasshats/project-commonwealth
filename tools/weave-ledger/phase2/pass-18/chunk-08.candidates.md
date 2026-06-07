# Phase 2 candidates — chunk-08

<!-- ── chunk-08 ── pass-18 ── blind ── -->

## citadel   [anchors: support/library (1)]
- LEAVE — pure code library (animation/spawn framework for Alex's Mobs author's mods); no player-facing items, no survival material, no recipe surface. Auto-pulled as a dependency; nothing to route.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client-only texture-engine (OptiFine random/emissive textures); zero items, zero loot, zero world state. No content surface to weave.

## tacz   [anchors: support/combat-flavour (1)]

Power-read: `tacz` is a modern-firearms mod with a gun_smith_table (its own recipe type), discrete workbenches for attachments/ammo, and a loot table. Guns are mid-to-endgame items — the Gun Smith Table itself is an iron-tier unlock. The data-driven gun system means metal/component inputs are the live join key. This is a 1-anchor mod needing two real anchors.

- from: tacz:gun_smith_table_crafting inputs (iron/metals, logs) | via: tacz:gun_smith_table_crafting (gating) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Gun Smith Table only accepts Create-pressed iron sheets and mechanically-crafted components as metal inputs — firearms cost real fabrication, not raw ore.
  reason-accept: Create already processes ore→sheet→part, so inserting tacz's metal inputs into that chain is a direct loop-advance (scarcity→production). M-05 native-method gating is the exact fit — the gun smith table is tacz's own machine, and we inject Create-fabricated parts as its inputs. Tier sizing: mid (the table is an iron-tier build; pressed-sheet inputs are a light mid-game step, not an endgame chain — appropriate).

- from: tacz ammo (ammo/ammo_box) | via: create:mechanical_crafting or create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: High-tier ammunition (AP rounds, explosive) requires a sequenced-assembly line — the factory feeds the war machine.
  reason-accept: Ammo is a consumable that creates recurring demand — exactly the kind of loop-sustaining sink the economy needs. Endgame ammo via M-06 sequenced_assembly adds GregTech-style depth without bloating the basic iron round. Distinct from the M-05 entry (machine gating vs. ammo chain).

- from: tacz ammo_box / rare gun drops (loot=yes) | via: numismatics bounty (bountiful board) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony or a trader posts a bounty: deliver a crate of ammo or a recovered firearm — guns become war materiel traded for coin, not just looted.
  reason-accept: Ammo is the canonical consumable throttle in a PvPvE economy; making it a bounty target (M-14 combat→economy) advances the loop (production output feeds the economy node). Player-run-currency caveat applies (0.9 review same as other M-14/M-09 entries).

- from: tacz guns / attachment aesthetics | via: aeronautics ship-mounted turrets (thematic tie) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — TACZ does not natively integrate with Aeronautics turret hardpoints (aeronauticscompat handles other turret mods separately); any "mount a TACZ gun on a ship" route is flavour-only with no recipe/mechanical delivery. No established motif covers a pure-flavour placement edge. Flag for Gate 0 if a cross-mod turret-mount recipe type ever appears.

REWORK: existing dossier anchor is "support (1)" — combat flavour only. This is correct currently but should be upgraded once the M-05/M-14 weaves are authored; the mod would then carry create + economy (3 anchors). No existing authored connections to rework.

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — pure client windowing option (borderless fullscreen); no items, no loot, no world state. Nothing to weave.

## minecolonies_compatibility   [anchors: survival + Create (2)]

Power-read: Already a 2-anchor bridge mod — its entire purpose is wiring colony workers into Create Stock Link, IE, Farmer's Delight, and storage networks. 2nd anchor is already present. Check for a 3rd (economy) and inspect existing connections for REWORK quality.

- from: minecolonies_compatibility Gunner job (tacz_dummy_gun) | via: minecolonies job → tacz crafting/supply chain | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony's Gunner arms the settlement — he crafts or requisitions firearms, creating a steady in-colony demand that draws on the Create+tacz production chain and feeds trade with the wider player economy.
  reason-accept: The Gunner job already exists in the mod (tacz_dummy_gun item confirms it). Connecting colony firearm-production demand to the M-14 bounty/trade economy advances the loop (production→economy). The colony is a producer node; the economy pillar needs inputs. Tone fits the PvPvE framing.

- from: minecolonies_compatibility colony food output (Cook uses FD cutting board) | via: chefsdelight/farmersdelight → numismatics trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony cooks (already using FD's cutting boards) produce surplus meals — those meals sell at the market for coin, making the colony a literal food-economy node.
  reason-accept: This completes the loop segment: colony farming (survival) → colony cook (production) → food surplus → coin (economy). M-09 luxury-good→coin; everyday tier — a light step (no deep chain needed for basic meal sales). Synergises with chefsdelight's own villager-trade anchor.

- from: minecolonies_compatibility Courier ↔ Create Stock Link | via: Create logistics | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the Courier using Create Stock Link is already part of the Create anchor; extending that to aeronautics would require the Courier to interact with ship-mounted storage (no such Aeronautics storage interface exists as a recipe-type). Flavour-only; no delivery mechanism.

OK — existing connections sound (survival + Create are genuine, well-motivated bridges, not arbitrary). The two new ACCEPT entries add economy as a third anchor.

## tide   [anchors: survival (1)]

Power-read: Tide is a deep fishing overhaul — 100+ biome-locked fish, a minigame, bait crafting, rod customisation, and a fishing journal. It already hooks into farmersdelight:cutting (filleting). Fish outputs range from everyday (anchovy) to rare/biome-specific endgame catches (abyss_angler, void fish). The Serene Seasons compat makes seasonal availability a real gating mechanic. 1-anchor mod with strong candidates.

- from: tide:rare_fish (biome-locked, endgame catches e.g. abyss_angler, void fish) | via: numismatics bounty/sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare catches fetch real coin at the market — the angler who specialises in deep-water biomes sells what nobody else can supply.
  reason-accept: Biome-locked fish are the definition of scarce regional goods — the exact driver the economy loop needs. M-09 luxury-good→coin is a perfect fit; a rare catch is exactly the "high-effort consumable / scarce good" the motif describes. Everyday fish stay cheap; only the genuinely rare biome-specific ones command coin. Tier: mid (rare fish require exploration + biome-finding, but the fishing mechanic itself is accessible early). Player-run-currency caveat (0.9 review).

- from: tide:raw_fish (c:foods/raw_fish, the broad output stream) | via: create:milling or farmersdelight:cutting → fishmeal/oil intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The fishing surplus goes into the mill — fishmeal feeds the farms, fish oil lubricates machines; nothing is wasted on a Create spine.
  reason-accept: M-12 processing-chain pull: a raw crop/material run through another mod's processing into a useful intermediate. Fishmeal as a fertiliser input (feeding MineColonies composting or Create crop automation) is a coherent second step. Fish oil as a Create lubricant-intermediate is plausible. Everyday tier — one light milling step, appropriate for a common fish. Advances the loop (survival output → production input).

- from: tide:abyss_angler / void-catch fish | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — void/abyss fish being arcane reagents is *thematically plausible* (dark deep-water denizens), but the dossier rates this WEAK and it strains belief for a player: "why does the abyssal fish become a magic reagent?" lacks the "of course" nod. The two accepted edges (economy + Create) already give tide two anchors; a forced magic edge adds nothing the loop needs and muddies the fishing mod's identity as a naturalist/exploration anchor. Reject; revisit only if a specific magic ritual gains a strong narrative justification for aquatic ingredients.

REWORK: existing anchor is survival only. M-09 and M-12 ACCEPT entries add economy + Create, giving tide three anchors. No existing authored connections to rework.

## create_enchantment_industry   [anchors: Create (1)]

Power-read: A Create add-on industrialising enchanting — Liquid Experience as a pipeable fluid, automated Blaze Enchanter, Disenchanter, Printer, Mechanical Grindstone. It already uses many Create methods (compacting, crushing, cutting, emptying, filling, item_application, pressing, farmersdelight:cutting). The signature output is `experience_bucket` (liquid XP) and enchanted gear/books. 1-anchor mod; magic is the obvious second anchor since XP-fuelled enchanting sits at the Create/magic boundary.

- from: create_enchantment_industry:experience_bucket (liquid XP) | via: ars_nouveau:enchanting_apparatus or occultism:ritual (XP as a ritual fuel/ingredient) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The arcane apparatus runs on bottled experience — the factory's liquid XP supply becomes the magic pillar's power source.
  reason-accept: M-10 arcane infusion pull — a foreign material (liquid XP from Create) is consumed by a magic method. Ars Nouveau's enchanting apparatus already accepts fluids and experience in certain configurations; Occultism rituals consume XP. This is a direct loop-advance: Create's industrial mob-farm output (liquid XP) feeds the magic pillar's rituals, making the magic specialist dependent on the Create spine's XP production. Tier: mid (the Blaze Enchanter is mid-game Create; liquid XP is not trivially cheap). Tone: perfectly sensible — "of course industrial XP fuels the arcane apparatus."

- from: create_enchantment_industry:enchanting_template / super_enchanting_template | via: create:sequenced_assembly (gating the hyper-enchant tier) | to: create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Super-enchanting templates require a multi-stage Create assembly line to produce — the factory earns its forbidden power.
  reason-accept: M-06 sequenced-assembly keystone — endgame items built through a multi-stage chain. The super_enchanting_template is the flag item for hyper-enchantment (past vanilla caps) — exactly the kind of high-tier unlock that should cost real fabrication steps. Already uses create:item_application; a sequenced chain is the natural depth extension. Advances the loop (Create depth → magic gate).

- from: create_enchantment_industry:experience_cake / experience_lantern | via: numismatics sell / bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: balance — experience_cake/lantern are primarily internal-to-the-factory items (light source and consumable buff). Selling them as luxury goods doesn't fit the player-experience "of course" test well — they're factory infrastructure outputs, not prestige trade goods. The mod's real economy value comes from its *service* (enchanting books for others) rather than its material outputs. A service economy (enchanting-as-a-trade) is the real link but it's a social mechanic, not a recipe delivery. Reject; the Create + magic anchors (via the two ACCEPTs) are sufficient and stronger.

REWORK: existing anchor is Create (1), with farmersdelight:cutting already present as an inbound weave. The existing Create anchor is sound — well-grounded in the jar evidence (uses 7 Create recipe types). The two ACCEPT entries add magic as a second anchor (now Create + magic = 2). No existing connections to rework; the farmersdelight:cutting usage is an inbound weave from CEI's own recipe, not something to second-guess.

## illagerinvasion   [anchors: survival (1)]

Power-read: ~11 new illagers + Invoker boss, Imbuing Table (copper multiblock, over-cap enchantment via Hallowed Gem + enchanted book). Mob drops: hallowed_gem (Invoker, rare boss), illusionary_dust (Illusioner), platinum_chunk (misc), horn_of_sight, lost_candle. All drop items are mid-to-endgame (boss or named-mob gated). The Imbuing Table is a copper multiblock with a real crafting cost. 1-anchor mod; the drop profile + arcane Imbuing Table give it a strong latent magic foot.

- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Invoker's stolen gem is an arcane catalyst — only a magic specialist knows what to do with it, bridging the fighter's conquest to the mage's workshop.
  reason-accept: M-02 mob-drop reagent sink — an isolated boss drop is given a use as a magic input. hallowed_gem is already the gate item for the Imbuing Table (over-cap enchanting) — making it also a reagent in Ars Nouveau imbuement or an Occultism ritual component is a coherent double-use (it's an endgame rare, so both uses are valid simultaneously rather than conflicting). Tone: "of course a gem harvested from an arcane Invoker powers magic rituals." Advances loop: survival-danger (boss) → magic production. Endgame power tier is appropriate — boss drops.

- from: illagerinvasion:illusionary_dust | via: ars_nouveau:imbuement (illusion-school spell component) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusion magic runs on the dust the Illusioner leaves behind — you can't conjure convincing phantoms without a genuine illusionist's ingredient.
  reason-accept: M-10 arcane infusion pull — foreign material refined into magic via an infusion method. illusionary_dust thematically matches the illusion-school glyphs in Ars Nouveau (Mirror Image, Mimic, etc.). Mid tier: the Illusioner is a named rare mob but not the hardest boss drop. Distinct from hallowed_gem (different source mob, different tier, different narrative).

- from: illagerinvasion:platinum_chunk | via: create:crushing → platinum_ingot / nugget | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: balance/arbitrage risk — platinum_chunk as a crushable ore feels forced. The dossier itself rates this WEAK. Platinum is a mob drop from illagers, not an ore vein — crushing a combat drop into a generic ore-economy metal feels arbitrary (M-03 is an ore reward; combat drops aren't ores). If platinum is rare and unique to illager combat, making it a plain ore-chain input loses its identity as a boss-combat reward. Better handled by giving platinum_chunk a dedicated use (e.g. M-15 boss-key gate item for a specific recipe). Reject this; flag platinum for a potential M-15 slot in the boss-key framework.

- from: illagerinvasion boss drops (hallowed_gem, platinum_chunk) | via: numismatics bounty | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: The bounty board pays out for Invoker trophies — defeating the raid-boss is literally profitable, seeding the combat specialist into the trade loop.
  reason-accept: M-14 bounty→drop economy — boss drops as bounty targets paying coin. This is a direct combat→economy loop advance. The Invoker is a genuine endgame-difficulty mob; its drops being worth real coin is proportionate. Player-run-currency caveat (0.9). Loot=yes on the jar confirms the loot table. Delivery: via: loot-seed (seed hallowed_gem into a bountiful bounty reward spec) + numismatics payout.

REWORK: existing anchor is survival (1). The three ACCEPTs add magic + economy (now survival + magic + economy = 3). The existing survival anchor is well-motivated (raid/boss content; danger face of pressure). No existing authored connections to rework.

## mcwstairs   [anchors: support/decoration-palette (1)]

Power-read: 224 stair/railing/balcony/platform variants per wood + stone material. Vanilla-table crafted, no behavior. Stone/brick variants are the only meaningful join key. Decoration is a sanctioned support anchor.

- from: mcwstairs stone/brick stair variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone railings and brick platforms grind back to rubble in the crusher — the factory recycles what builders discard.
  reason-accept: M-04 Create-recycles-deco is the established pattern for stone/brick decoration. The mod has 224 blocks, many stone/brick variants that players accumulate and might want to recycle. Lossy recycle (rubble/gravel + XP nugget) is the correct form — it's not free arbitrage, just a convenience. Everyday tier: one light crushing step. This should be part of a wholesale deco-family pass (as the dossier notes) — the same crusher recipe batch that covers mcwfences/other Macaw's mods.

- from: mcwstairs wooden stair/railing variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: over-extension — wooden variants crushing to planks/sticks is conceptually fine but M-04 specifically calls out "metal/stone deco crushes back to raw/gravel." Wooden deco has no equivalent "gritty recycle" feel and the yield (planks from stairs) adds no loop value; players can just craft stairs back to planks themselves. Don't pad the deco-crushing pass with wood variants that add no web depth. Limit to stone/brick/metal.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure config API library; no items, no blocks, no loot, no world state. Auto-pulled as a dependency. Nothing to weave.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — client-side pause-screen UI button; no gameplay content, no items, no world state. Nothing to weave.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

Power-read: A single music disc ("Lava Chicken," Hyper Potions). Has loot=yes on the jar. No mechanics beyond playing in a jukebox.

- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (music disc) | via: loot-seed (dungeon/structure chest) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: no-motif match — music discs as a luxury good sold for coin is a stretch. M-09 is for "high-effort consumables" (wine, cheese, processed crops). A music disc is neither high-effort nor a consumable. Forcing a coin edge onto a joke easter-egg disc is exactly the "noise" the dossier warns against. The loot table is almost certainly just the disc spawning in a chest naturally — that's not a weave-relevant loot table seeding opportunity. Reject.

- LEAVE — single flavor music disc; the dossier reasoning stands ("forcing a coin/recipe edge would be noise"). No coherent 2nd anchor.

## inventoryprofilesnext   [anchors: client-QoL/support (1)]
- LEAVE — client-side inventory management (sort, dump, lock slots); no items, no world state, no loot. Pure UI behavior. Nothing to weave.

## corgilib   [anchors: support/library (1)]
- LEAVE — pure code library (loot/worldgen/datagen helpers for Alex's Caves etc.); zero player-facing content. Nothing to weave.

## chefsdelight   [anchors: survival + economy (2)]

Power-read: Already 2 anchors (survival via food + economy via villager trades — Cook/Chef professions sell FD meals for emeralds). Dossier identifies one optional deepening: route its villager-trade economy onto Numismatics coins instead of emeralds. Check REWORK quality of existing connections and the optional deepening.

- from: chefsdelight Cook/Chef villager trades (FD meal sales) | via: KubeJS trade rewrite → numismatics coins | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: The village cook now prices his roast chicken in coin — the player economy absorbs village food trade rather than running on emerald barter.
  reason-accept: M-09 luxury-good→coin. FD meals sold by Cook/Chef are exactly the "processed food as sellable good" the motif targets. Rerouting these trades from emeralds to Numismatics coins integrates the village food economy into the pack's player-run currency (rather than having it run in a separate emerald-barter pocket). Delivery: KubeJS villager trade override + numismatics pricing. Everyday tier: meals are accessible, not high-tier endgame items. Advances loop: survival-food production → economy trade node.

- REWORK: existing "economy" anchor is via villager trades (emerald-based) — it exists but is in a walled-off emerald pocket rather than the pack's Numismatics currency. The connection is real but weakly integrated. The ACCEPT above (M-09 via KubeJS coin rewrite) is the fix. Existing survival anchor (FD food output) is sound and unremarkable.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/ballistics API library (backbone for Create Big Cannons); no player-facing content of its own, no items, no loot. Nothing to weave.

## copperagebackport   [anchors: survival (1)]

Power-read: Backports Copper Age (Copper Golem, copper tools/armor, chests, lanterns/bars/chains) to 1.21.1. Ships 70 blocks + 81 items, 3 c:tags (item/nuggets/copper). Copper is already a Create staple. The Copper Golem has an item-logistics function (chest-to-chest hauling). Dossier identifies M-04 (crush deco back to copper) as MED and a weak aeronautics/logistics link. 1-anchor mod.

- from: copperagebackport copper deco/tool/armor items (copper_bars, copper_chain, copper_chest, copper tools) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Old copper fittings go back into the mill — the factory is not wasteful; oxidized copper blocks reclaim their metal.
  reason-accept: M-04 Create-recycles-deco is exactly the fit. Copper is already central to Create (copper ingots/sheets in many Create recipes). Crushing copper deco back to raw copper nuggets + XP nugget (lossy, M-04's anti-arbitrage rule) gives the 70-block copper set a Create entry point without overpowering it. Everyday tier: one light step, appropriate for a common material. Should be part of the same deco-family crushing pass as mcwstairs/mcwfences copper variants. The `item/nuggets/copper` c:tag confirms the copper material ownership is tagged correctly.

- from: copperagebackport:copper_golem_statue (Copper Golem item-logistics) | via: thematic adjacency to Create logistics / aeronautics item transport | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif + tone clash. The Copper Golem is a passive chest-sorter, not an aeronautics/ship component. There's no delivery mechanism connecting a golem statue to a ship build recipe or a logistics recipe type. Aeronautics runs on Create contraptions and mechanical systems — a copper automaton from a vanilla backport mod doesn't fit the physical-movement arm without a specific crafted bridge that doesn't exist. The tone is also different: Copper Age is rustic/vanilla-plus; Aeronautics is an industrial engineering build. Reject.

- from: copperagebackport copper tools/armor (copper_axe, copper_boots etc.) | via: create:crushing (reclaim copper nuggets from worn gear) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: redundant. Already accepted copper-deco crushing above; tools/armor crushing is the same motif (M-04) and same method on the same material — there's no need to list it separately as a second candidate. The one ACCEPT covers the entire copper set (deco + tools + armor can all be batched in the same crushing pass). Don't double-count the same motif instance.

REWORK: existing anchor is survival (1). The ACCEPT adds Create as a second anchor (now survival + Create = 2). No existing authored connections to rework.

## toomanypaintings   [anchors: support/decoration-palette (1)]
- LEAVE — pure decoration mod (painting selection GUI + 50+ paintings); no items beyond the painting entity, no loot, no material to route. Sanctioned decoration support role.

## mcwfences   [anchors: support/decoration-palette (1)]

Power-read: 180 fence/wall/gate variants per wood + stone + metal material. Vanilla-table crafted, no behavior. Metal fence variants are the only plausible Create-crush join key. Dossier already identifies M-04 as WEAK and notes decoration is a sanctioned support anchor.

- from: mcwfences metal fence variants (acorn_metal_fence, bastion_metal_fence, cathedral_metal_fence etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Scrapped iron fencing gets fed into the crusher — the industrial yard reclaims its metal.
  reason-accept: M-04 Create-recycles-deco. Same logic as mcwstairs — the metal fence variants (iron, decorated iron-style fences) have no natural "undo" in vanilla, so a lossy crusher reclaim (nuggets + XP nugget) is the coherent form. This should be batched with mcwstairs + copperagebackport in the same wholesale deco-crushing pass. Everyday tier. Only metal variants — not the wooden/hedge variants (same reason as mcwstairs: wooden deco reclaim adds no loop depth, and hedges are leaf blocks with no metal reclaim logic).

- from: mcwfences wooden/hedge variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: out-of-scope for M-04 — wooden planks and leaf hedges aren't "metal/stone deco." M-04 specifically covers metal/stone reclaim; wood/leaf crushing yields nothing useful that the player can't achieve more directly. Don't extend the deco-crushing pass to organic materials.

## solmaiddream   [anchors: survival (1)]

Power-read: Touhou Little Maid addon — feeding maids diverse foods permanently grows their stats. Depends hard on touhou_little_maid. Has one item (food_book). No blocks, no loot, no recipe types. Pure stat-growth layer for companion mobs. Dossier already recommends LEAVE.

- from: solmaiddream food variety mechanic (any food → maid stat growth) | via: survival food system (already shared with SoL diet pillar) | to: survival | motif: n/a | power: everyday | tone: ok | verdict: REJECT | reason: already anchored there. solmaiddream rides on the pack's food pool — it doesn't need a weave because it automatically benefits from every food mod in the pack. A "weave" here would just be "keep the food mods in the pack," which is a given. No new edge to propose.

- LEAVE — tiny flavour addon for TLM companions; its food-pool hook is structural (not a recipe weave), it has no loot, no material surface, and forcing a second anchor would be artificial. The dossier reasoning stands.

== CHUNK COMPLETE ==

