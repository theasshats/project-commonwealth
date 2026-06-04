# Phase 2 candidates — chunk-04

## openpartiesandclaims   [anchors: support (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no, no recipe methods. Pure chunk-claim + party permission framework; nothing to route.

## towntalk   [anchors: support (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no. Audio flavor layer for MineColonies (colonist voice barks); no item/method surface to weave.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit (ore) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the haunted ore that drops off undead knights gets doubled in the Crushing Wheels — danger pays in material if you can run the machine
- from: born_in_chaos_v1:bundle_of_bones (mob drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: chaos-cursed bone bundles feed the spirit flame as a necromantic input — thematically a direct read
- from: born_in_chaos_v1:dark_metal_block / armor_plate_from_dark_metal (boss/rare drop) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the danger loop has a coin reward — kill the undead, turn in the metal, the economy feels the war
- from: born_in_chaos_v1:pumpkin_staff / soul_saber (boss-drop weapon) | via: gated Create recipe (boss drop as input key) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: dark_metal is already the Create bridge via M-03; making the boss weapon itself a recipe component is redundant and over-gates boss gear — the soul weapon is the reward, not the toll
- from: born_in_chaos_v1:bagof_candy (seasonal drop, Oct 25 – Nov 5) | via: season-gated input → ars_nouveau:imbuement | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Halloween-only candy is a seasonal catalyst for an imbuement recipe — magic that only works during the haunting window
- from: born_in_chaos_v1:black_argillite (deco stone) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is already satisfied by dark_metal_deposit via M-03; adding a separate crushing path for the pure deco stone (argillite) adds noise without a player-payoff — the stone's value is as a build material, not crushed dust
- OK — no existing cross-pillar connections to rework; all current links are within survival.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface client mod: 0 blocks, 0 items, loot=no. Pure client-side zoom/overlay behavior on the vanilla spyglass; no item or method surface to route.

## createfurnitureseats   [anchors: support + aeronautics (2)]
- LEAVE — zero-surface compat/behavior mod: 0 blocks, 0 items, loot=no. Registers foreign furniture as Create seats; no material join surface. Already touches aeronautics (sittable furniture on ships); forcing additional edges would be meaningless.

## revelationary   [anchors: support (1)]
- LEAVE — genuine zero-surface library: 0 blocks, 0 items, loot=no, no recipe methods. Pure progression-gating API; its downstream effect (hiding Occultism blocks behind advancements) is owned by the consuming mods, not this one.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* (wool+string item, 16 colors) | via: numismatics sell (trade-seam) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); a dyed sleeping bag as a trade good adds zero thematic signal — too generic to surface for review
- from: comforts:hammock_* (day-skip block) | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: clash | verdict: REJECT | reason: applying a Create part onto a hammock has no coherent narrative — the hammock is a simple dyed-cloth item; forcing a deployer step is noise with no player-legible hook
- LEAVE — comforts stays survival (1). Its items are too generic (dyed wool shapes) and too basic to anchor a second pillar without a forced edge. The dossier's own conclusion stands.

## opacpvp   [anchors: support (1)]
- LEAVE — genuine zero-surface behavior mod: 0 blocks, 0 items, loot=no. Tiny PvP-rules addon for Open Parties & Claims (/opacpvp toggle); no material surface to route.

## copycats   [anchors: Create (2)]
- from: copycats:copycat_block family (zinc-built shape containers) | via: create:item_application | to: Create (deeper) | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: copycats already lives entirely inside the Create pillar; using item_application to "apply" a skin is just describing its existing mechanic — not a cross-pillar link, and not adding a 2nd pillar
- from: copycats blank shapes (mid-tier decorative, zinc-sink) | via: numismatics sell / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: a blank copycat shape is not a "luxury good" — it's a builder component. Selling construction materials as a luxury commodity is a thematic stretch and M-09 calls for high-effort consumables; this fails the tone test
- OK — connections sound. Copycats is well-placed as a Create-anchored decoration mod (already 2-pillar-adjacent by living inside Create). No rework needed.

## azurelib   [anchors: support/library (1)]
- LEAVE — genuine zero-surface library: 1 internal utility block (lightblock), 0 items, loot=no, no recipe methods. Animation engine dependency for animated mobs (e.g. Cataclysm); no gameplay surface.

== CHUNK COMPLETE ==
