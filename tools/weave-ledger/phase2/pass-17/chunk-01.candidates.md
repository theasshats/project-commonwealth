# Phase 2 candidates — chunk-01

## alternate_current   [anchors: support (1)]
- LEAVE — pure redstone-propagation performance patch; zero player-facing items, no recipes, no content surface; nothing to weave.

## illagerinvasion   [anchors: survival (1)]

**Power-read:** hallowed_gem is an Invoker boss drop — endgame by placement in the raid/boss chain. illusionary_dust is a mid-tier drop (Illusioner, a somewhat-rare illager variant). platinum_chunk is a mid-tier mineral drop. lost_candle and horn_of_sight are niche-use items. The Imbuing Table is an endgame service. The mod anchors survival/danger firmly; the dossier flags a strong latent magic foot via its arcane-themed drops and enchant economy.

**Candidate A — hallowed_gem as magic reagent (M-02 + M-10), ACCEPT**
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 + M-10 | power: endgame | tone: ok — gem of a fallen magical boss attuned into arcane currency is exactly the "of course" moment | verdict: ACCEPT | hook: defeating the Invoker lets you unlock Ars Nouveau tier-up by feeding the Hallowed Gem into the Imbuement Chamber — the raid boss funds the magic web

**Candidate B — illusionary_dust as Occultism ritual input (M-02 + M-11), ACCEPT**
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: occultism:ritual | to: magic | motif: M-02 + M-11 | power: mid | tone: ok — illusion/spirit dust is coherent as a ritual reagent for Occultism's spirit-binding | verdict: ACCEPT | hook: the dust left by a shattered Illusioner is exactly what a spirit-binder needs to summon illusory servants

**Candidate C — platinum_chunk via Create crushing (M-03), REJECT**
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: platinum_chunk is a boss/mob drop, not an ore — routing a combat trophy through a crushing wheel is mechanically valid but thematically weak ("why does killing an illager give me ore ore?"); the gem/dust drops are the more coherent connective tissue; platinum as an isolated ore-equivalent drop creates an awkward scarcity bypass

**Candidate D — platinum_chunk as Numismatics coin source (M-08), REJECT**
- from: illagerinvasion:platinum_chunk | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: platinum is an isolated named metal with no other presence in the pack's metal web; minting it into coin without first unifying it into the metallurgy graph would create a dangling coin source; flag for reconsideration only if platinum gets a c:ingots/platinum unification pass

**Candidate E — hallowed_gem as boss-key gate (M-15), ACCEPT**
- from: illagerinvasion:hallowed_gem | via: gated KubeJS recipe (boss drop as input) | to: create | motif: M-15 | power: endgame | tone: ok — hallowed gem as a required component for a Create brass/endgame machine part is thematically coherent (the cursed metal of the raid boss gates the industrial tier) | verdict: ACCEPT | hook: you can't assemble the high-tier Brass Hand or equivalent Create controller without the gem the Invoker drops — combat specialization enables tech specialization

REWORK: No existing connections to flag (mod is 1-anchor). Candidates above establish the magic + Create(boss-key) second anchors.

## yungsapi   [anchors: support (1)]
- LEAVE — pure API/library; zero player-facing items; provides jigsaw/structure tooling for YUNG's mods only; nothing to weave.

## accessories   [anchors: support (1)]
- LEAVE — pure accessory-slot API; no items, no recipes, no content surface of its own; wearables live in other mods that register into its slots; nothing to weave at the API layer.

## create_better_villagers   [anchors: Create, economy (2)]

**Power-read:** no items — profession/trade behavior only. Andesite-tier trades (everyday/low-mid), Brass-tier trades (mid), Copper Worker/Miner (mid). The bridge is already sound; the open question is denominating the trades in Numismatics coin vs. vanilla emeralds.

**Candidate A — re-denominate trades into Numismatics coin (M-08/M-21), ACCEPT**
- from: create_better_villagers villager trades | via: numismatics (coin denominated trades, or config/KubeJS trade price) | to: economy | motif: M-08 + M-21 (provisional) | power: everyday/mid | tone: ok — a Create-themed villager trading in Sprockets/Cogwheels instead of emeralds is exactly the kind of integrated economy loop the pack wants | verdict: ACCEPT | hook: the Brass Worker takes Sprockets; the Andesite Worker takes Cogwheels — emeralds are for vanilla villages, not a factory town
  Note: M-21 is provisional (maintainer leans no on villager-economy seam) — flag for Gate review. The Numismatics config path (coin as trade currency) is the delivery mechanism.

**Candidate B — gate Brass/Copper Worker appearance behind a Create milestone (M-05), REJECT**
- from: create_better_villagers profession unlock | via: KubeJS progression gate | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the mod has no items/recipe types of its own to gate; progression gating on the profession appearance is a server-config/datapack concern outside the recipe-weave scope; worth noting as a design note but not a Phase-3 recipe action

OK — Create + economy dual anchor is sound. The only improvement is the coin-denomination weave above.

## xaerominimap   [anchors: support (1)]
- LEAVE — client-side navigation UI; zero items, no recipes, no server content surface; nothing to weave.

