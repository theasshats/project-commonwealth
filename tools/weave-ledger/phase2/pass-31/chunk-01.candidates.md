# Phase 2 candidates — chunk-01

## create_compressed   [anchors: create (1)]

Dossier says "2nd-anchor candidates: none — support role." Power-read: all items are 9-to-1 compression blocks for Create's own crushed ores, sheets, mechanical components, flour, rose quartz. The blocks use create:crushing/milling/mixing/splashing/sandpaper_polishing already. loot=yes (has a loot table). Method-pull: nothing in the pack's methods palette *wants* these compressed pile blocks as an input — they are QoL automation helpers, not a foreign material that a second pillar's machine desires.

Candidate: could the crushed-ore pile blocks be used as a bulk input for a MineColonies colony supply order (M-28 colony route), since colonies request materials in bulk and compressed piles are the logical shipping unit? Red-team: MineColonies takes individual items from inventories; it doesn't inherently "prefer" compressed forms, and there's no recipe mechanism to gate colony orders on compressed format vs. loose. The connection is ambient convenience, not a demand gate. REJECT.

Candidate: loot=yes — what's in the loot table? The jar name suggests loot may just be block-drop self-loot (crushed-ore piles drop themselves). Even if it were something else, there's no unique loot to seed into a second-pillar sink. REJECT.

- LEAVE — genuine single-anchor support layer; all items are Create-internal storage-compression blocks with no foreign-pillar demand. One-anchor mod; no coherent 2nd anchor available without forcing.

REWORK: OK — connection sound (Create, 1 anchor; support role declared; no existing 2nd-anchor connections to review).

---

## lionfishapi   [anchors: support/library (1)]

Zero blocks, zero items, loot=no. Pure animation/rendering API for L_Ender's mods (Cataclysm etc.). No material surface whatsoever.

- LEAVE — genuine zero-content code library; no items, no loot, no methods. Nothing to weave.

---

## better_climbing   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Client-side movement feel tweak only.

- LEAVE — genuine zero-content behavior mod; no material surface.

---

## moreoverlays   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Client HUD overlays (light-level F7, chunk grid F9, JEI-search dim).

- LEAVE — genuine zero-content client overlay; no material surface.

---

## tidal-towns-1.3.4   [anchors: survival (1)]

Zero blocks, zero items, loot=no. Vanilla-block structure datapack — floating ocean villages in deep_ocean. No loot tables of its own (loot=no confirmed).

Candidate: aeronautics 2nd anchor via M-31 logistics-required bulk good — the tidal towns create *destinations* for aeronautics sea travel (an airship route between ocean settlements). Red-team: this is a thematic/design note, not a material weave. There are no items to route; it's a "the world makes aeronautics meaningful" observation, which is ambient value, not a motif-grounded weave. REJECT — no-motif for a destination note.

Candidate: loot-seed — could seed Numismatics coin or magic reagents into its structures if it had loot tables. But loot=no means it has none; the structures use vanilla block drops and vanilla-chest loot. A loot-table edit would require authoring new loot tables for its structures (a Phase-3 datapack edit), which is outside Phase 2 scoping. REJECT — no existing loot table to seed; would require new authoring.

- LEAVE — loot=no, zero items; vanilla-block structure with no seeding surface. Thematic aeronautics value is ambient, not a weaveable motif.

---

## ctl   [anchors: create, aeronautics (2)]

Already at 2 pillars (Create via sequenced_assembly + aeronautics — its whole purpose is train/contraption lighting). 18 blocks, 20 items, loot=yes.

New candidate: survival/economy 3rd anchor — ctl lamp blocks as required components in a MineColonies colony building (colony guard barracks or patrol post needing powered lighting), via M-28 colony route. Red-team: MineColonies hut builds use vanilla items in their recipes; adding ctl lamps would be a KubeJS colony-building recipe override. The thematic fit is reasonable (a colony guard post needing proper headlights/signal lights), but the lamp blocks are aesthetic QoL items — gating a colony building behind train-light parts feels forced for an item whose entire value is contraption decoration. REJECT — tone clash (colony infra gating on specialty rolling-stock lamp blocks); forced edge.

