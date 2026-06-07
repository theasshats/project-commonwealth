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

