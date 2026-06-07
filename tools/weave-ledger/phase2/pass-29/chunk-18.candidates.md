# Phase 2 candidates — chunk-18

## kobolds   [anchors: economy, survival (2)]

Existing connections reviewed:
- economy anchor: emerald-based trading with kobold professions → ambient economy flavor. The link is real — players use Emeralds (scarce), kobolds sell potions + enchantments + redstone goods. However this is essentially vanilla villager-style: it's an NPC supplying goods, not gating player-to-player demand. The "enchanter sells Prospector enchantment" is the most defensible piece (knowledge/service-adjacent).
- survival anchor: underground structures + hostile mob variants (Zombolds, Skelebolds, warrior kobolds). Solid — they add danger-pressure and exploration targets.

REWORK: The economy anchor as stated is an NPC trade relationship, not a player-economy demand gate. It doesn't fit the player-run ruling cleanly — kobolds aren't players minting coin or gating demand between specialists. The anchor is better re-labeled as survival/danger (they're mobs with structures) with a possible economy connection only through what drops or gates from them.

New candidates via method-pull:

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok — skulls from a dangerous underground mob as a ritual ingredient fits the "mob-drop reagent sink" pattern cleanly (spirit_fire is specifically for transmuting mob drops into essences) | verdict: ACCEPT | hook: the underground lizard-folk's skulls carry a strange spiritual charge — burn them to extract essence
- from: kobolds:kobold_skull | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok — alternative routing: skull as a consumed catalyst in an Occultism ritual (not just spirit_fire); the "enchanter kobold" angle makes a magic reagent thematically tidy | verdict: REJECT | reason: M-02 via spirit_fire already covers the mob-drop→magic path; dual-routing the same item is redundant; keep one clean entry
- from: kobold_captain/pirate loot table | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok — seed kobold pirate/captain loot tables with Numismatics coin fragments or a rare coin denomination, so clearing a kobold den yields player-mintable currency inputs; a pirate kobold den that drops coin precursors is thematically resonant | verdict: ACCEPT | hook: pirate kobolds hoard coin — clearing the den yields coin-precursor ingots worth minting
- from: kobold den loot | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok — seed den chests with combat-relevant drops (cannonball, weapon component) creating a combat-supply loop: a fighter farms kobold dens and trades the drops | verdict: REJECT | reason: kobold dens already drop iron tools + redstone via trades; the combat-supply angle is thin and the den drops are everyday-tier, not specialist trade goods; M-34 needs goods non-combat players genuinely can't get otherwise

OK — survival connection (structures + dangerous mobs) is sound.

---

## handcrafted   [anchors: support/decoration (1)]

No existing cross-system weave. Deco anchor is sanctioned; a 2nd is a plus.

- from: handcrafted:*_shelf / *_cupboard / *_counter (wood furniture pieces) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok — routing furniture through a Create Saw/Cutting board adds one light processing step so wooden furniture earns a Create tie; fits the "process a raw material through a method into a finished good" pattern; depth is one step (appropriate for everyday deco) | verdict: ACCEPT | hook: the sawmill shapes fine timber into finished furniture; nobody hand-chisels a dining set
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok — the jam jar is food-adjacent; routing it through a cooking/preserving method (FD pot, extradelight vat or evaporator) makes it a processed food output and ties it into the diet/survival layer; M-12 processing-chain pull | verdict: ACCEPT | hook: you don't just jam berries into a jar — you cook them down in a pot
- from: handcrafted furniture (high-variant count) | via: minecolonies huts / colony decoration requests | to: economy | motif: M-28 | power: everyday | tone: ok — MineColonies colonists have decoration/comfort needs; routing handcrafted furniture into colony building/upgrade requirements (as comfort-tier blocks in builder/tavern/house schematics) makes furniture a colony-demanded good, gating demand on a player who can supply it | verdict: ACCEPT | hook: colonists expect furnished quarters — the builder's hut requests chairs and shelves for upkeep
- from: handcrafted deco blocks | via: numismatics mint (luxury deco → coin) | to: economy | motif: M-09 | power: everyday | tone: clash — M-09 is retired; "sell deco for coin" is the ambient endpoint, not a weave | verdict: REJECT | reason: M-09 retired; bare sell-link rejected per player-run-economy rules

---

## packetfixer   [anchors: support/compat (1)]

LEAVE — zero items/blocks, pure network fix library; no game content surface to weave.

---

## bookshelf   [anchors: support/library (1)]

LEAVE — zero items/blocks, mod-dev library/API; no game content surface to weave.

---

## entity_model_features   [anchors: support/client-rendering (1)]

LEAVE — zero items/blocks, client-side model-replacement engine only; no game content surface to weave.

---

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]

- from: steves_lava_chicken_music_disc:hyper_potions_lava_chicken (the disc) | via: loot-seed | to: survival/economy | motif: M-34 | power: everyday | tone: clash — seeding a joke music disc into combat loot as a "combat-supply" drop is forced and would cheapen both the disc's charm and the motif | verdict: REJECT | reason: tone clash; single-item easter-egg flavor mod; the disc has no meaningful game-content surface beyond its charm; forcing an economy or combat link is noise
- LEAVE — single joke music disc; genuine zero-content-surface for weaving purposes; forcing any recipe/loot edge is a defect per the guardrails.

---

## spawn   [anchors: survival (1)]

Existing connection reviewed: farmersdelight:cooking + farmersdelight:cutting are real inbound weaves (mob drops already feed FD). Solid survival→food link. One anchor; 2nd is needed.

