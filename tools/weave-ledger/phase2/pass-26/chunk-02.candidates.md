# Phase 2 candidates — chunk-02 (pass-26)

## opacpvp   [anchors: support/PvP-rules (1)]
LEAVE — zero items/blocks/methods; pure combat-rule config addon. Sanctioned support role; no material surface to weave.

## ctov   [anchors: survival (1)]
- from: ctov village loot tables | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: biome-themed village chests occasionally seed coin (cog/spur) so finding a new village variant pays — exploration has tangible economic reward without changing the villages themselves.
- from: ctov village loot tables | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: outpost/dungeon-variant chests contain small reagent drops (e.g. an Ars source gem fragment or Occultism spirit residue) — adventuring into a pillager variant yields magic-tier progression material, pulling the exploration loop into the magic pillar.
- from: ctov village loot tables | via: loot-seed | to: magic | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional and leans no; the ctov loot-seed angle is better served by M-02 (drop reagent) or M-14 (coin seed); don't stack a third weak villager-trade angle.
OK — existing survival anchor is sound; loot-seed economy and magic links above are the two additions.

## jei   [anchors: client UI / support (1)]
LEAVE — zero items/blocks; recipe viewer. Sanctioned load-bearing support role (see CLAUDE.md on JEI-not-EMI); no content surface to weave.

## lootjs   [anchors: support/library (1)]
LEAVE — scripting API/packdev tool; no items, no methods, not a weave node. It is the enabler of M-02/M-14 loot-seed weaves elsewhere, not a target.

## trailandtales_delight   [anchors: survival (1)]
- from: trailandtales_delight:cheese_wheel / cheese_slice / curd | via: create:pressing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: milk curds go through a Create Mechanical Press to yield cheese — the dairy chain joins the Create processing web and the press output feeds back into cooking recipes, linking the Sniffer-crop tier to the Create spine.
- from: trailandtales_delight:lantern_fruit / golden_lantern_fruit | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the rare Sniffer-recovered fruit is milled in Create for a spice/extract intermediate, so the archaeology loop feeds the Create kitchen chain.
- from: trailandtales_delight:ancient_coffee / cherry_petal_tea | via: create:mixing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: brewed drinks use Create's Mixer to blend their exotic ingredients (pitcher, torchflower) at scale — small-group server production of bulk drinks goes through Create; one isolated mod cluster joins the main processing web.
- from: trailandtales_delight:cherry_cheese_pie / cooked_sniffer_egg multi-step dishes | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; these are sellable but the connection is trivially true of any quality food; the Create-processing weave (above) is where the real value sits.
REWORK: no existing inter-system connections; three Create-processing ACCEPT edges above bring it from 1→2 anchors (survival + Create), satisfying the ≥2 target.

## kobolds   [anchors: economy, survival (2)]
- from: kobolds:kobold_skull | via: occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Kobold Skull, the creepy trophy from slain undead kobolds (Skelebolds/zombolds), is rendered into a soul-infused reagent by Occultism spirit fire — combat drops from the underground civilization route into the magic pillar, and the skull gets a use beyond a curiosity.
- from: kobolds trades (Prospector enchantment, redstone goods) | via: village-trade route | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); kobolds already sit in the economy anchor via emerald trade; no new edge needed here.
OK — kobolds already spans economy + survival; the kobold_skull → occultism spirit_fire edge (ACCEPT above) adds a magic tie if desired. Core connections sound.

## vinery   [anchors: survival (1)]
- from: vinery:grape_juice / apple_mash | via: create:pressing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: grapes fed into a Create Mechanical Press yield grape juice, giving the grape-growing line a mechanical processing path alongside the grapevine_pot — the rustic vineyard hooks into the Create spine at the most natural step.
- from: vinery wines (effect-bearing bottles, aged) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a matured wine with alchemical properties is imbued through Ars Nouveau's enchanting apparatus to strip its essence as an arcane solvent or flux — the high-end fermentation chain crosses into magic, and aging becomes a meaningful time gate.
- from: vinery wines / apple_cider | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; wines are trivially sellable; the Create-processing and magic-imbuement edges above are the distinctive anchors.
REWORK: currently 1 anchor (survival); Create-pressing and Ars imbuement edges above bring it to 3, satisfying ≥2. OK once those are authored.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (kinetic source) | via: aeronautics SU demand | to: aeronautics | motif: M-24 | power: everyday | tone: ok | verdict: REJECT | reason: M-24 covers mechanical components → aeronautics drivetrain recipes; the Treadmill is a rotational *source*, not a drivetrain component — using it as an aeronautics input has no thematic coherence (no one straps a hamster wheel onto an airship), and the dossier explicitly notes no clean 2nd-anchor routing; no-motif for propulsion-source → ship-part.
- from: createtreadmill:treadmill (early-game hand-power) | via: survival pressure | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the Treadmill provides rotational power from player effort — thematically it serves early survival before windmills/waterwheels are built, but "player runs on it" is flavor, not a material weave; no item route exists; no-motif → reject-for-review.
LEAVE (2nd anchor) — the treadmill's cross-mod seam to touhou_little_maid (Soul Orb / Photo consumption) is the only item-level join key and TLM is curated flavor, not a loop pillar. Confirmed LEAVE for 2nd anchor.

