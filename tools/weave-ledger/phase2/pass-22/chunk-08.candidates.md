# Phase 2 candidates — chunk-08

## enhancedcelestials   [anchors: survival (1)]

- from: enhancedcelestials:meteor | via: create:crushing | to: Create | motif: M-04 | power: mid | tone: ok | verdict: ACCEPT | hook: a fallen-star rock that the crusher can break down into iron dust + a nickel byproduct — meteors aren't just deco, they feed the ore chain
- from: Blood Moon / Blue Moon event (world-state) | via: event-gating on ritual | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: certain Ars Nouveau rituals or Occultism spirit-fire steps only resolve under a given moon phase — the night sky gates the arcane calendar
- from: enhancedcelestials:space_moss_block | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: space_moss has no defined material value; crushing it into a cosmetic byproduct adds noise without advancing the loop — the meteor candidate already covers the Create-deco-crush angle
- from: Harvest Moon event | via: config tie (crop-growth modifier) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: Harvest Moon's growth buff is a passive global modifier that rides existing mods for free — it's already functionally a seasonal driver; no recipe or weave action is needed or coherent here

REWORK: current anchoring is single (survival). The two ACCEPTs (M-04 Create via meteor crush + M-22 magic via lunar gating) would bring it to three, which is fine. The M-04 candidate is the more concrete deliverable; M-22 is the richer loop connector. Both survive red-team.

---

## incontrol   [anchors: server-util / QoL (support — 1)]

LEAVE — pure JSON spawn/loot rule engine; no items, no recipe-types, no routable material surface. It enables the pack's scarcity and danger design as invisible infrastructure but has no node of its own to weave.

---

## jei   [anchors: client-only UI (support — 1)]

