# Phase 2 candidates — chunk-12

## createadditionallogistics   [anchors: create, aeronautics (2)]

REWORK: OK — connections sound. The Create kinetics-infrastructure anchor is genuine (lazy shafts/cogs are a real
Create build material and perf aid) and the aeronautics anchor via Stock Keeper seats is coherent (seats size to
train Stock Keeper mobs for the logistics arm). No new weave surface — the mod ships no materials other mods could
consume, and its own items are purely Create kinetic parts. Leave at 2.

## pingwheel   [anchors: support/QoL (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no material surface. Transient world markers with
no physical form cannot be routed through any method. QoL anchor is the correct and complete classification.

## enhancedcelestials   [anchors: survival (1)]

- from: enhancedcelestials:meteor (fallen-star rock, harvestable block) | via: create:crushing | to: create |
  motif: M-04 | power: everyday | tone: ok (meteoric rock → metal content is natural/folkloric — iron-nickel
  from meteorites is real-world knowledge; a player nods immediately) | verdict: ACCEPT |
  hook: a fallen meteor block crushed yields iron (or nickel) plus an xp-nugget — meteors become a minor Create
  feedstock rather than permanent landscape decoration.

- from: enhancedcelestials:space_moss_block (worldgen block, harvestable) | via: create:crushing | to: create |
  motif: M-04 | power: everyday | tone: clash — space moss is atmospheric alien flora, recycling it via crushing
  into a generic byproduct feels arbitrary and kills the vibe; nothing about "cosmic moss" suggests it should
  yield a mundane industrial output | verdict: REJECT | reason: theme clash; no sensible hook for a player.

- from: Blood Moon active event (spawn-surge world state) | via: worldgen/event gating → occultism:ritual or
  ars_nouveau:summon_ritual | to: magic | motif: M-22 | power: mid | tone: ok (a Blood Moon empowering dark
  rituals is an obvious resonance — players would nod at "of course that ritual only completes when the moon
  runs red") | verdict: ACCEPT |
  hook: a Blood Moon is a prerequisite state for a high-tier Occultism or Ars Nouveau ritual/summon — lunar
  threat doubles as a magic-progression gate, not just a spawn hazard.

- from: Harvest Moon active event (crop-growth acceleration) | via: config tie / seasonal modifier | to: survival
  | motif: M-16 | power: everyday | tone: ok (Harvest Moon boosting crops is the literal etymology of the phrase)
  | verdict: ACCEPT |
  hook: Harvest Moon's growth buff already applies to all installed crop mods automatically (Farmer's Delight,
  Dynamic Trees, etc.) — naming it explicitly in the survival system as a seasonal growth driver costs nothing
  and the effect is already live; the weave is acknowledging and documenting this cross-mod synergy.

- from: Blue Moon (Luck + loot boost) | via: loot-seed — seed enhanced loot into Numismatics/bounty chests or
  loot-chest structures that only drop rare materials during a Blue Moon | to: economy | motif: M-30 |
  power: mid | tone: ok | verdict: REJECT | reason: Blue Moon loot is a vanilla loot-quality pass, not regional
  scarcity; M-30 requires region-locked ore-gen, which Blue Moon doesn't provide. No matching motif — the "rare
  timing window" idea is closer to M-22, but gating a loot chest on a moon event requires custom datapack logic
  with no existing pack-side method to author against (the Harvest Moon/Blood Moon gates ride the moon-state
  the mod already publishes as a world condition). no-motif for the economy link; reject.

