# Phase 2 candidates — chunk-02

## farm_and_charm   [anchors: survival (1)]
- from: barley/oat grain | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: barley goes into the millstone before it makes bread — the grain harvest feeds the Create spine, not just the pot
- from: butter/eggs surplus | via: farmersdelight:cooking or extradelight:evaporator | to: survival (food web depth) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: animal husbandry output fuels a cooking chain deeper than raw bread — the farm feeds the kitchen feeds the diet system
- from: meat/animal-husbandry surplus | via: minecolonies request / provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a colony's cook hut requests meat and grain from a farm specialist — the colony route locks these as tradeable basics
- from: barley/oat | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling | to: economy (maturation) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: barley mash sits and ferments — grain growers supply the brewing trade, aging pulls a grain surplus into time-value
- from: animal drops (goat_fur, hoglin_hide) | via: cold_sweat sewing table (cross-mod insulation) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: farm animals yield insulating pelts — the husbandry loop meets Cold Sweat's pressure directly; player eats AND stays warm
- from: farmstead surplus → numismatics mint | verdict: REJECT | reason: bare sell link — ambient endpoint of loop, not a demand-gating weave (M-09 retired); no motif
REWORK: dossier candidate "economy via numismatics" is exactly the retired M-09 sell link — confirm retired, no weave authored.
OK — survival anchor is sound. 5 ACCEPT candidates from processing-chain pull + colony + maturation + consumption paths.

## azurelib   [anchors: support/library (1)]
LEAVE — genuine zero-content animation library; no items, no methods, no material surface to route. Sanctioned support role.

## shulkerboxtooltip   [anchors: support/QoL (1)]
LEAVE — pure client tooltip renderer, zero items/blocks/methods. Sanctioned support role.

## appleskin   [anchors: support/QoL (1)]
LEAVE — HUD display-only mod; reads food values, changes none. Zero content to weave. Sanctioned support role. (Naturally complements the survival food layer but has no mechanical surface.)

