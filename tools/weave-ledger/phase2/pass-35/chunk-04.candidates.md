# Phase 2 candidates — chunk-04

## sound_physics_remastered   [anchors: support/client (1)]
- LEAVE — pure client-side audio simulation; zero items, zero methods, zero loot. No content surface to weave. Genuine code-behaviour mod.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure-overhaul only; 0 items, 0 loot tables, no methods. The mod reshapes the arena aesthetic but adds no material, drop, or recipe surface to weave through. End-game challenge is its contribution; nothing to route.

## astikorcartsredux   [anchors: survival (1)]

Power-read: the mod has 67 items (six cart types × wood variants), no registered recipe-types, no loot table. Cart function is low-tech field-labour: plow/reaper/seed-drill replicate manual farming at a mount-speed throughput; supply cart is portable double-chest. The gap is that all cart craft uses vanilla table + vanilla materials with no Create tie at all.

Method-pull candidates examined:

- **create:pressing / mechanical_crafting — gate the metal-edged implements behind Create-processed parts.** The plow blade and reaper blade are the only physically-demanding components in the set — an iron/bronze plow-blade pressed from sheet metal before it's assembled into the wooden frame is very coherent (farm tool, real-world analogue). This is a light single-step (M-05/M-20 territory) — the wood frame stays vanilla; only the metal implement part is gated. Thematically: "your horse-drawn plow's blade came off the Create pressing bench" is sensible rather than forced. Tier: everyday/mid implement — a light one-step gate is appropriate, not a deep chain.

- **M-32 byproduct → input — reaper crop output feeds a Create milling or Farmers Delight cutting chain.** The reaper auto-harvests rows of crops; its bulk harvest is the natural feedstock for Create milling (wheat → flour → dough chain) or FD cutting. This isn't a recipe on astikorcartsredux items; it's a loop descriptor: "carts produce bulk grain → Create milling consumes it." Not an actual method-routing weave (no recipe on a cart item), so this reads more as a design observation than a ledger candidate. Reject as a standalone candidate.

- **aeronautics / economy via M-31 bulk-goods logistics.** Carts are by definition a bulk-goods mover (double-chest storage + field harvest). For the aeronautics arm, the framing would be "pre-aeronautics land logistics: carts bridge field→warehouse before you have ships/trains." That's a narrative framing, not a method-routing (no recipe connects carts to aeronautics items). Reject as not a weave.

- **Create via create:cutting — log → wood planks → cart via saw instead of axe.** Carts are already crafted from planks; the sawmill path doesn't add a new gate, just an alternative material source. Noise. Reject.

