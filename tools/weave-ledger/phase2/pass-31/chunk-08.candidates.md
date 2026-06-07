# Phase 2 candidates — chunk-08

## rechiseledcreate   [anchors: create, support/decoration (2)]

- OK — connections sound. The Mechanical Chisel is a genuine Create kinetic block (automatable chiseling), so the Create anchor is earned. Decoration is a sanctioned second. No forced new edge needed.

---

## createthreadedtrains   [anchors: support/performance (1)]

- LEAVE — pure server-side performance mod; no items, no recipes, no content surface. Indirectly enables the aeronautics/logistics pillar's heavy train networks, but there is nothing to route material through.

---

## extradelight   [anchors: survival, create (2)]

- from: grain crops / coffee / citrus (c:tags) | via: create:milling + create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the grain mill and press sit upstream of the kitchen — flour, oils, and ground coffee run through Create iron before ever reaching ExtraDelight's oven, making the bakery a genuine Create downstream
- from: feast / high-tier dishes (e.g. baked alaska, feasts) | via: extradelight:feast → minecolonies colony provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a colony tavern or inn demands feast-tier food from the kitchen specialist; the feast recipe's depth is the gate, not an NPC sale
- from: extradelight:evaporator output (salts, syrups, reduced fluids) | via: extradelight:evaporator → create:mixing | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: reduced-fluid byproducts (salt, concentrated juice) become inputs to Create mixing for further processing — industrial circularity between kitchen and factory
- from: liquor/spirit outputs (apple cider, jams) | via: sell/mint for coin | to: economy | motif: bare sell link | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "it's a luxury good, sell it" is the ambient endpoint — not a weave; re-express as M-28 colony demand if a colony explicitly requires it
- REWORK: dossier lists M-09 as a candidate — that motif is retired; replace with M-28 colony provisioning or drop.

---

## simplehats   [anchors: support (1)]

- from: rare hats (endgame grab-bag tier) | via: loot-seed into boss loot tables | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: killing a Cataclysm boss or dungeon mob rewards a rare cosmetic hat — combat-route supply gives the combat specialist a bonus collectible that non-combat players want and may trade for
- from: hat scraps / duplicate hats | via: bare sell link | to: economy | motif: bare sell link | power: everyday | tone: ok | verdict: REJECT | reason: "scraps are worth coin" is ambient endpoint; no demand gate; M-09 retired
- from: rare hats | via: minecolonies research unlock | to: economy | motif: M-37 | power: mid | tone: clash | verdict: REJECT | reason: knowledge-gate motif applies to capability/recipes, not cosmetics; cosmetic hats behind research is a tone clash and would feel punitive
- REWORK: dossier candidate M-09 — retired; the only viable route is loot-seed (M-34 via boss drops) which is accepted above.

---

## fusion   [anchors: support/library (1)]

- LEAVE — client-side rendering library; zero items, zero recipes, zero content surface. No material to route. Texture backend for resource packs only.

---

## create_sa   [anchors: create, aeronautics (2)]

- from: blazing tools / blaze-line gear | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the blazing pickaxe is fire-attuned by nature — imbuement with a fire source gem gives it an Ars enchant tier, threading the blaze flamethrower line into the magic web without forcing all Create gear through magic
- from: brass drone modules | via: create:sequenced_assembly (existing) → aeronautics logistics | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: drones are personal flight/logistics units; the sequenced-assembly gate makes deploying a drone fleet genuinely costly and ties personal aerial mobility to the aeronautics supply chain
- from: andesite/brass armor sets | via: sell/trade | to: economy | motif: bare sell link | power: mid | tone: ok | verdict: REJECT | reason: gear is ambient economy endpoint; no demand gate; needs a colony/boss cross-route to count
- REWORK: dossier notes "blazing tools could route blaze through magic infusion, but Create+aeronautics is sufficient — leave." Disagree: the M-10 blaze link is a real weave (not forced) and earns a magic anchor — propose it above.
- OK — the core Create + aeronautics anchors are sound.

---

## smartbrainlib   [anchors: support/library (1)]

- LEAVE — pure developer AI framework; zero items, zero recipes, zero player-facing content. Dependency pulled automatically by mob mods.

---

## cataclysm   [anchors: survival (1)]

