# Phase 2 candidates — chunk-03

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen-star rock crushed for iron/nickel byproduct + XP nugget — meteors become a minor Create feedstock rather than pure landscape deco
- from: Blood Moon / Blue Moon event-state | via: occultism:ritual gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a powerful ritual only completable under the Blood or Blue Moon — the lunar event is the catalyst gate, tying Enhanced Celestials' night-cycle events into the magic pillar
- from: Blood Moon / Blue Moon event-state | via: ars_nouveau:enchanting_apparatus or imbuement | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: an Ars attunement that only resolves during a specific moon — celestial timing becomes a real scarcity gate (extends M-22 across every moon as the ledger instructs)
- from: Harvest Moon growth buff | via: config/event tie on farmersdelight crops | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Harvest Moon is a passive buff — it accelerates all crops automatically, no routing through a recipe method; this is an ambient world effect, not a weave-able edge. No material joins any method. Non-distinctive.
- from: enhancedcelestials:space_moss_block | via: create:milling | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: space moss is organic/atmospheric worldgen deco; milling it into something generic would be forced. No coherent "of course" pairing; the meteor is the stronger Create surface.

REWORK: OK — existing single anchor (survival) is sound. Two new ACCEPT links (M-04 meteor→Create, M-22 lunar→magic) bring it to 3.

---

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a dungeon mob's venom fang transmuted by spirit-fire into an occult reagent — underground exploration feeds the magic pillar
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (M-11, occultism) is the cleaner single route — imbuement for the same drop is duplicate routing; pick one method for the mob-drop reagent sink. Reject the Ars path in favour of the Occultism one.
- from: undergroundworlds temple/pyramid bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: ancient brickwork crushed back to stone + XP nugget (lossy) — the dungeon building set recycles through Create, typical deco↔Create bridge
- from: undergroundworlds dungeon chests (loot=yes) | via: loot-seed — seed numismatics coins + a magic reagent drop | to: economy + magic | motif: M-08 + M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: galleon/temple chests carry a handful of coins and a rare bottled essence — underground exploration pays out directly into both the economy and the magic reagent supply; two systems touched via one loot-table edit
- from: undergroundworlds:blade_of_the_jungle / freezing tools | via: numismatics vendor/sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Blade/freezing tools are dungeon loot; "sell them for coins" is trivially true for any rare item. No structural loop-closure here.

REWORK: OK — survival anchor is correct. Three ACCEPTs (M-11 mob-drop magic, M-04 brick→Create, loot-seed dual economy+magic) give it a strong multi-system web.

---

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — pure API compat shim (Curios/Trinkets → Accessories bridge); zero items, zero recipes, no weaveable content surface.

---

## sliceanddice   [anchors: Create, survival (2)]
- OK — connections sound. Already the textbook M-12 processing-chain bridge between the Create spine and the FD food layer. A forced third anchor would be arbitrary. Dossier's own assessment matches.

---

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight high-tier dishes (e.g. farmersdelight:beef_stew, farmersdelight:apple_pie) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the pack's richest cooked meals are trade goods — inland players buy coast/colony food surpluses; kitchen output closes the scarcity→production→economy loop for the food branch. Structurally distinctive: FD is the primary food producer, so pricing its output is a loop-closing sink, not mere sellability.
- from: farmersdelight:straw / farmersdelight:cabbage / grain crops | via: create:milling → create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this route already exists (dossier made-by: create:milling, create:mixing, create:filling) — deepening it is maintenance, not a new weave candidate. Record as existing-connection-confirmed, not a new link.
- from: farmersdelight:cooking (cooking_pot) | via: minecolonies colony provisioning | to: economy (MineColonies production route) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: colony workers consume FD cooked meals as high-quality rations, linking food production to colony growth and thus the economy pillar's production route; MineColonies as a cross-cutting producer is strengthened by FD output

REWORK: OK on existing Create↔survival links. The M-09 economy sell is ACCEPTED here as loop-closing (FD is the food producer, its output pricing is structurally meaningful, not trivial sellability), per de-emphasis exception criteria.

---

## gnkinetics   [anchors: Create (1)]
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear / gnkinetics:ring_gear | via: aeronautics drivetrain component | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: specialized gear-sets (planetary/worm/ring) feed Aeronautics propeller and control-surface mechanisms — a gear-ratio specialist's output becomes the drivetrain of a working airship, connecting the kinetics toolbox to the aeronautics arm
- from: gnkinetics:ion_thruster (creative motor tier) | via: aeronautics drivetrain | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: gnkinetics:creative_gear_motor is a creative-mode item; using it as a progression material would break the cost model. Reject this specific item; the planetary/worm gear route above is the right surface.
- from: gnkinetics gears (all metal tiers) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Gears are intermediate parts; sellability is trivial.

