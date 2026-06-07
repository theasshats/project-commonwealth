# Phase 2 candidates — chunk-13

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: ship/fortress loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: naval wreck hoards seed scarce regional goods (coins, trade-manifest documents) that combat specialists extract and sell on; the galleon as a combat-supply node
- from: ship loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sunken ruin chests carry one salt-water-corrupted magic reagent (e.g. a sea-touched source shard or echo fragment) that feeds ars imbuement — makes ocean exploration a secondary reagent route
- from: naval theme → aeronautics aesthetic | via: loot-seed (navigational chart / map fragment) | to: aeronautics | motif: no-motif | verdict: REJECT | reason: no-motif — "a ship structure gives a map to an airship destination" is thematic decoration, not a loop-advancing connection; no motif covers exploration-unlock-for-aeronautics

## dragonlib   [anchors: support/library (1)]
LEAVE — pure code library (GUI/net/registration framework for MrJulsen mods); 0 items player-facing, 0 recipe-types, no material surface to route through.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood / soul_gem | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's reagents (crystallized blood, soul gems) are already "soul-state" materials — spirit-fire transmutation into occult essences is the obvious downstream; the Companions mob-loop feeds the Occultism magic web
- from: companions mob drops (essence, crystallized_blood) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: hostile companion-mob drops as imbuement catalyst — gothic-alchemical vibe of Companions fits Ars' arcane infusion
- from: companions:relic_gold (boss drop — Sacred Pontiff) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold is a distinct rare boss metal; pressing it into Numismatics coin gives the Sacred Pontiff kill a concrete economy payoff and makes boss-looting feed the player currency pool (M-08 player-minted currency from a boss metal, not a sell-to-NPC)
- from: companions copper/nether/end_coin | via: recipe redirect → numismatics | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: companions' own coins are a competing currency system — the right fix is suppressing/removing them or aliasing them to Numismatics, not a weave; the Relic Gold route above (ACCEPT) is the cleaner M-08 candidate
- from: companion tesla deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: WEAK and superficial — the tesla/voltaic deco doesn't have an industrial-recycle story; M-11+M-02 already give Companions its 2nd anchor without forcing a thin crushing edge
- REWORK: dossier lists M-09 ("luxury good→coin") for the economy candidate — M-09 is retired; reclassify as M-08 (player-minted currency from Relic Gold boss drop) or M-34 (combat-route supply for boss essences). The "economy via numismatics — sell soul gems" candidate in the dossier is a bare sell link; REJECT it under the player-run ruling. Replace with the M-08 Relic Gold route (ACCEPT above) and M-11/M-02 magic routes.

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert readable item, no mechanics, no methods, no material surface; any recipe edge would be noise.

## fluid   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already at 2 anchors (Create-spine fluid tooling + aeronautics/logistics fluid transport). No forced third needed. Existing connections are coherent and method-grounded (its parts route through create:compacting/deploying/mechanical_crafting/mixing).

