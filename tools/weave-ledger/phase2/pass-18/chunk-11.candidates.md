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

## rhino   [anchors: support (1)]

LEAVE — pure JS runtime engine; zero items, zero blocks, zero loot, zero recipe surface. Hard dependency of KubeJS; no gameplay content of its own. Weaving a library has no loop effect — the weave is in the KubeJS scripts it executes, not in Rhino itself.

## knightlib   [anchors: support (1)]

Power-read: knightlib ships 6 items (grail, great_chalice, homunculus, great_essence, small_essence) but the dossier confirms these are dormant without Knight Quest, which is not in this pack. The content is effectively dead code here.

**Candidate 1 — knightlib:great_essence as magic reagent (M-02)**
- from: knightlib:great_essence / small_essence | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok — medieval/alchemical flavor items as arcane catalysts is coherent; "essence" items are exactly the sort of thing a ritual sink would consume | red-team: the dossier explicitly says "do not weave dead items" — Knight Quest is absent, so great_essence has no acquisition path in-game; a player cannot obtain the reagent, making any recipe using it a dead branch; the tone is right but the content is inert | verdict: REJECT | reason: Knight Quest not in pack; items have no acquisition path; weaving unreachable reagents creates confusing JEI entries with no player path to the recipe

LEAVE — all items are dead without Knight Quest. If Knight Quest is ever added, revisit great_essence as M-02 (magic reagent) and great_chalice as a ritual block (M-11). Until then, no content surface.

## platform   [anchors: support (1)]

LEAVE — zero blocks, zero items, zero loot, zero recipe surface. Pure code library (Architectury-based registry helpers). Nothing to route through any method.

## cloth_config   [anchors: support (1)]

LEAVE — zero blocks, zero items, zero gameplay content. Config-screen API library. No weave surface exists.

## bigsignwriter   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero gameplay content. Client-side sign-editing UI utility. No weave surface exists.

## kotlinforforge-5.11.0-all   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero gameplay content. Kotlin language adapter/runtime for NeoForge. No weave surface exists.

## createlowheated   [anchors: Create (1)]

Power-read: one item (createlowheated:basic_burner). The burner is an everyday-tier Create block — it's a furnace-fuel consumer that unlocks Create basin processing. A balance/mechanics tweak, not a content producer. Its only recipe is crafted via create:mixing.

Existing connection review: OK — single Create anchor is correct for a mechanics-balance mod. The dossier correctly calls it a support-tier tweak within Create.

**Candidate 1 — basic_burner fuel demand as survival pressure (M-16 / survival)**
- from: createlowheated:basic_burner consuming solid fuel (coal/charcoal/wood) | via: Serene Seasons seasonal charcoal/wood supply constraint | to: survival | motif: M-16 | power: everyday | tone: ok — if Create heat is now an active fuel cost, seasonal scarcity of charcoal (slower wood growth in winter) creates a meaningful survival pressure on the Create production line; the mod creates the demand, Serene Seasons creates the seasonal scarcity | red-team: this is a config/gameplay constraint weave rather than a recipe weave — there is no item to route through a method; the "weave" is the emergent pressure from fuel scarcity, not an authored recipe connection; the method-pull logic breaks down because createlowheated registers no recipe types and has no item output to sink into another method | verdict: REJECT | reason: no-motif for a behavior/config constraint link; no routable item output; the survival-pressure effect is emergent from the fuel mechanic itself and does not require a recipe weave to realize; attempting to author a recipe here would be inventing content the mod doesn't surface

**Candidate 2 — basic_burner as a sold/traded fuel-management tool (M-09 / economy)**
- from: createlowheated:basic_burner (the block itself) | via: numismatics sell / villager trade | to: economy | motif: M-09 | power: everyday | tone: marginal — a single-block Create-heating device as a trade good is a thin proposition; it's a crafted utility block, not a luxury or processed consumable; the M-09 motif is for high-effort consumables (wine, cheese), not crafted-block utilities | verdict: REJECT | reason: M-09 requires a high-effort consumable or luxury good; a single-block basin-heater is not that; the trade surface is too thin and the economy anchor would be nominal, not load-bearing

LEAVE — createlowheated is a single-block balance tweak deepening Create heat management. No recipe surface, no tradeable output, no magic/survival/economy hook that isn't forced. Correct as a Create-only support-tier mod.

## trading_floor   [anchors: Create, economy (2)]

