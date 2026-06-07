# Phase 2 candidates — chunk-15

## createpickywheels   [anchors: create (1)]
- from: biome/geography requirement on water-wheel/windmill placement | via: config (no recipe) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the biome-gate IS a survival-flavor mechanic (world pushes back on power placement) but there is no material surface, no method, no item — it's a pure behavioral restriction. No existing motif covers "config-gated biome requirement"; no-motif → REJECT-for-review per briefing rules.
- LEAVE — pure behavioral patch on Create generators; zero items/blocks/methods; the biome-gate flavor is a survival-adjacent benefit but has no connective surface for a recipe/loot/method weave. Existing 1-anchor (Create) is the correct state.

REWORK: OK — single anchor is appropriate for a rules-tweak mod with no content surface.

---

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structure chest loot | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: M-08 requires scarce regional metal → Create-processed → minted coin; a loot-seed of raw coin into a structure chest is not that chain. Closer motif would be M-14 (bounty→drop economy) or M-15 (boss-key unlock), neither of which Trek's vanilla-block structures support — no boss, no unique drop. A plain coin-in-chest is a treasure convenience, not a system node. REJECT: no coherent motif fit.
- from: trek structure chest loot | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: rare structures (fortress/pyramid/ruin) seed magic reagents (e.g. ars source shards, occultism dragonheart fragments) as exploration rewards — "ancient ruins held strange alchemical caches"; gives survival explorers a magic on-ramp and lets trek structures become meaningful stops on the path toward the magic pillar.

REWORK: OK — survival is the correct primary anchor; loot-seed adds a coherent second.

---

## fishingreal   [anchors: survival (1)]
- LEAVE — behavioral tweak (fishing catch → live entity); zero items/blocks/methods of its own; weave belongs to fish-content mods beneath it (createfisheryindustry, farmersdelight). No coherent second-pillar routing possible here.

---

## resourcefulconfig   [anchors: support (1)]
- LEAVE — pure config-API library; zero gameplay content.

---

## entity_model_features   [anchors: support (1)]
- LEAVE — client-side model rendering engine; zero gameplay content.

---

## jade   [anchors: support (1)]
- LEAVE — client UI overlay; zero gameplay content.

---

