# Phase 2 candidates — chunk-03

## occultism   [anchors: magic (1)]
- from: mob/boss drops (any) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: burning a foreign drop in the spirit fire is exactly what the eldritch furnace is for — converts waste drops into foliot/djinni essences that no other route produces
- from: mob/boss drops (any) | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: pentacle rituals already consume sacrifice items; wiring exotic drops (cataclysm/illager drops) to ritual inputs makes the summoning web demand combat output
- from: occultism:iesnium_ore / silver_ore | via: occultism:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's own crusher doubles its exclusive ores — a parallel ore-doubling path that rewards magic investment, not just Create investment
- from: occultism:datura (crop) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: datura flowers milled to datura dust — a cheap Create processing step that ties the crop to the spine; one light step appropriate for an everyday material
- from: spirit_trade goods | via: occultism:spirit_trade | to: economy | motif: M-18 | power: mid | tone: ok | verdict: ACCEPT | hook: summoning a Djinni to acquire void-dimension goods is magic logistics — the spirit replaces an airship route to an inaccessible dimension
- from: occultism:silver_ingot | via: create:pressing → numismatics:mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism's real silver (the pack's c:ingots/silver) is a prime coin-mint metal; a Create-pressed silver coin is the magic specialist's currency contribution
- from: foreign magic essences (ars_nouveau:source_gem etc.) | via: occultism:crystallize | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: crystallizing source into an occultism intermediate locks the two magic pillars together at the reagent level — neither is self-sufficient for top-tier rituals
- REWORK: dossier lists M-09 (economy via spirit_trade "sellable") — M-09 is retired; the spirit_trade economy angle is valid only as M-18 (magic logistics acquiring a scarce good) or M-33 (service-for-hire: summon a Djinni on another player's behalf for payment). Re-express the 2nd-anchor candidate as M-18 / M-33, not M-09. Flagging the dossier note for update.
- from: foreign essences/gems via ars_nouveau:imbuement | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-10 already covers this direction (foreign material → arcane reagent via imbuement); routing Occultism drops *into* Ars is M-11/M-10 combined — proposing it here would double-spend the same edge; track under Ars dossier instead

## durabilitytooltip   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface client library; 0 items, 0 methods, no material to route. Pure tooltip rendering; sanctioned support role.

## biolith   [anchors: support/library (1)]
- LEAVE — worldgen API library, 0 items/blocks/methods. Nothing to weave; pulled purely as a dep.

## revelationary   [anchors: support/library (1)]
- LEAVE — progression-gating API, 0 items/blocks. Mechanically it underpins M-05 (native-method gating) when a dependent mod uses the reveal mechanic, but revelationary itself has no content surface to weave.

## moreoverlays   [anchors: support/QoL (1)]
- LEAVE — client HUD overlay only; 0 items/blocks/methods. No material surface.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter; 0 items/blocks. Pure developer plumbing, nothing to weave.

## railways   [anchors: create, aeronautics (2)]
- from: railways loot (conductor caps, locometal items) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: conductor caps and locometal found on derailed/abandoned train wreck structures would seed the combat-supply loop — explorers loot parts that non-combat players need for train builds
- from: railways:locometal blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: locometal deco blocks crush back to raw iron/gravel + XP nugget (lossy) — the standard Create deco-recycle path; earns the 3rd anchor but is a light step fitting everyday material
- from: railways track recipes | via: create:sequenced_assembly | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: railways already uses create:sequenced_assembly (existing inbound weave in dossier) — proposing it again is not a new link. The existing anchor is already Create+aeronautics; this would just reinforce an established edge, not add a system.
- from: brass/copper/iron consumption in track recipes | via: M-29 cross-route dependency | to: create/magic | motif: M-29 | power: mid | tone: ok | verdict: REJECT | reason: the cross-route dependency here would just be "needs Create metals," which railways already consumes — there is no magic-route input that would force a magic specialist to trade with a rail builder. No coherent M-29 edge without forcing.
- OK — connections sound. Already at 2 anchors (Create + aeronautics); the loot-seed and M-04 crush above are incremental improvements, not corrections.

## direct_chute   [anchors: create (1)]
- LEAVE — single Create logistics block (1 item); crafted from zinc (already a Create material). No foreign material surface, no methods to route through. A forced 2nd anchor would be a contrived edge. Sanctioned as a Create QoL add.

## woodworks   [anchors: survival (1)]
- from: woodworks deco blocks (boards, bookshelves, ladders, beehives) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood deco crushing back to planks/sawdust + XP nugget (lossy) — the standard Create deco-recycle path; earns Create as a 2nd anchor with one light step
- from: any wood log/plank | via: woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: woodworks:sawmill cuts logs → deco; this is purely within wood decoration, not a cross-system link. M-12 covers useful *intermediates* from processing; sawmill outputs are deco, not feedstock for another system. Overlap with create:cutting is cosmetic, as the dossier flags [WEAK].
- from: woodworks:*_beehive variants | via: survival/farming | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: beehives are a decoration palette variant of vanilla beehive — consumption sink here is just vanilla honey farming. No motif-worthy cross-system hook; the beehive's ecology is vanilla and doesn't advance the loop.
- REWORK: dossier candidate "Create via create:cutting [WEAK M-12]" is correctly flagged weak; the M-04 crush above is the stronger actual method. No existing connections to rework (no authored weaves yet), but the dossier's own candidates are well-assessed.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — structure overhaul only; 0 items, 0 registered methods, loot=no (uses vanilla mineshaft loot). No seeding opportunity beyond vanilla tables; nothing to weave.

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure decoration palette (painting variants); 0 items beyond the painting entity, no methods. Nothing to weave.

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — client-side chat UI; 0 items/blocks/methods. Pure display layer.

## terralith   [anchors: survival (1)]
- from: Terralith's 65 c:tags (biome tags) | via: worldgen/spawn gating | to: survival | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Terralith's biome diversity gives the regional-scarcity foundation real surface — biome-specific ore-gen (GTMOGS veins keyed to Terralith biome tags) makes regions meaningfully different, so the trade loop's scarcity foundation becomes visible terrain. The 65 c:tags are exactly the hooks GTMOGS/ore-gen uses.
- from: Terralith fantastical biomes (Moonlight Grove, Skylands etc.) | via: worldgen/spawn gating | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: a moon-event-sensitive biome (Moonlight Grove) or a floating-island biome (Skylands) could gate rare worldgen flowers/crystals that feed magic rituals — the biome is the lunar/celestial seam
- from: Terralith biome expansion | via: regional scarcity (ore-gen keying) | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: this is the same link as the M-30 ACCEPT above, just stated from the economy end. The ACCEPT already captures it; recording the reject to avoid double-counting.
- REWORK: dossier says "none — leave" for 2nd anchor candidates. This undersells the M-30 and M-22 angles — Terralith's 65 biome c:tags are the substrate that make GTMOGS regional-scarcity work, and that is a real structural contribution to the scarcity foundation even without items. The "leave" verdict should be updated to acknowledge the M-30 / biome-tag contribution. Not a weave the dossier missed weaving — it's a characterization gap.

## minecolonies   [anchors: survival, create (2)]
- from: colony food output (minecolonies:apple_pie, baked_salmon, c:foods/bread, c:foods/soup) | via: survival/colony demand | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony cook produces food that feeds its own citizens and outputs surplus — that surplus is the cheapest food source on the server, so non-colony players buy it rather than farm; M-28 routes colony production into the player-economy demand loop
- from: MineColonies research tree | via: minecolonies:research (university) | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: university research gates colony capabilities that can't be bought (the capability, not its product) — a colony player's research investment is a non-tradeable competitive moat, which is what M-37 is designed to formalize
- from: colony quarry output (stone/ore streams) | via: minecolonies:zero_waste composting | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: quarry byproducts (gravel, cobble, excess organics) routed through MineColonies zero_waste / composting to extract compost or rock dust — a byproduct→input circularity tying colony extraction to Create's material web
- from: MineColonies as alternate production route | via: M-28 colony-lock | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: REJECT | reason: colony-locked exclusives are already the established design (per SYSTEMS.md and dossier "already ≥2 — Create weave authored"); this would just restate the design intent. Not a new candidate — the lock list is designed incrementally per SYSTEMS.md, not authored here.
- OK — connections sound. The dossier's self-assessment is accurate; the new ACCEPT candidates (M-28 food surplus, M-37 research gate, M-32 byproduct circularity) add economy/Create depth without contradicting established anchors.

## dynamictreesplus   [anchors: survival (1)]
- from: dynamictreesplus:saguaro_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: saguaro fruit milled to a dye intermediate or desert-food flour — one light Create step turning forage into a processed good; clean M-12 "raw forage → useful intermediate"
- from: dynamictreesplus:mushroom_cap blocks / items | via: farmersdelight:cutting | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Farmer's Delight cutting board slices mushroom caps to mushroom slices/soup base — routes the bulk DynamicTrees+ organic output through the food-processing spine, earning a survival-food sub-anchor
- from: dynamictreesplus:saguaro_fruit / mushroom items | via: extradelight:juicer | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the juicer route is a duplication of the milling/cutting candidates above — all three are M-12 "raw forage → processed good." Accept the highest-value two; the juicer is a weaker third delivery that adds no cross-system novelty.
- from: dossier candidate "economy via numismatics [WEAK M-09]" | via: — | to: — | motif: — | power: — | tone: — | verdict: REJECT | reason: M-09 is retired. "Saguaro fruit as a sell-good" is the ambient endpoint, not a weave. Rejecting per player-run-economy rules.

## ctov   [anchors: survival (1)]
- from: ctov village structures | via: loot-seed | to: survival/economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Numismatics coins or high-value trade goods into ctov village/outpost loot tables makes exploration pay — players looting variant villages find coin or reagents that feed the player economy, not NPC shop inventory
- from: ctov pillager outpost structures | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding rare mob-drop reagents (magic essences, boss-related items) into outpost chests gives the danger of exploring an outpost a magic-progression payoff — M-02 mob-drop reagent sink via loot discovery
- from: ctov village loot | via: loot-seed → economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: M-30 is regional scarcity gating a recipe input; seeding loot into a biome-specific village is thematically adjacent but the mechanic is loot-seed (M-34/M-02 above), not regional-scarcity gating. Re-expressed as M-34/M-02 above.
- REWORK: dossier says "none — leave" for 2nd anchor candidates, reasoning "no items/methods." The loot=yes flag (confirmed in AUTO counts) means loot-seed delivery is available and the BRIEFING explicitly says do NOT LEAVE a loot-bearing structure mod. The dossier's "leave" verdict needs updating to reflect the loot-seed opportunity.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite / dyed tires | via: create:toolbox_dyeing or create:mixing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dye step is already in the mod's own recipe (hold dye + catalyse levitite); routing it through Create mixing is gilding an existing one-step recipe. M-04 is for crushing back deco to raw — that's not what's happening here. No coherent Create integration that isn't redundant with the existing recipe.
- from: dyed levitite variants | via: aeronautics construction | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: M-23 is the structural alloy → airframe seam; dyed levitite is a cosmetic color variant of the base levitite, not a structural alloy. Forcing it into M-23 would be misuse of the motif.
- LEAVE — cosmetic dye-permutation layer for Aeronautics parts; no new methods or materials. Sanctioned as aeronautics decoration palette (support role). Its aeronautics anchor is its purpose; a forced Create/economy edge would be non-edge. One anchor is the floor, but no coherent 2nd weave exists here.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's gem is an endgame drop from a dangerous boss; routing it into Ars imbuement as a catalyst makes the magic specialist dependent on a combat specialist for top-tier infusions — boss combat → magic progression
- from: illagerinvasion:illusionary_dust | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust from Illusioners is exactly the "isolated mob drop given a use as a magic input" the ritual sink is for; occultism rituals consuming illusionary dust for a conjuration effect is thematically tight
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum chunk (dropped by illager bosses) crushed to platinum dust + byproduct — a Create ore-doubling step that pulls the boss drop into the tech spine and gives Create players a reason to care about the Invoker
- from: illagerinvasion:hallowed_gem | via: occultism:ritual (boss-key gate) | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Hallowed Gem as a gate item for a high-tier Occultism ritual (e.g. summoning a Marid or opening a dimensional mineshaft) — the boss-key pattern: kill the Invoker to unlock a tier of magic automation
- from: illagerinvasion Imbuing Table (enchantment-boosting service) | via: service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the Imbuing Table pushes enchantments past vanilla caps; a player who controls an Invoker farm and the copper multiblock offers over-cap enchanting as a paid service — nobody else can provide it, so demand is structural
- from: illagerinvasion:lost_candle / horn_of_sight | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: these are mob drops, not loot-seeded items; they drop directly from illager mobs. M-34 combat-route supply is already covered by the accept candidates above (hallowed_gem/platinum_chunk trade). The lost_candle/horn_of_sight are thematically flavor items without a second-system hook strong enough to accept.

## cubes_without_borders   [anchors: support/QoL (1)]
- LEAVE — client window-mode option; 0 items/blocks/methods. Pure display feature; sanctioned support role.

## invtweaksemuforipn   [anchors: support/QoL (1)]
- LEAVE — client keybind compat shim for IPN; 0 items/blocks/methods. Pure client-side compat glue.

== CHUNK COMPLETE ==
