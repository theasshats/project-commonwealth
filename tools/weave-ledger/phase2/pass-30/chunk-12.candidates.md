# Phase 2 candidates — chunk-12 (pass-30, blind)

## configuration   [anchors: support/library (1)]
- LEAVE — pure config-screen library by Fzzy; 0 blocks/items, no methods, no materials. Genuine zero-content code library, nothing to weave.

## tipsmod   [anchors: support/client (1)]
- LEAVE — loading-screen tip framework; 0 items/blocks, no materials. The only "content" is pack-authored tip text (onboarding/lore), which is copy authoring, not a cross-system weave.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences:*_metal_fence / *_metal_fence_gate | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 deco-recycle is technically valid but everyday-tier deco; not worth an isolated edge. Only fold in as part of a wholesale pack-wide deco-crush family pass (consistency), not a standalone weave here. Decoration is a sanctioned single-anchor support role.
- LEAVE — decoration palette; coherent 2nd anchor is only the lossy metal-fence crush, which is too thin to author alone.

## fishingreal   [anchors: survival (1)]
- LEAVE — behavior tweak (catch item -> live entity); 0 items/blocks of its own, no method other mods can feed. Any weave belongs to the fish-content/cooking mods it sits beneath (createfisheryindustry, farmersdelight), not here.

## tfmg   [anchors: Create (1)]
- from: tfmg:diesel/gasoline/lpg fuels + combustion engines | via: TFMG distillation -> Aeronautics engine intake | to: aeronautics | motif: M-13 | power: endgame | tone: ok | verdict: ACCEPT | hook: your airship runs on diesel you refined from crude — fuel is a real supply line, not a free tank.
- from: tfmg:steel / steel plates / cast iron | via: structural part -> Aeronautics airframe/hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: hulls and airframes are fabricated from real refined steel, scaling cost with ship tier.
- from: tfmg combustion engine / flywheel / mechanical parts | via: component -> Aeronautics drivetrain/control recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ship's propeller/engine is driven by an actual TFMG combustion block, not a generic part.
- from: tfmg steel/aluminum/plastic | via: KubeJS cross-route input into a magic or ritual chain | to: magic (cross-route) | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic apparatus part needs industrial steel, forcing the magic specialist to trade with the industry specialist.
- from: tfmg crude oil / bauxite / lithium / nickel | via: GTMOGS regional ore-gen -> distillation/blast input | to: economy (scarcity) | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: oil and bauxite only generate in certain regions, so refined fuel/aluminum must be traded across the map.
- from: tfmg:steel / fuel cans | via: mint for coin / sellable | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: bare sell link; economy is player-run. The real demand-gating is captured by M-30 (regional scarcity) and M-29 (cross-route), so the sell framing is the ambient endpoint, not a weave.
- from: tfmg coke-oven creosote / sulfur / saltpeter byproducts | via: feedstock into another process (e.g. createbigcannons propellant / gunpowder chain) | to: Create/production (byproduct->input) | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: coke-oven creosote and sulfur byproducts aren't waste — they feed munitions/treatment chains.
- REWORK: existing dossier 2nd-anchor "economy via steel/fuel as luxury good (M-08/M-09)" is mis-motifed — M-09 is retired and the framing is a bare sell. Re-express as M-30 regional scarcity + M-29 cross-route (above). Minting steel/fuel "for coin" is not the weave.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight grain/coffee/sugar/citrus crops | via: create:milling / create:crushing / create:pressing | to: Create | motif: M-12 | power: everyday-mid | tone: ok | verdict: ACCEPT | hook: grind grain to flour and press citrus to juice on Create machines, so the kitchen reads as Create's downstream instead of a parallel pipeline.
- from: extradelight feasts / high-tier dishes | via: MineColonies provisioning / colony food requests | to: economy (colony) | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony's worker upkeep is fed by feasts, gating real demand for cooked food rather than selling it to a vendor.
- from: extradelight feast / cooked dish | via: consumed against hunger/saturation upkeep | to: survival (consumption sink) | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: feasts are eaten and run out, so demand for the cook's output never zeroes.
- from: extradelight aged/dried goods (drying_rack/evaporator/vat) | via: maturation/reduction time-gate | to: economy (maturation) | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: dried/reduced goods must sit to gain value, creating an aging-specialist niche.
- from: extradelight luxury feasts | via: sellable luxury good for coin | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: dossier's M-09 "luxury good->coin" is retired/bare-sell. Demand-gating is already M-28 (colony) and M-26 (consumption); the sale is the ambient endpoint.
- REWORK: dossier candidate "economy via numismatics ... M-09 luxury good->coin" is on a retired motif — replace with M-28 colony provisioning + M-26 consumption (above). Existing Create+survival anchors are sound.

