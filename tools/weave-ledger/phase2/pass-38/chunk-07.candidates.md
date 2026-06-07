# Phase 2 candidates — chunk-07

## kubejs_create   [anchors: support/tooling (1)]
LEAVE — genuine zero-surface scripting bridge. Registers no items, no blocks, no methods of its own; it is the *instrument* by which Create-recipe weaves are authored, not a weave target itself. Weaving it would mean weaving the authoring tool rather than any game material.

## doubledoors   [anchors: support/QoL (1)]
LEAVE — zero-content behavioral mod. No items, no blocks, no methods; purely toggles adjacent identical doors on interaction. Nothing to route through any method.

## rechiseledcreate   [anchors: Create, decoration (2)]
OK — connections sound. Already holds two anchors: it IS the bridge that gives Rechiseled blocks a Create kinetic method (Mechanical Chisel) and extends the decoration palette. Dossier notes no further coherent anchor.

Candidate review (for completeness):
- from: rechiseled Create-style blocks (andesite/asurine chiseled variants) | via: fxntstorage:backpack_crafting (as decorative liner?) | REJECT | reason: forced/arbitrary — the chiseled-block surface is architectural, not a logistics input; no player story makes the pairing sensible.
- from: rechiseledcreate window blocks (glass-bearing variants) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | REJECT | reason: M-04 allows deco→Create recycling, but window panes return standard glass on crushing already (vanilla path); adding a second crush path from the rechiseled variant is redundant and adds no new cross-system link. Depth not earned here.

## resourcefullib   [anchors: support/library (1)]
LEAVE — genuine zero-content code library. No items, no blocks, no recipe types; pure API/utility for dependent mods. Nothing to weave.

## createimmersivetacz   [anchors: Create (1)]
Single-anchor mod. Proposes economy link in dossier via M-09 (luxury→coin) — but M-09 is **retired**. Needs re-scoping.

