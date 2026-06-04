# Phase 2 candidates — chunk-24

## configuration   [anchors: support/library (1)]
- LEAVE — pure config-screen library; zero items, zero methods, zero content surface. Nothing to weave.

## create   [anchors: Create (1)]
- LEAVE — Create IS the method hub (all M-03/M-04/M-06/M-08/M-12/M-19/M-20 ride its methods). It does not need a 2nd pillar; it IS the connective spine. Proposing inbound weaves to Create from other mods is the entire point of phase 2 — that work belongs on those mods, not here.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry seafood dishes (chowder, lobster soup, steaks) | via: numismatics sell/price table | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a dedicated fisher who runs bait traps and the peeler all day can sell cooked lobster and chowder as premium trade goods — the maritime specialization earns coin without needing to mine.
- from: createfisheryindustry:fish_skin | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: fish skin as a magic reagent is tonally weak — it's a mundane leather-substitute; nothing about it calls to arcane infusion, and gating a basic material substitute behind imbuement violates M-10's no-basic-components rule.
- from: createfisheryindustry:fish_skin | via: create:milling or farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fish_skin is already outputs of the peeling step (the mod's own method); a second Create milling step on it is redundant and adds no real web edge — it stays in the Create pillar it already anchors.
- REWORK: existing connections sound — Create (bait_trap + peeling machines) and survival (seafood food/tools) are both genuine; the M-09 economy candidate above is the natural 3rd edge, but the 2-pillar base is clean. No rework needed.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure-overhaul only; zero registered items/blocks, loot=no. Nothing to weave.

## create_central_kitchen   [anchors: Create, survival (2)]
- from: automated finished feast output (e.g. sequenced-assembly sandwiches/pies produced at scale) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: players who invest in a full Create kitchen contraption can sell mass-produced feast dishes as premium goods — automation unlocks the luxury trade tier.
- from: create_central_kitchen Blaze Stove (blaze as cooking-speed amplifier) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: the Blaze Stove is a physical contraption block, not a consumable material — routing a block into a ritual method is thematically forced and the mod exposes no item output that acts as a magic catalyst.
- REWORK: no rework needed — Create + survival is a tight and coherent 2-pillar foundation; the M-09 economy candidate above extends it naturally. The mod is a thin integration-bridge (no items/blocks of its own), so connections are necessarily recipe-layer weaves, not mechanical ones.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure-overhaul only; zero items, zero methods, loot=no (vanilla mineshaft loot passes through unchanged). No content surface to weave.

## accelerateddecay   [anchors: support (1)]
- LEAVE — pure performance mod (replaces leaf-decay tick logic); zero items, zero methods, no player-facing surface. Nothing to weave.

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats rare hats (rarer grab-bag drops) | via: numismatics sell/trade table | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare cosmetic hats become luxury vanity goods a player can buy or sell for coin — gives the coin economy a collectible/cosmetic sink and rewards the mob-farming loop that produces grab-bags.
- from: simplehats grab-bag scraps | via: occultism:spirit_trade | to: magic | motif: M-18 | power: everyday | tone: clash | verdict: REJECT | reason: hat scraps routed through spirit-trade is tonally absurd — spirits trading cosmetic fabric bits has no lore logic, and scraps are a low-value recycling material, not a magic acquisition target.
- from: simplehats:hatscraps (recycled hat scraps) | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: hat scraps are cosmetic-only material; M-04 is for metal/stone deco blocks. Milling cloth-scraps for a raw material return is a stretch and adds noise, not a real web edge. The mod's closed cosmetic economy doesn't invite a Create recycling route.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, honey_cocktail, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a beach-bar entrepreneur mixes cocktails at the Palm Bar and sells them as luxury drinks — tropical specialization earns coin through food tourism, not mining.
- from: beachparty:mini_fridge ice output | via: create:mixing (cooling chain) or create:compacting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mini Fridge produces bulk ice/packed ice with no power cost — that ice feeds Create's cold-mixing and chilling recipes as a cheap cold-material input, making the beach mod a useful early-game cold-source for Create automation.
- from: beachparty:coconut (open coconut / coconut meat) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: coconut as a milled intermediate is not wrong on its own, but the mod's palm_bar_mixing already handles coconut → cocktail; a parallel Create milling path competes with the mod's native method and adds marginal value. The ice candidate above is a cleaner Create hook.
- REWORK: survival-only anchor is accurate; the two ACCEPT candidates (M-09 + M-12) are the natural 2nd-pillar lifts. No rework of existing connections needed (there are none beyond vanilla).

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable-book item; no mechanics, no methods, no material output. Any recipe edge would be gag noise, not a real web connection.

== CHUNK COMPLETE ==
