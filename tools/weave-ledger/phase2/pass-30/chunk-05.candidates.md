# Phase 2 candidates — chunk-05

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — zero-surface combat-test prop; single item is a placeable dummy with no material in/out, no loot table, no recipe type. Nothing coherent to weave.

## wits   [anchors: support/debug (1)]
- LEAVE — server command utility; 0 items, 0 blocks, loot=no. Genuine zero-surface library/behavior mod.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Dendro Potion is a tree-growth stimulant; routing it through arcane infusion to become a magic reagent is thematically forced — a growth tonic is agri-science, not arcane. No coherent player "of course" moment. Tone clash between naturalist-rustic and arcane labs.
- from: dynamictrees logs/wood (via tree harvest) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT's log output is already vanilla-tagged wood; Create already mills vanilla logs to pulp/wood chips by default. This is not a new weave — it's the ambient downstream processing that already exists, not an authored connection. No incremental value.
- LEAVE — DT's own seed-conversion methods are an internal vanilla-sapling swap; no foreign-material sink. Logs flow into the vanilla wood economy and Create processes them as vanilla logs already. Dossier note about DT trees being awkward for Create automated harvesters is accurate — forcing a Create edge would be contrived. Genuine LEAVE after red-teaming the two candidates above.

## jei   [anchors: client UI/support (1)]
- LEAVE — zero-surface UI-only mod; 0 items, 0 blocks, loot=no. No content to weave.

## balm   [anchors: support/library (1)]
- LEAVE — multi-loader abstraction library; 0 items, loot=no. Genuine zero-surface library.

## lithium   [anchors: support/performance (1)]
- LEAVE — tick/AI optimization mod; 0 items, 0 blocks, loot=no. Genuine zero-surface performance mod.

## glitchcore   [anchors: support/library (1)]
- LEAVE — Glitchfiend loader-abstraction API; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## shulkerboxtooltip   [anchors: support/QoL (1)]
- LEAVE — client-only tooltip renderer; 0 items, 0 blocks, loot=no. Genuine zero-surface UI mod.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — projectile/ballistics API; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## createpickywheels   [anchors: create (1)]
- from: water-wheel / windmill placement | via: config-tie (biome-gate behavioral) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT — no-motif | reason: The biome-gated power constraint is a genuine survival-flavored design choice (world pushes back on production), but no motif in M-01..M-38 covers a pure behavioral/config gate on generator placement. M-30 is ore-gen → economy chain; M-16 is season-gated ingredient input; neither fits. This is ambient world-design that already functions as intended — it strengthens the Create↔survival feel without a recipe-authored weave. Motif gap noted for Gate-0 consideration; no weave to author.
- OK — the behavioral biome-gate is the mod's entire purpose; it already serves the Create + survival loop by making early power placement-sensitive. No additional authored weave needed or coherent.

## tacz   [anchors: support/combat (1)]
- from: tacz:gun_smith_table (crafting station) | via: tacz:gun_smith_table_crafting (gate inputs behind Create-processed parts — pressed steel/iron sheets, mechanical-crafted components) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: You need the Create spine running before you can build a Gun Smith Table worthy of the pack — firearms ride the industrial tier, not just raw iron.
- from: tacz:ammo / tacz:ammo_box | via: tacz:gun_smith_table_crafting (ammo recipe requires Create-milled gunpowder casings or compressed powder — consumable loop) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ammo is a permanent drain — every firefight eats through your stock, so the Create production line never idles; combat pressure directly fuels manufacturing demand.
- from: tacz:modern_kinetic_gun / tacz:ammo (scarce, combat-specialist output) | via: emergent player trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Not everyone fights — a dedicated armorer who can actually produce guns and ammo becomes the combat-supply specialist other players depend on; the scarcity of Create-processed materials makes this role real.
- from: tacz (aeronautics flavour — vehicle-mounted weapons) | via: no method (TACZ has no native Aeronautics integration; aeronauticscompat covers other turret mods, not TACZ) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: Thematically appealing but TACZ provides no recipe bridge to Aeronautics; aeronauticscompat doesn't cover TACZ weapons on ships. Flavour-only, no authored weave path.
- REWORK: dossier's economy candidate cites M-08/M-09 framing. M-09 is retired; the bare "ammo is sellable → coin" angle is the ambient endpoint, not a weave. Replacing with M-34 (combat-route supply) above correctly captures the economy link as demand-gating rather than vendor-sell.

