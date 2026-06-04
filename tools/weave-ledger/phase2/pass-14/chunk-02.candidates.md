# Phase 2 candidates — chunk-02

## bagus_lib   [anchors: support/library (1)]
- LEAVE — genuine zero-surface library (0 blocks, 0 items, no loot, no recipe methods). Pure code API for baguchi's mod suite. Nothing to weave.

## necronomicon   [anchors: support/library (1)]
- LEAVE — genuine zero-surface library (0 blocks, 0 items, no loot, no recipe methods). Pure API/config/datagen helper for dependent mods (opacpvp). Nothing to weave.

## createtreadmill   [anchors: Create (1)]
- from: createtreadmill:treadmill (physical-effort kinetic block) | via: recipe (crafting-table) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: treadmill-as-survival item doesn't compose any existing motif; it's a power source (Create pillar), not a survival material; cross-listing it to survival would be labeling, not a real connection.
- from: createtreadmill:maid_motor (consumes touhou_little_maid Soul Orb / Photo → SU) | via: recipe or loot-seed | to: magic | motif: no-motif | power: mid | tone: clash | verdict: REJECT | reason: TLM Soul Orb/Photo is a maid-flavor item, not a magic-pillar material (Ars/Iron's/Occultism). Routing it through Ars imbuement or Occultism ritual would invent a lore bridge that doesn't hold; the "soul" theming is superficial here. No motif covers maid-spirit → arcane.
- from: createtreadmill:treadmill | via: numismatics sell / trade | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); a treadmill isn't a trade good in any coherent economy sense — it's infrastructure, not a commodity. Even if M-21 were accepted, the theme fit is weak.
- REWORK note: dossier says "no clean 2nd-pillar routing without forcing it." Confirmed — loot=yes but the two items are the treadmill and maid_motor themselves (crafted machines), not drops. No loot-seed opportunity. One-pillar status is correct for now; revisit only if TLM itself gains a pillar anchor that elevates its items.

## createaddoncompatibility   [anchors: support/compat (1)]
- LEAVE — zero content surface (0 blocks, 0 items, no loot). A pure tag/priority unification layer. The one tfmg:distillation recipe it owns is a glue recipe that routes plastic; there is no independent material surface to weave from or to. Support role confirmed.

## create_hypertube   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create (kinetic-powered tube network) + aeronautics/logistics (player/entity fast-transit that complements trains and airships). Already at 2 pillars; both anchors are solid.
- from: create_hypertube:hypertube_entrance (entity-propulsion block, built via create:sequenced_assembly) | via: recipe (adds economy material as cost component) | to: economy | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: making tubes cost a coin-type material doesn't compose a real economy pillar — it's cost inflation, not a cross-pillar use. No motif.
- from: hypertube network (can transport villagers/mobs through tubes) | via: config/worldgen | to: economy | motif: M-21 (provisional) | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional/leans-no; villager-tube transit as an economy mechanic is too speculative and requires a functional compat that doesn't exist in the mod. Not worth surfacing.
- REWORK: existing aeronautics anchor is by association (fast-transit logistics pillar) rather than a recipe-routed connection. No authored weave backs it up. Flag for Phase 3 note: confirm that aeronautics anchor is intentional flavor-anchor (no recipe needed) rather than requiring a formal weave. If a formal weave is desired, M-24 (mechanical component → propulsion/control) doesn't naturally apply to a passenger tube. Anchor is defensible as-is if the pack treats "logistics" as the aeronautics pillar's scope.

## create_confectionery   [anchors: Create, survival (2)]
- OK — existing Create + survival connections are sound. Deep cocoa→chocolate processing chain through native Create methods; candies grant food effects (survival).
- from: create_confectionery:bar_of_black_chocolate / bar_of_ruby_chocolate / candy items (multi-step processed luxury goods) | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A chocolate factory running Create mixers and presses turns cocoa beans into sellable confections — the finished bars are natural trade goods in a player economy, just as real-world confectionery is a commodity. Ruby chocolate especially (more exotic process) is a premium sell-price tier.
- from: create_confectionery:hot_chocolate (grants Regeneration effect food) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Hot chocolate — a warm restorative — is a plausible cauldron brew input that yields a low-tier Regeneration potion, bridging the chocolate factory to the magic pillar's brewing system. Everyday power = one light step, fits the rule.
- from: create_confectionery:gingerbread_block / candy_cane deco | via: recipe (crafting) | to: aeronautics | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: routing deco blocks into airship recipes is pure filler; no motif, and the whimsical confectionery tone clashes with structural aeronautics materials.

