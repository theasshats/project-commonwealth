# Phase 2 candidates — chunk-15

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: crypt chests drop Occultism spirit-shard or Ars reagent fragments — dungeon-crawl earns your way into magic
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Catacombs/Undead Fortress chests seed rare combat-route drops (boss-adjacent trophies, raw currency blanks) that non-combat players buy from specialists
- from: betterdungeons loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: seeding coins directly into chests is an NPC-faucet analog (coins from non-player source); contradicts player-minted-currency rule — M-34 (tradeable combat loot) is the correct frame
- REWORK: existing survival anchor is sound; loot tables are unexploited weave surface — the two ACCEPT rows above cover the gap.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:mining_core (geode-worldgen consumable) | via: create:crushing | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Mining Cores come from regional geodes (~30-chunk spacing), so the coin-minting rate is regionally scarce — a coin-production specialist must settle near a geode cluster or trade for cores
- from: createblockchain:currency_miner FE input | via: createaddition:alternator (SU→FE) | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the miner's FE demand forces the coin-mint operator to maintain a Create rotational power plant — minting is a production chain, not a free button
- from: createblockchain:cryotheum_coolant | via: create:mixing (or create:filling) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: coolant is a secondary consumable (thermal management), not a flagship gate item — M-05 requires the flagship item to be gated in its own machine; this would be contrived depth on a support input
- OK — core economy + Create anchors are sound; M-30 + M-29 rows deepen them without forcing new pillars.

## createthreadedtrains   [anchors: support/performance (0 weave surface)]
- LEAVE — pure server-side performance mod; 0 items, 0 methods, no material surface. Indirectly enables the aeronautics/logistics pillar (big train networks stay TPS-healthy) but has nothing to route material through.

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero-item bridge mod; its only surface is the Ars source ↔ Iron's mana unification at the data level. No foreign-material I/O. Forcing a 2nd anchor would require inventing an item surface that doesn't exist. It IS the M-01 seam already (magic-internal); that's sufficient.

## toomanypaintings   [anchors: support/decoration (0 weave surface)]
- LEAVE — 0 items, 0 methods, decorative only. No material to route; no loot table (loot=no). A forced edge would be a defect.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled stone/brick variant blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: rechiseled bricks and tiles crush back to raw/gravel + XP nugget on a crusher — the deco palette feeds Create's gravel/material loop (lossy, as required)
- from: rechiseled deco variants as copycat source | via: create_connected copycat blocks | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks already consume rechiseled variants as texture skins, which is a Create aesthetic tie not a material weave — the M-04 crushing row above is the real anchor; this is a duplicate framing

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks' arcane battery / charged focus items slot into the tesla-coil charging station — the electrical layer feeds a magic-gear recharge loop
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: surplus farmed seeds → press → seed oil → liquid burner fuel; the farm feeds the factory's energy grid, closing the agriculture→industry loop
- from: createaddition:rolling (ingot→rod/wire) | via: createaddition:rolling | to: Create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: rolling is internal to Create's production chain (wires/rods are Create-internal intermediates); this doesn't cross a pillar boundary — it's M-32-adjacent at best but both ends are Create
- REWORK: dossier's existing "survival/economy via liquid_burning" candidate is labelled WEAK and economy-side — the economy framing is wrong (it's a consumption/fuel link, not demand-gating). The survival anchor via M-12 (farming → energy) is the correct label; accept it under survival, not economy.

## fogoverrides   [anchors: support/client (0 weave surface)]
- LEAVE — config-only visual mod; 0 items, 0 methods, no loot. Sanctioned support anchor requiring no weave.

## create_jetpack   [anchors: Create, aeronautics (2)]
- from: create_jetpack:netherite_jetpack upgrade | via: boss loot gate (KubeJS) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Netherite-tier lava-traversal jetpack requires a boss-drop component as a craft gate — personal survival mobility at high tier costs defeating a danger (coherent with DESIGN north-star)
- OK — Create + aeronautics anchors are sound. M-15 row adds a survival tie at endgame tier without gating the everyday brass jetpack.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (sequenced_assembly inbound) + aeronautics (train/contraption lighting purpose) are both strong and correctly assigned. No new weave needed; the 2-pillar goal is met and adding a 3rd would be forced.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-flavoured ruins carry rare fabricated components as loot — a combat/exploration specialist loots them and trades to the crafting players who need them
- from: create_ltab structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the structures are industrial/Create-themed (ruins, workshops) — seeding magic reagents in them would be tonally awkward; M-34 (explorer-tradeable fabricated drops) is a better fit and already accepted
- OK — Create + survival are sound; M-34 loot-seed gives the 3rd pillar touch via economy without forcing a tone clash.

