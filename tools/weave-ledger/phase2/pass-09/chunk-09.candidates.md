# Phase 2 candidates — chunk-09 (QUALITY-AUDIT, mode=blind)

> Quality audit of mods nominally at >=2 pillars. Per mod: REWORK items on EXISTING/claimed
> connections (arbitrary / lore-clashing / mis-costed), or `OK — connections sound`. AUTHOR NOTHING.
> No weaves are authored yet (weave log is empty), so "existing connections" = the dossiers' anchored
> pillars + their inbound made-by methods + the 2nd-pillar claims the audit is meant to vet.

## create   [anchors: Create (1) — it IS pillar #1]
OK — connections sound. Create is the hub, not a recipient; the dossier correctly says LEAVE (do not
author edges that consume Create itself). The method library underlying M-03..M-06/M-08/M-12 is its real
"connection." Nothing to rework.
- Note (not a rework): listed at (1) pillar but exempt by construction — it is the spine. Trains/logistics
  give it a de-facto aeronautics adjacency but that is intentionally folded into the Create spine.

## extradelight   [anchors: survival, Create (2)]
OK — connections sound, with one cost caution.
- EXISTING Create weave (made-by create:mixing) is correct and on-motif (M-12 processing-chain pull).
- REWORK (watch, mild): the 2nd-pillar deepening "route grain->flour / coffee+sugar grinding through Create
  milling/crushing" must NOT replace the everyday hand/FD path — grain->flour is an everyday component;
  gating bread behind a millstone violates the depth-scales-with-power guardrail. Keep Create as the
  *bulk/automation* tier alongside the manual FD path, not as a replacement. Flag for the author, not a defect
  in the existing edge.
- The M-09 feasts->coin candidate is sound (high-effort dish = luxury good) and carries the standard 0.9
  player-run-currency caveat; fine as proposed.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound. This is the canonical M-05/M-11 bridge by construction; inbound from both create:*
(compacting/filling/haunting/item_application/mixing/pressing) and occultism:ritual/spirit_fire — a genuine
two-web membership, not a cluster of one.
- Reagent-ownership respected: it correctly OWNS occultengineering:spirit_solution (the reserved occult
  intermediate, M-11). No double-spend.
- REWORK (weak candidate only): the WEAK numismatics/sterling_silver M-08 3rd-pillar idea is fine to surface
  but should stay low priority — sterling_silver is occultengineering's structural alloy, and minting it to
  coin competes with its own use; don't author unless a clear surplus exists.

## numismatics   [anchors: economy, Create (2)]
OK — connections sound. It IS the economy keystone and a Create addon (depends on create; coins/blocks are
Create-crafted). Correctly a destination hub, not a source — the dossier rightly says LEAVE (don't author an
outgoing edge from numismatics).
- Reagent-ownership respected: numismatics:* (spur..sun) reserved to the economy pillar (M-08/M-09). No issue.
- No rework. The only risk is OTHER mods minting/pricing into it incoherently — that's audited on those mods,
  not here.

## aeronautics_bundled   [anchors: aeronautics (1), Create de-facto (2)]
OK — connections sound, with a bookkeeping note.
- The Create de-facto 2nd pillar (levitite/tires/propellers via Create sheets/casings/sequenced-assembly,
  M-06) is real and correct.
- REWORK (bookkeeping, not content): weaving must be recorded on the `aeronautics`/`sable` namespace, NOT this
  bundle wrapper (0 items/0 blocks register here). The dossier already flags this; ensure the M-23/M-24 build
  + drivetrain seams (structural alloy -> hull, mechanical component -> propulsion) get logged against
  `aeronautics`, not `aeronautics_bundled`. Pure provenance correction.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
OK — connections sound (cosmetic support role). This is a deliberately-cosmetic skin layer (16 dye variants of
levitite/tires); the dossier correctly writes LEAVE and rejects forcing a Create/economy edge as a non-edge.
- AUDIT FLAG (premise): this mod is genuinely at ONE pillar, not >=2. The chunk header assumes >=2; for a pure
  cosmetic permutation that is the *correct* end state — a forced 2nd pillar here would be a defect. No rework;
  record as a sanctioned one-pillar support mod, not a gap to fill.
- Marginal: the "route the dye step through create:mixing for color" idea is correctly tagged gilding/WEAK —
  do not author; dyeing an everyday cosmetic via a machine step trips depth-scales-with-power.

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound. Genuine two-web membership: Alcohol Base is assembled via create:filling +
create:mixing (existing inbound weave, M-12), and the boiler outputs drinkable consumables (survival/buff).
- The STRONG 3rd-pillar candidate (finished liquors -> numismatics, M-09 luxury->coin) is coherent — bottled
  spirits are a natural trade commodity; carries the standard 0.9 currency caveat. Fine as proposed.
- No rework on existing edges.

## ars_nouveau   [anchors: magic (1) per dossier — audited as the magic spine]
OK — connections sound, with an AUDIT-FLAG on the pillar count.
- AUDIT FLAG (premise): the dossier anchors ars_nouveau at ONE pillar ("not yet wired to Create/economy/
  survival"), yet this chunk is "mods already at >=2." The 2nd pillar is a *candidate*, not authored. The
  strongest is magic<->survival via Vitalic/Agronomic Sourcelinks (M-02): foreign crops/mob-deaths/babies
  already feed Source generation NATIVELY — no recipe needed — so survival is effectively a live 2nd pillar by
  mechanic, even without an authored recipe edge. Treat that as the real 2nd pillar; record it.
- Reagent-ownership respected: ars_nouveau:source_gem correctly OWNED as the universal magic currency hub
  (M-01). No double-spend.
- REWORK (weak): the numismatics M-09 "source_gem/scrolls as sellable arcane good" candidate is correctly
  tagged WEAK and "prefer leaving economy to dedicated arcane-currency weaves" — agree; do NOT author. Pricing
  the magic-currency hub item to coin would couple the M-01 reserved reagent to the economy pillar and invite
  round-trip arbitrage. Keep it off.

## astikorcartsredux   [anchors: survival (1)]
OK — connections sound (one-pillar by design).
- AUDIT FLAG (premise): genuinely at ONE pillar (agrarian field-work + hauling). The dossier correctly writes
  "none strong — leave" and warns a forced economy/Create edge would be contrived. For vanilla-style transport
  flavor that is the right call — a 2nd pillar is optional, not a gap.
- REWORK (weak candidate, lean reject): the M-05 "gate plow blade / reaper on Create-processed iron sheets"
  idea is the only defensible edge but is WEAK and risks gating an everyday early-game farm tool behind the
  tech spine — a depth-scales-with-power concern. Carts/implements are meant to precede minecarts/trains. If
  authored at all, only the *metal* implements (plow/reaper) and only as an alt recipe, never the basic carts.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound. Genuine Create membership: two items are MADE-BY create:item_application +
create:splashing (existing inbound weave), and it hard-depends on Create; the decoration palette is the
sanctioned survival/build 2nd role.
- Note: "survival" here = decoration/building, the pack's accepted support pillar — not a forced edge.
- REWORK (none; reinforcement only): the M-04 "tiles/chairs crush back to crushed-stone/planks via
  create:crushing" idea is coherent and lossy-correct; a fine reinforcement, optional. The "survival" label is
  the softest of its two pillars but legitimate for a deco mod hard-bound to Create.
