# Phase 2 candidates — chunk-18

## mcwfences   [anchors: support/decoration (1)]

Power-read: 180 fence/wall/gate variants. The vast majority are wood or stone — everyday deco. Metal fences (iron, and any alloy variants) are the only items with a plausible processing hook. Hedge variants are leaf-based greenery with no processing surface.

Method-pull: `create:crushing` is the established M-04 method for deco metals. Metal fences crush lossy to nuggets + xp nugget — a minor but coherent re-integration that puts them inside the Create web without forcing anything on wood or stone variants.

- from: mcwfences:*_metal_fence variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok — industrial recycling of metal fencing is natural, identical logic to other metal deco mods | verdict: ACCEPT | hook: a wrought-iron fence salvaged in the crusher yields nuggets — lossier than crafting, but useful when you over-built
- from: mcwfences:*_wood_fence/stockade/picket variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: clash — crush-recycling wood fences is arbitrary (vanilla planks/sticks already cheap; no meaningful loop closure) | verdict: REJECT | reason: no loop value, forced edge; deco wood dossier says "wholesale deco-family pass only" — not worth this pass
- from: mcwfences:*_hedge (leaf deco) | via: any processing method | to: any | motif: no-motif | power: everyday | tone: clash — leaf hedges have no useful output in any method | verdict: REJECT | reason: no coherent method-pull, no motif match; leaf blocks yield nothing meaningful

REWORK: single decoration anchor is the sanctioned floor per CLAUDE.md ("one is the floor"); M-04 on metal variants is the obvious second hook when the deco-family pass runs. No existing connections to rework — it has 1 anchor only.

---

## bettermineshafts   [anchors: survival (1)]

Power-read: pure structural/worldgen overhaul — no items, no blocks, no loot tables of its own (loot=no, uses vanilla mineshaft loot). Zero item/block registry.

Method-pull: nothing to route. No items to process, no loot to seed (it delegates to vanilla loot). The pack's scarcity loop benefits from richer mine layouts, but there is no weave hook — the mod is a worldgen feel upgrade that indirectly supports the pressure anchor.

- LEAVE — zero item/block/loot surface; structural worldgen only; no coherent weave hook available (delegates to vanilla mineshaft loot, no new loot tables to seed)

---

## invtweaksemuforipn   [anchors: support/client QoL (1)]

Power-read: pure client-side compat shim — 0 items, 0 blocks, no recipe types. Emulates InvTweaks keybinds over IPN. No gameplay output.

- LEAVE — pure client-side API/compat glue; zero item/block/loot surface; genuine zero-content behavior mod

---

## kleeslabs   [anchors: support/QoL (1)]

Power-read: behavior-only QoL — breaking one half of a double slab by look direction. Zero items registered, zero recipe types. No outputs.

- LEAVE — behavior-only; zero item/block/loot surface; nothing to weave

---

## ars_n_spells   [anchors: magic (1)]

Power-read: 0 items, 0 blocks, 0 recipe types. The mod's entire surface is the Ars↔Iron's mana unification and cross-cast ritual — an internal magic↔magic weave already. No foreign-material I/O.

Method-pull: the join surface is mana/spell data, not items. There is no material this chunk can route through another method. Forcing an item edge (e.g. "use a specific ingredient in the two-tablet ritual") would require inventing a recipe the mod's datapack doesn't currently expose to KubeJS in a clean way, and the dossier confirms no recipe type is registered.

- LEAVE — internal magic↔magic connective tissue with no item/material surface; already performs a weave between two magic systems; no foreign-system hook available without fabricating one

---

## ctl   [anchors: Create, aeronautics (2)]

Already at 2-anchor goal (Create via sequenced_assembly + aeronautics as train/contraption lighting). Dossier confirms.

