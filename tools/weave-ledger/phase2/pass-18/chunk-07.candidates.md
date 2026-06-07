# Phase 2 candidates — chunk-07

## libipn   [anchors: support/library (1)]
LEAVE — genuine zero-content code library (GUI/config/logging APIs for IPN; registers no items, blocks, methods, or loot tables). Nothing to route.

## jei   [anchors: client-only UI/support (1)]
LEAVE — recipe-viewer UI library; zero items, zero loot, zero methods. Load-bearing as the pack's Create-compat viewer (EMI cannot render Create processing recipes — see CLAUDE.md) but has no content surface to weave. Nothing to route.

## ctov   [anchors: survival (1)]

Power-read: ctov is a structure-generation-only mod (datapack, 0 items, 0 blocks of its own) with loot=yes — vanilla-style chest loot in its 37 village/outpost variants. The loot tables are the one and only content surface. By the briefing: "A boss/structure feeding coin (M-08/M-14), magic reagents (M-02), or a progression key (M-15) is a REAL candidate — do NOT LEAVE a loot-bearing structure mod just because it has no recipes."

Theme-fit / red-team: ctov is a *village* mod (inhabitants, craftspeople, trade hubs) — seeding coin, recipe books, or trade tokens into its chests reads as completely coherent (villagers handle commerce). Seeding raw boss-gating items would be arbitrary (no bosses live here). Seeding Create schematic scrolls or MineColonies charter starters is thematic.

- from: ctov chest loot | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: village chests already feel like economic nodes — a coin or two (Numismatics spur/cog) in the tavern or market chest is the most natural discovery possible; turns exploration of villages into a small economy on-ramp.
- from: ctov chest loot | via: loot-seed | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (trade-seam to economy via villager profession) and maintainer leans no; also ctov does not register new villager professions, so the mechanic doesn't fit the motif. Drop.
- from: ctov chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: M-02 targets *mob/boss drops* specifically being given a magic use; the loot here is a structure chest, not a mob drop — motif is a stretch. The correct framing is loot-seed → M-14 (coin), not manufacturing a magic-reagent drop into a village chest. Red-team: also tone mismatch — a village shop chest stocked with Occultism spirit shards feels off.
- from: ctov chest loot | via: loot-seed | to: survival (MineColonies) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: seeding MineColonies recruitment scrolls into ctov chests is thematic (a colony starts from a found blueprint) but no motif covers "structure-loot to MineColonies progression" — flagging no-motif per the briefing, needs Gate-0 motif before authoring.

REWORK: existing anchor is survival (1). The single loot-seed to economy (M-14, coin) would lift it to 2 anchors — that is the targeted connection.
OK — no connections exist yet to flag as arbitrary (only 1 anchor).

## simplehats   [anchors: support/cosmetic (1)]

Power-read: simplehats has 351 hat items (everyday cosmetics), 2 recipe-types (`simplehats:custom_hatscraps` for recycling dupes into scraps, `simplehats:custom_hatvariants` for cycling models). loot=no in the dossier (grab-bags drop from hostile mobs, but those are internal mob-drop tables, not structure chests). Content surface: the grab-bag mob-drop mechanic plus the internal scrap/bag crafting economy.

Theme-fit / red-team for M-09 (luxury→coin): the dossier itself flags this as a candidate. High-rarity hats as sellable cosmetics fits Numismatics perfectly — on a 10-player co-op server, someone will specialize in hat-hunting and trade them. The coin cost gives vanity actual economic weight. Red-team: are hats really "high-effort"? For M-09 the item needs to be high-effort or high-rarity, not just high-fun. Rare hats (the rarest grab-bag pulls) are legitimately scarce/luck-gated, so they qualify — but *common* hats should not sell for coin (inflation). The mechanic should target only the rarest tier. Survives.

For M-14 (bounty→drop economy): grab-bags already drop from hostile mobs, which feeds combat reward. A bounty board paying coin per X grab-bags turned in would thread combat→economy cleanly. Tone OK. However, this risks triviality (grab-bags are common enough that a bounty just hands out coin for mob grinding). Keep only as low-value bounty, not big-coin.

