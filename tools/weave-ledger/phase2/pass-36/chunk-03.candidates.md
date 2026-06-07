# Phase 2 candidates — chunk-03

## configuration   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (config-screen/serialization API, no blocks/items/loot); nothing to route, no method surface.

## structurize   [anchors: support/library (1)]
- LEAVE — genuine zero-content library; it is the MineColonies build engine (blueprint scan/place framework), no items of its own that generate independent demand, and its weave is entirely MineColonies' weave. The 14 tool items (scepters, shape tool) are builder-util, not economy/magic/survival material.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; 0 items, 0 blocks, no loot; nothing to route.

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables (Catacombs / Undead Fortress / Spider Cave chests) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: crypts and undead fortresses naturally yield occult components — a bone-pile dungeon makes sense as a reagent source for Occultism/Ars Nouveau
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare minted coin seeded into dungeon chests makes exploration a legitimate way to bootstrap trade currency — but this is player-found coin (already minted), not an NPC faucet; the scarce supply keeps it meaningful. Red-team: coins in chests could feel arbitrary — survives if seeded sparingly (one or two per chest, not guaranteed), so they represent genuine loot rather than a vendor dispenser.
- from: betterdungeons loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-key component (a rare iron artifact or blueprint fragment) seeded into the hardest dungeon tier (Undead Fortress) gates a high-tier Create recipe, matching the pack's "boss drops unlock tech" design intent — a structure dungeon is a spatial boss-equivalent for this motif
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: combat specialists farm dungeon loot (boss keys, magic reagents, coin) and trade to non-combat players — the danger content directly feeds the economy's combat-supply role
- from: betterdungeons loot tables | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: seeding raw arcane infusion inputs directly in dungeon chests (before the player has the infusion apparatus) is a tone mismatch — a Catacombs chest handing out pre-refined Ars reagents feels like a shortcut, not earned progression; M-02 (mob-drop reagents found organically) is the cleaner fit here

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charge method) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks spell-focuses and magic armor can require an FE charge step to reach their active tier — the electrical layer of Create feeds the magic spine in a way a player immediately understands ("I need to power this before it works"). Red-team: magic players may resist needing a Create setup; survives because it's one short step and the mod's electric motor already provides FE natively from SU, so even a pure-Create player can fulfill this.
- from: createaddition:seed_oil / bioethanol (liquid_burning) | via: createaddition:liquid_burning | to: aeronautics | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: bioethanol from farmed seeds burns in the electric generator → FE → drives electric motors → SU for Aeronautics propellers — an agricultural fuel line feeding the logistics arm, tying survival farming to airship flight. Red-team: the FE→SU→propeller chain is two conversions and the energy loss (75% alternator efficiency) is real; survives because it's an intentional intermediate route, not the primary fuel (diesel stays primary per M-13 reserved), giving a renewable fallback path.
- from: createaddition:electrum_ingot | via: create:rolling → createaddition:rolling | to: Create (depth) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum wire (gold/silver alloy) is a unique conductor material that cross-routes the Create electric subgraph — a Create-tech specialist wants electrum wires for connectors but must either smelt electrum (requiring silver from Occultism/Galosphere) or trade with a magic specialist; forcing the cross-route dependency. Red-team: electrum is already in Create's own material tree; the cross-dependency only bites if silver is locked. Survives as a candidate — flag for reagent-ownership check on silver: occultism owns real silver (noted in CLAUDE.md gotchas), so galosphere:silver_ingot (actually palladium) must not be used here.
- from: createaddition:seed_oil | via: createaddition:liquid_burning | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: M-12 (processing-chain pull) applies to taking a crop through a processing method to a useful intermediate — seed oil fits the idea but the liquid_burning method is about consuming the oil as fuel, not making a downstream intermediate. The more honest weave is M-13 (fuel → propulsion). The survival tie is already implicit (crops grow under Serene Seasons); a separate M-12 edge here is redundant with the M-13 ACCEPT above.
- REWORK: the dossier's 2nd-anchor candidate "magic via charging / tesla_coil" is labeled M-05 (native-method gating) — that motif means "a mod's flagship item built in its own machine with Create parts as inputs." The correct motif for FE-charging magic gear is M-17 (electric charging bridge). The dossier's motif label is imprecise and should be corrected.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content QoL mod; overlays buttons on crafting grids, 0 items/blocks/loot, no method surface to weave.






