# Phase 2 candidates — chunk-13

## everycomp   [anchors: support/decoration (1)]

LEAVE — zero-content generator; it stamps host-mod block shapes across all loaded wood types and auto-generates the recipes. Any weaving belongs on the host mods (Create, Macaw's, Blockus, etc.), not here. No independent material surface to route through any method.

## born_in_chaos_v1   [anchors: survival (1)]

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Dark Metal is a spooky ore that rewards the Create spine — crush the deposit into dark metal dust + a byproduct nugget, doubling yield; gear now sits in the Create production tree not a lone bench recipe.
- from: born_in_chaos_v1:bundle_of_bones / dark_metal drop | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Halloween-mob drops become bounty turn-ins — danger converts directly to coin, the combat-to-economy edge the loop needs.
- from: born_in_chaos_v1:bundle_of_bones (cursed/soul-flavored bone bundle) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A cursed bundle of undead bones is exactly what necromantic spirit-fire consumes — transmutes into a soul intermediate for Occultism rituals. Flavor is seamless.
- from: born_in_chaos_v1:dark_metal_block (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 already routes dark_metal through Create crushing at the ore stage; a second M-04 deco-recycle crush on the same metal family is redundant noise. One motif per material is enough.
- from: born_in_chaos_v1:bagof_candy (seasonal item) | via: extradelight:vat / create:mixing | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: Candy bag is a Halloween seasonal collectible with lore weight; routing it through an industrial vat as a processing feedstock strips the seasonal flavor and there's no coherent industrial product. Tone clash wins.

REWORK: existing anchor "survival (1)" is sound for the danger/mob-threat face. The dark_metal ore giving a build/deco palette is noted as support in the dossier — that's fine as a label but the ore itself (dark_metal_deposit/dark_metal_ingot) has no Create entry, which is the gap. Accept M-03 + M-14 close the loop cleanly. OK — no arbitrary existing connections to flag; just adding the missing 2nd anchor.

## cmparallelpipes   [anchors: create (1)]

LEAVE — a single utility tool for Create fluid pipe management (locks pipe connection state). No second-pillar surface: the wrench acts on network topology, not on any material that could be routed through another mod's method. Weaving belongs on the fluid-network content passing through those pipes, not the wrench itself.

## companion   [anchors: support/QoL (1)]

LEAVE — pure behavior mod (pet-portal-follow + retreat logic). No items, no blocks, no loot, no materials. Zero content surface to route through any method. Genuine zero-content QoL mod; no forced edge is coherent.

## hpm   [anchors: aeronautics (1)]

- from: hpm:largehull / hpm:smallhull (ship hull components) | via: create:mechanical_crafting | to: create | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Ship hulls are structural frames — they should require fabricated Create materials (brass plates, mechanical casing) via the mechanical crafter, not raw bench wood, so building a cutter locks behind the Create spine where it belongs. Steamship especially.
- from: hpm:corvette_steamship_item | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The WIP corvette steamship is the fleet's flagship vessel — a multi-stage assembly chain via sequenced assembly (hull sections + steam fittings + a derpack:incomplete_steamship partial) fits the GregTech-style depth model perfectly and makes the corvette feel earned.
- from: hpm:cannonball / hpm:mortar_ball | via: createbigcannons:cartridge_assembly | to: create | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Pirate cannonballs as feed stock for CBC munition assembly — naval combat draws on the same industrial munition pipeline; a small cross-mod ammo unification that players immediately understand.
- from: hpm ship items (cutter/war-cutter) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: A shipwright selling finished vessels is the maritime economy in one move — high-effort luxury good becomes tradeable; makes the nautical trade route a real player role.
- from: hpm:hand_cannon | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: The hand cannon is a handheld weapon, not a flagship machine — M-06 is for endgame keystones. Applying a sequenced assembly chain to an everyday ranged weapon over-gates a basic item (anti-guardrail). A simple M-05 native-method gating (craft from Create brass/cast iron) is the right cost, not a multi-stage chain.
- from: hpm:hand_cannon | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Hand cannon and hand mortar are mid-tier weapons — gating them behind Create brass/cast iron via mechanical crafting (a single deliberate step) moves naval weapons off the bench without over-gating them. Coherent: an age-of-sail firearm wants real metalwork.
- NOTE from dossier: overlap with Create Aeronautics (physics ships) and Create Big Cannons flagged for curation thunderdome — this note is preserved here for the human reviewer.

REWORK: existing anchor "aeronautics (1)" — water vessels are the economy's logistics arm, not strictly the Create Aeronautics physics system. The dossier correctly notes hpm ships are bespoke boat-entities, not Aeronautics ships, so the label is loose. The real anchor for hpm's role is "economy/logistics" (water transport) + the pending Create production anchor. Recommend correcting the anchor to "aeronautics, create" once M-23/M-05 edges are authored, and flagging the curation thunderdome note.

## particlerain   [anchors: support/atmosphere (1)]

LEAVE — client-only weather particle rendering (rain, snow, sand, fog). No items, no blocks, no loot, no materials. Zero game-mechanical surface. Genuine pure-client atmosphere mod; no weave is coherent without inventing content that isn't there.

## modernfix   [anchors: support/performance (1)]

LEAVE — JVM/loader-level performance patches; no items, blocks, loot, or materials. Genuine zero-content performance mod. No weave possible or appropriate.

## biolith   [anchors: support/library (1)]

LEAVE — worldgen biome-placement API/library. No items, no blocks, no loot. Its outputs are correctly biome-placement rules, not craftable materials. Any weave belongs on the biome mods that depend on it, not here.

## createbigcannons   [anchors: create, aeronautics (2)]

- from: createbigcannons:steel_ingot / cast_iron_ingot (c:ingots/steel, c:ingots/cast_iron) | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: CBC steel and cast iron are already scarce processed metals — a minting recipe (scarce metal → coin via Numismatics) makes the munitions industry a direct coin producer, tying the war-goods supply chain to the economy.
- from: createbigcannons munitions (big_cartridge, autocannon_cartridge, shells) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Finished munitions as high-value trade goods — a munitions specialist can sell shells and cartridges to other players. PvPvE makes this a real market niche; the war-good seller is a natural economy role.
- from: createbigcannons:big_cartridge_sheet | via: create:pressing | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: create:pressing already routes through Create's own methods and CBC's dossier states it already uses create:compacting, cutting, mechanical_crafting, milling, mixing, sequenced_assembly — the Create spine anchor is well-established. Adding another minor Create step is intra-Create depth noise, not a new system weave. The pillar is already ≥2; M-08/M-09 are the new system links.
- from: createbigcannons loot tables (loot=yes) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: CBC's loot is cannon-battle-salvage, not a natural economy seed point; the material flow is production → economy via sale/mint, not loot → economy directly. M-08 and M-09 recipe-based edges already cover the economy link more cleanly.

REWORK: existing 2-pillar state (create, aeronautics) is correct and grounded. The economy link is the natural third weave; M-08 coin-from-processed-scarcity and M-09 luxury-good-to-coin are both coherent. OK on existing connections — no arbitrary or mis-costed edges.

## just_blahaj   [anchors: support/decoration (1)]

LEAVE — 31 plush shark color variants; pure deco/flavor item. Crafted from vanilla wool + dye. No processing method, no material the pack's spine wants, no loot, no magic/economy surface. Forcing a Create/economy edge here is exactly the "forced edge" failure mode the briefing warns against. Curated flavor; stays as-is.

## touhou_little_maid   [anchors: survival (1)]

- from: touhou_little_maid altar recipe (consumes boss drop / magic reagent as summoning offering) | via: touhou_little_maid:altar_recipe_serializers (KubeJS) | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The altar is a ritual summoning multiblock that runs on a soul-offering currency — gate a maid or major upgrade behind a magic reagent (e.g. ars_nouveau:source_gem or irons_spellbooks:arcane_essence). The altar is already the mod's entire progression method; routing a magic currency through it reads as an arcane summoning rite, not a forced edge. KubeJS-extensible altar recipes are explicitly supported.
- from: touhou_little_maid power_point bottles (fairy drops / loot) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: Power-point bottles drop from maid-fairy mobs and village loot — seed them as bounty turn-ins so the maid-summoning currency also converts to coin. A player who farms maid-fairies has an economy outlet, closing the combat→economy loop with a light touch.
- from: touhou_little_maid:broom (flight item — a maid rides it) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: clash | verdict: REJECT | reason: The broom is a whimsical Touhou-flavored flight item made from hay and sticks; routing it through a heavy sequenced-assembly chain clashes tonally (industrial factory assembling a magical hay-broom is the image you don't want). The altar is the mod's intended progression gate; don't impose Create-depth on what's designed to be a mid-tier magical craftable.
- from: touhou_little_maid altar output (camera, broom, maid) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Power-point-produced maids and brooms are personal companions/tools, not industrial trade goods — selling a maid companion through a Numismatics stall is tonally odd and functionally undermines the companion-automation role (why sell your farmer?). M-14 (bounty on the drop inputs) is the economy link that actually fits. Reject the sell-output path.

REWORK: existing anchor "survival (1)" captures the automation/labor face. The magic 2nd anchor via altar + magic-reagent input is the natural fit (the altar already reads as a ritual). M-14 bounty on power-point bottles is a light economy edge that doesn't over-impose on the flavor. OK on the 1-anchor state: no arbitrary existing connections, just adding the 2nd.

## zeta   [anchors: support/library (1)]

LEAVE — modular mod-development framework (Quark's backbone); no player-facing content, no items, no blocks, no loot. Pure infrastructure library. No weave is possible.

## appleseed   [anchors: survival (1)]

- from: appleseed diet-variety demand signal (continuous balanced-diet pressure) | via: config/demand driver | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Diet variety creates ongoing demand for diverse processed foods — Farmer's Delight crops run through Create milling/mixing (flour, sauces, compounds) to hit multiple nutrient groups, turning the Create spine's processing capacity into a diet-loop pressure satisfier. The diet system pulls on Create's food-processing methods by making single-category gluts less valuable than nutritional variety.
- from: appleseed balanced-diet buffs (multi-group diet → buff that increases productivity) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A balanced diet yields productivity buffs — high-nutrition cooked meals (hitting 3+ groups) become premium trade goods that a cooking specialist sells. The diet mechanic makes food a real economy commodity, not just personal sustenance, mirroring Eco's nutrition-as-value-driver.
- from: appleseed individual nutrient groups (Protein/Vegetables/Grains/Fruits/Sugars) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Nutrition groups are an abstract HUD mechanic, not items — there is no craftable "nutrition token" to route through imbuement. Appleseed registers 0 items; the only outputs are buffs on the player. Any magic tie would have to invent synthetic reagent items that don't exist and would feel grafted-on. The pressure→production→economy path (M-12 + M-09) covers the 2nd anchor without inventing items.

REWORK: existing anchor "survival (1)" is correct and well-grounded (it IS the pressure-side diet system per SYSTEMS.md). The 2nd anchor case is demand-driven (M-12 + M-09), not a recipe edge from the mod itself. OK on existing state; no arbitrary connections to flag. The dossier already names both of these as 2nd-anchor candidates — the assessment here converges with that reading.

## gtmogs   [anchors: survival, economy (2)]

- from: gtmogs vein framework (defines every ore's regional distribution — the upstream scarcity knob) | via: no recipe; this IS the scarcity foundation | to: create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: gtmogs enables M-03 (the ores it places are what create:crushing routes) but it is not itself a recipe actor — the weave belongs on the ores' own mods, not on the worldgen framework. Flagging rather than mis-attributing the motif here.
- from: gtmogs vein definitions (authored per-dimension via KubeJS) | via: config/design coupling | to: create | motif: no-motif | power: n/a | tone: ok | verdict: REJECT | reason: The pack should ensure gtmogs vein files include all Create-relevant ores (zinc, copper, iron, etc.) in their regional distribution, but this is a configuration task (vein authoring), not a recipe weave. No motif covers worldgen-config coupling; record as no-motif reject for human review.

REWORK: existing 2-pillar state (survival, economy) is accurate and well-grounded — gtmogs is the scarcity substrate that makes both the survival-exploration face and the economy (regional specialization) work. It is an enabler of M-03/M-08 downstream but is not a recipe actor itself. OK — connections are sound; no arbitrary edges. The only action item is ensuring the authored KubeJS veins cover all the metals the pack's recipe web depends on, which is a config/curation task.

## irons_spellbooks   [anchors: magic, create (2)]

- from: irons_spellbooks:mithril_ore / irons_spellbooks:raw_mithril | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Mithril is a scarce mid-game magic metal (spawns Y<38) — routing it through Create's crusher doubles the yield and makes the Create spine rewarding for magic-material acquisition. Coherent: a Create engineer processing magic ores for the Iron's specialist.
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement (bonding to source_gem) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence is the Iron's-side magic currency; per the reagent-ownership ledger it is already reserved as "bonded to source via M-01." This confirms the conversion path — essence ↔ source_gem via imbuement — is the right weave. Noting as ACCEPT to explicitly ratify the ledger's reservation.
- from: irons_spellbooks mob drops (apothecarist components, loot=yes) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Enemy apothecarist drops (rare scroll components, exotic reagents) feed the alchemist cauldron as brew inputs — danger-world drops become magic production inputs. The combat loop turns into spell-crafting resources.
- from: irons_spellbooks:alchemist_cauldron (fluid I/O already wired to create:emptying/filling) | via: createaddition:charging | to: create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: The cauldron's fluid operations already speak Create's pipe language; a Create Addition charging step to energise a magic focus or scroll-upgrade component would thread the electric tier into the magic school progression. Only where it makes sense — arcane-electric attunement is coherent with the high-fantasy-tech tone.
- from: irons_spellbooks scrolls (one-shot consumable casts) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Spell scrolls are high-effort consumables — a scroll scribe sells single-use casts to non-mages who want access to spells without the magic investment. The magic specialist role becomes an economy actor.
- from: irons_spellbooks:pyrium_ingot | via: create:crushing (pyrium ore source TBD) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Pyrium is a crafting alloy (made from mithril + gold or nether materials) not a mined ore — there is no pyrium ore to crush. M-03 is for ore doubling; applying it to a crafted alloy is a mis-use of the motif. Leave pyrium on its existing recipe path.

REWORK: existing 2-pillar state (magic, create) is well-founded — the alchemist cauldron already uses create:emptying/filling (confirmed in made-by methods). M-01 reservation for arcane_essence is correct in the ledger. No arbitrary connections. M-03 (mithril), M-02 (mob drops), M-17 (cauldron charging), and M-09 (scroll trade) are all natural deepeners; none over-gate a basic component.

## clumps   [anchors: support/performance (1)]

LEAVE — entity-merging XP orb optimization. No items, blocks, loot, or player-facing content. Genuine zero-content performance mod. No weave possible.

## bcc   [anchors: support/modpack-ops (1)]

LEAVE — server/client version-handshake utility. No items, blocks, loot, or gameplay content. Config-driven version check; nothing to weave.

## kobolds   [anchors: economy, survival (2)]

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A kobold skull is an undead lizard-folk artifact — Occultism's spirit-fire ritual consuming skulls as a necromantic reagent is tonally coherent (spirit-infused bones of a sapient creature) and gives the skull a use beyond trophy placement. Converts the danger encounter into a magic production input, advancing the pressure→magic production edge.
- from: kobolds Prospector enchantment (kapitan trade output) | via: no-motif | to: economy | verdict: REJECT | reason: The Prospector enchantment is traded directly by kobold captains via their emerald-based trade; it's already an economy output. No additional weave is needed — it's already the economy anchor's content. Noting to avoid double-counting.
- from: kobolds (emerald trades → kobold_skull / gold tool consumption) | via: numismatics sell (trade-seam) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 (trade-seam to economy) is provisional and the maintainer leans no. Kobold emerald trading is already the economy anchor; mapping emerald→Numismatics is a currency-bridge that M-21 covers but only provisionally. Tag as (provisional motif) for human review — surface only, do not author.

REWORK: existing 2-anchor state (economy, survival) is well-founded — kobold dens + trades are genuinely economy + survival pressure. M-11 skull sink adds a coherent magic 3rd. OK on existing connections; the M-21 provisional flag is noted for the maintainer.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]

- from: aeronautics_dyeable_components dyed levitite / tires | via: create:toolbox_dyeing | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: The dye step already uses a hand-held offhand-dye mechanic (native to this mod) and a vanilla crafting-grid recipe. Routing the same color operation through create:toolbox_dyeing (Create's batch-dyeing method) would be a forced Create edge with no depth payoff — a cosmetic variant doesn't need a two-system processing path. The mod is decoration-palette support; leaving it as-is is correct.
- from: aeronautics_dyeable_components dyed levitite (96 colored aeronautics blocks) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Dyed levitite is a cosmetic skin on an already-rare structural block (levitite itself has a production gate). Treating the color variants as separate sellable luxury goods would splinter the levitite market into 16 micro-commodities. The economic value lives on the base levitite production, not the dye variant. No edge.

REWORK: aeronautics (1) is the correct anchor — it is a cosmetic extension of Aeronautics. No weave is coherent; stays as sanctioned support/decoration for the aeronautics pillar. OK.

## detect-afk-1.2.2   [anchors: support/QoL (1)]

LEAVE — server-side AFK detection and sleep-vote exclusion. No items, blocks, loot, or gameplay materials. Purely behavioral server utility. No weave possible.

== CHUNK COMPLETE ==
