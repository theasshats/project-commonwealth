# Phase 2 candidates — chunk-01

## more_slabs_stairs_and_walls   [anchors: decoration/support (1)]

Power-read: 847 slab/stair/wall variants of vanilla blocks (stonecutter-shaped recipes). Everyday-tier construction material. The stonecutter form maps directly to `create:cutting` (mechanical saw). The gravity variants (concrete powder, sand, gravel) crush naturally back to base materials.

- from: stone/log slab variants | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mechanical saw can mass-produce the full cut-stone and timber trim suite for shipbuilding without grid-crafting each piece.
- from: gravity-block variants (concrete-powder/sand/gravel slabs) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: lossy-recycle of decorative blocks back to base material is redundant — the base materials are already easier to obtain than the cut variants; the loop adds no value and M-04 expects deco→raw as a byproduct, not the primary use. The cutting edge (above) is the stronger weave; don't dilute with a second weak one.

REWORK: no existing connections beyond the support anchor; cutting candidate above is the proposed 2nd weave. OK — no forced edges to flag.

---

## smokeleafindustries   [anchors: survival (1)]

Power-read: full cannabis-tech chain — crop → dryer → grinder → extractor → liquifier → synthesizer producing strain buds, extracts, gummies, joints (effect consumables). Mid-tier farm tech. Has its own FE generator. Dealer/Stoner villager trades already exist. Hemp building blocks are deco.

Dossier proposes M-09 (economy via Numismatics sell) — this is exactly the REJECTED "sellable = ambient endpoint" pattern. Must find a demand-gating link instead.

- from: smokeleafindustries extract/oil | via: createaddition:charging (FE↔kinetic bridge) | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: routing Create rotational power through the smokeleaf generator makes the hemp farm a legit power-production node on the Create spine rather than an isolated FE island — a player running Create machines has reason to build a hemp generator.
- from: smokeleafindustries:hemp_crop (raw fiber) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling raw hemp into fiber/pulp gives Create a plant-fiber processing use-case (ropemaking, insulation, or a paper intermediate for KubeJS extension) at the everyday tier.
- from: smokeleafindustries gummies/edibles | via: farmersdelight:cooking (or extradelight) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: the gummies/edibles already apply status effects when consumed — M-26 (consumption sink) is already the ambient function of the item; adding a cooking-method step makes it no more a weave, just a re-route of something that already works as a consumable. Not loop-advancing.
- from: smokeleafindustries extracts/concentrates | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme clash — psychoactive hemp extract as an arcane infusion catalyst is tonally jarring (the magic system leans arcane-scholastic, not stoner-chemistry). The FE→Create bridge is the coherent 2nd anchor.
- from: bare sell to Numismatics (dossier M-09 candidate) | verdict: REJECT | reason: M-09 retired; "extracts are sellable" is the ambient endpoint, not a weave. Economy link requires demand-gating — no such gate established.

REWORK: no existing weave connections; support anchor only. The M-17 and M-12 links above are the proposed 2nd anchor.

---

## detect-afk-1.2.2   [anchors: support/QoL (1)]

Zero items, zero blocks, zero loot. Pure server-side behavioral mod (AFK detection + sleep exclusion).

LEAVE — genuine zero-content behavioral utility; no items, methods, or loot table to weave through.

---

## rechiseled   [anchors: decoration/support (1)]

Power-read: 3,627 decorative block variants via chiseling (right-click, 1:1 reversible). Dossier notes rechiseledcreate companion already in pack adds a kinetic Mechanical Chisel — this is the obvious 2nd anchor.

- from: rechiseled:* decorative variants | via: create:cutting (rechiseledcreate Mechanical Chisel) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the rechiseledcreate companion already registers these chiseling recipes as cuttable by the Mechanical Saw/Chisel, so the Create spine can automate bulk decorative block production — a builder's automation loop already sits in the pack, just needs the recipe wiring confirmed.

REWORK: OK — rechiseledcreate companion makes the Create link established (or near-established); no forced edges on the existing decoration anchor.

---

## invtweaksemuforipn   [anchors: client QoL/support (1)]

Zero items, zero blocks. Pure client-side keybind-compat shim on top of IPN.

LEAVE — genuine zero-content client compat glue; no items, methods, or loot table to weave through.

---

## do_a_barrel_roll   [anchors: support/client QoL (1)]

Zero items, zero blocks. Client-only elytra flight-feel mod (camera/roll control).

LEAVE — genuine zero-content client behavior mod; no items, methods, or loot table to weave through.

---

## netmusic   [anchors: support/flavor (1)]

4 blocks, 6 items (cd_burner, computer, music_cd, music_player, megaphone, backpack). Already routes through `touhou_little_maid:altar_recipe_serializers`. Purely cosmetic audio.

