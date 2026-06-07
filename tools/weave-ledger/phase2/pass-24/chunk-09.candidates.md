# Phase 2 candidates — chunk-09

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure food-web glue layer; registers no items/blocks, no materials to route through a method. Its existence already performs M-12-style recipe unification across Farm&Charm/Farmer's Delight/Let's Do. No independent pillar surface. OK — connections sound for support role.

## buildguide   [anchors: support (1)]
- LEAVE — zero-content client-side build-overlay; no items, no materials, no recipe surface. Sanctioned support role.

## moblassos   [anchors: survival (1)]
- from: moblassos:diamond_lasso (any-mob capture) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a diamond-tier lasso is a precision instrument — mechanical crafting for a capture device that lets you stock your airship's livestock pen without a cattle drive; the fabrication cost makes the tool proportionate to the ship-building effort it enables
- from: moblassos:hostile_lasso | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the lasso is a tool (craftable), not a mob drop; M-02 is mob-drop-as-reagent, which doesn't apply to a crafted capture item. No material flows through it.
- from: moblassos:emerald_lasso (villager capture) | via: config tie / MineColonies | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — "lasso enables villager relocation for colony seeding" is a useful thematic observation but there is no recipe method to route through; it's a behavior affordance, not a graph edge. Flag for Gate-0 if a motif is ever added for colony-seeding logistics.
REWORK: existing survival anchor is a loose fit (labeled "animal-husbandry QoL") — it's correct but shallow. The aeronautics ACCEPT above is the concrete 2nd anchor.

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:steel_ingot / steel_plate | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is the industrial metal — structural frames and hull plating on an airship naturally demand fabricated steel; the same Create chain that makes the steel makes the ship
- from: create_ironworks:tin_ingot (scarce/regional ore) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: tin is a fresh regional metal with biome-gated ore; crushing and minting it into coin makes the ore-prospecting trip economically meaningful without requiring a full alloy chain
- from: create_ironworks:bronze_ingot / bronze_plate | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze is the mid-tier mechanical metal — gears, bearings, and linkage parts for propellers and control surfaces fit bronze fabrication before steel hull work
- from: create_ironworks:steel gear/tool set | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: transmuting forged steel through spirit fire to get an essence is a tone mismatch — steel is the industrialist's material; routing it through a spirit ritual feels forced when Create's own haunting (M-19) or the electric bridge (M-17) would be more natural if a magic link is ever wanted. Flag as low-priority.
OK — Create anchor is already strong (ore→alloy→gear chain rides create:mixing/pressing/crushing/sequenced_assembly directly). Two new ACCEPT anchors above complete the web.

## biolith   [anchors: support (1)]
- LEAVE — pure worldgen-API library; no items, no blocks, no material surface. Sanctioned support role.

## revelationary   [anchors: support (1)]
- LEAVE — pure progression-gating library; no items/blocks, no material graph. Mechanically enables M-05 gating for dependent mods but has no anchor of its own.

## create_ultimate_factory   [anchors: Create (1)]
- from: coal_block + lava → diamond (via create:compacting, heated) | via: create:compacting | to: Create | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: no-motif for a recipe-internal Create depth path. The mod deepens the Create pillar by definition (every recipe it adds routes through a Create machine) but crosses no pillar boundary — it's a Create-only recipe datapack. No 2nd anchor available without forcing.
- REWORK: dossier notes "no 2nd anchor; leave." Scarcity concern: several recipes make vanilla scarce resources renewable (diamond via compacting, etc.) — this directly counteracts gtmogs scarcity intent. Flag for config/recipe audit: the diamond-from-coal-block recipe in particular may need to be disabled or re-costed to avoid trivializing regional ore scarcity. This is a balance note, not a weave candidate.
LEAVE — no pillar-crossing content surface; pure Create recipe depth. Balance audit flag above is the action item.

## trashcans   [anchors: support (1)]
- LEAVE — void-sink automation QoL; no material outputs. Noted in dossier: voiding is anti-economy/anti-scarcity by nature. In a scarcity pack, consider config-gating the item_trash_can behind a Create/colony recipe so byproduct voiding carries a cost — but that is a balance config note, not a weave candidate. No pillar anchor.

## ribbits   [anchors: survival (1)]
- from: ribbits merchant trade (Amethyst Shards in, swamp goods out) | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: the Ribbit traders already run a barter economy on Amethyst Shards — bridging their shard prices to Numismatics coin makes the swamp village a real node on the player trade network rather than an isolated novelty; buying swamp goods with coin (or accepting shards as a coin-denominated good) connects the two currency layers
- from: ribbits:toadstool / brown_toadstool / red_toadstool | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic deco-block milling — toadstool fungi milling to mushroom powder/spores is thematically ok but adds no distinctive loop value; generic-deco, non-distinctive compared to the stronger M-21 economy link above. Reject this as a primary anchor.
- from: ribbits:mossy_oak_planks | via: create:cutting (sawmill) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic wood variant through Create sawmill is the baseline for any woodset; no distinctive value here; the economy-trade link is the stronger 2nd anchor.
REWORK: existing survival anchor is correct. M-21 (provisional) ACCEPT above is the concrete 2nd-anchor candidate.

