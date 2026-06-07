# Phase 2 candidates — chunk-05

## sereneseasons   [anchors: survival (1)]

Existing connection note: dossier lists M-09 (luxury→coin) as a 2nd-anchor candidate — M-09 is retired; kill it. The Create/sensor candidate is M-05 framed loosely; re-evaluate below.

- from: sereneseasons:season_sensor redstone output | via: create:gearshift / contraption logic (config tie / automation gating) | to: create | motif: M-16 | power: everyday | tone: ok — seasonal automation timing is the canonical seasons×Create read; a player wiring their farm to switch crops by season is "of course" | verdict: ACCEPT | hook: season_sensor drives a gearshift that opens greenhouse vents or flips a crop-sorter lane when winter hits — your automated farm *knows* the calendar

- from: out-of-season crops (any mod crop flagged scarce by SS fertility system) | via: sereneseasons fertility config (seasonal scarcity gate on crop growth) | to: economy | motif: M-30 | power: mid | tone: ok — seasonal scarcity is exactly the regional-scarcity pattern on a time axis rather than a space axis; winter-only crops are a traded commodity because nobody can grow them solo year-round | verdict: ACCEPT | hook: when winter locks out the warm-season crops, whoever stockpiled them last autumn controls the supply — a natural trade window

- from: out-of-season produce | via: bare 'sellable' framing | to: economy | motif: M-09 (retired) | power: everyday | tone: n/a | verdict: REJECT | reason: dossier's 2nd-anchor candidate ("Numismatics bounties for out-of-season produce") invokes the retired M-09 vendor-sell pattern; already re-expressed as M-30 demand-gating above — that's the correct form

- from: season_sensor as Create logic gate | via: M-05 native-method gating | to: create | motif: M-05 | power: everyday | tone: clash-adjacent | verdict: REJECT | reason: M-05 is for gating a mod's flagship *item* behind a Create machine as input; a sensor producing a redstone signal is not an item gateable by a Create recipe — it's a config/automation tie, not a crafting gate; M-16 is the right motif (seasonal input feeding a Create/magic method), and the automation link is captured there

REWORK: the dossier's existing candidate cites M-09 (retired) — retire that entry. The Create/sensor candidate is mis-motifed as M-05 — re-label as M-16.

## prickle   [anchors: support/library (1)]

- LEAVE — pure config-format library (zero blocks, zero items, no gameplay surface; Darkhax config serialisation dependency only). No content to weave.

## vc_gliders   [anchors: aeronautics (1)]

Power read: tiered hand gliders iron→netherite, early-to-mid flight (pre-Elytra). Iron glider is everyday; diamond/netherite are mid. The reinforced paper intermediate and smithing-table upgrades are the recipe surface. Dossier already has two candidates (Create pressing/mech-craft for tiers; milling for feedstock) — assess + look for new angles.

- from: vc_gliders:paraglider_iron / _gold (lower tiers) | via: create:pressing (reinforced paper from pulped leather strip + iron sheet) | to: create | motif: M-05 | power: everyday-mid | tone: ok — gliders are exploration gear; routing reinforced paper through Create pressing ties early flight to the Create tech spine naturally | verdict: ACCEPT | hook: a pressed iron-reinforced paper wing panel is the component that makes a basic glider — your first flight needs the workshop

- from: vc_gliders:paraglider_diamond / _netherite (upper tiers) | via: create:mechanical_crafting | to: create | motif: M-06 | power: mid-endgame | tone: ok — upper-tier gliders are multi-part precision items; mechanical_crafting's shaped grid makes the endgame tier feel earned | verdict: ACCEPT | hook: the diamond glider's aerodynamic frame is too precise for a crafting table — the mechanical crafter's pattern lay-up is the only way

- from: vc_gliders:copper_upgrade / nether_upgrade | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok — deploying an upgrade module onto an existing glider (the deploy-application pattern) is the light-weight single-step sibling of M-06; one step, not a chain | verdict: ACCEPT | hook: bolt the copper wind-deflector onto the glider frame at the deployer — the workshop upgrades what you built

- from: vc_gliders:paraglider_* (any tier) | via: create:milling of feedstock paper/pulp chain | to: create | motif: M-12 | power: everyday | tone: clash | verdict: REJECT | reason: milling paper pulp to make reinforced paper is a stretch — paper doesn't mill in vanilla/Create; the feedstock chain is better addressed by pressing (accepted above). Routing paper through a mill for glider paper is forced and the two-step doesn't add interesting depth

- from: vc_gliders:copper_upgrade (nether variant) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: gliders are a vanilla-aesthetic, physics-themed exploration mod — no arcane lore justifies infusing a copper wind strut with magic; thematic clash overrides the mechanical possibility