## createfood   [anchors: survival, create (2)]
- from: createfood high-tier dishes (multi-step Create sequences) | via: cross-route: require a magic-sourced ingredient (e.g. ars_nouveau: Mana Berry / source berry as flavoring, or occultism spirit-infused salt) as a recipe input | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The best pastries need a pinch of arcane — a food specialist has to trade with the magic specialist for that one enchanted ingredient, making the premium dish tier genuinely cross-pillar.
- from: createfood dishes (finished processed foods) | via: farmersdelight:cooking / create:mixing as ongoing consumption — food eaten by players / colony colonists keeps demand alive | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Cooking chains never stop because players eat everything you make; production pressure is self-renewing. (This deepens the existing survival anchor rather than adding a new one, but it formalizes consumption as the demand-renewal edge per M-26.)
- from: createfood basic pastry tier | via: minecolonies (Baker hut produces simple bread/pastries cheaper via colony route) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A colony baker churns out everyday loaves at volume; the Create food chain is still required for the premium tier, so the two routes don't overlap but both feed the economy.
- from: createfood dishes | via: emergent sellable goods (bare "cook for coin" link) | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; bare sellable-goods → coin is the ambient loop endpoint, not an authored weave. The economy link must gate demand (M-26/M-28/M-29 above replace this correctly).
- REWORK: dossier lists "economy via numismatics — finished dishes sellable; baker/cook specialization mints coin from food [M-09 #136-aligned]" as a 2nd-anchor candidate. M-09 is retired; this framing is the rejected ambient-endpoint pattern. Remove from candidate list; replace with M-28 (colony baker route) and M-29 (magic ingredient cross-route) as the valid economy/magic anchors above.
- OK — existing survival + Create anchors are well-founded and match the mod's processing-chain nature.

## spark   [anchors: support/performance (1)]
- LEAVE — server/client profiler; 0 items, 0 blocks, loot=no. Genuine zero-surface diagnostic tool.

## quark   [anchors: support/decoration/QoL (1)]
- from: quark decorative building blocks (vertical slabs, polished variants, brick variants, hedges) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Over-built your Quark-stone manor? Toss the spare brick slabs in the crusher — you get back gravel and an XP nugget, same as any Create deco-recycling. Keeps the resource loop clean.
- from: quark:gunpowder crate / quark:blaze_rod crate (bulk storage blocks for scarce regional drops) | via: create:crushing (unpack crate → 9× material) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Crate unpacking by crafting table (vanilla 9-item reverse recipe) already exists; adding a crusher path for the same result gives no new loop value — it's a redundant path for an item that already unpacks cheaply. Avoid 1:1 round-trip on a non-equivalent route.
- from: quark:ancient_wood / quark:ancient_* (Glimmering Weald cave biome exclusive materials) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ancient wood from a bioluminescent cave biome carries a natural arcane charge — run a plank through the imbuement altar and it becomes an enchanted wood variant used as a magic-circle base or ritual frame; cave exploration earns a magic-build shortcut.
- from: quark building blocks (general) | via: occultism:spirit_fire transmutation | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: Transmuting vanilla-plus building blocks into occult essences is thematically forced — Quark's materials are mundane/naturalist, not spirit-charged. Tone clash between vanilla-plus aesthetic and occult ritual.
- REWORK: dossier's Create candidate is flagged as WEAK (M-04). Elevate to ACCEPT for the decorative-block crushing path (clearly coherent, everyday tier, existing method). The Glimmering Weald → magic weave (M-10) is new; it gives Quark a genuine magic anchor via its unique cave biome content.

## companion   [anchors: support/QoL (1)]
- LEAVE — pure behavior mod for pet safety; 0 items, 0 blocks, loot=no. Genuine zero-surface QoL mod.

## bcc   [anchors: support/modpack-ops (1)]
- LEAVE — version-check handshake utility; 0 items, 0 blocks, loot=no. Genuine zero-surface operations mod.

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine library; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## cristellib   [anchors: support/library (1)]
- LEAVE — structure-config framework library; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — config-definition + GUI library; 0 items, 0 blocks, loot=no. Genuine zero-surface library.

## accessories_compat_layer   [anchors: support/compat-shim (1)]
- LEAVE — Curios/Trinkets → Accessories translation layer; 0 items, 0 blocks, loot=no. Genuine zero-surface compat shim.

== CHUNK COMPLETE ==
