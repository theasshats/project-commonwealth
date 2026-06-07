# Phase 2 candidates — chunk-01

## ribbits   [anchors: survival (1)]
- from: ribbits:toadstool (brown/red) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: frog-folk's toadstools are fungi — milling them into spore-dust feeds a Mixer-based potion/brew input (Ars or Occultism reagent path); the sorcerer Ribbit already implies the material has latent magic
- from: ribbits:toadstool | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: toadstool spore-dust is a light arcane ingredient attuned by the sorcerer Ribbit; imbuement produces a minor reagent (no basic-gating violation — toadstool is plentiful, one step)
- from: ribbits:mossy_oak_planks (and family) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this as WEAK — generic wood crushing produces only gravel + xp nugget, no loop advance; pure M-04 deco-crush for a single wood type that adds no scarcity node is noise. Defer to wholesale deco-family pass.
- from: Ribbit Amethyst-Shard trade economy | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: Ribbits use Amethyst Shards (vanilla item) not a scarce regional metal, and they're NPC traders — minting coin FROM an NPC faucet is exactly the M-14/M-21 pattern that was cut. The Shard→coin path would be an NPC coin faucet disguised as M-08. If the shard is tied to regional scarcity via GTMOGS, that becomes M-30, but that's a separate weave on the ore-gen layer, not here. REJECT.
- from: ribbits:maraca (music-session item) | via: supplementaries:item_lore or no method | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: M-33 (service-for-hire) fits conceptually — a musician Ribbit "performs" — but the maraca is a player-held novelty; there is no mechanic for a player to perform as a service. No delivery method; no-motif on the implemented side. REJECT (no implementing method).
REWORK: dossier's existing "economy via shard↔coin bridge" candidate — as noted above, this is an NPC faucet pattern (M-14 equivalent, cut); should be removed from the 2nd-anchor candidates or restated as a M-30 regional-scarcity weave on a different material.

## create_pattern_schematics   [anchors: create (1)]
LEAVE — pure build-automation tooling for Create's schematics/Schematicannon; 3 items, no processing surface, no material to route. Genuine zero-content library in weave terms.

## terrablender   [anchors: support (1)]
LEAVE — zero items/blocks/methods; worldgen-API library only. No surface to weave.

## lootr   [anchors: support/QoL (1)]
LEAVE — per-player loot instancing; no items of its own worth routing (the reskinned container blocks are implementation internals). No weave surface.

## terralith   [anchors: survival (1)]
- from: terralith biome set (65 c:tags) | via: loot-seed | to: survival/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Terralith defines hard region boundaries (Skylands only above certain terrain, volcanic biomes only in specific noise zones); seeding region-specific drops (rare ore veins, unique flora) into Terralith-biome loot tables gates those materials to exploration — the regional-scarcity foundation that drives the trade loop. Already has 65 c:tags defined, so other mods can key off biome membership. Via: loot-seed + GTMOGS biome-based ore-gen placement riding Terralith biomes.
- from: terralith biome variety | via: worldgen/spawn gating | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith's diverse biome palette gives Serene Seasons (seasonal reagent mod) a much richer surface — more biome types = more seasonal spawn variation, making M-16 seasonal reagents more regionally distinct. Via: config tie (Serene Seasons biome-season mapping against Terralith biome tags).
- REWORK: dossier says "none — leave" for 2nd anchor, citing no items. But loot=yes and 65 c:tags mean Terralith is a delivery platform for M-30 (regional scarcity through biome-keyed ore-gen) and M-16 (seasonal reagents keyed to its biome diversity). The dossier under-values this. The two ACCEPT rows above correct this.
OK — current survival anchor is sound; the two new links (M-30/M-16) add a scarcity-foundation and seasonal-driver role.

