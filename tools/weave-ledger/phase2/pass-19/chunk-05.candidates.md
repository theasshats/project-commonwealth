# Phase 2 candidates — chunk-05

## touhou_little_maid   [anchors: survival (1)]

Power-read: altar multiblock is a ritual-style crafter consuming power-point bottles (XP-bottle analogue). The maids themselves are mid-tier to unlock (lapis+diamond+gold+redstone+iron+coal — meaningful cost). The Altar is KubeJS-extensible, making it a real weaveable method. loot=yes.

- from: altar recipe-type (touhou_little_maid:altar_recipe_serializers) | via: altar multiblock | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gate a maid-tier upgrade through a boss drop (or Occultism spirit essence) at the altar — the summoning shrine demands an otherworldly offering before granting a bound maid companion; reads as a ritual pact, not bench assembly.
- from: power-point bottles (fairy drops / village loot) | via: occultism:spirit_trade | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are the altar's own currency — routing them through Occultism spirit_trade creates a supply side-channel that would make altar costs trivially bypassable via spirit traders. Balance concern; the altar's intended currency scarcity collapses.
- from: maid automation output (harvested crops, fish, feathers) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: maid automation output is vanilla-equivalent goods — routing these to Numismatics is a *very* weak link (no unique material). Adds no new loop node; the maid is the value, not its generic yield. One-system flag stays.
- REWORK: existing survival anchor is sound — companion automation / labor is a genuine pressure-relief on the survival pillar. No rework needed.

OK — one ACCEPT (M-05 altar-as-native-method gating), two rejects with reasons.

---

## notenoughanimations   [anchors: support (client visual) (1)]

LEAVE — pure client-side animation cosmetic; 0 items, 0 blocks, 0 loot. No material surface to weave; forcing any edge is meaningless.

---

## createaddoncompatibility   [anchors: support (library/compat) (1)]

LEAVE — zero-content unification glue; 0 items/blocks, no processing methods of its own. Its indirect role (keeping the Create addon ecosystem clean) is its value. No material to route.

---

## aileron   [anchors: aeronautics (1)]

Power-read: behavior overhaul with no items/blocks under its namespace. loot=yes — enchantment loot exists. The mod's content is entirely enchantment + flight-physics behavior. 0 craftables of its own.

- from: Aileron Elytra enchantments (loot) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Aileron's enchantments may not be exposed as datapack-addable to the Enchanting Apparatus — no confirmed API surface for foreign enchants in Ars Nouveau's apparatus. Without a confirmed method hook, this is speculative; flagging for investigation rather than accepting. Mark no-motif if apparatus can't accept them. REJECT (method unconfirmed).
- LEAVE — aeronautics single anchor is the correct read for a flight-behavior mod with no item surface. The loot enchantments are insufficient to anchor a second pillar without a confirmed delivery method.

---

## bigsignwriter   [anchors: support (client UI / decoration aid) (1)]

LEAVE — UI-only client mod; 0 items, 0 blocks, 0 loot, no gameplay surface. Pure convenience; nothing to weave.

---

## tide   [anchors: survival (1)]

Power-read: 402 items, 74 biome-modifiers, loot=yes. Already wired into farmersdelight:cutting. The dossier identifies three strong 2nd-anchor candidates. Serene Seasons compat (seasonal catches) is a confirmed mechanic.

- from: rare/biome-locked fish (e.g. tide:abyss_angler, tide:alpha_fish) | via: numismatics sell trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Biome-locked and depth-zone fish are the kind of specialty good only a dedicated angler can source — a fishing specialist sells their exotic catches to players who can't reach those biomes yet; natural emergent trade.
- from: seasonal fish (Serene Seasons compat catches) | via: create:milling or farmersdelight:cooking into an intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Mill a seasonal catch into fishmeal fertilizer — a processing-chain bonus that rewards fishing in-season and feeds automated farms; only obtainable that season, so it has real scarcity value.
- from: abyssal/void fish (tide:abyss_angler) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: The void/abyss fish are thematically interesting as transmutation reagents, but Tide already has strong economy and Create anchors. Adding magic risks over-weaving a fishing mod into three pillars, diluting the specialist identity. Red-team: a player would raise an eyebrow at "throw my rare fish into a spirit bowl." Tone clash is mild but purpose clash is real — these fish are collectibles/food, not occult ingredients. REJECT to keep the mod's identity coherent.
- REWORK: existing survival anchor is sound. OK — connections sound once economy + Create are added.

