# Phase 2 candidates — chunk-10

## copperagebackport   [anchors: survival (1)]
- from: copperagebackport copper deco/armor/tools | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: smelt a copper fence in the Crushing Wheel and get nuggets back — the whole copper build set feeds the copper economy without any dedicated recycling recipe
- from: minecraft:copper_chest (oxidized/waxed variants) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: copper chests are functional storage, not deco — M-03/M-04 is for deco blocks; crushing a functional chest is an odd framing and M-04 explicitly covers deco; fold the deco set together instead of listing chest separately
- from: copper tools/armor (copperagebackport items) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: tools/armor crushing is covered under the same M-04 deco pass above; listing both is redundant — keep one ACCEPT for the whole copper set
REWORK: no existing connections beyond survival(1); M-04 is the one coherent weave; any aeronautics/logistics tie via Copper Golem is too weak (the golem is a cosmetic sorter at best, not a logistics node the economy pillar cares about).

## aeronauticscompat   [anchors: aeronautics (1)]
LEAVE — pure behavior/compat patcher, zero items, zero loot, zero recipes; nothing material to route and dossier explicitly marks 2nd-anchor candidates as none.

## rhino   [anchors: support (1)]
LEAVE — JS engine library, zero items, zero content surface; weaving would be nonsensical.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux:*_reaper / *_plow (iron-blade farm implements) | via: create:item_application | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: apply a Create iron sheet onto a wooden cart frame at a Deployer to upgrade the plow/reaper blade — the metal farm tool tier costs real Create-processed iron, one light step
- from: astikorcartsredux supply cart (bulk hauling) | via: aeronautics logistics framing | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: supply carts are pre-tech horse-drawn haulers; framing them as aeronautics logistics nodes is a tone clash (medieval vs. steam-punk airship) and no motif covers land-cart → airship logistics — no-motif forces REJECT-for-review
- from: bulk crop harvest (reaper output — piles of wheat/seeds) | via: farmersdelight:cooking / create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the reaper doesn't produce a unique item; it produces the same vanilla crops any farm outputs — this edge would belong to the crop mod, not to astikorcartsredux specifically; routing it here is a mis-attribution

## zeta   [anchors: support (1)]
LEAVE — mod-framework library, zero items/blocks, zero loot; nothing to weave.

## companion   [anchors: support/QoL (1)]
LEAVE — behavior-only pet QoL, zero items, zero loot; nothing to weave.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: shipwreck/galleon loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a galleon's captain chest yields a Numismatics crown or two — ocean exploration pays out in the pack's real currency, making nautical combat a viable coin-income path
- from: shipwreck/galleon loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed an Ars Nouveau source gem or Iron's arcane scroll into the sunken-ruin chests — magical salvage from old wrecks reads as "lost arcane relics," rewarding exploration with magic progression
- from: floating fortress loot | via: loot-seed | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: floating fortresses are aerial structures (not nautical) — M-08 is coin from *processed* scarcity, not from looting a fortress; the loot-seed to economy link is better served by M-14 (bounty/drops→coin) already accepted above; adding a separate M-08 edge here is a motif mis-fit

## chefsdelight   [anchors: survival, economy (2)]
OK — connections sound. Cook/Chef villager professions already give it both survival (food) and economy (trade) anchors.
- from: Cook/Chef villager trades (FD meals for emeralds) | via: KubeJS trade redirect → numismatics mint | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the village cook accepts Numismatics spur coins for roast chicken — the pack's currency replaces emeralds at the cooking-trade counter, so the food economy and the coin economy are the same economy
REWORK: the existing economy anchor is via vanilla-emerald villager trades, which float outside the pack's Numismatics currency loop. The M-09 deepening above resolves this — without it the "economy" anchor is nominal (emeralds ≠ pack currency).

## lionfishapi   [anchors: support (1)]
LEAVE — animation/rendering API library, zero items, zero loot; nothing to weave.

