# Phase 2 candidates — chunk-01

## friendsandfoes   [anchors: survival (1)]

- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the claw of a skittering deep-sea creature makes a coherent spirit-fire reagent — crab = oceanic danger loot seeded into spellcraft
- from: friendsandfoes:crab_claw | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the rare reach-extending claw is a natural infusion catalyst for a mobility/reach glyph or upgrade — already brews a reach potion, so a magical infusion is a second use that reads "of course"
- from: friendsandfoes:crab_claw | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty board demands mob-drop curiosities — a crab claw from a skittering coastal beast is exactly the kind of field-harvest item a bounty wants; routes the survival encounter into coin
- from: hostile-mob loot (Wildfire / Iceologer / Illusioner drops) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hostile variants dropping bounty-eligible materials — the danger pressure converts to coin via the bounty arm of the economy
- from: friendsandfoes:copper_golem_head / copper_button set | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: deco-recycling of 3 copper blocks (buttons, rods) is a trivially thin M-04 hit on a tiny surface; the copper buttons are functionally vanilla, so crushing them to nuggets adds noise without real loop value — the crab_claw/magic edges are the coherent pair
- from: friendsandfoes:crab_claw (reach potion path) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: M-02 via spirit_fire and M-10 via enchanting_apparatus already claim the claw's magic slot; stacking a third magic route on one low-volume drop over-loads it — pick the two cleaner methods (spirit_fire + enchanting_apparatus) and leave the ritual slot for a mod with no other magic candidates

OK — friendsandfoes currently has 1 anchor (survival). The crab_claw magic-reagent and bounty/economy routes are its natural 2nd anchors. No existing connections to review.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — pure cosmetic particle/sound emitter; 184 "items" are particle-effect holders with no world presence, no drops, no loot table content (loot=yes in the auto-digest but the items are minecraft namespace blood particle holders, not collectible drops). Zero material surface to route through any method.

## gamediscs   [anchors: survival/flavor (1)]

- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: power-read kills this — the gaming console is a pure novelty toy at survival-everyday tier; the processor/redstone_circuit are theme-flavor components (a retro arcade gadget), and gating them behind Create mechanical_crafting imposes a tech-spine dependency on a downtime easter-egg. Depth should scale with power; a toy is explicitly not a power-bearing item. Forcing it reads as contrivance.
- from: gamediscs:game_disc_* | via: loot-seed | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: discs already drop from specific kills (skeleton kills bee/slime/frog/rabbit) — that IS the survival interaction loop and it works as-is. No cross-system seeding is coherent; there's no motif that fits "add a game disc to a dungeon chest" in a way a player would call purposeful.
- LEAVE — gamediscs is a sanctioned novelty/flavor item with no coherent production or economy surface worth weaving; all candidate routes either under-scale (toy forced through a complex method) or add noise. The existing kill-to-disc gimmick is the whole loop.

## smartbrainlib   [anchors: support/library (1)]

- LEAVE — zero-content code library (AI framework); no items, no blocks, no methods. Nothing to weave.

## alexsmobs   [anchors: survival (1)]

- from: alexsmobs:ambergris | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a rare sea-creature secretion — already a real-world reagent for perfume and preservatives; routing it as an arcane infusion catalyst for potion-longevity or fluid-related glyphs is sensible and the player immediately understands why the whale-dropped wax goes into a magic altar
- from: alexsmobs:ender_residue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender_residue from End-space creatures is thematically spirit-adjacent; transmuting it in spirit fire makes instinctive sense and routes exploration-danger into the Occultism web
- from: alexsmobs:bear_dust | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a ground bear byproduct as a low-tier imbuement ingredient — "bear essence" is perfectly understandable in a magic context; keeps mob-combat meaningful at the everyday tier without over-gating
- from: alexsmobs:void_worm_beak (boss-tier) | via: create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Worm is the pack's End-space boss; its beak as a boss-key gating ingredient for a high-tier Create component (e.g. an advanced mechanical arm or precision device) is a textbook M-15 — danger output unlocking tech depth. The void worm's scale makes this feel earned.
- from: alexsmobs:banana / alexsmobs:banana_slug_slime | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Alex's tropical drops (banana, slug slime) into Farmer's Delight cooking chains — banana dishes or a slime-thickened stew — is a clean processing pull that cements the survival anchor with a second processing node
- from: alexsmobs:ambergris | via: create:milling | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: ambergris is already claimed for the magic infusion route (M-10 via enchanting_apparatus) which is the stronger, more coherent use. Milling ambergris into a generic craft ingredient dilutes the reserved reagent role; don't double-spend the scarce whale drop on a weaker Create intermediate when the magic route is cleaner.
- from: alexsmobs:void_worm_beak | via: occultism:ritual | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: the beak is already accepted as an M-15 boss-key gate for Create; routing it also through an Occultism ritual splits the boss-key identity across two systems — dilutes both. One boss drop should have one primary key role; if a second magic use is wanted, use a *different* Void Worm drop, not the beak.

REWORK: alexsmobs has no existing authored connections yet (0 made-by methods, vanilla only) — no rework needed. The new candidates above are all additive.


