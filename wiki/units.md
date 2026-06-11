# The units of Project Commonwealth

This pack runs on half a dozen unit systems at once: Create's rotational stress, Forge Energy,
millibuckets, coins, mana, degrees Fahrenheit, and a calendar. Some of them map onto real physics
surprisingly well; some are dimensionally cursed in ways that are fun to pick apart. This page is
the conversion table — what each unit actually measures, how the systems connect, and what they
would be worth in real-world terms. (For how the pack *gates* these systems into a progression,
see [create-progression](create-progression.md).)

A note on rigor: where a real-world figure is given, it is an order-of-magnitude calibration, not
canon. Mod authors do not publish joule values. The anchors used here are stated so you can argue
with them.

## The vanilla substrate

Everything in the pack inherits Minecraft's base units, which are better-defined than people
expect:

- **Length:** 1 block = 1 meter, exactly. Chunks are 16 m across.
- **Time:** 1 tick = 1/20 second. Every rate in the pack bottoms out in per-tick math.
- **Volume:** 1 bucket fills one block, so 1 bucket = 1 m³ and **1 mB (millibucket) = 1 liter**,
  exactly. Fluid pipes rated in mB/t convert at 1 mB/t = 20 L/s.
- **The day:** 20 real minutes, so in-game time runs 72× faster than reality.
- **Gravity:** entities accelerate downward at 0.08 blocks/tick², which works out to **32 m/s² —
  about 3¼ g**. Keep that in mind when judging how an airship "should" fly.

Mass is the notable absentee: vanilla items and blocks have no mass, which is why the kinetics
below have no inertia.

## Rotation: RPM and SU

Create's kinetic network runs on two quantities: **speed**, in RPM, and **stress**, in SU. RPM is
a real unit (angular velocity). SU is where the name lies.

