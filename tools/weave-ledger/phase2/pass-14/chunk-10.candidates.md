# Phase 2 candidates — chunk-10

## travelersbackpack   [anchors: survival (1)]

**Power-read:** The backpack is a mid-tier exploration item. The ~30 mob-themed variants span everyday (leather-tier) to endgame (netherite/dragon). The upgrade modules (crafting/smelting/tank) are mid-tier QoL. The two fluid tanks are the most mechanically interesting surface — portable fluid buffers have natural Create adjacency.

**Existing connections:** None recorded. Single-pillar (survival).

- from: backpack fluid tanks (portable fluid buffer) | via: recipe — require a `create:fluid_pipe` segment or `create:brass_hand` component in the tank upgrade recipe | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: The fluid hose that feeds a backpack tank needs the same brass fittings as any Create pipe — one step, not a chain.
- from: netherite/dragon backpack variants | via: recipe — `create:sequenced_assembly` adds a hardened shell plate (pressed netherite sheet + mechanical crafting step) to the endgame variant | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: Sequenced assembly for a cosmetic backpack variant is disproportionate depth for a storage item; M-06 is reserved for flagships. The tank-upgrade link (M-20) already gives the Create 2nd pillar without overreach.
- from: backpack (worn, long-range exploration) | via: config or passive — aeronautics thematic fit as expedition carry | to: aeronautics | motif: no-motif | verdict: REJECT | reason: No delivery mechanism beyond "thematically adjacent"; there is no recipe or config hook that makes the pairing concrete. Passive adjacency is not a weave.
- from: mob-themed backpack variants (blaze, enderman, dragon…) | via: recipe — a rare mob drop (enderman pearl, blaze rod) already required in vanilla-adjacent recipe; no motif adds value beyond what's already there | to: magic/economy | motif: no-motif | verdict: REJECT | reason: The themed backpacks already consume their theme mob's drops in crafting — routing them through an additional magic/economy method would be arbitrary layering without a coherent in-game story.

REWORK: No existing authored connections to audit.

**Summary for travelersbackpack:** 1 ACCEPT (M-20 tank upgrade via Create fitting), 3 REJECT.

---

## aeronautics   [anchors: aeronautics (1); Create de-facto 2nd via component crafting]

**Power-read:** Levitite is the pillar keystone — scarce, regional, and the only lift reagent. Everything else (propeller, burner, envelope) is mid-to-endgame ship-building. Digest gap means part IDs are unverified; proposals must name the material category, not a hard id.

**Existing connections:** Create is a de-facto 2nd via component crafting; M-23/M-24/M-13 are the inbound structural/drivetrain/fuel seams. The outbound direction (aeronautics → economy/magic) is under-reviewed.

- from: levitite (anti-gravity lift reagent, scarce) | via: numismatics trade / loot-seed — levitite or a levitite-infused ingot as a high-value regional commodity (sold for coin or found in sky-structure loot) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Anti-gravity ore is regional and scarce — of course it trades at a premium; a chest in a sky ruin holds a sliver of it.
- from: levitite | via: `ars_nouveau:imbuement` — refined levitite as an arcane levitation catalyst (anti-gravity maps naturally to flight/levitation spells) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: The material that defies gravity feeds the Levitation glyph — an Ars mage grinds a levitite chip into source.
- from: finished airship / vehicle (contraption) | via: numismatics | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: A contraption isn't an item and cannot be minted/sold via Numismatics directly; there's no concrete delivery mechanism for this. The levitite-as-commodity (M-08) already links aeronautics to economy through a real item.

REWORK: The de-facto Create 2nd pillar is real but un-authored. M-23/M-24/M-13 are accepted motifs that haven't been instantiated against the unverified part IDs — these are not weak weaves, just pending the #131 digest regen. No REWORK needed, but a flag: **do not author any aeronautics recipe weaves until #131 closes and part IDs are verified.**

**Summary for aeronautics:** 2 ACCEPT (M-08 levitite→economy via loot-seed/trade, M-10 levitite→magic via imbuement), 1 REJECT.

---

## supplementaries   [anchors: Create, survival (2)]

**Power-read:** Already deeply cross-woven (inbound via create:haunting/mixing/splashing, farmersdelight:cutting, jeed providers). Flax is an everyday crop. Ash and soap are everyday processing outputs. Candy is a minor food. The faucet is a mid-tier fluid node.

**Existing connections:** Create + survival — both authored inbound. Dossier says "leave, already ≥2 pillars."

