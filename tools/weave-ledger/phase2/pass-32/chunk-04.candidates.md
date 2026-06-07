# Phase 2 candidates — chunk-04

## tfmg   [anchors: create (1)]
- from: tfmg:diesel / gasoline / LPG (distillation outputs) | via: Aeronautics engine intake (fuel supply) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's refinery is the only way to make engine-grade fuel — no refinery, no airships at scale
- from: tfmg:steel (hot_blast output) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate/beam as the structural hull material for mid-tier airframes — you need a blast furnace before you build big ships
- from: tfmg:aluminum (industrial_blasting output) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: lightweight aluminum alloy for high-tier airframe skins, gating the fastest ships behind bauxite smelting
- from: tfmg combustion engine (diesel/gasoline-powered kinetic source) | via: aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the combustion engine IS the propulsion unit — its output shaft drives propellers directly
- from: tfmg:steel ingot (scarce regional metal, processed) | via: numismatics player mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is the first metal that needs a multiblock to produce — the minting specialist controls both the refinery and the coin press
- from: tfmg:plastic (vat_machine_recipe output from biomass/oil) | via: create:sequenced_assembly as component | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: plastic insulation/housing as a sequenced-assembly step in advanced electric components, giving the FE/voltage tier a real production chain
- from: tfmg:saltpeter dust | via: createbigcannons:big_cartridge_filling | to: create (combat/defense) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: cannon propellant demands saltpeter from the industrial refining chain — the gunner needs the chemist
- from: TFMG steel as "luxury processed good → coin" framing | via: bare sell logic | to: economy | motif: M-09 retired | verdict: REJECT | reason: M-09 is retired; ambient sellability is not a weave; re-expressed as M-08 above
REWORK: existing dossier candidate "economy via steel/fuel as luxury good — M-08/M-09" — M-09 is retired and was listed as a candidate; M-08 is valid and is accepted above; remove M-09 framing from the dossier on next sweep.

