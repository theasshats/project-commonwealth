# Phase 2 candidates — chunk-11

## formations   [anchors: survival (1)]
- LEAVE — pure cosmetic scatter-structure worldgen; registers 0 blocks, 0 loot. No item surface to route through any method; the dossier correctly concludes no coherent 2nd anchor exists. A forced recipe edge would be arbitrary.

## blueprint   [anchors: support/library (1)]
- LEAVE — Team Abnormals code library; the one shipped item (template_chest) is a vanilla-style chest with no connective method. Sanctioned support role.

## trashslot   [anchors: support/QoL (1)]
- LEAVE — UI-only, zero items/blocks/loot. No content surface to weave.

## pingwheel   [anchors: support/QoL-multiplayer (1)]
- LEAVE — keybind-triggered transient marker; zero items/blocks. No content surface to weave.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:netherite (or dragon/end-tier pack) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful packs demand a Create-fabricated locking ring or strut, making long-range expeditions cost real engineering
- from: travelersbackpack:backpack (mid-tier tank+upgrade pack) | via: create:mechanical_crafting | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: M-20 is for upgrading an existing base item via deploy/item_application, not a full mid-tier craft; mechanical_crafting here would just be a recipe replacement, not a genuine deploy-upgrade seam — misuse of the motif
- from: travelersbackpack:tank_upgrade | via: create:pressing (iron → plate → tank wall) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the tank upgrade is already a vanilla-recipe everyday item; adding a Create pressing step into it violates the "never gate a basic/everyday component behind a complex recipe" guardrail
- REWORK: existing connection is survival (1) only. The accepted M-06 endgame-pack seam adds Create as 2nd anchor. No existing connections to flag as arbitrary.

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ruin chests yield a stash of coin (spur/bevel) alongside standard loot — combat pay for pushing deeper into the Nether feeds the trade web
- from: formationsnether structure loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether altars hold partial magic reagents (source gems, arcane essences) — ruins are remnants of old workings, not arbitrary drops; players raid them for spellcraft inputs
- from: formationsnether structure loot | via: loot-seed | to: magic (boss-key reagent) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss-drop as the gate item for a complex recipe; loot-seeding a reagent into a non-boss structure chest is M-02/M-08, not M-15 — wrong motif, different mechanism
- REWORK: survival (1) only; accepted loot-seeds add economy + magic anchors (to 3). No existing connections to flag.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- OK — connections sound. Already ≥2 (Create-themed worldgen structures + survival/exploration). Optional loot-seed economy/magic edge was evaluated and correctly tagged WEAK/leave in the dossier — the mod has no items; a loot edit here is too thin to add a third anchor. No rework needed.

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries extract/gummy (refined strain product) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a strain farmer sells premium gummies at the market — the hemp farm becomes a cash crop, pulling the isolated FE-island into the trade loop
- from: smokeleafindustries:generator (FE output) | via: createaddition:liquid_burning or FE↔kinetic bridge | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the hemp generator feeds the Create rotational network (or vice-versa), so the tech farm is no longer an FE island but part of the factory spine
- from: smokeleafindustries raw bud/hemp fiber | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod already has its own grinder (manual_grinder) as the entry tier — routing raw hemp through Create milling would compete with, not complement, its own tier-1 machine; the FE↔kinetic bridge (M-05) is the cleaner Create link that doesn't undercut its internal progression
- REWORK: survival (1) only. Accepted M-09 + M-05 candidates bring economy + Create anchors (to 3). Existing connection: no rework needed (correctly 1-anchor; the dossier already flags it as an island).

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw / brazil_legends:big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a Capelobo claw cast into spirit fire yields a raw beastly essence — folklore monsters fuel the occult web; thematically, both touch something primal and dangerous
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is already an arcane-flavored preserved material; imbuement attuning it into a magic catalyst is coherent (amber-as-time-preserved-power trope)
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber sells as a luxury curio — plausible, but it's a weaker link; the magic routes (M-11/M-10) give it a real consumable role rather than just a price tag; selling it AND using it as a reagent would split its scarcity signal; prefer the reagent role
- REWORK: survival (1) only. Accepted M-11 + M-10 bring magic as 2nd anchor (to 2). No existing connections to rework.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- LEAVE — cosmetic reskin layer; dyed levitite/tires are vanilla-dye-applied variants of Aeronautics parts with identical mechanics. Routing through Create mixing for dye would be gilding; no method pull yields a coherent 2nd anchor. Sanctioned decoration/cosmetic role.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — pure worldgen library/API; 0 blocks, 0 items, 0 loot. No content surface. Sanctioned support role.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood / soul_gem | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallized blood and soul gems are the companions mod's own occult-flavored reagents — routing them into Occultism spirit-fire is the most natural seam imaginable; the Soul Furnace already does soul-conversion internally, and Occultism's spirit-fire consumes soul-state items by design
- from: companions:relic_gold (boss drop — Sacred Pontiff) | via: numismatics sell/price | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: slaying the Sacred Pontiff yields Relic Gold that trades at a premium at market — boss-earned gold as a luxury good, not a crafting gate; keeps M-15 reserved for a tech unlock if needed
- from: companions:voltaic_pillar / tesla_coil | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Tesla electrical set is a functional block, not decorative scenery — crushing it back to copper feels punitive (players would avoid building with it); M-04 is meant for deco blocks that have no gameplay purpose, not active-machine deco. Tone clash: an active electricity network being ground up is incoherent.
- REWORK: survival (1) only. Accepted M-11 + M-09 add magic + economy anchors (to 3). No existing connections to rework.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime mod; 0 items/blocks/loot. Sanctioned perf/infrastructure role; no weave possible.

