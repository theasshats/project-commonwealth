# Phase 2 candidates — chunk-09 (context-fed)

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — pure client HUD overlay (light-level, chunk-boundary, JEI-search); zero items/blocks/methods; no material surface to route.

## sounds   [anchors: support/polish (1)]
LEAVE — client audio-overhaul only; 0 items, 0 blocks, no recipe types; nothing to weave.

## bookshelf   [anchors: support/library (1)]
LEAVE — modder utility library; no player-facing items or recipe types; sanctioned support role.

## sable_sa_compat   [anchors: support/compat (1)]
LEAVE — zero-content compat patch (Create Stuff 'N Additions ↔ Sable ship physics); no items, no methods; serves the aeronautics pillar already.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — drop-merge QoL (entity coalescing); 0 items, 0 methods; generic behavior mod with no material graph.

## voicechat   [anchors: support/comms (1)]
LEAVE — proximity voice infrastructure; 0 items, 0 blocks, 0 methods; sanctioned social-layer support role.

## modelfix   [anchors: support/bugfix (1)]
LEAVE — client render-fix only; 0 items, 0 blocks; nothing to route.

## rightclickharvest   [anchors: support/QoL (1)]
LEAVE — interaction QoL (right-click harvest/replant); 0 items, 0 methods; purely behavioral, no material graph.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
LEAVE — cosmetic blood particle emission on hit; the 184 "items" are particle-holder internal entries (minecraft:blood1..blood15 etc.), not collectible/craftable items; no recipe types; no weave surface.

## createtreadmill   [anchors: Create (1)]
Existing rows: M-26 ACCEPT (player-effort-as-consumption), M-33 ACCEPT (SU-as-a-service). Both are sound. The pile of TLM/soul-orb REJECTs is correct. One gap worth examining: the M-28 colony route has never been tried, and a treadmill loop does have a MineColonies adjacency — a colony's Guard or Worker hut running treadmills as cheap early power before windmills/waterwheels are viable. But the treadmill produces generic SU; it has no item surface MineColonies can request, and a colony hut doesn't "consume" a treadmill's output in a recipe-requestable way. That's a gameplay-flavor link, not a ledger-level weave. No missing motif candidate found.

CHALLENGE | from: createtreadmill:treadmill (player-powered SU source) | via: create:* network consumption | to: survival | motif: M-26 | verdict: WEAKEN — existing M-26 ACCEPT (5/7 votes) is the right call but the hook is thin: "effort as consumption" stretches M-26 (which is normally a material/food/fuel *spent*; player effort isn't an item consumed against pressure). The weave is defensible but borderline — flag for Gate 2 review. Existing rows sufficient otherwise; no new candidates.

## beachparty   [anchors: survival (1)]
Existing strong ACCEPTs: M-12 coconut → create:milling/extradelight:juicer, M-26 cocktail consumption, M-30 regional scarcity (beach biome), M-16 seasonal melon cocktail, M-35 maturation path. The M-33 Palm Bar service ACCEPT (2/3 votes) is weak — the hook of "a specialist builds a Palm Bar on an Aeronautics ship tavern" is a nice image but speculative; a Palm Bar doesn't inherently require player-labour-on-another's-materials the way enchanting-for-hire does.

One gap not covered: the `beachparty:mussel` / `cooked_mussel_meat` and the `crocs`/`beach_hat`/`bikini` cosmetics. Mussels are a mid-tier seafood with no explicit Create or economy routing in existing rows. Also: the `message_in_a_bottle` as a **loot-seed** carrier was (correctly) rejected for M-08, but a **M-34 combat-supply** re-read was also rejected. There's a subtler un-examined loot angle: seeding a **Northstar astronomical_reading** or **Cataclysm dungeon clue** inside message_in_a_bottle as exploration loot (M-37 research/knowledge gate variant). But no current motif covers "exploration document as found loot leading to knowledge." M-37 requires MineColonies research or Ars knowledge, not a found document. REJECT-for-review (no-motif).

One genuinely missing link: the **diet-system pull** on cocktails. Cocktail buffs were mapped via M-26 (consumption sink), but the diet-variety system (Diet – AppleSeed Edition) creates a specific demand for *Fruits/Sugars* group items. Cocktails span fruit+sugar combos (coconut, cocoa/honey/melon). This is a deeper reading of M-26 — not just "drinks are consumed" but "the diet pressure specifically pulls on the Fruits+Sugars groups that beach cocktails satisfy, so off-season or land-locked players buy them." This is an elaboration of existing M-26, not a new row, but the hook should be sharpened.

CHALLENGE | from: beachparty cocktails (coconut/honey/melon/cocoa) | via: beachparty:palm_bar_mixing | to: survival | motif: M-26 | verdict: SHARPEN — the existing M-26 ACCEPT rows are correct but under-specify the diet hook. The compelling hook is not just "buffs are consumable" but "cocktails satisfy Fruits+Sugars diet groups that no winter-available food covers — the beach bar feeds a dietary gap created by seasonal scarcity." This is a stronger weave than generic consumption; should be the canonical hook at Gate 2.

NEW | from: beachparty:cooked_mussel_meat | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mussel meat is a coastal seafood not covered by any other mod; routing it through farmersdelight:cooking into a seafood chowder or stew adds a protein-group food from the beach biome, meaning the coastal settler supplies something the inland farmer cannot — a small but concrete cross-biome food dependency.

## galosphere   [anchors: survival, magic (2)]
Existing ACCEPTs: M-03 (palladium ore-doubling), M-04 (deco bricks crush-recycle), M-07 (reserved allurite/lumiere catalyst), M-08 (palladium → coin), M-30 (regional scarcity). These four pillars (survival, magic, create, economy) are all represented and well-argued. The amber `preserved_transform_recipe` has been contested (one M-10 ACCEPT vs multiple REJECTs) and the correct answer is nuanced.

One gap: the `galosphere:preserved_transform_recipe` amber mechanic was never tested against **M-35 maturation** (a M-35 REJECT exists but the reasoning was that amber *stops* time rather than matures). That reasoning is correct — M-35 is value-added-by-time (fermenting, aging); amber preservation is suspension. REJECT stands.

Second gap: **M-28 colony route** has never appeared for galosphere. Palladium (Sterling) armor and Silver Bombs require palladium. If palladium is region-locked (M-30), a MineColonies Knight's hut or Guard tower that specifically requests Sterling Armor pieces as upgrades would be a colony route for a palladium-gated good. But the MineColonies request system works on vanilla/configurable items — it doesn't natively request Sterling Armor from galosphere without KubeJS data seeding. That's a plausible but speculative config-tie. No clean motif edge without custom data work.

Third gap: the **Sparkle mob** (feeds on glow lichen → grows allurite/lumiere on its back). This is an organic mob-drop pathway: a Sparkle farm could produce allurite/lumiere shards passively (they're the M-07 reserved catalyst). The Sparkle is a mob, and its drops are already covered by M-07's "reserved catalyst" role. No new weave needed — M-07 handles the shard's role regardless of how it's obtained (mined vs. farmed from Sparkles).

OK — existing rows sufficient. The four-system coverage (Create via M-03/M-04, magic via M-07, economy via M-08/M-30) is genuinely strong. The amber mechanic is correctly left unweaved.

CHALLENGE | from: galosphere:preserved_transform_recipe (amber) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT confirmed — one ACCEPT row remains contested; the amber-preservation mechanic takes organic items and freezes/suspends them, which is not the same semantic as arcane infusion refining a material. The one ACCEPT (1/1) should not pass Gate 2: there is no established lore that "fossilised organic in amber = arcane reagent" in this pack's magic web (Ars Nouveau is nature/growth magic, not preservation). The amber output is a decorative/preservation item, not a magic catalyst. REJECT stands.

## create   [anchors: Create (1)]
OK — existing rows sufficient. Dossier explicitly flags "N/A as recipient — Create is the hub other mods weave INTO." All rows are REJECTs and correctly so. No new candidates.

## farmersdelight   [anchors: survival, Create (2)]
Existing strong ACCEPTs: M-12 (create:milling grain → flour, the core processing-chain pull), M-16 (seasonal crops — cabbage/tomato/onion/rice gated by Serene Seasons), M-28 (colony provisioning — high-tier stews feed MineColonies cook hut), M-26 (diet-variety consumption, ongoing demand), M-35 (apple_cider → vinery:apple_fermenting maturation). Coverage is broad and the mod sits firmly at 2+ anchors.

What is missing or under-examined:

1. **M-29 cross-route dependency** — the existing rows propose FD crops beside an Ars Agronomic Sourcelink generating Source (1 ACCEPT). This is a real gap: a Farmer's Delight crop farm placed next to an Ars Nouveau Agronomic Sourcelink passively generates Source from crop growth. That makes FD farming a *magic input* without any explicit recipe — a behavior-based cross-route. But M-29 requires a *recipe* cross-dependency (a recipe in one route needing an input from another), not emergent behavior. The Sourcelink interaction is ambient, not a ledger weave. Correct to leave this as a flavor note rather than a row.

2. **M-19 haunting / soul seam** — one row proposed farmersdelight:skillet via create:haunting (REJECT: tone clash). Agree — haunting food has no coherent narrative here.

3. **M-37 research gate** — not attempted. The FD cooking_pot or cutting_board could be required by a MineColonies cook/baker hut as a building recipe (gated by colony research). One existing row (M-28, 2 ACCEPTs) covers the food-provisioning angle but not the *construction* angle. A colony Cook hut requiring a Farmer's Delight cooking_pot as a building component (not just food provisioning) would be M-28 + M-37 combined: the hut itself costs a FD block, and unlocking higher cooking tiers within MineColonies requires colony research. This is a subtler, stronger weave than the provisioning rows already captured.

NEW | from: farmersdelight:cooking_pot (the kitchen appliance) | via: minecolonies hut building recipe (KubeJS data) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies Cook hut requires a Farmer's Delight Cooking Pot as a placed building component — you can't staff a colony kitchen without one, so the mod earns a mandatory colony route anchor that makes every settlement need a FD kitchen investment, not just food as optional provisioning.

CHALLENGE | from: farmersdelight cooked meals as MineColonies colonist food supply | via: minecolonies:composting / colonist-feed config | to: economy | motif: M-12 | verdict: PARTIAL-REWORK — multiple rows use M-12 for colony provisioning but M-12 is "processing-chain pull" (raw material → processed good through a method). Colony *food provisioning* (feeding colonists) is closer to M-28 (colony route). The existing M-28 rows (3 ACCEPTs) correctly use M-28; the M-12-tagged colony rows are mis-motifed. At Gate 2, consolidate the colony-feeding rows under M-28 only.

## create_integrated_farming   [anchors: Create, survival (2)]
Existing strong ACCEPTs: M-12 (roost egg output → farmersdelight:cooking), M-28 (bulk roost/net output → colony butcher/cook), M-02 (feathers → ars_nouveau:imbuement), M-11 (lava_fishing_net nether drops → spirit_fire), M-31 (bulk fish output → logistics/aeronautics), M-05 (roost construction gated on Create mechanical_crafting). Coverage looks solid.

What is missing:

1. **M-29 cross-route dependency**: the `createfisheryindustry:peeling` / `bait_trap` cross-mod has 1 ACCEPT. This is genuinely interesting — the fishing net's catches feed createfishery's peeling/bait methods, and createfishery is a separate mod. But the row was only proposed once. It's a real Create-spine deepening (two Create add-ons whose outputs are each other's inputs), not a cross-*system* weave. M-29 requires routes from different production *pillars* to cross, not two Create add-ons crossing. This is within-Create depth, not a cross-route dependency. The M-29 row should be downgraded.

2. **Lava_fishing_net nether drops → M-15 boss-key gating** — not attempted. The lava net catches fire-adjacent drops (blaze rods, magma cream, fire charges) automatically. Blaze rods are a gating material for Create's blaze burner progression. A lava net farm providing a steady automated blaze-rod supply could bypass the boss-pressure of the Nether's danger. This is a *balance concern*, not a new weave: if automated lava nets make blaze rods trivial, they undercut the scarcity of the Nether exploration pressure. No weave needed — but the balance note is important for Gate 2.

3. **M-37 research gate on roost construction** — not yet in rows. If MineColonies research unlocks the ability to request roost-produced goods (bulk eggs/poultry) from a colony Farmer hut, the roost feeds into the colony route in a knowledge-gated way. Speculative without confirming MineColonies farmer hut compat.

CHALLENGE | from: create_integrated_farming fish catches (fishing net outputs) | via: createfisheryindustry:peeling / bait_trap | to: create | motif: M-29 | verdict: DOWNGRADE — both mods are Create add-ons in the same Create production pillar; M-29 is cross-*route* (magic reagent in a Create chain, Create part in a ritual). Two Create add-ons exchanging outputs is within-pillar depth, not a M-29 cross-route dependency. The row is useful as texture but should not be logged as M-29.

NEW | from: create_integrated_farming:lava_fishing_net blaze-rod / magma-cream catch | via: create:milling or create:mixing | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the lava net hauls fire-adjacent byproducts (blaze rods, magma cream) that are themselves inputs to Create's heat-progression (blaze burner fuel, mixing agents); routing them through a Create mill/mixer as automated byproduct feedstock gives the farm operator a Create-side output, tying the aquatic automation rig into the tech spine's own processing chain.

## cataclysm   [anchors: survival (1)]
Existing strong ACCEPTs across multiple pillars: M-15 (ancient_metal_ingot as boss-key for Create tech), M-06 (sequenced-assembly keystone), M-11 (witherite/cursium → spirit_fire), M-34 (combat specialist trades drops), M-08 (boss-drop coin), M-23 (ancient_metal/ignitium → aeronautics hull), M-24 (ignitium-lined boiler → drivetrain), M-05 (Fusion Anvil needs Create precision_mechanism). Coverage is genuinely deep.

What's missing:

1. **M-37 research gate** — not yet tried. Could a MineColonies research unlock (e.g. a Knight's hut upgrade) require a Cataclysm boss drop, making "combat progression" a prerequisite for colony-military upgrades? This creates a genuine cross-route between combat (danger/survival) and colony (economy route) in a non-trivial way. The fighter who kills the Ancient Remnant supplies the colony Guard Captain's upgrade.

2. **M-28 colony route** for the Mechanical Fusion Anvil — one row (M-05 ACCEPT, 1/1) gates the Fusion Anvil behind Create precision_mechanism. A complementary angle: could MineColonies produce Witherite-based weapon components at a Weaponsmith hut cheaper than weapon_fusion? That's the "boss route vs. colony route" high-tier fork the DESIGN doc describes. This is design-intent territory (not yet a specific recipe proposal) but the ledger should flag it.

3. **M-12 for amethyst_crab_shell** — 1 ACCEPT (milling to pigment powder). Tone check: amethyst crab shell is boss-fight loot from a dungeon; milling it into a pigment dye is reasonable and connects combat loot to the decorating/crafting economy. Sound.

NEW | from: cataclysm boss drop (witherite_ingot / ancient_metal_ingot) | via: minecolonies hut building recipe (KubeJS data — Knight's hut upgrade) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony Guard Captain's tower upgrade requires a forged boss-material component — research alone isn't enough, the settlement needs a combat specialist who has cleared a dungeon; knowledge-gate meets danger-gate, and the fighter's kill becomes the colony's military prerequisite.

NEW | from: cataclysm:amethyst_crab_shell | via: create:milling | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Scylla's crystalline carapace mills to an amethyst-pigment powder used in high-end dyes and glazes — the dungeon loot cycle feeds the decorator's palette; combat surplus earns beauty.

CHALLENGE | from: cataclysm:weapon_fusion (Mechanical Fusion Anvil requiring Witherite) | via: requiring create:precision_mechanism or brass-tier component | to: create | motif: M-05 | verdict: SHARPEN — the M-05 ACCEPT (1/1) is correct in spirit but M-05 requires the flagship item to be built *in its own machine gated on Create parts*. The Fusion Anvil is Cataclysm's own machine, gated on Witherite (boss drop) already. Requiring a Create precision_mechanism as an *additional* input (not replacing Witherite) is a recipe add, not M-05 strictly — M-05 is "the mod's flagship built *in its own machine*." This should be re-expressed as M-29 (cross-route: a Cataclysm recipe requiring a Create-produced input), not M-05.

## create_new_age   [anchors: Create (1)]
Existing strong ACCEPTs: M-17 (energising magic/focus), M-08 (thorium coin), M-30 (thorium regional scarcity), M-24 (motors/coils/circuits → aeronautics drivetrain), M-03 (thorium ore-doubling), M-06 (sequenced-assembly endgame), M-32 (corium → byproduct processing), M-29 (magic cross-route requiring energised component), M-13 (reactor heat → steam → aeronautics engines). Coverage is comprehensive.

What's missing or under-examined:

1. **M-22 lunar/celestial reagent** — not attempted at all. The Northstar astronomical_reading was tried for M-22 and mostly rejected. But create_new_age has no explicit celestial mechanic. A reactor running during a lunar event (Enhanced Celestials full moon) producing overcharged corium or a special energised output is speculative and not grounded in CNA's actual mechanics. Skip.

2. **M-37 research gate** — one row exists (advanced_circuit → MineColonies research gate, 2 ACCEPTs). Worth reinforcing: a MineColonies University research tier unlocking the advanced_circuit recipe (currently gated behind the circuit_engraver in northstar, but CNA's advanced energiser is CNA's own top tier) would make colony research a prerequisite for the electrical tier. But CNA's circuits are its own (blank_circuit/copper_circuit/advanced), not shared with northstar. The existing M-37 row for advanced_circuit is northstar's, not CNA's. CNA specifically: a MineColonies Mechanic hut requiring a CNA copper_wire or generator_coil in its construction — that is an uninvestigated M-28 angle for CNA.

3. **M-26 survival/consumption** — the reactor consuming thorium and producing corium is an ongoing-depletion mechanic: once you run a reactor, you must resupply thorium from scarce regional sources, creating continuous demand. This is not a "food is eaten" M-26 but a "fuel is burned" M-26. One row tried this on solar_heating_plate (REJECT: wrong item). The reactor-fuel cycle is the right target and wasn't explicitly proposed. But "reactor burns thorium → creates corium waste + ongoing demand for more thorium" is captured implicitly by M-30 (regional scarcity) + M-32 (corium byproduct). A separate M-26 row would be redundant with M-30's scarcity-of-fuel angle.

NEW | from: create_new_age:copper_wire / generator_coil | via: minecolonies hut building recipe (KubeJS data — Mechanic hut upgrade) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony Mechanic hut's electrical tier requires a CNA generator coil in its construction — a settlement can't industrialize its power grid without the engineer who made the coils; the colony route and the Create-electric tier lock arms.

CHALLENGE | from: create_new_age:corium (reactor waste) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT confirmed with nuance — M-10 ACCEPT rows (5/10 total) and M-11 ACCEPT rows coexist on the same material (corium). The split: M-11 ("a dangerous organic transmuted into a magic reagent") is closer — corium is radioactive slag, more akin to a contaminated organic byproduct than a refined arcane input. M-10 ("foreign material refined into magic reagent through arcane infusion") implies the input *becomes* arcane; corium's horror-industrial tone clashes with Ars Nouveau's nature/growth magic (M-10). M-11 via spirit_fire is the correct motif for corium because spirit_fire transmutes dangerous matter — REJECT the M-10 rows for corium; M-11 rows should be the survivor.

CHALLENGE | from: create_new_age:energising (method) → aeronautics keystone | via: create_new_age:energising / sequenced_assembly | to: aeronautics | motif: M-06 | verdict: DOWNGRADE — the M-06 ACCEPT rows for aeronautics keystone gated through Energiser are plausible but the specific item is never named. M-06 requires a concrete "derpack:incomplete_*" part. Without naming the keystone, this stays aspirational. At Gate 2: downgrade to "pending identification of the specific Aeronautics component this gates." Don't author as M-06 until the item is specified; it currently works better as M-24 (the electric-motor drivetrain side).

