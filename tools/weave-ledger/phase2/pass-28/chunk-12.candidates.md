# Phase 2 candidates — chunk-12

## bundle_recipe   [anchors: support/QoL (1)]
- LEAVE — pure vanilla-parity recipe enabler; outputs only `minecraft:bundle` from vanilla leather/string. No items of its own, no methods, no loot. Zero material surface to weave through. Support role confirmed.

## just_blahaj   [anchors: decoration/flavor (1)]
- LEAVE — 31 purely decorative plush blocks crafted from vanilla wool/dye. No material output, no processing method, no loot surface meaningful for weaving. `loot=yes` flag is for spawn egg registration, not a drop worth routing. Forcing an edge onto plushie variants is the explicit failure mode (PHASE2-BRIEFING guardrail: "don't force edges onto deliberately-organic/flavor content"). Support/flavor role.

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — zero items, zero methods, zero loot. Documentation-only JEI addon; shows existing loot/worldgen data but produces nothing. Genuine zero-surface library. Support role confirmed.

## biolith   [anchors: support/library (1)]
- LEAVE — worldgen API library (biome placement framework). Zero items, zero blocks, zero loot, no recipe types. Pure plumbing dep; no content surface. Genuine zero-surface library.

## attributefix   [anchors: support/fix (1)]
- LEAVE — attribute-cap patch library. Zero items, zero blocks. No content, no material, no methods. Genuine zero-surface fix mod.

## createtreadmill   [anchors: create (1)]
- from: createtreadmill:treadmill (player-powered SU source) | via: recipe (craft) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running the treadmill costs hunger — the machine itself is a consumption sink that feeds player stamina pressure back into the loop; a factory that never shuts down still needs a fed operator.
- from: createtreadmill:maid_motor | via: recipe (craft requiring Create parts) | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: Maid Motor already sits squarely within Create (it IS a Create kinetic source); gating it on Create parts would be M-05 (native-method gating), but the motor's value is the TLM cross-tie, not a Create-depth gate — adding a Create component requirement doesn't open a 2nd system anchor, it's just cost inflation inside the already-Create anchor. No new pillar crossed.
- from: createtreadmill:treadmill | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: clash | verdict: REJECT | reason: Treadmill has no combat relevance; seeding it into loot would be arbitrary and tonally wrong for a kinetic-power block.
- REWORK: existing anchor is only Create (1). The M-26 consumption link above (hunger drain while running) is the cleanest 2nd anchor — it ties the machine to the survival pressure axis (a player must eat to keep the wheel spinning). One accepted candidate; mod goes Create + survival (2).

## fzzy_config   [anchors: support/library (1)]
- LEAVE — Kotlin config engine; zero items, zero blocks, zero loot. Genuine zero-surface library. No content to weave.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime; zero items, zero blocks, zero loot. Genuine zero-surface perf mod.

## doubledoors   [anchors: support/QoL (1)]
- LEAVE — behavioral door-sync mod; zero items, zero blocks, zero loot, no recipe types. Genuine zero-surface behavior mod.

## searchables   [anchors: support/library (1)]
- LEAVE — client UI search API; zero items, zero blocks, zero loot. Genuine zero-surface library.

## create   [anchors: create (1) — the method library hub]
- OK — connections sound. Create is the pack's method library and tech spine; it is the *destination* other mods weave into, not a mod that needs a 2nd anchor. Its 17 recipe-types (crushing, pressing, mixing, sequenced_assembly, haunting, deploying, etc.) are the connective backbone for M-03 through M-24. Authoring edges that consume Create itself would invert the design. No REWORK needed; the dossier explicitly flags this.

## naturescompass   [anchors: support/QoL (1)]
- LEAVE — biome-finder tool; zero methods, zero loot, no material output. Pure information utility. Support role confirmed; trying to route it as a crafting ingredient would be arbitrary.

