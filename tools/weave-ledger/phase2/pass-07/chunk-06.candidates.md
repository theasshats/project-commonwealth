# Phase 2 candidates — chunk-06

## tide   [anchors: survival (1)]
- from: tide:anchovy / rare biome-locked fish (e.g. tide:abyss_angler, tide:amber_rockfish) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare catch from a locked biome is exactly the kind of scarce good you'd sell at the market — fishing becomes a meaningful trade profession
- from: tide:anchovy (bulk common fish) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mill bulk raw fish into fishmeal fertilizer — a Create-processed crop input that ties the fishing surplus into the farm/machine loop
- from: tide:abyss_angler / void fish (exotic catches) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: clash | verdict: REJECT | reason: void-fish-as-ritual-reagent is a thematic stretch; the fish's vibe is naturalist-collector, not arcane sacrifice; the connection feels forced and the power tier is already covered by M-09 + M-12

## endermoon   [anchors: survival (1)]
- LEAVE — no items, blocks, or recipe methods; adds only a spawn-weight event. Any meaningful weave (ender pearl demand) belongs on the ender pearl itself (vanilla) or the parent mod, not here. Forcing an edge would be inventing content this mod doesn't own.

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a Frostbitten zombie's cold-tainted flesh transmutes in spirit-fire into a frost-essence — biome-combat feeds the occult shelf
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: magma-zombie flesh burns clean in spirit-fire, yielding an infernal essence — the combat theme matches the ritual's destructive fire
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart — already botanically adjacent to Nether Wart — imbues as a tainted catalyst for Ars spells; natural arcane extension of an unusual crop-drop
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: haunting is a soul-fire method — using cold/frost flesh in soul-fire is thematically backwards; the cold/dark flavors clash with the fire motif; prefer the Occultism routes above

## bakery   [anchors: survival (1)]
- from: bakery:strawberry_cake / bakery:chocolate_gateau / bakery:linzer_tart (high-effort luxury baked goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a finished cake or decorated tart is exactly the luxury good a market stall or MineColonies bakery would trade — baking becomes a player profession with coin rewards
- from: wheat | via: create:milling → flour → bakery chain | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's miller produces flour that feeds the baking chain — the tech spine grinds the grain so the bakery can run; a natural upstream coupling
- from: bakery outputs (cakes/baked goods) as MineColonies colony food supply | via: minecolonies:composting (surplus scraps) | to: economy (colony economy) | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies composting takes generic organic waste — this is plausible but extremely generic; the composting path isn't distinguishing and the actual strong weave is the coin-sell above; don't stack two M-09 rows for the same mod

## t_and_t   [anchors: survival (1)]
- from: t_and_t village variants (biome-specific settlements) | via: numismatics / villager trade | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); also the connection is indirect — t_and_t itself owns no items and its villagers are vanilla professions; a loot-table seed into settlement chests is thematic but too diffuse to own as a recipe edge; mark as LEAVE-candidate pending M-21 gate decision
- LEAVE — pure worldgen structure provider; no items/methods. Economy adjacency via village loot tables is noted for future loot-table authoring work (not a recipe weave). If M-21 is approved, t_and_t villages are the natural economy anchor point to seed; revisit then.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — no items, blocks, or recipe methods; purely behavioral datapack that reshapes a boss fight. Nothing to route through any method. Any progression gate on the Ender Dragon belongs on vanilla's dragon egg or elytra, not this mod.

## terralith   [anchors: survival (1)]
- LEAVE — data-only worldgen overhaul with no items or methods. Its real contribution is the terrain other mods' content rides on (biome-gated spawns, ores, structures). Any weave is indirect (other mods key off its biomes); it doesn't own the materials or methods needed for a recipe edge.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry:experience_bucket (liquid XP) | via: irons_spellbooks:alchemist_cauldron_fill | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks' cauldron accepts liquid inputs for brew upgrades — routing liquid XP in as a brew-fuel or potency ingredient makes factory-enchanting a literal magic feeder; the arcane-industrial vibe is coherent
- from: liquid XP fluid output | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Ars imbuement works on solid items/blocks submerged in source, not fluid inputs — routing a *fluid* into imbuement is mechanically awkward; the Iron's cauldron route above is better-grounded
- from: create_enchantment_industry:mechanical_grindstone (automated disenchanting output) | via: occultism:spirit_trade | to: magic | motif: M-18 | power: endgame | tone: ok | verdict: ACCEPT | hook: spirit-trade spirits are supply/logistics agents; having them barter enchanted-book fragments (disenchant byproduct) ties the XP-factory's output into Occultism's spirit economy — magic uses the industrial enchant machine's waste stream

## betterdungeons   [anchors: survival (1)]
- from: betterdungeons dungeon chest loot (Catacombs / Undead Fortress / Spider Cave) | via: numismatics loot-table seed | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding dungeon chests with Numismatics coins makes dungeons a physical economy anchor — adventurers bring coin back from the crypt, so exploration directly feeds the trade economy; loot-table edit, not a recipe, but a coherent economy weave
- from: betterdungeons dungeon chest loot | via: loot-table seed with Ars/Occultism magic reagents | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: hiding a mid-tier Ars source gem cluster or Occultism spirit book behind a dungeon chest gates magic progression behind exploration, which is the pack's intended "earn it" arc; dungeons become a reason to engage with combat before unlocking magic depth
- from: betterdungeons (no items) | via: any recipe method | to: any | motif: none | power: n/a | tone: n/a | verdict: REJECT | reason: no-motif — has zero items or machines; any recipe edge would have to be authored entirely in another mod's namespace; the two loot-table rows above are the correct form; no recipe-routing weave is coherent here

## createpickywheels   [anchors: Create (1)]
- from: createpickywheels biome-gated power (river/open-air requirement) | as flavor tie to survival | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the "world dictates where you build" constraint is a genuine survival flavor but it isn't a recipe edge and no motif in M-01..M-24 covers a pure behavioral gate; it's a design decision already baked into the mod's presence, not a weaveable connection. No separate recipe or method edge can be constructed — this mod has no items or output stream.
- LEAVE — behavioral patch only; creates no materials and has no method. Its survival flavor (geography-gates power placement) is real but inarticulate as a recipe weave. Its second-pillar argument is purely conceptual: it makes the Create spine respond to the world, which is survival-adjacent by nature. No motif covers this; flag for Gate 0 if a "behavioral constraint = 2nd pillar" precedent is wanted.

== CHUNK COMPLETE ==
