# Phase 2 candidates — chunk-05

## emojitype   [anchors: support (client UI/QoL) (1)]
- LEAVE — zero content surface: no items, no blocks, no recipe methods, no loot tables. Pure client-side text-input helper that maps :shortcodes: to Unicode; nothing to route through any method. Genuine zero-surface code-behavior mod.

## timm   [anchors: support (QoL/client) (1)]
- LEAVE — zero content surface: no items, no blocks, no loot. Client-side biome/dimension title overlay; purely cosmetic/immersion. There is no item, method, or drop to route through the loop. Genuine zero-surface UI mod.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- REWORK check: existing anchors (Create + aeronautics/logistics) are solid and coherent — the Robo Bee drone port IS the logistics arm of the economy via Create's package network. OK — connections sound.
- from: create_mobile_packages:robo_bee | via: create:mechanical_crafting | to: economy | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: A robo bee is a drone — it takes a precision mechanism, some copper ingots, and a Create electron tube to build one; the construction recipe anchors the courier into the Create drivetrain/control family and makes launching a drone courier a meaningful mid-game milestone that the economy player earns.
- from: create_mobile_packages:portable_stock_ticker | via: create:mechanical_crafting | to: economy | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: The portable stock ticker is a handheld UI remote, not a drivetrain/control surface — M-24 is for propulsion/control components feeding Aeronautics; stretching it to a handheld inventory device is thematically loose. A crafting recipe is sufficient at base tier; no motif fits cleanly without forcing. REJECT (no motif that fits).
- from: create_mobile_packages:bee_port / drone_port | via: recipe (vanilla crafting, M-23-adjacent structural block) | to: economy | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 is for structural alloys going INTO Aeronautics airframe construction; the bee_port is a logistics infrastructure block, not an airframe piece — the motif is directionally inverted. The existing aeronautics anchor already captures the logistics role. REJECT (wrong direction for M-23).

## searchables   [anchors: support (1)]
- LEAVE — genuine zero-surface library: no items, no blocks, no loot, no recipe methods. Search/filter UI API consumed transitively by JEI-family mods; nothing to route through the loop.

## modernfix   [anchors: support — performance (1)]
- LEAVE — genuine zero-surface performance mod: no items, no blocks, no loot, no recipe methods. JVM/loader-level patches only; nothing to route through the loop.

## terralith   [anchors: survival (1)]
- Power-read: Terralith is a data-only worldgen overhaul — no items, no blocks, no craftables. The `loot=yes` flag likely reflects vanilla structure loot tables that Terralith's terrain placement exposes (new structure positions, not Terralith-authored drops). The 65 c:tags are biome/surface rule tags, not material tags. There are no items whose recipe we could route through a method.
- from: terralith biomes (Moonlight Grove, Frozen Peaks, etc.) | via: worldgen/spawn gating | to: survival/scarcity | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: M-16 is a seasonal-reagent motif that requires a *crop or material* obtainable only in a given season — Terralith provides biome variety but registers no new items or materials for seasonal gating. The weave would have to be authored on OTHER mods' items keyed to Terralith biome tags, not on Terralith itself. The connection is real at the world-design level (Terralith biomes spread scarcity sources further apart) but Terralith is the canvas, not the node — no recipe-level edge possible here.
- from: terralith rare-biome terrain (Skylands, Moonlight Grove, cave biomes) | via: loot-seed | to: survival/scarcity | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: Terralith has no bespoke loot tables to seed into — its loot=yes flag refers to vanilla structure tables placed in Terralith terrain, not mod-specific drop tables. Adding our own weave drops into vanilla chest loot tables would be possible via datapack, but that action is *not* a Terralith weave — it's a vanilla loot-table override. No coherent Terralith-anchored motif available.
- LEAVE — supporting the scarcity foundation as worldgen canvas; its real contribution to the loop is map variety and terrain spread (biomes host other mods' structures/spawns), not a recipe node. No items, no methods, no authored loot to route. One anchor (survival) is structurally correct for a worldgen-foundation mod.

## trading_floor   [anchors: Create, economy (2)]
- REWORK check: existing anchors (Create + economy) are coherent and well-motivated — the Trading Depot IS a Create-belt block that automates villager trades, squarely straddling the Create→economy seam. OK — connections sound.
- Power-read: the trading_floor:trading_depot is a mid-game block; crafted from Create parts. Its loot=yes may reflect villager trade outputs passing through it, not standalone loot tables.
- from: trading_floor:trading_depot | via: create:sequenced_assembly or create:mechanical_crafting | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Running Create-processed scarce metals (e.g. crushed ore → ingot via M-03) through the Trading Depot to exchange for emeralds closes the Create→coin loop that M-08 describes — the depot is the mint-point where processed scarcity becomes currency. The action here is making the Trading Depot's recipe cost real Create-processed inputs (not just raw vanilla items), so the depot itself is a gate on the Create chain.
- from: trading_floor:trading_depot | via: M-21 (provisional) villager-trade-seam | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); the trading_floor already mechanically routes villager trades → economy without needing a separate Numismatics payout step — its native trade-automation IS the economy weave; adding M-21 on top is redundant. REJECT (redundant; M-21 provisional).
- from: trading_floor:trading_depot | via: loot-seed | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: Automating magic-mod trades (e.g. Ars wandering trader) through the depot would be thematically messy (arcane wanderers don't fit industrial automation) and no motif covers "automate a magic-mod's trade." REJECT (tone clash + no-motif).

## kleeslabs   [anchors: support (QoL) (1)]
- LEAVE — genuine zero-surface behavior mod: no items, no blocks, no loot, no recipe methods. Single-slab-break is a building convenience interaction with no material output. Nothing to route through the loop.








