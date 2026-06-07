# Phase 2 candidates — chunk-08

## collective   [anchors: support/library (1)]
- LEAVE — genuine zero-surface code library (Serilum event/utility framework); 0 items, 0 blocks, 0 loot, no player-facing content whatsoever; shared dependency pulled automatically by Serilum family mods.

## createbigcannons   [anchors: create, aeronautics (2)]
Existing connections review:
- REWORK: dossier 2nd-anchor candidate lists economy via "sellable war-good" (M-09 luxury→coin) — M-09 is RETIRED; bare sell-link is the ambient loop endpoint, not a weave. The economy angle must be re-expressed as demand-gating.
- OK — Create anchor: deep inbound web (create:compacting/cutting/mechanical_crafting/milling/mixing/sequenced_assembly) producing cannon blocks and munitions; firmly woven into the Create spine. Sound.
- OK — Aeronautics anchor: cannons mount on Aeronautics ships (naval/air artillery); the mod is the PvPvE combat arm of the logistics fleet. Sound.

New candidates:
- from: createbigcannons:steel_ingot (c:ingots/steel) | via: create:crushing (regional ore) + M-08 minting chain | to: economy | motif: M-08 | power: mid | tone: ok — a specialist forging scarce ore into cannon-grade steel is exactly the kind of regional-scarcity-gated processed metal the coin model is built for; steel is already the gate metal for the higher cannon tiers, so minting cannon-steel into currency (player presses steel bars → Numismatics cog/sprocket) is coherent, not forced | verdict: ACCEPT | hook: "the cannon-smith smelts more steel than they can fire — pressing the surplus into coin is how they pay the colony."
- from: createbigcannons munitions (shells/cartridges) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash — gunpowder-and-steel artillery transmuted through arcane infusion reads as jarring; the military-industrial and eldritch tones don't share a coherent player narrative; a player would ask "why is a cannon shell going into a spirit fire?"; the cross-route would need a very specific lore hook (cursed ammunition, soul-fuze) that the dossier doesn't suggest | verdict: REJECT | reason: tone clash; military-industrial vs. ritual-eldritch without a bridging lore hook; red-team survives; no motif match that survives theme-fit
- from: createbigcannons boss-drop gate (cannon-tier unlocks) | via: KubeJS gating | to: survival/economy | motif: M-34 | power: endgame | tone: ok — the high-end cannon tier (nethersteel / built-up cannon) naturally fits behind a boss-drop gate; a combat specialist farms the boss drop, trades it to the cannon-smith who can't self-farm; closes the loop perfectly | verdict: ACCEPT | hook: "built-up nethersteel barrels need a Cataclysm-boss alloy — the fighter and the smith trade, neither builds the weapon alone."
- from: createbigcannons loot tables (139 blocks, loot=yes) | via: loot-seed | to: survival | motif: M-02 | power: everyday | tone: ok — structure loot seeding: cannon parts / cartridge scraps appearing in military structures (towers, forts) from structure mods rewards exploration and ties discovery to the danger face of survival pressure | verdict: ACCEPT | hook: "raiding a ruined fort yields a cracked barrel mould — not enough to fire, enough to learn the pattern."

## clumps   [anchors: support/performance (1)]
- LEAVE — genuine zero-surface performance mod; XP-orb entity merging only, 0 items, 0 blocks, 0 loot; no player-facing content to route through any method.

## create   [anchors: create (1 — the hub)]
The dossier is explicit: Create is the method library, not a recipient; the pack's weave IS Create methods. No additional weave targets are coherent.
- LEAVE — Create is the universal connective hub; all weaves route THROUGH its 17 methods, not INTO it as a 2nd-anchor candidate. Adding an outgoing weave from Create as a recipient would invert the architecture. Dossier's guidance confirmed: "Leave; do not author edges that consume Create itself."

## jeresources   [anchors: client-only UI/support (1)]
- LEAVE — pure display/documentation addon (0 items, 0 blocks, 0 loot); surfaces existing loot and worldgen data as JEI pages, produces nothing and consumes nothing. No method to route through, no content to weave.

## mcwwindows   [anchors: support/decoration (1)]
Dossier notes one weak 2nd-anchor candidate (M-04 crushing).
- from: mcwwindows stone parapet / arrow-slit variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — stone deco crushing back to raw/gravel + xp nugget (lossy) is the standard deco↔Create bridge; parapets and arrow-slits are surplus building blocks that a player naturally has extras of, and the lossy reclaim is coherent with Create's crusher role | verdict: ACCEPT | hook: "leftover parapet sections go through the crusher for the gravel and the experience sliver — not efficient, just honest."
- from: mcwwindows mosaic glass blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok — colored mosaic glass back to glass shards/gravel is the same M-04 lossy reclaim; the pattern is established for glass in the pack; thematically fine | verdict: ACCEPT | hook: "a broken mosaic window is still worth running through the crusher."
- from: mcwwindows curtain rod (iron/wood) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash — a curtain rod as an arcane catalyst is a stretch; the thematic distance between soft furnishings and Ars Nouveau imbuement is large; no player would nod at "of course a curtain rod is an arcane infusion input"; forced | verdict: REJECT | reason: theme clash; no coherent narrative bridge between deco fabric/metalwork and arcane infusion; M-10 guardrail (no basic components) also applies since the rod is a mundane everyday item
- from: mcwwindows blocks in general | via: any magic method | to: magic | motif: no-motif | power: everyday | tone: clash — window/shutter/blind/curtain deco has no natural hook into magic production or survival pressure; the dossier itself flags "only weave as part of a wholesale deco-family pass" | verdict: REJECT | reason: no coherent motif; deco palette is a sanctioned support anchor; wholesale deco→magic forced
Note: M-04 (Create crush lossy reclaim) is the one coherent 2nd anchor for this mod. A second anchor via magic or economy has no natural entry point given the purely passive/decorative nature of the blocks. The two ACCEPT entries add a Create tie, reaching the minimum viable 2nd anchor.

