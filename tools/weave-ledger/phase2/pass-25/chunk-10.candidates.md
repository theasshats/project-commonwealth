# Phase 2 candidates — chunk-10

## kleeslabs   [anchors: support/QoL (1)]
LEAVE — behavior-only QoL mod (no items, no blocks, no materials). Breaks one half of a double slab; nothing to route through any method.

## jakes-build-tools-2.0.1.5   [anchors: support/QoL (1)]
- from: experience_flask items | via: create_enchantment_industry:grinding or create:sequenced_assembly | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: experience_flask stores XP — a Create enchant-industry pull is thematically plausible, but the flasks are purely QoL builder utilities; gating or routing them through Create machinery adds friction with no loop value. The mod's anchor is builder convenience, not a production-chain input. Forced edge.
- from: hammer / chisel tools | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: these are consumable builder tools made from vanilla materials. Routing them through Create mechanical crafting adds zero loop value (they don't advance the scarcity→production→economy chain). Also violates the "never gate a basic/everyday component behind a complex recipe" guardrail.
LEAVE — build-assist tool + datapack; no production, no loop-advancing material surface. Correct 1-anchor support role.

## netmusic   [anchors: support/QoL/flavor (1)]
LEAVE — purely cosmetic audio. Its only existing weave (music_cd through the Touhou maid altar) is already a flavor stitch. No material output to route; forcing a Create or economy edge would be contrived (a "craft the CD player from brass gears" step serves no loop function).

## openpartiesandclaims   [anchors: support/server-protection (1)]
LEAVE — zero items, zero blocks. Pure claim/party framework. Underpins the co-op territory premise but has no content surface for a loop weave.

## packetfixer   [anchors: support/compat-perf (1)]
LEAVE — pure network-packet-size fix; no items, no mechanics, no content.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
LEAVE — particle-emission only. The 184 "items" in the digest are particle holders, not usable items. No content surface. Cosmetic support role.

## ribbits   [anchors: survival (1)]
- from: Ribbit merchant trade node (amethyst-shard ↔ swamp goods) | via: numismatics KubeJS currency bridge (config/KubeJS swap emerald/amethyst for coin price) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: Ribbits run on Amethyst Shards, not emeralds — bridging to Numismatics via a villager-trade seam is M-21, which is explicitly provisional and the maintainer leans no. The trade signal is real (Ribbits are a genuine trade node), but M-21 is explore-only; reject pending Gate-0 review. reason: M-21 provisional — explore only, leans no.
- from: toadstool/mossy-oak woodset blocks | via: create:milling / create:cutting | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: generic modded woodset; M-04 (recycles deco) is valid in principle but the dossier already flags this as WEAK — generic woods provide no distinctive loop value. Low-signal; skip.
- from: Ribbit sorcerer buff trades (survival-side) → amethyst-shard gate → scarce worldgen input | via: loot-seed / trade config | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Amethyst shards are a regional worldgen resource; a colony or Create-processing route to get shards in quantity for Ribbit-merchant trading creates a real scarcity-driven trade node — the Ribbit economy becomes a regional demand sink for amethyst, linking worldgen scarcity to the trading economy. via: loot-seed / KubeJS trade config (seed amethyst demand into Ribbit merchant tables; connect to coin via Numismatics price or bounty).

REWORK: existing survival anchor (1) is sound but thin — the 2nd-anchor candidate economy link via M-08 (amethyst scarcity → Ribbit trade sink → coin) is structurally distinctive (regional resource demand, not mere sellability) and should be pursued.

## create_enchantment_industry   [anchors: Create (1)]
- from: liquid XP (create_enchantment_industry:experience fluid) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks' alchemist cauldron brews spells/potions — fuelling it with Create's industrial Liquid XP (instead of raw mob kills) threads the enchant-industrial spine into the magic pillar. A Create player pipes liquid XP to the cauldron; the magic specialist draws on that supply. Advances the production node: two routes (Create vs. survival grinding) feeding the same magic method. via: recipe (irons_spellbooks:alchemist_cauldron_fill / brew using experience fluid as input)
- from: liquid XP | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals already cost significant XP; routing Create's piped liquid XP as a ritual fuel source makes industrialised XP a magic resource — a second loop tie where the Create producer directly feeds the magic producer's cost. via: recipe or config (add liquid XP as a ritual fluid input)
- from: enchanted books (automated via Blaze Enchanter) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's Enchanting Apparatus needs enchanted items/books as pedestals — feeding it with Create-automated enchanted books makes Create a supplier for Ars' mid-tier apparatus, tying industrial enchanting to the magic web. via: recipe (existing ars_nouveau:enchanting_apparatus; supply chain design, not a new recipe type)
- from: Mechanical Grindstone (create_enchantment_industry:grinding) | via: create_enchantment_industry:grinding | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is sequenced-assembly keystones; the grindstone is simply an auto-grindstone (automated disenchant), not a sequenced-assembly chain. Motif mismatch — this is already folded inside the Create anchor, not a new cross-system link.

OK — the Create anchor is genuine. Existing 1-anchor status undersells it (already deep in Create methods). The three accepted weaves above bring it to Create + magic (2).

## moreculling   [anchors: support/performance (1)]
LEAVE — client-side culling optimization; no items, no mechanics, zero content surface.

## fluid   [anchors: Create, aeronautics (2)]
OK — connections sound. Create (its parts are made through Create machines, it extends the Create fluid network) and aeronautics (centrifugal pump + smart interfaces directly serve shipboard fluid routing). No forced third anchor; the neon-tube/sink deco is flavor, not a pillar. No REWORK needed.

## azurelib   [anchors: support/library (1)]
LEAVE — animation engine library; backs animated mobs/bosses. No content, no material surface.

## attributefix   [anchors: support/library-fix (1)]
LEAVE — pure attribute-cap patch; no items, no content surface. Enables magic/combat gear to scale correctly but has nothing to weave.

## blueprint   [anchors: support/library (1)]
LEAVE — Team Abnormals shared code framework. The single template_chest item is trivially vanilla-style; too thin to anchor a pillar.

## freefbible   [anchors: support/curated-flavor (1)]
LEAVE — single novelty readable item (full Bible text). No mechanics; any forced recipe edge would be noise. Correctly sanctioned as curated flavor.

## tacz   [anchors: support (1)]
- from: gun/ammo recipe inputs (iron, metals, gunpowder-tier mats) | via: tacz:gun_smith_table_crafting (KubeJS recipe override to require Create-pressed sheets/brass/casings) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Gating gun recipes behind Create-processed sheets and brass casings makes firearms a downstream product of the ore-scarcity + Create-production chain — you can't arm yourself without the industrial spine. Guns become combat output of the Create producer, not a standalone vanilla-material island. via: recipe (KubeJS override of tacz:gun_smith_table_crafting inputs to require create:iron_sheet, create:brass_ingot, etc.)
- from: high-tier gun (endgame rifle/sniper) | via: create:sequenced_assembly (multi-step barrel/action/stock assembly through incomplete_* parts) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: A top-tier firearm assembled on a sequenced assembly line — stock machined, barrel pressed, action deployed — is a flagship Create build milestone. Makes the best weapons cost real factory investment. via: recipe (create:sequenced_assembly chain, KubeJS)
- from: ammo (consumable) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Ammo is trivially sellable; sellability alone is not a distinctive weave per the active economy de-emphasis rule.
- from: ammo as scarcity-gated consumable (gunpowder + Create-processed casing) | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Ammo bounties — "deliver 64 ammo boxes to the bounty board, receive coin" — create a recurring coin-sink loop that demands both Create output (casings) and survival/farming (gunpowder from creeper farms or blaze), tying PvPvE combat supply to the economy's distribution stage. This is structurally distinctive (a scarcity-gated consumable demand creating a genuine coin loop, not mere sellability). via: loot-seed / bounty config (Bountiful board ammo bounty entries)

REWORK: current 1-anchor "support" status is soft — tacz is PvPvE combat content with real inputs/outputs, not a pure library. After the accepted weaves above it earns Create + economy anchors (2), which is the correct classification. The "support" anchor should be reclassified to survival (danger/PvPvE pressure) as its primary, with Create and economy as the production + distribution links.

## ecologics   [anchors: survival (1)]
- from: ecologics:coconut / coconut_slice / coconut_husk | via: farmersdelight:cooking or extradelight:juicer | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Coconut gets milled (create:milling) into coconut flour, then the husk passes through farmersdelight or extradelight cooking into a tropical dish — a processing chain that ties a biome-specific food into diet-variety (survival pressure) AND the Create milling spine. Coconut flour is a useful intermediate (M-12 explicitly covers useful intermediates). via: recipe (create:milling → coconut_flour, then farmersdelight:cooking or extradelight:oven into tropical dish)
- from: ecologics c:foods/fruit (azalea flower, coconut slice) | via: ars_nouveau:imbuement (as a flavour/catalyst component for a potion or glyph) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash. Ecologics is vanilla-faithful biome naturalism; forcing exotic tropical fruits into arcane infusion rituals is a flavor clash with no thematic logic. A coconut is not an arcane ingredient.
- from: seashell storage blocks (c:block/storage_blocks/seashell) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: seashell deco crushing back to raw shell via M-04 is valid in principle, but it's a weak, low-signal connection (deco recycle). The coconut/milling link (M-12) is a stronger and more distinctive 2nd anchor; don't dilute with a second generic M-04.

REWORK: existing survival anchor (1) is sound. The ACCEPT above (M-12 coconut milling chain) adds a Create anchor — achieves 2.

## chefsdelight   [anchors: survival, economy (2)]
- from: Cook/Chef villager trades (Farmer's Delight meals for emeralds) | via: numismatics KubeJS price override (swap emerald for coin) | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 provisional, leans no. The trade bridge to Numismatics is the obvious deepening (dossier notes it), but M-21 is explore-only; reject pending Gate-0.
- from: Cook/Chef villager food supply chain | via: farmersdelight:cooking / cutting (implicit supply) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: chefsdelight's connection to survival already exists at the anchor level (FD meals into village economy). A new M-12 recipe edge would be redundant with the existing survival anchor — the mod's food-supply role is already the anchor, not a new weave.

OK — connections sound (survival + economy). The existing 2-anchor read is correct. The only upgrade path is the M-21 numismatics bridge (provisional, deferred to Gate-0) and tightening the emerald→coin substitution when the economy pillar is built at v0.9.0.

## xaerominimap   [anchors: support (1)]
LEAVE — client-side minimap HUD; no items, no blocks, no materials. Navigation QoL support role; nothing to weave.

## hpm   [anchors: aeronautics (1)]
- from: ship hull components (hpm:largehull, hpm:smallhull, hpm:largemast, hpm:small_mast) | via: create:mechanical_crafting (KubeJS recipe to require Create processed wood + brass/iron sheets) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Sailing ship hulls built from Create-processed planks and iron sheets — the shipwright's work requires the Create spine. A wooden cutter is a mid-tier Create project, not raw-wood kit. Makes naval transport a real production milestone. via: recipe (KubeJS override of hpm ship hull/mast items to require create:mechanical_crafting or pressing)
- from: corvette steamship (hpm:corvette_steamship_item — WIP) | via: create:sequenced_assembly + TFMG engine components | to: Create + aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The steam-powered corvette is the flagship naval build; assembling it through a sequenced assembly line (hull plated, engine fitted, mast stepped) makes it a peer to an Aeronautics airship in build depth. Requires TFMG or Create-Addition fuel components for the engine (M-13 companion). via: recipe (create:sequenced_assembly chain; corvette needs boiler/engine block from TFMG)
- from: cannonball / mortar_ball | via: createbigcannons:cartridge_assembly or create:compacting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Cannonballs are the naval weapon consumable — forging them through Create's compacting press (iron → ball) or via CBC's cartridge assembly ties naval armament to the Create production chain. Ammo is finite and made, not found. via: recipe (create:compacting for iron cannonball, or createbigcannons ammo methods for cartridge-style shots)
- from: finished ship (hpm cutter/war-cutter) | via: numismatics sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. A ship is trivially a high-value tradeable item. Reject per economy de-emphasis rule; the Create production chain anchors (above) are the real value.

REWORK: current 1-anchor "aeronautics" is underselling the mod — it's got real items/crafting and fits the Create spine as a production target. After accepted weaves: aeronautics (existing) + Create (new, via hull/cannon recipes) = 2 anchors. Note: overlap with Create Aeronautics and Create Big Cannons (artillery) is flagged in dossier — a curation thunderdome question, not a weave issue.

## minecolonies_compatibility   [anchors: survival, Create (2)]
OK — connections sound. This mod is itself integration glue: it wires MineColonies workers into Create (Stock Link courier), Farmer's Delight (cook/cutting boards), IE (cloche/fertilizer), BotanyPots — its whole function is cross-system bridging. Both anchors (survival via farming/jobs, Create via storage bridge) are genuine and well-grounded. No new forced edge needed; adding a third would be noise.

== CHUNK COMPLETE ==
