## bakery  — slate: 3 KEEP / 16 CUT / 5 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | wheat→flour via create:milling | motif M-12 | delivery: recipe (KubeJS or datapack — add create:milling wheat→flour output accepted by bakery dough chain) | milestone: v0.7.0 | why "of course": the millstone grinds grain before the baker bakes; Create feeds the artisan kitchen at the flour step — a single light tie that makes sense the moment you see it. Representative of 16-suggestion ACCEPT cluster.

KEEP  | bakery finished goods → MineColonies cook-hut colony demand | motif M-28 | delivery: config (MineColonies request addition via KubeJS/colony config — cakes/tarts as colony-requested food) | milestone: v0.9.0 | why "of course": a colony cook hut needs feeding; the bakery specialist is the obvious supplier; repeating colony demand keeps the baker busy. 9-suggestion ACCEPT.

KEEP  | bakery luxury goods (tarts/cakes) → consumption sink (diet system) | motif M-26 | delivery: config (Appleseed Diet group mapping — bakery sweets fill Sugars group; no recipe change required) | milestone: v0.13.0 | why "of course": bakery's specialty sweets satisfy the Sugars diet group, making them a true consumption sink the diet-pressure mechanic renews constantly. Represents the 3-suggestion M-26 ACCEPT cluster.

MERGE | bakery:baguette/braided_bread/bread wheat-milling rows (×8 lower-suggestion variants) | into: wheat→flour KEEP | reason: all are phrasing variants of the same M-12 Create-milling tie; keep the highest-suggestion representative.

MERGE | bakery baked goods MineColonies supply rows (×4 lower-suggestion M-28 variants including blank_cake colony request, apple_jam colony request) | into: colony demand KEEP | reason: all propose the same cook-hut/colony supply mechanic; dedupe to one.

MERGE | bakery luxury goods / diet-demand rows (×3 M-26 ACCEPT variants) | into: consumption sink KEEP | reason: same M-26 diet-system logic across multiple phrasings.

MERGE | bakery:apple_jam/strawberry_jam seasonal availability rows (×5 M-16 ACCEPT rows) | into: CUT below | reason: fold into seasonal-cut reasoning; M-16 seasonal gating is a separate delivery not being kept here.

MERGE | bakery surplus fruit→fermentation (M-35 rows ×3) | into: CUT below | reason: 2 suggestions, mixed consensus, two-hop chain; better owned by vinery/alcohol_industry mod weaves.

CUT   | bakery magic rows (M-02/M-10/M-11 — baked goods as Source/arcane reagent) | motif M-02/M-10/M-11 | reason: unanimous REJECT across all passes (6+6+5 REJECTs); tone clash — food is not an arcane catalyst; weak and better owned by dedicated farm/crop mods.

CUT   | bakery seasonal gating (M-16 rows) | motif M-16 | reason: mixed/REJECT consensus; bread is year-round, jam seasonality is thin; the M-16 slot is owned more coherently by the actual crop/farm mods; no config handle without forcing an awkward seasonal gate on a bakery convenience item.

CUT   | bakery:blank_cake_interaction (internal deco) via ars:prestidigitation | motif blank | reason: REJECT; internal deco flavor, no connective motif.

CUT   | bakery:blank_cake via create:deploying (M-20) | motif M-20 | reason: 1 ACCEPT at 1-pass; too thin — decorating a cake with a deployer is contrived; depth does not scale with this everyday item.

CUT   | bakery baked goods → alcohol fermentation chain (M-35, jam→wine/brandy) | motif M-35 | reason: low confidence (1–2 passes, mixed); the jam→ferment path is a two-hop chain better owned by vinery/alcohol_industry; this is not bakery's natural anchor.

CUT   | bakery:beer/bread→alcohol_industry (M-12 alcohol variant) | motif M-12 | reason: REJECT; alcohol_industry already has its own inputs; bread→alcohol is a category error.

CUT   | bakery loot-seed rows (M-34 loot=yes) | motif M-34 | reason: REJECT; bakery is a structure/food mod, not a boss-loot source; tone clash.

CUT   | bakery:blank_cake_interaction→supplementaries display (M-33) | motif M-33 | reason: REJECT; no method to route service-for-hire through an in-world block decoration; no coherent delivery.

---

## bettermineshafts  — slate: 1 KEEP / 4 CUT / 2 MERGE / 0 DEFER   | anchors after: economy (now 1; note: single-anchor, candidate for a second weave if a magic loot-seed proves coherent to a maintainer)

KEEP  | mineshaft chest loot → loot-seed (numismatics coin) | motif M-08 | delivery: loot-seed (datapack rider on vanilla `chests/abandoned_mineshaft` loot table — add a small Numismatics coin pool) | milestone: v0.9.0 | why "of course": deeper, more dangerous extended mineshafts deserve a better payoff; a coin scatter makes spelunking economically meaningful and threads the exploration layer into the player economy. Represents the 4-suggestion M-08 ACCEPT cluster and the 1-suggestion M-34 ACCEPT (coin as combat-route reward — same delivery).

MERGE | mineshaft loot-seed M-08 lower-phrasing rows (×2 M-08 ACCEPT variants at 1 suggestion) | into: coin loot-seed KEEP | reason: same delivery, same motif.

MERGE | mineshaft loot-seed M-02 (magic reagent in loot) rows (×2) | into: CUT below | reason: fold; magic-reagent seeding is cut (see below).

CUT   | bettermineshafts loot-seed M-02 (magic reagent / allurite shard) | motif M-02 | reason: mixed consensus (2A/2R); the mineshaft is a human-danger structure, not an organic-mob-drop context — M-02 belongs on mob-drop mods; seeding foreign-mod reagents in a vanilla chest type is better done from the magic mod's weave, not a structure mod's.

CUT   | bettermineshafts loot-seed M-15 (boss-key in mineshaft) | motif M-15 | reason: REJECT (2R); mineshafts have no boss encounter — M-15 requires a meaningful fight as gate.

CUT   | bettermineshafts config-tie → Create ore mining improvement | motif blank | reason: REJECT; structural layout improvement with no item/method handle; not a weave.

CUT   | bettermineshafts danger-pressure anchor (survival) | motif blank | reason: REJECT; this is already bettermineshafts' existing anchor; no new edge to author.

CUT   | bettermineshafts loot-seed M-30 (regional scarcity gate) | motif M-30 | reason: REJECT; M-30 rides GTMOGS ore-gen, not structure size; bettermineshafts doesn't control ore placement.

CUT   | bettermineshafts loot-seed M-34 (structure loot) | motif M-34 | reason: the M-34 delivery folds into the M-08 KEEP (coin in loot rewards exploration); M-34 as a distinct slot is redundant here.

---

## brazil_legends  — slate: 3 KEEP / 14 CUT / 5 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | brazil_legends:capelobo_claw → occultism:spirit_fire | motif M-11 | delivery: recipe (KubeJS `occultism:spirit_fire` recipe — capelobo_claw yields an occult essence) | milestone: v0.11.0 | why "of course": the claw of a folkloric cursed dog-creature burns in spirit-fire to yield occult essence — the highest-suggestion ACCEPT (29) with unanimous consensus. Primary magic anchor.

