# Phase 2 candidates — chunk-06

## t_and_t   [anchors: survival (1)]
- from: structure loot tables (conquerable forts, ocean sail-ships) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: pillager forts and sail-ships yield coin purses and bounty tokens among their spoils — exploration pays out in the player economy
- from: village structure villagers (16 biome-specific variants) | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); surface for review only — (provisional motif)
- REWORK: existing survival anchor is sound (worldgen/exploration). The loot-seed economy link (M-14) is the natural second and is structurally distinctive — loot from conquerable structures is not trivially "just sell anything," it's a specific loop-closing drop route tied to exploration pressure.

## balm   [anchors: support/library (1)]
- LEAVE — genuine zero-content API library; no items, no methods, no weave surface.

## cmparallelpipes   [anchors: Create (1)]
- LEAVE — single Create fluid-logistics utility tool; no foreign material, no second-pillar weave is coherent.

## mcwroofs   [anchors: support/decoration (1)]
- from: stone/brick roof block variants (600+) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600 block variants make an exhaustive crushing-recipe pass impractical and low-value; a wholesale deco-sweep (covering all Macaw's blocks at once) would be better handled at that scope, not per-mod. Single LEAVE is cleaner.
- LEAVE — decoration palette; M-04 crushing is technically applicable but not worth the per-block cost at this scale without a deco-sweep pass.

## terrablender   [anchors: support/library (1)]
- LEAVE — pure worldgen API library; zero content surface, nothing to weave.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: crab claws (a mob drop currently only used for a vanilla reach-potion brew) become a minor imbuement reagent, threading an otherwise isolated drop into the magic web
- from: Wildfire / Illusioner loot (hostile mob drops, loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: hostile-only mob drops (Wildfire fire shard / Illusioner illusion-dust) seeded as magic reagents in loot tables so combat uniquely feeds spellcraft
- from: friendsandfoes:copper_golem_head / copper button items | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copper_golem_head is a novelty/trophy item; crushing it to copper scrap is mechanically valid but thematically thin — forcing a cute vanilla-faithful mob's head into an industrial recycler tone-clashes; the copper contribution is negligible relative to normal ore sources
- REWORK: existing survival anchor is sound. The two magic weaves above (M-02 crab_claw + M-02 loot-seed for hostile mobs) together give a genuine second anchor via mob combat → magic progression. OK to check that Wildfire/Illusioner loot tables are confirmed before authoring.

## yungsapi   [anchors: support/library (1)]
- LEAVE — pure structure/jigsaw API; no items, no gameplay methods, nothing to weave.

## direct_chute   [anchors: Create (1)]
- LEAVE — single Create logistics block (zinc chute); no foreign material and no coherent second-pillar weave; aeronautics tie would be nominal.

## createfood   [anchors: survival, Create (2)]
- from: createfood finished dishes (pizza, cheesecake, ice cream, etc.) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Every processed food is trivially sellable; this is the saturated pattern the pass explicitly avoids.
- from: createfood:apple_jam_block / createfood jam/preserve bottles | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: concentrated fruit preserves (high-effort Create processing outputs) are arcane infusion ingredients — a culinary-to-magic bridge that feels like "cooking for spellcraft" and isn't trivially sellable
- from: seasonal crop inputs (e.g. seasonal-only fruits/berries from Serene Seasons) → createfood recipes | via: create:mixing / farmersdelight:cooking | to: Create/survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: certain createfood dishes (e.g. seasonal-berry ice cream) require crops only available in summer/spring — seasons gates which dish specializations players can pursue at any given time
- REWORK: existing 2 anchors (survival + Create) are sound and well-integrated. Economy sell is the obvious but rejected pattern (de-emphasis). The two accepted weaves give magic and survival-depth as additional threads without coining the same sellability observation.

## createfisheryindustry   [anchors: Create, survival (2)]
- from: createfisheryindustry:fish_skin | via: create:pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish skin (the peeler's leather-like byproduct) is pressed into a tanned hide intermediate that feeds Create-adjacent armor/book recipes — industrial fishing substituting for cattle farming
- from: createfisheryindustry bait trap catches (mussels, lobster, seafood) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Already has 2 anchors; a bare sell link is the saturated pattern.
- from: createfisheryindustry:harpoon / pneumatic harpoon gun | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: harpoon is a mid-tier tool, not endgame; M-06 is the sequenced-assembly keystone for endgame/flagship items specifically — applying it here mis-costs the tier. A single create:mechanical_crafting recipe is the correct depth.
- REWORK: existing 2 anchors (Create + survival) are sound. The fish_skin → pressed hide link (M-12, ACCEPT) adds depth within Create without forcing a coin tie.

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure food-web glue layer (cross-mod recipe/tag unification); its function is already the inter-weave it performs within survival's food cluster. No distinct second-pillar surface of its own.

## sparsestructures   [anchors: support/worldgen-tuning (1)]
- LEAVE — config-only worldgen-tuning utility; no items, no methods, nothing to weave.

## rechiseled   [anchors: support/decoration (1)]
- from: rechiseled chiseling recipe groups | via: rechiseledcreate Mechanical Chisel (already in pack) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel (companion mod already installed) runs rechiseled's chiseling recipes on Create rotation — the decoration palette is directly powered by the Create spine, giving every builder an incentive to have SU running
- REWORK: with rechiseledcreate in the pack this Create anchor is already structurally present; confirm rechiseledcreate is wired (dossier notes it's the hook point). If rechiseledcreate is not separately dossier'd, this candidate covers the connection.

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE → item charge) applied to irons_spellbooks magic gear / arcane foci | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: mages recharge their arcane focus rings and wands at a Create-powered tesla coil or charging station — electricity becomes a magic infrastructure requirement
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the processing chain (seeds → seed_oil → bioethanol) is real, but it stays entirely within Create's own energy loop and doesn't feed a new system; the farming tie is real but the output (FE fuel) never leaves Create's orbit, so it doesn't add a distinct survival anchor — it's depth within Create.
- from: createaddition electrum ingot | via: create:pressing → electrum plate | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: electrum is already a Create-family material (Create Addition owns it); pressing it within the same mod is not a cross-system link — stays within Create. No new anchor.
- REWORK: existing Create anchor is sound and core to the electrical layer. The M-17 charging link (ACCEPT) threads magic as a genuine second anchor — magic gear needing FE recharging is a structural dependency, not mere sellability.

## vc_gliders   [anchors: aeronautics (1)]
- from: vc_gliders:paraglider_diamond / _netherite (upper tiers) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the diamond and netherite paragliders require a Create mechanical crafting table to assemble (precision-engineered frame) — personal flight gear earns its place on the tech spine
- from: vc_gliders:paraglider_iron (base tier) gating | via: create:pressing (reinforced-paper feedstock) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: routing reinforced paper through create:milling/pressing for the basic glider tier violates the "never gate a basic/everyday component behind a complex recipe" rule — the iron glider is early-access gear, should stay reachable without Create infrastructure.
- REWORK: existing aeronautics anchor is sound. M-05 (mid/upper tiers only via mechanical_crafting) is the right depth — it gates the strong tiers on Create without blocking the entry-level glider.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (courier logistics system built on Create Logistics) + aeronautics (airborne drone delivery = the logistics/transport arm). No forced third weave; economy adjacency (delivering goods between players) is infrastructure, not a coin-sink loop that needs a separate anchor. Both existing anchors are load-bearing and distinctive.

## patchouli   [anchors: support/library (1)]
- LEAVE — documentation library; no material surface. Its player-visible output (guide books) is consumed by dependent mods' UX, not a weave candidate.

## irons_spellbooks   [anchors: magic, Create (2)]
- from: irons_spellbooks:mithril ore | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril ore is crushed in a Create crusher for doubled output + a byproduct — the magic spine's signature metal runs through the industrial ore-doubling loop
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement (M-01 bond) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence (Iron's magic currency, already reserved in WEAVE-LEDGER §2) bonds to ars_nouveau:source_gem so the two magic mods' currencies convert — mages can convert between systems rather than grinding both independently
- from: irons_spellbooks hostile mob spawns (apothecarist / ice spider) loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: apothecarist and ice spider drops seeded as reagents for Occultism rituals or Ars imbuements — magic enemies gate magic progression
- from: irons_spellbooks spell scrolls (one-shot consumable) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Scrolls are trivially sellable items; this is not a structurally distinctive economy anchor.
- REWORK: existing 2 anchors (magic + Create via create:filling/emptying) are sound. Three ACCEPT candidates (M-03 mithril crushing, M-01 currency bond, M-02 loot-seed) deepen the weave within the existing two pillars and add organic-to-magic routing. All three survive red-team: mithril crushing fits the ore-doubling established pattern; arcane_essence ↔ source_gem is exactly the M-01 motif's purpose; apothecarist/ice spider as magic-combat-gates-magic-progression is thematically obvious and player-legible.

## entity_model_features   [anchors: support/client-rendering (1)]
- LEAVE — client-side model-replacement engine; no items, no methods, no gameplay surface.

## lithium   [anchors: support/performance (1)]
- LEAVE — server/tick optimization; no content, nothing to weave.

== CHUNK COMPLETE ==
