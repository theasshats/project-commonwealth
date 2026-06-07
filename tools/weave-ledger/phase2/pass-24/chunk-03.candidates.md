# Phase 2 candidates — chunk-03 (pass-24)

## particlerain   [anchors: support/client (1)]
LEAVE — pure client-side particle rendering; zero items, zero methods, zero loot. No material surface to route through any pillar. Genuine zero-surface support mod.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike / raw_perch / raw_lionfish) | via: farmersdelight:cooking + create:milling | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic ocean fish run through the Create food web — milled fish meal or cooked sea dishes deepen the food chain without any new machinery
- from: upgrade_aquatic cooked luxury fish (cooked_lionfish, fish pie) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; sellability alone is not a distinctive weave
- from: upgrade_aquatic driftwood / riverwood logs | via: woodworks:sawmill (already inbound) → create:crushing recycling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill already gives upgrade_aquatic a Create-adjacent tie; adding a M-04 crush-back is a thin second layer on an existing connection, not a meaningfully new pillar anchor
REWORK: current anchors sound — survival (ocean worldgen + food) is the right primary; the woodworks:sawmill inbound counts as a partial Create weave. The M-12 fish-processing accept above is the recommended 2nd anchor.

## balm   [anchors: support/library (1)]
LEAVE — multi-loader abstraction library with zero content; no items, no loot, no methods. Pure dep chain.

## create_factory   [anchors: Create, survival (2)]
- from: create_factory sweet_berries_jam / cream fluids | via: create:filling + extradelight:vat or extradelight:drying_rack | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: jam and cream fluids produced by the dessert factory feed into the broader food-processing web (ExtraDelight ferment/dry), tightening the sweet-goods cluster into the cook chain
- from: create_factory finished waffles / caramel rolls | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; assembled sweets are trivially sellable; not a distinctive economy anchor
OK — connections sound. Already Create + survival (2). The ExtraDelight fluid-pull above offers a stronger survival integration than the M-09 sell link the dossier flagged.

