## alcohol_industry  — slate: 4 KEEP / 14 CUT / 8 MERGE / 0 DEFER   | anchors after: create / survival / magic / economy (now 4)

KEEP  | alcohol_industry→economy | motif M-28 | delivery: config (MineColonies tavern/inn building requests bottled spirits as upkeep; distillery specialist is designated supplier) | milestone: v0.9.0 | why "of course": colony tavern drinks through the supply faster than anyone brews alone
KEEP  | alcohol_industry→survival | motif M-12 | delivery: recipe (spirits/beer as a solvent/ingredient in ExtraDelight vat reductions and sauce intermediates) | milestone: v0.13.0 | why "of course": deglaze a sauce with whiskey — the distillery feeds the kitchen
KEEP  | alcohol_industry→magic | motif M-10 | delivery: recipe (irons_spellbooks:alchemist_cauldron_brew accepting a distilled spirit as the cauldron base for higher-potency brews) | milestone: v0.11.0 | why "of course": alchemists have always wanted a high-proof spirit as a solvent; the cauldron takes it as a brew base
KEEP  | alcohol_industry→economy | motif M-35 | delivery: recipe (raw-distilled spirits gain a maturing step in create_cheese:maturing or extradelight:evaporator before final bottling; aged bottles are a distinct output) | milestone: v0.9.0 | why "of course": whiskey that sits earns its premium — the aging specialist times the run

MERGE | alcohol_industry:finished liquors (beer/vodka/whiskey/tequila) as repeating consumables M-26 | into: M-28 KEEP | reason: colony tavern demand already captures the consumption-sink pressure; a second sink entry for "player drinks them for buffs" is ambient, not a new weave edge
MERGE | alcohol_industry:whiskey/tequila (raw-distilled) → create_cheese:maturing rows (×3) | into: M-35 KEEP | reason: all three rows describe the same maturing step with slightly different phrasings; prefer the ACCEPT×2 opus-adjacent row
MERGE | alcohol_industry:alcohol_base fluid (M-29 cross-route dependency via irons_spellbooks) | into: M-10 KEEP | reason: the iron's cauldron KEEP already captures the cross-route logic; a separate M-29 re-entry double-counts the same seam
MERGE | alcohol_industry finished spirits as colony-requested luxury (×3 lower-suggest rows) | into: M-28 KEEP | reason: near-duplicates of the tavern-demand KEEP; prefer the 3-suggest row
MERGE | alcohol_industry:alcohol_base fluid → extradelight:vat solvent (×2 rows, spirits/beer) | into: M-12 KEEP | reason: both express the same vat-solvent link; prefer the 2-suggest ACCEPT row
MERGE | alcohol_industry:alcohol_base (M-35 — alcohol_boiling IS the maturation, 1 row) | into: M-35 KEEP | reason: near-duplicate framing of the same aging weave
MERGE | alcohol_industry:whiskey/vodka/tequila → extradelight:vat/evaporator (M-12 survival, 2 rows) | into: M-12 KEEP | reason: same pillar, same delivery method as the kept row
MERGE | alcohol_industry:beer/vodka/whiskey/tequila → create:sequenced_assembly as aging step (1 row M-35) | into: M-35 KEEP | reason: sequenced-assembly framing is a valid delivery alternative but describes the same aging-value link

CUT   | alcohol_industry:alcohol_base → create:mixing (as further Create input) | motif M-12 | reason: circular — alcohol_base is already assembled *via* create:mixing/filling; making it a further Create input is self-referential (REJECT×2 dominant)
CUT   | alcohol_industry:alcohol_base → ars_nouveau:imbuement / occultism:ritual (×4 rows) | motif M-10 | reason: REJECT-dominant (4:4 split); spirits as arcane catalyst has no grounding in the pack's magic reagent vocabulary (Ars/Iron's use crystalline/organic esoteric materials); tone clash
CUT   | alcohol_industry:tequila/whiskey → tfmg:distillation (×5 rows) | motif M-12/M-32 | reason: TFMG distillation processes petroleum/industrial fluids — routing potable spirits through an industrial petroleum column is a tone mismatch; REJECT dominant on all rows
CUT   | alcohol_industry:alcohol_base/spirits as fuel → createaddition:liquid_burning (×2 rows) | motif M-13 | reason: the mod's spirits are modeled as drinkable goods, not fuels; cross-namespace fluid compatibility unconfirmed; REJECT dominant
CUT   | alcohol_industry:alcohol_base → create:haunting (M-19) | reason: haunting is soul-fire themed; routing liquor through soul-fire is incoherent; REJECT
CUT   | alcohol_industry:whiskey/vodka → emergent aeronautics cargo (M-31) | reason: 1 suggest, thin; the M-28 colony route already creates the demand pressure that would drive logistics; a separate logistics-required framing needs a stronger signal
CUT   | alcohol_industry:whiskey/vodka regional-flavor emergent trade (M-30) | reason: 1 suggest; regional scarcity of grain inputs is ambient world design, not an authored weave edge; no delivery mechanism
CUT   | alcohol_industry distillation waste → minecolonies:composting (M-32) | reason: no registered byproduct output — the Alcohol Boiler produces only finished spirits; a byproduct would require custom authoring not in scope; REJECT
CUT   | alcohol_industry:alcohol_base → create:mixing with seasonal-gated crop (M-16) | reason: 1 suggest; Serene Seasons does not gate grain crops by season in a mechanic way that creates genuine scarcity; the link is ambient farming flavour, not a mechanical gate
CUT   | alcohol_industry:beer (grain ferment) Serene Seasons seasonal crop gating (M-16, 2 rows) | reason: same as above; seasonal framing is flavour, not a mechanical stop on production; 1-2 suggests only


## cmpackagecouriers  — slate: 2 KEEP / 8 CUT / 4 MERGE / 0 DEFER   | anchors after: economy (aeronautics/logistics arm) (now 2)

KEEP  | cmpackagecouriers→economy | motif M-31 | delivery: config/gameplay (cardboard plane carries Create packages between bases; designated as the aeronautics logistics arm for bulk-good delivery at scale) | milestone: v0.9.0 | why "of course": the only way to ship a crate of aged whiskey across a 10-player map is by courier plane
KEEP  | cmpackagecouriers→economy | motif M-33 | delivery: config/gameplay (portable_stock_ticker enables a logistics-specialist to run a courier service; other players place remote orders and pay for delivery) | milestone: v0.9.0 | why "of course": the player who maintains the beacon network and flies the routes is the pack's postal service

MERGE | cmpackagecouriers:cardboard_plane carrying Create packages (M-29 cross-route framing, 4+2+1+1 rows) | into: M-31 KEEP | reason: the cross-route dependency angle reduces to "courier moves goods between routes" — that is exactly M-31 logistics-required; prefer the cleaner motif
MERGE | cmpackagecouriers:cardboard_plane M-28 colony courier office (1 row) | into: M-31 KEEP | reason: colony inter-supply runs are a subset of the logistics-required bulk-good framing
MERGE | cmpackagecouriers:location_transmitter chunkload + colony gate (M-28, 1 row) | into: M-33 KEEP | reason: the chunkloaded-transmitter requirement is what makes the service-for-hire role sticky; fold into the M-33 framing rather than a separate edge
MERGE | cmpackagecouriers:cardboard_plane → numismatics (M-08, 1 row) | into: M-31 KEEP | reason: the economy link is the logistics function, not coin-minting; M-08 is player-minted currency from metal, not from delivery fees

