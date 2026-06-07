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

