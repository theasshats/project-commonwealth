# Phase 2 candidates — chunk-06 (pass-19)

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager transport) | via: utility synergy (no recipe method) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no method to route through; "carries villagers to MineColonies" is utility flavor, not a material-flow weave; no motif fits a pure tool with no crafting throughput
- from: moblassos:hostile_lasso (monster capture) | via: utility synergy | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: monster-lasso captures mobs at <50% HP but produces no material output usable by a second system; any edge is invented content the mod doesn't have
- LEAVE — item-utility mod; 13 items are all lasso variants (tool + filled form), no block, no loot table, no recipe-type. No material flows through it. Survival anchor is itself loose (transport QoL). Forced edges would invent content.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit is a foraged desert crop — milling it for a dye pigment or food powder is the same loop as milling wheat/cocoa; one light step, everyday tier, desert-regional flavor; routes plus-namespace output through Create's milling method
- from: dynamictreesplus:brown_mushroom_cap / red_mushroom_cap | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mega mushroom caps from procedurally-felled mushroom trees → milled into mushroom powder (food intermediate or dye); bulk forage feeding Create's processing web; same M-12 pattern as other organic crops
- from: dynamictreesplus:saguaro_fruit | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: everyday forage good is too cheap to be a meaningful sell-good; M-09 suits higher-effort luxury goods (wine, processed cheese); a raw fruit as coin is trivially farmable and undermines scarcity. Keep as a Create-milled intermediate (accepted above) rather than a direct coin item
- REWORK: existing survival anchor is fine; no prior weave connections to flag.

## glitchcore   [anchors: support/library (1)]
- LEAVE — zero blocks, zero items, zero loot; pure loader-abstraction library backing Glitchfiend mods (Serene Seasons, TerraBlender, Biomes O' Plenty). No player-facing surface. No weave possible or warranted.

## dynamic_fps   [anchors: support/performance (1)]
- LEAVE — client-side FPS throttling utility; zero items, zero blocks, zero loot, zero recipe-types. No content surface. Performance infrastructure only.

## create_jetpack   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (pneumatic flight is a native Create brass/air extension) + aeronautics (personal-flight arm of the mobility pillar) are the correct two anchors and cover the mod's full content. The `copy_components_mechanical_crafting` recipe-type preserves NBT on upgrade; that's already inbound Create method use. No forced 3rd anchor needed.
- from: create_jetpack:netherite_jetpack | via: M-15 boss-key unlock | to: Create/survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: lava-traversal flight is an endgame capability; gating the netherite jetpack behind a boss drop (e.g. a Cataclysm boss drop as a heat-resistance component) is thematically coherent and satisfies the DESIGN's boss-key unlock pattern — depth through steps, not inflated cost
- from: create_jetpack:jetpack (brass tier) | via: M-06 sequenced-assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: a pressurised flight harness assembled in stages on a sequenced-assembly line (backtank shell → valve fittings → harness strap) feels like a real industrial product and adds Create depth to a currently vanilla-crafting recipe

## wits   [anchors: support (1)]
- LEAVE — zero items, zero blocks, zero loot; a server-side `/wits` command that identifies structures. No content surface; no weave warranted.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj:blahaj (dyeable wool plush) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — crushing the wholesome plushie back to wool + XP is mechanically valid under M-04 but culturally corrosive to the mod's entire vibe (cozy/queer-friendly decor). A player would find it jarring, not funny. Red-team kills it.
- LEAVE — 31 plush blocks, all cosmetic. loot=yes but the loot is just the block itself. No material to route; the mod's entire value is decorative/social. Forcing a weave here is the canonical failure mode the briefing warns against.

## citadel   [anchors: support/library (1)]
- LEAVE — library for sbom_xela's mods (Alex's Mobs, etc.). 1 block (lectern) and 5 items are all dev-tooling/debug (citadel_book, debug, effect_item, fancy_item, icon_item) — no survival content. No weave warranted.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork crushed/molten metals (full roster) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: createmetalwork is *the* high-yield ore-processing layer; the processed metals (molten ingots at bonus yield) are the natural mint feedstock — scarce regional ore → Create melt/cast → coin; the causal loop node: scarcity → production → economy; exactly what M-08 describes
- from: createmetalwork crushed magic-metal ores (palladium c:tag, future occultism/galosphere ores) | via: create:crushing | to: magic | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: magic-mod ores (galosphere palladium, future occultism ore) pass through createmetalwork's crush+melt doubling like any other metal; magic producers gain a Create-processing on-ramp for their metals without inventing a new method — one step, correct depth for everyday feedstock
- REWORK: existing Create anchor is well-grounded. The two accepted weaves above add economy and magic anchors, bringing it to 3 systems. No existing connections to flag as weak.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- from: Ender Dragon fight (harder, multi-phase) | via: loot-seed — seed dragon loot table with a boss-key drop | to: Create/economy | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the harder dragon rewards harder; seeding a unique "dragon scale fragment" or "end-crystal shard" into the dragon's drop table (a datapack loot edit) gives Create or magic a gated endgame unlock — coherent because the fight is genuinely harder now and the drop is the payoff; loot=yes (dossier confirms loot table exists)
- REWORK: loot=yes on a mod whose dossier says "Does NOT change dragon drops" — the dossier reads "no rewards" but the AUTO digest flags loot=yes. The loot table exists; whether it has custom drops is the open question. The loot-seed candidate above is a Phase-3 datapack add (seed the table we author), not relying on existing custom drops. The existing survival-only anchor is the correct anchor for the difficulty role; the accepted loot-seed adds a second.

