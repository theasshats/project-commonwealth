# Phase 2 candidates — chunk-09

## createpickywheels   [anchors: create (1)]
- from: Create water wheel / windmill placement | via: config/behavioral | to: survival | motif: no-motif (biome/geography gating on generators is a world-pressure flavor, but no motif in the registry covers a *config behavioral constraint* as a weave mechanism) | power: everyday | tone: ok | verdict: REJECT | reason: The biome-gating is real design work that genuinely adds a survival flavor — the river requirement forces engagement with the world — but it routes through no method in the palette and fits no approved motif. There is no item to route, no recipe to add, and no loot to seed. Behavioral constraint + world-pressure is a thematic fit to survival but has no weave mechanism. REJECT-for-review: worth flagging to a Gate 0 discussion on whether "geographic siting constraint on a machine" deserves a new motif, but don't invent one here.

REWORK: only 1 anchor (create); the survival flavor noted in the dossier is real but has no approved motif to hang it on. Flag for Gate 0 rather than forcing a no-motif edge.

## ldlib2   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (UI/rendering/sync infrastructure for GregTech-lineage mods; no items, no recipes, no loot). Nothing to route.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The lectern controller already costs precision mechanism + electron tubes in a standard recipe; re-expressing that as a create:mechanical_crafting recipe puts it squarely in the Create machine-building chain. A driver console for your contraptions deserves to come out of the machine shop. | reason-accept: The controller is the human-interface side of an aeronautics vehicle; anchoring it to Create via M-05 (its flagship item built in its own method, gated on Create parts) gives it a clear second anchor (create) and the recipe depth matches a mid-tier control component. The two-tube craft → mechanical crafting step is a natural fit — not an arbitrary add-on.
- from: create_tweaked_controllers:tweaked_lectern_controller (loot=yes noted in dossier) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: loot=yes is flagged in the jar data but the mod registers only the controller + linked controller; its loot surface is probably its own structure chest, not a meaningful danger-loot hook. A controller as dungeon loot makes no coherent narrative (it's a crafted tech component, not an artifact). The mod has no structure/dungeon presence. REJECT — M-34 combat-route supply doesn't apply to a control interface device.

OK — the aeronautics anchor is sound. ACCEPT the create (M-05 mechanical_crafting) 2nd-anchor.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* (wool-based, 16 colors) | via: create:item_application (dye application) or create:pressing (compressing wool) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The items are vanilla QoL (portable sleep); routing wool through Create pressing to make sleeping bags is a forced detour on a basic everyday item — the brief says basics get a one-light-step at most, and compressing wool into a sleeping bag yields no meaningful narrative. A player would reasonably ask "why do I need a Create machine to roll up a sleeping bag?" — the answer is weak. Tone clash: cozy-survival meet industrial-forge is mild but the pairing produces no sensible hook. REJECT.
- from: comforts:sleeping_bag_* | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Cutting a sleeping bag for fiber/wool recovery could work thematically but is a 1:1 round-trip (wool in → wool out) with no net gain; the briefing flags 1:1 swaps for genuinely equivalent materials only. REJECT.
- LEAVE — the mod earns its place as a survival/exploration QoL include; it fits one anchor (survival-flavor, travel camping) but offers no coherent 2nd anchor without forcing an arbitrary edge. The dossier's own assessment ("a forced economy/Create edge would be noise") is correct.

## searchables   [anchors: support/library (1)]
- LEAVE — genuine zero-content UI library (search/filter API for JEI-family screens; no items, no recipes, no loot). Nothing to route.

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — pure client-side rendering patch; no items, no recipes, no loot, no gameplay content. Nothing to route.

## xaerominimap   [anchors: support/navigation (1)]
- LEAVE — client-side map/waypoint UI; no items, no recipes, no loot, no game mechanics. Nothing to route.

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot tables (altars, cabins, sanctuaries, castles) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ruins and ritual altars would plausibly hold scrolls, reagents, and occult artifacts — a loot-seed of Iron's Spellbooks scrolls, Occultism ritual components, or Ars Nouveau source gems as altar drops turns exploration from "vanilla loot chest" into "magic expedition." The Nether-danger pressure also makes the find meaningful. Players find scrolls in ruins; the magic specialist gains a reason to mount Nether expeditions. The "ritual altars" structure type is the natural anchor — ritual loot from a ritual structure.
- from: formationsnether structure loot tables (cabins, campsites) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether campsites and cabins seeded with Numismatics coins or rare trade-goods (a trade-route relic, a foreign coin stack) rewards explorers with something the economy arm values — combat-specialist sells Nether loot to non-combat players who can't reach it safely. Distinct from M-02 (not a reagent — a currency or trade good). Supports M-34: danger location → specialist farms → economy gets scarce goods.
- from: formationsnether structure loot (castles, sanctuaries) | via: loot-seed | to: survival/danger | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 (boss-key unlock) is specifically for *boss drops* as gate items for complex recipes; a structure-chest find is not a boss drop and doesn't fit the motif. The castles may have a "boss loot" feel but the mod adds no boss entity and the motif's logic ("drop gates complex tech") doesn't apply to a generic chest. REJECT on motif mismatch — the M-02 and M-34 loot-seeds above cover the content well.

REWORK: existing "economy via numismatics" candidate in dossier is flagged as WEAK and leans on bare-sellable language. Replace: the mechanism is loot-seed of M-34 (combat-route supply: combat specialist farms Nether ruins, sells rare finds to non-fighters) and M-02 (mob-drop/structure reagent sink: magic items seeded into altar loot). Both are via loot-seed, not recipe — this is the correct delivery for a structure mod.






