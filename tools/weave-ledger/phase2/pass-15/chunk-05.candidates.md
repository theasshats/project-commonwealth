# Phase 2 candidates — chunk-05

## incontrol   [anchors: server-util/QoL (1)]
- LEAVE — genuine zero-content behavior mod: no items, no blocks, no loot tables, no recipe methods. Config-only JSON rule engine that shapes spawn/loot tables as a design tool. Enabling infrastructure for scarcity but not itself a weavable node.

## better_lib   [anchors: support/library (1)]
- LEAVE — pure shared-systems library (config, first-join message, live-message API). Zero blocks, zero items, zero loot. No gameplay surface to weave.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (iron/steel fencing) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player disassembling an old build recovers iron scraps rather than voiding them — lossy crush is the logical outcome for functional metalwork.
- from: mcwfences hedge/wooden fence variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: hedges crush to leaves/sticks — Create has no use for that output and the interaction is noise, not a real web edge. Wooden fences are too trivial. Metal variants only.
- REWORK: existing dossier candidate flagged WEAK on M-04 wholesale — narrow the ACCEPT to metal fence variants specifically (mcwfences:*_metal_fence, bastion, cathedral, acorn). A wholesale deco-family pass is the right vehicle; this mod alone doesn't justify it, but the metal variants belong in that pass.

## almostunified   [anchors: support/recipe-graph (1)]
- LEAVE — recipe-graph infrastructure: no items, no blocks, no loot. It IS the unification mechanism itself; you cannot weave "into" it without contradicting its purpose. The galosphere/silver GOTCHA (CLAUDE.md) is the only critical note — already flagged in the dossier.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau:source_gem (arcane magic currency) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mages sell distilled Source in gem form — a natural luxury trade good that creates a magic→economy pipeline without forcing a craft chain.
- from: ars_nouveau:archwood logs/planks | via: create:milling → create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Archwood is a unique magical timber — milling it yields a special arcane sawdust or pulp that feeds a Create mixing step, pulling this common harvest into the tech spine at minimal cost.
- from: ars_nouveau Vitalic/Agronomic Sourcelinks consuming crops and mob deaths | via: config tie — set Vitalic to draw from colony/farm mob surplus | to: survival | motif: M-16 (seasonal input) | power: everyday | tone: ok | verdict: ACCEPT | hook: farm mobs and crop growth passively fuel Source — no extra recipe, just a config pointing the Vitalic sourcelink at the pack's mob density; seasonal surplus powers the arcane.
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement (M-01 spine, already reserved) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT (already established) | hook: the universal magic currency hub — foreign essences mint into/out of it. This is THE existing established pillar; flag as OK.
- from: ars_nouveau:mage_bloom crop | via: farmersdelight:cutting or create:milling | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mage bloom is a growable magic crop; milling it yields a raw arcane flour or petal powder usable as a Create mixing reagent — organic harvest entering the tech chain.
- from: ars_nouveau spell scrolls (high-tier) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: spell scrolls are player-crafted from scratch; pricing them as a coin trade good competes with the Numismatics player-run economy review caveat (M-09 ⚠) and could break balance before the 0.9 economy pass — defer.
- from: ars_nouveau:drygmy_charm farm (passive mob-drop harvester) | via: occultism:spirit_trade or minecolonies worker | to: magic↔Create | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: Drygmy passively collects drops from corralled mobs; routing that surplus mob-drop haul through Occultism spirit-trade creates an automated organic→magic logistics line, making magic self-sustaining with colony-scale mob farming.
- REWORK: dossier lists "economy via numismatics — source_gem or spell scrolls as a sellable good [WEAK]" and suggests deferring it to dedicated arcane-currency weaves. The source_gem ACCEPT above (M-09) supersedes this; the scroll REJECT above captures the boundary. The dossier's "WEAK" label should be upgraded: source_gem→coin IS coherent and belongs in the economy pillar at M-09, whereas scrolls are too risky pre-0.9 review.
- OK — M-01 (imbuement/enchanting-apparatus as magic currency hub) is the established spine and is correctly anchored. M-02 (Vitalic/Agronomic consuming farm surplus as mob-drop/crop sink) is already noted as the strongest organic→magic link and should be formalized when the survival pillar is woven.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two-item Create QoL filter utility. Shuffle Filter and Weighted Shuffle Filter are pure builder tools that modulate Deployer randomness; no material I/O, no method, no loot, no thematic adjacency to any other pillar. No coherent second pillar without forcing it.






