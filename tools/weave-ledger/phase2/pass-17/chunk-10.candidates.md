# Phase 2 candidates — chunk-10

## blueprint   [anchors: support/library (1)]

LEAVE — genuine zero-content code library (Team Abnormals framework); one cosmetic `template_chest` item is too trivial to anchor a pillar. No recipe surface, no material outputs, no loot. Sanctioned support role.

---

## xaeroworldmap   [anchors: support/QoL (1)]

LEAVE — client-side map rendering UI; zero items, zero loot, zero material processing. No weave surface exists. Paired navigation QoL alongside Xaero's Minimap; sanctioned support role.

---

## create_factory   [anchors: Create, survival (2)]

OK — connections sound. Already hits the 2-pillar goal: Create-methods dessert chain (mixing/pressing/filling) feeds the survival/diet pillar with a Sugars/Fruit category food.

- from: create_factory finished sweets (waffles/caramel apples/chocolate rolls) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a confectionery shop on a Trading Floor — players specialize in the sweet factory and sell luxury desserts to coin-hungry travelers
- from: create_factory:cream_bucket / sweet_berries_jam fluid | via: extradelight:vat or farm_and_charm:crafting_bowl | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: already anchored survival; this would double-count the same pillar rather than add a second (it's still survival→survival), and extradelight vat is an FD-ecosystem integration not a true pillar bridge; the M-09 economy weave is the right bonus here

REWORK: no rework needed — Create+survival anchoring is coherent and well-justified.

---

## vc_gliders   [anchors: aeronautics (1)]

- from: vc_gliders reinforced paper (paper + leather/metal scrap intermediate) | via: create:pressing | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a Create press stamps the laminated paper layers that give the glider its structure — early flight gear demands the tech spine, not just a crafting table
- from: vc_gliders:paraglider_diamond / _netherite (top tiers) | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid-endgame | tone: ok | verdict: ACCEPT | hook: high-tier glider frames are precision-assembled in a mechanical crafter from pressed frames + Create-made metal sheets; makes high-end personal flight cost the spine (consistent with aeronautics depth scaling)
- from: vc_gliders copper_upgrade / nether_upgrade | via: create:item_application | to: Create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) is "not for basics" — the copper upgrade is an everyday component, and deploying it would violate the anti-basic-gating guardrail; the M-05 mechanical_crafting route for higher tiers already earns the Create anchor without over-gating the early upgrade
- from: vc_gliders:paraglider_netherite | via: ars_nouveau:imbuement (attunement step) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: theme-fit is marginal — a paraglider doesn't read as arcane gear (it's industrial/adventure kit), and forcing an imbuement step would make Ars required for a mundane flight item; the Create gating is the correct and sufficient 2nd anchor; magic feels arbitrary here

REWORK: current anchor is aeronautics (1 only) — the M-05 Accept candidates above give it the Create 2nd anchor it needs. Once Create gating is authored, anchors become Create+aeronautics (2) which is internally coherent (built through Create, used for flight — same as create_sa / ctl).

---

## createmetalwork   [anchors: Create (1)]

- from: createmetalwork molten scarce regional metals (molten_platinum, molten_osmium, molten_palladium, etc. from c:crushed_raw_materials/* regional ore feeds) | via: create:crushing → create:mixing → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the ore-doubling pipeline that turns scarce regional metals into refined ingots feeds directly into the mint — processed scarcity becomes coin, which is exactly the economic loop the pack is built around
- from: createmetalwork crushed + molten forms for magic-mod ores (occultism/galosphere metals) | via: create:crushing (already tagged via c:crushed_raw_materials/palladium etc.) | to: magic | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: a magic specialist's rare metals (occultism silver, galosphere palladium) get doubled through the Create foundry — a forge player and a magic player need to cooperate: you supply ore, I double it, we split the yield
- from: createmetalwork:molten_steel_bucket / molten_brass_bucket as structural alloy intermediates | via: create:compacting → structural cast → aeronautics hull components | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: casting molten steel/brass into hull plates at the foundry is the natural supply line for Aeronautics structural builds — the metalwork pipeline that makes metal is the same one that stocks the shipyard
- from: createmetalwork crushed andesite alloy → molten andesite alloy | via: create:mixing (already routed) | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the mod's core function inside the Create spine — it's the existing anchor, not a new one; recording for completeness but it doesn't add a 2nd pillar

REWORK: existing Create anchor is coherent and well-grounded. The M-08 + M-03-magic + M-23 accepts above push it to 3 solid anchors (Create, economy, aeronautics), making it one of the pack's central bridging mods — appropriate given it touches every metal in the pack.