- from: simplehats rare hats (rarest grab-bag tier) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: on a trading server, rare hats are the definitive vanity luxury — a cosmetic you'd actually pay coin for; creates an organic player market for cosmetics.
- from: simplehats grab-bags | via: loot-seed into bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: collecting rare hats is a combat side-quest; a bounty board paying small coin per rare hat-scrap ties mob-fighting into the economy without requiring any recipe change.
- from: simplehats hat-scraps | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing a hat into raw/gravel is tonally absurd — M-04 targets metal/stone deco not fabric cosmetics. A hat going through an industrial crusher has zero player-nod. Theme clash kills it.
- from: simplehats hat-scraps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: force-fitting cosmetic scraps into arcane infusion has no thematic grounding — why would a wizard imbuement station want hat fabric? No player nod. Reject.

OK — no existing connections to REWORK (only 1 anchor).

## fogoverrides   [anchors: support/client (1)]
LEAVE — config-only client visual mod (fog density/color); zero items, zero loot, zero methods. No content surface to weave.

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert readable item (no mechanics, no loot, no recipe types). Any forced weave would be noise; the dossier correctly identifies this as a gag/easter-egg item. Meets the spirit of LEAVE: genuine zero-content (one static book).

## create_ultimate_factory   [anchors: Create (1)]

Power-read: a pure recipe datapack — no items/blocks of its own, only ~30 Create recipes (compacting/crushing/mixing/splashing/haunting) that make vanilla resources renewable (coal-block+lava → diamond, nuggets+gravel+lava → stone strata, etc.). Content surface: the recipes it authors, all on Create machine types. loot=no.

Method-pull: because it authors recipes *onto* Create methods, it deepens the Create anchor. Can it bridge to a second system? Its recipes generate resources (diamond, deepslate, calcite) that feed the scarcity layer or the economy. But create_ultimate_factory itself has no items to give a 2nd anchor to — there is nothing to route *through* it; it IS a routing.

Theme-fit / red-team: the dossier says "leave — it deepens the Create pillar rather than bridging pillars." This is correct. Any claim that renewable diamond → economy is a weave *on this mod* conflates the output resource with the mod itself. The bridge to economy is on the *resource* not on this recipe datapack.

- LEAVE — no items, no loot, no own recipe-types to route. It deepens Create by authoring recipes; that's its entire surface. A second anchor would have to live on a material it produces, but those materials (diamond, deepslate) belong to vanilla — not to this mod. Attempting to register a second anchor here is meaningless.

## cristellib   [anchors: support/library (1)]
LEAVE — genuine zero-content code library (structure-config framework and conditional runtime datapacks); registers no items, blocks, methods, or loot tables. Nothing to route. Its dependent mods (t_and_t, expanded_ecosphere) carry the actual structure content.

## create_cheese   [anchors: Create, survival (2)]

Power-read: create_cheese has 33 items (cheeses: brie, cheddar, camembert, gouda, etc.; cheese curds; calendar pages), 1 recipe type (`create_cheese:maturing`), loot=yes, and already sits at 2 anchors (Create + survival). Its maturing station accepts tag-driven inputs, making it extensible. Calendar Pages tier the maturing time (300/600/900 ticks), meaning tier-3 aged cheeses are genuinely time-gated high-effort outputs. Milk/curds arrive via Create mixing upstream.

Theme-fit / red-team for M-09 (luxury→coin): aged, time-gated cheese is the textbook luxury trade good — real-world economies have always put cheese in this role. A tier-3 aged wheel taking 900-tick maturing plus prior create:mixing for curds is legitimately multi-step. On a 10-player co-op server this becomes a specialty product that makes economic sense to sell. Survives easily.

For extradelight integration (M-12 processing-chain pull): create_cheese cheeses (tagged outputs) can feed extradelight's Oven recipes (cheese-topped dishes, cheese sauces) and its Mixing Bowl / Vat. This would thread create_cheese as a mid-chain supplier into extradelight's cuisine web, giving cheeses utility beyond direct eating.