Power-read: one item/block (trading_floor:trading_depot). Mid-tier — requires a Create-adjacent setup (depot, villager, belt routing). Flagship function: bridges Create production automation to villager trades.

Existing connection review: OK — Create + economy is the correct and natural anchor pair. The dossier correctly identifies this as a natural M-08 keystone (Create-processed scarce goods → depot → emeralds/Numismatic value). No rework needed.

**Candidate 1 — trading depot → survival goods acquisition (M-21 provisional)**
- from: trading_floor:trading_depot automating villager trades | via: villager trade → numismatics payout | to: economy (already anchored) | motif: M-21 | power: mid | tone: ok — automating villager trades is literally what the depot does; it bridges the vanilla trade economy into Numismatics | red-team: M-21 is provisional (maintainer leans no); the mod is already anchored Create+economy; this would add no new system anchor, only deepen an existing economy connection | verdict: REJECT | reason: M-21 is provisional; the mod is already at 2 anchors; the candidate adds depth to an existing anchor rather than a new system link; not needed

**Candidate 2 — trading depot as a survival food/supply acquisition node (M-12)**
- from: trading_floor:trading_depot automating farmer/butcher/fisherman villager trades | via: farmersdelight:cooking output fed as trade inputs | to: survival | motif: M-12 | power: mid | tone: ok — automate a farmer villager to produce bread/vegetables/meat; belt the Farmers Delight processed food in as trade currency; belt processed food out; ties the Create logistics spine into survival food supply | red-team: the depot itself doesn't cook or process food — it just runs trades; the "survival" tie is the villager's trade, not the depot's function; this is a circumstantial weave (the depot could trade food, but so could a player by hand) rather than a structural one; the dossier and existing anchors already cover this through the Create→economy vector | verdict: REJECT | reason: circumstantial — the depot facilitates whatever trade the villager offers; food trades are a player configuration choice, not a structural mod tie; no new anchor gained; existing 2-anchor coverage is sound

OK — connections sound. trading_floor is correctly anchored at Create + economy. No rework needed. The natural extension (feeding M-08 processed goods through the depot) is design intent already noted in the dossier.

## miningspeedtooltips   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero loot, zero recipe surface. Client-side tooltip display tweak for digging speed. No content to route through any method.

## structurize   [anchors: support (1)]

LEAVE — pure build-engine library for MineColonies. Its 14 items (scepters, caliper, shape tool) are functional only within the MineColonies blueprint pipeline; they are not tradeable reagents or recipe inputs. No weave surface — its weave is MineColonies' weave.

## xaerominimap   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero recipe surface. Client-side navigation minimap. No content to route through any method.

## s_a_b   [anchors: Create, aeronautics (2)]

Power-read: s_a_b is 387 blocks of blast-resistant armor plating in 16 colors + 4 tiers (light/standard/double/hard steel) plus brass-letter signage blocks. The armor plating is mid-to-endgame — it's made with TFMG steel through Create compacting/mixing. The brass letter set is deco-everyday. Already uses create:compacting + create:mixing as inbound methods.

Existing connection review: OK — Create + aeronautics is the correct anchor pair. Steel armor plating as ship hulls is M-23's natural expression. No rework needed.

**Candidate 1 — hard steel plate as a sequenced-assembly endgame gate (M-06)**
- from: s_a_b:hardsteelblock or doublesteelblock | via: create:sequenced_assembly (multi-step hull-plate fabrication chain) | to: Create | motif: M-06 | power: endgame | tone: ok — hardened steel hull plates as sequenced-assembly components make them a visible depth gate; the highest-tier armor plating requiring a multi-step Create chain rather than a single craft fits GregTech-style depth scaling | red-team: s_a_b is already in the Create pillar via its recipes (compacting/mixing); adding a sequenced_assembly step to the hardsteelblock deepens an existing Create anchor rather than bridging a new system; anchor count stays at 2; this is a depth-within-Create weave, not a cross-system weave | verdict: ACCEPT | hook: the hardest hull plate isn't stamped in a basin — it's tempered through a sequenced heat-and-press chain; the same machine that builds the ship can't skip that step | note: depth weave within Create pillar; anchor count unchanged (still 2)

