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

