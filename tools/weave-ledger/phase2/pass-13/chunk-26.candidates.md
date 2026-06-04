# Phase 2 candidates — chunk-26

## wits   [anchors: support (1)]
- LEAVE — pure server-side debug command (no items, no outputs, no material surface to weave). Zero-content utility; forcing an edge here would be arbitrary.

## attributefix   [anchors: support/library (1)]
- LEAVE — pure attribute-cap bugfix library; no items, no outputs, nothing to route through any method. Its value is enabling other mods' gear to scale correctly; the weaving belongs on those mods, not here.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals shared-code framework; no material surface to weave. The one shipped item (blueprint:template_chest) is a vanilla-style utility chest with no distinct gameplay identity — too trivial to anchor a pillar and not a candidate for a recipe edge.

## notenoughcrashes   [anchors: support/stability (1)]
- LEAVE — crash-recovery UI mod; no items, no outputs, no material surface. Purely a developer/user-experience fix; weaving has nothing to grip.

## titanium   [anchors: support/library (1)]
- LEAVE — HRZNStudio developer library; titanium:test_serializer is a dev-only recipe type, not gameplay. The dev-content blocks (diamond/gold/iron/smashing_table) are internal test scaffolding with no survival identity. Genuine zero-content code library.

## citadel   [anchors: support/library (1)]
- LEAVE — sbom_xela (Alex's Mobs/Alex's Caves) shared animation/spawn framework. Items present (citadel:citadel_book, debug, effect_item, fancy_item, icon_item) are internal dev tooling with no player-facing recipe identity. The content weaving belongs on Alex's Mobs/Caves, not on this library itself.

## create_dragons_plus   [anchors: Create (1)]
<!-- This mod IS the Create fan-processing library. Its own recipe-types (ending, freezing) are weave TARGETS
     that other mods route through; it doesn't need a second pillar for itself in the same way. But let's
     check: does it have loose materials of its own that could earn it a 2nd pillar? -->
<!-- Materials: dragon_breath fluid, dye fluids (16 colors), blaze_upgrade_smithing_template, fluid_hatch,
     levitite_fragile_fluid_tank. Dragon breath is the interesting one — it's the catalyst for fan_ending. -->

- from: create_dragons_plus:dragon_breath_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Dragon's Breath is a vanilla material (also piped through the fan_ending catalyst here); using it as an Ars imbuement input is coherent thematically, but this mod itself doesn't "own" dragon's breath — it just wraps it in a fluid form. The weave belongs on a mod that actually adds a dragon (e.g. a dragon mod's boss drop), not on the fluid-piping library. Red-team: this would create a confusing double-use of a vanilla fluid with no clear ownership.

- from: create_dragons_plus:blaze_upgrade_smithing_template | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: The blaze smithing template is a support item for sibling add-ons (Central Kitchen, Enchantment Industry) — its recipe context is defined by those mods. Gating it behind a sequenced assembly here would conflict with or duplicate what its consumer mods define. Not this mod's surface to weave.

- from: create_dragons_plus dye fluids (bulk dyeing station) | via: create:mixing → numismatics | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: Dye fluids are bulk convenience throughput, not scarce processed metals — M-08 is explicitly "scarce regional metal → Create-processed → coin." Routing dye fluid to a coin mint is arbitrary and tone-clashes with the scarcity-driven economy pillar.

- REWORK-CHECK: existing anchor is Create (1). The dossier already calls this a support/library role for the add-on family and says "leave." Agree — the fan-catalyst methods (ending/freezing) are weave infrastructure that other mods route through; the module earns its place fully via its Create role. No rework needed on existing connections; no new cross-pillar link is coherent with this mod's own materials.

- LEAVE — its content role is as a method-provider (fan_ending / fan_freezing), not a material source. The weaving belongs on the mods that route materials *through* those methods, not on the library itself. No coherent 2nd pillar from its own material surface.

## create_ultimate_factory   [anchors: Create (1)]
<!-- Pure recipe datapack — no items of its own; it adds recipes onto Create's existing types. The question
     is whether any of its authored recipes create a bridging output that could anchor a 2nd pillar.
     Its outputs: strata stones, diamond (renewable), deepslate, calcite, blaze rods (via lava+coal block),
     all vanilla materials. No foreign mod outputs. -->

