# Phase 2 candidates — chunk-05

## domum_ornamentum   [anchors: decoration palette / MineColonies support (1)]

Power-read: The Architect's Cutter is a combinatorial "fancy stonecutter" — everyday tool, not endgame. Its join surface is wide (accepts any full block as input), but its outputs are purely cosmetic framed/ornamental blocks. The dossier flags it as a MineColonies support dependency; no foreign method inbound.

Method-pull candidates:
- Feeding Create-produced decorative stone (e.g. `create:polished_deepslate`, andesite-based cosmetic blocks, Galosphere-palette blocks) into the Architect's Cutter to get framed/shingled ornamental variants → a light palette bridge from the Create production side to the decoration/colony side. Tone: coherent (players building in the Steampunk colony style would naturally want Create-tinted stone frames). Motif: M-04 (Create recycles deco — deco block ↔ Create). The cutter is not a Create machine, but M-04 covers the Create↔block/deco pillar broadly; routing through the Architect's Cutter with Create-made stone as input fits the spirit (Create-produced stone → ornamental block). Power: everyday. Depth: one step (feed stone into cutter). The REWORK note: the dossier frames this as "thematic palette-bridge, not a Create-machine routing" and suggests only "opportunistic" weave — that framing undersells it. The cutter *consuming* Create-produced stone blocks (not vanilla stone) as its primary material is a real, player-visible link because those blocks must be produced on a Create machine first before they go into the cutter. This is a light but coherent 2nd-anchor.

- from: Create-produced stone (andesite/processed stone/galosphere palette blocks) | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: run your Create-made stone through the Architect's Cutter to get framed walls and shingles — your colony looks like it was actually built with the machines that made the blocks
- from: domum_ornamentum framed/ornamental blocks (structural output) | via: numismatics trade / MineColonies supply request | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: pure deco blocks as coin-priced trade goods is too thin — colony builders consume them, they don't trade them; the economy link would be contrived and adds no loop pressure

REWORK: dossier calls this "weave only opportunistically" — that reads as a warning to not force it, which is right, but the Create-stone-into-cutter link is coherent enough to ACCEPT at the everyday level. No existing connections to flag as mis-costed.

---

## packetfixer   [anchors: support (1)]

Zero blocks, zero items, zero loot, no recipes. Pure network fix mod.

- LEAVE — genuine zero-surface infrastructure mod (network packet-size fix; no items, no methods, no material surface to route)

---

## gnkinetics   [anchors: Create (1)]

Power-read: All 33 blocks are kinetic mechanism parts (gears, cranks, a creative motor). Crafted entirely from standard Create stock (andesite/brass). No foreign feedstock, no loot. Method-pull: its outputs are Create-native mechanical parts. The dossier correctly identifies it as a Create-spine deepener with no thematic hook into magic/economy/survival.

- from: gnkinetics:planetary_gear / gnkinetics:worm_gear (high-ratio gear components) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: planetary and worm gears are exactly the variable-ratio drive a propeller assembly needs — use GnK's specialized gearwork in the Aeronautics drivetrain/control recipes so your airship's transmission is more than a basic cog
- from: gnkinetics:industrial_gear / gnkinetics:large_industrial_gear | via: create:sequenced_assembly (Aeronautics engine component chain) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: industrial-grade gearsets require a sequenced assembly step before they seat in an engine block — the kinetics shop feeds the shipyard
- from: gnkinetics:creative_gear_motor | via: gating note | to: create | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: creative-tier item, no-motif — the creative motor has no real progression role; gating or routing it through another method would be fabricated depth

REWORK: dossier says "leave — would be forced" for a 2nd anchor. The M-24 aeronautics link is coherent and not forced — GnK's specialized gears (planetary, worm, industrial) are mechanically the right parts for drivetrain/propulsion recipes. The plain Create-cogwheel is already used everywhere in Aeronautics; naming a specific high-ratio gear is a natural escalation for mid-tier ships. REWORK verdict: the leave guidance was correct for magic/survival/economy, but the aeronautics arm is a genuine fit.

---

## sereneseasons   [anchors: survival (1)]

Power-read: Season clock, crop-fertility penalty, season_sensor (redstone), greenhouse glass, calendars. The season_sensor is a redstone emitter — directly readable by Create's logic/contraptions. The dossier lists two 2nd-anchor candidates.