## rechiseledcreate   [anchors: Create, support/decoration (2)]
- OK — connections sound. Already ≥2 (Create kinetic Mechanical Chisel method + decoration palette). The mod IS the bridge between Rechiseled and Create; no new anchor needed and no existing connection is arbitrary or mis-costed.

## trashcans   [anchors: support/automation QoL (1)]
- LEAVE — void-sink blocks with no outputs; voiding is anti-economy/anti-scarcity by design. No coherent weave in a scarcity pack. The dossier correctly notes the balance concern; flagging that as a pack-design note rather than a weave candidate.

## betterbiomereblend   [anchors: support/performance-client (1)]
- LEAVE — client-only render/perf mod; no items/blocks. Sanctioned perf role.

## knightlib   [anchors: support/library (1)]
- LEAVE — utility library; its content items (great_chalice, grails, essences, homunculus) are inert without Knight Quest, which is not in this pack. Weaving dead/inert items would create confusing loose ends. If Knight Quest is ever added, revisit (great_essence → M-02 mob-drop reagent sink).

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already ≥2 (Create logistics + aeronautics/logistics arm). The robo-bee courier network is the economy's physical movement mechanism in air; the only possible extension (economy coin-sink) is correctly flagged as infrastructure, not a trade-good link. No rework needed.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: tidal-towns ocean village structure | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: floating ocean market stalls carry coin alongside their blacksmith loot — villages as trade nodes, not just ruins; players charting sea routes by airship find real economic stops along the way
- from: tidal-towns ocean village loot | via: loot-seed | to: aeronautics | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty-board→coin, not a loot-seed-to-aeronautics path; there is no registered aeronautics-specific loot mechanism to seed; this would be a no-motif edge — reject
- REWORK: survival (1) only. Accepted M-08 loot-seed adds economy as 2nd anchor (to 2).

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crab claw is a crustacean's natural weapon — as a magical reagent in imbuement it's coherent ("claw of the deep" for a water-aspected spell or reagent); familiar trope, player nods
- from: friendsandfoes copper-set blocks (copper_button, lightning_rod variants, copper_golem_head) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: weathered copper buttons and decorative lightning rods crush back to copper nuggets — deco that oxidized in storage is recoverable scrap; the Copper Golem head is a skull-type deco block that yields copper ingot on crush
- from: friendsandfoes:wildfire or illusioner hostile loot | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Wildfire/Illusioner drops are vanilla-style loot (no named drop items in the dossier) and not distinct enough from generic hostile loot to earn a named reagent role — the crab_claw is the standout item here; spreading M-02 to generic illusioner loot adds noise without a coherent hook
- REWORK: survival (1) only. Accepted M-02 + M-04 add magic + Create as anchors (to 3). No existing connections to rework.

== CHUNK COMPLETE ==
