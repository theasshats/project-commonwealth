# Phase 2 candidates — chunk-16

## searchables   [anchors: support (1)]
- LEAVE — pure client-UI search/filter library; 0 items, 0 blocks, no recipe-types, no gameplay surface. Genuine zero-content library; no material to weave.

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Millstone grinds barley/oat into flour, pulling the farmstead bread chain onto the Create spine; grain specialty feeds the rest of the pack's kitchen recipes.
- from: farm_and_charm:butter / farm_and_charm:bacon (animal-husbandry surplus) | via: minecolonies worker requests | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony cook-hut requests animal products from the farm player, making husbandry a colony supply chain — demand never zeros out once a colony is running.
- from: farm_and_charm:barley / farm_and_charm:oat (grains) | via: vinery:apple_mashing / vinery:wine_fermentation | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Grain ferments into grain-based beer/ale (parallel to grape wine); the aging step creates a maturation specialist role and a tradeable aged good.
- from: farm_and_charm animal-husbandry surplus as numismatics coin | via: numismatics mint | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired — bare sell link is the ambient endpoint, not a weave.
- REWORK: dossier 2nd-anchor candidate listed M-09 (luxury good→coin) — that motif is retired; should be replaced by the M-28 colony-supply and M-35 maturation candidates above. Flag for dossier update.

## railways   [anchors: Create, aeronautics (2)]
- from: railways locometal blocks (brass/copper/iron-wrapped locometal boilers/pillar) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Locometal variants crush back to metal + XP nugget — a standard deco-recycle edge that prevents the large locometal catalog from being a dead-end sink.
- from: railways:conductor_cap (unique mid-tier gear) | via: minecolonies research gate | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Unlocking conductor automation (remote-control train ops) via MineColonies University research gates the railways' logistics capability behind colony progression, making the research itself the non-tradeable asset.
- from: railways narrow/wide tracks as logistics medium | via: aeronautics/railways as route | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Rail + airship form the pack's dual bulk-transport layer; seeding train-required goods (heavy ore crates, colony building materials) makes rail a load-bearing logistics arm beside airships.
- OK — existing create + aeronautics anchors are sound (create:mechanical_crafting + create:sequenced_assembly inbound; transport pillar anchor). The three candidates above deepen without duplicating.

## create_hypertube   [anchors: Create, aeronautics (2)]
- from: create_hypertube:hypertube_entrance / hypertube_accelerator | via: no new motif routes apparent | to: — | motif: — | power: — | tone: — | verdict: REJECT | reason: Hypertube is a player/entity transport network; it outputs no material, pulls only Create parts already covered by inbound create:sequenced_assembly, and has no thematic adjacency to magic/survival that isn't forced. Already at ≥2 anchors.
- OK — connections sound. create + aeronautics (logistics/transport pillar) anchors are coherent and sufficient.

## notenoughcrashes   [anchors: support (1)]
- LEAVE — stability/crash-recovery utility; 0 items, 0 blocks, no recipe-types. Zero gameplay surface; genuine support library. No weave possible.

## fogoverrides   [anchors: support (1)]
- LEAVE — client-only cosmetic fog configuration; 0 items, 0 blocks, no recipe-types. No material graph. Support anchor only.

## mowziesmobs   [anchors: survival (1)]
- from: mowziesmobs:ice_crystal (Frostmaw drop) | via: create:sequenced_assembly (boss-key gate) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Ice Crystal is the keystone input for a high-tier Create cold-process assembly (e.g. a cryogenic compressor or freeze-coil), making killing Frostmaw a prerequisite for an endgame Create build.
- from: mowziesmobs:earthrend_gauntlet / wrought gear (Wroughtnaut drop) | via: occultism:spirit_fire | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Transmuting the wrought-iron gauntlet through spirit-fire yields a heavy occult reagent — the boss fight becomes an entry point into Occultism's ritual chain.
- from: mowziesmobs boss drops (ice_crystal / sol_visage) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Frostmaw's ice crystal or Barako's Sol Visage imbued into an arcane medium yields a unique elemental focus — thematic (ice/solar magic) and gates a high-power Ars spell.
- from: mowziesmobs boss drops as numismatics bounty payout | via: economy bounty | motif: M-14 | verdict: REJECT | reason: M-14 cut — NPC coin faucet, contradicts player-run ruling.
- from: mowziesmobs boss drops as tradeable combat-supply goods | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Combat specialists farm Mowzie bosses and trade their unique artifacts to non-combat players who need them as gate inputs (M-15/M-10 above) — the boss is dual-role: pressure + economy supplier.

## create_enchantment_industry   [anchors: Create (1)]
- from: create_enchantment_industry liquid XP (experience fluid) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Liquid XP piped into an arcane imbuement step as a "concentrated essence" fuel gives the Create enchanting line a direct cost bridge into the magic pillar — the factory produces XP; the wizard consumes it.
- from: create_enchantment_industry liquid XP | via: occultism:ritual (XP-cost rituals) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Occultism rituals that normally cost raw XP levels instead draw from the liquid XP tank — a cross-route dependency: magic ritual tech requires the Create-industrial XP supply line.
- from: create_enchantment_industry:printer (book copying) | via: minecolonies research (knowledge gate) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: Automated book/schedule printing is gated behind a MineColonies Library research tier — the knowledge required to mass-produce enchanted books isn't tradeable, only the output books are, driving a research-progression economy.
- from: liquid XP → magic arcane-infusion on basic components | via: ars_nouveau:imbuement | motif: M-10 | verdict: REJECT | reason: M-10 anti-rule — do not gate basic/everyday components behind infusion. The liquid XP link above is fine for mid/endgame magic processes, but reject any route that makes a basic craft require liquid XP infusion.
- REWORK: dossier lists only 1 anchor (Create); the M-10 + M-29 candidates above credibly add a magic anchor. Flag for update once accepted at Gate 2.

