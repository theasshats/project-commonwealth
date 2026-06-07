# Phase 2 candidates — chunk-06

## entity_model_features   [anchors: support/client-rendering (1)]
- LEAVE — pure client rendering engine (zero items/blocks/loot); no material surface to weave.

## biolith   [anchors: support/worldgen-API (1)]
- LEAVE — worldgen library only; no items, no loot, no method to route through.

## sable_sa_compat   [anchors: support/compat-patch (1)]
- LEAVE — behavior compat glue between Sable and Create:SA; zero items/blocks/loot, no method surface.

## kiwi   [anchors: support/library (1)]
- LEAVE — developer library (annotation + GUI utilities); zero player-facing content.

## creativecore   [anchors: support/library (1)]
- LEAVE — CreativeMD core library; zero items/blocks/loot/methods.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the grotesque claw of a deep-sea crustacean burns into spirit essence — a natural occult sacrificial material, and a reason to fight Crabs past reach-potion brewing.
- from: friendsandfoes:copper_golem_head | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: copper_golem_head is a head drop (rare, player-trophy vibe); crush-recycling a head is thematically poor. Generic copper buttons/rods are more sensible but those are already vanilla-tagged copper; no distinct new surface.
- from: friendsandfoes (Wildfire/Iceologer/Illusioner hostile drops) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire's fire-core and Iceologer's frost material are thematically strong as ars_nouveau imbuement catalyst inputs or occultism ritual components — seeding these hostile-only drops into the magic reagent web gives the mob-vote hostiles a reason to farm beyond xp.
- REWORK: dossier's existing M-04 copper-deco candidate is WEAK as stated — copper deco items are already vanilla copper-tagged and crush coverage is redundant. The crab_claw magic-sink (M-02) is the real 2nd anchor; flag the deco candidate as low-priority.

## lootjs   [anchors: support/packdev-tooling (1)]
- LEAVE — scripting library; it is the enabler of loot-seed weaves elsewhere but is not itself a material node.

## ichunutil   [anchors: support/library (1)]
- LEAVE — iChun shared-class library; zero items/blocks/loot.

