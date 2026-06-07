# Phase 2 candidates — chunk-06

## mffs   [anchors: Create, survival (2)]
- REWORK: OK — connections sound. Gold-standard weave already authored (M-05 native-method gating + M-06 sequenced-assembly for projector/interdiction_matrix; TFMG steel for mid-tier). Dossier explicitly flags no new edge needed. Confirmed no forced additions here.

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen/terrain-shape datapack; zero items, zero loot tables, zero recipe surface. Thematic alignment with the pack's regional-scarcity design is real but offers no recipe hook. No coherent weave.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior-only tweak (fishing catch → live entity spawn); zero items, zero loot tables, no material outputs. Weave surface belongs to the fish-content mods sitting beneath it (createfisheryindustry, farmersdelight), not to this shim. No coherent weave.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items (shuffle_filter, weighted_shuffle_filter) that govern which items a Deployer places at random; no material processing surface, no loot, no methods of its own. A second anchor would require inventing a thematic connection that doesn't exist. Genuine single-anchor QoL utility.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (geode worldgen consumable, ~every 30 chunks) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: ore-style geode find → crushing the core yields a refined shard + coin-dust byproduct, tying the money faucet back to the scarcity foundation — coins don't flow for free, they cost a scarce worldgen resource processed through Create
- from: createblockchain:currency_miner FE source | via: createaddition:charging / FE from TFMG generators | to: Create (deepening M-08) | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the miner must be fed FE from a TFMG diesel generator or Create New Age generator wired through processed fuel — coins trace to regional oil, not thin air; scarcity → production → economy loop advanced
- from: createblockchain:piggy_bank (chest loot) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks already spawn coins as loot by the mod's own design — no additional loot-seed action needed; this is the mod's native behavior, not a new weave edge
- REWORK: OK — existing Create + economy anchors are correctly assigned. The M-08-adjacent FE→coin deepening above is the only gap.

## bookshelf   [anchors: support/library (1)]
- LEAVE — pure code library (Darkhax utility); zero items, zero loot, no gameplay surface.

## bagus_lib   [anchors: support/library (1)]
- LEAVE — pure code library (baguchi shared dep); zero items, zero loot, no gameplay surface.

## configuration   [anchors: support/library (1)]
- LEAVE — config-screen framework library; zero items, zero loot, no gameplay surface.

## recipe_integration   [anchors: support/recipe-bridge (1)]
- LEAVE — this mod IS the connective layer; it authors recipes of other mods' types based on what's installed. It has no item/loot surface of its own to weave. Its contribution to the pack's "one web" goal is inherent to its function (the ~3,700 conditional cross-mod recipes it injects). Auditing which of its 82 c:tags are inert on this modlist is a Phase-3/maintenance task, not a weave candidate. No anchor to add.

## kambrik   [anchors: library/API (1)]
- LEAVE — Kotlin dev library; zero items, zero loot, no gameplay surface.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — JEI plugin displaying breeding data; zero items, zero methods, pure informational UI layer.

