# Phase 2 candidates — chunk-07  (pass-25, blind)

## copycats   [anchors: create (2)]
- from: copycat blank shapes (zinc-built) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: already lives inside Create (zinc-built deco); a recycle edge back to the same pillar adds no cross-system reach.
- from: copycat skin-application (universal block disguise) | via: aeronautics hull/airframe cladding | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no-motif; disguise is purely cosmetic and applies to any block already — no distinctive structural tie (M-23 wants load-bearing fabricated metal, not a skin).
- LEAVE — Create-decoration addon; its whole value is *extending the Create build vocabulary*. Already a clean Create anchor; a forced 2nd pillar would be arbitrary. (Not a zero-surface library, but no coherent cross-system material.)

## createoreexcavation   [anchors: create (1)]
- from: vein-table outputs (scarce regional metals) | via: createoreexcavation:vein config + create:crushing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: "the infinite-but-slow drill is what finally lets a metal specialist mint coin at scale" — structurally distinctive: it is the regional-scarcity faucet, a specialization-defining distribution node (not bare sellability).
- from: drilling machine (SU-gated infinite ore) | via: createoreexcavation:vein keyed to magic-mod ore (occultism silver / galosphere palladium) | to: magic | motif: M-03 | power: endgame | tone: ok | verdict: ACCEPT | hook: "a Create drill can be configured to tap the magic side's scarce metal vein, so the tech base sustains a magic supplier" — method-pull: the vein table WANTS any ore, including magic reagents' source metals.
- REWORK: existing Create anchor is sound (SU-powered, built via create:crushing/cutting/milling). OK — connection sound; the mod is just single-anchor, addressed by the two above.

## fogoverrides   [anchors: support (1)]
- LEAVE — client-only cosmetic fog config; zero items/blocks/methods. Genuine no-surface support mod.

## dynamic_fps   [anchors: support (1)]
- LEAVE — client performance utility; no items or methods to route. Sanctioned support role.

## recipe_integration   [anchors: support (1)]
- LEAVE — it IS the connective layer (authors ~3,700 cross-mod recipes through foreign methods); no content node of its own to weave. Note for Phase 3: audit which of its 82 c:tags actually fire on THIS modlist (most reference uninstalled mods and are inert) — a cleanup, not a weave.

