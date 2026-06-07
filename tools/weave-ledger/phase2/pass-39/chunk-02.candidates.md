# Phase 2 candidates — chunk-02

## supplementaries   [anchors: create/survival (2)]

Existing anchors: already woven — Create (haunting/mixing/splashing inbound) and survival (flax crop, FD cutting, ash/soap). REWORK check on both.

REWORK: Create anchor — OK. The inbound recipe weaves (haunting, mixing, splashing) are genuine Create-method routing through Supplementaries materials (ash, soap, rope). Coherent; not arbitrary.
REWORK: Survival anchor — OK. Flax crop (c:crops/flax → rope/string) feeds survival-pressure crafting; FD cutting integration is sensible. Not arbitrary.

New candidates via method-pull:

- from: supplementaries:ash (c:dusts/ash) | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: ash-in-mixing is already an existing inbound weave (the dossier says "its recipes already PULL THROUGH create:mixing"); proposing it again would duplicate a live connection, not add one.

- from: supplementaries flax crop (c:crops/flax) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Flax stalks are a textile crop — milling them in a Create millstone yields linen fiber, feeding the textile/rope supply chain and tying the flax crop explicitly into the Create production spine as a raw-crop input. (Flax is currently a grow→craft-rope path; this would open a milled-intermediate route as a second processing step.) | note: power-read — flax is an everyday crop; one light step appropriate; depth does not need to be deep.

- from: supplementaries rope (crafted from flax) | via: aeronautics rigging/structural | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: Rope is a natural rigging material for wooden/early-tier airships; requiring rope as a basic structural consumable (rigging, tether lines) in early Aeronautics assembly gives the flax→rope chain its distribution-side demand and locks the aeronautics tier to the survival-farming layer. Scaled to basic/early frame, not endgame hull.

- from: supplementaries:safe (locked storage block) | via: economy / serve-as-shop-infrastructure | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: safes are passive storage, not a service mechanic; M-33 is player-performs-work-for-hire, which safes don't implement. No coherent method routing; bare "useful in shops" is ambient, not a weave.

- from: supplementaries:faucet (fluid transfer node) | via: create fluid pipe interaction | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: faucet↔Create piping is an existing behavior-level integration documented in the dossier consumes/outputs; it's a compatibility fact, not a new recipe weave. No method to add.

- from: supplementaries:jar (item/fluid storage) | via: supplementaries:safe / economy as trade node | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 is consumption-sink (item spent against pressure), not storage. A jar that stores things is not itself a consumption. Forced.

OK — connections sound for existing 2 anchors. The two new ACCEPT candidates (flax→milling→Create, rope→aeronautics rigging) provide a meaningful extension into a 3rd anchor (aeronautics) and strengthen the Create tie with a new method-routing.

## blood_n_particles_datapack   [anchors: support (1)]

No items, no methods, no loot — purely visual particle/sound emission on damage events. Zero content surface; the 184 "items" are particle holder entries not obtainable or processable by any method.

LEAVE — zero content surface: a cosmetic combat-feedback mod with no items, no methods, no loot tables, and no material in/out. No route through any method palette entry is coherent.

## companion   [anchors: support/QoL (1)]

A behavior-only pet-safety mod (Snownee). Zero blocks, zero items, zero loot. Teleports pets through portals and makes them retreat when low on health. No material surface.

LEAVE — genuine zero-content code library/behavior mod. No items, no methods, no loot tables. The only thing it does is fire teleport/retreat logic on entities; nothing to route through any method.

## create_sa   [anchors: create/aeronautics (2)]

Create Stuff & Additions — jetpacks, exoskeletons, drones, blazing tools, portable drill. Made via create:sequenced_assembly / mechanical_crafting. Items: brass/andesite gear, blazing weapons.

Existing anchors REWORK check:
REWORK: Create anchor — OK. Deep inbound Create weaves (compacting, crushing, filling, haunting, mechanical_crafting, mixing, sequenced_assembly) — the gear is genuinely built through Create machinery. Sound.
REWORK: Aeronautics anchor — OK. Jetpacks are personal flight, drones are transport/helper units — both are the personal-mobility face of the aeronautics pillar. Not arbitrary.

