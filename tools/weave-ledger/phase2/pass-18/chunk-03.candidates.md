# Phase 2 candidates — chunk-03

## betterbiomereblend   [anchors: support/performance (1)]

LEAVE — genuine zero-content performance mod; client-side color-blend engine only, no items, no methods, no material surface. Nothing to weave.

## copycats   [anchors: create (2 — already create-pillar deco)]

Power-read: copycats shapes are made from Create zinc (everyday Create material) at the stonecutter; blank shapes cost trivial materials, and the skin is any existing block. The blocks themselves are Create-flavored architectural decoration — not endgame, not standalone. They are the Create builder's palette extension.

Candidate 1 — Create zinc → copycat shapes → aeronautics hull cladding (M-23)
- from: copycats:copycat_panel / copycats:copycat_slope | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: everyday | tone: ok — copycat panels as the "hull cladding" on airship hulls is an entirely sensible build pattern; players already use them for ship appearance | verdict: ACCEPT | hook: hull aesthetics that stay modular — skin the frame in any block texture while keeping the structural panel shape; makes the ship look like what it is.

Red-team: is this a recipe weave or emergent play? Aeronautics is a build mod — players will naturally use copycats on ships. But M-23 is specifically about requiring fabricated structural parts as build ingredients for airframes. Copycat panels are cosmetic, not structural load-bearing. Using them as an *optional* cosmetic skin on a ship doesn't advance the loop. Using them as a *required* airframe ingredient would be arbitrary (a zinc-dipped panel is not structurally distinctive from a plain zinc plate). Verdict: REJECT. The natural play is emergent (players skin ships with copycats without a recipe mandate), and forcing a recipe requirement would be busywork with no thematic "of course" — the panel is not structurally special compared to a raw zinc block.

- from: copycats:copycat_panel | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash — the panel is cosmetic, not structural; requiring it in airframe recipes is busywork | verdict: REJECT | reason: cosmetic purpose does not justify M-23 structural gating; emergent use is already the right form.

Candidate 2 — copycat shapes as Create deco → M-04 crushing recycle
- from: copycats:copycat_* (any zinc-based shape) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — zinc-derivative blocks crushing back to zinc gravel + XP is the standard M-04 pattern | verdict: REJECT | reason: M-04 is for decorative blocks that need a Return-to-resource path; copycats already unmake correctly (placing blank + wrench yields the zinc back per Create conventions). Adding a crush recipe would be redundant plumbing, not a new connection.

OK — connections sound. Copycats is cleanly Create-anchored (zinc-built, Create-dependent decoration). No coherent 2nd-pillar edge survives red-team; the dossier's own conclusion ("a second hard pillar would be a forced edge") holds. One-system mod; flag as a candidate for a lightweight economy weave at a later pass if needed — e.g. M-09 (luxury zinc-worked shapes as buildable goods), but that requires a Trade Floor / shop context not yet in scope.

## appleskin   [anchors: support/UI (1)]

LEAVE — zero-content HUD mod; displays food restoration/saturation values that already exist in the game. No items, no methods, no material surface. The only "connection" it has is thematic adjacency to the food/diet system (it pairs naturally with appleseed and Farmer's Delight), but there is nothing to route a material through. A forced recipe edge would be meaningless.

## bettercombat   [anchors: support/combat framework (1)]

LEAVE — pure behavior-framework mod. Adds no items/blocks/methods; it redefines combat feel through JSON weapon movesets. No material to route; the weave surface is combat weapon items themselves, but those belong to the mods that register weapons (Ars, Iron's, Cataclysm, etc.) — Better Combat is the delivery vehicle, not the material. Nothing to weave here.

## durabilitytooltip   [anchors: support/UI (1)]

LEAVE — genuine zero-content client UI mod; numeric tooltip overlay, no items, no methods, no processing. Nothing to weave.

## sliceanddice   [anchors: create, survival (2)]

Power-read: the Slicer is a kinetic automation machine for every Farmer's Delight cutting-board recipe; the Sprinkler distributes fluids (water/lava/modded) over crops. This is solidly everyday-to-mid tier — it's glue infrastructure, not an endgame unlock. Its role is to make kitchen automation scale through Create shaft/belt infrastructure.

Existing connection check: create (Slicer runs FD cutting via Create power, heat-mixing for FD cooking) + survival (Farmer's Delight food layer). Both well-motivated. This is already a model M-12 bridge. OK — connections sound for the existing 2-pillar read.

Candidate — Sprinkler with magic fluid → seasonal plant growth (M-16)
- from: sliceanddice:sprinkler (fluid distributor mechanic) | via: config tie / modded fluid | to: magic | motif: M-16 | power: everyday | tone: ok — if Ars Nouveau's potion-of-growth fluid or an Occultism fluid can be piped through a Sprinkler, it becomes a Create-piped magical crop accelerant | verdict: REJECT | reason: this is a config/mod-interaction question rather than a new weave we can propose — Sprinkler's modded-fluid behavior depends on whether those fluids have registered growing effects; it's emergent compat, not a design weave. No "of course" recipe hook to write.

Candidate — Slicer + mushrooms → processed mushroom goods → economy sell (M-09/M-12)
- from: mushroomquest mushrooms | via: farmersdelight:cutting (through sliceanddice:slicer) + numismatics sell | to: economy | motif: M-12 then M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this is a mushroomquest + economy weave that sliceanddice merely facilitates; the candidate belongs on mushroomquest (where it is already flagged), not on sliceanddice itself. Routing it here would be double-counting the connection.

OK — connections sound. The 2-pillar Create+survival anchor is tight and correct. No additional weave needed here; the automation role is the point.