## createmetalwork   [anchors: create (1)]
- from: c:crushed_raw_materials/* (processed scarce metals) | via: create:crushing→mixing→compacting → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "the higher-yield molten pipeline is exactly the feedstock a coin-minter wants — refined regional scarcity becomes the mint supply" — distinctive: it is the yield on-ramp that defines the metal specialist's output, a loop-advancing node, not bare sellability.
- from: crushed forms of magic-mod ores (occultism silver, galosphere palladium) | via: create:crushing/mixing (its own molten pipeline) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: "the magic side's scarce metal gets the same Create doubling reward as any other ore" — method-pull: it already tags crushed forms for the modded roster; routing magic metals through earns magic a Create doubling.
- REWORK: Create anchor sound (M-03 ore-doubling layer). OK — connection sound.

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — client camera/movement feel mod (Do-a-Barrel-Roll addon); no items/methods. No-surface support.

## alternate_current   [anchors: support (1)]
- LEAVE — redstone-propagation performance patch; pure behavior, no items/methods. No-surface support.

## gravestone   [anchors: survival (1)]
- from: gravestone block / obituary item | via: occultism ritual or create:haunting | to: magic | motif: M-19 | power: everyday | tone: clash | verdict: REJECT | reason: red-team — a death-recovery QoL utility is meant to be frictionless; gating recovery behind a ritual/haunting fights the mod's anti-frustration purpose and is contrived. Theme-clash.
- LEAVE — death-recovery utility; no craftable material to route, any weave would be contrived (per guardrail on anti-frustration mods).

## endrem   [anchors: survival (1)]
- from: hard-to-find themed eyes (undead/nether/corrupted) | via: occultism:ritual / ars_nouveau:enchanting_apparatus transmute from matching themed drop | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: "the undead eye can be ritually transmuted from a matching undead reagent, so a stuck player has a costly craft path and the eyes feed the magic web" — at most a couple of eyes, kept costly so exploration intent survives.
- from: 1-2 eyes | via: create:sequenced_assembly through a derpack:incomplete_* part | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: red-team — Create-assembling an End key trivializes the exploration gate that is the mod's entire point; the magic transmute route above already covers the "don't dead-end" need without a tech bypass. Keep RNG/exploration primary.
- REWORK: survival anchor sound (exploration gate). OK — connection sound; the magic transmute is its 2nd anchor.

## lithostitched__tectonic-3.0   [anchors: support (1)]
- LEAVE — pure worldgen/terrain-shape datapack; no items/methods/loot. Thematic rhyme with regional-scarcity ore-spread but nothing to recipe-route. No-surface.

## startuptime   [anchors: support (1)]
- LEAVE — boot-time logger; reads the clock, writes one log line. No-surface support.

## dungeons_arise_seven_seas   [anchors: survival (1)]
- from: naval-structure loot chests | via: loot-seed (datapack) → numismatics coin / boss-key drops | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: economy de-emphasis — a generic "seed coin into dungeon loot" is non-distinctive; nearly every structure mod can do this. Not a structural loop-closer.
- from: ship/floating-fortress loot chests | via: loot-seed → aeronautics levitite_blend / portable-engine parts as themed rewards | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: "boarding a derelict galleon or sky-fortress and finding airship lift/engine components is thematically on-the-nose — nautical wrecks seed the next vessel" — loot-seed delivery; the naval theme makes aeronautics parts a coherent, distinctive reward (not generic coin).
- REWORK: survival anchor sound (ocean exploration). OK — connection sound.

## aeronautics   [anchors: aeronautics (1), create de-facto (2)]
- from: levitite (zinc + end-stone-powder gated bulk lift) | via: recipe scarcity + numismatics | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: "every builder needs lift; a mass-production specialist becomes the server's levitite supplier" — distinctive: zinc+end-stone scarcity makes a specialization-defining distribution node, the economy's physical-goods supplier, not bare sellability.
- from: levitite_blend in-world crystallization step (code recipe) | via: KubeJS requiring an Occultism/Ars catalyst adjacent | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: "the blend-to-levitite catalysis is a natural seam for a magic catalyst — lift partly conjured" — explore-flagged (code-only step, confirm in JEI); a clean aeronautics↔magic weave, careful not to gate the basic frame too deep.
- from: adjustable (hot-air) burner fuel intake | via: config-tie extending burner fuel tag to TFMG diesel | to: aeronautics(fuel)/create | motif: M-13 | power: everyday | tone: ok | verdict: ACCEPT | hook: "a charcoal farmer or refinery supplies the fleet's burners" — fuel→propulsion supply line; tag JSON, light.
- INBOUND existing (M-23 structural alloy→airframe, M-24 component→drivetrain, M-13 fuel, M-06 Physics Assembler keystone): all coherent and jar-proven.
- REWORK: the "dyeable tires as cosmetic NPC trade goods" candidate (M-09) is a bare-sellable cosmetic — DEMOTE per economy de-emphasis; not a distinctive weave. Otherwise existing anchors (aeronautics + de-facto Create via zinc/brass/sequenced-assembly) are sound.

## dtterralith   [anchors: survival (1)]
- LEAVE — Terralith×DynamicTrees worldgen compat bridge; its log/sapling output already reaches Create milling + cooking webs as ordinary vanilla wood. No bespoke edge warranted; not a zero-surface lib but no distinctive material.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: structure chest loot | via: loot-seed → magic reagents / Create components as exploration rewards | to: magic/create | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: generic loot-seed across 150+ vanilla-block structures with no thematic specificity; non-distinctive (any structure pack qualifies). Record as idea, not an anchor. (Contrast seven-seas, where the naval theme makes aeronautics parts coherent.)
- LEAVE — vanilla-block structure datapack, no items/methods; weave only indirectly via loot edits, which lack thematic specificity here.

## bettermineshafts   [anchors: survival (1)]
- LEAVE — mineshaft structure overhaul; no items, no loot tables (loot=no, uses vanilla mineshaft loot), no methods. Serves the scarce-ore mining loop indirectly but offers no hook. No-surface.

## steves_lava_chicken_music_disc   [anchors: support (1)]
- LEAVE — single joke music disc; forcing a coin/recipe edge would be noise. Curated flavor.

## appleskin   [anchors: support (1)]
- LEAVE — food-value HUD readout; display-only, no items/methods. Pairs naturally with the survival food layer but nothing to weave. No-surface.

## grimoireofgaia   [anchors: survival (1)]
- from: mob-drop nuggets/fragments (large reagent catalogue) | via: occultism:spirit_fire / ritual or ars_nouveau:imbuement | to: magic | motif: M-02 / M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: "the bestiary's many fragment drops become ritual/infusion inputs so the mobs aren't a loot dead-end and feed the magic web" — strong: method-pull, magic methods want these themed organic drops.
- from: metal nuggets/fragments (already has a create:emptying touch) | via: create:crushing | to: create | motif: M-03 / M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: "Gaia metal fragments process into Create intermediates, tying drops to the tech spine" — coherent, light processing.
- from: boss busts / artifact rings (Ring of Speed/Jump/Haste) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: ACCEPT | hook: "killing a Gaia mini-boss for a bust/ring bounty is a real combat→economy loop" — distinctive: these are scarce, kill-gated boss drops (not a generic sellable), so a bounty board is a genuine combat→coin loop-closer, not bare sellability.
- REWORK: survival anchor sound (difficulty/bestiary, the world pushing back). OK — connection sound; gains magic + Create + economy reach above.

== CHUNK COMPLETE ==
