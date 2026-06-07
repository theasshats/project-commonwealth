# Phase 2 candidates — chunk-17

## letsdocompat   [anchors: survival (1)]
- LEAVE — pure recipe/tag glue library for the Let's Do / Farm&Charm / Farmer's Delight food cluster; registers no items/blocks, no methods to route through, no loot. Its existence already performs M-12-style cross-mod food-chain unification — that is the whole mod. Forcing a 2nd anchor would mean re-weaving the bridged mods' materials, which is their business, not this shim's.

## mffs   [anchors: Create, survival (2)]
REWORK: OK — connections sound. The authored weave (focus_matrix via M-05, projector/interdiction_matrix via M-06 sequenced-assembly chains, TFMG steel mid-tier) is the gold-standard Create-native gating pattern. Existing anchors are Create + survival (PvE base defense). No rework needed.

- from: mffs force-field projection (utility) | via: no-method | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: a field-specialist player sells field-setup and tuning as a service to colony/base builders who lack the Create infrastructure to source Fortron components themselves — labor, not goods
- from: mffs:biometric_identifier / access cards | via: loot-seed (structure loot) | to: survival | motif: no-motif | verdict: REJECT | reason: no-motif — access cards found in loot doesn't anchor a system, it's just a minor find; not coherent enough to accept
- from: mffs loot=yes | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: MFFS drops no boss/combat loot — loot=yes likely means the guide book spawns; there's no combat-supply loop here; M-34 doesn't fit a base-defense utility mod's loot table

## createshufflefilter   [anchors: Create (1)]
- LEAVE — two filter items that extend Create Deployer behavior with randomized placement; no material flows through it, no items of its own to route, no loot. It's a builder QoL tool; every potential "2nd anchor" would require forcing the filter items into a recipe web they don't belong in. Genuinely zero content surface beyond Create utility.

## create_ironworks   [anchors: Create (1)]
- from: c:ingots/tin (scarce regional ore, 3 biome-modifiers) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: tin is region-locked by biome-modifier placement; a Create-ore-doubling → alloy → mint chain makes tin the coin-spine metal for the mid-tech economy tier, pushing cross-region trade to access it
- from: c:ingots/steel (Create-processed) | via: aeronautics hull/structural-block recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plate is the obvious structural alloy for mid-tier airframes — it has the right industrial register and Create_Ironworks is already deeply Create-native, so requiring it for hull construction is coherent and adds fabrication depth
- from: c:ingots/bronze | via: create_ironworks tool/armor tier | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: bronze tools being worn/consumed is the ambient use of any tool set — not a weave, just the baseline. M-26 consumption sink requires a *deliberate spending* mechanic (fuel, upkeep, food), not tool durability that every mod shares
- from: c:plates/steel | via: aeronautics control-surface/drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: steel plates feed aeronautics propulsion/control surfaces (rudders, ailerons) alongside M-23 hull framing — the drivetrain companion to the structural seam; Create_Ironworks already has plates in its tag vocabulary so the method pull is direct
- from: c:ingots/tin (regional) | via: GTMOGS ore-gen region-lock | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: tin's 3 biome-modifiers make it region-bound; whoever mines that biome controls the tin supply → coin stock and bronze alloy; anchors tin to the scarcity foundation and forces specialization without extra recipes
REWORK: no existing connections to rework — this is a 1-anchor mod. The Create anchor is solid (whole mod routes through create:mixing/crushing/pressing/etc.); the missing 2nd anchor is economy/aeronautics, addressed above.

## moblassos   [anchors: survival (1)]
- from: moblassos:emerald_lasso (villager transport) | via: colony setup (no recipe) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: the lasso transports villagers to MineColonies, which is thematically plausible, but the connection is a behavior/utility link with no method to route through — M-28 is a colony-production route motif (a basic is cheaper/faster via colony, or a part is colony-locked); "carries villagers" doesn't compose that motif, it's just incidental QoL
- from: moblassos:hostile_lasso (capture <50% HP hostile) | via: loot-seed / combat supply | to: survival | motif: M-34 | power: mid | tone: ok | verdict: REJECT | reason: a lasso that captures weakened monsters could feed a combat-supply chain but it ships no loot tables and the "supply" is the mob itself, not a tradeable drop — M-34 needs a boss/danger output that gets traded; this is transport, not a supply chain
- LEAVE — item-utility mod with no material flows; all its items are mob-transport containers. No method in the palette can route through a lasso item meaningfully. The aeronautics "carry livestock aboard a ship" synergy is real in play but not a Phase-3 authoring target (no method, no recipe). One anchor is the honest assessment.

## createfisheryindustry   [anchors: Create, survival (2)]
REWORK: The dossier's only economy candidate is M-09 (luxury good → coin) which is **retired**. Strip it; re-examine.

- from: createfisheryindustry:fish_skin (mechanical peeler output) | via: create:pressing / tanning → aeronautics upholstery/soft-goods recipe | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: ACCEPT | hook: fish_skin is an industrial leather substitute; routing it as a soft-goods material for airship interior/balloon fabric gives the fishery a logistics-arm customer and makes fish_skin a traded commodity, not just a food byproduct
- from: seafood (chowder/steaks/soups) | via: farmersdelight:cooking (already wired) → colony cook hut | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: automated seafood output (bait trap → peeler → cook) feeds MineColonies kitchen requests, making a fishing specialist the colony food supplier — cheaper/faster colony feeding routes through the industrial fishery
- from: createfisheryindustry bait_trap output (fish/critters) | via: ars_nouveau:vitalic or agronomic sourcelink | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: sourcelinks consume mob-death/baby events, not fish items directly; routing raw fish into Ars Source requires an imbuement or different method, and fish aren't thematically an arcane reagent — tone clash for imbuement; reject
- from: createfisheryindustry:lobster/mussel (rare trap outputs) | via: occultism:spirit_fire or ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: crustaceans as occult reagents feel strained — the M-11 motif is for drops that carry a thematic soul/spirit charge (ender_residue, void worm parts), not seafood; tone clash; reject
- from: createfisheryindustry:fish_skin bulk production | via: aeronautics logistics transport | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: fish_skin produced at coastal/river fishery rigs needs aeronautics shipping to inland tailors and colony builders — a bulk industrial material that makes the logistics arm earn its keep




