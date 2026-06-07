# Phase 2 candidates — chunk-16

## create_jetpack   [anchors: create, aeronautics (2)]

REWORK: existing connections — dossier labels both Create and aeronautics, which is sound: it IS a
Create-brass item that gives personal flight, firmly sitting on the aeronautics/mobility arm.
OK — connections sound.

- from: create_jetpack:netherite_jetpack | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Netherite-tier jetpack is the pack's hardest personal-flight milestone; a multi-stage sequenced-assembly chain with a derpack:incomplete_jetpack intermediate fits the GregTech depth model and makes it a true endgame specialisation rather than a quick Netherite-smelt.
- from: create_jetpack:jetpack (as aeronautics drivetrain gate) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the jetpack is *worn* personal propulsion, not a drivetrain component fed into Aeronautics airframes; conflating wearable-flight-gear with ship construction parts would confuse players — the aeronautics anchor already reflects that it's a personal-mobility option on the aeronautics pillar, not a ship-build input.

## toomanypaintings   [anchors: support/decoration (1)]

LEAVE — pure decoration / client GUI; 0 items, 0 blocks, no loot, no material surface. No method-pull
candidate exists (there is nothing to route through any machine or ritual). Genuine zero-content surface.

## voicechat   [anchors: support (1)]

LEAVE — server/client voice-comms infrastructure; 0 items, 0 blocks, no loot, no material surface.
Nothing to route; comms have no in-game item representation.

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration (1)]

