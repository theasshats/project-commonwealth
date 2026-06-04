# Phase 2 candidates — chunk-35

## kambrik   [anchors: library/API (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Pure Kotlin dev-framework dependency; no gameplay method, material, or loot table to weave through.

## dynamictreesplus   [anchors: survival/worldgen (1)]
<!-- existing connections: none; 1-pillar candidate -->
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit milled into cactus pulp / green dye intermediate — foraged desert yield becomes a Create feedstock, tying the biome layer into the spine.
- from: dynamictreesplus:red_mushroom_cap / brown_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps milled into mushroom powder / red/brown dye — bulk forest forage feeding Create's mixing palette.
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: saguaro fruit is common ambient forage; pricing it as a luxury trade good undersells M-09 (designed for high-effort consumables). Better as a processing input (accepted above) than a direct sell good. If a processed intermediate emerges from M-12 it could chain into M-09, but the raw fruit alone is too cheap.
- from: dynamictreesplus:mushroom_branch / cactus_branch | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for deco blocks crushing back to raw/gravel; woody mushroom branches aren't decorative blocks in that sense. M-12 via milling is already accepted for the cap outputs — branches as a separate crushing entry adds noise without a distinct payoff.

## illagerinvasion   [anchors: survival (1)]
<!-- existing connections: none; 1-pillar candidate -->
- from: illagerinvasion:hallowed_gem | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's prized gem, steeped in arcane imbuement, catalyzes an Ars Nouveau enchantment amplification — the boss's relic feeds the magic pillar, making the raid's hardest fight matter to spellcasters.
- from: illagerinvasion:illusionary_dust | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust — harvested from a trick-caster illager — is transmuted in an Occultism ritual into an illusion spirit essence; the mob's ability becomes a magic ingredient, not a dead drop.
- from: illagerinvasion:hallowed_gem | via: boss-key (M-15 gating) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Hallowed Gem as a required component in a high-tier Create mechanical-crafting recipe (e.g. a precision gear or arcane governor), placing the Invoker boss on the Create tech path. Thematically plausible — "hallowed" suggests a refined/blessed material, suitable as a rare precision component.
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum chunk crushed to platinum dust + small silver byproduct — drops a boss-adjacent ore into the Create ore-doubling chain; mid-power fits the rarity of the source mob.
- from: illagerinvasion:platinum_chunk | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk is a mob drop, not a mined/processed ore — M-08 is specifically "scarce regional metal → Create-processed → minted." The accepted M-03 crush candidate could later feed M-08, but the raw drop alone doesn't fit M-08's method-routing cleanly. Flag for reconsideration if M-03 acceptance creates a platinum ingot intermediate.
- from: illagerinvasion:lost_candle | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the Lost Candle — an illager relic of doomed flame — passed through Create's haunting (soul-fire) ritual to yield a soulfire wax or spirit-infused candle component; cursed-object vibe maps naturally to the soul-fire process.

## moonlight   [anchors: library/API (1)]
- LEAVE — zero meaningful content surface: 1 internal block (spawn_box), 2 internal items, loot=no. The data-driven-trade and virtual-fluid APIs it exposes are exercised by its dependent mods (e.g. Supplementaries), not weaveable at the moonlight namespace level. Nothing to route through a method.

## geckolib   [anchors: library/API (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Pure animation/rendering engine; no material, method, or loot to weave.

## cloth_config   [anchors: library/API (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Config-screen UI library; no gameplay surface.

## xaerominimap   [anchors: client QoL/support (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Client-only minimap rendering; no items, loot, or method hooks.

## inventoryprofilesnext   [anchors: client QoL/support (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Client-only inventory sort/move UI; no items, loot, or method hooks.

## coroutil   [anchors: library/API (1)]
- LEAVE — zero content surface: 0 blocks, 0 items, loot=no. Pure shared-AI/config/rendering library for Corosus-family mods; no gameplay surface.


