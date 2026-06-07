# Phase 2 candidates — chunk-11

## txnilib   [anchors: support/library (1)]
LEAVE — genuine zero-surface code library; 0 items, 0 blocks, no recipe-types. Nothing to route.

## platform   [anchors: support/library (1)]
LEAVE — developer-infra library; 0 items, 0 blocks. Nothing to weave.

## bagus_lib   [anchors: support/library (1)]
LEAVE — shared code library; 0 items, 0 blocks. Nothing to weave.

## trashslot   [anchors: support/QoL (1)]
LEAVE — client UI only; deletes items, registers nothing. No content surface.

## notenoughcrashes   [anchors: support/stability (1)]
LEAVE — crash-handler hook; 0 items, 0 blocks, no gameplay content.

## almostunified   [anchors: support/recipe-plumbing (1)]
LEAVE — recipe-graph unifier, not a content node. Its ⚠ gotcha (never unify galosphere:*silver* as c:ingots/silver — that's palladium) is a config guard, not a weave.

## lithium   [anchors: support/performance (1)]
LEAVE — tick/AI/collision optimizer; registers nothing. No content surface.

## jamlib   [anchors: support/library (1)]
LEAVE — Architectury/JamCoreModding library; 0 items, 0 blocks. Nothing to weave.

## lootjs   [anchors: support/packdev-tooling (1)]
LEAVE — KubeJS loot-table scripting API; ships no items/tags, is the *enabler* of M-02 weaves, not a target itself.

## solmaiddream   [anchors: survival (1)]
LEAVE — tiny flavour addon; the mechanic (maid stat growth from unique foods) rides the existing food pool and has no items to route or process-methods to pull through. Forcing a second edge would be artificial.
- from: maid favorability milestone | via: no method exists | to: economy | motif: no-motif | verdict: REJECT | reason: no item output, no process; the milestone is a companion stat, not a tradeable good or production gate

## solmaiddream — REWORK:
OK — connections sound (single survival anchor is correct for a flavour add-on; one is the floor and this mod has no plausible second).

## ctov   [anchors: survival (1)]
The dossier noted "leave" because ctov has no registered items, but it has `loot=yes` — structure loot is a valid delivery surface. Check before leaving.

Power-read: ctov places ~37 structure variants (villages + outposts) with loot chests. Loot chests are the only hook. The phase-2 briefing explicitly says loot-seeding is a real candidate for structure mods.

- from: ctov village/outpost loot chests | via: loot-seed (KubeJS / LootJS datapack) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a wandering merchant's village chest holds a handful of minted coin — players scouting settlements find starter currency to kick-start the player economy, not fiat-NPC handouts; coin was already in the world.
  - Red-team: M-08 is player-minted currency; seeding finished coins into a loot chest is an NPC faucet. REJECT — this conflicts with the player-run ruling. Coins must be minted by players, not pre-seeded.
  - Revised read: a loot-seed of **magic reagents** (e.g. an ars_nouveau:source_gem fragment or a raw ore cluster) or a **mob-drop** item seeds village loot as a found ingredient — M-02.
- from: ctov village/outpost chest loot | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: village apothecary chests contain a small source_gem or raw manite shard — a found reagent that pulls an explorer toward the magic spine without requiring a specific mob kill.
- from: ctov outpost chest loot | via: loot-seed | to: survival (danger) | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: pillager outpost chests hold a rare boss-drop precursor or weapon part, making ctov outposts a meaningful danger-run reward for combat specialists who trade their finds.

REWORK:
- existing anchor "survival" is correct; loot-seed delivery expands it to magic (M-02) and economy's danger-supply (M-34) without forcing registry items.

## betteroceanmonuments   [anchors: survival (1)]
Has `loot=yes`. Structure loot is the only hook. Power-read: expanded monument floors/rooms with chest loot — stronger version of the vanilla guardian payoff.

- from: monument chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a newly revealed monument vault holds a crystalline prismarine reagent fragment seeded into the chest — ocean explorer brings back a rare deep-ocean drop the magic specialist turns into a reagent, linking dangerous aquatic exploration to the magic web.
- from: monument chest loot | via: loot-seed | to: survival (danger/supply) | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the monument's deepest vault contains a boss-grade drop (e.g. elder guardian trophy / unique loot) that the combat-specialist trades to players who can't survive guardian raids — creates a guardian-diver trade role.
- from: monument chest loot | via: loot-seed (coin precursor metal) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: seeding finished coin is an NPC faucet (violates player-run ruling); seeding a raw metal is just loot, not a weave.

REWORK:
OK — single anchor fine; adding M-02 + M-34 loot-seed lifts it to 3.

## upgrade_aquatic   [anchors: survival (1)]
Has `loot=yes`, 379 items, rich food/wood/coral output. Strong M-12 candidate.

- from: upgrade_aquatic raw fish (c:item/foods/raw_fish, raw_pike, raw_perch, raw_lionfish) | via: farmersdelight:cooking | to: survival + Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pike fillets sliced on a cutting board and lionfish steaks braised in the pot — aquatic catch feeds Farmer's Delight recipes directly, joining the food-processing web; ocean specialty foods round out the diet's protein group.
- from: upgrade_aquatic driftwood/riverwood logs | via: woodworks:sawmill | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: driftwood already routes through Woodworks' sawmill (existing inbound weave confirmed in dossier); this formalises the anchor. Driftwood planks/slabs as a sawmill output feed Create builds with an aquatic-sourced wood type.
  - Note: this is already an existing inbound weave — flag as "OK — existing connection sound" rather than net-new.
- from: upgrade_aquatic coralstone deco family | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: coralstone crushed back to gravel/prismarine dust (+ experience nugget) — the decorative aquatic blocks cycle through Create's crushing recycling, the same way stone deco does; aquatic builders and Create players trade deco ↔ raw.
- from: upgrade_aquatic cooked luxury fish (cooked_lionfish, berry_pie) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling cooked fish into a useful intermediate is a stretch — fish doesn't mill into something another process wants; stick with cooking methods.
- from: upgrade_aquatic jellyfish/flare mob drops | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a jellyfish sting-gland or bioluminescent flare fragment is transmuted in the imbuement chamber into a light-essence reagent — the ocean's glow creatures feed the magic reagent chain, linking aquatic exploration to the magic pillar.

REWORK:
- dossier listed M-09 (luxury-good→coin) as a candidate — RETIRED; reject it. The actual economy link runs through M-12 food-chain demand (diet group consumption) and M-34 if we seed boss/rare drops.
- existing sawmill weave is sound; the coralstone M-04 and food M-12 are the net-new anchors that lift this to survival + Create (2).

## mushroomquest   [anchors: survival (1)]
48 blocks, 352 items, 32 biome-modifiers, loot=yes. Rich output pool.

- from: mushroomquest edible mushroom caps (bay_bolete, agarikon, common puffball, etc.) | via: farmersdelight:cooking | to: survival + Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraged mushrooms go into the cooking pot as an ingredient in mushroom stews and sauces — the food-processing chain gains a forager's contribution; fungi feed diet's vegetable/protein group.
- from: mushroomquest rare/mythical caps (agarikon, death cap) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a mythical mushroom cap with potent toxic/medicinal properties is spirit-fired into an occult essence — the mycologist's rarest finds become a magic specialist's reagent stock, tying foraging skill to the magic spine.
- from: mushroomquest deadly/hallucinogenic caps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (M-11) already covers the transmutation route for toxic organics; doubling up with imbuement on the same tier of mushroom creates redundancy without a distinct payoff. Keep M-11 only.
- from: mushroomquest rare mushroom | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: common puffball milled into a mushroom spore powder — an intermediate that feeds into a Create mixing recipe (mushroom gravy fluid, fermentation base) — fungal crop feeds the Create food-processing chain as a bulk ingredient.
- from: mushroomquest loot-bearing Mushroom Island structures | via: loot-seed | to: survival (danger) | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: Mushroom Island is passive (no hostile mobs by vanilla rules) — danger/combat-supply framing doesn't fit. The biome's flavour is foraging, not combat.

REWORK:
- dossier listed M-09 (economy via sell) — RETIRED/rejected. The actual second anchor is Create/magic via M-12 + M-11.

## snowyspirit   [anchors: survival (1)]
46 blocks, 65 items, ginger crop (c:crops/ginger), seasonal/festive.

- from: snowyspirit ginger crop (c:item/crops/ginger, c:block/crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger root milled into ground ginger spice — a Create mill produces a cooking ingredient that feeds Farmer's Delight/ExtraDelight spice recipes; the winter crop becomes a production input, not just a food.
- from: snowyspirit ginger (seasonal — only growable in winter under Serene Seasons) | via: farmersdelight:cooking | to: survival (seasonal pressure) | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: ginger is a winter crop; its season-gated harvest means spice-based recipes have a limited-run input that drives stockpiling before spring — a direct seasonal-pressure weave tying ginger supply to the Serene Seasons loop.
- from: snowyspirit eggnog / gingerbread_cookie | via: farmersdelight:cooking or extradelight:oven | to: survival (diet) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: eggnog and gingerbread cookies cover the sugar/grain diet groups — folding festive foods into the diet system's ongoing demand keeps winter cooking relevant beyond the holiday season.
- from: snowyspirit sled (winter traversal item) | via: aeronautics analogy | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: the sled is a ground-snow vehicle with no connection to airships/flight; M-23 is about structural alloy for airframes; the tonal pairing of a cosy gingerbread sled with Create aeronautics engineering is a forced mismatch.
- from: snowyspirit candy_cane / gumdrop blocks (deco) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing candy deco back to sugar gravel is technically possible but semantically odd — candy blocks are a niche construction material, not a Create-adjacent industrial deco like stone or metal. The M-04 anti-arbitrage rule says lossy; even losing value, the justification is thin. Reject; ginger chain is the sounder anchor.

REWORK:
- dossier listed M-09 and "aeronautics/transport via sled" — both rejected above (M-09 retired; sled-aeronautics is a tone clash). The sound weaves are M-12 (ginger milling/cooking) and M-16 (seasonal).

## ars_nouveau   [anchors: magic (1)]
Very rich mod (199 blocks, 446 items, 18 recipe-types). Currently single-anchor; needs Create and survival links.

- from: ars_nouveau Vitalic/Agronomic Sourcelink (passively consumes mob deaths, crop growth) | via: non-recipe mechanic (organic-mob/farm sink) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: every mob farm and crop field in the pack is passively generating Source for a nearby Sourcelink — the survival layer's organic output feeds Ars Nouveau's power generation natively; the farmer and the mage share infrastructure.
- from: ars_nouveau source_gem (M-01 hub reagent, already reserved) | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: everyday | tone: ok | verdict: ACCEPT | hook: foreign magic essences (Iron's arcane_essence, Occultism spirit solution) are minted into/out of source_gem through the imbuement chamber — the universal magic-currency hub. (Already the established M-01 spine.)
- from: ars_nouveau spell scrolls / enchanted gear (magic-exclusive outputs) | via: locked exclusives + M-29 | to: Create (cross-route) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-tier automated mechanism requires an Ars Nouveau enchantment (spell scroll applied via deployer or enchanting apparatus) — the tech player cannot self-supply the enchant; they must trade with a magic specialist. Cross-route dependency makes both specialists necessary.
- from: ars_nouveau archwood lumber | via: woodworks:sawmill | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: archwood logs run through Woodworks' sawmill for planks/beams — the magic biome's distinctive wood feeds the Create building palette; a mage with surplus archwood trades lumber to the builders.
- from: ars_nouveau drygmy mob-drop farm (passive drops from penned mobs) | via: occultism:spirit_trade or create:milling (mob drops → ore dust) | to: Create | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: the Drygmy charm passively collects mob drops for the magic player — a logistics-summoning method that provides raw materials (bones, leather, mob loot) to feed Create processing without the magic player doing the manual farming; magic as a logistics provider.
- from: ars_nouveau Alchemical Sourcelink (consumes brewed potions) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic (internal cross-route) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks potions brewed in the alchemist cauldron are fed to the Alchemical Sourcelink to generate Source — an Iron's→Ars pipeline where potion surplus has a power-generation use; the two magic schools cross-feed.
- from: ars_nouveau spell turrets (automated spell deployment) | via: create:deploying analogy | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: spell turrets fire spells, they don't apply a woven part onto a base item (M-20's definition); forcing Create:deploying semantics onto spell-turret automation is a method mismatch. The deployer-application motif is for item-upgrade operations, not combat/area magic.
- from: ars_nouveau enchanting_apparatus (needs ring of augments, magical blocks as pedestals) | via: create:mechanical_crafting (pedestal components) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the enchanting apparatus's ritual pedestals require certain processed Create components (polished stone, brass items) around the altar — the magic setup costs Create fabrication, gating mid-tier Ars progress on tech-player cooperation (or trade).

REWORK:
- dossier listed M-09 (economy via sell) as "WEAK" — RETIRED; reject it. Real economy links for Ars would come through M-33 (enchant-for-hire service) or M-37 (research gate on spell knowledge) — valid but separate pass. The M-02 + M-29 + M-18 links above are the priority weaves.
- dossier shows only 1 anchor; multiple strong links (M-02 survival, M-29 Create cross-route, M-18 logistics) lift it to magic + survival + Create — the weave suite is the priority work for v0.11.0 Magic pillar.

## simplehats   [anchors: support/cosmetic (1)]
351 items (all hats), loot=no. Closed cosmetic economy (hats ↔ scraps ↔ bags). Has registered recipe-types (custom_hatscraps, custom_hatvariants).

- from: rare hat grab-bags | via: loot-seed into boss loot tables | to: survival (danger) | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare hats appear in boss loot tables — the combat specialist's haul includes cosmetic collectibles they can trade to non-combat players who want flair; hats become a minor side-stream in the combat-supply economy (cosmetic value, not power).
- from: rare hats as "vanity goods" sellable to other players | via: numismatics player trade | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 requires an item *spent against pressure* (consumption/upkeep); a cosmetic hat is not consumed and creates no ongoing demand — it's a one-time trade, the ambient endpoint of the loop, not a weave. No valid economy motif applies here (bare sell = rejected per player-run ruling).
- from: simplehats hat-scraps (recycled from unwanted hats) | via: create:crushing analogy | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: hat scraps are a soft-material cosmetic; crushing hats in a Create mill is a tone clash — whimsical collectible flair does not belong in the industrial recycling loop. The mod's own custom_hatscraps mechanic already handles recycling internally.

REWORK:
OK — cosmetic support role with one loot-seed anchor (M-34 via boss tables) is the correct fit; the mod needs no deep weave.

## cmpackagecouriers   [anchors: Create + aeronautics (2)]
Already ≥2 anchors. Check existing connections.

- from: cardboard_plane courier (autonomous cross-base delivery) | via: create:cutting + create:deploying (existing) | to: Create + aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the cardboard plane's construction uses Create cutting + deploying — it's a lightweight Create-manufactured aerial vehicle; the drivetrain/control motif applies (M-24: mechanical component → propulsion/control, scaled to a small courier drone vs. a full airship).
- from: location_transmitter beacon (chunkloaded base requirement) | via: economy/logistics gate | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: cross-base package delivery requires a chunkloaded transmitter — a colony (MineColonies) or permanent base maintains the chunkload; the courier network depends on settled infrastructure, linking the logistics arm to the colony/economy pillar (the aeronautics+economy intersection that M-29 cross-route wants).
- from: portable_stock_ticker (remote inventory orders from field) | via: no recipe method | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a logistics specialist maintains the courier network and fields remote orders for other players — service-for-hire: they take a cut on fulfilled deliveries; the courier becomes a player-economy labor role, not just a personal utility.

REWORK:
- existing connections (Create + aeronautics) are sound. The M-33 service-for-hire link is the economy anchor that makes the 3rd system; the briefing explicitly names logistics as load-bearing, so adding it is correct.

## createadditionallogistics   [anchors: Create + aeronautics (2)]
Already ≥2 anchors; also has a performance support role.

REWORK:
OK — connections sound. Lazy shafts (Create) + Stock Keeper seats (aeronautics/logistics) is the correct dual anchor. No new edge needed; the performance benefit is a bonus.

## create_factory   [anchors: Create + survival (2)]
Already ≥2 anchors. Check existing and look for deeper links.

- from: create_factory sweet_berries_jam fluid (output) | via: create:filling (feeds other recipes) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the jam/cream fluids produced by create_factory are intermediates — other Create mixing/filling recipes (including extradelight, vinery wine additions) can consume them as flavour fluids; the confectionery chain feeds downstream food processing.
- from: create_factory waffles/rolls/apples (assembled sweets) | via: diet system (survival demand — sugar group) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: assembled desserts address the sugar diet group — players continuously need sugar-group foods to maintain diet balance, so the confectionery line has recurring demand rather than a one-off craft; consumption pressure keeps the factory running.
- from: create_factory cream_bucket fluid | via: create_cheese:maturing | to: Create (food chain) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cream fluid produced by create_factory feeds into the create_cheese maturing process — the dessert factory outputs an intermediate that the cheesemaker ages; a cross-mod food chain where the confectioner and cheesemaker share a fluid input (M-35 maturation aging).

REWORK:
- dossier listed M-09 (economy via sell of sweets) — RETIRED; reject it. The actual second-anchor loop is M-26 consumption (diet demand) and M-12 chain; these are the sound links.
- existing "Create + survival" is correct; cream→cheese (M-35) and jam fluid→downstream recipes (M-12) deepen the Create anchor without forcing.

== CHUNK COMPLETE ==