For magic (M-16 seasonal): milk yield (and thus curds/cheese) could be seasonally gated — Serene Seasons winter reduces cow milk output (a config/loot mechanism), making aged cheese a seasonal specialty. This is a config tie, not a recipe, but it's a coherent seasonal reagent pattern.

- from: create_cheese aged wheel (tier-3, 900-tick maturing) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a properly aged wheel of cheese takes real factory time to produce — exactly the kind of high-effort luxury a small colony would trade for coin rather than eat themselves.
- from: create_cheese cheese (any tier) | via: extradelight:oven / extradelight:mixing_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: routed as upstream ingredient supplier — create_cheese curds/wheels feed ExtraDelight's cheese-topped bakes and cream sauces, making the Create dairy chain directly useful in the kitchen tier.
- from: create_cheese milk chain | via: config tie (Serene Seasons seasonal output gate) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: winter reduces pasture yield, so aged cheese becomes a preserved seasonal commodity — the seasons loop drives the dairy supply chain.
- from: create_cheese:cheese_curds | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: routing dairy curds through arcane infusion has no thematic grounding — curd is food, not a magical medium. No player would nod at "imbuement station consumes cheese curds." Theme clash kills it.
- from: create_cheese calendar_page (tier item) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: clash | verdict: REJECT | reason: calendar pages are industrial timing tokens for the Cheese Cellar, not ritual components. Routing them through spirit-fire or a ritual reads as random token insertion, not thematic confluence. Reject.

REWORK: existing 2-anchor connection (Create + survival) is sound — the entire mod is a Create-method dairy chain, and survival is the natural consumer of food output. The M-09 economy candidate above adds a clean third pillar.
OK — connections sound (existing 2 anchors are well-grounded; M-09 upgrade is an addition, not a correction).

## lootjs   [anchors: support/library (1)]
LEAVE — packdev-only scripting library (loot-table rewriting API for KubeJS); zero items, zero loot, zero player-facing content. It is the *enabler* of M-02 mob-drop weaves across the pack, not itself a node. No content surface to weave.

## timm   [anchors: support/QoL (1)]
LEAVE — client-only biome/dimension title overlay (no items, no loot, no methods, no server interaction). Pure UI immersion layer; zero content surface. Nothing to route.

## trek-b0.6.1.1   [anchors: survival (1)]

Power-read: trek is a structure-only worldgen mod (0 items, 0 blocks of its own, loot=yes). It places 150+ vanilla-block structures (islands, ships, ruins, fortresses, towers) with configurable weighted rare spawns. The chest loot tables are the only content surface, same as ctov.

Theme-fit: trek structures are adventure/discovery landmarks (ships, ruins, ancient buildings, pirate islands). Seeding exploration rewards that feed the economy (coin, trade tokens) is highly coherent — someone who finds a sunken ship should find something worth trading. Seeding magic reagents (rare spell components in ancient towers) also fits the tone of discovery.

- from: trek chest loot (ships/ruins/fortresses) | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: exploring a sunken ship should yield coin or a bounty token — treasure from ruins feeding the player economy is the oldest story in exploration gameplay.
- from: trek chest loot (ancient towers / deep ruins) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient ruins are the natural birthplace of forgotten arcane reagents — seeding an Ars Nouveau source gem or Occultism spirit shard into deep-ruin loot gives magic a discovery on-ramp beyond crafting from scratch.
- from: trek chest loot | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: boss-key items (M-15) are specifically *boss drops* that gate complex tech — seeding them into random structure chests bypasses the "must fight/defeat something" intent of M-15 and trivializes the gate. A structural chest is not a boss. Reject this routing.
- from: trek chest loot | via: loot-seed | to: survival (MineColonies) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: same no-motif problem as ctov — no motif covers "structure-loot to MineColonies progression"; would need Gate-0 motif before authoring.

REWORK: existing anchor is survival (1). The two accepted loot-seeds (economy via M-14, magic via M-02) lift it to 3 anchors — strong result for a zero-item mod.
OK — no existing connections to flag as arbitrary (only 1 anchor, which is well-grounded).

