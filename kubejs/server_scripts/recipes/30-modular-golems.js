// Modular Golems — "made through Create" (keystone-gating case).
//
// Modular Golems funnels its ENTIRE construction tree through a handful of foundational
// craftables, so we Create-route the whole mod by gating those keystones once each — never the
// ~150 downstream recipes (golem parts, weapons, armor, upgrades). That's the "coherence, not
// grind" bar: gate the source, the branch follows.
//
//   - metal_golem_template -> every humanoid/dog BODY, ARMS, LEGS is stonecut from it, and it
//     gates every golem weapon + armor piece. One gate here Create-routes all golem stock.
//   - empty_upgrade        -> every modifier/upgrade module is crafted from it. One gate here
//     Create-routes the whole upgrade tree.
//   - golem_workbench      -> the assembly station (the "machine"); a one-time marquee craft.
//
// Everything else (twilightforest fiery, cataclysm, l2 magic, allthemodium, dragon-breath
// modifiers, config cards, …) is organic or cross-mod-gated and coherent as-is -> LEFT UNTOUCHED.
//
// CONVENTION: each swap carries the ORIGINAL ingredients as an `orig:` comment (from the
// tools/mod-data recipe digest) so review can catch accidental easier/harder shifts. The digest
// gives ingredients, not exact shape/counts, so shapes below are authored to a fair yield.
//
// Verified against tools/mod-data/recipes/modulargolems-3.1.33.txt.

ServerEvents.recipes(event => {
  const swap = (id, pattern, key) => { event.remove({ output: id }); event.shaped(id, pattern, key) }

  // ── PART STOCK — the funnel every golem body/arm/leg is stonecut from. Bulk-consumed, so keep
  //    it cheap: copper_ingot -> Create-pressed copper SHEET (the gate) + andesite_alloy (the
  //    tier-0 "made with Create" marker). Clay + stick keep the golem-figure character. ──
  // orig metal_golem_template: clay_ball + copper_ingot + stick
  swap('modulargolems:metal_golem_template', ['CSC', ' A ', ' K '], {
    C: 'minecraft:clay_ball', S: 'create:copper_sheet', A: 'create:andesite_alloy', K: 'minecraft:stick'
  })

  // ── UPGRADE MODULE — base of every modifier. Bulk-consumed, so a light single gate:
  //    iron_ingot -> Create-pressed iron SHEET. Amethyst + clay (the "module" guts) kept. ──
  // orig empty_upgrade: amethyst_shard + clay_ball + iron_ingot
  swap('modulargolems:empty_upgrade', [' A ', ' S ', ' C '], {
    A: 'minecraft:amethyst_shard', S: 'create:iron_sheet', C: 'minecraft:clay_ball'
  })

  // ── ASSEMBLY STATION — the "machine" golems are built at; crafted once, so a marquee gate is
  //    fair: an andesite-CASED rig with a precision_mechanism brain. Keeps golem_slicing_axe (the
  //    golem-tech core) + echo_shard + amethyst (the sensors) from the original. ──
  // orig golem_workbench: amethyst_shard + anvil + echo_shard + redstone + smithing_table + golem_slicing_axe
  swap('modulargolems:golem_workbench', ['CEC', 'AXA', 'CMC'], {
    C: 'create:andesite_casing', E: 'minecraft:echo_shard', A: 'minecraft:amethyst_shard',
    X: 'modulargolems:golem_slicing_axe', M: 'create:precision_mechanism'
  })

  // LEFT AS-IS (organic / cross-mod-gated / coherent): all golem parts cut from the now-gated
  // template, golem weapons + armor, the entire modifier/upgrade tree built from the now-gated
  // empty_upgrade, expansion/harbinger/monstrosity templates (netherite/cataclysm/allthemodium
  // gated), config cards, and the cross-mod golem variants (fiery, sonic, etc.).
})
