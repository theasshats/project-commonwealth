# Phase 2 candidates — chunk-18

## occultengineering   [anchors: Create, magic (2)]

Existing connections are sound — this mod IS the Create↔Occultism bridge by construction; it pulls from `create:*` methods and feeds into `occultism:ritual/spirit_fire`. Reviewing for a potential 3rd pillar and checking existing connections.

REWORK: OK — connections sound. The inbound `create:compacting/filling/haunting/mixing/pressing/item_application` and `occultism:ritual/spirit_fire` are exactly what you'd expect; nothing arbitrary.

New cross-pillar candidates:

- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: recipe → create:crushing then numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is a genuine occult alloy — running it through Create's crusher and minting coin from the dust makes the occult-automation line double as a currency feedstock, and fits the scarcity-driven economy; the dossier already flagged this candidate.

- from: occultengineering:spirit_solution (reserved reagent) | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is the reserved occult intermediate (reagent-ownership table); using it as a spirit_trade commodity risks double-spend and bleeds its role as the bridging reagent. Better to leave it as infrastructure.

- from: occultengineering:phlogiport (wireless logistics block) | via: minecolonies colony supply unlock | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: phlogiport is a logistics infrastructure piece, not a boss drop; M-15 requires a boss-key drop as gate item. Tone mismatch — forcing it as a progression gate is arbitrary.

## solonion   [anchors: survival (1)]

- from: solonion:golden_lunchbox | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the golden lunchbox is the premium auto-diversity container; gating it behind a mechanical crafting step (a Create-machined housing component) makes the best food-management tool a tech reward — players feel the crafting payoff. Depth is one light step (mid-tier item), not a deep chain, so guardrail respected.

- from: solonion:lunchbox | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the basic lunchbox should stay cheap/vanilla-craftable; gating everyday carry items behind Create violates the "never gate basic components behind complex recipes" guardrail. Reserve M-05 depth for the golden tier only.

- from: solonion:food diversity metric (milestone buffs) | via: config tie to Serene Seasons crops (seasonal food requirement feeds diversity) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: solonion consumes no items; the config link is entirely behavioral (seasonal crops widen the food pool, increasing diversity score) but produces no routable material join key and cannot be authored as a recipe/loot-seed. Interesting ambient synergy but not a Phase-3 deliverable action.

## curios   [anchors: support/library (1)]

LEAVE — genuine zero-content API library: 0 blocks, 0 items, loot=no. Provides accessory slot framework; the weave value is in the mods whose rings/amulets plug into it (Ars Nouveau, Iron's Spellbooks), not in curios itself. Nothing to route.

## midnightthoughts   [anchors: survival (1)]

LEAVE — pure behavior mod: 0 blocks, 0 items, loot=no. The well-rested buff system drives no material join key; no recipe, loot-seed, or trade delivery is coherent here. Confirmed zero content surface.

## mcwroofs   [anchors: support/decoration (1)]

- from: mcwroofs stone/brick/terracotta roof blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone and brick roof variants crush back to gravel/dust (lossy, not a round-trip) — standard M-04 deco-recycles-through-Create treatment; the 600-block catalogue makes a blanket tag-based crush rule covering all stone-family variants practical as a single datapack entry rather than 600 individual recipes. Wood variants are excluded (Create doesn't crush planks to wood; that would be incoherent). Scoped to stone/brick/terracotta/concrete roof variants only.

- from: mcwroofs wood roof blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing wood planks to "raw material + xp nugget" has no coherent Create analogue (crushing planks back to logs is not how Create works). Stone/brick/terracotta is coherent; wood is not. Exclude wood variants from M-04 sweep.

## libipn   [anchors: support/library (1)]

LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. GUI/config/logging API for Inventory Profiles Next; nothing to route.

## trashcans   [anchors: support/automation QoL (1)]

- from: trashcans:item_trash_can / ultimate_trash_can | via: recipe gating behind Create-processed iron | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: a trash can is fundamentally anti-economy and anti-scarcity — in a scarcity-driven pack, making it *harder* to void materials is a balance lever, but gating it behind Create doesn't add a pillar connection in any meaningful design sense. The dossier explicitly notes the tension with scarcity; adding a Create gate doesn't resolve that tension, it just makes a deletion tool more expensive. Not a coherent weave.

- from: trashcans (4 items, loot=yes) | via: loot-seed | to: any pillar | motif: various | power: everyday | tone: clash | verdict: REJECT | reason: loot-table seeding of a void/deletion utility block into dungeons/structures would be incoherent — finding a trash can as dungeon loot has no narrative logic and adds no cross-pillar meaning. The loot=yes flag reflects that these are craftable items, not that they belong in loot tables.

LEAVE — support role. The anti-scarcity nature of void sinks means no weave is coherent here; it's automation QoL infrastructure, not a pillar contributor. The balance note stands: consider gating or config-limiting void throughput if byproduct economy becomes trivial.

## irons_lib   [anchors: library/support (1)]

LEAVE — near-library: 4 blocks (transmog table, player statue × 2 namespaces), 0 material c:tags, loot=yes (jar artefact, not dungeon drops). The transmog table and player statue are cosmetic blocks with no routable material. The loot=yes flag is a jar artefact, not actual dungeon content. Nothing coherent to weave.

## resourcefullib   [anchors: support/library (1)]

LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Cross-platform utility/API layer; nothing to route.

## better_climbing   [anchors: support/QoL (1)]

LEAVE — genuine zero-content behavior mod: 0 blocks, 0 items, loot=no. Movement-physics tweak only; no material join key exists.

== CHUNK COMPLETE ==

