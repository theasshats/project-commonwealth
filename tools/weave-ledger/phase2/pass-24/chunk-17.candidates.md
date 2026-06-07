# Phase 2 candidates — chunk-17

## resourcefulconfig   [anchors: support (1)]
- LEAVE — zero-surface config library; no items, no methods, no content to route. Sanctioned support role.

## bigsignwriter   [anchors: support (1)]
- LEAVE — client-UI utility; no items, no methods, no material surface. Sanctioned support role.

## fishingreal   [anchors: survival (1)]
- from: fishing-catch entities (live fish spawned by reel-in) | via: createfisheryindustry:bait_trap or createfisheryindustry:peeling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fishingreal owns no items and registers no methods — the content surface belongs to the fishing-content mods (createfisheryindustry, aquaculture, naturalist) that sit beneath it. Weaving here would really be weaving those mods, not this one. This is a behavior shim with zero material of its own.
- LEAVE — behavior-only tweak (item→entity redirect); no items, no recipe methods, no loottable of its own. Any fishing-chain weave belongs to createfisheryindustry / farmersdelight / fish-mob mods.

## fzzy_config   [anchors: support (1)]
- LEAVE — Kotlin config engine; zero items, no recipe methods, no gameplay. Sanctioned support role.

## create_confectionery   [anchors: Create, survival (2)]
- OK — connections sound. The cocoa→chocolate chain is firmly in Create (crushing/mixing/pressing/filling) and the candy/hot-chocolate outputs land squarely in survival-pressure (food/effects). Already at 2 anchors.
- from: create_confectionery:bar_of_ruby_chocolate / special chocolates | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: chocolate as a surprisingly effective alchemical carrier — ruby chocolate imbuement-catalyses a minor Ars spell focus, the sweetness masking its arcane potency; flavour-fit (confectionery + alchemy both deal in concentrated essences), not forced.
- from: create_confectionery:effect_candy (* speed/saturation/regen) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Iron's alchemist cauldron is for potion/spell brewing, and candy-as-potion-ingredient is a stretch in tone (confectionery ≠ alchemical); the ruby-chocolate imbuement candidate above is the cleaner magic hook — don't double up with a weaker option.
- from: create_confectionery:caramel / hot_chocolate | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already an existing anchor (candy outputs feed survival pressure). Adding a cooking sub-step would be depth-padding a basic food; no distinctive loop advance.

## supermartijn642configlib   [anchors: support (1)]
- LEAVE — config API library; zero items, no recipe methods, no gameplay content. Sanctioned support role.

## doubledoors   [anchors: support (1)]
- LEAVE — door-interaction convenience behavior; no items, no methods. Sanctioned support role.

## blueprint   [anchors: support (1)]
- LEAVE — Team Abnormals code library; the one item (template_chest) is too trivial to anchor a pillar. Sanctioned support role.

