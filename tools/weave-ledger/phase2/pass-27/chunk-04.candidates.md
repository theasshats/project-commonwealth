# Phase 2 candidates — chunk-04

## controlling   [anchors: support/QoL (1)]
- LEAVE — pure client keybind-search UI; zero items/blocks/methods; no material surface to weave.
REWORK: n/a (1 anchor, support role — no connections to flag).

## prickle   [anchors: support/library (1)]
- LEAVE — JSON config-format library; zero items/blocks/methods; nothing to route.
REWORK: n/a.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (mob-drop Soul Furnace output) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace already converts mob-drops into soul-state reagents — running Crystallized Blood through Occultism's spirit-fire routes that dark-alchemical matter straight into the magic web, no new lore needed.
- from: companions:soul_gem (diamond→soul gem via Soul Furnace) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: soul gems are natural Ars imbuement catalysts — a gothic-alchemical mod's gems feeding arcane infusion reads as completely coherent.
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: numismatics mint (create:pressing) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-sourced Relic Gold is exactly the scarce regional metal the player-mint motif wants — the fighter who kills the Pontiff controls a premium coin input, gating the medium.
- from: companions:copper_coin / nether_coin / end_coin (in-mod coins) | via: recipe bridge | to: economy | motif: no-motif | verdict: REJECT | reason: bridging a private coin system into Numismatics is a 1:1 round-trip swap with no value gradient; the coins exist in-mod and don't map to the player-minted-currency motif in a meaningful way. Bare sell link.
- from: companions:voltaic_pillar / tesla_coil deco | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier itself flags this WEAK — these deco blocks have no thematic tie to the create spine beyond "copper inside"; forcing a crush-recycle here is a shallow edge that doesn't advance the loop. Skip in favor of the magic anchors above.
REWORK: existing 2nd-anchor candidates in dossier flagged M-09 (luxury→coin) as STRONG — M-09 is RETIRED; that row must be replaced by the M-08 (Relic Gold → player-mint) accepted above.

## multipiston   [anchors: support/colony-dep (1)]
- LEAVE — MineColonies dependency block; moves world blocks, no items/methods, no coherent weave surface.
REWORK: n/a.

## bcc   [anchors: support/QoL (1)]
- LEAVE — connection-handshake version-check utility; zero items/blocks/methods.
REWORK: n/a.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — loading-screen tip UI; zero items/blocks/methods.
REWORK: n/a.

## securitycraft   [anchors: support/utility (1)]
- from: securitycraft reinforced blocks (block_reinforcing_recipe) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: requiring Create-made alloy plates as the reinforcing agent ties base-defense directly to the tech spine — you can't lock your base without feeding the machine first. Depth scales naturally (light reinforcing = iron sheet; advanced = steel plate).
- from: securitycraft:sentry components | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: a sentry is a turret, not a Create machine — sequenced-assembly is the deep keystone for Create-first items. Forcing a vanilla-ish security camera/turret through sequenced-assembly is mis-costed and thematically awkward (a sentry is not a flagship build). M-05 via mechanical_crafting is the right tier.
- from: securitycraft:crystal_quartz (unique decorative block) | via: create:crushing → back to quartz | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crystal_quartz is a SecurityCraft-exclusive deco block, not a looted/excess material that needs recycling; crushing it back serves no loop purpose and would be confusing (players would wonder why their deco block disintegrates in a crusher). Not an M-04 case.
- from: securitycraft: advanced scanner / keycard-reader assembly | via: colony research (MineColonies) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: high-tier base security (retinal scanners, block-pocket managers) locked behind MineColonies research creates a genuine colony↔defense dependency — a settlement player can supply base locks that a combat-focused solo player cannot self-craft. Creates trade demand.
REWORK: dossier candidates both flagged WEAK with vague framings (M-08 coin-from-scarcity and M-05); the M-05 above is a concrete route now. M-08 framing in dossier is wrong (it referenced Numismatics sell, not player-mint); retire that row.

## entity_model_features   [anchors: support/rendering (1)]
- LEAVE — client CEM renderer; zero items/blocks/methods.
REWORK: n/a.

