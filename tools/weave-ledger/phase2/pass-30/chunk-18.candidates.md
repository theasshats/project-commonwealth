# Phase 2 candidates — chunk-18

## kubejs   [anchors: support (modpack tooling) (1)]
LEAVE — pure scripting framework; no items, no in-world methods, no player-facing content to weave. It is the authoring tool for weaves, not a weave target.

---

## beachparty   [anchors: survival (1)]

- from: beachparty:coconut_open (cocktail ingredient) | via: beachparty:palm_bar_mixing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: palm_bar_mixing is beachparty's own method producing only beachparty cocktails — routing it here doesn't bridge to a second system; cocktail buffs are a survival perk already captured by the existing anchor. No cross-system step.

- from: beachparty cocktails (status-buff drinks) | via: bare sell link | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired — "sellable luxury" is the ambient endpoint, not a weave; bare sell link rejected by rules.

- from: beachparty:coconut_open / palm fruit (tropical raw material) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a milling wheel pulverises open coconut into coconut flour/oil intermediate, feeding a Farmer's Delight cooking recipe or an Ars mixing step — a tropical biomass-to-processed-food chain that drags the beach mod through the Create spine.

- from: beachparty:mini_fridge_freezing (bulk ice output) | via: beachparty:mini_fridge_freezing → create:mixing (ice as coolant ingredient) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mini Fridge is the pack's cheap ice source; a Create mixing recipe that requires ice (e.g. cooling a molten alloy, producing a cryo-fluid intermediate) gives the fridge a functional pull — a beach appliance feeding the tech spine.

- from: beachparty cocktail buffs (Haste/Speed) | via: M-26 consumption (drinks are spent each use) | to: survival/economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: cocktails are consumable buffs replenished continuously — demand never zeroes out; a miner or builder buys them from a brewer specialist (labor, M-33 flavour), closing the loop's survival→economy demand arrow.

REWORK: existing anchor is `survival (1)` — sole anchor is reasonable given the mod's decoration/food role. The coconut-milling (M-12) and ice-feedstock (M-12) links above add a `create` anchor. OK — no existing connection to flag as arbitrary, but one is the floor; two (survival + create) is the target.

---

## dragonlib   [anchors: support (library/API) (1)]
LEAVE — dependency code library; no items, no blocks (the dev-artifact `dragonlib:dragon` is not player content), no methods, no loot table. Zero content surface.

---

## createmechanicalcompanion   [anchors: create (1)]

- from: createmechanicalcompanion:mechanical_wolf_link (summoning item) | via: M-34 combat-supply | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mechanical Wolf is a crafted combat companion requiring netherite-tier Create parts; a combat/tech specialist builds and sells it or sells module upgrades to non-engineer players — the supplier side of a danger-adjacent economy loop.

- from: createmechanicalcompanion:optical_sensor / quantum_drive (high-tier sub-assemblies) | via: M-29 cross-route dependency | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: gate the `quantum_drive` or `optical_sensor` component behind an Ars Nouveau imbuement step (imbue a precision lens with Ars source energy), forcing Create-specialist and magic-specialist to cooperate on the companion's highest tier.

- from: createmechanicalcompanion:booster_rocket (movement module) | via: M-24 mechanical component → propulsion | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the booster rocket is literally a propulsion component — a small Create-crafted thruster that could serve as an airship thruster part or at minimum share a fabrication recipe path with Aeronautics propellers, tying the wolf's combat mobility to the airship build tree.

- from: createmechanicalcompanion:illager_engineer (hostile mob, spawn egg present, loot=yes) | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Illager Engineer is a combat mob; seed its loot table with a scarce Create subcomponent (e.g. a stripped casing or partial blueprint) so killing it is a valid alternate-acquisition path — mob-drop reagent sink routing combat into the Create supply chain.

REWORK: `create (1)` only. The four links above add `economy`, `magic`, `aeronautics`, and `survival` candidates. OK — the single Create anchor is sound (the sequenced-assembly chain is deep and correct); the lack of a second anchor is the gap to fill.

---

## txnilib   [anchors: support (library) (1)]
LEAVE — pure developer library with zero items, blocks, or methods; confirmed by jar-grounded data (0 blocks, 0 items, no loot).

---

## terrablender   [anchors: support (1)]
LEAVE — worldgen registration API; zero player-facing content (0 blocks, 0 items, no loot). Operates entirely on worldgen data at startup.

---

## ars_n_spells   [anchors: magic (1)]

- from: ars_n_spells mana-unification (Ars source ↔ Iron's mana bridge) | via: M-17 electric/FE charging bridge analogy | to: create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — the mana unification is a pure magic-internal bridge; forcing a Create electrical step onto it breaks the mod's purpose (it IS the magic-magic weave). M-17 is for FE→magic, not magic↔magic.

- from: ars_n_spells cross-cast ritual (tablets + inscription flow) | via: M-01 arcane currency | to: magic | motif: M-01 | power: mid | tone: ok | verdict: REJECT | reason: the tablets are a datapack ritual, not a material to route through; the cross-cast is already the magic-internal weave (the existing anchor). No new pillar added.

- from: ars_n_spells (no items of its own) | via: any | to: any | verdict: REJECT | reason: zero items/blocks/methods — no material surface to method-pull through. The mod IS a weave (Ars↔Iron's), so it already serves its structural role. Forcing a second pillar by inventing a phantom item would be artificial.

LEAVE — ars_n_spells is itself a magic-internal weave with no item/block surface. It contributes meaningfully as the spell-system bridge; its magic anchor is correct. No second anchor is coherent given zero material I/O.

---

## stylecolonies   [anchors: support (decoration palette) (1)]

- from: stylecolonies Steampunk style (requires Create blocks as build materials) | via: M-28 colony route | to: economy + create | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the Steampunk blueprint set demands Create-fabricated blocks (cogwheels, casings) to construct colony buildings — that demand is the colony-route pull: a Create specialist supplies building materials to the colony builder. The style pack makes M-28 concrete for the Steampunk tier.

- from: stylecolonies High Magic style (implies magical building blocks) | via: M-28 colony route | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: if the High Magic style calls for Ars or Iron's decorative blocks, the colony builder depends on the magic specialist for materials — another colony-route demand-gate pulling magic production into the economy.

REWORK: existing support anchor is accurate (blueprint-only mod). Steampunk→Create and High Magic→magic links are soft (depend on what blocks the blueprints actually call for) — these are Phase-3 verification items. Flag as BALANCE-PENDING.

---

## entity_texture_features   [anchors: support (client rendering) (1)]
LEAVE — client-side texture rendering engine; zero items, blocks, loot, or methods. No game-mechanic surface to weave.

---

## recipe_integration   [anchors: support (library/recipe-bridge) (1)]

- from: recipe_integration inbound weaves (create:milling / mixing / pressing / ars_nouveau:scry_ritual / occultism:crushing / farmersdelight:cutting routes) | via: audit action | to: create + magic + survival | motif: no-motif | verdict: REJECT | reason: recipe_integration is itself a connective layer — it ships recipes, not a content node. It has no items of its own; proposing a weave for it would mean weaving the weaving tool. The right action is the audit noted in the dossier: check which of its 82 c:tags and cross-mod recipe lines actually fire on this modlist (many reference uninstalled mods). That is a Phase-3 audit task, not a Phase-2 weave candidate.

LEAVE — recipe-bridge support mod with zero items/blocks/loot. It contributes cross-mod recipes automatically; the pack's task is to audit which of those fire (Phase-3 action item, not a weave candidate). No material surface to method-pull.

---

== CHUNK COMPLETE ==
