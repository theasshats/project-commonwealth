# Phase 2 candidates — chunk-02

## mutantszombies   [anchors: survival (1)]
- LEAVE — no items, no drops, no material outputs; only spawn-egg registrations. Zero method-routing surface. Forcing any edge would manufacture a connection that does not exist.

## sereneseasons   [anchors: survival (1)]
- from: season_sensor redstone signal | via: Create gearshift / contraption logic reading sensor output | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: the seasons don't just slow crops — the farm itself switches what it grows; a Create contraption reads the season_sensor and swaps crop output or opens greenhouse shutters automatically.
- from: out-of-season produce (any crop stunted to rare outside its season) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the scarcity is ambient/soft (any player can greenhouse-glass around it), so the coin payoff would be trivially bypassed; it's a flavour note, not a load-bearing edge. Revisit only if greenhouse glass is gated or expensive in the config.

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:obsidian_heart / blazing_eye | via: create:sequenced_assembly (as a required input stage) | to: Create | motif: M-15 + M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the pack's stated design rule — "complex Create tech unlocks via boss drops" — is realized directly; the obsidian_heart or blazing_eye becomes the irreplaceable input that gates the highest-tier Create machine or component.
- from: bosses_of_mass_destruction:ancient_anima / void_thorns (Void Blossom drops) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: void thorns and ancient anima read as arcane-dark materials; routing them into a top-tier imbuement or ritual makes the magic spine's peak recipe a boss-progression gate, not a grind gate.
- from: bosses_of_mass_destruction boss drops (any) | via: numismatics sell / bountiful bounty | to: economy | motif: M-14 (provisional) | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional (deferred to 0.9 economy update); boss reagents are reserved as boss-key gate items — routing them as coin fodder competes with M-15 boss-key use and risks deflating the gate. Better to let M-15 + M-10 carry the weave.

## t_and_t   [anchors: survival (1)]
- from: t_and_t structure loot tables / village chest loot | via: numismatics (coin in loot, or structure-villager trades priced in coin) | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is explicitly provisional and leans no; the maintainer wants player-run currency, not injected coin sources seeding the economy from worldgen loot. Flagging the candidate for the 0.9 economy review rather than accepting.
- from: t_and_t village variants (natural hub structures near player bases) | via: MineColonies — conquerable forts/towers as viable colony-founding locations | to: Create (via MineColonies colony unlock) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: this is a worldgen-narrative link, not a method-routing; no registered recipe-type carries it, and "place colony here" is player choice, not a designed edge. No motif → reject.
- LEAVE — pure worldgen mod with zero item/block outputs to route. The only coherent second-pillar angle (economy via villager trade or loot) is gated by M-21's provisional/leans-no status. Revisit at 0.9 economy pillar milestone.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical mushroom caps (e.g. agarikon, bay_bolete, autumn_skullcap) | via: farmersdelight:cooking or extradelight:oven / melting_pot | to: Create (food processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the pack's cooking chain (FD + ExtraDelight) pulls foraging into automated food production — a mushroom grower feeds the kitchen, not just the hunger bar.
- from: mushroomquest effect-bearing / mythical caps (deadly or rare-tier) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a deadly mushroom whose effect is "mind-altering or life-stealing" is a natural arcane catalyst; transmuting it via spirit-fire into an essence or using it as an imbuement ingredient gives the mycology mod a magic seam without forcing it. Power is mid (not endgame) — keep it one light step, not a sequenced chain.
- from: mushroomquest rare mushrooms | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the farm/food chain already absorbs the rare drops via M-12 cooking; adding a coin sell on top isn't wrong, but it's a weak second edge when M-12 already gives a food→Create weave. The economy angle works better as a pack-config seller note, not a designed recipe edge. Revisit at 0.9 if the economy pillar needs more commodity variety.

## createmetalwork   [anchors: Create (1)]
- from: createmetalwork processed molten metals (molten_steel, molten_brass, molten_netherite, molten_platinum, etc.) | via: numismatics mint (coin from processed scarcity) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: smelting raw ore into molten ingots via Create is already the effort — minting coin from the refined output closes the Create→economy loop that M-08 is designed for. The ore-doubling yield makes the mint non-trivial but not punishing.
- from: createmetalwork c:crushed_raw_materials/* (crushed palladium, occultism metals if present, etc.) | via: create:crushing→occultism:ritual or ars_nouveau:imbuement (crushed magic-metal → ritual input) | to: magic | motif: M-03 / M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the crushed form is the natural mid-step before magic refining; routing crushed palladium or mythril through a ritual makes the metallurgy-magic seam tangible and gives magic users a reason to engage the Create ore pipeline.

## solonion   [anchors: survival (1)]
- from: solonion:golden_lunchbox (the top-tier food container) | via: create:mechanical_crafting (gate behind a Create-assembled component) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the best food-management tool shouldn't be a straight crafting-table upgrade — making it a Create mechanical-crafting output ties personal survival quality-of-life to the tech spine and rewards the player who bothers to set up the machine.
- from: solonion lunchbox tier upgrades (lunchbag → lunchbox → golden_lunchbox) | via: create:deploying / item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the upgrade chain is already handled by solonion's own `upgrade_food_container` recipe-type; duplicating it as a Deployer step adds friction without a clear player payoff, and M-20 warns against using the deploy-upgrade motif for non-flagship items. M-05 for the golden tier is the cleaner, single edge.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure glue/bridge mod (no items, no blocks, no methods of its own). It IS the M-12 food-web unification in practice; adding a weave "on top of" a glue mod would be adding a weave to the food mods it connects, not to this mod. Those weaves belong on the food-source mods themselves.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a crab claw that extends reach is already halfway to a magic ingredient — transmuting it via spirit-fire into an essence (or as an imbuement input for a reach/extension glyph upgrade) is the kind of "of course" routing M-02 is for; combat drops become magic feedstock.
- from: friendsandfoes copper deco set (copper buttons, lightning rods, copper_golem_head — all copper-tagged blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: this is the thinnest possible weave — crushing decorative copper back to nuggets adds no player agency that the vanilla copper path doesn't already provide. The "recycles deco" motif is meant for mods with a meaningful deco output that the player actively wants to un-build for materials; a few copper button variants don't rise to that bar. Red-team: a player would ask "why does this deserve a Create recipe?"; no good answer.
- LEAVE (for a stronger 2nd pillar) — the crab_claw→magic (M-02) edge is accepted and sufficient. The copper-deco angle is rejected as too thin. The mod is deliberately vanilla-balanced; over-connecting it dilutes the design.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single-item builder QoL utility (two filter items that randomize Deployer placement). No material outputs, no consumables, no methods. Any 2nd-pillar edge would be forced onto what is essentially a configuration tool for an existing Create mechanic.

== CHUNK COMPLETE ==










