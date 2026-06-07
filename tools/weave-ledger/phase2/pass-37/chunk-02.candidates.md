# Phase 2 candidates — chunk-02

## gravestone   [anchors: survival (1)]

- LEAVE — death-recovery utility; its loot=yes flag refers only to the player's own preserved inventory, not a seedable external loot table. No material inputs/outputs and no craftable items with cross-system value. Any weave (e.g. magic ritual consuming the obituary) would be purely contrived with no player-nod.

## bettermineshafts   [anchors: survival (1)]

- LEAVE — pure structure/worldgen overhaul; loot=no (vanilla mineshaft loot only), 0 items, 0 blocks of its own, no methods. Indirectly serves the scarce-ore mining loop by making mineshafts richer to explore, but there is no surface to route a weave through. Nothing to seed, craft, or process.

## s_a_b   [anchors: create, aeronautics (2)]

REWORK: OK — existing connections sound. The Create→aeronautics link (armored steel blocks built through create:compacting/mixing for ship/vehicle hull armor, M-23 structural alloy → airframe/hull) is coherent and correctly scaled (mid-tier structural material). No mis-costing or lore clash.

New candidate — 3rd angle to survival:
- from: s_a_b:lightsteelblock (basic tier) | via: minecolonies:composting/colony-request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Blacksmith can produce basic light-steel armor blocks cheaper than full Create compacting — making s_a_b plating the colony route to fortification, not only the Create-forge route.

New candidate — survival (danger) angle:
- from: s_a_b:hardsteelblock / doublesteelblock (high tier) | via: loot-seed (boss-drop key gates the hard-steel recipe?) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: s_a_b blocks are primarily structural/decorative; gating the hardest tier behind a boss drop would frustrate builders who need blast resistance for fortification — the armor-progression theme better fits Create depth (M-06) than M-15 boss-key, and the dossier already notes M-06 as an optional deepening direction.

## kubejs   [anchors: support/tooling (1)]

- LEAVE — this is the weaving engine itself (the scripting layer that authors every weave in the pack). It has no player-facing items to route and no in-game method to pull through. Any "weave" of kubejs would be circular. Correct anchor is support.

## ichunutil   [anchors: support/library (1)]

- LEAVE — zero blocks, zero items, zero loot; a pure shared-class library for iChun's mods. No gameplay surface whatsoever.

## spark   [anchors: support/performance (1)]

- LEAVE — server/client profiler with no in-game items, no methods, no loot. Diagnostic tooling only; correctly filed as support.

## minecolonies_compatibility   [anchors: survival, create (2)]

REWORK: OK — existing connections sound. The Create↔MineColonies link (Courier pulls from Create Stock Link; colony workers use Create-processing-adjacent methods) and the survival anchor (extends colony farming/jobs) are coherent and non-arbitrary. No mis-costing.

New candidate — economy anchor via combat-supply:
- from: minecolonies_compatibility:tacz_dummy_gun / Gunner colony job output (TaCZ ammo) | via: colony job (minecolonies:request system) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Gunner job in the colony produces ranged-combat supplies (ammo) that non-combat players must trade for — the colony becomes a combat-supply node, making the settlement-builder a supplier to fighters who lack a dedicated armory hut.

New candidate — economy anchor via colony route:
- from: minecolonies_compatibility:citizen_terminal (storage-network bridge) | via: colony logistics (MineColonies request system ↔ Create Stock Link) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the storage terminal makes colony-produced goods flow into the pack's shared logistics without a player manually shuttling items — a colony-native logistics arm that feeds the economy distribution stage.

## oceansdelight   [anchors: survival (1)]

Note: the dossier lists M-09 (luxury→coin) as a candidate — M-09 is retired; those rows are invalid. Proposing genuine economy + Create links below.

- from: oceansdelight:elder_guardian_slice / elder_guardian_roll (boss-mob seafood) | via: farmersdelight:cutting → farmersdelight:cooking | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: elder guardian farming is dangerous — a coastal combat specialist harvests the kills and processes them into premium dishes that inland players can't obtain without the fight; the ocean kitchen is a specialist supply node feeding the trade loop.

- from: oceansdelight:cut_tentacles / guardian raw drops | via: create:cutting (rotary slicing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create mechanical saw processes raw guardian tentacles and fish into uniform cuts for the cooking chain — the automated ocean-food factory is a Create production line, not just hand-prep.

- from: oceansdelight:fugu_slice (poisonous pufferfish dish) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: fugu is a culinary poison-risk food; transmuting it into a magic essence is thematically jarring (a delicate culinary tradition → spirit-fire fuel). The tone clash is real — kitchen food does not feel like occult reagent. The FD/cooking vibe sits firmly in survival, not magic.

- from: oceansdelight:braised_sea_pickle | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: sea pickles are already a vanilla food/dye item; milling them into a processed intermediate is a weak pull — the milling output would be redundant with existing kelp/farm processing chains and adds no meaningful loop advancement. The value is too thin for a weave entry.

## better_lib   [anchors: support/library (1)]

- LEAVE — zero blocks, zero items, zero loot; shared config/messaging library. No player-facing content and no gameplay methods to route through.

## buildguide   [anchors: support/QoL (1)]

- LEAVE — client-side render overlay only; zero blocks, zero items, zero loot. Pure visual build-assistant with no in-game material surface.

## handcrafted   [anchors: support/decoration (1)]

- from: handcrafted:*_chair / *_table / *_bench (wood furniture, everyday tier) | via: create:cutting (mechanical saw cutting dressed planks into furniture blanks) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create mechanical saw mass-produces furniture components from logs — the furniture workshop runs on clockwork, not a hand-saw, and the output scales to furnish a whole colony rather than one cottage.

- from: handcrafted:*_chair / *_couch / *_desk (mid-tier furniture) | via: minecolonies:composting (carpenter hut request) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies Carpenter produces basic handcrafted furniture on request, cheaper and faster than solo crafting — making the colony the preferred source for bulk interior furnishing and giving a furniture trade lane without forcing a player to solo-craft 64 chairs.

- from: handcrafted:*_chair / any furniture block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvage a mis-placed or surplus chair back to planks and an XP nugget through a crusher — the Create recycling loop covers deco, consistent with M-04's lossy-recycle pattern.

- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: handcrafted:berry_jam_jar is a deco-food item that already sits in survival (food). Routing it through cooking adds a recipe step but doesn't advance to a second pillar — survival is already its anchor, and this is a depth move within one pillar, not a cross-system bridge. No new anchor gained.

- from: handcrafted:*_fancy_bed | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: enchanting a decorative bed via arcane infusion is a tone mismatch — handcrafted's rustic/cozy vibe clashes with arcane apparatus ritual. Magic-attuned bedding is contrived; there is no player nod ("of course a four-poster gets enchanted"). The deco palette should keep its mundane, material-only construction feel.

## bettermodsbutton   [anchors: support/UI (1)]

- LEAVE — client UI only; zero blocks, zero items, zero loot. Pause-screen button, no gameplay content.

## moreculling   [anchors: support/performance (1)]

- LEAVE — render-culling performance optimization; zero blocks, zero items. No player-facing content.









