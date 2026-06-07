# Phase 2 candidates — chunk-15

## knightlib   [anchors: support/library (1)]
- LEAVE — pure library; content items (great_chalice, grails, essences, homunculus) are dormant without Knight Quest, which is not in this pack. No routable material surface. If Knight Quest is ever added, knightlib:great_essence would be a natural M-02 mob-drop reagent sink.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already at 2-anchor goal: lamps are built via create:sequenced_assembly (Create anchor) and their only purpose is train/contraption lighting (aeronautics anchor). No forced third edge warranted.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / tfmg:gasoline / tfmg:lpg (Distillation Tower outputs) | via: aeronautics engine intake (M-13 fuel → propulsion) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's Distillation Tower is the only way to refine crude oil into the ship fuel that keeps your airship aloft — you can't fly without an oil derrick
- from: tfmg:steel_ingot (Industrial Blast Furnace output) | via: aeronautics construction recipe (M-23 structural alloy → airframe) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate/beam is the load-bearing frame material for armored airship hulls — a wooden frame won't hold cannon recoil
- from: tfmg:aluminum_ingot (Blast Furnace output) | via: aeronautics drivetrain / control recipe (M-24 mechanical component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: lightweight aluminum goes into propeller hubs and control surface brackets — the reason planes stay maneuverable
- from: tfmg:diesel / tfmg:gasoline | via: numismatics sell (M-08 coin from processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; fuel trivially sellable but not a structural economy loop-closer
- REWORK: existing anchor is Create-only (1 pillar). The three aeronautics ACCEPT edges above raise it to Create + aeronautics (2 pillars). No existing connections flagged as arbitrary — just incomplete.

## foodeffecttooltips   [anchors: support/client QoL (1)]
- LEAVE — pure client tooltip renderer; no items, blocks, or methods. Sanctioned support role; nothing to weave.

## dtterralith   [anchors: survival/worldgen (1)]
- from: dtterralith sapling/seed species (e.g. dtterralith:maple_seed, dtterralith:cedar_seed) | via: create:milling (sawdust/pulp byproduct from exotic species, M-12 processing-chain pull) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: dynamic-tree seeds/saplings yield standard logs on harvest — the vanilla-wood path already reaches Create/cooking; adding a per-species milling edge adds no structural value, just recipe noise. The compat mod's purpose is aesthetic worldgen, not a material source.
- LEAVE — worldgen compatibility bridge; its log/sapling output is already in the vanilla wood pool that other mods process. No bespoke weave warranted.

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / cookingforblockheads:fridge (flagshipappliance blocks) | via: create:mechanical_crafting gating on Create brass/copper sheets (M-05 native-method gating) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a real kitchen upgrade — precision-machined brass hinges and a copper coil in the fridge mean you actually built the kitchen, not just slapped planks together
- from: cookingforblockheads:cooking_table / cookingforblockheads:sink | via: create:mechanical_crafting (M-05, same tier as oven/fridge) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: cooking_table and sink are entry-level appliances; gating basics behind Create crafting violates the hard guardrail (never gate basic/everyday components behind complex recipes). Gate the oven + fridge (mid-tier appliances); leave table and sink at vanilla crafting depth.
- from: cookingforblockheads outputs (finished meals) | via: numismatics sell as luxury food (M-09) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The food mods it aggregates already carry M-09; a second entry for the kitchen hub is redundant signal.

## towntalk   [anchors: support/flavor (1)]
- LEAVE — no items, blocks, or methods; purely cosmetic colonist audio riding on MineColonies. The structural MineColonies weave lives in the minecolonies dossier, not here.

## detect-afk-1.2.2   [anchors: support/server-admin (1)]
- LEAVE — no items, blocks, or methods; behavioral AFK-detection utility with no material surface.

## quark   [anchors: support/decoration/QoL (1)]
- from: quark decorative/building blocks (vertical slabs, polished stone variants, hedges, wood posts) | via: create:crushing (deco-recycle M-04, lossy → gravel/sand + xp nugget) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: those leftover quark stone bricks from a build don't go to waste — crush them back to gravel and a flicker of XP, same as any workshop scrap
- from: quark:apple_crate / carrot_crate / potato_crate (c:storage_blocks/* tags — bulk crop storage) | via: create:milling or create:crushing as a compressed-crop input for processing chains (M-12) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: crates are storage wrappers, not a distinct material — the underlying crop already enters Create milling without this indirection. Crate→uncrate→mill is extra steps with no added value; the link is mechanical rather than thematic.

## creativecore   [anchors: support/library (1)]
- LEAVE — pure developer library; no items, blocks, methods, or gameplay surface. Sanctioned support role.

## owo   [anchors: support/library (1)]
- LEAVE — pure developer library; no items, blocks, methods, or gameplay surface. Sanctioned support role.

## drones   [anchors: aeronautics (1)]
- from: drones:iron_rotor / drones:ion_thruster (thrust components) | via: create:sequenced_assembly gating on precision mechanisms / brass casings (M-06 sequenced-assembly keystone for the ion thruster; M-05 native-method gating for the iron rotor) | to: Create | motif: M-06 | power: mid (ion_thruster) / everyday (iron_rotor) | tone: ok | verdict: ACCEPT | hook: the ion thruster isn't hammered together — it takes a sequenced precision assembly run: the difference between a toy copter and a drone that actually works
- from: drones:wood_rotor (entry-level thrust) | via: create:mechanical_crafting (M-05 light, one step) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: even the simplest rotor needs a shaft and a cog blank milled to shape — pure hand-craft doesn't balance a spinning blade
- from: drones:pocket_drone (assembled drone gadget) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. A crafted gadget is trivially sellable; this adds no structural loop closure.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — no items, blocks, or methods; mutual-consent PvP toggle serving the cooperative premise. No material surface to weave.

## mutantszombies   [anchors: survival (1)]
- LEAVE — hostile-mob variants with no item drops (loot=no; only spawn eggs registered). No material to route; forcing an edge would be the exact failure mode the briefing warns against. Purely raises night-threat baseline in the survival pressure pillar.
- Note for future: if the mod adds unique drops (mutant flesh, crawler venom gland, etc.), revisit M-02 (mob-drop reagent sink → magic) and M-14 (bounty board → coin).

## configuration   [anchors: support/library (1)]
- LEAVE — pure config-screen library; no items, blocks, or methods. Sanctioned support role.

## sounds   [anchors: support/client-polish (1)]
- LEAVE — client-only SFX overhaul; no items, blocks, methods, or material surface. Sanctioned support role.

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / naturalist:bushmeat (farmable meat drops from deer/boar) | via: farmersdelight:cooking or create:mixing → processed meat dish entering the food chain (M-12 processing-chain pull) | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw bushmeat in the mixing vat with herbs and lard becomes a proper preserve — the same food chain that handles your carrots handles your hunt
- from: naturalist:antler (unique bone-analog drop) | via: ars_nouveau:imbuement as a magic reagent input (M-10 arcane infusion pull) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: an antler carries the memory of seasonal growth — the imbuement apparatus draws on that latent vitality, making it a catalyst for growth/nature spells rather than a throwaway bone substitute
- from: naturalist:glow_goop (firefly drop, a bioluminescent fluid) | via: ars_nouveau:imbuement or occultism:spirit_fire as a light/lux reagent (M-10 / M-11) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: firefly glow is already pure ambient magic — distilling glow goop through the apparatus concentrates that light into a usable illumination source reagent
- from: naturalist shellstone/froglass deco blocks | via: create:crushing (M-04 deco-recycle, lossy → sand/gravel + xp nugget) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: froglass and shellstone are atmospheric deco that players place and keep; recycling them via crusher is functional but the thematic pairing is weak (glass deco → gravel is not a natural "of course" moment). The survival-food and magic paths above are stronger second anchors; this would be a third-anchor bonus edge of low signal. Defer.
- from: naturalist:venison / naturalist:bushmeat (as cooked luxury foods) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Meat is trivially sellable. The M-12 food-chain ACCEPT is the more structural tie.
- REWORK: existing anchor is survival-only (1 pillar). The M-12 + M-10 ACCEPTs above add Create (via food processing) and magic (via antler/glow_goop imbuement), raising naturalist to survival + Create + magic (3 pillars). No existing connections are arbitrary — the dossier's existing candidates were sound, just not accepted yet.

## fxntstorage   [anchors: Create, survival (2)]
- OK — connections sound. Already at 2-anchor goal: tier-gated via create:mechanical_crafting (Create) and the storage/backpack functionality serves survival inventory management. The flight backpack upgrade touches aeronautics aesthetically but is a worn gadget with no wireable resource path — not a structural aeronautics weave.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid QoL buttons with no items, blocks, or methods. Sanctioned support role.

## startuptime   [anchors: support/diagnostic (1)]
- LEAVE — startup-time logger; no items, blocks, methods, or gameplay surface. Sanctioned support role.

== CHUNK COMPLETE ==
