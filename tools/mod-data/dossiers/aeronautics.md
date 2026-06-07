# aeronautics — dossier

<!-- HAND-AUTHORED + WIKI-RESEARCHED, now JAR-GROUNDED via #179. Create Aeronautics registers its parts in
     CODE and ships them in jar-in-jar sub-modules, so extract-mod-data.sh saw the bundle as 0/0 (the #131
     blind spot). Issue #179 extracted the bundle's lang/recipe/loot into tools/mod-data/raw-aeronautics/ and
     parsed them into by-mod/recipes/loot — so the IDs and the JSON make-chains below are now jar-confirmed.
     Raw grounding: by-mod/ + recipes/ + loot/ create-aeronautics-bundled-1.21.1-1.2.1.txt. ⚠ Tags:
     [wiki] = wiki, [jar] = recipe/lang-confirmed, [inferred] = reasoned. STILL code-only (not in JSON —
     confirm with JEI): the levitite in-world crystallization step (blend → levitite) and the pearlescent /
     "alloy" tier recipe. -->

one-line:   Create Aeronautics' content — the physics-ship/plane/land-vehicle layer. Levitite (lift), propeller bearings + sails (thrust), hot-air burner/envelope (cheap lift), the Physics Assembler (turns a build into a vehicle), control/sensor blocks, portable engines, and a rope/docking logistics layer. THE aeronautics pillar's own content, now jar-grounded.
vibe:       industrial-adventurous (skyship + offroad engineering)
signature:  levitite + levitite blend (zinc-gated lift) · pearlescent levitite (higher tier) · propeller bearing + gyroscopic propeller bearing + sails · hot-air (adjustable) burner + envelopes (16 colors) · Physics Assembler · steering/throttle/swivel + sensors · portable engine · rope coupling/connector + docking connector · dyeable tires (4 sizes, addon)

