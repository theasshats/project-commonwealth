# Phase 2 candidates — chunk-01

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (appliance blocks) | via: recipe (crafting) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a proper kitchen is a brass-fitted machine, not a plank box — the Oven and Fridge need Create copper/brass sheet fittings to upgrade from wood to the full multiblock; players who committed to Create get a working kitchen, not a free one
- from: cookingforblockheads:cooking_table (kitchen hub) | via: recipe (create:mechanical_crafting) | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: redundant with the Oven/Fridge M-05 candidate above — one M-05 anchor is sufficient for the kitchen; gating the Cooking Table as well over-walls the QoL layer (dossier warns: it aggregates other mods' food, so hardening its hub too far kills the convenience promise)
- from: cookingforblockheads kitchen blocks as trade goods | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); the blocks themselves aren't interesting economy goods — the food they help produce is; leave economy weave to the food mods it serves
- REWORK: existing anchor "survival" is fine. The only proposed 2nd anchor is the M-05 one above (ACCEPTED). Current connection count: 1 → 2 if M-05 lands. No existing connections to rework.

## multipiston   [anchors: support/MineColonies dependency (1)]
- LEAVE — genuine zero-content code-infrastructure block; no materials, no item outputs, no loot, no recipe surface. The single block is an internal Structurize builder tool, not player-craftable gameplay content. No coherent weave exists.

## betteranimationscollection   [anchors: support/client-visual (1)]
- LEAVE — pure client model/animation replacer; 0 items, 0 blocks, loot=no. No content surface whatsoever.

## create_better_villagers   [anchors: Create, economy (2)]
- from: Create-parts trades (emerald-denominated) | via: config / KubeJS trade override | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create villagers should price their brass in Numismatics coin, not emeralds — re-denominating their trades from emeralds to cogwheels/spurs plugs the Create supply chain into the pack's actual currency and closes the emerald bypass
- from: Create-parts trades | via: villager trade → numismatics (M-21 path) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; the M-08 re-denomination above already handles the economy tie cleanly without requiring the provisional villager-trade motif
- OK — connections sound (already 2-anchor: Create + economy); the M-08 re-denomination deepens the economy link without adding a new anchor

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — particle/sound-only cosmetic; the 184 "items" in the digest are internal particle-holder entries (minecraft:blood1..blood15), not collectible drops or craftable goods. loot=yes in the digest refers to the jar structure, not gameplay loot. No item or method to route through.

## modelfix   [anchors: support/perf-bugfix (1)]
- LEAVE — pure client rendering patch; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## chat_heads   [anchors: support/client-UI (1)]
- LEAVE — chat-overlay cosmetic; 0 items, 0 blocks, loot=no. No content surface.

