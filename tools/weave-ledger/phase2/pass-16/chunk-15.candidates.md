# Phase 2 candidates — chunk-15

## cold_sweat   [anchors: survival (1)]

Power-read: Cold Sweat is a survival-pressure mod — it makes the *world push back* via temperature, which is core loop pressure. Its items stratify: waterskins (everyday carry), insulated armor (mid-tier, crafted at sewing table), and the Hearth/Boiler (mid-to-late, post-Nether multiblock). It already has a `create:filling` inbound edge (waterskins). The Hearth is a climate-control machine requiring Nether components — meaningfully gated.

- from: cold_sweat:hearth / boiler (climate machine) | via: recipe (M-05 native-method gating) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth needs brass piping and a Create casing to channel steam properly — a tech player builds the first climate shelter
- from: cold_sweat:goat_fur / chameleon_molt / hoglin insulation materials | via: create:crushing (byproduct chain — mob drops processed into ultra-fine insulation batt) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 is ore-doubling; applying it to fur/hide is a stretch and creates a trivial edge (crush mob drop → get same material finer). Not a genuine loop advance.
- from: insulated armor (cold_sweat:goat_fur_chestplate / chameleon_boots etc.) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a cold-climate survival specialist sells insulated kit to crews preparing for polar/Nether expeditions — climate gear is a real trade commodity
- from: cold_sweat:soul_stalk (world-gen Nether plant that stores soul-fire heat) | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: soul_stalk run through Create's soul-fire haunting step transmutes it into a concentrated heat catalyst — the soul/haunting seam gives the Nether plant a second life in the tech chain
- from: cold_sweat temperature system | via: M-16 seasonal reagent config-tie | to: survival (Serene Seasons driver) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the intended design (Cold Sweat + Serene Seasons = seasons drives temperature); there's no new weave here — it's an existing in-engine config relationship, not a candidate connection to author.

REWORK: existing `create:filling` edge (waterskins) is appropriate — a one-step inbound that brings a daily-use item into the Create fluid network. OK — no rework needed.

OK — connections sound on the existing filling edge; new ACCEPT candidates add create (M-05 Hearth gating, M-19 soul stalk) and economy (M-09 insulated armor sell) anchors for a total of 3 anchors.

## mutantszombies   [anchors: survival (1)]

Power-read: loot=no, 0 blocks, 7 items are all spawn eggs. The dossier confirms no special drops, no craftable outputs, no methods. The 7 zombie/mutant variants are pure hostile-mob behaviors raising the night-threat floor. There is genuinely no item surface, method surface, or loot table to seed.

LEAVE — zero content surface: no drops, no loot tables (loot=no), no craftable items beyond spawn eggs. The survival anchor (extra dangerous mobs = pressure) is the correct and only fit. Forcing an edge would be the failure mode the briefing names explicitly.

## aileron   [anchors: aeronautics (1)]

Power-read: 0 blocks, 0 items, loot=yes. Aileron is a behavior overhaul — it rewrites Elytra flight physics and adds Elytra-specific enchantments injected into loot tables. The loot=yes flag means enchantment books / loot entries can exist in structure chests. Enchantments are the only material surface.

