# Phase 2 candidates — chunk-18

## ctov   [anchors: survival (1)]

ctov is a structure/worldgen mod (0 items, 0 blocks, loot=yes). The only weave surface is seeding
other mods' meaningful drops into its custom loot tables via `via: loot-seed`.

- from: ctov village loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: A rare Numismatics coin blank (or raw regional metal slug ready to mint) seeded into ctov village chests — players loot settlements to seed the minting supply, connecting the exploration reward to the player economy. (Coin blanks come from regional ore already; finding a few in a village chest makes villages an early on-ramp to the economy pillar.)
- from: ctov village loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: A small Ars Nouveau source gem or Iron's Spellbooks scroll seeded into village wizard-building chests — exploration unlocks early magic on-ramps, and the variety of ctov biome-variant villages (Japanese mountain, Halloween, etc.) makes "which village yields which magic hint" a natural discovery loop.
- from: ctov pillager-outpost loot tables | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: A rare boss-drop precursor (e.g. a fragment toward a Create/combat unlock) seeded into outpost captain chests — clearing outposts is already combat-survival pressure; giving them a useful mid-tier drop ties exploration danger to the production supply chain.
- from: ctov village/outpost loot | via: loot-seed | to: economy (cross-route) | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: M-29 is a recipe-cross-route (requiring one route's output inside the other route's recipe); loot-seeding into structures doesn't compose a cross-route dependency — that's just enriching found loot, already covered by the M-08 and M-34 candidates above. No independent M-29 surface here.

REWORK: The dossier lists 0 2nd-anchor candidates (says "leave" on a mod with loot=yes), which conflicts with the briefing's explicit instruction that a loot-bearing structure mod is NOT a LEAVE candidate — reach for a loot-seed first. The three ACCEPT rows above correct that gap; no existing authored connections to REWORK since none are logged.

## rechiseled   [anchors: support/decoration (1)]

rechiseled is a decoration block mod (3627 blocks, loot=yes) whose sole mechanic is the chiseling
conversion between vanilla-block variants. rechiseledcreate (in-pack companion) routes this through
Create's Mechanical Chisel, giving Create a second decoration sub-anchor. The question is whether a
genuine second system link exists beyond that companion pairing.

