# Phase 2 candidates — chunk-12

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Otherside soul reagents transmute in Occultism's spirit-fire into occult essences — the underworld feeds the dark-magic web.
- from: deeperdarker:heart_of_the_deep / warden_carapace | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Warden-tier drops imbued into an arcane reagent; the deepest boss earns a magic role without being trivialized.
- from: deeperdarker:gloomslate / sculk_stone (block families) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Gloomslate crushes back to gravel + XP nugget — the vast Otherside block palette feeds Create recycling, consistent with existing inbound create:crushing weave.
- from: deeperdarker:soul_dust (Otherside-only) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Soul-dust is thematically stronger as a magic-input (M-11 accepted above); a coin-sell on top is redundant and dilutes the "dangerous material deserves a powerful process" story. Keep it as a magic reagent only.
REWORK: OK — survival anchor is real (hostile underworld dimension + gear tier); no existing cross-pillar connections to rework yet (none authored).

## sound_physics_remastered   [anchors: support/client (1)]
- LEAVE — zero items/blocks/methods; pure client audio renderer. Nothing to route.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen with no items, no methods, and no loot table of its own (65 c:tags are biome-keying surfaces; the loot=yes flag is the biome-structure chest pool, not mod-owned loot). Its weave is purely structural — regional biome variety underpins ore-scarcity geography — not a recipe edge. Forcing an edge would be arbitrary.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone output) | via: create:deploying / contraption logic (KubeJS config-tie) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wire the season_sensor's redstone signal into a Create Gearshift/Contraption so automated farms physically switch crops or shutter greenhouse glass by season — the calendar drives the machine.
- from: seasonal crop scarcity (out-of-season produce, config-gated) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: The scarcity effect is emergent (any crop mod participates implicitly once crops are registered in the fertility list); there is no Serene Seasons item to route through Numismatics — the sell table would hang on vanilla/FD crop items, which belong to those mods' economy connections, not Serene Seasons'. This edge is a property of other mods, not of this one.
REWORK: OK — single survival anchor is correct and dossier is accurate. No existing connections to rework.

## ldlib2   [anchors: support/library (1)]
- LEAVE — pure developer library (UI/rendering/sync); 2 grounded blocks and 1 item are dev/test stubs with no gameplay surface. Nothing to route.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item builder QoL addon (shuffle filter + weighted variant) that modifies Deployer behavior; no material throughput. No coherent 2nd anchor without forcing it (the items themselves cannot be a meaningful reagent or sink anywhere).

## tide   [anchors: survival (1)]
- from: rare/biome-locked fish (e.g. tide:abyss_angler, void catches) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Biome-locked and seasonally gated fish become natural trade goods — a fisher specialist can supply the server what no one else can catch.
- from: tide raw fish (c:foods/raw_fish stream, large volume) | via: create:milling or farmersdelight:cutting → fishmeal / fish oil intermediate | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Run the catch through a Create mill or FD cutting board to get fishmeal fertilizer or fish oil — the fishing line feeds an automation chain rather than dead-ending at the cook.
- from: tide:abyss_angler / deep void catches | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: Exotic fish as arcane reagents — thematically strained (fish do not "feel" magical in this pack's vibe; soul/sculk materials from DeepDarker fill that abyssal-horror niche more coherently). Forcing an imbuement on a fish stretches M-02 past the "player would nod at this" bar.
REWORK: OK — survival anchor is solid (biome+seasonal gated catch). Existing FD:cutting inbound is real.

## emojitype   [anchors: support/client (1)]
- LEAVE — zero items/blocks/methods; client chat input helper only. Nothing to weave.

## multipiston   [anchors: support/dependency (1)]
- LEAVE — MineColonies/Structurize internal dependency block. Moves world blocks; no item throughput, no material surface, no recipe join keys.

## simplehats   [anchors: support/cosmetic (1)]
- from: rare simplehats hats (cosmetic wearables, from boss/loot drops) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A rare hat is exactly the kind of vanity luxury a player pays coin for — the hat economy plugs into Numismatics as a cosmetic goods layer without touching the tech/magic webs.
- from: simplehats:custom_hatscraps (hat recycling) | via: loot-seed into boss/dungeon loot tables | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty-board combat→coin; hat scraps don't fit that routing cleanly (they're crafting inputs, not a bounty reward). The economy hook via M-09 (luxury→coin, above, ACCEPT) is already the right motif here. Seeding hat scraps into loot is a delivery detail for M-09, not a separate M-14 edge.
REWORK: OK — cosmetic support role is correctly flagged; the single ACCEPT above is the one coherent pillar extension.

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies colony-produced food (apple_pie, baked_salmon, bread, soups) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony kitchens produce food that can be traded for coin — the settlement becomes the server's food-supply node, feeding the economy pillar naturally.
- from: minecolonies:ancienttome (research unlock / boss-adjacent progression item) | via: gated machine recipe (KubeJS boss-key mechanic) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: The ancienttome is already the colony's internal research gate (University progression); repurposing it as a Create machine unlock conflicts with its defined role in M-05 (colony is the on-ramp, not the boss-gate). Mis-costed per dossier design note: "Deeper Create tech is gated BEHIND colony research per design." Don't double-use the tome here.
- REWORK: OK on existing connections (survival + Create, M-05 authored); the food→economy link (M-09 ACCEPT above) is a valid incremental 3rd touch; no rework needed on current connections.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — zero items/blocks/methods; config API only. Nothing to route.