- from: enhancedcelestials:meteor | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid |
  tone: ok (a fallen star refined into a celestial reagent via arcane infusion is well within Ars' register) |
  verdict: ACCEPT |
  hook: an imbuement step refines a crushed meteor fragment into a celestial catalyst usable in Ars Nouveau
  rituals — tying the sky-drop to the magic pillar and giving meteor a two-step chain (crush → imbue → use).

## stylecolonies   [anchors: support/decoration (1)]

LEAVE — genuine zero-content surface: no items, no blocks, no loot tables, no recipe types. The mod is a
blueprint folder pack that extends MineColonies' style picker. Its Steampunk style already consumes Create
blocks at colony-build time — that is the natural tie and it's emergent from colony mechanics, not a weaveable
edge. A second anchor would have to be invented, not routed through a method.

## mousetweaks   [anchors: support/QoL (1)]

LEAVE — genuine zero-content: no items, no blocks, no loot, no methods. Client input-handling tweak with no
material surface. QoL anchor is complete.

## dynamictreesplus   [anchors: survival (1)]

- from: dynamictreesplus:saguaro_fruit (ambient forage drop, everyday) | via: create:milling | to: create |
  motif: M-12 | power: everyday | tone: ok (milling a cactus fruit for a dye or food intermediate is the same
  move Create does with wheat→flour; desert flora → industrial pigment is coherent) | verdict: ACCEPT |
  hook: saguaro fruit milled yields a red/orange dye intermediate or a dry powder used in cooking, giving the
  procedural desert cactus a manufacturing purpose rather than only decoration.

- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap (bulk forage block output) | via: create:milling |
  to: create | motif: M-12 | power: everyday | tone: ok (mushroom → spore powder / ferment base is standard
  alchemical logic; Create mills organic matter routinely) | verdict: ACCEPT |
  hook: mushroom cap blocks milled yield mushroom powder — a cooking/fermentation feedstock for FarmersDelight or
  ExtraDelight recipes, making mega-mushroom farming a Create-linked production loop.

- from: dynamictreesplus:saguaro_fruit | via: extradelight:juicer or farmersdelight:cooking | to: survival |
  motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: dynamictreesplus already anchors to
  survival; this is an intra-system edge that doesn't advance the loop to a second anchor. M-12 only earns its
  keep here if it crosses to Create or magic; the same juicer/cooking link applied within survival doesn't weave
  a new anchor.

- from: dynamictreesplus:saguaro_fruit | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid |
  tone: clash — cactus fruit transmuted into a spirit essence via soul-fire reads as arbitrary; there's nothing
  about Sonoran desert flora that maps to Occultism's demonic/spirit register | verdict: REJECT |
  reason: theme clash; no sensible player-facing hook. The milling path to Create is the coherent second anchor.

## create_central_kitchen   [anchors: create, survival (2)]

REWORK: OK — connections sound. The bridge from Create automation to FarmersDelight/ExtraDelight cooking blocks
is the definition of this mod's purpose; Create + survival is the correct 2-anchor pair. No items registered,
so no new method-routing is available from this mod's side. Optional 3rd (economy): the sequenced-assembly
feast/sandwich pipeline could be acknowledged as feeding the M-26 consumption loop (finished dishes consumed
by survival pressure), but that is the ambient endpoint of all food production and earns no new anchor per
the economy-is-player-run ruling. Leave at 2.

## create_compressed   [anchors: create (1)]

- from: create_compressed:crushed_<metal>_pile blocks (9× compressed crushed ore, everyday) |
  via: create:splashing (bulk washing) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT |
  reason: same-anchor intra-Create move; does not advance the loop to a second pillar. The mod already uses
  splashing/crushing/milling internally — adding another Create recipe edge earns no new anchor.

- from: create_compressed:dough_block / wheat_flour_pile (compressed food intermediate) | via: farmersdelight:cooking
  or extradelight:oven | to: survival | motif: M-12 | power: everyday | tone: ok (a compressed flour block fed
  into a cooking station as batch input is exactly the kitchen-automation logic; perfectly coherent) |
  verdict: ACCEPT |
  hook: bulk compressed flour/dough blocks can be consumed by FarmersDelight/ExtraDelight cooking methods in
  large-scale runs, making create_compressed part of the Create-to-survival food pipeline and earning a survival
  anchor to match its Create one.

- from: create_compressed:mechanism_block / cogwheel_block / shaft_bundle (compressed Create mechanical parts) |
  via: aeronautics build recipes (structural component input) | to: aeronautics | motif: M-23 | power: mid |
  tone: ok (compressed mechanical components as airframe material is intuitive — you'd use the dense block form
  for ship hulls) | verdict: REJECT | reason: aeronautics structural recipes (M-23) should call for
  create_ironworks steel or fabricated alloy plates, not compressed cog-blocks — the compressed forms are
  storage/automation conveniences, not structural material. Theme is marginal and the substitution is
  conceptually wrong (you build a ship hull from plates, not compressed cogwheels). No-motif fit for this
  specific routing.

## grimoireofgaia   [anchors: survival (1)]

- from: grimoireofgaia mob-drop fragments/nuggets (large catalogue of exotic drops — diamond/emerald nuggets,
  bone fragments, misc material nuggets) | via: occultism:spirit_fire or occultism:ritual | to: magic |
  motif: M-11 | power: mid | tone: ok (mythic-creature remnants transmuted into spirit essences via ritual is
  the exact tone Occultism targets — monster girls and folklore beasts feeding dark magic is coherent and a
  player would nod immediately) | verdict: ACCEPT |
  hook: Grimoire mob drops are transmuted into Occultism spirit essences or reagents via spirit-fire / ritual,
  making the mythic bestiary a supplier for the magic pillar and forcing combat players to feed spirit-crafters.

- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid |
  tone: ok (bestiary drops → arcane infusion catalyst fits Ars' register; a harpy feather or gorgon scale
  refined into an arcane reagent via imbuement apparatus is sensible fantasy) | verdict: ACCEPT |
  hook: select Grimoire fragments become Ars Nouveau imbuement catalysts or glyphs-recipe inputs, pulling the
  mythic bestiary into the arcane web alongside the spirit-fire path.

- from: grimoireofgaia mini-boss busts (bust_gorgon / bust_valkyrie / bust_sphinx / bust_vampire — endgame loot
  from named mini-bosses) | via: boss drops as create:sequenced_assembly gate items | to: create | motif: M-15 |
  power: endgame | tone: ok (a gorgon bust as the key to a complex Create machine feels like a trophy-unlock;
  the thematic gap between fantasy busts and Create machines is real but the boss-gate motif is intended
  precisely to bridge danger → tech, and the busts' mythic prestige earns gate status) | verdict: ACCEPT |
  hook: a Grimoire mini-boss bust (e.g. gorgon or sphinx) is a required input in a sequenced-assembly recipe for
  a high-tier Create component, making mini-boss killing the key to a machine unlock.

- from: grimoireofgaia:pearl_block (decorative mob-related block) | via: create:crushing | to: create |
  motif: M-04 | power: everyday | tone: ok (pearl material crushed into powder for alchemical use) |
  verdict: REJECT | reason: pearl_block appears to be a deco block, not a meaningful processing feedstock; the
  yield would be arbitrary (what does crushing a pearl block give?). The M-04 motif calls for a lossy
  recycling that makes logical sense — deco metal/stone → raw/gravel. Pearl → crushed "pearl powder" has
  no established target recipe in the pack. Weaker than the reagent-sink paths above.

- from: grimoireofgaia artifact rings (Ring of Speed/Jump/Haste — equippable, mid-tier gear) |
  via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: clash —
  a ring applied via a Create deployer to upgrade gear reads as mechanically forced; the rings are self-
  contained equipment items, not component upgrades. The deployer is for slotting a part into a base, not
  socketing a ring into armor. | verdict: REJECT | reason: theme/mechanical clash; rings are equipped in
  player slots, not deployed onto a machine-crafted base via Create. Wrong method for the material.

- from: grimoireofgaia mob drops (combat output) | via: emergent trade — combat specialists sell drops to
  magic specialists | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT |
  hook: Grimoire drops are high-variety mob rewards that magic players can't farm efficiently if they've
  specialized in crafting/colony; a combat player farms the bestiary and trades the reagents to magic
  specialists — the dual role of the bestiary (pressure/danger and a production input for magic) is exactly
  the M-34 combat-supply loop.

## ctov   [anchors: survival (1)]

- from: ctov structure loot tables (loot=yes — biome-tailored villages have chest loot) |
  via: loot-seed (inject economy-relevant items into structure chests) | to: economy | motif: M-30 |
  power: everyday | tone: ok (finding regional goods in a biome-specific village is exactly what regional
  scarcity means — a desert village has desert goods, a mushroom village has mushroom goods) |
  verdict: ACCEPT |
  hook: seed ctov village loot tables with region-appropriate raw materials (desert village → cactus/spice,
  mountain village → stone/ore, mushroom village → mushroom products) so villages are discovery nodes for
  regional scarcity goods, not just trade hubs. The loot-seed action is a Phase-3 datapack edit.

- from: ctov villager population | via: villager trade (M-33 service-for-hire) | to: economy | motif: M-33 |
  power: everyday | tone: ok (biome-specific villages as economy nodes where specialists can set up service
  stalls near villages) | verdict: REJECT | reason: M-21 is cut (NPC coin faucet) and bare villager-trade
  links are rejected; M-33 is player-to-player labor, not NPC trade seating. The ctov villages have no
  player-facing crafting method to route material through — the loot-seed (accepted above) is the correct
  actionable edge. This reject records the villager-trade idea explicitly so it isn't re-proposed.

## underground_village   [anchors: survival (1)]

- from: underground_village chest loot (underground dungeon-village chests — loot=yes) |
  via: loot-seed (inject region-relevant underground goods) | to: economy | motif: M-30 |
  power: everyday | tone: ok (an underground settlement's chests holding subterranean goods — deepslate
  minerals, fungal items, underground-specific drops — is immediately logical; players find resources tied
  to where they are in the world) | verdict: ACCEPT |
  hook: seed underground village loot tables with depth-relevant materials (deepslate derivatives, underground
  fungi, raw metal samples) so Stoneholm settlements are economy nodes for deep-strata scarcity goods —
  the underground biome having its own regional offering.

- from: underground_village settlement location (underground, near ores) | via: MineColonies colony route
  placed near or overlapping Stoneholm | to: economy | motif: M-28 | power: mid | tone: ok (a colony
  establishing around an underground village as a mining hub is a natural emergent play) | verdict: REJECT |
  reason: this is a player strategy, not a weaveable edge — the mod has no recipe type or method to route
  through, and MineColonies colony placement is player choice, not a designed connection. No delivery
  mechanism exists; the loot-seed above is the concrete actionable edge.

## betterbiomereblend   [anchors: support/performance (1)]

LEAVE — genuine zero-content: no items, no blocks, no loot, no methods. Client-only biome-color renderer
replacement. No material surface to weave.

## quark   [anchors: support/decoration (1)]

- from: quark decorative stone/brick variants (andesite bricks, cobblestone bricks, slate variants — everyday
  building blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok (Quark's
  decorative stone variants crushing back to raw/gravel + an xp-nugget is exactly M-04's deco-recycling
  loop; the pack already uses this motif and Quark's polished/brick stone blocks are the canonical target) |
  verdict: ACCEPT |
  hook: Quark's polished/brick stone variants and vertical slabs can be recycled via Create crushing — lossy
  return to gravel/raw stone plus an xp-nugget — so over-built deco isn't wasted and the Create deco-recycling
  web covers Quark's palette.

- from: quark:apple_crate / carrot_crate / potato_crate etc. (c:storage_blocks/apple etc. — compressed food
  blocks, everyday) | via: create:milling or farmersdelight:cutting | to: survival | motif: M-12 |
  power: everyday | tone: ok (a compressed crate of apples run through a cutter or mill for juice/pulp is
  logical; Quark's storage crates invite bulk-processing just as Create's compressed ore piles do) |
  verdict: ACCEPT |
  hook: Quark food crates (apple, carrot, potato, beet) processed through a cutting board or Create mill yield
  bulk juice/pulp intermediates, tying Quark's vanilla-plus storage format into the Create-to-survival food
  pipeline and earning a second anchor.

- from: quark:ancient_bookshelf / quark:bookshelf variants (enchanting-adjacent, building, everyday) |
  via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: everyday | tone: clash —
  Quark bookshelves boost vanilla enchanting power (like regular bookshelves); seating them as Ars Nouveau
  apparatus input-materials stretches the function further than the item's identity warrants. Ars uses exotic
  materials (source gems, arcane essences, flora) as apparatus ring items; a bookshelf is a power-block,
  not a reagent. | verdict: REJECT | reason: tone clash and wrong function for the item; bookshelves are
  enchanting-power providers, not consumable reagents. Forcing one into an Ars recipe would feel arbitrary.

- from: quark:ancient_wood / ancient_planks (Glimmering Weald cave-biome wood, mid-tier deco) |
  via: occultism:ritual | to: magic | motif: M-10 | power: mid | tone: ok (ancient wood from a glowing
  underground biome as a ritual component for Occultism is thematically coherent — the Glimmering Weald
  is otherworldly flora, which suits Occultism's aesthetic) | verdict: REJECT | reason: Occultism rituals
  use its own dedicated ritual items plus entity/item conditions — dropping a specific wood block type into
  a ritual is possible but sets a precedent for every exotic wood to have a ritual role, which is
  over-engineered for Quark. The Create (M-04) and survival (M-12) weaves above are the cleaner pair.
  Flag for future consideration if the magic pillar needs more ritual feedstocks.

## bookshelf   [anchors: support/library (1)]

LEAVE — genuine zero-content code library: no items, no blocks, no loot, no recipe types. Darkhax utility lib
with no material surface. Sanctioned support role.

## jeed   [anchors: support/client-UI (1)]

LEAVE — genuine zero-content: no items, no blocks, no loot. Its two registered "recipe-types"
(jeed:effect_provider, jeed:potion_provider) are JEI display categories, not craftable methods — they render
effect documentation, not process materials. Client-UI support role; nothing to weave.

## foodeffecttooltips   [anchors: support/QoL (1)]

LEAVE — genuine zero-content: no items, no blocks, no loot, no methods. Client tooltip renderer only. QoL
support role is complete.

