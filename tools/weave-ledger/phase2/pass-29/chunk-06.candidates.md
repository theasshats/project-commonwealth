# Phase 2 candidates — chunk-06

## modernfix   [anchors: support/performance (1)]
- LEAVE — pure JVM/loader-level performance patches; zero items, zero methods, zero content surface. Genuine zero-surface library.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — behavior-only (player-to-player food use); registers no items, no blocks, no methods. Zero content surface.

## geckolib   [anchors: support/library (1)]
- LEAVE — animation/rendering API; zero items, zero methods, zero gameplay surface.

## glitchcore   [anchors: support/library (1)]
- LEAVE — loader-abstraction library for Glitchfiend mods; zero items, zero methods.

## ohthetreesyoullgrow   [anchors: support/worldgen (1)]
- LEAVE — tree-generation framework / dependency; zero items, zero blocks, zero methods.

## jamlib   [anchors: support/library (1)]
- LEAVE — JSON5 config + platform-abstraction library; zero items, zero methods.

## kiwi   [anchors: support/library (1)]
- LEAVE — registration helpers + GUI/font utilities library; zero items, zero methods.

## l2library   [anchors: support/library (1)]
- LEAVE — LightLand mods shared API; zero items, zero methods.

## durabilitytooltip   [anchors: support/client UI (1)]
- LEAVE — client tooltip overlay only; zero items, zero blocks, zero methods.

## betterpingdisplay   [anchors: support/client UI (1)]
- LEAVE — replaces ping bars with ms numbers; purely client UI, zero content.

## moreoverlays   [anchors: support/client QoL (1)]
- LEAVE — client HUD overlays (light level, chunk grid, JEI search); zero content.

## dtterralith   [anchors: survival/worldgen (1)]
- from: dtterralith unique seeds (amethyst_seed, kapok_seed, etc.) | via: loot-seed | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 requires season-gated reagents feeding a machine/ritual; dtterralith seeds are just special sapling items with no processing hook or seasonal gate — the motif doesn't apply. Bark/log drops fold into vanilla wood economy already.
- from: dtterralith logs/saplings | via: create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the output is ordinary wood pulp/sawdust — vanilla wood from any tree already flows through create:milling. This is not a bespoke edge; it adds nothing the vanilla wood weave doesn't already cover.
- LEAVE — pure worldgen compat bridge (Terralith × Dynamic Trees); its distinctive output is ordinary vanilla wood types; no bespoke processing edge is warranted over what vanilla woods already supply.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: tweaked_lectern_controller | via: recipe (crafting) | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: it is ALREADY crafted from Create parts (precision mechanism + electron tubes). M-05 is "a mod's flagship item built in its own machine, gated on Create parts as inputs" — that describes the existing recipe; this is not a new edge, just a restatement of the current craft. The connection is already sound.
- from: tweaked_lectern_controller | via: config/signal | to: survival | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: pure control-signal device → survival has no plausible theme pairing; forced edge.
- OK — connections sound. Anchors: aeronautics + Create (crafted from Create parts). Already ≥2 effective anchors once the craft is acknowledged; no new weave warranted.

## create_mobile_packages   [anchors: create, aeronautics (2)]
- REWORK check: existing anchors (Create + aeronautics/logistics) are coherent and well-grounded. The dossier already flags economy adjacency as ambient (not a gate). No rework needed.
- from: robo_bee delivery network | via: config/event gating | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A player who specialises in Numismatics/trading can use drone ports to fulfil physical delivery of traded goods across the map — the logistics arm *gates* whether a trade can be completed at range, so it advances the economy pillar's physical-movement role (§4); cross-route because aeronautics/logistics is the distribution node in the loop.
- from: robo_bee + drone_port | via: recipe (create:mechanical_crafting) | to: create | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-24 is "mechanical component → aeronautics propulsion/control drivetrain." Robo Bees are couriers, not drivetrain parts; routing them through mechanical_crafting would be a forced cost inflation of a logistics block, not a propulsion weave. Already anchored in Create by craft anyway.
- OK — connections sound after the M-29 addition.

