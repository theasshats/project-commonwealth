# Phase 2 candidates — chunk-03 (context-fed)

## opacpvp
LEAVE — pure PvP-rules addon (0 blocks, 0 items, no recipe types); sanctioned support role with no material surface to route.

## packetfixer
LEAVE — network packet-limit fix; 0 content, invisible to players; sanctioned support/perf role.

## entity_model_features
LEAVE — client-only CEM rendering engine; 0 items/blocks/recipe-types; sanctioned support role.

## txnilib
LEAVE — developer library (0 content); sanctioned support role.

## ferritecore
LEAVE — memory/blockstate optimization (0 content); sanctioned perf role.

## better_climbing
LEAVE — client movement-feel tweak (0 content, 0 recipe-types); sanctioned QoL support role.

## spyglass_improvements
LEAVE — existing row: one rejected no-motif (aerial scouting synergy). OK on that call. The dossier confirms 0 items/blocks; the mod augments the vanilla spyglass client-side only. No new route is possible. OK — existing rows sufficient.

## trek-b0.6.1.1
Existing rows cover M-02 (loot-seed magic reagents), M-15 (boss-key via loot-seed — partially controversial), M-08 (coin in chests), M-34 (combat-route supply), and several REJECTs. The ACCEPT consensus is solid on M-02 + M-08 loot-seeds. Two gaps I see: (1) the M-34 rows aimed at "economy" are split on whether the pirate/fortress loot qualifies — worth a sharper framing that names specific Trek structure-types rather than "Trek structures" generically. (2) No row has captured the seasonal angle — Trek spawns biome-keyed structures; some biomes are seasonal-access in Serene Seasons (tundra in winter, etc.), which could make specific loot seasonally gated without touching the mod's drop tables at all. That said, this is a config/worldgen-narrative framing, not a recipe-method weave. Let me check whether any genuinely new method-routing is missing.

The real gap: no existing row proposes seeding Create component parts (specific: pressed copper sheet, experience nugget stacks, andesite alloy) into Trek's ship/fortress holds as everyday (non-boss-key) discovery rewards that feed the Create economy loop — that's M-08 adjacent but distinct: it's more a M-34 "combat/exploration specialist discovers and trades Create inputs" framing, and the existing M-34 rows are vague ("scarce trade good"). More concrete proposal:

- NEW | from: trek structures (ship holds, fortress chests) | via: loot-seed | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvaged copper sheets and andesite castings in a pirate wreck's hold — the explorer brings raw Create feedstock home rather than just decoration

Wait — M-32 is "byproduct → input" (industrial circularity), not exploration yield → Create input. No clean motif covers "loot as Create feedstock." M-34 is the right anchor (combat-specialist finds scarce goods traded to producers). The existing M-34 ACCEPT rows cover this adequately. Let me look for something truly different.

One missing angle: the M-31 row (seed heavy bulk commodities into Trek shipwreck loot) got 1 ACCEPT. The logic is: finding a ship's cargo hold with iron ingot stacks / coal crates plants the idea that bulk goods require logistics to move. But M-31 requires that *trading at scale physically requires the aeronautics arm* — seeding loot tables doesn't author that mechanic. So M-31 doesn't apply here.

The only genuinely new angle not covered: the existing consensus rows do not capture **structure-specific loot differentiation** — Trek's ocean ships vs. jungle temples vs. fortress ruins have distinct themes; current rows propose generic "Trek structures loot-seed." A context-fed refinement: differentiate by structure-type (ships → maritime goods/coin, fortresses → military hardware/weapons, ruins → ancient relics/magic). This is a Phase-3 authoring note, not a new weave proposal. It wouldn't add a new anchor.

OK — existing rows sufficient. The M-02 and M-08 loot-seed ACCEPTs are the load-bearing weaves; M-34 as combat-supply economy anchor is covered. No new anchor available beyond what's already proposed.