- from: netmusic:music_cd (custom disc) | via: touhou_little_maid:altar_recipe_serializers | to: (already woven — TLM altar) | verdict: REJECT | reason: existing connection noted; no new cross-system weave to propose. A jukebox/music system has no coherent Create/magic/economy/survival material to route — forced links would be contrived.

LEAVE — cosmetic audio device with one existing altar connection; no material to route into a second system without contrivance. (The TLM altar link confirms it isn't zero-surface, but no further weave is coherent.)

---

## bcc   [anchors: support/QoL (1)]

Zero items, zero blocks. Connection-handshake utility (version mismatch detection).

LEAVE — genuine zero-content operational utility; no items, methods, or loot table to weave through.

---

## accessories   [anchors: support/library (1)]

Zero items, zero blocks. Accessory-slot API (the wearables that weave live in other mods).

LEAVE — genuine zero-content library/API; no items, methods, or loot to weave through.

---

## railways   [anchors: Create, aeronautics (2)]

617 blocks, 1015 items. Already ≥2 anchors (Create inbound: `create:mechanical_crafting`, `create:sequenced_assembly`; aeronautics/transport role). Power-read: locometal building stock (brass/copper/iron wrapped), conductor cap, track gauge variants, couplings, semaphores.

Checking for additional weave depth:

- from: railways:locometal (structural metal cladding) | via: create:sequenced_assembly | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: locometal panels are fabricated ship-cladding material — an Aeronautics hull tier could require locometal sheets as its structural skin, making train-building tech feed airship construction and creating real cross-route demand between rail and air specialists.
- from: railways regional ore demand (brass/copper/zinc/iron plates) | via: GTMOGS regional ore | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: brass is regionally scarce (GTMOGS); building a rail network requires large quantities of locometal → the rail specialist *must* trade with the copper/zinc mining region, anchoring railways explicitly to the scarcity→economy loop.
- from: railways:conductor_cap | via: minecolonies (colony-buildable transport hub) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: conductor caps and colony logistics are thematically adjacent but there is no `minecolonies` hut type for rail operations; forcing a colony link here requires authoring new colony buildings — out of scope for a Phase 2 weave against existing methods. No motif ride available.

REWORK: existing Create+aeronautics connections sound; M-23 and M-30 above propose genuine loop-advancing additions.

---

## toomanypaintings   [anchors: decoration/support (1)]

Zero items, zero blocks, no loot. Pure decorative painting selection GUI.

LEAVE — genuine zero-content decoration mod (the painting entity has no item; no material to weave).

---

## revelationary   [anchors: support/library (1)]

Zero items, zero blocks. Progression-gating library (advancement-reveal API).

LEAVE — genuine zero-content library/API; its function is enabling infrastructure for other mods' native-method gating (M-05), not a node itself.

---

## create_new_age   [anchors: Create (1)]

34 blocks, 52 items. `create_new_age:energising` is the key method — charges items with electricity+rotation. Already uses 8 Create recipe types inbound. Thorium ore worldgen (2 biome-modifiers). Corium is the reactor waste product.

- from: create_new_age:thorium_ore | via: GTMOGS regional ore-gen | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is the fuel for late-game nuclear power — if it's region-locked by ore-gen, the reactor operator must trade for fuel, making the electricity tier a genuine cross-region demand node rather than a self-sufficient island.
- from: create_new_age:energising (the method) | via: cross-route — a magic keystone requiring an energised component | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: an Ars Nouveau or Iron's Spellbooks endgame focus/lens requiring an `energised` circuit forces the magic specialist to commission the electricity tier's output, so neither route self-completes the endgame.
- from: create_new_age:corium (reactor waste) | via: create:crushing | to: create | motif: M-32 | power: endgame | tone: ok | verdict: ACCEPT | hook: Corium as a byproduct of nuclear operation that crushes into a hazardous material (or a high-tier Create input) closes the reactor loop — waste becomes feedstock rather than dead-end.
- from: create_new_age:corium | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: Corium-as-occult-reagent is thematically edgy (radioactive waste → occult spirit fire) — could work, but clashes with the magic system's arcane-scholarly tone, and M-32 (byproduct → Create input) is the stronger and less forced routing. Don't double-weave Corium across two systems with a theme-questionable second edge.
- from: create_new_age FE generation (motors/coils) | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: this is a same-system (Create) link — CNA is already Create-anchored; M-17 is for bridging *into* magic/tech from Create electricity. Routing CNA's FE back into Create is a redundant loop, not a cross-system weave.

REWORK: single Create anchor; M-30 + M-29 + M-32 above are the proposed additions to reach ≥2 systems.

---

## emojitype   [anchors: support/client UI (1)]

Zero items, zero blocks. Client-only chat emoji autocomplete helper.

LEAVE — genuine zero-content client utility; no items, methods, or loot table to weave through.

---

## openpartiesandclaims   [anchors: support/server protection (1)]

Zero items, zero blocks. Chunk-claim + party framework.

LEAVE — genuine zero-content server-protection utility; no items, methods, or loot table to weave through.

---

## crash_assistant   [anchors: support/client utility (1)]

Zero items, zero blocks. Client-side crash diagnostic GUI.

LEAVE — genuine zero-content client diagnostic utility; no items, methods, or loot table to weave through.

---

## dynamictrees   [anchors: survival (1)]

90 blocks, 35 items, 2 biome-modifiers, loot=yes. Registered methods: `dynamictrees:mega_seed`, `dynamictrees:seed_conversion`. Living-tree worldgen replacement; whole-tree felling yields all logs at once.

The dossier flags LEAVE due to DT's awkwardness with Create automated harvesters. Let me re-examine for a loot-seed or survival-pressure angle before confirming.

- from: dynamictrees:dendro_potion (growth accelerant) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: dendro potions accelerate tree growth — imbuement to upgrade them is thematically plausible, but DT's core mechanic is worldgen/organic, and this creates an infusion step for a worldgen-acceleration tool rather than a production material. Depth-mismatch: an everyday-tier worldgen potion shouldn't need arcane infusion (anti-basic-component guardrail). Reject.
- from: dynamictrees mega-seeds (bulk log drop) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT logs feed vanilla/Create wood processing downstream naturally — no recipe addition needed; the wood economy link is ambient (DT outputs → Create mill), not a new weave. Forcing a specific DT-seed milling recipe adds nothing the existing wood chain doesn't already provide.
- from: dynamictrees loot (whole-tree harvests) | via: loot-seed (add pack-economy drops) | to: survival/economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: DT loot tables are standard logs/saplings; seeding economy-relevant drops into tree-harvests (like a rare resin or bark) would make DT a combat-supply or craft-supply node — but this is inventing new items, which is Phase 3 authoring work, not a Phase 2 loot-seed against an existing material. No existing item to route.

LEAVE — the existing log-economy link is ambient (DT trees output vanilla logs → downstream processing is already present); DT's own methods (seed_conversion/mega_seed) don't accept foreign materials as inputs, and automated harvesting is incompatible with DT's growth model. No coherent 2nd anchor via existing methods without authoring new content.

---

## incontrol   [anchors: support/server-util (1)]

Zero items, zero blocks. JSON-rule mob-spawn/loot controller.

LEAVE — genuine zero-content config utility (designer's lever); no items, methods, or loot table of its own to weave through.

---

## notenoughcrashes   [anchors: support/stability (1)]

Zero items, zero blocks. Client crash-recovery GUI.

LEAVE — genuine zero-content stability utility; no items, methods, or loot table to weave through.

---

## create_cheese   [anchors: Create, survival (2)]

1 block, 33 items. `create_cheese:maturing` is the core method. Already ≥2 anchors. Dossier proposes M-09 (sell to Numismatics) — rejected pattern under economy-is-player-run rules.

Checking for genuine economy demand-gating links:

- from: create_cheese aged cheeses (high-effort, time-gated food) | via: minecolonies requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies tavern/cook huts could request aged cheeses as upkeep ingredients — the colony's food demand creates a recurring pull on the cheese specialist that never zeroes out, making the aging cellar load-bearing for colony growth rather than optional luxury.
- from: create_cheese:maturing (the method itself) | via: M-35 maturation | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: the Cheese Cellar is the pack's canonical aging station — other mods' perishable/fermentable items (Vinery must-ferment, FarmersDelight cured meats, Supplementaries jars) could route through `create_cheese:maturing` as an extensible aging station, making create_cheese the artisanal-food hub and giving the mod a cross-mod method role.
- from: create_cheese calendar pages (tier I/II/III) | via: create:sequenced_assembly (multi-stage timing gate) | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: calendar pages select maturing tier within the cheese system — they're an internal timing parameter, not a depth-adding endgame component. Routing them through sequenced_assembly would be gating a timer-token behind a complex chain, violating the "basics not behind complex recipes" guardrail. The maturation timing is already the depth mechanism.
- from: M-09 "aged cheese → sell" (dossier candidate) | verdict: REJECT | reason: M-09 retired; bare sell link is the ambient endpoint, not a weave.

REWORK: existing Create+survival anchors sound. M-28 (colony demand) is the proposed economy link; M-35 (maturing-station role) broadens the method's pack footprint.

== CHUNK COMPLETE ==