New candidates via method-pull:

- from: create_sa:blazing_pickaxe / blazing tools (blaze-fire-enhanced) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Blazing tools already carry fire magic — attuning them through an Ars imbuement (feeding source into the blaze-infused metal) to unlock an enchant-level effect (flame/lava immunity) is a natural cross-route dependency: Create's mid-tier blazing tools gain a magic-specialist upgrade step. Bridges Create→magic without duplicating either route.

- from: create_sa:brass_drone_item | via: aeronautics logistics arm | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: Drones are owner-locked airborne helpers — framing them as a player-run logistics-service item (a drone specialist deploys them to carry goods/scout for other players) plugs into the economy's service-for-hire axis. The drone is the tool; the service is the weave. Fits M-33 (labor/service, payment emergent).

- from: create_sa:brass_jetpack_chestplate / netherite variant | via: create:sequenced_assembly | to: aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: jetpacks already anchor aeronautics AND are already made via create:sequenced_assembly — the dossier's "made-by methods" confirms sequenced_assembly is an existing inbound connection. REWORK not needed (it's correct), but proposing a new sequenced_assembly edge here would duplicate an existing live weave.

- from: create_sa:brass_exoskeleton_chestplate (strength/haste aura) | via: create_new_age:energising | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: The exoskeleton's aura is mechanical muscle — charging it through Create New Age's energising station (FE charge → boosted aura duration/intensity) threads the electric tier into the wearable-tech line, making Create's electrical sub-system a required upgrade step for the exo's best performance.

## create_central_kitchen   [anchors: create/survival (2)]

A Create↔FarmersDelight/ExtraDelight bridge mod with no items/blocks of its own (0 registered). Automates cooking via Packager/Mechanical Arm; adds sequenced-assembly food recipes. Pure recipe/integration layer.

Existing anchors REWORK check:
REWORK: Create anchor — OK. The mod's entire purpose is routing food-processing through Create automation (Packager, Mechanical Arm, sequenced-assembly sandwich/pie chains). Coherent.
REWORK: Survival anchor — OK. It feeds finished dishes / survival foods out of Create machinery, directly closing the loop from food production into survival pressure. Sound.

New candidates via method-pull:

- from: create_central_kitchen sequenced-assembly feast/dish (finished dishes) | via: farmersdelight:food_serving / economy demand | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Automated Create kitchens produce surplus feast-food — framing finished dishes as consumable upkeep for MineColonies workers/colony population (food consumed to sustain the settlement) gives the kitchen's output a sustained consumption-sink demand. A colony specialist buys feasts from the kitchen specialist; the loop turns. M-26 (consumption against pressure/upkeep).

- from: create_central_kitchen blaze_stove (requires Blaze to operate) | via: survival/danger → combat-route supply | to: survival/economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: The Blaze Stove is powered by a live Blaze — a combat player must supply blaze rods/blazes from Nether runs to keep the kitchen running at 4x speed. This makes the combat-route supply (M-34) directly feed Create's automated kitchen, creating cross-specialist dependency: kitchen operator buys blaze fuel from a Nether runner.

- from: create_central_kitchen finished fluids (ice cream / sauce / drink) | via: numismatics / economy | to: economy | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: bare "finished dishes are sellable luxury goods" is M-09 (retired) territory — the ambient endpoint of the loop, not a weave. The M-26 colony-upkeep angle above is stronger and already accepted; a duplicate sell-link adds nothing.

## revelationary   [anchors: support (1)]

A progression-gating library — no items, no blocks, no loot, no methods. Gates block visibility behind advancements via a datapack API. Pure code infrastructure; other mods (Occultism otherworld blocks) hook it.

LEAVE — genuine zero-content code library. No items, no methods, no loot tables, no materials. The reveal/disguise mechanic enables M-05 (native-method gating) in its dependent mods, but revelationary itself has nothing to route through any method palette entry.