## bigsignwriter   [anchors: support/client-UI (1)]
- LEAVE — in-GUI sign-text helper; 0 items, 0 blocks, loot=no. No content surface.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets (incl. c:nuggets/diamond, c:nuggets/emerald) | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a gorgon's eye and a valkyrie's wing-fragment are exactly the strange organic inputs a spirit fire wants — slaying Gaia creatures feeds the occult web, making combat a magic-production route
- from: grimoireofgaia boss busts (bust_valkyrie / bust_gorgon / bust_sphinx / bust_minotaur / bust_vampire) | via: loot-seed / bountiful bounty → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: the bounty board pays coin for proof of a notable kill — a valkyrie bust as a bounty trophy closes the combat→economy loop cleanly
- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire/ritual) via Occultism already accepted above and is the stronger thematic fit for this dark bestiary; a second magic-infusion tie on the same fragment pool is redundant — risks reagent double-spend; keep one magic anchor, not two competing infusion paths
- from: grimoireofgaia metal nuggets/fragments | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: c:nuggets/diamond and c:nuggets/emerald are already standard tags; routing them through crushing adds no distinct value and muddles the Create ore-doubling motif (M-03 is for ores → crushed, not nuggets → fragments). The mob-drop chain is better handled by magic (M-11, already accepted).
- REWORK: existing anchor "survival" is appropriate. Two new anchors proposed (magic via M-11 + economy via M-14); if both accepted, grimoireofgaia reaches 3 anchors (survival + magic + economy) — all coherent with the loop (survival pressure → combat drop → magic production or economy payout).

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a spider fang from a pitch-black underground dungeon is a spirit-fire ingredient by any witch's logic — dungeon-delving feeds the occult reagent supply
- from: undergroundworlds temple/pyramid brick deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself flags this as WEAK — decorative recycle motif (M-04) on dungeon bricks is a thin mechanical edge, not a loop-advancing weave; doesn't survive the "would a player nod at this?" test. The spider_fang magic link is the real weave here.
- from: undergroundworlds dungeon chests (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a handful of Numismatics coins into the dungeon chest loot tables makes underground exploration pay — scarcity-pressure drives players into dangerous biomes, then they surface with coin; scarcity → pressure → economy loop node
- REWORK: existing anchor "survival" is fine. Two accepted candidates bring it to 3 anchors (survival + magic + economy), all loop-advancing.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — networking/privacy utility; 0 items, 0 blocks, loot=no. Genuine zero-surface mod.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest foraged mushrooms (common/rare/mythical caps, effect-bearing edibles) | via: farmersdelight:cooking / extradelight:oven | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraged mushrooms belong in the cooking pot — running bay boletes and artist conks through Farmer's Delight cooking recipes pulls the mycology harvest into the food-processing chain and feeds the survival pillar properly
- from: mushroomquest rare/mythical mushrooms (effect-bearing) | via: numismatics sell / shopkeeper | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare agarikon or mythical glowcap commands a real price at market — players who go foraging come back with coin as well as food, closing the survival→economy link
- from: mushroomquest deadly/mythical caps | via: occultism:spirit_fire / ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: the tone clash is real — mushroomquest is firmly cottagecore/whimsical foraging; routing death-cap mushrooms through occult spirit fire works mechanically but feels forced/grimdark for the mod's vibe; the food-chain and economy ties (above) are the natural ones. LEAVE magic to mods with darker biological themes.
- REWORK: existing anchor "survival" is correct. Two accepted candidates reach survival + Create/survival (M-12) + economy (M-09) — a clean 3-system reach.

## direct_chute   [anchors: create (1)]
- from: direct_chute:direct_chute (zinc logistics block) | via: recipe (crafting) | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: the chute is a passive item conduit, not a mechanical component — M-24 (mechanical component → propulsion/control) does not fit a zinc tube; forcing an aeronautics tie here is a contrived edge. Dossier LEAVE is correct.
- LEAVE — single Create logistics-QoL block; its recipe is already zinc-based and self-contained within Create. No coherent second anchor survives the red-team.

## platform   [anchors: support/library (1)]
- LEAVE — pure code library (ItsBlackGear registry helpers); 0 items, 0 blocks, 1 biome-modifier (framework hook, not player content). Genuine zero-surface library.

## moreculling   [anchors: support/performance (1)]
- LEAVE — client render-culling optimization; 0 items, 0 blocks, loot=no. Genuine zero-surface mod.

## kiwi   [anchors: support/library (1)]
- LEAVE — Snownee's annotation/registry library; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## xaeroworldmap   [anchors: support/client-UI (1)]
- LEAVE — client map UI; 0 items, 0 blocks, loot=no. Genuine zero-surface mod.

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — version-handshake utility; 0 items, 0 blocks, loot=no. Genuine zero-surface mod.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (advanced control device) | via: recipe (create:mechanical_crafting) | to: create | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the tweaked controller is a precision mechanism + electron tube assembly — it IS a Create mechanical component; gating it behind mechanical_crafting rather than plain crafting gives Create players the vehicle control surface they built the spine toward
- from: create_tweaked_controllers:tweaked_linked_controller | via: recipe (crafting) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the mod already anchors to aeronautics (the linked controller is already its aeronautics connection); M-24 on the tweaked_lectern_controller (above, ACCEPTED) is the meaningful Create-side deepening; adding a second M-24 for the linked controller duplicates the same motif on the same mod
- REWORK: existing anchor "aeronautics" is correct. Accepted M-24 moves it to aeronautics + create (2 anchors). No existing connection to rework.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger, c:seeds/ginger) | via: create:milling / farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger root goes into a millstone to yield ground spice — a natural cooking intermediate that threads the winter harvest through the Create production line and into Farmer's Delight dishes
- from: snowyspirit:gingerbread_cookie / snowyspirit:eggnog / snowyspirit:candy_cane (c:foods/cookie, c:foods/candy) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: winter sweets are a seasonal luxury — they sell for coin at market only in winter (Serene Seasons gate), making the ginger harvest an economy driver and giving the seasonal loop a currency pulse
- from: snowyspirit:ginger (c:crops/ginger) seasonal availability | via: season-gated input → create:milling | to: create/magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger only grows in winter (Serene Seasons); making ground ginger a Serene-Seasons-winter-only Create milling output feeds the seasonal-reagent motif — the spice supply tightens in summer, pressuring players to stockpile
- from: snowyspirit:sled (snow vehicle) | via: aeronautics/transport tie | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the sled is a terrain-physics toy, not an Aeronautics airframe or drivetrain component — no motif covers "fun snow vehicle → ship logistics"; the tone comparison (sled vs. coal-powered airship) also clashes. no-motif → REJECT-for-review.
- REWORK: existing anchor "survival" is fine. Three accepted candidates reach survival + create (M-12/M-16) + economy (M-09), a 3-anchor mod — strong loop coverage (seasonal pressure → production → economy).

== CHUNK COMPLETE ==
