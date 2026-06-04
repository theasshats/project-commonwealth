# Phase 2 candidates — chunk-06 (pass-12, context-fed)

---

## bosses_of_mass_destruction   [anchors: survival (1)]

Existing rows cover: ancient_anima → ars:imbuement (M-10, ×8, ACCEPT); void_thorns → occultism:ritual (M-11, ×5, ACCEPT); obsidian_heart → create:sequenced_assembly (M-15, ×5/×3, ACCEPT); blazing_eye → ars:imbuement (×3, REJECT); ancient_anima → bountiful bounty (M-14, ×2, ACCEPT). The magic (M-10/M-11) and Create (M-15) 2nd-pillar entries are well-converged. What is missing:

- NEW: from: bosses_of_mass_destruction:brimstone_nectar (Nether Gauntlet drop, mid-tier liquid-amber drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — brimstone nectar is a hot nether essence; spirit_fire's transmutation sink is natural (fire theme aligns) | verdict: ACCEPT | hook: the gauntlet's fiery essence feeds the occultist's furnace — a satisfying thematic arc.
  _Reason for gap: existing runs REJECT brimstone_nectar→spirit_fire (×1) but all the blazing_eye rejections swamped the signal. Brimstone_nectar is a *separate* drop from blazing_eye and carries a distinct fire-elemental theme that spirit_fire fits cleanly._

- NEW: from: bosses_of_mass_destruction:crystal_fruit (Obsidilith / structure loot, decorative fruit block) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — crystal_fruit is a deco-tier block placed in Obsidilith arena structures; crushing it back to amethyst shards + xp-nugget is the same deco-recycle logic used on every other decorative block | verdict: ACCEPT | hook: the arena's crystalline furniture crushes cleanly into Create's amethyst supply — nothing wasted.
  _Reason for gap: every prior row focuses on the boss-drop reagents (obsidian_heart / ancient_anima / blazing_eye / void_thorns); crystal_fruit as a crushable arena-deco block is entirely absent._

- CHALLENGE: to existing row `bosses_of_mass_destruction:obsidian_heart → create:sequenced_assembly (M-15, ×5 ACCEPT)` — the obsidian_heart is also the Night Lich (Overworld boss) drop, making it a *mid-game* boss gate (accessible before Nether or End bosses). Routing it through sequenced_assembly for a *high-tier* chain risks over-gating something reachable relatively early. Suggest scoping this as a *mid-tier* sequenced-assembly step (not the deepest endgame chain) or pairing it with the blazing_eye / ancient_anima as co-reagents for truly top-tier craft, rather than making obsidian_heart alone the keystone. Power-tier note, not a rejection — the M-15 motif still fits.

---

## expandeddelight   [anchors: survival (1)]

Existing rows cover: salt_ore → create:crushing (M-03/M-12, ×11, ACCEPT); cheese_wheel → numismatics sell (M-09, ×11, ACCEPT); cinnamon → create:milling (M-12, ×10, ACCEPT); salt_dust → create:mixing (M-12, ×2, REJECT); cranberry/sweet_potato → create:milling M-16 (×2, REJECT). The Create (M-03/M-12) and economy (M-09) pillars are well-covered.

- NEW: from: expandeddelight:chili_pepper (crop, tagged item/crops/chili_pepper + item/foods/chili_pepper) | via: extradelight:evaporator | to: survival (deepening the chain toward a second pillar) | motif: M-12 | power: everyday | tone: ok — chili peppers evaporate into a hot-pepper extract/paste that feeds downstream food recipes and, if that paste can serve as a Cold Sweat insulating reagent (hot food → warmth link), crosses into cold_sweat's survival system | verdict: ACCEPT | hook: the kitchen's heat doesn't stop at the bowl — the evaporated chili paste carries warmth into the cold-biome survival layer.
  _Reason for gap: all prior rows hit salt/cinnamon/cheese as the connective crops; chili_pepper is a c:-tagged crop that hasn't been routed through any processing method. The evaporator→cold_sweat warmth link is a subtle two-hop weave (expandeddelight → cold_sweat survival) that no prior pass surfaces._

- NEW: from: expandeddelight:asparagus / peanut crops (tagged c:foods, common farmland) | via: farmersdelight:cutting (already an inbound weave on this mod) + create:milling (M-12 extension) | to: create | motif: M-12 | power: everyday | tone: ok — peanut milling → peanut flour (a baking intermediate) that feeds bakery:blank_cake or extradelight recipes; asparagus cutting → asparagus shreds as a milling input for seasoning | verdict: ACCEPT | hook: the mill turns the garden's output into the bakery's pantry — one continuous chain.
  _Reason for gap: only salt_ore/cinnamon/cheese are cited by prior passes; asparagus and peanut as milling inputs connecting to the Bakery mod (which is at ×9 ACCEPT for milling) is a complementary chain that reinforces both mods simultaneously._

- CHALLENGE: to existing row `expandeddelight:cranberry/sweet_potato → create:milling M-16 (×2 REJECT)` — the REJECT reason in prior passes appears to be that M-16 is seasonal-reagent and these crops aren't strictly season-locked by Serene Seasons (the reject rationale "not season-gated" is valid). However, sweet_potato as a M-12 processing-chain pull (milling into sweet potato flour → pie filling) is a valid ACCEPT under M-12 without needing M-16. The REJECT is correct for M-16 specifically but the underlying material is still a good M-12 candidate, which prior passes missed because they bundled it with the M-16 rejection.

---

## formationsnether   [anchors: survival (1)]

Existing row: loot-table injection → numismatics (M-09, ×2 REJECT). No ACCEPT rows. The mod registers 0 items, 0 blocks — only a loot=yes worldgen structure mod.

- NEW: from: formationsnether nether-structure loot chests (the ritual altars, sanctuary chests — loot table surface) | via: loot-table datapack injection of occultism reagents (e.g. occultism:otherstone_fragment, irons_spellbooks:arcane_essence) | to: magic | motif: M-02 (mob-drop reagent sink — extended to structure-loot seeding as an equivalent surface) | power: mid | tone: ok — nether ruins carrying occult/arcane reagents is tonally aligned; the hostile nether feel pairs with dark-magic drops | verdict: ACCEPT | hook: the ruins of the nether hold arcane relics — and the occultist's workbench hungers for them.
  _Reason for gap: prior passes only proposed economy (numismatics coin, all REJECT) and no magic-seeding angle. Seeding magic reagents (not coins) into structure loot is the exact M-02 pattern applied to dungeon chests by betterdungeons; this mod's nether-ruin loot tables are the same surface._

- CHALLENGE: to existing ×2 REJECT of formationsnether → numismatics (M-09) — both REJECT for "loot-table only, no method." The challenge is not to reverse these REJECTs but to note that the loot-table surface *is* a legitimate weave surface under M-02 (reagent seeding), not M-09 (luxury coin). The rejections conflate two different motifs; the mod deserves a targeted ACCEPT under M-02 not M-09.

---

## aileron   [anchors: aeronautics (1)]

Existing rows: Elytra enchantments → ars:enchanting_apparatus (M-10, ×5 REJECT, ×2 REJECT); loot items → numismatics sell (×1 REJECT). All rows REJECT. The mod has 0 items/blocks, behavior-only.

- NEW: from: aileron Elytra flight-physics rebalance (behavior, not item) | via: aeronautics systemic fit — aileron makes Elytra a *peer* to Create Aeronautics ships, not a trivializer; this is a design-level anchor, not a recipe weave | to: aeronautics (already primary anchor) | motif: (none — design fit, not a method-routing) | power: — | tone: ok | verdict: LEAVE — aileron is a behavior/balance mod with 0 items; no method-routing is coherent. It earns its place by *being* in the aeronautics pillar as the personal-flight discipline that coexists with (rather than shortcuts past) ships. No second pillar is reachable via recipe.
  _This NEW adds the explicit LEAVE rationale to confirm the pattern, replacing the implicit "no row" with a clear disposition. The existing rows all REJECT; the right answer is LEAVE, not continued searching._

---

## edf-remastered-5.0-beta4   [anchors: survival (1)]

Existing row: harder dragon fight → M-15 boss-drop gate (×1, REJECT). The mod has 0 items, 0 blocks, does not change dragon drops — confirmed LEAVE.

- NEW: LEAVE — edf-remastered is a pure behavior overhaul (harder Ender Dragon AI/HP). It adds no items, does not modify the Ender Dragon's drop table, and owns no recipe surface. No method-routing is possible. Earns its place as a solo survival-pillar difficulty-spike alongside End Remastered (which does add drops). Any recipe weave here would require inventing content the mod explicitly does not have.
  _Prior REJECT (×1) already captures this but the LEAVE disposition is more precise than a REJECT, which implies a proposed weave was considered and dismissed._

---

## copperagebackport   [anchors: survival (1)]

Existing rows cover: copper deco blocks → create:crushing (M-04, ×4/×2/×1/×1 across ACCEPT and REJECT); Copper Golem → aeronautics/logistics (×2 REJECT). The M-04 Create-recycles-deco is the converged 2nd-pillar anchor.

- NEW: from: minecraft:copper_chest (the large copper container, oxidizes through 4 states, all waxable) | via: create:splashing (de-oxidize copper_chest back to clean copper_chest stage, same as any copper block) | to: create | motif: M-04 | power: everyday | tone: ok — splashing is already the canonical Create copper-de-oxidation method; applying it to copper chests is identical in tone to de-oxidizing copper stairs or lanterns | verdict: ACCEPT | hook: the copper chest weathers in the field, but a well-placed waterfall brings it back — Create's splash mechanic closes the loop.
  _Reason for gap: prior passes propose crushing on copper deco generically but no pass explicitly names the create:splashing de-oxidize step for the copper_chest/lantern/bars set. Splashing is distinct from crushing and is the more thematically correct interaction for oxidized copper (de-oxidize, not destroy). This is a missing method-routing not a duplicate._

- NEW: from: minecraft:copper_golem_statue (the Copper Golem item-sorting mob) | via: create:mechanical_crafting gate (require a brass casing or an andesite casing as part of its craft) | to: create | motif: M-05 | power: mid | tone: ok — the Copper Golem is an automated item-sorter; gating it on a Create mechanical component signals that "real" item logistics needs Create's metals, not just raw copper | verdict: ACCEPT | hook: you can shape copper into a golem, but it takes Create brass to give it a working head.
  _Reason for gap: prior passes propose the Copper Golem as an aeronautics/logistics thematic adjacency (all REJECT as no-motif) and never frame it as M-05 native-method gating. M-05 is a clean fit: the golem is the mod's flagship creature; gating it on a Create part anchors it to the Create pillar without forcing an aeronautics edge._

- CHALLENGE: to existing ×4 ACCEPT `copper deco blocks → create:crushing (M-04)` — this is sound but unspecific. The copper tools/armor (copper_axe, copper_boots, etc.) are *more* interesting crushing candidates than the deco blocks, because crushing copper tools back to nuggets fills the exact gap that vanilla 1.21.1 leaves (no smelting of tools back to metal). A targeted row on tools/armor as M-04 crushing candidates is sharper than the generic "deco" framing and deserves its own acceptance — prior passes lump everything under "deco" which obscures the tools angle.

---

## enhancedcelestials   [anchors: survival (1)]

Existing rows cover: meteor → create:crushing (M-04, ×11 ACCEPT); Blood/Harvest/Blue Moon event state → magic method (M-22, ×8 ACCEPT); space_moss → ars:imbuement (M-10, ×7 REJECT); space_moss → create:milling (×2 REJECT); Harvest Moon → M-16 Create logic (×2 REJECT). The M-04 (meteor→crushing) and M-22 (moon event→magic) pillars are converged.

- NEW: from: enhancedcelestials:space_moss_block (harvestable from meteor impact sites, no c:-tag) | via: farmersdelight:cutting or extradelight:drying_rack | to: survival (connecting to the food/delight web as a secondary weave — not a 2nd pillar alone, but threading into a food-web as a garnish/alchemical herb) | motif: M-12 | power: everyday | tone: ok — space moss as a drying-rack herb yielding a "cosmic dust" intermediate is plausible within a magic-adjacent kitchen | verdict: ACCEPT | hook: the moss that fell from the sky dries into something the apothecary actually wants.
  _Reason for gap: all prior passes on space_moss route it through ars:imbuement (M-10, REJECT ×7) or create:milling (M-12 REJECT). The REJECT rationale is the block has no c:-tag and milling it produces nothing useful. But extradelight:drying_rack doesn't require a c:-tag and the "drying as step toward a reagent" is a lighter, tone-coherent step that avoids the no-c:-tag problem. The M-12 framing with drying_rack is missing from all prior rows._

- NEW: from: enhancedcelestials Harvest Moon event (global crop-growth buff active at night) | via: minecolonies food supply chain — Harvest Moon's crop boost raises farm output, which feeds MineColonies restaurant supply for colony morale | to: economy (colony food demand → economic throughput) | motif: M-09 (luxury good → coin, food surplus → sell) | power: everyday | tone: ok — the colony eats more during Harvest Moon; surplus production reaches the marketplace | verdict: ACCEPT | hook: on Harvest Moon nights the colony's pantry overflows — the merchant posts the overflow for coin.
  _Reason for gap: no prior pass surfaces the Harvest Moon → MineColonies food supply → economy chain. The moon event's crop-growth acceleration is a pure throughput multiplier whose downstream beneficiary (colony food demand creating a trade surplus) anchors economy as a 2nd pillar via M-09 — without gating a basic crop behind anything complex._

- CHALLENGE: to existing ×11 ACCEPT `enhancedcelestials:meteor → create:crushing (M-04)` — the motif is sound but the expected outputs should be stated: crushed meteor → iron nuggets (raw_iron dust) + nickel_dust (for any pack mod with nickel c:-tag, otherwise fallback to extra iron). Without specifying the output, the recipe author has to guess. This isn't a REJECT but the ACCEPT needs an explicit output-pair annotation to be authorable — the "what does the meteor crush into?" question is load-bearing for authoring.

---

## sky_whale_ship   [anchors: survival (1)]

Existing rows cover: loot chests → aeronautics destination (M-15, ×3 ACCEPT); loot chests → numismatics coin drop (M-09, ×5 REJECT); loot chests → aeronautics M-23 (×2 ACCEPT); loot rarities → numismatics/bounty (M-09, ×2 REJECT). Converged: aeronautics loot-seeding (M-15) as the 2nd-pillar path.

- NEW: from: sky_whale_ship structure — the whale is a sky-altitude exploration target accessible only by flight | via: Bountiful decree configuration — a Decree objective `"reach sky_whale_ship structure"` or `"obtain sky_whale loot"`, paying coin | to: economy | motif: M-14 | power: mid | tone: ok — a bounty board offering good coin for whale-loot makes the sky-whale a paid mission, not just a curiosity; the aeronautics/economy link follows naturally (you need a ship to claim it, and the reward is coin) | verdict: ACCEPT | hook: the Merchant's Guild posts a handsome reward for whatever cargo drifts on the great whales' backs.
  _Reason for gap: all economy rows for sky_whale use numismatics coin drop (M-09, all REJECT because the mod has no loot table of its own per the dossier: "loot=no"). M-14 via bountiful decree is a config-side integration that sidesteps the "no loot table" problem entirely — the bounty objective can be an item that *already drops* in the area or a kill objective on any hostile aboard the whale, not a new loot table entry._

- CHALLENGE: to existing ×3 ACCEPT `sky_whale_ship loot → aeronautics destination (M-15)` — the dossier says loot=no (0 items/blocks registered, no loot table found in jar). If the whale genuinely has no loot table to inject into, M-15 as a loot-table-routing ACCEPT is misfiled — there is no surface. The integration must be either: (a) custom datapack loot tables added by the pack itself to the whale's structure chests, or (b) the M-14 bountiful-decree approach above. Authoring note: before treating these as ACCEPT, verify that the whale structure does carry injectionable chest loot; if not, all M-15/M-23 loot-seeding rows should be downgraded to `pending-verification`.

---

## underground_village   [anchors: survival (1)]

Existing rows cover: Stoneholm villager trades → numismatics villager-trade seating (M-21, ×12 REJECT); villager trades → bountiful board (M-14, ×2 ACCEPT); chest loot → coin/reagent (no-motif, ×2 REJECT).

All proposed M-21 rows REJECT (M-21 is provisional, maintainer leans no). The M-14 bountiful board path is the surviving direction.

- NEW: from: underground_village Stoneholm villager profession pool (underground farmers, librarians, or armorer villagers specific to the subterranean biome) | via: bountiful:decree configured to target items these villagers *want* as objective (e.g. underground crops, stone tools) and pay coin | to: economy | motif: M-14 | power: everyday | tone: ok — pointing bountiful decrees at the underground settlement makes it a dungeon-economy node, not just a discovery curiosity | verdict: ACCEPT | hook: the Stoneholm notice board asks for provisions — fill it and the colony pays in coin.
  _Reason for gap: the ×2 ACCEPT rows for M-14 bountiful exist but are vague ("villager trades → bountiful board"). This NEW sharpens the direction: the deck is Bountiful objectives *using the underground villagers' wants as targets*, not a generic "bounty board exists." The framing also avoids M-21 entirely._

- NEW: from: underground_village Stoneholm structure (underground hall/home build palette — stone, deepslate, mossy cobblestone, lanterns) | via: create:crushing on the structure's reclaimed deco blocks if broken (M-04 recycles-deco) — a player dismantling a Stoneholm ruin gets Create-useful crushed stone/gravel | to: create | motif: M-04 | power: everyday | tone: ok — raiding or repurposing a Stoneholm structure yields the same crushing rewards as any mossy-cobblestone or stone-brick build | verdict: ACCEPT | hook: the abandoned wing of Stoneholm crunches through the millstone like any other old stonework.
  _Reason for gap: no prior pass proposes a Create angle for underground_village. The structure is built from standard vanilla stone-tier blocks, all of which are already M-04 crushing candidates. This is a trivial "the blocks it places are already crushable" observation — no KubeJS needed, the existing M-04 crushing rules cover them. Noting it gives the 2nd pillar (Create) without any authoring cost._

- CHALLENGE: to ×12 REJECT `Stoneholm villager trades → M-21 numismatics villager-trade seating` — the mass rejection is correct (M-21 is provisional/leans no). However, the underlying desire — that Stoneholm villagers participate in the economy — survives under M-14 (bountiful board using those villagers' profession-goods as objectives) and under M-09 if a villager in Stoneholm sells a luxury good (cheese, wine) at a numismatics-priced trade. The challenge is that M-09 doesn't require M-21: if a villager already trades in a luxury good, that trade is already M-09 economy with no route through the villager-trade-seam. The ×12 M-21 REJECTs accidentally suppress the M-09/M-14 framings that don't need M-21.

---

## direct_chute   [anchors: create (1)]

No rows in CANDIDATES.md for direct_chute at all (not proposed in any prior pass).

- NEW: LEAVE — direct_chute is a single-block Create logistics add-on (zinc direct chute). It already anchors to Create (primary pillar). Its only content is `direct_chute:direct_chute` (1 block, 1 item); no method-routing exists on it, it owns no method, and it produces nothing a second pillar could consume. A forced weave would require inventing functionality the mod doesn't have. The aeronautics-logistics adjacency is nominal (items on ships pass through chutes, but that's passive co-presence, not a designed edge). LEAVE — one pillar is the correct disposition.

== CHUNK COMPLETE ==