REWORK check: Create anchor is solid (sequenced_assembly is a real recipe dependency). Aeronautics anchor is solid (the mod's *purpose* is train/contraption lamp management — direction-aware head/tail switching). Both anchors are organic and non-forced. loot=yes flagged in digest — 18 blocks, 20 items, but the loot is just normal item drops, not a weave hook.

Possible 3rd link exploration: ctl lamps use Create parts; could they need a magic-sourced luminescent material for glow variants? Red-team: glowing train lights having a magic-reagent input is tonally awkward (industrial vs. arcane), and forced — the existing Create route already provides the light. Reject.

- from: ctl:htlb_block / ctl:ilb_block glow variants (if any) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash — industrial locomotive lighting and arcane infusion are a tonal mismatch; a player asking "why do I need source gems to make a train lamp?" has no intuitive answer | verdict: REJECT | reason: tonal clash; the Create-spine route is sufficient; forced magic gate on utilitarian transport gear

OK — connections sound (Create + aeronautics are both clean, organic, non-forced)

---

## smokeleafindustries   [anchors: survival (1)]

Power-read: 62 blocks, 243 items, 12 registered recipe methods. Self-contained FE-powered processing chain. Ships a generator, grinder, extractor, liquifier, synthesizer, mutator, drying rack/dryer. Outputs: strain buds, extracts, gummies, joints/blunts (effect consumables), hemp building blocks, strain seeds. Dealer/Stoner villager trades in plains villages (NPC trade, not player economy). FE energy network (could bridge to Create via createaddition).

Dossier candidate 1 — economy via dealer/stoner trades (M-09): **REJECT** — M-09 retired; NPC trade is not a player-run economy weave.

Candidate 2 — createaddition FE↔kinetic (M-05 or M-17): SLI's generator outputs FE. Create Addition's `createaddition:charging` and `createaddition:liquid_burning` are on the methods palette. Routing Create rotation INTO the SLI machines (or using SLI's FE output to charge Create tools) threads the industrial hemp farm into the Create spine. Power-read: SLI machines are mid-tier (an FE network is established tech, not endgame). Tone: industrial hemp processing powered by a Create water wheel / steam engine is a natural fit — both are "factory farm" aesthetics. Red-team: SLI has its own generator so players don't *need* Create power, weakening the dependency. Counter: as a pack, we can configure / recipe-gate so the Create-powered path is more efficient, making integration incentive-based rather than forced. This is M-05 (native-method gating) — SLI machines built requiring a Create rotational interface input or gated behind a Create part.

- from: smokeleafindustries machines (grinder/extractor/liquifier/synthesizer) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-05 | power: mid | tone: ok — an industrial hemp factory running off Create rotational power is thematically coherent; the same power train runs mills and presses | verdict: ACCEPT | hook: wire a Create rotational dynamo into the SLI extractor — the hemp farm stops being an FE island and joins the production spine

Candidate 3 — create:milling/crushing on raw hemp/buds (M-12): route raw hemp plant through Create milling as an alternate processing step (e.g., milled hemp → fibers/seeds at higher yield). Power-read: raw hemp crop is everyday material. Tone: Create milling grain/crops is standard M-12 territory. Red-team: SLI already has its own grinder for buds; a parallel Create path is redundant and splits the recipe graph without adding loop value. The yield difference doesn't gate anything meaningful — the SLI machines are still needed for the full extract→gummy chain. Reject on redundancy/no loop advance.

- from: smokeleafindustries:hemp_crop / raw buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: SLI already has its own grinder for this step; parallel Create path is redundant, splits recipe graph without gating anything or advancing the loop; M-05 FE bridge is the stronger link

Candidate 4 — M-26 consumption sink: SLI gummies/joints/blunts grant status effects when consumed — they ARE consumed against pressure (combat buffs, regen, speed for logistics players). This is already the ambient loop endpoint (survival pressure drives the farm). As a motif it's M-26 (consumption sink) — the effect-consumables are spent, demand doesn't zero out. Tone: perfect fit. Red-team: is this a "new weave" or just the mod's native use? It IS the native use, but it binds survival↔production explicitly. Accept as a genuine second anchor link.

- from: smokeleafindustries:*_gummy / *_joint / *_blunt (effect consumables) | via: direct consumption | to: survival | motif: M-26 | power: everyday | tone: ok — status-effect consumables are spent against the pressure anchor (combat, exploration, logistics runs); demand is continuous | verdict: ACCEPT | hook: a combat-run player stocks gummies for the buff; the farm runs continuously because effects expire and stocks deplete

Candidate 5 — M-29 cross-route dependency: Could a SLI extract be required as a solvent/reagent in a Create mixing recipe (e.g., SLI hemp oil as a lubricant input for TFMG or Create mixing)? Power-read: hemp oil/extract is mid-tier (requires the extract chain). Tone: hemp-derived industrial solvent feeding a Create mixing process is plausible. Red-team: this is artificially thin — the pack already has TFMG lubricant for machine oiling; adding a hemp oil cross-route is a forced edge that doesn't gate a real demand. The hemp extract has no natural "of course" reason to end up in a metalworking process. Reject.

- from: smokeleafindustries:*_extract (hemp oil) | via: create:mixing | to: Create | motif: M-29 | power: mid | tone: clash — hemp extract as industrial solvent in a Create process is a stretch; no "of course" player intuition; TFMG already covers the lubricant/solvent slot | verdict: REJECT | reason: forced cross-route; no natural thematic pull; TFMG lubricant covers the niche

REWORK: dossier flagged M-09 "STRONG" — that's retired. The FE↔kinetic (M-05) and M-26 consumption candidates replace it correctly.

---

## immersive_paintings   [anchors: support/decoration (1)]

Power-read: 4 items (painting/glow_painting/graffiti/glow_graffiti), 0 blocks registered, 0 recipe types. Client-side painting GUI — images pixelated into canvas items. Consumes vanilla materials. No processing surface.

Method-pull: The 4 items are the entire output. Could a glow_painting need a magic luminescent input (e.g. glowstone/source gem)? Red-team: the glow painting's glow comes from a client rendering flag, not a functional material — injecting a magic ingredient would be purely decorative cost with no loop function. No loop node advances. Could frames go through Create?  Same issue — busywork gate on a decoration item.

Dossier already concludes LEAVE and the reasoning is sound. The mod is a player-expression canvas tool; its integration value is aesthetic, not systemic.

- LEAVE — pure decorative-expression mod; 4 items with no processing/loop surface; forcing a Create or magic gate on painting frames would be busywork with no loop advancement

---

## prickle   [anchors: support/library (1)]

Power-read: 0 items, 0 blocks, 0 recipe types. Config-format library (Prickle JSON). No gameplay surface.

- LEAVE — genuine zero-content config library; no items, no blocks, no loot; nothing to weave

---

== CHUNK COMPLETE ==
