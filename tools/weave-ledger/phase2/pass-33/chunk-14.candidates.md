# Phase 2 candidates — chunk-14

## create_enchantment_industry   [anchors: create (1)]

**Power-read:** Liquid XP is a mid-tier utility (requires a mob farm and pipes — not trivial, not endgame). Blaze Enchanter is mid; hyper-enchanting is endgame.

- from: `create_enchantment_industry:experience_bucket` (liquid XP) | via: `ars_nouveau:enchanting_apparatus` | to: magic | motif: M-05 | power: mid | tone: ok — enchanting is arcane-industrial; piping XP into an arcane apparatus is the natural bridge | verdict: ACCEPT | hook: your Create mob-farm fills the tank; the magic specialist draws from it to power enchanting rituals — nobody solo-covers both
- from: `create_enchantment_industry:experience_bucket` (liquid XP) | via: `occultism:ritual` | to: magic | motif: M-29 | power: mid | tone: ok — Occultism rituals can require XP as a consumable cost | verdict: ACCEPT | hook: the ritual drains liquid XP from a Create-piped tank; a Create player supplies the fuel, an Occultism specialist runs the ritual
- from: `create_enchantment_industry:experience_cake` | via: `farmersdelight:cooking` (food serving) | to: survival | motif: M-12 | power: everyday | tone: clash — an "experience cake" as a food item is whimsical but the cake-base recipe already uses farmersdelight:cutting; a cooking-method extension is mild/fun rather than deeply coherent | verdict: REJECT | reason: experience_cake is already an output item, not a food-processing feedstock; the pairing is cosmetic rather than a real loop connection
- from: `create_enchantment_industry:blaze_enchanter` (liquid-XP consumption) | via: `create_enchantment_industry:grinding` (Mechanical Grindstone) | to: Create | motif: M-26 | power: mid | tone: ok — liquid XP is *spent* in the enchanting process, so demand on the mob-farm / XP-collection system never zeroes; the consumption sink closes the loop | verdict: ACCEPT | hook: the bigger the enchanting operation, the faster XP depletes — makes the mob-farm productive throughput matter economically
- REWORK: current dossier 2nd-anchor candidate M-10 (feed liquid XP into Forbidden Arcanus/Ars arcane infusion) — M-10 warns "do not gate basic components"; liquid XP as a basic reagent fed into infusion is closer to a free shortcut than a real weave. Prefer the M-05/M-29 routings above (liquid XP as an explicit cost the magic specialist pays, not a generic input). Flag for re-evaluation if Forbidden Arcanus gate is endgame-tier only.

---

## formations   [anchors: survival (1)]

- LEAVE — pure scatter-structure worldgen with no registered blocks and no loot tables (loot=no confirmed). No method surface and no items to route. Cosmetic world-feel only; forcing an economy/recipe edge would be incoherent.

---

## vc_gliders   [anchors: aeronautics (1)]

**Power-read:** iron glider = early (early-game flight); netherite = mid/late. Copper/nether upgrades = mid. These are reachable before Aeronautics airships.

