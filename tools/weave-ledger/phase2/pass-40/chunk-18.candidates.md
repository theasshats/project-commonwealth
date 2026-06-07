# Phase 2 candidates — chunk-18 (context-fed)

## createimmersivetacz   [anchors: create (1)]

Existing rows cover: M-26 ammo-consumption (multiple ACCEPTs), M-34 combat-route supply, M-31 bulk logistics, M-28 colony/barracks supply, M-30 brass regional-scarcity, M-32 TFMG byproduct feed, M-15 boss-key gate on firing mechanism, M-29 cross-route (CBC nitropowder). No rows on M-37 research gate or the M-06/CBC integration's correct motif framing.

- NEW | from: createimmersivetacz gun factory (full ammo pipeline) | via: minecolonies:research (colony Blacksmith + Barracks research tree) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony's Barracks research tier unlocks blueprint access to the Create-ammo factory schematics — you can't mass-produce TACZ rounds without the colony having researched advanced metallurgy, so the arms-dealer role requires colony investment, not just Create parts
- NEW | from: createimmersivetacz:nitropowder_bucket (fluid) | via: createbigcannons:big_cartridge_filling | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: CBC's cartridge-filling deployer wants a propellant charge fluid — TACZ's nitropowder IS that fluid; the two ordnance mods share a propellant standard, so the CBC gunner and the TACZ arms-dealer must cooperate on the chemistry supply
- CHALLENGE | from: createimmersivetacz:twelve_gauge_shell / bulk ammo | via: emergent trade / M-34 combat-route supply | to: economy | motif: M-34 | verdict: REJECT | hook: the M-34 and M-26 rows for ammo consumption are effectively the same connection stated twice from demand-side vs. supply-side; the pack needs one canonical statement (M-26 for consumption-sink, M-34 for the trade angle) — the duplicate rows dilute signal without adding a distinct weave

## woodworks   [anchors: survival (1)]

Existing rows cover: M-04 crushing recycling (strong consensus ACCEPT), M-28 colony Library/Warehouse demand, M-10 Ars enchanting_apparatus bookshelf bonus (split), M-05 Sawmill crafting gated on Create parts (1 ACCEPT), M-12 sawmill-overlap rows (majority REJECT as cosmetic). The bookshelf→Ars apparatus angle is real but already present. M-05 Sawmill gating got only 1 ACCEPT with no hook articulation — worth strengthening.

- NEW | from: woodworks:*_sawmill (the Sawmill block) | via: create:mechanical_crafting (requires Create saw blade and a brass shaft fitting as recipe inputs) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Sawmill is a powered precision wood-cutting machine — it should cost a Create saw blade and a brass coupling to build, not just planks; one light step that folds the whole wood-deco palette into the Create-parts economy without over-gating basic deco
- NEW | from: woodworks:*_bookshelf / chiseled bookshelves (the full wood-type range) | via: ars_nouveau:enchanting_apparatus (bookshelf proximity bonus — apparatus scans all bookshelf types in range) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mage who furnishes their apparatus room with woodworks bookshelves in rare wood types (crimson, warped, cherry) gets a higher apparatus level than vanilla oak allows — the deco palette becomes arcane infrastructure; everyday wood-typing earns magic significance without gating basics
- CHALLENGE | from: woodworks:*_beehive variants | via: farmersdelight:cutting or vinery:apple_fermenting (honey→wine path) | to: survival | motif: M-12 | verdict: REJECT | hook: the beehive rows consistently split because the honey/wax output is from the vanilla beehive mechanic, not woodworks' mod surface — woodworks recolors the beehive block but the honey mechanic is vanilla; any M-12 route on honey output belongs to vanilla/FD, not woodworks specifically

## touhou_little_maid   [anchors: survival (1)]

Existing rows cover: M-05 altar native-method gating (dominant ACCEPT), M-15 boss-key unlock via altar, M-11 spirit-essence ritual offering, M-33 labor-service, M-37 research gate on task-modes, M-26 power-point upkeep consumption, M-34 power-point loot-seed, M-02 mob-drop offerings. Very thorough. Missing: M-22 lunar gate on the most powerful altar recipe; no one tested it.

