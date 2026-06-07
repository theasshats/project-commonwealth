# Phase 2 candidates — chunk-06

## startuptime   [anchors: support/diagnostic (1)]

LEAVE — zero-content code library. Prints a boot-timing log line; no items, no blocks, no recipe types, no in-world state. Nothing to route, no second anchor possible.

## kiwi   [anchors: support/library (1)]

LEAVE — pure developer library. Registers no items, blocks, or recipe types; provides registration helpers and GUI/font utilities for Snownee's dependent mods only. Nothing to weave; genuine zero-content library.

## travelersbackpack   [anchors: survival (1)]

Power-read: The backpack is an exploration logistics item — portable large inventory, dual fluid tanks (hose-fillable), sleeping-bag respawn, and slot-in upgrades. 84 items, 60 blocks; `travelersbackpack:backpack_upgrade` is a named recipe type. Tier: everyday (leather packs) → mid (themed mob-drop packs) → late (netherite/dragon). The fluid-tank feature makes it a portable buffer for TFMG/Create fuels, potions — a real logistics value item for airship crews. Two custom recipe types are present: backpack_shaped and backpack_upgrade.

- from: travelersbackpack themed variants (mob-drop crafted packs, e.g. blaze, dragon, netherite) | via: travelersbackpack:backpack_upgrade (upgrading a blank upgrade with Create-pressed metal plates) | to: create | motif: M-20 | power: mid | tone: ok — a kinetic upgrade applied to an existing item is exactly M-20's light deploy-application pattern; a brass/zinc upgrade plate applied via deployer is coherent industrial kit | verdict: ACCEPT | hook: a pressed brass plate is mechanically assembled into the backpack upgrade at a Deployer, turning the upgrade from a crafting-table recipe into a Create-step — the pack becomes part of the industrial supply chain

- from: travelersbackpack fluid tanks (filled with fuel/lubricant via hose) | via: passive logistics role as portable aeronautics fuel buffer | to: aeronautics | motif: M-26 | power: mid | tone: ok — airship crew needs fuel on expeditions; a tank-equipped backpack is the obvious carrier for TFMG diesel/gasoline | verdict: ACCEPT | hook: on a long-range airship run a full backpack tank becomes the difference between landing to refuel or limping home — the fuel consumption loop gains a personal logistics node

- from: travelersbackpack:backpack_upgrade crafting chain | via: travelersbackpack:backpack_upgrade recipe routed through create:pressing for a required metal plate input | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-20 (light deploy-application) already covers the Create weave more precisely and at the right depth for an everyday carrier item; M-05 (native-method gating for flagship items) would over-gate a common exploration tool — don't double-apply Create anchoring

- from: travelersbackpack exotic tier variants (dragon, netherite) | via: requiring a boss drop as a crafting gate | to: create | motif: M-15 | power: endgame | tone: ok — endgame pack tiers behind a boss drop is coherent; dragon pack needs dragon tooth/scale | verdict: REJECT | reason: M-15 reserved for complex Create/tech recipe gates per motif scope; applying it to a storage item tips into over-gating a survival QoL item, and the dragon backpack is cosmetic differentiation not a tech unlock — depth via M-20 plate upgrade is sufficient and correctly scaled

REWORK: The dossier's "aeronautics via portable logistics — [WEAK]" note undersells this. The fluid-tank + sleeping-bag combo is genuinely load-bearing for long-range aeronautics expeditions (field refuel + respawn anchor away from base) — this is a M-26 consumption sink link (fuel is consumed from the tank en-route) with a clear aeronautics hook. Should be upgraded from WEAK to MED/STRONG, not left as a vague comment. The Create-recipe weave candidate (M-20) is new from this pass and was missing from the dossier.

## edf-remastered-5.0-beta4   [anchors: survival/boss-difficulty (1)]

