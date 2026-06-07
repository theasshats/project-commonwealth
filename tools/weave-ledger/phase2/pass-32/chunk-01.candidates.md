# Phase 2 candidates — chunk-01

## createfurnitureseats   [anchors: support + aeronautics (2)]
- LEAVE — pure behavior compat bridge (no items, no recipes, no loot); its aeronautics anchor is already satisfied by its core function (furniture seats on Sable sub-levels). No material to route; any forced edge would be invented content.

---

## moreoverlays   [anchors: support/client (1)]
- LEAVE — client-only HUD overlay (spawn-danger markers, chunk grid, JEI search highlight); 0 items, 0 loot, no recipe surface. Genuine zero-content library; LEAVE is correct.

---

## create_new_age   [anchors: Create (1)]

**Existing connections review:** 1 anchor only — needs a second.

- from: `create_new_age:energising` method (FE + rotation → charged output) | via: `create_new_age:energising` | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: A magic focus or arcane circuit (Ars Nouveau or Iron's Spellbooks component) that needs an electric charge to unlock its full power — the electricity tier makes the magic item cost real infrastructure, not just crafting ingredients.

- from: `create_new_age:thorium_ore` (regional biome-modifier ore) | via: `create_new_age:energising` → `numismatics` mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Thorium is region-locked (2 biome-modifiers); processing it through the energiser and pressing it into high-denomination coin makes the nuclear tier a specialization that controls the premium settlement medium — nobody self-sufficient.

- from: `create_new_age:corium` (reactor waste byproduct) | via: `occultism:spirit_fire` | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Irradiated corium transmuted through spirit fire yields a volatile spirit-essence — waste becomes a rare occult reagent, closing the reactor loop with a dark-magic throughput sink.

- from: `create_new_age:energising` (electric crafting method) | via: `create_new_age:energising` | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: High-tier Aeronautics control surfaces or electric engines require energised components (a circuit board energised by a coil+magnet system), threading New Age electricity into the aeronautics drivetrain.

- from: bare "energised items are sellable" | via: player sell | to: economy | motif: none | verdict: REJECT | reason: bare sell link — ambient endpoint of the loop, not a weave. Rejected per M-09 retirement / player-run-economy ruling.

REWORK: The dossier's 2nd-anchor candidate notes "economy via numismatics — energised outputs as sellables [M-08, WEAK]" — this is exactly the retired M-09 framing. The M-08 link above (Thorium → mint) is the correct restatement; the "sellable" phrasing in the dossier should be flagged for correction.

---

## immersive_armors   [anchors: survival (1)]

**Existing connections review:** 1 anchor only — needs a second.

- from: `immersive_armors:heavy_chestplate` / Steampunk set | via: `create:mechanical_crafting` (pressed steel plates as inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Heavy and Steampunk armor sets require Create-pressed steel/iron plates in their recipe; the Steampunk set's aesthetic demands a fabricated metal finish — it belongs in the machine shop, not the crafting table.

- from: `immersive_armors:divine_chestplate` / Robe set | via: `ars_nouveau:enchanting_apparatus` | to: magic | motif: M-10 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: The Divine set's "block one attack per minute" passive is inherently arcane; finishing the chestplate through an enchanting apparatus with source gems threads it into the magic web and signals to players that Divine gear is crafted by magic specialists.

- from: `immersive_armors:bone_chestplate` (Bone set, early-tier) | via: `create:mechanical_crafting` | to: Create | motif: M-05 | power: everyday | verdict: REJECT | reason: depth-scaling rule — the Bone set is a low-tier early set using vanilla bone; gating it behind mechanical crafting violates the "never gate a basic component behind a complex recipe" guardrail. The high-tier sets (Heavy/Steampunk) are the right target.

- from: full sets as combat-supply goods | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: An armorer specialist who manufactures the Create-gated Heavy sets trades them to players who can't reach that fabrication depth — the survival pressure (fighting in early iron) drives demand for better gear from the production specialist.

REWORK: Dossier notes "economy via numismatics — finished themed sets as sellable smith goods [M-09, WEAK]" — M-09 is retired; the demand-side framing (M-34 combat-route supply) above is the correct replacement.

---

## rechiseled   [anchors: support/decoration (1)]

**Existing connections review:** 1 anchor. Dossier notes rechiseledcreate companion gives M-04 link.

- from: `rechiseled` chiseled decorative variants | via: `rechiseledcreate` mechanical chisel (Create power) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running the chisel on rotational power brings the entire 600+ variant decorative palette inside the Create production loop — a player building a ship interior or station can automate decorative tile production. (rechiseledcreate is the companion already in pack; this confirms the link.)

- from: `rechiseled` blocks as a colony building material (architectural variety) | via: `minecolonies` colony build requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: MineColonies can request specific block types for decoration/building schematics; rechiseled variants fulfil those orders, giving the chisel an indirect colony-supply route and winding it into the economy's colony arm.

- from: rechiseled variants as a "luxury deco surface" | via: player sell | to: economy | motif: none | verdict: REJECT | reason: bare sell link; ambient loop endpoint, not demand-gating. Rejected per M-09 retirement.

---

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — client HUD only (renders equipped-armor durability indicators); 0 items, 0 loot, no processing surface. Genuine zero-content mod; LEAVE is correct.

---

## create_better_villagers   [anchors: Create + economy (2)]

**Existing connections review:** Already 2 anchors (Create + economy). OK structurally; one refinement noted.

- from: emerald-denominated villager trades → pack currency | via: KubeJS trade re-denomination to Numismatics coins | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Re-denominating the Andesite/Brass/Copper Worker trades from emeralds to player-minted Numismatics coins folds this mod's trading into the pack's actual settlement medium — now buying Create parts from a villager is an act inside the player economy, not a vanilla emerald sink.

- from: Miner villager buying raw andesite/copper/brass | via: colony route integration | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A MineColonies miner output feeding the Miner villager's buy-list creates a cross-route where the colony production arm and the player economy trade arm share a raw-material throughput, neither self-sufficient.

REWORK: None needed on existing anchors — they are sound. The two candidates above deepen the existing economy anchor rather than forcing a new one.
OK — connections sound (Create + economy anchors are genuine; refinements possible above).

---

## mushroomquest   [anchors: survival (1)]

**Existing connections review:** 1 anchor only — needs a second.

- from: edible/effect-bearing mushroom caps (bay bolete, agarikon, etc.) | via: `farmersdelight:cooking` or `extradelight:melting_pot` | to: Create (food-processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running foraged mushrooms through Farmer's Delight's cooking pot produces buffed soups and stews — the fungi become inputs to the cooking-processing chain, folding the foraging loop into the food-production spine. A "Mushroom Miso" or "Fungal Broth" intermediate also feeds other recipes (reagent solvent).

- from: rare/mythical mushroom caps (effect-bearing) | via: `occultism:spirit_fire` | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A mythical mushroom with a deadly effect (e.g. destroying angel) transmuted in spirit fire yields a volatile occult reagent — the mycological danger becomes a magic resource, and only combat-foragers can supply it reliably.

- from: seasonal biome foraging (32 biome-modifiers, biome-appropriate yield) | via: Serene Seasons seasonal gate on foraging block spawns | to: survival/Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Certain mushrooms only appear in the right season (e.g. autumn skullcap in autumn, winter chanterelles in winter) — tying the pack's seasonal pressure lever to the foraging layer means the food-processing chain has a seasonal ingredient cadence.

- from: rare mushrooms as luxury trade goods (economy sell) | via: player sale | to: economy | motif: none | verdict: REJECT | reason: bare sell link — M-09 retired. The M-34 demand angle (combat-forager supplies non-foragers) is ambient trade, not a gated weave, and no specific demand gate exists here.

- from: glowshrooms (light-emitting) | via: `ars_nouveau:imbuement` as a light-catalyst ingredient | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: Glowshrooms carry bioluminescent energy; imbuing with a glowshroom as a secondary ingredient catalyzes a Lux or Illuminate glyph, making the forager a minor supplier to the magic web for one specific reagent.

---

## curios   [anchors: support/library (1)]
- LEAVE — pure equipment-slot API; 0 items, 0 loot, no recipe surface. It underpins the magic pillar's accessory items but has no material of its own to route. Genuine zero-surface support library.

---

## knightlib   [anchors: support/library (1)]
- LEAVE — API/codebase library; its bundled items (grail, chalice, essences, homunculus) are dormant without Knight Quest (not in pack). Weaving dead-item placeholders is explicitly forbidden by briefing ("do not weave dead items"). If Knight Quest is ever added, `knightlib:great_essence` is the natural M-02 mob-drop reagent target — log as a conditional note, not a candidate.

---

## bookshelf   [anchors: support/library (1)]
- LEAVE — zero-content modder utility library (codecs, registration, event scaffolding); no items, no loot, no recipe surface. Genuine zero-surface library.

---

## kobolds   [anchors: economy + survival (2)]

**Existing connections review:** Already 2 anchors (economy + survival). Structurally sound.

- from: `kobolds:kobold_skull` (mob drop from slain kobolds) | via: `occultism:spirit_fire` | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A kobold skull — relic of a slain underground warrior — transmuted through spirit fire yields an earth-spirit essence. The subterranean lizard-folk having occult power is tonally consistent with their dungeon-dwelling nature; it routes the drop into the magic web and creates a demand for kobold hunting beyond just their loot.

- from: `kobolds:kobold_skull` | via: `ars_nouveau:imbuement` | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: ars imbuement on a skull is dark/necromantic — it conflicts tonally with Ars Nouveau's whimsical/nature style; Occultism spirit fire (above) is the right sink for skull-based reagents. Avoid duplicating both motifs for the same drop.

- from: kobold Prospector enchantment (sold by Enchanter kobold) | via: emergent trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: The Prospector enchantment (ore-finding) is a service-for-hire surface — a mining specialist who knows kobold Enchanters' location provides a scouting service to the group; the enchantment improves regional ore finds, directly feeding the scarcity foundation. This is labor/service, not a vendor sale.

OK — connections sound (economy + survival anchors are genuine; new magic link above deepens without forcing).

---

## chefsdelight   [anchors: survival + economy (2)]

**Existing connections review:** Already 2 anchors (survival + economy via villager trades). Structurally sound.

- from: Cook/Chef villager trades (emerald-denominated FD meals) | via: KubeJS trade re-denomination | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: Shifting Cook/Chef trades from emeralds to player-minted Numismatics coins folds the village food economy into the pack's player-run settlement medium — players buying a Roast Chicken from a Chef spend the coin they minted, not vanilla emeralds, closing the loop.

- from: Chef trades providing high-nutrition feasts | via: emergent demand pressure | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Feasts (Roast Chicken, Honey Glazed Ham) are consumed against hunger pressure — the Cook/Chef becomes a recurring consumption sink inside the village economy, meaning demand for these meals never zeroes out while players are in the field.

REWORK: Dossier notes "route trades onto numismatics coins [M-09, luxury-good→coin]" — M-09 is retired; the M-08 re-denomination framing above is the correct replacement.
OK — connections sound structurally; the M-09 reference in the dossier needs correction.

---

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — pure client rendering patch (baked-model/block-entity render fixes); 0 items, 0 loot, no recipe surface. Genuine zero-content support mod.

---

## foodeffecttooltips   [anchors: support/client (1)]
- LEAVE — tooltip UI only (renders food status effects in item tooltips); 0 items, 0 loot, no recipe surface. Genuine zero-content client mod.

---

## ding   [anchors: support/client (1)]
- LEAVE — client-only audio cue (notification sound on menu/world load); 0 items, 0 loot, no recipe surface. Genuine zero-content client mod.

---

## edf-remastered-5.0-beta4   [anchors: survival (1)]

**Existing connections review:** 1 anchor. Dossier already notes LEAVE and confirms no items/drops added.

- from: harder Ender Dragon (500 HP, multi-phase) | via: loot-seed into dragon's drop table | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The harder dragon fight (phases, minions, enraged mode) earns a commensurate reward — seeding a high-tier trade-good or boss-key material into the dragon's loot table turns the combat challenge into a supply event: the End specialist who can clear this fight brings back goods that non-End players can't obtain, feeding the combat-supply economy chain. (via: loot-seed — a Phase-3 datapack edit to the dragon's loot_table.)

- from: dragon as endgame gate (M-15) | via: boss drop as tech unlock | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The boosted dragon is the natural gate for a high-tier Create keystone (e.g. a sequenced-assembly component, or the aeronautics advanced-hull recipe needing a dragon-scale drop) — making the dragon fight the unlock condition for the pack's hardest fabrication tier. (Also via loot-seed.)

- from: difficulty spike "just for challenge" with no material reward | verdict: REJECT | reason: a harder boss with no loot return is M-15/M-34 potential left on the table; the ACCEPT rows above address this. Without at least one of those, the mod is a 1-anchor difficulty mod with no loop contribution — propose loot-seed before LEAVE.

---

## xaerominimap   [anchors: support/client (1)]
- LEAVE — client navigation HUD (minimap, waypoints, entity radar); 0 items, 0 loot, no recipe surface. Genuine zero-content client mod.

---

## trashslot   [anchors: support/client (1)]
- LEAVE — inventory trash slot UI; 0 items, 0 loot, no recipe surface. Genuine zero-content client mod.

---

## gravestone   [anchors: survival (1)]

**Existing connections review:** 1 anchor. Dossier already LEAVE-rated with no material.

- from: `gravestone:obituary` item (death log — records dimension, coords, gear snapshot) | via: `supplementaries:item_lore` or KubeJS lore-tag | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: An obituary is a navigational artifact — a "salvage contract." A player with a grave deep in a dangerous dungeon might trade its obituary (containing coordinates) to a combat specialist who recovers the gear for a fee. This is a labor/service transaction (M-33): knowledge of a grave location is a service asset, not a sellable item in the direct sense. Light touch — no recipe needed, just social/emergent use of the existing obituary item.

- from: `gravestone:gravestone` block (silk-touch-droppable grave marker) | via: `create:crushing` | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a grave marker into stone/XP is tonally wrong — the grave is a memorial object, not a recycle input; players would find it jarring. The somber-functional vibe of the mod does not lend itself to industrial recycling.

== CHUNK COMPLETE ==
