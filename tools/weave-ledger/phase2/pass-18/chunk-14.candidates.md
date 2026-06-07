# Phase 2 candidates — chunk-14

## lithostitched__tectonic-3.0   [anchors: support/worldgen (1)]

LEAVE — pure worldgen datapack (density-function terrain overhaul); registers zero items, blocks, loot, or recipe-types. No material surface to route through any method. Thematic adjacency to the "scarce, regional ores" foundation (bigger continents spread resources apart) is real but cannot be expressed as a recipe-graph edge — the terrain shapes are the connection, and that's already doing its job.

## kambrik   [anchors: library/API (1)]

LEAVE — Kotlin dev-framework library; no items, blocks, loot, or recipe-types. Pure code-plumbing for dependent Kotlin-based mods. Genuine zero-surface library.

## zombiemoon   [anchors: survival (1)]

Power-read: Mutants and Zombies adds 7 harder undead mob variants (Brute, Crawler, Spitter, Mutant Brute, etc.) as pure combat-difficulty content. The jar confirms 0 blocks / 0 items and loot=no — the mobs drop only vanilla rotten-flesh-style loot. No registered recipe-types and no unique reagent.

Candidate 1 (M-02 mob-drop reagent sink):
- from: zombiemoon vanilla-drop rotten flesh (no unique drop) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: clash
- verdict: REJECT | reason: The mod's dossier is explicit: "no unique reagent to weave" — no distinctive drop exists to give a second identity. Rotten flesh is a vanilla commodity already handled elsewhere; assigning a special spirit_fire route to zombiemoon's mobs would be purely arbitrary (which mob variant dropped this "special" flesh?) and the mod's horror-survival vibe has no magical adjacency. Forced edge.

Candidate 2 (M-14 bounty→economy):
- from: zombiemoon mob kills | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: A bounty board entry for killing Brutes/Crawlers/Spitters would be coherent thematically (harder mob = higher bounty reward), but bounty boards are a pack-wide mechanic applied across all hostile mobs — the connection here is not *specific* to zombiemoon and adds nothing that the generic bounty system doesn't already provide for any mob. Not a 2nd anchor for *this mod*; it's a global mechanic that happens to include it. No unique purchase.

Summary: No viable 2nd anchor exists. The mod is a pure combat-difficulty (survival-pressure) layer with no items/drops to route. LEAVE at 1 anchor.

## stylecolonies   [anchors: support/decoration palette — MineColonies styles (1)]

Power-read: stylecolonies ships only MineColonies blueprint packs (Frontier, Steampunk, High Magic, Antique, FairyTale, Underwater styles). Zero items, blocks, loot, or recipe-types. The Steampunk style references Create blocks at build time, which is an implicit tie to the Create production spine.

Candidate 1 (Create production tie — Steampunk style):
- from: stylecolonies:steampunk blueprints (require Create blocks as build materials) | via: MineColonies colony construction (block consumption, not a recipe-type) | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: The implicit Create-block consumption at colony-build time is a real gameplay connection (a colony player building Steampunk structures needs Create blocks, creating cross-player demand), but it composes no motif from M-01..M-24 — none of the motifs describe "blueprint-driven block consumption." This would need a new motif (Gate-0). The connection is real but uncodifiable with current vocabulary. Logging as no-motif reject for Gate-0 review.

Candidate 2 (economy anchor via MineColonies production route):
- from: stylecolonies style variety | via: player preference driving colony specialization | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Purely thematic / player-behavioral — style choice has no recipe-graph expression. No motif fits.

Summary: Zero recipe surface. The Steampunk→Create-block edge is real at build-time but has no motif. LEAVE at 1 anchor; flag the Steampunk-blueprint→Create-block consumption for Gate-0 motif consideration.

## kubejs_create   [anchors: support/modpack tooling (1)]

