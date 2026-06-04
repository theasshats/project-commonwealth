# Phase 2 candidates — chunk-05

## mushroomquest   [anchors: survival (1)]
- from: rare/mythical mushroom caps (effect-bearing) | via: farmersdelight:cooking (cooking_pot) | to: survival→economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the forager processes rare caps into tinctures/soups worth selling — the kitchen is the bridge between finding and trading
- from: everyday mushroom (edible caps) | via: farmersdelight:cooking | to: survival (depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: run foraged mushrooms through Farmer's Delight cooking to produce variety meals; the two mod systems already share the same culinary vibe
- from: rare/mythical mushroom caps | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare foraged caps are a natural luxury trade good — a forager specialist can sell to cooks or alchemists; low floor, high ceiling
- from: deadly/mythical caps (e.g. angel's wing — known toxic) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: too thin a connection — one narrow transmutation on a minority of mushrooms; the stronger M-12/M-09 already give a clean 2nd pillar without forcing a magic route that has no clear thematic demand from the occult side

**Best accepted path:** M-12 (cooking-chain pull) gives survival a genuine food-processing 2nd web connection; M-09 (luxury sale of rare caps) layers an economy tie on top. Together these give mushroomquest a strong survival↔economy double-anchor via cooking + trade, without forcing a magic reach.

---

## letsdocompat   [anchors: survival (1)]
- LEAVE — letsdocompat is structural glue: it registers no items, no blocks, no machines — it IS the M-12 / food-web unification layer across the Let's Do / Farm&Charm / Farmer's Delight cluster. Giving it a "2nd pillar" by routing something through it is circular — the thing it does is already be the connective tissue. Its one pillar (survival) is correct and complete. No forced edge warranted.

---

## createoreexcavation   [anchors: Create (1)]
- from: configurable vein outputs (any regional scarce metal — copper/gold/iron/galosphere palladium/samurai jade etc.) | via: createoreexcavation:vein (datapack/KubeJS vein table) + numismatics mint | to: economy | motif: M-08 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: vein-drilled ore feeds the coin-grade processing chain — the drilling machine is how a Create base sustains the metal supply that the mint demands; infinite-but-slow ore = the regional scarcity lever
- from: fluid veins (water/lava/oil analogue if present) | via: createoreexcavation:extracting | to: Create (depth) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: fluid extraction is already squarely Create (same pillar, no new anchor); it deepens Create, not a 2nd pillar
- from: diamond_drill / netherite_drill (endgame drill heads) | via: create:sequenced_assembly | to: Create depth | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: same pillar again — drill-head fabrication deepens Create but doesn't add a new pillar; not a 2nd-pillar move

**Best accepted path:** M-08 (coin from processed scarcity) — configuring the vein table so regionally-scarce metals are the primary vein outputs, then routing the drilled ore through Create crushing into the numismatics mint. This is a pack-design/datapack lever (vein table config) more than a recipe edge, but M-08 explicitly covers it. Creates: drill a vein → process ore → mint coin; a clean Create↔economy arc.

---

## trailandtales_delight   [anchors: survival (1)]
- from: cherry cheese pie / cherry cheese_wheel (multi-step, high-effort) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an artisan cheese-and-cherry pie is exactly the luxury good a colony or wandering trader pays coin for; the effort to reach a cheese wheel from milk → curd → wheel is appropriate
- from: lantern_fruit (Sniffer-recovered crop, tagged item/foods/berry) | via: create:milling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: rare sniffer-recovered fruit milled into a fruit powder or juice intermediate; the Millstone accepts c:crops/berries tags; fits the pack's standard cooking↔Create grain/crop processing weave
- from: ancient_coffee (high-effort drink, distinct flavour identity) | via: extradelight:vat or create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: coffee beans mixed into a concentrate in a Create Mixer feeds the cooking chain — an archaeo-flavour ingredient processed through the tech spine
- from: cooked/stuffed sniffer egg | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — sniffer-egg cuisine is rustic/agrarian; routing a cooked dish into an occult transmutation feels arbitrary and would confuse a player ("why is a stuffed sniffer egg an occult ingredient?")

**Best accepted path:** M-09 for the cheese/cherry luxury goods gives a survival↔economy anchor. M-12 for lantern fruit milling or ancient coffee mixing ties it into the Create spine. Either of those alone would satisfy the 2-pillar floor; both together is ideal.

---

## oceansdelight   [anchors: survival (1)]
- from: elder_guardian_roll / fugu_slice (high-risk, high-reward delicacies) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fugu slice is exactly a dangerous luxury good — coastal specialists sell it to inland buyers at a premium; fugu poison-risk makes it a trade commodity, not a bulk staple
- from: guardian_eye (elder guardian loot — not an oceansdelight item, but oceansdelight is the bridge mod for guardian drops) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the guardian_eye belongs to endrem (it's an endrem eye item), not oceansdelight — misattribution; oceansdelight's own drops are culinary, not reagent-like. Don't force a magic route that doesn't fit the mod's identity.
- from: cut_tentacles / guardian flesh (raw ocean drops before cooking) | via: create:cutting (or farmersdelight:cutting already in use) → numismatics bulk sell | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw ocean drops processed via cutting board into portions, then surplus portions sold — creates a production-for-trade loop from ocean combat; low-floor, no depth required

**Best accepted path:** M-09 on the finished luxury dishes (fugu, elder guardian roll) is the cleanest 2nd pillar — survival↔economy via high-effort cuisine. The M-12 raw-processing route is a secondary reinforcement.

---

## samurai_dynasty   [anchors: survival (1)]
- from: jade_ore / ruby_ore / onyx_ore / aquamarine_ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic samurai gems go through the Create Crushing Wheel for ore-doubling — the Create spine handles all ore processing; a player naturally routes new ores through the same machine they use for iron
- from: samurai_dynasty:steel (c:ingots/steel) | via: create:crushing (for any excess steel blocks) or better create:mixing (alloy synthesis from iron + carbon) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: steel via Create mixing — iron + coke in a Basin yields steel ingots; this is the canonical Create alloy path and brings samurai steel into the spine naturally
- from: akaname_tongue / Yokai drops (reagent-like exotic drops) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai spirit-fire transmutation — an Akaname tongue or Enenra smoke-fragment burned in spirit fire to yield an occult essence; yokai ARE spiritual entities in folklore, so magic is the coherent destination for their drops
- from: jade gems (c:gems/jade) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: jade already has a Create ore-doubling route (M-03); adding an arcane infusion path would create a double-spend on the material. Pick one strong anchor — M-03 is cleaner and wider. Reject M-10 to avoid over-wiring jade.
- from: samurai silver (c:*silver — ⚠ CAUTION: galosphere silver-as-palladium gotcha applies; samurai_dynasty has its own silver_ore) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT with FLAG | hook: samurai silver crushed for ore-doubling — but ⚠ must verify samurai_dynasty:silver is NOT unified with galosphere's palladium-tagged silver before wiring any tag cross-recipe. Flag for human review before authoring.

**Best accepted path:** M-03 (ore-doubling via crushing) for jade/ruby/onyx/aquamarine gives the Create pillar cleanly. M-02 (Yokai mob-drop reagent sink via spirit_fire) adds the magic pillar. Together: survival + Create + magic = three pillars. Silver tag must be audited before any silver-specific recipe.

---

## endrem   [anchors: survival/exploration (1)]
- from: endrem:undead_eye / endrem:nether_eye (thematically tied to undead/nether magic) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a player who can't find the undead_eye in loot can perform an Occultism ritual with undead reagents to transmute toward it — magic provides an alternative acquisition path; the ritual cost must be steep to preserve exploration intent
- from: endrem:guardian_eye | via: occultism:ritual (elder guardian reagents) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: same logic — a guardian-themed ritual (prismarine + guardian drops) as an expensive alternative to pure RNG, opening the ocean-boss route to End portal for players who've cleared the ocean monument
- from: endrem:cold_eye / endrem:magical_eye | via: create:sequenced_assembly (derpack:incomplete_eye chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT with CAVEAT | hook: one or two eyes are craftable through a multi-stage sequenced assembly using rare Create components — keeps the exploration-first intent by being expensive, but gives the Create specialist a path; ⚠ strictly limit to 1–2 eyes at most (the rest remain loot-only)
- from: all 16 eyes (bulk) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: trivializes the exploration intent — endrem's value IS the exploration gate; making every eye craftable defeats the mod

**Best accepted path:** M-11 for 2–3 thematically matched eyes (occultism ritual as alternate acquisition, expensive) gives survival↔magic. M-06 for 1 eye (sequenced assembly) gives survival↔Create, but should be limited and flagged for human review on how many eyes get craft routes. Core philosophy: exploration is primary, these are safety valves for stuck players.

---

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop, unique artifact) | via: create:sequenced_assembly (derpack:incomplete_* chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ice crystal is the boss-key gate item for a high-tier Create machine — the pack's design explicitly says "Create tech unlocks via boss drops"; Frostmaw as the gate for cryo-tech is narratively tight
- from: mowziesmobs:earthrend_gauntlet or wrought-helm (Wroughtnaut drop, iron/forge theme) | via: create:sequenced_assembly | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's forged artifact is a keystone input for a high-tier metalworking Create machine — a smith's boss gate for a smith's machine
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: ice crystal attuned through Ars imbuement yields a frost-magic focus — a player investing in magic instead of Create gets a complementary use for the same boss drop; makes Frostmaw worth killing for two pillars
- from: mowziesmobs:elokosa_paw (moon-phase mob drop — Elokosa is lunar) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elokosa howls at moons; its paw is a lunar reagent usable in a moon-phase-gated ritual; M-22 (lunar/celestial reagent) across moon events applies here naturally
- from: boss drop bounty | via: numismatics bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is provisional (leans no); also Mowzie's boss artifacts are non-renewable (per-spawn-rare), making them poor bounty-board commodities — that mismatch of supply would break the economy lever

**Best accepted path:** M-06 (ice_crystal/wrought drop gates Create sequenced_assembly) = survival↔Create. M-10 (ice_crystal → arcane focus via imbuement) = survival↔magic. M-22 (elokosa_paw as lunar reagent) = survival↔magic depth. Strong three-pillar candidate.

---

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grain crops) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat go through the Create Millstone to make flour — the pack's standard grain-to-flour milling weave; a player with a farm naturally runs surplus grain through the Create mill
- from: farm_and_charm:butter / farm_and_charm:eggs (animal husbandry surplus) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: surplus butter and eggs from a well-run farm are the pack's baseline trade goods — MineColonies provisioning or a shopkeeper will buy bulk dairy; husbandry's "feed for more drops" loop becomes a production-for-trade engine naturally
- from: farm_and_charm:barley (also hops-adjacent grain) | via: vinery:wine_fermentation / alcohol_industry:alcohol_boiling | to: economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: barley fermented into ale or spirits is a higher-value processed good — one step beyond grain, directly sellable; the grain milling chain extends into the brewing chain and both route to the economy pillar
- from: farm_and_charm mincer output (ground meat) | via: farmersdelight:cooking → numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: processed meat is already food (survives at the survival pillar via FD cooking); it doesn't add a new anchor — the economy connection is already captured by the butter/eggs M-09 row above. Redundant edge.

**Best accepted path:** M-12 (grain milling via Create) gives survival↔Create. M-09 (butter/eggs surplus sold for coin) gives survival↔economy. The barley→ale fermentation (M-12 extension) optionally layers a third connection through the brewing chain. Clean two-pillar-to-three arc.

---

## copperagebackport   [anchors: survival (1)]
- from: copper deco blocks (copper_bars, copper_chain, copper_chest, oxidized_copper_* variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper deco/tools crush back to copper nuggets + XP nugget — the standard Create copper-recycling economy; players can tear down early copper builds and recycle them through the Crushing Wheel without waste
- from: copper tools / copper armor (copper tier items) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools crush for copper; same recycling logic as any Create metal tool — consistent system behavior
- from: Copper Golem (early item logistics mob) | via: thematic adjacency — Aeronautics / logistics pillar | to: aeronautics/logistics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT (no-motif) | reason: the Copper Golem's chest-to-chest hauling is thematically close to logistics but there is no registered recipe-type or method to route through; the connection would be narrative/lore-only with no mechanical weave. No motif covers "NPC does logistics." Mark for human review if a logistics motif is ever added.
- from: oxidized copper blocks (4 weathering stages) | via: create:splashing (de-oxidize with water splashing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's splashing method can strip oxidation stages from copper blocks — a natural Create↔copper interaction that makes the Millstone/Deployer setup useful for copper building supply chains; players processing copper through Create get fine control of oxidation state

**Best accepted path:** M-04 (Create crushes deco/tools back to raw copper) is the primary 2nd pillar — survival↔Create via copper recycling. The splashing de-oxidation is a bonus Create interaction. The Copper Golem logistics angle has no motif and should be left for Gate 0 if a logistics motif is defined.

---

== CHUNK COMPLETE ==