- from: spawn clam drops / crab drops / anglerfish | via: create:milling or create:pressing | to: create | motif: M-12 | power: everyday | tone: ok — shell-bearing creatures yield crushable/millable material (clam shells → shell powder, crab carapace → chitin meal) as a Create processing-chain; M-12 processing-chain pull; light single step appropriate for everyday aquatic drops | verdict: ACCEPT | hook: run crab shells through the millstone — shell grit is useful as a binding agent
- from: spawn clam (color-variant drops) | via: create:mixing or extradelight:mortar | to: create | motif: M-12 | power: everyday | tone: ok — clam shells as a dye/pigment precursor run through a mixing vat; alternative M-12 routing | verdict: REJECT | reason: redundant with the milling candidate above; both serve M-12 but the milling route is cleaner and less speculative; keep one
- from: spawn seafood drops (crab meat, anglerfish, sea cow) | via: createfisheryindustry:bait_trap / peeling | to: aeronautics | motif: M-31 | power: mid | tone: ok — high-volume aquatic produce (clam cases, sea cow yield) is a bulk/perishable-type good that needs logistics at scale; aeronautics/water-logistics arm moves it; ties spawn into the logistics-required-bulk-good pattern | verdict: ACCEPT | hook: a haul of clams from the Seagrass Meadow is too heavy to carry by hand — you need a boat
- from: spawn:ant_pupa / ant_farm drops | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok — ant colony drops (pupa, rare ant mob loot) as occultism reagent fodder; insect-derived ingredients are classic magical components; M-02 mob-drop reagent sink | verdict: ACCEPT | hook: ant pupae are a potent occult ingredient — alchemists call them "nest-pearls"
- from: spawn mob drops | via: numismatics sell / luxury | to: economy | motif: M-09 | power: everyday | tone: clash — M-09 retired; bare sell-link | verdict: REJECT | reason: M-09 retired; "sell exotic seafood for coin" is the ambient endpoint, not a weave

---

## hpm   [anchors: aeronautics (1)]

Existing connection reviewed: aeronautics anchor is correct — water vessels are the logistics arm. One anchor; strong 2nd needed.

- from: hpm:cuttermilitariseditem / hpm:corvette_steamship_item (military/steam hulls) | via: create:mechanical_crafting | to: create | motif: M-05 | power: endgame | tone: ok — the military cutter and steamship corvette are high-tier vessels; gating them behind Create mechanical_crafting (brass components, mechanical parts) makes the fleet a Create-spine output and ties deep-ocean transport to the tech ladder; depth appropriate for endgame ships | verdict: ACCEPT | hook: a warship isn't lashed together from planks — the hull frame runs through a mechanical press
- from: hpm:largehull / hpm:smallhull (construction components) | via: create:pressing | to: create | motif: M-23 | power: mid | tone: ok — hull planks shaped under a Create press into structural hull panels (the aeronautics structural alloy → hull-material pattern, applied to wooden hulls instead of metal); M-23 structural alloy → airframe, adapted for wooden ships; scale to mid-tier (small-hull everyday, large-hull mid) | verdict: ACCEPT | hook: hull planks need pressing into fitted strakes — straight timber won't hold at sea
- from: hpm:cannonball | via: createbigcannons recipe methods | to: survival | motif: M-34 | power: mid | tone: ok — hpm's hand-cannon munitions and the createbigcannons ammo chain are natural complements; routing cannonball crafting through CBC's assembly methods makes naval combat supply a specialist trade, and the fighter/combat player farms/crafts these while non-combat players buy them | verdict: ACCEPT | hook: the gunsmith who loads the cannon is not the sailor who sails the ship
- from: hpm ships (cutter, war-cutter) | via: minecolonies colony route | to: economy | motif: M-28 | power: mid | tone: ok — a harbor/dockmaster colony building (if MC schematics include one) could produce the basic raft/cutter more cheaply as the colony route, while the military cutter stays locked behind Create; M-28 colony route for basics | verdict: REJECT | reason: MineColonies doesn't have a "shipwright hut" by default; this requires custom schematic work that isn't established; the colony route claim is speculative without a real MC building to hang it on; flag as design intent, not a weave
- from: hpm:hand_cannon / hpm:hand_mortar | via: tacz:gun_smith_table_crafting | to: survival | motif: M-29 | power: mid | tone: ok — routing hpm's handheld cannon weapons through the TACZ gun-smith table creates a cross-route dependency (age-of-sail weapons assembled at the gunsmith bench); thematic fit is strong; M-29 cross-route dependency forcing combat-gear specialist and naval specialist to interact | verdict: ACCEPT | hook: a hand mortar is gunsmithed, not whittled — take it to the smithing bench
- from: hpm ship items as bulk goods | via: aeronautics/logistics movement | to: economy | motif: M-31 | power: mid | tone: ok — ships-as-goods are large; the irony of needing a ship to deliver a ship is thematic but the motif is about bulk goods needing logistics at scale, which doesn't quite fit the ship-item itself | verdict: REJECT | reason: M-31 is about *moving bulk cargo by logistics*; the ship item itself isn't cargo in the usual sense; forced edge

---

## bigsignwriter   [anchors: support/UI (1)]

LEAVE — zero items/blocks, client-side sign-UI utility; no game content surface to weave.

---

## rhino   [anchors: support/library (1)]

LEAVE — zero items/blocks, JavaScript engine library (KubeJS hard dep); no game content surface to weave.

---

== CHUNK COMPLETE ==
