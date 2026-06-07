# Phase 2 candidates — chunk-09

## collective   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (Serilum shared-utility; registers 0 blocks, 0 items, no methods). No surface to weave.

## create_dragons_plus   [anchors: create (1)]

Dossier notes this as a support/library mod for the DragonsPlus Create add-on family, but it registers real recipe-types (`create_dragons_plus:ending`, `create_dragons_plus:freezing`) and has 20 blocks and 24 items — specifically the bulk fan-processing catalyst methods. Its ending/freezing fan-stations are *weave targets* other content can route through. Let's check if any weave can be proposed FROM its outputs, and then whether we need to flag REWORK on its single anchor.

**Power-read:** The mod's flagship items are the fan catalyst blocks (dragon breath for Bulk Ending, powder snow for Bulk Freezing). These are everyday-to-mid tier — they extend Create fan processing. The dye-fluid buckets are essentially mid-tier Create fluid utilities. The levitite_fragile_fluid_tank is mid-tier storage.

**Method-pull:**
- `create_dragons_plus:ending` (fan-ending) accepts arbitrary items + dragon head/breath catalyst → End-infused output. Dragon's Breath is a rare combat drop (defeating the Ender Dragon). This is an endgame-tier method. Any material that could be End-infused becomes a candidate.
- `create_dragons_plus:freezing` (fan-freezing) accepts items + powder snow → frozen output. Powder snow is survival-obtainable.
- The dragon_breath fluid (stored in the fluid_hatch) is produced by Create-mixing operations and is a magic-adjacent material (dragon's breath is an Ender Dragon output).

**Weave candidates:**

**A) Dragon's Breath fluid → magic infusion (M-10 / M-29)**
The dragon_breath fluid requires defeating the Ender Dragon (M-15 boss-key territory) and is then Create-processed into a fluid. Routing magic reagents through `create_dragons_plus:ending` (fan-ending + dragon breath catalyst) makes the Bulk Ending station a magic-→-Create cross-route: a magic item (Ars source crystal, or Occultism's spirit essence) is "end-infused" via the dragon-breath catalyst to produce a superior variant. This cross-route (M-29) forces the tech player to obtain a boss fluid *and* magic inputs.
- Red-team: is it sensible? Dragon's Breath + Ars materials → enhanced magic output is thematically on-point (End = transcendence, arcane power). Tone: ok.
- Power: endgame (dragon breath = post-dragon content). A multi-step integration is appropriate.
- Motif: M-29 cross-route dependency — a magic reagent routed through a Create method (fan-ending), creating cross-specialist dependency.

**B) Bulk Ending as M-15 gate (boss-drop → Create upgrade)**
Dragon's Breath fluid (the catalyst consumed) is an Ender Dragon drop, making the `create_dragons_plus:ending` station a natural boss-keyed upgrading station: high-tier items get an "End-tempering" step through the fan-ending catalyst. This is M-15 (boss-key unlock), but the boss drop here is a *method catalyst*, not a crafting input — the spirit is M-15 but it rides through `create_dragons_plus:ending` as the method.
- Red-team: The Bulk Ending station already IS the method; the weave is "seeding the right items to route through it." That's a Phase-3 authoring question, but the candidate is valid — choosing *what* gets End-tempered.
- Tone: ok (End-infusion as a final upgrade is natural lore).
- Motif: M-15 (boss-key unlock via the fan-ending catalyst method).

**C) Fan-freezing → survival/economy via ice-processing (M-12)**
Bulk Freezing (powder-snow catalyst) can freeze water buckets → packed ice, or produce frozen variants of foods/materials — analogous to a Create-extended cold-processing chain. This binds survival (powder snow = cold-season survival resource per Serene Seasons) to Create processing.
- Red-team: Vanilla-accessible powder snow means this isn't meaningfully scarce; ice-making through Create is trivially available via vanilla encased-fan + water. Weak differential unless the frozen *output* is something distinctly useful. Low unique value.
- Verdict: REJECT — powder snow is abundant; fan-freezing is a generic convenience, not a loop-advancing edge. The vanilla ice-with-encased-fan path already covers this.

