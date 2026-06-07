# Phase 2 candidates — chunk-15

## jeresources   [anchors: client-UI/support (1)]

jeresources (JER) is a pure display/documentation addon for JEI. It has no items, no recipe types, no processing methods, and no loot. It surfaces worldgen and mob-drop data to players. The dossier correctly characterizes it as support-role with zero content surface.

- LEAVE — pure display library (no items, no methods, no loot); nothing to route through any method. Its indirect value (showing players where regional ores spawn, reinforcing scarcity) is real but documentation, not a weave edge.

REWORK: OK — support-role only; no existing connections to evaluate.

## alcohol_industry   [anchors: Create, survival (2)]

Already 2-anchor. The dossier's proposed 3rd anchor cites M-09 (luxury good → coin), which is retired — reject that. Method-pull alternatives:

Power-read: beer/vodka/whiskey/tequila are consumables with status effects — mid-tier outputs (needs Create mixing/filling + the Alcohol Boiler heated chain). The outputs are drinks with buffs; the chain uses Alcohol Base as an intermediate fluid.

**Candidate A — M-26 consumption sink / M-12 processing pull into seasonal reagent (survival↔Create)**
From: seasonal grain/fruit inputs (Serene Seasons-gated harvest crops — wheat in summer, apples in autumn) — run through Create mixing → Alcohol Base → Alcohol Boiler → specific spirit. Season-gated input tightens the production window and makes the base fluid scarce in off-seasons.
- from: seasonal crops (e.g. wheat/apple/agave, Serene Seasons-gated) | via: create:mixing → alcohol_industry:alcohol_boiling | to: survival | motif: M-16 | power: mid | tone: ok — distillery timing tied to harvest season is entirely sensible | verdict: ACCEPT | hook: you can only brew your best whiskey in summer when the wheat harvest is in.

**Candidate B — M-26 consumption sink (aeronautics/economy)**
Finished spirits as crew-upkeep or morale consumables on airship runs — a ship's galley needing restocked drinks, linking aeronautics to the food/drink production chain.
Red-team: "ship needs drinks" is very loose. The pack has no enforced crew-morale or galley mechanic; without a game mechanic enforcing consumption, this is just "a player could carry vodka on a ship." M-26 needs a consuming mechanic (burn/eat/upkeep). The spirits' status-effect buffs already give them that role in normal survival play without needing an aeronautics tie.
- from: alcohol_industry:whiskey / vodka | via: emergent carry-and-consume | to: aeronautics | motif: M-26 | power: mid | tone: clash (no enforced consumption mechanic in pack; aeronautics link is very thin) | verdict: REJECT | reason: M-26 requires an actual consuming mechanic that demands the item; "player might drink this on a ship" is not a weave edge. The survival consumption link already holds via status effects — that's the real M-26 pull.

**Candidate C — M-35 maturation / aging (survival↔economy)**
The Alcohol Boiler produces a finished spirit, but the pack's M-35 maturation motif (vinery fermentation, create_cheese:maturing, extradelight drying rack) suggests a richer chain: base spirit → aged spirit (via a configurable maturation step, e.g. extradelight:drying_rack or supplementaries:jar as a holding vessel) → premium aged whiskey with better buffs. This creates a time specialist — someone who runs the aging cellar and trades the premium output.
- from: alcohol_industry:whiskey (base spirit) | via: extradelight:drying_rack or vinery:apple_fermenting (maturation step) | to: economy | motif: M-35 | power: endgame | tone: ok — aged spirits commanding a premium is immediately legible | verdict: ACCEPT | hook: base whiskey is good; barrel-aged whiskey takes weeks in an extradelight drying rack and trades for twice the value.

**Existing connections review:**
The existing Create + survival anchors are sound: Create:mixing/filling → Alcohol Base is a real method-routing (M-12 style), and the drinkable outputs with buffs clearly anchor survival. No REWORK needed.

REWORK: OK — existing Create + survival connections are coherent method-routings.

## mffs   [anchors: Create, survival (2)]