- from: rechiseled chiseled deco blocks (stone/metal variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Chiseled stone/metal decorative blocks crush back to raw stone/gravel/dust + an XP nugget (lossy) on a Create Millstone or Crusher — players over-ordering decorative blocks can reclaim material cost, and the loss is the price of changing one's mind. Fits M-04 (Create recycles deco) exactly.
- from: rechiseled stone/brick variants | via: loot-seed | to: survival (structure loot) | motif: M-34 | power: everyday | tone: clash | verdict: REJECT | reason: Seeding decorative stone blocks into dungeon loot is thematically incoherent — players don't loot bricks as rewards; loot-seed is for items with gameplay value. Tone clash.
- from: rechiseled deco blocks (any material) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Decorative texture-swap blocks have no inherent magical valence — imbuing a "planks_bricks" into a magic reagent is a forced edge with no thematic grounding. Tone clash; there is nothing in rechiseled's identity that reads as magic-adjacent.
- from: rechiseled metal deco variants (iron/copper/zinc) | via: create:item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 is the light deploy-upgrade tier; applying a metal deco variant onto a base to "upgrade" something doesn't compose a sensible integration — it would be cosmetic at best and arbitrary at worst. The M-04 crush-back candidate already gives rechiseled its Create link via the stronger and more natural direction. Redundant/weaker; reject.

OK — connections sound: rechiseledcreate companion already provides the primary weave (Mechanical Chisel on Create power). M-04 crush-back candidate strengthens the create anchor. No forced second system edge is warranted; a decoration mod that lives inside the Create pillar via its companion is correctly anchored.

## yungsapi   [anchors: support (1)]

LEAVE — genuine zero-surface library. 0 blocks, 0 items, loot=no. No player-facing content; pure
jigsaw/structure API consumed by YUNG's dependent mods. Nothing to route through any method.

## copycats   [anchors: create (2 — Create-anchored deco)]

copycats is a Create-zinc decoration addon (46 blocks, loot=yes). Dossier correctly identifies it as
already living inside the Create pillar. The question is whether any genuine second-system link exists.

- from: copycats copycat blocks (blank zinc shapes) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Placed copycat blocks (especially the larger ones: copycat_block, copycat_beam) crush back to zinc dust + scrap on a Create Millstone — the builder's recycling path; consistent with M-04 and Create's own philosophy. Copycats already consumes zinc; the crush-back closes the loop.
- from: copycats:copycat_cogwheel / copycat_shaft | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: copycats' copycat_cogwheel is a *decorative* item that mimics the texture of whatever is applied — it's not a functional mechanical component. Routing a purely cosmetic cog into an Aeronautics drivetrain recipe would be thematically misleading (players would expect functional cogs, not texture-copy blanks). Reject; don't lie about the block's purpose.
- from: copycats structural shapes (copycat_beam, copycat_block) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is for load-bearing structural alloys (steel plate, etc.) feeding airframe recipes. Copycat blocks are texture-wrappers built from zinc — they have no structural/material narrative that makes them an airframe input. A player would ask "why does my texture-copy blank go in the hull recipe?" Reject; forced edge.
- from: copycats (zinc consumption) | via: regional ore scarcity | to: economy/scarcity | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: M-30 requires the item's *key input* to be region-locked, making the good itself region-locked and trade-dependent. Zinc is a Create ore subject to regional scarcity by GTMOGS, so in principle copycat blanks *could* be region-locked. But copycats is decoration — the scarcity pressure here is Create zinc pressure broadly, not something unique to copycats. The scarcity link already exists at the zinc level; adding copycats on top doubles-counts without a unique hook. Reject; not a distinct weave.

OK — connections sound: copycats lives cleanly in the Create pillar (zinc consumer, decoration extension). M-04 crush-back gives it a functional Create loop. No genuine second-system anchor presents itself without forcing. Dossier's "leave, already Create" is correct; M-04 crush-back is an additive improvement to the existing anchor, not a new pillar.

## balm   [anchors: support/library (1)]

LEAVE — genuine zero-surface library. 0 blocks, 0 items, loot=no. Multi-loader abstraction API;
no gameplay content. Nothing to route.

## corgilib   [anchors: support/library (1)]

LEAVE — genuine zero-surface library. 0 blocks, 0 items, loot=no. Shared datagen/loot helpers
for dependent mods; no player-facing surface.

## kobolds   [anchors: economy, survival (2)]

kobolds already has two anchors (economy via emerald trading, survival via underground structures/mobs).
The dossier flags one optional third link (magic via M-02 on kobold_skull). Evaluate that and look for
additional weave candidates.

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A kobold skull transmuted in Occultism spirit fire yields a minor spirit essence — the little underground skull-collector's remains feed the occult pipeline. Kobold skulls are a distinct mob-drop with no current use; spirit_fire is the natural transmutation sink for odd organic relics. Thematically: kobolds hoard cursed trinkets, skulls carry latent soul-energy — coherent.
- from: kobolds:kobold_skull | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Both M-02 (spirit_fire) and M-10 (imbuement) consuming the same skull would double-spend the reagent across two magic routes simultaneously. The M-02 / Occultism path is stronger (skull → spirit essence is a more natural fit than skull → source gem); lock M-02 and reject M-10 here to avoid double-spend. (Reagent-ownership: once M-02 is accepted, kobold_skull's connective role is reserved for spirit_fire.)
- from: kobold Prospector enchantment (via enchanter kobold trade) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: M-33 is the service-for-hire motif — a player performs work on another's materials. The Prospector enchant is a *villager-style trade* from a kobold NPC, which is an NPC transaction, not a player-to-player service. The economy link here is NPC-mediated, not player-run. Reject.
- from: kobold Den / Pirate Den structures | via: loot-seed | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: A rare Create-related blueprint fragment or a small batch of a regional ore (usable in Create processing) seeded into Pirate Den kobold chest loot — raiding their underground hideout yields a meaningful production lead. Kobold engineers and captains hoarding useful materials is entirely on-vibe; the Pirate Den especially suits a "treasure chest with something valuable."
- from: kobolds redstone-item trades (engineer kobold) | via: create:crushing or create recipe | to: create | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: The engineer kobold's redstone trades are vanilla NPC trades, not a cross-route recipe dependency. M-29 requires a recipe in one production route needing an input from a different route. A kobold trading redstone is just ambient availability, not a forced cross-route dependency. Reject.

REWORK: Existing connections are sound (economy via emerald trades, survival via underground structures). No mis-costing or lore clash. The two new ACCEPTs (M-02 skull sink, M-15 loot-seed) add a magic weave and a create loot-seed without forcing the existing anchors.

## cloth_config   [anchors: support/library (1)]

LEAVE — genuine zero-surface library. 0 blocks, 0 items, loot=no. Config-screen API; no gameplay
content and no weave surface.

## mru   [anchors: support/library (1)]

LEAVE — genuine zero-surface library. 0 blocks, 0 items, loot=no. Rendering/config utility library
for itsmineblock11's mods; no player-facing surface.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]

LEAVE — genuine zero-surface behavior mod. 0 blocks, 0 items, loot=no. Pure server-side sleep-quorum
tweak; no gameplay content and no weave surface of any kind.

== CHUNK COMPLETE ==