**Existing anchor review:**
The single Create anchor is sound — the mod is genuinely a Create extension library. The dossier correctly identifies it as a weave-*target* (its methods are what others route through). The one improvement is recognizing that dragon_breath fluid (a boss-output) routes CREATE into an end-game method, giving it a survival/boss-pressure anchor via M-15/M-29.

- from: dragon_breath fluid (boss Ender Dragon output) | via: create_dragons_plus:ending (fan-ending catalyst) | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: End-tempering magic reagents through the dragon-breath fan-station forces a tech player to first defeat the Ender Dragon, bridging boss-danger into magic production
- from: create_dragons_plus:ending (fan-ending station) | via: boss-drop catalyst gating | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Bulk Ending catalyst (dragon's breath) is itself a boss-key — any item "End-tempered" through it is naturally boss-gated, giving the fan-ending station a role in the high-tier fork
- from: fan_freezing_catalyst (powder snow) | via: create_dragons_plus:freezing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: powder snow is freely obtainable; fan-freezing an ice chain replicates what vanilla encased-fan does with water — no meaningful loop advancement

## bettermineshafts   [anchors: survival (1)]

**Power-read:** Structure-overhaul only (YUNG's Better Mineshafts). 0 blocks, 0 items, loot=no (uses vanilla loot tables). No registered recipe types.

**Method-pull:** No items, no methods. loot=no means there are no custom loot tables to seed into. The briefing notes: "A mod with a loot table or any item/block is not 'no content' — reach for a loot-seed or processing candidate before LEAVE." Here loot=no is confirmed from the jar, so there is genuinely no loot surface to seed. The value is structural/exploratory only.

**Weave candidates:** None viable. The mod improves mineshaft layouts but contributes no items, no loot tables, and no methods. It indirectly serves GTMOGS ore-mining (better shafts reach ore veins), but that's an ambient incidental, not a weave (no mechanism to author). Forcing a loot-seed is impossible without a custom loot table — and since loot=no, any loot-seeding would be authoring *new* loot tables, not extending existing ones. That's out of scope for Phase 2 mapping.

- LEAVE — structure-overhaul with 0 items and loot=no; no surface to weave or loot-seed.

## betterdungeons   [anchors: survival (1)]

**Power-read:** YUNG's Better Dungeons — 0 items, 1 biome-modifier, loot=yes (Catacombs, Undead Fortress, Spider Cave with chest loot tables). The loot tables are the only action surface.

**Method-pull — loot-seed candidates:**

**A) Magic reagent drops → loot-seed (M-02)**
The dungeons (zombie catacombs, skeleton undead fortress, spider cave) are mid-danger exploration targets. Seeding Ars Nouveau reagents (e.g., source gems, archwood logs), Occultism drops, or Iron's Spellbooks components into their chest loot tables gives magic progression a *danger gate* — a player must clear a dungeon to bootstrap magic. The mob themes match: undead → occultism/spirit direction; spider → venom/alchemy adjacent.
- Red-team: Is dungeon-loot-as-magic-gate coherent? Yes — it makes exploration and danger necessary for magic progression, advancing scarcity→pressure→production. Tone: ok.
- Power: mid (clearing YUNG dungeons is mid-tier adventuring, appropriate for early-to-mid magic materials).
- Motif: M-02 (mob-drop/loot reagent sink — drop seeded as magic input, gate behind danger).
- via: loot-seed (datapack edit to betterdungeons loot tables).

**B) Economy via Numismatics coin drops → loot-seed (M-08)**
Seeding a small amount of player-minted Numismatics coins (or the coin presses/templates needed to mint them) into dungeon chests creates a circulation source — adventurers bring coins back to trade. This is *different* from M-09 (retired NPC vendor selling), because dungeon loot is danger-gated player effort; the coins circulate through the player economy, not from NPCs.
- Red-team: The "ambient endpoint" rule — if coins are in every chest it's just a gold-substitute, not a weave. BUT if Numismatics coin-press dies or coin blanks appear rarely in dungeon chests (so the *minting infrastructure* is partly gated behind exploration), that is a real economy→danger link. The economy pillar needs rare inputs from danger.
- Power: mid (dungeon exploration is mid-tier).
- Motif: M-08 (player-minted currency — scarce materials from danger gating the minting supply chain).
- via: loot-seed.

