# Phase 2 candidates — chunk-11

## sereneseasons   [anchors: survival (1)]

Serene Seasons is the pack's seasonal clock — its `season_sensor` emits a redstone signal each season, and its crop-fertility system gates what grows when. One anchor (survival/pressure). The dossier flags two candidates; I'll power-read both and run the method-pull independently.

**Method-pull:** `season_sensor` → redstone → Create logic gates → automated contraption behavior. That's M-16 (seasonal reagent / seasonal-gated input) expressed as a control signal rather than a physical material. Does a redstone pulse count as a "material"? The motif says "a material obtainable only in a given Serene Season feeds a machine/ritual" — a seasonal redstone signal feeding a Create contraption sequencer is a close fit (the season is the gate, Create automation is the consumer). Power: everyday (sensor is placed once and runs perpetually, not a consumable). Theme: totally natural — Create automation adapting to the seasons is the most "of course" player nod imaginable. Depth: one wiring step, appropriate for an ambient infrastructure mod.

**Seasonal scarcity → economy sell:** that is the naked "any out-of-season crop is sellable" claim the de-emphasis guard is specifically about. Generic-sellable, non-distinctive.

**REWORK check:** existing connection (survival) is sound — it is the survival driver; no arbitrary edges.

- from: sereneseasons:season_sensor redstone output | via: create contraption/sequencer wiring (config tie) | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: automated farms switch crops and open/close greenhouse hatches when the season_sensor ticks — Create reads the world's calendar
- from: seasonal out-of-season produce | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; every scarce crop is trivially sellable, no structural loop closure

OK — survival connection sound.

---

## bcc   [anchors: support/QoL (1)]

Zero items, zero blocks, zero recipe types. Pure version-handshake utility. No content surface.

- LEAVE — genuine zero-content support utility (version handshake only); nothing to route or weave.

---

## copperagebackport   [anchors: survival (1)]

Backport of vanilla copper content — tools, armor, deco blocks, Copper Golem. 81 items, 70 blocks, copper-tagged materials. One anchor (survival / vanilla-plus).

**Method-pull:** `create:crushing` wants metal deco blocks — copper bars, copper chain, copper chest variants, copper lanterns all crush back to copper nuggets/raw + XP nugget; this is M-04 (Create recycles deco), the standard deco-recycling motif. Power: everyday (copper deco is placed throughout builds; crushing-recycle is a light one-step process). Theme: completely natural — Create players already crush copper ore; recycling copper deco is the same logic. Red-team: does adding crush recipes for ~70 blocks of copper deco feel forced? No — the entire vanilla copper set (ore, ingots) already goes through Create; adding the derivative blocks is consistent and expected.

**Copper Golem as logistics:** the dossier flags this as WEAK and it is — the Golem does chest-to-chest item transfer, which is trivially superseded by Create funnels. Forcing an aeronautics or economy link through a statue that sorts items between adjacent chests is contrived.

**REWORK check:** survival anchor is sound (vanilla-plus content fits survival/build). No existing cross-system edges to rework.

- from: copperagebackport copper deco/tools (copper_bars, copper_chain, copper_chest, copper_lantern, copper armor/tools) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: oxidized copper deco that outlived its build purpose goes back into the copper economy through a Crushing Wheel
- from: Copper Golem (item logistics mob) | via: thematic aeronautics/logistics tie | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif — the Golem's adjacent-chest sorting is trivially superseded by Create funnels; a logistics weave would be contrived and has no fitting motif

---

## revelationary   [anchors: support (1)]

Zero items, zero blocks, zero recipe types. Pure advancement-gated block-reveal library. No content surface of its own.

- LEAVE — genuine zero-content library/API (advancement-gating mechanic); nothing to route. Its value to the pack is as infrastructure for M-05 (native-method gating) in dependent mods, not as a standalone weave target.

---

## create_train_parts   [anchors: aeronautics (1)]

16 deco/fitting blocks for Create trains — sliding windows, steps, slides, crossings. No recipe types. Consumes vanilla/Create mats, outputs nothing processable.

