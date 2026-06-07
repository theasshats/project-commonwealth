# Phase 2 candidates — chunk-03

## create_integrated_farming   [anchors: Create, survival (2)]

REWORK: existing connections sound — the Create + survival pairing is tight (roost/net are automated
farming contraptions feeding the food pillar). The dossier's M-09 economy candidate is pre-rework
(retired motif); it surfaces a real weave that should be re-expressed below.

- from: roost/net bulk outputs (eggs, feathers, fish, raw poultry) | via: farm_and_charm:mincer + farmersdelight:cooking | to: economy (MineColonies colony provisioning) | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony butcher/cook requests bulk meat and eggs — roost/net automated output is exactly the steady supply a colony worker consumes, tying automated husbandry directly into the colony route without going through a vendor
- from: roost/net raw-fish output | via: create:milling (fish meal) → create:mixing as fertilizer or animal feed | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: excess fish from the lava net grinds into fish-meal, a Create-mixing byproduct feedstock for fertilized soil or animal feed, closing the waste loop from the husbandry chain
- from: feathers (steady roost output) | via: ars_nouveau:imbuement (quill/focus component) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: feathers are fully generic vanilla — every mod uses them; routing them through arcane infusion is arbitrary and doesn't advance the loop (the everyday guardrail: don't gate basics behind infusion). No unique material surface from this mod.
- from: roost/net output surplus | via: "sellable" | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; bare sell-link is the ambient endpoint, not a weave.

OK — connections sound (Create + survival established; two new economy/Create loop links added via M-28/M-32)

---

## spark   [anchors: support (1)]

LEAVE — pure server profiler (CPU/memory/tick sampler); zero items, blocks, or methods. Genuine zero-content code tool; no weave surface exists.

---

## dungeons_arise_seven_seas   [anchors: survival (1)]

