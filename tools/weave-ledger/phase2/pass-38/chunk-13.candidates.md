# Phase 2 candidates — chunk-13

## create_ultimate_factory   [anchors: create (1)]

REWORK check: 1-anchor mod; dossier already recommends LEAVE. Evaluate independently.

Method-pull: The mod authors recipes onto Create methods (compacting/crushing/mixing/splashing/haunting) turning vanilla mats into renewable resources (diamond from coal-block+lava, strata from nuggets+gravel, blaze rods, deepslate). It adds no items, blocks, or methods of its own — it IS Create content.

Can it anchor a 2nd system?
- Survival: its outputs (renewable diamond, blaze rods) relieve pressure-driven scarcity. But since it has no items of its own and no delivery mechanism beyond Create recipes it simply *deepens* the Create production node — it doesn't independently bridge to survival as a pillar; that bridge is emergent through the Create spine.
- Economy: the renewable outputs become tradeable but that's ambient (M-09 retired).
- One real candidate: via `create:haunting` it directly enables M-19 (Create→occult bridge), and the blaze-rod output is itself a magic/Create crossover material. But the mod doesn't provide a *new* input that feeds magic; it produces vanilla blaze rods — nothing proprietary.
- The `create:crushing` coal-block→diamond chain could intersect M-30 (regional scarcity gate) if diamond ore is region-locked — but the mod REMOVES scarcity by making diamond renewable, which is antithetical to the scarcity foundation. Red-team: this is a live tension; curators should verify these recipes don't erode GTMOGS regional scarcity. Not a weave; a curation flag.

Verdict: no coherent 2nd-anchor weave. The mod is a recipe deepener for Create. Curation flag worth noting.

- LEAVE — pure Create recipe datapack (no items/blocks); all outputs are vanilla or Create-native materials; renewable-diamond recipes may erode GTMOGS regional scarcity (worth auditing separately, not a weave). Sits clean at Create (1).

## cmparallelpipes   [anchors: create (1)]

Method-pull: Two items (pipe_wrench, pipe_wrench_gear). The wrench is a tool that acts on Create fluid pipes — it has no recipe-method of its own, produces no material, and consumes nothing from any other pillar. Its c:tag (1) is almost certainly a tool tag.

Can it anchor a 2nd system?
- Survival: a plumbing tool isn't a survival item.
- Economy: a QoL tool isn't a trade good in any meaningful way — M-09 retired anyway.
- Magic: no ritual or infusion path for a pipe wrench is sensible.
- Aeronautics: ship plumbing could use denser fluid networks — thematically relevant — but the mod adds no recipe type an aeronautics weave can route through, and the Pipe Wrench is a construction aid, not a ship component. Proposing it as M-24 (mechanical component → propulsion) would be a stretch: a pipe-connection tool is not a drivetrain part.
- Red-team: any attempt to force a 2nd anchor onto a 2-item utility tool reads as contrived.

Verdict: genuine zero-surface for weaving beyond Create. The mod supports the Create aeronautics build implicitly (denser fluid pipes on ships) but that's ambient, not a weave.

- LEAVE — single utility tool with no material flow and no recipe-type surface; supports the Create spine only. A wrench that locks pipe connections has no coherent weave to magic/survival/economy.

## immersive_armors   [anchors: survival (1)]

REWORK check: 1-anchor, 41 items, no existing weave. Dossier suggests Create (M-05) and magic (M-10). Evaluate.

Power-read: Armor tier ladder — Bone/Wooden are early; Warrior/Robe/Slime are mid; Heavy/Divine/Prismarine are mid-high; Steampunk is thematic-mid (unclear endgame status). All crafted from vanilla mats at the crafting table currently.

Candidate A — Create / mechanical_crafting, M-05:
- Gate the Heavy, Divine, and Steampunk sets behind Create: require pressed plates (create:pressing) as intermediates, or use create:mechanical_crafting for the assembly step.
- Power-read: Heavy/Divine are the strongest (high-armor, near-zero knockback / one-hit block respectively) — mid-to-high tier. Steampunk is thematically perfect for Create. Depth proportional to power: one pressing step for Heavy, a short assembly chain for Steampunk.
- Theme-fit: Steampunk + Create is an obvious pairing; Heavy armor plate fabrication in a mechanical press reads naturally. Players would nod.
- Red-team: Bone/Wooden/Slime should stay vanilla-craftable (survival-accessible basics); only the upper-tier sets get gated.
- Motif: M-05 native-method gating (their flagship items built with Create parts as inputs, in a Create machine).
- ACCEPT

Candidate B — magic / ars_nouveau:enchanting_apparatus (armor_upgrade), M-10:
- Gate the Divine set through an arcane armor-upgrade ritual — "divine" protection implies magical consecration.
- Power-read: Divine is mid-high (blocks one attack per minute passively) — endgame-adjacent for survival; a magic gate fits.
- Theme-fit: Divine armor upgraded at an enchanting apparatus is a natural "blessing." Robe set also thematically close to a mage aesthetic.
- Red-team: ars_nouveau:armor_upgrade is a registered method in the pack; using it on Divine/Robe armor is thematically coherent. The tension is: players without magic progress can't access Divine — that is the intent of M-05/M-10. Accept if Divine is explicitly positioned as a magic-locked set (not required for general progression).
- Motif: M-10 arcane infusion pull.
- ACCEPT — but scoped to Divine (and optionally Robe) only; don't gate the full armor roster behind magic.

Candidate C — economy / M-09:
- REJECT — M-09 retired; "armor sells thinly" and the sell link is not a demand-gate.

Candidate D — boss-drop gate, M-15:
- The Wither set (uses wither skeleton skull) is already naturally gated behind a boss drop (wither skeleton). That's a vanilla gating, not a new weave. Could reinforce by making the skull processing a Create step.
- Power-read: Wither set — mid-high. Already has the boss-key shape natively (wither skull needed).
- Theme-fit: fine, but vanilla already enforces it; adding a Create step would be depth-on-top-of-existing-gate.
- This is a marginal bonus on an existing gate rather than a new weave. Not a full ACCEPT — note for Phase 3 as a secondary refinement on the Create gating pass.
- REJECT (too thin — the boss gate is already vanilla; adding a Create step is not a new cross-system link, just recipe hardening within Create)