**C) Boss-key component seeding (M-15)**
Dungeon chests could seed a component needed in a KubeJS-gated high-tier Create/magic recipe — the dungeon boss chest is the acquisition path for a locked part. However, betterdungeons has no unique bosses (just spawners), so there's no boss-chest to distinguish from regular chests. This weakens M-15 compared to a true boss-fight gate.
- Red-team: Without a boss fight, a dungeon chest seed is just another loot pull. Not strong enough to be a boss-key gate. Better mod candidates for M-15 have actual boss fights.
- Verdict: REJECT — no boss fight, only spawner dungeons; M-15 requires a meaningful boss encounter to justify the "boss-key" framing.

- from: dungeon chest loot tables | via: loot-seed (magic reagents in Catacombs/Undead Fortress chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing cursed catacombs or undead fortresses is how a magic specialist bootstraps the rarest reagents — danger gates arcane progress
- from: dungeon chest loot tables | via: loot-seed (coin blanks/mint components) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon treasure is where early Numismatics coin material enters circulation — adventurers fund the economy with danger-earned coin stock
- from: dungeon chest loot tables | via: loot-seed (boss-key component) | to: create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: betterdungeons has no boss fights, only spawner rooms — seeding "boss-key" parts in generic loot chests dilutes the M-15 gating concept; a true boss fight is needed

## gtmogs   [anchors: survival, economy (2)]

**Power-read:** The worldgen substrate of the pack's entire scarcity model. Framework, no new items beyond 3 marker blocks. Already at 2 anchors (survival + economy), which the dossier correctly identifies.

**Existing anchor review:**
The survival anchor (regional ore scarcity drives exploration pressure) and economy anchor (scarce regional metals are the feedstock of M-08 coin-from-processed-scarcity and M-30 regional-scarcity gate) are both sound and load-bearing. GTMOGS is the foundation, not a content node — it enables M-03, M-08, M-30 rather than riding them.

Could we propose a 3rd anchor? Create (M-03 ore-doubling) — GTMOGS-defined ores are what Create crushes, but that's the upstream supply, not a weave of GTMOGS itself. The downstream mods (ores it places) carry those anchors. Forcing a Create anchor on GTMOGS would be misattribution.

OK — connections sound. The two anchors (survival/economy as the scarcity foundation) are exactly right. No REWORK needed.

- REWORK: none — OK, connections sound. (GTMOGS is the scarcity foundation that enables M-03/M-08/M-30 downstream; its two anchors correctly sit at the foundation level rather than claiming a production method it doesn't own.)

## galosphere   [anchors: survival (1)]

**Power-read:** Rich content mod — 127 blocks, 171 items, 9 biome-modifiers, loot=yes. The signature items: allurite_shard and lumiere_shard (reserved M-07 attunement catalysts), palladium ore/ingot (scarce regional metal, c:ingots/palladium), amber-preservation method (`galosphere:preserved_transform_recipe`), sterling armor, silver bomb, cave biomes.

The dossier lists survival as its primary anchor but notes strong 2nd-anchor candidates: magic (established via M-07), economy (palladium → M-08/M-30), Create (palladium ore-doubling M-03, deco crush M-04).

**Existing anchor review:**
The dossier lists 1 anchor (survival) but acknowledges the allurite/lumiere shards are already established as M-07 in `33-magic-web-spine.js`/`80`/`97`. That's a *real* second anchor (magic) that should already be counted. Let's flag this as undercounted.

**REWORK — anchor count:** The dossier says survival (1), but the M-07 attunement catalyst role is established and documented (`33/80/97`). Galosphere should read survival + magic (2). This is a bookkeeping REWORK, not a content change.

**Method-pull for additional weaves:**

**A) Palladium ore → Create ore-doubling (M-03)**
Palladium is tagged `c:ingots/palladium` and `c:ores/palladium`. Running it through `create:crushing` doubles the yield (a standard reward, the vanilla smelt path stays). This folds galosphere's scarce metal into the Create spine.
- Red-team: Is palladium a sensible Create-crush ore? Yes — it's a regional metal, just like copper/zinc, and is the natural next step in the ore-doubling chain. Tone: ok.
- Power: everyday-to-mid (ore-crushing is the basic Create step).
- Motif: M-03 (Create ore-doubling).
- via: recipe (create:crushing).

**B) Palladium → player-minted coin (M-08)**
Palladium is explicitly scarce and regional (GTMOGS-placed), making it a natural coin-metal: Create-processed palladium ingot → Numismatics coin (pressed via Create pressing). This is the M-08 player-minted currency motif applied to galosphere's regional metal.
- Red-team: Does palladium make a sensible coin? Yes — it's a precious metal by real-world analogy, and its regional scarcity makes minting it a specialization. The CLAUDE.md specifically calls this out as a MED candidate. Tone: ok.
- Power: mid (requires Create processing chain before minting).
- Motif: M-08.
- via: recipe (create:pressing → numismatics coin).