## chefsdelight   [anchors: survival, economy (2)]
- from: Cook/Chef villager trades (Farmer's Delight meals) | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no, explore only); maintainer has not approved routing villager emerald trades into numismatics coin. The candidate is coherent but must stay flagged provisional and not be authored.
- from: chefsdelight feast outputs (Roast Chicken / Honey Glazed Ham) | via: numismatics sell / M-09 | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort cooked feasts (Chef's Cooking Pot dishes) become sellable luxury goods for coin — a cook who specializes in FD feasts can actually sell them to other players or via a trading-floor post; routes cooking specialization into the emergent economy.

REWORK: OK — two anchors (survival + economy) already sound; M-09 deepens the economy link with a specific material flow rather than a structural assertion.

---

## gamediscs   [anchors: survival (1)]
- from: gamediscs:processor + gamediscs:redstone_circuit (console components) | via: create:mechanical_crafting or create:sequenced_assembly | to: create | motif: M-05 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — a retro arcade console assembled by an industrial contraption is absurd; the mod's vibe is pure whimsy/toy, and forcing Create into its craft contradicts its novelty flavour. Also M-05 is for flagship items gated on Create parts, not for a downtime toy.
- LEAVE — pure novelty arcade toy; cosmetic-only output; no resource loop. One survival anchor (flavor) is the correct state.

---

## emojitype   [anchors: support (1)]
- LEAVE — client-side chat input helper; zero gameplay content.

---

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice / coconut_husk | via: farmersdelight:cooking or extradelight:juicer | to: economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts milled or juiced into a tropical drink or coconut cream that becomes a sellable regional commodity — only available in beach biomes, so scarcity drives trade; cooking chain is one light step, appropriate for everyday produce.
- from: ecologics:coconut woodset (planks/logs) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600+ deco mods already contribute to the deco-crush pass; adding one more vanilla-style wood is low value and the dossier marks this WEAK. Not worth a weave slot.
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: azalea flowers (sheared from rare flowering-azalea biome trees) imbued with source into a floral arcane essence — a regional material with a magic use rewards biome exploration and ties the biome-flavor mod into the magic web at a single light step.

REWORK: OK — survival is the correct primary anchor; two ACCEPT candidates give it solid second anchors (economy + magic).

---

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty ores (jade, ruby, onyx, aquamarine) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: jade/ruby/onyx/aquamarine ores through the Create crusher yield doubled gems + a byproduct sliver — integrates Samurai Dynasty's ore tier into the Create ore-doubling web exactly as any foreign ore should; player finds that the katana-grind pays better with a crushing wheel.
- from: Yokai mob drops (akaname_tongue, Oni/Tengu/Kitsune loot) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are supernatural creatures — their drops (tongue, spirit essence) feed occult rituals or arcane infusion naturally; a player fighting Yokai for katana upgrades also generates magic reagent feedstock, binding combat to the magic pillar.
- from: samurai_dynasty:steel_ingot (c:ingots/steel shared tag) | via: createbigcannons:melting or create:mixing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: steel is already shared via c:ingots/steel with createbigcannons and TFMG; adding a second crush/melt route for the same tag is redundant — the tag unification does the work without a separate weave. Reject to avoid double-counting.

REWORK: OK — survival is correct primary; two ACCEPT candidates (Create + magic) give it strong dual anchoring.

---

## azurelib   [anchors: support (1)]
- LEAVE — animation/rendering library; zero gameplay content.

---

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs stone/brick/andesite/diorite roof blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier marks this WEAK and notes 600 blocks make an exhaustive pass low-value; the briefing says "leave unless a wholesale deco sweep." With 605+ blocks, the cost of maintaining these recipes outweighs the connectivity gain for a single deco mod. Reject pending a dedicated wholesale deco-crush sweep that handles all deco mods together.
- LEAVE — decoration palette; single support anchor is the correct state until a wholesale deco-crush sweep runs.

---

## byzantine   [anchors: survival (1)]
- LEAVE — pure MineColonies style/schematic pack; no items/blocks/methods of its own; its entire weave is through MineColonies by definition. Forcing a second connection here would be attaching to the host (MineColonies), not to Byzantine itself.

---

## zeta   [anchors: support (1)]
- LEAVE — pure mod-framework library (Quark's module backbone); zero gameplay content.

---

## clumps   [anchors: support (1)]
- LEAVE — server-performance XP-orb merging; zero gameplay content.

---

## createbigcannons   [anchors: create, aeronautics (2)]
- from: createbigcannons finished shells / big_cartridge / autocannon ammo containers | via: numismatics sell / trading post | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who specializes in the cannon foundry can sell munitions to the crew equipping their warships — processed war-goods as luxury trade items feed the emergent economy; creates a dedicated "munitions dealer" role distinct from the builder and the miner.
- from: createbigcannons:cast_iron_ingot / nethersteel_ingot (its own proprietary alloys) | via: numismatics mint → M-08 | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 routes scarce regional metal → Create-processed → coin; nethersteel/cast_iron are createbigcannons internal alloys, not regionally scarce ores in the worldgen sense. The M-09 munitions-as-trade-good is the coherent route; M-08 would be a stretch here. Reject to avoid motif-forcing.

REWORK: OK — Create + aeronautics already solid; M-09 economy link is a clean third weave.

---

## platform   [anchors: support (1)]
- LEAVE — cross-platform developer library; zero gameplay content.

---

## fusion   [anchors: support (1)]
- LEAVE — client connected-textures rendering library; zero gameplay content.

---

## railways   [anchors: create, aeronautics (2)]
- from: railways locometal building stock (brass_wrapped_locometal_boiler, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: locometal is a finished structural block that represents craftsmanship — crushing it back is tone-clashing (you don't grind a steam boiler for scrap in an industrial pack that values that craftsmanship). Also M-04 is intended for generic deco blocks, not a flagship structural material with a clear craft identity.
- from: railways:conductor entity / railways semaphore signal blocks | via: config-tie / loot-seed | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no existing motif covers "train conductor as a trade intermediary" or "semaphore gates an economy signal"; no-motif → reject-for-review.
- from: railways track gauge variety (narrow/wide track) + bench cart | via: create:sequenced_assembly (already inbound) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: wide-gauge bench-cart or locometal drive shaft used as a mechanical drivetrain component in Aeronautics landing-gear or wheel-truck assemblies — the train-and-airship builder naturally shares the same rail/wheel fabrication knowledge; ties the railways fabrication chain into the aeronautics drivetrain (M-24, mechanical component → propulsion/control).

REWORK: OK — Create + aeronautics anchors are sound; M-24 deepens the aeronautics link specifically rather than restating the general Create overlap.

---

== CHUNK COMPLETE ==
