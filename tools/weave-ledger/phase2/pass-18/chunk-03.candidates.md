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

## aeronauticscompat   [anchors: aeronautics/support (1)]

LEAVE — genuine zero-content behavior-patch mod. Required ship-compat glue (per CLAUDE.md, must stay). No items, no methods, no recipe surface. The weaving happens in the mods it patches (Aeronautics, Sable, etc.); this is plumbing only.

## sable   [anchors: support/library (1)]

LEAVE — genuine zero-content physics-engine library. The sub-level backend for Aeronautics; registers no items, no methods, no recipes. Weaving belongs in the mods that build on it (Aeronautics). Nothing here to route a material through.

## immersive_paintings   [anchors: decoration/support (1)]

Power-read: produces painting/graffiti/glow-painting canvases from vanilla materials; no exotic inputs. Items are everyday decoration with no processing methods. The mod's value is player-expression and gallery aesthetics.

Candidate 1 — glow_painting as a shop good / luxury deco item → economy (M-09)
- from: immersive_paintings:glow_painting (custom player art) | via: numismatics sell / Trading Floor stall | to: economy | motif: M-09 | power: everyday | tone: clash — M-09 requires "high-effort consumable (wine, cheese, processed crop)" as a luxury good. A custom painting is decorative but not a consumable and not processed through a machine. The hook "sell art for coin" is thematically coherent for a player-run economy, but M-09 is anchored to processed food/drink; art is orthogonal. | verdict: REJECT | reason: M-09 is the processed-consumable-to-coin motif; paintings are not processed consumables. No motif cleanly covers "sell crafted deco items" — M-21 (villager trade→economy) is provisional and leans no. Forcing an economy edge via a no-motif route is disallowed.

Candidate 2 — paint frames via Create pressing → copycat-styled picture frames (M-04 / M-20)
- from: immersive_paintings:painting (frame craft) | via: create:pressing / item_application | to: create | motif: M-20 | power: everyday | tone: clash — applying a painting item onto a panel via deployer to "hang" it is a reach; the painting already crafts from vanilla wood/string. No "of course" here — it's an arbitrary step added to a vanilla-style craft. | verdict: REJECT | reason: no thematic coherence; the craft is already vanilla, adding Create pressing is busywork, not depth. No surviving motif.

LEAVE — pure decorative-expression mod. The dossier conclusion holds: no material with a coherent Create/magic/economy routing. Noted: has explicit Exposure compat but Exposure is a separate mod; if a joint weave between the two is desired it belongs on the Exposure dossier.

## createaddoncompatibility   [anchors: support/library (1)]

LEAVE — genuine zero-content compat-unification layer. Drives Almost Unified tag priorities; no items, no player-facing content, no recipe methods of its own (the one tfmg:distillation recipe it ships is a plumbing fix, not a weave). Caution noted in dossier: verify it never mis-merges galosphere palladium as silver (per CLAUDE.md).

## occultengineering   [anchors: create, magic (2)]

Power-read: this is the canonical Create×Occultism bridge mod — mechanical pulverizer, fan-enspiriting, phlogiports, spirit_solution intermediate. Solidly mid-to-endgame (automated occult rituals are deep progression). Already a well-woven 2-pillar mod by construction.

Existing connection check: create (uses create:compacting/filling/haunting/item_application/mixing/pressing) + magic (occultism:ritual/spirit_fire). Both pillars are tight and well-motivated. OK.

New candidate — sterling silver (c:ingots/sterling_silver, a unique occult alloy) → Create processing → Numismatics coin minting (M-08)
- from: occultengineering:sterling_silver (unique occult alloy, mid-tier) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — sterling silver is an occult-flavored alloy with no vanilla analogue; pressing it into a distinctive coin makes it the "occult currency" that bridges magic production into the coin economy. A magic specialist with an occult smelter becomes the pack's silver-coin supplier. | verdict: ACCEPT | hook: the only way to mint sterling-silver coin is to run OccultEngineering's alloy through the Create press — magic's unique material becomes a premium coin stock.

New candidate — phlogiport (wireless item logistics) → aeronautics logistics (M-18/aeronautics)
- from: occultengineering:phlogiport (address-based wireless teleport logistics) | via: spirit_trade / phlogiport deployment on ships | to: aeronautics | motif: M-18 | power: mid | tone: ok — a phlogiport mounted on an airship hull would let the ship receive/send cargo without docking; an occult logistics node that works aboard Sable contraptions | verdict: REJECT | reason: this is an emergent compat question (does phlogiport work on moving contraptions?) rather than a recipe weave; it's a runtime behavior, not a design weave we can propose as a Phase-3 action. Also M-18 is specifically "summoned-spirit logistics" — phlogiports aren't spirit-summoned, they're arcane teleporters. The motif fit is loose.

Dossier's own weak candidate — sterling_silver → numismatics mint — is accepted above (M-08). The REWORK flag from the dossier ("WEAK — M-08") is resolved: the candidate survives red-team and becomes a proper ACCEPT.

REWORK: none. Existing Create+magic anchors are tight and well-grounded. M-08 sterling-silver minting adds a third anchor (economy) that the dossier flagged as weak — power-read confirms it's viable at mid tier.

## everycomp   [anchors: support/decoration (1)]

LEAVE — runtime block/asset/recipe generator; no content of its own. Its outputs live in the host mods' namespaces (Create, Macaw, etc.) — any weaving belongs on those host mods. Nothing to route here.


