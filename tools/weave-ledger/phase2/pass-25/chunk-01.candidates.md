# Phase 2 candidates — chunk-01

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — pure behavior datapack; no items, no loot drops of its own (confirmed Modrinth: does NOT change dragon drops). The dragon fight is harder, which raises the survival pressure, but there is nothing material to route through any method. A loot-seed would require the mod to own a loot table to seed into — it doesn't add one. Forced edge would be inventing content.
  - from: ender dragon loot table (vanilla) | via: loot-seed | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: edf-remastered owns no loot table and adds no items; seeding would be a vanilla loot edit unrelated to this mod — attach to a loot-owning mod instead.

## supermartijn642corelib   [anchors: support (1)]
- LEAVE — zero-content code library. No items, no methods, no loot. Genuine zero-surface.

## fxntstorage   [anchors: Create, survival (2)]
- OK — connections sound. Create-tier material ladder (andesite/copper/brass/hardened) gates storage tiers via create:mechanical_crafting; inventory/QoL serves the survival loop. Two anchors, both coherent.
  - from: fxntstorage:backpack_flight_upgrade | via: recipe | to: aeronautics | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: the flight upgrade is a worn Curios gadget that grants personal flight — it is not a wired resource consumed by an Aeronautics contraption; using it as an aeronautics anchor would be thematic hand-waving. The aeronautics system is about ship/vehicle construction and logistics, not individual player flight items. No action.

## aeronauticscompat   [anchors: aeronautics (1)]
- LEAVE — pure behavior patcher; no items, no methods, no loot. Genuine zero-surface; its entire value is maintaining the aeronautics pillar's runtime correctness.

## better_lib   [anchors: support (1)]
- LEAVE — zero-content config/messaging library. No items, no methods, no loot. Genuine zero-surface.

## mcwwindows   [anchors: support/decoration (1)]
- from: mcwwindows stone parapets/arrow-slit blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: smashing a dismantled stone parapet in a crusher yields gravel and an XP nugget — the deco set feeds back into the resource loop rather than dead-ending as trash.
- from: mcwwindows:*_mosaic_glass / colored glass panes | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: glass crushes to sand already in vanilla/Create; a mosaic glass block crushing back to colored sand or glass pane is not distinctive — redundant with vanilla glass crushing. Keep only stone variants (above).
- from: mcwwindows:*_curtain (wool-based) | via: farmersdelight:cutting | to: survival | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — cutting a curtain with a knife to reclaim wool is forced and reads as recipe filler, not a coherent processing step a player would expect.
- REWORK: existing anchor is "support/decoration (1)" — if the stone-parapet crushing ACCEPT above is taken, this becomes Create + support (2), which is the correct floor.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- OK — connections sound. Lazy shafts/cogwheels anchor to Create (kinetics infra); seats anchor to aeronautics/logistics via Stock Keeper train setups. Already ≥2.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / meadow:alpine_salt | via: extradelight:vat or extradelight:mortar | to: survival (deepening Create chain) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: meadow's alpine salt runs through an ExtraDelight Evaporator or Mortar step as a brine-concentration ingredient, linking the alpine dairy tier into the broader kitchen processing chain and making salt a genuine mid-tier processing input rather than a raw material.
- from: meadow:alpine_salt | via: create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: raw alpine salt mixed in a Create mixer with water produces a brine fluid used in curing/preservation recipes — the Create spine acquires a new agricultural input and meadow earns a second anchor.
- from: meadow:cheese_wheel (luxury good) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Nearly every high-effort food is trivially sellable; sellability alone is not a structural anchor. Spend effort on the Create/processing link instead.
- from: meadow:chambray_wool (felted textile) | via: supplementaries:flag_from_banner or craft | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Textile → trade is too trivial a link.

