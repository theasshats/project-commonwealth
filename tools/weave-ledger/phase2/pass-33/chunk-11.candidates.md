# Phase 2 candidates — chunk-11

## enhancedcelestials   [anchors: survival (1)]
- from: enhancedcelestials:meteor | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: A meteor shard is clearly a "fallen celestial rock" — crushing it on a millstone yields iron dust + a trace nickel byproduct + xp nugget, a minor Create feedstock the player finds underground and wants to use rather than ignore.
- from: Blood Moon / Blue Moon active state | via: worldgen/event gating (config tie) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: Certain Ars Nouveau rituals or Occultism conjurations only complete under the correct moon — Blood Moon for blood/spirit rituals, Blue Moon for luck-infused imbuements — making the calendar a real constraint, not flavour.
- from: enhancedcelestials:space_moss_block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Space moss is thin worldgen flavour and has no established material role; crushing it adds no gameplay pressure and turns deco into an arbitrary feedstock. The meteor-M-04 candidate above is sufficient; two crush-to-create links from the same mod is redundant.
- from: Harvest Moon active (crop-growth buff) | via: config tie / seasonal hook | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Harvest Moon already *is* a survival lever (faster crop growth) — this would be labelling existing behaviour as a weave rather than creating a new cross-system link. Not an actionable Phase-3 item.

REWORK: OK — connections sound (1 anchor; the two accepted candidates add a genuine 2nd anchor via Create/magic)

---

## bagus_lib   [anchors: support/library (1)]
LEAVE — genuine zero-surface code library; no items, no methods, no loot. Dependency of baguchi's mods only.

---

## everycomp   [anchors: support/deco-compat (1)]
LEAVE — runtime block/recipe generator; no independent items or methods. Any weaving belongs on the host mods whose wood shapes it stamps out.

---

## cookingforblockheads   [anchors: survival (1)]
- from: cookingforblockheads:oven / fridge / sink (appliance blocks) | via: create:mechanical_crafting or recipe | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Upgraded kitchen appliances feel right gated on Create copper sheets and brass — an engineer builds out the kitchen, and the smelting/piping pedigree of the Oven and Fridge maps naturally to processed metal parts.
- from: cookingforblockheads loot table (loot=yes) | via: loot-seed | to: survival/economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: loot=yes but it is kitchen *furniture* loot (cabinets, counters), not a combat/boss drop context. M-34 (combat-route supply) requires a danger/boss context; this is a domestic item. No coherent combat-supply angle.
- from: cookingforblockheads:cooking_table aggregation | via: config tie | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: The Cooking Table is a recipe-discovery convenience, not a consumption sink that renews demand. M-26 requires *spending* an item against pressure; the Cooking Table just organises crafting. Bare "it makes cooking easier" is not a weave.

REWORK: OK — connections sound after M-05 accepted (survival + create, 2 anchors)

---

## kubejs_create   [anchors: support/tooling (1)]
LEAVE — scripting bridge; enables Create-recipe weaving in `kubejs/` but registers no items, methods, or loot of its own. Nothing to weave.

---

## bcc   [anchors: support/QoL (1)]
LEAVE — connection-handshake utility; no items, no methods, no loot. Pack-ops only.

---

## mutantszombies   [anchors: survival (1)]
- from: mutant zombie mobs (Zombie Brute, Crawler, Spitter, Blister, Mutant Brute, Rotten Mutant) | via: loot-seed | to: survival/economy | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: These are harder-than-vanilla zombie variants — they should drop something the regular zombie doesn't. Seeding unique drops (a mutant bone shard, corrupted flesh, or acidic gland from the Spitter) gives a combat specialist exclusive reagents, feeding M-02 mob-drop reagent sink into a magic/economy input. The drops don't exist yet, so this is a Phase-3 loot-table authoring task.
- from: mutant mob drops (reagent tier) | via: occultism:ritual or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Mutant-zombie drops (corrupted flesh/acidic gland) transmuted via spirit fire or ritual into a low-tier spirit essence — the monsters that are harder to fight are exactly the ones that should yield useful occult ingredients.
- from: mutant zombie difficulty baseline | via: incontrol spawn rules | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: M-34 is the combat-supply *economy* side (a specialist farms boss drops and trades them). Here the mobs themselves are not boss drops — they are the elevated difficulty layer. Tagging the difficulty bump as M-34 is a mislabelling; the accepted M-02 / M-11 pair covers the correct cross-system link.

REWORK: OK — connections sound (survival + magic via accepted loot-seed + ritual, 2 anchors)

---

## clumps   [anchors: support/performance (1)]
LEAVE — XP-orb entity merger; no items, no methods, no loot. Pure server-perf behaviour.

---

## spark   [anchors: support/performance (1)]
LEAVE — profiler tooling; no items, no methods, no loot. Diagnostics only.

---

## incontrol   [anchors: support/server-util (1)]
LEAVE — JSON spawn/loot rule engine; no items or methods to weave. It *enables* the scarcity/economy design but is not itself a node in the loop.

---

## foodeffecttooltips   [anchors: support/client-QoL (1)]
LEAVE — tooltip rendering only; no items, no methods, no loot. Client-side UI clarity.

---

## jamlib   [anchors: support/library (1)]
LEAVE — platform-abstraction library; no items, no methods, no loot. Dependency only.

---

