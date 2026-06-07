# Phase 2 candidates — chunk-13

## txnilib   [anchors: support/library (1)]
- LEAVE — pure developer code library; zero items, zero blocks, no recipe surface. No coherent weave possible.

## blockui   [anchors: support/library (1)]
- LEAVE — pure UI framework (XML-driven GUI API for MineColonies stack); zero items/blocks. No weave surface.

## moonlight   [anchors: support/library (1)]
- LEAVE — shared library for MehVahdJukaar mods; zero recipe types, no material throughput. The data-driven villager-trade API it exposes is exercised by Supplementaries, not by moonlight itself — no independent weave hook.

## createfurnitureseats   [anchors: support/compat + aeronautics (2)]
- OK — connections sound. Already bridges aeronautics (sittable furniture on Sable sub-levels). No item surface to route; any additional edge would be forced.

## cmparallelpipes   [anchors: Create (1)]
- from: pipe_wrench (Create fluid-logistics tool) | via: recipe (crafting) | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the Pipe Wrench locks pipe connections — a QoL plumbing tool; it has no mechanical drivetrain role (M-24 wants engine/rotor/bearing components). Routing it through aeronautics as a "control" part is a tone stretch.
- from: pipe_wrench_gear (Create-brass gear sub-component) | via: create:item_application | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: the gear is an internal craft ingredient for the wrench, not a refined scarce metal; M-08 targets processed regional-ore → coin, not a utility tool's sub-part.
- LEAVE — single Create plumbing utility; no coherent second anchor. The wrench improves fluid infrastructure within the Create pillar only; forcing an economy or aeronautics edge is contrived.

## tidal-towns-1.3.4   [anchors: survival (1)]
- from: ocean-village loot tables | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: floating ocean villages reward exploration with coin — players navigating by sea (or airship) have a reason to stop, trade, and spend; the loot-seed makes the ocean towns a natural early-economy node.
- from: ocean-village loot tables | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Tidal Towns is a vanilla-block seafaring settlement — seeding magic reagents into a fishing-village chest is a tone mismatch; sailors, not mages. The coin seed (M-08) is the coherent choice.
- REWORK: existing anchor is survival only. The accepted loot-seed (M-08/economy) is the second anchor; no current connection warrants rework beyond adding it.

## modernfix   [anchors: support/performance (1)]
- LEAVE — JVM/loader-level performance patches only; no player-facing content, no items, no recipe surface.

## dtterralith   [anchors: survival (1)]
- from: dtterralith biome-specific seeds (cedar_seed, jacaranda_seed, maple_seed, kapok_seed, giga_spruce_seed) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Terralith-exclusive tree seeds mill into biome-specific wood pulp or dye pigments through Create; rare regional seeds become a light craft ingredient, tying worldgen variety into the Create processing chain without being heavy.
- from: dtterralith special seeds | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: seeds as arcane infusion inputs is thematically loose — the seeds have no inherent magical resonance in-lore; M-12 (processing) is the tighter fit and one second anchor is sufficient.
- REWORK: existing anchor correctly survival. The M-12 milling acceptance adds Create as second anchor.

## gravestone   [anchors: survival (1)]
- from: gravestone:obituary (death record item) | via: recipe | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: processing a death-record scroll as an occult reagent is thematically gimmicky — the obituary's value is informational (coords, death cause), not material; it would feel like punishing the player's death twice.
- from: gravestone:gravestone (block) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the gravestone block is a functional game system (recoverable inventory), not a deco tile; making it crushable for scrap contradicts its QoL role — players may use it intentionally and it has silk-touch behavior.
- LEAVE — death-recovery utility; both items serve the survival QoL loop and have no coherent material role in a second pillar. All routes are forced or tone-clashing.