Already a gold-standard 2-anchor weave per dossier: focus_matrix gated on create:electron_tube (M-05), projector/interdiction_matrix are create:sequenced_assembly chains through derpack:incomplete_* (M-06), mid-tier machines use TFMG steel. Authored in 60-mffs.js.

**Candidate A — M-34 combat-route supply (survival/danger ↔ economy)**
MFFS projectors and interdiction matrices are endgame base-defense equipment. A combat specialist who can farm boss drops (gating the high-tier machines, M-15 already in place) could produce finished force-field arrays and trade them to settlement/colony players who lack the combat capability. The demand driver: colony-builders and economy-specialists need perimeter defense but won't grind the boss route.
- from: mffs:projector / mffs:interdiction_matrix (built via Create sequenced-assembly + boss-drop gate) | via: emergent boss-route → trade | to: economy | motif: M-34 | power: endgame | tone: ok — a combat specialist sells force fields to colony-builders who need perimeter defense is immediately legible | verdict: ACCEPT | hook: you can build the projector yourself if you have the boss keys; or you buy a finished unit from the fighter who farms them.

**Candidate B — M-30 regional scarcity gate (scarcity ↔ economy)**
MFFS machines consume steel (c:ingots/steel — Create-routed). Steel requires iron + coal, both of which are region-locked by GTMOGS ore-gen. A player in an iron-poor region can't self-supply mffs machines; they must trade for the steel intermediate, then for the finished assembly. This is already partially realized by M-05/M-06 routing through Create, but the scarcity dimension (steel region-locking meaning force-field arrays are region-scarce) is worth naming explicitly.
Red-team: this is less a weave candidate than an implicit consequence of M-30 being on steel. The steel scarcity is already there; MFFS just inherits it. No new edge to author — it's an ambient dependency.
- from: mffs:projector | via: regional steel scarcity (inherited) | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: REJECT | reason: M-30 is already ambient on any Create-steel-requiring machine; no new specific authoring needed here beyond the existing Create routing. Recording for completeness.

**Existing connections review:**
The M-05 / M-06 weaves are the reference examples of native-method gating + sequenced-assembly keystone. No REWORK needed — these are the gold-standard.

REWORK: OK — existing Create (M-05/M-06) + survival connections are the authored reference weaves; sound.

## revelationary   [anchors: support/library (1)]

Pure progression-gating library — no items, no recipe types, no loot, no blocks. Gates block/item discovery behind advancements. The dossier notes it acts as infrastructure for mods like Occultism's otherworld block disguises.

No material surface to route. The mechanic itself (advancement-gated reveal) is a supporting method used by other mods' content. It has no content of its own to give a second anchor.

- LEAVE — pure code library / gating API; zero content surface (no items, no methods, no loot). Its weave value is entirely through dependent mods that USE it, not through revelationary itself.

REWORK: OK — no existing connections to evaluate; support-role only.

## jamlib   [anchors: library/support (1)]

Cross-platform API library (JamCoreModding). Zero items, zero blocks, zero recipe types, zero loot. Pure JSON5 config system and platform-abstraction helpers for dependent mods.

- LEAVE — genuine zero-content code library; no items, no methods, no loot. Nothing to route.

REWORK: OK — no existing connections; support-role only.

## death-count-1.0   [anchors: support/flavor (1)]

A vanilla-scoreboard datapack that tracks per-player deaths in the tab list. No items, no blocks, no recipe types, no loot. Purely cosmetic server scoreboard.

- LEAVE — zero content surface (scoreboard cosmetic only); no items, no methods, no loot. Nothing to weave.

REWORK: OK — no existing connections; support-role (friend-group flavor) only.

## betterendisland   [anchors: survival (1)]

Structure/worldgen overhaul of the End's central island (YUNG's). No items, no blocks of its own, no loot tables (loot=no). Purely cosmetic structural redesign.

The dossier says LEAVE; let me check if there's anything to route. It's a structure overhaul only, with no loot. There is no content surface — no drops, no items, no recipe types.

