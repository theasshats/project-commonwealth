# Phase 2 candidates — chunk-07

## create_better_villagers   [anchors: create, economy (2)]

Existing anchors: Create + economy. The dossier's own candidate (re-denominate emerald trades into Numismatics coin) is the only real second-anchor move — and it's already recorded. Let me think harder with method-pull.

**Method-pull pass:**
- The mod's sole mechanism is villager trades. Trades produce Create parts (andesite/copper/brass tier). The question is whether those parts, or the act of obtaining them, can be routed through another loop node.
- M-28 (colony route): could a MineColonies building specialise in sourcing/vending Create parts, parallel to these villagers? That's a *different* mod's mechanism, not a weave on this one.
- M-30 (regional scarcity): villager spawns are not region-locked, so this doesn't help.
- M-08 angle: re-denominatng emerald trades to Numismatics coins would tie this mod's output into the player-economy settlement medium — parts are acquired *through* the pack economy rather than through vanilla trading. This is the strongest real weave: a player who specialises in "I farm these Create-villager professions" becomes a parts-seller in the player economy. That's demand-gating (M-08 + M-26 consumption: parts are spent on builds). But it requires the actual currency-swap config/recipe — a Phase 3 authoring task.
- M-29 (cross-route): the Miner profession *buys* raw andesite/copper/brass — meaning it could be a sink that forces Create producers to sell to the village trader. That is a minor cross-route signal but very weak (a vanilla material, not a locked exclusive).
- M-33 (service-for-hire): a villager-trade economy is adjacent but villagers are NPCs not players; M-21 and M-14 are cut as NPC coin faucets. The right framing here is M-08 (player-minted coin feeds these trades), not M-33.
- Bare "sellable" link rejected per rules.

REWORK check on existing connections: "economy" anchor is listed because the mod uses the villager trade economy — but the *pack's* economy pillar is player-run Numismatics/Trading Floor. Vanilla-emerald villager trades are not the pack economy. The existing anchor is weak/premature until trades are re-denominated. Flag as REWORK.

- from: Create-part trades | via: numismatics mint → villager trade retool (config/KubeJS) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Andesite/Brass/Copper Worker villagers accept player-minted coin, folding the profession trade into the pack's own currency and making a "parts dealer" a viable economy specialisation.
- from: Miner villager (buys raw andesite/copper/brass) | via: emerald → coin re-denomination | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: the Miner profession buying raw materials is only meaningful once the economy currency swap lands; until then it's a vanilla vanilla-emerald transaction. Fold this into the above ACCEPT rather than treating separately — the whole-trades-swap is the atomic action.
- REWORK: existing "economy" anchor is premature — the mod trades in vanilla emeralds, not Numismatics coins. The anchor should be flagged conditional on the M-08 re-denomination work landing (Phase 3).
- OK — create anchor is sound (the professions are bound to Create workstation blocks and trade Create parts).

## createtreadmill   [anchors: create (1)]

**Method-pull pass:**
- Items: createtreadmill:treadmill, createtreadmill:maid_motor. Loot=yes (minor).
- The treadmill is a kinetic source; zero material outputs. No processing method it exposes.
- Maid Motor input: touhou_little_maid Soul Orb / Photo. TLM is flavor, not a loop system. No magic/economy/survival system can route through the Soul Orb intake meaningfully.
- M-26 (consumption): the treadmill consumes *player effort* — not a material sink. This is a built-in mechanic, not a weave.
- M-05 (native-method gating): could a Create-part be required to *craft* the treadmill (making it a Create-gated machine)? The treadmill IS already Create-dependent (recipe uses Create metals), so this is already implicit in the Create anchor. No new system added.
- M-24 (mechanical component → aeronautics): the treadmill outputs SU into a Create network. That SU powers machines. Could it be used to power an Aeronautics propeller? Aeronautics uses Create's own SU network, so any SU source feeds it — this is a *passive* connection from Create's own mechanics, not an authored weave. Thin, no motif needed.
- Survival angle: a treadmill that a player runs on is fun flavor but it isn't a survival-pressure driver — it's a novelty power source. Forcing a survival link (e.g. "requires food to run") would be a contrived edge.
- No second system can be coherently woven here. The dossier's own judgment (leave) is correct.

- LEAVE — single-anchor kinetic source (Create) with no item/material surface to route through a second system; the only cross-mod hook (TLM Soul Orb) goes to a flavor mod, not a loop system. Forced edges would be incoherent.

## polymorph   [anchors: support (compat/QoL) (1)]

