# Phase 2 candidates — chunk-09

## create   [anchors: Create (1 — IS the pillar)]

The dossier is clear: Create is the method-library hub that other mods weave INTO. It is not a mod that
needs a 2nd pillar — it is pillar #1 and every M-03/M-04/M-05/M-06/M-08/M-12/M-19/M-20 connection
rides one of its 17 recipe-types. No outgoing weave edge belongs on Create itself.

- LEAVE — Create is the universal pull-target (the method library); every pillar already threads through
  its recipe-types. Adding an outbound edge would invert the weaving direction. Dossier confirms
  explicitly: "N/A as a recipient — do not author edges that consume Create itself."

## extradelight   [anchors: survival, Create (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- survival ← its 146+ meals, 43 feasts, crops, kitchen decor. Solid.
- Create ← `create:mixing` (inbound weave in made-by; fluids/ingredients mixed via Create). This is a
  single upstream edge. The dossier flags the opportunity to deepen it: milling→flour, crushing→ground
  coffee/spices, pressing→juice/oil, with the Vat/Evaporator fluid-reduction using Create as input.

Audit of EXISTING connections:
- OK — survival anchor is well-grounded; the food variety is genuinely survival-facing.
- REWORK (depth): the Create weave is currently a single `create:mixing` inbound edge — thin for a mod
  with 16 registered recipe types of its own. The dossier identifies the correct tightening: route
  grain → flour via `create:milling`, coffee/garlic/spice grinding via `create:milling`, and liquid
  reductions (apple cider, syrups, salt) into `create:mixing` / `create:compacting` before they hit the
  Vat/Evaporator. That turns extradelight's kitchen into a *downstream* consumer of Create intermediates,
  not just something Create can mix ingredients for. This is M-12 (processing-chain pull) — accepted motif,
  depth scales correctly with these everyday inputs.

New candidates to deepen the 2nd pillar:

- from: grain crops (c:crops/wheat etc.) | via: create:milling → extradelight:oven/dough_shaping | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mill grinds flour that feeds the bakery — the Create spine runs through the kitchen

- from: coffee beans (c:crops/coffee) | via: create:milling → extradelight:oven/mixing_bowl | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: industrial coffee grinding before brewing is exactly what the mill is for

- from: extradelight feast dishes (high-effort cooked products) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a feast platter is the colony chef's premium trade good; cook effort → coin is coherent

- from: extradelight:apple_cider / fruit syrups (fluid outputs) | via: create:compacting / numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: bottled cider is a sellable luxury — the same chain Alcohol Industry rides

- from: extradelight:drying_rack outputs (dried herbs/fruits) | via: ars_nouveau:imbuement (herb-infusion) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: dried culinary herbs going into arcane infusion is a stretch — the tone is domestic-kitchen, not apothecary; theme-fit fails. Leave culinary herbs as food, not magic reagents.

## occultengineering   [anchors: Create, magic (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- Create ← `create:compacting, create:filling, create:haunting, create:item_application, create:mixing, create:pressing` — a full inbound suite; deep and grounded.
- magic ← `occultism:ritual, occultism:spirit_fire` — the OCE bridge-mod is literally the Create×Occultism joint. These connections are structural, not incidental.

Audit of EXISTING connections:
- OK — both pillars are genuinely present. The mod exists *specifically* to be this bridge; the connections are not forced.
- OK — `occultengineering:spirit_solution` is correctly reserved in the reagent-ownership table; it's the occult intermediate (M-11). No double-spend risk here.
- REWORK (very light): the dossier flags a WEAK 3rd-pillar candidate — sterling silver (c:ingots/sterling_silver) minted into coin via M-08. This is worth surfacing but probably not worth authoring until the 0.9 economy pass. Note: sterling silver is a scarce occult alloy; Create-crushing → numismatics mint reads as coherent (M-08), but it's a bonus weave, not a gap.

Optional candidate (not a gap, improvement only):

- from: occultengineering:sterling_silver (ingot, Create-processed scarcity) | via: create:crushing → numismatics vendor/mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT (low priority — 0.9 economy pass) | hook: occult alloy refined through the industrial spine enters circulation as a premium coin metal

