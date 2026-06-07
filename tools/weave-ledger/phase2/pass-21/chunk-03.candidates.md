# Phase 2 candidates — chunk-03 (pass-21, blind)

## incontrol   [anchors: server-util/QoL (1)]
- LEAVE — genuine zero-content code/config utility: a JSON spawn/loot rule engine with 0 items, 0 blocks, no recipe-type, no routable material. It can *support* the pack's scarcity/regionality premise (region-gating mob drops that feed M-02/M-08) but it is the enforcement lever, not a node — nothing to route a material through.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond/_netherite (higher tiers) | via: create:pressing / create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the top glider tiers are assembled through Create-pressed sheets, so personal flight gear runs through the tech spine instead of a flat table craft.
- from: vc_gliders:copper_upgrade / nether_upgrade | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: snap a copper/nether upgrade onto an existing glider with a Create deployer (light single-step upgrade application, sized to a mid item).
- from: reinforced_paper feedstock | via: create:milling (pulp/paper chain) | to: survival/create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced paper is a basic everyday feedstock; gating it behind a Create processing chain risks gating a basic component (guardrail). Keep the base glider craftable simply; M-05 already routes the tiers that should cost more.
- from: paraglider tiers | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: a durable tool isn't a consumable luxury good; M-09 is for consumables (wine/cheese), so selling gliders is an arbitrary trade-good edge, not a coherent luxury sink.
REWORK: existing aeronautics anchor is sound (personal traversal tier ladder is a real logistics-arm role) — OK, but it's the *only* anchor; the M-05/M-20 Create links above are the genuine 2nd weave.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — genuine zero-content library: pure heap/blockstate optimization, 0 items/blocks/methods, no material surface. Sanctioned perf-support anchor needs no weave.

## create_hypertube   [anchors: create, aeronautics (2)]
- from: hypertube blocks (tube/entrance/accelerator) | via: create:sequenced_assembly (already inbound) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT (confirm existing) | hook: tubes already assemble through a Create sequenced-assembly chain — the Create anchor is real and method-grounded.
- from: hypertube accelerator | via: numismatics | to: economy | motif: M-08 | power: mid | tone: clash | verdict: REJECT | reason: a transport block isn't a minted coin source nor a luxury consumable; forcing an economy edge onto pure logistics infrastructure is arbitrary.
REWORK: existing aeronautics tag — OK — connections sound. Both anchors are coherent: Create (sequenced-assembly inbound) and aeronautics (it IS the short-hop personnel-transport logistics arm). No weak edge to rework; the dossier's "leave, already ≥2" stands.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — genuine zero-content tooling: it is the scripting engine that authors every weave; 1 placeholder bucket item, no routable material. The weaving tool, not a weave target.

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — genuine zero-content utility: version-handshake only, 0 items/blocks/methods. Nothing to weave.

## jamlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library: platform-abstraction + JSON5 config API, 0 items, dependency-only.

## dynamic_fps   [anchors: support/perf (1)]
- LEAVE — genuine zero-content client-perf utility: runtime FPS/render throttle, no items or methods.

## extradelight   [anchors: survival, create (2)]
- from: grain/coffee/sugar/citrus crops + Vat/Evaporator fluid reduction | via: create:milling / create:crushing / create:pressing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: route flour-milling, coffee/sugar grinding and fluid-reduction through Create equivalents so the deep kitchen reads as Create's downstream, not a parallel processing tree.
- from: feasts + high-tier dishes | via: numismatics sell / MineColonies provisioning | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a 43-feast endgame kitchen turns cooking effort into a sellable luxury / colony food supply (effort → coin). ⚠ player-run-currency caveat (0.9 review).
- from: garlic/citrus/coffee crops | via: serene-season gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: these are everyday staple crops; season-gating a staple makes the whole cuisine layer seasonal and starves the kitchen — M-16 wants a *bonus* niche crop, not the base supply. (Surface for review but reject as costed.)
REWORK: existing inbound weave is create:mixing only — sound but shallow; the M-12 milling/crushing/pressing expansion above deepens the Create anchor so it isn't a single token edge. Survival anchor (deep cuisine) is sound. OK otherwise.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — genuine zero-content language adapter: Kotlin runtime loader, 0 items, dependency-only.

