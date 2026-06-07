# Phase 2 candidates — chunk-03

## sky_whale_ship   [anchors: survival (1)]

- from: sky_whale_ship loot tables | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales are the natural airship destination — seed their chests with a rare aeronautics/Create component (e.g. a structural plate, an engine part, a blueprint fragment) so reaching one by ship rewards the investment in building it
- from: sky_whale_ship loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: whale chests drop a rare trade-good (exotic hide, a curiosity item) that becomes a high-value Numismatics sell or bounty target — aerial combat → coin
- from: sky_whale_ship loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: no thematic connection between flying whale and arcane reagents; forced; better handled by the aeronautics/economy seeds above

REWORK: existing survival anchor is fine (adventure destination); the mod's only weakness is it has no 2nd link — the two ACCEPTs above supply it.

---

## crash_assistant   [anchors: support/client-utility (1)]

LEAVE — pure crash-diagnostic client utility; 0 items, 0 blocks, 0 methods; nothing to route through or weave.

---

## oceansdelight   [anchors: survival (1)]

- from: oceansdelight:elder_guardian_roll / fugu_slice / guardian_soup | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean cuisine is rare inland — coast players sell high-effect seafood (elder guardian roll, fugu slice) to Numismatics as luxury trade goods, feeding the scarcity→economy loop
- from: oceansdelight:cut_tentacles / guardian flesh | via: create:milling or create:crushing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling/crushing ocean flesh into a useful intermediate has no clear landed output in this pack; the food is already processed via FD methods; no coherent Create-side product emerges; don't force

REWORK: existing FD wiring (farmersdelight:cooking/cutting made-by) is correct; economy ACCEPT above gives the required 2nd anchor cleanly.

---

## resourcefulconfig   [anchors: support/library (1)]

LEAVE — pure config-framework library; 0 items, 0 blocks, no methods; no material surface to weave.

---

## ohthetreesyoullgrow   [anchors: support/library (1)]

LEAVE — tree-generation worldgen library; 0 items, 0 blocks, 0 recipe-types; no player-facing content to weave.

---

## cold_sweat   [anchors: survival (1)]

- from: cold_sweat:hearth / boiler (fuel-burning climate machines) | via: M-05 native-method gating (gate higher-tier emitter on Create brass/casing) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: upgrading your hearth to a brass-cased industrial boiler is exactly the Create-spine progression beat — scarcity of warmth drives players to invest in the tech tree
- from: cold_sweat:goat_fur_chestplate / chameleon gear (insulated armor) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: arctic-biome expeditions need cold gear — players near tundra biomes specialize and sell insulated armor sets to inland buyers via Numismatics
- from: cold_sweat:filled_waterskin (create:filling already exists as inbound) | via: create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the create:filling edge already exists (shown in made-by methods); this would duplicate an existing connection, not add a new pillar
- from: cold_sweat fur/hide insulation materials | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — cold survival gear has no arcane resonance; forcing a magical infusion on mundane insulation material is incoherent to a player

REWORK: cold_sweat sits at 1 anchor (survival); the two ACCEPTs give it Create + economy for a solid 3-pillar position; no existing connections to flag as weak.

---

## voicechat   [anchors: support/comms (1)]

LEAVE — proximity voice communication; 0 items, 0 blocks, 0 methods; pure infrastructure, nothing to weave.

---

## rottencreatures   [anchors: survival (1)]

- from: rottencreatures:frozen_rotten_flesh / magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: elemental zombie flesh (frozen/magma) is a natural occultism spirit_fire transmutation input — biome-specialised combat drops become arcane reagents, tying the hostile-mob layer to the magic pillar
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted nether wart from an undead pirate/miner feels naturally imbued — routing it through the Ars imbuement apparatus as a mid-tier reagent input gives kills a magic-economy payoff
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: haunting (soul-fire pass) of frozen rotten flesh to yield a soul-tainted bone dust or similar — Create's own ghost-fire method applied to thematic zombie remains; satisfying cross-system use
- from: rottencreatures:treasure_chest (loot) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seed Dead Beard's treasure_chest loot with coins or a bounty-redeemable item (pirate treasure → Numismatics payout), making the combat→economy path explicit
- from: rottencreatures mob heads | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: mob heads as luxury sell goods is plausible but shallow — trophy items rarely form the backbone of trade; the loot-seed / bounty path (M-14 above) is the cleaner economy hook and covers the same beat without inflating the sell-goods list

REWORK: no existing cross-system connections to flag; survival-only at entry. Four ACCEPTs give magic (×2) + Create + economy, which is strong — all four are coherent and not redundant.

---

## create   [anchors: Create (1)]