LEAVE — scripting bridge (KubeJS addon exposing Create's recipe-types to JS); no blocks, items, loot, or recipe-types of its own. It is the *tool* that authors the weaves other mods use — it cannot be a weave target itself. Genuine zero-surface support tool.

## resourcefulconfig   [anchors: support/config library (1)]

LEAVE — pure config framework library (cross-platform config definitions + in-game options screen). Zero items, blocks, loot, or recipe-types. Genuine zero-surface library.

## bookshelf   [anchors: support/library (1)]

LEAVE — broad modder utility library (Darkhax; codecs, registration, event scaffolding). Zero items, blocks, loot, or recipe-types. Genuine zero-surface library; the datapack "durability-damaging recipe" hook is developer tooling, not a player-facing connective method.

## controlling   [anchors: support/client UI (1)]

LEAVE — client-only keybindings-menu search/filter UI. Zero items, blocks, loot, or recipe-types. Genuine zero-surface client QoL utility.

## t_and_t   [anchors: survival (1)]

Power-read: Towns and Towers is a pure worldgen / structure mod — 50+ structures including 16 biome-specific village variants, conquerable outpost forts/towers, and ocean sail-ships. Jar: 0 blocks, 0 items; loot=yes (structures carry loot chests). The loot=yes flag means it has a real content surface: its chest loot tables and its village villager trades are edit-points for seeding pack-relevant goods.

Candidate 1 — loot-seed: coin/economy goods in structure chests (M-08/M-09/M-14):
- from: t_and_t structure loot tables (chests in forts, ships, outposts) | via: loot-seed (datapack edit adding numismatics coins + pack trade goods) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Clearing a conquerable pillager fort and finding the captain's chest stocked with coin feels immediately right — the structure now feeds the Numismatics economy loop instead of dead-ending in vanilla loot.

Candidate 2 — loot-seed: magic reagent drops in structures (M-02 / M-10):
- from: t_and_t dungeon/ship loot tables | via: loot-seed (seed ars_nouveau:source_gem or irons_spellbooks:arcane_essence into rare chests) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Exploring a riverside jungle outpost and finding an arcane shard tucked in the captain's chest; discovery rewards adventurers with a magic on-ramp, linking exploration (survival pressure) to the magic production route.

Candidate 3 — villager trade → economy (M-21 provisional):
- from: t_and_t biome village variants → their villager professions | via: villager trade → numismatics payout (M-21) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is explicitly provisional (maintainer leans no); surface only for review. Additionally the connection is not specific to Towns & Towers — it applies to any village mod. No unique purchase for t_and_t specifically.

Candidate 4 — loot-seed: boss-key progression items in hard structures (M-15):
- from: t_and_t conquerable fort / ship loot | via: loot-seed (seed a boss-key component into hard structures as an alternative find path) | to: create/magic | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: Boss-key drops (M-15) are reserved for actual boss encounters; seeding them into static loot tables breaks the "fight a boss to unlock" gating intent. The fort's chest is the wrong tier for a boss-locked gate item — it's repeatable world-gen loot, not a single-encounter drop. Scale mismatch.

REWORK check: t_and_t is at 1 anchor (survival). The dossier's own 2nd-anchor candidate (economy via villagers/Numismatics) is well-founded but written as "MED" without a specific delivery. The accepted loot-seed candidates above are the concrete delivery that makes the economy anchor real — loot-seed is the right mechanism.
OK — existing connection (survival) is sound. New economy anchor via loot-seed is the concrete delivery.

## kobolds   [anchors: economy, survival (2)]

Power-read: Kobolds adds an underground civilization of lizard-folk with emerald-based trades, kobold skull drops, gold-tool trading with Captains, and the Prospector enchantment from Enchanters. Already at 2 anchors (economy + survival). Jar: 4 blocks, 23 items; loot=yes; kobold skulls, weapons, banner patterns, and spawn eggs present.

Candidate 1 — magic via M-02: kobold_skull as spirit_fire reagent:
- from: kobolds:kobold_skull (mob-drop skull) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A kobold skull is ritually charged in spirit fire — the skulls of these underground tunnel-folk carry latent cave-magic that Occultism can transmute into a spirit essence; the lore adjacency is coherent (dungeon-dwelling creature with an arcane enchanter variant makes skull-as-reagent feel earned).

Candidate 2 — magic via M-11: kobold enchanter loot (potions) into Ars ritual:
- from: kobolds enchanter trades (potions) | via: ars_nouveau:imbuement or occultism:ritual (potion as catalyst input) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Potions are a vanilla commodity with many sources; using "kobold enchanter gave me this potion" as a magic link is not specific to kobolds and would be arbitrary. The skull route (Candidate 1) is the concrete, kobold-specific hook.

Candidate 3 — economy tie check (existing):
- The emerald trade economy connection is already well-served: kobold trading runs on vanilla emeralds, which are a natural Numismatics-adjacent commodity (emeralds are often used alongside coins as pack currency).

REWORK: The existing 2-anchor assignment is sound (economy via emerald trades + survival as underground threat/structure). No rework needed.
OK — connections sound. Candidate 1 (kobold skull → spirit_fire, M-02) adds a clean magic 3rd touch.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]

