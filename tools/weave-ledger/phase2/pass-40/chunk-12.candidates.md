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

## sereneseasons   [anchors: survival (1)]

Existing rows: strong coverage — M-16 season_sensor→Create gearshift (22 votes, consensus ACCEPT), M-16 seasonal crop gating into magic (ritual reagent, 3–6 vote ACCEPT rows), M-30 out-of-season scarcity→economy, M-05 native-method gating variant. The 2nd-anchor to Create via M-16 is well-established. What's missing: no row yet examines the season_sensor's *output side* as an economy-facing signal rather than just a production/automation input; and no row connects Serene Seasons directly to the aeronautics arm (seasonal travel pressure).

- NEW | from: sereneseasons:season_sensor (redstone output) | via: config-tie — vendor block price-modifier reading season signal (cold winter = scarce crops = higher coin-price) | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: the season sensor wired to a numismatics depositor adjusts the buy-price of summer crops in winter — the calendar drives the market; out-of-season produce commands a premium without any new mechanic
- NEW | from: sereneseasons seasonal crop scarcity (winter crops stunted, greenhouse required) | via: worldgen/season-event gate — aeronautics cargo runs bring summer produce from warm-biome regions in winter | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: when local crops fail in winter, bulk seasonal produce must be airshipped from the pack's tropical/mesa region — the season clock is the logistics arm's best recurring demand driver; the aeronautics wing earns its route

## blockui   [anchors: support/library (1)]

LEAVE — pure UI framework library; zero items, zero methods, no content surface to weave. Hard dep of MineColonies, which is itself already a load-bearing production node — blockui's value is enabling that node, not a separate weave.

## mcwroofs   [anchors: support/decoration (1)]

Existing rows: M-04 create:crushing stone/brick roof variants — split ACCEPT/REJECT across passes (final consensus is borderline). The ACCEPT rows specifically note stone/masonry types, excluding wood/terracotta. No new unexplored angle; the existing split is the right call.

- CHALLENGE | from: mcwroofs stone/brick/andesite roof variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: the split (9 ACCEPT / 10 REJECT by highest count) correctly diagnoses the tension — 605 roof blocks crushed to gravel is mechanically sound M-04 but operationally thin; what tips it to REJECT in practice is that players rarely bulk-demolish roofs into crushing wheels (the workflow is wrong), and the value-add per block is too thin to be load-bearing; mcwroofs is decoration, it needs no systemic 2nd anchor, and the forced M-04 edge should be recorded as REJECTED so Phase 3 doesn't waste authoring time on it

## friendsandfoes   [anchors: survival (1)]

Existing rows: M-02 crab_claw → magic (consensus ACCEPT, 31 votes), Wildfire/Illusioner drops → M-02 magic (6–7 vote ACCEPT), copper deco → M-04 Create crushing (split; final lean REJECT for copper_golem_head specifically), M-34 hostile drops combat-supply route. Good coverage. Two unexplored threads: (1) the beehive lines (all wood types) are entirely unexamined as a honey/wax production source; (2) the copper_button set's weathering cycle as a Create:splashing bridge (one 1-vote ACCEPT row exists but was never consolidated).

- NEW | from: friendsandfoes wooden beehives (all wood types, loot=yes — honey bottle + honeycomb drops) | via: farmersdelight:cooking or extradelight:vat (honey as sweetener/cooking ingredient) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mod adds beehives in every wood type — a beekeeper player harvests honey that feeds ExtraDelight's vat as a sweetener input; the beehive expansion is the survival anchor (food production) and this makes it explicit, not ambient
- NEW | from: friendsandfoes:copper_button / weathered_lightning_rod (the copper weathering set) | via: create:splashing (advances copper oxidation state) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's water splashing already controls copper oxidation on sheets and pipes — extending it to Friends & Foes' copper buttons and rods is a natural one-line recipe addition; a builder uses the Spout to wax or de-wax their decorative copperwork; the copper set is absorbed into Create's metal loop without forcing a separate crush step

## bits_n_bobs   [anchors: Create, survival (2)]

Existing rows: M-04 tile/chair crushing (consensus ACCEPT), M-24 chain_pulley → aeronautics drivetrain (split ACCEPT — 7A/4R), M-20 brass_lamp deploy-application (REJECT). The mod is already at 2 anchors. The chain_pulley M-24 row is the most contested and deserves a closer look.