- from: occultengineering:spirit_solution | via: ars_nouveau:imbuement (arcane conversion) | to: magic (Ars) | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is reserved as the Occultism-side intermediate (M-11); cross-wiring it into Ars imbuement would double-spend the reagent across two magic systems without a Gate-0 decision. Escalate if desired.

## numismatics   [anchors: economy, Create (2)]

Already at the 2-pillar goal; quality-audit mode applies.

Existing connections:
- economy ← numismatics IS the economy pillar keystone. Coins, vendors, bank accounts — this is the destination for M-08/M-09/M-14 weaves.
- Create ← hard dependency; coins/machines are Create-styled; crafted via Create.

Audit of EXISTING connections:
- OK — both pillars are structurally present and correct. Numismatics is the destination node for the economy web; it is correct that it has no outbound edges into other pillars. The dossier notes: "leave as the destination, don't add an outgoing edge."
- OK — reagent-ownership is clean; the coin types (spur..sun) are reserved to the economy pillar.
- No REWORK items needed. The existing weaving direction (other mods → numismatics vendor) is correct.

No new candidates: this mod is the economy hub, not a mod that itself needs weaving. All economy connections are inbound.

- LEAVE — numismatics is the economy-pillar hub; it functions as the destination in every M-08/M-09/M-14/M-21 weave. Adding outbound edges from coins would invert the design. No 2nd-pillar gap.

## aeronautics_bundled   [anchors: aeronautics (1)]

The dossier is clear: this is a bundle-wrapper jar that registers 0 blocks, 0 items, and 0 recipe types
under the `aeronautics_bundled` namespace. Real content (levitite, propeller bearing, envelope/hot-air
burner, etc.) registers under the `aeronautics`/`sable` namespaces. The dossier explicitly states that
"weaving belongs on the `aeronautics` namespace dossier, not this bundle wrapper."

Power-read: there is nothing to weave here — no materials, no recipe-types, no outputs.

- LEAVE — bundle-wrapper with zero content under this namespace. Weave candidates belong on the `aeronautics` dossier. Forcing an edge here would be attaching to nothing.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

Pure cosmetic add-on: 16 dyed levitite variants + 4 tire sizes × 16 colors. Registers 0 recipe-types; consumes base levitite/tires + a vanilla dye → colored variant via crafting table (or dye-in-offhand ritual). 0 c:tags.

**Method-pull**: No processing methods registered; no material the palette needs. The dye step uses vanilla dyes — routes through nothing except a crafting table.

**Power-read**: All items are cosmetic; everyday-to-none in power level. No tier progression exists — you color a levitite block the same on day 1 as day 100.

**Theme-fit / red-team**: The candidates the dossier raises:
- "Route dye via Create mixing for color" — gilding. A levitite block + dye going into a mixer just to produce a colored block is a non-edge. The vanilla crafting table is the correct form. A forced Create mixing step would add friction to a decoration action with zero gameplay benefit and would violate the "don't gate basic/everyday components behind complex recipes" guardrail.
- "Decoration palette is a sanctioned support role" — correct. The dossier itself concludes LEAVE. A second pillar is not possible without manufacturing an edge.

- LEAVE — cosmetic skin layer (levitite/tire color variants). No processing methods, no non-trivial outputs, no recipe surface. No coherent 2nd pillar exists that isn't contrived. A forced Create-mixing dye step would gate everyday cosmetics behind machinery for no game reason.

## alcohol_industry   [anchors: Create, survival (2)]

Already at the 2-pillar goal. Inbound weaves confirmed: `create:filling` + `create:mixing` (Alcohol Base assembly through Create). The Alcohol Boiler is the registered method (`alcohol_industry:alcohol_boiling`).

**Existing connections audit:**
- Create ← `create:filling` + `create:mixing` inbound: solid. The Alcohol Base is assembled with Create machinery before the Boiler finishes it. This is M-12 (processing-chain pull) in action.
- survival ← drinkable buffs (beer/vodka/whiskey/tequila with effects). Coherent survival output.

**Quality audit:**
- OK — Create weave is genuine (not incidental). The mod was designed as a Create production-line mod; the two inbound Create methods are load-bearing.
- OK — survival anchor: consumable effects justify the survival pillar.
- Gap flagged by dossier: economy is the obvious 3rd. Finished spirits are exactly the kind of luxury good M-09 targets.

**New candidate (deepening, not plugging a gap):**

- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits, mid-effort Create output) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a crate of spirits is the distillery's export; the same Create chain that makes them ends at the vendor — the economy reads as a production line with a market at the end

- from: alcohol_industry:alcohol_base (fluid) | via: extradelight:vat / ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Alcohol Base is an industrial intermediate (a feedstock fluid); pulling it into arcane infusion as a magic reagent would require it to carry magical significance it has none of. Tone clash: industrial distillery ≠ arcane ingredient. Leave.

## ars_nouveau   [anchors: magic (1)]

One pillar only; needs a 2nd. Ars Nouveau is the magic spine — 18 registered recipe-types, the Source economy, the M-01 hub (`source_gem`). Its dossier identifies strong candidates.

**Method-pull:**
- Ars' Vitalic Sourcelink (mob death/baby events → Source) and Agronomic Sourcelink (crop/tree growth → Source) are *non-recipe* mechanics that already consume organic world-activity passively. The pack's farm/mob mods (FD, ExtraDelight, Alex's Mobs, Naturalist, etc.) generate exactly these events as surplus. This is M-02 (mob-drop reagent sink via Vitalic) and a survival→magic organic link.
- The `ars_nouveau:imbuement` method is the M-01/M-10 hub: foreign essences/gems → source_gem. Reserved; reuse, don't double-spend.
- `ars_nouveau:crush` method exists — could crush foreign materials into Ars-relevant dusts, but no strong target identified without the worldgen mods' dossiers at hand; flagging as exploratory.

**Power-read:**
- source_gem: mid (mid-game progression gate, not day-1). Imbuement chamber requires some setup.
- Sourcelinks: everyday (just build one near a farm/mob farm).
- Spell glyphs / enchanting apparatus: mid to endgame.

**Theme-fit / red-team:**
- survival→magic via Sourcelinks: Players grow crops or breed animals, and the Vitalic/Agronomic Sourcelinks passively accumulate Source. This is *already native to Ars* — no recipe needed; the magic system was designed to drink from the survival world. Red-team: "Is this a weave, or just the mod working?" — it's the mod working, which *is* the weave. The integration is that survival activity powers magic; the connection is structural.
- economy: source_gem as a sellable good (M-09) is weak — the dossier flags it as weak. Source gems are a magic currency used to power the system; selling them would drain the player's magic infrastructure. Better left as magic-internal.
- Create→Ars: No Create method directly feeds Ars recipe-types out of the box. The closest coherent path is `create:milling` crushing a worldgen material (archwood log → dust?) → `ars_nouveau:imbuement`, but archwood is Ars' own wood. Alternatively, Create's `create:haunting` (soul-fire transmutation, M-19) producing a spirit-adjacent output that feeds Ars is thematically interesting — but Ars' inputs are organic/gem, not haunted-metal. Flag as exploratory/low-confidence.

**Candidates:**

- from: crop surplus / mob death events (farm mods' organic output) | via: ars_nouveau:agronomic_sourcelink / vitalic_sourcelink (passive drain, not a recipe) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the farm feeds the spell-books — plant more crops, the source jars fill faster; survival and magic are the same loop

- from: foreign essences / lapis / amethyst | via: ars_nouveau:imbuement → source_gem | to: magic (internal) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: the imbuement chamber is the universal arcane mint — every magic reagent in the pack passes through it on the way to source_gem

- from: ars_nouveau:source_gem (magic currency) | via: numismatics vendor price | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: source gems are the operational fuel of the magic system; pricing them as trade goods would incentivize selling them instead of using them, draining the player's magic infrastructure. The currency dossier reserves numismatics coins for the economy pillar; source_gem is already the magic-pillar currency (M-01). Double-currency confusion, wrong direction.

- from: ars_nouveau archwood surplus (archwood logs/planks) | via: create:milling → Ars recipes | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: archwood is primarily a building block and Ars' own aesthetic material; milling it into dust to feed back into Ars recipes creates a tight loop but no real 2nd-pillar bridge — it stays inside magic. No-motif for "archwood dust" as a Create→magic join. Needs Gate-0 if pursued further.

## astikorcartsredux   [anchors: survival (1)]

One pillar (survival). Rustic horse-drawn carts and farm implements. Zero recipe-types registered; no material outputs beyond bulk crop harvest; crafted from vanilla wood/planks. 0 c:tags.

**Method-pull:**
- Carts and plows are *functional objects* (a draft animal + implement doing field work), not a material pipeline. There is no processing output from these items that another mod's method wants.
- The "iron sheets for plow blade / reaper" candidate (M-05) from the dossier: gate the metal-bearing implements behind Create-processed iron sheets. Power-read: carts/plows are early-game tools — everyday, not endgame. Gating them behind Create sheets would be mid/late-game friction on an early tool. That violates the guardrail against gating basic components behind complex recipes. Thin candidate.
- Economy (M-21 trade-seam / M-09): there are no outputs to sell. The cart hauls things; it doesn't produce sellable goods.

**Theme-fit / red-team:**
- The mod's tone is deliberately pastoral-medieval — wooden carts pulled by horses. Forcing a Create recipe gate would feel anachronistic (this tool predates the industrial age within the pack's fiction). The "farm before trains" role is its explicit niche.
- No STRONG candidate survives red-team.

- LEAVE — deliberately vanilla-pastoral transport layer (horse-drawn carts, plow, reaper). No processing outputs, no recipe-types, and the pack's design intent keeps it as early-game farm labor before the Create/Aeronautics logistics era. Forcing a Create-component gate would violate the basic-components guardrail and clash with the mod's tone.

## bits_n_bobs   [anchors: Create, survival (2)]

Already at the 2-pillar goal; quality-audit mode applies.

**Existing connections:**
- Create ← `create:item_application` + `create:splashing` (inbound weaves). Also hard-depends on Create; chain drives transmit Create rotation.
- survival ← broad decoration palette for builds (deco pillar under survival). Chain pulley is a functional contraption-mover.

**Audit of EXISTING connections:**
- OK — Create weave is genuine: items are literally made-by Create's item_application and splashing; the chain drive is kinetic Create machinery. Not cosmetic adjacency.
- OK — survival/decoration is a sanctioned support role. The aesthetic expansion is coherent.
- REWORK (very light): the dossier flags M-04 (Create recycles deco) — tile/chair blocks crushable back to crushed-stone/planks via `create:crushing`. This tightens the deco-to-Create loop so deco purchases remain part of the Create web even on removal. Worthwhile but low-priority.

**No missing pillar; deepening candidate only:**

- from: bits_n_bobs tile/chair deco blocks | via: create:crushing → crushed stone + xp nugget byproduct | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT (low priority — confirms existing Create anchor; recycle path prevents deco from being a dead end) | hook: a tile floor torn out goes back into the crusher — deco and industry stay one loop

## cbc_at   [anchors: Create, aeronautics (2)]

Already at the 2-pillar goal; quality-audit mode applies.

**Existing connections:**
- Create ← `create:cutting` + CBC's assembly chain (the munition pipeline). All barrels/breeches are machined from Create metals.
- aeronautics ← autocannons/rocket pods mount directly on Create Aeronautics ships/contraptions for PvPvE combat. The mod exists specifically for ship armament.

**Audit of EXISTING connections:**
- OK — Create weave is deep and inbound: barrel machining through `create:cutting`, munition assembly through the CBC chain. Not incidental.
- OK — aeronautics anchor is structural: the weapons mount on physics ships. Without Aeronautics, this mod's role shrinks significantly.
- REWORK (design depth, not a missing pillar): the dossier notes that gating the heavy-autocannon / rocket tier behind a boss drop (M-15) or MineColonies unlock would fit the pack's scarcity/progression curve. This is a design improvement on the Create anchor's depth, not a new pillar. Boss-key gate for the heavy tier reads as coherent (endgame ship weapon should require endgame gate).

**No missing pillar; design candidate only:**

- from: cbc_at heavy-autocannon / rocket-pod (endgame tier) | via: boss-drop gate (M-15) | to: Create (depth) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT (design improvement — scarcity/progression) | hook: you can't bolt a battleship cannon onto a ship until you've earned the boss drop that proves you can survive one

- from: cbc_at munitions (gunpowder/propellant chain) | via: tfmg:coking or create:mixing (chemical propellant) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: propellant already feeds through CBC's own assembly chain; adding a TFMG coking step upstream is plausible but speculative without knowing exact propellant recipe ids; flag for review in the artillery/propellant recipe pass rather than accepting blindly here. No-evidence of propellant recipe gap — REJECT-for-review.