The governing rule: every component has a fixed base value rated "at 1 RPM," and its actual
contribution to the network is **base × current speed**. A mechanical press is 8 SU/RPM, so at
32 RPM it draws 256 SU. A water wheel provides 32 SU/RPM at its fixed 8 RPM, so it supplies
256 SU. The network fails ("overstressed") when total draw exceeds total supply. (The pack ships
Create's default stress values unchanged, so the numbers here are what your goggles show.)

Compare the real rotational power equation, P = τω (power = torque × angular velocity), and the
mapping falls out:

| Create quantity | Physical identity | Real unit |
|---|---|---|
| Speed (RPM) | angular velocity ω | rad/s |
| Base stress value (the "at 1 RPM" rating) | torque τ | newton-meters |
| SU on the network ledger | power P = τω | **watts** |

So despite the name, **SU is not a stress** (a stress is force per area, and nothing in the model
has an area — the same andesite shaft carries 256 SU or a million). It is not an energy either:
nothing accumulates SU over time, there is no rotational battery, and supply must meet demand
instantaneously — like megawatts on an electrical grid, SU is a rate, not a stock. The per-RPM
base values are torques; the headline SU number is power.

What the model quietly gets right: every component is a constant-torque device, which is a fair
approximation of real mills, saws, and waterwheels — and it means **gearing cannot create power**.
Speed a machine up 2× through cogs and its SU draw doubles, while your generator's capacity stays
put. That is exactly how real gearboxes work, and it is the single most commonly misunderstood
fact about gears. Create enforces it by accident of bookkeeping.

What it gets wrong, in order of severity:

- **No inertia.** Networks start and stop instantly; speed is imposed by the generator, never
  accelerated toward. There is no τ = Iα anywhere — "kinetics" is really kinematics plus a power
  ledger.
- **No losses.** Power transmits at 100% efficiency over any distance. The Victorian line-shaft
  factories Create is modeled on lost a quarter to three-quarters of their power to bearing
  friction.
- **Binary stall.** A real overloaded engine slows under load; an overstressed network freezes at
  the exact watt where demand crosses supply.
- **Unbounded torque.** A 1 RPM network can push arbitrary torque through one wooden shaft.
  Ironically, torsional shear — the one quantity engineers actually call "stress," and the reason
  real shafts snap — is the one thing Create does not track.

### Calibrating SU to watts

The large water wheel is the best anchor: a 5-meter wheel turning at 4 RPM and supplying 512 SU.
A real breastshot wheel of that size and speed delivers roughly 5 kW, which gives a tidy
calibration of **1 SU ≈ 10 W**, and therefore about **95 N·m of torque per point of base stress
value**. Sanity checks:

- A mechanical press (8 SU/RPM ≈ 760 N·m) running at the 256 RPM speed cap draws 2,048 SU ≈
  20 kW — squarely in the range of real industrial press motors.
- A hand crank supplies 256 SU ≈ 2.5 kW. Sustained human output is about 100 W, so a Minecraft
  player cranks at roughly 25× world-record-cyclist power. Less plausible.
- The 256 RPM speed cap is accidentally period-accurate: real factory line shafting ran at about
  100–300 RPM.

## Electricity: FE

**FE (Forge Energy)** is the modded ecosystem's shared electrical unit, descended from Thermal
Expansion's Redstone Flux (1 RF = 1 FE). Dimensionally it is an energy, like a joule: it
accumulates in batteries, and power is expressed as a flow rate in **FE/t** (FE per tick). That
makes FE the philosophical opposite of SU — Create runs a watt-economy where supply must balance
demand each tick; FE runs a joule-economy where you can bank energy and spend it later.

In Commonwealth, electricity is a **converter tier, not a power source** — rung 4 of the power
ladder, driven by the kinetic rungs below it (see
[create-progression](create-progression.md)). The FE stack:

- **Create Crafts & Additions** (`createaddition`) — the backbone. Its alternator is the pack's
  canonical SU→FE converter (roughly 75% efficient by its own accounting) and its electric motor
  the way back; accumulators are the batteries.
- **Create: New Age** — the second converter (generator coils, motors), the energising tier
  (overcharged metals — FE made item-shaped), and the end-game **reactor**.
- **TFMG** — the industrial mid-tier. Its production machinery (blast furnace, distillation,
  centrifuge, winding machine) runs on rotation; its separate voltage grid is currently removed
  from the pack (see the conversion seams below).
- **MFFS** — force fields with an FE/t upkeep that scales with field size. You pay watts for
  walls.
- **Create: Blockchain** — the currency miner (see Money, below).

How many joules is 1 FE? There is no canonical answer, but the pack's bridges agree on one rate:
New Age's generator yields exactly **0.029296875 FE per SU per tick** (`suToEnergy`), and
createaddition's base conversion — 480 FE/t at 256 RPM against 16,384 SU — works out to the
*same* number, so New Age evidently adopted createaddition's constant. With 1 SU ≈ 10 W that
pegs **1 FE at roughly 17 J** (1 FE/t ≈ 350 W). For honesty's sake: the wider ecosystem's
conventions imply values up to a few hundred joules per FE — so FE is only locally consistent.
Treat 17 J as the pack's standard, set by its shared base rate.

## Heat: °T and heat levels

Create's boilers measure heat in dimensionless **heat levels** (stacked blaze burners), which is
honest about being a game abstraction. Commonwealth stretches that ladder one rung downward:
Create: Low Heated disables the blaze burner's free passive heat and adds a built **basic burner**
below it, so the pack's heat ladder reads low heat → heated (blaze burner) → superheated (blaze
burner + cake), and every rung is fueled or built, not parked.

Create: New Age is more ambitious and funnier: its solar panels and reactors produce heat
measured in **°T**, flowing through heat pipes at rates of **°T per second** (a basic solar
heating plate makes 20 °T/s, an advanced one 60), losing 1 °T/s passively along the way.

Dimensionally, this is wonderful. Temperature is not a substance — it cannot flow, and
"degrees per second" as a transferable quantity is exactly the **caloric theory** of heat that
physics discarded in the 1840s. New Age has, presumably by accident, implemented
eighteenth-century thermodynamics. (In its defense, caloric theory was good enough to design
steam engines with, which is precisely what the mod uses it for.)

## Money: spurs and the energy standard

Create: Numismatics gives the pack's economy six coin denominations:

| Coin | Value in spurs |
|---|---|
| Spur | 1 |
| Bevel | 8 |
| Sprocket | 16 |
| Cog | 64 |
| Crown | 512 |
| Sun | 4,096 |

Note the mixed-radix ladder (×8, ×2, ×4, ×8, ×8) — this is a pre-decimal currency, structurally
closer to old British pounds-shillings-pence (12 pence to the shilling, 20 shillings to the
pound) than to anything modern. Mental arithmetic at the Trading Floor is period-appropriate.