- from: aileron Elytra enchantments (enchanted books in loot tables) | via: loot-seed (seed aileron enchant books into dungeon/structure loot — existing loot=yes) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is combat → coin via bounty board; enchant books in loot are a survival-reward, not a bounty/coin flow. The link to economy here would need to be villager trade (M-21 provisional, maintainer leans no) or a sell mechanic that isn't grounded. No clean motif — no-motif reject.
- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus (applying Aileron's enchants through the Apparatus if datapack-exposed) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Aileron enchantments are vanilla-enchant-system entries; whether they are Enchanting Apparatus–compatible depends on whether the enchant IDs are in the apparatus's tag. This is speculative (dossier notes "only if enchants are datapack-exposed" — unconfirmed). The connection is M-10-adjacent but not clean enough to ACCEPT without confirmation that the enchants register normally. Flag as unresolved rather than accept.
- from: aileron Elytra overhaul (makes Elytra a balanced peer to aeronautics ships) | via: config-tie (tuning Elytra stamina/recharge to require Aeronautics-produced fuel/items for recharging) | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no motif covers "requires fuel to recharge a vanilla item"; would require inventing a new mechanic not in aileron's design. no-motif reject.

LEAVE — behavior-only mod with no item surface to route through any method. loot=yes exists but the loot is vanilla enchantment books; no coherent second anchor survives red-teaming. aeronautics anchor (personal flight peer to airships) stands alone.

## notenoughanimations   [anchors: support/client-UI (1)]

Power-read: 0 blocks, 0 items, loot=no. Pure client-side procedural animation renderer. No gameplay effect, no materials, no methods.

LEAVE — genuine zero-content code library (client animation renderer). Support role is correct and sufficient; no weave possible.

## miningspeedtooltips   [anchors: support/client-UI (1)]

Power-read: 0 blocks, 0 items, loot=no. Tooltip display tweak reading existing tool stats. No world interaction.

LEAVE — genuine zero-content display mod. Support role is correct; no weave possible.

## afk-sleep-1.3.2   [anchors: support (1)]

Power-read: 0 blocks, 0 items, loot=no. Pure server behavior mod adjusting the sleep-quorum calculation. No content whatsoever.

LEAVE — genuine zero-content server behavior mod. Support role is correct; no weave possible.

## yungsapi   [anchors: support/library (1)]

Power-read: 0 blocks, 0 items, loot=no. Pure API/library — jigsaw manager, structure utilities. Self-described as having "no affect on the game in any way" on its own.

LEAVE — genuine zero-content library/API. Support role is correct; no weave possible.

## create_factory   [anchors: create, survival (2)]

Power-read: Already ≥2 anchors. Everyday-to-mid items (waffles, rolls, candy apples, jam/cream fluids). The jams/spread/nectar fluids are interesting as intermediates — they could feed into other food chains. The sweets are completed goods. The mod already uses create:mixing/pressing/filling and creates its own fluid outputs.

- from: create_factory jam/nectar fluids | via: numismatics sell (M-09 luxury good→coin) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: artisan sweets and preserves are crafted through Create machines then traded at market stalls — a confectioner becomes the server's bakery specialist
- from: create_factory cream_bucket / sweet_berries_jam (fluids) | via: create:mixing (as ingredient input into other Create food recipes — chain into vinery or extradelight) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod already anchors create via its native use of create:mixing/pressing/filling; adding another create:mixing edge where the output is still Create-internal doesn't advance the loop — it's a deeper create-only edge that doesn't gain a second system.
- from: create_factory sweets (honey_waffle, caramel_apple etc.) | via: bountiful bounty board (M-14 — "deliver luxury food bundles for coin") | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 is specifically mob-drop→coin (bounty board consuming combat drops); using it for food delivery would be a mis-application of the motif. The correct motif is M-09. Not a separate candidate — covered by the M-09 ACCEPT above.
- from: create_factory jam/nectar fluid | via: ars_nouveau:imbuement (sweet jam as a potion-brewing catalyst or essence solvent for the Ars apparatus) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — a berry jam does not fit as an arcane infusion catalyst. The Ars apparatus expects minerals, essence, and magical components, not dessert preserves. Red-team kills this.

REWORK: OK — existing create+survival anchors are sound (Create machines produce dessert foods). The M-09 economy accept is a clean additive third anchor.

## bettermineshafts   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, loot=no. Structure worldgen overhaul of vanilla mineshafts. Uses vanilla mineshaft loot tables — no custom loot tables of its own (loot=no confirmed in dossier). No processing methods. No items.

- from: bettermineshafts expanded shaft network | via: loot-seed into vanilla mineshaft loot tables | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: loot=no means no loot table surface owned by this mod. Seeding vanilla minecraft:chests/abandoned_mineshaft is possible but is not an edge on bettermineshafts specifically — it's modifying vanilla, not this mod's content. The action would be attributed to Vanilla, not to bettermineshafts.
- from: bettermineshafts deeper/more dangerous mineshaft layouts | via: survival pressure (danger face) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: danger-pressure is bettermineshafts' existing anchor; there is no new edge to author here — it already anchors survival via exploration hazard. Duplicative.

LEAVE — no items, no loot tables of its own, no methods. The survival anchor (exploration/spelunking world-feel) is the only fit. Indirectly serves the scarce-ore mining loop but offers no authoring hook.

## modulargolems   [anchors: create (1)]

Power-read: 1 block (golem_workbench), 308 items (golem parts, upgrades, cross-mod templates). Already uses create:crushing, create:mechanical_crafting, create:sequenced_assembly. Golems range from everyday (basic iron body) to endgame (dragonsteel/cursium bodies gated on boss metals). The mod is a rich automation/combat platform. Cross-mod metals (Cataclysm cursium, Ice&Fire dragonsteel) are mid-to-endgame. loot=yes.

- from: modulargolems boss-metal golem bodies (cursium from Cataclysm, dragonsteel from Ice&Fire) | via: modulargolems:golem_assemble (the golem workbench assembly — gate high-tier golem body on boss drops) | to: survival (boss-drops production route) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a cursium or dragonsteel golem body requires the corresponding boss's signature drop as a core component — fighting Cataclysm/Ice&Fire bosses unlocks the golem tier that fights beside you
- from: modulargolems:golem_assemble / golem_replace_part | via: occultism:ritual or ars_nouveau:imbuement (binding a source gem or otherstone into the golem core as a magical awakening step) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a golem is an animate construct — awakening it requires an arcane infusion step (a source gem or Ars essence bound into the core at the apparatus); golemancy bridges industrial fabrication and magic
- from: modulargolems upgrade slots (add_N_slot items) | via: create:mechanical_crafting (complex precision-machined slot expansion templates — multi-step crafting table → MC grid) | to: create | motif: M-06 | power: mid-endgame | tone: ok | verdict: REJECT | reason: modulargolems already fully anchors create via its native use of create:crushing, create:mechanical_crafting, and create:sequenced_assembly. Adding another create-internal step doesn't gain a system; the create anchor is already established. Not a new-anchor candidate.
- from: modulargolems assembled golem (completed construct) | via: numismatics sell (M-09 — golems as high-value hirelings/trade goods) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: golems are combat/utility entities, not consumable trade goods. Selling a deployed mob-entity via coin is not a Numismatics mechanic; Numismatics sells items in chests/shops, not entity-class constructs. The mechanic doesn't fit — red-team kills this.
- from: modulargolems cross-mod metal golem parts (using any c:ingots/X metal) | via: create:crushing (ore-doubling gives the metals needed — scalable supply chain) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: same issue as above — modulargolems is already create-anchored; M-03 on the input metals is a deeper create-internal edge, not a second anchor. Reject.
- from: modulargolems loot table (loot=yes) | via: loot-seed (seed boss golem-part blueprint / template scroll into boss loot — awakening recipe exposed as a rare find) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: this is subsumed by the M-15 ACCEPT above (boss drop → golem body). Seeding a loot table would double-count the same link. Reject as redundant.

REWORK: the current create anchor (crushing/mechanical_crafting/sequenced_assembly) is sound — the golem assembly chain is genuinely Create-deep. OK — but the mod is currently 1-anchor (only create is listed in the dossier). The M-15 and M-10 ACCEPTs above add survival/boss-drop and magic as real second and third anchors.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]

