# Phase 2 candidates — chunk-14 (context-fed)

## blood_n_particles_datapack   [anchors: support (1)]
LEAVE — zero content surface confirmed. The dossier's `loot=yes` flag is a false positive: the 184 "items" (minecraft:blood1..blood15, *_parent, etc.) are particle/effect holder entries, not usable items, and the mod registers no recipe-types. No method-pull is possible. The existing REJECT row for the loot-seed candidate is correct and sufficient.

## more_slabs_stairs_and_walls   [anchors: support/Create (1→2)]

Existing rows already cover the core weaves: M-12 create:cutting bulk-production (strong, well-accepted), M-04 gravity-variant crushing (contested but partial accept), M-28 colony builder requests, and one M-29 ACCEPT for amethyst-slab imbuement pedestals. The M-12 and M-28 angles are sound. The following are what the existing coverage is missing:

- CHALLENGE | from: more_slabs_stairs_and_walls:amethyst_block_slab / amethyst_block_stairs | via: ars_nouveau:imbuement (as pedestal blocks gating progression) | to: magic | motif: M-29 | verdict: REJECT | hook: The existing row misdescribes M-29 — cross-route dependency means a *recipe* in mod A requires an ingredient from mod B; Ars Nouveau's Enchanting Apparatus uses structural blocks in-world (not as consumed recipe inputs), so the amethyst-slab pedestals are a *build* constraint, not a recipe cross-dependency. The cited M-29 is the wrong motif; if the link is real, it should be M-05 (native-method gating: the apparatus setup constrains what shapes you can use) and the existing row's one ACCEPT is an error.

- NEW | from: more_slabs_stairs_and_walls wood-family cuts (log/plank slabs, stair, wall) | via: minecolonies:zero_waste (colony builder requests bulk log-cuts for schematic upgrades, making the cuts a colony-supply good, not just a builder-palette filler) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony Builder's Hut reaching tier 3 requests polished-log walls and plank stairs for its schematic — the Create saw runs them, and the colony player buys from the woodworker, not the quarry; the cut-block demand is continuous and never zeroes.

OK — existing rows sufficient for M-12 and M-04 core coverage; the M-28 colony supply and M-29 amethyst challenge are the only gaps.

## modernfix   [anchors: support (1)]
LEAVE — pure performance mod, zero items/blocks/recipe-types. No rows existed; none are needed.

## lionfishapi   [anchors: support (1)]
LEAVE — pure code library (animation/entity API), zero content surface. No rows existed; none are needed.

## inventoryprofilesnext   [anchors: support (1)]
LEAVE — client-only inventory QoL, zero items/blocks/recipe-types. The one existing REJECT (no-motif behavioral UI) is correct and exhausts the space.

## midnightthoughts   [anchors: survival (1)]
LEAVE — confirmed. Nine distinct approaches were rejected across prior passes, all hitting the same wall: the mod ships no items or tags, so no method-pull is possible and any link would require inventing new content (authoring, not weaving). The survival anchor is its only anchor. OK — existing rows sufficient (and exhaustively negative).

## createshufflefilter   [anchors: Create (1)]
LEAVE — confirmed. Ten prior REJECT rows exhaust every plausible angle (M-06, M-20, M-24, M-05, M-10, M-08, aeronautics framing). The two filter items are pure builder utility with no cross-system surface; forcing a second anchor is arbitrary. Dossier's own assessment ("leave") stands.

## deeperdarker   [anchors: survival (1) → target magic/Create]

Existing rows are extensive and cover the core vectors well: M-11/M-02 (soul_dust/soul_crystal → occultism/ars), M-04 (gloomslate/sculk_stone crushing), M-15 (heart_of_the_deep as boss-key), M-10 (warden_carapace/sculk_bone imbuement), M-19 (create:haunting for soul matter), M-30 (Otherside dimension-lock), M-31 (logistics bulk supply), M-34 (combat-route supply), M-05/M-06 (sculk_transmitter and carapace gating). The following angles are NOT present in existing rows:

- NEW | from: deeperdarker echo wood / bloom wood set (echo_planks, bloom_planks — full alien wood families) | via: create:cutting (mechanical saw bulk-produces echo/bloom planks, slabs, stairs from echo logs/bloom stems) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Otherside has a complete alien wood family; a Create sawmill running echo logs produces the full building palette automatically — builders who want the bioluminescent wood set run the Create lumber line, folding an Otherside material into the production spine.

- NEW | from: deeperdarker:sculk_transmitter (wireless-redstone automation block) | via: create:mechanical_crafting (sculk_transmitter as a required component in advanced Create contraption control circuits) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: to automate a Create sequenced-assembly line beyond basic local redstone, the engineer needs an Otherside-sourced wireless block — the engineer and the dimension-runner must collaborate; the transmitter is the cross-route ingredient that keeps the two specializations non-overlapping.

