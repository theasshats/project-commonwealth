# Phase 2 candidates — chunk-13

## occultism   [anchors: magic (1)]
- from: occultism:spirit_fire / ritual (drop-sink) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: foreign mob drops fed to spirit-fire mint essences — pure transmutation, obvious occult loop
- from: occultism:crushing | via: occultism:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: a second ore-doubling path (spirit-crushing alongside Create's crushers) — parallel production, forces specialization
- from: occultism:silver_ingot (real silver) | via: occultism:miner (dimensional mineshaft as logistics) | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Djinni-mined silver acquired through summoned-spirit logistics — magic as the supply arm; silver flows to the coin/trade layer
- from: sellable essences/iesnium | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the spirit_trade→economy loop (M-18 above) is the distinctive link
REWORK: existing anchor is magic (1); the Create ore-doubling is already flagged as a touch-point but not a formal anchor — ACCEPT above formalises it. No mis-costings found in dossier; depth is appropriate.
OK — connections sound for the 2 ACCEPT'd new anchors above (magic + create + economy/logistics = 3 pillars, strong).

## better_climbing   [anchors: support/QoL (1)]
LEAVE — zero content (0 blocks, 0 items, no recipe types); pure movement-physics client tweak. No material surface to route.

## modernfix   [anchors: support/performance (1)]
LEAVE — zero content, JVM/loader-level patches only. No weave possible.

## blueprint   [anchors: support/library (1)]
LEAVE — code library (Team Abnormals shared framework). The one shipped item (template_chest) is trivially vanilla-style; no pillar anchor available.

## nochatreports   [anchors: support/privacy (1)]
LEAVE — zero content, networking/privacy utility. No items or methods to route.

## particlerain   [anchors: support/atmosphere (1)]
LEAVE — zero content, client-side particle rendering only. No materials; no method surface.

## quark   [anchors: support/decoration+QoL (1)]
- from: quark decorative/building blocks (vertical slabs, polished stone, brick variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Quark's expanded stone/brick palette recycles back through Create's crusher — the decoration loop; deco blocks yield gravel + XP nugget as expected
- from: quark crop-storage crate blocks (apple_crate, carrot_crate, potato_crate … c:block/storage_blocks/*) | via: create:milling or create:crushing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a dense crate of apples milled into apple pulp (feeds cider/ExtraDelight chain) — compressed crop going into a processing chain is coherent and gives the crates a functional use beyond storage
- from: quark:ancient_* wood blocks (Glimmering Weald) | via: occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ancient wood from a Glimmering Weald — the bioluminescent underground biome — transmuted through spirit-fire into an ethereal essence; thematically the otherworldly wood has arcane resonance
- from: quark deco blocks sold for coin | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; all decorative blocks are trivially sellable

## notenoughanimations   [anchors: support/visual (1)]
LEAVE — zero content, client cosmetic animations only. Nothing to route.

## netmusic   [anchors: support/flavor (1)]
LEAVE — cosmetic audio only (music_cd is NBT-encoded, not a material). Already touches TLM altar method; forcing another edge would be contrived. The dossier's own conclusion stands.

## crash_assistant   [anchors: support/client-utility (1)]
LEAVE — zero content, crash-diagnostics tool. No items or methods.

## appleseed   [anchors: survival (1)]
- from: diet-variety demand signal (appleseed nutrition system) | via: config/tuning (diet pulls on food production) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: balanced diet requires crop variety → Farmer's Delight / ExtraDelight cooking chains supply it → Create milling/mixing pulls on crops upstream; appleseed is the pressure driver that makes the whole food-production chain purposeful
- from: diet-variety demand signal | via: numismatics price (high-nutrient multi-group foods become trade goods) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player with a balanced diet buff is a walking advertisement — specialist cooks sell multi-group meals for coin because the diet system makes variety worth buying; the pressure → economy loop in miniature
- from: magic catalyst need | via: (forced) | to: magic | verdict: REJECT | reason: no natural food→magic method routing; don't force

## createnuclear   [anchors: create (1)]
- from: createnuclear:steel_ingot (c:ingots/steel) | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: nuclear-forge steel is the structural alloy for airframes; a ship hull shouldn't cost less to build than the reactor powering it — steel from the nuclear chain feeds M-23 airframe recipes
- from: createnuclear reactor SU output | via: propulsion/engine intake | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: a nuclear reactor's massive SU as the engine source for the largest Aeronautics vessels — endgame propulsion, distinct from diesel (M-13 fuel arm, different fuel type); the reactor becomes the flagship power plant
- from: refined uranium / lead | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: uranium is a scarce regional ore processed through a long Create chain; the finished fuel rod or lead ingot as a coin-bearing trade good is structurally distinctive (scarcity-gated, deep processing) — not generic-sellable, meets the M-08 bar
- from: anti-rad hazmat gear | via: survival pressure (radiation hazard) | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — thematic survival link (radiation) has no method-routing; flagged for Gate-0 review if a radiation-hazard motif is wanted

## ldlib2   [anchors: support/library (1)]
LEAVE — developer-infrastructure library; dev/test entries only, no real items. Nothing to route.

## supermartijn642corelib   [anchors: support/library (1)]
LEAVE — code library (GUI/block/BE/packet scaffolding). No content.

## playeranimator   [anchors: support/library (1)]
LEAVE — animation API library; zero blocks/items. No content surface.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction loot (shields, faction armor, weapons) | via: loot-seed / bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty board demands faction gear (shields, weapons) as trophies — combat against faction soldiers → economy payout; structurally distinctive because the faction-combat loop closes into the coin layer (M-14 is the distinctive tie, not generic-sellable)
- from: mercenary hire / citizen recruitment | via: numismatics coins (gate hiring on coins) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary costs coin — faction labor is priced into the economy; the recruitment loop (fight → loot → coins → hire more → fight) is a genuine loop-closing sink (provisional motif M-21, tagged accordingly)
- from: faction armorsmith station | via: create:mechanical_crafting (gate station products on Create parts) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: knight armor at the armorsmith requires Create-fabricated metal fittings — faction gear is gated on the tech spine; thematically the forge-quality medieval craft needs industrial parts, sensible for the pack's world
- from: faction gear sold for coin generically | via: numismatics sell | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the M-14 bounty-board link above is the distinctive economy tie

## create_sa   [anchors: create, aeronautics (2)]
OK — connections sound. Already ≥2 anchors (Create manufacture + aeronautics personal flight). A magic-infusion link for blazing tools was considered and set aside in the dossier — agreeing: the blaze-fire tie to Occultism via spirit_fire would be coherent (M-11 direction), but the mod is already well-woven; leave for Gate 2 if more depth is wanted.
- from: create_sa:brass_jetpack_chestplate (jetpack) | via: create:haunting (soul-fire charging) | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: haunting a jetpack with soul-fire grants a spectral upgrade — a thematic bridge between Create-built flight gear and the spirit-fire pillar; the Create→Occult seam (M-19) is exactly this

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux plow/reaper implements | via: create:mechanical_crafting or create:pressing (gate metal blade on Create iron sheet) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the metal plow-blade and reaper blade require Create-pressed iron sheets — a one-step gate that ties low-tech farming equipment to the tech spine; depth is correct (everyday implement = one light step, not a sequenced chain)
- from: bulk cart harvest (reaper output) feeding food-processing | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the reaper pulls a wagon-load of wheat; the supply cart hauls it to a Create mill — the harvesting → milling → bread chain has a physical transport step that makes the cart's role diegetic
- from: supply cart as logistics node | via: aeronautics loading dock (cart delivers to airship cargo) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: no-motif for cart→airship loading; M-23 is structural alloy, not logistics handoff; this is a flavor/playstyle note, not a recipe edge — reject

## mutantszombies   [anchors: survival (1)]
- from: mutant zombie mobs (zombie_brute, crawler, spitter, mutant_brute, rotten_mutant) | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board that demands proof of mutant kills (e.g. spawn eggs as trophies, or vanilla rotten-flesh/bone drops) — the harder zombie variants make combat more costly, so the payout closing into coin is the loop (pressure → combat → economy); structurally distinctive because the elevated threat tier makes the bounty worth running
- from: mutant mob drops (rotten flesh, bones — standard zombie loot) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: mutant zombie drops fed to spirit-fire as augmented mob-drop reagents — the sheer volume from an ambush becomes essence fuel; natural M-11 sink
- from: custom drops if any (loot=no; dossier confirms no special drops) | verdict: REJECT | reason: loot=no confirmed — no special drop surface for loot-seed; the M-11 above uses standard zombie loot which is fine

## cloth_config   [anchors: support/library (1)]
LEAVE — config-screen API library; no items, blocks, or methods. Nothing to route.

== CHUNK COMPLETE ==
