# Phase 2 candidates — chunk-18

## structurize   [anchors: support/library (1)]

Dossier confirms: pure build-engine dependency for MineColonies. Registers no recipe-types, exposes no
material surface — its scepters and placeholder blocks are purely internal pipeline tools the builder
uses to consume the player's block inventory during construction. No loot tables. The weave is
MineColonies' weave, not this mod's.

- LEAVE — zero independent content surface; no items, no methods, no loot. A structural dependency
  whose integration lives entirely inside MineColonies' weave. Forcing an edge here would be
  attaching to an API object, not a player-facing material.

## balm   [anchors: support/library (1)]

Dossier confirms: multi-loader abstraction API (BlayTheNinth). Zero items, zero blocks, zero loot,
no recipe-types, no gameplay surface of any kind. The 5 c:tags it ships are loader scaffolding
(nugget tags), not routable materials of their own. Dependents (Cooking for Blockheads, Waystones)
carry their own weave separately.

- LEAVE — genuine zero-content code library. No material, no method, no loot. The briefing's
  threshold for LEAVE is explicitly a "pure code library"; balm is the textbook case.

## jamlib   [anchors: library/API (1)]

Dossier confirms: Architectury-based cross-platform library for JamCoreModding mods. Zero items,
zero blocks, zero loot, no recipe-types, no gameplay surface. Purely a JSON5 config abstraction
and platform-agnostic helper layer.

- LEAVE — genuine zero-content code library. Identical verdict to balm: no surface to weave
  against. The dependents it enables carry any weave independently.

## moreoverlays   [anchors: support/QoL-client (1)]

Dossier confirms: pure client-side HUD overlay mod (spawn-danger light level markers F7, chunk
boundary grid F9, JEI-search inventory dimming). Zero items, zero blocks, zero loot, no recipe-
types, no world/material interaction. Requires JEI on client; invisible server-side.

Power-read: everything it does is a rendering pass on existing world state — no material output,
no method that other mods can pull through. There is genuinely no content surface.

Red-team: could we seed a "surveyor's tool" item that ties to its overlay and has a Create/economy
use? That would be authoring content *for* the mod, not weaving *through* it — Phase 2 maps
existing surface, doesn't invent it. Reject that direction.

- LEAVE — client-only HUD overlay with zero items, methods, or loot. Not a code library in the
  strict sense (it has behavior), but has no content surface to weave — the same functional
  conclusion: nothing to propose here without inventing content the mod doesn't ship.

## irons_lib   [anchors: support/library (1)]

Dossier confirms: Iron431's shared framework, providing armor transmog table and player-statue
multiblock plus a Patreon API. Ships 4 items/blocks (the transmog_table and player_statue in two
namespaces). Loot=yes per the jar counts, but that loot is the player_statue's drop, not a
structure chest.

Power-read:
- Transmog table: reskins armor appearance without changing stats/NBT in any way another mod would
  care about. It consumes an armor item to change look — not a material that a Create crusher or
  ritual would plausibly want.
- Player statue: purely cosmetic decorative multiblock. No material output, no joinable recipe.
- The Patreon API: dev scaffolding; zero player surface.

