# Phase 2 candidates — chunk-03

## create_new_age   [anchors: Create (1)]

- from: `create_new_age:energising` method (electrified-item output) | via: `create_new_age:energising` | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: charging a magic focus or Ars source capsule through the Energiser makes electricity a live input to spellcraft — two pillars cross the same block
- from: `create_new_age:energising` method applied to aeronautics control component | via: `create_new_age:energising` | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ion-thruster / advanced propulsion component is "energised" by running it through the Energiser, tying Create-electricity to Aeronautics drivetrain depth
- from: `create_new_age:thorium_ore` (scarce regional ore, 2 biome-modifiers) | via: `create:crushing` → `numismatics` mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Thorium's designated role is reactor fuel → heat (M-13 adjacency); minting it into coin competes with that consumption loop and trivialises the scarcity the reactor mechanic creates — keeps one step, not two

---

## cookingforblockheads   [anchors: survival (1)]

- from: `cookingforblockheads:oven` / `cookingforblockheads:fridge` (flagship kitchen appliances) | via: `create:mechanical_crafting` (as the manufacturing method for mid-tier appliances) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: stocking the full kitchen requires brass-fitted appliances — the fridge and oven need precision-machined parts, so the cook and the engineer trade
- from: `cookingforblockheads:toaster` output (toast) as a sellable economy good | via: `numismatics` sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: toast is a trivial item with near-zero scarcity or effort; the mod's value is recipe-discovery convenience not a new output commodity — selling toast earns no second pillar, it's noise

---

## betterstrongholds   [anchors: survival (1)]

- LEAVE — pure structure/worldgen overhaul; 0 registered items/blocks/methods. No material surface to route through Create, magic, or economy. A loot-table seed (drop a coin or reagent) is a datapack edit, not a method-weave — defer to the 0.9 loot-table pass if desired.

---

## dndesires   [anchors: Create (1, deep)]

- from: `dndesires:freezing` fan method (fan-frost processing) | via: `dndesires:freezing` applied to seasonal crops/fish during the relevant Serene Season | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: freezing a season-only harvest in the fan-frost preserves or transforms it — the Create cold-chain becomes a reason to care about seasons
- from: `dndesires:hydraulic_compacting` (water + sap → raw_rubber) | via: `dndesires:hydraulic_compacting` → rubber as sellable commodity | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: vulcanised rubber from the hydraulic press is a processed industrial good worth coining — the factory player has a trade good the explorer wants
- from: `dndesires:seething` / `dndesires:dragon_breathing` (heat/fire fan processing) | via: those methods applied to magic drops/ores | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: routing raw magic ores/drops through heat fans is a forced stretch — the seething sail is industrial not arcane; M-10 works through infusion/imbuement, not a fan heater; tone clash between industrial batch-processing and magic attuning

---

## drones   [anchors: aeronautics (1)]

- from: `drones:iron_rotor` / `drones:ion_thruster` (thrust components) | via: `create:sequenced_assembly` (ion thruster) / `create:mechanical_crafting` (iron rotor) | to: Create | motif: M-06 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: a functional drone takes real Create fabrication — iron rotors need machine-pressed parts, ion thrusters need a sequenced assembly chain; the engineer earns their personal aircraft
- from: `drones:pocket_drone` (assembled personal drone) | via: `numismatics` sell | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: pocket drone is deeply personal equipment (you build your own); treating it as a generic trade good doesn't fit — the assembly is bespoke, not factory-line; the sell-value evaporates when everyone builds their own

---

## sky_whale_ship   [anchors: survival (1)]

- from: sky-whale loot tables (custom loot chests on whale backs) | via: loot-table seeding (aeronautics progression items / Create components as rare chest finds) | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: reaching a sky whale requires an airship — the whale drops a blueprint fragment or structural alloy that rewards the voyage and feeds the next tier of ship construction; exploration and aeronautics are the same loop
- from: sky-whale loot | via: `numismatics` — seed rare coins/currency into whale chests | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: loot-coin seeding is a weak second pillar — it makes the whale an ATM, which reduces the adventure to cash-farming; the aeronautics weave is already stronger and more thematic

---

## createlowheated   [anchors: Create (1)]

- LEAVE — single-block balance tweak that injects a heat tier; no items, methods, or material surface beyond furnace fuel. All fuels already exist; no new reagent or economy/magic surface appears. Deepens Create internally, but that's already its anchor — no coherent 2nd pillar to find here.

---

## friendsandfoes   [anchors: survival (1)]

- from: `friendsandfoes:crab_claw` (mob drop) | via: `occultism:spirit_fire` or `ars_nouveau:imbuement` as a magic reagent input | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a crab's claw carries an elemental pinch-force — spirit-fire distils that into an Occultism essence or Ars source; combat loot feeds spellcraft
- from: `friendsandfoes:copper_golem_head` + oxidised copper-button deco set | via: `create:crushing` → copper nuggets/scrap | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the copper golem head is a unique decorative trophy item — crushing it to nuggets is thematically bad (you're grinding up a character icon); M-04 is for generic deco blocks, not signature mob heads; the copper-button set is too thin to justify a weave on its own

---

## endrem   [anchors: survival (1)]

- from: themed endrem eyes (e.g. `endrem:undead_eye`, `endrem:magical_eye`) | via: `occultism:ritual` — a ritual consumes a matching themed drop (wither bones/undead essence) to craft the corresponding eye | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: when the undead_eye refuses to drop from the crypt, a dark ritual can forge it from the gathered dead — magic gives the stuck explorer a costly craft path that still respects the theme
- from: `endrem:magical_eye` / `endrem:cryptic_eye` (arcane-flavoured eyes) | via: `ars_nouveau:enchanting_apparatus` — surround with Ars source gems and reagents to assemble the magical eye | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the magical eye is literally magical — the Enchanting Apparatus is the right forge; source gems as a currency-cost keeps this costly and not arbitrary
- from: `endrem` eyes as potential Create-assembly route | via: `create:sequenced_assembly` for one non-magic eye (e.g. `endrem:rogue_eye` — an industrial/mechanical theme) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: most eyes are exploration-flavoured (loot, bosses); forcing even one through Create sequenced assembly pulls the End-progression mod into the tech spine in a way that feels grafted-on — the magic route (M-11) is already the coherent craft-path option; more than one forced eye undermines the exploration intent

---

## valarian_conquest   [anchors: survival (1)]

- from: `valarian_conquest:*_citizenship` items + mercenary-hire interaction | via: `numismatics` coins as currency for recruiting/faction trade (citizens and mercenaries demand coin, not barter) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: hiring a Barathian knight costs a Crown, not just emeralds — faction allegiance and military power route straight through the coin economy; war is expensive
- from: faction gear (`valarian_conquest:*_shield`, armor, weapons) | via: `create:mechanical_crafting` or `create:pressing` — faction weapons need processed metal sheets/parts from the Create spine | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the faction gear is deliberately low-tech medieval aesthetic; requiring Create-machined parts (precision mechanisms, metal sheets) for a feudal blacksmith's kit is a tone clash — peasant armies don't use industrial presses; the economy weave already earns the second pillar without forcing anachronistic production

---

== CHUNK COMPLETE ==
