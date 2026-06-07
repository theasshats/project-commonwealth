# Phase 2 candidates — chunk-03

## createfood   [anchors: survival, Create (2)]

REWORK: The dossier's 2nd-anchor candidate references M-09 (luxury good → coin). M-09 is **retired** — "dishes are sellable" is the ambient endpoint, not a weave. The existing anchor set is sound (survival + Create) but the stated economy candidate needs re-expression.

- from: createfood finished dishes (pizza, cakes, milkshakes) | via: create:milling / create:mixing / farmersdelight:cooking (existing chains) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort processed meals are consumed against hunger/diet pressure, renewing demand and closing the loop — every batch burned is another batch needed.
- from: createfood finished dishes → colony supply | via: MineColonies hut requests | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a cook colonist demands pies and pastries from the player economy, making the Create-food chain feed a colony rather than sitting in a chest.
- from: createfood dishes as cross-route input | via: KubeJS recipe (craft a magic meal catalyst using a createfood dish as an ingredient) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: an Ars Nouveau potion flask recipe requires a specific rich dish (e.g. apple_cheesecake) as a reagent, so the baker and the mage must trade — food production feeds the magic route.
- from: createfood seasonal crop → seasonal dish | via: season-gated crop input (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a pumpkin-spice pie or summer berry tart only works when those crops are in season, making the Create-food line a seasonal specialization.
- from: bare "dishes are sellable for coin" | via: — | to: economy | motif: M-09 (retired) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; ambient endpoint is not a weave; re-expressed as M-28 (colony demand) above.

OK — core survival + Create connections sound; the four accepted candidates add demand-gating (M-26/M-28), cross-route (M-29), and seasonal depth (M-16).

---

## formations   [anchors: survival (1)]

- LEAVE — pure cosmetic scatter-structure worldgen, no blocks/items of its own (1 template_editor dev tool), loot=no. Nothing to route — any loot weave belongs to the structures' underlying palettes, not to Formations itself. Confirmed zero-surface library for weaving purposes.

---

## durabilitytooltip   [anchors: support/client QoL (1)]

- LEAVE — client UI tooltip mod, zero items/blocks/methods. Pure display layer; nothing to weave.

---

## betteranimationscollection   [anchors: support/client visual (1)]

- LEAVE — client-side entity model/animation replacements; zero items/blocks/methods. Pure visual polish; nothing to weave.

---

## zombiemoon   [anchors: survival (1)]

- from: zombie-mob pressure (harder undead) | via: loot-seed on its mobs | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: the nastier undead variants (Brute, Crawler, Spitter) drop their standard loot at elevated difficulty, so a combat specialist farming them to supply rotten-flesh-derivatives to alchemists/Occultism rituals is a plausible trade.
- from: zombiemoon mob drops (vanilla rotten flesh etc.) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: the stronger undead variants that the Crawler/Brute represent fit the necromantic transmutation channel — route their drops into Occultism spirit-fire to yield a bone-dust or low-tier essence used in rituals.
- REWORK note: the dossier's "leave" is reasonable given no unique drops, but M-34 + M-11 via loot-seed can apply to the mod's loot tables — even if the drop is vanilla rotten flesh, it costs combat to get (the harder mobs make farming risky), which is what M-34 needs. Both candidates are low-lift via loot-table seeding; if Occultism spirit_fire can accept rotten flesh as input natively, no new recipe is needed.
- from: "zombie mobs are just harder; no unique reagent" | via: — | motif: none | verdict: REJECT | reason: Without a unique drop there is no material to route; the two accepted candidates use the danger-gate (M-34) and generic rotten-flesh (M-11) rather than inventing a new reagent — the LEAVE dossier note stands as the zero-new-recipe baseline. The accepted candidates require only loot-seed and one spirit_fire recipe, both lightweight.

---

## born_in_chaos_v1   [anchors: survival (1)]

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing the dark-metal deposit in a Create millstone/crusher yields dark-metal nuggets (+experience nugget byproduct), pulling a gothic horror ore into the Create processing spine so metalworkers care about killing Fallen Chaos Knights.
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bundle of bones from the undead chaos mobs transmutes in Occultism spirit-fire into a bone-dust intermediate — the spooky mob kill now feeds necromantic rituals, thematically dead-on.
- from: born_in_chaos_v1:dark_metal (boss-grade gear input) | via: KubeJS recipe gating | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: dark metal, obtainable only by consistently farming the harder Chaos Knight drops, is a required input in a high-tier Create mechanical component (e.g. a reinforced casing), making combat specialist supply to engineers necessary.
- from: Pumpkinhead seasonal boss drop (bagof_candy / Pumpkin Staff) | via: loot-seed (seasonal boss loot table edit) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Oct 25–Nov 5 boss's unique drops are only obtainable by a combat specialist during the seasonal window — they farm and trade those items to players who want them, making the seasonal fight a supply event.
- from: born_in_chaos_v1:dark_metal_block (argillite/decoration palette) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: black argillite bricks crush back to cobbled argillite + experience nugget (lossy), so builders can recycle the deco palette — a minor but coherent Create spine pull.
- from: bare "dark metal gear is sellable" | via: — | motif: M-09 retired | verdict: REJECT | reason: ambient endpoint; rejected per player-run-economy rule. Re-expressed as M-34 (seasonal boss supply event) + M-15 (boss-key gate) above.
- from: economy via Numismatics coin (M-09 candidate in dossier) | via: — | motif: M-09 retired | verdict: REJECT | reason: same as above.

OK — connections: 5 accepted candidates across Create (M-03, M-04, M-15) and magic (M-11) and economy/survival (M-34). This is a strong 1→4-anchor mod; the dark metal + bundle_of_bones + seasonal boss give real routing surfaces.

---

## l2library   [anchors: support/API library (1)]

- LEAVE — pure developer library (player attribute/Curios APIs); no items, no blocks, no methods. Zero content surface.

---

## startuptime   [anchors: support/perf-diagnostic (1)]

- LEAVE — boot-time logger; zero items/blocks/methods. Single log-line output; nothing to weave.

---

## chefsdelight   [anchors: survival, economy (2)]

REWORK: The dossier's 2nd-anchor candidate cites "route trades onto numismatics via M-09." M-09 is retired. The existing 2-anchor status (survival + economy via villager trades) needs recheck — villager emerald trades are NPC transactions, not player-to-player economy. Under the player-run-economy ruling, emerald trades are a vanilla mechanic, not a counted weave; the "economy" anchor here is weak unless it gates player demand in a player-run sense.

- from: Chef/Cook villager food trades | via: colony supply (MineColonies hut requests) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies cook hut could request Farmer's Delight meals from its supplier chain; the chefsdelight villager profession makes the village cook an NPC flavor for what should be a player-colony food supply route — wire the colony demand to FD meals so the cook hut makes the link explicit.
- from: chefsdelight Cook/Chef villages as trade hubs | via: loot-seed (village structure chests) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the village cook structures' loot tables can seed a region-specific ingredient (e.g. a regionally-grown crop) that must be brought there — making the cook village a destination for trade, not just a vendor.
- from: "trade FD meals to Cook/Chef villagers for emeralds → numismatics coin" | via: — | motif: M-09 retired / M-21 cut | verdict: REJECT | reason: Both the emerald-sell and the NPC→coin routing are cut (M-09 retired, M-21 cut). Economy anchor must be player-driven; the Cook villager is flavor, not a coin faucet.
- REWORK flag: the current "economy" anchor listed in the dossier rests on villager emerald trades (an NPC transaction); strictly that's an ambient sell, not a player-run-economy weave. It is supportable only if the cook profession is rerouted to colony demand (M-28 above) or serves as a loot-seed destination (M-30 above). Tag the existing economy anchor as REWORK-pending those two candidates.

---

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust and soul crystals harvested in the Otherside transmute in Occultism spirit-fire into a mid-tier occult essence — the dangerous underworld dimension pays off in the magic web, so mages need combat explorers.
- from: deeperdarker:heart_of_the_deep (rare Warden drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep — a unique Warden-locked drop — is imbued into an Ars Nouveau high-tier reagent or catalyst, making it the magic spine's most dangerous gating item.
- from: deeperdarker:warden_carapace | via: create:mechanical_crafting | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden Carapace is required for a high-tier Create mechanical component (heavy plating), gating an endgame production upgrade behind the most dangerous encounter in the game.
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate and sculk stone deco blocks crush back to gravel + XP nugget (lossy) — already partly wired per the dossier (create:crushing inbound); confirm and extend to the full block set.
- from: deeperdarker:sculk_bone | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: sculk bone is a rare bone-adjacent material from a dark dimension — a perfect necromantic ritual ingredient; its distinct ID separates it from plain bone meal and gives Occultism rituals a tiered ingredient.
- from: Otherside-only soul materials are scarce → must be traded across the map | via: aeronautics / logistics movement | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust and warden-tier drops are only found deep under specific biomes — transporting them to surface magic labs at scale is a logistics run, giving the airship economy a high-value cargo.
- from: bare "soul materials are sellable for coin" (dossier weak candidate) | via: — | motif: M-09 retired | verdict: REJECT | reason: ambient endpoint; the real weave is M-11 + M-31 routing above.

OK — deeperdarker is a strong 1-anchor mod with rich reagent surface; accepted candidates add Create (M-04, M-15) + magic (M-02, M-11 ×2) + aeronautics (M-31), lifting it to 4 anchors in principle.

---

## justenoughbreeding   [anchors: support/QoL JEI plugin (1)]

- LEAVE — pure JEI breeding-info category plugin; zero items/blocks/methods. Informational; nothing to weave.

---

## endermoon   [anchors: survival (1)]

- from: Ender Moon event (mass enderman spawns) | via: lunar-event-gated supply (ender pearls) | to: magic | motif: M-22 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Ender Moon night floods the world with endermen, making ender pearls temporarily abundant — a savvy specialist farms pearls during this window to supply Ars Nouveau enchanting apparatus or Occultism rituals that use ender pearl inputs, turning a scary night into a trade opportunity.
- from: "endermoon has no items of its own" | via: — | motif: none | verdict: REJECT | reason: Weave belongs to the ender pearl commodity, not this mod's own items — the M-22 candidate above routes through the lunar event as a supply trigger; that is sufficient without inventing new content.

Note: the dossier "LEAVE" is overcautious — M-22 (lunar reagent) explicitly covers spawn-surge events that multiply existing drops, even without the mod registering items of its own. The Ender Moon is precisely the lunar-event-gated supply scenario M-22 was designed for.

---

## createtreadmill   [anchors: Create (1)]

- from: createtreadmill:treadmill (player-powered SU source) | via: create:* network consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player running a treadmill to power a processing chain directly expends effort (a form of consumption/pressure) — the treadmill makes the player a living fuel source, binding survival effort to the production loop. It's a low-tier power source that costs player time, not coal, giving early-game workshops a bootstrapping tool before windmills scale up.
- from: createtreadmill:maid_motor (consumes touhou_little_maid Soul Orb/Photo) | via: create:* network | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Maid Motor cross-routes between two pack mods (TLM soul orbs are the fuel); a Soul Orb produced in the TLM ecosystem feeds directly into Create rotational power, creating a cross-route dependency where the maid-mod specialist supplies SU to factories.
- from: forcing a 2nd pillar onto a pure SU-source block | via: — | motif: none | verdict: REJECT | reason: The treadmill and maid motor are both power sources — their weave is inherently Create-internal; M-26 above gives a survival interpretation but it's a stretch (player effort ≠ a consumable item). Keep the M-26 candidate as a soft annotation, not a deep integration. The M-29 candidate via Soul Orb is the stronger one.

---

## t_and_t   [anchors: survival (1)]

- from: Towns & Towers village structures (loot chests) | via: loot-seed (datapack edit to structure loot tables) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed a region-specific processed good (e.g. a local coin denomination, a regional crop) into T&T village chest loot so the 16 biome-specific village variants become trade-hub destinations — players travel to different village types to access different regional inputs, making T&T's worldgen variety a scarcity-driven economy driver.
- from: Towns & Towers conquerable fort structures | via: loot-seed (fort loot tables) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a high-tier crafting component or boss-adjacent drop into conquerable fort/tower chests so clearing them is a combat-supply event that pays off in tradeable goods — a fighting specialist clears forts, extracts the drops, and sells to production players.
- from: bare "village villagers trade emeralds → coin" | via: — | motif: M-21 cut | verdict: REJECT | reason: M-21 cut (NPC coin faucet). Village trades are ambient, not a player-run-economy weave.
- from: "T&T is pure worldgen with no items" → LEAVE | via: — | verdict: REJECT | reason: loot=yes; loot-seed candidates (M-30, M-34) are explicitly the right tool for structure/dungeon mods per briefing — do NOT leave when loot tables are present.

OK — T&T has a genuine loot surface; 2 accepted candidates via loot-seed pull it into economy (M-30 regional, M-34 combat-supply).

---

## ars_n_spells   [anchors: magic (1)]

- LEAVE — pure magic-internal bridge mod (Ars Nouveau ↔ Iron's Spellbooks mana unification); zero items/blocks/foreign-material I/O. The mod IS already a weave (M-01-adjacent: arcane currency unification), but it has no surface to extend to a second pillar without forcing an artificial edge. Correct "leave" per dossier.

---

## minecolonies_tweaks   [anchors: support/tag-harmonization (1)]

- from: minecolonies_tweaks c:crops/* and c:foods/* tags | via: create:milling / farmersdelight:cooking (recipes targeting unified tags) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the unified crop tags (c:crops/corn, c:crops/rice, c:crops/tomato…) let Create milling and FD cooking recipes consume any mod's version of those crops interchangeably — MCT's tag set IS the method-pull enabler; flagging the tag surface as an accepted weave here so the Phase-3 recipe set can reference it explicitly.
- from: minecolonies_tweaks:inventoryscroll | via: minecolonies_tweaks:component_merge_shapeless | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the inventory/copy scrolls are consumed (used up) when interacting with colony storage, making them a repeating consumable demand item — the scroll is a lightweight "upkeep" item the economy produces and colonies consume (M-26 consumption sink).
- from: minecolonies_tweaks as a pure support/QoL role | via: — | verdict: REJECT | reason: While the tag-unification role is real, it is infrastructure, not a weavable item node — the accepted M-12 annotation is the right framing (it enables recipes, it doesn't route material itself). The inventory scroll M-26 candidate is the only item-level integration worth authoring.

---

## detect-afk-1.2.2   [anchors: support/server-admin (1)]

- LEAVE — server-side AFK detection behavioral mod; zero items/blocks/methods. Nothing to weave.

---

## companion   [anchors: support/QoL (1)]

- LEAVE — pet-safety behavior mod; zero items/blocks/methods. Nothing to weave.

---

## moreculling   [anchors: support/performance (1)]

- LEAVE — client render-culling optimization; zero items/blocks/methods. Nothing to weave.

---

## dummmmmmy   [anchors: support/QoL combat-testing (1)]

- LEAVE — single-item (target dummy entity) combat test tool; no material processing, no method surface. Forcing an edge (e.g. "it's crafted from iron so it touches Create") would be contrived with zero gameplay payoff.

---

== CHUNK COMPLETE ==
