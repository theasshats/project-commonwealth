# Phase 2 candidates — chunk-06

## occultism   [anchors: magic (1)]
- from: occultism:spirit_trade (summoned merchant spirit) | via: occultism:spirit_trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: demon labor feeds a coin-running market — the spirit merchant is the pack's occult trade broker
- from: foreign mob/boss drops → occultism:spirit_fire or :ritual | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: throwing a rare mob drop into the spirit-fire transmutes it into an essence — the ritual circle is the organic-to-magic gateway
- from: occultism ores (iesnium/silver) → create:crushing | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing iesnium ore yields doubled iesnium dust + experience nugget — ore scarcity makes every doubled ingot matter
- from: occultism:dimensional_mineshaft (void-dim mining spirits) | via: occultism:miner | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: a bound Djinni mines a void dimension, delivering scarce metals passively — magic as the economy's otherworld logistics arm
- REWORK: current single magic anchor is correct (not yet woven); no existing connections to flag as weak. Proceed with accepted candidates above.

## necronomicon   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, no recipe-types); no gameplay surface to weave.

## dataanchor   [anchors: support/library (1)]
- LEAVE — genuine zero-content developer library (data-attachment/packet plumbing, 0 blocks, 0 items); no gameplay surface to weave.

## lootr   [anchors: support/QoL (1)]
- LEAVE — loot-fairness behavior mod; its 9 blocks are container reskins (no material values of their own) and it registers no recipe-types; no coherent method edge exists. Dossier already flags this.

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager capture) | via: none — utility synergy | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the villager-transport link to economy is a narrative synergy, not a method-routing; there is no recipe-type or material flow to route through, so it fits no approved motif. Forced edge.
- from: moblassos:hostile_lasso (captured monsters) | via: occultism:ritual (sacrifice a captured mob at a pentacle) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: releasing a lasso-captured hostile mob directly onto a pentacle satisfies a sacrifice requirement — the lasso becomes the ritual's mob-delivery tool
- REWORK: single survival anchor is consistent with its utility role; only one coherent second edge found (above).

## tacz   [anchors: support/combat-flavor (1)]
- from: gun_smith_table_crafting inputs (iron/steel parts) | via: tacz:gun_smith_table_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Gun Smith Table requires Create-pressed iron sheets and mechanical-crafted parts — firearms ride the ore-scarcity spine so guns are expensive where metals are scarce
- from: high-tier gun (endgame rifle/sniper) | via: create:sequenced_assembly (multi-step barrel/receiver build) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-caliber firearm is assembled through a sequenced line — barrel → receiver → stock → finish — gating the best weapon behind real factory investment
- from: tacz:ammo (consumable) | via: numismatics sell/buy | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo is a consumable war materiel that players trade for coin — the PvPvE economy runs on a bullets-and-brass marketplace
- from: tacz mountable flavour on airships | via: none (no Aeronautics recipe integration exists) | to: aeronautics | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no-motif — aeronauticscompat covers other turret mods separately; TACZ has no Aeronautics-recipe surface; forced theme edge only

## jeresources   [anchors: client-only UI / support (1)]
- LEAVE — documentation-only JEI addon (0 blocks, 0 items, display providers only); no material to route, no recipe surface.

## spyglass_improvements   [anchors: support/client-QoL (1)]
- LEAVE — pure client-side zoom/overlay behavior, 0 items/blocks, no recipe-types; nothing to weave.

## jeed   [anchors: client-only UI / support (1)]
- LEAVE — JEI display-provider only (its two registered "recipe-types" are viewer categories, not craftable methods); 0 items, no material surface.

