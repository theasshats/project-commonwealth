# Phase 2 candidates — chunk-17

## freefbible   [anchors: support/flavor (1)]
- LEAVE — single inert readable item; no methods, no materials, no loot table; any recipe edge would be noise

## emojitype   [anchors: support/client-UI (1)]
- LEAVE — zero items/blocks; client text-input helper only; nothing to route

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a demolished roof crumbles back to gravel and a dust of XP — Create recycles the stone palette the same way it recycles any masonry
- from: wood roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crush to planks is trivially bypassed by plain crafting; no real demand-gating, just clutter on 600+ wood SKUs — cost outweighs benefit
- REWORK: existing single-anchor state is fine given the dossier's own "600 blocks makes an exhaustive crush pass low-value" note; accept only the stone/brick subset as a lightweight M-04 pass

## structurize   [anchors: support/library (1)]
- LEAVE — build-engine dependency for MineColonies; no items/methods of its own; its weave is MineColonies' weave

## better_lib   [anchors: support/library (1)]
- LEAVE — zero items, zero methods; pure config/messaging API; nothing to route

## occultengineering   [anchors: Create, magic (2)]
- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is an occult alloy — a specialist who automates occultengineering's rituals controls the rarest silver and becomes the pack's mint master for that metal
- from: occultengineering:phlogiport (wireless item logistics) | via: phlogiport as logistics node | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: phlogiport is in-base wireless routing, not inter-base transport; no aeronautics method to bind against and the cross-route dependency would be forced
- from: occultengineering:spirit_solution (occult intermediate) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is already the *reserved* reagent-ownership entry and is already the canonical M-11 intermediate; not a new candidate, it's an existing slot
- OK — connections sound (Create↔magic is the mod's explicit purpose; M-08 sterling silver mint is the strongest incremental extension)

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — no items, no methods, no loot; multiplayer marker utility with zero material surface

## fogoverrides   [anchors: support/client (1)]
- LEAVE — config-only visual mod; no items, no methods; nothing to weave

## lithium   [anchors: support/performance (1)]
- LEAVE — optimization-only; registers nothing; no content surface

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight crops (cabbage/tomato/onion/rice via c:crops/*) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already states this bridge "partly exists" (made-by includes create:milling); proposing the known-existing weave is not a new candidate
- from: farmersdelight:straw (c:storage_blocks/straw) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: threshed straw runs through Create's millstone into packing/padding material — the farm feeds the factory and the factory closes the loop; straw is a byproduct that currently has no downstream method
- from: farmersdelight cooked dishes (stews/pies as c:foods/*) | via: minecolonies provisioning request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: the MineColonies cook hut provisioning demands specific cooked meals — a kitchen specialist producing high-quality stews supplies the colony, turning cooking into a real trade role
- from: farmersdelight:rice (c:crops/rice) | via: create:milling → rice_flour | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the existing milling link already covers grain/rice in principle; this is a variant of the same edge with no clear incremental demand-gating beyond what grain milling already provides
- REWORK: dossier 2nd-anchor note references M-09 luxury→coin as the economy path — M-09 is RETIRED; any economy link must go via M-28 colony demand or M-26 consumption sink; the M-28 colony-provisioning candidate above is the correct reframe

## betterpingdisplay   [anchors: support/client-UI (1)]
- LEAVE — UI-only, no items, nothing to weave

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — no items/blocks registered; painting selection GUI only; nothing to route

## endermoon   [anchors: survival (1)]
- from: ender pearl surge (indirectly via boosted enderman spawns on Ender Moon) | via: loot-seed (boost ender pearl yield in Enhanced Celestials Ender Moon loot context) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ender Moon isn't just atmosphere — on that night pearls flood in, and a mage times their ender-infusion rituals (Ars imbuement / Occultism ritual consuming pearls) to the lunar surge; celestial timing as a real magic gate
- from: Ender Moon event (Super Ender Moon all-mob surge) | via: config/event-gating | to: survival | motif: M-26 | power: mid | tone: ok | verdict: REJECT | reason: M-26 is a consumption sink for produced goods — an untargeted mob-surge event doesn't close the production→demand loop; it amplifies pressure but doesn't sink a specific output; the event already lives in survival, so this isn't a new anchor
- REWORK: dossier says "leave — weave belongs on ender pearl or parent enhancedcelestials"; the M-22 lunar reagent motif IS the correct weave and it does belong here (the moon is this mod's output; the pearl surge is its material face) — update the dossier's 2nd-anchor section to record the M-22 accept rather than "leave"

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — display-only tooltip tweak; no items, no methods, no content surface

## naturescompass   [anchors: support/QoL (1)]
- from: naturescompass:naturescompass (biome-finder) | via: recipe (craft with regional-ore input) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the biome compass requires a regional-ore shard in its crafting recipe — only a player in that biome can make it cheaply, turning a finder tool into a traded good for those who need to explore away from home
- from: naturescompass:naturescompass | via: recipe gating | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: M-05 is for a mod's flagship item built in its own machine gated on Create parts; the compass isn't made in naturescompass's own machine (it has none) — this would be a plain recipe modification, not native-method gating; also the compass is a basic everyday tool and the guardrail says don't gate basics behind complex recipes
- REWORK: dossier "support role (a finder utility; nothing material to route)" undersells the M-30 angle; the compass itself is the trade good when its crafting costs a biome-locked material

## voicechat   [anchors: support (1)]
- LEAVE — proximity audio infrastructure; no items, no methods; nothing to weave

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the crab claw's reach-extending magic (vanilla brewing) has an obvious occult resonance — feeding it into spirit-fire transmutes it into a spirit-infused reach-component used in a higher-tier Occultism ritual or Ars imbuement
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: crab_claw already has a natural use (reach potion via vanilla brewing); double-routing the same item through both spirit-fire (M-02, preferred) and imbuement dilutes the signal and creates redundant sinks — pick one; M-02 via Occultism is the cleaner fit given the "eldritch claw" vibe
- from: copper golem head (friendsandfoes:copper_golem_head) | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: REJECT | reason: mob heads are narrative/display items; crushing a head to get copper nuggets breaks the "deliberately-vanilla-like" tone and is thematically clunky — the mod is faithful-vanilla-plus, so forcing metal extraction from a decorative head is a vibe clash
- from: wildfire/illusioner hostile-mob drops (loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Wildfire and Illusioner are boss-tier hostile mobs; seeding their loot tables with Ars Nouveau / Occultism reagents ties their challenge to the magic web — fight an Illusioner to harvest illusion-essence for a deception spell
- REWORK: dossier M-04 copper candidate is marked WEAK; crab-claw M-02 and hostile-loot loot-seed are stronger — M-04 copper crush should stay rejected

## ohthetreesyoullgrow   [anchors: support/library (1)]
- LEAVE — zero items/blocks; worldgen/growth framework dependency; nothing to route

## supplementaries   [anchors: Create, survival (2)]
- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries already has made-by create:mixing/haunting/splashing; the generic "mill a crop" edge adds little new territory and supplementaries is already well-woven (2 anchors, deeply cross-woven); adding a third is not needed and the dossier explicitly says "adding more edges is unnecessary"
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement (as catalyst/component) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries is already at 2 anchors and the dossier explicitly recommends not adding more; the ash→magic link would be a fine weave in isolation but is genuinely unnecessary when the mod's web is already sound; reject to avoid over-weaving
- OK — connections sound (Create + survival anchors confirmed; deeply woven; no new edges needed)

## woodworks   [anchors: survival (1)]
- from: woodworks wood deco blocks (boards/ladders/bookshelves) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a decorator who over-built with modded wood boards can toss them through a Create crusher — lossy recovery to planks and sawdust, closing the wood economy loop without a free material sink
- from: woodworks sawmill outputs (boards/ladders) | via: woodworks:sawmill (overlapping with create:cutting) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the sawmill and create:cutting are parallel methods over the same materials; "recipe cosmetic weave" (dossier's own language) earns a 2nd pillar in principle, but routing modded woods through create:cutting is already possible without a weave — the weave would just be adding the same output entries under a different method; the M-04 crush candidate is cleaner and more meaningful; this one adds clutter, not signal
- REWORK: dossier's 2nd-anchor candidates are honest — M-04 crush (MED) is the one to accept; M-12 sawmill overlap (WEAK) correctly rejected; confirm M-04 as the accepted weave

== CHUNK COMPLETE ==