- from: `vc_gliders:paraglider_iron` (and higher tiers) | via: `create:pressing` (reinforced-paper feedstock → sheets) + `create:mechanical_crafting` (frame assembly) | to: Create | motif: M-05 | power: everyday/mid | tone: ok — flight gear built through Create metal-processing is the natural progression gate | verdict: ACCEPT | hook: want a glider? the Create spinner presses the reinforced frame; early flight requires early Create investment
- from: `vc_gliders:paraglider_diamond` / `_netherite` | via: `create:sequenced_assembly` | to: Create | motif: M-06 | power: endgame | tone: ok — top-tier glider as a multi-stage sequenced assembly (layered composite frame) | verdict: REJECT | reason: over-engineering; the diamond/netherite tiers are mid-tier flight tools, not flagship endgame items — M-06 depth should be reserved for true endgame keystones. M-05 via mechanical_crafting is the right tier.
- from: `vc_gliders:nether_upgrade` | via: `create:haunting` | to: Create/magic | motif: M-19 | power: mid | tone: ok — a "nether upgrade" to a glider thematically benefits from soul-fire haunting (nether essence infusion via Create's haunting conveyor) | verdict: ACCEPT | hook: run the copper frame through the soul-fire channel to get the nether-treated upgrade — Create's haunting step is the gate
- REWORK: dossier 2nd candidate "M-12 milling reinforced-paper feedstock" — WEAK as filed; milling paper→pulp is a stretch (paper doesn't mill in vanilla Create). Drop or replace with the pressing candidate above.

---

## aileron   [anchors: aeronautics (1)]

**Power-read:** behavior-only mod (0 items, loot=yes). Its Elytra enchantments are injected via loot tables — that's the only material hook.

- from: aileron Elytra enchantments (loot-injected) | via: `ars_nouveau:enchanting_apparatus` | to: magic | motif: M-10 | power: mid | tone: ok — if Aileron's Elytra enchantments are datapack-exposed as enchantment objects, an Ars enchanting_apparatus can apply them; this gates flight upgrades on the magic spine | verdict: ACCEPT (conditional) | hook: the magic specialist can apply Aileron's advanced flight enchants that no anvil offers — a real flight-specialist service (M-33 applies too: enchant-for-hire)
- from: aileron loot tables | via: loot-seed | to: survival/economy | motif: M-34 | power: mid | tone: ok — seed Aileron's loot tables with a rare flight-schematic or flight-enchant book that feeds demand for Elytra hunters | verdict: ACCEPT | hook: the loot-seed makes Elytra hunting (not just Elytra use) a combat-supply route — bosses/structures drop the upgrade books, combat specialists trade them
- from: aileron (behavior only — no item surface beyond loot) | via: forced recipe | to: Create | verdict: REJECT | reason: no items registered; a recipe edge has nothing to hang on

---

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

- LEAVE — pure drop-merge behavior mod; no items, no loot, no methods. Genuine zero-surface utility. No coherent weave candidate.

---

## sky_whale_ship   [anchors: survival (1)]

**Power-read:** loot=no in jar but dossier says structures with loot chests. The jar's loot=no likely means no separate loot-table files registered under the namespace — they may use vanilla loot structures or the dossier's "loot implied" note signals a gap. Either way, the delivery here is loot-seed via datapack.

- from: sky whale structures (onboard loot chests) | via: loot-seed | to: aeronautics | motif: M-15 (loosely — boss/structure drop as a progression key) | power: mid | tone: ok — sky whales are natural aeronautics destinations: you fly up to them; seed their chests with an Aeronautics-progression component (e.g. a rare propulsion blueprint or structural alloy) to reward ship-builders reaching them | verdict: ACCEPT | hook: your airship is the only realistic way to reach a sky whale — its loot is the reward for building one
- from: sky whale structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — seed sky-whale chests with a rare arcane reagent (cloud/sky-themed, e.g. source-gem fragment or a unique essence), tying exploration reward to the magic spine | verdict: ACCEPT | hook: the rarest arcane materials drift at altitude — the magic specialist commissions an airship to retrieve them
- from: sky whale structures | via: loot-seed | to: economy (M-34 combat-supply) | motif: M-34 | power: mid | tone: ok — hostile-carrying whales are a combat supply route; seed loot with tradable rares so combat players farm/trade whale-goods | verdict: ACCEPT | hook: some whales carry hostiles — clearing them is a dangerous run; the loot is the combat specialist's trade stock
- dossier REWORK note: existing candidate "economy via Numismatics — M-09 [WEAK]" — M-09 is RETIRED. The correct framing is M-34 (combat-supply; loot from a dangerous destination = trade stock for combat specialists → economy). Already filed above.

---

## inventoryprofilesnext   [anchors: client-only QoL/support (1)]

- LEAVE — pure client UI behavior mod; no items, no loot, no methods. Zero weave surface. Sanctioned support role.

---

## sound_physics_remastered   [anchors: support/client (1)]

- LEAVE — client audio rendering only; no items, no methods, no loot. Zero weave surface.

---

## jeresources   [anchors: client-only UI/support (1)]

- LEAVE — display-only JEI addon; no items, no methods, no loot. Zero weave surface. (Its value is transparency of the scarcity layer, not a weave node.)

---

## txnilib   [anchors: support/library (1)]

- LEAVE — pure developer code library; no items, no blocks, no methods. Genuine zero-surface library.

---

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

**Power-read:** cosmetic dye variants of levitite and tires — everyday (crafting-table dye step). The whole mod is a palette extension.

- from: `aeronautics_dyeable_components:*_levitite` | via: `create:mixing` (dye + levitite → colored variant) | to: Create | motif: M-04 (loosely — Create processes a deco material back into a more refined form) | power: everyday | tone: ok — routing the dye step through Create's mixer is coherent for an industrial dye-line | verdict: REJECT | reason: the dossier notes dyed levitite is made by holding a dye in offhand — it's an intentional vanilla-style mechanic, not a crafting-table recipe; routing it through create:mixing changes the designed UX without real loop benefit. The mod is decorative; forcing Create gating is gilding.
- LEAVE — cosmetic aeronautics palette extension; the dye mechanic is designed vanilla-style. No loop-meaningful weave candidate. Sanctioned decoration-palette / support role.

---

## betteroceanmonuments   [anchors: survival (1)]

**Power-read:** structure overhaul, loot=yes — the added chest loot is the only hook.

- from: Better Ocean Monuments loot chests | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok — seed monument chests with a water/ocean-themed Create or aeronautics component (e.g. a submarine blueprint part, a pressurized-hull component) as a boss-key unlock for aquatic engineering | verdict: ACCEPT | hook: the expanded monument is the ocean's dungeon — clearing it is how you unlock deep-sea engineering components
- from: Better Ocean Monuments loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — seed with a water-arcane reagent (ocean-sourced prismarine-fused reagent) for magic crafting; aquatic magic is coherent | verdict: ACCEPT | hook: the monument's guardians hoard arcane tidal reagents used in water-magic rituals
- from: Better Ocean Monuments loot chests | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — the cleared monument is a combat-specialist run; seed tradable valuables so the aquatic fighter has trade goods | verdict: ACCEPT | hook: ocean monuments are guarded by Elders — clearing one is hazardous; the loot rewards the fighter with goods to trade
- REWORK: dossier "none — leave" is too conservative given loot=yes and a clear loot-seed path. Three viable loot-seed ACCEPT candidates above earn this a 2nd anchor.

---

## netmusic   [anchors: support/QoL (1)]

- LEAVE — cosmetic audio/jukebox mod; no material inputs, no process outputs. Already touches TLM altar as a cosmetic craft. No loop-meaningful weave; forcing a Create/economy edge would be contrived (confirmed by dossier).

---

## fluid   [anchors: Create, aeronautics (2)]

Already at 2 anchors.

- OK — connections sound. The mod's parts are made through Create (compacting/deploying/mechanical_crafting/mixing) and its centrifugal pump/smart interfaces serve the logistics/aeronautics arm. No forced 3rd anchor needed; decoration neons are flavor bonus.

---

## modulargolems   [anchors: Create (1)]

**Power-read:** basic golem = mid (requires metal casting + Create assembly); dragonsteel/cursium bodies = endgame (boss-metal gated).

- from: `modulargolems:golem_assemble` (dragonsteel / cursium body parts) | via: `modulargolems:golem_assemble` | to: survival | motif: M-15 | power: endgame | tone: ok — boss-tier metals (Ice&Fire dragonsteel, Cataclysm cursium) gate the strongest golem bodies; this is the combat-route production path | verdict: ACCEPT | hook: the best golems need metals only boss-fighters obtain — the fighter trades dragonsteel to a golem-smith who can't fight
- from: `modulargolems:golem_assemble` (any tier) | via: `occultism:spirit_fire` or `ars_nouveau:imbuement` | to: magic | motif: M-29 | power: mid | tone: ok — a golem core requires a magic-side reagent (source gem or spirit solution) as one assembly input, cross-route dependency | verdict: ACCEPT | hook: a golem isn't just metal — its animation core requires a spark from the magic specialist; neither route can build golems alone
- from: `modulargolems:golem_assemble` | via: `create:sequenced_assembly` (golem parts as sequenced assembly products) | to: Create (depth) | motif: M-06 | power: mid/endgame | tone: ok — the golem-part stack is already deep; escalating to sequenced_assembly for the highest-tier bodies adds GregTech-style steps without inflating cost | verdict: ACCEPT | hook: mass-producing elite golem parts takes more than a workbench — sequenced assembly lines the fabrication steps
- from: bosses → `modulargolems:golem_assemble` (combat-route supply) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok — a combat specialist farms boss metals, sells them to a golem-smith; the golem-smith is the production node that converts the raw drop into utility | verdict: ACCEPT | hook: the fighter brings the dragonsteel; the engineer brings the Create know-how; neither has a finished golem without the other
- REWORK: dossier 2nd-anchor candidate "magic via golem_assemble — route Ars/Occultism material" is marked WEAK but is genuinely strong as M-29 (cross-route dependency). Reclassify to ACCEPT above.

---

## rechiseledcreate   [anchors: Create, support/decoration (2)]

Already at 2 anchors.

- OK — connections sound. The Mechanical Chisel is a genuine Create kinetic method extending Rechiseled onto the Create spine; the mod IS the bridge between the chiseling-deco palette and Create power. No forced 3rd anchor needed.

---

## immersivearmorhud   [anchors: client-only UI/support (1)]

- LEAVE — pure client HUD display mod; no items, no methods, no loot. Zero weave surface.

---

## mushroomquest   [anchors: survival (1)]

**Power-read:** common mushrooms = everyday foraging; rare/mythical caps = mid (biome-specific, low drop rate); miso_soup_block = cosmetic food output.

- from: `mushroomquest:*` edible mushrooms (common tier) | via: `farmersdelight:cooking` / `extradelight:oven` | to: Create/survival | motif: M-12 | power: everyday | tone: ok — mushrooms processed into soups, stews, or duxelles via Farmer's Delight is the natural cooking-chain pull | verdict: ACCEPT | hook: the forager supplies raw mushrooms; the cook runs them through the cooking pot into nutritious dishes that satisfy the diet system
- from: `mushroomquest:*` rare/mythical caps (e.g. agarikon, angels_wing) | via: `occultism:spirit_fire` | to: magic | motif: M-11 | power: mid | tone: ok — transmuting rare fungal caps into spirit essences is coherent (mycology is liminal/arcane in many traditions; deadly mushrooms as spirit reagents is thematically tight) | verdict: ACCEPT | hook: the mythical cap is rare enough that the magic specialist pays a forager to find them; transmuting it is the ritual step only Occultism provides
- from: `mushroomquest:*` glowshroom / effect mushrooms | via: `ars_nouveau:imbuement` | to: magic | motif: M-10 | power: mid | tone: ok — glowing/effect mushrooms as an arcane infusion input (a luminescent catalyst) | verdict: REJECT | reason: this duplicates M-11 above with a weaker story — spirit_fire transmutation is more coherent for dangerous/rare caps; glowshroom as imbuement input has no clear mechanical distinction from just using source gems. One magic weave is sufficient; two separate magic paths for mushrooms are redundant without clear tiers.
- from: `mushroomquest:*` rare foraging output | via: emergent trade | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: "foraged goods are sellable" is the ambient endpoint (M-09 retired territory), not a genuine demand-gate. The diet system creates real consumption pressure (M-26) but that's ambient food demand, not a specific weave to author. REJECT as a bare sell link.
- REWORK: dossier candidate "economy via Numismatics — M-09 [MED]" is RETIRED motif territory. Already rejected above. The diet-system consumption pressure is real but ambient (no Phase-3 action needed beyond including mushrooms in the food pool).

---

## moonlight   [anchors: support/library (1)]

- LEAVE — pure developer library/API (MehVahdJukaar's mods). Registers no player-facing content. Zero weave surface.

---

## kiwi   [anchors: support/library (1)]

- LEAVE — pure developer library (Snownee's mods). Registers no player-facing content. Zero weave surface.

---

== CHUNK COMPLETE ==
