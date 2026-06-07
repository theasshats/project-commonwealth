# Phase 2 candidates — chunk-11

## createaddition   [anchors: create (1)]

REWORK: dossier candidate "survival/economy via liquid_burning of crop oils [WEAK, M-12]" — listed as
weak and M-12 is the right motif but the *economy* framing drags in M-09 sell-link thinking; the real
hook is the crop-oil as a *consumption sink* (fuel is burned, demand is renewable). REWORK to M-26.

- from: createaddition:seed_oil / bioethanol (crop-oil fuels) | via: createaddition:liquid_burning | to: survival (farming→fuel consumption) | motif: M-26 consumption sink | power: everyday | tone: ok | verdict: ACCEPT | hook: farmed oilseeds processed into bioethanol keep the engine running — farm output is literally fuel; demand never stops
- from: FE-chargeable magic gear (Iron's Spellbooks wands/foci, create_new_age batteries) | via: createaddition:charging (tesla coil / charging station) | to: magic | motif: M-17 electric/FE charging bridge | power: mid | tone: ok | verdict: ACCEPT | hook: the Create electrical grid tops up a mage's focus before a ritual run — tech and magic share the same power grid
- from: createaddition:electrum_ingot (scarce Ag+Au alloy) | via: create:pressing → numismatics mint | to: economy | motif: M-08 player-minted currency | power: mid | tone: ok | verdict: ACCEPT | hook: electrum is the natural coinage alloy — processed out of the Create rolling mill and struck into Numismatics coin by the settlement's mint specialist
- from: createaddition:seed_oil | via: createaddition:liquid_burning for Aeronautics generator/engine | to: aeronautics | motif: M-13 fuel→propulsion | power: everyday | tone: ok | verdict: ACCEPT | hook: the ship's auxiliary generator burns seed oil when diesel is short — a farm-fuel propulsion backup that ties the aeronautics supply line to agriculture

## ars_nouveau   [anchors: magic (1)]

REWORK: dossier candidate "economy via numismatics — source_gem as sellable [M-09, WEAK]" — M-09 is
retired; the bare sell-link is rejected. Any economy link must gate demand; the right form is M-29
(a foreign recipe requiring source_gem as cross-route input) or M-37 (research-gating). Record reject.

- from: ars_nouveau source_gem (via imbuement of foreign essences) | via: ars_nouveau:imbuement | to: magic (internal hub) | motif: M-01 arcane currency | power: mid | tone: ok | verdict: ACCEPT | hook: foreign magic-mod essences mint into the universal source_gem hub — the interop spine of the entire magic pillar
- from: mob-kill drops + crop/mob growth (via Vitalic / Agronomic Sourcelinks) | via: passive Source generation (non-recipe mechanic) | to: survival | motif: M-02 mob-drop reagent sink / M-12 processing-chain pull | power: everyday | tone: ok | verdict: ACCEPT | hook: your farm and mob farm feed the arcane engine automatically — survival pressure output (food/mob) becomes magic fuel
- from: ars_nouveau:source_gem (as cross-route input requirement) | via: KubeJS recipe authoring (M-29) — require source_gem in a Create or MineColonies recipe | to: economy | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: ACCEPT | hook: building a precision Create component demands a source_gem core, so the tech specialist must trade with the magic specialist; neither is self-sufficient
- from: ars_nouveau spell scrolls / enchanted gear | via: ars_nouveau:enchanting_apparatus (service-for-hire) | to: economy | motif: M-33 service-for-hire | power: mid | tone: ok | verdict: ACCEPT | hook: the enchanter doesn't sell enchants — they take your gear and return it inscribed; the service is the value, not a vendored item
- from: ars_nouveau:source_gem | via: create:mixing (require as catalyst/ingredient) | to: create | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: REJECT | reason: overlaps with the M-29 accept above (same cross-route idea, different delivery); also runs into M-10's "no basic components" guardrail if source_gem is everyday-tier here — consolidate into the single M-29 accept
- from: source_gem sellable for coin | via: numismatics | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; bare sell-link is ambient endpoint, not a weave

## createmetalwork   [anchors: create (1)]

REWORK: dossier candidate "economy via numismatics — processed metals → coin [STRONG, M-08]" is SOUND
and already the right motif; the framing is correct (player presses coin from Create-refined scarcity
metal). Mark OK, propose as ACCEPT below.

- from: createmetalwork crushed/molten metals (regional ores after crush+melt pipeline) | via: create:compacting → numismatics mint | to: economy | motif: M-08 player-minted currency | power: mid | tone: ok | verdict: ACCEPT | hook: the foundry output — refined molten metal cast to ingot, then struck into coin — is the settlement's economic backbone; whoever controls ore processing controls the money supply
- from: createmetalwork molten_<magic-metal> (e.g. palladium, silver) | via: create:crushing + create:mixing (ore doubling reward) | to: magic | motif: M-03 Create ore-doubling | power: mid | tone: ok | verdict: ACCEPT | hook: routing Occultism silver or Galosphere palladium through the Create melt-and-cast pipeline gives the magic specialist a doubling reward for using the foundry instead of hand-smelting

## miningspeedtooltips   [anchors: support/client-UI (1)]

LEAVE — zero-surface tooltip renderer; no items, no methods, no content to route. Pure client display.

## accelerateddecay   [anchors: support/performance (1)]

LEAVE — invisible performance patch (leaf-decay ticking). No items, no methods, nothing to weave.

## dataanchor   [anchors: support/library (1)]

LEAVE — developer data-attachment library; no items, no methods, no player-facing content.

## entity_model_features   [anchors: support/client-rendering (1)]

LEAVE — OptiFine CEM replacement engine; no items, no methods, no content.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]

