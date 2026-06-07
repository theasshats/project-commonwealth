# Phase 2 candidates — chunk-04

## direct_chute   [anchors: create (1)]
- LEAVE — single Create logistics block (zinc chute); no material surface to route through any method. Zinc is already a Create material so no foreign join exists. Aeronautics-logistics tie would be nominal (item chute on a ship is a build choice, not a system connection). Dossier confirms no coherent 2nd anchor.

## jei   [anchors: client-only UI / support (1)]
- LEAVE — pure client recipe-viewer; zero items, zero methods, zero material surface. Load-bearing for Create recipe legibility (JEI kept over EMI specifically for Create processing recipe rendering — see CLAUDE.md) but that is a support role, not a loop anchor. No weave possible.

## resourcefulconfig   [anchors: support / library (1)]
- LEAVE — pure config-framework library; 0 blocks, 0 items, no methods, no gameplay behavior. Genuine zero-content code library; LEAVE is the correct verdict per briefing rules.

## attributefix   [anchors: support / fix (1)]
- LEAVE — pure attribute-cap bugfix; 0 blocks, 0 items, no gameplay content. Enables high-power magic/combat gear to function as designed, but has no material surface to weave. Genuine zero-content library/fix.

## opacpvp   [anchors: support / PvP-rules (1)]
- LEAVE — behavioral PvP-rule mod; 0 blocks, 0 items, no methods, no materials. Serves the cooperative-PvPvE social premise directly but has no content surface to weave. Genuine zero-content behavior mod.

## mcwstairs   [anchors: support / decoration (1)]
- from: stone/brick/blackstone stair+railing variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (deco crushes back to raw/gravel + xp nugget) is established but the dossier itself flags this as WEAK and only worth doing in a wholesale deco-family sweep. 224 block variants at the same basic recipe depth make a bulk pass low value-density — any single stone stair type is not a meaningful material. Defer until/unless a coordinated pass covers all Macaw's/decoration mods together. One-system floor is met by decoration-palette support anchor; no second anchor warrants forcing.
- REWORK: OK — the single decoration-palette anchor is the sanctioned role. No existing connections to review.

## ding   [anchors: support / client QoL (1)]
- LEAVE — client-side audio cue; 0 blocks, 0 items, no methods, no materials. Pure client notification sound. Genuine zero-content behavior mod.

## just_blahaj   [anchors: decoration / flavor (1)]
- from: just_blahaj:blahaj (any variant) | via: create:mechanical_crafting | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: The plush shark is explicitly wholesome/cozy decoration from a real-world cultural object. Putting it through a Create mechanical crafter to recycle into wool or stuffing would be tonally jarring and player-hostile ("you crushed the BLÅHAJ"). The entire point of the mod is the artifact itself, not its materials. Forces an edge onto deliberately organic flavor content — the exact failure mode the briefing warns against.
- from: just_blahaj:glowhaj | via: create:haunting | to: Create/magic | motif: M-19 | power: everyday | tone: clash | verdict: REJECT | reason: Haunting the glowhaj to produce a ghost-shark or soul material would be darkly comedic but deeply clashes with the wholesome/pride-flag vibe of the mod. The glowhaj's glow is a cute cosmetic, not a soul or spirit material. Forcing a soul-fire edge onto an IKEA plush is a tonal defect.
- LEAVE — after red-teaming all candidates: no coherent second anchor. The mod's entire content surface is decorative plushies, and any material routing clashes tonally or is contrived. Dossier assessment stands: decoration flavor support role, no weave.

## createaddoncompatibility   [anchors: support / compat (1)]
- LEAVE — zero-content unification glue mod; no blocks, no items, no player-facing methods beyond the one `tfmg:distillation` recipe it injects to canonicalize plastic. Its entire role is preventing duplicate-item clutter across Create addons. Caution flag from CLAUDE.md (galosphere silver/palladium) does not create a weave candidate — it is an existing-recipe hazard to monitor. No weave surface.

## betterstrongholds   [anchors: survival (1)]
- from: stronghold chest loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: finding a coin stash in the stronghold library's chest signals that someone else already plundered this place — and now that coin is yours to spend; loot tables are the delivery mechanism (Phase-3 datapack edit adding Numismatics coins to dungeon chests), connecting dungeon-danger to the player economy without forcing any item to be crafted.
- from: stronghold chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the stronghold's ancient scholars left behind occult reagents (occultism books, ars_nouveau source gems, iron's spellbook pages); seeding 1–2 magic reagents into appropriate stronghold room types (library, altar, hidden cache) ties dangerous exploration directly into magic progression — the player must brave the stronghold to shortcut the magic grind; via: loot-seed (Phase-3 datapack edit).
- from: stronghold chest loot | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is a boss-key unlock (a boss DROP gates a complex recipe). The stronghold has no boss of its own — it contains the vanilla end portal, but no boss drops a key here. Inserting a generic "stronghold key" fragment as a gate item for a Create recipe would be arbitrary and thematically loose; the motif requires a boss's signature drop. Not coherent without a boss anchor.
- REWORK: OK — single survival anchor is the appropriate starting position. The two ACCEPT loot-seeds above give a clean second anchor (economy via M-08 coin drop; magic via M-02 reagent drop) without forcing any registry items.

## kiwi   [anchors: support / library (1)]
- LEAVE — pure modding library (Snownee's registration/GUI helpers); 0 blocks, 0 items, no gameplay behavior. Genuine zero-content code library.

## mru   [anchors: support / library (1)]
- LEAVE — pure code-sharing library (itsmineblock11); 0 blocks, 0 items, no gameplay behavior. Genuine zero-content code library.

## fusion   [anchors: support / client (1)]
- LEAVE — client-side connected-texture rendering library; 0 blocks, 0 items, no gameplay content. Genuine zero-content visual-rendering library.

## create_jetpack   [anchors: create, aeronautics (2)]
- from: create_jetpack:jetpack (copper→brass tier) | via: create:mechanical_crafting | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: Already at 2 anchors (Create + aeronautics). The dossier's own assessment says "no coherent further weave — leave." The jetpack already uses mechanical_crafting in its recipe, so M-06 would be re-applying depth to something that is already a mid-tier gate. Adding a sequenced_assembly step to the jetpack would over-complicate personal-mobility gear that is supposed to be the Create brass tier's reward, not an endgame chain.
- from: create_jetpack:netherite_jetpack | via: create:deploying | to: Create | motif: M-20 | power: endgame | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) could work thematically — deploying a netherite upgrade onto a brass jetpack. However, the jetpack is already 2 anchors and this is Create-internal depth, not a new system anchor. The value added is marginal; it stays inside the same Create pillar. Depth for its own sake without a new loop connection is not worth authoring.
- from: create_jetpack:jetpack progression tier | via: MineColonies or boss-drop gate | to: economy | motif: M-15 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: the jetpack is the first personal-flight item and a meaningful power threshold — gating the brass-tier jetpack behind either a MineColonies mechanic's part or a mid-boss drop (the high-tier-fork principle from SYSTEMS.md §3) anchors personal flight behind the progression loop rather than just a direct brass craft; this adds the economy pillar via the high-tier-fork mechanism. Via: KubeJS recipe gate (Phase-3 KubeJS edit); the exact boss/colony part is a Phase-3 decision.
- REWORK: OK — Create + aeronautics anchors are well-founded. The M-15 gate candidate above adds economy as a third anchor via the progression-fork without changing the crafting recipe's depth in the wrong direction.