**Method-pull:** the dossier's own candidate is that brass/copper window/step variants already require Create pressed sheets; making that explicit is M-04-adjacent — but it's a recipe *tightening*, not a new cross-system anchor. Power: everyday. Does it add a second system? The fitting blocks are decoration for a create/aeronautics build; routing them through `create:pressing` (sheets → window frames) adds Create as a craft step but Create is already implicitly required (they're train fittings). This *would* bump the mod to 2 anchors (aeronautics + Create) if the Create recipe is explicit.

**Red-team:** train fitting blocks are inherently Create content (literally for Create trains). Making their craft route explicit through Create sheets is sensible, not forced. A player building a train interior would nod at "of course the sliding window needs brass sheets."

**REWORK check:** single anchor is aeronautics; the dossier calls a Create recipe WEAK (M-04-adjacent, "deco, low value") — but it's genuinely the right move for a train-detail mod sitting at one anchor. Accept it as a light second tie.

- from: create_train_parts brass/copper sliding windows and steps | via: create:pressing (brass/copper sheet inputs) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: train windows and step-plates require pressed brass or copper sheets from a Create press — train detailing has a proper fabrication step
- REWORK: existing aeronautics anchor is sound; no arbitrary edges to flag.

---

## dynamictrees   [anchors: survival (1)]

Living-forest tree-growth mod. 35 items (seeds, branches, dendro potion), no foreign-method weave currently. Outputs ordinary logs/sticks. Registered recipe types: `dynamictrees:mega_seed`, `dynamictrees:seed_conversion` (sapling ↔ dynamic seed conversions).

**Method-pull:** logs → `create:milling` (planks/sawdust), logs → `farmersdelight:cutting` (planks/sticks). These are *downstream* processing of the logs DT drops — DT doesn't own those methods, they already absorb vanilla/modded wood. DT's own method (`seed_conversion`) converts saplings + dirt_bucket → species seeds; there's no foreign-material slot to plug in here.

**Dossier assessment:** "DT trees are notoriously awkward for Create automated harvesters — forcing a Create edge would be contrived." That's correct — DT's whole-tree-fell mechanic fires on axe strike, not on a deployer, so a Create automated tree farm doesn't work naturally. Forcing a Create harvester recipe is contrived.

**Magic/economy angles:** `dynamictrees:dendro_potion` is an interesting item — it accelerates tree growth. Could it be brewed via ars_nouveau imbuement with a magic catalyst? That's thematic (a living-forest growth potion resonating with nature magic). Power: mid (potions aren't a daily item). Theme: fits — nature magic enhancing living trees is a player-nod. Motif: M-10 (arcane infusion pull — a foreign material refined into a magic/functional item through arcane infusion). Red-team: ars_nouveau imbuement producing a growth potion for DT trees is coherent but slightly forced — the potion already exists; infusion would add an alternate craft route. This is a genuine second tie (survival → magic production route).

- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement (add arcane alternate craft) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a Dendro Potion can be infused through an Ars Nouveau apparatus — living trees respond to arcane growth magic
- from: dynamictrees logs/seeds | via: create automated harvesting | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: DT's whole-tree-fell is axe-driven, not deployer-compatible — automated Create harvesting is contrived; no coherent motif

---

## sounds   [anchors: support/polish (1)]

Zero items, zero blocks, zero recipe types. Client-only audio overhaul. No content surface.

- LEAVE — genuine zero-content client audio mod; nothing to route or weave.

---

## fzzy_config   [anchors: support/library (1)]

Zero items, zero blocks. Config engine API (Kotlin). No content surface.

- LEAVE — genuine zero-content library/API; nothing to route or weave.

---

## trading_floor   [anchors: Create, economy (2)]

Already at 2 anchors. The Trading Depot automates villager trades onto Create belts. Solid Create + economy connection.

**Method-pull for a 3rd anchor:** villager trades produce emeralds and enchanted books. Enchanted books → `create_enchantment_industry:grinding` (dissolve into experience) → feeds magic reagents is an M-12 chain. But that's routing through a different mod, not through trading_floor itself. Does trading_floor gain a new system from this? Not directly — the depot is purely the automation block; what comes out of it is independent of the mod.

**Survival angle:** does a trade depot under scarcity-pressure matter for survival? A colony of villagers being the source of enchanted books needed for adventuring / magic progression is thematic, but that's a design/config state, not a weave through trading_floor's own methods.

**REWORK check:** the existing 2-anchor connection is coherent and well-grounded — Create (hard dep, is a Create depot variant) + economy (its entire purpose). Both are strong; no arbitrary edges.

- OK — connections sound (Create + economy, both primary and load-bearing). No forced 3rd anchor; the depot's value is as the automated trade node.

---

## farm_and_charm   [anchors: survival (1)]

Rich farmhouse mod — barley/oat, cooking appliances, animal husbandry. 124 items, 6 registered recipe types. One anchor. Clean second-anchor target.