## quark   [anchors: support/decoration+QoL (1)]
- from: quark storage crate blocks (apple_crate, potato_crate, carrot_crate…) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: storage blocks are a compression convenience, not a metal/deco; crushing a crop crate back to crops is circular and trivial — no real economic pressure created, and M-04 is intended for metal/stone deco, not food storage. Would feel arbitrary.
- from: quark:ancient_wood / Glimmering Weald cave blocks (ancient_log, ancient_planks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Ancient wood from the Glimmering Weald biome crushes to a wood-pulp/charcoal byproduct — a minor Create feedstock that connects the unique cave biome to the production spine without forcing the wood to be rare.
- from: quark:smithing_rune (the rune-smith augment) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Imbuing a blank smithing rune with arcane energy turns it into an infused rune carrying an Ars enchantment — the rune becomes a trade item between runesmiths and magic specialists, and Quark's smithing system gains a magic axis.
- REWORK: dossier's existing M-04 deco-recycling candidate is vague ("vertical slabs, polished/brick variants"); those are stone, covered by generic stone-type rules already. The ancient wood block set is the specific surface worth targeting. Flag the generic statement as imprecise.
- OK — connections are thin but the decoration/QoL support role is sanctioned; the ancient-wood M-04 and smithing-rune M-10 are the upgrade paths.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul Dust from Otherside mobs is literally soul material — burning it in spirit fire crystallizes it into an occultism essence, making the dark dimension the pack's premier soul-magic feedstock.
- from: deeperdarker:soul_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Soul Crystal is already structured; imbuement with source gem unlocks it as a mid-tier arcane catalyst, linking the Otherside to the Ars spell ladder.
- from: deeperdarker:heart_of_the_deep | via: occultism:ritual | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Warden's heart is a boss-key in both senses — it gates the Otherside portal AND should gate a high-tier occultism ritual (a demon summoning or dimensional binding), so beating the Warden has a second, magic-track payoff.
- from: deeperdarker:warden_carapace | via: create:crushing | to: create | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Warden's armored carapace, crushed, yields a unique chitinous fiber that feeds a Create processing chain (e.g. a high-tier composite plate precursor) — the boss drop earns its place in the tech loop.
- from: deeperdarker:sculk_bone | via: loot-seed (already loot=yes) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Sculk Bone has an immediately occult read; seed it as an ars_nouveau imbuement ingredient or occultism ritual component to give Stalker farming a clear magic purpose.
- from: deeperdarker (stone/wood deco families — gloomslate, sculk_stone, echo wood) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Gloomslate and sculk-stone variants crush to gravel/cobble + experience_nugget byproduct — the lossy recycle keeps deco-exploration from being a dead end and adds a minor XP-nugget source from the dark biome's stone.
- from: deeperdarker:crystallized_amber | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: amber is a beautiful material but its role in-mod is unclear (dossier lists it as a block, likely decorative); without a confirmed mechanical identity it's speculative to assign it as a magic catalyst. Needs a dossier clarification before committing the slot.
- REWORK: dossier's existing economy candidate (M-09 "luxury good → coin") is retired — M-09 is retired. Remove or re-express: the scarce Otherside materials earn economy reach via M-30 (regional/dimension-locked scarcity) or M-34 (combat-supply, boss-drops farmed by combat specialists and traded), not a bare sell link. Re-express the economy anchor as M-34: Otherside drops are dimension-locked goods that non-combat specialists trade for; the combat-supply demand loop is real.
- from: deeperdarker (Otherside dimension-exclusive materials) | via: emergent trade (M-34 framing) | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Otherside soul/sculk drops are only accessible to players brave/equipped enough to enter; they supply non-combat magic specialists who can't (or won't) face the Warden — a natural trade axis.

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: A fallen meteor block crushes to iron/nickel dust plus an experience_nugget byproduct — meteors become a minor off-schedule ore source; players who find impact craters get a Create-compatible bonus before the ore is fully mined out.
- from: Blood Moon event (active flag) | via: worldgen/event gating → ars_nouveau:ritual trigger | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: An Ars Nouveau summoning ritual (or an Occultism boss ritual) can only be initiated under a Blood Moon — the dangerous night that forces spawns up is also the only window for the most powerful summons, creating a deliberate tension between danger and magical opportunity.
- from: Harvest Moon event (active flag) | via: config-tie / event gating → Create/survival crop system | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: The Harvest Moon's crop-growth bonus is already a survival accelerant; wiring it as the optimal window to run the Slice & Dice Sprinkler at max throughput (or to bulk-harvest for Create milling) makes the lunar cycle a production calendar event.
- from: enhancedcelestials:space_moss_block | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss has no confirmed in-game use as a raw material (dossier lists it as worldgen flavor); routing an unrooted deco block through milling risks being arbitrary. Leave the moss as atmosphere unless a later dossier sweep confirms a useful property.
- REWORK: dossier's "event-as-catalyst" M-07-adjacent idea for magic rituals is directionally right but vaguely stated. The Blood Moon window (M-22) is the correct framing — and it extends to every moon event in the ledger. Clarify that the weave should gate the *ritual execution step* rather than modify a permanent item property.

## accelerateddecay   [anchors: support/performance (1)]
- LEAVE — performance mod that replaces leaf-decay ticking; no items, no loot, no method surface.

## sliceanddice   [anchors: create + survival (2)]
- OK — connections sound. Already exactly the Create↔survival automation bridge (M-12) by design. The Sprinkler's fluid-distribution surface could add a magic angle (route an Ars fluid through the sprinkler for a crop-growth enchant), but this is speculative and would need confirming the fluid system is extensible. No forced edge needed.
- REWORK: none — dossier correctly identifies this as already 2-pillar and flags "leave."

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (bastion_metal_fence, acorn_metal_fence, cathedral_metal_fence…) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Wrought-iron and ornamental metal fences crush back to iron nuggets + an experience_nugget byproduct — a small lossy recycle that folds the metal deco line into the Create materials loop, consistent with how other iron-deco mods are handled.
- from: mcwfences stone/brick wall variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: stone wall variants are already covered by generic stone deco crushing rules expected from other deco mods; adding a separate mcwfences rule here is redundant noise unless the stone types are unique (they are not — vanilla stone and standard stone bricks).

