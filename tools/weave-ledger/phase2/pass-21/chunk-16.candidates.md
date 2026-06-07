# Phase 2 candidates — chunk-16

## bigsignwriter   [anchors: support (1)]
- LEAVE — pure client-side UI utility; zero items/blocks/recipes; sanctioned support role (decoration aid). No material surface to weave.

## upgrade_aquatic   [anchors: survival (1)]
- from: raw fish (upgrade_aquatic:raw_pike / raw_perch / raw_lionfish) | via: farmersdelight:cooking → create:milling | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a pike or lionfish is just another river catch — it ought to land in the same automated smoker/processing line as every other food fish; routes through farmersdelight:cutting for fillets then create:milling for fish meal, pulling survival production into the Create spine
- from: cooked aquatic dishes (cooked_pike / cooked_perch / boiled_pickerelweed) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a seaside fishing settlement trades prepared seafood for coin — gives fishing an economic output beyond personal food, advancing scarcity→pressure→production→economy
- from: driftwood/riverwood planks | via: woodworks:sawmill (already wired, confirmed inbound) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the sawmill inbound already exists per the dossier; this would be a duplicate of the existing connection, not a new cross-system edge. Not a weave candidate — already woven.
- from: coralstone blocks (upgrade_aquatic:*_coralstone) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone is decorative stone — crushing it back to gravel/experience is low-value and adds no loop advancement; the dossier flags it WEAK. Coralstone has no system significance, so a crushing recipe is noise, not web.
REWORK: existing survival anchor is sound (food + worldgen). The woodworks:sawmill inbound is its only authored weave — that's one connection; the two ACCEPTs above add a food-processing arm (M-12) and an economy output (M-09) to close the survival→economy arc.

## mru   [anchors: support — library/API (1)]
- LEAVE — zero items/blocks/recipes; pure shared-utility library for itsmineblock11 mods. No content surface.

## azurelib   [anchors: support — library (1)]
- LEAVE — animation/rendering API; zero gameplay items; the one block (lightblock) is an internal renderer helper. No weave possible.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: tweaked_lectern_controller / tweaked_linked_controller (control interface items) | via: create:mechanical_crafting | to: Create | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a precision controller for Aeronautics ships is itself a precision-machined Create component — its craft already requires precision mechanism + electron tubes; making it go through create:mechanical_crafting rather than a flat bench recipe roots it in the Create production spine (M-24 mechanical component → propulsion/control)
- from: tweaked_lectern_controller | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: sequenced assembly (M-06) is for endgame keystones; this is a mid-tier control device. M-24 (one well-chosen Create method step) is the appropriate depth — don't over-engineer a controller.
REWORK: current aeronautics anchor is thin — it's listed without any authored weave inbound. The M-24 ACCEPT above seeds a concrete route (mechanical_crafting gate) that closes the Create↔aeronautics arc for this device.

## create_central_kitchen   [anchors: Create, survival (2)]
- OK — connections sound. Already ≥2 anchors (Create automation spine + survival/food pillar). The M-09 economy adjacency (automated feast as a sellable luxury good) is a valid future depth — flagged in dossier — but it rides on the economy pass (v0.9.0), not this chunk.
- from: automated feast/dish outputs | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a factory-scale kitchen produces surplus banquets a settlement buys; the Blaze Stove's 4× throughput makes bulk food economically meaningful, not just personal; advances production→economy arc
REWORK: none needed on existing connections. The M-09 ACCEPT is an additive depth, not a rework.

## netmusic   [anchors: support / flavor (1)]
- LEAVE — cosmetic audio only; music_cd already weaves through touhou_little_maid:altar (one inbound), no material to route into any system. Forcing a Create/economy edge (e.g. "craft CD burner via Create") would be contrived — the device's value is audio, not production.

## l2library   [anchors: support — library/API (1)]
- LEAVE — pure developer API library; zero items/blocks/content. No weave possible.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. gtmogs IS the scarcity substrate; its anchors are correct and its role is enabling downstream motifs (M-03 ore-crushing, M-08 coin-from-processed-scarcity) rather than being a weave target itself. No new recipe weave is coherent — it's a worldgen framework, not a content node.
- REWORK: none. The dossier correctly identifies its downstream role. The two anchors (survival = exploration/scarcity driver; economy = the scarce regionals that coin-minting depends on) are sound.