## opacpvp   [anchors: support/PvP-rules (0 weave surface)]
- LEAVE — no items, no methods, no loot. Social/rules utility; no content surface to weave. The co-op premise is served directly; no motif applies.

## kambrik   [anchors: library/API (0 weave surface)]
- LEAVE — Kotlin framework library; zero gameplay surface.

## dragonlib   [anchors: library/API (0 weave surface)]
- LEAVE — developer abstraction library (MrJulsen); the lone `dragonlib:dragon` block is a dev artifact, not player-facing content.

## jei   [anchors: support/client-UI (0 weave surface)]
- LEAVE — recipe-viewer UI; no items, no methods, no material. Load-bearing for pack legibility (the JEI-not-EMI constraint in CLAUDE.md) but has no weave surface.

## create_connected   [anchors: Create (1)]
- from: create_connected:item_silo / inventory_bridge | via: logistics integration (config/design) | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: item-silo + inventory-bridge as station-side bulk-buffer nodes in an aeronautics cargo run — trains/ships load from silos, making logistics-scale distribution require the transport arm
- from: create_connected copycat blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copycat blocks are 1:1 texture skins, not stone/metal deco — crushing them back would be round-trip arbitrage on any material, violating the anti-round-trip rule; M-04 is for stone/metal deco only
- REWORK: dossier leaves create_connected at 1 anchor (Create) with no 2nd candidate. The M-31 row above (logistics infrastructure → aeronautics) is the natural 2nd anchor — the silo/bridge blocks are load-in-out nodes for cargo trains; that's an aeronautics tie at the infrastructure level.

## jamlib   [anchors: library/API (0 weave surface)]
- LEAVE — cross-platform library for JamCoreModding mods; no gameplay surface.

## nochatreports   [anchors: support/privacy (0 weave surface)]
- LEAVE — network-layer privacy mod; no items, no methods.

## mcwstairs   [anchors: support/decoration (1)]
- from: mcwstairs stone/brick/blackstone stair variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone balconies and brick railings crush to gravel + XP nugget — the architectural palette feeds back into Create's material loop (lossy by design)
- from: mcwstairs wood stair variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crushing to planks/sawdust is already covered by vanilla log→plank paths; adding another wood-crush layer is redundant and low-value — stone/brick variants are the coherent targets

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau Vitalic Sourcelink (mob deaths → Source) | via: organic mob output (passive feed) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: mob farms built by survival specialists passively fill Ars Source — the mob-kill surplus is the magic system's primary fuel; survival pressure creates magic supply
- from: ars_nouveau Agronomic Sourcelink (crop/tree growth → Source) | via: farm output | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasonal crop farms (Serene Seasons-gated harvests) produce Source spikes in summer/fall — magic power follows the seasonal calendar, making the season a magic-production lever
- from: ars_nouveau imbuement / enchanting_apparatus | via: ars_nouveau:imbuement | to: Create | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-processed metal plates or refined alloys (electrum, brass) fed into the Imbuement Chamber gain arcane properties — the Create production chain feeds the magic tier-up, cross-route dependency
- from: ars_nouveau:source_gem | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: source_gem is the universal magic currency; this hub is already reserved as M-01 — record as established/sound, not a new proposal
- from: ars_nouveau spell scrolls / enchanted gear | via: player trade | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars specialist enchants gear for other players' coin — enchant-for-hire is a pure labor service; the knowledge (spell composition) is the non-tradeable barrier (M-37 complement), only the product moves
- from: ars_nouveau:source_gem as sell good | via: player market | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: M-09 retired — "sellable" is the ambient endpoint, not a weave; the M-33 service row is the correct economy framing
- from: ars_nouveau:drygmy mob-drop farm | via: ars_nouveau:summon_ritual + Create auto-output | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Drygmy farm outputs rare mob drops → Create funnel → processing chain; magic-gathered material feeds Create production (cross-route: magic specialist supplies Create specialist)
- REWORK: dossier has magic at 1 anchor, lists survival/economy as weak candidates. The ACCEPT rows above establish survival (M-02 mob-fuel, M-16 seasonal-source) and economy (M-33 service) as real 2nd/3rd anchors. The existing "economy via numismatics" candidate in the dossier is correctly labelled weak — it was a bare M-09 framing which is retired; now superseded by M-33.

== CHUNK COMPLETE ==
