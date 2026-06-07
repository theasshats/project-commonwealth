# Phase 2 candidates — chunk-17 (context-fed)

## betterstrongholds   [anchors: survival (1)]


The existing rows converge tightly on three weaves: M-02 (magic reagent loot-seed), M-08 (coin loot-seed — conditioned on deep-room rarity), and M-34 (combat-specialist drops). The M-15 boss-key rows are consistently rejected because the stronghold has no boss entity. What's missing: the *pressure angle* — the stronghold as a *cost* the player pays (survival pressure) before they earn the loot — and a colony angle that no pass has named.

- NEW | from: betterstrongholds dungeon loot (deepest room/trap-room chests) | via: loot-seed | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a MineColonies ancienttome into the deepest stronghold vault — the scholar's library is where ancient colony records end up, so clearing the stronghold is an alternate (dangerous) path to colony research progress; knowledge gate feeds from danger-pressure rather than emerald-grinding

- NEW | from: betterstrongholds loot tables (library room chests) | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the stronghold is already a scholar/knowledge space (not a boss room) — seed a "ruined schematic fragment" there that, combined with Create parts, completes a locked mid-tier Create recipe; this isn't a boss-kill M-15 but a knowledge-discovery M-15 that passes the theme test: finding the blueprint in the archive is thematically exact, and it gates a Create recipe without demanding a boss that doesn't exist

CHALLENGE | from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-34 | verdict: REJECT | hook: M-34 is "combat specialist farms boss drops and trades them" — the stronghold has no boss; its danger is traps and mobs, not a boss encounter; the M-34 rows here conflate "dungeon danger" with "boss drop supply chain." The rarer loot-seed weaves (M-02 reagent, M-08 coin) are the correct economy anchor; M-34 should be cut from betterstrongholds since it mis-applies the motif (M-34 requires a boss-style encounter to create specialist vs. non-specialist division, which traps/rooms don't provide)

## createoreexcavation   [anchors: Create (1)]

Existing rows are dense and well-converged. The core accepted weaves (M-08 vein→coin, M-30 regional scarcity, M-05 drill-head gating, M-15 netherite-drill boss gate, M-03 ore-doubling, M-13 fluid-vein→fuel, M-28 colony unlock) cover the mod's main surfaces well. What's missing: the *magic-route vein* angle (route magic mod's ores through the vein table so a Create driller can supply a magic specialist) and a more careful power-tier note on the M-15 rows.

- NEW | from: createoreexcavation:vein (vein recipe table, pack-configured) | via: createoreexcavation:vein datapack entry seeding occultism silver / ars_nouveau-compatible crystal ore | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: adding occultism silver or a magic-mod crystal ore as a vein-table target means a Create driller in the right chunk supplies the magic specialist's bottleneck metal — a genuine cross-route dependency (Create drill → magic reagent chain) that neither route can shortcut alone

- NEW | from: createoreexcavation:vein_atlas (cartography output — records surveyed vein locations) | via: config/loot-seed (seed vein_atlas or vein_finder as an aeronautics-worthy scouting reward) | to: aeronautics | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a vein survey is a *service* — an airship pilot scouts chunk-veins across regions and sells vein_atlas maps to drilling operators who can't afford to fly; the logistics arm earns income from geographic knowledge, closing the aeronautics↔economy loop without requiring a direct recipe edge

CHALLENGE | from: createoreexcavation:extractor (fluid vein → aeronautics fuel) | via: createoreexcavation:extracting → tfmg:distillation | to: aeronautics | motif: M-13 | verdict: WEAK | hook: the existing M-13 accept rows are conditioned on "if a petroleum vein is configured" — but the dossier notes fluid vein outputs are pack-configured, and the reserved reagents table lists tfmg:diesel/gasoline as the designated aeronautics fuel (M-13 reserved); adding an infinite-reservoir path to that same fuel breaks the scarcity basis of M-13 (infinite-slow oil → no pressure on fuel supply). The M-32 byproduct framing (extractor → TFMG as refinery input) is stronger and doesn't undermine the reserved fuel reagent.



