# Phase 2 candidates — chunk-16

## createshufflefilter   [anchors: create (1)]
- LEAVE — single filter-item QoL utility for Create Deployers; no material surface and no coherent 2nd anchor without forcing it. Dossier concurs.
OK — connections sound (sole Create anchor is appropriate for a pure filter utility; no existing connections to flag).

## cubes_without_borders   [anchors: support (client QoL)]
- LEAVE — zero-content client windowing mod; sanctioned support role with nothing to route.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: galleon/fortress loot chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: naval dungeons already yield gold/valuables — seeding Numismatics coin (cog/spur) into their loot tables makes clearing a ship a direct economic payoff and bridges the exploration→economy leg of the loop
- from: galleon loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: sunken fortress chests plausibly carry a rare arcane artifact (spell book page / Ars source gem fragment / Occultism ritual component) — turns ocean exploration into a magic-reagent acquisition route
- from: galleon loot | via: loot-seed | to: survival (boss/danger) | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss drop gating a complex recipe — DASS has no boss entity, only loot chests; seeding a boss-key item without a boss enemy is thematically incoherent. The M-08/M-02 loot-seed candidates above are the right form.
REWORK: existing 2nd-anchor candidate in dossier says "any real second pillar would come from editing its loot tables into the economy elsewhere, not from the mod itself" and defers it — that deference is exactly what the loot-seed delivery method resolves. The dossier should be updated at Phase 3 to reflect M-08 + M-02 loot-seeds as the actual weave actions, not a future "elsewhere."

## alternate_current   [anchors: support (perf)]
- LEAVE — pure redstone-propagation performance patch; no items, no methods, nothing to weave. Sanctioned support role.

## cmpackagepipebomb   [anchors: create (1)]
- from: pipebomb (Create package trap) | via: recipe (crafting) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: M-09 is luxury goods → coin; a pipe bomb is not a sellable luxury. Tone clash: minting coin from a PvP prank trap would feel absurd.
- from: cmpackagepipebomb:tnt_rigged | via: loot-seed | to: survival (danger) | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-02 is mob-drop→magic/economy reagent; a trap item seeded into loot doesn't fit that motif (it's not a mob drop, and the delivery would be "find a booby-trap in a chest," which is a design minefield, not a weave). No motif covers this coherently.
- LEAVE — tiny novelty/PvP gag addon; 1 Create anchor is its ceiling. No coherent 2nd pillar.

## create_enchantment_industry   [anchors: create (1)]
- from: liquid XP (experience bucket fluid) | via: occultism:ritual or ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP is refined, storable arcane energy — routing a tank of it into an Occultism ritual or Ars apparatus as a fuel/catalyst makes the Create enchanting spine the supplier for magic ceremonies; "the factory feeds the sanctum"
- from: create_enchantment_industry:enchanted_book output | via: create_enchantment_industry:grinding (Mechanical Grindstone strips enchants) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: grinding is a disenchant step back to liquid XP, not a transmutation into a magic essence — the disenchant→XP fluid→ritual route is already covered by the ACCEPT above; this is a redundant step, not a new connection.
- from: liquid XP | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: M-17 is specifically FE-charging; liquid XP is not FE. The correct motif for XP as magic fuel is M-10 (arcane infusion pull), already accepted above. This would need a new motif (no-motif → reject-for-review).
REWORK: the dossier's 2nd-anchor candidate tags M-05 (native-method gating) for the XP→magic bridge — but M-10 (arcane infusion pull) is the tighter motif since liquid XP is being routed into a magic method as a reagent/fuel, not gating the magic mod's own machine. Worth correcting in the dossier.

## dragonlib   [anchors: support (library/API)]
- LEAVE — zero-content developer library; sanctioned support role.

## fishingreal   [anchors: survival (1)]
- from: live fish entities spawned by reel-in | via: config tie (createfisheryindustry bait_trap or naturalist:net) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fishingreal itself has no items or methods — it transforms loot→entities, but the weaving surface belongs to the fish-content mods (createfisheryindustry, Naturalist) that consume those entities. Routing "through fishingreal" is a null operation; the real weave must be authored on the content mods. Dossier guidance concurs.
- LEAVE — behavior tweak with no items or methods; any weave on fish-entity content must land on the mods that register fish, not here.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye / endrem:nether_eye / themed eyes | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: an Undead Eye assembled through an Occultism ritual (wither skull + undead reagent → crafted eye) gives a stuck explorer a guaranteed magic-gated craft path; the ritual cost ensures exploration intent isn't trivialized, and it weaves End-gate items into the magic spine
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most arcane-themed eye requiring an Ars apparatus ritual (source gems + rare catalyst → magical_eye) creates a prestigious craft route for the magic specialist; the End is now also a magic milestone, not only an exploration one
- from: endrem:corrupted_eye | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the sequenced-assembly path risks trivializing the exploration gate — if a player can just run a factory chain to make an Eye, the whole exploration-gated progression collapses. One or two craft routes (the magic ones above) is enough; a Create-chain path is a second craft shortcut too many. Keep Create out of End-gate items to preserve exploration pressure.
REWORK: dossier notes M-02 for the ritual path — M-11 (ritual/transmutation sink) is the tighter motif because endrem eyes are transmuted from themed drops via ritual, not M-02 (mob-drop→magic). Good to correct for Phase 3.