- LEAVE — structure-overhaul only with no loot tables, no items, no recipe types; zero content surface to route. The survival anchor (end-game spectacle/exploration) stands alone as a justified support-flavor role.

REWORK: OK — no existing connections beyond single survival anchor; correct.

## voicechat   [anchors: support (1)]

Simple Voice Chat — proximity audio. Zero items, zero blocks, zero recipe types, no loot. Pure server-transport + client audio infrastructure.

- LEAVE — genuine zero-content comms infrastructure; no items, no methods, no loot. Critical QoL for a 10-player co-op pack but not a weave node.

REWORK: OK — no existing connections; support-role only.

## timm   [anchors: support/QoL (1)]

Traveler's Titles — client-side biome/dimension title overlay. Zero items, zero blocks, zero recipe types, no loot. Pure presentation.

- LEAVE — zero content surface (UI-only overlay); no items, no methods, no loot. Nothing to weave.

REWORK: OK — no existing connections; support-role only.

## terralith   [anchors: survival (1)]

Overworld worldgen overhaul (~95 biomes, new terrain). No items, no blocks, no recipe types. The dossier shows loot=yes but 0 items of its own — that loot tag likely refers to vanilla loot tables that the worldgen data touches, not mod-specific loot.

Let me reason through this carefully. Terralith adds biomes but uses only vanilla blocks; its "loot=yes" in the dossier counts could reflect the 65 c:tags it registers, not actual mod-specific loot tables. The dossier explicitly notes "no items/blocks of its own."

However, Terralith is the terrain substrate that other structure mods' content (and GTMOGS regional ore-gen) rides on. It anchors the scarcity foundation by shaping the world that regional ore-gen partitions. That's an indirect weave (terrain → ore distribution → scarcity) but no authoring is needed — it's the passive substrate.

Method-pull: no items to route. No recipe types. No loot tables of its own. The biome variety creates the *map* that Serene Seasons temperature differences land on, but that's a config interaction, not a recipe weave.

- LEAVE — data-only worldgen with no items, no mod-specific loot, and no recipe types; nothing to route through any method. Its real contribution is the terrain/biome substrate that regional ore-gen and other mods' spawns build on — a structural role, not a weave edge.

REWORK: OK — single survival anchor correct; no existing recipe connections to evaluate.

## farmersdelight   [anchors: survival, Create (2)]

Rich content mod (132 blocks, 187 items, 9 biome-modifiers, loot=yes). 4 registered recipe types: farmersdelight:cooking, farmersdelight:cutting, farmersdelight:dough, farmersdelight:food_serving. Already woven into Create (create:milling/mixing/filling for flour and ingredient prep). This is the pack's central food-processing hub.

Power-read: the crops (cabbage/tomato/onion/rice) are everyday-tier; cooking-pot stews are mid-tier; hearty feasts (food_serving) are mid-to-endgame social items. The cutting board + cooking pot methods accept any modded ingredient via c:tags — they're the widest-mouth ingestion point in the food layer.

**Candidate A — M-16 seasonal reagent pull (survival ↔ Create/magic)**
Serene Seasons makes some crops seasonal. FD's cabbage/tomato/rice yield to season-gating. A seasonal FD crop as the input to a magic infusion (e.g. ars_nouveau:imbuement) or Create mixing step gives a seasonal gate on a recipe. For example: tomato → sun-dried (extradelight:drying_rack, summer only) → catalyst for an Ars reagent synthesis. This advances the survival→production edge.
- from: farmersdelight:tomato (or cabbage/onion) | via: farmersdelight:cooking → ars_nouveau:imbuement | to: magic | motif: M-16 | power: everyday | tone: ok — a seasonal vegetable as a minor reagent input is sensible; it doesn't force-gate basics | verdict: ACCEPT | hook: the infusion only works with fresh summer tomatoes — so the magic lab times its rituals around the harvest.

