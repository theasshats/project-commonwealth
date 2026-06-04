# Phase 2 candidates — chunk-34

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — pure tooltip-display library; registers no items, no recipe types, no gameplay effect. Nothing to weave.

## drones   [anchors: aeronautics (1)]
- from: drones:ion_thruster | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion thruster is the pinnacle drone drive; building it through a sequenced assembly chain (precision mechanism + brass casing + deploy steps) makes high-end drone flight a real Create project
- from: drones:iron_rotor | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors require shaped mechanical crafting (andesite alloy frame + iron blades) — the drone upgrade path threads through the Create workshop naturally
- from: drones:pocket_drone (crafted good) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a compact personal quadcopter is exactly the kind of tech gadget a wandering merchant would pay coin for; luxury crafted goods → economy pillar
- from: drones:wood_rotor | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: wood rotor is the basic tier; the guardrail says never gate basic/everyday components behind complex crafting. The iron rotor (mid) and ion thruster (endgame) are the right targets — leave wood_rotor as vanilla crafting table.

## bookshelf   [anchors: support/library (1)]
- LEAVE — zero-content code library (Darkhax framework); no items, no recipe types, no gameplay surface. Nothing to weave.

## voicechat   [anchors: support (1)]
- LEAVE — pure network/audio infrastructure; no items, no recipe types, no gameplay mechanics. Nothing to weave.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees:dendro_potion | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dendro Potion accelerates tree growth — imbueing it with Source attunement (arcane growth catalyst) makes the Ars garden feel more potent and ties DT's tree-speed mechanic into the magic pillar naturally
- from: dynamictrees branch/log items | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: DT logs are just vanilla logs with different IDs; they already mill/crush normally downstream without a bespoke recipe. A dedicated mill recipe adds no new design surface — it's a no-op weave.
- from: dynamictrees seeds | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: seeds are everyday items; guardrail bars gating basic components behind complex infusion. Dendro Potion (mid-tier) is the correct target.
- REWORK candidate: dossier says "leave — forced Create edge contrived." The dendro_potion path above is not forced — it's a mid-tier consumable and imbuement is light one-step for mid items. Recommend the dossier's 2nd-pillar candidate section be updated from "none — leave" to note the dendro_potion→imbuement route.

## aileron   [anchors: aeronautics (1)]
- from: Elytra + Aileron enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron adds Elytra-specific enchantments (soaring, banking); applying them via the Enchanting Apparatus ties personal flight into the magic tier — a mage-flier gets better Elytra through arcane investment
- from: Elytra + Aileron enchantments | via: ars_nouveau:reactive_enchantment | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: reactive_enchantment requires Aileron's enchants to be exposed as compatible reactive targets; no evidence they are and the mechanism is complex. The simpler enchanting_apparatus route already covers the magic pillar; don't double-stack without verification.
- NOTE: feasibility caveat — the enchanting_apparatus route requires Aileron's custom enchants to be usable as enchanting_apparatus recipe outputs/inputs; needs confirming in a playtest. If blocked, this collapses to LEAVE (aeronautics anchor stands alone; behavior-only mod with no item surface otherwise).

## spawn   [anchors: survival (1)]
- from: spawn clam / crab / seafood drops | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: clam shells mill into shell dust (a gritty processing byproduct); gives the Create workshop a reason to care about the coastal critters and pulls seafood into the industrial chain
- from: spawn seafood / crab / angler_fish | via: farmersdelight:cooking (or extradelight:oven/melting_pot) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: exotic seafood dishes (angler-fish chowder, crab boil) are premium food items; selling them for coin gives fishing/coastal play an economic payoff
- from: spawn critter drops (ant_pupa, barnacle, seal drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ant pupae and barnacle chitin are the kind of strange organic material that spirit-fire transmutes into an essence; ties the critter layer into occultism without being contrived
- from: spawn:casting_net_clam output (clam variants) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: clams are pretty/color-variant decorative items but not obviously arcane material. Spirit-fire (M-11, organic→magic) is the better fit for critter drops; imbuement (M-10) is for refining/attuning toward a magic reagent — clams don't fit that frame.
- REWORK: existing inbound weaves (farmersdelight:cooking/cutting) are correct and stay. The M-12 milling candidate above adds a second downstream method without contradicting them.

## collective   [anchors: support/library (1)]
- LEAVE — pure shared-utility library (Serilum family); no items, no recipe types, no gameplay surface. Nothing to weave.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs stone/brick/andesite roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: misplaced stone-roof blocks can be salvaged back to gravel and an XP nugget in the Crushing Wheels — the standard Create deco-recycle pass; makes the 600-block palette feel like part of the material loop rather than a dead end
- from: mcwroofs terracotta roof variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: terracotta → gravel doesn't make physical sense (fired clay doesn't grind to gravel). Stone/brick/andesite are the coherent subset; terracotta and wood variants should be excluded from this pass.
- NOTE: the dossier flags this as "WEAK — low value given 600 blocks." A selective pass (stone/brick/andesite only, ~60–80 blocks) is proportionate; a whole-catalog pass would be noise.

## ars_nouveau   [anchors: magic (1)]
- from: ars_nouveau Vitalic Sourcelink (consumes mob deaths/babies) | via: native Sourcelink mechanic | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: every mob farm — from Naturalist animals to MineColonies livestock — passively charges Source; survival's organic surplus feeds the magic engine without any recipe, making the two pillars feel co-dependent
- from: foreign essences (lapis, amethyst, nether quartz) | via: ars_nouveau:imbuement | to: magic-internal (M-01 hub) | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: this IS the reserved M-01 spine — foreign gems → source_gem is the magic currency hub; keep and strengthen it with explicit cross-pack reagent routes (e.g., galosphere palladium dust → imbuement → arcane alloy)
- from: ars_nouveau:archwood_log | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: archwood logs mill into an arcane sawdust byproduct (or arcane resin) — a small but satisfying reason to run Ars lumber through the Create mill, and a passive arcane material stream for players already milling wood
- from: ars_nouveau:source_gem | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier itself flags this as WEAK — better to leave economy to dedicated arcane-currency weaves; source_gem is already the M-01 reserved hub and double-spending it as a coin good dilutes its role. Reject.
- from: ars_nouveau spell scrolls / glyphs | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a crafted spell scroll is a genuine luxury good — knowing a glyph took research and Source investment, selling it for coin bridges magic into the economy pillar without touching the source_gem hub
- from: ars_nouveau:drygmy_charm passive mob-drop collection | via: ars_nouveau:summon_ritual | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Drygmy farms automate mob drops (feathers, bones, leather) from a pen of live mobs — mob-drop reagent sink (M-02) running through a native ritual method; ties organic survival into the magic layer
- REWORK: dossier anchor is magic (1) only — all candidates above aim to earn survival, economy, and Create as second pillars. The Vitalic Sourcelink / Drygmy routes earn survival; archwood milling earns Create; spell scrolls earn economy. Multiple second pillars are achievable here.

== CHUNK COMPLETE ==
