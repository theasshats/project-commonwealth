# Phase 2 candidates — chunk-10

## blueprint   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (Team Abnormals framework); one cosmetic `template_chest` item is too trivial to anchor a pillar. No recipe surface, no material outputs, no loot. Sanctioned support role.

---

## xaeroworldmap   [anchors: support/QoL (1)]

LEAVE — client-side map rendering UI; zero items, zero loot, zero material processing. No weave surface exists. Paired navigation QoL alongside Xaero's Minimap; sanctioned support role.

---

## create_factory   [anchors: Create, survival (2)]

OK — connections sound. Already hits the 2-pillar goal: Create-methods dessert chain (mixing/pressing/filling) feeds the survival/diet pillar with a Sugars/Fruit category food.

- from: create_factory finished sweets (waffles/caramel apples/chocolate rolls) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a confectionery shop on a Trading Floor — players specialize in the sweet factory and sell luxury desserts to coin-hungry travelers
- from: create_factory:cream_bucket / sweet_berries_jam fluid | via: extradelight:vat or farm_and_charm:crafting_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already anchored survival; this would double-count the same pillar rather than add a second (it's still survival→survival), and extradelight vat is an FD-ecosystem integration not a true pillar bridge; the M-09 economy weave is the right bonus here

REWORK: no rework needed — Create+survival anchoring is coherent and well-justified.

---

## vc_gliders   [anchors: aeronautics (1)]

- from: vc_gliders reinforced paper (paper + leather/metal scrap intermediate) | via: create:pressing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create press stamps the laminated paper layers that give the glider its structure — early flight gear demands the tech spine, not just a crafting table
- from: vc_gliders:paraglider_diamond / _netherite (top tiers) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: high-tier glider frames are precision-assembled in a mechanical crafter from pressed frames + Create-made metal sheets; makes high-end personal flight cost the spine (consistent with aeronautics depth scaling)
- from: vc_gliders copper_upgrade / nether_upgrade | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) is "not for basics" — the copper upgrade is an everyday component, and deploying it would violate the anti-basic-gating guardrail; the M-05 mechanical_crafting route for higher tiers already earns the Create anchor without over-gating the early upgrade
- from: vc_gliders:paraglider_netherite | via: ars_nouveau:imbuement (attunement step) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: theme-fit is marginal — a paraglider doesn't read as arcane gear (it's industrial/adventure kit), and forcing an imbuement step would make Ars required for a mundane flight item; the Create gating is the correct and sufficient 2nd anchor; magic feels arbitrary here

REWORK: current anchor is aeronautics (1 only) — the M-05 Accept candidates above give it the Create 2nd anchor it needs. Once Create gating is authored, anchors become Create+aeronautics (2) which is internally coherent (built through Create, used for flight — same as create_sa / ctl).

---

## createmetalwork   [anchors: Create (1)]