## undergroundworlds   [anchors: survival (1)]
- from: undergroundworlds:spider_fang (Black Recluse drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: feeding a Spider Fang from the underground dungeon's Black Recluse into an occultism spirit fire transmutes it into an arcane reagent — the cave dungeon's combat reward feeds the magic pillar, making the Jungle Cave worth farming for more than just loot.
- from: undergroundworlds:spider_fang | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 (spirit_fire via occultism) is the cleaner route — spider venom/fang is thematically closer to Occultism's dark-organic aesthetic than Ars Nouveau's crystalline-arcane style. Don't double-propose the same material into both magic branches; pick the stronger fit (Occultism) and record the other as rejected.
- from: undergroundworlds temple/pyramid bricks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: crushed pyramid and temple bricks yield gravel + XP nugget (lossy) — deco loot from underground dungeons feeds back into material economy rather than clogging inventories.
- REWORK: existing anchor "survival (1)" — with the two ACCEPTs above this becomes survival + magic + Create (3), which is strong. No existing connection to flag as weak.

## tipsmod   [anchors: support/QoL (1)]
- LEAVE — zero-content client UI library. No items, no methods, no loot. Genuine zero-surface.

## platform   [anchors: support (1)]
- LEAVE — zero-content cross-platform library. No items, no methods, no loot. Genuine zero-surface.

## lootr   [anchors: support/QoL (1)]
- LEAVE — loot-fairness behavior mod; operates on existing loot tables but contributes no items, tags, or methods of its own. The "loot=yes" flag means it ships container block reskins, not loot content — no coherent material to route.

## afk-sleep-1.3.2   [anchors: support (1)]
- LEAVE — pure server behavior datapack; no items, no methods, no loot. Genuine zero-surface.

## owo   [anchors: support (1)]
- LEAVE — zero-content GUI/config library. No items, no methods, no loot. Genuine zero-surface.

## miningspeedtooltips   [anchors: support/client-UI (1)]
- LEAVE — tooltip-display mod only; no items, no methods, no loot. Genuine zero-surface.

## extradelight   [anchors: survival, Create (2)]
- OK — connections sound on the top-level anchors (survival via deep cuisine, Create via create:mixing already inbound).
- REWORK: the Create link is thin — a single create:mixing inbound is a starting point, not a spine. The dossier itself flags this: "Deepen Create via create:milling/crushing/pressing." Flag for deepening:
  - REWORK: route grain → flour via create:milling so ExtraDelight's Oven/flour_dough chain reads as Create's downstream (flour becomes a Create-milled input rather than a vanilla-crafted one). M-12.
  - REWORK: coffee beans → ground coffee via create:milling or create:crushing so the coffee crop requires Create processing before it enters extradelight:oven recipes. M-12.
- from: extradelight feasts / luxury dishes (e.g. baked_alaska, cheese dishes) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. High-effort food being sellable is true for every food mod; this is not a structural anchor.
- from: extradelight crops (coffee, garlic, citrus, corn) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: coffee beans and dried corn run through Create's millstone to produce ground coffee and cornmeal, which then feed ExtraDelight's oven and mortar chains — Create becomes the required first step in the bakery/coffee production line.
- from: extradelight:evaporator output (salt / concentrated fluids) | via: create:mixing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: brine reduction in the ExtraDelight Evaporator produces a concentrated salt fluid that Create's mixer then uses as a preservative solvent in other pack recipes — the two processing chains interlock rather than run in parallel.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound. Artillery assembled via Create metals/cutting and CBC munition assembly; mounts on Aeronautics contraptions as ship armament. Already ≥2.
- from: cbc_at heavy-autocannon / rocket pod tier | via: boss-drop gating (loot-seed) | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy autocannon barrel requires a boss-drop component (e.g. a Cataclysm boss fragment or Warden-derived material) as an input, so high-tier ship armament is locked behind endgame combat — scarcity drives the arms economy rather than it being purely a materials grind.

## towntalk   [anchors: support/flavor (1)]
- LEAVE — audio-only flavor for MineColonies colonists; no items, no methods, no loot. Genuine zero-surface.

## supplementaries   [anchors: Create, survival (2)]
- OK — connections sound. Deeply cross-woven into the Create spine (haunting/mixing/splashing inbound) and survival/food (FD cutting, flax crop, ash/soap). Already ≥2 and described as a "connector mod by nature."
- from: supplementaries:flax (c:crops/flax) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: flax crop runs through Create's millstone to produce linen fiber, which feeds textile/cloth recipes — a new agricultural input enters the Create processing chain, and Supplementaries' farm layer earns a tighter Create weave beyond the existing haunting/mixing recipes.
- from: supplementaries:ash (c:dusts/ash) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: REJECT | reason: ash is a low-tier byproduct (soap-making) and already has a defined role in supplementaries' own chemistry; imbueing ash as a magic reagent is thematically thin — ash doesn't map cleanly onto Ars Nouveau's arcane-crystal aesthetic, and the low power tier doesn't warrant an infusion step (M-10 explicitly warns against gating basic components). Reject on tone + M-10 guard.
- from: supplementaries:jar (fluid-storing block) | via: create:filling / create:emptying | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the faucet+jar already meshes with Create fluid logic per the dossier — a formal recipe for filling/emptying jars via Create methods is a QoL convenience, not a structural weave that advances the loop. Supplementaries is already woven; this adds no second system.

## invtweaksemuforipn   [anchors: client-compat/support (1)]
- LEAVE — client-only InvTweaks keybind shim; no items, no methods, no loot. Genuine zero-surface.

== CHUNK COMPLETE ==