## bettermodsbutton   [anchors: support/UI (1)]
- LEAVE — pause-screen UI button; zero items/blocks/methods.
REWORK: n/a.

## supplementaries   [anchors: Create, survival (2)]
- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax is the only bast-fiber crop in the pack; milling it into linen pulp / raw fiber in Create's Mill gives textile players a dedicated Create-chain entry-point that the pure-crafting path doesn't have.
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: ash is a combustion residue already produced by Supplementaries' fire/furnace adjacency; running it through imbuement to yield a minor arcane catalyst (e.g. Ars's "infused ash" stepping-stone) is tonally coherent — alchemists have always used ash.
- from: supplementaries:candy (c:foods/candy) | via: farmersdelight:cooking → sold | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: candy as a consumption sink is already ambient — it's a food; its demand closes naturally. "Candy drives trade demand" is not a distinct loop edge, just restating that food gets eaten. No-motif territory; bare consumption.
- from: supplementaries:safe (locked storage block) | via: securitycraft:block_reinforcing_recipe | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: this would be a cross-mod method-use on a vanilla-crafted block; SecurityCraft reinforces blocks but Supplementaries safe is its own premium block — reinforcing a safe is decorative flavor, not a loop-advancing weave. No clear demand driver emerges.
REWORK: dossier says "already ≥2 pillars; no 2nd-anchor needed" and latent M-09 (retired) flagged as "(not needed)." The M-12 flax-milling and M-10 ash-imbuement accepted above are genuine new edges; dossier's "leave" call was premature for a 270-block mod. OK — core connections sound; extend with these two.

## dragonlib   [anchors: support/library (1)]
- LEAVE — architectury API library; the lone dragonlib:dragon item is a dev artifact.
REWORK: n/a.

## bakery   [anchors: survival (1)]
- from: bakery:baguette / bread products (wheat-based baked goods) | via: create:milling (wheat→flour) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routing bakery's wheat inputs through Create milling for flour means the bakery chain runs through the tech spine — a bread specialist needs the mill running, not just a crafting table.
- from: bakery:apple_jam / strawberry_cake (fruit-tier luxury baked goods) | via: minecolonies hut supply request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies baker's hut (or cook hut) requesting bakery's specialty breads/cakes as colony food supply creates a sustained demand loop — the colony always needs fed, and the bakery specialist fills it.
- from: bakery:glowberry_jam / glowberry_tart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: glowberry-based jam as a magic imbuement input is a reach — glowberries have a natural light-magic vibe, but "jam in an imbuement altar" reads as forced whimsy rather than coherent arcane process. Ash or raw materials are better M-10 candidates; food is already in M-12/M-28 above.
- from: bakery:blank_cake_interaction | via: supplementaries:safe / display mechanic | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: "baker decorates cakes for customers" as a service-for-hire is conceptually M-33 territory but has no method to route through — blank_cake_interaction is a right-click finishing step, not a machine any other mod pulls from. No-motif as a delivery mechanism.
REWORK: dossier flagged M-09 (luxury→coin) as STRONG — M-09 is RETIRED. The dossier's economy candidate needs replacement; M-28 colony-supply above fills that gap properly.