New candidate: economy 3rd anchor via M-33 service-for-hire — a "lamp fitter" who installs ctl blocks on a client's train for coin. Red-team: this is an emergent player-interaction story, not a deliverable Phase-3 weave. There's no method to author here. REJECT — ambient economy story, no actionable recipe/method.

REWORK: OK — connections sound (Create + aeronautics, 2 anchors; the sequenced_assembly inbound weave is the right integration point; no arbitrary connections found).

---

## solmaiddream   [anchors: survival (1)]

1 item (food_book), 0 blocks, loot=no. A Touhou Little Maid addon that tracks unique foods fed to a maid and grants stat milestones. Hard dep: touhou_little_maid.

Candidate: survival → magic 2nd anchor via the maid companion as a magic-adjacent entity (Touhou maids sit thematically near magical companions). Red-team: there's no mechanical bridge — the mod tracks food counts, not magic essences; trying to slot it as magic would be thematic dressing over no actual method routing. REJECT — no method, pure theme-stretch.

Candidate: economy via M-26 consumption — the food-variety mechanic drives continuous demand for diverse foods, which pressures the food-production economy. Red-team: this is ambient consumption demand (every food mod creates this); it's not a new demand gate the mod itself establishes. M-26 requires the mod to *spend* material as pressure. The food demand is already the ambient endpoint of the food loop. REJECT — ambient, not a new gate; bare sell-link style reasoning.

Candidate: loot-seed — loot=no, nothing to seed.

- LEAVE — tiny flavour addon; its mechanic (maid food-variety tracking) has no material I/O and its only hook is the shared food pool. Forcing a 2nd anchor would be artificial.

---

## trading_floor   [anchors: create, economy (2)]

1 block, 1 item (trading_depot), loot=yes. Already at 2 pillars.

New candidate: 3rd anchor — aeronautics via M-31 logistics-required bulk good: the Trading Depot processes trade goods that arrive/depart via Create belts; if trade goods travel by airship between distant settlements, the depot is the unloading terminus. Red-team: the depot is a static block, not an aeronautics component; the aeronautics connection is ambient (any Create block might process airship cargo). No method routes through it specific to aeronautics. REJECT — ambient logistics story, no motif action.

New candidate: colony route M-28 — feed the depot into MineColonies emerald supply chains (colony provisioners could use the depot to auto-trade emeralds for colony goods). Red-team: interesting, but the depot requires a living villager adjacently; colony provisioners don't interact with Create depots by default. Connecting these would need custom behavior authoring, not a Phase-3 recipe. REJECT — requires behavior beyond recipe authoring; too speculative.

REWORK: existing connections (Create + economy) are sound. The dossier notes it's a natural M-08 keystone (feed Create-processed goods in to mint emeralds/Numismatic value) — that's the ambient endpoint of the economy loop, consistent with the player-run ruling (players set up the villager trades, not an NPC faucet). The "Natural keystone for M-08" note in the dossier is accurate; the depot itself doesn't gate anything new. OK — connections sound.

---

## doubledoors   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Pure door-interaction convenience behavior.

- LEAVE — genuine zero-content behavior mod; no material surface.

---

## betterendisland   [anchors: survival (1)]

Zero blocks, zero items, loot=no. YUNG's End island structure overhaul. No items, no loot tables.

Candidate: survival → economy via M-34 combat-route supply — the redesigned dragon arena is a more impressive boss fight; the Ender Dragon's drops (End Crystal components, dragon's breath, XP) could feed a trade economy. Red-team: betterendisland adds no new loot tables (loot=no). The argument would apply to the vanilla dragon anyway. No material edge belongs to *this* mod specifically. REJECT — the drop economy is vanilla's, not this mod's.

- LEAVE — loot=no, zero items; purely cosmetic/structural End overhaul. Nothing to weave.

---

## notenoughcrashes   [anchors: support/stability (1)]

