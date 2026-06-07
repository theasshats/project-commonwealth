# Phase 2 candidates — chunk-08

## create_connected   [anchors: create (1)]
- LEAVE — pure Create-internal QoL (kinetic parts, copycat skins, logistics helpers). No foreign-material surface; copycat blocks consume any block as a texture but produce nothing new and there is no cross-system output to route. The dossier's own 2nd-anchor candidates column is blank. Support role confirmed.

## crash_assistant   [anchors: support/client utility (1)]
- LEAVE — zero blocks, zero items, zero loot. A crash-diagnostics overlay with no gameplay surface. Nothing to weave.

## lithium   [anchors: support/performance (1)]
- LEAVE — optimization-only, registers no items/blocks/loot. Server-tick and AI optimizer; no content surface to route.

## cristellib   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items. A structure-config framework library pulled in by structure mods as a dependency. No content to weave.

## occultengineering   [anchors: create, magic (2)]
- REWORK: OK — connections sound. Already the canonical Create×Occultism bridge (M-05/M-11); made-by methods cover create:compacting/filling/haunting/item_application/mixing/pressing plus occultism:ritual/spirit_fire. The one weak candidate in the dossier (sterling_silver → numismatics M-08) is plausible but not needed to justify the mod; flag as optional economy enrichment below.
- from: occultengineering:sterling_silver_ingot (scarce occult alloy, item/ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the forge that binds brass gears to spirit circles mints its own coin — sterling silver, worked by Create, becomes the occult-trade denomination
- from: occultengineering:spirit_solution (reserved reagent) | via: occultism:ritual reuse | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is already the reserved occult intermediate (reagent-ownership table) used in existing M-11 routes — re-proposing it as a new weave would be a duplicate, not an addition

## geckolib   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items, zero loot. Animation engine; no gameplay or material surface.

## dndesires   [anchors: create (1, deep)]
- from: dndesires:rubber (milkshake/rubber crop sap → Hydraulic Press raw rubber) | via: dndesires:hydraulic_compacting → Create chain (pressing vulcanized sheet) | to: survival→Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Hydraulic Press sweats sap into raw rubber, then Create presses it flat — every gasket and seal in the factory starts in a grove
- from: dndesires milkshakes (chocolate_milkshake, glowberry_milkshake, strawberry_milkshake) | via: extradelight:chiller or farmersdelight:cooking as upstream ingredient prep, then milkshake counts as a Serene Seasons summer luxury food | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a summer-season drink sold at market; frozen via Create-chilled ingredients — scarcity drives the flavour window
- from: dndesires:asphalt / bore_block palette | via: create:deploying as airframe surface block (structural outer skin) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: asphalt-panel hull plating on a mid-tier airship — the bore-block grid reads as riveted industrial skin, exactly what an Aeronautics shipwright would press onto a gondola frame
- from: dndesires:cardboard_package_* | via: create:deploying or logistics chain as Aeronautics cargo-box tier-1 | to: aeronautics/economy | motif: M-13 | power: everyday | tone: ok | verdict: REJECT | reason: M-13 is the fuel motif; cardboard boxes are a logistics packaging layer, not fuel/propulsion — no motif cleanly covers this; force-fitting M-13 is wrong; would need a new motif (no-motif → reject-for-review)
- from: dndesires:industrial_fan / gear motor components | via: aeronautics propeller/engine recipe requiring a high-RPM fan component | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: a Dreams & Desires industrial fan head retooled as the propeller nacelle — the bigger the fan, the bigger the airship

## ars_n_spells   [anchors: magic (1)]
- LEAVE — zero blocks, zero items, zero loot. A magic-internal bridge (Ars↔Iron's mana unification) with no material I/O of its own. The join surface is mana-pool data, not items; forcing a 2nd anchor would be contrived. The dossier correctly flags this.

## cloth_config   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items. Config-screen API library; no gameplay surface.

## balm   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items. Multi-loader abstraction library; no content. Its biome-modifier and nugget c:tags are scaffolding internal to the library author's mods, not a weave surface.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — the compass itself is a pure information tool (finds biomes, produces no material). It has 32 item IDs but they are compass atlas variants (model/rendering states), not distinct materials to route. No weave surface.

## rechiseledcreate   [anchors: create, support/decoration (2)]
- REWORK: OK — connections sound. Already earns its two anchors: Mechanical Chisel = genuine Create kinetic method, and 242-block decorative palette serves the build/deco arm.
- from: rechiseledcreate chiseled Create blocks (andesite/asurine cut small-brick, window panes) | via: create:crushing → crushed stone byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-chiseled deco grinds back to stone dust — the factory floor stays tidy
- from: rechiseledcreate:*_window_panes (the many wood-frame glass windows) | via: aeronautics structural/cosmetic cockpit glazing (deploy-applied window block) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: M-23 is for load-bearing hull alloys/plates; a cosmetic window pane is not a structural member — tone-fit is fine but the motif is wrong and inventing a cosmetic-decoration aeronautics motif is not in scope; power mismatch (everyday deco vs. structural depth)

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction citizen/mercenary hire | via: numismatics coin as hire currency (faction quartermaster trade keyed on coin) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: you don't recruit a Barathian knight with sweet words — you pay in minted coin, tying the combat pillar directly to the economy loop
- from: valarian_conquest:*_citizenship + faction shield/armor | via: native armorsmith station gated on Create steel/brass parts as material inputs | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is "flagship item built in its own machine, gated on Create parts"; the armorsmith station is unregistered as a recipe type and gating all faction gear behind Create parts would feel punitive for a combat mod whose value is accessible faction flavor — depth mismatch; a lighter recipe-table gate is more coherent but no-motif for that delivery → reject
- from: valarian_conquest loot (faction chests in Outpost/Keep structures) | via: loot-seed — add numismatics coins + a MineColonies recruit token as drops | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a ransacked outpost yields minted coin from the garrison's pay-chest — every raid is also a payday

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — one craftable item (target_dummy) that functions as a damage-test prop. No processing, no loot, no weave surface. Forcing an edge (e.g. "craft from boss drops") would be contrived.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing → dark_metal_dust + xp_nugget byproduct | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the fractured ore-deposit from a Fallen Chaos Knight's grave feeds the crusher — dark metal earns its place on the Create spine
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire transmutation → bone-marrow spirit dust (a necromantic input) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a chaos-cursed bundle of bones, spirit-fired in the Occultism circle, yields the bone-marrow essence that hungry rituals demand
- from: born_in_chaos_v1 boss drops (Pumpkin Staff / Soul Saber) | via: bountiful bounty board payout in numismatics coin | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal Pumpkinhead dies and coin flows — the village bounty board has been waiting all October
- from: born_in_chaos_v1:dark_metal (processed) | via: create:pressing → dark_metal_sheet → aeronautics hull plate | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: dark metal is thematically cursed/spooky — using it as a standard hull structural alloy fights the material's vibe (it should be rare-reagent, not load-bearing frame stock); tone clash; M-03 crush already captures the Create link more cleanly

## kleeslabs   [anchors: support/QoL (1)]
- LEAVE — behavior-only (breaks one half of a double slab); registers no items, blocks, or loot. Nothing to weave.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement as a Tier-3 catalyst (gates a powerful enchantment-boosting imbuement recipe) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: only the Invoker's gem can push an Ars enchantment past its ceiling — the raider holds the key to arcane supremacy
- from: illagerinvasion:illusionary_dust | via: occultism:ritual as a circle-summoning reagent (illusion-school spirit component) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Illusioner sheds dust that Occultism's pentacle recognizes as the veil between planes — it feeds summoning rituals that conjure trickster spirits
- from: illagerinvasion:platinum_chunk | via: create:crushing → platinum_dust + xp_nugget, then processed into a tradeable metal | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the raid yields a platinum nugget; the crusher refines it; Create folds a new metal into the economy
- from: illagerinvasion:hallowed_gem | via: bountiful bounty board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a standing bounty on Invokers pays in coin — the raid-hardened carry the economy's hardest currency
- from: illagerinvasion:lost_candle (rare loot drop) | via: ars_nouveau:enchanting_apparatus as an ambient catalyst for a ritual illumination recipe | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the lost_candle's dossier signature is atmosphere (a creepy candle drop) not a catalogued arcane reagent — the pairing is thematic but thin; the enchanting apparatus already has Hallowed Gem as the strong endgame input from this mod; two M-10 inputs from the same mob pool dilutes the scarcity signal. REJECT in favor of keeping one clean boss-reagent link.

## extradelight   [anchors: survival, create (2)]
- REWORK: OK — connections sound. Already anchored on survival + Create (made-by includes create:mixing). The dossier's two upgrade paths are both coherent; both worth proposing.
- from: extradelight crops (coffee, garlic, citrus, ginger, hazelnut) via c:tag | via: create:milling → ground coffee / spice dust (flour-equivalent intermediates) → feeds extradelight:oven / vat downstream | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the grindstone turns coffee cherries into grounds, the mill wheels spice into dust — the kitchen's whole prep stage runs on Create power
- from: extradelight feast items (high-tier cooked meals — e.g. feast blocks, complex pastries) | via: numismatics sell as provisioning luxury goods or MineColonies cook-trade items | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a feast laid on by the colony cook is worth real coin at the market — cooking effort converts to economy value
- from: extradelight:evaporator output (salt, syrups) | via: create:filling → fluid-vessel stock used in a Create Mixing recipe for chemical processing (e.g. salt-brine as a flux) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: evaporated salt drawn off in bulk goes straight to the mixing vat — the kitchen and the factory share a brine line

## death-count-1.0   [anchors: support/friend-group flavor (1)]
- LEAVE — zero blocks, zero items, zero loot. Vanilla-scoreboard datapack; no material surface to weave. The death-count tally is a social cosmetic, not a system node.

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco blocks (copper_bars, copper_chain, copper_chest, copper_lantern — all oxidation variants) | via: create:crushing → copper_nuggets + xp_nugget (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a stack of old copper bars thrown into the crusher yields nuggets — the oxidation palette feeds back into the Create copper economy with no dead ends
- from: copperagebackport copper tools/armor (copper_axe, copper_boots, etc.) | via: create:crushing → copper_nuggets (same M-04 recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn copper gear runs through the crusher the same way the decorative blocks do — nothing copper is wasted
- from: copperagebackport:copper_golem_statue (Copper Golem — chest-to-chest item courier) | via: aeronautics/logistics flavor — the Copper Golem's hauling complements Create's logistics arm; thematically a low-tech pre-automation sorter that players graduate from as they build Create networks | to: economy/aeronautics (logistics arm) | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: M-24 is for mechanical components going INTO Aeronautics drivetrain recipes; the Copper Golem is a mob entity that routes items, not a crafted part. No delivery mechanism (not a recipe, not a loot-seed) — the "complementary logistics" angle is flavor observation, not a weave. no-motif → reject

== CHUNK COMPLETE ==
