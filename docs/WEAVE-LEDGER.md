# Weave Ledger — the running design state of the pack's web

> The persistent, shared design state every weaving chunk **reads before it writes** (docs/WEAVING-PLAN.md
> §2–4). It is the source of truth for *what is woven and why* — **not** the connectivity %. Three parts:
> the **motif registry** (shared vocabulary), the **reagent-ownership** table (no double-spend), and the
> **weave log** (every connection proposed/authored). Machine mirror: `tools/weave-ledger/weaves.json`
> (kept in sync; `tools/weave-ledger/check.py` asserts they agree). The per-mod understanding layer lives
> in `tools/mod-data/dossiers/`; the catalogue of methods to weave *through* is
> `tools/weave-ledger/methods-palette.md`.

**Read-first / write-last protocol for a weaving chunk:**
1. Read the motif registry + reagent-ownership below, and the dossiers for the mods in scope.
2. Compose weaves from **existing motifs** (most are *method-routings* — route material X through mod Y's
   method). A weave that fits no motif ⇒ **stop and queue a Gate-0 decision** (don't invent a one-off).
3. Append every weave to the log, update `weaves.json`, and record any new-motif / ambiguous calls in
   `DECISIONS.md`.

---

## 1. Motif registry — the shared vocabulary

A **motif** is a reusable *kind of connection*; **most are method-routings** ("run X through Y's method").
Adding a motif usually means adopting a new connective method — that's a **Gate 0** decision (maintainer
sign-off), because it propagates globally. Reusing an approved motif does not need a gate.

