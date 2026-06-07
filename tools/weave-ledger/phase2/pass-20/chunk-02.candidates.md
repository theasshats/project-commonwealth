# Phase 2 candidates — chunk-02 (pass-20, blind)

## spyglass_improvements   [anchors: support (1)]
- LEAVE — pure client UI mod, no items/blocks/loot, no routable material; augments the vanilla spyglass only. Genuine zero-content surface.

## ecologics   [anchors: survival (1)]
- from: coconut / coconut_slice / fruit / nut (c:foods/fruit, c:foods/nut, c:foods/soup) | via: farmersdelight:cooking / extradelight:juicer / create:milling | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical fruit cooked/juiced into sellable dishes — a beach biome's food specialty feeds the trade web.
- from: tropical dish (processed coconut food) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a finished coconut dish is a luxury trade good a coastal player sells inland.
- from: coconut_husk / coconut woodset | via: create:milling / cutting | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: vanilla-style woods crushing back to gravel/byproduct is arbitrary deco churn; no demand pull, low priority — red-team fails (why crush a fresh woodset?).

## charta   [anchors: survival (1) — borderline deco]
- from: card_table match | via: numismatics coin wager (KubeJS/event hook) | to: economy | motif: M-14 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: Charta has no built-in betting hook; the wager would be entirely external KubeJS scaffolding, not a method-routing — no method to pull through. Surface for review as a social-sink idea, but not a Phase-3 weave as-is.
- from: bar furniture / wine+beer glasses | via: create:cutting / pressing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: forced deco-through-Create on vanilla-craft tavern furniture; no coherent demand. Decoration palette is a sanctioned support role on its own.
- LEAVE — coherent as a curated social/decoration support mod (tavern lounge for the co-op crew); its one real second-pillar idea (gambling sink) lacks a method to route through. No forced edge.

## solmaiddream   [anchors: survival (1)]
- LEAVE — tiny flavour addon (1 item, the food_book); its only hook is the shared food pool it already rides via the diet/SoL survival pillar. A second edge would be artificial (confirmed: no items/methods to route, consumes nothing of its own).

## snowyspirit   [anchors: survival (1)]
- from: ginger (c:crops/ginger, c:seeds/ginger) | via: farmersdelight:cutting / create:milling | to: create/survival(food) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger milled into a spice that joins the cooking/food-processing web instead of being a dead-end festive crop.
- from: ginger (seasonal/winter-flavored crop) | via: season-gated input → Create/cooking method | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a winter/cold-biome crop — tie its availability to the Serene Seasons winter loop so it's a seasonal reagent feeding the food chain.
- from: gingerbread/candy decor | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: everyday festive deco as a trade good is thin — no scarcity or effort behind it; would clutter the coin web with trivial goods.
- from: sled | via: aeronautics tie | to: aeronautics | motif: none | power: everyday | tone: clash | verdict: REJECT | reason: no-motif; bespoke snow-vehicle entity, no link to Create Aeronautics physics ships; weak flavour overlap only.

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config library/API, zero gameplay content. Genuine code library.

## architectury   [anchors: support (1)]
- LEAVE — ubiquitous modding API, zero player-facing content. Genuine code library.

## sound_physics_remastered   [anchors: support (1)]
- LEAVE — client audio simulation only, no items/blocks/material. Genuine zero-content support.

## hpm (Swashbucklers!)   [anchors: aeronautics (1)]
- from: pirate_cutter / war-cutter / corvette_steamship hulls (largehull, largemast, swashbucklerupgrade) | via: create:mechanical_crafting / sequenced_assembly | to: create | motif: M-06 (steamship endgame) / M-05 (native gating) | power: endgame (steamship), mid (cutter) | tone: ok | verdict: ACCEPT | hook: the bigger warships built from Create brass/mechanical parts so the fleet sits above raw wood-craft — the steamship especially wants a Create engine.
- from: corvette_steamship (steam-powered vessel) | via: createaddition fuel / Create engine intake | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: a steamship runs on refined fuel from the Create/TFMG supply line, joining the propulsion-fuel seam.
- from: finished ship (high-value vessel) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a shipwright sells crafted vessels — naval transport as a tradeable good.
- from: hand_cannon / mortar / cannonball | via: create / cbc munition assembly | to: create | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: overlaps Create Big Cannons' artillery directly; this is a curation de-dup question (flag for thunderdome), not a clean weave.
- REWORK: existing aeronautics anchor is "water transport" but these are bespoke boat-entities, NOT Aeronautics-physics ships — the anchor is thematically the logistics/transport pillar but doesn't actually wire to Create Aeronautics. Sound as a transport anchor; flag the role-overlap with Aeronautics + Big Cannons for curation, not weave.

