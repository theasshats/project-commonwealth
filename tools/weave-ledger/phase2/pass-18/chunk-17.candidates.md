# Phase 2 candidates — chunk-17

## vinery   [anchors: survival (1)]

Current connections: survival only — fermentation/winemaking food chain, self-contained.

- from: vinery wines/ciders (finished fermented beverages) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A winemaker bottles rare-vintage wines and sells them at market — luxury drinks driving a specialist trade
- from: vinery grape_juice / apple_juice (raw ferment intermediates) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Grape juice funneled through a Create mixing sequence as a solvent/acid base for further processing (e.g. jam, vinegar, flavoring syrup) — adds one light step and ties winery output into the Create food chain
- from: vinery apple_mash (pressing byproduct) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: This stays entirely within survival (FD cooking is already the survival chain) — no new anchor gained; same-pillar deepening is not a weave
- from: vinery wines (effect-bearing drinks, seasonal grape harvest) | via: season-gated grape growth (Serene Seasons) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Grapes only ripen in autumn/summer — the wine batch cycle is naturally season-gated, making vintage wine a seasonal luxury good that feeds the economy at harvest time
- from: vinery fermentation_barrel / apple_press (equipment) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Fermentation barrels are wooden containers, not metal/stone deco — M-04 recycles metal/stone deco, not wooden workshop equipment; tone clash (rustic wood vs. industrial crushing) and forced

REWORK: OK — connections sound (1 anchor, three accepted weaves above now give survival + economy + Create depth; no existing connections to rework)

---

## createfood   [anchors: survival, Create (2)]

Current connections: survival (nutrition/food variety) + Create (multi-stage machine sequences). Sound existing base.

- from: createfood finished dishes (pizza, cheesecake, ice cream, milkshakes — high-effort) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A Cook/Baker specialist produces plated foods through a Create kitchen and sells them at market — luxury processed goods minting coin
- from: createfood seasonal crop inputs (apples, berries fed through its recipes) | via: season-gated crop availability (Serene Seasons) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Seasonal crop gating is a survival-depth deepening, not a new anchor — stays within the survival+Create pair already present; not a second weave to a new pillar
- from: createfood dough/pastry intermediates (c:foods/doughs) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: Infusing dough into a magic reagent is tonally incoherent — a bakery output has no thematic link to arcane infusion; forced and arbitrary

REWORK: OK — connections sound (survival + Create already; economy third weave accepted above)

---

## openpartiesandclaims   [anchors: support (1)]

0 blocks, 0 items, 0 loot, pure server-protection framework. No material surface.

- LEAVE — zero-content code/protection layer; no items, methods, or loot to route. Sanctioned support role.

---

## shulkerboxtooltip   [anchors: support/QoL (1)]

0 blocks, 0 items. Client-side tooltip renderer only.

- LEAVE — pure client QoL library; no items, methods, or loot to route.

---

## irons_lib   [anchors: library/API (1)]

4 blocks/items (transmog_table, player_statue) — cosmetic blocks, no material processing.

- LEAVE — support library; transmog and player statues are cosmetic/GUI blocks with no routable material. The transmog table edits NBT appearance, statues hold a skin — neither produces nor consumes any material relevant to the loop.

---

## createfisheryindustry   [anchors: Create, survival (2)]

Current connections: Create (kinetic traps/peeler) + survival (seafood food chain). Both sound.

- from: createfisheryindustry seafood dishes (chowder, soups, steaks) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A maritime fisher automates trap harvests and sells processed seafood — a "fisher" specialization that mints coin from catch
- from: createfisheryindustry fish_skin (leather substitute) | via: create:mechanical_crafting | to: Create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: fish_skin as a crafting material for Create components is already reachable through existing c:tags and Create's leather uses — not a new pillar anchor; and M-20 (deploy-application upgrade) applies to item-on-base, not substitution; mis-motif
- from: createfisheryindustry glow_fish / bioluminescent aquatic drops | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: The dossier lists mussels/lobster/steaks as primary outputs, not bioluminescent fish — inferring unconfirmed drops; no grounded source; reject to avoid invented content
- from: createfisheryindustry fish_skin (leather-analog, tagged c:plates/zinc adjacency) | via: bountiful bounty | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 is combat bounty → coin; fish_skin from automated traps is not combat-origin — mis-motif; M-09 (luxury food) is the correct economy route and already accepted above

REWORK: OK — connections sound (Create + survival already; economy third weave accepted above)

---

## dataanchor   [anchors: library (1)]