## spark   [anchors: support/performance (1)]
- LEAVE — genuine zero-surface mod (0 blocks, 0 items, no loot, no recipe methods). Server-side profiler, commands only. Nothing to weave; support role confirmed.

## irons_spellbooks   [anchors: magic, Create (2)]
- OK — existing magic + Create connections are sound. Alchemist cauldron already uses create:emptying/filling (inbound); arcane_essence is the Iron's-side magic currency bonded via M-01.
- from: irons_spellbooks mithril ore / raw_mithril (c:ores/mithril, c:raw_materials/mithril) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Mithril is the mid-game metal for spell gear — feeding it through a Create ore-doubler gives the Create specialist a reason to process wizard ore, and the magic specialist a reason to run a Create crusher. Ore-doubling byproduct (experience nugget) is a natural bonus. Light step; everyday tier.
- from: irons_spellbooks:arcane_essence (Iron's magic currency, reserved M-01) | via: ars_nouveau:imbuement | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence ↔ source_gem mint-in/mint-out is explicitly noted in the ledger as the bonded currency bridge. Surfacing here as a formal candidate. Deep magic players already expect the two magic currencies to exchange.
- from: mob-drop loot from Iron's mobs (apothecarist, ice_spider, etc.) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The apothecarist and ice spider are Iron's own hostile mobs with thematic drops; routing their drops as reagents into Occultism spirit-fire or Ars imbuement gives the mob-combat player a magic-economy use for the drops. Fits M-02 (mob-drop reagent sink) cleanly.
- from: irons_spellbooks boss/structure loot tables (wizard towers, arcane debris) | via: loot-seed | to: economy | motif: M-14 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-14 is provisional (bounty board → coin). Seeding coin into wizard-tower loot is coherent (adventurers loot coin from mage estates) but M-14 is tagged for the 0.9 economy review. Surface for review but don't author now.
- from: irons_spellbooks:arcane_essence or spell scrolls (one-shot spell) | via: createaddition:charging | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Charging a spell focus or scroll through Create's electric tier (Create-Addition charging station) — a spark of FE attunes the magic item — threads the electrical side of the Create spine into the magic school. Fits M-17 "only when it makes sense"; a spell focus taking an electrical charge is thematically plausible (arcane + lightning school especially).
- REWORK: existing Create anchor is currently backed only by create:emptying/filling on the alchemist cauldron — solid but passive (fluid I/O). The new M-03 mithril-crushing and M-17 charging candidates would give Iron's active inbound Create ties beyond just fluid plumbing. Worth authoring.

## trashslot   [anchors: support/QoL (1)]
- LEAVE — genuine zero-surface mod (0 blocks, 0 items, no loot, no recipe methods). Client-side UI convenience slot only. Nothing to weave; support role confirmed.

## createfisheryindustry   [anchors: Create, survival (2)]
- OK — existing Create + survival connections are sound. Kinetic bait traps, mechanical peeler (Create processing), seafood foods and diving gear (survival).
- from: createfisheryindustry seafood dishes (seafood_chowder, lobster_soup, mussel_soup, cooked_lobster — high-effort multi-step processed foods) | via: numismatics sell / trade | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: A Create-automated cannery processing fresh catch into premium chowder and lobster soup is exactly the kind of high-effort specialty food that earns a coin premium — a fisher/mariner player can run the export economy while a Create specialist automates the peeler line. Lobster especially as a premium tier.
- from: createfisheryindustry:fish_skin (peeler output, leather-substitute c:tag candidate) | via: recipe (crafting) | to: magic | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: fish skin as a magic ingredient doesn't compose any accepted motif; it's a leather substitute, not an arcane material. Forcing it into ritual/imbuement is arbitrary.
- from: createfisheryindustry:harpoon / harpoon_pouch (ranged weapon line) | via: loot-seed | to: economy | motif: M-14 (provisional) | power: mid | tone: ok | verdict: REJECT | reason: M-14 is provisional; harpoons as bounty-board drops are coherent (sea-creature hunt) but M-14 is held for 0.9 economy review. Surface for review, don't author.
- from: createfisheryindustry catch (fish tags, shellfish) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Fish oils and shellfish (lobster, mussels) are classical alchemy ingredients — running them through the Alchemist Cauldron to brew low-tier potions (water breathing, night vision) bridges the cannery to the magic pillar and gives the fisher's output a magic use. Everyday depth = one light brew step.
- REWORK: no existing weave issues; the two-pillar anchor is clean and well-supported by recipe evidence. New candidates (M-09 economy, M-12 magic) would add a third and fourth pillar tie — both are incremental and proportionate.

== CHUNK COMPLETE ==