**Candidate B — M-28 colony route (production ↔ economy)**
FD's crops and stews are exactly the kind of basic provisioning that a MineColonies colony requests via its supply system. A colony bakery/cook hut that consumes FD cabbage/rice/tomato to produce cooked meals for colony workers (cheaper route to the diet system's pressure) is a pure M-28 weave: colony consumes FD basics, output is fed colonists (and colonists produce other goods cheaper). This also ties FD into the economy pillar — colony output as one production route's cheaper basics.
- from: farmersdelight:cabbage / rice / tomato (crops) | via: minecolonies cook/baker hut | to: economy | motif: M-28 | power: everyday | tone: ok — feeding colonists with fresh vegetables is the most natural colony demand imaginable | verdict: ACCEPT | hook: your colony's cook hut consumes cabbage and rice from the farm, paying back in cheaper colony-made goods.

**Candidate C — M-12 processing-chain pull deeper (Create ↔ survival)**
The dossier notes Create milling/mixing/filling already feed into FD. The missing richer chain: FD's straw byproduct (farmersdelight:straw, from cutting rice/wheat) → create:pressing → straw bale → MineColonies compost input. This loops FD's byproduct back through Create into the colony production route, tightening circularity.
- from: farmersdelight:straw | via: create:pressing → minecolonies:composting | to: Create / economy | motif: M-32 | power: everyday | tone: ok — straw as a byproduct that feeds compost is a classic agrarian loop | verdict: ACCEPT | hook: the harvesting line's straw waste goes straight into the Create press and then into the colony compost heap, nothing wasted.

**Candidate D — M-09-style / bare sellable link**
Dossier notes "high-tier cooked dishes as sellable goods." This is M-09 (retired) — bare sell link. Reject.
- from: farmersdelight:beef_stew / farmersdelight:apple_pie | via: bare sell | to: economy | motif: M-09 (retired) | power: mid | tone: n/a | verdict: REJECT | reason: M-09 retired; "sellable" is the ambient endpoint of the loop. The demand-gating weave (M-28 colony provisioning above) is the valid form of this idea.

**Existing connections review:**
create:milling (grain→flour) and create:mixing/filling feeding into FD recipes — these are real M-12 processing-chain pulls. The survival anchor from diet-pressure is sound. No REWORK needed.

REWORK: OK — existing Create (M-12 processing chain) + survival (diet-pressure) connections are coherent.

## smartbrainlib   [anchors: library/support (1)]

Developer AI framework (Brain/goal system) used by mob mods. Zero items, zero blocks, zero recipe types, zero loot. Pure code dependency.

- LEAVE — genuine zero-content code library (AI framework); no items, no methods, no loot. Nothing to weave.

REWORK: OK — no existing connections; support-role only.

## blueprint   [anchors: library/support (1)]

Team Abnormals shared code framework. Zero recipe types. Ships one item (blueprint:template_chest — a vanilla-style deco chest) and 13 c:tags as shared tag scaffolding. Content surface is essentially nil.

The template_chest is a trivial deco item; the c:tags are scaffolding for downstream Abnormals mods. No processing method. No loot.

- LEAVE — library/API with one trivial deco item and no processing methods; the template_chest has no coherent weave role that wouldn't be completely forced. Nothing to route.

REWORK: OK — no existing connections; support-role only.

## modonomicon   [anchors: support/QoL (1)]

Data-driven guidebook system. Six items (the book variants and leaflet) but these are display-only books — not materials, not consumed by any processing method, no loot, no recipe types. It's a documentation framework.

Could the modonomicon book be used as a recipe ingredient (M-37 research/knowledge gate — a book that must be crafted as a progression key)? Red-team: the books are guidebooks, not spellbooks or crafting components. Forcing them into a recipe is purely arbitrary — a player would not find "why does this crafting guide unlock a machine" sensible. The theme clashes with the books' role as passive documentation.