- from: sereneseasons:season_sensor (redstone signal, season-indexed) | via: Create redstone reader → gearshift/contraption automation | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: wire the season sensor into a Create farm contraption — the harvester switches crop lines when winter arrives, the greenhouse shutters open automatically in spring; seasonal automation is a Create farm milestone
- from: seasonal-scarcity crops (out-of-season produce) | via: numismatics sell order / bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: out-of-season tomatoes in winter fetch 3× the coin of in-season ones — seasonal scarcity turns the farm's surplus calendar into a trading window, no forced arbitrage
- from: sereneseasons:greenhouse_glass | via: create:mechanical_crafting or sequenced_assembly | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: greenhouse glass is already a craftable item; gating it behind Create mechanical crafting is a cost-add with no loop-advancement — it doesn't route production output forward; M-16 (sensor automation) is the richer link and already accepted; adding a second Create weave here is redundant depth

REWORK: dossier candidate for M-05 (season_sensor → Create gating) is actually closer to M-16 usage (the sensor *drives* Create automation); the M-05 label on the dossier is slightly imprecise. The M-09 economy candidate is correctly flagged MED — accept it as a config/trade-list addition rather than a recipe, noting the player-run-currency caveat. OK — connections otherwise sound once the M-16 link is confirmed.

---

## samurai_dynasty   [anchors: survival (1)]

Power-read: 14 c:tags including `c:ingots/steel`, `c:gems/jade`, ore variants (jade/ruby/onyx/aquamarine/silver), Yokai mob drops, 150 items. Ore-doubling and mob-reagent links are explicit in the dossier.

- from: samurai_dynasty jade/ruby/onyx/aquamarine ores | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: feed Samurai Dynasty ores through a Create Crushing Wheel for ore-doubling — the regional gem sources join the tech spine and reward mining in the right biomes
- from: samurai_dynasty:akaname_tongue / Yokai mob drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are spirits — it's obvious that burning an Akaname's tongue in spirit fire yields an occult essence; the folklore cross-reference makes the link feel native
- from: samurai_dynasty:steel ingot (c:ingots/steel) | via: create:crushing (byproduct) or tfmg:industrial_blasting | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: samurai_dynasty already provides steel via its own recipe chain; routing its steel through Create crushing would cause a double-processing loop rather than doubling — M-03 is appropriate for the *ores*, not the finished ingot; the ingot should unify via c:tags, not get crushed
- from: samurai_dynasty Yokai drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (occultism spirit_fire) is the stronger and more thematically resonant link for Yokai spirits; adding a parallel Ars imbuement route creates reagent-ownership ambiguity for the same drops — one magic sink is enough; if Ars is needed, do it via M-01 chain, not a direct imbuement of the drop
- from: samurai_dynasty gem/ore scarcity (regional) | via: numismatics sell order | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: jade and onyx are region-locked — a player who found the right biome sells rough gems through the coin system; scarcity → trade loop closes naturally

⚠ silver note: samurai_dynasty tags its silver `c:ingots/silver` — follow CLAUDE.md caveat; do NOT unify with galosphere (which is palladium). The ore-doubling candidate is for jade/ruby/onyx/aquamarine only; silver ore-doubling would require a dedicated KubeJS routing that avoids the galosphere collision.

REWORK: dossier candidates are correct. All accepted links are coherent and non-overlapping.

---

## afk-sleep-1.3.2   [anchors: support (1)]

Zero blocks, zero items, no loot. Pure server behavior tweak for multiplayer sleep.

- LEAVE — genuine zero-surface infrastructure mod (multiplayer sleep quorum fix; no items, no material surface)

---

## edf-remastered-5.0-beta4   [anchors: survival (1)]

Zero blocks, zero items, no item drops. Behavioral datapack boss-difficulty overhaul. Dossier confirms it adds no drop changes.

Re-examining: loot=yes in the jar digest, but the dossier confirms it adds NO rewards and doesn't change dragon drops. The loot flag likely refers to the datapack functions that control fight behavior rather than new loot tables with items. No item surface to route.

- from: n/a | via: loot-seed | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier explicitly confirms no drop changes and no new rewards — loot=yes is a false positive here (datapack functions, not item loot tables); there is no material surface to seed
- LEAVE — zero item/material surface confirmed; the mod alters boss AI/phases only; no drop table or item to route through any method

---

## createlowheated   [anchors: Create (1)]

One block (basic_burner), one item. A Create heating-balance mod. Already uses create:mixing (inbound). No foreign feedstock surface.

Method-pull: The basic_burner accepts any furnace fuel. The "lowheated" heat tier is a condition, not an item. There is no tradeable output and no thematic hook outside Create's own heat economy.

