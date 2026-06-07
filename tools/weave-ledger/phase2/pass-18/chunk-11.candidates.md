# Phase 2 candidates — chunk-11

## foodeffecttooltips   [anchors: support/QoL (1)]

LEAVE — pure client tooltip renderer; zero items, zero recipe surface, zero loot table. No content to route through any method. Sanctioned support role (UI clarity for the food/diet system, which is a deliberate survival-pressure lever, but foodeffecttooltips contributes nothing mechanically — it only makes existing food effects readable). Forcing any edge here would be inventing content the mod doesn't have.

## tfmg   [anchors: Create (1)]

Power-read: TFMG is a mid-to-endgame Create addon. Its everyday tier is TFMG concrete/asphalt (cosmetic deco). Its mid tier is steel + cast-iron processing (Industrial Blast Furnace, the canonical mid-game wall). Its endgame/flagship tier is the full oil refinery chain (Pumpjack → Distillation Tower → fuels) and the Voltage electricity network with winding/polarizing. The electricity grid + combustion engines are the pack's primary FE/kinetic bridge to aeronautics propulsion. Recipe depth: steel takes iron ore → coke + blast-furnace steps; fuels take crude → distillation fractions — already GregTech-style multi-step.

Existing connection review: REWORK — the dossier flags aeronautics (fuels/engines) as a STRONG candidate (M-13) and economy (steel/fuel as sell-goods, M-08/M-09) as MED, but TFMG currently has only 1 anchor (Create). That's a clear gap for a mod this central. Both aeronautics and economy links are load-bearing and should be formalized.

**Candidate 1 — TFMG fuels → aeronautics propulsion (M-13)**
- from: tfmg:diesel / tfmg:gasoline / tfmg:lubricant | via: aeronautics engine fuel intake (config/recipe) | to: aeronautics | motif: M-13 | power: endgame | tone: ok — dieselpunk oil refinery powering airships is thematically coherent; the Distillation Tower already produces these fractions and they are reserved as M-13 reagents | verdict: ACCEPT | hook: the same refinery that runs your factory tanks your airships — no separate fuel chain needed

**Candidate 2 — TFMG steel → aeronautics structural hull (M-23)**
- from: tfmg:steel_ingot / steel plate (Create:compacting) | via: aeronautics airframe construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok — steel is the canonical hull metal; TFMG's blast-furnace steel as the airframe material is the obvious narrative and pairs naturally with M-13 (fuel + hull from the same industrial tier) | verdict: ACCEPT | hook: you smelt steel to build the ship and refine diesel to fly it — TFMG is the factory that makes aeronautics possible

**Candidate 3 — TFMG steel → coin via processed scarcity (M-08)**
- from: tfmg:steel_ingot → Numismatics mint (or trading_floor depot trade) | via: numismatics:mint / villager trade | to: economy | motif: M-08 | power: mid | tone: ok — steel is high-effort processed scarcity (iron + coal → coke → blast furnace), minting coin from it is the natural economy hook; TFMG already has this as a MED candidate | verdict: ACCEPT | hook: the factory that can't stop running produces coin when it has surplus steel — steel trades for goods it can't make

**Candidate 4 — TFMG combustion engine → aeronautics drivetrain (M-24)**
- from: tfmg combustion engine block (gasoline/diesel powered) | via: aeronautics engine/propulsion recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok — TFMG's combustion engine is a mechanical kinetic source; routing it as the engine block in an aeronautics propulsion assembly is thematically exact (the drivetrain side, distinct from M-13 fuel) | verdict: ACCEPT | hook: bolt the combustion engine onto the propeller shaft — it's the drivetrain that actually makes the ship move

**Candidate 5 — TFMG electricity grid → Create-magic FE bridge (M-17)**
- from: tfmg Voltage electricity (generator → cable → accumulator) | via: createaddition:charging or create_new_age:energising | to: magic | motif: M-17 | power: mid-endgame | tone: ok — TFMG's FE-compatible grid can charge Create Addition tools and Ars Nouveau focuses; threading the industrial electric tier into magic gear upgrades is mechanically supported (createaddition:charging exists) | verdict: ACCEPT | hook: the refinery's generator charges your spell-focus — magic and industry share the same power grid

