# Batch 01 — Triage slate

---

## beachparty  — slate: 2 KEEP / 22 CUT / 2 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

KEEP  | beachparty coconut/tropical fruit → create (M-12) | motif M-12 | delivery: recipe (create:milling or extradelight:juicer → coconut cream/flakes as intermediate feeding broader cooking chains) | milestone: v0.7.0 | why "of course": beach-biome harvest flows into the same Create/FD processing web as every other crop; coconut flake is a natural milling output

KEEP  | beachparty cocktails → survival (M-26) | motif M-26 | delivery: config/recipe (palm_bar_mixing cocktails grant timed buffs consumed on use — haste/strength — creating continuous renewal demand) | milestone: v0.13.0 | why "of course": buff drinks you drink and re-make; demand never zeroes; beach specialist supplies miners and builders

CUT   | mini_fridge ice → create cooling chain | M-12/M-32 | reason: retired-economy / no-method — ice is trivially vanilla-obtainable; free-ice competes with Create's own cooling methods rather than feeding them (REJECT majority across all phrasings; the free-power-source aspect undercuts the motif)
CUT   | beachparty:palm_planks / palm_log → create:cutting | M-04 | reason: no-method — generic wood type; Create cutting applies to every c:logs entry already; not a weave, just a consequence of the wood tag
CUT   | beachparty cocktails → farmersdelight:cooking / extradelight:vat (secondary processing) | M-12 | reason: duplicate-of KEEP-1 surface; palm_bar_mixing already produces cocktails — routing them through another processing step adds friction without a second pillar gain
CUT   | beachparty cocktails → irons_spellbooks:alchemist_cauldron | M-12 | reason: tone — cocktails are low-tier food buffs, not arcane brew materials; tonal mismatch
CUT   | beachparty:coconut → ars_nouveau:crush | M-10 | reason: tone — coconuts are mundane food, not arcane; M-10 guardrail (no basic components behind infusion)
CUT   | beachparty cocktails → M-35 maturation (vinery fermentation) | M-35 | reason: depth — gating a simple buff drink behind a fermentation aging step is too many steps for a basic consumable; one of the REJECT verdicts calls this out explicitly
CUT   | beachparty:message_in_a_bottle → loot-seed coin / scroll | M-08 | reason: retired-economy — M-08 requires "scarce regional metal → Create-processed → coin"; a flavor item is not a metal-processing route
CUT   | beachparty structure loot → loot-seed coin | M-08/M-34 | reason: retired-economy / tone — beach structures are low-danger decorative buildings; seeding combat-tier or high-value economy drops is tone mismatch
CUT   | beachparty:coconut → occultism (M-10 via palm_bar_mixing) | M-10 | reason: tone — mundane food crop; coconuts have no arcane surface
CUT   | beachparty cocktails → Serene Seasons summer gate (M-16 melon cocktail) | M-16 | reason: no-method — melon is a summer crop but the motif requires a season-gated input in a machine recipe; cocktail production isn't gated on a seasonal machine step, just a seasonal crop (ambient, not a weave)
CUT   | beachparty:beach_hat / bikini cosmetic → supplementaries:flag / simplehats | M-33 | reason: no-method — fashion-for-hire is too thin; items aren't craftable through any demand-gating method
CUT   | beachparty cocktails → create:filling bulk distribution | M-31 | reason: no-method — cocktails are low-bulk; M-31 requires goods heavy/bulky/perishable enough that scale *requires* logistics arm; buff drinks don't cross that threshold
CUT   | beachparty:cocktails → M-33 (Palm Bar as player service) | M-33 | reason: no-method — an NPC Palm Bar machine isn't a player-to-player labor service; M-33 requires a player performing work on another's materials
CUT   | beachparty cocktails → emergent trade | M-33 | reason: retired-economy — "cocktails are sellable" is the ambient endpoint; the weave is already captured by KEEP-2 (M-26 consumption)
MERGE | beachparty:coconut_open / tropical fruit → extradelight:juicer | into: KEEP-1 (coconut→Create M-12) | reason: near-duplicate of the milling/juicer processing path; juice/cream is the same intermediate; keep strongest phrasing (times_suggested=9 milling wins)
MERGE | beachparty:mussel_meat / seafood → farmersdelight:cooking | into: KEEP-1 surface (M-12 processing chain) | reason: seafood is the same FD-processing chain motif as coconut; both are beach-biome harvest → cooking web; fold into the single Create-processing KEEP
CUT   | beachparty cocktail buffs → combat pre-fight role | M-26 | reason: no-method — emergent player behavior, not a recipe weave; the KEEP-2 already captures the consumption motif
CUT   | beachparty:coconut → regional scarcity M-30 | M-30 | reason: no-method — coconut as a biome-regional crop is a background scarcity fact, not a distinct demand-gate requiring a recipe delivery; it's the ambient pressure M-26 already captures
CUT   | beachparty:palm_bar_mixing as economy node (cocktails → Numismatics) | M-26 | reason: retired-economy — the "sell cocktails for coin" framing is M-09 ambient endpoint; the consumption hook (KEEP-2) is the correct expression
CUT   | beachparty:coconut_open → farmersdelight:mortar | M-12 | reason: duplicate-of KEEP-1 (same M-12 processing surface, lower times_suggested, all single-pass)
CUT   | beachparty:cooked_mussel_meat → coastal feast dish | M-12 | reason: duplicate-of KEEP-1 (same food-web processing motif, 1 pass); fold into existing KEEP anchor

---

## bits_n_bobs  — slate: 1 KEEP / 8 CUT / 0 MERGE / 0 DEFER   | anchors after: create (now 1)

KEEP  | bits_n_bobs tile/chair deco → create:crushing (M-04) | motif M-04 | delivery: recipe (stone-family deco tiles crush back to crushed stone + xp nugget; lossy) | milestone: v0.7.0 | why "of course": a tile floor torn out goes back into the crusher — deco and industry stay one loop (times_suggested=21, ACCEPT unanimous core passes, opus-corroborated)

CUT   | bits_n_bobs:chain_pulley → aeronautics drivetrain M-24 | M-24 | reason: no-method — M-24 wants a mechanical drivetrain component (rotor/bearing/engine block); a chain-pulley decoration is not a propulsion/control part; REJECT majority (7 REJECT vs 5 ACCEPT) and opus clarifies it doesn't fit M-24's scope
CUT   | bits_n_bobs:brass_lamp → create:item_application M-20 | M-20 | reason: no-method — a lamp deployed onto itself has no clear upgrade output; REJECT unanimous
CUT   | bits_n_bobs:nixie_board / large_nixie_tube → economy signage / M-33 | M-33 | reason: no-method — display blocks are not a labor service; M-33 requires a player performing work on another's materials; "the nixie board shows the price" is ambient decor, not a weave; REJECT majority; untagged economy rows share the same reason
CUT   | bits_n_bobs:nixie_board → aeronautics ship display | untagged | reason: no-method — deco block used as instrument is a build choice, not a systemic weave; no motif covers it
CUT   | bits_n_bobs:nixie_board → create:sequenced_assembly M-06 | M-06 | reason: depth — nixie board is a mid-tier display block, not an endgame keystone; M-06 is for endgame items (sequenced assembly is overkill for a decorative panel)
CUT   | bits_n_bobs:nixie_board → create:mechanical_crafting M-05 | M-05 | reason: no-method — M-05 is for gating a *foreign* mod's flagship item inside its own machine via Create parts; nixie board is bits_n_bobs's own deco output, not the target of M-05's pattern; ACCEPT=1 only
CUT   | bits_n_bobs:brass_lamp / chair variants → create:crushing (chairs) | M-04 | reason: depth / no-method — chairs contain wood; crushing to planks/gravel is trivial; players won't crush chairs in practice; below the noise threshold; REJECT
CUT   | bits_n_bobs nixie boards → bare "it's decorative" | untagged | reason: no-method — decoration anchor is already covered; no recipe method or demand hook

---

## born_in_chaos_v1  — slate: 4 KEEP / 21 CUT / 3 MERGE / 0 DEFER   | anchors after: create + magic + economy (now 3)

KEEP  | born_in_chaos_v1:dark_metal_deposit → create:crushing (M-03) | motif M-03 | delivery: recipe (create:crushing — ore → crushed dark metal + byproduct dust; vanilla smelt path stays; times_suggested=25 + opus corroboration, ACCEPT unanimous) | milestone: v0.7.0 | why "of course": dark-metal gear becomes a Create reward and a crafting input, tying the spooky mob zone to the tech spine

