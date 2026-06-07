# Phase 2 candidates — chunk-13

## betteroceanmonuments   [anchors: survival (1)]

Dossier anchor: survival (aquatic dungeon exploration). Has loot tables (loot=yes) but zero own items/blocks and no registered recipe-types. The dossier's own note says "a loot-table seed is a datapack edit — defer." The briefing overrides that deferral: a loot-bearing structure mod with no recipes must reach for a loot-seed candidate before LEAVE.

Power-read: the monument is an endgame-ish aquatic dungeon (Elder Guardian; enhanced multi-floor layout). Loot is mid-to-endgame appropriate. Thematically: prismarine-and-guardian deep dive; no items of its own, so weaving is purely via seeding foreign items into monument chests.

Candidate A — loot-seed coin (M-08): seed a Numismatics coin denomination into monument chest loot. The monument is a hard dungeon; a coin reward fits "you cleared something dangerous, now you have purchasing power." Player-minted economy context: coins as a loot reward is fine because the coin supply comes from players minting — wait, M-08 is about minting from processed scarcity (scarce regional metal → Create-processed → minted). Dropping already-minted coin from a chest is closer to an NPC faucet (M-14, which is cut). Re-examine: if the loot is raw coin blanks (unminted ingot from a rare underwater ore — prismarine is a stretch), it could feed the minting chain, but forcing a rare aquatic ore here is contrived. Verdict: the coin angle is M-14 territory and fails the player-run rule. REJECT.

