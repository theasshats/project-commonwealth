# Phase 2 candidates — chunk-02

## betterdungeons   [anchors: survival (1)]
- from: dungeon chest loot tables | via: loot-table seeding (datapack edit, not recipe routing) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: bounty boards pay coin for clearing a YUNG's dungeon type; seed a coin pouch or unique sellable relic into its loot tables so dungeon delves feed the Numismatics economy
- from: dungeon chest loot tables | via: loot-table seeding | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Catacombs/Undead Fortresses drop Ars source gems or Occultism soul-infused loot as exploration rewards, gating early magic behind adventuring
- REJECT: any recipe-routing weave — betterdungeons adds no items or machines; there is no material join key to route through a processing method. Both accepted weaves are loot-table edits only.

## smokeleafindustries   [anchors: survival (1)]
- from: refined extracts / gummies / oils | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the in-mod dealer/stoner villager already proves a sell-loop; moving refined extracts into Numismatics bounty goods makes the strain farm a legitimate coin source and a specialist niche for a player
- from: hemp biomass / plant matter | via: smokeleafindustries:generator (FE burnable input) + createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: everyday | tone: ok | verdict: ACCEPT | hook: smokeleaf generator burns pack biomass → FE → Create Addition converts to SU, threading the hemp farm into the Create power spine instead of leaving it an isolated FE island
- from: raw hemp buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: smokeleafindustries already has its own grinder for the same job; milling hemp is mechanically redundant with the in-mod manual_grinder, offers no meaningful differentiation, and adds a parallel path that muddies the machine identity. The FE bridge (above) is a better Create seam.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single two-item Create QoL utility (a filter variant); no materials produced or consumed, no machine, no processing output. There is no coherent 2nd pillar without inventing a fictional use — a forced weave would be a defect.

## vc_gliders   [anchors: aeronautics (1)]
- from: reinforced paper (paper + iron/leather) / higher-tier gliders | via: create:pressing (sheets) + create:mechanical_crafting | to: Create | motif: M-05 | power: mid (diamond/netherite tier) | tone: ok | verdict: ACCEPT | hook: flight gear made from Create-pressed sheets and assembled on a Mechanical Crafter makes the glider part of the tech spine; a player builds their first glider the moment they have a small Create workshop — and the netherite tier earns a mechanical_crafting gate
- from: reinforced paper feedstock | via: create:milling (paper pulp) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: reinforced paper is a simple vanilla-adjacent crafting step (paper + leather/scrap); routing it through milling is over-engineered for an everyday component — violates the "never gate a basic component behind a complex recipe" guardrail. The mechanical_crafting gate on higher tiers (above) is the right depth.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — structure datapack with no items, blocks, or methods. The only viable weave is editing its loot tables to seed pack-specific rewards, which is an optional data tweak any pillar can do independently and doesn't constitute a mod-to-mod edge. No coherent 2nd pillar without forcing.

## createimmersivetacz   [anchors: Create (1)]
- from: bulk ammo (twelve_gauge_shell, casings, rounds) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: mass-produced ammo is a consumable trade good — an arms-dealer player specialization sells shells for coin, making the Create ammo factory a coin source and wiring combat logistics into the economy
- from: nitropowder fluid | via: tfmg:coking / distillation (chemical processing chain) | to: Create (deeper) | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: createimmersivetacz is already anchored to Create; routing nitropowder through TFMG deepens Create→TFMG but doesn't add a 2nd pillar — it's an intra-Create chain extension, not a new pillar. Economy (above) is the real 2nd pillar.

## tfmg   [anchors: Create (1)]
- from: diesel / gasoline / LPG fuels | via: aeronautics engine/fuel intake | to: aeronautics | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG's Distillation Tower refines crude oil into the precise fuels that power Aeronautics combustion engines — airship players need a fuel supplier, and TFMG's diesel chain is the natural industrial supply line; the pack's reagent-ownership table already reserves tfmg:diesel/gasoline/lubricant for this exact role
- from: steel plate / structural steel | via: aeronautics airframe/hull construction recipe | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: TFMG steel is the pack's load-bearing structural metal; airframe hulls built from fabricated steel plates make ship construction cost real mid-game material and extend the TFMG chain beyond land-side builds
- from: aluminum / constantan (TFMG lightweight metals) | via: tfmg:casting → aeronautics drivetrain component recipe | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: lightweight cast aluminum is a natural propeller/rotor material — drivetrain components (propellers, control surfaces) cast in aluminum tie TFMG's metallurgy to ship propulsion depth
- from: refined steel + fuels | via: numismatics sell/price | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: smelted steel and canned diesel/gasoline are high-effort processed scarcity — natural Numismatics trade goods for a player who specializes in the industrial supply chain
- REJECT: survival via combat (flamethrower/napalm) — combat flavor only; not a structural pillar connection. No motif applies.

## midnightthoughts   [anchors: survival (1)]
- LEAVE — pure rest-buff behavior mod; ships no items, no tags, no machines. The well-rested effect is an ambient rule with no material join key. No coherent 2nd pillar without forcing a fictional edge.

## solclassic   [anchors: survival (1)]
- from: varied cooked meals (broad food roster) | via: numismatics sell/price | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: SoL's diminishing returns make a diverse cooked-food roster mechanically necessary; that same necessity makes diverse meals valuable trade goods — a cook player who sells a variety basket of meals earns coin precisely because buyers need variety, creating a food-market niche in the economy
- REJECT: economy via recipe routing — solclassic has no processing method and ships no craftable food; the weave above is systemic (the food-variety demand creates trade value) not a recipe edge. The systemic link is enough for the economy 2nd pillar without over-engineering it.

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the Crab's claw already has a vanilla-brewing use (reach potion); routing it through an arcane imbuement or spirit-fire transmutation as a magic reagent is a natural escalation — combat → spellcraft, and the claw's limb-extending theme fits a reach/mobility spell component
- from: friendsandfoes copper deco (copper buttons / lightning rods / copper golem head) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing copper deco → copper nuggets is mechanically valid but thin — it's a cleanup edge (recycle path) rather than a meaningful pillar connection. It would make Create the 2nd pillar on paper but a player would never notice it as a real weave. The magic weave (crab_claw → reagent) is more coherent and meaningful. ACCEPT the magic pillar; this Create edge is cosmetic.
- from: Wildfire / Illusioner drops | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire's fire-shield fragments and Illusioner's mirror-shards are thematically rich reagent material — hostile mob-vote creatures whose drops feed the magic crafting web rewards dungeon/combat players with spell ingredients

== CHUNK COMPLETE ==
