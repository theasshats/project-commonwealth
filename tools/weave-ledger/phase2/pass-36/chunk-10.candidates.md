# Phase 2 candidates — chunk-10

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag_* (16 dyed variants) | via: recipe (crafting) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no second system to cross into — sleeping bags are pure travel QoL; any link to Create/economy/magic would be forced noise with no thematic grip
- LEAVE — Sleeping bags and hammocks are vanilla-crafted QoL items (wool+string) with no material join surface; the mod's only anchor is survival-flavor support and there is no coherent second system to route through. Forced edges would be defects, not weaves.

## drones   [anchors: aeronautics (1)]

- from: drones:ion_thruster | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: an ion thruster is obviously an advanced fabrication — it demands precision assembly from Create's sequencer, making the best drones a real Create build milestone rather than a crafting-table shortcut
- from: drones:iron_rotor | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: mid-tier rotors made on the mechanical crafter tie drone flight progression to the Create spine — the step between wood-rotor toy and ion-thruster marvel
- from: drones:controller | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the assembly controller is the "heart" of drone building; requiring precision-crafted brass internals (via mechanical crafting) anchors the whole drone system in Create's progression
- from: drones:pocket_drone (assembled drill drone) | via: config tie / economy | to: economy | motif: M-33 | power: endgame | tone: ok | verdict: ACCEPT | hook: a drone specialist assembles custom pocket drones-for-hire — crafting a drill or beacon-attack drone to order for players who can't afford the full Create tier themselves (service labor, not a bare sell)
- from: drones:wood_rotor | via: recipe (crafting) | to: create | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: wood rotors are intentionally entry-level; gating them behind a Create method would violate the "never gate basic/everyday component behind complex recipe" guardrail — they should stay vanilla-craftable
- REWORK: the dossier's 2nd-anchor candidate M-09 ("sellable crafted good → Numismatics") is now a retired motif — REJECT that framing; the M-33 service-labor reading above is the right economy link for a custom-assembled product

## ferritecore   [anchors: support/perf (1)]

- LEAVE — Pure runtime memory-optimization library; zero blocks, zero items, no gameplay surface, no loot. Genuine zero-content support role; LEAVE is correct with no forced edge possible.

## immersivearmorhud   [anchors: support/client-UI (1)]

- LEAVE — Client-side HUD overlay only; no items, no methods, no material surface. Zero-content support role; nothing to weave.

## azurelib   [anchors: support/library (1)]

- LEAVE — Animation/rendering API library (GeckoLib fork); one internal utility block (azurelib:lightblock) with no recipe or gameplay role. Genuine zero-content library — the weaving happens in dependent mods (Cataclysm, etc.), not here.

## aileron   [anchors: aeronautics (1)]

- from: aileron Elytra enchantments (loot=yes) | via: loot-seed | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Aileron's Elytra enchantments as obtainable rewards through Ars Nouveau's enchanting apparatus makes flight mastery part of the magic progression — arcane flight upgrades you can't just grind at a table
- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: applying a flight-stabilization or momentum enchantment through the Enchanting Apparatus ties Ars magic into personal aviation, giving magic players a distinct flight-upgrade path; contingent on Aileron's enchants being datapack-accessible as enchantment targets
- from: aileron Elytra enchantments | via: create:deploying + M-20 | to: create | motif: M-20 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — a Create deployer physically stamping a new flight-physics override onto an Elytra reads as incoherent; flight-physics enchants belong in a magic context, not an industrial press

## geckolib   [anchors: support/library (1)]