- from: cataclysm:witherite_ingot / cataclysm:ignitium_ingot / cataclysm:ancient_metal_ingot | via: create:crushing → create:pressing (sheets) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-killed ingots feed the Create fabrication chain — Witherite sheets are the material gate for a high-tier sequenced-assembly machine; you can't build it without first defeating a dungeon boss
- from: cataclysm:cursium_ingot / cataclysm:void_core | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Void Core and Cursium are inherently occult-flavored — spirit-fire transmutes them into a high-tier Occultism reagent, bridging the combat dungeon into the magic web
- from: cataclysm:ancient_metal_ingot | via: create:mechanical_crafting → create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Ancient Metal is the pack's deepest boss material; a sequenced-assembly chain using it as a keystone makes top-tier Create tech a multi-session project requiring a raid group
- from: boss drops (all) | via: sell/mint for coin | to: economy | motif: bare sell link | power: endgame | tone: ok | verdict: REJECT | reason: "boss drop is valuable, sell it" is the ambient endpoint; real economy link is M-34 (combat specialist trades drops to production players) which is emergent, not a weave to author
- from: cataclysm dungeon loot tables | via: loot-seed (Numismatics coin as rare chest reward) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: deep dungeon chests contain a few high-denomination coins as rare drops — minting isn't needed, but the player-settlement medium appearing in dangerous places gives coin regional scarcity flavor without an NPC faucet
- REWORK: dossier candidate M-08 framed as "boss-material ingots or trophy drops as high-value sellable scarcity" — that's M-09 framing (retired); reframe as loot-seed into dungeon chest (accepted above) which is M-08 proper.

---

## openpartiesandclaims   [anchors: support/protection (1)]

- LEAVE — zero items, zero recipes, zero content surface. Server protection + social framework only; underpins co-op territory premise but nothing to route material through.

---

## companions   [anchors: survival (1)]

- from: companions:crystallized_blood / companions:soul_gem | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Soul Furnace's crystallized blood is already a soul-conversion output — spirit_fire transmutes it into an Occultism reagent, making the companions' gothic alchemy a feeder for the broader magic web
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold is a one-of-a-kind boss drop from the Sacred Pontiff; imbuement converts it into a high-tier source component, giving the boss fight a magic-progression payoff beyond gear
- from: companions:copper_coin / companions:nether_coin / companions:end_coin | via: companions internal coin system | to: economy | motif: bare sell link | power: everyday | tone: clash | verdict: REJECT | reason: companions' internal coins are NOT Numismatics; bridging two coin systems creates confusing dual economies; these coins should remain self-contained within companions' altar loop, not piped into the player economy
- from: companions:voltaic_pillar / tesla coil deco blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: WEAK — the deco-recycles link is technically valid (M-04) but the tesla deco set is small and the Create anchor it buys is thin; the magic links above are stronger second anchors; don't force a Create edge when magic is the right home
- REWORK: dossier M-09 candidate ("Relic Gold / soul gems as sellable trade goods") — M-09 retired; Relic Gold is better as M-02 magic reagent (accepted above). The internal coin bridge is also rejected above.

---

## copperagebackport   [anchors: survival (1)]

