# Phase 2 candidates — chunk-07

## endermoon   [anchors: survival (1)]
- LEAVE — pure spawn-weight event; 0 items/blocks/loot. Any weave belongs on the ender-pearl supply side (vanilla drop), not this mod. No content surface to route.

## bcc   [anchors: support (1)]
- LEAVE — version-handshake utility; 0 items/blocks/loot. No content surface.

## create_factory   [anchors: Create, survival (2)]
- from: create_factory sweet foods (waffles, caramel/honey/chocolate rolls + apples, cream_bucket) | via: farmersdelight:cooking or create:mixing | to: survival (food-web depth) | motif: M-12 | power: everyday | tone: ok — dessert factory feeding into the food web is natural | verdict: ACCEPT | hook: The waffle line and cream fluid need inputs from other kitchens, and its output dishes sit beside FD meals on the food table — one more stop in the cooking chain.
- from: create_factory jam/spread/nectar fluids (sweet_berries_jam, glow_berry variants) | via: create:filling → extradelight:vat or ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — forcing a dessert jam into magic infusion feels arbitrary; the jam has no arcane property | verdict: REJECT | reason: theme clash; jam→magic is not coherent, no ingredient story justifies it
- from: create_factory finished sweets (caramel_apple, honey_waffle, etc.) | via: extradelight:drying_rack or vinery:wine_fermentation | to: survival/economy | motif: M-35 | power: everyday | tone: ok — aging a confection (candied apple, set jam) is coherent | verdict: ACCEPT | hook: A candied apple or honey roll that needs to sit and set under the right conditions gains real value; a confectioner can age batches and trade the finished goods.
- REWORK: existing anchor note mentions M-09 (luxury good→coin) as an economy-pass bonus — M-09 is retired; that note should be struck. No bare sell link is a weave. The two current anchors (Create + survival) are sound; the retired M-09 flag just needs removal.
- OK — two anchors (Create + survival) are coherent; the food web tie through create:mixing/pressing/filling is the right form.

## platform   [anchors: support (1)]
- LEAVE — cross-platform code library; 0 items, 0 loot, no gameplay surface.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok — a hallowed gem from the arcane Invoker boss reads as a magical artifact; feeding it into an infusion ritual is exactly the right form | verdict: ACCEPT | hook: Killing the Invoker is the hard gate; its Hallowed Gem then unlocks an imbuement or ritual step that no pre-boss player can shortcut — makes the boss dual-role (combat threat + magic key).
- from: illagerinvasion:illusionary_dust (Illusioner mob drop) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok — illusionary dust from an illusion-casting mob is a natural magic reagent | verdict: ACCEPT | hook: Illusionary Dust transmuted through spirit fire into a confusion or illusion essence; a mid-tier magic reagent that demands some raiding, not mining.
- from: illagerinvasion:platinum_chunk (mob drop) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok — platinum is a metal; crushing it to a processed metal intermediate is standard ore-doubling logic | verdict: ACCEPT | hook: Platinum chunks from illager raids feed the crushing wheel for a processed intermediate, linking the raiding loop to the Create production spine.
- from: illagerinvasion:hallowed_gem (boss drop gate) | via: recipe requiring hallowed_gem as a component | to: Create | motif: M-15 | power: endgame | tone: ok — a gem from a hard boss as the gate for a high-tier Create component is coherent and follows the boss-key design | verdict: ACCEPT | hook: The Invoker is one of the pack's harder bosses; its Hallowed Gem gates a powerful Create recipe rather than sitting inert in a chest.
- from: illagerinvasion boss/raid drops (hallowed_gem, platinum_chunk, illusionary_dust, lost_candle) | via: player-to-player trade (emergent) | to: economy | motif: M-34 | power: mid–endgame | tone: ok — combat specialists farm raids and sell the unique drops to non-combat crafters; closes the loop cleanly | verdict: ACCEPT | hook: A raid specialist becomes the server's reagent supplier — non-combat players need the dust and gems; they can't skip the raids, so they trade.
- REWORK: existing 2nd-anchor candidates in the dossier cite M-08 for platinum_chunk as "bounty/scarcity" — M-08 is player-minted currency (metal → coin), not a generic scarcity note. If platinum_chunk is meant as coin stock that's M-08 proper; if it's just "scarce and tradeable" the economy link is M-34 (combat-route supply). Recommend replacing the dossier's vague M-08 candidate with either a real M-08 proposal (platinum → Create-processed → minted coin) or M-34.
- from: illagerinvasion:platinum_chunk | via: create:* processing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — platinum is a plausible precious metal; minting specialist coins from raid-obtained platinum adds a second reason to farm illagers | verdict: ACCEPT | hook: Platinum from Invoker raids is processed and pressed into a rare denomination; the minting specialist controls a coin supply that flows from combat through Create into the player economy.

