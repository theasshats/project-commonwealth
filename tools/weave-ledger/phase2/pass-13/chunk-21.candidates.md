# Phase 2 candidates — chunk-21

## blockui   [anchors: support/library (1)]
- LEAVE — pure UI framework library (XML window API for MineColonies/Structurize); zero items, zero recipe types, no content surface to weave.

## smokeleafindustries   [anchors: survival (1)]

### Candidate A — refined extracts/gummies → Numismatics luxury trade
- from: smokeleafindustries:*_extract / *_gummy (any finished strain product) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dealer villager already trades buds for emeralds; replacing/supplementing that with Numismatics coin makes the strain farm a real currency source and forces players to specialize the grow op.

### Candidate B — Create FE↔kinetic bridge (power the smokeleaf machines from Create)
- from: smokeleafindustries:generator (FE output) or FE-consuming machines | via: createaddition:charging (FE↔kinetic) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create rotational shaft powering a grow room's grinders and dryers is exactly the "industrial farm" fantasy; ties the self-contained FE island into the Create spine without retheming. (M-17 applies when it makes sense — this is a good fit since the mod explicitly ships FE machines.)

### Candidate C — raw hemp/bud through create:milling
- from: smokeleafindustries:hemp_crop (raw) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: smokeleafindustries already has its own manual_grinder + grinder chain for exactly this step; routing hemp through Create milling as well creates a duplicate path that confuses progression rather than enriching it. If B (FE bridge) is accepted, the Create tie is already there through power; a redundant crush path is noise.

### Candidate D — dealer/stoner village trades → Numismatics M-21
- from: smokeleafindustries dealer/stoner villager trades | via: villager trade → numismatics (M-21) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and maintainer leans no; also the villager trades are already the mod's own "economy" surface, and the Dealer is a custom villager not guaranteed to accept Numismatics coins natively — better handled by the M-09 coin-sale path (Candidate A) which doesn't require the provisional motif.

### Existing connections
- (none) — mod is 1-pillar; no existing weaves to audit.

## underground_village   [anchors: survival (1)]

### Candidate A — Stoneholm villagers as Numismatics economy nodes
- from: underground_village Stoneholm villager trades (explorer loot access) | via: numismatics trade-seam — seat Numismatics-priced buy/sell offers on Stoneholm professions | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and maintainer leans no. However, the underlying intent — making underground settlements an economy hub — is still worth flagging as a LEAVE-with-note below; the mod itself has no recipe type so the only route IS villager trades.

### Candidate B — underground exploration structure as a MineColonies supply/expedition node
- from: Stoneholm structure (discovered underground settlement) | via: thematic — MineColonies expedition quests or supply requests sent to/from the underground colony | to: aeronautics/logistics (MineColonies colony pillar) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif; this is a location/narrative weave with no recipe-type surface. No method to route through.

- LEAVE — no recipe types, no items. Only viable 2nd-pillar route (villager trade → economy) rides M-21 which is provisional/leans-no. The mod contributes worldgen variety and exploration discovery; forcing a weave edge adds nothing coherent. Revisit if M-21 is accepted at Gate 0.

## create_train_parts   [anchors: aeronautics (1)]

### Candidate A — brass/copper variants require Create-pressed sheets
- from: create_train_parts:train_step_brass / train_slide_brass / brass_sliding_window | via: create:pressing (pressed brass sheet as ingredient) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: a brass train step already implies industrial fabrication; requiring a pressed brass sheet to craft it makes the Create-train furniture feel like it came off a real factory line, not a crafting table. This is a light single-step (M-20 level, not a deep chain) appropriate for everyday deco fittings.

### Candidate B — andesite variants require Create andesite alloy
- from: create_train_parts:train_step_andesite / train_slide_andesite / andesite_sliding_window | via: crafting table (andesite_alloy as ingredient, vanilla crafting is fine here per palette rules) | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: andesite variants should cost andesite alloy (the standard Create material), not raw andesite — makes them feel like Create items rather than generic stone deco. Same light-step calibration as Candidate A.

### Candidate C — train crossing as a MineColonies/colony road component
- from: create_train_parts:crossing | via: thematic (colony road planning) | to: aeronautics/logistics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif; purely thematic with no recipe method to route through.

### Existing connections
- (none) — mod is 1-pillar aeronautics; no existing weaves to audit.

## alcohol_industry   [anchors: Create, survival (2)]

### Candidate A — finished liquors → Numismatics luxury coin
- from: alcohol_industry:beer / vodka / whiskey / tequila | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled spirits are the quintessential tavern trade good; making them Numismatics coin sources gives the entire Create distillery chain a coin payoff and ties a 3rd pillar without retheming anything. The processing depth (Create mixing → alcohol_boiling) matches mid-tier coin value.

