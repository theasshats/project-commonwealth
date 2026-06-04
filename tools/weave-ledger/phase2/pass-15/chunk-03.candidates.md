# Phase 2 candidates — chunk-03

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot chests | via: loot-seed | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: reaching a sky whale by airship and looting a rare Aeronautics structural schematic or compressed airframe part from its hoard makes the sky-whale destination a meaningful airship milestone
- from: sky_whale_ship loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: aboard the whale you find a cache of minted Numismatics coin (sprocket/crown tier), making trading-player wealth a reward for sky exploration as well as ground play; reinforces coin as a found-world currency
- from: sky_whale_ship loot chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: whale vibe is whimsical-adventure, not arcane; seeding Ars/Occultism reagents aboard a sky whale feels thematically arbitrary — the connection is proximity, not story; skip in favour of aeronautics + economy loot above

## extradelight   [anchors: survival, Create (2)]
OK — connections sound (existing Create link via create:mixing inbound is real and appropriate).
- from: extradelight feasts / high-tier meals | via: recipe (numismatics sell listing or MineColonies food provisioning) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Grand Feast or slow-roasted dish commands a real coin price at the colony market — cooking effort converts to economic value, rewarding the kitchen specialist
- from: extradelight:evaporator outputs (salts, reduced syrups, caramel) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's mixer handles the final reduction step so evaporated brine→salt and fruit must→syrup flow through the same industrial pipe as other fluids; the bakery is downstream of Create
- from: extradelight grain crops → flour | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling grain through a Create millstone produces the flour extradelight's Oven needs — the bakery is fed by the same industrial hopper that feeds the brewery
- REWORK: existing create:mixing inbound is functional but narrow (only fluids/ingredients noted) — expand the Create weave to also cover create:milling (grain→flour) and create:pressing (oilseeds→cooking oil for the Vat) so the kitchen chain is more fully wired to the Create processing spine, not just a single mixing step

## alternate_current   [anchors: support (1)]
- LEAVE — genuine zero-surface behavior mod; replaces redstone-dust update logic with no items, no loot, no blocks, no config hook relevant to pack systems. Cannot weave.

## sparsestructures   [anchors: support (1)]
- LEAVE — pure worldgen-config utility; adjusts structure spacing via a numeric multiplier and per-structure salt. Zero items, zero loot, no recipe surface. Cannot weave.

## companion   [anchors: support (1)]
- LEAVE — behavior-only QoL mod (pet-safety teleport/retreat logic). Zero items, zero blocks, zero loot. Cannot weave.

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart | via: recipe (create:sequenced_assembly as gate input) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Night Lich's obsidian heart is the final component on the sequenced-assembly line for a high-tier Create machine (e.g. a Mechanical Arm upgrade or industrial centrifuge housing) — you can't build endgame Create tech without killing this boss
- from: bosses_of_mass_destruction:ancient_anima | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient anima — a fragment of the Obsidilith's soul — is exactly the arcane catalyst an imbuement apparatus craves for a tier-3 spell; the cosmic-dark vibe maps cleanly to Ars Nouveau's upper tiers
- from: bosses_of_mass_destruction:blazing_eye | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Nether Gauntlet's blazing eye transmutes through an Occultism ritual into a high-grade spirit-fire catalyst — fire-demon lore maps to infernal spirit magic
- from: bosses_of_mass_destruction boss drops (any tier) | via: loot-seed (bountiful board payout) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Bountiful bounty board posts contracts for boss kills paying out premium Numismatics coin (crown/sun tier) — the hardest content in the world feeds the player economy with the biggest payouts
- from: bosses_of_mass_destruction:void_thorns | via: recipe (crafting table with Ars source_gem) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: void_thorns + source_gem round-trip is M-01/M-10 territory but the pairing is thin — void thorns are a weapon/area item, not naturally an arcane catalyst; ancient_anima (above) is the cleaner M-10 candidate; this would be redundant

## mcwstairs   [anchors: support / decoration (1)]
- from: mcwstairs stone/brick stair variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crusher can reclaim rubble from ornate stone balconies and railings — you deconstruct your scaffolding on an airship dock and the gravel goes right back into the aggregate hopper; consistent with the pack-wide deco-recycle rule
- from: mcwstairs wood railing/platform variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing wood deco yields sawdust/sticks, not a meaningful product — the dossier notes stone/brick as the only plausible join key; wood variants add noise without value; scope the M-04 pass to stone family only

## lithostitched__tectonic-3.0   [anchors: support (1)]
- LEAVE — pure worldgen terrain overhaul (density functions, no items/blocks/loot registered). The thematic fit with regional ore scarcity is genuine but there is no recipe or loot surface to route through. Cannot weave.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
OK — connections sound (Create logistics spine + airborne courier = aeronautics/logistics; the dual anchor is real and well-motivated).
- from: create_mobile_packages robo_bee | via: recipe (create:mechanical_crafting or sequenced_assembly as a Create fabrication step) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Robo Bee courier isn't bought — you fabricate it on a Create mechanical-crafting grid from andesite casings + a brass gear + a propeller; keeping production in the Create workshop is thematically right and adds depth to the logistics tier
- from: create_mobile_packages portable_stock_ticker | via: recipe (create:sequenced_assembly) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: the stock ticker is a convenience tool, not an endgame keystone; M-06 (sequenced-assembly) is for flagship/endgame items — applying it to a QoL handheld overweights the recipe; M-05 native-method gating for the Robo Bee is the right-sized depth
- from: create_mobile_packages bee_port / drone_port | via: recipe (numismatics sell listing via trade) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; also drone ports are infrastructure items, not trade goods — the economy link doesn't hold thematically

## create_ltab-3.9.2   [anchors: Create, survival (2)]
OK — connections sound (Create-themed worldgen + survival exploration; dual anchor is solid).
- from: create_ltab structure loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins contain a Numismatics coin cache (cog/spur tier — the "industrial wages" someone left behind), seeding the economy with world-find money alongside crafted coin; thematically a former workshop's strongbox
- from: create_ltab structure loot chests | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: Create-themed industrial ruins seeding Ars/Occultism reagents clashes — the mod's whole aesthetic is brass and steam, not arcane; would feel mis-loot; the economy loot-seed is the right route for this mod's vibe

== CHUNK COMPLETE ==