## cataclysm
Existing rows are thorough: M-15 (ancient_metal boss-key for Create), M-11 (witherite/cursium via spirit_fire to magic), M-03/M-06 (crushing/sequenced_assembly), M-08 (ancient_metal coin), M-34 (combat-route supply), M-23/M-24 (aeronautics alloy/component), M-10 (imbuement for cursium/ignitium), M-12 (amethyst crab meat cooking), M-05 (weapon_fusion native-method gating). Cataclysm is well-covered.

One gap spotted: the **M-28 (colony route)** angle is entirely absent. Boss drops as a MineColonies research gate — a colony's Barracks or Guard Tower could require a cataclysm boss drop to unlock its top tier, making the combat route feed the settlement route. No existing row proposes this.

A second gap: **M-29 (cross-route dependency)** — the weapon_fusion (Mechanical Fusion Anvil) already uses 3 Witherite + 2 redstone blocks + anvil; this could require a Create-pressed witherite plate as one input instead of raw ingots, forcing Create↔boss-combat specialization. No existing row has proposed the weapon_fusion recipe requiring a Create output rather than raw ingots.

- NEW | from: cataclysm boss drop (any — witherite/ignitium/ancient_metal) | via: minecolonies research (colony Guard Tower tier unlock requires a boss drop input) | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: the colony's top guard tier doesn't unlock until someone's cleared a Cataclysm dungeon — combat feeds settlement, settlement feeds trade

- NEW | from: cataclysm:witherite_ingot | via: create:pressing (witherite_sheet required as weapon_fusion input instead of raw ingot) | to: create | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Mechanical Fusion Anvil demands forged witherite plate, not raw ingot — the combat specialist needs a Create player to press the metal before the fusion can happen

## rottencreatures
Existing rows are very thorough: M-11 (frozen/magma flesh via spirit_fire), M-19 (magma_rotten_flesh via create:haunting), M-10 (corrupted_wart via imbuement), M-02 (corrupted_wart via ars crush), M-34 (Dead Beard/Immortal loot to economy), M-22 (Immortal storm-gating), M-08 (Dead Beard coin loot-seed), M-03 (Undead Miner ore loot-seed). Existing coverage is strong.

One gap: **M-16 (seasonal reagent)** — the Frostbitten zombie spawns specifically in cold biomes / when zombies die in powder snow. Serene Seasons creates a winter period when the powder-snow layer is thicker and biome temperatures dip. The Frostbitten zombie's `frozen_rotten_flesh` could be framed as a seasonally-peak reagent (most abundant in winter, scarce in summer) feeding a Create/magic method. The existing M-16 REJECT row argues "loot tables are static, not season-gated" — correct for a loot-table weave, but the *spawn rate* of the Frostbitten zombie could be config-tied to Serene Seasons' winter period (it already only spawns in cold biomes or via powder-snow kill condition). This is a config-tie delivery, not a recipe. Still, does it advance the loop? It creates a seasonal reagent from combat, yes. But the delivery mechanism (config spawn-rate tie to seasons) is outside existing methods palette.

Second gap: **M-17 (electric/FE bridge)** — the Immortal is explicitly storm-themed (converts nearby zombies to electric, calls lightning). A drop from the Immortal energised via `createaddition:charging` (M-17) is genuinely thematic and not covered by any existing row (the existing M-17 proposal got 1 ACCEPT but was REJECTED on "no confirmed Immortal drop beyond heads"). If the Immortal does drop something unique (the `immortal_head` is confirmed in the block list), the head could be energised for a lightning-charged output. Heads are decorative trophies though — charging a trophy head is tonally odd. The loot drop would need to be an item with actual electric valence. Since this is unconfirmed, I'll challenge the existing M-17 ACCEPT.

- CHALLENGE | from: rottencreatures:immortal drop | via: create_new_age:energising | to: create | motif: M-17 | verdict: REJECT | hook: the Immortal's dossier-confirmed drop is only `immortal_head` (a decorative trophy block); energising a display head is tonally incoherent and rewards a non-scarce cosmetic — no confirmed functional drop for M-17 to act on

- NEW | from: rottencreatures:frozen_rotten_flesh | via: config/spawn-rate tie (Serene Seasons winter amplifies Frostbitten spawn rate) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Frostbitten zombie swarms in winter powder snow — frozen flesh is a winter reagent; scarce in July, plentiful in January

