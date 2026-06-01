// Gliders (Valkyrien-style paragliders) — "made through Create".
//
// Flight gear in an AERONAUTICS pack is squarely on-spine, so the metal reinforcement tiers should
// involve Create rather than a raw ingot slapped on paper. Light, cost-neutral gate: swap the raw
// iron/gold ingot for the Create-pressed PLATE of the same metal (`create:pressing`, 1:1 cost + one
// press). The keystone `reinforced_paper` base and the wood/diamond/netherite tiers stay as-is —
// no Create plate exists for diamond/netherite, and the base is just leather+paper.
//
// Verified against tools/mod-data/recipes/gliders-1.21.1-neoforge-1.1.8.txt.

ServerEvents.recipes(event => {
  // IRON tier. orig reinforced_paper_iron: minecraft:iron_ingot + vc_gliders:reinforced_paper
  event.remove({ id: 'vc_gliders:reinforced_paper_iron' })
  event.shaped('vc_gliders:reinforced_paper_iron', ['P', 'R'], {
    P: '#c:plates/iron', R: 'vc_gliders:reinforced_paper'
  })

  // GOLD tier. orig reinforced_paper_gold: minecraft:gold_ingot + vc_gliders:reinforced_paper
  event.remove({ id: 'vc_gliders:reinforced_paper_gold' })
  event.shaped('vc_gliders:reinforced_paper_gold', ['P', 'R'], {
    P: '#c:plates/gold', R: 'vc_gliders:reinforced_paper'
  })
})