## zeta   [anchors: support/library (1)]
LEAVE — pure mod-framework library (Quark's module system backbone); 0 blocks/items player-facing, 0 recipe-types, nothing to route material through.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's Ice Crystal is an endgame keystone; routing it as a required input in a deep sequenced_assembly (cryo-compressor, refrigeration unit, ice-drive component) makes the boss fight a prerequisite for top-tier Create tech — the design north-star in practice
- from: mowziesmobs boss drops (wrought metal, sol_visage) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Sol Visage (sun-power mask) and wrought metal are mythic-tribal artifacts — perfect imbuement catalysts or ritual ingredients for high-tier Ars/Occultism spells; boss drops feed the magic web's most powerful recipes
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: ice_crystal is already ACCEPTed for M-06 (Create sequenced_assembly gate); double-spending it as a magic catalyst without a scarcity gate creates free arbitrage. Prefer sol_visage/wrought metal for the magic route (accepted above) and keep ice_crystal as the Create keystone.
- from: mowziesmobs boss economy (rare drops traded combat-specialist → tech/magic specialist) | via: emergent player trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mowzie bosses are dangerous enough that a combat-specialist farms and sells their drops; tech and magic players buy rather than fight — M-34 combat-route supply completing the boss's dual role
- REWORK: dossier lists M-08 ("economy via Numismatics bounty") as WEAK — this is a bare sell/bounty link and should be REJECTED under the player-run ruling (M-14 cut, NPC coin faucets disallowed). The real economy link is M-34 (boss-drop supply chain, player-to-player), now ACCEPT above.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight crops (lantern_fruit, pitcher_pod, torchflower seeds) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling ancient/sniffer-found crops into flour, pressed oils, or drink concentrates pulls the archaeological food chain into the Create spine — the pack's standard farming↔Create weave; one light step, appropriately scaled for everyday ingredients
- from: trailandtales_delight:cheese_wheel / cherry_cheese_pie | via: create_cheese:maturing | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese wheels that must mature under the right conditions (cold + time) before sale become an aging specialty — cheese production is a slower value-adding step, a natural trade good between food-farmers and players who need prepared food buffs
- from: trailandtales_delight dishes (ancient_coffee, cherry_blossom_tea) | via: colony delivery / MineColonies requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonist happiness/productivity requests for specialty beverages create repeating pull-demand from the food specialist; makes the coffee/tea chain feed the colony route without an NPC coin faucet
- from: trailandtales_delight economy candidate | via: bare sell | to: economy | motif: M-09 | verdict: REJECT | reason: M-09 retired; "cherry cheese pie is a luxury sell-good" is the ambient endpoint, not a weave. The M-35 aging route and M-28 colony-demand route above are the real connections.

## revelationary   [anchors: support/library (1)]
LEAVE — pure advancement-gated block-visibility library; no items, no recipe-types, no material surface. Its value to the pack is enabling Occultism otherworld block reveals (a hook for M-05/M-15 in dependent mods), not a direct weave candidate.

## gamediscs   [anchors: survival (1)]
- from: gamediscs:processor / redstone_circuit (console components) | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the processor/circuit are flavor items for a novelty toy; gating a downtime gadget behind a Create chain is contrived and punishes casual use of a fun item. The dossier already rates this WEAK — confirmed REJECT.
LEAVE — the disc-from-skeleton-kill loop is a self-contained easter egg; no coherent second pillar that a player would find sensible. Forcing a recipe edge onto an arcade console is a defect per the briefing's hard guardrail.

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already 2 anchors: Create-processed gear (sequenced_assembly/mechanical_crafting inbound) + aeronautics (jetpacks/drones = personal flight and transport). No forced third.
- from: create_sa:brass_jetpack → boss-key upgrade | via: KubeJS recipe gate (boss drop input) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Netherite or top-tier jetpack variant requires a boss-signature drop (e.g. mowziesmobs:ice_crystal or a Deeper Darker heart) as an assembly input — gating personal flight's best tier behind world-danger aligns with the design north-star and gives mowziesmobs a concrete tech payoff

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust and soul crystals from the Otherside are thematically pure occult material — spirit-fire transmutation into essences is the textbook M-11 move; the Otherside dimension feeds Occultism's dark magic rather than being a dead-end exploration reward
- from: deeperdarker:heart_of_the_deep (Warden drop) | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep gates the Otherside portal; routing it also as a keystone input in a high-tier Create sequenced_assembly (resonance dampener, sculk-pulse driver) ties the Warden fight into the tech spine — boss-key unlock pattern
- from: deeperdarker sculk/gloomslate block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate and sculk stone crush back to gravel + XP nugget — the standard lossy deco-recycle (M-04); already partly wired (create:crushing in inbound), just needs the explicit byproduct tuning
- from: deeperdarker:warden_carapace / sculk_bone | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Warden Carapace is a rare hostile-encounter drop from a dangerous dimension; imbuement into a high-tier Ars reagent makes the Otherside viable as a magic-production route (M-02 mob-drop reagent sink, endgame tier)
- from: deeperdarker Otherside economy (soul materials as scarce regional goods) | via: emergent player trade | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul_dust / soul_crystal / warden_carapace are only found in the Otherside (post-Warden-kill gating) — strong regional scarcity; the Otherside explorer is the regional supplier and must trade to non-explorer players who need the magic inputs
- from: deeperdarker economy | via: bare sell | motif: M-09 | verdict: REJECT | reason: M-09 retired; the "sellable for coin" candidate in the dossier is the ambient endpoint. The M-30 regional-scarcity gate (ACCEPT above) is the real economy connection.
- REWORK: dossier lists M-09 (luxury good → coin) as WEAK economy candidate — M-09 is retired; replace with M-30 (regional-scarcity gate, ACCEPT) for the economy anchor.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore / tin_ingot | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a new scarce regional metal processed through Create's crush-mix chain; the final press step mints it into Numismatics coin — the pack's scarcity-to-currency seam. The 3 biome-modifiers already bias Tin to regions, making minting a genuine specialization
- from: create_ironworks:steel_plate (structural) | via: aeronautics build recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel plate is a fabricated structural material — a load-bearing hull/airframe ingredient for heavier Aeronautics ships makes the metalworking tier matter for the logistics arm; steel gates the bigger, tougher ship tiers
- from: create_ironworks:bronze_ingot (alloy) | via: create:mechanical_crafting (aeronautics component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Bronze is the mid-tier alloy between iron and steel; routing it into Aeronautics drivetrain components (rotor housings, bearing mounts) gives the bronze tier a purpose beyond tools/armor and feeds the propulsion supply chain

## createlowheated   [anchors: Create (1)]
LEAVE — a single-block heating-mechanic tweak (Basic Burner + lowheated heat tier); no tradeable material surface, no items beyond the burner block itself, no magic/economy/survival hook. Its only join is "it consumes fuel" — but fuel consumption is M-26 (consumption sink), which is already the ambient behavior of any furnace-fuel chain; applying M-26 to a heater block is trivially true and not a real weave. Support-tier within Create.

## tipsmod   [anchors: support/QoL (1)]
LEAVE — client-UI loading-screen tips only; 0 items/blocks, 0 recipe-types, no material surface. Pack-authoring tool, not a gameplay content mod.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (control device) | via: create:sequenced_assembly or create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the advanced controller (precision mechanism + electron tubes in craft) is naturally a Create-built device; explicitly routing its recipe through create:sequenced_assembly or mechanical_crafting gives the aeronautics control tier a Create-gated build milestone — the control surface earns its place by requiring the spine's output
- from: create_tweaked_controllers → magic | via: forced | motif: no-motif | verdict: REJECT | reason: no thematic or method hook; a redstone-frequency controller has no coherent magic surface. No motif fits.

## create_jetpack   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create + aeronautics (pneumatic personal flight) is a tight, coherent 2-anchor story; no forced third.
- from: create_jetpack:netherite_jetpack | via: KubeJS recipe gate (boss drop input) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Netherite jetpack (lava-swim + flight) is the pack's most capable personal mobility item — requiring a boss-signature drop (e.g. deeperdarker:heart_of_the_deep or mowziesmobs:ice_crystal) as an assembly component gates lava-flight behind world-danger; survival feeds the aeronautics gear tier

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Crab Claw is already a rare mob drop used for brewing; routing it as an imbuement catalyst for a reach- or water-affinity spell is a short thematic leap that sinks the drop into the magic web without gating basics — one light step appropriate for an everyday drop
- from: friendsandfoes copper deco (copper_button, lightning_rod variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copper buttons/lightning rods are functional vanilla-plus items, not deco surplus; crushing them to nuggets is wasteful and doesn't serve any production story. The M-02 crab_claw route is the cleaner single weave.
- from: friendsandfoes:wildfire / illusioner drops | via: mob loot → magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Wildfire/Illusioner have vanilla-style loot (blaze rods, evoker fangs) already used elsewhere — repurposing those same drops as magic reagents double-spends common vanilla materials. The crab_claw (ACCEPT) is the cleaner, mod-exclusive entry point.

## libipn   [anchors: support/library (1)]
LEAVE — GUI/config/logging library for IPN; 0 items/blocks, 0 recipe-types, no material surface. Dependency only.

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / worm_gear (high-ratio kinetics) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: planetary and worm gears are real-world drivetrain components for high-torque applications; seeding them as required inputs in Aeronautics propeller/rotor assemblies gives the gear expansion a build purpose beyond decoration and ties kinetics depth to the logistics arm's drivetrain cost
- from: gnkinetics pure-Create parts → magic | via: forced | motif: no-motif | verdict: REJECT | reason: purely mechanical blocks with no arcane surface; no motif covers kinetic-gear-as-magic-catalyst. Any connection would be contrived.
- from: gnkinetics → economy | via: bare sell | motif: M-09 | verdict: REJECT | reason: M-09 retired; gnkinetics parts are intermediate production goods, not economy anchors in themselves. The M-24 aeronautics drivetrain route (ACCEPT) is the single coherent second pillar.

== CHUNK COMPLETE ==