### Candidate B — distillery byproduct as a magic solvent/reagent
- from: alcohol_industry:alcohol_base (excess fluid) | via: ars_nouveau:imbuement or occultism:spirit_fire (alcohol as a solvent/catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: distilled alcohol has been a universal solvent and alchemical medium for centuries; routing surplus Alcohol Base into a magic infusion or spirit-fire ritual as a catalyst is both thematically grounded and mechanically interesting. Calibrate as a one-step catalyst, not a deep gate.

### Candidate C — red-team on Candidate B
- Red-team: does "industrial distillery alcohol" clash with "arcane infusion"? The Ars/Occultism vibe is fantasy-alchemical; distilled spirits as an alchemical base has real-world precedent (tinctures, elixirs). Tone: ok — survives red-team.

### Existing connections audit
- create:filling + create:mixing inbound (already authored). OK — these are the natural Create inputs for the distillery chain; coherent and well-costed.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter; zero items, zero recipe types, no player-facing content surface. Pure developer runtime dependency.

## xaerominimap   [anchors: support (1)]
- LEAVE — client-side minimap HUD; zero items, zero recipe types, no gameplay material. Navigation QoL only; no weave surface exists.

## cerbons_api   [anchors: support/library (1)]
- LEAVE — shared code library for CERBON's boss mods; zero items, zero recipe types, no content surface. Genuine zero-content code library.

## gamediscs   [anchors: survival (1)]

### Candidate A — gaming console components via Create mechanical crafting
- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is for a mod's own *flagship* item built in its own machine gated on Create parts — the console's processor isn't gamediscs' "flagship machine," it's a craft component for a novelty toy. Routing it through Create mechanical crafting is a forced edge: it adds friction to a downtime item without any design payoff. The mod's only "power" is whimsy; gating whimsy behind Create processing is anti-fun.

### Candidate B — game discs as rare Numismatics collectible trade good
- from: gamediscs:game_disc_* (rare drops from skeleton-kill quirk) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the disc-drop mechanic (Skeleton kills Bee/Slime/Frog/Rabbit) is deliberately quirky and random; making discs a coin trade good creates an incentive to grind the mechanic, which turns a whimsical easter egg into a farm loop. That ruins the tone. Leave the acquisition as a happy accident.

- LEAVE — novelty toy with no resource role; no coherent weave surfaces without either forcing a Create gate onto a fun trinket or turning a whimsical drop into a grindable economy input. Both paths harm the mod's purpose.

## northstar   [anchors: Create, aeronautics (2)]

### New candidates — 3rd pillar (economy)

#### Candidate A — Create-processed titanium/tungsten → Numismatics coin minting
- from: northstar:titanium_ingot / northstar:tungsten_ingot (scarce off-world metals) | via: create:crushing (ore-doubling first) → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: titanium and tungsten are the hardest-to-reach metals in the pack (require a rocket and off-world mining); minting them into the highest-value coins creates a natural economy specialization where the "space engineer" is also the pack's premier minter. Scarcity is already enforced by the exploration gate — no additional anti-arbitrage mechanism needed.

#### Candidate B — northstar:advanced_circuit as a high-tech Numismatics trade good
- from: northstar:advanced_circuit | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: advanced circuits are expensive to fabricate (circuit engraver + deep chain); selling them to other players for coin makes the space-tech specialist the pack's electronics supplier. One-step: the circuit is the finished good, no further processing needed.

#### Candidate C — northstar:biofuel as an Aeronautics engine fuel
- from: northstar:biofuel | via: TFMG/Create fuel → aeronautics engine intake (M-13) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar already ties Create + aeronautics (rockets ARE the transport layer); biofuel produced off-world feeding back into the pack's airship/vehicle engines closes a satisfying loop — the off-world base supplies the pack's fuel supply chain. (Verify biofuel is the right fluid type for M-13 engine intakes; if it's a non-standard fluid, may need a TFMG distillation conversion step.)

#### Candidate D — northstar:martian_steel_ingot as an Aeronautics structural alloy (M-23)
- from: northstar:martian_steel_ingot | via: aeronautics construction recipe (M-23) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: martian steel is explicitly a structural alloy (name implies load-bearing metallurgy); using it in top-tier Aeronautics airframe/hull recipes makes the off-world supply chain a prerequisite for the largest/most capable ships — exactly the depth M-23 is designed to add. Northstar is already aeronautics-anchored so this deepens an existing pillar rather than adding a new one; still worth recording as a strengthening connection.

#### Candidate E — northstar:astronomical_reading as a magic catalyst
- from: northstar:astronomical_reading (a "read" of celestial/planet positions) | via: ars_nouveau:enchanting_apparatus or occultism:ritual | to: magic | motif: M-22 (lunar/celestial reagent — astronomical readings are celestial data) | power: mid | tone: ok | verdict: ACCEPT | hook: an astronomy reading is literally a record of celestial alignment — feeding it as a catalyst into a lunar ritual or star-attuned enchanting apparatus is thematically airtight (M-22 covers "celestial events feeds a method"). This opens a 3rd pillar (magic) for northstar without retheming any of its content.

### Existing connections audit
- create:compacting, create:crushing, create:filling, create:mechanical_crafting, create:mixing, create:pressing, create:sandpaper_polishing, create:sequenced_assembly, create:splashing, createaddition:liquid_burning — ALL inbound. OK — these are well-motivated: northstar metals and components are precisely what Create processes. No arbitrary or mis-costed connections detected. The breadth is appropriate for an endgame flagship mod.

== CHUNK COMPLETE ==







