# Phase 2 candidates — chunk-07

## createmetalwork   [anchors: create (1)]

Power-read: This mod's entire content surface is the unified molten-metal pipeline — it provides the `c:crushed_raw_materials/*` tags (24 metals) and `molten_*` fluids that sit between raw ore and finished ingot. Everything else in the pack that uses metal flows *through* this layer. It's everyday-to-mid infrastructure (not endgame in itself), so weave depth should be light (one step, not a chain).

- from: createmetalwork:molten_<regional_metal> (e.g. platinum, osmium, quicksilver) | via: numismatics mint (player presses molten-output ingots into coin blank) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the only way to mint coin from a scarce regional metal is to first run it through Create's melt/cast — the ore-processing spine becomes the money-supply spine; a dedicated smelter controls the currency feedstock
- from: createmetalwork crushed + molten forms of occultism/galosphere metals (palladium, quicksilver) | via: create:crushing → ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a player can't get the magic reagents out of those ores without running them through the Create pipeline first — the metal-processing spine gates the magic tier
- from: createmetalwork molten steel / molten netherite output | via: create:compacting → aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: casting structural plates from molten steel is exactly how you'd build an airship hull — the smelter feeds the shipyard

REWORK: None — single anchor, no existing connection to audit.

---

## createmechanicalcompanion   [anchors: create (1)]

Power-read: This is an endgame Create personal-companion item (netherite-tier, sequenced assembly). Its loot table has a drop (illager engineer spawn egg, potato cannon illager). The dossier author already concluded "no clean 2nd anchor — leave." Let me red-team that conclusion.

Red-team: The mechanical wolf is combat-capable and its modules include mob-radar and shock-on-hit. Does this connect to survival/danger? The companion is crafted, not dropped — it's a product of Create, not an input to anything. No mob-drop output, no fluid, no reagent surface. The loot=yes is spawn eggs for hostile mobs, not weave-relevant items. The only possible 2nd anchor is M-34 (combat-supply) — a non-combat specialist might want to *buy* combat-companion modules from a Create specialist. But that's the ambient player-trade endpoint (exactly what the briefing calls the ambient sell link), not a demand-gating mechanism. There's no structural consumption, colony gate, or cross-route dependency to pin here.

- from: createmechanicalcompanion modules (optical sensor, mob radar) | via: selling modules to non-combat players | to: economy | motif: no-motif | power: endgame | tone: ok | verdict: REJECT | reason: "modules are tradeable" is the ambient economy endpoint — every item is tradeable; this is not a demand-gating link; no motif applies without forcing it
- LEAVE — genuine single-anchor Create reward item; no processing surface, no colonial/boss-key/cross-route handle; a forced 2nd edge would be cosmetic

---

## quark   [anchors: support/decoration (1)]

Power-read: Quark is huge (809 blocks, 1000 items) but mostly vanilla-plus aesthetic + QoL. Its weave-relevant surfaces are: (a) the `c:block/storage_blocks/*` crate-block tags (apple, carrot, potato, leather, gunpowder, etc.) — bulk compressed goods; (b) the block palette (vertical slabs, stone variants, hedges) — M-04 crush-recycle candidates; (c) the `quark:smithing_rune` recipe type — an upgrade seam. The dossier calls the Create edge WEAK with M-04.

