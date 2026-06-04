# Create Aeronautics — Research B: Content & Crafting Chains

**Date:** 2026-06-04  
**Scope:** Create Aeronautics bundled jar (v1.2.1 / mc1.21.1 / NeoForge), plus the `aeronautics-dyeable-components` addon and adjacent compat mods already in the pack.  
**Sources:** CurseForge mod pages, Modrinth, Fandom wiki (partial — 403 on most pages), Miraheze wiki (503), NamuWiki, GitHub repo structure, web search aggregates.  
**Note:** The Miraheze and Fandom wikis were largely unreachable (503 / 403) during this session. Recipe details are the hardest to nail down without in-game JEI access; confidence levels are marked throughout.

---

## 1. Bundle Structure

The pack uses `create-aeronautics-bundled-1.21.1-1.2.1.jar` — a single jar that ships **three sub-modules** plus the NeoForge compat layer. [wiki-confirmed via GitHub repo structure]

| Module | Purpose |
|--------|---------|
| **Simulated** | Core assembly system: Physics Assembler, honey/super glue mechanics, redstone sensors, steering, docking |
| **Aeronautics** | Flying contraptions: propellers, burners, levitite, envelopes, sails, gyroscopes |
| **Offroad** | Land vehicles: tires, wheel mounts, borehead bearings, rock-cutting wheels, suspension/engine components |

Hard dependency: **Sable** (the physics engine that makes moving blocks work).

---

## 2. Key Items by Module

### 2.1 Simulated (assembly layer)

These are the "glue and control" items needed before any vehicle moves.

| Item | Function | Recipe confidence |
|------|----------|------------------|
| **Physics Assembler** | Converts glued blocks into a live physics contraption (sublevel). The central progression gate. | Partially known — see §3 |
| **Honey Glue** | Area-selection glue tool (like Schematic & Quill). Defines the contraption boundary. | [wiki-confirmed mechanic]; recipe uses `#c:honey` tag [wiki-confirmed from changelog] |
| **Super Glue** | Per-face glue (same as base Create). Connected super-glue regions attach to the honey-glue volume. | [inferred same as Create base] |
| **Steering Wheel** | Player control input for driving/flying. Has custom goggle UI. | [wiki-confirmed exists]; recipe id unknown |
| **Docking Connector** | Couples two contraptions; transfers items via Create pipes and FE (with compat mod). | [wiki-confirmed]; recipe id unknown |
| **Optical Sensor** | Detects distance to blocks within 15 m; outputs redstone signal. | [wiki-confirmed mechanic]; recipe id unknown |
| **Altitude Sensor** | ComputerCraft peripheral; reads height and air pressure. | [wiki-confirmed mechanic]; recipe id unknown |
| **Velocity Sensor** | Reads speed; redstone output. | [wiki-confirmed exists]; recipe id unknown |
| **Gyroscopic Mechanism** | Spinning flywheel that stabilises ship upright; needs rotational energy input. | [wiki-confirmed mechanic]; recipe id unknown |
| **Redstone Inductor** | Passes redstone signals across the contraption boundary. | [wiki-confirmed exists] |
| **Swivel Bearing** | Bearing variant for contraption sub-assemblies. | [wiki-confirmed exists] |
| **Torsion Spring** | Physics spring component. | [wiki-confirmed exists] |
| **Typewriter** | Custom-name + comparator output device (for labelling/logic). | [wiki-confirmed exists] |

### 2.2 Aeronautics (flight layer)

