# aeronautics — dossier

<!-- HAND-AUTHORED + WIKI-RESEARCHED (not the build-dossiers skeleton). Create Aeronautics registers its parts
     in CODE; the jar scanner (extract-mod-data.sh) captures them as 0/0, so this pillar's content is invisible
     to the digest by design — re-running the scan/build-dossiers will NOT change that (#131 is a scanner-can't-
     see-code limit, not stale data). Content below is from the wiki + two research passes
     (tools/weave-ledger/phase2/aeronautics-research-A.md / -B.md). ⚠ Tags: [wiki] = wiki-confirmed,
     [inferred] = reasoned. EXACT `aeronautics:` item IDs are mostly UNKNOWN (code-registered) — confirm with
     JEI in-game before Phase-3 authoring. Only `aeronautics:levitite_blend_bucket` is digest-grounded. -->

one-line:   Create Aeronautics' real content namespace — the physics-ship/plane/land-vehicle layer. Levitite (lift), propeller bearings + sails (thrust), hot-air burner/envelope (cheap lift), the Physics Assembler (turns a build into a vehicle), control/sensor blocks, and a rope/docking logistics layer. THE aeronautics pillar's own content, now reviewable.
vibe:       industrial-adventurous (skyship + offroad engineering)
signature:  levitite (zinc-gated anti-gravity lift, 10 kpg) · levitite blend (intermediate) · levitite alloy (higher tier) · propeller bearing + sails (wool/wooden 0.5x, sail 1x, phantom 2x) · gyroscopic propeller bearing · hot-air burner + envelope · Physics Assembler · steering wheel/throttle/swivel/sensors · portable engine · borehead bearing (flying drill) · rope connector/winch + docking connector · dyeable tires (4 sizes, addon)

methods (FIRST-CLASS — what this mod can DO; resources other mods pull THROUGH — §2.0):
  registered recipe-types (AUTO, jar-grounded): (none captured — code-registered; digest blind spot)
  non-recipe mechanics: physics-simulated contraption assembly via the Physics Assembler (needs Sable); lift = levitite (resists gravity, 10 kpg; End Stone substitutes at 2 kpg) OR hot-air (burner heats an envelope, volume = lift); thrust = propeller bearing + sail blocks; FE transfer via docking connector.
  consumes / outputs: levitite is made from ZINC (Create-native) via a "levitite blend" intermediate finished by IN-WORLD CRYSTALLIZATION (a code recipe, not JSON). Gyroscopic propeller bearing = wooden slab + Gyroscopic Mechanism + Brass Casing [wiki, the one confirmed recipe] → mid-Create/brass tier. Hot-air burner burns any furnace fuel (coal/charcoal) [wiki]. Honey Glue uses `#c:honey` [wiki].

anchors:    aeronautics (1) — the pillar spine; Create is a de-facto 2nd (zinc/brass/gyro-mechanism/casing all Create). Now reviewable for OUTBOUND weaves.
2nd-pillar candidates (the links the pillar was never reviewed for — name delivery + motif):
  - levitite → economy: zinc-gated bulk material every builder needs; a mass-production specialist becomes the server's lift supplier (M-08 mint-adjacent / M-09 sell). via: recipe/numismatics. [STRONG — wiki-grounded scarcity]
  - levitite blend crystallization → magic: the in-world catalysis step could REQUIRE an Occultism/Ars catalyst placed adjacent (KubeJS) — a clean aeronautics↔magic seam (M-10/M-22). via: config/KubeJS. [explore — needs source confirm]
  - hot-air burner → survival/fuel: burns coal/charcoal; a farm/charcoal specialist supplies the fleet. Also M-13: extend the burner's fuel tag to TFMG diesel (tag JSON, no KubeJS). via: config-tie. [wiki-grounded]
  - borehead bearing (flying drill) → Create+economy: most Create-integrated use; extracted ore feeds the economy (M-08). via: recipe. [inferred]
  - rope/docking connector → economy logistics: docking stations at Numismatics trading posts make airships a real cargo layer (M-18-adjacent / trade). via: config. [inferred]
  - dyeable tires (small/large/monstrous, addon) → economy: dyed variants as cosmetic NPC trade goods (M-09). via: trade. [inferred, low tier]
  - INBOUND (already strong, keep): structural alloy → airframe/levitite-alloy (M-23), mechanical component/tires/portable-engine → drivetrain (M-24), fuel → burner/offroad-engine (M-13), Physics Assembler / endgame hull as M-06 keystone.

how-packs-integrate: airship/vehicle backbone; pairs with aeronauticscompat (third-party-on-ships) + sable (physics). Bundle = Simulated (assembly/control) + Aeronautics (flight) + Offroad (land vehicles).
open gaps (verify with JEI in-game before authoring): levitite blend recipe; Physics Assembler recipe; propeller bearing recipe; levitite alloy recipe; tire names/recipes; offroad engine fuel type; all exact `aeronautics:` ids.
sources: https://createaeronautics.miraheze.org/wiki/Main_Page  https://www.curseforge.com/minecraft/mc-mods/create-aeronautics  + tools/weave-ledger/phase2/aeronautics-research-A.md / -B.md
status:     PARTIAL (wiki-researched) — component families + the levitite/Create dependency are solid; exact ids + several recipes pending an in-game JEI/registry dump (#131 scanner blind spot, not fixable by re-scan)

<!-- AUTO-DIGEST-FACTS — hand-seeded; the scanner cannot capture this mod's code-registered content. -->

jar:            create-aeronautics-bundled-1.21.1-1.2.1 (content ns: aeronautics; addon ns: aeronautics_dyeable_components)
primary ns:     aeronautics
deps:           sable, create
counts:         0 blocks, 1 items, 0 biome-modifiers, 0 c:tags, loot=no   (UNDER-CAPTURED — code-registered parts invisible to extract-mod-data.sh)
made-by methods (foreign types this mod's recipes USE — existing inbound weaves): create (zinc/brass/gyroscopic_mechanism/casing — component crafting)
material c:tags: uses #c:honey (Honey Glue)
blocks (grounded): (none captured)
item sample (grounded): aeronautics:levitite_blend_bucket
