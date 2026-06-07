# Phase 2 candidates — chunk-18

## trashcans   [anchors: support (1)]

Power-read: Four blocks — item/fluid/energy/ultimate void sinks. No recipes of their own. Content surface is entirely behavioral (accepts and deletes resources). The dossier itself notes this is anti-economy/anti-scarcity by design. "Voiding" is the antithesis of the loop's closing arrows (M-26 consumption renews demand; M-32 byproduct-as-feedstock; M-35 maturation). There is nothing to route through a method.

Candidates examined:
- Could a "trash can" be used as a ritual/magic sink for corrupted or cursed items? Red-team: no — the mod is a void block, not an item-transformation block. The magic mods' ritual sinks already handle that (occultism spirit_fire, ars_nouveau imbuement). Injecting trashcans into that role would conflict with existing method ownership and is thematically clumsy (a garbage can is not a ritual). REJECT.
- Could the trash can blocks be "destructible" items produced via Create processing? Red-team: the blocks are cheap utility (iron/wood), not mid/endgame outputs. Gating them behind Create depth would be an anti-social basic-gate (BRIEFING guardrail). REJECT.
- Scarcity note: the dossier correctly flags that a free void sink can trivialize byproduct value in a scarcity pack. Worth a design note, but not a weave — it's a balance/config consideration, not a method-routing.

- LEAVE — genuine zero-content utility (void sink); anti-scarcity by nature; no coherent weave without forcing it. The balance concern (byproduct value) is noted for human review but is a config/design matter, not a Phase-3 recipe action.

## accessories_compat_layer   [anchors: support (1)]

Power-read: Zero blocks, zero items, loot=no. A pure mixin compat shim that translates Curios/Trinkets API calls into Accessories slots. No player-facing surface whatsoever.

Candidates examined:
- Could "accessory slots" be gated behind Create or magic progression? Red-team: the slots are from Accessories (a separate mod); this mod only bridges the API. Gating belongs in the Accessories mod's config, not here. Nothing to weave. REJECT.
- Could wearable items that flow through this bridge (from Curios/Trinkets mods) be given weave-relevant crafting paths? Red-team: yes, but that is a weave for the *host mods* (the ones providing the wearables), not for this compat shim. REJECT as mis-attribution.

- LEAVE — genuine zero-content infrastructure (API compat shim); the wearable weaves belong to the host mods.

## sable_sa_compat   [anchors: support — serves aeronautics (1)]

Power-read: Zero blocks, zero items, loot=no. A behavior-only compat patch making Create: Stuff 'N Additions (jetpacks, exoskeletons, movement gadgets) work correctly on Sable/Aeronautics physics ships. Same family as `aeronauticscompat`.

Candidates examined:
- Could the compat itself be gated or "unlocked" via a progression step? Red-team: it's a mixin patch, not a craftable — it operates at load time. There's no in-game object to gate. REJECT.
- Could this mod enable a new weave by making jetpacks/exoskeletons ship-compatible — e.g. a jetpack used as a ship control surface? Red-team: the weave belongs to `create_sa` (the jetpack mod itself), not to this compat shim. Mis-attribution. REJECT.

- LEAVE — genuine zero-content compat patch (behavior bridge between two installed mods); no content surface of its own.

## kotlinforforge-5.11.0-all   [anchors: support — library/API (1)]

Power-read: Zero blocks, zero items, loot=no. A Kotlin language adapter (KotlinLanguageProvider) for NeoForge. Entirely developer-facing infrastructure. No player surface.

- LEAVE — genuine zero-content code library (language runtime adapter); nothing to weave by definition.

## createshufflefilter   [anchors: Create (1)]

Power-read: Two items — `shuffle_filter` and `weighted_shuffle_filter`. Filter items slotted into Create Deployers/rollers to randomize which block/item is placed. No loot table, no loot=yes. Their own recipes are vanilla crafting table. Everyday tier — a small utility accessory for Create automation builders.

Candidates examined:

