# Phase 2 candidates — chunk-18

## bakery   [anchors: survival (1)]

- REWORK: existing survival anchor is sound — routes through farm_and_charm cooking chain, downstream of that web. OK — connections sound for the existing anchor.

- from: bakery finished goods (cakes, tarts, cupcakes, jams) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Every processed food is trivially sellable; this isn't a structurally distinctive loop-closing sink. Dossier already flagged it; rejecting per pass guidance.

- from: bakery:blank_cake / dough stage | via: create:milling (wheat→flour as Create-milled alt input) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: a Create miller grinds wheat to flour feeding the baker's dough chain — the tech spine supplies the bakery, not just the handcraft bench. Depth: one light step (everyday item, single routing). Anti-gate check: does NOT gate the basic bread/cake; milling is an *alternate* flour source alongside the crafting_bowl, preserving the Farm & Charm baseline.

- from: bakery:apple_jam / strawberry_jam (seasonal fruit preserve) | via: config/seasonal-gating (Serene Seasons — strawberries/apples are summer crops) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: jam flavours shift with the season — strawberry jam in summer, apple jam in autumn — making the bakery output a live seasonal rotation that drives repeat demand. Delivery: config tie / loot-seed or KubeJS seasonal ingredient gate on the fruit input.

## mysterious_mountain_lib   [anchors: support/library (1)]

- LEAVE — pure code library; 0 blocks, 0 items, no recipe surface; sanctioned support role. Nothing to weave.

## companion   [anchors: support/QoL (1)]

- LEAVE — behavior-only pet QoL; 0 items, no material surface; sanctioned support role.

## betterclouds   [anchors: support/client-visual (1)]

- LEAVE — client-side cloud renderer; 0 items, no recipe surface; sanctioned support role.

## resourcefullib   [anchors: support/library (1)]

- LEAVE — pure API library; 0 items, no recipe surface; sanctioned support role.

## spyglass_improvements   [anchors: support/QoL-client (1)]

- LEAVE — client-side zoom/overlay behavior; 0 items, no material surface; sanctioned support role.

## meadow   [anchors: survival (1)]

- REWORK: existing survival anchor is sound — alpine biomes, food/cheese/crops, cold flavor. OK — connections sound.

- from: meadow:cheese_wheel | via: numismatics sell / bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Cheese is sellable but that alone doesn't create a structural economy link. Dossier flagged it as "strong" but per pass guidance this does not clear the de-emphasis bar (no scarcity-gated distribution node, no loop-closing sink property unique to cheese).

- from: meadow:alpine_salt | via: create:milling (ore→salt granules alt route, consistent with M-03 ore-doubling principle) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: alpine salt ore run through a Create millstone yields a processed salt supply for the cooking web — the Create production spine feeds the dairy/alpine cooking chain rather than the player hand-mining salt ore directly. One light step; does not gate basic cooking.

