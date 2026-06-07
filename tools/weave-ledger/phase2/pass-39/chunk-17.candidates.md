# Phase 2 candidates — chunk-17

## more_slabs_stairs_and_walls   [anchors: support/deco (1)]
- from: 847 slab/stair/wall cut variants | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create woodworker or stonemason automates bulk slab/stair production on a mechanical saw — the entire palette becomes a belt-fed product, not a hand-shaped one. Implementation is one wildcard saw recipe family (tag-routed per material), not 847 individual entries.
- from: stone/concrete-powder cut variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (deco recycle) is valid but only adds a lossy recycle edge — it doesn't meaningfully advance the loop and is a "plus" only if doing a wholesale deco-family crush pass. Not worth adding in isolation for this mod's cuts.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — pure client-side pause-screen UI button; zero items, blocks, methods, or materials to route through anything. No weave surface.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create Millstone grinds barley and oat into flour — the farmhouse bread chain runs through the mechanical spine; bulk grain production automates naturally on a belt-and-millstone setup. One light step (everyday commodity), appropriate depth.
- from: farm_and_charm:barley / farm_and_charm:oat (seasonal crops) | via: config tie (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: oat and barley are spring/summer crops under Serene Seasons — they can't be harvested in winter, making flour a seasonally scarce commodity that drives trade during cold months. Seasons is listed as a priority lever; adding the grain crops to the season-gate list is a config/KubeJS step.
- from: farm_and_charm flour / butter / eggs (farmhouse staples) | via: minecolonies huts/requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies bakery or cook hut requests farm_and_charm flour and butter as colony provisioning; the farmhouse player becomes the colony's food supplier, tying animal-husbandry output directly to colony growth demand. Colony→food player dependency anchors the mod to the economy pillar.
- from: farm_and_charm ground meat / dried goods | via: farm_and_charm:drying → create:mixing | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: drying-rack output as a mixing intermediate is plausible but the chain is short and survives well inside the food-mod web already; adding a Create mixing step would be busywork (a second M-12 edge on top of the grain milling one). One clear M-12 weave is sufficient for an everyday food mod.
- from: farm_and_charm:butter / animal surplus | via: economy (sell/trade to other players) | motif: M-09 | verdict: REJECT | reason: M-09 is retired — bare sell links are the ambient endpoint of the loop, not a weave. The M-28 colony-route edge above is the real economy anchor.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — behavioral interaction mod only (syncs adjacent matching doors on open); zero items, blocks, or methods. No weave surface.

== CHUNK COMPLETE ==

## immersive_paintings   [anchors: support/deco (1)]
- LEAVE — pure decorative-expression mod (custom-image canvases). Four items, all cosmetic; no material with a coherent system routing. The Exposure compat (photos→paintings) is a downstream link handled by external compat code, not a weave this mod's own methods enable. Forcing a Create frame recipe or economy edge would be busywork.

## create_new_age   [anchors: create (1)]
- from: magic tool/focus (Iron's Spellbooks focus, Ars Nouveau charm) | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic specialist brings their spellbook focus to a player with the electrical infrastructure — the Energiser charges it to unlock a higher-tier casting property. Cross-discipline: electrical energy augments magical equipment. The "service-for-hire" angle (M-33) emerges naturally — not everyone builds a reactor. Depth is mid (the Energiser is a mid-tier Create machine, appropriate for mid-tier magic items).
- from: create_new_age:thorium_ore (regional ore, 2 biome-modifiers) | via: GTMOGS regional ore-gen | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium deposits appear only in certain biomes — a reactor builder who settled the wrong region must trade for Thorium with someone who settled the right one. The nuclear fuel cycle (Thorium→reactor heat→Corium) is region-locked at its fuel source, making every electrical setup dependent on regional Thorium supply.
- from: energised/electrical components (capacitor, charged core) | via: create_new_age:energising → aeronautics recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: an advanced Aeronautics control surface or autopilot module requires an energised core — the electrical tier becomes a prerequisite for the most sophisticated airship electronics. The drivetrain/control chain (M-24) now runs through the electrical spine; no reactor, no flagship-tier ship. Endgame depth is appropriate.
- from: reactor-generated Create heat | via: Create boiler → steam | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: a nuclear boiler array feeds steam into Aeronautics steam engines — the reactor becomes a propulsion power plant for capital-class airships. Endgame fuel supply chain (reactor → heat pipe → boiler → steam → engine); makes nuclear infrastructure the capstone of the aeronautics fuel tier (M-13).
- from: create_new_age:corium (reactor waste) | via: create_new_age:energising or create:mixing | to: create | motif: M-32 | power: endgame | tone: ok | verdict: REJECT | reason: Corium is radioactive reactor waste — while M-32 (byproduct→input) is valid in principle, there is no clearly thematic "next process" in the current palette that consumes Corium as a feedstock. Forcing it into a recipe would be arbitrary. Better left as a hazardous waste item awaiting a coherent sink (possibly M-25 ecological cost when that mechanism lands).

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — pure config-screen generation API library; zero items, blocks, or gameplay mechanics. No weave surface.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create Crusher doubles salt ore yield (crushed salt + byproduct); vanilla furnace path remains as the slow route. Salt becomes a Create-processed commodity — a producer who builds a crushing line extracts more value from each ore. Mid-tier depth (it's a new ore, not endgame; two processing steps max).
- from: expandeddelight:cinnamon (bark/dust) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cinnamon bark → Create Millstone → cinnamon dust; an everyday spice commodity that bulk-farms through the mechanical spine. Light step appropriate for an everyday condiment.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (aged) | via: expandeddelight:cask (maturation) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese must age in a cask before use — time-gated production means a cheese specialist who maintains casks and sells aged wheels. The maturation-as-value-add is the loop's aging axis (M-35); the player who maintains the casks is the aging specialist.
- from: expandeddelight seasonal crops (asparagus, cranberry) | via: config tie (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: asparagus is a spring crop, cranberry a late-autumn harvest under Serene Seasons — seed them into the season config so fresh produce is seasonal, making them intermittently scarce and pulling on the trade loop each season cycle. Supports the seasons-as-scarcity-driver model.
- from: expandeddelight:juicer output (juices/beverages) | via: expandeddelight:juicing → economy | motif: M-09 | verdict: REJECT | reason: M-09 retired — bare "juices are sellable" is ambient loop endpoint, not a weave. The M-35 cheese edge and M-16 seasonal crops are the real 2nd-anchor hooks.

## betterstrongholds   [anchors: survival (1)]
- from: stronghold chest loot (library/hidden-room chests) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the stronghold's ancient library holds arcane tomes and ritual components — seed a unique magic reagent (an attunement shard, binding scroll, or calcified soul) into the hidden-room loot tables so clearing a stronghold is a genuine magic-production input. The "arcane library" framing is inherent to strongholds; this lands as "of course."
- from: stronghold hidden-area chest loot | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a rare "archived blueprint" or "resonance core" from the stronghold's innermost room is the boss-key input for a high-tier Create sequenced-assembly recipe — you can't build the most advanced Create device without raiding an overworld stronghold first. Depth is appropriate (endgame item, single occurrence per stronghold).
- from: stronghold loot | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: strongholds are deadly — a combat specialist clears the rooms and sells the rare arcane drops (from the M-02 seed) to magic specialists who lack the gear to go themselves. The cleared stronghold then functions as a combat-supply node feeding the magic production route.
- (note) dossier recommended LEAVE — overridden per briefing rule: loot=yes structure mods are not LEAVE candidates; loot-seed is the delivery mechanism.

## irons_lib   [anchors: support/library (1)]
- LEAVE — framework library for Iron's Spellbooks; bundled content (transmog table, player statue) is cosmetic/UI-only with no routable material processing. No weave surface.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- LEAVE — pure cosmetic permutation layer (16 dye-color variants of levitite/tires). Consumes only vanilla dye + base aeronautics parts; no foreign method or material with a coherent second-system routing. Forcing a Create mixing or economy edge would be busywork, not a loop-advancing weave. Decoration palette within aeronautics is a sanctioned support role.

## chefsdelight   [anchors: survival, economy (2)]
- REWORK: the "economy" anchor is villager emerald trades (Cook/Chef NPC) — this is structurally equivalent to the cut M-21 (NPC trade-seam to economy). It's not a player-run economy hook. The anchor label is generous; the real economy contribution is the village cook structure as exploration content rather than a player-economy mechanism.
- from: Cook/Chef village structures (exploration content) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the village cook structures are dangerous enough to be worth clearing — a combat specialist raids the cook's stores (stocked larder chests, unique recipe books) and sells the haul to non-combat players. The structure itself becomes a combat-supply node, reinforcing the survival/danger face rather than an NPC faucet.
- from: farmersdelight meals sold by Cook/Chef | via: economy (NPC trade) | motif: M-21 | verdict: REJECT | reason: M-21 is cut — NPC→coin/emerald trade is an NPC faucet, not player-run economy. The village Cook selling food for emeralds does not constitute a player-economy weave.

## mcwfences   [anchors: support/deco (1)]
- from: wooden fence/gate variants (picket/stockade/horse/wired) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create saw cuts planks into Macaw's fence variants at scale — mass-producing fencing for colony enclosures or farm borders becomes a Create production task, not a hand-craft grind. Same family-pass logic as mcwdoors; tag-routed by wood type.
- from: metal fence variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same as mcwdoors — the lossy recycle edge is valid but weak in isolation; only worth adding as part of a wholesale Macaw's-family crush pass.

## ichunutil   [anchors: support/library (1)]
- LEAVE — zero-content shared-class library for iChun's mods; 0 items, 0 blocks, no gameplay mechanics. No weave surface.

## mcwdoors   [anchors: support/deco (1)]
- from: wooden door variants (barn/cottage/stable/etc.) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create saw mills planks into Macaw's wooden door variants — a carpenter automates the full door palette on a belt, turning decorative choices into production-line decisions. One light step for an everyday commodity; appropriate depth.
- from: iron/metal door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 lossy recycle is a weak edge even when valid — adds a small recycling loop but doesn't advance the loop. Only worth doing as part of a wholesale Macaw's-family deco crush pass, not as a standalone weave for this mod.

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — datapack-only; re-enables vanilla bundle crafting with vanilla leather/string. Zero new items or blocks; no foreign material surface to route through any method.

## knightlib   [anchors: support/library (1)]
- LEAVE — shared library for Knight Quest; the bundled content items (great_chalice, grails, essences, homunculus) are inert without Knight Quest, which is not in this pack. Dossier explicitly flags "do not weave dead items." No weave surface.

## pantographsandwires   [anchors: create, aeronautics (2)]
- OK — connections sound. Deep Create integration (6 inbound recipe types including sequenced_assembly); aeronautics anchor is genuine (pantographs are the electric-train overhead-line system). Coal_coke/graphite tags noted as potential shared-material nodes for other mods but no coherent new motif weave arises (both pantographs and TFMG produce coal_coke; no mod in the palette consumes it distinctively). No REWORK.

## sliceanddice   [anchors: create, survival (2)]
- OK — connections sound. The Slicer is a kinetic Create block running farmersdelight:cutting; cooking-pot recipes become create:mixing. Both anchors are mechanically load-bearing. No new weave needed; no REWORK on existing connections.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: galleon/fortress chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sunken ships carry cursed relics — seed a rare alchemical reagent (e.g. cursed sea-crystal, seabed chalk) into galleon loot tables so oceanic exploration feeds Occultism rituals or Ars Nouveau imbuement. Players must dive ruins to source the reagent, tying ocean danger to magic production.
- from: galleon/fortress chest loot | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the captain's strong-room in a galleon holds a salvaged navigation core (one-per-structure, rare) that is the boss-key input for a Create Aeronautics advanced navigation/control recipe — you can't build a ship's autopilot without raiding a sunken one first. Thematic "of course": you learn aeronautics navigation from recovered maritime instruments.
- from: galleon/fortress chest loot | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: galleons are dangerous PvPvE targets — a combat specialist clears them and sells the rare salvage (reagents, navigational parts) to crafters who can't brave the ocean. Seeds the combat-supply loop for nautical expeditions.
- from: galleon/fortress chest loot | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: seeding already-minted Numismatics coins into a loot chest is a passive coin faucet — contradicts the player-minted currency ruling. Mintable ore ingots could substitute, but that's just seeding vanilla ore, not a distinct weave. The M-15/M-02 seeds above are the real hooks.

