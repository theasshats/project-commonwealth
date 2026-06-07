# Phase 2 candidates — chunk-13 (pass-31, blind)

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — pure client camera/movement mod; no items, blocks, or material graph. Zero content surface.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: tweaked controller craft | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the advanced controller is built through Create parts (precision mechanism + electron tubes), already native — formalize as a Create-gated control device.
- from: controller | via: numismatics sell | to: economy | verdict: REJECT | reason: bare sell link; no demand-gate. Control device is a one-time craft, no consumption/scarcity hook.
- REWORK: existing aeronautics anchor is sound — it is a genuine control surface for contraptions/vehicles (M-24-adjacent). OK — connections sound. Its Create-part craft is the natural 2nd weave (above), no rework needed.

## mcwwindows   [anchors: support/decoration (1)]
- from: stone parapet/arrow-slit/mosaic variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone window deco crushes back to gravel/raw + xp nugget (lossy recycle), same as the rest of the deco family.
- from: mosaic glass | via: regional dye scarcity | to: economy | verdict: REJECT | reason: dyed glass is everyday/cheap; no coherent demand-gate, and forcing it would gate a basic deco block. Decoration is a sanctioned support anchor — only weave in a wholesale deco-family pass.

## vc_gliders   [anchors: aeronautics (1)]
- from: higher glider tiers (diamond/netherite) + reinforced paper | via: create:pressing / mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: top-tier flight gear is assembled through Create sheets/parts, threading personal-flight into the tech spine (scale depth to tier; leave iron tier light).
- from: reinforced-paper feedstock | via: create:milling (pulp) | to: survival/create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: paper is a basic input; gating the everyday feedstock through milling risks gating a basic component (guardrail). Keep the weave at the higher-tier item, not the feedstock.
- REWORK: aeronautics anchor sound (it is personal traversal/flight gear). OK — connections sound.

## dragonlib   [anchors: support/library (1)]
- LEAVE — code library (GUI/networking/multiloader API); lone dragonlib:dragon block is a dev/test artifact, not player content. Genuine zero-surface library.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — pure config-screen API; no items, blocks, or methods. Genuine zero-surface library.

## trashslot   [anchors: support/QoL (1)]
- LEAVE — client inventory UI (trash slot); no items, blocks, or material graph. Genuine zero-surface QoL mod.

## dndesires   [anchors: create (1, deep)]
- from: crops/drops (foreign belt-fed items) | via: dndesires:freezing/seething/sanding fan recipes | to: survival/create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: its catalyst-sail fan processing is a strong foreign-material sink — route survival crops/mob drops through freezing/seething as a prep step into the food/processing web.
- from: rubber + processed intermediates | via: create:* → cross-route recipe input | to: create/production | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber is a Create-native intermediate; make it a required input in another route's recipe (or a magic chain) so the producer isn't self-sufficient.
- from: hydraulic press / cog motors | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: its extra kinetic motors/mechanisms feed Aeronautics propulsion/control as drivetrain components.
- from: milkshake foods | via: native eat | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: food's demand is ambient (M-27 rationale — no motif for diet-demand); the milkshakes are already covered by the M-12 processing route above.
- from: rubber | via: mint for coin | to: economy | verdict: REJECT | reason: bare sell link; economy must gate demand. The M-29 cross-route use above is the real demand-gate.
- REWORK: Create anchor is deep and sound (native fan/press methods + Create-part crafts). OK — connections sound.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: structure chest loot tables | via: loot-seed | to: economy/magic | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seed combat-route/exploration rewards (magic reagents, boss-tier components, region markers) into its rarer structures so exploration feeds the producer/economy routes — a datapack loot edit, not a recipe.
- from: structures | via: regional ore/material gating | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: Trek places structures, not ore-gen; regional scarcity is GTMOGS's lever, not loot tables. No coherent route.
- REWORK: survival/exploration anchor sound. OK — connections sound (loot-seed above is the 2nd weave).

## dataanchor   [anchors: support/library (1)]
- LEAVE — developer data-attachment/networking library; no items, blocks, or methods. Genuine zero-surface library.

