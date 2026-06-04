# Phase 2 candidates — chunk-02

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grain) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player drops grain through a Create Millstone to get flour — the bread chain runs through the tech spine, not around it
- from: farm_and_charm:butter / farm_and_charm:bacon / farm_and_charm:baked_lamb_ham (animal-husbandry surplus) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: surplus farmstead goods (butter, cured meats) fetch coin at a market stall — husbandry's "feed more → drop more" loop becomes a trade-production engine
- from: farm_and_charm:barley (grain) | via: create:mixing (wort/mash step before fermentation) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: overlaps with the milling candidate above — two Create hooks on the same grain is redundant; milling is the cleaner single step; keep one
- from: farm_and_charm:chicken_coop (egg output) | via: farm_and_charm:mincer / cooking → farmersdelight chain | to: economy via food trade | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: eggs-to-coin is too thin a hook on their own; the butter/cured-meat candidate already covers the economy pillar for this mod adequately

## emojitype   [anchors: support / client UI (1)]
- LEAVE — pure client chat-input helper; zero items, blocks, or methods; no coherent 2nd-pillar route exists

## moreoverlays   [anchors: support / client QoL (1)]
- LEAVE — zero items/blocks; HUD overlays only; nothing to route through any method

## invtweaksemuforipn   [anchors: support / client compat (1)]
- LEAVE — pure client inventory-keybind shim; zero items/blocks; no content surface to weave

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron (and higher tiers) | via: create:pressing / mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: reinforced wing frames require Create iron sheets/pressed plates — personal flight gear is built through the tech spine, which already makes the structural materials needed for airships
- from: vc_gliders:paraglider_diamond / _netherite | via: create:sequenced_assembly (multi-stage canopy + frame assembly) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: sequenced-assembly (M-06) is reserved for true endgame keystones; a glider is mid-tier traversal gear, not a flagship; M-05 via mechanical_crafting is the right depth here — don't over-gate it
- from: vc_gliders:copper_upgrade | via: create:item_application (deploy copper sheet onto glider frame) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: the copper upgrade is literally applied to the glider — deploying a Create copper sheet onto it reads as "of course" and keeps depth proportional (light single step, not a chain)

## detect-afk-1.2.2   [anchors: support / server-admin (1)]
- LEAVE — server-side behavioral mod; no items, blocks, or processing; nothing to weave

## immersive_paintings   [anchors: decoration / support (1)]
- LEAVE — pure decorative-expression canvas mod; no material with a coherent Create/magic/economy routing; forcing a frame-crafting route would be busywork

## immersivearmorhud   [anchors: support / client UI (1)]
- LEAVE — client HUD display only; no items or methods to weave

## blood_n_particles_datapack   [anchors: support / cosmetic (1)]
- LEAVE — cosmetic particle-emission mod; 184 "items" are internal particle holders, not usable materials; nothing to route

## ribbits   [anchors: survival (1)]
- from: ribbits:maraca + Ribbit-merchant amethyst-shard trade | via: numismatics trade bridge (shard-denominated trades converted to Numismatics coin values in KubeJS) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: ACCEPT (provisional motif) | hook: the Ribbit swamp economy already runs on Amethyst Shards — bridging it so shard-for-goods trades price out in Numismatics coin folds the frog-folk market into the player currency web; explorers who find a swamp village have a coin-earning node
- from: ribbits:toadstool / ribbits:mossy_oak_planks | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: toadstool/mossy-oak are generic decorative wood/fungal blocks; Create-cutting them back to planks/slabs is purely mechanical with no "of course" flavour hit; the deco-recycle angle (M-04) is weakest when the source material has no unique identity — LEAVE the deco side alone
- from: ribbits:red_toadstool / ribbits:brown_toadstool (swamp fungi) | via: ars_nouveau:imbuement or occultism:spirit_fire (fungal essence for a ritual) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: swamp-village fungi carry a folk-magic vibe — routing toadstool caps through a spirit-fire or imbuement ritual to yield a mushroom essence for low-tier Occultism/Ars reagents makes the Ribbit biome a magic foraging node (and gives the fungi a use beyond deco)

== CHUNK COMPLETE ==
