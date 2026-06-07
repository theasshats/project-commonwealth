# Phase 2 candidates — chunk-02

## create_better_villagers   [anchors: create, economy (2)]
- from: emerald-denominated Create-parts trades | via: numismatics coin re-denomination | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Brass/Copper/Andesite Workers already trade Create parts — re-denominate their prices to Numismatics coins so the pack's own currency circulates through the settlement trade loop instead of vanilla emeralds
- from: Miner profession (buys raw andesite/copper/brass) | via: villager trade → numismatics payout | to: economy | motif: M-21 (provisional motif) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; the M-08 coin re-denomination already covers the economy hook — a second provisional trade-seam edge adds nothing over the first accept
OK — connections sound (create + economy is the correct 2-pillar read; coin re-denomination is the natural deepen, no weaker existing links to flag)

## simplehats   [anchors: support (1)]
- from: rare hat (duplicate/unwanted) | via: loot-seed into boss/raid loot tables | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare hat grab-bags seeded into raid/boss chests give Bounty Board rewards a cosmetic vanity layer — loot that has no stats but players actually want, feeding the bounty-coin loop with something collectible
- from: rare hats | via: numismatics sell (luxury cosmetic good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare hat tier (e.g. the amalgalich or boss-themed hat) can be priced on a Trading Floor stall — cosmetic vanity goods with real coin value, giving the economy a harmless but desirable vanity sink
- from: duplicate hats → hat-scraps | via: simplehats:custom_hatscraps → ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: hat-scraps are whimsical clothing fragments; feeding them into arcane infusion is a tone clash (silly → solemn), and the material has no thematic resonance with Ars reagents — forced edge

## configuration   [anchors: support/library (1)]
- LEAVE — pure code library (config-screen API, Fzzy-family dependency); zero blocks/items/methods; nothing to weave

## pantographsandwires   [anchors: create, aeronautics (2)]
- from: coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking / create:mixing → aeronautics fuel | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: already anchored to aeronautics via the train/overhead-line infra angle; and coal_coke as a propulsion fuel competes with the diesel/gasoline reagent-ownership (M-13 reserved fuels); adding a fuel edge here would be redundant and risk double-booking the fuel slot
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:mechanical_crafting → aeronautics control surfaces (brush contact / electrical conductor) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: graphite's real-world role as an electrical contact/brush makes it the natural conductor for pantograph-to-control-surface wiring — a mid-tier mechanical component feeding the aeronautics drivetrain/control recipe the way a bearing feeds a propeller
- from: pantographsandwires overhead-line infrastructure | via: loot-seed into T&T outpost/camp chests | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: overhead-line infra blocks are construction pieces, not a drop reward; seeding them into loot tables adds no causal loop value and fits no motif — forced
OK — existing Create + aeronautics anchors are sound; graphite control-surface edge (M-24) is the right deepen

## mffs   [anchors: create, survival (2)]
- from: mffs:focus_matrix (already Create-gated via electron_tube, M-05) | via: create:sequenced_assembly chain | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: dossier confirms sequenced_assembly chain is already authored (60-mffs.js, M-06 reference example) — nothing new to propose here; the endgame tier is covered
- from: mffs force-field zone (protects colony from raids) | via: minecolonies colony research gate → mffs:projector unlock | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a colony that researches "fortress protocol" unlocks the right to requisition a Force Field Projector — turns the MineColonies tech tree into the progression gate for endgame base-defense, routing the boss-drop/colony path through the survival defense arc
- from: mffs:coercion_deriver (Fortron generator) | via: createaddition:charging (FE bridge) | to: create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: Fortron is MFFS's own energy system, not FE — the createaddition:charging bridge charges FE items, not Fortron capacitors; the energy systems are incompatible without a dedicated compat layer that doesn't exist in the pack
OK — create + survival anchors are sound; the authored M-05/M-06 weaves are the gold standard the briefing names them as; colony-gate unlock (M-15 flavored) is the natural 3rd touch

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / alpine cheese variants | via: numismatics sell (luxury food good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hand-pressed cheese wheels are the kind of high-effort, regional specialty that a player specializing in alpine farming naturally wants to sell — a real luxury trade good with production depth behind it
- from: meadow:alpine_salt | via: create:milling (salt ore crushed to crystal salt) → farmersdelight:cooking as seasoning ingredient | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running alpine salt ore through the Create millstone produces table salt that seasons Farmers Delight dishes — one light step, zero depth penalty for a basic ingredient, and it ties the alpine biome into the Create spine without overengineering
- from: meadow:chambray_wool (felted wool textile) | via: ars_nouveau:imbuement (attune the felted cloth with a source gem) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: feltwork is peasant agrarian craft; arcane infusion of wool cloth has no thematic anchor in Ars Nouveau (which works with source crystals and essence glyphs, not textiles) — the pairing reads as arbitrary rather than coherent
- from: meadow:alpine_poppy / herbs (seasonal alpine crops) | via: season-gated input → create:mixing (herbal extract) | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine flowers only bloom in spring/summer (Serene Seasons biome lock) — harvesting them in season and running through Create's mixer to produce a floral extract creates a seasonal supply-pressure that drives trade for the extract
- from: meadow cheese / alpine meals | via: minecolonies:blockhutcook request (colony food supply) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-12 covers processing-chain pull, not colony-demand routing; the minecolonies food-category c:tags already pull vanilla/generic foods, and this edge doesn't route a material THROUGH a method — it's a config-slot assignment, not a new weave; the economy M-09 accept covers the output side cleanly

## collective   [anchors: support/library (1)]
- LEAVE — pure shared-code library (Serilum-family event hooks); zero blocks/items/methods; nothing to weave

## durabilitytooltip   [anchors: support/client QoL (1)]
- LEAVE — client-side tooltip UI overlay; zero blocks/items/methods; no gameplay surface to weave

## t_and_t   [anchors: survival (1)]
- from: conquerable outpost/fort loot chests | via: loot-seed (Numismatics coin drops into T&T chest loot tables) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing a T&T pillager camp already rewards the effort of raiding it — seeding Numismatics coins into the fort loot tables ties combat victories directly to the pack's currency and makes exploration a supply route for the economy loop
- from: T&T sail-ship wreck chests | via: loot-seed (nautical trade goods / coin pouch into shipwreck loot) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a wrecked trade ship is exactly the kind of place a player expects to find lost coin; seeding coin pouches or sellable goods (spices, cloth) into shipwreck chests makes ocean exploration part of the bounty/economy loop
- from: T&T 16 biome village variants (populated NPCs) | via: villager trade → numismatics payout | to: economy | motif: M-21 (provisional motif) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; the loot-seed coin drops (accepted above) already bridge survival→economy for this mod without needing the provisional trade-seam; don't stack provisional edges
- from: T&T structures (varied biome villages) | via: minecolonies colony-expansion flavor (settlements visually reinforce the colony progression) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: this is a visual/thematic observation, not a method-routing weave; it fits no motif and produces no causal edge in the loop

## resourcefullib   [anchors: support/library (1)]
- LEAVE — pure cross-platform API library (Team Resourceful); zero blocks/items/methods; nothing to weave
