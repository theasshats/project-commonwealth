# aeronautics — dossier

<!-- HAND-AUTHORED (not the usual build-dossiers skeleton). Create Aeronautics registers its parts in code and
     the digest SCAN CAPTURED NONE of them (the `aeronautics_bundled` jar shows 0/0). The components below are
     sweep/wiki-grounded (already named in aeronautics_bundled.md) + the one item recoverable from recipe data
     (`aeronautics:levitite_blend_bucket`). ⚠ EXACT item ids for the rest need a DIGEST REGEN on a live instance
     (#131) before Phase-3 authoring — treat part names here as categories, not verified ids. -->

one-line:   Create Aeronautics' actual content namespace — levitite (the lift material) plus the physics-ship part set (propeller bearing, hot-air burner/envelope, steam vent, symmetric sail, wheel mount + tires). This is the aeronautics PILLAR's own content, finally reviewable.
vibe:       industrial-adventurous (skyship engineering)
signature:  levitite (anti-gravity lift reagent — the pillar's keystone material) · propeller bearing · hot-air burner + balloon envelope · steam vent · symmetric sail · wheel mount + tires (cosmetic dye variants live in `aeronautics_dyeable_components`)

methods (FIRST-CLASS — what this mod can DO; resources other mods pull THROUGH — §2.0):
  registered recipe-types (AUTO, jar-grounded): (none captured — digest gap)
  non-recipe mechanics: physics-simulated contraption assembly (buoyancy/lift via levitite, propellers, balloons, wheels); the airship/plane/car layer.
  consumes / outputs: parts built largely THROUGH Create (crushing/pressing/mixing → sheets/casings → sequenced assembly); outputs flyable/driveable contraptions. Levitite is the scarce lift reagent everything hinges on.

anchors:    aeronautics (1) — the pillar spine; Create is a de-facto 2nd via component crafting. UNDER-CAPTURED (digest gap) — flagged for outbound-weave review once ids land.
2nd-pillar candidates (PREFER method-routings; cite a motif where one fits — these are the OUTBOUND links the pillar was never reviewed for):
  - levitite → numismatics: the scarce lift reagent as a high-value regional trade good (M-09/M-08) — aeronautics FEEDS the economy, not just consumes parts. [candidate]
  - levitite → magic: anti-gravity reagent as an arcane/levitation infusion input (M-10) — theme-check vs industrial tone. [explore]
  - finished airships/vehicles → numismatics as flagship luxury goods (M-09). [candidate]
  - inbound (already strong): structural parts via M-23 (alloy → airframe/hull), drivetrain via M-24, fuel via M-13, keystone build via M-06.

how-packs-integrate: the airship/vehicle backbone; pairs with aeronauticscompat (third-party-on-ships) and sable (physics backend).
sources (SWEEP): https://www.curseforge.com/minecraft/mc-mods/create-aeronautics  https://createaeronautics.miraheze.org/wiki/Main_Page
status:     PARTIAL — levitite grounded; full part registry pending digest regen (#131)

<!-- AUTO-DIGEST-FACTS — hand-seeded; replace with a real regen when the scan captures Create Aeronautics. -->

jar:            create-aeronautics-bundled-1.21.1-1.2.1 (content ns: aeronautics)
primary ns:     aeronautics
deps:           sable, create
counts:         0 blocks, 1 items, 0 biome-modifiers, 0 c:tags, loot=no   (UNDER-CAPTURED — scan missed code-registered parts)
made-by methods (foreign types this mod's recipes USE — existing inbound weaves): create (component crafting)
material c:tags: (none captured)
blocks (grounded): (none captured)
item sample (grounded): aeronautics:levitite_blend_bucket
