# Phase 2 candidates — chunk-13

## lithium   [anchors: support/performance (1)]
LEAVE — genuine zero-content performance library; registers no items, blocks, or recipe-types. Nothing to route or weave. Sanctioned support role.

---

## terrablender   [anchors: support (1)]
LEAVE — invisible worldgen API library; registers no items, blocks, or recipe-types. All gameplay content is contributed by dependent biome mods that ride its registration system. Sanctioned support role.

---

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz:twelve_gauge_shell / ammo rounds (bulk-produced) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: "Arms dealer" player role — a Create factory cranking shells and rounds for coin; ammo is consumable so the coin-sink never stops. Advances loop: production → economy.
- from: createimmersivetacz:gun_barrel + firing_mechanism (Create-made intermediates) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: Completing a gun barrel through a sequenced chain makes firearm production feel like a real factory, not a gunsmith table shortcut. Already uses sequenced_assembly per dossier — formalize the M-06 depth chain.
- from: createimmersivetacz:nitropowder_bucket (Create-made explosive fluid) | via: occultism:ritual or ars_nouveau:imbuement as a catalytic explosive reagent | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: Nitropowder is an industrial explosive fluid — forcing it into arcane rituals clashes in tone; no coherent magic hook. No-motif; don't force.

REWORK: The existing single-anchor (Create) is sound — the mod is a deep Create integration. The M-09 ammo economy weave is the natural 2nd anchor; without it the mod's output has nowhere to flow in the loop. OK on the Create anchor itself.

---

## polymorph   [anchors: support/compat (1)]
LEAVE — behavior-only QoL mod; no items, blocks, or recipe-types. Resolves conflicts between other mods' recipes without registering content of its own. Sanctioned support role.

---

## appleskin   [anchors: support (1)]
LEAVE — client-side food-HUD overlay; registers no items, blocks, or recipe-types. Pure display layer. Sanctioned support role.

---

## spark   [anchors: support/performance (1)]
LEAVE — server-side performance profiler; instrumentation only, no items/blocks. Sanctioned support role per CLAUDE.md ("measure, don't analogize").

---