- from: ash (`c:dusts/ash`) | via: `ars_nouveau:imbuement` — ash as a ritual purity/cleansing catalyst (thematically fits purification in Ars lore) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Ash is an everyday material; M-10's anti-gate rule says don't put basic components behind infusion. Additionally, ash-as-magic-catalyst has no grounding in Ars Nouveau's actual spell/reagent system — forced theme fit.
- from: flax (`c:crops/flax`) | via: `create:milling` or `farmersdelight:cutting` → linen fiber → used in a sail recipe for aeronautics symmetric sail | to: aeronautics | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Linen from flax goes into the woven sail cloth — a ship's canvas has to come from somewhere.
- from: candy (`c:foods/candy`) | via: `numismatics` sell trade — candy as a minor luxury trade good | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Candy is a trivially cheap everyday item; minting it as a trade good would trivialize the economy pillar. M-09 is for high-effort processed goods.

REWORK: Existing connections are sound. The Create/survival weave is deep and coherent; no arbitrary edges spotted. `OK — connections sound`.

**Summary for supplementaries:** 1 ACCEPT (M-12 flax→aeronautics sail via Create milling/cutting), 2 REJECT.

---

## createbigcannons   [anchors: Create, aeronautics (2)]

**Power-read:** Steel/bronze/cast_iron/nethersteel are mid-to-endgame metals. Cannon barrels, cartridges, and nethersteel variants are endgame. Gunpowder/propellant is mid-tier. Foundry melting is a unique method. The mod tags `c:ingots/steel` etc. (cross-mod metal shared with TFMG and other steel users).

**Existing connections:** Create (machine build chain) + aeronautics (ship-mounted cannons). Both sound.

- from: cannon shells / big cartridges (finished war goods) | via: `numismatics` sell — finished munitions as a trade good for the military specialist role | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: The crew that runs the foundry sells shells to the crew that flies the gunship — specialization driving trade.
- from: createbigcannons:nethersteel (nether-alloy, endgame tier) | via: `occultism:spirit_fire` — nethersteel scrap transmuted into an occult metal (spiritual resonance of nether-forged steel) | to: magic | motif: M-11 | power: endgame | tone: clash | verdict: REJECT | reason: Nethersteel is a military-industrial material; routing it through spirit fire to produce an occult reagent is a tonal clash — the mod's vibe is heavy artillery, not demonology. Forces a narrative that doesn't exist.
- from: createbigcannons:steel_ingot (`c:ingots/steel`) | via: recipe — steel as a structural airframe input (already shared via c:tags with M-23) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: This is already the existing aeronautics anchor via M-23 (structural alloy → airframe); recording it as a new candidate would be a duplicate of the existing connection, not an addition.

REWORK: Existing Create + aeronautics connections are deep and coherent. No weak edges. `OK — connections sound`.

**Summary for createbigcannons:** 1 ACCEPT (M-09 shells→economy via numismatics trade), 2 REJECT.

---

## smartbrainlib   [anchors: support/library (1)]

0 blocks, 0 items, 0 biome-modifiers, loot=no. Pure AI/Brain framework code library. No player-facing content surface of any kind.

LEAVE — genuine zero-content library (AI framework; no items, blocks, loot tables, or recipes; no content surface to weave through).

**Summary for smartbrainlib:** LEAVE.

---

## createthreadedtrains   [anchors: support/performance (1)]

0 blocks, 0 items, loot=no. Pure server-side railway threading optimization. No content surface.

LEAVE — genuine zero-content performance mod (no items, blocks, loot, or mechanics to weave; server-tick optimization only).

**Summary for createthreadedtrains:** LEAVE.

---

## geckolib   [anchors: support/library (1)]

0 blocks, 0 items, loot=no. Animation/rendering API. No player-facing content.

LEAVE — genuine zero-content animation library (rendering API; no items, blocks, loot tables, or game mechanics).

**Summary for geckolib:** LEAVE.

---

## yungsapi   [anchors: support/library (1)]

0 blocks, 0 items, loot=no. Shared jigsaw/structure API for YUNG's mods. No standalone content.

LEAVE — genuine zero-content library (jigsaw/structure API; no items, blocks, or loot of its own).

**Summary for yungsapi:** LEAVE.

---

## justenoughbreeding   [anchors: support/QoL (1)]

0 blocks, 0 items, loot=no. Pure JEI plugin showing breeding info. No gameplay mechanics or content surface.

LEAVE — genuine zero-content JEI plugin (informational only; no items, blocks, loot, or recipe methods).

**Summary for justenoughbreeding:** LEAVE.

---

## jade   [anchors: support/client-UI (1)]

0 blocks, 0 items, loot=no. Client-side block/entity info overlay. No gameplay mechanics.

LEAVE — genuine zero-content client overlay (display-only HUD; no items, blocks, loot, or recipe methods).

**Summary for jade:** LEAVE.

---

== CHUNK COMPLETE ==
