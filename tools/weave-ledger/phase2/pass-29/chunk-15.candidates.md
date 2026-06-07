# Phase 2 candidates — chunk-15

## searchables   [anchors: support (1)]
LEAVE — pure client UI search/filter library; zero items, zero recipe-types, zero loot. No content surface to weave.

## kubejs_create   [anchors: support (1)]
LEAVE — Create-recipe scripting bridge (enables weaving but is not itself a weave target); zero items, zero loot.

## alternate_current   [anchors: support (1)]
LEAVE — deterministic redstone-propagation performance patch; zero items, zero content surface.

## aileron   [anchors: aeronautics (1)]
- from: Aileron Elytra enchantments (loot-seeded) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Aileron's enchants are behavior-only; they are not datapack-exposed as enchantment items the Enchanting Apparatus can consume. No item surface exists to feed the apparatus. No coherent route.
- from: Aileron flight rebalance (behavior-only) | via: none | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Aileron has no items, no loot, no recipe-type — it is a pure behavior/flight-physics overhaul. Any "second anchor" would be forced. Single aeronautics anchor is correct.
LEAVE — behavior-only Elytra overhaul with no item surface; aeronautics anchor stands as-is. One anchor is the honest state.

## supermartijn642configlib   [anchors: support (1)]
LEAVE — config API library; zero items, zero loot, zero content surface.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo casings | via: consumption (spent in combat) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ammo is consumed every fight; the arms-factory specialist's output is permanently spent, meaning continuous demand from every combat player — the loop's closing arrow.
- from: createimmersivetacz:twelve_gauge_shell bulk production | via: aeronautics logistics (bulk-haul ammo crates) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Ammo is heavy/bulk; supplying a distant server-wide PvPvE campaign from a dedicated arms factory requires cargo ships — logistics arm earns its role.
- from: createimmersivetacz:gun_barrel / firing_mechanism (precision parts) | via: create:sequenced_assembly → colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony blacksmiths can produce basic gun parts (lower-tier guns) cheaper than manual sequenced-assembly, providing the non-combat-specialist an alternate acquisition path without self-sufficiency.
- from: "ammo = sellable luxury good" | via: bare sell | to: economy | motif: M-09 retired | verdict: REJECT | reason: M-09 retired; bare "sell it for coin" is not a weave.
REWORK: existing dossier candidate cites M-09 economy route — that's the retired NPC-vendor motif; replaced here by M-26 (consumption sink) and M-28 (colony route), which correctly gate demand.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: A crab's chitinous claw is a plausible spirit-fire reagent — the occultist burns organic matter to extract essence; a reach-extending claw transmutes into a mobility-adjacent spirit component. Player nods "makes sense."
- from: friendsandfoes hostile-mob drops (Wildfire loot, Illusioner loot, Iceologer loot) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire's blazing loot and Iceologer's icy fragments are the exact exotic reagents arcane infusion craves — fire/ice duality drops become imbuement catalysts.
- from: friendsandfoes:copper_golem_head / copper deco set | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is lossy deco→raw-metal, valid in principle, but 600+ Macaw roof variants are already the wholesale-deco-crush candidate in this chunk. Adding another thin copper-deco crush row here is noise; the Create anchor is not earned by a single deco recycle — this would be one tiny edge. Reject in favour of the stronger magic weaves above.
OK — magic weaves (M-11 + M-02) are the right second anchor. No existing connections to flag (single-anchor mod).

