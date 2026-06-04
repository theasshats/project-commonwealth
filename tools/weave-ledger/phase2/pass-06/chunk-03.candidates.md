# Phase 2 candidates — chunk-03
<!-- pass-06 · blind · 2026-06-04 -->

## tide   [anchors: survival (1)]
- from: tide rare/biome-locked fish | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: biome-locked fish are regional scarcities worth actual coin — a fisher specialist has something to trade
- from: tide fish drops (c:foods/raw_fish) | via: create:milling → fishmeal | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grind excess raw fish into fishmeal fertilizer for crop farms — everyday byproduct of any fish glut, one light milling step
- from: tide exotic fish (abyss_angler, void catches) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire transmutes organics into essences but an "abyssal fish essence" has no clear role in the magic spine — it extends the M-02 pattern without a defined consumer on the other end; defer until a specific magic recipe need is identified

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (derpack:incomplete_* chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the ice crystal is a keystone material for a high-tier Create machine — the boss fight earns the part, the factory turns it into the device
- from: mowziesmobs:sol_visage / earthrend_gauntlet | via: create:sequenced_assembly | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-artifact as the literal unlock piece for a complex tech recipe — "you fought Barako; now you can build the [device]"
- from: mowziesmobs boss drops (ice_crystal / sol_visage) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: power-read says these are prestigious endgame artifacts (unbreakable gear), not bulk reagents; using them as ritual transmute feedstock cheapens the fight spectacle — better as boss-key gates (M-15) than as consumed essences. Keep the M-15/M-06 path; reject M-11 here.
- from: mowziesmobs boss kills / drops | via: numismatics bounty board | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional (leans no); boss-kill bounties on endgame fights are unbalanced (one kill = large payout); defer to 0.9 economy review

## formations   [anchors: survival (1)]
- LEAVE — scatter-structure worldgen with no blocks, items, or methods; any recipe/economy edge would attach to the loot inside the generated structures (owned by whatever content populates them), not to Formations itself. No coherent 2nd pillar.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry liquid XP (experience_bucket fluid) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: liquid XP is refined magical energy — the alchemist's cauldron uses it as a catalyst to brew Iron's spell scrolls, making the enchanting factory feed the spell economy
- from: create_enchantment_industry:printer (book-copying machine) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the Printer's role is book/schedule copying — routing it through the enchanting apparatus would mean making Ars books require the Printer, but that gates a magic-side item behind a mid-tier Create machine; the depth asymmetry is awkward (M-05 native-method gating works when *magic produces the Create component*, not when Create produces the magic component at that depth). Better to route magic→Create (XP path above) rather than force a Create-machine dependency on Ars book production.
- from: create_enchantment_industry liquid XP | via: create_new_age:energising | to: Create (depth) | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: Create New Age energising charges tools with FE, not XP fluid — the type mismatch means no natural join; don't force it.

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw / big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: folkloric monster parts transmuted through spirit fire into occult essences — the trickster's claw fuels dark rituals
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Brazilian amber is a natural arcane attunement medium — imbuement refines it into a source-adjacent reagent
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber already earns its place via two magic-pillar weaves above; adding an economy edge would spread this niche folklore mod too thin and dilute the exotic-reagent identity of amber. One well-woven 2nd pillar (magic) is enough.

## createimmersivetacz   [anchors: Create (1)]
- from: createimmersivetacz bulk ammo (twelve_gauge_shell, casings) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced ammunition is a consumable trade good — the arms-specialist player sells rounds to the combat players who can't run the factory themselves
- from: createimmersivetacz:nitropowder_bucket (fluid) | via: tfmg:vat_machine_recipe | to: Create (TFMG depth) | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: nitropowder is defined inside createimmersivetacz's own pipeline as a Create-side fluid; routing it through TFMG's vat would add a cross-Create-addon dependency step that has no thematic payoff — it's already in the Create pillar and doesn't need a second sub-chain there.

## endrem   [anchors: survival (1)]
- from: endrem:undead_eye / nether_eye / corrupted_eye | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: themed eyes are already resonant with ritual magic — an occultism ritual can transmute a related undead/nether reagent into the corresponding eye, giving a stuck player a craft path without trivializing exploration
- from: endrem:magical_eye | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the "magical eye" is the most arcane-flavored; assembling it at the enchanting apparatus (consuming source gems + reagents) gives Ars mages a crafted path to portal activation
- from: endrem eye set (2-3 eyes) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: endrem's design intent is exploration-gated; making eyes craftable via sequenced_assembly undermines the gate (a factory player could skip exploration entirely). The magic paths above (ritual transmute from themed drops) preserve the cost without removing exploration pressure. Cap at magic weave; don't give Create a parallel bypass route.

## spawn   [anchors: survival (1)]
- from: spawn:clam (color variants) + crab drops | via: create:milling → seafood meal / shell dust | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: clam shells and crab parts milled into shell dust — a calcium-rich fertilizer or a white pigment feedstock for Create mixing chains
- from: spawn seafood (clam/crab/angler_fish) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic coastal seafood — color-variant clams, crab boil ingredients — fetches coin from players who haven't explored coastal biomes; another coastal specialist trade niche
- from: spawn:clam variants | via: occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: clams are everyday ambient fauna (casting-net-catchable); routing them through spirit_fire as reagents trivializes the magic pillar by making the cheapest critter a magic input — M-02 is for boss/rare drops, not mass-catchable critters. Everyday items belong in M-12/M-09 paths, not magic sinks.

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- LEAVE — no items, blocks, or recipe methods of its own; it is a pure structure / worldgen datapack whose loot feeds downstream sinks that are owned by the content mods. Any economy or bounty tie-in attaches to the loot items (which belong to other mods), not to Dungeons & Taverns itself. No coherent mod-level 2nd pillar.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen (no items, no blocks, no methods). Its real weave is indirect: it provides the biome layer that other mods' biome-spawned content, seasonal crops, and regional ore scarcity key off of. No recipe-edge 2nd pillar is coherent here; it is a support anchor.

== CHUNK COMPLETE ==
