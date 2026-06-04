# Phase 2 candidates — chunk-28

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — zero-content behavior mod: pure server-side sleep-quorum tweak, no items/blocks/loot, nothing to route through any method.

## jade   [anchors: client-only UI / support (1)]
- LEAVE — zero-content client overlay: renders a HUD tooltip for targeted blocks/entities; no items, no loot, no recipe surface whatsoever. A pure display library.

## justenoughbreeding   [anchors: support / QoL (1)]
- LEAVE — zero-content JEI plugin: shows mob breeding requirements in the recipe viewer; no items/blocks/loot tables, no material surface.

## netmusic   [anchors: support / flavor (1)]
- from: netmusic:music_cd (craftable NBT audio disc) | via: recipe (crafting) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: The CD's value is purely cosmetic audio; treating it as a "luxury good" mintable into coin is contrived — the player earns nothing tangible from it, and CDs are not scarce or labour-intensive beyond the NBT write. Tone clash: a streaming jukebox in a coin-economy framing feels out of place. The existing TLM altar weave is its natural and only hook.
- LEAVE — the one real content surface (music_cd) already routes through the TLM altar (existing weave); an economy edge would be arbitrary.

## smartbrainlib   [anchors: support / library (1)]
- LEAVE — genuine zero-surface library: pure AI framework code, no items/blocks/loot, consumed only as a transitive dependency of mob mods.

## copperagebackport   [anchors: survival (1)]
- from: copper deco/tool/armor blocks (oxidized copper bars, chain, chest, lantern, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushing an oxidized copper lantern back to copper nuggets + an XP nugget is a natural recycling line — copper is Create's primary early material and the whole expanded copper palette should fold into it.
- from: minecraft:copper_chest / copper deco set | via: create:pressing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 is for ore → crushed ore doubling; pressing copper blocks into sheets is already vanilla Create behavior on copper ingots — there is no new connection here that isn't already in the base mod. Redundant.
- from: copper tools/armor (copper_sword, copper_pickaxe, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Worn-out copper gear crushes to copper nuggets (lossy) — same recycle pattern as any metal deco; keeps copper tools from being dead-end items.
- from: minecraft:copper_golem_statue | via: trade / economy | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no). The Copper Golem's logistics function is survival/Create-adjacent, not a natural coin-economy hook.
- REWORK: dossier 2nd-pillar candidate "aeronautics via Copper Golem logistics" is thematically very weak — a slow item-sorting mob does not meaningfully weave into aeronautics. Drop that candidate.
- OK — the M-04 crushing route is the correct and sufficient 2nd pillar; delivery = recipe via create:crushing.

## mousetweaks   [anchors: support / client QoL (1)]
- LEAVE — zero-content client input-handling mod: no items/blocks/loot, pure GUI drag-and-scroll mechanics. Nothing to route.

## dungeons_arise_seven_seas   [anchors: survival / ocean exploration (1)]
- from: galleon / fortress loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Boardable galleons and floating sea-fortresses are exactly the high-risk nautical sites where a chest of coin feels earned — seeding Numismatics coin (cog/spur) into the treasure chests gives combat exploration a direct economy payoff and makes the ocean a coin-supply node.
- from: galleon / fortress loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: The boss/elite that guards a galleon is a natural bounty target; seeding a bounty-eligible drop (or a Bountiful board target) into the structure ties naval combat into the bounty→economy loop.
- from: sunken ruins / galleon loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ancient sea-ruins plausibly contain arcane reagents — seeding a mid-tier Ars Nouveau or Occultism reagent (e.g. a scroll, a ritual ingredient) into sunken chests makes ocean exploration serve the magic pillar. Tone: nautical ruin + arcane artifact is a classic pairing.
- from: galleon loot | via: loot-seed | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no accepted motif for "loot seeds aeronautics parts"; the aeronautics seam motifs (M-23/M-24) are about crafting construction materials, not loot-drop acquisition. Would require a new motif.

## simplehats   [anchors: support / cosmetic (1)]
- from: simplehats:* (rare hats) | via: loot-seed | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A rare hat is a vanity luxury — seeding 1–2 high-tier hats into boss or dungeon loot tables, or pricing them in a Numismatics shop, gives the coin economy a cosmetic vanity sink. Players trade coin for a hat they want; a cosmetic economy layer is natural for a friend-group pack.
- from: simplehats:* (hats) | via: recipe (simplehats:custom_hatscraps) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: The scrap→bag recycling system is already self-contained within simplehats; giving it an external economy link via coin would require adding a Numismatics sell recipe that has no in-mod backing. The loot-seed / trade route is the correct delivery (config or loot table edit, not a KubeJS recipe).
- from: simplehats grab-bags | via: trade (M-21 villager) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional / leans no. Not worth surfacing here when the loot-seed M-09 path is already cleaner.

## midnightlib   [anchors: support / library (1)]
- LEAVE — genuine zero-surface config library: provides annotation-based config + ModMenu screens for dependent mods; no items/blocks/loot. Nothing to route.

== CHUNK COMPLETE ==

