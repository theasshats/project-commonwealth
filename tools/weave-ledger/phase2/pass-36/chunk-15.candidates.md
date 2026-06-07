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

