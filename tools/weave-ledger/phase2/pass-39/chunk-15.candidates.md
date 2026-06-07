# Phase 2 candidates — chunk-15

## minecolonies_compatibility   [anchors: survival, Create (2)]

Existing connections:
- survival (extends colony farming/jobs, butcher/orchardist etc.)
- Create (Courier ↔ Create Stock Link storage bridge)

REWORK: OK — connections sound. The bridge mod's job is exactly to wire MineColonies workers into the wider modpack (Create stock network, FD cutting boards, IE cloche/fertilizer). Two anchors are correct; the colony courier linking to Create's storage network is a genuine Create weave (M-28 colony route), and the farming job extension is survival. No arbitrary links.

New candidates via method-pull:
- from: minecolonies_compatibility:citizen_terminal (Create Stock Link bridge) | via: MineColonies colony request system | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony couriers pull directly from a Create Stock Link vault — the settlement-builder's supply chain reads from the tech spine, making the two routes co-dependent without duplicating them.
- from: minecolonies_compatibility:tacz_dummy_gun (colony gunner job) | via: MineColonies hut + tacz:gun_smith_table | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A colony Gunner hut services other players' firearms (repair/reload via TaCZ smithing), making the colony a labor provider to the combat specialist — value flows player-to-player.
- from: minecolonies_compatibility (Butcher job → Farmer's Delight cutting) | via: farmersdelight:cutting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: The Butcher already funnels through Farmer's Delight as an internal implementation detail of the compat mod — this is not a new weave edge, it's the mod's own join surface already captured in anchor survival. Counting it as an economy link would be bare "workers produce things players sell", which is ambient loop-noise, not a demand-gating weave.

---

## resourcefulconfig   [anchors: support (1)]

LEAVE — pure config library/API; zero player-facing items, no material graph, nothing to route.

---

## cmpackagepipebomb   [anchors: Create (1)]

Existing connections:
- Create (package delivery system)

New candidates via method-pull:
- from: cmpackagepipebomb:pipebomb (explosive payload via Create packages) | via: create:deploying (assembler primes a pipebomb during package assembly) | to: survival | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create Deployer pre-arms the pipebomb during package assembly on a contraption — the trap is industrially manufactured, not hand-crafted, giving it a clear Create flavor and pulling the PvP item into the survival/danger pressure layer.
- from: cmpackagepipebomb:pipebomb_rigged | via: createbigcannons:cartridge_assembly (a pipe bomb casing pre-filled with CBC powder as a booby-trap charge) | to: survival | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: Crossing Create Big Cannons' ammo assembly with a novelty prank item is a thematic tone-clash — CBC is a serious heavy-artillery system; seeding a prank bomb into its cartridge assembly workflow clashes badly. The player would not find the pairing sensible. Red-team kills this.
- from: cmpackagepipebomb:tnt_rigged | via: survivial danger-pressure (booby-trapped postboxes) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: M-26 is a consumption sink (an item *spent* against pressure). A rigged package consumes TNT, but the consumption is the bomb detonating — that's vanilla TNT's consumption, not a new weave. The mod doesn't add a recurring-demand mechanic; it's a one-time novelty prank. No genuine M-26 hook here.

---

## createthreadedtrains   [anchors: support (performance) (1)]

LEAVE — pure server-side performance mod; no items/blocks/recipes; no material surface to weave.

---

## rolling_down_in_the_deep   [anchors: support (client QoL) (1)]

LEAVE — client-side camera/movement mod; zero items, zero material graph.

---

## comforts   [anchors: survival (1)]

Existing connections:
- survival (travel sleep/rest QoL)

New candidates via method-pull:
- from: comforts:sleeping_bag_* (wool + string craft; 16 dye variants) | via: create:crushing (dye from flower → color the sleeping bag, M-04 deco palette) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is specifically about crushing deco *back* to raw/gravel (recycling), not about dyeing items. Dyeing a sleeping bag via Create would be forced — sleeping bags are simple wool items, and Create's toolbox_dyeing or a crafting recipe is not a genuine weave that advances the loop. Tone is fine but the method doesn't fit M-04 and the pairing is too lightweight to earn M-12 (no processing chain). Red-team: a player expects to dye a sleeping bag in a crafting table, not a factory. Reject.
- from: comforts:sleeping_bag_* (exploration kit) | via: astikorcartsredux supply_cart + comforts sleeping bag as a camp-kit pairing | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: This would cross two mods with zero material join surface — neither has a recipe that calls the other's items, there's no method to route through, and it's purely a thematic adjacency ("both are travel mods"). M-29 requires a recipe in one route requiring an input from another route. No weave.
- from: comforts:sleeping_bag_* (wearable, wool-based) | via: extradelight:drying_rack (dry a wet/used sleeping bag for upkeep — a consumption sink) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: Comforts sleeping bags have no wet/durability state in vanilla; inventing a "drying" upkeep step would require authoring new behavior the mod doesn't implement, not routing an existing material. This violates "AUTHOR NOTHING" as a pure-recipe phase; the mod's surface doesn't support it.
- from: comforts:sleeping_bag_* (16 color variants, wool) | via: farmersdelight:cooking / meadow:felting — wool processing already in pack | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The sleeping bag is crafted from vanilla wool and string; wiring wool through Create milling to make the bag's fabric is trivially everyday material and would add complexity without proportional depth. The sleeping bag is itself an everyday item — the cost-model says one light step is the max, and a crafting recipe already *is* one light step. A forced Create detour is noise. Reject.

No sound second anchor found. One-anchor survival mod is appropriate for its scope — LEAVE the 2nd anchor open.

---

## jei   [anchors: client UI support (1)]

LEAVE — recipe viewer UI; no items, no material graph, no weave surface.

---

## voicechat   [anchors: support (1)]

LEAVE — proximity voice comms infrastructure; zero items, no gameplay mechanics to weave.

---

## lootjs   [anchors: support (library) (1)]

LEAVE — KubeJS loot-scripting library; it is the *enabler* of M-02 mob-drop weaves across other mods, not itself a weave node. No items, no material graph.

---

## alcohol_industry   [anchors: Create, survival (2)]

Existing connections:
- Create (Alcohol Boiler + create:filling/create:mixing inbound weave)
- survival (drinkable consumables with status effects)

REWORK on dossier note: The dossier's 2nd-anchor candidate lists M-09 ("luxury good → coin") — that motif is **retired** (#163/#240). Needs a real economy link.

New candidates via method-pull:
- from: alcohol_industry:beer / vodka / whiskey / tequila (bottled spirits; buffing drinkables) | via: minecolonies colony provisioning (Tavern hut requests alcohol for colonist happiness/morale) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony Tavern requests bottled spirits from the player economy — a MineColonies provisioning demand that routes the industrial distillery's output into colony upkeep, making the brewer a genuine supply role within the settlement.
- from: alcohol_industry:alcohol_base (fluid intermediate) | via: tfmg:distillation (TFMG's distillation column as a higher-yield refining step before Alcohol Boiler — Create's industrial fuel refinery as a parallel distillation method) | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Route the Alcohol Base through TFMG's distillation column to get a purer spirit intermediate before the Alcohol Boiler — Create-industrial distillation feeds the brewing chain; two production systems cross-depend (the brewer needs the TFMG specialist's distillate to reach premium spirits).
- from: alcohol_industry:whiskey / vodka (high-grade spirits) | via: extradelight:vat or extradelight:bottle_fluid (spirits used as a cooking-liquid in Vat recipes — deglazing, marinades) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Whiskey and vodka fold into ExtraDelight's Vat as culinary solvents (deglazing, sauce reduction) — the distillery feeds the kitchen, and the brewer and cook trade rather than being self-contained.
- from: alcohol_industry:beer (drinkable, effect) | via: ars_nouveau:imbuement (imbue a spirit with a magical essence to create a potent infused brew) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars Nouveau's imbuement is for crafting magical *items* (focuses, wands, inscribers), not flavoring consumables into potions — that's Ars' potion_flask method, not imbuement. The tone is OK (magical brews are sensible) but the *method* doesn't fit: imbuement won't produce a drinkable bottle of magical beer without authoring entirely new behavior. Red-team: a player asks "why is my beer going in the enchanting apparatus?" — doesn't survive. Reject.