Zero blocks, zero items, loot=no. Crash recovery UI.

- LEAVE — genuine zero-content stability utility; no material surface.

---

## sereneseasons   [anchors: survival (1)]

1 block (season_sensor), 22 items (calendars, ss_icon), loot=yes. The pack's seasonal calendar driver.

The dossier lists two 2nd-anchor candidates: (a) Create via season_sensor redstone [M-05 native-method gating] and (b) economy via seasonal scarcity [M-09 luxury→coin, marked WEAK and now RETIRED].

Candidate (a) — season_sensor → Create redstone logic: the sensor emits a redstone signal keyed to the current season; a Create gearshift/clutch/contraption could read this to switch what crop the automated farm plants each season or open/close greenhouse shutters. Method: the sensor's redstone output feeds create:deploying or a contraption logic gate that physically changes the farm's configuration. Motif: M-16 seasonal reagent (a season-gated input feeds a machine/process) — but M-16 is specifically about a *crop/material* obtainable only in a given season, not about the sensor itself as a control signal. The closer motif would be M-05 (native-method gating, where the season_sensor's redstone IS the native method), but M-05 is for a mod's flagship item built *in its own machine*, gated on Create parts. Neither fits cleanly. Could this be a no-motif? The link IS real and sensible (season sensor ↔ Create automation loop) but it's a config/automation tie, not a recipe-route. It doesn't need a recipe; it's a design note about hooking Create's redstone readers to the sensor. As a Phase-3 action it would be "document/config the Create gearshift to read the season_sensor," which isn't a recipe authoring task. REJECT — no motif fits a "control-signal automation tie" without forcing; and no recipe authoring is needed (Create already reads any redstone signal). This is ambient synergy, not a weaveable candidate.

Candidate (b) — economy via seasonal scarcity: dossier correctly flags M-09 which is RETIRED. Reframe under player-run rules: out-of-season produce is scarcer, so it becomes a trade good (M-30 regional-scarcity gate, applied temporally rather than geographically). Red-team: M-30 is specifically *regional* ore-gen → recipe input. Temporal scarcity (a crop is scarce in winter) is not the same as regional lock; there's no recipe gate here, just slower growth. A player can greenhouse-override the penalty. The scarcity is real but not locked; the economy link is ambient (everything scarce gets traded). REJECT — M-30 requires a regional lock in ore-gen gating a recipe; seasonal slowdown isn't a locked gate. The ambient scarcity argument is the retired M-09 pattern rebranded.

New candidate: Serene Seasons × magic (Ars Nouveau) via M-16 — specific crops that are harvestable ONLY in a given season (via fertility config: 0% fertility out of season even with bonemeal) feed an Ars Nouveau imbuement or Iron's Spellbooks cauldron brew as seasonal reagents. Example: a spring-only wildflower (Farmer's Delight cabbage or a modded crop) as the seasonal input for a spring-attuned ritual. Power-read: the crop itself is everyday (low tier), so the integration should be a light one-step recipe. Theme-fit: "spring herb, autumn mushroom" → seasonal magic is a completely natural pairing; players would nod. Motif: M-16 (seasonal reagent — a crop obtainable only in a given Serene Season feeds a magic method). Via: `ars_nouveau:imbuement` or `ars_nouveau:enchanting_apparatus`. This works — survival (seasonal crop pressure) → magic (reagent sink), advancing the loop's production stage.
- from: season-locked crop (sereneseasons fertility=0 out-of-season, e.g. spring cabbage / autumn rice) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a spring harvest unlocks a ritual you can't rush — the season is the key ingredient

New candidate: Serene Seasons × Create via M-12 processing-chain pull — the season_sensor's redstone output gates a Create mechanical contraption (a deployer-arm that swaps crops seasonally in an auto-farm). This is an existing pack design point ("automate your greenhouse"), but as a recipe it's not a thing — it's a build. The processing-chain pull is about routing a raw material through a processing method into a finished good; the sensor isn't a material. REJECT — M-12 requires material routing through a method; a redstone-logic farm build is a build task, not a Phase-3 recipe action.

