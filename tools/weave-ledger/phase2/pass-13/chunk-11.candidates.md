# Phase 2 candidates — chunk-11

## minecolonies_compatibility   [anchors: survival, Create (2)]
- REWORK: existing anchors (survival + Create-via-stock-link) are both genuine and tight — no rework needed.
- from: colony Courier logistics ↔ Create Stock Link | via: minecolonies worker job (non-recipe) | to: Create | motif: M-05 (colony worker as native-method operator) | power: mid | tone: ok | verdict: ACCEPT | hook: the Courier already talks to Create Stock Link storage — formalise the supply-chain relationship so colony production is a first-class node in the Create logistics web
- from: colony Butcher job / carcass output | via: minecolonies:zero_waste (composting) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: zero_waste feeds composting, not coin minting; no direct path to Numismatics without a separate sell step — edge is too indirect to be ACCEPT-grade; would need a dedicated trade table or bounty
- from: colony worker production (colony-grown crops, processed meals) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony running Orchardist/Cook/Farmer workers becomes a passive luxury-goods generator — produce gets consigned at the market stall for coin, making the colony a node in the pack economy, not a silo
- from: minecolonies_compatibility TaCZ Gunner job | via: tacz:gun_smith_table_crafting | to: Create/aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT (no-motif) | reason: the Gunner job is TaCZ combat integration; it touches neither Create processing nor aeronautics drivetrain — no approved motif covers combat-job-as-weave; flag for Gate 0 if desired

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero item surface; the mod IS a magic↔magic internal weave (Ars ↔ Iron's mana unification). Forcing a Create/economy edge onto a mana-bridge with no items would be arbitrary. No coherent second pillar available.

## modelfix   [anchors: support (1)]
- LEAVE — pure client-side rendering bugfix; no items, no blocks, no recipe surface. Code library / support role.

## yet_another_config_lib_v3   [anchors: support (1)]
- LEAVE — config-screen API library; no gameplay content, no item surface. Code library / support role.

## modonomicon   [anchors: support (1)]
- LEAVE — data-driven guidebook framework; no material I/O, no recipe methods. The book items (modonomicon:modonomicon_*) are purely functional UI objects. Forcing a recipe route through them (e.g. unlock-gating) is no-motif and would feel arbitrary. Code/content library role.

## byzantine   [anchors: survival (1)]
- LEAVE — pure MineColonies schematic/style pack; ships no blocks or items of its own, only building blueprints the colony Builder constructs. Its only weave surface is MineColonies itself, which is already the survival pillar. A second pillar would require attaching meaning to "build a Byzantine dome" in Create/magic/economy terms — sensible in principle (M-05-style colony unlock), but that edge belongs on MineColonies core, not on this style pack. Don't force.

## supplementaries   [anchors: Create, survival (2)]
- OK — connections sound. Already woven into Create (haunting/mixing/splashing) and survival/food (Farmer's Delight cutting, flax crop, ash/soap). Deeply integrated connector mod.
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: ash is a Create/haunting byproduct that could attune into a minor purification catalyst in Ars — players burning things get a free magic input, grounding the arcane in common industrial residue
- from: supplementaries:jar (fluid storage) + faucet | via: create:filling / create:emptying | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: jar/faucet already interop with Create fluid logic at the gameplay layer — a formal recipe edge here is redundant, not additive; the functional connection already exists
- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling flax into linen fiber / flaxseed oil pulls the crop into the Create processing chain (linen → rope or pressed oil → a food/lubrication intermediate) — one light step, everyday tier, sensible
- from: supplementaries:soap (c:storage_blocks/soap) | via: create:splashing | to: Create | motif: M-04 (recycling/cleansing variant) | power: everyday | tone: ok | verdict: REJECT | reason: splashing already produces soap (it IS an existing inbound weave per dossier) — proposing it again is circular; already authored
- from: supplementaries:cannon (cannonball launch) | via: createbigcannons munition methods | to: aeronautics (armament) | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: Supplementaries' cannon is a decorative/fun vanilla+ toy; routing it into Create Big Cannons' industrial munition system would be a tone clash (tiny deco cannon ≠ naval artillery) and there's no approved motif for armament integration at deco scale

## better_climbing   [anchors: support (1)]
- LEAVE — pure client movement-feel tweak; no items, no blocks, no recipe surface. QoL support role.

## chefsdelight   [anchors: survival, economy (2)]
- OK — connections sound. Cook/Chef villagers bridge food survival into the economy pillar through trades.
- from: Cook / Chef villager trades | via: numismatics sell (M-21 trade-seam) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: replacing emerald trades with Numismatics coin payments routes the village food economy into the pack's player-run currency — Cook and Chef become real economic actors, not vanilla emerald dispensers; tag provisional pending M-21 maintainer review
- from: Farmer's Delight feasts sold by Chef | via: numismatics:luxury pricing | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Roast Chicken or Honey Glazed Ham sold by the colony Chef is a high-effort luxury good — pricing it in coin (not emeralds) makes feast cooking a genuine economy play (produce → cook → sell → coin loop)
- from: Chef/Cook workstation (Cooking Pot / Skillet) | via: minecolonies worker job | to: survival (colony) | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the minecolonies_compatibility mod already handles FD/Cook integration via its Butcher job bridge; adding an explicit M-05 edge here is redundant with that existing weave — the colony side is covered

== CHUNK COMPLETE ==
