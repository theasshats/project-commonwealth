# Phase 2 candidates — chunk-18

## bits_n_bobs   [anchors: create, survival (2)]
- REWORK: existing anchors are sound — "survival" is a broad deco-palette anchor; the Create tie via chain drives + crafted from Create stones is direct. OK — connections sound.
- from: bits_n_bobs:*_tiles (andesite/asurine/crimsite/etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: demolishing mismatched machine-room tiles crushes them back to crushed stone and a thin XP gain — nothing is wasted in a well-run factory
- from: bits_n_bobs:brass_lamp / nixie boards (display blocks) | via: create:item_application (apply copper/brass) | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: nixie boards already use create:item_application inbound (made-by shows this); re-routing outbound through deploy would be a 1:1 swap with no loop advance — redundant
- from: bits_n_bobs:chair / tile blocks | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: deco chairs are low-effort everyday items; selling them is possible but M-09 is reserved for high-effort luxury goods — depth mismatch; the mod already sits at 2 anchors and a coin-sell on plain deco is thin

## handcrafted   [anchors: support/decoration (1)]
- from: handcrafted:*_table / *_counter / *_cupboard (wood-variant furniture sets) | via: create:cutting (wood-cutting step before bench assembly) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: fine hardwood furniture needs precision-cut planks from the sawblade — raw logs through the Create saw, then the carpenter's bench; decoration earns a Create tie through the processing chain
- from: handcrafted:berry_jam_jar | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: turning foraged berries into preserves through the cooking process gives the jam jar a food-chain origin and pulls it into the diet system automatically
- from: handcrafted:*_fancy_bed / *_couch (premium furnishings) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a furnished MineColonies inn or player-home generates tradeable luxury goods — couches and fancy beds command a fair coin in a colony economy
- from: handcrafted:bear_trophy | via: loot-seed (boss/rare mob loot) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the trophy is a deco block crafted by the player; seeding it as a boss drop would bypass its crafting recipe, which is thematically backwards (you craft a trophy FROM a hunt, not find one) — no-motif edge, coherence clash

## trek-b0.6.1.1   [anchors: survival (1)]
- from: trek structures (loot chests) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: ruined vaults and forgotten outposts hold stashed coin — scarce regional metal processed into currency, lost with the civilization that made it; finding coin in a Trek ruin makes the economy feel lived-in
- from: trek structures (loot chests) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient ruins contain long-lost reagents and spell fragments — seeding Ars source gems or Iron's Spellbooks scrolls into Trek chests rewards exploration with magic on-ramps
- from: trek structures (loot chests) | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: buried engineering manuals or rare alloy caches (boss-key components) hidden in high-tier structures gate complex Create recipes — exploration unlocks tech depth
- from: trek structures | via: loot-seed (boss key) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: Trek spawns exploration structures, not boss encounters; placing airframe-tier structural alloys as common chest loot would undercut the scarcity/cost model for aeronautics construction — M-23 requires fabricated structural parts, not found loot; better reserved for boss-only drops

## cmparallelpipes   [anchors: create (1)]
- LEAVE — single utility tool (Pipe Wrench) for Create fluid-network QoL; no item material flow, no second-pillar method edge is coherent. Supports the Create spine as pure infrastructure.

## create_train_parts   [anchors: aeronautics (1)]
- from: create_train_parts:brass_sliding_window / train_step_brass | via: create:pressing (brass sheet → window frame) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: train windows are stamped from pressed brass sheet — the factory makes the fittings that dress the locomotive; a natural deploy-application step makes the Create tie explicit
- from: create_train_parts:crossing | via: create:mechanical_crafting | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the crossing block is a track-infrastructure item; routing it through mechanical crafting is plausible but forced — it has no Create material it needs beyond vanilla brass/andesite already available, and the assembly complexity is not warranted for a deco crossing block; depth mismatch (everyday item should not need a complex chain)

## moblassos   [anchors: survival (1)]
- from: moblassos:diamond_lasso (captures any mob) | via: create:mechanical_crafting | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the diamond lasso is an endgame convenience tool — a sequenced assembly route could be thematically argued (precision engineering for a universal capture device), but it's a convenience-QoL item, not a load-bearing progression piece; adding multi-step Create depth to a convenience tool violates the "depth scales with power" rule and would feel punishing
- from: moblassos:golden_lasso (captures animals) | via: aeronautics logistics (narrative tie) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the aeronautics tie is narrative (carry livestock aboard ships) with no method to route material through; no-motif — cannot be authored as a recipe edge; leave as emergent play
- LEAVE — item-utility mod; no material the methods palette can grab; no coherent second-pillar method edge. Supports survival as animal-husbandry QoL.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure code library / config API; zero blocks, zero items, no recipe types, no loot; nothing to weave. Genuine zero-content surface.

## appleseed   [anchors: survival (1)]
- from: appleseed diet system (demand signal for diverse foods) | via: config tie — diet pulls on food production | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a balanced diet is worth real coin — the player who specializes in varied crops and cooking sells the nutrition others can't produce themselves; the diet system makes food a standing market, not a one-time craft
- from: appleseed diet system | via: farmersdelight:cooking / extradelight chains | to: survival (Create production) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Grains/Protein/Vegetables/Fruits/Sugars all map to distinct production chains — milling (grain → flour → bread via Create milling + ExtraDelight baking), ranching (protein), farming (vegetables/fruits) — the diet mechanic is the invisible hand that makes each chain worth running in a co-op pack
- from: appleseed (balanced-diet buff) | via: magic (ars_nouveau:imbuement catalyst) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: appleseed has no item output; the buff is a player status effect, not a material — there is no ingredient to route through imbuement; the connection is conceptually interesting but has no implementation surface, no-motif as a recipe edge

## detect-afk-1.2.2   [anchors: support/QoL (1)]
- LEAVE — server-side behavioral mod; no blocks, no items, no loot, no recipe types; pure AFK detection. Genuine zero-content surface; no weave is coherent or needed.

## copycats   [anchors: create (2)]
- REWORK: the dossier lists "Create (2)" but the anchor breakdown reads as a single Create anchor with a 2-pillar-adjacent note; the second anchor should be clarified as survival/deco per the sanctioned decoration anchor. OK structurally — confirm in dossier update, not a weave task.
- from: copycats:copycat_block / copycat_slope (zinc-built blank shapes) | via: create:pressing (zinc → zinc sheet → blank copycat) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: ACCEPT | hook: copycat blank shapes are stamped zinc sheet, just like any Create casing — the factory makes its own building vocabulary from the same press that makes everything else
- from: copycats:copycat_cogwheel / copycat_shaft | via: numismatics sell (decorative Create machines as luxury build goods) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: copycat blocks are blank forms that take any texture — their value is as a builder's tool, not a finished luxury good; selling "blank zinc stampings" as luxury trade goods has no player-sensible hook; the M-09 framing doesn't fit a utility blank

== CHUNK COMPLETE ==