KEEP  | brazil_legends:amber_shard → ars_nouveau:imbuement | motif M-10 | delivery: recipe (KubeJS `ars_nouveau:imbuement` — amber as arcane reagent) | milestone: v0.11.0 | why "of course": amber is associated with preserved/trapped essences; imbuement reads as releasing the preserved magic — 25-suggestion with strong ACCEPT. Second magic weave that adds ars_nouveau coverage alongside occultism.

KEEP  | brazil_legends signature drops (capelobo_claw / amber_shard / bottle_with_saci) → combat-specialist trade | motif M-34 | delivery: config (Bountiful bounty pool — add amber_pearl as a bounty objective; biome-locked mobs make these combat-supply goods) | milestone: v0.9.0 | why "of course": these mobs are biome-locked and dangerous; a hunter supplies drops to magic users — the economy side of the combat gate. Represents the M-34 ACCEPT cluster (2+1+1 suggestions) and the amber_pearl bounty row.

MERGE | brazil_legends:big_tongue → occultism:spirit_fire rows (×3, M-02/M-11) | into: capelobo_claw KEEP | reason: big_tongue covers the same M-11/magic slot as capelobo_claw; one mob-drop-to-spirit-fire weave is sufficient; 13-suggestion row itself notes the redundancy.

MERGE | brazil_legends amber_shard / amber_pearl rows (M-11 spirit_fire variants ×2) | into: amber KEEP (M-10 imbuement) | reason: both amber forms route to the same magic-reagent outcome; M-10 imbuement is the preferred delivery over spirit_fire for amber (thematically better; no organic transmutation needed).

MERGE | brazil_legends capelobo_claw / big_tongue / amber_shard (M-02 opus rows ×2) | into: capelobo_claw KEEP + amber KEEP | reason: both opus M-02 rows are subsumed by the two kept anchors.

MERGE | brazil_legends drops emergent trade / bountiful M-34 rows (lower-suggestion ×3) | into: combat-route KEEP | reason: all the same combat-specialist-farms-drops-and-trades narrative; fold into M-34 KEEP.

MERGE | brazil_legends:bottle_with_saci → occultism:ritual (M-11 / M-18 rows ×3) | into: CUT below | reason: saci-in-bottle is a self-contained novelty; spirit_trade is speculative; fold.

CUT   | brazil_legends:big_tongue magic rows (M-10/M-12) | motif M-10/M-12 | reason: M-12 (FD cutting) is a tone clash (REJECT ×3); M-10 for big_tongue duplicates capelobo_claw's slot (REJECT ×6 for this pairing).

CUT   | brazil_legends:bottle_with_saci → ars_nouveau:imbuement (M-10) | motif M-10 | reason: REJECT (2R/1A); the bottled trickster spirit fed blindly into imbuement is reductive and tonally off — the Saci is a captured entity, not a reagent.

CUT   | brazil_legends:bottle_with_saci → occultism:spirit_trade (M-18) | motif M-18 | reason: REJECT; saci-in-bottle is a novelty item, not a coherent spirit-trade commodity; no-method.

CUT   | brazil_legends:bottle_with_saci → create:emptying (M-12) | motif M-12 | reason: REJECT; treating a captured trickster spirit as a Create fluid is a tone disaster.

CUT   | brazil_legends:bloodmoon_sickle → create:haunting / M-19 | motif M-19 | reason: REJECT; the sickle is a themed weapon, not a raw material for haunting.

CUT   | brazil_legends:bloodmoon_sickle → M-22 lunar gating | motif M-22 | reason: mixed (2A/2R); the concept is interesting but requires custom worldgen/event config work; 1-suggestion at most; defer to a maintainer call rather than keep as a weave now.

CUT   | brazil_legends:amber_shard → create:crushing → numismatics mint (M-08) | motif M-08 | reason: 1-suggestion ACCEPT, low confidence; the amber is better used as a magic reagent (its kept role) — a two-hop amber→coin chain fragments the reagent-ownership and the shard is too exotic for basic coinage.

CUT   | brazil_legends:amber_shard → M-07 attunement catalyst | motif M-07 | reason: REJECT; galosphere already owns the M-07 catalyst slot (allurite/lumiere); adding a second general catalyst fragments reagent-ownership.

CUT   | brazil_legends:cachimbo (tobacco pipe) → farm_and_charm:drying | motif M-12 | reason: 1-suggestion ACCEPT; tobacco crop presence in pack is uncertain (check Farm&Charm crop list); too speculative a supply chain to keep.

CUT   | brazil_legends drops → create:crushing (M-03/M-04 rows) | motif M-03/M-04 | reason: REJECT; folkloric animal drops don't map coherently to Create processing; M-04 amber_pearl-as-block is a deco crush of an exotic item that's better a magic reagent.

CUT   | brazil_legends:alteration_spell_book → ars_nouveau:enchanting_apparatus (M-10) | motif M-10 | reason: REJECT; these are self-contained effect items, not part of Ars casting framework.

CUT   | brazil_legends:amber_shard → M-01 (arcane currency) | motif M-01 | reason: REJECT; source_gem is the reserved M-01 hub; amber is better as M-10 imbuement target.

CUT   | brazil_legends biome-locked drop regional-scarcity (M-30) | motif M-30 | reason: REJECT; the scarcity is built-in via biome-modifiers already; not a Phase-3 recipe weave.

---

## chefsdelight  — slate: 2 KEEP / 7 CUT / 3 MERGE / 0 DEFER   | anchors after: economy + survival (now 2)

KEEP  | chefsdelight Cook/Chef villager → service-for-hire (player-economy labor) | motif M-33 | delivery: config (KubeJS trade config — Cook/Chef villager trades re-mapped to accept player-supplied ingredients and return FD meals, or simply acknowledged as the labor node) | milestone: v0.9.0 | why "of course": the Cook/Chef villager performs cooking labor; players bring raw ingredients and the NPC processes them — a labor node that routes through the village chef without being an NPC coin faucet. 5-suggestion ACCEPT.

KEEP  | chefsdelight feast-tier meals (Roast Chicken / Honey Glazed Ham) → diet-system consumption sink | motif M-26 | delivery: config (Appleseed Diet group mapping — feast meals span Protein + Grains + Vegetables simultaneously) | milestone: v0.13.0 | why "of course": feast meals fill multiple diet groups at once; the consumption is against a mechanic that never zeroes; feasts are a repeating demand node. 3-suggestion ACCEPT.

MERGE | chefsdelight Cook/Chef → Trading Floor (M-29 cross-route) row | into: service-for-hire KEEP | reason: the trading-depot pipe-to-chef scenario is an elaboration of the M-33 labor node; subsumes into the cook service anchor.

MERGE | chefsdelight MineColonies cook-hut / colony supply rows (×3 M-28 variants) | into: CUT below | reason: MineColonies already handles FD integration via its own compatibility mod (minecolonies_compatibility Butcher hut bridge); no new recipe edge needed.

MERGE | chefsdelight seasonal cook-supply rows (M-16) | into: CUT below | reason: M-16 seasonal gating is thin for a NPC villager trade-list; fold.

