# Phase 2 candidates — chunk-08

## mcwstairs   [anchors: support/decoration (1)]

Macaw's Stairs — 224 stair/railing/balcony/platform variants per wood and stone material. Pure decoration palette, vanilla-table crafted, no recipe-type of its own.

**Method-pull:** The only viable route-through is `create:crushing` on stone/brick variants (M-04, lossy recycle). The dossier already flags this as WEAK. Let me red-team it:
- Crushing a decorative stair back to gravel/raw + XP nugget is defensible (it's how M-04 works for any deco block) but it's one of the lightest possible connections — the player experience is "I can reclaim material from a mis-built stair," not a meaningful loop contribution.
- The wood variants don't add anything crushing can't already do via vanilla planks.
- As a decoration palette mod, it is a sanctioned support anchor. The dossier itself notes "only weave as part of a wholesale deco-family pass."
- Tone: industrial crushing of fancy railings is coherent enough (M-04 is exactly this — deco recycling).
- But the signal is thin: this is one optional lossy recycle on stone variants, not a loop advancement.

**Verdict:** ACCEPT M-04 on stone/brick stair variants only (it's genuinely the right motif; M-04 explicitly targets deco recycling); REJECT the wood-variant crushing as redundant (vanilla planks handle it and the wood path adds no new system linkage); note this is a low-priority pass-level candidate, worth only at the tail of a broader deco-family batch.

- from: mcwstairs:*_stone/brick/blackstone variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: mis-placed fancy stone railings crush back to their raw material plus a XP nugget — the same lossy-recycle contract Create applies to all stone deco
- from: mcwstairs:*_wood variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: redundant — vanilla planks already satisfy the recycle path; wood stair crushing adds no new system node and the everyday/low-power rule says one light step, not duplicating vanilla
- REWORK: existing anchor is "support/decoration (1)" which is correct and sanctioned; no existing weave connections to REWORK.

## trashcans   [anchors: support/automation QoL (1)]

Four void-blocks that delete items/fluids/FE at unlimited rate. Pure QoL sink; the dossier correctly notes it's anti-economy by nature (voiding destroys value rather than cycling it).

**Method-pull:** No recipe type of its own, no outputs to pull through another mod's method. The blocks themselves aren't materials — they're the final deletion point of an automation line.

**Scarcity-pack concern:** The dossier flags this accurately — in a scarcity-driven pack, an unlimited void sink trivialises byproduct value (M-32 byproduct→input would want byproducts routed to another process, not deleted). However, trashcans is QoL for overflow management in large Create lines, and preventing all deletion would frustrate players. This is a balance/config concern, not a weave opportunity.

**Red-team:** Could we weave the trash-can block itself — make its recipe require Create-processed parts? That would be M-05 (native-method gating), but the block is an automation utility, not a power-scaled item. The everyday/low-power rule says "one light step, not a complex chain." A Create-made trash can isn't unreasonable, but the block's core function is deletion — making it harder to craft doesn't create a loop link. No motif fits.

**Verdict:** LEAVE — genuine zero-game-loop-value support block; voiding is anti-scarcity by nature and no motif applies; balance concern is a config/curation note, not a weave opportunity.

- LEAVE — automation QoL void sink; no items/outputs to route through any method; adding a crafting requirement to the block itself finds no motif and creates no loop advancement; the balance concern (voiding byproducts in a scarcity pack) is a curation/config note, not a weave

## ponderjs   [anchors: support/Create tooling (1)]

KubeJS addon for authoring custom Create Ponder scenes. Zero player-facing items, zero blocks, no recipe types. It is documentation/dev infrastructure — it documents the Create spine rather than contributing a material or method.

**Method-pull:** No content surface whatsoever (0 blocks, 0 items, loot=no). There is nothing to route through any method and nothing for another method to pull. This is the definition of a zero-surface code library.

**Verdict:** LEAVE — pure code/authoring library with zero player-facing content surface; a genuine zero-anchor library where LEAVE is correct.

- LEAVE — pure KubeJS scripting API for Create Ponder scene authoring; 0 blocks, 0 items, no loot, no recipe types; no player content surface exists to weave

## playeranimator   [anchors: support/library (1)]

Player Animation Library — client animation API. Zero blocks, zero items, no recipe types, no gameplay mechanics. Pure code library.

**Verdict:** LEAVE — genuine zero-content code library (0 blocks, 0 items, loot=no); nothing to anchor or weave.

- LEAVE — pure animation API library (0 blocks, 0 items, no recipe types); zero content surface; shipped as a silent dependency of animation-driven mods

## createblockchain   [anchors: economy + Create (2)]

Currency Miner block fed FE mints Numismatics coins; Mining Cores from geodes gate the rate; piggy banks seed loot coins in chests. Already has 2 anchors (economy + Create via mechanical_crafting/mixing).

**Existing connections review:** The economy anchor (it *is* a coin faucet — M-08 adjacent) and the Create anchor (built via `create:mechanical_crafting` + `create:mixing`) are sound. The Mining Core geode worldgen scarcity is a genuine gate. The FE input creates a meaningful dependency on Create's electrical sub-system (via createaddition). Let me check if the existing connections are weak or arbitrary — they aren't: the coin faucet directly implements the player-minted-currency concept and the Create dependency is mechanical.

**REWORK check:** The dossier flags this as "the money FAUCET for Numismatics." M-08 requires coins to trace back to regional scarcity. Currently the FE source is unconstrained — any FE supply feeds the miner. The dossier's own 2nd-anchor deepening note is: "feed the miner FE that itself comes from scarce processed metal, so coins trace back to regional scarcity rather than free FE." This is correct as a REWORK flag — the existing economy anchor is real but weakened because the FE supply has no scarcity gating; without that, the coin faucet rate is only Mining Core-gated, not ore-scarcity-gated at the energy level.

**Method-pull for new links:** Can we add a third anchor? The mod already sits at economy + Create. Looking for survival or magic links:
- The cryotheum_coolant_bucket is thematically a cold/ice substance — could route through `create_dragons_plus:freezing` or `northstar:freezing` as a coolant source. But cryotheum is a minor support item for the miner, not a flagship material, so a freezing-method link would be thin/forced.
- Mining Cores from geodes: geodes are worldgen, so there's a scarcity/regional gate here (M-30 regional scarcity gate concept). But Mining Cores are already the gate for the miner itself; a separate M-30 weave would be redundant.
- Piggy banks seeding loot coins in chests: this is a loot-seed mechanism that puts coins into structures — a form of M-08 distribution but already covered by the economy anchor.

**Red-team on deepening:** The FE→scarcity-trace suggestion (making FE itself come from scarce metal) is a deepening of M-08, not a new anchor. It's valid but it belongs to the authoring layer.

**Verdict:** OK on existing economy + Create anchors (both real); REWORK on the FE supply — flag that without ore-scarcity-traced FE the M-08 coin chain is incomplete (Mining Core gate alone is insufficient to root coins in regional scarcity; the FE supply should trace back to a scarce processed metal); no strong new 3rd anchor found.

- REWORK: FE supply to the Currency Miner is currently unconstrained — any FE source mints coins; this weakens M-08 because coins don't trace back to regional ore scarcity (only Mining Cores gate it, not the energy input); a Phase-3 config or recipe tightening should prefer a scarce-metal-sourced FE route (e.g. via createaddition generator fueled by a region-locked ore product) to close the M-08 loop properly
- OK — economy + Create anchors are both mechanically real and sound; no forced or lore-clashing connections
- from: createblockchain:mining_core (geode drop) | via: loot-seed (geode worldgen placement) | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mining Core only comes from geodes ~every 30 chunks — its regional rarity naturally zones where heavy coin minting is possible, tying the money supply to the geographic map
- from: createblockchain:currency_miner (FE→coin chain) | via: createaddition:charging / FE from scarce ore product | to: scarcity→economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins are only as common as the energy to mint them — if that FE traces back to a region-locked processed metal, the money supply has geographic roots
- from: createblockchain:piggy_bank | via: loot-seed (overworld chests) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks seeding random coins into world chests is an NPC-adjacent faucet (coins appear "from nowhere" rather than from player minting effort); this weakens M-08's player-minted-currency framing; the ambient chest loot is flavour, not a weave node

## createshufflefilter   [anchors: Create (1)]

Two filter items (shuffle + weighted shuffle) that randomise which item a Create Deployer places from its inventory. Purely a Create filter utility — no materials of its own, no recipe type registered.

**Method-pull:** The items themselves (`shuffle_filter`, `weighted_shuffle_filter`) are filter tools, not materials. They don't output anything; they control which items a Deployer picks. There is no coherent second system this connects to:
- They can't route through a magic method (a filter isn't a reagent).
- They can't route through survival (no food/combat role).
- They can't route through economy (they don't produce or distribute value; they distribute *placement effort* within a Create contraption, which is all already Create-side).
- Could make the filter itself require a magic reagent as an ingredient (M-10/M-29 cross-route)? The item is a low-mid everyday utility for builders; gating it behind magic would be disproportionate — the everyday/low-power rule says one light step, and a magic-gated filter has no thematic reason.

