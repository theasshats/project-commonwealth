# Phase 2 candidates — chunk-09
<!-- pass-04 · mode: blind · quality-audit (all mods already ≥2 pillars) -->

## create   [anchors: Create (1 — IS the pillar)]
OK — connections sound. Create is the method library, not a recipient; its dossier correctly marks it N/A as an integration target. No REWORK items.

## extradelight   [anchors: survival, Create (2)]
- REWORK: The existing inbound Create weave is only `create:mixing` (fluids/ingredients). The dossier's own 2nd-pillar note says "deepen via create:milling/crushing/pressing — route grain→flour, coffee grinding, Vat/Evaporator fluid-reduction through Create equivalents." That proposal is sound, but it is listed as a *candidate* not yet authored. As a quality check on what IS woven: the sole Create edge (mixing) is legitimate and not mis-costed. The survival pillar is fully earned by the 146+ meals and cooking stations.
- REWORK (minor, cost-calibration): No endgame-depth issue — the Create mixing connection routes everyday ingredients, which is appropriately light. Scaling is correct.
- OK — existing two connections (survival + create:mixing) are coherent; no arbitrary or lore-clashing edges. Depth is appropriate (everyday mixing, not sequenced-assembly for basic meals). The unimplemented deepening (milling/pressing for grain/coffee) is an opportunity, not a defect in what exists.

## occultengineering   [anchors: Create, magic (2)]
- OK — connections are sound by construction: this mod IS the Create×Occultism bridge. Inbound weaves are `create:compacting/filling/haunting/item_application/mixing/pressing` + `occultism:ritual/spirit_fire` — every edge is load-bearing and thematically correct (cog-and-pentacle premise). Depth scaling is appropriate: the mechanical pulverizer and fan-based enspiriting are everyday-automation conveniences; the upgrade_tier mechanic for summoned spirits is mid-tier and correctly gated on Create parts.
- REWORK (watch flag): The dossier mentions `occultengineering:spirit_solution` is the RESERVED occult intermediate (reagent-ownership). Verify that any new Phase-3 weave going THROUGH this mod does not duplicate or displace that reserved role — the existing weave is clean, but care is needed when other mods try to use it as a reagent.
- No arbitrary, lore-clashing, or mis-costed edges found.

## numismatics   [anchors: economy, Create (2)]
- OK — connections are sound. Numismatics IS the economy hub and a Create addon; both pillars are structural (depends on create; coins are Create-styled and crafted via Create methods). Its role as destination (not source) is correctly documented. No inbound weaves from foreign processing methods (vanilla-only made-by), which is correct — it is the terminal node, not a processing step.
- REWORK (none): the dossier correctly notes "don't add an outgoing edge." Confirm that no Phase-2/3 work accidentally assigns Numismatics an upstream production role — its coins are the currency denomination, not a crafted intermediate.
- No arbitrary or mis-costed edges.

## aeronautics_bundled   [anchors: aeronautics (1 — but de-facto Create via components)]
- REWORK: The dossier lists this at 1 anchor (aeronautics) and notes Create is a "de-facto 2nd via component crafting" but marks it "(not this namespace — weaving belongs on the `aeronautics` namespace dossier)." If the actual weave content is tracked under a separate `aeronautics` dossier, this entry is correctly deferred. However, if no `aeronautics` namespace dossier exists and all items are under `aeronautics`/`sable` (as noted), this bundle wrapper entry may be masking a gap: the real components (levitite, propellers, tires) have no separately-audited weave record here.
- REWORK (structural): Recommend verifying the `aeronautics` namespace dossier exists and is audited; if not, the bundle wrapper being at "1 anchor" understates the actual Create dependency and the M-06/M-23/M-24 seams aren't formally recorded anywhere.
- Existing connections (aeronautics as primary + de-facto Create via components) are not arbitrary or mis-costed given the dossier explanation. No lore clash.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- REWORK: This mod is at 1 pillar (cosmetic color variants only). The dossier correctly notes "forcing an edge would be a non-edge." As a quality-audit, the single-pillar status is documented and justified. No authored connections exist to audit for mis-costing or lore clash.
- REWORK (flag): The dossier's own candidates say "none — leave." That's correct; a cosmetic reskin mod that consumes only base levitite + dye has no coherent 2nd pillar unless the dye itself is gated (which would be gilding). This is a structural one-pillar mod that earns its place as supporting content. Audit: OK, no rework on existing connections because there are none to rework.

## alcohol_industry   [anchors: Create, survival (2)]
- OK — the two existing connections are both clean. Create is earned: the Alcohol Base is assembled via `create:filling` + `create:mixing` (made-by, jar-grounded). Survival is earned: outputs are drinkable consumables with effects. Both inbound edges are appropriate in depth (everyday process-chain, not endgame).
- REWORK (opportunity flag, not a defect): The dossier notes the economy 3rd pillar (M-09 luxury→coin for bottled spirits) as STRONG but unimplemented. This is a candidate opportunity, not a flaw in the existing weave. The existing two edges are solid.
- No arbitrary, lore-clashing, or mis-costed edges in what is currently connected.