CUT   | chefsdelight loot-seed M-08 (coin in cook structure chests) | motif M-08 | reason: REJECT (3R/2A); cook-house chests with coins in village structures is thematically okay but the mod adds no custom loot tables — delivery is a vanilla-chest datapack rider; better done under a broader village-loot weave, not as chefsdelight's primary anchor.

CUT   | chefsdelight Cook/Chef trade re-map to numismatics coin (M-08) | motif M-08 | reason: REJECT; this re-routes NPC trades to coin = NPC coin faucet (M-21 cut); the villager shouldn't mint coins via trade re-map.

CUT   | chefsdelight MineColonies colony route (M-28) | motif M-28 | reason: minecolonies_compatibility already bridges FD; adding a separate M-28 weave duplicates an existing connection with no new delivery.

CUT   | chefsdelight loot-seed M-34 (cook structure loot) | motif M-34 | reason: REJECT (×2); cook structures are village variants, not dungeon/boss loot; tone mismatch.

CUT   | chefsdelight → create:pressing/deploying (M-20/M-05) | motif M-20/M-05 | reason: REJECT; Skillet and Cooking Pot are FD items (not chefsdelight's own); wiring a village cook to Create machinery is anachronistic and forced.

CUT   | chefsdelight MineColonies research / colony upgrade (M-37) | motif M-37 | reason: 1-suggestion; MineColonies already handles food-worker research via its own system; adding a colony research unlock for feast meals is speculative and low-value.

CUT   | chefsdelight feast drying rack / aging (M-35) | motif M-35 | reason: 1-suggestion; aging a ham before cooking is a plausible depth step but this gives chefsdelight a 3rd anchor on a narrow content mod; not needed when 2 anchors are already clean.

CUT   | chefsdelight loot-seed M-30 (regional ingredient) | motif M-30 | reason: 1-suggestion; M-30 rides GTMOGS ore-gen; a cook village chest is not a scarcity gate for a regional mineral.

CUT   | chefsdelight loot-seed M-02 / M-29 (Create copper cog in cook chest) | motif M-02/M-29 | reason: REJECT; seeding Create parts in a village cook chest is thematically off; M-02 is mob-drop reagent, not chest loot.

---

## create_train_parts  — slate: 1 KEEP / 13 CUT / 3 MERGE / 0 DEFER   | anchors after: create (now 1; note: single-anchor; this is a thin Create-addon deco mod — its natural 2nd anchor would be economy/aeronautics but no coherent weave survives; maintainer may LEAVE this or accept 1-anchor)

KEEP  | create_train_parts brass/copper sliding windows + train steps → create:pressing (pressed sheet as recipe input) | motif M-20 | delivery: recipe (KubeJS recipe — brass_sliding_window / train_step_brass require create:pressed_brass / create:copper_sheet as crafting inputs) | milestone: v0.7.0 | why "of course": train furniture made of brass should cost real processed brass sheets — the same sheets that go into every Create machine go into the train cabin; one light upgrade-application step, not a deep chain. Represents the 5-suggestion M-20 ACCEPT cluster (plus the 6-suggestion M-04/M-20 merged cluster).

MERGE | brass/copper window/step rows (M-04, M-20, M-05, M-23 — all pressing-sheet-as-input variants ×7) | into: M-20 KEEP | reason: all are phrasing variants of "pressed sheets as ingredient for train fittings"; M-20 is the right motif (deploy-application upgrade, light single step); M-04 is wrong direction (crush-back); M-05 requires the mod's own machine, which is not applicable.

MERGE | andesite sliding window / andesite_alloy ingredient rows (×2) | into: M-20 KEEP | reason: andesite variants with andesite_alloy input are the same logic as brass/copper; fold into the single recipe weave.

MERGE | create_train_parts arm_extender (M-20) row | into: KEEP | reason: arm_extender as a functional fitting using deploying/item_application is the same M-20 motif; single delivery covers it.

CUT   | create_train_parts:crossing → create:mechanical_crafting (M-05/M-06/M-04/M-23 variants) | motif M-05/M-06/M-04/M-23 | reason: REJECT (×3–6 across variants); the crossing is a functional infrastructure block; gating it behind heavy Create fabrication (M-06 endgame, M-05 flagship) is depth out of proportion for an everyday track block. One brass-sheet weave (M-20) is sufficient for this mod.

CUT   | create_train_parts → aeronautics (M-24/M-31/M-23 ship-cabin fitting rows) | motif M-24/M-31/M-23 | reason: REJECT; train furniture (boarding steps, windows) are not propulsion/control or structural airframe parts; routing them as M-24 misrepresents both mods.

CUT   | create_train_parts loot-seed rows (M-08/M-02/M-34/survival) | motif M-08/M-02/M-34 | reason: REJECT; loot=yes is likely jar-artifact/minimal; train-fitting blocks in dungeon loot is nonsensical; tone mismatch.

CUT   | create_train_parts → MineColonies colony builder (M-28) | motif M-28 | reason: 4-suggestion ACCEPT but no "Colony Stationmaster" hut type exists in MineColonies by default; speculative without a real hut hook.

CUT   | create_train_parts arm_extender → Aeronautics contraption arm (M-24) | motif M-24 | reason: REJECT; while thematic, the arm_extender is a train mod contraption piece, not an Aeronautics drivetrain/control component; routing it through M-24 is a stretch.

CUT   | create_train_parts brass/copper crush-back (M-04 recycling) | motif M-04 | reason: REJECT; if the recipe is already gated on pressed sheets, adding a crush-back recycling route is cumulative and thin.

CUT   | create_train_parts → aeronautics passenger cargo logistics (M-31) | motif M-31 | reason: REJECT (1A/1R); windows and steps are not heavy/bulky goods requiring logistics at scale; M-31 threshold not met.

CUT   | create_train_parts no-motif thematic rows (colony road planning, etc.) | motif blank | reason: REJECT; no recipe method to route through.

---

## create_ultimate_factory  — slate: 1 KEEP / 7 CUT / 0 MERGE / 0 DEFER   | anchors after: create (now 1; note: single-anchor; the renewable-diamond recipe is a scarcity *conflict*, not a weave; maintainer should evaluate disabling/removing it per the REJECT consensus)

KEEP  | create_ultimate_factory strata-stone recipes (nuggets+gravel+lava → calcite/deepslate/tuff) → byproduct→input loop | motif M-32 | delivery: recipe (already defined by the mod via create:compacting — verify it's active; no KubeJS authoring needed if the mod provides these recipes natively; note in implementation) | milestone: v0.7.0 | why "of course": waste gravel and metal nuggets from ore crushing compact back into useful building stone — a true byproduct loop that gives a second life to crusher waste without touching scarcity. 2-suggestion ACCEPT.

CUT   | create_ultimate_factory renewable diamond (coal-block+lava→diamond via create:compacting) → any motif | motif M-08/M-30 | reason: unanimous REJECT (2R+2R+1R+1R across all phrasings); the renewable-diamond recipe actively undermines the pack's regional-scarcity premise (M-30 is the foundation); this is a *design conflict*, not a weave — the maintainer should evaluate disabling this recipe via KubeJS.

CUT   | create_ultimate_factory strata-stone → MineColonies colony build request (M-28) | motif M-28 | reason: 1-suggestion ACCEPT; the M-32 KEEP already captures the strata-stone loop; adding a colony-supply layer on top gives this thin mod a second anchor it doesn't need yet.

CUT   | create_ultimate_factory renewable blaze-rod outputs → ars_nouveau:imbuement (M-10) | motif M-10 | reason: REJECT; the mod has no items of its own — blaze rods are vanilla; magic imbuement of vanilla materials belongs on the magic mod's weave, not here.

CUT   | create_ultimate_factory blaze-rod renewal → M-26 consumption sink | motif M-26 | reason: 1-suggestion ACCEPT; vanilla blaze rods are already a consumption sink without this mod; the M-26 claim belongs to the blaze rod's own utility, not to create_ultimate_factory.

CUT   | create_ultimate_factory strata-stone → create:milling / M-12 | motif M-12 | reason: REJECT; strata stones are deco, not a useful intermediate for another system; M-12 requires a useful-intermediate output.

CUT   | create_ultimate_factory no-motif rows (diamond chain internal Create depth) | motif blank | reason: REJECT; purely internal Create-pillar loops without a cross-pillar edge don't add a second anchor.

CUT   | create_ultimate_factory renewable-diamond / blaze-rod → M-32 combined byproduct | motif M-32 | reason: REJECT; the renewable-diamond route is directionally wrong for the pack; the M-32 KEEP already covers the safe strata-stone loop; these rows conflate scarcity-harmful content with byproduct logic.

---

## createblockchain  — slate: 2 KEEP / 10 CUT / 4 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | createblockchain:currency_miner FE intake → Create-Addition FE sourced from scarce regional metal | motif M-08 | delivery: config (ensure the currency_miner's FE supply traces through a Create-Addition generator running on a scarce regionally-processed metal — e.g. zinc/copper from a GTMOGS-region vein — so minted coins trace back to regional scarcity; no new recipe needed, document the config chain) | milestone: v0.9.0 | why "of course": coins don't come from nothing — the currency miner runs on FE from a real Create electric plant burning processed scarce metal; controlling the FE plant means controlling the money supply. Represents the 4-suggestion opus-corroborated ACCEPT cluster (M-08 FE-tracing rows).

KEEP  | createblockchain:mining_core (geode worldgen consumable) → M-30 regional-scarcity gate on coin supply | motif M-30 | delivery: config (GTMOGS / worldgen config — geode spawn rate is the regional scarcity valve; coins are as common as geodes; configure geode placement as biome-or-region-specific) | milestone: v0.9.0 | why "of course": Mining Cores only spawn in geodes spread every 30+ chunks; controlling a geode vein controls the mint; regional coin scarcity emerges from spatial resource scarcity. 7-suggestion ACCEPT.

MERGE | createblockchain FE → coin minting rows (M-08 / M-29 FE-chain variants ×5) | into: FE-tracing M-08 KEEP | reason: all describe the same FE-sourced-from-scarce-metal → coin chain; prefer the opus-corroborated representative.

MERGE | createblockchain:mining_core geode M-30 rows (×3 lower-suggestion) | into: M-30 KEEP | reason: all state the geode spawn rate is the scarcity valve; dedupe.

MERGE | createblockchain:piggy_bank loot M-08 rows (×3) | into: CUT below | reason: fold; piggy-bank coin seeding in chests is an NPC-faucet-adjacent action (coins from outside the player economy); cut.

MERGE | createblockchain FE → coin minting M-29 (cross-route dependency) rows (×2) | into: M-08 KEEP | reason: the cross-route dependency (you need a Create FE plant to mint coins) is already captured in the M-08 KEEP; the M-29 elaboration is the same connection.

CUT   | createblockchain:piggy_bank loot-seed (M-08/M-34) | motif M-08/M-34 | reason: REJECT (5R/2A); piggy-bank chest loot delivers coins found by explorers = an NPC coin faucet (coins not minted by a player); contradicts the player-run economy ruling.

CUT   | createblockchain:mining_core → create:crushing to extract core (M-03) | motif M-03 | reason: mixed (5A/5R); the 10-suggestion row is near-even split; the core's primary role is as the scarcity consumable (M-30 KEEP) — adding a Create-processing step to extract it introduces depth on a rate-limiter that's already the scarcity valve; the M-30 KEEP captures the intent without a mandatory crush step.

CUT   | createblockchain:mining_core → occultism:spirit_fire / M-11 | motif M-11 | reason: REJECT; the mining_core is already the scarcity throttle; repurposing it as a magic reagent risks losing the coin gate.

CUT   | createblockchain:mining_core → occultism:miner spirit-logistics (M-18) | motif M-18 | reason: REJECT (opus); spirit-mining the rate-limiter undoes the geode gate; magic should not be a bypass to the coin scarcity valve.

CUT   | createblockchain:cryotheum_coolant → create:mixing/TFMG (M-05/M-12/M-32/M-29) | motif M-05/M-12/M-32/M-29 | reason: REJECT; cryotheum is a proprietary operational consumable for the miner; routing it through Create/TFMG chemistry has no thematic grounding and adds depth to a secondary operational input.

CUT   | createblockchain:currency_miner → create:sequenced_assembly (M-06) | motif M-06 | reason: 1-suggestion; the miner is a single-machine purchase, not a multi-stage endgame keystone; M-06 depth is disproportionate.

CUT   | createblockchain:mining_core → M-07 attunement catalyst | motif M-07 | reason: 1-suggestion; galosphere already owns the M-07 slot; the mining_core is the M-30 scarcity valve, not a magic catalyst.

CUT   | createblockchain:mining_core → M-16/M-22 seasonal/lunar rows | motif M-16/M-22 | reason: REJECT; biome-modifier worldgen has no time-based config hook; feasibility too low.

CUT   | createblockchain FE → createnuclear / M-32 nuclear-powered mint | motif M-32 | reason: 1-suggestion; interesting but too speculative for a Phase-3 weave; no nuclear reactor mod confirmed in pack.

---

## createlowheated  — slate: 2 KEEP / 12 CUT / 2 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

KEEP  | createlowheated:basic_burner solid-fuel consumption → consumption sink (fuel demand) | motif M-26 | delivery: config (the mod's native behavior — every heated Create basin now burns solid fuel; verify the basic_burner is required rather than optional; coal/charcoal specialists become a logistics bottleneck) | milestone: v0.7.0 | why "of course": Create heat now costs real fuel every tick — a coal mine or charcoal kiln becomes a load-bearing supplier for every automated Create operation; the loop's closing arrow. Represents the 6-suggestion ACCEPT (M-26 solid-fuel cluster).

KEEP  | createlowheated lowheated heat-tier → woven Create basin recipes require managed heat | motif M-05 | delivery: recipe (KubeJS — route weave-relevant Create basin recipes, e.g. magic-reagent refining steps, to require the lowheated tier rather than passive heat, making the burner a gate on the magic-production chain) | milestone: v0.7.0 | why "of course": the lowheated tier as a condition on woven processing recipes gives the burner structural importance — opus-corroborated 1-suggestion ACCEPT captures the intent; the 2-suggestion M-05 ACCEPT (iron casing + shaft recipe for the burner itself) is a valid companion delivery.

MERGE | createlowheated:basic_burner solid-fuel M-26 rows (×5 lower-suggestion variants) | into: M-26 KEEP | reason: all state the same fuel-consumption mechanic creating a coal/charcoal demand sink.

MERGE | createlowheated TFMG:coke as premium burner fuel (M-32 rows ×2) | into: CUT below | reason: the coke-as-fuel upgrade is a plausible depth step but adding M-32 gives this thin addon a third anchor; fold into cut and leave as a maintainer option.

CUT   | createlowheated M-16 seasonal fuel gating | motif M-16 | reason: REJECT (4R/1A); fuel is generic furnace fuel; no seasonal scarcity mechanic to leverage; the heat tier is fuel-driven, not season-gated.

CUT   | createlowheated M-29 magic reagent unlocks lowheated tier | motif M-29 | reason: REJECT (×2); Ars/Occultism use their own heat sources; the lowheated tier is a Create-internal balance tweak, not a cross-route dependency gate.

CUT   | createlowheated M-13 aeronautics propulsion fuel | motif M-13 | reason: REJECT; the basic_burner consumes solid furnace fuel only; M-13 is for liquid fuels powering Aeronautics engines; category error.

CUT   | createlowheated TFMG diesel/gasoline liquid mode | motif M-13 | reason: REJECT; no liquid fuel intake mode exists in the mod; would require mod capability that doesn't exist.

CUT   | createlowheated M-28 MineColonies charcoal colony route | motif M-28 | reason: 1-suggestion ACCEPT; while a charcoal-producing colony is a load-bearing supplier concept, this is implicit in the survival loop — not a distinct recipe weave; the M-26 KEEP covers the demand side.

CUT   | createlowheated M-32 TFMG:coke as premium burner fuel | motif M-32 | reason: 1-suggestion (×2 rows); valid idea but gives a thin addon a 3rd anchor; maintainer can add later as a config note; not a Phase-3 weave priority.

CUT   | createlowheated M-12 wood/charcoal chain pull | motif M-12 | reason: REJECT; "make charcoal to burn" is vanilla tree-farming into furnaces; no useful intermediate for another system.

CUT   | createlowheated any magic method | motif blank | reason: REJECT; the burner is a heat source, not a material; no magic method routes through a heat emitter.

CUT   | createlowheated M-04 basic_burner crush-back | motif M-04 | reason: REJECT; the basic_burner is a single-block installed device, not a deco block; crushing it back is a trivial drop-recovery, not a weave.

CUT   | createlowheated M-16/M-22 seasonal/lunar heat-tier forcing | motif M-16/M-22 | reason: REJECT (opus); forcing a celestial input onto a heat tier would be contrived; the burner's pressure is emergent, not event-gated.

CUT   | createlowheated fuel demand → smokeleaf generator biomass (M-12) | motif M-12 | reason: REJECT; smokeleaf generator produces FE, not solid fuel; category error.

---

## grimoireofgaia  — slate: 4 KEEP / 9 CUT / 4 MERGE / 0 DEFER   | anchors after: magic + economy + create (now 3; note: 3-anchor mod — the bestiary is large enough to sustain it)

KEEP  | grimoireofgaia mob-drop fragments → occultism:spirit_fire | motif M-11 | delivery: recipe (KubeJS `occultism:spirit_fire` batch — dozens of per-mob fragments yield djinni/marid essences) | milestone: v0.11.0 | why "of course": mythic creature drops — gorgon scales, harpy feathers, mermaid pearls — transmuted in spirit fire to yield occult essences; the bestiary directly fuels the occult web. 18-suggestion unanimous ACCEPT.

KEEP  | grimoireofgaia drops → ars_nouveau:imbuement | motif M-10 | delivery: recipe (KubeJS `ars_nouveau:imbuement` — select per-mob fragments infused into arcane reagents; biome-unique drops become Ars material inputs) | milestone: v0.11.0 | why "of course": mythic creature drops (dryad blossoms, gorgon scales, gem-nuggets) are natural arcane infusion candidates; the bestiary feeds the Ars web alongside Occultism. 10-suggestion ACCEPT.

KEEP  | grimoireofgaia mini-boss drops (bust_valkyrie / bust_gorgon / bust_sphinx) → boss-key gate on high-tier Create/magic recipe | motif M-15 | delivery: recipe (KubeJS — one boss bust as required input for a high-tier Create machine or Occultism ritual; combat earns tech progression) | milestone: v0.7.0 | why "of course": mini-boss busts are rare, lore-heavy trophies; using a Gorgon bust as a required ingredient for a complex Create recipe is thematically sensible and follows M-15's combat-gate mandate. 3-suggestion ACCEPT.

KEEP  | grimoireofgaia mini-boss drops + rare reagents → combat-specialist trade | motif M-34 | delivery: config (Bountiful bounty pool — add boss busts + rare fragments as bounty objectives; biome-locked mob diversity makes these combat-supply goods) | milestone: v0.9.0 | why "of course": a Gaia hunter farms rare busts and artifact rings; non-combat players trade resources for them; the combatant corners the supply. 6-suggestion ACCEPT.

MERGE | grimoireofgaia nuggets/fragments → occultism:spirit_fire / M-02 rows (×4 lower-suggestion variants including M-02 ACCEPT clusters) | into: M-11 KEEP | reason: all describe the same mob-drop-to-spirit-fire delivery; M-11 is the correct motif for organic transmutation; M-02 rows fold in.

MERGE | grimoireofgaia drops → ars_nouveau:imbuement M-02 ACCEPT rows (×3) | into: M-10 KEEP | reason: same imbuement delivery as M-10 KEEP; dedupe.

MERGE | grimoireofgaia:bust_* → M-15 boss-key rows (×3 lower-suggestion) | into: M-15 KEEP | reason: same boss-key gate logic; prefer the 3-suggestion representative.

MERGE | grimoireofgaia combat-specialist trade / emergent trade rows (×5 lower-suggestion M-34) | into: M-34 KEEP | reason: all state the same combat-specialist-farms-drops-and-trades narrative.

CUT   | grimoireofgaia:pearl_block / deco blocks → create:crushing (M-04) | motif M-04 | reason: REJECT (×3); crushing folklore doll-creatures and pearl blocks is a tone clash; narrative artifacts should not be destroyed for gravel; M-04 is for metal/stone deco.

CUT   | grimoireofgaia nugget drops → create:crushing → numismatics mint (M-08) | motif M-08 | reason: REJECT; mob-drop nuggets are not scarce regional ores; routing them through Create crushing to coin conflates M-08's "scarce ore → coin" with "mob grind → coin" (an NPC faucet variant).

CUT   | grimoireofgaia:ring_* artifact rings → create:sequenced_assembly (M-06) | motif M-06 | reason: REJECT; rings are mob drops, not crafted items — gating a drop behind sequenced assembly would strip its reward identity.

CUT   | grimoireofgaia:ring_* → ars_nouveau:imbuement / occultism:enchanting_apparatus to upgrade ring (M-10) | motif M-10 | reason: REJECT; the rings are already finished complete endgame items; adding a magic-upgrade implies they're deficient, which undermines the reward.

CUT   | grimoireofgaia:ring_* → create_new_age:energising (M-17) | motif M-17 | reason: mixed (1A/1R); FE-charging a Gaia ring is thematically odd; the FE tie doesn't add a pillar anchor in a coherent way here.

CUT   | grimoireofgaia:bust_* → MineColonies colony delivery (M-28) | motif M-28 | reason: 1-suggestion; the colony-hall-requests-a-boss-bust idea is interesting but speculative (no base MineColonies building tier requires this); fold into the M-34 combat-supply trade as a future option.

CUT   | grimoireofgaia:book_of_memory → M-37 research gate / M-15 spell unlock | motif M-37/M-15 | reason: 1-suggestion each; the Book of Memory is a lore item, not a structured MineColonies research input; M-15 on a lore item is thematically interesting but extremely speculative at 1 suggestion; leave for maintainer to evaluate separately.

CUT   | grimoireofgaia biome-locked drops → M-30 regional-scarcity reagents (config/worldgen) | motif M-30 | reason: 1-suggestion; biome-locked spawns are already built-in; the M-30 scarcity is emergent, not a Phase-3 recipe weave requiring authoring.

CUT   | grimoireofgaia:bone_shield → create:crushing (M-02/M-03) | motif M-02/M-03 | reason: 1-suggestion; tone clash — a mythic shield crushing to bone fragments feels wrong; better owned by the magic weave (M-11/M-10) already kept.

---

## gtmogs  — LEAVE (worldgen-config framework with no item/method surface; its 3 marker blocks have no crafting role; M-30 scarcity it enables lives in the downstream ORES, not in gtmogs itself — all recipe-facing weaves are authored on the ores, not the framework)

---

## modulargolems  — slate: 3 KEEP / 13 CUT / 4 MERGE / 0 DEFER   | anchors after: survival + magic + economy (now 3)

KEEP  | boss-drop metals (Cataclysm cursium / Ice&Fire dragonsteel) → modulargolems:golem_assemble | motif M-15 | delivery: recipe (KubeJS — boss-tier golem body requires boss-drop metal as a key crafting input; one or two boss metals as gate) | milestone: v0.13.0 | why "of course": you kill the Cataclysm boss, you get cursium, you build a cursium-body combat golem — the construct is the boss-progression payoff; combat gating that reads as natural reward. 5-suggestion unanimous ACCEPT, multiple corroborating rows.

KEEP  | golem-core upgrade slot → ars_nouveau:imbuement (source_gem / arcane core) | motif M-10 | delivery: recipe (KubeJS `ars_nouveau:imbuement` — the golem's upgrade slot accepts an arcane source-gem infusion to unlock arcane-golem capabilities) | milestone: v0.11.0 | why "of course": a golem animated by pure arcane source is a step beyond a mundane construct; the magic specialist provides the animation core, the engineer provides the metal — neither can build a top-tier golem alone. 14-suggestion ACCEPT (dominant phrasing).

KEEP  | modulargolems assembled golem → service-for-hire (golem specialist builds for others) | motif M-33 | delivery: config (emergent — a golemancer player builds and deploys golems for other players; the golem is a tradeable service, not an autonomous product) | milestone: v0.9.0 | why "of course": a golem specialist is the obvious player-economy labor node — you pay the engineer for a golem, not for its drops. 4-suggestion ACCEPT.

MERGE | boss-drop metals M-02 rows (Cataclysm cursium / Ice&Fire dragonsteel as mob-drop reagent sink ×8) | into: M-15 KEEP | reason: M-02 and M-15 both describe boss-drop-metal-into-golem; M-15 is the correct motif (boss-key gate, not just mob-drop sink); prefer M-15.

MERGE | ars_nouveau:source_gem / occultism:otherstone golem-core rows (×6 lower-suggestion M-10 variants) | into: M-10 KEEP | reason: all phrasing variants of the arcane-core-into-upgrade-slot delivery; dedupe to the 14-suggestion representative.

MERGE | golem service-for-hire / emergent trade M-33/M-34 rows (×3) | into: M-33 KEEP | reason: all describe the same golemancer-as-labor-node economy; M-33 (service) is the primary framing.

MERGE | occultengineering:spirit_solution → golem_add_slot (M-11/M-29 rows ×3) | into: CUT below | reason: spirit_solution as a slot upgrade competes with M-10 imbuement for the same slot; M-10 is kept; spirit_solution is a valid alternative delivery but creates slot-conflict; cut as duplicate.

CUT   | modulargolems golem assembly → create:sequenced_assembly (M-06 rows) | motif M-06 | reason: REJECT (×3 + dossier confirms existing inbound weave); create:sequenced_assembly is already the existing anchor — re-proposing it adds no new cross-pillar edge.

CUT   | modulargolems golem slot upgrade → occultism:spirit_fire (M-11) | motif M-11 | reason: REJECT (×2); spirit-fire is for organic-to-essence transmutation; applying it to a metal construct body is a tone mismatch; M-10 imbuement is kept instead.

CUT   | modulargolems golem parts → aeronautics (M-24/M-31) | motif M-24/M-31 | reason: REJECT (×2); golem limbs are not propulsion/control or structural airframe parts; method overlap is wrong.

CUT   | modulargolems golem assembly → MineColonies colony hut request (M-28) | motif M-28 | reason: REJECT; no MineColonies "Golem Smith" hut exists in base colony mod; speculative without a real hut type.

CUT   | modulargolems golem body metal recovery → create:crushing (M-04) | motif M-04 | reason: REJECT; golems are entities not deco blocks; the deco-recycle motif doesn't apply to living constructs.

CUT   | modulargolems golem via occultism:spirit_trade for metal acquisition (M-18) | motif M-18 | reason: REJECT; M-10 already provides the magic anchor; duplicating via M-18 fragments the magic weave.

CUT   | modulargolems golem assembly requiring M-29 cross-route (magic reagent in Create chain) | motif M-29 | reason: 2-suggestion ACCEPT, but M-29 here is subsumed by M-10 KEEP — the golem already requires a magic specialist (imbuement core) without needing a separate cross-route dependency row.

CUT   | modulargolems MineColonies research gate (M-37 University unlock) | motif M-37 | reason: 1-suggestion; the research system could gate golem templates, but this is speculative and would overlap with the M-15 boss-gate; not needed when 3 anchors are already clean.

CUT   | modulargolems irons_spellbooks:mithril_ingot golem body (M-10) | motif M-10 | reason: 1-suggestion; Iron's mithril as a golem-body metal is interesting but adds a 4th material variant to an already 3-anchor mod; maintainer option, not a Phase-3 priority.

CUT   | modulargolems TFMG steel golem body (M-05, no-motif) | motif M-05/blank | reason: REJECT; TFMG steel feeding golem bodies deepens Create but creates no cross-pillar edge — both are Create-anchored; not a weave.

CUT   | modulargolems Create-processed sheets → golem_assemble (M-20/M-05 duplicate) | motif M-20/M-05 | reason: REJECT; dossier already confirms create:mechanical_crafting as the existing inbound anchor; re-proposing it duplicates without adding.

CUT   | modulargolems golem combat labor → M-33 autonomous fighting | motif M-33 | reason: REJECT; M-33 requires a *player* performing work on another's materials — a golem autonomously fighting doesn't qualify; the kept M-33 is about building and deploying golems, not their autonomous operation.

---

## tidal-towns-1.3.4  — slate: 2 KEEP / 7 CUT / 2 MERGE / 0 DEFER   | anchors after: economy + aeronautics (now 2)

KEEP  | tidal-towns ocean village chests → loot-seed (numismatics coin) | motif M-08 | delivery: loot-seed (datapack rider on vanilla chest loot types the town uses — add a small Numismatics coin pool; note: dossier loot=no means no *mod-custom* tables; delivery targets vanilla chest types in the village layout, which is a valid Phase-3 datapack edit) | milestone: v0.9.0 | why "of course": the floating ocean village feels like a trading post — finding one rewards a handful of coins and threads sea exploration into the player economy. 11-suggestion ACCEPT, corroborated by 2-suggestion opus rows.

KEEP  | tidal-towns as aeronautics destination / logistics stop | motif M-31 | delivery: config (no item recipe; document in the aeronautics design that ocean villages are canonical cargo-stop destinations for sea/air routes — makes distant ocean travel purposeful; the mod's deep-ocean placement does the work) | milestone: v0.9.0 | why "of course": the ocean village is a natural Aeronautics cargo stop — your airship drops supplies and picks up trade goods on the sea route; the deep-ocean location means logistics is the only reliable way to supply it at scale. 3-suggestion opus-corroborated ACCEPT.

MERGE | tidal-towns loot-seed M-08 rows (×3 lower-suggestion variants) | into: coin loot-seed KEEP | reason: all describe the same chest-loot coin delivery.

MERGE | tidal-towns aeronautics route-incentive M-29/M-31 rows (×2) | into: M-31 KEEP | reason: the route-incentive and cargo-stop framings are the same logistics anchor; dedupe.

CUT   | tidal-towns loot-seed M-02 (magic reagent in blacksmith chest) | motif M-02 | reason: REJECT (3R/3A split); the structure uses pure vanilla blocks/loot — injecting foreign-mod reagent items into a vanilla-faithful structure is a thematic overreach for a human ocean village; magic reagents belong on mob/boss loot tables.

CUT   | tidal-towns loot-seed M-15 (boss-key blueprint in blacksmith chest) | motif M-15 | reason: REJECT; tidal-towns has no boss of its own; seeding boss-keys in its loot is too indirect; M-15 belongs on the boss mod's side.

CUT   | tidal-towns loot-seed M-30 (region-locked coin / trade goods) | motif M-30 | reason: REJECT; M-30 rides GTMOGS ore-gen, not structure placement; a village chest is not a scarcity gate for a regional mineral.

CUT   | tidal-towns loot-seed M-33 (service-for-hire economy node) | motif M-33 | reason: REJECT; M-33 is service-for-hire (labor between players), not a loot-table placement; the M-08 KEEP covers the exploration reward.

CUT   | tidal-towns aeronautics M-23 (structural alloy in airframe) | motif M-23 | reason: REJECT; M-23 is structural alloys in airframe recipes; a wearable/navigational destination is not an airframe component.

CUT   | tidal-towns loot-seed M-02 (ocean magic reagent) — opus rows | motif M-02 | reason: REJECT (opus); same reasoning as M-02 cut above; Stoneholm is a human village, magic reagents are out of place.

CUT   | tidal-towns no-motif aeronautics "a place to fly to" rows | motif blank | reason: REJECT; "a place an airship can fly to" composes no ledger motif (no material/method routing); the M-31 KEEP captures the legitimate aeronautics anchor.

CUT   | tidal-towns M-34 (structure loot → combat-supply) | motif M-34 | reason: REJECT; M-34 is the combat-route supply motif (survivor farms boss loot); seeding loot into non-combat structures is not M-34; the M-08 KEEP covers exploration loot.

---

## travelersbackpack  — slate: 2 KEEP / 16 CUT / 4 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

KEEP  | travelersbackpack upgrade modules (tank_upgrade / crafting_upgrade / smelting_upgrade) → create:item_application / create:pressing | motif M-20 | delivery: recipe (KubeJS — upgrade modules require Create-pressed iron/brass sheets as inputs, applied via item_application or included in the upgrade recipe) | milestone: v0.7.0 | why "of course": upgrade modules that slot into a backpack are exactly the light single-step deploy-application shape of M-20; a fluid-tank upgrade for a backpack that stores hundreds of mB logically calls for the same brass fittings Create uses everywhere. 13-suggestion ACCEPT, strong consensus.

KEEP  | travelersbackpack high-tier variants (dragon / netherite / enderman) → boss-drop crafting gate | motif M-15 | delivery: recipe (KubeJS — the dragon-themed backpack requires a dragon-boss drop as a crafting ingredient; netherite variant may use netherite upgrade naturally; theme mob drops gate the themed cosmetic pack) | milestone: v0.13.0 | why "of course": the dragon backpack made from an actual dragon component is earned, not bought — combat progression gates the expedition-tier storage; the themed cosmetic earns its look through the boss fight. 3-suggestion ACCEPT.

MERGE | travelersbackpack upgrade module rows (M-06 sequenced-assembly variants ×5) | into: M-20 KEEP | reason: M-20 (light single-step) is the right tier for upgrade modules; M-06 (endgame sequenced keystone) is disproportionate for an accessory; fold all sequenced-assembly upgrade rows into the M-20 KEEP.

MERGE | travelersbackpack high-tier variant M-06 rows (netherite/dragon via sequenced_assembly ×3) | into: M-15 KEEP | reason: the depth for high-tier packs comes from the boss-drop gate (M-15), not from a separate sequenced-assembly chain; the M-06 rows on top-tier packs are redundant with M-15.

MERGE | travelersbackpack mob-themed variant boss-drop rows (M-15 / M-34 overlap ×3) | into: M-15 KEEP | reason: all describe boss-drop gating on themed backpack variants; dedupe.

MERGE | travelersbackpack M-20 upgrade apply rows (lower-suggestion ×5 including tank_upgrade pressing / fluid-pipe component) | into: M-20 KEEP | reason: same M-20 delivery at lower suggestion counts; fold.

CUT   | travelersbackpack fluid tank → aeronautics logistics (M-31/M-23/M-13/M-26 thematic rows) | motif M-31/M-23/M-13/M-26 | reason: unanimous REJECT (×7+3+2+1); "carry fluids, airships need fluids" is thematic adjacency with no recipe routing; the backpack is a worn passive item, not a machine input; M-31/M-23/M-13 require material-routing methods; no coherent delivery.

CUT   | travelersbackpack basic leather pack → create:sequenced_assembly (M-06) | motif M-06 | reason: REJECT (opus); guardrail — never gate a basic/everyday component behind a deep chain; depth must scale with power.

CUT   | travelersbackpack mob-themed variant → occultism:spirit_fire / M-02 | motif M-02 | reason: REJECT; themed backpacks already consume their mob's drops in crafting; routing them through an additional magic/economy layer adds no second pillar.

CUT   | travelersbackpack mob-themed variant → ars_nouveau:imbuement (M-10) | motif M-10 | reason: 1-suggestion ACCEPT; the M-15 boss-drop gate already gives themed packs their depth; adding an imbuement upgrade on top creates a two-step gate on a storage item (depth out of proportion).

CUT   | travelersbackpack M-05 rows (upgrade modules / high-tier via mechanical_crafting) | motif M-05 | reason: REJECT (×3); M-05 is for a mod's flagship item built in its own machine gated on Create parts; the upgrade modules and backpacks use the `backpack_upgrade` recipe type (their own machine), not a second-mod machine; M-20 covers the Create-input side.

CUT   | travelersbackpack M-12 (create:filling/emptying tank / leather pressing) | motif M-12 | reason: REJECT; filling/emptying a tank is a use of Create fluid mechanics, not a weave that gives TravelersBackpack a new pillar anchor; leather pressing for basic packs gates a basic everyday item behind Create.

CUT   | travelersbackpack sleeping bag → any motif | motif various | reason: REJECT; sleeping bags are pure QoL items — forcing a recipe weave adds complexity to a basic function with no thematic payoff; sleeping bag is not a structural aeronautics component.

CUT   | travelersbackpack loot-seed (M-08/M-34 — backpacks in dungeon loot) | motif M-08/M-34 | reason: 1-suggestion; the thematic fit is plausible but the M-15 KEEP already addresses themed packs in boss/dungeon contexts; seeding backpacks via loot-seed is a thin anchor on top of existing coverage.

CUT   | travelersbackpack M-28 (MineColonies colony backpack deliveries) | motif M-28 | reason: REJECT; MineColonies doesn't request backpacks by default; speculative KubeJS override with no real colony hut hook.

CUT   | travelersbackpack M-29 cross-route (themed variant re-costing) | motif M-29 | reason: REJECT; re-costing themed cosmetic variants to include cross-route dependencies fragments the delivery without adding a clear pillar anchor.

CUT   | travelersbackpack M-17 (FE charging / alchemist cauldron fill) | motif M-17 | reason: REJECT; M-17 is specifically FE-charging; the alchemist_cauldron_fill is a fluid-fill mechanic, not an electric-charge bridge; category error.

CUT   | travelersbackpack blank_upgrade → create:sequenced_assembly (M-06) | motif M-06 | reason: REJECT; blank_upgrade is a basic everyday component — depth scales with power; sequenced assembly on a base upgrade module violates the guardrail.

---

## underground_village  — slate: 2 KEEP / 8 CUT / 3 MERGE / 0 DEFER   | anchors after: economy + create (now 2)

KEEP  | underground_village Stoneholm chest loot → loot-seed (numismatics coin) | motif M-08 | delivery: loot-seed (datapack rider on Stoneholm chest loot tables — add a modest coin pool; seed a handful of Numismatics cog/spur into the deepest chests) | milestone: v0.9.0 | why "of course": cracking open a chest in a buried village reveals a stash of coin and odd materials — the settlement had commerce once; exploring it bootstraps a new arrival into the economy. 4-suggestion ACCEPT (two separate M-08 ACCEPT rows at 4 suggestions each).

KEEP  | underground_village Stoneholm structure blocks (dismantled) → create:crushing (M-04 deco recycle) | motif M-04 | delivery: recipe (KubeJS — Stoneholm's stone bricks / cobblestone / deepslate brick crush back to crushed stone/gravel + XP nugget via create:crushing; a player stripping a Stoneholm ruin gets Create-useful salvage) | milestone: v0.7.0 | why "of course": the abandoned wing of Stoneholm crunches through the millstone like any other old stonework — productive salvage that makes the underground village not just a loot box but a material source. 1-suggestion ACCEPT, 2 corroborating rows.

MERGE | underground_village M-08 Stoneholm coin loot rows (×3 lower-suggestion / variants) | into: M-08 KEEP | reason: all describe the same coin-in-chest delivery; dedupe.

MERGE | underground_village M-02 magic reagent loot rows (×2 ACCEPT / 2 REJECT) | into: CUT below | reason: Stoneholm is a human underground settlement, not a monster lair; magic reagents in a human village chest is a thematic overreach (the opus REJECT is correct); fold.

MERGE | underground_village M-04 deco-recycle rows (×2 corroborating) | into: M-04 KEEP | reason: same delivery; dedupe.

CUT   | underground_village M-02 magic reagent loot-seed | motif M-02 | reason: REJECT (opus); Stoneholm is a subterranean human settlement, not a monster lair; seeding magic reagents here is thematically wrong; M-02 belongs on actual mob-drop sources.

CUT   | underground_village M-30 regional-scarcity gate (underground exclusive trades) | motif M-30 | reason: mixed (3A/2R); M-30 rides GTMOGS ore-gen, not villager trade tables; a trade-table edit is not a scarcity gate in the M-30 sense; the M-08 KEEP captures the value reward.

CUT   | underground_village M-33 Stoneholm villager service-for-hire | motif M-33 | reason: 2-suggestion ACCEPT, but the delivery (villager trade config) is config-territory where the result is a vanilla-NPC trade, not a player-to-player service; borderline, but the economy anchor is already covered by M-08; cut to keep slate clean.

CUT   | underground_village M-37 research-tome loot-seed | motif M-37 | reason: 1-suggestion; seeding a MineColonies research tome in a Stoneholm chest is interesting but speculative; the M-08 KEEP covers the "discovery rewards exploration" intent; this is a maintainer option, not a Phase-3 priority.

CUT   | underground_village M-15 (Create/tech component in Stoneholm cache) | motif M-15 | reason: 1-suggestion ACCEPT; M-15 requires a boss-fight gate, not a structure-exploration gate; Stoneholm has no boss; the loot-seed value is already captured by M-08.

CUT   | underground_village M-29 cross-route (Stoneholm smith trades a rare Create intermediate) | motif M-29 | reason: 1-suggestion; interesting but a trade-table edit producing a Create intermediate is too speculative and delivery-unclear; fold into future maintainer option.

CUT   | underground_village M-34 structure loot → combat-supply | motif M-34 | reason: REJECT; M-34 is combat-route supply (survivor farms boss loot); the underground village is not a combat-boss context; a living settlement's chests are exploration, not combat.

CUT   | underground_village no-motif rows (knightlib thematic adjacency, MineColonies expedition thematic, aeronautics thematic) | motif blank | reason: REJECT; no recipe-type surface to route through; location/narrative links without a method.

CUT   | underground_village loot-table edits as "mod weave" (non-motif proposal) | motif blank | reason: REJECT (×2); loot-table edits are datapack work, not a mod weave; the M-08 KEEP already frames the delivery correctly as a loot-seed.

== BATCH COMPLETE ==