CUT   | cmpackagecouriers:location_transmitter → create:mechanical_crafting (M-05, 4 rows) | reason: REJECT×4 dominant; the transmitter is an everyday internal component, not a flagship item; M-05 is for a mod's flagship machine gated on Create parts
CUT   | cmpackagecouriers:cardboard_plane recipe → create:sequenced_assembly (M-06, 2 rows) | reason: REJECT dominant; the plane is a mid-tier courier item, not an endgame keystone; sequenced assembly would gate a basic logistic tool behind a deep chain (depth rule violation)
CUT   | cmpackagecouriers:cardboard_plane M-24 drivetrain component (3 rows) | reason: REJECT×2 dominant; the plane IS the aeronautics anchor — it doesn't need a drivetrain-component weave on top of its functional role
CUT   | cmpackagecouriers:cardboard_plane M-18 summoned-spirit logistics (1 row) | reason: M-18 is Occultism dimensional miner-spirits; cardboard-plane airmail is not this motif; misfit
CUT   | cmpackagecouriers:cardboard_plane M-20 deploy-upgrade (1 row) | reason: no coherent deploy-onto-a-base role; the plane is a deployable item, not an upgrade applicator; REJECT
CUT   | cmpackagecouriers:location_transmitter → create:deploying M-20 (2 rows) | reason: the transmitter is already made via create:cutting+deploying (existing inbound); re-stating it is not a new weave
CUT   | cmpackagecouriers:cardboard_plane structural-tier upgrade M-23 (1 row) | reason: the plane is everyday/mid tier; gating it behind a structural alloy chain violates depth-scales-with-power (basics cannot be deep)
CUT   | cmpackagecouriers:cardboard_plane M-30 cross-region delivery (1 row) | reason: M-30 gates a good's *input* by ore-gen region; the courier is the transport mechanism, not a regionaly-scarce good itself; misfit motif


## cmparallelpipes  — LEAVE (pure Create-addon plumbing tool; all candidates are Create-internal — pipe wrench crafting variations with no cross-system surface; all rows REJECT-dominant; no second anchor achievable)


## create_enchantment_industry  — slate: 3 KEEP / 18 CUT / 12 MERGE / 1 DEFER   | anchors after: create / magic / economy (now 3)

KEEP  | create_enchantment_industry→magic | motif M-10 | delivery: recipe (liquid XP / experience_bucket piped as the fuel/cost for ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew brews — factory-pumped XP powers spellcraft) | milestone: v0.11.0 | why "of course": you bottled experience; of course the wizard wants it for the ritual
KEEP  | create_enchantment_industry→economy | motif M-37 | delivery: recipe/config (printer produces written/copied books; MineColonies research that unlocks colony building tiers requires printed-book inputs — knowledge has a cost) | milestone: v0.9.0 | why "of course": the colony library can't advance without books, and the factory is the only printer in town
KEEP  | create_enchantment_industry→economy | motif M-33 | delivery: gameplay/config (automated Blaze Enchanter lets a specialist run enchant-for-hire for other players; magic/survival players bring gear and pay for the service) | milestone: v0.9.0 | why "of course": the enchanting factory is the pack's commercial enchanting bureau

DEFER | create_enchantment_industry:blaze_enchanter / hyper-enchant tier | motif M-15 | →build #220 (KubeJS boss/colony gate on cap-breaking hyper-enchantment is a design decision for the locked-exclusive list, not a standalone weave; route to the unlock-gate build task)

MERGE | create_enchantment_industry liquid XP → occultism:ritual fuel (M-29, M-11, M-18 rows, ×8 rows) | into: M-10 KEEP | reason: all describe the same XP→magic bridge through different ritual methods; the M-10 KEEP covers the pillar cleanly; prefer a single clean routing
MERGE | create_enchantment_industry:experience_bucket → irons_spellbooks:alchemist_cauldron_brew (M-17 rows, ×3) | into: M-10 KEEP | reason: M-17 is FE-charging; liquid XP is not FE — the motif is M-10; these are mis-tagged duplicates of the kept row
MERGE | create_enchantment_industry:super_experience_nugget → ars_nouveau:enchanting_apparatus (M-10, 2 rows) | into: M-10 KEEP | reason: super-XP nuggets as a dense reagent on the Ars apparatus is a subset of the liquid-XP magic bridge; prefer one clean edge
MERGE | create_enchantment_industry:blaze_enchanter output → occultism:spirit_fire (M-11, 2 rows) | into: M-10 KEEP | reason: dissolving surplus enchanted gear in spirit-fire is an interesting loop, but it deepens the magic pillar already covered; fold rather than a separate KEEP
MERGE | create_enchantment_industry:printer → enchanted books for occultism:ritual / ars apparatus (M-29, ×3 rows) | into: M-37 KEEP | reason: the printer's role is book copying; the M-37 KEEP (printer → colony research) already establishes the economy anchor; the magic-demand rows fold into the same printed-book demand pool
MERGE | create_enchantment_industry:blaze_enchanter enchant-for-hire rows (M-33, ×3 rows) | into: M-33 KEEP | reason: near-duplicates of the service-for-hire KEEP with slightly different phrasing; prefer the 2-suggest opus-adjacent row
MERGE | create_enchantment_industry:mechanical_grindstone → boss-gear strip + liquid XP trade (M-34, 1 row) | into: M-33 KEEP | reason: the grindstone-as-service (strip enchants for a fee) is a labor axis falling under service-for-hire; fold into M-33 rather than a separate combat-supply edge
MERGE | create_enchantment_industry:automated enchanting chain → MineColonies research gate (M-37, 1 row) | into: M-37 KEEP | reason: same anchor — Enchanter's Study unlocking colony building tiers; near-duplicate of the printer-book framing with a different narrative skin
MERGE | create_enchantment_industry:blaze_enchanter (consumes blaze rods → Nether-regional) M-30 (1 row) | into: M-10 KEEP | reason: the Nether-resource dependency is survival pressure context, not an authored weave edge; the M-10 KEEP already establishes the magic pillar; ambient scarcity is not a separate weave

CUT   | create_enchantment_industry:experience_bucket → occultism:ritual M-11 (6 rows, mixed) | reason: Occultism rituals use spirit_solution as their reserved reagent; routing liquid XP into Occultism specifically as M-11 ritual fuel conflicts with reagent ownership; the M-10 KEEP covers the magic bridge
CUT   | create_enchantment_industry:experience_cake → farmersdelight:cooking (M-12, 3 rows) | reason: REJECT×3; the experience_cake is a gimmick item, not a food — tone mismatch
CUT   | create_enchantment_industry:mechanical_grindstone internal (M-05/M-06, ×5 rows) | reason: all describe deepening the Create pillar internally; no second anchor added; the mod is already anchored to Create
CUT   | create_enchantment_industry liquid XP → create_new_age:energising (M-17, 2 rows) | reason: REJECT×2; Create New Age energises with FE, not XP fluid — type mismatch
CUT   | create_enchantment_industry liquid XP as aeronautics fuel (M-13, 2 rows) | reason: REJECT dominant; tone-clash + reagent-ownership conflict (aeronautics fuel is TFMG diesel/gasoline); XP is an arcane/progression resource
CUT   | create_enchantment_industry:printer → ars_nouveau:book_upgrade / enchanting_apparatus (M-05, ×3 rows) | reason: the Printer copies books mechanically; making Ars books require CEI-printed copies would gate a magic-progression item on a Create machine — depth rule violation for this tier
CUT   | create_enchantment_industry liquid XP → experience as fuel arbitrage / balance flag (1 row) | reason: flagged as balance rework concern, not a weave candidate
CUT   | create_enchantment_industry:super_experience_block/lantern → occultism ritual circle M-11 (1 row) | reason: XP-dense blocks as ritual circle material is thematic but no Occultism recipe type accepts structural blocks as circle inputs; no-method
CUT   | create_enchantment_industry loot-seed experience_lantern into dungeon loot (M-15, 1 row) | reason: M-15 is boss-drop gate, not loot-seed flavor; the experience_lantern is a CEI machine component, not a progression gate item; misfit motif
CUT   | create_enchantment_industry:experience_bucket → liquid XP burned for FE (M-32, 1 row) | reason: interesting byproduct idea but the createaddition:liquid_burning compatibility with CEI's XP fluid is unconfirmed; 1 suggest, thin; CUT pending confirmation
CUT   | create_enchantment_industry:printer → occultism:spirit_trade (M-18, 1 row) | reason: M-18 is summoned-spirit logistics; routing the Printer through spirit trade is a motif mismatch; REJECT


