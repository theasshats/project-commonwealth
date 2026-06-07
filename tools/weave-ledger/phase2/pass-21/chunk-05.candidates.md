# Phase 2 candidates — chunk-05

## platform   [anchors: support/library (1)]
- LEAVE — pure Architectury-based code library (0 blocks, 0 items, no recipe types, no material surface). Genuine zero-content infrastructure.

## dndesires   [anchors: create (1)]
- from: crop/food items (e.g. berries, milk, seasonal crops) | via: dndesires:freezing fan-processing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: an industrial fan with a freezing sail chills crops and dairy into shelf-stable intermediates — survival's food prep runs through Create's belt line
- from: dndesires:rubber (sap → hydraulic_compacting) | via: dndesires:hydraulic_compacting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber gaskets/seals are a required component in Aeronautics hull/frame assemblies — airships need flexible seals, and the Hydraulic Press is the only machine that can produce them
- from: dndesires:rubber | via: dndesires:hydraulic_compacting | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: aeronautics anchor (M-23) above already gives the second pillar; adding economy on rubber as a trade good is a third reach that dilutes scarcity — rubber should be *consumed* by aeronautics, not freely sellable until airship-tier is established
- from: dndesires:cardboard_package_* | via: recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: cardboard packaging is a logistics *container*, not a structural hull material — forcing it into airframe recipes is a tone clash (cardboard on a ship is silly); packaging belongs to economy logistics flavor, not aeronautics construction depth
- REWORK: existing Create anchor is sound. The survival/food 2nd anchor via M-12 (freezing fan for crop prep) is the clear addition; the aeronautics/rubber via M-23 strengthens it further. OK on existing connections.

## patchouli   [anchors: support/docs (1)]
- LEAVE — data-driven guide-book library (0 blocks, 9 items that are only book covers, no material surface for routing). The one recipe type it registers (`patchouli:shapeless_book_recipe`) crafts a guide book — no foreign material sink. Genuine support library.

## entity_model_features   [anchors: support/client-rendering (1)]
- LEAVE — client-side OptiFine CEM model-replacement engine (0 blocks, 0 items, no recipe types, no gameplay surface). Pure rendering infrastructure.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — networking/privacy utility (0 blocks, 0 items, intercepts chat-signing protocol only). No material or method surface whatsoever.

## mcwdoors   [anchors: decoration (1)]
- from: metal door variants (iron/steel/copper) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: an iron or steel-trim door thrown into a crushing wheel yields back iron nuggets + an XP nugget — the standard Create deco-recycle loop, so building mistakes aren't dead ends
- from: wooden door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wooden doors yield wood planks/sticks on vanilla crafting already — adding a crushing recipe for planks is redundant noise with no new routing, and M-04 is most coherent for non-wood materials (metal/stone) that have no vanilla recycle path
- REWORK: dossier already notes M-04 as the only candidate and flags it WEAK (decoration sanctioned as a 1-anchor role); apply M-04 only to metal-variant doors as a small decoration-family pass, consistent with other Macaw's metal-block passes. OK otherwise.

## charta   [anchors: survival (1)]
- from: charta card-match activity at charta:card_table | via: config tie / KubeJS event hook | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: winning a card match at the tavern table pays out a small numismatics coin reward — gambling is the oldest economy driver; a social game paying real in-world currency makes the tavern a genuine economic node, not just decoration
- from: charta:empty_wine_glass / charta:empty_beer_glass | via: recipe (filled by vinery/alcohol_industry fluid via create:filling) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: empty bar glasses filled on a Create fluid-pipe/filler become served drinks — the tavern bar is stocked by a Create fluid line, linking decoration directly to the production spine
- from: charta bar furniture (card tables, stools, shelves) | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: bar furniture is vanilla-plank craft; a cutting recipe for deco wood is mechanical noise that adds no loop advance — the wine-glass fill (M-12) already lands the Create anchor more meaningfully
- REWORK: existing survival anchor is borderline (social flavor); the card-match → coin (M-09) weave is the most direct pillar-advance; the glass-fill (M-12) via Create fluid is a lighter, coherent second hook. Together they lift charta to survival+economy (2), which is the goal. OK — no existing connections to flag as rework.

## zombiemoon   [anchors: survival (1)]
- LEAVE — no unique drops, no items, no blocks (loot=no confirmed in jar). The mod adds tougher zombie variants as pure combat difficulty. Forcing a synthetic drop-reagent would be an invented edge; the dossier explicitly rules this out. Genuine single-anchor survival-pressure mod.