## occultism   [anchors: magic (1)]
- REWORK: current anchor count is 1 (magic); the dossier lists Create and economy as candidates but does not record them as anchors. All three candidates below are real — this mod should be at 3 anchors once authored.
- from: occultism:silver_ingot / occultism:iesnium_ingot | via: create:crushing (occultism:crushing parallel) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the spirit-world's metals double in the crusher just like overworld ores — the Djinni's labor echoes Create's industrial grind; thematically coherent (both are systematic resource extraction). Occultism's own crushing method is a parallel ore-doubler, and occultengineering already bridges rituals to Create machines — this is the natural Create anchor.
- from: foreign mob/boss drops (blaze, amethyst, echo shards, etc. in occultism's huge c:tag intake) | via: occultism:spirit_fire / occultism:ritual | to: magic | motif: M-11 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: casting a foreign drop into spirit-fire transmutes worldly material into demonic essence — the canonical "organic drop → magic currency" loop; already flagged STRONG in dossier. This is occultism's primary cross-system role in the magic web.
- from: occultism:spirit_trade (summoned trader acquires otherworld goods) | via: occultism:spirit_trade → numismatics sell | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: a bound Djinni spirit-trader is the pack's only source of certain extraplanar materials — specialists who invest in summoning become the sole suppliers of those goods, making summoning a distinctly economy-relevant specialization (not just "sellable item" — the spirit_trade is the only acquisition path, so it's a genuine scarcity-gated distribution node). This is M-18 (summoned-spirit logistics) not a bare generic sell.
- from: occultism:spirit_fire | via: create:haunting (Create's soul-fire transmutation) | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: haunting and spirit_fire are two faces of the same soul-flame — routing items through create:haunting produces soul-adjacent outputs that feed occultism rituals, a natural Create→magic seam. This is the M-19 "haunting seam" motif exactly.
- from: occultism:djinni_essence / marid_essence | via: numismatics mint (sell via economy) | to: economy | motif: M-08 | power: endgame | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The spirit_trade candidate (M-18 above) already provides the structurally distinctive economy link; a bare "sell essences for coins" is low-signal on top of it.

## ferritecore   [anchors: support (1)]
- LEAVE — memory-optimization runtime mod; zero items, no recipe methods, no content. Sanctioned perf/support role.

## miningspeedtooltips   [anchors: support (1)]
- LEAVE — tooltip display tweak; no items, no methods. Sanctioned support (client UI/QoL) role.

## notenoughanimations   [anchors: support (1)]
- LEAVE — client cosmetic animation mod; no items, no methods, no gameplay effect. Sanctioned support (visual polish) role.

## woodworks   [anchors: survival (1)]
- from: woodworks:*_boards / *_bookshelf / *_ladder (wood deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: woodworks' abundant wood-deco output has a natural recycle path — deco boards crush back to planks/sawdust + an XP nugget via Create's crusher, making the deco palette part of the Create processing web rather than a dead end. M-04 (Create recycles deco, lossy) is the exact motif. The woodworks:sawmill method already exists as a parallel cutting method; the create:crushing link adds Create as a 2nd anchor without forcing anything.
- from: woodworks:*_boards / *_chest | via: create:cutting (woodworks:sawmill as Create-parallel method) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier already flags this as WEAK — overlapping the sawmill outputs with create:cutting is cosmetic recipe-weave and doesn't advance the loop; M-04 crushing (above) is the stronger and more distinctive link.
- REWORK: existing single anchor (survival) is correct but thin — survival as "decoration/building palette" is the weakest form of survival anchor. The M-04 crushing candidate above is the right fix to add Create and lift this to 2 anchors.

## patchouli   [anchors: support (1)]
- LEAVE — guide-book framework library; the items are only cover-book tokens for dependent mods' guides. No material surface for cross-system routing. Sanctioned support (docs/library) role.

## architectury   [anchors: support (1)]
- LEAVE — cross-platform modding API; zero items, no methods, no gameplay content. Sanctioned support role.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections sound. The cardboard plane is firmly in both Create (uses create:cutting + create:deploying, extends Create's package system) and aeronautics/logistics (autonomous aerial delivery = the economy's physical movement arm). Already at 2 anchors.
- from: cmpackagecouriers:cardboard_plane | via: aeronautics long-range cross-dimension delivery | to: economy | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: M-18 is summoned-spirit logistics, not generic airmail. Cross-dimension delivery is already the aeronautics anchor. Adding an economy 3rd anchor via "couriers enable remote trade fulfillment" is adjacency reasoning, not a structural loop-advance. Already 2 strong anchors — don't dilute.

## toomanypaintings   [anchors: support (1)]
- LEAVE — pure decoration (painting selection GUI); no items with material identity, no recipe methods. Sanctioned support (decoration palette) role.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (as a boss-key gate component in a high-tier Create machine) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's crystallized cold is the key reagent a high-tier Create cryo-compressor (or refrigeration unit) can't be assembled without — the boss fight earns you the gate ingredient; combat-specialist and Create-technician must cooperate. M-15 (boss-key unlock) is the exact motif; the ice_crystal's endgame tier and elemental-cold theme make it a thematically coherent gating ingredient (the crusher can't replicate crystallized monster essence).
- from: mowziesmobs:earthrend_gauntlet / wrought-metal artifacts | via: occultism:spirit_fire / ars_nouveau:imbuement | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut's earth-iron is saturated with primal violence — transmuting an earthrend fragment in spirit-fire yields an afrit essence (fire meets forged earth); or imbuement through the enchanting apparatus charges it into an Ars catalyst. Thematically the Mowzie artefacts are primal-magical objects, so landing in the magic web is coherent. M-11 (ritual/spirit transmutation sink) / M-02 (mob-drop reagent).
- from: mowziesmobs:sol_visage (Barako drop) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: the imbuement/spirit_fire candidate above covers the magic anchor cleanly; routing yet another artifact through a different magic method in the same pass risks recipe overcrowding. Flag as a second option for Phase 3 to consider, but don't accept two separate boss-drop magic candidates for the same mod in one pass — pick the stronger route (spirit_fire/imbuement above, M-11) and reject the weaker.
- from: mowziesmobs boss kills | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid-endgame | verdict: REJECT | reason: generic-sellable (combat drops paying coin) — economy de-emphasis. The two anchors above (create M-15 + magic M-11) are the distinctive links; a bounty payout is non-distinctive.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. This is an integration-glue mod whose explicit job is bridging MineColonies workers to Create stock-link / IE / farming mods. It already holds 2 anchors (survival-farming via colony jobs + Create via the Courier↔Stock Link bridge). No new edge to force.
- from: minecolonies_compatibility courier (Create Stock Link bridge) | via: Create package / stock-ticker → cmpackagecouriers delivery | to: aeronautics | motif: M-18 | power: mid | tone: ok | verdict: REJECT | reason: the aeronautics link would be indirect (colony courier → stock link → create package → cardboard plane) and is really cmpackagecouriers' anchor to claim, not this mod's. Forcing it here adds complexity without a clean structural claim on this mod's own content. 2 anchors are sufficient.

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — server sleep-quorum behavior tweak; no items, no methods, no gameplay content. Sanctioned support (multiplayer QoL) role.

== CHUNK COMPLETE ==
