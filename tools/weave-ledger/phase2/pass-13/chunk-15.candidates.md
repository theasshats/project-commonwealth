# Phase 2 candidates — chunk-15

## ohthetreesyoullgrow   [anchors: support/worldgen (1)]
- LEAVE — pure worldgen library (zero blocks, zero items, no recipe types); a dependency of biome mods; nothing to weave.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — config API library; no items, no blocks, no recipe types; zero content surface; nothing to weave.

## createpickywheels   [anchors: Create (1)]
- from: biome-gated power placement | via: behavioral rule (no recipe type) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: the survival link is real thematically (world geography dictates build sites) but there is no material/method to route — it is a behavioral patch with no recipe surface; no motif covers a pure-behavioral constraint without a material join; no-motif reject-for-review.
- REWORK notes: existing anchor is Create only (1 pillar); dossier flags survival adjacency as MED but there is genuinely no method hook to formalize. The correct path is to leave it as a 1-pillar Create support tweak unless a future motif covers "biome-gated mechanical behavior." Flag for Gate-0 if a motif is ever proposed.

## deeperdarker   [anchors: survival (1)]
- from: deeperdarker:soul_dust + soul_crystal | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: soul-dust from the Otherside's dead is exactly the raw spirit material Occultism's spirit-fire rituals demand — a player would say "of course the screaming dimension feeds the summoners"
- from: deeperdarker:heart_of_the_deep | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Warden's extracted heart — dense with hostile life-force — refined by Ars imbuement into a high-tier arcane catalyst; endgame item → endgame arcane input, depth is proportional
- from: deeperdarker:warden_carapace | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: carapace plates are a structural composite — crushing them yields raw chitin-gravel and an XP nugget; a light recycle that ties the Otherside's loot into Create's material loop
- from: deeperdarker:gloomslate / sculk_stone blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: deco stone families recycle back to gravel + XP nugget through the crusher — already inbound per the dossier, confirming the existing weave is sound
- from: deeperdarker:soul_dust / sculk_bone (Otherside materials) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the dossier flags this WEAK; soul materials fit better as magic reagents (M-11/M-10 above); selling dangerous exploration loot for coin is redundant once the magic weave is in place — leaves the economy pillar without adding meaningful demand beyond "dangerous good → coin"
- OK — create:crushing inbound (M-04, existing) is sound; farmersdelight:cutting inbound for mob butchering is thematically sensible and needs no change.

## create_mobile_packages   [anchors: Create, aeronautics (2)]
- from: robo_bee courier / bee_port | via: economy infrastructure | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the drone-delivery network is logistics infrastructure, not a trade good or coin-sink; M-09 requires a *consumable* luxury good; this is a device — no material route; no-motif match for "logistics-as-economy." LEAVE at 2 pillars.
- OK — Create + aeronautics anchors are solid and well-justified; no rework needed.

## better_lib   [anchors: support/library (1)]
- LEAVE — config/messaging API library; no items, no blocks, no recipe types; zero content surface; nothing to weave.

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale loot (chests aboard) | via: loot-table targeting → aeronautics progression items | to: aeronautics | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whales drift at altitude — the natural reason to build an Aeronautics airship is to reach and board one; seeding their loot with Create Aeronautics components / blueprints / rare fuels closes the loop so the airship mod and the exploration set-piece are explicitly linked
- from: sky_whale loot | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: dossier marks this WEAK; making whale-loot a coin source is generic "sell rare loot" — it doesn't build a meaningful economy demand chain; the aeronautics link is the stronger and more specific weave; economy is better served by other mods
- REWORK: existing survival anchor is correct; the aeronautics loot-table link (above) would lift it to 2 pillars. Note: since the mod registers 0 items/blocks, the integration is purely via custom loot-table JSON in the datapack, not a KubeJS recipe — the human reviewer should confirm loot-table patching is within scope for Phase 3.

## create_integrated_farming   [anchors: Create, survival (2)]
- from: roost eggs / feathers / duck/goose products | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: dossier flags this WEAK; bulk poultry products as coin-trade goods are low-value commodity trading — the M-09 "luxury good" bar is not met by raw eggs/feathers. Only worth revisiting if a food-processing chain (farmersdelight → processed dish) is placed between the roost output and the coin, but that's a separate chain already covered by the food economy weave elsewhere.
- from: fishing_net fish/aquatic drops | via: farmersdelight:cooking → finished dish | to: economy via M-12 then M-09 | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the lava fishing net hauls unique high-heat aquatic drops (magma/nether fish variants) that a Farmer's Delight cook turns into exotic dishes — a processed luxury the economy pillar can price as a genuine trade good; the nether-origin makes it scarce enough to be interesting
- OK — Create + survival anchors are solid. No existing weave to rework.

## kubejs   [anchors: support/modpack-tooling (1)]
- LEAVE — the scripting framework that authors all weaves; no player-facing content, no material surface; it is the instrument not the instrument's output; nothing to weave.

## foodeffecttooltips   [anchors: support/client-QoL (1)]
- LEAVE — client-side tooltip rendering only; no items, no blocks, no recipe types; zero content surface; nothing to weave.

== CHUNK COMPLETE ==