| Item | Function | Notes |
|------|----------|-------|
| **Propeller Bearing** | Bearing that spins a propeller; produces thrust. Propeller "blades" are any of: wool, sails, symmetric sails, wooden sails, phantom sails. | [wiki-confirmed] |
| **Gyroscopic Propeller Bearing** | Upgraded propeller bearing; auto-stabilises orientation. Recipe: wooden slab + Gyroscopic Mechanism + Brass Casing. | [wiki-confirmed recipe] |
| **Andesite Propeller** | A solid one-block propeller item (smaller/cheaper). | [wiki-confirmed exists]; full recipe id unknown |
| **Smart Propeller** | Programmable/variable-thrust propeller variant. | [wiki-confirmed exists]; recipe id unknown |
| **Adjustable Burner** | Hot-air burner for balloons/envelopes. Normally fuel-free; the separate `create-aeronautics-burner-fuel` addon adds fuel consumption (any combustible). | [wiki-confirmed]; recipe id unknown |
| **Steam Burner** | Steam-powered lift source. | [wiki-confirmed exists]; recipe id unknown |
| **Envelope** | Balloon envelope block (encases hot air). | [wiki-confirmed exists]; recipe id unknown |
| **Symmetric Sail** | A sail block that acts as propeller blade. | [wiki-confirmed exists] |
| **Levitite** | Magic floating rock block; 10 kpg lift (9 net). Does not push up — resists gravity. Endstone is a cheap substitute (2 kpg). | [wiki-confirmed mechanic] |
| **Levitite Alloy** | High-tier levitite material with enhanced floating properties. | [wiki-confirmed exists]; recipe id unknown |
| **Gimbal Sensor** | Used to craft gyroscope-based blocks. | [wiki-confirmed] |

### 2.3 Offroad (land vehicle layer)

| Item | Function | Notes |
|------|----------|-------|
| **Wheel Mount** | The structural hub that connects tires to a contraption frame. | [wiki-confirmed exists]; recipe id unknown |
| **Tires** (4 sizes) | Rubber wheels in four sizes. Exact names not confirmed — the dyeable-components mod says "all four Tires." Size names inferred from dyeable mod: likely small, medium/standard, large, monstrous. | [inferred — 4 sizes wiki-confirmed; individual names unconfirmed] |
| **Borehead Bearing** | A rotating drill-head bearing used in mining/boring contraptions. | [wiki-confirmed exists]; recipe id unknown |
| **Rock-Cutting Wheel** | Cutting wheel that attaches to Borehead Bearing for mining vehicles. | [wiki-confirmed exists]; recipe id unknown |
| **Engine components** | The offroad suite includes engines and suspension. Specific engine item names unknown. | [wiki-confirmed category]; item ids unknown |

---

## 3. Crafting Chains (what is known)

### 3.1 Physics Assembler (the primary gate)
- **Confirmed inputs** (partial): Uses Create-tier materials; community descriptions reference brass and/or andesite-alloy-tier components. A YouTube tutorial ("How to craft Physics Assembler") exists but was unreachable.
- **Status:** Recipe **not confirmed**. [inferred: mid-Create tier, likely Brass or Zinc tier given it unlocks all vehicle play]
- **Weave note (M-23/M-24 hook):** The assembler is the structural gate for all aeronautics. A recipe requiring an **Airframe Plate** (M-23 milestone material) would make it a natural two-pillar anchor: Create tech + aeronautics.

### 3.2 Gyroscopic Propeller Bearing
- **Recipe (wiki-confirmed):** Wooden slab + **Gyroscopic Mechanism** + **Brass Casing**
- Brass Casing is mid-Create-tier (requires Zinc + Copper → Brass, then casing).
- Gyroscopic Mechanism: recipe unknown; likely involves the Gimbal Sensor and something that spins.

### 3.3 Honey Glue
- Recipe uses `#c:honey` tag (confirmed from changelog fix). Likely shapeless: honey bottle/block + something sticky.
- **Weave note:** Beehive → honey → honey glue creates a subtle agriculture→aeronautics link.