- from: quark crop-crate blocks (apple_crate, carrot_crate, potato_crate via c:storage_blocks/*) | via: create:crushing (crush a crate back to loose produce + XP nugget — M-04 deco-recycle spirit) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: bulk storage blocks enter the Create processing pipeline — the crate becomes a logistics unit that the mechanical press can unbundle, making bulk food trade natural
- from: quark decorative stone variants (andesite bricks, pillar, vertical slabs) | via: create:crushing → crushed gravel + XP nugget | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: standard deco-recycle loop; a builder who dismantles a stone-block build recovers material through a crusher rather than voiding it
- from: quark:ancient_wood / Glimmering Weald biome blocks | via: create:milling (Glimmering Weald log → exotic sawdust / glow-powder byproduct) | to: create/magic | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: the biome blocks don't carry a verified material surface that would make an exotic byproduct sensible vs. arbitrary; forcing a magical byproduct from a vanilla-plus wood is theme-stretch without a confirmed Glimmering Weald lore hook; no strong motif fit beyond M-04 (which is already covered)
- from: quark:abacus (accounting tool) | via: economy service | to: economy | motif: M-33 | power: everyday | tone: clash | verdict: REJECT | reason: the abacus is a visual prop / counting toy, not a functional economy service; mapping it to a service motif is lore-stretching and the item carries no mechanical behavior that gates anything

REWORK: OK — connections sound (sole anchor is support; the two M-04 Accepts above add a Create 2nd anchor — the existing entry correctly flagged M-04 as a bonus, not required; no bad existing weaves to audit).

---

## oceansdelight   [anchors: survival (1)]

Power-read: Ocean's Delight is a Farmer's Delight expansion whose outputs are finished cooked foods (elder_guardian_roll, fugu_slice, cooked_stuffed_cod, etc.) that grant hunger + status effects. fugu grants poison risk — a premium, high-effort delicacy. The dossier's 2nd-anchor candidates both reference M-09 (retired) or a bare sell link, so those must be rejected; we need real demand-gating routes.

- from: oceansdelight:fugu_slice / elder_guardian_roll (high-tier seafood with effects) | via: food consumed under pressure (starvation / hard survival mode) | to: survival loop consumption | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: the effect foods aren't luxury — they feed the survival pressure arc; eating fugu is a risk/reward mechanism that renews demand continuously; no NPC involved
- from: oceansdelight:guardian_soup (block/cooking output) | via: MineColonies cook hut request — colonists demand specific cooked seafood to satisfy "gourmet" research tier | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: colonies specifically request guardian soup for advanced kitchen research, so a coastal fishing specialist must supply inland colonies — demand crosses routes
- from: oceansdelight fish/tentacle drops as a create:cutting input | via: create:cutting (cut squid into rings, guardian into steaks — a create-processed prep stage before FD cooking) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a processing stage before cooking adds Create spine to the seafood chain; the Create cutter prepares raw ocean drops before they enter the FD cooking pot — entirely sensible in a kitchen/factory context
- from: selling ocean dishes to other players (ambient endpoint) | via: numismatics coin | to: economy | motif: bare-sell (M-09 retired) | power: mid | tone: ok | verdict: REJECT | reason: bare sell link — M-09 retired; the demand-gating version is M-28 colony route above

REWORK: The dossier candidate M-09 is already flagged REJECT per briefing rules. The M-12 candidate from the dossier is sound — Accepted above. OK on structure; the M-09 candidate needed rejection.

---

## fluid   [anchors: create, aeronautics (2)]

Power-read: fluid (Create: Fluid) is already at 2 anchors and the dossier explicitly says no forced third needed. The content is pure infrastructure — centrifugal pump, smart fluid interface, redstone valves, copper tap/sink, neon decor. No material outputs of its own. Let me confirm nothing is missed.

Red-team for 3rd anchor: Could the copper tap/sink route into survival (water collection, crop irrigation)? The tap draws fluid — thematically a kitchen/farm fitting, but it's a utility component, not a crop or food item. Could neon tubes route into magic or economy (lighting/signage)? Too weak — decoration without a material surface. No under-served link found.

- from: fluid:centrifugal_pump (faster fluid mover) | via: aeronautics ship-board fuel system (connects fuel tank to engine faster than vanilla pump) | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: REJECT | reason: aeronautics is already one of fluid's two anchors; this would deepen the existing connection, not add a new one — not needed as a new weave entry; current anchors sound
- OK — connections sound (2 anchors: create + aeronautics; no forced 3rd; existing links coherent)

---

## create_factory   [anchors: create, survival (2)]

Power-read: Create Factory makes desserts through Create methods (mixing/pressing/filling). The cream, jam, and nectar fluids are its most interesting material surface — they're intermediate fluids other food processing methods could consume. Already at 2 anchors. The dossier notes M-09 as a possible 3rd anchor economy link, which is now retired.

- from: create_factory:cream_bucket / sweet_berries_jam / nectar fluid | via: extradelight:evaporator or vinery ferment (jam ages into a preserved spread or ferments into a sweet wine/mead) | to: survival/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: the cream and jam fluids aren't just food — aging them into preserved goods or mead takes time and specialist equipment; a confectionery expert who can age their jams commands premium prices from other players
- from: create_factory sweets (honey_waffle, caramel_apple, etc.) as colony food supply | via: MineColonies cook hut requesting sweet goods for colonist morale/happiness | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: colonists want varied foods including sweets; a dessert-factory player supplies the colony, creating a real cross-route demand that isn't just selling to a stranger
- from: selling sweets/waffles for coin | via: numismatics | to: economy | motif: bare-sell (M-09 retired) | power: everyday | verdict: REJECT | reason: bare sell link; M-09 retired; demand-gating versions are M-28 and M-35 above

REWORK: Dossier's M-09 economy candidate is retired per briefing. The two Accepts above improve the connection.

---

## alternate_current   [anchors: support (1)]

Power-read: Pure redstone performance patch — no items, no blocks, no materials, no loot. Deterministic behavior patch only.

- LEAVE — genuine zero-content performance mod; no items, no loot, no processing surface; a forced weave would be nonsensical

---

## modernfix   [anchors: support (1)]

Power-read: JVM/loader-level memory and startup performance mod. Zero content surface.

- LEAVE — genuine zero-content performance mod; no items, no loot, no processing surface

---

## jeresources   [anchors: support (1)]

Power-read: JEI addon that renders mob-drop, loot, and ore-gen data — display only. No items, no processing.

- LEAVE — client UI documentation mod; no items, no loot tables of its own, no processing surface; its value is information transparency for the pack's regional-scarcity design (players can see where ores spawn), which is functional but not a weave node

---

## cbc_at   [anchors: create, aeronautics (2)]

Power-read: CBC Advanced Technologies is already at 2 strong anchors (Create-machined munitions + Aeronautics combat). Its barrel attachments and rocket pods are mid-to-endgame items (the heavy autocannon and built-up nethersteel barrel sit at late material tiers). The dossier suggests M-05 boss-gating as a depth move — let me evaluate.

- from: cbc_at heavy autocannon barrel / built-up nethersteel/steel variants (endgame ship armament) | via: MineColonies blacksmith research unlock (researching "Heavy Artillery" in the colony unlocks the assembly recipe — M-28 colony-research route) | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: you can't just craft the heaviest ship gun — your colony's blacksmith needs to have researched the advanced barrel technique; a colony specialist becomes the enabler for a combat specialist's ship build
- from: cbc_at munitions (AP rockets, APDS cartridges) as combat-supply goods | via: player trade (a munitions manufacturer sells to PvP-active ship operators) | to: economy | motif: M-34 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: munitions are consumed in combat and can't be self-sufficient for a non-Create specialist; the munitions supply line is a distinct economic role — the gun-runner feeding the fleet
- from: cbc_at loot table drops (has loot=yes) — likely barrel fragments, damaged munitions | via: loot-seed: add a damaged/inert cbc_at munition to relevant structure loot (e.g. abandoned military outpost) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: finding a dud AP shell in a ruined outpost gives the discovery hook that this weapon tier exists; a loot seed rather than a recipe
- from: boss drop gating the heavy autocannon assembly recipe | via: boss drop as assembly input (M-15) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-28 colony-research route above is the cleaner mechanism for this pack's high-tier lock pattern; stacking M-15 on top would double-gate the same item without a clear justification — colony unlock is enough; if both were applied it would be over-gated

REWORK: OK — existing 2-anchor connections (Create + aeronautics) are sound; the Accepts above add economy/survival depth without replacing the core.

---

## copperagebackport   [anchors: survival (1)]

Power-read: This mod backports the Copper Age from 1.21.10 — copper tools/armor (early-tier), copper deco set (lanterns, bars, chains, chests), and the Copper Golem (early item-logistics mob). The content is copper-heavy and the golem overlaps Create logistics. Copper is Create's bread-and-butter metal.

- from: copper deco blocks (copper lantern, bars, chains, oxidized variants) | via: create:crushing → copper nuggets + XP nugget (M-04 deco-recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the copper build palette feeds directly back into the Create copper economy; a decorator who changes their copper-lantern build recovers material through the crusher — same pattern as any other metal deco
- from: copper tools/armor (copper_axe, copper_boots, etc. — early-tier) | via: create:crushing → copper nuggets (M-04, lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: worn-out copper tools go back into the smelter via crusher rather than being trashed; early-game circular economy
- from: Copper Golem (item-sorting mob that ferries items between Copper Chests) | via: MineColonies request system — a colony's courier uses Copper Golems as early low-tech item-sorters; or design it as a required crafted item for a colony warehouse upgrade (M-28) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Copper Golem is a pre-Create logistics actor that a new colony uses before it can afford Create conveyor belts — a colony route that has depth via the aging/logistics progression
- from: oxidized copper as a visual weathering reagent | via: ars_nouveau:imbuement (use an oxidized copper block as a catalytic ingredient for a nature/weather spell) | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: oxidized copper has no magical lore in either Ars Nouveau or this pack; the link is cosmetic (green color ↔ "nature magic") rather than coherent; tone-clashes with the mod's vanilla-plus vibe — forced

REWORK: None — single anchor, no prior weaves to audit.

---

## createtreadmill   [anchors: create (1)]

Power-read: Two blocks — Treadmill (player-powered kinetic source) and Maid Motor (touhou_little_maid Soul Orb/Photo powered). The dossier says leave; let me red-team.

Red-team: The treadmill consumes player effort — could that feed M-26 (consumption sink as a labor cost)? No — M-26 is about material consumption; player effort isn't material. Could the Soul Orb/Photo intake connect to magic (M-10)? TLM Soul Orbs are specific to the maid flavor mod, not a pack-level magic reagent. Could it connect to survival via colony labor (M-28)? The Maid Motor is a Create SU source — a colony could in theory use it for early power, but there's no MineColonies tie that makes it a colony-route item.

The dossier author's conclusion is sound: no clean 2nd anchor without forcing it.

- LEAVE — kinetic sources only; player-effort and TLM Soul Orb are not weave nodes in the pack's loop; no processing surface, no loot; the touhou_little_maid crossover is flavor, not a pillar

---

## nochatreports   [anchors: support (1)]

- LEAVE — privacy networking mod; zero items, zero loot, zero processing surface; genuine zero-content support mod

---

## appleskin   [anchors: support (1)]

- LEAVE — HUD/display mod; zero items, zero loot, zero processing; surfaces food data but adds no node to the loop

---

## xaeroworldmap   [anchors: support (1)]

- LEAVE — client-side navigation UI; zero items, zero loot, zero processing surface

---

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]

Power-read: Builder tools (hammer, chisel, trowel, rope ladder, tape measure, hardhat, magnet) plus experience_flask items (XP storage). The experience_flask is the most interesting surface — it stores XP, which is the same resource that create:crushing produces as an experience_nugget byproduct (M-03/M-04). Could the XP flask connect to Create's XP output?

- from: minecraft:experience_flask_* (jakes XP storage flasks) | via: create:crushing — the XP nuggets produced as a crushing byproduct could fill a jake's XP flask automatically (a conveyor deposits nuggets into a flask via a Create filter), giving Create's XP byproduct a portable container | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: the crusher already makes XP nuggets as a byproduct; a jake's flask sitting on a belt automatically bottles them into a portable XP reserve — industrial XP capture for the Create specialist
- from: builder tools (chisel, trowel, hammer) as create:mechanical_crafting outputs (the tools' complex-shaped heads crafted on a mechanical crafter — M-20 deploy-upgrade) | via: create:mechanical_crafting | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: these are simple early-tier builder utilities, not power items — M-20 says "not for basics" and the briefing warns against gating basic/everyday components behind complex recipes; a forced Create step on a hammer head has no thematic depth

REWORK: None — single anchor, no prior weaves.

---

## minecolonies_tweaks   [anchors: support (1)]

Power-read: This mod is a tag-harmonization glue layer — it injects c:crops/* and c:foods/* tags (corn, rice, soybean, tomato, cabbage, garlic, etc.) onto crop items from various mods, and adds inventory scrolls. Its OUTPUT is the c: tag surface that enables other weaves. It also has `minecolonies_tweaks:component_merge_shapeless` as a registered recipe type.

Red-team for a 2nd anchor: The dossier says "it enables weaves rather than being a node." That's correct — but the component_merge_shapeless recipe type is used for something. Could the c:crops/c:foods tags themselves become weave-relevant by routing unified crops through a Create recipe? The tags are just metadata; the weave happens in the *consuming recipe*, not in this mod. The inventory scrolls are QoL items.

- from: minecolonies_tweaks:component_merge_shapeless recipe type | via: used as the delivery for colony resource merging | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: component_merge_shapeless is an internal colony-QoL operation (merging partial stacks for colony requests), not a cross-system demand-gating mechanism — it's a helper, not a weave node
- LEAVE — tag harmonization / QoL glue; its value is enabling other mods' weaves by unifying the c:crops/c:foods namespace; it is not itself a weave node; analogue to a library dependency

---

## balm   [anchors: support (1)]

- LEAVE — multi-loader abstraction library; no content, no items (beyond internal scaffolding c:tags), no loot; genuine zero-content library dependency

---

## moreculling   [anchors: support (1)]

- LEAVE — client-side render-culling performance mod; no items, no loot, no processing surface

---

## born_in_chaos_v1   [anchors: survival (1)]

Power-read: Born in Chaos has a rich drop surface — dark_metal_deposit (the ore), dark_metal piles from mob drops, bundle_of_bones, boss-only weapons (Soul Saber, Pumpkin Staff), seasonal boss, and a full argillite build palette. loot=yes. 50 biome-modifiers means wide spawning. The dossier already identifies three strong candidates: M-03 ore-doubling (dark metal), M-02 mob-drop reagent sink, M-11/M-10 soul drop → magic.

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing → born_in_chaos_v1:dark_metal (crushed + smelted for a yield bonus over bench crafting) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal ore enters the Create ore-doubling pipeline exactly like any other metal; a Create specialist's foundry doubles the ore that the combat specialist farms — specialization flows naturally
- from: born_in_chaos_v1:bundle_of_bones (mob drop, high drop frequency from skeletons/thrashers) | via: occultism:spirit_fire (burn bundle_of_bones → a necromantic intermediate / spirit essence for Occultism rituals) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: bundles of bones from the chaos undead are exactly what a necromancer burns for spirit essence; the horror-vibe coheres with Occultism's dark aesthetic; organic drop becomes ritual input
- from: born_in_chaos_v1:dark_metal (crafted from dark_metal_deposit drop) | via: create:crushing (back to dark_metal_ore dust / nuggets as M-04 recycle) — NOT ore-doubling but deco-set recycle for argillite blocks | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 above already handles the dark metal/ore-crushing vector more meaningfully (ore → yield bonus); adding M-04 for the argillite decor is valid in principle but low value given M-03 already anchors Create — duplicate weave channel, diminishing return; de-prioritize
- from: born_in_chaos_v1:soul_saber / pumpkin_staff (boss-only drops) | via: these as boss-key gate items (M-15) for advanced magic/tech recipes — e.g. the Soul Saber fragments an Occultism ritual altar | to: Create/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal boss's signature drop gates something the magic player needs — forces a trade between the combat specialist and the magic specialist; the PvPvE loop closes
- from: born_in_chaos_v1:bagof_candy (seasonal drop, Oct 25–Nov 5) | via: ars_nouveau:imbuement or lunar/seasonal event gating (M-22 / M-16) — candy is obtainable only in the seasonal window, making it a seasonal reagent | to: magic | motif: M-16 | power: everyday-seasonal | tone: ok | verdict: ACCEPT | hook: the candy is a genuinely seasonal drop; using it as a season-locked magic reagent (an Ars ritual ingredient only usable in the harvest-moon window) makes the seasonal pressure tangible and creates a stockpile incentive
- from: dark_metal armor/weapons as combat-supply goods farmed by a combat specialist | via: player trade (M-34 combat-route supply: dark-metal gear → traded to non-combat players needing survival tools) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Born in Chaos combat specialist who farms the spooky mobs becomes a supplier of dark-metal gear and boss-drop weapons; non-combat players buy what they can't safely farm — the danger loop feeds the economy
- from: argillite blocks as a buildable dark aesthetic material | via: create:crushing → argillite gravel / dark dust byproduct (M-04 deco-recycle, lossy) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: already rejected above as a duplicate weave channel given M-03 covers the Create anchor; argillite recycle is a low-priority bonus; not worth authoring until the ore-doubling and magic links are established

REWORK: None — single anchor, no prior weaves.

---

== CHUNK COMPLETE ==
