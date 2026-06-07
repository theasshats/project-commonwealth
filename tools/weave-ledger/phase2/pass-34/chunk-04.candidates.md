# Phase 2 candidates — chunk-04

## better_lib   [anchors: support/library (1)]
LEAVE — zero content surface: no items, blocks, loot tables, or recipe methods. Pure config/messaging API dependency. Genuine zero-surface library.

---

## cataclysm   [anchors: survival (1)]

- from: cataclysm:ancient_metal_ingot / cataclysm:witherite_ingot / cataclysm:ignitium_ingot | via: create:crushing → create:sequenced_assembly | to: Create | motif: M-15 (boss-key unlock) + M-06 (sequenced-assembly keystone) | power: endgame | tone: ok — boss-forged metals forged further in Create's assembly chain fits the dark-industrial + adventure tone | verdict: ACCEPT | hook: The Netherite Monstrosity and Ignis yield metals that only a properly-specced Create workshop can refine into high-tier machine components — combat specialist trades raw ingots, tech specialist processes them.
- from: cataclysm:witherite_ingot / cataclysm:cursium_ingot | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 (mob-drop reagent sink) + M-11 | power: endgame | tone: ok — cursium/witherite have the right corrupted-metal feel for occult transmutation | verdict: ACCEPT | hook: Cursium, tainted by the Harbinger's essence, dissolves into occult reagent under spirit fire — the magic specialist farms the dungeon so they can fuel rituals nobody else can.
- from: cataclysm:hallowed_gem (via loot drop, existing in Cataclysm loot) | via: loot-seed → player-run trade | to: economy | motif: M-34 (combat-route supply) | power: endgame | tone: ok | verdict: ACCEPT | hook: Boss-drop trophies (cataclysm:void_core, cataclysm:scylla_eye etc.) are sourced only by combat specialists and traded to tech/magic players who need them for locked recipes — demand created by M-15/M-02 above closes the loop.
- from: cataclysm:amethyst_crab_meat | via: farmersdelight:cooking or create:mixing | to: survival | motif: M-12 (processing-chain pull) | power: mid | tone: ok | verdict: REJECT | reason: cataclysm already anchors survival; adding another survival edge doesn't add a second system. Food processing of mob drops is generic and doesn't advance the loop. Rejected — redundant anchor, not a new system crossing.
REWORK: The dossier's 2nd-anchor candidate lists M-08 (economy via numismatics sale of boss ingots) — this is a bare sell link, which M-09 retired. Re-express: the economy edge is covered by M-34 (combat-supply) above, which properly gates demand rather than simply being "sellable." Flag the existing "economy via numismatics — boss-material ingots as high-value sellable scarcity [M-08, MED]" note in the dossier as REWORK (wrong motif framing).

---

## rolling_down_in_the_deep   [anchors: support/client (1)]
LEAVE — zero content surface: no items, blocks, loot, or recipe methods. Client-side camera/movement behavior mod. Genuine zero-surface client polish.

---

## death-count-1.0   [anchors: support/QoL (1)]
LEAVE — zero content surface: scoreboard datapack cosmetic, no items/blocks/loot/recipes. Nothing to route or seed.

---

## nochatreports   [anchors: support/privacy (1)]
LEAVE — zero content surface: network/privacy utility, no items/blocks/methods.

---

## terralith   [anchors: survival (1)]

- from: terralith biome diversity (65 c:tags) | via: loot-seed | to: survival | motif: M-30 (regional-scarcity gate) | power: everyday | tone: ok — Terralith's biome spread creates the geographic variety that regional ore-gen and biome-locked spawns run on | verdict: ACCEPT | hook: Terralith's regional biomes are the physical substrate for GTMOGS regional ore scarcity — no Terralith, no "mine in that biome or trade for it." This is an indirect but structurally load-bearing link.
- from: terralith biomes (Moonlight Grove, Skylands, etc.) | via: worldgen/spawn gating | to: magic | motif: M-22 (lunar/celestial reagent) or M-16 (seasonal reagent) | power: everyday | tone: ok — fantastical biomes like Moonlight Grove are the natural home of moon-event-gated materials | verdict: ACCEPT | hook: Moonlight Grove and Skylands provide the fantastical terrain where Enhanced Celestials' lunar events land hardest — the right biome at the right moon phase yields rare reagents.
- REWORK: dossier says "leave — worldgen overhaul with no items/methods to route." That's too fast. Terralith does have 65 c:tags and loot=yes (vanilla structures in unusual terrain). Its weave is indirect (as the dossier notes) but is real and load-bearing — the regional-scarcity foundation depends on it having diverse regions. These ACCEPT rows document the structural role rather than forcing a recipe edge.