- CHALLENGE | from: bits_n_bobs:chain_pulley | via: recipe | to: aeronautics | motif: M-24 | verdict: REJECT | hook: the existing M-24 row (11 times_suggested, 7A/4R) is plausible in theme but M-24 requires a *mechanical drivetrain or control component* used in Aeronautics propeller/engine/control-surface recipes — the chain_pulley is a contraption-mover variant (it moves contraptions vertically, like a piston), not a propulsion/drivetrain component; using it as an aeronautics drivetrain ingredient is thematic but not grounded in what Aeronautics actually recipes-call-for; if Phase 3 can confirm the specific Aeronautics recipe that would reference chain_pulley, ACCEPT — but as stated the row is ungrounded
- NEW | from: bits_n_bobs:*_nixie_board / *_large_nixie_tube (large display blocks — 16 dye variants × 2 sizes) | via: recipe (create:mechanical_crafting — nixie board requires brass + andesite casing + redstone lamp in a shaped pattern) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a large nixie tube isn't a tabletop craft — it takes proper Create fabrication; gating the display behind mechanical crafting keeps it as a mid-tier Create product rather than a crafting-table giveaway, and the nixie board becomes a tangible output of the Create production chain rather than a plain recipe

## lithium   [anchors: support/performance (1)]

LEAVE — pure server-tick optimizer; zero items, zero methods, no content surface. Performance is already the pack's tightest budget and lithium is the load-bearing TPS mod — it earns its place as a support node and that's the full extent of it.

## almostunified   [anchors: support (1)]

LEAVE — recipe-graph plumbing; operates on the graph itself, not a content node. The one existing row (REJECT: "operates on the graph, has no system anchor") is correct. Note: the galosphere silver/palladium gotcha documented in the dossier is the only pack-critical action point, and it belongs in config review, not weaving.

## jei   [anchors: support/UI (1)]

LEAVE — recipe viewer; zero items, zero methods, no content surface. CLAUDE.md specifically documents why JEI is required over EMI (Create processing recipe rendering) — do not conflate its infrastructure role with a weave candidate.

## createfisheryindustry   [anchors: Create, survival (2)]

Existing rows are extensive: M-12 fish_skin → leather substitute (pressing/cutting, ACCEPT), M-12 processing chain (peeling→cooking, ACCEPT), M-28 colony seafood supply (ACCEPT), M-26 seafood consumption sink (ACCEPT), M-16 seasonal bait seed (ACCEPT), M-32 fish_skin byproduct→input (ACCEPT), M-34 harpoon combat-supply (ACCEPT), M-31 bulk fish_skin logistics (ACCEPT). The mod is well-covered. What's missing: no row directly addresses the copper_diving_leggings as a cold_sweat/survival survival-pressure item (the temperature angle for underwater work), and no row captures the harpoon as specifically a Create-backtank specialization forcing cross-route dependency.

- NEW | from: createfisheryindustry:copper_diving_leggings (underwater survival gear, backtank-extended) | via: recipe — require cold_sweat insulation material as a crafting component (fish_skin panels as insulating lining for cold-water diving) | to: survival | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: copper diving leggings built for deep cold ocean work need fish_skin insulation lining — the fishery's own byproduct feeds its own gear; a cross-route dependency where the cold_sweat survival system shapes what the industrial fisher builds
- CHALLENGE | from: createfisheryindustry:fish_skin (leather-equivalent byproduct of peeling) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | verdict: REJECT | hook: the 2-vote ACCEPT row for fish_skin→spirit_fire is tonally weak and the dossier's own 2nd-anchor candidates don't propose magic — the mod's vibe is "industrial cannery," not arcane; fish skin as a spirit-fire transmutation has no lore grounding in Occultism (spirit_fire wants soul-charged drops, not mundane leather substitutes); the accepted M-12/M-32 rows already give fish_skin a cleaner productive role; REJECT to avoid forcing an arcane edge onto a maritime-industrial material

## jeresources   [anchors: support/UI (1)]

LEAVE — JEI addon for loot/worldgen documentation; zero items, zero methods. Its value to the pack's scarcity design is transparency (players can see regional ore distribution), which is a sanctioned support role, not a weave node.

## freefbible   [anchors: support/flavor (1)]

LEAVE — single inert readable book item with no mechanics; the existing REJECT of the antique_book approach is correct. A forced recipe edge would be noise.

## netmusic   [anchors: support/flavor (1)]

Existing rows: M-05 music_cd/computer → Create brass crafting components (split ACCEPT/REJECT), multiple REJECTs for TLM altar, backpack upgrade, spirit_trade, etc. The single existing ACCEPT (M-05, Create brass inputs) is the only remotely coherent angle. The dossier correctly concludes "leave" is acceptable.

- CHALLENGE | from: netmusic:music_cd (craftable, loot=yes) | via: recipe — route cd_burner/computer through Create brass components as crafting inputs | to: create | motif: M-05 | verdict: REJECT | hook: the 2-vote M-05 row is thematically appealing ("a network-capable music computer needs precision gears") but M-05 (native-method gating) requires the mod's *flagship item* to be built *in its own machine* gated on Create parts — the cd_burner/computer already uses vanilla crafting; what's described is just adding Create materials to an existing vanilla recipe, which is a cost-model adjustment, not an M-05 native-method gate; the correct framing would be a simple recipe ingredient swap (Create brass in the cd_burner recipe), which has no motif and is too thin to justify a weave slot

