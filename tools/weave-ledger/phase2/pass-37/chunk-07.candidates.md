# Phase 2 candidates — chunk-07

## endrem   [anchors: survival (1)]

**Existing connections:** none beyond its survival anchor (exploration/progression gate to the End).
No existing ≥2-anchor status; proposing new cross-system links.

- from: endrem:undead_eye / endrem:corrupted_eye | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a ritual transmutation lets a magic specialist craft a specific eye using undead/void reagents — the End is partially unlockable through the magic route, not pure RNG exploration, and it consumes a thematic occultism material in the process
- from: endrem:guardian_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian_eye (aquatic theme — prismarine/water) imbuement with source energy and lapis produces an arcane variant; the enchanting apparatus consumes Source and a guardian-themed ingredient, weaving exploration-loot into the magic spine
- from: endrem:ancient_eye (one rarest eye) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: one or two of the 16 eyes can be assembled through a derpack:incomplete_eye multi-step chain (Create parts as intermediates) — the End is partly accessible via deep industrial craft, but only for the rarest one or two so exploration intent is preserved; depth scales with endgame tier
- from: endrem:nether_eye | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: a nether-themed eye passes through Create's haunting (soul-fire transmutation) — a soul-infused eye variant fits the nether vibe perfectly and gives a Create-native path to one of the nether-type eyes without trivializing the set
- from: endrem:magical_eye / endrem:black_eye | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: making multiple eyes craftable via sequenced assembly undermines the whole point of endrem — 16 unique sources, 12 needed — reducing the exploration gate to a crafting exercise; a single assembler-path eye is fine (ACCEPT above), two or more erodes the design intent; reject broad M-06 application here
- from: endrem eye (any) | via: sell/numismatics | to: economy | motif: none applicable | power: mid | tone: clash | verdict: REJECT | reason: economy link as "sell the eye" is a bare sellable endpoint (retired M-09); no demand-gating mechanism proposed; reject

## bagus_lib   [anchors: support/library (1)]

LEAVE — genuine zero-content code library; zero blocks, zero items, zero loot. No player-facing surface to weave. Auto-pulled dependency for baguchi's mods only.

## createblockchain   [anchors: economy, Create (2)]

**Existing connections:** economy (the Numismatics coin faucet) + Create (FE from Create-side mechanical_crafting/mixing; miner built via those methods). Already ≥2 anchors.

REWORK check on existing connections:
- economy anchor (coin faucet via FE→miner): REWORK RISK. The currency miner is effectively an NPC-adjacent automatic coin source — it mints coins from FE + geode cores, not from player-produced value. Under the player-run economy ruling (rework #163/#240), a machine that autonomously converts energy into Numismatics coins is borderline NPC-faucet behavior. The design intent says coins should trace back to player-controlled scarce material; the miner's geode-core scarcity *partially* addresses this (cores are worldgen-limited), but the FE input is freely produced. Flag for review: is the geode-core rate-limit sufficient to keep this player-run, or does it need a stronger processed-metal input requirement?
- Create anchor: OK — it uses create:mechanical_crafting and create:mixing in its own construction recipes.

New weave candidates:
- from: createblockchain:mining_core (worldgen consumable) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mining cores (geode ore) processed through a crusher yield a coin-press byproduct (residue or refined sliver) — tying the minting input to the Create ore-doubling chain makes coins trace back through the Create spine, not just raw FE; a crushed core is a richer thematic fit (precision machined coin-blanks) than a raw bucket of coolant
- from: createblockchain:currency_miner | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the currency miner itself (as a non-trivial economic machine) assembled through a sequenced_assembly chain — derpack:incomplete_currency_miner step — instead of plain crafting, making the coin-factory a Create build achievement rather than a simple craft; depth appropriate to its economic power
- from: createblockchain miner FE | via: createaddition:liquid_burning | to: Create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: require the miner's FE source to come from a TFMG/CreateAddition fuel-burning generator (diesel/coal gas), so the coin supply chain runs through the fuel production line — coins now trace: regional ore → refined fuel → FE → miner → coins; closes the scarcity→economy loop via M-08/M-13 together
- from: createblockchain:cryotheum_coolant | via: create:mixing | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: coolant production as a Create mixing recipe (e.g. water + a processed mineral → cryotheum coolant) pulls the operational upkeep of the coin miner into the Create production chain — byproduct circularity: the coolant is an ongoing consumable linking coin output to active Create processing
- from: createblockchain:piggy_bank coins | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: piggy banks spawning in dungeon chests (loot=yes already) seed starter coins into dangerous spaces — the combat-supply loop: players risk danger to find the coins that kickstart the economy; links betterdungeons/adventure danger to the economy arm without an NPC faucet