## cubes_without_borders   [anchors: support/client QoL (1)]

- LEAVE — client-only display mod (borderless fullscreen). Zero blocks, zero items, no world surface; a pure windowing convenience. Sanctioned support role; no weave possible.

## rechiseled   [anchors: support/decoration palette (1)]

Existing connection note: dossier correctly identifies rechiseledcreate (the companion mod in pack) as the Create bridge via the Mechanical Chisel. That companion provides the M-04 deco-recycling edge and the kinetic method link. Since rechiseled's chiseling is 1:1 reversible (no resource cost beyond the source block), no further recipe weave makes sense. The 3627-block palette is the surface, but it all routes through rechiseledcreate's Mechanical Chisel.

- from: rechiseled decorative block variants (any material) | via: rechiseledcreate Mechanical Chisel (already in pack) | to: create | motif: M-04 | power: everyday | tone: ok — chiseled deco blocks recycling through the Mechanical Chisel is the canonical companion weave; already established by rechiseledcreate's presence | verdict: ACCEPT | hook: the Mechanical Chisel on the Create line reshapes your stone variants batch by batch — decoration is now a factory output, not a hand-crafted accent

- from: rechiseled decorative blocks | via: create:crushing (deco-recycling back to raw) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: rechiseled blocks are 1:1 reversible by design (the chiseling screen restores the original block at no cost) — adding a lossy crushing path is redundant and contradicts the mod's design; rechiseledcreate's Mechanical Chisel is the correct route for automation, not crushing

OK — connections sound via rechiseledcreate (the companion mod that is the explicit M-04 / Create bridge). No further first-class weave needed on rechiseled itself; adding more here would be redundant layering on top of the companion.

## entity_texture_features   [anchors: support/client-rendering (1)]

- LEAVE — pure client rendering/resource-pack engine (ETF). Zero blocks, zero items, no world content; OptiFine-format random/emissive texture support only. Sanctioned support role; no weave possible.

## cmpackagecouriers   [anchors: create, aeronautics (2)]

Already at 2 anchors. Evaluate for new angles and existing connection quality.

Power read: cardboard_plane is a mid-tier autonomous courier (requires Create packages + chunkloaded base); the location_transmitter + portable_stock_ticker are the logistics infrastructure items. This is logistics automation, no material processing of its own.

- from: cmpackagecouriers:cardboard_plane | via: create:cutting + create:deploying (already inbound) | to: economy | motif: M-31 | power: mid | tone: ok — the cardboard plane physically moves packages cross-base; at trade scale (player→player goods delivery) it IS the logistics-required bulk-good transport arm; M-31 (logistics-required bulk good) fires when the plane is the distribution method for player-traded goods rather than just personal transport | verdict: ACCEPT | hook: a player-run courier route between colonies is only viable at scale with automated planes — trading bulk goods across the map requires the air courier network

- from: cmpackagecouriers:portable_stock_ticker (remote order placement) | via: economy tooling (Trading Floor / Numismatics order integration) | to: economy | motif: M-33 | power: mid | tone: ok — placing a remote purchase order from a distant outpost while someone else fulfills it IS the service-for-hire model (someone ships goods on request); the stock ticker is the player-economy interface enabling this labor model | verdict: ACCEPT | hook: a courier player offers "order and deliver" service: you ticker-request goods from the field, they ship them — a live trade facilitated by the courier infrastructure

- from: cmpackagecouriers logistics arm | via: bare 'remote trade fulfillment' framing | to: economy | motif: no-motif | power: mid | tone: n/a | verdict: REJECT | reason: "it supports remote trade" is ambient economy flavor without a gating mechanism; the accepted M-31 and M-33 framings above are the correct mechanism-specific forms

OK — existing Create + aeronautics connections are sound (built via create:cutting + create:deploying, moves packages by air). Two new economy-arm links above elevate it to 3 anchors (Create/aeronautics/economy) — fitting, as a courier IS the economy's logistics arm in motion.

## midnightthoughts   [anchors: survival/rest (1)]

Power read: purely a well-rested buff from sleeping; no items, no blocks, no materials. The dossier correctly notes no material join-key for a 2nd pillar.

- from: well-rested buff | via: config tie to Cold Sweat / Serene Seasons (thematic synergy) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: a buff-from-sleeping mechanic that pairs thematically with the temperature/seasons survival stack has no material surface to route through any method; "it makes cold nights feel bad if you skip sleep" is ambient flavor, not a weave against a method. No motif exists for a behavior-only effect pairing.