**Method-pull (Create):** `create:milling` accepts grain items tagged as c:crops or by name. Barley/oat are farmhouse grains — milling them to flour is the obvious Create tie. This bridges the farmstead grain chain into the Create spine. Power: everyday (milling grain is a routine early-game step). Theme: completely natural — a millstone grinding oat and barley is exactly what a mill does. M-12 (processing-chain pull).

**Method-pull (magic):** farm_and_charm has butter, barley soup, dough — these are food intermediates. Is there a magic route? Ars Nouveau's source requires food to regen. A barley soup fed to a mana pool as a ritual ingredient? That's thematic but very loose. The magic connection for food mods generally runs better through survival (diet variety) than magic, and the dossier correctly calls the magic route weak.

**Economy (de-emphasis guard):** animal-husbandry surplus (meat/eggs/butter/grain) as sellable trade goods — this is the M-09 luxury-good → coin path. The de-emphasis guard says: accept only when structurally distinctive. Is farm_and_charm's animal husbandry a genuine production-for-trade engine, or is it generic-sellable? The feeding-trough / feeding-for-more-drops loop does create a real production surplus incentive — it's not just "crop exists, it's sellable." But the distinguishing mechanism is the husbandry loop producing surplus efficiently, not the items' sellability. Is that a distinctive loop-closing sink? Marginally — it's a production surplus node feeding the trade layer. Close call: I'll REJECT as marginally non-distinctive per the de-emphasis rule; the Create mill link is the stronger second anchor.

- from: farm_and_charm:barley, farm_and_charm:oat (grain crops) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley and oat go through a Create Millstone to make flour — the farmstead's grain chain runs through the same mill as every other crop
- from: farm_and_charm surplus meat/eggs/butter | via: numismatics sell/trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; animal husbandry surplus is real but the economy link is trivially present for any food mod; no distinctive loop-closing structure
- REWORK: survival anchor is sound. No existing cross-system edges.

---

## glitchcore   [anchors: support/library (1)]

Zero items, zero blocks. Loader-abstraction library backing Glitchfiend mods. No content surface.

- LEAVE — genuine zero-content library; nothing to route or weave.

---

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]

Zero items, zero blocks. Pure behavior-bridge mod making furniture sittable on Create contraptions and Aeronautics ships. Already touches aeronautics.

**Method-pull:** no items, no methods. There is literally nothing to route. The mod's value is the sit-on-ship behavior.

- OK — connections sound (support/compat + aeronautics; both appropriate for a zero-content compat glue mod). No weave possible or needed.

---

## better_climbing   [anchors: support/QoL (1)]

Zero items, zero blocks. Client-side movement tweak. No content surface.

- LEAVE — genuine zero-content client QoL mod; nothing to route or weave.

---

## spawn   [anchors: survival (1)]

Ambient fauna mod — clams, crabs, anglerfish, seals, sea cows, new biomes (Seagrass Meadow, Ant Garden), date palm wood set. 296 items, 165 blocks, loot=yes, existing FD weaves. One anchor.

**Method-pull (Create/food chain):** Clams and crab drops are seafood; `create:milling` can process shellfish into seafood powder/meal (a processing-chain pull that deepens the food web). Power: everyday (seafood drops are common from aquatic exploration). Theme: a Create millstone grinding dried shellfish into seafood seasoning is coherent in an industrial-kitchen context. M-12 (processing-chain pull).

**Red-team against Create mill:** is shellfish milling thematically natural or forced? Slightly forced — clams are shucked not milled. A better Create method would be `create:pressing` (pressing shellfish for juice/paste) or `create:mixing` (combining seafood ingredients). `create:mixing` is the more coherent route: mixing seafood drops → seafood brine/paste that feeds cooking recipes. Still M-12.

**Method-pull (magic):** Angler fish has a bioluminescent lure — in the dark-ocean context, it could be an Occultism ritual ingredient (a deep-sea creature as a spirit-fire transmutation reagent, M-11). Anglerfish lure as a "light from darkness" reagent for night/void rituals. Power: mid (anglerfish are rare deep-sea catches). Theme: bioluminescent deep-sea horror as an occult reagent is a strong player-nod for Occultism's aesthetic. M-11 (ritual / transmutation sink).

**Economy (de-emphasis guard):** Seafood as a luxury trade good is generic-sellable. REJECT.

- from: spawn:crab, spawn:clam (seafood drops) | via: create:mixing (seafood into brine/paste as a cooking intermediate) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crab and clam are mixed in a Create Mixing Basin into a seafood brine that feeds farmersdelight and farm_and_charm cooking recipes
- from: spawn:angler_fish (bioluminescent deep-sea mob drop) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the anglerfish's abyssal lure — light that draws victims in darkness — is a sought spirit-transmutation reagent for Occultism rituals
- from: spawn seafood drops | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis
- REWORK: survival anchor sound; existing FD weaves (cooking/cutting) are appropriate and correctly anchored.

