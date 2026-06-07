# Phase 2 candidates — chunk-18 (context-fed)

## justenoughbreeding
LEAVE — zero items/blocks/loot; pure JEI plugin exposing breeding info. No material surface to route anywhere.

## ecologics
Existing consensus covers: coconut→create:milling (M-12), coconut/slice→cooking (M-12/survival), coconut_slice→magic M-10, coconut regional-scarcity M-30, coconut_husk→M-32. What's missing: (a) the seashell lime/calcium M-03 path (1 accept, distinct from M-04 deco-recycle and not consensus-covered); (b) azalea_flower as a seasonal loot-window reagent under M-16 (1 accept, not captured in any consensus row); (c) the M-33 beach-specialist service angle.

- NEW | from: ecologics:seashell (c:storage_blocks/seashell, beach loot, biome-locked) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed seashell yields calcium lime — the same chemistry a Create mixing chain uses for cement/plaster; beach biome produces the reagent, inland industry consumes it.
- NEW | from: ecologics:azalea_flower (sheared, seasonal bloom — only in spring/summer under Serene Seasons) | via: ars_nouveau:imbuement | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: azalea flowers only bloom in spring; the imbuement apparatus takes them as a seasonal catalyst, so the magic specialist must plan their ritual calendar around the growing season.
- CHALLENGE | from: ecologics:coconut_husk | via: create:milling | to: create | motif: M-32 | verdict: REJECT | hook: M-32 byproduct→input requires the husk to feed a *different* downstream process as feedstock; the existing row never names what the fiber is feedstock *for* — it's a dangling byproduct claim, not a closed loop. Accept only if a concrete downstream process (e.g. Create filter medium, packing fiber for colony supply) is named.

## ritchiesprojectilelib
LEAVE — zero items/blocks/loot; pure ballistics/projectile API library. No material surface to route; serves Create Big Cannons indirectly but that weave belongs to createbigcannons, not this library.

## endrem
Existing consensus covers the core routes well: M-11 undead_eye ritual (30 accepts — dominant), M-10 magical_eye apparatus (17), M-34 boss-loot-seed eyes into thematic chests (7+), M-11 nether_eye ritual (7), M-15 eye-as-boss-key (3), M-34 combat-supply economy (1 accept). The sequenced-assembly routes (M-06) were consistently rejected to protect the exploration gate. What's not explored: the M-19 haunting path for lost_eye/rogue_eye, and whether the M-34 combat-supply trade leg has a subtler economy angle. Also: no one challenged the undead_eye ritual (30-consensus) — it earns a brief sanity check since ritual transmutation of a progression gate is a design risk.

- NEW | from: endrem:lost_eye (thematically a "wandering soul" eye, tied to no specific boss — the hardest to find via exploration) | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: a soul-blanked ender pearl passes through Create's haunting furnace and emerges as the lost_eye — the soul-fire seam gives the Create specialist exactly one eye they can make without leaving their base, while keeping all boss-locked eyes exploration-only.
- NEW | from: endrem:rogue_eye / endrem:evil_eye (chaos/trickster-themed — no obvious single boss source) | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: these trickster-themed eyes are the thematic match for soul-fire transmutation (chaos ↔ soul energy); one haunting path for one class of eye is the minimum viable Create anchor that doesn't trivialize the gate.
- CHALLENGE | from: endrem:undead_eye | via: occultism:ritual | to: magic | motif: M-11 | verdict: REJECT | hook: the 30-consensus M-11 row is sound in motif and theme, but the design risk is real — if the ritual cost is set too low it becomes the default path and the exploration gate softens for a whole class of players; this should be authored with a cost floor (the ritual must require materials harder to get than simply exploring the structure that would have dropped the eye) to stay a genuine "stuck player safety valve" rather than a shortcut. Not a full challenge — flag as balance-critical when authored.