**Red-team:** The dossier itself says "leave (a one-item builder QoL utility; no coherent 2nd pillar without forcing it)." I agree — there is no natural motif.

**Verdict:** LEAVE — tiny two-item Create filter utility with no materials, no outputs, no method, and no coherent 2nd anchor; the everyday/low-power rule and the "don't force edges onto utility tools" guardrail both point here.

- LEAVE — two-item Create Deployer filter utility; no recipe type, no materials/outputs to route; no coherent 2nd anchor exists without forcing an arbitrary cross-mod edge

## necronomicon   [anchors: support/library (1)]

Pure code library (Necronomicon API by ElocinDev). 0 blocks, 0 items, loot=no, no recipe types. Genuine zero-content library.

**Verdict:** LEAVE — genuine zero-content code library; nothing to weave.

- LEAVE — pure API/config library; 0 blocks, 0 items, no recipe types; zero player content surface

## moogs_structures   [anchors: support/library (1)]

Data-driven worldgen library for Moog's structure mods. 0 blocks, 0 items, loot=no, no recipe types. No standalone gameplay content.

**Verdict:** LEAVE — genuine zero-content worldgen library; nothing to weave.

- LEAVE — worldgen library/API; 0 blocks, 0 items, no recipe types; any loot/weave belongs on the dependent structure mods, not the library

