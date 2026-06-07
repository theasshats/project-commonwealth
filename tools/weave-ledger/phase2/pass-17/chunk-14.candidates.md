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


