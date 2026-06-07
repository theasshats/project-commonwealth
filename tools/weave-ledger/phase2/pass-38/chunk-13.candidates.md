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






