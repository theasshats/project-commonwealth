# Phase 2 candidates — chunk-18

## undergroundworlds   [anchors: survival (1)]

Power-read: The mod provides three dungeon types (Jungle Temple, Desert Pyramid, Ice Dungeon, Abyssal Ruins), each with themed loot tables, plus two mobs (Black Recluse → spider_fang; Ashan → blindness arrows) and a suite of gear items. It also has 30 custom brick/block types. The items span everyday (antidote_flask, desert_charm worn passively) through mid-tier (blade_of_the_jungle, freezing tools). No registered recipe-types — it is a loot=yes structure/dungeon mod with no processing methods of its own.

**Candidate A — spider_fang → occultism spirit_fire → spirit output (M-11)**

- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Black Recluse lurks in the underground jungle — its fang has a venom that occult spirit-fire distills into a useful essence; a player killing spiders in the dungeon gets a magic ingredient

**Candidate B — themed dungeon eyes / charms → ars_nouveau imbuement as a magic catalyst (M-10)**

- from: undergroundworlds:desert_charm | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the charm already grants blindness immunity — soaking it in a source-gem imbuement converts it into an arcane catalyst for a mid-tier Ars Nouveau recipe; the thematic reading ("condense the desert-dungeon magic") is immediate

**Candidate C — loot-seed: dungeon chests feed coin / magic reagents (M-08 / M-14)**

- from: undergroundworlds dungeon loot tables (jungle temple, pyramid, ice dungeon, abyssal ruins) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: adding Numismatics coin and a bounty-worthy drop to the underground dungeon chests means fighting through a Jungle Temple pays out in the pack's economy, not just vanilla emeralds; gives the dungeons a pull inside the scarcity→economy loop

**Candidate D — temple/pyramid bricks → create:crushing → rubble + XP nugget (M-04)**

- from: undergroundworlds:temple_bricks (and pyramid/ice variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvaging the themed dungeon stone in a Create crusher is a dead-obvious move — brick→crushed rubble + XP shard follows the same flow as any other deco stone; keeps the deco blocks from being a dead branch

**Candidate E — blade_of_the_jungle / freezing tools → boss-key or bounty (M-14 / M-15)**

- from: undergroundworlds:blade_of_the_jungle or freezing_sword | via: bountiful board / numismatics bounty | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: weapons are unique dungeon finds, not a bulk commodity; putting them on a bounty board produces perverse incentive to farm-then-sell them rather than use them; better to keep weapons as loot rewards only. The magic-input and loot-seed candidates above already give the dungeons economy touchpoints without cannibalizing the weapons.

**Candidate F — axe_of_regrowth → sapling/wood production chain (M-12)**

- from: undergroundworlds:axe_of_regrowth (auto-replants saplings on chop) | via: config tie / functional synergy with Create wood-processing chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is a tool behavior (auto-replant), not a material flow — there is nothing to route through a method. The axe makes wood farming faster but that is a QoL edge, not a recipe weave. No-motif as a recipe edge; the functional synergy is real but unactionable here.

REWORK: existing connections — currently 1-anchor (survival only).
- Candidates A (M-11), B (M-10), C (M-14), D (M-04) all accepted; this mod gains magic and create and economy touchpoints. No existing weaves to rework.

---

## libipn   [anchors: support/library (1)]

LEAVE — genuine zero-content code library. Registers 0 blocks, 0 items, no loot, no recipe-types. It is a GUI/config/logging API for IPN and its author's other mods only; nothing material to route, no method surface.

---

## accessories_compat_layer   [anchors: support (1)]

LEAVE — pure API compat shim (Curios + Trinkets → Accessories translation). Registers 0 blocks, 0 items, no loot, no recipe-types. All wearable weaving lives in the host mods (Curios/Trinkets users), not here.

---

## moblassos   [anchors: survival (1)]

Power-read: 13 items total — the lasso family (golden/aqua/diamond/emerald/hostile + filled variants) and a contract item. Recipes are vanilla crafting. No registered recipe-types. Mechanics: right-click capture → item form → release. The gameplay value is mob-transport logistics. No material flows through it.

**Candidate A — emerald_lasso → MineColonies villager resettlement (M-21 / functional synergy)**

- from: moblassos:emerald_lasso (captures villagers) | via: config tie / functional synergy — carry a villager to a MineColonies colony and assign them | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); and this is a behavioral/QoL synergy, not a material routing. The emerald_lasso + colony interaction is already implicit (players will do it naturally); forcing a recipe or KubeJS gate around it would feel arbitrary. No method to weave through. Record as reject-QoL-only.

