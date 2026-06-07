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

## revelationary   [anchors: support/library (1)]

Pure progression-gating library — no items, no recipe types, no loot, no blocks. Gates block/item discovery behind advancements. The dossier notes it acts as infrastructure for mods like Occultism's otherworld block disguises.

No material surface to route. The mechanic itself (advancement-gated reveal) is a supporting method used by other mods' content. It has no content of its own to give a second anchor.

- LEAVE — pure code library / gating API; zero content surface (no items, no methods, no loot). Its weave value is entirely through dependent mods that USE it, not through revelationary itself.

REWORK: OK — no existing connections to evaluate; support-role only.