Note: the M-16 delivery here is a config-tie (Serene Seasons temperature config + spawn conditions), not a recipe route. It's valid per the briefing's "config tie" delivery type.

## edf-remastered-5.0-beta4
Existing rows are split: the strong ACCEPT stream (M-15 via loot-seed, M-02 via loot-seed) conflicts with the confirmed-dossier fact that EDF does NOT change the dragon's drop table and adds no items. Several Opus rows correctly REJECT on this basis. The context-fed refinement should resolve this tension.

The dossier is definitive: "Does NOT change dragon drops or add rewards (confirmed on Modrinth)." The `loot=yes` flag is a false positive here — it flags the mod as having a loot table, but the loot_table is the vanilla dragon loot (which EDF doesn't touch). Any loot-seed weave would be us *adding* drops to the dragon table via a KubeJS/datapack edit — which is a valid Phase-3 action (we can add a new drop to the vanilla dragon loot table ourselves), but it is NOT "routing a material this mod provides" — the mod provides no material.

The nuance the existing rows miss: a loot-seed on the dragon table is **our own datapack edit**, not EDF's content. That's still a valid weave — we chose EDF specifically to make the dragon harder, and a harder dragon should reward a boss-key item (M-15). The question is whether edf gets credit for the weave or whether the weave belongs to "vanilla dragon encounter with EDF installed." Since EDF is the prerequisite (it makes the fight hard enough to justify the boss-key reward), the weave is legitimately attributed to EDF.

The existing rows already cover this angle thoroughly (M-15 loot-seed with many ACCEPTs). The only gap: no existing row has differentiated between **the dragon's personal drop stream** (which EDF doesn't touch — the egg + exp) vs. **a separate chest/structure we could place near the End portal** (a "treasure room" datapack). A chest in the End exit portal area is a clean loot-table target that isn't the dragon's personal drop. Not proposed in any existing row.