## durabilitytooltip   [anchors: support/client-UI (1)]
- LEAVE — pure client tooltip overlay; 0 items, 0 methods, 0 loot. No material surface to route through any method.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing (lossy, +xp nugget) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: scrap a mismatched decorative iron door back to nuggets at the Create mill — fits the deco-family recyclability sweep
- from: wooden door variants as structural building blocks | via: bare "sell for coin" economy link | to: economy | motif: none | verdict: REJECT | reason: no-motif; ambient sellability is not a weave (M-09 retired); a door has no demand-gating angle
- REWORK: dossier notes the M-04 crush edge as WEAK / "plus not a necessity" — assessed here as ACCEPT for the deco-family pass (metal variants only; wood doors don't have a crush return). Flag for Phase 3 as part of the deco-crushing batch.

## prickle   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items, zero loot, pure config-format library. Genuine zero content surface.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL, zero items, zero loot. No material surface; the weave belongs to food mods underneath it.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing (ore-doubling + byproduct) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: route the samurai ore tier through the Create crusher just like iron/copper — doubles yield and slots the new metals into the tech web
- from: samurai_dynasty silver ore (c:ores/silver) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: silver ore through the crusher — but ⚠ must NOT unify samurai silver with galosphere palladium (see CLAUDE.md galosphere caveat); keep as samurai_dynasty:silver_ingot only
- from: samurai_dynasty Yokai drops (akaname_tongue, Oni/Kitsune/Enenra reagents) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit of a slain Yokai transmutes its tongue/hide into an Occultism essence — the folkloric connection writes itself
- from: samurai_dynasty Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic mob drops from Japan's spirit world as arcane infusion catalysts — a player who fights Yokai supplies the magic specialist
- from: samurai_dynasty:steel ingot (c:ingots/steel, sword-quality) | via: create:sequenced_assembly (weapon forging chain) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: a katana blade isn't hammered by hand — the Create assembly line cold-folds and tempers the steel; gives swords real manufacturing depth
- from: samurai_dynasty Yokai boss drop (endgame) | via: boss-key gating for complex recipe | to: create/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: slaying the Oni unlocks its spirit-core as the gate item for a high-tier Create or ritual recipe — boss fights mean something beyond gear
- from: samurai_dynasty jade gems (c:gems/jade) | via: numismatics player mint (jade as regional gem-coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: jade is beautiful, regionally concentrated, and hard to duplicate — a natural gem-coin minted by the jade specialist
- from: samurai_dynasty combat drops (scarce Yokai spawn) | via: emergent trade (combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai only spawn in their biomes — a fighter who knows those grounds sells reagents to stay-at-home crafters
- from: samurai_dynasty silver (own tag) | via: occultism:spirit_fire → silver-dust reagent | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: occultism's silver use (ritual circles) can source from samurai_dynasty silver — two systems share a scarce regional metal; ⚠ tag check required (occultism uses c:ingots/silver, not galosphere's palladium tag)
- from: samurai_dynasty gear as "region-locked craft" | via: GTMOGS regional ore-gen (jade/onyx regionally distributed) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: jade only appears in certain biome columns — armor-forged goods from jade must trade across regions
- from: samurai_dynasty steel overlapping tfmg steel (c:ingots/steel tag) | via: bare "they're the same" 1:1 swap | to: create | motif: none | verdict: REJECT | reason: 1:1 round-trip swap on non-equivalent sources — samurai steel is combat-aesthetic, TFMG steel is industrial; unification via c:tags is fine but no special weave edge needed; would flatten the scarcity distinction
- from: samurai_dynasty spirit_stone blocks | via: MineColonies colony build (cheaper supply route) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies mason hut can produce spirit-stone blocks more cheaply than the individual player, creating a colony-goods trade to builders

## moonlight   [anchors: support/library (1)]
- LEAVE — library/API with 1 internal spawn_box block; no player-facing material surface, no loot, no routable content.

## emojitype   [anchors: support/client-UI (1)]
- LEAVE — client-only chat input helper; no game content whatsoever.

## createoreexcavation   [anchors: create (1)]
- from: createoreexcavation vein table (configurable per-chunk ore output) | via: GTMOGS regional ore-gen → drilling vein data | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the vein table is per-chunk and regionally distributed by design — drilling only finds a vein where the biome says it is, so the ore is still region-locked even with infinite yield; scarcity is geographic not quantity
- from: createoreexcavation:diamond_drill / netherite_drill (endgame drill head) | via: create:sequenced_assembly gating (boss drop as input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite drill head should require a boss-grade hardening material — you don't drill the deepest veins without defeating something first
- from: createoreexcavation machine (SU-powered, permanent installation) | via: MineColonies colony route (colony miner requests drill output) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies miner hut can be configured to request vein output from the drilling machine, making the colony a consumer of the Create ore pipeline — colony demand keeps the drill running
- from: createoreexcavation (infinite vein → ore economy) | via: bare "it makes ore so it's economic" framing | to: economy | motif: none | verdict: REJECT | reason: no-motif; production of ore is not itself an economy weave; the regional-scarcity and colony-demand angles above capture the real links
- REWORK: dossier's "economy via vein-table scarcity — M-08" framing conflates M-08 (player minting) with M-30 (regional scarcity); the right motif is M-30. The M-30 candidate is accepted above; the dossier's M-08 framing should be corrected.

## multipiston   [anchors: support/colony-dependency (1)]
- LEAVE — a single utility block pulled in by MineColonies/Structurize; no items, no loot, no processing method. Colony-internal machinery not player-surfaced as a weave point.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat insulation (wool/leather/fur at sewing table) | via: alexsmobs/naturalist mob-fur as insulation feedstock | to: survival (pressure deepening) | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear_fur, goat_fur, and bison hide are consumed at the sewing table to insulate armor — mob hunters supply the insulation market; temperature pressure creates continuous demand
- from: cold_sweat:hearth (climate-control multiblock, fuel-burning) | via: create:filling to pipe lava/steam as fuel source | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gating the hearth on a Create brass casing + piping its fuel as lava from a Create pump ties the temperature system to the tech spine; a colony without a working Create setup can't climate-control large spaces
- from: cold_sweat temperature pressure (harsh biomes kill you without gear) | via: Serene Seasons driving biome temperature swings | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: winter drops biome temp into lethal range; waterskins/insulated armor become seasonal necessities, not optional — Serene Seasons feeds cold_sweat which feeds demand for insulation crafts
- from: cold_sweat insulated armor (chameleon/hoglin/fur sets) | via: emergent trade (combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: chameleon pelts come from chameleons; hoglin hides from Nether runs — a combat supplier sources the insulation materials that the base-builder can't safely farm
- from: cold_sweat insulated gear as "nice QoL to have" | via: bare sell-for-coin framing | to: economy | motif: M-09 retired | verdict: REJECT | reason: M-09 is retired; the M-34 angle above captures the real demand-gating supply chain
- from: cold_sweat:hearth gating on Create brass/casing | via: M-05 native-method gating — dossier already lists this as [MED] | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT (same as above; consolidating) — already captured above
- REWORK: dossier lists M-09 "luxury good→coin" as a candidate — M-09 is retired; remove it. The M-05 Create gate is sound but flagged [MED] in the dossier; upgrade to ACCEPT based on the scarcity-pressure logic above.

## irons_lib   [anchors: support/library (1)]
- LEAVE — API/library with only a cosmetic transmog table and decorative player statue. No routable material, no loot of note. Weaving the transmog table would be forced.

## inventoryprofilesnext   [anchors: support/client-QoL (1)]
- LEAVE — client-side inventory UI only; no items, no loot, no methods. Pure support.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (precision mechanism + electron tubes input) | via: already routes through Create parts — existing Create anchor | to: create | motif: — already anchored | verdict: LEAVE for additional anchors — no coherent magic/economy/survival surface
- from: the controller as a control-surface component | via: aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: an aeronautics vehicle without a proper control interface is just a drifting contraption — the tweaked controller is the cockpit, a required control-surface component for piloted ships
- from: controller (high-precision vehicle input) | via: bare "it controls things so it's economic" framing | to: economy | motif: none | verdict: REJECT | reason: no-motif; being a control device is not a demand-gating link; the aeronautics weave above is the right angle
- OK — aeronautics anchor is sound (control surface for vehicles); adding M-24 deepens it by making it a required drivetrain component rather than optional QoL.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-only tweak; no items, no loot table of its own. The weave surface belongs to fish-content mods (createfisheryindustry, Aquaculture) that fishingreal sits beneath, not fishingreal itself.

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — client UI only; 0 items, 0 loot, 0 methods. Pure QoL.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris (rare whale drop) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris — a waxy ocean essence — is a natural transmutation feedstock; slaying the right creature unlocks an occult reagent tier
- from: alexsmobs:ender_residue (void worm drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm is endgame; its residue fueling a high-tier Ars infusion makes the most dangerous encounter in the End meaningful for mages
- from: alexsmobs:bear_dust (bear drop) | via: ars_nouveau:imbuement or irons_spellbooks cauldron | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: bear_dust as a mid-tier spell catalyst — the wilderness fighter grinds it out; the mage buys it
- from: alexsmobs mob drops (banana_slug_slime, crystalized_mucus, skunk_spray) | via: create:mixing (chemical processing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: slime/mucus compounds are weird industrial intermediates — run banana slug slime through a Create mixer to get a bio-lubricant or adhesive that feeds mechanical assembly
- from: alexsmobs:void_worm_beak (beak fragment) | via: boss-key gating for a Create endgame recipe | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm's drill-beak as the gate item for a Create drill/bore head — killing the void's own excavator unlocks your own
- from: alexsmobs:ambergris (ocean-rare) | via: GTMOGS regional distribution (ocean biomes only) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris only comes from deep ocean hunters — land-locked players must trade for it; regional supply gap drives exchange
- from: alexsmobs rare drops (void worm, void worm effigy, aquatic boss drops) | via: emergent trade (combat specialist sells to others) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: only combat players hunt the Void Worm; everyone else who needs ender_residue for magic must buy it — the classic hunter/crafter split
- from: alexsmobs:leafcutter_ant_chamber (passive resource generator, biomass output) | via: tfmg:vat_machine_recipe (biomass → fuel intermediate) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: leafcutter ant biomass waste is a byproduct of the farm — route it through TFMG's vat as a fermentation feedstock, tightening the biological-industry loop
- from: alexsmobs:bear_fur / bison_fur | via: cold_sweat sewing table (insulation) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Alex's fauna supply the fur that cold_sweat demands for insulation; hunting bears and bison creates ongoing resource demand tied to the temperature system
- from: alexsmobs:banana (fruit item) | via: vinery:apple_mashing or extradelight:juicer | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bananas into the juicer yield a tropical drink; a simple processing step integrates Alex's fruit into the food/drink economy
- from: alexsmobs drops as "exotic sellables" | via: bare sell-for-coin | to: economy | motif: M-09 retired | verdict: REJECT | reason: M-09 retired; demand-gating via M-34 and M-30 captures the economy angle properly
- from: alexsmobs:transmutation_table (block-conversion mechanic) | via: bare "use it in a magic recipe" | to: magic | motif: no-motif | verdict: REJECT | reason: the transmutation table is alexsmobs' own mechanic; routing foreign material through it doesn't compose with an approved motif — would need a Gate 0 new motif for "transmutation-table as connective method"

## corgilib   [anchors: support/library (1)]
- LEAVE — pure code library; 0 items, 0 blocks, 0 loot, no player-facing content.

## mousetweaks   [anchors: support/client-QoL (1)]
- LEAVE — client input-handling tweak; no content, no methods, no loot.

## create_mobile_packages   [anchors: create, aeronautics (2)]
- from: create_mobile_packages robo_bee courier (airborne delivery) | via: aeronautics logistics route | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: robo bees ARE the aeronautics logistics arm for small-parcel delivery — they don't fly on magic, they're the drone tier of the aeronautics economy
- from: create_mobile_packages portable_stock_ticker (remote stock + craft requests) | via: player-to-player logistics service | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a logistics operator running a bee-port network offers a delivery *service* for coin — you pay to have goods flown to your base rather than flying there yourself; value flows player→player
- from: create_mobile_packages as "it moves goods → it's economic" | via: bare sell-goods framing | to: economy | motif: M-09 retired | verdict: REJECT | reason: M-09 retired; the M-33 service angle captures the real player-economy link
- OK — existing Create + aeronautics anchors are sound; M-31 and M-33 are coherent additions that advance the loop (logistics arm feeds the economy pillar).

== CHUNK COMPLETE ==