- LEAVE — zero items/blocks, behavior-only rest/buff mod. No material surface to weave; thematic synergy with Cold Sweat/Serene Seasons is ambient, not a method-routing. Genuine zero-content surface.

## detect-afk-1.2.2   [anchors: support/QoL-server (1)]

- LEAVE — pure server-side AFK detection utility. Zero blocks, zero items, no processing. Sanctioned support/QoL role. Nothing to weave.

## invtweaksemuforipn   [anchors: support/client-compat (1)]

- LEAVE — pure client-side InvTweaks keybind emulation shim over IPN. Zero items/blocks, no world content, no material surface. Sanctioned support role.

## fxntstorage   [anchors: create, survival (2)]

Already at 2 anchors (Create-tier-gated via create:mechanical_crafting, survival/QoL). Evaluate for new links and existing connection quality.

Power read: andesite→copper→brass→hardened tier ladder matches Create's material progression. Backpack flight upgrade is mid-tier; storage controller/network is mid-endgame. Items are functional containers, not processing machines.

- from: fxntstorage:backpack_flight_upgrade | via: aeronautics thematic link (flight gear) | to: aeronautics | motif: M-23 | power: mid | tone: clash | verdict: REJECT | reason: M-23 is for structural build materials (airframe/hull). A worn personal flight gadget in a storage backpack is not an airframe component. The "flight" name is coincidental — this is personal mobility, not vessel construction. Thematic forcing.

- from: fxntstorage:hardened_backpack / hardened_storage_box | via: MineColonies request/supply system | to: economy | motif: M-28 | power: mid-endgame | tone: ok — the hardened tier is a bulk-logistics container; a MineColonies colony stockpile hut requesting hardened storage boxes to hold colonial goods is a colony-route demand tie | verdict: ACCEPT | hook: the colony warehouse foreman orders hardened storage boxes from your workshop — the colonial supply chain needs containers to hold what it makes

- from: fxntstorage:storage_controller (item-routing network) | via: aeronautics package integration (cardboard plane picks from storage network) | to: aeronautics | motif: M-31 | power: mid-endgame | tone: ok — a storage controller networked to a cmpackagecouriers courier dispatch point enables the logistics arm to pull items from a warehouse and ship them; the controller is the "warehouse" node the logistics arm moves goods from | verdict: ACCEPT | hook: the courier plane doesn't carry items by hand — it pulls from the storage network and flies them cross-map

- from: fxntstorage backpack tiers | via: create:pressing for andesite/copper sheets into box panels | to: create | motif: M-05 | power: everyday-mid | tone: ok | verdict: REJECT | reason: already woven via create:mechanical_crafting (made-by in dossier); adding a pressed-sheet input step would be double-gating the same item. The connection is already there; adding more steps here is gratuitous depth, not GregTech-style meaningful stages.

OK — existing Create + survival connections are sound (mechanical_crafting already the made-by method). Two new links (economy/colony M-28, aeronautics/logistics M-31) are new and coherent.

## tipsmod   [anchors: support/QoL-client (1)]

- LEAVE — loading-screen tip rotator. Zero items/blocks, no gameplay surface. Sanctioned support/pack-authoring role. No weave possible.

## alternate_current   [anchors: support/performance (1)]

- LEAVE — redstone-dust performance rewrite. Zero items/blocks; transparent behavior patch. Sanctioned performance/support role. No weave possible.

## create_hypertube   [anchors: create, aeronautics (2)]

Already at 2 anchors (Create + aeronautics/logistics; crafted via create:sequenced_assembly). Evaluate for new links and existing quality.

Power read: hypertube + entrance + accelerator are mid-tier infrastructure — sequenced_assembly gating is already the right depth for a transit node. The mod moves players/entities, not items; no material processing. The dossier says "no coherent further weave — leave."

- from: create_hypertube:hypertube_entrance (requiring kinetic power input) | via: create:sequenced_assembly (already made-by) | to: create | motif: M-06 | power: mid | tone: ok — the entrance is already built via sequenced_assembly which IS M-06 territory; the connection is established | verdict: REJECT | reason: this weave already exists (sequenced_assembly is the made-by method in the dossier); re-proposing it is not a new link

- from: hypertube network (player transit) | via: aeronautics/logistics role | to: economy | motif: M-33 | power: mid | tone: ok — a player running a hypertube transit corridor for other players IS a service-for-hire; other players pay for faster cross-base travel | verdict: ACCEPT | hook: the transit engineer builds and maintains the tube corridor; other players pay in goods for fast-travel passes between districts