Power-read: Pure behavior datapack — rewrites the Ender Dragon encounter (500 HP, multi-phase AI, minion summons, boss music). Confirmed: does NOT change or add dragon drops (loot=yes on the jar but is the vanilla dragon loot unmodified). Zero registered items/blocks. The survivalpressure anchor is the only real one — it's a danger-pump that makes the endgame harder.

- from: Ender Dragon encounter difficulty increase (harder boss = higher demand for gear before challenging it) | via: loot-table seeding — add pack-relevant endgame reagents or components to the dragon's enhanced loot pool, so the harder fight pays out a proportionally better return | to: magic | motif: M-02 | power: endgame | tone: ok — a harder dragon should drop better magic reagents; seeding soul_crystal or ars_nouveau:source_gem fragments into the loot pool makes the revamped fight a magic-web feeder | verdict: ACCEPT | hook: beating a 500-HP raging dragon earns rare soul reagents that feed the magic web, not just the same dragon breath drop — the scaled difficulty earns a scaled magic payout

- from: Ender Dragon boss fight (endgame challenge) | via: loot-seed — drop a unique boss-key component in the enhanced dragon loot (e.g. a Fragment of Draconic Will) gating a high-tier Aeronautics controller or Create Sequenced-Assembly part | to: create | motif: M-15 | power: endgame | tone: ok — the dragon is the canonical Minecraft endgame boss; making it gate a high-tier Create component is thematically sensible and proportional to the fight's new difficulty | verdict: ACCEPT | hook: the revamped dragon drops the one component that gates the top-tier Aeronautics hull assembly — beating the End earns your airship

- from: edf boss difficulty | via: loot-seed to magic | to: magic | motif: M-34 | power: endgame | tone: ok — a combat-route specialist farms the revamped dragon and trades the rare drops to non-combat players | verdict: REJECT | reason: M-34 (combat-route supply) is the correct motif for boss-drop economy role, but it's structurally a consequence of the M-02/M-15 loot-seed rather than a separate Phase-3 action; the combat-supply economy role is already baked into the dragon being a boss — listing M-34 as an additional candidate here is redundant, not additive

REWORK: The dossier writes "none — leave" for 2nd-anchor candidates because the mod adds no items and doesn't touch the drop table. This misreads the Phase 2 loot-seed rule: a behavior overhaul that makes a boss significantly harder is exactly the case where loot-seeding the enhanced fight is the correct delivery — the dragon is harder and should pay out more to the magic/Create webs proportionally. Both M-02 and M-15 loot-seed candidates are coherent additions. The dossier's LEAVE recommendation is overly conservative by the briefing's own criteria ("a boss/structure feeding coin, magic reagents, or a progression key is a REAL candidate — do NOT LEAVE a loot-bearing structure mod").

## yet_another_config_lib_v3   [anchors: support/library (1)]

LEAVE — pure config-screen API library. No items, no blocks, no recipe types, no in-world effects. Generates settings GUIs for dependent mods. Genuine zero-content library with nothing to route.

## imfast   [anchors: support/QoL-compat (1)]

LEAVE — server-side movement-validation mixin. Zero items, zero blocks, zero recipe types. A behavioral patch (raises vanilla anti-cheat speed threshold) that enables aeronautics/vehicles to run at speed. No content surface; nothing to weave. Not "leaving" for convenience — the mod is genuinely zero-surface and correctly classified as support.

## rechiseledcreate   [anchors: create, decoration (2)]

Power-read: 242 blocks + 242 items — chiseled variants of Create decorative stone and wood window types; the Mechanical Chisel is a new kinetic block. It already has 2 anchors (Create-kinetic method + decoration palette). The dossier correctly flags it as already ≥2. Let me look for a third connection now.

Method-pull on the output: the 242 chiseled blocks are fine architectural finishes — andesite cut polished, asurine cut bricks, wood window patterns. Could these feed an economy/service angle? A player specializing in the Mechanical Chisel (requires Create power) producing premium building material to trade would be an M-33 service-for-hire candidate. But the chisel process is a 1:1 transformation with no value added beyond shape — not a true service-for-hire in the M-33 sense (the "service" would be trivial given how cheap it is to set up a Mechanical Chisel once). No strong 3rd anchor.

