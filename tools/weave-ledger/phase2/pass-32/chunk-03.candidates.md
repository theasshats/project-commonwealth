# Phase 2 candidates — chunk-03

## startuptime   [anchors: support/perf-diagnostic (1)]
- LEAVE — zero-surface code library (no items, no blocks, no loot, no in-world method); boot-time logger only. Nothing to route.

## create_compressed   [anchors: Create (1)]
- from: create_compressed crushed-ore pile blocks | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: the pile blocks are storage aliases for Create crushed ore — they don't gate regional demand, they just compress it; M-30 requires the input itself to be region-locked, which it already is in Create's ore layer; adding loot-seed of pile blocks doesn't add a new scarcity link
- from: create_compressed:cogwheel_block / mechanism_block | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: the cogwheel_block is already a Create internal; routing a Create-internal compressed storage block into aeronautics hull recipes would double-penalize the player (compress 9 cogs just to use them as a hull input); M-23 is for fabricated structural alloy, not re-compressed Create intermediates
- LEAVE — Create-internal QoL/storage layer. Its consumes/outputs are exclusively Create's own intermediates; no foreign material surface to weave. Dossier correctly notes "nothing to wire."

## mutantszombies   [anchors: survival (1)]
- from: (no drops) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: loot=no confirmed in jar digest — no loot tables registered; there is no drop surface to seed. Cannot use loot-seed without a loot table.
- from: harder zombie variants (pressure) | via: combat difficulty → demand for weapons/armor | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: M-34 is "boss/danger drop farmed by combat specialist → traded"; mutantszombies has no drops, so there is no tradeable output from the combat encounter — the loop's supply side is absent. Raising ambient difficulty is an indirect M-34 precondition (more danger = more demand for arms), but that demand exists regardless of this mod.
- LEAVE — genuine zero-material surface. 7 biome-modifiers raise spawn density, which raises survival pressure, which is its contribution; no item/drop to route anywhere without fabricating a connection.

## create   [anchors: Create (1) — the method library]
- LEAVE — Create IS the hub; it is the method library other mods weave into. Dossier correctly marks it N/A as a weave recipient. No edges authored consuming Create itself.
- OK — connections sound (Create anchors all productive motifs M-03..M-08/M-12/M-13/M-15/M-16/M-19/M-20/M-23/M-24 by being the method host; it does not need a second anchor by design).

## kubejs   [anchors: support/tooling (1)]
- LEAVE — the scripting engine that implements weaves, not a weave target. No items, no loot, no content surface.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure config API library; zero items, zero blocks, zero gameplay surface.

## necronomicon   [anchors: support/library (1)]
- LEAVE — pure code library (Necronomicon API); zero items, zero blocks, zero content surface.

## chat_heads   [anchors: support/QoL-client (1)]
- LEAVE — client-only chat-UI cosmetic; zero items, zero blocks, no loot, no in-world interaction.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a ginger mill produces spice dust that feeds the Create food-processing chain — the baker's windmill has a reason to run year-round, not just harvest week
- from: snowyspirit:ginger (c:crops/ginger) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is a survival↔survival link (both anchors survival) — M-12 requires the processing to advance the loop to a second system; farmersdelight cutting keeps it within the same anchor tier. The milling candidate above (→ Create) is the valid version.
- from: snowyspirit:eggnog / gingerbread_cookie | via: Serene Seasons winter gate | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger only crops in autumn/winter under Serene Seasons, so the seasonal reagent is naturally scoped — the Create spice-mill has a production window, not continuous throughput
- from: snowyspirit:candy_cane / gumdrop blocks (loot=yes) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: clash | verdict: REJECT | reason: candy decor is festive flavor, not a combat-supply context; M-34 is for boss/danger drops farmed by a combat specialist; candy loot in chests has no combat-supply narrative
- from: snowyspirit gingerbread build set | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (Create recycles deco) applies to metal/stone deco blocks crushing back to raw + XP nugget; gingerbread is an organic food-material deco — crushing baked sugar to recover raw ingredient is coherent but the output (flour/sugar) is too trivial to be a useful intermediate; no meaningful loop advancement
- REWORK: dossier 2nd-anchor candidate cites M-09 (luxury→coin) for gingerbread/candy as economy weave — M-09 is **retired**; that candidate is dead. The M-16 seasonal-reagent candidate survives (cited above). The "aeronautics via sled" candidate is correctly weak — LEAVE as-is.

## minecolonies_compatibility   [anchors: survival, Create (2)]
- OK — connections sound. Already bridges colony workers to Create Stock Link (Create anchor), IE farming (survival anchor), TaCZ (combat), and storage networks. Two pillars firmly established. No forced third edge warranted.
- REWORK: dossier notes "its whole job is wiring MineColonies into Create/IE/storage; no new edge to force" — correct. The economy pillar is worth considering: colony workers producing bulk crops/materials (via M-28 colony route) that then feed player trade IS an economy link, but that's the MineColonies mod itself carrying it, not this compat layer. No new candidate here.

## createblockchain   [anchors: economy, Create (2)]
- from: createblockchain:currency_miner (FE input) | via: createaddition:charging (FE from scarce processed metal) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the currency miner's FE budget traces back through Create-Addition electricity to a regional metal (zinc/copper processed into generators) — the coin supply is ultimately denominated in the pack's scarcity foundation, not free energy
- from: createblockchain:mining_core (worldgen geode, ~1 per 30 chunks) | via: regional scarcity → coin supply cap | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: mining cores are a geode drop that effectively caps coin production per region — the economy's money supply has a geographic ceiling, creating cross-region demand for cores
- from: createblockchain:piggy_bank (loot=yes, chest loot) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks seeding coins into chest loot is an NPC faucet pattern (coins from worldgen/chest, not from player production) — this contradicts the player-run economy ruling even if it rides M-08's label. Coin should enter circulation only via player-run minting.
- REWORK: dossier anchor note says "it is the money FAUCET for Numismatics" — this framing is problematic under the player-run economy ruling. The FE→coin minter is acceptable as a *player-operated* facility (a specialist runs the miner using their FE infrastructure), but the piggy-bank chest-loot coin drop is a passive worldgen faucet that undermines player-minted scarcity. Flag for config review: piggy bank coin drops should be disabled or replaced with core fragments so loot feeds the miner (not the wallet directly).