Red-team: could transmog_table be part of a service-for-hire economy link (M-33 — "enchant-for-
hire" analogy where a transmog specialist reskins gear for coin)? The mechanic is purely cosmetic
and not gated on materials, so the service is a "just GUI" operation — a player-run barber's table.
That's thematically plausible (a cosmetics specialist sells appearance services) but M-33 requires
the work to be *labor* on another player's materials, which transmog is. However, the service
creates zero demand pull on production and zero scarcity loop feedback — it's pure vanity. This
sits at the ambient "nice to have" level, not a load-bearing loop connection. Reject.

Could the transmog table take a KubeJS recipe that requires an Ars/magic reagent to unlock
high-tier appearances (M-10 arcane infusion pull)? That would be inventing a recipe on a cosmetic
block to manufacture a weave — authoring, not mapping. The existing item surface gives no hook.

- LEAVE — library with cosmetic-only content (transmog table, player statue). No material is
  routable through any pack method. Forced edges would be authoring new content *onto* the mod, not
  weaving *through* it. The dossier's own candidate assessment reaches the same conclusion.

## bettermineshafts   [anchors: survival (1)]

Dossier confirms: YUNG's mineshaft overhaul — structural/worldgen mod only. Zero items, zero blocks
of its own, loot=no (uses vanilla mineshaft loot tables unmodified), no recipe-types.

Power-read: the structural improvement is meaningful for survival pressure — more dangerous,
sprawling mineshafts with ore caverns — but there is no material surface. The mod does not register
its own loot tables, so even a loot-seed approach (the briefing's explicit alternative to LEAVE for
structure mods) cannot apply here: the loot tables belong to vanilla, not this mod.

Red-team: is there anything in the expanded geometry — side rooms, ore caverns — that could carry
a weave? The side rooms might contain chests if vanilla mineshaft does; but the loot is vanilla's
and any seeding would be to vanilla's tables (attributable to vanilla, not bettermineshafts). The
structural geometry itself has no hook.

Could we call bettermineshafts a "pressure amplifier" that feeds the scarcity → pressure edge more
richly? Yes in design terms — bigger, more dangerous mineshafts = more risk in ore extraction = more
pressure on players to specialize and trade. But this is the *ambient* pressure role of exploration
content, not a weave (no method-pull, no material join). It's the same as BetterCaves or any
terrain overhaul: it enriches survival without needing an explicit weave link.

- LEAVE — structural worldgen overhaul with no own items, no own loot tables, and no material
  surface. The loot-seed escape valve (used for structure mods with loot tables) does not apply
  because bettermineshafts uses vanilla's tables unmodified. Survival anchor is earned through
  the enriched underground environment; a second anchor requires a material hook this mod
  simply does not provide.

## cbc_at   [anchors: create, aeronautics (2)]

Dossier confirms: Create Big Cannons Advanced Technologies addon — twin/heavy autocannons, rocket
pods, barrel attachments, munitions. Already at 2 anchors (Create + aeronautics). Registers 10
recipe-types covering munition assembly and fuzing. Loot=yes (255 items, 207 blocks). Consumes
bronze, cast iron, steel, nethersteel, gunpowder/propellant; outputs assembled weapon blocks and
loaded munitions.

REWORK check on existing connections: the dossier's anchors (Create, aeronautics) are sound —
every barrel/breech is machined via create:cutting / CBC munition assembly, and the weapons are
ship/contraption artillery. The connections are genuinely earned, not arbitrary.

Existing connections: OK — connections sound. The Create-machined artillery arming Aeronautics
ships is exactly the right loop (Create as producer, aeronautics as consumer/user).

Now: propose new/better links to add a 3rd anchor or deepen the existing 2.

**Candidate A — survival/danger pressure anchor via combat-route supply (M-34)**
- Autocannon/rocket munitions are consumed in PvPvE combat. The combat specialist farms raw
  materials (bronze, propellant, metals) and manufactures munitions to sell to non-combat ship
  operators who can't or won't maintain a full munitions line. This is M-34: boss/danger output
  farmed and traded — here the "danger" is ship-to-ship PvPvE and the traded good is ordnance.
- Power-read: autocannon cartridges are mid-tier (bronze + propellant, relatively accessible);
  rocket munitions are endgame (nethersteel, AP fuzing, multi-step assembly chain). Depth is
  already earned by the multi-step `cbc_at:rocket_assembly → cbc_at:rocket_munition_fuzing`
  pipeline. Scaled correctly.
- Theme-fit: a munitions manufacturer selling to ship captains who run cargo or patrol routes is
  exactly the kind of labor-specialization the pack targets. The "combat-route supply" link is
  obvious to any player — of course the munitions maker sells to the ship operator.
- Red-team: is this just "munitions are sellable" (retired M-09)? No — M-34 is specifically the
  supplier side of a boss/danger ecosystem: combat specialist produces and the non-combat player
  buys because they *can't* safely maintain a munitions line and run a ship at the same time. The
  demand is gated on the danger that PvPvE creates, which is the loop's pressure face. Not ambient
  sellable.
- ACCEPT | from: cbc_at munitions (autocannon cartridges, rockets) | via: cbc_at munition
  assembly chain | to: economy (trade, combat supply) | motif: M-34 | power: mid (cartridges) /
  endgame (AP rockets) | tone: ok | hook: the munitions specialist sells loaded racks to ship
  captains who'd rather fly than reload.

**Candidate B — boss-key unlock for heavy autocannon / rocket tier (M-15)**
- The dossier already flags this: "gate the heavy-autocannon/rocket tier behind a boss-drop or
  MineColonies unlock (M-05 native-method gating)." This is really M-15: a boss drop as the gate
  item for a complex Create/tech recipe.
- Power-read: heavy autocannon barrels and rocket pods are endgame ship weaponry — depth via
  multiple machining steps is already present. Adding a boss-drop input gate (e.g. requiring a
  Cataclysm-boss alloy or a Wither skull byproduct) makes the first heavy-ship armament a
  milestone event, not a grind. Appropriate depth.
- Theme-fit: unlocking high-caliber naval artillery by defeating a powerful world boss makes
  narrative sense — the material for a cannon that punches through ship hulls should come from
  something dangerous. No tone clash.
- Red-team: does this over-gate a weapon mod whose job is to arm ships? The lighter autocannons
  (bronze, cast iron) remain freely craftable; only the heavy/nethersteel tier gets the boss gate.
  The progression curve stays intact — early ships arm easily, capital-ship armament is locked.
- ACCEPT | from: boss-drop (e.g. Cataclysm endgame drop) | via: cbc_at:ha_munition_assembly or
  heavy barrel recipe (boss drop as input) | to: survival (boss route) → aeronautics (ship
  armament) | motif: M-15 | power: endgame | tone: ok | hook: the nethersteel rocket pod needs
  the alloy only a world-boss yields — capital-ship weapons are a boss-hunting milestone.

**Candidate C — MineColonies unlock for mid-tier barrel attachments (M-28)**
- Barrel attachments (silencer, muzzle brake, rifled barrel, fume extractor) are mid-tier
  upgrades that modify weapon behavior. These could be colony-unlocked: a MineColonies Blacksmith
  or Fletcher hut researches the attachment blueprints, making the attachment a "colony-exclusive"
  upgrade path (the non-boss route to mid-tier ship weapon customization).
- Power-read: attachments are mid-tier — they modify existing weapons rather than being weapons
  themselves. A light colony-research gate (not deep) fits the cost model.
- Theme-fit: a blacksmith colony specializing in gun attachments is coherent — it's the
  "colony-manufactures what the individual can't" narrative. Plausible.
- Red-team: MineColonies is already the "cheaper basics + locked exclusives" route; routing
  weapon attachments through it doesn't feel forced. The attachment IS a manufactured specialty
  part, and a colony with a gunsmith hut is thematically sensible. However, MineColonies huts
  don't natively handle gun attachments — this would require a KubeJS colony-route gate (lock
  the crafting table recipe and expose it via colony). That's Phase-3 authoring, which is fine
  to propose here.
