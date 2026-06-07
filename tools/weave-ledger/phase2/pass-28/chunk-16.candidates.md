# Phase 2 candidates — chunk-16

## towntalk   [anchors: support/curated-flavor (1)]
- LEAVE — zero items, zero methods, zero loot. Pure audio cosmetic layer riding on MineColonies. No independent material surface to weave through any method.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril veins run deep — the crushing wheel doubles your yield before the blast furnace, the same way every useful ore should pass through Create first
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane essence and source gems are the two faces of the same magic currency; bonding them lets the Ars and Iron's specialists exchange value without going through mundane barter
- from: irons_spellbooks mob drops (apothecarist, ice_spider, blood_cauldron ingredients) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: spirit-fire is the ritual that reads the resonance of a fallen creature and distills it into something an Occultism player can use — themed reagents from Iron's encounter mobs become Occultism inputs
- from: irons_spellbooks:arcane_essence | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: an Ars mage needs to supply source gems to an Iron's alchemist to brew certain high-tier potions, creating a genuine cross-route dependency between the two magic specialists
- from: irons_spellbooks boss loot (boss-tagged items in loot=yes tables) | via: loot-seed | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: combat specialists farm Iron's boss encounters for signature drops that non-combat magic players must trade for; the supply side of the boss dual-role
- from: irons_spellbooks:scroll (one-shot consumable scrolls) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a high-tier blank arcane scroll is assembled through a multi-stage Create chain before the Inscription Table can write a spell onto it — endgame scrolls cost real fabrication
- from: irons_spellbooks:mithril_ore regional distribution | via: GTMOGS ore-gen config | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril only generates in certain deep-region strata, so only mages who settled near those zones have it; everyone else must trade for it or send an Occultism miner
- REWORK: existing Create anchor is solid (alchemist cauldron uses create:emptying/filling). OK — connections sound.

## trashslot   [anchors: support/QoL-client (1)]
- LEAVE — pure inventory UI mod; no items, no loot, no methods. Zero content surface; genuine zero-surface QoL.

## create_hypertube   [anchors: Create, aeronautics (2)]
- from: create_hypertube tube network | via: conceptual | to: economy | motif: M-31 | power: mid | tone: ok | verdict: REJECT | reason: hypertubes move *players*, not item-bulk goods — M-31 is for logistics of bulk matter requiring the aeronautics arm; player transit doesn't qualify. The transport is real but the motif doesn't apply.
- from: create_hypertube:hypertube_entrance (crafted via create:sequenced_assembly) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: already captured in the existing Create anchor (the dossier notes crafted via sequenced_assembly and the made-by inbound is create:sequenced_assembly). Not a new weave — existing anchor covers it.
- OK — connections sound. Two clear anchors (Create + aeronautics as player-logistics); no forced 3rd edge available.

## vinery   [anchors: survival (1)]
- from: vinery wines / ciders (effect-bearing consumable drinks) | via: vinery:wine_fermentation → consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: wines grant effects and are consumed; demand never zeroes out — wine production is a continuous pressure-relief and a recurring demand sink on the fruit-farming chain
- from: vinery grapes / apple_mash | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create pressing wheel extracts grape juice from whole grapes or presses apple mash into cider concentrate — the industrial-scale winery route, routing Vinery's raw fruit into Create's processing web before fermentation
- from: vinery wines (high-value finished consumable) | via: colony supply-request / MineColonies tavern | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies tavern keeper requests wine/cider from a vineyard player to keep colonists happy — colony demand gates wine production into a real supply chain, not just personal stash
- from: vinery:chorus_wine (uses Chorus fruit — End material) | via: vinery:wine_fermentation | to: survival | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: M-16 is season-gated (Serene Seasons); chorus fruit is biome/dimension-gated, not season-gated. Different mechanic — no matching motif. Mark no-motif and reject.
- from: vinery wines (luxury, effect-bearing) | via: "sellable" bare link | to: economy | motif: bare sell | verdict: REJECT | reason: "wines are sellable" is the ambient endpoint, not a weave. Rejected per economy-is-player-run ruling. The M-28 colony-demand route above is the valid economy link.
- from: vinery:apple_press / fermentation_barrel deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a used or surplus press/barrel crushes back to planks and scrap metal via Create, recovering some material — the standard deco-recycle loop tying Vinery's craft furniture into Create's material flow
- REWORK: dossier candidate for M-09 (luxury→coin) — RETIRED motif; correctly rejected above. The dossier's existing 1-anchor state needs the M-12 + M-26 weaves to reach the 2-pillar floor.

