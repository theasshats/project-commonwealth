# Phase 2 candidates — chunk-17

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — zero-content client animation library; 0 blocks, 0 items, no recipe surface. Sanctioned support role; weave is impossible and would be noise.

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — zero-content multiplayer ping utility; 0 blocks, 0 items. Sanctioned support role; no material to route.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns ocean-village loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: sea-village ruins pay out a coin (or bounty receipt) — coastal exploration feeds the trade economy, makes airship sea-travel purposeful (M-14 bounty→drop economy; loot=yes confirmed)
- from: tidal-towns ocean-village loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the structures use vanilla blocks only and have no mob-drops of their own; seeding magic reagents into a vanilla-block chest loot has no thematic anchor (an ocean village doesn't explain arcane drops)
- REWORK: existing survival anchor is fine. The loot-seed to economy (M-14) is the natural 2nd.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw / big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: folkloric creature parts (claw of the werewolf-dog, giant tongue) are exactly the kind of raw-spirit fuel Occultism consumes — transmuting them into a spirit essence feels thematically inevitable
- from: brazil_legends:amber_shard / amber_pearl | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: fossilized amber crackling with trapped life energy is a plausible arcane infusion substrate; power-read — amber_shard is a mid-tier drop, one light imbuement step is correctly sized
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare fossilized gem from legendary creatures — clear luxury curio for a Numismatics shop; low-floor trade good that rewards hunting the folklore mobs
- from: brazil_legends:bloodmoon_sickle | via: create:haunting | to: magic | motif: M-19 | power: endgame | tone: ok | verdict: REJECT | reason: the sickle is the mod's flagship weapon; routing it through create:haunting (soul-fire) would transmute it into something else — that destroys the item rather than deepening it; M-19 is for materials, not signature weapons
- from: brazil_legends:bottle_with_saci | via: occultism:spirit_trade | to: magic | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: "Saci in a bottle" is a self-contained novelty item — trading it via a spirit would be thematically interesting but the item has no defined drop-rate or recipe depth; the hook is cute but the value exchange is arbitrary (what does a spirit want with a mischievous imp in a bottle?). Reserve — not impossible, but no-motif fit is clean.
- REWORK: no existing 2nd anchor. Accepted above: magic (M-11 + M-10) and economy (M-09) give it three system touches from one — that's strong. Flag magic as primary 2nd anchor.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs stone/brick/concrete roof blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600+ blocks is an exhaustive crushing pass that adds enormous recipe-list noise for a trivially small gain; the motif is correct in principle but the sheer block count makes this low-value unless a wholesale deco sweep is done for all Macaw's blocks at once — flag for batch treatment at that stage, not now
- LEAVE — decoration is a sanctioned anchor; the M-04 candidate is flagged for a future batch-deco sweep, not an individual weave now.

## galosphere   [anchors: survival, magic (2) — via M-07]
- OK — connections sound. The two anchors are: survival (cave biomes/worldgen + palladium scarcity) and magic (M-07 allurite/lumiere as the reserved attunement catalysts). Both are well-established.
- from: galosphere:silver_ingot (=palladium, c:ingots/palladium) | via: create:crushing (ore-doubling) + numismatics mint | to: create, economy | motif: M-03 + M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a scarce regional metal — ore-doubling in a Create crusher is its natural processing step, and refined palladium coin is the textbook scarcity→economy pipeline; ⚠ never tag as c:ingots/silver (palladium only)
- from: galosphere deco bricks (allurite bricks, pink salt blocks, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the crystal/salt deco has its own identity as a beautiful building set; crushing it back to gravel feels tone-wrong for a wonder-cave aesthetic (the tone clash is real). Unlike mcwroofs stone, these blocks have magical resonance — they should be *ends*, not recycled waste.
- REWORK: existing M-07 magic weave is strong. Add M-03/M-08 for palladium as the economy/Create arm (accepted above).

## glitchcore   [anchors: support/library (1)]
- LEAVE — pure loader-abstraction library; 0 blocks, 0 items, no gameplay surface. Backs Serene Seasons (survival pillar) as a hard dep; no weave possible or needed.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / gasoline / LPG (fuels) | via: M-13 — TFMG distillation → aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG is the natural oil-refining backbone for airship propulsion — a player who runs ships MUST build TFMG's distillation tower; the fuel supply line is load-bearing for the aeronautics pillar (reserved reagent: tfmg:diesel/gasoline/lubricant are already M-13 reagents per WEAVE-LEDGER.md — this formalizes the weave)
- from: tfmg:steel (processed scarcity metal) | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is a deep-chain refined metal (iron → coke → blast furnace); refined steel bars/ingots are natural high-value Numismatics sell-goods, rewarding industrial specialization
- from: tfmg combustion engine / flywheel | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the combustion engine IS an engine — requiring it as a drivetrain component in higher-tier Aeronautics propellers/engine mounts is exactly what M-24 calls for; deepens the airship build without being arbitrary
- from: tfmg:steel structural plate/truss | via: aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel rebar/frame blocks are the canonical industrial hull material for anything bigger than a starter airframe; makes large ships actually cost fabricated steel
- from: tfmg vat biomass/plant inputs | via: create:mixing (fuel alcohol alt) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: TFMG's vat biomass route is internal to TFMG's own industrial chain; forcing a survival-food weave through an oil refinery vat is tone-wrong (biofuel ≠ food chain) and doesn't advance the loop
- REWORK: existing Create-only anchor is correct but incomplete; aeronautics (M-13+M-24+M-23) and economy (M-08) give it 3-system coverage. Flag aeronautics as the primary 2nd anchor.

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Nether ruins loot seeded with a coin or bounty token — running Formations Nether structures earns currency, making Nether exploration feed the trade loop (loot=yes confirmed; the structures are the only content surface)
- from: formationsnether ritual-altar structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ritual altars are thematically correct places to find magic reagents (occultism spirit essences / ars source gems in chests) — exploring corrupted Nether ruins yields arcane materials, giving the altars a system purpose beyond flavor
- REWORK: no existing 2nd anchor. M-14 (economy) and M-02 (magic via loot-seed) are the two natural arms — both via loot-seed, distinct motifs.

## createfisheryindustry   [anchors: Create, survival (2)]
- OK — connections sound. Already 2-anchor: Create (kinetic bait traps + mechanical peeler) and survival (seafood food chain + diving gear).
- from: createfisheryindustry:seafood_chowder / lobster_soup / cooked_lobster | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: automated cannery output (chowder, grilled lobster) is the pack's premium seafood trade good — a "fisher" player specialization selling to the market; the food chain closes into the economy
- REWORK: economy (M-09) is the clean 3rd weave; everything else already wired.

## createlowheated   [anchors: Create (1)]
- LEAVE — a single-block mechanics tweak (Basic Burner) that deepens the Create heat model; no items or materials to route beyond solid fuel (vanilla). Support-tier within Create; a forced weave would be noise.

## vinery   [anchors: survival (1)]
- from: vinery wines (apple_wine, cherry_wine, etc.) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged effect-bearing wines are the pack's luxury food trade goods par excellence — Vinery's whole design is a high-effort consumable; pricing at a Numismatics counter is thematically perfect and gives the vineyard craft an economic payoff
- from: vinery:apple_mash / grape_juice | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: an Apple Press running off a Create shaft is more industrial-agrarian than the grapevine_pot jump animation; grapes/apples into juice via create:pressing is a believable automation path that weaves the winery into the Create spine
- from: vinery wines (chorus wine specifically) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: chorus wine is a flavor name, not a mechanically magical item; forcing arcane infusion on wine feels arbitrary — wine's role is luxury food/trade, not reagent. The tone mismatch (vineyard vs arcane lab) is real.
- REWORK: no existing 2nd anchor. Economy (M-09) is the primary 2nd; Create (M-12) is the 3rd. Both accepted.

## modernfix   [anchors: support/performance (1)]
- LEAVE — pure JVM/loader performance patch; 0 blocks, 0 items. Sanctioned support role; no weave possible.

## sliceanddice   [anchors: Create, survival (2)]
- OK — connections sound. sliceanddice IS the M-12 bridge between Create and Farmer's Delight; its 2-anchor state is correct by design.
- No new weave candidates — it is connective tissue, not a content mod.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical mushroom caps | via: farmersdelight:cooking or extradelight:oven | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a forager brings wild mushrooms to the Create-automated kitchen — running rare caps through Farmer's Delight cooking pots or the ExtraDelight oven produces high-value dishes, weaving the mycelial harvest into the processing chain
- from: mushroomquest deadly/mythical caps (agarikon, death cap class) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a poisonous or mythic mushroom transmuted in spirit fire into a raw occult essence — death caps as reagents is a real-world folk-magic trope; fits the organic↔magic motif cleanly
- from: mushroomquest rare mushroom variants | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: rare mushrooms as trade goods is plausible but the economy angle is weaker than the magic and cooking routes — the mod already gains 2 anchors above (Create via M-12, magic via M-11); a third sell-good weave on top of two stronger ones adds diminishing returns. Reject to keep the web clean; revisit if a "herbalist trade" economy slot opens in v0.9.
- REWORK: no existing 2nd anchor. Accept M-12 (Create/survival) and M-11 (magic) as the two adopted anchors.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable item (no mechanics, no recipe surface, no material output); novelty easter-egg. A forced recipe edge would be noise with no loop value.

## comforts   [anchors: survival (1)]
- LEAVE — small vanilla-recipe QoL mod (sleeping bags/hammocks); crafted from wool/string with no notable foreign-material join surface. Any weave (e.g. dye via Create) would be noise on a simple comfort item. Sanctioned survival support.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (machined barrels/munitions through Create cutting + casting) and aeronautics (arms Aeronautics ships/contraptions) are the correct 2-anchor state.
- from: cbc_at heavy-autocannon / rocket-pod tier | via: boss-drop or MineColonies unlock gate (M-05) | to: Create (depth/gating) | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy autocannon and rocket pod are flagship armament — gating them behind a boss drop (a boss-key input in the assembler recipe) fits the pack's "complex tech unlocks via boss drops" progression and makes heavy ship armament a milestone, not a day-one purchase
- REWORK: no structural rework needed; the M-05 gating above is a depth addition, not a missing pillar.

## bigsignwriter   [anchors: support/client-UI (1)]
- LEAVE — client-side GUI utility (large-text signs); 0 blocks, 0 items, no gameplay surface. Sanctioned support role.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure recipe/tag compatibility glue mod for the Let's Do food family; registers no items or blocks. Its existence already performs M-12-style food-web unification. A forced 2nd pillar would be double-counting what the bridged mods already do.

== CHUNK COMPLETE ==
