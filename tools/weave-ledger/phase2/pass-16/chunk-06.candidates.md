# Phase 2 candidates — chunk-06

## followersteleporttoo   [anchors: support/QoL (1)]

- LEAVE — zero content surface: behavior-only mod with no items, blocks, recipe types, or loot tables. Teleports pets on owner teleport. No material to route through any method.

## createmechanicalcompanion   [anchors: Create (1)]

Power-read: The Mechanical Wolf is a mid-to-endgame Create reward (sequenced assembly, precision mechanism, netherite plates). It is a personal combat companion gated behind deep Create chains. It has `loot=yes` — it registers loot tables (its summoning spawns an Illager Engineer and a Potato Cannon Illager variant with spawn eggs). No processing recipes of its own; it CONSUMES Create outputs as build inputs.

Existing connections: dossier says none — sits at 1 anchor (Create). That's the floor; one-system is a candidate for a second weave.

**Candidate A — economy via M-09 (Luxury good → coin):**
The Wolf's upgrades (mounted_crossbow, mounted_light, shock modules) are manufactured, high-effort, sellable items — a mechanical-gear crafter could sell modules for coin.
- from: createmechanicalcompanion:mounted_crossbow / combat module | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — manufactured war-goods have precedent as trade items | verdict: REJECT | reason: M-09 is a "luxury consumable → coin" motif (wine, cheese, processed crops). A mounted crossbow module is a durable upgrade, not a consumable; this is a stretch. The mod itself mints no "product" except the wolf — and the wolf can't be easily priced without being a pay-to-win shop item. The cleaner loop routes through the *ammo/fuel* mods if combat economy is desired. Arbitrage risk: players could farm Illager Engineers for their drops and sell them directly, undermining scarcity.

**Candidate B — magic via M-11 (Ritual/transmutation sink):**
The `optical_sensor` and `quantum_drive` items sound thematically exotic; could they be ritual inputs for Occultism?
- from: createmechanicalcompanion:optical_sensor | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: Tone mismatch — an optical sensor is explicitly an industrial/clockwork item; dropping it into an Occultism pentacle ritual forces steampunk into spirit-fire, which reads as arbitrary. No narrative "why is a clockwork eye a spirit conduit?" exists without inventing lore. Red-team fails the sensibility test.

**Candidate C — aeronautics via M-24 (Mechanical component → propulsion/control):**
The `mob_radar` (detects hostiles in range) could serve as a navigation/threat-detection component on an Aeronautics airship — a combat wolf on a ship acting as a ship defense system.
- from: createmechanicalcompanion:mob_radar | via: aeronautics construction recipe / item_application | to: aeronautics | motif: M-24 | power: mid | tone: ok — a clockwork radar bolted onto an airship is thematically coherent in a Create-industrial setting | verdict: REJECT | reason: M-24 is specifically "mechanical component → propeller/engine/control surface (drivetrain)." A radar is a sensor, not a drivetrain part. There's no Aeronautics block type for a defense-radar peripheral at present. The link is thematically plausible but has no concrete method to route through — no registered recipe-type exists on either side to hook this. It would be a purely invented recipe with no motif-aligned delivery.

**Candidate D — survival via M-02 (Mob-drop reagent sink) — Illager Engineer loot:**
The mod spawns an `illager_engineer` mob with its own loot; that loot could seed a magic/Create reagent drop (e.g. a blueprint fragment used in a Create recipe).
- from: createmechanicalcompanion:illager_engineer (loot=yes) | via: loot-seed (seeding a drop into this mob's table) | to: magic | motif: M-02 | power: mid | tone: ok — an engineer-illager carrying an arcane schematic is narratively plausible | verdict: REJECT | reason: The illager_engineer is a combat challenge mob tied to the companion acquisition quest. Seeding a magic reagent in it creates a farming incentive that could be exploited — kill engineers repeatedly to farm reagents — which undercuts scarcity. Additionally, M-02 is "isolated mob/boss drop given a use as a magic/economy input" — this would be the inverse (seeding a new drop INTO a mob), not routing an existing drop somewhere. The motif doesn't fit the direction; this would need a new motif or Gate-0 escalation.

REWORK check: The single anchor (Create) is legitimate — the wolf is built via sequenced assembly, mechanical crafting, sandpaper polishing. Connection is sound. The dossier's "leave, no coherent 2nd" verdict is defensible: combat companions are a dead end for trade (you don't sell your wolf), for magic (forced), and for aeronautics (no delivery). OK — connections sound for the existing 1-anchor state. The "floor" note in CLAUDE.md flags this as a candidate for a second weave, but given the forced nature of every candidate above, this is better left at 1.

## smartbrainlib   [anchors: support/library (1)]