- from: createimmersivetacz:twelve_gauge_shell / ammo rounds (mass-produced) | via: emergent player trade (combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a dedicated arms-factory player floods the market with shells; combat players who don't build factories must buy ammo — the classic arms dealer specialization, no NPC required.
- from: createimmersivetacz:gunpowder_bucket (fluid) | via: create:filling | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: gunpowder fluid is already internal to the TACZ ammo pipeline; routing it elsewhere (e.g. as a separate Create fuel) creates arbitrary double-use of a reserved intermediate rather than a genuine new cross-system link. No clear consumer in the method palette.
- from: createimmersivetacz:gun_barrel / firing_mechanism | via: create:sequenced_assembly (already present) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: these parts are already produced through sequenced_assembly — adding that as a separate weave is recording an existing link, not a new one (already the mod's Create anchor).
- from: ammo rounds (bulk output) | via: minecolonies colony supply request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony with a Gunner job (from minecolonies_compatibility) demands a steady ammo supply from the Create factory — the colony route links combat production to settlement, making the gun-factory player a colonial supplier.

REWORK: dossier's M-09 economy candidate — M-09 is retired; the correct reframe is M-34 (combat-route supply) accepted above.

## miningspeedtooltips   [anchors: support/client-UI (1)]
LEAVE — zero-content display-only mod. Reads existing tool attributes and renders a tooltip line; no items, no methods, nothing to route.

## fusion   [anchors: support/client-library (1)]
LEAVE — genuine zero-surface rendering library. Provides connected-texture model types for resource packs; no items, no blocks, no methods. Weaving it is impossible.

## enhancedcelestials   [anchors: survival (1)]
Single-anchor mod with real content (meteor block, space_moss, lunar events as world-state modifiers).

- from: enhancedcelestials:meteor (block, harvestable) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen meteor is processed in the crushing wheel — it yields iron (nickel-iron composition fits the "fallen star" read) + a small xp-nugget byproduct, so meteors become a minor Create feedstock rather than pure decoration. Depth appropriate to an everyday environmental find.
- from: Blood Moon active (world-state event) | via: ritual gating (occultism:ritual) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Occultism rituals require the Blood Moon's heightened spirit-activity; a magic specialist must time their most dangerous summons to the red night — the night's danger pressure feeds directly into the magic production route. Motif M-22 explicitly extends across all EC moon types.
- from: Harvest Moon active (world-state event) | via: config/seasonal reagent gating | to: Create/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: crops that mature under a Harvest Moon yield a bonus output tagged as a seasonal reagent (delivery: config/worldgen event tie, not a recipe); a magic specialist who needs moon-touched grain must time their harvest, creating a seasonal supply-and-demand pulse. M-16 is for Serene Seasons but explicitly covers all season-gated inputs; lunar harvest is a natural extension via M-22.
  — Revised verdict: keep as M-22 (lunar reagent) rather than M-16 (seasonal); the mechanic is moon-event-gated, not Serene-Seasons-gated. ACCEPT under M-22.
- from: enhancedcelestials:space_moss_block (harvestable worldgen) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: space moss — fallen from celestial bodies — is imbueable into a star-touched reagent for Ars rituals; thematically obvious (star-stuff → arcane material) and gives the worldgen block a use beyond decoration.
- from: Blood Moon (hostile-spawn surge) | via: emergent combat-route pressure | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the Blood Moon's spawn surge is pure survival pressure, not a material supply change; M-34 is the supplier side (boss-drop trade), and there's no unique Blood Moon drop that a combat specialist would sell. The loop link (danger → gear demand → producer income) is ambient, not a specific weave. No-motif as a separate edge.

## create_hypertube   [anchors: Create, aeronautics (2)]
OK — connections sound. Already holds Create (kinetic input, sequenced_assembly build) and aeronautics/logistics (player/entity transit). Dossier confirms no further coherent anchor. Reviewing for completeness:

- from: create_hypertube:hypertube_entrance | via: create:sequenced_assembly (already present) | REJECT | reason: existing anchor — not a new weave.
- from: hypertube network as fast-transit for players | via: aeronautics/logistics arm | to: economy | REJECT | reason: the aeronautics anchor already captures this; re-stating it as an economy link is restating the same pillar under a different label. The aeronautics anchor IS the economy logistics arm per SYSTEMS.md.

## fxntstorage   [anchors: Create, survival (2)]
OK — connections sound for 2-anchor status. Create-tier-gated (andesite/copper/brass/hardened, built via create:mechanical_crafting) and survival-inventory QoL. Reviewing for a third:

- from: fxntstorage:backpack_flight_upgrade | via: aeronautics/logistics arm | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the flight upgrade is a personal mobility gadget, not a mechanical component that feeds Aeronautics propulsion/control hardware. M-24 is for drivetrain/control components going into airframe recipes, not wearable flight tools. Tone-clash: equipping a backpack upgrade is not the same loop as building an airship component.
- from: fxntstorage:smart_passer_block / storage_controller (item-routing network) | via: MineColonies colony logistics | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: the colony already has minecolonies_compatibility's citizen_grid storage bridge; adding a second storage-network link via fxntstorage duplicates without a distinct demand signal. The existing anchor covers the ground.

## collective   [anchors: support/library (1)]
LEAVE — genuine zero-content code/event library. Serilum-family utility; no items, no blocks, no methods. Nothing to weave.

## minecolonies_compatibility   [anchors: survival, Create (2)]
OK — connections sound. The mod IS the bridge mod: its entire function is wiring MineColonies workers into Create (Stock Link courier), IE farming (cloche/fertilizer), Farmer's Delight (cutting boards), storage networks. Both anchors are direct and load-bearing.

Reviewing for a third anchor:
- from: minecolonies_compatibility:tacz_dummy_gun (teaches Gunner job) | via: combat-route supply chain | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Gunner hut creates a colony-resident demand for TACZ guns and ammo — a colony builder needs a supply line from the Create arms factory, bridging combat production (createimmersivetacz) to colony economy (M-28/M-34). The dummy-gun item is the colony's training ordnance, making the military logistics link concrete.
- from: minecolonies_compatibility:citizen_terminal / common_network_storage | via: aeronautics cargo runs | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: the storage bridge item itself is not a bulk cargo — it's a block you place, not a good to ship. M-31 is for goods heavy/bulky enough to require aeronautics logistics at scale; a storage controller is a one-time infrastructure install, not a repeating bulk cargo.

## alexsmobs   [anchors: survival (1)]
Single-anchor mod with an enormous drop catalogue (301 items). Strong 2nd-anchor candidates.

- from: alexsmobs:ambergris | via: ars_nouveau:imbuement | to: magic | motif: M-02 + M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris — a rare organic secretion from a sea creature — is imbueable into a magic-grade reagent for Ars Nouveau; whale-derived aromatics as arcane catalysts is a real-world alchemy read and thematically obvious. M-02 (mob-drop reagent sink) + M-10 (arcane infusion pull) compose cleanly.
- from: alexsmobs:ender_residue (dropped by void worm) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: void worm residue — literal end-stuff — is transmuted through spirit-fire into a high-tier Occultism reagent or essence; the Void Worm is endgame-tier by design (flies in the End), so an endgame ritual input is appropriately costed (multi-step chain, not a basic).
- from: alexsmobs:bear_dust | via: create:mixing | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear dust crushed and mixed into a Create-side compound (e.g. a grinding compound or machine lubricant intermediate) — a light one-step processing of a mid-tier wilderness drop, bringing fauna into the tech spine without forcing depth past the drop's power level.
- from: alexsmobs:void_worm_beak (endgame boss drop) | via: create:mechanical_crafting or sequenced_assembly (boss-key gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm's beak is a required material for a high-tier Create machine or Aeronautics component — the combat boss funds the tech ceiling, so the fighter and the engineer are interdependent. M-15 (boss-key unlock) is the load-bearing anti-erosion motif.
- from: alexsmobs:banana (food drop, abundant) | via: farmersdelight:cooking or create:milling | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: bananas are a drop food, already in the survival food web by default; milling banana into flour is a coherent M-12 candidate but adds no cross-system link (survival→Create is already covered by the Create anchor and better instances exist). The drop is everyday-abundant, so depth should be one light step — but Create already has many fruit inputs. Marginal gain; REJECT for now, prefer the rarer/distinctive drops above.
- from: alexsmobs:ambergris | via: create:crushing (as a Create feedstock intermediate) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: ambergris is already being proposed as a magic reagent (ACCEPT above via M-02/M-10); double-spending it as a Create crushing feedstock too dilutes its identity and risks conflicting with the reagent-ownership principle (it would occupy two connective roles simultaneously without a clear primary). Prefer one strong link over two weak ones.
- from: alexsmobs (broad drop catalogue) | via: emergent trade (combat-route supply) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a hunting specialist farms exotic Alex's Mobs drops (ambergris, ender_residue, bear_fur, etc.) and trades them to magic specialists who need them as reagents — a natural M-34 supply-side economy loop. The mob-drop → magic-reagent chain (accepted above) is what gives these drops their economy value; M-34 closes the loop.

## accelerateddecay   [anchors: support/performance (1)]
LEAVE — genuine zero-content performance mod. Replaces leaf-decay ticking with a time-check; no items, no blocks, no methods. Nothing to weave.

## vinery   [anchors: survival (1)]
Single-anchor mod with three registered recipe methods (vinery:apple_fermenting, vinery:apple_mashing, vinery:wine_fermentation) and 168 items including effect-bearing wines.

- from: vinery:apple_mash (intermediate from apple_press) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: apples run through the Create mill yield apple mash that feeds Vinery's press pipeline — a one-step processing pull that ties the apple crop into Create before it hits the fermentation barrel. Everyday cost, one light step, fits M-12's processing-chain-pull.
- from: vinery wine varieties (bottled, effect-bearing) | via: farmersdelight:cooking or extradelight:evaporator (as a reduction/sauce ingredient) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: a wine reduction (apple_cider or table_wine reduced in the Evaporator) becomes a cooking sauce for Farmer's Delight recipes — wine as a culinary ingredient rather than just a drink, extending the food web depth without inventing a new category.
- from: vinery:fermentation_barrel (a maturing method) | via: M-35 maturation aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: wines must ferment for in-world time (Vinery's own aging mechanic — "1 year per ~20 days"), making them a time-locked trade good; a vintner specializes and sells aged wine to players who want the buffed effects but can't wait — the maturation specialist role that M-35 was designed for. This is the cleanest economy weave: value is created by time, not by NPC sale.
- from: grapes / apple_juice (raw fermentable output) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the apple_mash→create:milling link (accepted above) already routes the apple side into Create; adding a second Create processing link (grape juice via create:mixing) in the same chunk is marginal duplication — one processing pull per mod is the right depth at this tier. The milling link is more distinctive. REJECT the mixing grape-juice path to avoid overloading a single mod.
- from: vinery wines (consumption, effect loss over time) | via: M-26 consumption sink | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 (consumption sink) is the correct motif when a good is *spent* against pressure. Wine is consumed and effects expire, so it does close the loop — but "wine is eaten and replaced" is the *ambient* consumption arc already implicit in any food item. M-35 (maturation) accepted above is the more distinctive economy weave for Vinery; M-26 here is redundant alongside it and adds no new system link. REJECT — the maturation angle is stronger.

REWORK: dossier lists M-09 (luxury→coin) as the economy candidate — M-09 is retired. The correct reframe is M-35 (maturation/aging) accepted above, which gives the economy link through time-value rather than NPC sale.

## sablecollisiondamage   [anchors: support/physics (1)]
LEAVE — zero-content physics behavior addon. Hooks Sable's sub-level physics to apply impact damage; no items, no blocks, no recipe types. Nothing to weave. The aeronautics pillar is served, but this is a behavior modifier on an existing mod's physics engine, not a new content surface.

## controlling   [anchors: support/client-UI (1)]
LEAVE — zero-content client UI mod. Adds search/filter to the key-bindings menu; no items, no blocks, no methods. Nothing to route.

## create_cheese   [anchors: Create, survival (2)]
Already ≥2 anchors. The dossier lists M-09 (luxury→coin) as the economy candidate — M-09 is retired. Reviewing for a valid third anchor.

- from: create_cheese named cheeses (matured, effect-bearing) | via: M-35 maturation/aging (create_cheese:maturing method) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese is time-locked behind the Cheese Cellar's calendar-page tiers (300/600/900 ticks); a dairy specialist who builds and stocks the cellar sells aged cheese to players who need the food effects — the same vintner/maturer specialization as M-35. The maturing method is even registered in the pack (create_cheese:maturing). This is a direct, concrete M-35 delivery.
- from: create_cheese:cheese_curds (intermediate, pre-maturing) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cheese curds are a useful cooking intermediate for Farmer's Delight recipes (cheesy dishes, melted components) — extending the dairy chain into the cooked-food web and anchoring curds as an intermediate rather than an end-product. One light step, everyday depth, fits M-12.
- from: create_cheese aged cheese | via: MineColonies colony food request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: a colony requesting aged cheese as a colonist food is coherent but overlaps with M-35's maturation economy link just accepted. M-28 would add the colony-route dimension, but the colony food system is generalized — "colonists eat food" is ambient, not a specific cheese-gating. Prefer M-35 as the load-bearing economy link for this mod; M-28 is borderline here.

REWORK: dossier's M-09 economy candidate → retired; correct reframe is M-35 (maturation) accepted above.

## detect-afk-1.2.2   [anchors: support/server-admin (1)]
LEAVE — zero-content server behavioral utility. AFK-flagging timer; no items, no blocks, no processing. Nothing to weave.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
Already ≥2 anchors (Create-themed worldgen structures + survival/exploration). Reviewing for improvement or new links.

- from: create_ltab structure loot tables | via: loot-seed (economy/magic items seeded into structure chests) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins contain player-minted coin precursors (a scarce alloy ingot or a coin-press die) — the player who discovers and loots the structure gets a head-start on minting, reinforcing the regional-scarcity + exploration incentive without an NPC handing out coins. Via loot-seed (Phase-3 datapack edit to the structure's loot table). M-08 (player-minted currency) is the right motif — the loot seeds the mint feedstock, not a ready-minted coin.
- from: create_ltab structure loot tables | via: loot-seed (magic reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins hold remnants of past industrial-magical experiments — a mob-reagent item (a lost essence vial, a burnt-out source gem fragment) seeded into the structure loot pulls exploration → magic and makes adventuring a magic-supply route. Via: loot-seed.
- from: create_ltab structures (exploration gate) | via: boss-key unlock (structure completion grants a key item) | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: Create-themed ruins don't naturally contain a boss — there's no fight gating the loot, so M-15's "boss drop as gate" doesn't apply cleanly. The loot-seed approach (above) is the right delivery; a boss-key frame forces a combat requirement onto a building-exploration structure. Tone: mild clash with the "adventure/decoration" vibe of the mod.
- from: create_ltab structures (Create-flavored worldgen) | via: worldgen spawn | to: scarcity-foundation | REJECT | reason: the scarcity anchor is not a taggable system label (it's the foundation, not an anchor a mod can weave to directly). Structures add to the exploration surface but don't anchor to a specific loop node beyond what Create + survival already covers.

== CHUNK COMPLETE ==
