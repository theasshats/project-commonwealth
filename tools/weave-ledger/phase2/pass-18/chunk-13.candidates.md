# Phase 2 candidates — chunk-13

## enhancedcelestials   [anchors: survival (1)]

Power-read: The mod's core output is its lunar *event states* (Blood Moon, Harvest Moon, Blue Moon) — world-state conditions, not items. Its only physical items are `enhancedcelestials:meteor` (a decorative rock), `space_moss_block/grass` (deco vegetation), and a `space_moss_bug_spawn_egg`. Meteor is harvestable stone-like; space moss is flora. None are tagged `c:ingots` or `c:ores`. The event conditions are a distinct, non-item mechanic.

The dossier identifies two candidate angles: (a) crushing meteor as a Create feedstock (M-04), and (b) event-gating a magic ritual (M-22 adjacent).

**Candidate A — meteor as Create crushable feedstock:**
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A meteor chunk is just a strange rock — crushing it to get iron/nickel + an xp-nugget makes immediate sense; players who find one sitting in the world naturally ask "what do I do with this?"

**Candidate B — Blood/Harvest/Blue Moon event-gates a magic ritual:**
- from: lunar event (Blood Moon / Blue Moon active) | via: event-gating (config/KubeJS condition on ars_nouveau:summon_ritual or occultism:ritual) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: The Blue Moon should unlock something impossible on ordinary nights — a ritual that only completes when the moon turns; players learn the world's magic is responsive to the sky.

**Candidate C — Harvest Moon as seasonal crop accelerator weaving into Create cooking chains:**
Red-team: The Harvest Moon growth buff is a passive global modifier with no item surface — there is nothing to route through a method. Any "weave" here is just config flavor, not a real method-routing. No item changes hands. → REJECT — no material to route; the mechanic is a global multiplier, not a node in a processing chain.

**Existing connections review:** Single anchor (survival). Candidate A (M-04) adds Create; Candidate B (M-22) adds magic. Both are coherent second anchors.

REWORK: N/A — mod currently has 1 anchor; no existing connections to audit.

---

## modernfix   [anchors: support (performance) (1)]

LEAVE — genuine zero-content performance library (JVM/loader-level patches; 0 items, 0 blocks, no recipe types, no methods). No material surface to weave. Sanctioned support role.

---

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

Power-read: Pure cosmetic layer — 16× colored levitite + 4 tire sizes × 16 colors = 80 items, all reskins. Mechanics are: (1) hold dye + catalyst = colored levitite, (2) tire + dye in crafting table = colored tire. Nothing new is produced; the mod is a dye-permutation surface on existing aeronautics parts.

The dossier notes the dye step already leans on vanilla dyes and flagged the idea of routing through Create mixing as "gilding." That is correct.

**Candidate A — Create mixing to produce dyed levitite (vanity upgrade route):**
Red-team: the existing crafting-table color route is already working and accessible at everyday tier. Running dyes through create:mixing to produce colored levitite would add steps with zero gameplay gain — this is adding depth to a decoration step where depth adds nothing. The coloring is already physically coherent (dye + catalyst). → REJECT — over-engineering a cosmetic; no depth gained; the tier (cosmetic) doesn't warrant a deeper chain.

**Candidate B — Dyed levitite as an economy-side sellable "custom hull" luxury:**
Red-team: The colored blocks are cosmetic permutations of a structural material; they are not a "high-effort consumable" (M-09) — the dye step is cheap and instant. There is no supply scarcity, no production bottleneck. Pricing these as luxury goods would be arbitrary. → REJECT — M-09 applies to *high-effort* cured goods; a trivial color variant doesn't qualify.

**Existing connections review:** Single anchor (aeronautics). No coherent weave found. Cosmetic-palette mods are sanctioned support. One anchor is acceptable here.

REWORK: N/A — correct as-is; it is the deco layer of the aeronautics system. The dossier's own "leave" conclusion is sound.

---

## meadow   [anchors: survival (1)]

Power-read: Rich food/craft content mod. Alpine salt ore (everyday worldgen output, milled), cheese wheels (mid — multi-step native pipeline), alpine crops (everyday), chambray felt (mid — felting step). The cheese pipeline is genuinely multi-step (milk → cooking cauldron → cheese_form press → wheel), making cheese a meaningful mid-tier processed good. Alpine salt is a basic harvestable that milling/crushing would naturally touch.

The dossier identifies two strong candidates: M-09 cheese-to-coin and M-12 salt/dairy to Create processing.