## createshufflefilter  — LEAVE (pure Create-internal automation utility — randomizes Deployer item-placement; all candidates REJECT-dominant across every pillar; no cross-system surface exists; forcing a weave would violate the basics cost rule)


## exposure  — slate: 3 KEEP / 13 CUT / 3 MERGE / 1 DEFER   | anchors after: create / economy (now 2; third anchor light)

KEEP  | exposure→economy | motif M-35 | delivery: recipe/config (photograph_aging method matures developed prints into aged photographs with higher trade value; a photographer who keeps a darkroom running long enough produces a scarcer, more valuable output) | milestone: v0.9.0 | why "of course": a photograph of a Nether fortress taken three in-game years ago is worth more than one from yesterday
KEEP  | exposure→create | motif M-29 | delivery: recipe (occultism silver dust + create:mixing produces silver-halide emulsion → exposure:black_and_white_film; the pack's only true silver is Occultism's, per CLAUDE.md gotcha — makes film production a cross-route dependency between magic and Create) | milestone: v0.7.0 | why "of course": real B&W photography needs silver halide; you can't make film without the occultist's silver
KEEP  | exposure→economy | motif M-33 | delivery: gameplay (a photographer player offers commissioned portraits — expedition shots, colony documentation, aged keepsakes baked into Supplementaries antique-books — as a service to other players) | milestone: v0.9.0 | why "of course": the player with the darkroom setup and the aged print collection is the pack's archivist-for-hire

DEFER | exposure:black_and_white_film (loot=yes) → loot-seed into structure chests (M-02, 1 row ACCEPT) | →playtest (thin single-suggest; the delivery is a datapack loot-table edit that needs human verification that the film item reads as meaningful exploration reward rather than clutter)

MERGE | exposure:aged_photograph → supplementaries:antique_book (M-33, ×2 rows) | into: M-33 KEEP | reason: the antique-book framing is the delivery mechanism for the photographer service; fold into the M-33 KEEP rather than a separate edge
MERGE | exposure:photograph (developed print) → aging rows (M-35, ×2 rows 2-suggest each) | into: M-35 KEEP | reason: near-duplicates of the aging KEEP; prefer the 7-suggest dominant row
MERGE | exposure:black_and_white_film → create:mixing silver (M-29, ×2 additional rows with same chemistry framing) | into: M-29/create KEEP | reason: all describe the same occultism-silver → film-emulsion cross-route; prefer the highest-clarity phrasing

CUT   | exposure:camera → create:sequenced_assembly (M-06, 8 rows) | reason: REJECT×6 dominant; the camera is already made via sequenced_assembly (existing inbound); proposing it again is a duplicate of the established Create anchor, not a new weave
CUT   | exposure:black_and_white_film → create:sequenced_assembly (M-06, 2 rows) | reason: film development via sequenced_assembly already EXISTS as the inbound weave; re-proposing it adds nothing
CUT   | exposure:gold_camera → ars_nouveau:imbuement (M-10, 2 rows) | reason: REJECT×2; imbuing a camera with arcane energy is tonally strained; gold camera is a material upgrade, not a magic item
CUT   | exposure:gold_camera → create:mechanical_crafting (M-20, 2 rows) | reason: REJECT dominant; adding a deploy-upgrade to a cosmetic camera variant has no loop-advancing value
CUT   | exposure:aged_photograph → ars_nouveau:imbuement (M-10, 2 rows) | reason: REJECT×2; aged photographs have no magical property; aging is a darkroom process; imbuing a photograph is non-sensical
CUT   | exposure:black_and_white_film → tfmg:distillation (M-29, 2 rows) | reason: REJECT×2; TFMG produces oil fractions, not photographic chemicals; the silver-halide tie is theme-only with no actual fluid join
CUT   | exposure:black_and_white_film → create:milling/crushing (M-03/M-04, 2 rows) | reason: crushing film to silver dust is thematically grotesque and mechanically thin; no player rationale
CUT   | exposure:black_and_white_film → create:mixing (M-12, 1 row) | reason: the Create anchor is established via sequenced_assembly; adding a mixing step would double-route the same pillar
CUT   | exposure:photograph → loot-seed (cosmetic, M-02, 2 rows) | reason: photographs are player-generated, not world-generated; seeding them in structure loot requires pre-generated images; no-method
CUT   | exposure:lightroom → loot-seed (M-02, 1 row) | reason: no coherent second-system hook; the lightroom's loot tables contain film/camera parts which don't advance any loop node
CUT   | exposure:film → create_new_age:energising (M-17, 1 row) | reason: "energised film" has no thematic role; darkroom chemistry and electrical charging are unrelated; REJECT
CUT   | exposure:black_and_white_film M-26 consumption sink (1 row) | reason: film consumption is ambient (every shot uses film) — it's the mechanic's inherent pressure, not a new weave edge; M-26 needs an authored consumption gate, not just "it gets used up"
CUT   | exposure:album → bountiful Decree bounty (M-37 mis-tagged, 1 row) | reason: motif mismatch — M-37 is research/knowledge gate; the correct motif would be M-26/M-28 but the signal is 1 suggest and no delivery mechanism exists


## mcwdoors  — slate: 2 KEEP / 11 CUT / 4 MERGE / 0 DEFER   | anchors after: create / economy (now 2)

KEEP  | mcwdoors→create | motif M-04 | delivery: recipe (iron/metal door variants — mcwdoors:*_iron_door, *_modern_door, *_glass_door with metal frame — crush back to iron nuggets + create:experience_nugget; lossy; scope: metal/iron variants only) | milestone: v0.7.0 | why "of course": a scrapped iron modern door gives back its metal at a small loss — Create doesn't waste, it recycles
KEEP  | mcwdoors→economy | motif M-28 | delivery: config (MineColonies Builder hut constructing Stable/Barn schematics requests door variants in bulk; colony pull makes a door-crafter role viable) | milestone: v0.9.0 | why "of course": the colony builder needs 40 barn doors for the new Stable schematic — automated production via Create saw is the only way to fill the order

MERGE | mcwdoors:*_iron_door / metal variants crushing rows (×5 additional rows, all M-04) | into: M-04 KEEP | reason: near-duplicates of the metal-crush KEEP with slightly different scope statements; prefer the 14-suggest dominant row
MERGE | mcwdoors:*_barn_door / cottage_door colony request (M-28, 1 row) | into: M-28 KEEP | reason: same colony-demand framing as the KEEP; fold into one edge
MERGE | mcwdoors:*_barn_door → create:cutting (M-12, 2 rows) | into: M-28 KEEP | reason: the cutting route (Create saw produces door shapes for colony bulk orders) is the *delivery* for the colony demand, not a separate anchor; fold into M-28's delivery note
MERGE | mcwdoors:*_modern_door / garage variants → colony M-28 (1 row) | into: M-28 KEEP | reason: same motif, same delivery; duplicate framing

