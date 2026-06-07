# Phase 2 candidates — chunk-14

## pingwheel   [anchors: support/QoL (1)]

- LEAVE — zero content surface: no items, no recipes, no loot tables. Pure multiplayer keybind / marker utility. No coherent game-loop weave is possible; forcing one would be contrived.

## enhancedcelestials   [anchors: survival (1)]

**Method-pull:** The mod has two discrete content types: (a) world-state lunar events (Blood Moon / Harvest Moon / Blue Moon) that alter gameplay globally, and (b) physical items — `enhancedcelestials:meteor` block and `enhancedcelestials:space_moss_*` blocks. The events map cleanly to M-22; the meteor block to M-04.

- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen-star rock crushes to iron chunks + a nickel byproduct (or gravel + xp-nugget), making meteor fields a minor Create ore-doubling stop; thematically obvious (space rock = metal-bearing)

- from: Blood Moon / Blue Moon lunar events | via: event-gated input → ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a particular ritual or imbuement only completes under a Blood or Blue Moon — the world's most dangerous night becomes the only window for a specific arcane step; the moon-calendar is a real planning constraint for the magic specialist

- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: space_moss is worldgen decoration/mob-spawn-egg flavor, not a material with an obvious arcane identity; "mossy space rock → magic reagent" is too arbitrary — the tone is sci-fi cosmetic, not eldritch organic; no coherent player nod

- from: Harvest Moon event | via: config-tie → Serene Seasons seasonal multiplier | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is not a new weave — Harvest Moon's crop-growth boost is a global modifier on existing crops; it already rides the survival pillar. No second pillar is added; the link is ambient, not a method-routing. Records as rejected to document the considered path.

REWORK: existing anchor (survival) is sound — the lunar events are legitimate survival pressure. No rework needed on the existing anchor; the two ACCEPT candidates above add Create and magic as a 2nd anchor.

## t_and_t   [anchors: survival (1)]

**Method-pull:** Pure worldgen / loot-bearing structure mod — 0 registered blocks/items of its own, but `loot=yes`. The correct delivery is loot-seed, not recipe. Its structures carry loot chests and villager-trade hooks. The 16 biome-specific village variants are natural trade hubs; conquerable outposts and ocean ships are discovery/danger nodes.

- from: t_and_t loot tables (conquerable forts / outposts / ocean sail-ships) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed rare Numismatics coin denominations into high-danger fort/ship chests — the first coin a player sees comes from the world's most dangerous structures, not a mint, establishing coin as something found and fought for before it's minted; pulls the exploration/danger face of survival into the economy leg of the loop

- from: t_and_t loot tables (biome village chests) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed pack-specific trade goods (regional raw materials, scarce seeds, magic reagent fragments) into village-variant chests so each village style reflects its biome's regional specialty — exploration and looting produce goods that feed the trade economy; a coast-village yields fish-processing byproducts, a badlands-village yields a cactus-fiber reagent, etc.

- from: t_and_t ocean sail-ships | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: while a ship could carry a magic reagent in its chest, the connection is thin — ships are a general adventure loot-table, not thematically tied to a magic mob drop. M-02 is specifically "isolated mob/boss drop given a magic use"; a chest in a ship structure is not a mob drop. Route the magic loot via a boss-specific structure if one exists; this ship entry is too generic. Records as rejected to document.

- from: t_and_t village-hub role | via: worldgen/spawn | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the service-for-hire motif requires a mechanic (enchant-for-hire, colony contract, etc.) — t_and_t is pure worldgen with no service mechanic. The village *setting* could host a player service stand, but that's emergent social behavior, not a packable weave. The loot-seed candidates above are the right delivery for this mod. Records as rejected.

REWORK: dossier's 2nd-anchor candidate cited M-09 ("luxury good → coin") which is **retired**. The correct framing for the village-trade-hub economy link is M-08 (coin seeded as loot from dangerous structures) and M-34 (combat/exploration-route supply → economy). Both are proposed as ACCEPT above.

