# Phase 2 candidates — chunk-05

## create_train_parts   [anchors: aeronautics (1)]

Power-read: pure deco/functional fittings for Create trains — sliding windows, steps, slides, track crossings. All crafted from vanilla/Create materials (andesite/brass/copper/glass). Everyday-tier; no processing methods; loot=yes but only their own blocks.

Method-pull: the items use vanilla mats already; the brass/copper variants could be routed through Create pressed sheets (M-04 deco→crush is lossy/recycle, not construction). No living material outputs to pull through magic or economy methods. The loot=yes flag is just the block drops (breaking gives back the block).

- from: create_train_parts:brass_sliding_window / train_step_brass | via: recipe | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is a recycle/crush-back motif (deco → raw + XP); here we'd be going *forward* (raw → deco) which is just normal crafting, not M-04. There's no coherent direction to route deco parts for a 2nd anchor — the train parts ARE the end product, not an intermediate.
- from: create_train_parts crossing / arm_extender | via: loot-seed | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: these blocks have no loot tables with foreign drops; loot=yes here just means the block itself drops — no reagents, no economy goods seeded.

REWORK: OK — single aeronautics anchor is correct for pure train-detailing blocks. No forced 2nd anchor; the dossier's "WEAK M-04-adjacent" note is right to leave it.

## betterendisland   [anchors: survival (1)]

- LEAVE — zero items, zero blocks, zero loot tables; structure overhaul only. No content surface to weave.

## gravestone   [anchors: survival (1)]

Power-read: death-QoL utility. Registers a gravestone block + obituary item. Loot=yes but loot is just items the player already owned; no new drops. The obituary is cosmetic (death-info snapshot).

Method-pull: the gravestone block is inert (no fluid, no material). The obituary is an info item. Nothing to route through Create/magic/economy methods. Forcing "craft the gravestone via Create" would gate a QoL utility behind the tech tree — violates "never gate basic/everyday components behind complex recipes."