- ACCEPT | from: mid-tier barrel attachments (silencer, muzzle brake, rifled barrel) | via:
  MineColonies research / hut gate (KubeJS lock) | to: economy (colony route, M-28) → aeronautics
  | motif: M-28 | power: mid | tone: ok | hook: the colony blacksmith's blueprint library is the
  only place that knows how to fit a rifled barrel — you buy the attachment or you trade with
  the settlement.

Summary for cbc_at: 3 candidates accepted, 0 rejected, existing connections sound (OK).

## mcwstairs   [anchors: support/decoration-palette (1)]

Dossier confirms: Macaw's Stairs, ~224 stair/railing/balcony/platform blocks in wood and stone
variants. Vanilla-table crafted, no behavior, no recipe-types registered. Loot=yes (per item count)
— 224 items exist but these are purely the placeable blocks; no structure loot. Consumes planks,
stone, brick, blackstone.

Power-read: pure decoration palette. The dossier already flags the one plausible weave candidate:
stone/brick variants crushing back via M-04 (Create recycles deco). This is the "deco family
wholesale pass" candidate the dossier notes should only happen as part of a broader deco-family
action, not one-offs.

**Candidate A — Create:crushing recycling of stone/brick stair variants (M-04)**
- Stone, brick, blackstone, andesite, granite, diorite railing/stair/balcony blocks crushed back
  to raw/gravel + create:experience_nugget (lossy, consistent with M-04's anti-arbitrage rule).
  Wood variants could crush to planks/sawdust (also M-04, or M-12 if woodchip is a useful
  intermediate). This is the standard "deco recycling" pass that all Macaw's mods share.
- Power-read: everyday/low. These are basic stair blocks, not endgame content. One light step
  (crushing) is the right depth.
- Theme-fit: crushing a stone balcony to get rubble/gravel back is sensible and expected — the
  same logic applies to any stone deco block in the pack. No tone clash.
- Red-team: is this worth doing given the dossier flags it as WEAK and says "only as part of a
  wholesale deco-family pass"? The weakness is in isolation — if every Macaw's mod gets this
  treatment together it becomes a coherent system rather than a one-off. As a lone stair-mod
  entry it's minor but not incoherent. The risk is recipe-table noise: 224 blocks × crushing
  recipes is a large Phase-3 authoring surface — manageable if handled as a tag-based rule
  (`mcwstairs:*_stone_*` → crushed_stone + xp_nugget), not 224 individual recipes.
- Red-team counter: does this add a meaningful second anchor? Create recycling of deco blocks is a
  genuine Create↔deco link. It anchors mcwstairs in the Create production web (even as decoration,
  recycled material is back in the resource loop). The briefing explicitly says "weaving its
  craftables into a second system (through Create even as decoration) is a *plus*." This qualifies.
- ACCEPT | from: mcwstairs stone/brick/andesite/blackstone stair-family blocks | via:
  create:crushing | to: create (M-04, lossy recycle) | motif: M-04 | power: everyday | tone: ok |
  hook: mis-placed stone balconies crush back to gravel — no waste in a Create workshop.

**Candidate B — wood stair variants as Create fuel / boiler feed (M-26)**
- Wooden railing/balcony blocks could be tagged as fuel (Create boilers accept wood tags). This
  links the deco palette to the survival/production loop as a consumption sink.
- Power-read: everyday; wood is basic. This is a one-config/tag change.
- Theme-fit: burning railing scraps in a boiler is thematically fine — wood is wood. No clash.
- Red-team: does this actually create meaningful demand-pull? A fuel sink works as M-26 (consumption
  draws goods back down) only if the fuel has a meaningful scarcity context. Wood is renewable and
  abundant — there's no scarcity that burning mcwstairs railings helps to gate. The demand this
  creates is trivially fulfilled by tree farming. It doesn't advance the loop.
- REJECT | reason: wood is trivially renewable; a wood-fuel sink on decoration blocks creates no
  meaningful demand-pull. M-26 consumption works when the consumed good is scarce or produced at
  cost; abundant wood doesn't qualify. No loop advancement.

Summary for mcwstairs: 1 accepted (M-04 crush recycle), 1 rejected (fuel sink).
