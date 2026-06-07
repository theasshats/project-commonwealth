# Phase 2 candidates — chunk-05

## fusion   [anchors: support/client-library (1)]
- LEAVE — genuine zero-content rendering library (no items, no blocks, no processing methods); registers nothing a weave can route through. Its only role is enabling connected-texture assets for dependent mods (Rechiseled, Supplementaries-family). Sanctioned support anchor.

## do_a_barrel_roll   [anchors: support/client-QoL (1)]
- LEAVE — pure client camera/movement overhaul for elytra; registers zero items, zero blocks, no processing methods. Its "flight" theme touches elytra not Create Aeronautics ships and has no material graph entry point. Forcing an aeronautics tag for thematic resonance alone would be an edge-less aesthetic claim, not a loop advance. Sanctioned support anchor.

## collective   [anchors: support/library (1)]
- LEAVE — genuine zero-content shared-code library (Serilum-family); no items, no blocks, no recipe-types, no processing surface. Nothing to weave.

## more_slabs_stairs_and_walls   [anchors: support/decoration-palette (1)]

- from: wood/stone cuts (slabs, stairs, walls) | via: create:cutting (mechanical saw) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the mechanical saw mass-produces stone/wood architectural cuts, making bulk building an automated factory output rather than a stonecutter chore — the 847 variants become a Create production line.
- from: gravity/concrete-powder cuts | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed concrete-powder and gravel cuts return to sand/gravel + XP nugget (lossy recycle), closing the loop on bulk quarry builds and incentivising sorting lines.
- from: amethyst/basalt cuts (decorative) | via: create:mechanical_crafting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the existing create:cutting route already covers stone variants; adding a mechanical_crafting step for amethyst cuts is redundant and over-gates a cosmetic block — redundant depth on a deco block.
REWORK: existing connections — mod has 0 current weaves (no made-by foreign methods in jar). OK — no existing connections to rework; starting from one anchor.

## charta   [anchors: survival (1)]

- from: bar furniture (card tables, stools, bar shelves, wine/beer glasses) | via: create:cutting (mechanical saw) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a tavern's wooden furniture gets cut on a mechanical saw — mass-producing the hospitality set ties this social space directly to the Create carpentry line, not just a crafting table.
- from: charta:empty_wine_glass / empty_beer_glass (filled by Vinery/drink mods) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a stocked bar sells drinks over the counter for coin — wine glasses + wine from Vinery = a luxury good priced at the card table; social play drives coin flow organically.
- from: card-match wagering (no built-in hook) | via: KubeJS coin-event stub | to: economy | motif: M-21 | power: everyday | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); the mod has no native betting API so this requires authored KubeJS event wiring with no guaranteed upstream hook — fragile, no-motif guarantee, provisional-only.
REWORK: existing connections — 0 current foreign-method weaves. OK — no existing connections to rework.

## immersivearmorhud   [anchors: support/client-UI (1)]
- LEAVE — zero-content HUD overlay mod; renders armor icons with durability readouts. No items, no blocks, no processing methods. Pure client UI. Sanctioned support anchor; nothing to weave.

## bakery   [anchors: survival (1)]

- from: finished cakes / tarts / cupcakes (high-effort luxury edibles) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a bakery's showpiece items — strawberry cake, chocolate tart — are obvious sell-goods at a market stall; the baking chain (farm→milling→mixing→baking) justifies a mid-tier coin price.
- from: wheat / grain (raw crop input) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: milling wheat into flour on the Create millstone feeds the bakery chain — the crop-to-bread pipeline gains a machine step, tying the bakery to the tech spine before the oven stage.
- from: surplus baked goods / berries (Ars Sourcelink) | via: ars_nouveau:imbuement (passive feedstock into nearby Sourcelink) | to: magic | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: Sourceclinks passively consume placed food items for Source — thematically odd (enchanting table eating bread), and better owned by farm-focused mods like Farm & Charm or Farmer's Delight; baking specialty is confections, not arcane fuel. Pushes magic into the kitchen awkwardly.
REWORK: existing connections — made-by shows farm_and_charm:crafting_bowl/pot_cooking/stove (3 existing inbound weaves from Farm & Charm). OK — those connections are sound and coherent (bakery is the downstream luxury tier of the F&C cooking chain). No rework needed.