- from: create_ultimate_factory renewable diamond (coal-block+lava→diamond via create:compacting) | via: numismatics coin mint | to: economy | motif: M-08 | power: endgame | tone: clash | verdict: REJECT | reason: M-08 is "scarce regional metal → processed → coin." Renewable diamonds are a vanilla material the mod makes reproducible through Create; the economy anchor for scarcity depends on diamonds *being* scarce in this pack. If CUF's diamond recipe is kept, minting it as coin would undercut scarcity intent. The pack may want to trim this recipe precisely to preserve scarcity — so leaning on it for an economy weave is fragile and tone-clashes with the scarcity-driven design pillar.

- from: create_ultimate_factory renewable blaze rod / calcite outputs | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: This mod has no items of its own — the blaze rods are vanilla, and magic imbuement of vanilla materials belongs on the magic mods directly. Weaving here would attach the link to a recipe-datapack with no identity, making provenance confusing. Not a clean surface.

- LEAVE — recipe datapack with no items of its own; it deepens Create throughput rather than bridging pillars. Any cross-pillar benefit from its outputs (renewable vanilla mats) belongs on the consumer mods, not on this datapack. One deliberate note: if any CUF recipes conflict with Derpack's scarcity intent (e.g. the renewable diamond recipe), they should be trimmed regardless of weaving.

## everycomp   [anchors: support/decoration (1)]
<!-- Runtime block/recipe generator — auto-generates wood-variant blocks (doors, signs, furniture etc.)
     in every installed wood type. Its outputs live in host mod namespaces; it has no distinct item identity. -->