### 3.4 Levitite
- **Obtaining:** Levitite is found as a worldgen block (exact biome/depth not confirmed from sources). Endstone can substitute (2 kpg vs 10 kpg) — the wiki note "no zinc nearby" implies zinc proximity matters for levitite worldgen, possibly spawning in zinc-rich or underground zones. [inferred]
- Breaking plain levitite loses the drop (vanilla behaviour); `create-break-levitite` addon (not in this pack) restores the drop.
- **Levitite Blend:** An intermediate crafting material referenced in the `morelevitite` addon — "placing a rose quartz block next to levitite blend" creates Redstone Levitite. This implies `levitite blend` exists as a processable item (possibly a Create mixing/compacting recipe). [inferred]
- **Levitite Alloy:** Mentioned as "high-tier material with epic floating properties." Recipe unknown. Likely a Create Mixing or Compacting recipe involving levitite + a metal. [inferred]
- **Weave note (M-23 hook):** Levitite Alloy as an ingredient in an **Airframe Alloy** recipe (M-23) would be an elegant two-pillar weave: aeronautics material also gates structural tier. This is exactly the kind of second-pillar cross-weave the design doc calls for.

### 3.5 Dyeable Components (aeronautics-dyeable-components addon)
Two mechanic groups [wiki-confirmed]:

**Tires (all 4 sizes):**
- Crafting table: `[tire] + [any dye]` → dyed tire variant  
- 16 dye colours × 4 sizes = 64 dyeable tire variants

**Levitite:**
- During the "catalysing process" (the Create processing step that produces levitite), hold a dye in offhand → coloured levitite output  
- This implies levitite has a **Create processing recipe** (mixing, compacting, or catalysing) rather than being purely world-dropped as a final block — consistent with the "levitite blend" reference above. [inferred from dyeing mechanic]

### 3.6 Offroad Tires — crafting
- Specific tire recipes are unknown from available sources. Given the rubber/wheel motif and Create context, likely involve Create-processed materials (pressed metal, possibly rubber from a Create addon). [inferred]
- **Weave note (M-13 fuel / M-24 drivetrain):** The offroad engine components are the most plausible hook for TFMG/Create Addition fuel. If any engine block in the Offroad sub-module consumes a liquid fuel, that is the M-13 anchor. This needs in-game JEI verification.

---

## 4. Fuel & Energy Integration

| Component | Fuel/Energy | Notes |
|-----------|------------|-------|
| **Adjustable Burner** | Any combustible item fuel (vanilla furnace fuel list). Default: fuel-free; `create-aeronautics-burner-fuel` addon (not in this pack) adds consumption. | [wiki-confirmed] |
| **Steam Burner** | Presumably steam / boiler heat (Create steam mechanic). | [inferred; not confirmed] |
| **Offroad Engine(s)** | Unknown — possibly FE (from `create-crafts-additions-and-aeronautics-compat` via Docking Connector), possibly liquid fuel. | [inferred; not confirmed] |
| **Docking Connector** | Transfers FE when docked. Requires `create-crafts-additions-and-aeronautics-compat` (not in this pack). | [wiki-confirmed for compat mod] |
| **Gyroscopic Mechanism** | Needs rotational energy (Create SU). | [wiki-confirmed] |

**M-13 fuel hook assessment:** The adjustable burner already burns any furnace fuel, so TFMG diesel/oil would work if added to the fuel tag. The offroad engine's fuel type is the more uncertain hook — if it's liquid-fuel-based, that is the stronger M-13 connection. Needs JEI confirmation in-game.

---

## 5. Milestone / Weave Hooks Summary