## smartbrainlib   [anchors: support/library (1)]

Developer AI framework — no items, no blocks, no loot, no methods, no player-facing content. A code-only Brain/AI system consumed by mob mods (Alex's Mobs, Naturalist).

LEAVE — genuine zero-content code library/API. No items, no methods, no loot. The smarter mob AI it enables is a precondition for other mods' mob drops (which those mods' dossiers handle), but smartbrainlib itself is a pure dependency with nothing to route.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

100+ vanilla-styled structures (taverns, towers, dungeons, illager hideouts, extra Trial Chambers) with loot keyed off minecraft:trial_key / minecraft:ominous_trial_key. loot=yes confirmed by dossier. Tavern has a cartographer villager.

Power-read: the structure mod's primary value is loot in dungeons, boss-style vault rewards, and exploration destinations. Trial keys are mid/endgame items (Trial Chamber completion). Structures span all biomes.

- from: dungeons-and-taverns loot tables (trial-vault chests, dungeon chests) | via: loot-seed (datapack edit adding Create/magic progression items to vault loot) | to: create | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding Create-progression components (precision mechanisms, Create alloys) or boss-key unlock items into the vault/dungeon loot tables makes exploring Dungeons and Taverns structures a viable alternate acquisition route for mid-tier Create parts — the combat/explorer playstyle earns tech ingredients. M-15 (boss-key unlock, loosely: locked-tier component gateable behind dungeon completion).

- from: dungeons-and-taverns tavern (cartographer villager; exploration hub) | via: loot-seed / economy service node | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: Taverns are natural player-economy meeting points — seeding them with a notice board or Trading Floor stall hook (a datapack config placing a Trading Floor block, or loot that seeds a trade token) turns the tavern into a sanctioned service hub. Players rendez-vous at taverns for economy services (enchant-for-hire, map sales, cargo contracts). The weave is a config/datapack placement, not a recipe; delivery via config tie or loot-seed.

- from: dungeons-and-taverns dungeon mob drops (generic dungeon mob loot) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Dungeons and Taverns adds hostile mobs and their standard drops inside its structures; transmuting those drops into Occultism spirit essences gives dungeon-runners a magic-tier use for their haul. The spirit_fire method already handles mob-drop → essence conversion (M-02/M-11); this is a loot-seed extension pointing at the dungeon mob pool.

- from: dungeons-and-taverns trial_key / ominous_trial_key | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: trial keys are vanilla progression items (open trial vaults); making them an Ars infusion input is a tone clash (arcane infusion of a vault opener with no thematic link to source/magic) and would gate a vanilla-progression item behind a magic-specialist step, violating the basic-components guardrail relative to its role as a structure key.

## miningspeedtooltips   [anchors: support/client-UI (1)]

A display-only tooltip mod — reads tool mining-speed attributes and shows them on hover. No items, no blocks, no methods, no loot. Zero content surface beyond a rendering hook.

LEAVE — genuine zero-content UI-display tweak. No items, no methods, no loot tables. Adding "tooltip info" to tools is a rendering concern, not a material or method, so no weave is possible or sensible.

## aeronauticscompat   [anchors: aeronautics (1)]

A behavior-patcher (mixin/runtime) that fixes third-party mods to behave on Sable physics-simulated ships. No items, no blocks, no loot, no methods. Pure compat glue; required per CLAUDE.md.

LEAVE — genuine zero-content code library / compat patcher. No items, no methods, no loot. Its entire value is runtime behavior patches; nothing to route through any method palette entry. (Noted as REQUIRED — do not cut.)

## betterbiomereblend   [anchors: support/performance (1)]

Client-only biome-color-blending performance and visual mod. No items, no blocks, no loot, no methods. Pure rendering/perf optimization (OKLab 3D blending).

LEAVE — genuine zero-content performance mod. No items, no methods, no loot tables. Rendering pipeline improvement; nothing to route.