- from: createmetalwork molten scarce regional metals (molten_platinum, molten_osmium, molten_palladium, etc. from c:crushed_raw_materials/* regional ore feeds) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the ore-doubling pipeline that turns scarce regional metals into refined ingots feeds directly into the mint — processed scarcity becomes coin, which is exactly the economic loop the pack is built around
- from: createmetalwork crushed + molten forms for magic-mod ores (occultism/galosphere metals) | via: create:crushing (already tagged via c:crushed_raw_materials/palladium etc.) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic specialist's rare metals (occultism silver, galosphere palladium) get doubled through the Create foundry — a forge player and a magic player need to cooperate: you supply ore, I double it, we split the yield
- from: createmetalwork:molten_steel_bucket / molten_brass_bucket as structural alloy intermediates | via: create:compacting → structural cast → aeronautics hull components | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: casting molten steel/brass into hull plates at the foundry is the natural supply line for Aeronautics structural builds — the metalwork pipeline that makes metal is the same one that stocks the shipyard
- from: createmetalwork crushed andesite alloy → molten andesite alloy | via: create:mixing (already routed) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the mod's core function inside the Create spine — it's the existing anchor, not a new one; recording for completeness but it doesn't add a 2nd pillar

REWORK: existing Create anchor is coherent and well-grounded. The M-08 + M-03-magic + M-23 accepts above push it to 3 solid anchors (Create, economy, aeronautics), making it one of the pack's central bridging mods — appropriate given it touches every metal in the pack.

---

## kobolds   [anchors: economy, survival (2)]

OK — connections are sound in principle. Emerald-trade economy anchor and underground-structure/danger survival anchor are both coherent with the loop.

- from: kobolds:kobold_skull (mob-drop reagent) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a kobold skull — the trophy of an underground warrior race — is exactly the kind of dark curio an Occultism ritual or Ars imbuement would consume; adds a magic sink to combat rewards from the kobold dens
- from: kobolds loot tables (kobold_den / pirate_den structures) | via: loot-seed coin drop | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: kobold dens already function as mini-dungeons; seeding a small coin reward into their loot tables means raiding underground lairs pays in pack currency — bounty-board compatible (loot from combat → coin)
- from: kobolds Prospector enchantment (sold by enchanter kobolds) | via: villager trade → numismatics | to: economy | motif: M-21 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); surfacing for review but not accepting; also Prospector is already part of the emerald-trade economy loop, making this double-routing the same pillar rather than adding a new one
- from: kobolds:kobold_skull as boss-key gate item | via: create:mechanical_crafting (gating a Create recipe) | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: kobold_skull is a common combat drop from a mid-tier mob, not a boss signature; M-15 is for *boss drops* gating complex tech — the kobold is not a boss, so using its skull as a gate would violate M-15's "thematically sensible" rule and misrepresent the item's power level

REWORK: the "economy" anchor rests on emerald-trade, which is the vanilla trade economy, not the pack's Numismatics currency. This is borderline weak — it's a pre-existing vanilla mechanic the mod participates in but doesn't feed into Numismatics. REWORK CANDIDATE: either (a) use the M-14 loot-seed Accept above to give the dens direct coin output, or (b) document the emerald economy as a soft/indirect economy anchor pending the 0.9 economy pass. The M-02 skull sink is the cleaner way to earn a genuine third anchor (magic).

---

## endrem   [anchors: survival (1)]

- from: endrem thematic-eye reagents (endrem:undead_eye, endrem:nether_eye, endrem:corrupted_eye) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the themed eyes already carry strong elemental identity (undead = soul; nether = infernal; corrupted = dark); routing a stuck player's spare eye through a ritual transforms it into an Occultism essence or Ars source-adjacent reagent — the magic web gets an exotic input, and an explorer with duplicate eyes has a reason to visit the magic player
- from: endrem:guardian_eye (aquatic theme) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a guardian-attuned eye is exactly the kind of marine-spirit reagent Occultism would burn; M-02 mob-drop reagent sink applied to loot-gated exploration eyes (different mechanism from M-11 — this is direct fire-transmutation of a specific eye variant)
- from: endrem eye loot tables (structure chests, boss drops) | via: loot-seed (seed coin alongside the eye in dungeon chests) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the structures endrem seeds eyes into become genuine treasure-hunting sites; a coin reward in the same chest makes the dungeon-dive economically meaningful, tying exploration combat to the trade loop
- from: endrem:corrupted_eye or endrem:magical_eye | via: create:sequenced_assembly (derpack:incomplete_* chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: endrem's explicit design goal is *exploration* — each eye comes from a unique loot source so players must explore widely; making even one eye craftable through Create assembly undermines the mod's core mechanic. The dossier itself flags this risk. At most 1–2 eyes via craft would be acceptable but M-11 ritual is a better thematic fit than a sequenced assembly, and the loot-seed/magic pair already gives 2 good anchors without touching the exploration intent
- from: endrem eyes as boss-key items for a locked Create recipe | via: gating (KubeJS boss-key lock) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep or a specific rare eye is the prerequisite for unlocking a complex Create recipe (e.g. a high-tier controller or Aeronautics frame component) — now the End gate also gates *tech* progression, and the explorer/fighter serves the Create player

REWORK: current survival anchor (exploration/progression gate) is legitimate, but the mod needs a 2nd anchor badly — it's a pure exploration gate with nothing feeding production or economy. The M-11 magic sink and M-14 loot-seed Accepts above both make strong cases. M-15 boss-key is the highest-impact one if a specific end-gate boss drop (the Heart of the Deep from the Warden, or the ancient_portal_frame activation key) is used to gate a meaningful tech recipe.

---

## moblassos   [anchors: survival (1)]

- from: moblassos:emerald_lasso (villager transport) | via: deployment onto MineColonies / colony build | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the connection is a utility synergy (transport villagers to your colony) not a recipe or method routing; it's the kind of soft "workflow adjacency" the brief explicitly warns against as a forced edge; no registered method to route through; leave at survival
- from: moblassos lasso tiers (golden/diamond/netherite) | via: create:pressing (pressed metal → reinforced lasso core) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: higher-tier lassos are precision capture devices — pressing a metal frame into a lasso head on the Create press makes the mid/high-tier lasso a product of the tech spine, not a vanilla crafting table recipe; fitting for a tool that can carry any mob
- from: moblassos:hostile_lasso (monster capture) | via: create:item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the hostile lasso is a mid-tier item and M-20's rule is "not for basics" — but there's a subtler problem: a hostile lasso is essentially used once per capture and consumed on re-release; applying a Create part to it via M-20 would be gating a *consumable* behind a deployer, which is disproportionate for how the item is used in practice. M-05 mechanical crafting for the base frame is sufficient.

REWORK: the survival anchor is accurate but thin — moblassos is fundamentally a utility QoL tool (livestock logistics), and survival is the weakest possible anchor for it. The M-05 Create pressing Accept above is the best available 2nd anchor given the mod's limited material surface. The dossier's "aeronautics utility synergy" candidate is genuinely weak (no method) and should remain a soft note, not a formal anchor.

---

## aileron   [anchors: aeronautics (1)]

- from: aileron Elytra enchantments (loot-seeded, loot=yes) | via: ars_nouveau:enchanting_apparatus (applying Aileron's flight enchants through an arcane infusion table) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchantments are tuned upgrades to personal gliding — applying one through the Enchanting Apparatus makes arcane infusion the premium path to top-flight Elytra performance; a magic specialist can supply "enchanted Elytra" as a trade good
- from: aileron Elytra enchantments | via: irons_spellbooks:alchemist_cauldron_brew (brewing an Elytra-specific potion/catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the Iron's Spellbooks cauldron is for spell-scroll brewing, not Elytra enchants specifically; this connection is an awkward stretch and the Ars Enchanting Apparatus is a cleaner, more natural route for applying a flight enchant — reject in favor of the Ars path above
- from: aileron Elytra enchantments as premium aeronautics components | via: loot-seed into aeronautics-relevant structure chests (End City / Deeper Darker) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — this would reinforce an existing anchor (aeronautics), not add a new one; and it's already aeronautics-anchored via flight behavior; seeding enchants into loot is fine as flavor but doesn't constitute a second pillar weave

REWORK: the aeronautics anchor is legitimate (Elytra rebalance for multiplayer transport play). The M-10 Accept above adds a coherent magic 2nd anchor without forcing the mod — the Ars Enchanting Apparatus is the natural infusion delivery for enchantments of this type.

---

## farm_and_charm   [anchors: survival (1)]

- from: farm_and_charm:barley / farm_and_charm:oat (new grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running barley and oats through a Create Millstone produces the flour that feeds the farmhouse bread chain — the grain farm and the Create spine are now one integrated system; the farm player supplies grain, the Create player mills it
- from: farm_and_charm:butter / farm_and_charm cooked-meat outputs (bacon, ground_meat, etc.) | via: numismatics sell / Trading Floor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: an animal-husbandry specialist produces butter, ground meat, and eggs surplus to personal need — these become sellable trade goods on the Trading Floor; the farm feeds the colony-economy loop directly
- from: farm_and_charm crops (lettuce, corn, tomato — c:crops/tomato, c:crops/corn, c:crops/cabbage tags) | via: serene seasons gating (farm_and_charm crops are seasonal) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: this is the existing survival anchor (farmhand crops already belong there); M-16 would be strengthening the same pillar, not adding a new one; what matters is getting the Create milling and economy accepts confirmed
- from: farm_and_charm:feeding_trough (animal husbandry) | via: minecolonies composting or zero_waste | to: Create/economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — while the feeding trough as a colony livestock building is thematically adjacent to MineColonies, there's no recipe-type method to route material through; this is workflow adjacency, not a weave
- from: farm_and_charm feast dishes (farmers_breakfast_block, baked_lamb_ham_block, etc.) | via: farm_and_charm:roaster/stove → extradelight:vat ferment → alcoholic derivative | to: economy | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: running farm_and_charm's grain surplus through the extradelight vat produces malt/fermented goods that chain into the brewing/luxury economy — grain → malt → beer/spirits → coin, the farmstead's economic escape valve

REWORK: survival anchor is sound (crops + animal husbandry = textbook survival pressure reducer). The three Accepts above push it to Create + survival + economy — a clean 3-way anchor with no forced edges. The M-12 grain-milling connection is particularly strong because it's already how packs use this mod (dossier: "packs commonly bridge its grain milling into Create").

---

## create_sa   [anchors: Create, aeronautics (2)]

OK — connections are sound and well-justified. Built through create:sequenced_assembly/mechanical_crafting (Create), outputs personal flight and drone tools (aeronautics). Already at the 2-anchor target.

- from: create_sa:brass_drone_item (drone modules) | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 electric-charging makes sense only when the item is charge-driven; the brass_drone is battery-powered and Create Addition FE charging is appropriate — but this reinforces the *existing* Create anchor, not a third one; the dossier explicitly says no new edge needed and the mod is already at 2
- from: create_sa gear (jetpack/exoskeleton) | via: ars_nouveau:imbuement (attunement step for above-clouds enchant) | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: theme clash — Create Stuff Additions is explicitly industrial (brass/andesite/blaze construction); attunement via Ars feels out-of-genre for a gear mod whose flavor is "tech gadgeteer not mage"; the existing Create+aeronautics anchors are correct and sufficient; forcing magic onto industrial gear would fragment the tech/magic separation the pack design relies on
- from: create_sa:brass_jetpack_chestplate / create_sa:netherite_jetpack as high-tier flight items | via: numismatics trade (selling specialist gear) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Create specialist who has invested in the full brass-gear chain can produce jetpacks as high-value trade goods — the Create spine produces items other players want to buy; closing the loop from production to trade

REWORK: no structural rework needed. The M-09 Accept above is a bonus economy edge, not required for 2-anchor status.

---

## rechiseledcreate   [anchors: Create, support/decoration (2)]

OK — connections are sound. The Mechanical Chisel IS the Create kinetic weave (Create-powered automation of block-variant conversion), and the 242-block decoration palette earns the support/decoration anchor. The dossier's "no new edge needed" conclusion is correct.

- from: rechiseledcreate chiseled stone variants (andesite/asurine cut polished + small-brick) | via: create:cutting (mechanical saw as pre-cut step before chiseling) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is "deco crushes back to raw" — a recycle motif; what's described here is a forward production chain, not a recycle. More importantly this reinforces the existing Create anchor rather than adding a new one. The Mechanical Chisel already IS the Create kinetic integration; adding a cutting step is redundant depth.
- from: rechiseledcreate window-pattern glass blocks (acacia_window_*, birch_window_*, etc.) | via: numismatics / Trading Floor as high-end décor goods | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: chiseled window glass and decorative stone variants are premium building materials — a Mechanical Chisel specialist can supply them as processed décor goods in the colony/trade economy; "I make the fine stonework" is a valid trade specialization in a co-op building pack
- from: rechiseledcreate blocks | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same as above — reinforces the existing Create anchor, not a pillar addition. Decoration recycling back to stone is already covered by M-04 applied to vanilla blocks; this mod doesn't need its own recycle edge.

REWORK: "support/decoration" is a weak pillar label — it's not one of the four loop anchors (Create/Magic/Survival/Economy). The mod's actual loop value is Create-kinetics (the Mechanical Chisel is a Create processing block). Recommend relabeling: anchors = Create (the Mechanical Chisel + its recipes) + optional economy bonus (specialty décor goods via M-09). The decoration label should be downgraded to "flavor note" since it's a support role, not a loop position.

---

## create_connected   [anchors: Create (1)]

- from: create_connected:item_silo / inventory_bridge (high-capacity logistics blocks) | via: aeronautics integration (mounting silos/bridges on Aeronautics cargo contraptions) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — logistics-block utility on a moving ship is workflow adjacency without a recipe or method route; the briefing explicitly says this is not a weave
- from: create_connected:copycat_block (universal texture-skin block) | via: numismatics / Trading Floor as a premium décor good | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the copycat itself has no intrinsic value as a trade good — its value is the *texture applied to it*, which comes from any other block; selling blank copycats is not a meaningful trade specialization; the M-09 luxury-good motif requires that the processed output have distinctive economic value, which vanilla-recipe copycats don't carry
- from: create_connected:kinetic_battery / kinetic_bridge (stored rotation components) | via: create:mechanical_crafting → gate behind Create parts | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: this reinforces the existing Create anchor, not a new one; and M-06 is for *endgame items via sequenced assembly*, while kinetic batteries are mid-tier utility blocks; over-gating them would violate the "don't gate basics behind complex recipes" guardrail
- from: create_connected fan_catalyst blocks (blasting/freezing/haunting/etc. catalysts) | via: create:sequenced_assembly or create:item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: fan catalyst blocks are specialized Create parts that direct fan processing — having the rarer ones (haunting/withering/enriched catalysts) assembled through deployer application rather than a plain crafting table gates them appropriately inside the Create spine, making automation of unusual fan processes cost something

REWORK: Create (1) anchor is accurate but the mod is essentially a Create-internal QoL mod — its loop contribution is entirely within the Create production route, not bridging to other systems. The fan_catalyst Accept above keeps it in Create; a genuine second pillar is hard to find without forcing. Acceptable as 1-anchor if framed as a sanctioned Create-support role (like create_connected's dossier itself concludes). The fan_catalyst weave is a "Create depth" move (M-20 light gating), not a cross-pillar bridge.

---

## deeperdarker   [anchors: survival (1)]

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul_dust and soul_crystal are the Otherside dimension's signature drops — burning them in spirit fire transmutes them into Occultism essences, making the dark dimension a feeder for the magic web; an Occultism specialist needs to either go there themselves or trade with an explorer
- from: deeperdarker:heart_of_the_deep (rare Warden drop; boss-tier) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Heart of the Deep is a boss-rarity drop from the Warden — one of the most dangerous encounters in the pack; giving it a magic-infusion use makes the Warden fight meaningful for the magic specialist too, not just for portal-opening; it becomes a premium magic reagent
- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: gloomslate and sculk stone crush back to gravel + an XP nugget via M-04 — the decorator who over-mined the Otherside gets a partial refund; the Create spine gains the dark stone families as a deco-recycle input (already partially wired per dossier)
- from: deeperdarker:warden_carapace / sculk_bone (rare Otherside mob drops) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: dangerous materials obtained only in the Otherside dimension have inherent scarcity-premium; an Otherside explorer can sell carapace/sculk_bone as rare crafting inputs to players who need them but don't want to delve — scarcity drives demand drives trade
- from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement as an attunement catalyst | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallized amber from the Otherside has an eerie, primordial quality — it's a natural anti-arbitrage catalyst for magic conversions; M-07 attunement catalyst applied to a deep-dimension stone variant (joins galosphere allurite/lumiere in the catalyst palette)
- from: deeperdarker:soul_elytra (upgraded Elytra) | via: create:sequenced_assembly (incomplete_ chain requiring Create parts) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the Soul Elytra is assembled in-mod from soul materials + vanilla Elytra; the construction path is already thematically complete; forcing a sequenced_assembly chain on top of it adds Create-for-Create's-sake depth without a narrative reason; better to keep the soul-material-to-Elytra path in-mod and use the Create spine for the warden/soul material *sourcing/processing* (the M-11/M-02 Accepts above), not for the final assembly

REWORK: current survival anchor is correct (hostile dimension + gear tier). The five Accepts above push it to survival + magic + Create + economy — a 4-way anchor set that makes deeperdarker one of the pack's most well-woven content mods. No structural rework needed on the existing anchor; the gap is the missing 2nd through 4th anchors.

---

## clumps   [anchors: support/performance (1)]

LEAVE — pure server-side XP-orb entity merger; zero items, zero loot, zero recipe surface. No weave surface exists. Sanctioned performance-support role.















