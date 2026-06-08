# Phase 2.5 Gate-2 Triage — Batch 03

---

## aileron  — slate: 1 KEEP / 13 CUT / 3 MERGE / 0 DEFER   | anchors after: aeronautics (now 1)

The mod has no items, no recipes, no loot tables of its own — it is a pure behavior/enchantment
overhaul for the vanilla Elytra. The only real material surface is `loot=yes` (aileron injects
enchantment books into vanilla loot tables). The lone coherent weave is that enchantment-book
seeding into exploration loot.

KEEP  | aileron loot tables (enchant books) → survival | motif M-34 | delivery: loot-seed (seed aileron's Elytra enchantment books into end-tier / dangerous-structure loot tables as rare discoverable upgrade books) | milestone: v0.13.0 | why "of course": premium glide-boost books aren't in the shop — you find them in ruins; the Elytra becomes an exploration reward, not a crafting target; adds a combat-supply dimension to Elytra hunting

CUT   | aileron Elytra enchantments → magic (M-10 via enchanting_apparatus) | motif M-10 | reason: top ACCEPT (26×) but flagged "conditional and not authorable as stated" — aileron enchants are injected into the standard enchantment pool; the Enchanting Apparatus cannot be targeted at them specifically; not authorable without a confirmed API surface; the survival loot-seed KEEP is the actionable form
MERGE | aileron loot tables → survival (M-34, 4×) | into: KEEP above | reason: same loot-seed delivery, lower times_suggested
MERGE | aileron Elytra enchantments → survival (M-34, 1×) | into: KEEP above | reason: identical intent
MERGE | aileron loot drops → survival (M-02, 1×) | into: KEEP above | reason: M-02 is wrong motif (not mob drops); the correct frame is M-34 loot-seed — folded
CUT   | aileron Elytra enchantments → magic (M-10, 2×) | motif M-10 | reason: duplicate of first CUT above; lower times_suggested, REJECT consensus
CUT   | aileron Elytra enchantments via ars apparatus (1×) | motif M-10 | reason: same API-surface problem; consensus REJECT
CUT   | aileron → create (config-tie fuel/recharge, 2×) | no motif | reason: no motif; would require inventing new mechanic; consensus REJECT
CUT   | aileron Elytra enchants as aeronautics premium loot (2×) | no motif | reason: reinforces existing aeronautics anchor, not a new one; no motif; REJECT
CUT   | aileron Elytra enchants → create via M-20 deploying (2×) | motif M-20 | reason: enchantments are not woven physical parts; M-20 requires a crafted component; REJECT consensus
CUT   | aileron enchants → create via M-29 grinding (2×) | motif M-29 | reason: grinding enchants into XP is backward direction, not a forward dependency; no new anchor; REJECT
CUT   | aileron Elytra → create via M-12 milling (1×) | motif M-12 | reason: no item surface to route; behavior-only mod; REJECT
CUT   | aileron flight rebalance → survival/no anchor (1×) | no motif | reason: no item surface; REJECT
CUT   | aileron loot → magic M-10 (1×, apparatus ACCEPT) | motif M-10 | reason: single ACCEPT without corroboration; API surface unconfirmed; the loot-seed KEEP is the better form
CUT   | aileron Elytra as aeronautics peer (behavioral, 1×) | motif M-33 | reason: emergent play not a designed weave; REJECT
CUT   | aileron loot → aeronautics (M-29, 1×) | motif M-29 | reason: aileron has no item namespace to seed into aeronautics; REJECT
CUT   | worn Elytra → repair service (M-33, 1×) | motif M-33 | reason: vanilla Mending already handles Elytra repair; thin; REJECT

Note: aileron reaches only 1 anchor (aeronautics as personal-flight complement). The single KEEP adds a survival/exploration dimension via loot-seed. A second anchor is not achievable from this mod's item surface — it is a near-LEAVE with one thin weave. Worth re-evaluating at thunderdome whether the loot-seed is worth authoring or if aileron is purely behavioral.

---

## ars_n_spells  — slate: 0 KEEP / 7 CUT / 0 MERGE / 0 DEFER   | anchors after: magic (already woven — the mod IS a weave)

This mod has zero items, zero blocks, zero recipe methods of its own. It is the Ars Nouveau ↔ Iron's Spellbooks bridge — the cross-cast mechanic IS a weave, but it has no independent item surface to route. Any candidate that invents items for it to hold is forcing content. All rows rejected by the candidate corpus for this reason.

The M-37 colony-research gate (1× ACCEPT) and M-29 Create-component tablet (1× ACCEPT) are thematically appealing but: (a) ars_n_spells has no items to gate — the gate would belong on Ars Nouveau or Iron's Spellbooks items, not here; (b) a single ACCEPT with no Opus corroboration on a zero-item mod is too thin. Both are better expressed as recipe notes on the host mods' slates.

CUT   | ars_n_spells unified mana → magic (M-01, 3×) | motif M-01 | reason: M-01 is already established on Ars Nouveau; routing through ars_n_spells adds nothing new; the mod implements M-01's spine, it doesn't need a separate weave on top
CUT   | ars_n_spells → create via M-17 charging (2×) | motif M-17 | reason: the mod has no items; charging would apply to host-mod items; zero item surface; REJECT
CUT   | ars_n_spells cross-cast tablet → magic M-29 (2×) | motif M-29 | reason: the gate items belong to host mods (Ars/Iron's), not ars_n_spells; no own item surface; mixed consensus
CUT   | ars_n_spells unified mana → magic M-01 (1×) | motif M-01 | reason: duplicate of top row; REJECT
CUT   | ars_n_spells cross-cast → occultism M-11 (1×) | motif M-11 | reason: the ritual here is a meta-mechanic using host-mod items; M-11 doesn't fit; REJECT
CUT   | ars_n_spells → create via M-17 energising (1×) | motif M-17 | reason: no item surface; REJECT
CUT   | ars_n_spells cross-cast boss-gate M-15 (1×) | motif M-15 | reason: the items to gate are host-mod items; any gate belongs on the Ars/Iron's slate; REJECT
CUT   | ars_n_spells M-37 colony research (1×) | motif M-37 | reason: appealing idea but the gated items are host-mod items; re-express on Ars Nouveau slate if pursued
CUT   | ars_n_spells cross-cast → create M-29 (1×) | motif M-29 | reason: single ACCEPT, no Opus, zero item surface; belongs on host-mod slate
CUT   | ars_n_spells M-33 service (1×) | motif M-33 | reason: the collaboration mechanic is emergent play; the mod enables it but no recipe surfaces it; REJECT
CUT   | ars_n_spells zero-items (1×) | no motif | reason: correctly notes no material surface; confirmed LEAVE-adjacent

Note: ars_n_spells is a LEAVE-adjacent mod — it IS a weave (the Ars↔Iron's bridge), so it already serves two systems, but it has no independent item surface for Phase-3 recipe authoring. No weaves filed; the cross-cast gate ideas should be re-expressed on the Ars Nouveau or Iron's Spellbooks slates.

---

## astikorcartsredux  — slate: 2 KEEP / 20 CUT / 4 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

The mod's real item surface: iron-bearing implements (plow, reaper, seed-drill) whose metal parts can be pressed. The supply cart is pre-tech wood — over-gating it violates the basics guardrail. The reaper's harvest output is plain vanilla crops — routing that belongs on the crop mods.

KEEP  | plow/reaper iron blade → create (M-20) | motif M-20 | delivery: recipe (require create:pressing iron sheet as ingredient in plow-blade and reaper-blade crafting recipe — one light Create step) | milestone: v0.7.0 | why "of course": a working plow needs a pressed iron blade, not a raw ingot; one light step that makes early farming the first reason to visit the Create spine; 9+8× top candidate, ACCEPT consensus
KEEP  | astikorcartsredux:oak_seed_drill + colony Farmer hut → economy (M-28) | motif M-28 | delivery: MineColonies config/data (seed-drill cart as colony Farmer hut tool upgrade; colony route unlocks mechanized planting) | milestone: v0.9.0 | why "of course": a MineColonies Farmer hut upgrading from hand-planting to a seed-drill cart is exactly the colony-route story — cheaper mechanized planting via colony, not by hand

CUT   | plow/reaper → create M-05 (4× REJECT, flag WEAK) | motif M-05 | reason: M-05 requires a mod's flagship item built in its own machine; carts have no machine; also the deep-chain variant over-gates a basic daily tool; WEAK tag confirmed
CUT   | reaper harvest → create M-12 milling (3×) | motif M-12 | reason: the harvest is vanilla crops; routing belongs on the crop mods (FD/DT), not the cart; REJECT consensus
CUT   | supply cart → economy M-31 via config (3×) | motif M-31 | reason: M-31 requires the good to need aeronautics/trains; a horse-cart is pre-aeronautics ground transport; no method connecting them; REJECT
CUT   | plow/reaper → create M-05 (3×) | motif M-05 | reason: duplicate of above M-05 rejects; same reason
CUT   | supply cart → aeronautics M-31 (2×) | motif M-31 | reason: medieval horse-cart ≠ aeronautics; tone clash; no shared recipe surface; REJECT
CUT   | supply cart → aeronautics no-motif (2×) | no motif | reason: no motif; tone clash (draft animal ≠ airship); REJECT
MERGE | cart crafting → create M-05 ACCEPT (2×) | into: KEEP M-20 above | reason: these are the same "iron sheet in the plow recipe" link, mislabelled M-05; the M-20 KEEP captures it
MERGE | plow/reaper → create M-20 item_application (2× ACCEPT) | into: KEEP M-20 above | reason: same delivery (iron sheet applied to wooden frame), same milestone; lower times_suggested
MERGE | plow/reaper → create M-20 seed-drill (1× ACCEPT) | into: KEEP M-20 above | reason: seed-drill shares the same pressing-iron-sheet step; folded
MERGE | supply cart → colony M-28 ACCEPT (1×) | into: KEEP seed-drill/colony above | reason: same colony-route idea extended to supply cart; the seed-drill is the stronger form (mechanized planting > hauling); folded
CUT   | supply cart → create M-29 (1×) | motif M-29 | reason: M-29 is cross-route dependency; a cart hauling crops is not a magic-to-Create or Create-to-ritual cross-route; REJECT
CUT   | supply cart → economy M-08 (1×) | motif M-08 | reason: M-08 is scarce metal → coin minting; carts are wooden vehicles; wrong motif; REJECT
CUT   | supply cart → aeronautics M-24 (1×) | motif M-24 | reason: M-24 is drivetrain/control components; a horse-cart is not an airship component; REJECT
CUT   | supply cart → aeronautics M-23 (2×) | motif M-23 | reason: M-23 is structural alloy for airframes; a wooden cart is not; REJECT
CUT   | seed-drill + seasonal window → survival M-16 (1×) | motif M-16 | reason: the seed-drill doesn't consume a season-locked reagent; coupling a seasonal mechanic to a tool operation is a config-tie with no item surface; REJECT
CUT   | reaper harvest → economy M-12 (1×) | motif M-12 | reason: routing the cart as a farming-throughput node; the crop is the item, not the cart; REJECT
CUT   | reaper harvest → survival M-12 (1×) | motif M-12 | reason: same; belongs on FD/DT slate; REJECT
CUT   | reaper bulk → create M-12 milling (1×) | motif M-12 | reason: the reaper drops vanilla crops; no "crop waste" unique item from the cart; REJECT
CUT   | log → plank → cart via create:cutting (1×) | no motif | reason: alternative source path, not a gate; no-motif; REJECT
CUT   | supply cart → aeronautics M-29 (1×) | motif M-29 | reason: no shared recipe surface between cart and Aeronautics; REJECT
CUT   | supply cart → economy M-28 (1×) | motif M-28 | reason: supply cart is not a colony-requestable item by default; the seed-drill is; REJECT
CUT   | reaper → create M-32 (1×) | motif M-32 | reason: no distinct "crop waste" item; narrative description of player workflow; REJECT
CUT   | animal cart → aeronautics M-31 (1×) | motif M-31 | reason: animal carts transport players on land, not via aeronautics arm; REJECT
CUT   | cart all → create M-29 (1×) | motif M-29 | reason: pre-industrial horse-drawn tools routing through Create inverts the design; REJECT
CUT   | supply cart logistics node → aeronautics (1×) | no motif | reason: no-motif for cart→airship loading handoff; REJECT

---

## byzantine  — slate: 2 KEEP / 5 CUT / 2 MERGE / 0 DEFER   | anchors after: economy (now 1)

byzantine has no items, no blocks, no loot tables of its own — it is pure MineColonies schematic data (buildings rendered via Domum Ornamentum / Structurize). Its only weave surface is the colony build demand it creates. The M-30 angle (exotic stone in schematic recipes) is the sharpest second hook if the building schematics genuinely require region-locked materials.

KEEP  | byzantine schematic styles → economy (M-28) | motif M-28 | delivery: MineColonies (Byzantine-style colony buildings consume colony-requested materials; the colony produces basics cheaper via colony route) | milestone: v0.9.0 | why "of course": as a MineColonies style set its builds consume colony-requested materials — it rides the colony route, the load-bearing alternate-production path; 4× ACCEPT, Opus-corroborated
KEEP  | byzantine colony buildings requiring exotic/region-locked stone → economy (M-30) | motif M-30 | delivery: schematic data / KubeJS (Byzantine Town Hall dome calls for exotic stone — deepslate, basalt, end stone bricks — that are region-locked or scarce; colony material request drives regional trade) | milestone: v0.9.0 | why "of course": the colony's material requests pull scarcity into the build pipeline; 3× ACCEPT

CUT   | byzantine → create M-05 (2×) | motif M-05 | reason: byzantine has no items; M-05 requires a mod's flagship item built in its own machine; nothing to route; REJECT
CUT   | byzantine → create (no method, 2×) | no motif | reason: byzantine has no items/blocks/methods of its own; any recipe weave is invented content; REJECT
MERGE | byzantine colony buildings → economy M-28 (2× Opus ACCEPT) | into: KEEP M-28 above | reason: same colony-route framing; lower times_suggested; folded
MERGE | byzantine schematic → magic/Create unlock M-15 (1×) | CUT instead | reason: gating a building style behind a boss drop is arbitrary and punishing for decorative content; REJECT
CUT   | byzantine schematic → standalone recipe (1× Opus REJECT) | no motif | reason: no own blocks/items; nothing to route; REJECT
CUT   | byzantine — forced recipe-weave (1×) | no motif | reason: no items; any weave is invented; REJECT
CUT   | byzantine M-28 as only anchor, noting second anchor would be forced (2× REJECT) | motif M-28 | reason: the rejection confirms the correct conclusion: M-30 via schematic-stone-demand is the second anchor; keep the M-30 KEEP above rather than forcing a third

Note: byzantine reaches 2 anchors (both economy-side: colony route M-28 + regional-scarcity demand M-30). Both are economy-pillar; no create/magic anchor. Acceptable for a pure schematic-data mod.

---

## companions  — slate: 4 KEEP / 19 CUT / 5 MERGE / 0 DEFER   | anchors after: magic + create + economy (now 3)

Rich item surface: crystallized_blood, soul_gem, relic_gold, old_cloth, small_essence, great_essence, mob drops. Soul Furnace as a method. Boss drop (Sacred Pontiff). The duplicate clusters are: (1) crystallized_blood/soul_gem → magic methods, (2) relic_gold → economy, (3) mob drops → magic, (4) tesla/voltaic deco → create crushing.

KEEP  | companions:crystallized_blood → magic (M-11 via occultism:spirit_fire/ritual) | motif M-11 | delivery: recipe (crystallized_blood as reagent/input in occultism spirit_fire or ritual; Soul Furnace → ritual circle chain) | milestone: v0.11.0 | why "of course": the Soul Furnace feeds the ritual circle — eldritch alchemy chains from one fire to the next; 27× top candidate, unanimous ACCEPT
KEEP  | companions:soul_gem → magic (M-10 via ars_nouveau:imbuement) | motif M-10 | delivery: recipe (soul_gem as imbuement catalyst; diamond→soul gem via Soul Furnace → arcane infusion) | milestone: v0.11.0 | why "of course": a gem distilled through soul-fire carries the arcane charge the imbuement chamber needs; 10× ACCEPT + 4× M-02 ACCEPT (same link, different motif tag — M-02 is the correct tag for mob-drop→magic but M-10 works; keep M-10 since soul_gems aren't strictly mob drops); 10× times_suggested
KEEP  | companions:relic_gold (Sacred Pontiff boss drop) → economy (M-34 combat-route supply) | motif M-34 | delivery: loot-seed (relic_gold is already in loot=yes; the link is emergent trade — combat specialists farm and sell it to magic/tech players who need it as a rare reagent) | milestone: v0.9.0 | why "of course": Relic Gold only drops from the Sacred Pontiff — combat specialists farm and trade it; 4× ACCEPT M-34 + 3× ACCEPT M-34 (same)
KEEP  | companions:relic_gold → create (M-15 boss-key gate) | motif M-15 | delivery: recipe (relic_gold as required input in a high-tier Create sequenced-assembly recipe; boss combat unlocks complex tech) | milestone: v0.7.0 | why "of course": the Pontiff's relic is the key the engineer needs to fabricate a complex machine; 3× ACCEPT M-15

CUT   | companions tesla/voltaic deco → create M-04 crushing (10× combined) | motif M-04 | reason: the Tesla electrical aesthetic is the mod's thematic core, not surplus decoration; crushing it back to copper creates a perverse incentive to dismantle progression blocks; REJECT consensus (5+5+1+1 REJECT vs 2+1+1 ACCEPT); M-02/M-11 already give companions its magic anchors without this
MERGE | companions:crystallized_blood → magic M-10 imbuement (4×) | into: KEEP M-11 above | reason: crystallized_blood serving as both M-11 (occultism) and M-10 (Ars) is a reasonable two-method read, but the M-11 KEEP is the primary (27×); the M-10 angle on crystallized_blood can be expressed via the same delivery block
MERGE | companions mob drops (antlion_fur, blade_arm, etc.) → magic M-02 (2×) | into: KEEP M-11 above | reason: mob drops feeding the Soul Furnace → ritual circle is the same chain; the KEEP captures it
MERGE | companions:relic_gold → economy M-08 (7×, mixed) | motif M-08 | CUT instead | reason: M-08 is player-minted currency from scarce regional metal; relic_gold is a trophy item, not a regional ore; the 7× row correctly states "bridging two coin systems is a v0.9.0 economy decision"; CUT as pre-economy-update
MERGE | companions:relic_gold → magic M-02 (2×) | into: KEEP M-15 above | reason: relic_gold as a magic imbuement input (M-10 angle) is a valid companion to M-15; can be a second recipe in the same delivery; folded
MERGE | companions:soul_gem → occultism M-18 spirit_trade (1×) | into: KEEP M-11 above | reason: soul_gem in spirit_trade is plausible but the primary delivery via M-11 ritual is stronger; folded
CUT   | companions:crystallized_blood → create M-19 haunting (2×) | motif M-19 | reason: create:haunting already runs soul-fire; feeding crystallized_blood through it is conceptually interesting but thin (one ACCEPT row); the Soul Furnace + occultism chain (KEEP) is the primary; avoid double-counting the soul-fire seam
CUT   | companions mob drops → magic M-18 spirit_trade (2×) | motif M-18 | reason: small_essence as a spirit_trade commodity is plausible but lower-signal than the M-11/M-10 route; 2× only; save for Phase-3 note if Soul Furnace chain has room
CUT   | companions:copper_coin / nether_coin / end_coin → numismatics (6× + 3×) | motif M-08 | reason: bridging two coin systems is a v0.9.0 economy architecture decision, not a Phase-2 recipe weave; flagged for v0.9.0; REJECT consensus
CUT   | companions:antlion_fur → farmersdelight:cutting M-12 (1×) | motif M-12 | reason: gothic-alchemical mob pelts being "cut" in a food-prep station is tonally wrong; REJECT
CUT   | companions:relic_gold → create:crushing → numismatics M-08 (1×) | motif M-08 | reason: generic sellable; retired-economy framing; CUT
CUT   | companions:crystallized_blood → create M-17 charging (1×) | motif M-17 | reason: Tesla network and Create FE are architecturally separate; no shared FE bus; REJECT
CUT   | companions soul_furnace → M-19 Create parallel (1×) | motif M-19 | reason: interesting structural note but the M-11 KEEP covers the Soul Furnace's primary role; second Create anchor via M-19 is thin at 1×; CUT
CUT   | companions:soul_furnace as upstream to create:haunting (1×) | motif M-19 | reason: alternate pre-haunting step is creative but adds complexity; 1× only; the M-15/M-11 KDs already give companions 3 anchors; avoid overloading
CUT   | companions GoG drops → soul_furnace M-29 (1×) | motif M-29 | reason: cross-route "other mods' drops feed Soul Furnace" is plausible but the Soul Furnace is a method, not a weave surface; 1× only; CUT
CUT   | companions mob drops → create M-02 mechanical_crafting (1×) | motif M-02 | reason: M-02 is magic/economy method, not mechanical_crafting; wrong motif; REJECT
CUT   | companions boss drop → magic M-10 high-tier (1×) | motif M-10 | reason: relic_gold as irreplaceable arcane catalyst is covered by the M-15 KEEP (boss unlocks high-tier tech); adding a separate magic lane creates a double-gate conflict; CUT
CUT   | companions:soul_gem → bare M-02 any creature (1×) | motif M-02 | reason: any creature in the Soul Furnace is ambient play, not a designed weave; covered by KEEP M-11; CUT
CUT   | companions:relic_gold → economy M-34 via loot (3×) | motif M-34 | reason: these duplicate the M-34 KEEP above (same link, same loot-seed delivery); MERGE not needed — already captured

---

## createimmersivetacz  — slate: 4 KEEP / 25 CUT / 4 MERGE / 0 DEFER   | anchors after: create + economy + aeronautics (now 3)

The mod's core: sequenced-assembly ammo pipeline (already Create-anchored), nitropowder fluid, twelve_gauge_shell / rounds (bulk consumables), gun_barrel / firing_mechanism (precision parts). The TFMG vat link is the sharpest Create-depth add. The consumption-sink and combat-supply links are the economy anchors. Aeronautics bulk-haul is a natural third.

KEEP  | createimmersivetacz:nitropowder_bucket → create (M-12 via tfmg:vat_machine_recipe) | motif M-12 | delivery: recipe (nitropowder fluid processed through TFMG's vat machine as a Create-side chemical step; adds industrial depth to the ammo supply chain) | milestone: v0.7.0 | why "of course": nitropowder is a Create-side fluid; TFMG's vat machine is the natural industrial chemistry vessel; 7× ACCEPT (4:3 split but the hook is coherent)
KEEP  | createimmersivetacz:twelve_gauge_shell / rounds → economy (M-26 consumption sink) | motif M-26 | delivery: config (ammo is consumed on use in combat; demand never zeroes; the Create-ammo factory faces recurring production demand) | milestone: v0.9.0 | why "of course": rounds are fired and gone — a consumption-sink that keeps the arms factory's output loop turning; 6× unanimous ACCEPT
KEEP  | createimmersivetacz ammo → economy (M-34 combat-route supply) | motif M-34 | delivery: emergent trade (ammo is a consumable military good; combat specialist runs the factory; non-combat players buy shells) | milestone: v0.9.0 | why "of course": the arms-dealer specialist mass-produces ammo; non-factory players buy it for defense; 5× ACCEPT (folding in 3× M-34 near-dup)
KEEP  | createimmersivetacz ammo → aeronautics (M-31 logistics-required bulk good) | motif M-31 | delivery: config/emergent (bulk ammo crates are heavy; supplying a distant PvPvE campaign from a dedicated arms factory requires cargo ships) | milestone: v0.9.0 | why "of course": crates of shells are too heavy to carry in inventory at scale; the arms dealer ships bulk ammo via airship; 2× ACCEPT

CUT   | createimmersivetacz gun_barrel / firing_mechanism → create M-06 sequenced_assembly (10×) | motif M-06 | reason: the mod already uses sequenced_assembly natively for the ammo pipeline; adding more SA chains is deepening Create, not a new anchor; REJECT consensus (7 REJECT vs 3 ACCEPT)
CUT   | createimmersivetacz nitropowder → magic M-10 (3× unanimous REJECT) | motif M-10 | reason: industrial explosive vs arcane infusion tone clash; no coherent lore bridge
CUT   | createimmersivetacz guns → economy M-34 (3× — same link as KEEP above) | motif M-34 | reason: duplicate of KEEP M-34 above; REJECT the framing as "guns" rather than ammo (the M-34 KEEP is on ammo as the consumable, not guns as capital goods)
MERGE | createimmersivetacz ammo (rounds) → economy M-26 (2×) | into: KEEP M-26 above | reason: same consumption-sink link; lower times_suggested; folded
MERGE | createimmersivetacz bulk ammo → economy M-26 (2×) | into: KEEP M-26 above | reason: same; folded
MERGE | createimmersivetacz ammo → aeronautics M-31 (1×) | into: KEEP M-31 above | reason: same logistics-bulk-haul link; folded
MERGE | createimmersivetacz bulk ammo supply → aeronautics M-31 (1×) | into: KEEP M-31 above | reason: same; folded
CUT   | createimmersivetacz gun_barrel → aeronautics M-24 (2×) | motif M-24 | reason: gun barrels are not propulsion/control components; tone clash; REJECT
CUT   | createimmersivetacz nitropowder → aeronautics M-13 (2×) | motif M-13 | reason: nitropowder is an explosive propellant, not a combustion fuel; tone clash; REJECT
CUT   | createimmersivetacz ammo → MineColonies M-28 guard resupply (2×) | motif M-28 | reason: plausible but 2× only; the colony Barracks ammo-supply is better expressed as a v0.9.0 economy design note rather than a Phase-3 recipe; the M-34 KEEP covers the supply side; CUT for now
CUT   | createimmersivetacz gun_barrel colony M-28 (2×) | motif M-28 | reason: same; lower priority than the economy KDs; CUT
CUT   | createimmersivetacz nitropowder → createbigcannons M-29 (2×) | motif M-29 | reason: CBC cartridge-filling is thematically sound but this is a cross-mod recipe on two non-magic mods — the cross-route dependency motif (M-29) is most powerful for magic↔Create or colony↔player splits; this is two Create-spine mods sharing a fluid; 2× only; CUT (flag for Phase-3 note)
CUT   | createimmersivetacz primer → create M-04 crushing recycle (1×) | motif M-04 | reason: primers are mid-chain intermediates, not decoration; M-04 is deco-recycle; wrong motif; REJECT
CUT   | createimmersivetacz grenade casing → CBC ammo pipeline M-06 (1×) | motif M-06 | reason: bridges TACZ ammo types with CBC cartridges — thematically fine but would require CBC cross-mod recipe ownership; curation question not a weave; CUT
CUT   | createimmersivetacz nitropowder → tfmg distillation M-13 (1×) | motif M-13 | reason: nitropowder is already a Create-internal fluid (IS the output, not a raw input); routing it through TFMG distillation would be going backward; REJECT
CUT   | createimmersivetacz gunpowder → tfmg coking M-12 (1× Opus REJECT) | motif M-12 | reason: already lives fully on the Create spine; TFMG crossover deepens Create but doesn't add a 2nd pillar; Opus REJECT
CUT   | createimmersivetacz gun parts → magic M-02 (1× Opus REJECT) | motif M-02 | reason: industrial-military firearms have no coherent arcane reading; Opus REJECT
CUT   | createimmersivetacz nitropowder → tfmg coking M-12 (1×) | motif M-12 | reason: same as above; deepens Create but no new anchor; REJECT
CUT   | createimmersivetacz gun parts → magic (no motif, 1×) | no motif | reason: no coherent magic hook; REJECT
CUT   | createimmersivetacz primer → occultism M-10 (1×) | motif M-10 | reason: imbuing a gunpowder primer has no thematic grounding; REJECT
CUT   | createimmersivetacz nitropowder → createaddition liquid_burning M-13 (1×) | motif M-13 | reason: M-13 reserved for aeronautics propulsion fuel; nitropowder-as-engine-fuel is off-theme; REJECT
CUT   | createimmersivetacz primer → create M-06 sequenced_assembly double-counting (1×) | motif M-06 | reason: primer IS already a sequenced_assembly product; double-counting; REJECT
CUT   | createimmersivetacz ammo pipeline → create M-06 (1×) | motif M-06 | reason: already uses sequenced_assembly natively; not a new link; REJECT
CUT   | createimmersivetacz ammo → economy M-08 (1×) | motif M-08 | reason: M-08 is player-minted currency, not commodity trade; wrong motif; REJECT
CUT   | createimmersivetacz gun_barrel → economy M-29 spirit-treated bore (1×) | motif M-29 | reason: "the gunsmith needs a spirit-treated bore" — tone clash; REJECT
CUT   | createimmersivetacz ammo → create M-32 byproduct (1×) | motif M-32 | reason: the byproduct→input here is a design narrative ("coke-oven gases feed nitropowder mixer") — valid but 1× only; the TFMG vat KEEP covers the chemical-processing angle; CUT
CUT   | createimmersivetacz gun_barrel → M-34 supply (1×) | motif M-34 | reason: finished guns are capital goods, not consumables; M-34 on ammo (KEEP) is the correct consumable form; CUT
CUT   | createimmersivetacz ammo → M-30 regional scarcity (1×) | motif M-30 | reason: brass is region-locked — this is a true M-30 link; however it is a design-level observation (brass scarcity already handled by GTMOGS/ore weave on the brass/zinc side), not a TACZ-specific weave; CUT, note for brass ore slate
CUT   | createimmersivetacz gun_barrel → magic M-10 infused barrel (1×) | motif M-10 | reason: arcane infused gun barrel tone clash; REJECT
CUT   | createimmersivetacz ammo → magic M-10 (1×) | motif M-10 | reason: industrial explosive/magic genre-discordant; REJECT
CUT   | createimmersivetacz primer → create M-29 mechanical_crafting andesite (1×) | motif M-29 | reason: andesite alloy is the existing Create anchor already; not a new cross-route; REJECT
CUT   | createimmersivetacz gun_barrel → magic M-29 nitropowder ritual (1×) | motif M-29 | reason: theme clash; REJECT
CUT   | createimmersivetacz firing_mechanism → survival M-15 Cataclysm gate (1×) | motif M-15 | reason: interesting boss-key link but single ACCEPT, no Opus; the M-15 hook is plausible if Cataclysm boss is confirmed in pack; flag for Phase-3 authoring note; CUT for now (insufficient corroboration)
CUT   | createimmersivetacz factory → colony M-37 research (1×) | motif M-37 | reason: single ACCEPT; appealing but thin; the colony ammo-supply angle is better as a v0.9.0 design note; CUT
CUT   | createimmersivetacz nitropowder → magic ritual M-29 (1×) | motif M-29 | reason: theme clash confirmed; REJECT
CUT   | createimmersivetacz gun_barrel / firing_mechanism → aeronautics M-24 (1×) | motif M-24 | reason: gun parts on airship — no existing motif covers weapon mounts; would need Gate-0; REJECT
CUT   | createimmersivetacz ammo M-26 → survival (1×) | motif M-26 | reason: duplicate of M-26 KEEP (same consumption-sink, different to_pillar label); folded into KEEP
CUT   | createimmersivetacz ammo → aeronautics M-31 (1×) | motif M-31 | reason: folded into KEEP M-31; duplicate

---

## createoreexcavation  — slate: 4 KEEP / 31 CUT / 5 MERGE / 1 DEFER   | anchors after: create + economy (now 2)

Item surface: drilling_machine (SU-powered), drill/diamond_drill/netherite_drill (heads), vein_finder, sample_drill, extractor (fluid). The strongest clusters: (1) vein table → coin-grade metals → M-08, (2) vein table → regional scarcity M-30, (3) drill-head boss gate M-15, (4) extractor fluid → TFMG aeronautics chain M-13.

KEEP  | createoreexcavation vein table (scarce regional metals) → economy (M-08 player-minted currency) | motif M-08 | delivery: config (configure coin-grade regional metals — palladium, nickel, TFMG lead — as drilling machine vein outputs; the slow-but-infinite extraction rate feeds the Create crush→numismatics mint pipeline) | milestone: v0.9.0 | why "of course": the infinite vein is the late-game answer to "ores run out" — it doubles as the coin faucet; the Drilling Machine in the right region is how a Create base sustains the metal supply; 16× top candidate, ACCEPT consensus, Opus-corroborated (4×)
KEEP  | createoreexcavation vein table → economy (M-30 regional-scarcity gate) | motif M-30 | delivery: config/datapack (map pack's regional ores into the vein table so a chunk's vein is the only infinite-rate source for that region's scarce metal; lock regional metals to specific biome-chunk veins) | milestone: v0.9.0 | why "of course": a player who finds a palladium vein in their region holds a structural economic advantage — the drilling machine is how a Create base owns its region's supply; 7× ACCEPT + 1× Opus
KEEP  | createoreexcavation:netherite_drill → create/survival (M-15 boss-key gate) | motif M-15 | delivery: recipe (the netherite drill head requires a boss-drop component as a fabrication input; high-throughput mining access locked behind combat progression) | milestone: v0.7.0 | why "of course": the netherite drill that can tap a deep rare vein requires the fighter to supply the key part; 3× ACCEPT + multiple 1× corroborations
KEEP  | createoreexcavation extractor (fluid vein) → aeronautics (M-13 via TFMG distillation) | motif M-13 | delivery: config/recipe (configure crude oil / petroleum vein as an extractable fluid reservoir; extractor output → TFMG distillation column → diesel for Aeronautics engine intake) | milestone: v0.9.0 | why "of course": a discovered oil vein tapped by the Extractor feeds the TFMG refinery which fuels the airship fleet; 2× ACCEPT

DEFER | createoreexcavation drill-head tiers (drill/diamond_drill/netherite_drill) as tooling wear | motif M-38 | →build #239 (mechanism-pending: no tool-degradation mechanic in pack; drill-heads as a toolmaker dependency would be excellent but requires M-38 implementation first)

CUT   | createoreexcavation diamond_drill → create M-06 sequenced_assembly (9×) | motif M-06 | reason: drill heads are mid-tier tools, not endgame flagships; M-06 is for endgame keystones; already use create:crushing/cutting/milling; same-pillar deepening; REJECT consensus (6 REJECT vs 3 ACCEPT)
CUT   | createoreexcavation vein table → economy M-08 (4× Opus, 2×, 2×, multiple 1×) | motif M-08 | reason: all duplicates of the KEEP M-08 above; same link; lower times_suggested
MERGE | createoreexcavation vein table → M-08 (4× Opus) | into: KEEP M-08 | reason: same link; folded
MERGE | createoreexcavation vein table → M-08 (2×) | into: KEEP M-08 | reason: same; folded
MERGE | createoreexcavation vein table → M-08 (multiple 1×) | into: KEEP M-08 | reason: same; folded
MERGE | createoreexcavation vein table → M-30 (1× Opus) | into: KEEP M-30 | reason: same regional-scarcity link; folded
MERGE | createoreexcavation diamond_drill → M-15 (1× Opus) | into: KEEP M-15 | reason: same boss-key gate; folded
CUT   | createoreexcavation drill → create M-15 (3× ACCEPT, mixed with 15× combined) | motif M-15 | reason: multiple variants of the same M-15 drill-gate link; the KEEP covers it; all folded or cut as duplicates
CUT   | createoreexcavation extractor → aeronautics M-13 (2× mixed, 1× Opus REJECT) | motif M-13 | reason: the Opus-corroborated REJECT (infinite fluid as uncapped faucet is a balance risk) correctly flags the design concern; the KEEP M-13 is for a configured specific vein, not an uncapped infinite reservoir; cut the uncapped versions; keep KEEP M-13 with the constraint that it is a specific configured vein
CUT   | createoreexcavation drill → magic M-10 (2× mixed) | motif M-10 | reason: raw ore → magic is handled more coherently via boss-gate and regional-metal weaves; no unique material surface; REJECT
CUT   | createoreexcavation vein_finder → aeronautics M-24 (2×) | motif M-24 | reason: vein_finder is a held item, not an engine/rotor/control surface; wrong motif; REJECT
CUT   | createoreexcavation raw_diamond / raw_emerald → create M-03 (2×) | motif M-03 | reason: vein raw ores should indeed pass through crushing wheels — but this is already implicit in the standard ore-doubling (M-03 is established); not a new weave, just confirming the existing inbound link
CUT   | createoreexcavation fluid extraction → create M-32 (2× mixed) | motif M-32 | reason: the extractor fluid → TFMG refinery byproduct chain is interesting; but 1× ACCEPT with 1× REJECT and no Opus; the M-13 KEEP covers the aeronautics end; the M-32 "byproduct→input" framing is thin without a named specific fluid pair; CUT
CUT   | createoreexcavation diamond_drill → colony M-28 (2×) | motif M-28 | reason: the netherite drill tier behind colony research — plausible but thinner than the boss-key gate (M-15 KEEP); colony miner hut doesn't consume drill output by default; 2× only; CUT
CUT   | createoreexcavation vein_finder → magic M-10 infused scanner (1×) | motif M-10 | reason: kinetic rotational instrument ≠ magical artifact; thematic mismatch; REJECT
CUT   | createoreexcavation diamond_drill → create M-17 electrify (1×) | motif M-17 | reason: M-17 is "FE charges a magic focus/tool"; electrifying a drill is within-Create, not a magic bridge; REJECT
CUT   | createoreexcavation extractor infinite fluid → aeronautics M-13 (1× Opus REJECT) | motif M-13 | reason: Opus correctly rejects — uncapped faucet feeding fuel breaks economy; this is why the KEEP M-13 specifies a configured specific vein, not free-flowing; REJECT uncapped form
CUT   | createoreexcavation drilling_machine → colony M-15 (1×) | motif M-15 | reason: M-15 is boss drop gates a Create recipe; the drilling machine is a mid-tier Create item made via create:crushing/mechanical_crafting, not boss-gated; REJECT
CUT   | createoreexcavation vein table → magic M-18 (1×) | motif M-18 | reason: the vein table is a pack design lever; Occultism miner spirits acquiring ore is a separate magic path — wiring them redundantly is overlap; REJECT
CUT   | createoreexcavation drill → magic M-18 Opus REJECT (1× Opus) | motif M-18 | reason: kinetic drill vs summoned spirit — same-role overlap; Opus REJECT
CUT   | createoreexcavation vein_finder → economy M-08 (1×) | motif M-08 | reason: the vein_finder as a config/design lever is the same as the KEEP M-08 (which is about configuring the vein table); not a distinct new link
CUT   | createoreexcavation vein table → magic M-16 seasonal (1×) | motif M-16 | reason: vein rate is not season-gated without custom code; no mechanic; REJECT
CUT   | createoreexcavation vein_finder → survival M-16 (1×) | motif M-16 | reason: wrong motif; REJECT
CUT   | createoreexcavation ore outputs → magic M-11 occultism spirit_fire (1×) | motif M-11 | reason: raw_emerald is broadly used; dedicating it as occultism ritual input via this mod specifically is an over-specific overlay; REJECT
CUT   | createoreexcavation vein table → magic M-29 (magic ore in vein, 1×) | motif M-29 | reason: adding magic-mod ore veins as drilling targets is a config-design note; the M-30 KEEP covers the regional-scarcity angle; magic ore via drilling is a Phase-3 authoring question, not a distinct Gate-2 weave
CUT   | createoreexcavation raw_diamond → create M-03 (1×) | motif M-03 | reason: same as 2× M-03 above — implicit in established ore-doubling; not a new link; CUT
CUT   | createoreexcavation vein + GTMOGS join → create M-03 (1×) | motif M-03 | reason: aligning vein recipe type with GTMOGS worldgen is a config task, not a recipe weave; implicit in M-30 KEEP; CUT
CUT   | createoreexcavation drilling_machine SU → createnuclear reactor (1×) | motif M-05 | reason: a config/design lever (reactor powers the driller); M-05 requires a recipe method; no-motif fit; REJECT
CUT   | createoreexcavation vein → magic M-03 magic ore (1× Opus) | motif M-03 | reason: magic-ore-in-vein is a config note; Opus flags it as "Create drill supplies the magic pillar's key metal — natural" — that's a Phase-3 authoring decision, not a Gate-2 weave; CUT
CUT   | createoreexcavation vein → magic M-29 mithril (1×) | motif M-29 | reason: same as above — adding mithril as a vein output is config work; the M-30 KEEP covers the regional-scarcity angle; CUT
CUT   | createoreexcavation drill SU demand → no-motif (1×) | no motif | reason: no-motif; REJECT
CUT   | createoreexcavation vein table → magic M-03 (1× Opus) | motif M-03 | reason: same config-note interpretation as above; Opus ACCEPT but thin; CUT
CUT   | createoreexcavation vein_finder M-33 service (1×) | motif M-33 | reason: "sells survey information" is creative M-33 but 1× only; emergent play, not a recipe weave; CUT
CUT   | createoreexcavation vein_atlas → aeronautics M-33 scouting (1×) | motif M-33 | reason: airship pilot sells vein maps — thematic but 1× only; no recipe method; CUT
CUT   | createoreexcavation loot=yes → M-08 loot-seed (1×) | motif M-08 | reason: the dossier notes no structure/dungeon; likely drop tables only; not a worldgen loot table to seed; REJECT
CUT   | createoreexcavation vein_finder → create M-05 (1×) | motif M-05 | reason: the vein_finder requiring brass via mechanical_crafting is the existing inbound weave; not a new link; REJECT
CUT   | createoreexcavation drilling_machine → colony M-28 (1×) | motif M-28 | reason: the drilling machine is a player-placed Create machine, not a colony worker type; MineColonies has no mining/drilling hut; REJECT
CUT   | createoreexcavation vein → no-motif bare economy (1×) | no motif | reason: "produces ore = economic" is not a weave; the regional-scarcity and coin-gate angles above capture the real links; REJECT
CUT   | createoreexcavation drilling_machine → colony miner M-28 request (1×) | motif M-28 | reason: colony consuming vein output is plausible but no colony hut type requests drilling machine output by default; 1× only; CUT

---

## dtterralith  — slate: 3 KEEP / 8 CUT / 3 MERGE / 0 DEFER   | anchors after: create + magic + economy (now 3)

Item surface: dtterralith:jacaranda_seed, maple_seed, cedar_seed, kapok_seed, amethyst_seed, giga_spruce_seed (biome-specific dynamic tree seeds); exotic logs (same-ish material as vanilla but region-typed); leaf-loot (loot=yes canopy drops). The strongest clusters: (1) seeds → create M-12 milling (biome-specific pigment/resin), (2) amethyst_seed → magic M-10, (3) seeds/species → economy M-30 (region-locked species).

KEEP  | dtterralith exotic seeds (cedar/jacaranda/maple/kapok) → create (M-12 via create:milling) | motif M-12 | delivery: recipe (Terralith-exclusive tree seeds milled into biome-specific wood pigment or resin powder — a regional dye/extract unavailable elsewhere; the Create spine produces the color palette) | milestone: v0.7.0 | why "of course": a mill grinding exotic Dynamic Trees seeds yields region-specific wood pulp or dye pigment — biome-tied raw material feedstuff for the Create dye/pigment chain; 11× top candidate, ACCEPT (8 vs 5 REJECT but the ACCEPT side is coherent)
KEEP  | dtterralith:amethyst_seed (amethyst-cave biome) → magic (M-10 via ars_nouveau:imbuement) | motif M-10 | delivery: recipe (amethyst-grove tree seed as an imbuement catalyst or input — the crystalline tree seed carries innate arcane resonance; imbuing it alongside a source gem produces an arcane intermediate) | milestone: v0.11.0 | why "of course": a seed that grows an amethyst-fused tree reads as innately magical; the arcanist's apparatus uses the grove's seed to attune a resonant crystal; 4× ACCEPT (combined from two 4× rows, corroborated)
KEEP  | dtterralith region-specific tree species → economy (M-30 regional scarcity) | motif M-30 | delivery: worldgen / loot-seed (jacaranda and kapok only grow in specific Terralith biomes; seed the rare seeds into biome-appropriate exploration structure loot; players who settle elsewhere must trade for those planks and seeds) | milestone: v0.9.0 | why "of course": the kapok seed is only found in jungle-temple loot; planting a new species requires exploring its native region; 2× ACCEPT + 1× ACCEPT loot-seed corroboration

CUT   | dtterralith exotic logs → create M-04 crushing (5×) | motif M-04 | reason: M-04 is for deco blocks (metal/stone), not wood; applying a lossy crush to logs is thematically off; REJECT consensus
CUT   | dtterralith seeds → loot → create M-12 (3×) | motif M-12 | reason: a loot-seeded form of M-12 — the seeds' milling angle is already the KEEP M-12; this sub-variant (loot-first then mill) adds no new anchor; REJECT consensus (2:1)
CUT   | dtterralith exotic leaves → survival M-12 cutting/milling (3×) | motif M-12 | reason: leaves have no mechanical identity beyond vanilla; routing them through FD cutting has no coherent intermediate product; REJECT consensus
MERGE | dtterralith seeds → create M-12 (3×, biome seeds specific) | into: KEEP M-12 above | reason: same milling link on the specific seed types; lower times_suggested; folded
MERGE | dtterralith amethyst_seed → magic M-10 (1× loot variant) | into: KEEP M-10 above | reason: same amethyst-seed→magic delivery; folded
MERGE | dtterralith amethyst_seed → magic M-07 (2× mixed) | into: KEEP M-10 above | reason: M-07 (attunement catalyst) vs M-10 (arcane infusion pull) — both describe the amethyst seed gating a magic conversion; M-10 is the more accurate motif (seed as imbuement input, not gating conversion arbitrage); fold into KEEP M-10
CUT   | dtterralith amethyst_seed → magic M-10 (2× REJECT) | motif M-10 | reason: the REJECT side correctly notes that a seed as imbued reagent is thematically awkward if treated as a planting item; however the KEEP corroborates the arcane reading when framed as a rare biome-locked catalyst; the KEEP is the coherent form; cut the lower-confidence variant
CUT   | dtterralith seeds → survival M-16 (2× mixed) | motif M-16 | reason: Serene Seasons doesn't gate tree growth (only crops); linking seeds to seasonal gating is mechanically incorrect; REJECT
CUT   | dtterralith leaf-loot → magic M-02 (1×) | motif M-02 | reason: canopy block drops as rare magic shards — creative but 1× only; M-10 amethyst_seed KEEP is the stronger magic weave; CUT
CUT   | dtterralith seeds → magic M-16 (1×) | motif M-16 | reason: M-16 is seasonal reagent; seeds are trees not crops; wrong motif; REJECT
CUT   | dtterralith giga_spruce → colony M-28 (1×) | no motif | reason: colony workers already harvest any log type by config; not a method-routing weave; REJECT
CUT   | dtterralith logs → create M-12 exotic wood extract (1×) | motif M-12 | reason: the logs are vanilla-compatible and flow automatically; a bespoke exotic-log extract recipe is forced; CUT

---

## farmersdelight  — slate: 4 KEEP / 14 CUT / 7 MERGE / 0 DEFER   | anchors after: create + survival + economy (now 3)

The mod is the pack's primary food hub. Already has create:milling as a confirmed inbound weave. Key clusters: (1) seasonal crops → survival M-16, (2) crops → create M-12 milling, (3) cooked meals → colony M-28 provisioning, (4) M-26 diet-demand consumption.

KEEP  | farmersdelight seasonal crops (cabbage/tomato/rice/onion) → survival (M-16 seasonal reagent, Serene Seasons) | motif M-16 | delivery: config (Serene Seasons crop-season config gates FD's unique crops to their growing windows; certain complex FD dishes require season-locked ingredients) | milestone: v0.13.0 | why "of course": tomatoes only in summer; the diet system's demand curve moves with the calendar; the kitchen becomes a seasonal operation; 5× unanimous ACCEPT
KEEP  | farmersdelight crops → create (M-12 milling/cutting → flour, meal, paste) | motif M-12 | delivery: recipe (create:milling grinds FD's grain/crops into flour and rice meal as kitchen-prep intermediates; the mill is an essential upstream step before the cooking pot) | milestone: v0.7.0 | why "of course": the mill grinds FD grain into flour — kitchen prep starts at the Create machine; partly existing but extending to full FD crop range; 4× ACCEPT (3:1)
KEEP  | farmersdelight cooked meals → economy (M-28 colony provisioning) | motif M-28 | delivery: config/MineColonies (wire high-nutrition FD cooked meals as preferred colony food inputs via the colony provisioning system; colony cook hut demands hearty stews) | milestone: v0.9.0 | why "of course": colonies require food; FD's dishes are the quality rations the colony cook mass-produces; 3× ACCEPT + Opus corroboration
KEEP  | farmersdelight diet-system foods → survival (M-26 consumption sink, AppleSeed pressure) | motif M-26 | delivery: config (FD meals cover multiple diet groups simultaneously; continuous diet-variety demand means the kitchen's output is always consumed, never zeroing) | milestone: v0.13.0 | why "of course": cooked dishes are consumed against the diet/nutrition pressure; demand for the kitchen's output never zeroes; 3× ACCEPT (1:1 mixed but Opus corroborated)

CUT   | farmersdelight:straw → create M-12 milling (9×) | motif M-12 | reason: straw is a cutting byproduct with no coherent Create-milled intermediate; REJECT consensus (7:2)
CUT   | farmersdelight:straw → create M-32 bioplastic (5×) | motif M-32 | reason: lye→bioplastic chain is thematically plausible but TFMG doesn't register a biomass→plastic recipe type accepting FD straw; no existing method to route through; 4:1 ACCEPT but the REJECT correctly notes the missing recipe type
MERGE | farmersdelight cabbage/tomato/onion crops → create M-12 (2× duplicates) | into: KEEP M-12 above | reason: same milling link; these are confirmed-existing partial weaves; folded
MERGE | farmersdelight cabbage/rice/tomato → colony M-28 (1×) | into: KEEP M-28 above | reason: same colony-provisioning link; folded
MERGE | farmersdelight cooked meals → colony M-28 (multiple 1× with different framings) | into: KEEP M-28 above | reason: all are the same colony-provisioning link from different angles; folded
MERGE | farmersdelight cooking_pot → colony M-28 hut construction (3× mixed) | into: KEEP M-28 above | reason: the colony cook hut requiring a proper FD kitchen is the same M-28 delivery; fold; the 2:1 ACCEPT/REJECT split is fine — the construction recipe aspect enriches the delivery block
MERGE | farmersdelight diet demand → survival M-26 (Opus corroborated) | into: KEEP M-26 above | reason: same consumption-sink link; folded
MERGE | farmersdelight seasonal crops M-16 (3×, 2×, 1× variants) | into: KEEP M-16 above | reason: all are the same Serene Seasons seasonal-gating link; folded
MERGE | farmersdelight crops → M-12 milling (existing inbound, multiple 1× duplicates) | into: KEEP M-12 above | reason: dossier confirms this is partly existing; duplicates of the established inbound link; folded
CUT   | farmersdelight:cooking_pot → magic M-19 haunting (1×) | motif M-19 | reason: soul-fire cooking a farmhouse meal is a tone clash; REJECT
CUT   | farmersdelight cooked meals → bare numismatics sell | motif M-09 | reason: retired-economy ambient endpoint; CUT
CUT   | farmersdelight:cooking → create M-12 filling (1×) | motif M-12 | reason: already confirmed existing inbound weave (made-by: create:filling); duplicate of established link; REJECT
CUT   | farmersdelight cooked meals → survival M-12 colony (1×) | motif M-12 | reason: intra-pillar; both FD and MineColonies sit in survival; not a new anchor; REJECT
CUT   | farmersdelight feast dishes → loot-seed survival M-34 (1×) | motif M-34 | reason: FD dishes seeded in dungeon loot is tonally weak (Beef Wellington in a spider dungeon); REJECT
CUT   | farmersdelight dishes → bountiful bounty M-34 (1×) | motif M-34 | reason: FD dishes are kitchen goods, not combat-route supply; M-34 is for combat specialists supplying non-combat players; REJECT
CUT   | farmersdelight:apple_cider → vinery M-35 (2× ACCEPT) | motif M-35 | reason: FD apple cider feeding Vinery fermentation is a real M-35 maturation link — but FD already has 3 solid anchors (create/survival/economy); a 4th weave into vinery adds complexity without a new pillar; 2× only; flag as a Phase-3 nice-to-have if Vinery is in the pack; CUT for now
CUT   | farmersdelight seasonal bulk → aeronautics M-31 (1×) | motif M-31 | reason: seasonal farm surplus as bulk cargo requiring aeronautics — thematic but 1× only; the 3-anchor slate is already complete; CUT
CUT   | farmersdelight crops → magic M-12 Agronomic Sourcelink (1×) | motif M-12 | reason: FD crop farm passively generating Ars Source is ambient coexistence, not a designed recipe weave; REJECT
CUT   | farmersdelight seasonal crops → magic M-16 imbuement (1×) | motif M-16 | reason: "only works with fresh summer tomatoes" is thematic but 1× only; FD's 3 anchors are complete; CUT
CUT   | farmersdelight:straw → magic M-11 spirit fuel (1×) | motif M-11 | reason: straw-as-spirit-fuel has no lore fit; occultism rituals fed with bone/soul, not straw; REJECT
CUT   | farmersdelight meals → occultism M-11 spirit_fire (1×) | motif M-11 | reason: a nourishing meal transmuted by spirit fire → occult reagent is 1× only; FD has 3 anchors; CUT (too thin to add a 4th)
CUT   | farmersdelight stale food → colony composting M-12 (1× Opus) | motif M-12 | reason: kitchen byproducts composting into fertilizer — interesting loop but 1× only and the composting mechanic is intra-pillar (survival); CUT

---

## gravestone  — slate: 1 KEEP / 14 CUT / 0 MERGE / 0 DEFER   | anchors after: economy (now 1)

The mod's items: gravestone (block, auto-placed on death), obituary (death-log paper item). The gravestone is a QoL safety-net — gating it behind anything is an anti-player hard-guardrail violation. The obituary is informational only. The only genuine weave is the M-33 death-recovery service.

KEEP  | gravestone:obituary → economy (M-33 service-for-hire: death recovery) | motif M-33 | delivery: emergent (a death-recovery specialist uses the obituary to locate dangerous graves and charges coin to travel and recover them; service-for-hire; player-to-player labor) | milestone: v0.9.0 | why "of course": dying in a dangerous biome with full gear is a real loss; a specialist player recovers the grave for a fee; this is a labor transaction (player-to-player); 3× ACCEPT (2:1)

CUT   | gravestone:gravestone → create M-04 crushing (9×) | motif M-04 | reason: tone clash — crushing a gravestone in a Create machine is tonally wrong; the gravestone is a sombre functional utility; unanimous REJECT
CUT   | gravestone:obituary → magic M-11 ritual (3×) | motif M-11 | reason: tone clash + gameplay perversion — feeding death records into magic rituals makes dying a resource farm; REJECT
CUT   | gravestone:obituary → recipe no-motif (3×) | no motif | reason: no motif fits a death-record document; informational only; REJECT
CUT   | gravestone:obituary → magic M-10 (2×) | motif M-10 | reason: imbuing death paperwork as a magic reagent is tone-broken; REJECT
CUT   | gravestone:gravestone → colony M-28 (2× mixed) | motif M-28 | reason: the ACCEPT (cemetery hut requests gravestones) is thematically nice but 1:1 split and no Opus; the gravestone is placed automatically — a colony "building" requesting it as a crafted block is thin; CUT
CUT   | gravestone:obituary → any (2×) | no motif | reason: the obituary is pure informational/QoL; no motif covers death record → resource; REJECT
CUT   | gravestone "death = no total loss → removes pressure" | no motif | reason: design tradeoff, not a weave
CUT   | gravestone:gravestone → create M-05 gating (1×) | motif M-05 | reason: hard guardrail violation — gating a death-QoL utility behind a Create recipe is anti-player; REJECT
CUT   | gravestone:gravestone → create M-19 haunting (1×) | motif M-19 | reason: the gravestone is auto-placed (not crafted); feeding it through haunting fights the mod's purpose; REJECT
CUT   | gravestone:gravestone → create M-04 crushing (1×) | motif M-04 | reason: functional utility block, not decoration; M-04 is for deco; REJECT
CUT   | gravestone (Opus: ritual or haunting) → magic M-19 | motif M-19 | reason: death-recovery QoL utility as ritual input fights the mod's purpose; Opus REJECT
CUT   | gravestone:gravestone → create (no method) | no motif | reason: gating a death-recovery block behind Create is anti-player; REJECT
CUT   | gravestone:obituary → magic M-02 (1×) | motif M-02 | reason: obituary is not a mob drop; wrong motif; REJECT
CUT   | gravestone:obituary → supplementaries lore M-26 (1×) | motif M-26 | reason: adding item_lore is flavour authoring, not a consumption sink; REJECT
CUT   | gravestone:gravestone soul energy → occultism M-11 (1×) | motif M-11 | reason: single ACCEPT — "residual soul energy from a death-grave" is creative but the gravestone is not a craftable stockpiled item; the one-way auto-placement means this creates a farming incentive (die deliberately to get gravestones to spirit-fire); reject; REJECT
CUT   | gravestone loot=yes misread (2×) | motif M-34 | reason: loot=yes is the grave restoring the player's own items, not worldgen loot; misread; REJECT

Note: gravestone reaches only 1 anchor (economy via M-33 service). The mod is near-LEAVE — it is a QoL utility with a thin but genuine service-economy weave. Not forcing a second anchor on a safety-net mod.

---

## hpm  — slate: 5 KEEP / 17 CUT / 5 MERGE / 0 DEFER   | anchors after: create + economy + aeronautics (now 3)

Item surface: largehull, smallhull, largemast, smallmast (hull components), pirate_cutter_item, cuttermilitariseditem, corvette_steamship_item (finished ships), hand_cannon, hand_mortar, cannonball, mortar_ball, swashbucklerupgrade. Rich Create and economy surface. Ships are bespoke boat-entities (not Aeronautics physics ships).

KEEP  | hpm:largehull / largemast → create (M-05/M-23 via create:mechanical_crafting) | motif M-23 | delivery: recipe (ship hull and mast components require Create brass and iron plates via mechanical_crafting; the shipyard becomes a real workshop, not a plank-nailing session) | milestone: v0.7.0 | why "of course": a ship hull isn't hammered from raw planks — it needs fabricated Create structural plates; 12× ACCEPT (M-05) + 7× ACCEPT (M-23) — same link, M-23 is the more precise motif for structural alloy in a hull
KEEP  | hpm:corvette_steamship_item → create (M-06 sequenced_assembly) | motif M-06 | delivery: recipe (WIP/top-tier steamship staged through sequenced assembly chain — boiler + drive shaft + hull plating as sequential steps) | milestone: v0.7.0 | why "of course": the steamship is WIP/top-tier; staging its construction through sequenced assembly is exactly what M-06 is for; 20× top candidate, unanimous ACCEPT
KEEP  | hpm:hand_cannon → create (M-05 via create:pressing + tacz:gun_smith_table_crafting) | motif M-05 | delivery: recipe (hand cannons crafted with Create-pressed iron plates at the gun smith table; naval weapons tied to the industrial spine) | milestone: v0.7.0 | why "of course": a hand cannon's barrel is forged — pressing iron plates to form the bore; 9× ACCEPT (8:1)
KEEP  | hpm:cannonball / mortar_ball → create (M-12/M-29 via createbigcannons:cartridge_assembly or create:compacting) | motif M-29 | delivery: recipe (cannonballs compacted from pressed iron ingots via Create; or routed through CBC cartridge assembly as a cross-route dependency between naval and artillery ordnance specialists) | milestone: v0.7.0 | why "of course": the hand cannon loads Create Big Cannon cartridges — the naval gunner and the artillery engineer share an ammunition supply line; 4× ACCEPT M-29 + 3× M-12
KEEP  | hpm ships (war-cutter / corvette) → economy (M-34 combat-route supply) | motif M-34 | delivery: emergent trade (a combat-shipwright builds and sells armed cutters to landlocked players; the ship is the combat-specialist's product) | milestone: v0.9.0 | why "of course": a player who fights and captures at sea trades completed vessels to landlocked players; 3× ACCEPT

MERGE | hpm cutter/war-cutter hull → create M-05 (6×, overlapping with M-23) | into: KEEP M-23/hull above | reason: the M-05 and M-23 rows describe the same "mechanical_crafting for hull/mast" link; M-23 (structural alloy) is more precise; folded
MERGE | hpm:swashbucklerupgrade → create M-20 (3×) | into: KEEP hull KEEP above | reason: fitting the upgrade keel via deployer/item_application is a lighter version of the same hull-fabrication story; fold into M-23 KEEP as a secondary delivery note (or express separately as M-20 at Phase 3)
MERGE | hpm ships → economy M-31 (5× mixed) | CUT instead | reason: hpm ships are bespoke boat-entities, not Aeronautics physics ships; calling them "the logistics arm" conflates the two; REJECT consensus (4:1)
MERGE | hpm:cannonball → create M-05 (2×) | into: KEEP cannonball above | reason: same compacting/pressing link; folded
MERGE | hpm:cannonball → economy M-26 consumption (1×) | into: KEEP M-34 above | reason: cannonballs consumed in combat → demand renewal is the same loop as the M-34 KEEP; folded
CUT   | hpm ships → aeronautics (4× unanimous REJECT) | no motif | reason: hpm ships are bespoke boat-entities, not Aeronautics physics contraptions; they coexist but are different systems; REJECT
CUT   | hpm:cuttermilitariseditem → create M-06 sequenced_assembly (3× mixed) | motif M-06 | reason: the war-cutter is mid-tier, not endgame; M-06 is for endgame flagships; the corvette steamship KEEP covers M-06; REJECT
CUT   | hpm:conductor_cap / benchcart → create M-06 (multiple) | motif M-06 | reason: conductor_cap is already made via Create sequenced_assembly (existing inbound weave); not a new link
CUT   | hpm:hand_cannon → create M-06 sequenced_assembly (2×) | motif M-06 | reason: the hand cannon is a handheld weapon, not a flagship machine; M-06 is for endgame keystones; REJECT
CUT   | hpm:cuttermilitariseditem → create M-05 (2× mixed) | motif M-05 | reason: overlaps the hull/mast KEEP above; duplicated by the M-23 KEEP; CUT
CUT   | hpm ships → aeronautics M-31 bulk hull materials (2×) | motif M-31 | reason: hull materials are heavy (M-31 valid idea) but only 2× and the "ships-as-aeronautics-logistics" confusion is the same rejection; CUT for now
CUT   | hpm:hand_cannon loot-seed M-02 (1×) | motif M-02 | reason: hpm has loot=no; hand_cannon/mortar are crafted items, not loot drops; wrong motif; REJECT
CUT   | hpm:cannonball → create M-20 pressing (1×) | motif M-20 | reason: CBC already owns cannon-ammo fabrication; parallel hpm munition chain risks confusing cannon-ammo ownership; REJECT (flag for curation thunderdome)
CUT   | hpm:corvette_steamship → aeronautics M-13 fuel (1× Opus) | motif M-13 | reason: a steamship running on TFMG refined fuel is thematically correct and Opus corroborates it — but it is a configuration note (config the ship's engine fuel tag), not a recipe weave; the M-06 KEEP captures the steamship build; flag as Phase-3 config note
CUT   | hpm:hand_cannon / mortar → create M-05 (1× Opus REJECT) | motif M-05 | reason: overlap with CBC's artillery directly; curation de-dup question for thunderdome; Opus REJECT
CUT   | hpm ships overlap with Aeronautics/CBC (curation flag) | — | reason: the dossier correctly flags role-split as a thunderdome question; not a weave
CUT   | hpm cutter → aeronautics M-31 (1×) | motif M-31 | reason: hpm ships are not Aeronautics logistics arm; REJECT
CUT   | hpm:raftitem → create gating (1×) | no motif | reason: everyday/cheap item; gating a basic raft behind Create machinery violates the basics guardrail
CUT   | hpm ships → create M-06 full assembly (1×) | motif M-06 | reason: ships already addressed via M-23 hull + M-06 corvette; adding a full ship-assembly line on top would over-gate the fleet; REJECT
CUT   | hpm:hand_mortar → tacz gunsmith M-29 (1×) | motif M-29 | reason: plausible (hand mortar built at the gunsmith table) but the M-05 hand_cannon KEEP already captures the "weapons built via Create/gunsmith" story; this is a sub-delivery note, not a new weave; CUT
CUT   | hpm hull → createbigcannons melting M-32 (1×) | motif M-32 | reason: hull plates cast from CBC foundry — single ACCEPT, no Opus; the M-23 KEEP is the primary hull fabrication; CUT
CUT   | hpm:pirate_cutter → economy M-33 commission (1×) | motif M-33 | reason: "build-to-order for coin" is the M-33 service-for-hire idea; 1× only; the M-34 KEEP (shipwright builds and sells) covers the supply side; CUT (emergent play, not a designed recipe)
CUT   | hpm colony research M-37 (1×) | motif M-37 | reason: "can't commission a war-cutter without colony naval engineer research" — 1× only, no Opus; interesting but thin; CUT
CUT   | hpm:raftitem → colony M-28 (1×) | motif M-28 | reason: no MineColonies Fisherman recipe for rafts by default; 1× only; REJECT

---

## jakes-build-tools-2.0.1.5  — LEAVE (pure builder QoL — hammer/chisel/trowel/hardhat are basic daily-use utilities; the basics-guardrail forbids gating them behind Create/magic; experience_flask items are build-site consumables with no coherent method-routing; every candidate row was rejected on depth or no-motif grounds)

The one M-32 ACCEPT (XP nuggets from crusher bottled into a jake's flask, 2×) is the only borderline case. It is a nice-to-have config/mechanic note but not a designed recipe weave (the crusher byproduct → flask is a player action, not a recipe type); the M-10 single-ACCEPT (drain flask into imbuement altar) is 1× only and tonally strained. Neither clears the bar for a Gate-2 KEEP on a builder-QoL mod with no progression items. Marking LEAVE.

---

## more_slabs_stairs_and_walls  — slate: 2 KEEP / 10 CUT / 4 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

847 cut variants of stone/wood/concrete. No magic, no survival, no loot. The Create-cutting link is overwhelming (10×). The colony-request link adds an economy anchor.

KEEP  | more_slabs_stairs_and_walls stone/wood cut variants → create (M-12 via create:cutting) | motif M-12 | delivery: recipe (all 847 slab/stair/wall variants producible via the mechanical saw; a player automating a base or ship runs bulk log/stone through the sawmill line to get the full architectural palette) | milestone: v0.7.0 | why "of course": a player building large ships or colony structures runs raw planks/stone through the mechanical saw — the Create spine produces the entire builder palette; 10× ACCEPT unanimous
KEEP  | more_slabs_stairs_and_walls stone variants → economy (M-28 colony route) | motif M-28 | delivery: config/MineColonies (colony builder huts request specific cut blocks — stair/slab variants — for schematic upgrades; MSSW expands the available variants, feeding colony build requests) | milestone: v0.9.0 | why "of course": the colony builder requests polished-basalt stairs — the Create saw runs them in bulk and the logistics arm delivers to the colony; 3× ACCEPT

CUT   | MSSW stone cuts → create M-04 crushing recycle (9× mixed) | motif M-04 | reason: M-04 is for lossy deco recycle; applying crushing to 847 variants would mean hundreds of crushing recipes for decorative blocks — impractical and inflates the recipe graph; dossier flags WEAK; 2:7 REJECT vs ACCEPT
MERGE | MSSW 847 cuts → create M-12/M-04 cutting (5× M-12 variant) | into: KEEP M-12 above | reason: same create:cutting delivery; folded
MERGE | MSSW stone cuts (5× M-04 mixed) | CUT instead | reason: the M-04 recycle of stone cuts is weak at scale; folded into CUT above
MERGE | MSSW gravity-block cuts → create M-04 (5× mixed, gravity/concrete) | motif M-04 | reason: crushing concrete-powder/sand/gravel cuts back to sand/gravel is a valid M-04 loop but: (a) adding separate crushing recipes for gravity variants of 847 blocks is still impractical; (b) 4:1 REJECT consensus; CUT
MERGE | MSSW 847 cuts → create M-12 (2×) | into: KEEP M-12 above | reason: same link; folded
CUT   | MSSW amethyst/basalt cuts → magic M-10 (3× unanimous REJECT) | motif M-10 | reason: theme clash; forcing arcane infusion onto decorative block variants is invented; REJECT
CUT   | MSSW wood logs → create M-12 milling (2× mixed) | motif M-12 | reason: milling is for extracting material (sawdust/pulp); milling a finished decorative slab has no coherent intermediate; REJECT
CUT   | MSSW amethyst/basalt cuts → ars_nouveau M-29 (2× mixed) | motif M-29 | reason: "amethyst slab variant as Ars apparatus pedestal" is creative but 1:1 split; the delivery (amethyst cuts as apparatus construction blocks) is a config note, not a recipe weave; the ACCEPT would require KubeJS to force specific block variants; too thin; CUT
CUT   | MSSW concrete-powder cuts → create M-12 mixing (1×) | motif M-12 | reason: Create handles concrete via compacting/mixing already; overly granular; REJECT
CUT   | MSSW cuts → aeronautics M-23 (2×) | motif M-23 | reason: M-23 requires load-bearing structural alloy (metal plate/beam); stone slabs don't qualify as structural alloys; REJECT
CUT   | MSSW log slabs → create M-32 (1×) | motif M-32 | reason: log cuts are independently craftable; not downstream of a processing chain; no cross-system byproduct; REJECT
CUT   | MSSW cuts → domum_ornamentum no-motif (1×) | no motif | reason: no established motif covers MSSW→DO cross-mod routing; REJECT
CUT   | MSSW stone family cuts → create M-12 (1×, stone family) | motif M-12 | reason: duplicate of the KEEP M-12 above for stone variants; folded into KEEP; CUT as separate entry

---

## railways  — slate: 3 KEEP / 14 CUT / 4 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

Item surface: locometal blocks (many color variants — 617), conductor_cap (sequenced-assembly mid-tier), benchcart, rails/track, incomplete_conductor_cap, brass/copper iron consumption in recipes. The mod already uses create:mechanical_crafting + create:sequenced_assembly (confirmed inbound). The locometal deco-recycle and the logistics-service are the two sharpest new anchors.

KEEP  | railways:locometal blocks → create (M-04 deco recycle via create:crushing) | motif M-04 | delivery: recipe (old/surplus locometal blocks — decorative train-hull cladding — crushes back to iron/copper/brass dust + XP nugget; the railway industry recycles itself) | milestone: v0.7.0 | why "of course": old train parts get melted back down — locometal crushes to iron/copper/brass dust; nothing wasted in a workshop; 8+8× top candidates, ACCEPT consensus (best framing wins; keep the recycle story)
KEEP  | railways conductor logistics → economy (M-33 service-for-hire) | motif M-33 | delivery: emergent (a train-specialist player runs cargo routes for other players — conductor/benchcart as a logistics service; payment emergent between players) | milestone: v0.9.0 | why "of course": a player running a railway service operates the conductor and benchcart for other players' cargo; this is labor/service, not a vendor sale; 4× ACCEPT (2:2 mixed, but the service-hire framing is coherent)
KEEP  | railways locometal build demand → economy (M-31 logistics-required bulk good) | motif M-31 | delivery: emergent/config (bulk locometal and track goods are heavy construction stock; trading at scale across the server map requires aeronautics/train runs; the rail-builder depends on the logistics network to supply raw material) | milestone: v0.9.0 | why "of course": a player building a rail network across regions needs massive quantities of locometal shipped from the manufacturing base; 5× ACCEPT (4:1)

CUT   | railways locometal → aeronautics M-23 (6× mixed) | motif M-23 | reason: locometal is already an aeronautics/Create-adjacent decorative material; using it as an airship airframe structural alloy would make the existing pillar circular; REJECT consensus (4:2)
MERGE | railways locometal → create M-04 (8× second cluster) | into: KEEP M-04 above | reason: same deco-recycle link, slightly different phrasing; folded
MERGE | railways locometal → create M-04 (3×, 2×) | into: KEEP M-04 above | reason: same; folded
MERGE | railways conductor M-33 (1× additional framing) | into: KEEP M-33 above | reason: same service-hire link; folded
MERGE | railways benchcart + conductor logistics M-33 (1×) | into: KEEP M-33 above | reason: same; folded
CUT   | railways:conductor_cap → create M-06 (3× mixed) | motif M-06 | reason: the conductor_cap already IS built via sequenced_assembly (existing inbound weave); not a new link; REJECT
CUT   | railways conductor entity logistics M-33 (3× mixed) | motif M-33 | reason: M-33 requires PLAYER specialist labor; a deployed conductor entity doesn't constitute player-run service; 2:1 REJECT — the KEEP M-33 is framed on the player running the conductor, not the entity itself; CUT the entity-only framing
CUT   | railways locometal → aeronautics M-23 (3×) | motif M-23 | reason: duplicate of above M-23 CUT; REJECT
CUT   | railways:conductor_cap M-20 sequenced upgrade (1×) | motif M-20 | reason: conductor cap assembled on a sequenced line is already the existing inbound; not a new link; REJECT
CUT   | railways track-laying → survival config (1×) | no motif | reason: track laying is a Create production behavior; no motif; REJECT
CUT   | railways benchcart/cap → create M-06 (existing inbound, 1×) | motif M-06 | reason: already the established inbound weave; REJECT
CUT   | railways locometal → magic no-motif (1×) | no motif | reason: no thematic link; tone clash; REJECT
CUT   | railways conductor entity → aeronautics M-24 (1×) | motif M-24 | reason: the conductor is an entity/NPC, not a craftable mechanical component; M-24 routes mechanical parts into drivetrain recipes; REJECT
CUT   | railways conductor / semaphore → economy no-motif (1×) | no motif | reason: no existing motif covers "train conductor as trade intermediary" or "semaphore gates economy signal"; REJECT
CUT   | railways tracks → aeronautics M-24 bench-cart drivetrain (1×) | motif M-24 | reason: wide-gauge bench-cart as aeronautics landing-gear component is a stretch; M-24 is for genuine drivetrain/control surfaces; 1× ACCEPT with no Opus; REJECT
CUT   | railways conductor_cap → aeronautics M-24 (1×) | motif M-24 | reason: conductor cap is clothing/identity, not a mechanical drivetrain component; REJECT
CUT   | railways regional ore demand M-30 (1×) | motif M-30 | reason: "brass is regionally scarce and building rail needs a lot of locometal" is a true M-30 observation — but this is a design-level note on the brass/zinc ore side, not a railways-specific recipe weave; CUT, note for brass ore slate
CUT   | railways conductor_cap → colony M-28 (2× REJECT) | motif M-28 | reason: no colony hut type for rail operations by default; REJECT
CUT   | railways loot-seed conductor caps (1×) | motif M-34 | reason: seeding locometal salvage into derailed-train-wreck structure loot is creative but requires structure gen support (Towns & Towers); 1× only; CUT
CUT   | railways conductor M-37 research gate (1×) | motif M-37 | reason: unlocking conductor automation via colony University research — 1× only; appealing as a later add but thin; CUT
CUT   | railways tracks + locometal → aeronautics M-31 (1×) | motif M-31 | reason: duplicate of the M-31 KEEP (bulk locometal as logistics-required good is captured); this sub-row is the same; folded into KEEP
CUT   | railways high-tier track → TFMG M-29 (1×) | motif M-29 | reason: high-speed rail boiler needing TFMG steel — interesting M-29 cross-route dependency (rail engineer depends on TFMG); 1× only, no Opus; CUT for now, flag for Phase-3
CUT   | railways benchcart/track → create inbound (1×) | no motif | reason: already captured by existing Create anchor; not a new link

---

## spyglass_improvements  — LEAVE (pure client QoL / zoom enhancement; 1 candidate row, consensus REJECT, no-motif: "improved spyglass zoom aids aerial scouting from an airship, but this is atmospheric, not a designed weave"; zero item surface for recipe-routing)

---

== BATCH COMPLETE ==