LEAVE — Create is the method library and tech spine; it IS the pillar other mods weave INTO. Its dossier explicitly notes it should not be the recipient of weave-edges. No action.
OK — connections sound (it is the hub, not a spoke; the 1-anchor label is correct by design).

---

## dragonlib   [anchors: support/library (1)]

LEAVE — developer code-library (API/abstractions); 1 dev-artifact block with no gameplay surface; nothing to weave.

---

## towntalk   [anchors: support/MineColonies-flavor (1)]

LEAVE — audio cosmetic addon for MineColonies colonist voices; 0 items, 0 blocks; the real colony/economy/Create weave is owned by MineColonies itself; no independent edge possible.

---

## bakery   [anchors: survival (1)]

- from: bakery:strawberry_cake / chocolate_gateau / linzer_tart (high-effort baked luxury goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bakery's finished cakes are exactly the kind of high-effort luxury that should trade hands — bakers specialize and sell to the server's market, feeding scarcity → production → economy
- from: bakery flour/wheat input chain | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat to flour through a Create Millstone before the bakery chain wires the baking web to the tech spine at an everyday step — grain goes in, flour comes out, baking follows
- from: bakery:apple_jam / strawberry_jam (high-saturation luxury foods) | via: ars_nouveau imbuement (source-feed via Agronomic Sourcelink) | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: surplus baked goods as source-generation feedstock is the dossier's own WEAK candidate — a Sourcelink consuming cakes is bizarre thematically and is better owned by farm/crop mods; clash survives red-team

REWORK: existing Farm & Charm cooking chain (made-by methods) is correct; two ACCEPTs give economy + Create for a clean 3-pillar result.

---

## supplementaries   [anchors: Create, survival (2)]

OK — connections sound. Already ≥2 pillars with jar-grounded Create inbound edges (haunting/mixing/splashing) and FD/food-chain ties. Dossier correctly notes no further edges needed. Latent economy angle (jars/safes as shop furniture) is noted but requires no action.

---

## letsdocompat   [anchors: survival (1)]

LEAVE — pure recipe/tag bridge for the Let's Do / Farm & Charm / Farmer's Delight food cluster; 0 items, 0 blocks; its function IS connective tissue for the food web (M-12-style) and adding a 2nd pillar to the glue mod itself would be forcing an edge. No action.

---

## createnuclear   [anchors: Create (1)]

- from: createnuclear:steel_block / steel ingot (c:ingots/steel) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is a regional-scarce alloy requiring uranium-adjacent processing — minting it into coin (or pricing it in Numismatics) makes the reactor supply chain a genuine economy driver, not just a power tower
- from: createnuclear:uranium (refined) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: processed uranium fuel is the most resource-intensive material in the pack — seeding its refined form as a premium Numismatics commodity creates a real high-value trade good that only reactor-builders can supply
- from: createnuclear:anti_radiation armor (hazmat set) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: only reactor operators need hazmat gear — they craft and sell it to anyone who needs to pass near the reactor zone; survival-gear specialization → economy distribution
- from: createnuclear:enriched_soul_soil (enriched method output) | via: create:haunting | to: Create/magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: soul-enriched soil passing through Create's haunting method as a further refinement step (soul-fire enhancing enriched material) feels thematically tight and deepens the reactor/soul-fire seam
- from: createnuclear radiation hazard | via: config tie / survival pressure | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: radiation-as-hazard is thematic pressure but routes through no registered method and fits no current motif; no-motif → REJECT-for-review per rules
- from: createnuclear:lead ingot | via: aeronautics hull ingredient | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: lead's density and radiation shielding make it a coherent structural or shielding material in an airship hull, adding depth to high-tier airframe construction

REWORK: no existing cross-system connections to flag; pure Create entry. Five ACCEPTs give economy (×3) + Create internal depth + aeronautics, which fills the loop well.

---

## biolith   [anchors: support/library (1)]

LEAVE — worldgen/biome-placement library; 0 items, 0 blocks, 0 recipe-types; pure API with no player-facing material surface.

---

## betterpingdisplay   [anchors: support/UI (1)]

LEAVE — client-side UI mod replacing ping-bars with numbers; 0 items, 0 blocks, 0 methods; no content surface.

---

## better_lib   [anchors: support/library (1)]

LEAVE — shared config/messaging library; 0 items, 0 blocks, no gameplay; nothing to weave.

---

## clumps   [anchors: support/performance (1)]

LEAVE — XP orb merging performance mod; 0 items, 0 blocks, no methods; behavior-only, nothing to weave.

---

## doubledoors   [anchors: support/QoL (1)]

LEAVE — door-interaction convenience behavior; 0 items, 0 blocks, no methods; nothing to weave.

---

== CHUNK COMPLETE ==
