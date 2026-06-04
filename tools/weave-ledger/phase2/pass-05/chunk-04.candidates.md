# Phase 2 candidates — chunk-04

## terralith   [anchors: survival (1)]
- LEAVE — pure data-driven worldgen overhaul; no items, blocks, or methods of its own. Its weave is indirect (regional terrain that other mods' biome-modifiers and spawns land on). No recipe edge is coherent.

## tide   [anchors: survival (1)]
- from: tide rare/biome-locked fish (e.g. tide:abyss_angler, tide:alpha_fish) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare catches from void/deep-ocean biomes are scarce goods — a coast specialist sells what inland players can't farm; Serene Seasons already gates some catches seasonally, making scarcity real.
- from: tide:abyss_angler / void-fish | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: rustic-naturalist angling tone vs. occult transmutation is a moderate stretch; the fish are thematically creatures, not arcane components — the pairing would need lore justification that isn't there. Dossier rates it WEAK; red-team wins.
- from: tide raw fish stream | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish → fishmeal via millstone is thematically plausible but the fish are better funneled through FD:cutting (already wired) into food rather than turned into fertilizer dust; depth/reward ratio too low for everyday material; M-09 is the stronger anchor.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack; no items or methods of its own, only authors recipes onto existing Create types. It deepens the Create pillar internally. No material to route elsewhere; no method to pull through. Attempting a 2nd-pillar route would be routing Create's own outputs, not this mod's.

## solclassic   [anchors: survival (1)]
- LEAVE — ambient server-side eating rule with no items to route (except the basket, which is a carry container, not a material). Its link to the economy pillar is systemic (food variety → trade demand), not a recipe edge. A crafting-table weave onto the basket would be trivially thin. No coherent method-routing weave exists.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:corrupted_wart | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a corrupted undead plant-wart transmuting into a dark essence through spirit fire is exactly the "kill-loot → arcane input" rhythm the occultism pillar wants; thematically the corruption angle maps cleanly onto occult ritual.
- from: rottencreatures:frozen_rotten_flesh | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: frozen rotten flesh is a low-rarity everyday drop; M-10 explicitly forbids gating basic components behind infusion; the power tier rules this out. A lighter step (M-11 spirit_fire) covers the arcane sink at the right depth.
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-infused zombie flesh run through Create's haunting (soul-fire) yields a soul-charged byproduct — thematically resonant (undead + fire/soul), and M-19 is the canonical Create→occult seam; gives an everyday bestiary drop a Create machine purpose.
- from: rottencreatures mob heads (decorative) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mob heads crushing back into bone/gravel fits M-04 technically, but mob heads in this context are decorative trophies (a different player arc from deco stone blocks); treating them as bulk recyclable material feels wrong for a combat bestiary. Leave heads as trophy/deco.

## t_and_t   [anchors: survival (1)]
- from: t_and_t village-structure loot tables / villager trades | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: 16 biome-specific village variants are natural trade-hub anchors — wire their loot chests and merchant trades toward Numismatics so each village type sells something regionally characteristic; exploration pays off as economic discovery. Method is loot/trade-table editing, not a machine recipe, but M-09 covers sellable goods broadly and this is the coherent form.
- from: t_and_t conquerable outpost/fort as unlock gate | via: crafting-table (boss-key pattern) | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: M-15 requires a boss *drop* as the gate item; t_and_t outposts spawn pillagers and loot chests, not a unique boss with a signature drop. Forcing a fake "pillar key" drop onto an outpost captain is contrived and conflicts with M-15's "must stay thematically sensible" rule.

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice (finished seafood delicacies) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardian roll and fugu require hunting a dungeon boss and precise cooking — high-effort luxury goods; a coastal-specialist player sells to inland crew who can't access ocean monuments; fugu's poison-risk framing makes it a premium commodity naturally.
- from: oceansdelight:cut_tentacles / raw guardian drops | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: tentacles/raw drops are already well-routed through FD:cutting into food; running them through a Create Millstone doesn't produce a coherent intermediate — the processing chain already has a home (FD), and creating a parallel Create route for everyday ocean drops dilutes rather than weaves. M-09 via finished dishes is the cleaner 2nd pillar.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (block) | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: a meteor that fell from the sky crushing into iron/nickel fragments + an XP nugget byproduct is exactly how a Create pack treats fallen-star rocks — the machine is the natural tool for "what is this strange ore-like material?" and it gives the otherwise-deco meteor a functional reward for hunting impact sites.
- from: Blood Moon / Blue Moon active state | via: occultism:ritual (event-as-catalyst) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual that can only be completed under a Blood Moon (hostile-surge) or Blue Moon (luck) is an atmospheric constraint that makes lunar events matter beyond survival — the celestial calendar gates arcane progress. M-22 explicitly covers all lunar events; this is its cleanest application. Power: mid (ritual cost, not endgame).
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: space moss is worldgen flavor (soft green blocks from meteor sites); routing it through arcane infusion would make it function as a magic reagent, but it's an everyday-tier block with no inherent magical property — the theme asks "why is this moss arcane?" with no good answer. The meteor-crushing (M-04) and lunar-ritual (M-22) are the coherent seams.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic gem ores doubling through a Create crusher is the standard ore-integration move — yields a bonus gem fragment byproduct; keeps the mining↔machine loop intact and folds samurai_dynasty's regional ores into the Create resource web. ⚠ Note: do NOT unify samurai_dynasty silver as c:ingots/silver (CLAUDE.md galosphere caveat applies equally here — check if samurai_dynasty silver is tagged separately from galosphere palladium before any unification step).
- from: samurai_dynasty Yokai drops (akaname_tongue, etc.) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are spirit-world creatures in Japanese folklore — an akaname tongue or oni essence transmuting through spirit fire into an occult essence is thematically grounded in the mod's own lore; the kill-loot→ritual pipeline M-11 was built for.
- from: samurai_dynasty:steel ingot (c:ingots/steel) | via: create:crushing → aeronautics airframe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai-forged steel is structurally load-bearing steel — using it as an airframe/hull ingredient folds a non-Create steel source into the aeronautics construction web; players who specialize in samurai_dynasty ores supply structural material to shipbuilders.
- from: samurai_dynasty Immortal drop (storm-lich / boss-tier) | via: boss-key gate | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the Immortal is a thunderstorm-spawned event mob, not a designated boss with a documented unique signature drop in the dossier; applying M-15 without a confirmed boss-drop item risks inventing a fake gate. Flag for human review once the Immortal's drop table is confirmed.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grinding grain in a windmill-powered Create Millstone before it can become flour is the most natural "farms feed factories" step in a Create pack; barley and oat are the bread-chain inputs and milling is their logical intermediate step — players build Create grain infrastructure before they can bake at scale.
- from: farm_and_charm animal-husbandry surplus (butter, eggs, cured meats) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the chicken-coop/trough husbandry loop produces surplus eggs, butter, and quality meats that exceed personal consumption — a natural trade good for a crew economy; a farm specialist supplies the kitchen specialists. Fits M-09 luxury-good→coin without forcing a machine step.
- from: farm_and_charm:barley (grain, seasonal) | via: create:milling → vinery fermentation | to: Create/economy | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Serene Seasons seasonal gating on barley harvest is real (M-16 pattern), but the seasonal angle is already captured by the M-12 Create-milling route above; adding a separate M-16 row on the same grain risks over-weaving one item. Defer — if the M-12 grain-milling weave is authored, a separate seasonal-fermentation hook can be added as a bonus, but it shouldn't be the primary 2nd-pillar anchor.

== CHUNK COMPLETE ==









