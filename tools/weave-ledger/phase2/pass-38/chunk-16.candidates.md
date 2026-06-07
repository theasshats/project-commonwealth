# Phase 2 candidates — chunk-16

## immersive_paintings   [anchors: decoration palette / support (1)]
- LEAVE — zero material surface: painting items are created through a client GUI (not recipes or materials a method can pull through). No crafted output with a second-system hook. Forcing a frame-crafting edge via Create or any other method would be busywork — no player would read it as "of course." Dossier concurs.

## create_sa   [anchors: create, aeronautics (2)]
- from: blazing gear line (blazing_pickaxe / blazing_axe, blaze core) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: "arcane fire seals the blaze-forged edge — the Create smith and the Ars mage must cooperate to finish the blazing tool line"
- from: brass_drone_item / brass_jetpack (personal flight) | via: aeronautics arm (personal mobility) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-24 is for mechanical components feeding into Aeronautics propellers/engines/control surfaces; a personal jetpack gadget riding this motif is a mis-fit — the jetpack is a consumer of the aeronautics theme, not a drivetrain input. The aeronautics anchor on dossier is more accurately "same thematic pillar" than a true M-24 method-routing. Not wrong enough to be a REWORK, but not an additional edge to author.
- REWORK check on existing aeronautics anchor: the jetpack/drone as "personal flight" is thematically aeronautics but structurally weaker than a real M-23/M-24 build-ingredient link. Acceptable as a light aeronautics tie — no full rework needed, but a Phase 3 improvement would be: gate one drone module behind an Aeronautics-specific component (e.g. a propeller sub-part), making create_sa a physical ingredient in the aeronautics build chain (M-24). Flag for future consideration; connections currently sound for two anchors.
- OK — existing Create anchor (gear built via sequenced_assembly / mechanical_crafting) is solid. Aeronautics is light but defensible. The M-10 blazing-line magic link is the meaningful 3rd-anchor improvement.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: "the Millstone and Crushing Wheel grind rock-salt to cooking dust — the industrial kitchen runs through Create"
- from: expandeddelight:cinnamon_log / cinnamon_bark (c:dusts/cinnamon source) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: "a Millstone grinds cinnamon sticks into cooking spice — Create feeds the kitchen as much as the forge"
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (cask-aged) | via: create_cheese:maturing (or expandeddelight cask mechanic — both are aging paths) | to: create (maturation chain) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: "aged cheese sits in casks like wine in barrels — the time-value of specialty food drives a trade good that can't be rushed"
- from: expandeddelight:cranberry_plant / asparagus / sweet_potato crops | via: serene seasons gate (seasonal spawn) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: "cranberries ripen in autumn, asparagus in spring — a balanced diet in every season means farming never stops"
- from: expandeddelight:apple_juice (juicer output) | via: expandeddelight:juicing → vinery:apple_fermenting | to: create (fermentation chain) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: "press apples to juice in the Juicer, then ferment into cider — the rustic kitchen chains into the winery's production loop"
- from: expandeddelight:cheese_wheel / salt as trade goods | via: bare sell / numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired (#163/#240) — "aged cheese is sellable" is the ambient endpoint of the loop, not a weave; if cheese trade matters, express it as M-26 consumption sink or M-30 scarcity gate instead

## kobolds   [anchors: economy, survival (2)]
- REWORK: economy anchor — the current "economy" anchor is grounded in emerald-based NPC trading (villager-style kobold trades). This maps to the cut M-21 pattern (NPC trade-seam to economy), not a player-run economy weave. The anchor label is misleading; it describes ambient NPC interaction, not a Numismatics/player-trade node. Recommend re-expressing the economy connection as M-34 (combat-route supply: players raid kobold dens and trade the drops), which is player-driven and keeps the economy anchor legitimate.
- from: kobolds:kobold_skull (mob drop, dungeon raid) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: "a kobold skull burned in spirit fire yields a fragment of ancient lizard-essence — the occultist needs what only a dungeon raider can supply"
- from: kobolds:kobold_skull / kobold_wither_skull (rare drop from kobold captain/pirate den) | via: loot-seed (kobold_skull as a quest reward / dungeon drop) → player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: "kobold dens are dangerous enough that a specialist clears them and sells the skulls — the combat raider supplies what the crafter can't safely obtain"
- from: kobolds:kobold_wither_skull (exceptionally rare variant — pirate/captain kobold) | via: the gated machine's recipe (kobold_wither_skull as input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: "the wither-crowned skull of a kobold captain keys a complex Create recipe — you can't build the high-tier part without raiding the pirate den"
- from: kobolds emerald trading (NPC kobold enchanter selling Prospector enchantment) | via: villager/NPC trade | to: economy | motif: no-motif (M-21 is cut; emerald NPC trades are not player-run) | power: mid | tone: ok | verdict: REJECT | reason: M-21 (NPC trade-seam to economy) is cut (#163/#240); NPC emerald trading isn't a player-run economy weave — this is the ambient interaction that the existing economy anchor incorrectly represents

## cmpackagepipebomb   [anchors: create (1)]
- LEAVE — novelty PvP trap gag riding Create's package system; no material surface for a second-system hook. "Gunpowder/TNT consumption" is already ambient M-26 in the vanilla-combat loop; there's no coherent new edge to add here. Forcing danger-pressure or survival anchor onto a package-bomb prank would be arbitrary.

## bookshelf   [anchors: support/library (1)]
- LEAVE — genuine zero-content code library (Darkhax utility framework). No items, blocks, or recipe types. Sanctioned support role; no weave possible.

## moonlight   [anchors: support/library (1)]
- LEAVE — genuine zero-content library (MehVahdJukaar shared API). The spawn_box/placeable_item registrations are internal framework helpers, not player-facing content. No weave surface.

## companion   [anchors: support/QoL (1)]
- LEAVE — pure behavior mod (pet safety teleport/retreat). Zero items/blocks/recipe types. Nothing to route.

## clumps   [anchors: support/performance (1)]
- LEAVE — genuine zero-content performance mod (XP orb merging). No items, blocks, or methods. Sanctioned server-perf support role.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client-side camera/movement behavior (elytra roll/pitch/yaw). No items, blocks, or recipe types. Touches elytra, not Create Aeronautics ships; no material surface to route.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — genuine zero-content config-screen API library. No items, blocks, or recipe types. Sanctioned support role.

## mutantszombies   [anchors: survival (1)]
- LEAVE — hostile-mob-only mod confirmed loot=no (no special drops, only spawn eggs). Extra zombie variants add survival/danger pressure but have zero material surface for a second-anchor weave. A loot-seed for drops is not possible since no loot tables exist. Forcing danger-pressure as a second anchor beyond its existing survival tie would be circular (it already anchors there).

## crash_assistant   [anchors: support/client-utility (1)]
- LEAVE — genuine zero-content crash-diagnostic utility (client-side only). No items, blocks, or recipe types. Sanctioned support role.