## blueprint   [anchors: support/library (1)]
- LEAVE — code library (Team Abnormals framework); one trivial template_chest item that carries no weave value. Sanctioned support role.

## companion   [anchors: support/QoL (1)]
- LEAVE — behavior-only pet-safety mod; zero items, zero blocks, zero loot.

## kambrik   [anchors: support/library (1)]
- LEAVE — Kotlin dev-framework library; no gameplay surface.

## zeta   [anchors: support/library (1)]
- LEAVE — Quark's module framework; no player content.

## recipe_integration   [anchors: support/connective-layer (1)]
- from: recipe_integration cross-mod edges (create:milling/mixing/pressing, occultism:crushing, ars_nouveau:scry_ritual fire under this modlist) | via: audit existing triggered recipes | to: Create/magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: recipe_integration is firing an unknown subset of its 3,700+ recipes given the pack's modlist — auditing which routes are actually active (and removing ones for uninstalled mods that might shadow intended KubeJS overrides) is a necessary weave-hygiene action; the active create:milling/pressing routes advance M-12 for any installed mod material they cover
- from: recipe_integration c:tags for uninstalled mods (aether, mekanism, MI, GT…) | via: n/a | to: n/a | motif: no-motif | verdict: REJECT | reason: these c:tags are inert (mods not installed); they are dormant but could conflict with KubeJS tag-overrides; flagged as a hygiene issue, not a weave candidate
- REWORK: dossier anchor is "support (library / recipe-bridge)" — this undersells it. Its active routes ARE weaves already authored (M-12 processing chains); the pack should audit which recipe_integration paths fire and whether any duplicate or contradict KubeJS overrides. Not a new anchor, but the hygiene recommendation is Phase-3 actionable.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo casings | via: player trade / aeronautics bulk delivery | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced brass ammo is a consumable manufactured good — an arms-specialist sells rounds to non-combat players; the aeronautics arm ships bulk crates between bases, so ammo logistics is a natural M-34 + M-31 cross
- from: createimmersivetacz:twelve_gauge_shell (consumable ammo) | via: combat attrition | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: ammo is spent in every PvPvE engagement — demand never zeroes out; the arms factory can't stockpile its way out of production; this is the loop's demand-renewal edge for the combat system
- from: createimmersivetacz:gun_barrel / firing_mechanism | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the multi-stage gun-part assembly is already a sequenced_assembly chain — cite M-06 explicitly; gun parts are mid-tier Create keystone items
- from: createimmersivetacz ammo (gunpowder fluid) | via: magic/alchemy | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: nitropowder/gunpowder as a magical reagent feels genre-discordant (industrial explosive ≠ arcane reagent); the tonal clash is real — a medieval fantasy magic pillar consuming industrial nitro-fluid has no sensible player narrative
- from: createimmersivetacz:primer (andesite alloy input) | via: create:mechanical_crafting | to: Create | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: andesite alloy is an everyday Create basic — this is already the existing Create anchor (ammo IS built from Create materials), not a cross-route dependency forcing two specialists to trade; it doesn't add a second pillar
- REWORK: dossier 2nd-anchor candidate cites M-09 (luxury→coin) — M-09 is **retired**. The correct framing is M-34 (combat-supply) + M-26 (consumption sink), both accepted above.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/ballistics API library; no items, no loot, no gameplay surface. Serves Create Big Cannons indirectly.

## sounds   [anchors: support/client-polish (1)]
- LEAVE — client-only audio overhaul; zero items, zero blocks, no in-world content.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction loot (shields, armor, weapons — loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: faction structures (Outpost/Keep) hold gear that combat specialists raid; the drops are traded to non-combat players as crafted-equivalent gear, making conquest a supply source for the broader economy
- from: valarian_conquest:armorsmith station | via: create:mechanical_crafting or create:pressing (gate station on Create steel plates) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the armorsmith's bench is the gating method for faction armor — requiring a Create-processed structural plate (e.g. steel sheet from TFMG or iron sheet from create:pressing) ties martial gear to the tech spine
- from: valarian_conquest citizenship items (faction allegiance gates) | via: Numismatics mercenary-hire trades | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: mercenaries are hired labor — a combat-specialist faction member charges coin for escort/patrol; the service is player-to-player (player owns the mercenary contract, other player pays), which is exactly the M-33 service-for-hire model
- from: valarian_conquest faction gear | via: KubeJS recipe gating | to: economy | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: gating faction gear on Create parts is already covered by M-05 (armorsmith station gating above); adding a cross-route M-29 on top would double-layer the dependency without a distinct second specialist entering the chain — redundant with the accepted M-05 candidate
- from: valarian_conquest:*_banner + deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing faction banners/wool for raw fiber feels tonally incoherent with the medieval-martial theme (recycling your war banner for cotton); the output (string/wool) is trivially obtainable; no loop advancement
- REWORK: dossier 2nd-anchor candidate cites M-09 (economy via numismatics, mercenary hire) — M-09 is **retired**. The correct economy framing is M-33 (service-for-hire), accepted above. The M-05 Create-gating candidate survives with the armorsmith station pivot.

== CHUNK COMPLETE ==
