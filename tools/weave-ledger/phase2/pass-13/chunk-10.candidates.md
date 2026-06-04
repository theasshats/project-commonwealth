# Phase 2 candidates — chunk-10

## tipsmod   [anchors: support/QoL (1)]
LEAVE — pure client UI library (loading-screen tips only); zero items, no recipe surface, no material outputs. No coherent 2nd-pillar edge exists. Content-authoring use (pack tips) is not a pillar weave.

## trashcans   [anchors: support/automation QoL (1)]
- from: trashcans:ultimate_trash_can | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The trash can voids items — the pack is scarcity-driven and every byproduct should retain value; gating or weaving the void sink deeper into Create would implicitly endorse disposal over recirculation. Anti-economy by nature; no motif survives the scarcity-pack guardrail. Leave as pure utility.
- LEAVE — no coherent pillar weave: voiding is anti-scarcity by design, and that tension is noted in the dossier. Forcing a Create or economy edge would undermine byproduct loops.

## midnightthoughts   [anchors: survival/rest (1)]
LEAVE — event/effect-driven mod with zero items, blocks, or recipe-accessible outputs. The well-rested buff is atmospherically right for survival but offers no material join key for a 2nd pillar. Thematic adjacency to Serene Seasons / Cold Sweat exists but nothing to route.

## quark   [anchors: support/vanilla-plus (1)]
- from: quark deco blocks (vertical slabs, polished stone/brick variants, wood post/hedge) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A spent vertical slab or stone-brick variant fed into a Create crushing wheel gives back raw/gravel + an XP nugget — bulk-quarried Quark deco is never a dead end, and it follows the same lossy-recycle logic already established for every other decorative block.
- from: quark:apple_crate / quark:carrot_crate / quark:potato_crate (storage-block crop bales) | via: create:milling | to: Create/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Quark crop-bale crushed by a millstone releases loose crop items suitable for Farmers Delight / extradelight processing; turns aesthetic bulk-storage into a useful Create-input step rather than a hand-unpack detour.
- from: quark:gunpowder_block (c:item/storage_blocks/gunpowder) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Duplicate coverage — M-04 already covers this under the generic deco-recycle rule; not worth a separate entry. No new 2nd pillar gained; quark's anchor stays support.
- REWORK: The dossier's existing candidate (create:crushing deco → M-04) is sound but undersized — Quark's 1000-item/809-block footprint means more surfaces are available. The two ACCEPTs above surface crop-bale milling (M-12, survival↔Create) which the dossier missed and which earns Quark a second weak pillar toe-hold.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]
- REWORK on existing connection: the aeronautics pillar is already earned by behavior (sittable furniture on ships/trains). The connection is thematically clean and not arbitrary — OK, no rework needed.
- LEAVE for new weaves — zero items/blocks registered; no material surface to route through any method. Any forced edge would be content-free. Already at 2 pillars.

## occultengineering   [anchors: Create + magic (2)]
- from: occultengineering:spirit_solution (reserved occult intermediate) | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Summoned spirits brokering spirit_solution as a logistics/trade good is the natural extension of M-18 — magic-as-acquisition-provider, and spirit_solution already owns the connective-reagent role; paying it out through a spirit trade rather than a manual recipe keeps the eldritch flavour intact.
- from: occultengineering:sterling_silver (c:item/ingots/sterling_silver) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Sterling silver is an occult alloy wrought from Create processing — it's exactly the "scarce regional metal → Create-processed → minted into coin" pipeline; the occult origin makes it feel premium rather than arbitrary currency.
- from: occultengineering:mechanical_pulverizer (mid-game automation block) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: The pulverizer is already assembled via inbound Create methods (create:pressing/item_application etc.) at appropriate depth; adding a sequenced-assembly chain would double-gate it without purpose — the mod already earns Create solidly.
- REWORK: Existing Create+magic anchors are well-earned and non-arbitrary. The two new ACCEPTs extend to economy (M-08 sterling silver coin, M-18 spirit-trade logistics), which would bring this to 3 pillars — economy is the right candidate given the reserved sterling_silver tag.

## lithostitched   [anchors: support/library (1)]
LEAVE — pure worldgen API/library, zero items, no recipe surface. A genuine zero-content code library. Nothing to route.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork crushed/molten metals (c:crushed_raw_materials/palladium, /platinum, /osmium etc.) | via: create:crushing → mixing → compacting → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: The whole point of this mod is raising yield on scarce regional metals through Create processing — those refined ingots are the most natural mint feedstock in the pack; the processing chain already exists, the economy edge just closes the loop.
- from: createmetalwork molten magic-mod metals (could include occultism/galosphere inputs once their ore tags are present) | via: create:crushing | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Routing magic ores (occultism silver, galosphere palladium) through createmetalwork's unified crush+melt pipeline gives the magic pillar a Create ore-doubling reward — same as vanilla metals, which a player immediately understands.
- from: createmetalwork:molten_steel_bucket (mid-game structural fluid) | via: tfmg:casting → aeronautics airframe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Molten steel poured into molds for structural plates — then those plates go into airframe/hull construction. Steel has to come from somewhere; a Create melt pipeline producing the structural stock makes airframes cost real fabricated material.
- REWORK: Dossier's existing candidates (M-08 economy, M-03 magic ore-doubling) are well-identified. The M-23 aeronautics edge (molten steel → hull stock) was not in the dossier and is the stronger second-pillar opportunity since it closes the aeronautics supply line and earns createmetalwork a 3rd pillar.

## pantographsandwires   [anchors: Create + aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking | to: Create/aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is already a Create-processed intermediate owned by this mod's own recipes; routing it through TFMG coking would be circular (coke → more coke-related processing). The aeronautics pillar is already earned by the train/rail infrastructure role; no new pillar needed.
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Graphite is an industrial/electrical conductor material. Putting it through an arcane infusion as a magic catalyst stretches the tone — the mod's vibe is modern railway realism, not eldritch. A player would not naturally connect catenary-wire graphite to a magic ritual. Tone clash kills it.
- from: pantographsandwires infrastructure blocks (masts, cantilevers) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Already 2 pillars; the Create anchor is already solid from 6 inbound recipe types. Adding a crushing-recycle edge doesn't earn a new pillar, just redundant Create coverage. Not worth the recipe noise.
- OK — connections sound: Create and aeronautics are both well-earned and non-arbitrary. No rework needed.

## jei   [anchors: client-only UI/support (1)]
LEAVE — pure recipe-viewer UI; zero items, no recipe surface, no content. Load-bearing for the pack (replaces EMI for Create rendering) but no pillar weave is coherent.

== CHUNK COMPLETE ==