## puzzleslib   [anchors: support/library (1)]
- LEAVE — multi-loader utility library by Fuzs (0 blocks, 0 items, no recipe types, no material surface). Pure code infrastructure for dependent Fuzs mods.

## createimmersivetacz   [anchors: create (1)]
- from: createimmersivetacz:twelve_gauge_shell / bulk ammo | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced shells and cartridges are the obvious consumable trade good — an "arms dealer" player sells ammo to the group for coin, making the Create ammo-factory a genuine economic specialization, not a private stockpile
- from: createimmersivetacz:gun_barrel / firing_mechanism | via: numismatics / bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: gun *parts* as bounty rewards conflicts with the boss-key gate model (M-15 should own high-tier weapon components); keeping gun parts inside the Create production chain is cleaner — only finished ammo flows into the economy as trade goods (covered by M-09 accept above)
- REWORK: existing Create anchor (sequenced_assembly ammo pipeline) is well-built. The economy weave via M-09 (ammo as trade good) is the right second pillar — coherent, low-arbitrage, advances the scarcity→economy loop. OK on existing connections.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — technical GUI/BE/packet library by SuperMartijn642 (0 blocks, 0 items, no recipe types). Pure code infrastructure.

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — client movement-feel tweak (climbing physics; no items/blocks/methods). No gameplay content surface.

## ctl   [anchors: create, aeronautics (2)]
- OK — connections sound. ctl already holds both target pillars: built through create:sequenced_assembly (Create anchor) and its entire purpose is train/contraption lighting (aeronautics anchor). No new weave needed and no existing connections to flag as rework.

## immersive_paintings   [anchors: decoration (1)]
- LEAVE — pure decorative-expression mod (4 items that are canvas items, no recipe types, no material to route). Dossier correctly rules out forced edges. Genuine single-surface decoration mod.

## lithostitched   [anchors: support/library (1)]
- LEAVE — worldgen data-driver library (0 blocks, 0 items, no recipe types). Shapes terrain/biomes for dependent mods; nothing in the recipe graph.

## fogoverrides   [anchors: support/QoL (1)]
- LEAVE — client fog-density/color config mod (0 blocks, 0 items, no recipe types). Cosmetic atmosphere tuning only.

## copycats   [anchors: create (1)]
- from: copycats blank shapes (slab/panel/slope…) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks are crafted from Create zinc and are a *skin* container — crushing them back gives zinc scrap, which is already the M-04 pattern for Create's own zinc blocks; adding it here is redundant with the base-game M-04 pass and adds no routing that doesn't already exist
- from: copycats:copycat_catwalk / copycat_beam | via: recipe (used as structural aeronautics decoration) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: copycat catwalks and beams are the obvious internal-structure dressing for ship hulls — requiring at least one copycat structural element in an Aeronautics hull/deck recipe makes ships look built rather than hollow, and roots a Create-zinc sink into the aeronautics build tier
- REWORK: dossier marks copycats as Create-anchored deco and says 2nd pillar would be forced. The aeronautics/M-23 link via structural decorating is genuinely coherent (catwalks on a ship is an "of course" moment) rather than forced — it advances the loop (Create zinc → ship interior). Upgrade from LEAVE to ACCEPT on the aeronautics link.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
- LEAVE — drop-merge entity behavior mod (0 blocks, 0 items, no recipe types). Generic performance/QoL utility; nothing mod-specific to route.

## gnkinetics   [anchors: create (1)]
- from: gnkinetics:worm_gear / planetary_gear | via: recipe (as high-ratio drivetrain component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: worm gears and planetary gears provide the high-torque, compact ratio-reduction that an airship's propeller shaft demands — a gnkinetics planetary gear as a required input in an Aeronautics propulsion recipe makes ship drives feel like real engineering, not just a Create shaft snapped on
- from: gnkinetics:industrial_gear / large_industrial_gear | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: industrial gears are a second flavour of the same M-24 worm/planetary accept above — two M-24 accepts on gnkinetics risks stacking the same connection twice; pick the most thematically apt (worm/planetary = high-ratio, correct for propulsion) and leave industrial gears as optional depth, not a second weave
- REWORK: existing Create anchor is its entire identity. The aeronautics/M-24 link (planetary/worm gear → propeller drivetrain) is the right 2nd pillar — mechanical, coherent, advances aeronautics build depth. Dossier said LEAVE but this is a strong M-24 candidate the dossier missed by framing it as "pure mechanism." Revise to ACCEPT.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — loading-screen tip display (0 blocks, 0 items, no recipe types). Pack authoring tool for onboarding text; no material or pillar surface.

== CHUNK COMPLETE ==
