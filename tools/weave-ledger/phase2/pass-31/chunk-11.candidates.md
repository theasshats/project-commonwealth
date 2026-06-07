# Phase 2 candidates — chunk-11

## bundle_recipe   [anchors: support/QoL (1)]
LEAVE — pure recipe-enabler (one vanilla datapack for minecraft:bundle); no items, no methods, no loot. Nothing to route through any method. Genuine zero-content surface.

---

## naturalist   [anchors: survival (1)]
- from: naturalist:antler | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: antler — bone-analog from a hunted deer — is exactly the kind of organic drop a spirit-fire transmutation would refine into a necromantic/bone reagent; hunter feeds the occultist
- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: firefly glow-goop is bioluminescent — imbueing it into a source-gem-adjacent reagent (light-attuned essence) is thematically tight; forager/naturalist fills the magic lab's shelf
- from: naturalist:shellstone (block) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: shellstone is a stone-analog deco set — crushing it back to gravel + XP nugget (lossy) gives builders a Create-flavored disassembly path rather than a dead-end
- from: naturalist:bushmeat / naturalist:venison | via: farmersdelight:cooking | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: hunted meats slot into Farmer's Delight cooking chain → provide the protein group that diet-variety (appleseed) demands; hunter specialist supplies the cooking pipeline
- from: naturalist:antler (as "bone"-class reagent) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling an antler into bonemeal-analog is valid but trivially covered by vanilla grinder; adding a Create milling step for antler is over-engineering a basic everyday item (anti-basic-gating rule)
- REWORK: dossier candidate "economy via numismatics sale of venison as luxury food" is a bare sell-link (M-09 retired) — reject it; the real economy hook is diet-demand (appleseed pulls on the food-production chain) which is handled by M-12 above.
OK — the accepted M-02 (antler→magic) and M-02 (glow_goop→magic) + M-04 (shellstone crushing) + M-12 (meat cooking) give naturalist 2 pillars (survival + magic, with Create as a secondary); connections sound.

---