OK — connections sound. Already spans support + aeronautics (sittable furniture on Aeronautics ships).
No item/method surface; forcing an economy or magic link onto a compat glue mod would be arbitrary.

## bundle_recipe   [anchors: support/QoL (1)]

LEAVE — vanilla recipe enabler for Bundles; no items, no methods, no content of its own to route.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]

LEAVE — server sleep-quorum behavior patch; no items, no methods, no content.

## naturescompass   [anchors: support/QoL (1)]

LEAVE — biome-locator tool; produces no materials and has no recipe method surface to route through.
Note: its VALUE to the loop is real (players hunting regional biomes for scarce ore biomes — M-30's
*exploration* arm), but that's a usage behavior, not a weave; no Phase-3 action exists.

## sparsestructures   [anchors: support/worldgen-tuning (1)]

LEAVE — pure worldgen config multiplier; no items, no methods, no content.

## attributefix   [anchors: support/library (1)]

LEAVE — attribute-cap bugfix library; no items, no methods, no content.

## occultengineering   [anchors: create, magic (2)]

OK — connections sound. Already the canonical Create×Occultism bridge (M-05/M-11/M-19). Two anchors
confirmed. Proposing one additional candidate below for the economy arm.

- from: occultengineering:spirit_solution (reserved occult intermediate) | via: occultism:ritual → require as cross-route ingredient in a Create machine recipe | to: economy | motif: M-29 cross-route dependency | power: mid | tone: ok | verdict: ACCEPT | hook: the Create engineer needs a vial of spirit_solution to calibrate the mechanical chamber — the ritual specialist's product gates industrial precision; nobody makes both
- from: occultengineering sterling_silver (scarce Ag alloy from create:mixing) | via: create:pressing → numismatics mint | to: economy | motif: M-08 player-minted currency | power: mid | tone: ok | verdict: REJECT | reason: sterling_silver is an occult alloy with ritual significance; redirecting it to coinage clashes tonally with the mod's eldritch-industrial vibe and competes with its reserved reagent role — better left as a ritual input than coin stock

## createaddoncompatibility   [anchors: support/compat (1)]

LEAVE — tag-unification compat layer (Almost Unified priorities for Create addons); no items, no
methods, no content surface of its own. Caution: verify the unify.json never merges galosphere
palladium as silver (see CLAUDE.md galosphere gotcha).

## rottencreatures   [anchors: survival (1)]

