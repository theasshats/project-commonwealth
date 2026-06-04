# Phase 2 candidates — chunk-31

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (0 blocks, 0 items, loot=no); no player-facing surface to weave. Sanctioned support role.

## createmetalwork   [anchors: Create (1)]
- from: crushed modded ores (c:crushed_raw_materials/*) → processed ingots | via: recipe (create:crushing → create:mixing → numismatics mint) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: every scarce regional metal flows through molten-cast before hitting the coin press — the ore belt and the mint are one pipeline
- from: magic-mod ores (occultism silver, galosphere palladium) | via: recipe (create:crushing → createmetalwork molten pipeline) | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: the alchemical metals double in the foundry just like iron does — Create doesn't play favourites
- from: createmetalwork:molten_steel_bucket (liquid steel) | via: recipe (create:mixing → aeronautics structural plate) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't bolt an airframe together from raw iron — you smelt it into steel plate first
- from: createmetalwork:molten_brass_bucket | via: recipe (create:compacting → aeronautics control-surface fitting) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the brass gearings that steer the ship are cast in the same molten pipeline as the hull
- from: crushed forms of common metals | via: recipe (create:crushing byproduct → occultism:spirit_fire reagent input) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: occultism spirit_fire consumes organic/soul items as its native material; crushed metal as a spirit-fire input is thematically forced and crosses into reagent-territory that has its own ownership path via spirit_solution

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — zero-content client tooltip tweak (0 blocks, 0 items, loot=no); no surface to weave.

## xaerominimap   [anchors: support/navigation (1)]
- LEAVE — zero-content client minimap (0 blocks, 0 items, loot=no); pure rendering/UI layer.

## create_ultimate_factory   [anchors: Create (1)]
- from: coal-block compacting to diamond pathway | via: recipe (create:compacting — already defined by the mod) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: the mod's diamond recipe is a renewable Create-depth loop, not a scarcity-metal pipeline; treating synthetic diamonds as mint feedstock undermines the intended scarcity premise of M-08 (M-08 is reserved for *scarce regional metals*, not synthesized vanilla gems). Deepens Create pillar only; no coherent 2nd-pillar bridge.
- from: blaze-rod output (blaze powder compacting path) | via: loot-seed / recipe into magic | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the mod itself outputs vanilla blaze rods/powder via Create compacting — routing those onward into Ars imbuement is plausible but the connection is to the downstream blaze rod, not to anything create_ultimate_factory specifically contributes; the weave would belong on the blaze rod itself, not this mod. No unique surface to anchor to.
- LEAVE — pure recipe datapack (0 blocks, 0 items, loot=no); deepens Create pillar internally but has no distinct material surface to anchor a 2nd-pillar weave onto. Both candidate paths rejected (above).

## openpartiesandclaims   [anchors: support/server-protection (1)]
- LEAVE — zero-content protection framework (0 blocks, 0 items, loot=no); no player-facing materials or methods.

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / naturalist:bushmeat (cooked) | via: trade (numismatics sell — butcher-type price) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: hunters sell wild game at the market; venison fetches a coin or two from any player who can't farm it
- from: naturalist:glow_goop (firefly drop) | via: recipe (ars_nouveau:imbuement as a light-reagent catalyst) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: the bioluminescent slime a firefly leaves behind is exactly what an arcane infusion circle wants for a light-school glyph
- from: naturalist:antler | via: recipe (occultism:spirit_fire — bone-keratin analog burns into a spirit compound) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a stag's shed antler holds latent life-force; the spirit flame renders it into raw essence
- from: naturalist:venison + naturalist:bushmeat | via: recipe (farmersdelight:cutting / cooking → food chain) | to: Create (M-12 food processing) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wild game goes from carcass to plate through the same kitchen tools as farmed meat — Farmer's Delight's cutting board processes venison into stew cuts
- from: naturalist:shellstone blocks | via: recipe (create:crushing → gravel/sand + xp nugget, lossy) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: shellstone is a decorative stone set with a naturalistic vibe; crushing it back to generic sand/gravel has zero thematic pull for a player ("why would I crush the pretty beach stone?"). The link is mechanical-valid but thematically arbitrary — fails the player-nod test.
- from: naturalist:glow_goop | via: loot-seed (seeded into naturalist loot tables as a drop) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: glow_goop already drops directly from fireflies via mob death — it IS a mob-drop reagent natively. The M-02 action (loot-table seeding) is redundant; the drop is already present. The ACCEPT path above (M-10 imbuement consumer) is the right capture.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — zero-content client behavior mod (0 blocks, 0 items, loot=no); augments the vanilla spyglass in the client only. No weave surface.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- REWORK: existing survival anchor is sound — Create-themed structures push exploration. OK — connections sound.
- from: create_ltab structure loot tables (loot=yes) | via: loot-seed (seed numismatics coin into structure chests) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: scavenging an abandoned Create factory yields not just cogs but a few coins — the old operators got paid
- from: create_ltab structure loot tables | via: loot-seed (seed Ars Nouveau source_gem or Iron's arcane_essence into rare chest slot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: whoever built these machines dabbled in arcane power — their notes (and a gem or two) are still in the chest
- from: create_ltab structure loot tables | via: loot-seed (seed a boss-key fragment or progression token) | to: Create (depth) | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: M-15 is boss-key gating of complex tech; seeding a key fragment into a non-boss structure loot table conflates two distinct mechanisms. The structure is exploration-reward, not boss-gate. Keep economy and magic loot-seeds; drop the boss-key angle.

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — zero-content client HUD overlay (0 blocks, 0 items, loot=no); renders existing armor data, no weave surface.

== CHUNK COMPLETE ==
