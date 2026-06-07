# Phase 2 candidates — chunk-08

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice crystal is the cold-tier keystone component in a multi-step Create sequenced assembly — combat unlocks machinery
- from: mowziesmobs:earthrend_gauntlet / wrought helm | via: create:sequenced_assembly (boss drop as gated input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Wroughtnaut's forged metal is the boss-key that unlocks a high-tier Create machine; its mythic-tribal origin makes "forge it into the machine" feel right
- from: mowziesmobs:sol_visage | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: A sun-mask powered by solar ritual magic; imbuement fuses its solar charge into a magic catalyst — thematically obvious
- from: mowziesmobs:elokosa_paw (lunar mob drop) | via: lunar-gated input | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: The Elokosa is a moon-themed mob (paw variants track moon phase); its drop as a lunar reagent slots directly into M-22's moon-event gating
- from: mowziesmobs:* boss kills | via: bountiful board payout | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; bounty on any boss kill is saturated low-signal

REWORK: existing survival anchor is sound — the set-piece boss fights are genuine survival pressure. No REWORK needed on that.

## txnilib   [anchors: support/library (1)]
- LEAVE — pure code library, zero items/blocks/loot; no content surface to weave

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore runs through a Millstone or Crusher — Create extracts salt the same way it extracts any resource; flavors the whole food chain
- from: expandeddelight:cinnamon (dust) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Grinding cinnamon bark in a Millstone before it enters baking/cooking recipes; Create as the prep stage for the kitchen
- from: expandeddelight:cheese_wheel (time-aged) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Aged cheese is genuinely time-gated (cask aging cycle) and irreplaceable by faster methods — a real luxury sink, not just "it's sellable"
- from: expandeddelight:chili_pepper (seasonal crop) | via: season-gated Serene Seasons input | to: survival/create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Chili only ripens in summer/autumn — routes seasonal scarcity into the food + Create milling chain; exactly the Eco-style pressure the pack wants
- from: expandeddelight:juicer output (juices) | via: create:filling / extradelight:vat | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: juicer is already within the Delight processing web; routing its outputs into Create filling is a minor quality add, not a cross-system anchor — the salt/cinnamon routes cover the Create pillar better

## naturalist   [anchors: survival (1)]
- from: naturalist:venison / bushmeat (raw) | via: farmersdelight:cutting → cooking | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Bushmeat and venison cut at a Farmer's Delight cutting board then stewed — the hunting loop feeds the cooking spine; unambiguous
- from: naturalist:antler | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Antler is a bone/keratin analog with mythic associations; ritual transmutation of antler into a magic reagent (horn-of-plenty → essence) feels earned and is the mod's only non-food output besides glow_goop
- from: naturalist:glow_goop | via: ars_nouveau:imbuement (light-source catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Bioluminescent slime from fireflies; a natural magical light reagent — imbuement into a glow/light spell component is thematically clean
- from: naturalist:shellstone/froglass | via: create:crushing (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: deco crush-recycle is the weakest form of weave (M-04 is established but low-signal); venison/antler/glow_goop routes are better pillars — don't dilute with a deco grind
- from: naturalist:venison (cooked, as butcher luxury) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; any food is trivially sellable

## formationsnether   [anchors: survival (1)]
- from: formationsnether structure loot | via: loot-seed (magic reagents / boss-key components) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether ritual altars and sanctuaries are exactly where you'd find occult reagents cached — seeding them with Occultism spirit essences or Ars source fragments turns Nether exploration into magic progression
- from: formationsnether structure loot | via: loot-seed (structural alloy components) | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: Nether cabins and castles hide salvageable structural parts (steel plates, fire-resistant alloy blanks) needed for higher-tier airframes — deep-hell exploration rewards the aeronautics builder
- from: formationsnether structure loot | via: loot-seed (coin cache) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; coin in loot is a lazy fill; magic/aeronautics loot is more distinctive and loop-advancing

## create_confectionery   [anchors: Create, survival (2)]
- from: create_confectionery:restful_chocolate (Phantom repellent) | via: ars_nouveau:imbuement or iron's cauldron brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A chocolate that repels Phantoms by granting magical protection during sleep — immersing it in an arcane infusion step (enchanted cocoa) makes it a magic-adjacent consumable and seeds demand for the chocolate production chain in magic players
- from: create_confectionery:hot_chocolate (Regen effect) | via: farmersdelight:cooking as a multi-ingredient recipe (chocolate + milk + vanilla) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: survival is already an anchor; extending within an existing anchor is a quality fix, not a new weave pillar
- from: create_confectionery:ruby_chocolate (unique variant) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the Phantom-repellent magic weave is the better 3rd-pillar hook
OK — Create and survival connections sound; the mod's cocoa→chocolate chain through create:mixing/crushing/pressing is correctly identified. Magic (restful chocolate / phantom link) is the genuine 3rd-anchor opportunity.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (player-effort SU) | via: survival pressure mechanic | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: "you physically run to generate power" is Create flavor, not a survival-system anchor in the loop sense; no material passes between systems; no-motif → reject-for-review
- LEAVE — genuine 1-anchor mod; the Soul Orb/Photo intake bridges Create↔touhou_little_maid but TLM is not a pack pillar. No coherent 2nd-anchor route without forcing. Dossier conclusion sound.

## create_better_villagers   [anchors: Create, economy (2)]
- from: create_better_villagers trade (emerald-denominated) | via: numismatics re-denomination (config) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Redenominating the villager's Create-parts trades from emeralds to Numismatics coins directly binds the trade economy to the pack's currency — a structurally distinctive loop-close, not merely "sell stuff"
OK — Create + economy anchors are sound. The coin re-denomination deepens the economy anchor from vanilla emeralds to the pack's coin system, which is the meaningful extension.

## appleseed   [anchors: survival (1)]
- from: appleseed diet-demand signal | via: config/tuning (diet drives food diversity demand → pulls farming/cooking production) | to: survival + create/production | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Balanced diet buffs create ongoing, varied crop demand — Serene Seasons seasonal crops become worth growing because each group (Grains, Vegetables, Proteins, Fruits, Sugars) is needed for the buff; M-16 seasonal reagents feeding the diet system is a real loop-advancing tie
- from: appleseed diet buffs on high-nutrient meals | via: numismatics pricing (multi-group cooked dishes trade at premium) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Balanced meals aren't just cosmetic — diet buffs make nutrient-diverse foods genuinely scarce goods that players specialize to produce and trade; a cook who maintains all five groups commands a real price. This is structurally distinctive: the demand signal (diet) creates the *reason* the food economy matters
- from: appleseed (mechanic only) | via: magic | motif: no-motif | verdict: REJECT | reason: no coherent magic tie — food ≠ magic reagents in this pack's model; no-motif → reject

## incontrol   [anchors: server-util/support (1)]
- LEAVE — config-only rule engine; no items, no methods, no material to route. Enabling infrastructure, not a loop node.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:lantern_fruit (Sniffer-recovered crop) | via: create:milling | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Lantern Fruit is an archaeologically rare crop; milling it in a Create Millstone into a luminescent dust or pressed juice feeds the Create processing chain — rare discovery + mechanical refinement
- from: trailandtales_delight:ancient_coffee | via: create:mixing (hot-water extraction + sugar/milk → bottled coffee) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Ancient coffee beans through a heated Mixing Basin (hot water + sugar) is exactly how a Create-factory café would work; routes the T&T drink line through the Create spine
- from: trailandtales_delight:cherry_cheese_pie (multi-step, time-gated via curd→cheese wheel→pie) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the Create milling/mixing routes are the better new anchors
- from: trailandtales_delight:lantern_fruit (seasonal — grows in warm seasons, Sniffer required) | via: Serene Seasons seasonal gating | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Lantern Fruit is both Sniffer-rare and season-sensitive — combining its archaeological scarcity with a seasonal window makes it a genuinely pressured ingredient that feeds the diet system and the Create chain

## creativecore   [anchors: support/library (1)]
- LEAVE — pure code library; zero items/blocks/loot; no content surface to weave

## detect-afk-1.2.2   [anchors: support/QoL (1)]
- LEAVE — behavioral server utility; no items, no methods, no content surface

## cmpackagepipebomb   [anchors: Create (1)]
- from: cmpackagepipebomb:pipebomb (trap via package logistics) | via: Create package delivery system (PvP) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the only possible second-pillar tie is PvP disruption of trade packages — thematically coherent but M-14 is bounty→combat, not trade disruption; no-motif for the actual mechanic → reject. No genuine 2nd anchor without forcing.
- LEAVE — tiny novelty/PvP gag; 1-anchor is correct; no coherent 2nd anchor survives red-team

## galosphere   [anchors: survival (1)]
- from: galosphere:allurite_shard / lumiere_shard | via: host magic methods as attunement catalyst | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: The shards are ALREADY the pack's reserved M-07 attunement catalysts (confirmed reagent-ownership table); this is the established 2nd-anchor route — record as ACCEPT confirming existing design is correct
- from: galosphere:silver_ingot (=palladium) | via: create:crushing (ore-doubling) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: Palladium ore through a Create Crusher yields crushed palladium + byproduct — standard ore-doubling, folding the unique cave metal into the Create tech spine
- from: galosphere:silver_ingot (=palladium, scarce/regional) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the magic (M-07) and Create (M-03) anchors are the real weaves; sellable palladium ingots don't add structural information
- from: galosphere:preserved_transform_recipe (amber preservation) | via: amber-preserved items as magic ingredients | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Amber-preserved specimens (insects, flowers, drops) are a natural arcane infusion input — a preserved rare mob drop or reagent inside amber unlocks a magic processing step; thematically resonant (preserved = timeless = arcane)

REWORK: galosphere currently lists survival as its only anchor. M-07 shards already reach magic (that's the established design in the reagent-ownership table). The dossier itself notes M-07 as the real second pillar — the anchor list should read survival + magic (2) already; flag for bookkeeping update.

## death-count-1.0   [anchors: support/QoL (1)]
- LEAVE — scoreboard cosmetic datapack; no items, no methods, no content surface

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ore / raw_tin | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Tin ore through the Crusher yields crushed tin + a byproduct — the standard ore-doubling path; establishes tin as a Create-processed metal from day one
- from: create_ironworks:steel_ingot (endgame alloy, via Create multi-step mixing) | via: aeronautics hull/frame recipe | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel plate is exactly the structural alloy an airframe needs — making steel plates a required ingredient in Aeronautics hull construction ties the metallurgy chain directly to the airship supply line
- from: create_ironworks:bronze_ingot (mid-tier alloy) | via: aeronautics rotor/mechanical drivetrain recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: Bronze is a classic propeller/gear metal; routing bronze into Aeronautics propellers or control surfaces links the mid-tier alloy to the logistics arm
- from: create_ironworks:tin_ingot (scarce, regional ore) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; steel→aeronautics is the distinctive structural weave; raw coin-minting of tin is low-signal given Create already has brass/copper in M-08
- from: create_ironworks:steel_ingot (Netherite upgrade bridge) | via: survival gear tier | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Steel is the boss-tier material gate before Netherite — requiring a specific boss drop to unlock the steel-to-Netherite upgrade step (smithing template + boss key) connects the combat loop to the top of the gear ladder

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure MineColonies blueprint content; no items, blocks, or recipe methods. Steampunk style already pulls Create blocks at build time; that tie is implicit, not a routable weave edge.

## farmersdelight   [anchors: survival, Create (2)]
- from: farmersdelight:cooking/cutting (hub methods) | via: further create:milling/mixing intake | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: More foreign crops (naturalist venison, trailandtales lantern fruit, expandeddelight salt/cinnamon) routed through Create milling → Farmer's Delight cutting/cooking deepens the Create-kitchen seam; the pack's whole food cluster coheres into one web rather than isolated clusters — exactly the connectivity goal
- from: farmersdelight high-tier stews/pies | via: numismatics sell + MineColonies provisioning | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Farmersdelight stews/pies are the most diet-complete, multi-step cooked foods in the pack — a dedicated cook-specialist who supplies the server with meals that hit all five diet groups is the food-trade node the Eco-loop calls for. MineColonies colonists also consume food, making the kitchen a colonial supply line, which is structurally distinctive beyond mere selling
- from: farmersdelight:straw | via: create:milling (wheat/straw processing) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: straw byproduct re-routing through milling is a depth-within-existing-anchor detail, not a new pillar weave; M-12 is already the anchor and farmersdelight already uses create:milling

OK — survival and Create anchors are sound and well-established. Economy (M-09 cook-specialist + MineColonies supply) is the genuine 3rd-pillar.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice infrastructure; no items, no methods, no content surface

== CHUNK COMPLETE ==