## voicechat   [anchors: support/comms (1)]
- LEAVE — zero items/blocks/methods; server-side proximity voice transport only. Nothing to weave.

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack that deepens the Create pillar; no items of its own to route into another pillar. Its contribution is internal Create-spine depth, not a bridge. Treat as support-tier Create content.

## domum_ornamentum   [anchors: decoration/support (1)]
- from: arbitrary modded stone/wood blocks (fed as main material to architects_cutter) | via: domum_ornamentum:architects_cutter | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-processed stone (andesite alloy surface, processed stones from create_ultimate_factory) fed into the Architect's Cutter yields framed/shingled deco — the Create palette rounds out as a build-block source, and DO blocks become the decoration reward of Create processing.
- from: domum_ornamentum framed/shingled blocks | via: create:crushing (M-04 lossy return) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Crushing DO's blocks back to raw stone closes a round-trip that DO isn't positioned for (its blocks are the *destination*, not a renewable feedstock). The accepted direction (Create stone → DO) is one-way and correct. Adding a return path creates arbitrage and is specifically flagged against in M-04's anti-arbitrage rule.
REWORK: OK — DO is correctly anchored as support + MineColonies dependency; the one-directional Create→DO palette bridge (M-04 ACCEPT above) is the right incremental link.

## openpartiesandclaims   [anchors: support/protection (1)]
- LEAVE — zero items/blocks/methods; server chunk-claim and party framework only. Nothing to route. Support role explicitly sanctioned.

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:jetpack (brass-tier personal flight tool) | via: loot-seed / MineColonies research gate | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: A "sell a jetpack for coin" story is workable but thin — the mod's two items are personal gear, not trade goods by nature. The dossier already notes this is better treated as a boss-drop/MineColonies gating call (progression), not a new pillar. No coherent 3rd anchor that doesn't force it.
- REWORK: OK — Create + aeronautics anchors are solid and correctly assigned.

## timm   [anchors: support/client (1)]
- LEAVE — zero items/blocks/methods; client-side biome-title UI overlay only.

## aeronautics   [anchors: aeronautics, Create (de facto 2)]
- from: aeronautics:levitite_blend → levitite (zinc-gated bulk lift material) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Levitite is a bulk-consumption scarcity item every shipbuilder needs — a Create-automation specialist who mass-produces it becomes the server's lift supplier; selling it for coin is the natural economy seam.
- from: aeronautics:levitite_blend crystallization step (in-world, code-recipe) | via: KubeJS catalyst requirement (adjacent Occultism/Ars reagent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The crystallization of blend→levitite is currently a bare in-world step — requiring an arcane catalyst adjacent (e.g. an ars source gem or occultism chalk) weaves the aeronautics spine into the magic pillar without restructuring its recipe chain.
- from: aeronautics:adjustable_burner (hot-air lift, burns fuel) | via: config-tie (fuel-tag JSON extending to tfmg:diesel) | to: Create/economy (M-13) | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: Extending the burner's fuel tag to TFMG diesel ties the airship fleet to the industrial fuel supply chain — a refinery specialist fuels the sky.
- from: offroad:tire variants / simulated:rope_coupling (cosmetic/logistics layer) | via: numismatics trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); a tire dye-trade is low-value flavor. The three ACCEPTED edges above cover the substantive aeronautics↔economy and aeronautics↔magic links. Don't stack a provisional-motif weak edge on top.
- REWORK: The dossier lists Create as "de-facto 2nd" — this is correct and jar-proven. No rework needed on inbound M-23/M-24/M-13 slots (those are inbound to aeronautics, authored by other pillars); the three ACCEPT rows above add the outbound economy + magic anchors that were missing.

## exposure   [anchors: Create, survival (2)]
- from: exposure:black_and_white_film / developed photographs | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A printed photograph is exactly a luxury good — framed exploration memories or portraits sell to other players for coin, giving the photography loop a real economic payoff.
- from: exposure:aged_photograph (photograph_aging recipe) | via: supplementaries:antique_book or item_lore | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: Supplementaries antique_book is its own content; routing a photo through an antique_book process to make it "more valuable" is a contrived third step that creates complexity without loop-advancing logic. The clean path is M-09 sell directly, already ACCEPTED above.
- REWORK: OK — Create (sequenced_assembly film development) + survival (hobby/keepsake) are both correctly anchored. The economy extension (M-09 ACCEPT) is the right incremental 3rd touch.

== CHUNK COMPLETE ==