- LEAVE — pure code library: 0 blocks, 0 items, loot=no, no recipe types. AI framework depended on by mob mods. Zero content surface; a genuine zero-surface library.

## kiwi   [anchors: support/library (1)]

- LEAVE — pure code library: 0 blocks, 0 items, loot=no, no recipe types. Developer plumbing (module/annotation system, font renderer) for Snownee's mods. Zero content surface.

## towntalk   [anchors: support/flavor (1)]

- LEAVE — pure audio/behavior: 0 blocks, 0 items, loot=no, no recipe types. MineColonies colonist voice barks — cosmetic audio layer. The weave, if any, is on MineColonies itself; this addon has no independent content surface.

## gravestone   [anchors: survival (1)]

Power-read: One block (gravestone), two items (gravestone + obituary). loot=yes — it registers loot (likely the gravestone/obituary contents). The core mechanic is death-inventory-recovery; the obituary is a written record of the death event (dimension, coords, equipment snapshot). Everyday item (auto-placed on every death), not a crafted progression item.

Existing connections: 1 anchor (survival). Dossier says "leave — death-recovery utility has no craftable material to route." Check this with fresh eyes.

**Candidate A — economy via M-09 (Luxury good → coin): obituary as a collectible curiosity**
The obituary is a written item holding death metadata. Could it be sold/traded — a "death insurance" trade or a bounty-board trophy?
- from: gravestone:obituary | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 is for *processed/crafted goods* (wine, cheese, ammo) that represent effort. An obituary auto-generates on death — no effort, no scarcity. Selling death records is mechanically trivial to farm (die repeatedly) and tonally grim in a way that undermines the "cooperative survival" ethos. No player would nod at this.

**Candidate B — Create via create:haunting (M-19 / M-04): gravestone → soul-infused block**
The gravestone is a death-adjacent block with a somber vibe; create:haunting (soul-fire transmutation) could transform it into a decorated/soul-charged variant.
- from: gravestone:gravestone | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok — a gravestone passing through soul-fire to become soul-charged has strong narrative logic | verdict: REJECT | reason: Power-read failure. The gravestone is placed automatically on death — it is not a crafted item players stock up on. Feeding it through create:haunting means players must first die, recover the gravestone block (silk-touch), then run it through a haunting belt. The hassle cost is wrong for an everyday item. More critically: the output would be a "soul gravestone" deco block with no downstream use — it advances no loop stage and has no consuming method. Decoration with one extra step is not a weave.

**Candidate C — magic via M-11: gravestone/obituary as ritual reagent**
An obituary holding a player's death data as a "soul record" could function as a ritual sacrifice input for Occultism.
- from: gravestone:obituary | via: occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: Tone clash and gameplay perversion. Feeding death records into magic rituals makes dying a *resource farm* — players would intentionally die to generate ritual fuel, inverting the intended survival pressure. This breaks the scarcity→pressure loop; it rewards death rather than penalising it.

REWORK check: The 1-anchor (survival, QoL) is sound. The dossier's conclusion stands: no coherent second anchor. The loot=yes flag notes it has loot tables, but those are the gravestone's own contents (player inventory) — not seeding external drops. OK — connections sound. Leave at 1.

## dynamic_fps   [anchors: support/performance (1)]

- LEAVE — pure client optimization: 0 blocks, 0 items, loot=no, no recipe types. Runtime FPS/render throttling when window is unfocused. Zero content surface; genuine performance-only library.

## xaeroworldmap   [anchors: support/navigation (1)]

- LEAVE — pure client UI: 0 blocks, 0 items, loot=no, no recipe types. Self-populating world map with waypoints. Zero content surface; client navigation tool with no material plane.

## naturalist   [anchors: survival (1)]

Power-read: Rich wildlife mod — 28 blocks, 104 items, 4 biome-modifiers, 7 c:tags, loot=yes. Meaningful content surface: venison (food), bushmeat (food), antler (bone-analog), glow_goop (light material), shellstone/froglass (deco blocks). The net recipe-type is registered. Multiple paths into the loop exist.

Existing connections: 1 anchor (survival). Dossier lists three candidate directions: M-09 economy (meat trade), M-04 Create crushing (shellstone), M-12 processing chain (meat). These need red-teaming.

**Candidate A — economy via M-09: cooked venison/bushmeat as trade goods**
Naturalist deer and boar yield venison/bushmeat. Cooked, these are high-nutrition meats obtainable only by hunting wildlife — not farmable from a passive pen without effort. They are renewable luxury foods with a non-trivial acquisition loop (find, hunt, cook).
- from: naturalist:venison / naturalist:bushmeat (cooked) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok — a hunter NPC or player-stall selling wild game is completely intuitive; Farmer's Delight already frames food-as-trade | verdict: ACCEPT | hook: Wild-game hunting becomes a specialized trade role — deer and boar meat feeds the server's economy as the hunter's export, priced against farmed alternatives.