**C) Galosphere deco blocks → Create recycling (M-04)**
The 127 deco blocks (allurite bricks, pink salt blocks, amethyst bricks, etc.) could be crushed back lossy to raw/gravel + XP nugget, following M-04 (Create recycles deco). This ties the decoration palette into the Create web.
- Red-team: Are allurite/lumiere bricks sensibly crushable? Yes — they're cave-stone deco, no different from blackstone or deepslate bricks which vanilla crushes. The XP nugget byproduct is standard M-04. Tone: ok.
- Power: everyday (deco recycling is a low-cost utility step).
- Motif: M-04.
- via: recipe (create:crushing, lossy).

**D) Preserved_transform (amber) → magic reagent sink (M-10)**
`galosphere:preserved_transform_recipe` (amber preservation) converts items into amber-preserved form. Could preserve a Ars Nouveau or Occultism reagent in amber to slow its use or create an alternate form. However, this is very niche and amber is mostly decorative.
- Red-team: amber preservation as a magic step feels forced — there's no lore link between amber-preservation and arcane power specifically. The CLAUDE.md anti-arbitrage rule applies. Tone: mild clash.
- Verdict: REJECT — amber preservation is a decorative mechanic; forcing magic reagents through it lacks thematic grounding and adds no meaningful loop step.

**E) Palladium → M-30 regional scarcity gate**
Palladium is GTMOGS-placed regionally, so products requiring palladium are naturally region-locked (M-30). This isn't a new weave to author — it's the ambient consequence of GTMOGS placement. Record as background note, not a new candidate.
- Verdict: REJECT — M-30 is the background ambient condition of GTMOGS, not a weave to author against galosphere specifically.