---

## ritchiesprojectilelib   [anchors: support/library (1)]
LEAVE — zero content surface: projectile/ballistics API, no items, blocks, loot, or recipe types. Pure library. Its role is served entirely through Create Big Cannons.

---

## aileron   [anchors: aeronautics (1)]

- from: aileron Elytra enchantments (loot=yes, enchant rewards) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 (arcane infusion pull) | power: mid | tone: ok — enchanting an Elytra with arcane focus fits Ars flavor; flight + magic adjacency is coherent | verdict: ACCEPT (conditional) | hook: The Enchanting Apparatus can apply Aileron's advanced flight enchantments that vanilla tables can't — magic specialist unlocks superior glide control for the whole crew.
  - Red-team: aileron's enchantments may not be registered as standard enchantments that the Apparatus can target; if they're behavior-injected, this silently fails. Mark BALANCE-PENDING, verify enchant registration.
- from: aileron loot drops (loot=yes) | via: loot-seed | to: aeronautics | motif: M-29 (cross-route dependency) | power: mid | tone: ok | verdict: REJECT | reason: aileron has no item namespace to seed into — loot=yes means it injects vanilla Elytra rewards, not foreign items. No material to route cross-system. Rejected — no material surface.
OK — aeronautics anchor is sound; it belongs there as a personal-flight rebalance.

---

## almostunified   [anchors: support/recipe-plumbing (1)]
LEAVE — infrastructure tool with no items, blocks, or recipe methods of its own. It operates on the recipe graph, not as a content node within it. Cannot be a weave target or source.
Note: the galosphere silver/palladium GOTCHA flagged in the dossier is still valid — do not unify `galosphere:*silver*` as `c:ingots/silver`.

---

## createtreadmill   [anchors: Create (1)]

- from: createtreadmill:treadmill (player-powered kinetic source) | via: M-26 consumption | to: survival | motif: M-26 (consumption sink) | power: everyday | tone: ok — a player running a treadmill to power a machine is literally the loop's labor-as-pressure axis | verdict: ACCEPT | hook: The treadmill demands *player labor* as a production input — early-game before windmills are built, someone has to run, making physical presence in the factory a survival-pressure link.
- from: createtreadmill:maid_motor (Soul Orb/Photo input) | via: cross-mod join | to: magic | motif: M-29 (cross-route dependency) | power: mid | tone: ok — Soul Orbs touch the spirit-economy that connects to Occultism | verdict: REJECT | reason: touhou_little_maid is a flavor/companion mod, not one of the pack's magic pillars (Ars/Iron's/Occultism). Routing through its Soul Orb as a "magic" anchor would force an unintended thematic claim. Also, the dossier already flags this TLM cross-tie as insufficient for a 2nd anchor.
OK — Create anchor is sound; treadmill is a kinetic source woven into the Create spine. The survival-labor link (M-26) adds a genuine second touch.

---

## dataanchor   [anchors: support/library (1)]
LEAVE — zero content surface: data-attachment and packet utilities library, no items, blocks, loot, or recipe methods. No gameplay surface to route.

---

## dynamic_fps   [anchors: support/performance (1)]
LEAVE — zero content surface: client runtime FPS throttler, no items/blocks/methods.

---

## create_factory   [anchors: Create, survival (2)]

- from: create_factory cream/jam fluids (cream_bucket, sweet_berries_jam, glow_berry_jam) | via: create:mixing or extradelight:vat / oven | to: economy | motif: M-28 (colony route) | power: everyday | tone: ok — a colony Baker or Cook hut using jam/cream as quality ingredients is immediately sensible | verdict: ACCEPT | hook: The colony cook requests cream and jam for high-tier colony meals — the Create factory producing these in bulk is the supplier, and the colony is the demand sink that never zeroes.
- from: create_factory assembled sweets (waffles/rolls/candy apples) | via: M-26 consumption | to: economy | motif: M-26 (consumption sink) | power: everyday | tone: ok — luxury food consumed by colony workers or players | verdict: REJECT | reason: M-26 as a standalone "food is consumed" link is the ambient loop endpoint (food demand is always present). The dossier correctly notes this is M-09-adjacent. A bare "sweets are consumed" edge is not a demand-gating weave; it's the ambient endpoint. Rejected — subsumes into the ambient food loop.
- from: create_factory nectar/spread fluids | via: farmersdelight:cooking or create:filling | to: survival | motif: M-12 (processing-chain pull) | power: everyday | tone: ok | verdict: REJECT | reason: create_factory already anchors survival. This is a same-system edge, not a cross-system weave.
REWORK: The dossier lists "economy via numismatics sell — assembled sweets/waffles are sellable luxury goods [M-09, MED]" — M-09 is retired. The real economy edge is M-28 (colony demand), which is the ACCEPT row above. The dossier's 2nd-anchor economy note should be replaced.
OK — Create + survival dual anchor is sound. M-28 colony-demand weave adds the economy node cleanly.

