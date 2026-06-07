# Phase 2 candidates — chunk-12

## zombiemoon   [anchors: survival (1)]
<!-- power-read: no items, no drops, no unique reagent. Dossier: 0 items/blocks, loot=no, "no unique drop". The mobs use vanilla rotten-flesh-style drops; the dossier's own sweep found nothing to route through any method-palette entry. -->
- LEAVE — zero content surface: no items, no unique drops, no loot tables (loot=no per digest). Nothing to route through any method in the palette. Pure difficulty-mob layer; forcing a drop-reagent here would be an invented edge.

## bakery   [anchors: survival (1)]
<!-- power-read: 84 items, 51 blocks, loot=yes. Dossier confirms existing inbound weave through farm_and_charm cooking methods. Outputs are high-tier processed foods (cakes, tarts, jams). Already lives downstream of the Farm & Charm/Let's Do cooking chain. 2nd-anchor candidates from dossier: economy M-09 (STRONG), Create M-12 milling (MED), magic Ars source (WEAK). Power-tier of finished bakery goods: mid (multi-step chain) to endgame-cosmetic (elaborate tiered cakes), earned through real ingredient chains. Red-team: economy sell of luxury baked goods is coherent — this is exactly what artisan players would stockpile and sell. Red-team against magic: "a muffin feeds magic" is tonally weak. Create milling: wheat→flour as an alternate path to hand-milling is fine, doesn't gate basics (flour still available from crafting_bowl). -->
- from: bakery finished cakes/tarts/jams | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a baker can mint coin from high-effort sweets the way a smelter mints it from metal — the cook's income stream
- from: wheat/flour | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create flour mill supplies the bakery — the tech spine feeds the kitchen, not just swords
- from: baked goods as Ars/Occultism source/reagent | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: "a cupcake is an arcane catalyst" is tonally absurd — the bakery's vibe is rustic-agrarian, not arcane; no coherent lore link survives red-team
REWORK: OK — connections sound (existing farm_and_charm inbound weave is the correct cooking-chain pull; both ACCEPTs above add new pillars without disturbing it)

## dynamic_fps   [anchors: support/performance (1)]
<!-- power-read: 0 items, 0 blocks, loot=no. Pure client-side FPS throttle utility. No gameplay surface whatsoever. -->
- LEAVE — genuine zero-content code mod: throttles FPS when unfocused, no items, no blocks, no recipe types, no loot. No material surface to route through any method.

## azurelib   [anchors: support/library (1)]
<!-- power-read: 1 block (lightblock, internal utility), 0 items, loot=no. Animation engine/API for entity mods. The lightblock is an internal dynamic-light helper, not a player-craftable item. No recipe types. -->
- LEAVE — pure animation-engine library: the one block is an internal render helper not accessible to players. No recipe types, no items, no methods to pull through. Exists solely as a dependency for animated boss/mob mods.

## simplehats   [anchors: support/cosmetic (1)]
<!-- power-read: 351 items (the hat catalogue), 0 blocks, loot=no (digest). The hats drop via grab-bags from hostile mobs and loot chests. The grab-bag system is the mod's self-contained economy (hats↔scraps↔bags). simplehats:custom_hatscraps and simplehats:custom_hatvariants are registered recipe-types in the palette — potential inbound weave points. Dossier 2nd-anchor candidates: economy via Numismatics M-09 (MED). Power-tier: cosmetic-only items. No stats. Red-team against economy sell: "a player sells a hat" — does this fit M-09? M-09 is "high-effort consumable → coin"; hats are cosmetic non-consumables, not processed goods. The analogy is "luxury good sold for coin" which is thematically OK for a player-run market, but hats are not "produced" through any method — they're found in loot. This is more of a loot-seed tie than a production-chain economy link. Red-team: forcing a coin conversion recipe for hats feels arbitrary — the sell-to-merchant angle is the more player-natural one. Via: M-14 bounty angle: rare hats as bounty prizes (pay coin for a specific mob kill, get a hat from the board) → this goes the wrong direction (coin → hat, not hat → coin). Via: M-09 luxury sell: seeding rare hats into Numismatics sell-price tables so players can cash in duplicates is coherent; light config edit, not a recipe. Motif: M-09 (luxury-good→coin, via config/trade table rather than a recipe step). Tone: ok — a cosmetic bazaar where rare hats are currency-adjacent is charming, not forced. -->
- from: rare/duplicate hats (simplehats grab-bag output) | via: numismatics sell-price config | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hats are a vanity commodity — duplicate collectors cash them in at the coin shop like trading cards
- from: simplehats grab-bags in hostile-mob loot | via: loot-seed | to: survival (combat→cosmetic reward) | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty-board→coin (combat→economy); routing combat loot toward a cosmetic reward rather than coin doesn't fit the motif cleanly; the existing drop-from-mob mechanic already covers this without an authored weave
REWORK: OK — no existing authored connections to rework; the ACCEPT above is the first proposed weave