## ding   [anchors: support/QoL (1)]
LEAVE — client-only audio cue (plays a sound on menu/world load); zero items, zero loot, zero methods. No content surface. Nothing to route.

## vc_gliders   [anchors: aeronautics (1)]

Power-read: vc_gliders has 28 items (iron/gold/diamond/netherite paragliders, copper/nether upgrades, combined variants, damaged_glider). No recipe types of its own — gliders are crafted at vanilla table from reinforced paper + tier metals. Tier ladder: iron (everyday) → gold/diamond (mid) → netherite (endgame). The mod notes Create + Curios compatibility explicitly.

Method-pull for Create (M-05 native-method gating): the dossier already flags this. Higher-tier gliders (diamond/netherite) or the "reinforced paper" material gated on Create-pressed sheets/components. This ties personal flight into the tech spine naturally — a diamond glider's frame needs precision-pressed panels, not just vanilla crafting. Red-team: is this forced? No — the mod itself advertises Create compat, and "you need a Create-made part for the best flight gear" is coherent progression. Survives.

Method-pull for Create (M-12 processing-chain): reinforced paper (paper + tier-metal scraps) could run through create:milling → pulp → sheet → reinforced paper. This is a multi-step chain that makes the base input for all gliders go through Create. Red-team: milling paper to pulp is thematically OK but adds busywork to the *entry-level* iron glider — violates "never gate a basic/everyday component behind a complex recipe." So apply only to the higher-tier "reinforced" variant, not the base material. Narrow verdict: REJECT the blanket processing-chain, flag it as only acceptable at mid+ tier.

Method-pull for aeronautics (M-23 structural alloy): the netherite glider could require an Aeronautics structural component (an airframe panel or lightweight alloy sheet) to represent proper engineered flight hardware — the most capable personal glider shares materials with actual airship construction. This links the glider tier ladder into the airship supply chain.

- from: vc_gliders diamond/netherite paraglider (reinforced paper upgrade or frame) | via: create:pressing / create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: "proper flight gear takes proper engineering" — diamond-tier and up gliders require a Create-pressed panel in their frame, so flight quality is a function of your factory depth.
- from: vc_gliders netherite paraglider | via: recipe (airframe component as ingredient) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: the top-tier personal glider shares structural materials with airship frames — it's glider-grade aircraft construction, not just a fancy cape.
- from: vc_gliders iron glider (base tier, reinforced paper) | via: create:milling → pulp chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: gating the *entry-level* glider's base material on a Create processing chain violates the hard guardrail (never gate basics behind complex recipes). The iron glider is the first flight item a new player reaches for; adding a milling step punishes early exploration. Only mid+ tiers should touch Create. Reject this routing.
- from: vc_gliders copper_upgrade | via: create:pressing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the copper upgrade is a light add-on, and M-20 (deploy-application upgrade) targets "not for basics" — but copper is a very early material and the upgrade is low-power. The M-05 accept above already covers the Create tie at the appropriate tier. This would be redundant overlap on an unimportant item. Reject to avoid recipe clutter.

REWORK: existing anchor is aeronautics (1). Two accepts (M-05 + M-23) add create and strengthen aeronautics to 2+ anchors. The M-23 is especially strong because it directly knits personal flight into the airship supply line.
OK — the single aeronautics anchor is correctly grounded; the REWORK is additive.

## securitycraft   [anchors: support (1)]

Power-read: securitycraft is large (657 blocks, 690 items, loot=yes) and has 7 recipe-types (reinforcing, unreinforcing, copy-* for cameras/mines/sentries). The flagship mechanic is `securitycraft:block_reinforcing_recipe` — converts vanilla/modded blocks into owner-only unbreakable reinforced variants. Items include keycard readers, sentries, block-mines (disguised as ores/stone), security cameras, alarm, floor traps, etc. The reinforcing recipe is the widest join key: it accepts a broad block set.

Method-pull for Create (M-05): gate the Sentry or advanced security gear (Block Pocket Manager, Laser Block) on Create-machined components. A reinforced automated turret that costs Create-processed parts to build reads coherently — high-tech security should require industrial fabrication. Red-team: is this PvPvE design intent? Yes — the pack is explicitly PvPvE; base defense gear earning Create depth fits the design.

