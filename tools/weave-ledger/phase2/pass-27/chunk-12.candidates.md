# Phase 2 candidates — chunk-12

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — pure datapack re-enabling vanilla bundle recipe; 0 items, 0 methods, no pillar content to weave.

## createaddition   [anchors: Create (1)]
- from: createaddition:seed_oil / bioethanol (crop → oil → liquid fuel) | via: alcohol_industry:alcohol_boiling | to: survival/Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: farmed seeds press to seed oil → distilled into bioethanol; an agricultural specialist fuels the electric tier without touching fossil fuels — farming feeds the machines
- from: createaddition:charging (FE → charged item) on irons_spellbooks magic gear / foci | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: a wizard's focus or affinity ring topped up at a tesla coil — the tech tier recharges the magic tier, threading the electric layer into spellcasting
- from: createaddition:seed_oil as a Create-processable input → numismatics coin mint | via: create:pressing → numismatics | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: seed oil itself isn't a scarce regional metal — M-08 requires scarce regional metal → coin; sell-link only; no demand gate
- from: createaddition:rolling → electrum rods/wires as aeronautics component supply | via: createaddition:rolling → aeronautics recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: aeronautics drivetrain already pulls copper/iron/brass (vanilla Create); electrum wires are plausible but no confirmed aeronautics recipe calls for them — no grounded join key; would need jar confirmation before ACCEPT
- REWORK: dossier 2nd-anchor candidate "survival/economy via liquid_burning of crop oils" flags M-12 but also mentions "sellable processed good" — the sell endpoint is ambient (M-09 retired); the real weave is the oil feeding the FE loop (accepted above). Dossier candidate is partially correct but mislabels the economy link.
- OK — the Create anchor is sound (the canonical electricity/FE bridge).

## playeranimator   [anchors: support/library (1)]
- LEAVE — pure animation API; 0 items, 0 methods, no material surface to weave.

## mutantszombies   [anchors: survival (1)]
- LEAVE — 7 spawn eggs only, loot=no, no drops or items; no material to route. Raises the night-threat baseline (pure pressure), which is its survival role. Forcing a drop-to-reagent edge would violate the "deliberately vanilla-style mob" guardrail given the dossier confirms no special drops.

## fogoverrides   [anchors: support/client (1)]
- LEAVE — config-only visual mod; 0 items, 0 content surface; no pillar weave possible.

## aeronautics   [anchors: aeronautics, Create (2)]
- from: aeronautics:levitite_blend (create:mixing, zinc + end-stone powder) → numismatics mint | via: create:pressing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite is the pack's lift material — every ship builder needs it; zinc-gated scarcity means the region that controls zinc presses the pack's lift currency; a lift-materials specialist emerges naturally
- from: aeronautics:adjustable_burner (hot-air lift) → fuel consumption | via: fuel-tag config tie | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the hot-air burner burns charcoal/wood; running a fleet of hot-air ships creates continuous fuel demand, closing the loop back to farming/forestry as a consumption sink
- from: aeronautics levitite crystallization step (in-world catalysis, code recipe) → magic catalyst gate | via: KubeJS / config — require Ars/Occultism catalyst adjacent | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: raw levitite blend crystallizes only in the presence of an arcane catalyst — the aeronautics spine touches magic at the lift tier, forcing sky-builders to source from magic specialists
- from: aeronautics:simulated:rope_coupling / docking connector → logistics layer | via: config/structure placement at Numismatics trading posts | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: docking stations at player-run trading hubs make cargo runs a service — the airship owner charges for haul, payment emerges player-to-player
- from: aeronautics:offroad tires → Create crush recycle | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: tires are rubber/compound items not metal/stone deco; M-04 is the deco-recycle motif — tone mismatch; cosmetic recycle adds no loop value
- from: aeronautics:borehead bearing (flying drill) → ore output feeds economy | via: aeronautics borehead → ore drop → regional scarcity | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: REJECT | reason: this is more an emergent play-style than a weave (no recipe to author); the scarcity foundation already does this work. No Phase-3 action possible.
- REWORK: dossier candidate "levitite → economy: M-08 mint-adjacent / M-09 sell" — M-09 is retired; the M-08 framing above (accepted) is the correct reframe. Drop the M-09 sell mention from dossier on next edit.
- OK — the aeronautics + Create 2-pillar grounding is sound and jar-proven.

## jade   [anchors: support/client UI (1)]
- LEAVE — pure client HUD overlay; 0 items, 0 methods; no pillar weave possible.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/physics API; 0 items, 0 methods; indirectly serves Create/aeronautics via Create Big Cannons but has no direct content surface.

## mcwdoors   [anchors: support/decoration (1)]
- from: metal door variants → create:crushing back to iron nuggets + xp nugget | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished iron door feeds the crusher — deco is part of the Create material loop, not a dead end. Scope: metal/iron variants only (not all 250).
- from: all wooden/stone door variants → create:crushing → gravel/planks byproduct | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 250 blocks is enormous scope for M-04 pass; dossier notes a wholesale deco-family pass is the correct vehicle; individual acceptance here front-runs that wholesale pass. Flag for deco-family sweep instead.
- OK — decoration anchor is sanctioned; the metal-door crush is the correct single accepted edge.

