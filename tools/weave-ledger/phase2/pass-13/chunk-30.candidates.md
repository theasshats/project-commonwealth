# Phase 2 candidates — chunk-30

## sablecollisiondamage   [anchors: aeronautics/support (1)]
- LEAVE — pure physics-behavior addon (no items, no recipe surface, no material graph). Collision-damage is a consequence rule on top of Sable/Aeronautics; there is nothing to route through any method.

## s_a_b   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already routes through create:compacting/mixing to produce armored plating and its raison d'être is armoring Aeronautics ships and Big-Cannons vehicles. Two pillars justified.
- from: s_a_b:hardsteelblock (hard armor plate) | via: create:sequenced_assembly | to: aeronautics (hull tier gate) | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: the toughest armor plating requires a sequenced fabrication pass — it doesn't spring out of a mixing bowl, it's assembled in stages like a real hull section.
- from: s_a_b:lightsteelblock | via: create:sequenced_assembly | to: aeronautics | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: light steel plate is an everyday building block; gating it behind sequenced assembly violates the depth-scales-with-power rule. M-23 ACCEPT above covers the hard tier only.
- REWORK: existing inbound weaves (create:compacting/mixing) — these are correct and appropriately scaled; no rework needed.

## ctov   [anchors: survival (1)]
- LEAVE — structure/datapack-only mod with no registered items, no methods, and no material outputs. The only seam would be pack-side loot injection (putting other mods' items into ctov chest loot), which is a curation knob — not a mod-to-mod weave edge and not appropriate for this pass.

## terrablender   [anchors: support (1)]
- LEAVE — invisible worldgen API library; zero items, zero methods, zero material surface. No weave is possible or meaningful.

## netmusic   [anchors: support/flavor (1)]
- LEAVE — purely cosmetic audio device. No material inputs or outputs beyond its own craft. The existing TLM altar touch (music_cd via touhou_little_maid:altar_recipe_serializers) is already present; any further forced edge (e.g. Create-crafted CD burner) would be arbitrary flavor decoration, not a real pillar link. The dossier's own conclusion stands.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike / raw_perch / raw_lionfish) | via: farmersdelight:cutting | to: economy (M-09 sellable dish chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a cutting board breaks a whole lionfish into fillets and spine-toxin scraps — now the fisherman specialist processes their haul into premium fillets and sells them.
- from: upgrade_aquatic cooked fish (cooked_pike / cooked_perch / cooked_lionfish, c:foods/cooked_fish) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: premium ocean fish sell for more than vanilla cod — a coastal trader's natural stock-in-trade.
- from: upgrade_aquatic:driftwood_log / riverwood_log | via: create:cutting (saw) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill is already the canonical sawing path for this mod's woods (inbound weave present); adding a separate create:cutting path is redundant and clutters the recipe space with near-duplicates. Leave sawmill as the sole path.
- from: upgrade_aquatic coralstone blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: deco-crush recycling is valid thematically but adds minimal gameplay value for an everyday building stone — borderline M-04 application that doesn't earn the extra recipe overhead. WEAK candidate in the dossier is accurately rated.

## knightlib   [anchors: support/library (1)]
- LEAVE — the content items (great_chalice, grail, homunculus, essences) are inert without Knight Quest, which is not in this pack. Weaving dead/unreachable items is explicitly prohibited. If Knight Quest is ever added, knightlib:great_essence is a natural M-02 mob-drop reagent candidate.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / c:foods/nut | via: extradelight:juicer or create:milling | to: economy (sellable tropical drink/food) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a juicer or mill presses coconut into coconut milk — a tropical ingredient that feeds crafted dishes and becomes a priced trade good.
- from: ecologics:coconut (processed coconut milk/cream) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut-based foods are a coastal luxury — naturally priced above plain bread.
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: azalea flower has no established magical property beyond being a vanilla biome indicator; forcing it into an Ars imbuement is thematic reach without a coherent hook. A player would ask "why is an azalea flower a magic reagent?" and find no answer. Tone: mild clash.
- from: ecologics coconut woodset | via: create:cutting (saw) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier correctly rates this WEAK — vanilla-style wood sets don't add meaningful Create integration; not worth the recipe noise.

## startuptime   [anchors: support/diagnostic (1)]
- LEAVE — zero-content boot-time logger. Absolutely no material surface, no methods, no items. Pure diagnostic code library. Genuine zero-content case.

## modulargolems   [anchors: Create (1)]
- from: Cataclysm boss-drop metal (cursium ingot / boss signature drop) | via: modulargolems:golem_assemble | to: survival/combat (boss-drop gate) | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful golem bodies require boss-metal cores — you can't automate away the dungeon; killing the Cataclysm boss unlocks cursium-tier constructs.
- from: ars_nouveau:source_gem (or occultism:otherstone) | via: modulargolems:golem_assemble (golem core upgrade slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: infusing a source gem into a golem's core upgrade slot awakens arcane behaviors (spell-casting, aura), threading golemancy into the magic pillar — a player says "of course an arcane golem needs a source gem".
- from: Ice&Fire dragonsteel ingot | via: modulargolems:golem_assemble | to: survival/combat | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: dragonsteel is already a supported cross-mod metal in the dossier (deps include iceandfire); this is an existing connection, not a new weave. Not a new candidate.
- REWORK: existing inbound weaves (create:crushing, create:mechanical_crafting, create:sequenced_assembly) — all appropriate for a Create-gated golem-crafting system; no rework needed. The Create anchor is solid. The gap is the missing magic pillar, which the M-10 ACCEPT above addresses.

== CHUNK COMPLETE ==