## bigsignwriter   [anchors: support (1)]
- LEAVE — client sign-editing UI utility; no items, blocks, or material graph. Genuine zero-surface QoL mod.

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick/terracotta roof variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: mineral roof variants crush back to gravel/raw + xp nugget (lossy recycle) as part of a wholesale deco-family crush pass; 600+ blocks make per-block authoring low-value, so do it tag-wide if at all.
- from: roof blocks | via: economy demand-gate | to: economy | verdict: REJECT | reason: bulk vanilla-material deco; no demand-gate, bare-sell only. Decoration is a sanctioned support anchor.

## spyglass_improvements   [anchors: support/QoL (1)]
- LEAVE — client-only spyglass zoom/overlay tweak; no items, blocks, or material graph. Genuine zero-surface QoL mod.

## blockui   [anchors: support/library (1)]
- LEAVE — XML UI framework (MineColonies/Structurize dependency); no items, blocks, or methods. Genuine zero-surface library.

## create_hypertube   [anchors: create, aeronautics (2)]
- from: hypertube blocks craft | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: tubes are already built through sequenced assembly from Create parts — sound native chain; no new edge needed.
- from: short-hop personnel transport | via: aeronautics/logistics role | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: it is the short-hop transit complement to trains/airships, the logistics arm's last-mile mover.
- from: tube network | via: regional scarcity for tube material | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: already ≥2 anchors via native Create+logistics; gating tube material on a region would just tax basic logistics infra. No coherent demand-gate.
- REWORK: Create + aeronautics anchors both sound (sequenced-assembly craft is genuine; entity transport is real logistics). OK — connections sound.

## createfisheryindustry   [anchors: create, survival (2)]
- from: fish (raw cod/salmon) | via: createfisheryindustry:peeling + farmersdelight:cooking | to: survival/create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: kinetic peeling + cooking turns raw catch into skins/steaks/dishes — sound processing chain (already inbound-woven).
- from: seafood chowder/soups | via: colony food request / consumption | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort processed seafood feeds MineColonies food demand (colony route), gating real demand rather than a bare sell — supports a fisher specialization.
- from: fish_skin | via: cross-route leather substitute input | to: production | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish_skin as a tagged leather alternative lets the fisher route feed recipes elsewhere that want leather, threading the routes together.
- from: seafood dishes | via: numismatics sell (M-09 in dossier) | to: economy | verdict: REJECT | reason: dossier cites retired M-09 (luxury good → coin); bare sell is the ambient endpoint, not a weave. Re-expressed as M-28 colony demand above.
- REWORK: Create + survival anchors sound. Dossier's economy 2nd-anchor candidate cites retired M-09 — REWORK to M-28/M-29 (colony demand / cross-route leather), per #163/#240.

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — client container-preview tooltip; no items, blocks, or material graph. Genuine zero-surface QoL mod.

## cmparallelpipes   [anchors: create (1)]
- from: pipe wrench craft | via: create:mechanical_crafting (Create parts) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the wrench is a Create-native plumbing tool built from Create parts — formalize the craft through the spine; it is everyday tier so keep it light.
- from: pipe wrench | via: tooling wear | to: production | verdict: REJECT | reason: M-38 (tooling wear) is MECHANISM-PENDING (#239), not a Phase-3 weave. Also an everyday QoL tool, no coherent 2nd pillar.
- LEAVE-leaning — single Create-bound QoL tool; the M-05 craft is its only sensible weave, no true cross-system 2nd anchor.

## byzantine   [anchors: survival/colony (1)]
- from: colony schematic style | via: minecolonies build (research/style unlock) | to: economy/production | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: as a MineColonies style set its builds consume colony-requested materials — it rides the colony route (M-28), the load-bearing alternate production/economy path; weave is entirely through MineColonies as the dossier notes.
- from: schematic style | via: standalone recipe | to: create | verdict: REJECT | reason: ships no own blocks/items (renders via Domum Ornamentum/Structurize); nothing to route through a Create method. No content surface of its own.
- REWORK: colony anchor sound. OK — connections sound (its only edge is correctly through MineColonies/M-28).

## durabilitytooltip   [anchors: support/QoL (1)]
- LEAVE — client durability tooltip UI; no items, blocks, or material graph. Genuine zero-surface QoL mod.

== CHUNK COMPLETE ==