**Candidate 6 — TFMG saltpeter/sulfur → magic catalyst (M-10)**
- from: tfmg:sulfur / tfmg:saltpeter (byproducts from distillation/coking) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: marginal — sulfur has an alchemical/infernal tradition that makes it plausible as an Ars imbuement catalyst, but saltpeter is more "gunpowder chemistry" than "arcane material"; the link needs thematic scaffolding to feel natural | red-team: forcing gunpowder-chemistry byproducts into arcane infusion feels like two mods' tones colliding (dieselpunk vs. arcane); the chemistry→alchemy bridge exists in real alchemy but may read as arbitrary to players | verdict: REJECT | reason: tone marginal — sulfur/saltpeter are diesel-chemistry outputs, arcane imbuement is nature/arcane themed; the pairing lacks player-facing intuition and no existing motif instance establishes this bridge; better left to the magic pillar's own reagent choices

REWORK: The existing dossier correctly identifies aeronautics and economy as the obvious 2nd-anchor targets. Formalize M-13 (fuels) and M-23 (steel hull) as the primary aeronautics seam; M-08 (steel → coin) as the economy seam. The electricity-to-magic bridge (M-17) is a useful depth weave for the magic pillar that deserves a weave entry even if it's not a primary anchor. The dossier's "weak" survival/flamethrower note is correctly dismissed — record as rejected below.

**Candidate 7 — TFMG weaponry as survival pressure (rejected dossier candidate)**
- from: tfmg advanced potato cannon / combat items | via: survival danger pillar | to: survival | motif: no-motif | power: mid | tone: clash — TFMG's combat items are incidental; the mod is fundamentally an industrial-processing chain, not a combat mod; survival-pressure anchors should come from dedicated mob/boss/environmental mods | verdict: REJECT | reason: no-motif; TFMG's survival contribution is background (industry has an ecological cost, §3a) not a direct weave; forcing a combat edge onto a factory mod reads as arbitrary

## create_train_parts   [anchors: aeronautics (1)]

Power-read: every item in this mod is everyday-level craft-and-place deco for trains. Windows, steps, slides, crossings — all low-cost, cosmetic/functional, no processing node. 16 items total. This is a thin surface.

Existing connection review: OK — the single aeronautics anchor is correct (it exists to dress Create trains, the land-logistics arm of the economy). The dossier notes a possible Create tie via pressed-sheet gating (M-04-adjacent) but correctly judges it weak.

**Candidate 1 — train parts → Create pressed-sheet gate (M-04-adjacent)**
- from: create_train_parts:brass_sliding_window / train_step_brass | via: create:pressing (require brass_sheet in recipe) | to: Create | motif: M-04 | power: everyday | tone: ok — these parts are already styled as Create-tier industrial fittings; routing them through a pressed sheet keeps it thematically inside the Create aesthetic | red-team: the dossier already calls this WEAK and flags "low value"; a pressed-sheet gate on a cosmetic train step is exactly the kind of forced recipe depth the cost model warns against — everyday items should not be gated behind a complex step | verdict: REJECT | reason: everyday-tier cosmetic items; a Create processing gate would be arbitrary depth with no loop advancement (the train step does not feed any other system); dossier assessment upheld

**Candidate 2 — sliding window as aeronautics contraption fitting (M-23-adjacent / structural)**
- from: create_train_parts:train_sliding_window / crossing | via: aeronautics construction recipe (window panel in airship build) | to: aeronautics | motif: M-23 | power: everyday | tone: ok — airships use windows and walkable steps the same way trains do; the blocks literally work on contraptions | red-team: this would be authoring a recipe that says "use this train window as an airship window" — it makes sense in-world but the mod already sits in the aeronautics pillar via its train tie; adding an explicit recipe changes nothing about anchor count and the block works on ships anyway (contraption-compatible) | verdict: REJECT | reason: the mod is already aeronautics-anchored; the blocks work on ships without a recipe gate; authoring a recipe here is a phantom weave (no new loop connection, no 2nd anchor gained, no advancement)

LEAVE — this mod's content surface (deco fittings for train contraptions) is genuinely single-system. Both weave candidates are either arbitrary-depth or phantom. The correct call is support-tier deco for the aeronautics/economy pillar; no 2nd anchor is available without manufacturing a forced edge. Record as LEAVE; if a 2nd system ever surfaces (e.g. train crossings seeded into structure loot, M-14-style), revisit.