- REWORK: anchor count underreported — galosphere should be survival + magic (2), because the allurite/lumiere M-07 attunement catalyst role is already established in the pack (`33-magic-web-spine.js`, `80`, `97`). The dossier's "1 anchor" is stale.
- from: galosphere:deepslate_palladium_ore (c:ores/palladium) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: palladium veins double their yield through the crusher — a regional specialist's extra ingot for the same effort
- from: palladium ingot (Create-processed) | via: create:pressing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the palladium specialist presses regional metal into coin — minting is itself a regional production role that others must trade with
- from: galosphere deco blocks (allurite bricks, pink salt, amethyst bricks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: cave-deco blocks crush lossy back to raw + XP dust — every Galosphere build contributes to the Create material web even when torn down
- from: galosphere:preserved_transform_recipe | via: amber preservation | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: amber-preserving magic reagents has no thematic grounding; it's a decorative mechanic, not an arcane transformation — forced edge

## lionfishapi   [anchors: support/library (1)]

LEAVE — pure entity-animation/rendering API (0 blocks, 0 items, no methods, loot=no). No content surface to weave.

## bakery   [anchors: survival (1)]

**Power-read:** 51 blocks, 84 items, loot=yes. The Let's Do Bakery mod. Outputs: high-tier processed foods (cakes, tarts, cupcakes, jams, breads, baguettes). Methods it uses: `farm_and_charm:crafting_bowl`, `farm_and_charm:pot_cooking`, `farm_and_charm:stove`. It already routes INTO the Farm & Charm cooking web (made-by inbound weaves). One registered method: `bakery:blank_cake_interaction`.

The dossier already notes:
- M-09 (economy sell) — RETIRED; correct to flag but wrong to propose
- M-12 (Create milling wheat→flour) as MED candidate
- Ars Vitalic as WEAK

**Method-pull:**

**A) Wheat/grain → Create milling → flour → bakery (M-12)**
The baking chain starts with flour. Create's `create:milling` can mill wheat → flour, giving the bake chain a Create on-ramp: Create mills the grain, Farm & Charm bowls mix the dough, Bakery bakes it. This inserts Create as the upstream grain processor for the whole bakery chain.
- Red-team: Is milling wheat through Create sensible for baking? Yes — millstones processing grain into flour is an obvious industrial analogy. Tone: ok.
- Power: everyday (flour is the basic input; the connection is light and appropriate for a basic).
- Motif: M-12 (processing-chain pull — raw crop through another mod's method into an intermediate that feeds other recipes).
- via: recipe (create:milling wheat → flour, then farm_and_charm:crafting_bowl → dough).

**B) Diet demand as survival pressure (M-26, ambient)**
Bakery foods are luxury sweets/breads that fill the Grains and Sugars diet groups (Diet-AppleSeed Edition auto-derives nutrition from ingredients). Stacking more food variety raises diet satisfaction, which is exactly the pressure-demand loop. However, M-26 (consumption sink) is the *ambient* food-as-demand mechanism — it's not a new weave to author since every food mod participates in this naturally.
- Red-team: Is M-26 a distinct weave here or just the ambient condition? Ambient — all food participates in the diet loop automatically. No specific hook to author.
- Verdict: REJECT — diet demand is the ambient food-pressure loop (M-26 applies passively to all food), not a distinct weave to author for bakery.

**C) Bakery goods → MineColonies food supply (M-28)**
MineColonies colonists have food demand. High-satiety bakery goods (bread, cakes) could serve as the colony's food supply at a cheaper route — the bakery player specializes in colony food provisioning. M-28 (colony route) applies when bakery output is a colony input.
- Red-team: Is there a mechanical hook? MineColonies accepts any food for colonist feeding; bakery foods would automatically qualify. The weave is "bakers as the colony's food contractors" — it's emergent, not authored. Without a specific recipe gate, this is an ambient economy outcome.
- Power: mid (the specialization role is real but doesn't require a new recipe).
- Motif: M-28 (colony route — colony demands bakery food; bakery player fills it).
- via: colony demand (emergent — no recipe change needed, just the food existing in the economy).

However, is this weave-able without authoring anything? The briefing says delivery can be "config tie" or emergent where applicable, but a weave should be a *proposed action* for Phase 3. The emergent form requires no action — it just happens. The action form (a specific bakery recipe that MineColonies bakers require) is stronger.
- Motif: M-28 (colony route — adding bakery items to MineColonies baker hut request list so the colony *demands* bakery specialization).
- via: config/KubeJS (add bakery goods to colony baker output lists).

- from: wheat → create:milling → flour | via: create:milling → farm_and_charm:crafting_bowl | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the millstone grinds the grain — a Create operator upstream of the bakery chain means bakers and engineers share the supply line
- from: bakery goods (bread, cakes, tarts) | via: MineColonies baker hut demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colony bakers request specialty goods from player bakers — provisioning a settlement's food supply is a real economic role, not just a nice smell
- from: bakery sweets (speed+strength buff stack) | via: diet pressure (M-26) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: diet demand is the ambient food-pressure loop that all food participates in automatically; no distinct Phase-3 action to author here

## libipn   [anchors: support/library (1)]

LEAVE — pure client-GUI/config library for IPN (0 blocks, 0 items, no methods, loot=no). No content surface to weave.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]