CUT   | mcwdoors wooden door variants → create:crushing (×4 rows) | motif M-04 | reason: wooden doors have negligible raw-material value; crushing wood deco to planks/sticks adds noise with minimal Create feedstock value; scope is metal only
CUT   | mcwdoors:*_barn_door / stable_door → farmersdelight:cutting (M-12, 1 row) | reason: tone clash — FD cutting is for food prep, not woodworking; REJECT
CUT   | mcwdoors:*_modern_door → create:mechanical_crafting (M-20, 1 row) | reason: REJECT; the existing vanilla crafting path is adequate; routing a decorative door through mechanical_crafting adds complexity without loop value
CUT   | mcwdoors:*_modern_door / metal → create:mechanical_crafting (M-05, 1 row) | reason: REJECT; power-tier mismatch — a decorative door does not justify mechanical-crafting gating
CUT   | mcwdoors nether/mystic door variants → magic reagent craft (blank motif, 1 row) | reason: gating a cosmetic door behind a magic reagent violates depth-scales-with-power (basic component rule); no-motif
CUT   | mcwdoors exotic wood logs → create:cutting → door blanks (M-12, 1 row) | reason: wooden doors are already craftable directly; the Create-cutting route adds a redundant intermediate with no loop benefit
CUT   | mcwdoors:*_japanese / mystic → create:cutting (M-12, 1 row) | reason: cutting a deco door into a smaller piece is not a meaningful production step; M-12 requires a useful intermediate output
CUT   | mcwdoors wooden door variants "any door is a door" (M-04 mis-tag, 1 row) | reason: no-motif; wood doors have no cross-system hook that earns a second anchor; the metal-crush KEEP is the mod's one weave
CUT   | mcwdoors:*_glass_door / metal variants → create:crushing recycle (opus row, 1 row) | reason: marked "too thin to author alone; fold into pack-wide deco-crush family pass" in the hook; already covered by the metal KEEP
CUT   | mcwdoors:*_iron_* / metal crushing → XP nugget (additional low-suggest rows after MERGE above, 2 rows) | reason: duplicate of merged rows; already consolidated into M-04 KEEP
CUT   | mcwdoors wooden door variants special crafting (blank motif, 1 row) | reason: 250 wooden door variants exist in vanilla style; no-method and no loop benefit


## minecolonies_tweaks  — slate: 2 KEEP / 5 CUT / 3 MERGE / 0 DEFER   | anchors after: create / economy (now 2)