## xaerominimap   [anchors: support/navigation (1)]
- LEAVE — client-side minimap HUD; zero items/blocks/methods.
REWORK: n/a.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the crab claw already extends reach — routing it through arcane imbuement to yield an Ars reach-enhancing glyph component or potion catalyst turns a vanilla-adjacent drop into magic reagent feed without rewriting its identity.
- from: friendsandfoes:copper_golem_head (boss-adjacent rare drop) | via: create:pressing | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the copper golem is not a boss — it's a utility mob; its head drop is a flavor trophy, not a boss-key. Using it as a locked-progression gate (M-15) misrepresents the mob's tier. Power-read: everyday/flavor, not endgame gate.
- from: friendsandfoes copper buttons / lightning rods (copper deco set) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flagged this WEAK. Crushing copper-variant deco back to nuggets is a minor recycling edge with no loop advancement — the copper economy doesn't need this prop. The crab_claw magic link (M-02) is the one real edge.
- from: friendsandfoes:wildfire / illusioner loot (hostile mobs) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire is a fire-elemental hostile — its drops (embers, flame-shards, any hostile loot) fed through Occultism spirit-fire to yield fire-aligned essences is a coherent mob-drop→magic path. Illusioner drops (illusion-cloth?) similarly fit.
REWORK: dossier 2nd-anchor candidates both flagged WEAK with "(don't force)" note; the M-02 routes above survive the red-team more cleanly than the M-04 recycle. OK to accept the magic edges and leave the deco recycle rejected.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item filter utility for Deployers; no material flows, no coherent 2nd-anchor method edge without forcing it.
REWORK: n/a (1 anchor, no existing connections to flag).

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager transport) | via: aeronautics logistics + minecolonies | to: aeronautics/economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the emerald lasso's unique ability to capture and move villagers makes it the enabling item for airship-based colony seeding — flying colonists to a new outpost island requires the lasso; it gates the aeronautics colony-expansion route and creates cross-route dependency (you need a lasso craftsman AND an airship captain to found a remote colony).
- from: moblassos:hostile_lasso (captures injured monsters) | via: occultism:miner / spirit_trade | to: magic | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: a hostile lasso capturing a weakened mob for Occultism spirit-trade is thematically adjacent but the routing is strained — spirit-trade expects specific summoned spirits, not a player-captured mob stuffed in an item. The mechanic doesn't actually map to spirit_trade's method signature. No clean via.
- from: moblassos:golden_lasso (livestock transport) | via: minecolonies colony requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies animal-handler hut that requests golden lassos (or uses them to stock its animal pens) turns mob transport into a colony supply line — ranchers who can fill lasso orders become specialists the colony needs.
REWORK: dossier noted aeronautics link as WEAK (no method to route through); the M-29 framing above is stronger — it's not just a utility synergy but a cross-route gate for remote colony founding. That framing should replace the "WEAK utility synergy" note.

## gamediscs   [anchors: survival/flavor (1)]
- from: gamediscs:processor / redstone_circuit (console components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: a retro arcade console's processor being forced through Create mechanical crafting is tonally discordant — the mod's vibe is whimsical-retro novelty, not industrial tech. Dossier correctly marked this WEAK; the mod is a downtime toy and forcing a tech-spine requirement on it adds friction to a novelty without loop benefit.
- LEAVE — novelty/flavor mod with cosmetic-only outputs; no material flows through it; the disc-from-skeleton-kill mechanic is the entire loop.
REWORK: n/a (1 anchor, support/flavor role; no connections to flag).

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — chat-signature networking utility; zero items/blocks/methods.
REWORK: n/a.

## kubejs   [anchors: support/tooling (1)]
- LEAVE — the scripting engine that authors weaves; it is the tool, not a weave target. Weaving KubeJS itself would be circular.
REWORK: n/a.

## s_a_b   [anchors: Create, aeronautics (2)]
- from: s_a_b:hardsteelblock / doublesteelblock (highest armor tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: hard and double steel armor plating for capital-ship hulls should take more steps than a compacting press — a sequenced-assembly chain (form steel billet → press plate → anneal → assemble layered plate) gates the toughest blocks behind the deep Create chain, scaling depth with the block's toughness tier.
- from: s_a_b lightsteelblock / basic steelblock (everyday armor tier) | via: create:compacting | to: Create | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: the existing compacting inbound weave already covers this — basic steel plate as a structural airframe material (M-23) formalizes the link already in place; flagging it accepted as the structural-alloy seam.
- from: s_a_b:hardsteelblock (highest tier) | via: createbigcannons munition recipes | to: aeronautics/economy | motif: M-34 | power: endgame | tone: ok | verdict: REJECT | reason: s_a_b is a defensive plating mod, not a munitions mod; routing armor blocks into the munitions chain is thematically inverted (you plate ships WITH steel, you don't load steel as ammo). Wrong direction.
REWORK: dossier says "already ≥2 pillars; no 2nd-anchor needed; deepen via M-06 optionally" — M-06 accepted above for endgame tier; M-23 formalized. OK — connections sound; two concrete new-tier edges added.

== CHUNK COMPLETE ==