## imfast   [anchors: support (1)]
- LEAVE — server-side movement-validation patch; 0 items/blocks/loot. No content surface.

## wits   [anchors: support (1)]
- LEAVE — structure-identification command; 0 items/blocks/loot. No content surface.

## particlerain   [anchors: support (1)]
- LEAVE — client-side weather particle renderer; 0 items/blocks/loot. No content surface.

## death-count-1.0   [anchors: support (1)]
- LEAVE — scoreboard datapack (death tally); 0 items/blocks/loot. No content surface.

## collective   [anchors: support (1)]
- LEAVE — shared-code library; 0 items/blocks/loot. No content surface.

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike, raw_perch, raw_lionfish) | via: farmersdelight:cutting or farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok — cutting/cooking fish is the obvious processing step; these new fish species deserve the same treatment as vanilla fish | verdict: ACCEPT | hook: A player specialized in ocean fishing brings raw pike and lionfish to the cutting board, feeding the food web with variety catches nobody else has.
- from: upgrade_aquatic cooked fish + seafood dishes | via: extradelight:drying_rack or extradelight:evaporator | to: survival/economy | motif: M-35 | power: everyday | tone: ok — cured/dried fish (salted, smoked) is a coherent aging/processing step; trade-ready shelf-stable goods | verdict: ACCEPT | hook: Dried lionfish or salted pike produced by an ocean specialist trades to inland players who need food variety; the ocean route feeds the food economy without any single player covering it all.
- from: upgrade_aquatic:driftwood_* / riverwood_* wood | via: woodworks:sawmill (already inbound) → create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok — a new wood type recycling through Create's saw is the standard deco↔Create bridge | verdict: ACCEPT | hook: Driftwood planks and slabs pass through a Create saw or crushing wheel; scrap returns to pulp, tying ocean exploration material into the Create recycling chain.
- from: upgrade_aquatic coralstone / kelp block | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — coralstone is a stone-type decorative; crushing returns rubble and byproducts, standard recycling | verdict: ACCEPT | hook: Coralstone quarried from ocean structures recycles in a crushing wheel — a minor but coherent tie between ocean exploration and the Create production loop.
- from: upgrade_aquatic raw/cooked fish as regional ocean good | via: emergent trade | to: economy | motif: M-30 | power: everyday | tone: ok — ocean fish are only catchable in ocean regions; an inland player can't self-supply | verdict: ACCEPT | hook: Pike and perch come from river/ocean biomes; a player settled inland must trade for them, making the ocean specialist's catch regionally scarce.
- REWORK: dossier candidate cited M-09 (numismatics sell) — M-09 retired; strike it. The real economy link is M-30 (regional scarcity) as accepted above.

## chefsdelight   [anchors: survival, economy (2)]
- from: chefsdelight Cook/Chef villager trades (FD meals for emeralds) | via: villager trade → player food supply | to: survival | motif: M-26 | power: everyday | tone: ok — Cook/Chef villagers are a recurring food-supply tap; players burn food (consumption sink), so the demand never zeroes | verdict: ACCEPT | hook: The village Cook sells ready meals; players burn through food on long expeditions and return to restock — a consumption-driven demand loop that feeds the economy without being a static store.
- from: chefsdelight villager trades denominated in emeralds | via: numismatics KubeJS trade redirect | to: economy | motif: M-08 | power: everyday | tone: ok — routing the trade currency from emeralds to player-minted coin is the pack's intended settlement medium; it makes Cook/Chef a coin-sink rather than emerald-sink | verdict: ACCEPT | hook: If a Cook accepts minted coin instead of emeralds, the Cook becomes a place where coin drains back out of the player economy — a demand gate, not an NPC faucet.
- REWORK: dossier candidate mentioned M-09 (route trades onto numismatics coins) but flagged it as M-09 — M-09 is retired. The correct framing is M-08 (minted coin as the medium, Cook as coin-drain demand node), accepted above.
- OK — two anchors (survival + economy) are sound. The REWORK corrects the stale M-09 note.