- from: rechiseledcreate chiseled stone/window blocks (produced via Mechanical Chisel) | via: M-33 service — a Create specialist running the Mechanical Chisel produces premium decorative blocks for trade, since they require Create power others may not have set up | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the Mechanical Chisel's barrier is trivially low — anyone with basic Create automation can run it; M-33 service-for-hire requires a meaningful specialization lock (e.g. enchanting-for-hire, a complex Create chain). 1:1 block-reshape at low cost is not a real economy service, just reshaping vanilla deco. A weak "economy" anchor here would dilute M-33.

- from: chiseled Create stone variants | via: create:crushing — chisel output is a polished/shaped stone that could crush back to stone dust + XP nugget; a lossy recycle loop | to: create | motif: M-04 | power: everyday | tone: ok — it IS a Create deco block family, M-04 is the canonical method for this | verdict: REJECT | reason: rechiseledcreate IS already anchored in Create as its primary pillar (the Mechanical Chisel block is a Create kinetic block); M-04 is the inbound weave for the dossier's existing Rechiseled blocks — applying it here too would be redundant self-wiring within the same Create anchor. The two-anchor state is sound; no new anchor is forced.

OK — connections sound. Dossier's "already ≥2 (Create kinetic method + decoration)" is correct. The mod IS the bridge providing Rechiseled its Create pillar. No coherent 3rd system anchor that doesn't reduce to trivially weak. Decoration/Create at depth 2 is the appropriate end state.

## railways   [anchors: create, aeronautics (2)]

Power-read: 1015 items, 617 blocks — narrow/wide gauge and monorail track variants, locometal building stock, conductor entity, semaphores. Already consuming create:mechanical_crafting + create:sequenced_assembly (inbound). The conductor (a colonist-style entity that can operate remote redstone) and the semaphore/nixie-tube signaling are the distinctive gameplay features above track variants. Existing 2 anchors are sound.

Method-pull for a 3rd anchor: locometal is a distinctive material (branded railway-aesthetic steel blocks); conductors perform remote redstone control / carry toolboxes. Is there an economy link? Conductor as a logistics-operator (M-33 service) is thematic — a conductor player running freight trains between regions is an aeronautics/logistics service. But conductors are NPC-adjacent entities, not player characters providing service. The freight-train role is already what aeronautics/economy covers at the system level.

- from: railways locometal structural blocks (decorative steel aesthetic, produced with Create metals) | via: loot-seed or recipe — include locometal blocks as a required build material in Aeronautics airframe/rail-car construction | to: aeronautics | motif: M-23 | power: mid | tone: ok — locometal is literally railway-locomotive metal plating; requiring it in a train-car or aeronautics railcar body is directly coherent | verdict: ACCEPT | hook: building a proper steam locomotive or railcar shell calls for locometal plating — the aesthetic of the railway bleeds naturally into the aeronautics construction supply line

