# Phase 2 candidates — chunk-06

## bountiful   [anchors: economy (1)]

Bountiful is a bounty-board mod whose reward AND objective pools are fully config-driven. Current anchor is economy (1). The existing dossier candidate for M-08/M-09 coin-from-goods is mis-scoped: M-09 is retired and bare "sellable" links are the ambient endpoint, not a weave. The real economy weave is demand-gating — pointing bounties at a non-trivially-satisfied demand sink.

- from: bountiful:decree (objective-category config) | via: config tie (bounty objective pool seeded with pack-specific outputs) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: boards demand the week's seasonal harvest — torchflower tea, sniffer eggs, Lantern Fruit — channelling the diet-variety pressure into steady repeating demand that no single player can stockpile ahead of
- from: bountiful:decree (kill-objective pool) | via: config tie (kill-bounty list seeded with pack's hostile/dungeon mobs) | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: boards post kill-bounties on dungeon-dwelling Kobolds, Skelebolds, and cave creatures — giving the combat specialist a concrete economic role: turn kills into board rewards that non-combat players need
- from: bountiful:decree (objective pool → Create-processed goods) | via: config tie (objective list seeded with Create-processed outputs such as sheets, brass, or packaged goods) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: bounties requesting iron sheets or brass ingots make the Create specialist the reliable supply node; production feeds the board, the board renews demand
- from: bountiful reward pool | via: config tie (reward set to numismatics coin types) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: boards pay out in player-minted coin (cog/spur) rather than gold, making them the primary coin faucet that gives freshly minted currency its first circulation without going through an NPC vendor
- from: bountiful:decree (objective pool → magic reagents) | via: config tie (reagent objectives: datura, source_gem, boss-drop ingredients) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boards request magic materials that only a ritual specialist can supply — turning arcane reagents into tradeable demand, not just private use
- from: bountiful reward pool → bare "sellable luxury goods" | via: — | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired — "post a bounty, get coin" is the board's ambient purpose; the motif-bearing candidates above capture the actual demand-gating dimension; the naked sell-link is not a weave

REWORK: dossier's 2nd-anchor candidate referencing M-08/M-09 conflates the two. M-09 is retired; the real weave is M-08 (reward pool = player-minted coin as the circuit-closer) plus M-26/M-34/M-29 on the objective side for demand gating. The "economy→already" framing in the dossier understates the opportunity: the board's objective side is where the real loop-feeding happens. Recommend updating the dossier note.

## corgilib   [anchors: support/library (1)]

Zero player-facing items, no registered recipe types, no loot tables, no blocks. Pure code library dependency.

- LEAVE — genuine zero-content code library; dependency of Alex's Caves and similar; nothing to route through any method

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

Single music disc item. loot=yes but the loot surface is just the one disc; forcing any economy/loop edge would be noise for a joke easter-egg.

- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (disc) | via: loot-seed (seed into a structure loot table as a rare find in, e.g., a Kobold Pirate Den or an NTH dungeon) | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: even granting a structure placement, the disc has no gameplay function beyond playing music — adding it to a loot table via M-34 (combat-supply) is a stretch; the item carries zero loop weight. Tone is ok but balance is non-existent. Leave as pure flavor.
- LEAVE — single joke flavor disc; no meaningful content surface; forced integration would be noise, not signal

## stylecolonies   [anchors: support/decoration palette (1)]

Blueprint-set add-on for MineColonies. No items, no blocks, no loot tables. Ships style blueprints only. The Steampunk style already passively consumes Create blocks at construction time — that IS a real connection to Create production (the colony demands Create-built structural blocks to construct the Steampunk style), but it's a build-time material sink inherent to MineColonies' construction mechanic, not a recipe weave.

- from: stylecolonies Steampunk style blueprints (require Create blocks at colony construction) | via: MineColonies hut build request (colony builder consumes Create-fabricated blocks) | to: create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: building the Steampunk colony style demands Create-fabricated structural blocks — sheets, andesite casings, etc. — turning the colony into a steady Create-production demand node; the more you build out the settlement, the more Create output you need
- from: stylecolonies High Magic / FairyTale style blueprints | via: MineColonies hut build request (colony builder consumes magic-adjacent blocks) | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: High Magic colony buildings call for arcane or exotic blocks (amethyst clusters, deepslate, otherstone-style variants) — the magic specialist supplies the colony builder; settlement ambition drives magic-pillar demand
- from: stylecolonies blueprint styles requiring modded wood/stone not available locally | via: worldgen / regional scarcity gate (some style blocks are biome-region-locked) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: building the Frontier or Underwater style requires materials from a biome you may not be settled near — trade becomes the bridge between a player's colony ambitions and the block palette they need

REWORK: dossier notes "support role (pure blueprint content)" and lists no 2nd-anchor. The Steampunk/High Magic style demand on Create/magic blocks is a genuine M-28 colony-route connection — not a recipe, but a construction-material pull. The support-role call is too conservative given these structural material demands. These are passive but real loop connections: colony construction creates durable demand on the production pillars.

## endrem   [anchors: survival (1)]

Endrem gates the End behind collecting 12 of 16 distinct eyes from structure loot, bosses, and mining. The eyes are themed (nether/undead/guardian/corrupted/magical/etc.) and currently pure exploration-loot with no recipe graph ties. loot=yes. This is a genuine progression gate sitting at the top of the survival danger arc — strong loop position.

Power-read: the eyes are endgame items (require broad exploration across multiple structure/boss types). Deep integration is appropriate. Tone: any crafting route must stay costly and thematically coherent — ritual/transmutation (arcane) for the magical-themed eyes is a natural match; a Create sequenced-assembly chain for a technological-themed eye is possible but must not trivialize the exploration intent.

- from: endrem:undead_eye / endrem:corrupted_eye / endrem:cursed_eye (undead/dark-themed eyes) | via: occultism:ritual (ritual transmutation with rare organic components as catalyst) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a ritual specialist can transmute a Wither-adjacent mob drop into the undead eye, unlocking End progression through arcane mastery rather than pure dungeon luck — but the ritual components must be genuinely hard to gather
- from: endrem:magical_eye / endrem:exotic_eye (magic-themed eyes) | via: ars_nouveau:enchanting_apparatus (imbuement with source gems + rare reagents) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the magical and exotic eyes are byproducts of deep Ars knowledge — an arcane infusion of source gems and specialist reagents produces the eye; magic progression unlocks End progression; the two systems' endgames are now interlinked
- from: endrem:guardian_eye / endrem:nether_eye (biome-hostile-environment eyes) | via: loot-seed (seeded into the pack's structure loot tables — Nether fortresses / ocean monument / relevant dungeon chests — at a low rate) | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the nether and guardian eyes reward sustained dangerous exploration of the most lethal overworld/nether structures; the combat specialist who farms Nether fortresses and ocean monuments becomes the End-key supplier for the server
- from: endrem:old_eye / endrem:cryptic_eye (ancient/archaeological-themed eyes) | via: create:sequenced_assembly (a derpack:incomplete_eye chain — requires ore-processing byproducts + brass parts as inputs; 2–3 stages) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Create specialist can reverse-engineer two of the eyes through precision assembly — but the chain is deep enough that exploration is still the faster path; this is the "build your way past a bottleneck" option that the high-tier fork is designed to provide
- from: endrem eye subset (any 2–3 types) | via: recipe (vanilla-crafting table with boss-drop inputs) | to: survival (boss-drops gate) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: one or two eyes require a boss drop as a craft input — the Cataclysm / Kobold captain / dungeon boss becomes the key to End access; combat and boss-farming are a direct path to the End
- from: endrem:rogue_eye / endrem:evil_eye (chaos/trickster-themed eyes) | via: create:haunting (a haunted-item path — a base component is soul-haunted into the eye form) | to: create | motif: M-19 | power: endgame | tone: ok | verdict: ACCEPT | hook: the soul-haunting furnace transforms a dark-themed reagent into the rogue/evil eye — Create's occult seam gives the tech-focused player a route to the most elusive eyes
- from: endrem eye collection as a whole | via: bare "gate the End with more loot" — no pillar connection, just harder loot | to: — | motif: no-motif | power: — | tone: — | verdict: REJECT | reason: endrem's default mode is pure exploration-loot gating with no recipe/pillar tie; that's just a harder dungeon run, not a loop connection; it stays at survival(1) unless the craft/transmute routes above are added
- from: endrem:ancient_portal_frame | via: create:mechanical_crafting (craft replacement portal frames at cost) | to: create | motif: M-05 | power: endgame | tone: clash | verdict: REJECT | reason: the ancient portal frame is a world-spawn structural element, not a crafted item; letting players mass-craft portal frames undermines the ancient/found aesthetic of the End gate and trivializes the entire exploration-gate design; tone clash

OK — existing survival anchor is sound. New links (magic via ritual/imbuement, Create via sequenced assembly/haunting, boss-key, loot-seed) are all adding real 2nd/3rd system ties.



Worldgen library (biome injectors, density functions, terrain modifiers). Zero blocks, zero items, zero loot tables, no recipe types. Pure worldgen plumbing.

- LEAVE — genuine zero-content worldgen library; all player-facing effects belong to the dependent mods (Tectonic, etc.) that register content through it; nothing to route

## wits   [anchors: support/QoL (1)]

Server-side debug command, no items, no blocks, no loot.

- LEAVE — zero-content server command utility; provides /wits structure-identification, no items or material surface to weave

## resourcefulconfig   [anchors: support/library (1)]

Config-screen library. Zero content surface.

- LEAVE — genuine zero-content config library/API; no items, blocks, or methods

## chat_heads   [anchors: support/QoL (1)]

Client-side chat-UI cosmetic, no items, no blocks.

- LEAVE — zero-content client UI mod; no material surface; pure quality-of-life for the multiplayer experience