A. Via method-pull: what methods WANT a randomized-placement filter?
   - `create:deploying` is the primary consumer — shuffle_filter slots into Deployers. The filter itself is just a controller item; it doesn't get "produced" by any method. The gap is whether the filter *item* can be woven as a craftable output of another system.
   - Could `createshufflefilter:shuffle_filter` be a *sellable crafted specialty tool* for colony/economy routing? Red-team: it's a cheap, two-ingredient crafting-table item (likely iron + a filter base). Treating a basic QoL filter as an economy good forces it. M-09 is retired; bare sell links are rejected. REJECT.
   - Could the weighted variant be an ars_nouveau imbuement (imbue a shuffle_filter with weight logic via a source-gem step)? Red-team: thematically clashing — a probabilistic filter is a mechanical concept, not a magical one. The imbuement step would be arbitrary. REJECT — tone clash.
   - Could Create-side methods produce the *weighted* variant (e.g., `create:pressing` or `create:sequenced_assembly` for precision weighting)? Power-read: the weighted filter is everyday-to-mid tier at best (just a more precise version of the same filter). The BRIEFING guardrail says don't gate basics behind complex recipes. The items are trivially craftable QoL items, not endgame outputs. A multi-step Create production chain for what is essentially "a better filter" would over-engineer a minor accessory. REJECT — depth doesn't scale with power here; the item isn't worth a complex chain.

B. Thematic adjacency: does randomized placement connect to any system naturally?
   - Randomized Deployer placement could enable automated building of varied structures (roads, walls, deco), which connects to the aeronautics/logistics arm (building landing pads, decking ships). But this is a *player behavior* (how they use the tool), not a cross-system weave.
   - The weighted variant could let a player automate crop/seed variety placement seasonally — touching survival's seasonal layer. But again, this is player-use behavior, not a method-routing weave.

