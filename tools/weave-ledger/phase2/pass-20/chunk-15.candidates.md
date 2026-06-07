# Phase 2 candidates — chunk-15

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_chair / *_table / *_bench (finished wooden furniture) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood planks enter a Create saw; finished furniture pieces come out in discrete, automatable steps — the decoration tier earns its place in the Create web
- from: handcrafted:*_cupboard / *_shelf / finished furniture sets | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: furniture is ambient build material; players wouldn't sell chairs as trade goods — the luxury framing (M-09) needs effort-gated or processed goods, and vanilla-recipe furniture is too cheap/abundant to generate a real economy signal. Keep economy hook for higher-tier processed goods only.
REWORK: decoration anchor is sound; Create cutting link is the minimum viable 2nd anchor. No existing connections to rework (currently 1-anchor). OK for the deco tier — one-weave pass satisfies.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs:*_brick_* / *_stone_* / *_blackstone_* stair/railing variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-built stone railings crush back to raw stone / gravel + an XP nugget — standard deco-recycle; lossy so no arbitrage
- from: mcwstairs:*_balcony / *_platform (wooden) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: wood stair/railing variants are barely distinguishable from vanilla stairs; adding a cutting recipe is noise, not signal. M-04 stone-crush is the appropriate single tie for a deco-only mod — adding a second recipe edge on the same Create pillar doesn't lift to a second system anchor.
REWORK: no existing connections. M-04 stone-crush gives it minimal Create touch; that is sufficient. Do not over-weave a pure stair palette.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a Black Recluse fang transmuted in spirit-fire becomes a venom-essence reagent — a dungeon mob's drop earns a ritual use, closing the loop from underground exploration back to the magic web
- from: undergroundworlds:desert_charm / undergroundworlds:antidote_flask | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the charms are already functional immunity items — re-infusing them at an arcane apparatus changes their identity in a confusing way (a player already wearing the charm for blindness immunity won't understand why it's also a magic reagent). Keep M-11 spirit-fire route for the raw fang drop; leave the charms as gear.
- from: undergroundworlds:temple_bricks / pyramid_bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: carved temple stone that clutters inventory from dungeon raids can be fed to a crusher for raw/gravel — standard deco-recycle; gives an output to dungeon loot overflow
- from: undergroundworlds:* dungeon chest loot | via: loot-seed (coin seeding) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 is specifically "scarce regional metal → Create-processed → coin"; seeding raw coin into dungeon chests doesn't fit its definition. M-14 (bounty board) would be more appropriate but the dungeon mobs are not Named/boss-tier; LEAVE the economy hook here — the spirit_fire and crushing links are the coherent ties.
REWORK: single survival anchor. Two ACCEPT links (M-11 fang→magic, M-04 temple-brick crush→Create) lift it to 3 systems.

## cmparallelpipes   [anchors: create (1)]
LEAVE — a two-item Create fluid QoL tool (Pipe Wrench + Gear) with no material outputs, no loot, no consumables. The dossier confirms: no coherent 2nd-anchor weave. A pure Create-infrastructure support item; forcing a second edge would be arbitrary.

## terralith   [anchors: survival (1)]
LEAVE — a data-only worldgen overhaul (0 items, 0 blocks, 0 biome-modifiers of its own); its value is the biome surface other mods' content lands on. No recipe edge, no loot table of its own, no consumable. Its weave is structural (enabling regional scarcity via biome diversity) and already implicit in the scarcity foundation — no Phase 3 action needed.

## create_factory   [anchors: create, survival (2)]
- from: create_factory:caramel_waffle / honey_waffle / chocolate_roll (multi-step assembled sweets) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a waffle is three Create steps (press cream, mix batter, fill mold) — exactly the kind of high-effort processed consumable that earns a coin price tag
- from: create_factory:sweet_berries_jam / glow_berry_nectar (fluid outputs) | via: farm_and_charm:crafting_bowl or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already anchors survival; this would just thicken an existing link, not add a new system. M-09 economy is the gap to fill.
OK — existing Create + survival connections sound. M-09 economy bonus accepted.

