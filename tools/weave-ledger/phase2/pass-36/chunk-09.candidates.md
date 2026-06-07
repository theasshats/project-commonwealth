# Phase 2 candidates — chunk-09

## createfood   [anchors: survival, create (2)]

Already has 2 anchors (survival + Create). Reviewing existing connections first, then looking for richer links.

REWORK: OK — connections sound. Create processing chain (create:milling/mixing/pressing/compacting/deploying) producing high-effort finished dishes is exactly the right arc; survival via diet/nutrition is solid. No arbitrary edges.

New candidates:

- from: createfood finished dishes (pizzas, pastries, ice cream) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: bare "sellable luxury = coin" is the ambient loop endpoint, not a weave — this re-states M-09 which is retired. There is no demand-gating here, just "cook and sell." Economy link only earns its place when it gates demand (M-26/M-28/M-29/M-30), not when it just observes that food is tradeable.

- from: createfood finished dishes (plated blocks — cakes, pies, cheesecakes eaten by slice) | via: consumption (M-26) | to: survival → economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Plated dishes are placed in communal spaces and eaten slice-by-slice — they degrade on use, so the baker must keep restocking; the consumption-sink closes the diet-demand loop natively without any recipe change. This is already in-game; the weave is naming it explicitly so the diet-system and demand accounting recognise createfood as a M-26 node.

- from: createfood raw meat/crop tags (c:foods/raw_*, c:foods/doughs) | via: farmersdelight:cooking / create:milling as M-12 pull | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: createfood's 2424 c:tags already pull raw crops and meats through Create/FD methods into finished dishes — the processing chain is the mod's core mechanism. Acknowledging this as M-12 means the graph reads correctly: farm output (survival-side) flows through Create machines (Create-side) into food (back to survival). Confirming the arc keeps the web coherent.

- from: createfood finished dishes (seasonal fruit pies, jam variants) | via: Serene Seasons seasonal gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Apple/berry-flavour lines could require seasonally-available fruits (apples heavy autumn, berries spring/summer) — a baker can't stock the full menu year-round, making seasonal pies a specialization product with variable supply. Depth matches everyday-to-mid tier (one extra seasonal-ingredient step). A Phase-3 KubeJS gating, not a recipe rewrite.

## moreoverlays   [anchors: support — QoL/client (1)]

LEAVE — Confirmed zero-content client HUD overlay (spawn markers, chunk-grid, JEI search dim). No items, no blocks, no loot, no processing. Nothing to route or weave.

## ars_nouveau   [anchors: magic (1)]

Single anchor — magic pillar spine. Target is a 2nd anchor. Large method surface (18 recipe types), strong potential.

REWORK: No existing cross-system connections to audit — it's listed as 1 anchor only.

Candidates:

- from: ars_nouveau Agronomic/Vitalic Sourcelink (consumes crop growth, mob deaths natively) | via: Source generation mechanic (non-recipe sink) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Every farm animal death and every crop maturation in radius silently feeds Source — a magic specialist's power supply is literally built on survival-side output. Already works natively; tagging this M-02 arc makes the loop explicit and keeps mob/farm mods from being designed around it.

