# Phase 2 candidates — chunk-13

## bcc   [anchors: support/modpack-ops (1)]

- LEAVE — pure server/client version-handshake utility; 0 items, 0 blocks, no loot, no recipe types. Zero content surface; nothing to route.

## bundle_recipe   [anchors: support/QoL (1)]

- LEAVE — datapack that re-adds a vanilla crafting recipe for bundles; 0 items, 0 blocks of its own, no loot, no recipe types. The bundle output is vanilla and carries no modded weave surface.

## notenoughcrashes   [anchors: support/stability (1)]

- LEAVE — crash-recovery/stability utility; 0 items, 0 blocks, no loot, no recipe types. Pure UX safety net with zero content surface.

## polymorph   [anchors: support/compat (1)]

- LEAVE — recipe-conflict resolver UI; 0 items, 0 blocks, no loot, no recipe types. Pure infra compat layer; it routes *through* other mods' recipes but has no content of its own to weave.

## createtreadmill   [anchors: Create (1)]

Power-read: Two blocks — a player-powered Treadmill (weak SU source, early/everyday tier) and a Maid Motor (novelty crossover item with touhou_little_maid, mid tier). Both are kinetic sources only; the join key the dossier identifies is the Soul Orb / Photo from TLM, which is friend-group flavor content, not a loop system. No loot.

- from: createtreadmill:treadmill (player-powered SU) | via: M-26 consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: The treadmill outputs SU into Create networks — it consumes the *player's* effort, not a trackable item, so there's no M-26 consumption sink that the loop can measure or that creates demand. Player-effort-as-input isn't an item-weave. No motif fits cleanly; forced.

- from: createtreadmill:maid_motor + touhou_little_maid:soul_orb | via: create:item_application / deploying | to: Create/economy | motif: M-05 | power: mid | tone: clash | verdict: REJECT | reason: The Soul Orb / Photo are TLM companion items, not loop-relevant materials. TLM is curated flavor, not a loop anchor. Weaving around this crossover would tie a Create-depth item to a mod with no loop standing — a tone/system clash that doesn't advance scarcity→pressure→production→economy.

- LEAVE — both candidates reject. The treadmill's SU is an early convenience source; its only cross-mod join is TLM flavor. No clean 2nd anchor without forcing. Confirm LEAVE.

## createfisheryindustry   [anchors: Create, survival (2)]

Power-read: Rich content mod — bait traps (automated fishing), mechanical peeler (kinetic, Create), harpoons/pneumatic gun, diving leggings, seafood dishes. Mid-tier throughout; peeling/trap are everyday Create operations; harpoon gun and diving leggings are mid-endgame. Already 2 anchors (Create + survival). Existing connection review needed.

REWORK:
- The dossier lists "economy via numismatics — seafood dishes as sellable trade goods; M-09" — M-09 is RETIRED. Bare-sellable links are the ambient endpoint, not a weave. This should be dropped or reframed as M-26 (consumption sink: cooked fish consumed against hunger/diet pressure) or M-29/M-30 (cross-route dependency).

New candidates:

- from: createfisheryindustry:fish_skin | via: create:mixing or farmersdelight:cutting | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Fish skin is a leather analogue — route it through occultism:ritual or ars_nouveau:imbuement as a cheap organic reagent for early-tier magic crafting (parchment-substitute, spirit binding medium); a fisher supports the magic specialist.

- from: createfisheryindustry:seafood_chowder / cooked_cod_steak / cooked_salmon_steak | via: farmersdelight:cooking (already inbound) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Processed seafood fills the Protein diet group (Diet-AppleSeed), creating continuous demand for the fishing operation — consumption renews the loop's return edge.

- from: createfisheryindustry:bait_trap catch outputs (cod, salmon, mussels, lobster) | via: createfisheryindustry:peeling + farmersdelight:cooking | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: A fisher specialization produces processed seafood ingredients (cooked lobster, chowder) that a cook/colony player's Kitchen hut requests — neither the fisher nor the colony is self-sufficient for the full food chain, so they must trade. Cross-route dependency: fisher output → MineColonies colony food supply.

- from: createfisheryindustry:harpoon / pneumatic harpoon gun | via: loot-seed or create:sequenced_assembly upgrade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The harpoon is a ranged combat tool for underwater/boat skirmishes — the combat specialist farms sea-creature drops and sells the processed seafood; harpoon gun as a traded war materiel. Ties the fishing route to the danger/combat pressure face.

- from: createfisheryindustry:copper_diving_leggings | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: Diving leggings extend Create's diving gear — relevant to underwater exploration, not airship drivetrain. Aeronautics is about air vehicles; the thematic link to underwater gear is a clash. Not a genuine M-24 (propulsion/control component).

- from: createfisheryindustry:fish_skin (as leather substitute) | via: vanilla crafting or create:mechanical_crafting | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: Fish skin as a structural airframe material stretches credulity badly — no player would nod at leather-equivalent fish hide as an airship hull component. Tone clash overrides the material adjacency.






