# Phase 2 candidates — chunk-04

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]

- LEAVE — pure behavior/datapack toolset (area mining, block-swap, trowel, rope ladder, XP flasks). No methods to route material through; crafts only vanilla mats. No second anchor is coherent: the XP flasks could theoretically tie into Create's experience_nugget / enchantment loop (M-10/M-17) but the connection is too thin — flasks are storage items, not a processing surface, and the items register under the minecraft: namespace so there's no stable mod-scoped hook. Forcing an edge here is a defect.

---

## minecolonies_tweaks   [anchors: support/QoL (1)]

- LEAVE — tag-harmonization glue. Its actual output is the c:crops/* and c:foods/* tag set that enables other mods' food-web weaves; it is the enabler, not a node. No methods, no material outputs, no machine to route through. Analogous to AlmostUnified — structurally important but not itself a weave target.

---

## ecologics   [anchors: survival (1)]

Power-read: coconut/coconut_slice are everyday-tier (beach biome drop, no recipe depth); azalea woodset is mid-tier decoration. The coconut_slice clearing all effects on eat is a modest but distinctive property.

- from: ecologics:coconut / c:foods/fruit | via: extradelight:juicer or extradelight:mortar | to: survival (food chain deepening) | motif: M-12 | power: everyday | tone: ok — tropical kitchen, coherent with ExtraDelight's rustic-agrarian vibe | verdict: ACCEPT | hook: press coconut into coconut milk in the Mortar or Juicer — feeds ExtraDelight's Vat/Evaporator chains for tropical dishes
- from: ecologics:coconut / c:foods/nut | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill coconut husk/meat into desiccated coconut flour — a new milling output for exotic baking (ExtraDelight Oven)
- from: ecologics:azalea_flower | via: ars_nouveau:imbuement or extradelight:mortar (crush to dye/essence) | to: magic | motif: M-10 | power: everyday | tone: ok — flowers-as-reagents is classic Ars Nouveau / alchemical | verdict: ACCEPT | hook: azalea blossoms steeped into a mild arcane catalyst for low-tier Ars infusions
- from: ecologics:coconut_slice (clears all effects) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok — coconut milk's cleansing property echoes antidote brews | verdict: ACCEPT | hook: brew coconut slices into a Cleansing Draught in Iron's Spellbooks cauldron — a natural-flavour antidote component
- from: ecologics loot (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: loot=yes on ecologics but its structures are biome-palette flavor (no dungeon), not boss/combat loot; M-34 requires a combat/danger source. No combat pillar weave here.
- REWORK: dossier 2nd-anchor candidate "M-04 recycles deco (azalea woodset)" — this is a valid low-priority option but the dossier correctly flags it as weak. Demote it to REJECT in formal ledger: the azalea woodset is vanilla-tier decoration and M-04 (lossy recycle) is a poor fit for a food/fruit mod; the stronger second anchor is M-12 via cooking chains (already accepted above).

---

## rightclickharvest   [anchors: support/QoL (1)]

- LEAVE — interaction-behavior mod, zero items/blocks/methods. The right-click harvest mechanic is a pure QoL hook on vanilla and modded crops; no material or method surface exists to weave. No second anchor coherent.

---

## ohthetreesyoullgrow   [anchors: support/library (1)]

- LEAVE — pure tree-generation framework library (worldgen engine). Zero items, zero blocks, zero c:tags, zero loot. Nothing to route through any method. Sanctioned support role.

---

## clumps   [anchors: support/performance (1)]

- LEAVE — XP-orb merging behavior, no items/methods/loot. Pure server-perf mod; nothing in the material graph to weave.

---

## endermoon   [anchors: survival (1)]

Power-read: endermoon is a spawn-weight event (no items of its own). Its indirect output is surplus ender pearls during the Ender Moon night.

- from: ender pearls (mass-spawned during Ender Moon) | via: occultism:ritual or ars_nouveau:imbuement (as lunar-gated ingredient) | to: magic | motif: M-22 | power: mid | tone: ok — ender pearl as lunar reagent is thematically resonant (endermen swarm the ender moon) | verdict: ACCEPT | hook: stockpile ender pearls on Ender Moon nights — they're required as a lunar-condition input for a portal/teleport ritual (Occultism) that only works when the moon event is active
- from: endermoon event (raised spawn weight) | via: loot-seed (enhanced ender pearl / shulker-fragment loot injected into mob tables for the event period) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: endermoon has no loot table of its own and no mechanic to inject loot per-event; the spawn surge is a passive world effect, not a drop table. The ender pearl supply increase is already captured by the M-22 accept above. A loot-seed here would require a custom event hook, not a Phase-3 method-routing.
- Note: weave should sit on the enhancedcelestials event (the parent) or as a config annotation alongside M-22 for ender pearls; endermoon is the trigger, not the material source.

---

## sky_whale_ship   [anchors: survival (1)]

Power-read: loot=no per jar digest (structure/entity-based; loot_table data lives in structure NBT, not registered as discrete loot tables in this jar). However, the mod's design is explicitly loot-chest-carrying structures accessible by aerial approach. The aeronautics thematic angle is strong.

- from: sky_whale_ship structures (aerial loot chests) | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok — sky whales as airborne boss-destination is exactly what a Create Aeronautics airship fleet needs as a landmark | verdict: ACCEPT | hook: seed one sky-whale chest with a rare Aeronautics blueprint/hull component — the sky whale is the reason you build a proper airship, not just an elytra
- from: sky_whale_ship structures (aerial loot chests) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — boarding a sky whale requires combat with its hostile variant; its loot is a tradeable rarity for non-aerial players | verdict: ACCEPT | hook: seed rare tradeable cargo (a scarce regional material or magic reagent) into the hostile sky whale's chests — combat specialists who can fly up and raid them supply goods non-aerial players can't get
- from: sky_whale_ship (aerial structure, no drop reagent) | via: recipe (Create structural alloy required to build access mechanisms/anchors) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: sky_whale_ship is a structure mod with no recipes and no crafted items; it can't consume a structural alloy in a recipe. The loot-seed approach (accepted above) is the correct delivery.
- REWORK: dossier 2nd-anchor candidate "M-09 / sellable rarities" — M-09 is retired (#163/#240). The economy edge must be re-expressed as M-34 (combat-supply: the hostile whale as a danger-source whose loot only combat/aerial specialists can retrieve). Accepted above as the corrected form.
- OK on aeronautics angle — already noted in dossier; loot-seed delivery is right.

---

## createadditionallogistics   [anchors: Create, aeronautics (2)]

Already at 2 anchors. Review existing connections.

- OK — connections sound. Create anchor via kinetics infrastructure (flexible/lazy shafts/cogs) is unambiguous. Aeronautics anchor via Stock Keeper seats for train/transport logistics is coherent. The create:splashing inbound weave (dye washing) is a thin but real integration. No new second anchor needed; no REWORK required.

---

## betterstrongholds   [anchors: survival (1)]

Power-read: loot=yes (chest loot in the overhauled stronghold rooms). The stronghold's reward is vanilla-tier mixed loot; no unique drops. The Eye of Ender → stronghold path is vanilla.

- from: betterstrongholds loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — a stronghold's forbidden depths holding a rare magic reagent is deeply coherent | verdict: ACCEPT | hook: seed one rare Occultism or Ars Nouveau reagent into the hidden-room chests of the richer stronghold — dungeon-diving rewards progress on the magic pillar
- from: betterstrongholds loot chests | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — the stronghold is a combat-gate; its loot is earned by fighting, not buying | verdict: ACCEPT | hook: seed a scarce trade-worthy component (e.g. a Numismatics blank coin strip or a boss-key ingredient) into the stronghold's endgame rooms so raiding the stronghold seeds the player economy
- from: betterstrongholds | via: loot-seed (player-minted coin blank) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 is player-minted currency via Create processing → Numismatics; a loot-seeded coin blank would make the stronghold a coin faucet rather than driving the player-mint chain. The M-34 combat-supply accept above (tradeable component, not raw coin) is the cleaner form.

---

## zombiemoon   [anchors: survival (1)]

Power-read: 0 blocks, 0 items, loot=no — custom zombie/mutant mobs with no unique drops; they use rotten-flesh-style vanilla fallback drops. No material surface.

- from: Zombie Brute / Mutant Brute (custom mobs) — no unique drops | no viable method-pull | verdict: LEAVE | reason: no items, no loot table, no unique drop registered. The dossier has already confirmed: forcing a drop-reagent would be an invented edge. A STRONG mob with no drop is a difficulty flavor mod; leave it at 1 anchor (survival pressure). No coherent 2nd anchor without inventing new content.

---

## extradelight   [anchors: survival, Create (2)]

Already at 2 anchors. Review existing connections and check for a 3rd.

- OK — Create anchor (made-by: create:mixing) is real and well-established. Survival anchor (deep food/cuisine layer) is unambiguous.
- REWORK on dossier candidate "M-09 luxury good → coin": M-09 is retired (#163/#240). The economy-side case must be re-expressed: ExtraDelight feasts as colony food provisioning (M-28) or as the high-tier food a cook specialist produces that non-cook players must trade for (M-29 cross-route dependency / M-26 consumption sink). Proposed re-expression:
- from: extradelight feasts / complex dishes | via: minecolonies:composting or KubeJS recipe (colony food provision) | to: economy | motif: M-28 | power: mid | tone: ok — a colony's workers demand high-quality prepared food, which only a cook-specialist with ExtraDelight machines can supply | verdict: ACCEPT | hook: MineColonies colonists request ExtraDelight feasts for happiness/productivity — the cook specialization has a permanent buyer
- from: extradelight:oven / mortar / evaporator | via: create:milling (grain → flour) + create:pressing (sugarcane → syrup) as upstream inputs | to: Create | motif: M-12 | power: mid | tone: ok — Create as the industrial kitchen prep stage feeding ExtraDelight's manual craft stations | verdict: ACCEPT | hook: the mill grinds grain to flour that the Oven requires; the Press renders sugar syrup the Vat reduces — Create is ExtraDelight's upstream. (Deepens existing Create anchor beyond just create:mixing.)
- from: extradelight:coffee_beans / c:crops/coffee | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is a sub-case of the M-12 accept above (grain→flour is the same motif, same method); logging it separately would duplicate the accept. Consolidate into the milling/pressing chain above.

---

## travelersbackpack   [anchors: survival (1)]

Power-read: 30+ themed variants (leather-tier everyday; netherite/dragon-tier endgame). Upgrades (crafting, smelting, blast-furnace, tank) are mid-tier. Two custom recipe types.

- from: travelersbackpack endgame variants (dragon, netherite) | via: create:sequenced_assembly (add a sequenced-fabrication step — a pressed plate applied to the pack's structural frame) | to: Create | motif: M-20 | power: endgame | tone: ok — a high-tier pack with engineered plate inserts fits the Create industrial aesthetic | verdict: ACCEPT | hook: the Netherite Traveler's Backpack requires a Create-pressed netherite sheet applied by a Deployer — the top-tier pack earns its slot as a Create production output
- from: travelersbackpack:backpack_tank (integrated fluid buffer) | via: aeronautics (carried aboard an airship as the crew's portable fuel reserve) | to: aeronautics | motif: M-31 | power: mid | tone: ok — a portable fluid tank is load-bearing for long-range airship crews who can't stop to refuel | verdict: REJECT | reason: M-31 is logistics-required bulk good (trade at scale requiring aeronautics logistics arm). A wearable backpack tank is a player-carried item, not a bulk cargo good; it doesn't "require" the logistics arm in the sense M-31 intends. The aeronautics angle is thematic, not a real weave. No coherent method-routing.
- from: travelersbackpack upgrade modules (crafting/smelting/tank upgrades) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 native-method gating requires the mod's flagship item built in its own machine. The upgrades are fairly everyday utility items; threading a Create:mechanical_crafting gate onto mid-tier utility upgrades overcosts basics. The M-20 endgame accept (netherite pack via sequenced assembly) is the right depth scaling; mid-tier upgrades should stay accessible.

---

## modonomicon   [anchors: support/QoL (1)]

- LEAVE — in-game guidebook engine; 6 items (book variants + leaflet), no methods, no loot, no material surface. A pure documentation framework; the books are flavor carriers not a weave node.

---

## almostunified   [anchors: support (1)]

- LEAVE — recipe-graph plumbing tool; no items (0 blocks, 0 items), no methods, no loot. It is the connectivity infrastructure that enables other weaves (merges duplicate material clusters), but it is not itself a weave target.
- Note: GOTCHA remains active — never unify galosphere:*silver* as c:ingots/silver (palladium, not silver; see CLAUDE.md).

---

## puzzleslib   [anchors: support/library (1)]

- LEAVE — pure code library (registration/config/networking abstractions for Fuzs mods). Zero items, zero blocks, zero methods, zero loot. No material surface. Genuine zero-content library.

---

## dungeons_arise_seven_seas   [anchors: survival (1)]

Power-read: loot=yes — explorable galleons, floating fortresses, sunken ruins; no registered blocks/items. The structures are elaborate naval set-pieces.

- from: dungeons_arise_seven_seas galleon/fortress loot chests | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — boarding an armed galleon is a genuine combat gate; only players who can fight their way in (or sail to it) earn the loot | verdict: ACCEPT | hook: seed a scarce nautical trade good (e.g. a sealed compass component or rare metal ingot) into galleon captains' cabin chests — sea-raiders supply goods that drive trade
- from: dungeons_arise_seven_seas sunken ruins | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — sunken ruins holding an ancient magic reagent is tonally coherent (maritime mystery) | verdict: ACCEPT | hook: seed an Occultism spirit-crystal or Iron's Spellbooks scroll fragment into the deepest underwater ruin chests — deep-sea salvage feeds the magic pillar
- from: dungeons_arise_seven_seas ships | via: loot-seed (aeronautics blueprint or chart) | to: aeronautics | motif: M-15 | power: mid | tone: ok — nautical charts / ship plans recovered from galleons feed into Aeronautics airship building (sea to sky lineage) | verdict: REJECT | reason: Aeronautics blueprints/schematics are a player-authored item (Create Schematicannon output), not a droppable progression item. There's no established "blueprint" loot item that gates a recipe. M-15 requires a specific boss-drop that gates a known complex recipe — the chain here is too loose. Defer; could revisit if a concrete Aeronautics key-item is established.

---

## illagerinvasion   [anchors: survival (1)]

Power-read: Hallowed Gem = Invoker boss drop (endgame, gates imbuing-table use); illusionary_dust = Illusioner drop (mid-tier); platinum_chunk = rarer drop (mid-to-endgame). The Imbuing Table pushes enchantments past vanilla caps — a significant progression item.

- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement (as endgame catalyst) | to: magic | motif: M-02 | power: endgame | tone: ok — a hallowed gem from a dark-magic illager boss powering Ars Nouveau's highest-tier imbuements is tonally consistent | verdict: ACCEPT | hook: the Hallowed Gem is a required catalyst in the Ars enchanting apparatus for top-tier source-gem conversion or book upgrade — you must kill the Invoker before the highest magic tier unlocks
- from: illagerinvasion:illusionary_dust | via: occultism:ritual (as spirit reagent) | to: magic | motif: M-11 | power: mid | tone: ok — illusionary dust as an occult ritual ingredient (its smoky/ethereal nature) is thematically sound | verdict: ACCEPT | hook: Illusionary Dust is consumed in an Occultism summoning ritual — the illusioner's essence calls a bound familiar
- from: illagerinvasion:platinum_chunk | via: create:crushing → metal processing | to: Create | motif: M-03 | power: mid | tone: ok — a dropped ore chunk going through the crusher is the standard Create ore-doubling loop | verdict: ACCEPT | hook: crush platinum chunks in the Millstone/Crusher for platinum ingots (+ byproduct XP nugget) — ties the Invoker-raid loot into the metal economy
- from: illagerinvasion:hallowed_gem | via: create:sequenced_assembly (as endgame key-component in a gated Create recipe) | to: Create | motif: M-15 | power: endgame | tone: ok — a boss-key gating a complex Create machine | verdict: REJECT | reason: the platinum_chunk M-03 accept above and the Ars M-02 accept give illagerinvasion both a Create and magic anchor. Adding a second Create edge (M-15 sequenced-assembly gating) on the same Hallowed Gem that M-02 already uses risks double-spending the reagent's connective role. Prefer keeping Hallowed Gem reserved for the magic-anchor (M-02) and not also making it a Create gate. If a Create-boss-key is desired, platinum is the better vehicle via a distinct chain.
- from: illagerinvasion:hallowed_gem (Invoker boss) | via: economy (scarce endgame trade good) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: only players who can defeat an Invoker raid supply Hallowed Gems — combat specialists trade them to the magic-progression players who need them for Ars top-tier work

---

## do_a_barrel_roll   [anchors: support/client QoL (1)]

- LEAVE — pure client-side elytra flight-feel overhaul; no items, no blocks, no methods, no loot. The elytra this mod enhances is vanilla, not Aeronautics; no material surface to route. Genuine behavior/QoL mod; no coherent weave.

---

## moonlight   [anchors: support/library (1)]

- LEAVE — shared library for MehVahdJukaar's mods; no player-facing content, no methods, no loot. The data-driven-trade / virtual-fluid APIs it exposes are used by Supplementaries/Amendments, not by moonlight itself. Pure code library.

---

== CHUNK COMPLETE ==