**Power-read:** 30 items (all tools + XP flasks), loot=no. Build-helper tools: hammer (3×3 mine), chisel (block-swap), trowel (random-placement), magnet, rope ladder, tape measure, hardhat. These are utility tools with no thematic progression weight. The experience_flask items store/release XP — that's interesting.

**Method-pull:**

**A) experience_flask → Create/magic XP sink (M-10 / M-12)**
The experience flasks (0–3, progressive tiers) store XP. Create's enchantment processing is XP-hungry (create_enchantment_industry). Occultism's spirit fire uses XP as a fuel. The flasks could serve as a portable XP carrier feeding these systems.
- Red-team: This is essentially a QoL bridge — XP flasks as convenient fuel. Does it advance the loop? Marginally. An XP flask as a Create enchantment-industry fuel bottle is pragmatically useful but doesn't represent a structural weave (it's just a bottled XP substitute). And the hammer/tools themselves are vanilla-mat crafted, not progression-gated.
- Tone: ok, but the mechanical contribution is thin — the flasks are a QoL item, not an economy/magic input.
- Power: everyday (XP is widely available).
- Motif: no clear motif fit — XP-as-liquid-carrier doesn't map cleanly to M-10 (which is about foreign material refined into a magic reagent), M-12 (raw crop through a processing method), or M-17 (FE charging bridge). The closest is M-05 (native-method gating) but that applies to flagship items built in their own machine, not tool utilities.
- Verdict: REJECT — no-motif; the experience_flask is a QoL tool, not a flagshipprogression item, and forcing a motif onto it is weaker than leaving it as QoL support.

**B) Hardhat / chisel → colony construction supply (M-28)**
Could MineColonies builders request hardhats or chisels as tools-of-the-trade? Thematically fun (builders need tools) but colonists have their own tool provisioning — they don't consume player-crafted tools as inputs. No mechanical hook.
- Verdict: REJECT — no MineColonies mechanic by which colonists consume these specific tools.

The dossier was right: nothing to weave here beyond its QoL support role.

- from: minecraft:experience_flask_* | via: XP storage | to: create/magic | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: experience flasks are a QoL carrier item; no motif fits cleanly (not a foreign-material reagent, not a processing-chain intermediate, not FE-charging), and the loop advance is negligible compared to native Create/Occultism XP mechanics
- LEAVE — building-tool QoL mod; no coherent content weave beyond the above reject.

## spark   [anchors: support/performance (1)]

LEAVE — server-side performance profiler with no items/blocks/methods. Pure diagnostics tooling; nothing to weave.

## startuptime   [anchors: support/perf diagnostic (1)]

LEAVE — boot-time logger; no items, no methods, no content. Zero surface.

## almostunified   [anchors: support/infrastructure (1)]

LEAVE — recipe-graph unifier (config-only, no items/methods). Its role is the pack's connectivity tool itself, not a content node to weave. Critical operational note (already in dossier, retained for completeness): never unify galosphere:*silver* as c:ingots/silver — galosphere "silver" is palladium; real silver is occultism.

## zeta   [anchors: support/library (1)]

LEAVE — modular mod-development framework/library for Quark (no player-facing content, no items, no methods). Genuine zero-content library.

## tidal-towns-1.3.4   [anchors: survival (1)]