Power-read: Pure compat bridge — makes furniture chairs from Let's Do, Another Furniture, Quark, Handcrafted, and Refurbished sittable on Create contraptions and Aeronautics ships. Zero blocks, zero items, loot=no, no recipe-types. Genuine behavior-only glue.

No material surface exists to route through any method. The mod's aeronautics/support dual anchor already reflects its role correctly.

LEAVE — zero-content compat bridge; both anchors are correct and no recipe edge is possible.

## imfast   [anchors: support/QoL (1)]

LEAVE — server-side mixin removing vanilla movement-speed anti-cheat kicks; zero blocks, zero items, no recipe-types. Genuine zero-surface behavior patch. Its functional benefit (enabling fast vehicles) is felt through Aeronautics but there is no item or method to route.

## brazil_legends   [anchors: survival (1)]

Power-read: Brazilian-folklore mob mod with 5 distinct legendary creatures (Saci, Capelobo, Headless Mule, Cuca, and variants). Jar: 5 blocks, 47 items; 4 biome-modifiers; loot=yes. Key drops: `brazil_legends:capelobo_claw`, `brazil_legends:big_tongue`, `brazil_legends:amber_shard`, `brazil_legends:amber_pearl`, `brazil_legends:bottle_with_saci`. Items with c:tags: none (drops are untagged, so they're not absorbed into generic commodity pools — good for exclusive reagent candidates). Power tier: the Capelobo and Headless Mule are mid-tier boss-adjacent enemies (specific biome spawns, non-trivial combat); drops are mid-tier.

Candidate 1 — magic via M-02: capelobo_claw as occultism spirit_fire reagent:
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The clawed limb of a werewolf-cryptid creature burns in spirit fire to release a feral spirit essence — the folkloric-horror vibe of the Capelobo maps naturally onto Occultism's death-spirit aesthetic; a player says "of course the monster claw goes in the ritual."

Candidate 2 — magic via M-11: amber_shard transmutation into Ars source:
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Amber is fossilized tree resin carrying ancient natural magic — imbuement in an Ars Nouveau enchanting apparatus resonates with the amber's organic provenance; the shard becomes a mid-tier arcane concentrate rather than a dead-end drop.

Candidate 3 — economy via M-09: amber_pearl as luxury sell good:
- from: brazil_legends:amber_pearl (large amber orb, visually distinctive) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber_shard is already accepted as a magic reagent (Candidate 2); using the related amber_pearl as both a reagent substrate AND a coin sell item is reasonable in principle, but the pearl is the larger/rarer variant — if the shard becomes the reagent, the pearl should too (same material, bigger piece). The two forms should share one role to avoid fragmented ownership. Given Candidate 2 takes the amber family into magic, reserve the pearl for the same magic route (higher-grade version) rather than splitting into economy. REJECT to avoid double-spend across two roles for the same material family.

Candidate 4 — magic via M-02: big_tongue as ritual/potion ingredient (Occultism):
- from: brazil_legends:big_tongue | via: occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A giant severed tongue from a cryptid creature is a classic potion/ritual component — Occultism's spirit rituals consuming a monstrous body part is the kind of dark-folklore crossover that both mods' aesthetics share; the Cuca (witch-like creature) already bridges folklore and magic thematically.

Candidate 5 — economy via M-14: bounty for brazil_legends boss-mobs:
- from: brazil_legends:capelobo kill / headless_mule encounter | via: bountiful board → numismatics | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Regional folklore monsters fetch high bounties — a player with a bountiful bounty to kill a Capelobo has a concrete reason to venture into the correct biome, feeding the scarcity→pressure→economy loop (hard combat → coin reward); the creatures are rare enough that bounty completion feels like a genuine achievement.

Candidate 6 — Create via bottle_with_saci extraction:
- from: brazil_legends:bottle_with_saci | via: create:emptying (extract fluid/substance from bottle) | to: create | motif: M-12 | power: mid | tone: clash | verdict: REJECT | reason: The bottle_with_saci is a folklore mischief-spirit trapped in a bottle — treating it as a Create fluid-emptying feedstock is a tone mismatch (mechanizing a trickster spirit into an industrial process feels wrong) and the extract would have no defined downstream use. Forced industrial edge on organic folklore content.

REWORK check: At 1 anchor (survival). The dossier flagged M-02 and M-09 as candidates. Candidates 1, 2, 4, 5 are accepted — magic (M-02×2, M-11×1) and economy (M-14) give brazil_legends a solid 3-system reach (survival + magic + economy). No rework of existing connections needed.

## dndesires   [anchors: create (1)]

Power-read: Create: Dreams & Desires is a deep Create addon. 84 blocks, 119 items; loot=yes; 5 registered recipe-types (dragon_breathing, freezing, hydraulic_compacting, sanding, seething); already consumes create:emptying, filling, item_application, mechanical_crafting, mixing. The mod's fan-processing sails are a *method sink* — any foreign material can receive a dndesires sanding/freezing/seething recipe. The hydraulic press makes rubber from sap+water. Milkshakes are food outputs.

Candidate 1 — survival via M-12: route crops/food through freezing/seething into processed goods:
- from: dndesires:freezing_sail / dndesires:seething_sail (fan processing) accepting crop intermediates | via: dndesires:freezing (e.g. raw meat → frozen meat → longer preservation) / dndesires:seething (heat processing of ingredients) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Create belt feeds harvested crops into the seething fan (hot-air curing) or freezing fan (cold preservation) — the industrial kitchen feels natural as a Create-to-survival food bridge; D&D's own milkshake items already confirm food output intent.

Candidate 2 — survival via milkshakes as seasonal foods:
- from: dndesires milkshake items (chocolate_milkshake, glowberry_milkshake) | via: Serene Seasons seasonal-ingredient gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A glowberry milkshake available only when glowberries are in season (or require a seasonal ingredient as the cream component) — the indulgent treat follows the seasonal food pressure loop and gives the milkshake a scarcity rhythm rather than being perpetually available.

Candidate 3 — economy via M-08: rubber as processed-scarcity trade good:
- from: dndesires:rubber (from dndesires:hydraulic_compacting of rubber_sap + water) | via: numismatics sell / trade | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Hydraulically-pressed rubber is a specialty industrial material — getting enough sap requires a running Create sap-tapper setup, making rubber a genuine scarcity-gated commodity that players can sell to colony traders or bountiful markets; the processed-scarcity→coin loop is exactly what the design calls for.

Candidate 4 — aeronautics via cardboard packaging as logistics material:
- from: dndesires:cardboard_package_* (logistics packaging) | via: Create mobile packages / aeronautics cargo system | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: The cardboard packaging is a logistics material but M-13 is specifically fuel→propulsion. The packaging would need its own motif (something like "cargo container as logistics unit") — no current motif covers it. Additionally "cardboard packaging on an airship" is not yet a designed integration (no aeronautics cargo recipe exists). REJECT, no-motif for the packaging→aeronautics edge; the M-08 rubber route is the cleaner economy anchor.

Candidate 5 — aeronautics via bore block for mining/drilling ships:
- from: dndesires:bore_block / drill components | via: Create Aeronautics drill-contraption integration | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: A mining airship mounting D&D bore blocks for bulk resource extraction — the bore block as a drivetrain/mechanical component makes the ship a specialized extraction vehicle, exactly the kind of progression milestone the aeronautics pillar needs; the bore block is endgame-scale, so deep recipe integration is appropriate.

REWORK: Existing 1 anchor (Create) is correct but one is the floor — accepted Candidates 1, 2, 3, 5 raise it to Create + survival + economy + aeronautics (4 systems). The dossier already flagged these directions; delivery is now specified.
OK — existing Create anchor is sound. No rework needed; new links confirmed.

## bits_n_bobs   [anchors: create, survival (2)]

Power-read: Create: Bits 'n' Bobs is a Create aesthetic/mechanical expansion. 123 blocks, 85 items; loot=yes; no registered recipe-types of its own, but its items are MADE-BY create:item_application + create:splashing (already inbound-woven). Chain drives, chain pulley, nixie boards, brass lamps, stone-tile palettes, and chairs. Already at 2-anchor goal (Create + survival/deco).

Candidate 1 — M-04: Create recycles deco tiles via create:crushing:
- from: bits_n_bobs:andesite_tiles / calcite_tiles / deepslate_tiles / crimsite_tiles (and other stone-tile lines) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tearing down a bits_n_bobs tiled wall and routing the blocks through a crusher returns crushed-stone/gravel + an experience nugget — the deco→Create recycling loop (already established for other deco mods) applies cleanly here; the tiles are just cut stone and it would feel weird if they couldn't be crushed back.

Candidate 2 — M-24: chain_pulley/chain_rope as aeronautics drivetrain components:
- from: bits_n_bobs:chain_pulley + bits_n_bobs:chain_rope (kinetic mechanical parts) | via: aeronautics construction recipe (chain components as drivetrain/control elements) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: An Aeronautics pulley-driven cargo crane or winch on a ship requires actual chain-pulley assemblies — bits_n_bobs chain hardware becomes a required build ingredient for ship-based lifting/crane contraptions, connecting the Create mechanical-parts ecosystem to the aeronautics build roster.

Candidate 3 — economy: nixie boards as display components in trade infrastructure:
- from: bits_n_bobs:*_nixie_board (large display boards) | via: no existing method (would need a config/placement rule, not a recipe) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: No motif covers "display block serves as trade-floor signage." Thematically coherent (a market uses nixie price boards) but has no recipe-graph expression and no motif. No-motif reject.

REWORK check: Already at 2 anchors (Create + survival/deco). Candidates 1 and 2 both accepted; M-04 tightens the Create internal loop and M-24 adds aeronautics. The "survival" anchor is really a deco/build anchor — it's sound as written.
OK — connections sound. Candidates 1 (M-04 tile recycling) and 2 (M-24 chain-pulley drivetrain) add value above the floor.

## wits   [anchors: support (1)]

LEAVE — debug/identification command mod (prints structure registry names at your position); zero items, blocks, loot, or recipe-types. Genuine zero-surface utility.

## create_central_kitchen   [anchors: create, survival (2)]

Power-read: Create Central Kitchen is a pure integration/bridge mod — it implements Packager/Mechanical-Arm support for FarmersDelight/ExtraDelight cooking blocks and adds sequenced-assembly food recipes (sandwiches, burgers, pies). Jar: 0 blocks, 0 items; loot=no; no registered recipe-types of its own. Already at 2 anchors (Create + survival/food). The mod's value is exactly its bridge role — it already IS the weave between Create and the survival/food pillar.

Candidate 1 — economy via M-09: automated feast as luxury sell good:
- from: create_central_kitchen sequenced-assembly outputs (sandwiches, pies, feasts) | via: numismatics sell pricing | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A fully automated sandwich line produces surplus product that can be sold at a colony market or via bountiful — the industrial food surplus feeding the economy is the exact scarcity→production→economy loop the pack is designed around; it's coherent and expected.

Candidate 2 — economy via M-16: season-gated automated recipe:
- from: create_central_kitchen seasonal pie recipe (e.g. pumpkin pie only in autumn via a seasonal crop gate) | via: Serene Seasons crop availability | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: The automated pumpkin-pie line sits idle outside of autumn because the Create harvest system can only pull seasonal pumpkins in autumn — the kitchen machine already installed forces the player to plan their food supply around seasons; survival pressure feeds Create production.

Candidate 3 — aeronautics: galley/kitchen on a ship:
- from: create_central_kitchen Blaze Stove + Packager automation | via: aeronautics ship build (ship has a galley bay) | to: aeronautics | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: Thematically very appealing (a flying airship with an automated galley), but there is no motif for "ship interior room layout." The connection is flavor, not a recipe-graph edge; no delivery mechanism exists in the current motif vocabulary. No-motif reject.

REWORK check: At 2 anchors (Create + survival/food). Both are sound — the mod IS the Create↔food bridge. Candidates 1 and 2 add economy and reinforce survival respectively.
OK — connections sound. New economy anchor (M-09) via automated feast output is the concrete upgrade path.

## snowyspirit   [anchors: survival (1)]

Power-read: Winter/Christmas mod by the Supplementaries family. 46 blocks, 65 items; 2 biome-modifiers; loot=yes; 16 c:tags (crops/ginger, seeds/ginger, foods/candy, foods/cookie, foods/vegetable). The ginger crop has c:tags (c:crops/ginger, c:seeds/ginger) making it a join-key for method-routing. Sled is mid-tier traversal. Gingerbread is an everyday food/deco material. Eggnog is a food/drink item.

Candidate 1 — M-12: ginger crop → Create milling into spice powder:
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ginger root passes through a Create millstone to yield ground ginger spice — a light, coherent one-step processing that makes ginger part of the spice/ingredient supply chain; the milling output could then feed into baked goods recipes or be sold as a spice commodity.

Candidate 2 — M-16: ginger as seasonal ingredient (winter only):
- from: snowyspirit:ginger (wild in sparse jungle; farmable but seasonally appropriate) | via: Serene Seasons seasonal-availability gate | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ginger is a summer/warm-season crop — if Serene Seasons restricts outdoor ginger growth to warmer months, the winter holiday food recipes (gingerbread cookies, eggnog) become scarce in the exact season they're most associated with, which creates a fun scarcity-pressure moment: players need to stockpile ginger before winter to make holiday treats.

Candidate 3 — M-09: gingerbread / candy cane as seasonal luxury sell:
- from: snowyspirit:gingerbread_cookie / snowyspirit:candy_cane | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Seasonal treats sell for a premium when they're out of season — gingerbread cookies are a winter luxury that the economy can price as a limited-availability commodity; selling holiday sweets to the colony market is exactly the "luxury good → coin" loop.

Candidate 4 — aeronautics: sled as winter traversal (not aeronautics):
- from: snowyspirit:sled | via: (none — sled is terrain-based, not ship-based) | to: aeronautics | motif: (none) | power: everyday | tone: clash | verdict: REJECT | reason: The sled is snow terrain traversal, not an aerial vehicle. While both are "vehicles," they use entirely different mechanics — the sled has no relation to Aeronautics ship-building or propulsion. Tone clash between cozy-holiday sled and industrial airship; forced edge with no recipe expression.

Candidate 5 — magic via M-22: eggnog or candy as lunar-event treat:
- from: snowyspirit:eggnog | via: Serene Seasons / Enhanced Celestials lunar event | to: magic | motif: M-22 | power: everyday | tone: ok | verdict: REJECT | reason: Eggnog has no magical resonance — it's a dairy/alcohol drink, not a ritual component. Applying a lunar-event gate to eggnog would be arbitrary (why does eggnog care about the moon?) with no folkloric or mechanical justification. Forced magical edge on mundane holiday food.

REWORK check: At 1 anchor (survival). Candidates 1, 2, 3 accepted — gives survival + create + economy (3 touches). The dossier's own M-12 and M-09 candidates are confirmed; M-16 (seasonal ginger) is the strongest new link.
OK — existing survival anchor is sound. Three new links proposed.

## create   [anchors: create (1)]

Power-read: Create is the pack's tech spine and universal method library. 643 blocks, 775 items; 63 c:tags; loot=yes; 17 registered recipe-types (the full list that every other mod weaves through). The dossier explicitly states: "Leave; do not author edges that consume Create itself — it IS the hub."

The briefing confirms: Create is the method library; it cannot be a weave *target* in the normal sense — it already connects to everything by being the hub. The 2nd-anchor question doesn't apply here.

Candidate 1 — any edge *consuming* Create as a foreign input:
- from: create as weave recipient | via: (hypothetical: any method consuming a Create output as a foreign input) | to: any | motif: n/a | power: n/a | tone: ok | verdict: REJECT | reason: Create is not a weave target — it's the hub. Proposing edges that "weave Create into another system" inverts the design: Create IS the production spine and every other mod weaves INTO it. The dossier's design intent is explicit ("do not author edges that consume Create itself"). The pack's recipe graph should flow TO Create, not away from it as if it were a raw material. Any apparent "Create needs X from Y" framing should instead be read as "Y gets a Create production anchor."

LEAVE — Create is the hub/spine; it anchors itself. The 1-anchor designation is intentional — Create is pillar 1 and doesn't need a 2nd pillar because it provides the methods all 2nd pillars ride through.

## notenoughanimations   [anchors: support/client visual (1)]

LEAVE — pure client-side procedural animation enhancer; zero blocks, items, loot, or recipe-types. Genuine zero-surface client cosmetic mod. No gameplay content to route.

== CHUNK COMPLETE ==