**Candidate A — Cheese wheel / alpine dishes as luxury sell goods (M-09):**
- from: meadow:cheese_wheel / meadow:buffalo_cheese_wheel / meadow:amethyst_cheese_wheel | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A wheel of aged alpine cheese is exactly the kind of regional specialty a trading post would price in coin — players who specialize in dairy farming have something worth selling.

**Candidate B — Alpine salt through Create milling:**
- from: meadow:alpine_salt_ore | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore runs through the mill like any mineral — getting a refined alpine salt that cooking recipes demand; the Create spine touches the alpine biome's signature resource.

**Candidate C — Meadow cheese mass / milk as create:mixing input for a processed food intermediate:**
- from: meadow:alpine_salt (refined) | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A splash of alpine salt in the mixer yields a brined intermediate — an ingredient that elevates extradelight / farmersdelight dish recipes, so meadow salt feeds the whole cooking web.

**Candidate D — Felted chambray wool routed through create:pressing:**
Red-team: Pressing turns items under pressure — felted fabric under a press could be a textile intermediate. However, the felting step is already a distinct recipe type (meadow:felting). Adding a pressing step on top of felt to produce a further intermediate requires inventing what that intermediate *is* and where it goes. Without a clear consumer, this is speculation. → REJECT — no clear consumer identified for a pressed felt intermediate; would be an orphan edge.

**Candidate E — Cheese as seasonal reagent (winter-only production gated by Serene Seasons):**
- from: meadow:cheese_wheel | via: config/KubeJS season-gate on recipe inputs | to: survival (via M-16) | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: The best alpine cheese ages through winter — recipes requiring a "winter-cured wheel" reinforce the seasons as a production variable, not just weather.

**Existing connections review:** Single anchor (survival). Candidates A (M-09 economy), B/C (M-12 Create), D accepted (M-16 survival–Create) give multiple strong second anchors.

REWORK: N/A — currently 1 anchor; no existing connections to audit.

---

## opacpvp   [anchors: support (PvP rules/QoL) (1)]

LEAVE — zero content (0 items, 0 blocks, no recipe types). Pure server-side combat-rules behavior tweak. No material surface to weave. Sanctioned support role serving the cooperative-PvPvE premise directly.

---

## ichunutil   [anchors: support (library) (1)]

LEAVE — shared-class library; 0 items, 0 blocks, no recipe types, no gameplay of its own. Genuine zero-content code library — exactly the LEAVE condition.

---

## createpickywheels   [anchors: Create (1)]

Power-read: No items/blocks — purely a behavioral constraint on Create's two starter generators (water wheel: must be in a River biome with a large water body; windmill: must have open air + Overworld biome). This is a placement-geography constraint, not a material flow.

The dossier identifies one candidate: survival anchor via biome-gated power (the world pushes back — river biomes, open terrain).

