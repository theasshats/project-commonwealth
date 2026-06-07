# Phase 2 candidates — chunk-03

## create_integrated_farming   [anchors: Create, survival (2)]

REWORK: OK — connections sound. The dossier correctly places it as Create+survival (automated husbandry feeding the food pillar via Create contraptions). Two solid anchors confirmed.

- from: roost outputs (eggs/feathers/cooked poultry) | via: farmersdelight:cooking → create:mixing | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a steady roost/net harvest runs through FarmersDelight cooking into sellable prepared meals — the loop is survival pressure → automated production → trade good
- from: create_integrated_farming:lava_fishing_net drops | via: create:crushing (byproduct route) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: the lava net outputs mobs/loot items not ores; M-03 is an ore-doubling motif and this is not ore material — category mismatch; a forced edge
- from: roost/net steady outputs | via: numismatics sell (bulk trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier already flags this as WEAK; everyday bulk goods (eggs, raw fish) are below the M-09 luxury-good threshold — high-effort processed goods (cooked/preserved) belong at M-12/M-09, not raw farm outputs at coin-drop value; would trivialise coin acquisition

## bountiful   [anchors: economy (1)]

- from: bounty reward pool configured to numismatics coins | via: bountiful board payout (config/data-driven) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty board pays out in numismatics cog/spur — mob kills and item fetches become the pack's first coin faucet, grounding the economy loop
- from: bounty objective pool seeded with Serene-Seasons harvests / seasonal crops | via: bountiful Decree (data-driven objective pool) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a seasonal crop bounty only appears in the right season — players who engage with the farming calendar earn better rewards, bridging survival pressure into the economy reward
- from: bounty objective pool seeded with Create-processed goods (copper sheet / brass ingot / etc.) | via: bountiful Decree objective pool | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty demands processed metals, so running a Create line isn't just for gear — it fills contract orders for coin; scarcity → production → economy loop reads cleanly
- from: bounty objective seeded with magic reagents (source_gem, ars essence) | via: bountiful Decree objective pool | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the board occasionally demands a magic ingredient — a pull signal that ties Ars/occultism production to the trade economy without forcing a recipe bridge
- from: bountiful:decree crafting | via: recipe (crafting table) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the decree is already economy-scoped and crafted with vanilla materials — no cross-system edge needed; a recipe weave here adds complexity without loop advancement

## accessories   [anchors: support (1)]

LEAVE — genuine zero-content API (slot framework only; 0 blocks, 0 items, no loot). The wearables that weave belong to the mods registering into it, not here.

## fishingreal   [anchors: survival (1)]

LEAVE — behavior-only tweak with no items, no loot table of its own; the fishing-content weave belongs to createfisheryindustry / farmersdelight that sit beneath it. Dossier note confirmed.

## copperagebackport   [anchors: survival (1)]

- from: copper deco blocks (bars, chain, lantern, oxidized/weathered variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: copper roof tiles and bars crush back to copper nuggets + experience nugget — the entire oxidation palette folds into Create's copper economy without blocking any build uses
- from: copper tools/armor (axe, boots, etc.) | via: create:crushing (tool recycling, lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: scrapping a worn copper axe through a crusher yields copper nuggets — vanilla-plus tools participate in the Create material loop cleanly
- from: minecraft:copper_chest (oxidized variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copper chests hold inventories; players would expect not to accidentally crush a chest with items — the UX hazard outweighs the loop value for a container item. Exclude containers from the crush sweep.
- from: Copper Golem (logistics role) | via: recipe — require Create andesite_alloy in crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Copper Golem is an early item-sorter; requiring a small Create part (andesite alloy) to craft its statue makes it a natural stepping stone before Mechanical Arms — tone is "low-tech Create automaton" which is exactly right
- from: Copper Golem statue | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: haunting a copper golem statue into a soul-resonant object is too arbitrary — the golem is a vanilla-style sorting mob, not an occult artifact; tone clash survives red-team as a real defect

## searchables   [anchors: support (1)]

LEAVE — genuine zero-content UI library (0 blocks, 0 items, no loot); search/filter API with nothing to route through any method.

## edf-remastered-5.0-beta4   [anchors: survival (1)]

- from: Ender Dragon fight (hardened encounter) | via: loot-seed — seed a boss-key drop or rare coin reward into the dragon's loot table | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier confirms EDF does NOT change the dragon's drop table and adds no reward items — the mod is explicitly behavior-only; seeding its loot would mean editing vanilla minecraft:ender_dragon, which is not this mod's loot table; that edit belongs to a dedicated boss-loot pass, not here. No material surface.
- LEAVE — EDF adds no items and owns no loot table. It toughens an encounter, which is a survival-pressure contribution, but there is nothing to route through a method. The "loot-seed" delivery would target vanilla dragon loot, not EDF's — that's not this mod's seam.

## fusion   [anchors: support (1)]

LEAVE — genuine zero-content rendering library (0 blocks, 0 items, no loot); CTM/scrolling-texture backend with no game content to weave.

## bigsignwriter   [anchors: support (1)]

LEAVE — genuine zero-content client UI utility (0 blocks, 0 items, no loot); sign-text helper with no gameplay surface.

## create_ltab-3.9.2   [anchors: Create, survival (2)]

REWORK: OK — connections sound. Create-themed structures + exploration/loot = Create + survival. Two solid anchors.

- from: structure loot tables | via: loot-seed — inject a rare numismatics coin or a magic reagent as a structure chest reward | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a forgotten Create factory holds a numismatics crown in its strongbox — finding and looting structures pays coin, bridging exploration into the economy loop; the industrial-adventurer vibe matches perfectly
- from: structure loot tables | via: loot-seed — inject an aeronautics schematic fragment or airship component | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins occasionally yield a structural hull plate or ship component blueprint, making the world's exploration relevant to the aeronautics build milestone; creates a natural incentive to venture out before you can build airships
- from: create_ltab structures | via: loot-seed (magic reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Create-themed industrial structures seeding ars/occultism reagents is a tone mismatch — an abandoned Create factory containing a source gem feels arbitrary rather than inevitable; the economy/aeronautics seeds (above) are the coherent reads for an industrial ruin

## necronomicon   [anchors: support (1)]

LEAVE — genuine zero-content API library (0 blocks, 0 items, no loot); config/helper framework for dependent mods (opacpvp). Nothing to route.

## fxntstorage   [anchors: Create, survival (2)]

REWORK: OK — connections sound. Create-tier-gated storage (andesite→brass→hardened material ladder, already uses create:mechanical_crafting) + survival inventory/QoL = two solid anchors.

- from: fxntstorage:backpack_flight_upgrade | via: aeronautics recipe — require an Aeronautics or Create Aeronautics component as an ingredient | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: the flight upgrade is a worn gadget providing personal flight; the M-24 motif is about drivetrain/control components feeding airship construction — wiring a personal flight backpack into ship propulsion is a category mismatch; the mechanical link is absent and "flight" is the only shared word
- from: fxntstorage:storage_controller (item-routing network) | via: Create mechanical-crafting recipe requiring a brass component or a clutch | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: already has create:mechanical_crafting as an inbound weave (flagged in dossier made-by); the storage_controller is plausibly already using brass in its recipe — proposing a further gate on the controller specifically is mis-costed (everyday logistics block) and may duplicate existing integration; leave to check the actual recipe before proposing
- from: fxntstorage backpack (hardened tier) | via: create:sequenced_assembly — gate hardened backpack construction through a sequenced assembly step | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier hardened backpack is a flagship item — multi-stage Create assembly for its backplane plate rewards deep Create investment; pairs naturally with its hardened_sheet material requirement

## emojitype   [anchors: support (1)]

LEAVE — genuine zero-content client input helper (0 blocks, 0 items, no loot); Unicode shortcode expansion in chat. No game content to route.

## modelfix   [anchors: support (1)]

LEAVE — genuine zero-content client rendering patch (0 blocks, 0 items, no loot); baked-model bug fix. Nothing to route.

## entity_texture_features   [anchors: support (1)]

LEAVE — genuine zero-content client rendering engine (0 blocks, 0 items, no loot); OptiFine-format texture framework. Nothing to route.

## ritchiesprojectilelib   [anchors: support (1)]

LEAVE — genuine zero-content projectile/ballistics API library (0 blocks, 0 items, no loot); serves Create Big Cannons as a backend. Nothing of its own to route.

## mcwroofs   [anchors: support/decoration (1)]

- from: stone/brick/andesite/deepslate roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a dismantled stone roof yields gravel and a glint of experience — the hundreds of stone-family roof blocks fold into Create recycling the way all stone deco does; lightweight one-recipe-per-material-family rather than 600 individual entries
- from: wooden roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing wooden planks returns… planks; M-04 is specifically stone/metal deco recycle (lossy to gravel + xp); wood has no coherent "raw material" to yield via crushing — the motif anti-arbitrage rule blocks a round-trip swap; leave wood roofs as purely decorative
- from: mcwroofs roof blocks (stone/brick family) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: bulk deco blocks as a luxury trade good is an incoherent pairing — luxury goods are high-effort consumables (wine, meals, processed metals), not building block surplus; tone clash confirmed

## jei   [anchors: support (1)]

LEAVE — genuine zero-content recipe-viewer UI (0 blocks, 0 items, no loot); load-bearing for Create recipe display but no game content to route. Do not swap to EMI (CLAUDE.md).

## l2library   [anchors: support (1)]

LEAVE — genuine zero-content developer library (0 blocks, 0 items, no loot); Curios/attribute tab shared code for LightLand mods. Nothing to route.

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / deeperdarker:soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul dust from Otherside mobs combusts in spirit-fire to yield occult essences — the Deeper Dark feeds the occultism magic web; dimensional scarcity (dangerous to obtain) makes these top-tier reagents earned, not trivial
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's Heart — rare, dangerous-to-get — is infused into an endgame source amplifier or arcane focus; a single-gate unlock rather than a cheap ingredient; eldritch heart → arcane power reads thematically right
- from: deeperdarker:warden_carapace | via: create:crushing (material byproduct) | to: Create | motif: M-04 | power: endgame | tone: ok | verdict: REJECT | reason: Warden Carapace is a rare boss-tier material, not a deco block — M-04 is for deco recycle (lossy), not for processing elite mob armor; crushing a Warden Carapace into nuggets is both mechanically incoherent and power-imbalanced; a boss-key role (M-15) would fit better if it were used at all
- from: deeperdarker:warden_carapace | via: recipe (boss-key input) — gate a complex Create machine or weapon component | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: assembling a reinforced Create machine housing requires a Warden Carapace — surviving the Ancient City/Otherside is the prerequisite for the pack's top-tier Create hardware; scarcity → pressure → production loop reads exactly right
- from: gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: Otherside stone families crush to gravel + xp nugget — exploration brings back materials that feed the Create gravel/material economy; already partly wired (create:crushing inbound confirmed in dossier)
- from: deeperdarker:sculk_bone | via: occultism:ritual (bone-type reagent) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Sculk Bones are otherworldly remains — a natural ritual ingredient for occultism spirit-workings; the undead-adjacent material feeds the same spirit-web as bones but with dimensional rarity
- from: deeperdarker dimension / soul gear | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: soul_dust / soul_crystal as a luxury trade good is WEAK as flagged in dossier — the magic routing (M-11, M-10) is far stronger and the reagent-ownership ensures these don't double-spend; coin is a poor downstream for materials this well-suited to the magic web; reject the economy direct-sell in favor of magic → economy flow
- from: deeperdarker Otherside mobs (Sculk Snapper/Leech/Stalker) drops | via: bountiful Decree (kill-mob objective) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a rare endgame bounty demands kills in the Otherside and pays top coin — combat → economy loop, drives players to the dangerous dimension for the best bounty tier

REWORK: The dossier's existing survival anchor is correct. The create:crushing inbound weave in made-by is likely M-04 application already in progress — confirm it matches M-04 before authoring a duplicate. The economy "WEAK" candidate in the dossier is correctly deprioritized; the magic routing is the load-bearing second anchor.

== CHUNK COMPLETE ==