- NEW | from: deeperdarker:crystallized_amber (rare Otherside geological drop) | via: create:crushing (amber_dust byproduct) → create:compacting (amber_dust + resin = adhesive compound) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing crystallized amber yields fine amber dust as an industrial byproduct — a sticky resin feedstock for a Create compacting recipe (adhesive compound for precision mechanisms); the Otherside's geological product loops back as a Create input, closing the byproduct chain.

- NEW | from: deeperdarker:warden_carapace (hardened chitinous plate, endgame boss drop) | via: create:pressing (press into reinforced shell plate — alternate to iron sheet for high-tier aeronautics hull construction) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's carapace pressed into hull plates makes the heavy-class airframe cost a dangerous dimension raid, not just more iron — the ship's structural cost is gated on the deadliest hostile in the pack.

- CHALLENGE | from: deeperdarker soul materials (soul_dust, soul_crystal) | via: create:haunting | to: create | motif: M-19 | verdict: REJECT | hook: soul_dust and soul_crystal are already strong M-11/M-02 magic reagents — routing them also through create:haunting double-spends the same material without adding a new system anchor (haunting produces soul-adjacent outputs; feeding already-magical soul_crystal INTO haunting has no clear product and no thematic logic beyond "it is soul stuff"). M-19's value is using Create's soul-fire to transmute ordinary items into soul-adjacent forms (e.g. haunting plain gloomslate → haunted variant), not consuming finished soul reagents. The 1 ACCEPT row in existing passes should be reconsidered.

## samurai_dynasty   [anchors: survival (1) → target Create + magic]

Existing rows are extensive: M-03 (gem ore crushing), M-02/M-11 (Yokai drops → magic), M-10 (gems → imbuement), M-08 (steel → numismatics), M-05 (steel pressing), M-15 (boss-key Immortal), M-23 (steel → airframe), M-30 (regional gem scarcity), M-34 (weapons as combat-supply), M-29 (steel cross-route tfmg). The following are genuinely missing:

- NEW | from: samurai_dynasty Yokai mobs (Akaname, Tengu, Enenra, Kitsune) — mob spawning intensity | via: config/spawn-rate event gating (Serene Seasons autumn config: Yokai spawn-weight boosted in autumn when the veil thins, per Japanese folklore) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: in Japanese folklore Yokai are most active when the seasons turn — autumn in Serene Seasons doubles their spawn rate, making reagent farming seasonal and Yokai drops scarcer in other seasons; a reagent farmer plans around the harvest moon.

- NEW | from: samurai_dynasty Yokai spawn events | via: lunar/celestial event (Enhanced Celestials full/blood moon: Yokai spawn rate spikes further on the pack's lunar events) | to: survival | motif: M-22 | power: everyday | tone: ok | verdict: ACCEPT | hook: the blood moon draws the spirits — Yokai surge in numbers on Enhanced Celestials' event nights, making those nights both more dangerous and the best time to farm soul reagents; the lunar cycle becomes a farming calendar.

- NEW | from: samurai_dynasty:cloth (woven textile, in item sample) | via: minecolonies request (colony Tailor/Leatherworker hut requests cloth for armor-schematic upgrades — samurai cloth feeds colony textile demand) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony Tailor needs woven cloth for higher-tier worker uniforms — sourcing samurai cloth ties the feudal textile trade to the colony supply chain; the combat-themed mod's fabric output earns a colony anchor.

- CHALLENGE | from: samurai_dynasty:steel_ingot (c:ingots/steel) | via: numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: multiple M-08 rows for samurai steel are split (2 ACCEPT / 2 REJECT). The problem: samurai_dynasty shares c:ingots/steel with TFMG and other steel producers — minting "samurai steel" as a coin metal is arbitrary if any c:ingots/steel qualifies; the coin economy doesn't care which forge made the steel. M-08 is strongest when the minted metal is regionally distinctive (M-30 + M-08 paired). If samurai jade/ruby/onyx are the regionally scarce gems (M-30 accepted), those should be the coin metals, not the generic steel tag. The existing ACCEPT rows are weak; the REJECT rows are more defensible.

## supermartijn642configlib   [anchors: support (1)]
LEAVE — pure config API library, zero content surface. No rows existed; none are needed.

## lootjs   [anchors: support (1)]
LEAVE — packdev scripting library (loot-table modification API), zero player-facing content. No rows existed; none are needed. Note: lootjs is the *enabler* of M-02 mob-drop weaves, not a weave node itself.

## lithium   [anchors: support (1)]
LEAVE — server/world-tick optimization only, zero content surface. No rows existed; none are needed.

## companion   [anchors: support (1)]
LEAVE — pet QoL behavior mod, zero items/blocks/recipe-types. No rows existed; none are needed.




