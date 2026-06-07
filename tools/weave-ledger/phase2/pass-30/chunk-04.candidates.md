# Phase 2 candidates — chunk-04

## aileron   [anchors: aeronautics (1)]
- from: elytra enchantments (Aileron-specific) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Aileron enchants are behavior-level (flight physics modifiers), not datapack-exposed items — there is no material to route through the Enchanting Apparatus; the mod registers zero item ids, making any recipe-side weave impossible. No content surface.
- LEAVE — genuine zero-item-surface behavior mod; aeronautics anchor stands on its own. No loot that carries weave-relevant material (loot=yes but no items registered — loot likely injects into vanilla elytra tables only).

REWORK: N/A (single anchor; no existing connections to audit).

---

## create_sa   [anchors: create, aeronautics (2)]
- from: create_sa:brass_drone_item | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: already counted — the mod's entire recipe footprint is Create-built, and drones/jetpacks already anchor aeronautics. Adding a new sequenced-assembly step would be internal deepening, not a cross-system bridge to a third pillar. No new anchor gained.
- from: create_sa blazing tools (blaze rod inputs) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Blazing Pickaxe already drinks blaze — a magic infusion step as a finishing ritual makes the fire-tool feel arcane rather than purely industrial; forces cross-route dependency (Create builds the base, magic finishes it). | via: ars_nouveau:imbuement
- from: create_sa:brass_exoskeleton_chestplate | via: create:sequenced_assembly → ars_nouveau:armor_upgrade | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the exoskeleton is already Create-assembled; sealing it with an arcane upgrade forces a magic specialist into the high-end personal-armour supply chain — nobody self-sufficient. | via: ars_nouveau:armor_upgrade

REWORK: OK — existing Create + aeronautics connections sound.

---

## createimmersivetacz   [anchors: create (1)]
- from: createimmersivetacz ammo (twelve_gauge_shell / cartridge types) | via: emergent trade (bulk consumable → player-to-player demand) | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: ammo is a pure consumption sink — it is spent in combat and must be resupplied, making an "arms dealer" role natural; combat players buy rounds from the Create factory player, closing the loop. | via: consumption (M-26 demand-renewal)
- from: createimmersivetacz:gun_barrel / firing_mechanism (gun parts) | via: tacz:gun_smith_table_crafting | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: finished guns are combat-route supply — the Create-factory specialist produces; the combat specialist buys, uses, and demands more. Arms supply is a genuine cross-player trade axis (M-34 completes the M-15 boss-gate side). | via: tacz:gun_smith_table_crafting
- from: createimmersivetacz:nitropowder_bucket (fluid) | via: occultism:ritual or ars_nouveau:imbuement as a volatile-reagent | to: magic | motif: M-29 | power: mid | tone: clash | verdict: REJECT | reason: thematic clash — nitropowder is an industrial explosive fluid; using it as a magic ritual reagent strains plausibility without a strong story hook. Force.
- from: createimmersivetacz ammo chain | via: M-30 regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: brass (the key ammo input) is region-locked by GTMOGS ore-gen, so a region without copper/zinc can't self-supply ammo — arms trade is geographically forced. | via: GTMOGS regional ore-gen → brass → createimmersivetacz ammo recipe

REWORK: N/A (single anchor; no existing connections to audit).

---

## trashcans   [anchors: support/automation-QoL (1)]
- LEAVE — pure void-sink utility; no material processing, no items produced, no loot. Weaving a trash can into the scarcity loop would work against the pack's explicit scarcity-driven design (the dossier itself notes "arguably worth a balance note in a scarcity pack"). Nothing to route.

REWORK: N/A.

---

