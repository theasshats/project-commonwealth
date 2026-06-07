# Phase 2 candidates — chunk-03

## betterbiomereblend   [anchors: support/performance (1)]

LEAVE — genuine zero-content performance mod; client-side color-blend engine only, no items, no methods, no material surface. Nothing to weave.

## copycats   [anchors: create (2 — already create-pillar deco)]

Power-read: copycats shapes are made from Create zinc (everyday Create material) at the stonecutter; blank shapes cost trivial materials, and the skin is any existing block. The blocks themselves are Create-flavored architectural decoration — not endgame, not standalone. They are the Create builder's palette extension.

Candidate 1 — Create zinc → copycat shapes → aeronautics hull cladding (M-23)
- from: copycats:copycat_panel / copycats:copycat_slope | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: everyday | tone: ok — copycat panels as the "hull cladding" on airship hulls is an entirely sensible build pattern; players already use them for ship appearance | verdict: ACCEPT | hook: hull aesthetics that stay modular — skin the frame in any block texture while keeping the structural panel shape; makes the ship look like what it is.

Red-team: is this a recipe weave or emergent play? Aeronautics is a build mod — players will naturally use copycats on ships. But M-23 is specifically about requiring fabricated structural parts as build ingredients for airframes. Copycat panels are cosmetic, not structural load-bearing. Using them as an *optional* cosmetic skin on a ship doesn't advance the loop. Using them as a *required* airframe ingredient would be arbitrary (a zinc-dipped panel is not structurally distinctive from a plain zinc plate). Verdict: REJECT. The natural play is emergent (players skin ships with copycats without a recipe mandate), and forcing a recipe requirement would be busywork with no thematic "of course" — the panel is not structurally special compared to a raw zinc block.

- from: copycats:copycat_panel | via: aeronautics construction recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash — the panel is cosmetic, not structural; requiring it in airframe recipes is busywork | verdict: REJECT | reason: cosmetic purpose does not justify M-23 structural gating; emergent use is already the right form.

Candidate 2 — copycat shapes as Create deco → M-04 crushing recycle
- from: copycats:copycat_* (any zinc-based shape) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — zinc-derivative blocks crushing back to zinc gravel + XP is the standard M-04 pattern | verdict: REJECT | reason: M-04 is for decorative blocks that need a Return-to-resource path; copycats already unmake correctly (placing blank + wrench yields the zinc back per Create conventions). Adding a crush recipe would be redundant plumbing, not a new connection.

OK — connections sound. Copycats is cleanly Create-anchored (zinc-built, Create-dependent decoration). No coherent 2nd-pillar edge survives red-team; the dossier's own conclusion ("a second hard pillar would be a forced edge") holds. One-system mod; flag as a candidate for a lightweight economy weave at a later pass if needed — e.g. M-09 (luxury zinc-worked shapes as buildable goods), but that requires a Trade Floor / shop context not yet in scope.

## appleskin   [anchors: support/UI (1)]