---

## naturescompass   [anchors: support/QoL (1)]

Zero blocks, 32 items (all atlas/model variants of one compass item). Pure biome-locator information tool. No recipe types, no material outputs.

**Method-pull:** The compass itself is an item — could it be crafted through Create or magic for a stronger recipe tie? Its recipe is vanilla (crafting table). A Create-crafted compass variant (made from pressed plates + glass lens via `create:mechanical_crafting`) would give it a second anchor, but the dossier correctly notes it's a support/QoL utility. Forcing a complex recipe onto a navigation tool violates the depth-scales-with-power rule (an exploration utility should have an accessible recipe). The compass is a mid-tier QoL item but not a powerful one — a single crafting step is appropriate. No coherent second anchor.

- LEAVE — support/QoL exploration utility; the sole item is a biome-finder with no material outputs. Forcing a recipe complexity uplift violates the depth-scales-with-power rule for a navigation tool.

---

## xaeroworldmap   [anchors: support/QoL (1)]

Zero items, zero blocks. Client-side map UI. No content surface.

- LEAVE — genuine zero-content client map mod; nothing to route or weave.

---

## bookshelf   [anchors: support/library (1)]

Zero items, zero blocks. Modder utility library. No content surface.

- LEAVE — genuine zero-content library/API; nothing to route or weave.

---

## railways   [anchors: Create, aeronautics (2)]

Create: Steam 'n' Rails. 1015 items, 617 blocks, existing inbound Create recipe types (create:mechanical_crafting, create:sequenced_assembly). Already 2 anchors.

**Method-pull for a 3rd anchor:** Railways adds conductors (operator entities), semaphores, locometal building blocks, and wide/narrow gauge tracks. Is there a survival or economy tie? 

- Locometal blocks are a rich build material (617 blocks in 15+ color variants). Via M-04 (Create recycles deco), locometal could crush back to iron/brass/copper plates + XP nugget. That extends the Create anchor, not a new system.
- Conductor caps are role-differentiation gear — could they tie to economy (a player-assignable conductor role carrying goods between stations)? That's a design/gameplay framing, not a recipe weave.
- Economy via Numismatics: train conductors could vend tickets for coin — but that's a server-design choice, not a weave through the mod's methods.

**REWORK check:** the existing 2-anchor connection is clean — Create (built from Create recipes, deep integration) + aeronautics (is the Create train system's logistics extension). Both are primary, load-bearing, and well-cited. No arbitrary edges.

- from: railways locometal blocks (all color variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn or surplus locometal cladding goes back through a Crushing Wheel into iron/copper/brass plates — a lossless recycling loop for train-builders who change livery
- OK — existing Create + aeronautics anchors are sound and primary.

---

## minecolonies   [anchors: survival, Create (2)]

NPC settlement/colony mod. Already 2 anchors. The Create weave (quarry gating on andesite casings + precision mechanism, M-05) is authored.

**Method-pull for a 3rd anchor — magic:** MineColonies has a `blockhutenchanter` (enchanting hut) and a `blockhutmysticalsite` (mystical hut). The colony's enchanter could be the source of magic-relevant enchanted gear that feeds the magic pillar (M-05 native-method gating: colony research gates enchanted-gear production, which feeds magic reagent chains). Power: mid-endgame (enchanter hut requires University research). Theme: a self-running colony having an enchantment office feeding the magic web is a natural "of course" — the colony-as-alternate-production-route already covers both tech and magic per SYSTEMS.md. M-05 (native-method gating, colony route).

**REWORK check:** existing survival + Create anchors are sound and explicitly cited. The colony-as-production-route is the designed load-bearing function (SYSTEMS.md §3). No arbitrary edges.

- from: minecolonies:blockhutenchanter / minecolonies:blockhutmysticalsite (colony enchanting/mystical production route) | via: minecolonies colony research gate → magic reagent/enchantment output | to: magic | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: the colony's Enchanter and Mystical Site produce enchanted gear and spell-adjacent outputs as the colony production route into the magic pillar — the cheaper alternate path to magic exclusives
- OK — survival and Create anchors are sound and load-bearing.

---

## trashslot   [anchors: support/QoL (1)]

Zero items, zero blocks. Client UI trash slot. No content surface.

- LEAVE — genuine zero-content client QoL mod; nothing to route or weave.

---

== CHUNK COMPLETE ==