- NEW | from: touhou_little_maid:broom (the altar's flagship flight item) | via: touhou_little_maid:altar_recipe_serializers (KubeJS) gated on a lunar-event window — the altar recipe only completes during an Enhanced Celestials full moon or Ender Moon night | to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: a flying broom is a lunar artifact — the shrine maiden can only enchant it when the moon is right; this ties the altar's flagship output to the celestial calendar without adding a new material cost, and M-22 spans every moon event (confirmed in ledger)
- CHALLENGE | from: touhou_little_maid maid automation (farming/fishing tasks) | via: MineColonies adjacency / M-28 colony route | to: economy | motif: M-28 | verdict: REJECT | hook: multiple rows conflate maid-labor-as-colony-alternative with M-28 (which specifically means the MineColonies huts/research route); maids are a parallel labor system whose interaction with the loop is better captured by M-33 (player-to-player labor service) or M-37 (research-gated task modes) — tagging maid labor as M-28 misroutes it and blurs M-28's identity as the MineColonies path

## vinery   [anchors: survival (1)]

Existing rows cover: M-12 create:pressing (dominant ACCEPT), M-35 maturation/aging, M-16 seasonal grape varieties, M-28 colony morale demand, M-05 Vinery machines gated on Create brass, M-30 regional grape biomes, M-11 chorus_wine via occultism spirit_fire, M-29 wine as ritual input. Missing: a genuine M-29 cross-route where Create depends on vinery output (not just vinery feeding magic), and the subtler alcohol_industry→Create chemistry chain.

- NEW | from: vinery:apple_juice / grape_juice (fermentation intermediate liquid) | via: alcohol_industry:alcohol_boiling → Create chemical solvent (the distilled alcohol output feeds create:mixing as a processing solvent for a Create-tier chemical step) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the distillery boils apple juice into raw spirits; those spirits are the only viable solvent for a Create chemical mixing step (e.g. dissolving a mineral salt or refining a resin) — the farm-to-factory chain forces the vineyard and the Create lab to cooperate rather than run separately
- NEW | from: vinery:fermentation_barrel (the barrel block itself, placed in world) | via: create:crushing (lossy — a broken-down barrel yields oak planks, iron bands, and a glass bottle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a surplus fermentation barrel crushed in the wheel yields its component materials back — the same M-04 deco-recycle logic that applies to any wood-and-metal container; light single step, no depth needed for an everyday block
- CHALLENGE | from: vinery:chorus_wine | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: the 2 ACCEPT rows for chorus_wine via imbuement rely on "End-origin = arcane affinity" as the lore bridge, but Ars Nouveau's imbuement chamber works with crystalline/mineral inputs (lapis, amethyst, essences), not fermented beverages; the tone clash is real and the existing M-11 row (chorus_wine → occultism spirit_fire) is the coherent route for void-adjacent liquids — keep M-11, reject M-10 for wines specifically

## endermoon   [anchors: survival (1)]

Existing rows strongly converge on M-22 (ACCEPT: 10–14 times) as the ender pearl supply tap gating a downstream ars/occultism method. The dossier says "leave — no items of its own; any weave belongs on the ender pearl or the parent celestials event." The M-22 acceptance is correctly attributed to *the event* gating *another mod's recipe*; endermoon's own content surface is zero.

OK — existing rows sufficient. The M-22 ender-pearl-supply-→-ritual ACCEPT is the correct and complete statement for this mod. The dossier's own "leave" recommendation aligns with the existing row set: endermoon contributes the *event*, the weave is authored against the ender pearl or Enhanced Celestials' event hook, not this mod's items. No new proposals; no challenges to file.

## ding   [anchors: support/client-QoL]

LEAVE — pure client-side audio cue with 0 items, 0 blocks, 0 methods. No content surface for any weave. No existing candidates, none warranted.

## ars_nouveau   [anchors: magic (1)]

Existing rows are extremely thorough across M-01, M-02, M-10, M-11, M-12, M-16, M-17, M-18, M-26, M-29, M-33, M-37. Two genuine gaps: (1) M-22 lunar reagent applied to Ars' own summoning rituals, not yet proposed. (2) The `ars_nouveau:budding_conversion` method — not a single existing row touches it as an inbound route for foreign biome-locked materials.

- NEW | from: ars_nouveau:summon_ritual (specifically the Wilden Chimera / Guardian summon) | via: worldgen/spawn-event gating — the summon_ritual recipe's final step (the ritual circle activation) only yields the boss when triggered during an Enhanced Celestials full moon or Ender Moon night | to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wilden Guardian is already a twilight-tier threat — timing its summoning to the right moon is a ritual constraint a player would find completely natural; M-22 explicitly spans all moon events and this is the most powerful summon in Ars
- NEW | from: northstar:argyre_log / calorian_log (biome-locked exotic timber from Northstar) | via: ars_nouveau:budding_conversion (the budding_conversion method can convert non-magic blocks into archwood-adjacent budding forms by spending Source) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar's biome-locked exotic logs, once saturated with Source via the budding conversion ritual, slowly bud magical growths — the explorer who finds argyre wood and hands it to the mage unlocks a Source-generation node unavailable from common archwood; biome-gated material becomes a magic infrastructure upgrade, tying exploration scarcity into the magic pillar
- CHALLENGE | from: ars_nouveau:archwood_log | via: ars_nouveau:volcanic_sourcelink (archwood burns for bonus Source) | to: survival | motif: M-26 | verdict: REJECT | hook: this is correctly rejected in the existing set — the volcanic sourcelink consuming archwood is native Ars behavior, not a cross-system weave; it stays within magic and doesn't advance the loop; the reject is the right call and should be held firm against the 1 ACCEPT row that slipped through

## polymorph   [anchors: support/compat-QoL]

LEAVE — recipe-conflict resolver UI mod with 0 items, 0 blocks, 0 methods, loot=no. No content surface. No existing candidates, none warranted.

## sky_whale_ship   [anchors: survival (1)]

Existing rows: M-15 loot-seed → aeronautics progression items (17x ACCEPT, dominant consensus), M-34 combat-supply via whale-back hostiles, M-23 structural alloys from loot (4 ACCEPT / 1 REJECT split). The M-23 application here is motif-misuse: M-23 is "fabricated structural part → aeronautics construction recipe," a *recipe authoring* motif, not a loot-table seeding motif. Loot-seeding structural alloys is M-15 (boss-key unlock via structure loot) or M-34 (combat-route supply). No row yet on M-22 lunar enhancement.

- NEW | from: sky_whale_ship loot chests (hostile-whale variant) | via: worldgen/spawn event gating — during an Ender Moon or Enhanced Celestials blood moon, the hostile whale's mob density and rare loot roll weight are both boosted (config: spawn_weight modifier or KubeJS loot global_modifier keyed on moon phase) | to: survival | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hostile sky whale is always dangerous — but on the Ender Moon night, the things aboard are worse and the cache inside is richer; the aeronautics crew times their raid to the lunar calendar, and the moon becomes the reason to launch tonight specifically
- CHALLENGE | from: sky_whale_ship loot chests | via: loot-seed | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is defined as "a fabricated structural alloy is a required *build ingredient* for Aeronautics airframes" — a recipe-authoring motif where the alloy appears in a construction recipe; applying M-23 to loot-table seeding misclassifies it; a loot drop of structural alloy is correctly M-15 (structure/boss loot unlocks the next tech tier) or M-34 (combat-route supply); the 4 ACCEPT rows for M-23-loot-seed should be re-motifed to M-15

## moonlight   [anchors: support/library]

LEAVE — shared library/API for MehVahdJukaar mods; 1 internal spawn_box block, no player-facing items, no recipe methods, loot=no. No content surface for any weave. No existing candidates, none warranted.

== CHUNK COMPLETE ==






