# Phase 2 candidates — chunk-07

## railways   [anchors: Create, aeronautics (2)]
- REWORK: aeronautics anchor is sound (rail logistics IS the transport arm). OK — connections sound.
- from: railways:locometal blocks (brass/copper/iron-wrapped) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Scrap-locometal you don't need crushes back to plates + an XP nugget — Create recycling loop fits the material perfectly.
- from: railways:conductor_cap (brass/iron variant) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: conductor cap is already a Create-adjacent mid-tier item; adding sequenced_assembly depth on top of an existing Create-method item piles Create-on-Create without a second-pillar gain. Not a new cross-system weave.
- from: railways:benchcart / rail infrastructure | via: loot-seed (nether-fortress/structure chest) | to: economy | motif: M-15 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — rail infrastructure seeds in hostile-loot chests is odd; the mod's loot=yes flag is likely track/cosmetic drops, not a structural weave.

## terrablender   [anchors: support (1)]
- LEAVE — zero-content worldgen library; no items/blocks/methods; weave belongs on dependent mods.

## everycomp   [anchors: support (1)]
- LEAVE — runtime decoration-compat generator; its content is namespaced under host mods; weave those hosts, not the generator.

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:netherite_jetpack | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: A netherite jetpack that lets you swim through lava should demand a sequenced-assembly chain — a derpack:incomplete_jetpack_frame intermediate step anchors it properly as a deep Create endgame item.
- from: create_jetpack:jetpack (brass tier) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: already uses vanilla crafting; redirecting to mechanical_crafting is a recipe-only tweak with no second-pillar benefit — still Create-only. Not a cross-system weave.
- from: create_jetpack:jetpack (brass) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Imbuing the backtank-jetpack with an arcane attunement (source_gem + allurite catalyst) unlocks a levitation glyph synergy — pneumatic flight boosted by arcane infusion is a "of course" pairing for a magic-plus-Create pack.

## rightclickharvest   [anchors: support (1)]
- LEAVE — pure behavior/interaction QoL; no items, no recipes, no material surface.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:thorium_ore / thorium_ingot | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium ore crushing doubles yield + drops a radioactive byproduct — Create ore-doubling on a scarcity-gated regional ore fits the pack's scarcity→production loop cleanly.
- from: create_new_age:advanced_circuit | via: create_new_age:energising (+ northstar:engraving) | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced circuits are exactly the high-precision electronics that should drive Aeronautics control surfaces and autopilot mechanisms — the energiser produces them, the engraver refines them, and Aeronautics consumes them as a drivetrain/control input.
- from: create_new_age:corium (reactor waste) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Reactor-melted corium transmuted through spirit fire into a corrupted essence for high-tier occultism rituals — radioactive waste as a forbidden-magic catalyst is thematically coherent and gives the reactor a loop-closing magic sink.
- from: create_new_age:basic_motor | via: create_new_age:energising | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the basic motor is the most mundane electrical component; gating it into aeronautics drivetrain recipes would price low-tier flight gear too high — depth scales with power (anti-guardrail).
- from: processed thorium / energised outputs | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Thorium→coin is trivially true of any scarce ore and adds no structural loop-closing.

## immersive_paintings   [anchors: support (1)]
- LEAVE — pure decorative-expression mod (custom canvases); no material with a coherent Create/magic/economy routing; forcing a frame-crafting edge would be busywork.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone output) | via: create:deploying / gearshift config | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wire the season sensor's redstone signal into a Create gearshift so automated farms switch between crop types or greenhouse shutters open/close by season — survival pressure directly drives Create automation.
- from: seasonal scarcity (out-of-season produce) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Out-of-season produce is trivially sellable; its loop-closing value comes from the M-16 Create connection, not a separate coin link.
- REWORK: survival anchor is the correct primary; the M-16 Create link above is the priority second anchor to author. OK — no existing authored connections to rework yet.

