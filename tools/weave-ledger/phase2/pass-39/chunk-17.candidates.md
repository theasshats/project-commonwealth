# Phase 2 candidates — chunk-17

## more_slabs_stairs_and_walls   [anchors: support/deco (1)]
- from: 847 slab/stair/wall cut variants | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create woodworker or stonemason automates bulk slab/stair production on a mechanical saw — the entire palette becomes a belt-fed product, not a hand-shaped one. Implementation is one wildcard saw recipe family (tag-routed per material), not 847 individual entries.
- from: stone/concrete-powder cut variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (deco recycle) is valid but only adds a lossy recycle edge — it doesn't meaningfully advance the loop and is a "plus" only if doing a wholesale deco-family crush pass. Not worth adding in isolation for this mod's cuts.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — pure client-side pause-screen UI button; zero items, blocks, methods, or materials to route through anything. No weave surface.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: galleon/fortress chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sunken ships carry cursed relics — seed a rare alchemical reagent (e.g. cursed sea-crystal, seabed chalk) into galleon loot tables so oceanic exploration feeds Occultism rituals or Ars Nouveau imbuement. Players must dive ruins to source the reagent, tying ocean danger to magic production.
- from: galleon/fortress chest loot | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the captain's strong-room in a galleon holds a salvaged navigation core (one-per-structure, rare) that is the boss-key input for a Create Aeronautics advanced navigation/control recipe — you can't build a ship's autopilot without raiding a sunken one first. Thematic "of course": you learn aeronautics navigation from recovered maritime instruments.
- from: galleon/fortress chest loot | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: galleons are dangerous PvPvE targets — a combat specialist clears them and sells the rare salvage (reagents, navigational parts) to crafters who can't brave the ocean. Seeds the combat-supply loop for nautical expeditions.
- from: galleon/fortress chest loot | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: seeding already-minted Numismatics coins into a loot chest is a passive coin faucet — contradicts the player-minted currency ruling. Mintable ore ingots could substitute, but that's just seeding vanilla ore, not a distinct weave. The M-15/M-02 seeds above are the real hooks.