## cristellib   [anchors: support (1)]
- LEAVE — pure library providing structure-config framework; 0 items, 0 blocks, no recipe-types, no loot. Its dependent structure mods (t_and_t, expanded_ecosphere) carry the actual content surface; nothing to weave here.

## imfast   [anchors: support (1)]
- LEAVE — server-side movement-validation patch; 0 items, 0 blocks, no recipe-types. Functionally serves aeronautics but as a fix, not a wireable resource. Genuine zero-content support mod.

## rolling_down_in_the_deep   [anchors: support (1)]
- LEAVE — clientside camera/movement extension for underwater; 0 items, 0 blocks, no recipe-types. No material surface. Support role only.

## wits   [anchors: support (1)]
- LEAVE — server-side /wits debug command; 0 items, 0 blocks. No material graph. Support utility.

## better_climbing   [anchors: support (1)]
- LEAVE — client-side climbing-physics tweak; 0 items, 0 blocks, no recipe-types. No weave possible.

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows stone parapet / arrow-slit blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone parapets crush back to raw stone / gravel + XP nugget — the standard deco-recycle edge; consistent with how other Macaw blocks are treated. Lossy by design.
- from: mcwwindows mosaic glass blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Mosaic glass panes crush back to glass shards — recovers glass for the production chain, consistent with M-04 lossy deco-recycle.
- from: mcwwindows curtains (wool-based) | via: farm_and_charm:mincer or create:milling | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: Theme clash — curtains being milled/minced into fiber is a forced reach; wool → string is vanilla; no coherent processing-chain story here.

## almostunified   [anchors: support (1)]
- LEAVE — recipe/tag unifier; operates on the recipe graph itself, not a material node. 0 items, 0 blocks. Pure infrastructure; no weave surface. (GOTCHA: never unify galosphere:*silver* as c:ingots/silver — galosphere "silver" is palladium.)

## minecolonies   [anchors: survival, Create (2)]
- from: minecolonies colony food outputs (apple_pie, baked_salmon, soups) | via: minecolonies worker requests feeding survival pressure | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: Colony cook/farmer citizens continuously consume food to stay fed and productive — the colony itself is a repeating consumption sink that drives demand for the survival food chain, never letting food demand zero out.
- from: minecolonies University research (research gate) | via: minecolonies research → locked Create tech recipes | to: create | motif: M-37 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: Gating complex Create machines (Mechanical Crafter, sequenced-assembly multi-block) behind colony University research makes the knowledge non-purchasable — players must build the colony, not buy the capability.
- from: minecolonies colony output goods (raw ore, compost, food) | via: aeronautics/logistics bulk transport | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony quarry output (ore streams, raw stone) and food stores are heavy bulk goods that incentivize train/airship cargo runs to distribute — the colony is a producer node that feeds the logistics arm.
- OK — existing survival + Create anchors are coherent. The three candidates add economy/aeronautics reach without repeating existing connections. M-37 is a re-articulation of the already-documented design intent (per dossier note); log as reinforcing.

## create_connected   [anchors: Create (1)]
- from: create_connected:kinetic_battery (energy storage block) | via: create:sequenced_assembly as a required component | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: Kinetic Battery is an endgame energy-buffering block; requiring it as a sub-assembly in a sequenced-assembly chain (for a larger Create machine) adds depth without gating basics.
- from: create_connected copycat blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Copycat blocks (which adopt any texture) can be treated as generic "composite" deco blocks that crush back to their base material + XP nugget — consistent lossy recycle.
- from: create_connected:item_silo / inventory_bridge | via: no motif | verdict: REJECT | reason: Pure logistics/storage blocks; they have no material output suitable for a cross-pillar weave, and "logistics is useful" is not a demand-gating motif. No-motif reject.
- REWORK: dossier lists only 1 anchor (Create). The M-06 kinetic battery candidate could push it to 2 anchors (deeper Create depth), but that's Create→Create, not a second pillar. Flag: create_connected is a borderline 1-anchor (Create-internal) mod — if it stays single-anchor, it's a candidate for a second weave that reaches outside Create. No clean external route is apparent; the M-04 crushback stays on the same Create pillar. Note for review.

## cloth_config   [anchors: support (1)]
- LEAVE — config-screen library; 0 items, 0 blocks, no recipe-types. No material surface. Support dependency.

## ponderjs   [anchors: support (1)]
- LEAVE — packdev documentation tooling (Create Ponder scenes via KubeJS); 0 items, 0 blocks. No material graph. Support/authoring infrastructure.

## attributefix   [anchors: support (1)]
- LEAVE — attribute-cap bugfix library; 0 items, 0 blocks. Enables magic/combat gear to function at high values; no content surface to weave.

== CHUNK COMPLETE ==