## citadel   [anchors: support (1)]
- LEAVE — animation/spawn-rate library for sbom_xela mobs; no player-facing items or methods.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling barley and oat in a Create millstone to produce flour slots Farm & Charm's grain chain right into the Create processing spine — breadmaking now needs the tech pillar, and the millstone becomes a food-chain node.
- from: farm_and_charm:butter / farm_and_charm:eggs (surplus) | via: farm_and_charm:mincer → extradelight:vat | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Butter/eggs are trivially sellable; the real weave is the Create milling link above.
- from: farm_and_charm:barley (grain) | via: vinery:apple_fermenting / alcohol_industry:alcohol_boiling | to: economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Barley → fermentation → barley ale / spirit is a natural processing-chain pull (M-12 covers useful intermediates); the brewed output becomes a trade-worthy luxury good for MineColonies provisions and the Numismatics economy without being a bare "sell for coin" link — the chain has steps.
- from: farm_and_charm:fertilized_farmland | via: create:mixing (bonemeal + compost) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fertilized farmland is a placed block, not a craftable material to route through a method — method-pull doesn't apply here.

## create   [anchors: Create (1)]
- N/A as a recipient — Create is the method library; it IS pillar #1. OK — connections sound (Create is the hub every other mod weaves into).

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Transmuting a cryptid claw through spirit fire into a feral essence for occultism rituals — folkloric beast drops feeding dark-magic rituals is exactly the tone match.
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Amber — fossilized organic matter with latent energy — is a natural arcane infusion catalyst; imbuing it into a Source-rich reagent ties Brazil Legends' unique material to the magic pillar.
- from: brazil_legends:big_tongue | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: "big tongue as a cutting-board ingredient" is thematically odd (folkloric cryptid organ → food); tone clash, forced.
- from: brazil_legends:amber_pearl / amber_shard | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Amber is sellable by default; the M-10 magic infusion link is the distinctive use.

## lithostitched   [anchors: support (1)]
- LEAVE — worldgen library; no items/blocks; weave belongs on dependent mods (Tectonic etc.).

## formationsnether   [anchors: survival (1)]
- from: formationsnether structures (chests/altars, loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seed occultism/ars_nouveau reagents (raw_essence, silver_coin, cultist-themed components) into formation altar/sanctuary loot — Nether ruins become a magic-reagent acquisition route, tying exploration pressure to the magic pillar.
- from: formationsnether structures | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Dropping coins in chests is the most vanilla possible thing; M-02 magic-reagent loot is the distinctive weave here.

## steves_lava_chicken_music_disc   [anchors: support (1)]
- LEAVE — single joke music disc; no material surface; forcing a recipe edge would be noise.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack backpack (leather/dragon/netherite tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The dragon or netherite backpack is an endgame personal-logistics item — a sequenced-assembly chain (derpack:incomplete_backpack_frame) that threads Create parts into its construction makes it feel earned as a late-tier explorer kit.
- from: travelersbackpack:backpack_tank | via: create:filling / create:emptying | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: A deployer-filling station for the backpack's fluid tanks — Create's filling/emptying deployer applies fluids to the worn tank, bridging the portable fluid buffer into the Create fluid network. Natural deploy-application pairing.
- from: travelersbackpack (aeronautics expedition role) | via: aeronautics (thematic anchor, no recipe needed) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: the aeronautics connection is thematic only (explorer on a ship carries a backpack) — there's no structural part or construction recipe involved. M-23 is for hull/airframe materials, not carried gear. No-motif match for the actual link; reject as no distinctive weave.

## configuration   [anchors: support (1)]
- LEAVE — config-screen library; no gameplay content.

## northstar   [anchors: Create, aeronautics (2)]
- REWORK: aeronautics anchor is correctly set (rockets ARE the transport/off-world logistics arm of the economy). OK — connections sound.
- from: northstar:titanium_ingot | via: create:crushing (titanium ore) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Titanium ore crushing doubles yield — a regional off-world metal folded into the ore-doubling chain exactly as the scarcity model intends.
- from: northstar:advanced_circuit | via: northstar:engraving | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: An engraved advanced circuit fed into an Ars Nouveau enchanting apparatus as a precise arcane computation substrate — high-tech circuits as a magic infusion ingredient bridges the space-tech tier into the magic pillar coherently.
- from: northstar:biofuel | via: createaddition:liquid_burning | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar's biofuel is already in the liquid-burning recipe chain; explicitly routing it as an Aeronautics engine propellant gives the off-world crop harvest (biofuel source) a direct propulsion loop — survival → production → aeronautics fuel.
- from: northstar:tungsten_ingot | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Tungsten as a rare metal is trivially mintable; the create/magic weaves above are the distinctive links.

## dataanchor   [anchors: support (1)]
- LEAVE — developer data/networking library; no player-facing content.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice infrastructure; no items/blocks/methods to weave.

== CHUNK COMPLETE ==