---

## createfurnitureseats   [anchors: support (compat) + aeronautics (2)]

Already ≥2 anchors (support + aeronautics). No material surface.

OK — connections sound. LEAVE — no items/methods to weave further.

---

## structurize   [anchors: support (library — MineColonies build engine) (1)]

LEAVE — pure build-engine library, required MineColonies dep. No items of its own that constitute a weaveable material stream. Its weave story is MineColonies' story.

---

## smartbrainlib   [anchors: support (library/API) (1)]

LEAVE — pure code library (AI framework); 0 items, 0 blocks, 0 loot. Zero player-facing surface.

---

## puzzleslib   [anchors: support (library/API) (1)]

LEAVE — pure multi-loader code library; 0 items, 0 blocks, 0 loot. Zero player-facing surface.

---

## mushroomquest   [anchors: survival (1)]

Power-read: 352 items, 48 blocks, 32 biome-modifiers, loot=yes. Large forageable fungus pool including common, rare, and mythical mushrooms with varied effects. Genuine everyday-to-endgame range.

- from: foraged mushrooms (common/rare) | via: farmersdelight:cooking / extradelight:oven | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Run foraged mushrooms through the cooking chain into prepared dishes — the food-processing web gains a new ingredient stream that only foragers can supply, rewarding exploration outside the farm.
- from: rare/mythical mushroom caps (e.g. agarikon, deadly poisonous) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A traveling alchemist or colony herbalist pays well for rare fungi that only spawn in specific biomes — biome-locked foraging becomes a tradeable specialty, not just personal survival.
- from: deadly/mycotoxic mushrooms (effect-bearing caps) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: The transmutation of toxic fungi into a spirit reagent is thematically plausible (poisonous → occult ingredient), but mushroomquest already gets economy + Create/survival anchors from the two ACCEPTs above. Adding a magic anchor would over-web a foraging mod. Red-team: the mod's identity is cottagecore mycology, not eldritch chemistry; forcing spirit_fire on food items reads as tone-adjacent-but-strained. REJECT — two anchors is the target; stop here.

---

## detect-afk-1.2.2   [anchors: support (QoL/server-admin) (1)]

LEAVE — server-side behavioral utility; 0 items, 0 blocks, 0 loot. No material surface; AFK detection has no craft-graph hook.

---

## bettermineshafts   [anchors: survival (1)]

Power-read: 0 items, 0 blocks, loot=no (uses vanilla mineshaft loot tables). Structure overhaul only.

LEAVE — no items, no methods, no loot tables of its own. Indirectly serves the ore-scarcity foundation but offers zero recipe-graph hook. Do not force an edge.

---

## bettercombat   [anchors: support (combat framework) (1)]

LEAVE — behavior/JSON framework; 0 items, 0 blocks, 0 loot. The mod re-skins weapon feel but registers no materials to route through any method.

---

## create_integrated_farming   [anchors: Create, survival (2)]

Already ≥2 anchors. Power-read: the weak economy candidate (M-09, bulk goods → coin) was flagged as optional.

- from: steady roost/net outputs (eggs, feathers, fish, goose droppings) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: These are generic animal/fish products — the same goods any vanilla farm produces. There is no scarcity or specialization signal that makes them more coin-worthy than vanilla drops. The route is coherent but adds almost no loop depth; the mod's identity is Create automation efficiency, not trade goods. One weak link isn't worth authoring. REJECT — two anchors is the floor and the mod meets it; this edge would be a dead branch on the loop.
- REWORK: existing Create + survival anchors are sound. OK — connections sound.

---

## rechiseledcreate   [anchors: Create, support/decoration (2)]

Already ≥2 anchors. Mechanical Chisel is the Create kinetic method.

- from: rechiseled Create decorative blocks (mass output from Mechanical Chisel production) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Decorative blocks are a luxury good, but the Mechanical Chisel's output is a 1:1 variant conversion — no scarcity is introduced. Players wouldn't pay coin for chiseled andesite when andesite itself is abundant. REJECT — no new value enters the loop; it's just reshaping the same stone. M-04 (Create recycles deco) would be more coherent, but that's already the base mechanic (deco→crushing lossy), not a new weave needed here.
- REWORK: existing Create + decoration anchors are sound. OK — connections sound.

