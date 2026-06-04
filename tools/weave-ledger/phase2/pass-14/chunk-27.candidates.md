# Phase 2 candidates — chunk-27

## kubejs_create   [anchors: support/tooling (1)]
- LEAVE — pure scripting bridge (no items, no blocks, no loot table, no recipe surface). It is the *tool* that authors Create-weave edges for other mods; it is not itself a weave target.

## alcohol_industry   [anchors: Create, survival (2)]
- from: finished liquors (beer/vodka/whiskey/tequila) | via: trade (numismatics sell listing / player shop) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a player runs a distillery, bottles whiskey, and sells it at market — industrial spirits are the definitive luxury good
- from: alcohol_base fluid (intermediate) | via: create:mixing (as a solvent input) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: alcohol_base is already an output of create:mixing/filling — making it a *further* Create input would be a circular pull with no meaningful game object added; the chain terminates cleanly at the Alcohol Boiler
- REWORK: existing survival anchor is sound; Create inbound weave (create:filling + create:mixing) is well-grounded. No rework needed on existing connections.

## mffs   [anchors: Create, survival (2)]
- from: mffs:force_field projection (base-defense utility) | via: loot-seed — seed biometric_card blanks or focus_matrix shards into high-tier structure loot (e.g. stronghold/dungeon) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: mffs already has the gold-standard M-05/M-06 Create weave authored (60-mffs.js); gating it further via loot adds complexity without a clear second pillar gain — loot=yes but the loot surface is internal to mffs, not a place to seed *into*. The dossier explicitly says no new edge needed.
- REWORK: existing M-05 (focus_matrix ← create:electron_tube) and M-06 (projector/interdiction_matrix via sequenced_assembly derpack:incomplete_*) connections are the reference examples for those motifs — rated sound. OK — connections sound.

## dtterralith   [anchors: survival (1)]
- from: dtterralith exotic seeds (jacaranda_seed, maple_seed, cedar_seed, kapok_seed, amethyst_seed, giga_spruce_seed) | via: create:milling (saplings/seeds → wood pulp/dye pigment byproduct) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mill grinding exotic Dynamic Trees seeds yields region-specific wood pulp or dye pigment — biome-tied raw material feeds the Create processing web
- from: dtterralith region-specific logs (e.g. jacaranda, cedar, maple) | via: create:crushing (deco log → gravel + xp nugget, M-04 lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for *deco blocks* (metal/stone deco), not wood; applying a lossy crush to logs is thematically off (Create crushes rock/metal, not lumber) — coherence fails
- from: dtterralith amethyst_seed (biome: amethyst cave biome) | via: ars_nouveau:imbuement (amethyst-attuned seed as a magic catalyst input, route through attunement method) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: the amethyst-cave tree seed is a natural attunement catalyst — drop it into an imbuement altar to refine a resonant crystal component

## particlerain   [anchors: support/client (1)]
- LEAVE — zero content surface (no items, no blocks, loot=no). Pure client-side particle rendering; no material to route and no method that could consume it.

## copycats   [anchors: Create (1 — Create-adjacent)]
- from: copycats:copycat_panel / copycat_slope / copycat_beam | via: create:item_application (apply a magic-infused dye or wax onto a copycat blank to produce a permanently-tinted or enchanted copycat block) | to: magic | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (Deploy-application upgrade) is about upgrading a *functional* item; permanently tinting a purely aesthetic block via magic is a stretch and adds no pillar-meaningful gameplay loop — theme-fit marginal
- from: copycats blank shapes (zinc-built) | via: create:crushing (M-04 — crush discarded copycat deco back to zinc gravel + xp) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a builder recycles miscut copycat panels through a crusher for zinc grit — the standard Create deco-recycle loop applies perfectly to a zinc-based shape family
- REWORK: dossier's own recommendation is LEAVE for a second pillar. The M-04 recycle edge above is a light, coherent Create-internal edge (not a new pillar but a tighter Create anchor). Existing connection (zinc→blank→skin) is sound — OK.

## bettermodsbutton   [anchors: support/UI (1)]
- LEAVE — pure client UI utility (no items, no blocks, loot=no). Zero content surface; a weave would be fabricated from nothing.

## naturescompass   [anchors: support/QoL (1)]
- from: naturescompass:naturescompass (the compass item itself) | via: create:mechanical_crafting (gate the compass construction behind a Create recipe using precision_mechanism, giving the tech-pillar something useful to build) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: precision mechanism + compass → Nature's Compass; in a scarcity-driven pack, a biome-hunting tool that helps players find rare regional biomes earns its complexity cost — you build it at a Create table
- REWORK: existing recipe is vanilla-only; the M-05 gating above is a net upgrade to coherence (no existing connection to rework, just an addition).

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron (base tier) | via: create:pressing (iron sheet + reinforced paper → glider frame; create:pressing for the sheet step) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: a glider frame is stamped sheet metal — of course you press iron sheets in the Create mill before stitching canvas to them
- from: vc_gliders:paraglider_diamond / netherite (upper tiers) | via: create:mechanical_crafting (multi-part mechanical crafting recipe gating high-tier gliders on Create precision parts) | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: a netherite glider that navigates updrafts needs precision manufacturing — mechanical crafting gates the top tiers appropriately
- from: vc_gliders:copper_upgrade | via: create:item_application (copper upgrade applies via deployer onto the base glider frame, M-20 light-step) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the copper upgrade snaps onto the glider via a deployer's item_application — mechanical assembly at its simplest
- from: vc_gliders gliders (any tier) | via: numismatics trade (gliders as sellable aeronautics gear; a craftsman sells prepared glider frames) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: gliders are tools, not luxury consumables; M-09 is for processed consumables (wine, spirits). A glider doesn't fit the "luxury good → coin" arc. no-motif for a trade-goods-for-tools arc without a better fit; REJECT.

## ctl   [anchors: Create, aeronautics (2)]
- from: ctl:htlb_block / ilb_block | via: createaddition:charging (FE-charge the head/tail lamp assembly before install — an electric priming step bridging Create electricity into rolling-stock lighting) | to: Create (electric tier) | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: a train headlight that auto-switches direction needs a charged capacitor — you charge the HTLB assembly in a Create Addition charger before mounting it
- from: ctl lamps (any) | via: loot-seed (seed a ctl:ilb_block or ctl:panel_ilb into mineshaft/rail-depot loot as salvaged rolling-stock lighting) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no motif covers "loot-seed a functional deco block into vanilla structure loot for survival flavor" — forced edge, no-motif, REJECT-for-review
- REWORK: existing Create inbound (create:sequenced_assembly) is sound. Aeronautics anchor is direct (train/contraption lighting). OK — connections sound.

== CHUNK COMPLETE ==