## sable_sa_compat   [anchors: support (1)]
- LEAVE — behavior compat patch between Create: Stuff 'N Additions and Sable/Aeronautics; no items, no recipes; serves the aeronautics pillar transparently; nothing to weave.

## trailandtales_delight   [anchors: survival (1)]

**Power-read:** The flagship items are multi-step foods — cherry cheese pie (cheese wheel → sliced → combined with cherry filling), ancient coffee, sniffer-egg dishes. The Lantern Fruit is a Sniffer-exclusive crop (mid-rarity; sniffer is a post-Ancient City progression gate). Cheese production is a multi-step chain (milk → curd_block → cheese_wheel → cheese_slice). These are mid-tier processed goods by depth, not raw ingredients; the dishes have genuine labour investment and thematic distinctiveness (ancient/archaeological flavour).

**Candidate A — luxury foods as Numismatics sell-goods (M-09), ACCEPT**
- from: trailandtales_delight:cherry_cheese_pie / ancient_coffee / cherry_petal_tea | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — hand-crafted artisan foods with archaeological/botanical flavour are exactly the "luxury good" the M-09 sell-loop is built for; a player specialising in sniffer farming and cheese-making has a real export product | verdict: ACCEPT | hook: a wedge of cherry cheese pie and a pot of ancient coffee sell for coin at the Trading Floor — the trail chef funds the airship crew

**Candidate B — Create milling/mixing for cheese/crop processing chain (M-12), ACCEPT**
- from: trailandtales_delight:lantern_fruit / curd_block | via: create:milling (grind lantern fruit) or create:mixing (accelerate curd-to-cheese) | to: create | motif: M-12 | power: mid | tone: ok — routing the cheese or lantern-fruit processing through Create machinery extends the food chain into the tech spine; the curd→wheel maturation step maps cleanly onto a mixing or milling step without forcing a weird marriage | verdict: ACCEPT | hook: feed the lantern fruit harvest into a milling wheel for a refined extract — the kitchen and the factory share the same floor

**Candidate C — Lantern Fruit as seasonal reagent (M-16), REJECT**
- from: trailandtales_delight:lantern_fruit | via: season-gated input | to: create/magic | motif: M-16 | power: mid | tone: ok | verdict: REJECT | reason: Lantern Fruit grows from Sniffer seeds, not season-gated soil; its availability is gated by Sniffer progression, not Serene Seasons calendar — applying M-16 (seasonal reagent) would misrepresent the gating mechanic. The crop is permanently growable once sniffer seeds are found, so this is not a genuine seasonal seam.

REWORK: No existing connections to flag (mod is 1-anchor). Candidates A and B establish survival + economy and survival + Create second anchors respectively.

## dragonlib   [anchors: support (1)]
- LEAVE — developer API/framework library with zero player-facing content (the lone dragonlib:dragon block is a dev/test artifact); nothing to weave.

## smokeleafindustries   [anchors: survival (1)]

**Power-read:** The base crop (hemp) is everyday — growable from spawn, no special gating. Individual strain buds are mid-tier by investment (grow-lamp/pot infrastructure, drying, grinding). The synthesizer-output gummies/oils are the endgame of this mod's chain (multi-stage). The generator is a structural piece (everyday-use workhorse). Dealer/Stoner villager trades are mid-tier trade loop. The mod is a self-contained island — 243 items, 12 recipe-types, zero c:tags, zero inbound method-weaves — exactly the "isolated FE cluster" the dossier flags.

**Candidate A — refined extracts/gummies as Numismatics luxury goods (M-09), ACCEPT**
- from: smokeleafindustries:*_extract / *_gummy (processed strain products) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok — a strain farm producing refined edibles for sale at a Trading Floor stall is thematically coherent in a small-server co-op where someone specialises in the farm; the effects make these genuine luxury consumables with demand | verdict: ACCEPT | hook: the extractor produces a refined concentrate that sells for coin at the Trading Floor — the hemp farmer funds the colony

**Candidate B — Create Addition FE↔kinetic bridge for smokeleaf machines (M-17), ACCEPT**
- from: smokeleafindustries machines (FE-powered grinder/extractor/liquifier/synthesizer) | via: createaddition:charging (FE↔kinetic bridge) | to: create | motif: M-17 | power: mid | tone: ok — the mod ships its own FE generator but also accepts FE from any source; Create Addition's alternator/motor converts rotational power to FE bidirectionally, making the smokeleaf factory a legitimate consumer of the Create kinetic network without any recipe authoring (just player placement of a motor near the machines) | verdict: ACCEPT | hook: the brass motor runs the grinder — one Create shaft makes the whole hemp factory hum

**Candidate C — hemp/buds through create:milling as alternate processing path (M-12), REJECT**
- from: smokeleafindustries:*_weed / hemp_crop | via: create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: the mod's own grinder already handles raw-bud processing at the same tier; adding a Create milling path as an alternate would partially duplicate the mod's own processing chain and blur what the specialised machines are for. The FE bridge (Candidate B) is the cleaner Create seam — it extends the energy network rather than duplicating the processing step. Keep only B.

REWORK: No existing connections to flag (1-anchor). Candidates A and B establish economy + Create second anchors.