REWORK: OK as Create anchor. One ACCEPT (M-24 gears→aeronautics drivetrain) adds a genuine second pillar.

---

## emojitype   [anchors: support/client-UI (1)]
- LEAVE — client-only chat input helper; zero items, zero recipes, zero weaveable content.

---

## exposure   [anchors: Create, survival (2)]
- from: exposure:camera (gold variant) | via: create:sequenced_assembly (film + gold housing assembly) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier already notes sequenced_assembly develops film (existing made-by link); the gold camera upgrade is interesting but it's a cosmetic tier, not a deep endgame keystone. M-06 is reserved for flagships; a camera is mid-tier hobby gear, not a logical sequenced-assembly chain.
- from: exposure:photograph / exposure:album | via: numismatics vendor | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Photographs are creative keepsakes; "sell photos for coins" is flavor, not a structural economy loop. Dossier itself rates this WEAK.
- from: exposure:camera (gold variant) assembly | via: create:item_application / deploy | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the gold camera is a Deployer-applied upgrade onto the base camera — one light application step fits the item_application / deploy motif exactly, tying the photography hobby to Create's deployer workflow without over-engineering a hobby item
- from: exposure darkroom reagents (film chemicals) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: chemical darkroom process → arcane infusion is a tone clash. Photography and Ars Nouveau are aesthetically incompatible; players would find the pairing confusing, not "of course."

REWORK: OK on existing Create anchor. One ACCEPT (M-20 gold camera deploy-upgrade) adds a light-step Create deepening without forcing a third pillar.

---

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics IS the economy hub; the weaving direction is always foreign goods → it, not from it. No new outgoing edges to propose; existing anchors (economy pillar keystone + Create addon) are fully appropriate. Adding more edges to numismatics itself would dilute its role as the universal destination.

---

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: dungeons_arise_seven_seas galleon/fortress loot chests (loot=yes) | via: loot-seed — seed numismatics coins (doubloons/cog coins) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: pirate ships carry coin — galleon loot yields actual Numismatics currency, so raiding a sea dungeon pays off in the pack's trade economy; combat→economy loop closed via loot-seed, structurally distinctive (the ocean dungeon is a combat sink that produces circulating coin)
- from: dungeons_arise_seven_seas loot chests | via: loot-seed — seed ars_nouveau:source_gem or magic reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic ocean ruins contain arcane salvage — a magic reagent seeded into sea-dungeon chests makes exploration a supply path for the magic pillar, giving magic users a reason to sail; M-02 mob/structure drop→magic
- from: dungeons_arise_seven_seas ship structures | via: aeronautics thematic connection | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: static ship structures have no mechanical link to Aeronautics physics-ships. The "ships" theme is superficially adjacent but there's no recipe, loot, or method that connects them. Forcing an aeronautics edge here would be lore-only, not a real weave. No motif fits.

REWORK: OK — survival anchor correct. Two ACCEPTs (loot-seed coin M-08, loot-seed magic reagent M-02) give it a 3-system web via pure datapack loot edits.

---

## kambrik   [anchors: support/library (1)]
- LEAVE — Kotlin dev framework; zero items, zero recipes, no weaveable content surface.

---

## oceansdelight   [anchors: survival (1)]
- from: oceansdelight:elder_guardian_roll / oceansdelight:fugu_slice / oceansdelight:guardian_soup | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare deep-ocean ingredients become a coast specialist's trade good — fugu and elder guardian rolls are high-effort dishes only ocean fighters can produce; selling them to inland players is a genuine scarcity-driven specialization loop, distinctively structural (coast→inland trade node)
- from: oceansdelight raw drops (guardian tail, cut_tentacles) | via: create:cutting or farmersdelight:cutting on a Slicer | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create-automated Slicer (sliceanddice) runs the FD cutting recipes on ocean mob drops at scale — oceansdelight's raw processing feeds directly into the Create-automated kitchen; extends the existing FD↔Create chain to ocean ingredients
- from: oceansdelight:fugu_slice (poison-risk food) | via: occultism:ritual / irons_spellbooks potion craft | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pufferfish-derived toxin as a magic reagent input — fugu's natural poison makes it a plausible ritual/potion ingredient, so ocean combat feeds the magic pillar; distinct from mere selling
- from: oceansdelight cooked dishes | via: minecolonies colony provisioning | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this overlaps with the M-09 coast-trade ACCEPT above; the MineColonies provisioning angle is weaker here than for FD itself (oceansdelight is a subset of the food tree). Don't double-weave the same food-to-economy edge.

REWORK: OK — survival anchor is correct. Three ACCEPTs: economy coast-trade (M-09, structurally distinctive), Create automated slicing (M-12), magic fugu reagent (M-02). Becomes 3-system.

---

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client texture-rendering engine; zero items, zero recipes, no weaveable content surface.