New candidate: economy via M-30 — if a winter-only crop (e.g. a cold-climate modded mushroom) is a required input for a Numismatics-era recipe (or a colony provisioning request), its seasonal lock makes it region-AND-time scarce, creating real cross-player demand. Red-team: M-30 is specifically about ore-gen regional lock → recipe input. Seasonal lock is temporal, not regional. The scarcity is real but won't satisfy the M-30 definition. Unless we're gateing a recipe: a specific recipe that uses `sereneseasons:season_sensor` output as a "season check" — that's not a thing. REJECT — M-30 is regional ore-gen, not seasonal timing; temporal scarcity alone doesn't satisfy the gate definition.

Summary for sereneseasons: 1 ACCEPT (M-16, seasonal crop → Ars imbuement), multiple rejects.

REWORK: existing dossier note on M-09 (luxury→coin) is correctly marked WEAK and M-09 is now retired — that candidate should be removed from the dossier. The M-05 gating note (sensor → Create) is ambient and not actionable as a recipe. No existing authored connections to REWORK.

---

## farmersdelight   [anchors: survival, create (2)]

132 blocks, 187 items, loot=yes. Rich food-processing mod. Already at 2 pillars.

Existing connections: survival (food system core) + Create (inbound weaves: create:milling/mixing/filling; flour/ingredient prep). The dossier 2nd-anchor candidates include M-09 (luxury→coin — RETIRED) and M-12 (processing-chain pull — partly existing).

New candidate: magic 3rd anchor via M-12 processing-chain pull — Farmer's Delight cutting board / cooking pot → magic reagent intermediate. Specifically: a cooked high-tier dish (farmersdelight:beef_stew or farmersdelight:roasted_pork) used as a consumable reagent in an Ars Nouveau ritual (M-11 transmutation sink via spirit_fire, or M-10 arcane infusion) — the idea being that a potent meal provides the arcane energy substrate for a ritual. Red-team: food-as-magic-reagent is thematically plausible (hedge-witch cooking tradition), but the specific dishes in FD are rustic/comfort-food tier. Using a beef stew as a spirit-fire transmutation input is fine tonally if used lightly (everyday power). The motif would be M-11 (ritual/transmutation sink — a drop or material is transmuted via occultism:spirit_fire/ritual) using a cooked dish as the transmuted input. Via: `occultism:spirit_fire` or `ars_nouveau:imbuement`. Power: everyday (a cooked dish is easy to make). Hook: a heartfelt meal powers a small ritual — sustenance feeds more than the body. Tone: ok (cozy-magic pairing). ACCEPT.

- from: farmersdelight cooked dish (e.g. farmersdelight:beef_stew / farmersdelight:mushroom_rice) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a nourishing meal transmuted by spirit fire yields a minor occult reagent — sustenance feeds more than the body

New candidate: economy 3rd anchor via M-28 colony route — MineColonies cook/restaurant hut requests Farmer's Delight dishes (cooked meals from the cutting/cooking type) as colony provisioning. This gates colony food supply on FD recipes. Red-team: MineColonies cook huts request food items by tag (`c:foods`); FD items are already tagged `c:foods`. This is already ambient — colonies will already request FD food. A weave needs to do more: gate a specific colony research or building on a FD-exclusive item. For example, a MineColonies "tavern" or "restaurant" hut level-2 requiring farmersdelight:cooking_pot as a building ingredient. Power: mid (a Cooking Pot is made with vanilla items + iron, accessible early). Motif: M-28 (colony route — a basic is cheaper/faster via MineColonies, or a part is colony-locked). Via: MineColonies huts / requests (KubeJS recipe override). Tone: ok — a colony's kitchen needing a real cooking pot is intuitive. Hook: your colony's cook won't feed the workers without a proper Farmer's Delight kitchen. ACCEPT.

- from: farmersdelight:cooking_pot (or farmersdelight:cutting_board) | via: minecolonies hut building recipe (KubeJS) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the colony cook's hut requires a proper Farmer's Delight kitchen — no shortcuts for the workers' mess