## gravestone   [anchors: survival (1)]
- from: gravestone:obituary item | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: the obituary is a log-of-death paper item; infusing it as a magic reagent would make "death paperwork" a magic ingredient — tone is borderline dark-whimsy but the power-read fails: it's an everyday drop generated every death and would be trivially farmable as a reagent; depth-scaling rule says everyday items get one light step, not a locked infusion. Rejects on balance.
- from: gravestone:gravestone block | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing gravestones for stone/gravel is M-04-eligible mechanically but tonally terrible — a mod expressly about respectful death recovery; crushing its tombstone block would feel morbid in a way that alienates rather than amuses. Tone clash.
- LEAVE — death-recovery utility. 1 block (gravestone), 2 items (gravestone + obituary). No coherent 2nd-anchor route that survives red-team.

## tacz   [anchors: support/flavor (1)]
- from: tacz gun_smith_table_crafting inputs (metals, components) | via: tacz:gun_smith_table_crafting gated on Create-pressed sheets | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: guns and ammo are made at the Gun Smith Table; requiring Create iron/steel sheets and mechanical-crafted components as inputs puts firearms squarely on the Create tech spine — you can't arm up without processing ore; scarcity feeds into combat supply
- from: tacz ammo (consumable) | via: numismatics sell/price as traded war materiel | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: ammo is a consumable produced at industrial scale; priced in coin it becomes the pack's recurring military economy — a production-to-economy loop (manufacture ammo → sell or trade for coin); keeps combat from being free and drives demand for metals
- from: high-tier tacz guns (endgame variants) | via: create:sequenced_assembly keystone | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: military-grade precision firearms assembled in stages on Create's sequenced assembly line (receiver blank → machined barrel → assembled body) is thematically on-point for an industrial-realism framing; depth through steps for endgame items
- from: tacz guns mounted on aeronautics ships | via: thematic/utility synergy | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: TACZ has no native aeronautics/Create ship integration; aeronauticscompat covers other turret mods, not TACZ; "flavour adjacency" is explicitly not a weave; no motif fits the gap
- REWORK: existing "support (1)" anchor is undersold — tacz has a `gun_smith_table_crafting` recipe type and genuine combat/economy content. The accepted links above move it to Create + economy (2+ anchors). Suggest updating the dossier anchor label to reflect combat/production rather than "support/flavor."