Candidate B — loot-seed magic reagent (M-02): seed a magic reagent (Ars source_gem, Iron's arcane_essence, or occultism djinn soul) into monument chests. Rationale: ocean monsters as reagent donors — underwater dungeon yields something the magic specialist needs. Theme: thematically water-aligned reagents could fit (the monument is alien/arcane-feeling), but prismarine blocks are the existing ocean-magic symbol; seeding someone else's magic currency into a dungeon chest is a generic loot-stuff operation with no particular motif coherence — it doesn't advance the loop (it just puts item X into chest Y). This is the "loot-seed for the sake of adding a drop" failure mode. M-02 is about mob *drops* becoming reagents; a chest seed is a different mechanism. REJECT for weak motif fit — it's not the mob-drop mechanic, it's just stuffing a chest.

Candidate C — loot-seed boss-key progression item (M-15): monument clears could yield a boss-key that gates a mid-tier Create or magic recipe. The ocean monument is a genuine hard dungeon; a progression key rewarding the clear makes thematic sense. However, M-15 is specifically "boss drop is the gate item" and monuments don't have a defined boss in Cataclysm/pack terms. BetterOceanMonuments only has the vanilla Elder Guardian plus layout expansions. A gate key "from the monument chest" is a reasonable data-pack seed, not a M-15 boss-drop (it lacks the boss-kill mechanism). Motif fit is marginal — this is closer to a generic "loot table add" than a structural motif. Mark as a candidate with low motif confidence.

- from: betteroceanmonuments loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: clash | verdict: REJECT | reason: seeding pre-minted coin into a chest is an NPC faucet (M-14 territory, cut); raw coin blanks from a water dungeon are thematically forced.
- from: betteroceanmonuments loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-02 is mob-drop → reagent, not chest-seed → reagent; stuffing someone else's magic currency into a monument chest is a generic operation with no structural loop advancement.
- from: betteroceanmonuments loot chests | via: loot-seed | to: create/survival | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing the expanded ocean monument yields a navigation chart or a rare alloy ingot (e.g. `tfmg:cast_iron` block or a prismarine-infused blank) that gates a mid-tier Create recipe — the dungeon clear has a tangible production payoff, tying exploration danger to the tech spine.

REWORK: dossier's 2nd-anchor candidates say "defer" for loot-seed — the briefing overrides this. Dossier should be updated to reflect that a loot-seed (M-15) is a real candidate. Not a recipe authoring note — surfaced for review.

---

## cataclysm   [anchors: survival (1)]

One-liner: eight dungeon bosses, rich boss-drop materials (Witherite, Ignitium, Cursium, ancient_metal_ingot), weapons, and themed blocks. Registered methods: cataclysm:amethyst_bless, cataclysm:weapon_fusion.

Power-read: boss drops are endgame. Ancient metal ingot, Witherite, Ignitium are all endgame mats. weapon_fusion (Mechanical Fusion Anvil) combines boss weapons/armor. These are the canonical "boss-key" materials named in CLAUDE.md: "complex Create tech unlocks via boss drops" (#92, M-15).

Candidate A — Create spine via M-15 (boss-key unlock): route Cataclysm boss materials (Witherite ingots, Ignitium, ancient_metal_ingot) as required inputs for advanced Create recipes — e.g. a high-tier mechanical arm or sequenced-assembly component needs Witherite as a boss-key ingredient, gating it behind dungeon progression. CLAUDE.md names this explicitly. Theme: a powerful alloy forged by ancient entities becomes the one ingredient a Create engineer can't synthesize — of course a craftsperson seeks the warrior to get it. Tone: ok. M-15. Endgame power, deep chain. STRONG ACCEPT.

Candidate B — magic via M-02/M-11 (mob-drop reagent sink): Witherite or Cursium → spirit_fire or ars imbuement → a magic essence. Red-team: Witherite is a boss-tier alloy, not a mob goo. Transmuting steel-adjacent boss metal into a magical essence is a thematic clash — the dark-fantasy tone of Cataclysm is adventure/combat, not mystical ritual. Unless the specific boss (Ender Guardian, perhaps) drops something with a natural arcane resonance (void-adjacent), the connection is mechanical-not-thematic. However, Cursium (a "cursed" material) → occultism:spirit_fire has a genuine thematic pull: cursed material burned to release spirit energy is coherent. Selective accept for Cursium specifically. Tone: ok for Cursium, clash for Witherite as a generic metal. M-11. Mid-power. ACCEPT (scoped to Cursium or void-adjacent drops).

Candidate C — economy via M-34 (combat-route supply): Cataclysm boss mats are farmed by a combat specialist and traded to the tech/magic players who need them for gates. This is the economy side of M-15 — the boss-key gate creates demand, which a fighter can fill for coin. Mechanism is emergent (no recipe needed); M-34 "combat-route supply" is the motif. Delivery: emergent (player behavior), no authoring needed for Phase 3 — but naming the motif and the fact that Cataclysm boss drops are the supply side of M-15 gates is the useful signal. ACCEPT as M-34, delivery: emergent trade (no Phase-3 authoring required — just confirming the dual-role).

Candidate D — Create via M-03 (ore-doubling): Witherite/Ignitium/ancient_metal_ingot → create:crushing → crushed ore/sheets/byproduct. Power-read: these are already refined boss-drop ingots, not raw ores. Crushing a refined boss-alloy ingot back to dust is the processing-chain equivalent, but it's mechanically odd — you'd typically process the raw ore form, not the end ingot. The dossier lists no raw ore form for these materials. Tone: slight clash (processing the prize back into dust). REJECT — the ingots come from boss kills already refined; crushing them is backwards-logic.

Existing connection note: dossier lists only survival (1). The Create/M-15 and M-34 weaves are the missing second anchors.

- from: cataclysm:witherite_ingot + cataclysm:ancient_metal_ingot | via: recipe (KubeJS gate) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Mechanical Fusion Anvil's ancient alloy is the one ingredient the Create engineer can't smelt — only the dungeon-delver can supply Witherite for a high-tier sequenced-assembly component.
- from: cataclysm:cursium_ingot (cursed drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: cursed alloy burned in spirit-fire releases bound soul-essence — the magic specialist needs what only a boss-killer can bring.
- from: cataclysm boss drops (Witherite/Ignitium/ancient_metal) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: combat specialists farm the dungeon so the builders and mages can buy the gate keys — no recipe, just the natural demand created by M-15/M-11 locks.
- from: cataclysm:witherite_ingot / cataclysm:ignitium_ingot | via: create:crushing | to: create | motif: M-03 | power: endgame | tone: clash | verdict: REJECT | reason: these are already-refined boss-alloy ingots, not raw ores; crushing them back to dust is backwards-logic and thematically odd (you don't grind your prize).

OK — existing survival anchor is sound. New weaves add create + economy to reach ≥2.

---

## minecolonies   [anchors: survival, create (2)]

Dossier: already ≥2. Registered methods: minecolonies:composting, minecolonies:zero_waste. Colony produces foods, ores from quarries, and runs the alternate-production route for the pack (M-28, M-05 already authored). Dossier flags economy as "possible 3rd via M-09" but M-09 is retired.

Review existing connections:
- Create weave (quarries gated on Create parts via M-05, authored in 98-minecolonies.js): SOUND. Quarries using andesite casings / cogwheels / precision_mechanism is coherent and documented.
- Survival anchor (settlement + food/farming): SOUND.

New candidates:
Candidate A — economy via M-28 (colony route): the pack's stated design is that MineColonies is the cheap-basics route that creates trade pressure. The formal motif M-28 is "colony route" — a basic is cheaper/faster via colony. This is not just the ambient "colony produces food you can sell" (that's M-09 territory, which is retired), but specifically that the colony-cheapness creates demand-pressure on the player-run economy (you buy from the colony specialist rather than grinding). M-28 is already an accepted motif. The connection is that MineColonies' output nodes (food, stone, ore) feed into the trade economy as cheaper-supply items, creating the cross-player trade the pack wants. This is a structural motif, not a bare "sell it" link. Delivery: KubeJS/config — colony hut-level or research gates the basics. ACCEPT as M-28 to add economy as a 3rd anchor.

Candidate B — magic via M-28 (colony unlocks magic components): the dossier notes MineColonies reaches into magic via the blockhutmysticalsite and blockhutnetherworker huts — the colony can produce magic reagents through specialized huts. This is the "colony route into magic" the design document names (§3: "MineColonies reaches across both tech and magic"). This is M-28 expressed toward magic, adding magic as a 3rd anchor. ACCEPT.

Candidate C — economy via M-37 (research gate): MineColonies' University research tree gates capabilities; research unlocks are non-tradeable (you can't buy the knowledge, only its product). This is M-37 expressed through MineColonies' own mechanic. The effect is that a colony-research player has a capability others don't; their colony-produced goods are the only way to access that locked output. ACCEPT.

REWORK: Dossier's 2nd-anchor section mentions M-09 (economy "possible 3rd via M-09") — M-09 is retired. Should be replaced with M-28 framing (colony route as the demand-creation edge, not a sell link). Flag for dossier update; not a recipe change.

- from: minecolonies colony output (food, stone, processed basics) | via: colony hut production (M-28 route) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony player produces basics faster and cheaper; other players buy from them rather than grind — the colony specialist is the pack's wholesale supplier.
- from: minecolonies:blockhutmysticalsite + blockhutnetherworker | via: MineColonies hut research (M-28 route) | to: magic | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: magic reagents brewed by colony alchemists — the settlement player is also the pack's herbalist, unlocking magic components the solo mage can't produce at scale.
- from: minecolonies University research | via: MineColonies research tree (M-37) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: research unlocks are personal to the colony — you can't buy the skill, only the product; colony-gated outputs stay scarce because only the settlement builder has the knowledge.

REWORK: Dossier 2nd-anchor note cites M-09 (retired). Replace with M-28 framing.
OK — existing create (quarry M-05) + survival connections are sound.

---

## libipn   [anchors: support/library (1)]

Pure GUI/config library for Inventory Profiles Next. 0 blocks, 0 items, loot=no, no recipe types. Genuine zero-content code library — no items, no loot, no method hooks, nothing to route.

LEAVE — pure code library; zero content surface. No weave possible.

---

## create_dragons_plus   [anchors: create (1)]

Library/QoL for the DragonsPlus Create add-on family. Registered methods: create_dragons_plus:ending, create_dragons_plus:freezing (new fan-processing modes). Ships 20 blocks (dye fluid blocks), 24 items (dye buckets, dragon_breath_bucket, fluid_hatch, levitite_fragile_fluid_tank), loot=yes.

The dossier says "leave — support role." But: it ships real items (dragon_breath_bucket, fan_ending_catalyst via Dragon Head / Dragon's Breath fluid) and loot=yes. The briefing says a mod with items/loot is not "no content." The ending/freezing methods ARE weave-targets. However, the dossier is correct that this mod's role is as the method-provider; other mods route THROUGH its methods. That's precisely how M-12 (processing-chain pull) would work: something else's material gets processed via create_dragons_plus:ending or create_dragons_plus:freezing. That doesn't add a 2nd anchor to create_dragons_plus itself — it adds to whoever's material is processed.

The only genuine 2nd-anchor angle for this mod is: does its dragon_breath fluid or ending catalyst have uses beyond Create? Dragon's Breath is a vanilla item; the bucket form (create_dragons_plus:dragon_breath_bucket) feeds the fan_ending catalyst. Thematically this is already inside the Create pillar. The levitite_fragile_fluid_tank is a Create-adjacent storage item. None of these span to magic/survival/economy coherently — the dragon_breath bucket as an Ars Nouveau imbuement catalyst is conceivable (infuse via dragon breath) but thematically forced (it's a Create-industrial fluid, not a magic ingredient). loot=yes: the mod likely only has loot for the fan-catalyst blocks, which are crafted, not looted.

- from: create_dragons_plus:dragon_breath_bucket | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: dragon_breath as an arcane infusion input is thematically forced — it's a Create-industrial fluid (fan-processing catalyst), not a mystical essence; the connection is mechanical, not sensible to a player.

LEAVE — support role for the Create add-on family; its ending/freezing methods are weave-targets that OTHER mods' materials route through (that's the correct direction). No coherent 2nd anchor for the mod itself.

---

## cookingforblockheads   [anchors: survival (1)]

Modular kitchen multiblock + recipe-discovery layer. Registered method: cookingforblockheads:toaster. 140 blocks, 148 items, loot=yes. Aggregates every food mod's recipes; downstream of the food cluster.

Power-read: the kitchen appliances (Fridge, Oven, Sink, Cooking Table) are everyday-to-mid items — they're the food-prep workstation, not endgame gear. Light step appropriate.

Candidate A — Create via M-05 (native-method gating): the Oven/Fridge/Sink are flagship kitchen machines. Gating upgraded variants (e.g. the Steel Oven, electric Fridge) behind Create-processed parts (copper sheets, brass gears) makes the full kitchen a tech milestone rather than day-1 craft. Tone: a player walking into the kitchen wing of a Create factory absolutely nods at this — the appliances need automation-grade components. M-05 native-method gating. Everyday-to-mid. ACCEPT.

Candidate B — economy (bare sell link): dossier correctly identifies this as weak — the kitchen sells nothing new, it cooks others' foods. A bare "kitchen goods are sellable" is M-09 territory (retired). REJECT.

Candidate C — MineColonies colony route M-28: a colony Kitchen hut using the cookingforblockheads Cooking Table as its workstation — the colony cook specializes in batch-cooking for trade. This is M-28 (colony route) — a colony player runs the communal kitchen faster than a solo cook. Delivery: config or KubeJS (register cookingforblockheads:cooking_table as a MineColonies kitchen hut workstation alternative). Tone: ok — a settlement's communal kitchen absolutely uses a better stove. ACCEPT.

- from: cookingforblockheads:oven + cookingforblockheads:fridge | via: recipe (KubeJS, M-05 gate) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the steel-oven and brass-hinged fridge need Create-processed copper and brass parts — the kitchen upgrade is a tech milestone, not day-1 crafting.
- from: cookingforblockheads:cooking_table | via: MineColonies hut-workstation config (M-28) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony cook runs the communal kitchen via the Cooking Table — a settlement specialist produces meals for the whole server's food economy faster than any solo player.
- from: cookingforblockheads kitchen output (food goods) | via: bare sell / Numismatics | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; bare "cook food, sell it" is the ambient endpoint, not a weave.

---

## brazil_legends   [anchors: survival (1)]

Brazilian folklore mob mod. No recipe types. 5 blocks, 47 items, loot=yes. Drops: capelobo_claw, big_tongue, amber_shard/pearl, bottle_with_saci, bloodmoon_sickle. Vanilla-only recipes.

Power-read: drops are mid-tier (mob drops from non-boss folkloric mobs). amber_shard/pearl are decorative but nameable as a "rare gem"; capelobo_claw and big_tongue are organic visceral drops. The bloodmoon_sickle is a themed weapon (mid).

Candidate A — magic via M-02/M-11 (mob-drop reagent sink): capelobo_claw or big_tongue → occultism:spirit_fire or ars_nouveau:imbuement → magic essence. Capelobo is a dog-headed cryptid (werewolf adjacent); big_tongue from… Saci (trickster figure). Theme-fit: folkloric creature organs as magic reagents is a classic occult ingredient (toads' tongues, werewolf claws — exactly the herbalist/occultist aesthetic). This is excellent thematic fit. Tone: ok. M-02 and M-11 both apply. Mid power. ACCEPT.

Candidate B — magic via M-02 amber_shard as arcane catalyst: amber_shard / amber_pearl → ars_nouveau:imbuement or occultism:crystallize as an attunement catalyst. Amber as a magic reagent is a very natural choice (fossil amber, preserved magic). The attuning angle is M-10 (arcane infusion pull). Tone: ok — amber as magical concentrate is thematically solid (it preserves what's inside; imprisoned trickster energy from a Saci-in-a-bottle → amber is resonant). However, check reagent-ownership table: no existing reserved reagent conflicts. ACCEPT.

Candidate C — economy via bare sell (amber as luxury): M-09 is retired. "Amber is sellable" is the ambient endpoint. REJECT.

Candidate D — Create via M-03 or M-15: brazil_legends has no ore/metal and no boss drops in the Create-gate sense. The mobs are folklore cryptids, not tech-grade enemies. No coherent Create weave. REJECT.

- from: brazil_legends:capelobo_claw + brazil_legends:big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a cryptid's claw burned in spirit-fire yields a bound essence — folkloric ingredients are exactly what an occultist wants; the monster-hunter supplies the mage's workbench.
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber preserved with trickster-spirit energy (Saci's amber) is an arcane attunement catalyst — the folklore hunter trades their rarest drops to the magic specialist.
- from: brazil_legends drops | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the magic user needs folkloric reagents; the hunter who farms Brazil Legends mobs is the supplier — a micro combat-supply chain feeding the magic economy.
- from: brazil_legends:amber_shard | via: numismatics sell / M-09 | to: economy | motif: M-09 (retired) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; bare "rare gem is sellable" is the ambient endpoint, not a structural weave.
- from: brazil_legends drops | via: create:crushing or other Create method | to: create | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no coherent Create processing target; folkloric animal drops don't map to a Create mechanical process.

---

## notenoughcrashes   [anchors: support/stability (1)]

Crash-recovery UI mod. 0 blocks, 0 items, loot=no, no recipe types. Zero content surface.

LEAVE — pure stability/support utility; no content to weave.

---

## createimmersivetacz   [anchors: create (1)]

Create-TACZ gun integration. No own recipe types (authors onto Create's). 2 blocks (fluid blocks), 14 items (gun parts, ammo shells, fluid buckets), loot=no. Routes brass plates → gun barrels → ammo via create:sequenced_assembly.

Power-read: gun barrel/firing_mechanism are mid-tier (brass-tier Create); ammo (twelve_gauge_shell) is consumable everyday. Guns themselves are endgame-ish in combat terms.

Candidate A — economy via M-34 (combat-route supply): bulk ammo (twelve_gauge_shell, etc.) produced by a Create-industrial "arms factory" is a consumable trade good; an arms-dealer specialization produces rounds for other players' combat needs. This fits M-34 (combat-route supply) — the factory player supplies the fighter player. But M-34's framing is specifically "boss/danger output farmed by a combat specialist and traded to non-combat players." Here it's the reverse: production player makes ammo, sells to fighter. That's M-26 (consumption sink — ammo is spent) combined with emergent trade. Delivery: ammo is a natural consumption M-26 (it's spent in combat, demand never zeroes). Tone: ok. ACCEPT as M-26 (ammo as consumption sink creating persistent demand).

Candidate B — aeronautics via M-24 (mechanical component → propulsion): gun barrels or mechanical triggers as inputs for Aeronautics turret/armament systems — the Create arms factory supplies the warship. However, M-24 is specifically about drivetrain/control components (propellers, engines, rudders). Weapons/armaments are adjacent but distinct. This is a thematic stretch on M-24. Red-team: a turret isn't a propulsion component. REJECT for M-24. But: "armed airships need Create-made weapon mounts" is a real aeronautics/economy weave — warship armed with TACZ guns needs CreateImmersiveTACZ parts. This fits a "logistics/aeronautics + combat" edge. No existing motif covers this directly (M-24 is drivetrain, not armament). Mark as no-motif → REJECT-for-review.

Candidate C — survival via M-26 (ammo consumption): ammo is perpetually consumed in combat — this is M-26 (consumption sink). The fighter burns shells, which drives demand on the factory player. Delivery: ammo is the consumable. ACCEPT.

- from: createimmersivetacz:twelve_gauge_shell + ammo items | via: create:sequenced_assembly (production) + M-26 consumption | to: survival + economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: ammo burns in every firefight — the Create arms factory runs constantly because combat players are always consuming rounds; a self-sustaining demand loop.
- from: createimmersivetacz gun parts (gun_barrel, firing_mechanism) | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create specialist runs the ammunition factory; fighters and explorers buy from them — the arms dealer is a real production specialization in a PvPvE pack.
- from: createimmersivetacz gun/ammo parts | via: Aeronautics armament integration | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no existing motif covers "weapon mounts on an airship" (M-24 is drivetrain/control, not armament); would need a Gate-0 motif if this edge is wanted; flag for review.

---

## create_better_villagers   [anchors: create, economy (2)]

Already 2-pillar. Adds Create-themed villager professions trading Create parts for emeralds. 0 blocks, 0 items, no recipe types. The dossier suggests re-denominating emerald trades to Numismatics coins.

Review existing connections:
- Create anchor (supplies Create parts via villager trade): SOUND — the professions are thematically and mechanically tied to Create workstations.
- Economy anchor (trade economy): SOUND — it's literally a trading mechanic.

New candidate: Numismatics re-denomination (M-08): route the villager trades so Create-parts villagers accept/give Numismatics coins instead of (or in addition to) emeralds. This integrates the vanilla trade economy with the pack's player-minted currency, preventing a parallel emerald economy from undermining the Numismatics layer. M-08 framing: "minted coin as the settlement medium" — the Create-parts specialist charges in pack coin, not raw emeralds. Delivery: config (create_better_villagers likely has a config for trade customization) or KubeJS trade override. Tone: ok — a tech-world villager takes the currency the engineers use. ACCEPT.

Candidate B — survival (pressure): no clear survival hook — the mod supplies production parts, not survival goods. REJECT for survival.

- from: create_better_villagers emerald trades | via: config / KubeJS trade override (M-08 coin re-denomination) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Brass Worker takes Numismatics coin, not raw emeralds — the tech-quarter villager operates in the pack's real currency, bridging vanilla trade into the player-run economy.
- from: create_better_villagers | via: any survival link | to: survival | motif: no-motif | power: — | tone: clash | verdict: REJECT | reason: the mod is a trade/supply mechanic; no coherent survival-pressure hook.

OK — existing create + economy anchors are sound. M-08 coin re-denomination is a refinement, not a rework.

---

## opacpvp   [anchors: support/PvP-rules (1)]

Tiny addon mod: /opacpvp command + PvP toggle between party members. 0 blocks, 0 items, loot=no, no recipe types. Zero content surface.

LEAVE — pure PvP-rules support utility; no content to weave.

---

## gtmogs   [anchors: survival, economy (2)]

Worldgen framework: replaces vanilla ore gen with GregTech-style regional veins. 3 blocks, 3 items (the dimension marker blocks), loot=yes. No recipe types. The pack's scarcity foundation.

Review existing connections:
- Survival anchor (exploration — ore veins create exploration pressure): SOUND.
- Economy anchor (regional ore scarcity → trade necessity → economy): SOUND. This is M-30 (regional-scarcity gate) expressed as the worldgen layer.

New candidates: Can GTMOGS itself gain a 3rd anchor? As a worldgen framework, its own "items" are the three marker blocks (placed by pack authors in KubeJS to define vein zones — not player-facing content). Loot=yes, but this is likely just the marker blocks being lootable/droppable. There is no coherent 3rd anchor for the mod itself — it IS the foundation; everything downstream builds on it, not the other way. The dossier is correct: "the 'weave' is downstream."

One remaining note: the dossier's current framing says it enables M-03 and M-08 downstream. That's sound — it's the feedstock enabler for those motifs. No new link to author against GTMOGS itself.

REWORK check: existing connections sound. The "economy" anchor via regional scarcity → emergent trade is correct and maps to M-30.

OK — connections sound. No new weave candidates for the mod itself; its role is the upstream enabler for M-30/M-03/M-08 across the pack.

---

## create_ultimate_factory   [anchors: create (1)]

Recipe datapack: ~30 balanced Create recipes making vanilla resources renewable via Create processing. 0 blocks, 0 items, loot=no. Pure recipe content.

The dossier correctly identifies this as deepening the Create pillar, not bridging pillars. However: does any of its new renewable recipes create a 2nd anchor? Review the pattern: coal-block+lava → diamond (create:compacting), gravel+nuggets+lava → strata stones (create:mixing), etc. All routes are survival resources → Create process → vanilla output. The survival scarcity side: by making diamonds renewable through a Create chain, this actually slightly undermines the GTMOGS scarcity model (diamonds as a regional scarce ore). This is a tension the pack design should be aware of.

Candidate A — survival via M-12 (processing-chain pull): its recipes create a survival→Create bridge — survival-gathered resources (gravel, lava, coal) feed Create machines to yield useful outputs. That's technically M-12. But since the mod has no items of its own, the "weave" is just the recipe content itself, which is already authored. This is a same-system deepening (Create), not a bridge.

Candidate B — scarcity conflict: the diamond-from-coal recipe potentially undermines GTMOGS's scarcity design (diamonds are the quintessential scarce ore). This is a balance flag, not a weave candidate, but relevant for the pack team to review.

- from: vanilla resources (coal-block, lava, gravel) | via: create:compacting / create:mixing (create_ultimate_factory recipes) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: this is Create-internal deepening, not a cross-system bridge; the mod has no own items to anchor to a 2nd pillar; LEAVE is the correct call.
- [NOTE] create_ultimate_factory's coal→diamond recipe may undermine GTMOGS scarcity (diamonds as a regional scarce resource); flag for pack design review — consider disabling or capping the renewable diamond recipe rate.

LEAVE — pure Create-internal recipe datapack; no own items, no coherent 2nd anchor; deepens the spine without bridging pillars.

---

## bagus_lib   [anchors: support/library (1)]

Shared code library by baguchi. 0 blocks, 0 items, loot=no, no recipe types. Zero content surface.

LEAVE — pure code library; zero content surface.

---

## irons_lib   [anchors: library/API (1)]

Framework library for Iron's Spellbooks. Ships 4 blocks, 4 items (transmog_table, player_statue — both cosmetic); loot=yes (probably the cosmetic blocks). No recipe types.

The transmog_table reskins armor (NBT edit, no material processing). The player_statue is a decorative multiblock. Both are cosmetic with no material routing potential. Loot=yes is likely just the blocks being breakable/droppable.

One check: could the transmog_table connect to Create or economy? A transmog service-for-hire (M-33: specialist enchants/reskins for other players) is conceivable — the iron's_lib transmog table as a "cosmetic service" the aesthetics specialist offers. But: the transmog table is a simple right-click GUI action on armor you own; it's not a crafting method anyone routes material through. M-33 requires a *service* with a meaningful *process*; clicking a table to change appearance is too trivial. REJECT.

LEAVE — library/API with only cosmetic blocks; transmog and statue have no routable material surface; the cosmetic action is too trivial for M-33 service framing.

---

## tfmg   [anchors: create (1)]

Heavy-industry Create addon: steel, oil refining, diesel/gasoline, electricity. 8 registered methods (casting, coking, distillation, hot_blast, industrial_blasting, polarizing, vat, winding). 436 blocks, 584 items, loot=yes.

Power-read: steel = mid-tier industrial (gated behind blast furnace); diesel/gasoline = mid processing product; electricity (Voltage) = high-tier. tfmg is a full industrial tier.

Candidate A — aeronautics via M-13 (fuel → propulsion): TFMG's diesel, gasoline, and LPG are named in the reagent-ownership table as "Aeronautics propulsion fuel" (M-13). This is already the established aeronautics link. The weave: tfmg distillation → diesel/gasoline → Aeronautics engine intake. STRONG — already named as the M-13 example in WEAVE-LEDGER. Mark as ACCEPT (2nd anchor: aeronautics). Delivery: recipe (Aeronautics fuel intake accepts tfmg:diesel / tfmg:gasoline / tfmg:lpg).

Candidate B — aeronautics via M-23 (structural alloy → airframe): TFMG steel is the canonical structural metal for airframe construction. Steel plates/beams/blocks as required material for Aeronautics hull/frame blocks: the heavier the ship, the more TFMG steel it needs. M-23 (structural alloy → airframe/hull). Mid-to-endgame. Tone: absolutely coherent — a metal airframe needs industrial steel, not raw iron. ACCEPT.

Candidate C — aeronautics via M-24 (mechanical component → propulsion): TFMG produces combustion engines and the Voltage grid — engines as Create kinetic sources could tie to Aeronautics propulsion systems. The TFMG combustion engine as an Aeronautics kinetic drive (drives propellers via a Create shaft). M-24 (mechanical component → propulsion/control). Mid. Tone: ok — diesel engine spinning a Create shaft spinning Aeronautics propellers is exactly the dieselpunk feel. ACCEPT.

Candidate D — economy via M-08 (player-minted currency via steel): scarce steel ingots → create:pressing → coin blanks → Numismatics mint. Steel as the pack's mid-tier monetary metal (above iron/copper, below gold). M-08. Mid power. The reagent-ownership table doesn't reserve tfmg:steel for anything else. Tone: ok — industrial civilization uses steel-backed currency. ACCEPT.

Candidate E — magic via M-10 or M-29: any magic interaction? TFMG is dieselpunk-industrial. Forcing arcane infusion of steel or oil into magic is thematically dissonant. REJECT — tone clash; the dieselpunk aesthetic and the Ars Nouveau arcane aesthetic are at the opposite ends of the pack's range.

- from: tfmg:diesel + tfmg:gasoline + tfmg:lpg | via: Aeronautics fuel intake (M-13) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: no airship flies without diesel — the refinery player is the fleet's lifeline; a ship that runs out of fuel falls from the sky.
- from: tfmg:steel_ingot (steel plate / beam) | via: Aeronautics airframe recipe (M-23) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a flying machine made of raw iron would shake apart — industrial steel frames make the hull structural; heavier ships cost more TFMG steel.
- from: tfmg:combustion_engine | via: Aeronautics propulsion/kinetic shaft (M-24) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a diesel combustion engine spinning a Create shaft drives the propellers — the dieselpunk drivetrain feeding the aeronautics arm.
- from: tfmg:steel_ingot | via: create:pressing → Numismatics mint (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: an industrial economy runs on a steel-backed currency — press a steel coin blank at the mint and it circulates as the pack's mid-tier trade medium.
- from: tfmg metals/oil | via: ars_nouveau:imbuement or any magic method | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: diesel-industrial materials and arcane infusion are at opposite ends of the pack's tone; forcing oil or steel into a magic ritual is thematically incoherent.

OK — existing Create anchor is sound. New weaves add aeronautics (×3 routes) and economy to reach ≥2 (now anchors: create + aeronautics + economy).

---

## astikorcartsredux   [anchors: survival (1)]

Horse-drawn carts + farm implements. No recipe types. 0 blocks, 67 items (cart/implement variants per wood type), loot=no. Vanilla-crafted from wood; no Create or magic inputs.

Power-read: carts are everyday (wood + vanilla iron). Farm implements (plow/reaper/seed_drill) are everyday farming tools. Light step appropriate.

Candidate A — Create via M-05 (native-method gate): gate the iron/steel-bearing implement variants (plow blade, reaper blade) behind Create-processed iron sheets. A plow blade cut from Create iron sheets rather than a raw anvil recipe. M-05, everyday, light step. Theme: blacksmithed farm implements using industrial metal processing — plausible in a Create-industrial world. Tone: ok. ACCEPT (light gate, not a deep chain).

Candidate B — aeronautics via M-31 (logistics-required bulk good): horse carts as pre-aeronautics cargo transport — a deliberate early-game logistics tier before airships. The carts move goods over land; aeronautics moves them through the air. This isn't a weave (no recipe), it's a design framing — the carts and airships occupy different logistical tiers. No motif applies here directly (M-31 is about goods requiring aeronautics, not about carts as pre-aeronautics). REJECT — design framing, not a weave.

Candidate C — economy via M-12 (processing pull): cart as a farm-throughput tool → harvest surplus → trade economy. This is the ambient endpoint (surplus is sold), not a structural weave. M-09 retired. No stronger economy motif applies. REJECT.

- from: astikorcartsredux plow/reaper implement (iron components) | via: create:pressing (iron sheet) → crafting recipe (M-05) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the plow blade is cut from a Create-pressed iron sheet — even the draft horse's equipment runs through the smithy; farming upgrades track the tech tier.
- from: astikorcartsredux carts as logistics tier | via: design framing vs. aeronautics | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no motif covers "pre-aeronautics transport tier"; carts and airships are design-complementary but there's no recipe/loot weave to author.
- from: astikorcartsredux cart surplus | via: emergent trade | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; cart-harvested surplus trading is the ambient endpoint, not a structural weave.

---

## simplehats   [anchors: support/cosmetic (1)]

350 cosmetic hats, grab-bag drop/loot mechanic, hat recycling into scraps. Methods: simplehats:custom_hatscraps, simplehats:custom_hatvariants. 0 blocks, 351 items, loot=no (per digest — grab-bags drop from mobs, but loot=no in digest, so no loot-table hook to seed).

The hat economy is self-contained (hats ↔ scraps ↔ bags). The only external hook is mob drops (grab-bags fall from hostile mobs) — mob-drop mechanic, not loot-table (which is why loot=no).

Candidate A — economy via cosmetic trade (M-33 service-for-hire): a hat dealer specialization — one player collects and trades rare hats for coin. This is the cosmetic vanity side of the economy. M-33 (service-for-hire) — the collector offers rare hats as a social service. However, M-33 is "specialist performs work on another player's materials" (enchant-for-hire, repair, cargo runs). Trading a collectible isn't really "performing work." A closer motif would be M-26 (consumption sink — rare hats are "consumed" as cosmetics, creating continuous demand) but hats don't degrade. No clean motif fits.

Candidate B — survival via M-34 (combat-route supply): rare hats drop from dangerous mobs (the rarest hats from the hardest enemies). A combat specialist farms high-tier enemies and sells rare hats. M-34 (combat-route supply). The fighter farms hard mobs → rare hat grab-bags → sell to hat collectors for coin. This IS M-34 expressed on cosmetics. Unusual but coherent: danger produces a valued cosmetic that feeds the economy. Tone: ok — a whimsical collectible economy is a real economy mechanic in games (TF2, CSGO). ACCEPT.

- from: simplehats rare hat grab-bags (mob drops from hard enemies) | via: emergent trade / M-34 | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the rarest hats only drop from the most dangerous mobs — the fighter sells cosmetic trophies to the hat collector; whimsy has a market price in Derpack X.
- from: simplehats hats | via: any Create / magic method | to: create / magic | motif: no-motif | power: — | tone: clash | verdict: REJECT | reason: cosmetic hats have no coherent routing through a Create machine or magic ritual; forcing a recipe would be absurd.

---

## bettercombat   [anchors: support/combat-framework (1)]

Combat system framework — swing animations, hitboxes, combos, dual-wield. No items, no blocks, loot=no, no recipe types. Zero content surface.

LEAVE — pure combat-behavior framework; no items, methods, or loot to weave.

---

## farm_and_charm   [anchors: survival (1)]

Farmhouse mod with new grains (barley, oat), animal husbandry, and 6 registered cooking methods (crafting_bowl, drying, mincer, pot_cooking, roaster, stove). 80 blocks, 124 items, loot=yes.

Power-read: grains (barley/oat) and farm produce are everyday. Farmhouse cooking is everyday-to-mid. The mincer/roaster/stove are the mid-tier farm kitchen appliances.

Candidate A — Create via M-12 (processing-chain pull): barley or oat → create:milling → flour as an intermediate that feeds the bread chain. Create Millstone processes grains → flour, which the farm_and_charm cooking methods then use for bread/pastries. This is exactly M-12 (processing-chain pull: raw crop through another mod's processing method into a useful intermediate). Strong — this is the canonical grain-milling weave. Tone: of course — a Create millstone grinds grain better than hand-grinding. ACCEPT.

Candidate B — Create via M-12 (farm_and_charm cooking as intermediate): farm_and_charm food outputs (farmhouse bread, barley soup, oat pancakes) are diet-variety inputs that the diet/survival system demands. This isn't a Create weave per se — it's the ambient food production. The M-12 angle is specifically the grain→flour processing chain, not the end product.

Candidate C — MineColonies colony route M-28: farm_and_charm's chicken coop and feeding trough support the colony's farming/animal husbandry hut. The colony farmer uses the fertilized farmland / feeding trough to produce animal products faster. M-28 (colony route). The colony farming specialist runs farm_and_charm infrastructure for the whole server's food supply. Delivery: config / KubeJS (register farm_and_charm blocks as MineColonies hut workstations, or the colony Farmer's hut auto-uses fertilized_farmland for faster yields). Tone: a medieval colony absolutely runs grain fields and chicken coops. ACCEPT.

Candidate D — economy via M-26 (consumption sink): farm food is consumed (eaten) daily — this is M-26, the natural food-consumption loop. But this is the ambient endpoint of all food mods. The motif M-26 is most useful when it's specific (e.g. a specific fuel burning in an engine). For food, the diet-system (pressure) already handles this structurally. ACCEPT as a lightweight note, but don't count it as a new anchor — the survival→economy loop via food trade is the ambient endpoint.

Candidate E — survival via M-16 (seasonal reagent): barley and oat are seasonal crops — barley grows in spring/summer, oat in summer. Serene Seasons gating means the grain-milling chain (M-12) only operates in season. This is M-16 (seasonal reagent). The combination of M-12 + M-16 is strong: the Create millstone runs on seasonal grain, creating a seasonal production pressure for bread/grain products. ACCEPT.

- from: farm_and_charm:barley + farm_and_charm:oat (grain crops) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create millstone grinds barley and oat into flour for the baker — farm grain runs through industrial milling; the grain specialist and the Create engineer trade raw for refined.
- from: farm_and_charm:barley + farm_and_charm:oat (seasonal crops) | via: Serene Seasons season-gate (M-16) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley ripens in summer, not winter — the grain mill runs seasonally; stock flour before the cold hits or buy from the player who planned ahead.
- from: farm_and_charm:chicken_coop + farm_and_charm:feeding_trough | via: MineColonies Farmer's hut config (M-28) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony farmer runs the grain fields and chicken coops at scale — the settlement is the server's food wholesaler, faster and cheaper than a solo grind.
- from: farm_and_charm food output | via: M-26 food consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: meals are eaten, not stockpiled forever — continuous farm demand means the food specialist always has customers; the diet system pulls on a fresh supply every day.
- from: farm_and_charm food output | via: bare sell | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; bare "food is sold" is the ambient endpoint, not a structural weave.

OK — survival anchor is sound. New weaves add create + economy to reach ≥2 (now: survival + create + economy).

== CHUNK COMPLETE ==
