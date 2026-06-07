# Phase 2 candidates — chunk-05 (pass-33)

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: ocean village structures (loot chests, villager population) | via: loot-seed | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: ocean villages sit far apart by design — regional scarcity of coastal settlements makes them trade hubs, so seeding Numismatics coin or region-specific goods into their chests ties distance to economy demand naturally.
- from: ocean village villager presence | via: loot-seed | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: a deep-ocean village you can only reach by ship makes the aeronautics/boat logistics arm the natural supply route; seed a "supply manifest" or rare map item into chest loot so reaching it rewards the logistics effort.
- REWORK: existing survival anchor is sound but thin — the mod is pure structure exploration with no current connections out; the two loot-seed proposals above supply the missing second anchor without forcing items it doesn't have.

## rhino   [anchors: support (1)]
- LEAVE — pure JS engine library; no items, no blocks, no loot. Genuine zero-surface dependency of KubeJS. No weave possible.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: a hallowed relic torn from the Invoker feeds an arcane ritual — the boss's dark magic becomes a magic-pillar reagent, so defeating the Invoker unlocks a magic tier other players need.
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust is a mid-tier illager drop; routing it through Ars imbuement as a component in illusion/mirror-type glyphs (e.g. Conjure or Phantomize) gives the drop a consistent magic demand.
- from: illagerinvasion:platinum_chunk (dropped by illagers) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum_chunk into a Create crusher yields a processed platinum intermediate — the combat specialist farms raids, the tech specialist refines; a clean cross-route dependency.
- from: illagerinvasion:imbuing_table enchantment-boosting | via: service / native method | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Imbuing Table upgrades enchantments past vanilla caps but needs Hallowed Gems (boss-gated); an enchantment specialist offers imbuing-for-hire — the labor is the service, the Gems are the scarce input, value flows player-to-player.
- from: illagerinvasion:platinum_chunk → coin | via: create:pressing → numismatics:mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk is already proposed for M-03 ore-doubling route; a bare platinum→coin path is a sell-link (M-09 retired) unless platinum is the pack's coin-metal — that's a design decision not yet made; record for Gate-2 review.
- REWORK: survival anchor is sound. The M-05 native-method gating candidate in the dossier (Imbuing Table gated on Create parts) is potentially valid but the Imbuing Table is a multiblock of copper blocks — Create copper is common, not a meaningful gate. A better M-05 would gate the Hallowed Gem's *downstream use* (ritual/tech recipe) on an Imbuing Table step, which is what M-02 + M-33 above already capture. Flag dossier candidate as superseded by the above.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — config engine API; 0 blocks, 0 items, no loot, no gameplay surface. Genuine zero-surface dependency.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris (rare whale drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a real-world magical reagent (perfumery, apothecary); burning it in spirit-fire to yield a marid or afrit essence is thematically and gameplay-logically obvious — the ocean explorer feeds the occultist.
- from: alexsmobs:ender_residue (void worm / end mob drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: void worm is Alex's endgame End creature; its ender_residue is the canonical end-tier magic reagent input for Ars infusion — end combat specialist → Ars mage dependency.
- from: alexsmobs:bear_dust (bear drop) | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: bear_dust (ground bear bone/claw) crushes into a Create-usable bone meal supplement or alchemical powder — everyday mob drop finds routine industrial use, keeps the fauna loop closing into the tech spine.
- from: alexsmobs:void_worm_beak | via: occultism:ritual (boss-key) | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is Alex's End boss; its beak gates a high-tier Occultism ritual (e.g. summoning a marid or unlocking a dimensional mineshaft tier), making end-combat a prerequisite for top-tier occult logistics.
- from: alexsmobs mob drops (general) → coin | via: bare sell | to: economy | motif: none | verdict: REJECT | reason: "sellable drops" is the ambient endpoint (M-09 retired); not a weave. Economy link only counts when it gates demand.
- from: alexsmobs:leafcutter_ant_chamber (passive resource generator) | via: create:mixing (leaf-mush → fertilizer) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: leafcutter ants produce leaf-fragment biomass passively; running it through a Create mixer produces fertilizer or compost, feeding a farming/food chain — a living machine that feeds the production spine.
- REWORK: dossier economy candidate (M-08 coin-from-scarcity on rare drops) is a bare sell-link — M-09 retired; reject that direction and replace with the M-34 / M-11 routes above (combat drops → reagent demand → player-to-player trade). OK — the dossier already flagged it as [MED]; just confirm it's rejected.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — no items, no blocks, no loot. Pure PvP-rules toggle. Genuine zero-surface mod for weaving purposes.

## create_ultimate_factory   [anchors: create (1)]
- from: create_ultimate_factory renewable-diamond recipe (coal-block + lava → diamond) | via: create:compacting | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: renewable diamonds de-scarcify gems; BUT the pack is scarcity-driven — this weave note is a REWORK flag: **evaluate whether the diamond-renewal recipe should be disabled** in the pack's KubeJS scripts to preserve diamond as a regional-scarcity gate (M-30). Record for Gate-2 review.
- from: create_ultimate_factory blaze-rod renewal | via: create:compacting (blaze-powder + lava) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: blaze rods are a consumption sink (fuel, brewing); making them renewable via Create machines means a tech specialist can supply the server's potion economy — converts a survival resource dependency into a production→consumption loop.
- REWORK: the dossier correctly leaves this as Create-only (no items to route). The diamond-renewal candidate above is effectively a design-review flag rather than a new weave, surfaced because the pack explicitly relies on scarcity. Flag for Gate-2: **trim the diamond + deepslate recipes** if they undermine intended scarcity in the foundational ore layer.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: ship/galleon dungeon loot chests | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: ocean combat specialists board galleons and recover salvage that non-combat players can't reach — seed trade goods (rare map, trade manifest, or Numismatics coin) so naval combat feeds the economy as a supplier side.
- from: floating fortress / sunken ruins structures | via: loot-seed | to: aeronautics | motif: M-31 | power: endgame | tone: ok | verdict: ACCEPT | hook: deep-ocean fortresses are too far to swim to — they're natural aeronautics/ship destinations; seed a "ship schematics" or airframe key into chest loot so the logistics arm has a meaningful reason to make the voyage.
- REWORK: survival anchor is sound. The dossier's "none" for 2nd anchor is too conservative given loot=yes — loot-seed delivery gives two valid second anchors without forcing any items the mod doesn't own.

## occultism   [anchors: magic (1)]
- from: occultism:silver_ingot (real silver, regional ore) | via: create:pressing → numismatics:mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: occultism silver is the pack's only real silver (distinct from galosphere palladium); a magic-guild minting silver coin makes the occultist both a magic producer AND the economy's silver-mint specialist — M-08 player-minted currency, not a vendor sale.
- from: occultism:dimensional_mineshaft (spirit miner acquires scarce ores) | via: occultism:miner | to: economy | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: dimensional spirits mine ores that are regionally scarce on the surface — the occultist's spirit logistics arm is the economy's underground acquisition route; players trade with the summoner for what they can't find in their region.
- from: foreign mob/boss drops (alexsmobs, illagerinvasion, etc.) | via: occultism:spirit_fire | to: magic (closes organic→magic loop) | motif: M-11 | power: everyday–endgame | tone: ok | verdict: ACCEPT | hook: spirit_fire is designed as the universal drop-transmutation sink; any pack mob drop that lacks a use gets routed here — keeps the production loop closed.
- from: occultism rituals consuming Create parts (gears, shafts) | via: occultism:ritual (cross-route) | to: create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a summoning ritual requiring a Create mechanical component (e.g. a cogwheel or brass casing) forces the mage to trade with or become the Create tech specialist — neither route is self-sufficient.
- from: occultism:spirit_trade (summoned merchant) | via: occultism:spirit_trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the spirit trader offers goods from an otherworld dimension — a natural service-for-hire: the occultist summons on behalf of other players (trades, rare materials) and charges for the ritual labor.
- from: occultism spirit_trade → coin faucet | via: spirit_trade | to: economy | motif: M-14/M-21 | verdict: REJECT | reason: M-14 and M-21 cut — NPC-style trade-seam to coin is disallowed under the player-run-economy ruling. The spirit_trade link only counts if routed through M-33 service or M-18 logistics (as accepted above), not as a coin faucet.
- OK — existing magic anchor is strong. The two accepted Create-adjacent proposals (M-29 cross-route, M-08 silver mint) give occultism its economy and create second anchors. The dossier's economy candidate was M-09 (retired) — replaced by M-08 + M-33 + M-18 above.

## mysterious_mountain_lib   [anchors: support/library (1)]
- LEAVE — pure code library, 0 blocks, 0 items, no loot. Genuine zero-surface dependency.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — config-only worldgen spacing mod; no items, no blocks, no loot. Genuine zero-surface utility.

## patchouli   [anchors: support/docs (1)]
- LEAVE — documentation-book library. Has 9 colored book items but they are inert cover objects for dependent mods' guidebooks; no gameplay material surface. Routing patchouli:book_blue through anything would be forced and meaningless. Genuine zero-content-surface support mod.

## yet_another_config_lib_v3   [anchors: support/library (1)]
- LEAVE — config-screen builder API; 0 blocks, 0 items. Genuine zero-surface library.

## kambrik   [anchors: support/library (1)]
- LEAVE — Kotlin dev-framework library; 0 blocks, 0 items. Genuine zero-surface library.

## death-count-1.0   [anchors: support/flavor (1)]
- LEAVE — vanilla-scoreboard datapack; no items, no loot, pure cosmetic. Genuine zero-surface mod.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: 847 stone/wood/block cuts | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create saw mass-producing slabs and walls is exactly the automation that earns this deco set its place — a builder bulk-orders cuts from the tech specialist, or the tech specialist sells them; production→economy loop closed.
- from: gravity-block cuts (concrete-powder / sand / gravel slabs-walls) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushing sand/gravel deco cuts back to raw sand/gravel is the recycle leg — lossy but coherent; the Create spine has a recycling branch for the builder's off-cuts.
- REWORK: dossier already identified both these; marking OK — the two candidates are sound and should be ACCEPTED. No existing connections to flag.

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — pure server-side railway threading optimization; 0 blocks, 0 items. Genuine zero-surface performance mod. Indirectly serves aeronautics/logistics pillar but has no material surface to weave.

## packetfixer   [anchors: support/compat (1)]
- LEAVE — network packet-limit fix; 0 blocks, 0 items. Genuine zero-surface compatibility mod.

## beachparty   [anchors: survival (1)]
- from: beachparty:coconut_cocktail (and other cocktails) | via: beachparty:palm_bar_mixing → Numismatics trade context | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: cocktails grant status buffs and are consumed on use — a continuous consumption sink. A coastal bar specialist mixes cocktails that combat players and explorers buy before dangerous trips; demand never zeroes out because the buff is spent.
- from: beachparty:mini_fridge_freezing (bulk ice production) | via: beachparty:mini_fridge → create:mixing (as cold-fluid input) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mini Fridge is the pack's cheapest ice-block source (no Frozen biome needed); Create processes that require a cold fluid (e.g. freezing/crystallization recipes in dndesires or northstar) can pull from the fridge's output — beach mod feeds the tech spine's cooling chain.
- from: beachparty:palm_planks (wood variant) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: palm wood is a distinct wood type; adding a Create saw recipe for palm planks/slabs/stairs means the builder can automate the tropical building material and the tech spine handles all wood uniformly.
- from: cocktails → bare sell economy link | via: numismatics | motif: M-09 | verdict: REJECT | reason: M-09 retired — "cocktails are sellable" is the ambient endpoint; the weave is the consumption-sink demand (M-26, accepted above), not the sell action.
- from: mini_fridge as ice source → Create cooling | motif: M-12 | power: everyday | verdict: ACCEPT (see above) — retained; note the Create cold-chain link is M-12 processing-chain pull.
- REWORK: dossier economy candidate was M-09 (retired). Replaced by M-26 consumption-sink above. Dossier's "Create cooling chain" candidate is accepted as M-12. Palm wood is a natural M-12 addition the dossier didn't call out explicitly.

## architectury   [anchors: support/library (1)]
- LEAVE — cross-platform modding API; 0 blocks, 0 items. Genuine zero-surface library.

== CHUNK COMPLETE ==
