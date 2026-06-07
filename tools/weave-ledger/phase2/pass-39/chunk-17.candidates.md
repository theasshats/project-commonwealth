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