methods (FIRST-CLASS — what this mod can DO; resources other mods pull THROUGH — §2.0):
  registered recipe-types (AUTO, jar-grounded): simulated:portable_engine_dyeing (its ONE own type); otherwise it registers no new types — everything is built THROUGH Create + vanilla.
  non-recipe mechanics: physics-simulated contraption assembly via the Physics Assembler (needs Sable); lift = levitite (resists gravity, 10 kpg; End Stone substitutes at 2 kpg) OR hot-air (adjustable burner heats an envelope, volume = lift); thrust = propeller bearing + sail blocks; the levitite BLEND → levitite step is an IN-WORLD CRYSTALLIZATION (code recipe, not JSON).
  consumes / outputs [jar]: levitite_blend = create:mixing(create:zinc_nugget + aeronautics:end_stone_powder + #c:water); gyroscopic propeller bearing = brass_casing + wooden_slabs + simulated:gyroscopic_mechanism (confirms the one wiki recipe); propeller bearing = brass_casing + iron_sheet + wooden_slabs; adjustable (hot-air) burner = andesite_alloy + iron_sheet + redstone; Physics Assembler = andesite_alloy + andesite_casing + lever; portable engine ← create:sequenced_assembly engine_assembly (industrial iron block + iron sheet/bars/helmet); gyroscopic_mechanism ← create:sequenced_assembly (andesite_alloy + cogwheel + crushed_raw_iron + shaft + compass, via deploying/cutting/pressing); Honey Glue uses #c:honey [wiki].

<<<<<<< HEAD
anchors:    aeronautics (1) — the pillar spine; Create is a de-facto 2nd and now jar-proven (zinc / brass_casing / andesite_alloy / sequenced-assembly all run through Create's mixing/deploying/cutting/pressing). Now jar-grounded for OUTBOUND weaves.
2nd-anchor candidates (the links the pillar was never reviewed for — name delivery + motif):
  - levitite → economy: zinc-gated bulk material (blend = create:mixing of zinc nugget + end-stone powder) every builder needs; a mass-production specialist becomes the server's lift supplier (M-08 mint-adjacent / M-09 sell). via: recipe/numismatics. [STRONG — jar-grounded scarcity: zinc + end stone]
  - levitite blend crystallization → magic: the in-world catalysis step (blend → levitite) is CODE, not JSON — it could be made to REQUIRE an Occultism/Ars catalyst adjacent (KubeJS) for a clean aeronautics↔magic seam (M-10/M-22). via: config/KubeJS. [explore — needs source check; NOT visible in the recipe JSON]
  - hot-air (adjustable) burner → survival/fuel: burns furnace fuel; a farm/charcoal specialist supplies the fleet. M-13: extend the burner's fuel tag to TFMG diesel (tag JSON, no KubeJS). via: config-tie. [wiki + jar: burner = andesite_alloy + iron_sheet + redstone]
=======
anchors:    aeronautics (1) — the pillar spine; Create is a de-facto 2nd (zinc/brass/gyro-mechanism/casing all Create). Now reviewable for OUTBOUND weaves.
2nd-anchor candidates (the links the pillar was never reviewed for — name delivery + motif):
  - levitite → economy: zinc-gated bulk material every builder needs; a mass-production specialist becomes the server's lift supplier (M-08 mint-adjacent / M-09 sell). via: recipe/numismatics. [STRONG — wiki-grounded scarcity]
  - levitite blend crystallization → magic: the in-world catalysis step could REQUIRE an Occultism/Ars catalyst placed adjacent (KubeJS) — a clean aeronautics↔magic seam (M-10/M-22). via: config/KubeJS. [explore — needs source confirm]
  - hot-air burner → survival/fuel: burns coal/charcoal; a farm/charcoal specialist supplies the fleet. Also M-13: extend the burner's fuel tag to TFMG diesel (tag JSON, no KubeJS). via: config-tie. [wiki-grounded]
>>>>>>> a82b961 (weave: reframe ALL weave-workstream docs to the loop model)
  - borehead bearing (flying drill) → Create+economy: most Create-integrated use; extracted ore feeds the economy (M-08). via: recipe. [inferred]
  - rope/docking connector → economy logistics: docking stations at Numismatics trading posts make airships a real cargo layer. via: config. [inferred]
  - dyeable tires (small/large/monstrous, addon) → economy: dyed variants as cosmetic NPC trade goods (M-09). via: trade. [inferred, low tier]
  - INBOUND (already strong, now jar-proven): structural alloy → airframe/levitite tier (M-23), mechanical component / tires / portable-engine → drivetrain via create:sequenced_assembly (M-24), fuel → burner/offroad-engine (M-13), Physics Assembler / endgame hull as M-06 keystone.

how-packs-integrate: airship/vehicle backbone; pairs with aeronauticscompat (third-party-on-ships) + sable (physics). Bundle = Simulated (assembly/control/sensors — the dominant ns) + Aeronautics (flight: levitite/propellers/envelopes/burner) + Offroad (land vehicles: tires/wheel mounts/boreheads).
open gaps (confirm with JEI in-game): levitite in-world crystallization step (blend → levitite — code, not JSON); pearlescent levitite / "levitite alloy" tier recipe (code); offroad engine / portable-engine fuel type; exact ingredient COUNTS (the index captures which ingredients, not quantities).
sources: https://createaeronautics.miraheze.org/wiki/Main_Page  https://www.curseforge.com/minecraft/mc-mods/create-aeronautics  + tools/weave-ledger/phase2/aeronautics-research-A.md / -B.md  + jar grounding (#179): tools/mod-data/raw-aeronautics/ and by-mod/ + recipes/ + loot/ create-aeronautics-bundled-*.txt
status:     GROUNDED (#179 lang+recipe+loot) — 141 blocks / 18 items + the main make-chains (levitite blend, propeller/gyro bearings, hot-air burner, Physics Assembler, portable engine) are now jar-confirmed; only the two code-only steps (levitite crystallization, pearlescent/alloy tier) remain JEI-pending.

<!-- AUTO-DIGEST-FACTS — hand-seeded from the #179 raw extraction (parsed into by-mod/recipes/loot). -->

jar:            create-aeronautics-bundled-1.21.1-1.2.1 (content ns: aeronautics + simulated + offroad; addon ns: aeronautics_dyeable_components)
primary ns:     aeronautics (pillar)   — note: build-dossiers keys the bundle to its dominant ns "simulated" on regen (was the empty aeronautics_bundled stub pre-#179)
deps:           sable, create
counts:         141 blocks, 18 items, 0 biome-modifiers, 0 c:tags, loot=yes   (aeronautics 43b/4i · simulated 95b/10i · offroad 3b/4i — recovered via #179 lang extraction)
made-by methods (foreign types this mod's recipes USE — existing inbound weaves): create:mixing, create:sequenced_assembly, create:deploying, create:crushing, create:filling, create:splashing, create:mechanical_crafting, minecraft:crafting_shaped/shapeless
material c:tags: uses #c:honey (Honey Glue), #c:water (levitite blend)
blocks (grounded, sample): aeronautics:levitite, aeronautics:levitite_blend, aeronautics:pearlescent_levitite, aeronautics:propeller_bearing, aeronautics:gyroscopic_propeller_bearing, aeronautics:adjustable_burner, aeronautics:smart_propeller, aeronautics:andesite_propeller, aeronautics:steam_vent, aeronautics:mounted_potato_cannon, 16× <color>_envelope (+ _encased_shaft) …  (full list: by-mod/create-aeronautics-bundled-*.txt)
item sample (grounded): aeronautics:levitite_blend_bucket, aeronautics:aviators_goggles, aeronautics:end_stone_powder, simulated:gyroscopic_mechanism, simulated:engine_assembly, simulated:honey_glue, simulated:rope_coupling, simulated:spring, simulated:contraption_diagram, offroad:tire, offroad:small_tire, offroad:large_tire, offroad:monstrous_tire
