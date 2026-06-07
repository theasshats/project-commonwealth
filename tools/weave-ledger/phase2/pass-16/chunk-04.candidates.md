# Phase 2 candidates — chunk-04

## upgrade_aquatic   [anchors: survival (1)]

### Method-pull analysis
upgrade_aquatic outputs raw/cooked fish (c:item/foods/raw_fish, cooked_pike, cooked_perch, cooked_lionfish, pie),
prismarine rods, kelp storage blocks, coral/coralstone deco, and driftwood/riverwood wood sets.
Loose materials to route: fish foods (farmersdelight:cooking, extradelight:juicer), coral/coralstone (create:crushing
M-04), fish as luxury sell goods (numismatics M-09).

### Candidates

- from: upgrade_aquatic cooked fish / seafood dishes (cooked_pike, cooked_perch, cooked_lionfish, pie) | via: farmersdelight:cooking (multi-step: raw fish → FD cutting prep → finished dish) | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: freshwater fish are regional ocean/river drops; processing them into finished dishes creates a food-chain step and a coastal-trade good; pairs naturally with oceansdelight in the same food web

- from: upgrade_aquatic cooked fish dishes (cooked_pike, cooked_perch, cooked_lionfish) | via: numismatics sell (price high-effort seafood dishes as trade goods) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: pike and lionfish are exotic regional catches — a riverside/coastal specialist can trade finished dishes to inland players who can't fish for them

