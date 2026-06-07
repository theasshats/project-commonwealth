# Phase 2 candidates — chunk-14

## pingwheel   [anchors: support/QoL (1)]

- LEAVE — zero content surface: no items, no recipes, no loot tables. Pure multiplayer keybind / marker utility. No coherent game-loop weave is possible; forcing one would be contrived.

## enhancedcelestials   [anchors: survival (1)]

**Method-pull:** The mod has two discrete content types: (a) world-state lunar events (Blood Moon / Harvest Moon / Blue Moon) that alter gameplay globally, and (b) physical items — `enhancedcelestials:meteor` block and `enhancedcelestials:space_moss_*` blocks. The events map cleanly to M-22; the meteor block to M-04.

- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a fallen-star rock crushes to iron chunks + a nickel byproduct (or gravel + xp-nugget), making meteor fields a minor Create ore-doubling stop; thematically obvious (space rock = metal-bearing)

- from: Blood Moon / Blue Moon lunar events | via: event-gated input → ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a particular ritual or imbuement only completes under a Blood or Blue Moon — the world's most dangerous night becomes the only window for a specific arcane step; the moon-calendar is a real planning constraint for the magic specialist

- from: enhancedcelestials:space_moss_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: space_moss is worldgen decoration/mob-spawn-egg flavor, not a material with an obvious arcane identity; "mossy space rock → magic reagent" is too arbitrary — the tone is sci-fi cosmetic, not eldritch organic; no coherent player nod

- from: Harvest Moon event | via: config-tie → Serene Seasons seasonal multiplier | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is not a new weave — Harvest Moon's crop-growth boost is a global modifier on existing crops; it already rides the survival pillar. No second pillar is added; the link is ambient, not a method-routing. Records as rejected to document the considered path.

REWORK: existing anchor (survival) is sound — the lunar events are legitimate survival pressure. No rework needed on the existing anchor; the two ACCEPT candidates above add Create and magic as a 2nd anchor.

## t_and_t   [anchors: survival (1)]

**Method-pull:** Pure worldgen / loot-bearing structure mod — 0 registered blocks/items of its own, but `loot=yes`. The correct delivery is loot-seed, not recipe. Its structures carry loot chests and villager-trade hooks. The 16 biome-specific village variants are natural trade hubs; conquerable outposts and ocean ships are discovery/danger nodes.

- from: t_and_t loot tables (conquerable forts / outposts / ocean sail-ships) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed rare Numismatics coin denominations into high-danger fort/ship chests — the first coin a player sees comes from the world's most dangerous structures, not a mint, establishing coin as something found and fought for before it's minted; pulls the exploration/danger face of survival into the economy leg of the loop

- from: t_and_t loot tables (biome village chests) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed pack-specific trade goods (regional raw materials, scarce seeds, magic reagent fragments) into village-variant chests so each village style reflects its biome's regional specialty — exploration and looting produce goods that feed the trade economy; a coast-village yields fish-processing byproducts, a badlands-village yields a cactus-fiber reagent, etc.

- from: t_and_t ocean sail-ships | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: while a ship could carry a magic reagent in its chest, the connection is thin — ships are a general adventure loot-table, not thematically tied to a magic mob drop. M-02 is specifically "isolated mob/boss drop given a magic use"; a chest in a ship structure is not a mob drop. Route the magic loot via a boss-specific structure if one exists; this ship entry is too generic. Records as rejected to document.

- from: t_and_t village-hub role | via: worldgen/spawn | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the service-for-hire motif requires a mechanic (enchant-for-hire, colony contract, etc.) — t_and_t is pure worldgen with no service mechanic. The village *setting* could host a player service stand, but that's emergent social behavior, not a packable weave. The loot-seed candidates above are the right delivery for this mod. Records as rejected.

REWORK: dossier's 2nd-anchor candidate cited M-09 ("luxury good → coin") which is **retired**. The correct framing for the village-trade-hub economy link is M-08 (coin seeded as loot from dangerous structures) and M-34 (combat/exploration-route supply → economy). Both are proposed as ACCEPT above.

## inventoryprofilesnext   [anchors: client-only QoL / support (1)]

- LEAVE — zero content surface: no items, no recipes, no loot tables. Client-side inventory sorting and slot-locking UI only. Already handled in CLAUDE.md as a texture-override case (the IPN arrow fix). No weave is possible or desirable.


