# Phase 2 candidates — chunk-07 (context-fed)

## create_pattern_schematics   [anchors: create (1)]

OK — existing rows sufficient.

## puzzleslib   [anchors: support/library (1)]

LEAVE — pure code library; 0 blocks, 0 items, no gameplay surface. No weave possible.

## mcwstairs   [anchors: support/decoration (1)]

The existing row landscape is split: stone-family M-04 (crush to gravel + XP nugget) has a strong multi-pass ACCEPT plurality, wooden-family M-04 / M-12 have consistent REJECTs. The contested ground is clear. Let me check whether any dimension was missed.

A nuance all existing rows miss: the dossier notes `loot=yes`. That means mcwstairs has loot tables — possibly structure loot (colony building interiors, dungeon chests). The briefing says not to LEAVE a loot-bearing mod without checking loot-seed first. However: the loot here is almost certainly the *drop table* of placed blocks (blocks drop themselves), not a chest loot table seeding. mcwstairs is a decoration mod with no structure content of its own, so `loot=yes` reflects self-drop on mining, not a dungeon chest population. No loot-seed angle applies.

The M-04 stone-crush angle is already thoroughly mapped. One gap: could stone railing/balcony variants feed **create:sandpaper_polishing** as an *inbound* step — i.e., require polished stone as a recipe input — turning the builder into a consumer of a Create-processed intermediate? That's an M-29 cross-route dependency angle (builder needs Create-polished stone for fancy railing variants). The mcwwindows ACCEPT for `sandpaper_polishing` as input was already flagged. Does the same apply here?

- NEW | from: mcwstairs:andesite_railing / mcwstairs:andesite_terrace_stairs (polished-stone family) | via: recipe (require create:sandpaper_polishing output — polished andesite intermediate — as crafting input for the polished-stone stair family) | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: fancy andesite railings need machine-polished stone, not hand-cut cobble — the builder buys lapped slabs from the Create player

CHALLENGE | from: mcwstairs:*_stone/*_brick/*_blackstone variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: the 15-vs-17 vote split shows genuine contention; the dossier itself flags this as WEAK and only valid in a "wholesale deco-family pass" — if that pass runs, it belongs to a combined mcwstairs+mcwdoors+mcwwindows stone-deco sweep, not to mcwstairs alone. Proposing it for mcwstairs in isolation over-represents the same M-04 edge already captured for the whole Macaw's family.