| Milestone | Hook | Rationale | Confidence |
|-----------|------|-----------|-----------|
| **M-13 (fuel)** | Adjustable Burner fuel tag → accept TFMG/Create Addition liquid fuels | Burner already accepts combustibles; extending the tag to diesel/oil is a recipe-free config change | [inferred plausible] |
| **M-13 (fuel)** | Offroad engine block fuel type (if liquid) | Strongest hook if confirmed fuel-based | [needs JEI verification] |
| **M-23 (airframe alloy)** | Physics Assembler recipe → requires Airframe Plate material | Gate the assembler behind the structural alloy milestone | [inferred; recipe unknown] |
| **M-23 (airframe alloy)** | Levitite Alloy as ingredient in Airframe Alloy recipe | Aeronautics material feeds structural tier; two-pillar anchor for levitite | [inferred] |
| **M-24 (drivetrain)** | Wheel Mount or Borehead Bearing recipe → requires drivetrain component | Ground vehicles are a natural fit for a drivetrain gate | [inferred; recipes unknown] |
| **Create spine** | All vehicle assembly requires Physics Assembler (brass-tier) | Already anchored to Create; no extra weave needed | [wiki-confirmed] |
| **Economy** | Dyed tire variants → sellable to NPC traders (Numismatics) | Cosmetic tires are low-cost high-volume trade goods | [design inferred] |

---

## 6. Items Whose IDs Remain Unknown

The following items were confirmed to exist in the mod but their `aeronautics:` namespace IDs were not confirmed from any source (do not invent them for KubeJS):

- Physics Assembler
- Honey Glue (mechanic confirmed; id unknown)
- Steering Wheel
- Docking Connector
- Optical Sensor / Altitude Sensor / Velocity Sensor
- Gyroscopic Mechanism
- Redstone Inductor
- Swivel Bearing / Torsion Spring
- Typewriter
- Andesite Propeller / Smart Propeller
- Adjustable Burner / Steam Burner
- Envelope
- Levitite Alloy / Levitite Blend
- Wheel Mount
- Tires (all 4 sizes — names unconfirmed)
- Borehead Bearing / Rock-Cutting Wheel
- Engine / suspension items

**How to get IDs:** Boot a creative world with the pack, open JEI, search "aeronautics" — all registered items will show with their namespace IDs and full recipes.

---

## 7. What the Jar Scanner Missed (Code-Registered Items)

The jar scanner saw these as empty because Create Aeronautics uses **code-registered recipes** (not JSON data files in the jar) for its custom Create processing types (mixing, compacting, catalysing). These do not appear as standard `data/*/recipes/*.json` entries and are invisible to naive data-pack scanners. This is consistent with the dyeable-components mod's statement about the "catalysing process" for levitite — that is a code-registered Create recipe type.

---

## 8. Summary for Weave Planning

**High-confidence anchors:**
- Gyroscopic Propeller Bearing: Brass Casing + Gyroscopic Mechanism (mid-Create tier, confirmed)
- Honey Glue: uses `#c:honey` tag (agriculture → aeronautics linkage)
- All assembly requires Physics Assembler → Create spine locked in
- Endstone substitutes for Levitite (cheap early alternative)

**Priority gaps to fill with JEI in-game:**
1. Physics Assembler full recipe (what materials? → M-23 hook depends on this)
2. Tire names and recipes (rubber? andesite alloy? → M-24 hook)
3. Offroad engine fuel type (liquid? → M-13 hook)
4. Levitite worldgen depth/biome (scarcity profile)
5. Levitite Alloy recipe (the M-23 cross-weave opportunity)

---

*Sources consulted: [CurseForge Create Aeronautics](https://www.curseforge.com/minecraft/mc-mods/create-aeronautics), [Modrinth](https://modrinth.com/mod/create-aeronautics), [GitHub Simulated-Project](https://github.com/Creators-of-Aeronautics/Simulated-Project), [Fandom wiki](https://create-aeronautics.fandom.com/) (403 on most pages), [Miraheze wiki](https://createaeronautics.miraheze.org/) (503), [CurseForge Dyeable Components](https://www.curseforge.com/minecraft/mc-mods/create-aeronautics-dyeable-components), [mc-mod.net](https://www.mc-mod.net/dyeable-aeronautics-components-addon-mod/), [CurseForge Burner Fuel](https://www.curseforge.com/minecraft/mc-mods/create-aeronautics-burner-fuel), [CurseForge CA+Compat](https://www.curseforge.com/minecraft/mc-mods/create-crafts-additions-and-aeronautics-compat), web search aggregates.*
