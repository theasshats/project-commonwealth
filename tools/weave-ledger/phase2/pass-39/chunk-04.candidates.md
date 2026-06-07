# Phase 2 candidates — chunk-04

## createadditionallogistics   [anchors: create, aeronautics (2)]

Existing connections review:
- create anchor: kinetics infrastructure is correct — it IS Create (deepens the spine).
- aeronautics anchor: seats wired to Stock Keepers / train logistics is legitimate; the aeronautics / logistics arm explicitly includes train transport.
REWORK: OK — connections sound. Both anchors are load-bearing and the mod's role is well-scoped (a performance+logistics deepener of Create, not a standalone content mod). No new edges needed; forcing one would be arbitrary.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: structure datapack — 150+ vanilla-block structures across biomes, loot=yes. No items of its own; content surface is entirely loot tables. Single survival anchor (exploration/discovery) is correct.

Method-pull candidates:
- from: trek chest loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a scarce Numismatics coin (or coin blank requiring Create-pressing) seeded into rare trek structures makes exploring ruins a way to seed the early coin economy — players loot coin or coin blanks rather than emeralds, threading exploration into the player-run currency layer. This is a genuine demand-gating link (M-08 player-minted currency); loot-seed is the delivery.
- from: trek chest loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: source gems, arcane essences, or Occultism spirit-books seeded into trek ruins make remote structures a source of hard-to-farm magic reagents — exploration feeds the magic production route and draws players out into danger. Mob-drop-reagent logic applies here: the loot table IS the organic/world source.
- from: trek chest loot tables | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a boss-key or rare Create-gated blueprint component hidden in the deepest trek fortresses / pyramid / dungeon loot creates an exploration-to-tech unlocking arc — players who push far enough find a gate item for a high-tier Create machine, making exploration matter for tech progression. Scale to the structure rarity (a pyramid or fortress, not every island).
- from: trek chest loot tables | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: seeding combat drops into trek loot doesn't advance the loop — that's just extra loot scattered across structures rather than a combat-route supply link. M-34 is about combat specialists farming bosses to trade; scattering boss-adjacent drops into structure chests doesn't create the specialist dynamic, it removes it. REJECT.

## supermartijn642configlib   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (config API); no items, no recipe types, no loot, no in-world behavior. Nothing to weave.

## trading_floor   [anchors: create, economy (2)]

Existing connections review:
- create anchor: hard Create dependency (it IS a Create depot variant) — correct.
- economy anchor: its purpose is automating villager trades, which is a distribution/exchange mechanic — correct.
REWORK: OK — connections sound. It is already a genuine two-anchor mod at the exact seam of Create logistics and the economy distribution layer. No new edges needed.

