# Phase 2 candidates — chunk-02

## tacz   [anchors: support/combat-flavor (1)]

Current state: 1 anchor (support — PvPvE flavor). No content-pillar wiring yet. Has loot=yes, and the gun_smith_table is a distinct registered recipe-type. The key join surfaces are: (a) metal/component inputs to the Gun Smith Table, (b) ammo as a consumable output, (c) boss-drop gate potential for high-tier firearms.

- from: metals/components → gun_smith_table_crafting | via: recipe (replace vanilla inputs with Create-pressed sheets, mechanical-crafted casings, brass gears) | to: create | motif: M-05 | power: mid | tone: ok — guns requiring machined parts is the obvious industrial step; players nod at "of course a Gun Smith Table needs Create parts" | verdict: ACCEPT | hook: The Gun Smith Table consuming Create-pressed iron sheets and mechanical-crafted components ties firearms to the Create spine — a TACZ gun is a precision product, not a vanilla bench craft.

- from: high-tier firearms (e.g. endgame rifles/LMGs) | via: recipe gating (boss drop as required component) | to: create | motif: M-15 | power: endgame | tone: ok — a boss drop unlocking military-grade hardware is coherent; the boss IS the gatekeeping danger | verdict: ACCEPT | hook: The highest-tier TACZ firearms need a boss-drop component, so the fighter playstyle (M-34 supplier) gates weapon access, not just a crafting table.

- from: tacz:ammo / ammo_box (consumable projectiles) | via: M-26 consumption mechanic | to: survival (pressure/demand) | motif: M-26 | power: everyday | tone: ok — ammo is literally consumed on use; zero stockpile problem; continuous demand is automatic | verdict: ACCEPT | hook: Ammo is a self-renewing demand sink — players in PvPvE loops burn through it constantly, so TACZ feeds the economic loop's consumption edge without any recipe tweak needed.

- from: tacz:ammo/ammo_box as trade goods | via: emergent trade between combat-specialists and non-combat players | to: economy | motif: M-34 | power: everyday | tone: ok — a combat specialist farms boss drops and ammo materials; crafts ammo to sell to others is the supply side of the combat-route | verdict: ACCEPT | hook: A dedicated TACZ gunsmith produces ammo in bulk for the non-combat players who want protection — a natural PvPvE supply chain.

- from: tacz:ammo as aeronautics-mounted armament supply | via: conceptual link — airship carries tactical firearms; aeronauticscompat already ships turret compat | to: aeronautics | motif: no-motif | power: mid | tone: clash — TACZ guns are handheld; aeronauticscompat covers turret mods, not gun-mod mounts; there's no mechanical mounting surface | verdict: REJECT | reason: no-motif; handheld firearms have no hook into Aeronautics construction methods; aeronauticscompat explicitly handles turret mods, not handheld-gun mods — thematic stretch, no method.

REWORK: existing dossier anchor "support (combat/PvPvE flavour)" — OK as a starting anchor, but the dossier's M-08/M-09 coin candidate should be retired (M-09 is retired; bare sell is not a weave); the strong path is M-05 + M-15 + M-26 + M-34 as shown above.

## companions   [anchors: survival (1)]

Current state: 1 anchor (survival — organic/mob content). Has its own Soul Furnace recipe-type, mob drops (Crystallized Blood, soul gems, essences), a boss (Sacred Pontiff → Old Cloth + Relic Gold), and self-contained coins (copper/nether/end_coin) that are NOT Numismatics. loot=yes. The dossier correctly identifies magic as the strong 2nd-anchor candidate.

- from: companions:crystallized_blood, companions:soul_gem (mid-tier Soul Furnace outputs) | via: occultism:spirit_fire or occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok — soul-state reagents transmuted via Occultism's spirit methods is thematically spot-on; "crystallized blood feeds a ritual" needs zero explanation | verdict: ACCEPT | hook: Soul Furnace outputs (Crystallized Blood, soul gems) become Occultism ritual inputs, threading the companion creature ecosystem into the magic pillar.