## numismatics   [anchors: economy, create (2)]
- OK — connections sound. It IS the economy hub and a Create addon (depends on create, Create-crafted coins). Weave direction is inbound (foreign goods → vendor/price, M-08/M-09); it's the destination, not an outgoing edge. No REWORK: both anchors are load-bearing and correct.

## incontrol   [anchors: support (1)]
- LEAVE — config-only JSON rule engine, no items/methods. It *enables* the scarcity/regionality design (can region-gate mob drops feeding M-02/M-08) but is infrastructure, not a routable node.

## blueprint   [anchors: support (1)]
- LEAVE — Team Abnormals code library; its one item (template_chest) is a trivial vanilla-style chest, too thin to anchor. Genuine support library.

## enhancedcelestials   [anchors: survival (1)]
- from: meteor block (fallen-star rock) | via: create:crushing | to: create | motif: M-04 (recycle) / M-03-adjacent | power: mid | tone: ok | verdict: ACCEPT | hook: a fallen meteor crushed into iron/nickel + xp-nugget — a scarce, event-spawned Create feedstock rather than pure deco.
- from: Blood/Blue Moon active state | via: lunar-event-gated input → ars/occultism ritual method | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a celestial-attunement ritual only completable under a specific moon — the lunar reagent seam (spans all moon mods).
- from: Harvest Moon growth buff | via: season/event modifier | to: survival | motif: M-16-adjacent | power: everyday | tone: ok | verdict: REJECT | reason: it's already a free global crop modifier that other food mods ride passively — nothing to author, no method to route; it's an ambient driver, not a weave edge.
- REWORK: survival anchor is sound (lunar events = the world pushing back). Already well-justified; the meteor + lunar-ritual candidates give it real second anchors (create + magic).

## create_hypertube   [anchors: create, aeronautics (2)]
- OK — connections sound. Create-crafted (sequenced_assembly) kinetic personnel transport = Create + logistics/aeronautics pillar. No outgoing material to weave (moves entities, not items). REWORK check: aeronautics(logistics) anchor is legitimate as short-hop personnel transit; no mis-cost. Note balance lens (cheap fast-travel vs. regional scarcity §5) is a tuning flag, not a weave defect.

## create_dragons_plus   [anchors: create (1)]
- from: create_dragons_plus:ending / freezing (fan-process methods) | via: own methods | to: create | motif: n/a | power: n/a | tone: n/a | verdict: REJECT | reason: these are weave-TARGETS other mods route through, not edges this mod needs (e.g. dragon-drop → ending fan-process is the consuming mod's weave). The mod itself is a library + method provider.
- LEAVE — support role (library/QoL spine for the DragonsPlus Create add-on family). Its value is providing fan-process methods to the palette, not needing a second anchor of its own. Functionally a code library with method scaffolding.

## xaerominimap   [anchors: support (1)]
- LEAVE — client map/navigation UI, no items/methods. Genuine zero-content support (useful for co-op exploration but nothing to weave).

## createadditionallogistics   [anchors: create, aeronautics (2)]
- OK — connections sound. Create kinetics infrastructure (Create) + seats wired to Stock Keeper train logistics (transport/aeronautics arm). Performance support-role too. No outgoing material to weave; lazy shafts/seats are drop-in kinetics. REWORK check: both anchors legitimate, no mis-cost.

## trashcans   [anchors: support (1)]
- from: voided byproducts | via: any sink | to: (anti-economy) | motif: none | power: n/a | tone: clash | verdict: REJECT | reason: voiding is anti-scarcity/anti-economy by nature — no coherent pillar weave, and a balance note suggests gating/omitting it in a scarcity pack so byproducts retain value.
- LEAVE — automation-overflow utility; no material output (deletes), no coherent second anchor. Worth a balance flag (don't let it trivialize byproduct value), but that's curation, not a weave.

## moreoverlays   [anchors: support (1)]
- LEAVE — client HUD overlay (light/chunk/JEI-search), no items/methods. Genuine zero-content support.

## lootr   [anchors: support (1)]
- LEAVE — per-player loot-instancing mechanic; reads existing loot tables, ships only reskinned containers, no material join key. Multiplayer-fairness QoL for the ~10-player crew. No coherent second pillar (it operates ON other mods' loot tables rather than seeding its own — not a loot-bearing structure mod in the M-08/M-14 sense).

== CHUNK COMPLETE ==
