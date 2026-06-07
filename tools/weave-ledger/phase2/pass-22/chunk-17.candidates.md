# Phase 2 candidates — chunk-17

## puzzleslib   [anchors: support/library (1)]
LEAVE — pure code library; 0 items, 0 blocks, no recipe-types, no gameplay methods. Genuine zero-surface; nothing to weave.

## smartbrainlib   [anchors: support/library (1)]
LEAVE — pure AI-framework library; 0 items, 0 blocks, no recipe-types, no gameplay methods. Genuine zero-surface.

## cloth_config   [anchors: support/library (1)]
LEAVE — config-screen API library; 0 items, 0 blocks, no methods. Genuine zero-surface.

## create_pattern_schematics   [anchors: Create (1)]
- from: pattern_schematic (build-automation tool) | via: recipe (crafting table) | to: economy | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: no-motif — the schematic is an internal Create build-tool with no material value to trade or route; forcing a Numismatics price or bounty on a build-aid item is incoherent to a player. Leave at 1 anchor.
LEAVE — Create-internal build tooling with no foreign material join key; the only items are the schematic tools themselves, not sellable outputs. One anchor (Create) is appropriate; no coherent second pillar.

## createaddition   [anchors: Create (1)]
- from: createaddition:charged magic gear (FE → magic item) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the electrical layer charges Iron's Spellbooks focus/wand/battery via the tesla coil or charging bench — Create electricity fuels magic power rather than the two systems running parallel
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning + numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: processed crop-oil is a sellable fuel commodity — farms produce seed oil, alchemists/travelers buy it as portable fuel, the economy distributes it
- from: createaddition:electrum_ingot | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: mid | tone: ok | verdict: REJECT | reason: electrum is already a Create-side material (produced via Create-Addition's own recipes); crushing it back is a round-trip within the same system, not a cross-system link. No net weave value.
- from: createaddition:bioethanol | via: M-13 fuel → aeronautics engine | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: bioethanol is a crop-derived liquid fuel — airships running on farm output is a tight loop: farms → Create-Addition distillery → bioethanol → fuel tank; the economy distributes it
REWORK: existing dossier 2nd-anchor candidate flags "survival/economy via liquid_burning of crop oils [WEAK]" — the seed-oil/economy link is ACCEPT-grade (M-09 is established), not weak; the dossier underweights it. Recommend upgrading to accepted candidate.
OK — charging→magic (M-17) and fuel→aeronautics (M-13) are the sound second and third anchors; together they put createaddition at 3 systems (Create + magic + economy/aeronautics), fitting the "every mod ties into ≥2" goal.

## lootr   [anchors: support/QoL (1)]
- from: lootr instanced structure loot | via: loot-seed (seed weave-relevant drops into lootr-backed chests) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: lootr is a loot-fairness wrapper — it reads whatever loot tables already exist; seeding economy drops is a choice made on the *source* structure mod's loot tables, not on lootr itself. This would be a false attribution. The action belongs to the structure mod whose tables get edited.
LEAVE — multiplayer loot-fairness mechanic; it wraps existing tables but adds no material of its own. The weave candidate belongs to the structure mods downstream, not to lootr.

## followersteleporttoo   [anchors: support/QoL (1)]
LEAVE — behavior-only (0 items, 0 blocks, no recipe-types); pure teleport-follow logic. Nothing to weave.

## dungeons-and-taverns-v4.4.4   [anchors: survival/exploration (1)]
- from: structure vault loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the pack seeds coin (numismatics:spur / bevel) into D&T dungeon and tavern vault loot — rare finds from deep-delving become currency that feeds the player economy; fighting → coin is the scarcity→economy arc in one drop
- from: trial vault loot (ominous_trial_key vaults) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ominous trial vaults seed rare magic reagents (e.g. Ars source gem, Iron's arcane essence) as exclusive drops — the hardest encounter yields magic components no other route provides as easily; combat pressure → magic production
- from: tavern cartographer trade | via: villager trade → numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); the tavern cartographer sells maps for emeralds, not coin. Threading emerald→coin is speculative. Flag for 0.9 economy pass but do not accept now.
REWORK: dossier labels the economy candidate "WEAK" — the loot-seed path (M-08) is an ACCEPT-grade candidate for a structure mod with loot=yes; reserve WEAK for speculative round-trips, not for a well-established delivery mechanism. OK — flagged.

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream stat milestones (maid HP/armour/attack growth from food variety) | via: config tie to food mods | to: survival (food-diversity pressure) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is specifically seasonal reagents; stat growth from food variety is not a seasonal/lunar gate. No matching motif for "stat-milestone on diet diversity." no-motif → REJECT-for-review.
- from: solmaiddream maid stat growth | via: cross-mod food pool (every food mod the pack ships feeds this automatically) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: M-12 is "processing-chain pull" — routing a raw crop through a processing method into a finished good. Maid stat growth is passive stat accumulation from diet, not a processing chain. Motif mismatch; no-motif for this specific pairing.
LEAVE — tiny flavour addon; its food-diversity mechanic already rides the existing survival/food pool with no additional recipe edge needed. One anchor (survival) is appropriate. Forcing a second edge would be artificial; the dossier correctly identifies this.

## almostunified   [anchors: support (1)]
LEAVE — recipe-graph infrastructure; it operates on the recipe graph itself, produces no items, has no methods. Genuine support role. The galosphere/silver GOTCHA (never unify galosphere:*silver* as c:ingots/silver — it's actually palladium) stands as the operative note.

## simplehats   [anchors: support/cosmetic (1)]
- from: rare hats (endgame-tier cosmetic collectibles) | via: loot-seed (seeded into boss/dungeon loot tables) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare hats seeded exclusively into high-difficulty boss or deep-dungeon loot become collectible luxury goods — players trade or commission them for coin, feeding Numismatics as a vanity economy sink
- from: simplehats:custom_hatscraps (unwanted hat → scraps → upgrade bags) | via: simplehats:custom_hatscraps | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the scrap-recycle loop is internal to simplehats (hats → scraps → bags → hats); it doesn't cross into the Numismatics economy. The delivery for economy is via loot-seed + trade value, not through the scraps method.
OK — connections sound after the loot-seed ACCEPT. Simplehats gains economy as a 2nd anchor.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (finished luxury drinks with buffs) | via: numismatics sell / palm_bar_mixing output | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a beachside bar mixes exotic cocktails from coconut + tropical fruit; players sell them at market stalls — a coastal luxury trade good flowing from beach biomes into the player economy
- from: beachparty:mini_fridge (ice/packed-ice producer) | via: beachparty:mini_fridge_freezing → Create coolant chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mini fridge is a no-power early convenience; routing it as a Create input creates a non-obvious dependency on a vacation mod for a basic Create coolant. Tone: a tropical bar appliance feeding Create's industrial chain is thematic mismatch. The pairing doesn't survive red-team.
- from: beachparty:coconut | via: create:milling or extradelight:mortar | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coconuts milled or mortared yield coconut fiber/oil — a tropical crop processed through Create/kitchen chain into a cooking oil or fiber; links beach biomes to the Create food-processing spine
OK — after the two ACCEPTs (economy via M-09 cocktails, Create processing via M-12 coconut), beachparty sits at 2 anchors (survival + economy/Create).

## mcwwindows   [anchors: support/decoration (1)]
- from: stone parapet / arrow-slit variants (stone deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: stone parapets and arrow-slits crush back to raw stone / gravel + an XP nugget — the pack's deco-recycle rule; a builder who overordered doesn't lose value entirely
- from: mcwwindows mosaic glass (dyed-glass deco) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: mosaic glass crushing back to sand/glass is a valid M-04 pattern, but it's redundant with the stone-parapet ACCEPT — both are M-04 deco-recycle on the same mod. One representative ACCEPT is enough; the second doesn't add new information or a cross-system link.
REWORK: dossier notes M-04 as "[WEAK]" for stone parapets — given M-04 is a fully established motif for deco-recycle, WEAK undersells it. This is a standard ACCEPT-grade candidate for any stone/metal deco mod; flag dossier for update.

## rightclickharvest   [anchors: support/QoL (1)]
LEAVE — behavior-only interaction hook; 0 items, 0 blocks, no recipe-types. Nothing to weave.

## create_new_age   [anchors: Create (1)]
- from: create_new_age:thorium_ore (scarce regional ore, 2 biome-modifiers) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: thorium is a regionally scarce ore processed through Create crushing; the refined output is minted into high-denomination coin — a nuclear-age metal feeding the scarcity→economy arc
- from: create_new_age energising method (FE + rotation → energised item) | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the Energiser charges magic focuses/wands (Iron's Spellbooks / Ars gear) with electricity — Create's nuclear/electric tier feeds magic power, so specializing into the reactor unlocks stronger spells
- from: create_new_age:corium (reactor waste product) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Corium — irradiated, unstable reactor slag — is a natural arcane catalyst; infused in the Enchanting Apparatus or spirit-fired, it yields a volatile magic reagent gated behind nuclear infrastructure, keeping the magic/tech boundary interesting
- from: create_new_age:solid_corium | via: create:haunting (soul-fire transmutation) | to: magic | motif: M-19 | power: endgame | tone: ok | verdict: REJECT | reason: M-19 (haunting) transmutes to soul/spirit outputs — using it on solid_corium is thematically strained (corium is nuclear waste, not an organic soul-bearing material); the M-10 infusion ACCEPT above is the cleaner endgame corium→magic link. Reject the haunting path as tone mismatch.
- from: create_new_age advanced motor / energiser | via: aeronautics drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the advanced electric motor and energiser are mechanical control components — an Aeronautics propulsion or control surface recipe requiring one makes the nuclear/electric tier a gated supply line for high-tier airships
REWORK: dossier labels economy via numismatics "WEAK" — M-08 (coin from processed scarcity) is fully established and thorium is exactly the scarce-regional-ore pattern it was built for. WEAK is wrong; this is ACCEPT-grade. Flag dossier.
OK — after ACCEPTs, create_new_age sits at Create + economy + magic + aeronautics (4 systems), which is the well-connected end of the spectrum.

## spyglass_improvements   [anchors: support/QoL (1)]
LEAVE — client-only zoom/overlay tweak; 0 items, 0 blocks, no recipe-types. Nothing to weave.

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert readable item with no mechanics, no recipe-types. Genuine zero-content; a forced edge would be noise.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — client-side movement physics tweak; 0 items, 0 blocks, no recipe-types. Nothing to weave.

## durabilitytooltip   [anchors: support/QoL (1)]
LEAVE — client-side tooltip UI overlay; 0 items, 0 blocks, no recipe-types. Nothing to weave.

## ctov   [anchors: survival (1)]
- from: ctov village structures (biome-themed villages with villager trade hubs) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding numismatics coin into ctov village loot chests (smithy/armory/library) gives early explorers starter funds — the "find a village, get your first coins" moment that seeds the player economy
- from: ctov pillager outpost loot | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: ctov adds no mob drops of its own — it uses vanilla outpost logic with vanilla loot. Seeding a mob-drop reagent (M-02) into an outpost chest is possible but the connection is to the loot table, not to ctov as a mod. This is the same false-attribution problem as lootr: the action belongs to whatever drop table is seeded, not to ctov. M-02 requires organic mob-drop content.
- from: ctov Japanese mountain / Halloween village variants | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: ctov adds no magic items or drops; seeding magic reagents into its chests is pack-side config, not a ctov-specific weave. Same false-attribution. The thematic hook is weak (a Japanese village being a magic reagent source is arbitrary, not "of course").
REWORK: dossier says "none compelling — practically leave" for the economy candidate — with loot=yes, the loot-seed delivery (M-08) is an ACCEPT for village loot, same reasoning as dungeons-and-taverns. Dossier undersells it.

== CHUNK COMPLETE ==