## mutantszombies   [anchors: survival (1)]
- from: mutantszombies mob spawns (7 new hostile variants) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Brutes and mutants are harder fights — a combat specialist farms their drops and trades rare zombie-variant material to non-combat players who need it for a Create or magic recipe; danger creates a supply chain.
- REWORK: `loot=no` in the digest — the dossier confirms no special drops registered. M-34 depends on having distinct loot to trade. Without a drop, there is no economy-side of the boss-dual-role loop. **REWORK flag:** the mod needs at minimum one unique drop seeded via loot-table (e.g. a `mutantszombies:brute_hide` or `mutantszombies:spitter_bile`) to make M-34 viable. Until that's added, the M-34 candidate above is **BLOCKED — no drop surface**. File as a Phase-3 prerequisite: add a unique drop to at least one mutant variant, then the M-34 link can be authored.
- from: mutantszombies mob spawns | via: config tie | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: Raising threat baseline is already the survival anchor (it IS the scarcity/pressure input); a second survival link is not a new pillar, just describing the same anchor twice.

## bettercombat   [anchors: support/combat-framework (1)]
- LEAVE — behavior framework only; zero items, zero blocks, zero loot. No material surface. Support role confirmed; routing a resource "through" a swing-arc system makes no sense.

## bettermineshafts   [anchors: survival (1)]
- from: bettermineshafts structure loot (vanilla mineshaft loot) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: The dossier states `loot=no` and uses vanilla mineshaft loot tables — Better Mineshafts only expands the structure layout, not the loot. Seeding foreign drops here is possible in principle (Phase-3 datapack edit to the vanilla `chests/abandoned_mineshaft` table), but it wouldn't be a *Better Mineshafts* weave — it's a vanilla loot-table edit that would apply regardless of whether this mod is installed. No mod-specific hook.
- from: bettermineshafts larger structures | via: loot-seed | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: M-30 is a regional-scarcity gate — it rides GTMOGS ore-gen, not structure size. Better Mineshafts doesn't control ore placement; no fit.
- LEAVE — structure overhaul with no items, no unique loot tables, no methods. All loot is vanilla pass-through. No mod-specific content surface to weave. Confirmed support/survival worldgen role; one-anchor is correct.

## sable   [anchors: support/library (1)]
- LEAVE — physics engine library; zero items, zero blocks, zero loot, no recipe types. Genuine zero-surface infrastructure mod. The weaving happens in Aeronautics and its compat mods that build on Sable, not in Sable itself.

## better_lib   [anchors: support/library (1)]
- LEAVE — config and messaging API library; zero items, zero blocks, zero loot. Genuine zero-surface library.

## spyglass_improvements   [anchors: support/QoL (1)]
- from: naturescompass-style scouting synergy | via: config tie | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: No-motif — improved spyglass zoom aids aerial scouting from a ship, but "this tool is more useful on an airship" is atmospheric flavor, not a causal weave. No method, no material, no gating. Reject for no-motif.
- LEAVE — client-side zoom/overlay behavior on the vanilla spyglass. Zero items, zero blocks, zero loot. No content surface. Support role confirmed.

## byzantine   [anchors: survival (1) — MineColonies style pack]
- from: byzantine schematic styles (Byzantine/Shogun/Nile colony buildings) | via: minecolonies hut construction | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: The colony produces basic goods cheaper (M-28 colony route); Byzantine-style huts are the visual/architectural face of that production — a colony running Byzantine style still outputs goods that non-colony players depend on for recipes they can't self-supply, making the schematic pack load-bearing to the economy pillar.
- REWORK: anchor is currently survival (1). M-28 link is valid — Byzantine expands the architectural style set, which means more colony building options, which feeds the MineColonies production-route (the colony route is load-bearing per SYSTEMS.md). This is a soft 2nd anchor (economy, via M-28), because the schematic pack's *existence* enables the colony huts that underpin M-28's route. Worth noting it's an ambient anchor (the weave is in MineColonies, not Byzantine itself), but the dossier's "survival only" is incomplete — the colony's economic role counts. Verdict: accept M-28 as a soft 2nd anchor; flag for human review on whether ambient-colony-style-pack should count as gaining an economy anchor independently.

## sound_physics_remastered   [anchors: support/immersion (1)]
- LEAVE — client audio simulation; zero items, zero blocks, zero loot, no recipe types. Genuine zero-surface immersion mod.

== CHUNK COMPLETE ==
