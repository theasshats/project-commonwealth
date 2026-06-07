# Phase 2 candidates — chunk-10

## kleeslabs   [anchors: support/QoL (1)]
LEAVE — pure behavior mod (no items, no blocks, no recipes, no loot tables). Breaking one slab half is a building convenience; it registers nothing and has no content surface to route through any motif. Zero surface means zero candidate edges. Not a forced LEAVE — genuinely nothing here.

## bettermineshafts   [anchors: survival (1)]
<!-- power-read: structure overhaul only; loot=no (uses vanilla mineshaft loot table — no seeding hook even via loot-seed delivery). Zero items/blocks registered. -->
<!-- method-pull: no materials to route. loot=no means even loot-seed is off the table. -->
<!-- The dossier correctly notes it indirectly serves the scarce-ore mining loop (the expanded corridors hold more ore encounters), but that's a worldgen-feel effect, not a content hook. -->
LEAVE — structure-overhaul mod with no registered items, no blocks, and loot=no (vanilla mineshaft loot only). No material surface to route; loot-seed delivery requires a loot table to inject into, which this mod doesn't own. Genuinely zero weave surface beyond the structural atmosphere.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
<!-- power-read: 10 items — cardboard_plane (mid-tier; needs cardboard + Create cutting+deploying), location_transmitter, portable_stock_ticker. Logistics layer over Create packages — everyday use once Create-logistics is established. -->
<!-- existing connections sound: Create-cutting/deploying to build the plane, aeronautics/logistics role. Two strong anchors. -->
<!-- method-pull for a 3rd: could we find an economy or survival edge? The plane moves packages — could carry coin (economy), food, or magic reagents. But that's the *use*, not a recipe weave. -->
<!-- candidate 1: economy — the portable_stock_ticker lets players place remote orders while away. Could tie to Numismatics trade orders (a player remote-buys from a Trading Floor stall via the ticker). This is a config/KubeJS integration, not a recipe. Motif M-21 (provisional trade-seam) — but it's more logistical than villager-trade-denominated. No clean motif. REJECT. -->
<!-- candidate 2: aeronautics depth — cardboard_plane needs a structural material for high-tier courier variants. Could require a lightweight structural component (e.g. an aeronautics sail or Create thin plate) via M-23 or M-24. But the cardboard_plane is already mid/everyday; gating it further violates the depth-scales-with-power rule. REJECT. -->
<!-- candidate 3: M-20 deploy-application — a "courier upgrade" applied to the plane via create:deploying to extend range or add a chunkloading beacon. Plausible mechanically, but no-motif as written (M-20 is about upgrading a base item, not a logistical range-extend). The item exists (plane + deploying already used in its recipe), but it doesn't compose a clean new cross-system link. no-motif / REJECT. -->
OK — connections sound. Create + aeronautics/logistics are the correct and sufficient anchors. The mod's value is logistics infrastructure, not a material node. No forced 3rd anchor — all candidates either violate the depth-scaling rule or land on no-motif.

- from: cardboard_plane economy routing | via: M-21 provisional trade-seam | to: economy | motif: M-21 | power: mid | tone: ok | verdict: REJECT | reason: provisional motif + it's logistical infrastructure (the *use* of the plane is trade-routing, not a recipe seam); no recipe/loot delivery mechanic available
- from: cardboard_plane structural-tier upgrade | via: M-23 structural alloy | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: plane is everyday/mid; gating it behind a structural alloy recipe chain violates depth-scales-with-power; basics cannot be deeply gated
- from: courier range-upgrade application | via: M-20 deploy-application | to: create | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the "upgrade via deploying" angle doesn't route through a cross-system link; it stays within Create logistics and adds no second pillar

## sable_sa_compat   [anchors: support/compat (1)]
LEAVE — genuine zero-content code library / compat patch. No items, no blocks, no loot, no recipes. It bridges Create: Stuff 'N Additions gadget behavior to Sable physics ships; its entire value is behavioral (gadgets work on moving ships). Nothing to route through any method; forcing a weave would be a defect. Same family as aeronauticscompat — necessary and correct, but not weaveable.




