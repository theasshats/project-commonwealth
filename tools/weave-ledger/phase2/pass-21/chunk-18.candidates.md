# Phase 2 candidates — chunk-18

## create_sa   [anchors: create, aeronautics (2)]

Existing anchors: Create (made via sequenced_assembly/mechanical_crafting/crushing/haunting) + aeronautics (jetpacks, drones = personal flight). Already ≥2.

Power-read: andesite tier = mid; brass tier = mid-late; blazing line = late (blaze dependency). Exoskeletons/drones are flagship items. `loot=yes` — has loot table entries.

Method-pull candidates:

- from: create_sa:blazing_pickaxe/axe/shovel (blaze-rod-tier tools) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok — blaze gear refined into an arcane-augmented form fits the "fire as arcane fuel" trope | verdict: REJECT | reason: blazing tools are already Create-production-chain endgame; routing them through magic infusion muddies the production pillar (Create does fire, magic does spirit — the distinction matters) and adds a forced cross-system gate on consumable tools.

- from: create_sa:brass_drone_item | via: create:sequenced_assembly (add a module slot) | to: aeronautics (deepen) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: already anchored aeronautics; this deepens within the same anchor, not a new cross-system link — no new pillar added.

- from: create_sa gear (jetpack/exoskeleton) | via: loot-seed into boss loot tables | to: magic/economy | motif: M-15 (boss key) | power: endgame | tone: ok — boss drops a salvaged jetpack part, a player either uses it or sells it | verdict: REJECT | reason: M-15 runs boss-drop → complex Create recipe, not Create gear → boss loot; direction is reversed. No clean motif fits the loot-out angle here without inventing one.

- from: create_sa:andesite_jetpack_chestplate (entry-tier flight) | via: numismatics sell price | to: economy | motif: M-09 | power: mid | tone: ok — crafted personal-mobility gear as a trade good ("sell me a jetpack") | verdict: REJECT | reason: M-09 is for consumable luxury goods (food, wine); a durable piece of equipment breaks the "consumed in trade" model and is more likely player-retained than sold; no coherent shop circuit.

REWORK: OK — connections sound. Create + aeronautics is a clean, well-grounded pair; no existing edge is arbitrary.

---

## pantographsandwires   [anchors: create, aeronautics (2)]

Existing anchors: Create (6 inbound create: recipe types incl. sequenced_assembly) + aeronautics (overhead-line infra for electric trains). Already ≥2.

Power-read: coal_coke and graphite are mid-tier crafting intermediates registered as `c:item/dusts/coal_coke` and `c:item/ingots/graphite` — available to any consumer. `loot=yes`.

Method-pull candidates:

- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking / tfmg:distillation | to: aeronautics (TFMG fuel chain) | motif: M-13 | power: mid | tone: ok — coal coke is literally a coking byproduct; it feeding TFMG's industrial chain to produce diesel/fuel for aeronautics engines is entirely coherent | verdict: ACCEPT | hook: the wire infrastructure you build produces coke as a byproduct; that coke feeds the industrial fuel chain that runs your airship engines.

- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: tfmg:winding or createaddition:charging | to: aeronautics/Create | motif: M-24 | power: mid | tone: ok — graphite rods are real-world electrical conductors; feeding them into propulsion control components is mechanically coherent | verdict: ACCEPT | hook: the same graphite that carries current to your pantograph brush is machined into the electrical windings of your propulsion drivetrain.

- from: pantographsandwires:graphite | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash — conductive graphite as an arcane reagent has no lore grounding; the mod's vibe is industrial-railway realism, not magic materials | verdict: REJECT | reason: tone clash; graphite's identity is electrical conductor, not arcane catalyst.

REWORK: OK — connections sound. The new coal_coke→M-13 and graphite→M-24 edges add a third Economy/aeronautics deepening that was absent.

---

## mutantszombies   [anchors: survival (1)]

loot=no; 7 items are spawn eggs only; no drops, no blocks.

Method-pull: zero material surface — no drops to route through any method.

Dossier itself flags "leave (vanilla-style mob mod with no drops/items)."

- LEAVE — genuine zero-material surface: all 7 items are spawn eggs; loot=no confirms no drop table to seed. The mod raises the night-threat baseline (survival pressure) — a valid 1-anchor role — but there is no item, drop, or loot table to route through any method. Forcing an edge would be the failure mode the briefing warns against.

