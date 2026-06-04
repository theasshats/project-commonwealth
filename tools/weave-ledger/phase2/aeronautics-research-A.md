# Create Aeronautics — Content Research (Phase 2A)

Minecraft 1.21.1 / NeoForge. Namespace: `aeronautics` (the bundled jar; companion
physics engine is `simulated`). Researched 2026-06-04 from wiki fragments, changelogs,
search snippets, and GitHub source navigation. The Fandom and Miraheze wikis returned
403/503 for direct page fetches; most data comes from search-snippet excerpts and the
GitHub changelog. Confidence is marked per fact.

---

## 1. Lift System — LEVITITE (the key material)

### 1a. Levitite Block
- **ID:** id unknown (likely `aeronautics:levitite`)
- **Role:** Buoyancy / lift block. Provides **10 kpg gross lift** (net 9 kpg accounting
  for its own weight). Critically: levitite does not *push up*; it **resists gravity** —
  it holds weight in place rather than actively launching a craft. [wiki-confirmed via
  search snippet from Fandom wiki]
- **Scarcity:** Levitite requires **zinc** to craft — zinc being a Create-native ore
  (generates Y -63 to 70 in blob veins, requires iron pickaxe). Because zinc is a
  shared Create resource already competed for by Create's own recipes (brass, zinc
  blocks, andesite alloy variants), levitite creation competes directly with other Create
  infrastructure. [wiki-confirmed for zinc gen; levitite-zinc link inferred from "cheaper
  alternative if there's no zinc nearby" phrasing]
- **Craft path:** A multi-step Create process. The intermediate is **Levitite Blend**
  (a wet/liquid or pourable form used as the crafting substrate). The exact mixing recipe
  (what goes into the blend) was not recoverable from accessible sources, but the process
  involves **crystallization** of levitite blend as a distinct step — and that
  crystallization step runs **client-side** (a known server bug, issue #664), suggesting
  it is likely an in-world catalysis step (place block → reaction) rather than a
  furnace/mixer output. [crystallization mechanic wiki-confirmed; exact recipe
  ingredients unconfirmed — mark as NEEDS IN-GAME CHECK]
- **Power tier:** Mid-game (needs Create infrastructure, zinc mining, multi-step process)
- **Cross-pillar hooks:**
  - → **Economy:** Levitite is the gating lift material for all buoyancy builds. A
    specialist who mass-produces levitite can sell it to shipbuilders who don't want to
    maintain a zinc pipeline. High trade value — bulky, consumed in quantity, not
    craftable by beginners.
  - → **Magic:** "Magic floating rocks" is how the mod itself describes the aeronautics
    lift system; levitite could be framed in-lore as a reagent. A KubeJS recipe could
    require a magic catalyst (Occultism soul gem, Ars rune) to initiate crystallization,
    weaving aeronautics into the magic pillar without forcing Create to be the only path.
  - → **Create spine:** Already uses zinc (a Create ore) as feedstock. Deeply embedded.

### 1b. Levitite Blend
- **ID:** id unknown (likely `aeronautics:levitite_blend` or similar bucket/fluid)
- **Role:** Intermediate crafting material / liquid form of levitite before
  crystallization. Required to produce any final levitite variant.
- **Variants producible from blend:**
  - Standard Levitite Block (crystallized from blend) [wiki-confirmed]
  - **Redstone Levitite** — created by placing a **rose quartz block** adjacent to
    levitite blend during crystallization. Added by the *More Levitite* addon mod
    (not base). [wiki-confirmed, addon mod]
  - **Dyed Levitite** — hold desired dye in offhand while catalyzing/crystallizing
    blend. Added by *Create Aeronautics: Dyeable Components* addon. [wiki-confirmed,
    addon]
- **Tier:** Mid-game intermediate

### 1c. Levitite Alloy
- **ID:** id unknown
- **Role:** Described as "high-tier material with epic floating properties." Implies
  stronger lift than base levitite — likely an endgame lift upgrade. [inferred from
  search snippet; exact recipe unknown — NEEDS IN-GAME CHECK]
- **Tier:** Endgame

### 1d. End Stone (vanilla) as levitite alternative
- **Role:** End Stone has buoyancy properties similar to levitite but **much weaker —
  2 kpg lift** vs. levitite's 10. It is the cheap/early substitute for players who
  cannot yet make levitite ("cheaper alternative if there's no zinc nearby").
  [wiki-confirmed]
- **Implication for Derpack-X:** End Stone availability (post-End access) gates this
  early alternative; the full levitite pipeline unlocks mid-game via Create. This
  creates a natural two-stage lift progression: End Stone → Levitite.

---

## 2. Assembly — Physics Assembler

- **ID:** id unknown (likely `simulated:physics_assembler` — in the Simulated module,
  not aeronautics)
- **Role:** The core "ship building" block. When activated, converts the connected
  structure (joined by **super glue** or **honey glue**) into a **Physics Contraption**
  — a simulated object that can move, rotate, and exist off-grid. This is the single
  gating block for *any* aeronautics (or Offroad) build. Nothing flies without one.
  [wiki-confirmed]
- **Craft:** Exact recipe unrecovered. Likely uses Create-tier materials (brass?
  andesite alloy?). The assembler + paper crafts a **Contraption Diagram** (visualization
  tool). [assembler+paper recipe wiki-confirmed; assembler's own recipe NEEDS IN-GAME CHECK]
- **Tier:** Mid-game gateway (required for all builds)
- **Cross-pillar hooks:**
  - → **Economy:** The assembler is the single most essential block for the aeronautics
    pillar. A player who mass-crafts them becomes a supplier to the server's entire
    vehicle economy. Potentially gated behind brass (Create mid-tier), making it
    a natural trade item.
  - → **Create spine:** Deeply embedded — uses Create glue mechanics (super glue, honey
    glue) for contraption bonding.

---

## 3. Propulsion — Propeller Systems

### 3a. Propeller Bearing
- **ID:** id unknown (likely `aeronautics:propeller_bearing`)
- **Role:** A bearing block that mounts propeller blades and generates **thrust** when
  rotated. The bearing itself is the hub; the blades attached to it determine thrust
  output. [wiki-confirmed]
- **Propeller blade blocks (thrust values, relative):** [wiki-confirmed]
  - **Wool / Wooden Sails** → 0.5× thrust of a standard Sail
  - **Sail** (Create's existing sail) → 1× (baseline)
  - **Symmetric Sails** → 1× (same as sail)
  - **Phantom Sails** → 2× thrust (and 2× stress cost)
- **Craft:** Exact recipe unrecovered — NEEDS IN-GAME CHECK
- **Tier:** Mid-game

### 3b. Gyroscopic Propeller Bearing
- **ID:** id unknown (likely `aeronautics:gyroscopic_propeller_bearing`)
- **Role:** Like propeller bearing, but adds **active stabilization** — tilts the
  attached propeller up to **12°** to keep it facing directly upward, countering craft
  tilt during flight. Essential for stable vertical-lift vehicles (helicopters,
  hovering airships). [wiki-confirmed]
- **Craft:** Requires **wooden slab** + **Gyroscopic Mechanism** + **Brass Casing**.
  [wiki-confirmed — this is the one recipe with confirmed ingredients]
- **Tier:** Mid-game (brass = Create mid-tier)
- **Cross-pillar hooks (propeller bearings generally):**
  - → **Create spine:** Uses Create's rotation system and stress budget.
  - → **Economy:** Phantom sails are a premium crafting target — a dyer/weaver who
    produces phantom sail fabric becomes a supplier to the aeronautics pillar.

### 3c. Gyroscopic Mechanism
- **ID:** id unknown (likely `aeronautics:gyroscopic_mechanism`)
- **Role:** Crafting component used inside the Gyroscopic Propeller Bearing recipe.
  A sub-component, not a placeable block. [wiki-confirmed indirectly]
- **Craft:** A YouTube video titled "Gyroscopic Mechanism Recipe" exists, suggesting
  it has a non-trivial recipe; ingredients unknown — NEEDS IN-GAME CHECK.
- **Tier:** Mid-game crafting intermediate

---

## 4. Hot Air Lift System

### 4a. Hot Air Burner (also called Adjustable Burner in changelog)
- **ID:** id unknown (likely `aeronautics:hot_air_burner`)
- **Role:** Redstone-powered block that burns fuel to generate hot air. Has a slider
  GUI (right-click-hold) for output rate adjustment. Takes standard fuel (coal
  mentioned). [wiki-confirmed]
- **How it works:** Burns → hot air rises → fills cavity enclosed by Hot Air Envelopes
  → generates lift force proportional to enclosed volume. Multiple burners fill the
  same balloon faster. [wiki-confirmed]
- **Craft:** Exact recipe unrecovered — NEEDS IN-GAME CHECK
- **Tier:** Early-mid (no zinc needed, uses fuel — accessible before Create mid-tier)
- **Cross-pillar hooks:**
  - → **Economy:** Fuel supply for hot air burners (coal, charcoal) could be a simple
    trade good. A farm-specialist who produces bulk charcoal supplies the hot-air fleet.
  - → **Survival:** Hot air lift is the *accessible* lift path — no zinc, just fuel.
    Ties naturally into survival wood/coal pipelines.
  - → **Magic:** Blaze rods or other magic-tier fuels (if a magic mod provides them)
    could supercharge burner output, giving the magic pillar a meaningful aeronautics
    hook.

### 4b. Hot Air Envelope
- **ID:** id unknown (likely `aeronautics:hot_air_envelope`)
- **Role:** Hollow structural blocks placed as the balloon shell above a Hot Air Burner.
  Must form a volumetric enclosure. The enclosed volume determines maximum lift capacity.
  [wiki-confirmed]
- **Craft:** Unknown — NEEDS IN-GAME CHECK
- **Tier:** Early-mid

---

## 5. Control and Sensing Blocks

### 5a. Swivel Bearing
- **ID:** id unknown (likely `aeronautics:swivel_bearing` or `simulated:swivel_bearing`)
- **Role:** A bearing that enables parts of a contraption to rotate relative to each
  other — used for articulated craft, rotating turrets, control surfaces, steering.
  Has a central shaft and small cog for rotation/power transfer. Can be assembled with
  nothing on it (added in 1.1.0). [wiki-confirmed via changelog]
- **Tier:** Mid-game

### 5b. Torsion Spring
- **ID:** id unknown (likely `aeronautics:torsion_spring`)
- **Role:** Combines torsion spring behavior with directional gearshift in one block —
  a compact control/spring element for aircraft linkages and return-to-center
  mechanisms. [inferred from changelog + search snippet]
- **Tier:** Mid-game

### 5c. Steering Wheel
- **ID:** id unknown
- **Role:** Vehicle control input — player-facing wheel that inputs directional commands
  into the contraption's drive-by-wire network. Displays custom GUI when wearing goggles.
  [wiki-confirmed via changelog]
- **Tier:** Mid-game

### 5d. Throttle Lever
- **ID:** id unknown (likely `aeronautics:throttle_lever`)
- **Role:** Analog control block for adjusting propeller speed (0–15 redstone range;
  setting 15 stops rotation). [wiki-confirmed via guide]
- **Tier:** Mid-game

### 5e. Altitude Sensor
- **ID:** id unknown (likely `aeronautics:altitude_sensor`)
- **Role:** Outputs redstone signal proportional to craft altitude. Used in automated
  altitude-hold and autopilot systems. [wiki-confirmed]
- **Tier:** Mid-game

### 5f. Velocity Sensor
- **ID:** id unknown (likely `aeronautics:velocity_sensor`)
- **Role:** Outputs redstone signal proportional to craft velocity. Has ComputerCraft
  peripheral support. [wiki-confirmed via changelog CC peripheral fix]
- **Tier:** Mid-game

### 5g. Optical Sensor
- **ID:** id unknown (likely `aeronautics:optical_sensor`)
- **Role:** Detects distance to nearest block within **15 meters**; outputs proportional
  redstone signal (0 when out of range, 15 when at zero distance). Used for collision
  avoidance, landing detection, rangefinding. Range was reduced by 0.5 blocks in a
  patch. [wiki-confirmed]
- **Tier:** Mid-game

### 5h. Laser Pointer
- **ID:** id unknown (likely `aeronautics:laser_pointer`)
- **Role:** Directional rangefinder beam; adjustable range, color, rainbow mode.
  Has ComputerCraft functions (getRange/setRange, hasHit/getDistance, getColor). Used
  in targeting, decoration, or precise measurement setups. [wiki-confirmed]
- **Tier:** Mid-game

### 5i. Redstone Inductor
- **ID:** id unknown (likely `aeronautics:redstone_inductor`)
- **Role:** Smoothing/lag block — output gradually tracks input rather than snapping
  instantly. Equivalent to an analog low-pass filter for redstone; used in smooth
  throttle control, gradual steering response. Has ComputerCraft peripheral. [wiki-confirmed]
- **Tier:** Mid-game

---

## 6. Docking and Coupling

### 6a. Rope Connector / Rope Coupling
- **ID:** id unknown
- **Role:** Connects two craft (or a craft to a fixed point) via a rope. Rope couplings
  link to rope connectors; color indicators show connection state. Used for towing,
  mooring, cargo attachment. [wiki-confirmed via changelog]
- **Tier:** Mid-game

### 6b. Rope Winch
- **ID:** id unknown (likely `aeronautics:rope_winch`)
- **Role:** Motorized winch that reels rope in/out. Enables docking with rope when
  connected with a rope coupling. [wiki-confirmed via search snippet]
- **Tier:** Mid-game
- **Cross-pillar hooks:**
  - → **Economy:** Winch + rope system enables *docking at trading posts* or *cargo
    lowering* to ground — natural logistics infrastructure for the economy pillar.

### 6c. Docking Connector
- **ID:** id unknown (likely `aeronautics:docking_connector`)
- **Role:** Hard-dock two physics contraptions together or dock to static world blocks.
  Front-end capability for docking. Animation fix was applied on world load. [wiki-confirmed via changelog]
- **Tier:** Mid-game

---

## 7. Vehicle Power

### 7a. Portable Engine (in-base)
- **ID:** id unknown (likely `aeronautics:portable_engine`)
- **Role:** Self-contained engine block that generates Create-style mechanical rotation
  using fuel (coal). Provides a **self-sufficient power source** for vehicles that
  cannot use external Create networks (since those are stationary). Generates stress
  budget for propellers and other rotating blocks on the craft. [wiki-confirmed via guide
  and schematics references: "red portable engine" used in plane schematics]
- **Tier:** Mid-game (fuel-based, no external network needed)
- **Cross-pillar hooks:**
  - → **Survival:** Fuel supply (coal, charcoal, blaze rods) ties engine operation to
    survival resource gathering.
  - → **Economy:** A vehicle running out of fuel mid-flight creates demand for fuel
    resupply at trading hubs — emergent trade opportunity.

---

## 8. Structural / Assembly Blocks

### 8a. Wheel Mount
- **ID:** id unknown (likely `aeronautics:wheel_mount`)
- **Role:** Offroad module — mounts wheel-like blocks onto physics contraptions to
  enable land vehicle movement. Referenced in schematics alongside physics assembler.
  [wiki-confirmed via schematic component list]
- **Tier:** Mid-game

### 8b. Physics Staff
- **ID:** id unknown
- **Role:** Handheld item for interacting with physics contraptions — exact function
  unclear but listed in changelog as a named item. Possibly used for assembling or
  manipulating sublevels. [inferred from changelog]
- **Tier:** Unknown

### 8c. Spring / Torsion Spring
- Covered under §5b above.

### 8d. Borehead Bearing
- **ID:** id unknown (likely `aeronautics:borehead_bearing`)
- **Role:** A rotating head bearing designed for drilling/boring — places a rotating
  borehead on a contraption. No longer destroys blocks lacking collision shapes (fixed).
  Used for mining craft or boring drills mounted on vehicles. [wiki-confirmed via changelog]
- **Tier:** Mid-game
- **Cross-pillar hooks:**
  - → **Create spine:** Mobile mining contraption. A flying vehicle with a borehead
    bearing becomes an airborne mining rig — deeply Create.
  - → **Economy:** Automated ore extraction via flying drill → trade ore → ties
    aeronautics into the economy pillar naturally.

### 8e. Plunger Launcher
- **ID:** id unknown (likely `aeronautics:plunger_launcher`)
- **Role:** Launches plungers (hook/attach projectiles) from vehicles. Restricted from
  fake-player use (anti-exploit patch). Likely used for grappling, boarding, or cargo
  retrieval. [wiki-confirmed via changelog]
- **Tier:** Mid-game

---

## 9. Redstone / Automation

### 9a. Typewriter
- **ID:** id unknown (likely `aeronautics:typewriter`)
- **Role:** A keyboard input block for drive-by-wire vehicle control. Right-click to
  start typing; keypresses broadcast as redstone signals on the drive-by-wire network
  (one channel per key, active while held). Supports custom naming and comparator
  output. [wiki-confirmed]
- **Tier:** Mid-game

### 9b. Contraption Diagram
- **ID:** id unknown
- **Role:** Visualization/diagnostic tool — crafted from Physics Assembler + Paper.
  Shows the build from multiple angles and displays force vectors (lift, thrust,
  gravity) acting on the craft. Useful for debugging and optimization. [wiki-confirmed]
- **Tier:** Early (crafted from any-tier assembler + paper)

---

## 10. Propeller Block Variants (blade blocks)

These are not aeronautics-namespace blocks — they are **Create sail/wool blocks used
as propeller blades** when attached to a Propeller Bearing:

| Block | Thrust | Notes |
|---|---|---|
| Wool | 0.5× | Vanilla, cheapest |
| Wooden Sail | 0.5× | Create, cheap |
| Sail | 1× | Create baseline |
| Symmetric Sail | 1× | Create variant |
| Phantom Sail | 2× (2× stress cost) | Create premium |

[wiki-confirmed — all from Fandom propeller bearing page snippet]

The **Andesite Propeller** and **Wooden Propeller** are separate placeable propeller
blocks (not sail-based). The Andesite Propeller has 4 andesite blades vs. the Wooden
Propeller's 2 wooden blades; they function identically. IDs unknown. [wiki-confirmed]

---

## 11. Aviator Goggles

- **ID:** id unknown (likely `aeronautics:aviator_goggles`)
- **Role:** Wearable item. When worn, reveals extended GUI on the Steering Wheel. Likely
  also provides HUD information during flight (force vectors, speed, altitude). Mentioned
  alongside the goggles-triggered steering wheel GUI. [wiki-confirmed]
- **Tier:** Early-mid (cosmetic/utility)
- **Cross-pillar hooks:**
  - → **Economy:** A craftable specialty item that could be sold as a "pilot's kit."
  - → **Magic:** If Ars Nouveau or Occultism adds enchantments for helmets, the goggles
    could slot in as an enchantable accessory.

---

## 12. Gaps / Unknowns — Needs In-Game Verification

The following are known to exist (named in sources) but have **no confirmed recipe or ID**:

| Item/Block | Evidence | Gap |
|---|---|---|
| Levitite Blend | Crystallization mechanic confirmed | Recipe ingredients unknown |
| Levitite Block | Lift value confirmed | Full craft chain unknown |
| Levitite Alloy | Named, "high-tier" | Recipe entirely unknown |
| Physics Assembler | Function fully confirmed | Craft recipe unknown |
| Propeller Bearing | Function confirmed | Recipe unknown |
| Hot Air Burner | Function confirmed | Recipe unknown |
| Hot Air Envelope | Function confirmed | Recipe unknown |
| Gyroscopic Mechanism | Named, used in Gyro PB recipe | Own recipe unknown |
| Swivel Bearing | Function confirmed | Recipe unknown |
| Portable Engine | Referenced in schematics | Recipe unknown |
| Andesite Propeller | Named, 4-blade variant | Recipe unknown |
| Wooden Propeller | Named, 2-blade variant | Recipe unknown |

---

## 13. Pillar-Weave Analysis (Derpack-X specific)

### Current pillar anchoring
Aeronautics currently anchors firmly to the **Aeronautics & Logistics** pillar. Every
item in this mod is, by definition, a one-pillar item unless woven further.

### Most promising weave hooks

**Levitite → Economy (strong)**
Levitite is consumed in bulk (many blocks per craft). It requires zinc (a competed
Create resource), a multi-step process, and crystallization. This is exactly the profile
of a high-value tradeable: hard to mass-produce, needed by everyone building anything
that flies. A player who specializes in levitite production supplies the entire server's
fleet — this emerges naturally without forcing it.

**Hot Air Burner → Survival (natural)**
The hot air system runs on coal/charcoal, bypassing Create's zinc pipeline entirely.
A survival-specialist who produces bulk charcoal (tree farms, charcoal kilns) becomes
the fuel supplier for the hot-air fleet. No KubeJS recipe change needed — the
dependency already exists.

**Borehead Bearing → Create + Economy (strong two-fer)**
A flying drill (Create Aeronautics borehead bearing on a physics contraption with a
portable engine) is one of the most Create-integrated things in the mod: Create's
rotation system, Create's drill-head mechanics, aeronautics assembly, and airship
navigation. The ore extracted could feed the economy pillar directly.

**Rope Winch + Docking → Economy (logistics)**
A server-wide trade network where airships dock at elevated trading posts using rope
connectors and docking connectors is pure economy-pillar content. The infrastructure
already exists in the mod — it just needs player-facing trading posts (Numismatics)
at the landing pads.

**Magic catalyst for Levitite Crystallization (potential KubeJS weave)**
The levitite crystallization step is an in-world catalysis event (not a mixer/furnace
recipe). A KubeJS script could require an Occultism-produced satchel, an Ars Nouveau
rune, or an Iron's Spells catalyst placed adjacent to the blend during crystallization
— weaving aeronautics into the magic pillar without touching Create. Confidence that
this is technically possible: [inferred — depends on how the crystallization is
implemented, needs source code check].

**Phantom Sails as magic-tier material (potential)**
Phantom sails provide 2× thrust at 2× stress cost. If phantom membrane (vanilla) is
woven into a magic crafting chain (e.g., Occultism uses phantom membrane as an
ingredient), phantom sails become cross-pillar by inheritance. [inferred]

---

## Sources

- Fandom wiki snippets via search (403 on direct fetch): https://create-aeronautics.fandom.com/wiki/Levitite , /Propeller_Bearing
- Miraheze wiki (503 on direct fetch), accessible pages indexed in search: https://createaeronautics.miraheze.org
- GitHub changelog (direct fetch succeeded): https://github.com/Creators-of-Aeronautics/Simulated-Project/blob/main/changelog.md
- minecraftstorage.com guide (partial): https://minecraftstorage.com/mods/create-aeronautics/guide
- More Levitite mod page: https://www.curseforge.com/minecraft/mc-mods/morelevitite
- Search snippets (WebSearch, multiple queries, 2026-06-04)