- **M-05 native-method gating: gate the iron-bearing implements on Create-pressed iron/brass sheets via create:pressing.** The plow and reaper are the "implements with metal parts" — everyday/mid tier. A one-step press gives the craft a Create node without over-engineering a mundane farm tool. Tone check: this is a rustic-agrarian mod. A Create forge pressing a plow-tip is tonally fine (blacksmithing is ancient; Create's pressing is the in-universe analogue). Red-team: forcing a Create gate on a horse cart feels like over-engineering — BUT only the metal implement part is gated, not the whole cart. Survives the red-team at one light step.

ACCEPT:
- from: astikorcartsredux plow/reaper (metal implement) | via: create:pressing | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the plow blade and reaper cutting edge are Create-pressed iron sheet, so the first farm machine that scales your harvest still needs the forge

REJECT:
- from: reaper bulk harvest → Create milling chain | via: n/a (narrative only) | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: no recipe on a cart item; this describes a player workflow, not a method-routing weave — the reaper isn't a recipe input/output node
- from: carts as pre-aeronautics land logistics | via: n/a | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: no method bridges carts to aeronautics items; framing is narrative, not a weave
- from: log → plank → cart via create:cutting | via: create:cutting | to: Create | motif: no-motif | verdict: REJECT | reason: alternative source path, not a gate; adds no loop depth; no-motif

## galosphere   [anchors: survival, magic (2)]

galosphere already has two anchors confirmed: survival (cave biomes/palladium regional ore) and magic (allurite/lumiere shards are the reserved M-07 attunement catalysts, established in scripts 33/80/97). Reviewing existing connections and seeking further weaves.

Power-read: loot=yes, 127 blocks, 171 items, 9 biome-modifiers. Mid-tier cave content. Palladium is a scarce regional ore (c:ingots/palladium — NOT silver; CLAUDE.md critical note). Shards already woven (M-07). Additional surfaces: combustion table (functional block), echo altar (functional block), preserved_transform_recipe (amber preservation), amber items, pink salt blocks, sterling armor (palladium leather smithing upgrade), Silver Bomb (AoE anti-undead).

Existing connection review (≥2 anchors):
- survival anchor: SOUND — cave biomes, palladium ore, hostile mobs (Sparkle/Spectre/Mole).
- magic anchor via M-07: SOUND — allurite/lumiere reserved as attunement catalysts, authored in existing scripts. Do not reassign.

New candidates:

- **Create ore-doubling: galosphere:palladium_ore → create:crushing → crushed palladium + byproduct (M-03).** Palladium is scarce and regional; routing it through the crusher gives ore-doubling reward and folds the metal into the tech spine. Tone: "smelt it or crush it for more" is exactly the Create value proposition; palladium being a second regional metal (alongside the TFMG/CBC metals) fits. Power: mid (regional ore). Red-team: galosphere's palladium is already c:ingots/palladium-tagged, so the crushing recipe targets the ore block directly — no ambiguity with occultism silver. ACCEPT.

- **Economy via M-08: palladium ore → Create-processed → player-minted Numismatics coin.** Palladium is scarce, regional, and has a real-world monetary connotation (it's a precious metal in reality). A palladium-based coin tier enriches the player mint beyond the default metals. Power: mid. Red-team: we already have Create's base metals for coins; adding palladium risks coin-tier inflation. Counter: palladium is region-locked, so minting it is a *specialization* (only the region with palladium can mint it) — that's exactly M-08's stated value (minting as specialization). Motif M-08. ACCEPT.

- **Create crush-recycle of deco blocks: galosphere allurite/lumiere/amethyst bricks → create:crushing → crushed stone + xp nugget (M-04).** The block set is large (127 blocks). Giving the decorative brick cuts a crush-back route closes the loop for over-built players. Power: everyday deco. Red-team: allurite/lumiere shards are reserved M-07 reagents — crushing *bricks* (not shards) should NOT yield shards (that would be a backdoor around M-07's attunement gate). Safe if the crush output is gravel/cobble + xp nugget only, not shards. ACCEPT with note: crush output must not yield shards.

- **Preserved transform as a reagent-creation route: place items in galosphere's amber preservation (preserved_transform_recipe) — could cross-mod items become reagents via amber.** The amber_shard/amber_pearl are unique outputs of galosphere's preservation mechanic. Cross-mod: could preserve a foreign material in amber to create a hybrid reagent? This is highly speculative — the preserved_transform_recipe is typically for galosphere's own "preservable" items. No established motif for "amber encases a foreign material." No-motif. REJECT.

- **Silver Bomb → M-34 combat-supply / M-02 mob-drop reagent.** The Silver Bomb (4 palladium + TNT) is an AoE anti-undead thrown weapon — it's already a combat expendable. As a *consumable* combat supply (M-26 consumption sink), it renews demand for palladium on undead-heavy servers. Power: mid. Red-team: this is already achievable via the existing recipe; the question is whether it's a *weave* or just noting that the item gets used up. A consumption-sink weave would want a recipe that sources the bomb from a *second* system's input. It's a native galosphere recipe using vanilla mats; the consumption-demand observation is real but there's no cross-system method to route through. No-motif as a new weave. REJECT.

REWORK check on existing connections: OK — connections sound. Both anchors are correct and the M-07 authoring is established. No rework needed.

- from: galosphere:palladium_ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushed palladium yields more ingots than smelting — worth routing the regional ore through the crusher
- from: galosphere:palladium_ingot (Create-processed) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is a real monetary metal — a region holding the ore becomes the mint specialist for a scarce coin tier
- from: galosphere deco bricks (allurite/lumiere/amethyst) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-built crystal blocks crush back to gravel and XP, not wasted — note: must NOT yield shards (those are reserved M-07 catalysts); gravel/cobble + xp nugget only
- from: amber items via preserved_transform cross-mod reagent | via: galosphere:preserved_transform_recipe | to: magic | motif: no-motif | verdict: REJECT | reason: no established motif for amber-encasing a foreign material as a reagent; speculative and the preserved_transform_recipe's foreign-item behavior is unverified
- from: galosphere:silver_bomb consumption | via: native galosphere recipe | to: survival→economy | motif: no-motif | verdict: REJECT | reason: consumption is real but no cross-system method routes through it; the demand observation doesn't compose to a new ledger weave

## trashslot   [anchors: support/QoL (1)]
- LEAVE — inventory UI mod with zero items, zero loot, zero methods. No content surface. Genuine zero-surface QoL tool; nothing to weave.

## createadditionallogistics   [anchors: Create, aeronautics (2)]

Already at ≥2 anchors (Create kinetics + aeronautics logistics seating). Reviewing existing connections.

Power-read: 156 blocks, 157 items, loot=yes. Lazy shafts/cogwheels (lag-relief kinetics) and flexible shafts (directional freedom), plus short/tall seats for Stock Keepers. Already uses create:splashing (dye removal). A strong Create + aeronautics citizen.

New candidate scan:

- **M-24 mechanical component → aeronautics control: flexible shafts as a required component in aeronautics propulsion routing.** The flexible shaft is the exact component type M-24 envisions — a mechanical linkage for drivetrain/control surfaces. A recipe gate requiring a brass_encased_flexible_shaft in an Aeronautics engine-mount or thruster linkage would make the shaft a load-bearing aeronautics part. Power: mid (brass tier). Tone: "the ship's thruster uses omnidirectional flexible shafts to route torque around the hull" — very sensible. Red-team: CAL was added for performance relief AND train seats; forcing an aeronautics recipe gate could feel arbitrary if flexible shafts are already used freely in any Create build. But M-24 is about a *specific* aeronautics recipe requiring the component — it doesn't restrict other use. ACCEPT.

- **Economy via M-26 consumption: lazy shafts/cogwheels are bulk-expendable in large Create builds, so demand never zeroes.** This is an ambient consumption observation, not a cross-system method. The consumption happens naturally (players build big shaft runs). No new recipe surfaces. Not a weave. REJECT.

REWORK: OK — connections sound. Create + aeronautics anchors are correct. The create:splashing inbound weave (dye removal) is properly noted. No weak connections to flag.

- from: createadditionallogistics:brass_encased_flexible_shaft | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: routing torque around a ship's hull needs flexible shaft joints — the brass flexible shaft becomes a required drivetrain part in higher-tier Aeronautics builds
- from: lazy shafts/cogs as bulk expendable | via: n/a (ambient consumption) | to: economy | motif: no-motif | verdict: REJECT | reason: ambient use, not a method-routing weave; consumption happens with no cross-system method to cite

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — zero items, zero loot, no recipe methods, pure door-interaction behaviour. No content surface to weave.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]

Power-read: 847 blocks, 847 items, loot=yes. Pure deco completeness — slab/stair/wall cuts of vanilla blocks that lack them. Crafted via grid or stonecutter. The stonecutter affinity makes them natural candidates for create:cutting (the mechanical saw is Create's stonecutter analogue).

Method-pull:

- **create:cutting — give MSSW variants mechanical-saw recipes for bulk production and automation (M-12 processing-chain pull / M-04 adjacent).** Players building at scale want to automate the production of these cuts; a mechanical saw recipe (Create's cutting bench) is the standard pattern for decorative-cut blocks. This is 847 items but the pattern is uniform — one batch of KubeJS cutting recipes covers all variants by category. Tone: absolutely natural. Red-team: does this over-privilege a deco mod by giving it a Create anchor? No — it earns the anchor by making the decoration *producible at factory scale*. Power: everyday (building material). ACCEPT.

- **create:crushing — gravity-bearing cuts (concrete_powder/sand/gravel variants) crush back to base material + xp nugget (M-04).** A gravity-physics slab of sand/gravel that breaks on fall damage should crush back to its constituent. This is a small but coherent recycling edge. Red-team: 847 items is large, but only the ~dozen gravity variants need this; the rest are stone/wood. Scoped to gravity variants only. ACCEPT.

- **M-32 byproduct → input: MSSW log cuts (log slab/stair) from wood-processing chain.** Log slabs could be a *byproduct* of the woodcutting method (slabs from plank cuts), feeding into the pack's wood-processing loop. But MSSW log cuts are independently craftable from whole logs; the chain already closes. Not a strong method-routing weave. Reject as not adding cross-system depth.

- from: more_slabs_stairs_and_walls cuts (all block types) | via: create:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: any decoration-cutter block you can make at a stonecutter can be made in bulk with a mechanical saw — the builder's decoration supply chain runs through the Create spine
- from: more_slabs_stairs_and_walls gravity-type cuts (sand/gravel/concrete_powder slabs-stairs-walls) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a gravel-slab wall that breaks apart crushes back to gravel and a dust of XP — nothing wasted in the forge
- from: MSSW log slabs as wood-processing byproduct | via: n/a (native craft) | to: Create | motif: M-32 | verdict: REJECT | reason: MSSW log cuts are independently craftable and don't sit downstream of a processing chain; no cross-system byproduct routing

## create_hypertube   [anchors: Create, aeronautics (2)]

Already at ≥2 anchors. Uses create:sequenced_assembly (inbound weave confirmed). Reviewing existing connections.

Power-read: 4 blocks, 6 items, loot=yes. Uses create:sequenced_assembly — so hypertube_entrance is already assembled through the Create spine. The transport mechanic moves players/entities through a kinetic tube network.

New candidate scan:

- **M-24 mechanical component → aeronautics control: hypertube_accelerator as a required precision component in Aeronautics point-to-point boarding infrastructure.** Airships need boarding tubes (players boarding/disembarking at speed). A recipe requiring the accelerator in an Aeronautics docking or boarding module would cross the two. Tone: "ship docking uses hypertube accelerators to launch/receive passengers" — conceptually coherent in a Satisfactory-flavoured industrial pack. Power: mid (brass-sequenced-assembly). Red-team: the accelerator is a ground-network component; forcing it into a ship recipe conflates two distinct transport types. The tube network and the airship are complementary, not the same thing — they're both transport but the scale/context is different. The weave is possible but feels thin. Reject on tone grounds.

- **M-05 native-method gating: hypertube_entrance is already via create:sequenced_assembly — this is established.** No new edge; the inbound weave is correct. 

- **M-31 logistics-required: the hypertube is by definition the bulk-personnel logistics tool that justifies a specialist.** But the motif requires a *recipe* tying the good to logistics demand; "you need fast travel" is ambient. Not a method-routing. Reject.

REWORK: OK — connections sound. Create + aeronautics anchors correct; sequenced_assembly inbound weave is the right production method for a precision transit device.

- from: create_hypertube:hypertube_accelerator in Aeronautics boarding/docking recipe | via: aeronautics construction recipe | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: accelerator is a ground tube-network part; grafting it into a ship docking recipe conflates two transport scales — the connection is thin and forced; better to leave the two as complementary distinct transport layers
- from: hypertube as logistics-required bulk personnel mover | via: n/a (ambient use) | to: aeronautics | motif: M-31 | verdict: REJECT | reason: ambient usage framing, not a method-routing; no recipe connects tube items to an aeronautics demand gate

## comforts   [anchors: survival (1)]

Power-read: 33 blocks, 33 items (sleeping bags + hammocks in 16 colors + rope_and_nail), no methods, loot=yes. Pure vanilla-recipe wool/string items. The only real second-anchor candidate is whether a dyed/wool item can earn a Create or economy tie.

Method-pull:

- **create:deploying (M-20) — apply a dye via deployer to craft colored variants instead of the 16-recipe grid explosion.** This is a utility simplification for automated dye-application, not a weave that adds cross-system depth. It doesn't earn a new anchor; it's a recipe-form convenience. Reject as insufficient depth.

- **M-26 consumption — sleeping bags and hammocks wear out/are consumed on travel, creating repeat demand.** The actual mod doesn't implement durability on sleeping bags (they're reusable). No consumption mechanic exists; the observation is aspirational. Reject.

- **Survival → aeronautics: sleeping bags as portable bedroll for ship crew (a narrative use).** This is a player-use observation, not a method edge. No recipe. Reject.

- **M-35 maturation/value-add: hammocks as a craft requiring seasoned rope (an aged/processed intermediate).** Rope is vanilla string. No aging/maturation mechanic exists on rope. The idea would require a new aging step — not something comforts provides. Reject.

The dossier's conclusion (leave — no coherent 2nd anchor) holds after deeper examination. The mod is a survival-QoL convenience; forcing a second anchor on wool-and-string sleeping bags would be noise.

- LEAVE — no coherent second anchor survives power-read: wool/string sleeping bags have no cross-system method surface; all candidate edges are ambient narrative or non-existent mechanics on the items

## zeta   [anchors: support/library (1)]
- LEAVE — mod-framework library; 0 blocks, 0 items, no recipe methods, no loot. Genuine zero-content code library (Quark's module-system backbone). Nothing to weave.

## createbigcannons   [anchors: Create, aeronautics (2)]

Already at ≥2 anchors. Reviewing existing connections and seeking further weaves.

Power-read: 139 blocks, 213 items, loot=yes, 20 c:tags (steel/bronze/cast_iron/nethersteel ingots/nuggets/blocks), and 19 registered recipe-types (cartridge_assembly, melting, fuzing, tracer, deployer variants). Deep Create-machine + artillery with Aeronautics ship-mounting. The mod *provides* steel/bronze/cast_iron/nethersteel (c:ingots/*) — it is a metals supplier for cross-mod use.

Existing connection review:
- Create anchor: SOUND — deep Create multi-machine build chain (compacting/cutting/mechanical_crafting/milling/mixing/sequenced_assembly all used). The foundry melting + cast workflow is proper Create-depth gating.
- Aeronautics anchor: SOUND — cannons mount on Aeronautics ships for PvPvE naval/aerial combat; the mod's stated purpose.
- Dossier noted economy (M-09 luxury good → coin) as a candidate — **M-09 is RETIRED**. This should be flagged for rework to a valid motif.

REWORK: The dossier's economy candidate cites M-09 ("munitions as sellable war-good / cannon-grade steel as trade metal"). M-09 is retired. The actual valid economy linkage here is M-34 (combat-route supply) — a munitions specialist farms/produces shells/cartridges and trades them to non-combat/non-industrial players who can't run the foundry. Shells are a genuine expendable (M-26 consumption) consumed in combat, so demand never zeroes. **Flag: rework economy candidate from M-09 to M-34 + M-26.**

New candidates:

- **M-34 combat-route supply: createbigcannons shells/cartridges as traded war-goods — a munitions-specialist economy role.** Shells are deeply manufactured (cast → assemble → fuze → fill) and consumed in every engagement. A combat player who can't run a cannon foundry buys from the munitions specialist. This is the standard M-34 pattern (supplier side of the boss/danger dual-role). Power: mid-to-endgame (steel/nethersteel). Tone: completely coherent in a PvPvE pack — the navy needs ammunition. ACCEPT.

- **M-26 consumption: shells are pure expendables — M-26 closes the demand loop.** Every fired shell is gone; munitions factories run forever. This is the consumption-sink reading of the same flow — it's the *reason* M-34's trade demand never zeroes. This is a motif observation rather than a separate weave from M-34; they compose together. Accept as a companion note to M-34 rather than a separate entry.

- **M-30 regional-scarcity gate: nethersteel requires Nether-side materials (nether, presumably nether resources). Steel requires iron + coking coal/carbon. If the pack makes carbon/coking coal a regional scarcity, cannon-grade steel is region-gated.** This is a GTMOGS/worldgen configuration question, not a new recipe weave on CBC items. It's a design observation about scarcity layering — valid but not a ledger weave candidate (no recipe to author). Reject as design note.

- **M-29 cross-route dependency: cannon barrels require TFMG steel or CBC steel shared with Aeronautics hull construction (M-23).** Both Aeronautics hull plates (M-23) and cannon barrels want c:ingots/steel. If steel is scarce, the shipwright and the gunsmith compete — that tension is M-29 (cross-route dependency creating trade). No new recipe needed; the shared c:ingots/steel tag already creates this if steel is scarce. This is an observation about the existing shared-tag situation, not a new recipe. Useful framing but not an actionable Phase-3 recipe weave. Reject as design observation.

- from: createbigcannons:shells/cartridges (finished munitions) | via: emergent trade / crafted by munitions specialist | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: running the cannon foundry is its own specialization — other players buy shells from the one who mastered it
- from: createbigcannons shells as pure expendables (fired = gone) | via: consumption mechanic | to: survival→economy | motif: M-26 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: every engagement consumes shells — the munitions economy never zeros because the guns keep firing
- from: nethersteel/steel demand vs. Aeronautics hull steel | via: shared c:ingots/steel tag | to: economy | motif: M-29 | verdict: REJECT | reason: cross-route tension is real but emerges from existing shared tags + scarcity config, not a new recipe weave to author; design observation not a Phase-3 action
- from: cannon-grade steel as region-gated by coking coal | via: GTMOGS worldgen config | to: scarcity→economy | motif: M-30 | verdict: REJECT | reason: valid scarcity-design observation but requires worldgen config, not a recipe weave; no Phase-3 action on CBC items

REWORK:
- REWORK: dossier economy candidate (shells/steel as "sellable" per M-09) — M-09 is **retired**. Replace with M-34 (munitions specialist trades shells to non-producers) + M-26 (shell consumption keeps demand live). The correct economy weaves are now accepted above.

## underground_village   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, loot=yes (chests in generated village + inhabiting villagers with trades). Structure/worldgen mod — value is the discoverable place + the villagers' trades + chest loot.

Method-pull: The mod's content surface is loot-bearing (village chests) + trade-bearing (villagers). This is explicitly the `via: loot-seed` delivery mechanism per the briefing.

- **Loot-seed: seed weave-relevant drops into Stoneholm chest loot (M-02 mob-drop reagent via loot-seed, or M-08 coin seeding, or M-15 boss-key via dungeon find).** A subterranean village that has been there for ages underground would logically hold: rare regional metals (palladium?), magic reagent shards, or a piece of a boss-key progression item. The loot-seed delivery is the Phase-3 action (a datapack edit to add drops to the Stoneholm loot tables). Tone: a hidden underground civilization hoarding rare materials is very coherent. Power: mid-tier findable loot.

  - Sub-candidate A: **seed magic reagents (source_gem fragments, allurite/lumiere shards — but shards are reserved M-07 catalysts; seed in small quantities as a discoverable source, not a production path).** M-02 (mob-drop reagent sink as loot-seed equivalent). Tone: okay. Red-team: shards are M-07 reserved; seeding them in loot is a *discovery* path, not a production shortcut. The reservation says don't give them a new *connective* role; loot-seeding them as discoverable quantities is fine if it's flavor quantity, not a bypass. But the reservation is about not double-spending the reagent — seeding doesn't create a new reagent role, just a place to find them. Accept carefully.
  
  - Sub-candidate B: **seed a coin or currency item in Stoneholm chests (M-08 minted coin as found treasure).** A buried village might have an old coin stash — a non-inflationary amount. This is a lore-coherent discovery moment. However: if coins are player-minted (M-08 intent), finding them pre-minted in loot partly short-circuits the minting specialization. Small amounts as flavor are fine but this edges toward diluting M-08. Reject on M-08 integrity grounds.

  - Sub-candidate C: **seed a boss-key precursor or map (M-15 boss-key via loot-seed) — e.g. a partial map to a boss structure, or a crafting component of a boss-key recipe.** Underground villagers might have records of a dangerous entity nearby. This is a progression-narrative hook. Tone: coherent exploration. Red-team: this works only if a boss-key recipe uses a specific "stoneholm inscription" or similar — that's inventing new items. Reject unless a specific boss needs a found-item input.

  - Sub-candidate D: **seed economy-relevant goods (spice/reagent/rare tool) in Stoneholm chests that feed the pack's trade web — M-29 cross-route dependency (discovery of a rare material forces trade).** This is a valid design but the specific item would need to be picked from the pack's existing scarce materials. A light formulation: seed galosphere palladium chunks or a scarce regional material so the underground village is a *secondary acquisition point* for a regional resource, not just a structure find. This is within M-30 (regional scarcity gate) framing. Accept.

- **Villager-trade retuning: seat Numismatics-priced or pack-specific trades in Stoneholm villagers.** The dossier cites M-09 (villager → Numismatics trade) — **M-09 is retired and M-21 (trade-seam to economy) is cut** as NPC coin faucets. Valid alternatives: villagers trading *goods for goods* (barter), or creating a demand-gate (M-28 colony route — the village acts as an alternate colony-supply node for basics). The villager-trade seating that fits the player-run economy is one where the villager provides a *service* (M-33 service-for-hire — underground smith/enchanter working for player materials) rather than selling for coin. ACCEPT via M-33.

REWORK:
- REWORK: dossier 2nd-anchor candidate cites M-09 (villager → Numismatics trade) — **M-09 is retired**. The valid economy linkage is M-33 (service-for-hire: underground smiths/enchanters provide labor for player materials) not coin-sale.

- from: underground_village chest loot | via: loot-seed | to: survival+economy | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the hidden underground village hoards small quantities of rare reagents — a discovery path to magic materials for the explorer who finds it first
- from: underground_village chest loot (regional scarce material — e.g. palladium chunks) | via: loot-seed | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm holds a cache of the regional ore — underground settlements make scarce-material hunting a structural-exploration goal, not just a mining run
- from: Stoneholm villager trades (coin-for-goods via M-09 / M-21) | via: villager trade | to: economy | motif: M-09/M-21 | verdict: REJECT | reason: M-09 retired; M-21 cut — NPC coin faucets contradict the player-run economy ruling
- from: Stoneholm villagers as service providers (smith/enchanter) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the underground smith works on your materials — they bring labor, you bring ore; no coin changes hands with an NPC
- from: Stoneholm chest loot (pre-minted coin stash) | via: loot-seed | to: economy | motif: M-08 | verdict: REJECT | reason: pre-minted coins in loot short-circuit M-08's player-minting specialization; even small quantities erode the player-mint model

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — display-only JEI addon; 0 items, 0 methods, no loot. Documents loot/worldgen data for players but has no content surface to weave. Genuinely zero-surface support role.

## immersive_armors   [anchors: survival (1)]

Power-read: 0 blocks, 41 items (armor pieces for ~10 sets), no methods, no loot, vanilla recipes. Mid-game combat gear with set bonuses. Sets of interest: Bone (cheap, skeleton drops), Heavy (iron block gated), Divine (wool gated — oddly cheap for a full-block attack), Prismarine (prismarine shard), Steampunk (not in item sample — verify), Wither (wither skeleton skull).

Method-pull:

- **M-05 native-method gating via create:pressing / create:mechanical_crafting — gate the metal-intensive sets (Heavy, Steampunk) on Create-pressed plates.** The Heavy set uses iron blocks as the keystone material; pressing an iron plate for each piece before assembly is the correct Create tie. The Steampunk set has no explicit item sample showing it, but the vibe makes a Create mechanical_crafting recipe extremely coherent ("steam-punk armor assembled on a mechanical table"). Power: mid (Heavy) to mid-high (Steampunk). Tone: Heavy armor requiring a forge press is totally sensible; Steampunk gear assembled via cogs/levers in a mechanical_crafting recipe is a strong thematic fit. Red-team: forcing every set into Create would be over-engineering basics (Bone = just bone drops, shouldn't need a forge). Scope: only the metal/tech-adjacent sets (Heavy, Steampunk), not the organic/wilderness sets (Bone, Prismarine, Slime). ACCEPT for Heavy + Steampunk.

- **M-10 arcane infusion pull via ars_nouveau:enchanting_apparatus / armor_upgrade — route the Divine or Robe set through an arcane finish step.** The Divine set "fully blocks one attack per minute" — that's a magical property, not a metallurgical one. Running the Divine chestplate through the Ars enchanting_apparatus as a final refinement step (arcane infusion giving it the divine protection property) makes the magic anchor coherent. The Robe set (wool/magic aesthetic) similarly fits ars_nouveau:armor_upgrade. Power: mid (Divine set is accessible via wool but the set bonus is powerful — one free-block per minute warrants a magic craft). Tone: "divine armor is blessed through an arcane altar" is an obvious player nod. Red-team: is this over-engineering a wool set? The Divine effect is strong enough to warrant an arcane gate. ACCEPT.

- **M-15 boss-key unlock: gate the Wither set on wither skeleton skulls + Create-processed nethersteel (M-15 boss drop as input).** The Wither set naturally keys off wither skeleton skulls (dangerous boss/mob farming) and CBC's nethersteel (scarce Nether metal). A recipe requiring a wither skull + nethersteel plate would place the Wither set at the top of the combat tree. Power: endgame. Tone: "wither armor is forged from the material of the wither itself" is an easy player nod. Red-team: wither skulls are already used by vanilla for brewing + beacons, so this competes; but a scarce Nether armor is a valid use of a rare drop alongside those other uses. ACCEPT.

- **M-34 combat-route supply: finished armor sets as traded goods** — a combat-specialist armorsmith produces and trades themed sets to non-combat players. M-34 is the supplier-side of the boss/combat route. The sets are mid-game gear consumed by attrition (players die and lose them). Power: mid. Tone: an armorsmith trading themed sets is completely natural economy behavior. ACCEPT.

- **Economy as "sellable" (M-09 retired).** Dossier notes "finished themed sets as sellable smith goods — M-09 [WEAK]." M-09 is retired. The correct framing is M-34 (combat-supply / armorsmith specialist), now accepted above.

REWORK:
- REWORK: dossier economy candidate cites M-09 — **M-09 is retired**. The valid economy linkage is M-34 (armorsmith trades to non-combat players), now accepted.

- from: immersive_armors:heavy_chestplate/boots/leggings/helmet (Heavy set) | via: create:pressing (iron plate component) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: heavy plate armor starts at the pressing bench — forge the iron sheets first, then assemble the set
- from: immersive_armors Steampunk set | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: steampunk gear is assembled on the mechanical crafting table from brass fittings and gears — you can't make it at a workbench
- from: immersive_armors:divine_chestplate/set | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the divine set's once-per-minute block is a magical blessing, not steel craftsmanship — the final piece passes through the arcane apparatus
- from: immersive_armors wither set | via: boss drop (wither_skeleton_skull) + createbigcannons:nethersteel_plate input | to: survival (boss) + Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wither armor is forged from the skull of the wither and nether-steel — you earn it in the Nether, not the crafting table
- from: finished armor sets (traded by armorsmith specialist) | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: running the pressing bench and the magic apparatus for themed armor sets is a craft specialty — other players buy from the one who mastered it
- from: armor sets as "sellable luxury" | via: n/a | to: economy | motif: M-09 | verdict: REJECT | reason: M-09 retired — bare sell-to-NPC framing; replaced by M-34 accepted above

## cmpackagepipebomb   [anchors: Create (1)]

Power-read: 0 blocks, 4 items (pipebomb, pipebomb_rigged, pipebomb_white, tnt_rigged), no methods, no loot. Novelty/PvP trap item riding Create packages. Consumes TNT/gunpowder. Tiny mod.

Method-pull:

- **Survival/danger anchor: the pipebomb is a booby-trap / PvP threat tool that generates danger pressure.** In a PvPvE pack, the threat that a delivered package might be rigged is itself danger-pressure on the economy (the logistics arm). This is a narrative/design observation — not a method-routing weave — but it does give the mod a tenuous survival-danger flavour that could count as a second anchor via M-34 (combat supply: someone makes the bombs, someone trades them). Power: joke/novelty. Tone: this mod is a gag; elevating it to a serious cross-system weave overstates its role.

- **M-26 consumption (gunpowder/TNT consumption drives demand).** Bombs explode and are gone; each use demands new TNT/gunpowder. But this is ambient gunpowder use that Create already handles. No new ledger edge from the pipebomb specifically. Reject.

- **Cross-system weave via createbigcannons:big_cartridge gunpowder share (M-32 byproduct).** Both CBC cartridges and pipebombs consume gunpowder. Sharing the gunpowder supply chain links the two — but that's a shared-ingredient observation, not a recipe weave on cmpackagepipebomb items. Reject.

The dossier's conclusion (leave — tiny novelty/PvP gag) holds. The mod's content surface is too small for a coherent second anchor that isn't forced.

- LEAVE — 4 items, no methods, no loot, novelty PvP trap; no coherent second anchor. All candidate edges are ambient consumption or narrative synergy rather than method-routings. Force would be noise.

## edf-remastered-5.0-beta4   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, loot=yes (the jar counts loot=yes but the dossier confirms it does NOT change dragon drops or add rewards — the loot flag may reflect datapack functions touching existing loot, not new loot tables). Pure behavior overhaul — harder dragon, multi-phase AI, no new item drops.

Method-pull: No items, no methods, no new loot. The mod's entire content is raising the Ender Dragon fight's difficulty. With loot=yes but confirmed no new drop tables and no items, there is no surface to weave through.

- Loot-seed check: could this mod's fight be *seeded* with boss-key drops? The mod does not add new loot tables — it alters AI behavior. Any loot-seeding would be done on the *vanilla* dragon loot table (which is already addressable independently of this mod). EDF-Remastered provides no hook that makes it the right target for a loot-seed weave specifically.

- **Danger pressure amplification: making the Ender Dragon genuinely threatening creates demand for the armor/gear production chain.** This is a design observation about the survival pressure face of the loop — harder bosses = more demand for gear. But it's not a method-routing weave. Not a ledger candidate.

- LEAVE — behavior-only datapack; 0 items, 0 new loot drops (dossier-confirmed), no recipe methods. The mod amplifies danger-pressure but has no material surface to weave. A loot-seed weave targets the vanilla dragon table directly, not this mod. Nothing to route.

## brazil_legends   [anchors: survival (1)]

Power-read: 5 blocks, 47 items, 4 biome-modifiers, loot=yes. Custom mobs (Saci, Capelobo, Headless Mule, Cuca) with unique drops: capelobo_claw, big_tongue, amber_shard, amber_pearl, bottle_with_saci, bloodmoon_sickle. The drops are thematically unique organic materials from folkloric creatures. 4 biome-modifiers place these mobs biome-specifically — regional spawn distribution.

Method-pull (reagent-sink pass — M-02 / M-11 focus):

- **M-02 mob-drop reagent sink via occultism:spirit_fire or occultism:ritual — transmute capelobo_claw / big_tongue into occultism essences.** Occultism's spirit_fire transmutes organic drops into essences (it's the established organic→magic route M-11). The capelobo (wolf-like cryptid) claw and big_tongue (from the Saci? or Capelobo) are grotesque organic drops — exactly the kind of mob material that occultism's spirit fire consumes. Tone: "burning a monster's claw in spirit fire to extract its essence" is a hard fit for Occultism's dark-magic vibe. Red-team: are these drops thematically alien to occultism? The mod is Brazilian folklore; Occultism is dark European occult. The folkloric-vs-occult tonal gap is real. But spirit_fire burns organic matter into essences regardless of cultural origin — the mechanic is universal. The tonal gap is minor. ACCEPT via M-02/M-11.

- **M-11 ritual sink via occultism:ritual — use a brazil_legends drop as a ritual component.** Even stronger than spirit_fire: a ritual requiring capelobo_claw or a Saci's bottle creates a cross-system demand for hunting these folkloric creatures. Power: mid (mob grinding required). Tone: "a ritual that requires the hand of a shape-shifter" is completely in line with dark occultism. ACCEPT.

- **M-10 arcane infusion pull via ars_nouveau:imbuement — infuse amber_shard into a magic reagent.** The amber_shard is a crystalline drop (likely from Cuca/amber-associated mob) — crystals and arcane infusion go together visually. Ars imbuement can take a foreign material and transform it into an arcane reagent. Tone: amber imbued with source energy is sensible. Red-team: ars_nouveau's imbuement is for source-gem-level progression; amber is mid-tier drop. Appropriate if the imbuement output is a useful-but-not-endgame reagent. ACCEPT.

- **M-22 lunar/celestial reagent: Headless Mule and Cuca are folklore creatures tied to specific nights/conditions (in Brazilian folklore, the Headless Mule runs on cursed Thursday nights; the Moon plays a role in Saci's power).** If these creatures spawn only under specific moon conditions (lunar mod tie), their drops become lunar-gated reagents — M-22. Power: mid. Tone: "the Cuca is more powerful under the moon" is completely on-brand folklore. Red-team: this requires configuring the spawn conditions to tie to Enhanced Celestials / lunar events — a config/datapack action, not a recipe. But M-22 allows config tie as a delivery mechanism. ACCEPT as a configuration candidate (via: config tie / spawn-condition gating).

- **Economy amber_shard as luxury curio (M-09 — retired).** Dossier notes M-09. Reject — M-09 retired. No bare sell link.

- **M-30 regional scarcity: brazil_legends mobs have 4 biome-modifiers — they spawn in specific biomes, making their drops biome-region-gated.** The drops (capelobo_claw, amber_shard) are only obtainable where the mobs spawn, which maps to specific biomes — natural regional scarcity. No recipe needed; the scarcity is worldgen. But as a Phase-3 action to emphasize this, the drops should be noted as regional-loot items whose scarcity feeds the economy (players in those biomes trade the drops). This is a M-30 framing but not a recipe weave — design note, not actionable Phase-3 recipe. Reject as a standalone entry but note the scarcity angle.

- from: brazil_legends:capelobo_claw + big_tongue | via: occultism:spirit_fire | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burning a cryptid's claw in spirit fire distills its essence — the folkloric beast feeds the occultist's reagent chest
- from: brazil_legends drops (capelobo_claw / bottle_with_saci) | via: occultism:ritual component | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a dark ritual that requires the hand of a shape-shifter or a captive Saci — hunting the folklore mobs unlocks a ritual tier
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber shard imbued with arcane source — the crystalline essence of a Cuca's attack becomes a mid-tier Ars reagent
- from: brazil_legends folkloric mobs (Headless Mule / Saci) | via: spawn-condition config (lunar event gating — Enhanced Celestials) | to: magic / survival | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Headless Mule runs on cursed nights — their drops are rarer and more potent when hunted under the right moon
- from: brazil_legends:amber_shard as luxury sell | via: n/a | to: economy | motif: M-09 | verdict: REJECT | reason: M-09 retired — bare sell link; economy connection goes through M-34 (combat-route supply: hunters of folkloric mobs trade the reagents) instead, which is ambient and not a new recipe
- from: brazil_legends drop regional scarcity | via: biome-specific spawn | to: scarcity→economy | motif: M-30 | verdict: REJECT | reason: scarcity is real and already built-in via biome-modifiers, but it's not a Phase-3 recipe weave — design note about the drops' natural scarcity; the accepted magic-reagent weaves above are the cross-system action

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable item (freef_bible); no mechanics, no crafting, no effects. Novelty/easter-egg flavor item with zero content surface. Not a code library, but a one-item gag — any recipe edge would be purely forced noise.



