## create_better_villagers   [anchors: create, economy (2)]
- from: Create-parts villager trades (emerald-denominated) | via: numismatics trade re-denomination | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: Andesite/Brass/Copper Workers accept Numismatics coin instead of emeralds — the pack's industrial tradesmen price their parts in the player-run currency, not vanilla emerald arbitrage
- OK — existing Create + economy 2-anchor connection is sound; the only rework candidate is strengthening the economy anchor from vanilla emeralds to Numismatics coins (above, M-21 provisional).

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads Oven/Fridge/Sink (flagship appliances) | via: recipe (crafting table gated on Create parts) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: upgrading from a basic oven to the full modular kitchen requires Create-pressed copper sheets and brass pipes — the kitchen is a luxury that takes real fabrication to build
- from: luxury cooked meals (high-effort feast output from connected kitchen) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully-stocked kitchen produces high-quality food that sells for coin — running the server's best restaurant is a viable trade profession
- REWORK: existing single survival anchor is weak by itself; both candidates above earn the 2-anchor floor. No existing connections to flag as broken.

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — behavior-only mod, 0 blocks/items, no recipe-types; double-slab-break interaction registers no material surface to weave.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (acorn/bastion/cathedral metal fence series) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mis-placed metal fence can be crushed back to iron nuggets + an experience nugget — deco is recoverable, not a permanent ore sink
- from: mcwfences wood fence/gate variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood fences crush to planks vanilla-style already; no new value added, and M-04 targets metal/stone deco specifically (per motif text) — forcing it onto wood fences is a defect edge
- REWORK: single decoration anchor; metal-fence crush (above) is the one coherent second connection. Scope is narrow — apply to metal fence variants only, part of a wholesale deco-family pass.

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — pure client-side rendering patch; 0 items/blocks, no recipe-types, no gameplay surface.

## particlerain   [anchors: support/client-atmosphere (1)]
- LEAVE — client-side weather particle renderer; 0 items/blocks, no recipe-types, no material flow.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing samurai-realm ores doubles their yield — jade dust and ruby shards pour out of the millstone, making the feudal ore tier part of the Create resource web
- from: samurai_dynasty:akaname_tongue / yokai drops | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: burning a yokai's tongue in spirit-fire releases its spiritual essence — foreign demon-adjacent drops feed the summoning web
- from: samurai_dynasty:steel_ingot (c:ingots/steel) | via: create:crushing (byproduct from ore) or create:mixing (alloy) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai steel can be alloyed through Create's mixing basin (iron dust + coal dust → steel), folding the feudal metal tier into the pack's Create alloy chain
- from: samurai_dynasty weapon upgrades (Yokai-absorption mechanic) | via: ars_nouveau:imbuement or occultism:ritual (gate the upgrade behind an arcane infusion) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: absorbing a Yokai's power into a katana requires an arcane infusion ritual — combat mastery and magical attunement converge at endgame
- from: samurai_dynasty spirit-stone blocks (deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: spirit-stone is a themed temple-build block; crushing it to rubble breaks the lore integrity of a set players will construct shrines from — tone clash for the decoration set specifically
- ⚠ silver_ore note: samurai_dynasty:deepslate_silver_ore outputs its own silver; do NOT unify with occultism silver or galosphere palladium — treat as a separate regional ore. Flag for unification review before authoring any M-03 crush recipe.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client elytra-movement feel mod; 0 items/blocks, no recipe-types, touches vanilla elytra not Create Aeronautics ships, no material surface.

## touhou_little_maid   [anchors: survival (1)]
- from: maid summoning (altar recipe inputs) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: summoning a maid requires an arcane offering — Ars source gems or an Occultism spirit essence replaces the default vanilla inputs, making the altar a sanctioned ritual method that slots into the magic pillar
- from: occultism:foliot_essence / afrit_essence (spirit offering) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the altar accepts a spirit essence as its animating force — summoning a maid from the void is a ritual transmutation, consuming otherworld energy
- from: power-point bottles (fairy-drop currency) | via: numismatics sell/buy | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are a mod-internal currency with no mass-production route; selling them for coin creates a low-effort coin faucet with no scarcity brake — tone mismatch with the pack's scarcity-driven economy design
- from: Broom (rideable flight item) | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create deployer applies a Haunted Feather (from create:haunting of a feather) onto the broom shaft, producing the enchanted Broom — mechanical process meets magical artifact
- REWORK: single survival anchor; three accepted candidates above bring it to magic + create, completing the 2-anchor floor.

## kubejs_create   [anchors: support/modpack-tooling (1)]
- LEAVE — scripting bridge with 0 items/blocks; it enables Create-recipe weaving but is not itself a weave target.

## creativecore   [anchors: support/library (1)]
- LEAVE — pure dev library (GUI/packet/event API); 0 items/blocks, no recipe-types, no gameplay surface.

== CHUNK COMPLETE ==
