# Phase 2 candidates — chunk-09

## simplehats   [anchors: support (1)]
- from: simplehats rare hat (grab-bag drop) | via: loot-seed + numismatics sell price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hats are a vanity luxury — a collector sells them at the Trading Floor for coin, feeding the player-run currency with cosmetic value the same way wine and cheese do
- from: simplehats hat grab-bag | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: bounty boards paying coin for mob kills already captures the loop; hat bags are cosmetic loot, not a bounty commodity — layering M-14 here duplicates M-09 without adding loop advancement
- REWORK: anchor is "support" only — the dossier already flags M-09 as its second-anchor candidate; no existing connection to critique, but the M-09 route is the right one.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — zero content surface: language adapter only, no items/blocks/loot/recipes. Nothing to route through any method.

## fogoverrides   [anchors: support/client (1)]
- LEAVE — zero content surface: config-only visual mod, no items/blocks/materials. No motif can reach it.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — zero content surface: networking utility, no items/blocks. Nothing to weave.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ice crystal's supernatural cold channels into Create's precision assembly — a plausible industrial catalyst key that locks a cryo-themed machine tier behind exploration
- from: mowziesmobs:earthrend_gauntlet / wrought-metal | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's ancient iron demands a multi-step assembly chain — boss metal as a deep-chain keystone, GregTech-style depth without multiplied cost
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a fragment of supernatural cold is exactly the kind of premium catalyst a mage refines into a high-tier arcane reagent
- from: mowziesmobs:elokosa_paw (moon-cat boss drop, lunar theme) | via: lunar-event gate | to: magic | motif: M-22 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Elokosa is explicitly lunar — its paw becoming a moon-event reagent is a natural fit, making the boss relevant to the celestial cycle
- from: mowziesmobs boss loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: paying coin bounties for Mowzie boss kills feeds the combat→economy arm; players who grind bosses can monetize rare drops at the bounty board
- from: mowziesmobs:captured_grottol | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the Grottol is an ore-eating critter, not a spiritual entity — transmuting it via spirit fire is thematically muddled; the ice_crystal and elokosa_paw are better magic sinks with cleaner lore hooks
- OK — existing survival anchor is sound. New links add create (M-15/M-06) + magic (M-10/M-22) + economy (M-14) second anchors.

## almostunified   [anchors: support (1)]
- LEAVE — recipe-graph plumbing with no item/loot surface. Its job is to *enable* the web, not be a node in it. Note: GOTCHA (galosphere silver = palladium) already documented in dossier.

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — compat behavior glue between Create: Stuff 'N Additions and Sable; no items, no loot, no methods to route.

## immersivearmorhud   [anchors: support/client (1)]
- LEAVE — client HUD display only; no items, no content surface.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory optimizer; zero content surface, no player-facing interaction.

## knightlib   [anchors: support/library (1)]
- LEAVE — Knight Quest is not in this pack; the chalice/grail items are inert dead content. Do not weave dead items. If Knight Quest is ever added, knightlib:great_essence fits M-02 (mob-drop reagent sink into magic).

## copycats   [anchors: create (2)]
- from: copycats blank shapes (zinc-built) | via: create:item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: copycats already occupies the Create pillar fully — its blank shapes are already applied via right-click skin-transfer, which IS item_application in spirit; routing M-20 on top would double-layer the same mechanic with no new loop advancement
- from: copycats:copycat_catwalk | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a copycat catwalk/panel is precisely the kind of textured structural surface you deck out an airship hull or walkway with — making it an optional aesthetic ingredient in airframe assembly turns Create deco into a ship-build material
- OK — Create anchor is solid. The aeronautics (M-23) link is a light aesthetic weave, not a hard gate on basics.

## ldlib2   [anchors: support/library (1)]
- LEAVE — developer UI/rendering library with no real player-facing items (ldlib2:test_2 is a dev artifact). Nothing to route.

## mousetweaks   [anchors: support/QoL (1)]
- LEAVE — client input handler; zero content surface.

## create_ironworks   [anchors: create (1)]
- from: create_ironworks:tin_ingot (c:ingots/tin) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is a fresh scarce regional metal — ore to crushed to ingot to coin is the exact scarcity→economy seam the pack is built on; a Tin Spur or analogous coin makes tin a trade commodity
- from: create_ironworks:steel_ingot (c:ingots/steel) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the obvious structural alloy for airframe construction — riveted steel hulls require Create-processed steel, making airship builds cost real metallurgy
- from: create_ironworks:bronze_ingot (c:ingots/bronze) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: steel is the correct structural alloy for airframes (mid-tier); bronze is softer and would dilute the scarcity signal — use steel for M-23, keep bronze as a tool/gear material only to avoid redundancy
- from: create_ironworks:steel_ingot | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: steel's depth is already expressed through the alloy chain (tin+iron→bronze, + coking coal→steel via create:mixing); stacking a sequenced_assembly layer on top inflates cost without GregTech-style payoff — the alloy chain IS the depth
- from: create_ironworks:tin_ore (regional worldgen) | via: scarcity framing | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is seasonal reagents — tin ore is regionally scarce but not season-locked; this is a mis-motif. The scarcity pressure is expressed through M-08 (coin loop) already.
- REWORK: dossier already lists economy (M-08) and survival as candidates; the steel→aeronautics (M-23) link is the key addition this pass finds.

## kambrik   [anchors: support/library (1)]
- LEAVE — Kotlin utility library; no gameplay surface, no items, no content to weave.

## sablecollisiondamage   [anchors: support/aeronautics (1)]
- LEAVE — physics behavior addon; no items/loot/methods. Its presence enriches aeronautics PvPvE combat but has no material surface to route.

## immersive_paintings   [anchors: decoration/support (1)]
- LEAVE — pure player-expression decorative mod; no foreign materials to route. The dossier is correct: any forced Create-frame or economy edge would be busywork with no "of course" player hook.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: dungeons-and-taverns loot tables (taverns, towers, dungeon chests) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding weave-relevant drops (rare mob drops redeemable at bounty board, or coin bags) into tavern/dungeon chests connects exploration loot to the coin economy — loot hunting pays
- from: dungeons-and-taverns tavern cartographer | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); and the tavern cartographer trades vanilla emeralds, not Numismatics coin — a vanilla trade loop is a separate circuit that doesn't advance the player-run currency. Flag for 0.9 economy review only.
- from: dungeons-and-taverns trial vaults | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding magic reagents (ars source gems, iron's arcane essence, occultism soul residue) into the exclusive trial vault loot tables makes exploration a path to magic resources — adventure feeds production
- REWORK: existing survival anchor is correct; no existing connections to critique. The two loot-seed links (M-14 economy + M-02 magic) are the second-anchor routes.

## accessories_compat_layer   [anchors: support (1)]
- LEAVE — compat shim translating Curios/Trinkets API onto Accessories; no items/content of its own. The wearables that might weave live in the host mods.

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — client chat-UI cosmetic; zero content surface.

== CHUNK COMPLETE ==