- from: createlowheated fuel consumption (any furnace fuel) | via: config tie (survival pressure) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is seasonal reagents — tying a fuel burner to seasonality is a stretch (coal doesn't become seasonal); this would be a forced config tie, not a coherent weave; the mod's role as an anti-AFK balance tweak is its only function
- LEAVE — single-block Create balance mod; its function is a heat-management constraint on Create basins, not a material with a second anchor surface; no coherent second system without forcing

---

## sliceanddice   [anchors: Create, survival (2)]

Already 2-pillar. M-12 processing-chain bridge by design (automates Farmer's Delight via Create Slicer).

New link candidates:
- from: sliceanddice:sprinkler (fluid dispenser over crops) | via: fluid pipe from TFMG/Create-Addition | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the sprinkler is already Create-integrated (fluid is piped from Create-compatible tanks); adding a specific routing note here is redundant — the integration is native
- from: sliceanddice automated food output (sliced meats/vegetables) | via: farm_and_charm:mincer → numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the Slicer outputs bulk prepared food at scale — bulk-minced patties routed through Farm & Charm's mincer and sold as processed goods on the trade board; the automation chain becomes a real economy pipeline
- from: sliceanddice:fertilizer (fluid/bucket crop booster) | via: create:filling (fill fertilizer bucket from a fluid tank) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the fertilizer bucket is already a sliceanddice item; the fill step is trivially already Create-compatible; this isn't a new weave, just a note about existing compatibility

OK — core connections sound (Create + survival, M-12 native). The M-09 economy link via automated food output is additive without breaking the 2-pillar baseline.

REWORK: none needed on existing connections.

---

## fxntstorage   [anchors: Create, survival (2)]

Already 2-pillar (Create-tier-gated via mechanical_crafting inbound; survival QoL). Dossier correctly notes the flight upgrade touches aeronautics thematically but is a worn gadget, not a wireable resource.

- from: fxntstorage:backpack_flight_upgrade | via: aeronautics structural component recipe | to: aeronautics | motif: M-23 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — a wearable personal flight backpack is not an airframe/hull structural component; M-23 is for ship construction materials, not worn gadgets; forcing this into the aeronautics build supply chain reads as arbitrary
- from: fxntstorage:hardened_storage_box / hardened_backpack (top Create tier) | via: aeronautics cargo/hold recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: a "hardened cargo hold uses hardened storage box as component" is borderline but ultimately adds no loop advancement — it is a deco/form tie, not a material routing; the backpack isn't a structural alloy; reject as no-motif for this delivery
- from: fxntstorage:storage_controller (item network) | via: numismatics trading floor logistics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the storage controller is a routing device, not a trade good; routing infrastructure into the economy pillar as a "sell this" item is contrived

OK — connections sound. Both 2-pillar anchors are well-established. No new coherent link found that advances the loop.

REWORK: none.

---

## create_enchantment_industry   [anchors: Create (1)]

Power-read: Liquid XP (fluid), Blaze Enchanter, Mechanical Grindstone, Printer, Disenchanter. 15 items, 6 c:tags. Multiple inbound Create recipe types. Dossier says magic via liquid XP is the 2nd-anchor candidate.

- from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: irons_spellbooks:alchemist_cauldron_brew (XP as a cauldron ingredient for Iron's spellbook brews) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the alchemist's cauldron can use liquid XP from the factory as the energy component in advanced spell brews — your enchanting factory doesn't just enchant gear, it feeds the magic lab
- from: create_enchantment_industry:experience_bucket | via: occultism:ritual (XP fluid as a ritual cost/resource) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: occultism rituals consume specific block/item patterns, not arbitrary fluids; piping liquid XP into a ritual circle has no mechanical backing in occultism — this would require a forced KubeJS shim with no native method support; M-10 via Iron's cauldron is the cleaner route
- from: create_enchantment_industry:mechanical_grindstone (grinding method) | via: create_enchantment_industry:grinding (registered recipe-type) | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: gate a magic reagent (Ars source gem dust / Iron's arcane essence powder) behind the Mechanical Grindstone so the enchanting factory is also a reagent prep station — grinds gems into fine powder the magic side needs
- from: create_enchantment_industry enchanted book output (Blaze Enchanter) | via: ars_nouveau:enchanting_apparatus or occultism:spirit_trade | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the Blaze Enchanter already *applies* enchanted books — feeding its output back into Ars/Occultism is a round-trip that produces nothing new for the loop; the loop-advancing direction is Create produces → magic consumes (M-10 cauldron / M-05 grindstone reagent), not magic re-enchanting Create's output

REWORK: dossier flagged M-05 and M-10 as candidates; the accepted entries above hit both. The liquid-XP→cauldron route is the strongest link. OK — the two accepted lines land it at Create + magic (2 pillars).

---

## create_hypertube   [anchors: Create, aeronautics (2)]

Already 2-pillar. Pure entity/player transport network; no processing method and no material output.

- from: create_hypertube:hypertube_entrance (kinetic transport node) | via: aeronautics structural recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: a tube entrance is a transport ingress, not a drivetrain/control component; M-24 is for mechanical parts feeding propulsion/steering; the tube is a parallel transport form, not a component of an airship
- from: create_hypertube tubes | via: create:sequenced_assembly (already inbound) | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: sequenced_assembly is already an inbound made-by method for this mod; the weave already exists; no new link here

OK — connections sound. 2-pillar (Create + aeronautics/logistics) is solid.

REWORK: none.

---

## mutantszombies   [anchors: survival (1)]

Zero blocks, 7 spawn-egg items, loot=no (confirmed no drops). 7 biome-modifiers add natural spawns.

Re-examining: loot=no is confirmed; the dossier says "no special drops." Spawn eggs are not routable material. The mobs themselves are harder zombies — but they drop nothing a method could consume.

- LEAVE — confirmed zero-drop mob-expansion mod; no material surface to weave (spawn eggs are not routable reagents; forcing a drop would require adding content the mod deliberately omits)

---

## gamediscs   [anchors: survival (1)]

13 items (console + discs + components), loot=no. Console is crafted from its own component parts; discs are obtained via the Skeleton-kills-mob gimmick.

- from: gamediscs:processor / gamediscs:redstone_circuit (console components) | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the processor and redstone circuit inside the gaming console are fabricated on a Create Mechanical Crafter — a retro computer needs precision parts; makes the console a mid-tier craft that rewards having a Create setup
- from: gamediscs:processor | via: create:pressing (pressed circuit board) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the processor is a custom item, not a crop or raw material; pressing a "processor" is thematically wrong (pressing is for plates/sheets, not electronics); M-05 via mechanical_crafting is the right form; reject this variant
- from: gamediscs game discs (collectibles) | via: numismatics trade good / MineColonies special order | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — minting retro game discs as coin-valued trade goods undercuts their character as a novelty/downtime toy; the economy link feels out of place for a pure fun item; the disc acquisition gimmick (Skeleton must kill the mob) is intentionally absurd and fun, not a production loop

REWORK: none needed. The M-05 mechanical_crafting acceptance gives it a 2nd Create anchor at low cost.

---

## stylecolonies   [anchors: support / decoration (1)]

Zero blocks, zero items, zero loot, zero recipes. Ships MineColonies blueprint packs only.

- LEAVE — genuine zero-item/method mod; it is a blueprint content pack for MineColonies with no items or recipe surface; the Steampunk style's implicit Create-block consumption happens through MineColonies' build system, not through any weavable recipe type

---

## netmusic   [anchors: support (1)]

4 blocks, 6 items, loot=yes. music_cd is already routed through touhou_little_maid:altar_recipe_serializers (inbound). Pure cosmetic audio.

- from: netmusic:music_cd | via: create:mechanical_crafting (the cd_burner or console housing) | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the CD itself is the content item and it already has a TLM altar route; adding a Create mechanical_crafting wrapper for a cosmetic audio item is depth without purpose — it just adds a crafting gate to something that should be accessible (everyday item); M-05 is reserved for flagship/gated items, not cosmetic novelties
- from: netmusic:music_player_backpack | via: fxntstorage backpack upgrade slot | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif for this delivery form; a cross-mod worn-item compatibility is not a recipe/method weave and doesn't advance the loop

LEAVE (effective) — connections sound given the TLM altar weave already present; no new coherent loop-advancing link found. The mod sits at 1 support anchor with one cosmetic weave via TLM. No forced 2nd anchor warranted.

---

## railways   [anchors: Create, aeronautics (2)]

Already 2-pillar (Create train extension; rail/logistics = aeronautics arm). create:mechanical_crafting + create:sequenced_assembly inbound.

- from: railways locometal blocks (structural building material — large palette of wrapped/boiler/riveted blocks) | via: aeronautics hull/structural recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the same locometal plates that clad a locomotive hull are the right structural material for a steam-powered airship frame — the shipyard and the rail yard share a fabrication source
- from: railways:conductor (entity — remote-redstone operator) | via: aeronautics control surface recipe | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: the conductor is an entity/NPC, not a craftable component; M-24 routes mechanical parts into drivetrain/control recipes; an entity is not a recipe ingredient; tone clash with the motif's intent
- from: railways locometal (production surplus) | via: numismatics sell / MineColonies supply | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: locometal is a structural/build block used for trains and ships; treating it as a sell-to-coin trade good is plausible but thin — the economy link for railways should come from the transport service itself (moving goods by train = logistics), not from selling the building material; the aeronautics/transport arm already covers the logistics anchor; adding a coin-sell route adds no loop advancement

OK — locometal → aeronautics hull (M-23) adds a concrete 3rd-anchor link without overloading the mod. Core connections sound.

REWORK: none.

---

## dtterralith   [anchors: survival (1)]

104 blocks (dynamic tree leaves/saplings), 33 items (species seeds). Worldgen compat layer for Terralith biomes. No recipes; logs/saplings on harvest are vanilla items.

- from: dtterralith unique species seeds (dtterralith:maple_seed, cedar_seed, kapok_seed, etc.) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill the exotic Terralith-biome seeds into specialty flours or dyes — the cedar's resin or the kapok's fiber becomes a useful intermediate the kitchen or dye-line consumes; the route makes biome-specific trees more than just wood sources
- from: dtterralith:jacaranda_seed / amethyst_seed (decorative-biome seeds) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: a seed from a dynamic tree is a planting item, not a magic reagent; imbuing a tree seed is thematically awkward; the milling-to-intermediate route (M-12) is the coherent one; imbuement here would be forced
- from: dtterralith logs (biome-specific wood) | via: farmersdelight:cutting → farm_and_charm processing | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: these are vanilla-equivalent logs; the farmersdelight cutting interaction already applies to all wooden logs via tags — no bespoke weave needed; this is already covered by the existing method without any new recipe

REWORK: dossier says leave. The seed→milling M-12 link is a genuine light step that makes the exotic biome trees yield a useful intermediate. The leave verdict is too conservative for a mod with 33 seed items and loot=yes.

---

## farm_and_charm   [anchors: survival (1)]

80 blocks, 124 items, 13 biome-modifiers, 39 c:tags, loot=yes. 6 registered recipe-types. No inbound foreign method weave yet.

- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create Millstone grinds barley and oat into flour — the farmstead's grain harvest feeds the Create spine's milling step before it reaches the kitchen; the bread chain runs through the machine
- from: farm_and_charm animal-husbandry surplus (butter, eggs, prepared meats) | via: numismatics sell order / trade board | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: butter and cured meat are produced faster than any one player consumes — the surplus flows through the trading floor as luxury food; the husbandry investment pays off in coin, not just saturation
- from: farm_and_charm:butter / farm_and_charm:barley | via: vinery:apple_fermenting or alcohol_industry:alcohol_boiling | to: survival | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-12 processing-chain pull is accepted, but barley → ale via fermentation is already covered generically by Vinery/alcohol_industry without needing a named farm_and_charm route; the grains already have the c:tags fermentation methods would use; no bespoke weave needed
- from: farm_and_charm:fertilized_farmland (fertility mechanic) | via: sereneseasons season-fertility tie (config link) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: fertilized farmland extends the growing window into cold months — pair it with Serene Seasons' fertility config so farm_and_charm's soil upgrade mitigates (but doesn't remove) the winter penalty; the two mods' survival-pressure systems reinforce each other
- from: farm_and_charm:chicken_coop / farm_and_charm:feeding_trough | via: MineColonies colony supply chain | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the chicken coop and trough are blocks that automate animal husbandry; routing block items into the economy via a sell order is weak — the economy link should be through the *food outputs* (butter/eggs/meat), which is already ACCEPT above; duplicating it through the infrastructure blocks adds no loop value

OK — three accepted links (Create milling, economy food trade, seasonal soil tie) raise this to 3 anchors (survival + Create + economy). The grain-milling M-12 is the spine link; M-09 food trade is the economy close; M-16 seasonal soil is the survival↔survival deepener.

REWORK: none on existing (none existed). Clean candidate.

---

## immersivearmorhud   [anchors: client-only UI (1)]

Zero blocks, zero items, zero loot. Client HUD mod.

- LEAVE — genuine zero-surface client UI mod; armor durability display has no item/material/recipe surface to weave

---

== CHUNK COMPLETE ==
