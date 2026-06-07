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