0 blocks, 0 items, 0 loot. Pure data-attachment + packet API library.

- LEAVE — zero-content code library (entity data attachment and networking plumbing); no gameplay surface at all.

---

## create_integrated_farming   [anchors: Create, survival (2)]

Current connections: Create (contraption-driven roosts/nets) + survival (automated animal product / food chain). Both sound.

- from: create_integrated_farming roost outputs (eggs, feathers, raw poultry) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: Raw bulk commodity (eggs/feathers) is not a luxury processed good — M-09 targets high-effort finished consumables; raw roost outputs are too low-tier and generic for a coin-sell weave; the dossier itself flags this as WEAK and likely leave
- from: create_integrated_farming feathers | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: Feathers from automated roosts are a renewable reagent input — a roost-fed magic material pipeline (feathers are already a common magic reagent in Ars/Occultism for quills/glyphs); light step, doesn't gate basics
- from: create_integrated_farming lava_fishing_net drops (nether fish / blaze drops analogs) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: The lava net's exact loot is not confirmed in the dossier beyond "fishing in lava" — inferring nether mob drops is speculative; reject pending loot-table verification

REWORK: OK — connections sound (Create + survival already; magic feather weave accepted above)

---

## curios   [anchors: library (1)]

0 blocks, 0 items. Pure accessory-slot framework.

- LEAVE — zero-content library providing equipment slot infrastructure; no items or methods to route. Its value is enabling other mods' accessories to exist.

---

## create_ltab-3.9.2   [anchors: Create, survival (2)]

Current connections: Create (Create-themed structures) + survival (exploration/loot). Existing: loot=yes, uses create:mixing. Both sound.

- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins yield processed metal scraps or coin as loot — scarce regional metal found in abandoned Create factories becomes mintable coin, tying exploration reward into the economy loop (via: loot-seed)
- from: create_ltab structure loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Create-themed buildings dropping magic reagents is tonally inconsistent — industrial structures seeding arcane drops is arbitrary; the M-02 mob-drop-reagent motif applies to mob/boss loot, not industrial ruin chests; tone clash
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is bounty-board → coin for combat drops specifically; loot-table seeding of a structure is M-08 (coin from processed scarcity) or standalone loot-seed, not a bounty trigger — mis-motif; M-08 above is correct

REWORK: OK — connections sound (Create + survival already; economy loot-seed accepted above)

---

## playeranimator   [anchors: library (1)]

0 blocks, 0 items, 0 loot. Client animation API.

- LEAVE — pure animation library (AnimationStack/keyframe API); no gameplay surface, no items, no methods.

---

## fxntstorage   [anchors: Create, survival (2)]

Current connections: Create (andesite→brass material ladder, create:mechanical_crafting made-by) + survival (inventory QoL). Already two good anchors.

- from: fxntstorage flight_upgrade (backpack flight module) | via: thematic aeronautics | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: The flight upgrade is a worn gadget, not a structural airframe component — M-23 applies to airframe/hull build materials, not personal wearable flight modules; mis-motif. M-24 (mechanical component → propulsion) also doesn't fit — it's a wearable item, not a drivetrain component feeding an airship recipe
- from: fxntstorage brass_backpack (hardened tier) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: The hardened backpack tier built as a sequenced assembly chain — adds GregTech-style depth steps to endgame storage; Create-native multi-stage build for a high-value wearable (depth scales with power per cost model)
- from: fxntstorage storage_controller / smart_passer routing | via: thematic aeronautics logistics | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: The storage routing network is a build-base item-routing utility, not a physical material feeding aeronautics construction or propulsion; no coherent motif — no-motif reject

REWORK: OK — connections sound (Create + survival already; sequenced assembly depth accepted above)

---

## cmpackagepipebomb   [anchors: Create (1)]

4 items (pipebomb, rigged variants). Tiny novelty addon riding Create's package system.

- from: cmpackagepipebomb pipebomb (gunpowder + TNT package trap) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: A single novelty trap item sold as a trade good has no scaling — there is no "luxury" tier for a booby-trap gag item; M-09 targets high-effort processed consumables that require meaningful production chains; forced
- from: cmpackagepipebomb pipebomb_rigged | via: bountiful bounty | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 applies to mob drops received as bounty payment; a crafted PvP trap item is not a mob drop — mis-motif
- LEAVE — tiny PvP novelty riding Create packages; no coherent second-pillar weave. The pipebomb's only function is as an explosive trap; nothing to route through any method across systems.

---

## domum_ornamentum   [anchors: decoration/MineColonies support (1)]

