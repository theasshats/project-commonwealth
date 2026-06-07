# Phase 2 candidates — chunk-05

## everycomp   [anchors: support/decoration (1)]

LEAVE — Pure runtime block/asset/recipe generator with no items of its own (0 blocks, 1 grouping token, loot=no). All content lives under host-mod namespaces (Create, Macaw's, etc.); any weaving belongs on those hosts. No material join key, no method surface, no loot table. Nothing to propose or reject here.

## galosphere   [anchors: survival, magic (2)]

REWORK check — existing connections:
- survival (cave biomes + palladium ore, new underground pushing back): OK — connections sound.
- magic via M-07 (allurite_shard / lumiere_shard as reserved attunement catalysts): OK — connections sound; already authored in scripts 33/80/97 and locked in reagent-ownership table.

New proposals:

- from: galosphere:palladium_ore (c:ores/palladium) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is the scarce regional metal from the Crystal Canyon biome; crushing ore for doubled output with a byproduct folds it into the Create ore-economy exactly as the design intends — players with access to Crystal Canyon regions get a crush-yield advantage and others must trade for processed palladium. ⚠ Output must tag c:ingots/palladium only — never c:ingots/silver (CLAUDE.md gotcha: galosphere's item id is silver but the material is palladium; occultism owns silver).

- from: galosphere:silver_ingot (= palladium ingot, c:ingots/palladium) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is scarce and regionally locked; a player with Crystal Canyon access presses ingots into a palladium-denomination coin, making them the regional mint specialist. Advances the loop: scarcity → production (pressing) → economy (player-minted currency). Distinct from iron/gold coins — a genuine second denomination.

- from: galosphere:allurite_bricks / lumiere blocks (deco stone sets) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the shards (allurite_shard / lumiere_shard) are already the reserved M-07 catalysts — that is the mod's magic anchor. Running a separate crush-recycle on the decorative stone forms is low-value redundancy; the flagship weave dominates. Not worth adding noise here when M-03 palladium crushing is the stronger coherent Create edge.

- from: galosphere:silver_ingot (palladium) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: reagent-ownership collision risk. Palladium must never be conflated with silver (occultism owns c:ingots/silver). An imbuement recipe consuming galosphere's item would need extreme care to avoid the unification trap; M-07 shards already provide the magic anchor with zero identity-collision risk. Defer unless a second explicit magic route is wanted and the anti-silver safeguard can be guaranteed at authoring time.

## resourcefulconfig   [anchors: support/library (1)]

LEAVE — Config-screen framework library. Zero blocks, zero items, no loot, no gameplay mechanics. Pure transitive API dependency. Nothing to weave.

## modernfix   [anchors: support/performance (1)]

LEAVE — JVM/loader-level performance patches (lazy init, dynamic resources). Zero blocks, zero items, no content surface of any kind. Nothing to weave.

## cold_sweat   [anchors: survival (1)]

New proposals:

- from: cold_sweat:hearth (the post-Nether climate-control multiblock) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth is a significant infrastructure investment (post-Nether, large multiblock, smokestack required); requiring Create brass fittings or a shaft assembly in its crafting means a cold-biome settlement must engage the tech spine before it can stabilize temperature — survival pressure creates demand for Create production. The loop runs: survival pressure → production (Create) → climate stability.

- from: cold_sweat insulating materials (goat_fur, chameleon_molt) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw hides and pelts processed through a Create mill into insulation padding or fiber intermediates before reaching the sewing table — an everyday pull that keeps the cold-climate survival chain running through the Create spine even at the basic tier. Lightweight one-step; doesn't over-burden a basic survival material.

- from: cold_sweat:boiler / cold_sweat:icebox | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the boiler and icebox are simpler half-power emitters compared to the Hearth. Gating the everyday climate emitters behind mechanical_crafting (a mid-tier Create method) violates the cost-model rule: never gate a basic/everyday component behind a complex recipe. The Hearth gate (mid-power item) is the correct level; leave the basic emitters on vanilla crafting.

- from: cold_sweat:chameleon/hoglin/goat_fur armor sets (insulated survival gear) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: farmersdelight:cutting is already on the methods palette, and hide-cutting is thematically coherent — but this stays within the survival anchor (cutting hide → insulated armor is still survival-only). It doesn't add a second system anchor; the two accepted candidates above (Create) are the more valuable proposals. Record and drop.

- from: cold_sweat waterskin (hot/cold water carry) | via: create:filling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create:filling is already listed as an inbound weave on the dossier ("made-by methods: create:filling"). Duplicate — the edge already exists.

REWORK check — existing connections:
- create:filling inbound exists (waterskins). Dossier's M-09 candidate ("sellable survival gear") is correctly identified as weak and M-09 is retired — do not carry forward.

## kambrik   [anchors: library/API (1)]

LEAVE — Kotlin mod-dev framework (registration helpers, command/text DSL, networking utilities). Zero blocks, zero items, no loot, no recipe types, no gameplay surface. Pulled as a transitive dependency of Kotlin-based mods; nothing to weave.

## kobolds   [anchors: economy, survival (2)]

REWORK check — existing connections:
- survival (underground kobold civilization + Den/Pirate Den structures + combat): OK — connections sound.
- economy (emerald-based villager-style trading, Prospector enchant): OK — connections sound. Two real anchors. The economy tie is ambient emerald-barter, which sits at the pre-currency trade layer; that's legitimate even without numismatics minting.

New proposal — 2 anchors already, look for additional depth only where coherent:

- from: kobolds:kobold_skull (rare drop from warriors/captain kills) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: kobolds are a subterranean civilization with a bone-and-skull aesthetic; their skulls fed into Occultism spirit-fire as a minor transmutation reagent ties the dungeon-combat route to the magic web. Advances the loop: danger/survival → magic production. A combat specialist farms skulls, a magic specialist processes them — no one player self-sufficient.

- from: kobolds loot (Prospector enchant, redstone goods) | via: loot-seed (enrich existing tables) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: this deepens the existing economy anchor (dungeon loot traded peer-to-peer) but it doesn't add a new system anchor — kobolds already have economy. The skull→magic route (accepted above) is the genuine new anchor. Loot-seeding more economy goods is incremental enrichment, not a second pillar. Record and drop.

- from: kobolds:kobold_skull | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (Occultism, M-02/M-11) is thematically superior for a skull/soul reagent over arcane imbuement. Imbuement is for material attunement; a physical creature skull being spirited-away in occultist ritual fire is the coherent image. Don't double-propose the same reagent through two magic methods; pick the better-fit one (spirit_fire, accepted above).

## formations   [anchors: survival (1)]

New proposals:

- from: formations structures (altars, ruins, pedestals) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the dossier confirms loot=no — Formations registers 0 loot tables of its own. Its structures use vanilla/modded block palettes only; there is no loot table surface to seed into. A loot-seed candidate requires loot=yes.

- from: formations structures (stone-palette altars/ruins) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Formations adds no items or blocks of its own (0 blocks, 1 items = template_editor tool only). Its structures are built from existing palette blocks; crushing-recycle belongs on those palette mods (vanilla stone, etc.), not on Formations. No content surface to attach a weave to.

LEAVE — No items, no loot, no recipe surface. The template_editor is an internal authoring tool. Any weave belongs on whatever block-palette mods the structures use (vanilla/other). A forced edge here would be attaching to air.

## undergroundworlds   [anchors: survival (1)]

New proposals:

- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Black Recluse is an underground dungeon mob; its spider fang transmuted in spirit-fire yields an arachnid-essence reagent for Occultism rituals — dungeon combat feeds the magic web. The loop: danger/survival → spirit transmutation → magic production.

- from: undergroundworlds:antidote_flask / desert_charm (immunity charms) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: these charms provide mob-status immunities (blindness, poison); imbuement-refining them into a superior arcane immunity talisman that persists longer or stacks gives magic players a reason to seek dungeon loot — a cross-route pull (survival loot → magic production → combat support). Depth earned: charm is mid-tier dungeon loot, imbuement is mid-tier magic station — scale matches.

- from: undergroundworlds temple/pyramid bricks (chiseled_temple_bricks, pyramid_bricks, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: while M-04 is standard for stone deco, the dungeon bricks here are exploration-context blocks, not decoration palette filler. Crushing dungeon architecture back to gravel/XP nuggets is coherent mechanically but thin thematically — the dungeon aesthetic is "dangerous ruins," not "re-usable material source." The spider_fang (M-11) and charm imbuement (M-10) are far stronger hooks that actually advance the loop. Record and drop the M-04 candidate as low-value.

REWORK check — existing connections:
- survival (exploration/worldgen + dungeon combat): OK — connections sound.

## mcwroofs   [anchors: support/decoration (1)]

New proposals:

- from: mcwroofs stone/brick roof variants (andesite, brick, deepslate, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 605 blocks and 607 items makes a wholesale crush pass technically valid but operationally enormous — a Phase-3 action over hundreds of items for a cosmetic decoration mod. The payoff (recycling roof-tiles back to gravel + XP nugget) is too diffuse to advance the loop meaningfully. A targeted crush-recycle pass across the full decoration palette (all Macaw's family at once) would be a better-scoped Phase-3 action than singling out roofs. Dossier explicitly notes "leave unless a wholesale deco sweep." Record and drop.

LEAVE — Decoration palette (sanctioned support anchor). The stone/brick crush candidate exists but is deferred to a pack-wide deco-sweep pass rather than a per-mod proposal here. No other coherent weave surface.

## jakes-build-tools-2.0.1.5   [anchors: QoL/builder tools (1)]

New proposals:

- from: minecraft:hammer / minecraft:diamond_chisel (construction tools) | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: these are consumable builder utilities, not progression machines. Gating a hammer behind mechanical_crafting over-depths an everyday QoL tool — the cost model rule applies (never gate basic/everyday items behind complex recipes). The tools are player convenience, not Create-spine content. Tone clash: Create's M-05 is for mod-flagship machines, not hammer-equivalents.

- from: minecraft:experience_flask (XP storage tool) | via: create:experience_nugget | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: no-motif fit — routing XP flasks through Create's experience_nugget (a crushing byproduct) is conceptually adjacent but doesn't advance the loop; it's a QoL convergence, not a production↔economy or survival↔production link. No coherent system second anchor emerges from it.

LEAVE — Build-assist QoL datapack (hammer, chisel, trowel, magnet). All tools registered under the minecraft: namespace with vanilla material crafting; nothing to route through pack methods that would add a meaningful second anchor.

## deeperdarker   [anchors: survival (1)]

New proposals:

- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul_dust and soul_crystal are thematically pure soul/spirit materials harvested from the Otherside dimension — the most direct possible input for Occultism's spirit-fire transmutation. Dungeon exploration of a hostile soul dimension feeds the magic web; the Otherside becomes a dedicated magic-reagent source, not a dead-end. Loop: danger/survival → spirit transmutation → magic production.

- from: deeperdarker:heart_of_the_deep (rare Warden drop, gates Otherside portal) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heart of the deep is the hardest drop in the pack (Warden kill, Ancient City). Building the Soul Elytra or Otherside portal on a sequenced assembly line — using the heart as a keystone ingredient alongside Create parts — makes the endgame gear a showcase for the full Create tech spine. Depth appropriate to power: endgame boss drop → endgame assembly chain. Advances the loop: danger → boss production route → Create (the endgame producer node).

- from: deeperdarker:warden_carapace / deeperdarker:sculk_bone | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: warden carapace and sculk bone are mid-to-endgame Otherside combat drops with a deep-dark eldritch aesthetic; arcane imbuement refines them into high-tier magic components (e.g. an armor essence or spell-catalyst), linking the darkest exploration tier to magic progression. The eldritch/sculk visual tone aligns perfectly with Ars's arcane aesthetic.

- from: deeperdarker gloomslate / sculk_stone deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate and sculk_stone are the Otherside's structural materials; crushing them back to gravel + experience_nugget gives the block families a Create recycle path and the dossier confirms create:crushing is already an inbound method. Low-cost incremental that ties the block palette into the tech spine. Everyday power, everyday weave — scale is right.

- from: deeperdarker Otherside-exclusive materials (soul_dust, soul_crystal, warden_carapace) | via: aeronautics logistics | to: economy | motif: M-31 | power: endgame | tone: ok | verdict: ACCEPT | hook: these materials are obtained only inside the Otherside dimension — an entirely separate dangerous space. Transporting them back to surface bases at meaningful quantities practically requires the aeronautics logistics arm (airship cargo hold, coordinated supply runs to dimensional extraction points). The distance/danger of acquisition makes bulk trade a real use-case for the logistics arm.

- from: deeperdarker:crystallized_amber (a Otherside decorative gem) | via: galosphere:preserved_transform_recipe | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: galosphere's preserved_transform is an amber-transformation method, and deeperdarker:crystallized_amber is structurally an amber variant — the thematic overlap is genuine. However, this is a cross-mod interaction using a niche method (galosphere:preserved_transform_recipe) with unclear interoperability, and the processing yield would need explicit testing. The stronger Create hooks (M-06 sequenced assembly, M-04 crushing) are already accepted. Flag as interesting but defer for a Phase-3 author to evaluate feasibility; record here as rejected for now.

REWORK check — existing connections:
- create:crushing already inbound (confirmed in dossier made-by methods). farmersdelight:cutting already inbound.
- survival (hostile Otherside dimension + gear tier): OK — connections sound.
- Dossier's M-09 economy candidate ("sellable for coin") is retired — do not carry forward.

## friendsandfoes   [anchors: survival (1)]

New proposals:

- from: friendsandfoes:crab_claw (crab drop, brews reach-extension potion) | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the crab claw already has a vanilla-brewing downstream use; routing it additionally through arcane imbuement as a spell-reach catalyst or alchemist cauldron ingredient gives the organic mob-drop a magic-web entry point that feels natural (claws, reach, grasp → reach-spell catalysis). Everyday item, light single step — appropriate scale.

- from: friendsandfoes:copper_golem_head / copper-themed deco (buttons, lightning rods) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the copper set is a small deco family (copper buttons + lightning rods in 4 oxidation stages); crushing them back to copper nuggets is mechanically valid M-04 but thin — vanilla copper already has this treatment, and adding it specifically for this mod's copper variants is low-value redundancy against an already-connected material (copper is in the Create spine natively). The crab_claw magic route (accepted) is the more coherent new anchor.

- from: friendsandfoes:buttercup (a floral variant from Moobloom) | via: ars_nouveau:imbuement (as a floral catalyst) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: buttercup is a decorative flower with no unique properties; using it as a magic catalyst would be a pure aesthetic assignment with no mechanical hook. The crab_claw (with its established reach effect) is a far more coherent magic link. Don't assign arbitrary flowers as magic catalysts when a better-fit item exists in the same mod.

REWORK check — existing connections:
- survival (creature variety + combat content): OK — connections sound.

## configuration   [anchors: support/library (1)]

LEAVE — Config-screen serialization library (by Fzzy). Zero blocks, zero items, no loot, no recipes. Pure API dependency; nothing to weave.

## aeronauticscompat   [anchors: aeronautics (1)]

LEAVE — Mandatory compat patcher for Sable/Aeronautics ships (fixes Etched, Cobblemon, turrets, sleeping, thick-air). Zero blocks, zero items, no loot, no recipe types. Pure runtime behavior patch; no material join key. The CLAUDE.md explicitly marks it REQUIRED — its role is infrastructure, not a weaving target.

## rechiseled   [anchors: support/decoration (1)]

REWORK check — existing connections:
- Dossier identifies Create via rechiseledcreate (Mechanical Chisel running chiseling recipes on Create power) as the strong M-04 candidate. That companion mod is already in the pack and provides the Create link.

New proposals:

- from: rechiseled chiseled-stone variants (brick paving, stone beams, etc.) | via: rechiseledcreate Mechanical Chisel (create power) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: rechiseledcreate already enables Create-powered chiseling; the weave is that the full rechiseled decoration palette runs through a kinetic machine instead of hand-tools, tying 3,600+ decorative block variants to the Create spine. This is a real Create anchor — builders need Create power for automated bulk-chiseling. The companion mod is confirmed in-pack; this formalizes the existing connection as a weave.

- from: rechiseled variants of modded stone (deeperdarker gloomslate variants, galosphere crystal bricks) | via: rechiseledcreate Mechanical Chisel | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: this is a sub-case of the accepted candidate above (the Mechanical Chisel covers all registered chiseling groups, including modded-stone variants). Recording it separately would be redundant — the one weave covers the full palette.

OK — connections sound (rechiseledcreate already establishes the Create link via Mechanical Chisel).

## openpartiesandclaims   [anchors: support/server-protection (1)]

LEAVE — Chunk-claim + party system with zero blocks, zero items, no loot, no recipes. Pure server-protection and social infrastructure. No material join key; nothing to weave. Sanctioned support role underpinning the co-op territory premise.

## letsdocompat   [anchors: survival (1)]

New proposals:

- from: letsdocompat food-tag unification (leafy_green + cross-mod food alignment) | via: config-tie / tag alignment | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the existing weave IS the mod's function — it unifies food tags so the Let's Do / Farm&Charm / Farmer's Delight processing chains interoperate. This is the definition of M-12 applied at a meta-level, but it doesn't add a second system anchor because it stays entirely within the survival/food web. No second pillar emerges.

LEAVE — Food-web integration glue (registers recipes + c:tags bridging Let's Do / Farm&Charm / Farmer's Delight / thirst mods). Zero items, zero blocks, 3 c:tags. Its entire purpose is the food-cluster connectivity that this pass aims for pack-wide — it IS the weave at the food layer. No second anchor possible without forcing.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

LEAVE — Single music-disc item playing the Minecraft Movie "Lava Chicken" song (loot=yes but no loot tables of interest). A meme/flavor easter egg; forcing a coin/recipe edge would be noise. Even loot-seeding this disc into a structure loot table would be purely cosmetic. Nothing to weave.

## midnightthoughts   [anchors: survival (1)]

New proposals:

- from: midnightthoughts well-rested buff (timed status effect from sleeping) | via: cold_sweat config-tie | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — a config synergy between two survival mods (rest buff interacting with temperature mechanics) is a tuning decision, not a weave. No recipe-type, no material, no method. Even if a synergy were authored, it stays within the survival anchor and doesn't add a second pillar.

LEAVE — Well-rested sleep-buff mechanic; zero items, zero blocks, zero loot, no recipe types. Purely event/effect-driven with no material join key. Nothing to weave to a second system. Thematically pairs with Cold Sweat/Serene Seasons as part of the survival pressure cluster, but that pairing is a design-intent note, not a weave candidate.

== CHUNK COMPLETE ==