## rightclickharvest   [anchors: support — QoL (1)]
- LEAVE — pure interaction behavior mod; no items, blocks, or materials. No weave surface exists.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending (fan-ending bulk-process method) | via: create_dragons_plus:ending | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Bulk Ending uses Dragon's Breath / End-infused fan processing — running an Ars Nouveau or Occultism material through a Dragon-Breath fan to produce an arcane-infused variant is thematically tight (end-dragon power as magical catalyst) and routes a Create fan method into the magic spine
- from: create_dragons_plus:freezing (fan-freezing bulk-process method) | via: create_dragons_plus:freezing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: fan-freezing with Powder Snow is a seasonal process — in winter (Serene Seasons), powder-snow availability is trivial; in summer it's scarce, making the freezing method a seasonal bottleneck; routes survival→Create via the seasons driver
- from: dragon_breath fluid | via: create_dragons_plus:ending → occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution (the reserved occult intermediate) is already reachable via occultengineering — double-routing through dragon_breath adds no clarity and fragments the occult reagent path. Consolidate via occultengineering, not a new dragon_breath→spirit chain.
REWORK: current Create-only anchor is thin (1 system). The two ACCEPTs above add magic (M-10 via ending) and survival (M-16 via freezing) as 2nd/3rd anchors — this mod's fan-processing methods make it a weave-*through* hub, which is exactly right.