- from: upgrade_aquatic coralstone deco family (acan_coralstone, brain_coralstone, etc.) | via: create:crushing (lossy, stone family → gravel + xp nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone is an aesthetic build material — crushing deco back for gravel is a weak return with no thematic hook; the "of course" is missing; not worth gating its use on a create machine when it adds no loop value

- from: upgrade_aquatic driftwood / riverwood wood sets | via: woodworks:sawmill (already woven — inbound) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already routed through woodworks:sawmill per the dossier; no new edge needed here

REWORK: none — existing connection (woodworks:sawmill) is coherent. No arbitrary links present.

---

## create_mobile_packages   [anchors: create, aeronautics (2)]

### Method-pull analysis
Dossier confirms ≥2 anchors (Create + aeronautics/logistics). No new item outputs — a delivery-layer
mod routing Create packages. Economy adjacency (remote trade fulfilment) is noted as "leave" in the dossier.

### Candidates

- from: create_mobile_packages robo_bee + drone_port (airborne delivery infrastructure) | via: N/A (no recipe method surfaces a new link) | to: economy | motif: no-motif | power: — | tone: ok | verdict: REJECT | reason: the mod is transport infrastructure, not a coin-generating or material-transforming node; its economy tie is soft adjacency (packages CAN carry traded goods) but not a seam you can anchor with a motif; forcing a recipe edge would be busywork

OK — connections sound. Create (construction deps) + aeronautics (autonomous airborne courier) are the two coherent anchors; no rework needed.

---

## bundle_recipe   [anchors: support/QoL (1)]

### Method-pull analysis
Zero items of its own — ships a single datapack recipe re-enabling vanilla minecraft:bundle.
No foreign material, no loot table, no processing surface.

LEAVE — pure recipe-enabler mod, zero content surface; nothing to weave into the loop. QoL/vanilla-parity support only.

---

## securitycraft   [anchors: support/utility-tactical (1)]

### Method-pull analysis
657 blocks / 690 items — very large content surface, loot=yes. The block_reinforcing_recipe is a method (any
block can become a reinforced variant). Key outputs: reinforced blocks (base-defense), keycard/keypad devices,
block-mines, sentries, Block Pocket Manager. Redstone emitters rather than material outputs.

Loot=yes — check: does securitycraft have structure/dungeon loot? The loot flag is present; if it seeds
loot tables in any generated structures that's a loot-seed candidate. However the dossier and items list
suggest the loot is from block-mines (drops when triggered), not dungeon chests — so loot-seed to another
mod's chest isn't the angle here.

Key method-pull: reinforcing already accepts any block as input. The question is: can we seed CREATE parts
or TFMG materials into reinforcing recipes so base defense costs tie to the tech spine?

### Candidates

- from: securitycraft reinforced_iron_door / keycard_reader / sentry (high-tier security devices) | via: create:mechanical_crafting (gate the sentry and Block Pocket Manager assembly behind a Create mechanical-crafting recipe using brass/zinc plates) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a base defense system that requires industrial-grade parts feels earned — you can't just find zinc and build a sentry, you need Create's precision fabrication; ties defense costs to the Create tech-spine

- from: securitycraft sentry / block_pocket_manager (endgame security flagships) | via: create:sequenced_assembly (multi-step assembly — sensor + actuator + chassis + electronics) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: M-06 is for Create's own endgame flagship items (Clockwork Bearing class); gating securitycraft's sentry behind sequenced assembly is technically feasible but over-engineers a base-defense utility mod — scale to M-05 (one mechanical_crafting step) is the right depth for this tier; M-06 here is over-reach

- from: securitycraft keycard_reader + limited_use_keycard | via: tfmg:polarizing (polarize a metal plate to produce a read-sensitive magnetic card — electrically themed) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a magnetic keycard that gates your base should come out of an industrial polarizer, not a crafting table — the TFMG electric tier provides the right aesthetic and ties the security-electrical theme coherently

- from: securitycraft crystal_quartz (securitycraft's own crystal-quartz deco blocks, unlocked by its own progression) | via: ars_nouveau:imbuement (attune crystal quartz as a lens component for magic-themed sensor/detector) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: securitycraft is hard-tech/dieselpunk tactical; routing its quartz through arcane infusion tonally clashes — a spy-tech/military-flavored mod reaching into Ars Nouveau is incoherent to a player; the crystal is a deco block, not a focused lens

REWORK: existing connections — dossier lists the mod as "support (1)" with weak candidates already flagged as WEAK. The dossier correctly identifies these as weak; no arbitrary live connections to rework since no weave has been authored yet.

---

## tfmg   [anchors: create (1)]

### Method-pull analysis
TFMG is a deep Create addon with 8 registered recipe-types of its own (casting, coking, distillation,
hot_blast, industrial_blasting, polarizing, vat_machine_recipe, winding). Its outputs — diesel/gasoline/LPG,
steel, aluminum, cast_iron, constantan, lead, nickel, lithium, plastic, sulfur, saltpeter, concrete, asphalt —
are a rich material surface. Aeronautics fuel is the strongest candidate (reserved in reagent-ownership:
tfmg:diesel/gasoline/lubricant as M-13 propulsion fuels).

### Candidates

- from: tfmg:diesel / tfmg:gasoline / tfmg:lubricant | via: aeronautics engine intake (fuel-line from TFMG distillation tower to Aeronautics ship engine) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: airships that run on refined diesel from an oil rig make the industrial production chain load-bearing — you can't fly without a refinery; the scarcity→production→economy loop advances cleanly

- from: tfmg:steel_ingot / tfmg:cast_iron block | via: aeronautics hull/airframe construction (steel plate as structural material in ship-frame recipes) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: building a steel-hulled airship is obvious — TFMG is the steel source, Aeronautics needs a hard metal; the two mods were designed for this kind of synthesis

- from: tfmg:steel_ingot / tfmg:aluminum_ingot (scarce, Create-processed) | via: numismatics mint (processed metals as coin-mintable commodity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel and aluminum are high-effort refined goods produced from regional ores — they should carry real trade value; a Numismatics mint entry completes the scarcity→production→coin loop

- from: tfmg:combustion_engine (diesel/gasoline kinetic source) | via: aeronautics drivetrain / propeller recipes (the engine IS the propulsion plant for a ship) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG combustion engines are the mechanical heart of a propulsion system — routing them as the drivetrain component for Aeronautics ships gives the engine block a clear build-milestone role

- from: tfmg:sulfur / tfmg:saltpeter (chemical byproducts of distillation/blasting) | via: createbigcannons:big_cartridge_filling (gunpowder-precursor pathway — sulfur + saltpeter → gunpowder → propellant) | to: survival/combat | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: getting cannon propellant from industrial chemical byproducts ties the two military-industrial mods together; TFMG's smog flavor and Big Cannons' ordnance are tonally matched

- from: tfmg:plastic (polymer from distillation chain) | via: create:deploying or tacz gun_smith_table_crafting (plastic housing for modern weapon parts) | to: survival | motif: M-20 | power: endgame | tone: ok | verdict: REJECT | reason: TACZ firearm crafting is possible but this is a second-order adjacency; the direct link (plastic→gun stock) works thematically but tacz is a separate mod — the TFMG dossier doesn't list this as a candidate and the "gun plastic" angle is too thin to be a strong loop contribution vs. the already-accepted aeronautics seams

- from: tfmg:lithium_ingot | via: create_new_age:energising (lithium batteries as FE-charged energy storage unit) | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: lithium is the natural battery metal — routing TFMG lithium through Create New Age's energising station creates an electric-tier seam; the FE/voltage grid TFMG adds is already in the same space, so lithium→battery→electric is coherent

REWORK: existing Create anchor is a single anchor. The dossier correctly identifies aeronautics as the STRONG candidate and economy as MED. No arbitrary live weaves to rework (none authored yet). The 5 accepted candidates above would lift TFMG to 3 pillars (create/aeronautics/economy); that is the right outcome for the pack's industrial spine.

---

## knightlib   [anchors: support/library (1)]

### Method-pull analysis
knightlib has 6 items: empty_grail, filled_grail, great_chalice (block), great_essence, homunculus, small_essence.
loot=yes. However the dossier explains these items are inert without Knight Quest (not in this pack) — they are
API/placeholder content. The loot=yes flag likely comes from the chalice or a generated structure but the dossier
notes the content is dormant.

The dossier already concludes: "do not weave dead items." The grail/essence items would be natural M-02 or M-11
targets but without Knight Quest activating them they're dead content — weaving into them would target items
players can't obtain.

LEAVE — genuine dependent library; all content items are dormant without Knight Quest (not in pack); loot=yes but content is inert; weaving dead items is explicitly contra-indicated.

---

## dynamictreesplus   [anchors: survival/worldgen (1)]

### Method-pull analysis
Outputs: cap/stem blocks (brown_mushroom_cap, red_mushroom_cap, cactus_branch, mushroom_branch),
saguaro_fruit, cactus/mushroom seeds. No registered recipe-types — feeds into parent dynamictrees'
seed_conversion. Material is bulk organic/forage: mushroom caps, cactus.

Key method-pull candidates:
- Mushroom caps → farmersdelight:cutting (slice cap → mushroom slices for cooking)
- Saguaro_fruit → create:milling (mill to dye/colorant or food intermediate)
- Mushroom caps → ars_nouveau:imbuement or occultism:spirit_fire (fungi as organic magic reagent)

### Candidates

- from: dynamictreesplus:saguaro_fruit | via: create:milling (mill to cactus-green dye or juice concentrate) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a giant saguaro drops fruit you can mill for dye pigment — Create's mill is the natural next step for a crop; lightweight one-step everyday integration

- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: farmersdelight:cutting (cut cap on cutting board → mushroom slices, foldable into cooking recipes) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps should yield mushroom slices in bulk for cooking; the FD cutting board is the obvious tool for prep-at-scale

- from: dynamictreesplus:brown_mushroom_cap | via: occultism:spirit_fire (transmute large mushroom cap into fungal essence / witherbloom-style organic reagent) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: giant mushrooms have an organic-uncanny presence that fits spirit-fire transmutation into a fungal essence for Occultism rituals; the organic→magic bridge is coherent

- from: dynamictreesplus:saguaro_fruit | via: numismatics sell (regional arid-biome produce, scarce outside desert) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro_fruit is interesting as a milling input but the coin-sell angle alone is too thin — it needs the M-12 processing step first (saguaro fruit is not a "high-effort consumable" the way wine or cheese is); leave M-09 as a downstream effect of the milling step, not a standalone accepted weave

REWORK: none — no live weaves yet. OK — existing single-anchor (survival) is sound.

---

## tipsmod   [anchors: support/client-UI (1)]

### Method-pull analysis
Zero items, zero blocks, no loot. Pure client-side loading-screen tip display.

LEAVE — zero-content client UI library; no items, no methods, no material surface; nothing to weave.

---

## cmpackagecouriers   [anchors: create, aeronautics (2)]

### Method-pull analysis
Zero blocks, 10 items (cardboard_plane, location_transmitter, portable_stock_ticker, address_sign, rope variants).
Already ≥2 anchors per dossier. The cardboard_plane already uses create:cutting + create:deploying (inbound weave).
Light economy adjacency noted but the dossier leaves it — the mod is logistics infrastructure, not a coin node.

### Candidates

- from: cmpackagecouriers:cardboard_plane (autonomous courier vehicle) | via: economy (fulfils remote trade orders — the package IS the delivery mechanism for Numismatics-priced goods between bases/players) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no) and the adjacency here is soft infrastructure, not a hard recipe or loot-seed weave; the courier carries goods but doesn't create coin or anchor in a mint/trade; keep as ≥2 anchors

OK — connections sound. Create (cut/deploy construction + package extension) and aeronautics (autonomous flying courier = logistics arm) are the two clean anchors; adding a third forced edge to economy is busywork.

---

## copycats   [anchors: create (1 — Create-adjacent decoration)]

### Method-pull analysis
All 46 blocks are copycat shapes consuming zinc (Create's metal) and any applied block skin. No own recipe-types.
The dossier already concludes: "leave — it already lives inside the Create pillar; a second hard pillar would
be a forced edge."

### Candidates

- from: copycats copycat shapes (zinc-crafted) | via: create:item_application (apply any mod's block skin onto a blank copycat to produce the disguised shape — M-20 deploy-application) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the "application" here is already the copycat mod's own right-click mechanic, not an additional Create-method layer; adding a create:item_application wrapper on top is redundant and doesn't add a 2nd system anchor

LEAVE — intentionally single-anchor Create decoration mod; all routes to a second anchor are forced busywork. The dossier's verdict holds.

---

## shulkerboxtooltip   [anchors: support/QoL-client (1)]

### Method-pull analysis
Zero items, zero blocks, no loot. Pure client-side tooltip renderer.

LEAVE — zero-content client QoL library; pure UI overlay with no items, methods, or material surface.

---

## create_ironworks   [anchors: create (1)]

### Method-pull analysis
create_ironworks adds tin_ore (3 biome-modifiers, regional scarcity), bronze and steel alloys via Create mixing,
a full tool/armor set, hammer + paxel. c:tags expose ingots/plates/nuggets/storage for tin/bronze/steel.
loot=yes — has loot tables (likely from structure-loot seeding of the ore/tools or dungeon drops).

Key material surface for method-pull:
- Tin is a fresh scarce regional metal: crush → process → coin (M-08)
- Steel plate → Aeronautics structural component (M-23) — steel is the canonical structural alloy
- Bronze / tin ingot as alloy → aeronautics drivetrain component (M-24)
- Steel-tier tools as boss-key gated progression (M-15)

### Candidates

- from: create_ironworks:tin_ingot / tin_ore (scarce regional metal, biome-gated by 3 modifiers) | via: numismatics mint (crushed tin → processed → minted as a scarce regional coin commodity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is rare in certain biomes and abundant in others — processing it through Create and minting coins is the scarcity→trade loop made concrete; tin coins reward regional specialization

- from: create_ironworks:steel_ingot / steel_plate (highest metalworking tier, Netherite-upgradeable) | via: aeronautics hull/airframe construction (steel plate as structural hull component for heavier ships) | to: aeronautics | motif: M-23 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: steel-hulled ships are an obvious milestone — you can't build a serious warship from wood and zinc; create_ironworks' steel is the natural hull metal; depth scales with ship tier (iron/bronze frame first, steel for heavy hulls)

- from: create_ironworks:bronze_armor / bronze_axe / brass_hammer (mid-tier gear set) | via: loot-table seeding into structure chests (upgrade_aquatic shipwrecks, securitycraft vaults, dungeon chests as mid-tier pre-Create gear drops) | to: survival | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: M-15 is specifically boss-drop → Create/tech recipe gating; seeding gear into loot tables is a loot-seed, not a boss-key unlock; this would be a loot-seed (valid delivery) but there's no motif that cleanly covers "mid-tier gear in loot tables" as a pillar seam — it's flavor, not a loop advance

- from: create_ironworks:steel_block / steel_ingot | via: aeronautics drivetrain (steel as a mechanical component — flywheels, axles, precision gears — feeding Aeronautics propeller/engine assemblies) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: steel isn't just structural — it's the right material for high-stress rotating machinery; create_ironworks steel feeding Aeronautics' precision drivetrain ties both mods' industrial themes into one supply chain

REWORK: existing Create anchor is a single anchor; dossier's STRONG candidate (M-08 coin from scarcity) and MED candidate (worldgen scarcity) are correctly identified. The 3 accepted candidates above lift create_ironworks to 3 pillars (create/aeronautics/economy).

---

## letsdocompat   [anchors: survival (1)]

### Method-pull analysis
Zero items, zero blocks, 3 c:tags (items/foods/leafy_green). Pure recipe-glue/tag bridge for the Let's Do
food-mod family. The dossier correctly notes it IS the M-12-style unification layer and has nothing of its
own to give a second pillar.

### Candidates

- from: letsdocompat leafy_green tag (items/foods/leafy_green — a c:tag it registers) | via: extradelight:mortar or farmersdelight:cooking (leafy_green as a salad base ingredient routing through multiple cooking stations across mods) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: letsdocompat already IS the inter-mod recipe glue; flagging one of its own tag outputs as a weave candidate is circular — the mod's whole purpose is this kind of routing; it doesn't need a second pillar weave, it is one

LEAVE — this mod IS the weaving infrastructure for the food cluster; its one anchor (survival/food-web) is its entire purpose; forcing a second pillar would double-count the glue as both glue and weave-node.

---

## yet_another_config_lib_v3   [anchors: support/library (1)]

### Method-pull analysis
Zero items, zero blocks. Pure config-screen API.

LEAVE — zero-content config-UI library; pure developer API with no items, methods, or material surface; nothing to weave.

---

## immersive_paintings   [anchors: decoration/support (1)]

### Method-pull analysis
4 items: painting, glow_painting, graffiti, glow_graffiti. Vanilla crafting table materials. No loot.
Dossier concludes "leave" — pure decorative-expression mod with no material routing coherence.

### Candidates

- from: immersive_paintings:glow_painting | via: create_new_age:energising (FE-charge to power the glow; an electric light source that needs charging) | to: create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: glow_painting is a custom art canvas, not an electric device — the FE-charging framing is contrived; a player would not expect their oil painting to need a charging station; tone clash between "personal art" and "industrial electricity"

- from: immersive_paintings:painting (custom canvas) | via: numismatics sell (commissioned artworks as a luxury sell-good, high-effort player expression item) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: paintings have no crafting depth (vanilla mats only) and their "value" is player-creative labor, not processed scarcity; M-09 requires a high-effort *consumable*, not a decorative canvas; the "sell artwork as a luxury" angle would need a special auction mechanic that doesn't exist

LEAVE — pure player-expression decoration mod; no material routing is coherent; the dossier's verdict holds.

---

## create_ultimate_factory   [anchors: create (1)]

### Method-pull analysis
Zero items, zero blocks. A pure recipe datapack adding ~30 Create recipes making vanilla resources renewable.
Dossier concludes "leave" — deepens the Create pillar but has no items of its own to give a second anchor.

### Candidates

- from: create_ultimate_factory coal-block + lava → diamond (via create:compacting) | via: economy / numismatics — a synthetic diamond pathway could feed diamond-coin minting as a Create-economy seam | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the mod is a recipe datapack with no items of its own; the "diamond from compacting" recipe it adds is the output, not a separately routable material; economy adjacency exists but assigning it a weave anchor would mis-credit the source (it's a vanilla item, not this mod's item; the coin seam belongs to the Create pillar overall, not to this recipe pack specifically)

LEAVE — recipe-only datapack with no item surface; deepens Create without bridging pillars; correctly single-anchored.

---

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]

### Method-pull analysis
Zero items, zero blocks. Kotlin language adapter for NeoForge.

LEAVE — pure language-runtime library; zero content surface; nothing to weave.

---

## mcwstairs   [anchors: decoration (1)]

### Method-pull analysis
224 blocks/items — stair/railing/balcony/platform variants in wood and stone. Vanilla-table crafted.
Dossier suggests M-04 (create:crushing stone variants → gravel + xp nugget) as WEAK, only as part of a
wholesale deco-family pass.

### Candidates

- from: mcwstairs stone/brick railing/balcony variants (brick_balcony, blackstone_loft_stairs, etc.) | via: create:crushing (M-04 lossy recycling — stone deco → gravel + create:experience_nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the recycling yield (gravel + xp nugget) is not a meaningful loop contribution for stair blocks — this is a very thin connection and the dossier already flags it WEAK and only appropriate as part of a wholesale deco pass; individual stair crushing is noise, not signal

LEAVE — deco-palette mod with no material routing coherence beyond a thin M-04 recycling note the dossier already flags as wholesale-only. Single-anchor decoration is acceptable.

---

## incontrol   [anchors: server-util/support (1)]

### Method-pull analysis
Zero items, zero blocks, no loot. JSON-rule spawn/loot/XP engine for server-side tuning.

LEAVE — config-only server-admin utility; no items, no methods, no material surface; acts as enabling infrastructure for the pack's scarcity design but is not itself a routable node.

---

## oceansdelight   [anchors: survival (1)]

### Method-pull analysis
25 items: guardian_soup, cut_tentacles, fugu_slice, elder_guardian_roll, cooked_stuffed_cod,
cooked_stuffed_squid, baked_tentacle_on_a_stick, braised_sea_pickle, etc.
Already routes through farmersdelight:cooking + farmersdelight:cutting (inbound weaves).
Dossier identifies economy (M-09 luxury trade goods) as STRONG and M-12 processing chain extension as MED.

Key power-read: elder_guardian_roll and fugu_slice are endgame seafood (elder guardian is a boss fight).
The fugu_slice specifically has poison-risk = delicacy status. These are genuinely high-effort luxury goods.

### Candidates

- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice (high-effort seafood, boss-fight required for elder guardian) | via: numismatics sell (price as luxury coastal delicacies — coast specialist trades to inland players) | to: economy | motif: M-09 | power: endgame (elder guardian) / mid (fugu) | tone: ok | verdict: ACCEPT | hook: an elder guardian boss fight + FD cutting prep + cooking chain into a delicacy roll is exactly the scarcity→effort→sellable-good the economy loop needs; players with ocean bases specialize in this trade

- from: oceansdelight:guardian (raw guardian ingredient) / cut_tentacles | via: farmersdelight:cutting → create:mixing (extended processing chain: cut tentacle on board → mix with brine → pickled tentacle, a further processed good raising sell value) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: brine-pickling tentacles in a Create mixer (mixing with salt/water) is a natural industrial food-prep step; extends the existing FD-cooking chain into the Create processing web and creates a higher-value trade good

- from: oceansdelight:guardian_soup (block form, persistent on the battlefield) | via: loot-seed into guardian/elder-guardian loot table (a chance to find a recipe book or themed ingredient) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the guardian soup is a player-placed block, not a loot-table item; the loot-seed angle (seeding recipe books or ingredients into guardian drop tables) is a config action, not a weave; it doesn't advance the loop in a measurable pillar-anchor way

- from: oceansdelight:fugu_slice (poison-risk food — a "dangerous delicacy") | via: occultism:spirit_fire or ars_nouveau:imbuement (transmute fugu toxin into a poison reagent for rituals) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the pufferfish toxin in a fugu slice has an obvious potion/reagent use — burning it in spirit-fire to extract the toxin as an Occultism ritual ingredient bridges coastal food-gathering to the magic pillar; players who brave pufferfish for exotic food also supply the magic users

REWORK: none — no live weaves yet. Existing single-anchor (survival/food) sound.

---

== CHUNK COMPLETE ==