- from: ars_nouveau:source_gem (the M-01 hub reagent) | via: ars_nouveau:imbuement | to: magic (internal / cross-magic) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: Foreign magic essences (Iron's arcane_essence, Occultism spirit remnants) imbuement-convert into source_gem — the universal magic currency. Reserved in reagent-ownership. Confirming the arc; do NOT repurpose source_gem as a non-magic reagent.

- from: ars_nouveau enchanted gear / spell scrolls | via: ars_nouveau:enchanting_apparatus service | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic specialist offers enchanting-for-hire: non-magic players bring their tools, the Ars player provides the Source and the apparatus work — payment is emergent (coin, trade goods). This is pure service-labor economy without any NPC faucet, exactly M-33.

- from: ars_nouveau Create-adjacent: Archwood logs as a superior Volcanic Sourcelink fuel | via: ars_nouveau:volcanic_sourcelink (non-recipe mechanic) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood logs give a Source bonus when burned in the Volcanic Sourcelink vs. regular wood — a Create sawmill (create:cutting) bulk-producing archwood planks/logs becomes the high-throughput fuel line for the magic Source farm. The Create lumber line feeds the magic energy system; that's a real production→magic arc. (Light single step — M-12 processing pull, everyday tier.)

- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement as a Create-part catalyst | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A mid-tier Create machine component (e.g. a precision mechanism) could require an imbuement step with source_gem as catalyst — the Create tech specialist must trade with the magic player for the gem or buy it. Symmetrical cross-route: magic reagent in a tech chain. M-29 cross-route dependency; forces the two specialists to interact without either self-supplying.

- from: ars_nouveau boss drop (Arch-Illager / Guardian summon loot) | via: loot-seed into ars_nouveau dungeon/ritual loot tables | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ars summon-ritual bosses are already a combat output; a loot-seed adding a scarce arcane component (e.g. a rare essence) that non-combat players need for high-tier magic turns the combat specialist into a supplier. Economy arc without NPC faucet. via: loot-seed.

- from: ars_nouveau Drygmy mob-drop farm | via: Drygmy passive collection of magic/organic reagents | to: economy | motif: M-33 | power: mid | tone: clash | verdict: REJECT | reason: The Drygmy outputs raw mob drops that any player can farm manually — making it a "service" is a stretch, it's self-serve automation. The economy link here collapses to "you can sell mob drops," which is the ambient endpoint. No clean demand-gate.

- from: ars_nouveau spell scrolls | via: KubeJS locking as Create-gated unlock | to: Create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: Spell scrolls unlocking Create recipes is thematically inverted — Create gates *tech*, not magic. A magic-locked tech recipe reads backwards to players. M-29 requires the cross-dependency to feel natural ("of course the Create part needs the magic reagent") not arbitrary. This direction doesn't survive the red-team.

## lionfishapi   [anchors: support (library/API) (1)]

LEAVE — Verified zero-content animation/entity API. 0 blocks, 0 items, no loot, no methods. Required dependency for L_Ender mods only. Nothing to route or weave.

## more_slabs_stairs_and_walls   [anchors: support — decoration palette (1)]

847 blocks (all vanilla-style cuts), loot=yes, stonecutter-shaped. A large decoration palette. Target: 2nd anchor via Create.

Candidates:

- from: more_slabs_stairs_and_walls stone/wood/concrete cut variants | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A player running a Create lumber/stone mill bulk-cuts log/stone slabs and walls automatically — the 847 variants become automation outputs of the Create spine, not just hand-crafted deco. Saw recipes are the natural form; stonecutter-shaped blocks already have a conceptual predecessor in create:cutting. Light single step per variant, everyday tier. This earns the deco set a genuine Create anchor.

- from: more_slabs_stairs_and_walls gravity-block variants (concrete powder slabs, sand/gravel slabs) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushed-back-to-sand / gravel / powder closes the recycle loop on gravity cuts — a small but coherent loss-return (M-04 is lossy by design). Gravel/sand recycling from over-built or mis-placed cuts is thematically sound for a Create pack. Everyday tier, one step.

- from: more_slabs_stairs_and_walls amethyst/stone variants | via: ars_nouveau:imbuement as decorative substrate | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Imbuement of decorative slabs into magic reagents is purely arbitrary — there is no lore reason amethyst slabs (vs. amethyst itself) would be a magic input, and it would confuse the crafting graph by making deco blocks into magic feedstock. Theme clash.

- from: more_slabs_stairs_and_walls bulk cut variants (for airship hull builds) | via: aeronautics ship-construction as build material | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 requires a *structural alloy / load-bearing material* (metal plate/beam), not decorative cut stone. Stone slabs don't thematically read as hull material on an airship; the connection is forced. A player would ask "why does my ship need basalt stairs?" — fails the nod test.

## rhino   [anchors: support (library/engine) (1)]

LEAVE — Verified pure JavaScript runtime (Mozilla Rhino fork) for KubeJS. 0 blocks, 0 items, no loot, no methods. Indirectly enables all KubeJS recipe weaving but has zero direct content surface. Nothing to weave.

## fzzy_config   [anchors: support (library) (1)]

LEAVE — Verified config-serialization library (Kotlin TOML backend). 0 blocks, 0 items, no loot, no methods. Pure developer infrastructure. Nothing to route or weave.

## aeronauticscompat   [anchors: aeronautics (1)]

LEAVE — Verified pure behavior-patch / mixin glue with 0 blocks, 0 items, no loot, no processing methods. Required (CLAUDE.md) for the aeronautics pillar, but has no content surface to weave. Its single anchor is correctly labeled aeronautics.

## entity_model_features   [anchors: support (client rendering/resourcepack) (1)]

LEAVE — Verified client-only model-replacement engine. 0 blocks, 0 items, no loot, no methods. Purely cosmetic render support; nothing to weave.

## jei   [anchors: client-only UI (support) (1)]

LEAVE — Verified client UI recipe viewer. 0 blocks, 0 items, no loot, no processing methods. Load-bearing for Create recipe visibility (do not swap to EMI per CLAUDE.md). Nothing to weave.

## valarian_conquest   [anchors: survival (1)]

76 blocks, 319 items, loot=yes. Medieval factions, custom crafting stations (armorsmith, builder, barber_surgeon), faction loot. Single anchor — survival. Rich content; target a 2nd anchor.

Candidates:

- from: valarian_conquest faction gear (shields, faction armor, weapons) | via: create:mechanical_crafting or create:pressing as a gating input | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Valarian's armorsmith station crafts faction gear — gate it on a Create-pressed steel plate or brass fitting as a required input, so the martial gear line depends on Create production. A medieval armorer using industrially-pressed plate is coherent (Valarian's vibe is quasi-realistic medieval conquest). Mid tier; the armorsmith station is the "own machine" of M-05. Depth scales with gear tier (basic shields = lighter gate; knight armor = heavier gate).

