# Phase 2 candidates — chunk-01

## creativecore   [anchors: support/library (1)]
- LEAVE — zero content surface; pure GUI/event/packet API dependency. No items, no blocks, no loot tables, no material flows. Genuine zero-surface library; LEAVE is correct.

## mcwwindows   [anchors: support/decoration (1)]
- from: stone parapet / arrow-slit blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: smash a fortress parapet back to gravel and stone dust — nothing built last forever on a moving ship
- from: mosaic glass pane variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushes to sand already in vanilla; a mcwwindows mosaic pane crushing to sand + glass-powder is M-04 territory but adds no meaningful loop node — the rock variants are the cleaner M-04 target, glass is redundant here
- from: mcwwindows:*_curtain (wool-based) | via: create:milling | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: curtains are textile, not stone/metal — M-04 is scoped to metal/stone deco that crushes back; forcing fabric through the crushing machine is a tone clash and produces nothing coherent
- from: mcwwindows window/shutter set | via: recipe (crafting) | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: decorative windows as trade goods would require a buyer archetype that doesn't exist in the current economy model; the sell-luxury M-09 link needs a high-effort consumable, not a passive deco block
REWORK: existing "Create via crushing — stone parapet/arrow-slit" candidate in dossier is WEAK/deferred; the M-04 ACCEPT above gives it a concrete form. No further reworks — only one existing candidate and it already maps to M-04.

## tide   [anchors: survival (1)]
- from: rare/biome-locked fish (e.g. tide:abyss_angler, tide:void fish) | via: numismatics sell / bounty board | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a harbour trader pays well for rare catches — fishing villages and merchant ships have obvious demand
- from: tide fish (raw/cooked, c:foods/raw_fish) | via: farmersdelight:cutting → create:mixing / alcohol_industry:alcohol_boiling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fillets feed the Delight cutting board and the processing chain — fish goes from hook to dinner table through Create-adjacent methods
- from: exotic fish (abyss_angler, void-biome catches) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: something that swims in the abyss carries a sliver of the void — occultists want that essence
- from: tide fish (all) | via: create:crushing → fishmeal | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: fishmeal-as-fertilizer is a reasonable idea but Create already has a bone-meal path; adding a second fertiliser route through fish dilutes scarcity pressure on bones and doesn't advance the loop further than the spirit_fire reagent link above — one Create-adjacent pull is enough at everyday tier
- from: tide:amethyst_fishing_bobber craft | via: create:cutting / mechanical crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the bobber uses gems and ingots but crafting it in a Create machine rather than a workbench doesn't meaningfully gate anything — M-05 is for flagship items, not fishing accessories
OK — the M-09 economy and M-12 processing-chain pulls are the two strongest; M-02 spirit_fire is a valid 3rd. Existing dossier candidates map correctly; the spirit_fire (M-02/M-11) candidate is the one to add.