LEAVE — recipe/item display UI; zero items, zero methods, zero material surface. Load-bearing for the pack (EMI dropped because it can't render Create processing recipes — see CLAUDE.md) but not a weave target.

---

## zombiemoon   [anchors: survival (1)]

- from: (mob drops — no unique items) | via: M-02 mob-drop reagent sink | to: magic/economy | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: zombiemoon explicitly ships 0 items; its mobs drop only vanilla rotten flesh style loot. Any drop-seeding would require a loot-table injection on vanilla mob items, which belongs to a survival/danger tuning pass, not a weave candidate tied to this mod.

LEAVE — horror-survival difficulty flavor with no unique items or methods. Its value is pressure (tougher undead) which already anchors it in survival. No coherent 2nd anchor without inventing a drop.

---

## moreoverlays   [anchors: support — QoL/client (1)]

LEAVE — client HUD overlays (spawn-danger light markers, chunk grid, JEI search dim). Zero material/method surface. Pure support role.

---

## modulargolems   [anchors: Create (1)]

- from: boss-tier golem bodies (Cataclysm cursium / Ice&Fire dragonsteel) | via: modulargolems:golem_assemble (boss-drop metal as required part) | to: survival (boss-progression) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Dragonsteel or Cursium golem body is locked behind the boss that drops the metal — fight Cataclysm/Ice&Fire bosses to unlock the top-tier constructs
- from: ars_nouveau:source_gem (or otherstone) | via: modulargolems:golem_replace_part (golem-core upgrade slot) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: infusing a golem's core with a source gem grants it arcane abilities — golemancy meets Ars, and the magic specialist can build golems no one else can
- from: Occultism mob-drop / spirit solution | via: occultism:spirit_fire (transmute a golem part) | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: spirit_fire is already an organic→magic route; applying it to a pre-crafted golem part feels like adding a cosmetic step onto an already-crafted object rather than routing a raw material through magic. The M-10 source_gem upgrade is cleaner and less forced.

OK — the existing Create anchor (sequenced_assembly / mechanical_crafting gate) is strong and well-grounded. The M-15 + M-10 ACCEPTs bring it to three anchors (Create + survival/danger + magic).

---

## aileron   [anchors: aeronautics (1)]

- from: Aileron Elytra enchants | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: Aileron registers no items under its namespace; its enchantments are applied to the vanilla Elytra via smithing/enchanting, and whether they're datapack-exposed for enchanting_apparatus is unverified. The touch point is too thin and unconfirmed to propose as a weave without validation.

LEAVE — Elytra behavior overhaul and enchantment mod with no item or block surface. Aeronautics anchor stands. A magic link would need the enchants to be explicitly available via Ars apparatus — flag for verification but do not accept blind.

---

## architectury   [anchors: support (1)]

LEAVE — cross-platform modding API / library. Zero items, zero methods, zero player-facing content. No weave target.

---

## create_connected   [anchors: Create (1)]

- from: create_connected copycat blocks (wearing any deco texture) | via: (no method — design note) | to: economy | motif: no-motif | verdict: REJECT | reason: the copycat cosmetic system lets any block wear a foreign texture but produces no routable material; the "deco palette as a trade good" angle has no motif and no recipe anchor. Forced edge.

LEAVE — Create-internal QoL (kinetic parts, copycats, logic links). Its value is convenience within the Create spine. No foreign-material join surface; one-system support role is appropriate.

---

## jeresources   [anchors: client-only UI (support — 1)]

LEAVE — JEI addon displaying mob drops, dungeon loot, and ore-distribution data. Pure documentation layer; no material or method surface.

---

## vinery   [anchors: survival (1)]

- from: vinery wines / ciders (effect-bearing luxury consumables) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: finished wine bottles are the archetypal trade good — brewed by the vineyard specialist, priced at the Numismatics counter, sold to adventurers who want the effects without the farming chain
- from: vinery:apple_mash / grape_juice (intermediate ferment outputs) | via: create:milling or create:pressing (alt extraction path) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the apple press is hand-powered; routing apples through a Create millstone or mechanical press gives automatable juice — the vineyard scales from artisan to industrial
- from: vinery:apple_cider / wine (alcoholic liquids) | via: alcohol_industry:alcohol_boiling | to: Create (fuel chain) | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: routing vinery ciders into the alcohol-industry distillation chain is plausible but would create a competing feedstock for the TFMG fuel/industrial chain — a reagent-ownership conflict to escalate before accepting.

REWORK: current single anchor (survival) is undersell. The M-09 economy link is the most obvious and strongest; M-12 Create-press alt-path is a clean bonus. Neither clashes.

---

## endermoon   [anchors: survival (1)]

- from: Ender Moon event (ender pearl surplus night) | via: event-gated recipe or price modifier | to: economy | motif: M-22 | power: everyday | tone: ok | verdict: ACCEPT | hook: the night the Ender Moon rises, ender pearl supply spikes — a smart trader prices them differently, and a bounty board that pays extra coin for ender-pearl bulk delivery on Ender Moon nights would be a genuine seasonal-economy pulse
- from: Ender Moon event → ender pearl glut | via: ars_nouveau:imbuement or occultism:ritual (lunar timing) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: under the Ender Moon, eye-of-ender or chorus-fruit infusion yields a rare ender-attuned reagent — the moon phases the magic calendar just as Blood Moon does for combat

Note: endermoon has no items of its own; both weaves belong to the parent Enhanced Celestials event system and ride ender pearl as the material vehicle. Delivery is event-gating (price/loot/ritual timing) not a recipe. Both valid M-22.

---

## kubejs_create   [anchors: support (1)]

LEAVE — KubeJS/Create scripting bridge. No items, no methods, no gameplay content. It is the tool that authors the weaves this pack uses, not itself a weave target.

---

## just_blahaj   [anchors: decoration / support (1)]

LEAVE — placeable plush-shark decor in 16+ dye colors. Crafted from cheap vanilla materials; no material output to route. Forcing an edge here is the explicit failure mode named in the briefing.

---

## toomanypaintings   [anchors: decoration / support (1)]

LEAVE — adds 50+ paintings + GUI; registers no items/blocks under its namespace, no methods. Pure deco flavor; no weave surface.

---

## cmpackagecouriers   [anchors: Create, aeronautics (2)]

OK — connections sound. Already anchors Create (packaging/logistics chain) + aeronautics (autonomous flying courier). The remote-trade-fulfilment economy adjacency noted in the dossier is real but thin; don't add an edge for adjacency alone. Two solid anchors; no REWORK needed.

---

## collective   [anchors: support (1)]

LEAVE — shared utility code library (Serilum family). Zero items, zero methods, zero content. Library dependency; no weave target.

---

## comforts   [anchors: survival (1)]

- from: comforts:sleeping_bag / hammock (travel sleep gear) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: clash | verdict: REJECT | reason: sleeping bags are too cheap/basic (wool + string) to function as trade goods; pricing a trivially-craftable item at the economy counter adds noise rather than meaningful trade. Tone clash between cozy-QoL and the trade loop.

LEAVE — small vanilla-recipe QoL. Its single survival anchor (sleep-on-the-move) is appropriate. No coherent 2nd anchor that doesn't feel forced.

---

## vc_gliders   [anchors: aeronautics (1)]

- from: vc_gliders:paraglider_iron/gold/diamond/netherite (glider tiers) | via: create:pressing (reinforced paper from Create sheets) + create:mechanical_crafting (upper tiers) | to: Create | motif: M-05 | power: mid (iron/gold) to endgame (diamond/netherite) | tone: ok | verdict: ACCEPT | hook: crafting a flight rig from raw metal alone is too easy — threaded through Create sheet-pressing and mechanical assembly, each glider tier needs its production tier to match; the glider specialist becomes a Create workshop, not a crafting table
- from: vc_gliders copper_upgrade / nether_upgrade (upgrade items) | via: create:pressing (copper plate input) | to: Create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: the upgrade items are already small single-step crafts; adding a Create pressing step for the copper input is a basic-component gate, which the briefing guardrail prohibits — depth scales with power; copper_upgrade is not endgame.

REWORK: current aeronautics anchor is correct. The M-05 ACCEPT (Create-gate the glider tiers through pressing/mechanical_crafting) would add a Create anchor, landing at aeronautics + Create — a natural pair for flight gear in a Create pack.

---

## createmechanicalcompanion   [anchors: Create (1)]

- from: createmechanicalcompanion mechanical_wolf + modules (endgame companion with combat/utility) | via: loot-seed / boss-drop gate | to: survival (boss-progression) | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Mechanical Wolf's netherite_plates and quantum_drive require a boss-drop gate item — building the perfect combat companion demands you first fight something worth fighting; the boss-key pattern binds the tech spine to the danger pillar
- from: createmechanicalcompanion:mob_radar / optical_sensor | via: create_new_age:energising | to: Create (electric tier) | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: charging an optical sensor via FE would be thematically sensible but the dossier notes the build chain is already deep sequenced-assembly — adding an energising step on top of an already-deep chain could overshoot the cost model and should only be added if the electric tier is an explicit unlock point, not just for depth's sake.

REWORK: current single Create anchor is well-grounded (deep sequenced-assembly chain). The M-15 boss-key ACCEPT would add a survival/danger anchor without disrupting the Create chain — it gates the build rather than changing it.

== CHUNK COMPLETE ==
