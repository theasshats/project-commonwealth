# Phase 2 candidates — chunk-21

## gnkinetics   [anchors: Create (1)]
- LEAVE — pure Create kinetic-parts deepening (planetary/ring/worm gears, cog cranks); no items with foreign thematic hooks; no loot table items that a magic/economy/survival method could consume. A second pillar here is forced: the parts are mechanism, not material to route through another mod's method. Dossier's own conclusion holds.

## cmpackagepipebomb   [anchors: Create (1)]
- from: cmpackagepipebomb:pipebomb / gunpowder trap | via: recipe | to: economy | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no motif covers "trap as trade good"; thematically it's a prank, not sellable; no-motif → reject-for-review
- LEAVE — 4 items (pipe bomb variants), loot=no, no coherent second-pillar route. The mod is a PvP gag riding Create packages; its items are delivery vessels, not materials to route through another mod's method. A forced economy or magic edge would be incoherent.

## create_confectionery   [anchors: Create, survival (2)]
- from: create_confectionery:bar_of_black_chocolate / bar_of_ruby_chocolate / candy items | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: boxed artisan chocolates and ruby confections are luxury trade goods — processed from cocoa through multiple Create steps, exactly the kind of refined product a town would pay coin for
- from: create_confectionery:hot_chocolate (Regeneration effect) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: Hot Chocolate's Regeneration buff is a minor food effect, not a magic-tier reagent; routing it through infusion would mis-cost a trivial food item and the thematic stretch from "snack drink" to arcane reagent is weak; depth would not scale with power
- REWORK: none — existing Create+survival anchors are sound (cocoa→chocolate through Create methods is coherent and well-grounded); M-09 economy add is a clean 3rd-pillar bonus, not a rework.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone signal output, season-keyed) | via: config tie / Create automation | to: Create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: wire the season sensor into a Create gearshift or stockpile switch — automated farms open greenhouse shutters or rotate crop types as the season changes, making the tech spine physically respond to the calendar
- from: out-of-season produce scarcity (config-gated crop fertility) | via: numismatics sell / trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: scarcity is a world-state, not an item to price; the mechanism for "this crop is out of season → coin premium" would require a separate KubeJS hook with no clear Numismatics support; too indirect and the economy link is M-09's weakest form (no processed good, just scarcity)
- REWORK: none — single-pillar survival anchor is accurate; M-16 Create tie is the strongest available route.

## do_a_barrel_roll   [anchors: support/client QoL (1)]
- LEAVE — zero items, zero blocks, loot=no; pure client elytra flight-feel rewrite. No material surface to route through any method. Confirmed zero-content behavior mod.

## detect-afk-1.2.2   [anchors: support/server admin (1)]
- LEAVE — zero items, zero blocks, loot=no; pure server-side AFK detection behavior. No content surface whatsoever. Genuine zero-surface utility.

## cmparallelpipes   [anchors: Create (1)]
- from: cmparallelpipes:pipe_wrench / pipe_wrench_gear | via: recipe (Create brass component upgrade) | to: Create (depth) | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the wrench is already a Create-tier tool; adding a deploy-upgrade path for a QoL plumbing tool adds complexity with no pillar payoff — it doesn't cross a pillar boundary, just deepens Create further. Not a second pillar.
- LEAVE — 2 items, loot=no; a single-purpose Create fluid-pipe tool. Nothing to route through another pillar's method. The pipe wrench gear has no thematic hook into magic/economy/survival.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth / boiler (fuel-burning climate machines) | via: M-05 native-method gating — gate higher-tier Hearth or Boiler recipe behind Create brass/casing components | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hearth's multiblock smokestack demands real brass plating — you can't heat your base without investing in Create fabrication first; survival hardship and tech spine become mutually dependent
- from: cold_sweat:chameleon_molt / goat_fur / hoglin_hide (insulating hides) | via: create:mixing or ars_nouveau:imbuement (treated/attuned insulating material) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: magically treated chameleon molt becomes a temperature-resistant lining that also dampens spell disruption — arctic survival gear with an arcane interior
- from: cold_sweat:chameleon_boots/chestplate / goat_fur armor set | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: insulated armor as a commodity works thematically, but the economy pillar is best served by processed goods, not survival gear; selling armor sets is an incidental use rather than a designed economy seam; weak relative to the Create/magic anchors already accepted
- REWORK: existing `create:filling` inbound weave (waterskins) is sound — not arbitrary. No rework needed.

## betterpingdisplay   [anchors: support/client UI (1)]
- LEAVE — zero items, zero blocks, loot=no; numerical ping UI overlay. Genuine zero-content client utility.

## accelerateddecay   [anchors: support/perf (1)]
- LEAVE — zero items, zero blocks, loot=no; leaf-decay performance patch. No content surface. Genuine zero-content infrastructure mod.

== CHUNK COMPLETE ==