## create   [anchors: create (1, the hub)]
- LEAVE (as a recipient) — Create is the method library, not a mod needing a 2nd anchor; M-03..M-06/M-08/M-12 all ride ITS methods. Do not author edges that consume Create itself. (Not a zero-content library, but the briefing's "hub other mods weave INTO" — nothing to propose inbound.)
REWORK: none — its role as the spine is correct; the loop's production node by definition.

## solmaiddream   [anchors: survival (1)]
- from: maid food-variety stat growth | via: M-09 luxury-food adjacency | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: this addon consumes nothing and outputs no item — it's a pure stat-growth layer riding the shared food pool. No material surface to route; an economy edge would be invented.
- LEAVE — no item/method surface beyond food_book (an inspection tool). Its only hook is the food pool it already shares with the survival/SoL pillar; a forced 2nd edge would be artificial. (Borderline-library: behavior-only addon.)

## moreculling   [anchors: support/perf (1)]
- LEAVE — genuine zero-content render-culling perf mod, no items/methods.

## imfast   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content movement-validation patch: functionally serves aeronautics (lets fast ships run without anti-cheat kicks) but as a behavioral fix, not a wireable resource. No material surface.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — worldgen-only datapack, 0 items/blocks/loot, no recipe surface. Thematic adjacency to the pack's "scarce regional ores" survival design (bigger continents spread resources) but nothing to recipe-route or loot-seed — do not force an edge.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content shared code library, dependency-only.

## endrem   [anchors: survival (1)]
- from: rarest themed eyes (e.g. undead_eye, nether_eye, corrupted_eye) | via: occultism:ritual / ars_nouveau:enchanting_apparatus | to: magic | motif: M-11 (with M-02) | power: endgame | tone: ok | verdict: ACCEPT | hook: a stuck player can ritually transmute a matching themed drop (undead reagent → undead_eye) so the End gate never dead-ends — turns isolated loot eyes into a magic-method sink. Keep costly to preserve exploration intent.
- from: one or two eyes | via: create:sequenced_assembly (derpack:incomplete_*) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: theme-fine but red-team risk — making eyes Create-assemblable trivializes the exploration-gate intent (the whole point is finding them). The magic-ritual fallback above already covers dead-ends more thematically; a second craft route over-supplies. Surface for review.
- from: ancient_portal_frame / eyes | via: numismatics / bountiful board | to: economy | motif: M-14 | power: endgame | tone: clash | verdict: REJECT | reason: a one-time progression key isn't a repeatable bounty/coin good; M-14 wants bulk combat drops, not a unique gate item.
REWORK: existing survival anchor (exploration progression gate) is sound. The single accepted magic transmute is the genuine 2nd anchor; everything else risks the gate's purpose.

## create_new_age   [anchors: create (1)]
- from: thorium_ore (2 biome-modifiers, regional) | via: regional ore-gen + create:crushing | to: survival/scarcity | motif: M-08 (adjacency) | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium as a scarce regional ore (parallel to Ironworks tin) feeds the scarcity foundation — a region that must trade for reactor fuel.
- from: energised reactor outputs / corium / high-tier circuits | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: electrified endgame outputs (corium, overcharged wires) are high-tier sellables — processed scarcity minted into coin.
- from: FE charging (energising) | via: createaddition:charging-style bridge | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: thread the electric tier into magic — an Energiser/charge step powers a magic focus/reagent, bridging Create electricity into the magic pillar (only where it makes sense, endgame-sized).
- from: aeronautics keystone | via: create_new_age:energising / sequenced_assembly | to: aeronautics | motif: M-06/M-05 | power: endgame | tone: ok | verdict: REJECT | reason: plausible but speculative — no concrete aeronautics keystone item named; defer to the aeronautics pillar's own gating rather than inventing one here. Surface for review.
REWORK: existing Create anchor is strong and method-grounded (8 inbound Create methods). OK — connections sound; the proposals above add survival/economy/magic as genuine extra anchors.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — genuine zero-content bridge mod: 0 items/blocks, datapack-only mana-unification between Ars and Iron's. It IS a weave already (an internal magic↔magic glue) with no item surface to route a 2nd cross-system pillar through; forcing one would be artificial.
REWORK: its single magic anchor is correct by design (connective tissue, not a content node). OK — connections sound.

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick/terracotta/concrete roof variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: lossy crush-back is coherent per-block, but 605 blocks make an exhaustive pass low-value and these are everyday deco — only worth it inside a wholesale deco-recycle sweep, not as a standalone weave. Surface for review.
- LEAVE — sanctioned decoration support anchor; no high-value cross-system weave. The only candidate (M-04 crush-back) is rejected as low-value above. Decoration is a valid floor anchor on its own.

== CHUNK COMPLETE ==