## cristellib   [anchors: support (1)]
- LEAVE — pure structure-config library; no gameplay content, no items, no material surface. Sanctioned support role.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull is the trophy of an underground hunter — burning one in spirit fire to draw out an earth-essence is the exact mob-drop-to-reagent pattern; thematically kobolds are dungeon creatures already adjacent to dark magic
- from: kobolds:kobold_skull | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: imbuement of a skull into an arcane reagent is tone-adjacent but double-spends the skull (M-02 via spirit_fire already gives it a magic use; two competing magic uses on one item needs reagent-ownership escalation). Reject in favor of the cleaner M-02 route.
OK — economy (emerald trade) + survival (underground creature/structure) are sound. M-02 ACCEPT adds a magic 3rd anchor.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries:hemp_extract / strain_oil (refined output) | via: createaddition:charging / FE↔kinetic bridge | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf machines run on FE — wiring them to Create's rotational-to-electric conversion makes the entire hemp-tech tier a load on the Create power grid, not an isolated island; a player must build a Create generator to run the farm at scale
- from: smokeleafindustries:hemp_weed / bud (raw harvest) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: hemp is a fibrous crop — milling raw hemp yields fiber/pulp as a useful intermediate that can feed papermaking or textile recipes (like other crop mills); this routes the farm's entry-tier output through Create before it enters the smokeleaf machine chain
- from: smokeleafindustries refined gummy/extract (high-effort consumable) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The mod's own dealer/stoner trades already establish a sell loop; adding Numismatics is just "also sellable." The Create power-grid link (M-05) and milling link (M-12) are the distinctive anchors.
REWORK: existing survival anchor is correct but the mod is a lone island — the two Create ACCEPTs above are the priority weave to break the isolation.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. gtmogs is the worldgen substrate for the scarcity model; it enables M-03/M-08 downstream rather than being woven itself. No new anchor candidates; its dual survival+economy anchor is accurate and complete. No REWORK needed.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a spicy root crop — milling it yields ground ginger spice as a cooking intermediate that feeds extradelight's mortar/oven chains; the seasonal scarcity of a winter crop milled into a year-round ingredient is the exact M-16 seasonal-reagent pattern
- from: snowyspirit:ginger | via: serene seasons gate (only winter-harvestable if biome-modifiers restrict it) | to: Create / magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger grown in snow biomes, harvestable only in winter, is a seasonally scarce spice ingredient — feeding it into Create milling (M-12 overlap) or an Ars imbuement for a seasonal catalyst (cold/frost themed) makes the winter season mechanically meaningful for cooks and mages alike
- from: snowyspirit:sled | via: aeronautics/transport | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the sled is a ground transport tool with no recipe-method tie to Aeronautics ships. Thematic adjacency only; not a graph edge. Reject.
- from: snowyspirit:gingerbread_cookie / candy items | via: numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Seasonal sweets are sellable but that's trivially true of any food. The Create milling + seasonal-reagent links are the distinctive anchors.
REWORK: existing survival anchor is sound. M-12 + M-16 ACCEPTs above complete the web.

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — pure client-side camera/movement mod; no items, no material surface. Sanctioned support role.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight crops (coffee, garlic, ginger, citrus) | via: create:milling / create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coffee beans through a Create mill yield ground coffee; citrus through a Create press yields juice — the bakery's raw ingredients become Create downstream products before they hit the oven, making the kitchen a visible node on the Create processing web
- from: extradelight:oven / vat (feast production) | via: farmersdelight:cooking / extradelight:feast → MineColonies provisioning | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Feasts as colony/trade food is a valid use but it's "food is sellable"; the Create milling link is the distinctive anchor. Reject economy angle; the Create deepening (M-12) is what's needed.
OK — survival+Create anchors are sound. M-12 ACCEPT deepens the Create connection concretely. One new ACCEPT.

## bagus_lib   [anchors: support (1)]
- LEAVE — shared code library; no player-facing content, no items, no material surface. Sanctioned support role.

## domum_ornamentum   [anchors: decoration/MineColonies (1)]
- from: domum_ornamentum:architectscutter consuming create_ironworks steel_block / bronze_block as material input | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Architect's Cutter turns any block into ornamental framing — feeding Create-processed metal blocks (steel/bronze from create_ironworks) into it produces industrial-aesthetic cladding for colony buildings, closing a loop: Create makes the metal → MineColonies' cutter makes the architecture
- from: domum_ornamentum timberframe / shingle using Create-processed stone (andesite alloy block, brass casing) | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: andesite alloy blocks and brass casings are Create's functional machines, not decorative palette inputs — routing them through a decorative cutter is thematically odd (you'd use raw stone, not your gearboxes). Reject in favor of the metal-block version above.
REWORK: current anchor is "decoration palette + MineColonies support" which is accurate. The M-04 ACCEPT above adds a Create anchor by routing Create-made metal blocks through the cutter into deco, completing the MineColonies ↔ Create ↔ deco triangle.

## betterpingdisplay   [anchors: support (1)]
- LEAVE — pure client UI mod (numerical ping display); no gameplay content, no items. Sanctioned support role.

== CHUNK COMPLETE ==
