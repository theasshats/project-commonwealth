# Phase 2 candidates — chunk-01

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem | via: recipe (ars_nouveau:imbuement) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's cursed relic needs purifying in an imbuement altar before it can power an arcane ritual — boss-drop reagent sunk into the magic web
- from: illagerinvasion:illusionary_dust | via: recipe (occultism:spirit_fire) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusion-dust is raw spirit-stuff; spirit fire transmutes it into an occult essence, bridging necromancy with the illusioner's tricks
- from: illagerinvasion:platinum_chunk | via: recipe (create:crushing) | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum drops crushed to ingot + byproduct through the Create ore-doubling chain — a new metal route rewards fighting the Invoker
- from: illagerinvasion:hallowed_gem | via: loot-seed (numismatics bounty) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: raiding an Illusioner Tower is worth a real bounty payout — boss-key drops feed the coin economy (provisional motif; caveat applies)
- from: illagerinvasion:horn_of_sight | via: recipe (ars_nouveau:enchanting_apparatus) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: hallowed_gem + imbuement already covers the magic bridge for this mod's drops; horn_of_sight is less thematically distinct as a second magic reagent — redundant with the first ACCEPT row; keep one strong link

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
REWORK: none — Create (via:cutting/deploying for cardboard plane) and aeronautics/logistics are both coherent and established; no arbitrary edges detected.
OK — connections sound; the mod is a purpose-built logistics bridge between Create packages and autonomous flight, which is precisely the aeronautics + Create pillar overlap. No 3rd-pillar edge is needed or forced here.
- from: (no new candidate — economy adjacency via remote trade fulfilment is too thin to assert; the delivery automation value is the weave) | verdict: REJECT | reason: no material I/O to route; forcing an economy edge would be no-motif

## gtmogs   [anchors: survival, economy (2)]
LEAVE — pure worldgen/config framework; its three items are dimension-marker blocks with no crafting/loot surface and no material the weave can pull through. It is the upstream substrate that makes M-03/M-08 possible, not a mod that itself needs a motif. loot=yes per digest but the flag likely reflects marker-block entity loot which is not player-facing reagent material.

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull / hpm:smallhull | via: recipe (create:mechanical_crafting) | to: Create | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: a ship hull isn't hammered from raw planks — it needs fabricated Create structural plates, making the shipyard a real workshop milestone
- from: hpm:corvette_steamship_item | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the corvette is the pack's big naval flagship; assembling it through a sequenced line of Create parts (boiler, prop shaft, hull plating) gates it properly behind the tech spine
- from: hpm:cannonball | via: recipe (create:compacting / createbigcannons integration) | to: Create | motif: M-24 | power: everyday | tone: ok | verdict: ACCEPT | hook: cannonballs are milled and compacted from the processed metals the Create spine produces — ammunition runs off the factory floor
- from: hpm:hand_cannon | via: recipe (numismatics sell) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a hand cannon is a premium weapon; a naval-arms trade route makes it a valuable craft export alongside the ship-building specialization
- from: hpm:cuttermilitariseditem | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the war-cutter is mid-tier, not endgame; M-06 (sequenced assembly keystone) is for endgame flagships — use M-23 mechanical_crafting for the cutter's hull instead, keep M-06 for the corvette only; depth must scale with power

## emojitype   [anchors: support/client-UI (1)]
LEAVE — zero-content client mod: no items, no blocks, no loot, no methods. Pure Unicode chat input helper with no game-state surface to weave through.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs:*_roof (stone/brick/andesite variants) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished roof crushes back to gravel + rubble — a lossy but coherent reclaim step; limit to stone/masonry types (not wood), ~5-8 material families, not all 605 blocks
- from: mcwroofs:*_roof (metal-adjacent: copper/iron if present) | via: recipe (create:crushing) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: review of block list shows mcwroofs uses vanilla planks/stone/brick/terracotta/concrete — no dedicated metal-roof type in 1.21.1; copper roofs are not confirmed present, so a metal crush row is unsupported by the dossier; stick to the masonry subset
- from: mcwroofs:* (bulk lot) | via: trade (villager/numismatics) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; bulk deco blocks as trade goods are low-distinction for the economy pillar — doesn't add a clear second pillar story

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — genuine zero-content behavior mod: no items, no blocks, no loot, no methods. Operates on dropped item-entities generically; nothing to route or weave.

## afk-sleep-1.3.2   [anchors: support/QoL (1)]
LEAVE — genuine zero-content server behavior mod: no items, no blocks, no loot, no methods. Recomputes sleep quorum only; no game-state surface to weave.

## kambrik   [anchors: library/API (1)]
LEAVE — pure Kotlin dev-framework library: no items, no blocks, no loot, no methods, no player-facing surface. CLAUDE.md's criterion is met: genuine zero-content library.

## ribbits   [anchors: survival (1)]
- from: ribbits:maraca / ribbit merchant trades (amethyst shard currency) | via: trade / config (numismatics bridge — shard↔coin exchange or sell swamp goods for coin) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif — M-21) | hook: Ribbit merchants already run their own little currency loop on amethyst shards; hooking that shard-price into Numismatics coin makes the swamp village a real node in the trade web (tag provisional — M-21 leans no, surface for review)
- from: ribbits:toadstool / ribbits:brown_toadstool | via: recipe (occultism:spirit_fire or ars_nouveau:imbuement) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: a toadstool from the sorcerer-frog's village is raw fungal-arcane matter; spirit fire or imbuement refines it into a minor occult reagent — swamp mushroom magic is thematically obvious
- from: ribbits:mossy_oak_planks | via: recipe (create:cutting) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mossy oak is generic wood; M-04 (recycles deco) is a low-value generic crush/cut pass for an everyday plank variant — it adds almost nothing distinctive; the economy + magic edges are the stronger 2nd-pillar story for ribbits

== CHUNK COMPLETE ==