**Candidate 2 — steel armor plating → economy sell good (M-08)**
- from: s_a_b:blacksteelblock / colored steel blocks | via: numismatics:mint / trading depot sell | to: economy | motif: M-08 | power: mid | tone: ok — processed steel armor plating is a high-effort manufactured good; selling plating as a trade good (armor-plate merchants) fits the industrial economy | red-team: the mod has no direct economy tie, but steel plating as a trade good is circumstantial — the blocks are construction materials, not luxury consumables; M-08 is "coin from processed scarcity," which fits better for raw metal → coin than for a construction block; the economy link is thin (any crafted block could be sold) | verdict: REJECT | reason: M-08 is better reserved for raw-metal-to-coin chains; selling construction blocks is a player choice, not a structural weave; the economy anchor would be nominal

OK — connections sound. s_a_b is correctly anchored at Create + aeronautics. The M-06 depth weave for hard-tier plates is an optional depth enhancement, not a new anchor.

## jakes-build-tools-2.0.1.5   [anchors: QoL/support (1)]

Power-read: 30 items, all builder utility tools (hammer for 3×3 mining, chisel for block-swap, trowel for random placement, hard hat for reach, tape measure, rope ladder, magnet). Registered under the `minecraft:` namespace (datapack mod). Also ships `minecraft:experience_flask_0..3` (XP storage flasks). No modded recipe types.

**Candidate 1 — experience flasks → magic reagent sink (M-10)**
- from: minecraft:experience_flask_1/2/3 (stored XP) | via: ars_nouveau:imbuement or occultism:spirit_fire (XP-charged magical items) | to: magic | motif: M-10 | power: mid | tone: ok — XP flasks storing levels are a natural arcane fuel; consuming filled flasks in a ritual or imbuement to power a spell/focus upgrade is thematically coherent (XP ↔ arcane energy is a well-understood MC design pattern) | red-team: the experience flasks are a builder QoL tool, not an arcane item; their namespace is `minecraft:`, not a dedicated ns; their purpose is "store XP to avoid death-penalty loss while building," not "fuel magic rituals"; the arcane-XP connection is valid in general but imports a specific use-case onto a tool designed for a different purpose; tone OK but function clash | verdict: ACCEPT | hook: drain a filled XP flask into the imbuement altar — concentrated experience is concentrated arcane potential; the builder's insurance becomes the mage's catalyst

**Candidate 2 — tools as Create-deployed building upgrades (M-20)**
- from: jakes build tools (chisel, trowel) | via: create:deploying / item_application | to: Create | motif: M-20 | power: everyday | tone: marginal — routing builder tools through Create deployers is mechanically possible (a deployer can use a chisel to swap blocks on a contraption) but this is a stretch; the chisel is a player-use tool, not an upgrade item; the flavor of M-20 is "apply a woven part onto a base to upgrade it," not "attach a utility tool to a deployer" | red-team: no clear loop advancement; builder tools operating on contraptions doesn't bridge a new system; it would be automation flavor, not a cross-system weave; dossier correctly notes that gating utility tools behind Create processing is a forced edge | verdict: REJECT | reason: M-20 requires a woven upgrade part, not a utility tool; no loop advancement; forced edge as dossier correctly diagnosed

**Candidate 3 — hard hat as a sold equipment good (M-09)**
- from: minecraft:hard_hat / foreman_hard_hat | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: marginal — a construction hard hat as a trade good is plausible flavor (workers buying safety equipment) but the hard hat is a vanilla-crafted utility item (gives +1 reach and anvil immunity), not a luxury food or processed good; M-09 is specifically "a high-effort consumable (wine, cheese, processed crop) is a sellable trade good" | verdict: REJECT | reason: M-09 is for high-effort consumables/luxury goods; a crafted tool does not fit the motif; selling any craftable item is a player choice, not a structural weave

OK on the XP flask → magic accept; the tools otherwise leave no structural weave surface. Anchor: support + (with flask weave) magic.

## mowziesmobs   [anchors: survival (1)]

Power-read: Mowzies Mobs is an endgame-pressure mod. The bosses (Ferrous Wroughtnaut, Frostmaw, Barako) are rare, hard encounters with unique artifact drops. The artifacts (earthrend_gauntlet, ice_crystal, sol_visage, elokosa_paw variants) are power items — unbreakable, unique, endgame-tier. The Grottol is a mid-tier rare mob that emits gems. Barakoa villages are structures with loot tables. The mod has loot=yes.