## detect-afk-1.2.2   [anchors: support/QoL-server-admin (1)]
- LEAVE — zero-content behavioral mod; detects idle players and excludes them from sleep accounting. No items, no blocks, no processing methods. Nothing to weave; sanctioned support anchor.

## sky_whale_ship   [anchors: survival (1)]

- from: sky whale loot chests (loot=implied by structure) | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: airship pilots who climb aboard a sky whale find Create Aeronautics component blueprints or engine parts — reaching the whale by ship is the obvious access path, so the reward reinforces exactly that milestone.
- from: sky whale loot chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: whale-back loot includes rare trade goods (exotic drops, bounty targets) — a bounty board can name "sky whale relic" as a wanted item, turning aerial exploration into coin at the trade post.
- from: sky whale loot (coin-drop) | via: loot-seed (numismatics coin seeding) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: M-08 is specifically "scarce regional metal → Create-processed → minted into coin"; seeding raw coin directly into loot tables short-circuits the scarcity loop and inflates the economy without production steps — wrong motif, and the loot-seed→bounty path (M-14, accepted above) already covers the coin payoff cleanly.
REWORK: existing connections — 0 foreign-method weaves in jar. Note: dossier marks loot=no in jar-grounded data, but the structure is the content delivery vehicle. Both accepted links are loot-seed candidates (Phase-3 datapack edits), which is correct. OK — no existing authored connections to rework.

## jeed   [anchors: support/client-UI (1)]
- LEAVE — JEI effects-documentation addon; its two registered recipe-types (effect_provider, potion_provider) are JEI display providers, not craftable methods. Zero content, zero weave surface. Sanctioned support anchor.

## tipsmod   [anchors: support/QoL-client (1)]
- LEAVE — loading-screen tips display; no items, no blocks, no processing. Pack-authoring tool for onboarding text, not a material-graph participant. Sanctioned support anchor.

## createadditionallogistics   [anchors: create, aeronautics (2)]

- from: flexible shafts (kinetic routing components) | via: create:mechanical_crafting | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: the mod's own dossier already marks it at ≥2 anchors (Create + aeronautics via Stock Keeper seats / train logistics). Adding a third mechanical_crafting edge for flexible shafts as aeronautics control parts would over-complicate a mod whose value is *simplifying* kinetics infrastructure — the aeronautics anchor is already present through the seat/logistics path. No gap to fill.
REWORK: existing connections — made-by shows create:splashing (inbound, used to wash dye off flexible shafts). That connection is sound and lightweight (everyday cosmetic, correct power sizing). OK — connections sound. Two anchors already; no rework needed.

## lionfishapi   [anchors: support/library-API (1)]
- LEAVE — lightweight entity-animation/rendering API for L_Ender's dependent mods. No items, no blocks, no processing surface. Pure library; genuine zero-content anchor.

## netmusic   [anchors: support/QoL-flavor (1)]

- from: netmusic:music_cd (an NBT-encoded disc) | via: create:item_copying or sequenced_assembly | to: create | motif: M-20 | power: everyday | tone: clash | verdict: REJECT | reason: duplication/copying of audio discs via Create deployers is thematically thin — the disc's content is its URL, not a crafted material, and Create stamping a music_cd is tonally jarring (industrial disc-pressing ≠ writing URLs). The existing TLM-altar weave already gives it a production step. The mod is correctly LEAVE-bounded.
- LEAVE — purely cosmetic audio mod; outputs only an NBT-encoded music_cd with no processable material. Already touches the TLM altar as one existing weave. Forcing a Create or economy edge would be contrived per the dossier's own assessment; support anchor is correct.

## just_blahaj   [anchors: support/decoration-flavor (1)]
- LEAVE — pure flavor decoration (31 plush shark variants); consumes only vanilla wool/dye to craft; outputs decorative blocks with no material surface for any method. Forcing an edge onto a wholesome cosmetic set is the failure mode the briefing warns against. Sanctioned support anchor.

## galosphere   [anchors: survival (1)]