Zero items, zero blocks, zero loot. Pure UI conflict-resolution. No material surface.

- LEAVE — genuine zero-content QoL library (recipe-selector UI). No items, no methods, no loot. No weave is possible or needed.

## copycats   [anchors: create (1 — deep Create-deco)]

**Method-pull pass:**
- 46 blocks, 45 items, all copycat shapes. Input: zinc (Create metal) + any block skin. Output: disguised deco shapes.
- M-04 (Create recycles deco): copycat blocks are crafted from zinc; crushing them back to zinc scraps/nuggets + XP nugget is the natural M-04 application. Lossy, consistent with the motif. This is a genuine "plus" rather than a forced edge — but the dossier correctly notes it should happen as part of a wholesale deco-family pass, not piecemeal.
- M-30 (regional scarcity): zinc is a Create ore, and GTMOGS regional ore-gen already makes zinc regional. If zinc is scarce in your region, you trade for it — but this is *ambient* (it applies to all zinc users), not a weave *on copycats specifically*.
- M-08: copycat blocks as luxury building goods sold for coin? Bare sellable — REJECT per rules.
- M-23/M-24 aeronautics: copycat blocks are structural decoration. Could they serve as hull materials? Aeronautics structural hull blocks already have their own material chain (M-23); pasting a copycat skin on a hull block is creative, not an authored weave.
- M-33 service: "copycat specialist who skins blocks for other players" is a stretch — the mechanic is self-serve.
- The dossier calls it a Create-anchored deco with no forced second anchor. I agree: the only coherent addition is M-04 on metal variants, and that belongs to a deco-family pass.

- from: metal-variant copycat blocks (iron/zinc/copper shapes) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a misshapen copycat iron door crushes back to iron nuggets + xp, keeping the material loop closed — consistent with every other deco-metal in the pack's Create crushing pass.
- from: all copycat blocks (any skin) | via: bare sell / economy sink | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: "sellable decoration" is the retired M-09 ambient endpoint; no demand-gating here; skip.

## betterpingdisplay   [anchors: support (client UI) (1)]

Zero items, zero blocks, zero loot. Numerical ping display — pure client UI.

- LEAVE — genuine zero-content client UI mod. No material surface; sanctioned support role.

## puzzleslib   [anchors: support (library/API) (1)]

Zero items, zero blocks, zero loot. Pure code library (Fuzs framework).

- LEAVE — genuine zero-content code library. No items, no methods, no loot. Sanctioned support role; no weave possible or needed.

## bookshelf   [anchors: support (library/API) (1)]

Zero items, zero blocks, zero loot. Library (Darkhax). One notable data feature: durability-damaging recipe type — but this is a framework hook for other mods to use, not a surface this mod exposes to a player.

- LEAVE — genuine zero-content code library. Sanctioned support role; no weave possible or needed.

## bigsignwriter   [anchors: support (client UI/decoration aid) (1)]

Zero items, zero blocks, zero loot. Client-side sign text UI.

- LEAVE — genuine zero-content client UI mod (sign large-text helper). No material surface; sanctioned support role.

## balm   [anchors: support (library) (1)]

Zero blocks, zero items, loot=no. Multi-loader abstraction library (BlayTheNinth). The 5 c:tags (nuggets/gold, nuggets/iron) are scaffolding, not new content.

- LEAVE — genuine zero-content code library (balm loader-abstraction library). Sanctioned support role; no weave possible or needed.

## aileron   [anchors: aeronautics (1)]

**Method-pull pass:**
- 0 items, 0 blocks under its ns. Loot=yes (flight-related loot injected into tables). Mechanic: reworks Elytra physics + new Elytra enchantments.
- The Elytra itself is vanilla; Aileron's enchants are the only new content surface.
- M-10 (arcane infusion pull): if Aileron's Elytra enchantments are data-accessible to Ars Nouveau's Enchanting Apparatus, a magic specialist could apply them — tying personal flight to the magic route. An aeronaut who needs a mage to unlock the best flight enchants is a coherent specialisation link. Red-team: Ars Nouveau already handles generic enchantment application; there's no obvious reason the Apparatus couldn't apply Aileron enchants, but this requires Phase 3 verification that those enchants are not blacklisted. Tone: not a clash — magic enabling flight is thematically resonant.
- M-33 (service-for-hire): the above naturally creates a service pattern (magic specialist enchants Elytras for pilots) but that is emergent from the M-10 recipe weave, not a separate authored weave.
- M-26 (consumption): vanilla Elytra durability wear is not Aileron-specific; no new sink to author.
- The dossier calls the magic enchanting link weak ("WEAK, M-10-adjacent"). I disagree that it's weaker than acceptable — aeronautics↔magic is exactly the kind of cross-system join that earns a second anchor. ACCEPT at medium confidence, contingent on Phase 3 confirming enchant accessibility.

