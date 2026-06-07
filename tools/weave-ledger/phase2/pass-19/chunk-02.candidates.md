# Phase 2 candidates — chunk-02 (pass-19)

## recipe_integration   [anchors: support/connective-tissue (1)]
- LEAVE — pure connective-tissue datapack; no items, no blocks, no methods of its own. It ships recipes that fire through OTHER mods' methods (create:milling, ars_nouveau:scry_ritual, occultism:crushing, etc.) conditioned on mod presence. Its value is exactly the weave it already provides; there is no second-pillar surface to route through. Note for maintainer: audit which of its 82 c:tags reference installed mods (vs. inert Aether/MI/GT tags) — the active subset is what actually contributes to the web.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — zero items, zero methods, zero materials. Networking/privacy utility; nothing to weave.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure code library (ballistics API for Create Big Cannons). No items, no blocks, no methods. Indirectly serves the aeronautics/Create combat pillar through its dependents but has no standalone content surface.

## create_better_villagers   [anchors: Create, economy (2)]
- REWORK: existing economy anchor is via vanilla emerald trades. It technically touches the economy pillar but bypasses Numismatics entirely, so the currency loop stays vanilla-isolated. This is a weaker read of "economy" than the pack intends.
- from: Create-part villager trades | via: numismatics (price/denomination config) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Brass Worker pays out Numismatics cogwheels, not emeralds — the player-run currency now flows through the very craftsmen who supply the Create spine.
- from: Create-part villager trades | via: M-21 trade-seam (villager→numismatics) | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional and maintainer leans no; the M-08 coin-denomination re-skin achieves the same goal through the accepted motif without needing the provisional one.
- OK — two anchors (Create + economy) are present; the connection just needs tightening from emerald-only to Numismatics denomination (the ACCEPT above addresses it).

## ponderjs   [anchors: support/Create tooling (1)]
- LEAVE — developer-infra, no items or methods. Documents the Create spine rather than feeding a pillar. A sanctioned support role.