New candidate: M-12 processing-chain pull deepening — route FD crops through Create milling/mixing into novel intermediates consumed by Ars Nouveau or Iron's Spellbooks. E.g., farmersdelight:cabbage → create:milling → "shredded cabbage mash" → ars_nouveau:imbuement as a fermentation-reagent. Red-team: "shredded cabbage mash" is a new item that would need authoring; the processing route is fine but the intermediate is not a real item in the pack. The simpler version (route FD crops through existing Create milling into flour, then flour into recipes) is already in the existing inbound weaves. A new intermediate specifically for magic would need a net-new item — that's Phase 3 authoring territory, not a Phase 2 proposal that rides an existing method cleanly. The proposal at M-16 (sereneseasons) already covers seasonal crop → magic; this would double-cover. REJECT — would require authoring a new item intermediate; redundant with M-16 seasonal-crop path.

New candidate: survival → aeronautics via M-31 logistics-required bulk good — FD dishes are bulky/perishable enough to warrant airship trade routes as a supply line. Red-team: perishability is mechanism-pending (M-36); bulk food as airship cargo is an ambient logistics story. M-31 requires that trade at scale *requires* the logistics arm. FD food isn't uniquely heavy/large-scale in a way that demands aeronautics. REJECT — ambient logistics story; M-36 mechanism-pending, not actionable.

REWORK: dossier's 2nd-anchor M-09 note (luxury→coin) is now retired — that candidate should be noted as REJECT (M-09 retired). The M-12 deepening (create:milling → flour, existing) is sound and already in the inbound weave list. OK on existing connections. The retired M-09 note in the dossier is the only cleanup needed.

---

## xaerominimap   [anchors: support (1)]

Zero blocks, zero items, loot=no. Client minimap/waypoint HUD.

- LEAVE — genuine zero-content client utility; no material surface.

---

## nochatreports   [anchors: support (1)]

Zero blocks, zero items, loot=no. Chat-signing privacy mod.

- LEAVE — genuine zero-content networking/privacy utility; no material surface.

---

## betterstrongholds   [anchors: survival (1)]

Zero blocks, zero items, loot=yes. YUNG's stronghold overhaul with custom chest loot.

Candidate: loot-seed via M-15 boss-key unlock — the stronghold's end-portal room is the gateway to the Ender Dragon fight; the stronghold's custom loot chests could seed a pack-specific boss-key component (e.g. a component needed for a complex Create/tech recipe gated on boss kill) that players discover on the way to the portal. Via: loot-seed (Phase-3 datapack edit to inject an item into betterstrongholds loot tables). Motif: M-15 (boss-key unlock — a boss drop/discovery is the gate item for a complex recipe). Red-team: M-15 is specifically "a boss *drop* is the gate item" — here it's a pre-boss dungeon loot, not a drop from the boss itself. The stronghold isn't a boss. The item would be found before the fight, not after; M-15's mechanic is "defeat a boss to get the key." This is a dungeon reward, not a boss drop. Theme: finding a rare blueprint or component in the stronghold library, then using it to unlock a recipe, is thematically sensible. But the motif doesn't cleanly apply. Mark no-motif — close to M-15 but the source is dungeon loot, not a boss drop. REJECT — no-motif (dungeon-loot seeding is adjacent to M-15 but M-15 is specifically a boss-drop gate; force would be needed to stretch it).

Candidate: loot-seed via M-34 combat-route supply — stronghold loot chests yield rare reagents (magic ingredients, coin, scarce ore) that a combat-specialist player explores for and trades to non-combat players. Via: loot-seed. Motif: M-34 (combat-route supply — a danger output is farmed by a combat specialist and traded). Power: mid (stronghold is a mid-game objective). Tone: ok — dungeon delvers bringing back rare finds is intuitive. Red-team: any dungeon mod with loot can make this claim. The distinction is whether the loot is pack-specific enough to create a real trade demand (not just "I found an emerald"). For M-34 to count, the seeded item should be something non-combat players genuinely need but can't easily get otherwise. If we seed a rare magic reagent (e.g. an Ars Nouveau source gem or an Occultism-related ingredient) into stronghold chests, the combat specialist becomes the supplier of that reagent to the magic specialist. Via: loot-seed (Phase-3 datapack edit). ACCEPT.