## railways   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already 2 pillars (Create via mechanical_crafting/sequenced_assembly + the aeronautics/transport pillar). No coherent magic or survival routing; the dossier correctly reaches no further candidates.

## netmusic   [anchors: support/QoL (1)]
- LEAVE — purely cosmetic audio; the one cross-mod touch (TLM altar recipe) is already noted in the dossier. No material to route; forcing a Create/economy edge would be contrived.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:arcane_essence → ars_nouveau:source_gem bond | via: ars_nouveau:imbuement | to: magic↔magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane essence and source gems occupy the same conceptual niche (magic currency); bonding them means either school's specialist can supply the other — a genuine cross-magic trade seam. Note: arcane_essence is RESERVED as the Iron's-side currency (reagent-ownership §2); this is the correct M-01 use (bonding two reserved currencies), not double-spending.
- from: irons_spellbooks mithril ore → create:crushing ore-doubling | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril veins (Y<38) are scarce; running ore through a Create crusher before smelting is a concrete reward for vertical infrastructure — already in Create spine for every metal.
- from: irons_spellbooks boss/enemy drops (apothecarist etc.) → occultism:ritual / spirit_fire reagent | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: apothecarist (Iron's sub-boss) drops become Occultism reagents — mobs from one magic mod feed the ritual table of another, and neither is self-sufficient in that reagent
- from: irons_spellbooks:alchemist_cauldron brews → aeronautics crew buffs | via: create:filling into aeronautics ships or potion dispensers on contraptions | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: there's no confirmed aeronautics recipe requiring potions; this is emergent play behavior (drink before flight), not a recipe weave. No Phase-3 authoring target.
- from: irons_spellbooks mithril/pyrium → numismatics coin via create:pressing | via: create:pressing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: mithril/pyrium are magic metals — minting them as coin trades off their magic exclusivity; better left as M-30 regional scarcity goods traded for coin rather than minted as coin themselves. Conflicts with reagent-exclusivity design intent.
- REWORK: dossier 2nd-anchor candidate "bond arcane_essence ↔ source_gem via M-01 (RESERVED)" — framed as a note not as a candidate; this should be promoted to an explicit ACCEPT (done above). Dossier also says "further weaving is depth, not required" — correct, but the M-01 and M-02/M-03 edges are substantive.
- OK — the magic + Create 2-pillar grounding is sound (alchemist cauldron already uses create:emptying/filling).

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Built through create:sequenced_assembly; whole purpose is train/contraption lighting (aeronautics/logistics). No further weave needed.

## valarian_conquest   [anchors: survival (1)]
- from: faction loot (shields, armor, weapons from structures) | via: loot-seed — seed TACZ-compatible weapon drops or Create materials into faction structure loot tables | to: Create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a faction keep drops a gun barrel or brass plate alongside the medieval loot — faction combat is the dangerous acquisition route for Create materials, tying the war side to the tech spine
- from: faction armorsmith/builder stations → Create parts as required inputs | via: recipe (gate station's craft on Create-fabricated components) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: to equip your faction's militia you need the armorsmith station, which demands andesite alloy or iron sheets from a Create specialist — feudal armies need an industrial supply chain
- from: valarian_conquest combat faction system → combat-specialist supply | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: PvPvE faction warfare generates ongoing demand for weapons, armor, and ammo — a combat specialist farms/raids faction structures and trades the spoils to builders and mages who can't afford to fight
- from: faction citizen professions → MineColonies research dependency | via: MineColonies huts / research | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: valarian_conquest citizens are autonomous NPC faction members, not MineColonies workers — these are different NPC systems with no confirmed integration point. No Phase-3 authoring surface.
- from: faction economy node → numismatics coin payment for mercenary hire | via: numismatics trade / config | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: M-08 requires player-pressed coin from scarce regional metal — mercenary hire would require Numismatics coin paid by players, which IS M-08 compatible, BUT the dossier candidate framed this as M-09 (NPC faucet); the player paying coin to hire a merc is ambient economy endpoint, not a demand-gating weave. Reject as bare sell/hire link.
- REWORK: dossier 2nd-anchor candidate "economy via numismatics M-09" — M-09 is retired; the real viable link is M-34 combat-supply (accepted above), not a coin-for-hire NPC faucet.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / rifle rounds (bulk ammo) → consumption demand | via: combat use (ammo as expendable) | to: survival/economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo is consumed every fight — a Create-automated shell factory supplies a continuous PvPvE demand; production never zeroes out because conflict is permanent pressure
- from: createimmersivetacz ammo pipeline → aeronautics logistics | via: aeronautics cargo network (bulk ammo as heavy/bulky good requiring air freight) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: crates of shells are too heavy to carry in inventory at scale; the arms dealer ships bulk ammo via airship to faction fronts — logistics arm earns its role as a military supply line
- from: createimmersivetacz ammo (shells/rounds) → MineColonies guard/barracks supply | via: MineColonies requests (colony guard resupply) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's barracks requests TACZ rounds for its guards — the arms factory is the colony's military supplier, locking production into the colony economy route
- from: createimmersivetacz ammo → numismatics coin "arms dealer" | via: numismatics trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is retired; bare sell-link. The accepted M-26/M-34 supply links are the correct economy edges.
- REWORK: dossier 2nd-anchor candidate "economy via numismatics M-09 arms dealer" — M-09 is retired; promote M-26 consumption (accepted above) as the correct economy link.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork molten metals → numismatics coin mint (scarce regional metal → Create-processed → pressed coin) | via: create:crushing → create:mixing (melt) → create:pressing → numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the pack's regional ore scarcity means only the region that controls a given metal can mint its coin; createmetalwork's melt-cast pipeline is the processing layer between raw ore and the mint — coin supply is literally tied to ore-gen
- from: createmetalwork molten magic ores (mithril, palladium, pyrium) → magic processing | via: create:crushing → create:mixing (melt) → irons_spellbooks / ars recipes | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing mithril ore in a Create mill before smelting yields more ingots — the magic specialist benefits from routing their ore through the metallurgist's foundry; no magic self-sufficiency on metals
- from: createmetalwork crushed/molten ore byproducts → occultism:spirit_fire / ritual | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: there is no confirmed occultism recipe consuming molten metal byproducts — spirit_fire works on organic drops, not molten metals. No grounded join key; would be forced.
- REWORK: dossier 2nd-anchor candidate "magic via create:crushing of magic-mod ores M-03" — this is correctly framed and accepted above. The M-08 coin link is also accepted and is the stronger economy anchor.

## emojitype   [anchors: support/client UI (1)]
- LEAVE — client-only chat input helper; 0 items, 0 content; no pillar weave possible.

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry finished liquors (beer/vodka/whiskey/tequila) → aging/maturation step | via: create_cheese:maturing or vinery ferment time-step | to: survival/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a batch of whiskey gains complexity sitting in a barrel — the aging specialist times production, the output has more value than the raw Alcohol Base, and the time-lock creates genuine demand lag that buffers the economy
- from: alcohol_industry:alcohol_base (Create mixing/filling output) → irons_spellbooks:alchemist_cauldron as a solvent input | via: irons_spellbooks:alchemist_cauldron_fill | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the alchemist's cauldron needs a high-proof solvent to extract magical essences; industrial alcohol becomes a Create-magic bridge — the distillery supplies the wizard
- from: alcohol_industry liquors → numismatics tavern trade | via: numismatics trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 is retired; bare sell-link. M-35 maturation and M-12 processing-chain pull are the correct weave edges.
- from: alcohol_industry:bioethanol (if cross-compatible with createaddition bioethanol) → liquid_burning FE generation | via: createaddition:liquid_burning | to: Create | motif: M-13 | power: everyday | tone: ok | verdict: REJECT | reason: createaddition registers its own bioethanol under its own namespace; whether alcohol_industry's output shares the same fluid tag is unconfirmed from dossier data alone. Flag for in-game JEI verification before authoring. No confirmed join key.
- OK — Create + survival 2-pillar grounding is sound.

## beachparty   [anchors: survival (1)]
- from: beachparty:coconut_open / tropical fruit (melon/cocoa) → extradelight:juicer or create:milling processing | via: extradelight:juicer | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fresh coconut through an Extra Delight juicer yields coconut cream used in broader cooking chains — beach crops flow into the food processing web, not just the Palm Bar
- from: beachparty cocktails → irons_spellbooks:alchemist_cauldron_fill as exotic fluid input | via: irons_spellbooks:alchemist_cauldron_fill | to: magic | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: cocktails are low-tier food items (simple status buffs); using them as a magic brew ingredient is a stretch in both power tier and thematic tone (tropical vacation drink ↔ arcane alchemy). Tone: clash.
- from: beachparty:mini_fridge ice → create:filling cold-fluid stock | via: beachparty:mini_fridge_freezing → create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mini fridge makes vanilla ice/packed ice which is already obtainable; no confirmed Create recipe specifically pulls packed ice as a scarce input. Weak — no demand gate.
- from: beachparty cocktail buffs → combat role (pre-fight buffs for faction warfare) | via: consumption before raids / emergent | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: this is emergent player behavior, not a recipe weave — no Phase-3 authoring target.

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick/terracotta roof variants → create:crushing back to gravel/stone dust + xp nugget | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished stone roof goes through the crusher — deco material flows back into the production web. Scope: stone/brick/terracotta family only (not all 600; flag for wholesale deco-family pass).
- from: all 600 roof variants → create:crushing wholesale | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600 blocks is enormous scope; dossier notes this is low-value without a wholesale deco sweep. Accepted edge above (stone family) is the right scoped subset.
- OK — decoration anchor is sanctioned.

== CHUNK COMPLETE ==