---

## occultism   [anchors: magic (1)]

Power-read: flagship magic pillar. 596 items, 164 blocks, loot=yes, 158 c:tags consumed. Eight native recipe-types including occultism:ritual, spirit_fire, crushing, miner, spirit_trade. Dossier identifies three strong 2nd-anchor candidates.

- from: occultism:spirit_trade (summoned merchant spirit) | via: numismatics payout | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A bound Djinni trader doesn't deal in gold — it prices goods in pack coin; the supernatural merchant is your only source for certain otherworld materials, bridging demon commerce to the player economy naturally.
- from: foreign mob/boss drops (routed through spirit_fire / ritual) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Toss a strange beast's drop into the spirit flame and watch it transmute — the summoning pillar gains a universal drop-sink, turning every mob kill into a potential ritual input; combat drives magic.
- from: occultism:crushing (ore doubler) | via: occultism:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's crushing spirits double ores just like Create's Crushing Wheel — a parallel ore-doubling path that means miners choose their doubling method: mechanical or eldritch; scarcity pressure eases differently for each specialist.
- from: iesnium_ore / silver_ore (occultism's native ores) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Run occultism's otherworldly ores through a Create Crushing Wheel to get double yield — two systems competing on the same ore; the more you invest in Create, the more ore you extract.
- from: occultism:miner (dimensional mineshaft spirit) | via: occultism:miner | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: Send a bound Djinni into the void to mine a scarce regional ore that nobody on the server can reach — magic as a logistics provider that bypasses the aeronautics supply run, making the magic specialist the server's "remote ore trader."
- REWORK: existing single magic anchor is thin for a flagship pillar mod. The above ACCEPTs bring it to magic + economy + Create (3). No existing connections are mis-stated; this is a gap-fill pass.

---

## born_in_chaos_v1   [anchors: survival (1)]

Power-read: 355 items, 111 blocks, 50 biome-modifiers, loot=yes. Dark Metal is the key material (drop from specific hostile mobs, ~7–16% drop rates). Pumpkinhead boss is seasonal (Oct 25–Nov 5 or summon). Boss drops (Pumpkin Staff, Soul Saber) are endgame-tier.

- from: dark_metal_deposit (ore block) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Feed dark metal ore into the Crushing Wheel to double yield — the same Create spine that processes iron handles cursed ore; scarcity of dark metal becomes a Create-powered incentive.
- from: bundle_of_bones / dark metal drops | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Post a bounty for Born in Chaos undead — the kill board pays coin for bones and dark metal shards, converting the pack's most hostile mobs into a farming income stream that requires real combat.
- from: bundle_of_bones / soul-cursed drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Bundle of bones meets the spirit flame — skeletal cursed matter transmutes into a necromantic spirit intermediate; the horror-mob's loot feeds the summoning pillar in a tone-coherent way (chaos → occult reagent).
- from: Pumpkinhead boss signature drop (Pumpkin Staff / Soul Saber) | via: recipe gating | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 boss-key requires the drop to gate a complex Create/tech recipe. The Pumpkin Staff and Soul Saber are already finished weapons — making them recipe *inputs* would destroy them rather than use them as rare components, which is a tone clash (players expect to *use* a boss weapon, not smelt it). REJECT unless a different boss drop (a unique soul fragment, not the signature weapon) can serve as the gate item.
- REWORK: existing survival single anchor is the gap — this mod has strong potential for Create + economy + magic. The above ACCEPTs bring it to survival + Create + economy + magic (4 pillars). No existing authored connections to rework; this is a gap-fill pass.

---

## modelfix   [anchors: support — performance/bugfix (1)]

LEAVE — pure client-side rendering patch; 0 items, 0 blocks, 0 loot. Zero player-facing content surface.

---

## lithostitched__tectonic-3.0   [anchors: support (curated worldgen flavor) (1)]

LEAVE — pure worldgen/terrain-shaping datapack via lithostitched engine; 0 items, 0 blocks, 0 loot. No recipe-graph surface whatsoever. Thematic adjacency to scarcity (bigger terrain spreads resources) is real but has no deliverable hook.

---

== CHUNK COMPLETE ==
