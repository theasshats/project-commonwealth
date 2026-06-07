# Phase 2 candidates — chunk-01

## gravestone   [anchors: survival (1)]
- LEAVE — pure death-recovery utility; gravestone:gravestone and gravestone:obituary carry no material output a method could consume; any weave would be contrived.

## corgilib   [anchors: support/library (1)]
- LEAVE — zero-content code library; no items, no methods, no loot tables.

## create_hypertube   [anchors: Create, aeronautics (2)]
OK — connections sound. The mod is already anchored on Create (kinetic power, sequenced_assembly crafting) and aeronautics/logistics (fast entity/personnel transport). A third anchor would require forcing a material edge that has no coherent in-game meaning.
- from: hypertube_entrance | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: existing inbound weave already routes through sequenced_assembly — this would be a re-statement, not a new anchor; connection is sound as-is.

## endermoon   [anchors: survival (1)]
- from: ender_pearl (mass-spawn event supply) | via: worldgen/spawn event gating | to: magic | motif: M-22 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Ender Moon floods the sky with endermen, making ender pearls suddenly abundant — seed an ars_nouveau:imbuement or occultism:ritual that requires pearl-mass (e.g. a stack) as its window, achievable only on an Ender Moon night; the event becomes a production sprint, not just atmosphere. via: loot/spawn-event gating into ritual step.
- from: ender_pearl (mass-spawn supply) | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: pearls haunted in Create's soul-fire furnace yield a soul-infused enderpearl intermediate used in advanced Create mechanisms; the Ender Moon night becomes a scheduled Create-input harvest. via: create:haunting recipe.
- from: endermoon lunar event | via: bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; enderman drops are already basic loot; a bounty on pearls adds no structural specificity.

## betterdungeons   [anchors: survival (1)]
- from: dungeon chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Catacombs and Undead Fortress chests seed Occultism ritual-circle fragments or Ars Nouveau glyph-recipe scrolls — exploration gates magic breadth, so venturing into a crypt is the on-ramp to a new spell rather than a crafting-table dead end. via: loot-seed (datapack edit of betterdungeons loot tables).
- from: dungeon boss spawner / chest loot tables | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a unique boss-key component (e.g. rottencreatures:treasure_chest drop or a custom rune) into the deepest Catacomb/Undead Fortress room, gating a complex Create sequenced-assembly machine — the dungeon becomes a mandatory stop in the Create tech tree, not just optional XP. via: loot-seed.
- from: dungeon chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; seeding a few coins into dungeon chests is trivially true of any chest-bearing structure and adds no structural economy link.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-layer tweak; no items, no methods, no loot tables; any weave belongs to the content mods beneath it (createfisheryindustry, farmersdelight), not to this behavior hook.

## openpartiesandclaims   [anchors: support (1)]
- LEAVE — server protection/social framework; zero items, zero methods; nothing to weave.

## kubejs   [anchors: support (1)]
- LEAVE — modpack scripting tooling; it IS the weaving engine, not a weave target; has no in-game material surface.

## touhou_little_maid   [anchors: survival (1)]
- from: altar recipe method (touhou_little_maid:altar_recipe_serializers) | via: touhou_little_maid:altar | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar is a ritual-style multiblock that consumes power-point offerings and item inputs — route an Ars Nouveau source_gem or an Occultism ritual reagent as a required input for summoning a higher-tier maid; the altar reads as an arcane summoning shrine, and the magic pillar gains a downstream demand node for source_gems. via: altar_recipe (KubeJS-addable altar recipe requiring magic reagent input).
- from: rottencreatures:corrupted_wart or boss drop | via: touhou_little_maid:altar | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar naturally reads as a ritual that demands exotic offerings; requiring a mob-rare drop (corrupted wart from Rotten Creatures) as an altar input makes maid summoning depend on combat, threading survival→magic→automation. via: altar_recipe.
- from: maid automation labor (farming/fishing tasks) | via: config/behavioral tie | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: provisional motif (M-21 leans no); maid labor generating sellable crops is just generic-sellable, non-distinctive — economy de-emphasis; drop.
- REWORK: existing anchor is survival (1 only). The mod has a registered altar recipe-type, substantive items (16 blocks / 85 items), and a KubeJS dependency — yet it sits at 1 anchor with no weave. The two ACCEPT rows above bring it to magic (2) via M-05 and M-02; that closes the gap without forcing.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — a pure recipe datapack with no items of its own; it deepens the Create pillar's renewable loops rather than bridging pillars. No coherent second anchor without inventing items that don't exist.