---

## minecolonies_compatibility   [anchors: survival, Create (2)]

- from: minecolonies_compatibility colony workers + Create Stock Link bridge | via: MineColonies hut request → Create storage | to: economy | motif: M-28 (colony route) | power: mid | tone: ok — the citizen_terminal / citizen_stock_keeper pulling from a Create-managed warehouse IS the colony's logistics integration | verdict: ACCEPT | hook: Colony couriers draw directly from Create's stock system — the colony is a demand node inside the economy's logistics arm, not a separate island.
- from: minecolonies_compatibility TaCZ gunner job | via: combat supply | to: economy | motif: M-34 (combat-route supply) | power: mid | tone: ok — colony gunners consuming TaCZ ammo creates a production demand from the combat specialist | verdict: ACCEPT | hook: Colony gunners need ammo from TaCZ smithing; this gates gun production demand through the colony, making the TaCZ production chain serve a real sink.
OK — already ≥2 anchors (survival + Create). The M-28 and M-34 rows deepen the economy connection; the mod earns a third system touch.

---

## bettermodsbutton   [anchors: support/UI (1)]
LEAVE — zero content surface: client UI button, no items/blocks/methods.

---

## illagerinvasion   [anchors: survival (1)]

- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 (mob-drop reagent sink) | power: endgame | tone: ok — a gem dropped by a dark arcane boss fits perfectly as a magic reagent; the Invoker's whole vibe is cursed relics | verdict: ACCEPT | hook: The Invoker's Hallowed Gem is worthless to a combat-only player — but the magic specialist needs it as a catalyst for an imbuement ritual nobody can self-supply.
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: ars_nouveau:imbuement or create:mixing | to: magic/Create | motif: M-02 (mob-drop reagent sink) | power: mid | tone: ok — illusionary dust screams "magic ingredient" | verdict: ACCEPT | hook: Illusionary Dust, ground from the Illusioner's vanishing tricks, is a glamer reagent that Ars mages need and can't farm without facing the invasion.
- from: illagerinvasion:platinum_chunk (drop) | via: create:crushing | to: Create | motif: M-03 (Create ore-doubling) | power: mid | tone: ok — platinum as a mid-tier metal processed through Create is coherent | verdict: ACCEPT | hook: Platinum chunks from invaders run through Create's crusher to yield platinum ingots + a byproduct — the combat specialist's haul becomes raw stock for the tech workshop.
- from: illagerinvasion Imbuing Table service | via: service | to: economy | motif: M-33 (service-for-hire) | power: mid | tone: ok — over-cap enchantments aren't tradeable goods, but the service (enchant someone else's item for payment) is pure player economy | verdict: ACCEPT | hook: The enchantment specialist parks their Imbuing Table near a market — other players bring items, pay in minted coin or boss drops, and walk away with enchantments beyond vanilla caps.
- from: illagerinvasion:lost_candle / horn_of_sight | via: create:haunting | to: Create | motif: M-19 (soul/haunting seam) | power: mid | tone: ok — lost_candle (a ghost candle) through Create's soul-fire haunting feels very right | verdict: ACCEPT | hook: The Lost Candle, lit by dark magic, feeds Create's haunting process to yield soul-tinged outputs — combat drops become occult Create inputs.
- from: illagerinvasion:platinum_chunk | via: M-30 regional scarcity | to: economy | motif: M-30 (regional-scarcity gate) | power: mid | tone: ok | verdict: REJECT | reason: platinum_chunk is a mob drop, not an ore — regional scarcity applies to worldgen ores, not mob-drop metals. The supply pressure is mob-density / invasion frequency, not geography. Motif mismatch.

---

## crash_assistant   [anchors: support/utility (1)]
LEAVE — zero content surface: crash-log diagnostic GUI, no items/blocks/recipes/loot.

---

## mffs   [anchors: Create, survival (2)]

OK — connections sound. The M-05 + M-06 sequenced-assembly chain is the gold-standard authored weave for Create-gated tech. No new edge is needed or appropriate. The dossier is complete.

---

## northstar   [anchors: Create, aeronautics (2)]

