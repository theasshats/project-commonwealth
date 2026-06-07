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