- from: hypertube infrastructure | via: create structural alloy inputs for tube blocks | to: create | motif: M-23 | power: mid | tone: clash-adjacent | verdict: REJECT | reason: M-23 is for Aeronautics airframe/hull structural build materials — tube blocks are ground infrastructure, not vessel construction. Applying M-23 here would dilute the motif. The Create link is already established through sequenced_assembly.

OK — existing Create + aeronautics connections are sound. One new economy-arm link (M-33 transit service) is coherent and new.

## rottencreatures   [anchors: survival (1)]

Power read: biome/event-gated zombie variants, each dropping themed kill-loot — frozen_rotten_flesh (Frostbitten/cold biomes), magma_rotten_flesh (Swampy?), corrupted_wart (Swampy, poison mechanic), mob heads (decorative), treasure_chest (pirate Dead Beard). loot=yes. These drops are mid-tier, fight-gated, non-craftable inputs — prime M-02 / M-11 targets. The dossier already flagged magic and Create as strong candidates.

- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire (transmutation into a cold essence / cryomantic reagent) | to: magic | motif: M-11 | power: mid | tone: ok — a frostbitten zombie's flesh transmuting into an icy spirit essence in spirit fire is lore-coherent; cold-thematic mob drop → cold magic reagent makes immediate sense to a player | verdict: ACCEPT | hook: the Frostbitten's frozen flesh doesn't burn in spirit fire — it crystallizes into a chill essence the Occultist uses for cold rituals

- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement (arcane infusion into a corruption catalyst) | to: magic | motif: M-10 | power: mid | tone: ok — wart from a poison/swamp undead makes a natural corruption/blight catalyst in an arcane infusion, thematic with Ars Nouveau's growth magic and the mod's swamp origin | verdict: ACCEPT | hook: the Swampy zombie's corrupted wart, steeped in source through the imbuement altar, distills into a blight catalyst — what poisons you can poison a spell

- from: rottencreatures:magma_rotten_flesh | via: create:haunting (soul-fire transmutation) | to: create | motif: M-19 | power: mid | tone: ok — passing magma-inflected rotten flesh through Create's haunting process (soul fire) gives it a fire/soul conversion output; M-19 is the native Create→occult soul-fire bridge, and fire-themed mob drops are the natural input | verdict: ACCEPT | hook: the magma zombie's scorched flesh, passed through the haunting fan, soul-fires into an ember residue that feeds the Create/occult chain

- from: rottencreatures:frozen_rotten_flesh | via: create:crushing | to: create | motif: M-02 | power: mid | tone: ok — crushing a frozen drop yields a cold byproduct (ice crystals / freeze-dust) that another Create process could use | verdict: REJECT | reason: occultism:spirit_fire is the stronger and more thematic route for frozen flesh (accepted above); adding a Create crushing path for the same item is a double-claim on the same drop without adding loop depth. Keep the spirit_fire route as the primary sink.

- from: rottencreatures:treasure_chest (Dead Beard pirate drop) | via: loot-seed / economy | to: economy | motif: M-34 | power: mid | tone: ok — the pirate captain's treasure chest is a combat-route supply drop; a combat specialist farming Dead Beard provides the chest contents to non-combat players | verdict: ACCEPT | hook: Dead Beard's chest drops the kind of loot only a fighter can reach — traders pay combat specialists for the pirate's haul

- from: rottencreatures mob heads | via: bare 'decorative sellable' | to: economy | motif: M-09 (retired) | power: everyday | tone: n/a | verdict: REJECT | reason: mob heads are decorative; "they're sellable" is the retired M-09 ambient endpoint, not a demand-gating weave. No mechanism gates demand for them.

## ding   [anchors: support/client-QoL (1)]

- LEAVE — client-side audio notification (world-load ding). Zero items/blocks, no gameplay surface. Sanctioned support role; no weave possible.

## quark   [anchors: support/decoration-building-QoL (1)]

