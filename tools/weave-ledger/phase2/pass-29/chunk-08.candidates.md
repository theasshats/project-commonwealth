# Phase 2 candidates — chunk-08

## ecologics   [anchors: survival (1)]

- from: ecologics:coconut / coconut_slice | via: farmersdelight:cooking + create:milling | to: survival↔Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconut is milled into coconut flour (Create Mill), then cooked into tropical stews at the Cooking Pot — the beach biome feeds the kitchen which feeds colony provisioning
- from: ecologics:coconut_slice (effect-clearing on eat) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: effect-clearing is a mundane food property; imbuing a coconut slice as a magic reagent stretches tone badly — feels forced
- from: ecologics:azalea_flower | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: azalea_flower is generic deco flora; spirit_fire transmutation into an essence has no thematic hook — the flower carries no "otherworldly" vibe that the ritual demands. No motif survives red-team.
- from: ecologics:coconut_woodset (planks/logs) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flags this as WEAK (M-04 deco-recycle); the value is low and woodset recycling adds noise without advancing the loop. Skip until the 2nd anchor already earns its place.
- from: ecologics:coconut (M-12 path adds Create anchor) | comment: M-12 accept above brings ecologics to survival+Create (2 anchors). No further forced links needed.

REWORK: no existing cross-system connections to audit (1 anchor, nothing established).

---

## exposure   [anchors: Create, survival (2)]

- from: exposure:aged_photograph (photograph_aging output) | via: supplementaries:item_lore | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a photographer applies lore text to an aged print and charges other players for portrait commissions — service labor, value flows player-to-player with no NPC sink
- from: exposure:album | via: loot-seed into t_and_t / moog's structures loot | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: album is a blank keepsake item players fill themselves; seeding it into loot tables doesn't make structural sense — it would be found empty and confusing
- from: exposure:camera (gold variant) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the gold camera is already assembled via Create sequenced_assembly (made-by line confirms this existing inbound weave); proposing it again is a duplicate, not a new link
- from: exposure:black_and_white_film | via: tfmg:distillation (silver halide chemical supply chain) | to: Create | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: TFMG distillation produces oil fractions not photographic chemicals; the "silver halide" tie is theme-only with no actual method that outputs film precursors — forced
- REWORK: existing connections OK — Create (sequenced_assembly) + survival (hobby/keepsake) are both coherent and load-bearing. No rework needed.
- OK — connections sound

---

## jei   [anchors: client-only UI (support)]

- LEAVE — zero-content code library / UI-only; no items, no materials, no loot. Pure recipe viewer. Nothing to weave.

---

## createoreexcavation   [anchors: Create (1)]

- from: createoreexcavation vein-table (configurable per-chunk ore faucet) | via: pack design lever — add coin-grade scarce metals (e.g. TFMG nickel, galosphere palladium) to the vein table | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: regional ore veins are region-locked by chunk — only the player with the right drill rig in the right biome can tap nickel/palladium; everyone else must trade, anchoring the commodity market to real scarcity
- from: createoreexcavation:diamond_drill (netherite-tier) | via: boss-key gate (require mowziesmobs boss drop as a drill-head component) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite drill head requires a Wroughtnaut wrought-shard to harden — the toughest mine-automation tool needs the toughest mob fought first
- from: createoreexcavation fluid-extraction (extracting recipe type) | via: tfmg:distillation (crude-oil vein → refinery input) | to: Create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the Extractor taps an underground crude-oil pocket; that raw crude feeds the TFMG Distillation Tower to yield diesel/gasoline for Aeronautics engines — one industrial loop, mine to propulsion
- from: createoreexcavation:vein_finder | via: M-28 colony route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: the vein_finder is a hand-tool used by a player specialist, not a colony-buildable or colony-requestable item; the colony route doesn't apply cleanly here

REWORK: no existing cross-system connections (1 anchor). M-30 + M-15 + M-32 accepts bring it to Create + economy + survival (3 anchors).

---

## moogs_structures   [anchors: support — library/API]

- LEAVE — pure worldgen library, zero items/blocks/loot. No material surface to weave against.

---

## fishingreal   [anchors: survival (1)]

- LEAVE — behavior-only mod (no items, no loot, loot=no in digest). Its weaving surface belongs to the fish-content/cooking mods it sits beneath (createfisheryindustry, farmersdelight). Nothing to propose here.

---

## create_train_parts   [anchors: aeronautics (1)]

- from: create_train_parts brass/copper sliding windows + steps | via: create:pressing (require pressed brass sheets as a crafting input) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flags this as WEAK (M-04-adjacent deco, low value); pressed-sheet requirement on cosmetic fittings adds busywork without advancing the loop — the aeronautics anchor alone is sufficient for a detail mod
- from: create_train_parts:crossing (track crossing block) | via: aeronautics logistics network design | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 applies to goods that require logistics to move; a track crossing is infrastructure, not a tradeable bulk good — motif doesn't fit
- LEAVE (for weaving) — a detailing mod for Create trains; its single aeronautics anchor is appropriate. No coherent 2nd-system link survives red-team without being busywork.

