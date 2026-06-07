# Phase 2 candidates — chunk-06

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — zero content surface (no items, no loot, no biome-modifiers); pure config that scales structure spacing. Nothing to route, seed, or weave. Sanctioned support role.

## mcwdoors   [anchors: support/decoration (1)]
- from: metal door variants (iron/steel) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spare metal doors dismantled in a Crushing Wheel return iron nuggets + an XP nugget — the deco family composts back into the ore chain.
- from: wooden door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Vanilla planks already recycle fine; adding ~250 wooden door entries is noise with negligible loop contribution. Only metal variants earn the M-04 slot.

## rightclickharvest   [anchors: support/QoL (1)]
- LEAVE — pure interaction-hook mod, 0 items/blocks/loot. No material graph to touch; any weave would be forced. Sanctioned support role.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / _netherite | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Upper-tier gliders demand a mechanical-crafting step using Create sheets or casing, making the tech spine the gate for serious personal flight gear.
- from: reinforced paper feedstock | via: create:milling (paper/pulp chain) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Reinforced paper is a weak integration point; gating everyday glider base-material behind a milling step adds friction at the wrong tier — everyday items should not require milling setup. Power mismatch; depth should scale with the item, not its feedstock.
- REWORK: existing aeronautics anchor is sound (personal flight ladder). Second anchor (create) via M-05 for higher tiers is the right move rather than gate the feedstock. OK on aeronautics anchor.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — zero content surface; pure network-limit fix. Sanctioned support role.

## controlling   [anchors: support/client-UI (1)]
- LEAVE — client keybind search UI, 0 items/blocks. Nothing to weave. Sanctioned support role.

## quark   [anchors: support/decoration-QoL (1)]
- from: quark decorative stone variants (andesite bricks, polished stone blocks, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Surplus deco stone blocks crush back to gravel + XP nugget — the vanilla-plus aesthetic feeds the Create ore/material loop on deconstruction.
- from: quark crop-crate blocks (apple_crate, potato_crate, carrot_crate, etc.) | via: create:milling or create:compacting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Storage-block packing/unpacking is already handled by vanilla crafting; routing the crates through Create milling adds no real loop value — it would just be a roundabout way to recover the crop. Not a meaningful processing chain.
- from: quark ancient wood blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Ancient wood is a unique worldgen wood type; crushing it back to planks/gravel is thematically fine but provides near-zero loop payoff compared to accepting it as a deco terminus. Marginal edge; skip.

## mutantszombies   [anchors: survival (1)]
- LEAVE — no item drops defined (loot=no, only spawn eggs registered). The mobs raise baseline threat but contribute nothing to the material graph. Any weave would have to invent a drop this mod doesn't have. Sanctioned single-anchor survival role.

## ribbits   [anchors: survival (1)]
- from: ribbits amethyst-shard trade economy | via: numismatics trade/price bridge (KubeJS config) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ribbit merchants accept amethyst shards and pay in Numismatics coin (or vice versa), folding the swamp-village trade into the pack's unified currency — a player naturally carries coin to the frog market.
- from: ribbits:toadstool / mossy_oak_planks | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Mossy-oak is a small unique woodset; giving it a Create-cutting recycling edge is valid but adds negligible loop connectivity. Generic wood crushing isn't worth the recipe clutter unless doing a whole deco-family pass. Mark as low-priority defer, not block.

## betterdungeons   [anchors: survival (1)]
- from: dungeon chest loot tables | via: loot-seed (magic reagents) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau/Occultism reagents appear in Catacombs and Undead Fortress chests — exploration unlocks magic progression paths rather than crafting being the sole entry.
- from: dungeon chest loot tables | via: loot-seed (numismatics coin) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Finding a handful of coin in a dungeon chest connects combat/exploration to the economy faucet without needing a bounty board — loot gates the first spending power behind real danger.
- from: dungeon bosses/spawner mobs | via: bountiful decree objectives (kill-mob bounties targeting dungeon mob types) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: A Bountiful decree points kill objectives at Catacombs zombie variants / spider-cave denizens — dungeon delving generates coin through the bounty board.

## tipsmod   [anchors: support/client-UI (1)]
- LEAVE — zero content, pure loading-screen tip UI. Pack-authoring value is the tips.json, not a pillar weave. Sanctioned support role.

## cristellib   [anchors: support/library (1)]
- LEAVE — structure-config framework library, 0 items/blocks/loot. No content surface whatsoever. Sanctioned support role.

## sable   [anchors: support/physics-backend (1)]
- LEAVE — sub-level physics engine library, 0 items/blocks. Weaving happens in the mods that build on it (Create Aeronautics). Sanctioned support role.

## betterclouds   [anchors: support/visual (1)]
- LEAVE — client cloud renderer, 0 items/blocks. Pure aesthetics. Sanctioned support role.

## ichunutil   [anchors: support/library (1)]
- LEAVE — shared-class library for iChun mods, 0 items/blocks. Sanctioned support role.

## endermoon   [anchors: survival (1)]
- from: Ender Moon event (mass enderman spawns) | via: bountiful decree + lunar timing (M-22) | to: economy | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: During an Ender Moon, a Bountiful decree activates offering high-coin bounties for ender pearls — the lunar event becomes an economic rush night that rewards preparation (scarcity → pressure → economy via lunar timing).
- from: Ender Moon ender-pearl surplus | via: ars_nouveau:imbuement (ender pearl as reagent) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Ender Moons flood ender pearls; an imbuement recipe uses the surplus as a magic catalyst for an Ars Nouveau recipe, so lunar surges drive the magic production queue — Ender Moon nights become scheduled production sessions.
- REWORK: existing survival anchor is correct. Two new M-22 links (economy + magic) build the 2nd and 3rd anchor cleanly. OK — survival anchor sound.

## configuration   [anchors: support/library (1)]
- LEAVE — config-screen library, 0 items/blocks. Sanctioned support role.

## bookshelf   [anchors: support/library (1)]
- LEAVE — modder utility library, 0 items/blocks. Sanctioned support role.

## bountiful   [anchors: economy (1)]
- from: bountiful reward pool | via: numismatics coin config (KubeJS/data) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bounty board pays Numismatics cog/spur/bevel instead of gold, making it the primary early coin faucet — the first time a player exchanges a mob kill for a coin makes the economy real.
- from: bountiful objective pool (Decree) | via: config pointing at Create-processed goods or magic reagents | to: create + magic | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Decrees call for Create-processed sheets or Ars source gems, turning production surplus into coin demand — every pillar's output becomes a potential job posting.
- from: bountiful objective pool | via: Decree pointing at seasonal crops (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A seasonal Decree requests summer melons or autumn pumpkins, so the bounty board's job queue tracks the real-world season — you can't turn in the bounty out of season.
- REWORK: single economy anchor is thin for such a load-bearing mod. The three ACCEPTs above give it economy + create + survival anchors. OK — economy anchor sound; needs these weaves to fulfil its load-bearing role.

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — display-only JEI addon; shows mob drop / worldgen / loot data but adds no material graph nodes. Its value (documenting scarcity/regional ores) is served by being installed, not woven. Sanctioned support role.

== CHUNK COMPLETE ==