- from: modonomicon:modonomicon (book) | via: crafting-table recipe as a progression prerequisite | to: Create/magic | motif: M-37 | power: everyday | tone: clash — guidebooks as crafting components is arbitrary; they carry no power and adding them as recipe ingredients is pure filler | verdict: REJECT | reason: tone clash — the book is documentation, not a reagent or key; forcing it into a recipe is an arbitrary filler edge. M-37 is better served by actual knowledge-gating (MineColonies research, Ars spell-knowledge) than a crafted guidebook ingredient.

- LEAVE — documentation framework; the book items have no coherent weave role (crafting a guidebook into a machine recipe is thematically arbitrary and adds no real depth).

REWORK: OK — no existing connections; support-role only.

## exposure   [anchors: Create, survival (2)]

Already 2-anchor: film develops via create:sequenced_assembly (made-by line), stands automated by deployers. 8 blocks, 43 items, loot=yes. Recipe types: exposure:component_transferring, exposure:film_developing, exposure:photograph_aging, exposure:photograph_copying.

Power-read: camera bodies are mid-tier crafted items; film is everyday (consumable); printed photographs are everyday-to-mid creative output; camera_gold is the prestige endgame variant.

The dossier's 2nd-anchor candidate was M-09 (luxury→coin) — retired; reject it.

**Candidate A — M-35 maturation / aging (survival ↔ economy)**
exposure:photograph_aging is a native method type — photographs age over time or via the aging process. An aged photograph has higher visual/loot appeal. This is a textbook M-35: a good that must sit to gain value (the aging specialist). An aged photograph of a rare biome or boss kill (location-stamped) could be a trade good that only the photographer with the right location access can produce — the "aged photograph of the Nether fortress" commands a premium.
- from: exposure:photograph (fresh) | via: exposure:photograph_aging | to: economy | motif: M-35 | power: mid | tone: ok — aged photographs as art-market trade goods is legible and charming, not forced | verdict: ACCEPT | hook: a fresh photo is a memento; an aged one is a collectible — the photographer sits on their prints for weeks and trades the cured set for real coin.

**Candidate B — M-33 service-for-hire (economy)**
Photography as a commissioned service: a player who invests in a camera + lightroom setup can take portraits or document other players' builds for trade. No recipe to author — the mechanic is emergent (the photographer charges for their time/materials), but naming it as an explicit design intent strengthens the economy anchor.
Red-team: "emergent service" is hard to enforce mechanically; it's purely social. This is not a recipe edge; it's a social-layer weave. Without a formal contract or bounty mechanic, it's ambient.
- from: exposure:camera service | via: emergent player-to-player commission | to: economy | motif: M-33 | power: mid | tone: ok conceptually | verdict: REJECT | reason: M-33 is valid for service-for-hire, but without a game mechanic anchoring the commission (no bounty board entry, no formal contract), this is purely ambient social behavior — not authoring-level weave. The M-35 aging path above is the concrete recipe edge; this is documentation of emergent behavior at best.

**Candidate C — M-29 cross-route dependency (Create ↔ magic)**
The camera body (exposure:camera) requires glass and gold in vanilla crafting. A weave: the gold body (camera_gold — the prestige variant) gated on an Ars Nouveau imbuement (e.g. requires a source-gem infused lens to upgrade the optics) — making the top-tier camera need magic-side input, threading Create (film automation) with magic (lens enhancement). This creates a cross-route dependency where the full photography rig requires both the Create specialist (for film development automation) and the magic specialist (for the gold lens).
Red-team: is the gold camera really endgame enough to justify a deep cross-route gate? Power-read: it's the prestige variant, so yes — it's the high end. But does "better camera" warrant magic investment? The thematic fit is strained — alchemy improving optics is plausible (alchemical glass) but not immediately intuitive for Ars Nouveau specifically. It's a stretch.
- from: exposure:camera_gold | via: ars_nouveau:imbuement (alchemical lens enhancement) | to: magic | motif: M-29 | power: endgame | tone: weak-clash — magic-enhanced camera optics is creative but not immediately legible to a player unfamiliar with the pack's design intent; it reads as arbitrary | verdict: REJECT | reason: theme stretch — alchemy improving camera optics requires a "this is the kind of world we're in" explanation; the connection is clever but not immediately sensible. Reserve magic cross-routes for items where the thematic link is immediate (e.g. magic-imbued weapons, not photography gear).

