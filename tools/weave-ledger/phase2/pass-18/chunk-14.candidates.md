# Phase 2 candidates — chunk-14

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]

LEAVE — pure worldgen datapack (density-function terrain overhaul); registers zero items, blocks, loot, or recipe-types. No material surface to route through any method. Thematic adjacency to the "scarce, regional ores" foundation (bigger continents spread resources apart) is real but cannot be expressed as a recipe-graph edge — the terrain shapes are the connection, and that's already doing its job.

## kambrik   [anchors: library/API (1)]

LEAVE — Kotlin dev-framework library; no items, blocks, loot, or recipe-types. Pure code-plumbing for dependent Kotlin-based mods. Genuine zero-surface library.

## zombiemoon   [anchors: survival (1)]

Power-read: Mutants and Zombies adds 7 harder undead mob variants (Brute, Crawler, Spitter, Mutant Brute, etc.) as pure combat-difficulty content. The jar confirms 0 blocks / 0 items and loot=no — the mobs drop only vanilla rotten-flesh-style loot. No registered recipe-types and no unique reagent.

Candidate 1 (M-02 mob-drop reagent sink):
- from: zombiemoon vanilla-drop rotten flesh (no unique drop) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: clash
- verdict: REJECT | reason: The mod's dossier is explicit: "no unique reagent to weave" — no distinctive drop exists to give a second identity. Rotten flesh is a vanilla commodity already handled elsewhere; assigning a special spirit_fire route to zombiemoon's mobs would be purely arbitrary (which mob variant dropped this "special" flesh?) and the mod's horror-survival vibe has no magical adjacency. Forced edge.

Candidate 2 (M-14 bounty→economy):
- from: zombiemoon mob kills | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: A bounty board entry for killing Brutes/Crawlers/Spitters would be coherent thematically (harder mob = higher bounty reward), but bounty boards are a pack-wide mechanic applied across all hostile mobs — the connection here is not *specific* to zombiemoon and adds nothing that the generic bounty system doesn't already provide for any mob. Not a 2nd anchor for *this mod*; it's a global mechanic that happens to include it. No unique purchase.

Summary: No viable 2nd anchor exists. The mod is a pure combat-difficulty (survival-pressure) layer with no items/drops to route. LEAVE at 1 anchor.

## stylecolonies   [anchors: support/decoration palette — MineColonies styles (1)]

Power-read: stylecolonies ships only MineColonies blueprint packs (Frontier, Steampunk, High Magic, Antique, FairyTale, Underwater styles). Zero items, blocks, loot, or recipe-types. The Steampunk style references Create blocks at build time, which is an implicit tie to the Create production spine.

Candidate 1 (Create production tie — Steampunk style):
- from: stylecolonies:steampunk blueprints (require Create blocks as build materials) | via: MineColonies colony construction (block consumption, not a recipe-type) | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: The implicit Create-block consumption at colony-build time is a real gameplay connection (a colony player building Steampunk structures needs Create blocks, creating cross-player demand), but it composes no motif from M-01..M-24 — none of the motifs describe "blueprint-driven block consumption." This would need a new motif (Gate-0). The connection is real but uncodifiable with current vocabulary. Logging as no-motif reject for Gate-0 review.

Candidate 2 (economy anchor via MineColonies production route):
- from: stylecolonies style variety | via: player preference driving colony specialization | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Purely thematic / player-behavioral — style choice has no recipe-graph expression. No motif fits.

Summary: Zero recipe surface. The Steampunk→Create-block edge is real at build-time but has no motif. LEAVE at 1 anchor; flag the Steampunk-blueprint→Create-block consumption for Gate-0 motif consideration.

## kubejs_create   [anchors: support/modpack tooling (1)]

LEAVE — scripting bridge (KubeJS addon exposing Create's recipe-types to JS); no blocks, items, loot, or recipe-types of its own. It is the *tool* that authors the weaves other mods use — it cannot be a weave target itself. Genuine zero-surface support tool.

## resourcefulconfig   [anchors: support/config library (1)]

LEAVE — pure config framework library (cross-platform config definitions + in-game options screen). Zero items, blocks, loot, or recipe-types. Genuine zero-surface library.

## bookshelf   [anchors: support/library (1)]

LEAVE — broad modder utility library (Darkhax; codecs, registration, event scaffolding). Zero items, blocks, loot, or recipe-types. Genuine zero-surface library; the datapack "durability-damaging recipe" hook is developer tooling, not a player-facing connective method.

## controlling   [anchors: support/client UI (1)]

LEAVE — client-only keybindings-menu search/filter UI. Zero items, blocks, loot, or recipe-types. Genuine zero-surface client QoL utility.

## t_and_t   [anchors: survival (1)]

Power-read: Towns and Towers is a pure worldgen / structure mod — 50+ structures including 16 biome-specific village variants, conquerable outpost forts/towers, and ocean sail-ships. Jar: 0 blocks, 0 items; loot=yes (structures carry loot chests). The loot=yes flag means it has a real content surface: its chest loot tables and its village villager trades are edit-points for seeding pack-relevant goods.

Candidate 1 — loot-seed: coin/economy goods in structure chests (M-08/M-09/M-14):
- from: t_and_t structure loot tables (chests in forts, ships, outposts) | via: loot-seed (datapack edit adding numismatics coins + pack trade goods) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Clearing a conquerable pillager fort and finding the captain's chest stocked with coin feels immediately right — the structure now feeds the Numismatics economy loop instead of dead-ending in vanilla loot.

Candidate 2 — loot-seed: magic reagent drops in structures (M-02 / M-10):
- from: t_and_t dungeon/ship loot tables | via: loot-seed (seed ars_nouveau:source_gem or irons_spellbooks:arcane_essence into rare chests) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Exploring a riverside jungle outpost and finding an arcane shard tucked in the captain's chest; discovery rewards adventurers with a magic on-ramp, linking exploration (survival pressure) to the magic production route.

Candidate 3 — villager trade → economy (M-21 provisional):
- from: t_and_t biome village variants → their villager professions | via: villager trade → numismatics payout (M-21) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is explicitly provisional (maintainer leans no); surface only for review. Additionally the connection is not specific to Towns & Towers — it applies to any village mod. No unique purchase for t_and_t specifically.

Candidate 4 — loot-seed: boss-key progression items in hard structures (M-15):
- from: t_and_t conquerable fort / ship loot | via: loot-seed (seed a boss-key component into hard structures as an alternative find path) | to: create/magic | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: Boss-key drops (M-15) are reserved for actual boss encounters; seeding them into static loot tables breaks the "fight a boss to unlock" gating intent. The fort's chest is the wrong tier for a boss-locked gate item — it's repeatable world-gen loot, not a single-encounter drop. Scale mismatch.

REWORK check: t_and_t is at 1 anchor (survival). The dossier's own 2nd-anchor candidate (economy via villagers/Numismatics) is well-founded but written as "MED" without a specific delivery. The accepted loot-seed candidates above are the concrete delivery that makes the economy anchor real — loot-seed is the right mechanism.
OK — existing connection (survival) is sound. New economy anchor via loot-seed is the concrete delivery.