## inventoryprofilesnext   [anchors: client-only QoL / support (1)]

- LEAVE — zero content surface: no items, no recipes, no loot tables. Client-side inventory sorting and slot-locking UI only. Already handled in CLAUDE.md as a texture-override case (the IPN arrow fix). No weave is possible or desirable.

## create_ironworks   [anchors: Create (1)]

**Method-pull:** The mod outputs a full metal-vocabulary (tin, bronze, steel ingots/plates/nuggets/storage blocks, armor, tools) via Create methods. Its 44 c:tags make it a natural join key for any metal-consuming method. Already well-anchored to Create; the dossier correctly identifies the two main candidates.

- from: create_ironworks:tin_ingot / create_ironworks:steel_ingot | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a genuinely scarce new regional ore — crushing → alloying → pressing into a Numismatics denomination (a "tin spur" or equivalent) makes the minting step itself a Create specialization; the scarcity of tin ore (3 biome-modifiers, not ubiquitous) means only tin-region players can mint it, enforcing regional economic roles

- from: create_ironworks:steel_plate | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the archetypal structural metal — requiring it as an airframe ingredient for mid-tier Aeronautics hulls is exactly what M-23 was made for; steel plate is earned (Create alloy chain: ore → crushed → mixed → steel → pressed plate), so airframes cost real fabricated material rather than raw iron; scales with ship tier

- from: create_ironworks:bronze_ingot / bronze_armor | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: bronze is an industrial alloy, not a magical material; imbuing a bronze ingot into a magic reagent has no player-nod — there's no folkloric or thematic bridge between tin/copper alloys and arcane infusion in this pack's palette (tin/bronze → magic is the wrong flavor pairing). The Create → aeronautics and economy links are the coherent routes.

- from: create_ironworks:tin_ingot (regional ore) | via: worldgen-scarcity constraint | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: tin ore is seeded by 3 biome-modifiers (not a universal spawn), making tin — and by extension bronze and the tin-mint coin — a region-locked good that must be traded across regions to reach players who lack it; the scarcity is already built into the worldgen, this weave surfaces it as a named trade dependency

REWORK: OK — existing Create anchor is sound and dossier candidates are well-aimed. The M-08 candidate in the dossier is correct (and accepted here). The "survival/worldgen" note in the dossier is better framed as M-30 (regional scarcity gate) than as a standalone survival weave, which the ACCEPT above does.

## upgrade_aquatic   [anchors: survival (1)]

**Method-pull:** The mod exports raw/cooked fish c:tags and a wood/deco block family. Already pulls through `woodworks:sawmill`. Fish outputs are the primary weave surface — they tag as `c:foods/raw_fish`, `cooked_fish`, `raw_perch`, `raw_pike`, `raw_lionfish`, `cooked_perch`, `cooked_pike`, `cooked_lionfish`, plus `pie` and `berry`. The wood families (driftwood/riverwood) map to M-04.

- from: upgrade_aquatic raw fish (pike/perch/lionfish) | via: farmersdelight:cooking + create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the pack's processing chain — raw fish through the cutting board into FD dishes, or milled/mixed in Create into a fish sauce / brine — turns ocean diversity into a real cooking web; lionfish in particular (a real-world invasive) works as an exotic delicacy ingredient that requires more prep steps, naturally deepening its chain

- from: upgrade_aquatic:driftwood_* / riverwood_* blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco wood families crush lossy back to sawdust/gravel + xp-nugget, standard Create deco-recycle; adds the aquatic wood sets to the Create recycling web with no added complexity

- from: upgrade_aquatic cooked fish (cooked_pike, cooked_perch, cooked_lionfish) | via: consumption as food | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: this is ambient — food is consumed by eating, which is already the survival pressure it creates. M-26 (consumption sink) applies when an item is specifically *spent* against pressure in a *mechanic* (fuel/upkeep). The fish being food is the mod's core identity, not a new weave. Records as rejected to document.