- from: immersive_armors:heavy_chestplate / steampunk sets | via: create:pressing + create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: a Heavy plate absorbs kinetic force — of course you press it into shape; a Steampunk set is built on a mechanical assembly line
- from: immersive_armors:divine_chestplate (+ Robe set) | via: ars_nouveau:enchanting_apparatus (armor_upgrade) | to: magic | motif: M-10 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: "divine protection" is a magical consecration, not hammered from iron — run it through the enchanting apparatus
- from: finished sets as sellable smithed goods | via: bare sell | to: economy | motif: M-09 | power: — | tone: — | verdict: REJECT | reason: M-09 retired; armor sell links are ambient endpoints, not demand-gates
- from: immersive_armors:wither_* / boss-skull gate | via: create:pressing (reinforcing vanilla boss gate) | to: create | motif: M-15 | power: mid-high | tone: ok | verdict: REJECT | reason: wither skull is already a vanilla boss-key; adding a Create step is recipe hardening within survival/Create, not a new cross-system link worth a separate weave proposal

## create_better_villagers   [anchors: create, economy (2)]

REWORK check: already 2-anchor (Create + economy). Evaluate existing connections and look for new links.

Existing connections review:
- Create: professions tied to Create workstations (Basin, Rotation Speed Controller, Steam Engine, Mechanical Arm) — sounds solid. A Create profession that *sells Create parts* directly ties into the Create spine.
- Economy: villager trades are the economy surface — emerald-denominated, which is vanilla's trade layer, not Numismatics. The pack's economy pillar is Numismatics-based (player-minted coin, M-08). This is a REWORK candidate.

