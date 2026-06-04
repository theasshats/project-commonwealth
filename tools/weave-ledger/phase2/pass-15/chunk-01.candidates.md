# Phase 2 candidates — chunk-01

## dataanchor   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Data-attachment/networking plumbing with no player-facing surface to route anything through.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The Crab's prized claw — already a brewing ingredient for reach — is a natural arcane catalyst; feeding it to the enchanting apparatus makes the magic web reward exploration/combat for something players already fight crabs to get.
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Duplicates the M-02 slot above; having both imbuement AND spirit_fire consume crab_claw is redundant. The Ars path (M-02) is the cleaner fit given the claw's existing brewing identity. Keep one.
- from: friendsandfoes:copper_golem_head / copper_button variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Copper-themed decorative blocks recycling back to copper nuggets/scrap via the Crushing Wheel; vanilla-logic (copper is copper) and keeps deco from being a dead-end material sink.
- from: hostile mob drops (Wildfire / Illusioner loot) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire and Illusioner are unusual vanilla-variant hostiles; their drops (fire-suffused / illusion-linked) read naturally as exotic magic reagents. Route them into occultism rituals or ars imbuement — combat earns you something the magic web wants.
- from: friendsandfoes:buttercup (Moobloom flower) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Buttercup is a simple floral block/item with no unusual properties beyond Moobloom flavor. Forcing it into imbuement is an arbitrary "flower = magic ingredient" edge that fails the theme-fit test — a player would not instinctively nod at it. No motif survives the red-team.
- REWORK: dossier flags the copper-deco M-04 candidate as [WEAK]. The flag is correct that it is a light touch, but M-04 is explicitly designed for exactly this (deco metals → crush → raw material); it is not weak by the standard of M-04 — it is an appropriate scope for everyday deco. Recommend removing the WEAK label and accepting as-is.

## bettermodsbutton   [anchors: support/client-UI (1)]
- LEAVE — genuine zero-content UI mod: 0 blocks, 0 items, loot=no. Adds a pause-screen button only; no material surface and no gameplay hook.

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Config framework API only; no player-facing material or behavior to route.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Config definition/loading API; nothing to route.

## moogs_structures   [anchors: support/library (1)]
- LEAVE — genuine zero-content worldgen library: 0 blocks, 0 items, loot=no. Pure structure-generation framework consumed by dependent mods; no standalone items, loot tables, or gameplay. (Note: this is the *library*; the actual structure mods it powers should be evaluated individually in their own dossiers for loot-seed candidates under M-14/M-15.)

## bigsignwriter   [anchors: support/client-UI (1)]
- LEAVE — genuine zero-content UI mod: 0 blocks, 0 items, loot=no. Sign-text rendering tweak; no gameplay surface.

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — genuine zero-content UI mod: 0 blocks, 0 items, loot=no. Tooltip-display-only; reads existing tool stats and prints them, ships nothing.

## l2library   [anchors: support/library (1)]
- LEAVE — genuine zero-content library: 0 blocks, 0 items, loot=no. Attribute/Curios-tab API for LightLand mods; no standalone content.

## bcc   [anchors: support/QoL-ops (1)]
- LEAVE — genuine zero-content operational mod: 0 blocks, 0 items, loot=no. Version-handshake utility; no gameplay surface whatsoever.

== CHUNK COMPLETE ==