## zeta   [anchors: support (1)]
LEAVE — module loader / registration framework; zero player content, no items, no loot, no methods. Pure dep.

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted wood furniture (chairs, tables, shelves, cupboards — full per-wood sets) | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing a subset of the furniture set through Create's saw ties the decoration palette to the production spine — players who invest in Create get furniture from the belt, not just a crafting table; earns a legitimate Create 2nd anchor
- from: handcrafted trophies (bear_trophy and kin) | via: create:mechanical_crafting | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: trophies are cosmetic; a mechanical_crafting route is forced depth for a deco item with no mechanical purpose — doesn't survive red-team (why does a decoration need a contraption?)
- from: handcrafted finished furniture sets | via: numismatics sell / MineColonies supply | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; furniture sells thinly and every deco mod's output is trivially sellable

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry liquid XP (experience_bucket fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars infusion consumes XP as a liquid fuel — the Create enchanting factory feeds the magic pillar's ritual costs, tying the two production routes together without forcing a single item lock
- from: create_enchantment_industry liquid XP | via: occultism:ritual (XP-cost rituals) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals that cost experience could draw from a tank of liquid XP via pipe, making the Create enchant factory the supply line for ritual casting — a clear loop (combat XP → Create processes → Occultism consumes)
- from: create_enchantment_industry hyper-enchanted gear outputs | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: REJECT | reason: hyper-enchanted gear going INTO a cauldron brew is thematically incoherent — enchanted gear is an end product, not a reagent; tone clash
REWORK: single anchor (Create) is the floor; the two accepted magic links above give it a real second anchor via the XP economy. No existing connections to flag as arbitrary.

## trashslot   [anchors: support/QoL (1)]
LEAVE — inventory UI trash slot; zero items, zero methods, zero loot. Genuine zero-surface QoL mod.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons chest loot tables (Catacombs, Undead Fortress, Spider Cave) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars/Occultism magic reagents or Iron's scroll fragments into the dungeon chests gates magic progression behind exploration — dungeons become a reason to adventure before you can cast high-tier spells
- from: betterdungeons chest loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; seeding coins into dungeon loot is the most obvious/saturated dungeon-economy link; the magic reagent seed is more structurally distinctive and captures the same "exploration → production" advance
REWORK: survival (1) is sound; the M-02 loot-seed accept above is the recommended 2nd anchor. No arbitrary existing connections — but the dossier note on M-08-adjacent economy loot should stay a REJECT per the active de-emphasis policy.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus fan_ending_catalyst (Dragon Head / Dragon Breath fluid) | via: create_dragons_plus:ending (Bulk Ending) | to: Create/magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: dragon breath is thematically "void/end energy" — wiring a magic-output (Occultism ender material or Ars arcane-end essence) as the product of Bulk Ending ties the Create processing method to magic production; Create consumes an end-game resource to produce a magic reagent
- from: create_dragons_plus fan_freezing_catalyst (Powder Snow) | via: create_dragons_plus:freezing (Bulk Freezing) → survival cold-sweat cold-resistance | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: the Bulk Freezing method is a Create processing step, not a seasonal-gated reagent — M-16 requires a *season-gated* input; powder snow is always available; motif doesn't fit cleanly; no-motif edge → REJECT-for-review
- from: create_dragons_plus dye fluids (bulk dyeing) | via: create_dragons_plus:ending → aeronautics hull coloring | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: bulk dye fluids are a convenience method, not a structural alloy / hull component — M-23 requires a load-bearing material; dye is cosmetic; tone doesn't fit the "airframe earns its cost" design intent
REWORK: single anchor (Create) is the floor. The M-19 accept above (fan_ending → magic output) provides a Create↔magic 2nd anchor. The dossier's own "leave" verdict was too conservative given the ending method's thematic reach.

## charta   [anchors: survival (1)]
- from: charta card_table / game furniture (all wood variants) | via: create:cutting (mechanical saw) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing the bar furniture set through Create's saw earns a secondary Create anchor — the tavern/casino furniture palette has a production cost in the tech spine, not just crafting tables
- from: charta filled wine/beer glasses | via: beachparty:palm_bar_mixing or vinery:wine_fermentation as fill source | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: charta's glasses are decorative drink containers, not consumed foods — feeding them through a brewing method is a round-trip cosmetic step with no loop advance; forced edge
- from: charta card tables (social/gambling venue) | via: numismatics wagering mechanic | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Charta has no built-in betting hook; wiring a coin-wagering mechanic would require bespoke KubeJS event scripting with no clear existing method — no-motif edge for the wagering side; the M-04 Create link is the cleaner 2nd anchor

## accelerateddecay   [anchors: support/performance (1)]
LEAVE — pure behavior patch replacing leaf-decay ticking; zero items, zero loot, zero methods. Genuine zero-surface performance mod.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
OK — connections sound. Create (logistics network base) + aeronautics (Robo Bee airborne courier = logistics arm of economy). Already at 2 anchors and the connection is structurally clean — it literally is the airborne parcel delivery layer. No reworks needed.

## ars_n_spells   [anchors: magic (1)]
LEAVE — internal magic↔magic bridge unifying Ars Nouveau and Iron's Spellbooks mana pools; zero items, zero loot, zero methods. It IS a weave (M-01 compatible) but is magic-internal only; no item surface for a 2nd pillar route without forcing an artificial edge.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: create_ltab structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars source gems or Iron's spell scrolls into Create-themed ruin chests makes the exploration of Create structures reward magic progression — the two production routes (Create + magic) connect through adventuring
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; coin loot in Create ruins is the most obvious link; the magic seed is more architecturally meaningful
OK — existing Create + survival anchors are sound. The loot-seed accept above adds a magic 3rd anchor via exploration.

## ponderjs   [anchors: support/Create-tooling (1)]
LEAVE — KubeJS scripting tool to author Create Ponder scenes; zero items, zero loot, zero methods. Developer-only documentation infrastructure; no player-facing content to weave.

## accessories   [anchors: support/library (1)]
LEAVE — accessory-slot API; zero items, zero loot, zero methods. The wearable content that could weave lives in dependent mods, not this library.

## dynamic_fps   [anchors: support/performance (1)]
LEAVE — client FPS throttling for background/idle windows; zero items, zero methods, zero loot. Genuine zero-surface performance mod.

## beachparty   [anchors: survival (1)]
- from: beachparty coconut / tropical cocktails (coconut_cocktail, melon_cocktail, honey_cocktail, etc.) | via: farmersdelight:cooking or extradelight:vat | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical cocktail ingredients (coconut, tropical fruit) run through the FarmersDelight/ExtraDelight cooking web — the beach food cluster joins the broader food-production chain, giving beachparty a genuine processing tie rather than isolated craft recipes
- from: beachparty mini_fridge ice output (packed ice / snow) | via: create:mixing (as cold input for cooling recipes) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mini Fridge is a pre-tech ice source — seed a handful of Create mixing or cooling recipes that call for ice/packed-ice and the fridge becomes an early-game supply node for the Create production chain; simple, sensible, one step
- from: beachparty cocktails | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; cocktails are trivially sellable; the processing-chain links above are stronger anchors
REWORK: survival (1) is correct; the two accepted links above give it Create + survival (processing) for a total of 2 real anchors. No arbitrary existing connections.

## geckolib   [anchors: support/library (1)]
LEAVE — animation engine API; zero items, zero loot, zero methods. Pulled in as a hard dep for animating entities; no player-facing surface to weave.

== CHUNK COMPLETE ==
