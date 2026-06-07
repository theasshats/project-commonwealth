# Phase 2 candidates — chunk-12

## just_blahaj   [anchors: support/decoration (1)]
LEAVE — Pure decorative plush set (31 color/pride variants); zero material outputs or methods to route. Forcing any Create/economy/magic edge would be inventing content the mod doesn't have. Confirmed zero recipe-types, zero c:tags.

## openpartiesandclaims   [anchors: support (1)]
LEAVE — Zero items/blocks/methods; pure chunk-claim + party-protection framework. No material surface whatsoever. Sanctioned support role underpinning the coop-PvPvE territory premise.

## aeronautics   [anchors: aeronautics (1); Create de-facto 2nd]
- from: levitite (zinc-gated bulk lift material) | via: recipe → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the server's zinc specialist becomes the fleet's lift supplier; a bag of levitite blend is a literal trade good in an airship economy
- from: levitite / hot-air burner → TFMG diesel fuel extension | via: config-tie (fuel tag JSON) | to: aeronautics (deepens) + Create | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: diesel-powered burners let the refinery crew supply the fleet; charcoal farmers and oilmen both have a buyer
- from: levitite blend crystallisation step | via: KubeJS (Ars Nouveau imbuement or Occultism ritual catalyst adjacent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the crystallisation step is CODE-only (not JSON), and the dossier flags it explicitly as JEI-pending / unverifiable; authoring a magic-catalyst dependency on a recipe we can't inspect is premature — revisit once the code step is confirmed or replaced by a JSON recipe
- from: docking connector / rope coupling | via: config-tie (Trade-post dock points at Numismatics stations) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: pure config/narrative suggestion with no recipe or loot-seed surface; the economy tie is real in principle but there is no delivery mechanism (no recipe, no loot table, no item exchange) — this is a design note, not a Phase-3 action
- from: dyeable tires (offroad addon) | via: villager trade | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and the maintainer leans no; also the tires are build/vehicle components, not luxury goods — forcing a trade is shallow
REWORK: existing Create de-facto 2nd anchor (zinc/brass/gyro via Create methods) is sound but not formally listed as an anchor — should be promoted to a recorded anchor (aeronautics + Create, now 2). OK — connections sound once that is done.

## shulkerboxtooltip   [anchors: support/QoL (1)]
LEAVE — Pure client-side tooltip renderer; zero items, blocks, or recipe-types. No material surface to route.

## createmechanicalcompanion   [anchors: Create (1)]
- from: mechanical_wolf_link (wearable companion, loot=yes) | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: the wolf link isn't a mob-drop; it's a crafted item. M-14 is bounty-board → drop economy, which requires combat loot output. The mod has loot=yes but its loot table is the illager-engineer spawn-egg from its own mob, not a tradeable loop. No clean M-14 fit.
- from: incomplete_mechanical_wolf_motherboard / optical_sensor (endgame sequenced parts) | via: create:sequenced_assembly (already inbound) | to: Create (deepen) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a netherite-tier derpack:incomplete_* chain makes the wolf companion a legitimate endgame Create milestone, not just a recipe — consistent with the cost model
- from: quantum_drive / optical_sensor outputs | via: recipe (used as magic catalyst in Ars/Occultism ritual) | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: tone clash — a brass clockwork wolf is firmly industrial; having its CPU parts feed arcane rituals feels arbitrary ("why does my robot dog power a summoning circle?"). The industrial-adventurous vibe doesn't cross into arcane cleanly here.
REWORK: dossier lists "none — leave" for 2nd anchor; the M-06 deepen-sequenced-assembly path is valid (the incomplete_* parts are already there). Existing Create anchor is sound; the M-06 note should be added as a suggested depth path rather than a 2nd pillar. OK — single-pillar is acceptable; deepen rather than force a cross-pillar.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — Pure client-side movement feel tweak; zero items, blocks, methods. No material surface.

## comforts   [anchors: survival (1)]
- from: sleeping_bag / hammock (wool + string construction, 16 colors, survival travel) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: sleeping bags are a low-effort vanilla-recipe QoL item; making them economy-trade goods adds noise without loop pressure. The cost model says basics ≈3×, not "every simple item becomes tradeable." Forcing a trade edge here is the failure mode CLAUDE.md warns against.
- from: hammock (daytime-to-night skip) | via: loot-seed into dungeon/structure loot | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: hammocks are crafted not dropped; seeding them into loot makes some sense thematically but doesn't advance the loop — a found hammock isn't a bounty payout or an economic link.
LEAVE — One-system survival QoL mod; no coherent second weave that advances the scarcity→pressure→production→economy loop.

## recipe_integration   [anchors: support/library (1)]
LEAVE — Pure connective-recipe datapack; zero items/blocks/methods of its own. It IS the weaving layer for installed tech mods. Functionally advances "one web" but has no material of its own to give a second anchor. Audit which of its 82 c:tags are active against this modlist is a maintenance task, not a Phase-2 weave.

## letsdocompat   [anchors: survival (1)]
LEAVE — Glue mod: zero items/blocks; its only role is unifying the Let's Do / Farm&Charm / Farmer's Delight food-tag chains. It IS M-12-style processing-chain unification for the food cluster. No independent material surface to anchor to a second pillar.

## more_slabs_stairs_and_walls   [anchors: support/decoration (1)]
- from: stone/log/wood/concrete slab+stair+wall variants (847 blocks) | via: create:cutting (mechanical saw) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a player automating a base wants bulk architectural cuts; the saw turns raw planks/stone into the right variant without a crafting table — Create earns a claim on the entire builder's palette
- from: gravity-block cuts (concrete-powder/sand/gravel slabs+stairs+walls) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 (deco recycles to raw) works best on metal/stone deco to close a useful loop. Crushing sand/gravel variants back to sand/gravel is trivially useless — you never need to uncraft gravity slabs, and the loop produces nothing of note. Weak and noisy; not worth adding.
REWORK: existing "support/decoration only" framing misses the M-12 saw path that the dossier itself flags as STRONG. The saw candidate is the correct 2nd anchor (Create); promote it.

## dynamictrees   [anchors: survival (1)]
- from: dynamictrees seeds (per-species: oak_seed, acacia_seed, etc.) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier flags DT trees as "notoriously awkward for Create automated harvesters"; milling seeds doesn't help with that friction — it produces sawdust at best and doesn't advance the loop. Forcing this edge just to give DT a Create anchor is contrived per the briefing's anti-forcing guardrail.
- from: dynamictrees:dendro_potion | via: recipe (consumable reagent for Ars Nouveau or Occultism growth ritual) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: the dendro_potion is a growth accelerant, not an arcane substance; making it a magic reagent would require inventing a purpose that doesn't naturally follow from its identity. No clear M-10 framing here without forcing a thematic stretch.
- from: mega/giga saplings (rare, large species) | via: loot-seed | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: mega saplings are a tree-growth utility; they're not a sellable luxury good in any meaningful sense. The economy pillar needs items that represent *value* to buyers, not specialized saplings.
LEAVE — Survival world-flavor mod; its logs feed downstream Create/cooking methods but DT itself has no natural second-anchor weave that isn't contrived. One system is the floor; no forced second weave.

## handcrafted   [anchors: support/decoration (1)]
- from: wood-tier furniture sets (chairs/tables/cupboards/benches, per-wood variant) | via: create:cutting (mechanical saw produces planks+trim cuts that feed furniture recipes) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: building a colonist's tavern or airship cabin in bulk? Feed planks through the saw — the furniture lines become automated; Create earns a claim on the decoration/homestead layer
- from: handcrafted furniture as MineColonies building furnishings | via: recipe (MineColonies colonist builders consume specific furniture items) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: MineColonies building schematics normally require specific vanilla/modded blocks as prerequisites; this would require authoring MineColonies building schematics that consume handcrafted furniture — that's schematic-authoring work far beyond a recipe weave, and the dossier notes deco "sells thinly" as a luxury good. Viable as a long-term integration project, not a Phase-3 recipe.
REWORK: dossier has no current 2nd anchor; the create:cutting path is the natural and dossier-flagged connection (STRONG candidate noted in 2nd-anchor candidates). Promote to Create as 2nd anchor.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — Generic drop-merge behavior tweak; zero items/blocks/recipe-types. No material surface whatsoever.

## fxntstorage   [anchors: Create, survival (2)]
- from: fxntstorage:backpack_flight_upgrade (wearable flight) | via: create:mechanical_crafting + aeronautics component input | to: aeronautics | motif: M-24 | power: endgame | tone: ok | verdict: REJECT | reason: the dossier explicitly flags this and dismisses it — "a worn gadget, not a wireable resource." The flight upgrade is a personal item, not a drivetrain/hull component; routing it through aeronautics construction recipes is a stretch. Honor the dossier's own red-team.
- from: fxntstorage:hardened_backpack / hardened_storage_box (highest tier, hardened sheets) | via: create:sequenced_assembly gate | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hardened tier earns its power — an incomplete_hardened_backpack assembled step by step in the sequenced assembler is a satisfying Create endgame milestone, not just a shaped recipe
OK — connections sound (Create + survival confirmed; M-06 depth path is a candidate add, not a required 2nd pillar gap).

## dungeons-and-taverns-v4.4.4   [anchors: survival (1)]
- from: structure loot (taverns, dungeons, illager hideouts, trial chamber vaults) | via: loot-seed (seed numismatics coin drops into structure chests) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: finding coin in a tavern safe or dungeon vault is exactly what a player expects — structures become early entry points into the coin economy before any player has a mint
- from: tavern cartographer villager | via: villager-trade (emerald → structure map → exploration reward loop) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (maintainer leans no); the tavern cartographer's maps are already vanilla emerald trades — adding a Numismatics bridge here is plausible but falls in the "explore only" zone. Flag for human review at Gate 2.
- from: ominous_trial_key / trial_key (loot=yes, the mod's own items) | via: loot-seed (seed rare magic/tech reagents into trial vault chests) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: clearing an extra trial chamber yields a rare magic component — the harder the vault the richer the drop; exploration risk feeds the magic production chain
REWORK: dossier notes "none compelling — practically leave"; the loot-seed paths (M-08 coin, M-02 reagent) are real candidates per the briefing's explicit note that structure mods with loot=yes MUST NOT be LEAVE'd just because they have no recipes.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- from: Ender Dragon encounter (harder fight, phases, minions) | via: loot-seed (add boss-drop items to the dragon's loot table — endgame tech or magic keys) | to: magic or Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a tougher dragon should drop something worth fighting for — seeding a boss-key into the dragon's loot table makes the harder fight gate an endgame recipe unlock, closing the scarcity→boss→production loop
- from: dragon fight difficulty (phases) | via: loot-seed (seed numismatics high-denomination coin into dragon vault) | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the dragon drops to the defeating player personally, not into a chest — there's no loot-table chest vault to seed coin into (unlike trial chambers). Minting dragon-drop coin would require a recipe, not a loot seed. Downgrade to "recipe" delivery if revisited.
REWORK: dossier says "none — leave" but the mod has loot=yes at the Ender Dragon, and a harder endgame boss is a natural boss-key drop point (M-15). The LEAVE is too aggressive.

## better_lib   [anchors: support/library (1)]
LEAVE — Pure config/messaging API library; zero gameplay content, items, or methods.

## bcc   [anchors: support/QoL (1)]
LEAVE — Version-handshake utility; zero gameplay content, items, or methods.

## s_a_b   [anchors: Create, aeronautics (2)]
- from: s_a_b hardsteelblock / doublesteelblock (highest-tier armored plating) | via: create:sequenced_assembly gate | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the hardest ship armor earns it — an incomplete_hard_steel_plate assembled through the sequenced assembler makes it a real industrial challenge, not just a steel + mixing recipe
- from: colored steel plating (16 colors, steps/plates) | via: create:crushing (lossy recycle) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing colored steel blocks back to steel/gravel is marginally useful and the M-04 motif exists mainly for stone/metal deco that accumulates in building. Steel armor blocks are consumed, not over-produced for recycling. Noise, not signal.
- from: s_a_b:brass_* glyph-sign blocks (the mod ships an entire brass typeface set — `brass_a` through `brass_z`, punctuation) | via: recipe (crafted from Create brass ingot/sheet as a decorative deco sink) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create brass plate run through the saw makes signage for the industrial base; brass letters become a natural output of the brass production line
OK — core connections (Create + aeronautics) are sound. M-06 depth path and M-12 brass-sign path are candidate adds.

## create   [anchors: Create (1)]
LEAVE — Create IS the method library and pack spine; it doesn't need a 2nd anchor from Phase 2 mapping. It is the hub all other mods weave INTO. Dossier explicitly states "N/A as a recipient." Confirmed correct.

== CHUNK COMPLETE ==