**Candidate B — Create via M-12: raw venison/bushmeat through farmersdelight:cutting or create:milling**
Farmer's Delight's cutting board can process raw game into portions; a Create miller could process bushmeat for jerky or extract glow_goop from fireflies.
- from: naturalist:venison (raw) | via: farmersdelight:cutting | to: Create/survival | motif: M-12 | power: everyday | tone: ok — butchery of wild game on a cutting board is thematically clean | verdict: ACCEPT | hook: Raw venison on the cutting board yields butchered portions (loin/steak cuts), pulling the hunting chain into Farmer's Delight's kitchen processing network.

**Candidate C — magic via M-02: antler as reagent sink**
Antlers are a bone-analog drop from deer — distinctive, not stackable with vanilla bones. They could serve as a magic reagent (Ars Nouveau imbuement, Occultism ritual) — bone-like but wild, fitting animistic/druidic ritual vibes.
- from: naturalist:antler | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: everyday | tone: ok — antlers as ritual components are a real-world folk-magic motif (antler staves, crown of horns); player nods immediately | verdict: ACCEPT | hook: Deer antlers are a druidic ritual component — the hunter's gather feeds the mage's workbench, linking the wilderness to the magic pillar.

**Candidate D — Create via M-04: shellstone/froglass crushing**
Shellstone/froglass deco blocks crush back to sand/cobble + xp nugget (lossy). This is mentioned in the dossier as [WEAK].
- from: naturalist:shellstone / naturalist:froglass | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — stone crushing is the expected recycle of any stone-family block | verdict: REJECT | reason: WEAK edge. This is a pure deco-recycle and the dossier flags it as weak. The blocks have no production story — nobody is quarrying shellstone as a resource, they're decorating with it. A lossy crush recycle gives no loop advancement; it just moves decoration into waste. M-04 is best reserved for blocks that are genuinely over-produced and need a sink. Accept A/B/C instead.

**Candidate E — magic via M-11: glow_goop as spirit/soul material**
Glow_goop drops from fireflies — a bioluminescent organic extract. Occultism spirit_fire or Ars imbuement could use it as a light-essence reagent; it's already block-placed as a glowing surface.
- from: naturalist:glow_goop | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: everyday | tone: ok — bioluminescent goop as a soul-light reagent is thematically coherent (firefly light = liminal/spirit light) | verdict: ACCEPT | hook: Firefly glow_goop is a wild-sourced spirit reagent — catching fireflies (via the net) feeds the magic workshop's light-infusion recipes.

REWORK check: 1 anchor (survival) is sound. New accepted links bring it to survival + economy + magic (3). No existing connections to rework — starting from 1. OK for existing state.

## create_tweaked_controllers   [anchors: aeronautics (1)]

Power-read: 1 block (tweaked_lectern_controller), 21 items (linked controllers, modules), loot=yes. Everyday-to-mid tier — crafted from precision mechanism + electron tubes + linked controllers. Its value is as a CC:Tweaked peripheral and a superior input device for driving Create contraptions/vehicles.

Existing connections: 1 anchor (aeronautics). Dossier says "leave — QoL control device." Check with fresh eyes.

**Candidate A — Create via M-20/M-05: controller as a precision-mechanism consumer**
The tweaked controller already consumes Create's precision mechanism and electron tubes in its craft. This is an inbound Create-spine dependency, not a separate weave. Does it earn a Create anchor?
- from: create_tweaked_controllers:tweaked_lectern_controller | via: create:mechanical_crafting (as a consumer of precision mechanism) | to: Create | motif: M-05 | power: mid | tone: ok — a precision-mechanism-gated controller is an obvious Create milestone gate | verdict: REJECT | reason: The craft already uses Create parts (precision mechanism, electron tubes) — the Create dependency is already baked into its vanilla-table recipe. M-05 is "a mod's flagship built IN its own machine, gated on Create parts" — the lectern controller is built on a vanilla crafting table using Create parts, not in a Create machine. The dependency is real but the weave direction is inbound only; adding a second anchor for "it uses Create parts to craft" inflates anchor counts without advancing the loop. One anchor is correct.

**Candidate B — economy via M-21 (provisional): controller as a trade good**
A precision-mechanism-gated controller could be sold to ship-fitters.
- from: create_tweaked_controllers:tweaked_lectern_controller | via: numismatics sell | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional and leans no. Even setting that aside: the controller is a personal-use navigation tool, not a consumable commodity. One controller per ship; not a recurring sale. Economy ties require recurring production and sale, not one-off durable tools. No loop advancement.

REWORK check: Single anchor (aeronautics) is correct for a control interface mod. No existing connections to rework. OK — connections sound.

