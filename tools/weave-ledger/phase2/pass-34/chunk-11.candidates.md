# Phase 2 candidates — chunk-11

## ecologics   [anchors: survival (1)]

- from: ecologics:coconut / coconut_slice (c:item/foods/fruit) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing coconut through a millstone yields coconut flakes/oil — a cooking ingredient the farmer's-delight chain pulls, so a beach biome feeds the food production spine
- from: ecologics:coconut_husk (bowl substitute, c:item/foods/nut adjacent) | via: farmersdelight:cutting or extradelight:mortar | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: husking coconut into cream/shreds for a cooking recipe forces players to process the raw fruit, not just eat it
- from: ecologics:azalea_flower (shearable, seasonal-ish deco bloom) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: azalea petals as a mild floral catalyst in an imbuement step — gathered from biome, spent in magic — ties worldgen flora into the magic production chain
- from: ecologics:azalea_log / coconut_log (woodsets) | via: create:milling | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 recycles deco is lowest-priority; vanilla-style woodsets have no special angle here; creates noise without meaningful advancement of the loop; deprioritize unless a third weave is needed

REWORK: none — existing single anchor (survival) is correct; the two ACCEPTs above lift it to survival + Create/magic (a net two-anchor result).

---

## imfast   [anchors: support / QoL (1)]

LEAVE — zero-content movement-validation patch; no items, no methods, no material graph. No coherent weave surface.

---

## creativecore   [anchors: support / library (1)]

LEAVE — pure code library (GUI/packet/event API); zero items, zero methods. No weave surface by definition.

---

## jeed   [anchors: client UI / support (1)]

LEAVE — JEI display-only addon (effect documentation); its two "recipe-types" are viewer categories, not craftable methods. No material graph, no weave surface.

---

## jakes-build-tools-2.0.1.5   [anchors: support / QoL (1)]

- from: minecraft:experience_flask_* (XP storage items from this pack) | via: create_enchantment_industry:grinding (Mechanical Grindstone) or create:filling | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the experience_flask items are builder conveniences (store/release XP), not a production-chain material; routing them through Create machinery is a forced edge with no loop-advancing payoff; the mod is builder QoL, not a production mod
- LEAVE — build-assist toolset (hammer, chisel, trowel, ladder, tape); no processing methods or materials to route through the loop. Forcing a recipe edge onto consumable utilities adds noise.

---

## controlling   [anchors: support / client UI (1)]

LEAVE — keybind-search UI mod; zero items, zero methods, zero content surface.

---

## pantographsandwires   [anchors: Create, aeronautics (2)]

OK — connections sound. Already ≥2 anchors (Create spine recipes + aeronautics/rail logistics). Coal_coke and graphite material tags are shared-material nodes that other mods could pull in future; no new edge required now.

---

## kubejs   [anchors: support / modpack tooling (1)]

LEAVE — the recipe-weaving engine itself; no player-facing items or methods. It enables weaves; it is not a weave target.

---

## touhou_little_maid   [anchors: survival (1)]

- from: power-point bottles (altar currency; fairy-drop loot) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gate a maid-class upgrade (or the Broom flight item) behind a magic reagent input in an altar recipe — arcane_essence or a source_gem bottle as a co-ingredient — so the Altar reads as a shrine-maiden rite that bridges the magic pillar; a magic specialist's output gates the companion upgrade
- from: boss-drop (any pack-designated boss signature drop) | via: touhou_little_maid:altar_recipe_serializers | to: survival / production route | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the highest-tier maid or legendary gear unlocked only when a boss drop is laid on the altar towers — the shrine maiden ritual as a boss-gate rite; fits the altar's "offering" aesthetic perfectly
- from: power-point bottles as traded commodity | via: economy (player Numismatics trade) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: power-point bottles are a currency to the Altar, not a combat-specialist trade good; linking them to M-34 combat-route supply is a stretch — the bottles come from village loot and mob fairies, not a dedicated combat specialization; bare sell-link proximity (too ambient); REJECT in favor of the cleaner M-05 and M-15 chains above

REWORK: the existing anchor (survival via companion automation) is sound. The two ACCEPTs give it survival + magic (2 anchors reached).

---

## ponderjs   [anchors: support / Create tooling (1)]

LEAVE — packdev documentation layer (animated Ponder scenes via KubeJS scripts); zero items, zero methods, no material content.

---

## create_enchantment_industry   [anchors: Create (1)]

- from: liquid XP (experience_bucket — fluid form of XP) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Alchemist Cauldron (Iron's) can consume liquid XP piped from Create's industrial XP farm as a brew ingredient — a Create production output feeding the magic brew method; the XP-fluid is the cross-route dependency that forces a Create player and a magic player to coordinate
- from: liquid XP | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: liquid XP is a Create-side fluid; Ars imbuement uses source/reagent-type inputs; a fluid input to imbuement is not a standard Ars recipe path, and would be a forced edge; prefer the cleaner alchemist_cauldron route (above)
- from: enchanted output (automated enchanting via Blaze Enchanter) | via: service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-specialist runs the enchant factory; magic/survival players bring gear + books, and pay for enchanting as a service — the industrial XP+enchant loop is what makes the Create player a non-self-sufficient specialist; no NPC faucet, pure player economy
- from: create_enchantment_industry:printer (copies enchanted books) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the Printer is already the mod's own endgame machine; adding a sequenced-assembly wrapper on top would be double-gating its own flagship item (M-06 is for cross-mod keystone chains, not wrapping a mod's own capstone inside itself)

REWORK: existing single anchor (Create) understates it — the mod bridges Create's XP production into the enchanting/magic economy; the two ACCEPTs lift it to Create + magic + economy (rich 3-way node). No existing connections to rework (only one anchor was logged).