- from: galosphere:silver_ingot (= palladium, c:ingots/palladium) | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: palladium ore runs through the crushing wheel for ore-doubling — the scarce regional metal earns a second output, rewarding players who build the Create processing line before smelting.
- from: palladium ingot (Create-processed) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a rare regional metal refined through Create becomes a mintable coin commodity — players in palladium-rich regions have a trade good; those without must buy or barter, driving the emergent economy.
- from: galosphere deco blocks (allurite/lumiere/pink-salt bricks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed crystal bricks recycle to allurite/lumiere dust + XP nugget (lossy); closes the build loop for underground-biome decoration without enabling infinite crystal arbitrage.
- from: galosphere:allurite_shard / lumiere_shard (magic-attunement catalysts) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-07 | power: mid | tone: ok | verdict: ACCEPT | hook: the glowing cave crystals are already the pack's reserved attunement catalysts (M-07); seeding this formally confirms galosphere earns its magic anchor through worldgen-limited catalyst supply gating Ars/Occultism conversions.
- from: galosphere:preserved_transform_recipe (amber preservation) | via: occultism:spirit_trade | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: the amber-preservation mechanic is Galosphere's own transformation recipe type; routing spirit_trade through it would require an Occultism spirit to consume amber, which is thematically contrived (spirits are not attracted to amber preservation artifacts). Better left as Galosphere's native method without an Occultism override.
- ⚠ Reagent-ownership note: galosphere:allurite_shard / lumiere_shard are RESERVED under M-07 (reagent-ownership table). Do NOT repurpose them as a primary Ars source gem or Occultism silver substitute; their role is attunement catalyst only.
REWORK: existing connections — 0 foreign-method inbound weaves in jar (galosphere:preserved_transform_recipe is its own outbound type). The dossier already notes shards reach magic via M-07 but this is proposed not yet authored. OK — no mis-authored connections to rework; three accepted links (M-03, M-08, M-07) add two new anchors (create, magic/economy) to this currently 1-anchor mod.

## betterclouds   [anchors: support/client-visual (1)]
- LEAVE — pure client cloud renderer; replaces flat vanilla clouds with volumetric ones. No items, no blocks, no processing. Sanctioned support anchor; nothing to weave.

## handcrafted   [anchors: support/decoration-palette (1)]

- from: wood furniture (chairs, tables, shelves, cupboards — per-wood-type sets) | via: create:cutting | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: running planks through the mechanical saw to cut furniture shapes makes home-furnishing an automated production run — the carpenter's shop has a machine, not just a crafting table.
- from: finished furniture sets (luxury build goods) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: furniture as a trade good is extremely low-velocity in practice — players craft furniture for their own builds, not for coin; the economy pillar is better served by consumables (food, fuel, processed metals) with genuine demand loops. Decorative goods sell thinly; the connection is arbitrary. Red-teamed: rejected.
REWORK: existing connections — 0 foreign-method inbound weaves. OK — no existing connections to rework; starting from one anchor.

## rolling_down_in_the_deep   [anchors: support/client-movement-QoL (1)]
- LEAVE — clientside addon to Do a Barrel Roll extending unlocked-camera movement to underwater swimming. Zero items, zero blocks, no processing. Pure client feel. Sanctioned support anchor.

## rechiseled   [anchors: support/decoration-palette (1)]

- from: rechiseled chiseling-recipe groups (600+ variants of vanilla blocks) | via: rechiseledcreate Mechanical Chisel (create-powered chiseling) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: the Mechanical Chisel (rechiseledcreate companion, already in pack) automates the entire 600-variant palette on Create shaft power — every stone/wood decorative cut becomes a factory output, giving bulk builders a machine-driven decoration line.
- from: rechiseled stone variants (brick/beam/tile cuts of vanilla stone/deepslate) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the rechiseledcreate Mechanical Chisel route (accepted above) is the coherent Create link for this mod; adding a separate crushing-recycle step would be redundant — the deco-recycle loop already belongs to the Mechanical Chisel path, not a separate crusher track. One clean edge is better than two overlapping M-04 edges.
REWORK: existing connections — 0 foreign-method inbound weaves (rechiseledcreate is a companion mod and the Mechanical Chisel method runs create-side, not registered under rechiseled's own namespace). OK — the rechiseledcreate companion already provides the Create link by companion-mod design; the ACCEPT above proposes confirming/formalizing that as a weave-log entry for rechiseled.

== CHUNK COMPLETE ==
