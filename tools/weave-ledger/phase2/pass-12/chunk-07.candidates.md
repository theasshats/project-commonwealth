# Phase 2 candidates — chunk-07 (pass-12, context-fed)

## oceansdelight   [anchors: survival (1)]

Existing coverage: M-09 (elder_guardian_roll / fugu_slice → numismatics sell) ACCEPT at 7×/2×; M-12 (cut_tentacles / guardian drops → farmersdelight:cutting → processing chain) REJECT at 6×/3×.

The M-12 REJECT is well-grounded: tentacles→create:cutting as a standalone weave is an awkward extra step. The existing ACCEPT rows (M-09) cover the end-state sufficiently.

NEW: from: oceansdelight:fugu_slice (poison-risk delicacy) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — fugu is explicitly a toxicity item, not generic food; transmuting it into a venom/poison reagent (not soul content) is coherent where transmuting ordinary seafood would not be | verdict: ACCEPT | hook: the mage sources fugu not to eat it but for its paralytic extract; the chef and the alchemist share the same fish

CHALLENGE: all existing rows treat oceansdelight as purely output-facing (its dishes sell or transmute). None note that it is also the natural *intake sink* for all fishing-mod catches (tide, spawn, createfisheryindustry) since it accepts any raw fish item. The M-12 REJECT is correct as a new recipe edge, but the design note should flag: oceansdelight's `farmersdelight:cutting` (already in made-by) is the processing step — the weave is real, just operational rather than a new KubeJS recipe. Flag for DESIGN.md, not a new candidate row.

## formations   [anchors: survival (1)]

Existing coverage: formationsnether has a 2× M-09 REJECT row; formations (overworld) has no rows at all.

- LEAVE — worldgen scatter-structure mod with no items (1 item: template_editor tool, dev use only), no loot tables, no recipe-type methods. No coherent recipe edge exists. Any weave would be forced. The dossier's own conclusion is correct: its indirect value (biome variety → other mods' content rides on it) is real but is not a bilateral weave.

## create_new_age   [anchors: Create (1)]

Existing coverage: M-08 (thorium ore → create:crushing → numismatics mint) ACCEPT at 11×; M-17 (energising + FE → magic bridge) ACCEPT at 9×/2×; M-24 (motors/coils → aeronautics drivetrain) ACCEPT at 3×/2×/1×; M-11 (corium → occultism:spirit_fire) REJECT at 5×.

Strong convergence on M-08, M-17, M-24. The M-11 corium REJECT is consistent (radioactive waste → spirit fire tone clash). What's missing:

NEW: from: create_new_age:solid_corium (reactor waste byproduct — the solid form, not the liquid corium) | via: create:haunting (Create's soul-fire transmutation — M-19) | to: Create (depth) | motif: M-19 | power: endgame | tone: ok — corium is a glowing, dangerous reactor waste; haunting it through soul-fire to produce a transformed material reads as industrial-meets-soul alchemy (parallel to how nether waste becomes something useful), different from the spirit_fire M-11 REJECT which was magic-themed | verdict: ACCEPT | hook: the reactor produces waste; the soul furnace makes it useful — endgame Create loop, not a magic side-trip

CHALLENGE: The M-24 rows (motors/coils → aeronautics drivetrain) at 3×/2×/1× are accepted but none specify *which* motor tier. The advanced_motor is clearly endgame; the basic_motor is everyday. Accepting "motors" without tiering risks gating basic aeronautics behind a deep Create-electrical chain. The accepted rows should specify: basic_motor → light drivetrain (one crafting step), advanced_motor → heavy drivetrain (sequenced chain). Propose the merge annotate power tiers when authoring.

NEW: from: create_new_age:stirling_engine (the steam-to-FE conversion block, mid-tier) | via: create_new_age:energising (as a gate — the Stirling engine can power the Energiser, making the electrical path self-bootstrapping) | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the Stirling bootstraps the Energiser; a player realizes they can power electricity from a boiler without a reactor — a mid-game onramp that existing rows ignore entirely because they focus on the nuclear/motor endpoints

## terralith   [anchors: survival (1)]

Existing coverage: none — no rows in CANDIDATES.md for `terralith`.

- LEAVE — data-only worldgen overhaul, no items, no blocks, no recipe types. Its 65 c:tags are biome-classification tags, not material tags. The pack's scarcity design (regional ores, biome-locked content) *rides on* Terralith's biomes, but that is not a bilateral weave — it is Terralith providing the terrain other mods' biome-modifiers key off of. No forced recipe edge is coherent. The dossier's own conclusion stands.

## modulargolems   [anchors: Create (1)]

Existing coverage: M-02 (golem assembly gated on boss/mob-drop metals) ACCEPT at 3×; M-10 (Ars/Occultism material into golem-core upgrade slot) ACCEPT at 4×/2×; M-15 (boss-drop metal gate for endgame golem bodies) ACCEPT at 2×; M-06 (sequenced_assembly for all tiers) REJECT at 2×.

The M-06 REJECT is well-reasoned (Create already in the dossier as made-by; sequenced_assembly for *all* tiers would over-gate basics). What's missing:

NEW: from: modulargolems golem upgrade slot items (add_1_slot, add_100_slot) | via: occultism:crystallize (Occultism's crystallization method — produces crystallized forms of materials) | to: magic | motif: M-10 | power: mid | tone: ok — a slot upgrade is an abstract "capacity expansion"; crystallizing a magic material into the slot token reads as enchanting a vessel to hold more power | verdict: ACCEPT | hook: the golemancer asks the occultist to crystallize extra capacity into the golem's chassis — the arcane infusion makes the mechanical body more receptive

CHALLENGE: The accepted M-10 rows (Ars source_gem / Occultism otherstone into golem_assemble) at 2× each are accepted but the REJECT at 2× says "ars_nouveau:imbuement / occultism:* — no coherent output". The tension is: *which specific golem part* does the infusion modify? The accepted rows that survive red-team should require a specific part (e.g., the core/chassis, not every part). A blanket "source_gem into golem_assemble" is vague. Proposal: narrow to the core slot only — `ars_nouveau:imbuement` on the golem workbench's core component (a blank golem body before metal assignment), not all assembly steps.

NEW: from: modulargolems golem (assembled entity with combat drops from mobs it kills) | via: occultism:miner spirit logistics — a golem assigned to an area effectively functions as an automatic resource-gatherer; route the output through occultism:spirit_trade to trade gathered materials | to: magic | motif: M-18 | power: mid | tone: ok — golems as physical-world counterpart to summoned-spirit logistics; the automation theme bridges Create (golem built via Create) with Occultism (spirit logistics) | verdict: ACCEPT | hook: the Create engineer builds the golem body; the occultist routes its output into the spirit trade network — two automation systems sharing a supply line

## alexsmobs   [anchors: survival (1)]

Existing coverage: Deep — M-11 (bear_dust/ender_residue/void_worm parts → occultism:spirit_fire) multiple ACCEPTs; M-10 (ambergris/ender_residue → ars_nouveau:imbuement) multiple ACCEPTs; M-02 (mob-drop reagent sink) multiple ACCEPTs; M-03 (bones/shells/dust → create:crushing) ACCEPT; M-14/M-09 (rare drops → numismatics) ACCEPTs and REJECTs mixed; M-15 (void_worm_beak → complex Create recipe gate) ACCEPT 3×.

The convergence is strong. What's genuinely missing:

NEW: from: alexsmobs:terrapin_shell (tortoise/terrapin drop — a durable carapace, mid-tier) | via: create:pressing (pressing the shell into a curved plate) → used as a component in a Create or immersive_armors recipe | to: Create | motif: M-03 | power: mid | tone: ok — a shell is literally a natural armor plate; pressing it mirrors how metal plates are made; the connection is physical/thematic | verdict: ACCEPT | hook: the Create engineer presses the terrapin's shell into a curved armor plate — the same machine that makes iron sheets makes natural ones

NEW: from: alexsmobs:mimicream (mimic drop — sticky adhesive substance) | via: create:mixing (mixing mimicream into an adhesive slurry for sealing aeronautics hull joints or a gasket material) | to: aeronautics | motif: M-23 | power: mid | tone: ok — mimicream is literally a shape-changing adhesive; using it to seal structural joints in an airframe is coherent; no existing row touches aeronautics for alexsmobs | verdict: ACCEPT | hook: the mimic's shape-shifting slime turns out to be the best hull sealant money can't buy — unless you hunt mimics

CHALLENGE: The M-15 void_worm_beak gate (3× ACCEPT, Opus ✓) is well-converged but no existing row specifies *what* it gates. The design note says "complex Create/tech recipe" without naming the target. For authoring, the beak should gate something mid-Create-tech (not endgame nuclear, which has its own boss-gates) — a reasonable candidate: a Create precision chassis component or the modulargolems endgame golem body. Flag for Gate-1 target assignment.

## mowziesmobs   [anchors: survival (1)]

Existing coverage: M-15 (ice_crystal → create:sequenced_assembly keystone) ACCEPT 6×/5×; M-06 (earthrend_gauntlet → sequenced_assembly) ACCEPT 3×; M-22 (elokosa_paw lunar phases → magic) ACCEPT 4×; M-10 (sol_visage → ars_nouveau:imbuement) ACCEPT 3×; M-11 (earthrend_gauntlet/wrought → occultism:spirit_fire) ACCEPT 2×; M-14 (boss bounty) REJECT 6×/2×.

Convergence is solid on M-15 (ice_crystal) and M-06 (earthrend_gauntlet). What's missing:

NEW: from: mowziesmobs:captured_grottol (the rare ore-eating mob, capturable) | via: modulargolems:golem_assemble — a captured Grottol is a living ore-processor; route it as a golem *upgrade part* that gives an ore-sensing or ore-eating ability to a golem | to: Create (depth via modulargolems weave) | motif: M-02 | power: endgame | tone: ok — Grottol is already a cross-mod curiosity (drops diamonds when killed); making it a living component of a golem adds a naturalist-industrial seam that no existing row covers | verdict: ACCEPT | hook: the golem engineer mounts a caged Grottol to a mining golem chassis — now it eats ore blocks and the golem harvests them

CHALLENGE: The M-15/M-06 convergence (ice_crystal gates sequenced_assembly) is ACCEPT at 6×/5× but both motifs are used simultaneously in some rows. M-15 is "boss drop as gate item" and M-06 is "sequenced assembly keystone" — they're compatible but different. The authoring should pick one primary motif per weave: ice_crystal as the M-15 gate material *feeding into* an M-06 sequenced chain is the right framing, not two separate weaves. Flag: don't double-count pillars from one recipe chain.

NEW: from: mowziesmobs:blowgun + dart (mid-tier ranged, unique mechanics) | via: create:mechanical_crafting (gate the blowgun on a Create-pressed tube component — a thin copper tube pressed into shape) | to: Create | motif: M-05 | power: mid | tone: ok — a blowgun is literally a precision tube; Create pressing copper into a thin barrel is exactly the right machine | verdict: ACCEPT | hook: the metalworker presses a copper tube that the jungle warrior turns into a blowgun — cross-specialty crafting chain

## create_ultimate_factory   [anchors: Create (1)]

Existing coverage: none — no rows in CANDIDATES.md for `create_ultimate_factory`.

- LEAVE — pure recipe datapack with no items or blocks of its own. It deepens the Create pillar (all its recipes route through Create machines). No bilateral weave is possible: there is no material to route through a foreign method, and no method of its own for other mods to feed into. Its second-pillar candidacy is genuinely zero. The dossier's conclusion is correct.

NOTE (not a candidate row): create_ultimate_factory's diamond-from-coal-block recipe may conflict with the pack's scarcity design (diamonds should be scarce, not factory-synthesizable). Flag for pack-design review — not a weave issue but a recipe-conflict issue.

## immersive_armors   [anchors: survival (1)]

Existing coverage: M-05 (Heavy/Steampunk → create:pressing + mechanical_crafting) ACCEPT at 10×/2×; M-10 (Divine → ars_nouveau:enchanting_apparatus) ACCEPT at 9×; M-09 (finished sets → numismatics sell) REJECT at 4×/2×; M-05 (Bone/Bone tier → create pressing) REJECT at 2×.

Strong convergence. What's missing:

NEW: from: immersive_armors:prismarine_chestplate set (the Prismarine set — grants spike retaliation + Depth Strider) | via: create_new_age:energising (energise a prismarine plate to make it conduct electricity for the spike retaliation effect, using the electrical spine) | to: Create (depth) | motif: M-17 | power: mid | tone: ok — the Prismarine set's spike-retaliation ability is already electrical in flavor; channeling Create electricity through it to activate the set bonus is coherent; no existing row ties the Prismarine set specifically to the electrical/CNA layer | verdict: ACCEPT | hook: the armor smith asks the electrical engineer to charge the prismarine plate — the spikes need power to arc

CHALLENGE: The M-05 REJECT for Bone tier (2×) argued "over-gating basic armor behind Create". This is correct. But the accepted M-05 rows for Heavy/Steampunk also need a tier-check: Heavy is iron-block-based and already mid-game; gating it on create:pressing for metal plates is proportionate. Steampunk is flavor-first (cogs/pistons in the design) and *invites* a Create gate visually. The authoring should confirm: press gate for Heavy (proportionate), mechanical_crafting for Steampunk (thematic). Bone → no gate (everyday). Divine → enchanting_apparatus (M-10, not M-05). This nuance is missing from the accepted rows.

NEW: from: immersive_armors:slime_chestplate set (the Slime set — mobility/knockback resistance) | via: dndesires:hydraulic_compacting (hydraulically compact slime into high-density slime plate — the same process that makes rubber) | to: Create (depth via dndesires method) | motif: M-05 | power: mid | tone: ok — slime compacted under hydraulic pressure becomes a dense shock-absorbing plate; the dndesires method is thematically fitting | verdict: ACCEPT | hook: the slimy armor needs hydraulically compressed slime — not raw slime blocks, a processed slab of it

## trek-b0.6.1.1   [anchors: survival (1)]

Existing coverage: none — no rows in CANDIDATES.md for `trek-b0.6.1.1`.

- LEAVE — structure-only worldgen datapack with no items, no blocks, no recipe types; `loot=yes` means its chests have loot tables (configurable) but these are a *data edit* opportunity, not a mod weave. Any meaningful connection is through a loot-table injection (seed Create components / numismatics coins into exploration chests), which is a pack-data task, not a bilateral recipe edge between two mods. No forced candidate. The dossier's conclusion is correct.

NOTE: trek has `loot=yes` — this is the cleanest opportunity in the pack to seed early M-08 coins and M-02 reagents into exploration chest loot tables without mod weaving. Flag for the economy / exploration data pass.

== CHUNK COMPLETE ==