## shulkerboxtooltip   [anchors: support/QoL-client (1)]
- LEAVE — pure client tooltip renderer; zero items, zero blocks, zero loot, no methods. Genuine zero-surface client utility.

## collective   [anchors: support/library (1)]
- LEAVE — pure code library (Serilum shared event hooks); zero player-facing content, zero loot, no methods. Genuine zero-surface library.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- from: Ender Dragon encounter (loot=yes, boss behavior) | via: loot-seed | to: survival + economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: EDF makes the Dragon a multi-phase combat challenge; seeding a unique boss-drop (e.g. dragon-phase material) into its loot tables gives combat specialists a drop to trade with non-combat players — the supplier side of the boss dual-role
- from: EDF dragon loot | via: loot-seed (dragon_key component) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dragon-phase shard from the harder fight gates a high-tier Create/tech recipe; the tougher encounter earns access to something a tech player can't skip past
- from: EDF dragon loot | via: loot-seed (reagent drop) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dragon-flame reagent dropped only from the enraged phase feeds an Ars Nouveau imbuement or Occultism ritual — exclusive to those who beat the enhanced encounter
- REWORK: dossier says "leave — no items, doesn't touch drop table." That's wrong — loot=yes is confirmed in AUTO-DIGEST-FACTS (counts: loot=yes). The mod's loot tables exist and are seedable via Phase-3 datapack edits; the LEAVE recommendation in the dossier 2nd-anchor section should be revised. Three loot-seed candidates accepted above.