## bettermineshafts   [anchors: survival (1)]
- from: bettermineshafts loot tables (vanilla mineshaft loot) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Better Mineshafts expands the vanilla mineshaft network into a large, dangerous ruin-crawler with ore caverns — seeding Numismatics coin finds (a lost expedition's wages) into its loot makes underground exploration feed the player economy, combat pressure → economy (M-14 bounty-loop direction)
- from: bettermineshafts structure (expanded dangerous mineshafts) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Ars Nouveau source gems or Occultism spirit shards into deeper mineshaft rooms — miners who venture into the sprawling underground network find magic reagents, giving magic a spatial pressure-driven acquisition path separate from farming
- from: bettermineshafts loot | via: loot-seed | to: Create (M-15 boss-key) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: mineshafts have no boss; the M-15 motif is specifically for boss-drop gating of complex tech. Mineshaft loot is a low-to-mid find by design; forcing a Create tech-gate key here conflates exploration loot with boss mechanics and would over-gate basic content.

## inventoryprofilesnext   [anchors: client QoL/support (1)]
- LEAVE — client-side inventory UI (sorting, slot-locking); zero items, zero loot, no server-side methods. Weave-exempt support role.

## notenoughanimations   [anchors: support/client-visual (1)]
- LEAVE — client-side cosmetic animation overlay; zero items, zero loot, no gameplay effect. Weave-exempt support role.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (distillation outputs) | via: TFMG combustion engine → Aeronautics engine intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: crude oil → Distillation Tower → diesel/gasoline → combustion engine → airship propulsion; the entire fuel supply chain from the ground to the sky is TFMG-routed, and ships can't fly without it
- from: tfmg:steel (industrial_blasting output) | via: fabricated structural plate (tfmg:steel → Create:pressing → steel sheet) → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG steel is the natural structural-hull material for airframes; a ship hull that costs refined industrial steel makes aeronautics construction feel like it demands a real industrial backbone
- from: tfmg:aluminum (bauxite chain output) | via: tfmg:casting → aluminum plate → aeronautics lightweight frame | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: aluminum is the classic aircraft material — a lightweight alloy frame costs TFMG aluminum processing, so larger faster ships use a different material tier than iron-hulled barges
- from: tfmg combustion engine (kinetic output) | via: component → aeronautics drivetrain | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a TFMG combustion engine as the propulsion unit for a large airship's drivetrain — the engine is a mid-game crafted Create-compatible kinetic source that feeds directly into aeronautics propellers
- from: tfmg:steel / tfmg:aluminum ingots (processed scarce metals) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel and refined aluminum are high-effort processed scarcity outputs — valid sell goods (processed metal cans/bars) or Numismatics mint-inputs tying industrial production to the economy's coin supply
- from: tfmg:diesel fuel can | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: refined diesel is a luxury industrial good — a fuel can is a sellable commodity in a world where airships need it and not everyone has an oil rig; makes fuel a traded good, not just a personal supply
- from: tfmg:sulfur / tfmg:saltpeter (vat byproducts) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: industrial sulfur and saltpeter are alchemical ingredients — routing TFMG chemical byproducts into Ars/Occultism infusion gives the magic system a reason to care about the industrial chain and gives TFMG byproducts a second sink
- from: tfmg combat tools (flamethrower, advanced potato cannon) | via: survival pressure | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — combat flavor without a structural loop contribution; these are items, not a method-routing that advances scarcity→pressure→production→economy; REJECT-for-review
- REWORK: existing anchor is Create only (1). All accepted candidates above add aeronautics (×4), economy (×2), and magic (×1) anchors — TFMG is among the strongest 2nd/3rd anchor candidates in the pack given its output breadth.

## supermartijn642corelib   [anchors: support/library (1)]
- LEAVE — invisible code library (GUI/block/BE/packet scaffolding); zero items, zero loot, no gameplay surface.

## geckolib   [anchors: support/library (1)]
- LEAVE — animation/rendering API; zero items, zero loot, no gameplay surface.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:fan_ending_catalyst (Dragon Head) | via: create_dragons_plus:ending fan-process | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: bulk Ending-infusion (dragon breath fan chamber) transforms an Ars or Occultism reagent into an end-tier arcane form — the End-power source is an industrial catalytic process, making magic's endgame tier require a dragon-hunt and a Create bulk-processor
- from: create_dragons_plus:fan_freezing_catalyst (Powder Snow) | via: create_dragons_plus:freezing fan-process | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: seasonal Powder Snow (winter-only collection with Serene Seasons) as the freezing-fan catalyst gates certain bulk processes to winter, making the industrial timeline season-sensitive — a survival pressure feeding a production method
- from: create_dragons_plus dye fluid buckets (bulk dyeing) | via: create_dragons_plus:ending / dye station | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: bulk dyeing is pure QoL decoration; routing dye fluids to Numismatics as a luxury good is thematically strained — dye is cheap and ubiquitous, not scarce enough to be a traded commodity; tone clash (industrial fluid dye ≠ economy luxury good)
- REWORK: existing anchor is Create only (1). Magic (M-10 ending catalyst) and survival (M-16 seasonal freezing) accepted above give it 2 additional anchors.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:branch (bulk harvest byproduct — sticks/branches from whole-tree felling) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling the surplus branch items from a Dynamic Trees mass-harvest yields sawdust/pulp — the living-forest harvest feeds Create's material chain; wood is no longer just planks, it's a milling input producing Create-usable organic intermediates
- from: dynamictrees:dendro_potion (growth accelerant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the dendro_potion is a utility item for accelerating tree growth, not a magic reagent by nature; routing it into Ars imbuement as a magic input is a tonal stretch — the potion is botanical/alchemical but doesn't carry arcane identity; the connection would read as arbitrary to a player. Prefer keeping magic reagent sourcing in mob-drop or mineral form (M-02/M-07). REJECT.
- from: dynamictrees log/branch harvest (bulk organic output from whole-tree felling) | via: numismatics sell (lumber trade) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Dynamic Trees produces large one-shot log harvests — a lumberyard player can trade bulk timber as a commodity, making forestry a viable economic specialization (scarcity driver: wood is slower to farm with living growth cycles)
- REWORK: existing anchor is survival only (1). Create (M-12 milling) and economy (M-09 lumber trade) accepted above.

## create_compressed   [anchors: Create (1)]
- from: create_compressed:crushed_<metal>_pile blocks (×9 ore intermediates compressed) | via: aeronautics construction input (bulk-compressed ore piles as the "ore stockpile" in a ship's auto-smelting furnace / cargo manifest) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: the compressed blocks are a storage format, not a structural building material; using them as airframe inputs conflates "cargo compression" with "hull construction" — a player would not expect a crushed-ore pile to be an airframe component. Tone: slightly off. REJECT.
- from: create_compressed:mechanism_block / create_compressed:cogwheel_block (compressed mechanical-part blocks) | via: aeronautics large structural build | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: compressed part-blocks are storage convenience items; making them airframe materials inverts their purpose (they exist to store parts, not consume them). A player would find it odd that bulk-storing cogwheels makes them usable as hull material. REJECT.
- LEAVE — Create-internal QoL storage layer with no foreign-material surface to route. Dossier correctly flags support role. All candidate aeronautics links are storage-semantic mismatches. Genuine single-anchor mod.

== CHUNK COMPLETE ==