## createmetalwork   [anchors: create (1)]
- from: createmetalwork crushed/molten metals (any scarce regional ore) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Regional ore (e.g. platinum, runite) → Create crush+melt pipeline → player presses coin; the metalwork doubling step is the value-add that justifies minting — scarcity is the foundation, Create processing is the labour, the coin is the settlement medium. Advances the loop: scarcity → production → economy.
- from: magic-mod ore crushed forms (occultism/galosphere metals via c:crushed_raw_materials/* tags) | via: create:crushing → create:mixing | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Occultism's silver or Galosphere's palladium crushed in a Create basin doubles the yield before the magic smith smelts it; the ore-doubling reward bridges the Create spine to the magic production route without forcing a specific cross-route dependency.
- from: molten metal fluids (e.g. molten_steel, molten_brass) | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Airframe and hull blocks require cast structural alloy; createmetalwork's molten-cast pipeline is the natural supplier of the fabricated metal plate / structural casting that makes airships cost real foundry work — not just raw ingots.
- REWORK: current anchor is Create (1). All three ACCEPTs add economy + magic + aeronautics, bringing it to 4; the economy link (M-08) is the load-bearing second anchor. No existing connections to rework.

## bits_n_bobs   [anchors: create, survival (2)]
- REWORK check: dossier flags M-04 as a reinforcing candidate. Evaluate:
- from: bits_n_bobs tile/chair blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Andesite, asurine, crimsite, deepslate tile sets crush back to crushed-stone + XP nugget — lossy recycling closes the deco → Create loop so over-crafted decoration doesn't become a dead end. Standard M-04 application.
- from: bits_n_bobs nixie boards / large displays | via: recipe (crafting) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is "service-for-hire (labour)" — nixie boards are display blocks, not a labour service. Pairing them to the economy pillar via "market display" is thematically plausible but fits no accepted motif (it would be ambient decor, not demand-gating). No-motif → reject-for-review.
- OK — connections sound. Adding M-04 closes the deco-recycle loop as the natural 3rd weave for a 2-anchor mod; no existing connection rework needed.

## create_factory   [anchors: create, survival (2)]
- REWORK: dossier lists M-09 as a candidate ("assembled sweets sellable for coin"). M-09 is RETIRED. Flag:
  REWORK: dossier 2nd-anchor candidate cites M-09 (retired) — replace with demand-gating framing.
- from: create_factory sweets/waffles (finished confections) | via: bountiful decree pool | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Waffles and jam-filled rolls as bounty objectives on a Bountiful board — desserts are consumed against hunger/bounty demand, so the food loop never zeroes out; the Create confectionery chain produces goods that gate a real bounty-board demand sink rather than just sitting in a chest. Advances: production → consumption (economy closing edge).
- from: create_factory cream/jam fluids | via: create:filling → fermentation | to: survival | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Sweet-berry jam (a fluid output of the confection line) aged in a Vinery/alcohol barrel or extradelight evaporator gains value over time — a jam maturation step that creates an aging-specialist role (someone runs the jam barrel, not the press); pairs naturally with the confectionery chain's fluid outputs.
- from: create_factory sweets | via: minecolonies colony request | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: colony requesting food is ambient (any food satisfies colony hunger) — there's nothing unique about factory sweets vs. any other food for colony requests. Not a meaningful gate. Reject.
- OK — two accepts (M-26 consumption, M-35 maturation) plus rework of the M-09 stale candidate.

## ohthetreesyoullgrow — already handled above (LEAVE).

## bountiful   [anchors: economy (1)]
- REWORK: dossier 2nd-anchor candidates include M-08/M-09 mixed framing. M-09 RETIRED; M-14 CUT. Evaluate properly:
- from: bounty board reward pool | via: config (reward = numismatics:cog/spur) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bountiful's reward pool is player-configurable — setting payout to Numismatics coin means *players who complete bounties earn settlement medium*; this is a player-minted coin flow driven by in-world labour (fetching items, killing mobs), not an NPC faucet — the board pulls items from players and returns coin only when the objective is met. Advances: production/survival → economy (demand node).
- from: bounty objective pools (Decree) | via: config (objectives = pack farm/hunt outputs) | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: Decrees pointed at seasonal farm yields, fish, mob drops, or Create-processed goods turn Bountiful into a *demand gate* for survival/production output — a combat specialist farms the Invoker, a farmer raises wheat, and the bounty board bridges what they produce to what the economy rewards; M-34 (combat-route supply) when objectives are boss/mob drops.
- from: bounty board | via: config (objective = Create-processed goods or magic reagents) | to: create/magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A Decree that requires e.g. Create-milled flour or an Ars imbuement reagent forces a cross-route dependency — the player completing the bounty must engage with Create or magic production, not just raw resources; bounty board becomes a demand node that bridges pillars.
- from: bounty | via: config (reward = XP or magic items) | to: magic | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: M-37 is "research/knowledge gate — a recipe unlocked by knowledge an item can't carry." Bounty rewards are item payouts, not knowledge unlocks; a bounty paying magic items is just M-09 in disguise (ambient sell/reward). Reject.
- REWORK: anchor economy (1) → after accepts, gains survival + create/magic context; economy as primary anchor is correct and now load-bearing via M-08.

## ribbits   [anchors: survival (1)]
- from: ribbits swamp trade (Amethyst Shard sink) | via: config/KubeJS trade bridge | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ribbit merchants already run an Amethyst-Shard barter economy; bridging shard ↔ Numismatics coin (via a KubeJS trade override or a crafting-table recipe that converts shards to low-denomination coin) brings the frog-village trade into the player-run settlement medium — the village becomes a regional currency exchange point, not a dead-end economy. Advances: survival (world population) → economy (trade node).
- from: ribbits toadstool/mossy-oak woodset | via: create:milling | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is "deco crushes back to raw." Mossy-oak planks are a generic wood; milling them yields vanilla sawdust/pulp — no distinct output that a player would find notable. The pairing is technically valid but adds nothing the vanilla wood weave doesn't already cover. Weak edge; reject.
- from: ribbits swamp goods (loot from frog-village chests) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: M-34 is "combat-route supply — boss/danger output farmed and traded." Ribbit villages are friendly, not combat; seeding loot tables with pack goods here is ambient worldgen flavor, not a combat supply weave. Motif mismatch; reject.
- REWORK: existing anchor survival (1) → M-08 accept adds economy, reaching 2-anchor goal.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Hallowed Gem — a rare Invoker boss drop — is consumed as a reagent in an Ars Nouveau imbuement, gating a high-tier arcane component; the combat specialist who farms Invokers becomes the sole supplier to magic specialists who need it. Boss-drop reagent sink at endgame scale.
- from: illagerinvasion:illusionary_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Illusionary Dust — dropped by the Illusioner illager — is transmuted through Occultism spirit fire into an arcane essence, giving the otherwise-isolated dust a functional role in the magic production route; combat mid-tier (raidable illager, not the full boss).
- from: illagerinvasion:platinum_chunk | via: create:crushing → create:mixing (via createmetalwork tag) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Platinum is a drop from raiding illager mobs; routing it through createmetalwork's crushed_raw_materials/platinum tag into Create's melt pipeline doubles the yield and folds the raid-combat loop into the ore-doubling spine — combat supplies rare feedstock to the production route.
- from: illagerinvasion Imbuing Table (enchant-boosting service) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: Over-cap enchantments require Hallowed Gem + the Imbuing Table; a player who farms Invokers can offer enchant-boosting as a paid service — another player brings their gear and Gems, the specialist performs the imbue; knowledge of the table + the Gem supply become the service's value. Enchanting-specialist role in the player economy.
- from: illagerinvasion:hallowed_gem | via: loot-seed (bounty board decree) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Hallowed Gem as a Bountiful board high-value bounty objective — combat specialists who take on Invoker-kill bounties supply the gem into circulation; the bounty board bridges combat-route supply → economy demand gate.
- from: illagerinvasion:lost_candle | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Lost Candle is a lore/flavor drop; routing it through Occultism ritual is thematically plausible but it would be a gratuitous extra edge when illusionary_dust already anchors the magic link (M-11). Two magic edges from the same raid source risks over-wiring one mod. Reject as redundant.
- REWORK: survival (1) → after accepts gains magic + create + economy, reaching 4-system weave. Strong loop node: combat → production + magic + economy.

== CHUNK COMPLETE ==