---

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — tooltip display tweak; zero items, zero recipes, no weaveable content surface.

---

## minecolonies_tweaks   [anchors: support/QoL (1)]
- LEAVE — tag-harmonization and QoL shim enabling food weaves in other mods; no standalone material surface to weave. Its value is as an ENABLER of weaves in FD/oceansdelight/farm_and_charm, not a weave node itself.

---

## create_connected   [anchors: Create (1)]
- from: create_connected:copycat_* blocks | via: aeronautics hull/structure build | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: copycat panels wearing hull-material textures become the Aeronautics structural skin of choice — a Create-QoL block finding its second home as the decorative hull layer of airships; players build ships that look like their material (stone hull, wood cabin) using copycats over structural frames
- from: create_connected:kinetic_battery / kinetic_bridge | via: aeronautics propulsion/control power | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the kinetic battery stores rotational energy that a propeller assembly draws from — kinetic storage becomes a buffer in the ship drivetrain, tying the Create-QoL power-management blocks to Aeronautics control surfaces
- from: create_connected:item_silo / inventory_bridge | via: aeronautics cargo-hold logistics | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: silo/inventory bridge are logistics blocks; they work on ships passively but that's just "works on a ship," not a directed weave. No recipe or method join — it's ambient compat, not a structural connection. Tone is fine but no motif edge.
- from: create_connected:fan_catalyst variants | via: create:fan processing methods on ships | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: fan catalysts are already Create-internal (they extend create:fan_* processing). Deepening an existing Create-internal edge is maintenance, not a new cross-system weave candidate.

REWORK: OK as Create anchor. Two ACCEPTs (M-23 copycat hull skin, M-24 kinetic battery→drivetrain) add a genuine aeronautics second pillar.

---

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly (brass precision assembly) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is no improvised gadget — assembling it through a sequenced station with brass parts and a power cell makes the top drone tier a genuine Create milestone; aeronautics flight depth scales with production skill
- from: drones:iron_rotor | via: create:pressing (sheet metal) or create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors require stamped sheets from Create pressing — mid-tier drone flight is gated on Create sheet fabrication, not raw crafting; one clean step, appropriate power level
- from: drones:pocket_drone (assembled) | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. A crafted drone being sellable is trivially true. No structural loop-closure.
- from: drones:drill block (ability component) | via: aeronautics logistics arm (drone as scout/miner) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: drones already anchors aeronautics; the drill-ability is internal to that anchor, not a new cross-system edge.

REWORK: OK as aeronautics anchor. Two ACCEPTs (M-06 ion thruster sequenced-assembly, M-05 iron rotor press-gating) add Create as a genuine second pillar.

---

## glitchcore   [anchors: support/library (1)]
- LEAVE — loader-abstraction API backing Serene Seasons/TerraBlender; zero items, zero recipes, no weaveable content surface.

---

## puzzleslib   [anchors: support/library (1)]
- LEAVE — Fuzs's multi-loader utility library; zero items, zero recipes, no weaveable content surface.

---

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual (undead-themed transmutation) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the undead eye is ritually assembled from wither-skeleton bones + occultism spirit components — a magic method that a stuck explorer uses as a crafting fallback; exploration gate and magic pillar meet at the ritual altar
- from: endrem:nether_eye | via: ars_nouveau:imbuement (nether-material infusion) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a nether-forged eye imbuement — blaze powder + source gem + nether star fragment converge at the enchanting apparatus; keeps End access costly but removes pure-RNG dead-ends for the magic-path player
- from: endrem:guardian_eye | via: create:sequenced_assembly (derpack:incomplete_eye assembly chain) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: one eye variant (the guardian eye) assembled through a sequenced station with prismarine components — the Create spine gets a direct role in unlocking the End; ties the tech-path to End progression without trivializing the other 11 eyes
- from: endrem all eyes | via: create:sequenced_assembly (multiple eyes craftable) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: if too many eyes have a craft path, the exploration intent of endrem collapses. At most one or two should be craftable (guardian + nether/undead). Crafting all 16 removes all exploration pressure — explicitly anti-design for this mod. Accept the individual targeted ones above; reject the broad route.
- from: endrem:corrupted_eye / magical_eye | via: ars_nouveau:summon_ritual (ritual completion reward) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: these two eyes already cover the magic slot well via M-10/M-11 above; a second magic method for different eyes is redundant weaving without added design signal. One motif per system anchor is sufficient at this tier.

REWORK: OK — survival anchor is the foundation (End-gating = ultimate survival pressure). Three ACCEPTs: M-11 undead_eye ritual (magic), M-10 nether_eye imbuement (magic), M-06 guardian_eye sequenced assembly (Create). Endrem becomes a 3-system convergence point: survival pressure → magic methods or Create production → portal unlock.

---

== CHUNK COMPLETE ==