Method-pull for economy (M-08): securitycraft:reinforced blocks require a "Universal Block Reinforcer" filled with security-grade alloy. If that alloy is Create-processed from a scarce regional ore (titanium/steel), it chains scarcity→Create→economy correctly via M-08. However, the dossier flags this as WEAK — the reinforcing consumes the reinforcer, not the alloy per-use, so the per-use scarcity gate isn't as clean. Still, a recipe that requires a Create-fabricated reinforcer refill would work.

Method-pull for loot seeding (bounty/drop economy): securitycraft's mines are disguised as ore variants (diamond_mine, ancient_debris_mine, etc.) — they drop as loot when tripped by non-owners. Seeding a small coin drop into these trap-mine loot tables (bounty for a thief that triggers a mine) is an amusing economy touch.

- from: securitycraft:sentry / block_pocket_manager | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: "automated base defense is manufactured, not improvised" — high-tier security devices (sentry turrets, pocket shields) require Create-made precision components; your factory output determines how well your base can protect itself.
- from: securitycraft block_mine loot table | via: loot-seed | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: a triggered mine should yield a bounty token or coin — the irony that stealing from a well-defended base earns coin (briefly) before exploding adds dark humor and routes the PvP layer into the economy.
- from: securitycraft:crystal_quartz (SC adds crystal quartz blocks/items) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crystal quartz is a deco block specific to SC's aesthetic; crushing it back to raw is M-04 territory (deco → raw + XP nugget). However, this is a very light touch on a mod whose real value is the security system, and it applies to an incidental deco item rather than the mod's content spine. The gain is marginal — include only in a wholesale deco-family crush pass, not as a standalone edge. Reject as standalone.
- from: securitycraft:block_reinforcing | via: recipe (Create-processed titanium/steel alloy input) | to: create+economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: the reinforcing mechanic consumes the Universal Block Reinforcer tool, not a per-use alloy input. Grafting a per-reinforcement scarcity gate onto the tool would require changing SC's core recipe in a way that conflicts with the mod's own design (the tool is a reusable device, not consumed per-block). This is a mis-costing risk. Reject; the M-05 sentry/pocket-manager gate is the cleaner Create tie.

REWORK: existing anchor is support (1). Two accepts (M-05 Create gating of high-tier devices; M-14 mine-loot bounty) bring it to 2 anchors — economy + create. The support label may need updating to reflect the PvPvE content role.
Note for reviewers: SC's "support" anchor label undersells it — it's a substantive PvPvE content mod, not just utility. Consider reclassifying as economy/survival + support rather than pure support.

## mcwwindows   [anchors: support/decoration (1)]

Power-read: mcwwindows has 328 blocks and 326 items — a large deco palette of windows, shutters, blinds, curtains, mosaic glass, parapets, arrow slits. All vanilla-table crafted (consumes glass/planks/wool/stone). loot=yes. No recipe types of its own.

Method-pull: M-04 (Create recycles deco) is the natural candidate — stone parapets/arrow slits crush back to raw/gravel + XP nugget (lossy). Mosaic glass doesn't fit M-04 (glass crushing yields no useful output under M-04's intended use). The dossier itself flags this as WEAK ("only weave as part of a wholesale deco-family pass").

Red-team for M-04: parapets and arrow slits are stone-based and architecturally analogous to the stone blocks M-04 was designed for. A player who overbuilt medieval battlements and wants to reclaim stone would find this coherent. However, doing one specific window variant in isolation is indeed weak — the value comes from applying M-04 across the entire Macaw's family (Macaw's Roofs, Fences, Windows, etc.) as a single pass. As an isolated candidate it's valid but low-priority.