## dataanchor   [anchors: support/library (1)]
- LEAVE — developer data-attachment and networking library (Corgi_Taco); zero blocks, zero items, zero loot. Pure infrastructure dependency. No content surface.

## attributefix   [anchors: support/library (1)]
- LEAVE — pure attribute-cap bugfix library (Darkhax). Zero blocks, zero items, zero loot, no recipes. No content to route.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime mod; zero blocks, zero items, zero loot. No content surface. Performance infrastructure only.

## betteroceanmonuments   [anchors: survival (1)]
- from: ocean monument chests (loot=yes) | via: loot-seed — seed coin or magic reagent into monument chests | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: monument chests reward deep aquatic exploration; seeding Numismatics coin (prismarine-tier payout) into the loot tables makes ocean diving economically meaningful — exploration feeds the economy loop; YUNG's expanded monument has more chest loot sites to seed
- from: ocean monument chests | via: loot-seed — seed a scarce magic reagent (e.g. source gem fragment, arcane shard) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-02 is specifically a mob/boss *drop* reagent sink; a chest loot-seed into a structure doesn't match the motif's mob-drop framing; prefer M-08 coin for this structure and reserve M-02 for guardian drops if needed; avoids double-dipping the same structure with two unrelated systems
- REWORK: existing survival anchor is fine; no prior connections to flag.

## polymorph   [anchors: support/compat (1)]
- LEAVE — recipe-conflict resolver UI mod; zero blocks, zero items, zero loot, no recipe-types. Pure compat infrastructure. No content surface.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_iron (base tier) | via: create:pressing → crafting (reinforced paper from Create-pressed leather/iron) | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: gliders are built from "reinforced paper" (paper + tier metals); routing reinforced paper through create:pressing (pressing leather + paper into a reinforced sheet) means even early flight gear touches the Create spine — coherent, one light step for an everyday mobility item
- from: vc_gliders:paraglider_diamond / netherite (high tiers) | via: create:mechanical_crafting | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: diamond and netherite gliders are meaningfully powerful mid-game gear; applying Create's mechanical_crafting (deploy-application of a netherite trim / reinforced frame) gates higher tiers on Create infrastructure — M-20 is the light-step upgrade sibling of M-06, right for this tier
- from: vc_gliders:copper_upgrade | via: create:item_application / deploying | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: the copper upgrade is exactly the "deploy onto base to upgrade" pattern M-20 describes; applying it via a Create deployer (copper sheet deployed onto iron glider) is a one-step, coherent Create tie for an everyday upgrade item
- REWORK: existing aeronautics-only anchor is narrowly correct (personal flight = aeronautics mobility arm) but the mod has no second anchor despite clear Create-gating potential. Accepted weaves above add Create. No existing connections to flag as wrong.

## txnilib   [anchors: support/library (1)]
- LEAVE — multiversion code library (Txni's mods dependency); zero blocks, zero items, zero loot. Pure developer infrastructure.

## endermoon   [anchors: survival (1)]
- from: endermoon Ender Moon event (mass enderman spawn) | via: enhanced ender-pearl supply during event → occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Ender Moon floods the night with endermen; the mass-drop of ender pearls during that event is a lunar-gated supply surge — a perfect M-22 lunar reagent: ender pearls harvested under the Ender Moon as a premium arcane input (transmuted via spirit_fire into a richer essence than normal pearls yield). The event itself is the gate; no items of its own needed — the weave acts on the drop the event enables.
- from: endermoon Super Ender Moon (all-mob spawn surge) | via: combat pressure → bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Super Ender Moon is a mob-surge event that creates natural pressure to fight; a bounty board active during that event (board pays coin for mob kills — M-14 bounty→drop economy) turns the combat pressure night into an economic one: survive the surge, turn the drops in for coin; survival → economy loop
- REWORK: survival-only anchor is accurate; the mod has zero items of its own so any weave must be framed as "the event enables this drop/pattern" (which both accepted candidates do correctly). No prior connections to flag.

== CHUNK COMPLETE ==