## mcwwindows   [anchors: support/deco (1)]
- from: mcwwindows:*_mosaic_glass (colored variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier already flags this as WEAK; mosaic glass crushes back to glass pane shards + xp nugget — no scarcity node, no loop advance, and a wholesale deco-family pass is the right venue. Single-mod M-04 on glass is noise.
- from: mcwwindows:*_curtain (wool-based) | via: create:milling | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: milling curtains/wool into string/fiber makes mild thematic sense but adds nothing to the loop; wool is not scarce and there's no downstream consumer for "milled wool dust." Thematic stretch + no loop advance.
- from: mcwwindows stone parapet/arrow_slit variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: same as dossier note — WEAK, generic; fold into deco-family pass. Not a standalone weave.
LEAVE — decoration palette; no standalone weave surface. Fold into a wholesale deco-family pass (M-04 on stone variants only).

## freefbible   [anchors: support/flavor (1)]
LEAVE — single inert novelty readable item; no content surface. Any recipe edge would be forced noise.

## expandeddelight   [anchors: survival (1)]
- from: expandeddelight:salt_ore / deepslate_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Salt ore runs through a Create Crusher like any ore (→ salt dust + stone byproduct); salt dust is then a seasoning reagent in Farmer's Delight / ExDelight recipes — the ore-doubling reward funds the cooking chain. One clean step; depth proportional to power.
- from: expandeddelight:salt (dust) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Millstone produces refined salt (coarser grind than crushing), feeding ExDelight's salting/seasoning chain — ties the milling step to food processing so a Create Millstone earns its place in the kitchen pillar.
- from: expandeddelight:cinnamon_log | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milling cinnamon bark → cinnamon dust (already a c:dusts/cinnamon tag) via the Millstone pulls ExDelight's unique tree crop through the Create spine; the dust feeds baking/cooking recipes downstream.
- from: expandeddelight:cheese_wheel (aged) | via: extradelight:evaporator or farmersdelight:cooking | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Cheese aging is already implemented (cask → cheese over time); aged cheese wheel is a time-gated value-add good (M-35 maturation/aging specialist role). The player who runs the dairy ages the cheese and trades it — natural economy node. Via: existing cask mechanic (no new recipe needed, the delivery is "flag as aged/specialty good for trade"). Note: delivery here is design framing + colony-request tie (M-28) rather than a new recipe.
- from: expandeddelight:cheese_wheel | via: minecolonies request system | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: Colony cook huts could request aged cheese as a luxury ingredient — gating colony growth behind a dairy specialist's supply. M-28 colony route, cheese as a colony-demanded good.
- from: expandeddelight:chili_pepper (crop) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Milled dried chili → chili powder (a c:dusts/chili flavoring); feeds seasoned dish recipes in FD/ExDelight. Light one-step pull through the spine.
- from: expandeddelight:salt_ore regional spawn | via: GTMOGS biome placement | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: If salt ore spawns only in specific biome bands (arid / coastal / deep), it becomes regionally scarce — players in forest biomes must trade for salt (needed in many cooking recipes), anchoring ExDelight's food chain to the scarcity loop.
- from: expandeddelight economy note (dossier: "aged cheese/salt as luxury sellable, M-09") | via: — | to: — | motif: M-09 RETIRED | verdict: REWORK | reason: dossier candidate lists M-09 (luxury good → coin) which was retired. The underlying idea is sound but must be recast as M-35 (maturation specialist) + M-28 (colony demand) + M-30 (regional scarcity), which the ACCEPT rows above do. Remove the M-09 candidate from the dossier.

## attributefix   [anchors: support (1)]
LEAVE — pure attribute-cap bugfix; no items, no content surface. Weaving belongs on gear mods whose scaling it enables.

## everycomp   [anchors: support (1)]
LEAVE — runtime block/recipe generator; its outputs ride host mods' namespaces and weave there. No standalone surface.

## kiwi   [anchors: support/library (1)]
LEAVE — developer library; zero player-facing items or methods.

## rolling_down_in_the_deep   [anchors: support/client (1)]
LEAVE — client-only camera/movement addon; no items, no weave surface.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments (general) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Spirit fire transmutes Gaia's exotic fragments (bone knight shards, harpy feathers, arachne silk) into occultism essences — the bestiary becomes the raw feedstock pipeline for the magic pillar; killing rare mobs is how you get mid-tier magic ingredients.
- from: grimoireofgaia mob-drop fragments | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Exotic Gaia drops (gorgon scales, vampire ash, mermaid pearl) imbuement-converts into Ars source-adjacent reagents — pulling the bestiary into the magic web. M-02 mob-drop reagent sink; imbuement is the method.
- from: grimoireofgaia:bust_* (mini-boss loot) | via: loot-seed / boss drop | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A mini-boss bust (e.g. gorgon bust, valkyrie bust) is the gating drop for a complex Create/tech recipe — fitting the mythic-boss-as-key-gate design; the bust is rare and thematically heavy enough to gate a significant production unlock.
- from: grimoireofgaia:ring_* artifacts | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Artifact rings (Ring of Speed/Jump/Haste) are endgame wearables — a sequenced-assembly chain producing a `derpack:incomplete_ring` → finished ring would gate them behind Create's deep craft, making the rings a prize for tech specialists rather than a lucky drop. Endgame depth is appropriate.
- from: grimoireofgaia c:nuggets/diamond, c:nuggets/emerald | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: crushing diamond/emerald nuggets back to dust is M-03 ore-doubling, but these are already-processed outputs of killing mobs — re-crushing them is a downgrade loop (mob kill → nugget → dust → ...). No net loop advance; feels arbitrary. REJECT.
- from: grimoireofgaia:pearl_block | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Pearl block (a decorative structure block from Gaia) imbuement-infuses into a source-charged pearl — a niche but coherent arcane substrate from the depths of the bestiary world. Thematic (pearlescent, aquatic fantasy), one step.
- from: Gaia boss drops (general high-tier loot) | via: emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: Combat specialists farm Gaia mini-bosses; their rare drops (busts, rings, pearls) are traded to non-combat players who need them as recipe inputs (M-15 gate items, M-02 magic reagents). M-34 combat-route supply — the bestiary's economy role.
- from: grimoireofgaia mod (general) | REWORK: dossier's "economy via numismatics — boss busts as sale goods, M-08/M-02" — M-08 is player-minted currency from scarce metal, not "sell a bust for coin." This candidate mixes the combat supply role (M-34, valid) with a bare sell link (ambient endpoint, retired). Recast as M-34 (accepted above). Remove M-08 tag from this economy candidate.
OK — survival anchor sound. New weaves add magic (M-11/M-02/M-10), Create (M-15/M-06), and economy (M-34) nodes; grimoireofgaia becomes one of the pack's strongest multi-system contributors.

## accessories   [anchors: support (1)]
LEAVE — accessory-slot API library; no items, no weave surface. The wearables that weave live in other mods.

## sound_physics_remastered   [anchors: support/client (1)]
LEAVE — client audio simulation; no items or methods, nothing to route.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
LEAVE — Kotlin language adapter; zero player-facing content.

## pantographsandwires   [anchors: create, aeronautics (2)]
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's coking oven turns raw coal into coke; pantographsandwires consumes coal_coke as a crafting input for its overhead-wire infrastructure. Routing TFMG coke byproduct into pantographs creates an industrial byproduct-chain: coal → coke (TFMG) → catenary wire (pantographs) — a circularity that ties two Create-adjacent mods together. M-32 byproduct → input.
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create:milling | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Graphite ingots (produced by the pantographs processing chain) could be milled into graphite powder — a dry lubricant / conductor intermediate that feeds other Create-electrical recipes (e.g. Create New Age components, electrical windings). M-12 processing-chain pull — opens graphite as a cross-mod conductor reagent.
- from: pantographsandwires overhead electric rail | via: config/design tie | to: aeronautics | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: Electric train lines (pantographs + Create trains) are the ground-logistics arm of the economy pillar alongside aeronautics; a cross-route dependency — airship routes handle bulk cargo, electric rail handles high-frequency regional runs — creates a two-mode logistics specialization where neither fully replaces the other (M-29 cross-route dependency). Via: design/narrative framing + possible recipe requiring pantographsandwires components to build train stations used by Create trains.
- from: pantographsandwires:coal_coke | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: clash | verdict: REJECT | reason: haunting coal coke → some soul-coal output is technically possible but the tone clashes — coal coke is a purely industrial material; the soul-fire/haunting path thematically implies organic/living material, not processed coke. Forced edge.
REWORK: dossier says "no new edge needed" for pantographsandwires (already ≥2 pillars). The M-32 and M-12 rows above are genuine new links (not forced), but all three ACCEPT rows are additive quality improvements, not required. OK — connections sound; the new links deepen rather than patch.

## mcwstairs   [anchors: support/deco (1)]
- from: mcwstairs stone/brick/blackstone stair variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags WEAK; generic stone deco crush adds nothing to the loop. Fold into wholesale deco-family pass only.
LEAVE — decoration palette; same ruling as mcwwindows. Fold into a deco-family pass.

## fxntstorage   [anchors: create, survival (2)]
- from: fxntstorage:backpack_flight_upgrade | via: aeronautics / design tie | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: the flight upgrade is a worn gadget (gives personal flight); it is not an airframe structural part or hull component. M-23 is specifically about load-bearing structural metals for airship construction, not personal flight items. Tone/category mismatch. REJECT.
- from: fxntstorage:hardened_backpack (top tier) | via: create:mechanical_crafting | to: create | motif: M-05 | power: endgame | tone: ok | verdict: REJECT | reason: the backpack already uses create:mechanical_crafting (made-by — existing inbound weave); proposing M-05 is redundant with what's already in place. Not a new link. REJECT.
- from: fxntstorage storage boxes (bulk-goods storage) | via: aeronautics cargo context | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: Bulk storage boxes on an aeronautics ship are the natural on-board cargo containers — requiring fxntstorage Storage Boxes (brass-tier) as a placed cargo-hold component on ships makes the logistics arm depend on Create-tier storage fabrication. M-31 logistics-required bulk good (the storage IS the cargo hold). Via: aeronautics ship-building recipe or design convention.
OK — already at 2 anchors (create + survival); the M-31 link adds a third (aeronautics logistics arm) coherently. Connections otherwise sound.

## miningspeedtooltips   [anchors: support/UI (1)]
LEAVE — tooltip-display mod; no items, no weave surface.

== CHUNK COMPLETE ==
