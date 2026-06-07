# Phase 2 candidates — chunk-04

## createthreadedtrains   [anchors: support/performance (1)]

LEAVE — pure performance mod; 0 items, 0 blocks, 0 recipe-types. Its only surface is tick-scheduling for Create's train network. It indirectly enables the aeronautics/logistics pillar by making large train networks viable, but that is a technical precondition, not a weave-worthy material link. Nothing to route through any method.

---

## spawn   [anchors: survival (1)]

Power-read: spawn has 165 blocks, 296 items, 34 biome-modifiers, loot=yes. The primary content surfaces are (a) seafood drops — clam variants, crab/barnacle, anglerfish, seal — all raw biological materials; (b) date-palm wood (a second wood species with full block family); (c) the casting_net_clam mechanic; (d) existing FD cooking/cutting integration. Everyday items — fish drops, clams. Mid-tier: the date-palm wood set (scarce new biome wood). The mod already has one real inbound weave (farmersdelight:cooking/cutting), which is the floor.

**Candidate A — economy anchor via Numismatics (M-09)**
- from: spawn:clam / spawn:cooked_crab / exotic seafood catches | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: clams as luxury bivalves and exotic deep-sea fish (anglerfish buckets, seal milk) are naturally scarce/desirable goods that a player would sell to a Numismatics vendor. The fishing-to-coin loop rewards specializing in aquatic harvesting. Red-team: crab/clam are common enough to flood the market — counter: the casting_net mechanic is effort-gated (net use), keeping yield moderate. Survives.
- verdict: ACCEPT | hook: Freshwater pearl-clams and deep-sea catches fetch good prices at the trading floor — fishing pays.

**Candidate B — Create processing pull (M-12)**
- from: spawn:clam_case_* / spawn:crab (mob drop) | via: create:milling or farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok
- Theme-fit: crushing a clamshell in a millstone to yield a shell-dust/lime byproduct (calcium byproduct from shells is a real industrial process), or a FD cutting board recipe for crab meat, deepens the seafood processing chain. Red-team: this is light but coherent. The milling depth for a clamshell is clearly "everyday" — one light step, not gated.
- verdict: ACCEPT | hook: Run crab shells through the millstone for lime dust — a Create byproduct that feeds stonecutting chains or fertiliser.

**Candidate C — Create fishery industry pull (M-12)**
- from: spawn fish/clam drops | via: createfisheryindustry:peeling / bait_trap | to: aeronautics (logistics) | motif: M-12 | power: mid | tone: ok
- Theme-fit: spawn's new fish and clams are natural bait/peel inputs for the Create Fishery Industry machine — mechanized aquatic harvesting of spawn's critters. The mod already interacts with vanilla fishing; routing its unique critters through a Create-driven fishery is a plausible automation weave. Red-team: createfisheryindustry is a narrower mod; the pairing is a "nice-if-it-loads" not a load-bearing weave. Keep as secondary.
- verdict: REJECT | reason: Weak — createfisheryindustry integration is not load-bearing for the loop; the FD cooking and Numismatics pair already handle the seafood chain. Don't add a third parallel chain for the same material.