**Candidate B — hostile_lasso → bounty system (M-14)**

- from: moblassos:hostile_lasso_filled (a captured hostile mob) | via: bountiful board bounty | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: bounty boards pay out on mob *drops* (M-14 as designed), not on captured-mob items. A lasso-filled item is not a standard drop and cannot be a bounty target in the normal sense without custom KubeJS glue that would be arbitrary. The functional "capture-and-deliver" loop is thematically appealing but has no method to cleanly route through.

**Candidate C — lasso craft requires Create-processed thread/wire (M-05 / recipe)**

- from: moblassos:golden_lasso or hostile_lasso craft inputs | via: recipe (crafting table, potentially requiring a Create-processed component) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the lassos are deliberately everyday-accessible tools (their value is convenience, not gatekeeping); adding a Create step to their recipe violates the "never gate a basic/everyday component behind a complex recipe" rule. Depth should scale with power — lassos are QoL, not power.

No coherent 2nd-anchor survives red-team for this mod. The dossier's own note ("leave — item-utility mod; no material flows through it") is correct.

LEAVE — item-utility mod; no material flows; all three candidate paths fail red-team or have no valid method to route through. The utility synergy with aeronautics (carrying livestock aboard ships) is real but unactionable as a recipe or loot-seed weave.

---

## cristellib   [anchors: support/library (1)]

LEAVE — lightweight structure-config library (worldgen plumbing). Registers 0 blocks, 0 items, no loot, no recipe-types. Its "content" is the config framework for downstream structure mods (t_and_t, expanded_ecosphere); no material surface of its own.

---

## lithostitched__tectonic-3.0   [anchors: support/curated worldgen (1)]

LEAVE — pure terrain-generation overhaul; registers 0 blocks, 0 items, no loot, no recipe-types. The worldgen effect (bigger continents, mountains, oceans) amplifies the pack's regional scarcity design by spreading biomes further apart, but this is a structural/config effect, not a recipe or loot surface. Nothing to route.

---

## endrem   [anchors: survival (1)]

Power-read: 20 items — 16 themed eyes (nether_eye, undead_eye, guardian_eye, corrupted_eye, magical_eye, black_eye, cold_eye, evil_eye, exotic_eye, rogue_eye, cursed_eye, cryptic_eye, old_eye, lost_eye + ancient_portal_frame + lost_frame), 1 block (ancient_portal_frame). loot=yes. The eyes are rare/mid to endgame (finding 12 of 16 is the End gate); the loot tables drive their acquisition. Core risk: any craft route must preserve the exploration intent — keep at most a couple of eyes craftable and make craft routes *costly*.

**Candidate A — themed eyes → occultism:ritual transmutation from matched drops (M-11)**

- from: endrem:undead_eye / endrem:nether_eye / endrem:corrupted_eye (thematic varieties) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: an occult ritual that consumes a boss-tier undead/nether drop and transmutes it into the matching eye gives a stuck player a *costly* craft escape hatch without trivializing the loot hunt — the ritual materials must be expensive enough that finding the eye in a dungeon is still faster; the thematic fit (ritual → dimensional gateway component) is immediate

**Candidate B — magical_eye → ars_nouveau enchanting_apparatus (M-10)**

- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the magical_eye is literally an arcane artifact — feeding it into the enchanting apparatus as a required input (or as a catalyst that modifies a spell-crafting step) roots the End gateway in magic progression; players who have gone deep into Ars find the connection natural

**Candidate C — create:sequenced_assembly for one crafted eye (M-06)**

- from: endrem (one designated craftable eye — e.g. exotic_eye or old_eye) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: exactly one eye (the "mechanical" one) can be assembled through a Create sequenced chain using a derpack:incomplete_* part — signaling that mastery of the Create spine is one of the 16 paths to the End; keeps the exploration gate intact (only 1 of 16 is craftable this way, and it is expensive)