KEEP  | minecolonies_tweaks→create | motif M-12 | delivery: recipe (minecolonies_tweaks unified c:crops/* tags — corn, rice, soybean, tomato — let a single Create milling recipe cover all modded grain variants; one KubeJS tag-based milling recipe covers the whole crop web) | milestone: v0.7.0 | why "of course": one mill recipe, every modded grain — the tag surface this mod injects is the only reason it works at scale
KEEP  | minecolonies_tweaks→create | motif M-05 | delivery: recipe (inventoryscroll / copyscroll gated on Create brass component — printed brass circuit or brass sheet as a precision colonial logistics tool; the scroll that manages hundreds of colony items should cost real fabricated parts) | milestone: v0.7.0 | why "of course": a colonial inventory scroll that teleports to a warehouse of hundreds of items is a precision instrument; it costs brass

MERGE | minecolonies_tweaks c:crops/* → create:milling + minecolonies colony requests (M-28, 1 row) | into: M-12 KEEP | reason: the colony farm-hut requesting tagged crops is the demand side of the milling weave; fold into M-12's delivery context
MERGE | minecolonies_tweaks c:foods/* tags → farmersdelight:cooking + diet system (M-12, 1 row) | into: M-12 KEEP | reason: the food-tag surface enabling FD cooking is the same tag-injection mechanism as the crop-milling KEEP; one edge covers both
MERGE | minecolonies_tweaks:inventoryscroll consumed on use (M-26 consumption, 1 row) | into: M-05 KEEP | reason: scroll consumption is the natural demand mechanism for the M-05 gated item; fold into the KEEP's delivery note (scrolls are consumable → repeating Create-brass demand)

CUT   | minecolonies_tweaks c:crops/rice or c:crops/corn → farmersdelight:cooking (M-12, 1 row) | reason: redundant with the milling KEEP; same pillar, same delivery; one clean link is enough
CUT   | minecolonies_tweaks:inventoryscroll → create:mechanical_crafting (M-05, 1 row) | reason: REJECT; scrolls are handheld colony management tools, not machines; mechanical_crafting is for power-tier items
CUT   | minecolonies_tweaks:inventoryscroll → colony workflow (M-28, 1 row) | reason: the scroll IS the colony tool — routing it to M-28 colony-demand is self-referential; the M-05 KEEP (brass-gated scroll) is the correct anchor
CUT   | minecolonies_tweaks as pure support/QoL role (M-12 mis-tag, 1 row) | reason: while the tag-unification is real, flagging the mod itself as a weave node is metadata, not a recipe edge; the M-12 KEEP captures the actionable link
CUT   | minecolonies_tweaks:component_merge_shapeless → economy M-28 (1 row) | reason: component_merge_shapeless is an internal colony-QoL operation (merging partial stacks); not a cross-system link; REJECT


## rottencreatures  — slate: 4 KEEP / 15 CUT / 9 MERGE / 1 DEFER   | anchors after: create / magic / economy (now 3)

KEEP  | rottencreatures→magic | motif M-11 | delivery: recipe (frozen_rotten_flesh AND magma_rotten_flesh → occultism:spirit_fire transmutation into chilled/seared essence; themed undead drops become the magic lab's arcane input; cold-variant flesh for cryomantic reagent, fire-variant for ignition reagent) | milestone: v0.11.0 | why "of course": flesh flash-frozen in powder snow carries spectral cold; flesh seared by the Immortal's lightning carries residual heat-spirit — spirit fire extracts both
KEEP  | rottencreatures→magic | motif M-10 | delivery: recipe (corrupted_wart → ars_nouveau:imbuement; the twisted nether plant analog from undead mobs as a low-cost arcane infusion catalyst on the Ars apparatus) | milestone: v0.11.0 | why "of course": the corrupted fungal wart that blooms on swamp undead is already halfway magical; arcane imbuement takes it the rest of the way
KEEP  | rottencreatures→create | motif M-19 | delivery: recipe (magma_rotten_flesh → create:haunting on a soul campfire yields an infused smoldering reagent; the Create haunting method gives mob combat a Create-side output — soul-fire coaxes the residual heat-spirit out) | milestone: v0.7.0 | why "of course": soul-fire doesn't just roast it — it transmutes the magma taint into a create-native soul output
KEEP  | rottencreatures→economy | motif M-34 | delivery: loot-seed (Dead Beard's treasure_chest seeded with Numismatics coin denominations; Dead Beard and the Immortal boss drops are farmed by combat specialists and traded to non-combat players as reagents and premium items) | milestone: v0.9.0 | why "of course": a pirate captain's chest holds coin; a combat specialist hunting beach pirates and storm-liches earns currency and rare drops to trade

DEFER | rottencreatures:immortal (thunderstorm event, drops only during storms) | motif M-22 | →playtest (lunar/event-reagent motif accepted; the Immortal's storm-gated drops carrying "storm-charge" is thematically strong and fits M-22, but needs in-game verification that the Immortal has a unique harvestable drop and that Enhanced Celestials / storm event timing is reliable enough to use as a gate)

MERGE | rottencreatures:frozen_rotten_flesh → occultism:spirit_fire (×4 additional rows, M-11) | into: M-11 KEEP | reason: all describe the same spirit-fire transmutation of frozen flesh; prefer the 29-suggest dominant row
MERGE | rottencreatures:magma_rotten_flesh → occultism:spirit_fire (rows from 22-suggest cluster) | into: M-11 KEEP | reason: same motif, same delivery — fold the fire-variant into the dual-flesh M-11 KEEP
MERGE | rottencreatures:corrupted_wart → ars_nouveau:crush (M-02, 11 suggests) | into: M-10 KEEP | reason: Ars crush and Ars imbuement both route the wart into the magic pillar; prefer the imbuement (20-suggest) as the primary edge; crush is an alternative delivery to note
MERGE | rottencreatures:corrupted_wart → occultism:spirit_fire (M-11, 8 suggests) | into: M-11 KEEP | reason: the corrupted wart already has a stronger magic anchor via M-10 imbuement; routing it to spirit_fire would create two magic edges on the same item; fold into M-11 as an alternative delivery note
MERGE | rottencreatures mob drops → create:haunting (M-19, themed drops, 4 rows mixed) | into: M-19 KEEP | reason: all describe the same haunting seam for magma flesh; prefer the 10-suggest ACCEPT-dominant row
MERGE | rottencreatures:dead_beard treasure_chest M-08 coin seed (1 row) | into: M-34 KEEP | reason: coin seeding into the pirate chest is the delivery for the combat-supply economy anchor; fold into M-34
MERGE | rottencreatures:frozen_rotten_flesh M-10 imbuement (3 rows, mixed) | into: M-11 KEEP | reason: M-10 anti-rule applies — frozen_rotten_flesh is a low-rarity everyday drop; M-10 explicitly forbids gating basic components behind infusion; spirit_fire (M-11) is the correct transmutation for this material
MERGE | rottencreatures:immortal_head → create:haunting (M-19, 1 row) | into: M-19 KEEP | reason: lightning-charged head through haunting is thematically adjacent to the magma-flesh haunting; fold into the M-19 KEEP as a scope note

CUT   | rottencreatures:frozen_rotten_flesh → create:haunting (M-19, 15 rows REJECT dominant) | reason: REJECT×10 dominant; frozen flesh has an ice/cold vibe that tonally clashes with soul-fire transmutation; the spirit_fire path (M-11) is the correct receiver for cold-themed drops
CUT   | rottencreatures:frozen_rotten_flesh → create:crushing (M-02/M-04, 6 rows) | reason: REJECT×6; crushing rotten flesh produces trivially cheap bonemeal/gravel — no meaningful output; M-11 spirit_fire is the established path
CUT   | rottencreatures mob heads → create:crushing (M-04, 5+3+1+1+1 rows) | reason: REJECT dominant throughout; mob-head blocks are decorative trophies, not a deco-block palette; crushing a combat trophy to bone dust is thematically hollow
CUT   | rottencreatures:corrupted_wart → create:haunting (M-19, 1 row) | reason: REJECT; the wart's corrupted-fungal nature fits spirit_fire (occultism) far better; haunting is for magma/soul-themed materials
CUT   | rottencreatures:corrupted_wart → create:crushing (M-02, 2 rows, mixed) | reason: ACCEPT×1/REJECT×1; folded into the ars_nouveau crush MERGE above; a second Create-side edge for the same material is redundant
CUT   | rottencreatures:immortal drop → create_new_age:energising (M-17, 2 rows mixed) | reason: REJECT dominant; no confirmed unique Immortal drop beyond generic heads exists in the dossier; building an energising weave on an unconfirmed drop is premature
CUT   | rottencreatures:undead_miner ore drops (M-03, 1 row) | reason: 1 suggest, thin; building a loot-seed weave on an unconfirmed mid-tier drop requires dossier validation; CUT pending confirmation
CUT   | rottencreatures themed drops → create:haunting as haunt-into-soul deco (M-19, 1 row) | reason: the accepted M-19 KEEP already covers the haunting seam for magma flesh; a second haunting edge on mob heads for "soul-head deco" is a tone stretch and thin
CUT   | rottencreatures:frozen_rotten_flesh M-16 seasonal (Serene Seasons winter amplifies spawn, 1 row) | reason: 1 suggest; spawn-rate config is not an authored weave — it's a setting recommendation; no delivery method
CUT   | rottencreatures:frozen_rotten_flesh → create_dragons_plus:freezing (M-12, 1 row) | reason: 1 suggest; the freezing method is a narrow fan addition; routing an already-spirit_fire-bound drop through a second Create process adds redundancy without a clear second pillar
CUT   | rottencreatures:treasure_chest → create gate / boss schematic fragment (M-15, 1 row) | reason: the M-34 KEEP already establishes Dead Beard as a combat-economy source; gating a Create schematic behind a pirate chest requires authoring a unique boss-drop that doesn't exist in the dossier


## solmaiddream  — LEAVE (pure companion-stat addon over Touhou Little Maid; no cross-system item edge survives — every candidate is either no-motif, a config note, an ambient food-loop amplifier with no delivery mechanism, or thematically uncomfortable; the food-diversity mechanic is an ambient interaction with the existing food pool, not an authored weave)


## t_and_t  — slate: 4 KEEP / 15 CUT / 5 MERGE / 0 DEFER   | anchors after: economy / magic / aeronautics (now 3)

KEEP  | t_and_t→economy | motif M-08 | delivery: loot-seed (datapack — Numismatics coin denominations seeded into fort/tower armory chests and village chest loot tables; explorers find currency in the world, not just at a mint) | milestone: v0.9.0 | why "of course": conquerable forts and trade-port ships naturally carry coin
KEEP  | t_and_t→magic | motif M-02 | delivery: loot-seed (datapack — rare magic reagents seeded into conquerable-fort and ocean sail-ship loot: ars_nouveau:source_gem shard, irons_spellbooks:arcane_essence, occultism:silver_ore; exploration rewards adventurers with magic inputs) | milestone: v0.11.0 | why "of course": the captain's chest in the jungle outpost holds something the occultist needs
KEEP  | t_and_t→aeronautics | motif M-23 | delivery: loot-seed (datapack — treated canvas, structural sail-material, nautical schematics, or an aeronautics build-component seeded into ocean sail-ship hull loot; the maritime precursor to the airship pillar) | milestone: v0.9.0 | why "of course": the ship's hold contains the materials that inspire — and supply — the first airship build
KEEP  | t_and_t→economy | motif M-33 | delivery: config (Trading Floor stall block seeded into T&T biome-specific village structures; 16 biome variants give each biome a distinct trade identity — a jungle village offers different goods than a tundra one) | milestone: v0.9.0 | why "of course": the village is the natural place for a player to set up a trade stall; the structure already exists

MERGE | t_and_t conquerable fort loot → combat-route supply (M-34, ×4+3+1+1 rows) | into: M-08 KEEP | reason: the fort loot's economy value is captured by the coin-seed KEEP; the M-34 framing (Create components, premium items in fort chests) is an extension of the same loot-seed delivery; fold into M-08 with a scope note that fort loot can include non-coin pack-relevant items
MERGE | t_and_t biome-keyed loot (M-30, ×3+1+1 rows) | into: M-08 KEEP | reason: region-specific goods in biome-village chests are a delivery variant of the same loot-seed weave; the M-08 KEEP scope can include biome-keyed items alongside coin
MERGE | t_and_t sail-ship loot → aeronautics schematics (M-15 framing, 3 rows) | into: M-23 KEEP | reason: the sail-ship schematic/canvas drops are the delivery for the M-23 structural-material KEEP; M-15 requires a boss drop, which the sail-ship is not — retag to M-23 and fold
MERGE | t_and_t ocean sail-ship loot → TFMG fuel / aeronautics supply (M-26, 1 row) | into: M-23 KEEP | reason: fuel-canister loot in a ship's hold is a flavor variant of the same aeronautics-supply loot-seed; fold into M-23 scope
MERGE | t_and_t village loot → coin seed M-08 (fort/ship, 1 row) | into: M-08 KEEP | reason: near-duplicate of the dominant KEEP row

CUT   | t_and_t structures → aeronautics destination (no mechanical method, ×4 rows blank motif) | reason: no registered method connects a worldgen structure to the aeronautics pillar mechanically; flavor only; no-method
CUT   | t_and_t:conquered fort → MineColonies colony site (M-28, 3 rows REJECT dominant) | reason: MineColonies has its own colony-founding mechanic; "conquered fort becomes colony site" is world-design flavor advice, not an authored weave; REJECT dominant
CUT   | t_and_t conquerable outpost M-15 boss-key (6+2 rows) | reason: REJECT×6+1 dominant; the forts spawn pillagers, not unique bosses with signature drops; M-15 requires a boss drop as the gate item; motif mismatch
CUT   | t_and_t sail-ship loot → M-34 combat-route supply (2 rows) | reason: M-34 is combat-route supply (boss/danger farmed and traded); a static worldgen chest is exploration, not combat-route; motif mismatch
CUT   | t_and_t village structures → MineColonies colony integration flavor (2 rows, blank/M-15 mis-tag) | reason: worldgen-narrative adjacency, not a method-routed weave; no-method
CUT   | t_and_t ocean sail-ship → boss-key schematics (M-15, 1 row static structure) | reason: M-15 requires a boss drop; the sail-ship is a static structure, not a boss; REJECT
CUT   | t_and_t village chest loot → Create parts loot-seed (M-05, 1 row) | reason: seeding Create parts into loot is easier access to existing items, not a gating edge; M-05 requires a machine gated on Create parts as inputs
CUT   | t_and_t village structures → Numismatics bounty board seed (M-37 mis-tag, 1 row) | reason: motif mismatch — M-37 is research/knowledge gate; correct motif for bounty is M-26/M-28 but signal is 1 suggest with no delivery
CUT   | t_and_t village → bare "sellable location" (blank motif, 1 row) | reason: "a village is a trade hub" with no mechanic change is ambience, not a weave; no-method
CUT   | t_and_t as pure worldgen — no mechanical routing (×2 remaining thin rows) | reason: no-motif; ambient world design observation without an authored connection
CUT   | t_and_t village villager trades → villager-trade config (M-33, 1 row) | reason: the M-33 KEEP (Trading Floor stall config) already captures the trade-hub framing; re-implementing it through vanilla villager trades would be M-21 (NPC coin faucet — CUT per hard rules)
CUT   | t_and_t sail-ship → loot-seed aeronautics (M-15 again, 1 row) | reason: duplicate of the already-merged M-15 misfit; resolved in M-23 MERGE
CUT   | t_and_t conquerable fort → loot-table injection navigation chart (M-15 aeronautics, 1 row ACCEPT) | reason: interesting idea but M-15 requires a unique boss drop as gate item; a static fort's loot chart is not this; the M-23 KEEP already covers aeronautics loot-seeding from the sail-ship; overlap
CUT   | t_and_t village → minecolonies colony-expansion flavor (blank motif, 1 row) | reason: visual/thematic observation, not a method-routed edge; no-motif


## tide  — slate: 4 KEEP / 12 CUT / 7 MERGE / 0 DEFER   | anchors after: create / economy / survival / magic (now 4)

KEEP  | tide→create | motif M-12 | delivery: recipe (raw fish / fish scraps from farmersdelight:cutting → create:milling into fishmeal fertilizer; the fishing surplus feeds the Create processing chain; one mill recipe absorbs the entire biome-catch output as a Create feedstock) | milestone: v0.7.0 | why "of course": fish scraps from the cutting board go through the millstone as fishmeal — nothing is wasted on a proper Create line
KEEP  | tide→economy | motif M-30 | delivery: config/worldgen (biome-locked species — abyss_angler from deep ocean only, void-zone fish from danger biomes — are region-scarce; an inland player cannot catch them; they must trade with the coast specialist) | milestone: v0.9.0 | why "of course": only the angler stationed at a deep trench ever sees the abyss fish — the inland crew buys it
KEEP  | tide→survival | motif M-16 | delivery: config (Tide's existing Serene Seasons compat ensures certain species only bite in their season; seasonal-only catches feed at least one recipe that creates genuine off-season scarcity and demand) | milestone: v0.13.0 | why "of course": you can only brew the seasonal fish dish in summer — stock preserved fish against the winter
KEEP  | tide→magic | motif M-11 | delivery: recipe (exotic/void-zone fish — abyss_angler, void catches — → occultism:spirit_fire transmutation into an other-essence; something that swims in the abyss carries a sliver of the void; void fishing is genuinely endgame) | milestone: v0.11.0 | why "of course": something that survives in the void carries a fragment of it — the occultist wants that essence

MERGE | tide:abyss_angler / void-fish → ars_nouveau:imbuement (M-10, 6+2+1 rows REJECT dominant) | into: M-11 KEEP | reason: the M-11 spirit_fire KEEP already establishes the magic weave for exotic fish; adding a second M-10 imbuement edge would duplicate the pillar link; REJECT dominant on M-10 confirms tone-clash
MERGE | tide raw fish → farmersdelight:cutting only rows (M-12, 2 rows) | into: M-12 KEEP | reason: FD cutting is the upstream step that produces the fish scraps that then go to Create milling; fold into M-12 KEEP as a delivery note (cutting → milling pipeline)
MERGE | tide fish → minecolonies Fisher/Cook provisioning (M-28, 2+1+1 rows) | into: M-30 KEEP | reason: colony demand for fish is the demand side of the regional-scarcity gate; biome-locked fish filling colony requests folds naturally into M-30's economy framing
MERGE | tide:biome-locked fish M-30 loot-seed rows (1+1 additional rows) | into: M-30 KEEP | reason: near-duplicate framings of the regional scarcity KEEP; prefer the 9-suggest dominant row
MERGE | tide Serene Seasons seasonal-catch rows (3+1+1+1 additional) | into: M-16 KEEP | reason: all describe the same seasonal-gate already in Tide's compat; prefer the 6-suggest opus row as the representative
MERGE | tide fishing bait consumption (M-26, 1 row) | into: M-12 KEEP | reason: bait is a crop-derived consumable spent every cast — it's the input side of the same Create-milling loop (farm→bait→fishing→fish→milling); fold into M-12's scope
MERGE | tide raw fish → extradelight:vat fermentation (M-35, 1 row) | into: M-12 KEEP | reason: preserved/fermented fish as an intermediate is a processing-chain variant under M-12; too thin at 1 suggest to hold as a separate M-35 edge

CUT   | tide:abyss_angler → ars_nouveau:imbuement (M-10, 6+6 rows) | reason: REJECT×6 dominant on both clusters; imbuing a fish into a magic reagent crosses a tone threshold — Ars imbuement is reserved for gem/crystal/essence materials; M-11 spirit_fire covers the exotic-fish magic pillar
CUT   | tide:abyss_angler → occultism:spirit_fire (M-11, 7+5+4 rows mixed) | reason: while some rows ACCEPT, the spirit_fire KEEP already covers this via the merged void-fish scope; these rows are near-duplicates of the accepted edge; fold resolved above in MERGE
CUT   | tide raw fish → create:milling (fishmeal fertilizer as redundant with bonemeal, 1 REJECT row) | reason: the fishmeal route is already the M-12 KEEP; this dissenting row argues redundancy with vanilla bonemeal — noted but outweighed by 20-suggest ACCEPT dominant
CUT   | tide:angling_table → create:mechanical_crafting / create:pressing (M-05, ×3 rows mixed) | reason: REJECT dominant; the Angling Table is an everyday fishing upgrade station; gating it on Create mechanical_crafting would gate a fishing-progression item on a deep chain (depth rule); 1-suggest each
CUT   | tide:amethyst_fishing_bobber → ars_nouveau:imbuement (M-10, 1 row) | reason: REJECT; the bobber is a gear upgrade (fishing luck/speed), not a magical reagent; imbuing a bobber is incoherent tool-enchanting
CUT   | tide:abyss_angler as boss-key M-15 (1 row) | reason: M-15 requires a boss drop; the abyss_angler is a catchable fish, not a boss; motif mismatch
CUT   | tide:angling_table / rod customization → service-for-hire (M-33, 1 row) | reason: 1 suggest; no strong emergent demand signal for rod-tuning as a paid service; thin
CUT   | tide fish → aeronautics transport (M-31, 1 row) | reason: 1 suggest; thin; the regional-scarcity KEEP (M-30) already creates the trade pressure; a separate logistics-required edge needs a stronger signal
CUT   | tide raw fish → create:milling (1 REJECT row arguing redundancy with M-12) | reason: already resolved — the M-12 KEEP is the accepted framing; this row is a dissent against the primary weave
CUT   | tide:angling_table gear (consumes vanilla materials) → create:* (1 row REJECT) | reason: backwards-direction (tide consuming vanilla materials to craft its own gear is an inbound dependency, not an outbound weave)
CUT   | tide:fish → numismatics coin minting (M-08, 1 row) | reason: REJECT; fish are food, not a currency metal; M-08 is reserved for scarce processed metals minted by players
CUT   | tide:wooden_crate / fish_display → create:cutting M-04 (1 row) | reason: the crate and display are minor utility furniture; crushing them to planks contributes nothing to the loop


## toomanypaintings  — LEAVE (only 1 candidate row, no-motif; applying lore text to a painting is purely cosmetic narrative with no mechanically meaningful cross-system edge; no weave is achievable)


## trailandtales_delight  — slate: 4 KEEP / 21 CUT / 12 MERGE / 0 DEFER   | anchors after: create / economy / magic / survival (now 4)

KEEP  | trailandtales_delight→create | motif M-12 | delivery: recipe (lantern_fruit and pitcher_taro → create:milling into flour/paste/glowing-juice-concentrate intermediates; sniffer-recovered crop processed through the Create mill feeds the cooking chain at scale) | milestone: v0.7.0 | why "of course": lantern fruit milled into a glowing concentrate is the kind of thing the Create line was built for — exotic input, useful intermediate
KEEP  | trailandtales_delight→economy | motif M-35 | delivery: recipe (cheese_wheel → create_cheese:maturing; cheese must age under the right conditions before it's worth trading — the dairy specialist who keeps the maturing rack running is the pack's cheese provider) | milestone: v0.9.0 | why "of course": you can't rush cheese — the aging specialist's good sits until it's ready
KEEP  | trailandtales_delight→economy | motif M-28 | delivery: config (colony cook/tavern/inn hut requests: ancient_coffee, cherry_petal_tea, cheese_wheels, cherry_cheese_pie, cooked_sniffer_egg as colony upkeep goods; persistent colony demand makes the food specialist's rarest products necessary) | milestone: v0.9.0 | why "of course": the colony innkeeper needs ancient coffee to keep settlers happy — the food specialist supplies the colony that supplies everyone else
KEEP  | trailandtales_delight→magic | motif M-10 | delivery: recipe (golden_lantern_fruit — the rarer Sniffer-recovered cultivar — → ars_nouveau:imbuement; the golden variant is not an everyday crop, so the depth rule is satisfied; the golden glow is a natural imbuement substrate) | milestone: v0.11.0 | why "of course": the golden sniffer-crop carries an otherworldly glow — of course the magic specialist wants it for the apparatus

MERGE | trailandtales_delight:cheese_wheel M-12 via create:pressing / mixing (×4+1+1 rows) | into: M-12 KEEP | reason: pressing/mixing for curd is the upstream step in the same Create cheese-processing chain as milling; fold into M-12's delivery scope (the full chain: milk→press→curd→maturing)
MERGE | trailandtales_delight:ancient_coffee → extradelight:vat / create:mixing (×3+1+1 rows) | into: M-12 KEEP | reason: ancient coffee processed through a Create mixer is a subset of the milling/processing-chain KEEP; same pillar, same delivery method; prefer the dominant lantern-fruit framing
MERGE | trailandtales_delight:cheese_wheel / curd M-35 aging rows (×4+1+1+1+1 rows) | into: M-35 KEEP | reason: all describe the same maturing step through create_cheese:maturing; prefer the 4-suggest ACCEPT-dominant row as the representative
MERGE | trailandtales_delight:ancient_coffee M-16 seasonal (2 rows) | into: M-28 KEEP | reason: ancient_coffee is not season-gated (no Serene Seasons hook on its ingredients); the M-28 colony demand KEEP already creates the persistent demand for coffee; fold seasonal framing as a config note (if coffee ingredients are season-gated elsewhere, that's a bonus)
MERGE | trailandtales_delight colony demand for dishes (×5 additional rows, M-28 variants) | into: M-28 KEEP | reason: near-duplicates covering cherry_cheese_pie, sniffer_egg, milk→curd colony requests; prefer the 3-suggest ACCEPT row as the primary; fold the rest
MERGE | trailandtales_delight:lantern_fruit M-16 seasonal framing (×3+1 rows) | into: M-12 KEEP | reason: M-16 requires Serene Seasons availability gate; Lantern Fruit is Sniffer-rare but not season-locked by default (Sniffer progression gating ≠ seasonal gating); fold as a scope note — if a season config is authored later, the M-12 delivery already covers the intermediate
MERGE | trailandtales_delight:sniffer_eggshell → create:milling calcium dust (M-32, 1 row) | into: M-12 KEEP | reason: eggshell → calcium powder is a byproduct of the same sniffer-egg cooking chain that feeds the milling web; fold into M-12 as a scope note for eggshell byproduct
MERGE | trailandtales_delight:pitcher_taro → irons_spellbooks:alchemist_cauldron_brew via milling (M-12, 1 row) | into: M-12 KEEP | reason: taro starch as a potion-thickener is a creative use of the milling intermediate, but it re-routes through the M-12 KEEP (milling is the delivery); note as a magic-side use of the milled output without adding a separate magic KEEP
MERGE | trailandtales_delight:golden_lantern_fruit additional imbuement rows (×2 rows) | into: M-10 KEEP | reason: near-duplicates of the golden-variant imbuement KEEP; prefer the clearest phrasing

CUT   | trailandtales_delight:lantern_fruit (non-golden) → ars_nouveau:imbuement (M-10, 3+2+1+1 rows) | reason: REJECT dominant; lantern fruit is an everyday crop item — M-10 explicitly forbids gating basic/everyday components behind infusion; only the golden variant passes the depth rule
CUT   | trailandtales_delight:cooked/stuffed sniffer_egg → occultism:spirit_fire (M-11, ×5 rows) | reason: REJECT dominant; tone clash — sniffer eggs are archaeological-whimsical, not arcane; transmuting a cooked novelty food through spirit fire is thematically arbitrary
CUT   | trailandtales_delight crops → Serene Seasons fertility window M-16 (3 rows) | reason: REJECT×3; M-16 is for materials obtainable only in a given season; Serene Seasons affects crop growth speed but does not create a hard seasonal gate on availability
CUT   | trailandtales_delight:ancient_coffee / cherry_petal_tea → ars_nouveau:imbuement (M-10, 1 row) | reason: REJECT; tone clash — archaeological drinks fed into arcane imbuement is forced; neither item has an arcane theme
CUT   | trailandtales_delight:cheese_wheel → create:milling lossy recycle (M-04, 1 row) | reason: redundant — the milling KEEP already covers the Create pillar; crushing cheese back to curds is weaker than the maturing chain
CUT   | trailandtales_delight:lantern_fruit → farmersdelight:cutting only (M-12, 1 row) | reason: only reinforces the existing survival anchor, not a second pillar; the milling KEEP is the cleaner Create route
CUT   | trailandtales_delight:cooked_sniffer_egg → create_dragons_plus:ending (M-12, 1 row) | reason: 1 suggest; the Bulk Ending fan process is a narrow fan addition; thematic coherence is strained; thin
CUT   | trailandtales_delight:curd_block / sniffer_eggshell → occultism:spirit_fire (M-11, 1 row) | reason: REJECT; tone clash — transmuting dairy curds or eggshells into occult essences has no thematic coherence
CUT   | trailandtales_delight:cherry_cheese_pie / sniffer_egg M-26 consumption sink (2 rows) | reason: prestige-food consumption is the ambient food loop — it's not a new authored demand gate; M-26 needs an explicit consuming mechanic, not just "players eat the food"
CUT   | trailandtales_delight:cheese_wheel aeronautics M-31 (1 row) | reason: 1 suggest; thin; the M-28 colony demand already creates the pressure that would drive logistics; a separate logistics-required edge needs a stronger signal
CUT   | trailandtales_delight:lantern_fruit regional scarcity M-30 (1 row) | reason: regional limitation is Sniffer-progression based, not GTMOGS ore-gen based; M-30 applies to the ore-gen regional gate; this is Sniffer-scarcity, not region-scarcity in the pack's economic sense
CUT   | trailandtales_delight:sniffer_egg → M-02 mob-drop-reagent (1 row) | reason: M-02 is "mob drop → magic/economy input"; a cooked sniffer egg is a food item not a mob drop in the magic-reagent sense; motif mismatch
CUT   | trailandtales_delight:ancient_coffee → smokeleafindustries chain (M-12, 1 row) | reason: REJECT; routing an archaeological-culture drink through a cannabis-processing chain creates a tone mismatch; REJECT
CUT   | trailandtales_delight:dndesires:freezing frost-lantern (M-16, 1 row) | reason: 1 suggest; dndesires:freezing is a narrow fan mod; building a cross-mod route through it on a thin signal risks fragility; CUT pending mod validation
CUT   | trailandtales_delight:ancient_coffee / cherry_cake diet-group completers M-26 (1 row) | reason: diet-system interaction is ambient — the mod's foods naturally fall into diet groups; no authored consumption gate added; ambient loop, not a weave
CUT   | trailandtales_delight:cooked_sniffer_egg_block → farmersdelight:cooking (existing inbound, 1 row) | reason: already uses farmersdelight:cooking (listed in made-by methods) — this is an existing connection, not a new weave candidate
CUT   | trailandtales_delight:lantern_fruit (non-golden) M-10 as seasonal catalyst with M-16 tag (1 row) | reason: mis-tagged M-16 framing on M-10; Lantern Fruit is not season-gated; the golden-variant M-10 KEEP is the correct form


## woodworks  — slate: 4 KEEP / 8 CUT / 6 MERGE / 0 DEFER   | anchors after: create / magic / economy (now 3)

KEEP  | woodworks→create | motif M-04 | delivery: recipe (woodworks wood-deco blocks — boards, bookshelves, chests, ladders — crush back to planks + sawdust + create:experience_nugget; lossy; ties the entire wood-deco palette into Create's recovery loop) | milestone: v0.7.0 | why "of course": a demolished spruce bookshelf at the crushing wheel yields planks and sawdust — wood-deco waste feeds the Create processing chain, not a dead end
KEEP  | woodworks→magic | motif M-10 | delivery: config (woodworks bookshelves — including chiseled variants across all wood types — count toward Ars Nouveau enchanting_apparatus source-bonus; the full Woodworks bookshelf palette gives the magic specialist a meaningful build-choice that feeds arcane power) | milestone: v0.11.0 | why "of course": the apparatus draws power from nearby bookshelves — more wood types means more design freedom and more magic throughput
KEEP  | woodworks→economy | motif M-28 | delivery: config (MineColonies Library and Warehouse huts commission woodworks furniture — chiseled bookshelves, typed chests — rather than vanilla wood; colony builders are the primary bulk consumers of the wood-deco palette) | milestone: v0.9.0 | why "of course": the colony library wants a proper chiseled bookshelf, not a vanilla oak one — the woodworker's specialty is the colony's supply target
KEEP  | woodworks→create | motif M-05 | delivery: recipe (woodworks:*_sawmill crafting gated on a Create shaft or saw blade as a required input; the Sawmill is a powered cutting machine — it naturally costs a Create mechanical part) | milestone: v0.7.0 | why "of course": a Sawmill is a power-driven cutting machine; of course it costs a Create part to build

MERGE | woodworks wood-deco crushing rows (×7+4+1+1+1 near-duplicates) | into: M-04 KEEP | reason: all describe the same lossy wood-deco-to-planks crushing; prefer the 16-suggest dominant row; scope covers boards, bookshelves, chests, ladders
MERGE | woodworks:*_bookshelf → Ars apparatus bonus (×2+1 additional rows) | into: M-10 KEEP | reason: near-duplicates of the bookshelf-source-bonus KEEP; prefer the 4-suggest ACCEPT row
MERGE | woodworks colony furniture demand rows (×2+1+1 additional M-28 rows) | into: M-28 KEEP | reason: near-duplicates of the Library/Warehouse colony-demand KEEP; fold
MERGE | woodworks:*_sawmill M-05 gating rows (×2 rows same idea different phrasing) | into: M-05 KEEP | reason: near-duplicates; prefer the 2-suggest ACCEPT row
MERGE | woodworks:*_beehive → MineColonies apiary demand (M-28, 2 rows) | into: M-28 KEEP | reason: the colony beekeeper hut requesting typed beehives is a subset of the colony-furniture demand KEEP; fold into M-28's scope
MERGE | woodworks:chiseled_*_bookshelf → MineColonies Library hut (M-28, 1 row) | into: M-28 KEEP | reason: same as above; near-duplicate of the Library hut demand framing

CUT   | woodworks:*_sawmill ↔ create:cutting overlap (M-12, ×6+3+2+1+1+1 rows) | reason: REJECT dominant throughout; the dossier flags this WEAK; overlapping the Sawmill's outputs with create:cutting is cosmetic recipe-duplication, not a cross-system link; M-12 requires a useful intermediate, not a redundant processing path
CUT   | woodworks:*_beehive → farmersdelight:cooking / extradelight:vat (M-12, 3+2+1 rows) | reason: REJECT×2+×2; wood-typed beehives don't have a meaningful cooking/processing path — honey/wax already drop from the vanilla/modded bees and are not a Woodworks-specific output
CUT   | woodworks:*_beehive → survival consumption (M-26, 2 rows) | reason: REJECT×2 dominant; beehives are a decoration palette variant of vanilla beehive — M-26 needs a new demand gate, not ambient vanilla honey farming
CUT   | woodworks:*_beehive → farmersdelight:cutting for honeycomb (M-12, 1 row ACCEPT) | reason: 1 suggest; woodworks beehives are cosmetic re-skins; honey/comb production is vanilla mechanic unchanged by Woodworks; thin
CUT   | woodworks:*_beehive → config (allow bee population in modded-wood hives) (blank motif, 1 row) | reason: no-motif; a config compatibility note is not a cross-pillar weave
CUT   | woodworks:*_beehive → player trade (M-34, 1 row) | reason: REJECT; beehives are decorative/functional vanilla expansions; M-34 is combat-route supply; motif mismatch
CUT   | woodworks modded-wood logs → woodworks:sawmill only (M-12, 2 rows) | reason: purely within wood decoration — log → sawmill → deco is the mod's internal function, not a cross-system link; M-12 requires a cross-pillar useful intermediate
CUT   | woodworks:*_beehive honey → create:milling/mixing on honey output (M-12, 1 row opus) | reason: REJECT; beehives don't produce honey as a Woodworks mod feature (cosmetic re-skins of vanilla beehive); routing "honey" from them would route vanilla honey through Create, which is already possible without this mod


== BATCH COMPLETE ==