## owo   [anchors: support/library (1)]
- LEAVE — pure UI/config/networking library (owo-lib); 0 blocks/items, no materials or methods. Zero-content code library.

## betterpingdisplay   [anchors: support/client (1)]
- LEAVE — client UI mod (numeric ping); 0 items/blocks, no gameplay surface. Nothing to weave.

## accessories   [anchors: support/library (1)]
- LEAVE — accessory-slot API (Curios/Trinkets alternative); registers no wearables itself. The wearables that would weave live in the host mods, not here. Zero-content library.

## galosphere   [anchors: survival, magic (2)]
- from: galosphere:palladium (silver_ingot id) ore | via: create:crushing ore-doubling | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium ore crushes for a doubling byproduct, folding the regional metal into the tech spine (vanilla smelt path stays).
- from: galosphere:palladium | via: GTMOGS regional ore-gen -> recipe input | to: economy (scarcity) | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: palladium is region-locked per the pack's scarcity foundation, so anything needing it must trade across regions.
- from: galosphere:palladium | via: Create-refine then player-press into Numismatics coin | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a regional metal can be minted by players into the settlement coinage — minting is a specialization, not a vendor sale.
- from: galosphere:allurite_shard / lumiere_shard | via: host magic method as attunement catalyst | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT (confirm existing) | hook: the cave shards gate magic conversions so they aren't free arbitrage — this is its real second pillar, reserved-reagent, already established.
- from: galosphere deco bricks/lamps | via: create:crushing recycle | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: everyday deco-recycle, too thin alone; fold into a pack-wide deco-crush pass, not a standalone weave.
- REWORK: OK — survival + magic (M-07) connections sound. (M-07 reagent-ownership respected: allurite/lumiere reserved; palladium kept off c:ingots/silver per CLAUDE.md gotcha.)

## createthreadedtrains   [anchors: support/performance (1)]
- LEAVE — server-side train-threading performance mod; 0 items/blocks, no material. Indirectly serves logistics/aeronautics by keeping rail TPS healthy, but as a perf fix it has nothing to route. Zero-content library.

