# Phase 2 candidates — chunk-13

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation-API library (0 items, 0 blocks, 0 loot, no recipe methods); no game surface to weave. Serves dependent combat/magic/emote mods silently.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop, spider-cave biome) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: spider venom as a ritual ingredient — the dungeon pays a magic specialist's supply line with its unique mob drop
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: prefer the Occultism spirit_fire route — the spider-cave vibe (dark, poisonous) maps better to Occultism's spirit-reagent system than to Ars's luminous imbuement aesthetic; one route is enough to establish the link; dual-routing the same drop dilutes its scarcity value
- from: undergroundworlds dungeon chests (Jungle Temple / Pyramid / Ice Dungeon / Abyssal Ruins) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: dungeon chests seed biome-thematic magic reagents (e.g. a raw occult essence or source fragment per biome type), making underground exploration a supply route for magic specialists; player who fights to the chest earns the reagent — combines with M-34 (combat-route supply) implicitly
- from: undergroundworlds:temple_bricks / pyramid_bricks / ice_bricks (deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier correctly flags this WEAK — nobody collects dungeon deco at crushing scale; the M-04 edge adds almost nothing to the loop compared to the organic mob-drop/loot route above; not worth the recipe noise

## ctl   [anchors: create, aeronautics (2)]
- REWORK check: create:sequenced_assembly inbound (Create anchor) + train/contraption lighting (aeronautics anchor) — OK. Both connections are tight and thematic; the mod's entire purpose is train-cab and locomotive lighting, which is exactly the aeronautics/logistics transport arm. No mis-costing or arbitrary link.
- from: ctl:htlb_block / ctl:ilb_block | via: survival — danger signal | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: lighting as danger mitigation is ambiance not a demand-generating pressure link; no motif covers this generically.
- from: ctl locometal deco palette | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mod already has 2 anchors and is deeply woven into Create; M-04 crushing-back on its deco adds loop noise with no new system crossed.
- OK — connections sound (Create + aeronautics; no weak or arbitrary edges).

## railways   [anchors: create, aeronautics (2)]
- REWORK check: `create:mechanical_crafting` + `create:sequenced_assembly` inbound (Create anchor) + extends Create train/logistics system (aeronautics anchor) — OK. Create-native from the ground up; its entire value is enriching the logistics transport arm.
- from: railways:locometal palette blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: locometal is a surface-dressing deco palette, not a structural alloy; crushing it back adds loop noise with no new system reached; mod already at 2 anchors.
- from: railways conductor entity (toolbox carrier + remote operator) | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: the conductor as a logistics-service role is real emergent gameplay but there is no recipe or config delivery to author in Phase 3 — it's a social play-pattern that emerges from having the mod, not a weave action. Recording as rejected to flag the gap.
- OK — connections sound (Create + aeronautics; conductor-as-service is emergent not authored).

## lootr   [anchors: support/QoL (1)]
- LEAVE — per-player loot instancing is a fairness wrapper over existing loot tables; no material outputs, no recipe methods, no unique drops of its own. Its `lootr:trophy` block is a reskin placeholder, not a weave target. No coherent second anchor — the QoL role is complete as-is.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (raw grain) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create miller grinds the farmstead's grain surplus into flour — the husbandry chain meets the tech spine at the millstone
- from: farm_and_charm:barley (malt base) | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling (as alternate grain input) | to: economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: barley processed into malt feeds the brewing/distilling chain (M-35 maturation goods), making the farm a raw-material supplier for the economy's aged-goods tier
- from: farm_and_charm animal products (eggs, butter, ground meat) | via: minecolonies provisioning / colony food-request system | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony's workers demand farm provisions — husbandry output gates colony upkeep and growth, making the farmer indispensable to the settlement builder
- from: farm_and_charm:barley / farm_and_charm:oat (season-gated crop) | via: config-tie (Serene Seasons crop growth gate) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat only ripen in growing season — winter stops the flour supply, and with it the baking and brewing chains; seasons are the throttle on the whole food-production tier
- from: farm_and_charm processed foods (bread, butter, pasta) | via: MineColonies composting / zero_waste | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: farm waste → compost is ambient and too low-signal; M-32 (byproduct→input) is better served by more distinctive process chains; not worth adding here when M-12/M-16/M-28 already cover the meaningful weaves
- REWORK: dossier candidate "economy via numismatics — M-09" is correctly retired. The M-28 colony provisioning and M-12 Create milling are the demand-gating replacements that actually advance the loop. No other existing connections to rework (mod had 0 inbound weaves before this pass).

## bakery   [anchors: survival (1)]
- from: bakery:flour (wheat-ground) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: baking-grade flour flows from a Create Millstone — the artisan kitchen draws its staple input from the tech spine, not just a crafting table
- from: bakery high-satiation baked goods (cakes, tarts, pies) | via: minecolonies colony food-request / tavern hut provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's tavern demands artisan baked goods — the bakery becomes a specialized supplier whose cakes keep the settlement fed and growing
- from: bakery fruit-based goods (strawberry cake, apple pie, glowberry tart) | via: Serene Seasons season gate on fruit inputs | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: fruit-season opens the luxury-cake window; off-season the bakery can only make breads — seasons throttle the premium food tier, creating temporal demand spikes
- from: bakery deco blocks (cake_stand, bread_crate, bakery_counter) | via: minecolonies colony hut furnishing | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: double-counting M-28 via a furnishing route when food-provisioning is the cleaner, more impactful M-28 link; deco-as-colony-demand is too diffuse to be a tight weave
- from: bakery:bread / bakery:baguette | via: create:milling (as bread-crumb crush-back) | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: bread crushing back to crumbs is a real culinary step but M-04 is for deco/metal blocks, not food; the tone is wrong and there's no M-04-style "recycle" value here; food already has consumption via M-26
- REWORK: dossier candidate "economy via numismatics — M-09" is retired; replaced by M-28 colony provisioning above. "Create via create:milling — M-12" in dossier is ACCEPT (confirmed). "magic via Ars Vitalic/Agronomic Sourcelink" — WEAK in dossier, remains rejected (better owned by grain/crop mods).

## endermoon   [anchors: survival (1)]
- from: Ender Moon spawn surge → ender pearl flood | via: lunar event gating (M-22) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: endermoon has 0 items, 0 loot, no recipe method — it is a spawn-rate plugin for enhancedcelestials. Any M-22 weave (Ender Moon night → ender pearl → Occultism/Ars ritual input) must be authored against `enhancedcelestials` or vanilla ender pearls, not against endermoon itself. Recording here to flag: the M-22 ender-pearl link is real but belongs on enhancedcelestials's dossier as the event-system owner.
- LEAVE — zero content surface; all lunar-event weave potential sits on the parent enhancedcelestials mod.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: dendro_potion is a DT-internal growth catalyst — forcing it into arcane infusion makes it a magic ingredient for its own effect, which is circular and contrived; the potion already has a clear functional identity and doesn't need a magic repurposing
- from: dynamictrees:branch (loose branch item) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT branches are just loose log fragments; milling them is functionally the same as milling any vanilla log — no distinct weave value added; DT's output already joins the vanilla wood chain downstream
- LEAVE — DT outputs ordinary logs/wood that flow into Create/cooking chains automatically; its seed-conversion recipes are sapling-swap utilities only. No unique material warrants a dedicated weave. The dossier's leave verdict is confirmed.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/ballistics API library (0 items, 0 blocks, 0 loot, no recipe methods); hard dependency of Create Big Cannons, no independent content surface. Indirectly serves the aeronautics/Create combat arm via Big Cannons, but there is nothing to weave here.

## resourcefullib   [anchors: support/library (1)]
- LEAVE — pure utility/API code library (0 items, 0 blocks, 0 loot, no recipe methods); transitively pulled as a dependency of Resourceful-family mods. No game surface whatsoever.

## better_climbing   [anchors: support/QoL (1)]
- LEAVE — client-side climbing-physics tweak (no items, no blocks, no loot, no recipe methods). Pure movement feel improvement; nothing to route or weave.

## tacz   [anchors: support/combat-flavour (1)]
- from: gun components (barrel, receiver, stock) | via: tacz:gun_smith_table_crafting with Create-processed inputs (create:pressing → iron_sheet, create:mechanical_crafting → machined casing) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a gun is precision manufacture — it takes a Create specialist's machined parts to feed the gunsmith's table; firearms slot into the industrial production web
- from: high-tier firearm assembly | via: create:sequenced_assembly (derpack:incomplete_firearm_receiver → multi-stage deploying/cutting chain → gun_smith_table final assembly) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the finest rifle in the pack needs a full precision-manufacturing chain through Create before the gunsmith can finish it — depth equal to the weapon's power
- from: tacz:ammo (brass/copper casings + gunpowder) | via: GTMOGS regional ore-gen (copper/brass region-locked) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammunition is only as available as the copper your region holds — soldiers in copper-poor lands must trade or travel; the ammo supply chain is region-locked from the ore up
- from: tacz:ammo (consumed on every shot) | via: combat consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: every firefight drains the stockpile — ammo is a recurring consumption sink that pulls continuously on the Create-metalwork production chain
- from: guns / ammo as war materiel | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Create-specialist arms dealer sells to the fighter who can't spend time at the assembly line — guns and ammo are the combat-supply axis of the player economy
- from: tacz:m67 (grenade) | via: createbigcannons munition methods (conceptual) | to: create | motif: M-29 | power: mid | tone: clash | verdict: REJECT | reason: TACZ grenades and CBC munitions are parallel independent systems; CBC has its own cartridge/fuze methods; forcing cross-dependency between two weapon systems adds complexity without a coherent demand link; the tone is "two weapon standards coexisting," not "one needs the other"
- REWORK: dossier listed "aeronautics — mountable weapons" as WEAK; correct to reject — TACZ doesn't integrate with Aeronautics natively, and aeronauticscompat covers other turret mods only. No new rework needed on that.

## modernfix   [anchors: support/performance (1)]
- LEAVE — JVM/loader-level performance mod (no items, no blocks, no loot, no recipe methods). Purely reduces boot time and RAM use; no game surface to weave.

## dndesires   [anchors: create (1)]
- from: farm crops / mob drops | via: dndesires:freezing fan / dndesires:seething fan (bulk food prep / preservation step) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the farmstead's grain and meat pass through a Create fan on the way to the kitchen — industrial-scale food processing routes survival output through the tech spine's fan methods
- from: dndesires:rubber (Hydraulic Press output: sap + water → raw rubber) | via: aeronautics engine/airframe recipe (rubber gasket as a required drivetrain component) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: an airship engine needs rubber seals and flexible joints — the Hydraulic Press feeds the aeronautics drivetrain supply line with its industrial intermediate
- from: dndesires:cardboard_package_* | via: aeronautics cargo-packaging (require packaging for bulk cargo manifest) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: mechanism pending — no implemented cargo-packaging mechanic exists in the pack to make packaging mandatory for cargo transport; the idea is coherent but needs a Phase-3 mechanic first, not a recipe
- from: dndesires milkshake foods | via: diet consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: ambient food→diet loop; every food item is M-26 by default; not a dedicated weave — the survival link comes from being a food, not from a designed demand-gate
- REWORK: dossier candidate "aeronautics via cardboard + bore blocks as logistics/ship parts — M-06/M-05, WEAK-MED" — the cardboard packaging angle is rejected (mechanism pending above); the bore block as a ship-hull structural piece could be M-23 but bore blocks are aesthetic/decorative industrial panels, not structural alloy — REJECT that sub-angle too. Dossier's "economy via rubber — M-08, WEAK" is correctly weak: rubber as a coin-minted-from-scarcity good requires it to be the scarce regional input routed through minting, but rubber is synthetically produced by the Press (not ore-scarce); REJECT. Dossier's survival/milkshake suggestion confirmed REJECT above.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client texture-feature engine (no items, no blocks, no loot, no recipe methods). Enables OptiFine-format entity textures for resourcepacks; pure visual support, nothing to weave.

## necronomicon   [anchors: support/library (1)]
- LEAVE — pure config/registry/worldgen helper API library (0 items, 0 blocks, 0 loot, no recipe methods). Pulled only as a dependency of opacpvp; no game surface whatsoever.

## gtmogs   [anchors: survival, economy (2)]
- REWORK check: survival anchor (regional depth-gated vein exploration) + economy anchor (scarce metals underpin the trade economy) — both sound. Gtmogs is the scarcity *foundation* — it enables M-03/M-08/M-30 in other mods rather than needing its own weaves. No weak or arbitrary edges to flag.
- from: gtmogs regional vein config | via: GTMOGS vein authoring (KubeJS) — scarcity → magic-metal veins | to: magic | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: if magic-relevant metals (e.g. silver for Occultism, amethyst-cluster veins for Ars) are vein-configured as region-locked, the magic production route has a scarcity input that must be traded — the loop from scarcity to magic production is explicit, not assumed
- from: gtmogs overworld/nether/end marker blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: the 3 marker items are functional config anchors, not building materials; crushing them would be nonsensical (they're worldgen metadata objects, not deco blocks)
- OK — core connections sound; the magic-metal vein M-30 note above is an authoring-level reminder for the GTMOGS vein config design, not a new recipe weave.
















