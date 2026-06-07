# Phase 2 candidates — chunk-06

## startuptime   [anchors: support/diagnostic (1)]

LEAVE — zero-content code library. Prints a boot-timing log line; no items, no blocks, no recipe types, no in-world state. Nothing to route, no second anchor possible.

## kiwi   [anchors: support/library (1)]

LEAVE — pure developer library. Registers no items, blocks, or recipe types; provides registration helpers and GUI/font utilities for Snownee's dependent mods only. Nothing to weave; genuine zero-content library.

## travelersbackpack   [anchors: survival (1)]

Power-read: The backpack is an exploration logistics item — portable large inventory, dual fluid tanks (hose-fillable), sleeping-bag respawn, and slot-in upgrades. 84 items, 60 blocks; `travelersbackpack:backpack_upgrade` is a named recipe type. Tier: everyday (leather packs) → mid (themed mob-drop packs) → late (netherite/dragon). The fluid-tank feature makes it a portable buffer for TFMG/Create fuels, potions — a real logistics value item for airship crews. Two custom recipe types are present: backpack_shaped and backpack_upgrade.

- from: travelersbackpack themed variants (mob-drop crafted packs, e.g. blaze, dragon, netherite) | via: travelersbackpack:backpack_upgrade (upgrading a blank upgrade with Create-pressed metal plates) | to: create | motif: M-20 | power: mid | tone: ok — a kinetic upgrade applied to an existing item is exactly M-20's light deploy-application pattern; a brass/zinc upgrade plate applied via deployer is coherent industrial kit | verdict: ACCEPT | hook: a pressed brass plate is mechanically assembled into the backpack upgrade at a Deployer, turning the upgrade from a crafting-table recipe into a Create-step — the pack becomes part of the industrial supply chain

- from: travelersbackpack fluid tanks (filled with fuel/lubricant via hose) | via: passive logistics role as portable aeronautics fuel buffer | to: aeronautics | motif: M-26 | power: mid | tone: ok — airship crew needs fuel on expeditions; a tank-equipped backpack is the obvious carrier for TFMG diesel/gasoline | verdict: ACCEPT | hook: on a long-range airship run a full backpack tank becomes the difference between landing to refuel or limping home — the fuel consumption loop gains a personal logistics node

- from: travelersbackpack:backpack_upgrade crafting chain | via: travelersbackpack:backpack_upgrade recipe routed through create:pressing for a required metal plate input | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-20 (light deploy-application) already covers the Create weave more precisely and at the right depth for an everyday carrier item; M-05 (native-method gating for flagship items) would over-gate a common exploration tool — don't double-apply Create anchoring

- from: travelersbackpack exotic tier variants (dragon, netherite) | via: requiring a boss drop as a crafting gate | to: create | motif: M-15 | power: endgame | tone: ok — endgame pack tiers behind a boss drop is coherent; dragon pack needs dragon tooth/scale | verdict: REJECT | reason: M-15 reserved for complex Create/tech recipe gates per motif scope; applying it to a storage item tips into over-gating a survival QoL item, and the dragon backpack is cosmetic differentiation not a tech unlock — depth via M-20 plate upgrade is sufficient and correctly scaled

REWORK: The dossier's "aeronautics via portable logistics — [WEAK]" note undersells this. The fluid-tank + sleeping-bag combo is genuinely load-bearing for long-range aeronautics expeditions (field refuel + respawn anchor away from base) — this is a M-26 consumption sink link (fuel is consumed from the tank en-route) with a clear aeronautics hook. Should be upgraded from WEAK to MED/STRONG, not left as a vague comment. The Create-recipe weave candidate (M-20) is new from this pass and was missing from the dossier.



