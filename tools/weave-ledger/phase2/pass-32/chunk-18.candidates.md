# Phase 2 candidates — chunk-18

## fxntstorage   [anchors: create, survival (2)]

- REWORK: existing connections sound — mechanical_crafting already weaves it into Create; survival via inventory/QoL is coherent. The dossier 2nd-anchor note about flight upgrade / aeronautics is correctly declined (worn gadget, not a resourced weave). No forced additions needed.
- from: fxntstorage:backpack_flight_upgrade | via: create:mechanical_crafting (aeronautics structural part as input) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: the flight upgrade is a personal wearable worn by a player on their body, not an airframe/hull structural component; M-23 gates airship-build materials, not personal gear. Forcing airship parts into a backpack upgrade recipe reads as contrived. No coherent second use.
- from: fxntstorage:brass_backpack (hardened tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: fxntstorage already routes through create:mechanical_crafting; adding a sequenced_assembly chain to the backpack would be depth-stacking on top of an existing 2-anchor mod. Dossier already marks "no forced second weave needed." Applying M-06 here would violate the "depth scales with power, but don't force" guard — the backpack is already Create-gated.
- OK — connections sound (Create + survival already a coherent 2-anchor pairing; no weak or arbitrary edges).

## cataclysm   [anchors: survival (1)]

- from: cataclysm boss drops (Witherite Ingot / Ignitium Ingot / ancient_metal_ingot) | via: create:crushing → create:pressing → sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the only way to unlock a deep Create machine tier is to have cleared a Cataclysm dungeon boss — no kill, no keystone part.
- from: cataclysm:witherite_ingot / cataclysm:cursium_ingot | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: soul-infused wither-metal dissolves cleanly in spirit fire, yielding an occult reagent — the combat specialist feeds the magic wing.
- from: cataclysm boss drops (multiple) | via: loot-seed (boss loot-table already rich; seed M-15 key items + occult reagents) | to: create + magic | motif: M-15 + M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: killing a Leviathan or Netherite Monstrosity is the hard barrier the server's combat specialist clears to unlock parts that the tech and magic specialists cannot make themselves — a pure M-34 supply seam.
- from: cataclysm:ancient_metal_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: ancient_metal is a dark-dungeon material; Ars Nouveau imbuement has a crystalline/arcane-academic vibe. The thematic pairing is a forced mash — spirit fire (M-11) is the coherent magic sink for dark/wither-adjacent metals. Redundant with the M-11 candidate above.
- from: cataclysm decorative blocks (azure_seastone / black_steel) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (Create recycles deco) is sound technically, but cataclysm's deco is deep-dungeon-only material — players obtaining it will have cleared endgame content. Recycling it for gravel/dust is a lateral use and creates no loop-advancing connection. Not worth the overhead of gating M-04 on an endgame deco set.

## azurelib   [anchors: support/library (1)]

- LEAVE — genuine zero-content animation library (1 utility block, no items, no recipe types, no loot table). No gameplay surface to route through any method. Role is as a dependency for Cataclysm and similar; no weave possible or appropriate.

## appleseed   [anchors: survival (1)]

- from: appleseed diet-demand mechanic | via: config/tuning (the auto-derived nutrition pulls on the whole modlist's food graph) | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the diet system is a standing consumption sink — players must continuously eat diverse foods to maintain buffs, so demand never zeroes; this is exactly M-26 (consumption sink, demand-renewal edge). The production specialization (cook/farmer) follows organically. Via: config tuning (no new recipe — the mechanic is auto-derived).
- from: appleseed diet variety requirement | via: config/tuning | to: economy (cross-route) | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: M-29 is a recipe-level cross-route dependency (one production route's recipe requiring an input from another route). ApppleSeed has no recipe types; the diet demand is an ambient pull, not a crafted dependency between two routes. Re-frames correctly as M-26 (accepted above), not M-29.
- from: appleseed diet-demand | via: no method | to: magic | motif: no-motif | verdict: REJECT | reason: no coherent magic mechanic maps to nutrient groups; forced pairing.
- REWORK: the dossier lists M-09 as a candidate ("high-nutrient foods as sellable trade goods via numismatics price/sell"). M-09 is retired (#163/#240) — bare sell-link is the ambient endpoint, not a weave. The correct frame is M-26 (accepted). Remove the M-09 framing from the dossier on next dossier update.

## occultengineering   [anchors: create, magic (2)]

- from: occultengineering:sterling_silver (c:ingots/sterling_silver) | via: create:pressing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: sterling silver is the scarce occult alloy refined through Create; a mint-specialist who has bridged both Create and Occultism presses the only silver coins in the region — minting silver is its own specialization.
- from: occultengineering:phlogiport (wireless item teleportation) | via: logistics tie | to: aeronautics | motif: M-29 | power: endgame | tone: ok | verdict: REJECT | reason: M-29 requires a recipe-level cross-route dependency. Phlogiport is a logistics block, not a material consumed by an aeronautics recipe. The connection is thematic (logistics ↔ logistics) but not a method-routing. No current aeronautics recipe accepts a phlogiport as input. No-motif for a wiring-level tie without a recipe hook.
- from: occultengineering:spirit_solution (reserved occult intermediate) | via: create:mixing (already inbound) | to: create | motif: M-19 | power: mid | tone: ok | verdict: REJECT | reason: spirit_solution is already the reserved M-11 reagent produced through Create machinery. Proposing M-19 (haunting seam) on top of an existing established connection would double-count an already-anchored flow. Connections already sound.
- OK — connections sound (Create + magic, both strong; the M-08 sterling-silver mint adds economy as a meaningful third anchor candidate).

## dataanchor   [anchors: support/library (1)]

- LEAVE — genuine zero-content developer library (0 blocks, 0 items, 0 recipe types, no loot). Data-attachment API plumbing; no gameplay surface to weave through any method.

## ferritecore   [anchors: support/perf (1)]

- LEAVE — genuine zero-content memory-optimization library (0 blocks, 0 items, 0 recipe types, no loot). Pure runtime heap optimization; no gameplay surface to weave through any method.

## crash_assistant   [anchors: support/client-utility (1)]

- LEAVE — genuine zero-content client diagnostic utility (0 blocks, 0 items, 0 recipe types, no loot). Crash-log GUI; no gameplay surface to weave through any method.

## createnuclear   [anchors: create (1)]

- from: createnuclear:uranium (c:ingots/uranium / processed) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: refined uranium is the rarest regional ore in the pack (GTMOGS-regional); only the specialist who has built the Create refining chain (and radiation gear) can press reactor-grade coin — scarcity → specialization → player-minted currency.
- from: createnuclear:steel_ingot (c:ingots/steel) | via: create:pressing (steel sheet) → aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the natural structural material for airframes — a nuclear-refining town supplying steel sheet to the aeronautics builder is the economy's physical-logistics arm getting its material from the tech spine.
- from: createnuclear reactor SU output | via: create rotational → createaddition:charging | to: economy (aeronautics) | motif: M-13 | power: endgame | tone: ok | verdict: REJECT | reason: M-13 is for fuel→propulsion (refined liquid fuel into an engine intake). SU is Create's kinetic shaft power, not a propulsion fuel in the Aeronautics sense. The reactor feeds the Create machinery complex, not an engine fuel tank directly. Mechanically wrong motif.
- from: createnuclear:lead_ingot (c:ingots/lead — radiation shielding) | via: create:pressing → aeronautics hull/armored-hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: plausible (armored airship hull could use lead lining) but lead-shielding in airship recipes is not established in aeronautics' current recipe set and would be speculative. Steel plate (accepted above) is the primary structural story; adding lead on top is stacking without confirmed aeronautics recipe hooks. Would need a confirmed aeronautics lead-armor recipe before this is sound.
- from: createnuclear:anti_radiation gear | via: create:mechanical_crafting (existing inbound) | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: working near the reactor or in uranium-rich regions creates a standing hazard that consumes the anti-rad gear over time — the consumption sink that keeps the nuclear refiner dependent on a materials supply chain. (Radiation is a pressure element feeding demand for protective gear.)
- from: createnuclear uranium / steel ores | via: GTMOGS regional ore-gen | to: scarcity/economy | motif: M-30 | power: endgame | tone: ok | verdict: ACCEPT | hook: uranium and steel (if region-locked by ore-gen) create a nuclear-energy region that other server communities must trade with; the reactor builder can't move the ore.
- REWORK: dossier candidate lists M-09 ("high-value trade good / sellable") for uranium/steel — M-09 is retired. The correct expression is M-08 (player-minted from processed scarcity, accepted above) + M-30 (regional lock, accepted above). Also, the "survival via radiation/hazmat" candidate is marked WEAK in the dossier but it has a real M-26 hook (anti-rad gear consumption as demand renewal) — that WEAK label should be revised on next dossier pass.

## biolith   [anchors: support/library (1)]

- LEAVE — genuine zero-content worldgen API library (0 blocks, 0 items, 0 recipe types, no loot, no biome-modifiers of its own). Biome-placement framework dependency; no gameplay surface to weave through any method.

== CHUNK COMPLETE ==
