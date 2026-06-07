# Phase 2 candidates — chunk-18

## endrem   [anchors: survival (1)]

Power-read: 16 themed eyes — everyday progression items collectively (you need 12/16 to open the End, so most are mid-tier "progress tokens", not bulk material). The mod is exploration-gated by design; any craft route must stay costly and thematically grounded.

Method-pull: the eyes are thematic reagents (undead, nether, guardian, corrupted, magical…) that cry out for a magic-method sink. Occultism `spirit_fire` transmutes drops to spirit/essence outputs (M-11); Ars `imbuement` (M-10) refines foreign material into magic reagents. A handful of the rarer eyes could be produced via those methods from appropriately themed drops — keeping exploration primary while removing "stuck because the loot never dropped" dead-ends.

Red-team (magic route): could trivialize exploration? Only if the recipe is cheap. At mid-tier cost (endgame mob drops + a source gem + a high-level ritual), the craft route is an expensive fallback, not a shortcut — a player who can run a wither ritual already cleared a lot of content. Theme fits: "corrupted/undead/magical eye" transmuted from themed drops is completely sensible.

Red-team (Create route, M-06 sequenced assembly): the dossier already flags this as WEAK — the whole point of endrem is exploration. Making an eye via a sequenced chain risks trivializing the portal gate. Keep at most one low-tier eye (e.g. `endrem:old_eye` or a generic starter type) as a sequenced fallback, but this is marginal and the motif applies poorly (M-06 is for endgame tech keystones, not exploration-progression tokens). Reject.

- from: endrem:undead_eye / endrem:corrupted_eye / endrem:nether_eye (themed eyes) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic-user who can summon a Wither ritual can transmute the undead eye from Wither skeleton trophies — an expensive last-resort path, not a loot shortcut
- from: endrem:magical_eye / endrem:cryptic_eye (arcane-flavored eyes) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane infusion of source gems + a rare ender-adjacent reagent producing a magical eye — the magic player's alternate route to unlocking the End
- from: endrem:* (generic eye → Create sequenced assembly) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: clash | verdict: REJECT | reason: M-06 is the endgame-tech keystone motif; making End-portal-key eyes via a factory chain undercuts the exploration intent; theme clash (factory output for a mystical portal key reads wrong)

REWORK: none — single existing anchor (survival) is solid and appropriate.

---

## create_central_kitchen   [anchors: Create, survival (2)]

Power-read: an automation/integration layer — zero items of its own, zero registered recipe-types. It *is* the Create↔food bridge; its "outputs" are the automated versions of FarmersDelight/ExtraDelight dishes. Already at 2 anchors.

Method-pull: the dossier notes a weak M-09 economy edge (luxury dish → coin). Under the economy de-emphasis rule, a bare "finished dish is sellable" link is non-distinctive and saturated. The only distinctive economy angle would be if the automated feast/dish were a *specific, gated trade good* feeding a loop-closing sink (e.g. a bountiful Decree objective targeting an automated feast) — but that lives on Bountiful's side, not here. No new anchor needed here.

REWORK: OK — Create + survival is the right pair. The dossier's own "Optional 3rd: economy, WEAK" note is correct; leave it there.

- from: (no material surface — integration layer only) | verdict: REJECT | reason: no items/recipe-types registered; any new link would attach to foreign mods' content, not this mod's. Economy sell-link (M-09) is generic-sellable, non-distinctive — economy de-emphasis.

OK — connections sound.

---

## bountiful   [anchors: economy (1)]

Power-read: the Bountiful board is a configurable economy *faucet* — it pays out whatever the operator configures. Its unique structural value is as a **universal demand node**: it can REQUEST any item and pay Numismatics coin. That's M-14 (bounty→drop economy) by direct design. The board already sits in economy; the 2nd anchor needs to come from what the board *consumes* (i.e., what objectives pull from other pillars).

Method-pull for 2nd anchor:
- Survival leg: configure Decree objective pools to require Serene Seasons–locked seasonal crops (winter-only wheat variants, autumn fruit) — the bounty board creates genuine pressure on the survival pillar and makes seasonal food production economically rewarded. This is not a recipe-weave but a config/data delivery (Decree datapack customization). Motif: M-16 seasonal reagent — a seasonal ingredient is the required objective item; the bounty board is the consumer. Tone: a job board asking for winter crops when it's winter is perfectly sensible.
- Create leg: configure mid/high-tier Decree pools to request Create-processed outputs (brass ingot, precision mechanism, polished rose quartz) — turning Create surplus into coin. M-08 (coin from processed scarcity) applies — the processed material flows into the bounty→coin chain. Delivery: Decree pool datapack.
- Economy (M-14 explicit): wire the reward items to Numismatics coin denominations. This is the primary 2nd anchor — survival+economy pairing via the board's seasonal crop objectives is the distinctive weave.