**Power-read:** Structure datapack — 0 items, 0 biome-modifiers, loot=no. Floating ocean villages in deep-ocean biomes using vanilla blocks. The dossier says leave, but let me verify there's truly nothing.

loot=no is confirmed (no chest loot tables of its own — villages use vanilla villager loot/trades). No items to route. The structure itself creates explorable content and a potential aeronautics destination (ocean villages as trade hubs you fly/sail to).

**Weave candidate — aeronautics destination (M-31)?**
Tidal Towns ocean villages are natural aeronautics destinations — you'd fly a ship to them to trade. Is this a weave? M-31 (logistics-required bulk good) applies when *trading at scale requires the logistics arm*. But this isn't a good being moved — it's a destination. The "aeronautics destination" framing is thematic flavor, not a weave (no Phase-3 action to author).

Could we loot-seed into its structures? loot=no means no chest loot tables. Village loot is vanilla villager trades, not datapack-editable chest tables. No seeding action is available.

- LEAVE — structure datapack with loot=no and no items; the "aeronautics destination" role is thematic flavor without a Phase-3 action to author.

## ars_n_spells   [anchors: magic (1)]

**Power-read:** 0 blocks, 0 items, 0 biome-modifiers, loot=no. Pure bridge mod between Ars Nouveau and Iron's Spellbooks — unifies mana pools and enables cross-casting. The dossier correctly identifies it as a magic-internal weave with no foreign item surface.

**Existing anchor review:**
The magic anchor is sound. The question is whether the Ars↔Iron's bridge creates any *economy* or *Create* hook (M-29 cross-route). The answer: only if the unified mana enables a Create/magic bridge (M-17 FE-charging or M-01 source gem). But ars_n_spells itself contributes no items to route; its bridge is purely within magic internals.

Could the unified mana create an economy hook? A magic-as-service (M-33 service-for-hire) — a specialist enchants/spells for hire using the unified mana pool — but this is an emergent play behavior, not a Phase-3 action. No recipe to author.

OK — connections sound for its scope as a bridge mod. The magic-internal weave it provides is load-bearing for the magic pillar.

- REWORK: none — OK, connections sound. (ars_n_spells is a magic↔magic bridge; no item surface exists for a 2nd-anchor weave. Its value is keeping the magic pillar coherent.)

## fluid   [anchors: create, aeronautics (2)]

**Power-read:** 11 blocks, 18 items, loot=yes. Create fluid addon — centrifugal pump, copper taps/sinks, smart fluid interfaces, redstone valves, aqueducts, neon tubes. Already at 2 anchors (Create + aeronautics/logistics). Made-by: create:compacting, create:deploying, create:mechanical_crafting, create:mixing.

**Existing anchor review:**
Create (fluid tooling made through Create machines) and aeronautics (centrifugal pump + smart interfaces = better fluid routing for ships) are both sound. The mod is genuinely a Create extension with a logistics/aeronautics role.

**Method-pull for a 3rd anchor?**
- Could fluid's copper taps/sinks link into survival? Copper sinks are plumbing deco — thematic, but no survival-pressure mechanic.
- Could the centrifugal pump serve magic fluid transport (routing Ars source liquid / Occultism fluids faster)? The pump moves any Create-compatible fluid; if magic fluids are Create-compatible, the centrifugal pump improves their logistics. But this is an implicit infrastructure benefit, not an authored weave.
- Could aqueducts link to farming/survival? Aqueducts carry open fluid; they could route water for farm irrigation. But Create already does this, and the weave would be "same as Create, but with nicer piping."

The 2-anchor coverage is correct and complete for this mod's scope. Forcing a 3rd anchor would be artificial.

OK — connections sound. No REWORK needed.

- REWORK: none — OK, connections sound. (Create + aeronautics correctly covers a Create-extension fluid mod with logistics relevance. No forced 3rd anchor.)

## woodworks   [anchors: survival (1)]

