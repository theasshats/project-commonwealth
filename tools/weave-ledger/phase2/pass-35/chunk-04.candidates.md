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







