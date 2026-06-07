# Phase 2 candidates — chunk-05

## bettermineshafts   [anchors: survival (1)]
- LEAVE — zero-item structural overhaul; no loot tables (loot=no per dossier), no blocks, no items, no recipe surface. Nothing to route or seed. Confirms dossier recommendation.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — behavior-only multiplayer QoL; registers no items, no loot, no methods. Genuine zero-surface mod.

## betterendisland   [anchors: survival (1)]
- LEAVE — YUNG's End-island structural overhaul; zero items, zero loot tables (loot=no), no recipe surface. Nothing to route or seed.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver; zero items, zero methods, zero loot. Pure infrastructure. Weaving it would be meaningless.

## sablecollisiondamage   [anchors: support/physics (1)]
- LEAVE — collision-damage behavior addon; zero items, no loot, no methods. Physics-behavior layer on aeronautics engine with no material surface.

## createfurnitureseats   [anchors: support + aeronautics (2)]
- OK — connections sound. Already touches aeronautics (sittable furniture on Sable sub-levels) and support/compat. No item surface to route; forcing additional edges would be meaningless.

## supplementaries   [anchors: create, survival (2)]
- OK — connections sound. Deeply cross-woven into Create (haunting/mixing/splashing) and survival (flax crop, ash, soap, Farmer's Delight cutting). No further weave needed; it is a connector mod by nature.
- REWORK: None identified. Existing links are coherent and well-documented. The latent economy note (jars/safes/flags for shops) is a decorative observation, not a structural gap.

## simplehats   [anchors: support (1)]
- from: simplehats grab-bags (rare-hat cosmetics) | via: loot-seed | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hats turn up in Dungeons & Taverns / deeperdarker vaults, giving the coin economy a vanity sink players actually compete for — a cosmetic trade good seeded into loot, not just always-craftable
- from: simplehats grab-bags | via: loot-seed into bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 bounty is mob-drops→coin; hats aren't mob-drops in that loop sense — the loot-seed (M-09) is the cleaner and sufficient link; two economy links on a cosmetic mod with no other anchor is oversaturation
- from: simplehats hat-scraps | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing cosmetic hat cosmetics into XP nuggets is tonally absurd — M-04 is for metal/stone deco, not whimsical cosmetics; hard tone clash

## immersive_armors   [anchors: survival (1)]
- from: heavy/divine/steampunk armor sets | via: create:pressing + create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: the Steampunk and Heavy sets clearly belong in a workshop — pressing iron/steel plates and assembling them mechanically gates the stronger sets on the Create spine rather than vanilla bench, making armor a tech-tier product
- from: divine armor | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the "Divine" set invites an arcane finishing step — imbuing through the enchanting apparatus makes it a magic-adjacent endgame option and ties armor to the magic web
- from: finished themed armor sets | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; armor is kept by players, not traded as a primary economy good

## lionfishapi   [anchors: support/library (1)]
- LEAVE — pure animation/entity API; zero items, zero loot, zero methods. Genuine zero-surface library.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit / dark_metal | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal is a dangerous-zone ore drop — crushing it for a nugget/dust byproduct pulls it into the Create ore-doubling spine, making the dark combat loop feed the tech economy
- from: born_in_chaos_v1:bundle_of_bones / soul-cursed drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: "bundle of bones" from fallen chaos knights transmutes in spirit fire into a necromantic essence — the horror mob drops become occult reagents, closing the organic→magic loop coherently
- from: born_in_chaos_v1:pumpkin_staff (seasonal boss drop) | via: boss-key gate | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Pumpkinhead seasonal boss drop gates a complex Create/tech recipe, making players fight the seasonal event to unlock a fabrication tier — danger → reward → production
- from: born_in_chaos_v1:dark_metal | via: numismatics sell/bounty | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; M-03 ore-doubling already routes this into the Create spine which is more structurally distinctive
- REWORK: none — currently survival (1) only; new Create/magic/boss-key links above add the needed ≥2.

## create_train_parts   [anchors: aeronautics (1)]
- from: brass/copper train window/step/slide blocks | via: create:pressing (required brass/copper sheet input) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: the brass sliding window and steps already feel machined — routing their recipe through Create-pressed sheets makes train detailing a natural downstream product of the Create material chain; light single step, everyday tier, coherent
- from: create_train_parts:crossing | via: create:mechanical_crafting | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: mechanical_crafting for a track crossing is overcomplicated for everyday deco; the pressing tie on windows/steps (above) is the right-scale Create link; a second create tie here adds no new system anchor

## create_ltab-3.9.2   [anchors: create, survival (2)]
- OK — connections sound. Create-themed worldgen already anchors on Create + survival/exploration. Loot-table seeding a scarce reagent is a valid optional Phase-3 action (noted in dossier) but doesn't change the anchor count; no new system link needed.

## almostunified   [anchors: support (1)]
- LEAVE — recipe-graph plumbing infrastructure; zero items, zero loot, zero methods. It is the unification tool itself, not a content node. No weave is possible or sensible.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust / deeperdarker:soul_crystal / deeperdarker:heart_of_the_deep | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Otherside's "soul" reagents are thematically perfect spirit-fire fuel — transmuting them into occult essences makes the dark dimension a magic supply line, closing survival→magic with a coherent horror-occult flavor
- from: deeperdarker gloomslate / sculk-stone block families | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic dark-rock decorative blocks crush back to gravel + XP nugget in a Create crusher — lossy recycle keeps the block sets from being dead-end decoration and pulls them into the Create spine; already partly wired (create:crushing inbound per dossier), just needs a KubeJS recipe authored
- from: deeperdarker:warden_carapace / reinforced_echo_shard | via: create:pressing or create:mechanical_crafting | to: create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: Warden-tier materials gating a Create heavy-armor or machine component through a pressing/assembly step makes the most dangerous endgame dimension a required production input, not just a gear reward — advances the scarcity→production loop
- from: deeperdarker:soul_dust | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the magic routing (M-11) is the distinctive, loop-closing tie for these materials
- REWORK: none — currently survival (1) only; three new links above (magic, create ×2) will bring it to ≥2.

## patchouli   [anchors: support/docs (1)]
- LEAVE — guide-book library; zero loot, no material methods. Its only items are book covers (patchouli:book_*) whose sole use is as an ingredient for the pack's guide books — routing colored book covers through a Create/magic method would be absurd. Genuine zero-surface library.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: structure loot tables (dungeon/tower/hideout chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatics coin types into D&T structure chests makes exploration a direct economy on-ramp — finding a hideout pays in tradeable coin rather than just vanilla loot; a structurally distinctive loop-closing loot-seed (loot=yes confirmed), not a generic "sell for coins" recipe
- from: tavern cartographer villager trade | via: villager-trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); and the cartographer uses emerald trades anyway — better to seed coin into the dungeon chests (above) than force a villager-economy bridge that may not ship
- REWORK: none — currently survival (1) only; coin loot-seed above adds economy anchor.

## buildguide   [anchors: support/QoL (1)]
- LEAVE — client-side render overlay; zero items, zero loot, zero methods. Genuine zero-surface build-assist utility.

## jakes-build-tools-2.0.1.5   [anchors: QoL/builder tools (1)]
- from: jakes-build-tools tools (hammer/chisel/trowel/hard-hat) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: these are consumable QoL utilities, not a progression item — gating a block-placement randomizer behind a Create assembly line adds friction without a corresponding reward; the dossier already flagged this as a forced edge
- LEAVE — build-assist QoL tools; no material/processing surface that a coherent weave can attach to.

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:gaming_console components (processor, redstone_circuit, display, control_pad) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: while the steampunk-console aesthetic could invite a Create assembly flavor, the gaming console is a pure novelty toy with no progression weight — gating a minigame toy behind a Create assembly chain adds friction without value; the dossier already flagged this as WEAK
- LEAVE — whimsical-retro novelty toy; no resource role, no loot, no foreign-method surface worth routing through. Forcing a Create recipe edge onto an arcade gadget is a contrived edge the dossier already dismissed.

== CHUNK COMPLETE ==
