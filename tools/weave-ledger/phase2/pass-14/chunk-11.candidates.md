# Phase 2 candidates — chunk-11

## s_a_b   [anchors: Create, aeronautics (2)]
- from: s_a_b:hardsteelblock / doublesteelblock (blast-armor plating tiers) | via: recipe (create:sequenced_assembly) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: hardened armor plating assembled through a sequenced press-and-anneal chain becomes the structural hull material for high-tier Aeronautics warships — cost matches the firepower it stops
- from: s_a_b:lightsteelblock (entry-tier armor block) | via: recipe (create:compacting, already used) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: lightweight steel paneling is the cheapest airframe cladding — one step up from bare iron, already in the steel chain
- from: s_a_b:blacksteelblock / colorsteelblock (16-color deco-plates) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: scrap armor plating crushed back to steel dust + experience nugget — a lossy but coherent recycle path
- REWORK: existing Create anchor is solid (compacting/mixing already used). The aeronautics anchor is listed but no explicit M-23 hull recipe exists yet — that's the gap; the ACCEPT above closes it.
- OK — no forced or arbitrary edges; both pillars are thematically tight.

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty:jade_ore / deepslate_jade_ore | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: jade ore through the crusher yields crushed jade + a small aquamarine byproduct — ore-doubling folds the Eastern gem tier into the Create processing web
- from: samurai_dynasty:ruby_ore / onyx_ore / aquamarine_ore | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: the full gem suite (ruby, onyx, aquamarine) feeds the crusher the same way quartz does — regional gem wealth pays off in doubled yield
- from: samurai_dynasty:akaname_tongue / yokai drop reagents | via: recipe (occultism:spirit_fire) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Yokai's cursed tongue dissolves in spirit-fire into an occult essence — the Eastern spirit bleeds into the Western ritual
- from: samurai_dynasty:akaname_tongue / yokai drops | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: yokai essence imbuement-attuned into a source gem shard — foreign spirit refined through arcane apparatus
- from: samurai_dynasty:jade (gem) | via: recipe (ars_nouveau:enchanting_apparatus) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: jade's folklore resonance with warding/luck maps cleanly onto an Ars enchanting-apparatus catalyst role — a jade component feeds an arcane focus craft
- from: samurai_dynasty:silver_ore (⚠ tagged c:*silver — see CLAUDE.md galosphere caveat) | via: recipe (create:crushing) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: CLAUDE.md warns never to unify samurai_dynasty silver as generic silver because of Galosphere's palladium/silver id collision; crushing it through a c:ingots/silver tag risks silent merge — needs explicit namespace-specific routing, not a tag-based one; raise in DECISIONS.md before authoring
- from: samurai_dynasty katana/spear (weapons) | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: mid | tone: clash | verdict: REJECT | reason: katana/spear are mid-tier combat gear in a feudal-Japan theme; forcing sequenced-assembly factory production onto hand-forged weapons is a tone clash (M-06 is reserved for endgame flagship items); a simple crafting recipe is the coherent form here

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — genuine zero-content behavior mod: 0 blocks, 0 items, loot=no; only modifies tamed-mob teleport behavior; nothing to route through any method.

## sound_physics_remastered   [anchors: support/client (1)]
- LEAVE — client-only audio engine: 0 blocks, 0 items, loot=no; pure sound DSP; no content surface to weave.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — pure behavior framework: 0 blocks, 0 items, loot=no; re-skins existing weapon animation and hitboxes via JSON; no material to route through any method.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- from: createadditionallogistics:brass_encased_lazy_cogwheel / brass_encased_lazy_shaft | via: recipe (create:mechanical_crafting) | to: aeronautics (drivetrain/control) | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: brass lazy cogwheels are an efficient intermediate for Aeronautics control linkages — performance-tuned gearing that reduces server load on a moving ship's kinetic tree
- from: createadditionallogistics:andesite_encased_lazy_cogwheel (entry-tier) | via: recipe (create:deploying / item_application) | to: aeronautics | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: deploy a lazy cogwheel onto a basic shaft segment to upgrade it to a ship-grade lazy assembly in one step — light single-step upgrade path for early airframes
- REWORK: the aeronautics anchor is listed but no explicit propulsion/control recipe routes through lazy shafts — the two ACCEPTs above create that material link. Existing Create anchor via create:splashing (dye-washing) is thin as a Create anchor — the lazy cogwheel/shaft is the real Create story; consider strengthening the Create anchor statement in the dossier.
- OK — no arbitrary edges; Create and aeronautics are genuinely tight.

## controlling   [anchors: support/client UI (1)]
- LEAVE — client keybind-search UI: 0 blocks, 0 items, loot=no; pure UI widget; no content to weave.

## xaeroworldmap   [anchors: support/navigation (1)]
- LEAVE — client map renderer: 0 blocks, 0 items, loot=no; purely renders explored chunks and waypoints; no content surface to weave.

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable novelty item (freefbible:freef_bible); no mechanics, no loot table, no recipe; forcing any weave edge onto a gag item is noise. (The dossier itself makes this call; confirmed here.)

## simplehats   [anchors: support/cosmetic (1)]
- from: simplehats rare hats (endgame bag drops, e.g. amalgalichhat, legendary tiers) | via: trade (numismatics sell / M-21 villager trade) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare hat is a luxury vanity good — coin can buy fashion; players with surplus currency have a cosmetic sink that doesn't break balance
- from: simplehats:hatscraps (recycled duplicate-hat scraps) | via: loot-seed (seed scraps into Bountiful bounty reward tables) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards sometimes pay in hat scraps instead of coin — cosmetic currency as a secondary bounty reward; players with more scraps craft better bags
- from: simplehats grab-bags (mob drops) | via: loot-seed (seed rare hat grab-bag into hard-mob/boss loot tables — e.g. Yokai / Cataclysm boss) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: defeating a Tengu or an Ignis boss has a small chance to drop a themed rare hat bag — cosmetic reward from dangerous mobs, not just gear
- from: simplehats rare hats sold for coin | via: trade (numismatics) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); the M-09 luxury-good sell is sufficient and is the accepted motif — adding M-21 on top is redundant and the provisional flag is a stop sign; drop this route, keep M-09
- OK — the self-contained hat-scrap economy stays; the three ACCEPTs add economy and survival anchors without touching its internal loop.

== CHUNK COMPLETE ==
