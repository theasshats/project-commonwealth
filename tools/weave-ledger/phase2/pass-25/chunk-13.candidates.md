# Phase 2 candidates — chunk-13

## vinery   [anchors: survival (1)]
- from: vinery wines/ciders (finished effect-bearing bottles) | via: create:milling (grape mash as pressed intermediate → create:mixing to blend spirit-fortified wash) | to: Create | motif: M-12 | power: mid | tone: ok — fermentation processing chain is a natural fit for Create mixing/milling | verdict: ACCEPT | hook: a player building a Create distillery routes grape mash through the mixer before bottling; the vineyard feeds the machine floor
- from: vinery wines/ciders | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; wine is trivially sellable, no structural distinctiveness
- from: vinery apple_mash / grape_juice | via: create:mixing (ferment into a solvent/wash usable in another recipe step) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw apple mash run through a Create basin with sugar yields fermented wash — the everyday processing step that bridges the farm to the tech floor; pairs with any Create basin cooking chain
- REWORK: current anchor is survival (1) — the M-12 Create chain ACCEPT above closes the 2nd anchor gap. No existing connections to REWORK (none authored yet).

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — pure behavior mod, zero items/blocks/methods; no material surface to route; genuine zero-content QoL library.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok — themed ores are standard crushing fodder; a player who mines jade expects to process it the same way they process copper | verdict: ACCEPT | hook: jade ore goes into a crushing wheel and yields crushed jade + XP nugget; ore-doubling without forced thematic clash
- from: samurai_dynasty steel (c:ingots/steel) | via: create:crushing / tfmg:hot_blast (merges into the pack's steel web via c: tags) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai steel tagged c:ingots/steel joins the same Create metal web as TFMG; a steel-spine player can pull from either source
- from: samurai_dynasty Yokai drops (akaname_tongue, etc.) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — Yokai are literally folklore spirits; feeding their drops to spirit_fire is thematically inevitable | verdict: ACCEPT | hook: the akaname's tongue thrown into spirit-fire yields a foliot essence; hunting Yokai fuels the occultism progression
- from: samurai_dynasty Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 spirit_fire is the cleaner and more thematically precise path for these drops; stacking M-10 imbuement on top is redundant — one weave per material tier; revisit only if spirit_fire path is already saturated
- from: samurai_dynasty spirit_stone blocks | via: create:crushing (M-04, crush back to stone/gravel + xp nugget, lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-recycle is a blanket deco-family pass item; not unique signal for this mod specifically; defer to the deco-crushing batch pass
- REWORK: current anchor survival (1) — M-03 + M-11 ACCEPTs give Create + magic; that closes the 2nd anchor gap.

## occultism   [anchors: magic (1)]
- from: occultism:spirit_trade (summoned merchant) | via: spirit_trade mechanic routing otherworld goods into Numismatics economy | to: economy | motif: M-18 | power: mid | tone: ok — spirit traders as a magic logistics node feeding the coin economy is a genuine structural loop-closer | verdict: ACCEPT | hook: a bound Djinni merchant provides otherworld reagents that only the magic specialist can supply to the trading floor; magic→economy distribution node
- from: occultism:crushing (ore-doubling method) | via: occultism:crushing as parallel to create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: occultism's crushing wheel doubles ores the same way Create's does — the magic specialist can supply doubled metals without a Create workshop; two parallel routes, one outcome
- from: foreign mob/boss drops (Alex's Mobs, Yokai, Cataclysm bosses) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: every mob-drop reagent in the pack has a home — spirit_fire transmutes them into tier-appropriate essences; the magic pillar is the universal organic-drop sink
- from: occultism:dimensional_mineshaft (bound Djinni miner) | via: M-18 spirit logistics as aeronautics/economy substitute | to: economy | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: M-18 already covers spirit logistics; this is the same motif applied twice — the spirit_trade ACCEPT above is the more distinctive structural link; dimensional miner is production not distribution
- OK — connections sound: occultism is already flagged ≥2 by the dossier via occultengineering Create bridge (M-03/M-05) and the M-11 spirit_fire sink. The three ACCEPTs above confirm and extend those; no existing connections need REWORK.

## zeta   [anchors: support/library (1)]
- LEAVE — pure mod-framework library; zero items/blocks/content; the only biome-modifier is framework scaffolding. Weave runs through Quark, not Zeta.

## structurize   [anchors: support/library (1)]
- LEAVE — MineColonies build engine dependency; no items/blocks of its own; its weave is MineColonies' weave.

## create_connected   [anchors: Create (1)]
- from: create_connected kinetic_battery / inventory_bridge (logistics extensions) | via: thematic — these are the build-blocks for Aeronautics ship logistics and control systems | to: aeronautics | motif: M-24 | power: mid | tone: ok — kinetic battery storing rotational energy for ship engines and inventory_bridge for ship storage management are natural Aeronautics build components | verdict: ACCEPT | hook: a ship-builder uses kinetic_battery to buffer drive power for burst propulsion and inventory_bridge to pipe cargo between ship and dock; Create-internal parts cross into aeronautics without re-theming
- from: create_connected copycat_* blocks | via: cosmetic — copycats wear any block texture including samurai spirit_stone or Vinery deco, making them a decoration cross-system skinning sink | to: survival (decoration/build) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — cosmetic skinning has no motif; a cross-system decoration pass is a sanctioned support role, not a weave candidate; drop
- REWORK: current anchor Create (1). The M-24 ACCEPT above adds aeronautics. No existing connections to REWORK.

## createlowheated   [anchors: Create (1)]
- from: createlowheated:basic_burner (solid-fuel heat) | via: survival pressure — charcoal/fuel scarcity makes basic_burner a survival-pressure gated input; crops/biomass as renewable fuel (seasonal tie) | to: survival | motif: M-16 | power: everyday | tone: ok — winter scarcity of crops means fuel for burners is itself a seasonal pressure; the burner makes heat a managed survival resource, not an AFK background process | verdict: ACCEPT | hook: when Serene Seasons kills crop yields in winter, charcoal for the basic_burner becomes scarce — the Create production floor is throttled by survival pressure; heat is the bottleneck that ties the two pillars
- from: createlowheated fuel intake | via: smokeleafindustries generator biomass as fuel | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: smokeleafindustries generator produces FE not solid fuel; the join is a category error at this tier — createlowheated burns solid fuel in furnace slots, not FE. The M-16 seasonal-fuel ACCEPT is the cleaner single link.
- REWORK: current anchor Create (1). M-16 ACCEPT gives survival as 2nd anchor.

## configuration   [anchors: support/library (1)]
- LEAVE — pure config-screen library, zero items/blocks/methods; no content surface.

## zombiemoon   [anchors: survival (1)]
- LEAVE — no unique drops, no items, no methods; tougher undead mobs are pure pressure content with no material surface to weave. Forcing a drop reagent would invent an edge the mod doesn't carry.

## mffs   [anchors: Create + survival (2)]
- OK — connections sound: M-05 (native-method gating on focus_matrix via electron_tube) and M-06 (sequenced-assembly chains for projector/interdiction_matrix) are authored and confirmed in kubejs/server_scripts/recipes/60-mffs.js. The dossier correctly identifies this as the pack's gold-standard Create weave. No new link needed; no REWORK.

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — client rendering optimization, zero items/blocks/methods; no content surface.

## moreoverlays   [anchors: support/QoL (1)]
- LEAVE — client HUD overlays only, zero items/blocks/methods; no content surface.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot chests (structure loot tables) | via: loot-seed — seed whale-back chests with Aeronautics/Create progression items (propeller schematics, rare alloy plates, control chips) to make sky whales a destination that rewards ship-tech advancement | to: aeronautics | motif: M-15 | power: endgame | tone: ok — a flying leviathan as an airship-gated destination is the most coherent thematic pairing in the pack; players build an airship TO reach the whale, then loot ship parts off it | verdict: ACCEPT | hook: the sky whale floats unreachable on foot; a Create Aeronautics ship is the key; what you find aboard advances your next ship tier
- from: sky_whale_ship loot chests | via: loot-seed — seed with rare magic reagents (Ars source gems, occultism essences) to gate a magic-tier unlock behind airborne exploration | to: magic | motif: M-02 | power: endgame | tone: ok — otherworldly creature carrying arcane drops is thematically clean | verdict: ACCEPT | hook: the whale-back carries bottled sky-essence (a loot-seeded source_gem cluster or rare Ars reagent) — magic players fund an airship to reach it
- from: sky_whale_ship loot | via: loot-seed bounty payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; while a bounty board target is possible, the M-15 aeronautics and M-02 magic loot-seeds are more structurally distinctive; adding an economy layer here is a third weave on a 0-item mod and dilutes the signal

## do_a_barrel_roll   [anchors: support/client QoL (1)]
- LEAVE — pure elytra flight-feel client mod, zero items/blocks/methods; touches vanilla elytra not Create Aeronautics ships; no content surface to weave.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors Heavy / Steampunk armor (iron-block and piston recipes) | via: create:pressing / create:mechanical_crafting — gate the Heavy set on Create-pressed iron plates and the Steampunk set on mechanical-crafted brass components, so endgame armor costs the Create spine | to: Create | motif: M-05 | power: mid-endgame | tone: ok — the Steampunk set practically demands a Create gate; Heavy armor as forged plate-metal fits Create pressing exactly | verdict: ACCEPT | hook: forging the Heavy chestplate needs a pressed iron plate out of the Create workshop; the Steampunk set is mechanical-crafted from brass fittings; armor progression passes through the Create floor
- from: immersive_armors Divine armor (wither-skull based) | via: ars_nouveau:armor_upgrade — finish the Divine set through Ars armor_upgrade with a magic catalyst, crossing it into the magic web | to: magic | motif: M-10 | power: endgame | tone: ok — a "Divine" armor set upgraded through an arcane apparatus is an obvious thematic pairing | verdict: ACCEPT | hook: the Divine chestplate is forged first in vanilla, then upgraded at the enchanting apparatus with a source gem infusion — only a magic specialist can complete it
- from: immersive_armors Bone/Slime/Prismarine sets (vanilla-mat sets) | via: numismatics — finished armor sets as luxury smith goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; armor is common equipment a player wears, not a specialization-defining distribution node; the Create + magic ACCEPTs are the structural weaves
- REWORK: current anchor survival (1). M-05 + M-10 ACCEPTs give Create + magic as 2nd and 3rd anchors — strong two-system close.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries FE machines (grinder / extractor / liquifier / synthesizer) | via: createaddition:charging / FE↔kinetic bridge — power the smokeleaf machine network from Create rotational generation, folding the hemp farm into the Create spine | to: Create | motif: M-05 | power: mid | tone: ok — FE-powered processing machines fed by a Create mechanical generator is a standard Create-add bridge; "the hemp refinery runs on the windmill's surplus" is coherent | verdict: ACCEPT | hook: a Create player with surplus rotational energy powers the smokeleaf synthesizer bank — the hemp farm joins the tech floor instead of sitting isolated
- from: smokeleafindustries raw hemp buds | via: create:milling — route raw buds through a Create millstone as an alternate to the native manual_grinder; M-12 processing-chain pull | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: hemp fed into a Create millstone yields milled hemp dust as a crafting intermediate; the Create spine processes the farm's output the same way it handles wheat or flint
- from: smokeleafindustries refined extracts/gummies | via: numismatics sell (dealer villager already proves a sell-loop) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; dealer/stoner villager trades are already built in; adding Numismatics pricing is trivially sellable, not a distinctive structural link; the Create bridges are the load-bearing anchors
- from: smokeleafindustries strain seeds (25 varieties; crop biodiversity) | via: serene seasons / M-16 — certain strains grow only in specific seasons or biomes, making the strain portfolio a seasonal-pressure driven farm | to: survival | motif: M-16 | power: everyday | tone: ok — seasonal crop restrictions fit the pack's scarcity-driven farm model; a winter-locked indica strain vs. a summer sativa is immediately legible | verdict: ACCEPT | hook: the most potent strains only grow in summer; winter restricts the farm to hardy varieties — the survivalist's seasonal crop pressure applies to the hemp tier too
- REWORK: current anchor survival (1). Three ACCEPTs: M-05 Create, M-12 Create, M-16 survival-seasonal. The Create links are the meaningful new anchors; M-16 deepens the existing survival anchor.

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — pure client rendering bugfix, zero items/blocks/methods; no content surface.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors metal/iron door variants | via: create:crushing — crush back to iron nuggets + xp nugget (M-04, lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a wrought-iron barn door crushed in the Create wheel recovers iron nuggets and a sliver of XP — the standard lossy deco-recycle; fits cleanly as part of the deco-family crushing pass
- REWORK: current anchor support/decoration (1). M-04 ACCEPT gives Create as 2nd anchor (light but correct — this is the standard deco-family method).

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — pure client inventory-input behavior, zero items/blocks/methods; no content surface.

== CHUNK COMPLETE ==
