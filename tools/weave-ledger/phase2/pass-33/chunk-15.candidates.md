# Phase 2 candidates — chunk-15

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- LEAVE — pure Create kinetics infrastructure (lazy/flexible shafts, cogs) + dyed seats for Stock Keeper train mobs. No item-processing surface; consumes only Create kinetics parts + dye + encasing and outputs drop-in kinetic blocks. Its two anchors are sound and structural (Create spine + train/transport via seats); no foreign material to method-pull.
- OK — connections sound. Create (kinetics) + aeronautics/transport (Stock Keeper seats) are both native and load-bearing; neither is arbitrary.

## createfood   [anchors: survival, Create (2)]
- from: finished dishes (pizza/pie/cheesecake) | via: MineColonies restaurant/cook hut requests + diner consumption | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony cook needs prepared dishes to feed citizens — high-effort food gates colony upkeep, not a vendor sale
- from: cheese/milkshake/aged dish | via: create_cheese:maturing / extradelight:drying_rack as a maturation step folded into a dish chain | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a properly-aged cheesecake or matured cheese filling is worth more, creating an aging-baker specialist
- from: finished dishes | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link — M-09 retired (economy is player-run; "sellable" is the ambient endpoint, not a weave). The colony-demand (M-28) routing above re-expresses this correctly.
- REWORK: dossier 2nd-anchor lists "economy via numismatics — M-09 luxury good → coin [STRONG]" — this is now an invalid bare-sell link (#163/#240). Re-express as M-28 colony consumption (above) or M-26 food upkeep. The M-12 inbound-consumer role (pulls foreign crops/meats/cheese/fish through Create+FD) is excellent and sound — that is its real second weave already.
- OK — Create + survival anchors are sound; only the dossier's economy candidate needs the M-09→M-28 rework.

## ichunutil   [anchors: support (library) (1)]
- LEAVE — genuine zero-content shared-class library (0 blocks, 0 items, no recipes, no loot). Nothing to weave.

## xaeroworldmap   [anchors: support (1)]
- LEAVE — client-side map UI; 0 items/blocks, no loot, no processing. Pure navigation QoL, nothing to weave.

## libipn   [anchors: support (library) (1)]
- LEAVE — GUI/config library for IPN; registers no items/blocks, no loot. Zero content surface.

## betterclouds   [anchors: support (client/visual) (1)]
- LEAVE — client cloud renderer; 0 items/blocks/loot. Pure visual polish, nothing to weave.

## accessories   [anchors: support (1)]
- LEAVE — accessory-slot API/library; 0 items of its own (host mods register wearables into it). Zero content surface; the weavable wearables live in other mods.

## formationsnether   [anchors: survival (1)]
- from: structure loot tables | via: loot-seed (drop a magic reagent — e.g. a mob-drop/essence — into nether ruin/altar chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ritual altars and sanctuaries in the Nether are the natural place to find a magic reagent, anchoring exploration to the magic route
- from: structure loot tables | via: loot-seed (seed a boss-key / progression gate item into rare sanctuary/castle chests) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a deep Nether castle yields the gate item for a high-tier tech recipe — exploration earns the on-ramp
- from: structure loot | via: loot-seed sellable/coin reward | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: dossier framed it as M-08 "coin from processed scarcity" but seeding raw minted coin into loot is an NPC/loot coin faucet, not player-minting; bare-reward isn't a demand-gating weave. The reagent (M-02) and boss-key (M-15) loot-seeds carry the real economic pull via cross-route trade.
- REWORK: dossier 2nd-anchor "economy via numismatics — drop a sellable/bounty reward [M-08, WEAK]" — reject as a coin/bounty faucet; replace with the M-02 reagent and M-15 boss-key loot-seeds above (their cross-route demand is the real economy link).

## cmparallelpipes   [anchors: Create (1)]
- LEAVE — single Create fluid-plumbing QoL tool (Pipe Wrench). Consumes nothing foreign, outputs no material; acts only on Create pipes. No coherent second-pillar weave; supports the Create spine. (Both items are everyday tools — gating them deeper would violate the basic-component guardrail.)

## brazil_legends   [anchors: survival (1)]
- from: capelobo_claw / big_tongue | via: occultism:spirit_fire or ars_nouveau:imbuement (transmute mob drop into a magic essence) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a folklore-cryptid claw/tongue is exactly the kind of grisly reagent an occult ritual or arcane infusion would want
- from: amber_shard / amber_pearl | via: ars_nouveau:imbuement (amber as an arcane reagent/source carrier) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: folklore amber holds a trapped spirit — refining it into a magic reagent reads naturally
- from: signature drops (claw/tongue/saci-bottle) | via: combat specialist farms the folklore mobs → trades drops to magic users | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: these mobs are biome-locked and dangerous, so a hunter supplies their drops to the ritualists who need them
- from: amber_shard / amber_pearl | via: numismatics sell as luxury curio | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired). The M-34 combat-supply routing above is the correct player-run economy edge.
- REWORK: dossier 2nd-anchor "economy via numismatics sell — amber as sellable luxury curio [M-09, WEAK]" — invalid bare-sell; replace with M-34 combat-supply (above). The magic M-02/M-11 candidate in the dossier is sound and kept.

## create_better_villagers   [anchors: Create, economy (2)]
- REWORK: its trades are emerald-denominated vanilla villager trades. Under the player-run ruling, a villager *selling* Create parts for emeralds is an NPC faucet of both coin and goods — the weakest kind of economy link (#163/#240 spirit). The dossier's deepen ("re-denominate emerald→Numismatics coin, M-08") does NOT fix this: re-denominating doesn't make it player-minted; it just makes the NPC faucet pay in pack-coin. Flag the whole economy anchor as a player-run-economy clash for human review — an NPC Create-parts vendor undercuts the "nobody self-sufficient, trade with other players" loop by letting a villager substitute for a Create specialist.
- from: villager profession workstations (Basin/RSC/Steam Engine) | via: gate the *unlock* of higher profession tiers behind Create progression rather than emerald grinding | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: speculative — mod is config/profession-driven, not recipe-driven; no clean method to route through, and it doesn't resolve the NPC-faucet concern. Recorded for human review.
- Net: Create anchor sound; economy anchor REWORK (NPC trade faucet vs player-run economy) — human call.

## betterendisland   [anchors: survival (1)]
- LEAVE — structure/worldgen overhaul of the End island; 0 items, 0 blocks, loot=no, no methods. Nothing to weave (the dragon fight's drops are vanilla, owned by vanilla). Genuine zero-surface for weaving.

## steves_lava_chicken_music_disc   [anchors: support (flavor) (1)]
- LEAVE — single joke music disc (1 item). loot=yes but it's the disc's own jukebox-drop, not a weave surface. Forcing a recipe/economy edge on a meme disc would be noise (red-team: a "craft the Lava Chicken disc from a magic reagent" edge clashes hard with every system's tone). Deliberately-flavor content.

## s_a_b   [anchors: Create, aeronautics (2)]
- from: hard/double steel armor blocks | via: create_ironworks-style structural plate → Aeronautics hull recipe (already its purpose; deepen tiers) | to: aeronautics | motif: M-23 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: warship and tank hulls should demand the heavy armor plating, scaling cost with toughness tier — exactly the structural-alloy→airframe seam
- from: top-tier hardsteelblock | via: create:sequenced_assembly through a derpack:incomplete_* armor part | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the toughest cannon-proof plate earns a multi-stage Create chain, not a flat compacting recipe
- from: steel input | via: M-30 regional-scarcity gate on the steel feedstock | to: economy/scarcity | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: scarcity belongs on steel's source mod (the ore/ingot owner), not on this downstream block sink; double-gating the same chain. Recorded.
- OK — Create + aeronautics anchors sound; the M-23/M-06 depth weaves above are deepenings of an already-correct purpose (light steel = light step; hard steel = deep chain, respecting the cost guardrail).

## invtweaksemuforipn   [anchors: support / compat (1)]
- LEAVE — client compat shim emulating InvTweaks keybinds on IPN; 0 items/blocks, no loot, no methods. Zero content surface.

## ars_nouveau   [anchors: magic (1)]
- from: foreign farm-crop surplus / saplings | via: ars_nouveau:agronomic_sourcelink (passive Source generation from growth) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mage's garden of farm crops powers the arcane economy passively — survival's farm output natively feeds the magic spine, no recipe needed
- from: foreign mob drops / deaths | via: ars_nouveau:drygmy_charm + vitalic_sourcelink (passive drop collection + Source from deaths) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Drygmy farm turns the survival pillar's mob-killing into automated magic reagents and Source
- from: lapis/amethyst/foreign essences | via: ars_nouveau:imbuement → source_gem (the M-01 hub) | to: magic | motif: M-01 | power: everyday | tone: ok | verdict: ACCEPT | hook: source_gem is the universal magic currency every other magic mod mints into — this is the reserved M-01 spine (reagent-ownership: ars_nouveau:source_gem)
- from: source-charged focus/reagent | via: createaddition:charging (Create FE charges an arcane item) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: threading Create's electric tier into the magic gear — only where it makes sense, e.g. charging a battery-backed focus; gives Ars its missing Create edge
- from: cross-route — a Create endgame recipe requires a source_gem-derived reagent (and an Ars recipe requires a Create part) | via: KubeJS recipe authoring | to: Create | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the purest "nobody self-sufficient" — the tech specialist must trade with the mage for a high-tier component
- from: source_gem / spell scrolls | via: numismatics sell as arcane good | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired). The real economy edge is M-33 service-for-hire below.
- from: ars_nouveau:enchanting (enchant-for-hire) | via: a mage performs spell-write/enchant work on another player's gear; payment emergent | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: an enchanter sells *labor* not goods — the player-economy labor axis, you can't buy the capability (pairs with M-37 spell-knowledge gate)
- REWORK: dossier 2nd-anchor "economy via numismatics — source_gem/scrolls sellable [M-09, WEAK]" — invalid bare-sell; replace with M-33 service-for-hire (above). The M-01/M-02 candidates in the dossier are the correct sound spine. Note Ars is currently logged as 1-anchor (magic) but the M-02 Sourcelink/Drygmy survival sinks are native and ready — it should read as magic+survival already.

## citadel   [anchors: support (library/API) (1)]
- LEAVE — library by the Alex's Mobs author; its 1 block + 5 items (citadel_book, debug, icon/effect/fancy_item, lectern) are dev/util tooling, not survival content. loot=yes is incidental dev item drops. No coherent weave surface; pure dependency library.

## create_train_parts   [anchors: aeronautics (1)]
- from: brass/copper sliding windows + steps | via: craft through create:pressing sheets (make the Create-train furniture cost pressed Create material explicitly) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: train detailing should be built off the Create sheet chain like the rest of a train — light, deco-tier tie that makes the Create spine explicit (everyday = one light step, respects the guardrail)
- Net: aeronautics/transport anchor sound (rides contraptions/trains). The Create edge above is a light deco-tier deepening; nothing deeper is warranted for cosmetic fittings.

## kleeslabs   [anchors: support (QoL) (1)]
- LEAVE — behavior-only slab-breaking QoL; 0 items/blocks, no loot, no methods. Zero content surface, nothing to weave.

## kobolds   [anchors: economy, survival (2)]
- REWORK: economy anchor rests on emerald-based villager-style kobold trading (Enchanters sell potions/Prospector enchant, Engineers give redstone, Captains take gold tools). Under the player-run ruling this is an NPC coin/goods faucet — the same weakness flagged on create_better_villagers. Flag the economy anchor for human review: kobold trade substitutes an NPC for player specialists. Survival anchor (underground civilization + Kobold Den structures) is sound and not at risk.
- from: kobold_skull / kobold_wither_skull | via: occultism:spirit_fire transmute into an occult essence | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull (and the wither-skull variant) is a natural grisly reagent for a ritual sink — gives the skull drops a use beyond decoration
- from: kobold combat drops (skulls, from raiding Dens) | via: combat specialist farms Dens → trades skulls to ritualists | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding a Kobold Den is dangerous, so a combat player supplies the skull reagents to magic users — a player-run economy edge that replaces the NPC-faucet one
- from: kobold_skull | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: bare sell link (M-09 retired); M-34 above is the correct routing.
== CHUNK COMPLETE ==