## gravestone   [anchors: survival (1)]
LEAVE — death-QoL utility (1 functional block, 1 obituary item); items have no material value; any weave is contrived. The obituary is a tombstone record — feeding it into recipes would be tonally wrong.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (acorn/bastion/cathedral metal fences) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the iron-framed metal fences crush back to iron nuggets + an XP nugget in the Crushing Wheel — deco is never a dead end, it feeds back into the metal economy
- from: mcwfences wood fence/gate family | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: vanilla wood fences already have this behavior by default in most Create packs; adding a dedicated recipe for every Macaw's wood variant is noise, not a meaningful weave — the metal set is the non-trivial case worth doing

## buildguide   [anchors: support/client (1)]
LEAVE — client-only render overlay, zero items, zero gameplay surface; nothing to weave.

## azurelib   [anchors: support (1)]
LEAVE — animation engine library (GeckoLib fork), zero items, zero loot; nothing to weave.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cheese_slice | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: wheel of cheese made from Sniffer-era dairy fetches a Numismatics spur at the trading post — rare-crop food as a trade good anchors the culinary chain to the pack's coin economy
- from: trailandtales_delight:lantern_fruit (Sniffer-crop berry) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill Lantern Fruit in the Create millstone into a paste/juice intermediate that feeds brewing or a Farmer's Delight dish — the sniffer crop enters the Create processing web at one light step
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea (finished drinks) | via: numismatics sell (M-09) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: already accepted cheese wheel for M-09 — stacking multiple food items onto the same motif at the same tier is redundant; the cheese wheel is the better representative (more steps to produce); drinks can be added later in a broader food-economy pass if needed

## ribbits   [anchors: survival (1)]
- from: ribbits amethyst-shard trade economy (Ribbit merchants sink shards) | via: KubeJS trade bridge → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional motif) | hook: Ribbit merchants will take a Numismatics cog instead of (or alongside) an amethyst shard — swamp-village trade joins the pack's currency circuit; provisional because M-21 is provisional
- from: ribbits:toadstool / mossy_oak_planks | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: toadstool/mossy-oak are generic wood/shroom deco; running them through Create cutting produces the same plank/slab byproducts as any vanilla wood — no distinctive weave; the Ribbit mod's unique surface is its Amethyst-trade economy, not its woodset

## controlling   [anchors: support/client (1)]
LEAVE — client-only keybind UI, zero items, zero gameplay surface; nothing to weave.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's Hallowed Gem is an arcane catalyst for high-tier Ars Nouveau imbuement — a boss you must defeat to unlock the pack's magic endgame; the raid system and the magic system converge on one keystone item
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burn Illusionary Dust in a Spirit Fire candle to transmute it into an Occultism essence — illusion-magic residue feeds the spirit economy, lore reads naturally
- from: illagerinvasion:platinum_chunk (rare drop) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: crush the Platinum Chunk in the Crushing Wheel to yield a platinum ingot (+ byproduct nuggets) — gives the drop a Create processing path and folds an illager rare into the metals economy
- from: illagerinvasion:hallowed_gem (Invoker drop) | via: numismatics bounty | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: the hallowed_gem's primary role is ALREADY the magic gate (M-02 accepted above) and is a reserved boss-key per reagent-ownership; also making it a coin-payout item cheapens the magic-gate function — keep it as magic reagent; bounty/coin is a secondary echo that would dilute its design role

## createpickywheels   [anchors: create (1)]
- from: biome-gated water wheel / windmill placement constraint | via: design/config (no recipe) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the "world pushes back" framing IS the survival pillar flavor, but it operates through a config constraint, not through a recipe or loot route — no motif covers "behavior mod adds placement rules that incidentally anchor a second pillar"; no-motif → REJECT-for-review. The mod earns a de-facto survival flavor but cannot be formally woven without a motif.

## sable   [anchors: support (1)]
LEAVE — physics-engine library backend, zero items, zero loot; the weaving happens in mods that build on it (Aeronautics, aeronauticscompat).

## naturescompass   [anchors: support/QoL (1)]
LEAVE — biome-locator tool, zero materials produced, pure information utility; nothing to weave.

== CHUNK COMPLETE ==