**Candidate D — date-palm wood → Create sawmill (M-12)**
- from: spawn:date_log | via: woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok
- Theme-fit: date logs are a new wood species that already rides woodworks:sawmill (the dossier confirms this inbound weave exists). This is an EXISTING connection — it's already woven.
- verdict: REJECT | reason: Existing inbound weave (woodworks:sawmill already processes spawn's wood per the dossier). Noting here for completeness; no new work needed.

REWORK note on existing connections: The FD cooking/cutting weave is sound and appropriate — it is the correct first anchor and correctly sized (everyday material, light step). OK — existing connections sound.

---

## zeta   [anchors: support/library (1)]

LEAVE — pure code library (Vazkii's module system framework). 0 blocks, 0 items, loot=no. One framework-scaffolding biome-modifier that has no player content. No material surface; nothing to route through any method.

---

## geckolib   [anchors: support/library (1)]

LEAVE — animation/rendering API. 0 blocks, 0 items, loot=no. Renders entities for dozens of mods (Ars Nouveau, Cataclysm, Alex's Mobs, etc.) but exposes no player-facing content or recipe surface. No material to route.

---

## upgrade_aquatic   [anchors: survival (1)]

Power-read: 319 blocks, 379 items, 20 biome-modifiers, loot=yes, 26 c:tags. Very rich — multiple food c:tags (raw_fish, cooked_fish, raw/cooked pike/perch/lionfish, pie, berry), prismarine rods, kelp storage, two new wood sets (driftwood, riverwood), coralstone deco family. The woodworks:sawmill inbound weave is already in place (the one existing connection). Everyday: raw fish, kelp, coral. Mid: cooked fish dishes, prismarine rods. The coralstone building family is mid-tier decorative.

**Candidate A — economy via Numismatics (M-09)**
- from: upgrade_aquatic:cooked_pike / cooked_perch / cooked_lionfish / upgrade_aquatic pie | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: lionfish and exotic ocean fish are high-effort catches — diving/exploring ocean biomes that are dangerous (threshers, hostile jellyfish). Cooked forms as a luxury seafood commodity makes good sense; a player specializing in ocean exploration sells delicacies. Red-team: the food-to-coin M-09 pattern risks flooding if fish are too common — cooked_lionfish and cooked_perch are mid-rarity catches specifically from new ocean biomes, keeping them scarce enough. Survives.
- verdict: ACCEPT | hook: Seared lionfish from the deep ocean fetches real coin at the trading stall — a reason to go diving.

**Candidate B — Create milling pull for coralstone (M-04)**
- from: upgrade_aquatic:*_coralstone (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok
- Theme-fit: coralstone is a stone-type deco block; crushing it lossy back to gravel/crushed mineral (plus XP nugget per M-04) is the Create "recycles deco" motif. A player who builds with coralstone should be able to feed scraps back. Everyday step — one light crush. Red-team: coralstone is decorative, not a load-bearing material; the edge is real but minor. Still coherent.
- verdict: ACCEPT | hook: Excess coralstone goes into the crushing wheel — gravel and XP out, not wasted blocks.

**Candidate C — farmersdelight cooking chain for raw fish (M-12)**
- from: upgrade_aquatic:raw_pike / raw_perch / raw_lionfish | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok
- Theme-fit: the fish explicitly export c:tags for raw/cooked variants; FD cooking is the natural pull method. This extends the cooking web with new fish species, contributing to diet diversity (Survival pressure). Red-team: this is almost certainly already wired via FD's tag-based cooking recipes — if the c:tags are in place, vanilla/FD cooking already handles it without a new recipe. REJECT as redundant unless a specific gap exists.
- verdict: REJECT | reason: The raw_fish c:tag already routes through FD's tag-based cooking generically. Authoring a new recipe would be noise over an existing tag path.

**Candidate D — Ars Nouveau imbuement for jellyfish (M-10)**
- from: upgrade_aquatic jellyfish drops (bioluminescent fluid concept) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash
- Theme-fit: jellyfish have a bioluminescent/electric vibe — a superficial thematic match to arcane infusion. Red-team: jellyfish drops are not documented in the dossier; this requires assuming a drop the sweep didn't confirm. The "bioluminescent → magic" link is a theme stretch, not a tight mechanical fit. Fails red-team on both evidence and theme.
- verdict: REJECT | reason: No documented jellyfish drop with a clear arcane use; theme connection is a stretch. Don't force.

REWORK on existing connections: woodworks:sawmill is the only current inbound weave; it's sound (driftwood/riverwood → planks via sawmill). Two ACCEPT candidates (M-09 economy, M-04 Create recycling) bring it to two anchors. OK — existing connection sound; new weaves add economy and Create.

---

## staaaaaaaaaaaack   [anchors: support/QoL (1)]

LEAVE — pure drop-merge behavior mod. 0 items, 0 blocks, 0 recipe-types, loot=no. Coalesces item entities generically — no mod-specific material surface, no processing method, nothing to route. Genuine zero-content utility; a forced edge would be noise.

---

## endrem   [anchors: survival (1)]

Power-read: 1 block (ancient_portal_frame), 20 items (16 themed eyes + frame/misc), loot=yes. The entire content surface is the 16 eye items — themed drops sourced from structure loot, bosses, and mining. The eyes ARE the product; portal activation is a one-time progression event. Power tier: the eyes collectively are mid-to-endgame (the End itself is endgame); individual eyes vary from everyday (some mining/common loot) to boss-locked. The design intent is explicitly exploration — any craft path must remain costly so it doesn't trivialize that intent.

**Candidate A — magic via occultism:ritual or ars_nouveau:enchanting_apparatus (M-11/M-02)**
- from: endrem:undead_eye / nether_eye / guardian_eye (themed eyes) | via: occultism:ritual or ars_nouveau:enchanting_apparatus | to: magic | motif: M-11 | power: mid | tone: ok
- Theme-fit: the eyes are thematically "corrupted/undead/nether" — perfect material for an Occultism ritual (spirit_fire transmutation) or an Ars apparatus infusion. A stuck player can ritual-craft a hard-to-find eye from matching themed drops (e.g. undead reagents → undead_eye), so the End gate can't dead-end without removing the exploration-gate flavor. Red-team: this risks trivializing the loot-hunt if recipes are cheap. Counter: gate the ritual behind significant magic investment (endgame occultism materials as co-inputs), keeping the eye valuable but not purely RNG-locked. At most 3-4 of the 16 eyes should have craft paths; the rest stay loot-only. Survives.
- verdict: ACCEPT | hook: The undead eye won't yield from any grave — but a spirit-fire ritual with the right reagents can coax one from the beyond.

**Candidate B — Create via create:sequenced_assembly (M-06)**
- from: endrem:mechanical/arcane-flavored eyes (e.g. exotic_eye, cryptic_eye) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: clash
- Theme-fit: The sequenced-assembly keystone is a Create-spine deepening for endgame items. An "exotic" or "cryptic" eye assembled from a precision multi-step chain could thematically represent an "engineered artefact." Red-team: the eyes are framed as mystical/exploration rewards — a clockwork assembly line feels tonally wrong for something that opens a portal to the End. The mod's entire vibe is "explore the world for these." Forcing a Create chain onto a mystical portal gate is a lore clash. REJECT on tone.
- verdict: REJECT | reason: Tone clash — portal eyes are exploration/ritual rewards; a sequenced-assembly conveyor line for them reads as industrial parody, not depth. Stick to the ritual/magic route (Candidate A).

**Candidate C — boss-key unlock (M-15)**
- from: endrem eyes that are boss-dropped (e.g. guardian_eye from an Elder Guardian / cataclysm boss) | via: existing loot-table seeding | to: survival (danger) | motif: M-15 | power: endgame | tone: ok
- Theme-fit: endrem is already designed around boss drops; this is less a new weave and more a confirmation of an existing design axis. The boss-key motif is relevant: a boss's signature drop gates the Eye and therefore the End. This is already partly how endrem works (some eyes are boss-sourced). The weave here is: ensure pack bosses (Cataclysm, Alex's Mobs, Deeper & Darker) seed endrem-relevant loot. Via: loot-seed.
- verdict: ACCEPT | hook: The Ignis doesn't just drop loot — its eye shard is one of the sixteen that opens the ancient portal.

REWORK on existing connections: endrem has no existing inbound weaves (vanilla only). Two ACCEPT candidates (M-11 magic ritual craft-path, M-15 boss-key loot-seed) give it survival + magic + Create/danger anchors. OK — no prior connections to flag.

---

## touhou_little_maid   [anchors: survival (1)]

Power-read: 16 blocks, 85 items, loot=yes, one registered recipe-type (altar_recipe_serializers). The altar multiblock is a genuine non-Create ritual-style machine — it accepts arbitrary item inputs + power-point bottles and yields maids/items. The mod is KubeJS-extensible for altar recipes. Items: maids, brooms (rideable, flight-adjacent), cameras, backpacks, altar furnishings. Maids automate: farming, fishing, ranching, combat. Power tier: a basic maid is mid-tier (lapis+diamond+gold+redstone+iron+coal). The broom (hay+sticks+ender eye) is mid. The camera is mid. Automation output (a maid farming or fishing) is an ongoing economy asset.

**Candidate A — magic via altar recipe gating with boss-drop input (M-05 / M-11)**
- from: pack boss drops (cataclysm, deeperdarker, endrem, etc.) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: endgame | tone: ok
- Theme-fit: the altar is a ritual-summoning platform — spending powerful offerings to summon a companion being is thematically coherent with the "summoning" vocabulary in the magic pillar (Occultism's rituals, Ars Nouveau's summoning rituals). Gate a high-tier maid variant or a powerful upgrade behind a boss drop as an altar input, tying TLM into the boss-drop production route. The altar's "power point" currency + rare material inputs read as an arcane rite. Red-team: the Touhou aesthetic is anime/shrine-maiden, not grimdark-occult — but ritual-summoning with offerings is exactly the Touhou lore around shrines (donations → divine favor). The theme holds. Endgame cost is appropriate for the automation payoff.
- verdict: ACCEPT | hook: To summon a skilled Oni maid, the altar demands a tribute the bosses guard — offerings, not gold.

**Candidate B — economy via power-point bottles as a Numismatics sink (M-02 / M-09)**
- from: touhou_little_maid:power_point_bottle (dropped by fairy-type mobs, or found in village loot) | via: numismatics sell/buy | to: economy | motif: M-09 | power: everyday | tone: ok
- Theme-fit: power-point bottles are a functional currency within TLM (altar fuel). Making them purchasable/sellable at Numismatics stalls creates a supply chain — a player who slays fairies or finds loot funds other players' altar summoning needs. Red-team: the TLM economy is mostly internal; pulling power-point bottles into the coin economy could feel forced. Counter: it's a light one-step link (power bottles are already a trade good in TLM's own dealer villages), so the Numismatics bridge is a natural extension. Survives, but this is a secondary weave.
- verdict: ACCEPT | hook: Fairy-hunt surplus? Sell those power bottles at the stall — another player's altar is always hungry.

**Candidate C — aeronautics via broom (flight)**
- from: touhou_little_maid:broom | via: aeronautics pillar thematic | to: aeronautics | motif: no-motif | power: mid | tone: ok
- Theme-fit: the broom is a rideable flying item when a maid sits on it. It's personal flight, adjacent to the aeronautics pillar. Red-team: the broom has no recipe type to weave through; it's a vanilla-item-like entity behavior. There's no motif that cleanly fits "rideable broom = aeronautics anchor." The aeronautics motifs (M-13, M-23, M-24) are about fuel/structural/drivetrain, not personal broom flight. Motif: no-motif → REJECT per briefing rules.
- verdict: REJECT | reason: no-motif — the broom's flight is thematically adjacent to aeronautics but there's no method-routing or approved motif for "personal magical flight = aeronautics anchor." Don't force.

REWORK on existing connections: TLM currently has no inbound weaves (vanilla only). Two ACCEPT candidates (M-05 boss-key altar gating, M-09 power-point economy) place it in magic + economy, giving it two anchors. Existing connections: none to flag.

---

## createmechanicalcompanion   [anchors: Create (1)]

Power-read: 0 blocks, 21 items, loot=yes (a spawn egg for illager engineer). Already heavily woven INTO Create — the dossier confirms inbound weaves: create:deploying, create:mechanical_crafting, create:sandpaper_polishing, create:sequenced_assembly. The companion itself uses incomplete_* sequenced parts — it's a Create endgame reward. The dossier explicitly says "none — leave; it's a personal combat companion; combat isn't a pillar and there's no tradeable/magic/transport surface to route."

Re-examining for second anchor: items include netherite_plates, optical_sensor, quantum_drive, mounted_crossbow, mob_radar, regenerative_casing, booster_rocket. The quantum_drive and optical_sensor are thematically tech-high-end. The mob_radar pings nearby hostiles.

**Candidate A — survival/danger anchor via illager engineer mob (M-02)**
- from: createmechanicalcompanion:illager_engineer_spawn_egg / illager enemy (drops) | via: loot-seed | to: survival (danger) | motif: M-02 | power: mid | tone: ok
- Theme-fit: the mod includes an Illager Engineer mob (the potato cannon illager + illager_engineer spawn eggs in the item sample). This is a combat-facing hostile mob. Seeding its loot table with a craft-relevant drop (a partial mechanical part, a blueprint fragment) ties the danger-pressure node directly: players are incentivized to fight the illager engineer to advance Create progression. Red-team: the mod's focus is the companion, not the enemy — the illager engineer seems secondary. Counter: it has a proper spawn egg, which means it can spawn in the world; a loot table seed is lightweight (one drop entry, doesn't change the mod's design). Survives as a light danger-pressure weave.
- verdict: ACCEPT | hook: The Illager Engineer patrols in armed squads — and their gear fragments are worth salvaging for your own mechanical wolf build.

**Candidate B — aeronautics via booster_rocket (M-24)**
- from: createmechanicalcompanion:booster_rocket | via: aeronautics drivetrain/recipe | to: aeronautics | motif: M-24 | power: endgame | tone: ok
- Theme-fit: a "booster_rocket" item in an industrial-clockwork companion mod is a natural fit for the Aeronautics propulsion/drivetrain side. M-24 says "mechanical part (rotor, bearing, engine block) feeds Aeronautics propellers, engines, and control surfaces." A booster rocket is exactly a propulsion component. Red-team: the booster_rocket may be an upgrade module for the wolf companion specifically (flight/dash boost), not a loose propulsion component for aircraft. If it's companion-only, routing it into an Aeronautics recipe is a forced repurpose. Checking dossier: the item sample lists "booster_rocket" alongside wolf modules — the name strongly suggests it's a companion dash/flight module. Forcing this into airship propulsion would feel arbitrary. REJECT on forced-repurpose.
- verdict: REJECT | reason: booster_rocket appears to be a wolf-companion module, not a loose propulsion component; routing it into aeronautics construction would be arbitrary item-ID repurposing. Don't force.

REWORK on existing connections: The existing Create weaves (deploying, mechanical_crafting, sandpaper_polishing, sequenced_assembly) are all sound — the companion is built through the Create spine as intended. The illager engineer loot-seed (Candidate A) adds a light survival/danger anchor. OK — Create connections sound; loot-seed adds survival pressure tie.

---

## betterpingdisplay   [anchors: support/client-UI (1)]

LEAVE — numerical ping display mod. 0 items, 0 blocks, loot=no, no recipe-types. Client-side UI tweak with no material surface. Genuine zero-content QoL; sanctioned support role.

---

## mousetweaks   [anchors: support/QoL (1)]

LEAVE — client inventory-management input-handling mod. 0 items, 0 blocks, loot=no, no recipe-types. Drag mechanics and scroll-wheel transfer — a behavior mod with zero material surface. Sanctioned QoL support role.

---

## sound_physics_remastered   [anchors: support/client (1)]

LEAVE — client audio mod (raytraced reverb/attenuation). 0 items, 0 blocks, loot=no, no recipe-types. Audio simulation with no gameplay surface whatsoever. Sanctioned immersion support role.

---

## puzzleslib   [anchors: support/library (1)]

LEAVE — multi-loader library/framework for Fuzs mods. 0 blocks, 0 items, loot=no, no recipe-types. Pure developer infrastructure; no player-facing content. Genuine zero-content library.

---

## comforts   [anchors: survival (1)]

Power-read: 33 blocks, 33 items (16 sleeping bags + 16 hammocks + rope_and_nail), loot=yes, 0 c:tags. All items are wool+string vanilla recipes. The sleeping bag is a portable respawn-on-move item; the hammock flips day/night. Both are cozy-exploration tools. Power tier: everyday (cheap wool craft). The dossier says "leave — forced economy/Create edge on dyed sleeping bags would be noise."

Re-examining for a genuine (non-forced) second anchor: the 30+ mob-themed variants of Traveler's Backpack show that a Create-component weave on a high-tier sleeping bag variant could work, but comforts has only 16 color variants — no mob themes, no material gradient. The hammock is an unusual "day → night skip" tool. Could the hammock or sleeping bag be a loot-seed in structure chests (M-15-adjacent)? Possibly, but sleeping bags/hammocks in loot tables don't advance the loop — they're QoL items, not reagents or progression keys.

**Candidate A — Create via a higher-tier "expedition camping kit" (M-20)**
- from: comforts:sleeping_bag (wool-only baseline) → comforts:hammock | via: create:item_application / create:deploying | to: create | motif: M-20 | power: everyday | tone: clash
- Theme-fit: M-20 is "deploy-application upgrade" — applying a woven part onto a base to upgrade it. A hammock upgraded by deploying a Create-made rope/rivet kit to become an "expedition hammock" sounds plausible on paper. Red-team: the mod's whole point is that these are cheap, accessible camping items — adding a Create deployment step to a sleeping bag would price out early explorers who need it most. Also the upgrade would be cosmetic/minor (a sleeping bag is a sleeping bag). The cost model says "basics ≈3× but depth scales with power" — a sleeping bag is a basic, so it should stay cheap. Fails the basic-gate guardrail.
- verdict: REJECT | reason: Guardrail violation — sleeping bags are basic/early items; gating an expedition sleeping bag behind Create deployment conflicts with the "never gate a basic/everyday component behind a complex recipe" rule.

**Candidate B — aeronautics as expedition-logistics anchor (thematic)**
- from: comforts:sleeping_bag (portable spawn reset) | via: no method — thematic support role | to: aeronautics | motif: no-motif | power: everyday | tone: ok
- Theme-fit: for long-range aeronautics expeditions, a portable sleeping bag that resets spawn without a bed is load-bearing exploration gear. But there's no method to route through — it's a player-behavior fit, not a recipe weave. Motif: no-motif → REJECT per briefing rules.
- verdict: REJECT | reason: no-motif — thematic fit as expedition gear doesn't route through any method; the aeronautics anchors require a recipe/loot/method link, not a behavioral observation.

LEAVE — the dossier is correct. Comforts is a small QoL survival mod; both candidate directions fail (basic-gate guardrail, no-motif). It earns its survival anchor as flavor/QoL support; no coherent 2nd anchor exists without forcing.

---

## l2library   [anchors: support/library (1)]

LEAVE — developer library for LightLand mods (l2hostility etc.). 0 blocks, 0 items, loot=no, no recipe-types. Pure code abstraction layer; no player-facing content at all. Genuine zero-content library.

---

## smokeleafindustries   [anchors: survival (1)]

Power-read: 62 blocks, 243 items, loot=yes, 12 registered recipe-types. This is a fully-featured tech farm mod with its own FE energy system, multi-step processing chain (drying→grinding→extracting→liquifying→synthesizing), 25 crop strains, and effect-granting consumables. Its own village trades exist (dealer/stoner villagers). This is a substantial mod, currently entirely isolated (no inbound weaves at all — vanilla only). The dossier identifies three strong candidates; all need evaluation.

**Candidate A — economy via Numismatics (M-09)**
- from: smokeleafindustries extract / gummy / processed product (refined output tier) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: the mod already has built-in village trades (dealer/stoner NPCs sell/buy product), proving the sell-loop is intentional. Extending that to Numismatics coin makes the strain farm a proper economy contributor — extracts and gummies are luxury consumable effect-items (status buffs) that players in a co-op pack would genuinely buy. The processing chain (drying→grinding→extracting→liquifying) is a multi-step investment that gives the output genuine value. Red-team: the stoner/dealer vibe is humorous and could clash with the pack's "serious small co-op" framing; the CLAUDE.md calls it "cooperative PvPvE" but doesn't exclude humor. The mod is in the pack by design, so the tone is accepted. Survives.
- verdict: ACCEPT | hook: A well-tuned extract fetches good coin at the trade stall — the strain farm is a real economy contributor, not just a personal buzz.

**Candidate B — Create via createaddition FE↔kinetic bridge (M-05 / M-17)**
- from: smokeleafindustries:generator (FE output) / smokeleafindustries machines (FE consumers) | via: createaddition:charging / liquid_burning | to: create | motif: M-17 | power: mid | tone: ok
- Theme-fit: the smokeleaf generator produces FE; the other smokeleaf machines consume FE. Create: Addition provides a kinetic↔FE bridge (`createaddition:charging`, `liquid_burning`). Wiring a Create rotational source into the smokeleaf machines (or the smokeleaf generator into Create Addition's electric network) pulls this isolated FE island into the Create spine without retheming either mod. A player powers their grow operation from a windmill/waterwheel → Create Addition → smokeleaf machines: that's a coherent Create+industrial-farm supply chain. Red-team: M-17 says "only when it makes sense" — an FE-powered grow-op driven by Create kinetics is exactly the scenario it was designed for (FE tool/machine charging as a Create bridge). Passes.
- verdict: ACCEPT | hook: Hook the grow room's machines to a Create kinetic generator — no diesel required, just enough rotation.

**Candidate C — Create via create:milling / create:crushing (M-12)**
- from: smokeleafindustries raw hemp buds / dried product | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok
- Theme-fit: the smokeleaf grinder already processes buds — routing raw hemp through Create's millstone as an alternative/entry-point to its own grinder chain (before the mod's machines come online) is a light processing-chain pull. Everyday step. Red-team: this creates a parallel path to the mod's own grinder, which might make the early manual_grinder redundant. Counter: the millstone output could yield a different intermediate (ground plant fiber for fertilizer, not bud-grade product), so it's an orthogonal path, not a replacement. Keep it light and differentiated.
- verdict: ACCEPT | hook: Raw hemp through the millstone yields plant fiber for fertilizer — the strain farm and the Create cycle share a feedstock.

**REWORK note on existing connections:** No existing inbound weaves. Three ACCEPT candidates (M-09 economy, M-17 Create FE-bridge, M-12 Create milling) give survival + economy + Create anchors. All three advance the loop in different directions. Prioritize M-09 (economy) and M-17 (Create) as the two primary anchors; M-12 is a bonus light step.

---

## aileron   [anchors: aeronautics (1)]

Power-read: 0 blocks, 0 items, loot=yes (enchants injected into loot), 0 c:tags. Content surface is purely: (a) new Elytra enchantments, (b) modified flight physics. The enchantments are present in loot tables. No craftable items in the aileron namespace.

**Candidate A — magic via Ars Nouveau enchanting_apparatus for Aileron Elytra enchants (M-10)**
- from: aileron's Elytra enchantments (loot-seeded) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok
- Theme-fit: Ars Nouveau's enchanting apparatus can apply enchantments to items; if Aileron's enchantments are registered in the vanilla enchantment registry (which they likely are, since they use vanilla loot injection), the apparatus can apply them. This gives magic players a craft-path to Elytra upgrades — instead of hunting loot, a specialist Ars player enchants Elytras via the apparatus. Red-team: the dossier flags this as WEAK and notes "only if its enchants are datapack-exposed." The risk is that Aileron's custom enchants might not be discoverable by the apparatus (depends on how they're registered — forge enchantment tags vs. vanilla registry). If they're in the standard enchantment pool, this works; if they're gated behind specific loot tables only, the apparatus can't pull them. This is a BALANCE-PENDING / implementation-dependent candidate. The thematic fit is sound: arcane master upgrades the aeronaut's wings. Survives with a caveat.
- verdict: ACCEPT | hook: The enchanting apparatus can bless the wings of a skilled flier — magic opens flight paths loot tables keep locked.

**Candidate B — survival/danger via loot-seed in dangerous structures (M-15-adjacent)**
- from: aileron enchantment books (loot=yes) | via: loot-seed | to: survival (exploration/danger) | motif: M-15 | power: mid | tone: ok
- Theme-fit: Aileron's enchantments are already in loot tables (loot=yes in the dossier). Seeding them specifically into dangerous structures (Cataclysm boss vaults, Deeper & Darker city chests, End City) would make the best Elytra upgrades a danger-exploration reward, tying flight progression to the danger-pressure node. This is a loot-table seeding weave (Phase-3 datapack edit). Red-team: this is probably already happening by default (Aileron injects into standard loot tables which include structure chests). The weave would be a deliberate *concentration* of Aileron's best enchants into the hardest structures. Survivable — it's not just "it exists in loot" but "we make the best ones hard to get." Lightweight, real value.
- verdict: ACCEPT | hook: The best wing enchantments don't roll from common chests — they're found in end-tier ruins, pushing aeronauts to explore the dangerous frontier.

REWORK on existing connections: No existing inbound weaves. Two ACCEPT candidates (M-10 magic enchanting, M-15-via-loot-seed danger/survival) give aeronautics + magic + survival anchors — three total including the existing aeronautics anchor. OK — no prior connections to flag.

---

## travelersbackpack   [anchors: survival (1)]

Power-read: 60 blocks, 84 items, loot=yes, 2 recipe-types (backpack_shaped, backpack_upgrade). ~30 mob/material-themed variants plus upgrade modules. The backpack is a wearable storage container with two fluid tanks and a sleeping bag. Items: backpack_tank, smelting/blast_furnace/crafting/tank upgrade modules, themed packs (dragon, netherite, cow, blaze…). No current inbound weaves. Power tier: leather/basic packs are everyday; the netherite/dragon packs and fluid-tank upgrades are mid-to-endgame.

**Candidate A — Create via create:sequenced_assembly for high-tier backpacks (M-06 / M-20)**
- from: travelersbackpack:netherite / travelersbackpack:dragon (high-tier packs) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok
- Theme-fit: M-06 (sequenced-assembly keystone) is for endgame flagship items built through a multi-stage Create chain. A netherite-reinforced expedition backpack — with its fluid tanks, sleeping bag, and upgrade slots — is exactly the kind of complex personal tool that a sequenced assembly chain fits. Gate the netherite and dragon packs behind a derpack:incomplete_expedition_pack intermediate through the assembly line (press the frame, deploy the tanks, apply the reinforcement). Everyday leather packs stay vanilla-crafting; only endgame variants go deep. This respects the cost model. Red-team: the mod has 30 variants — gating even 2-3 of them behind sequenced assembly is manageable. The sleeping bag + fluid tank make this feel like a genuine engineered product, not just "any item gets sequenced." Passes.
- verdict: ACCEPT | hook: The expedition-grade netherite pack isn't sewn by hand — it's pressed, fitted, and tank-sealed on the assembly line.

**Candidate B — aeronautics as expedition-logistics anchor (M-23-adjacent / thematic)**
- from: travelersbackpack:backpack_tank (portable fluid buffer) | via: no direct method | to: aeronautics | motif: no-motif | power: mid | tone: ok
- Theme-fit: the backpack's dual fluid tanks (hold water/lava/potions) and portable respawn make it compelling expedition-logistics gear for Aeronautics crew. But "useful for aeronautics expeditions" is a behavioral observation, not a method-routed weave. No motif covers "portable gear useful during flights." Motif: no-motif → REJECT per briefing rules.
- verdict: REJECT | reason: no-motif — the backpack is thematically useful for aeronautics but there's no recipe/loot/method link to anchor it to the aeronautics pillar; behavioral adjacency alone isn't a weave.

**Candidate C — economy via Numismatics (M-09)**
- from: travelersbackpack:* (themed packs) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: the ~30 themed backpack variants (dragon, netherite, enderman, ghast…) could serve as premium crafted goods sold at market — a Travelers Backpack craftsperson specializes in high-end packs for the trading floor. Red-team: backpacks are personal use items; trading a "ghast-face backpack" to another player makes some sense (gift/commission economy) but they're not "luxury goods" in the M-09 sense (which targets consumables like wine/cheese/extract that a player buys regularly). Backpacks are one-time gear purchases, not a repeat consumable sink. The economy anchor here is thin — more a "this can be sold" than a real driver of the trade loop. Marginal.
- verdict: REJECT | reason: Backpacks are durable gear items, not repeat consumables — they don't drive a recurring trade loop the way M-09's luxury food/extract examples do. Create weave (Candidate A) is the stronger 2nd anchor.

REWORK on existing connections: No existing inbound weaves. One ACCEPT candidate (M-06 sequenced-assembly for endgame packs) gives survival + Create anchors. OK — no prior connections to flag.

---

## sablecollisiondamage   [anchors: support/aeronautics-addon (1)]

LEAVE — behavior addon for Sable/Create Aeronautics collision physics. 0 items, 0 blocks, loot=no, no recipe-types. Applies damage on ship collisions — a physics-behavior layer with no material surface. Serves the aeronautics pillar by making collisions consequential for PvPvE, but this is a technical precondition, not a weave-worthy link. Genuine zero-content behavior mod.

---

## create_connected   [anchors: Create (1)]

Power-read: 65 blocks, 57 items, loot=yes, 0 registered recipe-types. Existing inbound weaves: create:cutting, create:filling, create:item_application, create:sequenced_assembly — already deeply woven INTO Create. Content includes: copycat family (cosmetic), kinetic_battery, inventory_bridge, item_silo, fan catalyst blocks (blasting/haunting/splashing etc.), brass_gearbox, kinetic_bridge, logic signal blocks. The dossier says "support role (Create-spine QoL; leave)."

Re-examining for a genuine second anchor:
- The fan catalyst blocks (fan_haunting_catalyst, fan_blasting_catalyst, fan_splashing_catalyst, fan_enriched_catalyst, fan_ending_catalyst_dragon_head) are physically interesting — `fan_ending_catalyst_dragons_breath` uses dragon's breath, which is a magic/endgame material.
- The kinetic_battery stores rotation — a potential Create↔aeronautics link (store kinetic energy from wind/water, discharge to power ship systems).
- The empty_fan_catalyst / filled variants suggest a crafting/filling chain.

**Candidate A — aeronautics via kinetic_battery as ship power storage (M-24)**
- from: create_connected:kinetic_battery / kinetic_bridge | via: aeronautics recipe (structural/drivetrain component) | to: aeronautics | motif: M-24 | power: mid | tone: ok
- Theme-fit: M-24 is "mechanical component → propulsion/control." A kinetic battery stores rotational energy; on an airship, a kinetic battery buffer feeding propellers between wind gusts is an engineering-coherent component. Routing kinetic_battery into an Aeronautics drivetrain recipe (as a required energy storage block for the ship's kinetic system) ties Create Connected into the aeronautics construction supply chain. Red-team: the kinetic battery is primarily a Create QoL item for land machines; it's not uniquely aeronautical. But it IS a mechanical energy storage component, which is exactly what a Create-powered airship needs. M-24's scope is "mechanical part → aeronautics drivetrain/control" — a kinetic battery is a mechanical part. Survives.
- verdict: ACCEPT | hook: The kinetic battery isn't just for your factory floor — a ship's propulsion system needs stored rotation for calm-air stretches.

**Candidate B — magic via fan_ending_catalyst_dragons_breath (M-19 / M-11)**
- from: create_connected:fan_ending_catalyst_dragon_head / fan_ending_catalyst_dragons_breath | via: create:haunting (the fan creates a soul-fire beam) | to: magic | motif: M-19 | power: endgame | tone: ok
- Theme-fit: M-19 is "create:haunting — Create's soul-fire transmutes an item." The fan_haunting_catalyst is literally Create's haunting mechanic exposed as a standalone block — and the dragon_head variant uses dragon's breath (a magic/endgame material). Using Create Connected's haunting/ending fan catalysts as the delivery mechanism for M-19 soul-seam weaves (transmuting items through the fan) is a coherent expansion of an existing motif. The dragon_head/dragon_breath catalyst is endgame-gated material, appropriate for endgame recipes. Red-team: these catalysts are already CREATE-internal (they just extend Create's fan processing in block form); routing them into a magic output is the same as using a vanilla haunting fan — it's not a new connection, it's the same connection via a different block form. Marginal.
- verdict: REJECT | reason: Marginal — the fan_haunting/ending catalysts implement the same haunting/soul-fire logic as vanilla Create fans; the weave is M-19 on Create proper, not on Create Connected specifically. The value add over "use a Create fan directly" is cosmetic convenience, not a new cross-system link.

REWORK on existing connections: The existing Create inbound weaves (cutting, filling, item_application, sequenced_assembly) are sound — this is Create-internal build chain for its own blocks. One ACCEPT candidate (M-24 kinetic_battery → aeronautics) adds a Create ↔ aeronautics anchor. OK — existing Create connections sound; aeronautics weave adds a second anchor.

== CHUNK COMPLETE ==

