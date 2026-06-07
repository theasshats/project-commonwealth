# Phase 2 candidates — chunk-14

## netmusic   [anchors: support / QoL-flavor (1)]

Power-read: cosmetic audio mod. Items: music_cd (NBT-encoded URL), cd_burner, computer, music_player, big_megaphone, music_player_backpack. Already weaves once: music_cd is made via `touhou_little_maid:altar_recipe_serializers` (the maid altar). No foreign-material inputs; the CD is a cosmetic output with no further material role. loot=yes, but items are crafted not looted.

Candidates via method-pull:
- Could music_cd enter a second method as a reagent/catalyst? The Ars imbuement or occultism spirit-trade would be the magic pull — but a "tune in to the arcane" framing is too forced; the mod is about streaming audio, not arcana.
- Economy angle: could a rare "custom playlist" disc be a sellable luxury via Numismatics (M-09)? The CD is NBT-written by the player — it's not a crafted good with a scarcity cost, just a url-holder. Round-trip sell of a URL-disc is noise.
- Aeronautics: a "ship's radio" via big_megaphone on an airship is lovely flavor but there's no mechanical connection — the megaphone already does this cosmetically, no recipe integration needed.

REWORK check: existing connection (TLM altar) — the music_cd is crafted via the maid altar which is coherent (maids play music). OK — connections sound.

- from: netmusic:music_cd | via: occultism:spirit_trade | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: "arcane audio" framing is contrived; a URL-encoded CD has no thematic link to spirit commerce; no motif applies cleanly
- from: netmusic:music_cd | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: CD value is player-defined NBT (a URL), not a scarce crafted resource — selling it is meaningless from a scarcity standpoint; M-09 requires "high-effort consumable", not a URL holder
- LEAVE — cosmetic audio mod with one coherent existing hook (TLM altar); no material to route and no second system emerges without forcing it

## bigsignwriter   [anchors: support / client UI (1)]

Power-read: pure UI utility. Zero items, zero blocks, zero loot. In-GUI large-text sign helper; client-side, no world interaction. No material surface whatsoever.

Candidates via method-pull: None possible — the mod registers no recipe types, no items, no loot tables, no worldgen. There is no material to route through any method.

- LEAVE — genuine zero-content client UI library; no items, no loot, no method surface; weave is structurally impossible

## drones   [anchors: aeronautics (1)]

Power-read: Buddy Drones — personal quadcopter assembled from arbitrary blocks (drill/lodestone/beacon ability slots) at a controller. Items: drones:controller, drones:frame, drones:pocket_drone, drones:wood_rotor, drones:iron_rotor, drones:ion_thruster, drones:drill. Tiers: wood_rotor = everyday, iron_rotor = mid, ion_thruster = endgame (thrust vs. weight curve; ion is clearly the ceiling). loot=yes (controller/rotors have loot).

Method-pull candidates:

**Create → drones (M-05 / M-06 / M-24):**
The ion_thruster is thematically and mechanically parallel to Create's propulsion outputs (rotary power → thrust). Gating it behind Create fabrication is coherent: a player sees "thruster" and immediately connects it to mechanical engineering. Sizing: ion_thruster is the endgame tier — deep chain is appropriate. The controller is mid-tier; iron_rotor is mid; wood_rotor is everyday.
- wood_rotor: simple vanilla craft stays (everyday — one-light-step rule; don't gate basics)
- iron_rotor: gate behind `create:pressing` (iron sheets → rotor blades) — one step, fits M-20 light-tier upgrade
- ion_thruster: gate behind `create:sequenced_assembly` with a derpack:incomplete_thruster intermediate, consuming brass/copper coils — fits M-06 endgame keystone perfectly
- drones:controller: gate behind `create:mechanical_crafting` (precision brass parts) — M-05 native-method gating

Theme-fit: "personal drone with mechanical rotors" is exactly the Create-adjacent tone. A player finding the ion thruster in JEI and seeing it requires a sequenced assembly chain will nod — it's engineering. No tone clash.

Red-team: DT drones use arbitrary blocks as body (not forced to Create blocks), so the Create dependency only touches the drivetrain (rotors/thruster/controller), not the cosmetic shell — that's correct proportioning.

**Aeronautics (M-24):** The ion_thruster is also a candidate for Aeronautics drivetrain recipes — a personal drone is the economy's logistics arm's smallest unit (scout drones, cargo pickup). This is a second link without any new recipe authoring needed: framing the drone as the "small-scale logistics asset" to aeronautics' "large-scale ship" is a design annotation, not a recipe change — but the Create recipe weave above already delivers the Create anchor, and aeronautics is already the primary anchor.

**Economy (M-09 / M-14):** The pocket_drone as a sellable crafted good (luxury gadget → coin) is a conceivable M-09 target. But a drone is a reusable tool, not a consumable luxury — M-09 fits consumables (wine, cheese, ammo). REJECT.

REWORK check: existing aeronautics anchor — the drone-as-personal-logistics framing is sound; no existing connections to flag as arbitrary. OK — connections sound.

- from: drones:ion_thruster | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: engineering a personal ion thruster through a Create assembly line — of course it takes precision fabrication
- from: drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the drone's brain is a Create mechanical-crafted precision unit — the assembly controller earns its brass
- from: drones:iron_rotor | via: create:pressing | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: rotor blades are pressed iron sheets — one Create step, proportionate to the tier
- from: drones:pocket_drone | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: drones are reusable tools, not consumable luxury goods; M-09 targets high-effort consumables, not equipment; selling a drone is player discretion, not a pack-designed economy seam
- from: drones:wood_rotor | via: create:pressing or any Create method | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: wood_rotor is everyday-tier; the hard guardrail forbids gating basic components behind complex recipes — keep vanilla craft

## tacz   [anchors: support / curated-flavor (1)]

Power-read: Timeless and Classics Zero — modern firearms. Items: gun_smith_table (logs + block of iron), workbench_a/b/c (attachment/ammo), ammo, ammo_box, attachment, modern_kinetic_gun, m67 grenade. The gun_smith_table is the iron-tier entry point (everyday); individual guns/attachments vary (mid); high-end modded-pack guns lean endgame. loot=yes (guns/ammo can appear in structures). Has its own recipe type: tacz:gun_smith_table_crafting. No c:tags yet.

Method-pull candidates:

**Create → tacz (M-05 / M-06):**
The gun_smith_table_crafting method consumes metals and components. Routing Create-pressed metal sheets and Create-machined parts into those recipes is an obvious bridge: a pack centered on Create industry would naturally produce firearms from it. 
- gun_smith_table itself: gate behind Create (iron plates pressed by Create) rather than a raw block-of-iron — M-05, mid/everyday boundary
- higher-tier guns: require Create-sequenced casings, barrels machined from steel (create_ironworks:steel_ingot) — M-05 for the method gate, M-06 for a flagship weapon
- ammo_box: Create mixing (gunpowder + processed lead/brass) — proportionate, everyday consumable so keep to one Create step max

Theme-fit: "industrial-era firearms assembled from machined parts" is exactly the Create metallurgy tone. A player sees gun_smith_table requiring a Create pressed sheet and nods — of course a gun barrel needs precision metalwork. No tone clash; if anything this improves the mod's anchor from "flavor combat" to "product of the Create spine."

Red-team: TACZ is data-driven (gun packs), so recipe changes must go through its gun_smith_table_crafting type or wrap the table's own inputs — KubeJS can do this cleanly. Risk: over-gating a basic gun behind too deep a chain clashes with "everyday = one light step." Answer: gate the table itself lightly (one Create step), gate specific advanced guns more deeply, not all guns equally.

**Economy (M-08 / M-09 — ammo as consumable coin-sink):**
Ammo is a consumable: shot, gone. A player running guns continuously needs a steady ammo supply — exactly the "high-effort consumable → sellable" profile of M-09. Ammo as a trade good (ammo traders, ammo manufacturers selling to PvPvE fighters) slots naturally into the economy pillar. Additionally, scarce metal (tin/steel from create_ironworks, scarcity foundation) → Create processed → gun components → sold or used: this is M-08's chain extended through TACZ.

Theme-fit: "ammo is a war material you buy from the colony smith" is very coherent with the PvPvE framing. No tone clash.

Red-team: M-09 requires "high-effort consumable." Ammo is crafted (medium effort at gun_smith_table) and consumed in combat — that qualifies. The concern is that an ammo-heavy PvPvE economy could make PvP too pay-to-win if coin is unevenly distributed. This is a balance note, not a theme clash — BALANCE-PENDING. Still ACCEPT with that caveat.

REWORK check: no existing connections (anchor = support/flavor, 1 system). Nothing to rework — all connections are new.

- from: tacz gun_smith_table + gun inputs | via: tacz:gun_smith_table_crafting (gated on Create-pressed/machined metals) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: precision firearms demand precision metal — the gun smith table's inputs trace back to the Create press and mixer
- from: tacz high-tier gun | via: create:sequenced_assembly (casing + barrel machined from create_ironworks:steel) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a top-end rifle earns its power through a full Create machining chain — steel barrel, brass fittings, assembled step by step
- from: tacz:ammo / ammo_box | via: numismatics sell / bounty-board | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo is the consumable war material; PvPvE fighters buy it from the colony smith — an economy seam that turns every firefight into demand
- from: tacz:modern_kinetic_gun (high-tier) | via: bountiful bounty-board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties for eliminating high-threat mobs pay out in coin — a combat-route → economy link (provisional motif, tag: provisional)
- from: tacz:m67 (grenade) | via: create:mixing (gunpowder + processed metals) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: redundant with M-05 gate on the gun_smith_table itself — adding a separate mixing recipe for grenades when the table already routes through Create is a double-layer that adds depth without clarity; keep the table as the single chokepoint

## createblockchain   [anchors: economy, create (2)]

Power-read: Currency Miner block fed FE mints Numismatics coins; Mining Cores (worldgen geodes, ~1 per 30 chunks) are the scarcity throttle; cryotheum coolant manages heat; piggy banks seed chests with coins. Already ≥2 anchors (economy + Create). Items: currency_miner, mining_core, mining_core_geode, piggy_bank, cryotheum_coolant_bucket, remote_finder. loot=yes (piggy banks in overworld chests). biome-modifier places geodes. Made by: create:mechanical_crafting, create:mixing.

Candidates via method-pull (deepening — not new pillars):

**Scarcity deepening (M-08 refinement):**
The miner's coin output rate should ultimately trace back through scarce processed metal rather than generic FE. If the FE supplying the miner comes from create:new_age (which itself needs processed scarcity metals) or from a TFMG fuel chain, coins become traceable to the scarcity foundation. This is a config/design note, not a new recipe — but acknowledging it as a weave-design recommendation: **require the FE source to use scarce-metal-derived fuel** to close M-08 properly. This is a design constraint on the surrounding factory, not a new candidate line.

**Survival (M-16 / M-22 — seasonal/lunar core scarcity):**
Could Mining Core geode generation be season-biased or lunar-event-enhanced? A "more geodes spawn near the full moon" config would add M-22 flavor and pull the coin faucet into survival pressure. However the geode placement is a biome-modifier, not a time-based event — the mod has no config hook for this that we can drive without custom work. Low feasibility. REJECT.

**Magic (M-11 / M-10):**
A mining core as a magic catalyst (spirit_fire transmutation or imbuement input)? The lore of "mining core from a geode powering a currency miner" has a crystal/energy vibe. But this would split the core's role: it's currently a scarcity throttle for the coin faucet — repurposing it as a magic reagent would either duplicate it or split its supply, disrupting M-08. REJECT — reagent-ownership conflict risk.

REWORK check: existing connections look sound. The create:mechanical_crafting + create:mixing made-by is the correct Create anchor; economy anchor (numismatics coin output) is the correct economy anchor. The only thing worth flagging: **REWORK — the FE input source should be documented as needing to derive from a scarce-metal chain (not free FE from vanilla)** to complete the M-08 scarcity→coin seam; this is not authoring, just a design note for Phase 3.

OK — connections sound for the two anchors as recorded; the FE-source scarcity closure is a Phase-3 design note.

- from: createblockchain:mining_core geode | via: lunar-event enhanced spawn (M-22 config) | to: survival | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: biome-modifier system has no time-based config hook; requires custom worldgen work to implement; feasibility too low for a candidate
- from: createblockchain:mining_core | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: mining_core is already the scarcity throttle for the coin faucet (M-08 chain) — repurposing it as a magic reagent risks reagent-ownership conflict and dilutes the economy seam

## betteranimationscollection   [anchors: support / client visual (1)]

Power-read: pure client-side model/animation replacement. Zero items, zero blocks, zero loot, zero recipe types. Swaps vanilla mob animations; no gameplay, no material surface.

Candidates via method-pull: None possible. Zero content surface. No items, no loot, no methods, no worldgen.

- LEAVE — genuine zero-content client visual mod; no items, blocks, loot, or methods; weave is structurally impossible

## supermartijn642configlib   [anchors: support / library (1)]

Power-read: configuration API library. Zero items, zero blocks, zero loot, zero recipe types. No in-world behavior.

Candidates via method-pull: None possible. Genuine code library.

- LEAVE — genuine zero-content code library; no gameplay surface whatsoever

## rechiseled   [anchors: support / decoration palette (1)]

Power-read: chisel → 600+ decorative variants of every vanilla block. 3627 blocks, 3628 items (all decorative permutations), loot=yes (chiseled blocks can appear in structure loot in theory). Recipe type: none registered by rechiseled itself — the chiseling conversion is handled by the chisel mechanic directly (and by the rechiseledcreate companion's Mechanical Chisel which is already in the pack). No c:tags.

Method-pull candidates:

**Create → rechiseled (M-04 / M-20 — already in pack via rechiseledcreate):**
The dossier notes rechiseledcreate (already in pack) adds a kinetic Mechanical Chisel that runs chiseling recipes on Create power. This is the natural and already-documented Create weave — M-04 (Create recycles deco, or more precisely, Create processes deco). The companion mod delivers this without new recipe authoring.

Theme-fit: a Mechanical Chisel driven by Create rotational power cutting stone decorative variants is a perfect Create-aesthetic fit. No tone clash.

**Economy (M-09 — chiseled luxury stone goods):**
High-effort chiseled stone variants (e.g. polished rechiseled_deepslate tiles, ornate rechiseled_obsidian bricks) as premium trade goods? The issue: chiseling is 1:1 (one source block = one chiseled block, lossless and reversible) — so there's no cost attached. A luxury good needs a scarcity cost; rechiseled blocks have none. REJECT — no scarcity or effort differentiates them from the base block.

**Create + decoration (M-04 framing):**
Since rechiseledcreate is already in the pack and provides the Mechanical Chisel, the Create anchor via M-04 already exists functionally. No additional recipe weave needed — just acknowledge the companion delivers it.

REWORK check: current anchor = support (decoration palette), 1 anchor. The rechiseledcreate companion is already in the pack and provides the Create/M-04 link. This should be noted as an existing functional 2nd anchor even without a registered recipe type on rechiseled itself — the companion is doing the work. The dossier already flags this as STRONG M-04. OK — connections sound via the rechiseledcreate companion; no REWORK needed.

- from: rechiseled decorative variants | via: rechiseledcreate Mechanical Chisel (create:* power) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create-powered Mechanical Chisel mass-producing decorative stone tiles is pure Create-aesthetic satisfaction — the whole decoration palette runs on rotational power
- from: rechiseled chiseled stone variants | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: chiseling is 1:1 lossless and reversible — no scarcity or effort cost differentiates chiseled blocks from their source; M-09 requires high-effort consumables; this would be trivial arbitrage

## mowziesmobs   [anchors: survival (1)]

Power-read: Mowzie's Mobs — hand-crafted mini-boss encounters. Items include premium artifact drops: mowziesmobs:earthrend_gauntlet (Ferrous Wroughtnaut drop — unique unbreakable iron-smashing weapon), mowziesmobs:ice_crystal (Frostmaw drop — grants ice attacks), mowziesmobs:sol_visage (Barako drop — sun powers), mowziesmobs:blowgun + darts (Barakoa ambient), mowziesmobs:captured_grottol, wrought_helm. These are endgame-tier artifacts (each boss is a non-renewable-per-spawn, scripted set-piece fight). loot=yes. 9 c:tags. Also: Grottol mob drops gems (diamond-tier); Barakoa villages generate as structures with their own loot.

Method-pull candidates:

**Create (M-15 — boss-key unlock):**
The pack's DESIGN doc explicitly states: "complex Create/tech recipes unlock via boss drops." Mowzie's drops (ice_crystal, earthrend_gauntlet's wrought metal, sol_visage) are premium unique artifacts that perfectly fit the M-15 boss-key gate role for high-tier Create sequenced assembly. For example:
- ice_crystal: gate a high-tier refrigeration or cooling component in a Create sequenced assembly chain (thematic: ice → industrial cooling)
- wrought-iron artifact material: gate a high-tier armored hull or structural component (thematic: Wroughtnaut's indestructible iron → Create aeronautics heavy frame — M-23 synergy)
- sol_visage: gate a solar-power-related endgame tech (Create New Age solar component — thematic: sun magic → solar generator)

Power sizing: these are endgame boss artifacts, appropriately deep chains. Theme-fit: "boss drop as a required component in an engineering recipe" is the pack's intended design; Mowzie's mythic-tribal aesthetic adds a "taming nature's power" flavor to the Create spine.

Red-team: these artifacts are "unbreakable gear" — players equip them, not smelt them. Using an equipped artifact as a recipe input would consume it permanently and create friction. Resolution: use a copy/NBT approach (the artifact is a catalyst, not consumed — or a lore drop from the same boss that's a non-equipment variant exists, e.g. a claw fragment or ice shard from the boss loot table). Better: seed the boss loot table with a separate "fragment" drop (ice shard, sol fragment, wrought shard) that feeds the recipe, preserving the wearable artifact. Via: loot-seed (Phase-3 datapack edit to the boss loot table) + recipe gate.

**Magic (M-02 / M-11):**
Boss artifacts as magic reagents — mowziesmobs:ice_crystal in an ars_nouveau:imbuement to produce a frost-attuned source gem variant, or occultism:spirit_fire to transmute the crystal into a spirit essence. Ice crystal → arcane frost reagent is thematically clean (ice boss drop → cold magic catalyst). M-02 (mob-drop reagent sink) + M-11 (ritual transmutation). Mid-tier: not every player fights Frostmaw for a magic reagent, but it's a deliberate specialization choice.

Theme-fit: "crystals from an ice-titan boss feed arcane frost rituals" is coherent in both tone and the pack's magic pillar design. No clash.

Red-team: same artifact-consumption concern as above — address via loot-seeded fragment.

**Economy (M-14 — bounty → drop economy):**
Mowzie's boss kills are rare set-piece events. A Bountiful bounty board offering coin rewards for boss kill evidence (a boss trophy/drop submitted to the board) is an M-14 seam: combat → economy. The pack's design explicitly notes bosses as both pressure and production route — plugging them into the economy via bounties completes the loop. Power: endgame (boss fights are endgame-adjacent); the bounty payout should be proportionate to the difficulty (these are not common mobs).

Theme-fit: "collect a bounty for killing the ice titan" is completely coherent PvPvE economy. No clash.

REWORK check: current anchor = survival only (1). No existing recipe connections — the REWORK is simply that nothing has been authored yet, which is expected at Phase 2.

- from: mowziesmobs ice_crystal (fragment via loot-seed) | via: create:sequenced_assembly (endgame cooling/cryo component) + loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's ice crystal is the only material cold enough to temper a Create cryo-cooling chamber — boss fight gates a unique engineering component
- from: mowziesmobs sol_visage (fragment via loot-seed) | via: create_new_age:energising or create:sequenced_assembly (solar endgame component) + loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Barako's sun-mask fragment channels concentrated solar energy — required for a Create New Age solar generator at endgame tier
- from: mowziesmobs ice_crystal (fragment via loot-seed) | via: ars_nouveau:imbuement (frost-attuned reagent) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ice titan's crystallized breath is a natural frost-magic catalyst — the Ars imbuement consumes it to produce a cold-attuned essence
- from: mowziesmobs boss kill evidence / trophy drop | via: bountiful board + numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: the server posts a bounty for the ice giant terrorizing the north — kill it, bring back proof, collect coin (provisional motif, tag: provisional)
- from: mowziesmobs:earthrend_gauntlet (wrought-iron artifact) | via: create:sequenced_assembly (heavy aeronautics frame component) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: the earthrend_gauntlet is a wearable unbreakable weapon — consuming the equipped artifact directly is bad UX; would need a separate wrought-iron fragment loot-seed to work cleanly; the ice_crystal → Create chain already covers the M-15/Create slot; this is a candidate only if a loot-seeded wrought fragment is explicitly authored

## stylecolonies   [anchors: support / decoration palette (1)]

Power-read: pure blueprint content for MineColonies. Zero items, zero blocks, zero loot, zero recipe types. Ships building styles (Frontier, Steampunk, High Magic, etc.) that the MineColonies builder reads. The Steampunk style calls for Create blocks at build time — that's a passive dependency, not a recipe weave.

Candidates via method-pull: None possible. No items, no loot, no recipe types; the only "material" surface is the blueprint files which aren't game items. The Steampunk style's Create-block dependency is already a functional connection but doesn't require authoring.

- LEAVE — pure blueprint content; no items, no loot, no recipe surface; the Steampunk style's passive Create-block pull is the natural connection and requires no authoring

## revelationary   [anchors: support / library (1)]

Power-read: advancement-gated block/item visibility library. Zero items, zero blocks, zero loot, zero recipe types. Pure API; drives other mods' progression gating (e.g. Occultism otherworld blocks).

Candidates via method-pull: None possible. Genuine zero-content progression-gating library. Its value to the pack is enabling M-05 (native-method gating) for dependent mods, not as a direct weave target.

- LEAVE — genuine zero-content progression-gating library; it enables M-05 gating for other mods but has no own material surface to weave

## solmaiddream   [anchors: survival (1)]

Power-read: tiny Touhou Little Maid addon — tracks unique foods fed to maids, grants maid stat upgrades at milestones. One item: solmaiddream:food_book. No blocks, no loot, no recipe types. Hard dep: touhou_little_maid. Mechanic is purely a stat-growth layer on top of the food pool.

Method-pull candidates:

**Survival deeper hook (M-12 / M-16):**
The food_book tracks unique foods — any food mod's output can feed this. A seasonal food (M-16) being "new" to a maid's diet would increment her variety counter. This is a passive interaction (no recipe authoring), not a weave candidate.

**Economy (M-09 — exotic foods as premium maid fuel):**
Could rare/exotic processed foods (e.g. a vinery:wine, a create_cheese:matured cheese, a farm_and_charm feast dish) be specifically valuable because they advance maid stats significantly — making them a premium trade good? The problem: this is already implicit from the food pool; there's no mechanic that distinguishes "rare food fed to maid" from "common food fed to maid" in terms of trade incentive. The food variety pull is on diet mods, not on solmaiddream. REJECT — the value is in the food mods, not here.

**Companion economy (no motif):**
A "well-fed maid hire" economy — maids with maxed stats as a tradeable commodity? No motif covers maid-as-trade-good; this would require a new motif. Mark no-motif → REJECT-for-review per protocol.

REWORK check: survival anchor is sound (food-variety extension). The addon is too thin for a real second anchor without forcing it.

- from: solmaiddream maid diet milestones | via: exotic food pool (seasonal/processed foods) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is a passive interaction already built into how the food pool works — no authoring needed, and M-16 is the seasonal-reagent motif (not a food-pool-expansion); no new weave candidate emerges
- from: solmaiddream maid stats (trade commodity) | via: numismatics | to: economy | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no motif covers maid-as-trade-good; framing a companion as a commodity is thematically uncomfortable; reject-for-review per no-motif rule
- LEAVE — flavour companion addon; one survival anchor (food-variety theme) is its natural fit; no coherent second anchor without forcing it

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

Power-read: cosmetic Create Aeronautics add-on — 16 dyed levitite variants + 4 tire sizes × 16 colors = 80 items. All cosmetic skin permutations of base aeronautics:levitite and aeronautics:tire. Made by: vanilla crafting (tire + dye). No recipe types registered. No loot, no c:tags.

Method-pull candidates:

**Create (M-20 — deploy-application upgrade or toolbox dyeing):**
Create has a `create:toolbox_dyeing` method that applies color to items. Routing the dye application through Create's toolbox or through create:deploying (deploy dye onto levitite block) could make the dyeing step "feel like" a Create-automation step. However: (a) the current vanilla craft (levitite + dye) is an everyday one-step operation; (b) the hard guardrail says "never gate a basic/everyday component behind a complex recipe"; levitite dyeing is inherently everyday (cosmetic); (c) Create toolbox dyeing already covers this naturally if applicable. A forced Create gate on a cosmetic color choice is noise.

Red-team: Making colored levitite require Create power would frustrate players who just want to paint their ship. The one-light-step principle and the "everyday" tier of this item both argue against adding Create complexity. REJECT.

**Economy (M-09 — dyed rare levitite colors as premium goods):**
Premium colored levitite (e.g. gold/black ship hull paint) as a sellable luxury? The dye step costs nothing special — any vanilla dye + a levitite block. There's no effort differential between a white-dyed and a black-dyed levitite. REJECT — no scarcity cost.

REWORK check: aeronautics anchor is the natural one (it's literally an aeronautics component color palette). No existing recipe weaves. Cosmetic palette support role is correct; forcing a second anchor would be noise.

- from: aeronautics_dyeable_components colored levitite | via: create:toolbox_dyeing or create:deploying | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: everyday-tier cosmetic component; hard guardrail forbids gating basic/everyday items behind complex recipes; a dye step on a decorative palette block is the definition of "don't force this"
- from: aeronautics_dyeable_components rare colors | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: no scarcity or effort differential between color variants; M-09 requires high-effort consumable; a color swatch is not that
- LEAVE — cosmetic dye-palette for aeronautics; one aeronautics anchor is correct; no coherent second anchor without gilding

## glitchcore   [anchors: support / library (1)]

Power-read: loader-abstraction library backing Glitchfiend mods (Serene Seasons, Biomes O' Plenty, TerraBlender). Zero items, zero blocks, zero loot, zero recipe types.

Candidates via method-pull: None possible. Genuine code library.

- LEAVE — genuine zero-content loader-abstraction library; backs Serene Seasons (survival-pillar driver) but has no own material surface

## dynamictrees   [anchors: survival (1)]

Power-read: replaces vanilla trees with living branch-network trees. 90 blocks (branch/leaves/sapling variants), 35 items (per-species seeds, dendro_potion, dirt_bucket, branch items), 2 biome-modifiers. Recipe types: dynamictrees:mega_seed, dynamictrees:seed_conversion. loot=yes (tree harvests). No c:tags.

Method-pull candidates:

**Create (M-03 / M-12 — wood processing chain):**
DynamicTrees outputs logs at scale (whole-tree felling dumps all logs at once). Create:milling processes logs into wood pulp/sawdust — a natural downstream processing step. But DT's own methods (seed_conversion, mega_seed) just convert vanilla saplings ↔ dynamic seeds; there's no foreign-material sink in DT itself. The Create milling/cutting already processes DT log output as normal logs — that's a passive integration, not a candidate requiring authoring.

Could the dendro_potion (a DT growth accelerant — potions that modify tree growth parameters) be produced via Create:mixing? The potion is a worldgen/horticulture tool; routing it through Create mixing would give it a 2nd anchor. Power: mid (players who manage/automate forests want fast growth). Theme-fit: "an alchemical growth serum produced in a Create mixer" is coherent for a natural-world mod. However the dossier notes DT trees are awkward for Create automated harvesters — so if the forest isn't Create-automated, a Create-produced growth potion is a mismatch in practice.

Red-team: DT's design is deliberate "living forest feel" — it resists over-automation. Routing its potion through Create machines slightly clashes with that naturalist vibe. A farmersdelight:cooking approach (brewing the dendro_potion from foraged forest materials) would be more thematically natural, but farmersdelight:cooking is for food. The dossier already correctly flags "leave" for this module. Respect it.

**Magic (M-10 — arcane infusion of seeds):**
Could DT mega_seeds be produced/enhanced by ars_nouveau:imbuement (arcane infusion of a seed → mega/giga sapling)? An "arcane growth" angle for a naturalist mod. Theme-fit: somewhat coherent (Ars Nouveau has a growth glyph). Power: everyday (seeds are early-progression items). The hard guardrail says don't gate everyday components behind complex infusion — this would violate it for a basic seed.

REJECT — everyday seeds should not require arcane infusion; this violates the everyday guardrail.

**Survival direct (the correct anchor):** DT's survival anchor is already its natural home — it changes how wood gathering works fundamentally, feeding the wood economy. Its seed_conversion lets players establish species-specific forests. The dossier already correctly assesses: leave.

REWORK check: survival anchor is sound. No existing recipe connections beyond DT's own seed_conversion and mega_seed methods.

- from: dynamictrees:dendro_potion | via: create:mixing (alchemical growth serum) | to: create | motif: M-12 | power: mid | tone: clash | verdict: REJECT | reason: DT's naturalist/living-forest vibe resists Create automation framing; dendro_potion as a machine-mixed chemical clashes tonally; the dossier's leave assessment is correct
- from: dynamictrees mega_seeds | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: everyday-tier items (seeds) must not be gated behind complex arcane infusion per the hard guardrail (M-10 explicitly: "do not gate basic components behind infusion")
- LEAVE — survival anchor is its correct home; DT's log output feeds Create/cooking naturally downstream without needing authoring; forcing a Create or magic edge on the seed/potion layer violates guardrails or tone

## buildguide   [anchors: support / QoL-client (1)]

Power-read: client-side build-shape overlay. Zero items, zero blocks, zero loot, zero recipe types. Purely visual aid; no world interaction.

Candidates via method-pull: None possible. Genuine zero-content client QoL mod.

- LEAVE — genuine zero-content client visual utility; no material surface whatsoever

## geckolib   [anchors: support / library (1)]

Power-read: standard MC animation engine (GeckoLib). Zero items, zero blocks, zero loot, zero recipe types. Hard dependency for many mobs/bosses/magic mods in the pack.

Candidates via method-pull: None possible. Genuine code library.

- LEAVE — genuine zero-content animation/rendering library; no material surface; enables visual fidelity for the pack's content mods