## vinery   [anchors: survival (1)]
- from: finished wines/ciders (vinery:apple_wine, vinery:cherry_wine, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bottle of Aegis wine or Cherry Cider fetches real coin at the trading post — fermentation skill has market value, not just food buffs.
- from: grape juice / apple mash (vinery:apple_mash, vinery:grape_juice) | via: create:mixing or create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a contraption of Mixers and barrels automates juice extraction, feeding the fermentation barrel — the Create spine accelerates the winery.
- from: wines as fermentation output | via: vinery:wine_fermentation (as an intermediate, e.g. wine → alchemical solvent) | to: magic | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: wine feeding magic as a solvent/catalyst has no specific method slot in the installed magic mods (no ars_nouveau:imbuement recipe that obviously wants wine); the connection is too "why?" without a concrete receiving method. Accept the economy + Create links which are strong.

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot-instance mechanic; no items of its own to route (reskinned containers only). No coherent second pillar. Its interaction with other mods' loot tables is a delivery mechanism, not a weave candidate — that belongs to loot-seed work on the structure/dungeon mods themselves, not on Lootr.

## upgrade_aquatic   [anchors: survival (1)]
- from: raw aquatic fish (c:item/foods/raw_pike, raw_perch, raw_lionfish) | via: farmersdelight:cooking | to: survival (food-web depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cutting Board and Cooking Pot turn Upgrade Aquatic's catch into proper seafood dishes, filling the food variety roster and satisfying Spice of Life.
- from: cooked aquatic fish / seafood dishes | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cooked lionfish or pike pie is a regional delicacy worth coin at the trading post — fishing settlements have something to sell.
- from: driftwood/riverwood logs | via: create:cutting (sawmill processing) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: driftwood/riverwood already routes through woodworks:sawmill (inbound weave confirmed in dossier). Adding a redundant create:cutting path for the same material is duplication, not depth. Skip.
- from: coralstone deco | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is a weak "deco recycles back" motif rated WEAK in the dossier itself. Coralstone is decorative filler; routing it through crushing adds noise without advancing the loop. Skip.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- LEAVE — a control-surface QoL device for Create contraptions/vehicles. Its recipe already pulls Create parts (precision mechanism, electron tubes). No coherent second-pillar weave: no food, no magic surface, no material output. The aeronautics anchor is the right and only anchor.

## cbc_at   [anchors: Create, aeronautics (2)]
- from: heavy-autocannon / rocket pod (cbc_at:bronze_heavy_autocannon_barrel, cbc_at:bronze_rocket_pod_breech) | via: KubeJS boss-drop gate | to: Create/survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the twin autocannon's breach requires a fragment from a defeated boss — high-tier ship armament demands proof of a hard fight, not just brass.
- from: autocannon/rocket munitions (cbc_at:ap_rocket_item, etc.) | via: cbc_at:rocket_assembly (sequenced munition pipeline) | to: aeronautics (already present) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: cbc_at munition assembly IS the existing Create+aeronautics anchor — it's already counted. Flagging M-06 here would double-count the existing connection, not add a new pillar. No new anchor gained.
- OK — Create + aeronautics anchors are sound. The M-15 boss-key gate is the one missing link worth adding.
- REWORK: no existing weakness in the two anchors, but heavy/rocket tier lacks a scarcity/progression gate — the M-15 ACCEPT above addresses this.

## snowyspirit   [anchors: survival (1)]
- from: ginger crop (c:crops/ginger / snowyspirit:ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a millstone grinds dried ginger into a spice powder used in Create-mixed baking recipes — the seasonal crop feeds the automation chain.
- from: ginger crop | via: farmersdelight:cutting (mortar/knife) | to: survival (food-web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Cutting Board minces ginger for cooking recipes, stitching the winter crop into Farmer's Delight's food chain.
- from: gingerbread/candy decor (snowyspirit:gingerbread_cookie, snowyspirit:eggnog) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: seasonal-cookie and eggnog as trade goods is a cute idea but the economy motive is too thin — these are trivial consumables, not "luxury goods worth specialising for." The food-web and Create-milling links are the stronger second anchor. REJECT economy; the two food-chain ACCEPTs give a clear second anchor in Create.

## owo   [anchors: support/library (1)]
- LEAVE — pure UI/config/networking code library (owo-ui). Zero blocks, zero items, zero methods. Nothing to weave.

## mcwwindows   [anchors: support/decoration (1)]
- from: stone parapet / arrow-slit variants (mcwwindows:andesite_parapet, mcwwindows:blackstone_brick_arrow_slit, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself rates this WEAK — it is the "deco recycles back" pattern applied to a wide palette mod. Stone parapets are structural decoration; making them specifically crushable adds complexity without advancing the loop. The connection is arbitrary rather than thematically resonant. LEAVE the second-anchor question for a wholesale deco-family pass.
- LEAVE — decoration palette; second-anchor weave reserved for a deco-family sweep where multiple Macaw's/deco mods can be handled coherently.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item QoL filter utility for Create Deployers. No second pillar is coherent; forcing one would be a defect per the briefing. The Create anchor is the right and only anchor.

## immersive_armors   [anchors: survival (1)]
- from: Heavy / Steampunk armor sets (immersive_armors:heavy_chestplate, heavy_* set) | via: create:pressing (pressed plates) + create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy set's signature protection demands Create-pressed iron plates on the mechanical crafter — players feel the tech spine working when they graduate from chain to plate.
- from: Divine / Robe armor sets | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Divine set's one-hit-block aura is finished at the Enchanting Apparatus with a source gem imbue — magic labor is what elevates mundane cloth to divine protection.
- from: finished armor sets (any) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the dossier correctly rates this WEAK — players wear their armor sets, they don't sell them. Economy via combat gear is thin unless there's a rental or contract mechanic. Skip.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Hallowed Gem from the Invoker — proof you broke an illager fortress — powers an Ars imbuement ritual, so magic escalation demands combat escalation first.
- from: illagerinvasion:illusionary_dust | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary Dust, scraped from a defeated Illusioner's remains, feeds an Occultism transmutation ritual — the hexcaster's power has a physical residue the spirit-world can use.
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk as a crushable ore-doubling input is mechanically valid (M-03) but thematically arbitrary — the chunk drops from an illager boss, not from mining. Routing a raid-drop through a millstone as if it were a raw ore blurs the boss-drop identity. Better to use M-15 (boss-key gate for a tech recipe) if platinum becomes a craft input. REJECT this form; keep as a note.
- from: illagerinvasion:hallowed_gem | via: create:sequenced_assembly (boss-key gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-tier Create machine (e.g. an Encased Fan upgrade or a brass contraption keystone) requires a Hallowed Gem in its sequenced assembly — the tech spine demands the player has faced the Invoker.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-side ghost-outline build helper. Zero items, zero methods, zero materials. Pure visual aid.

## sable   [anchors: support/physics-backend (1)]
- LEAVE — physics engine library (Rapier backend for Create Aeronautics). Zero items, zero blocks, zero methods. The weaving happens in the mods that build on it; Sable itself has no content surface.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — performance patch that replaces leaf-decay ticking. No items, no methods, no materials. Nothing to weave.

## timm   [anchors: support/client-UI (1)]
- LEAVE — client-side biome/dimension title overlay. No items, no methods, no materials. Nothing to weave.

== CHUNK COMPLETE ==
