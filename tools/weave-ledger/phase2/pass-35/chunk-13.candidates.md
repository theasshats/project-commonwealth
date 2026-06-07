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

## endermoon   [anchors: survival (1)]
- from: Ender Moon spawn surge → ender pearl flood | via: lunar event gating (M-22) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: REJECT | reason: endermoon has 0 items, 0 loot, no recipe method — it is a spawn-rate plugin for enhancedcelestials. Any M-22 weave (Ender Moon night → ender pearl → Occultism/Ars ritual input) must be authored against `enhancedcelestials` or vanilla ender pearls, not against endermoon itself. Recording here to flag: the M-22 ender-pearl link is real but belongs on enhancedcelestials's dossier as the event-system owner.
- LEAVE — zero content surface; all lunar-event weave potential sits on the parent enhancedcelestials mod.






