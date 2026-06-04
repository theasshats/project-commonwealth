# Phase 2 candidates — chunk-33

## meadow   [anchors: survival (1)]
- from: meadow:alpine_salt / meadow:cheese_wheel | via: recipe (create:milling alpine_salt ore → refined salt; create:mixing for cheese sauce/brine) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the alpine salt vein feeds a Create mixing chain as a food preservative/brine input — salt becomes a scarce regional resource the Create web actively consumes
- from: meadow:cheese_wheel (+ alpine dishes) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: cured alpine cheeses are the premium dairy trade good — wheel → market → coin, pulling the pastoral biome into the economy web
- from: meadow:chambray_wool (felted textile) | via: recipe (create:pressing) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: felt/chambray is a textile intermediate — Create presses raw wool into felted sheet, tying the alpine farm into the industrial chain
- from: meadow:cheese_wheel | via: numismatics sell (M-09, already accepted above) vs. occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: burning dairy as a ritual reagent has no thematic grounding — feels forced; M-09 is the coherent route
REWORK: no existing connections to rework (1-pillar mod, no authored weaves yet).

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy_helmet (Heavy set) | via: recipe (create:mechanical_crafting — re-gate the Heavy set to require Create-pressed iron plates) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: heavy plate armor made in a mechanical press rather than a vanilla table — the industrial-forge fantasy lands naturally
- from: immersive_armors:steampunk set (if present — Steampunk aesthetic) | via: recipe (create:sequenced_assembly using brass components) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Steampunk armor set assembled on a sequenced line through brass casings and pressed plates — the visual metaphor is exact
- from: immersive_armors:divine_chestplate (Divine set) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a divinely blessed chestplate finished through an arcane apparatus — sanctified armor crosses into the magic pillar cleanly
- from: immersive_armors:bone_chestplate (Bone set) | via: occultism:ritual | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: bone armor consecrated through an Occultism ritual — undead material → spirit work is entirely coherent
- from: immersive_armors:* (finished sets) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier notes armor sells thinly — players equip it, not trade it; too thin an economy hook to be meaningful
REWORK: no existing connections to rework (1-pillar mod, no authored weaves yet).

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: flesh touched by supernatural cold is a spirit reagent — burning it in Occultism's soul-fire transmutes it into a cold-attuned essence
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: magma-infused rotten flesh passed through Create's soul-fire haunting transmutes into a smoldering byproduct (e.g. magma cream analog or haunted flesh) — the soul-fire seam is the natural bridge
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted nether wart is an arcane contaminant — imbuement refines it into a tainted source reagent, giving the pirate/lich loot a magic sink
- from: rottencreatures:treasure_chest (loot table) | via: loot-seed (seed Numismatics coin or economy-relevant drops into the Dead Beard / Undead Miner chest loot tables) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a pirate captain's treasure chest paying out actual currency — players expect coin in a treasure chest; this writes itself
- from: rottencreatures:frozen_rotten_flesh | via: create:crushing | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: generic crushing of mob flesh adds noise rather than meaning — the haunting (M-19) route for magma flesh and spirit_fire (M-11) for frozen flesh are more thematically grounded; don't duplicate with a blunt crushing route
REWORK: no existing connections to rework (1-pillar mod, no authored weaves yet).

## modulargolems   [anchors: Create (1)]
- from: modulargolems:golem_assemble (boss-tier metals — Cataclysm cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble recipe requiring boss drops as keystone | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most powerful golem bodies demand a boss-key ingredient — you can't build a dragonsteel golem without slaying the dragon; combat progression gates the best constructs
- from: modulargolems:golem_assemble (arcane core) | via: recipe using ars_nouveau:source_gem or occultism ritual component as a golem-core upgrade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: animating a construct requires a spark of arcane source — the golem-soul is a source gem seated in the chest cavity; golemancy straddles tech and magic naturally
- from: modulargolems loot (loot=yes) | via: loot-seed (seed craft parts / upgrade templates into relevant dungeon loot) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the loot=yes flag likely refers to the golems themselves dropping loot on death, not a dungeon chest; seeding golem parts into unrelated dungeons feels arbitrary — better to keep the assembly gated through the workbench. The M-15 + M-10 routes are sufficient.
REWORK: existing Create connection (golem_assemble uses create:crushing / mechanical_crafting / sequenced_assembly) — OK, these are sound mechanical ties. No rework needed.

## bits_n_bobs   [anchors: Create, survival (2)]
- from: bits_n_bobs tile/deco blocks (andesite_tiles, asurine_tiles, crimsite_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's own stone tiles crushed back to crushed stone — the deco loop closes; nothing is wasted in the machine room
- from: bits_n_bobs:brass_lamp / nixie_board (decorative displays) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: nixie boards and lamps are functional/deco items players place in their builds, not a luxury trade good — weak economy hook, forced
REWORK: existing connections (Create + survival) are sound. The create:item_application and create:splashing inbound weaves are well-placed. The M-04 crushing candidate above is the one meaningful new edge to consider.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — pure information tool; single item that locates biomes, produces no material output and registers no content beyond model variants. No loot table, no craftable intermediate, nothing coherent to route. The dossier's own 2nd-pillar assessment confirms: no edge.

## lithium   [anchors: support/performance (1)]
- LEAVE — zero-content server optimization library; registers no items, blocks, loot, or recipes. Genuine zero-surface mod; no weave possible.

## modelfix   [anchors: support/bugfix (1)]
- LEAVE — client-side render-fix only; zero items, zero blocks, zero recipes, zero loot. Genuine zero-surface mod; no weave possible.

## searchables   [anchors: support/library (1)]
- LEAVE — client UI library (search/filter API); registers no items, blocks, or recipes. Genuine zero-surface library mod; no weave possible.

## creativecore   [anchors: support/library (1)]
- LEAVE — dev API library (GUI/packet/recipe systems); zero gameplay content, zero items, zero blocks. Genuine zero-surface library mod; no weave possible.

== CHUNK COMPLETE ==
