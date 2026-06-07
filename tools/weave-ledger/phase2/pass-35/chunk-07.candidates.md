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

- LEAVE — genuine zero-content code library. Sanctioned support role; no weave possible or needed.

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

