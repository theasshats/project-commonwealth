# Phase 2 candidates — chunk-10 (context-fed)

## betterdungeons   [anchors: survival (1)]
- CHALLENGE | from: betterdungeons loot tables (deepest Catacomb/Undead Fortress chest) | via: loot-seed | to: create | motif: M-15 | verdict: REJECT | hook: M-15 is defined as a *boss drop* gating a complex Create recipe — betterdungeons has spawner rooms but no boss guardian; seeding a "boss-key" into a generic chest conflates dungeon chest loot with a boss kill reward. The delivery is structurally wrong: the player can bypass spawners entirely and open the chest. If a key-fragment is wanted here, it belongs under M-02 (magic reagent found exploring) or M-34 (combat-route drop seeded onto the spawner's loot table directly), not M-15. The ~5 ACCEPT votes on this row do not fix the motif mismatch.
- NEW | from: betterdungeons Spider Cave / Catacombs / Undead Fortress (structure-type-differentiated loot) | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: seed *biome/structure-type-distinct* scarce reagents — Occultism silver fragment in Catacombs (undead biome), ars_nouveau:wilden_spike in Spider Cave (jungle/forest) — so the structure-type you explore determines which magic reagent you find; exploration of different structure types becomes regionally specialized, feeding M-30's regional-scarcity gate rather than generic dungeon loot.

## trek-b0.6.1.1   [anchors: survival (1)]
- CHALLENGE | from: trek loot (ships, fortresses) | via: loot-seed | to: aeronautics | motif: M-34 | verdict: REJECT | hook: the 1-ACCEPT aeronautics/M-34 row (seed Fortron cells/fuel containers into pirate ships) is thematically appealing but structurally weak — M-34 requires a *combat specialist* who farms danger and trades to non-combat players; Trek structures are open-world chests requiring no sustained combat. Seeding Aeronautics parts in ship chests makes them common finds, not a combat-route exclusive. If aeronautics-relevant parts belong in trek loot at all, they should be framed as M-08 (coin→mint chain, exploration pays) not M-34 (combat-supply from danger farming).
- NEW | from: trek ocean / ship structure loot tables | via: loot-seed | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: seed heavy bulk commodities (iron ingot stacks, coal crates, Numismatics coin blanks) into Trek shipwreck and island fort holds — the narrative hook is salvaged cargo that's worth moving in bulk, making the aeronautics/train logistics arm the natural way to haul it back; even a modest seed creates a recurring pull for the logistics route that M-31 formalizes.

## simplehats   [anchors: support (1)]
- CHALLENGE | from: simplehats grab-bags (mob drops from hostile mobs) | via: loot-seed (boss loot tables) | to: survival | motif: M-34 | verdict: REJECT-partial | hook: the 6-vote M-34 ACCEPT row (seed rare hat bags into boss loot tables) is sound in direction but the dossier already confirms grab-bags drop off *all* hostile mobs by default — which means the ambient version of this already exists. The *incremental* value of the proposed weave is only the boss-table upgrade (rarer/themed hats from high-tier kills), not a new pillar link. The row should be narrowed to explicitly target *boss-exclusive* hat variants that do not appear on common mob tables; otherwise it's just formalizing the default behavior.
- NEW | from: simplehats rare hat variants (boss-exclusive, not on common mob tables) | via: loot-seed into Cataclysm / Mowzie's boss loot tables only | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Ignis boss drops a flame-crown hat variant obtainable nowhere else — combat specialist sells duplicates, hat collector buys them; the cosmetic scarcity is real because the only path is the boss kill, not grinding common mobs.

## structurize   [anchors: support/library (1)]
- LEAVE — required MineColonies build engine; no content of its own; its weave is MineColonies' weave.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]
- LEAVE — pure server sleep-quorum behavior; zero items, zero methods, zero content surface.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — worldgen library/API for Moog's structure mods; no standalone content.

## emojitype   [anchors: support/client-QoL (1)]
- LEAVE — client chat input helper; no items, no game-content surface.

## mousetweaks   [anchors: support/client-QoL (1)]
- LEAVE — inventory input-handling tweak; no content.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI breeding-info plugin; informational only, no material flows.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — animation/entity API; no player-facing content.

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — client color-blend renderer; no content.

## inventoryprofilesnext   [anchors: support/client-QoL (1)]
- LEAVE — inventory UI behavior; no items, no content surface. The single existing REJECT row (aeronautics/no-motif) correctly identifies no coherent link.

## corgilib   [anchors: support/library (1)]
- LEAVE — loot/worldgen helper library; no content.