## hpm   [anchors: aeronautics (1)]
- from: hpm:largehull + hpm:smallhull (ship hull components) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Fitting a cutter hull together at the Mechanical Crafter makes the upgrade step visible — wood-only raft is entry-level, brass-joined cutter is the tech tier. Advances loop: Create production gates logistics/aeronautics.
- from: hpm:corvette_steamship_item (flagship tier, WIP) | via: create:sequenced_assembly (engine + hull chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: A steamship deserves a Create assembly line — steam engine + hull sequence makes it a milestone build that sits above the wooden cutter. Deep chain appropriate for flaghship endgame vessel.
- from: hpm:pirate_cutter_item / hpm:cuttermilitariseditem (finished ships) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A shipwright who fabricates cutters can sell them as high-value goods — moving matter and value, the economy arm. Advances loop: production → economy.
- from: hpm:hand_cannon / hpm:hand_mortar (naval weapons) | via: createbigcannons:cartridge_assembly (make cannonballs/charges compatible with CBC) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Cannonballs fed through a CBC-style cartridge press unifies the pack's artillery supply chain so the same ammo factory stocks both ship cannons and hand cannons.
- from: hpm naval ship entities | via: aeronauticscompat (behavior compat on physics ships) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: aeronauticscompat already handles behavior compat for turret/other mods on Aeronautics ships — extending it to hpm's bespoke boat-entities is a compat coding question (curation/engineering), not a weave; no motif covers vanilla-behavior bridging of two independent ship systems. Flag for thunderdome per dossier note.

REWORK: Existing single anchor (aeronautics) is correct for the mod's role. The M-05/M-06 Create hull-gating and M-09 economy candidates above bring it to ≥2 — without them the mod's transport function sits outside the production loop, which is the gap.

---

## tacz   [anchors: support/curated-flavor (1)]
- from: tacz:gun_smith_table_crafting inputs (metals/iron) | via: gating gun_smith_table itself behind create:mechanical_crafting parts (precision mechanism + brass casing) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: You need a working factory before you can arm up — the Gun Smith Table is a Create-fabricated station, so guns are gated on the tech spine. Advances loop: Create production → combat (pressure relief through gear).
- from: tacz:modern_kinetic_gun / tacz:ammo_box (scarce war materiel) | via: numismatics sell/buy | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: On a PvPvE server, guns and ammo are the trade good that matters most — an arms economy with coin-denominated prices turns combat scarcity into economic demand. Advances loop: production → economy.
- from: tacz:ammo (consumable, high-throughput) | via: create:sequenced_assembly (mass-production ammo chain) | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: Industrial-scale ammo production is a Create factory problem — sequenced_assembly casings + filling + primer mirrors real-world munitions manufacture and is already the createimmersivetacz pattern. (These two mods share the ammo factory; M-06 applies to the standalone TACZ path for packs that don't install the integration mod.)
- from: tacz vehicle-mounted weapons (thematic) | via: aeronautics airship turret mount | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: TACZ doesn't natively integrate with Create Aeronautics turret mounts (dossier confirms aeronauticscompat covers other turret mods, not TACZ); flavour-only adjacency, no motif fits. Reject until upstream compat exists.

REWORK: Existing anchor is "support/curated-flavor (1)" — effectively 0 content-loop anchors. The M-05 + M-09 accepts above bring it to Create + economy (2), which is the correct state for a combat-scarcity mod in a PvPvE pack.

---

## cataclysm   [anchors: survival (1)]
- from: cataclysm:ancient_metal_ingot / cataclysm:witherite_ingot (boss-drop rare metals) | via: create:crushing → sheets/processing, then as gate component in create:mechanical_crafting for high-tier machines | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Killing the Ancient Remnant yields metal that the industrial chain needs — bossing and building reinforce each other, exactly the boss-key unlock design named in CLAUDE.md. Advances loop: danger/pressure → production unlock.
- from: cataclysm:cursium_ingot / cataclysm:ignitium_ingot (endgame boss metals) | via: occultism:spirit_fire transmutation → arcane essence/reagent | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Dark-fantasy boss materials transmuted in spirit fire — the mob-drop reagent becomes a magic catalyst (cursium → a cursed essence for summoning). Tone match: cataclysm's dark-fantasy vibe pairs well with Occultism. Advances loop: pressure (danger) → magic production.
- from: cataclysm:ancient_metal_ingot (processed → plate) | via: numismatics sell as a scarce commodity | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: A processed boss-metal plate is the rarest trade good — whoever farms cataclysm dungeons holds a scarce commodity the market wants. Advances loop: production → economy. Note: treat as one candidate among the M-15/M-11 weaves — don't triple-gate the same ingot; pick primary use per Gate 2.
- from: cataclysm:weapon_fusion (Mechanical Fusion Anvil) | via: requiring create:precision_mechanism or brass-tier component as one input | to: Create | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Fusion Anvil needs a precision mechanism — mechanical skill gates weapon fusion, so a Create specialist is the natural weapon-upgrader. Deepens the production exclusivity.
- from: cataclysm azure_seastone deco blocks | via: create:crushing (M-04 recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for generic deco recycling — applying it here doesn't advance the loop in a meaningful way for an endgame boss mod; the azure seastone serves best as structural deco in dungeon builds. Depth trivial relative to the boss-tier sourcing. Low signal.

REWORK: Existing single anchor (survival) is correct but thin — cataclysm is the pack's primary "boss-key unlock" lever (explicitly named in CLAUDE.md). The M-15 Create-gate and M-11 magic-reagent weaves are the exact connections that make it the design lever it's intended to be. Without them it's just a combat mod that sits in a silo. OK on survival anchor; the two accepted weaves close the gap.

---

## jade   [anchors: support/client UI (1)]
LEAVE — client HUD/tooltip overlay; registers no items, blocks, or recipe-types. Sanctioned support role; its value is revealing machine/crop state for other mods, not creating content to weave.

---

## fusion   [anchors: support/client/library (1)]
LEAVE — connected-texture rendering library; no items, blocks, or recipe-types. Sanctioned support role.

---

## kleeslabs   [anchors: support/QoL (1)]
LEAVE — behavior-only slab-breaking convenience; no items, blocks, or recipe-types. Sanctioned support role.

---

## terralith   [anchors: survival (1)]
- from: terralith loot=yes flag (loot tables exist — 65 c:tags) | via: loot-seed — seed weave-relevant drops (regional ore token / Numismatics coin / magic reagent) into the biome-specific loot tables that Terralith's structures/chests define | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: A chest in a Terralith canyon biome yields a regional ore token or coin — the world's geography becomes the economy's frontier, reinforcing that where you settle shapes what you trade. Advances loop: scarcity (region) → economy.
- from: terralith biome surface diversity (fantastical biomes: Moonlight Grove, Skylands, etc.) | via: M-22 lunar/celestial reagent gating — reagents only collectible in matching biomes during moon events | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: A reagent found only in Moonlight Grove under a full moon is a natural reason to travel — Terralith's biome variety multiplies the M-22 lunar-reagent candidates. Advances loop: scarcity (place + time) → magic production. Via: worldgen/spawn event gating.
- from: terralith biome c:tags (65 registered) | via: seasonal reagent availability locked to specific biomes (config tie with Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: A Terralith alpine biome produces a winter-only herb that's needed for a cold-resistance brew — seasons and terrain combine into a survival pressure node. Advances loop: scarcity → pressure. Via: config tie / worldgen interaction.
- from: terralith structure loot tables | via: loot-seed boss-material fragments or faction allegiance items (valarian_conquest drop) | to: survival | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: M-02 is mob-drop reagent sink — it's for isolated boss/mob drops finding a use, not for injecting foreign mod items into worldgen loot. Loot tables belong to M-08/M-14 for economy seeding (the ACCEPT above covers it). Using M-02 here is a wrong motif mapping. Reject; keep M-08 loot-seed above.

REWORK: Existing single anchor (survival) is sound for a worldgen overhaul. The M-08 loot-seed and M-22/M-16 biome-gating candidates give it economy and magic/survival second touches — making regional geography a real driver of scarcity and reagent acquisition rather than pure aesthetic backdrop.

---

## bettermodsbutton   [anchors: support/client UI (1)]
LEAVE — client-only UI mod adding a pause-screen mods button; no items, blocks, or recipe-types. Sanctioned support role.

---

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction loot (shields, armor, weapons from faction structures) | via: loot-seed — seed Numismatics coin drops + high-tier faction bounties into the conquest structure loot tables | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Raiding a Barathian keep drops coins and a faction bounty payout — combat against factions feeds the coin economy, making PvPvE conflict an economic loop node. Advances loop: pressure (danger) → economy. Via: loot-seed.
- from: valarian_conquest:armorsmith station (faction crafting station) | via: requiring create:brass_sheet or create:precision_mechanism as an input to craft faction-tier weapons | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Equipping a mercenary army needs a factory — faction weapons gated on Create processed materials ties the martial progression to the industrial spine. Advances loop: production → pressure/combat.
- from: valarian_conquest mercenary hire (citizen economics) | via: numismatics coin payment — mercenaries cost coin, creating a continuous coin sink | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Paying mercenaries in Numismatics coin turns your guild's military budget into a live economy node — the more you fight, the more coin flows. Advances loop: economy ← production (coin demand drives trade).
- from: valarian_conquest citizenship items (faction allegiance) | via: villager trade / wandering trader → Numismatics | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no) — surface for review but do not treat as accepted. Tagging: `(provisional motif)`. The concept (faction citizenship as a trade commodity through Numismatics) is interesting but M-21 is on the fence.

REWORK: Existing anchor (survival, 1) is a floor. The M-14 loot-seed and M-05 Create-gating + M-09 mercenary-coin weaves give it survival + economy + Create (3) — strong case because faction warfare, mercenary spending, and martial gear production each touch a different loop node. The M-21 provisional is surfaced for Gate 2.

---

## betterendisland   [anchors: survival (1)]
LEAVE — structure/worldgen overhaul with no items, blocks, or loot tables (loot=no per dossier). Nothing to seed, route, or weave. The End arena aesthetics are pure spectacle. Sanctioned single-anchor survival role.

---

## attributefix   [anchors: support/library (1)]
LEAVE — attribute-cap bugfix library; no items, blocks, or recipe-types. Enables magic/combat gear to scale correctly but registers no content of its own. Sanctioned support role.

---

## revelationary   [anchors: support (1)]
LEAVE — progression-gating API library; no items, blocks, or recipe-types. Its mechanism (advancement-gated block reveals) is the implementation substrate for M-05 native-method gating in dependent mods, not itself a weave candidate. Sanctioned support role.

---

## tipsmod   [anchors: support/QoL (1)]
LEAVE — loading-screen tips UI; no items, blocks, or recipe-types. Pack-authoring convenience. Sanctioned support role.

---

## s_a_b   [anchors: Create, aeronautics (2)]
OK — connections sound. Anchors at Create (compacting/mixing already in use as inbound weaves) + aeronautics (blast-resistant plating for Aeronautics ships/CBC vehicles). Already at ≥2. The optional M-06 deepening (a sequenced_assembly chain for hard-steel tier) is a reasonable future depth add but not a gap.
- from: s_a_b:hardsteelblock / doublesteelblock (highest-tier armor plate) | via: create:sequenced_assembly (press → treating → plate hardening chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Hard-steel armor plate isn't stamped in one step — a multi-stage Create assembly (hot-press → quench → surface treatment) makes fortified hulls feel like a manufacturing achievement. Advances loop: Create production depth → aeronautics capability.
- from: s_a_b steel armor blocks (bulk output, colored variants) | via: numismatics sell as armored construction material | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: Steel armor blocks are a structural material, not a luxury/processed-good trade commodity (M-09 is for luxury goods and consumables). A shipwright sells ships, not raw plating. The aeronautics anchor already covers the use-case; an extra economy route through M-09 on raw blocks is thin and round-trip-like without a real trade differentiation. Reject; the M-06 sequenced-assembly depth chain is the right move.

== CHUNK COMPLETE ==