- from: rottencreatures:frozen_rotten_flesh, magma_rotten_flesh, corrupted_wart | via: occultism:spirit_fire (ritual transmutation sink) | to: magic | motif: M-11 ritual/transmutation sink | power: everyday | tone: ok | verdict: ACCEPT | hook: the undead variants leave behind flesh touched by cold or magma — exactly the corrupted organic matter a spirit-fire ritual consumes as a reagent; killing the right zombie variant gives the mage a specific input
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting (soul-fire transmutation) | to: create | motif: M-19 soul/haunting seam | power: everyday | tone: ok | verdict: ACCEPT | hook: frozen flesh passed through a soul-fire haunting fan yields a chilled essence or freeze-crystal byproduct — Create's native dark-matter method meets the undead biome drop
- from: rottencreatures mob drops (boss-tier variants: Dead Beard, Immortal) | via: loot-seed + boss drop as gate item | to: economy | motif: M-34 combat-route supply | power: mid | tone: ok | verdict: ACCEPT | hook: Dead Beard and the Immortal storm-lich are true bosses; their rare drops are farmed by the combat specialist and traded to players who need the reagent but can't fight; the combat role earns its economy niche
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement (foreign essence → source conversion) | to: magic | motif: M-10 arcane infusion pull | power: everyday | tone: ok | verdict: REJECT | reason: corrupted_wart is an everyday drop from a common enemy; gating it behind imbuement violates the "no basic components behind complex recipe" guardrail — use M-11 spirit_fire (a lighter single-step) instead

## betteroceanmonuments   [anchors: survival (1)]

Dossier suggests LEAVE, but loot=yes — the briefing explicitly says don't LEAVE a loot-bearing
structure mod without trying loot-seed first.

- from: betteroceanmonuments chest loot tables | via: loot-seed (datapack edit, Phase-3 action) | to: economy | motif: M-08 player-minted currency | power: mid | tone: ok | verdict: ACCEPT | hook: the overhauled monument's deeper secret rooms contain a few struck Numismatics coins in the chest — sunken treasure that entered circulation before the world was settled; pulls the explorer-adventurer into the mint supply chain without creating an NPC faucet
- from: betteroceanmonuments chest loot tables | via: loot-seed | to: magic | motif: M-02 mob-drop reagent sink | power: mid | tone: ok | verdict: REJECT | reason: monument loot is aquatic/prismarine-themed; seeding it with magic reagents has tonal clash — the coin-in-chests M-08 link is the coherent one; a reagent seed would feel arbitrary here

## drones   [anchors: aeronautics (1)]

- from: drones:iron_rotor / ion_thruster | via: create:sequenced_assembly (multi-stage fabrication chain) | to: create | motif: M-06 sequenced-assembly keystone | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is a precision aerospace component — it takes a sequenced-assembly pass (bearings, electrum windings, precision gears) to build; the better your drone, the more Create depth it demands
- from: drones:wood_rotor (basic tier) | via: create:mechanical_crafting or vanilla | to: create | motif: M-05 native-method gating | power: everyday | tone: ok | verdict: REJECT | reason: the wood rotor is the starter tier — gating it behind mechanical crafting would block access to the drone at the wrong level; the guardrail says basics stay accessible. Accept M-06 for the higher tier only; leave wood rotor vanilla-craftable
- from: drones:pocket_drone (equipped service drone) | via: aeronautics arm — drone as logistics service tool | to: economy | motif: M-33 service-for-hire | power: mid | tone: ok | verdict: ACCEPT | hook: a player with an iron-rotor drill-drone offers a "mining courier" service — they fly out, drill, and deliver to another player's colony; the labor is the product, not a traded item

## minecolonies_tweaks   [anchors: support/QoL (1)]

LEAVE — tag-harmonization and QoL addon for MineColonies; its output is the c:crops/* and c:foods/*
tag set that *enables* food-web weaves elsewhere, not a node in the web itself. No material surface to
route; acts as infrastructure, same as a library.

## createshufflefilter   [anchors: create (1)]

LEAVE — one-item builder utility (shuffle/weighted filter for Deployers); no coherent 2nd anchor
without forcing it. The filter's randomization is a builder QoL feature, not a loop-advancing node.

== CHUNK COMPLETE ==