Power-read: 847 blocks, 847 items, loot=yes. Vanilla-style slab/stair/wall variants. These are all stonecutter/crafting-table shapes — everyday builder goods. The dossier already flags the create:cutting candidate as STRONG (M-12). Red-teaming: bulk building automation via saw is exactly what every Create pack does with stone/wood cuts; it's a natural and coherent fit.

- from: more_slabs_stairs_and_walls cut blocks (847 slab/stair/wall variants) | via: create:cutting (mechanical saw recipes so all 847 cuts are producible in bulk on the Create spine) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a builder running a factory-scale project can automate their entire cut-stone and timber inventory through a mechanical saw line — the decoration set becomes part of the Create production web
- from: more_slabs_stairs_and_walls gravity variants (concrete_powder slab, sand slab, gravel slab) | via: create:crushing (crushing back to original sand/gravel/powder — lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: overstocked concrete-powder or gravel cuts feed back into the Create ore-processing chain as bulk raw material — the recycle loop closes naturally
- from: more_slabs_stairs_and_walls stone cuts | via: numismatics sell (M-09 — bulk pre-cut building materials as a trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: while possible, pre-cut decorative stone as a "luxury good" strains the motif — M-09 is explicitly for high-effort consumables (wine, cheese, processed crops). Selling bulk stone cuts would be low-margin commodity trade, not the high-value luxury good the motif is designed for. The create anchor (M-12 cutting + M-04 recycle) is the coherent weave; economy here is a thin add-on that doesn't advance the loop. Reject.

REWORK: the mod currently has only a support/decoration anchor. Both ACCEPT candidates (M-12 + M-04) add a create anchor — together they are the create weave: produce cuts in bulk via saw, recycle overstock via crushing. No existing connections to flag as weak — the dossier correctly left this as a candidate for exactly this.

## formationsnether   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, loot=yes. The mod scatters Nether structures (ritual altars, cabins, pedestals, sanctuaries, castles, campsites) through worldgen. Its loot tables (loot=yes) are the authoring surface — the chests/altars it places contain drops we can configure.

- from: formationsnether loot tables (structure chests/altars) | via: loot-seed — seed Numismatics coin or magic reagents into Nether structure loot | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: exploring the Nether ruins yields coin (or coin-precursor processed metals) alongside normal loot — danger (pressure) pays out in economy currency, turning exploration into trade capital
- from: formationsnether loot tables (ritual altar structures) | via: loot-seed — seed Ars Nouveau source gems or Occultism bound books into Nether altar chests | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether altars hold arcane relics — magic players seek out Formations Nether ruins specifically for ritual loot, binding the exploration leg to the magic production route
- from: formationsnether altar/sanctuary structures | via: loot-seed — seed a boss-unlock key (or precursor component) into the deepest/rarest structure | to: survival (boss-drops route) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss drop to be the gate item for a complex recipe; seeding a "boss-unlock key" into Nether structure loot inverts the motif — the key goes INTO the loot table rather than being dropped BY a boss. The motif doesn't fit this direction. Reject.
- from: formationsnether campsite/cabin structure loot | via: loot-seed — seed TFMG fuel canisters / refined diesel into Nether campsites | to: aeronautics (fuel supply) | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: tone clash — Nether campsites (pre-industrial ruins) dropping modern diesel canisters breaks narrative coherence. A Nether campsite holding found fuel containers is too anachronistic. Red-team kills this.

REWORK: the existing survival anchor is sound (Nether exploration/pressure). The two ACCEPT loot-seed candidates (M-08 coin + M-02 magic reagents) add economy and magic as second and third anchors via the loot-table surface.

## ferritecore   [anchors: support/perf (1)]

Power-read: 0 blocks, 0 items, loot=no. Pure runtime memory-optimization mod. No gameplay effect whatsoever.

LEAVE — genuine zero-content performance library. Support/perf role is correct and sufficient; no weave possible or appropriate.

## supplementaries   [anchors: create, survival (2)]

Power-read: Already ≥2 anchors, deeply cross-woven (270 blocks, 317 items). The dossier explicitly states "already ≥2 pillars and deeply cross-woven; adding more edges is unnecessary." loot=yes, 74 c:tags. Existing connections: create:haunting/mixing/splashing, farmersdelight:cutting, jeed effects. Material join keys: flax (c:crops/flax), ash (c:dusts/ash), soap (c:storage_blocks/soap), candy (c:foods/candy).

- from: supplementaries:ash (c:dusts/ash) | via: create:mixing (ash as a flux/reagent in Create metallurgical mixing — e.g. ash + metal powder → refined alloy or slag removal) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries already anchors create via native create:haunting/mixing/splashing — another create:mixing edge is internal and doesn't gain a system anchor. The mod is already create+survival; a third create edge doesn't advance the loop. Reject.
- from: supplementaries:candy (c:foods/candy) | via: numismatics sell (M-09 — candy as a luxury confection trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: supplementaries candy is a small-batch luxury food; sweet shop stalls selling candy to colonists and travelers tie this confection into the trade web — a low-tier but coherent economy anchor
- from: supplementaries flax crop (c:crops/flax, c:seeds/flax) | via: farmersdelight:cutting (existing inbound already exists for other items — flax fibers → rope → sail canvas for aeronautics) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: ACCEPT | hook: supplementaries flax → processed rope → sailcloth canvas used in Aeronautics sails/envelopes; a fiber farmer supplies the fleet's rigging, tying the survival crop layer to the aeronautics drivetrain
- from: supplementaries:jar (stores fluids/items) | via: config-tie — jars as on-ship cargo containers for Aeronautics freight runs | to: aeronautics/economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no motif covers "decoration block used as ship cargo container." This is a config-flavor idea, not a recipe-level weave. no-motif reject.
- from: supplementaries:soap (c:storage_blocks/soap) | via: create:mixing (soap as a mixing component in a chemical/industrial recipe — degreasing step for machine parts) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: same as ash above — supplementaries already anchors create; this is a deeper create-internal edge, not a new anchor. Reject.
- from: supplementaries:flax crop (seasonal availability via Serene Seasons) | via: M-16 seasonal reagent — flax is a summer crop that feeds rope/canvas in season-sensitive recipes | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries already anchors survival via the flax crop layer and farm/food content. Adding survival as an existing anchor is not a new connection — it deepens an already-present weave. The M-24 aeronautics ACCEPT is the additive edge. Reject as redundant.

REWORK:
- The existing create anchor (haunting/mixing/splashing) is sound and substantial.
- The existing survival anchor (flax crop, farmersdelight cutting) is sound.
- OK — both existing anchors are well-grounded; no rework needed.
- New ACCEPTs: economy (M-09 candy) and aeronautics (M-24 flax→sailcloth) add anchors 3 and 4.
- The aeronautics candidate (M-24) is novel: the dossier's "none needed" stance was appropriate at the time, but the flax→rope→canvas→sail chain is a genuine loop-advancing edge (survival production feeds aeronautics drivetrain) that deserves recording even if supplementaries doesn't strictly need more edges.

## create_compressed   [anchors: create (1)]

Power-read: 30 blocks, 30 items, loot=yes. Compresses Create intermediates (crushed ores, sheets, flour, mechanical parts) into storage blocks made/unmade via Create machines. Already uses create:crushing/milling/mixing/splashing/sandpaper_polishing. Content is 100% Create-internal storage utility.

- from: create_compressed crushed_<metal>_pile blocks | via: numismatics sell (M-09 — compressed crushed-ore blocks as commodity trade goods for bulk ore traders) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is for high-effort luxury goods (wine, cheese, processed crops). A "crushed ore pile block" is a storage convenience, not a luxury — it would be a commodity sell at best, which strains the motif. More importantly, the create_compressed mod provides storage utility for Create-internal operations; making its outputs tradeable on their own creates an odd loop where a QoL storage mod becomes an economy node. Red-team: a player would ask "why is this compressed ore pile specifically a luxury good?" and have no answer. Reject.
- from: create_compressed sheet_block (brass/iron/copper/gold sheet blocks) | via: M-23 structural alloy (compressed sheet blocks as aeronautics airframe structural components — a builder uses sheet blocks for hull plating) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: an engineer compresses dozens of metal sheets into sheet-block panels that serve as structural hull plating for Aeronautics airframes — the storage format doubles as a build material, tying Create's fabrication chain directly to ship construction
- from: create_compressed mechanism_block | via: M-24 mechanical component (compressed mechanism blocks as dense drivetrain components for Aeronautics engines — a ship mechanic needs mass-produced mechanism blocks for the propulsion assembly) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced mechanism blocks (9 mechanisms compressed) are required for large-scale propulsion assemblies — a Create specialist mass-produces them to supply the fleet's drivetrain workshop

REWORK: the create anchor is sound (native Create storage utility, deeply woven). The mod's 1-anchor state is defensible but the M-23/M-24 aeronautics ACCEPTs are genuine: compressed sheets/mechanisms as aeronautics structural inputs make the storage format load-bearing for ship construction — a clean loop-advance (create production → aeronautics).

## northstar   [anchors: create, aeronautics (2)]

Power-read: Already ≥2 anchors. 267 blocks, 354 items, 93 c:tags. Rich content: titanium/tungsten/martian_steel ingots, advanced_circuit, electrolysis/engraving/freezing machines, off-world biomes, rockets. Items stratify: everyday (planet building stone/woods), mid (titanium alloys, circuit boards), endgame (martian_steel, off-world tech). Already deeply Create-woven (compacting/crushing/filling/mechanical_crafting/mixing/pressing/sandpaper_polishing/sequenced_assembly).

- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: create:crushing → numismatics mint (M-08 coin from processed scarcity — off-world metals are the scarcest regional source in the pack) | to: economy | motif: M-08 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: titanium ore crushed and processed through Create then minted into high-denomination Numismatics coin — the off-world mining specialist becomes the pack's most reliable source of premium currency
- from: northstar:advanced_circuit | via: numismatics sell (M-09 — advanced circuits as high-tech trade goods for specialists) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: off-world engraved circuits are the pack's specialist electronics; a circuit engineer sells them to aeronautics builders, golem assemblers, and Create engineers who can't do the space run themselves
- from: northstar:titanium_ingot / northstar:martian_steel_ingot | via: aeronautics airframe recipe (M-23 structural alloy — titanium/martian-steel plates as high-tier airframe components for Northstar's own rockets and top-tier Aeronautics hulls) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: northstar already anchors aeronautics (its rockets ARE aeronautics). Adding M-23 titanium → airframe is a deeper weave within the existing aeronautics anchor, not a new system anchor. Not rejected as wrong — it's a valid depth addition to an existing anchor. Reject as not a new-anchor candidate; note as an intra-anchor depth suggestion.
- from: northstar:biofuel_bucket | via: M-13 fuel → Aeronautics propulsion (biofuel as Aeronautics burner/engine fuel — the space farm produces alt-fuel) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: northstar already anchors aeronautics (its rockets include engines); using its biofuel as engine fuel is already an intra-aeronautics link. Same issue as above — deepens an existing anchor, doesn't add a new one. Reject as not a new-anchor candidate.
- from: northstar planet stone/woods (argyre_log, calorian_planks, etc.) | via: create:cutting (mechanical saw for off-world wood/stone cuts) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: northstar already fully anchors create (crushing/mixing/pressing/sequenced_assembly/etc. — heavily woven). A cutting recipe for off-world wood is a deeper create-internal edge. Not a new anchor. Reject.
- from: northstar:electrolysis_machine (splits fluids — water/brine → outputs) | via: M-17 electric/FE charging (the electrolysis machine runs on create:new_age FE — it could charge magic focuses or produce oxygen for a magic ritual) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the electrolysis machine's electrical draw connects the Northstar tech tier to the Create New Age power grid; hooking it to produce a magic-ritual reagent (purified water, condensed oxygen) gives the magic pillar a space-tech dependency
- from: northstar:astronomical_reading (astronomer's chart item) | via: loot-seed / M-22 lunar reagent (reading can only be obtained during specific celestial events → Ars/Occultism ritual uses the reading as a catalyst) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a stellar chart or astronomical reading conducted under a specific moon event becomes a ritual catalyst — the magic pillar's celestial workings require real-sky observations, bridging the space tier to magic production

REWORK:
- Existing create anchor: deeply sound (the full list of Create methods used is extensive). OK.
- Existing aeronautics anchor: sound (rockets = aeronautics). OK.
- New ACCEPTs: economy (M-08 titanium→coin + M-09 circuit→trade) adds economy as anchor 3; magic (M-17 electrolysis FE bridge + M-22 astronomical reading) adds magic as anchor 4. Strong multi-system candidate.