- from: copper tool/armor/deco blocks (oxidized variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the whole copper deco and tool set crushes back to copper nuggets + xp nugget — vanilla copper's oxidation palette and new chests/lanterns/bars plug into Create's material recycling spine
- from: Copper Golem (chest-to-chest item ferry) | via: create item-transport as complementary low-tech tier | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the Copper Golem's logistics role overlaps Create's conveyor/funnel system; no motif covers "low-tech logistics handoff"; M-31 is for bulk aeronautics, not a golem sorter; no-motif → reject-for-review

---

## mcwstairs   [anchors: support/decoration (1)]

- from: stone/brick/blackstone stair/railing family (Macaw's variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the stair and railing variants crush back lossy to stone/gravel + xp nugget — the whole architectural palette folds into Create's material loop, same as vanilla stairs
- REWORK: dossier notes this as WEAK and suggests "only weave as part of a wholesale deco-family pass." The weakness is fair — M-04 is the lightest of connections — but it is coherent and not forced. Accept at low priority; flag for batch treatment alongside other Macaw/MCW mods.

---

## alcohol_industry   [anchors: create, survival (2)]

- from: finished liquors (beer, vodka, whiskey, tequila) | via: extradelight:vat or minecolonies tavern provisioning | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies tavern explicitly requires spirits for its residents' upkeep — the Create distillery becomes the colony's supplier; demand is real and gated by the colony research/hut, not an NPC sale
- from: alcohol_base fluid (fermentable crops input) | via: create:milling → grain/sugar → create:mixing → base | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crop → Create mill → fermentable extract → Create mixer → alcohol base: the chain already exists inbound; confirming the Create anchor is solid and the processing-chain pull is the right motif label
- from: finished spirits | via: maturation in alcohol_boiler over time | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: if the boiler is treated as an aging step (it is already a timed/heated process), spirits that spend longer in the boiler become premium — a time-value aging mechanic that rewards a dedicated distillery specialist
- from: spirits | via: bare sell/luxury endpoint | to: economy | motif: bare sell link | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "spirits sell for coin" is ambient endpoint; use M-28 colony demand instead (accepted above)
- REWORK: dossier candidate M-09 for economy — retired; replaced with M-28 colony demand above.

---

## moreculling   [anchors: support/performance (1)]

- LEAVE — client-side render culling optimization (depends on Sodium); zero items, zero recipes, no content surface. Pure performance layer.

---

## spawn   [anchors: survival (1)]

- from: spawn:crab / crab_meat + barnacle drops | via: extradelight:oven + farmersdelight:cooking | to: survival/create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: crabs and barnacles are a new seafood tier that runs through the deep-cuisine processing chain — crab boil → oven → feast-tier dishes; spawn feeds ExtraDelight's kitchen as naturally as any crop
- from: spawn:clam (colored variants, casting-net catch) | via: create:crushing → pearl/calcium byproduct | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create crushing wheel on a clam yields a calcium dust or pearl fragment — a lightweight seafood → Create byproduct that seeds the mineral processing loop with an aquatic input
- from: spawn:anglerfish lure-organ (or angler_fish item) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the bioluminescent lure of an anglerfish is a natural magic reagent — its light-producing organ becomes an Ars imbuement catalyst for a light/illumination glyph component, tying exotic aquatic life to the magic web
- from: spawn:date_log / date_planks (new wood set) | via: create:crushing → sawdust/pulp byproduct | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: date wood crushing-recycle is valid M-04 but extremely thin — vanilla wood already covers this pattern; adding date wood specifically adds no meaningful second anchor; low priority / skip unless doing a batch wood pass
- from: seafood / clam variants | via: sell for coin endpoint | to: economy | motif: bare sell link | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; ambient trade endpoint; no demand gate present

---

## freefbible   [anchors: support/flavor (1)]

- LEAVE — a single inert readable item (The Bible text). No mechanics, no recipes, no material surface. Any forced edge would be noise.

---

## sable   [anchors: support/physics library (1)]

- LEAVE — physics engine backend for Create Aeronautics sub-levels; zero items, zero recipes, zero survival content. The weaving happens in the mods that build on it (Aeronautics itself).

---

## dynamic_fps   [anchors: support/performance (1)]

- LEAVE — client FPS throttling utility; zero items, zero recipes, no content surface.

---

## ritchiesprojectilelib   [anchors: support/library (1)]

- LEAVE — projectile/ballistics API library; zero items, zero recipes, no player-facing content. Serves Create Big Cannons indirectly.

---

## fxntstorage   [anchors: create, survival (2)]

- from: fxntstorage:brass_backpack + brass_storage_box (brass tier) | via: create:sequenced_assembly (endgame upgrade path) | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the hardened-tier backpack is the pack's highest-capacity portable storage; gating the hardened upgrade through a sequenced-assembly chain (not just crafting-table brass) makes it a genuine Create-progression milestone rather than a recipe lookup
- from: fxntstorage:backpack_flight_upgrade | via: aeronautics material cross-route (requires Aeronautics-specific component as input) | to: aeronautics | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: a flight backpack that requires an actual airship propeller component to build ties personal flight gadgetry to the aeronautics supply chain — you can't fly solo without the shipbuilding specialists
- from: fxntstorage:storage_controller / smart_passer (item network) | via: colony logistics (colony hut requests pull from storage) | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies warehouse hut interfaces with the storage-controller network for automated colony provisioning — the Create-styled storage mod becomes the infrastructure the colony economy runs on
- from: storage boxes / backpacks | via: sell for coin (ambient endpoint) | to: economy | motif: bare sell link | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired; "storage is valuable, sell it" is ambient; the colony demand link (M-28) above is the real economy weave
- OK — core Create + survival anchors are sound; the M-06 sequenced-assembly deepening and M-29 aeronautics cross-route are new additions above.

---

== CHUNK COMPLETE ==

