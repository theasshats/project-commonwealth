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