## alexsmobs   [anchors: survival (1)]
- from: alexsmobs:ambergris (rare whale-region drop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is a deep-ocean organic rarity used historically as a perfume / magical fixative; imbueing it into an Ars source-adjacent reagent feels natural — the player hunts rare ocean fauna to unlock an arcane tier.
- from: alexsmobs:void_worm_beak / void_worm_effigy (endgame drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Void Worm beak transmuted in spirit-fire yields a potent occult essence — fighting the deepest boss gates a ritual material; loop: endgame combat → magic production.
- from: alexsmobs:bear_dust (mid-tier drop) | via: create:crushing | to: Create | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: bear dust processed through a Create crusher becomes a refined animal-fat powder used as a machine lubricant intermediate — organic drops feed the industrial chain.
- from: alexsmobs:ender_residue (mid-tier drop) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ender residue fed into an Occultism ritual condenses into a spirit catalyst, connecting Alex's end-themed fauna to the magic web.
- from: alexsmobs:ambergris | via: numismatics | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: ambergris is already accepted as an arcane reagent (M-10); double-spending it as a coin good dilutes its scarcity-gating role. Reagent-ownership: once assigned to magic, don't also route to economy.
- from: alexsmobs:banana (everyday food) | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: alexsmobs already anchors survival — routing banana through cooking stays inside the same pillar; no cross-system gain.
- REWORK: existing anchor is survival only; accepted links add magic (×2 via M-10+M-11) and Create (M-02). OK to call survival+magic+Create — all three are coherent given the drop catalogue breadth. No existing connections to rework (none were previously authored).

## sablecollisiondamage   [anchors: support/aeronautics (1)]
- LEAVE — pure physics-behavior addon (collision damage on Sable sub-levels); no items, no recipe types, no material throughput. The aeronautics flavor it adds is behavior, not a resource link.

## bits_n_bobs   [anchors: Create, survival (2)]
- OK — connections sound. Already at 2-pillar goal (Create kinetic + survival/decoration). Existing inbound weaves (create:item_application, create:splashing) are coherent.
- from: bits_n_bobs tile blocks (andesite_tiles, asurine_tiles, crimsite_tiles, etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-stone deco tiles crush back to crushed stone + an XP nugget — the standard lossy deco-recycle; tightens the deco loop within the Create pillar (reinforces existing anchor, but the method-connection was not authored).
- from: bits_n_bobs:nixie_board (large signal display) | via: create:item_application | to: economy | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: nixie boards are signal displays, not economic goods or aeronautics components; routing them through economy via deploy/application has no player-sensible hook. M-20 is for upgrade-application onto a base, not decorative displays.

## spark   [anchors: support/performance (1)]
- LEAVE — CPU/memory profiler; no player-facing items, no recipe surface, no material throughput.

## createnuclear   [anchors: Create (1)]
- from: createnuclear:steel_ingot (c:ingots/steel) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: steel is a scarce regional alloy (uranium-belt ore → Create smelting → steel); minting steel into coin creates a high-value trade currency for the industrial tier — the reactor's byproduct becomes the economy's premium metal.
- from: createnuclear:uranium (processed uranium) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: enriched uranium fuel is the pack's most scarce industrial resource; minting a fraction into "reactor-grade coin" makes the nuclear tier the apex of the economy loop — scarcity → production → coin.
- from: createnuclear:anti_radiation armor set | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: anti-radiation gear is assembled via Create's mechanical crafting table (requires lead-alloy plates + reactor casing parts), enforcing the nuclear production chain — you can't enter the reactor room without first building the machine that makes the suit.
- from: createnuclear steel (c:ingots/steel) | via: aeronautics hull recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: nuclear-refined steel is the structural metal for mid-to-high-tier airship hulls — creates a meaningful supply-chain dependency between the nuclear pillar and aeronautics construction; scarcity drives the economy loop.
- from: createnuclear:autunite (decorative nuclear-green ore block) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: autunite is a uranium-mineral deco block with a glowing green texture — imbuing it as an arcane reagent is a colour-association grab, not a coherent lore link. Magic and nuclear tech are thematically orthogonal in this pack; forced edge.
- from: createnuclear enriched_soul_soil | via: create:haunting | to: magic | motif: M-19 | power: mid | tone: ok | verdict: ACCEPT | hook: the enriching_fire/campfire process consumes soul soil to make enriched_soul_soil — running it through Create's haunting method bridges the nuclear/soul-fire arc to Occultism's spirit layer; the soul-enriched substrate becomes an occult ingredient, threading nuclear through magic naturally via the shared soul-fire aesthetic.
- REWORK: no existing cross-system connections authored. All accepted links are new (economy ×2, Create-deepening, aeronautics, magic via soul-seam).

## searchables   [anchors: support/library (1)]
- LEAVE — client UI search-filter API library; no items, no recipe types, no material surface.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- OK — connections sound. Create-themed worldgen that serves exploration/survival; already ≥2 pillars.
- from: create_ltab structure loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-themed ruins and workshops seed coin + rare machine parts into their chests — players who explore Create structures find early economy on-ramps (scrap coin, part tokens) that reward exploration before they've built their first mint.
- from: create_ltab structure loot | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: Create ruins seeding magic reagents is a tone mismatch — these are industrial sites, not arcane workshops. Coin (M-08) is coherent; reagents are not.

## bettermineshafts   [anchors: survival (1)]
- from: mineshaft loot tables (vanilla, used by BetterMineshafts) | via: loot-seed | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: better mineshafts reward deep mining with a coin scatter — the pack's ore-scarcity pressure (mine deeper, find the shaft) pays off in early coin as well as ore, connecting underground exploration to the economy loop.
- from: mineshaft loot tables | via: loot-seed | to: Create | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: BetterMineshafts uses vanilla loot tables (loot=no in dossier) — there is no independent loot table to seed a boss-key unlock into without conflicting with vanilla mineshaft drops. The hook is real but the mechanism is uncertain.
- REWORK: existing anchor is survival only. Accepted M-08 loot-seed adds economy as second anchor.

## create_integrated_farming   [anchors: Create, survival (2)]
- OK — connections sound. Create-automated farming feeding the food/survival pillar; already ≥2 pillars.
- from: roost egg/feather/meat output | via: farmersdelight:cooking | to: survival (deepening) | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: stays within survival — cooking poultry output is already the intended use of the roost; no cross-system gain over the existing Create+survival anchors.
- from: roost products (eggs, feathers, meat) bulk output | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create-automated roost produces bulk poultry goods; selling the surplus through a Numismatics stall turns automated farming into a passive income stream — players who invest in roost infrastructure earn coin, completing the scarcity→production→economy loop.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create-machined artillery that arms Aeronautics ships; already ≥2 pillars, right at the PvPvE combat heart of the pack.
- from: cbc_at heavy munition tier (ap_rocket, apdsfs) | via: KubeJS boss-drop gate | to: Create/survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heaviest anti-armor rockets require a boss-drop component (e.g. Cataclysm boss core) as a fuzing input — combat against the world's bosses gates the ship's most destructive weapons, pressing the survival pillar into the aeronautics supply chain.
- from: cbc_at munition line (gunpowder/propellant mass) | via: create:mixing | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: munition propellant through create:mixing is already how CBC and its addons are expected to source propellant; this replicates a vanilla/pack pattern without adding a new cross-system bridge. No net gain.
- from: cbc_at barrel attachments (muzzle_brake, rifled_barrel, silencer) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: precision-machined cannon attachments are high-value goods; listing silencers/rifled barrels at a Numismatics trading stall creates a player-driven arms economy — factions can buy ship-combat upgrades rather than build every component themselves.

## ding   [anchors: support/client-QoL (1)]
- LEAVE — client-only audio notification mod; no items, no blocks, no recipe surface. Purely a UI convenience; no weave possible or warranted.

== CHUNK COMPLETE ==