---

## astikorcartsredux   [anchors: survival (1)]

Existing connections:
- survival (agrarian field-work + hauling, draft-animal farming)

New candidates via method-pull:
- from: astikorcartsredux:oak_plow / oak_reaper (implement blades — metal-bearing parts) | via: create:pressing (iron ingot → iron sheet as the plow blade material, requiring Create-processed sheet) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: The plow blade and reaper blade require Create-pressed iron sheets rather than raw iron — the draft-animal implement tier is gated on the metalworking spine, so early farming and industrial Create interlock from the start.
- from: astikorcartsredux:oak_supply_cart (double-chest hauling capacity, draft transport) | via: logistics / aeronautics role contrast — cart is pre-train low-tech haul | to: economy | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 (logistics-required bulk good) requires that trading at scale *demands* the aeronautics/logistics arm. A horse-drawn cart is itself a low-tech transport option — it fills the *early* logistics niche before trains and airships, which is fine for the loop, but it doesn't *require* aeronautics; it *precedes* it. Claiming an M-31 link would have the cart positioned as an aeronautics complement when it's really the pre-aeronautics alternative. Reject.
- from: astikorcartsredux:oak_seed_drill (farm row planting; consumes seeds from inventory) | via: MineColonies Farmer hut request system (colony Farmer requests seed-drill carts as a tool upgrade — colony route unlocks mechanized planting) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Farmer hut can be configured to use a seed-drill cart — the colony upgrades from hand-planting to implement-assisted planting when supplied with the cart, creating a clear progression ask the colony player trades for.
- from: astikorcartsredux:oak_reaper (bulk crop harvest implement) | via: create:crushing (milled/crushed crop waste from reaper's bulk-harvest surplus as processing feedstock) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The reaper harvests mature crops but doesn't produce a distinct "crop waste" item — it drops what the crops would normally drop. There's no unique reaper byproduct to route into Create crushing. Method-pull fails: no new material to weave through the method. Reject.

---

## lithostitched__tectonic-3.0   [anchors: support (worldgen) (1)]

LEAVE — pure terrain-generation overhaul; no items/blocks/recipes; no material surface. Thematic adjacency to regional scarcity design exists but nothing to recipe-route.

---

## born_in_chaos_v1   [anchors: survival (1)]

Existing connections:
- survival (hostile mobs, seasonal boss, danger pressure)

New candidates via method-pull:
- from: born_in_chaos_v1:dark_metal_deposit / dark_metal_block (rare ore-tier metal from specific hostile mobs ~7–16% drop; a distinct regional "chaotic" metal) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal deposits are crushed in Create to yield a pure dark-metal ingot equivalent + XP nugget byproduct — the chaos mob's metal feeds the Create ore-doubling chain, making combat-sourced scrap a legitimate Create input rather than a bench-only reward.
- from: born_in_chaos_v1:bundle_of_bones (common hostile-mob drop across most BiC mobs) | via: occultism:spirit_fire (bundle of bones transmuted into a necromantic spirit intermediate — bones are the soul carrier) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bundles of bones from chaos mobs feed Occultism's spirit fire as a necromantic fuel — the gothic horror mob-drops have an obvious home in Occultism's undead magic system. Player: "of course bones from skeletal chaos mobs power dark rituals."
- from: born_in_chaos_v1 boss drops (Pumpkinhead — Soul Saber / Pumpkin Staff; seasonal boss) | via: boss-drop gate on a complex Create/tech recipe | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Soul Saber or Pumpkin Staff (seasonal boss exclusive, hard-to-farm) is the key input for a high-tier Create machine gate — the pumpkin-themed seasonal boss becomes the gateway to a tech tier, making the October fight economically significant year-round via scarcity.
- from: born_in_chaos_v1 boss drops (Pumpkinhead combat supply) | via: emergent trade — combat specialist farms boss, sells drops to non-combat players | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Pumpkinhead is only reachable by a geared combat player and is seasonal — combat specialists farm the drop and trade it to tech players who need it for the M-15 boss-key gate; the seasonal scarcity makes the drop perpetually in demand and the economy link natural.
- from: born_in_chaos_v1:dark_metal (combat-drop metal; chaotic theme) | via: ars_nouveau:imbuement (dark metal shard as an Ars imbuement catalyst for curse-type enchantments) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Galosphere's allurite/lumiere shards (M-07, reagent-ownership table) are the pack's *reserved* attunement catalysts for magic conversion gates. Inserting a second "cursed metal catalyst" for Ars imbuement would double-spend the attunement-catalyst role and risk fragmentation (two different metals, each gating different imbuements, no clear hierarchy). Reagent-ownership conflict. Reject.
- from: born_in_chaos_v1:dark_metal_deposit (ore worldgen) | via: scarcity foundation — biome-modifier spawns it in specific biomes, not global | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark metal is only generated in biomes where BiC's 50 biome modifiers place mobs — it's regionally tied to danger zones. Players in safe settlements must trade with combat specialists who operate in dark biome clusters to obtain the metal.

---

## toomanypaintings   [anchors: support (decoration) (1)]

LEAVE — pure decoration/visual mod adding painting variants; zero items of its own (painting entity only), no material graph, no recipe surface.

---

## multipiston   [anchors: support (MineColonies dependency) (1)]

LEAVE — a Structurize/MineColonies dependency utility block; not exposed to players as standalone content; no items to route, no material graph.

---

## kubejs   [anchors: support (modpack tooling) (1)]

LEAVE — the scripting backbone that *authors* all weaves; it is not itself a weave node. No player-facing items (one generated bucket placeholder).

---

## byzantine   [anchors: survival (1)]

LEAVE — a pure MineColonies style/schematic pack (0 blocks, 0 items). It contributes colonial architectural aesthetics but has zero material surface; its entire weave is through MineColonies itself. Do not force a second anchor.

---

## curios   [anchors: support (library) (1)]

LEAVE — equipment-slot framework API; no items/blocks of its own; its weave value is enabling other mods' accessory items to exist (magic pillar accessories). Not itself a weave node.

---

## entity_model_features   [anchors: support (client rendering) (1)]

LEAVE — client-side custom entity model engine (EMF); no gameplay content, no material graph.

---

## extradelight   [anchors: survival, Create (2)]

Existing connections:
- survival (deep culinary / diet pressure layer; 146+ meals, feasts, farm stations)
- Create (create:mixing inbound weave already established)

REWORK: The dossier notes M-09 ("economy via Numismatics — feasts as luxury goods → coin") as a candidate. M-09 is **retired** (#163/#240) — bare "sellable" is not a weave. The existing connections are sound; flag the dossier economy note as requiring reframing only.

New candidates via method-pull:
- from: extradelight crops (coffee, garlic, ginger, citrus, hazelnut, corn, cucumber via c:tags) | via: create:milling (grind coffee beans → ground coffee; grind hazelnuts → hazelnut flour; grind dried corn → cornmeal) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ExtraDelight's specialty crops are milled in Create's Millstone — the bakery's key ingredients (ground coffee, nut flour, spice paste) route through the tech spine rather than a hand-mortar, and the kitchen downstream depends on Create input.
- from: extradelight:evaporator / extradelight:vat (fluid reduction) | via: create:mixing → extradelight:evaporator chain (Create mixes a concentrated brine/syrup, ExtraDelight's Evaporator reduces it to salt/honey syrup) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Salt production and syrup concentration run as a Create-mixing → Evaporator pipeline — ExtraDelight's food chemistry is wired after Create's fluid-handling tier, so the two kitchens are sequential, not parallel.
- from: extradelight feasts (extradelight:feast — large-format banquet items, high saturation, multi-serving) | via: MineColonies colony provisioning (feast tables provisioned to colony workers for morale/productivity bonuses) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony workers request feast items from the player economy for productivity buffs — the deep kitchen becomes a colony supply line, making the cook-specialist a valued contributor to settlement growth.
- from: extradelight:drying_rack / extradelight:oven (processing the full culinary chain) | via: minecolonies_compatibility Orchardist job (colony orchardists supply the citrus/coffee/ginger crops to the kitchen pipeline) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony Orchardist (from minecolonies_compatibility) grows ExtraDelight's specialty crops at scale — the kitchen player buys Orchardist produce from the colony player, creating a cross-player food supply chain.
- from: extradelight:ground_coffee / garlic paste / spice outputs | via: alcohol_industry:alcohol_boiling (specialty spirits infused with ExtraDelight spices — coffee vodka, garlic mead — as flavoring inputs to the Alcohol Boiler) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: ExtraDelight's ground coffee and citrus juice are valid flavor inputs to the Alcohol Boiler — the kitchen and the distillery share ingredients, making the two Create food-processing lines interdependent.
- from: extradelight feasts (high-effort cooked goods) | via: create:pressing (press fruit/grains into juice/oil as ExtraDelight Juicer inputs — Create presses feed the kitchen) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: ExtraDelight already has its own Juicer method (extradelight:juicer); routing Create's pressing into it would create parallel juice-production paths (pressing → Create juice vs. Juicer → ExtraDelight juice). Two paths to the same intermediate breaks the "one chain" logic and would confuse players on which method to use. Reject.

== CHUNK COMPLETE ==