- from: mcwwindows stone parapet / arrow_slit variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: overbuilt your medieval battlements? Crush the stone parapets back to gravel — the industrial mill doesn't care what shape the rock was in; reclaiming materials from deco blocks is standard factory hygiene. (Low-priority standalone; best value in a wholesale Macaw's-family M-04 pass.)
- from: mcwwindows:mosaic glass variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: M-04 is intended for metal/stone deco crushing to raw/gravel + XP nugget — glass crushing to sand is a different material flow and M-04 doesn't cleanly cover it. Tone is OK but the motif doesn't fit glass; would need a different motif or Gate-0 extension. Reject.
- from: mcwwindows:curtains (wool-based) | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: pressing a curtain to extract wool isn't coherent — M-12 is processing-chain pull (raw crop/material → finished good), and curtains aren't a raw material stage of anything. Forced edge. Reject.

REWORK: existing anchor is support/decoration (1). The single M-04 stone-parapet candidate adds a light Create tie, bringing it to 2 anchors.
OK — no existing connections to flag as arbitrary (only 1 anchor, correctly a deco palette role).

## extradelight   [anchors: survival, Create (2)]

Power-read: extradelight is massive (826 blocks, 1447 items, 16 recipe-types, loot=yes, 393 c:tags). It sits at 2 anchors (survival + Create) with inbound weaves from create:mixing, farmersdelight cooking/cutting, and butchercraft:grinder already present. The c:tag surface is the richest in the pack — nearly every crop/food mod's output can be consumed here. The dossier already identifies two strong candidates: deeper Create (M-12) and economy (M-09).

Method-pull deeper Create (M-12): create:milling/crushing/pressing for grain→flour, coffee→ground beans, sugar grinding. The Vat and Evaporator already consume fluids; routing those fluid-reduction inputs through create:emptying/filling would bind the fluid side to Create's fluid handling too. Red-team: extradelight already has create:mixing inbound — this deepens rather than creates a Create link. The goal is that the bakery reads as Create's downstream, which makes the Create anchor stronger and creates more natural recipe chains. Survives.

Method-pull for economy (M-09): feasts are the highest-tier outputs — multi-step, feed-multiple-players, rare-ingredient dishes. Naming specific feast dishes as luxury trade goods (coin-valued in Numismatics) closes the survival→economy leg of the loop. Red-team: many FD-family packs already use feasts this way; the idea is well-precedented. Only the high-tier feasts (≥3 cooking steps, multiple exotic ingredients) should be coin-worthy; simple cooked meals should not.

Method-pull for MineColonies (survival production): extradelight feasts are natural colony provisioning output — a MineColonies cook could produce feasts to provision citizens, with colony workers demanding higher-quality food for higher skill tasks. This is a config/pack-data tie (not a recipe), but it's thematically central to the design loop (production → colony productivity → economy).

- from: extradelight grain crops / coffee / sugar | via: create:milling / create:crushing / create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flour, ground coffee, and pressed juice all belong in the mill and press before the kitchen — routing ExtraDelight's pantry staples through Create machines makes the bakery feel like a factory downstream, not a parallel cottage industry.
- from: extradelight high-tier feasts (≥3-step, exotic-ingredient dishes) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: a multi-course feast fed to a colony or sold at the market is worth coin — cooking mastery should translate to economic value, especially on a server where food specialization is a real play style.
- from: extradelight:evaporator / vat fluid outputs (syrups, salt) | via: create:filling / create:emptying | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Evaporator and Vat reduce fluids; routing those fluid products through Create's tank/filling system makes the industrial kitchen a node in the Create fluid network rather than a standalone.
- from: extradelight:oven bakeware | via: create:pressing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) is specifically a create:deploying / item_application to upgrade an item — bakeware trays don't fit the "upgrade via deployment" motif; this is more of a crafting input than an upgrade application. Motif mismatch; reject.
- from: extradelight coffee/garlic/citrus crops | via: Serene Seasons seasonal-gating (only in season) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: coffee flowers in summer, garlic in autumn — seasonal availability of ExtraDelight's specialty crops makes the kitchen dependent on the calendar, tying food production depth directly to the seasons loop.

REWORK: existing 2-anchor connection is well-grounded. Four accepts add economy + stronger Create + survival-seasonal depth. Consider upgrading anchors to Create, survival, economy once M-09 is authored.
OK — existing connections sound; the Create inbound (create:mixing) is an existing weave, M-12 deepens it. No connections to flag as arbitrary.