- from: structure loot tables (vaults / trial keys / dungeon chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a small stack of minted coin into the trial-vault / dungeon-chest loot tables means exploration directly rewards the pack's player currency — the scarcity loop closes (risk → reward → settlement medium) without any NPC faucet; players must venture out to bootstrap coin supply.
- from: structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding ars_nouveau:source_gem or irons_spellbooks:arcane_essence into tavern / hideout loot gives explorers a magic-bootstrapping reward; the mob-drop-reagent motif applies naturally to dungeon loot too (dungeon → magic reagent → magic production).
- from: structure loot tables (ominous trial vault) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the ominous trial key requires combat to earn; seeding boss-tier combat-supply drops (potions, high-grade food) into its vault makes the combat-route supply loop tangible — a combat specialist farms the locked vaults and trades the spoils.
- from: structure loot tables | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss *drop* to gate a complex Create/tech recipe; dungeon loot tables can seed items, but Dungeons-and-Taverns has no boss mob of its own — the loot is treasure, not a boss-key. Forcing a locked-Create-recipe gate on generic chest loot misapplies the motif and adds arbitrary gating. Better handled by the specific boss-drop mods.

## create_central_kitchen   [anchors: create, survival (2)]

REWORK: existing connections (Create + survival) are sound — it IS the Create↔FarmersDelight
automation bridge. The dossier's optional 3rd was M-09 (retired). Re-examine for valid economy weave.

OK — connections sound. The two pillars are well-grounded. Economy note: finished automated dishes feed
MineColonies provisioning (colony demand for food), which qualifies under M-28 (colony route), but that
weave belongs to the food-chain mods (FarmersDelight, ExtraDelight) rather than to the automation bridge
itself — create_central_kitchen is the method, not the output. No new ACCEPT here.

- from: create_central_kitchen Blaze Stove (Blaze as fuel) | via: create:deploying / item_application | to: Create | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: Blaze usage as a consumption-sink is an interesting thought but the Blaze Stove already naturally consumes a Blaze Rod as fuel per its mechanic — that's vanilla FD behavior, not a new weave to author. The motif applies but there's nothing novel for Phase 3 to author here; the connection is already intrinsic to the block's design.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]

- from: more_slabs_stairs_and_walls stone/wood/concrete cut blocks | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mechanical saw produces the full 847-variant palette in bulk — builders can automate their stone/wood cut-blocks on a Create contraption, turning the decoration library into a genuine Create output and giving the deco set a production-spine anchor.
- from: more_slabs_stairs_and_walls sand/gravel/concrete-powder gravity variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing the gravity-variant slabs/walls back to gravel/sand + an XP nugget closes the recycle loop and fits M-04's lossy-recycle pattern; a builder who over-ordered concrete-powder stairs can recover resources on the crusher.
- from: more_slabs_stairs_and_walls blocks | via: domum_ornamentum:architects_cutter | to: survival | motif: no-motif | verdict: REJECT | reason: routing cuts through the Domum Ornamentum Architect's Cutter is thematically sound (both are building-material shapers) but there is no accepted motif for cross-deco-mod cutting chains — this would be a new motif request, not a Phase-3 author task.

## create_ironworks   [anchors: create (1)]

- from: create_ironworks:tin_ingot / c:ingots/tin | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a fresh regionally-scarce metal (3 biome-modifiers); processing it through Create crushing → pressing → player-press into a Tin Spur (or similar low-denomination coin) makes minting a genuine Create specialisation and grounds the currency in regional scarcity — exactly the M-08 player-minted-currency seam.
- from: create_ironworks:steel_plate / steel_ingot | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the pack's first fabricated structural metal above iron; requiring it as a hull/frame component in mid-tier Aeronautics airframe construction makes ships cost real Create metallurgy and links the Create-metallurgy spine to the logistics arm.
- from: create_ironworks:bronze_ingot / bronze_armor | via: farmersdelight:cutting or create:crushing | to: survival | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing bronze armor back to nuggets is valid M-04 recycle-deco logic, but bronze armor is not a *decorative* block — it's functional gear; applying M-04 (designed for stone/metal deco blocks) to worn armor blurs the motif's boundary and could incentivise throwaway gear-grinding, which is a balance defect. REJECT on motif-boundary grounds.
- from: create_ironworks:steel_ingot (MineColonies blacksmith output) | via: minecolonies hut / research | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a Blacksmith hut producing steel ingots gives colonies a cheaper bulk-steel route compared to manual Create alloying; steel then flows as a colony-demand good that Create specialists can undercut — the non-boss half of the high-tier fork (M-28 colony route).

## blueprint   [anchors: support/library (1)]

LEAVE — API/framework library; 1 trivial template_chest item, no material surface, no loot. Genuine
zero-content surface for weaving.

## puzzleslib   [anchors: support/library (1)]

LEAVE — pure code library; 0 blocks, 0 items, no loot. Genuine zero-content surface.

## azurelib   [anchors: support/library (1)]

LEAVE — animation engine / rendering API; 0 items, 0 loot, no material surface. Genuine zero-content
surface. (lightblock is an internal utility block, not a player-facing material.)

## farmersdelight   [anchors: survival, create (2)]

REWORK: existing dossier notes M-09 (luxury good→coin) as optional 3rd — M-09 is retired; flag.
REWORK: the "deepen Create via create:milling/cutting" note is already partially present (made-by shows
create:milling/mixing/filling inbound), so M-12 is partially authored; check whether the full grain→flour
chain and all key ingredient-prep recipes are authored — if any are missing they remain Phase-3 work.
OK — core connections (survival + Create) are sound.

- from: farmersdelight crops (cabbage / tomato / onion / rice) — seasonal availability | via: season-gated planting (Serene Seasons config) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: FD's four new crops are planted seasonally (Serene Seasons handles growth-window config) so harvest supply fluctuates — seasonal scarcity of tomatoes/rice creates real demand cycles and makes the kitchen a variable-pressure producer; exactly the M-16 seasonal-reagent seam.
- from: farmersdelight cooked dishes (beef_stew / baked_cod_stew / egg_sandwich etc.) | via: minecolonies:composting / colony provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies colonies require food provisioning; wiring high-nutrition FD dishes as preferred colony food inputs (via the colony provisioner/request system) gates colony growth on the kitchen output — food production becomes a demand node, not just a survival perk.
- from: farmersdelight:straw | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: straw is a byproduct already sitting in the FD ecosystem; milling straw to chaff/dust has no downstream consumer in the pack that would validate the step — without a consuming method it's a dead branch. REJECT until a downstream use is identified.
- from: farmersdelight meals (feast-block style dishes) | via: loot-seed into tavern/dungeon loot | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: seeding FD dishes into dungeon loot is thematically weak (adventurers finding Beef Wellington in a spider dungeon) and the delivery is loot-seed on the structure mod, not on FD itself — the action doesn't belong to FD's Phase-3 work.

## knightlib   [anchors: support/library (1)]

LEAVE — library; content items (grail, chalice, essences) are inert without Knight Quest, which is not
in this pack. No Knight Quest = no live material surface; weaving dead items is a guardrail violation.

## byzantine   [anchors: survival/colony (1)]

LEAVE — pure MineColonies schematic/style pack; 0 blocks, 0 items, no loot. Its "weave" is entirely
through MineColonies itself (already colony-pillar); no independent material surface to route.

## corgilib   [anchors: support/library (1)]

LEAVE — pure code library; 0 blocks, 0 items, no loot. Genuine zero-content surface.

## polymorph   [anchors: support/QoL (1)]

LEAVE — recipe-conflict resolver; 0 blocks, 0 items, no loot, no material surface. Pure plumbing.

## cristellib   [anchors: support/library (1)]

LEAVE — structure-config library; 0 blocks, 0 items, no loot. Genuine zero-content surface.

## trading_floor   [anchors: create, economy (2)]

REWORK: existing connections (Create + economy) are sound. The dossier notes M-08 as a natural keystone
(feed processed goods → depot → emeralds/value). Check whether that connection has been authored; if not
it remains Phase-3 work but belongs under the M-08 weave for create_ironworks/numismatics rather than here.
OK — connections sound.

- from: trading_floor:trading_depot (as cross-route bridge) | via: Create belt → depot → villager trade output → belt | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: routing a Create-processed good (e.g. tinned goods, steel tools) through the Trading Depot to acquire a magic-route input (enchanted book, nether wart, rare potion ingredient) forces cross-route dependency — the Create producer needs the magic ecosystem's trade outputs and vice versa; nobody is self-sufficient.
- from: trading_floor:trading_depot (sell to NPC villager) | via: villager emerald trade | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 retired — "emerald income from NPC" is an NPC faucet, not player-run economy. The depot's emerald output is fine as a mechanic but it is NOT a weave.

## gnkinetics   [anchors: create (1)]

- from: gnkinetics:planetary_gear / ring_gear (high-ratio kinetic components) | via: aeronautics drivetrain/propulsion recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary or ring gear is exactly the kind of precision-ratio transmission a ship's drive-shaft needs; requiring one in an Aeronautics propeller or engine-coupler recipe makes ships demand real kinetic engineering, not just stacked brass cogwheels — the drivetrain seam (M-24) linking Create's kinetic depth to the logistics arm.
- from: gnkinetics:worm_gear (self-locking transmission) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the worm gear's "self-locking" property is its mechanical interest; applying it as a distinct Aeronautics recipe (on top of the planetary/ring accept above) would make two gnkinetics aeronautics links on the same motif — redundant without a meaningfully different ship tier or function. One M-24 accept is the right depth here.
- from: gnkinetics industrial/planetary gear | via: minecolonies colony blacksmith or research | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: gnkinetics gears are pure Create internals; the colony blacksmith producing them is plausible but the colony-route motif (M-28) is most valuable for goods that non-Create players need from Create — gears are only needed by Create builders, so the cross-route demand pressure doesn't materialize. Forced edge.

## supermartijn642configlib   [anchors: support/library (1)]

LEAVE — config API library; 0 blocks, 0 items, no loot. Genuine zero-content surface.

## copperagebackport   [anchors: survival (1)]

- from: copperagebackport copper deco blocks (bars, chain, lantern, oxidized variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing copper bars / chain / lantern oxidation-stages back to copper nuggets + an XP nugget folds the whole copper-deco set into Create's recycle economy — a builder who over-placed weathered copper bars can recover raw copper on the crusher, and the oxidized variants yield a nugget + verdigris-dust byproduct.
- from: copperagebackport copper tools/armor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same motif-boundary issue as create_ironworks bronze armor — M-04 is for decorative/structural blocks recycling, not functional gear; applying it to copper axes or copper boots encourages throwaway gear cycling which is a balance defect. REJECT on scope.
- from: minecraft:copper_chest (Copper Golem item logistics) | via: config tie / Copper Golem behavior | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the Copper Golem's chest-to-chest sorting could be framed as a service-for-hire logistics labor node, but M-33 (service-for-hire) is about *player* labor (enchant-for-hire, cargo runs, colony contracts); an automated mob-servant is not player labor, and the economy anchor here is weak / thematically wrong. REJECT.
- from: copperagebackport copper ingots / c:ingots/copper | via: create:pressing → numismatics | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: copper is the pack's most abundant metal and Create's workhorse material; minting copper into a low-denomination coin is *possible* under M-08, but copper's ubiquity means the coin would not be scarce — the scarcity foundation (M-08's point) is absent. If a copper coin is wanted, it should be the lowest-value denomination gated behind actual scarcity of another material for its higher-tier alloy. Flag for the currency-design pass, not a standalone ACCEPT here.

== CHUNK COMPLETE ==