---

## justenoughbreeding   [anchors: support — QoL / client recipe viewer]

- LEAVE — zero items, zero loot, no mechanics. JEI breeding-info plugin; nothing to weave.

---

## accessories_compat_layer   [anchors: support — compat shim]

- LEAVE — pure API translation layer; no items, no blocks, no loot. The wearables that could weave live in the host mods (Curios/Trinkets users), not here.

---

## create_pattern_schematics   [anchors: Create (1)]

- LEAVE — build-automation QoL tooling (3 items: schematic items only); no foreign material to route. Create-internal support; no coherent 2nd-system edge possible without forcing it.

---

## tipsmod   [anchors: support — QoL/client]

- LEAVE — no items, no loot, no mechanics. Loading-screen tip display; nothing to weave.

---

## t_and_t   [anchors: survival (1)]

- from: t_and_t loot tables (50+ structures with chests) | via: loot-seed — seed Numismatics coin denominations into conquerable forts/outpost loot | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: a pillager fort holds a strongbox of minted coin — clearing it puts real currency into player circulation (not from an NPC vendor; it's loot the world placed, players distribute)
- from: t_and_t village-variant structures | via: loot-seed — seed magic reagents (ars_nouveau:source_gem shards, occultism apprentice components) into village library/altar loot | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: ancient village ruins hold fragments of arcane practice — finding a jungle village yields a piece of the magic web, tying exploration to the magic spine
- from: t_and_t sail-ship structure | via: loot-seed — seed aeronautics build components (e.g. TFMG aluminum plate, Create Aeronautics sail canvas material) into ship hull loot | to: aeronautics | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: M-34 is combat-route supply (boss/danger output farmed and traded); a sail-ship's static loot chest is exploration, not a combat-supply chain — motif is a stretch. The loot-seed itself could work under a different motif, but no clean fit; reject as no-motif.
- from: t_and_t conquerable outpost/fort | via: MineColonies integration (conquered fort becomes a colony outpost site) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies has its own colony founding mechanic; "conquered fort becomes colony site" is world-design flavor advice, not an authorable recipe/datapack weave. No delivery mechanism.
- REWORK: dossier 2nd-anchor candidate proposed M-09 (luxury-good→coin via villager/Numismatics trade). M-09 is retired; the replacement (M-08 loot-seed above) is the correct reframe. Dossier candidate should be updated to M-08 loot-seed framing.

---

## mowziesmobs   [anchors: survival (1)]

- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (as a keystone component in a high-tier Create cryo-cooling assembly) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ice crystal's supernatural cold is the only material cold enough to temper the highest-tier Create heat-exchange component — fight the Frostmaw, unlock cryogenic processing
- from: mowziesmobs:earthrend_gauntlet / wrought items (Wroughtnaut drop) | via: ars_nouveau:imbuement (imbuement with wrought essence → a high-tier Ars spell focus) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the gauntlet's earth-rending force is refined in the imbuement altar into a Focus of Tremor — a Mowzie fight powers a magic upgrade, tying the boss web to the magic spine
- from: mowziesmobs boss drops (general) | via: emergent trade — boss drop farming by combat specialists → traded to non-combat players needing the gate items | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: not everyone fights Frostmaw; the ice crystal becomes a commodity a combat specialist sells to a Create engineer who needs it — the boss fight generates economy, not just gear
- from: mowziesmobs:captured_grottol (rare diamond-emitting entity) | via: MineColonies guard/patrol contract | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: captured_grottol is a mob entity; MineColonies colony route applies to buildable huts/requests, not mob-capture mechanics. No delivery mechanism.
- REWORK: no prior cross-system connections. M-15 + M-02 + M-34 accepts bring to survival + Create + magic + economy (4 anchors). Strong node.

---

## sounds   [anchors: support — client audio]

- LEAVE — client-only audio polish; zero items, zero loot, no mechanics. Nothing to weave.

---

## gravestone   [anchors: survival (1)]

- from: gravestone:obituary (item recording death data) | via: supplementaries:item_lore (lore added to the obituary on recovery) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries:item_lore on the obituary is a flavour authoring action, not a consumption-sink weave; M-26 requires the item to be *spent* against pressure. No valid motif; would be no-motif.
- LEAVE — death-recovery utility. 1 block (gravestone), 2 items (gravestone + obituary); no material route makes sense. Obituary is a read-only death log, not a craftable reagent. Leave confirmed.

---

## farmersdelight   [anchors: survival, Create (2)]

- from: farmersdelight:rice / cabbage / onion / tomato (seasonal crops) | via: serene_seasons gate + create:milling → farmersdelight:cooking | to: survival (seasonal pressure) | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: tomatoes only vine in summer; the cooking pot recipe that demands them forces players to harvest seasonally or trade — Serene Seasons becomes a demand lever for the kitchen
- from: farmersdelight cooked stews (high-tier dishes) | via: minecolonies colony provisioning request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's Tavern/Restaurant requests a steady supply of Farmer's Delight stews to keep colonists fed — the kitchen becomes a supply contract, not just a hobby cook
- from: farmersdelight:straw (cutting byproduct) | via: create:mixing (straw + lye → bioplastic feedstock for tfmg) | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: lye + bioplastic chain is thematically plausible but TFMG doesn't register a biomass→plastic recipe type that accepts farmersdelight straw directly; the method gap makes this speculative. Reject pending a confirmed TFMG biomass recipe path.
- from: farmersdelight:cooking (food output) | via: create:filling (fluid sauces/broth in Create fluid pipes fill cooking pot recipes) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is already a confirmed existing inbound weave (made-by: create:filling). Duplicate — not a new link.
- REWORK: dossier 2nd-anchor candidate proposed M-09 (luxury-good→coin) for stews. M-09 retired; the correct reframe is M-28 (colony provisioning demand) as accepted above. Dossier candidate should be updated.
- OK — Create (milling/mixing/filling existing) + survival (seasonal/food) connections are sound; M-16 and M-28 add depth.

---

## buildguide   [anchors: support — QoL/client]

- LEAVE — client-side render overlay; zero items, zero blocks, zero loot, no gameplay material. Build-assist tool with no content surface.

---

## tfmg   [anchors: Create (1)]

- from: tfmg:diesel / gasoline / LPG (distillation outputs) | via: aeronautics engine intake (M-13 fuel seam) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the Aeronautics combustion engine runs on TFMG-refined diesel; no refinery means no flying — the fuel supply line gates the whole aeronautics tier
- from: tfmg:steel (industrial_blasting output) | via: aeronautics airframe/hull recipe (structural alloy) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plates are the structural skeleton of any real aircraft — TFMG's blast furnace must run before the airship's hull is viable, grounding the aeronautics tier in the industrial mid-game
- from: tfmg:aluminum (hot_blast output) | via: aeronautics control surface / propeller recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: aluminum's weight-to-strength ratio makes it the natural propeller and rudder material — TFMG aluminum fabrication feeds the drivetrain side of every airship
- from: tfmg:lithium (ore → battery via winding/polarizing) | via: createaddition:charging (FE → magic focus charging) | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the TFMG lithium battery stores electricity from the Voltage grid; the Create Addition charger draws from it to energize an Iron's Spellbooks focus — industrial power feeds arcane power
- from: tfmg:saltpeter / sulfur dusts | via: createbigcannons cartridge filling | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's distillation byproducts (sulfur) and coking waste (saltpeter) are the feedstock for Big Cannons cartridge assembly — industrial chemistry supplies the war machine, cross-routing production into combat
- from: tfmg:plastic (vat output from biomass) | via: minecolonies:zero_waste / colony construction | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies doesn't have a plastic-consuming building request; the colony route here lacks a specific delivery mechanism. Reject pending a verified colony recipe.
- REWORK: dossier 2nd-anchor candidate proposed M-06 (sequenced-assembly keystone for engines) — that's valid but already covered by existing made-by line (create:sequenced_assembly). The M-13/M-23/M-24 aeronautics seam and M-17 magic/FE seam are the stronger new links. Dossier candidate for "economy via luxury good/coin" was M-09 (retired); reframe not needed since M-29 cross-route covers it better.
- REWORK: dossier only notes aeronautics/economy candidates; M-17 (FE→magic) and M-29 (saltpeter/sulfur→cannons cross-route) are new links not in the dossier.

---

## immersive_paintings   [anchors: decoration/support (1)]

- from: immersive_paintings:painting / glow_painting | via: supplementaries:item_lore + player trade | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: M-33 (service-for-hire) requires a specialist performing *work* on another player's material; painting creation is self-contained client-side, not a service one player provides to another's items. The "commission a painting" scenario is emergent social play, not a weavable delivery mechanism.
- LEAVE — pure decorative-expression mod. No material with coherent Create/magic/economy routing. Forcing a frame recipe through Create would be busywork. Leave confirmed.

---

## create_connected   [anchors: Create (1)]

- from: create_connected:kinetic_battery (stores rotational energy) | via: aeronautics ship power buffer | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: an airship carries a kinetic battery as its mechanical power reserve — the battery charges on a dock's windmill and discharges to keep ship contraptions running in flight; Create Connected becomes a required aeronautics component
- from: create_connected:item_silo (high-capacity bulk storage) | via: aeronautics logistics (M-31 bulk-goods transport) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: M-31 requires the *good itself* to be bulky/heavy enough that aeronautics is the required move method; a storage block sitting on a ship doesn't create that demand pressure — it's just cargo furniture
- from: create_connected copycat_* blocks | via: create:cutting (require specific slab cuts) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks already use create:cutting per made-by line; duplicate of existing inbound weave
- REWORK: no prior cross-system connections. M-24 accept adds Create + aeronautics (2 anchors). Existing made-by (create:cutting/filling/item_application/sequenced_assembly) confirms deep Create integration; aeronautics is the coherent 2nd anchor.

---

== CHUNK COMPLETE ==
