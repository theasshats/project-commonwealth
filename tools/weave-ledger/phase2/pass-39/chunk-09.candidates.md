# Phase 2 candidates — chunk-09

## collective   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (Serilum shared-utility; registers 0 blocks, 0 items, no methods). No surface to weave.

## create_dragons_plus   [anchors: create (1)]

Dossier notes this as a support/library mod for the DragonsPlus Create add-on family, but it registers real recipe-types (`create_dragons_plus:ending`, `create_dragons_plus:freezing`) and has 20 blocks and 24 items — specifically the bulk fan-processing catalyst methods. Its ending/freezing fan-stations are *weave targets* other content can route through. Let's check if any weave can be proposed FROM its outputs, and then whether we need to flag REWORK on its single anchor.

**Power-read:** The mod's flagship items are the fan catalyst blocks (dragon breath for Bulk Ending, powder snow for Bulk Freezing). These are everyday-to-mid tier — they extend Create fan processing. The dye-fluid buckets are essentially mid-tier Create fluid utilities. The levitite_fragile_fluid_tank is mid-tier storage.

**Method-pull:**
- `create_dragons_plus:ending` (fan-ending) accepts arbitrary items + dragon head/breath catalyst → End-infused output. Dragon's Breath is a rare combat drop (defeating the Ender Dragon). This is an endgame-tier method. Any material that could be End-infused becomes a candidate.
- `create_dragons_plus:freezing` (fan-freezing) accepts items + powder snow → frozen output. Powder snow is survival-obtainable.
- The dragon_breath fluid (stored in the fluid_hatch) is produced by Create-mixing operations and is a magic-adjacent material (dragon's breath is an Ender Dragon output).

**Weave candidates:**

**A) Dragon's Breath fluid → magic infusion (M-10 / M-29)**
The dragon_breath fluid requires defeating the Ender Dragon (M-15 boss-key territory) and is then Create-processed into a fluid. Routing magic reagents through `create_dragons_plus:ending` (fan-ending + dragon breath catalyst) makes the Bulk Ending station a magic-→-Create cross-route: a magic item (Ars source crystal, or Occultism's spirit essence) is "end-infused" via the dragon-breath catalyst to produce a superior variant. This cross-route (M-29) forces the tech player to obtain a boss fluid *and* magic inputs.
- Red-team: is it sensible? Dragon's Breath + Ars materials → enhanced magic output is thematically on-point (End = transcendence, arcane power). Tone: ok.
- Power: endgame (dragon breath = post-dragon content). A multi-step integration is appropriate.
- Motif: M-29 cross-route dependency — a magic reagent routed through a Create method (fan-ending), creating cross-specialist dependency.

**B) Bulk Ending as M-15 gate (boss-drop → Create upgrade)**
Dragon's Breath fluid (the catalyst consumed) is an Ender Dragon drop, making the `create_dragons_plus:ending` station a natural boss-keyed upgrading station: high-tier items get an "End-tempering" step through the fan-ending catalyst. This is M-15 (boss-key unlock), but the boss drop here is a *method catalyst*, not a crafting input — the spirit is M-15 but it rides through `create_dragons_plus:ending` as the method.
- Red-team: The Bulk Ending station already IS the method; the weave is "seeding the right items to route through it." That's a Phase-3 authoring question, but the candidate is valid — choosing *what* gets End-tempered.
- Tone: ok (End-infusion as a final upgrade is natural lore).
- Motif: M-15 (boss-key unlock via the fan-ending catalyst method).

**C) Fan-freezing → survival/economy via ice-processing (M-12)**
Bulk Freezing (powder-snow catalyst) can freeze water buckets → packed ice, or produce frozen variants of foods/materials — analogous to a Create-extended cold-processing chain. This binds survival (powder snow = cold-season survival resource per Serene Seasons) to Create processing.
- Red-team: Vanilla-accessible powder snow means this isn't meaningfully scarce; ice-making through Create is trivially available via vanilla encased-fan + water. Weak differential unless the frozen *output* is something distinctly useful. Low unique value.
- Verdict: REJECT — powder snow is abundant; fan-freezing is a generic convenience, not a loop-advancing edge. The vanilla ice-with-encased-fan path already covers this.

**Existing anchor review:**
The single Create anchor is sound — the mod is genuinely a Create extension library. The dossier correctly identifies it as a weave-*target* (its methods are what others route through). The one improvement is recognizing that dragon_breath fluid (a boss-output) routes CREATE into an end-game method, giving it a survival/boss-pressure anchor via M-15/M-29.

- from: dragon_breath fluid (boss Ender Dragon output) | via: create_dragons_plus:ending (fan-ending catalyst) | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: End-tempering magic reagents through the dragon-breath fan-station forces a tech player to first defeat the Ender Dragon, bridging boss-danger into magic production
- from: create_dragons_plus:ending (fan-ending station) | via: boss-drop catalyst gating | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Bulk Ending catalyst (dragon's breath) is itself a boss-key — any item "End-tempered" through it is naturally boss-gated, giving the fan-ending station a role in the high-tier fork
- from: fan_freezing_catalyst (powder snow) | via: create_dragons_plus:freezing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: powder snow is freely obtainable; fan-freezing an ice chain replicates what vanilla encased-fan does with water — no meaningful loop advancement