- from: northstar:titanium_ingot / northstar:tungsten_ingot | via: create:pressing → aeronautics construction | to: aeronautics | motif: M-23 (structural alloy → airframe/hull) | power: endgame | tone: ok — off-world metals as premium airframe material is the right sci-fi-industrial flavor | verdict: ACCEPT | hook: A high-tier airship hull demands titanium or tungsten plates hammered in Create — the only source is Northstar's planetary mining, so the aeronautics specialist needs a rocket specialist's output.
- from: northstar:advanced_circuit | via: create:sequenced_assembly or northstar:engraving | to: Create | motif: M-06 (sequenced-assembly keystone) | power: endgame | tone: ok — advanced circuits as a gate for the highest Create machines is clearly right | verdict: ACCEPT | hook: Create's endgame machines require advanced circuits — and circuits require the circuit engraver, which requires going off-world first. Tech depth via more steps, not multiplied cost.
- from: northstar:titanium_ingot | via: numismatics mint | to: economy | motif: M-08 (player-minted currency) | power: endgame | tone: ok — a rare space metal as the basis for a high-denomination coin is coherent | verdict: ACCEPT | hook: Only players who have built a rocket and mined titanium can mint the pack's highest-denomination coin — minting becomes a specialization in itself.
- from: northstar:biofuel | via: createaddition:liquid_burning or aeronautics engine intake | to: aeronautics | motif: M-13 (fuel → propulsion) | power: mid | tone: ok — biofuel from off-world plants powering engines is clear | verdict: ACCEPT | hook: Northstar's Martian biofuel is a renewable endgame propellant — once someone's running a space farm, the colony's fuel bill drops from diesel to biofuel.
- from: northstar:astronomical_reading | via: player-run knowledge trade | to: economy | motif: M-37 (research/knowledge gate) | power: mid | tone: ok — an astronomical reading that unlocks a recipe is knowledge that only the astronomer can produce | verdict: ACCEPT | hook: Astronomical readings from the Astronomy Table gate certain electrolysis/circuit recipes — the astronomer charges for the reading; you can't buy your way around needing one.
- from: northstar metals | via: M-30 regional scarcity | to: economy | motif: M-30 | power: endgame | tone: ok | verdict: REJECT | reason: northstar metals aren't region-locked on the overworld, they're dimension-locked (space). Regional scarcity applies to GTMOGS overworld ore zones. The correct framing is already captured by M-23/M-08 (the scarcity is access to space, not a biome). Motif mismatch for M-30.
REWORK: dossier lists "economy via numismatics sale of astronomical_reading / advanced_circuit as high-tech trade goods [WEAK, M-09]" — M-09 retired. Re-expressed above as M-37 (knowledge gate) which is the accepted equivalent and is properly demand-gating, not a bare sell.

---

## modulargolems   [anchors: Create (1)]

- from: modulargolems golem-body metals (cataclysm:cursium, Ice&Fire dragonsteel) | via: modulargolems:golem_assemble | to: survival | motif: M-02 (mob-drop reagent sink) + M-15 (boss-key unlock) | power: endgame | tone: ok — using boss-tier metals to build a cursium golem that inherits the boss's abilities is thematically excellent | verdict: ACCEPT | hook: A Cursium golem hits with the Harbinger's corruption — you need to kill the boss to build the construct, then the construct becomes your combat-specialist's permanent investment.
- from: modulargolems golem-core upgrade | via: ars_nouveau:imbuement | to: magic | motif: M-10 (arcane infusion pull) | power: endgame | tone: ok — infusing a golem core with Ars source to grant a magic-type ability (glowing, Luck aura, spell resistance) is coherent golemancy | verdict: ACCEPT | hook: A Source-infused golem core gives the construct an arcane ability the forge alone can't grant — the magic specialist infuses parts for the golem builder.
- from: modulargolems golem assembly demand | via: colony-route | to: economy | motif: M-28 (colony route) | power: mid | tone: ok — a MineColonies Golem-Smith job (if configured) routes golem parts through the colony assembly line | verdict: REJECT | reason: there is no MineColonies "Golem Smith" hut in the base colony mod. Without an actual hut type this is speculative config that doesn't exist. Rejected — no implementing method.
- from: modulargolems golem-upgrade slots (combat utility) | via: player-run | to: economy | motif: M-33 (service-for-hire) | power: mid | tone: ok — a golem builder assembles custom constructs for other players who supply the metals | verdict: ACCEPT | hook: Golem builds are a commissioned service — you bring the Cataclysm ingots and Ice&Fire dragonsteel, the golem-builder charges a fee to assemble and tune the construct.
REWORK: dossier lists Create anchor (1) only. All three accepted rows above add survival (M-02/M-15) + magic (M-10) + economy (M-33), lifting it to 4 system touches if all pass Gate 2. At minimum, the survival anchor via boss-metal gate (M-02 + M-15) is the strong one to push.

== CHUNK COMPLETE ==