The interesting dimensional fact is that Commonwealth's money has an explicit **energy backing**.
The Create: Blockchain currency miner converts FE into spurs, and the pack tunes this hard: one
spur costs **8,300,000 FE** (10× the mod default), with a global difficulty ramp that raises the
price as more coins are minted — deliberately marginal, so minting never outcompetes producing
and selling real goods (see the comment block in `config/createblockchain-common.toml`).

Run that through the calibrations above and a freshly minted spur costs about 140 MJ ≈ **40 kWh
of electricity — several dollars of real-world grid power for the smallest coin in the
currency**. A sun would be on the order of 160 MWh, roughly a day's electricity for a small town.
The difficulty ramp means these are floor prices. Economists call a currency whose value is
anchored to the marginal cost of producing it a commodity standard; Bitcoin works the same way,
which is presumably the joke in the mod's name.

## Magic: Source and mana

The magic mods run two separate energy currencies, and neither converts to FE, SU, or each other:

- **Ars Nouveau** uses **Source**, a storable magical fluid-of-sorts: machines drain it from
  Source Jars (10,000 Source each), and spells draw on a regenerating per-player mana pool.
- **Iron's Spells 'n Spellbooks** uses its own **mana** pool (base 100, grown by gear), spent
  per cast and regenerated over time.

Dimensionally both behave like FE — storable energy with regeneration as the power source — but
the absence of any exchanger is load-bearing for the pack: magic power and mechanical power are
non-convertible by design, which keeps the magic and tech production routes distinct and trade
between their practitioners necessary.

## Weather and the calendar

- **Serene Seasons** stretches time into a year: at default settings each sub-season lasts 8
  in-game days, so a full year is 96 days — about **32 hours of real play**. A Commonwealth year
  passes roughly 270× faster than a real one (on top of the day already running 72× fast;
  the two never reconcile, and farming schedules live in the gap).
- **Cold Sweat** is the rare mod that imports a real unit. Vanilla biome "temperature" is a
  dimensionless scalar (0.0 in snow, 0.8 in plains, 2.0 in desert); Cold Sweat re-anchors that
  scale to actual **degrees Fahrenheit/Celsius** and shows it on a thermometer. The default
  habitable band is roughly 50–90 °F (10–32 °C) — outside it, your dimensionless body-heat dial
  starts sliding toward either end, and the ends are lethal. Insulation, seasons, altitude, and
  nearby blocks all feed the reading — including, in this pack, the warmth of machines like
  burners and New Age heaters.

## Ballistics

- **Create Big Cannons** simulates projectile flight with drag and gravity, with velocities in
  blocks per tick (1 block/tick = **20 m/s**). A heavily charged big cannon reaches muzzle
  velocities in the low hundreds of m/s — a real battleship gun manages about 800 m/s, so CBC
  artillery is closer to Napoleonic-era performance with WWI-era shells. Under the pack's 3¼ g
  gravity, trajectories drop correspondingly harder than intuition from Earth suggests.
- **TaCZ** rates gun fire rates in **RPM — rounds per minute**, giving the pack two unrelated
  units that share an abbreviation. Both are dimensionally identical (events per unit time,
  [T⁻¹]), so a 600 RPM rifle and a 600 RPM (hypothetical) shaft tick at the same frequency. This
  observation has no practical use whatsoever.

## The conversion seams

Where unit systems touch, an exchange rate exists — and every exchange rate is a balance lever
someone has to own. The pack's seams, and their current state:

- **SU ↔ FE is bridged twice — on one shared base rate.** createaddition's base conversion
  (480 FE/t at 256 RPM, 16,384 SU) and New Age's `suToEnergy` are the identical constant,
  0.029296875 FE per SU·tick. The devices then ladder by efficiency: the alternator pays a 25%
  conversion tax (75% of base — the early-tier price), New Age's T4 generator coil converts at
  the full base rate, and motors on both sides give SU at the base rate but bill by their dialed
  speed or rated capacity rather than actual load — an oversized or idle motor is the
  inefficiency. The worst possible conversion loop is therefore *exactly* 100%, never more: no
  cross-bridge free-energy exploit exists at these defaults (verified from both mods' sources).
  What remains for [#315](https://github.com/theasshats/project-commonwealth/issues/315) is
  in-game confirmation.
- **TFMG's voltage grid is removed — pending the 2.0 electricity overhaul.** The grid deserves a
  footnote in any units page: it simulates **real SI electricity** — volts, amps, watts, ohms,
  U = IR voltage splitting, transformers by coil turn ratio — the only genuine physical units in
  any of the pack's power systems. But its exchange rate ignores the peg (its generator makes
  ~0.8 FE-equivalent per SU·tick, **27× the base rate**), and nothing in TFMG accepts Forge
  Energy, so it could only ever be a third parallel grid. The pack removes the whole layer
  (generators, cables, devices, meters, electric lights) until the post-1.0 electricity overhaul
  re-tiers it. TFMG's production machines are unaffected — they run on rotation. Tracking:
  [#315](https://github.com/theasshats/project-commonwealth/issues/315).
- **`suToEnergy` is the pack's currency peg.** Blockchain prices coins in absolute FE and MFFS
  bills upkeep in absolute FE/t, so retuning the SU↔FE rate silently re-prices money minting and
  force fields. It is deliberately left at the mod default; treat it as load-bearing.
- **Solar heat is the one free input.** New Age's solar plates make °T from daylight at zero
  marginal cost. v0.7.0 cost-gates their *recipes* (basic behind an electron tube, advanced
  behind a capacitor) so solar is never early free power; whether free heat undercuts the fuel
  economy at end-game scale is the open question in
  [#315](https://github.com/theasshats/project-commonwealth/issues/315).
- **Magic deliberately has no seam.** No Source↔FE or mana↔SU exchanger exists, and that is a
  design decision, not an oversight — see Magic, above.

## The dimensionless rest

Minecraft has a strong house preference for small dimensionless integers, and the pack inherits
it: redstone signal strength and light level both run 0–15 (4-bit registers), health is measured
in half-hearts (a player is 20), hunger in half-haunches (also 20, with a hidden saturation
float behind it — AppleSkin shows you the truth), boiler heat in levels, MineColonies citizens
in skill points and happiness scores. None of these have dimensions, and none of them need any.

## Cheat sheet

| Unit | What it really is | Real-world anchor |
|---|---|---|
| 1 block | length | 1 m exactly |
| 1 tick | time | 1/20 s exactly |
| 1 mB | volume | 1 L exactly |
| 1 RPM | angular velocity | 1 RPM (it's real) |
| 1 SU | power | ≈ 10 W (waterwheel calibration) |
| 1 SU/RPM (base value) | torque | ≈ 95 N·m |
| 1 FE | energy | ≈ 17 J (shared base rate; alternator pays 25% tax) |
| 1 FE/t | power | ≈ 350 W |
| 1 °T/s (New Age heat) | caloric flow | n/a — physics discarded this in the 1840s |
| TFMG volts/watts/ohms | real SI electricity | genuine units; grid removed until the 2.0 overhaul |
| 1 spur | currency | ≥ 8.3 MFE ≈ 40 kWh of minting energy |
| 1 Source jar | magic energy | 10,000 Source; no exchange rate, by design |
| Gravity | acceleration | 32 m/s² ≈ 3¼ g |

## Sources

Stress mechanics and default values: the [official Create wiki on stress units](https://github.com/Creators-of-Create/Create/wiki/Stress-Units,-Capacity-and-Impact)
and the Create Fandom pages for the [Water Wheel](https://create.fandom.com/wiki/Water_Wheel),
[Large Water Wheel](https://create.fandom.com/wiki/Large_Water_Wheel), and
[Mechanical Press](https://create.fandom.com/wiki/Mechanical_Press). Numismatics denominations:
the [Create: Numismatics mod page](https://modrinth.com/mod/numismatics) and its addon
documentation. New Age rates: the mod's source
([`CommonConfig.java`](https://gitlab.com/antarcticgardens/create-new-age/-/blob/1.20.1/common/src/main/java/org/antarcticgardens/cna/config/CommonConfig.java),
[`MotorBlockEntity.java`](https://gitlab.com/antarcticgardens/create-new-age/-/blob/1.20.1/common/src/main/java/org/antarcticgardens/cna/content/motor/MotorBlockEntity.java)).
The pack's power-stack roles: `docs/POWER-MODS-REVIEW.md` and
`kubejs/server_scripts/spine/20-power-ladder.js`. Blockchain minting costs: this pack's
`config/createblockchain-common.toml`. Real-world figures (waterwheel output, human power
output, line-shaft losses and speeds, naval gun velocities, household electricity) are standard
reference values, rounded.