---

## createoreexcavation   [anchors: create (1)]

Power-read: vein_finder = early-mid (prospecting tool); drilling_machine = mid (needs SU + drill heads); diamond/netherite drill = late. `loot=yes`.

The dossier identifies one 2nd-anchor candidate: economy via vein-table scarcity feeding M-08 (scarce ore → Create process → coin). No recipe edge — a pack-design lever.

Method-pull candidates:

- from: createoreexcavation vein outputs (regional scarce ores) | via: createoreexcavation:drilling → create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid-endgame | tone: ok — the whole point of infinite-but-slow veins in a scarcity design is that they become the stable ore feed for the coin economy; the loop is exact | verdict: ACCEPT | hook: your drilling machine taps the region's ore vein; run those raw ores through Create's crushers and you have the raw metal that mints into coin — the pack's economic blood supply flows from underground.

- from: createoreexcavation:netherite_drill / diamond_drill (drill-head tier) | via: create:mechanical_crafting (boss material as input) | to: economy/magic | motif: M-15 | power: endgame | tone: ok — gating the top-tier drill head behind a boss drop makes the infinite-ore tap a reward for combat progression | verdict: ACCEPT | hook: the netherite-drill head requires a boss-key material in its assembly; you don't get infinite-ore access until you've beaten something that earns it.

- from: createoreexcavation:vein (fluid veins — extracting) | via: tfmg:distillation | to: aeronautics | motif: M-13 | power: mid-endgame | tone: ok — if a fluid vein is crude-oil/petroleum, the extractor pipes it to TFMG distillation for diesel/fuel; the logistics route is an aeronautics supply line | verdict: ACCEPT | hook: locate a petroleum vein, run the extractor, pump the crude into a TFMG distillation column — diesel for your airship fleet flows from below.

- from: createoreexcavation:raw_diamond / raw_emerald outputs | via: create:crushing → ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok in principle | verdict: REJECT | reason: raw gems already have standard Create crushing paths; adding a magic infusion on top of that is a third step on everyday materials, violating "never gate basic components behind complex recipes" (M-10 anti-rule).

REWORK: OK — the single Create anchor is the right read; the three new candidates (M-08 economy, M-15 boss-gate, M-13 aeronautics fuel) each independently earn a second anchor.

---

## naturalist   [anchors: survival (1)]

Power-read: venison/bushmeat = everyday food; antler = mid (bone-analog reagent); glow_goop = mid (light material, rare firefly drop). `loot=yes`, 7 c:tags.

Method-pull candidates:

- from: naturalist:venison / naturalist:bushmeat | via: farmersdelight:cooking or create:mixing | to: create (food processing chain) | motif: M-12 | power: everyday | tone: ok — game meat runs through a food-processing chain naturally | verdict: ACCEPT | hook: deer venison and boar bushmeat are inputs to the FarmersDelight cooking line — a wilderness hunter feeds the settlement's kitchen.

- from: naturalist:cooked_venison / cooked_bushmeat | via: numismatics sell | to: economy | motif: M-09 | power: everyday-mid | tone: ok — cooked wild game as a butcher/tavern trade good is intuitive | verdict: ACCEPT | hook: processed wild game sells at the trading post — hunters become the pack's meat suppliers.

- from: naturalist:antler | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok — antler as a bone-analog ritual reagent (organic from a living creature) fits magic consumption without claiming the reserved reagent-ownership items | verdict: ACCEPT | hook: a deer antler — organic, wild, moonlit — is a natural ingredient in spirit rites; what else would a wilderness-sourced ritual call for?

- from: naturalist:glow_goop (firefly harvest) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok — bioluminescent material as an arcane light-essence is coherent; firefly glow feeding a light-based infusion | verdict: ACCEPT | hook: the firefly's glow condensed into a jar becomes the light-essence component in luminescent infusions.