- from: meadow:cheese_wheel (multi-step dairy product) | via: create:mixing / create heat application (using Create's heat source under the cheese cookpot as a machine-heat alt to vanilla campfire) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the cheese-making cauldron accepts Create-driven heat (blaze burner) as a drop-in replacement for the campfire frame — the Create spine powers the dairy pipeline, tying alpine food production to the tech system. Depth fits mid-tier (cheese is multi-step already).

- from: meadow:chambray_wool (felted textile) | via: create:pressing (wool→felt sheet as Create pressing alt to meadow:felting, a parallel industrial route) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: raw wool pressed in a Create press yields felt sheets at scale — a factory-level textile input for colony upholstery or deco crafting, alongside the artisan felt method. Advances the loop: Create production services the alpine material chain.

- from: meadow:alpine_salt | via: magic — ars_nouveau:imbuement or occultism:spirit_fire (salt as ritual purifier/ward catalyst, thematically coherent) | to: magic | motif: M-10 | power: everyday | tone: ok — salt-as-purifier is a deep folkloric / fantasy trope, fits the magic aesthetic | verdict: ACCEPT | hook: alpine salt, refined and pure, acts as a ritual purification input (ward-salt) in Ars or Occultism rituals — a survival-sourced reagent feeding the magic production pillar. Light step; don't gate basic rituals on it, use as an optional catalyst or reagent in a single non-critical ritual.

## createimmersivetacz   [anchors: create (1)]

- REWORK: existing Create anchor is sound — the mod is explicitly a Create integration, routes TACZ guns through sequenced_assembly. OK — connections sound.

- from: createimmersivetacz bulk ammo (twelve_gauge_shell, finished rounds) | via: numismatics sell / bounty payout | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. An "arms dealer sells ammo for coin" is obvious and saturated; the ammo being sellable does not create a structural loop-closing sink. Rejecting per de-emphasis guidance.

- from: createimmersivetacz ammo lines (twelve_gauge_shell / brass casings) | via: aeronautics supply-line framing — ammo as a consumable logistics cargo that an airship must haul to a front/outpost (M-13 fuel analogy: consumable that moves by ship) | to: aeronautics | motif: M-13 | power: mid | tone: ok — PvPvE combat pack; ammo logistics for a co-op squad fits the aeronautics supply-line role | verdict: ACCEPT | hook: an ammo factory produces bulk rounds that must be airshipped to forward bases — the gun economy creates demand for cargo aeronautics, making logistics meaningful. Delivery: config/KubeJS flag or lore/playtest guidance rather than a hard recipe gate; the weave is structural (ammo as a logistics cargo class), not a recipe block. Motif M-13 covers "consumable that powers/feeds aeronautics operation."

- from: createimmersivetacz:nitropowder_bucket (explosive fluid) | via: create:mixing — nitropowder as a Create-mixed explosive intermediate usable in other Create-BigCannons munition recipes too (not just TACZ ammo) | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: nitropowder mixed in a Create mixer is the shared explosive base for both TACZ ammo and Create Big Cannons shell filling — the explosive chemistry web routes through one Create process, forcing specialization in the chemistry chain. Depth: mid-tier, already gated on brass/alloy.

## upgrade_aquatic   [anchors: survival (1)]

- REWORK: existing survival anchor (food + aquatic worldgen) is sound. woodworks:sawmill inbound weave is a light Create-adjacent connection but doesn't anchor it to Create formally. OK — connections sound for existing survival anchor.

- from: upgrade_aquatic raw fish (raw_pike, raw_perch, raw_lionfish — tagged c:foods/raw_fish) | via: farmersdelight:cooking / createfood processing (the pack's existing M-12 cooking web already pulls c:foods/raw_fish) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: pike and perch fillets are fed through Farmer's Delight cutting boards and Create food processing the same way any raw meat is — ocean fishing feeds the Create-driven food production chain. This is low-cost (the c:tag join already exists) and grounds the aquatic biome content in the production pillar.

- from: upgrade_aquatic hostile mobs (threshers/thrashers — hostile aquatic predators) | via: loot-seed → bountiful bounty payout (M-14) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: a bounty board posts contracts on threshers — dangerous open-water predators that threaten fishers — paying coin for their drops; danger drives a combat→economy loop for the aquatic tier. Delivery: loot-seed / bountiful config. Structurally distinctive: the bounty is gated on a specific hostile-mob class, not generic sellability.

- from: upgrade_aquatic:coralstone (deco building block family) | via: create:crushing (coralstone → coral gravel + crushed stone, lossy deco recycling) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: weak — coralstone is primarily a deco block; crushing it back is a very minor connection with no meaningful loop advancement. The M-12 fish link is sufficient; adding M-04 on deco blocks is thin padding.

## createfood   [anchors: survival, create (2)]

- REWORK: both anchors are well-grounded. Survival (food/nutrition) and Create (multi-stage processing chains) are genuine, jar-grounded. OK — connections sound.

- from: createfood finished dishes (pizza, cheesecake, pies — high-effort Create-processed goods) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. The dossier flagged this as "STRONG" but per guidance: a food dish being sellable is the default for every processed item; it is not a structural economy node.

- from: createfood dishes + diet variety | via: survival depth — Diet AppleSeed auto-calc (createfood's huge variety of dish types spans multiple diet groups, feeding all five nutrition categories) | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: createfood's pizza, pastry, and dairy dishes fill multiple diet groups at once, making a well-stocked Create kitchen a nutritional powerhouse — Create production directly relieves survival diet pressure. Delivery: no recipe change needed; the Diet mod auto-calculates from ingredients. This is a config-tie / inherent weave. Deepens the survival→Create loop without a recipe. Motif M-16 is season-reagent but the closest available motif for a "production relieves survival pressure" mechanic; if no motif fits cleanly, this is `no-motif` → flag for review.
  - Revised: the diet link is real but motif M-16 is for seasonal reagents specifically. The correct frame is: createfood's dishes as the Create production output that satisfies survival diet pressure (the loop node: production→relieves pressure). This is a structural loop-advance; the closest motif is M-12 (processing-chain pull where the output is a survival-pressure reliever). Relabelling:

- from: createfood dishes (varied dish types covering all five diet groups) | via: create:milling / mixing / pressing chains (already-existing, jar-grounded) | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Create-processed dishes span grains, proteins, fruits, sugars, and vegetables simultaneously — a player with a running Create food line satisfies full diet variety, making the Create production pillar the primary pressure-relief node for survival diet demand. The loop reads: survival diet-pressure → demand for varied food → Create food production → pressure relieved. Already grounded: createfood authors recipes onto create:milling/mixing/pressing + farmersdelight:cooking.

- from: createfood:bacon_pizza / complex dishes (multi-step Create sequence) | via: minecolonies as a cheaper alt-production route for bulk food (a MineColonies cook/baker hut churning createfood recipes at lower cost) | to: economy | motif: M-05 (native-method gating adapted: colony as the cheaper route) | power: mid | tone: ok | verdict: ACCEPT | hook: a MineColonies kitchen produces simpler createfood dishes at colony scale — the cheaper colony route for bulk food supply, while a player-built Create kitchen outputs premium varieties; this forces specialization between "colony caterer" and "gourmet Create chef." Delivery: KubeJS / MineColonies recipe assignment. Structurally distinctive: creates a two-route production split (colony cheap / Create premium) that advances the loop's exclusivity mechanic.

== CHUNK COMPLETE ==
