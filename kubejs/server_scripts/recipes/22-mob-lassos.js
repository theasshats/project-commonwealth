// Mob Lassos (#171) — capture power priced through Create, and bosses made un-lassoable.
//
// Lassos trivialize transport/breeding/farms if cheap (stock golden = string + gold nugget + pearl).
// Reframe: capture is a PRIVILEGE on the tier ladder — recipes run through Create parts and tier
// tokens (CREATE-SPINE.md Part 2b-ii), and the top tier consumes a boss key (the #pcmc:boss_keys
// roster's first consumer — ANY roster boss works, no chokepoint).
//
//   golden  (T2-3 base)   — Create electronics (locked exclusives) + ender + gold INGOTS
//   aqua    (ocean branch)— golden + prismarine + any fish
//   emerald (villager)    — golden + emeralds + brass (the trade metal); contract gets a brass seal
//   hostile (combat, hard)— golden + blaze rods + obsidian plates + a MONSTROUS HORN (Ancient Remnant)
//   diamond (master)      — golden + aqua + hostile merged + diamonds + ANY #pcmc:boss_keys drop
//   creative              — stays creative-only (no recipe shipped; none exists stock either)
//
// BOSS EXCLUSION: the mod has NO eligibility config or entity tags (verified against ServerConfig +
// ModRegistry upstream, 21.1.1) — eligibility is hardcoded by mob category. So the boss blacklist is
// enforced PACK-SIDE: cancel lasso use on the deny list below. Ids grounded in tools/mod-data/loot
// entity loot tables; the two marked ⚠ are derived from loot names — verify in playtest. FAIL-OPEN:
// an id typo means that boss stays capturable (no crash) — extend the list as the audit finds gaps.
//
// LOAD-SAFE / UNVERIFIED in-game; playtest items on #234.

ServerEvents.recipes(event => {
  // ── golden_lasso — the base. Locked-exclusive Create electronics make it a real T2-3 build. ──
  event.remove({ output: 'moblassos:golden_lasso' })
  event.shaped('moblassos:golden_lasso', [
    'SSS',
    'TET',
    'GPG'
  ], { S: 'minecraft:string', T: 'create:electron_tube', E: 'minecraft:ender_pearl',
       G: '#c:ingots/gold', P: 'create:precision_mechanism' })

  // ── aqua_lasso — ocean branch off golden. ──
  event.remove({ output: 'moblassos:aqua_lasso' })
  event.shaped('moblassos:aqua_lasso', [
    'NFN',
    'FLF',
    'NFN'
  ], { N: 'minecraft:prismarine_shard', F: '#minecraft:fishes', L: 'moblassos:golden_lasso' })

  // ── emerald_lasso — villager branch off golden; brass = the trade metal. ──
  event.remove({ output: 'moblassos:emerald_lasso' })
  event.shaped('moblassos:emerald_lasso', [
    'EBE',
    'BLB',
    'EBE'
  ], { E: '#c:gems/emerald', B: '#c:ingots/brass', L: 'moblassos:golden_lasso' })

  // ── contract — hiring paperwork, now notarized in brass. ──
  event.remove({ output: 'moblassos:contract' })
  event.shapeless('moblassos:contract', [
    'minecraft:paper', 'minecraft:feather', 'minecraft:ink_sac', 'minecraft:glass_bottle',
    'create:brass_sheet'
  ])

  // ── hostile_lasso — capturing monsters is earned with a monster's trophy (Ancient Remnant horn). ──
  event.remove({ output: 'moblassos:hostile_lasso' })
  event.shaped('moblassos:hostile_lasso', [
    'OBO',
    'BLB',
    'OHO'
  ], { O: '#c:plates/obsidian', B: 'minecraft:blaze_rod', H: 'cataclysm:monstrous_horn',
       L: 'moblassos:golden_lasso' })

  // ── diamond_lasso — the master lasso merges the whole ladder + ANY boss key (flat roster, #220). ──
  event.remove({ output: 'moblassos:diamond_lasso' })
  event.shaped('moblassos:diamond_lasso', [
    'DDD',
    'ALH',
    'DKD'
  ], { D: '#c:gems/diamond', A: 'moblassos:aqua_lasso', L: 'moblassos:golden_lasso',
       H: 'moblassos:hostile_lasso', K: '#pcmc:boss_keys' })

  console.info('[pcmc] mob lassos re-priced through Create: golden=electronics, hostile=monstrous horn, diamond=ladder merge + any boss key; contract notarized.')
})

// ── Boss exclusion — no lasso captures a boss, ever (the mod offers no hook; enforced here). ──
const LASSO_BOSS_DENY = [
  // vanilla
  'minecraft:ender_dragon', 'minecraft:wither',
  // L_Ender's Cataclysm (mains + the two bar-carrying minibosses)
  'cataclysm:ender_guardian', 'cataclysm:netherite_monstrosity', 'cataclysm:ignis',
  'cataclysm:the_harbinger', 'cataclysm:the_leviathan', 'cataclysm:ancient_remnant',
  'cataclysm:maledictus', 'cataclysm:scylla', 'cataclysm:aptrgangr', 'cataclysm:kobolediator',
  // Mowzie's Mobs
  'mowziesmobs:ferrous_wroughtnaut', 'mowziesmobs:frostmaw', 'mowziesmobs:umvuthi', 'mowziesmobs:sculptor',
  // Born in Chaos (⚠ supreme_bonescaller + lord_pumpkinhead derived from loot-table names — verify)
  'born_in_chaos_v1:lifestealer_true_form', 'born_in_chaos_v1:nightmare_stalker',
  'born_in_chaos_v1:supreme_bonescaller', 'born_in_chaos_v1:zombie_clown',
  'born_in_chaos_v1:krampus', 'born_in_chaos_v1:lord_pumpkinhead'
]
const LASSO_IDS = [
  'moblassos:golden_lasso', 'moblassos:aqua_lasso', 'moblassos:emerald_lasso',
  'moblassos:hostile_lasso', 'moblassos:diamond_lasso'
  // creative_lasso deliberately exempt — it's the operator tool.
]

ItemEvents.entityInteracted(event => {
  if (!event.item || !event.target) return
  if (LASSO_IDS.indexOf(String(event.item.id)) === -1) return
  if (LASSO_BOSS_DENY.indexOf(String(event.target.type)) !== -1) {
    event.cancel()
  }
})
