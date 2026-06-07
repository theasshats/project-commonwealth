# Phase 2 candidates — chunk-09

## bagus_lib   [anchors: support/library (1)]
- LEAVE — pure code library (baguchi's mod suite dependency); 0 blocks, 0 items, no recipe-types, no loot. Genuine zero-content surface; no weave possible.

## ecologics   [anchors: survival (1)]

Power-read: coconut, coconut_slice (milk-substitute: clears effects), coconut_husk (bowl substitute), azalea_flower (shearable), tropical foodset. loot=yes (the beach structures drop loot). Everyday items — coconut is a common beach foraging item. The coconut_slice's milk-like effect is unique and survivally meaningful.

**Method-pull:** ecologics outputs fruit/nut/soup/food items tagged `c:foods/fruit`, `c:foods/nut`, `c:foods/soup` — these are exactly what `create:milling`, `create:mixing`, `farmersdelight:cutting`, `extradelight:juicer` want as inputs (M-12). Separately, finished tropical dishes / juices produced from them are sellable luxury goods (M-09). Red-team for M-09: are tropical dishes sufficiently "high effort"? Via `farmersdelight:cutting` + `extradelight:juicer` they are at least 2-step chain — that's mid-tier, not endgame, but M-09 says "high-effort consumable" with coconut as a seasonal coastal crop, that holds. The milk-effect substitute (coconut_slice) is everyday, not a luxury — don't overprice it.

**Candidate 1 — ecologics fruits into processing chain (M-12, Create/survival):**
The coconut and tropical fruit/nut items are ideal `create:milling` inputs (mill coconut → coconut flour/bits as a Farmer's Delight cooking ingredient) or `extradelight:juicer` inputs (coconut → coconut milk fluid). This routes ecologics produce through Create/FD methods, creating a production sub-chain (survival → Create). Coherent: milling coconuts for flour is a real-world operation; a player would nod immediately.

Red-team: does ecologics' cozy biome vibe clash with a Create mill? No — Farmer's Delight + Create Central Kitchen already bridges the cozy-culinary↔industrial gap; ecologics fruits are literally labelled `c:foods/fruit`, a category create:milling already handles in the pack. Passes.

- from: ecologics:coconut / ecologics fruit+nut c:tags | via: create:milling → extradelight:juicer | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Mill a coconut into flour or juice it into coconut milk — a beach harvest feeds the automated kitchen

**Candidate 2 — tropical dishes as economy trade goods (M-09):**
Finished tropical dishes/ciders produced from ecologics produce (after FD/ExtraDelight processing) are sellable at Numismatics — luxury travel foods, coastal specialty. Coherent: seaside specialty goods sold for coin is immediately intuitive.

Red-team: is this arbitrary? The economy pillar needs goods to sell, and coastal/tropical produce has a natural "rarity" in non-beach biomes — players on the ship (aeronautics) would want to stock tropical provisions. The M-09 caveat (player-run currency review at 0.9) applies. Passes.

- from: ecologics processed tropical dishes (via FD/ExtraDelight) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Coconut milk pie or tropical soup — a coastal specialty product priced at the market counter

**Candidate 3 — azalea_flower as magic reagent (M-10):**
azalea_flower is a unique shearable bloom. Route it via `ars_nouveau:imbuement` as a nature/growth catalyst or dye-adjacent ingredient.

Red-team: azalea_flower is extremely common (azalea grove biomes spawn everywhere). An everyday flower as a magic infusion input would trivialize whatever it produces. Unless the output is also only mid-tier, the depth scaling breaks ("never gate a basic/everyday component behind a complex recipe"). Going the other way — a basic imbuement *consuming* the flower for a minor buff — is fine in principle, but Ars already has a full botanical palette. This candidate doesn't add a *cross-system* anchor meaningfully; it just moves a flower from one place to another. REJECT — too weak a link; ecologics already gets its 2nd anchor from M-12 above.

- from: ecologics:azalea_flower | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: flower is too common for a meaningful imbuement gate; ecologics 2nd anchor already covered by M-12; forced edge

**Candidate 4 — loot-seed coins into beach/ecologics loot (M-08 adjacent):**
Ecologics has loot=yes (beach biome spawns). Seed Numismatics coins into coconut crabs' loot drop or the ecologics beach loot. Thematic fit: "find coin in a crab's shell" is a pirate-pack cliche that verges on silly.

Red-team: ecologics is a naturalist mod; having crabs drop money feels forced and gimmicky. The structures producing loot here are the coral/beach ecosystem — coins dropping from coconut crabs reads as "forced economy touch" rather than organic. REJECT — tone clash; better coin seeding comes from actual dungeon mods.

- from: ecologics beach loot (coconut crab drop) | via: loot-seed (numismatics coin) | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: coconut crab dropping money is a tone clash (naturalist mod, not treasure/pirate theme); forced economy edge

REWORK check: existing anchor is survival (1). Adding M-12 + M-09 brings it to survival+Create+economy (3). Connection chain is sound; no existing connection needs rework — the 1-anchor state is what this pass fixes.
OK — existing survival anchor is coherent.

## ding   [anchors: support/client QoL (1)]
- LEAVE — client-only audio notification; 0 blocks, 0 items, no recipe-types, no loot. Pure UX convenience; genuine zero-content surface.

## bettermodsbutton   [anchors: support/client UI (1)]
- LEAVE — client UI only (pause-screen mods button); 0 blocks, 0 items, no recipe-types, no loot. Genuine zero-content surface.

## jeed   [anchors: client UI/support (1)]
- LEAVE — JEI display-provider for status effects; 0 blocks, 0 items; its two "recipe-types" are JEI viewer categories not craftable methods; no loot. Genuine zero-content surface. (The methods-palette entry for jeed:effect_provider / jeed:potion_provider are viewer registrations, not weave surfaces.)

## vinery   [anchors: survival (1)]

Power-read: fermentation_barrel, apple_press, grapevine cultivation. Outputs dozens of named effect-bearing wines, ciders, apple_juice, applesauce, apple_mash. loot=yes (winemaker villager has trades). 168 items, 139 blocks. Mid-tier finished consumables — wine is not endgame but distinctly non-trivial (multi-step fermentation, aging). The fermentation methods (vinery:apple_fermenting, vinery:apple_mashing, vinery:wine_fermentation) are the connective surface; they accept grapes/apples/fruit as inputs.

**Method-pull:** vinery's output materials — wines, juices, apple_mash, applesauce — are ideal sellable luxury goods (M-09). The dossier's own 2nd-anchor candidates flag this strongly. Additionally, vinery:apple_mash is a fermented intermediate that could feed Create mixing (e.g., mix apple_mash + yeast → a solvent/alcohol intermediate for another recipe chain) — M-12 processing-chain pull. Red-team for M-12: is routing Vinery juice/mash through Create mixing coherent? Vinery already has a self-contained fermentation pipeline; Create would be a *parallel* processing path or downstream step. The strongest candidate here is the economy edge (wines as luxury trade goods), which is "first-class obvious."

**Candidate 1 — vinery wines as Numismatics luxury goods (M-09):**
Effect-bearing wines (each requiring grape cultivation, fermentation, optional aging) are the pack's premiere artisan alcohol — exactly the "high-effort consumable" the M-09 motif was written for. Price at Numismatics counter: a bottle of aged aegis_wine or chorus_wine for a few sprockets.

Red-team: M-09 carries a player-run-currency review caveat (0.9 economy update). The link itself is sound — it's the canonical example of M-09. Does tone hold? Yes: a rustic vineyard selling wine for coin is a natural image. Passes.

- from: vinery wines/ciders (finished fermented goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A named bottle of aged wine — grape-grown, fermented, and bottled — sold at the market for a sprocket or two

**Candidate 2 — vinery:apple_mash / grape_juice through Create mixing (M-12):**
Route vinery:apple_mash or grape juice into create:mixing as a fermentation-solvent intermediate used in another recipe (e.g., mix with sugar → yeast culture intermediate that feeds a more complex brewing chain). This gives vinery a non-trivial Create connection.

Red-team: vinery already has its own fermentation loop — forcing a Create:mixing step onto its *internal* chain is invasive and redundant. However, using mash/juice as an input *into a Create recipe for something outside Vinery* (e.g., a Farmer's Delight dish, or a Create food recipe) is a clean downstream pull. Still, the Create link would be weak — vinery is not a Create mod and the overlap feels instrumental rather than organic. The M-09 economy anchor is the clearly stronger 2nd pillar. This candidate risks making a basic food-processing step unnecessarily complex. REJECT — M-09 already provides the 2nd anchor; this Create edge is weaker and risks gating a mid-tier food item behind Create machinery.

- from: vinery:apple_mash / grape_juice | via: create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: vinery already has internal fermentation methods; routing its intermediates through Create:mixing is redundant and invasive; economy anchor (M-09) is stronger and sufficient for 2nd pillar

**Candidate 3 — vinery fruit/wine as seasonal crops (M-16):**
Grapes are climate-sensitive (jungle, temperate, etc.) and the game has Serene Seasons — scope a seasonal variety of grapes that only ripens in summer, making a particular wine variant seasonally obtainable. This would be a config or datapack gate rather than a recipe.

Red-team: this is a worldgen/config gate, not a weave (no method routing). Additionally, vinery already has a climate model for grapevines; piggybacking Serene Seasons on top might feel redundant. M-16 is "a crop/material obtainable only in a given Serene Season feeds a machine/ritual" — here the seasonal gate produces a wine that feeds the Numismatics economy, which is a valid chain. However, the delivery is config/datapack (not recipe), and this is more of a design suggestion than a weave candidate. Borderline.

- from: vinery seasonal grapes (summer-only variants via Serene Seasons config) | via: season-gated worldgen/config | to: survival→economy | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: delivery is a config gate not a method-routing; the seasonal angle is attractive but M-09 already captures the economy link; would need a distinct non-fungible seasonal wine to have real bite — note as a design suggestion rather than a weave

REWORK check: existing anchor survival (1). M-09 accept brings it to survival+economy (2). OK.
OK — existing survival anchor is coherent. No rework needed.

## spark   [anchors: support/performance (1)]
- LEAVE — CPU/memory profiler; 0 blocks, 0 items, no recipe-types, no loot. Purely a server diagnostics tool; no gameplay content surface whatsoever.

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — client HUD overlay showing armor durability icons; 0 blocks, 0 items, no recipe-types, no loot. Pure visual display; genuine zero-content surface.

## sounds   [anchors: support/client polish (1)]
- LEAVE — client SFX-overhaul, 170+ replacement sounds; 0 blocks, 0 items, no recipe-types, no loot. Pure audio polish; genuine zero-content surface.

## revelationary   [anchors: support/library (1)]
- LEAVE — advancement-gated block-visibility library (DaFuqs); 0 blocks, 0 items, no recipe-types, no loot. Pure API/infrastructure; no weave surface of its own. (It enables M-05-style gating in dependent mods, but the weave lives with those mods, not here.)

## dungeons_arise_seven_seas   [anchors: survival (1)]

Power-read: oceanic structures (galleons, floating fortresses, sunken ruins) with loot chests; loot=yes; 0 items/blocks of its own; all loot via vanilla + pack tables. The structures are the content surface — exploration risk + reward. The "naval/ship" theme is thematically adjacent to aeronautics (ships, sea travel), but these are static structures.

**Method-pull:** loot=yes is the weave surface. The structure mod's delivery method is loot-seeding (Phase-3 datapack edit). The dossier already notes the loot surface; the question is *what to seed* and *which system it connects*. Three options:
1. Seed Numismatics coins (M-08 / M-14) — treasure from sunken galleons paying coin is immediately thematic for a nautical dungeon.
2. Seed magic reagents (Ars source_gem, Occultism materials) gating magic progression (M-02).
3. Seed aeronautics/Create parts (nautical salvage yielding copper sheets, brass, or Aeronautics components) — thematic with the ship motif, but aeronautics components are production-side; seeding them as loot is a stretch.

**Candidate 1 — loot-seed Numismatics coins as nautical treasure (M-14 / M-08 adjacent):**
Galleon and floating fortress chests seed a modest coin payout (cog/spur/bevel) as pirate treasure — the "sunken galleon has gold" trope maps directly onto the pack's economy. This connects dungeons_arise_seven_seas to the economy pillar via combat-and-exploration → coin (M-14, bounty-drop economy pattern).

Red-team: M-14 is "bounty board consuming mob drops pays coin" — here it's a chest loot seed, not a bounty board. The closest motif is M-08 (coin from processed scarcity) or M-14's principle (combat/effort → coin). The delivery is loot-seed, which is explicitly approved in the briefing. Tone: pirate/nautical treasure dropping coin is strongly thematic — this is exactly when loot-seeding earns its place. Does the motif fit exactly? M-08 says "scarce regional metal → Create-processed → minted into coin"; M-14 says "bounty board mob drops → coin payout." Neither is a perfect fit for "loot chest → coin drop." However M-14's *principle* (combat/exploration effort → coin reward) maps cleanly, and the delivery is loot-seed not a board. Tagging M-14 with the understanding that the coin is found, not bounty-redeemed.

- from: dungeons_arise_seven_seas galleon/fortress loot chests | via: loot-seed (numismatics coins: cog/spur/bevel) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Crack open a sunken galleon's strongbox and find Numismatics coin — nautical treasure pays real currency

**Candidate 2 — loot-seed magic reagents gating progression (M-02):**
Seed rare Ars Nouveau source_gem shard or an Occultism tome/ingredient into the deeper fortress/sunken ruin chests as a magic-progression gate. "Explore naval ruins to find the arcane text/component needed for the next ritual" is a coherent exploration → magic link.

Red-team: is this thematically forced? The nautical dungeons have no inherent magic character — they're a pirate/naval adventure mod. Placing Ars/Occultism reagents in them feels arbitrary unless the lore is that the sea-farers were magic-users. The tone isn't a hard clash (magic books wash up in ocean ruins all the time in fantasy) but it's weaker than the coin link. Also, magic reagents are better seeded in dungeons with a magic identity (catacombs, undead fortresses). REJECT — tone is weak; the ocean/naval aesthetic doesn't support magic seeding as naturally as it supports treasure/coin; M-02 is better applied to more thematically aligned dungeon mods.

- from: dungeons_arise_seven_seas fortress/ruin loot | via: loot-seed (magic reagents) | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: naval/pirate dungeons have no inherent magic identity; seeding magic reagents here is thematically weaker than coin; M-02 fits better in magic-themed dungeons

REWORK check: existing anchor survival (1). M-14 ACCEPT brings it to survival+economy (2). OK.
OK — existing survival anchor is coherent. No rework needed.

## mousetweaks   [anchors: support/client QoL (1)]
- LEAVE — client inventory-drag/scroll-wheel convenience; 0 blocks, 0 items, no recipe-types, no loot. Genuine zero-content surface.

## dndesires   [anchors: Create (1, deep)]

Power-read: 5 registered processing methods (dragon_breathing, freezing, hydraulic_compacting, sanding, seething), 84 blocks, 119 items, loot=yes. Already uses create:mixing, mechanical_crafting, item_application, filling, emptying — deeply Create-native. Key items: hydraulic_press (for hydraulic_compacting), catalyst sails (freezing/seething/sanding/blasting as fan-processing variants), rubber sap/sapling, cardboard_package_* (logistics), milkshakes (food consumables). Rubber is an industrial intermediate (mid-tier); milkshakes are everyday food.

**Method-pull:** dndesires outputs rubber (rare/scarce synthetic material), milkshakes (food), and cardboard packaging. The 5 fan-processing methods accept belt-fed foreign materials. The dossier notes survival (food) and economy as 2nd-anchor candidates.

**Candidate 1 — milkshake foods entering survival/food web (M-12):**
dndesires:chocolate_milkshake, dndesires:glowberry_milkshake (and any vanilla-flavored variants) are foodstuffs produced via dndesires machines. They enter the Spice-of-Life / food-variety pillar naturally. Routing Create-produced intermediates (chocolate? milk?) through dndesires mixing to produce a milkshake, and then the milkshake as a usable food item, makes a Create→food chain legible.

Red-team: milkshakes from a Create-style machine is tonally coherent — industrial food production is a classic Create modpack trope (Create Central Kitchen does exactly this). The everyday tier is appropriate for a common-ish food item. Does this advance the loop? survival food demand exists; Create producing food reduces that pressure (production → survival). Passes.

- from: dndesires milkshake foods (chocolate_milkshake, glowberry_milkshake) | via: dndesires machine output (fan-processing + mixing) feeding c:foods chain | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: The industrial fan + basin outputs a milkshake — Create's food production arm reaches into the survival food loop

**Candidate 2 — rubber as a processed scarcity intermediate (M-08 / M-05):**
dndesires:rubber is synthesized from rubber_sap via hydraulic_compacting (water + sap). Rubber is a scarce synthetic material with no vanilla equivalent. Route it as a required input for specific Create Aeronautics gaskets/seals or a tech recipe (M-05 native-method gating, or M-24 mechanical component → propulsion). Rubber for airship seals / gaskets is thematically obvious.

Red-team: is rubber in the right power tier for an aeronautics component? Mid-tier seems right — it's not endgame but not trivial either (requires a rubber sapling, sap farming, and the hydraulic press). An aeronautics gasket made of rubber is immediately coherent to any player. Does this advance the loop? Create production → aeronautics (economy logistics arm) — yes, this advances the production→economy arc. M-24 is "mechanical component → propulsion/control recipe" — a rubber seal/gasket for engine components fits. Alternatively M-05 "native-method gating" if rubber gates a Create Aeronautics machine built in its own method. The M-24 label is stronger here (rubber as a required drivetrain/seal material).

- from: dndesires:rubber (from hydraulic_compacting sap+water) | via: Create Aeronautics construction/engine recipe (as gasket/seal input) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Vulcanize rubber from the hydraulic press — airship engine seals need it before the ship is airtight

**Candidate 3 — cardboard packaging as logistics tie-in (economy / aeronautics):**
dndesires:cardboard_package_* are logistics packaging items. These could anchor to the economy pillar as a required shipping material (pack items for transport in the economy → trade route context), or serve as a consumable for Aeronautics cargo manifests.

Red-team: cardboard packaging has the right vibe for a shipping/logistics economy. However, the delivery here is unclear — there's no Aeronautics "cargo packaging" recipe in the methods palette, and forcing cardboard into a Numismatics sell is trivial. The connection is thematically appealing but method-thin. Also cardboard is already registered as `block/storage_blocks/cardboard` in create c:tags — Create itself uses it. This is more of a Create-internal connection (cardboard → Create's existing cardboard tag) than a new cross-system weave. REJECT — the method-routing is thin; cardboard is already part of Create's own material tag; the logistics angle needs a specific Aeronautics method that doesn't exist in the palette.

- from: dndesires:cardboard_package_* | via: aeronautics cargo recipe or economy sell | to: aeronautics/economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — no existing Aeronautics cargo-packaging method in the palette; cardboard is already in Create's own c:tag; forced without a concrete method target

**Candidate 4 — dndesires fan processing methods as economy intermediate route (M-08):**
Use dndesires:seething (hot-blast fan) or dndesires:sanding to process a scarce metal ore → refined intermediate → coin. This extends M-08's Create-processing chain with an additional dndesires step.

Red-team: this is valid in principle — dndesires:seething is essentially a heat-processing fan method, analogous to create:haunting but for heat. Seething a foreign material into a refined intermediate that then mints to coin adds one more step (GregTech-style depth). However, it risks "gating basic/everyday components behind a complex recipe" (CLAUDE.md guardrail) unless the material being processed is already mid/endgame. As a chain extender for an already-scarce regional metal → seething → refined form → coin, this is reasonable. But M-08 is already established via Create methods; this candidate doesn't add a new system anchor for dndesires specifically — it just routes existing M-08 candidates through one more step. Borderline; REJECT as redundant — M-08 chains are handled by the Create anchor itself, and this doesn't give dndesires a new system anchor.

- from: foreign scarce metal ore | via: dndesires:seething (fan-processing) → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 is already handled through Create methods; routing an extra seething step doesn't give dndesires a new system anchor — it extends an existing chain without adding a cross-system link for this mod

REWORK check: existing anchor Create (1). Two ACCEPTs (M-12 survival + M-24 aeronautics) bring it to Create+survival+aeronautics (3). Strong.
OK — existing Create anchor is coherent and deep. No rework needed.

## timm   [anchors: support/client QoL (1)]
- LEAVE — client biome/dimension title overlay; 0 blocks, 0 items, no recipe-types, no loot. Pure cosmetic immersion; genuine zero-content surface.

## azurelib   [anchors: support/library (1)]
- LEAVE — GeckoLib-fork animation engine; 1 utility block (lightblock, internal), 0 player-facing items, no recipe-types, no loot. Genuine zero-content library; no weave possible.

## betterdungeons   [anchors: survival (1)]

Power-read: YUNG's overhaul replacing vanilla dungeons with Catacombs (zombie), Undead Fortresses (skeleton), Spider Caves. 0 items/blocks, 1 biome-modifier, loot=yes. Pure adventure/exploration content. The dungeon types have distinct mob identities (zombie/undead, skeletal warriors, spiders) — these mob identities have real consequence for M-02 (mob drop reagent sink) and M-14/M-15 (boss-key / bounty).

**Method-pull:** loot=yes is the surface. Three dungeon types → three seeding opportunities. The mob identities also suggest what *mob drops* come out of the dungeons as farming targets — those drops are the reagent surface.

**Candidate 1 — loot-seed magic reagents in dungeon chests (M-02):**
Undead Fortress and Catacombs are thematically aligned with Occultism (undead rituals, necromancy) — seed Occultism ritual components or Ars Nouveau source_gem shards in their chests as exploration-gated magic progression. "The catacombs held the necromancer's tome" is immediately coherent.

Red-team: is this tone-appropriate? YUNG's dungeons are vanilla-faithful but with more structure and atmosphere — Catacombs and Undead Fortresses have a clear gothic/necromantic vibe that matches Occultism. Spider Caves are more neutral (nature/poison). The undead-structure → Occultism link is natural; this is the cleanest magic loot-seed opportunity in the pack. Does it advance the loop? Exploration pressure → magic reagent → magic production. Yes, survival effort → magic anchor. Passes.

- from: betterdungeons Catacombs/Undead Fortress loot chests | via: loot-seed (occultism ritual components / ars_nouveau:source_gem shard) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The catacomb deepens into a necromancer's crypt — the chest inside holds the occult reagent needed for the next ritual

**Candidate 2 — loot-seed Numismatics bounty payout tie-in (M-14):**
Bountiful bounty boards could have entries targeting dungeon-specific mobs (the Catacombs zombie/skeleton variants). Completing a "clear the catacombs bounty" → coin payout. However, that's a Bountiful config change, not a loot-seed into betterdungeons' own tables. Alternatively, seed a small coin cache in a dungeon chest.

Red-team: seeding coins in dungeon chests is coherent (treasure hunting → coin), but betterdungeons' own chests don't have particularly "wealthy" loot — they're exploration rewards. The bounty board angle (M-14) is a better fit (combat effort → coin payout via a board), but that config lives in Bountiful's own integration, not in betterdungeons' loot tables. Seeding coins directly into the loot tables feels redundant next to the bounty board mechanism. REJECT — the coin tie-in is better handled by Bountiful bounties targeting dungeon mobs rather than loot-seeding into betterdungeons' chests directly; this is a Bountiful-side weave.

- from: betterdungeons dungeon loot chests | via: loot-seed (numismatics coins) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: coin seeding in betterdungeons chests is redundant — the bounty board (Bountiful) targeting these dungeon mobs is the cleaner economy link; weave lives on the Bountiful side

**Candidate 3 — boss-key drops from dungeon mini-bosses (M-15):**
YUNG's dungeons can spawn spawner-based "boss encounters" — gate a specific crafting unlock (a complex Create or tech recipe) on a rare drop from a skeleton champion / zombie lord from the Undead Fortress. Thematically: "defeat the dungeon lord to unlock the next tier."

Red-team: does YUNG's Better Dungeons actually have named bosses with unique drops? The dossier says "mob spawners" — these are standard vanilla spawners with mob variants, not custom boss mobs with unique drops. Without a custom boss drop, M-15 can't be seeded here (M-15 requires a boss's "signature drop"). Forced. REJECT — YUNG's dungeons use standard spawners, not custom boss mobs with signature drops; M-15 requires a unique boss drop item which this mod doesn't provide.

- from: betterdungeons spawner mobs (zombie/skeleton/spider) | via: boss-key drop in loot table | to: Create/tech | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: YUNG's dungeons use vanilla spawner mobs, not custom bosses with signature drops; M-15 requires a unique boss-drop item this mod can't provide

REWORK check: existing anchor survival (1). M-02 ACCEPT brings it to survival+magic (2). OK.
OK — existing survival anchor is coherent. No rework needed.

## create   [anchors: Create (1)]

Power-read: the pack's tech spine — 17 recipe-types, 643 blocks, 775 items, 3 biome-modifiers, 63 c:tags, loot=yes. This is the method library itself; nearly every weave in the pack routes through one of its methods. The dossier explicitly marks create as the hub other mods weave INTO, not a mod needing a 2nd anchor. The design model (CLAUDE.md) reinforces this: "Create is the spine, not a tollgate."

**Assessment:** The dossier is correct — Create is the universal method-sink and should not be given additional "outbound" system anchors of its own; doing so would create circular dependencies. Every other pillar's weave already points inward at Create. The "N/A as a recipient" call in the dossier is the right read.

However, reviewing the existing anchor state: Create anchors at "Create (1)" in the dossier. In the pack's loop, Create sits in the *production* pillar — it is both Create-anchor and the functional heart of production. Aeronautics is described as Create's logistics arm. Does Create need to formally register aeronautics or economy as a 2nd anchor? Given the design principle that aeronautics is the economy's logistics arm (not a separate Create sub-system), the answer is no — those connections are structural, not motif-level weaves.

No new weave candidates. No rework needed on the existing anchor.
LEAVE — Create is the method hub; weaves flow into it from other mods. Authoring outbound edges from Create to other pillars inverts the loop and creates circularity. Dossier's N/A verdict is correct.

OK — no rework. Create's single anchor is by design; it is the weave target, not a weave source.

## enhancedcelestials   [anchors: survival (1)]

Power-read: lunar event mod — Blood Moon (hostile spawn surge + no sleep), Harvest Moon (crop growth/drop boost), Blue Moon (luck + loot upgrade). Also: meteor block (4 blocks), space_moss block-set (4 blocks), space_moss_bug mob. 0 c:tags, loot=no. 5 items total. Everyday/mid power — meteor and space_moss are ambient drops, not crafted; the moon events are world-state modifiers.

**Method-pull:** The dossier identifies two candidates: (1) create:crushing on meteor blocks (M-04 / star-metal byproduct), (2) moon-event-gated rituals (M-22 lunar/celestial reagent). The M-22 motif was specifically written for Enhanced Celestials and related mods ("applies to ALL the moons"). This is the priority path.

**Candidate 1 — moon event gating a magic ritual (M-22):**
The Blood Moon, Harvest Moon, or Blue Moon events gate a ritual or processing step — e.g., an Ars Nouveau ritual only completable during a Blood Moon (dark energy), or an Occultism spirit_fire transmutation that yields a bonus celestial essence under a Blue Moon. M-22 specifically says "a material/effect available only during a moon event feeds a method."

Red-team: is the event-gating mechanic actually achievable in 1.21.1/NeoForge without custom mod code? Enhanced Celestials fires world events and sets a "current moon" game state; KubeJS can listen to events and gate recipes. However, gating a *recipe* on a moon event requires runtime game-state checking (not a static recipe), which is unusual and may need a custom KubeJS server script checking the moon phase. This is a design-feasibility concern, not a tone concern — the concept is sound. The dossier flags this as a weak candidate ("event-gating, not item-gating"). The M-22 motif says "a material/effect available only during a moon event feeds a method" — the key phrase is "material/effect." If Enhanced Celestials provides an item (like the space_moss block being more harvestable during Harvest Moon, or the meteor being more common) then it's item-gating. Otherwise it's event-gating.

A stronger read: Harvest Moon boosts crop drop rates — this means any crop becomes a richer input during Harvest Moon. This is a passive buff, not a material gate. The Blue Moon grants Luck — also passive. The most concrete candidate: design a "lunar-charged" variant where processing space_moss (or meteor) under a specific moon condition yields a bonus reagent. But this requires a KubeJS event hook.

Alternative approach: treat the meteor block as the "lunar material" that is the M-22 delivery. Meteor falls during Enhanced Celestials events → harvesting it provides a lunar material that feeds a magic ritual. This is item-based, not pure event-based.

- from: enhancedcelestials:meteor (lunar-fallen stone, collectible after meteor shower events) | via: occultism:spirit_fire or ars_nouveau:imbuement (lunar material → celestial essence) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: A meteor crash-lands under the Blood Moon — smelt its fragment in spirit-fire to draw out a celestial essence needed for a lunar ritual

**Candidate 2 — meteor block as Create crushing byproduct (M-04):**
Crush enhancedcelestials:meteor → iron + nickel nuggets + experience_nugget byproduct. Meteoritic iron is a real-world concept; a player seeing "I can crush this fallen star for metal" is an immediately satisfying callback.

Red-team: is meteor block an everyday or scarce material? Meteors fall during Enhanced Celestials events and are picked up from the world — not infinite, but not extremely rare either. Mid-tier is the right power level. Crushing meteor for metal fits M-04 (Create recycles deco — lossy; a meteor is ambient worldgen content, not a deco block exactly, but the principle is the same). Tone: completely coherent — meteorites yielding iron/nickel is geologically accurate and immediately sensible. Does this advance the loop? Create production gains a minor feedstock from ambient worldgen (scarcity foundation → Create production). Yes, advances the scarcity→production arc.

- from: enhancedcelestials:meteor block | via: create:crushing → iron/nickel nuggets + experience_nugget | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: Crush the fallen meteor in a Create mill — meteoritic iron and a bit of nickel fall out, a small bonus from the night sky

**Candidate 3 — space_moss as a magic reagent (M-10):**
enhancedcelestials:space_moss_block is a unique ambient material from meteor-impact sites. Route it via ars_nouveau:imbuement as an exotic nature/celestial reagent.

Red-team: space_moss is ambient/rare-ish (spawns near meteors). As a magic input it has an exotic feel — space-touched moss for an imbued potion. But space_moss already has a thematic home in the meteor/impact vibe. Is it distinct enough from other flora to warrant a magic use? Maybe — it's "otherworldly," which reads as arcane. However, with the meteor already being the M-22 candidate (which is stronger), adding space_moss as a separate magic reagent via M-10 is redundant and dilutes the meteor's specialness. REJECT — space_moss as a separate magic reagent redundant with meteor being the lunar material; two lunar items from one mod feeding two separate magic methods fragments the mod's identity.

- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: redundant with the meteor being the M-22 lunar material; two separate magic uses from one small mod over-fragments its identity; keep the meteor as the single thematic hook

REWORK check: existing anchor survival (1). Two ACCEPTs (M-22 magic + M-04 Create) bring it to survival+magic+Create (3). Strong.
OK — existing survival anchor is coherent. No rework needed.

## create_central_kitchen   [anchors: Create, survival (2)]

Power-read: already ≥2 anchors (Create + survival). No registered recipe-types, 0 blocks, 0 items, loot=no. It is a pure recipe/integration layer — it adds hundreds of Create recipes (sequenced-assembly sandwiches/pies, arm/packager support for cooking blocks) and the Blaze Stove booster. The method surface is borrowed from Create (sequenced_assembly, mechanical_crafting) and the food mods it bridges. 0 own methods.

**Assessment:** At 2 anchors, the task is to check for new links AND flag any REWORK on existing connections. The dossier notes an optional 3rd anchor: economy via a finished automated dish as a Numismatics luxury good (M-09), flagged WEAK.

**Candidate 1 — automated feast-level dish as economy luxury good (M-09):**
Create Central Kitchen's signature output is an automated feast (sequenced-assembly sandwich, pie, or feast block). A high-effort automated feast — requiring FD/ExtraDelight cooking + Create arm + sequenced-assembly chain — is exactly the "high-effort consumable" M-09 targets. Selling a finished automated pie or feast block at Numismatics counter adds the economy anchor.

Red-team: the dossier says WEAK, and the reason is that this feels like a generic "food → sell" link rather than something specific to Create Central Kitchen. However, the *automation* aspect is what makes it special — this is not "put a pie in a shop," it's "your automated kitchen produces trade goods." The distinction is that Create Central Kitchen is the *production automation* step that makes a luxury good economically viable at scale (you can't easily mass-produce a 12-ingredient sequenced-assembly sandwich by hand). That scale-production → trade-goods link is coherent with M-09 and advances the production→economy arc. Tone: coherent. Passes, but note the caveat that the economy anchor lives more on the "Numismatics prices these dishes" side than on any Create Central Kitchen recipe.

- from: create_central_kitchen automated feast/sandwich/pie (sequenced-assembly output) | via: numismatics sell (as luxury food good produced at scale by automation) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The automated kitchen churns out pies by the batch — stack them in the market chest and sell the surplus for coin

REWORK check: existing anchors Create+survival (2). M-09 ACCEPT brings it to Create+survival+economy (3). Existing connections sound.
OK — Create and survival anchors are well-grounded (the mod's entire purpose is bridging the two). No rework needed.

## openpartiesandclaims   [anchors: support/server protection (1)]
- LEAVE — chunk-claim + player-party server protection framework; 0 blocks, 0 items, no recipe-types, no loot. Pure social/protection infrastructure; no content surface whatsoever. Underpins the co-op premise structurally but has nothing to weave.

== CHUNK COMPLETE ==