REWORK — existing economy connection: villager emerald trades are vanilla's NPC trade economy, not the pack's player-run Numismatics economy. The dossier flags re-denominating to Numismatics coins (M-08) as optional. Evaluate:
- The pack's economy is player-run: NPC faucets (M-14/M-21 cut). Villagers selling Create parts for emeralds is technically an NPC faucet of Create parts — it's a source of Create components that bypasses player production. Under the player-run ruling, this may be fine (it's not a coin faucet, just a part source), but the "economy" anchor is weakly grounded in the pack's Numismatics layer.
- The honest read: create_better_villagers' economy anchor is its *role as a trade route* — players going to villagers for Create parts is a Create-parts market. Whether that's "the pack's economy" is debatable; it's more of a Create-supply route with a vanilla-economic delivery.
- The Numismatics redenomination suggestion (dossier) is a config/KubeJS feasibility question; if achievable, it strengthens the economy anchor by routing through the pack's actual coin layer. This is a Phase-3 candidate (config tie, not a recipe weave).

New link candidates:
- survival via M-28 (colony route): the Miner villager (buys/sells raw andesite/copper/brass) is structurally adjacent to a MineColonies Miner role — but Create Better Villagers uses vanilla villagers, not MineColonies. A colony weave here would need to be *bridging* the two trade systems, which is a design decision, not a recipe edge.
- Verdict on new links: no strong new cross-system weave beyond what's already flagged.

- REWORK: existing "economy" anchor is valid but rides vanilla emerald trades rather than the pack's Numismatics layer — the connection would be stronger if trades were re-denominated to player-minted coin (M-08, via config/KubeJS); flag for Phase-3 economy pillar work (v0.9.0)
- OK — Create anchor is sound (professions keyed to Create workstation blocks, trades in Create parts)
- from: Create-part trades (Andesite/Brass/Copper Worker) | via: Numismatics coin re-denomination (config/KubeJS) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a Brass Worker paid in player-minted Brass Cogs rather than emeralds makes the Create trade loop feel like *the* economy, not a vanilla side-channel

## pantographsandwires   [anchors: create, aeronautics (2)]

REWORK check: already 2-anchor (Create + aeronautics). Evaluate existing connections and look for new links.

Existing connections review:
- Create: 6 inbound Create recipe types including sequenced_assembly — very deeply wired. Sound.
- Aeronautics: overhead-line infrastructure for electric Create trains (trains = aeronautics/logistics arm). Sound — this is the build content for the logistics spine.

Any new link?
- Its coal_coke and graphite material tags (c:item/dusts/coal_coke, c:item/ingots/graphite) are outputs that any other mod could pull through a method. Coal coke is a fuel feedstock; graphite is an electrical-conductor material.
- M-13 (fuel → propulsion): coal_coke is a legitimate fuel intermediate. If the pack's Aeronautics engines accept solid fuels, coal_coke from pantographsandwires feeding an engine is M-13. However, TFMG also produces coal_coke (coking process) — this would be a shared tag, not a new weave exclusive to pantographsandwires.
- M-32 (byproduct → input): graphite as an intermediate for TFMG's industrial blasting / polarizing — graphite electrodes in industrial processes. A real materials-chemistry chain but needs a second mod to consume graphite.
- The tags exist and are usable, but since coal_coke/graphite are already produced by TFMG (the primary fuel/industrial spine), any weave through those tags would be a TFMG weave that pantographsandwires happens to contribute to via the shared tag — not a pantographsandwires-specific 2nd-anchor.

- OK — Create anchor: deeply wired via 6 Create recipe types including sequenced_assembly. Sound.
- OK — Aeronautics anchor: catenary wires + pantographs are literally the rail-electrification infrastructure for the logistics network. Sound.
- from: pantographsandwires:coal_coke (tag: c:item/dusts/coal_coke) | via: TFMG coking chain / engine fuel | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: coal_coke is a shared c: tag also produced by TFMG's primary coking method; the weave is on the tag, not specific to pantographsandwires — attributing it here would double-count the coal_coke route already anchored in TFMG

## terralith   [anchors: survival (1)]

Method-pull: data-only worldgen (no items, no recipe types, loot=yes). Has 65 c:tags (biome tags used by other mods to spawn/grow in Terralith biomes). loot=yes means it has loot tables — but as a worldgen-only pack, these are likely structure/chest loot tables for vanilla structures placed in its biomes, not new structure loot of its own.

Can it anchor a 2nd system?
- loot=yes but no items of its own: Terralith's loot tables are almost certainly vanilla structure overrides or placement-modifiers, not new loot of its own (its signature says "no items/blocks of its own"). The loot-seed delivery mechanism (from the briefing) requires a structure/dungeon mod *with its own loot tables to seed*. Terralith provides terrain+biomes for other mods' loot tables to land on, but it doesn't own loot tables that we can seed with weave-relevant drops.
- Scarcity foundation: Terralith is the terrain that makes regional scarcity geographically real — biome placement shapes where ores appear (via GTMOGS biome-modifiers). That's a critical loop-support role but it's the *foundation* layer, not a 2nd-anchor weave.
- Economy (M-30 regional scarcity): Terralith's biome diversity is what makes M-30 (regional-scarcity gate) work — different biomes = different ores available. But M-30 is the *GTMOGS* weave riding on the terrain; attributing it to Terralith double-counts.
- Survival link to magic (M-16 seasonal reagent): Terralith adds unique biomes where seasonal reagents could grow exclusively — but no items of its own to place.
- No method-routing possible with zero items/recipe-types.

Red-team: The briefing says "don't LEAVE a loot-bearing structure mod just because it has no recipes." Terralith is not a structure mod — it's a terrain generator. Its loot=yes flag is incidental (vanilla structure loot tables overlaid on new terrain, not new Terralith-specific structures with seeded loot). No loot-seed candidate is coherent here.

- LEAVE — pure data worldgen overhaul; no items, no recipe types, no new structures with seeded loot to route. Anchors the scarcity foundation (terrain = the geography of scarcity) but that's the loop's substrate, not a weave edge. Support-flavored survival anchor.

## brazil_legends   [anchors: survival (1)]

Power-read: Saci (trickster), Capelobo (werewolf-like), Headless Mule (fire), Cuca (witch). Drops: capelobo_claw (mid — from a dangerous mob), big_tongue (mid, from Cuca?), amber_shard/amber_pearl (mid — gem-like), bottle_with_saci (unique, trickster-capture). Boss-grade? The mobs are difficulty content, putting drops in mid-to-endgame range for survival. Weapons (bloodmoon_sickle) and spell books also drop.

Candidate A — magic / occultism:spirit_fire or ars_nouveau:imbuement, M-02 + M-11:
- Capelobo_claw, big_tongue, amber_shard → magic reagent via spirit_fire transmutation or imbuement.
- Theme-fit: Brazilian folklore creatures with supernatural powers. Their claws/tongues/amber transmuting into occult essences reads as "dark folklore energy → arcane reagent." Fits occultism's spirit-working vocabulary. Ars Nouveau's imbuement is a stretch (Ars is more school-magic than folklore-occult) but occultism:spirit_fire is exactly right.
- Power-read: capelobo_claw is mid (requires hunting a dangerous creature); amber_shard is mid (a gemlike folklore material). One-step spirit_fire transmutation is appropriate for mid.
- Red-team: are these drops usable in occultism/Ars at all? They have no c:tags, so they'd need named-item inputs in recipes — fine for KubeJS. The tone is coherent (folklore dark magic → occultism).
- Motif: M-02 (mob-drop reagent sink) + M-11 (ritual/transmutation sink). Both apply; lead with M-11 since spirit_fire is the delivery.
- ACCEPT

Candidate B — magic / amber_shard as an attunement catalyst, M-07:
- Amber is a real-world magical/preserving material (Baltic amber, folk magic). Using amber_shard as a catalyst in an arcane conversion (not consumed freely) could gate a conversion sensibly.
- Red-team: galosphere already owns the attunement-catalyst slot (allurite/lumiere, M-07). A second catalyst from a different mod risks fragmenting the catalyst role. Unless amber serves a *different* gate (a different conversion), this overlaps M-07's established owner.
- Verdict: REJECT unless a specific distinct conversion needs a second catalyst type — don't propose it as a general attunement catalyst.
- REJECT — reagent-ownership: galosphere:allurite/lumiere_shard already hold the M-07 catalyst slot; adding a second standalone catalyst from brazil_legends without a specific distinct gate would dilute the ownership

Candidate C — economy (amber_pearl as luxury trade good, M-09):
- REJECT — M-09 retired. Amber pearl as a sellable is ambient.

Candidate D — economy / boss-drop → combat supply, M-34:
- The bloodmoon_sickle is a weapon drop from a dangerous mob. A combat specialist farming these and trading them to non-combat players is M-34.
- Power-read: a weapon drop from a specific dangerous mob is mid-tier; combat specialists farming it is coherent in a ~10-player group.
- Theme-fit: fine — one player hunts the Headless Mule for the sickle and sells it.
- Red-team: is the bloodmoon_sickle sufficiently unique/powerful that a player would seek it from a combat specialist rather than farming it themselves? If the mob is truly difficult (requires preparation), yes.
- Motif: M-34 (combat-route supply).
- ACCEPT — conditional on bloodmoon_sickle being genuinely difficult to obtain solo

- from: brazil_legends:capelobo_claw / big_tongue / amber_shard | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a werewolf's claw and a witch's tongue carry dark folklore energy — spirit-fire transmutes them into occult essence just as it does with other haunted drops
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement (as a ritual catalyst) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: amber is a preservation medium in real-world folklore — feeding it into an imbuement to fix/stabilize a magical process reads naturally; secondary to the spirit_fire route
- from: brazil_legends:amber_shard as standalone attunement catalyst | via: M-07 catalyst slot | to: magic | motif: M-07 | power: mid | tone: ok | verdict: REJECT | reason: galosphere already owns the M-07 catalyst slot (allurite/lumiere); adding a second general catalyst fragments reagent-ownership without a specific distinct gate justifying a second catalyst type
- from: brazil_legends:bloodmoon_sickle (weapon drop) | via: combat-specialist trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Saci hunts are perilous enough that a combat specialist corners the market on bloodmoon sickles and trades them to the rest of the group
- from: brazil_legends:amber_pearl / amber as luxury | via: bare sell | to: economy | motif: M-09 | power: — | tone: — | verdict: REJECT | reason: M-09 retired; ambient sell is not a demand-gate

## createmechanicalcompanion   [anchors: create (1)]

Power-read: Mechanical Wolf Link (Curios head slot). Build chain: create:sequenced_assembly + mechanical_crafting + sandpaper_polishing + deploying. Modules add combat/utility. Items include netherite_plates, optical_sensor, quantum_drive, regenerative_casing — a deep brass/netherite-tier Create chain. This is a late-game Create item (after sequenced assembly is available + netherite).

Method-pull: outputs a companion entity; inputs are Create-deep (precision/regenerative casing, netherite plates). No material outputs — nothing to route through another method. The modules (mounted_crossbow, mob_radar, optical_sensor) are all inputs consumed in the wolf's construction.

Can it anchor a 2nd system?
- Survival: it's a combat/exploration companion — it serves survival in practice (helps in combat, pings hostiles). But the mod's *anchor* isn't survival pressure; it's a Create reward that helps with survival. A survival anchor requires the mod to generate survival pressure or produce survival goods, not just assist with it.
  - Could gate a module behind a boss drop (M-15): the optical_sensor or quantum_drive could require a boss-drop key component as an ingredient, making the wolf's best modules dependent on combat progression.
  - Power-read: endgame modules (shock-on-hit, teleport) are late-game enough to warrant a boss-drop gate.
  - Theme-fit: a mechanical wolf with a boss-drop component for its advanced sensor makes sense (the endgame combat module needs the endgame boss material).
  - Motif: M-15 (boss-key unlock for a complex Create recipe).
  - ACCEPT — conditional on which boss and which module (this is a Phase-3 decision on which boss drops gate which module)
- Magic: no magic surface — the wolf is purely mechanical. ars_nouveau:armor_upgrade *could* theoretically upgrade the wolf link (it's a Curios item), but that's a stretch; the mod's vibe is clockwork, not arcane.
- Economy: loot=yes (has a spawn_egg for illager engineers — combat NPCs). The illager engineer drops could be a M-34 combat-supply route, but the Wolf itself is personal gear, not traded goods.

Red-team for survival (M-15 boss-gate): Is gating a companion module behind a boss drop heavy? The wolf is already late-game (netherite-tier); the most powerful modules getting a boss-gate is depth-appropriate. Avoid gating the basic wolf itself — just the endgame modules.

- from: createmechanicalcompanion advanced module (e.g. optical_sensor / quantum_drive) | via: boss drop as input component (KubeJS recipe gate) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Mechanical Wolf's battlefield sensor needs a component only a fought-for boss can yield — the best combat companion is gated behind actual combat
- from: create:haunting on a wolf component → spirit output | via: create:haunting | to: magic | motif: M-19 | power: endgame | tone: clash | verdict: REJECT | reason: haunting a mechanical wolf part into a soul item clashes with the mod's clockwork-mechanical vibe; there is no natural magic surface here
- from: createmechanicalcompanion as companion / trade good | via: bare sell | to: economy | motif: M-09 | power: — | tone: — | verdict: REJECT | reason: M-09 retired; a personal companion isn't a traded good

## revelationary   [anchors: support (1)]

Zero items, zero recipe types, zero loot. Genuine code library providing an advancement-gated block-visibility API. No material in or out.

- LEAVE — pure API/library; advancement-gated visibility mechanic with no items, blocks, recipes, or loot of its own. Used by dependent mods (Occultism otherworld blocks) but has no weave surface itself.

## companions   [anchors: survival (1)]

Power-read: Soul Furnace (registered recipe-type) converts mob-drops/food/gems into soul-state reagents — mid-to-endgame depending on input. Boss: Sacred Pontiff → Old Cloth + Relic Gold (endgame). Crystallized Blood (mid — requires farming rotten flesh in the Soul Furnace + charging with blood). Soul gems (mid-high). Tesla network (mid — copper-heavy).

Candidate A — magic via occultism:spirit_fire / ritual or ars_nouveau:imbuement, M-11 + M-02:
- Crystallized Blood → occultism ritual input: a blood-crystal that powers summon altars is a natural soul-fire/ritual feedstock. The semantic is identical: companions' Soul Furnace makes a blood-crystal; occultism's spirit_trade or ritual consumes blood-adjacent reagents.
- Soul gems → ars imbuement: diamond→soul gem is companions' flagship conversion; that soul gem could gate an Ars spell component or imbuement ritual.
- Theme-fit: companions sits in gothic-alchemical space; occultism is exactly gothic-ritual. The merge is very natural. Players would expect these worlds to overlap.
- Red-team: companion's own coin system (copper/nether/end coins) and altars are a self-contained economy. The risk is the magic weave making companions' internal loop feel redundant. But routing *only specific drops* (Crystallized Blood, soul gem) into occultism while keeping the altar loop self-contained avoids this.
- Motif: M-11 (ritual/transmutation sink) and M-02 (mob-drop reagent sink).
- ACCEPT (strong)

Candidate B — Create via create:crushing, M-04:
- Tesla/voltaic deco blocks (copper-based) could crush back to copper scrap — M-04 (Create recycles deco).
- Power-read: Tesla coils/pillars are mid-tier decoration. One crushing step back to copper is light.
- Theme-fit: electric steampunk deco crushing to copper is fine, if mechanical.
- Red-team: weak — the Tesla network isn't presented as a Create-adjacent build; it's a gothic-alchemical electrical system. Crushing it to copper feels like destroying flavor content for a copper nugget. Marginal benefit, minor thematic dissonance.
- REJECT — weak; the Tesla aesthetic is gothic-electrical, not Create-industrial; crushing it to copper scrap feels reductive of a distinctive block set without meaningful loop benefit

Candidate C — economy (Relic Gold / soul gems as trade goods), M-34:
- Relic Gold (boss drop from Sacred Pontiff) is a high-value item from a high-difficulty boss — M-34 combat-route supply.
- A combat specialist farms the Sacred Pontiff and trades Relic Gold to other players.
- Power-read: boss drop — endgame. M-34 applies.
- Theme-fit: a boss-drop economy is the pack's design intent; Sacred Pontiff drops fit.
- Motif: M-34 (combat-route supply). ACCEPT

Candidate D — companions:soul_furnace as a cross-mod magic processing method:
- Since companions:soul_furnace is a registered recipe-type, *other* mods' materials could be routed *through* it (method-pull in reverse: other mods' drops → soul_furnace → companion outputs).
- Specifically: occultism or Grimoire of Gaia drops → soul_furnace → Crystallized Blood or soul gem, making companions a node in the magic web rather than an isolated island.
- This is a M-29 (cross-route dependency) angle: magic produces inputs that companions' soul furnace consumes.
- Motif: M-29 (cross-route dependency).
- ACCEPT — particularly if occultism drops or GoG fragments are added as soul_furnace inputs

Candidate E — coin system conflict:
- companions ships its own copper/nether/end coins. These are NOT Numismatics coins. This is a design tension: two coin systems competing in one pack. The companions coins appear to be purely internal (altars use them). The risk is players treating companions' coins as a competing currency.
- This is a REWORK/curation flag, not a weave: either bridge companions' coins to Numismatics (mapping copper_coin → a Numismatics denomination via KubeJS), or keep them siloed as internal altar currency only. Flagging for Phase-3 economy pillar review.

- from: companions:crystallized_blood / soul_gem | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a blood crystal forged in a gothic soul furnace is exactly the kind of reagent occultism's rituals demand
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: combat-specialist trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Pontiff is a genuine fight; Relic Gold flows from fighters to crafters who need it
- from: occultism / GoG drops | via: companions:soul_furnace | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace accepts dark mob-drops from across the magic bestiary — feeding it with Grimoire of Gaia fragments or occultism drops makes companions a processing node in the magic web, not a private island
- from: companions Tesla/voltaic deco | via: create:crushing | to: create | motif: M-04 | power: mid | tone: clash | verdict: REJECT | reason: Tesla network is gothic-electrical; crushing it to copper scrap is mechanically thin and aesthetically reductive — the blocks are distinctive; recycling them for a copper nugget is a poor trade
- REWORK — companions' internal copper/nether/end coin system competes with Numismatics; flag for Phase-3 economy review: either bridge companions' coins to a Numismatics denomination (KubeJS exchange) or explicitly scope them as altar-only internal currency to prevent two competing economies

## timm   [anchors: support/QoL (1)]

Zero items, zero recipe types, zero loot. Client-side UI mod that renders biome/dimension titles. No material surface.

- LEAVE — pure client UI library; no items, blocks, recipes, or loot; no content to weave. QoL/immersion support role only.

## charta   [anchors: survival (1)]

Power-read: card tables (furniture — everyday social item); bar furniture (everyday deco); wine/beer glasses (everyday deco). Has loot=yes — tables generate in villages/dungeons; glasses/furniture are the dungeon/village loot. The furniture is all vanilla-wood crafted.

Method-pull: no registered recipe types. Furniture is crafted at vanilla crafting table. Card games run on the table. No material processing.

Candidate A — Create via create:cutting, M-04:
- Bar stools, bar shelves, card tables are wood constructions — create:cutting can reprocess them back to planks/sticks (M-04, Create recycles deco).
- Power-read: everyday furniture. One cutting step is proportionate.
- Theme-fit: a sawmill cutting up bar furniture is mechanically fine but tonally odd — the social/tavern vibe clashes with industrial recycling. Cutting furniture back to planks is not the kind of "deco → Create" that makes the pack better.
- Red-team: M-04 is meant for deco blocks that feel like they naturally came from a machine or return to raw form. Bar furniture is wood furniture — it doesn't feel like a Create-adjacent product. Forcing a cutting recipe on bar stools to earn a Create anchor is contrived.
- REJECT — M-04 on tavern furniture is a forced edge; the bar-furniture tone is social/tavern, not industrial; cutting a bar stool back to planks adds no loop value

Candidate B — economy as a player-gathering social space (service/social, M-33):
- Card tables as gambling/social surfaces where players wager goods — a player-run social-economy mechanic.
- Power-read: the card game is a player-to-player activity; wagering goods is an emergent economy outcome.
- Theme-fit: a tavern with card games where players bet goods or coin is extremely coherent — charta's whole vibe is "tavern/casino."
- Delivery: config/KubeJS or social convention (no built-in wagering API in Charta). The wagering behavior is emergent player behavior, not a recipe.
- Red-team: Charta has no built-in wagering hook. This would require a KubeJS convention or server-social agreement, not a recipe weave. It's a "design intent" link, not a method-routing.
- Motif: M-33 (service-for-hire / labor) is the closest — it's a player-runs-a-service economy node (the tavern owner as a service provider, card games as the service). But M-33's delivery is labor/service, and card wagering is more of a social-economic layer than a service.
- ACCEPT with caveat: the tavern as a player-economy service space (M-33) is coherent — the tavern operator provides the venue (physical service), players bring their own goods/coin. This is Phase-3 social design rather than a recipe authoring task.

Candidate C — economy via loot-seed (loot=yes, generates in villages/dungeons):
- Charta tables generate in villages and dungeons — their loot tables could be seeded with weave-relevant drops (coin, magic reagents, etc.).
- This is a loot-seed candidate: seed a Numismatics coin or a magic reagent into charta's dungeon-gen loot tables so finding a card table in a dungeon has loop-relevant rewards.
- Motif: M-08 (player-minted currency in loot → enters the economy as a found good) or M-02 (magic reagent in loot).
- Power-read: everyday (village/dungeon loot, common-ish).
- Theme-fit: a casino/tavern dungeon room having coin loot is very natural. Players in the wild find an abandoned tavern with some coin left behind.
- ACCEPT via loot-seed.

- from: charta card table / tavern as player-economy service space | via: social convention + physical venue (M-33 service) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the tavern owner runs card nights and charges for table time in goods or coin — the tavern is a player-economy service node, not a free community good
- from: charta dungeon/village loot tables | via: loot-seed (Numismatics coin seeded into loot) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: an abandoned dungeon tavern has some coin in its till — found coin enters the player economy as a modest loot reward, not an NPC faucet
- from: charta bar furniture / card tables | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: bar-furniture tone is social/tavern; cutting a bar stool to planks in a sawmill is a forced industrial edge with no loop value — M-04 is for deco that naturally comes from a machine, not for social furniture

## geckolib   [anchors: support/library (1)]

Zero items, zero recipe types, zero loot. Animation engine for entity/block/item/armor animation. Zero content surface.

- LEAVE — pure animation/rendering library; no items, blocks, recipes, or loot; no content to weave. Hard dependency for many mobs/magic/Create entities in the pack.

## dynamictrees   [anchors: survival (1)]

Power-read: Seeds (everyday — acacia_seed, birch_seed, etc.), mega saplings (mid — require a dirt_bucket + conversion), dendro_potion (mid — growth accelerant), dynamictrees:branch (structural). Has registered recipe-types: mega_seed, seed_conversion (sapling ↔ dynamic seed). loot=yes — trees drop logs/sticks/seeds on harvest (the whole-tree fell mechanic).

Method-pull: dynamictrees:mega_seed converts vanilla sapling → mega dynamic seed (with dirt_bucket). dynamictrees:seed_conversion converts vanilla saplings ↔ dynamic seeds.

Candidate A — Create via create:milling, M-12 (processing-chain pull):
- Dynamic Trees produces logs at scale (whole-tree felling = bulk log output). Logs → create:milling → sawdust/planks byproduct chain. This is already ambient (logs flow into Create's milling regardless of source). But DT produces *more* logs per fell, which makes the Create milling node more efficient. Not a new cross-system link — just a throughput boost on an existing vanilla→Create path.
- The dossier explicitly notes this: "DT trees are notoriously awkward for Create automated harvesters — forcing a Create edge would be contrived."
- REJECT — logs to Create milling is ambient; the forced-Create-harvester problem makes this a non-starter

Candidate B — survival / Serene Seasons + M-16:
- Dynamic tree growth depends on biome/light/rainfall — it's inherently season-sensitive (deciduous trees may lose leaves in winter, growth rate tied to rain). If Serene Seasons affects rainfall/growth, DT is already connected to the seasonal layer indirectly.
- A direct M-16 weave would seed a seasonally-exclusive reagent into DT's loot (e.g., spring blossom drops from cherry branches in spring only). DT has cherry_branch/cherry_leaves blocks — spring blossoms are thematically right.
- Power-read: everyday (seasonal loot from common tree species). One light loot-seed step.
- Theme-fit: cherry blossoms in spring from a living dynamic cherry tree is extremely natural.
- Motif: M-16 (seasonal reagent).
- Delivery: loot-seed (seeding a spring-exclusive blossom drop into DT's cherry_leaves/branch loot, conditioned on Serene Seasons spring).
- ACCEPT

Candidate C — Create / colony via M-28 (colony route):
- A MineColonies lumberjack hut automating DT tree harvest makes the colony route relevant to bulk wood supply. DT trees are compatible with colony tree-cutting. This makes the colony the faster/cheaper bulk-wood provider vs. a manually operated Create harvester (M-28).
- Power-read: everyday (wood is a basic).
- Theme-fit: a colony lumberjack efficiently working DT trees while a Create player struggles with automated harvesting is a real specialization pressure. Natural.
- Motif: M-28 (colony route — cheaper/faster via MineColonies).
- ACCEPT

- from: dynamictrees:cherry_leaves / cherry_branch seasonal loot | via: loot-seed (spring-only cherry blossom drop, conditioned on Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a living cherry tree sheds its blossoms only in spring — that seasonal material feeds a recipe or magic ritual that needs the fleeting ingredient
- from: DT tree harvest via MineColonies lumberjack | via: colony hut (cheaper/faster bulk-wood route) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony lumberjack efficiently fell whole DT trees while a Create harvester struggles with their irregular branch geometry — bulk wood supply becomes the colony specialist's edge
- from: DT logs bulk output | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT logs flowing to Create milling is ambient (any log source does this); the Create automated-harvester incompatibility makes a DT↔Create coupling contrived; no new cross-system edge

## ichunutil   [anchors: support/library (1)]

Zero items, zero recipe types, zero loot. Shared-class library for iChun's mods. Zero content surface.

- LEAVE — pure utility library; no items, blocks, recipes, or loot of its own; no weave surface. Dependency only.

## moreculling   [anchors: support/performance (1)]

Zero items, zero recipe types, zero loot. Client rendering-performance optimization. Zero content surface.

- LEAVE — pure performance/rendering library; no items, blocks, recipes, or loot; no content to weave.

## touhou_little_maid   [anchors: survival (1)]

Power-read: The Altar (registered recipe-type: altar_recipe_serializers) is mid-to-endgame — it requires power-point bottles (each ~0.5 points; a maid costs 5-10+), plus vanilla mats (diamond, gold, lapis, redstone, iron, coal). A maid itself is mid-endgame; the Broom (flight + maid rider) is mid; the Camera (capture+summon) is mid. Power-point bottles are low-effort consumables (village loot / maid-fairy drops). The Altar is KubeJS-extensible.

Candidate A — magic / via the Altar recipe-type as a ritual sink, M-05 + M-11:
- The Altar is a non-Create ritual method accepting arbitrary item inputs. Route a magic reagent or boss-drop through an altar recipe to produce an upgraded maid or a Broom variant — the altar reads as a Shinto summoning ritual (Torii + pillars, Gohei staff).
- Specifically: seed Ars Nouveau source_gem or a boss drop as an altar input to summon a rare/stronger maid variant or unlock a special module.
- Power-read: a boss-drop-gated altar recipe for an endgame maid variant is endgame-appropriate.
- Theme-fit: shrine-maiden summoning a spirit companion using magical offerings is extremely coherent — the altar is already thematically a Shinto ritual. Feeding it a magic reagent or a boss-drop reads as "the right offering."
- Red-team: the Touhou theme is anime/Japanese folklore — Ars Nouveau's school-magic European aesthetic is a tone gap but not a hard clash; Occultism is darker and might be a better fit. The key is the altar accepting the material, not what system it came from.
- Motif: M-11 (ritual/transmutation sink — the Altar is an analog of a ritual method) and M-05 (native-method gating — the mod's flagship (maid) produced in its own machine, gated on cross-system inputs).
- ACCEPT (strong for M-05; M-11 applies as a style note)

Candidate B — economy / power-point bottles as a trade good, M-26 (consumption sink):
- Power-point bottles are a consumable currency (maid upkeep + summoning cost). A maid-heavy player needs many bottles. If bottles are farmable but time-consuming, they could be traded (a fairy-farm specialist sells bottles to maid-owners).
- Power-read: everyday (village loot / fairy drops — not scarce but time-consuming to farm at scale).
- Theme-fit: maid guilds running on "faith points" (power bottles) as consumable currency is very thematic.
- Motif: M-26 (consumption sink — power-point bottles are spent against the maid upkeep, so demand never zeros). ACCEPT — but this is more of a design note (maids require ongoing consumption, creating continuous demand) than a recipe weave.

Candidate C — Create (explicit note in dossier: LEAVE — no natural Create routing):
- The altar is the non-Create path intentionally. Do not force it.
- REJECT — Create edge on TLM is explicitly contrived; the altar is the deliberate non-Create path

- from: ars_nouveau:source_gem / boss drop as altar input | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Shrine Altar accepts magical offerings to summon a higher-grade maid — a source gem or boss-drop is the right tribute for an exceptional companion
- from: power-point bottles as ongoing maid upkeep consumable | via: consumption mechanic (upkeep demand) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: maids need power-points to function — a fairy-farm specialist sells bottles to maid-owners; ongoing consumption creates persistent demand
- from: TLM altar / maid via Create routing | via: any Create method | to: create | motif: — | power: — | tone: clash | verdict: REJECT | reason: the altar is the deliberate non-Create path; forcing Create into TLM contradicts its design intent (noted explicitly in dossier)

## appleskin   [anchors: support/QoL (1)]

Zero items, zero recipe types, zero loot. Food-stat HUD overlay. Zero content surface.

- LEAVE — pure client HUD/informational mod; no items, blocks, recipes, or loot; no weave surface. Pairs with the food/diet system but generates no content to route.

## domum_ornamentum   [anchors: decoration/support, MineColonies (1)]

Power-read: Architect's Cutter (registered recipe-type: architectscutter) takes any full block + 1-2 support blocks → ornamental variant (timberframe, shingle, pillar, brick). Everyday–mid tier (construction tool). 100 blocks / 118 items — large deco palette. loot=yes (structures with DO blocks have loot). Primarily a MineColonies dependency.

Method-pull: The architectscutter method accepts arbitrary blocks as material inputs — any mod's stone/wood/metal block can produce an ornamental variant. This is the strongest method-pull surface: route Create-processed or magic-adjacent blocks *through* the Architect's Cutter.

Candidate A — Create via architectscutter consuming Create material outputs, M-04 (light, but cutter is its own method):
- Create-produced stone (andesite alloy, Create's brass-cased stone cosmetics, processed deepslate) run through the Architect's Cutter → framed/shingled deco variants.
- Theme-fit: a Create industrial produces processed stone; DO's cutter shapes it into architectural pieces for colony buildings. Very natural for a colony builder.
- Power-read: everyday–mid (construction material).
- Motif: M-04 (Create recycles deco — technically the cutter is the DO method, not Create's, but the *material* flows FROM Create into DO's method). Actually M-12 is closer: the Architect's Cutter is a processing-chain pull (a foreign material run through DO's method into a finished good). M-04 requires Create's own crushing method; this is DO's own cutter. Correct motif: M-12 (processing-chain pull — Create-output → DO's native method → architectural piece).
- Red-team: Does this add a meaningful cross-system link? The Architect's Cutter is already a MineColonies-adjacent tool. Routing Create stone through it ties Create production to the colony deco chain, making Create's processed materials useful for colony building. Yes — this is a real link.
- ACCEPT

Candidate B — MineColonies / M-28 (colony route):
- DO IS the MineColonies decoration backbone. Every MineColonies colony builder uses it. It's already the colony-production decoration tool.
- The M-28 weave here would be: DO's cutter is the colony-exclusive deco method (only accessible through colony progression / Architect's Cutter recipe, which may be gated behind colony research).
- If the Architect's Cutter recipe is gated behind a MineColonies research step, DO becomes a colony-locked decoration route — making colony progression the prerequisite for high-end architectural blocks.
- ACCEPT — this is a natural M-28 if the cutter is gated behind colony research

Candidate C — survival / loot-seed (loot=yes, DO blocks appear in MineColonies/village structures):
- DO's loot tables are likely MineColonies building loot — exploring abandoned colony buildings yields DO architectural blocks. This is already the natural use case.
- A loot-seed here would mean placing a weave-relevant item (a key, coin, magic reagent) in DO-structure loot — but DO doesn't own freestanding worldgen structures; its loot is attached to MineColonies building schematics.
- This is a MineColonies weave, not a DO weave. REJECT — not DO's to weave.

- from: Create-processed stone (andesite alloy, deepslate bricks, processed stone) | via: domum_ornamentum:architects_cutter | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Architect's Cutter takes Create-processed stone and shapes it into colonial-grade architectural pieces — Create's industrial output becomes the colony's building material
- from: Architect's Cutter gated behind MineColonies research | via: minecolonies research (colony progression gate) | to: economy | motif: M-28 | power: everyday-mid | tone: ok | verdict: ACCEPT | hook: the Architect's Cutter is a colony-unlocked tool — you need a colony to access the most detailed architectural vocabulary, making colony progression the prerequisite for endgame construction
- from: DO structure loot seeding | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: DO doesn't own independent worldgen structures; its loot is MineColonies schematic loot — the weave belongs to MineColonies, not DO

## grimoireofgaia   [anchors: survival (1)]

Power-read: Large bestiary (dozens of mob types). Drops: nuggets/fragments across many materials (mid — farming hostiles), rings (mid-high artifacts), shields (mid), busts/dolls (mid-endgame vanity from mini-bosses), boss drops (endgame — valkyrie/gorgon/minotaur/vampire/sphinx busts + rare loot). c:tags include item/nuggets/diamond + item/nuggets/emerald (significant — these flow into the vanilla economy automatically). loot=yes. Already has inbound weaves: create:emptying (a drop is bottled), farmersdelight:cutting (an ingredient is cut).

Candidate A — magic / occultism:spirit_fire or ars_nouveau:imbuement, M-02 + M-11:
- GoG's numerous mob-drop fragments/nuggets/pieces → spirit_fire transmutation → occult essence / magic reagent.
- The bestiary is mythic (harpies, gorgons, minotaurs, dryads) — their drops have strong thematic resonance with occult ritual ingredients.
- Power-read: fragments are mid (farming common GoG mobs); mini-boss drops (busts) are mid-high. One spirit_fire step for common fragments; a rarer ritual for mini-boss drops.
- Theme-fit: gorgon blood, harpy feathers, dryad essence → occult reagents is mythically coherent. Ars Nouveau's school-magic is a slight tone gap (GoG is darker mythic) but imbuement works. Occultism spirit_fire is the stronger fit.
- Motif: M-02 (mob-drop reagent sink) and M-11 (ritual/transmutation sink).
- ACCEPT (strong — this is the natural weave for GoG)

Candidate B — economy / boss busts as trade goods, M-34:
- Mini-boss busts (bust_gorgon, bust_minotaur, etc.) are rare drops from difficult encounters. A combat specialist farms mini-bosses and sells busts to non-combat players who want them for decoration.
- Power-read: mini-boss bust = mid-high; boss drop = endgame.
- Motif: M-34 (combat-route supply).
- Theme-fit: GoG is explicitly a difficulty layer for combat specialists — its rare drops are meant to flow out of combat to other players. Natural.
- ACCEPT

Candidate C — Create / create:crushing, M-03 + M-02:
- GoG drops metal nuggets/fragments (already tagged c:nuggets/diamond, c:nuggets/emerald — vanilla-compatible). Running GoG mineral fragments through create:crushing to yield dust/crushed intermediate (M-03 ore-doubling analog) or a bonus byproduct.
- Power-read: nuggets are mid-everyday; crushing a fragment into dust is one light step.
- Theme-fit: crushing monster mineral fragments in a Create machine is fine — not exciting but coherent.
- Red-team: GoG already touches create:emptying (a bottle is filled with a drop). Adding create:crushing of its mineral fragments is a natural extension — Create already interacts with GoG content.
- Motif: M-03 (Create ore-doubling — applying to fragment→dust, not ore→crushed, but the same method).
- ACCEPT (light — one crushing step on mineral fragments; no depth issue since fragments are mid)

Candidate D — economy / artifact rings as locked-exclusive trade goods, M-37 or M-29:
- The 6 artifact rings (Ring of Speed/Jump/Haste) are mid-high items with real utility effects. These could be locked behind specific GoG boss-kill progression (research/knowledge gate — M-37), making them flow from combat specialists to buyers.
- Motif: M-34 (combat-route supply — rings flow from fighters to others).
- Power-read: artifact rings are mid-high.
- ACCEPT — ring artifacts as combat-supply economy goods (M-34 extension of the bust route)

Candidate E — REWORK check on existing connections:
- create:emptying inbound (a drop is bottled) — sounds like a reasonable recipe but it's unclear which drop and what the bottle does. If it's just a cosmetic bottle, the weave value is low. If the bottled drop is a magic reagent input, it reinforces M-11. Flagging as "verify intent of the emptying recipe."
- farmersdelight:cutting inbound — an ingredient from GoG is cut via FD's cutting board. This ties GoG to the food/cooking web (survival). Worth verifying what's cut and if it makes culinary sense (harpy feathers → not food; but a GoG ingredient that's food-adjacent like a slime → cutting). Weak if it's just cosmetic cutting.

- from: grimoireofgaia mob fragments / drops (harpy feather, gorgon blood type, minotaur material) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the mythic bestiary's drops are exactly the dark-organic reagents occultism's rituals demand — fragment by spirit-fire into essence
- from: grimoireofgaia:bust_gorgon / bust_minotaur / rare artifact rings | via: combat-specialist trade (loot from difficult mini-bosses) | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: mini-boss busts and artifact rings only flow to people who fight the GoG bosses — a combat specialist corners the supply and trades to non-combat builders who want the decoration or the ring's effect
- from: grimoireofgaia mineral fragments (c:nuggets/diamond, c:nuggets/emerald, material fragments) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crushing a gorgon's mineral fragment yields a small amount of dust and an XP nugget — a Create player processing GoG drops for material scraps; already has a create:emptying touch, so the mod is partially wired to Create
- from: grimoireofgaia:bust_* / rings as ambient sell goods | via: bare sell | to: economy | motif: M-09 | power: — | tone: — | verdict: REJECT | reason: M-09 retired; the sell endpoint is ambient — the M-34 combat-supply framing covers this correctly without a bare sell link
- REWORK — existing create:emptying inbound: verify what drop is bottled and what the bottle's downstream use is; if purely cosmetic the weave has no loop value; if the bottle feeds a magic recipe the connection is sound but should be documented explicitly
- REWORK — existing farmersdelight:cutting inbound: verify what GoG ingredient is cut and whether it connects to the food/diet system; if the cut output feeds a recipe the survival link is real; if it's a decorative cut with no downstream it's an orphaned edge

== CHUNK COMPLETE ==