Additional checks (method-pull):
- The dossier flags M-08 (player-minted currency via the Trading Depot accepting Create-processed goods → emeralds → Numismatics mint) as a natural future use. That's a valid weave candidate but it's an economy-internal refinement: Create output → depot → emeralds → player mints coin. Power: mid. Tone: ok. Motif: M-08. Verdict: ACCEPT | hook: a Create production line auto-feeds the Trading Depot to convert refined goods into emeralds, which a player mints into Numismatics coin — the depot becomes the monetization point where the tech spine meets the player-run currency layer. via: config tie (depot wired into Create belt) + numismatics mint.
- from: trading_floor:trading_depot used for enchanted book farming | via: create belt + trading depot | to: magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: routing enchanted books via the depot into magic is a one-hop convenience shortcut — it removes scarcity rather than gating demand. Enchantments belong to the magic specialist role (M-33 service-for-hire or the magic route's locked output); auto-farming them through a depot erodes that specialization. REJECT.

## dataanchor   [anchors: support/library (1)]

LEAVE — genuine zero-content developer library (data-attachment + networking API); no items, no blocks, no loot, no gameplay behavior. Nothing to weave.

## gnkinetics   [anchors: create (1)]

Power-read: 33 blocks, 31 items — pure kinetic extension parts (planetary, ring, worm gears; chainable cogwheels; cog cranks; creative gear motor). All crafted from Create stock (andesite/brass). Loot=yes but only as a kinetics-part source. The dossier correctly identifies this as a Create deepener.

Method-pull candidates:
- from: gnkinetics:planetary_gear / gnkinetics:worm_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a planetary gear or worm gear — the high-ratio, torque-specific kinetics part — is a required mechanical component in Aeronautics propeller/drive-shaft assembly; it makes airship drivetrains demand specialized gear-cutting (a Create specialty), not just raw metals. The worm gear's self-locking property makes it a natural rudder/control-surface lock. Depth scales appropriately: these are mid-tier Create parts, not entry-level. via: create:mechanical_crafting (Aeronautics drivetrain recipe).
- from: gnkinetics:industrial_gear / gnkinetics:large_industrial_gear | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is the structural alloy / airframe motif, not the drivetrain motif. A gear is not a structural alloy — it's a drivetrain component (M-24 covers this correctly). Routing it as M-23 mis-classifies the material. The M-24 accept above already covers the same gear type. REJECT (wrong motif; M-24 already handles this).
- from: gnkinetics:magnet_gear / gnkinetics:large_magnet_gear | via: create:mechanical_crafting | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: the magnet coupling across gaps is a physics/kinetics mechanic, not thematically connected to magic; routing it into magic is tone-forced. No motif fits. REJECT (no-motif, tone clash).
- from: gnkinetics:creative_gear_motor | via: n/a | to: any | power: creative | tone: n/a | verdict: REJECT | reason: creative-mode content; not weave-eligible (it's a dev/creative cheat block, not a survival material). REJECT.

## mushroomquest   [anchors: survival (1)]

Power-read: 48 blocks, 352 items, 32 biome-modifiers, loot=yes — large pool of edible/effect-bearing mushrooms spanning everyday (common forageables) through mythical (rare biome-locked finds). Biome-keyed foraging, Mushroom Island expansion, structures + loot. Strong feedstock for cooking/brewing methods. The dossier flags M-12 (cooking chain), M-09 (luxury sell), M-10/M-11 (magic) but M-09 is retired.

Method-pull candidates:
- from: mushroomquest rare/effect mushrooms (agarikon, bay bolete, mythical caps) | via: farmersdelight:cooking / extradelight:oven | to: create | motif: M-12 | power: everyday-to-mid | tone: ok | verdict: ACCEPT | hook: effect-bearing mushrooms are processed through Farmer's Delight / Extra Delight cooking into prepared mushroom dishes that feed the diet system (Grains/Protein/Vegetables face) — a survival→production chain that integrates the foraging layer into the food-processing spine without anything forced. Low bar; everyday mushrooms = one-step cooking recipe. via: farmersdelight:cooking.
- from: mushroomquest mythical/deadly mushroom caps | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: transmuting a rare mythical or deadly mushroom cap (an organic biome find, hard to farm at scale) through spirit-fire into an Occultism reagent or through Ars imbuement into a source-adjacent material makes the foraging route a real input to the magic production web — the mycologist who explores Mushroom Islands feeds the mage. Scale appropriately: mythical caps only, not common forageables; one light transmutation step. via: occultism:spirit_fire.
- from: mushroomquest rare/biome-locked mushrooms | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling mushrooms through Create's miller is coherent but redundant — farmersdelight:cooking already handles the processing chain (M-12, accepted above) and does it more naturally (mushroom dishes vs. mushroom powder is a thin distinction, not a new system seam). Adding a second M-12 path here thins the weave without adding a new pillar link. REJECT (redundant with cooking-chain accept).
- from: mushroomquest effect mushrooms as brew ingredients | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: effect-bearing mushroom caps (poison, healing, hallucination analogs) brewed in Iron's Alchemist Cauldron into spell-potions or buff-flasks makes the mushroom forager a supplier to the Iron's magic pillar — a cross-route dependency where a survival find feeds a magic production method. Scale: mid-tier mushrooms (not every common one), one brewing step. via: irons_spellbooks:alchemist_cauldron_brew. Motif M-10 (arcane infusion pull — foreign material refined into magic reagent through native magic method).
- from: mushroomquest loot tables (Mushroom Island structures) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: seeding coin into mushroom-island structure loot is weaker here than for trek (which spans all biomes); the Mushroom Island is already a vanilla special biome destination, so coin there could work, but the better economy weave for mushroomquest is the reagent supply chain (accepted above) rather than stashing coins in chests. The loot-seed economy link adds little over the direct magic-supply weave. REJECT (weaker than accepted links; economy gets no new structural benefit).







