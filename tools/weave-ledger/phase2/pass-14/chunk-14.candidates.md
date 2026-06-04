# Phase 2 candidates — chunk-14

## quark   [anchors: support (decoration/building/QoL) (1)]
- from: deco/building blocks (vertical slabs, andesite bricks, pillars, hedges) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: lossy deco-recycle of vanilla-tier stone/wood deco is busywork; Quark's deco palette is already a sanctioned support anchor and these blocks crush to vanilla raws anyway — no "of course" hook, just clutter on the recipe graph.
- from: crop/food storage_blocks (apple_crate, carrot/potato/beetroot/sugar_cane storage blocks under c:block/storage_blocks/*) | via: create:milling/compacting | to: Create/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crate of crops is a clean bulk-input — feeding a full apple/sugar_cane crate into a Create mill or using its storage_blocks tags as bulk economy trade units lets farm output flow into the spine without per-item handling.
- from: c:block/storage_blocks/* shared tags | via: tag reference (config/recipe surface) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: real but emergent — leave bulk-good pricing to the economy pillar; not an authored weave here, and overlaps the M-12 accept above.
REWORK: none authored yet (single support anchor). Decoration anchor stands on its own; the M-12 crate-as-bulk-input is the genuine 2nd-pillar bonus.

## create   [anchors: Create (1) — IS pillar #1]
- LEAVE — Create is the method library/hub the whole pack weaves INTO, not a recipient needing a 2nd pillar. Authoring edges that consume Create itself inverts the spine. (Aeronautics/trains add a logistics dimension but are treated as the Create spine.) No new links; no rework.

## puzzleslib   [anchors: support (library/API) (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, 0 tags, no recipes, loot=no). Pure loader-abstraction infra; no material surface to weave.

## supermartijn642corelib   [anchors: support (library/API) (1)]
- LEAVE — genuine zero-content technical library (0 blocks, 0 items, no recipes, loot=no). GUI/block/BE/packet scaffolding only; nothing to route.

## blueprint   [anchors: support (library/API) (1)]
- from: blueprint:template_chest (its one item) | via: any recipe | to: any pillar | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: a single vanilla-style util chest is too trivial to anchor a pillar; the 13 c:tags are framework scaffolding for Abnormals dependents, not material. Functionally a library.
- LEAVE — framework/API library; the lone template_chest is not enough content surface to justify a weave.

## fusion   [anchors: support (client/rendering library) (1)]
- LEAVE — genuine zero-content client rendering library (connected/scrolling textures for resource packs; 0 items/blocks, no recipes, loot=no). Purely visual; nothing to route.

## minecolonies   [anchors: survival, Create (2)]
- from: colony-produced food/luxury goods (apple_pie, baked_salmon, c:foods/* breads/soups/vegetables) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a self-running colony is a natural production engine — its surplus bread/pie/soup is the obvious sellable trade good, giving the settlement a 3rd-pillar economy outlet (surfaced for the 0.9 economy update, player-run currency).
- from: colony worker-request system (huge inbound surface) / quarry ore streams | via: occultism:spirit_trade or numismatics | to: economy/magic | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: the request system already pulls any pack item by design — weaving it again is redundant; the inbound surface is the integration, not a new edge.
- from: composter (minecolonies:composting) organics → compost | via: native composting method | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: stays inside the survival pillar; no cross-pillar gain.
REWORK: existing Create weave (M-05 quarries gated on andesite/brass casings + cogwheel/precision_mechanism, sceptergold stamp preserved) is sound — OK, connections sound. Deeper Create tech gated BEHIND colony research is the deliberate on-ramp, not to be re-cut. The M-09 economy outlet is the genuine missing 3rd pillar.

## immersive_paintings   [anchors: decoration/player-expression (support) (1)]
- from: painting/graffiti items (craft from vanilla mats) | via: any Create/magic recipe | to: Create/magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: pure client-side decorative-expression mod; paintings are image canvases with no material/fluid/essence surface. Forcing a "craft frames via Create" edge is busywork, not an "of course" hook, and clashes with the whimsical-flavor tone.
- LEAVE — decorative player-expression mod; no coherent 2nd-pillar material. Decoration is a sanctioned support anchor; do not force an edge.

## astikorcartsredux   [anchors: survival (agrarian field-work + hauling) (1)]
- from: metal-bearing implements (plow blade, reaper) | via: create:pressing (iron sheets/plates as inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the cutting/tilling implements (plow, reaper) are metal field tools — gating their blades on Create-pressed iron sheets ties the farm-labor tier to the tech spine, where the plain wood hand/supply carts stay cheap (depth scales: don't gate the basic cart, do gate the metal implement).
- from: bulk crop harvest (reaper output) | via: numismatics or farmersdelight processing | to: economy/Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the harvest is plain vanilla crops with no special tag — routing generic crops is the crop mods' job, not the cart's; no distinctive material to anchor.
REWORK: none authored. Survival anchor stands alone; the M-05 implement-gating is the optional 2nd pillar (light, single-input — not a deep chain on a low-tech tool).

## mowziesmobs   [anchors: survival (set-piece bosses + ambient combat) (1)]
- from: boss-drop artifacts (ice_crystal, wrought helm/axe metal, earthrend_gauntlet) | via: create:sequenced_assembly / item_application (boss drop as keystone) | to: Create | motif: M-15/M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: matches the pack's "complex Create tech unlocks via boss drops" north star — a Mowzie's artifact as the keystone input to a high-tier sequenced-assembly chain is exactly the DESIGN on-ramp; non-renewable drops keep it scarce. (each boss's signature drop is its reserved gate item.)
- from: boss artifacts (sol_visage, ice_crystal) | via: occultism:spirit_fire / ars_nouveau:imbuement | to: magic | motif: M-11/M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the mythic-tribal artifacts (sun mask, ice crystal) transmute cleanly into magic catalysts — sinking the same scarce drops into the magic spine as an alternative spend gives bosses a 2nd cross-pillar outlet without double-gating a single recipe.
- from: boss kills / rare drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: set-piece bosses are a natural bounty target — a board paying coin for a Wroughtnaut/Frostmaw kill threads combat into the economy (provisional M-14, player-run currency caveat).
- from: Grottol diamond/gem drops | via: create:crushing or numismatics | to: Create/economy | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: Grottol just emits vanilla diamonds; processing vanilla diamonds isn't a Mowzie-specific weave and adds nothing distinctive.
REWORK: none authored. Three real cross-pillar outlets (Create-keystone, magic-catalyst, economy-bounty) — author at most one or two per artifact to avoid over-gating; the Create M-15/M-06 keystone is the priority (matches DESIGN), magic is the strong second.

== CHUNK COMPLETE ==
