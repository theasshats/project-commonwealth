# Phase 2 candidates — chunk-04 (context-fed)

## jeed
OK — existing rows sufficient
(Zero content surface: 0 blocks / 0 items / 0 loot. JEI "Effects" documentation addon; its two recipe-types are JEI display providers, not craftable methods. Support role — no weave; CANDIDATES.tsv correctly holds no rows.)

## resourcefullib
OK — existing rows sufficient
(Pure library/API, 0 items/0 loot, no registered methods. Support role — nothing to weave.)

## tipsmod
OK — existing rows sufficient
(Client UI / pack-authoring tool, 0 items/0 loot. Could carry onboarding tips but that is content authoring, not a pillar weave. Support role.)

## rhino
OK — existing rows sufficient
(KubeJS JS engine, 0 items/0 loot. Invisible infrastructure — nothing to weave.)

## geckolib
OK — existing rows sufficient
(Animation/rendering API, 0 items/0 loot. Support library — no weave surface.)

## cubes_without_borders
OK — existing rows sufficient
(Client-only borderless-fullscreen QoL, 0 items/0 loot. Support role.)

## entity_texture_features
OK — existing rows sufficient
(Client texture-feature engine, 0 items/0 loot. Support role.)

## timm
OK — existing rows sufficient
(Traveler's Titles — client immersion overlay, 0 items/0 loot. Support role.)

## attributefix
OK — existing rows sufficient
(Attribute-cap bugfix lib, 0 items/0 loot. Support role — enables high-power gear to scale; no weave.)

## kiwi
OK — existing rows sufficient
(Snownee modding library, 0 items/0 loot. Support role.)

## wits
OK — existing rows sufficient
(/wits structure-identification debug command, 0 items/0 loot. Support role.)

## lithostitched__tectonic-3.0
OK — existing rows sufficient
(Tectonic terrain overhaul — pure worldgen, 0 blocks / 0 items / 0 biome-modifiers / 0 loot. Thematically adjacent to the scarcity foundation — continent-scale landmasses spread regional ores out, reinforcing M-30's premise — but there is no item/loot/recipe surface to route, so per the briefing's worldgen-only guardrail this is a leave, not a forced edge.)

## tfmg
NEW | from: tfmg:diesel / gasoline / lpg (refinery fuel barrels) | via: aeronautics/train bulk-haul as the move method | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: fuel is refined at the oil-region derrick but burned everywhere — moving barrels at fleet scale needs the logistics arm, giving aeronautics its distribution role (the existing M-13/M-30 rows establish supply+region but never the bulk-move edge).
NEW | from: tfmg:steel (structural blocks/beams, heavy stacks) | via: aeronautics/train bulk-haul | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: hull-grade steel is heavy and produced at the blast-furnace region; trading it to shipwrights elsewhere is exactly the bulk good the logistics arm exists to move.
NEW | from: tfmg:diesel / gasoline (engine fuel, consumed per run) | via: combustion-engine burn (native consumption) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: every airship/machine run burns the diesel down, so fuel demand never zeroes — the loop's closing arrow (distinct from M-13's supply line: M-26 is the demand-renewal edge, which §5 explicitly names "burned as fuel").
CHALLENGE | from: tfmg:steel_ingot (iron → blast furnace → steel) | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 reserves coin-minting for SCARCE REGIONAL metal; steel is a processing chain on abundant iron+coal, not region-locked, so "mint steel into coin" misuses M-08 — the regionally-scarce TFMG metals are nickel/lead/lithium (already routed via M-30), and steel's real economy role is the M-31 bulk good above. (One existing M-08 row already self-flags this; consolidating the verdict.)

## supplementaries
CHALLENGE | from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | verdict: REJECT | hook: the M-10 ash→imbuement row is split 5/5 and weak both ways — ash is an everyday burn-byproduct, and M-10 carries an explicit anti-gate rule (don't route basic components through arcane infusion). Ash's coherent magic home is the already-accepted occultism:spirit_fire route (M-11, ash = residue of burned organic matter → minor essence); the imbuement edge is redundant with it and arbitrary on a basic dust. Keep M-11, drop M-10.
NEW | from: supplementaries:rope (flax → rope) + flax fiber | via: minecolonies build/courier request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony's early builds and pens consume rope/fiber in volume; the flax-farming supplementaries player supplies the colony cheaper than hand-crafting — the colony-route demand for a basic, complementing the flax→sail (aeronautics) and flax→milling (Create) edges already logged.

## create_hypertube
OK — existing rows sufficient
(Already Create + aeronautics/logistics (2). The accumulated rows converge correctly: it moves players/entities, NOT item-bulk, so M-31 bulk-good and every "tube as cargo conduit" edge are rightly rejected (~7 votes), and the only defensible economy angle — M-33 service-for-hire, a transit engineer charging passage on the network they built/maintain — is already logged. Native create:sequenced_assembly is its inbound Create method. No missing routing.)

## createmetalwork
CHALLENGE | from: createmetalwork c:crushed_raw_materials/palladium (galosphere metal) | via: ars_nouveau:imbuement / occultism:spirit_fire | to: magic | motif: M-10 | verdict: REJECT | hook: routing crushed palladium dust into Ars imbuement as a raw reagent is arbitrary — palladium is a structural/industrial metal, not a gem/essence, so M-10 (which also carries the no-basics anti-gate) is the wrong motif. createmetalwork's coherent magic edge is the ALREADY-ACCEPTED M-03 ore-doubling: its crush+melt pipeline doubles galosphere/occultism ores like any other, serving the magic side's metal needs. Also flags the CLAUDE.md gotcha — galosphere:silver_ingot is c:ingots/PALLADIUM, never unify as silver — so a magic-reagent role on it is double-risk. Keep M-03, drop M-10.
NEW | from: createmetalwork:molten_steel / molten_netherite (high-tier cast alloy) | via: aeronautics/train bulk-haul | to: aeronautics | motif: M-31 | power: endgame | tone: ok | verdict: ACCEPT | hook: cast hull plate from the foundry is heavy flagship-tier material; a smelting specialist in an ore-rich region casts it and ships it to distant shipwrights — the logistics-required bulk good behind the M-23 hull supply already logged (M-23 = the build ingredient; M-31 = why it must be moved/traded).

## createblockchain
CHALLENGE | from: createblockchain:piggy_bank (coins in overworld/dungeon chests) | via: loot-seed | to: economy | motif: M-08 | verdict: REJECT | hook: seeding piggy-bank chest coins is an NPC COIN FAUCET — minted coins enter the economy that NO player pressed, which is exactly the player-run violation that retired M-09 and cut M-14/M-21 (#163/#240). M-08 is specifically PLAYER-minted currency; loot-dropped coins are the opposite. The split rows that ACCEPT this (incl. an M-34 "combat-supply" framing) miss that the supply is a faucet, not a player's labor. The legitimate coin edge for this mod is the existing currency_miner M-08/M-30/M-29 chain (FE → coin, gated by scarce geode Mining Cores). Drop the piggy-bank loot-seed economy edges.
NEW | from: createblockchain:currency_miner (FE-fed mint) + Mining Core throttle | via: minecolonies research/colony gate | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: a player can buy coins but not the CAPABILITY to mint — gate the currency_miner (or the Mining-Core refining step) behind a research/progression an item can't carry, making minting a non-transferable specialization (the anti-erosion wall M-37, complementing the M-08/M-30 supply-scarcity rows that gate the inputs but not the know-how).
