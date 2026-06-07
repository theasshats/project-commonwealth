# Phase 2 candidates — chunk-08

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw boss drop) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice crystal is the keystone component in a deep Create sequenced-assembly chain for a cryo-cooling mechanism — surviving a boss earns you automatable cold tech
- from: mowziesmobs:earthrend_gauntlet / wrought-metal pieces (Wroughtnaut drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: feeding the wrought iron artifact into Occultism spirit-fire transmutes the ancient metal into a spirit-essence; the mobs' mythic theme maps cleanly onto the occult ritual
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: M-11 via occultism is the cleaner one-weave entry to magic; two separate magic sinks on the same boss drop dilutes scarcity without adding loop-advancement. One boss → one magic route is enough. Keep the spirit_fire weave; reject the imbuement duplicate.
- from: mowziesmobs kills / boss drops | via: bountiful board → numismatics | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional and leans-no; more importantly, the stronger loop is boss-drop → Create/magic keystone (M-06/M-11), not coin. Coin payout feels thin against a spectacle boss.
REWORK: no existing connections beyond survival(1); the two ACCEPTs above add the second anchor (create + magic routes; player needs only one; keep both proposals for Gate-2 selection).
OK — 1-anchor mod, two new ACCEPT rows proposed above.

## kubejs_create   [anchors: support (1)]
LEAVE — pure scripting bridge (Create recipe API); no items, no methods, no material surface to weave. Correct anchor is support/tooling.

## jei   [anchors: client UI / support (1)]
LEAVE — recipe viewer only; no items, blocks, or connective methods. Load-bearing for a Create pack (don't swap to EMI), but structurally unweavable.

## towntalk   [anchors: support (1)]
LEAVE — audio flavor for MineColonies colonists; zero items, zero methods. Rides on MineColonies' existing weave; no independent edge possible.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor (fallen-star block) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a meteor fragment crushed in a millstone yields iron nuggets + a nickel/stardust byproduct — fallen stars become a minor Create feedstock; the "ore-from-sky" vibe fits the cosmic brand
- from: Blood Moon / Blue Moon event (world-state) | via: event-gating a ritual — occultism:ritual only completable under the active moon | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Occultism summoning rituals are only possible under a Blood Moon or Blue Moon; celestial timing becomes a real constraint, not just atmosphere
- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: space moss is ambient/worldgen deco with no notable power tier; using it as an imbuement component would gate a mid-magic step on cheap deco material, violating the cost model (depth scales with power). Low-power material → light step is fine, but the thematic stretch (alien moss → arcane catalyst) is weak enough to fail the red-team — a player would not say "of course."

## gamediscs   [anchors: survival (1)]
LEAVE — pure novelty/entertainment toy (playable arcade minigames); all outputs are cosmetic and the mod's disc-acquisition gimmick is self-contained. Forcing a coin edge on a Pong disc is contrivance. The component items (processor, battery) could theoretically be Create-crafted, but the mod has no method surface and the result is a dead-end cosmetic — not worth it.

## sound_physics_remastered   [anchors: support/client (1)]
LEAVE — client audio engine; zero items, blocks, or methods. Nothing to weave.

## multipiston   [anchors: support (1)]
LEAVE — MineColonies/Structurize dependency block; moves world blocks, produces nothing, consumes nothing. No coherent weave edge; colony-internal utility.

## steves_lava_chicken_music_disc   [anchors: support (1)]
LEAVE — single joke music disc; forcing any recipe or coin edge onto a meme item is noise.

## opacpvp   [anchors: support (1)]
LEAVE — PvP rules / command mod; zero items, zero methods. Serves the cooperative premise directly but has no wireable surface.

## create_pattern_schematics   [anchors: create (1)]
LEAVE — Create build-automation QoL (schematic tiling); the three items it registers (pattern_schematic, empty_pattern_schematic, quill) are purely tooling, not materials in the loop. No coherent 2nd anchor.

## geckolib   [anchors: support / library (1)]
LEAVE — animation API; zero items, zero methods. Hard dep for the pack's mobs/magic; not weavable.

## createimmersivetacz   [anchors: create (1)]
- from: createimmersivetacz:twelve_gauge_shell / finished rounds (bulk ammo) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-automated ammo factory making bulk rounds is exactly the "arms dealer" specialization the economy pillar wants — mass-produced combat goods flowing through player-run markets
- from: createimmersivetacz:gun_barrel / firing_mechanism (finished gun parts) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: gun PARTS as trade goods is weaker than finished ammo — parts are intermediate, not consumable; a bounty/sell target is more coherent for completed guns (TACZ side), not the intermediate parts. The ammo M-09 ACCEPT is the right lever. Keep only one economy entry per mod at this stage.
REWORK: no existing connections; ACCEPT above adds economy as 2nd anchor (create → economy via ammo trade).

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: frozen undead flesh transmuted in Occultism spirit-fire yields a cold-essence reagent — the bestiary's themed drops finally have an arcane sink
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma zombie flesh into spirit-fire yields a heat-essence; thematically clean (fire→fire occult)
- from: rottencreatures:corrupted_wart | via: ars_nouveau:crush | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: the swamp-zombie's corrupted wart crushed in an Ars Nouveau grindstone yields a tainted source powder — a mob-drop reagent that feeds the magic spine
- from: rottencreatures themed drops | via: create:haunting | to: create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: M-19 (haunting) is the soul-fire bridge; routing rotten flesh through haunting is coherent mechanically but produces what? Without a meaningful output item the edge is an orphan. The occultism/ars routes (M-11/M-02) already give the drops a clear magic destination. Don't stack a weak Create edge on top just to claim a 3rd anchor.
REWORK: no existing connections; three ACCEPTs above add magic as 2nd anchor (multiple drops, two methods).

## imfast   [anchors: support (1)]
LEAVE — movement-validation server patch; no items or methods. Functionally serves aeronautics (lets ships exceed vanilla speed limits) but is structurally a fix, not a resource node.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, honey_cocktail, melon_cocktail, etc.) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: tropical cocktails are a finished luxury good — a beachside tavern sells them for coin; the processed-drink → sell model is exactly M-09 and the tone (vacation trade post) fits the economy pillar's character
- from: beachparty:mini_fridge (ice-block output) | via: create:mixing or create:compacting as cold-step feedstock | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mini_fridge is already functional as a vanilla-adjacent ice source; routing it explicitly through Create mixing adds a step to a cheap everyday resource and would violate the cost-model guardrail (basics ≈ 3×, not gated deeper). The tone clash is mild but the depth mismatch is the real kill.
REWORK: no existing connections; ACCEPT adds economy as 2nd anchor.

## foodeffecttooltips   [anchors: support / client (1)]
LEAVE — tooltip rendering only; no items, no methods, zero content surface.

## createthreadedtrains   [anchors: support / performance (1)]
LEAVE — server-side threading patch for the Create railway tick; no items, no methods. Indirectly supports aeronautics/logistics viability but is structurally a fix.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Capelobo's claw (werewolf-cryptid folklore) transmuted in Occultism spirit-fire fits the "dark organic matter → spirit essence" loop; the South-American folklore/spirit-world theme makes the occult routing feel inevitable
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is a classic magic reagent (fossilized organic, trapped essence); running it through an Ars Nouveau imbuement apparatus as an arcane catalyst is thematically sound and gives the amber a non-cosmetic purpose
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber already has a stronger weave as a magic reagent (M-10 ACCEPT); adding a coin-sell on top fragments scarcity (same item being both a magic input and a trade good creates arbitrage pressure). Pick magic over coin for a mid-tier unique drop.
- from: brazil_legends:big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: the claw (M-11 ACCEPT above) is the stronger thematic anchor for Occultism; stacking a second spirit_fire weave on another mundane drop (big_tongue) from the same mod produces two reagent inputs from the same anchor — diminishing returns and diluted scarcity. Keep the claw as the single spirit_fire entry for this mod.
REWORK: no existing connections; two ACCEPTs add magic as 2nd anchor.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts brass/copper variants (train_step_brass, train_slide_brass, brass_sliding_window) | via: create:pressing → crafting (brass plates → components) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: brass train steps and windows requiring Create-pressed brass sheets makes the detailing fit the Create fabrication chain naturally — "of course you'd press the brass first"
- from: create_train_parts blocks | via: numismatics sell / passenger-fare economy | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and leans-no; and train-step blocks are structural deco, not a sellable product. No coherent player-facing coin loop here.
REWORK: no existing connections; ACCEPT adds create as 2nd anchor, making this aeronautics + create — a natural pairing for train detailing blocks.

== CHUNK COMPLETE ==
