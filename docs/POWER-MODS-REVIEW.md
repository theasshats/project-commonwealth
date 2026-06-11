# Power-system mods — evaluation & the Create: Power Grid question

> **Status: DECIDED (v0.7.0) — kept as the 2.0 basis.** The v0.7.0 calls this review recommended all
> landed: shipped on the createaddition backbone, Create: Nuclear cut (#289), New Age's reactor is the
> end-game generator, and **Create: Power Grid is the 2.0 electricity-overhaul flagship (#282)** — this
> doc is the analysis #282 builds on. Internal curation artifact. Evaluates the
> pack's Create power/electricity mods on their own merits (independent of the v0.7.0 integration weave),
> and assesses **Create: Power Grid** as a candidate for *the* central power mod. Pairs with
> `docs/CREATE-SPINE.md` (the ratified tier design) and `docs/CURATION.md` (keep/cut rubric).
>
> **Headline:** Power Grid is the best *thematic* fit (real kinetic→FE converter, GregTech-style depth) but a
> structural pivot with real performance/complexity/maturity risk. **Recommendation: treat it as a
> post-1.0 "2.0 electricity overhaul" flagship, not a v0.7.0 change** — ship v0.7.0 on the stable
> createaddition backbone, and reimagine power around Power Grid for a 2.0 once there's a stable base +
> live performance data. (§9, §11.)
>
> **Addendum (v0.7.0): the TFMG voltage-layer overlap (§2/§6) is resolved early — the layer is removed
> outright**, not just hidden at the FE boundary. Bytecode reading of tfmg-1.2.0 established: the grid's
> kinetic rate is off the pack's pegged 0.029296875 FE/SU·tick base (its generator: 40 W/RPM against a
> 50 SU/RPM impact ≈ 27× the peg); exactly two blocks bridge volts↔FE (`tfmg:converter` in,
> `tfmg:accumulator` out); **no TFMG machine accepts FE** — production machinery is kinetic
> (`machine_input`), and the grid's one production machine (polarizer → magnet) feeds only grid devices,
> so the layer is fully self-contained. `kubejs/server_scripts/spine/63-tfmg-voltage-removed.js` makes
> the whole family uncraftable (generation, transmission, devices, instruments, electric lights);
> `createaddition:electric_motor` takes over the T4 drive role. Circuit boards, wires/spools, engines,
> and the gas lamp are untouched. **Re-adding TFMG electricity, re-tiered, is now explicitly part of
> #282's scope.** Verification: #315 / PR #234.

## 1. Why this review

The pack ships **four overlapping FE/electricity mods** — Create Crafts & Additions, Create: New Age, TFMG,
Create: Nuclear — plus kinetic/cosmetic addons. They interoperate (shared Forge Energy) but are *redundant*
unless tiered. The question on the table: should **Create: Power Grid** (not currently in the pack) become
THE electricity layer, with the others re-tiered or retired around it?

## 2. The landscape

| Mod | In pack | Layer | Currency | Conflicts? |
|---|---|---|---|---|
| **Crafts & Additions** (`createaddition`) | ✅ | SU↔FE converter + metalwork | **FE** | duplicate converter w/ New Age |
| **New Age** (`create_new_age`) | ✅ | electricity + reactor | **FE** (+heat) | duplicate converter; duplicate reactor |
| **TFMG** (`tfmg`) | ✅ | industrial (oil/steel/circuits) + own voltage | SU + **FE-compat** | parallel cables/circuits |
| **Nuclear** (`createnuclear`) | ✅ | end-game reactor | heat→steam→SU | duplicate reactor w/ New Age |
| **Power Grid** (`power-grid`) | ❌ candidate | physics circuit-grid | **FE** | would be a *fourth* electricity layer |
| gnkinetics / createtreadmill | ✅ | kinetic SU | none | none |
| pantographs-and-wires | ✅ | cosmetic catenary (no power) | none | none |

**Surprise findings:** `create-pantographs-and-wires` carries **no power** (cosmetic train catenary despite
"wires"); `gnkinetics`/`createtreadmill` are pure kinetic — none of the three conflict with anything. The
whole electricity story is the **four FE mods** (+ Power Grid as a fifth).

## 3. Per-mod profiles

**Crafts & Additions (`createaddition`)** — ★★★★★ made, MIT, mature, current on 1.21.1.
The textbook "converter not source": **Electric Motor** (FE→SU) + **Alternator** (SU→FE, ~75% lossy). Plus
metalworking (rolling mill → wires/rods/sheets), electrum, bio-fuels, FE storage (accumulators), wires
(4,096 FE/t per connector). Depth via the ingot→rod→spool→wire chain. ⚠️ a reported Create Aeronautics
compat crash (issue #1131) to verify. **Anchors:** Create spine + economy. **The cleanest, most stable FE
backbone of the lot.**

**New Age (`create_new_age`)** — ★★★★★ made, very actively maintained (1.2.0, Jun 2026).
Electricity (generator coil = kinetic→FE, motors, energiser tiers, wires), **overcharged-material tier**,
solar **heat** plates (not free FE — routes through steam→kinetic), and a **multiblock reactor** (heat→steam).
Converter-aligned. **Overlaps:** its SU↔FE conversion duplicates createaddition; its reactor duplicates
Create Nuclear. Solar Heating Plate is the one quasi-passive input to scrutinize.

**TFMG (`tfmg`)** — ★★★★☆ made (deep, but breadth/decoration sprawl), active (1.2.2).
The GregTech-ish industrial mid-tier: oil→distillation→fuel, combustion engines (SU), steel, the
empty→coated→etched **circuit ladder**, plastics/petrochem, *and its own FE-compatible voltage layer*
(cables/transformers/electric machines). **Anchors 3 systems** (Create + scarcity + economy). The natural
T2–T3 industrial spine. Its voltage layer is the overlap to resolve.

**Nuclear (`createnuclear`)** — ★★★☆☆ made (good theme), **beta** (`1.3.2-beta.3`), **All-Rights-Reserved**.
Uranium → enrichment chain → reactor multiblock → **heat→steam→SU** (no native FE). Radiation hazard +
anti-rad armor. Consumable fuel = ongoing scarcity sink. **Anchors:** Create + survival (radiation/scarcity).
**Directly redundant with New Age's reactor** (both heat→steam end-game). Beta stability is unverified —
playtest reactor formation + radiation edge cases.

**Power Grid (`power-grid`)** — ★★★★☆ made, Release-tagged, ~855K downloads, **152 open issues**. See §5.

## 4. The overlap problem (why "fit together" is a curation problem, not a code problem)

They all speak FE, so plumbing is trivial. The redundancy is the issue:
1. **SU↔FE conversion duplicated** — createaddition **and** New Age.
2. **End-game reactor duplicated** — New Age **and** Nuclear (both heat→steam→SU).
3. **Cables/circuits triplicated** — createaddition, New Age, TFMG. Power Grid would make it **four**.

Resolving this is ~30–50 recipes of tiering + a few keep/cut calls — the size of pass we did for v0.7.0.

## 5. Create: Power Grid — deep-dive

**Mechanics (confirmed):**
- **Generation = a Create-rotation converter.** The **Alternator** makes FE from SU at `(45 × RPM)/64` FE/t,
  ~75% efficiency, dead below 32 RPM. **No solar/RTG/passive sources** — strictly kinetic-gated. The purest
  "converter, not free source" of any candidate.
- **Round-trip:** **Electric Motor** = FE→SU. Plugs both into and out of Create kinetics.
- **A real grid sim:** circuits must form **loops**; models **voltage, current, resistance, losses**
  (higher voltage = less loss). **Balance production vs demand** — overvoltage **damages equipment / starts
  fires**.
- **Hand-built electronics:** lay out **resistors, capacitors, vacuum tubes** on **etchable circuit boards**,
  route → etch → populate. Devices: voltage-controlled servo, electric fan, basin heater, heating coil,
  grow/light lamps, electromagnets, alarms.
- **FE bridge outward** — powers any FE machine. **Inbound** (other mods' FE → the grid) is **unconfirmed**;
  likely needs an FE-input block — verify in-game.
- **In-game onboarding:** ships **Create Ponder** tutorials that teach Ohm's law and the mechanics — a real
  accessibility mitigant (see §8).
- **Performance:** the repo ships an **optional native C++ accelerator** for the circuit solver — strong
  signal the author knows per-tick network solving is CPU-heavy.

**Fit with pack goals:** best-in-class. Converter-not-source ✅; GregTech depth (route→etch→populate→balance)
✅; anchors Create spine + economy (etched boards/tubes = scarce specialist trade goods) ✅; drives **emergent
specialization** — "the circuits person" becomes a co-op trade role, exactly the economy the pack wants.

**Gaps:** no end-game reactor/bulk generator (needs Nuclear or New Age's reactor to feed it via SU);
inbound-FE uncertain; the PCB curve is steep as a *sole* path.

## 6. The reshape — roles if Power Grid is the spine

| Mod | Today | With Power Grid as spine |
|---|---|---|
| **Power Grid** | — | **THE electricity layer** — SU↔FE + the deep grid/PCB tier (T3→T4) |
| **Crafts & Additions** | FE backbone | **Demoted to the gentle on-ramp** (simple Alternator/Motor + accumulators = early FE tier); **keep its metalworking + bio-fuels** as feedstock |
| **New Age** | electricity + reactor | **Biggest casualty** — electricity retired; keep at most its overcharged-material tier (and its reactor only if Nuclear is dropped) |
| **TFMG** | industrial + own voltage | **Stays as the SU industrial mid-tier** (combustion engines make SU → Alternator → FE); **hide its parallel voltage layer** |
| **Nuclear** | end-game reactor | **Stays as the end-game generator** (Power Grid has no reactor) |

**Reshaped stack:** kinetic (Create + gnkinetics + treadmill + TFMG combustion + Nuclear reactor) →
**Power Grid Alternator (the converter)** → **Power Grid grid (deep FE tier)**, with **createaddition as the
early FE on-ramp + metalwork** and **New Age electricity retired**.

## 7. Hiding / removing the redundant generation (required cleanup)

If Power Grid's Alternator is the canonical SU→FE path, the **other mods' FE generators must be hidden or
removed** or you get competing/parallel generation and a muddled progression. Concretely (KubeJS recipe
removal, or disabling blocks):
- **New Age generation:** generator coil, energisers, motors, **solar heating plates**, the New Age reactor
  (if Nuclear is the chosen reactor). Retire the *electricity* line; keep overcharged materials only if they
  feed something.
- **createaddition:** keep its Alternator/Motor as the *simple early tier* OR remove them in favor of Power
  Grid's — **decision needed** (lean: keep as the casual on-ramp). Keep metalwork/fuels regardless.
- **TFMG voltage:** hide its electric machines' *generation/voltage* role; keep combustion engines (SU) and
  steel/circuits.
- ⚠️ **Caution:** many of these blocks are ingredients in *other* recipes, and some players will have built
  with them. Hide the **generators**, not the shared components; do it with recipe removal + JEI hiding, and
  carry a clear changelog note. This is destructive curation — exactly the kind that needs a major-version
  boundary (§9), not a mid-version patch.

## 8. Complexity assessment for a casual audience (vs HBM's NTM and the field)

The pack is a **public** release targeting **broad hardware and mixed-skill co-op** — so "is this too hard
for a casual?" is a first-class question. A rough complexity ruler (1 = vanilla, 10 = hardest tech mods),
relative to a casual player:

| ~Tier | Mod / system | Why |
|---|---|---|
| 1–2 | Vanilla redstone, base Create | intuitive, visual |
| **3** | **createaddition** | "alternator → wire → machine" — FE with no sim; trivial |
| 4–5 | New Age, Mekanism | tiered machines, guided; some progression depth |
| 6 | **TFMG** | multi-step oil/steel/circuit chains, but *linear* (follow the recipe tree) |
| **7** | **Create: Power Grid** | **real circuit engineering** — loops, Ohm's law, voltage balancing, hand-etched PCBs. A genuine step up, but **Ponder-guided in-game** |
| 9–10 | **GregTech, HBM's NTM** | sprawling multi-year tech trees, RBMK reactor physics, chem chains, **external-wiki-dependent**; punishing |

**Where Power Grid lands:** meaningfully complex (~7) — it asks a player to *understand electricity*, which
is more than any other Create power addon — **but it is not NTM-tier**. NTM is one of the most expansive,
punishing tech mods in Minecraft (5+ years of content, JEI/wiki mandatory, RBMK reactor management); its
complexity is *breadth + opacity*. Power Grid's complexity is **narrow and deep** (one elegant system —
circuit physics) and, critically, it **teaches itself via Ponder** (Ohm's law tutorials), where NTM throws
you at an external wiki. So: harder than everything else in the pack, far easier than NTM, and **self-onboarding**.

**Casual-audience verdict:** acceptable **only if it is not the *only* power path**. Layer it: a casual
runs a simple Alternator→wire→machine (createaddition-tier) and never touches a PCB; an enthusiast goes
deep into etched circuits and becomes the server's "power engineer." Forcing PCBs on everyone would breach
the broad-audience goal; **layering preserves it.** (This layering is also why createaddition stays — §6.)

> _A player-facing version of this complexity comparison (Power Grid vs the field) would be a good `wiki/`
> page when/if it's adopted — set expectations before someone installs._

## 9. The 2.0 question — this is a major-version shift, not a patch

Adopting Power Grid as THE power mod is **not a v0.7.0 change**. It would:
- **retire/hide** other mods' generation (destructive curation, §7),
- **re-tier** the entire electricity progression,
- **rework** most of the v0.7.0 electricity weave (which assumes createaddition+New Age+TFMG as the FE stack),
- and **bet** on an unprofiled performance/complexity/maturity profile.

That is a **flagship feature for a future major version (a "2.0 electricity overhaul")**, after the pack has
a stable **1.0** base and real performance data from the live server. Doing it mid-road would destabilize
v0.7.0's spine and break saves built on the current generators. **The clean path:**
1. **v0.7.0 → 1.0:** ship on the **createaddition FE backbone** + TFMG industrial + one reactor (the work
   already built). Stable, accessible, converter-aligned.
2. **Post-1.0 "2.0":** reimagine power around **Create: Power Grid** as the headline feature — *after* a spark
   performance test and a complexity playtest, with createaddition kept as the casual on-ramp and New Age's
   electricity retired. A 2.0 is the right place for a destructive, identity-level system change.

## 10. Risks (summary)

1. **Performance** — per-tick circuit solving on a ~10-player server is unprofiled. The native accelerator
   helps but **must be spark-tested**. *This is the disqualifying gate if it fails.*
2. **Complexity** — steep as a sole path; mitigated by Ponder + layering (§8).
3. **Maturity** — Release-tagged but 152 open issues; not battle-hardened.
4. **Destructive rework** — retiring other generation breaks saves + the v0.7.0 weave; needs a major-version
   boundary (§9).

## 11. Recommendation

**Yes to Power Grid — as a post-1.0 2.0 flagship, gated on a performance test, layered above createaddition,
with New Age's electricity retired and Nuclear kept as the end-game reactor.** Do **not** pull it into
v0.7.0. For v0.7.0→1.0, keep the **createaddition backbone** (cleanest, most stable, converter-aligned) and
the work already built.

**Hard gates before any adoption:**
- [ ] **Spark-profile** a large Power Grid grid on the live server (≥ a few players). Fail = stop.
- [ ] **Complexity playtest** — can a non-engineer crew member build a basic working circuit from Ponder alone?
- [ ] Confirm **inbound FE → grid** behavior (does external FE inject, or is an adapter needed?).
- [ ] Re-verify **createaddition ↔ Aeronautics** crash (#1131) — Aeronautics is required here.

## 12. Issues to file
- **Backlog:** "Spark-test Create: Power Grid grid performance on ishimura" (the gate).
- **Backlog / 2.0:** "2.0 electricity overhaul — adopt Create: Power Grid as the power spine; retire New Age
  electricity; layer createaddition as the on-ramp."
- **v0.7.0/curation:** "Pick ONE reactor — New Age vs Create Nuclear" (needed regardless of Power Grid).