- from: valarian_conquest citizenship items / faction allegiance gates | via: KubeJS colony-route lock (M-28) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies tavern/barracks could be the recruitment point for Valarian citizens — getting a citizenship item cheaper/faster if you have a colony structure, making the colony player a natural faction-hub. Colony route links the economy's settlement arm to the survival faction system. Players who build colonies become political brokers as well as producers.

- from: valarian_conquest boss/dungeon loot (faction dungeon/keep chest loot, loot=yes) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Faction keeps and outposts hold loot; seed a scarce Create part or magic reagent into those chests — the combat specialist who raids faction strongholds brings back components that non-combat players need. Turns the faction danger into the supplier half of the boss-economy loop (M-34). via: loot-seed.

- from: valarian_conquest mercenary hire / faction trade | via: Numismatics coin as hire medium | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Hiring mercenaries or buying faction allegiance through Numismatics coin makes the faction system a demand sink for minted currency — players who control coin also control military labor. This is M-08 (player-minted currency finding a demand node) not M-09 (NPC vendor), because the mercenaries are player-adjacent economic agents, not NPCs paying out coin — the player spends coin. The demand-gate on coin is the weave.

- from: valarian_conquest armorsmith / builder / barber_surgeon stations as ≥3 crafting surfaces | via: KubeJS locked-exclusive gating | to: economy | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: M-37 is research/knowledge gate (MineColonies research, Ars spell-knowledge). Valarian's stations are just crafting blocks, not a research unlock — they don't carry the "knowledge isn't tradeable" mechanic M-37 requires. The connection would be a misuse of the motif. REJECT; the armorsmith station is better served under M-05.

- from: valarian_conquest faction banner blocks (76 blocks include many banner variants) | via: create:cutting deco (M-04) | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Crushing faction banners back to raw material (M-04 recycles deco) would be jarring — these are quest/allegiance items with narrative weight, not generic deco blocks. Theme clash: a player would find it odd that their Barathian banner gets mechanically shredded for fiber.

## ding   [anchors: support (client QoL) (1)]

LEAVE — Verified client audio-cue only (load-complete sound). 0 blocks, 0 items, no loot, no methods. No material surface; nothing to weave.

## better_climbing   [anchors: support (QoL) (1)]

LEAVE — Verified pure movement-feel tweak (ladder/vine climbing physics). 0 blocks, 0 items, no loot, no methods. No content surface; nothing to weave.

















