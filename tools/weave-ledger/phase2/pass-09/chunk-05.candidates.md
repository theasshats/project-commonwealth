# Phase 2 candidates — chunk-05

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye / endrem:nether_eye / themed eyes | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a stuck player who can't find the stronghold-loot eye can transmute a matching themed drop (wither skull, blaze rod) into the corresponding eye via a spirit ritual — exploration-first, but magic as the costly fallback path
- from: endrem:magical_eye / endrem:corrupted_eye (rarest eyes) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: End access is the whole point of the mod; gating even 1–2 eyes behind a sequenced-assembly chain trivializes the exploration intent by letting a tech player skip the dungeon — a forced Create edge on a deliberate exploration gate

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- LEAVE — pure worldgen/loot datapack, no registry items or processing methods of its own; the tavern cartographer trades in vanilla emeralds, not Numismatics coins; any loot-table seed (coin/reagent) is a datapack edit at the consuming mod's end, not a weave on this mod. Nothing coherent to route through a method here.

## betterstrongholds   [anchors: survival (1)]
- LEAVE — zero registry items, zero recipe-types, zero material outputs; purely a structure-layout overhaul. No material to route, no method to route through. A loot-table edit is a downstream datapack concern, not a mod weave.

## betteroceanmonuments   [anchors: survival (1)]
- LEAVE — same situation as betterstrongholds: zero registry items, no methods, structure overhaul only. Nothing to route through any method.

## bakery   [anchors: survival (1)]
- from: bakery finished goods (cakes, tarts, cupcakes, jams) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a baker specialist sells high-effort pastries to the colony for coin — the bakery chain's endproducts are exactly the luxury consumables the economy pillar wants as trade goods
- from: wheat → flour | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create mill grinds wheat to flour, slotting into the bakery's dough chain — everyday ingredient, one light step, ties the bake line to the tech spine without over-engineering it
- from: bakery crops (fruit/berries surplus) | via: ars_nouveau:imbuement (as passive Source feedstock via Agronomic Sourcelink) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: cozy-bakery tone vs arcane infusion is a stretch; surplus crops feeding a magic ritual reads forced. Better ownership stays with the dedicated farm mods.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: liquid XP is distilled experience — the alchemist's cauldron brewing a spell upgrade or potion using liquid XP as the experience catalyst is thematically tight and threads Create's XP infrastructure into the Iron's Spellbooks magic tier
- from: create_enchantment_industry grinding output (enchantment shards/stripped books) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the grinding method strips enchants INTO liquid XP already; routing the output back into an enchanting apparatus creates a near-round-trip. Thin integration, no strong throughput story.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest mercenary hire / faction citizen trades | via: numismatics (coin as hire currency) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary or recruiting a citizen costs Numismatics coin rather than emeralds — faction warfare has an economic cost, plugging conquest directly into the pack's coin economy
- from: valarian_conquest faction armor/weapons (armorsmith station outputs) | via: create:item_application or crafting gated on Create parts | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the armorsmith station is a vanilla-style crafting block; gating its outputs on Create parts is a weak forced edge — the mod's identity is medieval faction warfare, not industrial production. No natural reason a knight's shield needs a Create cogwheel.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh / rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: themed undead flesh transmuted in spirit fire yields elemental essences (ice/fire aspect) — the bestiary's kill-loot becomes a ritual input, and players have a reason to hunt biome-specific undead for their arcane value
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart from the Immortal storm-lich is a rare boss-adjacent drop with obvious arcane resonance; imbuement turns it into a source_gem catalyst or apprentice-tier reagent — mob-drop reagent sink at appropriate power level
- from: rottencreatures mob drops (any) | via: create:haunting | to: Create | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: haunting already covers vanilla rotten flesh → soul sand type transmutations; routing rottencreatures' unique drops through haunting as well risks diluting the spirit_fire/imbuement sink already accepted above. One strong magic weave is better than two competing overlapping methods on the same drops.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — a two-item QoL filter addon for Create Deployers; no materials, no recipe-types, no byproducts. No coherent 2nd pillar exists without fabricating a connection that makes no sense to a player.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone output keyed to season) | via: Create redstone/gearshift logic (create contraption automation) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create automated farm reads the season sensor and switches crop input or opens greenhouse-glass shutters by season — the tech spine manages the seasonal calendar, making the farm a reactive machine rather than static infrastructure. M-16 is the right home: season-gated input routing into Create automation.
- from: out-of-season produce (scarce because crops stunted) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this isn't really a weave on sereneseasons itself — it's emergent from seasonal scarcity of any farming mod's output. The economy pillar captures it naturally when the food-sell economy is built; no mod-specific hook needed here.

== CHUNK COMPLETE ==
