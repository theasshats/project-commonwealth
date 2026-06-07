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