## moonlight   [anchors: support (1)]
- LEAVE — API/library for MehVahdJukaar mods; 0 content items/blocks/loot of its own. No content surface.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts brass/copper/andesite train fittings (windows, steps, slides) | via: create:pressing + crafting table | to: Create | motif: M-20 | power: everyday | tone: ok — brass sliding windows built from pressed brass sheets is natural; it routes the decorative through Create's manufacturing step | verdict: ACCEPT | hook: A train window or boarding step requires a pressed brass sheet from the Create line — the railway builder needs the Create spine, not just raw brass.
- from: create_train_parts passenger-car fittings (steps, windows, slides) at scale | via: aeronautics/train cargo logistics (emergent) | to: economy | motif: M-31 | power: mid | tone: ok — building a full passenger train at scale requires many fittings; that volume is an aeronautics/logistics challenge and a trade good | verdict: ACCEPT | hook: Outfitting a passenger train with windows and steps at scale is a logistics task — bulk fittings are heavy, and the rail/airship network is the way to move them efficiently to the build site.
- REWORK: dossier suggests a weak M-04-adjacent edge (crushing back to raw) — M-04 fits lossy recycling of deco blocks; train-part fittings are construction blocks, not deco-recycling candidates. The proposed M-04 candidate should remain REJECT.
- from: create_train_parts train-fitting blocks recycled | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: weak — crushing a purpose-built fitting back to gravel is lossy and not a meaningful production loop; dossier already flags this as weak | verdict: REJECT | reason: low-value lossy recycling of a construction block; no demand story; M-04 is for deco surplus, not functional fittings.

## kleeslabs   [anchors: support (1)]
- LEAVE — slab-break QoL behavior; 0 items/blocks/loot. No content surface.

## timm   [anchors: support (1)]
- LEAVE — client biome/dimension title overlay; 0 items/blocks/loot. No content surface.

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending method (fan bulk-ending via Dragon Head/Breath) | via: create_dragons_plus:ending | to: magic | motif: M-19 | power: mid–endgame | tone: ok — End-infusing items through a dragon-breath catalyst is a Create→magic/End bridge; "haunting" goes soul-fire, "ending" goes End void — same conceptual family | verdict: ACCEPT | hook: A Create fan station charged with Dragon's Breath can End-process raw materials into Ender-aligned intermediates; the dragon fight unlocks a whole new bulk-processing tier.
- from: create_dragons_plus:freezing method (fan bulk-freeze via Powder Snow) | via: create_dragons_plus:freezing | to: survival | motif: M-12 | power: everyday | tone: ok — bulk-freezing items (ore cooling, food preservation steps) links the fan to the survival/food chain | verdict: ACCEPT | hook: The bulk-freeze fan station makes preserving food at scale automatic; a farm-to-Create pipeline that couldn't exist with manual powder-snow buckets.
- from: create_dragons_plus dragon_breath fluid | via: create:filling / emptying → other mod rituals | to: magic | motif: M-10 | power: mid | tone: ok — dragon's breath is a canonical magic reagent (Minecraft vanilla potion ingredient); routing it as a fluid into Ars imbuement or Occultism rituals is coherent | verdict: ACCEPT | hook: Dragon's Breath collected through the Fluid Hatch feeds an Ars imbuement step or Occultism ritual — the End boss becomes a supply node for the magic web.
- REWORK: dossier says "leave — its ending/freezing methods are weave-targets, not edges this mod needs." That's partially right, but the mod also ships real items (dragon_breath fluid, dye buckets, fluid_hatch) and its own methods register distinct outputs. The ending/freezing methods ARE the surface — they're a weave bridge from Create into End/magic/survival (M-19, M-12, M-10 above). The "leave" call undersells it; anchors should be expanded to Create + magic.

## chat_heads   [anchors: support (1)]
- LEAVE — client chat-UI head overlay; 0 items/blocks/loot. No content surface.

## ohthetreesyoullgrow   [anchors: support (1)]
- LEAVE — tree-generation library; 0 items/blocks/loot. No content surface.

## opacpvp   [anchors: support (1)]
- LEAVE — PvP party-rules toggle; 0 items/blocks/loot. No content surface.

== CHUNK COMPLETE ==