**Candidate 1 — Mowzie boss drops as Create/tech gate keys (M-15)**
- from: mowziesmobs:ice_crystal / earthrend_gauntlet / sol_visage | via: create:sequenced_assembly (boss drop as a gating input to a high-tier tech recipe) | to: Create | motif: M-15 | power: endgame | tone: ok — the pack explicitly designs "complex Create/tech unlocks via boss drops" (DESIGN north star, §3); Mowzie's artifacts are exactly the premium, non-renewable drops that gate endgame tech; the earthrend gauntlet (powerful kinetic glove) gating a high-tier Create mechanical component is thematically spot-on; the ice_crystal's cold-energy theme could gate a cryogenic processing step | verdict: ACCEPT | hook: the Wroughtnaut's earthrend gauntlet — proof of raw mechanical mastery — is the key that unlocks the most complex Create assembly; you can't automate your way past needing to fight for it

**Candidate 2 — Mowzie boss drops as magic catalysts (M-02 / M-11)**
- from: mowziesmobs:ice_crystal (Frostmaw) / sol_visage (Barako sun-power) | via: ars_nouveau:imbuement (sun-aspect/frost-aspect catalyst) or occultism:spirit_fire (transmute artifact → spirit/essence) | to: magic | motif: M-02 | power: endgame | tone: ok — Frostmaw's ice_crystal has obvious ice/cold magic resonance; Barako's sol_visage is a sun-power artifact; routing them through Ars Nouveau imbuement as elemental catalysts or through Occultism spirit_fire as high-tier reagents is thematically direct; boss artifacts feeding the magic spine is a classic weave | verdict: ACCEPT | hook: the Frostmaw's ice crystal doesn't just freeze enemies — crushed in the imbuement altar, its concentrated cold catalyzes Ars Nouveau frost-aspect spells

**Candidate 3 — Mowzie bounties for coin (M-14)**
- from: mowziesmobs boss kills / drop items | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok — bounty boards paying coin for boss kills (combat → economy) is the standard M-14 application; Mowzie's bosses are rare, meaningful kills that deserve a coin reward | red-team: M-14 is provisional and the economy review (0.9.0) may tighten it; the link is valid but secondary; the pack already has the M-15 (boss key gate) as the load-bearing cross-system anchor | verdict: ACCEPT | hook: the hunters' guild pays well for proof of Barako's defeat — the gong fetches a handsome sum at the trading post | note: M-14 is provisional; accept pending 0.9 economy review

**Candidate 4 — Barakoa village loot tables seeded with economy/magic items (M-08/M-02 loot-seed)**
- from: mowziesmobs Barakoa village structures (loot=yes) | via: loot-seed (datapack: add scarce coins / magic reagents to Barakoa chest loot) | to: economy + magic | motif: M-08 / M-02 | power: mid | tone: ok — Barakoa villages are tribal structures; seeding them with Numismatic coins (M-08 flavor: tribal currency) and with rare Ars/Occultism reagents (M-02) gives the structures an economy/magic discovery purpose beyond the boss fight; players explore for both the boss and the loot | verdict: ACCEPT | hook: the Barakoa's treasury holds both coin and strange alchemical relics — this tribe trades in more than blowdarts

**Candidate 5 — Grottol ore-drop as Create ore-doubling input (M-03)**
- from: mowziesmobs:captured_grottol (drops diamonds when kept) | via: create:crushing (the Grottol is a mob mechanic, not an ore seam; it drops diamonds — not a crushing candidate) | to: Create | motif: M-03 | power: mid | tone: marginal — the Grottol eats ores and drops diamonds; it's a mob mechanic, not a direct ore-crushing candidate; M-03 is for ores through crushing, not mob drops through a crusher | verdict: REJECT | reason: the Grottol is an organic mob mechanic; M-03 requires an ore seam run through create:crushing; routing a mob-drop through a crusher is M-11 territory (organic→magic transmutation), not M-03 (ore-doubling); the mob's diamond drop is already a strong enough design payoff without a Create bridge

REWORK: The existing single survival anchor is correct but clearly under-exploited for a mod with endgame boss artifacts and structures. Formalize M-15 (boss-key gate for Create tech) and M-02 (boss drop as magic reagent) as the primary weave targets — both are directly supported by DESIGN north star §3. M-14 (bounty) is provisional but valid. The loot-seed (M-02/M-08 in Barakoa structures) is a lower-effort entry point. The Grottol-as-M-03 is correctly rejected.

## companion   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero recipe surface. Pet-safety behavior mod (teleport/retreat mechanics). No content to route through any method.

## packetfixer   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero gameplay content. Network packet-size fix. No weave surface exists.

## spark   [anchors: support (1)]

LEAVE — zero items, zero blocks, zero gameplay content. Server/client performance profiler. No weave surface exists.

== CHUNK COMPLETE ==

