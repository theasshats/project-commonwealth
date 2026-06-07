# Phase 2 candidates — chunk-18

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (mob-drop reagent, Soul Furnace output) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Blood crystallized by the Soul Furnace is a natural spirit-fire fuel — occult and alchemical systems share the same dark currency.
- from: companions:soul_gem (Soul Furnace output from diamond) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A gem saturated with soul energy slots naturally into Ars's imbuement altar as a catalyst for higher-tier glyphs.
- from: companions:relic_gold (Sacred Pontiff boss drop) | via: numismatics mint (recipe) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: Relic Gold from a boss kill is rare and refined — it earns a premium coin tier rather than sitting unused.
- from: companions:copper_coin / nether_coin / end_coin | via: numismatics (conversion recipe) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Two competing coin systems on the same server creates confusion; bridging companions coins into Numismatics makes the economy coherent rather than parallel.
- from: companions:tesla_coil_block / voltaic_pillar (copper deco infra) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Weak secondary edge — crushing decorative tech blocks back to copper is a floor-scraping connection; these are functional (Tesla network) not deco; the real joins are magic+economy above. Flag for deco-family pass only if doing wholesale.
REWORK: current single anchor (survival) is undersized — companions is a boss+magic-systems mod with a Soul Furnace, altars, and boss drops; it fits magic and economy more naturally than survival. Recommend re-anchoring primary to magic and adding economy, treating survival as the mob/pressure layer it also touches.

## immersivearmorhud   [anchors: client-only UI (1)]
- LEAVE — pure client HUD overlay; 0 items, 0 recipes, no material surface; no coherent weave possible.

## puzzleslib   [anchors: support/library (1)]
- LEAVE — zero-content code library; 0 blocks, 0 items, no methods; no weave surface.

## jeresources   [anchors: client-only UI (1)]
- LEAVE — documentation/viewer addon only; 0 items, 0 recipes; no weave surface. (Its value to the pack's scarcity design is passive — players see ore distribution — not a node in the loop.)

## mcwdoors   [anchors: support/decoration (1)]
- from: mcwdoors iron/metal door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Metal doors that have outlived their use crush back to iron nuggets — the same lossy reclaim loop that applies to any metal deco block.
- from: mcwdoors wooden door variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Wooden doors crush to planks/gravel — already in vanilla/Create crushing for logs; this adds nothing new and the signal-to-noise is low. Defer to a deco-family pass.
- Note: decoration is a sanctioned support anchor; the M-04 metal-door edge is a "plus" not a necessity — author only as part of a wholesale deco-family crush pass.

## fluid   [anchors: create, aeronautics (2)]
- OK — connections sound. Already at 2 anchors (Create-spine fluid tooling + aeronautics logistics). All parts are made via Create compacting/deploying/mixing (inbound weaves confirmed). No forced third anchor needed; neon-tube decor is flavor. A M-04 crush edge on neon-tubes to copper dust is theoretically available but too thin to worth authoring standalone.

## sounds   [anchors: support/client-polish (1)]
- LEAVE — client audio mod; 0 items, 0 blocks, 0 methods; purely cosmetic, no weave surface.

## alcohol_industry   [anchors: create, survival (2)]
- from: alcohol_industry:whiskey / vodka / tequila / beer (bottled spirits) | via: numismatics sell/price (recipe or trade config) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: Mass-distilling spirits through Create's production line is wasted without a buyer — bottled liquor becomes a natural trade commodity that feeds the coin economy.
- from: alcohol_industry:alcohol_base (fluid) | via: create:mixing (already inbound) → alcohol_boiling → exported spirit | to: economy | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: This describes the already-established Create→survival chain (the inbound weave is create:filling + create:mixing); the M-12 framing adds no new cross-system edge — the M-09 luxury→coin row above is the correct new link. Logging to avoid duplication.
REWORK: existing connections (Create + survival) are sound; the missing third link (economy via M-09) is the clear next weave.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
- LEAVE — cosmetic particle/sound mod; the 184 "items" are particle-holder entries, not collectables; no recipe, no loot table drop, no material surface to weave through.

## entity_texture_features   [anchors: support/client-rendering (1)]
- LEAVE — client texture-engine; 0 items, 0 blocks, no methods; no weave surface.

== CHUNK COMPLETE ==
