# Phase 2 candidates — chunk-02

## trailandtales_delight   [anchors: survival (1)]

- from: trailandtales_delight:ancient_coffee / teas (pitcher/torchflower drinks) | via: create:milling (milling dried seeds/flowers to powder → farmersdelight:cooking brew) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Grind torchflower seeds in a Create mill to get brewing powder — ancient coffee requires a factory, not just a campfire.
- from: trailandtales_delight:cheese_wheel / curd_block | via: create:pressing (press milk or curds) + create_cheese:maturing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Run fresh curds through Create's mechanical press to extract whey, then mature into cheese — industrialising the dairy chain through Create.
- from: trailandtales_delight:lantern_fruit / golden_lantern_fruit | via: ars_nouveau:imbuement (golden variant as rare catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Golden Lantern Fruit — grown only by a sniffer-patient farmer — as an arcane infusion catalyst, its luminescent flesh carrying low-grade Source energy; a rare crop from the survival pillar unlocks a mid-tier magic process.
- from: trailandtales_delight: cherry_cheese_pie / cooked_sniffer_egg (high-effort feasts) | via: minecolonies colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony citizens request feast-tier prepared foods from specialty cooks; the sniffer-egg dish and cherry cheese pie are exactly the kind of multi-step colony supply that keeps a food-specialist in demand.
- from: trailandtales_delight outputs (luxury drinks/pies) | via: bare sell to Numismatics | to: economy | motif: bare sell | power: mid | tone: ok | verdict: REJECT | reason: ambient endpoint only — "it's sellable" is not a weave; M-09 retired. Economy link above (M-28 colony) captures the demand-gating instead.
- REWORK: the dossier's own 2nd-anchor candidate "economy via luxury-food→coin" cites M-09 (retired) — discard that framing; the M-28 colony route above is the correct replacement.

## better_climbing   [anchors: support/QoL (1)]

- LEAVE — zero-content movement-feel mod; no items, no blocks, no loot table. Genuine zero-surface library/behavior mod; no coherent weave surface.

## dataanchor   [anchors: support/library (1)]

- LEAVE — pure data-attachment + networking API library; no player-facing content, no items, no methods. Genuine zero-surface library.

## fusion   [anchors: support/client-library (1)]

- LEAVE — visual rendering library for connected textures; no items, no blocks, no loot. Genuine zero-surface library; weave is impossible.

## modernfix   [anchors: support/performance (1)]

- LEAVE — JVM/loader-level perf patches; no items, no content surface. Genuine zero-surface performance mod.

## create_enchantment_industry   [anchors: Create (1)]

- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: ars_nouveau:imbuement (use liquid XP as an imbuement-power substitute / catalyst in the enchanting apparatus, bridging Create's XP industrialisation to Ars magic gear upgrading) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Pipe liquid XP from your mob farm through an Ars Enchanting Apparatus — Create's industrial XP becomes the arcane power that fuses magic gear, linking the two production routes.
- from: create_enchantment_industry:experience_bucket | via: occultism:ritual (XP fluid as ritual fuel cost — an Occultism ritual that requires liquid XP delivered via Create pipes instead of raw mob killing) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Certain Occultism rituals demand liquid XP (not raw XP levels), so the Create specialist who maintains a mob farm and pipes XP becomes a required supplier for the magic-side player; classic cross-route dependency.
- from: create_enchantment_industry:printer output (enchanted books) | via: irons_spellbooks:alchemist_cauldron_brew (feed an enchanted book + arcane essence into an Iron's cauldron to produce a scroll/higher-tier spell book) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The Create printer mass-produces enchanted books the Iron's Spellbooks alchemist needs to brew advanced scrolls — the tech factory feeds the magic library, and neither is self-sufficient.
- from: create_enchantment_industry:mechanical_grindstone / disenchanting | via: create_enchantment_industry:grinding (its own registered recipe-type) → route boss-drop gear through the grindstone to extract liquid XP + reclaimed parts | to: survival/economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Combat specialists bring boss-geared loot to the grindstone specialist, who strips enchants into liquid XP and returns the refined material — the disenchanter makes boss drops tradeable as XP-wealth, not just as raw gear.
- from: create_enchantment_industry: automated enchanting chain | via: minecolonies research gate (research required before colony buildings can request enchanted tools — CEI's Blaze Enchanter is the production method unlocked by MineColonies' Enchanter's Study research tier) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony's enchanting study unlocks the knowledge to request magically-enhanced tools, but the Blaze Enchanter (CEI) is the only machine that can fill the order — research gates demand, production gates supply.
- from: create_enchantment_industry: loot=yes | via: loot-seed (seed the CEI dungeon/mob loot tables with a Create-XP-industry recipe hint — e.g. an experience_lantern in treasure chests, motivating players to explore for the tech tier) | to: survival | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: An Experience Lantern found in dungeon loot teases the XP-industry tier before the player has built the infrastructure — loot teaches the tech tree.
- OK — existing Create connection is coherent and deep (the mod IS the Create XP/enchant chain; using create:compacting/crushing/pressing/etc. as its input methods is by design). No existing connections need rework.

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag_* (wool + string, vanilla recipe) | via: MineColonies colony supply request (colonists on long scouting/builder assignments request sleeping bags as expedition supplies) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony builders heading to distant sites request a sleeping bag from the pack's supply line — a simple craft becomes a colony consumable, giving comforts a demand-gating hook in the economy pillar.
- from: comforts:hammock | via: create:toolbox_dyeing (dye hammocks in bulk via Create's toolbox dye method for explorer ship outfitters stocking aeronautics crew quarters) | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: theme clash — toolbox-dyeing ship hammocks is forced; hammocks aren't structural components. M-23 is for load-bearing hull/airframe parts, not soft furnishings. The forced edge would be noise.
- REWORK: dossier says "none — leave" for 2nd anchor, but the M-28 colony-supply link above is coherent at everyday power and not forced. Update dossier to reflect the candidate.

## letmefeedyou   [anchors: support/QoL (1)]

- LEAVE — behavior-only co-op feeding interaction; no items, no blocks, no loot table. The mod amplifies food's value in the co-op survival loop, but it registers no content surface of its own to route through any method.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

- from: aeronautics_dyeable_components: dyed levitite (hold dye in offhand during levitite catalysis) | via: create:mixing (add dye pigment into the Create mixing stage for levitite production instead of offhand method, making bulk-dyed levitite a factory output not just a hand-craft) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Scale up your airship's color scheme — route levitite production through the mixing basin with the correct dye pigment to produce dyed levitite in bulk, turning the cosmetic step into a factory job.
- from: aeronautics_dyeable_components: dyed tires (crafting grid) | via: bare recipe complexity | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: tires are everyday cosmetic items; gating dyed tires behind a multi-step Create chain violates the "never gate a basic/everyday component behind a complex recipe" guardrail. The dye step is intentionally simple.
- from: aeronautics_dyeable_components: colored levitite (visual signal of specialty) | via: MineColonies colony request (shipwright colonist orders a set of dyed levitite in the colony's fleet color scheme, creating recurring demand) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony shipwright requests a matched set of dyed levitite to color-code its airship fleet — the cosmetic layer becomes a repeating colony order, giving it a demand anchor in the economy pillar.
- REWORK: dossier says "none — leave (cosmetic skin layer)". The M-12 bulk-mixing link and M-28 colony shipwright link are both coherent; the "leave" recommendation should be revisited.

## tacz   [anchors: support/combat (1)]

- from: tacz: gun_smith_table + ammo assembly | via: tacz:gun_smith_table_crafting (gate intermediate weapon parts — barrels, receivers, firing mechanisms — behind create:pressing or create:mechanical_crafting for metal components; i.e. Create-pressed steel sheets and machined casings feed the gun smith table) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Gun Smith Table won't accept a raw iron ingot for a receiver — it demands a Create-pressed steel plate; the factory floor feeds the armoury.
- from: tacz: ammo_box (consumable, replenished continuously) | via: create:compacting (compact gunpowder + Create-processed lead/copper into ammo casings in bulk) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create auto-compactor outputs ammo casings from the smeltery's copper and your gunpowder surplus — mass production of ammunition is a factory job.
- from: tacz: high-tier guns (sniper/LMG tier) | via: create:sequenced_assembly (multi-stage assembly: press barrel blank → deploy stock → deploy scope mount → sandpaper polish receiver = a complete rifle) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Building a high-powered firearm is a sequenced Create assembly — not something crafted at a table; it's a production run.
- from: tacz: ammo as a continuous consumable (burned through in combat) | via: combat consumption loop (ammo drains continuously; non-combat specialists supply it; PvPvE creates ongoing demand) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Every firefight drains the ammo supply — the combat specialist either runs a Create ammo line or trades for resupply from a factory specialist; the consumption loop never closes.
- from: tacz: boss drops as gun upgrade parts | via: boss loot seeding (seed TACZ legendary attachment / high-tier receiver blueprint into boss loot tables — the best guns have drop-gated components from combat routes) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The sniper's top-tier scope was inside the Cataclysm boss — not bought, not crafted; earned.
- from: tacz: modern firearms | via: aeronautics ship-mount (thematic; no native integration exists with Aeronautics turret slots) | to: aeronautics | motif: no-motif | power: endgame | tone: clash | verdict: REJECT | reason: TACZ doesn't natively integrate with Aeronautics; aeronauticscompat covers other turret mods but not TACZ gun-smith guns. No method exists for the link; theme is a stretch (modern firearms on a Create fantasy airship). no-motif → reject.
- from: tacz: weapons as player-economy goods | via: bare sell | to: economy | motif: bare sell | power: mid | tone: ok | verdict: REJECT | reason: bare sell is the ambient endpoint; M-09 retired. Economy link captured by M-26 consumption + M-05 gating above.
- REWORK: dossier cites M-08 and M-09 as economy candidates — M-09 is retired and M-08 (player-minted currency) doesn't apply here (guns aren't a currency medium). Those should be replaced by the M-26 consumption + M-05 gating candidates above.

## jeresources   [anchors: client/support (1)]

- LEAVE — display-only JEI addon; surfaces existing loot/worldgen data but registers no items, blocks, or methods. Genuine zero-content UI layer; cannot be woven.

## create_ultimate_factory   [anchors: Create (1)]

- LEAVE — pure recipe datapack with no items/blocks of its own. It deepens the Create pillar's renewable loops internally (coal→diamond, gravel→strata) but offers no material surface to route into a second pillar. Forcing a second anchor would mean weaving *the datapack's outputs* (vanilla items) through other methods — which is already covered by the respective mods' own weaves. No non-redundant second-anchor candidate exists.
- Note: pack maintainers should verify whether any of its renewable recipes (e.g. coal_block+lava→diamond via compacting) conflict with intended scarcity/regional-ore design. That's a design audit, not a weave.

## ichunutil   [anchors: support/library (1)]

- LEAVE — pure shared-class API library; 0 items, 0 blocks, no gameplay content. Genuine zero-surface library.

## samurai_dynasty   [anchors: survival (1)]

- from: samurai_dynasty: jade_ore / ruby_ore / onyx_ore / aquamarine_ore | via: create:crushing (ore-doubling: crush ore → 2× gem + byproduct gravel + experience_nugget) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Jade and ruby ores crushed in Create's crusher give double the gems — if you haul ore to the factory rather than smelt it on-site, you get twice as much; the Create ore-doubling incentive applies to Samurai Dynasty's entire gem tier.
- from: samurai_dynasty: akaname_tongue / yokai_drops (Oni/Tengu/Kitsune mob drops) | via: occultism:spirit_fire (transmute yokai essence into a spirit-adjacent intermediate — the spiritual nature of the Yokai maps tonally to Occultism's soul/spirit methods) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai aren't ordinary mobs — an Occultist can burn their essence in spirit fire to extract a spiritual reagent that vanilla combat can't produce; the magic specialist is the only one who can process what the combat specialist hunts.
- from: samurai_dynasty: jade / ruby / aquamarine gems (regional ores, loot=yes) | via: GTMOGS regional ore-gen (these are novel gem types; seed them into distinct biome/regional veins so no single player controls all gem types; players must trade) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Jade only spawns in jungle-adjacent deep regions; aquamarine in ocean-floor deepslate; players who settle different biomes control different gems — trade is the only path to the full Samurai gear set.
- from: samurai_dynasty: yokai drops (akaname_tongue, etc.) | via: emergent combat supply (yokai hunters farm drops and trade to magic/crafting specialists who need the mob reagents) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Non-combat players need yokai drops for magic/gear work but can't (or won't) hunt Tengu in the mountains — the combat specialist farms the supply; scarcity of difficult mob drops drives player-to-player trade.
- from: samurai_dynasty: spirit_stone blocks (build material, unique aesthetic) | via: minecolonies colony style (spirit_stone as a MineColonies schematic material for a Samurai-Dynasty-themed colony build style — colonists consume spirit_stone during construction, making it a colony material demand) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A samurai-dynasty colony style demands spirit_stone from the pack's quarry/mining specialists — the build aesthetic drives material demand through the colony system.
- from: samurai_dynasty: steel ingots (c:ingots/steel — overlaps other mods) | via: create:crushing (route samurai_dynasty steel through the Create processing web; the c:tag unification means other mods consuming c:ingots/steel can source from Samurai Dynasty's ore tier) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Samurai Dynasty's steel ore enters the c:ingots/steel tag pool — the Create Ironworks and TFMG metalworking chain can consume it interchangeably, folding the feudal-Japan ore tier into the industrial spine.
- ⚠ SILVER CAVEAT: samurai_dynasty registers a silver ore — do NOT unify `samurai_dynasty:*silver*` into `c:ingots/silver` as galosphere:silver_ingot is actually palladium (CLAUDE.md). Any silver-unification recipe must be explicitly scoped to Occultism's silver or must check the tag resolution at authoring time.
- from: samurai_dynasty: katana / spear / weapon upgrades (kill-gated yokai ability absorption) | via: ars_nouveau:imbuement (infuse a katana with a yokai essence shard via imbuement apparatus to unlock its elemental ability — the kill-gate aligns with the Ars progression model) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: A katana absorbs the fire-spirit's essence only when an arcanist infuses it in the apparatus — combat and magic specialists must collaborate for the weapon's final form.
- OK — existing survival anchor is coherent (combat/exploration/ore content); the above adds Create and magic 2nd/3rd anchors.

## creativecore   [anchors: support/library (1)]

- LEAVE — pure GUI/event/packet library; 0 items, 0 blocks. Genuine zero-surface library; no weave possible.

## resourcefulconfig   [anchors: support/library (1)]

- LEAVE — cross-platform config API; 0 items, 0 blocks. Genuine zero-surface library; no weave possible.

## createmechanicalcompanion   [anchors: Create (1)]

- from: createmechanicalcompanion:mechanical_wolf_link (Curios head-slot summoner) | via: ars_nouveau:imbuement (attune the Wolf Link with a Source Gem in the imbuement apparatus, granting the wolf passive aura effects — the mechanical wolf's optical sensor interfaces with arcane frequencies) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Your clockwork wolf's optical sensor sees farther when attuned to an arcane frequency — a quick Ars imbuement unlocks its magic-detection module; the Create engineer and the arcanist team up to upgrade the companion.
- from: createmechanicalcompanion:quantum_drive / optical_sensor (endgame parts) | via: boss loot / boss-key gate (require a boss-drop component — e.g. a Cataclysm-tier essence — as input to the sequenced assembly for the highest-tier motherboard, gating the wolf's top capabilities) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The wolf's quantum drive can't be assembled without an alloy crystallized from a Cataclysm boss drop — the most powerful companion demands the most dangerous content.
- from: createmechanicalcompanion:mechanical_wolf (personal combat companion, unique to the owner) | via: service-for-hire (a wolf-builder specialist sells wolf-assembly as a service — building the companion for other players who lack the deep Create chain) | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: The wolf's build chain (netherite plates, sequenced assembly, arcane attunement) is its own specialisation — a Create expert who has set it all up can build wolves for other players as a commission, turning a personal toy into a tradeable service.
- from: createmechanicalcompanion: loot=yes (companion mod has loot entries) | via: loot-seed (seed an incomplete_mechanical_wolf_motherboard fragment into rare dungeon loot, motivating early exploration toward the Create tech tier) | to: survival | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: A crumbling blueprint fragment found in a dungeon chest hints at the mechanical wolf's design — explorers bring it to a Create engineer who can actually build it.
- from: createmechanicalcompanion: mechanical wolf as combat unit | via: bare sell / no demand-gate | to: economy | motif: bare-sell | power: endgame | tone: ok | verdict: REJECT | reason: "sell the wolf" is ambient endpoint; captured already by M-33 service link above which is the demand-gating form.
- OK — existing deep Create connection is sound (sequenced assembly / mechanical_crafting / sandpaper_polishing pipeline is by design). The above adds magic and survival/economy 2nd anchors.

## sparsestructures   [anchors: support/worldgen-tuning (1)]

- LEAVE — pure worldgen config-multiplier; 0 items, 0 blocks, no loot tables modified. Genuine zero-surface configuration mod; no weave surface.

## structurize   [anchors: support/library (1)]

- LEAVE — MineColonies build-engine hard dependency; no standalone gameplay content (its tools are internal utilities for blueprint placement, not player crafting inputs). Its weave is inherited from MineColonies' weave (M-28 colony route).

## openpartiesandclaims   [anchors: support/server-protection (1)]

- LEAVE — chunk-claim + party protection framework; 0 items, 0 blocks, no material surface. Genuine zero-content server-protection mod; no weave possible.

== CHUNK COMPLETE ==
