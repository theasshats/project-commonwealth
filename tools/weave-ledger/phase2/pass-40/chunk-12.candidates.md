# Phase 2 candidates — chunk-12 (context-fed)

## create_central_kitchen   [anchors: Create, survival (2)]

Existing rows cover: M-26 consumption (Blaze Stove demand, feast eating), M-28 colony provisioning, M-12 seasonal pie (M-16), M-06 Blaze Stove sequenced-assembly, M-29 cross-route feast, M-34 Blaze Stove combat-supply. The strongest omission is a deeper M-29 thread: the existing M-29 row only gestures at "FD crop inputs + Create parts" without naming the cross-route dependency cleanly. No row yet captures the economy-side output diversity (sauce/drink fluids as trade goods beyond simple feast-eating) via M-33 (service-for-hire) or the aeronautics galley gap in a non-forced way.

- NEW | from: create_central_kitchen sauce/drink/ice-cream fluids (Create:filling output) | via: create:filling → numismatics vendor | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the automated kitchen bottles its sauces and ice-cream; a vendor sells them by the cask — the distillery and the kitchen split the luxury-food market, mint-funded by regional ingredients
- NEW | from: create_central_kitchen Blaze Stove (consumes blaze_rods continuously) | via: create_central_kitchen blaze_stove + M-30 regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: blazes don't spawn near every base — a kitchen running Blaze Stoves at scale depends on a Nether-adjacent blaze farmer, locking high-speed automated cooking behind regional access to the Nether
- CHALLENGE | from: create_central_kitchen automated feast output | via: farmersdelight:cooking or create_central_kitchen automation → finished feast | to: economy | motif: M-26 | verdict: REJECT | hook: the existing M-26 row for this mod (row 24 in CANDIDATES.tsv) tags to: economy but M-26 is a consumption-sink motif (survival/economy closing arrow) — the "output feeds colony consumption" narrative belongs under M-28 (colony route) and the existing M-28 rows already cover it; the standalone M-26 row with to:economy is a mislabel that adds no new arc to the loop

## aileron   [anchors: aeronautics (1)]

Existing rows cover: M-10 via enchanting_apparatus (conditional on enchant exposure — split ACCEPT/REJECT), M-34 loot-seed for endgame fight-for-enchants combat supply. The mod is behavior-only with loot=yes and zero item ns — the ceiling here is genuinely low. What's missing: the accepted M-34 loot-seed row doesn't specify WHERE to seed (which structures). No row captures the cross-pillar dependency that makes the aeronautics-vs-elytra balance matter for the economy.

- NEW | from: aileron Elytra enchantment books (loot=yes, endgame structures) | via: loot-seed into End City / Sculk Hive / Deeper Darker chests | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the best flight enchants live in the most dangerous End-tier ruins — a combat specialist farms and sells them to non-fighters who need the upgraded elytra; the M-34 loot-seed gets a concrete structure target the existing row omits
- CHALLENGE | from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus / reactive_enchantment (or Iron's) | to: magic | motif: M-10 | verdict: REJECT | hook: the existing consensus-ACCEPT row (24 times_suggested) carries a correct conditionality note ("only possible IF aileron's enchants are datapack-exposed") — but the row's power:mid label undersells the risk: Aileron bakes enchants into the Elytra's standard loot pool and doesn't register enchantment items by namespace; the Enchanting Apparatus targets item types, not enchantment IDs, so this weave is likely non-authorable without a KubeJS shim that doesn't exist yet; REJECT until Aileron upstream confirms apparatus compat

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]

LEAVE — pure Kotlin language adapter; zero items, zero methods, no content surface. No motif applies; any weave would be fabricated.

## modonomicon   [anchors: support/documentation (1)]

Existing rows (all REJECT): patchouli recipe, M-37 research-book prerequisite gate, magic-flavor rejection. The mod is a guidebook framework with 6 book items and no recipe-types. The only unexamined angle is whether the modonomicon book itself can serve as a progression-gate material (e.g., a crafted research tome required as an input to a KubeJS-gated high-tier recipe, bridging M-37). This was tried and REJECTed as "book is a progression prerequisite → create" with reasoning "doesn't compose motif correctly." Let me assess if there's a subtler path.

- NEW | from: modonomicon:modonomicon (the guide book as a crafted item) | via: recipe — require the modonomicon book as a crafting ingredient in a MineColonies-era research-unlock item (alongside other materials) | to: economy | motif: M-37 | power: everyday | tone: ok | verdict: ACCEPT | hook: knowledge has a cost — a researcher crafts and spends a modonomicon tome to unlock a colony research branch; the book becomes a tangible "research requisition" traded between colony-runners and crafters rather than purely ambient documentation
- CHALLENGE | from: modonomicon:modonomicon (guidebook) | via: patchouli:shapeless_book_recipe | to: support | motif: none | verdict: REJECT | hook: both existing rows REJECTing this are correct — patchouli's shapeless_book_recipe is for patchouli books specifically and doesn't compose any loop motif; listing it as a row at all is noise since modonomicon uses its own book creation and the weave doesn't advance any system