- from: galleon/ship-dungeon loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: naval dungeons are a combat-specialist destination; seeding Numismatics coin (pressed by players elsewhere) or scarce regional materials into the chest loot makes ocean raiders the server's marine-goods supplier — the combat-supply side of the boss/dungeon dual-role
- from: galleon/fortress loot tables | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a rare aeronautics-gating item (e.g. simulated:gyroscopic_mechanism or an Aeronautics blueprint schematic) into the deepest hold of a flagship galleon — reaching it requires surviving a full ship boarding, making a boss-key unlock feel thematically earned (nautical → airship lineage)
- from: sunken-ruin loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient sunken ruins are a coherent container for rare alchemical reagents (Ars source gems, Occultism soul shard fragments) — deep-water divers supply magic practitioners without overlap with land dungeon routes
- from: galleon structure | via: thematic | to: aeronautics | motif: no-motif | power: — | tone: ok | verdict: REJECT | reason: static structures have no functional aeronautics method (they're not physics ships); a "thematic rhyme with airships" is not a loop-advancing weave. No-motif reject.

---

## accessories   [anchors: support (1)]

LEAVE — slot API library; zero items, blocks, loot, or methods. Wearables that weave live in the mods that register into its slots, not here.

---

## mffs   [anchors: Create, survival (2)]

REWORK: existing connections sound — M-05 (native-method gating on focus_matrix via electron_tube) and M-06 (sequenced-assembly projector/interdiction_matrix chain) are the gold-standard examples. The loot=yes flag is worth examining.

- from: mffs loot (loot=yes flag) | via: loot-seed | to: survival (boss-key) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: seed a high-tier MFFS module (e.g. mffs:confiscation_module or mffs:camouflage_module) into a difficult boss/structure loot table — rewards a combat specialist with a rare defensive module they can trade to base-builders; gives MFFS a combat-route supplier (M-34 companion link)
- from: mffs:fortron_capacitor / mffs:coercion_deriver | via: create:crushing (recycling) | to: Create | motif: M-04 | power: mid | tone: ok | verdict: REJECT | reason: MFFS machines are endgame gate-items (M-06 sequenced assembly); making them crushable back to raw is a lossy-recycle that undercuts the gating cost model. Scale guardrail — don't apply M-04 to items whose value is their assembly depth.
- from: Fortron energy network | via: createaddition:charging bridge | to: Create | motif: M-17 | power: mid | tone: clash | verdict: REJECT | reason: Fortron is MFFS's own proprietary energy type (not FE); Create Addition's charging method is for FE tools/foci. The energy systems are incompatible — a bridge would require custom KubeJS energy conversion that isn't grounded in any existing method. No-motif in current palette.

OK — connections sound (M-05/M-06 gold-standard; one loot-seed addition via M-15/M-34 companion link)

---

## t_and_t   [anchors: survival (1)]

- from: T&T village chest loot / conquerable fort loot | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: biome-specific village variants and conquerable forts are natural combat/exploration supply points; seeding pack-relevant goods (coin blanks, regional trade goods, Numismatics currency notes) into loot makes settlements the server's first economic waypoints — combat specialists clearing forts are suppliers; traders set up shop in villages
- from: T&T ocean sail-ship loot | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: the ocean sail-ship structure is a nautical precursor to the aeronautics pillar; placing a rare aeronautics schematic or levitite sample in its deepest hold rewards ocean explorers with an airship on-ramp, advancing the loop from early exploration → flight capability
- from: T&T conquerable forts | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pillager forts canonically hold arcane spoils; seeding a rare Ars/Occultism drop (ritual candle, occultism:silver_ore, source gem shard) into fort loot connects the combat-clearing route with the magic pillar's reagent supply chain
- from: village villager trades | via: villager-trade config | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the 16 biome-specific village variants give each biome a trade identity — a jungle village offering different goods than a badlands fort settlement is the geographic specialization the player economy needs; service-for-hire (enchant, repair, biome-specific goods) flowing through T&T's settlements creates the "visit different biomes to find different specialists" pressure
- from: T&T structures | via: "vanilla thematic flavor" bare | to: economy (NPC sell) | motif: M-09 (retired) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare "villages = trade" is the ambient endpoint, not a weave. The real link is the demand-gating seeded above (M-34/M-33).

---

## cmpackagecouriers   [anchors: Create, aeronautics (2)]

REWORK: existing connections sound — Create (cuts/deploys cardboard plane) + aeronautics (autonomous flying courier) are well-grounded.

- from: cmpackagecouriers cardboard-plane remote order/delivery | via: logistical role | to: economy | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create specialist can remotely request a magic reagent from an Ars practitioner across the map via portable_stock_ticker + cardboard plane — the cross-route dependency (Create inputs magic outputs) physically materializes as a package courier flight, making the logistics arm genuinely necessary rather than optional convenience
- from: cmpackagecouriers:location_transmitter | via: create:mechanical_crafting or create:sequenced_assembly | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the transmitter is already built via create:cutting + create:deploying (per made-by methods in the dossier) — it's already routed through Create methods. A second Create gating on the same item would be depth-stacking without narrative payoff. The connection is already established.

OK — connections sound (already 2 anchors; M-29 cross-route link added showing the courier as the physical cross-route dependency handler)

---

## emojitype   [anchors: support (1)]

LEAVE — client-only chat autocomplete helper; zero items, blocks, loot, or methods. Genuine zero-content UI helper; no weave surface exists.

---

## create_connected   [anchors: Create (1)]

- from: create_connected:copycat_* family | via: create:item_application | to: survival (decoration/building) | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: copycats already use create:item_application natively (per made-by methods) — this is an existing internal weave, not a new cross-system link. The copycat blocks are Create-internal cosmetic QoL; forcing a survival-anchor via deco application doesn't advance the scarcity → pressure → production → economy loop. One-anchor Create tool; leave at 1.
- from: create_connected:kinetic_battery / kinetic_bridge | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: kinetic battery stores rotation (not FE); Aeronautics propulsion uses propeller bearings and portable engines (gyroscopic mechanism via create:sequenced_assembly). The kinetic battery is a rotation buffer, not a propulsion component — the link is thematically loose and there's no grounded method that routes kinetic_battery into Aeronautics drivetrain construction. No motif match that isn't forced.
- from: create_connected:item_silo / inventory_bridge | via: logistical role in player economy | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: logistics-block QoL (silos/vaults/chutes) is the ambient infrastructure of every Create base, not a demand-gating weave. "Better storage helps trade" is the ambient endpoint logic, not a loop-advancing link.

LEAVE — pure Create-internal QoL/expansion (kinetic parts, copycats, logic blocks); its value is convenience depth within the Create anchor. No coherent 2nd anchor without forcing.

---

## netmusic   [anchors: support (1)]

LEAVE — cosmetic audio (CD burner/player/megaphone); already routes once through the maid altar method (TLM). Forcing a Create or economy edge would be contrived — the content surface is purely sonic/NBT, no material to route through the loop.

---

## startuptime   [anchors: support (1)]

LEAVE — boot-time log diagnostic; zero items, blocks, loot, or methods. Genuine zero-surface diagnostic utility; no weave surface exists.

---

## create_ironworks   [anchors: Create (1)]

- from: create_ironworks:tin_ore / raw_tin (regional ore, 3 biome-modifiers) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is biome-gated (3 biome-modifiers = uneven regional distribution); players in tin-rich biomes crush → process → press tin coins and become the server's tin-mint specialists — the scarcity foundation feeds directly into the player-run settlement medium
- from: create_ironworks:steel_ingot (Create-processed #c:ingots/steel) | via: aeronautics structural recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate/ingot is the natural structural alloy for an Aeronautics hull or armored airframe — a Create metalworker's steel output becomes the server's airship-builder supply, making the Create → aeronautics supply chain concrete and necessary
- from: create_ironworks:bronze_ingot (tin+copper alloy) | via: create:pressing → bronze_plate → aeronautics lighter hull tier | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: bronze is lighter than steel and fits a mid-tier airframe material (between iron and steel hull); a dedicated alloying specialist supplies lighter hull sheets for smaller ships, adding a mid-tier structural tier to the aeronautics build-depth
- from: create_ironworks:tin_ore | via: GTMOGS regional ore-gen | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tin's 3 biome-modifiers already seed regional lock-in — explicitly tagging tin as a region-locked good (so tin-coin minting and bronze alloying are only accessible in those biomes) anchors the entire metal tier to the scarcity foundation and forces cross-biome trade for bronze/steel goods
- from: create_ironworks steel tools/armor | via: colony worker equipment provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies guard/soldier huts request mid-tier gear; a steel-armorer specialist fills colony equipment requests — the colony route locks a steady demand for create_ironworks output without a vendor, ensuring the metalsmith trade role survives automation
- from: create_ironworks:steel_ingot | via: ars_nouveau:imbuement (steel as magic-hardened alloy) | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: steel is an industrial/mundane material; routing it through arcane infusion is a tone clash (industrial metalwork ≠ arcane alchemy). The aeronautics + economy + scarcity links are the coherent ones; magic is a stretch here.
- from: create_ironworks:brass_hammer / brass_paxel | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the dossier already lists create_ironworks as using create:crushing/mixing/pressing/sequenced_assembly (made-by methods confirmed). The hammer and paxel are already Create-processed; re-gating them via a second Create method is depth-stacking without adding a new cross-system link. Internal to Create already.

---

## polymorph   [anchors: support (1)]

LEAVE — recipe-conflict resolution UI; zero items, blocks, loot, or methods. Genuine zero-content infrastructure mod; no weave surface exists.

---

## bagus_lib   [anchors: support (1)]

LEAVE — shared code library (baguchi author suite); zero items, blocks, loot, or methods. Genuine zero-surface library dependency; no weave surface exists.

---

## sky_whale_ship   [anchors: survival (1)]

- from: sky-whale loot tables | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales drift at altitude — reaching them requires a functional Aeronautics airship; placing a rare levitite or aeronautics blueprint/schematic in the whale's deepest hold makes the whale the pack's flagship aeronautics boss-key gate (you need an airship to get the thing that unlocks the next ship tier)
- from: sky-whale loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a sky whale is high-altitude combat; the specialist who can reach and clear one supplies rare aerial goods to ground-bound players — the combat-supply role for the sky tier; makes altitude combat a distinct trade niche
- from: sky-whale loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sky-whale gut biology / secretions are a coherent exotic reagent source (blubber-oil as a magic catalyst, air-whale spores as Ars reagents) — players farming whale raids supply the magic pillar with sky-sourced ingredients unavailable elsewhere, creating a vertical-exploration → magic supply chain
- from: sky-whale as thematic aeronautics endpoint | via: thematic (no method) | to: aeronautics | motif: no-motif | power: — | tone: ok | verdict: REJECT | reason: "they're in the sky and airships go in the sky" is not a loop-advancing weave; the real link is via loot-seed (accepted above). Bare thematic adjacency without a method = no-motif reject.

---

## aeronautics   [anchors: aeronautics (1) — Create is de-facto 2nd]

REWORK on existing candidate notes in dossier:
- "levitite → economy: M-08 mint-adjacent / M-09 sell" — M-09 is retired; the mint-adjacent framing needs to be expressed as M-08 (player-minted zinc-gated currency via levitite blend → processed levitite → player presses into coin blank... but levitite is a lift medium, not a metal; minting levitite as coin is a tone clash). Re-express: levitite blend is the scarcity gate on airship construction — the *demand* for levitite makes zinc-region specialists the pack's lift suppliers. Not a coin-mint but a M-30 regional scarcity gate. REWORK this dossier note.
- "dyeable tires → M-09 (trade goods)" — M-09 retired. Not a weave.

- from: aeronautics:levitite_blend (zinc-gated) | via: GTMOGS regional ore-gen + create:mixing | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite blend requires zinc nuggets (create:mixing); zinc is region-locked by GTMOGS ore-gen — players in zinc-rich biomes become the server's lift specialists, and everyone who wants an airship must trade with them
- from: aeronautics:adjustable_burner | via: fuel-tag config (extend to tfmg:diesel / alcohol_industry fuel) | to: Create/economy | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the hot-air burner currently burns coal/charcoal; adding TFMG diesel or Alcohol Industry ethanol as accepted fuels makes the aeronautics fuel supply line a real economic role — fuel refiners supply the fleet (the loop's fuel → propulsion edge)
- from: aeronautics levitite crystallization step (in-world blend → levitite) | via: KubeJS catalyst requirement (Ars source gem or Occultism silver dust adjacent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: raw levitite blend crystallizing into levitite is a quasi-magical phase transition — requiring an arcane catalyst makes airship construction demand a magic collaborator, the clearest Create↔magic cross-route dependency in the pack; but NOTE: this step is code-only (not JSON), so Phase 3 needs JEI/source confirmation before authoring
- from: aeronautics:portable_engine (create:sequenced_assembly chain) | via: cross-route | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: REJECT | reason: the portable engine is already a deep Create sequenced-assembly chain (engine_assembly → industrial iron block + iron sheet/bars); adding a magic cross-route input to the same chain would over-gate an already complex item. The levitite crystallization catalyst (above) is the cleaner magic seam for aeronautics; don't double-gate the drivetrain too. Cost-model guardrail.
- from: aeronautics rope/docking connector | via: config/worldgen | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: "docking stations at trading posts" is an ambient infrastructure idea, not a demand-gating weave — it has no method to route through and doesn't gate any demand. No-motif for current palette; ambient endpoint logic.
- from: aeronautics dyeable tires | via: villager/player trade | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; cosmetic color variants as "luxury trade goods sold to NPCs" is the ambient endpoint. Not a weave.

---

## fogoverrides   [anchors: support (1)]

LEAVE — client fog density/color config; zero items, blocks, loot, or methods. Genuine zero-content visual config mod; no weave surface exists.

---

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / oat (grain crops) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat run through the Create Millstone to produce flour — a one-step processing pull that threads the farmstead grain chain into the Create spine; the bread/flatbread production line starts in the farm and runs through the mill
- from: farm_and_charm:barley | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling (barley mash → ale/malt) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: barley is the classic brewing grain; routing it through the fermentation/distillation chain (Vinery or Alcohol Industry) produces aged ale — a maturation specialist ages barley drinks and trades them, adding time-value to the grain surplus and a distinct economic role for the farmstead
- from: farm_and_charm:butter / eggs (steady animal-husbandry output) | via: create_cheese:maturing | to: economy | motif: M-35 | power: everyday | tone: ok | verdict: ACCEPT | hook: butter + eggs + milk → aged farmstead goods (cheese, butter-cured products) via the maturing rack; the time-cost creates a maturation niche — someone who sits on dairy output for aging becomes the server's preserved-goods supplier
- from: farm_and_charm crops (cabbage, corn, onion, tomato — shared c:tags with FarmersDelight) | via: minecolonies:composting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies composter hut requests crop waste as compost input; farm_and_charm's rich crop variety gives the colony a steady organic provisioning chain — the colony food/agriculture route locks demand for farm output, creating the colony → farm → mill → colony loop
- from: farm_and_charm grains/crops as MineColonies provisioning | via: minecolonies request system | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony cook/farmer hut requests grain, vegetables and eggs; farm_and_charm's farmstead surplus fills those colony requests — a farming specialist supplying a colony is a stable economic role that doesn't require a vendor, only other players running colonies
- from: farm_and_charm:mincer outputs (ground meat, patties) | via: farmersdelight:cooking → create:milling → create:mixing (flour + fat → pastry dough) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: mincer ground meat + farm_and_charm flour (milled via Create Millstone) combine in a FarmersDelight/ExtraDelight cooking chain to produce pie or pastry — the farmstead-to-Create processing pull extends the food chain through the spine's mixing step, adding steps without multiplying cost
- from: farm_and_charm surplus food | via: M-26 consumption (crew upkeep on airships) | to: aeronautics | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create Aeronautics ships need crew fed during long cargo runs; farm_and_charm's diverse cooked meals are the premium crew rations for extended aeronautics voyages — food production is a continuous consumption sink for the logistics arm
- from: farm_and_charm animal husbandry surplus | via: "sellable to NPC vendors" | to: economy | motif: M-09 (retired) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare sell-to-NPC is the ambient endpoint. Real economy links expressed above via M-28/M-35.

---

## terrablender   [anchors: support (1)]

LEAVE — worldgen library/API (biome-region injection); zero items, blocks, loot, or methods. Genuine zero-content infrastructure dependency; no weave surface exists.

---

## followersteleporttoo   [anchors: support (1)]

LEAVE — pet teleport behavior fix; zero items, blocks, loot, or methods. Genuine zero-content behavior patch; no weave surface exists.

== CHUNK COMPLETE ==