## occultengineering   [anchors: Create, magic (2)]

Power-read: 12 blocks, 38 items, 5 c:tags (sterling_silver ingots/nuggets/dusts/blocks + brass/zinc dusts), loot=yes. Explicitly the Create×Occultism bridge — mechanical pulverizer, fan_enspirit_catalyst (automates spirit-fire), spirit_solution (reserved occult intermediate), phlogiport (wireless logistics). Mid-to-endgame tier (occult tree unlocks progression). Already at 2 anchors.

Existing connections: Create + magic (2). Dossier surfaces one weak economy candidate: sterling_silver → numismatics mint. Review all existing connections and probe for a 3rd anchor.

**Candidate A — economy via M-08: sterling_silver → Create-processed → numismatics coin**
Sterling silver is a Create-processed alloy (occultengineering registers c:ingots/sterling_silver). Create-processed scarce alloys → coin is the M-08 pattern. Sterling silver sits between mundane metals and endgame occult materials — a logical mid-tier coin material.
- from: occultengineering:sterling_silver_block (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — a processed occult alloy as a premium coin-metal is thematically coherent; silver has historic monetary value and an occult resonance | verdict: ACCEPT | hook: Sterling silver — forged from Occultism's metals through Create — is a mint-grade alloy; the occult engineer produces the coin-metal that the economy pillar stamps.

**Candidate B — aeronautics via M-23: sterling_silver plate as a structural hull material**
A Create-processed occult alloy with both tech and magic resonance could gate mid-tier airship hull components — a "spirit-forged hull" tier between iron/brass and netherite.
- from: occultengineering:sterling_silver (pressed plate) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok — an occult-alloy hull that resists magical interference is a player-nodding upgrade path; "spirit-forged airframe" makes narrative sense | verdict: REJECT | reason: Doubling sterling_silver roles risks over-burdening one material. If it's already the M-08 coin-metal, gating it also into aeronautics hull construction creates a three-way demand (coin + hull + occult recipes) that fragments the material's identity and could produce bottlenecks. One primary role is cleaner. Additionally, sterling silver is an occult alloy — airframes are inherently a tech/structural context; the tone blends but the demand-math is problematic. REJECT in favour of the cleaner M-08 coin path.

REWORK check on existing connections:
- Create anchor: occultengineering feeds from create:compacting/filling/haunting/item_application/mixing/pressing and outputs automated occult machinery. Strongly grounded. OK.
- Magic anchor: feeds occultism:ritual/spirit_fire; spirit_solution is the reserved reagent. Strongly grounded. OK.
- The dossier's note "already ≥2 pillars; not required" is correct but the M-08 sterling_silver→coin is a clean economy addition. OK — existing connections sound; 1 ACCEPT adds economy.

## create_connected   [anchors: Create (1)]

Power-read: 65 blocks, 57 items, 3 c:tags, loot=yes. A dense Create QoL expansion — copycat family (universal texture skins), kinetic logic/control parts (gearboxes, clutches, brakes, kinetic battery), logistics (silo, inventory_bridge, chute). Already uses create:cutting/filling/item_application/sequenced_assembly for its own recipes. The copycat blocks are the headline feature — they can wear *any* placed block's texture.

Existing connections: 1 anchor (Create). Dossier says "leave — support role."

**Candidate A — aeronautics via M-24: kinetic_battery / kinetic_bridge as drivetrain components**
The kinetic_battery stores rotational energy; kinetic_bridge transmits it across a gap. These are drivetrain components — they directly enable Aeronautics ship power-storage and engine-to-shaft transmission.
- from: create_connected:kinetic_battery | via: aeronautics construction recipe / item_application | to: aeronautics | motif: M-24 | power: mid | tone: ok — a kinetic battery as a ship power reservoir is exactly the "drivetrain component → propulsion" pattern M-24 describes | verdict: ACCEPT | hook: A kinetic battery stores the flywheel's energy for ship bursts of thrust — the Create engineer's power-management toolkit becomes the airship's power grid.

**Candidate B — economy via copycat blocks: M-04 crushing recycle**
Copycat blocks adopt foreign textures. A copycat_metal_* using an iron/copper-skinned block could crush back to scrap (M-04 lossy recycle).
- from: create_connected:copycat_block (metal-skinned variant) | via: create:crushing | to: Create (loop-internal) | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco blocks that are genuinely over-produced. Copycat blocks are a QoL cosmetic — they are not over-produced raw material that needs recycling. The "skin" is borrowed from another block; the copycat structure itself is a Create iron/brass frame. Crushing a copycat to recover the frame material is a thin loop — it doesn't advance the loop, it just returns the raw input. Leave.

**Candidate C — Create×aeronautics: create_connected fan catalysts as ship environmental tools**
create_connected registers fan_blasting_catalyst, fan_freezing_catalyst, fan_withering_catalyst, fan_haunting_catalyst, fan_splashing_catalyst etc. — these are modular catalysts enabling the encased fan to do specific processing. On an Aeronautics ship, a fan_haunting_catalyst mounted on-ship lets the ship's Create machinery do spirit processing in flight.
- from: create_connected:fan_haunting_catalyst | via: create:haunting on-ship (aeronautics context) | to: aeronautics + magic | motif: M-19 / M-24 | power: mid | tone: ok — a ghost-processing furnace on an airship is exactly the "Create machinery on a moving ship" vision | verdict: REJECT | reason: This is a legitimate creative integration but it is a *config/gameplay design* decision (mounting specific catalysts on ships), not a *recipe weave*. There is no recipe to author here — the fan_haunting_catalyst already exists and works in-world. A Phase-2 weave must produce a Phase-3 recipe action. This is a gameplay documentation note, not a candidate. Reject as out-of-scope for weave mapping.

REWORK check: Create anchor is solid (native Create QoL). The kinetic_battery → aeronautics (M-24) is the clean second anchor. OK for existing Create connection; 1 ACCEPT adds aeronautics.

## createimmersivetacz   [anchors: Create (1)]

Power-read: 2 blocks (gunpowder_fluid, nitropowder_fluid), 14 items (gun_barrel, firing_mechanism, primer, twelve_gauge_shell, casings, etc.), loot=no. Mid-tier — requires brass plates, precision mechanisms, and andesite alloy (mid-game Create materials). All production is via Create sequenced_assembly / mechanical_crafting / cutting / filling / mixing — a pure Create chain.

Existing connections: 1 anchor (Create). Dossier flags economy (M-09 ammo as trade good) as a MED candidate.

**Candidate A — economy via M-09: ammo as consumable trade good**
Ammunition (twelve_gauge_shell, primer, casings) is a consumable — spent on every use, requiring repeated re-purchase or self-production. On a PvPvE server, ammo is the consumable archetype: a specialized Create-factory player mass-produces it and sells to hunters/combatants. This is structurally identical to wine/cheese (M-09 luxury/processed → coin) but for a combat good.
- from: createimmersivetacz:twelve_gauge_shell / createimmersivetacz:primer | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — an arms dealer selling shells and primers for coin is completely intuitive in a PvPvE pack; arms trade is a real economy archetype | verdict: ACCEPT | hook: The Create ammo factory becomes the server's arms supplier — shells and primers are the combat specialist's export, priced and sold through Numismatics, making gun logistics an economic specialty.

**Candidate B — magic via M-10: nitropowder as an arcane explosive reagent**
nitropowder_fluid is a super-energetic Create fluid (more powerful than gunpowder). Could it serve as an Ars Nouveau imbuement input for explosive-effect spells or a Forbidden Arcanus infusion?
- from: createimmersivetacz:nitropowder_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Tone clash. Nitropowder is a military-industrial material; Ars Nouveau's imbuement is arcane-natural. The combination is jarring without a bridging narrative. More importantly, nitropowder is already a reserved reagent as TACZ propellant — giving it a magic role risks creating competing demand that strains the fluid production chain. Keep nitropowder in the Create↔guns loop.

REWORK check: Single anchor (Create) is correct. The M-09 ammo economy candidate is clean. OK — existing Create connection sound; 1 ACCEPT adds economy.

## sable   [anchors: support/library (1)]

- LEAVE — pure physics-engine library: 0 blocks, 0 items, loot=no, no recipe types. The sub-level physics backend that Aeronautics builds on. Zero content surface. The weave lives in the mods that use Sable; Sable itself has nothing to route.

## cookingforblockheads   [anchors: survival (1)]

Power-read: 140 blocks, 148 items, loot=yes. Very content-rich — but almost all of that is 16-color variants of the same kitchen appliances (oven, fridge, sink, counter, cabinet, cooking table). One registered recipe-type: cookingforblockheads:toaster. It is fundamentally a *recipe-discovery and batch-cooking interface layer* over other food mods, not a processing chain in its own right.

Existing connections: 1 anchor (survival). Dossier flags M-05 (Create parts gate the upgraded appliances) as a MED candidate; economy as WEAK.

**Candidate A — Create via M-05: Oven/Fridge/Sink gated on Create brass/copper parts**
The kitchen appliances (oven, fridge, sink) are mid-tier builds — they require iron, stone, glass. Gating the mid-tier appliances (e.g. the oven) behind a Create-stamped copper/brass component makes the kitchen a production milestone that only a player who has progressed into Create's brass tier can fully build.
- from: cookingforblockheads:oven (and/or fridge, sink) | via: create:pressing (copper/brass sheet) as recipe input | to: Create | motif: M-05 | power: mid | tone: ok — a modular kitchen where the "proper oven" needs a pressed copper sheet reads naturally as industrial-era appliance crafting; players in Create packs expect metal working to gate quality tools | verdict: ACCEPT | hook: Upgrading the kitchen from a basic hearth to a real oven requires pressed copper or brass sheet — the food network's backbone is gated on Create metalwork, tying colony cuisine to the tech spine.

**Candidate B — economy via M-09: Cooking Table as economy throughput amplifier**
The Cooking Table reveals and batch-crafts all food recipes from stocked ingredients. If food mods already have M-09 (food → coin) connections, does the Cooking Table add an economy anchor by enabling *scaled food production*?
- from: cookingforblockheads:cooking_table (batch food processing) | via: numismatics sell (food outputs) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: The Cooking Table does not produce a new sellable item — it surfaces and crafts what other food mods already produce. The M-09 connection should live on the food-output mods (Farmer's Delight, naturalist, etc.) not on the interface mod that aggregates them. Giving cookingforblockheads an economy anchor for "it can cook food that others sell" is a false anchor — it doesn't advance the loop; it's piggy-backing on the food mods' connections.

REWORK check: Single anchor (survival) is correct. M-05 brass/copper oven gate is the clean second anchor. OK — existing connection sound; 1 ACCEPT adds Create.

## mcwfences   [anchors: support/decoration (1)]

Power-read: 180 blocks, 180 items, loot=yes. Pure decoration — fence/wall/gate variants in every wood/stone/metal style. No recipe types registered. The metal fence variants are the only Create-crush candidate (M-04). The dossier flags this as WEAK.

Existing connections: 1 anchor (decoration). Dossier says "only weave the metal variants as part of a wholesale deco-family pass."

**Candidate A — Create via M-04: metal fence crushing**
Metal fence variants (acorn, bastion, cathedral, column metal fences) crush back to iron nuggets + xp nugget (lossy). This is the standard deco-recycle pattern.
- from: mcwfences:acorn_metal_fence (and metal fence family) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: WEAK edge confirmed. Metal fences are decoration — players do not over-produce them in quantities that need a crush-recycle sink. The loop gains nothing: the material enters as iron → made into a deco fence → crushed back to iron (minus). This is not loop advancement; it is a neutral recycle path with no downstream pull. The dossier is right to flag it as weak; a one-step lossy round-trip on decoration is the lowest-value M-04 application. Reserve M-04 for blocks that are genuinely surplus in production. Reject.

REWORK check: Decoration anchor is a sanctioned support anchor. No connections to rework. Leave at 1 — no coherent second weave. OK — connections sound.

## sereneseasons   [anchors: survival (1)]

Power-read: 1 block (season_sensor), 22 items (calendar + 12 date-icon variants + seasonal items), loot=yes, 1 c:tag. The season_sensor is the main mechanical hook — a redstone emitter keyed to the current season. The calendar tracks date. This is a world-rule mod, not a materials mod, but it has two concrete hooks: the sensor's redstone output and the per-crop fertility system (seasonal crop gates).

Existing connections: 1 anchor (survival). Dossier flags M-16 (seasonal reagent → Create/magic) as a priority motif for this mod, and M-09 (out-of-season produce → coin). CLAUDE.md explicitly calls Serene Seasons a "priority" survival lever and says "want more of these [M-16 weaves]."

**Candidate A — Create via M-16: season_sensor drives seasonal contraptions**
The season_sensor emits a redstone signal keyed to season. Create contraptions can read redstone — a Create gearshift/clutch wired to the sensor can switch crop-processing lines (summer line vs. winter line), open/close greenhouse vents, or change harvest belts. This is a genuinely elegant Create×seasons integration: the sensor becomes the "calendar clock" for Create automation.
- from: sereneseasons:season_sensor | via: create redstone gearshift (config tie — no recipe needed) | to: Create | motif: M-16 | power: everyday | tone: ok — a seasonal clock driving automated farm machinery is deeply intuitive; players would immediately set this up | verdict: ACCEPT | hook: The season sensor becomes the clock for Create's automated farms — summer sets the harvest belt, autumn routes to the mill, winter switches to preserved-food processing — seasonal scarcity is automated.

**Candidate B — economy via M-09: out-of-season produce → scarce luxury trade good**
Crops that only grow in one season become scarce in the off-season — the surviving stock is worth more. A summer berry or winter root not harvestable in autumn becomes a Numismatics trade premium.
- from: any seasonal crop (e.g. a summer-only Farmer's Delight crop) | via: numismatics sell/price (higher off-season price) | to: economy | motif: M-09 | power: everyday | tone: ok — seasonal food scarcity driving prices is Eco 101; a perfectly coherent pack economy lever | verdict: ACCEPT | hook: Seasonal scarcity is a price driver — a crop locked to summer commands coin in winter; traders who stockpiled at harvest sell at premium to those who didn't, creating an emergent commodity market without any forced mechanic.

**Candidate C — magic via M-16: season-locked reagent for Ars Nouveau / Occultism rituals**
Certain plants (already present in magic mods) could be tagged as season-locked: e.g. a spring-only flower used in Ars imbuement, or an autumn-only mushroom as an Occultism ritual reagent. This is the core M-16 motif applied to the magic pillar.
- from: a season-gated crop/plant (config: Serene Seasons fertility list) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-16 | power: everyday | tone: ok — seasonal ritual components are a fundamental folk-magic trope (spring rites, harvest rituals, winter solstice ceremonies); a player nods immediately | verdict: ACCEPT | hook: The arcane calendar follows the seasons — spring-blooms for imbuement, winter herbs for dark rituals; the mage's workbench is gated on the world's real seasonal clock.

REWORK check: Single anchor (survival) is the baseline. CLAUDE.md flags this as priority. Three accepted links add Create + economy + magic — bringing it to 4 anchors (survival + Create + economy + magic). All three are clean M-16 / M-09 routed through established methods with strong player intuition. OK — existing survival anchor sound; significant upgrade.

## createmetalwork   [anchors: Create (1)]

Power-read: 11 blocks (molten metal fluids), 13 items (crushed ores + molten buckets), 55 c:tags, loot=no. The c:tags are the key — `item/crushed_raw_materials/*` for 24 metals including magic-mod metals (palladium, platinum, quicksilver, runite, mythril, adamantite, orichalcum). The entire design is "universal ore doubling + molten-metal casting via Create." Strongly mid-tier (requires Create basins + heat sources).

Existing connections: 1 anchor (Create). Dossier flags economy (M-08, STRONG) and magic (M-03, MED) as candidates.

**Candidate A — economy via M-08: processed metals → numismatics coin**
createmetalwork raises yield of scarce regional metals through Create crushing/mixing/casting. Those processed metals (especially premium ones: platinum, mythril, palladium, adamantite) are the natural feedstock for the Numismatics mint — M-08 is "scarce regional metal → Create-processed → minted into coin." This is the pack's stated economic spine.
- from: createmetalwork:molten_platinum / molten_mythril (and others) | via: create:pressing (ingot → plate) → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — a foundry that processes rare metals into mintable ingots is the industrial economy archetype; this is exactly how Create ties to Numismatics | verdict: ACCEPT | hook: The molten-metal foundry is the pack's mint feeder — ore in, ingot out, coin in the market; the more metals createmetalwork can double, the richer the economy's raw-material supply chain.

**Candidate B — magic via M-03: magic-mod ores doubled through Create**
createmetalwork already tags crushed forms for palladium (galosphere), quicksilver, and potentially occultism silver. Routing magic-mod ores through the crush+melt pipeline gives the magic pillar a Create ore-doubling reward — the mage who processes their ores in a Create foundry gets more.
- from: magic-mod ores (galosphere:palladium, occultism:silver) via createmetalwork:crushed_* c:tags | via: create:crushing → create:mixing (molten) → create:compacting (cast) | to: magic | motif: M-03 | power: mid | tone: ok — a mage using a Create foundry to double their arcane ores is the natural collaboration between tech and magic pillars; no tone clash | verdict: ACCEPT | hook: Arcane ores — palladium, silver, quicksilver — yield more ingots when crushed and melted in a Create foundry, giving magic-pillar players a reason to invest in the Create ore-processing chain.

REWORK check: Single anchor (Create) is correct. Both candidates are clean M-08 and M-03 routed through established Create methods. Note: palladium is galosphere's renamed metal (CLAUDE.md gotcha — never unify as silver). In the M-03 candidate, care must be taken to tag `c:ingots/palladium` not `c:ingots/silver`. OK — existing Create anchor sound; 2 ACCEPTs add economy + magic.

## solmaiddream   [anchors: survival (1)]

Power-read: 0 blocks, 1 item (food_book), loot=no. Minimal content surface — one UI-inspection item for viewing a maid's food diary. The mechanic is: feed a Touhou Little Maid unique foods → maid gains permanent stats at milestones. Entirely dependent on touhou_little_maid and whatever food pool exists in the pack.

Existing connections: 1 anchor (survival). Dossier says "leave — tiny flavor addon; forcing a second edge would be artificial."

**Candidate A — economy via M-09: rare food preparation as a "maid buffing" luxury good**
If feeding maids high-variety foods grows their combat stats, then rare/exotic foods (e.g. season-locked crops, processed delicacies) are valuable inputs — could be priced and traded.
- from: high-variety/rare foods as maid inputs | via: numismatics sell (rare foods priced) | to: economy | motif: M-09 | power: everyday | tone: ok — but forced | verdict: REJECT | reason: This is a pass-through connection — the M-09 link would actually live on the *food mods* (Farmer's Delight, naturalist, seasonal crops) that produce the foods being traded. solmaiddream is the consumer of those foods, not the producer. Giving it an economy anchor for "foods fed to maids can be bought" is the same false-anchor problem as cookingforblockheads candidate B — piggy-backing on other mods' connections. The food mods already have or should have M-09 connections; solmaiddream doesn't earn a second anchor from that.

**Candidate B — magic: maids as companion familiars for Ars Nouveau**
Touhou Little Maid companions fed high-variety foods gain combat stats — they become combat familiars analogous to Ars Nouveau's summoned companions. Could the food_book track "magic foods" as a separate category?
- from: solmaiddream:food_book (tracking mechanic) | via: config tie (magic foods tagged as premium maid foods) | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: No-motif — this doesn't fit any M-01..M-24. The tracking mechanic is internal to solmaiddream; no established method routes through it. Beyond that, Ars Nouveau's familiar system is separate from Touhou Little Maid; forcing a cross-system definition of "magic food" would require inventing a new category with no game-mechanical support. Reject; leave at 1 anchor. The dossier's assessment stands.

REWORK check: 1 anchor (survival) is the floor; 2 is the goal. Both candidates fail on method and/or motif grounds. The dossier's "leave" verdict is confirmed. OK — connections sound for 1 anchor.

## comforts   [anchors: survival (1)]

Power-read: 33 blocks (16 hammocks + 16 sleeping bags + rope_and_nail), 33 items (same), loot=yes, 1 c:tag. Crafted from wool + string — vanilla recipe, no processing chain. The hammock uniquely skips to night (inverse of bed), which has a potential interaction with lunar/seasonal events. Otherwise pure QoL.

Existing connections: 1 anchor (survival). Dossier says "leave — small vanilla-recipe QoL mod; forced edge would be noise."

**Candidate A — economy via M-09: sleeping bags as trade goods / expedition supplies**
Sleeping bags are portable, stackable wool/string items — adventure outfitting. Could an expedition outfitter sell sleeping bags for coin?
- from: comforts:sleeping_bag_* | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok — but thin | verdict: REJECT | reason: Sleeping bags are trivially cheap to craft (wool + string) and serve a pure QoL function. Making them M-09 trade goods adds no meaningful economic pressure — any player who wants one can make it in minutes. The scarcity prerequisite for a meaningful trade good is absent. The loop gains nothing.

**Candidate B — magic via M-22: hammock + lunar event interaction**
The hammock skips day-to-night. During a lunar event (Enhanced Celestials / Ender Moon), resting in a hammock at the right moon phase could yield a unique drop or status. This is exactly the M-22 motif (lunar/celestial reagent → method).
- from: comforts:hammock_* | via: config tie / event gating (M-22 lunar event check on hammock use) | to: magic | motif: M-22 | power: everyday | tone: ok — sleeping through a blood moon in a hammock and waking with moondust on your hands is evocative; players would nod | verdict: ACCEPT | hook: Resting in a hammock during a lunar event yields a celestial trace — moon-dew or star-fragment drops when the hammock use coincides with a lunar peak, seeding the magic reagent supply with a night-camp ritual.

**Candidate C — Create via M-05: wool-and-brass sleeping bag (Create-tier upgrade)**
A "thermally lined" sleeping bag for cold biomes (Cold Sweat integration) could require a Create-pressed brass lining. One step, not a chain — appropriate for an everyday item.
- from: comforts:sleeping_bag_* (cold-insulated variant) | via: create:pressing (brass lining) + vanilla craft | to: Create | motif: M-05 | power: everyday | tone: ok — a thermally insulated sleeping bag needing pressed brass sheet for heat-retention is coherent in an industrial-survival pack | verdict: REJECT | reason: M-05 is "a mod's flagship built IN its own machine, gated on Create parts." The sleeping bag is not built in a Create machine — it's a vanilla craft. The closest motif would be "native-method variant with Create material input" but M-05 requires the mod's *own* machine type as the build method, and comforts has no registered machine. This is at best a recipe modification (add brass sheet to sleeping bag craft), which doesn't meet M-05's definition. The Create connection is thin enough that forcing it via recipe-tweak would be arbitrary. Reject.

REWORK check: Single anchor (survival) is correct. The M-22 hammock × lunar event is the clean second anchor — it uses an existing motif, has strong tone fit, and advances the survival→magic leg of the loop (night-camp reagent harvesting). OK — existing anchor sound; 1 ACCEPT adds magic.

== CHUNK COMPLETE ==