- from: gravestone:gravestone | via: recipe | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: gating a death-recovery utility block behind a Create recipe is anti-player (it's a QoL safety net, not a progression item); tone clash with the somber-functional vibe; no motif covers this.
- from: gravestone:obituary | via: recipe | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-02 is mob-drop reagent → magic; the obituary is not a mob drop and has no thematic adjacency to Ars/Occultism rituals. No "of course" moment here.

REWORK: OK — survival-only anchor is correct for a death-QoL utility.

## mysterious_mountain_lib   [anchors: support/library (1)]

- LEAVE — zero items, zero blocks, zero loot, zero recipe methods. Pure code library for MMF-Group mods. Genuine zero-surface.

## imfast   [anchors: support/QoL (1)]

- LEAVE — zero items, zero blocks, zero loot. Server-side movement-validation mixin. Genuine zero-surface; functionally serves aeronautics as a fix, not a wireable resource.

## glitchcore   [anchors: support/library (1)]

- LEAVE — zero items, zero blocks, zero loot. Loader-abstraction library backing Serene Seasons and other Glitchfiend mods. Genuine zero-surface.

## immersive_paintings   [anchors: support/decoration (1)]

Power-read: 4 items (painting, glow_painting, graffiti, glow_graffiti). All crafted from vanilla materials. No foreign material outputs; no loot. Pure player-expression canvas.

Method-pull: the 4 items are end-product cosmetics, not intermediates. No fluid/essence/ore output to route. The Exposure compat addon (photograph-aging M-35) is the closest thematic neighbor, but immersive_paintings itself doesn't output photographs.

- from: immersive_paintings:glow_painting | via: recipe | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: "glowing paint as an arcane reagent" has no "of course" hook — glow comes from the player's image, not from a worldgen material. Tone clash with the utility/expression vibe; forcing an imbuement step onto a cosmetic canvas feels punitive rather than thematic.
- from: immersive_paintings:painting frame | via: create:pressing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is recycle (deco → raw + XP nugget), not fabrication; pressing a painting into a frame is the wrong direction. There's no logical "painting frame is crushed back to sheet" story; and paintings don't produce any useful byproduct.

REWORK: OK — decoration/support anchor is correct. No coherent 2nd anchor without forcing.

## supplementaries   [anchors: create, survival (2)]

Already ≥2 pillars; inbound weaves on create:haunting, create:mixing, create:splashing, farmersdelight:cutting. Rich cross-woven mod.

New link candidates:
- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries already anchors Create through haunting/mixing/splashing; adding milling of flax seeds is redundant, not a 2nd-anchor contribution. M-12 is already covered by existing inbound weaves. No new anchor added.
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: ash is a combustion residue — alchemically it's a purifying mineral base; imbueing ash (from Create haunting/burning) as a catalyst or filler in an Ars apparatus recipe ties the Create combustion byproduct into the magic spine without double-spending any reserved reagent. power=everyday (ash drops freely from the haunting chain); depth=one light step as required.
- from: supplementaries:candy (c:foods/candy) | via: minecolonies (colony request) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: candy is a sugar-derived consumable; MineColonies citizen happiness/child happiness is a documented colony mechanic. A colony food-request for candy (and its flax/sugar supply chain) creates a colony route that pulls the supplementaries sweet-food output into the economy's labor pillar — a demand node that doesn't zero out.

REWORK: OK — existing create/survival connections are sound; the haunting→ash loop and the FD:cutting integration are coherent. The latent M-09 economy note in the dossier is correctly left unacted on (M-09 retired).

## valarian_conquest   [anchors: survival (1)]

Power-read: 319 items (faction gear, shields, banners, citizenship items, mercenary spawn items), 76 blocks (faction stations — armorsmith, builder, barber_surgeon, faction-themed structural blocks). loot=yes (faction structures drop gear). No registered recipe methods; vanilla crafting only currently.

Method-pull:
- Faction gear (shields/armor/weapons) are mid-tier combat items. The armorsmith/builder/barber_surgeon stations are native workstations — these are M-05 candidates if gated on Create inputs.
- Citizenship items gate faction allegiance — unique progression items that could be loot-seeded.
- Mercenaries = combat labor; factions = territory control. Both feed M-34 (combat supply) and M-33 (service-for-hire).

- from: valarian_conquest faction gear (shields/armor) | via: recipe modification | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: faction armor forged at the armorsmith station should require Create-processed metal plates/sheets — an industrializing faction prepares for war with manufactured steel; the station natively gates the gear, just needs Create parts as inputs. Scales: mid-tier (one extra Create step, not a deep chain).
- from: valarian_conquest:*_citizenship items | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: faction citizenship tokens drop from clearing a faction keep/outpost — you earn allegiance by combat (M-34 combat-route supply: the combat specialist farms the faction encounter and trades citizenship items to players who want the faction buff without fighting). Faction allegiance as a commodity that flows from combat specialist to builder/crafter.
- from: valarian_conquest mercenary hire | via: config/mechanic | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a mercenary is paying for combat labor — a direct M-33 service-for-hire moment in the player economy (a combat-specialist player can "lend" mercenaries or escort services to non-combat players who can't clear a faction structure). No NPC coin faucet — the payment is player-to-player emergent.
- from: valarian_conquest:*_banner | via: supplementaries:flag_from_banner | to: survival (decoration/territory) | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: faction banner → supplementaries flag is a cool flavor link, but it maps to no motif (it's purely cosmetic territory marking with no loop consequence). no-motif → reject for review.

REWORK: dossier's M-09 candidate (sell faction gear to Numismatics) is correctly flagged MED under M-09, which is now retired. The M-05 candidate in the dossier is correctly flagged WEAK, but the armorsmith station is a real M-05 surface; accepting it above with appropriate scope.

## mushroomquest   [anchors: survival (1)]

Power-read: 352 items (foraged mushrooms — common/rare/mythical), 48 blocks (foraging stumps, glowshrooms, mushroom biome features), 32 biome-modifiers, loot=yes. Large food+ingredient pool. No registered recipe methods.

Method-pull:
- Edible mushrooms → farmersdelight:cooking / extradelight:melting_pot/oven → prepared dishes (M-12 processing chain)
- Effect-bearing/deadly caps → occultism:spirit_fire / ars_nouveau:imbuement → transmutation reagents (M-11/M-10)
- Biome/season-gated foraging (Serene Seasons compat noted) → M-16 seasonal reagent if a specific mushroom is season-locked and feeds a machine
- Rare/mythical caps → M-34 combat-supply (clearing rare biome structures to acquire mythical mushroom spawn locations; the forager specialist trades caps to magic producers)

- from: mushroomquest edible mushrooms (common) | via: farmersdelight:cooking / extradelight:melting_pot | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraged fungi go straight into the cooking-pot for soups and stews — the same chain Farmer's Delight builds. A mushroom stew route via FD:cooking or extradelight:melting_pot feeds the food-processing arc without any forced logic.
- from: mushroomquest rare/mythical caps (e.g. agarikon, angels_wing) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mushrooms with potent or toxic effects are transmuted in spirit fire into a magical reagent or essence — alchemical mushroom-to-spirit-essence is a deep fantasy trope ("of course" moment). Mid-tier: rare mushrooms, one ritual step, no deep chain needed.
- from: mushroomquest season-gated biome mushrooms | via: create:milling | to: create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a mushroom that only spawns in autumn biomes (Serene Seasons compat is noted in dossier) is milled into a seasonal spore-dust that gates a Create mixing recipe — scarcity-through-season ties the survival pressure lever directly to production. One light step.
- from: mushroomquest:miso_soup_block | via: minecolonies composting | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: miso soup block is a cosmetic/decoration block (the soup container), not a consumable input — composting it is a stretch. The colony route for mushrooms is more naturally through foodstuff demand than composting soup blocks. No clean "of course" hook.
- from: mushroomquest mythical/deadly caps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: M-11 (occultism:spirit_fire) is the cleaner and already-accepted transmutation path for deadly/organic matter; M-10 (arcane infusion) is better reserved for non-organic material refinement. Two magic routes for the same material is overkill — M-11 wins for organic drops.

REWORK: dossier's M-09 "sell rare mushrooms to Numismatics shopkeeper" is retired; correctly not accepted. The M-11/M-10 dossier candidates partially accepted above with M-11 preferred.

## wits   [anchors: support (1)]

- LEAVE — zero items, zero blocks, zero loot. Server-side /wits command only. Genuine zero-surface utility.

## tide   [anchors: survival (1)]

Power-read: 402 items (100+ fish species as live/cooked forms + tackle), 7 blocks (angling table, fish display, crates, jelly torches), 74 biome-modifiers, 82 c:tags, loot=yes. Very large food/ingredient stream. Already woven into farmersdelight:cutting.

Method-pull:
- Raw fish → FD:cooking / extradelight:oven → cooked dishes (M-12, already partially done via cutting)
- Rare/biome-locked fish → M-30 regional scarcity (void fish, abyss_angler only catchable in deep ocean; forces trade to players without ocean access)
- Abyss/void catches → occultism:spirit_fire / ars_nouveau:imbuement (M-02/M-11 — exotic creature as magic reagent)
- Fish as Serene Seasons-gated catch → M-16 seasonal reagent if a winter/autumn fish feeds a Create/magic method
- Fish meal/processing byproduct → M-32 byproduct→input (crush fish scraps → bone meal / fertilizer cycle)

- from: tide raw fish (biome-locked species) | via: GTMOGS regional ore-gen analogously; emergent trade | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: an abyss_angler is catchable only in deep ocean biomes — an inland player literally cannot catch it; they must trade with a coastal specialist. The regional scarcity gate is baked into the biome-modifier system (74 biome-modifiers). This is M-30 on the fishing layer: ocean specialist → inland crafter dependency.
- from: tide exotic fish (abyss_angler, void/nether fish) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a deep-sea creature with an internal light source transmuted in spirit fire into an aquatic spirit-essence — "of course" for occult + deep-sea monster. One spirit-fire step.
- from: tide raw fish (seasonal) | via: create:milling | to: create | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a winter-only fish (Serene Seasons compat noted in dossier) is milled into dried fish meal — a seasonal Create input that feeds a mixing recipe for preservation or chemical compound. Ties the fishing + seasons pressure to the tech spine.
- from: tide fish scraps/offcuts (FD cutting byproduct) | via: create:milling | to: create | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: the cutting table already produces fish offcuts; milling them into bone meal / fishmeal fertilizer closes the processing loop. Everyday tier — one light step, the same material the player already has.
- from: tide rare fish | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-02 (mob-drop sink via spirit_fire) already accepted as the magic weave for exotic fish. M-10 (arcane infusion) would double up the same material into two magic methods — redundant. Prefer a single clean magic route.

REWORK: dossier's M-09 "sell rare fish to villagers/Numismatics" is retired. M-12 listed in dossier as "route fish through cutting/cooking" is partially present (FD:cutting inbound weave exists); the milling byproduct M-32 candidate above extends that rather than duplicating it. Connections sound on the existing FD:cutting side.

## necronomicon   [anchors: support/library (1)]

- LEAVE — zero items, zero blocks, zero loot. Pure code library for ElocinDev mods (opacpvp dependency). Genuine zero-surface.

## netmusic   [anchors: support/QoL (1)]

Power-read: 4 blocks, 6 items — music_player, cd_burner, computer, music_cd, big_megaphone, music_player_backpack. loot=yes. Already woven through touhou_little_maid:altar_recipe_serializers.

The only possible weave surface: music_cd as a sellable/tradeable commodity. But "sellable" is the ambient endpoint (M-09 retired). Is there a demand-gating route? A music_player_backpack on an airship (M-33 service?) — too contrived. Could music infrastructure gate a colony district? No method for that. The TLM altar weave already gives it a 2nd-anchor touch.

- from: netmusic:music_player_backpack | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 requires the mod's OWN machine/station to gate the flagship item on Create parts. The music_player_backpack is assembled at a crafting table, not in the cd_burner; routing it through mechanical_crafting would be an arbitrary cost escalation, not a "native method gating" — there's no thematic logic tying a music backpack to a mechanical assembly line.
- from: netmusic:music_cd | via: touhou_little_maid:altar_recipe_serializers (existing) | to: support | motif: (existing weave) | verdict: already present — leave as-is.

REWORK: OK — existing TLM altar weave is the coherent connection. No forced 2nd anchor.

## rottencreatures   [anchors: survival (1)]

Power-read: 30 items (mob drop items + heads), 20 blocks (mob head blocks, treasure chest, tnt barrel), loot=yes. Themed drops: frozen_rotten_flesh, magma_rotten_flesh, corrupted_wart, mob heads. No registered methods.

Method-pull:
- frozen_rotten_flesh → occultism:spirit_fire → cold/undead essence (M-11 ritual/transmutation sink)
- magma_rotten_flesh → create:haunting → soul-fire output / occultism:spirit_fire (M-19/M-11)
- corrupted_wart → ars_nouveau:imbuement / occultism:spirit_fire → reagent (M-02/M-10)
- treasure_chest from Dead Beard → loot-seeded foreign goods (M-34 combat-supply: the pirate loot chest feeds the combat-supply chain)

- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: frozen undead flesh burned in spirit fire yields a cold-essence reagent — the biome-themed kill loot becomes a magic input. Thematically tight: Frostbitten (cold biomes) → cold spirit component.
- from: rottencreatures:magma_rotten_flesh | via: create:haunting | to: create | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: magma rotten flesh (from a volcanic undead) passes through soul-fire in the haunting tunnel and outputs a combusted soul-infused remnant — Create's soul-fire transmutation applied to a volcanic mob drop. The "haunting" flavor (soul fire touching dead things) is an "of course" moment.
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted nether wart from an undead source imbued in an Ars apparatus to produce a corruption-type magic reagent — wart's existing alchemical identity (nether wart as the brewing base) plus the undead-corruption theme make this "of course."
- from: rottencreatures:treasure_chest (Dead Beard drop) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: the Dead Beard pirate captain is a rare beach spawn who drops a treasure chest — seed this chest with a Numismatics coin or a regional-currency token; the combat specialist who hunts the pirate brings treasure back to the player economy (M-34 combat-route supply: boss drop feeds the economy's material side, no NPC faucet since the loot is the existing chest contents).

REWORK: dossier's M-02/M-11 candidates are the same as accepted above. The "Create drops via create:haunting/crushing" candidate in the dossier is accepted above as M-19 (haunting specifically, the correct Create soul-fire motif).

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

- LEAVE — zero items, zero blocks, zero loot. Drop-merge behavior mod; no recipe or material surface. Genuine zero-surface.

## bagus_lib   [anchors: support/library (1)]

- LEAVE — zero items, zero blocks, zero loot. Code library for baguchi's mods. Genuine zero-surface.

## followersteleporttoo   [anchors: support/QoL (1)]

- LEAVE — zero items, zero blocks, zero loot. Behavior-only pet teleport fix. Genuine zero-surface.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — zero real items (the 184 "items" are particle-holder entries, not obtainable), zero blocks, zero actionable loot. Cosmetic particle emission only. Genuine zero-surface.

## multipiston   [anchors: support/MineColonies dep (1)]

- LEAVE — 1 block (multipistonblock), 1 item (multipistonblock), loot=yes but only the block itself drops. Internal MineColonies/Structurize dependency; not surfaced to players. No coherent independent weave.

== CHUNK COMPLETE ==