- from: naturalist shellstone / froglass (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is valid in principle but shellstone/froglass are the deco identity of the mod and crushing them back to sand/gravel is a weak "nothing was gained" edge; the tone of a naturalistic wildlife mod doesn't call for industrial recycling of its signature deco — and the pack already has plenty of M-04 candidates. Low value.

REWORK: OK — survival is the right anchor; the four accepted candidates (M-12 food chain, M-09 economy, M-02 antler reagent, M-10 glow_goop) each add a real cross-system link.

---

## endermoon   [anchors: survival (1)]

0 blocks, 0 items, loot=no. Pure lunar event (spawn-weight modifier for endermen).

The briefing says: "a mod with a loot table or any item/block is not 'no content'" — but this mod has neither. It has no loot table and no items whatsoever. The indirect effect (more ender pearls from mass enderman spawns) belongs on the ender pearl drop or the parent enhancedcelestials event, not this mod.

Method-pull: no material surface of its own.

M-22 (lunar/celestial reagent): applies to mods that produce items during a moon event. Endermoon produces nothing directly — it modifies spawn rates, so any M-22 weave target is ender pearls (a vanilla drop), which belongs on enhancedcelestials or a vanilla loot-table edit, not this mod.

- LEAVE — zero content surface (0 items, 0 blocks, loot=no). The Ender Moon event is a spawn-rate modifier; any M-22 weave on ender-pearl abundance is properly authored on the enhancedcelestials event or vanilla ender_pearl loot table, not here.

---

## toomanypaintings   [anchors: support/decoration (1)]

0 blocks, 0 items, loot=no. Pure painting-selection GUI.

No material, no loot table, no recipe type.

- LEAVE — genuine zero-material surface: no items, no blocks, no loot table. It extends vanilla's painting entity with a GUI selector; there is nothing to route through any method.

---

## zeta   [anchors: support/library (1)]

0 blocks, 0 items, loot=no. Framework/library for Quark and Vazkii mods.

- LEAVE — pure code library (mod-development framework; no player-facing content whatsoever). Correct classification per briefing: genuine zero-content code library.

---

## lootjs   [anchors: support/library (1)]

0 blocks, 0 items, loot=no. KubeJS scripting API for loot-table editing.

- LEAVE — pure code library (packdev scripting API; no items, no loot table, no content surface). It is the *enabler* of M-02 mob-drop weaves across other mods — not itself a node to weave.

---

## create_factory   [anchors: create, survival (2)]

Existing anchors: Create (made via create:filling/mixing/pressing) + survival (food). Already ≥2.

Power-read: honey_waffle / caramel_roll = mid luxury food; cream/jam fluids = everyday; ruby/dark chocolate variants = late (require Create: Confectionery chocolate chain). `loot=no`.

Method-pull candidates:

- from: create_factory finished sweets (waffles, rolls, candy apples) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — assembled confections as luxury trade goods fit M-09 directly; these are exactly the kind of high-effort processed consumable the motif targets | verdict: ACCEPT | hook: a waffle hot off the Create mixing line is worth real coin at the trading post — the confectionery factory is also a small economy driver.

- from: create_factory:cream_bucket (cream fluid) | via: create:mixing → farmersdelight:cooking | to: survival (deepen food chain) | motif: M-12 | power: everyday | tone: ok — cream is a processing intermediate; routing it into FarmersDelight dishes creates a genuine food-processing chain node | verdict: ACCEPT | hook: the cream your mixer produces isn't just for waffles — it's the base liquid for richer FarmersDelight dishes, linking the dessert factory to the main food chain.

- from: create_factory:sweet_berries_jam fluid / nectar | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash — sweet berry jam as an arcane reagent feels forced; jam's identity is food, not magic catalyst; the "whimsical confectionery" vibe has no arcane overtone | verdict: REJECT | reason: tone clash (food → arcane infusion has no lore hook); better magic reagents exist for imbuement slots.

- from: create_factory:honey_glazed_berries / honey_waffle | via: vinery:apple_fermenting (or extradelight:vat for a fermentation step) | to: survival/economy | motif: M-12 | power: mid | tone: ok — honey-rich confections fermenting into a mead or honey-spirit (sellable luxury) is a plausible processing chain | verdict: ACCEPT | hook: honey waffles fed into a fermentation vat yield honey-spirit — the dessert factory has a side-line in artisan spirits.

REWORK: OK — Create + survival is correct and well-grounded; three new candidates add economy and deeper survival/food-chain links.

---

== CHUNK COMPLETE ==
