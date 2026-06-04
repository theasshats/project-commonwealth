# Phase 2 candidates — chunk-08

## undergroundworlds   [anchors: survival (1)]

**Method-pull analysis:**
- Outputs: `undergroundworlds:spider_fang` (Black Recluse mob drop), themed charms/weapons (desert_charm, antidote_flask), temple/pyramid/ice brick deco blocks, quicksand, icicle.
- Methods that want mob drops: `occultism:spirit_fire` (ritual sink), `occultism:ritual`, `ars_nouveau:imbuement` (arcane infusion).
- Methods that want deco bricks: `create:crushing` (recycle back to raw).
- Methods that want organic/flora: `ars_nouveau:imbuement`, `farmersdelight:cutting`, `create:milling`.

**Power-read:**
- `spider_fang`: mid-tier mob drop (requires finding spider cave biome, defeating Black Recluse). Not basic/everyday — specific to the mod's dungeon biomes.
- Temple/pyramid bricks: deco/structural, readily obtainable once dungeon found. Everyday tier.
- Desert Charm / Antidote Flask: mid-tier utility items, Curios slot.

**Candidates:**

- from: undergroundworlds:spider_fang | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Spider Fang from the underground arachnid cave is transmuted in spirit-fire into an occult essence — the spider's venom-soul feeds the ritual web.

- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Spirit-fire (M-11) is already the cleaner path for a raw mob drop; routing the same material through both spirit_fire AND imbuement is redundant double-spend — one magic sink is sufficient for this tier of drop.

- from: undergroundworlds:temple_bricks / pyramid_bricks (deco block set) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Dungeon-raided temple bricks run through a Millstone or Crushing Wheel to reclaim stone dust and a sliver of XP — the ruins feed the factory, closing a loop between exploration and the Create web.

- from: undergroundworlds:antidote_flask / desert_charm | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: These items are already finished utility (status-immunity charms); consuming them as magic reagents destroys their function without adding depth. Their value is the effect they provide, not their material identity. Forcing them into a magic method feels arbitrary.

- from: undergroundworlds:icicle | via: dndesires:freezing or create_dragons_plus:freezing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: icicle is a cosmetic/deco block, not a meaningful processing input; routing it through freezing methods provides no coherent player-facing value — "freeze the icicle" reads as absurd rather than emergent.

---

## dndesires   [anchors: Create (1, deep)]

**Method-pull analysis:**
- dndesires is primarily a *target* (its methods are consumer methods), not a material producer.
- Outputs: rubber (from hydraulic press), milkshakes (food items), asphalt/breccia palette blocks, cardboard packages, processed intermediates.
- Methods that want food: `farmersdelight:cooking`, `minecolonies:composting`, economy (M-09 luxury good).
- Methods that want rubber: `create:mechanical_crafting` (belts/gaskets), possible aeronautics ship component.
- Methods that want packaging: aeronautics logistics / MineColonies supply chains.
- dndesires' own methods (freezing, seething, sanding, hydraulic_compacting, dragon_breathing) ARE the weaving surface — foreign mods route through them.

**Power-read:**
- Milkshakes: mid/everyday food with flavor variety (chocolate, glowberry flavors visible in block list). Accessible.
- Rubber: mid-tier industrial intermediate; gated on rubber sapling + sap + hydraulic press.
- Cardboard packages: logistics, everyday once the press is running.
- Asphalt: late-game deco/infrastructure (road surfaces for airship bases/towns).

**Candidates:**

- from: dndesires:chocolate_milkshake / glowberry_milkshake (food outputs) | via: numismatics sell (M-09 luxury good) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A milkshake mixed by the hydraulic press with a rubber seal-tight bottle is a premium trade good — the Create factory produces a luxury that players can sell for coin, threading the food output into the economy pillar.

- from: dndesires:rubber (hydraulic press output) | via: create:mechanical_crafting (belt/gasket ingredient) | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: dndesires is already anchored at Create (deep). Routing rubber back through create:mechanical_crafting keeps it within the same pillar — this is an intra-Create depth move, not a 2nd-pillar gain. Doesn't add a new anchor.

- from: dndesires:rubber | via: aeronautics ship component (Create Aeronautics sealing/gasket part) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: M-13 is specifically "fuel → propulsion engine intake" — rubber as a structural ship part is thematically adjacent but doesn't match the motif's method (fuel intake). No clean motif covers "structural material → ship construction" currently; this would need a Gate-0 new motif. Tag as no-motif → REJECT-for-review rather than force.

- from: dndesires:asphalt (road surface block) | via: minecolonies build supply | to: survival/economy | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies road-builders demand asphalt for colony roads and runways — the Create press churns out road material that fuels the colony's expansion, linking the industrial machine to the settlement pillar.

- from: dndesires milkshake foods | via: farm_and_charm:stove / extradelight:oven (warming/serving) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milkshakes are cold drinks — routing them through a stove or oven is tonally wrong (heating a milkshake). The processing-chain logic is incoherent here.

- from: dndesires:cardboard_package_* | via: aeronautics logistics (ship manifest / cargo) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: cardboard packages as ship-cargo containers are thematically logical but there is no motif that covers packaging → aeronautics logistics; M-05/M-06 are about gating machine construction, not cargo packaging. No-motif → reject-for-review.

== CHUNK COMPLETE ==
