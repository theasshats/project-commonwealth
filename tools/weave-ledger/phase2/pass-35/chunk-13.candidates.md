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