## alcohol_industry   [anchors: Create, survival (2)]
- from: alcohol_industry:beer / vodka / whiskey / tequila | via: create:filling → numismatics-adjacent (colony demand gate) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies tavern/inn workers consume alcohol as an upkeep/happiness input — making bottled spirits a colony-demand good rather than just a drink, so the distillery has a guaranteed off-take beyond player buffs.
- from: alcohol_industry:alcohol_base | via: create:mixing with seasonal-gated crop input | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Require a seasonal grain (e.g. a Serene Seasons autumn-harvest wheat variant or hops from a farm mod) as the fermentable base, making distillery output contingent on the harvest cycle and reinforcing the seasons-as-driver logic.
- from: alcohol_industry finished liquors | via: loot-seed / emergent trade | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: M-09 is retired. "Liquors are sellable" is the ambient endpoint of the loop. The M-28 colony-demand candidate above is the correct economy link.
- from: alcohol_industry:whiskey / vodka (high-proof) | via: tfmg:distillation as an alternative refining step | to: create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: TFMG distillation processes petroleum/chemicals — routing potable spirits through industrial petroleum stills would be a tone clash (whiskey in an oil refinery). Reject on theme.

REWORK: The dossier proposed M-09 (luxury→coin) as the 3rd-anchor economy link — that motif is retired; replace with the M-28 colony-demand candidate above.

---

## doubledoors   [anchors: support/QoL (1)]
LEAVE — door-interaction convenience behaviour; no items, no methods, no loot.

---

## galosphere   [anchors: survival (1)]
- from: galosphere:silver_ingot (=palladium) | via: create:crushing (ore-doubling) → numismatics mint | to: create + economy | motif: M-03 + M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Palladium is explicitly scarce and regional (CLAUDE.md); running the ore through a Create crusher for ore-doubling and then pressing a refined ingot into a Numismatics coin makes palladium the natural regional currency — the minting specialisation gates the medium.
- from: galosphere:allurite_shard / lumiere_shard | via: ars_nouveau:imbuement / occultism:ritual | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: Already the pack's reserved attunement catalysts (established, `33/80/97`); confirming the existing connection is sound and no REWORK is needed.
- from: galosphere deco blocks (allurite bricks, lumiere bricks, pink salt, amethyst bricks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crystal-cave deco blocks crushed back to raw shards/gravel + xp nugget — a natural lossiness that makes over-mining deco blocks cost something rather than being free storage.
- from: galosphere:silver_ingot (palladium) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Palladium's reserved role is M-08 player-minted currency (via Create→Numismatics). Routing it into arcane infusion as a magic reagent would double-spend the material in a conflicting direction. Reagent-ownership conflict → reject.
- from: galosphere loot (loot=yes, cave biome drops) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: Galosphere's loot is cave-exploration ambient drops (shards, ingots, deco), not boss/danger drops. M-34 requires a combat/boss danger context; spelunking drops are better handled through the M-03/M-08 processing chain already accepted.

REWORK: OK — existing M-07 connection is established and sound. M-03+M-08 accepted adds Create+economy anchors, giving galosphere 3 systems: survival + magic + create/economy.

---

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore through a Create crusher yields salt dust + a minor trace byproduct — exactly the ore-doubling pattern; salt is a food-processing ingredient and a basic, so a one-step Create route is the right depth.
- from: expandeddelight:cinnamon (dust/spice) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling cinnamon bark in a Millstone into cinnamon dust mirrors how coffee/other spices enter the Create kitchen chain; a light single-step processing pull that bridges the crop layer to the spine.
- from: expandeddelight:cheese_wheel (aged, time-gated) | via: expandeddelight:cheese_cask (maturation) | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Cheese must sit in a cask before it's valuable — a player who specialises in dairying and aging earns a trade good nobody can rush, giving the cheese-maker a genuine market position.
- from: expandeddelight:chili_pepper / sweet_potato | via: farmersdelight:cooking → ars_nouveau:imbuement as catalyst | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: Using generic crop ingredients as arcane infusion catalysts creates a very weak thematic link — chili and sweet potato are mundane food, not magical components. An arcane-infusion role would feel arbitrary rather than coherent. Reject on tone.
- from: expandeddelight:salt (c:dusts/salt) | via: create:mixing as a preservative intermediate | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: The M-03 (salt ore crushing) and M-12 (cinnamon milling) above already pull expandeddelight firmly into the Create production chain. Adding a third Create-processing link for salt-as-preservative is redundant; the accepted candidates are sufficient for the 2nd anchor.

REWORK: OK — connections sound after the three accepted candidates (survival + create + economy via M-03/M-12/M-35).

---

## jeed   [anchors: client-UI/support (1)]
LEAVE — JEI display providers only; recipe-types in the palette are display categories, not craftable methods. No items, no materials, no loot.

---

## sliceanddice   [anchors: Create, survival (2)]
- from: sliceanddice:sprinkler (fluid distributor — water/lava/modded fluids over crops) | via: create:filling (piping fluids into sprinkler) + seasonal modifier | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Pipe a Serene Seasons season-gated fluid (e.g. a warm-season fertiliser or autumn-harvest accelerant) into a Sprinkler to get a seasonal crop-forcing station — the automation chain is season-constrained, not always-on, adding a real calendar pressure.
- from: sliceanddice:slicer (kinetic FD-cutting automator) | via: create:mechanical_crafting gating | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: The Slicer is already create-anchored by construction — it IS a Create kinetic machine. Re-gating it on a Create component would add cost but not a new system link. The existing Create anchor is sound; no additional M-05 needed.

REWORK: OK — already 2-anchor (Create + survival). The accepted M-16 Sprinkler candidate deepens the survival arm.

---

## fusion   [anchors: support/client-library (1)]
LEAVE — connected-texture rendering library; no items, no methods, no loot. Visual dependency only.

---

## zeta   [anchors: support/library (1)]
LEAVE — module-loader framework (Quark's backbone); no items, no methods, no loot. Dependency only.

---

== CHUNK COMPLETE ==