- from: upgrade_aquatic coralstone block family | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone is a large deco family but its crushing is a low-value rote addition (gravel/sand + xp nugget); the driftwood/riverwood accept above already covers the "aquatic deco → Create recycle" slot cleanly. Adding coralstone too is duplicative without adding a second pillar. Keep the reject to avoid over-weaving.

REWORK: OK — survival anchor is correct. The dossier's M-12 candidate (fish → cooking chain) is well-aimed and accepted. The M-09 ("luxury sellable") candidate is retired; the correct economy framing for prepared seafood would be M-33 (a cook specialist selling prepared dishes as a service/trade), but that's emergent social behavior, not a packable weave — no economy candidate is accepted here.

## corgilib   [anchors: support / library (1)]

- LEAVE — genuine zero-content library: 0 blocks, 0 items, no loot, no recipes. Shared loot/worldgen/datagen utilities for dependent mods (Alex's Caves etc.). No player-facing surface to weave.

## stylecolonies   [anchors: support / decoration palette (1)]

**Method-pull:** Ships only MineColonies blueprint packs (style folders). 0 blocks, 0 items, no loot, no registered methods. However: the Steampunk style blueprint references Create blocks as build materials during colony construction. This is not a recipe weave, but it is a real consumption hook — constructing a Steampunk-style colony hut spends Create blocks, coupling the colony builder to the Create production web.

- from: Steampunk colony blueprints | via: MineColonies blueprint block-consumption (Build Tool constructs the building by consuming the declared block list) | to: Create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: building a Steampunk-style colony consumes Create-processed blocks (brass gears, copper pipes, steel panels as blueprint callouts) — the colony builder must either produce them via Create or trade for them; this is exactly the MineColonies-as-cheaper-route / colony-locked-output loop; it's already partially in place (the style exists), making the tie explicit is the weave

- from: stylecolonies High Magic / Fairy Tale style blueprints | via: MineColonies blueprint block-consumption | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: High Magic or FairyTale style colony buildings call for magic-adjacent blocks (Ars Nouveau source/arcane blocks, Quark crystal/agate blocks) in their blueprints — the colony builder sources them from the magic specialist, threading magic output into colony construction demand; makes the MineColonies route genuinely cross-system

- from: stylecolonies generic styles | via: MineColonies blueprint mechanics | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: a construction service is emergent player behavior (player A builds player B's colony for coin) — that's real and likely to happen, but it's not a packable weave; the delivery would be "emergence," not a recipe or config action, and M-33 requires a mechanic to hang on. Records as rejected.

REWORK: The dossier marks it as "support (decoration palette — MineColonies styles)" with 1 anchor and no weave candidates — that understates it. The Steampunk style already creates a real Create-block demand at build time (documented in the dossier's "consumes" note). The weave is real; it just needs to be named. Both ACCEPT candidates above are latent links that already exist in the blueprint data and simply need to be surfaced.

## oceansdelight   [anchors: survival (1)]

**Method-pull:** Already woven into FD cooking/cutting (inbound). Its outputs are distinctive seafood dishes with status effects — `fugu_slice` (poison-risk delicacy), `elder_guardian_roll`, `guardian_soup`, `cooked_stuffed_cod`, etc. The guardian/elder-guardian sourcing gives these dishes a combat-supply flavor (M-34). The fugu's poison-risk is a survival-pressure mechanic.

- from: oceansdelight guardian/elder-guardian dishes (elder_guardian_roll, bowl_of_guardian_soup) | via: farmersdelight:cooking (already) → consumption as demanded end-product | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardian drops are dangerous-to-farm (ocean monument = hostile territory) and its prepared dishes are the highest-effort ocean foods — the combat-supply loop: a fighter farms elder guardians, sells the raw drops to a coast cook who prepares the dish and sells to inland players; the cooked dish is the trade good that requires both roles

- from: oceansdelight:fugu_slice | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: fugu is a real-world poison delicacy — routing it through occultism spirit_fire (transmuting a poison-risk food into a toxin essence or a venom reagent) is thematically coherent; poison + arcane = an obvious synthesis; the delicacy's risk is its magic value; one step turns the dangerous dish into a reagent only a cook+magic specialist pairing can produce

- from: oceansdelight:cut_tentacles | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling tentacles into a paste/powder is plausible but weak — the existing FD cutting-board route already handles tentacle → prepared ingredient; adding a Create milling step would be a redundant lower-value route. The economy and magic weaves above are the stronger 2nd anchors. Records as rejected.

- from: oceansdelight dishes as "luxury seafood" | via: bare sell link | to: economy | verdict: REJECT | reason: M-09 retired — "sellable delicacy → coin" is ambient endpoint, not a weave. The M-34 candidate above is the correct economy framing (combat-supply route with two player roles). Records as rejected.

REWORK: dossier's 2nd-anchor candidates both cite M-09 (retired) and M-12. M-12 is noted above as rejected (redundant). The real economy angle is M-34 (accepted above). The magic angle via M-11 (fugu → toxin reagent) is new and strong.

## createpickywheels   [anchors: Create (1)]

**Method-pull:** Purely a behavior-patch mod — no blocks, no items, no loot. It re-gates Create's water wheel (needs a River biome + actual water body) and windmill (needs open air, Overworld-only). Its entire effect is making geography constrain where power can be built.

- from: Create water wheel / windmill placement requirement (River biome, open-air biome) | via: gameplay constraint / config | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the biome-placement constraint means the survival world (rivers, open plains, biome geography) *dictates* where a Create player can build their power source — early power is not free to place anywhere; the player must read the landscape to site their generator, tying the survival/exploration face of the world to the Create production spine; this is the mod's core design intent and it maps directly onto the "world pushes back" survival pressure

- from: createpickywheels river-biome water-wheel constraint | via: config-tie | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: the biome constraint creates a geographic power *production* cost, but it doesn't create a regional scarcity of a *good* that must be traded — you just have to build near a river, not trade power. The constraint is a survival-pressure flavor on Create, not an economy weave. The survival ACCEPT above is the right home for this. Records as rejected.

REWORK: OK — single Create anchor is appropriate. The survival weave above (M-16) is the natural 2nd anchor and was already surfaced in the dossier as a "MED" candidate — accepted here.

## emojitype   [anchors: support / client UI (1)]

- LEAVE — genuine zero-content client mod: no items, no recipes, no loot, no server-side behavior. Chat shortcode autocomplete only. No game-loop surface exists.

## owo   [anchors: support / library (1)]

- LEAVE — genuine zero-content code library: 0 blocks, 0 items, no loot. UI/config/networking framework for dependent mods. No player-facing surface.

## gamediscs   [anchors: survival / curated novelty (1)]

**Method-pull:** The mod has 13 items: a Gaming Console, 7 game discs, and 5 component parts (battery, control_pad, display, processor, redstone_circuit). Discs are obtained by a specific kill condition (skeleton kills bee/slime/frog/rabbit). The console is assembled from the components. This is self-contained novelty — loot=no, no registered recipe types.

- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the mod's theme is deliberately retro-arcade whimsy; gating a toy console's parts behind Create machinery would feel mismatched — you're not building a computer, you're crafting a plastic gadget. M-05 is for gating a mod's *flagship* item behind Create as a depth mechanism; a toy console is not a flagship item in the loop's terms. The dossier already flags this as WEAK. Records as rejected.

- from: gamediscs game discs (mob-kill drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: a retro game disc has zero magical identity; transmuting a "Pong disc" into a spirit essence is thematically absurd. The clash is decisive.

- LEAVE (for weaving purposes) — the novelty framing is correct; this mod earns its place as curated downtime content for a ~10-player co-op group. No coherent 2nd anchor weave exists that survives a theme-fit check. The dossier's recommendation to leave is sound.


