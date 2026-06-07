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

