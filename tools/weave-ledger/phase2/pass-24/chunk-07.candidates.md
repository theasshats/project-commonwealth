# Phase 2 candidates — chunk-07

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]

- from: stone/wood/amethyst cut blocks (847 variants) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mechanical saw is exactly the right tool for bulk-producing building cuts; builders automate their palette through the Create spine
- from: gravity blocks (concrete-powder slabs/stairs, sand/gravel cuts) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the recycle-to-raw link is extremely weak — nobody deliberately crafts concrete-powder slabs to crush them back; this is a cosmetic loop with no loop-advancing value, and the M-04 dossier candidate flags it WEAK itself

## sable_sa_compat   [anchors: support/aeronautics-compat (1)]

- LEAVE — pure behavior-compat patch (0 items, 0 recipes); bridges Create: S'n'A gear to Aeronautics ships; no material surface to weave.

## multipiston   [anchors: support/MineColonies-dep (1)]

- LEAVE — colony infrastructure dependency; moves world blocks for Structurize builders; 1 block/item but no material in/out; no coherent weave (forced edge = defect).

## bettercombat   [anchors: support/combat-framework (1)]

- LEAVE — JSON behavior framework, 0 items; routing material through it makes no sense; no weave surface.

## fluid   [anchors: create, aeronautics (2)]

OK — connections sound. Already at 2 anchors (Create spine + aeronautics logistics); dossier confirms its recipes route through create:compacting/deploying/mechanical_crafting/mixing; no forced third anchor needed.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — cosmetic particle/sound-only mod; 184 "items" are particle-holder entries, not usable; no material to route.

## kiwi   [anchors: support/library (1)]

- LEAVE — developer library with 0 items, 0 recipes; nothing to weave.

## cmparallelpipes   [anchors: create (1)]

- LEAVE — single utility tool (pipe wrench) for Create plumbing QoL; no material consumption or output; no coherent second anchor.

## ecologics   [anchors: survival (1)]

- from: ecologics:coconut / c:foods/fruit / c:foods/nut | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: tropical fruits processed through a Millstone for coconut milk / shredded coconut — a natural "harvest → machine → ingredient" step that ties beach crops to the Create food-processing chain
- from: ecologics:coconut (fruit) | via: farm_and_charm:mincer or farmersdelight:cutting | to: survival (food depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mincer turns coconut into coconut flesh, extending the farmhouse kitchen with a tropical ingredient; sensible cross-mod pairing (shares c:foods/fruit tag)
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement or extradelight:vat | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: azalea flower is decorative; an infusion role is un-motivated — no thematic reason azalea flowers are arcane inputs, and M-10 warns against gating basic components; thin justification

## everycomp   [anchors: support/decoration (1)]

- LEAVE — runtime generator; its outputs inherit host-mod recipes (incl. Create saw shapes); weaving belongs on host mods, not here.

## copperagebackport   [anchors: survival (1)]

- from: copper deco blocks (copper_bars, copper_chain, copper_lantern, oxidized variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: oxidized copper deco crushes lossy back to copper nuggets + XP nugget — a standard M-04 recycle loop that folds a wide copper deco set into Create's copper economy; players building and re-decorating generate copper scrap through the spine
- from: copper tools / copper armor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: tool/armor crushing is mechanically valid but design-uninteresting — vanilla tools are already recycled by other means; the value here is the deco set (above), not tools; spreading M-04 too thin dilutes it

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Millstone is the obvious machine for grain-to-flour; running Farm & Charm grains through a Create Millstone ties the farmstead bread chain to the production spine, so players building flour-supply automation touch both mods
- from: farm_and_charm:barley (grain) | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: barley ferments into ale — a farmhouse staple that is a genuine luxury trade good (not just "sellable"), feeding the player-run economy with a surplus good that emerges from the husbandry loop; thematically earns its M-09 slot because ale is a *culturally specific* sellable, not generic sellability
- from: farm_and_charm:butter / eggs / farm animal surplus | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; butter/eggs are just sellable, no structural loop-closing role; the ale candidate above is the distinctive M-09 read for this mod

## packetfixer   [anchors: support (1)]

- LEAVE — network patch, 0 items; nothing to weave.

## cloth_config   [anchors: support/library (1)]

- LEAVE — config-screen library, 0 items; nothing to weave.

## endermoon   [anchors: survival (1)]

- from: ender pearl (mass-spawn windfall during Ender Moon) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ender Moon floods the night with endermen, making ender pearls transiently abundant — a lunar-gated reagent pulse that a magic ritual can consume; the timing pressure (one night, lots of pearls) is exactly the M-22 celestial-reagent pattern
- from: endermoon event (all-mob surge on Super Ender Moon) | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable adjacent — M-14 here is just "kill mobs during event, collect bounty payout"; the structural distinctiveness of endermoon is the ender-pearl pulse (above), not combat bounties; the M-22 read is more differentiated

## rightclickharvest   [anchors: support/QoL (1)]

- LEAVE — behavior-only interaction hook; 0 items, 0 recipes; no weave surface.

## zombiemoon   [anchors: survival (1)]

- LEAVE — 0 items, 0 unique drops; mobs use vanilla rotten-flesh drops; forcing a drop-reagent would be an invented edge; the dossier explicitly flags this.

## alternate_current   [anchors: support/perf (1)]

- LEAVE — redstone-logic performance patch; 0 items; nothing to weave.

## undergroundworlds   [anchors: survival (1)]

- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a venomous spider fang transmuted through spirit fire into a poison-essence reagent — dungeon crawling yields a magic ingredient; sensible organic→magic pipeline that rewards underground exploration
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire (M-11, above) is the cleaner fit for mob drops; routing the same drop through imbuement as well would double-spend it — one motif per reagent; M-11 wins for this organic-mob-drop shape
- from: temple/pyramid brick blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this WEAK; temple bricks are a niche deco set without circulation pressure; M-04 benefit is marginal, and Create-crushing dungeon deco feels forced rather than loop-advancing

## gamediscs   [anchors: survival/novelty (1)]

- LEAVE — pure novelty toy; cosmetic outputs only; console components could be Create-crafted as flavor but dossier flags this WEAK and not worth it; forcing a recipe weave onto an arcade gadget is a contrived edge.

== CHUNK COMPLETE ==