## create_compressed   [anchors: Create (1)]
LEAVE — Create-internal storage/QoL (compresses Create's own intermediates); no foreign-material surface; dossier correctly identifies no weave target.

## endermoon   [anchors: survival (1)]
- from: Ender Moon event (ender pearl supply surge) | via: ars_nouveau:imbuement or occultism:spirit_fire (ender pearl as reagent under lunar event) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: During an Ender Moon, pearls flood the night — a mage who needs pearls for a ritual specifically waits for or triggers the Ender Moon cycle. The moon event is the reagent gate, not just atmosphere.
- from: endermoon event (spawn-rate modifier only, no items) | via: loot-seed on endermoon-specific loot table | to: magic | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: endermoon has no loot table (loot=no) and no items — the ender-pearl surfacing is via vanilla endermen. The weave lives on ender pearls (already a vanilla item), not on this mod's registry. Accept above (M-22 via ender pearl reagent use) is the correct framing; this loot-seed row is a duplicate with no anchor.
OK — M-22 lunar reagent accepted. No existing connections to flag.

## mousetweaks   [anchors: support (1)]
LEAVE — client inventory input-handling QoL; zero items, zero loot.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs:*_brick_roof / *_stone_roof / *_andesite_roof (stone-material variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone and brick roofing tiles are a natural crush target — a demolition or recycling chain crushes them back to gravel/cobble and an XP nugget, the same lossy reclaim every other stone deco gets. Consistent with the established M-04 sweep.
- from: mcwroofs:*_plank*_roof / *_wood_roof (wood variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Wood-based roofs crushing to sawdust/sticks is low-signal noise; M-04 is established for stone/metal deco. 600-block wholesale crush pass should be scoped to stone/brick/metal only — adding wood variants dilutes the motif.
NOTE: the stone/brick/andesite/deepslate/terracotta/concrete subset is a defensible M-04 batch; the wood subset is not. Accept is scoped to non-wood mineral variants.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron / _gold / _diamond (glider tiers) | via: create:pressing + create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Higher-tier gliders require Create-pressed metal sheets woven into the reinforced frame — a brass-sheet paraglider feels exactly right as a mid-tech flight unlock before Elytra. The Create spine gates personal aviation.
- from: vc_gliders reinforced paper feedstock | via: create:milling (paper → pulp → reinforced paper) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: "reinforced paper via milling" is thin — vanilla paper milling is a weak Create-attach. The M-05 glider-frame gate is the stronger, more thematic anchor; adding a separate milling step on paper alone earns nothing beyond M-05 and fragments the recipe.
OK — M-05 is the right Create anchor. No existing connections to flag.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry liquid XP (experience fluid) | via: ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP is refined arcane energy in fluid form — feeding it into an Ars imbuement or Iron's cauldron brew as a cost component gives the enchanting factory a direct magic-pillar role. The mage needs a steady XP pipeline; the Create player has one.
- from: create_enchantment_industry:blaze_enchanter output (enchanted gear) | via: service-for-hire (enchant-on-demand for other players) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: An industrial enchanting station is exactly a "labor" node — other players bring gear, the enchanting specialist runs it through the Blaze Enchanter for a fee; no NPC involved, pure player-to-player service economy.
- from: create_enchantment_industry liquid XP | via: create_new_age:energising | to: Create (internal) | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: Energising charges FE into items — liquid XP is not FE. No coherent method-routing here; the connection is thematic hand-waving, not a real machine-to-machine pipe.
REWORK: dossier candidate "magic via Forbidden Arcanus / Ars — feed liquid XP into arcane infusion [M-10, WEAK]" is correctly tagged WEAK; the M-10 liquid-XP imbuement above is the same line, accepted. Dossier's "M-05 native-gating" suggestion is less precise — M-10 is the right motif (foreign material refined into magic use), not M-05 (mod's flagship item built in its own machine gated on Create).

## sound_physics_remastered   [anchors: support (1)]
LEAVE — client audio/reverb simulation; zero items, zero loot, no content surface.

## rightclickharvest   [anchors: support (1)]
LEAVE — farming interaction QoL (behavior-only); zero items, zero loot.

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments chest loot (monument chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Clearing the expanded monument is a multi-player raid (guardians + new layout); seeding Numismatics coin into the monument's added chests makes the raid a minting event — the coin doesn't come from NPCs but from the players who conquered the monument and pulled it out.
- from: betteroceanmonuments chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding an Ars source gem or Occultism reagent into the monument's deepest chests gives the aquatic dungeon a reason for the magic specialist to care — "the deep monument has arcane fragments" is an exploration hook.
- from: monument loot as "sellable drops" | via: bare sell | motif: M-09 retired | verdict: REJECT | reason: M-09 retired; bare sell is not a weave.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments (harpies/dryads/gorgon/minotaur/sphinx nuggets) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Mythic-creature fragments are perfect spirit-fire fodder — the occultist transmutes harpy feathers, gorgon scales, and minotaur horn fragments into essences; the bestiary feeds the magic web, not just loot tables.
- from: grimoireofgaia boss busts (bust_valkyrie / bust_gorgon / bust_sphinx / bust_vampire) | via: boss-drop gating on high-tier Create/magic recipe | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mini-boss busts are rare, lore-heavy trophies — using a Valkyrie bust as a required input for a high-tier Create machine (or arcane infusion) is exactly "fight the boss to unlock the recipe" — the combat specialist's output gates the tech/magic specialist.
- from: grimoireofgaia drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Dryad essence, sphinx fragment, banshee soul — diverse reagent types that feed the Ars imbuement apparatus cleanly. Every mob in the bestiary becomes a potential farming target for the magic specialist.
- from: grimoireofgaia:bone_shield / ring artifacts | via: occultism:spirit_trade | to: magic | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: Spirit-trade is Occultism spirits acquiring a material, not consuming player-found items. The rings are player-equippable artifacts — routing them into spirit_trade as trade goods is a tonally odd (spirits buying Gaia-world artifacts) and mechanically forced edge. Better to leave rings as equipment.
- from: "boss busts sold for coin" | via: bare sell | motif: M-09 retired | verdict: REJECT | reason: M-09 retired.
REWORK: dossier "economy via numismatics — boss busts / rare artifact rings as high-value bounty" cites M-08/M-02 — M-02 is the reagent-sink motif, not the coin motif. That framing is M-34 (combat-route supply: a combat specialist farms boss drops and trades to non-combat players), not bare sell. Rework suggestion: the boss-bust economy link should be expressed as M-34 (combat specialist farms Gaia bosses → trades busts to crafters who need them for M-15 gated recipes), not a coin faucet.

## create_better_villagers   [anchors: Create, economy (2)]
- from: create_better_villagers trades (emerald-denominated) | via: Numismatics coin re-denomination (config/KubeJS) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: The pack's settlement medium is player-minted coin, not emeralds — re-denominating the Create-villager trades to accept/output Numismatics coins puts the Create parts trade squarely in the player economy, not a vanilla emerald silo.
- from: create_better_villagers Miner villager (sells raw materials) | via: colony colony-route (colony Miner hut cheaper alternative) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: This is colony vs. villager competition, not a cross-system weave — a MineColonies Miner already produces raw materials cheaper, so adding a villager-vs-colony dynamic is design noise, not a new connection. The M-08 re-denomination is the productive edge.
OK — already 2-anchor (Create + economy). M-08 re-denomination deepens the economy anchor; the "add a third anchor" framing is unnecessary. No rework needed on existing connections — they are sound.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: dungeons-and-taverns structure loot (taverns, towers, dungeons, illager hideouts) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Clearing a bandit tower or a hidden dungeon yields Numismatics coin in the chest — the dungeon-runner earns the settlement medium by facing real danger; coin enters the economy only through player effort.
- from: dungeons-and-taverns structure loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding Ars source gems or Occultism reagents into hidden dungeon/tavern chests gives magic-focused players a reason to explore structures and creates demand for dungeon-runners who supply mages.
- from: dungeons-and-taverns trial chamber keys / ominous vault loot | via: boss-key unlock gating | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: The trial key is vanilla infrastructure, not Dungeons-and-Taverns' own drop; gating a Create recipe on vanilla's trial key is not a Dungeons-and-Taverns weave — it belongs on the vanilla trial chamber loot chain. Reject for this mod.
- from: "dungeon loot sellable" | via: bare sell | motif: M-09 retired | verdict: REJECT | reason: M-09 retired.
REWORK: dossier candidate "M-09 luxury good→coin" is the retired motif — replaced by M-08 loot-seed (coin seeded into chests as player reward), which is the correct player-run framing.

## copycats   [anchors: Create (1)]
- from: copycats:copycat_block / _slope / _panel (zinc-built copycat shapes) | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Copycats are already built FROM zinc (Create's own metal) on the stonecutter; crushing them back is a trivial 1:1 reclaim within Create itself — no cross-system connection earned. M-04 is for bringing *foreign* deco into Create, not recycling Create's own product.
- from: copycats blank shapes as aeronautics hull decoration | via: build convention (copycat hull panels on ship builds) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: Copycats are a build aesthetic tool, not a structural alloy/hull component — M-23 is for load-bearing structural materials (alloy plates, hull blocks). A copycat panel is cosmetic, not structural. Forcing M-23 here is a motif misapplication.
LEAVE — Create-anchored decoration; genuine zero cross-system content. Dossier's "leave" call is correct.

== CHUNK COMPLETE ==