- LEAVE — Pure animation/rendering engine; zero blocks, zero items, no loot. Genuine zero-content library dependency; the weaving happens in the many mods that animate on it (Ars Nouveau, Cataclysm, Alex's Mobs), not in geckolib itself.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]

- LEAVE — Cosmetic combat-particle system only; the 184 registered "items" are particle-effect holders (minecraft:blood1..blood15 etc.), not usable items or materials. No method exists to route anything through; zero gameplay surface. Genuine zero-content cosmetic mod; LEAVE is correct.

## sable   [anchors: support/library (1)]

- LEAVE — Physics engine library (Rapier sub-levels backend) for Create Aeronautics; zero blocks, zero items, no loot, no gameplay surface. All weaving happens in Aeronautics and dependent mods that build on this platform. Genuine zero-content library; LEAVE is correct.

## illagerinvasion   [anchors: survival (1)]

- from: illagerinvasion:hallowed_gem (Invoker boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Invoker's hallowed gem is literally "hallowed" — feeding it into the Enchanting Apparatus or imbuement ritual as a rare arcane catalyst makes the Invoker the gatekeeper to a tier of magic no other boss provides
- from: illagerinvasion:illusionary_dust (Illusioner drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust from the Illusioner transmutes through spirit-fire into an occult essence — the trickster mob's remains fuel the spirit world, a thematically coherent mob→occult bridge
- from: illagerinvasion:platinum_chunk (drop) | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum chunk drops feed directly into the Create ore-processing chain — crush to powder, smelt to ingot — weaving the Illager loot into the metal economy as a mid-tier ore equivalent
- from: illagerinvasion:hallowed_gem | via: illagerinvasion:imbuing_table (native method) | to: magic | motif: M-05 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Imbuing Table itself already gates over-cap enchantments behind a Hallowed Gem; reinforcing that by making the gem also a gate for Ars/Iron's high-tier recipes through its own machine (native-method gating) deepens the Invoker boss as the key to the enchantment economy
- from: illagerinvasion:platinum_chunk | via: occultism:crystallize | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: platinum is a metal material, not a spirit/organic reagent — crystallizing a metal chunk through Occultism is a tone mismatch; the Create ore-doubling path (M-03) is the coherent one for this material
- from: illagerinvasion:lost_candle | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: a candle "lost" in battle passes through Create's soul-fire haunting to become a spirit reagent — the battlefield relic transfigured into occult fuel; coherent flavor bridging combat loot into the soul/magic chain
- REWORK: the dossier's economy candidate framing (platinum_chunk → Numismatics / M-08 player-minted currency) is worth keeping as a supporting note but is secondary — the primary weave is the magic/Create chain; the economy contribution emerges from the M-34 pattern where boss drops (combat specialist role) are traded to non-combat players, not from a direct coin-mint step; flag as M-34 combat-route supply rather than bare M-08

## entity_texture_features   [anchors: support/client-rendering (1)]

- LEAVE — Client texture-feature engine (OptiFine random/emissive textures); zero items, zero blocks, no loot. Pure rendering dependency for ETF-aware resourcepacks. Genuine zero-content support role.

## formations   [anchors: survival (1)]

- from: formations structures (altars, ruins, cabins) | via: loot-seed | to: survival/economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: seeding formation-structure chests with reagents, coin components, or magic materials makes scattered ruins a tangible survival reward — the explorer specialist finds things the crafter needs, feeding the combat-route supply loop
- from: formations:template_editor (the authoring tool item) | via: recipe | to: create | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: the template_editor is a dev/author-facing world-editing tool, not a player-facing crafting component; gating or routing it through Create has no player-legible meaning
- from: formations stone altar structures | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding formations' altar ruins with scattered magic reagents (source gems, essence shards) makes overworld exploration the supplier for early magic — organic loot→magic pipeline rather than a purely crafted progression
- REWORK: dossier says "none — leave" but the briefing explicitly warns against LEAVEing a loot-bearing structure mod; formations has loot=no per the jar digest but its structure set generates with placed loot-block equivalents (chest + barrel placements); if its structures carry any placed chest blocks the loot-seed route applies. However jar digest shows loot=no, meaning it registers no loot tables of its own — the LEAVE is defensible if structures genuinely spawn empty (vanilla-palette blocks only, no loot chests). Accept the loot-seed candidates above as conditional on confirming the structure templates include chests; if they don't, revert to LEAVE.

## fishingreal   [anchors: survival (1)]

- from: fishingreal (behavior — catches spawn live fish entities) | via: config tie | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: purely a behavior layer on top of fishing; it changes the output of catches into live mobs but adds no items and no material for any method to consume — the weaving surface belongs to the fishing-content mods (createfisheryindustry, farmersdelight) that sit beneath it
- LEAVE — A behavior-only fishing tweak (item catch → live entity spawn); no items registered, no loot, no method surface. The weaving happens in the content mods it modifies (createfisheryindustry, etc.), not here.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

- from: dungeons-and-taverns structures (100+ structures: taverns, towers, illager hideouts, trial chambers) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding Dungeons & Taverns loot tables with boss-route reagents or combat-supply components makes the dungeon-crawler role a meaningful supplier — the combat specialist who clears illager hideouts brings back materials the crafter can't self-supply
- from: dungeons-and-taverns trial vault loot (expanded Trial Chambers, trial_key gated) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding exclusive magic reagents into the expanded trial vaults (behind trial_key) makes dungeon completion the gateway to a tier of magic locked behind genuine danger — exploration as a production route feeding the magic system
- from: dungeons-and-taverns tavern cartographer trade | via: loot-seed | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: ACCEPT | hook: the tavern's cartographer sells structure maps — that's a service (information as a traded good): seeding these maps with coordinates of scarcity-relevant resource structures (ore regions, colony sites) makes the tavern cartographer a genuine economy service node, not just a vanilla flavor piece
- from: dungeons-and-taverns tavern cartographer | via: villager trade | to: economy | motif: M-37 | power: mid | tone: ok | verdict: REJECT | reason: the cartographer sells information (maps) but the progression unlock here would be route-knowledge, not a recipe gate — M-37 is research gating a recipe, not map-buying; no clean motif fits; the M-33 service reading above is the correct framing
- REWORK: dossier flags M-09 as its only economy candidate then correctly dismisses it; the loot-seed + M-34/M-02/M-33 candidates above are the proper routes — all three accepted above, none requiring M-09 or M-14/M-21

## doubledoors   [anchors: support/QoL (1)]

- LEAVE — Behavioral door-interaction convenience mod; zero items, zero blocks, no loot. Pure interaction-behavior support role with no material or method surface. Genuine zero-content QoL mod.

## xaeroworldmap   [anchors: support/navigation (1)]

- LEAVE — Client-side world-map UI; zero items, zero blocks, no loot, no gameplay surface. Navigation support tool; the weaving opportunity is in the exploration/survival mods it helps navigate (dungeons, biomes, structures), not in xaeroworldmap itself.

## bcc   [anchors: support/modpack-ops (1)]

- LEAVE — Version-handshake utility; zero items, zero blocks, no loot. Genuine zero-content server-ops support mod with no game surface to route through.

## createfisheryindustry   [anchors: create, survival (2)]

OK — connections sound. The Create spine anchor (kinetic traps + mechanical peeler) and the survival anchor (diving gear + food output) are both well-grounded and coherent.

- from: createfisheryindustry:fish_skin | via: farmersdelight:cutting / extradelight:drying_rack | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: fish skin is a legitimate leather substitute — processed through drying or cutting into a stable material that aged maritime goods (satchels, harnesses) are tanned from, giving the fisher-specialist a matured/processed good to trade; the aging step (rack drying) is a value-add that makes scale production necessary
- from: createfisheryindustry:seafood_chowder / cooked steaks / mussel_soup | via: farmersdelight:cooking | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: high-nutrition seafood is a perishable consumption sink for the diet/pressure loop — chowder and cooked seafood feed the five-group nutrition demand (Protein group), drawing continuous demand from any player maintaining diet bonuses
- from: createfisheryindustry:harpoon_gun (pneumatic harpoon, Create backtank-powered) | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: the pneumatic harpoon gun runs off a Create backtank — it's already a pneumatic/Create weapon; gating a ship-mounted or boarding-action harpoon variant through sequenced assembly ties combat-maritime gear into the aeronautics build ladder; a ship that can fire harpoons is a natural aeronautics milestone
- from: createfisheryindustry:copper_diving_leggings | via: create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: diving leggings are survival/underwater gear, not a propulsion or control component — forcing them into the aeronautics drivetrain motif is a tone stretch; they belong in the survival anchor as dive exploration gear, not in aeronautics
- REWORK: dossier's only 2nd-anchor candidate is M-09 luxury good→coin (retired) — REJECT; the M-26 consumption, M-35 maturation, and M-24 aeronautics-adjacent hook above are the right economy/aeronautics links

## kobolds   [anchors: economy, survival (2)]

OK — connections sound. The economy anchor (emerald-based trading civilization) and survival anchor (underground structure / combat encounter layer) are both well-grounded.

- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold skulls transmuted in spirit-fire become an occult essence — the tiny lizard-folk's remains feed the spirit world; coherent flavor (skull → spiritual residue) and a genuine mob-drop reagent sink into the magic pillar
- from: kobolds Prospector enchantment (sold by kobold enchanter) | via: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: kobold enchanters provide Prospector (mining luck) as a service trade — players visit kobold dens specifically to get mining-enhancing enchants, making the kobold civilization a specialist service node in the economy; this is a "knowledge-as-a-service" trade, not an NPC coin faucet (the player brings emeralds, gets enchanting labor)
- from: kobolds redstone goods (engineer kobold trades) | via: recipe | to: create | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: kobold redstone trades produce vanilla redstone components (no unique items); tying this into Create as a cross-route dependency is too thin — there's no unique kobold item that can serve as a Create recipe gate; the trade is just emerald→vanilla item and doesn't advance the loop
- from: kobolds pirate den (jungle pirate kobolds, captain trades gold tools) | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding pirate-den loot with maritime salvage components (rope, rigging, hull-patch materials) makes pirate kobold clearances a supply mission feeding the aeronautics logistics arm — combat specialists raid dens, trade the salvage to ship-builders



