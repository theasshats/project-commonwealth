# Phase 2 candidates — chunk-07

## lionfishapi   [anchors: support/library (1)]
- LEAVE — zero-content code library: registers no items, blocks, methods, or worldgen; pure animation/entity API dependency for L_Ender mods. Nothing to route.

## betterbiomereblend   [anchors: support/performance (1)]
- LEAVE — client-only render engine with no items, blocks, or methods; replaces the biome-color blend algorithm (OKLab 3D) for visual quality. Zero material surface to route.

## valarian_conquest   [anchors: survival (1)]
REWORK: OK — connections sound (single anchor only; no existing cross-system connections to audit).

- from: valarian_conquest faction gear (shields/armor/weapons) | via: recipe (tacz:gun_smith_table_crafting / crafting-table + Create-pressed sheets as inputs) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: armorsmithing a knight's pauldron at the faction armorsmith station costs Create sheet-metal — the medieval forge runs on the industrial spine, tying warfare to the production loop.
- from: valarian_conquest:*_citizenship / mercenary hire items | via: villager trade (M-21 provisional) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; mercenary hire is vanilla-trade emerald-style, not Numismatics. The citizenship/hire cost isn't a sellable good so M-09 doesn't fit cleanly either; forcing a coin tie feels arbitrary here — the hire loop doesn't produce a *good*, it produces labor. REJECT pending economy update review.
- from: valarian_conquest faction loot (shields, faction armor, banners — loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards pay coin for faction trophies — a knight's shield or faction banner cashed in at a bounty board turns combat victory into Numismatics currency, linking faction raiding to the player economy.
- from: valarian_conquest faction structures (keeps/outposts) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most fortified faction keep vaults contain a rare "commander's seal" boss-key drop that gates a complex Create/tech recipe (e.g. a MineColonies advanced building schematic or a sequenced-assembly component) — exploration of the faction world unlocks industrial depth.
- from: valarian_conquest:builder/armorsmith/barber_surgeon stations | via: recipe (M-05 native-method gating — gate station block itself on Create-compacted material) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: already covered by the first ACCEPT (faction gear gated on Create parts); adding station-block gating on top would double-gate the same path. One Create hook is enough for this mod; reject the station-block variant to avoid over-engineering.

## terrablender   [anchors: support/worldgen-library (1)]
- LEAVE — pure worldgen registration API (biome-region partitioning): no items, blocks, loot tables, or methods. Required dependency for biome mods; zero material surface.

## extradelight   [anchors: survival, Create (2)]
REWORK: OK — connections sound. The existing Create-mix inbound weave (create:mixing feeding ingredients to its stations) is coherent and appropriately priced. The farmersdelight:cooking/cutting inbounds are natural — extradelight is explicitly a FD extension. No arbitrary or mis-costed edges.

- from: extradelight feasts / high-effort dishes (baked alaska, apple cheesecake, feast blocks) | via: numismatics sell / M-09 luxury-good→coin | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an innkeeper buys feast platters for coin — putting in hours at the kitchen earns Numismatics currency, making food production a genuine economic route not just a survival buff. Feasts are multi-step (oven+vat+mortar chain), so mid-power is correct.
- from: extradelight coffee beans / garlic / citrus crops (c:crops/coffee, c:crops/garlic, c:crops/citrus) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create mill grinds raw coffee beans into ground coffee and garlic into garlic powder — the kitchen's staple ingredients come off the Create spine, making the bakery a downstream of the industrial loop rather than a parallel branch.
- from: extradelight:evaporator / vat fluid outputs (reduced syrups, brines, vinegars) | via: create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create mixes concentrated extradelight brines into chemical feedstocks or seasoning agents that other Create/TFMG processes accept — the industrial chemistry bench feeds the kitchen and vice versa. (Deepens the existing create:mixing inbound from one-way ingredient flow to a genuine two-way exchange.)
- from: extradelight:oven / dough_shaping chain (baked goods at scale) | via: minecolonies provisioning / colony food supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: redundant with the feast→coin ACCEPT above; both are "food→economy" and the feast version is stronger (feasts are the mod's flagship output, not a secondary chain). Two M-09 entries for the same mod in the same direction fragments rather than deepens.

## death-count-1.0   [anchors: support/QoL (1)]
- LEAVE — vanilla-scoreboard datapack with no items, blocks, or methods; tracks deaths in the tab list only. Zero material surface; scoreboard cosmetic with no systemic role.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
REWORK: OK — connections sound (single anchor only; no existing cross-system connections to audit).

- from: dungeons-and-taverns structure loot (taverns, towers, dungeons — loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards post contracts for items found in tavern dungeons and illager hideouts — exploring the structure world and cashing in finds at a bounty board feeds Numismatics coin into the player economy, turning adventure into currency.
- from: dungeons-and-taverns structure loot (deeper/endgame dungeon vaults) | via: loot-seed | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the deepest locked trial-chamber vaults seed a rare boss-key item (e.g. "ancient trial seal") that gates a high-tier Create sequenced-assembly recipe — exploration unlocks industrial depth, making ruins worth raiding for the tech-focused player.
- from: dungeons-and-taverns in-tavern cartographer trade | via: villager trade (M-21 provisional) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; this is vanilla emerald trading, not Numismatics-native. The cartographer→map loop is self-contained vanilla and adding a Numismatics overlay would require authoring a new trade definition that feels forced. Reject pending economy update review.
- from: dungeons-and-taverns magic loot items (spell scrolls, arcane drops if present in loot tables) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the mod's loot is vanilla-styled (weapons, food, emeralds, trial keys per dossier); no confirmed arcane-drop surface. Seeding magic reagents into generic dungeon loot would be a thematic mismatch with the vanilla-plus aesthetic and not grounded in actual loot table data. Reject on theme + no confirmed surface.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — data-driven guidebook system with no items that enter the material loop (the books themselves are authored content, not processable goods). Its presence is entirely as a documentation dependency; zero weave surface.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure config-API code library: no items, blocks, methods, or worldgen. Zero weave surface.

## lithium   [anchors: support/performance (1)]
- LEAVE — server-tick optimization mod: no items, blocks, methods, or worldgen. Zero weave surface.

## imfast   [anchors: support/QoL (1)]
- LEAVE — movement-validation behavior patch (raises the vanilla "moved too quickly" speed cap for vehicles/ships): no items, blocks, or methods. Functionally enables aeronautics but is not itself a wireable resource. Zero weave surface.

## s_a_b   [anchors: Create, aeronautics (2)]
REWORK: OK — connections sound. The Create-compacting/mixing inbound weaves that build the steel blocks are coherent and correctly priced (steel is a mid-tier Create output; armored hull blocks are a natural consumer). The aeronautics anchor is thematically exact (blast-resistant plating for ships and forts). No arbitrary or mis-costed edges.

- from: s_a_b:hardsteelblock / doublesteelblock (highest-tier armored plating) | via: recipe (aeronautics airframe/hull construction) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: building the hull of a combat-ready airship requires hard steel plate — the blast-resistant blocks that survive cannon fire become structural requirements for warships, making the Create steel supply chain load-bearing for the aeronautics pillar.
- from: s_a_b colored steel plate variants (decorative set — 16 colors) | via: create:crushing (lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mismatched color run of armor plating goes back into the crusher for scrap steel and an XP nugget — a small loss recovery loop that keeps the Create steel circuit alive even after a recolor decision.
- from: s_a_b:lightsteelblock / steelblock (base tier) | via: recipe (survival fortification — building cost anchor) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — "armored block used to fortify a base" is a use, not a systemic loop connection. The danger/pressure anchor requires a mechanic that *feeds the loop* (e.g. survival pressure demanding the block), not just a descriptive use. Reject for no-motif; not lost — a human may find a cleaner framing.

## fluid   [anchors: Create, aeronautics (2)]
REWORK: OK — connections sound. The create:compacting/deploying/mechanical_crafting/mixing inbound weaves (building the pump/interface/tap from Create parts) are appropriate cost-depth for mid-tier infra items. Aeronautics anchor is correct: the centrifugal pump and smart interfaces are exactly what improve fluid routing on a moving ship. No arbitrary or mis-costed edges.

- from: fluid:centrifugal_pump / fluid:smart_fluid_interface | via: recipe (aeronautics fuel/fluid delivery on-ship) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: fitting a combat airship with a centrifugal pump replaces pump-spam with a single high-flow unit feeding the engine/cannon coolant loop — the pump is structural infrastructure for any serious ship build, linking fluid logistics directly into the airframe supply line.
- from: fluid:redstone_valve / fluid:redstone_triple_valve | via: recipe (Create contraption control — deployer/mechanical_crafting gate) | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the valves are already made THROUGH create:deploying per the dossier inbound weaves — the Create connection is already established. Adding a second M-20 link would be redundant. Reject as already covered.
- from: fluid:copper_tap + fluid:aqueduct (open-flow decor) | via: create:crushing (recycle, M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the copper tap and aqueduct are functional tools, not deco scrap — M-04 is the "metal deco crushed back to raw" motif for decorative overruns. Crushing working infrastructure back to ingots doesn't fit M-04's intent. Reject on motif-mismatch.

## cbc_at   [anchors: Create, aeronautics (2)]
REWORK: OK — connections sound. The create:cutting inbound and CBC munition-assembly chain are the natural recipe path for Create-machined artillery; aeronautics is the deployment platform. No arbitrary edges. The dossier correctly flags M-05/M-06 deepening as optional rather than a missing weave.

- from: cbc_at heavy autocannon / rocket pod (endgame weaponry) | via: recipe (M-05/M-06 boss-key or sequenced-assembly gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: assembling the most powerful rocket pod or heavy autocannon barrel requires a boss-drop component (e.g. a "tempered iron core" from a Cataclysm boss) — the high-tier combat escalation is locked behind the danger-pressure loop, making war materiel dependent on exploration and boss hunting.
- from: cbc_at:ap_rocket_item / cbc_at:apds_item (armor-piercing munitions) | via: numismatics sell (M-09 luxury good→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a military broker buys armor-piercing cartridges for coin — producing advanced munitions in bulk funds the player economy, turning weapons manufacture into an economic specialization. Ammo is consumable, so the demand is renewable.
- from: cbc_at barrel attachments (silencer, rifled barrel, muzzle brake — mid-tier components) | via: create:deploying / item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: CBC_AT barrel attachments are assembled through CBC's own methods (autocannon assembly chain) per the dossier — they're already Create-spine-native (made via create:cutting). Adding a separate M-20 apply step would be a redundant second Create connection for the same production path. Reject.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- LEAVE — datapack-based builder utility tools (hammer/chisel/trowel/magnet/measure): no machine methods, no processable material output. Gating these build-assist tools behind Create would over-engineer consumable QoL items. Zero systemic weave surface; sanctioned support role.

## tacz   [anchors: support/flavor (1)]
REWORK: OK — connections sound (single anchor only; no existing cross-system connections to audit). The dossier correctly identifies this as a 1-anchor mod needing two strong weave candidates.

- from: tacz gun_smith_table_crafting inputs (iron, steel, logs → guns/ammo) | via: tacz:gun_smith_table_crafting gated on create:pressed_steel_sheet / create:mechanical_crafting (M-05) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the Gun Smith Table requires Create-pressed steel sheets and machined receivers — firearms ride the Create production spine, so ore scarcity throttles weapon supply and a Create specialist is the gunsmith's supplier.
- from: tacz:ammo / tacz:ammo_box (consumable munitions) | via: numismatics sell (M-09 luxury good→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a quartermaster or dealer buys ammo crates for coin — bulk ammunition manufacture is a recurring revenue source in the Numismatics economy, making a dedicated gunsmith/arms-dealer a viable player specialization. Ammo is renewable demand (consumed in combat), which keeps the coin sink active.
- from: tacz:modern_kinetic_gun (high-tier firearms) | via: tacz:gun_smith_table_crafting + M-06 sequenced-assembly chain | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: layering M-06 on top of the accepted M-05 gate for the same mod would double-stack Create connections. M-05 (native-method gating on Create parts) is sufficient at mid tier; reserve M-06 only if the highest-tier guns need a multi-stage assembly story in a later authoring pass. Reject as premature given M-05 already covers it.
- from: tacz drop pools (loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: tacz loot is gun/ammo loot-table drops from mobs/chests — seeding bounty-payable drops here makes some sense but overlaps the accepted M-09 munitions-sale hook; two separate economy routes for the same items would fragment the signal. The M-09 sell route is cleaner and doesn't require loot-table edits. Reject as redundant.

## citadel   [anchors: support/library (1)]
- LEAVE — animation/spawn-handling library for sbom_xela's mods (Alex's Mobs etc.): no player-relevant items (dev-debug items only), no recipe methods, no worldgen. Required dependency with zero weave surface.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — leaf-decay tick optimization: no items, blocks, methods, or worldgen. Zero weave surface.

## smokeleafindustries   [anchors: survival (1)]
REWORK: OK — connections sound (single anchor only; no existing cross-system connections to audit). The dossier correctly flags this as a one-pillar island and identifies strong bridging candidates.

- from: smokeleafindustries refined extracts / gummies (end-of-chain consumables — high-effort, multi-step) | via: numismatics sell (M-09 luxury good→coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the dealer/stoner villager trades already prove a sell-loop exists; migrating that to Numismatics coin makes the strain farm a legitimate economic node — a player specializing in the grow-extract-sell chain earns currency the rest of the server can't produce themselves, since the smokeleaf machines are unique.
- from: smokeleafindustries:generator (burns any FE-eligible input) | via: createaddition:liquid_burning / FE↔kinetic bridge | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf generator powers its own machine cluster — wiring it to Create Addition's FE↔kinetic converter lets Create rotational energy power the extractor/liquifier chain, weaving the hemp tech farm into the Create energy spine instead of leaving it as an isolated FE island. (M-17: "electric/FE charging bridge" — only when it makes sense; this is the mod's own power system, so it fits.)
- from: smokeleafindustries raw hemp bud / trim | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: feeding raw hemp trim through the Create mill pre-processes it into a finer extract input, making the Create spine a first-stage processor for the smokeleaf chain — one step in Create, then the rest in the smokeleaf machines, routing the two tech graphs through each other.
- from: smokeleafindustries:mutator (seed crossbreeding machine) | via: ars_nouveau:imbuement (exotic strain seeds imbuement-boosted for rare cross) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: theme clash — imbueing drug-plant seeds in an arcane altar is tonally inconsistent with Ars Nouveau's high-fantasy magic aesthetic. The mutator is industrial sci-fi selective breeding; an arcane infusion is narrative sorcery. The two tones fight. Reject on theme.
- from: smokeleafindustries effect-granting consumables (buds/joints/gummies granting status effects) | via: farmersdelight:cooking or extradelight:vat (culinary processing parallel) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: both smokeleafindustries and extradelight occupy the food/consumable production space; routing raw smokeleaf material through extradelight:vat or farmersdelight:cooking would be a neat processing link but does NOT add a new system anchor (both are survival/food). Reject as same-pillar deepening, not a cross-system weave — useful as a recipe texture note but doesn't count toward the 2-anchor goal.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin-based configuration engine (TOML serialization + GUI + server-client sync): no items, blocks, methods, or worldgen. Required dependency for dependent mods; zero weave surface.

== CHUNK COMPLETE ==


