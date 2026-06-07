# Phase 2 candidates — chunk-15

## bountiful   [anchors: economy (1)]
- from: bounty turn-in pool (any modded item) | via: config/data — Decree pools seeded with Numismatics coin rewards | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty board pays Numismatics coin instead of gold ingots — first faucet for the player-run currency and the canonical M-14 implementation.
- from: bounty objective pools | via: config/data — Decree objectives seeded with seasonal farm/fish/hunt items | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: bounty boards demand produce that's only harvestable in the right season, so Serene Seasons drives real economic demand rather than just aesthetics.
- from: bounty objective pools | via: config/data — Create-processed goods (iron sheets, cogwheels, brass) as fetch objectives | to: create | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the shop wants fabricated parts — surplus from the Create spine converts into coin via bounty turn-in.
- from: bounty objective pools | via: config/data — mob-drop objectives (boss drops, BIC dark_metal, Cataclysm drops) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: dangerous mob grinds pay off directly at the bounty board — combat effort becomes coin.
- from: bounty payout | via: config — magic reagent payout (ars source_gem) for rare bounties | to: magic | motif: M-01 | power: endgame | tone: ok | verdict: REJECT | reason: reagent-ownership — source_gem is the universal magic currency hub (M-01 reserved); handing it out as a bounty payout would break the scarcity of the magic currency. Keep payouts in Numismatics coin.
REWORK: existing connection description says only "economy" — the Numismatics binding (M-14) is the right existing connection and appears sound. OK — connections sound (the M-14 coin-faucet reading is correct; deepen with the seasonal/mob-drop Decrees above for a 2nd anchor in survival).

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal ore runs through the ore crusher just like any other metal — the cursed metal enters the Create processing web with a nugget byproduct, tying the horror-mob loot into the tech spine.
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: bundles of bones from the undead horde transmute in spirit-fire into a necromantic intermediate — the spooky-organic drop feeds the Occultism magic chain, which is exactly the flavor both mods carry.
- from: born_in_chaos_v1:dark_metal (boss drop tier) | via: bountiful Decree objective | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal and horror-mob drops are valid high-value bounty objectives — dangerous mobs pay coin at the board.
- from: born_in_chaos_v1:bagof_candy / seasonal Pumpkinhead drops | via: loot-seed — seeding endrem eye variants into Pumpkinhead loot | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal boss (Oct 25–Nov 5) is the only source of a rare End portal eye — a time-locked progression key that makes the holiday event matter.
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing (M-04 lossy deco) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-03 (ore-doubling) already claimed the crush entry on dark_metal_deposit; adding M-04 on the same ore is redundant. One crush candidate per ore.
- from: born_in_chaos_v1 argillite blocks | via: create:crushing → gravel/raw stone | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the gothic build palette can be recycled through the ore crusher — builders recoup raw stone rather than wasting it, consistent with M-04 lossy-deco sweep.

## mcwroofs   [anchors: support/decoration (1)]
- from: mcwroofs stone/brick roof blocks | via: create:crushing → gravel + experience_nugget | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: 600 blocks make a wholesale crush-sweep impractical to author and low-value per block; the dossier itself flags this as WEAK. A bulk deco sweep belongs to a dedicated M-04 pass, not a targeted weave here. LEAVE unless a pack-wide deco-crush pass is scheduled.
LEAVE — pure decoration palette; no items that route through any non-M-04 method, and M-04 bulk-sweep is a maintenance task, not a targeted weave candidate.

## prickle   [anchors: support/library (1)]
LEAVE — zero-content config library; no items, no methods, no gameplay surface to weave.

## sparsestructures   [anchors: support/QoL (1)]
LEAVE — pure worldgen-config utility; no items, no methods, no content surface.

## ponderjs   [anchors: support/Create tooling (1)]
LEAVE — developer-infra / documentation tool only; no player-facing items or routable methods.

## resourcefullib   [anchors: support/library (1)]
LEAVE — pure API library; no items, no methods.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight crops (garlic, coffee beans, citrus) | via: create:milling → flour/ground coffee/zest | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Create millstone grinds coffee beans and malt grain into the extradelight flour/ground-coffee inputs — the bakery reads as Create's downstream, not a parallel kitchen.
- from: extradelight feast outputs (high-effort cooked dishes) | via: numismatics sell (config) or bountiful Decree reward | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a completed feast or rare confection is worth real coin — cooking effort converts into the player economy, tying the cuisine chain to trade.
- from: extradelight:evaporator / vat fluid-reduction outputs (syrups, salt, reduced brines) | via: create:mixing or create:filling as intermediate input | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Evaporator-reduced syrups feed Create mixing vats as flavoring intermediates — the kitchen and the factory share a fluid stage.
- from: extradelight coffee/garlic crops | via: M-16 seasonal gating — only harvestable in correct Serene Season | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: coffee and garlic are warm-season crops; their absence in winter creates real food-chain seasonality and drives demand planning.
- from: extradelight feast recipes | via: minecolonies colony-provisioning (feast as colony-supply item) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: MineColonies colonists eat — provisioning a colony with feasts boosts happiness, turning the kitchen grind into an infrastructure investment.
- from: extradelight:oven / mortar-pestle outputs (spice powders, herb pastes) | via: ars_nouveau:imbuement as a catalyst component | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: theme-fit red-team — herb pastes as arcane catalysts strains credibility for a rustic-agrarian kitchen mod; the Ars infusion aesthetic is crystalline/arcane, not culinary. Forced edge.
REWORK: existing Create anchor records create:mixing as inbound — that is the right weave (fluids/batter via Create mixer). The create:milling grain→flour extension above deepens this same seam correctly. OK — core connections sound; accepted candidates above add depth rather than replacing them.