- NEW | from: Ender Dragon kill event (EDF hardened encounter) | via: loot-seed (seed a custom chest in the End exit structure, not the dragon's personal drop) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the End's exit pedestal holds a sealed vault — after the enhanced dragon falls, a new chest spawns with the void-tier boss-key component; EDF makes the fight earn the reward

## occultengineering
Existing rows: M-08 (sterling_silver coin — split, 20 ACCEPTs but also strong REJECTs on reagent-ownership conflict), M-29 (spirit_solution required in a Create recipe), M-33 (phlogiport service-for-hire), M-37 (encyclopedia_of_souls as colony research gate), M-28 (Demon's Dream colony farming), M-18 (spirit_solution via spirit_trade). Already at 2 anchors (Create + magic).

The sterling_silver M-08 tension is the sharpest unresolved dispute. The REJECT argument is: "sterling_silver is an occult intermediate alloy; minting it to coin competes with its ritual significance." The ACCEPT argument is: "it's a scarce alloy that comes out of a Create process, fits M-08." The dossier's own 2nd-anchor candidate says "[WEAK] M-08." I should challenge this.

- CHALLENGE | from: occultengineering:sterling_silver | via: create:pressing → numismatics mint | to: economy | motif: M-08 | verdict: REJECT | hook: sterling_silver is the output of the Create×Occultism automation chain — it's already the in-pack scarce intermediate for Occultism rituals; minting it to coin routes the same material into a competing use and creates a player-incentive to coin it out rather than use it ritually, soft-locking magic progression; a different scarcity-metal should bear the coin role

One gap not covered: **M-06 (sequenced assembly)** for the high-tier mechanical spirit upgrades (afrit/djinni). The existing M-06 ACCEPT rows mention it but they got only 1 ACCEPT each and were not strongly endorsed. The occultengineering `upgrade_tier` method is its own native upgrade chain — stacking M-06 sequenced_assembly on top of `upgrade_tier` might be redundant. However, the highest-tier afrit/djinni upgrade could reasonably gate through a sequenced_assembly step before the `upgrade_tier` step, making the spirit-machine progression go: Create sequenced_assembly → intermediate part → occultengineering:upgrade_tier → upgraded spirit machine. That's a true M-06 endgame chain. Not yet clearly proposed as a two-step approach.

- NEW | from: occultengineering mechanical spirit upgrades (afrit/djinni tier) | via: create:sequenced_assembly (an intermediate part) → occultengineering:upgrade_tier | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a djinni's mechanical chassis needs a sequenced-assembly component before the spirit can be fitted into it — the engineer and the occultist hand the part back and forth before it's ready

## txnilib  [already written above — LEAVE]

## fluid
Existing rows: M-24 (centrifugal_pump/smart_interface as aeronautics drivetrain — REJECT at 3:3 split), M-04 (neon_tube crushing — mostly REJECT), M-23 (infra as airframe — REJECT), M-16 (aqueduct seasonal irrigation — 2 ACCEPTs), M-12 (honeycomb_mold fill — 2 ACCEPTs), M-13 (fuel routing via pump — 1 ACCEPT), M-05 (centrifugal pump via mechanical_crafting — 1 ACCEPT), M-31 (centrifugal pump as logistics-required bulk infrastructure — 1 ACCEPT). Already at 2 anchors (Create + aeronautics).

The M-16 (aqueduct seasonal irrigation) row is interesting and only has 2 ACCEPTs — it's not covered by many passes. Let me check whether it's genuinely novel or just low-traffic.

The aqueduct → seasonal irrigation framing is: the aqueduct feeds spring meltwater to seasonal crops, frost-blocked in winter (Serene Seasons). This is a config-tie delivery (no new recipe, just the aqueduct's open-flow behavior interacting with Serene Seasons' temperature). The fluid mod's aqueduct already moves open-channel water. Serene Seasons already affects crop growth by season. The weave says "the aqueduct is the mechanism that gates irrigation water to seasonal crops." But this is descriptive of player behavior, not an authored weave — we don't need to add a recipe or config for this to work (it already works as a gameplay emergent). So the M-16 ACCEPT is weak: it's atmospheric adjacency, not a designed weave.

The gap in the existing rows: no one has proposed the **M-32 byproduct → input** angle — fluid's copper tap specifically draws fluid *out* of a tank and into an output. This could be used in a closed loop where a Create Crushing process's wash-water output flows through fluid's aqueduct/tap back into the washing basin — a circularity that makes the copper-tier fluid infrastructure necessary for closed-loop washing. But this is a player-build pattern, not a recipe weave.

Genuine new gap: the **honeycomb_mold** (M-12 ACCEPT from 2 passes) — filling the mold with honey via `create:filling` to produce a honeycomb-shaped casting. The delivery is `create:filling` (honey fluid → mold). This ties fluid's plumbing infrastructure into the Create honey economy (bees → honey tank → fluid tap → mold → wax/honeycomb product). The existing row at 2 ACCEPTs under M-12 covers this but names it loosely. This is already covered.

- CHALLENGE | from: fluid:aqueduct | via: config/game-mechanic tie (seasonal irrigation) | to: survival | motif: M-16 | verdict: REJECT | hook: aqueduct irrigation in Serene Seasons is emergent player behavior, not a designed weave — no recipe or config edit is required; the mod already works this way; claiming M-16 credit for pre-existing emergent compat is inflating the weave count

OK — existing rows sufficient for fluid (already 2 anchors). The M-12 honeycomb_mold fill and M-13 fuel-line routing are the clean accepts; M-16 seasonal/aqueduct should be challenged as above.

## create_connected
Existing rows: M-24 (kinetic_battery → aeronautics drivetrain — 8 ACCEPTs), M-06 (kinetic_battery/control_chip via sequenced_assembly — split, many REJECTs), M-31 (item_silo logistics — split), M-19 (fan_haunting_catalyst → magic soul seam — split), M-17 (kinetic_battery via charging — split), M-20 (fan_catalyst via item_application — 1 ACCEPT), M-04 (copycat crushing — split/REJECT). Dossier says: "pure Create-internal QoL/expansion" — leave. Already 1 anchor (Create-only).

The dossier's own recommendation is "leave" for 2nd anchor. The blind passes found M-24 (kinetic_battery → aeronautics) as the strongest second-anchor candidate with 8 ACCEPTs. That's a real weave. But the dossier's 2nd-anchor candidates say "none — support role."

Let me assess the M-24 kinetic_battery → aeronautics link freshly: the kinetic_battery stores rotational SU and could be discharged into an Aeronautics engine's shaft input for burst thrust. This is a build-level mechanic (you mount the battery on the ship's shaft and it acts as a buffer). Is there a recipe to author? The kinetic_battery's *recipe* would need to include Aeronautics components, or the Aeronautics engine recipe would need a kinetic_battery as an optional/required input. Neither is a forced motif fit — M-24 is for a mechanical *component* that goes INTO the Aeronautics drivetrain recipe. A kinetic_battery is a Create part that happens to be useful on ships; that's not the same as being a required drivetrain component.

- CHALLENGE | from: create_connected:kinetic_battery | via: recipe (create:mechanical_crafting or sequenced_assembly) | to: aeronautics | motif: M-24 | verdict: REJECT | hook: M-24 requires the component to feed INTO an Aeronautics drivetrain recipe as a required input; a kinetic battery is a generic Create shaft-power storage block that is *useful* on ships but not a required Aeronautics recipe ingredient — the weave conflates "useful on a ship" with "a drivetrain component"; by that logic every Create block is M-24

The one genuinely new angle: create_connected ships `loot=yes` — it generates in structures. But looking at the dossier more carefully, the loot flag may be a false positive (the mod probably doesn't add structures, just that its items can appear). No real loot-seed angle here.

OK — existing rows sufficient. The M-24 kinetic_battery rows are the closest to a real 2nd anchor but the definition challenge above should go on record.

## copperagebackport
Existing rows: M-04 (copper deco crushing — strong, 30 ACCEPTs for the top row), M-03 (copper tools/armor crushing — 2 ACCEPTs), M-20 (create:deploying wax application — 1 ACCEPT), M-28 (Copper Golem → colony courier — 1-2 ACCEPTs), M-05 (Copper Golem via mechanical_crafting — split). Golem logistics rows mostly REJECT.

One gap not covered: **M-29 (cross-route dependency)** — copper tools/armor (requiring a pressed copper sheet as their blade/plate rather than raw ingot) has 1 ACCEPT row from a single pass that proposed it under M-29. The framing is: copper sword/chestplate recipe requires a `create:pressing` output (copper_sheet) as the metal component, creating a soft dependency between vanilla-tier combat gear and the Create spine. This is at the everyday power level (copper tools are early-game), so depth should be light (M-29 cross-route, one step). The existing row framed it correctly. But the overall ACCEPT count is low (1) — does it survive the red-team?

Red-team: copper tools are intended as an early-game stepping stone before iron; gating them on Create-pressed copper sheets means players need Create infrastructure before they can use copper tools, which over-gates an early-game everyday item. This violates the "never gate a basic/everyday component behind a complex recipe" rule. So M-29 here fails the cost-model guardrail.

- CHALLENGE | from: minecraft:copper_axe / copper_sword / copper_chestplate | via: recipe (require create:pressing copper_sheet as crafting ingredient) | to: create | motif: M-29 | verdict: REJECT | hook: copper tools are the earliest gear tier (pre-iron); gating them behind Create pressed sheets violates the cost-model guardrail — a player who just spawned needs copper tools before they can build Create infrastructure; this is an everyday item that must not be deep-gated

One genuinely new angle: **M-22 (lunar/celestial reagent)** — the Copper Golem oxidizes over time, and oxidation is time-based. Under Enhanced Celestials' lunar events, the oxidation rate could be framed as moon-phase-gated (oxidation accelerates under a full moon, or under the Ender Moon). This is thematic but has no delivery mechanism (no recipe or config makes oxidation moon-dependent). REJECT — no method.

A more concrete new angle: **create:splashing** to de-oxidize copper blocks/chests is proposed in 2 existing rows under M-04 (both got 1 ACCEPT each). The splashing de-oxidation is genuinely distinct from M-04 (which is crushing-recycle); it's a reversibility weave. But what motif does it compose? M-04 says "metal/stone deco crushes back to raw" — splashing isn't crushing. The nearest motif is M-12 (processing-chain pull, a raw block run through a processing method into a useful output), but the output of de-oxidizing copper is just a cleaner copper block, not a useful intermediate. No clean motif. The existing rows that propose splashing de-oxidation under M-04 are mis-motifed (M-04 is crushing, not splashing).

- CHALLENGE | from: oxidized copper blocks/chests | via: create:splashing (de-oxidize) | to: create | motif: M-04 | verdict: REJECT | hook: create:splashing de-oxidation composes no established motif — M-04 is specifically the crushing-recycle path; applying splashing to copper oxidation under M-04 is a motif mismatch; the de-oxidation is a nice emergent behavior but needs a Gate-0 motif if it's to count as a weave (or note it as already implemented by vanilla axe-scraping equivalence)

## kubejs
LEAVE — scripting framework (no player-facing content, 0 blocks, 0 recipe-types registered; 1 generated bucket item is an internal artifact); sanctioned support/tooling role. It is the weaving tool, not a weave target.

## numismatics
Existing rows: M-05 (vendor/depositor via mechanical_crafting — split), M-33 (vendor as service-for-hire storefront — 2 ACCEPTs), M-28 (colony-trade integration — 1 ACCEPT), M-08 (player-minted coin via pressing — several ACCEPTs), M-26 (blaze_banker consumes blaze rods — 1 ACCEPT), M-34 (blaze_banker combat-route supply — 1 ACCEPT). Already at 2 anchors (economy + Create).

The M-26 (blaze_banker consumes blaze rods as a fee-processing fuel) row is interesting and underweighted (1 ACCEPT). The blaze_banker block does seem to require blaze-adjacent material to operate (it "stokes" the bank). If blaze rods feed the bank's operation as a consumable, this is a genuine M-26 (consumption sink) weave that creates continuous demand for Nether combat drops — closing the loop: Nether combat → blaze rods → bank operation → coin circulation → economy.

The dossier doesn't confirm blaze rods as a consumable input for the blaze_banker (the name implies a blaze connection, but the exact mechanic isn't documented). This needs verification before proposing confidently.

- NEW | from: numismatics:blaze_banker (operating requirement) | via: config/recipe check — confirm whether blaze_banker consumes blaze rods per transaction or as upkeep | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: running a bank node in the Nether means your bank runs on blaze rods — the combat specialist's fire drops keep coin circulating; verify blaze rod consumption mechanic before Phase 3

## charta
Existing rows: M-33 (card_table as service-for-hire venue — 4 ACCEPTs), M-12 (empty wine/beer glasses filled with vinery/alcohol_industry output — strong across multiple rows), M-04 (bar furniture via create:cutting — split, 13 REJECTs vs 7 ACCEPTs), M-26 (filled glasses as consumption sink — 1 ACCEPT), M-35 (glass + vinery→maturation chain — 1 ACCEPT). Currently 1 anchor (survival/social).

The M-04 (bar furniture via create:cutting) debate is the central tension. The existing rows reject it because M-04 is specifically "metal/stone deco crushes back to raw" — wooden bar furniture is not metal/stone deco. The 7 ACCEPTs that used M-04 for `create:cutting` (sawmill) are motif-mismatched: M-04 is crushing-recycle, not sawmill-fabrication. The correct motif for "furniture fabricated from sawmill-cut wood" is M-12 (processing-chain pull: raw log → create:cutting → plank/board → charta furniture recipe). That's a legitimate weave: bar stools and shelves require Create-cut lumber as an ingredient, tying tavern construction to the sawmill.

- CHALLENGE | from: charta bar furniture (card tables, stools, bar shelves) | via: create:cutting | to: create | motif: M-04 | verdict: REJECT | hook: M-04 is specifically "metal/stone deco crushes back to raw/gravel + XP nugget"; using it for sawmill-fabricated wooden furniture is a motif mismatch — the correct framing is M-12 (processing-chain pull: raw log → create:cutting → shaped lumber → furniture recipe), which has no existing ACCEPT row

- NEW | from: charta bar furniture (card tables, stools, bar shelves — wooden items) | via: create:cutting (shaped lumber → furniture recipe ingredient) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: you can't mass-produce a tavern without a sawmill — the mechanical saw turns raw logs into the tongue-and-groove boards that charta's bar furniture is assembled from

The M-12 wine-glass fill rows (empty_wine_glass → vinery:wine_fermentation / alcohol_industry:alcohol_boiling) are the strongest existing link and deserve to stand. The M-33 card table service node also stands. With M-12 (bar furniture via sawmill) accepted, charta gains Create as a 2nd anchor.

## create_integrated_farming
Existing rows: M-12 (roost egg/feather → farmersdelight cooking — survival, already covered anchor), M-28 (roost/net bulk output → colony butcher/cook requests — economy, 4 ACCEPTs), M-02 (feathers via imbuement to magic — split), M-11 (lava_fishing_net nether drops via spirit_fire — 2 ACCEPTs), M-26 (automated food stream as consumption sink — 2 ACCEPTs), M-29 (fishing net → createfisheryindustry cross-route — 1 ACCEPT), M-31 (bulk roost/net output needs aeronautics — 2 ACCEPTs), M-05 (roost via mechanical_crafting gate — 1 ACCEPT). Already at 2 anchors (Create + survival).

The M-05 (roost gated on mechanical_crafting) row is the one I want to evaluate freshly. The roost is a Create add-on block that replaces live chicken husbandry — it's mid-tier automation. Gating it on mechanical_crafting (brass components) makes narrative sense: automated animal husbandry is a mid-game Create unlock, not a day-1 box. Power level: mid. One light step (require brass shaft/cog in the roost recipe). This is a coherent M-05 weave. The existing row has only 1 ACCEPT — low confidence.

The lava_fishing_net → M-11 (nether drops via spirit_fire) is underexplored. The lava net catches fire-adjacent drops (blaze rods, magma cream, fire charges). These are confirmed inputs to Occultism's spirit_fire transmutation. 2 ACCEPTs. This is solid but low-traffic.

One completely missing angle: **M-16 (seasonal reagent)** for the fishing_net's aquatic drops. Serene Seasons affects aquatic behavior (fish behavior, spawn rates). A fishing net's catch could be season-gated: better catch in spring/autumn, low yield in winter (frozen water). This is a config-tie delivery — Serene Seasons + fishing net behavior. No recipe needed. But does it advance the loop? Yes: seasonal fishing pressure + automated net creates a bulk-commodity that peaks seasonally, making it trade-worthy. However, the fishing net works in any biome/season with no natural Serene Seasons interaction, so this is a design-add, not an emergent weave.

- NEW | from: create_integrated_farming:lava_fishing_net (nether-biome catches — blaze rods, magma cream, fire charges) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an automated lava net streams fire-adjacent drops into a spirit-fire ritual loop — the fisherman's nether haul becomes the occultist's raw ingredient without anyone touching the Nether directly

Note: this is already partially covered by 2 existing rows, but those rows are tentative ("exact loot not confirmed"). The lava net is confirmed to fish in lava and the natural catch includes blaze rods/magma cream (vanilla lava-fishing drops). This NEW row is a confidence-upgrade, not a genuinely new idea.

The truly new angle for create_integrated_farming: **M-37 (research/knowledge gate)** — gating the lava_fishing_net or the roost behind a MineColonies research node, so automation is a colony-progression unlock rather than a raw-recipe unlock. This hasn't appeared in any existing row. The delivery: MineColonies research (a colony Fisherman/Farmer hut research unlocks the ability to *recipe-craft* the roost/lava_net, or the hut itself is what produces them). The M-28 rows already propose colony request/supply weaves for the roost's *output*, not the roost's *construction*.

- NEW | from: create_integrated_farming:roost / lava_fishing_net (automated farming appliances) | via: minecolonies research (colony Farmer/Fisher hut research unlocks the recipe) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: automated poultry production isn't a day-one craft — a colony's Farmer research tier unlocks the roost schematic; the settlement route gates the automation route

== CHUNK COMPLETE ==
