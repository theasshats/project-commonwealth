# Phase 2 candidates — chunk-04

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the beast-claw of a South-American cryptid burns in spirit-fire into a raw demonic essence — thematically a natural ritual ingredient
- from: brazil_legends:big_tongue | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: grotesque trickster-flesh imbued for a minor nature/chaos source gem — mob drop earns a reagent role
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: preserved folkloric amber imbued as an attunement catalyst stepping stone — earthy enough to slot into the arcane infusion web
- from: brazil_legends:amber_shard (as "sellable luxury") | via: numismatics vendor | to: economy | motif: M-09 (RETIRED) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — bare sell link is the ambient endpoint, not a weave; no demand-gating mechanism present
- from: brazil_legends:bottle_with_saci | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the mischievous trickster spirit bottled and then ritually released/consumed as a summoning ingredient — thematically coherent with occultism's spirit mechanics; power is appropriate as the signature creature capture

## numismatics   [anchors: economy, Create (2)]
- OK — connections sound. Numismatics IS the economy hub by design; it is the *destination* for M-08 (player-minted coin) weaves from other mods. No new outgoing weave is needed and none should be forced. The dossier correctly notes the direction is inbound.
- REWORK: dossier's "2nd-anchor candidate" mentions M-09 (luxury-good→coin) — M-09 is RETIRED; that line should be scrubbed from the dossier. No impact on the module's function, but the motif citation is stale.

