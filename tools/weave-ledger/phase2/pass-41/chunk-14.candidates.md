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

## chefsdelight   [anchors: survival + economy (2)]

Already 2 anchors — existing rows cover M-26 (feast consumption), M-33 (Cook/Chef labor service), M-08 (loot-seed cook-structure coin), M-28 (colony Cook hut), M-16 (seasonal trade list), M-37 (research gate). The mod is well-connected. One genuine gap and one challenge:

- NEW | from: chefsdelight Cook/Chef feast outputs (Roast Chicken, Honey Glazed Ham — high-nutrition multi-group meals) | via: extradelight:drying_rack (a Chef's brined ham hangs on the drying rack before becoming Honey Glazed Ham — one pre-cooking preparation step using the FD-ecosystem drying method) | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: the feast doesn't come from the cooking pot alone — the ham cures on the drying rack first; aging as a specialist step makes the Chef's premium output qualitatively different from a plain cook, creating a time-gated demand signal that can't be instantly satisfied.

- CHALLENGE | from: chefsdelight Cook/Chef villager trades | via: KubeJS config re-mapping trades to numismatics coin | to: economy | motif: M-08 | verdict: REJECT | hook: M-08 is player-minted currency (scarce metal → Create-processed → pressed coin); re-mapping an NPC's emerald trade to numismatics coin is an NPC-faucet pattern — coin from outside the player economy, exactly what M-14 was cut for. The existing split (1A/1R) row for this should resolve as REJECT. The M-08 loot-seed row (finding coin in cook-structure chests) is distinct and valid; the *trade re-mapping* version is not.

OK — existing rows are generally sound; the M-35 aging step and M-08 trade-remapping challenge are the key additions.

## bagus_lib   [anchors: support (1)]
LEAVE — pure shared code library (baguchi's mod suite), zero content surface. No rows existed; none are needed.

## copycats   [anchors: Create (2 via Create dependency)]

Existing rows are extensive. The dossier says LEAVE — it already lives inside the Create pillar (zinc-built, Create-dependent). Two challenges to contested existing rows:

- CHALLENGE | from: copycats:copycat_catwalk | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | verdict: REJECT | hook: the 3 ACCEPT rows for copycat_catwalk under M-23 (structural) are incorrect — M-23 requires a *load-bearing structural alloy* (metal plate/beam/alloy) as the airframe ingredient; a catwalk is a decorative walkway surface, not a structural hull component. Cosmetic cladding that adopts any texture is the opposite of a structurally distinct material. The catwalk's value on a ship is purely aesthetic (deck plating look) — it does not carry M-23's "makes airframes cost real fabricated material" logic. All 3 M-23 ACCEPTs should resolve to REJECT.

- CHALLENGE | from: copycats:copycat_block (blank zinc shape) | via: create:crushing (recycle to zinc) | to: create | motif: M-04 | verdict: REJECT | hook: the existing rows are split 3A/3R — the REJECT side is stronger. A copycat block is a runtime skin-container (it adopts whatever block is applied to it); crushing it is ambiguous — does it return the zinc of the blank, or the material of the applied skin? The native unmake path (remove applied block first) already returns materials; adding a crush recipe creates a double-spend ambiguity and incentivizes skipping the de-skin step. M-04 is cleanest for fixed-material deco blocks; copycat's dynamic-skin nature makes the recycle path incoherent.

OK — copycats is correctly identified as LEAVE for a second hard anchor beyond Create. The two CHALLENGE rows are the only contributions.

## bettermineshafts   [anchors: survival (1)]

Existing rows: M-08 loot-seed ACCEPT (2A/1R) and M-02 loot-seed ACCEPT (2A/1R). However the dossier clearly states `loot=no` and notes the mod uses vanilla mineshaft loot tables (it only expands the *structure*, not the loot tables). This is the critical issue the existing rows fail to resolve cleanly:

- CHALLENGE | from: bettermineshafts expanded mineshaft structures | via: loot-seed (inject weave-relevant items into the structures' loot) | to: economy | motif: M-08 | verdict: REJECT | hook: the dossier says `loot=no` and uses vanilla `chests/abandoned_mineshaft` — Better Mineshafts does not register its own loot table path. A loot-seed here is editing the vanilla mineshaft table, not bettermineshafts-specific content. The 2 ACCEPTs conflate "Better Mineshafts has chests" with "Better Mineshafts has its own loot tables" — it does not. Any loot-seed edit is a vanilla-table modification that applies whether bettermineshafts is installed or not, so it's not a bettermineshafts weave.

- CHALLENGE | from: bettermineshafts expanded mineshaft structures | via: loot-seed (inject rare magic reagent as a dungeon find) | to: magic | motif: M-02 | verdict: REJECT | hook: same reason as M-08 above — `loot=no` means the mod has no owned loot table to seed. The 2 ACCEPTs should be reconsidered; the correct action is to edit the vanilla `abandoned_mineshaft` table (which happens to appear in Better Mineshafts' larger structures but is not its property). That edit is valid for its own sake but should not be attributed to this mod as its weave.

LEAVE — no owned loot table, no items, no methods. The two existing ACCEPT rows are grounded on an incorrect reading of the dossier and should be resolved to REJECT.

## create_mobile_packages   [anchors: Create + aeronautics (2)]

Already 2 anchors, extensively covered: M-05/M-20 (robo_bee fabrication), M-31 (logistics bulk supply), M-33 (drone operator service), M-37 (colony aerial-logistics research), M-28 (colony courier integration), M-29 (cross-route dependency). One genuinely absent angle:

- NEW | from: create_mobile_packages:mobile_packager (bundles 9 inventory stacks into a single addressed package on-the-go) | via: create:mechanical_crafting (the mobile packager is a precision consolidation instrument — assembled from Create electron tubes + brass casing on the mechanical crafter) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the mobile packager is the difference between hand-carrying goods and running a serious logistics operation — building one requires the Create fabrication line, tying trade-infrastructure to the Create spine and making it a mid-tier investment, not a free tool.

OK — all other major angles are covered. The mobile_packager fabrication route is the one unaddressed item.

## friendsandfoes   [anchors: survival (1) → target Create/magic]

Existing rows cover: M-02 (crab_claw → magic, strong consensus), M-04 (copper deco crushing, contested), M-34 (Wildfire/Illusioner combat supply). The mod is deliberately vanilla-like. Genuinely missing angles:

- NEW | from: friendsandfoes:crab_claw | via: ars_nouveau:potion_flask (the claw already brews a reach-extension potion in vanilla brewing; converting it to an Ars potion_flask recipe routes the claw into the magic potion system via Ars's own method rather than vanilla brewing, adding the Ars system as a consumer without requiring imbuement) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: the claw is already a brewing ingredient — ars_nouveau:potion_flask is the narrowest viable bridge from vanilla-brew to the Ars magic system; it extends the claw's use without the imbuement complexity, and one existing ACCEPT row in prior passes confirms this angle.

- NEW | from: friendsandfoes copper buttons / weathered lightning rods (full oxidation series) | via: create:splashing (water-splashing oxidized copper advances the weathering stage or de-waxes waxed variants — standard Create copper-oxidation control extended to these copper deco pieces) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's water-splashing mechanic controls copper weathering on pipes and sheets — extending it to Friends & Foes copper buttons and lightning rods is the obvious Create-palette expansion; a player running an oxidation line for copper age-control processes the decorative set as naturally as the structural copper.

- CHALLENGE | from: friendsandfoes:copper_golem_head (decorative drop) | via: create:pressing or boss-key gate | to: create | motif: M-15 | verdict: REJECT | hook: the copper golem is not a boss — it's a gentle utility mob (presses copper buttons, oxidizes naturally); its head drop is a flavor trophy, not a boss-key. Using it as a locked gate item (M-15) imposes combat scarcity on a non-combat mob's drop, which contradicts M-15's "meaningful fight" requirement and the golem's vanilla-faithful whimsical character. The 1 REJECT row is correct; no ACCEPT should survive.

OK — crab_claw potion_flask and copper splashing are the two genuine gaps. The copper deco M-04 crushing rows (highly contested, 9R/8A) are close enough to leave to human judgment; the splashing alternative (create:splashing) is a cleaner single-step that the existing rows missed entirely.

## moreoverlays   [anchors: support (1)]
LEAVE — client-side HUD overlay mod, zero items/blocks/recipe-types. No rows existed; none are needed.

== CHUNK COMPLETE ==