KEEP  | born_in_chaos_v1:bundle_of_bones → occultism:spirit_fire (M-11) | motif M-11 | delivery: recipe (occultism:spirit_fire transmutes the undead's soul-bundle into bone-ash / necromantic essence; times_suggested=25, ACCEPT unanimous, opus-corroborated) | milestone: v0.11.0 | why "of course": undead soul-bundle is the archetypally correct occult reagent; seasonal combat feeds the magic pillar

KEEP  | born_in_chaos_v1 mob drops (dark_metal, bones, candy) → economy via M-34 | motif M-34 | delivery: loot-seed / emergent (combat specialist farms BIC mobs for dark metal and bone bundles, trading to magic and tech players; times_suggested=5 ACCEPT across multiple phrasings) | milestone: v0.9.0 | why "of course": the danger-zone specialist is the natural supplier; boss and mob drops are dual-role combat-supply goods

KEEP  | born_in_chaos_v1:dark_metal → regional scarcity gate (M-30) | motif M-30 | delivery: config (dark metal is biome-modifier-placed in specific danger biomes, not global; biome-regional tie anchors the metal to the scarcity foundation) | milestone: v0.9.0 | why "of course": dark metal generates only in BIC danger zones — regionally locked, must be traded across regions; gives the combat-biome trade territory a concrete output

CUT   | born_in_chaos_v1:Pumpkinhead boss drops → M-15 (boss-key gate for complex Create recipe) | M-15 | reason: tone / depth — the Pumpkinhead is a seasonal flavor miniboss, not a progression keystone; gating real tech behind a time-windowed Halloween boss creates hard seasonal friction for players who join outside Oct–Nov; REJECT majority and opus rejects
CUT   | born_in_chaos_v1:pumpkin_staff / soul_saber → ars_nouveau:imbuement M-10 | M-10 | reason: no-method — boss weapons are gear rewards, not raw material reagents; consuming endgame gear in a magic apparatus is poor balance
CUT   | born_in_chaos_v1:dark_metal → ars_nouveau:imbuement M-10 | M-10 | reason: duplicate — dark metal already routed through Create (M-03 KEEP); adding a third route into magic via imbuement over-wires the same material; REJECT unanimous
CUT   | born_in_chaos_v1:bagof_candy → season-gated imbuement M-16 | M-16 | reason: depth — candy is a once-a-year drop; gating a magic recipe behind it creates hard seasonal friction for players; REJECT majority (4 REJECT)
CUT   | born_in_chaos_v1:black_argillite / argillite blocks → create:crushing M-04 | M-04 | reason: duplicate — M-03 already claims the create-anchor on dark_metal_deposit; a second M-04 pass on the same mod's deco stone is low-signal noise; REJECT majority
CUT   | born_in_chaos_v1:dark_metal_block deco → create:crushing M-04 | M-04 | reason: duplicate-of KEEP-1 (M-03 is the stronger motif on the same material; M-04 deco-recycle on the same metal is redundant)
CUT   | born_in_chaos_v1:dark_metal_deposit → numismatics mint M-08 | M-08 | reason: retired-economy — dark metal is thematically a combat/danger metal, not a regional trade-currency metal; REJECT majority; M-34 (KEEP-3) already captures the economy link for mob drops
CUT   | born_in_chaos_v1:soul_saber / pumpkin_staff → occultism:spirit_fire or ars_nouveau:imbuement | M-02 | reason: no-method — boss weapons are signature combat items, not reagents; dismantling endgame weapons as magic inputs is poor balance
CUT   | born_in_chaos_v1:dark_metal → create:haunting M-19 | M-19 | reason: duplicate — dark metal already has two strong anchors (M-03 Create, M-11 magic via bones); a third route through haunting over-wires the same mob zone; 1-pass ACCEPT only
CUT   | born_in_chaos_v1:bagof_candy → extradelight:evaporator or create:mixing M-26 | M-26 | reason: depth — candy dissolved into a seasonal sweetness concentrate is a novel consumable but gates it behind a seasonal ingredient window (Oct–Nov only); depth disproportionate to an everyday sweetener
CUT   | born_in_chaos_v1:dark_metal → create:pressing M-12 | M-12 | reason: duplicate-of KEEP-1 (M-03 covers the Create anchor on dark_metal; adding a separate pressing step is a sub-step of the same route, not a distinct weave)
CUT   | born_in_chaos_v1:pumpkin_staff / seasonal boss drops → player trade M-16 | M-16 | reason: duplicate-of KEEP-3 (M-34 already captures the seasonal boss drops as a combat-supply trade good; M-16 adds nothing distinct)
CUT   | born_in_chaos_v1:dark_metal_deposit → loot-seed into argillite structures | untagged | reason: no-method — seeding its own drops into its own structures is internal content, not a cross-system weave
CUT   | born_in_chaos_v1:great_reaper_axe → cataclysm:weapon_fusion | untagged | reason: no-method — no motif covers cross-mod boss weapon fusion; tone pairing is forced
CUT   | born_in_chaos_v1:dark_metal → create:pressing → aeronautics hull plate M-23 | M-23 | reason: tone — dark metal is thematically cursed/spooky; using it as a standard hull structural alloy fights the material's identity; REJECT
CUT   | born_in_chaos_v1:bagof_candy / Pumpkinhead → loot-seed End portal eye M-15 | M-15 | reason: depth — gating End progression behind a seasonal boss window is a hard lock for players who join off-season; ACCEPT=1 only
CUT   | born_in_chaos_v1:bagof_candy → farmersdelight:cooking M-12 | M-12 | reason: tone — seasonal candy is a collectible with lore weight; routing through an industrial cooking pot is a tone mismatch
CUT   | born_in_chaos_v1:dark_metal_deposit → loot-seed into structures | untagged | reason: no-method — internal drops seeded into own structures; not a cross-system weave
MERGE | born_in_chaos_v1:dark_metal (processed ingot) → M-08 numismatics mint | into: KEEP-4 (M-30 regional scarcity) | reason: the M-08 phrasing is retired-economy for this material; the scarcity fact is already the KEEP-4 anchor; the economy expression is KEEP-3 (M-34 trade)
MERGE | born_in_chaos_v1:pumpkin_staff / boss drops → emergent trade M-34 | into: KEEP-3 (M-34 combat-route supply) | reason: near-duplicate; boss drops and weapons are the same combat-supply goods already captured in KEEP-3
MERGE | born_in_chaos_v1:dark_metal → occultism:spirit_fire M-11 | into: KEEP-2 (bundle_of_bones M-11) | reason: bundle_of_bones is the stronger, more organic magic candidate; routing dark_metal into occultism as well fragments the mod's magic connection across two items; REJECT majority concurs

---

## create_central_kitchen  — slate: 3 KEEP / 12 CUT / 2 MERGE / 0 DEFER   | anchors after: create + survival + economy (now 3)

KEEP  | create_central_kitchen automated feast output → MineColonies provisioning (M-28) | motif M-28 | delivery: config (colony cook hut / restaurant hut requests finished dishes; automated kitchen feeds colony demand continuously; times_suggested=4+1+1 ACCEPT, opus-corroborated) | milestone: v0.9.0 | why "of course": a colony that builds consumes food at scale; the industrial kitchen is the only production that can match colony throughput

KEEP  | create_central_kitchen automated feast dishes → consumption sink (M-26) | motif M-26 | delivery: recipe/config (dishes from Blaze Stove-accelerated kitchen are consumed by colony workers, builders, and ship crews; demand never zeroes; times_suggested=5, ACCEPT majority) | milestone: v0.13.0 | why "of course": industrial food has to go somewhere; consumption demand is the loop-closing edge that justifies building the kitchen

KEEP  | create_central_kitchen seasonal pie recipe → Serene Seasons crop gate (M-16) | motif M-16 | delivery: recipe (automated pumpkin-pie line sits idle outside autumn — Create harvest system only pulls seasonal pumpkin from the farm during the autumn window; single ACCEPT but thematically crisp and distinct) | milestone: v0.13.0 | why "of course": seasonal production windows give the industrial kitchen real downtime and drive crop-stockpiling ahead of season

CUT   | create_central_kitchen sauce/drink fluids → createfisheryindustry:bait_trap | M-12 | reason: tone — processed kitchen sauces as fishing bait is contrived; no precedent; method-pull is forced; REJECT majority
CUT   | Blaze Stove → ars_nouveau:imbuement / occultism:spirit_fire M-10/M-11 | M-10/M-11 | reason: no-method — the Blaze Stove is a physical block, not a consumable material; routing a machine block into a ritual method is the wrong direction; REJECT unanimous
CUT   | Blaze Stove → create:haunting M-19 | M-19 | reason: no-method — the Blaze Stove already consumes Blaze as speed catalyst; re-routing soul/haunting onto a culinary booster is contrived; REJECT unanimous
CUT   | Blaze Stove → aeronautics ship (galley bay) | untagged | reason: no-method — no motif covers "ship interior room layout"; thematically appealing but not a systemic weave
CUT   | Blaze Stove → create:deploying / item_application M-26 | M-26 | reason: no-method — Blaze Stove already naturally consumes Blaze Rods; adding a deploy-application consumption step is redundant friction; REJECT
CUT   | sequenced-assembly sandwich/burger/pie → M-37 research gate | M-37 | reason: no-method — M-37 is a research/knowledge gate (MineColonies research or Ars knowledge); create_central_kitchen's recipes are crafted via sequenced assembly, not unlocked by research; delivery is wrong
CUT   | create_central_kitchen dish output → ars_nouveau:imbuement M-10 | M-10 | reason: tone — cooked dish as arcane imbuement catalyst; magic reagents are arcane/soul/essence materials, not finished food
CUT   | sauce/drink fluids → createaddition:liquid_burning M-12 | M-12 | reason: tone — burning food sauces as machine fuel; thematically absurd; finished beverages are not fuel feedstocks
CUT   | sauce/drink fluids → numismatics vendor M-08 | M-08 | reason: retired-economy — "vendor sells them by the cask" is the ambient endpoint; the weave is the consumption (KEEP-2) or colony (KEEP-1) demand, not a coin faucet
CUT   | automated feast → create:filling aeronautics ship food lockers M-31 | M-31 | reason: depth — appealing but the logistics-required threshold (M-31) is for goods so heavy/bulky that scale requires the logistics arm; finished dishes in casks is plausible but the delivery is identical to KEEP-1 (colony provisioning); fold into KEEP-1 rather than add a separate aeronautics anchor
CUT   | Blaze Stove + MineColonies research gate M-37 | M-37 | reason: duplicate — KEEP-1 already anchors kitchen to economy via M-28; adding M-37 on top of the same colony link is over-wiring; 1-pass ACCEPT only
MERGE | create_central_kitchen blaze_stove (Blaze as fuel continuous demand) → M-34 combat supply | into: KEEP-2 (M-26 consumption sink) | reason: the Blaze supply chain is the consumption side of the Blaze Stove; the ongoing blaze-rod demand is already implicit in M-26 (the stove consumes blazes continuously); fold into the consumption KEEP
MERGE | create_central_kitchen foreign food intermediates (FD/ExtraDelight crops) → create:sequenced_assembly M-12 | into: KEEP-1 + KEEP-2 (the automated kitchen already pulls these inbound) | reason: "FD crops feed the kitchen" is the input side of the colony-feeding and consumption-sink KEEPs, not a distinct weave; near-duplicate of the outbound ACCEPTs already kept

---

## create_dragons_plus  — slate: 3 KEEP / 17 CUT / 3 MERGE / 0 DEFER   | anchors after: create + magic + survival (now 3)

KEEP  | create_dragons_plus:ending (Bulk Ending fan method, dragon breath catalyst) → magic (M-10) | motif M-10 | delivery: recipe (End-infused fan processing transmutes foreign materials with draconic essence; dragon_breath is a boss-gate catalyst → Ars/Occultism reagents; times_suggested=9, ACCEPT unanimous) | milestone: v0.11.0 | why "of course": a native Create→magic bridge using the End dimension's own fluid; the dragon-breath catalyst is already a boss-key (Ender Dragon kill required)

KEEP  | create_dragons_plus:freezing (Bulk Freezing fan method, powder snow catalyst) → survival/seasonal (M-16) | motif M-16 | delivery: recipe (powder-snow bulk-freeze is a winter-locked processing gate; seasonal Powder Snow as catalyst gates certain bulk processes; times_suggested=10, ACCEPT majority) | milestone: v0.13.0 | why "of course": winter-only Powder Snow collected via Serene Seasons ties Create fan stations to the seasonal calendar — the industrial kitchen and Create production lines have off-season downtime

KEEP  | create_dragons_plus:levitite_fragile_fluid_tank → aeronautics (M-23) | motif M-23 | delivery: recipe (levitation-fluid tank is a dedicated aeronautics lift component; a natural structural ingredient for airship buoyancy systems; times_suggested=2, ACCEPT majority) | milestone: v0.9.0 | why "of course": a tank storing levitation fluid is the most legible "this mod exists for airships" moment; structural/lift component, not cosmetic

CUT   | create_dragons_plus:dragon_breath_bucket → ars_nouveau:imbuement (M-10 direct bucket) | M-10 | reason: duplicate-of KEEP-1 (the Bulk Ending method already establishes the magic link via dragon_breath; using the bucket directly in Ars bypasses the Create machine, losing the Create spine tie; REJECT majority)
CUT   | create_dragons_plus dye fluids → bulk dyeing / textile / Create | M-12 | reason: no-method — bulk dye is already a Create-side utility; routing it to a second pillar adds nothing; REJECT unanimous across two phrasings
CUT   | create_dragons_plus:ending → occultism ritual ingredient M-11 | M-11 | reason: duplicate — dragon_breath is already the catalyst *for* the ending method (KEEP-1 captures this); routing it as an Occultism ritual input stacks two exotic methods on the same material; REJECT majority
CUT   | create_dragons_plus dye fluids → aeronautics hull-paint M-24 | M-24 | reason: no-method — M-24 is mechanical drivetrain components, not cosmetic coloring; bulk dye is not propulsion/control hardware
CUT   | create_dragons_plus:ending method → M-19 create:haunting | M-19 | reason: no-method — M-19 requires create:haunting (soul-fire); dragon breath is void/End energy, not soul fire; REJECT unanimous
CUT   | create_dragons_plus dye fluids → numismatics M-08 | M-08 | reason: retired-economy — dye fluids are bulk convenience throughput, not scarce regional metals; M-08 explicitly requires a scarce regional metal chain
CUT   | create_dragons_plus:dragon_breath → occultism:spirit_fire M-11 | M-11 | reason: duplicate — dragon_breath is the Create→magic bridge via M-10 (KEEP-1); stacking an Occultism ritual route on the same fluid over-wires it; spirit_solution reserved for occultengineering
CUT   | create_dragons_plus:ending method as pure weave-target (no outbound weave needed) | untagged | reason: no-method — the mod's ending/freezing methods are weave-TARGETS other mods route through, not edges this mod itself needs; REJECT
CUT   | create_dragons_plus:levitite tank → aeronautics M-24 (drivetrain) | M-24 | reason: duplicate-of KEEP-3 (M-23 already captured the levitite-tank → aeronautics link; M-24 is the drivetrain/control side, not structural; the tank is a lift/structural item; REJECT)
CUT   | create_dragons_plus:fan_freezing → lunar reagent M-22 | M-22 | reason: no-method — M-22 requires lunar-event gating; the freezing method uses temperature, not a lunar mechanic; REJECT
CUT   | create_dragons_plus:blaze_upgrade_smithing_template → loot-seed Nether structures M-34 | M-34 | reason: no-method — loot-seeding for exploration milestone is coherent but the blaze template is already a Nether-drop pathway; the mod is a Create add-on, not primarily a loot-table mod; single-pass, low-signal
CUT   | create_dragons_plus:blaze_upgrade_smithing_template → create:sequenced_assembly M-06 | M-06 | reason: no-method — the template is a support item for sibling add-ons, not an endgame keystone; M-06 is for endgame items; REJECT
CUT   | create_dragons_plus:dragon_breath fluid → aeronautics propulsion M-13 | M-13 | reason: no-method — dragon breath is an exotic bio-fluid, not a combustion fuel; M-13 reserves TFMG diesel/gasoline/lubricant for propulsion; REJECT
CUT   | create_dragons_plus:blaze_upgrade_smithing_template → M-02 mob-drop reagent | M-02 | reason: duplicate / no-method — the template is a crafting upgrade item, not an isolated mob-drop reagent needing a magic/economy sink; 1-pass ACCEPT only
CUT   | create_dragons_plus:freezing fan + allurite/lumiere shards → cold-attuned M-07 | M-07 | reason: no-method — the attunement catalyst (M-07) is reserved for galosphere allurite/lumiere shards as themselves; cold-processing them in a fan changes the material's identity but the motif reserves the shard AS the catalyst, not an output of further processing; 1-pass only
CUT   | create_dragons_plus dye fluids → aeronautics hull coloring M-23 | M-23 | reason: no-method — bulk dye fluids are not load-bearing structural materials; M-23 requires fabricated structural parts; REJECT
MERGE | create_dragons_plus:ending → M-29 cross-route (dragon_breath fan forces tech+End cross-dependency) | into: KEEP-1 (M-10 ending→magic) | reason: the cross-route dependency is an implication of KEEP-1's boss-gate catalyst; M-29 adds a label but no new delivery mechanism
MERGE | create_dragons_plus:ending → boss-drop gating (Ender Dragon catalyst) M-15 | into: KEEP-1 (M-10 ending→magic) | reason: the boss-key is already intrinsic to KEEP-1 — you need to kill the Ender Dragon to get the Dragon Head catalyst; M-15 as a separate weave is redundant
MERGE | create_dragons_plus:dragon_breath → create:haunting M-19 (void/end energy edge) | into: KEEP-1 (M-10) | reason: the "soul-fire adjacent" framing is rejected by motif definition (M-19 = create:haunting / soul-fire specifically); the magic-bridge is already KEEP-1 via M-10; fold

---

## create_pattern_schematics  — slate: 0 KEEP / 7 CUT / 0 MERGE / 0 DEFER   | anchors after: create (already anchored as Create utility — no second weave achievable)

CUT   | create_pattern_schematics:empty_pattern_schematic → create:mechanical_crafting M-05 | M-05 | reason: no-method — M-05 gates a *foreign* mod's flagship item inside its own machine via Create parts; the schematic is already a Create-family tool; the mod is already anchored in Create; REJECT unanimous (times_suggested=4)
CUT   | create_pattern_schematics:pattern_schematic → aeronautics contraption placement M-23 | M-23 | reason: no-method — M-23 requires a load-bearing structural material/part; a pattern schematic is a build-automation tool with no material identity; "it rides a gantry to build hull sections" is an emergent build choice, not a recipe; ACCEPT=2 but delivery is config/gameplay, not a weave
CUT   | create_pattern_schematics:pattern_schematic → aeronautics logistics M-31 | M-31 | reason: duplicate — same aeronautics framing as above; M-31 requires a good that's heavy/bulky/perishable; schematics are not goods at all
CUT   | create_pattern_schematics items → any cross-system method | untagged | reason: no-method — pattern schematics are build tools, not materials; no consumable substance or drop to route through any method; REJECT unanimous across multiple phrasings
CUT   | create_pattern_schematics:pattern_schematic → recipe (require MineColonies blueprint component) | M-05 | reason: no-method — M-05 is not for a MineColonies ingredient gating a Create tool; forced inversion of the motif
CUT   | create_pattern_schematics items → economy M-33 (construction service) | M-33 | reason: no-method — M-33 requires a player performing work on another's materials; a schematic item doesn't gate the service; emergent only
CUT   | create_pattern_schematics items → economy (bare sell link) | untagged | reason: retired-economy / no-method — no tradeable output, no material surface; arbitrary friction on a build-automation workflow tool

Note: create_pattern_schematics is a pure Create build-automation utility with no material outputs or second-pillar surface. It earns its place as a Create quality-of-life tool (its "of course" is enabling large ship/colony construction). No Phase-3 weave target. **Not a LEAVE mod** (it has content and Create anchor) but achieves only 1 anchor with no viable second.

---

## create_tweaked_controllers  — slate: 2 KEEP / 18 CUT / 0 MERGE / 0 DEFER   | anchors after: create + aeronautics (now 2)

KEEP  | create_tweaked_controllers:tweaked_lectern_controller → create (M-05) | motif M-05 | delivery: recipe (controller built from Create precision mechanism + electron tubes — Create dependency already baked in; formalize as native-method gating; times_suggested=10 + opus-corroborated, ACCEPT majority) | milestone: v0.7.0 | why "of course": a precision controller for an industrial vehicle is naturally a precision-machined Create component; the craft already routes through Create parts

KEEP  | create_tweaked_controllers:tweaked_lectern_controller → aeronautics control surface (M-24) | motif M-24 | delivery: recipe (controller as required input in aeronautics navigation/control surface assembly; programmable controller translates player inputs to redstone-link signals — the control-input layer for Create/Aeronautics vehicles; times_suggested=3+2, ACCEPT majority across aeronautics-facing rows) | milestone: v0.9.0 | why "of course": a navigation rig without a proper control interface is just a drifting contraption; the tweaked controller is the control surface component

CUT   | create_tweaked_controllers:tweaked_lectern_controller → create:sequenced_assembly M-06 | M-06 | reason: depth — M-06 is for endgame keystones; this is a mid-tier control device; sequenced assembly is overkill; REJECT unanimous across two phrasings
CUT   | create_tweaked_controllers controller → magic (any method) | untagged/M-17/M-29 | reason: tone — a redstone-frequency industrial controller has no thematic magic surface; forced edge across all magic-facing phrasings; REJECT unanimous
CUT   | create_tweaked_controllers controller → survival | untagged | reason: tone — pure control-signal device; survival has no plausible theme pairing; REJECT
CUT   | create_tweaked_controllers:tweaked_linked_controller → aeronautics M-24 (separate weave) | M-24 | reason: duplicate-of KEEP-2 (the mod already anchors to aeronautics via the lectern controller; the linked controller is a sub-variant of the same control surface; REJECT)
CUT   | create_tweaked_controllers:tweaked_lectern_controller → create:item_application M-20 | M-20 | reason: duplicate — M-20 is a lighter tier of M-06; same depth problem; REJECT
CUT   | create_tweaked_controllers → CC:Tweaked scripted logistics automation M-01 | M-01 | reason: no-method — "automation enables logistics" is a meta claim, not a material weave routing through a method; no motif covers it
CUT   | create_tweaked_controllers:tweaked_lectern_controller → numismatics sell | untagged | reason: retired-economy — bare sell link; no demand-gate; REJECT unanimous
CUT   | create_tweaked_controllers:tweaked_linked_controller → create:sequenced_assembly M-06 | M-06 | reason: duplicate — same depth problem as above; REJECT
CUT   | create_tweaked_controllers:tweaked_lectern_controller → occultism:spirit_trade / ars_nouveau:enchanting M-29 | M-29 | reason: tone — digital/industrial CC:Tweaked peripheral through a spirit trade or enchanting apparatus; tone clash; REJECT
CUT   | create_tweaked_controllers → MineColonies University research gate M-37 | M-37 | reason: no-method — while thematically coherent (research unlocks precision controls), 1-pass ACCEPT only; the Create-craft anchor (KEEP-1) already gates the controller behind Create parts; adding a research lock on top is over-engineering
CUT   | create_tweaked_controllers:tweaked_lectern_controller → loot-seed M-34 | M-34 | reason: no-method — loot=yes flag is noted but the mod registers only controllers; no coherent combat-supply loot angle; REJECT
CUT   | create_tweaked_controllers gamepad contraptions → config tie survival | untagged | reason: no-method — QoL ambient, no system connection; REJECT
CUT   | create_tweaked_controllers → M-05 (precision mechanism is a sequenced-assembly output; controller already gated on it) | M-05 | reason: duplicate-of KEEP-1 — the existing ACCEPT rows are the same M-05 phrasing already kept; lower-times_suggested rows are near-duplicates; fold
CUT   | create_tweaked_controllers:tweaked_linked_controller → config/loot-seed M-33 | M-33 | reason: no-method — M-33 requires a player performing work on another's materials; the controller enables piloting but the weave can't be authored via a recipe
CUT   | create_tweaked_controllers:tweaked_lectern_controller → M-29 Create-input dependency | M-29 | reason: duplicate — the Create-parts dependency is captured in KEEP-1 (M-05); M-29 adds nothing; REJECT
CUT   | create_tweaked_controllers → Create supply chain already anchored | M-05 | reason: duplicate — multiple single-pass ACCEPTs restate the same M-05 Create-parts-in-craft pattern; KEEP-1 subsumes all of them

---

## createaddoncompatibility  — LEAVE (pure compat shim — zero own items, zero recipes; the one candidate row's weave belongs on the plastic-producing mod, not this compat bridge)

---

## createnuclear  — slate: 4 KEEP / 27 CUT / 4 MERGE / 0 DEFER   | anchors after: create + economy + aeronautics + magic (now 4)

KEEP  | createnuclear:uranium → create:crushing M-03 + regional scarcity M-30 | motif M-03 / M-30 | delivery: recipe + config (uranium ore doubled via Create crushing before enrichment; uranium veins region-locked by GTMOGS ore-gen; the reactor specialist must trade for ore; times_suggested=16 M-08 dominant phrasing consolidated here as the Create+scarcity anchor; M-03 ACCEPT ×2 + M-30 ACCEPT ×6) | milestone: v0.7.0 | why "of course": uranium is a scarce, regionally-concentrated ore that requires a full Create crushing/mixing chain — the tech spine processes what it powers

KEEP  | createnuclear:steel_ingot (c:ingots/steel) → aeronautics airframe (M-23) | motif M-23 | delivery: recipe (reactor-grade steel as required structural ingredient for heavy military/cargo airframes; times_suggested=9+5+4+4 ACCEPT across multiple steel-aeronautics phrasings; strong consensus) | milestone: v0.9.0 | why "of course": reactor-grade steel is the load-bearing spine of a heavy airship hull — you need the nuclear foundry running before you can build the premium airframe

KEEP  | createnuclear:enriched_soul_soil → create:haunting M-19 | motif M-19 | delivery: recipe (enriched soul soil fed through Create's haunting/soul-fire process to yield an occult spirit compound; times_suggested=5+3 ACCEPT, opus-corroborated ×2) | milestone: v0.11.0 | why "of course": enriched soul soil is soul-fire-adjacent by its own enriching_fire mechanic — running it through haunting is the Create→occult bridge the motif was designed for

KEEP  | createnuclear:steel → MineColonies colony research unlock (M-28) | motif M-28 | delivery: config (advanced MineColonies research — blast-furnace tier / higher-tier colony buildings — requires reactor-grade steel; puts the colony on the nuclear economy) | milestone: v0.9.0 | why "of course": the colony can't run its industrial tier without the reactor player's steel; the nuclear foundry becomes a colony dependency

CUT   | createnuclear:steel → numismatics mint M-08 (multiple phrasings) | M-08 | reason: retired-economy (consolidated) — "steel ingots are worth money" is the ambient endpoint; the economy weave is the colony demand (KEEP-4) and scarcity (KEEP-1); M-08 coin-faucet phrasings across rows 227/233/234/236/251/258/259/274/278/293 are all retired-economy variants of the same ambient sell
CUT   | createnuclear:reactor SU output → aeronautics engine intake M-13 | M-13 | reason: no-method — M-13 routes *fuel fluids*; the reactor outputs rotation (SU), not a fuel fluid; SU already feeds Create machines directly; REJECT unanimous across three phrasings
CUT   | createnuclear:autunite → ars_nouveau:imbuement M-10 | M-10 | reason: tone — industrial-atomic mineral vs. arcane-scholarly tone clash; no coherent lore bridge; REJECT majority (12 REJECT vs 5 ACCEPT)
CUT   | createnuclear:lead_ingot → numismatics mint M-08 | M-08 | reason: retired-economy — lead is a byproduct metal, not a primary regional ore; historically devalued/token; REJECT majority; steel M-08 already retired above
CUT   | createnuclear:lead → aeronautics hull shielding M-23 | M-23 | reason: depth — lead's density/shielding is coherent but steel (KEEP-2) already provides the primary structural alloy; adding lead as a second hull-ingredient duplicates the aeronautics anchor; 3-pass ACCEPT but creates two competing hull-metal candidates for the same role
CUT   | createnuclear:anti_radiation armor → ars_nouveau:imbuement M-10 | M-10 | reason: tone — irradiated hazmat gear through arcane infusion is tonally incoherent; REJECT majority
CUT   | createnuclear:anti_radiation armor → create:mechanical_crafting M-05 | M-05 | reason: no-method — M-05 gates a mod's flagship item in its own machine via Create parts; the anti-radiation suit is survival gear, not a flagship tech item; 2-pass ACCEPT but the delivery is already covered by the mod's own crafting
CUT   | createnuclear:enriched method → magic M-10 (enriching magic ore via reactor) | M-10 | reason: tone — enriching magic minerals through a nuclear reactor is a hard tone clash; arcane and atomic-age aesthetics don't share a lore bridge; REJECT unanimous across three phrasings
CUT   | createnuclear anti-radiation armor → survival hazard / Cold Sweat config | untagged | reason: no-motif — radiation is not a temperature hazard; no existing motif bridges radiation to Cold Sweat; thematic-only; REJECT across four phrasings
CUT   | createnuclear:reactor SU → createaddition:charging → magic gear M-17 | M-17 | reason: no-method — the SU→FE→magic-charging path routes *through* createaddition, not createnuclear directly; if accepted it would be a createaddition weave; REJECT majority (3 phrasings)
CUT   | createnuclear:anti_radiation armor → KubeJS cross-mod craft M-29 | M-29 | reason: no-method — cross-route dependency requires the two production routes to each contribute inputs; radiation armor needing a Cold Sweat component is thematic only; REJECT majority
CUT   | createnuclear:reactor_core / casing → create:sequenced_assembly M-06 | M-06 | reason: duplicate — the reactor is already deeply within Create's own crafting (the dossier shows create:compacting/crushing/mixing/pressing all inbound); adding M-06 as a separate weave is labeling what's already native; REJECT majority (3 phrasings)
CUT   | createnuclear:steel → create:crushing / ore-doubling M-03 (steel itself) | M-03 | reason: no-method — steel is produced within the mod's own Create-based ore chain; adding another M-03 pass on the same material is redundant; REJECT majority
CUT   | createnuclear:lead → occultism M-11/M-29 | M-11/M-29 | reason: tone — industrial heavy metal in a demonological ritual; genre clash; REJECT majority across two phrasings
CUT   | createnuclear:uranium → occultism:spirit_fire M-11 | M-11 | reason: tone — nuclear physics and Occultism's demonology are tonally incompatible; REJECT
CUT   | createnuclear:steel → cross-mod supply M-29 (feeding S_A_B armor / Create Ironworks) | M-29 | reason: no-method — the steel supply chain is captured by KEEP-1 (Create/scarcity) and KEEP-2 (aeronautics); the cross-mod supply argument is an ambient economy fact, not a distinct weave with a delivery
CUT   | createnuclear anti-rad armor → M-37 MineColonies research gate | M-37 | reason: duplicate — KEEP-4 (M-28) already anchors the colony/research dimension; gating the armor behind a separate research node is over-engineering; 1-pass only
CUT   | createnuclear anti-rad armor → M-34 combat supply | M-34 | reason: no-method — anti-radiation armor is specialist gear, not a boss/danger drop farmed by a combat specialist for trade; it's crafted, not dropped; 1-pass only
CUT   | createnuclear:autunite → create:crushing M-04 (lossy deco recycle) | M-04 | reason: no-method — autunite is a uranium-mineral aesthetic deco set; M-04 deco-recycle would produce uranium dust, which overlaps with the ore-doubling M-03 chain; redundant; ACCEPT=1 only
CUT   | createnuclear:reactor SU → create:haunting M-19 | M-19 | reason: no-method — the enriching_campfire is thematically adjacent but SU is rotational force, not soul-fire; M-19 requires create:haunting; the KEEP-3 already establishes the soul-fire→occult bridge via enriched_soul_soil
CUT   | createnuclear:lead → create:crushing ore-doubling M-03 | M-03 | reason: no-method — lead is already produced within the mod's own Create-based ore processing; duplicate; REJECT
CUT   | createnuclear:reactor_core → loot-seed boss-drop gate M-15 | M-15 | reason: tone / no-method — the reactor is a multiblock that players build, not a boss; seeding its core as a boss-drop gate contradicts its design
MERGE | createnuclear:uranium (processed) → numismatics mint M-08 (multiple phrasings) | into: KEEP-1 (M-03/M-30 Create+scarcity) | reason: M-08 "mint it for coin" is the retired-economy endpoint; the real anchor is the Create crushing chain and regional scarcity, both in KEEP-1; collapse all uranium-coin rows
MERGE | createnuclear:enriched_soul_soil → occultism:spirit_fire M-11 | into: KEEP-3 (M-19 haunting→occult) | reason: spirit_fire on enriched soil is the downstream of KEEP-3's haunting step; fold the occult-output into the same delivery chain rather than two separate magic weaves
MERGE | createnuclear anti-radiation armor → M-26 consumption (radiation hazard degrades gear) | into: KEEP-4 (M-28 colony) | reason: the colony workers who need radiation protection are the demand source; M-26 consumption of armor is an implicit part of the colony-demand loop; fold rather than separate
MERGE | createnuclear:autunite → create_new_age:energising M-17 (autunite as capacitor catalyst) | into: KEEP-1 (Create anchor) | reason: autunite is an aesthetic deco block; an energising step using it is a 1-pass idea that adds a minor Create sub-step; fold into the broader Create anchor rather than a standalone weave

---

## mcwstairs  — slate: 1 KEEP / 8 CUT / 0 MERGE / 0 DEFER   | anchors after: create (now 1)

KEEP  | mcwstairs stone/brick/blackstone stair/railing variants → create:crushing M-04 | motif M-04 | delivery: recipe (stone-family deco stairs and railings crush back to gravel + xp nugget; lossy, no arbitrage; as part of a wholesale stone-deco-family pass; times_suggested=18 but high REJECT count — dossier flagged WEAK; proceed as a batch deco-family pass not a standalone weave; strongest stone-family phrasings are ACCEPT-majority) | milestone: v0.7.0 | why "of course": torn-down stone railings and balconies feed the millstone — stone deco isn't a dead end; the xp nugget byproduct is standard M-04 treatment

CUT   | mcwstairs:*_wood variants → create:crushing M-04 | M-04 | reason: no-method — M-04 is for metal/stone deco crushing back to raw/gravel; wooden deco crushing to planks is trivially lossless and not what M-04 was designed for; REJECT unanimous
CUT   | mcwstairs wooden railing/balcony → create:cutting M-12 | M-12 | reason: no-method — create:cutting already handles wood/plank→slab/stair conversions natively for all c:planks; adding Macaw's variants explicitly is noise, not a weave
CUT   | mcwstairs stone-family deco → create:crushing (as individual mob, not batch pass) | M-04 | reason: duplicate — KEEP already captures this; individual rows with fewer passes or REJECT majority are subsumed; the batch treatment on KEEP is the delivery
CUT   | mcwstairs:andesite_railing → create:sandpaper_polishing M-29 (polished-stone intermediate) | M-29 | reason: depth — gating a decorative railing behind Create sandpaper-polishing as a required crafting input is too many steps for a deco block; basics/everyday components guardrail applies; ACCEPT=1 only
CUT   | mcwstairs:*_bulk_stairs / balcony stone → create:crushing (separate phrasing) | M-04 | reason: duplicate-of KEEP; near-duplicate phrasings fold into the KEEP batch pass
CUT   | mcwstairs stone/brick blackstone variants (low-times phrasings) | M-04 | reason: duplicate-of KEEP; all lower-times_suggested stone-family phrasings are subsumed by KEEP-1 batch pass
CUT   | mcwstairs → any second pillar (magic, survival, economy, aeronautics) | any | reason: no-method — Macaw's Stairs is a pure deco mod; no items have a thematic surface in any other pillar beyond the stone-deco M-04 recycle; decoration is a sanctioned support anchor, one anchor is the floor
CUT   | mcwstairs:*_railing / *_balcony stone as individual weave (low-signal) | M-04 | reason: duplicate-of KEEP; the dossier flags this whole pass as WEAK; only proceed as part of the wholesale deco-family batch in KEEP

---

## mcwwindows  — slate: 1 KEEP / 13 CUT / 0 MERGE / 0 DEFER   | anchors after: create (now 1)

KEEP  | mcwwindows stone parapet / arrow-slit variants → create:crushing M-04 | motif M-04 | delivery: recipe (solid stone fortification windows and parapets crush back to gravel/cobblestone + xp nugget; lossy; as part of a wholesale stone-deco-family pass; times_suggested=18 + opus ×5, ACCEPT majority for stone-only variants) | milestone: v0.7.0 | why "of course": deconstructed stone fortification windows feed the crusher — the same lossy-recycle logic as every stone deco block in the pack

CUT   | mcwwindows:*_mosaic_glass → create:crushing M-04 | M-04 | reason: no-method — glass crushing to sand is a different material category from the stone/metal M-04 scope; 100+ glass variants as explicit recipes would bloat the recipe graph; REJECT unanimous across four phrasings
CUT   | mcwwindows curtains (wool) → create:milling M-04/M-12 | M-04/M-12 | reason: no-method — curtains are textile, not stone/metal; M-04 is scoped to metal/stone deco; milling curtains back to wool fiber is contrived; REJECT unanimous across four phrasings
CUT   | mcwwindows curtains → farmersdelight:cutting M-12 | M-12 | reason: tone — cutting a curtain with a knife to reclaim wool reads as recipe filler; no coherent process; REJECT unanimous
CUT   | mcwwindows curtains / curtain rod → ars_nouveau:imbuement M-10 | M-10 | reason: tone — domestic curtains/curtain rods as arcane reagents is a hard tone clash; M-10 guardrail (no basic components behind infusion); REJECT unanimous across three phrasings
CUT   | mcwwindows:*_mosaic_glass → create:sandpaper_polishing M-20 | M-20 | reason: depth — polishing decorative glass panels through a Create sandpaper step gates a basic deco block behind a machine process; basics guardrail; ACCEPT=1 only
CUT   | mcwwindows stone window variants → create:sandpaper_polishing M-29 (polished intermediate) | M-29 | reason: depth — same basics guardrail problem as mcwstairs M-29 CUT; REJECT majority
CUT   | mcwwindows:*_arrow_slit / *_parapet → MineColonies colony Builder request M-28 | M-28 | reason: depth — while coherent (colony guard towers use arrow slits), gating arrow-slit window supply through MineColonies requests adds friction to a basic deco block; basics guardrail; ACCEPT=1 only
CUT   | mcwwindows → any magic method | untagged | reason: no-method — deco window palette has no thematic surface in magic; forced across all phrasings; REJECT
CUT   | mcwwindows mosaic glass → regional dye scarcity | untagged | reason: no-method — dyed glass is everyday/cheap; basics guardrail; no demand-gate would survive the depth check
CUT   | mcwwindows blocks → loot-seed (fortification deco in dungeon chests) | M-34 | reason: tone — window deco blocks as combat-tier loot is a mismatch; players finding arrow slits in a chest would not read as a reward
CUT   | mcwwindows various → loot-seed into structure chests | untagged | reason: no-method — window variants in loot create no cross-system demand; no motif fits
CUT   | mcwwindows:*_log_parapet (wood) → create:crushing M-04 | M-04 | reason: no-method — M-04 is explicitly metal/stone deco; log parapets are wood; wrong material family; REJECT
CUT   | mcwwindows curtain/mosaic glass → any Create chain | M-12/M-04 | reason: duplicate — all textile/glass routes already CUT above; fold remaining single-pass phrasings into those CUTs

---

## naturalist  — slate: 4 KEEP / 12 CUT / 2 MERGE / 0 DEFER   | anchors after: create + magic + survival + economy (now 4)

KEEP  | naturalist:venison + bushmeat → farmersdelight:cutting / cooking (M-12) | motif M-12 | delivery: recipe (wild game from FD cutting board → venison steak/strips/stew/chops; bushmeat → strip cuts and lard; times_suggested=13+4+3, ACCEPT majority, opus-corroborated ×3) | milestone: v0.13.0 | why "of course": hunted meat goes from carcass to plate through the same kitchen tools as farmed meat — the food web is obviously where wild game belongs

KEEP  | naturalist:antler → ars_nouveau:imbuement (M-10) / occultism:spirit_fire (M-11) | motif M-02 (mob-drop reagent sink) | delivery: recipe (shed deer antler as an arcane catalyst or spirit-fire reagent; times_suggested=15 imbuement + 5 spirit_fire, ACCEPT majority; note M-02 is the correct motif — antler is an isolated mob-drop given a magic sink) | milestone: v0.11.0 | why "of course": a naturally shed antler has classic arcane symbolism — lunar, bone-like, wildlife; routing it to both Ars and Occultism covers the magic pillar's two faces

KEEP  | naturalist:glow_goop → ars_nouveau:imbuement (M-10) | motif M-10 | delivery: recipe (firefly bioluminescence refined into a glowing arcane reagent; light-magic attunement input; times_suggested=12 ACCEPT majority; opus-corroborated ×1 partial) | milestone: v0.11.0 | why "of course": firefly glow is the most legible "of course this is magical" material in the mod — bioluminescent fluid becomes an Ars light-attunement reagent

KEEP  | naturalist large predator drops → economy M-34 (combat-route supply) | motif M-34 | delivery: emergent (bear, alligator, snake drops — dangerous enough that only combat players farm them reliably; bushmeat, bear fat, hides traded to non-combat players; times_suggested=2 ACCEPT) | milestone: v0.9.0 | why "of course": large predators are the hunter's premium output; the bear-fat and exotic hide trade is exactly the dangerous-fauna supply chain M-34 describes

CUT   | naturalist:antler → create:milling M-12 | M-12 | reason: depth — milling an antler to bone meal is a step down from the arcane reagent role (KEEP-2); antler-as-bone-meal devalues a distinctive drop; REJECT unanimous
CUT   | naturalist:shellstone / froglass → create:crushing M-04 | M-04 | reason: no-method — the dossier explicitly flags this as WEAK and arbitrary; vanilla-style deco with no distinctive material; lossy-recycling generic deco adds noise; REJECT majority across three phrasings
CUT   | naturalist:glow_goop → occultism:spirit_fire M-11 | M-11 | reason: duplicate-of KEEP-3 (glow_goop already routed to magic via M-10 Ars imbuement; stacking an Occultism spirit_fire route on the same material doubles the magic anchor without adding a second pillar)
CUT   | naturalist:glow_goop → create:mixing M-32 (glowing dye) | M-32 | reason: no-method — glow_goop as Create-mixed glowing dye has no coherent method routing; M-32 byproduct→input requires one process's waste to be another's feedstock; forced; ACCEPT=1 only
CUT   | naturalist:glow_goop → seasonal spawn M-16 (summer firefly gate) | M-16 | reason: duplicate — the seasonal scarcity of glow_goop is the background pressure on KEEP-3 (magic supply), not a distinct weave; the seasonal fact is ambient input to KEEP-3's demand
CUT   | naturalist:butterfly → ars_nouveau:summon_ritual / occultism M-11 | M-11 | reason: no-method — butterfly net-capturing mechanic registers naturalist:net, not a summoning type; routing captured butterflies into a ritual has no method delivery; REJECT
CUT   | naturalist:glow_goop → create:haunting M-19 | M-19 | reason: no-method — M-19 is create:haunting (soul-fire); glow_goop is bioluminescent organic fluid, not a soul-fire candidate; REJECT
CUT   | naturalist:venison / bushmeat → diet system M-26 | M-26 | reason: duplicate — M-26 consumption is already the implicit demand in KEEP-1 (FD cooking keeps demand alive because players eat daily); separate M-26 weave is redundant
CUT   | naturalist:venison / bushmeat → MineColonies cook hut M-28 | M-28 | reason: duplicate — KEEP-4 (M-34 combat/economy) and KEEP-1 (M-12 food processing) already establish the two anchors; adding M-28 on the same food items creates three anchors on one food surface; fold colony-supply into KEEP-1's output
CUT   | naturalist:venison / bushmeat → emergent trade M-34 | M-34 | reason: no-method — deer and boar are ambient non-boss fauna; M-34 requires boss/danger output farmed by a dedicated combat specialist; ambient hunting is not the dangerous combat-supply role; REJECT
CUT   | naturalist:glow_goop → create_enchantment_industry:grinding M-10 | M-10 | reason: no-method — grinding turns enchanted items into XP fluid; glow_goop isn't enchanted; no clean method routing; REJECT
CUT   | naturalist loot tables → coin loot-seed M-08 | M-08 | reason: retired-economy / tone — seeding coins into animal drops creates an incoherent fiction; REJECT
MERGE | naturalist:antler → M-02 mob-drop reagent sink (multiple phrasings: imbuement + spirit_fire) | into: KEEP-2 (antler M-02) | reason: all antler-magic phrasings converge on the same material→magic routing; M-02 is the correct motif label; the highest-times rows (15 imbuement, 5 spirit_fire) are both captured in a single delivery that routes to both Ars and Occultism
MERGE | naturalist wildlife seasonal behavior (bears hibernate, deer active autumn/spring) → M-16 | into: KEEP-1 (venison/bushmeat M-12) | reason: the seasonal spawn variation is the ambient pressure that modulates KEEP-1's food supply; it's not a distinct weave with a recipe delivery — it's a Serene Seasons config note that makes KEEP-1's demand spiky; fold

---

## ribbits  — slate: 2 KEEP / 14 CUT / 2 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | ribbits:toadstool / brown_toadstool → occultism:spirit_fire M-11 | motif M-11 | delivery: recipe (swamp-village fungi incinerated in spirit fire yield a foliot-grade essence or fungal reagent; times_suggested=2+1+1+1 ACCEPT across spirit_fire phrasings; opus-corroborated; thematically the strongest magic fit) | milestone: v0.11.0 | why "of course": swamp-grown toadstools are the archetypal witch's ingredient — Occultism's spirit furnace is exactly where they belong

KEEP  | ribbits amethyst-shard trade → economy M-08 (player-minted currency framing) | motif M-08 | delivery: config (Ribbit merchants accept amethyst shards; amethyst shards → Create-processed → Numismatics coin; swamp-biome settlement economically meaningful as a coin-feedstock region; times_suggested=7 across M-08 phrasings, ACCEPT majority, opus-corroborated) | milestone: v0.9.0 | why "of course": Ribbit merchants already run a barter economy in amethyst shards — that's the regional coin feedstock; settling swamp-adjacent gives a regional economic identity

CUT   | ribbits:toadstool → create:milling M-04/M-12 | M-04/M-12 | reason: no-method — toadstool is an unusual material but milling mushrooms into spores/powder is generic and adds almost no connection depth; REJECT majority (14 REJECT vs 2 ACCEPT in times_suggested=14 row); mossy oak is generic wood — same ruling
CUT   | ribbits:mossy_oak_planks → create:cutting M-04 | M-04 | reason: no-method — generic wood; M-04 for wood is low-value; REJECT majority (6 REJECT)
CUT   | ribbits:toadstool → ars_nouveau:imbuement M-10 | M-10 | reason: duplicate — toadstool already has magic anchor via M-11 (KEEP-1); adding Ars imbuement on the same fungi doubles the magic weave; 1-pass only; M-11 is the stronger fit (tone/method)
CUT   | ribbits:amethyst_shard → occultism:spirit_fire (amethyst dust tag) M-11 | M-11 | reason: no-method — the occultism amethyst-dust tag is an existing inbound tag, not a distinct weave from ribbits; routing the Ribbit-currency material into Occultism is handled by the existing occultism reagent graph; not a ribbits-specific weave
CUT   | ribbits:maraca → supplementaries:item_lore / M-33 service | M-33 | reason: no-method — the maraca is a player-held novelty; M-33 requires a player performing work on another's materials; the "musician Ribbit performs" idea has no method delivery; REJECT majority
CUT   | ribbits:toadstool → farmersdelight:cooking M-12 | M-12 | reason: depth — while mushroom stew is coherent, toadstool-as-ingredient is a one-hop food-only connection with no second pillar; the magic anchor (KEEP-1) is the stronger weave; FD cooking alone doesn't add a second system
CUT   | ribbits:swamp_lantern → create:crushing M-04 | M-04 | reason: no-method — decorative lantern crushing to a wax nugget is below the M-04 noise threshold; REJECT
CUT   | ribbits Ribbit sorcerer → ars_nouveau:enchanting / magic source M-10/M-33 | M-10/M-33 | reason: no-method — the sorcerer is an NPC granting buffs (not a player performing service); M-33 requires player-to-player labor; "sorcerer powered by Ars source" has no recipe delivery; REJECT majority
CUT   | ribbits → M-30 regional scarcity (swamp goods) | M-30 | reason: no-method — swamp goods are obtainable anywhere swamps spawn (not ore-region-locked); no genuine regional scarcity gate; REJECT
CUT   | ribbits swamp village loot → M-34 combat supply | M-34 | reason: tone — Ribbit villages are friendly, not combat zones; M-34 requires danger/combat output; REJECT
CUT   | ribbits sorcerer buff service → M-33 (NPC service) | M-33 | reason: no-method — the sorcerer is an NPC, not a player; M-33 is player-to-player; REJECT unanimous
CUT   | ribbits → M-29 (KubeJS trade-currency bridge tying shards to Numismatics) | M-29 | reason: duplicate — this is the delivery mechanism of KEEP-2 (M-08); restating it as M-29 cross-route adds nothing distinct; fold into KEEP-2
CUT   | ribbits amethyst shards → NPC coin-faucet (Ribbit merchants paying coin for shards) | M-08 | reason: retired-economy — if the coin flows FROM an NPC, that's M-21 (CUT: NPC coin faucet); KEEP-2 is framed as *player* mints shards → coin, not the merchant paying out; reject the faucet phrasing
CUT   | ribbits village chests → loot-seed magic scroll M-02 | M-02 | reason: no-method — seeding foreign mod items into Ribbit village chests via loot injection is not a Ribbits-specific weave; belongs on the magic mod that owns the scroll
MERGE | ribbits:toadstool M-11 phrasings (spirit_fire, occultism ritual, multiple) | into: KEEP-1 (toadstool M-11) | reason: near-duplicate across four phrasings with the same from→to and same method; keep highest-times_suggested ACCEPT phrasing; fold remainder
MERGE | ribbits amethyst-shard economy (multiple M-08 / M-29 phrasings) | into: KEEP-2 (M-08 amethyst→coin) | reason: multiple phrasings (M-08 ×4, M-29 bridge ×1) express the same amethyst→coin→economy link; keep highest times_suggested ACCEPT phrasing; fold remainder

---

## spawn  — slate: 3 KEEP / 22 CUT / 3 MERGE / 0 DEFER   | anchors after: create + magic + economy (now 3)

KEEP  | spawn seafood (clam, crab, anglerfish) → farmersdelight:cutting / cooking + create:milling (M-12) | motif M-12 | delivery: recipe (crab claw → Create-milled shell dust; clam → FD cutting; crab/clam deeper into feast chains; anglerfish → FD + milling; times_suggested=20+10+7+4+3 ACCEPT majority across seafood-processing phrasings, opus-corroborated ×2) | milestone: v0.13.0 | why "of course": wild seafood obviously goes from the ocean to the kitchen via the same cutting boards and mills as any other protein — the coastal harvest feeds the food-processing web

KEEP  | spawn:angler_fish → occultism:spirit_fire M-11 | motif M-11 | delivery: recipe (anglerfish abyssal lure transmuted in spirit fire into a light-magic reagent; times_suggested=4 ACCEPT, thematically coherent — deep-sea predator of darkness as occult material) | milestone: v0.11.0 | why "of course": an anglerfish's bioluminescent lure-organ is exactly the isolated mob-drop that earns a magic sink; the deep-sea creature of darkness belongs in Occultism

KEEP  | spawn clam/crab bulk catch → aeronautics logistics M-31 | motif M-31 | delivery: config (bulk coastal seafood is heavy and perishable at scale; trading it inland requires the logistics arm; times_suggested=6 ACCEPT majority, opus-corroborated) | milestone: v0.9.0 | why "of course": fresh catch in quantity is the canonical logistics cargo — the coastal settlement's output is exactly what airship cargo runs exist for

CUT   | spawn:date_log / date_planks → create:crushing M-04 | M-04 | reason: no-method — M-04 is for metal/stone deco; date palm wood crushing is generic wood handling; REJECT majority across four phrasings
CUT   | spawn:date_log / date_planks → create:cutting M-12 | M-12 | reason: no-method — vanilla-style wood sets already route through create:cutting via c:logs tag; no explicit weave candidate; REJECT
CUT   | spawn critter drops → ant_pupa / barnacle → occultism:spirit_fire M-11 | M-11 | reason: tone — ant pupae and barnacle chitin have no coherent lore hook in Occultism; forced organic→occult edge; REJECT majority
CUT   | spawn:angler_fish → ars_nouveau:imbuement M-10 | M-10 | reason: tone — no lore reason an anglerfish drop is an arcane reagent over any other fish; force-edge; REJECT unanimous
CUT   | spawn:clam → occultism:spirit_fire M-02/M-11 | M-02/M-11 | reason: no-method — clams are everyday ambient fauna; routing them through spirit_fire trivializes the method; REJECT majority
CUT   | spawn:angler_fish → create:haunting M-19 | M-19 | reason: no-method — haunting is soul-fire transmutation; anglerfish bioluminescence is not a soul-fire material; ACCEPT=1 only
CUT   | spawn exotic seafood → ars_nouveau:imbuement / occultism M-02 | M-02 | reason: tone — anglerfish/sea-cow/seal as generic arcane reagents is conceptually forced; the magic anchor (KEEP-2) via M-11 is sufficient; REJECT majority
CUT   | spawn seafood → MineColonies provisioning M-28 | M-28 | reason: no-method — colony provisioning demand for seafood is coherent but KEEP-1 (food processing) and KEEP-3 (logistics) already establish the two non-magic anchors; adding M-28 creates three economy-facing anchors on the same food surface; fold into KEEP-1's output
CUT   | spawn:date_bunch → vinery:apple_fermenting aged date wine M-35 | M-35 | reason: depth — while date wine aging is coherent (M-35 maturation), date_bunch is a crop output of a wood set; gating it behind a fermentation step adds depth to a non-primary product; 2-pass ACCEPT but low signal relative to the core seafood weaves
CUT   | spawn aquatic drops → Bountiful bounty objectives M-34 | M-34 | reason: no-method — M-34 is "combat-route supply — boss/danger output farmed and traded"; aquatic fauna are ambient non-boss; Bountiful bounty pools are an economy mechanic, not M-34
CUT   | spawn:casting_net_clam → aeronautics logistics M-31 (individual clams) | M-31 | reason: duplicate-of KEEP-3 (individual clam catches are too light for M-31; the KEEP-3 threshold is bulk perishable cargo at scale; fold casting-net individual clam into KEEP-1 food processing, not logistics)
CUT   | spawn:date_log / date_planks → aeronautics structural M-23 | M-23 | reason: no-method — M-23 requires load-bearing metal plates/beams; date-palm wood is a lightweight deco/building material; REJECT unanimous
CUT   | spawn:ant_pupa → ars_nouveau:imbuement M-10 | M-10 | reason: tone — insect larvae have no arcane surface in Ars Nouveau's nature-school aesthetic; REJECT
CUT   | spawn clam color variants → ars_nouveau M-10 (colored shell fragments) | M-10 | reason: tone — color-variant clam shells as arcane materials is forced; REJECT
CUT   | spawn:angler_fish → M-07 attunement catalyst (lure-organ) | M-07 | reason: no-method — M-07 is reserved for galosphere allurite/lumiere shards as attunement catalysts; an anglerfish lure-organ is not in the attunement-catalyst role; REJECT
CUT   | spawn:clam → regional scarcity M-30 (coastal biome gate) | M-30 | reason: no-method — clam spawns at any coast, not in a hard regional ore-gen boundary; M-30 requires GTMOGS-style ore-gen locking; ambient biome presence is not the same as the scarcity foundation
CUT   | spawn seafood → createfisheryindustry:bait_trap M-12 | M-12 | reason: no-method — dossier rates createfisheryindustry connection WEAK; the connection is mechanical overlap rather than pillar-crossing; REJECT majority
CUT   | spawn:clam_case_* shell blocks → create:crushing M-04 | M-04 | reason: no-method — M-04 for decorative shell blocks crushing to gravel+XP is technically valid but below noise threshold; REJECT
CUT   | spawn dossier candidate "aeronautics via createfisheryindustry" | M-12 | reason: no-method — createfisheryindustry is a separate mod; the aeronautics framing routes through a different mod entirely; REJECT
CUT   | spawn:date (date_bunch) → vinery / extradelight ferment M-12 (luxury food/coin) | M-12 | reason: retired-economy — "sell date wine for coin" is M-09 ambient endpoint; fold into context; 1-pass only
MERGE | spawn:crab shell → create:milling (shell dust as intermediate) | into: KEEP-1 (M-12 seafood processing) | reason: shell dust / chitin powder from Create milling is the same seafood-processing web as FD cutting; fold into KEEP-1 delivery (single delivery covers crab-milling + FD-cutting as combined recipe route)
MERGE | spawn:angler_fish M-11 / M-02 phrasings (spirit_fire, ritual, lure-organ magic) | into: KEEP-2 (angler_fish M-11) | reason: all anglerfish-magic phrasings converge on the same material→occult routing; keep the spirit_fire M-11 phrasing (strongest theme fit); fold M-02 lure-organ variants
MERGE | spawn exotic seafood (sea_cow, seal) occultism M-02 | into: KEEP-2 (angler_fish M-11) | reason: sea_cow blubber and seal drops as occultism ritual reagents are near-duplicate of the anglerfish magic route; the deepest/most distinctive aquatic magic drop is the anglerfish; fold others into same delivery

---

## terralith  — slate: 3 KEEP / 5 CUT / 1 MERGE / 0 DEFER   | anchors after: magic + economy + aeronautics (now 3)

KEEP  | terralith biome c:tags (65) → GTMOGS regional ore-gen M-30 | motif M-30 | delivery: config (Terralith's 95 biomes are the hooks GTMOGS ore-gen datapacks use to scatter regional metals into distinct biome clusters; the scarcity foundation is only as good as the biome map it keys off; times_suggested=3 ACCEPT, unanimous) | milestone: v0.9.0 | why "of course": Terralith defines *where* regional ores appear — without the biome diversity, regional scarcity is just depth-layer locking; Terralith makes the geography meaningful

KEEP  | terralith rare/fantastical biomes (Skylands, Moonlight Grove, Mirage Isles) → aeronautics logistics M-31 | motif M-31 | delivery: config (Skylands and floating terrain biomes are only reliably accessible by airship; the biomes that require flight to settle make the logistics arm mandatory for their resources; times_suggested=3 ACCEPT) | milestone: v0.9.0 | why "of course": "the Skylands are charted on the map — the only crew who harvests them regularly has an airship"; the fantastical terrain gives aeronautics a territorial reason to exist

KEEP  | terralith Moonlight Grove / lunar biomes → magic M-22 (lunar/celestial reagent gate) | motif M-22 | delivery: config (a magic reagent — e.g. galosphere lumiere shard variant, or a custom night-bloom herb — spawns exclusively in Terralith's sky/moon biomes; lunar-event gating + biome exclusivity = double-gated reagent; times_suggested=6 ACCEPT majority) | milestone: v0.11.0 | why "of course": a biome called Moonlight Grove is the obvious home for a lunar-gated magic ingredient — biome-exclusive magic supply makes Terralith's fantastical terrain economically meaningful

CUT   | terralith biome variety → loot-seed coin / economy M-08 | M-08 | reason: retired-economy — Terralith has no bespoke loot tables (loot=yes refers to vanilla structure tables placed in Terralith biomes); seeding coins into vanilla chests is ambient; REJECT majority
CUT   | terralith biomes → M-16 seasonal reagent (Serene Seasons crop gate) | M-16 | reason: no-method — M-16 requires a season-gated crop or material; Terralith defines biomes but contributes no items or recipes of its own; the season+biome combination is captured in KEEP-3 (M-22 lunar gate + biome exclusivity); REJECT majority
CUT   | terralith biomes → loot-seed (rare-biome terrain) | untagged | reason: no-method — Terralith has no bespoke loot tables to seed into; its loot=yes flag is for vanilla structure tables; REJECT unanimous across two phrasings
CUT   | terralith → recipe (any) | untagged | reason: no-method — Terralith is data-only (no own items, no recipes); recipe delivery is wrong for a worldgen mod; REJECT
CUT   | terralith biomes → M-34 combat-route supply (loot-seed structures) | M-34 | reason: no-method — Terralith has no structures or loot tables of its own; REJECT
MERGE | terralith biome scarcity M-30 (economy-end phrasing) | into: KEEP-1 (M-30 ore-gen config) | reason: near-duplicate phrasing from the economy side vs. the ore-gen side; same delivery (GTMOGS config keying off Terralith biomes); fold

---

== BATCH COMPLETE ==