## inventoryprofilesnext   [anchors: client QoL / support (1)]
LEAVE — client-side UI behavior; no items, no methods, no material surface. Support role, no weave possible.

## naturescompass   [anchors: support/QoL (1)]
LEAVE — single craftable item is a biome-locator with no material outputs; zero methods registered. Sanctioned exploration utility.

## knightlib   [anchors: support/library (1)]
LEAVE — API library; its content items (great_chalice, grail, homunculus, essence) are inert without Knight Quest (not in pack). Do not weave dead items.

## betteranimationscollection   [anchors: support/visual (1)]
LEAVE — client-side animation replacements; zero items/blocks/methods; no material surface.

## moogs_structures   [anchors: support/library (1)]
LEAVE — worldgen library/API; zero blocks/items/loot. Pure infrastructure dependency.

## cristellib   [anchors: support/library (1)]
LEAVE — structure-config library; zero blocks/items; no material surface. Pure dependency.

## pantographsandwires   [anchors: Create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the coal_coke intermediate produced for wire-making is also a TFMG coking input — the overhead-line supply chain cross-feeds TFMG's industrial processing, a natural shared industrial material node that turns a byproduct into a bridging reagent between two heavy-industry layers.
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:milling or tfmg | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: graphite is already produced via Create processing inbound (the dossier shows create:milling/mixing as made-by methods), so this would be a circular self-use rather than a new cross-system edge; not a new anchor.
OK — pantographsandwires is already at 2 anchors (Create + aeronautics); connections are sound. The coal_coke → TFMG edge is a depth addition within the existing anchors, not a 3rd anchor claim.

## snowyspirit   [anchors: survival (1)]
- from: snowyspirit:ginger (c:crops/ginger, c:seeds/ginger) | via: create:milling | to: create | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: ginger is a Serene Seasons winter-flavored crop (wild in sparse jungle, scarce off-season) — milling it in Create yields ground ginger/spice, making it a seasonal reagent that feeds Create's cooking/mixing chain; scarcity in summer drives demand for the winter harvest window.
- from: snowyspirit:ginger | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this doesn't add a new anchor — farmersdelight:cooking is already within the survival pillar; the Create-milling edge (above) is the distinctive cross-system move; adding FD:cooking redundantly pads the count without advancing the loop.
- from: snowyspirit:eggnog | via: vinery:wine_fermentation (or create:mixing) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: eggnog brewed at scale routes through a Create Mixer (milk + eggs + ginger extract at mixing ratios), pairing the festive drink with the same industrial chain as Vinery wines — the winter food tier enters the Create processing web alongside the rest of the food mods.
- from: snowyspirit:gingerbread_golem | via: occultism:ritual or spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a gingerbread golem's soul residue (a mob drop — "gingerbread crumbs" conceptually, not a registered item, so this would be a loot-seed + spirit_fire route) is transmuted in Occultism into a minor spirit-essence; whimsical-organic mob feeding the magic pillar — tone fits the festive-creature-meets-dark-alchemy angle just enough (red-team: this IS a stretch; the golem is pure holiday flavor, spirit_fire might feel tone-clashing; survivable as a fun curio).
- from: snowyspirit:gingerbread_golem mob drop | via: loot-seed + occultism:spirit_fire | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: reconsidered — the gingerbread golem is purely festive/cozy flavor; routing a Christmas golem's remains through Occultism spirit fire clashes tonally (dark ritual sink vs. holiday whimsy) and a player would not find it "of course"; drop this candidate.
REWORK: no existing cross-system connections; the ginger→Create milling (M-16) and eggnog→Create mixing (M-12) edges bring it to survival + Create (2 anchors). Sound.

## yungsapi   [anchors: support/library (1)]
LEAVE — API library; no player-facing items; no methods; no loot. Pure dependency for YUNG's structure mods.

## fogoverrides   [anchors: support/client (1)]
LEAVE — client visual config; no items, no methods, no material surface. Sanctioned support role.

## cubes_without_borders   [anchors: support/client (1)]
LEAVE — client display option (borderless windowing); zero items/blocks/methods. Pure support.

## create_pattern_schematics   [anchors: Create (1)]
LEAVE — Create-internal build-automation tooling (schematic tiling); no materials, no foreign methods, no cross-system seam. Confirmed by dossier.

== CHUNK COMPLETE ==