No coherent motif fits. The items are too simple (everyday, cheap crafting-table items) and too narrow in function to anchor to a second system via method-pull without forcing an arbitrary edge. The single Create anchor (it's a Create filter accessory) is sufficient and honest.

- from: createshufflefilter:weighted_shuffle_filter | via: create:sequenced_assembly | to: create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: everyday/cheap QoL item; gating a basic filter behind sequenced-assembly violates the depth-scales-with-power guardrail; the item isn't a flagship output.
- from: createshufflefilter:shuffle_filter | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — a probabilistic mechanical filter gaining "magic weighting" is incoherent; the items are industrial, not arcane.
- LEAVE (2nd anchor) — no coherent weave survives red-team; Create anchor stands alone for a pure-Create QoL utility item.

## createaddoncompatibility   [anchors: support — library/compat (1)]

Power-read: Zero blocks, zero items, loot=no. A compat layer that drives Almost Unified to merge cross-addon duplicate items (plastic, copycats, gearboxes, lubricant, kerosene). Has 5 c:tags (item/ingots/plastic being the notable one) and one inbound `tfmg:distillation` recipe to seed TFMG plastic into the unified chain. It's glue, not content.

Candidates examined:
- The `c:ingots/plastic` tag this mod provides IS the unified plastic ingot canonical item. Could plastic be woven into another system? Red-team: plastic is already a Create-ecosystem material (produced via TFMG distillation, used in Create addons). Any weave of plastic belongs to TFMG or the producing addon, not to this unification-only mod. Mis-attribution if woven here. REJECT.
- Could the unification itself be gated (e.g. "unlock the plastic unification recipe via MineColonies research")? Red-team: that's architecturally wrong — unification is a technical deduplication, not a gameplay unlock. It fires at load time. REJECT.
- Design note (not a weave): the CLAUDE.md galosphere palladium warning is directly relevant here — the `c:ingots/plastic` unification should be verified it doesn't accidentally catch galosphere's palladium (id mismatch). This is a config-correctness matter for human review, not a Phase-3 action.

- LEAVE — support/compat role; the actual material weaves belong to the mods being unified (TFMG for plastic, etc.); no standalone content surface.

## appleskin   [anchors: support (1)]

Power-read: Zero blocks, zero items, loot=no. A client-side HUD mod that renders food restoration/saturation/exhaustion overlays on tooltips and the hunger bar. Informational only — adds no mechanics. No items of its own to route.

Candidates examined:
- Could AppleSkin's information surface strengthen the Diet/survival pillar? Yes, but as a player-experience enhancement, not a weave. It makes the survival food system more readable (players can make diet decisions more deliberately), which is a support function, not a cross-system method-routing.
- Any material to route? None — it has no items, no loot, no methods. REJECT all weave hypotheses immediately.

- LEAVE — genuine zero-content client HUD (informational only); no items or methods to weave.

## kambrik   [anchors: library/API — support (1)]

Power-read: Zero blocks, zero items, loot=no. A Kotlin developer-framework library (registration helpers, DSLs, networking) for Kotlin-based mods. Depends on kotlinforforge. No gameplay surface.

- LEAVE — genuine zero-content code library (Kotlin dev framework); nothing to weave by definition.

## drones   [anchors: aeronautics (1)]

Power-read: 6 blocks, 7 items, loot=yes. A personal quadcopter mod: assemble a miniature drone from blocks on a Frame next to a Controller; pack it into a `pocket_drone` item, equip it, and it provides abilities based on what blocks you built it from. Rotor tiers: wood (light) → iron (mid) → ion_thruster (endgame). Controller and frame are the assembly hub. Drill block = assists mining; lodestone = item-pickup magnet; beacon = attack enemies. The "ability block" body design means ANY mod's functional block can be incorporated as a drone body part.

The dossier notes Create materials as natural sinks for rotors/thruster/controller (brass, precision parts) and mentions M-06/M-05 for gating better tiers behind Create fabrication. The M-09 luxury sell link in the dossier is retired — ignore it.

**Method-pull analysis:**

**A. Rotors / ion thruster — Create production gating (M-05 / M-06)**
- `drones:wood_rotor`: everyday tier, wood + iron crafting table. Fine unmodified — it's a starter tier.
- `drones:iron_rotor`: mid tier. Create-press → iron sheet → rotor sub-assembly is a natural M-03/M-05 step. One processing step fits mid-tier depth.
- `drones:ion_thruster`: endgame / flagship. The ion thruster is the top-tier propulsion for heavy or fast drones — this is the right item for a multi-step sequenced-assembly chain (M-06). Fitting inputs: brass/electron tubes (Create-native), a precision mechanism, an `occultism:spirit_solution` or `create_new_age:energised_component` for the "ion" energy element, and a netherite plate as a mass anchor. Theme-fit: "ion" implies electrical/energetic fabrication, which maps to Create New Age's energising method (M-17 — electric charging bridge). Survives red-team: a player would nod — "of course an ion thruster is a high-end Create build, not a vanilla craft." ACCEPT.
- `drones:controller` (assembly controller): mid-tier hub item. A Create-milling or mechanical_crafting recipe for the controller is a sensible one-step gating (M-05). Survives red-team. ACCEPT (light, single-step — not sequenced-assembly level).

**B. Ability-block body — seasonal/magic pull (M-16 / M-10)**
- The "ability block" design means a drone's *body* can incorporate a magic-origin block (e.g. an Ars Nouveau sourcelink block, or an Occultism ritual block fragment), turning the drone into a magic-enhanced device. Red-team: the connection is thematically plausible but mechanically loose — the mod doesn't register any recipe type, so a "magic body" drone is a player-behavior thing, not a method-routing weave. Nothing to author as a Phase-3 recipe here. No formal motif fits without authoring a new one. REJECT — no-motif, not a Phase-3 recipe action (it's player-behavior, not a method-routing).

**C. Pocket drone as logistics arm item (M-31)**
- A drill-equipped drone assists mining and item pickup autonomously. This IS the logistics arm: a drone carrying bulk goods or performing auto-logistics around a base is exactly the aeronautics-as-distribution concept. The current anchor is already aeronautics — this weave doesn't ADD a second anchor, it reinforces the first. Still worth flagging as the loop-narrative for the aeronautics anchor (the drone IS the "low-altitude logistics" node, not a flight toy), but it doesn't add a new system. NOT a new anchor candidate — just confirmation the aeronautics anchor is the right one.

**D. Colony supply route (M-28)**
- A drone built to auto-harvest or carry goods could be "unlocked" via MineColonies research (the Mechanic or Engineer hut researching "drone fabrication"). Theme-fit: MineColonies already has mechanical production routes; a personal drone as a colony research unlock is coherent. Red-team: the drone's current recipe is in-world multiblock assembly (not a KubeJS recipe gate), so "locking" it behind colony research is a progression design that cuts across the in-world build mechanic. It's possible but architecturally ambiguous — the Phase-3 action would be a KubeJS recipe-gate on the Controller or a colony research lock on the ion thruster. The connection is real (a colony's engineering department would plausibly research drone fab), and the motif is M-28. Mid-to-endgame depth fits. Survives red-team. ACCEPT (flagged for Phase-3 as a progression lock on ion thruster or controller via MineColonies research, not a recipe replacement).

**E. Boss-drop component (M-15)**
- The ion thruster or optical sensor could require a boss-drop key component — e.g. a wither/cataclysm boss shard as the ionization catalyst. Theme-fit: a device that fires ion bursts having a dangerous origin material is coherent. Red-team: the boss route already covers many high-tier gates; adding another "boss drop required for drone thruster" has to be earned — the question is whether the drone thruster is iconic enough to deserve a dedicated boss-key slot vs. just being another Create-chain item. Given that the drone is a flagship personal-automation item (not mass-production), a boss-key input at the ion tier is plausible, especially if it reinforces the dual-role of bosses (pressure + production route). ACCEPT, but lower confidence — needs a specific boss thematically linked (an Ender-side boss for "ion" tech flavor seems most coherent; to be decided at Phase 3).

**F. Loot table seeding (loot=yes)**
- The dossier shows loot=yes. The mod has loot tables — likely dropped controller/parts from mobs or structures. Could seed in weave-relevant items: an economy-critical component (Numismatics coin for M-08 doesn't apply — that's a player-minted medium), or a magic reagent (e.g. an ars_nouveau source_gem shard or an occultism spirit solution fragment). Red-team: seeding a magic reagent into drone loot tables is coherent if the drone is imagined as "salvaged tech from dangerous places." But the loot=yes here is most likely the controller/frame dropping on mob kill (the Buddy Drone mod drops items when killed), not a structure loot table. Without a confirmed structure loot table, loot-seed is lower-value. REJECT — seeding magic reagents into a personal-device drop table is thematically strained; prioritize the recipe-chain weaves above.

**Existing connections:** Only 1 anchor (aeronautics). No existing cross-system connections to flag REWORK on.

Summary for drones:
- ACCEPT: ion thruster via create:sequenced_assembly + create_new_age:energising (M-06/M-17) — endgame Create gate, aeronautics→Create, deep multi-step
- ACCEPT: controller via create:mechanical_crafting (M-05) — mid-tier native-method gate, aeronautics→Create, one light step
- ACCEPT: iron_rotor via create:pressing (M-03/M-05) — mid-tier ore-doubling/processing pull, aeronautics→Create, one light step
- ACCEPT: ion thruster or controller via MineColonies research lock (M-28) — colony progression gate, aeronautics→economy
- ACCEPT (low confidence): ion thruster requires boss-drop input (M-15) — survival/danger→aeronautics/Create; specific boss TBD
- REJECT: ability-block body incorporating magic blocks as a magic weave — no-motif; player behavior, not method-routing
- REJECT: pocket drone loot-seed with magic reagents — tone strained; no confirmed structure loot

from: drones:iron_rotor | via: create:pressing | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: iron rotors aren't raw-crafted — a Create press stamps the flight surfaces, adding appropriate material depth to a mid-tier component
from: drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the drone assembly controller is a precision device; mechanical crafting for brass/electron-tube assembly reads naturally for mid-tier
from: drones:ion_thruster | via: create:sequenced_assembly + create_new_age:energising | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster demands multi-stage fabrication through Create — charged precision parts, an energised core — not a simple craft; the flagship drone tier earns its depth
from: drones:ion_thruster | via: minecolonies research lock | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: a colony's Engineering hut researches drone fabrication — without that research, the thruster recipe is locked; makes the colony route the non-boss path to top-tier personal flight
from: drones:ion_thruster | via: boss-drop input component | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: ion propulsion needs a volatile catalyst only recoverable from a high-tier boss; the fighter's path to elite drone tier
from: drones:pocket_drone (ability blocks from magic mods) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: the "magic block in drone body" is player-behavior, not a method-routing weave; no authoring target exists for Phase 3 without inventing a new mechanic
from: drones (loot tables) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: clash | verdict: REJECT | reason: loot=yes is most likely mob-item drop (killed drone), not a structure loot table; seeding magic reagents into a personal-device drop is thematically strained; the recipe-chain weaves above are higher value

## createmechanicalcompanion   [anchors: Create (1)]

Power-read: 0 blocks, 21 items, loot=yes. A Create-gated craftable companion: `mechanical_wolf_link` (Curios head item summons the wolf), `mechanical_wolf_motherboard` (control core), `optical_sensor`, `mob_radar`, `mounted_crossbow`, `netherite_plates`, `quantum_drive`, `booster_rocket`, etc. The build chain already uses `create:sequenced_assembly`, `create:mechanical_crafting`, `create:deploying`, `create:sandpaper_polishing` — deep Create inbound. Items are mid-to-endgame (netherite plates, quantum drive, precision/regenerative casing). loot=yes.

The dossier says: "It's a personal combat companion; combat isn't a pillar and there's no tradeable/magic/transport surface to route." This is a credible assessment but worth stress-testing, since one-anchor is the floor and two is the goal.

**Method-pull analysis:**

**A. Survival/danger pillar — the wolf as combat-route output (M-34)**
- The mechanical wolf is a combat companion. A combat specialist who farms bosses and equips a wolf provides *protection services* or *combat support* that other players (colony builders, traders) can benefit from. The M-34 motif is "combat-route supply" — a survival specialist's output traded to non-combat players. But M-34 covers *boss drops* being traded, not the companion itself. The wolf is a personal tool, not a tradeable good with cross-player utility. Red-team: a player doesn't *buy* someone else's mechanical wolf (it's Curios-equipped by its builder); they buy the protection service. M-33 (service-for-hire) is more accurate — the wolf-owner provides combat escort or base defense as a service. This is a real-but-soft anchor in economy/survival. ACCEPT (M-33 service-for-hire, soft) — but flag low confidence because the service is informal (no mechanical enforcement, just emergent player behavior).

**B. Magic pillar — optical sensor / quantum drive as magic-material sink (M-10 / M-29)**
- The `optical_sensor` and `quantum_drive` are endgame components in the wolf's build chain. Could one of these require a magic-origin material? 
  - `optical_sensor` — an eye-equivalent device. Ars Nouveau has `ars_nouveau:eye_of_the_mage` type items; Occultism has `occultism:witch_eye`. Red-team: "an optical sensor needs a magical eye-analog" is thematically coherent — a clockwork wolf's sensor incorporating a magical sight reagent is a plausible cross-route dependency (M-29). A player would nod: "of course the wolf's eye sees through walls because it uses an arcane lens." ACCEPT (M-29 cross-route dependency, magic reagent into Create chain — mid-to-endgame depth justified by the endgame tier of the optical sensor).
  - `quantum_drive` — an advanced control module. "Quantum" is science-fiction flavor; could be attuned with Ars source energy (M-10 arcane infusion pull). Red-team: thematically OK — the quantum drive needs an arcane attunement to function at its limit. However the optical sensor is already a cleaner cross-route dependency (eyes/sight is a natural magic↔mechanical seam). Don't double-route the same item through two magic methods. ACCEPT one; REJECT the other.
  - Decision: ACCEPT optical sensor via a magic sight-reagent input (M-29). REJECT quantum drive magic attunement (redundant once optical sensor takes the magic cross-route).

**C. Boss-drop gate (M-15)**
- The wolf motherboard or quantum drive as a boss-key item. The dossier notes "endgame parts are derpack-style sequenced chains (incomplete_* motherboard/optical_sensor)." A boss-drop input for the motherboard is thematically sensible — the control core of a mechanical wolf forged from a dangerous organism's core fragment. The wolf is endgame, so a boss-key input at the motherboard level is appropriate depth. Red-team: the boss-key motif is strongest when the item is iconic to the mod — the motherboard IS the mechanical wolf's brain, so yes, this is the flagship item. ACCEPT (M-15, endgame — survival→Create).

**D. Colony route (M-28)**
- MineColonies Mechanic hut could produce wolf components cheaper, or colony research could unlock the motherboard recipe. Theme-fit: a colony's mechanical workshop building robot companions is internally consistent. Red-team: the wolf is already deep-Create gated (sequenced assembly); adding a colony-production alternative for the same components gives MineColonies a role in the companion build. However, the dossier says the build chain is already "derpack-style" — meaning the designers likely already intended this as a pure Create chain with no alternative route. Adding a colony path might conflict with their intent. Lower confidence, but the motif is valid. ACCEPT (M-28, low-to-mid confidence — the colony route gives a non-Create path to the wolf; Phase 3 should verify designer intent).

**E. loot=yes — the `illager_engineer_spawn_egg` and `potato_cannon_illager_spawn_egg`**
- The item list shows two spawn eggs: `illager_engineer_spawn_egg` and `potato_cannon_illager_spawn_egg`. These suggest the mod spawns hostile Illager-type mobs (an engineer illager, a potato-cannon illager) in structures or as dungeon loot. loot=yes. This gives the mod a survival/danger anchor via hostile content.
  - A loot-seed weave: the illager engineer drops a component usable in magic or economy systems (M-02 mob-drop reagent sink). An Illager Engineer dropping a "mechanical diagram" or "precision blueprint" that is needed as a component in another mod's recipe is a real cross-system pull. Theme-fit: an Illager who engineers clockwork devices dropping a technical blueprint that feeds the Create or MineColonies system is coherent. Red-team: the drop being a "diagram/blueprint" item from another mod is a KubeJS loot-table edit (loot-seed via M-02). But the more natural target is the mob's drops feeding into the wolf's own chain — which is already within Create, not a cross-system bridge. Seeding a foreign mod's reagent (e.g. an Ars source gem) into the engineer illager's loot table as a mid-tier cross-system drop is a real ACCEPT candidate.
  - ACCEPT: Illager Engineer mob drops include a magic reagent (ars_nouveau source_gem or irons_spellbooks arcane essence) via loot-seed (M-02). Tone: an Illager engineer who uses arcane-powered machinery would carry magical components. Adds survival→magic connection. ACCEPT.

**Existing connections:** Already uses create:sequenced_assembly, create:deploying, create:mechanical_crafting, create:sandpaper_polishing inbound — these are deep Create method-chains, all sound. No REWORK needed on existing Create anchor.

**REWORK check:** The dossier proposed "leave" for the 2nd anchor. After analysis: three to four coherent weaves exist (magic cross-route via optical sensor, boss-key motherboard, loot-seed from illager engineer, possible colony route). The "leave" in the dossier is overly cautious — the mod HAS a tradeable/magic surface via its endgame components and its hostile mob spawns. Flag for reviewer.

from: createmechanicalcompanion:optical_sensor | via: KubeJS recipe adding ars_nouveau/occultism sight reagent as input to create:sequenced_assembly chain | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wolf's optical sensor incorporates a magical sight-lens — without an arcane reagent, the precision clockwork eye is blind; forces Create and magic specialists to cooperate
from: createmechanicalcompanion:mechanical_wolf_motherboard | via: boss-drop component input in create:sequenced_assembly chain | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the wolf's brain is forged from a high-tier boss core fragment — only a combat veteran can source the material that makes it think
from: createmechanicalcompanion illager_engineer mob drop | via: loot-seed (KubeJS loot-table edit) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the illager engineer carries arcane components that power his mechanical devices — a mid-tier magic reagent drop turns him into a meaningful mid-game combat encounter
from: createmechanicalcompanion (wolf companion as combat service) | via: player-provided combat escort / service-for-hire | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT (soft) | hook: a mechanical wolf owner sells combat escort or base-defense time to colony/trading players who can't gear for it themselves — labor flows player-to-player
from: createmechanicalcompanion:quantum_drive | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: redundant — the optical sensor already takes the magic cross-route; double-routing to magic via a second component on the same item's chain over-forces the weave; one cross-route dependency is sufficient
from: createmechanicalcompanion components | via: minecolonies hut/research unlock | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT (low confidence) | hook: a colony's Mechanical Workshop researches wolf-component fabrication, providing an alternative path for colony-runners who can't do deep Create; verify against designer intent before authoring

== CHUNK COMPLETE ==










