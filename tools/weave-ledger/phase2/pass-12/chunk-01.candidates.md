# Phase 2 candidates — chunk-01 (pass-12, context-fed)

<!-- NEW: = adds something not in accumulated rows; CHALLENGE: = disputes an existing row -->

## betterstrongholds   [anchors: survival (1)]

Existing rows: none in CANDIDATES.md (correct — dossier says LEAVE).

- NEW: LEAVE — pure structure/worldgen mod; no registry items, no methods to route through. A loot-table seed (numismatics coin or magic reagent into stronghold chests) is a valid *datapack edit* and worth flagging as a human task at Gate 2, but it is not a mod weave and produces no candidate row. The only novel angle not in any prior pass: the stronghold loot already contains Ender Eyes and enchanted books — if create_enchantment_industry's liquid-XP chain is already woven, a loot-table note pointing players toward that chain is thematic flavor, not a weave. Still LEAVE.

---

## mushroomquest   [anchors: survival (1)]

Existing accepted rows (summary): M-12 cooking chain (farmersdelight:cooking/extradelight) [6×], M-09 sell rare/mythical caps [9×], M-11 spirit_fire deadly caps [8×→REJECT], M-10 Ars imbuement deadly/mythical caps [8×→ACCEPT].

- CHALLENGE: The M-09 "rare/mythical sell" row (times=9, verdict=REJECT) is challenged by subsequent 2× rows showing ACCEPT — the split verdict reflects inconsistent framing. The core issue is whether *any* sell-through is M-09 or whether it specifically requires high-effort processing. Rare/mythical caps are biome-gated and multi-stage finds (not crafted), so they satisfy the "high effort" bar without processing. RECOMMEND reconsidering the REJECT: foraged biome-gated mythicals are more exclusive than a cheese wheel and equally justify M-09. This is a framing challenge, not a new candidate.
- NEW: from: mushroomquest:resin_orb (the sticky amber-like orb from Mushroom Island shrumps) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — resin-orb-as-organic-fixative into an arcane binder is coherent, and the orb is visually distinct from a mushroom cap, giving the magic pull a different material identity | verdict: ACCEPT | hook: the shrump's waxy resin concentrates wild spores into an arcane base — imbuement burns off the organic and leaves a source concentrate
- NEW: from: mushroomquest glowshrooms (blue/green/magenta — light-emitting blocks) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling glowing caps yields a luminescent dust (bioluminescent pigment) usable as a crafting reagent — thematic, low-step, everyday-tier; no blind passes proposed this specific material (only "deadly/mythical" were proposed via milling, never the glowshroom line)
- NEW: from: mushroomquest effect-bearing caps (poison/nausea/glowing mushrooms — mid tier) | via: extradelight:mortar (grind into potion-component paste) → irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: grinding toxic or hallucinogenic caps in the mortar then brewing the extract in the alchemist's cauldron converts a foraged herb into a spell-reagent — the poison-to-brew pipeline is intuitive; no prior pass routed mushroomquest through irons_spellbooks
- CHALLENGE: M-11 "spirit_fire deadly caps" (times=8, verdict=REJECT in top row, but ACCEPT at 3×). The REJECT rationale is likely "tone: clash — mushrooms into spirit fire feels forced." Counter-argument: Occultism spirit fire is broadly used to transmute organic material; poisonous mushrooms have a strong *occult/toxic* association that predates modern gaming (poisoned chalice, witch's brew). The clash is mild. Recommend upgrading to ACCEPT for *specifically* the deadly/poisonous cap tier, not all caps. This is a challenge to the high-confidence REJECT row.

---

## create_enchantment_industry   [anchors: Create (1)]

Existing accepted rows: M-10 experience_bucket → ars_nouveau:imbuement [8×]; M-05 liquid-XP gating magic-side cost [2×]; M-18 mechanical_grindstone → occultism:spirit_trade [1×]; M-10 liquid XP → irons_spellbooks:alchemist_cauldron [3×].

- CHALLENGE: The M-10 "experience_bucket → ars_nouveau:imbuement" row (8×, ACCEPT) is high confidence but ambiguous in direction: liquid XP *as fuel for* imbuement vs. liquid XP *as an ingredient produced by* imbuement. These are different weaves. Clarification needed at Gate 2: is the hook "imbuement consumes liquid XP to power the arcane step" (making CEI the supplier to magic) or "magic-side imbuement produces/refines the XP bucket" (making magic the upstream)? The former is more coherent (CEI is Create-spine, magic pillar pulls from it) — the accepted row should specify directionality to avoid a round-trip arbitrage.
- NEW: from: create_enchantment_industry:experience_cake (a craftable, stackable XP food — everyday accessible) | via: farmersdelight:cooking (cook experience_cake_base → experience_cake using the cooking pot) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the experience cake is literally food — routing its base through FD cooking integrates it into the food-processing chain naturally; no prior pass proposed this specific item via the M-12 cooking route (the 1× REJECT for "experience_cake cooking chain" referenced it as a reject, but this is the *cooking-pot* path to the *base → cake* craft step, not the same route)
- NEW: from: create_enchantment_industry:mechanical_grindstone + create_enchantment_industry:grinding method | via: smokeleafindustries items (buds/extract) — CEI's grinding method could accept smokeleaf product as a "refinement" step | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial grindstone processes fibrous material into refined powder; smokeleaf buds fed through the grindstone yield a concentrated extract intermediate — threads two Create-spine mods together; not proposed by any prior pass
- NEW: from: create_enchantment_industry:printer (copies written books / enchanted books, fuelled by liquid XP + liquid ink) | via: ars_nouveau:book_upgrade method — the printer's output (copied enchanted books) as a feedstock for Ars book upgrades | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ars book-upgrade method expects an existing book of the right tier — the CEI printer can mass-produce those intermediates, making the printer a factory-spine supplier to the Ars system; no prior pass found this method-to-method routing (prior passes tried `enchanting_apparatus` or `alchemist_cauldron`, never `ars_nouveau:book_upgrade`)

---

## createmechanicalcompanion   [anchors: Create (1)]

Existing rows: M-09 sell/commission wolf (2×, REJECT). Dossier says LEAVE.

- NEW: from: createmechanicalcompanion:booster_rocket (a module item in the companion's upgrade tree, has a "rocket" visual) | via: Aeronautics M-24 component framing — the booster_rocket module shares physical identity with an Aeronautics thruster component; require one as a crafting ingredient in a low-tier Aeronautics thruster recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the same clockwork booster that propels the mechanical wolf can be scaled up to power a ship's thruster — an elegant shared-component story; no prior pass proposed this
- CHALLENGE: The LEAVE verdict (dossier + 2× REJECT) is well-reasoned but the `booster_rocket` item is genuinely aeronautic in name and visual. The new row above is the only non-forced edge found. If `booster_rocket` is not actually an Aeronautics-compatible item (would need playtesting to confirm recipe fit), this remains LEAVE. Flag for Gate 2.

---

## undergroundworlds   [anchors: survival (1)]

Existing accepted rows: M-11 spider_fang → occultism:spirit_fire [11×]; M-04 temple/pyramid bricks → create:crushing [9×].
Existing REJECT rows: M-10 spider_fang → ars imbuement (4× REJECT), M-04 temple bricks → crushing (2× nuanced REJECT).

- CHALLENGE: The M-04 temple/pyramid brick crushing rows are split (9× ACCEPT at top, 2× nuanced REJECT further down). The 9× top row should dominate — crushing deco back to stone + XP nugget is M-04's standard pattern and is well-established. The 2× REJECT likely reflects a concern about whether it *adds* anything meaningful beyond trivial stone recovery. Counter: it connects the mod to the Create web (even lossily) and is consistent with all other M-04 deco rows. The ACCEPT should stand; REJECT rows are probably an outlier. No action needed.
- NEW: from: undergroundworlds:freezing_* tools (freezing_sword/axe/pickaxe/shovel/hoe — mob-freezing enchant effect) | via: create_new_age:energising — energise the freezing weapon to amplify or preserve the freeze aura, bridging the cryo mechanic to the electrical tier | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the freezing weapon channels cryo energy — passing it through the Energiser supercharges the freeze effect, making the tech path tangible; no prior pass proposed this route
- NEW: from: undergroundworlds:ice_chest (decorative chest variant found in Ice Dungeons, contains loot) | via: loot-table seed — inject a numismatics coin or Occultism reagent into the ice_chest loot table | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the ice dungeon feels like a remote trading post — its strongbox naturally carries rare coin; this is a datapack edit but it's specifically attached to a named registry block (not a generic "loot table"), making it more precise than the pure-structure YUNG mods; no prior pass proposed this specific item
- NEW: from: undergroundworlds:desert_charm / antidote_flask (curio-slot immunity charms — everyday survival items) | via: ars_nouveau:enchanting_apparatus as a crafting step — require an Ars infusion step to *create* the charm's immunity binding, adding a mid-tier magic cost to what is otherwise a trivially dropped item | to: magic | motif: M-05 | power: everyday-to-mid | tone: ok | verdict: ACCEPT | hook: the charm's magic-immunity effect needs an arcane binding to work — obvious to a player familiar with Ars infusion; shifts the charm from a lucky-drop to a crafted item with magic cost; not proposed by any prior pass (prior passes put charms under M-10 REJECT or M-09 REJECT, not M-05)

---

## samurai_dynasty   [anchors: survival (1)]

Existing accepted rows: M-03 jade/ruby/onyx/aquamarine crushing [3×]; M-02/M-11 Yokai drops → spirit_fire [3×]; M-08 steel → numismatics mint [2×]; M-03 jade → crushing [2×].
Key REJECT: M-10 jade → ars imbuement [2×]; silver ore → crushing [3× REJECT due to Galosphere silver caveat].

- CHALLENGE: The M-03 steel row ("samurai_dynasty:steel, c:ingots/steel, create:crushing" 3× ACCEPT) is problematic. You crush *ore* for M-03, not *ingots* — an already-smelted ingot doesn't benefit from ore-doubling; running it through crushing is a downgrade, not a reward. The correct Create route for steel is `create:pressing` (ingot → plate) which feeds M-23 aeronautics. The M-03 rows for steel should be REJECT; the M-23/M-24 steel rows are the correct path. Flagging this as a mis-motif.
- NEW: from: samurai_dynasty katana / spear weapon set (c:tools or custom tier — mid combat items) | via: create_enchantment_industry:blaze_enchanter + liquid XP gating — require liquid XP to enchant the katana to its final tier (auto-enchanting the feudal blade via the industrial enchanting chain) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the master katana needs a precise enchant applied by the Blaze Enchanter — the feudal blade meets the industrial enchanting line; no prior pass proposed this specific route
- NEW: from: samurai_dynasty:aquamarine (gem, c:gems-tagged — a blue jewel not proposed via magic in any prior pass) | via: ars_nouveau:imbuement — aquamarine as an arcane resonance stone (cool-toned, associated with water/sky) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: aquamarine's blue clarity makes it a natural arcane lens — imbuing it yields a water-attuned focus component; prior passes only proposed jade via M-10 (REJECT); aquamarine is a distinct material with a more coherent magic tone than jade
- NEW: from: samurai_dynasty spirit_stone blocks (decorative, temple-aesthetic) | via: create:crushing → polished spirit stone dust / spirit stone gravel as a new intermediate material | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing spirit-stone back to gravel recovers the raw quarry stone — standard M-04 lossy deco recycle; the 3× REJECT for this route seems to have been for "using it as a Create material" (forced) not the simple M-04 recycle — the recycle reading is sound and consistent with all other M-04 deco rows

---

## smokeleafindustries   [anchors: survival (1)]

Existing accepted rows: M-09 refined extracts/gummies → numismatics sell [7×]; M-17 FE → createaddition:charging [4×]; M-12 raw hemp/buds → create:milling [3× but top entry is REJECT].

- CHALLENGE: The M-12 "raw hemp/buds → create:milling" rows (5× REJECT, 3× REJECT) are correct to reject if the intent is to *bypass* the smokeleaf machines, since that trivializes the mod's tech chain. However, M-12 with milling could work as an *alternative input* (milled hemp flour as a cooking ingredient for FD recipes) rather than as a replacement for the smokeleaf grinder. The distinction matters: milling hemp into *food-grade flour* (not a smokeleaf product) is additive, not competitive. No prior pass made this distinction. NEW row follows.
- NEW: from: smokeleafindustries hemp crop (raw hemp plant, not the buds — the stem/fiber portion) | via: create:milling → hemp fiber / hemp flour (a food-adjacent intermediate) → farmersdelight:cooking (hemp-flour flatbread) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the hemp *stem* mills into fiber the same way flax does — a cooking intermediate from an otherwise purely-drug-pipeline plant; distinguishes the food path (stem/fiber) from the smokeleaf path (buds/extracts); not proposed by any prior pass in this framing
- NEW: from: smokeleafindustries:sequencer (the multi-step automated crop pipeline machine — sequencer schedules which machine runs which strain) | via: create:sequenced_assembly — require a Create sequenced-assembly step to *build* the sequencer itself (gating the automated tier behind Create progression) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf sequencer's multi-step batch logic is the mod's "flagship machine" — gating it on a Create sequenced-assembly build is exactly M-05 native-method gating; no prior pass proposed this (passes proposed milling or FE-bridge, not machine-gating)
- NEW: from: smokeleafindustries:synthesizer output (refined, processed final product — the top-tier extract) | via: ars_nouveau:imbuement — the purified extract as a magic reagent; the synthesizer's output is a chemically refined compound that could function as a potent arcane catalyst | to: magic | motif: M-10 | power: endgame | tone: ok (slightly edgy but coherent — refined compound as alchemical reagent is a classical trope) | verdict: ACCEPT | hook: the synthesized extract, stripped of organic impurity, concentrates into an arcane essence when imbued — the alchemical pipeline literalizes the old "herbalist → alchemist" transition; no prior pass proposed the *synthesizer output specifically* via M-10 (prior passes used "refined extracts/gummies" generically under M-09)

---

## rottencreatures   [anchors: survival (1)]

Existing accepted rows: M-11 frozen_rotten_flesh → occultism:spirit_fire [9×]; M-11 magma_rotten_flesh → spirit_fire [7×]; M-10 corrupted_wart → ars imbuement [6×]; M-19 magma_rotten_flesh → create:haunting [2×].
Key REJECT: M-19 frozen_rotten_flesh → haunting [5× REJECT].

- CHALLENGE: The M-19 "frozen_rotten_flesh → create:haunting" REJECT (5×) is well-founded — soul fire shouldn't *freeze* things, haunting transmutes toward soul/ghostly, not cryo. Agreed REJECT. But the inverse is worth noting: if `create_dragons_plus:freezing` method is available (it is in the methods palette), frozen_rotten_flesh → `create_dragons_plus:freezing` as a cryo input would be thematically coherent. NEW row follows.
- NEW: from: rottencreatures:frozen_rotten_flesh (Frostbitten zombie drop — cold-biome exclusive) | via: create_dragons_plus:freezing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the frozen corpse's cryo-saturated flesh feeds the freezing method — cold mob → cold machine input; no prior pass proposed this specific routing (prior passes tried haunting, which was correctly rejected; this uses the *actual* freezing method in the palette)
- NEW: from: rottencreatures:treasure_chest (a named chest block dropped by Dead Beard pirate captain — rare) | via: loot-table seed — inject numismatics coin into the treasure_chest loot table | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the pirate captain's treasure chest quite literally should contain coin — obvious flavor connection; no prior pass proposed this specific item (prior passes discussed generic loot-table seeds, not this named chest block); this is a datapack edit but attached to a specific named registry block
- NEW: from: rottencreatures mob heads (undead_miner_head, dead_beard_head, immortal_head, etc.) | via: create:haunting — haunt mob heads into soul-saturated decorative variants (soul-head deco?) | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: the undead head in soul fire transforms — a Create-native transmutation that gives the heads a secondary use without trivializing combat; not blocked by the M-19 frozen-flesh REJECT (the flesh route was rejected on cryo-logic, not on soul-fire logic); prior passes proposed this at 4× REJECT citing "too trivial / just deco" — but M-04 deco recycles are similarly "trivial" and are accepted; the distinction from REJECT is that haunting *transforms* the item meaningfully (deco → soul-deco), whereas prior REJECT reasoning was "mob heads from crushing" (M-04 logic, correctly rejected)

---

## brazil_legends   [anchors: survival (1)]

Existing accepted rows: M-11 capelobo_claw → occultism:spirit_fire [9×]; M-09 amber_shard → numismatics sell [2× ACCEPT]; M-10 big_tongue → ars imbuement [2×]; M-10 amber_shard → ars imbuement [7×]; M-03 amber_shard → create:crushing [1×].

- CHALLENGE: The M-09 "amber_shard → numismatics sell" rows have mixed verdicts (9× REJECT, 2× ACCEPT). The REJECT reasoning is likely "amber is too common to be a luxury M-09 good." Counter: amber_shard is a boss drop from the Capelobo, not a farmed crop — it is rare-encounter loot, not renewable production. That *does* meet the M-09 "high-effort" bar. However, the better route may be M-08 (coin from processed scarcity, if amber is crushed → powder → minted) rather than raw-sell M-09. The M-03 crush row [1×] supports this. Recommend ACCEPT for M-08 specifically: amber_shard → create:crushing → amber_dust → numismatics mint.
- NEW: from: brazil_legends:amber_shard | via: create:crushing → amber_dust + numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing the rare amber shard yields amber powder — a ground gemstone that mints into coin by the standard processed-scarcity pattern; more precise than the raw-sell M-09 and separates brazil_legends economy contribution from the generic "sell anything rare" pattern; not proposed by any prior pass in this framing (the 1× M-03 crush row lacked the numismatics follow-through)
- NEW: from: brazil_legends:bottle_with_saci (the Saci Pererê trapped in a bottle — a unique "entity-in-a-bottle" item) | via: occultism:spirit_trade — offer the bottled spirit as a payment in a spirit trade, using the imprisoned trickster as an exotic trade commodity | to: magic | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't keep a trickster spirit bottled forever — trading it to an Occultism spirit for something rare is exactly the spirit-trade method's flavor; no prior pass proposed bottle_with_saci via M-18; prior pass proposed M-10 REJECT (imbuement is wrong — you don't *infuse* a bottled spirit)
- NEW: from: brazil_legends:bloodmoon_sickle (a weapon that presumably activates or gains power on a blood moon event) | via: M-22 lunar/celestial reagent — require the weapon to be crafted or upgraded only during a blood-moon event (EnhancedCelestials blood moon), or its output drop rate spikes then | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the bloodmoon sickle named for the lunar event — it stands to reason crafting its final form requires the actual blood moon; no prior pass proposed brazil_legends × EnhancedCelestials / M-22; the 1× REJECT was for create:haunting (M-19), not M-22

---

## betteroceanmonuments   [anchors: survival (1)]

Existing rows: 1× REJECT (loot-table seed → magic, no-motif); 1× REJECT (loot-table seed → economy/M-08, REJECT).
Dossier says LEAVE. Both blind passes correctly rejected.

- NEW: LEAVE — same reasoning as betterstrongholds. No registry items, no methods. The loot-table seed is a datapack edit, not a mod weave. The one novel angle: ocean monument prismarine blocks are vanilla and already crushable (M-04), but that weave is on *vanilla*, not on betteroceanmonuments itself. LEAVE stands. The 2× prior REJECT rows are correct.

---

== CHUNK COMPLETE ==