## create_confectionery   [anchors: Create, survival (2)]

Power-read: create_confectionery has 82 items (chocolate bars/fluids, candies with effects, marshmallow, hot chocolate, gingerbread/chocolate/caramel deco blocks), 0 recipe-types of its own (rides create:mixing/crushing/compacting/filling/emptying/pressing). loot=yes. Two anchors already (Create + survival). Inbound weaves: create:compacting, create:crushing, create:emptying, create:filling, create:mixing, create:pressing — deeply Create-woven already.

Method-pull for economy (M-09): multi-step processed chocolate (cocoa beans → crushed cocoa → cocoa butter → chocolate fluid → bar/candy) is a genuine multi-stage chain. The effect candies (Speed, Saturation, Regeneration) add functional value on top of aesthetic value. Red-team: is chocolate really "luxury"? On this pack with PvPvE tension, a Speed candy or Phantom-repelling Restful chocolate is genuinely valuable — not just cosmetic. Survives as a strong mid-tier luxury.

Method-pull for magic (M-10 or M-07): confectionery as a magic catalyst is a stretch in vanilla modded Minecraft terms. Chocolate doesn't have alchemical precedent in the modset. Red-team kills it.

Method-pull for ExtraDelight cross-chain (M-12): chocolate as an ingredient that ExtraDelight's Oven/Mixing Bowl/Vat recipes pull from — chocolate-dipped desserts, cocoa-based sauces. This makes create_confectionery a supplier into extradelight's cuisine chain, and since extradelight is already Create-woven, it closes a small loop (Create → confectionery → extradelight kitchen → feasts/economy). Survives.

- from: create_confectionery:bar_of_black_chocolate / ruby_chocolate / white_chocolate (multi-step processed) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a chocolate bar made through the full cocoa processing chain is worth coin — on a server where not everyone has a chocolate factory, premium confectionery becomes a real trade good.
- from: create_confectionery:*_candy (effect candies) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a Speed candy or Phantom-repelling chocolate isn't just food — it's a consumable power-up with real PvPvE value; players will pay coin for a pouch of battle sweets before a raid.
- from: create_confectionery chocolate (bars/fluids) | via: extradelight:oven / extradelight:mixing_bowl | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: chocolate is an ingredient, not just an endpoint — routing create_confectionery's chocolate into ExtraDelight's kitchen chains (chocolate mousse, cocoa cake) gives the confectionery factory an obvious downstream use.
- from: create_confectionery:gingerbread_block / caramel_bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing gingerbread or caramel bricks to recover raw materials is tonally absurd and mechanically useless (there is no logical "raw material" output from a candy brick). M-04 targets stone/metal deco — confectionery deco is outside its design intent. Reject.
- from: create_confectionery hot_chocolate (Regeneration effect) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: hot chocolate granting Regeneration is a food effect, not a magical medium. Routing it through arcane infusion to "enhance" it into a magic reagent is forced — there's no thematic reason a magic mod would treat dairy-based confectionery as a spell component. Reject.

REWORK: existing 2-anchor connection (Create + survival) is well-grounded — the mod IS a Create-method food chain. The three accepts (M-09 ×2 for bars and effect candies + M-12 to extradelight) add economy and deepen survival.
OK — connections sound; deepening is additive, not corrective.

## minecolonies_tweaks   [anchors: support/QoL (1)]
LEAVE — QoL+tag-harmonization addon for MineColonies (crop QoL, inventory scrolls, c:tag injection). The inventoryscroll items are handheld colony-storage tools with no external recipe target; the c:tags it injects are the enabler of food-web weaves across the pack (analogous to lootjs for loot). There is no content node here to route — it IS the routing infrastructure. Nothing to weave against it.

## spyglass_improvements   [anchors: support/QoL (1)]
LEAVE — client-only spyglass zoom/overlay enhancer; zero items, zero loot, zero methods. No content surface. Nothing to route.

== CHUNK COMPLETE ==