Red-team survival/seasonal leg: does making bounties seasonal-crop-gated add friction, or genuine play? On a small co-op server where one player specializes in farming, a seasonal bounty is a strong incentive to actually grow seasonal crops. Survives red-team.
Red-team Create leg: "bring me a precision mechanism for coin" — is this more than generic-sellable? Yes — it's specifically creating demand pressure on Create-production during a specific in-game time period and tying two otherwise-parallel pillars. Survives, though the M-08 link is moderate in distinctiveness.

- from: seasonal crop objectives (bountiful:decree pool seeded with Serene-Seasons crops) | via: config/Decree datapack | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: a board asking for winter wheat when it's winter pulls the farming specialist out of their greenhouse — bounty board as seasonal demand driver
- from: Create-processed objective (bountiful:decree pool seeded with brass/precision-mechanism) | via: config/Decree datapack | to: Create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a high-tier bounty Decree requesting precision mechanisms for coin — indirect demand pressure bridging the Create workshop to the economy
- from: bounty payout → numismatics:cog/spur coin | via: config/reward pool | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty board pays Numismatics coin — the pack's explicit faucet for the economy pillar
- from: generic "any item is sellable" via bounty | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; only the specifically structured Decree-based links above are distinctive

REWORK: existing economy anchor is correct and load-bearing. No rework needed — the new links add survival and Create as 2nd/3rd anchors via Decree pool data, making this 3-pillar.

---

## create_integrated_farming   [anchors: Create, survival (2)]

Power-read: roosts and nets produce organic bulk (eggs, feathers, meat, fish) passively. Everyday-tier material. Already 2 anchors (Create + survival). The dossier correctly identifies M-09 economy as WEAK.

Method-pull for potential 3rd anchor: Under economy de-emphasis, steady roost/net product → coin is non-distinctive (any farm output is generically sellable). Is there a magic or aeronautics angle?

- Aeronautics: roost products (feathers in bulk) could be a required material for Aeronautics lightweight structural elements — feathers/down for cushioning or light insulation on airframe components. But feathers already have vanilla uses and this feels forced — the aeronautics airframe (M-23) calls for structural alloy/metal, not biological product. Reject on theme-clash.
- Magic (M-02): roost outputs like feathers/eggs are common enough that making them a magic reagent is weak signal. However, lava fishing net outputs (rare aquatic drops from lava — might yield magma cream, blaze powder analogs) could feed a magic ritual (M-11) if the lava net catches anything arcane-adjacent. But without confirmed lava-specific drops, this is speculative.
- The roost/net produce goods consumed by create_central_kitchen's automated kitchen → which feeds the food loop → which feeds survival pressure. The link is already captured by the existing Create+survival dual anchor.

Conclusion: already well-woven at 2 anchors; no distinctive 3rd anchor without forcing.

- from: lava_fishing_net outputs (potential blaze-adjacent drops) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: speculative — lava net's actual drop table is unverified; if it yields blaze powder/magma cream the M-11 link could be revisited, but proposing it now risks a loot-table assumption that doesn't hold
- from: roost feathers/eggs → economy coin | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; any bulk farm output is trivially sellable

OK — connections sound. Already Create + survival; no forced 3rd anchor warranted without verified lava-net drops.

---

## createaddoncompatibility   [anchors: support/library (1)]

Zero blocks, zero items. Pure Almost Unified tag/priority glue. The briefing says: if a mod genuinely has no content surface (a pure code library), write LEAVE.

LEAVE — pure support/compat layer (no items, no recipe-types, no loot tables, no material surface to weave through). Caution note preserved: verify it never mis-merges galosphere palladium under c:ingots/silver (per CLAUDE.md).

---

## create_hypertube   [anchors: Create, aeronautics (2)]

Power-read: the hypertube entrance/accelerator are mid-tier items (made via create:sequenced_assembly). The mod already has an inbound weave (sequenced_assembly) and 2 anchors. Tube blocks are infrastructure; they don't produce material.

Method-pull: transport mechanic — moves players/entities, not items. No material output. The aeronautics arm is the logistics arm of economy. Could hypertube infrastructure *serve* the economy pillar by connecting trading nodes (colonies, Bountiful boards, player shops)? That's a gameplay/design argument, not a recipe-weave — it doesn't add a recipe-type link.

The dossier says "No coherent further weave — leave." Agreeing: no material to route, no loot table, no recipe surface beyond its existing inbound sequenced_assembly.

OK — connections sound. Already Create + aeronautics/logistics. No 3rd anchor possible without forcing.

---

## createpickywheels   [anchors: Create (1)]

Zero blocks, zero items. Pure behavioral patch on Create generators (water wheel biome-gating, windmill air-circulation check). No material surface, no loot, no recipe-types.