## create_confectionery   [anchors: create, survival (2)]
- from: create_confectionery:bar_of_ruby_chocolate / bar_of_black_chocolate (multi-step luxury) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: chocolate is a multi-step Create chain (crush cocoa → butter → mix → mold); a priced bar at a Trading Floor is a natural pay-off for that automation investment
- from: create_confectionery:restful_chocolate (phantom repellent) / mining fatigue clear | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: "infuse chocolate to make magic reagent" is a tone clash — a confectionery mod's effect candies read as food, not arcane material. Forcing them through an imbuement apparatus mixes registers badly.
- from: create_confectionery:candy_cane_block / gingerbread_block (deco food blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: already firmly anchored to Create; crushing its own deco blocks back doesn't add a system — it just deepens a loop within Create.
OK — existing Create + survival connections sound. M-09 accepted.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / buffalo_cheese_wheel / amethyst_cheese_wheel (cured, tiered) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: wheel cheese is gated behind the cooking-frame → cookpot → cheese_form pipeline; time-investment and tiering (plain/buffalo/amethyst) make it a textbook luxury sell
- from: meadow:alpine_salt (mined from alpine_salt_ore) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt ore → Create Millstone → alpine salt; salt feeds other food chains (farmersdelight seasoning, meadow recipes) — a light one-step bridge that ties the meadow's mineral to the Create processing spine
- from: meadow:chambray_wool (felted textile) | via: farm_and_charm:mincer or create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: chambray_wool is a decorative textile output, not a processing input; milling fabric into... dust? is not coherent. The salt route already earns the Create 2nd anchor; don't over-reach.
- from: meadow:alpine_salt | via: seasonal gate (Serene Seasons — meadow biome harder to reach in winter) | to: survival↔create | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: alpine_salt_ore is a worldgen block, not a seasonal crop; the seasonal scarcity is ambient (biome access in winter is harder) but M-16 requires the item to be *obtainable only in a given season*, which salt ore isn't. Don't stretch the motif.
REWORK: single survival anchor currently. Two ACCEPTs (M-09 cheese→economy, M-12 alpine_salt→Create) lift it to 3 anchors.

## rolling_down_in_the_deep   [anchors: support/client (1)]
LEAVE — a zero-item, zero-block client camera/movement addon for Do a Barrel Roll; no material graph, no loot. Pure movement feel polish with no content surface for weaving.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is foraged from procedural giant cacti — milling it into a cactus-dye or food paste is a one-step "forage → process" bridge that plugs the cactus biome into the Create web
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk organic) | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps are a bulk biomass output; mixing them (with sugar/water) into ferment or dye solution ties the mushroom-field into the Create processing chain
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: raw foraged fruit as a trade good is too thin a connection — the economy hook should be the *processed* output (the milled dye/paste), not the raw fruit. M-09 with the milled good is coherent but that's a downstream consequence of the M-12 route; record separately only if the milled intermediate is a named item. REJECT this raw-sell form.
REWORK: no existing connections. M-12 ×2 give it Create as 2nd anchor.

## create_cheese   [anchors: create, survival (2)]
- from: create_cheese:cheddar / brie / gouda / emmentaler (matured, time-gated cheeses) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese sits behind mixing → compacting → maturing wait (calendar pages) — the time gate + Create machinery is exactly the depth M-09 rewards; different cheeses command different prices
- from: create_cheese:cheese_curds | via: meadow:cookpot or farm_and_charm:pot_cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already anchors survival; routing curds through another food mod's pot deepens survival but doesn't open a new pillar.
OK — existing Create + survival connections sound. M-09 economy ACCEPT is the gap.

## modelfix   [anchors: support (1)]
LEAVE — zero-content client-side rendering fix (no items, blocks, recipes, or loot). Pure render bugfix; no weave surface.