## chefsdelight   [anchors: survival, economy (2)]
- from: Cook/Chef villager trades (emerald ↔ FD meals) | via: KubeJS config re-mapping trades to numismatics coin | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: this re-routes NPC trades to use player-minted coin — but the M-08 motif is for *player pressing metal into coin*, not NPC trade tables. Converting NPC-sold goods to coin payment is still an NPC faucet of value flow, cut under the player-run ruling. REJECT as M-08 mismatch; the correct path is M-26 (meals consumed) not currency mapping.
- from: Chef-sold feasts (Roast Chicken / Honey Glazed Ham) | via: farmersdelight:food_serving → player consumption | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: feasts are consumed against hunger pressure — demand never zeroes because players always need food; the Cook/Chef NPC provides a non-player source of finished meals that feeds server-wide food pressure. | via: farmersdelight:food_serving + consumption
- from: Cook villager structure (new village type) | via: loot-seed — seed weave-relevant drops (Create-part ingredients, FD crops) into its chest loot | to: create / survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding a copper cog or brass ingot into the cook structure's chest naturally routes villager exploration toward the Create supply chain — "of course the cook's pantry has preserved goods that need processing." | via: loot-seed

REWORK: existing survival + economy (via villager trade) connections are sound but M-09-leaning in the dossier. The villager trade axis is passive NPC economy — acceptable as a survival-food source anchor, but any "economy" claim should rest on meal-consumption pressure (M-26), not the trade table itself. Flag dossier note as economy anchor slightly mis-framed; the real economy weave is emergent trade from non-self-sufficient food supply. OK structurally; dossier wording worth tightening at review.

---

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — zero items, zero loot, pure co-op behavior (right-click to feed). Nothing to route through any method; no weave is possible.

REWORK: N/A.

---

## spyglass_improvements   [anchors: support/QoL-client (1)]
- LEAVE — client-side zoom/UI behavior, zero items, zero loot. Nothing to weave.

REWORK: N/A.