**Power-read:** 83 blocks, 83 items, loot=yes. Wood-deco mod with a Sawmill block. Registered methods: `woodworks:sawmill` (stonecutter-for-wood) and `woodworks:crafting_special_woodenchest`. Dossier notes two 2nd-anchor candidates: M-04 (Create crush-recycle deco) and M-12 (Create cutting overlap).

**Method-pull:**

**A) Wood deco blocks → Create crushing (M-04)**
Woodworks deco blocks (boards, ladders, bookshelves, chest variants, beehives) crush back lossy to plank/sawdust + XP nugget via `create:crushing`. This is textbook M-04 (Create recycles deco, lossy). Sawdust as a byproduct is a useful intermediate — it could feed `create:compacting` → charcoal (fuel) or M-12 processing.
- Red-team: Is crushing a wooden bookshelf/chest/board into plank + sawdust sensible? Yes — wood crushes naturally to splinters/sawdust; it's the same logic as vanilla wooden blocks. Tone: ok. The sawdust byproduct as a fuel intermediate is a real bonus.
- Power: everyday (deco-recycling is basic utility).
- Motif: M-04 (Create recycles deco, lossy).
- via: recipe (create:crushing → plank + sawdust + XP nugget).

**B) Create cutting overlap (M-12 / cosmetic)**
Overlapping woodworks:sawmill outputs with Create's `create:cutting` makes wood-deco read as one unified cutting web — the Create saw produces the same outputs as the woodworks Sawmill. This is a cosmetic recipe weave that earns a Create anchor.
- Red-team: Does Create cutting logs into boards/ladders/bookshelves make sense? Yes — it's the same sawing action, different machine. The dossier rates this WEAK because the Sawmill already exists, but having both machines produce the same items enriches the Create production route without replacing the Sawmill.
- Power: everyday (basic wood processing).
- Motif: M-12 (processing-chain pull — material through another mod's processing method).
- via: recipe (create:cutting → woodworks deco outputs).
- Note: dossier rates WEAK because it's primarily cosmetic. I rate it ACCEPT — it genuinely adds a Create anchor and the two-machine path is coherent and practical.

**C) Sawmill → MineColonies builder supply (M-28)**
MineColonies builders consume wood materials. The woodworks Sawmill produces wood deco faster than hand-crafting, making the sawmill operator a supplier to colony builders. This is M-28 (colony route) if woodworks items appear in MineColonies builder/carpenter requests.
- Red-team: Do MineColonies builders specifically request woodworks items? Only if woodworks registers items under standard wood tags (c:planks, c:logs, etc.). The dossier shows no material c:tags, so woodworks items likely don't feed MineColonies requests automatically. The weave would require explicit KubeJS config to add woodworks boards to carpenter recipes.
- Power: mid (colony building supply is mid-tier).
- Motif: M-28.
- via: KubeJS (add woodworks boards/ladders to MineColonies carpenter/builder recipe requirements).
- This is a real candidate but requires authoring a KubeJS hook — valid for Phase-3.

- from: woodworks deco blocks (boards, bookshelves, chests) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvage a woodworks bookshelf through the crusher for planks and a puff of sawdust — wood investment never fully walks out the door
- from: logs/planks | via: create:cutting → woodworks deco outputs | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create saw produces the same woodworks boards and ladders as the Sawmill — two machines, one unified cutting web; engineers don't need to swap benches
- from: woodworks boards/ladders | via: MineColonies carpenter/builder requests (KubeJS) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colony carpenters request woodworks boards — the sawmill operator fills colony building orders and becomes part of the settlement supply chain

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

LEAVE — generic drop-merge QoL utility (0 items, 0 blocks, no methods, loot=no). No content surface; the entity-coalesce behavior is infrastructure, not a weave target.

## modelfix   [anchors: support/bugfix (1)]

LEAVE — client-side rendering/model bugfix (0 items, 0 blocks, no methods, loot=no). Pure rendering patch; nothing to weave.

== CHUNK COMPLETE ==