LEAVE — zero-content HUD mod; displays food restoration/saturation values that already exist in the game. No items, no methods, no material surface. The only "connection" it has is thematic adjacency to the food/diet system (it pairs naturally with appleseed and Farmer's Delight), but there is nothing to route a material through. A forced recipe edge would be meaningless.

## bettercombat   [anchors: support/combat framework (1)]

LEAVE — pure behavior-framework mod. Adds no items/blocks/methods; it redefines combat feel through JSON weapon movesets. No material to route; the weave surface is combat weapon items themselves, but those belong to the mods that register weapons (Ars, Iron's, Cataclysm, etc.) — Better Combat is the delivery vehicle, not the material. Nothing to weave here.

## durabilitytooltip   [anchors: support/UI (1)]

LEAVE — genuine zero-content client UI mod; numeric tooltip overlay, no items, no methods, no processing. Nothing to weave.

## sliceanddice   [anchors: create, survival (2)]

Power-read: the Slicer is a kinetic automation machine for every Farmer's Delight cutting-board recipe; the Sprinkler distributes fluids (water/lava/modded) over crops. This is solidly everyday-to-mid tier — it's glue infrastructure, not an endgame unlock. Its role is to make kitchen automation scale through Create shaft/belt infrastructure.

Existing connection check: create (Slicer runs FD cutting via Create power, heat-mixing for FD cooking) + survival (Farmer's Delight food layer). Both well-motivated. This is already a model M-12 bridge. OK — connections sound for the existing 2-pillar read.

Candidate — Sprinkler with magic fluid → seasonal plant growth (M-16)
- from: sliceanddice:sprinkler (fluid distributor mechanic) | via: config tie / modded fluid | to: magic | motif: M-16 | power: everyday | tone: ok — if Ars Nouveau's potion-of-growth fluid or an Occultism fluid can be piped through a Sprinkler, it becomes a Create-piped magical crop accelerant | verdict: REJECT | reason: this is a config/mod-interaction question rather than a new weave we can propose — Sprinkler's modded-fluid behavior depends on whether those fluids have registered growing effects; it's emergent compat, not a design weave. No "of course" recipe hook to write.

Candidate — Slicer + mushrooms → processed mushroom goods → economy sell (M-09/M-12)
- from: mushroomquest mushrooms | via: farmersdelight:cutting (through sliceanddice:slicer) + numismatics sell | to: economy | motif: M-12 then M-09 | power: everyday | tone: ok | verdict: REJECT | reason: this is a mushroomquest + economy weave that sliceanddice merely facilitates; the candidate belongs on mushroomquest (where it is already flagged), not on sliceanddice itself. Routing it here would be double-counting the connection.

OK — connections sound. The 2-pillar Create+survival anchor is tight and correct. No additional weave needed here; the automation role is the point.

## aeronauticscompat   [anchors: aeronautics/support (1)]

LEAVE — genuine zero-content behavior-patch mod. Required ship-compat glue (per CLAUDE.md, must stay). No items, no methods, no recipe surface. The weaving happens in the mods it patches (Aeronautics, Sable, etc.); this is plumbing only.

## sable   [anchors: support/library (1)]

LEAVE — genuine zero-content physics-engine library. The sub-level backend for Aeronautics; registers no items, no methods, no recipes. Weaving belongs in the mods that build on it (Aeronautics). Nothing here to route a material through.

## immersive_paintings   [anchors: decoration/support (1)]

Power-read: produces painting/graffiti/glow-painting canvases from vanilla materials; no exotic inputs. Items are everyday decoration with no processing methods. The mod's value is player-expression and gallery aesthetics.

Candidate 1 — glow_painting as a shop good / luxury deco item → economy (M-09)
- from: immersive_paintings:glow_painting (custom player art) | via: numismatics sell / Trading Floor stall | to: economy | motif: M-09 | power: everyday | tone: clash — M-09 requires "high-effort consumable (wine, cheese, processed crop)" as a luxury good. A custom painting is decorative but not a consumable and not processed through a machine. The hook "sell art for coin" is thematically coherent for a player-run economy, but M-09 is anchored to processed food/drink; art is orthogonal. | verdict: REJECT | reason: M-09 is the processed-consumable-to-coin motif; paintings are not processed consumables. No motif cleanly covers "sell crafted deco items" — M-21 (villager trade→economy) is provisional and leans no. Forcing an economy edge via a no-motif route is disallowed.

Candidate 2 — paint frames via Create pressing → copycat-styled picture frames (M-04 / M-20)
- from: immersive_paintings:painting (frame craft) | via: create:pressing / item_application | to: create | motif: M-20 | power: everyday | tone: clash — applying a painting item onto a panel via deployer to "hang" it is a reach; the painting already crafts from vanilla wood/string. No "of course" here — it's an arbitrary step added to a vanilla-style craft. | verdict: REJECT | reason: no thematic coherence; the craft is already vanilla, adding Create pressing is busywork, not depth. No surviving motif.

LEAVE — pure decorative-expression mod. The dossier conclusion holds: no material with a coherent Create/magic/economy routing. Noted: has explicit Exposure compat but Exposure is a separate mod; if a joint weave between the two is desired it belongs on the Exposure dossier.

## createaddoncompatibility   [anchors: support/library (1)]

LEAVE — genuine zero-content compat-unification layer. Drives Almost Unified tag priorities; no items, no player-facing content, no recipe methods of its own (the one tfmg:distillation recipe it ships is a plumbing fix, not a weave). Caution noted in dossier: verify it never mis-merges galosphere palladium as silver (per CLAUDE.md).

## occultengineering   [anchors: create, magic (2)]

Power-read: this is the canonical Create×Occultism bridge mod — mechanical pulverizer, fan-enspiriting, phlogiports, spirit_solution intermediate. Solidly mid-to-endgame (automated occult rituals are deep progression). Already a well-woven 2-pillar mod by construction.

Existing connection check: create (uses create:compacting/filling/haunting/item_application/mixing/pressing) + magic (occultism:ritual/spirit_fire). Both pillars are tight and well-motivated. OK.

New candidate — sterling silver (c:ingots/sterling_silver, a unique occult alloy) → Create processing → Numismatics coin minting (M-08)
- from: occultengineering:sterling_silver (unique occult alloy, mid-tier) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — sterling silver is an occult-flavored alloy with no vanilla analogue; pressing it into a distinctive coin makes it the "occult currency" that bridges magic production into the coin economy. A magic specialist with an occult smelter becomes the pack's silver-coin supplier. | verdict: ACCEPT | hook: the only way to mint sterling-silver coin is to run OccultEngineering's alloy through the Create press — magic's unique material becomes a premium coin stock.

New candidate — phlogiport (wireless item logistics) → aeronautics logistics (M-18/aeronautics)
- from: occultengineering:phlogiport (address-based wireless teleport logistics) | via: spirit_trade / phlogiport deployment on ships | to: aeronautics | motif: M-18 | power: mid | tone: ok — a phlogiport mounted on an airship hull would let the ship receive/send cargo without docking; an occult logistics node that works aboard Sable contraptions | verdict: REJECT | reason: this is an emergent compat question (does phlogiport work on moving contraptions?) rather than a recipe weave; it's a runtime behavior, not a design weave we can propose as a Phase-3 action. Also M-18 is specifically "summoned-spirit logistics" — phlogiports aren't spirit-summoned, they're arcane teleporters. The motif fit is loose.

Dossier's own weak candidate — sterling_silver → numismatics mint — is accepted above (M-08). The REWORK flag from the dossier ("WEAK — M-08") is resolved: the candidate survives red-team and becomes a proper ACCEPT.

REWORK: none. Existing Create+magic anchors are tight and well-grounded. M-08 sterling-silver minting adds a third anchor (economy) that the dossier flagged as weak — power-read confirms it's viable at mid tier.

## everycomp   [anchors: support/decoration (1)]

LEAVE — runtime block/asset/recipe generator; no content of its own. Its outputs live in the host mods' namespaces (Create, Macaw, etc.) — any weaving belongs on those host mods. Nothing to route here.

## modulargolems   [anchors: create (1)]

Power-read: the mod is a mid-to-endgame combat automation tier. Base golem bodies use common metals (iron, copper, brass — everyday); boss-tier bodies use Ice&Fire dragonsteel and Cataclysm cursium — those are endgame, rare, and already tied to boss-drop progression. The workbench is Create-gated. Golem assembly is sequenced_assembly + mechanical_crafting (deep chain). This is solidly the M-06 pattern for the endgame bodies and a lighter Create-gating for the base ones.

Existing connection check: the single Create anchor (sequenced_assembly/mechanical_crafting/crushing for assembly) is well-motivated. The dossier proposes two 2nd-anchor candidates:

Candidate 1 — boss/mob-drop metals (dragonsteel, cursium) → golem_assemble as boss-key gate (M-02/M-15, survival→create)
- from: iceandfire:fire_dragonsteel / cataclysm:cursium_ingot (boss drop tier metals) | via: modulargolems:golem_assemble | to: survival | motif: M-15 | power: endgame | tone: ok — boss-drop metals are the gate items for the highest-tier golem bodies; this is thematically exact (you defeat the boss, gain its metal, build the ultimate construct). Fits M-15 (boss-key unlock) squarely: the boss drop IS the input to the complex Create recipe. | verdict: ACCEPT | hook: slaying the ender guardian or the ignis dragon is the only way to unlock their metal bodies — the most powerful golems require proof of combat.

Red-team: is this already the default behavior (dragonsteel is just the best metal, not KubeJS-gated)? Power-read: yes, the golem mod likely accepts any registered metal without a lock. The weave is proposing to *ensure* the endgame bodies require boss metals, either by recipe design or by the metals already being boss-gated. The weave is valid: if boss-drop metals are already the only source of dragonsteel/cursium (which they are — those drop from Ice&Fire / Cataclysm bosses), then M-15 is already satisfied emergently. We can record this as an ACCEPT that surfaces the link explicitly for documentation (and for any recipe that might try to circumvent it).

Candidate 2 — Ars/Occultism material → golem-core upgrade (M-10/M-11, magic)
- from: ars_nouveau:source_gem (magic currency) | via: modulargolems:golem_add_slot (upgrade slot mechanic) | to: magic | motif: M-10 | power: mid | tone: ok — source gem powering an upgrade slot reads as "arcane attunement" for a mechanical construct; a golem infused with source-gem energy | verdict: REJECT | reason: source_gem is the reserved universal magic currency (reagent-ownership); repurposing it as a golem upgrade material would crowd its currency role. Use occultengineering:spirit_solution instead — but that's Occultism's specific intermediate. The link is weak (M-10 says "don't gate basic components behind infusion"; this golem upgrade is mid-tier, not basic, but the magic-to-construct connection lacks a "of course" player nod — why would an arcane gem power a mechanical golem rather than Create energy?) | verdict: REJECT | reason: reagent-ownership conflict on source_gem; the Occultism route (spirit_solution → golem upgrade) is plausible but requires its own power-read and is a separate proposal. The dossier marks this WEAK and it fails red-team.

Candidate 3 — occultengineering:spirit_solution → golem upgrade (M-11, magic)
- from: occultengineering:spirit_solution (reserved occult intermediate) | via: modulargolems:golem_add_slot | to: magic | motif: M-11 | power: mid | tone: ok — spirit solution as a golem "soul animating fluid" is thematically coherent (occult spirit animating a mechanical construct is the cog-and-pentacle aesthetic); spirit_solution is the reserved occult intermediate (reagent-ownership: reuse, don't invent new). | verdict: ACCEPT | hook: a golem body is just metal until you pour spirit solution into the upgrade slot — the Occultism player's soul-fluid is what makes it truly alive.

Red-team: spirit_solution is reserved — does this violate the ownership rule? No. The rule is "reuse it; don't invent a new occult reagent." Using spirit_solution as a golem upgrade input IS reusing the reserved reagent, which is explicitly encouraged. The tone is tight: modular golems already pull Cataclysm/Ice&Fire boss content, so adding an Occultism ritual link is thematically consistent (cog-and-pentacle, the occultengineering aesthetic). This advances the loop: magic → production (animated combat construct). Power: mid — spirit_solution is itself a mid-tier Occultism craft.

OK on existing Create anchor. Two new candidates ACCEPTED (M-15 boss-key for dragonsteel/cursium bodies; M-11 spirit_solution golem upgrade giving magic a second anchor). One REJECTED (source_gem reagent-ownership conflict + weak tone).

## patchouli   [anchors: support/library (1)]

Power-read: produces guide-book items crafted from vanilla materials (paper/leather/wool — trivial) via patchouli:shapeless_book_recipe. The books are documentation surfaces, not gameplay resources. The mod is a dependency for Ars Nouveau, Occultism, etc., which author their own guide books in it.

Candidate — pack-authored guidebook: use patchouli:shapeless_book_recipe to craft a Derpack X pack-guide (a custom book authored as pack content), scoped as player-facing onboarding. This is a deliverable but not a cross-system weave in the motif sense — it's documentation, not a loop connection.
- from: patchouli:guide_book (documentation item) | via: any pack-authored book content | to: support | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — this is documentation/onboarding, not a cross-system material flow. Valuable work (a pack guide is useful) but not a Phase-2 weave candidate. Belongs as a separate documentation task.

LEAVE — genuine library/documentation mod. No items or methods with weave-relevant material surface. Books are authored by other mods that use Patchouli as a platform; any weave belongs on those mods.

## create_compressed   [anchors: create (1)]

Power-read: compresses Create's own bulk intermediates (crushed ores, sheets, flour, mechanical parts) into storage blocks. Everyday tier — it's pure inventory management. No foreign-material processing. Already uses create:crushing/milling/mixing/splashing/sandpaper_polishing.

Candidate — crushed ore piles → bulk-washing → aeronautics scrap recovery (M-23)
- from: create_compressed:crushed_<metal>_pile | via: create:splashing (bulk washing) + aeronautics hull recipe | to: aeronautics | motif: M-23 | power: everyday | tone: clash — M-23 is "structural alloy/plate as required airframe ingredient." A crushed ore pile is a raw intermediate, not a structural component; including raw ore piles in airframe recipes would be thematically incoherent (you don't build a hull from unrefined ore powder). | verdict: REJECT | reason: raw crushed ore is not a structural alloy; M-23 requires fabricated plates/beams, not ore piles. The compressed piles are storage convenience, not hull material.

Candidate — create_compressed:mechanism_block / cogwheel_block → aeronautics drivetrain (M-24)
- from: create_compressed:mechanism_block (a 9× precision-mechanism block) | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok — a compressed block of precision mechanisms is a reasonable bulk-supply input for an aeronautics propulsion/control assembly; using the compressed form (a storage convenience) rather than loose mechanisms saves inventory space and implies bulk production. | verdict: REJECT | reason: the mechanism_block is a storage item (9 precision mechanisms compressed into a block, unmake with bulk washing). Adding it as an aeronautics recipe input would mean players need to compress mechanisms before using them, which is an arbitrary friction step. M-24 should take the mechanism itself, not the compressed block. The compressed block is a convenience, not a new material — no weave justification.

LEAVE — Create-internal storage/QoL; no foreign material or coherent 2nd-pillar edge. Dossier conclusion holds.

## nochatreports   [anchors: support/privacy (1)]

LEAVE — genuine zero-content privacy/networking mod. No items, no methods, no material surface. Nothing to weave.

## mushroomquest   [anchors: survival (1)]

Power-read: 137 edible real-world mushrooms across common/rare/mythical tiers. Common caps = everyday foraged food (drop from breaking stumps/trunks, low effort). Rare and mythical caps = low-volume, biome-specific, higher-tier drops with strong status effects (healing or deadly). The mod has loot tables (loot=yes), structures (Mushroom Island biome), and 352 items. This is a content-rich foraging/survival mod with strong cooking and alchemy surfaces.

Candidate 1 — common mushrooms → Farmer's Delight / ExtraDelight cooking-pot/oven → prepared dishes (M-12, survival→production)
- from: mushroomquest mushroom caps (everyday foraged) | via: farmersdelight:cooking / extradelight:oven | to: create | motif: M-12 | power: everyday | tone: ok — foraging → cooking is the most natural loop; mushrooms become soups, stews, and side dishes via FD/ExtraDelight recipes, feeding the diet system (appleseed five-group demand). Sliceanddice's Slicer can automate the cutting step at scale. | verdict: ACCEPT | hook: foraged caps into a Farmer's Delight pot — every mushroom variety unlocks a new dish, and diet balance demands you cook them all.

Candidate 2 — rare/mythical mushroom caps → Numismatics luxury good / sell (M-09, survival→economy)
- from: mushroomquest rare/mythical caps (mid-tier foraged) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok — rare foraged goods (low-volume, biome-specific) fit the luxury-good sell pattern; a forager specialist can supply the market with caps other players can't easily find. M-09 is food/consumable-class items → coin, and rare mushrooms are consumable (eat them or use as ingredients). | verdict: ACCEPT | hook: agarikon and golden chanterelles aren't just food — they're tradeable rarities; the forager's specialty becomes the pack's boutique ingredient market.

Red-team Candidate 2: M-09 says "high-effort consumable (wine, cheese, processed crop)." Raw foraging caps are low-effort (break a stump), not processed. However, the motif's parenthetical is illustrative, not restrictive — the motif is "luxury good → coin," and a biome-rare, effect-bearing mushroom qualifies as a luxury by scarcity even if the harvest step is simple. The effort is in finding the biome and the rare drop tier, not in processing. Survives.

Candidate 3 — deadly/mythical caps → Occultism spirit_fire transmutation → magic reagent (M-11, survival→magic)
- from: mushroomquest deadly mushroom caps (death_cap, destroying_angel — rare/mythical tier) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — poisonous/deadly caps transmuted through spirit fire into a dark reagent is exactly the "organic drop → magic ingredient" pattern; death caps already have a poison-effect identity that maps to occult use. | verdict: ACCEPT | hook: the death cap isn't wasted — toss it in a spirit flame and it becomes a potent occult reagent; the forager and the occultist have a trade to make.

Red-team Candidate 3: is this thematically forced? Death-cap → spirit fire → dark reagent is actually one of the cleanest theme fits in the chunk. The deadly mushroom's toxin becomes arcane material — it's coherent lore-wise and advances survival→magic, a clean loop edge. The reagent should not be source_gem (reserved); it could be a natural reagent for Occultism rituals (otherstone, demon_blood_shard etc.) or create a new named cap-dust reagent — but note the motif says "transmuted INTO an essence through ritual/spirit method," so the output is a foreign magic-system ingredient, not a repurposed cap. Survives.

Candidate 4 — foraging blocks (stumps/trunks) → loot-seed: drop Create parts or magic catalysts (M-02/M-15)
- from: mushroomquest foraging blocks (loot=yes, structures) | via: loot-seed | to: create / magic | motif: M-02 | power: everyday | tone: clash — stumps dropping Create cogwheels or magic reagents is tonally wrong; these are nature-foraging blocks, not mob loot or dungeon chests. Forcing Create parts into forest stumps has no "of course" hook. | verdict: REJECT | reason: tone clash; the loot-seed motif is for structure/dungeon mods; foraging blocks are organic-nature content and adding tech/magic loot to them would feel jarring, not emergent.

Candidate 5 — Mushroom Island biome structures → loot-seed: rare reagent or map (M-14 bounty / loot-seed)
- from: mushroomquest Mushroom Island structures (loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok — seeding a bounty-relevant rare drop (coin, a premium ingredient, a trade-good token) into Mushroom Island structure chests makes the biome a worthwhile expedition target; economy: you explore to find the loot you sell | verdict: ACCEPT | hook: the Mushroom Island is worth sailing to — its structure chests carry rare trade goods that only foragers bring back.

Red-team Candidate 5: M-14 is "bounty board consumes mob drops and pays coin." The loot-seed path here is seeding coin or a trade-good into structure chests, which is closer to "exploration reward → economy" than strict M-14 (which is combat→economy via bounty board). More accurately this is a loot-seed candidate with an economy anchor: the structure yields a rare item that feeds the economy (sell or use as reagent). The underlying motif might be better read as M-08 (scarce material from exploration → economy) or simply loot-seed as a delivery mechanism. Let me re-examine: the briefing says "seed weave-relevant drops into this mod's loot tables" with examples of M-08/M-14/M-02/M-15. For a structure/loot-bearing mod, the motif tagged should match the dropped item's role. Seeding a rare coin or a magic reagent into the Mushroom Island chest is a real candidate. I'll keep as ACCEPT but update the motif: the dropped item is a "scarce exploration find → economy," closest to M-09 (luxury good → coin) if the drop is a sellable rare, or M-15 (boss-key) if it's a recipe gate. Given this is a structure mod with biome loot, M-09 via loot-seed is the cleanest fit.

- from: mushroomquest Mushroom Island structure loot | via: loot-seed (add rare sellable cap or trade-token to chest tables) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mushroom Island's hidden structures hold mythical spores that only the expedition trader brings home — supply the market or spend them yourself.

Summary for mushroomquest: 4 ACCEPTED (M-12 cooking, M-09 rare-cap sell, M-11 deadly-cap spirit_fire, M-09 loot-seed), 2 REJECTED (M-02 tech-loot in stumps — tone clash; the initial duplicate of loot-seed). Gains survival→production (M-12), survival→economy (M-09 ×2), survival→magic (M-11). Strong multi-anchor mod.

## minecolonies   [anchors: survival, create (2)]

Power-read: NPC settlement mod, the pack's designated progression on-ramp. Everyday through endgame — quarries produce ore streams (mid), University research gates high-tier craft. Colony food outputs are everyday items. Already 2-pillar (survival + create) with authored M-05 weave (quarries gated on andesite/brass/cogwheels). The design explicitly says complex Create tech is gated behind colony research — this is load-bearing.

Existing connection check: survival (settlement/food/farming) + create (quarries via 98-minecolonies.js, M-05 gating). Both are correct and well-motivated. OK — connections sound.

Candidate 1 — colony food outputs (apple_pie, baked_salmon, bread/soup/vegetable c:tags) → Numismatics trade goods (M-09, survival+create→economy)
- from: minecolonies colony-produced foods (minecolonies:apple_pie, minecolonies:baked_salmon, c:foods/* outputs) | via: numismatics sell / Trading Floor stall | to: economy | motif: M-09 | power: everyday | tone: ok — the colony cook produces food at scale; selling colony-surplus food to the wider server market is the emergent economy play. The dossier explicitly notes this: "economy is a possible 3rd via M-09." | verdict: ACCEPT | hook: a colony with a busy kitchen generates more food than its citizens need — the colony cook's surplus feeds the trade economy directly.

Red-team: is this "emergent" (not needing a recipe) or a real weave? M-09 is realized via a numismatics price/sell setup — it's a config/data action (set a sell price for colony foods at a Trading Floor stall), not just "players naturally trade." This is a valid Phase-3 action: seeding a price entry for colony foods in the economy pillar. Survives.

Candidate 2 — minecolonies:ancienttome (research gate item) → boss-key unlock (M-15, survival/danger→create)
- from: minecolonies:ancienttome (rare drop from raiders, loot=yes) | via: native recipe gating — ancienttome is already a University research gate | to: create | motif: M-15 | power: endgame | tone: ok — the ancient tome is the colony's high-tier research unlock item; it drops from raiders, tying colony progression to combat pressure (danger → colony growth → Create tech). This is already the design intent but surfacing it explicitly as an M-15 boss-key weave documents the loop edge: combat drops → colony unlock → Create tech. | verdict: ACCEPT | hook: raider camps drop ancient tomes — the colony can't unlock its highest-tier research, and thus the most complex Create machines, without pushing back against the dangers that surround it.

Red-team: is the ancient tome already working this way, or is this aspirational? Per SYSTEMS.md, boss/colony gating is design intent with the recipe/gating work future (tracked #219/#220). This candidate is correct to surface it as a Phase-2 proposal (the weave is "as designed in SYSTEMS.md, not yet authored in KubeJS") — it advances the loop intentionally. Survives as a documentation/implementation candidate.

Candidate 3 — minecolonies quarry outputs (ore stream) → Create crushing/processing → economy coin (M-08 via M-03)
- from: minecolonies quarry ore outputs | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok — quarry ore → Create ore-doubling → mint into coin is the M-08 chain; MineColonies quarries already produce ore at scale, making it a natural feeder for the coin-minting supply line | verdict: ACCEPT | hook: the colony quarry doesn't just supply the factory — its crushed ore feeds the mint, making the settlement the pack's primary coin source.

Red-team: is this different from "any ore goes through Create crushing → coin"? Yes — the specific link here is that MineColonies quarries are the pack's designated large-scale ore supply (they're a whole production route), so the ore→coin chain has a natural colony feeder. The weave is: colony player runs quarries → ore stream → Create crushing player → minting. Three players, three roles. Survives.

REWORK: none on existing anchors. Three new ACCEPTED candidates add economy as a 3rd anchor: M-09 food trade, M-15 ancienttome documenting the danger→colony→tech loop, M-08 quarry→mint. All three advance the loop.