- from: betterstrongholds chest loot (dungeon hazard → combat specialist harvest) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the mage sends the fighter into the stronghold for rare ingredients they'll never get topside

REWORK: existing dossier note says "defer" the loot-table tweak — that's conservative but reasonable. The M-34 loot-seed is an actionable Phase-3 datapack edit. OK — no existing authored connections to REWORK. The "defer" guidance in the dossier was from a different framing; M-34 loot-seed is the correct Phase-2 proposal now.

---

## rightclickharvest   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Right-click crop harvest behavior.

- LEAVE — genuine zero-content farming convenience mod; no material surface.

---

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

Zero blocks, 17 items (minecraft:trial_key, minecraft:ominous_trial_key), loot=yes. 100+ structures across all dimensions including taverns with cartographer villagers.

Candidate: loot-seed via M-34 combat-route supply — DaT's dungeons, illager hideouts, and trial chambers contain loot chests; seed pack-specific trade goods (magic reagents, rare coin, scarce materials) so combat explorers supply non-combat players. Via: loot-seed (Phase-3 datapack edit). Motif: M-34. Power: everyday→mid (taverns and small dungeons are accessible early; trial chambers are mid). Tone: ok — exploration-looting feeding the economy is the core fantasy. ACCEPT.

- from: dungeons-and-taverns structure loot (tavern/hideout/trial chamber chests) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the explorer brings back ingredients from illager hideouts that the crafter needs but won't go looking for

Candidate: economy via M-29 cross-route dependency — the in-tavern cartographer sells maps to other DaT structures; those structures are a necessary way to locate specific worldgen resources (caves, biomes). Red-team: the cartographer sells maps for vanilla emeralds, not pack-specific economy. The trade loop is vanilla villager emeralds (NPC coin faucet pattern, now cut per M-21 cut). REJECT — vanilla villager emerald trade is an NPC faucet pattern; M-21 cut.

Candidate: loot-seed via M-15 boss-key unlock — the ominous trial key (already in the item list) gates ominous vaults in Trial Chambers; a pack-specific boss-key component could be added to ominous vault loot. Via: loot-seed. Motif: M-15. Power: endgame (Ominous Vault is gated on a Bad Omen effect + Trial Key). Tone: ok. Red-team: the ominous_trial_key is a vanilla item; DaT just includes them in its structures. Adding a boss-key component to the ominous vault loot is a real integration — "defeat the Trial Chamber to unlock a complex recipe." ACCEPT.

- from: dungeons-and-taverns ominous vault loot (ominous trial key → boss-key component) | via: loot-seed | to: create/production | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Trial Chamber's hidden vault drops the one component you need to build the next tier of Create machine

REWORK: dossier lists M-09 (luxury→coin via cartographer) as a candidate — M-09 is RETIRED and the cartographer trade is a vanilla NPC emerald faucet (M-21 cut territory). Remove/reject that candidate. OK otherwise.

---

## citadel   [anchors: support/library (1)]

Library for sbom_xela's mods (Alex's Mobs etc.). 1 block (lectern), 5 items (citadel_book, debug, effect_item, fancy_item, icon_item), loot=yes. Items are dev/debug tooling, not gameplay items.

Candidate: loot=yes — what's in the loot table? The items listed (debug, effect_item, fancy_item, icon_item) are clearly dev tooling. The loot table likely covers citadel:lectern drops itself. No novel seeding hook.

- LEAVE — library/API; the 5 items are dev/util internal tooling with no gameplay surface. The loot table is for the lectern block. Nothing to weave.

---

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

Zero blocks, zero items, loot=no. Drop-entity merge utility for server performance.

- LEAVE — genuine zero-content utility; no material surface.

---

== CHUNK COMPLETE ==
