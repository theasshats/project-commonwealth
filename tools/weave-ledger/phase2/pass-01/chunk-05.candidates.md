# Phase 2 candidates — chunk-05

## dynamictreesplus   [anchors: survival (1)]

- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit grinds into a cactus pulp or red dye intermediate — raw desert forage fed through a mill like any crop, exactly how players expect Create to handle bulk organics
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps milled into mushroom powder / red-brown dye feedstock; bulk foraging output finds a processing home in Create, matching the standard "mill the crop" pattern already used for other organic outputs
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: everyday forage at trivial cost; M-09 is for high-effort processed goods — an unworked saguaro fruit is neither scarce nor processed enough to anchor a sell-good; would flood the economy for free
- from: dynamictreesplus:mushroom_branch / cactus_branch | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: branches are essentially stem/wood byproducts; crushing them recycles to gravel/dust with no useful output that isn't already covered by vanilla mushroom processing — thin connection, no gain over the milling route above; keep the single milling accept rather than both

## formationsnether   [anchors: survival (1)]

- LEAVE — the mod registers zero blocks, zero items, and no recipe types; its only surface is generated Nether structures with loot tables. Any "weave" would be a loot-table edit on a mod that offers no material join key, and loot-table injections are not method-routings (no motif covers them). Flagging for future loot-table customisation pass (drop a magic reagent or coin into its altar chests) but that is not a recipe-level weave.

## friendsandfoes   [anchors: survival (1)]

- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a crab claw transmuted in spirit-fire yields a chitin-spirit reagent — crustacean loot enters the occult web as a bestial essence; thematically a sea-creature drop feeding dark-magic processing is coherent
- from: friendsandfoes:copper_golem_head / copper_button / copper_bars (copper deco set) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copperagebackport (also in this chunk) already provides a richer copper-deco crushing candidate; two mods handing the same copper-deco recycle to Create is redundant — the weave goes on whichever copper source is canonical, not both; deferring to copperagebackport's entry
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-02 (spirit_fire) already covers the mob-drop→magic route for crab_claw and is a cleaner single connection; stacking both imbuement and spirit_fire on the same item is over-routing a mid-tier drop — keep M-02 only
- LEAVE (for remaining items) — Moobloom/Glare/Illusioner drops are deliberately vanilla-balanced; Wildfire drops are mob-loot with no unique id in the jar grounding; most drops are everyday organic (no material tag). Don't force crafting connections on vanilla-style mob loot.

## trailandtales_delight   [anchors: survival (1)]

- from: trailandtales_delight:cheese_wheel / cherry_cheese_pie / ancient_coffee | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a hand-crafted cheese wheel or cherry cheese pie is a luxury food worth real coin at a colony market — multi-step archaeology-themed produce becomes an artisan trade good, pushing the food and economy pillars together exactly as the design intends
- from: trailandtales_delight:lantern_fruit (tagged item/foods/berry) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: lantern fruit milled into a glowing juice concentrate or lantern-dye intermediate — a sniffer-crop feedstock routed through the mill the same way other berries/crops are; light, single-step, matches the everyday power tier
- from: trailandtales_delight:cheese_wheel | via: create_cheese:maturing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the pack already has Create Cheese installed (create_cheese:maturing in methods palette) which owns the cheese-maturing mechanic; routing trailandtales_delight's cheese into a second cheese-maturing process would create a dup/overlap with Create Cheese's native wheel — single-method ownership is cleaner, and the M-09 sell-good already covers the output side
- from: trailandtales_delight:cherry_petal_tea / ancient_coffee | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — ancient-archaeology drinks fed into arcane imbuement feels forced; neither item has an arcane theme, and infusing tea into a magic catalyst at everyday tier violates M-10's depth-scales-with-power rule (imbuement should be mid/endgame inputs, not basic foods)