- from: everycomp wood-variant outputs (doors, signs, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is "metal/stone deco crushes back to raw/gravel + XP nugget." Wood variants don't fit M-04's metal/stone-deco scope — they're wood blocks and wouldn't yield a useful crush byproduct. The pattern doesn't apply here.

- from: everycomp wood-variant furniture/blocks | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 is "high-effort consumable (wine, cheese, processed crop) as trade good." Automatically-generated wood variant blocks are low-effort palette-filler, not high-effort craftables. Using them as a coin-sink luxury good is tone-clashing and arbitrary — they exist to fill gaps, not to be premium goods.

- LEAVE — it's a generator, not a content set. Its outputs already ride host mods' recipes (including Create wood shapes, Macaw's doors, etc.); weaving belongs on those host mods. No coherent 2nd pillar from this mod's own surface.

## create_new_age   [anchors: Create (1)]
<!-- Rich content mod: energising recipe-type (FE + rotation → "charged" outputs), electric motors, wires,
     solar heating plates, nuclear reactor (Thorium ore → Corium), generator coils/magnets.
     Existing inbound: create:compacting, crushing, cutting, deploying, mechanical_crafting, mixing, pressing,
     sequenced_assembly — already deep in Create spine.
     Key loose materials: copper_wire, blank_circuit, copper_circuit, fluxuated_magnetite, corium,
     thorium_ore, carbon_brushes, electrical_connector, generator_coil, layered_magnet, overcharged wires.
     Method on offer: create_new_age:energising (route foreign items through this electric-charge step). -->

<!-- --- CANDIDATE 1: magic pillar via M-17 --- -->
- from: create_new_age:energising (the energiser machine) | via: create_new_age:energising (charges a magic focus/scroll) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: An Ars Nouveau focus or Iron's Spellbooks scroll gains a crackling "overcharged" tier when run through the Create Energiser — the electric current refines the arcane medium, and suddenly the machine room has a reason to feed the mage.
<!-- Red-team: Is this coherent or is "electricity charges a magic item" too convenient? The electric+magic
     junction is a well-established pack trope (Botania/Mana-condenser, etc.). M-17 explicitly covers this
     ("Create electricity charges a tool/focus/reagent, threading the electric tier into magic/tech gear").
     It survives. Power: mid (a focus or scroll is mid-tier; not a basic component, not an endgame keystone —
     one step via energising is right). -->

<!-- --- CANDIDATE 2: aeronautics pillar via M-24 --- -->
- from: create_new_age:generator_coil / layered_magnet | via: crafting/create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Aeronautics propulsion needs a generator; the CNA generator coil and layered magnet are the exact components a rotational-to-electrical drivetrain would need — the airship's power module becomes a real sub-assembly.
<!-- Red-team: Is "generator coil for propulsion" mechanical or hand-wavy? Generator coils literally ARE the
     electrical output of rotation — routing them into an airship engine's power supply is exactly the kind
     of coherent part that M-24 targets ("mod's mechanical part feeds Aeronautics propellers/engines/control
     surfaces — the drivetrain side"). Survives. Power: mid (generator coils are mid-tier Create-electric
     parts, not endgame; one step of mechanical_crafting is proportionate). -->

<!-- --- CANDIDATE 3: economy pillar via M-08 --- -->
- from: create_new_age:thorium_ore (scarce regional worldgen) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is a rare regional ore; the crew that finds and processes the deposit — crushing it to refined material then minting into coin — controls the nuclear-grade energy economy. Scarcity drives the trading relationship exactly as designed.
<!-- Red-team: Does Thorium already have a full usage path (nuclear reactor fuel)? Yes — but M-08 is a
     byproduct / surplus path, not a primary competing use. The crushing byproduct (some thorium dust
     remainder) going to coin is the "mine surplus to market" path, parallel to the ore-to-reactor path.
     This is exactly M-08's intent. Power: mid (Thorium is meaningful but not the rarest ore in pack).
     Both uses coexist; no conflict. -->

<!-- --- CANDIDATE 4: deeper M-06 / M-05 endgame gating --- -->
- from: create_new_age advanced reactor components (reactor_casing, reactor_rod, reactor_fuel_acceptor) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Building a nuclear reactor isn't a crafting-table affair — the reactor fuel rods and casing pass through a multi-stage sequenced assembly line (deploying insulation, pressing the rod core, compacting the shielding) before the reactor multiblock can even be started.
<!-- Red-team: Does this over-gate something that should be accessible? No — a nuclear reactor is an
     explicit endgame structure. Gating its key components behind sequenced assembly is proportionate to
     its power (M-06: "endgame items are multi-stage chains"). The basic motor should NOT be gated this way
     (everyday component), but the reactor sub-assembly absolutely fits. Power: endgame; confirmed. -->

<!-- --- CANDIDATE 5: magic via M-11 (corium as ritual reagent) --- -->
- from: create_new_age:corium (radioactive reactor waste, solid_corium) | via: occultism:spirit_fire / ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Corium — the molten nuclear waste product of a reactor meltdown — has an unmistakable "cursed material" energy. Running it through an Occultism spirit-fire ritual transmutes it into a corruption-aligned essence, giving mages a reason to want reactor output and turning nuclear waste into a magic resource.
<!-- Red-team: Is "radioactive waste → dark magic reagent" tone-appropriate or too on-the-nose? Actually it
     fits extremely well — Occultism works with soul-fire, corruption, and demonic spirits; corium as a
     tainted material is coherent thematically. It's also a strong narrative hook (the reactor lab and the
     occult sanctum share a supply chain). Survives. Power: endgame (solid_corium requires running the
     reactor, which is a deep Create-electrical investment). -->

<!-- --- CANDIDATE 6: aeronautics via M-13 (overcharged wire / FE as power feed) --- -->
- from: create_new_age FE generation (motor/generator/solar systems) | via: Aeronautics FE engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is explicitly "TFMG/Create-Addition fuel → engine intake." FE is not a fuel in that sense — it's a power form the aeronautics engine might consume differently. If aeronautics engines take FE directly, this is M-17 territory. The overlap and ambiguity between M-13 and M-17 here means this is not the clean motif-routing it appears to be; surfacing as a no-motif / escalate rather than forcing a misfit. REJECT — no-motif (FE-as-aeronautics-fuel falls between M-13 and M-17 without a crisp method anchor; flag for Gate-0 clarification if aeronautics FE intake is confirmed in-game).

<!-- --- EXISTING CONNECTIONS AUDIT --- -->
- OK — existing single anchor (Create) is sound and well-grounded. The mod's recipe inbounds (sequenced_assembly, mechanical_crafting, deploying, pressing, mixing, crushing, compacting, cutting) show it is already deep in the Create spine. The accepted candidates above add magic (M-17 energising + M-11 corium-ritual), aeronautics (M-24 generator-coil drivetrain), and economy (M-08 thorium-to-coin) — bringing it to four pillars, appropriate for a flagship Create add-on.

== CHUNK COMPLETE ==