- from: Aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a mage infuses the Elytra with Aileron's flight enchants at the Enchanting Apparatus — the aeronaut needs a magic specialist to unlock peak glide performance, tying personal flight to the magic production route.
- from: Aileron enchants | via: bare "magic improves elytra" (no specific method) | to: magic | motif: no-motif | verdict: REJECT | reason: without a specific method-routing, this is thematic adjacency not a weave; the ACCEPT above covers the coherent form.
- from: worn-out enchanted Elytra | via: durability wear → repair service | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: vanilla Mending/anvil already handles Elytra repair; Aileron adds no new repair surface. Thin.

## betterbiomereblend   [anchors: support (performance/client) (1)]

Zero blocks, zero items, loot=no. Client-side render optimization only.

- LEAVE — genuine zero-content client performance mod. No material surface; sanctioned support role.

## trek-b0.6.1.1   [anchors: survival (1)]

**Method-pull pass:**
- 0 items, 0 blocks. Loot=yes — 150+ custom structures with chest loot tables.
- The briefing is explicit: a structure mod with loot=yes is NOT a LEAVE candidate — the correct move is loot-seed (via: loot-seed), a Phase 3 datapack edit that seeds relevant drops into the loot tables.
- What loop-relevant materials could be seeded? Structures span multiple biomes (jungle, taiga, ocean, savanna, etc.) — biome-keyed drops make sense thematically. Possible seeds:
  - M-02 (mob-drop reagent sink): seeding an isolated mob-drop or rare regional material as a structure-chest find, giving magic reagents an exploration-acquisition path alongside mob farming. E.g. a jungle pyramid chest might hold a rare magic ingredient normally only mob-dropped; this widens the survival↔magic link.
  - M-08 (player-minted currency): seeding a small quantity of Numismatics coins (or the metals that get minted into coins) as rare structure loot. Red-team: this creates a non-player-created coin source, which edges toward the retired M-14 NPC faucet concern. However, M-08 is about *minting* not finding — finding the raw metal that gets minted is fine; the player still has to process it through Create to coin it. ACCEPT with the caveat that we seed the raw metal/ore, not pre-minted coin.
  - M-15 (boss-key unlock): a mid-tier structure could hold a rare material that acts as a boss-key ingredient — "find X in a Trek ruin to unlock Y recipe." Red-team: Trek structures are common (150+ types, weighted spawn), so they aren't appropriately rare for boss-key status; this doesn't fit M-15's intent. REJECT.
  - M-34 (combat-route supply): structures with hostile mob spawners/guarded chests create exploration danger, and the loot (once seeded with magic/Create materials) would be farmed by combat specialists to sell to non-combat players. This is largely emergent from the loot-seed rather than a separately authored weave — folded into M-02/M-08 seeds.
- The strongest single loot-seed candidate: seed magic reagents (M-02) into biome-appropriate structure chests, giving exploration a direct magic-supply role and earning survival↔magic as the second anchor. This is the lowest-friction Phase 3 action (a datapack loot-table add).

- from: Trek structure chest loot | via: loot-seed (datapack edit — add magic reagents as rare structure finds) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a shaman's camp in a jungle ruins holds a rare spirit-fire reagent — exploration is now a route into the magic supply chain, not just XP.
- from: Trek structure chest loot | via: loot-seed (seed raw regional scarcity metals, not minted coin) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a buried strongroom holds a shard of the region's scarce ore — explorers scout ahead and bring back raw metal that the colony mints; exploration feeds the currency supply chain without bypassing the mint step.
- from: Trek structure chest loot | via: loot-seed (boss-key material) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: Trek structures spawn frequently (150+ types, weighted common) — not rare enough to hold boss-key items; M-15 requires a genuinely rare/hard-to-reach source to function as a gate.
- from: Trek structures | via: exploration danger driving gear demand | to: survival (inherent) | motif: (survival anchor is already established) | verdict: OK — existing survival anchor is sound (exploration / world variety).

## modulargolems   [anchors: create (1)]