The dossier notes a survival flavor argument: "biome-gated power makes the world push back." This is a real gameplay effect, but it's not a recipe-weave — it's a config/behavior tie. Is it enough to call survival a 2nd anchor?

Power-read: yes — a mod that forces players to site their water wheel in a River biome and their windmill in open Overworld air is functionally a survival pressure mod (world geography restricts Create infrastructure, just as Serene Seasons restricts crops). The effect is purely behavioral, delivery = config, but the anchor is real.

Motif: no existing motif covers "biome-gating a Create generator as survival pressure." M-16 (seasonal reagent) is the closest — it's about world-state gating a method — but M-16 specifically covers seasonal crops feeding a machine, not biome-gating a power source. No direct motif match.

Decision: this is a behavior-only mod (no items, no recipe surface). The survival link is genuine but it's architectural (world forces placement), not a material weave. The briefing says for non-recipe mechanics "worldgen/spawn or event gating … valid; name the mechanism." The connection here is "biome-gate on Create generators acts as survival pressure" — valid as an anchor acknowledgement even without a recipe, but since there's no Phase-3 action (no recipe to author, no datapack to write), this is more of an "anchor note" than a candidate weave.

- from: create:water_wheel / windmill (biome-gated power) | via: config (biome/open-air requirements) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the biome-gating is a real survival pressure but there's no matching motif (M-16 is seasonal-crop→machine, not biome-gate on a generator); no Phase-3 recipe/datapack action follows; log the anchor acknowledgment but no weave candidate

LEAVE — behavior/config-only mod (no items, no recipe-types, no loot); the survival-pressure effect is real but carries no Phase-3 authoring action and fits no motif. Recommend noting survival as a de facto 2nd anchor in the dossier, but no weave entry needed.

---

## create_sa   [anchors: Create, aeronautics (2)]

Power-read: mid-to-endgame gear (brass/andesite sets, jetpacks, exoskeleton, drones). Already deeply woven into Create methods (compacting, crushing, filling, haunting, mechanical_crafting, mixing, sequenced_assembly). 2 anchors already.

Method-pull for potential 3rd: the dossier notes "blazing tools could route blaze through a magic infusion, but Create+aeronautics is sufficient — leave." Let me check this more carefully.

The blazing tool line (blazing_pickaxe, blazing_axe, blazing_cleaver, blazing_shovel) consumes blaze for fire effects. `create:haunting` (M-19 soul/haunting seam) is already in the existing inbound methods — so haunting is already used. The blaze-magic angle: Iron's Spellbooks has a fire/blaze scroll line; could the blazing tools be made via Ars imbuement or iron's cauldron with a fire-source input? Tone: a flamethrower and blazing pickaxe taking a magic infusion step to unlock their true fire potential is sensible.

Power-read on magic link: the blazing tools are mid-tier (not endgame). M-10 (arcane infusion pull) says "do not gate basic components behind infusion" — blazing tools are not basic; they're a named mid-tier line. An imbuement step applying the "blaze charge" is appropriate in depth. Thematically it works: the fire essence binds to the tool through infusion.

Red-team: does adding a magic step to Create gear conflict with the "Create spine, not a tollgate" CLAUDE.md note? No — this would be an *optional deeper route* or an *upgrade* (M-20 deploy-application upgrade is the light single-step sibling of M-06). Deploy a magic-infused blaze shard onto a base blazing tool to unlock the fire tier — that's M-20. Fits.

- from: create_sa:blazing_pickaxe/axe/cleaver/shovel (base blazing tools) | via: create:deploying (apply magic-infused blaze component) or ars_nouveau:imbuement | to: magic | motif: M-20 (deploy-application upgrade) or M-10 (arcane infusion pull) | power: mid | tone: ok | verdict: ACCEPT | hook: a blazing pickaxe gets its true fire temper from an Ars infusion or deploy-applied blaze shard — the magic pillar unlocks the fire tool line's full potential
- from: create_sa:brass_drone_item (drone) | via: create:sequenced_assembly already present | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: drone is already captured by the aeronautics anchor; adding M-24 here would be re-labeling an existing connection, not a new one

REWORK: OK — Create + aeronautics is sound. The blazing tool magic link (ACCEPT above) adds a genuine magic 3rd anchor.

---

## smartbrainlib   [anchors: support/library (1)]

Zero blocks, zero items, zero recipe-types, zero loot. Pure AI framework dependency. No content surface.

LEAVE — pure code library (AI/Brain framework); no items, no recipe-types, no loot tables, no material surface to weave through.

---

## justenoughbreeding   [anchors: support/QoL (1)]

Zero blocks, zero items, zero recipe-types. Pure JEI plugin — exposes breeding requirements as a recipe-viewer category. No material flows, no gameplay mechanics, no loot.

LEAVE — pure JEI plugin (informational, no items, no recipe-types, no loot); nothing to weave.

---

== CHUNK COMPLETE ==