---

## ctov   [anchors: survival (1)]

- from: ctov village loot tables (loot=yes, biome-themed villages including Japanese mountain, Halloween, mushroom variants) | via: loot-seed | to: survival / economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed pack-relevant boss-key or magic-reagent fragments into ctov's themed village chests — the rare biome variant (Halloween outpost, mushroom village) drops a combat-supply item or low-tier magic reagent that pulls adventurers toward those villages, making exploration pay off in the pack's material graph
- from: ctov structure loot (general villages) | via: loot-seed (Numismatic coin) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: seeding player-minted coins into NPC village chests is an NPC coin faucet — exactly the pattern M-08/M-14 retired; coins come from player minting, not NPC drops. REJECT.

REWORK: existing anchor (survival) is correct; ACCEPT above adds an economy-adjacent exploration hook (combat-supply reagent in world loot). One anchor → survival; second hook is a light loot-seed.

---

## betterbiomereblend   [anchors: support / performance (1)]

LEAVE — client-side render-optimization (biome color blending); zero content, zero methods, no material surface.

---

## betterstrongholds   [anchors: survival (1)]

- from: betterstrongholds loot tables (loot=yes, 15+ room types with custom chest loot) | via: loot-seed | to: economy / magic | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: strongholds are now compelling mid-game content (traps, hidden rooms) — seed a boss-key fragment or magic reagent (arcane_essence, occultism component) into the deeper rooms' loot so stronghold delving pays out in pack-progression currency; combat players trade these drops to magic/Create specialists
- from: betterstrongholds loot tables | via: loot-seed (magic progression reagent) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a dungeon-discovered scroll or arcane component (Iron's scroll, Ars source_gem) seeded into stronghold library/hidden-room loot makes exploration the bootstrap path into magic — you find your first spell in the stronghold, which pulls you into the magic pillar

REWORK: existing anchor (survival — exploration world content) is correct. The two ACCEPTs add an economy/magic reach via loot-seed (deepens survival→economy and survival→magic edges in the loop without forcing recipe edges onto a structure-only mod).

---

## create_ultimate_factory   [anchors: Create (1)]

- from: create_ultimate_factory diamond-route (coal_block + lava → diamond via create:compacting) | via: scarcity lens | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: the diamond-synthesis route directly undermines the scarcity-foundation if left on — a renewable diamond machine collapses regional diamond scarcity, eroding the loop's premise. This is a curation concern, not a weave: flag for recipe-trim review, not a new connection
- from: the recipe datapack's renewable stone/strata routes (nuggets+gravel+lava → decorative stone) | via: create:compacting | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: waste gravel and excess nuggets (crushing byproducts) feed back into strata-stone production — a true byproduct→input industrial circularity; the pack's crushing waste never piles up pointlessly

REWORK: flag the diamond-synthesis and high-value synthesis recipes (blaze rod, deepslate) for scarcity-impact review — if GTMOGS makes these materials region-scarce, the renewable routes may undercut the loop. Recommend KubeJS trim or gating behind a colony/boss-drop requirement to preserve scarcity pressure. This is the main design risk this mod introduces.

---

## sable   [anchors: support / physics backend (1)]

LEAVE — zero-content physics engine library (Rapier sub-levels); no items, no recipes, no material surface. The weaving happens in the mods that build on it (Create Aeronautics, fxntstorage, etc.).

---

## irons_spellbooks   [anchors: magic, Create (2)]

OK — connections sound. Already at 2 anchors (magic spine + Create via alchemist cauldron emptying/filling). The dossier's own candidates (mithril ore-doubling via M-03, mob-drop reagents via M-02, arcane_essence bonding via M-01) are the natural next depth layer; no existing connection needs rework.

- from: irons_spellbooks:mithril_ore (c:item/ores/mithril — mined Y<38) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: mithril ore is a dedicated magic-pillar material; routing it through Create ore-doubling (crushed mithril + byproduct) means a Create player profits from mining mithril for the magic specialist — a resource the magic player buys, not mines — advancing the loop
- from: mob drops (apothecarist or cataclysm boss drops) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mob drops seeded into the Alchemist Cauldron as brew ingredients (a wither skeleton heart, apothecarist component) — combat specialist farms these and sells to the magic brewer who can't make them

---

## create_train_parts   [anchors: aeronautics (1)]

- from: create_train_parts brass/copper window/step blocks | via: create:pressing (fabricated sheets as inputs) | to: Create | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: train fitting blocks (sliding windows, boarding steps) require Create-pressed copper/brass sheets as inputs — the train builder has to touch the Create production spine to fit out a train car; materials, not just a crafting-table recipe
- from: create_train_parts:crossing block | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the crossing is a utility track block, not a flagship item; gating it behind mechanical crafting is over-depth for an everyday structural element (guardrail: don't gate a basic/everyday component behind complex recipes)

REWORK: existing single anchor (aeronautics) is thin — the mod is train *detailing*, not aeronautics per se. The ACCEPT above (M-23 structural-alloy/fitting → Create) gives it Create + aeronautics (2 anchors). Acceptable.

---

## fxntstorage   [anchors: Create, survival (2)]

OK — connections sound. Already at 2 anchors (Create-tier-gated via create:mechanical_crafting + survival QoL). No forced third edge needed. The flight backpack upgrade touching aeronautics is thematic but it's a worn gadget, not a wireable resource — leave.

---

## sable_sa_compat   [anchors: support / compat (1)]

LEAVE — zero-content behavior patch (Create: Stuff 'N Additions ↔ Sable ship physics compat); no items, no methods, no material surface.

---

== CHUNK COMPLETE ==