## jeresources   [anchors: client-only UI support (1)]
- LEAVE — zero items/blocks/methods; pure JEI display addon (mob drops, worldgen graphs). No material surface to route through any method. Support role only.

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows:*_parapet / *_arrow_slit (stone variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a builder who over-buys stone arrow-slits can crush the surplus back to gravel/raw — the standard deco-recycle seam; lossy and light as required
- from: mcwwindows:*_mosaic_glass (colored) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushing yields sand/glass-pane shards at best — not meaningful recycle and Create has no standard glass-crush output that makes thematic sense here; stone/brick variants are the coherent M-04 surface, not glass

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the enhanced stronghold's hidden rooms and boss chests are the right danger tier for seeding Ars/Occultism magic reagents — exploration of the re-designed stronghold earns magic-progression keys, not just vanilla loot
- from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: combat specialists clear the stronghold and carry out rare goods that non-combat players need — the combat-route supply loop; seeds a tradeable rare (boss-tier materials, a coin cache) into the deepest chests
- from: betterstrongholds rooms | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: one hidden stronghold room seeds a Create boss-key component (a blueprint, a rare alloy fragment) that gates a deep tech recipe — makes the stronghold a mandatory pilgrimage for Create endgame, not just a portal room

## fxntstorage   [anchors: Create, survival (2)]
- OK — connections sound. Already woven via create:mechanical_crafting (Create-tier material ladder); survival QoL role is its second anchor. The flight-upgrade aeronautics tie would be nominal — a worn gadget, not a wireable resource — correctly left by the dossier.
- REWORK: dossier's 2nd-anchor candidates section is empty ("already at 2 pillars — no forced second weave needed"), which is fine for the current state. No bad existing connections to flag.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs:*_bulk_stairs / *_balcony (stone/brick/blackstone variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone bulk-stairs crushed back to cobble/gravel + xp nugget — the same lossy deco-recycle the dossier already identifies; stone/brick is the coherent surface
- from: mcwstairs:*_railing (wood variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crushing is not a coherent Create recycle (wood doesn't yield gravel/raw; planks are not standard M-04 targets); only stone/brick/blackstone families earn the M-04 seam cleanly

## libipn   [anchors: support/library (1)]
- LEAVE — pure GUI/config library for IPN; zero items, zero methods, zero content surface. Nothing to route.

## terralith   [anchors: survival (1)]
- from: terralith biomes | via: config/biome-tag tie | to: survival (scarcity foundation) | motif: no-motif | power: n/a | tone: ok | verdict: REJECT | reason: no-motif — Terralith's real contribution is the terrain that GTMOGS ore-gen keys off of (regional scarcity M-30 foundation), but Terralith itself has no items/methods to make a recipe weave from; it is the platform, not the node. Its indirect weave is already implicit in the scarcity layer.
- LEAVE — data-only worldgen; 0 items, 0 registered methods. Its value is providing the biome canvas that regional ore-gen (M-30) and other mods' biome-modifier spawns ride on. No direct recipe or loot-seed surface of its own.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Catacombs / Undead Fortresses are thematically perfect sources for Occultism/Ars undead-flavored reagents — drops a spirit-tier reagent into dungeon chests so magic players have a reason to delve
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: combat specialists clear the Catacombs / Spider Caves and bring back rare goods (a scarce crafting material, a sealed boss-chest item) for trade — seeding a high-value tradeable into the deepest chest tier closes the combat-supply loop
- from: betterdungeons Spider Cave loot | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: boss-key unlock (M-15) requires a boss drop acting as a gate ingredient — spider/undead dungeon chests are ordinary loot, not a singular boss drop; forcing M-15 here would dilute the motif; M-34 + M-02 are the coherent seams

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — pure movement-feel tweak (climbing physics); zero items, zero methods, zero content surface. Nothing to route.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/ballistics API; zero items, zero methods. Serves Create Big Cannons indirectly. Nothing to route.

## moonlight   [anchors: support/library (1)]
- LEAVE — shared API library for MehVahdJukaar mods; 0 player-facing items (internal spawn_box/placeable_item are helpers), 0 registered recipe-types. Nothing to weave.

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — client-side map UI; zero items, zero methods. Nothing to route.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an undead-eye can be ritually transmuted from spirit/undead-aligned occult material — gives a stuck player a costly craft path that fits perfectly within occultism's undead-spirit domain; keeps End access exploration-first but unblockable
- from: endrem:nether_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbue a nether-aligned arcane reagent + nether materials into a nether_eye — a mid-tier infusion pathway that ties End-portal gating to the magic web without trivializing exploration (only one or two eyes get a craft path)
- from: endrem eyes (multiple) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: red-team fails — sequenced assembly for an Eye of Ender replacement undercuts the exploration intent that is the entire design of the mod; a mechanical factory route to portal access conflicts too directly with "exploration gates the End"; keep craft routes in magic only, where cost is ritual/high-reagent rather than industrial automation
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the "magical" eye is thematically the one that belongs in an arcane apparatus — enchanting apparatus consumes source gems + an arcane reagent to produce it; makes one eye the Ars Nouveau "tax" on End access

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute | via: (no foreign method available) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — aeronautics/logistics connection is nominal (it transports items, ships also transport items, but there is no recipe or method join available; it is a Create logistics block, not a ship component). Dossier correctly leaves it.
- LEAVE — single Create logistics block (zinc-based chute); no foreign method to route through; aeronautics tie is nominal only.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — pure config/behavior mod (structure spacing multiplier); zero items, zero methods. Nothing to weave.

## sablecollisiondamage   [anchors: support/aeronautics-physics (1)]
- LEAVE — collision-damage behavior addon for Sable; zero items, zero methods. Its role is giving aeronautics PvPvE weight, which it fulfills by existing.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust from Otherside mobs burns in spirit-fire into a raw spirit essence — the most direct soul→occult pipeline; thematically the strongest pair in the pack
- from: deeperdarker:soul_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a crystallized soul structure imbued into a source-infused focus or gem — gives Ars a high-tier reagent sourced from the Otherside; scales well (crystals are scarce, not everyday)
- from: deeperdarker:heart_of_the_deep (Warden drop) | via: occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's heart is the pack's best endgame mob-drop sink — an occultism ritual consuming it unlocks a high-tier summoning or transmutation, keeping the Warden as a meaningful production gate even after the Otherside portal is open
- from: deeperdarker:gloomslate / sculk_stone blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Otherside block families crush back to gravel + xp nugget — the standard lossy deco-recycle; already partly inbound per the dossier (create:crushing listed in made-by methods); this completes the symmetric outbound entry
- from: deeperdarker:warden_carapace | via: create:mechanical_crafting | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's armored shell is assembled in a mechanical crafting grid alongside Create structural plates to form an endgame armor/hull component — gating high-tier Create armor behind the Otherside boss
- from: deeperdarker soul materials (sellable) | via: numismatics vendor | to: economy | motif: M-09 (RETIRED) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired — bare sell link; no demand-gating
- from: deeperdarker:soul_crystal | via: create:haunting | to: Create↔magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: haunting (Create's soul-fire process) applied to a crystal blank transmutes it into a soul_crystal equivalent — a Create→Otherside bridge that routes soul production through the Create spine rather than pure exploration loot, giving a secondary supply path for the soul-crystal reagent at appropriate cost

## chefsdelight   [anchors: survival, economy (2)]
- REWORK: dossier's "2nd-anchor deepening" proposes M-09 (luxury-good→coin) via numismatics for villager trades — M-09 is RETIRED. The correct framing for the Cook/Chef trade economy is M-26 (consumption sink: cooked meals are spent on food pressure, creating continuous demand) or M-33 (service-for-hire: the Cook/Chef villager performs cooking-as-a-service, and players trade ingredients to receive meals — the labor axis). The M-09 citation should be replaced.
- from: chefsdelight Cook/Chef villagers | via: config trade redirect | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cook/Chef villager performs cooking labor — players bring raw ingredients and pay in numismatics coin, getting back a cooked feast; a player-run service (labor-for-coin) rather than a static sell point; KubeJS or config redirect from emerald trades to coin payment
- from: chefsdelight meal output | via: farmersdelight:cooking (already inbound) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the feast meals produced by the Chef are *spent* as food (consumption sink) — saturation from high-tier feasts is the demand that drives the FD→chefsdelight production chain; demand never zeroes as long as players eat
- from: chefsdelight Cook/Chef trades | via: loot-seed / config | to: Create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif and tone clash — wiring the rustic village cook to a Create processing chain has no thematic coherence; the mod's economy anchor is through food and labor, not the industrial spine

== CHUNK COMPLETE ==