## yungsapi   [anchors: support/library (1)]
LEAVE — pure API library for YUNG's structure mods; no gameplay surface.

## shulkerboxtooltip   [anchors: support/QoL (1)]
LEAVE — pure client-side tooltip renderer; no items, no methods.

## jamlib   [anchors: support/library (1)]
LEAVE — pure API/config library; no items, no methods.

## sable_sa_compat   [anchors: support/compat (1)]
LEAVE — compat glue patch between Create: Stuff 'N Additions and Sable; no content surface.

## fluid   [anchors: Create, aeronautics (2)]
- from: fluid:centrifugal_pump (copper/brass tier) | via: create:deploying / mechanical_crafting — already made through Create; deepening to M-23 | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: the centrifugal pump is a required component in ship fuel/fluid systems — an airship's fuel line needs a pump rated for the engine's draw, so the fluid logistics tier is structurally demanded by aeronautics builds.
- from: fluid:smart_fluid_interface | via: M-24 drivetrain — gating smart ship fluid control behind the interface | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: M-24 is for mechanical/drivetrain components (rotors, bearings, engines); a fluid interface is a logistic part, not a propulsion/control component. Wrong motif for the content; already covered by M-23 (structural/plumbing) or the existing aeronautics anchor.
- from: fluid:neon_tube (decorative output) | via: create:crushing → glass shards (M-04 lossy) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: neon tubes are a small decorative line; a crush route is trivial and adds no meaningful loop feed. Not worth authoring.
REWORK: existing anchors (Create + aeronautics) are sound — the fluid logistics parts are created through Create and extend Create's fluid network onto ships. OK — connections sound.

## spawn   [anchors: survival (1)]
- from: spawn clam / crab / anglerfish drops | via: farmersdelight:cutting + create:milling → processed seafood dishes | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: clams and crab go through the Create mill or FD cutting board into the food-processing chain — the aquatic fauna feed the industrial kitchen, not just the campfire.
- from: spawn exotic aquatic drops (color-variant clams, angler lure) | via: bountiful Decree objective (fetch clam color variant) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: rare colored clams and exotic fish are prized trade goods — a bounty board demands them, giving fishing a coin payoff beyond food.
- from: spawn:angler_fish (bioluminescent mob) | via: ars_nouveau:imbuement — angler lure as a light-magic catalyst | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: theme red-team — angler fish are naturalistic cave-fauna; routing them as arcane reagents is a stretch. The mod's vibe is "cute critters," not occult ingredients. No strong precedent in the pack.
- from: spawn:date_log / date_planks (new wood set) | via: create:cutting → date planks/beams | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: date palm timber runs through the sawmill like any other wood — a new wood type naturally enters the Create woodworking chain.
REWORK: existing survival anchor is thin (FD bridge only). The M-12 processing-chain pull (clam/crab into food chain + sawmill for date wood) adds the Create 2nd anchor. OK once those accepted candidates are authored.

## kubejs   [anchors: support/tooling (1)]
LEAVE — the scripting engine used to author all weaves; not itself a weave target.

## libipn   [anchors: support/library (1)]
LEAVE — pure GUI/config library dependency of IPN; no content surface.

## patchouli   [anchors: support/docs (1)]
LEAVE — guide-book framework only; the shapeless_book_recipe type just crafts books, no material sink worth weaving.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye (exploration-scarce drop) | via: occultism:ritual → transmutation of a necromantic reagent stack into the eye | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a player stuck without the undead eye can complete it through an expensive Occultism ritual — the dead-end case has a costly craft path, and the ritual flavor (undead essence → eye) is thematically tight.
- from: endrem:magical_eye (arcane variant) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the magical eye is the one that belongs in an arcane apparatus — spending source gems and magic materials to forge it is coherent; it ties End access to the Ars Nouveau chain without trivializing exploration.
- from: endrem:nether_eye | via: create:sequenced_assembly (M-06 keystone) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: red-team on scope — the exploration intent of Endrem is that you *find* eyes in the world; a sequenced-assembly craft path for the nether eye makes the nether biome loot table unnecessary and undercuts the mod's design premise. Keep craft fallbacks to magic rituals (which feel like a last resort), not the Create tech spine. One or two magic routes is enough; don't also add a tech route or the exploration gate collapses.
- from: endrem eyes (loot=yes) | via: loot-seed — seeding one rare eye variant into pack structure loot (e.g. BIC structures, Cataclysm boss chest) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hardest eyes appear only in dangerous structures — defeating a Cataclysm boss or clearing a BIC dungeon is the natural way to find the rarest portal keys.
REWORK: no existing connections beyond vanilla loot. The accepted candidates above build the magic 2nd anchor (M-11 ritual + M-10 apparatus) and a survival boss-key loot-seed (M-15). The M-06 Create route was rejected to protect the exploration intent.

## openpartiesandclaims   [anchors: support/server protection (1)]
LEAVE — chunk-claim/protection server framework; no items, no methods, no content to weave.

## do_a_barrel_roll   [anchors: support/client QoL (1)]
LEAVE — pure clientside elytra flight-feel overhaul; no items, no blocks, no routable content.

== CHUNK COMPLETE ==
