// The Bible (freefbible) — de-memed into a sensible-but-HARD recipe  (issue #17).
//
// Stock recipe is a joke: apple + bookshelf + diamond_sword + gold_ingot + mutton + torch. Per the
// maintainer call ("sensible, but hard"), rebuild it as a proper holy relic: a gilded, quill-bound
// book built AROUND a Totem of Undying. The totem (an evoker/raid-captain drop) is the difficulty
// gate — divine/resurrection theme, and genuinely hard to get — while gold + books + feathers read
// as an illuminated gilded scripture. Not Create-gated: it's a flavor relic, not pack-tech.
//
// Verified against tools/mod-data/recipes/freefbible-NEOFORGE-1.21.1-1.0.0.txt
// (recipe id `freefbible:freef_bible_recipe` -> output `freefbible:freef_bible`).

ServerEvents.recipes(event => {
  event.remove({ id: 'freefbible:freef_bible_recipe' })
  event.shaped('freefbible:freef_bible', ['GBG', 'FTF', 'GBG'], {
    G: '#c:ingots/gold',          // gilded cover
    B: 'minecraft:book',          // scripture
    F: 'minecraft:feather',       // quill-bound
    T: 'minecraft:totem_of_undying' // the divine core + the hard gate
  })
})
