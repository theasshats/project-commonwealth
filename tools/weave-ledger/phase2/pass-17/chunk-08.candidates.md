# Phase 2 candidates — chunk-08

## immersivearmorhud   [anchors: client-only UI / support (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot table, no recipe-types, no material surface. Pure client HUD overlay (armor-durability display). Sanctioned support role; no coherent weave possible.

## nochatreports   [anchors: support / privacy-networking (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types, no material. Intercepts chat-signing protocol at the network layer. Sanctioned support role; nothing to weave.

## immersive_paintings   [anchors: decoration palette / support (1)]

Power-read: 4 items (painting, glow_painting, graffiti, glow_graffiti) — all decorative canvas blocks; no c:tags, no loot. The join surface is the painting *item itself* (crafted from vanilla mats — stick/wool/dye). No processing method of its own.

Method-pull candidates:
- Could a painting frame craft require a Create-pressed iron frame? Thematic: "an art press." But pressing a painting frame is busywork with no loop benefit — it adds a step to a decoration item that gives the survival/economy loop nothing back. Red-team: a player who wants to hang art would find this friction, not depth.
- Could glow_painting require a magic-infusion step (M-10) for the glow effect? The glow property is cosmetic; gating decoration behind arcane infusion would be M-10's "do not gate basic components" anti-rule.
- Loot-seed: paintings/graffiti seeded into structure loot (CTOV villages, underground villages) as found art? Architecturally plausible but the mod's items are player-created images, not fixed art tiles — the mechanic doesn't produce a stable "item" to drop.

- from: immersive_paintings:painting (frame) | via: recipe | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: pressing a painting frame is friction on a decoration item; zero loop benefit; no motif fits (M-04 recycles deco back to raw, not forward); busywork
- from: immersive_paintings:glow_painting | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: M-10 anti-rule — do not gate basic/everyday components behind infusion; glow paintings are a decoration item, gating them would be punitive
- REWORK: existing "decoration palette / support" anchor is correct; the dossier's own assessment (LEAVE) is sound. No connections to evaluate.
- OK — connections sound (1-anchor decoration mod; no forced 2nd anchor warranted; the dossier correctly LEAVE'd it).

## create_integrated_farming   [anchors: create, survival (2)]

Power-read: roost blocks (chicken/duck/goose variants) passively produce eggs, feathers, raw poultry; fishing nets produce fish/aquatic drops. No registered recipe-types; a passive-production extension of Create + FarmersDelight. Has loot=yes (drop table). Anchors: create + survival — already at the target floor of 2.

Existing connections review:
- Create anchor: roosts are contraption-compatible blocks operated by Create Mechanical Arms; chicken/duck/goose products feed FarmersDelight cooking chains. Sound — the production edge is real and jar-grounded (deps: create, farmersdelight).
- Survival anchor: automated animal-product supply directly addresses the diet/pressure loop (poultry = protein group in AppleSeed Diet). Sound.
- Dossier candidate (economy / M-09 / WEAK): steady egg/feather/fish bulk as a sell-good. Flagged WEAK by dossier; let's evaluate properly.

Method-pull — looking for a 3rd/stronger weave:
- M-12 (processing-chain pull): Roost eggs → FarmersDelight cutting / ExtraDelight mixing bowl for mayonnaise / custard — these are intermediates that feed *other* recipes (pastries, baked goods). This is exactly M-12's "useful intermediate" case. Power: everyday (eggs are common Roost output). Tone: coherent — automated kitchen feeding a recipe chain.
- M-09 (luxury good → coin): Goose eggs or specialty duck products as a premium sell-good. Everyday items; the numismatics sell is possible but the "luxury" label doesn't fit a commodity. Too weak as a standalone — the economy edge is cleaner through M-12 (processed goods → sell).
- M-13/aeronautics: Lava Fishing Net produces fish from lava biomes — could exotic lava-fish be a fuel additive or a Create method input? Thematic stretch; no clean motif.

- from: roost egg output | via: farmersdelight:cutting / extradelight:mixing_bowl | to: survival (food-processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the roost's egg stream flows straight into an automated kitchen — custard and mayo without a henhouse patrol
- from: roost egg / goose egg | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: poultry eggs are commodity goods, not luxury items — M-09 fits high-effort consumables; a bulk egg sell undercuts the currency weight the motif is designed for; M-12 processing into a finished food is the stronger economy connection
- REWORK: dossier's M-09 economy candidate is correctly labelled WEAK; the stronger candidate is M-12 routed through FarmersDelight/ExtraDelight as a processing-chain pull. The create+survival anchors are sound and well-stated.

## cubes_without_borders   [anchors: support / client QoL (1)]

LEAVE — genuine zero-content mod: no items, no blocks, no loot, no recipe-types. Adds a single Video Settings option (borderless fullscreen). Sanctioned support role; nothing to weave.

## resourcefullib   [anchors: support (1)]

LEAVE — pure API/library: no items, no blocks, no loot, no recipe-types, no gameplay content. Required transitively by Resourceful-family dependents. Sanctioned support role; no coherent weave possible.





