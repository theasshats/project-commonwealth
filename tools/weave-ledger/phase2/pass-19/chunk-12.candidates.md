# Phase 2 candidates — chunk-12

## mru   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 items, 0 blocks, no recipe types, no loot); pure API for itsmineblock11 mods. Nothing to route.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:steel_block (c:ingots/steel) | via: create:pressing → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: reactor-grade steel plate as a structural-tier airframe material — industrial fabrication has an obvious output in shipbuilding
- from: c:raw_materials/uranium (scarce regional ore) | via: create:crushing + numismatics vendor | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: uranium ore is a defining regional scarcity; processed uranium rod or lead ingot as a high-value coin trade good earns its place in the mint
- from: c:ingots/lead | via: create:pressing → aeronautics shielding/ballast component | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: lead sheet as ballast/radiation shielding in ship hulls — reactor packs need a heavy-metal structural component and lead fits without forcing a stretch
- from: createnuclear:enriched_soul_soil / enriched items | via: create:haunting output → occultism:spirit_fire context | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the enriching campfire already blurs physical and supernatural; enriched soul outputs feeding a spirit-fire ritual is coherent eldritch-industrial theming
- from: anti-radiation armor set | via: numismatics vendor (sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hazmat suits are a specialized luxury survival good — players near a reactor pay for protection; natural sell commodity
- from: createnuclear steel (c:ingots/steel) | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: occultism spirit_fire transmutes organic/soul material into essences — transmuting an industrial alloy this way has no thematic grounding; M-19 (haunting/soul campfire) already covers the nuclear-occult seam more cleanly
- REWORK: existing anchor is Create only (1). The five ACCEPTs above add economy (×2), aeronautics (×2), magic (×1) — bringing it to a full loop contributor. No existing connections to rework; it had none.

## netmusic   [anchors: support/flavor (1)]
- LEAVE — cosmetic audio, no material surface. Already touches TLM altar for the music_cd (existing single weave). Forcing Create/economy edges onto a jukebox is contrived and fails red-team; no motif fits without inventing one.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — behavior-only mod; 0 items, 0 blocks, no loot, no recipe types. Genuine zero-content interaction QoL. Nothing to route.

## occultengineering   [anchors: Create, magic (2)]
- from: occultengineering:spirit_solution (reserved occult intermediate) | via: numismatics vendor (sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled spirit solution is a refined magical reagent — a natural luxury sell-good for players who specialize in the occult/Create pipeline; the reserved status means it already has a canonical identity, selling it makes that identity economically legible
- from: occultengineering:phlogiport (wireless item logistics) | via: aeronautics logistics arm | to: aeronautics | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: phlogiports teleport packages by address — equipping an airship with addressed phlogiport I/O makes it a flying warehouse node, directly embodying the aeronautics logistics arm (magic as an acquisition/logistics provider)
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: numismatics mint (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: occult alloy refined through Create is a scarce regional metal — it earns a coin denomination the way copper/iron do; the Create processing step (the occultengineering pipeline) is already present, so the mint step is one light hop
- OK — existing Create + magic anchors are structurally sound (the mod is by construction the Create×Occultism bridge); no arbitrary edges to rework.

## xaeroworldmap   [anchors: support (1)]
- LEAVE — client-side map UI; 0 items, 0 blocks, no loot, no recipe types. Pure navigation QoL; no material surface to weave.

## curios   [anchors: support/library (1)]
- LEAVE — accessory-slot API; 0 items, 0 blocks, no loot, no recipe types. It hosts other mods' rings/amulets but registers nothing of its own. Weave value is enabling magic-accessory existence, not a material route.

## fogoverrides   [anchors: support/client (1)]
- LEAVE — visual config mod; 0 items, 0 blocks, no loot, no recipe types. Config-only fog tuning; nothing to route.

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot | via: create:pressing (sheets) + create:sequenced_assembly keystone | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient metal is the canonical "boss drop gates complex Create tech" item named in CLAUDE.md — Netherite Monstrosity / Ancient Remnant drop feeds the sequenced-assembly chain for the pack's highest-tier machine tier; every player knows you need to beat the dungeon first
- from: cataclysm:witherite_ingot | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Witherite is a wither-derived alloy — feeding it into a spirit fire ritual to transmute it into an occult essence reads as coherent dark-fantasy; the wither/soul link makes this feel earned, not forced
- from: cataclysm boss loot tables (multiple dungeons) | via: loot-seed numismatics coin | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: dungeon boss chests dropping coin denominations plugs Cataclysm's high-tier exploration directly into the player economy; adventuring specialists earn income for the trading ring (M-14 bounty/drop-economy)
- from: cataclysm:cursium_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Cursium (the Curse Boss drop) is a tainted alloy that attunes under Ars imbuement naturally — cursed metal becomes an arcane infusion catalyst; magic players have a reason to defeat Cataclysm bosses
- from: cataclysm:ancient_metal_ingot | via: create:pressing → aeronautics structural | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient metal as the premium airframe tier — boss-harvested structural alloy for capital-ship hulls gates the top ship tier behind dungeon progression appropriately
- from: cataclysm:amethyst_crab_meat / blessed variant | via: numismatics vendor (sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare consumable granting combat immunity in the Leviathan fight is a natural luxury sell-good; players that don't want to farm the Sunken City buy it from specialists
- from: cataclysm boss loot tables | via: loot-seed magic reagent (ars source fragment / occult chalk) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss drops as magic reagents — clearing dungeons yields rare spell components, pushing magic players into the same combat progression loop as tech players
- from: cataclysm:ignitium_ingot | via: tfmg:industrial_blasting | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: TFMG industrial blasting is for smelting metals/alloys, but Ignitium is a supernatural fire-themed metal — putting it through an industrial blast furnace reads as industrializing divine fire, which clashes with cataclysm's dark-fantasy tone; better routed through M-10 (arcane infusion) or M-11 (spirit fire). Also M-05 requires using the mod's own machine as the gating method, and TFMG is not Cataclysm's own machine.
- REWORK: survival-only (1) is the floor, not a finished job per CLAUDE.md. The seven ACCEPTs above push it to Create + magic + economy + aeronautics anchors — a full loop contributor. No existing connections to rework; it had none.

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — client render optimization; 0 items, 0 blocks, no loot, no recipe types. Color-blend engine replacement; nothing to route.

## supplementaries   [anchors: Create, survival (2)]
- from: supplementaries:flax (c:crops/flax) | via: create:milling → linen fiber → aeronautics sail/rigging component | to: aeronautics | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax is Supplementaries' farmable crop; milling it into linen fiber feeds airship sail/rigging material — the farming survival layer literally supplies the aeronautics build, closing the loop elegantly
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement as attunement base | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: ash is a purified remnant of burning — under arcane infusion it reads naturally as a ritual base or purification catalyst; low-power, one light step (everyday depth)
- from: supplementaries:candy (c:foods/candy) | via: numismatics vendor (sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: candy is a luxury food with a short speed+strength buff effect — it's a natural player-traded consumable, appropriate for a small shopkeeper economy
- from: supplementaries:flax (c:crops/flax) | via: seasonal gating (Serene Seasons summer-only harvest) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax as a summer-only crop makes the sail-material supply chain season-driven — you can only stockpile rigging material in summer, adding a temporal scarcity beat to aeronautics supply
- from: supplementaries faucet + jar fluid nodes | via: config tie into Create fluid piping | to: Create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the faucet/jar interaction with Create piping is an emergent behavior/compat, not a motif-routed weave; it's best left as natural compat rather than invented as a recipe edge. No motif covers "fluid pipe interop" as a design node.
- OK — existing Create + survival anchors are sound; haunting/mixing/splashing recipes and FD:cutting are legitimate, non-arbitrary edges. The four ACCEPTs above extend it meaningfully to aeronautics + magic + economy without redundancy.

## numismatics   [anchors: economy, Create (2)]
- OK — connections are sound. Numismatics IS the economy pillar hub; its Create anchor (depends on Create, coins crafted via Create methods, brass-and-cog aesthetic) is the canonical correct anchor. As the hub, it is the DESTINATION not the source; no new outgoing weaves are appropriate. Existing anchors are not arbitrary.

## minecolonies_tweaks   [anchors: support/QoL (1)]
- LEAVE — tag-harmonization glue for MineColonies farming; the 89 c:tags it injects are the output, enabling food-web recipes elsewhere, but the mod itself has no items to weave through (0 blocks, 0 loot, behavior + tag-only). Analogous to a tag-pack; the weave it enables happens in other mods' dossiers.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid UI buttons; 0 items, 0 blocks, no loot, no recipe types. Pure UX convenience; nothing to route.

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein table (datapack join key) | via: vein recipe → scarce coin-metals → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: configuring uranium/lead/sterling-silver/createnuclear metals into vein tables makes the drilling machine the sustainable ore supply feeding the coin economy — infinite-but-slow regional drilling is the late-game economy's primary raw-material source
- from: createoreexcavation:vein_finder + sample_drill | via: aeronautics scouting role (attach to airship for resource surveys) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the vein_finder is a held item and the sample_drill is a placed block — neither is an engine/rotor/control surface that fits M-24 (mechanical component → propulsion/control); the "airship as resource surveyor" is an emergent roleplay use, not a recipe-routed weave. No valid delivery mechanism.
- from: createoreexcavation:drilling_machine SU demand | via: createnuclear reactor power output | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: this is a configuration/design lever (run the reactor to power the driller), not a recipe-routed weave; M-05 requires a mod's flagship item to be built inside the mod's own machine. No delivery mechanism for a "power supply" link beyond design documentation.
- REWORK: Create-only (1) is the floor. One ACCEPT adds the economy anchor via the vein table, making it a Create↔economy contributor. The vein table as a pack-design lever is the correct delivery (KubeJS `createoreexcavation:vein` datapack entries, not a recipe edit) — flag this as `via: vein-table config` for Phase 3.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals code library; the one shipped item (template_chest) is too trivial to anchor a pillar (vanilla-style chest, no c:tags). Zero recipe types, zero loot. Genuine support library.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure/worldgen overhaul only; 0 items, 0 blocks, no loot tables (loot=no). No material surface. The dragon arena redesign is pure visual spectacle — nothing to route.

## bakery   [anchors: survival (1)]
- from: finished cakes / tarts / jams (high-effort baked goods) | via: numismatics vendor (sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bakery products are high-effort luxury consumables — the multi-step Farm & Charm → bakery cooking chain is exactly the "luxury good → coin" depth M-09 targets; players who specialize in food production earn coin selling to the trading ring
- from: bakery:bread / baguette (wheat-based) | via: create:milling (wheat → flour as alt route) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat through a Create millstone instead of the crafting_bowl is a coherent industrial-vs-artisanal split — the bakery can source its flour from either path, giving the Create spine a food-production role
- from: bakery baked goods (cakes, cupcakes, speed+strength buffs) | via: minecolonies food-supply chain | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: M-16 is specifically seasonal reagent (Serene Seasons gating), not generic food supply; supplying colony workers with food is design intent but not a motif-routed weave. No seasonal gating here (bakery crops aren't season-locked). Flag as design note, not a weave.
- from: bakery:apple_jam / glowberry_jam | via: ars_nouveau:imbuement (sweet-arcane catalyst) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: jam as an arcane infusion ingredient is a theme-clash — Ars imbuement is for essences/gems/metals, not fruit preserves; the connection is forced and a player would raise an eyebrow. Red-team kills it.
- REWORK: survival-only (1) is the floor. Two ACCEPTs add economy + Create anchors — a two-system contributor. Existing survival anchor (Farm & Charm inbound weave) is sound.

## azurelib   [anchors: support/library (1)]
- LEAVE — animation engine library; 0 items, 0 loot, one internal utility block (lightblock, not player-facing). Pure rendering/animation API for dependent mods (primarily Cataclysm). Nothing to route.

## stylecolonies   [anchors: support/deco (1)]
- LEAVE — MineColonies blueprint pack; 0 items, 0 blocks, no loot, no recipe types. The Steampunk style's emergent demand for Create blocks at colony-build time is a natural consequence of the blueprint content, not a recipe-routed weave that needs authoring. Genuine support/content-pack role.

== CHUNK COMPLETE ==
