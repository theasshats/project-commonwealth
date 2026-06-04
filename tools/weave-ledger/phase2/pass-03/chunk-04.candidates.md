# Phase 2 candidates — chunk-04

## dungeons-and-taverns-v4.4.4   [anchors: survival (exploration/structures) (1)]
- LEAVE — no material outputs to route; the mod is a structure datapack that seeds loot via vanilla trial keys. Any weave would require editing its loot tables (an authoring step), not a method-routing. The in-tavern cartographer runs vanilla emerald trades, not Numismatics. No coherent 2nd pillar available via method-pull.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:netherite (backpack variant) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the netherite-tier pack needs Create-assembled chassis components — players already in Create late-game expect their best backpack to pass through the factory line
- from: travelersbackpack:blank_upgrade / upgrade modules | via: create:item_application | to: Create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: upgrade slots are snapped onto a backpack chassis exactly as a deploy-application; one light step, scales with upgrade tier rather than creating a deep chain
- from: travelersbackpack tank + hose as portable fluid buffer | via: aeronautics logistics (passive) | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the fluid-tank tie to Aeronautics is purely thematic (carry fuel on ships); there is no recipe-type or method to route through; would need a new motif or remain a soft narrative connection only

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul dust from the eldritch Otherside is exactly the raw spirit matter Occultism's spirit-fire transmutes — players read the pairing instantly
- from: deeperdarker:soul_crystal | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: crystallized soul energy from the dark dimension imbues into Ars source reagents — the Otherside becomes a meaningful magic input layer, not a dead-end
- from: deeperdarker:heart_of_the_deep (Warden drop) | via: the gated machine's own recipe (boss drop as gate) | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's Heart is the key that unlocks the deepest Create machine tier — surviving the deep dark earns your tech progress
- from: deeperdarker gloomslate / sculk_stone block sets | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco stone crushes back to gravel + XP nugget; familiar Create recycle loop extended to the new block sets
- from: deeperdarker:warden_carapace / sculk_bone (Otherside mob drops) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: secondary to the magic routing and the danger/scarcity argument is weak for a coin sink — soul materials are better spent as irreplaceable magic reagents (M-11/M-10) than as generic coin fodder; don't dilute by also routing to economy

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies (high-effort smokeleaf products) | via: numismatics sell / price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the strain farm produces sellable effect-bearing goods — refined extract is the artisan luxury product a player brings to market; dossier confirms the dealer/stoner village trade loop already proves the sell-loop concept
- from: smokeleafindustries FE output / generator | via: createaddition:charging or alternator | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: the smokeleaf generator produces FE; the Create Addition alternator/motor is exactly the FE↔SU bridge — the grow-op powers a Create line or vice-versa, threading the farm into the Create spine without retheming either mod
- from: raw hemp / buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: smokeleaf already has its own grinder chain (manual_grinder → grinder → extractor); routing raw hemp through Create milling is redundant and bypasses the mod's own progression — depth doesn't scale upward here, it flat-duplicates an existing path; reject to keep the mod's own processing chain intact

## createshufflefilter   [anchors: Create (1)]
- LEAVE — a single-item Create QoL utility (two filter variants); no outputs, no materials to route, no method join. No coherent 2nd pillar; forcing one would be a defect. Dossier explicitly recommends leave.

## midnightthoughts   [anchors: survival (rest/sleep) (1)]
- LEAVE — purely a status-effect / sleep-overlay system; ships no items or tags. No material join key exists for any method-routing. No coherent 2nd pillar available.

## sereneseasons   [anchors: survival (1)]
- from: sereneseasons:season_sensor (redstone output keyed to season) | via: Create redstone logic (gearshifts, contraptions) | to: Create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: wire the sensor into a Create gearshift so automated farms change crops each season — the world's calendar drives the factory; season_sensor is already an output the dossier flags as the join key for Create
- from: out-of-season produce (scarce during off-season months) | via: numismatics sell / price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the seasonal scarcity argument is real but too diffuse — it's not a specific material being priced, just "things are rarer sometimes"; a proper weave needs a named sellable item, not an ambient calendar effect; WEAK per dossier; reject — let M-16 carry the season pillar

## create_new_age   [anchors: Create (1)]
- from: create_new_age:energising method — foreign magic items routed through the Energiser | via: create_new_age:energising | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: magic tools / focuses require an electrical charge step in the Energiser before they reach full power — the electricity tier feeds the magic pillar; dossier labels this the cleanest weave
- from: create_new_age:thorium_ore (scarce regional biome-modifier ore) | via: create:crushing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is a rare regional ore processed by Create before reaching the reactor — the ore-to-coin arc mirrors the pack's other scarce metals and earns the economy pillar; the biome-modifier rarity is the scarcity lever
- from: create_new_age:corium (reactor waste) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — nuclear reactor waste as a magic reagent is thematically incoherent in this pack's magic web (soul/arcane, not radioactive); nuclear-industrial inputs belong in the tech/Create spine, not infused into Ars source reagents
- from: create_new_age Energiser gating Create-Aeronautics engine components | via: create_new_age:energising | to: aeronautics | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: already covered more cleanly by M-17 (magic) — adding a second ACCEPT for aeronautics here would need a named aeronautics keystone item, which isn't in the dossier; flag as a follow-up if an Aeronautics-specific Energiser gate gets scoped