---

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows stone parapet / arrow slit blocks (stone-family) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone parapets crushed back to gravel + XP nugget is consistent with Create's lossy recycling of stone deco — a builder over-ordering windows can recycle surplus. Everyday/light step appropriate for a basic deco block. | via: create:crushing
- from: mcwwindows:*_mosaic_glass (dyed glass blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushing gives glass pane/sand — Create already crushes vanilla glass; adding ~20 mosaic glass variants duplicates the same one-step pattern with no new system bridge. Excessive recipe clutter for negligible gain. REJECT on cost/clutter grounds.
- from: mcwwindows wool curtains | via: create:milling or farmersdelight:cutting | to: create/survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: milling curtains into wool fibres has no thematic grounding — curtains are finished goods, not raw feedstock. Tone clash; forced edge.

REWORK: N/A (single anchor; stone-parapet crushing is the one sound candidate).

---

## ctl   [anchors: create, aeronautics (2)]
- from: ctl:htlb_block / ctl:ilb_block (train lamp blocks) | via: create:sequenced_assembly deepening | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: already at 2 anchors (Create + aeronautics) and the lamps are already built via sequenced_assembly — a deeper chain would be internal within Create+aeronautics, not a new cross-system bridge. No third pillar reachable; leave sound.
- REWORK: OK — Create + aeronautics connections sound.

---

## create_integrated_farming   [anchors: create, survival (2)]
- from: roost outputs (eggs, feathers, raw chicken/duck/goose) | via: farmersdelight:cooking / create:mixing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: roost egg/meat output feeds the cooking chain directly — a Create-automated poultry roost feeding a Farmer's Delight kitchen is the obvious next step; the farming and cooking specialists trade produce and meals. | via: farmersdelight:cooking
- from: fishing_net aquatic drops (fish, items) | via: create:milling or createfisheryindustry:peeling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk fish catch from automated nets routed through Create milling (fish meal / bait) or the Fishery peeler closes the automated-aquaculture loop, tying the net output to the Create processing spine. | via: createfisheryindustry:peeling (already a pack method)
- from: roost / net bulk output | via: emergent trade (steady bulk organic supply) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: steady roost/net output = a perpetual consumption sink (food demand never zeroes); a poultry-farming specialist selling eggs/meat to the wider server is the natural economy loop close. | via: consumption / emergent trade (M-26)

REWORK: OK — create + survival connections sound; the economy edge the dossier flagged as weak is better framed as M-26 (consumption demand) not M-09 (luxury sell).

---

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt ore crushed in a Create Crusher yields salt dust + a processing byproduct — a familiar ore-doubling step that pulls the new salt mineral into the Create spine and makes a seasoning ingredient a product of the tech line. | via: create:crushing
- from: expandeddelight:cinnamon (cinnamon log → cinnamon dust) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling cinnamon bark in a Millstone is intuitive (grinding spice) and routes the new aromatic into the Create processing web — cinnamon dust then feeds cooking recipes downstream. | via: create:milling
- from: expandeddelight aged cheese wheels (cheese_wheel / goat_cheese_wheel) | via: create_cheese:maturing or extradelight:evaporator | to: create | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: cheese aging is already time-gated in expandeddelight's casks — route the raw cheese wheel through create_cheese:maturing (an existing pack method) so the aging step lands in the Create maturation system, making the create_cheese maturing block actually used for non-cheese-mod cheese too. Two-system tie: Create (method) + survival (food). | via: create_cheese:maturing
- from: expandeddelight cranberry / asparagus crops | via: M-16 seasonal reagent (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasonal crops (cranberry in autumn, asparagus in spring) growing only in their season feed the magic/cooking web only when the calendar allows — scarcity-through-season, not through mining. A high-priority survival lever per the ledger. | via: Serene Seasons season-gated growth → farmersdelight:cooking / ars_nouveau:imbuement
- from: expandeddelight:salt (c:dusts/salt) | via: occultism:ritual or ars_nouveau:imbuement as a ritual purification agent | to: magic | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: salt as a ritual/purification material is deep folklore — an occultism circle ritual demanding salt dust (the Create-processed mineral) forces a cross-route dependency: magic needs what the food chain produces. | via: occultism:ritual

REWORK: N/A (single anchor; multiple new anchors proposed above).

---

## upgrade_aquatic   [anchors: survival (1)]
- from: upgrade_aquatic raw fish (raw_pike, raw_perch, raw_lionfish, c:foods/raw_fish) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: new fish species routed through FD cooking into finished seafood dishes; the Aquatic Hunter role supplies rare fish to the communal kitchen. | via: farmersdelight:cooking
- from: upgrade_aquatic:cooked_lionfish (food_poisoning tag) | via: occultism:ritual or ars_nouveau:imbuement — toxic meat as a poison reagent | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: lionfish is venomous — giving lionfish flesh a use as a poison/magic reagent in an occultism ritual makes the dangerous catch worth farming for the magic specialist, not just the cook. | via: occultism:spirit_fire or ritual
- from: upgrade_aquatic:prismarine_rod (c:rods/prismarine) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: prismarine rod as an arcane focusing component in the Enchanting Apparatus — ocean materials feeding magic rituals is thematically coherent (deep ocean = arcane depth). | via: ars_nouveau:enchanting_apparatus
- from: upgrade_aquatic coralstone blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: coralstone crushing is the same M-04 deco-recycle pattern as stone. It gains a Create anchor, but the link is extremely thin and clutter-adding. The stronger anchors above cover the 2-system goal already. REJECT on diminishing returns.
- from: upgrade_aquatic driftwood/riverwood | via: woodworks:sawmill (already inbound) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already an existing inbound weave (woodworks:sawmill) — this is not a new connection, just documenting existing state. Not a new candidate.

REWORK: N/A (single anchor; multiple new anchors proposed above).

---

## immersive_armors   [anchors: survival (1)]
- from: immersive_armors:heavy_chestplate / heavy set (iron-block-heavy recipe) | via: create:pressing → create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Heavy set's defining cost is iron blocks — re-gate assembly through Create's mechanical crafter (pressed plates → assembled chestplate) so the heaviest armor requires Create-tier fabrication, not just vanilla crafting. | via: create:mechanical_crafting
- from: immersive_armors:divine_chestplate / divine set (high-end, one-block-per-minute protection) | via: ars_nouveau:armor_upgrade | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Divine set's once-per-minute full-block is unmistakably magical — finishing it through the Ars Enchanting Apparatus or armor_upgrade makes the player route through the magic pillar for the best protection; nobody self-sufficient. | via: ars_nouveau:armor_upgrade
- from: immersive_armors:prismarine_chestplate (ocean-sourced) | via: upgrade_aquatic / aquatic material tie | to: survival | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: prismarine armor already draws on vanilla prismarine — adding an upgrade_aquatic dependency creates a cross-mod coupling that isn't meaningful without a specific cross-route recipe demand. Too vague without a concrete method. REJECT.
- from: immersive_armors:bone_chestplate (skeleton-material) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the bone set is a mob-drop armor; using bone armor as a magic reagent input is backwards (armor is an output, not feedstock). The motif M-02 works from drop → reagent, not from gear → ritual. REJECT mis-direction.

REWORK: N/A (single anchor; proposals above add Create + magic anchors).

---

## patchouli   [anchors: support/library (1)]
- LEAVE — pure guide-book library. The book items (patchouli:guide_book, book_blue/red/etc.) are not material feedstocks; they carry documentation, not crafting value. No loot. Nothing to route.

REWORK: N/A.

---

## create_enchantment_industry   [anchors: create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: liquid XP piped from a mob farm into Iron's Spellbooks' Alchemist Cauldron as a brew input creates a cross-route dependency — the magic specialist needs the tech specialist's industrialised XP; nobody self-sufficient. | via: irons_spellbooks:alchemist_cauldron_brew
- from: create_enchantment_industry:experience_bucket (liquid XP) | via: ars_nouveau:imbuement as a source-gem charge amplifier | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars imbuement already has its own XP/source cost system; bolting liquid XP onto it risks balance issues (double-dipping on XP sinks) and the method doesn't cleanly accept a foreign fluid as an "amplifier" without custom recipe work that may break the magic pillar's balance. REJECT on balance grounds; the Iron's cauldron path (above) is cleaner.
- from: create_enchantment_industry Blaze Enchanter (automated enchanting) | via: occultism:ritual → enchanted-book as ritual input | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: Create's Blaze Enchanter mass-produces enchanted books; routing those books into Occultism rituals (which normally cost hand-enchanted books) creates a cross-route dependency — the tech spine supplies the ritual component. | via: occultism:ritual
- from: create_enchantment_industry:printer (copies written books) | via: MineColonies research — printed books as the research input | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the Printer produces written/copied books at scale; tying MineColonies research to printed-book inputs (knowledge has a material cost) makes the Create-enchanting specialist the pack's knowledge supplier — research is gated by book production. | via: minecolonies research (M-37)

REWORK: N/A (single anchor; new magic + economy anchors proposed above).

---

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — code library, zero items, zero loot, zero blocks of player-facing value. Genuine zero-surface.

REWORK: N/A.

---

## create_factory   [anchors: create, survival (2)]
- from: create_factory jam/cream/nectar fluids (sweet_berries_jam, cream_bucket) | via: extradelight:vat or extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: cream and jam fluids are natural inputs for ExtraDelight mixing-bowl or vat recipes — the confectionery pipeline feeds the broader food web, not just Create internal sweets. | via: extradelight:mixing_bowl
- from: create_factory finished sweets (waffles, candy apples, honey rolls) | via: consumption / player hunger | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: sweets are consumed against hunger — they join the food-demand loop as a produced good that is genuinely spent; a confectionery specialist's output is demanded by players who can't make it themselves. | via: consumption (M-26)
- from: create_factory:honey_roll / honey_waffle | via: ars_nouveau:imbuement (honey as a catalyst) | to: magic | motif: M-29 | power: everyday | tone: clash | verdict: REJECT | reason: honey food items as magic reagents is a stretch — the tonal pairing of confectionery and Ars Nouveau arcane infusion is forced without a strong thematic hook (magical cooking is not the pack's framing). REJECT on theme.

REWORK: dossier notes M-09 (luxury good → coin) as 2nd-anchor candidate — M-09 is RETIRED. The correct frame is M-26 consumption (accepted above). Flag for dossier cleanup.

---

## irons_lib   [anchors: library/support (1)]
- LEAVE — code library. The transmog table and player statue blocks are cosmetic/GUI-only (no material processing), and the patreon API layer has no gameplay surface. Nothing to route.

REWORK: N/A.

---

## trashslot   [anchors: support/QoL (1)]
- LEAVE — UI-only inventory mod, zero items/blocks/loot. Nothing to weave.

REWORK: N/A.

---

## searchables   [anchors: support/library (1)]
- LEAVE — UI search API library, no gameplay content whatsoever.

REWORK: N/A.

== CHUNK COMPLETE ==