**Method-pull pass:**
- Registered methods: modulargolems:golem_add_slot, modulargolems:golem_assemble, modulargolems:golem_replace_part. Already uses create:crushing, create:mechanical_crafting, create:sequenced_assembly.
- 308 items (golem parts, upgrade templates, boss-metal variants); 1 block (golem_workbench); loot=yes.
- Existing Create anchor is well-grounded (golem assembly is Create-gated). Current 1-anchor state.
- M-02 (mob-drop reagent sink): the dossier's own strongest candidate. Dragonsteel (Ice&Fire), cursium (Cataclysm), and Mowzie's Mobs metals are already in the item sample — these are boss-drop metals that feed the golem assembly. Gating the best golem bodies (dragonsteel/cursium) behind those boss metals makes combat progression a prerequisite for top-tier automatons. This is exactly M-02's "an isolated mob/boss drop is given a use as a magic/economy input" — except here the consuming method is golem_assemble, and the beneficiary system is survival (combat/danger pressure feeds into a Create-adjacent construct route). Actually this lands at survival↔Create intersection: the boss (survival/danger) feeds the golem (Create automation). I'll tag this Create+survival because the boss-drop metals gate the Create-assembled product.
- M-10/M-11 (magic route): routing an Ars source gem or Occultism material into a golem-core upgrade. The dossier flags this as weak. Let me red-team: golemancy is industrially themed; adding a magic-reagent upgrade slot isn't incoherent (a "spirit core" upgrade powered by source) — Golem Scribes in Ars Nouveau already exist thematically. However, the golem_replace_part method and the upgrade-slot mechanic are specific to modulargolems' own workbench, not an Ars ritual or Occultism spirit method. A weave here would require *authoring* a recipe that accepts a magic material in golem_assemble / golem_add_slot. That's coherent, but is it the strongest use of a magic reagent? Weak compared to M-02.
- M-15 (boss-key unlock): the golem workbench assembly itself could be gated behind a specific boss drop (e.g. require a Cataclysm component in the sequenced_assembly chain to unlock endgame golem variants). This is already partially implied by the boss-metal bodies — the highest-tier bodies ARE boss-metal gated. The formal M-15 framing would be: a specific boss drop is a *required input* to the golem_assemble recipe for the top tier. Red-team: modulargolems items already use create:sequenced_assembly, and the boss metals are already cross-mod inputs. This is M-15 applied to an already-existing design pattern — a strong ACCEPT.
- M-28 (colony route): could a MineColonies research unlock a cheaper golem assembly path? Plausible but no direct method hook — would require a config or KubeJS recipe edit on the colony side.