## imfast   [anchors: support/QoL (1)]
- LEAVE — movement-validation mixin removing the anti-cheat speed kick; 0 items/blocks. Functionally enables aeronautics at speed but is a behavioral patch with no wireable resource. Zero-content library.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs exotic drops (ender_residue, void_worm_beak, ambergris) | via: occultism:spirit_fire / ritual or ars_nouveau:imbuement | to: magic | motif: M-02 (+M-11) | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: rare creature drops become ritual/infusion reagents, so the fauna feeds the magic web instead of dead-ending.
- from: alexsmobs bone/shell/dust drops | via: create:crushing / create:mixing | to: Create | motif: M-03 (+M-02) | power: everyday-mid | tone: ok | verdict: ACCEPT | hook: common mob drops mill/mix into intermediates, threading fauna into the tech spine.
- from: alexsmobs boss-tier drop (void_worm_beak) | via: boss drop as gate item in a complex Create/tech recipe | to: Create (boss-key) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Void Worm trophy unlocks a high-tier machine — the boss as a progression gate.
- from: alexsmobs combat-farmable boss drops | via: boss drop -> emergent player-to-player trade | to: economy (combat-supply) | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a combat specialist farms void-worm/boss drops and trades them to non-combat players who need the gate items.
- from: alexsmobs rare drops/tames | via: sell for coin | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: dossier's "M-08 coin-from-scarcity" here is really a bare sell; the demand-gating is M-34 (combat-supply) + M-15 (boss-key), so the sale is ambient.
- REWORK: dossier "economy via Numismatics ... M-08 coin-from-scarcity" mislabels a bare sell; re-express as M-34 combat-supply (above). Survival anchor sound.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: dungeons_arise_seven_seas ship/fortress/ruin loot chests | via: loot-seed (datapack edit) of magic reagents or boss-key drops | to: economy/magic | motif: M-34 (combat-supply) or M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boarding a galleon yields a traded reagent/component, so the explorer-specialist supplies others — a loot-table edit, not a recipe.
- from: dungeons_arise_seven_seas naval theme | via: thematic adjacency to airships | to: aeronautics | motif: (none) | power: n/a | tone: clash | verdict: REJECT | reason: static jigsaw structures with no functional vessels; an aeronautics edge would be purely aesthetic. no-motif.
- REWORK: dossier said "leave," but loot=yes — a loot-seed candidate (M-34/M-02) is a real Phase-3 datapack action and beats LEAVE per briefing (don't LEAVE a loot-bearing structure mod).

## formationsnether   [anchors: survival (1)]
- from: formationsnether altar/chest loot tables | via: loot-seed (datapack edit) seeding a magic reagent or boss-key/component | to: magic / economy | motif: M-02 (or M-34) | power: mid | tone: ok | verdict: ACCEPT | hook: a Nether ritual-altar ruin drops an arcane reagent worth trading for — the structure feeds the magic/economy web via its loot table.
- from: formationsnether loot | via: drop a sellable/bounty coin reward | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: dossier's "M-08 coin from loot" as a coin faucet/bare reward isn't demand-gating; seed a real reagent/component (M-02 above) instead, not loose coin.

## lionfishapi   [anchors: support/library (1)]
- LEAVE — entity-animation API for L_Ender's mods; 0 items/blocks, no materials. Zero-content code library.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull | via: occultism:spirit_fire transmutation sink | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull is a mob-drop reagent for an occult transmutation, giving the skull a sink beyond decoration.
- REWORK: dossier's "economy" anchor leans on right-click Emerald villager-style trading. Under the player-run ruling, an NPC kobold selling potions/enchants/redstone for emeralds is an NPC faucet, not the player economy — its economy anchor is the weak (vanilla-trade) kind. Flag: the genuine cross-system weave for kobolds is M-02 (skull->occult) above; the "economy" anchor is ambient NPC trade, not a demand-gating weave. Survival anchor (underground civilization/structures) is sound.

## inventoryprofilesnext   [anchors: support/client (1)]
- LEAVE — client-side inventory-management UI; 0 items/blocks, no materials. Zero-content QoL mod.

## createbigcannons   [anchors: Create, aeronautics (2)]
- from: createbigcannons munitions/shells (consumed when fired) | via: consumption sink (fired & destroyed) | to: survival/economy (consumption) | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: shells are spent every shot, so a combat player's demand for munitions never zeroes — the munitions specialist always has buyers.
- from: createbigcannons shells/munitions | via: produced by a smith, traded to combat players | to: economy (combat-supply) | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a metallurgy specialist supplies cannon-grade munitions to the PvPvE frontline players — value flows player-to-player.
- from: createbigcannons cannon-grade steel/nethersteel | via: KubeJS cross-route requiring a magic or colony input | to: production (cross-route) | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: top-tier nethersteel munitions need an input from another route, forcing the cannoneer to trade rather than self-supply.
- from: createbigcannons gunpowder/propellant | via: tfmg sulfur/saltpeter byproduct as feedstock | to: production (byproduct->input) | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG coke-oven sulfur/saltpeter feeds the propellant chain — industry waste arms the cannons (pairs with tfmg M-32 above).
- from: createbigcannons finished shells | via: sell war-good for coin | to: economy | motif: (none) | power: mid | tone: ok | verdict: REJECT | reason: dossier's "M-09 luxury/processed good->coin" is retired/bare-sell; the demand-gating is M-26 (consumption) + M-34 (combat-supply).
- REWORK: dossier 3rd-anchor "economy via numismatics ... M-09" is on a retired motif; replace with M-26 + M-34 (above). Create + aeronautics (ship cannons) anchors sound.

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors:*_glass_door / metal door variants | via: create:crushing recycle | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: everyday deco-recycle, too thin to author alone; only fold into a pack-wide deco-crush family pass. Decoration is a sanctioned single-anchor support role.
- LEAVE — decoration palette; the sole coherent edge is the lossy metal/glass door crush, too thin for a standalone weave.

== CHUNK COMPLETE ==
