# Phase 2 candidates — chunk-09

## create_factory   [anchors: Create, survival (2)]

REWORK:
- OK — connections sound. Create (processing spine) + survival (food output) are both genuine. M-09 economy candidate already noted in dossier.

- from: create_factory sweets (waffles/rolls/candy apples) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a freshly-pressed waffle is exactly the kind of luxury the colony general store would stock — dessert factory output becomes tradeable coin
- from: create_factory jam/nectar fluids | via: create:mixing (consumed as a flavoring input in Create cooking chains) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already anchored to Create via its own mixing/filling recipes; adding a mixing-consumer weave is a no-op for anchor count and the jam fluids have no named consumer in the methods palette that isn't already the mod itself — forced edge

## create_enchantment_industry   [anchors: Create (1)]

REWORK: only 1 anchor — weave needed.

- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: irons_spellbooks:alchemist_cauldron_brew (liquid XP as a high-power brew ingredient/fuel) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: industrialised XP poured into the alchemist's cauldron supercharges a spell-scroll brew — the factory's output literally powers the spellbook tier
- from: create_enchantment_industry:experience_bucket | via: ars_nouveau:enchanting_apparatus (liquid XP as mana-equivalent catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars' enchanting apparatus uses source_gem (M-01 reserved reagent) not a fluid fuel; grafting liquid XP here is mechanically incoherent with how the apparatus works — use Iron's cauldron instead (above)
- from: create_enchantment_industry grinding (Mechanical Grindstone) | via: create_enchantment_industry:grinding (accepts enchanted gear → strips to liquid XP) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: already anchored to Create via its own machines — this doesn't add a 2nd anchor, it deepens the one that exists; not a cross-system weave
- from: create_enchantment_industry:super_experience_block / experience_lantern | via: occultism:ritual (XP-dense block as a ritual circle material — the ritual consumes it) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Occultism rituals that normally demand rare mob-drops can instead be fuelled by a dense XP condenser — industrialised experience meets ritual need

## createaddition   [anchors: Create (1)]

REWORK: only 1 anchor — weave needed.

- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning (already its own method) producing FE → createaddition:charging → irons_spellbooks magic battery/focus | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: farm your oilseeds, press seed oil, burn it for FE, charge your spellcasting focus — the electric layer bridges the farmstead to the spellbook
- from: createaddition:electrum_ingot | via: create:pressing → electrum_plate → aeronautics airframe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: electrum's conductivity makes it the natural choice for an airship's electrical hull plating — rolling mill output feeds the shipyard
- from: createaddition:biomass / bioethanol | via: createaddition:liquid_burning → FE → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 fuel is reserved for tfmg:diesel/gasoline/lubricant per reagent-ownership table; bioethanol is a legitimate secondary fuel but introducing it to aeronautics engines while diesel is the dedicated fuel creates double-spend ambiguity — needs Gate-0 clarification before authoring; flag for 0.9 economy/aeronautics pass
- from: createaddition:copper_wire / copper_spool | via: recipe (used as wiring in northstar:circuit_engraver circuit boards) | to: Create/aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: ACCEPT | hook: rolling mill spools wire; the circuit engraver consumes it — the electrical supply chain feeds the space-tech drivetrain

## jamlib   [anchors: library/API (1)]

LEAVE — pure code library (cross-platform config API, zero items/blocks, no loot). Genuine zero-content library; no weave surface exists.

## invtweaksemuforipn   [anchors: client-only QoL/compat (1)]

LEAVE — pure client-side keybind emulation shim; no items, no loot, no methods. Zero weave surface.

## northstar   [anchors: Create, aeronautics (2)]

REWORK:
- OK — connections sound. Create (deep recipe web) + aeronautics (rocket transport = off-world logistics) are both genuine. Economy candidates noted in dossier as bonuses.

- from: northstar:titanium_ingot | via: create:crushing (ore-doubling, titanium ore → crushed titanium + byproduct) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: dossier already shows create:crushing in made-by methods — this is an existing inbound weave, not a new one; deepens Create but doesn't add a 3rd anchor
- from: northstar:titanium_ingot / tungsten_ingot | via: numismatics mint (Create-processed space metal → rare coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: titanium is the scarcest metal on Earth — minting titanium coin makes the space-mining payoff literal currency; a third anchor via economy
- from: northstar:advanced_circuit | via: numismatics sell (specialist trade good for other players) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: advanced_circuit is a space-tech endgame component; treating it as a luxury-good sell trivialises the depth behind it — it should gate further tech (M-15 boss-key equivalent), not become a shop item. Wrong power tier for M-09.
- from: northstar biomes (planet surfaces, moon/Mars terrain) | via: loot-seed (seed pack-relevant drops — e.g. occultism moon-reagents, aeronautics hull materials — into northstar planetary structure chests) | to: economy/magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: exploring a Martian ruins chest and finding exotic reagents/hull alloys seeds the economy loop — off-world exploration pays out into the supply chain

## exposure   [anchors: Create, survival (2)]

REWORK:
- OK — connections sound. Create (sequenced_assembly film development + deployer automation) + survival (personal keepsake hobby) are both genuine.

- from: exposure:photograph (printed photo of a notable landmark or player build) | via: numismatics sell (framed photograph as a luxury decorative trade good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a framed photograph of the colony's completed airship hangs in the trade hall and fetches a coin — craft tourism turned into economy
- from: exposure:camera_gold | via: create:sequenced_assembly (gold camera as an endgame version assembled via sequenced assembly with precision lenses) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: already anchored to Create via sequenced_assembly film development; a second Create edge doesn't add a new anchor — and the gold camera likely already has its own recipe; forcing a sequenced-assembly gating feels contrived (photography tier isn't "endgame keystone" level)
- from: exposure:black_and_white_film | via: create:pressing (pressing silver-coated film blanks — ties photography to silver chemistry) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: same problem — Create is already an anchor; and silver film processing through pressing is a stretch of the photography vibe; the chemistry doesn't map to what pressing physically does in Create (squishing metal)

## irons_lib   [anchors: library/API (1)]

LEAVE — shared framework library; its two player-facing blocks (transmog table, player statue) are cosmetic with no routable material. Genuine near-zero content surface: the transmog table edits NBT, statues store a skin — neither generates or consumes processable materials. No weave.

## betterclouds   [anchors: support/visual (1)]

LEAVE — client-side volumetric cloud renderer; registers no items/blocks, no loot. Zero weave surface.

## ctl   [anchors: Create, aeronautics (2)]

REWORK:
- OK — connections sound. Create (built via sequenced_assembly) + aeronautics (purpose-built for train/contraption lighting, the aeronautics logistics arm) are both genuine.

- from: ctl lamp blocks (functional train lights — head/tail + interior) | via: numismatics sell (train lighting kit as a trade good for colony builders/train operators) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: CTL lamps are a fitting deco/functional item but they're intermediate build components, not consumable luxury goods — M-09 targets cured food, wine, printed photographs; selling lamp blocks reads as hardware not luxury. Tone mismatch.
- from: ctl:htlb_block / ilb_block (sequenced-assembly outputs) | via: aeronautics build recipe (lamps as required lighting components in airship/train-car assembly) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: already anchored to aeronautics; this would deepen not widen. No new anchor gained.
- LEAVE adding a 3rd weave — genuinely at 2-anchor goal; no incoherence flagged. Any further weave would be padding.

## lithium   [anchors: support/performance (1)]

LEAVE — server/world-tick optimization only; zero items, zero loot, no recipe methods. Genuine zero-surface performance library.

## mcwroofs   [anchors: support/decoration (1)]

- from: mcwroofs stone/brick/terracotta roof variants (600 block types) | via: create:crushing (lossy crush back to gravel/raw + XP nugget) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished stone-roof tile crushes back to gravel at the crushing wheel — the deco palette recycles into the Create resource web and earns its second anchor
- from: mcwroofs wood roof variants | via: woodworks:sawmill (wood roof offcuts back to boards/planks) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill is a stonecutter-for-wood not a recycler; routing roof blocks through a sawmill to reclaim planks doesn't match the method's semantic (cutting raw logs → deco shapes, not reclaiming deco back to raw). Coherence fail.

## cloth_config   [anchors: support/library (1)]

LEAVE — config-screen library; zero items, zero blocks, zero loot. No weave surface.

## woodworks   [anchors: survival (1)]

- from: woodworks:*_chest / *_bookshelf (wood-typed deco) | via: create:crushing (lossy → plank/sawdust + XP nugget) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished spruce bookshelf at the crushing wheel yields planks and sawdust — wood-deco waste feeds the Create processing web; earns a 2nd anchor
- from: woodworks:sawmill method (woodworks:sawmill recipe type — a stonecutter for wood) | via: making modded-wood deco (northstar argyre/calorian/coiler logs → woodworks-type boards/ladders via sawmill) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: northstar's alien woods run through woodworks' saw and become building materials — the space carpenter's workshop; connects the exploration-tier woods to the deco web
- from: woodworks:*_beehive | via: create:filling (fill empty beehive with honey fluid → honey-combed beehive upgrade, an alternate honey-production pipe) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: filling a beehive block with honey fluid is not semantically how beehives work — bees fill them, not pipes; player would find this incoherent. Tone clash.

## death-count-1.0   [anchors: support/friend-group flavor (1)]

LEAVE — vanilla-scoreboard datapack (zero items, zero loot, no recipe methods). Genuine zero-content surface; scoreboard cosmetic not weaveable.

## meadow   [anchors: survival (1)]

- from: meadow:cheese_wheel / amethyst_cheese_wheel / buffalo_cheese_wheel | via: numismatics sell (cured luxury dairy as a high-value trade good) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an aged alpine cheese wheel is the dairy-farm equivalent of a fine wine — the meadow's flagship product earns its place on the colony trading floor
- from: meadow:alpine_salt | via: create:milling (mill salt ore → fine salt crystals, a seasoning input for multiple cooking chains) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create mill grinds alpine salt ore to fine salt; every cooking mod from FarmersDelight to ExtraDelight pulls it as a seasoning — one light step ties the alpine biome to the Create food-processing web
- from: meadow:chambray_wool (felt textile) | via: meadow:felting consumed as a craft input in magic-fabric or occultism-ritual cloth | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: meadow:felting is a meadow-native method; routing it to magic would need a clear consumer in Ars or Occultism that wants a felt/textile. No named consumer exists in the methods palette — forcing a felt-as-magic-cloth connection is a stretch; no-motif edge without a named magical recipient.
- from: meadow:alpine crops (oats, lavender, juniper) | via: sereneseasons seasonal gating (these alpine crops only thrive in appropriate season → feeds M-16 seasonal reagent) | to: Create/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: lavender blooms only in summer; route summer-lavender through a Create mixing step or an Ars imbuement to make a season-locked reagent — scarcity that moves with the calendar

## trek-b0.6.1.1   [anchors: survival (1)]

- from: trek structures (ships, fortresses, ruins, pyramids — 150+ types with loot=yes) | via: loot-seed (seed economy-relevant drops — Numismatics coin, Create component blueprints — into trek's chest loot tables) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: plundering a trek sunken ship and finding foreign coin establishes the pre-existing economy the players are joining — exploration loop pays out into the currency web
- from: trek structures | via: loot-seed (seed magic reagents — ars_nouveau source_gem, occultism ritual components — into trek dungeon/ruin chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a jungle pyramid yields a sealed Source Gem — the explorer's route into the magic pillar begins with a loot find, not a crafting table
- from: trek structures | via: loot-seed (seed northstar astronomical_reading / advanced_circuit fragments into trek's "alien ruin" type structures if any) | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: trek uses vanilla blocks only and its structures are biome-earthly (jungle pyramids, ocean ships, taiga camps); seeding space-tech components into earthly ruins breaks the exploration lore — a circuit fragment in a medieval fortress is incoherent. Theme clash.

## naturescompass   [anchors: support/QoL (1)]

LEAVE — single craftable biome-finder item with no material outputs; pure information tool. No weave surface. Already a sanctioned support anchor.

## fusion   [anchors: support/client-library (1)]

LEAVE — texture-rendering backend library; zero items, zero blocks, zero loot. No weave surface.

## terralith   [anchors: survival (1)]

- from: terralith biomes (Skylands, Moonlight Grove, Mirage Isles, cave biomes) | via: loot-seed (seed biome-specific loot into terralith's structure/cave chests — e.g. Moonlight Grove chests yield enhanced celestials moon-reagents per M-22) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Moonlight Grove biome's ambient glow suggests lunar energies — seed lunar reagents into its hidden chests so the biome itself is a destination on magic-locked progression
- from: terralith biomes as scarcity foundation | via: config (biome-keyed ore placements — certain metals appear only in specific terralith biome clusters, reinforcing the scarcity→pressure loop) | to: survival (scarcity foundation) | motif: no-motif | power: — | tone: ok | verdict: REJECT | reason: this is how the pack's ore-scarcity already works (regional scarcity is a design principle, not a new weave edge) — no new connection to log; the scarcity foundation is implicit infrastructure, not an authored weave
- from: terralith:loot=yes (65 c:tags, structure chests) | via: loot-seed (seed Create component or Northstar space-metal fragments into terralith fantastical biome chests — Skylands → titanium debris) | to: Create/aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: floating Skylands chests hold titanium-alloy debris — the explorer who reaches the highest terrain gets the first hint of the space-materials tier; exploration reward gates the Create+aeronautics depth

== CHUNK COMPLETE ==
