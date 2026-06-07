# Phase 2 candidates — chunk-08

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_table/*_shelf/*_cupboard (finished furniture) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Saw runs rough planks through a cutter-head to shape chair legs and shelf brackets — furnishing a base has a machine step
- from: handcrafted:*_counter/*_kitchen_block (kitchen furniture set) | via: domum_ornamentum:architects_cutter + crafting | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: DO's Architect's Cutter is a material-combiner, not a processing chain; routing furniture through it produces deco variants, not a production edge. No real pull through a method that advances the loop.
- REWORK: dossier's M-09 "luxury good→coin" candidate — M-09 is retired; bare sell link rejected. Would need re-expression as M-26 (furniture as colony/base upkeep consumption sink) or M-28 (colony-route building material).
- from: handcrafted:*_fancy_bed/*_couch (high-quality furnishings) | via: minecolonies colony build requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colonists request specific furniture for their huts; fancy beds and couches become colony upkeep goods — a colony player buys them from a furniture specialist

## terrablender   [anchors: support (1)]
- LEAVE — pure worldgen-library/API dep (zero items, zero methods, no content surface); weaving this would be forcing an edge onto invisible infrastructure.

## aeronauticscompat   [anchors: aeronautics/support (1)]
- LEAVE — pure behavior-patch compat layer (zero items, zero methods); it is support glue for the aeronautics pillar. CLAUDE.md marks it required. Nothing to weave.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye (undead-themed eye, obtained from undead bosses/loot) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an undead reagent transmuted by Occultism ritual into a spirit-form eye — a stuck player has a craft path without short-circuiting the exploration intent; the ritual cost keeps it non-trivial
- from: endrem:magical_eye / endrem:corrupted_eye (arcane-themed eyes) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a magical or corrupted eye infused through the enchanting apparatus using source — arcane infusion turns an exploration find into a magic-tier ingredient, fitting both mods' vibe
- from: endrem:nether_eye (nether-themed eye) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the briefing cautions "keep at most a couple of eyes craftable." Routing a nether eye through sequenced assembly trivializes the nether-specific exploration gate; the undead/magical eyes already cover the craft-path role. Adding a Create craft route on top dilutes the exploration design intent. One loot-seed + two ritual/infusion routes is sufficient; a Create chain here is excess complexity on an exploration-gated item.
- from: endrem loot tables (structure chests that award eyes) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: seed one or two eyes into Create-adjacent structure loot (e.g. Ruins of the Earth, factory-type structures) so the Create progression path occasionally rewards an eye — ties endgame portal progression to world exploration of industrial ruins
- REWORK: dossier's M-06 sequenced-assembly candidate — flagged WEAK in dossier and confirmed here as risky; the exploration gate is the mod's core design. At most one eye via craft-path (the ritual route above), never a machine chain.

## libipn   [anchors: support (1)]
- LEAVE — GUI/config library (zero items, zero methods, zero loot); genuine zero-surface code library. Nothing to weave.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — pure API translation shim (zero items, zero methods, zero loot); genuine zero-surface compat library. Nothing to weave.

## towntalk   [anchors: support (1)]
- LEAVE — audio-flavor layer for MineColonies (zero items, zero methods, zero loot); no independent content surface. Rides on MineColonies which carries the real economy/colony weave.

## securitycraft   [anchors: support (1)]
- from: securitycraft:sentry + securitycraft:block_pocket_manager (high-tier defense gear) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a sentry's targeting matrix and a block-pocket projector's field emitter are machined components — base defense requires the Create spine, tying protection to industrial production
- from: securitycraft:reinforced_* blocks (reinforcing recipe consumes a broad block set) | via: securitycraft:block_reinforcing_recipe | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: block_reinforcing is already native to securitycraft; this isn't a cross-system routing, it's describing the mod's own mechanic. No new anchor added by calling it M-26.
- from: securitycraft:keycard_reader / securitycraft:limited_use_keycard (access-control items) | via: create:pressing + minecolonies colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: keycards are stamped on a press and supplied to colony guards — the colony security apparatus becomes a recurring Create-output consumer, linking defense infrastructure to the production chain
- REWORK: dossier's M-08 "coin-from-scarcity" candidate — M-08 is player-minted currency (metal→coin via Create), not a security-gear sink. The dossier's framing was loose; the real hook is M-05 (Create parts gate defense gear) and M-28 (colony consumes them). Reject the M-08 framing.

## domum_ornamentum   [anchors: decoration/support + MineColonies (1)]
- from: Create-produced blocks (andesite alloy casings, processed stone, brass trim blocks) | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-machined stone and metal blocks fed into the Architect's Cutter yield framed/shingled building variants — deco output from industrial inputs, tying the build palette to the Create spine
- from: domum_ornamentum:architectscutter (unique build tool) | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the Architect's Cutter is a prerequisite for any colony using DO-style building; colony architects request it through MineColonies, making it a colony-route locked tool rather than freely craftable
- REWORK: dossier's "Create/andesite round-trips" note tagged M-04 WEAK-MED and noted "not a Create-machine routing." The motif still fits because M-04 is "Create recycles deco" / block→Create method — the Architect's Cutter consuming Create blocks and outputting ornamental deco IS the M-04 direction. The dossier's self-doubt is overcautious; ACCEPT the M-04 route here.
- OK — MineColonies connection (anchored as colony support dependency; blueprints consume its blocks naturally).

## sablecollisiondamage   [anchors: support (1)]
- LEAVE — pure collision-damage behavior addon (zero items, zero methods, zero loot). It enriches the PvPvE aeronautics experience but has no content surface to weave through.

## invtweaksemuforipn   [anchors: support (1)]
- LEAVE — client-only InvTweaks emulation shim (zero items, zero methods); pure QoL compat. Nothing to weave.

## underground_village   [anchors: survival (1)]
- from: underground_village loot (structure chests in Stoneholm villages) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: Stoneholm miners' hidden caches contain Create-adjacent parts or ores — underground exploration rewards tech progression, tying the survival/worldgen anchor to the Create spine
- from: underground_village structure (villager settlement with trades) | via: minecolonies colony demand | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: Stoneholm uses vanilla villagers, not MineColonies colonists; M-28 routes through MineColonies huts/requests. Vanilla-villager trade is M-21 (cut). The economy link here is structurally blocked by the CUT status of M-21 and the player-run ruling — no NPC coin faucet.
- from: underground_village structure | via: loot-seed (aeronautics/Create parts seeded in chests) | to: aeronautics | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: M-34 is the combat-route supply motif (a survivor farms boss loot and trades it). Seeding loot into non-combat structure chests is loot-seed / M-15, not M-34. Already covered by the M-15 ACCEPT above; no separate aeronautics edge is coherent for a passive underground village.
- REWORK: dossier's M-09 (numismatics trade) candidate — M-09 retired. Underground village has no economy anchor path that avoids the cut M-21 villager-trade motif. The only live path is loot-seed into Create/survival content (accepted above).

## kotlinforforge-5.11.0-all   [anchors: support (1)]
- LEAVE — Kotlin language adapter (zero items, zero methods, zero loot); genuine zero-surface library. Nothing to weave.

## jei   [anchors: support (1)]
- LEAVE — recipe-viewer UI (zero items, zero methods, zero loot). Support role; load-bearing (do not swap for EMI per CLAUDE.md). Nothing to weave.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a werewolf-creature's rending claw fed to Occultism spirit fire yields a spirit-fragment essence — folkloric monster becomes a magic reagent input, the loop advance is clear (survival drop → magic production)
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the monstrous Saci/Capelobo's tongue imbued in the enchanting apparatus attunes it into a source-linked reagent — thematically vivid, mechanically sound (imbuement accepts foreign items as catalysts)
- from: brazil_legends:amber_shard | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: amber is a resinous mineral — crushing it yields a dust byproduct (resin powder) with a further use (lacquer/varnish input, or a magic catalyst), giving the worldgen amber a Create processing step and a production chain
- from: brazil_legends:amber_pearl (block form) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: amber_pearl as a block is deco; routing deco blocks back through crushing (M-04) when the item form (amber_shard) already goes through crushing (M-03 ACCEPTED above) is a 1:1 redundant round-trip on effectively the same material. One crushing weave for amber is sufficient.
- REWORK: dossier's M-09 "amber as sellable luxury" candidate — M-09 retired. The amber_shard's economy path should re-express as M-30 (if amber is regionally scarce), or simply rely on the magic-reagent demand (M-02/M-11 accepted) driving player trade. No bare sell link.

## stylecolonies   [anchors: support (1)]
- from: stylecolonies Steampunk blueprint (calls for Create blocks in construction) | via: minecolonies colony build demand | to: create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: building the Steampunk colony style requires Create-produced block types (brass casings, andesite alloy) — the colony builder must trade with or build the Create spine to construct the style; a natural economy pull
- REWORK: dossier already flags the Steampunk→Create tie as the natural connection; promoting it to explicit M-28 here rather than leaving it "natural."

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot tables (chests aboard whale structures) | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: whales drift high and are only reliably reachable by airship — seed their chests with Aeronautics or Create progression parts, so building a ship is rewarded by exclusive sky-content loot. The aeronautics pillar gets a destination that justifies the build investment.
- from: sky_whale_ship loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sky-whale drops seed rare organic materials (whale-derived reagent, e.g. a "sky-blubber" loot entry) into the magic mod's imbuement/ritual as a high-altitude reagent — encourages high-risk exploration with a magic production payoff
- from: sky_whale_ship structure (entity encounter, exploration challenge) | via: numismatics trade (player trade not NPC) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: whale-loot rarities are sourced only by players with airships — the aerial explorer is the supplier; non-aerial players buy from them. Combat-route supply (danger + logistics = economy bridge).
- REWORK: dossier's M-09 candidate ("whale loot as tradable rarities") — M-09 retired; the re-expression as M-34 (combat/danger-route supply, accepted above) is the correct form.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh (Frostbitten zombie drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: frost-corrupted flesh fed to spirit fire transmutes into a cold-essence fragment — cryo-themed undead become a magic reagent source; survival pressure (winter biome danger) directly feeds magic production
- from: rottencreatures:corrupted_wart (Immortal storm-lich drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: wart grown from a lightning-infused undead lord imbued in the apparatus attunes to storm-source — thematically coherent, makes the rare storm event mob (spawns only in thunderstorms) a magic ingredient worth hunting
- from: rottencreatures:magma_rotten_flesh (fire-biome drop) | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-tainted flesh passed through Create's soul-fire haunting process yields a soul-soaked output (soul-touched meat scrap) — a Create→occult bridge from a survival drop; the soul seam is exactly what haunting is for
- from: rottencreatures:frozen_rotten_flesh | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Create haunting (M-19, accepted above) already routes magma flesh through Create. Routing *frozen* flesh through crushing (M-02) would add a second Create-drop path for a basically-everyday drop; the magic routes (M-11, M-02) already give the frozen flesh a sink. One Create path per mob-drop tier is sufficient; crushing frozen flesh is a weak edge with no clear output story.
- OK — magic connection via existing drop-reagent sink pattern is coherent and well-supported by dossier's strong rating.

## cmpackagecouriers   [anchors: create + aeronautics (2)]
- OK — connections sound. Already holds Create + aeronautics/logistics (2 anchors). The cardboard-plane courier is both a Create-built item (create:cutting + create:deploying) and an aeronautics-logistics tool; it advances the loop node between production and economy (package delivery). No forced extra edge needed.
- from: cmpackagecouriers:cardboard_plane (autonomous flying courier) | via: minecolonies colony requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony courier office uses cardboard planes for inter-colony supply runs — the colony route integrates Create logistics as its automated delivery arm, tying MineColonies production to the aeronautics logistics node

## lithium   [anchors: support (1)]
- LEAVE — server/world-tick optimization mod (zero items, zero methods, zero loot); pure performance support. Nothing to weave.

== CHUNK COMPLETE ==