## touhou_little_maid   [anchors: survival (1)]
- from: touhou_little_maid:altar_recipe_serializers (the Altar multiblock) — gate maid summoning behind a magic reagent (e.g. ars_nouveau:source_gem as a power-point stand-in, or an occultism spirit-essence) | via: touhou_little_maid:altar_recipe_serializers (KubeJS altar recipe) | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar already reads as a ritual-summoning structure; requiring a Source Gem offering alongside lapis/diamond makes the first maid feel like a genuine magical act, tying it to the magic web without Create
- from: touhou_little_maid power-point bottles (thrown XP-like bottles, fairy drops / village loot) | via: loot-seed into mob/structure loot | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: power-point bottles appear in village/structure loot and fairy drops; seeding them into more loot tables (or as a bounty payout target) ties the maid system to the Bountiful→Numismatics economy loop — maids cost power points, so acquiring them through the economy is natural
- from: touhou_little_maid:broom (rideable flying item) | via: aeronautics thematic | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no-motif — brooms as an aeronautics component is a stretch with no defined motif; the broom is a self-contained Touhou reference, not a structural aeronautics material. Forcing it through M-23/M-24 would be incoherent.
REWORK: single survival anchor. Two ACCEPTs (M-05 altar→magic, M-14 power-point loot→economy) lift it to 3 anchors. Note: M-14 is provisional — tag accordingly.

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport/minecraft:copper_chest / copper_bars / copper_lantern (copper deco/tool set) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: oxidized copper deco items that clutter storage crush back to copper nuggets/raw — the whole copper-age palette folds into the Create copper economy; lossy so no arbitrage
- from: minecraft:copper_golem_statue (the early-logistics Golem) | via: aeronautics/logistics thematic | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the Copper Golem's chest-sorting role doesn't map to any accepted motif for aeronautics/logistics; the logistics arm (M-23/M-24/M-13) is about airframe/fuel/drivetrain, not item-sorting golems. A Create-belt link is more natural but also no-motif. REJECT.
REWORK: single survival anchor. M-04 copper crush → Create is the clean 2nd anchor.

## emojitype   [anchors: support/client (1)]
LEAVE — zero-item, zero-block, client-only chat input helper. No recipe surface, no loot, no game-world content. Pure multiplayer QoL convenience.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (novel grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat run through a Create Millstone for flour — the farmstead grain chain plugs into the Create milling web the same way wheat does; one light step, everyday tier, no over-complexity
- from: farm_and_charm:butter / farm_and_charm:bacon / farm_and_charm:baked_lamb_ham (surplus animal-husbandry goods) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the husbandry loop (feed animal → richer drops → process → sell) is a natural production-for-trade engine; butter and cured meats are everyday luxury sells consistent with M-09
- from: farm_and_charm:nettle_tea / ribwort_tea | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: herbal teas as magic reagents are thematically adjacent (folk herbalism → alchemy), but these are *everyday* tier food items — M-10's guardrail says don't gate basic components behind infusion. At everyday tier, the tea should be food, not a magic intermediate.
REWORK: single survival anchor. Two ACCEPTs (M-12 grain→Create, M-09 husbandry goods→economy) lift it to 3 anchors.

## afk-sleep-1.3.2   [anchors: support (1)]
LEAVE — zero-item, zero-block server behavior mod; adjusts sleep quorum only. No game-world content surface for weaving.

## betterbiomereblend   [anchors: support (1)]
LEAVE — zero-item, zero-block client rendering optimization; color-blend engine only. No content surface.

## dataanchor   [anchors: support/library (1)]
LEAVE — pure developer library (data-attachment / networking plumbing); no player-facing items, blocks, or loot. No content surface.

## t_and_t   [anchors: survival (1)]
- from: t_and_t structure loot tables (village chest/outpost loot, sail-ship holds) | via: loot-seed (coin/bounty seeding) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a conquered pillager fort's chest rewarding coin (or a coin-adjacent item) ties exploration combat directly to the Numismatics economy — the classic "fight a fort, get paid" loop; loot-seed delivery (Phase 3 datapack edit)
- from: t_and_t village variants (16 biome-specific) | via: villager trade | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT | hook: biome-specific villages (meadow, swamp, jungle…) hosting biome-specific trade goods channels regional produce into the Numismatics economy via a local trader — regional villages become trade hubs (provisional motif, explore only)
- from: t_and_t sail-ship structure | via: aeronautics thematic | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: the sail-ship is a static worldgen structure, not a rideable airship; tying it to aeronautics as inspiration has no actionable Phase 3 form and no motif. A design nod, not a weave.
REWORK: single survival anchor. Two ACCEPTs lift it toward economy (M-14 loot-seed, M-21 villager trade — note M-21 is provisional).

== CHUNK COMPLETE ==
