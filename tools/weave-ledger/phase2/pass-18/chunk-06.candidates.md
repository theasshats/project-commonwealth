# Phase 2 candidates — chunk-06 (pass-18)

## deeperdarker   [anchors: survival (1)]

**Power-read:** deeperdarker is a mid-to-endgame mod — the Otherside dimension is gated behind a Warden
Heart (rare boss drop from one of vanilla's hardest encounters). Its soul/sculk reagents (soul_dust,
soul_crystal, sculk_bone, warden_carapace) are thus endgame-tier: earning them requires reaching and
surviving the Ancient City, killing the Warden, and then exploring the Otherside. Deep multi-step
integration is warranted for those materials. The gloomslate/sculk-stone block families are everyday deco
once you're in the Otherside, suitable for a light one-step connection.

**Existing inbound weaves review:** create:crushing and farmersdelight:cutting already inbound. These are
M-04-style (deco block recycle) and M-12-adjacent (cutting drops). **OK** for what they are, but they don't
give deeperdarker a 2nd anchor pillar — they feed back INTO Create/survival without anchoring magic or
economy.

- from: deeperdarker:soul_dust + deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul-fire consumes Otherside soul reagents to mint spirit essences — the eldritch underworld feeds the summoning web exactly as it should
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's Heart is infused at an arcane apparatus into a high-tier Ars source reagent — a boss-difficulty cost unlocks a flagship magic component
- from: deeperdarker:sculk_bone + deeperdarker:warden_carapace | via: occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Otherside mob drops transmuted through a pentacle ritual into djinni/afrit essence — exploration of the deep dark pays into the summoning pillar
- from: deeperdarker:gloomslate (block family) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate deco crushes back to gravel + XP — the sculk-stone aesthetic integrates cleanly as a lossy recycler (already partially wired)
- from: deeperdarker:soul_dust / soul_crystal | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: these materials are more naturally consumed as magic reagents (M-11/M-10 above); selling them as coin would short-circuit the scarcity that makes the magic route valuable — weak second leg; the magic anchor is the stronger 2nd-pillar choice

REWORK: The existing create:crushing inbound does give a Create touch, but it doesn't yet anchor deeperdarker to Create as a second pillar — it's a one-directional deco recycle. The spirit_fire and imbuement candidates above are the real 2nd-anchor move.

## terralith   [anchors: survival (1)]

**Power-read:** Pure data-pack worldgen overhaul — no items, no blocks, no recipe types, no loot tables
with modded drops (loot=yes but only vanilla loot placement). Its "power" is purely structural: it defines
the terrain canvas that everything else rides on. It cannot be routed through any method.

**Thematic note:** Its real weave is already indirect — Serene Seasons' seasonal pressure, biome-specific
mob spawns from other mods (Grimoire of Gaia's 75 biome-modifiers, rottencreatures biome spawns), and
regional ore scarcity all key off its biomes. This is an emergent connectivity, not a recipe edge.

- LEAVE — pure data-driven worldgen with no items, blocks, recipes, or modded loot drops; nothing to route through any method in the palette. Its role is the terrain canvas underpinning scarcity + exploration pressure, not a connectable content node.

## astikorcartsredux   [anchors: survival (1)]

**Power-read:** Horse-drawn carts and farm implements — a mid-early mod (craftable from wood/iron before
any automation). Items are strictly functional tools (carts, plows, reapers) with no drops or reagents.
No registered recipe types; no loot tables. Its gameplay value is manual agrarian throughput (early-game
bulk harvest before Create automation).

- from: astikorcartsredux:oak_plow / oak_reaper | via: create:item_application or crafting (Create iron sheet as a required component) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the metal plow blade and reaper cutter require Create-pressed iron sheets — the farm implement tier is gated on basic fabrication, tying early agrarian work to the tech spine
- from: astikorcartsredux:oak_supply_cart | via: aeronautics (supply/transfer cart as a ship-deck cargo unit) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the supply cart is a ground vehicle pulled by a horse — it doesn't meaningfully fit as an airship component (M-24 is mechanical drivetrain parts); forcing a cargo-node link would be arbitrary and tonally awkward (horse carts on airships)
- from: astikorcartsredux:* (all carts) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: carts are durable tools, not consumable goods — they're not a natural sell commodity; M-09 is for consumable luxury goods (wine, food). No coherent economy edge.

**Verdict:** One accepted weave (M-05, iron-sheet crafting gate) gives a light Create touch. The 2nd anchor is thin — the dossier's own assessment calls any forced edge contrived. The accepted candidate is the clean one; LEAVE the economy/aeronautics edges.

## xaeroworldmap   [anchors: support (1)]

**Power-read:** Pure client-side map UI — zero server-side effect, no items, no blocks, no recipe types,
no loot. Invisible infrastructure.

- LEAVE — genuine zero-content client map mod; no material surface to route through any method. Support role only.

## betterdungeons   [anchors: survival (1)]

**Power-read:** Structure/loot mod — no items or blocks of its own; its only data hook is its loot tables
(loot=yes). Dungeons are a mid-game exploration encounter (harder than vanilla dungeons, pre-boss tier).
The briefing is explicit: do NOT LEAVE a loot-bearing structure mod just because it has no recipes.

- from: betterdungeons loot tables | via: loot-seed (datapack edit — add bountiful decree targeting these dungeons) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Bountiful boards issue Catacombs/Undead Fortress clear-bounties paying numismatics coin — combat pressure converts into currency (combat→economy loop closed)
- from: betterdungeons loot tables | via: loot-seed (seed Ars/Occultism reagent drops into dungeon chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: finding a djinni-binding tome or source gem fragment in a Catacomb chest gates magic progression behind exploration danger — dungeon-clear pressure feeds the magic web
- from: betterdungeons loot tables | via: loot-seed (seed numismatics coin drops) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: rare Undead Fortress chests contain a few numismatics sprockets — the first coins many players see come from risking these dungeons, priming the economy early

REWORK: No existing weave connections — survival-only anchor is the current state. All three accepted loot-seeds push toward either economy or magic as a 2nd anchor.

## entity_model_features   [anchors: support (1)]

**Power-read:** Client rendering mod — no items, no blocks, no recipe types, no loot. Pure model-override
engine for OptiFine CEM format.

- LEAVE — genuine zero-content client rendering support mod; no material surface to route through any method.

## betteroceanmonuments   [anchors: survival (1)]

**Power-read:** Structure overhaul — no new items/blocks; only loot tables (loot=yes). Ocean monuments
are a mid-game aquatic encounter (Elder Guardian, prismarine grind). The dossier's own assessment says
"LEAVE: no registry items" — but the briefing overrides: loot-bearing structure mods are NOT left.

**Re-evaluation:** The dossier writer pre-concluded LEAVE, but the briefing says a loot-seed IS a real
candidate for structure/dungeon mods. Let me apply that rule.

- from: betteroceanmonuments loot tables | via: loot-seed (seed numismatics coin drops into monument chests) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: conquering the monument's new multi-floor layout pays out in coin — aquatic combat becomes an economy on-ramp
- from: betteroceanmonuments loot tables | via: loot-seed (seed Ars source gem / Occultism reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a hidden chamber in the expanded monument holds a rare arcane fragment — underwater exploration feeds the magic progression

REWORK: The dossier's existing LEAVE recommendation should be revised to the loot-seed candidates above — survival-only was correct before the briefing's structure-mod rule was considered.