## railways   [anchors: Create, aeronautics (2)]
- from: railways:locometal (bulk deco/structural blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: surplus locometal panels and boiler blocks crush back to scrap iron and zinc dust — the standard Create deco-recycle loop; keeps locometal from being a dead sink
- from: railways conductor + train logistics | via: service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a train-specialist player runs cargo routes for others — the conductor as a logistics service, payment emergent between players rather than from a vendor
- from: railways:locometal building set (bulk structural) | via: aeronautics construction | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: locometal is a deco/building palette, not a load-bearing structural alloy engineered for flight; forcing it into airframe recipes is a tone clash (train boiler steel ≠ airship hull spec) and the dossier offers no thematic route there. Reject; M-23 is served better by TFMG steel.
- OK — existing Create + aeronautics anchors are well-grounded. M-04 and M-33 add depth without forcing.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel / gasoline / LPG (distillation products) | via: TFMG combustion engine → aeronautics intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: ship captains need refined fuel and the only way to make diesel at scale is through TFMG's distillation tower — the fuel supply line from the industrial tier to the aeronautics arm
- from: tfmg:steel_ingot / steel_plate (fabricated structural metal) | via: aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: airframes and ship hulls need fabricated steel, not raw iron — TFMG's blast-furnace steel becomes the structural wall between "I have iron" and "I can fly"
- from: tfmg:aluminum (lightweight alloy) | via: aeronautics control surface recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: ailerons, rudders, and control surfaces are machined aluminum — a mid-weight material from TFMG's bauxite→aluminum chain gates the drivetrain side of shipbuilding
- from: tfmg:constantan / nickel / lead (rare regional metals) | via: GTMOGS ore-gen | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: nickel and lead only generate in certain regions; a player who settled far from TFMG's heavy-metal deposits has to trade for them, making the industrial tier a regional specialization, not a universal upgrade
- from: tfmg:coal_coke (coking byproduct) | via: create:compacting or tfmg:industrial_blasting feedstock | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: coal coke is a byproduct of the coking tower and a more efficient blast-furnace fuel; routing it back as an input to further processing turns industrial waste into a productive feedstock
- from: tfmg:diesel / gasoline | via: "sellable luxury fuel" bare link | to: economy | motif: bare sell | verdict: REJECT | reason: "fuel is valuable and sellable" is the ambient endpoint. The M-13 aeronautics-demand link is the valid gating-demand route; bare sell rejected per economy-is-player-run ruling.
- from: tfmg electricity grid (FE) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: an Iron's Spellbooks mage with power-hungry foci can tap TFMG's voltage grid via Create Addition's charging station — the electric tier weaves into magic gear without a forced recipe
- REWORK: dossier 2nd-anchor candidate for M-06 (sequenced-assembly keystone for engines) — that's an existing Create recipe type, not a new anchor. The real new anchors are aeronautics (M-13/M-23/M-24) and economy-via-scarcity (M-30). Dossier's M-08 coin candidate should be rejected as bare-sell; M-30 is the valid economy weave.

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs tile/chair deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: andesite/calcite/deepslate tile variants and wooden chairs crush back to crushed stone or planks via Create — the standard recycle loop keeps deco from being a terminal sink
- OK — existing Create + survival anchors are sound. The M-04 deco-recycle is a depth-add, not a new anchor (mod is already at 2). No forced 3rd edge.

## dtterralith   [anchors: survival/worldgen-compat (1)]
- from: dtterralith exotic wood logs (jacaranda, kapok, cedar, maple, etc.) | via: create:milling or farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith's biome-specific trees produce distinctive logs that a lumber-specialist routes through Create's saw or Farmer's Delight's cutting board into unique planks and wood pulp — giving the biome diversity a downstream production use
- from: dtterralith region-specific tree species | via: worldgen distribution | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: jacaranda and kapok only grow in specific Terralith biomes; players who settled elsewhere must trade for those planks, tying biome-diversity directly to regional scarcity
- REWORK: dossier says "leave — log output reaches Create/cooking webs as vanilla wood." That undersells it: dtterralith logs are *distinct* items (dtterralith:jacaranda, kapok, etc.), not vanilla oak/spruce, so they can carry their own processing recipes and a regional-scarcity tag. The LEAVE recommendation in the dossier 2nd-anchor section should be revised.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an undead-type eye is transmuted through a spirit ritual using undead mob drops as reagents — a costly craft path for a stuck explorer that routes through magic rather than trivializing the exploration lock
- from: endrem:guardian_eye | via: occultism:ritual (water/guardian reagents) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ritual spirit-fire reading a guardian's essence produces the guardian eye — themed, costly, and keeps the Occultism specialist relevant for End-access gating
- from: endrem eyes (rarest: cryptic_eye, lost_eye) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the mod's whole purpose is *exploration gating* — adding a craft route for the hardest eyes via sequenced_assembly directly undermines the design intent. One or two eyes with ritual transmutes (M-11) is the right depth; the rarest ones must stay exploration-only. Reject M-06 here to defend the exploration lock.
- from: endrem loot (loot=yes) | via: loot-seed (magic reagent in eye-source chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Ars source-fragments or Occultism spirit-essence into the Eye-bearing structure loot tables ties magic reagent acquisition to the same exploration web as the eyes, so the mage and the explorer need each other
- REWORK: dossier 2nd-anchor for M-11 is already listed as a candidate — agree with the assessment. M-06 is correctly flagged as risky; we reject it above for the reason stated.

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — pure server behavior datapack (sleep-percentage quorum tweak); zero items, zero loot, no methods. Genuine zero-surface infrastructure mod.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:fish_skin (leather substitute) | via: create:pressing or farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish skin off the mechanical peeler is pressed or cut into panels that substitute for leather in armor/item recipes — the Create processing chain turns a fishing byproduct into a real crafting material
- from: createfisheryindustry seafood dishes (chowder, soups, steaks) | via: consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: cooked seafood dishes are consumed against hunger and diet-variety pressure; the fishing operation produces a continuous demand-renewing food stream rather than stockpileable surplus
- from: createfisheryindustry seafood (high-protein processed food) | via: colony supply-request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies cook's hut requests seafood/fish fillets; a fisher-specialist player supplies the colony, making seafood a genuine colony-demand item rather than personal food
- from: createfisheryindustry:harpoon / harpoon_gun | via: combat → boss encounter | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: harpoons are weapons but there's no boss specifically tied to harpoon drops; the link to M-34 is not grounded — it's a thematic stretch, not a method-pull. Reject.
- from: createfisheryindustry seafood "sellable luxury" | via: bare sell | to: economy | motif: bare sell | verdict: REJECT | reason: dossier candidate for M-09 luxury→coin is a retired motif. The M-28 colony-demand route is the valid economy link. Bare-sell rejected.
- OK — existing Create + survival anchors are sound. M-12/M-26/M-28 deepen the connections; economy now has a valid demand-gating link via M-28.

## txnilib   [anchors: support/library (1)]
- LEAVE — pure developer code library; zero player-facing content, zero loot, no methods. Genuine zero-surface library.

## modelfix   [anchors: support/performance-bugfix (1)]
- LEAVE — pure client rendering patch; no items, no loot, no methods. Genuine zero-surface performance mod.

## cubes_without_borders   [anchors: support/client-QoL (1)]
- LEAVE — client-only display option (borderless fullscreen); no items, no world content. Genuine zero-surface client utility.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure config API library; zero player-facing content, zero loot, no methods. Genuine zero-surface library.

## dynamic_fps   [anchors: support/performance-client (1)]
- LEAVE — client-side FPS throttler for unfocused window; no items, no world effect. Genuine zero-surface performance mod.

== CHUNK COMPLETE ==
