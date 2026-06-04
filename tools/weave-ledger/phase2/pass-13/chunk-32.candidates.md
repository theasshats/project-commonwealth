# Phase 2 candidates — chunk-32

## midnightlib   [anchors: support/library (1)]
- LEAVE — pure config/annotation library; 0 blocks, 0 items, 0 recipe-types; no player-facing content surface to route through any method or motif.

## controlling   [anchors: support/client-UI (1)]
- LEAVE — client-only keybind search UI; 0 blocks, 0 items, no recipe-types; nothing to route, nothing to weave.

## rhino   [anchors: support/library (1)]
- LEAVE — KubeJS JS runtime engine; 0 blocks, 0 items, no recipe-types; pure code library. Its indirect role is enabling all KubeJS recipe weaves, but it has no content surface of its own.

## minecolonies_tweaks   [anchors: support/QoL + tag-harmonization (1)]
- from: c:crops/* unified tags (corn, rice, soybean, tomato, etc.) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the minecolonies_tweaks unified crop tags mean a single Create milling recipe covers ALL modded grain variants — the tag glue makes Create's flour/dough chain work across the pack's entire crop roster without per-mod recipe explosion.
- from: c:foods/* unified tags | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: the tag-unified food items (tagged c:foods/corn, c:foods/rice, etc.) slot directly into Numismatics price entries — one economy price-list entry covers all modded variants of a crop type; the colony food web and the coin economy share the same tags.
- REWORK: current anchor "support" undersells this mod — it is the TAG SUBSTRATE for the pack's food→Create→economy chain. The two ACCEPT rows above make it a survival/Create/economy enabler if the weaves are authored; re-anchor to survival+Create once M-12 and M-09 links are in.
- from: c:crops/rice or c:crops/corn | via: farmersdelight:cooking or create:mixing | to: Create/survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: redundant with the milling ACCEPT above; both M-12 rows serve the same pillar — one clean link is enough, two identical-pillar edges are noise.

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure decoration mod (0 items, 0 recipe-types beyond the vanilla painting item); the painting entity adds no material surface to route. Forcing a Create-crushes-painting edge (M-04) would be absurd — it's a painting, not a metal block.

## solclassic   [anchors: survival (1)]
- from: food variety demand (systemic) | via: numismatics sell/price (M-09) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Spice of Life's diminishing returns make a broad cooked-food roster genuinely valuable — players actively seek out new foods, which makes buying/selling diverse meals (Numismatics trade) a real economic loop rather than an arbitrary one; the food-discipline mechanic gives M-09 luxury-good→coin its player motivation.
- from: solclassic:basket or solclassic:wicker_basket | via: create:pressing (leather/weave) or travelersbackpack:backpack_upgrade | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: the basket is a vanilla-adjacent carry item; threading Create deploy/pressing into its recipe is thematically plausible but the basket is an EVERYDAY basic container — M-20 guards against gating basics; depth would be out of proportion and the pairing is thin.
- NOTE: the systemic M-09 link is the correct second pillar — it's emergent and player-sensible. No recipe authoring needed (it's a config/price-list entry on the economy side, not a new item recipe). Solclassic's real second anchor is economy via food demand.

## gtmogs   [anchors: survival, economy (2)]
- OK — connections sound. gtmogs is already at 2 pillars (survival worldgen + economy via scarcity substrate). It is a framework/config mod, not a content node — there is no material to route through a method. Its downstream effect (scarce regional ores) feeds M-03/M-08 in the mods that process those ores; the weave belongs to those mods, not here.
- from: gtmogs vein-config framework | via: any recipe method | to: Create / magic / aeronautics | motif: any | power: n/a | tone: n/a | verdict: REJECT | reason: gtmogs exposes no items or recipe-types — it controls WHERE ores spawn, not what they make. Adding a recipe edge to a worldgen framework is a category error; all downstream material weaves live in the ore-processing mods.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create-native package logistics delivered by an autonomous flying courier cleanly occupies both Create and aeronautics/logistics. The two pillars are coherent and well-motivated.
- from: cmpackagecouriers:cardboard_plane | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the cardboard plane is a cross-dimensional courier — making it a sequenced-assembly build (fold cardboard → install guidance reel → attach rope bundle) earns it Create depth and makes autonomous long-range delivery feel like a real engineered machine, not a cheap paper plane.
- from: cmpackagecouriers:location_transmitter | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the transmitter is an internal build component, not a flagship item; M-05 (native-method gating) is for a mod's flagship — the plane is the flagship. Two Create-depth weaves on the same mod dilutes the signal; the sequenced-assembly plane ACCEPT is the right one to pursue.
- from: cmpackagecouriers:portable_stock_ticker | via: numismatics (trade fulfilment) | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: M-21 is provisional (leans no); also the stock-ticker→economy link is systemic (it helps trade happen) not a recipe-routable connection; no clean method to hang this on.

## fogoverrides   [anchors: support/client-QoL (1)]
- LEAVE — client-only fog config; 0 items, 0 blocks, 0 recipe-types; no content surface. Visual atmosphere tuning with no weave target.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack endgame variants (dragon / netherite / nether themed packs) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: a dragon-scale backpack with integrated tanks should cost real engineered fabrication — a sequenced assembly build (cut leather panel → press frame → deploy tank fittings → deploy closure mechanism) makes the endgame tier feel earned and threads Create into a visible player-facing item; everyday leather packs stay cheap (vanilla craft).
- from: travelersbackpack:backpack_tank (portable fluid buffer) | via: create:filling / create:emptying | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: filling/emptying a tank is a *use* of Create's fluid mechanics, not a weave that gives TravelersBackpack a new pillar anchor — it's incidental compat, not a connection that earns Create the second anchor. The sequenced-assembly ACCEPT above is the coherent Create weave.
- from: mob-themed backpack variants (creeper / spider / blaze / enderman packs) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a blaze-themed pack that can store lava in its tanks is a natural imbuement target — infusing it with a blaze essence (via ars_nouveau:imbuement or spirit_fire) as a mid-tier crafting step makes the mob-themed variants feel like genuine attunements, not just cosmetic skins; earns survival↔magic second pillar.
- from: travelersbackpack:sleeping_bag variants | via: any method | to: any | motif: none | power: everyday | tone: clash | verdict: REJECT | reason: sleeping bags are pure QoL items — forcing a recipe weave onto them adds complexity to a basic function with no thematic payoff; no-motif + forced edge = reject.
- from: travelersbackpack:crafting_upgrade / blast_furnace_upgrade | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the upgrade slots are module items; routing them through mechanical_crafting is plausible but redundant — if the endgame backpack itself is sequenced-assembled (ACCEPT above), the upgrades being regular crafting items is fine by the depth-scales-with-power rule; adding M-05 on top creates recipe-inflation without new pillar value.

== CHUNK COMPLETE ==