**Existing connections review:**
create:sequenced_assembly for film development is a real, grounded method-routing. survival anchor (photography as self-expression hobby) is valid but thin — it's more of a decorative survival flavor than a pressure/demand driver. That thinness is worth noting.

REWORK: The survival anchor is accurate but the weakest of the two. If Phase 3 wants to strengthen it, a seasonal photography mechanic (certain biomes only accessible in certain seasons → rare photographs only producible in-season) via M-16 would be the natural tightener. Not a current-connection REWORK — just flagging the survival anchor could deepen.

## sliceanddice   [anchors: Create, survival (2)]

Already 2-anchor: the Slicer automates FD cutting recipes kinetically; the Sprinkler + Fertilizer push water/fluids onto crops. Made-by: create:filling, create:mixing. 4 blocks, 3 items, loot=yes.

The dossier says LEAVE (already 2-pillar, IS a M-12 bridge by design). This is correct — the mod's entire purpose is being the Create↔FD automation glue. It has no loose materials of its own beyond the Slicer/Sprinkler/Fertilizer blocks (which are machine blocks, not tradeable commodities).

**Quick method-pull check:** Slicer produces the same outputs as FD cutting (food byproducts). Sprinkler distributes fluids — in principle, a modded fluid (e.g. tfmg:lubricant or an Ars fluid) could be piped in for a special effect. But any such fluid effect depends on the fluid mod's config/API, not a recipe. There's nothing to author here.

- from: sliceanddice:sprinkler | via: piping tfmg/magic fluids for special crop effects | to: Create/magic | motif: M-12 | power: everyday | tone: weak — the Sprinkler would need custom fluid-effect support from TFMG/Ars to be meaningful; without that, piping any non-water/non-lava fluid does nothing | verdict: REJECT | reason: no existing mod-side support for special Sprinkler fluid effects beyond water/lava; would require custom authoring with no method to route through. Already a M-12 bridge by design — forcing an extra edge is adding noise.

REWORK: OK — existing connections are sound (M-12 processing-chain automation between Create and FD; correct dual anchor).

## moreculling   [anchors: support/performance (1)]

Pure render-culling performance mod. Zero items, zero blocks, zero recipe types, zero loot. Depends on Sodium.

- LEAVE — pure performance optimization with no content surface; nothing to weave.

REWORK: OK — no existing connections; support-role (performance) only.

## openpartiesandclaims   [anchors: support/server-protection (1)]

Chunk-claim + player-party protection (Xaero). Zero items, zero blocks, zero recipe types, zero loot. Pure protection/social framework.

The party system does underpin the pack's cooperative premise — claimed territory is what gives regional scarcity its teeth (you can't outrun your footprint if your claim is your base). But that's a config interaction, not a weave edge.

- LEAVE — zero content surface (protection/social framework only); no items, no methods, no loot. Underpins the pack's territory premise but is not a recipe weave node.

REWORK: OK — no existing connections; support-role only.

## curios   [anchors: library/support (1)]

Accessory-slot API. Zero items, zero blocks, zero recipe types, zero loot. It HOSTS foreign trinkets (Ars Nouveau rings, Iron's Spellbooks accessories) in its slots but has no content of its own.

- LEAVE — pure equipment-slot framework; no items, no methods, no loot. Its weave value is entirely through dependent mods' accessories, not through curios itself.

REWORK: OK — no existing connections; support-role (magic pillar enabler) only.

## attributefix   [anchors: library/support (1)]

Attribute-cap bugfix library. Zero items, zero blocks, zero recipe types, zero loot. Raises vanilla attribute caps so high-power mod gear (magic/combat) works as intended.

- LEAVE — pure compatibility patch with no content surface; nothing to route.

REWORK: OK — no existing connections; support-role only.

== CHUNK COMPLETE ==
