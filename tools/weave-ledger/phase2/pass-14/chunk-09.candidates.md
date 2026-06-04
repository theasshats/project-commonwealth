# Phase 2 candidates — chunk-09

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single music disc (one item, no material flows, no loot table weave target). The disc IS the loot=yes surface but it is a joke easter egg with zero connective surface; any forced edge would be noise. Genuine zero-weave case within flavor content.

## wits   [anchors: support/debug (1)]
- LEAVE — pure server-side command utility; 0 blocks, 0 items, loot=no. No material surface whatsoever. Genuine zero-content library/behavior mod.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt is a mundane mineral — of course you'd crush it in a mill rather than hand-smelt it; doubling the yield from the ore ties the pantry to the Create spine immediately.
- from: expandeddelight:salt_ore (c:dusts/salt) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Millstone grinds rock-salt to culinary dust — a one-step processing-chain pull that anchors every salt-dependent recipe to rotary power.
- from: expandeddelight:cheese_wheel / goat_cheese_wheel (aged) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged cheese is time-gated (cask hours), scarce by design, and regionally flavored — exactly the profile of a luxury trade good; selling it for coin rewards patient farmers.
- from: expandeddelight:cranberry / asparagus / sweet_potato (seasonal crops) | via: create:milling → mixed reagent | to: magic | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Serene Seasons gates which crops are in-season; a Millstone-ground seasonal crop meal fed into an Ars imbuement or occultism ritual gives magic a living calendar dependency — "harvest in autumn, enchant in winter."
- from: expandeddelight:chili_pepper (c:foods/chili_pepper) | via: extradelight:juicing → hot sauce | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Juiced chili → hot sauce is a finished processed good; selling it via Numismatics gives even a basic crop a coin exit and rewards the Juicer investment.
- REWORK: existing "survival only" anchor is correct as-is — the two accepted weaves above (Create ore-crushing + economy luxury) are the new second pillars; no existing connections to flag as weak.

## libipn   [anchors: support/library (1)]
- LEAVE — pure GUI/config library; 0 blocks, 0 items, loot=no. No material or mechanic surface. Genuine zero-content library.

## creativecore   [anchors: support/library (1)]
- LEAVE — pure code library (GUI API, packet/event systems); 0 blocks, 0 items, loot=no. No material surface. Genuine zero-content library.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A crustacean's claw transmuted in spirit-fire to extract a reaching-essence fits Occultism's body-horror distillation aesthetic; the crab-claw reach potion already implies its magical property — spirit-fire just formalizes it as a reagent.
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-02 (spirit_fire) already owns this slot and is the cleaner fit; stacking an Ars imbuement on the same item is redundant — pick one magic method, spirit-fire wins on theme.
- from: friendsandfoes:copper_golem_head / copper buttons (copper deco) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Copper decorative blocks crushing back to copper nuggets/scrap is entirely coherent — the golem is made of copper, so recycling it through a Crushing Wheel is the obvious fate of a decommissioned golem.
- from: Wildfire / Illusioner loot | via: loot-seed → bountiful board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Rare mob-vote bosses dropping coin-adjacent bounty rewards (post M-14 provisional) gives combat a direct economy exit; the Wildfire's fire-shield drops or Illusioner's loot are unusual enough to justify a bounty price premium.
- from: friendsandfoes:crab_claw | via: create:haunting | to: Create | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: Haunting (soul-fire transmutation) on a crab claw doesn't have a clear thematic product — what haunted crab do you get? Theme clash; spirit-fire (M-02) is the better magic-exit for this item.
- REWORK: dossier marks M-04 (copper deco → Create) as WEAK — I concur it's thin but the copper golem origin makes it thematically coherent enough to be borderline ACCEPT; the WEAK label should stay until a playtester confirms it isn't clutter.

## biolith   [anchors: support/library (1)]
- LEAVE — worldgen API library; 0 blocks, 0 items, loot=no. Pure biome-placement plumbing; no material surface. Genuine zero-content library/behavior mod.

## rechiseledcreate   [anchors: Create, decoration (2)]
- OK — connections sound. The mod IS the Create↔decoration bridge: the Mechanical Chisel is a native Create kinetic block (automatable with SU), and its entire content is Create decorative variants. Two pillars are already solid. No rework needed.
- from: rechiseledcreate:*_window_panes / chiseled andesite variants (decorative blocks) | via: numismatics sell / trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; selling decorative blocks via coin is a stretch — they have no scarcity driver. Not a strong second weave beyond the existing two pillars. Leave at 2 pillars.
- from: rechiseledcreate bulk deco blocks | via: create:crushing → rubble/gravel | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mod is already in the Create pillar; adding M-04 crushing within the same pillar adds no new pillar count; internal depth, not a cross-pillar weave.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (c:ores/uranium, c:ingots/ processed) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Uranium is deeply scarce and regionally spawning — a player who specializes in the nuclear tier produces refined uranium nobody else has; minting a fraction into coin makes the reactor build self-funding and the uranium vein a trading asset.
- from: createnuclear:steel (c:ingots/steel) | via: numismatics sell | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Steel is a generic industrial alloy multiple mods want (Create Ironworks, TFMG, etc.); nuclear's steel production via the coking/blast chain is a mid-tier commodity supply line — coin exit rewards the industrial specialization.
- from: createnuclear:steel (c:ingots/steel) | via: aeronautics hull/airframe recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Airship hulls need load-bearing metal — steel plate is the canonical structural material; nuclear's steel output feeds the aeronautics supply chain, linking the two endgame Create systems.
- from: createnuclear:uranium / reactor fuel | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: clash | verdict: REJECT | reason: Irradiated uranium fed into a demonic spirit-fire is thematically incoherent — nuclear physics and Occultism's demonology don't share a lore frame. Forced pairing.
- from: createnuclear:lead (c:ingots/lead) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Lead as a magic catalyst has no established lore bridge here; Ars Nouveau's aesthetic is nature-arcane, not heavy-metal alchemy. Tone mismatch; would confuse players.
- from: createnuclear:autunite (glowing mineral block) | via: create_new_age:energising | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Autunite is a uranium-ore mineral that glows — charging a Create New Age capacitor/focus with autunite as a catalyst (energising recipe) makes physical sense; radioactive minerals energizing electrical components is coherent industrial fiction.
- REWORK: no existing cross-pillar connections to flag; existing Create-spine anchor is correct.

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager capture) | via: config tie → MineColonies colony stocking | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: The synergy with MineColonies (carry a villager to a colony) is real and useful, but it routes through no recipe or registered method — it's a behavioral/config interaction, not a method-routing. No accepted motif covers "mob-transport enables colony building." Reject for review; a new motif would be needed.
- from: moblassos:hostile_lasso (captured monster) | via: occultism:ritual → sacrifice | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Ritualistic use of a captured monster is thematically plausible (Occultism does use sacrifices), but the lasso itself has no item registry — the mob is stored inside the item NBT, not a tradeable material. There's no "filled lasso" recipe input that a ritual could consume. The material surface doesn't exist at the recipe level.
- from: moblassos golden/diamond lasso | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: Lassos are utility tools, not mod flagship machines. Gating a transport convenience behind a Mechanical Crafting recipe adds friction to a QoL item disproportionate to its power. M-05 is for flagship machines, not convenience tools.
- LEAVE — no coherent second-pillar method edge survives red-team. The mod is a transport utility with no material flows and no loot table (loot=no). All candidate routes either lack an accepted motif or impose disproportionate complexity. Genuine leave case within non-zero content.

== CHUNK COMPLETE ==