## ars_nouveau   [anchors: magic (1 — spine of magic pillar)]
- REWORK: The dossier lists `magic (1)` — but the dossier also notes it is "not yet wired to Create/economy/survival." However, its made-by methods are `(none / vanilla only)`, confirming no authored inbound weave exists yet. As a quality-audit of existing connections: the magic anchor is correct (it IS the magic pillar spine). The absence of a 2nd pillar is the documented gap, not a mis-costing.
- REWORK (flag — depth calibration): The M-01 hub role (`source_gem` as universal magic currency) is reserved and correct. If an imbuement-based weave is authored as a 2nd pillar, care is needed not to gate basic/everyday items behind infusion (anti-guardrail in M-10). Existing vanilla-only connections: nothing to mis-cost here.
- OK on what exists. The single anchor is justified; proposed 2nd pillars (M-02 organic→magic via sourcelinks; M-01 imbuement) are sound proposals, not defects to rework.

## astikorcartsredux   [anchors: survival (1)]
- REWORK: Dossier lists `survival (1)`. Made-by methods: vanilla only. This mod is in the "≥2 pillars" chunk — re-check chunk list. It appears at 1 pillar per the dossier. If placed here in error, flag: no connections to audit for REWORK since no authored weave exists. If it belongs in the ≥2-pillar audit set, the data is inconsistent with its dossier.
- REWORK (structural): The dossier's own 2nd-pillar candidates say "none strong — leave." That is a defensible position for a low-tech horse-cart mod. The M-05 candidate (Create-processed iron sheets gating the plow blade) is cited as WEAK. No existing connection to mis-cost; survival anchor stands on its own.
- OK on what exists (nothing to rework). Flag the possible chunk-list mis-assignment for human review.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections are sound. Create is structural (hard-depends on Create; items made via `create:item_application` + `create:splashing` — jar-grounded). Survival/deco pillar earned by the broad tile/chair/lamp decoration palette. Both anchors are appropriate.
- REWORK (minor, opportunity): Dossier notes M-04 (Create recycles deco — tile/chair blocks crushable back to stone/planks) as an unimplemented opportunity. This is a clean, motivated edge (closing the deco→Create loop), but not yet authored. It does not represent a defect in the existing weave.
- No arbitrary, lore-clashing, or mis-costed edges in what exists.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections are well-grounded. Create is structural: barrels/breeches cut via `create:cutting`, munitions assembled through CBC's own munition-assembly chain (which itself routes through Create metals). Aeronautics is structural: the mod's entire purpose is arming Aeronautics contraptions/ships. Both pillars are earned by function.
- REWORK (depth calibration): The dossier's own 2nd-pillar note mentions gating the heavy-autocannon/rocket tier behind a boss drop or MineColonies unlock (M-05). This is a good progression lever but unimplemented. Not a mis-cost on existing connections.
- No arbitrary or lore-clashing edges. The Create→aeronautics armament read is exactly what M-24 is for.

## chefsdelight   [anchors: survival, economy (2)]
- OK — both anchors are earned. Survival: provides Farmer's Delight meals and feasts via Cook/Chef villager professions. Economy: villager trade is a direct economy mechanism (emerald transactions).
- REWORK (mis-alignment flag): The economy pillar anchor rests on emerald-based villager trades, NOT Numismatics coins. The CLAUDE.md and design intent centers on Numismatics as the pack's real economy; emerald trades sit outside that system. The dossier itself notes this and tags the fix as MED (route trades through numismatics, M-09). So: the economy anchor is *technically* present but arguably anchors the WRONG economy system. This is a soft REWORK — the connection is not mis-costed, but it connects to the wrong economy node for this pack.
- The dossier candidate (M-21 villager trade → numismatics) would be the cleaner connection, but M-21 is provisional (leans no). This tension is documented correctly; no hard rework needed, but the emerald-economy anchor should be reviewed at the 0.9 economy update.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections are sound. Create is structural (made-by `create:cutting` + `create:deploying`, jar-grounded). Aeronautics is earned: the cardboard plane is an autonomous flying logistics agent — exactly the aeronautics/logistics pillar read.
- REWORK (none needed): The dossier correctly notes "no extra edge needed." Light economy adjacency exists (remote trade fulfillment) but deliberately left alone. Connections are clean, coherent, and appropriately shallow (the plane is an everyday logistics tool, not an endgame keystone).

## companions   [anchors: survival (1)]
- REWORK: Like `astikorcartsredux`, this dossier lists `survival (1)`. It is in the "≥2 pillars" audit chunk. Per dossier, no 2nd pillar is authored yet — no inbound foreign weave methods (vanilla only). Flag: possible chunk-list mis-assignment, or the intended 2nd pillar (magic via M-11/M-02, or economy via M-09) is not yet connected.
- REWORK (structural): The mod has strong weave candidates — Soul Furnace outputs (Crystallized Blood, soul gems) are natural magic reagents feeding Occultism/Ars Nouveau (M-11, M-02); Relic Gold / Old Cloth boss drops could feed M-09 economy or M-15 boss-key. But none are authored. If this mod was included in the ≥2-pillar audit set based on planned/proposed connections rather than authored ones, that's a data consistency issue: flag for human review.
- Existing authored connections: none beyond survival anchor. Nothing to mis-cost.

== CHUNK COMPLETE ==


