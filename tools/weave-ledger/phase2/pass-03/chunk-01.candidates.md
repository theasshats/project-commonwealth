# Phase 2 candidates — chunk-01

## formations   [anchors: survival (1)]
- LEAVE — pure scatter-structure worldgen; registers no items, no methods, no drops of its own. Every block it places belongs to other mods' palettes. A recipe edge would be arbitrary — it has nothing to route through any method.

## mutantszombies   [anchors: survival (1)]
- LEAVE — vanilla-horror mob expansion with zero item drops (loot=no, 7 spawn eggs only). The dossier explicitly notes no material to route. Forcing an edge (e.g. a synthetic drop) would be an invention, not a weave — the briefing's "don't force edges onto deliberately-vanilla mob content" guardrail applies directly.

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / immersive_armors:steampunk_* (mid/endgame sets) | via: create:mechanical_crafting or create:pressing (gate creation on Create-processed iron sheets/plates) | to: Create | motif: M-05 | power: mid | tone: ok — the Steampunk set literally evokes Create's aesthetic; Heavy requiring pressed plates is industrially coherent | verdict: ACCEPT | hook: forging heavy steel plate armor through a mechanical press rather than a crafting table is the first thing a player would expect
- from: immersive_armors:divine_chestplate / immersive_armors:robe_* (magic-flavored sets) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok — Divine/Robe sets are explicitly arcane-themed; finishing them through an arcane apparatus feels natural | verdict: ACCEPT | hook: divine armor blessed through an enchanting apparatus rather than a smithing table earns its name
- from: immersive_armors:bone_chestplate (early set) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: clash — bone armor going through a mechanical crafter is a weak fit; bone is raw organic material and M-05 says depth scales with power; gating an easy early set behind Create infrastructure violates the "never gate basics behind complex" guardrail | verdict: REJECT | reason: power/depth mismatch — everyday set should not require Create; reserve M-05 gating for mid/endgame sets (Heavy, Steampunk, Divine)
- from: finished armor sets (high tier) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: dossier notes armor sells thinly — players keep their gear; a coin weave here is implausible player behavior; not a functional economy node

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical caps (agarikon, angels_wing, etc.) | via: farmersdelight:cooking or extradelight:oven/vat | to: survival/food processing chain | motif: M-12 | power: mid | tone: ok — wild mushrooms going into a cooking pot for prepared dishes is cottage-core thematically coherent | verdict: ACCEPT | hook: rare foraged mushrooms roasted or braised into buffet dishes that fuel the diminishing-returns food loop (pairs with solclassic)
- from: mushroomquest deadly/mythical caps (death cap, etc.) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — toxic/mythical mushrooms as transmutation fuel for spirit-fire is a classic folkloric "poison → reagent" arc; tone matches occultism's dark organic vibe | verdict: ACCEPT | hook: a death cap fed to spirit fire yields a vital occult essence — the poisonous becomes the powerful
- from: mushroomquest common everyday caps | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: gating a common forageable behind spirit-fire would inflate occultism entry cost; reserve the spirit_fire sink for rare/mythical caps only (depth-scales-with-power rule)
- from: mushroomquest rare caps as luxury foraged goods | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — rares fetch coin, giving the foraging loop an economic payoff | verdict: ACCEPT | hook: a wandering merchant pays well for mythical mushrooms; foragers become the pack's fungi traders

## solclassic   [anchors: survival (1)]
- LEAVE — ambient food-discipline rule layered over the entire food pool; no machine, no method, no material in/out. Its contribution is systemic (makes a large food roster matter) rather than connective. The dossier explicitly notes no method-routing weave is coherent here. A nominal economy link (food variety → trade value) is real but is a systemic pairing with other mods, not a recipe weave — forcing a recipe or economy edge onto a behavior-only mod would be artificial.

## underground_village   [anchors: survival (1)]
- from: Stoneholm villagers (discoverable underground settlement) | via: numismatics villager-trade seating | to: economy | motif: M-21 | power: mid | tone: ok — subterranean traders as economy nodes is a natural discovery-reward loop; finding the village unlocks coin trades | verdict: ACCEPT (provisional motif) | hook: descend into Stoneholm and find merchants who deal in coin — underground settlement as economy hub
- from: Stoneholm villager trades | via: bountiful board | to: economy | motif: M-14 | power: mid | tone: ok — placing bounty boards inside or near Stoneholm structures turns the settlement into a combat-economy node | verdict: ACCEPT | hook: Stoneholm notice board offers coin bounties for clearing the tunnels nearby
- LEAVE (additional) — no owned recipe types, no registry items/blocks; all weaves are location/trade-seating, not processing edges. The two economy candidates above are the ceiling; no further pillars are reachable without synthetic content.

## betteroceanmonuments   [anchors: survival (1)]
- LEAVE — structure-overhaul-only; registers zero blocks/items; only data hook is vanilla-compatible loot tables already in place. The dossier explicitly recommends leave. A loot-table injection (add coin/reagent to chest loot) is a datapack edit, not a mod weave — out of scope for Phase 2 candidate mapping.

## createpickywheels   [anchors: Create (1)]
- from: biome/location constraint on water wheels and windmills | via: (no recipe method — behavioral patch) | to: survival | motif: no-motif | power: everyday | tone: ok — the biome-gating makes the *world geography* dictate infrastructure placement, which is the survival pillar's "world pushes back" flavor applied to Create generators | verdict: REJECT | reason: no-motif — the weave is real (the survival tie is genuine and coherent) but routes through no registered method; it is a config-behavioral bridge not covered by M-01..M-22; flag for Gate 0 / new motif consideration rather than forcing it into an existing slot. LEAVE at one pillar pending a "geography-gated power" motif.
- LEAVE — behavioral-only mod; no registry items, no methods, no material. The survival-flavor tie is real but has no motif anchor; no forced edge.

## spawn   [anchors: survival (1)]
- from: spawn clam / crab / seafood drops | via: create:milling or farmersdelight:cutting (deeper processing) | to: Create / survival | motif: M-12 | power: everyday | tone: ok — processing clams and crustaceans through a mill or cutting board into meal components is a direct extension of the existing FD integration; players already route Spawn drops through FD, and milling into a seafood paste/meal intermediate is coherent | verdict: ACCEPT | hook: mill a bucket of clams into chowder base — Spawn's haul flows through the Create processing chain to feed the colony
- from: spawn exotic catches (anglerfish, rare color-variant clams) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — rare sea creatures fetching coin gives fishing/netting an economic return; fits scarcity-driven trade | verdict: ACCEPT | hook: an anglerfish or iridescent clam sells to a dockside trader for a sprocket or two
- from: spawn seafood drops | via: createfisheryindustry:bait_trap or peeling | to: Create / aeronautics | motif: M-12 | power: everyday | tone: ok — if mechanized aquatic harvesting is wired, Spawn's critters are the natural feedstock | verdict: REJECT | reason: aeronautics link is weak (createfisheryindustry is a Create-side fishing mod, not aeronautics); the method-pull is valid but the pillar claim is overclaimed; the M-12 Create/survival route above covers the processing weave adequately — this is redundant and pillar-label is wrong

## betterendisland   [anchors: survival (1)]
- LEAVE — structure-overhaul-only; no items, no methods, no loot tables (loot=no). Dossier says "nothing to weave." No pillar beyond survival is reachable without synthetic content.

== CHUNK COMPLETE ==
