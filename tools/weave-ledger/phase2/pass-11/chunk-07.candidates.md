# Phase 2 candidates — chunk-07

## createaddition   [anchors: Create (1)]
- from: FE-chargeable magic gear (Iron's Spellbooks focus/armor) | via: createaddition:charging (tesla coil range-charge) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the electric tower charges your arcane focus — your spell uptime depends on your generator's SU
- from: seed_oil / bioethanol (crop-fermented fuel) | via: createaddition:liquid_burning | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: liquid_burning makes the crop oil a *fuel input*, not a processed sellable intermediate — M-09 luxury→coin doesn't apply here and M-12 is a weak fit; the fuel loop is purely internal to Create energy, no outward economy hook. Red-team: a player won't see "farm seeds to power the reactor" as an economy edge, just a fuel cost.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul remnants from the Otherside transmute into occultism essences — the dark dimension is an occult reagent supply line
- from: deeperdarker:heart_of_the_deep (Warden drop, rare) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's heart imbues a source gem into a supremely potent arcane focus — surviving the deep earns the highest spell tier
- from: deeperdarker:gloomslate / sculk_stone deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the strange dimension's stone crushes like everything else — your quarry machine processes the Otherside's rock for gravel and a little XP
- from: deeperdarker:warden_carapace / sculk_bone | via: numismatics (sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 is luxury *processed goods*; raw mob drops are M-02/M-14 territory, not M-09. Dossier already marks this WEAK. The stronger routing is the magic pillar (accepted above); adding economy as a tertiary pillar via a raw-drop sell is padding, not a second anchor.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — no items, no methods, no registry content; structure overhaul only. Nothing to route through any method. The mineshaft serves the scarce-ore mining loop indirectly but offers no direct weave hook.

## travelersbackpack   [anchors: survival (1)]
- from: higher-tier backpack (diamond/netherite variant) and tank upgrade | via: create:pressing / create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the reinforced tank housing needs Create-pressed metal sheets — you can't carry an expedition's worth of fluid without the factory behind you
- from: themed mob-drop variants (blaze, dragon, enderman packs) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: sequenced assembly is the flagship endgame keystone (M-06) — a cosmetic backpack variant doesn't justify a multi-stage sequenced chain; depth must match power. Red-team: these are purely cosmetic reskins, not power items. Depth should cap at one light step (M-05, already accepted above), not a chain.

## t_and_t   [anchors: survival (1)]
- from: t_and_t village/fort loot tables and inhabiting villager trades | via: numismatics trade-seam | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: the biome-specific villages become trading hubs — what the swamp village stocks differs from the badlands fort, so the economy map has geography
- Note: M-21 is provisional (maintainer leans no); flagged accordingly. No method-routing is possible (no items/recipe types). The only coherent 2nd pillar is the economy seam via loot/trade tables — either M-21 or treated as a LEAVE if M-21 is rejected. Recording for human review.

## underground_village   [anchors: survival (1)]
- from: Stoneholm underground villager trades | via: numismatics trade-seam | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: subterranean villagers deal in deep-stone goods and processed ores — finding a Stoneholm is finding the underground branch of the economy
- Note: same M-21 caveat as t_and_t. No items/methods to route. If M-21 stays provisional-rejected, this mod stays at 1 pillar (survival only) and the entry should become LEAVE. Recording for human review.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork:molten_<metal> outputs / crushed_raw_materials route for magic-mod metals (e.g. occultism/galosphere metals crushed and melted) | via: create:crushing → create:mixing (existing inbound methods) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the magic metals go through the same foundry as iron — the ore-doubling reward extends to arcane reagent feedstocks
- from: Create-processed scarce metals (steel, platinum, osmium, etc.) → coin | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the foundry's refined output is a natural mint feedstock — scarcity feeds the economy through the machine floor

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (processed, refined fuel) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade uranium is the most dangerous and scarce material the foundry processes — a bar of enriched uranium is worth a stack of coin
- from: createnuclear:steel (c:ingots/steel) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is the structural alloy every builder and engineer wants; processing scarcity into steel is the Create spine's industrial output, and the mint prices it
- from: createnuclear:enriched method (items enriched via enriching_campfire/fire) | via: create:haunting → createnuclear:enriched | to: magic | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: the enriched method is thematically atomic (nuclear enrichment), not soul-fire transmutation. Forcing a create:haunting→enriched link reads as arbitrary flavor clash — a reactor accepting soul fire is a stretch. Red-team: a player would ask "why does a nuclear reactor care about the soul dimension?" No sensible answer.
- from: createnuclear:steel as Aeronautics structural alloy | via: fabricated structural part → aeronautics construction | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: reactor-grade steel plate is what an airframe's load-bearing spine is made of — you need the nuclear foundry running before you build serious ships

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea / lantern_fruit (high-effort drinks/foods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient coffee and cherry cheese pie are artisanal goods nobody else makes — the colony canteen pays coin for them
- from: trailandtales_delight:cheese_wheel / lantern_fruit crop | via: create:milling or create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the pitcher-plant flour or lantern fruit juice runs through a Create mixer on the way to a pie — the agrarian kitchen has one machine step in it
- from: lantern fruit (Sniffer-exclusive crop, seasonal feel) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: tone clash. Lantern fruit is an ancient/agrarian Sniffer crop — routing it into spirit fire or arcane infusion as a magic reagent reads as arbitrary. A player finds it growing from a prehistoric animal's sniff, not as a witch's ingredient. The economy (M-09) and Create (M-12) paths are already accepted above; magic is a stretch here.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron / _gold / _diamond (mid-tier gliders) | via: create:pressing (for reinforced sheets/frame) + create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a glider's wing-frame needs Create-pressed metal sheets — you hand-craft the iron prototype but you build the diamond rig on the factory floor
- from: vc_gliders:paraglider_netherite (top tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the netherite glider is the top tier but it's still a personal mobility item, not an industrial keystone. Sequenced assembly (M-06) is the deep multi-stage chain for genuinely flagship endgame gear; a glider is mid-tier adventuring gear at best. M-05 (already accepted at mid tier) is the right depth ceiling. Red-team: a player would expect M-06 chains for reactor parts, not for a hang glider.

== CHUNK COMPLETE ==