## betteroceanmonuments   [anchors: survival (1)]
- from: monument chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the expanded monument now holds a drowned-elder-guardian relic (seeded rare reagent) in its deepest vault room — finding the monument is the unlock moment for an Occultism water-spirit ritual or an Ars Nouveau aquatic glyph scroll; exploration gates magic progression. via: loot-seed (datapack edit of betteroceanmonuments loot tables).
- from: monument chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; coin drops in a chest are not a structural economy link.

## s_a_b   [anchors: Create, aeronautics (2)]
OK — connections sound. Armored hull blocks built through Create:compacting/mixing and purpose-built as vehicle/ship armor for Aeronautics is a clean 2-anchor weave.
- from: s_a_b:hardsteelblock (highest-tier armor plating) | via: create:sequenced_assembly | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard-steel plate is a fabricated structural part; multi-step sequenced assembly to produce it makes the deepest airship hull a real supply-chain milestone rather than a flat crafting recipe. via: create:sequenced_assembly recipe adding an additional fabrication stage for the endgame tier.
- REWORK: the existing aeronautics anchor is implicit (blast-resistant blocks that happen to suit ships) but not recipe-locked into any airframe path. The M-23 ACCEPT above makes the connection structural.

## searchables   [anchors: support (1)]
- LEAVE — client UI search-bar library; zero gameplay items or methods; nothing to weave.

## l2library   [anchors: support (1)]
- LEAVE — developer library/API; no player-facing items, no methods; nothing to weave.

## create_factory   [anchors: Create, survival (2)]
OK — connections sound as stated. Already bridges Create methods and survival food.
- from: create_factory:sweet_berries_jam (fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: sweet berry nectar/jam, refined through Create mixing into a concentrated syrup, is imbuement-infused with a source_gem to yield a magical confection (a mid-tier buff food or potion catalyst) — the confectionery chain acquires a magic output, and survival food feeds the magic pillar. via: ars_nouveau:imbuement (existing method in palette).
- from: create_factory:caramel_waffle / honey_waffle | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; waffles are trivially sellable; this adds no structural loop closure.

## timm   [anchors: support (1)]
- LEAVE — client-side UI overlay; no items, no methods, no loot tables; nothing to weave.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burning frost-zombie flesh in Occultism's spirit fire extracts a cryo-spirit essence — the Frostbitten zombie's unique drop becomes a ritual reagent for cold-themed Occultism rituals, directly routing combat loot into the magic pillar. via: occultism:spirit_fire recipe.
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: magma-zombie flesh renders a fire-spirit essence in Occultism's spirit fire, giving the magma variant a distinct ritual output and adding thematic differentiation to the two fleshy drops. via: occultism:spirit_fire recipe.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:crush | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Storm Lich's corrupted nether wart, run through Ars Nouveau's Crush spell, yields an arcane powder used in high-tier glyph research — killing the Immortal (a thunderstorm-event mob) becomes the gating action for advanced spell-crafting. via: ars_nouveau:crush recipe.
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: haunting is already covered more distinctively by the spirit_fire route (M-11 ACCEPT above); adding a haunting edge on the same drop creates redundancy without loop-advancing value. Prefer the spirit_fire weave.
- from: rottencreatures mob heads | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing decorative mob heads for gravel/XP is the M-04 motif but thematically awkward on horror-flavored unique heads; the heads' value is decorative, not as Create ore-byproduct feedstock — forcing this edge degrades both mods' tone.

## clumps   [anchors: support (1)]
- LEAVE — performance mod merging XP orbs; zero items, no methods; nothing to weave.

## kiwi   [anchors: support (1)]
- LEAVE — developer library; zero items, no methods; nothing to weave.

## formations   [anchors: survival (1)]
- LEAVE — cosmetic scatter-structure worldgen; no items registered (only a template_editor tool), no loot tables (loot=no per dossier); any weave edge belongs to the content in whatever blocks it places, not to Formations itself.

== CHUNK COMPLETE ==