## domum_ornamentum   [anchors: decoration palette / MineColonies support]
- from: DO ornamental blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: framed/shingled DO blocks crushing back to their source stone/wood (lossy, +XP nugget) means the gorgeous colony architecture has a salvage path through Create; decorative inventory doesn't dead-end
- from: DO architects_cutter consuming Create-processed stone (andesite alloy casing block, Create bricks) | via: domum_ornamentum:architects_cutter | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the architects_cutter is DO's own method, not a Create method; routing Create-output blocks through it is a palette-bridge (builds look good) but not a Create-weave in the motif sense. M-04 specifically rides create:crushing; a DO cutter recipe is not M-04. No appropriate motif — no-motif → reject-for-review.
OK — existing MineColonies/support anchor is appropriate; crushing-back path (M-04) is the one clean weave.

## createaddition   [anchors: create (1)]
- from: createaddition:charging (FE → magic gear) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks / magic tool batteries plugged into a Create-powered tesla coil or charging station; the electrical spine powers the magic specialist's gear — "plug your wand into the grid"
- from: createaddition:seed_oil / bioethanol (crop fuel) | via: createaddition:liquid_burning → numismatics | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: liquid_burning consumes the fuel for FE; it's an energy-conversion method, not a trade route. Selling processed crop oil directly as a commodity is M-09, but liquid_burning is the wrong delivery — the economy link would have to be a numismatics price on the bottled oil itself, not routing it through liquid_burning. Weak mechanical fit; keep as a lower-priority candidate if M-09 economy weave for crop oils is pursued elsewhere.
- from: createaddition:seed_oil (processed crop oil) | via: recipe (numismatics sell) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: farmed seed oil is a processed agricultural intermediate — a farmer sells barrels of it to the Create-electrician who burns it for FE; a real commodity loop, and the economy arm prices it
REWORK: dossier M-05 candidate for magic (route a magic recharge through Create FE) — M-17 is the explicit motif for FE-charging → magic; M-05 (native-method gating) is for a mod's flagship item built in its own machine gated on Create parts. The magic-charging link is M-17, not M-05. Worth correcting.

## blood_n_particles_datapack   [anchors: support (cosmetic)]
- LEAVE — cosmetic combat particle/sound emitter; no items, no methods, zero weave surface. Sanctioned support role.

## buildguide   [anchors: support (QoL/client)]
- LEAVE — client-only build-assist overlay; no items, no gameplay effect, sanctioned support role.

## createfood   [anchors: survival, create (2)]
- from: createfood finished dishes (pizza, cake, pastry) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: multi-stage Create-processed dishes are a premium trade good; a baker specialization mints coin from complex food — the food production loop closes into the economy arm
- from: createfood:experience_cake / XP-linked food | via: create_enchantment_industry:grinding or filling | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the experience cake interaction with Create Enchantment Industry's liquid XP is a cute thematic link, but it's a within-Create connection (both are Create addons), not a cross-system weave; createfood already has Create anchored. No new pillar is added.
OK — survival + Create anchors are sound; economy (M-09) is the natural 3rd tie; no rework on existing connections.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux cart (oak_supply_cart etc.) | via: create:pressing or create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: M-05 is a mod's flagship item built in its own machine gated on Create parts — but astikorcarts has no machine of its own. Pressing/mechanical_crafting making cart components is just "more expensive crafting table" without a native method; the motif doesn't fit cleanly. Weak.
- from: astikorcartsredux reaper/plow (metal-bearing implements) | via: create:pressing (iron sheet → blade component) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: a plow blade or reaper cutting arm is welded from Create-pressed iron sheets — the farm implement's metalwork ties the early agrarian tier to Create's metalworking, making the cart a mid-game upgrade rather than day-one vanilla crafting
- from: astikorcartsredux supply cart | via: recipe (numismatics bounty) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: carts are tools, not luxury consumables — seeding them into numismatics as a coin-generating good doesn't fit M-09 (luxury → coin). Tone clash: selling a wooden cart as a premium commodity feels wrong; the economy edge would be the cargo it carries, not the cart itself.

## detect-afk-1.2.2   [anchors: support (QoL/server-admin)]
- LEAVE — behavior-only AFK detection utility; no content, no weave surface. Sanctioned support role.

## woodworks   [anchors: survival (1)]
- from: woodworks ornamental wood blocks (*_boards, *_bookshelf, *_chest) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: wood deco blocks crush back to planks/sawdust + XP nugget (lossy) — the decoration palette recycles through Create, and the wood-crafting web reads as one loop rather than a dead-end sink
- from: woodworks:sawmill recipe type | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Create's saw (create:cutting) already cuts logs → planks; overlapping it with woodworks:sawmill as a "cosmetic recipe-weave" doesn't add a new cross-system pillar — it's the same production step at the same tier, just two methods producing similar outputs. Not a cross-system weave; adding Create as a 2nd anchor this way is mechanically hollow.

## createimmersivetacz   [anchors: create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo rounds (bulk consumable) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced ammo is the archetypal processed-goods trade commodity — an arms dealer who runs the Create ammo pipeline sells rounds to combat players; the economy arm prices consumable military output
- from: createimmersivetacz:gun_barrel / firing_mechanism (precision parts) | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: createimmersivetacz already authors sequenced_assembly recipes (it's in the dossier's `made-by methods`); this is already a Create-anchor weave, not a new one. No new pillar gained.
OK — Create anchor via sequenced_assembly is sound; economy (M-09 ammo-as-commodity) is the clean 2nd weave.

## blockui   [anchors: support (library/UI API)]
- LEAVE — XML UI framework dependency for MineColonies; no items, no gameplay content. Sanctioned support role.

## letmefeedyou   [anchors: support (QoL)]
- LEAVE — behavior-only player-to-player food sharing QoL; no items, no methods. Sanctioned support role.

== CHUNK COMPLETE ==