**Candidate D — loot-seed: guardian_eye in Ocean Monument / undead_eye in Nether Fortress loot (M-14 / loot-seed)**

- from: endrem loot tables (guardian_eye, nether_eye, undead_eye variants) | via: loot-seed | to: economy/survival | motif: M-14 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: seeding thematically appropriate eyes into matching vanilla/modded structure loot tables (guardian_eye in monument chests, nether_eye in Nether Fortress, undead_eye in bastion/dungeon) makes biome/structure exploration feel deliberate — each run is progressing toward the End gate

**Candidate E — boss_eye (e.g. corrupted_eye) as a boss-key gate item (M-15)**

- from: endrem:corrupted_eye | via: recipe (boss drop input to a complex Create/tech recipe) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the eyes are *themselves* the gate (portal activation is the destination). Using one eye as a gate to a *separate* Create recipe would create two competing demands on the same rare item and dilute the End-progression clarity. The three accepted weaves (ritual transmute, magic catalyst, Create sequenced) already give enough system connections without double-spending the eye as both an End key and a tech gate.

REWORK: existing connections — currently 1-anchor (survival). Candidates A (M-11), B (M-10), C (M-06), D (M-14/loot-seed) accepted; mod gains magic + create + economy/loot anchors. No existing weaves to rework.

---

## naturescompass   [anchors: support/QoL (1)]

Power-read: 32 items — all are the naturescompass item in various atlas/model states (naturescompass_00..naturescompass_15 etc.); the only functional item is naturescompass:naturescompass. Vanilla recipe. No loot. No recipe-types. Pure information tool (biome locator).

**Candidate A — naturescompass craft requires Create-processed compass needle (M-05 / recipe)**

- from: naturescompass:naturescompass (vanilla craft) | via: recipe — replace one vanilla input with a Create-polished/pressed component | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the compass is a basic QoL utility (no power, no gameplay gate); gating it behind a Create step violates the "never gate a basic/everyday component behind a complex recipe" rule. Its power level (finding biomes) is real but it is not a progression item — it helps early players find a biome they need; adding a Create prerequisite hurts new players disproportionately.

**Candidate B — naturescompass finds seasonal biome for M-16 seasonal reagent (functional synergy, config)**

- from: naturescompass (biome locator) | via: config tie — the compass enables finding the Serene Seasons biome targets needed for seasonal reagents | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is a tool-use synergy, not a material flow or recipe weave. The compass helps players find seasonal biomes but does not produce or consume a material that routes through any method. No action needed — the synergy is passive and already present.

No material flows, no loot surface. The 32 "items" are model-state variants of one item.

LEAVE — QoL exploration utility; produces no materials; no loot; nothing to route through any method. The biome-finding function amplifies the pack's regional scarcity (players can hunt specific resource biomes) but this is a passive structural synergy with no recipe or loot-seed surface.

---

## mru   [anchors: support/library (1)]

LEAVE — pure shared-utility library (rendering helpers, dynamic textures, config tools) for itsmineblock11's mods. Registers 0 blocks, 0 items, no loot, no recipe-types. Nothing material to route.

---

## inventoryprofilesnext   [anchors: client-only QoL/support (1)]

Power-read: 0 blocks, 0 items, no loot, no recipe-types. Pure client-side UI behavior (sort, dump, refill, lock slots). Already noted in CLAUDE.md for its empty-slot arrow texture override.

**Candidate A — IPN locked-slot presets as a "loadout" mechanic tied to aeronautics crew roles**

- from: inventoryprofilesnext (gear-set/locked-slot functionality) | via: no method — behavioral/UI synergy | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — this is UI behavior with no material or recipe surface. A crew-role loadout is thematically appealing (each crew member locks a role-specific toolset) but there is no delivery mechanism — no recipe, no loot, no config weave — just the UI layer of IPN. No gate entry without a motif.

LEAVE — client-only QoL inventory manager; 0 items, no loot, no recipe-types; no material flows. No coherent method-routable 2nd anchor exists.

---

== CHUNK COMPLETE ==
