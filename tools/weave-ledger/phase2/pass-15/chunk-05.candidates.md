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

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction drops (shields, weapons, armor — mid-tier faction loot) | via: numismatics sell/price + villager-trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: faction loot and citizen-trade are naturally transactional — Numismatics prices captured gear as merchantable spoils of war, making conquest feed the player economy.
- from: valarian_conquest mercenary hire / faction citizenship | via: numismatics coin (pay-to-recruit) | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: hiring mercenaries or swearing allegiance costs Numismatics coin — combat investment has a direct economic price. Flag provisional: M-21 leans no; surface for review.
- from: valarian_conquest:armorsmith station | via: create:deploying / item_application (M-20) — gate faction high-tier armor craft on Create-processed plate/chain inputs | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: faction knight armor requires factory-pressed metal plate from a Create line — martial gear earns its power through the tech spine without over-gating common faction drops.
- from: valarian_conquest boss/elite drops (e.g. signature knight items) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a conquered faction lord's relic is a magic reagent — battle trophies fuel arcane rituals, tying martial victory to the magic pillar.
- from: valarian_conquest:builder station outputs | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: builder station outputs are functional blocks/items, not deco — M-04 is for deco recycling. Forcing a crush path here is arbitrary and degrades the station's identity.
- REWORK: dossier's M-05 candidate (armorsmith station gated on Create parts) is labelled WEAK. M-20 (deploy/item_application) is a lighter and more appropriate form — a single Create-processed plate as one station input, not a full multi-step gate. The M-05 label is technically wrong (M-05 is native-method gating, not item_application); swap to M-20.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (soul-furnace reagent from mob drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood is a distilled soul essence — feeding it into Occultism's spirit fire transmutes it into an occult reagent, directly linking companion alchemy to the magic web.
- from: companions:soul_gem (high-tier boss/altar output) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: Soul Gems are a latent arcane material that an Ars imbuement refines into source-attuned currency, wiring the companion boss loop to the Ars source economy.
- from: companions boss drop — Relic Gold (Sacred Pontiff) | via: numismatics mint (via create:*) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold is a rare battle trophy from a boss fight; processing it into high-denomination coin makes the Sacred Pontiff the pack's most lucrative combat milestone.
- from: companions:voltaic_pillar / tesla_coil_block (electrical deco) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: decommissioned tesla deco grinds back to copper/redstone scrap — the electrical set's recycling path, tying it to the Create spine at minimal friction.
- from: companions own copper/nether/end coins | via: numismatics bridge (config/recipe unify) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: two competing coin systems in the same pack is a design smell; the dossier flags companions coins as NOT the pack's Numismatics economy. Bridging them risks undermining currency scarcity. Better to leave companions coins as internal mod tokens and not route them through Numismatics.
- from: companions:antlion_fur / mob drops | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: companion mob pelts being "cut" in a food-prep station is tonally odd — the companions vibe is gothic-alchemical, not butchery. Force fit; no-motif overlap that survives red-team.
- OK — dossier's M-11/M-02 magic candidates and M-09 economy candidate are all coherent and well-aimed. The M-04 deco-crush candidate is correctly low-tier. This mod has 3 clear accepted paths (M-11, M-10, M-08) making it a strong 2-pillar target.