- from: Cataclysm/Ice&Fire/Mowzie's boss-metal parts (cursium, dragonsteel, etc.) | via: modulargolems:golem_assemble / create:sequenced_assembly | to: survival | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dragonsteel golem requires smelting the Ice&Fire boss's signature metal — the combat specialist who farms that boss becomes the supplier for the Create engineer who builds top-tier automatons; danger directly gates automation power.
- from: Cataclysm/boss drop | via: modulargolems:golem_assemble (boss drop as required ingredient for endgame golem body, explicit M-15 lock) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the endgame golem body requires a fragment of the Harbinger's core — you need a fighter before you can field the most powerful constructs; boss progression gates the automation ceiling.
- from: Ars source gem / Occultism otherstone | via: modulargolems:golem_add_slot (magic upgrade slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the tone is thematically coherent but the method is the golem's own workbench — forcing a magic-reagent slot onto an industrial construct is a somewhat arbitrary edge; M-02/M-15 already give the mod strong multi-system links via the more natural boss-metal path. Don't add a magic tie just to hit two anchors when the survival ties are stronger.
- REWORK: none needed — existing Create anchor is sound and the accepted candidates above add survival as a clean second anchor.

## platform   [anchors: support (library/API) (1)]

Zero blocks, zero items, loot=no. Cross-platform library (ItsBlackGear).

- LEAVE — genuine zero-content code library (platform / ItsBlackGear). Sanctioned support role; no weave possible or needed.

## mcwdoors   [anchors: support (decoration palette) (1)]

**Method-pull pass:**
- 246 blocks, 260 items, loot=yes. Crafted from planks/iron/glass. Dossier already flags M-04 (crushing metal variants) as the only coherent option, noted "WEAK, plus not necessity."
- Probing further: the set includes "modern," "western," "mystic," "nether," "japanese" styles — wide aesthetic range but all functionally passive deco.
- M-04 on iron/metal variants: iron door variants (the "modern" style and other iron-containing doors) crush back to iron nuggets + XP nugget. This is the natural M-04 application and is consistent with the pack-wide deco-metal crushing pass.
- Economy angle: "bespoke door" as a trade good? Bare sellable, retired M-09. REJECT.
- M-28 (colony route): gating specific door types as colony building materials is plausible in theory but MineColonies building schematics are not easily re-targeted to mod doors without deep config work. Thin.
- M-29/magic angle: adding magic reagents to nether/mystic door recipes would violate the basic-component cost rule. REJECT.
- Dossier's own judgment (decoration is a sanctioned support anchor; M-04 if doing the wholesale pass) confirmed.

- from: iron/metal-containing door variants (modern-style and iron-framed) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: an unused iron modern door crushes back to iron nuggets and scrap — keeps the entire deco-metal family in the same lossy recycling loop; to be done in the same wholesale M-04 deco pass as copycats and other metal deco.
- from: any mcwdoors door variant | via: bare sell / economy counter | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: bare sellable (retired M-09); no demand-gating; decoration is the ambient loop endpoint.
- from: nether/mystic door variants | via: crafting requiring magic reagent | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: gating a cosmetic door variant behind a magic reagent violates the basic-component cost rule (depth scales with power — a deco door is everyday, not endgame); no coherent motif.

## vinery   [anchors: survival (1)]

**Method-pull pass:**
- 139 blocks, 168 items, loot=yes. Registered methods: vinery:apple_fermenting, vinery:apple_mashing, vinery:wine_fermentation. These are first-class method surfaces.
- Dossier candidates: (a) economy — wines/ciders as luxury trade goods [labelled M-09, which is RETIRED]; (b) Create — route grapes/apples through create:milling or create:pressing [M-12].
- The dossier's economy candidate invokes M-09. Under the player-run rework M-09 is retired. Does a real demand-gating framing work instead?
  - M-26 (consumption): wines are effect-bearing consumables — they're *spent* against survival pressure (effects like haste, resistance). Every bottle consumed renews demand. This is M-26 — the consumption sink that closes the loop. "Wine is drunk, not stockpiled" is exactly what M-26 captures. ACCEPT.
  - M-35 (maturation/aging): vinery:wine_fermentation and the in-world bottle aging mechanic (bottles sit for "years" to gain strength) are directly M-35 — "a good must sit under the right conditions to gain value." Vinery is literally listed in M-35's seed list ("vinery ferment"). This is a strong second anchor: a winemaker specialises in time-gated goods, creating a natural trade niche (you can't rush good wine). ACCEPT.
  - M-12 (processing-chain pull): route grapes/apples through create:pressing or create:milling into juice/mash, then feed that into vinery:wine_fermentation. This adds a Create-processing step upstream of the fermentation chain, tying the winery to the Create spine. Red-team: does this make sense? A mechanical grape press (create:pressing) outputting juice that feeds the barrel is industrially coherent. Tone OK. M-12 is "processing-chain pull, if it makes sense" — it does here. ACCEPT.
  - M-16 (seasonal reagent): grapevines grow by biome/climate; Serene Seasons would make certain grape varieties only cultivatable in summer, making seasonal supply a constraint. This is a natural M-16 link: seasonal grape availability feeds the winery and pressures supply. ACCEPT — and the dossier notes climate-keyed growth already.
  - M-08: wine as a luxury item sold for player-minted coin? Bare sellable + M-08 framing = the coin is the settlement medium not the source of demand. The *demand* is M-26 (consumed) and M-35 (aging specialty). M-08 could frame the *transaction* (sold for coin), but the demand-gating is already captured by M-26/M-35. Don't double-count; skip M-08 for vinery.
  - M-28 (colony route): a MineColonies Tavern or Inn could require wine as an upkeep/happiness item — colony workers consuming wine is a colony-demand sink. This is plausible but requires a Phase 3 config/KubeJS edit on the colony side.