## alcohol_industry   [anchors: create, survival (2)]
- from: finished liquors (beer/vodka/whiskey/tequila) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bottled spirit is the ideal tavern trade good — players ship crates of whiskey on airships and sell them at colony markets
- from: alcohol_industry:alcohol_base fluid | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: imbuement of a fermented alcohol base into an arcane catalyst is thematically strained — magic traditions in this pack (Ars/Occultism/Iron's) don't have a strong potion-alcohol overlap, and forcing it produces an arbitrary arc node with no player narrative
- from: whiskey/vodka (distilled alcohol) | via: tfmg:distillation | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: TFMG already has a distillation column — using it as a co-processor for alcohol is a coherent theme but it would create a dependency loop (alcohol_industry is a Create add-on; routing its output back through another Create add-on just for depth adds steps without scarcity pressure — the M-09 luxury→coin link is the cleaner 2nd anchor)
REWORK: existing dossier marks "already ≥2"; the M-09 economy ACCEPT above is the explicit third-anchor candidate. No weak existing connections to flag — Create + survival is genuinely sound.

## justenoughbreeding   [anchors: support/QoL (1)]
- LEAVE — pure JEI plugin; zero items/blocks/loot, no material surface. Client-side informational category. Genuine zero-surface support mod; LEAVE is correct.

## multipiston   [anchors: support/MineColonies dependency (1)]
- LEAVE — functional block pulled in as a MineColonies/Structurize internal dependency; zero player-facing crafting or material flows. The block moves world-blocks but produces nothing; no coherent weave surface. LEAVE is correct.

## handcrafted   [anchors: support/decoration (1)]
- from: wood-tier furniture sets (chairs/tables/benches) | via: create:cutting (wood) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a mechanical saw shapes timber into fitted furniture — the workshop runs on rotational power, not a hand-axe
- from: high-tier furniture (fancy_bed, cupboard, drawer) | via: create:mechanical_crafting | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: a deployer-arm assembles the dovetail joints and hardware fittings that a hand craftsman couldn't keep consistent — Create precision gives you the luxury tier
- from: handcrafted furniture sets | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: furniture as trade goods is possible but the M-09 rule is "high-effort consumable" — deco blocks sell thinly because they're use-once-placed; no ongoing demand loop. Dossier already flagged WEAK; concur, reject.
REWORK: existing dossier candidate M-12 for cutting is correct; M-20 (deploy-application for higher-tier assembly) is a new angle worth adding. The REJECT on M-09 confirms dossier's WEAK call.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: cold-preserved flesh burned in spirit fire yields a chilled essence — undead cold biome drops feed the occult lab
- from: rottencreatures:magma_rotten_flesh | via: create:haunting (soul-fire transmutation) | to: create/magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: flesh scorched by magma, passed through soul fire, becomes a soul-charged intermediate — a neat Create→magic bridge using the mod's own thematic material
- from: rottencreatures:corrupted_wart | via: ars_nouveau:crush | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a wart rotted through with undead corruption — crush it in the arcane press to extract a mana-tainted dust for ritual reagents
- from: treasure_chest (rare Dead Beard drop) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: the pirate captain's chest has a few coins in it — rare loot that feeds the bounty/coin layer when you finally hunt him down
- from: undead_miner heads (4 pickaxe-tier ranks) | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: mob-head bounties are a reasonable M-14 idea but mob-head bounties in general risk trivialising scarcity if the miner spawns frequently; the treasure_chest loot-seed above is the cleaner M-14 entry; duplicate via same motif not needed
- from: rottencreatures:immortal (thunderstorm / electric) drop | via: create_new_age:energising | to: create | motif: M-02 | power: endgame | tone: ok | verdict: REJECT | reason: no confirmed drop exists for the Immortal variant in the dossier beyond generic heads; building an endgame energising recipe on an unconfirmed drop is speculative — revisit once drops are verified
REWORK: existing dossier candidates are sound; the M-14 loot-seed and M-19 haunting angles are new. No weak existing connections to flag.

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — pure client-side chat-UI overlay; zero items/blocks/loot/materials. Genuine zero-surface mod; LEAVE is correct.

## betteroceanmonuments   [anchors: survival (1)]
- from: ocean monument chest loot | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the monument's vault holds processed guardian material and a few coins — conquering the deep earns you something spendable
- from: ocean monument chest loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: guardian-resonant prismarine shards in the deeper monument rooms become a source of arcane materials — the ocean's depth hides reagents
- from: ocean monument loot | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: bounty board is M-14 and the monument is a structure, not a bounty target; the coin-seed (M-08) is the cleaner economy tie for this structure; two separate economy rows are redundant
REWORK: dossier previously said "none — leave" for 2nd-anchor; the briefing explicitly overrides this — loot=yes structures must be evaluated for loot-seed candidates before LEAVE. The M-08 coin-seed and M-02 reagent-seed are both valid loot-seed candidates and should be added.

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — pure behavior/combat framework with no items, no blocks, no loot tables, no material flows. The framework enables combat mods to plug in but has no content surface of its own. Genuine zero-surface framework mod; LEAVE is correct.

## trek-b0.6.1.1   [anchors: survival (1)]
- from: structure chest loot (trek structures) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a ruined island fort or sunken ship holds a handful of coins among the salvage — exploration pays
- from: structure chest loot (trek structures) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: remote ruins and jungle temples hide rare reagent shards — the world rewards explorers with arcane materials
- from: structure chest loot | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: bounty-board tie (M-14) would require a target NPC or kill-objective; trek structures are discovery-reward, not kill-bounty — coin-seed (M-08) fits better; two economy rows via different motifs would both need separate implementations and only one is coherent for a passive structure
REWORK: dossier previously said "none — leave"; same briefing override as betteroceanmonuments — loot=yes structures must get loot-seed evaluation. Both M-08 and M-02 are valid.

## startuptime   [anchors: support/diagnostic (1)]
- LEAVE — reads a clock at boot and writes a log line; zero items/blocks/loot/materials. Genuine zero-surface diagnostic mod; LEAVE is correct.

## rechiseledcreate   [anchors: create, decoration (2)]
- from: chiseled Create-palette blocks (rechiseledcreate variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a chiseled andesite brick crushed back yields grit and an XP nugget — the kinetic workshop eats its own decorative waste
- from: rechiseledcreate variants (window blocks) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: machined-glass window panes as trade goods — same weakness as mcwwindows: passive deco doesn't sustain ongoing demand; M-09 is for consumables/luxury goods, not building blocks
OK — existing connections sound (Create kinetic + decoration). The M-04 crushing candidate is an incremental improvement; no weak existing connections.

## blockui   [anchors: support/library (1)]
- LEAVE — pure XML UI framework; zero items/blocks/loot/materials. Pulled in as a MineColonies dependency; genuine zero-surface library. LEAVE is correct.

## gamediscs   [anchors: survival/novelty (1)]
- from: gamediscs:processor / gamediscs:redstone_circuit | via: create:mechanical_crafting | to: create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: assembling the console's micro-processor takes a rotating shaft and a deployer — Create automation for the retro gadget is thematically fitting (steampunk meets arcade)
- from: gamediscs:gaming_console | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: selling an arcade console to colonists or traders is a stretch — the mod is a downtime toy; M-09 works for consumables, not novelty electronics with no re-purchase demand
- from: game discs (kill-from-skeleton mechanic) | via: bountiful bounty board | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: "kill a bee with a skeleton" is already the disc's acquisition route — a bounty on that exact kill is redundant game design; the disc is its own reward, not a bounty currency
REWORK: dossier previously marked "none — leave"; the processor/redstone_circuit crafting via create:mechanical_crafting is a light but coherent Create tie (M-05 native-method gating). One accepted candidate is sufficient.

## attributefix   [anchors: support/fix (1)]
- LEAVE — attribute-cap patch with zero items/blocks/loot/materials. Genuine zero-surface support fix; LEAVE is correct.

## midnightthoughts   [anchors: survival (1)]
- from: well-rested buff mechanic | via: config tie | to: survival (reinforcement) | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: midnightthoughts has no items or material outputs to route; a config tie to Serene Seasons would be behavioral (sleep in a season affects the buff) but M-16 requires a season-gated *material* input to a method, not a behavioral config link — no motif fits
- LEAVE — no items, no blocks, no loot tables; a pure behavior/status-effect mod. The well-rested mechanic reinforces the survival pressure loop behaviourally but offers no material join key for a recipe weave. LEAVE is correct.

## nochatreports   [anchors: support/privacy (1)]
- LEAVE — networking/privacy utility with zero items/blocks/loot/materials. Genuine zero-surface support mod; LEAVE is correct.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling dried ginger root yields ground spice — a Create mill doubles as a spice grinder, feeding the food-processing chain
- from: snowyspirit:ginger (c:crops/ginger) | via: farmersdelight:cutting → extradelight:oven | to: survival/food | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger cuts into slices on the Delight board, roasts in the oven — the full crop-to-dish chain hooks into the Farmers Delight processing web
- from: gingerbread_cookie / snowyspirit:eggnog | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: seasonal goods — gingerbread cookies and eggnog sold at a winter market fetch a premium; limited winter availability makes them genuinely scarce trade goods (M-16 seasonal scarcity amplifies M-09)
- from: snowyspirit:ginger (c:crops/ginger) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: ginger as an arcane infusion reagent is a stretch — there is no magical tradition in this pack (Ars/Occultism/Iron's) that specifically uses spices as catalysts; forcing it produces an arbitrary arc node
- from: snowyspirit:gingerbread_golem | via: occultism:ritual / bountiful bounty board | to: magic/economy | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the gingerbread golem is a cute holiday mob but routing it as a ritual reagent source is thematically whimsical-in-a-bad-way — it undercuts the dark/serious tone of Occultism; keep the golem as pure novelty
- from: gingerbread / candy_cane blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing candy into sugar dust is cosmetically fun but gingerbread/candy are food-palette items, not stone/metal deco — M-04 is scoped to metal/stone deco; applying it to food blocks is a misuse of the motif
REWORK: existing dossier candidates are basically correct; M-12 milling and M-09 seasonal-luxury are both ACCEPT. The sled/aeronautics WEAK candidate (dossier) is correctly WEAK — no Create Aeronautics tie exists; reject it.

== CHUNK COMPLETE ==