Power read: massive vanilla-plus mod — 809 blocks, 1000 items, 70 c:tags. Key outputs for method-pull: food/crop storage crates (apple_crate, carrot_crate, potato_crate, beetroot_crate, etc.) tagged under c:block/item/storage_blocks/*, plus decorative building blocks (vertical slabs, posts, hedges, bookshelves, andesite/stone variants). The abacus (counting tool) and Glimmering Weald underground biome blocks are also notable. The dossier lists only a weak M-04 Create/crushing candidate.

- from: quark:*_crate (apple_crate, carrot_crate, potato_crate, etc. — c:storage_blocks/* crop blocks) | via: create:milling / pressing (bulk-process the storage crate back into crops; or press a crate into compact form) | to: create | motif: M-12 | power: everyday | tone: ok — Create automating bulk crop storage/extraction is exactly what a farm-processing line does; a milling or pressing pass on a crate dissolving it into its constituent crops is a natural Create food-logistics step | verdict: ACCEPT | hook: the Create farm line presses apple crates into crushed apple pulp — the storage crate is the bulk transport unit the food-processing chain feeds on

- from: quark:andesite_bricks / andesite_pillar / vertical_slabs (stone variants) | via: create:crushing (deco-recycling) | to: create | motif: M-04 | power: everyday | tone: ok — decorative stone blocks crushing back to raw/gravel + XP nugget is the established deco-recycling pattern | verdict: ACCEPT | hook: chiseled andesite bricks returned to the crusher yield gravel and a flicker of XP — no material is wasted in the workshop

- from: quark:ancient_* blocks (Ancient Wood — Glimmering Weald biome) | via: create:crushing (rare wood → unique byproduct) | to: create | motif: M-04 | power: mid | tone: ok — the Glimmering Weald is an underground biome with unique wood; recycling its blocks is the same deco-recycling pattern but with a rarer material; the byproduct could be a luminescent wood-dust (flavor) | verdict: ACCEPT | hook: ancient logs from the depths, run through the crusher, shed a faintly glowing bark-dust — the underground's rarest timber doesn't go to waste

- from: quark:abacus (counting/tallying tool) | via: economy tooling tie (counting coins, tallying stock) | to: economy | motif: M-08 | power: everyday | tone: clash-adjacent | verdict: REJECT | reason: M-08 is specifically about player-minted Numismatics coin via Create processing; the abacus is a QoL inventory-counting gadget, not a coin-minting step. A lore link (traders use abacuses) is flavour, not a mechanism. No actual economy gating.

- from: quark:*_crate c:storage_blocks tags | via: MineColonies warehouse/supply requests | to: economy | motif: M-28 | power: everyday | tone: ok — a MineColonies colony warehouse requesting bulk-crop storage crates as supply containers is a colony-route demand tie; the colonists want to store their harvest, and Quark crates are the container | verdict: ACCEPT | hook: the warehouse foreman requests apple crates to hold the orchard's output — colony supply demands bulk-storage solutions

- from: quark:elytra_duplication recipe | via: magic gating (require an Ars Nouveau or Occultism component to duplicate Elytra) | to: magic | motif: M-29 | power: endgame | tone: ok — Elytra duplication is an endgame Quark feature; gating it behind a magic-route exclusive reagent (cross-route dependency) forces magic specialists and flight specialists to trade | verdict: ACCEPT | hook: duplicating an Elytra requires a source crystal as the binding agent — the magic specialist holds the key to mass-producing flight

- from: quark building blocks (vertical slabs, hedges, posts) | via: bare 'decoration palette is already its anchor' | to: support | motif: no-motif | power: everyday | tone: n/a | verdict: REJECT | reason: decoration palette IS the current support anchor; adding a weave for it against another system would be weaving for the sake of it unless a specific method-pull lands. The M-04 crushing and M-12 crate links above are the specific coherent pulls; everything else is ambient decoration.

## rechiseledcreate   [anchors: create, support/decoration (2)]

Already at 2 anchors (Create kinetic method + decoration companion). Dossier says no further weave needed — agree. This mod IS the bridge that earns Rechiseled its Create anchor.

OK — connections sound. rechiseledcreate is the companion bridge that makes Rechiseled's decoration palette a Create-powered production output. No additional weave needed without forcing.

## letmefeedyou   [anchors: support/QoL (1)]

Power read: behavior-only mod; player feeds another player by right-clicking. No items, no blocks. The only "content" is the interaction itself and the hunger mechanic it uses.

- from: player feeding interaction | via: economy service-for-hire framing | to: economy | motif: M-33 | power: everyday | tone: clash | verdict: REJECT | reason: M-33 requires a *specialist performing work on another player's materials* (enchant-for-hire, colony contract, cargo run) with emergent payment; a co-op QoL feeding gesture is social glue, not a labor-market service. The interaction is too thin and ambient to constitute a real economy link — there is no material, no gating, no specialization implied.

- LEAVE — behavior-only QoL. Zero items/blocks, no material surface. The feeding mechanic is co-op social glue, not a loop node. Sanctioned support role.

## attributefix   [anchors: support/library-fix (1)]

- LEAVE — pure compatibility/bugfix library raising vanilla attribute caps. Zero items/blocks, no content; enables magic and combat gear to scale as intended. Sanctioned support/library role. No weave possible.

== CHUNK COMPLETE ==