- from: vinery:wine_fermentation (barrel aging, time-gated) | via: vinery:wine_fermentation (the aging mechanic itself) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: aged wine takes game-days to mature — the winemaker is naturally a time-specialist producing luxury goods nobody else can rush; a dedicated vintner trades finished wines other players can't stockpile fast.
- from: vinery wine/cider (effect-bearing consumables) | via: consumption (drunk against survival pressure) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: every bottle of Aegis Wine drunk renews demand — wines are spent against dangerous encounters and hunger pressure, so production can never outpace need; creates a steady repeat-purchase loop.
- from: grapes / apples / cherry | via: create:pressing or create:milling → juice/mash as upstream input to vinery:wine_fermentation | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mechanical press squeezes bulk grapes into juice before the barrel — a Create engineer running a press-and-ferment line can mass-produce wine input, tying the winery's throughput to the Create spine.
- from: seasonal grape varieties | via: Serene Seasons crop-availability gate → vinery cultivation | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain grape cultivars only fruit in summer — the winery's seasonal supply naturally creates a "lay in stock before winter" pressure and a trade window when demand peaks and supply bottlenecks.
- from: vinery wine as trade good | via: bare sell / economy counter | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: "wines are sellable luxury goods" is the retired M-09 ambient endpoint; the real demand-gating is M-26 (consumption) + M-35 (aging specialty); don't add a bare-sell link when those two already anchor the economy connection.
- REWORK: existing survival anchor is sound (food/drink + farming chain). The M-35/M-26/M-12/M-16 candidates above would bring vinery to a strong 3-system web (survival × economy × create).

## ding   [anchors: support (client QoL) (1)]

Zero items, zero blocks, zero loot. Client-side load-sound mod.

- LEAVE — genuine zero-content client QoL mod (audio notification on world load). No material surface; sanctioned support role.

## cubes_without_borders   [anchors: support (client QoL) (1)]

Zero items, zero blocks, zero loot. Client-side borderless window option.

- LEAVE — genuine zero-content client QoL mod (borderless fullscreen). No material surface; sanctioned support role.

## betteroceanmonuments   [anchors: survival (1)]

**Method-pull pass:**
- 0 items, 0 blocks. Loot=yes — expands ocean monuments with new rooms, secrets, and chest loot.
- The briefing is explicit: a structure mod with loot=yes is NOT a LEAVE candidate unless there is truly nothing to seed. Let me evaluate.
- Ocean monument context: the vanilla monument is a mid-game aquatic dungeon. YUNG's overhaul adds more rooms and more chest loot. The existing loot tables are the only data hook.
- M-02 (mob-drop reagent sink, via: loot-seed): seeding magic reagents into monument chests makes deep-sea exploration a route to magic ingredients. Guardian farms are already a known monument activity; turning the improved monument into a route to Ars/Occultism supply is thematically coherent (ocean = ancient/mystical).
- M-08 (via: loot-seed, raw scarcity metal): seeding a rare deep-sea metal fragment (e.g. a raw ore or processing material that's scarce by region — think copper/zinc byproducts in ocean floor chests) gives explorers a reason to raid the monument beyond vanilla prismarine. The player still has to mint/process it.
- M-15 (boss-key via: loot-seed): the Elder Guardian is the monument's boss. Could its loot table (via YUNG's expansion chests) hold a boss-key item for a mid-tier recipe? M-15 requires a genuinely rare source — the Elder Guardian is mid-tier boss territory, rare per-world. ACCEPT — a boss-key fragment in the deepest monument vault room is coherent.
- Red-team M-15 for betteroceanmonuments: YUNG's overhaul is specifically chosen for its loot, so the monument's "secret room" is a natural place for a boss-key item. The Elder Guardian already has a boss-fight precedent. Unlike Trek structures (common, weighted spawn), ocean monuments spawn once per ocean biome — genuinely limited. The key concern is whether YUNG's overhaul's specific rooms are distinct enough to hold a single high-tier item versus Trek's broad spread. ACCEPT at medium confidence.

- from: betteroceanmonuments chest loot | via: loot-seed (add magic reagents as monument rewards) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the monument's inner sanctum holds a condensed spirit-fire material — a guardian-farming diver can supply the magic specialist with rare oceanic reagents, putting the sea dungeon on the magic supply chain.
- from: betteroceanmonuments deepest-room loot | via: loot-seed (boss-key fragment) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Elder Guardian's vault holds a crystallised pressure-conduit fragment gating a high-tier Create hydraulic recipe — clearing the monument once is the price of entry to that tech tier.
- from: betteroceanmonuments chest loot | via: loot-seed (raw scarcity metal shard) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: deep-sea chests hold a fragment of a region-scarce ore — explorers who risk the monument bring back raw material that the coin-minter processes into currency; ocean raids feed the supply of mintable metal.
- OK — survival anchor is sound (aquatic exploration, world-feel).

## bettermodsbutton   [anchors: support (client UI) (1)]

Zero items, zero blocks, zero loot. Client-side pause-menu mods button.

- LEAVE — genuine zero-content client UI mod (pause-screen mods button). No material surface; sanctioned support role.

== CHUNK COMPLETE ==