**Candidate A — Biome-gated Create power as a survival-pressure link:**
- from: create water_wheel / windmill placement | via: config (biome/placement rules) | to: survival | motif: no-motif (behavioral constraint; not a material routing) | power: everyday | tone: ok | verdict: REJECT — no-motif. This is a design-level connection (the world's geography constrains production), not a routable material link. It earns the survival flavor label without a weave recipe. The connection is real but unresolvable as a motif-carry; it should be noted in the dossier as a thematic anchor rather than a Phase-3 action.

**Note:** The behavioral biome-constraint *does* mean this mod functionally adds "scarcity" pressure on power placement, which is the pack's loop's foundation. This strengthens its Create anchor rather than adding a new system. Log as architectural note, not a recipe weave.

REWORK: N/A — single anchor (Create); no existing connections to audit.

---

## betterendisland   [anchors: survival (1)]

LEAVE — pure structure/worldgen overhaul of the End's main island; 0 blocks, 0 items, loot=no. No material surface whatsoever. No loot tables to seed. Genuine zero-content mod from a weave perspective.

---

## moogs_structures   [anchors: support (library/API) (1)]

LEAVE — worldgen framework API; 0 items, 0 blocks, loot=no. Genuine zero-content library consumed by dependent mods. No weave possible.

---

## recipe_integration   [anchors: support (library/recipe-bridge) (1)]

Power-read: This is a conditional datapack shipping ~3,700 cross-mod recipes authored against other mods' recipe types. It is itself the weaving tool, not a weave target. Its 82 c:tags mostly reference mods not installed (aether, mekanism, MI, GT…) and are inert. The methods it uses (create:milling/mixing/pressing, ars_nouveau:scry_ritual, occultism:crushing, farmersdelight:cutting, etc.) are all already in this pack's palette.

**Candidate A — Treat as a connective-infrastructure audit target:**
The meaningful Phase-3 action is an audit of which recipe_integration recipes actually fire against the Derpack-X modlist, and whether any of those auto-wired edges conflict with deliberately-shaped KubeJS weaves (especially M-08 coin-from-metal paths, M-11 reagent definitions, or cost-model 3× baselines). This is a config-audit action, not a recipe-weave. No new ACCEPT candidate here.

Red-team of adding an economy/Create anchor via its recipe outputs: The mod adds edges but *it does not own them* — the nodes belong to the mods producing/consuming those edges. Assigning recipe_integration an economy anchor because it creates economy-relevant connections would double-count. → REJECT — support infrastructure; it enables weaves rather than being a weave node. Audit its active recipes as a Phase-3 config task; don't assign a second anchor.

REWORK: N/A — support role is correct; no existing connections to audit.

---

## fishingreal   [anchors: survival (1)]

LEAVE — pure behavior tweak (catch item → spawn live entity); 0 items, 0 blocks. No material surface to weave. The dossier correctly notes that weaving belongs to the fish-content and cooking mods underneath (createfisheryindustry, farmersdelight), not here.

---

## mcwdoors   [anchors: support (decoration palette) (1)]

Power-read: 246 blocks, 260 items — all door/gate variants in vanilla wood + metal. Crafted from planks/iron/glass on vanilla table. The only weave surface is metal/iron variants (create:crushing → nuggets, M-04) or loot seeding. loot=yes means the mod has a loot table, but for door/gate items this is almost certainly crafting-recipe drops, not structure loot.

**Candidate A — Metal/iron door variants crushed back to scrap (M-04):**
- from: mcwdoors:*_modern_door / *_metal variants (iron/steel) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A salvaged iron door runs through the crusher and comes back as iron nuggets + scrap — the same logic as any metal deco; players who overbuild recoup material rather than voiding it.

**Candidate B — Wood door variants crushed to planks/sawdust:**
Red-team: Wood crushing is already handled by vanilla planks → sticks → dust chains. Adding a distinct crush recipe for 200+ wood-variant doors is tedious maintenance and adds no new loop value — the result is just planks or sawdust that already exist. → REJECT — mass woodwork crush recipes are boilerplate with no loop contribution; the metal-only case (Candidate A) is enough.

**Existing connections review:** Single anchor (decoration palette). M-04 metal crush adds a light Create connection, making it a valid "deco→Create" 2nd anchor.

REWORK: N/A — single anchor.

---

## invtweaksemuforipn   [anchors: client-only QoL / compat (support) (1)]

LEAVE — pure client-side InvTweaks keybind/API emulation shim; 0 items, 0 blocks. No material surface. Genuine zero-content compat glue.

---

## towntalk   [anchors: support (curated flavor, MineColonies) (1)]

LEAVE — audio-only colonist voice-bark flavor mod; 0 items, 0 blocks. No material surface. It rides on MineColonies which carries all the colony/economy/Create-gate weave. Genuine zero-content from a weave perspective.

---

## create_hypertube   [anchors: Create, aeronautics (2)]

Power-read: 4 blocks, 6 items. Already at 2 anchors. Crafted via create:sequenced_assembly (already has an inbound Create weave). Items are all tube infrastructure (hypertube, accelerator, entrance, attachments). The mod moves players/entities, not materials — it is a transit network.

**Candidate A — Hypertube entrance as an aeronautics logistics enabler (economy arm):**
Red-team: The hypertube already sits in the aeronautics anchor (which is the economy's logistics arm). Adding economy as a 3rd anchor would be redundant — aeronautics already is the economy's logistics arm. → REJECT — aeronautics = economy's logistics arm by definition; adding economy explicitly is not a new anchor.

**Candidate B — Hypertube components as aeronautics-construction inputs (M-24):**
Red-team: The hypertube is a *transit* infrastructure, not an airship drivetrain component. A hypertube entrance contains tubes and kinetics — not bearings, propellers, or control surfaces. The connection would be contrived. → REJECT — wrong use of M-24; hypertube components are not propulsion/control parts.

**Existing connections review:** 2 anchors (Create + aeronautics). Both sound.
OK — connections sound. Already ≥2; the sequenced_assembly inbound weave is good Create spine integration.

---

## craftingtweaks   [anchors: support (QoL) (1)]

LEAVE — crafting-grid button/hotkey overlay; 0 items, 0 blocks. No material surface. Genuine zero-content QoL tool.

---

## incontrol   [anchors: support / server-util (1)]

LEAVE — JSON rule engine for spawn/loot/XP control; 0 items, 0 blocks. No material surface. Its value is as enabling infrastructure for scarcity/spawn tuning (it can support M-02/M-08 by shaping loot regions), but it has no item or method to route. Genuine zero-content config tool.

---

## kubejs   [anchors: support (modpack tooling) (1)]

LEAVE — the scripting backbone itself; 0 blocks, 1 internal item (generated_bucket placeholder). It is the weaving tool, not a weave target. Genuine zero-content from a weave-node perspective.

---

## sparsestructures   [anchors: support (QoL / worldgen-tuning) (1)]

LEAVE — pure config-level structure-spacing patch; 0 items, 0 blocks. No material surface. Genuine zero-content worldgen-tuning utility.

---

## companions   [anchors: survival (1)]

Power-read: Rich content mod — 16 blocks, 81 items. Soul Furnace converts mob-drops/foods/gems to soul-state reagents (Crystallized Blood, soul gems, essences). Boss (Sacred Pontiff) drops Old Cloth + Relic Gold (endgame, rare). Tesla network (Voltaic Pillars/Relays/Coils) is copper-based decorative infrastructure. Its own internal coins (copper/nether/end_coin) are distinct from Numismatics.

The dossier identifies three candidates: magic via M-11/M-02, economy via M-09, Create via M-04.

**Candidate A — Crystallized Blood / soul gems as Occultism/Ars magic reagents (M-11 + M-02):**
- from: companions:crystallized_blood | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood from the Soul Furnace is already "soul-state" material — routing it through Occultism's spirit fire or Ars imbuement makes the alchemy chain flow outward into the magic web rather than circling back into companions alone.

**Candidate B — companions mob drops as magic reagent inputs (M-02):**
- from: companions mob drops (antlion_fur, big_bread equivalent creature drops, essences) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The strange creatures companions spawns leave materials the mages want — their drops become reagents, so killing a Shade Maw isn't just a survival challenge but also a supply run for the magic specialist.

**Candidate C — Relic Gold / soul gems as Numismatics luxury sellables (M-09):**
- from: companions:relic_gold (boss drop) | via: numismatics sell/price | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold from the Sacred Pontiff is exactly the kind of rare boss-won material a trader would pay premium coin for — the fighter who downed the boss turns scarcity into currency.

**Candidate D — Internal coin bridge to Numismatics:**
Red-team: The companions mod ships its own copper/nether/end coins as in-mod currency for its own systems. These are not equivalent to Numismatics cogs/sprockets/crowns — they are different tiers of a different progression. Converting companions coins → Numismatics coin would create an arbitrage path (farm companion monsters → drain Numismatics supply). The two coin systems should be kept separate. → REJECT — 1:1 coin bridge is an arbitrage risk; the two economies should remain distinct (use M-09 via Relic Gold instead, Candidate C).

**Candidate E — Tesla/voltaic deco blocks crushed back to copper scrap (M-04):**
- from: companions:voltaic_pillar_block / companions:tesla_coil_block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: The electrical-pillar and coil blocks are copper-intensive constructions — crushing a salvaged coil back to copper dust and scrap is exactly the Create-recycles-deco logic; the gothic-alchemical aesthetic doesn't clash with industrial salvage.

**Candidate F — Crystallized Blood as a boss-key gate item (M-15):**
Red-team: M-15 is for boss drops gating complex Create/tech recipes. Crystallized Blood is produced by the Soul Furnace from rotten flesh (not a boss drop — it's a common mob drop processed through a machine). Using it as a gate would gate a Create recipe behind grinding common mobs through a Soul Furnace — which contradicts "must stay thematically sensible" (M-15 is for actual boss drops, not craft-farmed items). → REJECT — Crystallized Blood is a processable common material, not a boss-key; M-15 requires an actual boss drop. Use Relic Gold (boss drop, Candidate C) if a gate is wanted.

**Existing connections review:** Single anchor (survival). Candidates A/B add magic, C adds economy, E adds Create — a very well-connected mod with natural multi-system reach.

REWORK: N/A — currently 1 anchor; no existing connections to audit.

---

== CHUNK COMPLETE ==