| ID | Motif | Method it rides | Pillars | Status / seed |
|---|---|---|---|---|
| M-01 | **Arcane currency** — Ars `source_gem` is the universal magic currency; foreign essences mint into/out of it | `ars_nouveau:imbuement` · `enchanting_apparatus` | magic↔magic | established · `33-magic-web-spine.js` |
| M-02 | **Mob-drop reagent sink** — an isolated mob/boss drop is given a use as a magic/economy input | the consuming mod's native method | organic↔magic/economy | established · `35-magic-web-mobs.js` |
| M-03 | **Create ore-doubling** — ore → crushed (+byproduct); a *reward*, vanilla smelt path stays | `create:crushing` | any↔Create | established · `RECIPES.md` |
| M-04 | **Create recycles deco** — metal/stone deco crushes back to raw/gravel + an XP nugget; lossy | `create:crushing` | block/deco↔Create | established · `35-web-bridges.js` |
| M-05 | **Native-method gating** — a mod's flagship item is built *in its own machine*, gated on Create parts as inputs | the mod's own machine type | any↔Create | established · `60-mffs.js` |
| M-06 | **Sequenced-assembly keystone** — endgame items are multi-stage chains through a `derpack:incomplete_*` part | `create:sequenced_assembly` | Create (depth) | established · `60-mffs.js` |
| M-07 | **Attunement catalyst** — a worldgen consumable (Galosphere allurite/lumiere shards) gates a conversion so it isn't free arbitrage | rides the host method as a catalyst | magic + survival/worldgen | established · `33`/`80`/`97` |
| M-08 | **Player-minted currency** — scarce regional metal → Create-processed → player-pressed into Numismatics coin; minting is itself a *specialization* (controls the medium), not a vendor sale | `create:*` → `numismatics` mint | Create↔economy | **accepted (reframed #163/#240)** — coins are the player-to-player settlement medium, never an NPC sink |
| M-09 | **RETIRED — Luxury good → coin** — "X is sellable" is the *ambient* endpoint of the loop, not a weave (every product is needed by someone); real cases re-express as demand-gating (M-26/M-29/M-30/locked-exclusive) | — | — | **retired #163/#240** (vendor-sell isn't player-driven) |
| M-10 | **Arcane infusion pull** — a foreign material is refined/attuned into a magic reagent through an arcane infusion method | `ars_nouveau:imbuement` · `forbidden_arcanus:*infusion*` | any↔magic | **accepted** (generalizes M-01) — ⚠ **do not gate basic components behind infusion** (depth scales with power) |
| M-11 | **Ritual / transmutation sink** — a drop or material is transmuted into an essence through a ritual/spirit method | `occultism:spirit_fire` / `ritual` | organic↔magic | **accepted** · `34`/`35-magic-web-*` |
| M-12 | **Processing-chain pull** — a raw crop/material is run through another mod's processing method into a finished good **or a useful intermediate** (e.g. ferment → solvent/alcohol that *feeds other recipes*) — **if it makes sense** | `farmersdelight:cooking`/`cutting` · `create:milling`/`mixing` · `extradelight:*` | survival↔Create/economy | **accepted** (generalizes M-03/M-09) |
| M-13 | **Fuel → propulsion** — refined fuel powers an Aeronautics engine/generator (the airship/vehicle supply line) | TFMG / Create-Addition fuel → engine intake | Create↔aeronautics | **accepted** · #143 |
| M-14 | **CUT — Bounty → coin** — a board paying *minted coin* is an **NPC coin faucet** (currency from outside the player economy); contradicts the player-run ruling | — | — | **cut #163/#240** — re-scope #137 to goods/rep payout or close |
| M-15 | **Boss-key unlock** — a boss drop is the gate item for a complex Create/tech recipe (the DESIGN on-ramp) | the gated machine's own recipe (boss drop as input) | organic↔Create | **accepted** · #92 — must stay thematically sensible |
| M-16 | **Seasonal reagent** — a crop/material obtainable only in a given Serene Season feeds a machine/ritual | season-gated input → Create/magic method | survival↔Create/magic | **accepted** · #91 — Serene Seasons is a **priority** survival lever; want more of these |
| M-17 | **Electric / FE charging bridge** — Create electricity (New Age / Create Addition FE) charges a tool/focus/reagent, threading the electric tier into magic/tech gear | `createaddition:charging` | Create↔magic/tech | **accepted** — only *when it makes sense* |
| M-18 | **Summoned-spirit logistics** — Occultism dimensional miner-spirits / spirit-trade acquire a scarce material or trade; magic as an acquisition/logistics provider | `occultism:miner` / `spirit_trade` | magic↔Create/economy | **accepted** ("ship it, see what comes up") |
| M-19 | **Soul / haunting seam** — `create:haunting` (Create's soul-fire) transmutes an item into a soul/spirit output — a native Create→occult bridge | `create:haunting` | Create↔magic | **accepted** |
| M-20 | **Deploy-application upgrade** — `create:deploying` / `item_application` applies a woven part onto a base to upgrade it | `create:deploying` / `item_application` | any↔Create | **accepted** — the **light single-step sibling of M-06** (which chains deploys); not for basics |
| M-21 | **CUT — Trade-seam to economy** — villager / wandering-trader → Numismatics is another **NPC coin faucet**; resolved *no* under the player-run ruling | — | — | **cut #163/#240** |
| M-22 | **Lunar / celestial reagent** — a material/effect available only during a moon event feeds a method; **applies to ALL the moons** (Enhanced Celestials + Ender Moon + any lunar mod), not just one | lunar-event-gated input → Create/magic method | survival↔magic/Create | **accepted** — extend across every moon event |
| M-23 | **Structural alloy → airframe/hull** — a load-bearing metal plate/beam/alloy (e.g. `create_ironworks` steel plate) is a required build ingredient for Aeronautics airframes, hulls, and structural blocks; makes airframes cost real fabricated material | fabricated structural part → aeronautics construction recipe | Create/survival↔aeronautics | **accepted** — part of making aeronautics *harder/deeper* (sibling of M-13 fuel); scale depth with ship tier, don't gate the most basic frame behind a deep chain |
| M-24 | **Mechanical component → propulsion/control** — a mod's mechanical part (rotor, bearing, engine block, gearset, control mechanism) feeds Aeronautics propellers, engines, and control surfaces (rudders/ailerons) — the drivetrain side of the supply line, distinct from M-13 fuel | component → aeronautics drivetrain/control recipe | Create↔aeronautics | **accepted** — companion to M-23/M-13; depth scales with the component's power |
| M-25 | **Ecological cost** — production output/byproduct feeds back as *local* scarcity/pressure (the loop's return edge: industry damages the commons) | event-driven, locality-bounded (custom) | production↔scarcity/survival | **accepted — MECHANISM-PENDING** · #222 (infinite-world + TPS blockers; *not* a weave you author against existing methods) |
| M-26 | **Consumption sink** — an item is *spent* against pressure (fuel, food, upkeep, durability), so demand never zeroes out (the loop's closing arrow, §5) | the consuming mechanic (burn/eat/upkeep/wear) | production↔survival/economy | **accepted** — native (fuel/food/durability); the demand-renewal edge |
| M-27 | _(unassigned — "diet-demand" considered & **rejected**: food's demand is the ambient use of food, no motif needed)_ | — | — | **n/a** |
| M-28 | **Colony route** — a basic is cheaper/faster via MineColonies, or a part is colony-locked (the non-boss half of the high-tier fork) | MineColonies huts / research / requests | any↔production/economy | **accepted** · §3 — the load-bearing alternate route; twin of M-15's boss route |
| M-29 | **Cross-route dependency** — a recipe in one production route *requires* an input from a different route (magic reagent in a Create chain; Create part in a ritual), forcing the two specialists to trade | KubeJS recipe authoring | production↔production | **accepted** — the purest "nobody self-sufficient"; symmetric generalization of M-05 |
| M-30 | **Regional-scarcity gate** — a good's key input is region-locked by ore-gen, so the good is region-locked and must be traded across regions | GTMOGS regional ore-gen → recipe input | scarcity↔economy | **accepted** — anchors items to the scarcity *foundation* (§1) |
| M-31 | **Logistics-required bulk good** — a good is heavy/bulky/perishable enough that trading it at scale *requires* the aeronautics/logistics arm | aeronautics / trains as the move method | economy↔aeronautics | **accepted** — gives the logistics arm its distribution role (§4/§5 balance lens) |
| M-32 | **Byproduct → input** — a production byproduct/waste is another process's feedstock (industrial circularity) | the consuming process's method | production↔production | **accepted** — companion to M-25 (waste captured instead of dumped) |
| M-33 | **Service-for-hire (labor)** — a specialist performs *work* on another player's materials rather than selling a good (enchant-for-hire, colony contract, repair, cargo runs) | `ars_nouveau:enchanting` / colony / transport; payment **emergent** | any↔economy | **accepted** — the player-economy *labor* axis; value flows player→player, no vendor |
| M-34 | **Combat-route supply** — a boss/danger output is farmed by a combat specialist and traded to non-combat players (the supplier side of the boss dual-role) | boss drop → emergent trade | survival/danger↔economy | **accepted** — completes M-15's *gate* with its economy side (bosses are dual-role, §2/§3) |
| M-35 | **Maturation / aging** — a good *must sit* under the right conditions to gain value (must→wine, milk→cheese, green→seasoned), creating an aging specialist | `create_cheese:maturing` · `vinery` ferment · `extradelight:drying_rack`/`evaporator` · `alcohol_industry` · `tfmg:coking` · `exposure:photograph_aging` | survival/food↔economy | **accepted** — the value-*adding* time axis (twin of M-36) |
| M-36 | **Perishability** — a good *degrades* over time and can't be stockpiled, creating continuous repeating demand and making logistics *speed* matter | spoilage mechanic (custom / mod) | survival↔economy/aeronautics | **accepted — MECHANISM-PENDING** · #238 (no spoilage mod in pack; needs mod-add or KubeJS rot-timers) — decay-sign twin of M-35 |
| M-37 | **Research / knowledge gate** — a recipe is unlocked by research/progression an item *can't* carry (MineColonies research, Ars spell-knowledge); knowledge isn't tradeable, only its product is | MineColonies research · `ars_nouveau` knowledge | production↔economy | **accepted** — a second anti-erosion wall (you can't buy the *capability*) |
| M-38 | **Tooling wear** — the *means of production* (dies, drill heads, foci, press plates) degrade and must be remade by a toolmaker, so even a self-sufficient producer depends on someone | wear on process tools (custom) | production↔production | **accepted — MECHANISM-PENDING** · #239 (no tool-degradation mechanic in pack) |

_Motif rules: **compose, don't invent**; a motif carries its **anti-arbitrage rule** (M-01/M-07
round-trips lose value; M-04 is lossy). **Never gate a *basic / everyday component* behind a complex
recipe** — recipe depth scales with the item's power (everyday = one light step; flagship = deep chain;
§7). New motifs enter via Gate 0 — log the request in `DECISIONS.md`. **M-01–M-38 are Gate-0 accepted**,
except the three killed by the player-run rework (**M-09 retired; M-14 + M-21 cut** — see the note below) and
the four **MECHANISM-PENDING** (M-25/M-36/M-38 + dynamic pricing). Caveats:
M-10 no basic components; M-12 covers useful *intermediates*; M-17 only when it makes sense; M-20 is
the light tier of M-06; M-22 spans every moon; **M-23/M-24 are the aeronautics build + drivetrain seams
(with M-13 fuel) — they deliberately add depth to airship construction, scale with ship tier.**_

_**Rework #163/#240 (economy is player-run).** Nothing is "sold for money" to an NPC — value exists because
another player needs what they can't make. So **"sellable" is the ambient endpoint of the loop, never a
weave**; the weave is always the *demand-gating* (M-26 consumption, M-28 colony, M-29 cross-route, M-30
regional scarcity, M-37 research, locked exclusives). M-08 reframed to **player-minted currency** (the
settlement medium); **M-09 retired**, **M-14 + M-21 cut** as NPC coin faucets._

_**Two status tiers.** Most motifs are **accepted — rides an existing method** (author against it now in
Phase 3). Four are **accepted — MECHANISM-PENDING** (M-25 ecological cost #222, M-36 perishability #238,
M-38 tooling wear #239 — and the economy's dynamic-pricing side, v0.9/#240): the *concept* is accepted but
no mod/method implements it yet, so it's a build task (mod-add or custom KubeJS), **not** a weave you can
route existing material through. Don't propose mechanism-pending motifs as Phase-3 weaves; they're tracked
as their own issues._

---

## 2. Reagent-ownership — reserved connective items (no double-spend)

Before giving an item a **new** connective role, check here. A conflict is a `DECISIONS.md` escalation,
not a local override. (Two chunks repurposing the same reagent incompatibly is a top fragmentation risk.)

| Reagent | Reserved role | Motif |
|---|---|---|
| `ars_nouveau:source_gem` | the universal magic currency hub | M-01 |
| `galosphere:allurite_shard` / `lumiere_shard` | attunement catalyst (gates magic conversions; not free arbitrage) | M-07 |
| `occultengineering:spirit_solution` | the occult intermediate (reuse; don't invent a new reagent) | M-11 |
| `create:experience_nugget` | standard `create:crushing` byproduct | M-03 / M-04 |
| `numismatics:*` (cog / spur / bevel / sprocket / crown / sun) | the **player-to-player settlement medium** — minted by players (M-08), never an NPC sink (M-09 retired; M-14/M-21 cut) | M-08 |
| `irons_spellbooks:arcane_essence` | Iron's-side magic currency, bonded to source via M-01 | M-01 |
| `tfmg:diesel` / `gasoline` / `lubricant` (fuels) | Aeronautics propulsion fuel | M-13 |
| each boss's signature drop (per boss) | boss-key gate item for complex tech | M-15 |

---

## 3. Weave log

Each authored or proposed connection. Status is a state machine:
`proposed → approved → authored → validated(static) → playtested`. Confidence is two independent flags:
**COHERENT** (an LLM can assert) and **BALANCE-OK / BALANCE-PENDING** (only play confirms).

**The `considered` set — record everything, including rejects.** Every integration *proposed* in Phase 2
is logged here even if the red-team or theme-fit **rejected** it (status `rejected`, with the reason), so a
human reviews the full set — accepted and killed — before Phase 3, and a good idea dropped for a fixable
reason isn't lost.

Format:
```
W-### | from: <mod/material> → to: <pillar/mod> | hook: <why a player says "of course">
      | motif: M-## | method: <recipe-type the weave routes through>
      | status: <state> | confidence: COHERENT, BALANCE-PENDING
      | anchors-added: <mod> gains <system> (now N) | sources: [digest][url]
```

_No weaves authored yet — Phase 0/1 build the understanding layer (dossiers) first; authoring is Phase 3._

<!-- WEAVES: append below this line; keep weaves.json in sync. -->