- from: companions:essence (Small/Great Essence, mob-drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok — mob-drop reagents getting a magic-sink use is the exact M-02 pattern | verdict: ACCEPT | hook: Essence drops from Companions mobs feed Ars Nouveau imbuement, so creature hunting has a direct magic payoff.

- from: companions:relic_gold (Sacred Pontiff boss drop — endgame) | via: recipe as gate item for a complex tech/magic recipe | to: create | motif: M-15 | power: endgame | tone: ok — a boss-metal gating a high-tier item is the standard M-15 pattern; "relic gold" reads as rare/special | verdict: ACCEPT | hook: Relic Gold from the Sacred Pontiff gates an endgame Create or magic recipe, so the boss serves both as pressure (danger) and production unlock.

- from: companions:copper_coin / nether_coin / end_coin (self-contained currency) | via: bridging to Numismatics (make companions coins tradeable as a foreign currency) | to: economy | motif: M-08 | power: mid | tone: clash — M-08 is player-minted scarcity-metal → Numismatics; companions coins are an NPC-drop coin, not player-minted; bridging them in would re-introduce an NPC coin faucet under a different name | verdict: REJECT | reason: companions coins are NPC-drop faucets; importing them into Numismatics violates the player-run economy ruling (same kill reason as M-14/M-21); leave the coins as flavor items within the companion mod.

- from: companions tesla/voltaic deco set (copper-using infrastructure) | via: create:crushing to recycle back to copper/nuggets | to: create | motif: M-04 | power: everyday | tone: ok (weak) — the dossier flags this as WEAK and it is; copper deco crushing is generic; it adds a marginal edge | verdict: REJECT | reason: M-04 recycling edge is correct in motif but the tesla/voltaic set is minor decoration with no create-identity of its own; the stronger weave is the magic pathway above; this one is too thin to carry as a weave.

REWORK: dossier's M-09 economy candidate — correctly flagged as MED but M-09 is retired; drop it. The correct economy angle would be M-34 (boss drops farmed and traded) via the Sacred Pontiff boss, but that's captured under M-15 above. Dossier's M-04 is flagged WEAK — confirmed REJECT.

## netmusic   [anchors: support/QoL-flavor (1)]

Current state: pure cosmetic audio — CD player/computer that streams music. Already touches the TLM altar method (music_cd recipe goes through touhou_little_maid:altar_recipe_serializers). loot=yes but "loot" here means only a craftable disc format. No material outputs. No foreign material inputs beyond its own craft.

- LEAVE — genuine zero-weave surface: netmusic produces only NBT-encoded music CDs (cosmetic audio). No material the methods-palette wants, no foreign material it consumes. The TLM altar link is already present and is its natural home. Forcing a Create or economy edge (e.g. "craft the music player with Create parts") would be contrived — the music player has no reason to gate behind a brass engineer. Sanctioned curated-flavor role.

## ctl   [anchors: create, aeronautics (2)]

Current state: already at the 2-pillar goal. Recipes route through create:sequenced_assembly (Create anchor). Purpose is train/contraption lighting (aeronautics/logistics anchor). No material surface for a meaningful 3rd pillar.

- from: ctl lamp set | via: any further weave attempt | to: magic or survival | motif: no-motif | power: everyday | tone: clash — train lights have no thematic connection to magic or food/survival; forcing one would be artificial | verdict: REJECT | reason: no coherent 3rd anchor; mod is already at goal.

OK — connections sound. Create (sequenced_assembly) + aeronautics (contraption lighting) is correct, proportionate, and stable. No REWORK needed.

## better_lib   [anchors: support/library (1)]

0 blocks, 0 items, 0 loot, pure config/messaging API. Genuine zero-content code library.

- LEAVE — zero-surface code library (config/messaging API; no items, no blocks, no loot, no recipe-types). Nothing to weave.

## irons_spellbooks   [anchors: magic, create (2)]

Current state: already ≥2 anchors. Magic (spellcasting spine) + Create (alchemist cauldron already uses create:emptying/filling). Has mithril/pyrium metals with c:tags. The dossier correctly identifies that further weaving is depth not a required 2nd. Need to assess: are existing connections sound? Are there strong deepeners worth proposing?

- from: irons_spellbooks:mithril_ore / raw_mithril | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: everyday | tone: ok — every ore gets doubled through crushing; mithril is a registered ore with c:tags; this is the standard treatment | verdict: ACCEPT | hook: Mithril ore through the Create crusher yields extra raw mithril + a byproduct, so the mithril supply chain sits inside the Create spine.

- from: irons_spellbooks:arcane_essence (Iron's magic currency) | via: ars_nouveau:imbuement (bond ↔ source_gem) | to: magic | motif: M-01 | power: mid | tone: ok — this is the reserved cross-link; arcane_essence IS bonded to source_gem via M-01 per the reagent-ownership table | verdict: ACCEPT | hook: Arcane essence and Ars source gems form the dual-currency magic web — a spell specialist holds one, can convert at cost, keeping the two schools linked but not free-arbitrage.

- from: apothecarist mob drops (irons_spellbooks spawns Apothecarist mobs → drops) | via: irons_spellbooks:alchemist_cauldron_brew (drops as brew ingredients) | to: magic | motif: M-02 | power: mid | tone: ok — mob-drop reagent going into the alchemist cauldron brew method is coherent; "the creature that walks the same world as magic drops something the cauldron wants" | verdict: ACCEPT | hook: Apothecarist mob drops feed the Alchemist Cauldron as brewing reagents, making combat with Iron's mobs a supply chain for potions.

- from: irons_spellbooks scrolls (one-shot consumable spell casts) | via: M-26 consumption mechanic | to: survival | motif: M-26 | power: everyday | tone: ok — scrolls are literally single-use; continuous demand is baked in | verdict: ACCEPT | hook: Scrolls burn on use — a magic specialist who sells scrolls to non-magic players creates repeating demand with no stockpile problem.

- from: irons_spellbooks endgame spell gear (affinity rings, arcane anvil upgrades) | via: MineColonies huts/research or colony-locked components | to: economy | motif: M-28 | power: endgame | tone: ok — high-tier spell gear as a colony-locked exclusive fits the locked-exclusives anti-erosion wall | verdict: ACCEPT | hook: The highest Iron's gear requires a colony-researched component, so the magic specialist either runs a colony or trades with one — the loop closes.

REWORK: dossier lists "none needed — already ≥2 pillars." The above shows five strong deepeners remain unexplored. The existing connections (magic + Create via cauldron) are sound; the REWORK flag is not on them but on the dossier's undercount of remaining candidates. No existing connection needs to be reworked.

## naturescompass   [anchors: support/QoL (1)]

0 blocks, 0 items of consequence, 0 loot, pure biome-finder utility. The 32 items are all atlas/model variants of one tool. Produces no materials.

- LEAVE — QoL information tool only; produces no materials and has no method surface. The compass locates biomes but outputs nothing the methods-palette can consume. Sanctioned exploration utility role.

## ars_n_spells   [anchors: magic (1)]

0 blocks, 0 items, 0 loot, no registered recipe-types. Pure compat bridge between Ars Nouveau and Iron's Spellbooks (shared mana pools, cross-casting). Its entire content surface is two magic systems' mana/spell data — not foreign-material I/O.

- LEAVE — already IS a weave (magic↔magic internal connector), but has zero item/material surface for a 2nd-pillar routing. Forcing one would be artificial. The mana unification is its correct role; any external anchor belongs on the two mods it bridges, not here.

## glitchcore   [anchors: support/library (1)]

0 blocks, 0 items, 0 loot. Loader-abstraction library backing Glitchfiend mods (Serene Seasons, Biomes O' Plenty, TerraBlender).

- LEAVE — zero-surface code library (loader-abstraction API; no items, no blocks, no loot, no recipe-types). Nothing to weave.

## rightclickharvest   [anchors: support/QoL (1)]

0 blocks, 0 items, 0 loot. Interaction-hook behavior mod — right-click harvest + replant. No material processing, no recipe-types.

- LEAVE — pure interaction-behavior QoL; touches no material graph. Nothing to route through any method.

## sable_sa_compat   [anchors: support/compat (1)]

0 blocks, 0 items, 0 loot. Behavior patch making Create: Stuff 'N Additions gear work on Sable physics ships. No recipe-types.

- LEAVE — pure compat behavior patch (no items, no blocks, no recipe-types). Serves the aeronautics pillar indirectly but has zero material surface. Nothing to weave.

## supplementaries   [anchors: create, survival (2)]

Current state: already ≥2 anchors and deeply woven (Create haunting/mixing/splashing, Farmer's Delight cutting, flax crop, ash). The dossier correctly says "leave — already ≥2 pillars and deeply cross-woven." Need to check if existing connections are sound and whether any underexplored surfaces exist.

- from: supplementaries:flax / c:crops/flax (farmable crop, seasonal availability) | via: create:milling or farmersdelight:cutting into rope/string as a Serene Seasons seasonal output | to: survival | motif: M-16 | power: everyday | tone: ok — flax is a crop; Serene Seasons controls what grows when; flax rope/string as a seasonal-gating input to Create rigging or sails is thematically clean | verdict: ACCEPT | hook: Flax rope is only abundant when flax can grow (seasonal gating), so sail/rope production has a natural season-pressure — a light M-16 touch on an already-existing material.

- from: supplementaries:ash (c:dusts/ash, produced via haunting/fire) | via: create:mixing (ash + water → lye, feeding soap making chain) | to: create | motif: M-12 | power: everyday | tone: ok — ash → lye → soap is a real processing chain; supplementaries already produces ash via create:haunting; feeding it forward through create:mixing is the natural next step | verdict: ACCEPT | hook: Ash from haunting feeds into the mixing chain as a soap precursor — a byproduct loop that gives ash a downstream use (M-32 byproduct → input, also fits).

- from: supplementaries jars/safes as trade-storage infrastructure | via: config / placement use | to: economy | motif: M-33 | power: everyday | tone: ok — jars and safes are natural shop/stall infrastructure; a specialist who crafts safes and sells them to trading-post operators provides a service | verdict: REJECT | reason: "jars and safes suit shops" is ambient flavor, not a demand-gating weave; the connection between jar-craft and the economy pillar doesn't gate demand in any mechanic way; falls back to the retired "sellable" logic.

- from: supplementaries:flax, ash, soap as Serene Seasons-gated crop chain | via: seasonal reagent gating | to: survival | motif: M-16 | power: mid (already captured in the flax entry above) | verdict: already captured above; not double-counting.

REWORK: dossier says "none — already ≥2 pillars and deeply cross-woven; adding more edges is unnecessary." The flax seasonal (M-16) and ash processing chain (M-12/M-32) are real additions that the dossier missed by stopping too early. Existing connections are sound.

## create_jetpack   [anchors: create, aeronautics (2)]

Current state: already ≥2 anchors. Create-air-fuelled personal flight (Create) + personal mobility (aeronautics arm). The dossier correctly concludes no coherent further weave — gating is the only lever (boss drop / MineColonies for the Netherite upgrade tier).

- from: create_jetpack:netherite_jetpack (endgame lava-traversal tier) | via: recipe gating behind a boss drop or MineColonies component | to: economy | motif: M-15 or M-28 | power: endgame | tone: ok — gating the Netherite jetpack behind a boss drop or colony-researched component is a clean locked-exclusive; a single player can't just grind to it | verdict: ACCEPT | hook: The lava-traversal Netherite Jetpack requires either a boss-drop component (M-15) or a colony-crafted piece (M-28), making it a high-tier fork rather than a free Netherite craft.

OK — create + aeronautics connections are sound. The Netherite gating above is a deepener (locks the endgame tier), not a forced new pillar.

## architectury   [anchors: support/library (1)]

0 blocks, 0 items, 0 loot. Cross-platform modding API. Genuine zero-content code library.

- LEAVE — zero-surface code library (cross-platform API; no items, no blocks, no loot, no recipe-types). Nothing to weave.

## fluid   [anchors: create, aeronautics (2)]

Current state: already ≥2 anchors. Create-spine fluid tooling (compacting/deploying/mechanical_crafting/mixing) + logistics transport (centrifugal pump / interfaces). The dossier correctly says no forced third needed.

- from: fluid:centrifugal_pump / smart_fluid_interface (high-volume fluid logistics gear) | via: conceptual use as ship-fuel-line infrastructure on Aeronautics vessels | to: aeronautics | motif: M-31 | power: mid | tone: ok — bulk fluid transport across bases/ships is exactly the logistics-required bulk-good framing; a large Create fleet needs fluid infrastructure that makes logistics non-trivial | verdict: ACCEPT | hook: The centrifugal pump + smart interfaces are the fluid-logistics backbone for Aeronautics fuel lines — moving diesel/gasoline at scale requires these components, making fluid logistics a real ship-building investment.

- from: fluid:copper_tap / copper_sink (everyday copper-tier utility) | via: any magic or survival routing | to: magic or survival | motif: no-motif | tone: clash — taps/sinks have no thematic connection to magic or food survival | verdict: REJECT | reason: no-motif; copper plumbing has no sensible magic or survival angle; the tap/sink set is decoration + Create infrastructure only.

OK — create + aeronautics connections are sound. The M-31 logistics deepener is the natural 3rd-pillar touch.

## sparsestructures   [anchors: support/QoL-worldgen (1)]

0 blocks, 0 items, 0 loot. Config-only structure-spacing mod. No items to route.

- LEAVE — pure worldgen config mod (no items, no blocks, no loot, no recipe-types). Serves the scarcity foundation indirectly (rarer structures = rarer loot = more pressure) but has zero material surface. Nothing to weave.

## createoreexcavation   [anchors: create (1)]

Current state: 1 anchor (Create). Fully Create-spine (SU-powered, built via create:crushing/cutting/milling/mechanical_crafting). The veins are configurable per-chunk data; any ore can be a vein output. The economy lever in the dossier is correct: vein-table scarcity → ore → mint is the M-08 chain.

- from: createoreexcavation vein-table outputs (raw ores, including scarce regional metals) | via: create:crushing (ore doubling) → numismatics minting | to: economy | motif: M-08 | power: mid | tone: ok — the drilling machine taps a slow, infinite-but-regional ore vein; the ore goes through crushing; the resulting refined metal feeds player-minted coin; "infinite but slow and regional" is the exact anti-arbitrage shape M-08 needs | verdict: ACCEPT | hook: A Create drilling rig tapping a regional scarce vein outputs metal that, after crushing and processing, becomes player-minted Numismatics coin — the infinite-but-slow vein becomes the long-term currency supply for a settlement.

- from: createoreexcavation:diamond_drill / netherite_drill (high-tier drill heads) | via: gating behind a boss drop or MineColonies-crafted component | to: economy | motif: M-15 | power: endgame | tone: ok — the best drill heads unlocking the most productive veins behind a boss drop makes combat a supply-route for mining efficiency | verdict: ACCEPT | hook: The Netherite drill head needs a boss component — the fighter supplies the part, the miner operator supplies the ore; the two must trade.

- from: createoreexcavation vein outputs | via: createoreexcavation:vein recipe datapack (adding scarce magic-metal veins like mithril) | to: magic | motif: M-29 | power: mid | tone: ok — if mithril (Iron's Spellbooks) is added as a vein output, the drilling machine becomes a magic-metal supply source, cross-routing Create automation into the magic supply chain | verdict: ACCEPT | hook: Adding mithril as a drill-vein output means the Create mining specialist supplies the magic pillar's key metal — a natural cross-route dependency (M-29) without any recipe authoring, just a datapack vein entry.

- from: createoreexcavation drill machines (SU consumers) | via: magic or survival routing | to: magic or survival | motif: no-motif | tone: clash — drills have no organic or magic connection | verdict: REJECT | reason: no-motif; ore-drilling is a Create-only mechanical operation; no survival or magic method wants the drills themselves.

REWORK: dossier identifies economy as MED and "pack-design lever, not a recipe edge." The M-08 above is correctly a design lever (configure vein table + Create crush chain), but it IS a weave in the sense that the method chain (vein → crush → mint) is real and authorable. The M-29 (mithril vein) is a particularly clean cross-route. Existing Create anchor is sound.

## create_confectionery   [anchors: create, survival (2)]

Current state: already ≥2 anchors. Create (cocoa→chocolate chain through mixing/crushing/compacting/filling/pressing) + survival (food/effects). The dossier's only 3rd-pillar candidate is M-09 (retired) economy sell link — that needs retiring.

- from: create_confectionery chocolate (multi-step processed luxury food) | via: player-run trade as the economy's luxury consumption node | to: economy | motif: M-26 | power: mid | tone: ok — chocolate/candies are consumed (M-26 consumption sink); they're non-essential luxury foods that players buy from a specialist chocolate factory; the demand is real but not survival-level (that's what makes them traded goods, not staples) | verdict: ACCEPT | hook: Chocolate and candy bars are a processed luxury — consumed, not stockpiled — so a Create confectionery specialist produces continuous demand without needing an NPC price.

- from: create_confectionery seasonal chocolate variants | via: Serene Seasons gating (cocoa only grows/is obtainable in certain seasons?) | to: survival | motif: M-16 | power: mid | tone: ok (speculative — depends on whether Serene Seasons interacts with cocoa growth) | verdict: REJECT | reason: cocoa in vanilla grows in jungles year-round; Serene Seasons doesn't block cocoa; the seasonal angle requires additional config work that isn't part of this mod's surface and risks being contrived.

- from: create_confectionery hot_chocolate / cocoa butter | via: irons_spellbooks:alchemist_cauldron_brew (as a brew ingredient — warm beverages feeding fire/warmth school) | to: magic | motif: M-12 | power: mid | tone: ok — chocolate/cocoa butter feeding a brew is a real culinary-magic bridge; fire-school potions using warm chocolate as a reagent is whimsical but sensible | verdict: ACCEPT | hook: Hot chocolate and cocoa butter go into the Alchemist Cauldron as fire-school brew ingredients — the confectionery specialist's products have a magic application, cross-linking food production into the spellcasting pillar.

- from: create_confectionery deco blocks (chocolate/gingerbread/caramel bricks) | via: create:crushing to recycle back to chocolate fluid or raw material | to: create | motif: M-04 | power: everyday | tone: ok — deco blocks crushing back to base material is standard M-04; lossy is fine | verdict: ACCEPT | hook: Chocolate brick builds can be crushed back to chocolate fluid (lossily) — a small circularity that keeps the deco tier inside the Create web.

REWORK: dossier's M-09 economy candidate — RETIRED; replace with M-26 consumption above. The existing Create + survival anchors are sound.

## modernfix   [anchors: support/performance (1)]

0 blocks, 0 items, 0 loot. Pure JVM/loader-level performance patches. Genuine zero-content library.

- LEAVE — zero-surface performance mod (no items, no blocks, no loot, no recipe-types). Nothing to weave.

## everycomp   [anchors: support/decoration (1)]

0 meaningful content blocks (the single `everycomp:all_woods` item is a creative-tab grouping handle, not a real item), 0 loot. Runtime wood-variant generator — its outputs are stamped into host-mod namespaces. Nothing to weave on the generator itself.

- LEAVE — decoration palette generator; its outputs already ride the host mods' recipes (including Create wood shapes). Any weaving belongs on the host mods (e.g. woodworks, Create), not on this runtime generator. The generator itself has no independent content surface.

== CHUNK COMPLETE ==
