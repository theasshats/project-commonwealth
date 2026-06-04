# Phase 2 candidates — chunk-07

## appleskin   [anchors: support (1)]
- LEAVE — pure HUD/display layer; 0 items, 0 blocks, no loot, no recipe types. Nothing to route through any method. Genuine zero-content surface.

## zeta   [anchors: support (1)]
- LEAVE — pure code library / module framework (Quark dependency). 0 items, 0 blocks, no loot; 1 biome-modifier is scaffolding, not player content. Genuine zero-content surface.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice comms infrastructure; 0 items, 0 blocks, no loot, no recipe types. No material surface to weave through.

## moblassos   [anchors: survival (1)]
- from: moblassos:golden_lasso / emerald_lasso craft | via: recipe (create:mechanical_crafting) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 requires a mod's own machine to be gated on Create parts as inputs. Moblassos has no machine — just craftable tools. Routing lasso crafts through create:mechanical_crafting would be a pure recipe tax with no thematic hook ("you need a mechanical crafter to make a leather rope lasso"). Red-team wins: the lasso is low-tech livestock-wrangling gear; demanding Create precision is a tone clash.
- from: moblassos:emerald_lasso | via: trade (villager/wandering) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no). Also, the lasso is a player-crafted tool with no economy hook beyond "you paid emeralds to craft it." Adding a trade seam here has no resonance.
- from: moblassos:contract item | via: recipe | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: moblassos:contract appears to be a holding item, not a trade-currency item. No motif fits; no-motif → reject-for-review.
- LEAVE — 13 items, no loot, no blocks, no recipe types; its value is pure mob-transport logistics (utility synergy with aeronautics/MineColonies). There is no material flow to route through a method. Confirmed leave: no coherent 2nd-pillar recipe/loot/config edge survives red-team.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut (c:foods/fruit) | via: recipe (create:milling → coconut milk/oil intermediate) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create mill grinds the coconut into coconut flour/oil — a tropical feedstock that feeds farmersdelight/extradelight cooking chains; the processing chain naturally bridges beach-biome foraging to the Create industrial spine
- from: ecologics:coconut (processed into coconut oil/cream) | via: recipe (extradelight:juicer or farmersdelight:cutting) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical coconut products are a niche luxury food export; players in beach biomes can sell processed coconut goods (coconut milk, oil, cream) as sellable trade goods via Numismatics — regional scarcity makes the beach biome economically relevant
- from: ecologics:coconut_slice (clears all effects on eat — milk-like) | via: recipe (ars_nouveau:imbuement or occultism:ritual) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fruit that already cleanses potion effects belongs in an alchemist's toolkit — imbuement of a coconut slice into a purification catalyst or reagent is thematically obvious for a magic system built around essence infusion. Power is everyday so the infusion step must be a single light step, not a deep chain.
- from: ecologics:azalea_flower | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: azalea flowers are already used in vanilla/Create contexts, and there's no unique magical property to root the infusion in. Coconut_slice's effect-clearing is the coherent magic hook; the azalea flower is just a generic floral item — the pairing feels arbitrary compared to the coconut. Reject in favor of keeping the coconut/cleanse hook focused.
- from: ecologics:coconut woodset (logs/planks) | via: recipe (create:milling) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as weak — vanilla-style woods routing through create:milling yields nothing players don't already get from any wood. The coconut fruit/processing chain (M-12 above) is the coherent Create hook; redundantly also connecting the woodset as M-04 dilutes the focused edge without adding a player-legible story.

## mffs   [anchors: Create, survival (2)]
REWORK: OK — connections are gold-standard. focus_matrix via M-05 (create:electron_tube), projector/interdiction_matrix via M-06 (sequenced_assembly + derpack:incomplete_* parts), mid-tier via TFMG steel. No rework.
- from: mffs:blank_card / biometric_identifier | via: recipe (create:mechanical_crafting or tfmg:polarizing) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the core MFFS machines already have deep M-05/M-06 weaves. Adding another Create edge on access-control items (cards/biometrics) would pile on — by the already-woven weave the mod is a reference example for the pattern; adding more edges here is scope creep with diminishing returns. Leave the authored weave as-is.
- from: mffs: force field protection | via: loot-seed | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: MFFS has loot=yes but its loot table is likely a guide book drop, not structure loot; the mod is base-defense tech, not a dungeon mod. Routing it through M-14 (bounty→coin) is thematically fine (bounty for clearing a defended base?) but this is not what M-14 routes through — M-14 is mob-drop → coin, not machine-table → coin. No coherent loot-seed edge.

## fxntstorage   [anchors: Create, survival (2)]
REWORK: OK — connections sound. The Create-tier material ladder (andesite→brass→hardened) gating backpack/box tiers via create:mechanical_crafting is coherent and correctly costed. No rework warranted.
- from: fxntstorage:brass_backpack (flight upgrade path) | via: recipe (crafting/create:mechanical_crafting) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: outfitting your airship crew with brass-tier flight backpacks bridges the storage-logistics mod to the aeronautics pillar — the flight upgrade is literally personal-flight, thematically inseparable from ship ops
- from: fxntstorage:backpack_flight_upgrade | via: recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-24 is specifically about mechanical components feeding Aeronautics drivetrain/control hardware, not wearable personal gear. The flight upgrade is a worn gadget; routing it through M-24 is a mis-motif. The M-23 candidate above (structural framing of aerial logistics) is the cleaner fit, but even that is a stretch — flight backpacks are worn QoL, not airframe construction materials. On red-team: a player wouldn't naturally say "of course I need the backpack to build the airship frame." Reject both as forced.
- from: fxntstorage:hardened_backpack | via: recipe | to: aeronautics | motif: M-23 | power: endgame | tone: clash | verdict: REJECT | reason: hardened storage boxes/backpacks are survival storage, not structural airframe materials. Routing a storage container into an airframe recipe tone-clashes — players would find it arbitrary. The mod earns its keep at 2 pillars already; forcing an aeronautics edge adds no real design coherence.