## pingwheel   [anchors: support/QoL (1)]
- LEAVE — multiplayer ping marker; no items, no loot, no recipe surface. Excellent fit for this co-op pack but nothing to weave.

## northstar   [anchors: create + aeronautics (2)]
- from: northstar:titanium_ingot | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Titanium is a scarce off-world metal accessed only via rocket — players who specialize in space runs press it into Numismatics titanium-alloy coins, becoming the sole mint for this high-denomination currency tier. Space exploration pays a real economic dividend.
- from: northstar:advanced_circuit | via: create:sequenced_assembly (as required input) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The advanced circuit earns its place in the pack's endgame sequenced-assembly chains — a circuit-board component that gates Create's most complex multi-stage builds, creating a hard dependency on the space tech tier.
- from: northstar:tungsten_ingot | via: create:mechanical_crafting → aeronautics hull/engine recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Tungsten's high strength makes it the natural structural alloy for high-tier Aeronautics hull plates and engine mounts; ships of the largest tier require tungsten framing, making off-world mining a prerequisite for serious shipbuilding.
- from: northstar:biofuel | via: createaddition:liquid_burning | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: Northstar biofuel is a renewable off-world fuel feedstock; routing it through liquid_burning makes it a viable alternative propulsion fuel for Aeronautics engines and generators — the space farm has an economic output even on moderate-length flights.
- from: northstar:martian_steel_ingot | via: create:pressing → aeronautics structural part | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: martian_steel is a third endgame structural metal candidate alongside tungsten; stacking both M-23 weaves at the same tier dilutes the progression. Tungsten is the cleaner choice for hull-tier gating (it's named for hardness); martian_steel should stay a mid-to-upper Create material without doubling as an aeronautics gate. Avoid duplicating the endgame aeronautics gate.
- from: northstar:astronomical_reading | via: emergent trade / M-37 framing | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: An astronomical_reading (produced at the northstar:astronomy_table) is a piece of knowledge, not a physical good — it can gate a recipe unlock (e.g. a KubeJS research-progression step for a high-tech machine), making knowledge-work in the observatory its own trade service. A player who specializes in astronomy generates readings that non-space players need for late-game tech.
- REWORK: dossier lists M-09 "numismatics sale of astronomical_reading / advanced_circuit as high-tech goods" — M-09 is retired. The M-37 research-gate framing for astronomical_reading (above) and the M-08 titanium-mint framing are the correct replacements. Drop both M-09 references from the dossier's 2nd-anchor section.

## azurelib   [anchors: support/library (1)]
- LEAVE — animation engine library; one utility lightblock, no loot, no recipe surface.

## incontrol   [anchors: support/server-util (1)]
- LEAVE — JSON spawn/loot rule engine; no items or methods to weave. It is enabling infrastructure for M-02/M-30 scarcity design, not a node itself.

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — display-only JEI addon for loot/worldgen documentation; no items, no processing.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite variants | via: create:toolbox_dyeing or create:mixing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dye step is already baked into the mod's own mechanic (hold dye + catalyse levitite); routing it through a Create method adds nothing and would conflict with the mod's intended interaction. Gilding.
- from: dyed tire / levitite as Create Aeronautics ship cosmetic parts | via: aeronautics construction recipe (M-23 framing) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: these are pure cosmetic skins — treating them as structural airframe components contradicts M-23's "load-bearing alloy/plate" intent. Cosmetics should not count as structural depth.
- LEAVE — cosmetic dye-permutation mod for aeronautics parts; the dye step is self-contained, no cross-system weave is coherent without forcing.

== CHUNK COMPLETE ==