100 blocks, 118 items. Architect's Cutter combines up to 3 full blocks into ornamental framed/tiled variants.

- from: domum_ornamentum framed blocks / timberframes (deco output) | via: domum_ornamentum:architects_cutter consuming Create-processed stone or metal blocks | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Andesite casing / Create processed stone fed into the Architect's Cutter produces Create-aesthetic framed deco blocks — a palette bridge that rounds Create-made materials into buildable surfaces (note: the cutter is DO's own method, not Create's; direction is Create material → DO deco, which is a forward production chain, not a crushing-recycle; M-04 covers deco↔Create recycling loosely — flag for reviewer whether this is M-04 or a new "palette-bridge" variant)
- from: domum_ornamentum architectscutter (the block) | via: minecolonies progression gate | to: economy | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-05 is native-method gating (a mod's flagship item built in its own machine, gated on Create parts) — the Architect's Cutter is the method itself, not an item requiring Create parts as inputs; mis-motif; DO's relationship to MineColonies is already its anchor, not a new Create-gate
- from: domum_ornamentum framed blocks | via: loot-seed into Dungeons-and-Taverns structures | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: Seeding deco blocks into structure loot is not a system-weave — it's a world variety edit with no loop advancement; no-motif reject

REWORK: OK — connections sound (support/deco + MineColonies; Create palette weave accepted above with reviewer flag)

---

## createbigcannons   [anchors: Create, aeronautics (2)]

Current connections: Create (deep fabrication chain with cbc:melting/assembly) + aeronautics (cannons mount on ships). Both strong.

- from: createbigcannons finished shells / munitions (AP shell, grapeshot, cartridges) | via: numismatics sell | to: economy | motif: M-09 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: A munitions specialist casts cannon shells and sells war-goods — the Aeronautics combat economy needs a supply market; military hardware as a coin sink
- from: createbigcannons steel/bronze/cast_iron ingots (c:ingots/{steel,bronze,cast_iron}) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: CBC introduces its own c:ingots/steel + bronze + cast_iron tags — processed cannon-grade metals minted into coin completes the scarcity→process→mint loop for military metals
- from: createbigcannons nethersteel (the highest-tier metal) | via: occultism:ritual / spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: nethersteel is an endgame military metal — routing it through occult ritual as a magic reagent is tonally arbitrary (it's a foundry metal, not an organic/soul-adjacent drop); M-11 applies to organic drops transmuted into essence, not forged alloys; tone clash
- from: createbigcannons cast_iron / bronze (lower-tier metals, c:tags shared) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: M-03 covers ore→crushed ore doubling for a reward; CBC's metals arrive as already-processed ingots/blocks cast in the foundry — they're finished outputs, not ores to double; mis-motif; the existing Create build chain is already the correct anchor
- from: createbigcannons cannon barrel / breech blocks (structural components) | via: aeronautics hull construction | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: ACCEPT | hook: Cast cannon barrels as ship-mounted weapon housings require structural alloy fitting — the mechanical component feeding Aeronautics ship-weapon hardpoints; deepens airship militarization (depth scales with endgame power)

REWORK: OK — connections sound (Create + aeronautics already; economy and M-24 hardpoint weaves accepted above)

---

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]

loot=yes, 17 items (vanilla trial_key / ominous_trial_key). Structure datapack, taverns with cartographer villager.

- from: dungeons-and-taverns structure loot tables | via: loot-seed (coin seeded into tavern chests / dungeon vaults) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Coin drops seeded into tavern strongboxes and dungeon vaults — exploration rewards converted to pack currency, pushing adventurers into the economy loop (via: loot-seed)
- from: dungeons-and-taverns structure loot tables | via: loot-seed (magic reagents in dungeon chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Dungeon and illager hideout chests seed rare mob-adjacent drops (essences, source gems) as loot rewards — magic reagents accessible through exploration, tying adventure into the magic production chain (via: loot-seed)
- from: dungeons-and-taverns tavern cartographer | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no — maintainer skeptical of villager→numismatics); the cartographer trades emeralds for maps, not pack coin; bridging vanilla emerald trade to Numismatics adds complexity with unclear player-run-currency benefit; M-08 loot-seed above is the cleaner route

REWORK: OK — connections sound (survival/exploration only currently; economy + magic loot-seed weaves accepted above)

---

## moonlight   [anchors: library (1)]

1 block (spawn_box), 2 items. Shared API library for MehVahdJukaar mods. Data-driven trades API, virtual fluids, map markers.

- LEAVE — pure library/API (dynamic registration, map-marker, data-driven trade infrastructure); the spawn_box and placeable_item are internal helper entries, not player-routable materials. The weave value lives in the dependent mods (Supplementaries, etc.), not in moonlight itself.

---

## exposure   [anchors: Create, survival (2)]

Current connections: Create (sequenced_assembly develops film, deployer-tended stands) + survival (photography hobby). Both sound.

- from: exposure photographs / albums (printed outputs) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Printed photographs and albums sold as collectible map-art — a creative-economy niche where the Create-automated Lightroom produces sellable keepsakes (luxury good → coin)
- from: exposure gold_camera (gold tier) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: Imbuing a camera with arcane energy is tonally strained — the gold camera is a material upgrade (more durable/capable), not a magical focus; the photography theme does not cohere with arcane infusion; tone clash
- from: exposure black_and_white_film (silver halide chemistry implied) | via: create:mixing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Film chemistry through Create mixing is an interesting idea but the dossier already flags Create automation (sequenced_assembly) as the existing inbound weave — adding a mixing step for film development would be redundant/overlapping with the established Create anchor and deepens the same pillar without adding a new one

REWORK: OK — connections sound (Create + survival already; economy photograph sale accepted above)

---

## naturalist   [anchors: survival (1)]

28 blocks, 104 items. Wildlife mod with custom drops (venison, bushmeat, antler, glow_goop). loot=yes.

- from: naturalist venison / bushmeat (cooked meat from deer/boar) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: A hunter/butcher sells wild game — cooked venison and bushmeat as a trade-good tier above pork/beef; renewable meat sourced from wildlife drives a hunting specialization
- from: naturalist venison / bushmeat | via: farmersdelight:cutting / cooking | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Raw deer/boar carcass processed through FD cutting into chops and steaks, then used in createfood recipes — wild-game processing chain linking Naturalist output into the Create food web
- from: naturalist antler | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Antler as a bone-analog reagent imbued into a magic component — a mob-drop given a magic sink (antlers are a real-world alchemical/ritual ingredient; Ars Nouveau's bone/horn ingredient slots are a natural home)
- from: naturalist glow_goop (firefly drop, bioluminescent) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Glowing goop from fireflies imbued into a light-source reagent — bioluminescent material is thematically coherent as a magic luminescence catalyst or source-gem supplement
- from: naturalist shellstone / froglass (deco blocks) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Shellstone blocks crushed back to sand/gravel + xp nugget — a lossy recycle that gives the deco set a Create-machine home (light single step for an everyday block)
- from: naturalist naturalist:net (the capture recipe-type) | via: bountiful bounty | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: M-14 is bounty board → coin for mob drops from combat; the net captures live critters, not harvesting mob drops — not a combat-origin drop feed; mis-motif; M-09 for sold game meat is the correct economy route
- from: naturalist antler | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: Antler transmuted via spirit_fire into an essence is plausible but duplicates the accepted M-02 imbuement route — having both M-02 and M-11 on the same item would be over-wiring; M-02 (Ars) is the cleaner first weave; flag M-11 as an alternative for Occultism if Ars is already saturated

REWORK: OK — connections sound (survival only currently; economy + Create + magic weaves accepted above)

---

## create_sa   [anchors: Create, aeronautics (2)]

Current connections: Create (sequenced_assembly/mechanical_crafting gear build chain) + aeronautics (jetpacks/drones = personal flight). Both strong.

- from: create_sa brass_jetpack / netherite_jetpack (flight gear) | via: aeronautics supply chain | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: M-24 applies to mechanical components feeding Aeronautics drivetrain/propulsion recipes — a jetpack is personal wearable flight gear, not a ship component; would mis-classify personal mobility as ship-level aeronautics; already anchored to aeronautics correctly as personal flight
- from: create_sa blazing tools / flamethrower (blaze-core) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: A blaze flamethrower imbued with arcane energy is tonally incoherent — the blazing line is fire-tech (kinetic + blaze rod), not magical; infusing a Create industrial tool into a magic reagent is forced; tone clash
- from: create_sa brass_drone_item (ownable drone with modules) | via: aeronautics fleet expansion | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: Same as jetpack rejection — a personal companion drone is not an Aeronautics ship drivetrain component; already covered by the existing aeronautics anchor; no new pillar gained

REWORK: OK — connections sound (Create + aeronautics already strong; no forced third weave needed; the dossier correctly concludes "leave")

---

== CHUNK COMPLETE ==