## cbc_at   [anchors: Create, aeronautics (2)]
- from: cbc_at heavy-autocannon/rocket-pod tier | via: cbc_at:ha_munition_assembly (native gated by boss drop input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy autocannon is ship-to-ship tier; gating its barrel/breech behind a boss-drop component (e.g. Cataclysm Iron Golem fragment or Born-in-Chaos dark metal drop) anchors late-tier warship armament to the combat specialist, not the wallet
- from: cbc_at rifled-barrel / silencer upgrade tier | via: minecolonies research | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: barrel attachments (rifled barrel, silencer, muzzle brake) are mid-tier modifications — a MineColonies military/blacksmith hut unlocking the attachment design fits colony-as-alternate-route (cost: colony research vs. boss route for full barrels)
- from: cbc_at munition supply (caseless, AP shells) | via: emergent trade (no recipe) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: munitions are consumed in combat and non-combat players can't self-supply armament; the ship-combat specialist farms/manufactures and trades ammo to others — the supply side of M-34
- from: cbc_at:autocannon_silencer / attachments | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: dossier already notes the munition pipeline routes through CBC's own assembly recipe types (cbc_at:ha_munition_assembly etc.) which are equivalent in depth to sequenced_assembly; adding a second layer through create:sequenced_assembly specifically is double-gating without thematic payoff — keep the native pipeline
REWORK: existing connection to "aeronautics" is sound (it arms ships), and "Create" is sound (built via Create metals/cutting). The proposed M-15 + M-28 add economy/combat-supply edges — previously missing. Flag the dossier's "deepening only" note as insufficient: M-34 combat-supply is a real 3rd-anchor that the dossier undersells.
OK — existing 2 anchors sound; M-15 + M-34 deepen without contradicting.

---

## l2library   [anchors: support/library (1)]
LEAVE — zero-content code library (0 blocks, 0 items, no recipe types, no loot). Required dep for L2Hostility only. Nothing to route.

---

## appleseed   [anchors: survival (1)]
- from: appleseed diet-demand (protein group) | via: config/demand signal (no recipe) | to: create | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: diet-variety continuously demands diverse food production (protein/grain/vegetable/fruit/sugar) — this is the loop's pressure→production edge; appleseed IS the consumption sink that keeps the food-production chain demanded
- from: appleseed balanced-diet buff | via: config tie (food-value tuning) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: the economy link is "food becomes valuable" which is a bare sell-link dressed as consumption; the actual demand signal is already captured above via M-26 into production; a second M-26 to economy is redundant and the delivery is "emergent" not authored — do not double-count
- from: appleseed diet groups | via: farmersdelight:cooking chain | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-12 is properly on Farmer's Delight or the food mods — appleseed has no items/methods of its own; it can't be the FROM node of a recipe edge. The diet-demand relationship is correctly a demand-signal (M-26 via config/tuning), not a recipe route through appleseed.
REWORK: dossier 2nd-anchor candidate "economy via numismatics" is M-09 (retired) — should be struck. Dossier's production-by-demand framing is correct but the motif should be explicitly M-26 (consumption/demand sink).

---

## fluid   [anchors: Create, aeronautics (2)]
OK — connections sound. fluid is already anchored on Create (all parts built via Create methods) and aeronautics (centrifugal pump + fluid interfaces serve ship fluid routing). No forced 3rd anchor needed — a fluid-infrastructure mod sitting at 2 is healthy. No REWORK.

---

## prickle   [anchors: support/library (1)]
LEAVE — pure config-serialization library (0 blocks, 0 items, no loot, no methods). Genuine zero-content surface.

---

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spider fang from a dangerous cave recluse is a perfect spirit-fire transmutation input — the dungeon-diver brings the reagent, the occultist transmutes it; cavernous danger feeds the magic lab
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: both M-11 (spirit_fire) and M-02 (imbuement) are valid methods, but proposing the same material to two magic methods in one pass is double-spend risk; M-11 via occultism:spirit_fire is stronger (the fang's "venom" flavor fits Occultism's necromantic transmutation better than Ars arcane imbuement), and single-sink keeps reagent-ownership clean — reject the Ars path, keep spirit_fire
- from: undergroundworlds temple/pyramid bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: temple bricks are a stone-family block — lossy crushing (brick → cobble/gravel + XP nugget) gives builders a Create-compatible disassembly path for reclaimed material; standard deco-recycle link
- from: undergroundworlds:desert_charm / antidote_flask (loot) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: the charms are self-contained utility items from dungeon loot; seeding them into economy via M-34 would require a combat-supply chain, but these are wearable charms (blindness/poison immunity), not consumable ammo — the supply loop doesn't close the same way; forced edge

---

## bettermineshafts   [anchors: survival (1)]
LEAVE — structure-overhaul only (0 blocks, 0 items, loot=no, uses vanilla mineshaft loot). No loot table surface, no items, no methods. No hook to route; leaving is correct per the guardrails (no fabricated edge).

---

## alternate_current   [anchors: support/perf (1)]
LEAVE — pure redstone-propagation performance patch. Zero content, no items, no loot, no methods. Invisible infra.

---

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit / dark_metal | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal is an ore/deposit with a spooky-fantasy vibe that Create crushing converts to nuggets + XP — the Create spine doubles the yield, making the dangerous mob that drops it worth hunting; danger→production loop
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: bundle of bones is literally a cursed/undead material — spirit-fire transmuting it into a necromantic bone-reagent (crushed soul dust or similar Occultism input) is thematically exact; the Halloween-horror vibe amplifies the occult link
- from: born_in_chaos_v1:dark_metal (processed) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal is a regional-ish rare combat drop (not common ore) — pressing it into a specialty coin via Create → Numismatics lets the combat specialist mint a rare currency only they can supply; player-controlled money supply from danger
- from: born_in_chaos_v1:pumpkin_staff / soul_saber (boss drops) | via: native recipe (boss drop as input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Pumpkinhead boss's signature drops are the thematic endgame gate items for something dark-metal-tier (a Create dark-alloy press plate, or a sequenced-assembly component); boss gates the production tier
- from: born_in_chaos_v1:bagof_candy (seasonal) | via: worldgen/spawn or seasonal event | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is "seasonal reagent feeds a machine/ritual" — bag of candy is already a seasonal drop (Oct–Nov boss window), but routing it as a ritual/machine input is a stretch; it's a cosmetic/consumable food item with no obvious machine consumer; forced edge, nothing coherent to route it through
- from: born_in_chaos_v1:black_argillite | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 on dark_metal_deposit already ties born_in_chaos to the Create crusher; adding M-04 on argillite is a second crusher link that adds depth-noise without loop advancement; argillite is deco stone, not a system-driving material — one crusher link is enough

---

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill | via: demand signal (player-SU labor) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the treadmill converts player physical effort into SU — it IS a consumption sink (player time/action spent to run the network at early tiers before water wheels are built); pressure-side labor cost, not zero-effort power
- from: createtreadmill:maid_motor + touhou_little_maid:soul_orb | via: create (SU output into a network) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: the maid_motor is a cute flavor bridge to TLM, not a service-for-hire economy link; routing TLM soul orbs as a "service" material to others doesn't make player-economy sense (soul orbs are a TLM-internal mechanic, not a tradeable commodity others need); no clean cross-player economy edge
REWORK: dossier correctly leaves at 1 anchor with "no clean 2nd anchor." The M-26 (treadmill as labor-consumption sink) does give a survival edge — the player's body is the resource spent, fitting the pressure-side of the loop. Upgrade from LEAVE to 1 accepted candidate.

---

## xaeroworldmap   [anchors: support/navigation (1)]
LEAVE — client-side map rendering with no items, no loot, no methods, no server state. Pure UI infrastructure.

---

## everycomp   [anchors: support/decoration-compat (1)]
LEAVE — runtime block/recipe generator with no items of its own; 0 content surface. Its outputs are already namespaced under host mods (Create, Macaw's, Blockus) where any weaving belongs. Generator is not a FROM node.

---

## create_ultimate_factory   [anchors: Create (1)]
- from: create_ultimate_factory renewable-diamond recipe (coal-block+lava → diamond via create:compacting) | via: create:compacting | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: REJECT | reason: CUF intentionally makes diamonds renewable — but the pack's design is scarcity-driven (M-30 regional ore-gen keeps goods region-locked). A packaged renewable-diamond recipe directly undermines the scarcity foundation; this should be reviewed for removal/disabling rather than woven deeper. Flag as a scarcity conflict, not a weave candidate.
- from: create_ultimate_factory strata-stone recipes (nuggets+gravel+lava → strata) | via: create:compacting/mixing | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: industrial byproduct → raw stone is a circular loop (M-32 byproduct→input); leftover nuggets and gravel from ore processing feed the stone machine rather than being wasted — exactly the waste-capture edge
REWORK: the renewable-diamond recipe is a **scarcity conflict** — the pack's foundation is M-30 regional-scarcity gates; a freely-renewable diamond recipe punches a hole in that. Recommend disabling that specific CUF recipe via KubeJS (flag for Gate 2 review, not authoring here).

---

## packetfixer   [anchors: support/perf (1)]
LEAVE — pure network-packet-size fix. Zero content, no items, no methods, no loot. Invisible infra.

---

## accessories_compat_layer   [anchors: support/compat (1)]
LEAVE — mixin-based API shim translating Curios/Trinkets calls to Accessories. Zero content surface; the wearables that could be woven live in the host mods (Curios users: Ars Nouveau rings, Iron's amulets, etc.). Nothing to route here.

---

## owo   [anchors: support/library (1)]
LEAVE — GUI/config/networking framework library. Zero content, no items, no loot, no methods. Pure developer infra.

---

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins are exactly where a specialist might leave behind pressed coin blanks or a partial mint setup — seeding coin blanks (or a Numismatics starter) into the loot gives the early explorer a currency head-start, grounding the mint in worldgen exploration
- from: create_ltab structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: an abandoned Create workshop could contain a vial of spirit solution or a source gem shard — a magic reagent dropped from an industrial ruin is a coherent discovery (occultist loots old factory, finds a forgotten experiment); loot-seed anchors the structure to the magic production chain
- from: create_ltab structure loot | via: loot-seed | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: seeding structural alloy (M-23) into loot is plausible, but M-23 is about making airframe construction require fabricated alloy — a loot seed doesn't gate the airframe requirement, it just adds a freebie. Loot bypasses the fabrication step rather than reinforcing it; this would undercut M-23's tension. Reject.
OK — existing 2 anchors (Create-theme + survival/worldgen) are sound; M-08 + M-02 loot-seeds add economy and magic edges.

---

## curios   [anchors: support/library (1)]
LEAVE — slot-framework API with no items, no recipes, no loot. Genuine zero-content surface; its weave value is hosting other mods' accessories (Ars/Iron's rings/amulets), which belong to those dossiers.

---

== CHUNK COMPLETE ==