## modulargolems   [anchors: Create (1)]
- from: golem parts (modulargolems:golem_assemble) gated on boss-tier metals (Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble | to: survival | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful golem bodies require boss-metal parts — a player who fights the Ender Guardian or Ice Dragon can build a dragonsteel golem; a Create engineer who doesn't fight must trade for the metal. Ties the danger/combat loop into the golem automation build.
- from: golem-core upgrade slot | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a golem chassis is a physical construct; running an upgrade gem/core through the Enchanting Apparatus to attune it with arcane power before slotting it makes golems feel like they bridge engineering and magic — the arcane workshop empowering the mechanical construct
- from: golem-core upgrade | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: two magic weaves for the same slot (M-10 via Ars and M-11 via Occultism) is redundant — pick one conduit. Ars Nouveau's enchanting apparatus is more coherent (golem-as-enchanted-construct) than Occultism spirit-fire; Occultism adds nothing thematically to golemancy that Ars doesn't do better.
REWORK: current Create-only anchor (1 system) needs deepening. The two ACCEPTs above add survival (M-02 boss-metal gate) and magic (M-10 enchanting apparatus attuning) — lands at 3-anchor coverage.

## almostunified   [anchors: support (1)]
- LEAVE — pure recipe-graph infrastructure; the galosphere/palladium gotcha is a configuration constraint, not a weave. No items to route. ⚠ Reminder: never unify galosphere:*silver* → c:ingots/silver (CLAUDE.md).

## collective   [anchors: support — library (1)]
- LEAVE — Serilum shared event-hook library; zero items/blocks; nothing to weave.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark Metal is a hostile-world ore — running it through Create's crusher gives a doubled ingot yield plus a byproduct nugget, routing the danger-world's signature metal into the production spine and making combat/exploration a Create input source
- from: born_in_chaos_v1:bundle_of_bones / boss soul drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: necromantic undead drops (bone bundles, chaos-soul leavings from the Pumpkinhead fight) feed Occultism's spirit-fire transmutation as ritual reagents — the gothic horror aesthetic maps cleanly onto the occult system; bundles of bones are literally what a death-ritual wants
- from: dark_metal ingot (Create-processed) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a scarce, fight-gated metal processed through Create is exactly the coin-from-processed-scarcity motif — dark metal coinage circulates as proof-of-combat value; makes the danger loop directly feed the economy
- from: born_in_chaos_v1:bagof_candy (seasonal drop from Pumpkinhead, Oct 25–Nov 5) | via: config/worldgen seasonal gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the candy drops only during the Halloween window (Serene Seasons dates it); making it a seasonal reagent/food input ties the survival calendar directly to the danger loop — a winter-window item that feeds a brewing or food recipe available only that season
- from: Pumpkinhead boss (seasonal) | via: loot-seed | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a seasonal boss with a hard fight deserves a coin/bounty payout — loot-seeding the Pumpkinhead's loot table with Numismatics coin or a bounty-board token converts the Oct–Nov event into a calendar economy event, not just a danger moment
- from: black_argillite blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: argillite is decorative stone — crushing it to gravel/XP is noise M-04 flavor. Born in Chaos' value-add is the combat/drop loop, not the deco palette; crushing argillite fragments player focus on the mod's real edge (dark metal, bosses). REJECT — don't dilute the stronger weaves above with a trivial deco recycle.
REWORK: current survival-only anchor (1 system) needs significant deepening. Five ACCEPTs above add Create (M-03 dark metal crushing), magic (M-11 spirit-fire bones), economy (M-08 dark metal coin), survival/seasonal (M-16 candy), and economy/bounty (M-14 loot-seed) — this mod is one of the richer danger→loop connectors in the chunk.

## create_compressed   [anchors: Create (1)]
- LEAVE — pure Create-internal storage/QoL; its blocks are 1:9 compressions of Create's own intermediates. No foreign material enters; no cross-system edge is coherent. The "weave" is already implicit: its crushed-ore piles ARE the M-03 outputs, just stored efficiently.

## alternate_current   [anchors: support — performance (1)]
- LEAVE — deterministic redstone algorithm rewrite; zero gameplay items; purely a behavior/perf patch. No weave surface.

## irons_spellbooks   [anchors: magic, Create (2)]
- OK — connections sound (alchemist cauldron uses create:emptying/filling; two anchors established).
- from: irons_spellbooks:mithril / deepslate_mithril_ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril is a rare deep ore (Y<38) — routing it through Create crushing gives a yield bonus, making the Create spine rewarding for the magic player who needs mithril for spellbooks and scroll forges; scarcity→Create→magic chain
- from: arcane_essence (Iron's magic currency) | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is the reserved Iron's-side currency (ledger §2) and M-01 explicitly bonds it to source_gem as the two-side magic-currency bridge; this is the canonical M-01 application for Iron's — converting between Iron's arcane_essence and Ars source_gem via imbuement closes the magic web's currency ring
- from: mob/boss drops in loot=yes tables | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's apothecarist and other hostile mobs drop materials used in scroll/brew crafting — loot-seeding these to also drop Ars reagents or Occultism chalks binds the danger loop into the magic supply chain; mob-drop reagent sink in reverse (danger → magic reagents)
- from: irons_spellbooks:arcane_essence → pyrium | via: create_new_age:energising | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: pyrium is Iron's own alloy; energising it via Create New Age FE is a valid M-17 candidate in principle, but pyrium's primary consumer is spell-gear crafting — tying it to an FE charging step adds a Create-electric gate in front of magic gear that has no thematic grounding (pyrium is volcanic/magical, not electrical). Tone clash with Iron's scholarly/arcane aesthetic; REJECT.
REWORK: existing two anchors are sound. The three ACCEPTs above deepen Create↔magic integration without adding a 3rd system — M-03 mithril crushing, M-01 arcane_essence↔source_gem currency bridge, M-02 loot-seed reagent supply. All advance the magic spine depth.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections sound. Two anchors well-established (Create-package system + autonomous courier flight = logistics arm). The economy adjacency (remote trade fulfilment) is a v0.9.0 concern.
- from: cmpackagecouriers:cardboard_plane | via: create:deploying (already used inbound) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the cardboard plane is already crafted via create:cutting + create:deploying; explicitly recognizing it as an aeronautics mechanical component (M-24) — a lightweight autonomous delivery drone — names the weave motif that's already there structurally, making it part of the aeronautics drivetrain story
- from: cmpackagecouriers:location_transmitter | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the location_transmitter is a mid-tier electronic device; M-05 (native-method gating with Create parts as inputs) is for a mod's flagship item in its *own* machine. The transmitter has no native machine — applying M-05 here stretches the motif beyond its intent. The craft already uses Create parts at bench; that's sufficient depth for a logistics accessory.
REWORK: none. Both anchors sound. M-24 ACCEPT above formally names the aeronautics motif that the cardboard plane embodies.

## occultengineering   [anchors: Create, magic (2)]
- OK — connections sound. This mod is by construction the Create×Occultism bridge; its two anchors are load-bearing and its methods (occultengineering:upgrade_tier, fan_enspirit_catalyst) are themselves weave-targets for other mods.
- from: occultengineering:spirit_solution (the reserved occult intermediate) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit_solution is the canonical occult intermediate (reagent-ownership table); routing it into Occultism rituals as a required input — rather than just the book-binding shortcut — gives it a mechanical role across the occult tree and ensures the Create↔Occultism bridge has ongoing demand; M-11 transmutation sink with the reserved reagent
- from: occultengineering:sterling_silver (ingots, per c:tags) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is a Create-processable alloy with an occult lineage — a jeweler's metal with magical provenance makes a coherent high-value coin stock; the dossier flagged this WEAK but with a scarcity-regional framing (sterling silver comes from an Occultism recipe chain, gated on demon summoning), the processed→minted chain advances the Create↔economy arc
- from: occultengineering:phlogiport (wireless teleportation of packages) | via: aeronautics logistics | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: phlogiports are occult-teleportation logistics, not a mechanical drivetrain component; M-24 is for mechanical components feeding aeronautics propulsion/control. Phlogiports are flavor-adjacent to logistics but their delivery mechanism (occult teleportation) is not aeronautics — that's a different arm of the economy. REJECT — wrong motif; could be revisited under a future logistics/occult motif if one is added.
REWORK: existing connections are sound. The two ACCEPTs above add economy (M-08 sterling silver coin) and deepen magic (M-11 spirit_solution ritual demand), giving occultengineering a 3rd anchor (economy) at appropriate mid-tier depth.

== CHUNK COMPLETE ==