## bits_n_bobs   [anchors: Create, survival (2)]
- from: tile/chair deco blocks (andesite_tiles, chair_*, calcite_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-produced Create-stone deco gets fed back into the crusher — the deco palette is a lossily recyclable stock, not a dead-end sink
- from: nixie_board / large_nixie_tube | via: create:sequenced_assembly (display-gated control panel) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: an elaborate Aeronautics control panel needs a large nixie board in its sequenced assembly — a display part earns a place in the machine build
REWORK: existing anchors sound — Create (kinetic + made-by item_application/splashing) + survival (deco). M-04 and M-06 reinforce without replacing.
OK — already at goal (2 anchors). Two reinforcing additions proposed.

## upgrade_aquatic   [anchors: survival (1)]
- from: raw_pike / raw_perch / raw_lionfish | via: farmersdelight:cutting + farmersdelight:cooking | to: survival (diet/food web) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ocean fish get filleted on the cutting board and cooked into higher-tier dishes — the diet system gets protein from the sea
- from: cooked_lionfish (rare/poisonous fish) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: lionfish are venomous; spirit-fire transmutes the toxic flesh into an occult essence — "the dangerous fish becomes a dangerous reagent"
- from: coralstone deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: coralstone grinds back to prismarine dust/crystals — oceanic deco feeds the crusher, prismarine byproduct has magic/tech uses
- from: driftwood/riverwood | via: woodworks:sawmill (already inbound) | verdict: REJECT | reason: already woven (made-by woodworks:sawmill is the existing inbound weave); no new edge needed here
- from: cooked_pike / luxury seafood → numismatics sell | verdict: REJECT | reason: bare sell link, retired M-09; economy link only counts when it gates demand — no motif
REWORK: dossier candidate "economy via numismatics sell" is the retired M-09 — do not author. "Create via cutting/crushing coralstone" correctly maps to M-04 (ACCEPTED above).

## blockui   [anchors: support/library (1)]
LEAVE — UI framework library with zero items/blocks/methods. Hard dependency of MineColonies; sanctioned support role only.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Frostmaw's crystallized breath is the keystone in a deep-cold Create process — you fight the glacier-beast to unlock a cryo-processing line
- from: mowziesmobs:earthrend_gauntlet / wrought-metal parts | via: create:mechanical_crafting | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Wroughtnaut's signature iron-bending gear requires forged Create parts to replicate — boss defeat + Create crafting to reach the high-tier alloy
- from: mowziesmobs:ice_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice crystal imbued into a frost-attuned spell focus — the arctic boss feeds the arcane route
- from: mowziesmobs:elokosa_paw (lunar moth boss parts) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the moth-spirit's paw transmuted in spirit-fire yields a nocturnal essence — tribal-mythic creature ties to occult ritual
- from: Grottol ore-eating mob — captured_grottol | via: minecolonies:miner or create:sequenced_assembly (rare extractable use) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a captured Grottol is a rare combat prize that a mining specialist sells — the ore-eater becomes a tradeable extraction asset
- from: boss kills → Numismatics bounty (coin paid directly) | verdict: REJECT | reason: bare M-08 bounty read as NPC coin faucet; the economy link only lands if boss drops gate demand elsewhere (M-15/M-34 above); standalone bounty coin violates player-run ruling
REWORK: dossier candidate "economy via Numismatics bounty" → correctly REJECT; the boss-drop coins are NPC faucet. The real economy link is M-34 (combat-route supply of rare drops). Dossier M-05/M-06 boss-key gating → ACCEPT as M-15 above.

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth + boiler (fuel-burning climate machines) | via: create:filling (already inbound) + gating hearth on Create brass/casing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: building a real climate-control hearth needs Create-processed brass components — survival's warmth machine sits on the tech spine
- from: cold_sweat:goat_fur / chameleon_molt / hoglin_hide (insulation materials) | via: farm_and_charm or alexsmobs cross-drop → cold_sweat sewing table | to: survival (consumption) | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: mob pelts get sunk into insulated armor for Cold Sweat's pressure — demand for hunting/farming never stops as gear wears
- from: cold_sweat:soul_stalk (Nether-realm plant) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul stalk, grown in Nether fire-warmth, transmutes in spirit-fire into a heat-essence reagent — cold & fire meeting in the occult
- from: cold_sweat insulated gear | via: minecolonies colony request | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony in a harsh biome requests insulation-grade armor from a Cold Sweat specialist — climate pressure drives colony trade demand
- from: insulated cold-climate gear → numismatics sell | verdict: REJECT | reason: bare sell link M-09 (retired); the demand-gating is M-28 above, not a vendor price
REWORK: dossier candidate "economy via numismatics" → REJECT (retired M-09). Dossier candidate "Create via filling/gating" → ACCEPT as M-05. Existing inbound `create:filling` is correct.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- from: structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create-themed ruin chest holds a player-minted coin cache — discovering Create infrastructure yields currency, making exploration a supply source for the trade economy
- from: structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars/Occultism reagents seeded into Create-structure loot — the magic player has reason to explore industrial ruins, tying exploration-pressure to the magic production route
REWORK: dossier correctly identifies this as already at 2 anchors. The two loot-seed additions are genuine cross-system links, not forced. OK — connections sound on existing anchors.

## betterstrongholds   [anchors: survival (1)]
- from: stronghold loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding an Ars/Occultism reagent into stronghold chests gives magic specialists a reason to brave the fortress — exploration-pressure feeds the magic route
- from: stronghold loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare Numismatics coin type appears only in stronghold vaults — the deepest dungeon yields player currency, making high-risk exploration the route to economic capital
- from: stronghold itself → bare "find it to sell loot" | verdict: REJECT | reason: ambient sell of loot is the retired M-09 endpoint; the loot-seed candidates above are the real economy link via M-08

## betterdungeons   [anchors: survival (1)]
- from: Catacombs / Undead Fortress / Spider Cave loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism spirit-essences or Ars glyphs seeded into dungeon chests — dungeon-crawl risk is the acquisition path for magic reagents, binding danger to magic production
- from: dungeon loot tables | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare combat-route drops seeded in dungeon chests reward the adventurer/combat specialist, who then trades those reagents to non-combat crafters — the dungeon is the supply end of M-34
- from: dungeon chest loot → "sell it all for coin" | verdict: REJECT | reason: bare M-09 sell link; the demand-gating is M-34 / M-02 above

## do_a_barrel_roll   [anchors: support/QoL (1)]
LEAVE — pure client elytra-movement mod; zero items, blocks, or recipe methods. No content surface to weave. Sanctioned support role.

## create   [anchors: Create (1)]
LEAVE — Create is the method library / the hub that every other mod weaves INTO. It is not a recipient of a 2nd anchor; adding edges that consume Create itself would invert the model. OK per dossier guidance.

## accelerateddecay   [anchors: support/performance (1)]
LEAVE — performance mod replacing leaf-decay ticking; zero items/blocks/methods/content. Sanctioned support role.

## exposure   [anchors: Create, survival (2)]
- from: exposure:aged_photograph (matured via exposure:photograph_aging) | via: exposure:photograph_aging | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: a photograph sits in a frame for in-game days and gains age-patina value — the aging specialist sells archival prints; maturation is already in the method palette (M-35 cites `exposure:photograph_aging` explicitly)
- from: exposure:album (curated photo-book) | via: minecolonies or Trading Floor stall | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a photographer offers commissioned portraits for hire — players pay a photography specialist to document their build/colony; pure service, no vendor
- from: film development automation | via: create:sequenced_assembly (already inbound) | verdict: REJECT | reason: existing inbound weave — the Create anchor is already established via sequenced_assembly; no new edge needed
- from: photograph → numismatics sell (souvenir trade) | verdict: REJECT | reason: bare M-09 sell link (retired); the demand-gating is M-33 service-for-hire above
REWORK: dossier candidate "economy via numismatics" → REJECT M-09. The real economy anchor is M-35 + M-33. OK — Create anchor (sequenced_assembly) is sound.

## notenoughcrashes   [anchors: support/stability (1)]
LEAVE — crash-recovery utility; zero items/blocks/methods. Sanctioned support role.

## terrablender   [anchors: support/library (1)]
LEAVE — worldgen biome-blending API; zero items/blocks/methods/content. Sanctioned support role.

## blueprint   [anchors: support/library (1)]
LEAVE — Team Abnormals framework library; zero items/methods. The one item (template_chest) is trivially vanilla-equivalent and insufficient for a pillar anchor. Sanctioned support role.

## ribbits   [anchors: survival (1)]
- from: Ribbit sorcerer_spawn_egg drop / sorcerer buffs | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Ribbit sorcerer's enchanting power is channeled through an arcane imbuement — the swamp's magical folk feed the magic production route
- from: ribbits:toadstool (mushroom block) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: swamp toadstools transmuted in spirit-fire yield a fungal spirit-essence — the toadstool village feeds the occult reagent line
- from: ribbits:mossy_oak_planks | via: create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: mossy-oak planks through Create's saw yield a unique plank variant and wood-pulp byproduct — the village woodset joins the Create processing chain
- from: Ribbit amethyst-shard trade economy | via: numismatics bridge (amethyst shards → Create-processed → minted coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: amethyst shards from the swamp are smelted/pressed into a regional coin denomination — the frog-folk's trade medium becomes player-minted currency; the Ribbit economy joins the pack economy
- from: Ribbit merchant → sell swamp goods for emeralds/vanilla | verdict: REJECT | reason: vanilla NPC trade is a coin faucet (M-21 cut); the economy link only lands via M-08 player-minting above, not vanilla emerald trades
REWORK: dossier candidate "Create toadstool/mossy-oak via cutting" → ACCEPT as M-04. Dossier candidate "economy bridge via numismatics" → ACCEPT as M-08. Both are valid.

== CHUNK COMPLETE ==
