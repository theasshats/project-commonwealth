# Phase 2 candidates — chunk-02 (context-fed)

## create_ltab-3.9.2   [anchors: create, survival (2)]
OK — existing rows sufficient. M-08 coin loot-seed and M-02 magic reagent loot-seed are the load-bearing ACCEPTs; M-23 aeronautics schematic and M-34 combat-supply cover the remaining links; M-15 boss-key is correctly REJECTed (no boss encounter). No gap remaining.

## mcwwindows   [anchors: support (decoration palette) (1)]
- CHALLENGE | from: mcwwindows:*_log_parapet variants (wood) | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: M-04 is explicitly metal/stone deco that crushes back to raw/gravel; log parapets are wood — they have no coherent M-04 output (wood to sticks is trivial and already vanilla); the ACCEPT rows for "stone parapet" should be tightened to *stone/andesite/blackstone* variants only, not the log-parapet family
- NEW | from: mcwwindows stone window/parapet variants (andesite, polished stone, blackstone brick) | via: create:sandpaper_polishing (a polished-stone intermediate — polished andesite slab — required as a crafting input for the fancier andesite window variants) | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: cutting a proper stone window frame needs machine-polished stone — the builder depends on the Create player's stonecutting output for the premium variants

## buildguide   [anchors: support (QoL/client) (1)]
LEAVE — pure client render overlay, zero items/blocks/methods; no surface to weave.

## bettermineshafts   [anchors: survival (1)]
- CHALLENGE | from: bettermineshafts expanded mineshaft structures | via: loot-seed (vanilla `chests/abandoned_mineshaft`) | to: economy | motif: M-08 | verdict: REJECT | hook: dossier explicitly states `loot=no` — bettermineshafts uses vanilla mineshaft loot tables, not its own; seeding that table is a *vanilla loot edit*, not a bettermineshafts-specific weave; the ACCEPT rows citing this mod as the loot anchor are mis-attributed — the correct owner of that loot-seed action is the vanilla table, not this mod
- CHALLENGE | from: bettermineshafts expanded mineshaft structures | via: loot-seed (vanilla mineshaft chest) | to: magic | motif: M-02 | verdict: REJECT | hook: same as above — dossier `loot=no`; no unique loot table path; the existing 2-vote ACCEPTs for M-02 carry the same mis-attribution; this mod can't be the anchor for a vanilla-table edit

## ritchiesprojectilelib   [anchors: support (library/API) (1)]
LEAVE — ballistics API with no items/blocks/methods; pulled transitively by Create Big Cannons. No surface to weave.

## biolith   [anchors: support (library/worldgen API) (1)]
LEAVE — biome placement framework, no items/blocks; no surface to weave.

## illagerinvasion   [anchors: survival (1)]
- NEW | from: illagerinvasion:illusionary_dust | via: create:mixing (mix illusionary_dust + galosphere:allurite_shard → a glamer-attuned powder that catalyzes an Ars imbuement tier) | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: allurite grounds the illusion — the attunement catalyst can't work without a fragment of reality anchoring the Illusioner's residue; Create mixing is the neutral blending step between two magic-adjacent worlds
- NEW | from: illagerinvasion drops (hallowed_gem, illusionary_dust) as raid outputs | via: minecolonies colony guard-hall or barracks research unlock (a colony's guard training researches access to a cheaper Imbuing Table substitute, trading the boss-drop fork vs. colony-labor fork) | to: economy | motif: M-28 | power: endgame | tone: ok | verdict: ACCEPT | hook: a settlement that trains enough guards earns the right to run its own enchantment-upgrading ritual — the colony route to what normally costs an Invoker kill, mirroring the §3 high-tier fork

## drones   [anchors: aeronautics (1)]