- from: railways:conductor entity (remote redstone/toolbox carrier) | via: conceptual economy/logistics role — conductors automate freight routing between trade outposts | to: economy | motif: M-33 | power: mid | tone: clash — M-33 is player-performed labor; the conductor is an NPC-adjacent automation entity, not a player providing a service to another player. The economy link is structurally indirect (it's automation, not labor). | verdict: REJECT | reason: M-33 requires *player* specialist labor; a deployed conductor entity doesn't constitute player-run service. The logistics role is already captured by the aeronautics anchor. Forcing economy here blurs the conductor's automation role.

- from: railways track-types (narrow/wide gauge, monorail) | via: M-31 bulk-goods logistics — different gauges as specialized logistics routes for different cargo volumes, making logistics planning a depth layer | to: economy | motif: M-31 | power: mid | tone: ok — the multi-gauge system naturally supports bulk-cargo routing decisions | verdict: REJECT | reason: M-31 (logistics-required bulk good) applies to the *goods* being moved, not to the track-type itself. The track variety adds build depth, not a new system anchor. Railways' aeronautics anchor already represents its logistics-arm role; M-31 needs a specific routable material, not the transport infrastructure.

OK — connections sound on the core two anchors (Create + aeronautics). The locometal → M-23 candidate is a genuine new addition the dossier missed.

## fogoverrides   [anchors: support/client-visual (1)]

LEAVE — pure client-side atmosphere config. No items, no blocks, no recipe types, no in-world mechanics. Adjusts fog density/color per biome and dimension via config. No content surface; genuine zero-surface support mod in its sanctioned role.

## deeperdarker   [anchors: survival (1)]

Power-read: 149 blocks, 348 items. Full underground dimension (the Otherside, gated by Heart of the Deep), 4 biomes, 8 mobs, Warden armor tier, soul/sculk material family. loot=yes. Distinctive drops: soul_dust, soul_crystal, sculk_bone, warden_carapace, reinforced_echo_shard, heart_of_the_deep. Two native recipe types: deeperdarker:gloomslate_pot_recipe, deeperdarker:sculk_transmitter_coloring. Already consuming create:crushing + farmersdelight:cutting (inbound weaves). The soul-resonance theme (soul_dust, soul_crystal) is a natural magic bridge; heart_of_the_deep gates the dimension itself (high-tier boss gate item).

- from: deeperdarker:soul_dust / soul_crystal | via: occultism:spirit_fire — transmute soul dust into occultism:witch_'s_gold (or a named Otherside spirit essence), giving the Otherside dimension a direct occultism reagent feed | to: magic | motif: M-11 | power: endgame | tone: ok — soul-themed items transmuting through spirit fire is thematically exact; the deep-dark is as "soulish" as Occultism's demonics, and this routes Otherside danger into the magic web | verdict: ACCEPT | hook: the soul dust you harvest from the Otherside's mobs dissolves in spirit fire into an occultism essence — the Warden's realm feeds the occultist's workbench

- from: deeperdarker:heart_of_the_deep (rare Warden drop, gates the Otherside dimension) | via: ars_nouveau:enchanting_apparatus — the heart is placed as an offering to the apparatus to unlock an Ars Nouveau tier-3 spell or an Ars upgrade, making the rarest Warden drop the key to top-tier Ars progression | to: magic | motif: M-15 | power: endgame | tone: ok — the Warden is the deep-dark's apex threat; its heart gating a magic power-unlock is directly sensible; the enchanting apparatus is an Ars Nouveau method | verdict: ACCEPT | hook: surviving the Warden hunt earns the Heart of the Deep — the only key to unlocking your highest Ars Nouveau spell tier

- from: deeperdarker gloomslate / sculk_stone block families | via: create:crushing — gloomslate → gravel + XP nugget (lossy recycle, M-04); already partly wired per the inbound create:crushing weave | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: salvaging excess Otherside stone through a crusher strips it back to gravel and experience — the deep-dark's building material enters the Create recycling loop

- from: deeperdarker:warden_carapace (Warden-tier drop) | via: create:mechanical_crafting or create:sequenced_assembly as a required component for high-tier Aeronautics armor plating / hull reinforcement | to: aeronautics | motif: M-23 | power: endgame | tone: ok — the Warden is the hardest overworld non-boss; its carapace as a reinforcing material for elite airframe armor plating is thematically coherent (hardest biological armor → hardest ship plating) | verdict: ACCEPT | hook: only Warden Carapace provides the hull-grade reinforcement needed for the top-tier airship's armored section — the deep-dark hunt is the prerequisite for the ultimate ship build

- from: deeperdarker soul/sculk drops | via: create:haunting — run deeperdarker soul-adjacent items (echo shards?) through create:haunting to produce a soul-charge byproduct, bridging Create's soul-fire method to the Otherside material set | to: create | motif: M-19 | power: mid | tone: ok — soul fire is thematically resonant with soul_dust/soul_crystal; the Otherside is the soul underworld, and Create's haunting method is its soul-fire processor | verdict: REJECT | reason: the soul_crystal/soul_dust already have a better and stronger routing through occultism:spirit_fire (M-11, already ACCEPTed above) — adding a second Create-haunting route for the same material set would split the soul-reagent's identity across two methods. Better to keep one clean magic-weave destination and not dilute. The create:crushing (M-04) for the stone blocks is the appropriate Create anchor; M-19 here would be redundant.

- from: deeperdarker:sculk_bone (mob drop from Sculk Snappers/Leech) | via: ars_nouveau:crush — sculk bones crushed at an Ars source nexus to yield a skeletal-soul dust reagent | to: magic | motif: M-02 | power: mid | tone: ok — mob drop fed into a magic processing method is M-02's core form | verdict: REJECT | reason: the soul_dust + spirit_fire route (M-11, ACCEPTed) is the stronger and cleaner magic entry point; adding a separate Ars crush route for sculk_bone introduces two independent soul-material lanes into magic, which fragments the design. One primary magic weave (M-11 soul_dust → occultism, M-15 heart_of_the_deep → Ars) is cleaner than three. Keep sculk_bone as secondary loot flavor for now; it can be revisited if the spirit_fire route is blocked.

REWORK: The dossier lists "economy via numismatics — Otherside-only soul materials are scarce, dangerous-to-get goods → sellable for coin (M-09 luxury good → coin)" as a WEAK candidate. M-09 is RETIRED — this entry should be expunged from the dossier. The dossier's magic candidates (M-11/M-02) are directionally correct; this pass adds M-15 (heart_of_the_deep → Ars apparatus) and M-23 (warden_carapace → aeronautics hull) as new additions not previously listed.

## towntalk   [anchors: support/flavor (1)]

LEAVE — audio flavor addon for MineColonies (colonist voice barks). No items, no blocks, no recipe types. The functionality is cosmetic voice lines; no gameplay mechanics, nothing to route. Rides on MineColonies which holds the real colony/economy weave. Genuine zero-content-surface mod in its sanctioned support role.

## just_blahaj   [anchors: decoration/flavor (1)]

Power-read: 31 placeable plush shark blocks in dye/pride-flag/novelty variants. Crafted from vanilla wool + dye. `loot=yes` but as decorative blocks that retain player username when placed. No processing methods.

- from: just_blahaj plushies (wool + dye crafted, placed decoration) | via: create:crushing — a placed blahaj could crush back to wool scraps + dye (M-04 deco recycle, lossy) | to: create | motif: M-04 | power: everyday | tone: clash — M-04 is for deco blocks with a coherent material identity (stone families, metal tiles); a plush shark toy recycles through a Create Crusher is tonally absurd and undermines the lighthearted mood of the item. The briefing's hard guardrail: "don't force edges onto deliberately vanilla/organic content." This is exactly that case. | verdict: REJECT | reason: tone clash — the mod is explicitly "wholesome/friend-group flavor"; running plushies through an industrial Crusher is the anti-thesis of its vibe. Even if mechanically possible, it's a defect weave.

- from: just_blahaj plushies (crafted items, all 31 variants) | via: colony request / M-28 — MineColonies colonists could request blahaj plushies as a happiness/comfort good (colony upkeep requiring deco items for colonist morale, per the colony's needs system) | to: economy | motif: M-28 | power: everyday | tone: ok — colonists wanting comfort items is thematically neat (a colony is a community; comfort matters) and gives the plushies a functional demand pull | verdict: REJECT | reason: MineColonies colonist request items are game-controlled comfort/need mechanics, not a player-economy exchange. This is an NPC-demand pull, not a player-run trade link. M-28 (colony route) is for *production routes* (cheaper/faster via colony or colony-locked output), not for commoditizing a decoration as colonist happiness fuel — that would be an invented mechanic, not an existing one. No surviving rationale.

LEAVE — the plushies are curated flavor with no coherent production/economy/magic surface. The wool-and-dye craft is the entire interaction; forcing a second system anchor creates defect edges. Correctly stays as single-anchor decoration/flavor support.

## undergroundworlds   [anchors: survival (1)]

Power-read: 30 blocks, 68 items. Underground biomes (jungle, desert, spider cave) with themed dungeons (Jungle Temple, Pyramid, Ice Dungeon, Abyssal Ruins). loot=yes. Items: antidote_flask (poison immunity), desert_charm (blindness immunity), blade_of_the_jungle (poison), freezing tools, axe_of_regrowth, quicksand. Mob drops: spider_fang (Black Recluse). Temple/pyramid bricks as building material. The charms (Curios/Accessories slot) are the mod's most distinctive outputs.

- from: undergroundworlds:spider_fang (Black Recluse drop, underground spider cave) | via: occultism:spirit_fire — transmute spider_fang into an occultism essence, giving the underground mob a downstream magic use | to: magic | motif: M-02 | power: mid | tone: ok — the Black Recluse is a venomous underground spider; its fang feeding an occultism spirit-fire transmutation is thematically sensible (venomous organic material → dark essence) | verdict: ACCEPT | hook: a Black Recluse fang dropped in spirit fire yields a venomous essence that feeds the Occultist's crafting table — cave-diving earns a magic reagent

- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement — imbue spider fang into a source-gem catalyst for a poison-related Ars glyph (Projectile + Harm + Poison) | to: magic | motif: M-10 | power: mid | tone: ok — the fang is a venomous animal part; imbuing it into a magic component for a poison glyph is thematically coherent | verdict: REJECT | reason: M-11 (occultism spirit_fire, already ACCEPTed) is the cleaner single magic routing for this drop; splitting the same material across both occultism and Ars dilutes identity. One upstream (occultism) is cleaner. M-10 could be a second-stage refinement (spirit essence → Ars imbuement) but that's a Phase-3 chain decision, not a Phase-2 independent candidate.

- from: undergroundworlds temple/pyramid bricks | via: create:crushing — temple brick → gravel + XP nugget (M-04 deco recycle, lossy) | to: create | motif: M-04 | power: everyday | tone: ok — block-family recycle is M-04's exact scope; dungeon bricks crushing back is standard | verdict: ACCEPT | hook: looted temple stone run through a Crusher breaks down to gravel and a shard of experience — the ruins feed the Create recycling loop

- from: undergroundworlds:desert_charm / antidote_flask (worn immunity accessories) | via: ars_nouveau:enchanting_apparatus — the charm slot items are refined or enhanced at the Ars enchanting apparatus, adding a source-cost upgrade to boost their protective effect | to: magic | motif: M-10 | power: mid | tone: ok — wearable charms receiving arcane upgrades at the apparatus is exactly M-10 (arcane infusion pull for a foreign material into a magic refinement method) | verdict: ACCEPT | hook: the Desert Charm's blindness ward is strengthened at the enchanting apparatus with a source gem infusion — magic enhances the dungeon explorer's protective gear

- from: undergroundworlds:freezing_sword / freezing_pickaxe etc. (freeze-on-hit tools) | via: create_new_age:energising or createaddition:charging — a charged variant of the freezing tools that uses FE to boost/maintain the freeze effect, bridging Create electricity into the dungeon gear | to: create | motif: M-17 | power: mid | tone: clash — the freezing tools are dungeon loot, not manufactured items; applying a Create-electric charge to loot items is tonally mismatched (dungeon magic vs. industrial electricity). The briefing warns against forcing edges on deliberately organic/adventure content. | verdict: REJECT | reason: tone clash — dungeon-magic ice tools are thematically distant from FE charging; the weave would feel arbitrary to a player. M-04 (bricks) + M-02 (spider_fang) already cover Create and magic routing without forcing the adventure gear into an industrial frame.

REWORK: Dossier's M-04 candidate for temple bricks is directionally right and this pass ACCEPTs it. The M-11 magic candidate (spirit_fire / imbuement) is also directionally right; this pass refines it to M-02 (mob-drop reagent for spider_fang) + M-10 (charm upgrade via Ars apparatus). The dossier's Create candidate was marked [WEAK] — it ACCEPTs here because it's the standard method for any dungeon-block set and requires no invention.

## minecolonies_compatibility   [anchors: survival, create (2)]

Power-read: 3 blocks, 7 items. Integration bridge — colony workers accept modded crops (IE cloche/fertilizer, BotanyPots), courier pulls from Create Stock Link / storage networks, butcher handles carcasses, cook uses Farmer's Delight. Already ≥2 anchors (survival + Create bridge). The key bridge items: citizen_terminal, citizen_grid, citizen_stock_keeper, common_network_storage.

Method-pull for a 3rd anchor: The Courier ↔ Create Stock Link bridge is precisely what M-28 (colony route) enables for production routing. The colony-storage bridge already IS the M-28 mechanism. Is there an economy angle? The colony worker accepting modded crops from IE cloche means the colony route can produce modded ingredients cheaper — that's exactly the "cheaper basics via colony" model. But this is already captured by its Create + survival anchors (the Create Stock Link bridge IS the Create anchor; the farming bridge IS the survival anchor). Is there a magic angle? The colony compatibility bridge does NOT extend to Ars Nouveau or Occultism workers — that's a gap worth flagging.

- from: minecolonies_compatibility bridges (colony workers using modded crop methods) | via: extending the same pattern to include ars_nouveau and occultism colony-worker support — a Magic Scholar hut worker using Ars_nouveau:imbuement, or a Caster colonist performing ritual/spirit_fire | to: magic | motif: M-29 | power: mid | tone: ok — if the compatibility bridge extended to magic workers, the colony route would feed magic production, making colony investment relevant for magic players too (cross-route dependency between colony and magic) | verdict: REJECT | reason: this is authoring new content on minecolonies_compatibility that doesn't exist — the mod's scope is IE/storage/farming compat, and Ars/Occultism integration would require the mod itself to implement it. Phase 2 can't propose a feature change to an upstream mod. The candidate is a design observation, not a routable weave against existing methods.

- from: citizen_terminal / citizen_grid (colony storage-network bridge items) | via: requiring a Create-pressed component in their crafting recipe (e.g. a brass ingot plate or zinc mesh from Create) so the storage bridge has a Create cost | to: create | motif: M-05 | power: mid | tone: ok — the storage terminal items currently use vanilla or basic crafting; requiring a Create-fabricated part gates the colony-network bridge behind Create progress | verdict: ACCEPT | hook: the colony network storage terminal calls for a Create-pressed zinc mesh in its recipe — you need basic Create automation before your colony talks to your storage system, tying colony and Create infrastructure together

OK — core 2-anchor state (survival + Create) is sound. The M-28 colony route is already what this mod IS mechanically. The M-05 recipe gate on citizen_terminal items is a new candidate.

## kubejs_create   [anchors: support/tooling (1)]

LEAVE — scripting bridge library. Exposes Create's processing recipe types to KubeJS scripts. No items, no blocks, no recipe types of its own, no in-world effects. The tool that builds Create-recipe weaves, not a weave target itself. Genuine zero-content-surface support mod.

## accessories_compat_layer   [anchors: support/compat (1)]

LEAVE — mixin compat shim that translates Curios/Trinkets API calls into the Accessories slot system. No items, no blocks, no gameplay mechanics. Pure API translation; the wearables that weave live in the host mods. Genuine zero-content library.

## jade   [anchors: support/client-UI (1)]

LEAVE — "what-am-I-looking-at" client HUD overlay. No items, no blocks, no recipe types, no in-world interaction. Display-only informational tooltip. Genuine zero-content support mod in sanctioned support role.

## bigsignwriter   [anchors: support/client-UI (1)]

LEAVE — client-side sign-editing GUI enhancement for large-letter text. No items, no blocks, no recipe types. Pure UI utility for sign decoration. Genuine zero-content support mod.












