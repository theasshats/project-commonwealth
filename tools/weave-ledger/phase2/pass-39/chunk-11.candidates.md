# Phase 2 candidates — chunk-11

## death-count-1.0   [anchors: support (1)]
- LEAVE — pure datapack scoreboard cosmetic; no items, no blocks, no loot, no recipe methods. Tab-list death tally is a sanctioned friend-group flavor role. Nothing to route through any method.

## architectury   [anchors: support (1)]
- LEAVE — cross-platform modding API library; no blocks, items, recipe types, or loot. Zero gameplay surface. Genuine zero-content library; the definition of LEAVE.

## touhou_little_maid   [anchors: survival (1)]
- from: boss-drop (e.g. cataclysm:ancient_metal_ingot or witherite) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: summoning a high-tier maid or unlocking a special maid variant requires a boss-material offering at the Altar — the shrine demands proof of combat; boss kill gates the companion upgrade.
- from: occultism spirit essence (afrit/djinni foliot) | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the Altar is itself a ritual structure (Torii + pillars + power points); routing an occultism spirit essence as a catalyst for a mid-tier maid summon ties both ritual systems together — the spirit animates the shrine maiden.
- from: maid fairy drop / power-point bottle (village loot) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: M-34 is combat-route supply; power-point bottles are village loot, not a boss/danger drop — the demand-gate isn't combat-gated enough. Bare sellable link. Fails economy-is-player-run test — "power points are sellable" is ambient, not a demand-gate.
- from: Ars Nouveau source_gem | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-01 | power: mid | tone: clash | verdict: REJECT | reason: source_gem is the Ars internal currency reserved by M-01 as a reagent within Ars rituals/imbuement; making it an altar input for a non-Ars shrine-maiden system feels grafted — the Altar's power-point system is already its own currency. Two parallel shrine-currencies fighting for the same slot. Theme clash is real.
- from: Touhou_little_maid Broom (rideable flight item) | via: create:mechanical_crafting or crafting | to: aeronautics | motif: M-24 | power: mid | tone: clash | verdict: REJECT | reason: the Broom is a whimsical personal flight tool, not a drivetrain component — routing it into Aeronautics propulsion is forced. Its item-theme is anime/cute, not industrial; tone clash breaks the player-intuition test.
REWORK: existing dossier candidate "economy via power-point bottles as sellable/mob-drop link [M-02 WEAK]" — this is bare-sellable logic, which M-09 retired. Rework needed: a coherent economy link would be M-28 (colony route) if a colony hut could produce maid automation labor for hire, or M-33 (service-for-hire) if a maid-automation service replaces a player job. But neither has a concrete method to route through yet; flag as candidate for M-33 (service = maid-farming-work as labor hired by non-farming players) — light, no method yet.

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: create_tweaked_controllers:tweaked_lectern_controller (gamepad→redstone-freq control surface) | via: create:mechanical_crafting | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the tweaked controller is itself built from Create's precision mechanism + electron tubes — it already costs Create parts to build; making the controller a required component for driving a Aeronautics flight deck natively weaves it as a Create-gated control surface; the craft deepens without needing new recipe steps. (Anchors Create and aeronautics together — the control surface IS the Create interface for vehicles.)
- from: create_tweaked_controllers:tweaked_linked_controller | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the tweaked controller is a QoL vehicle-control device, not an endgame keystone item. Routing it through sequenced assembly adds depth that doesn't match its everyday-to-mid power tier (it's a controller, not a reactor core). Over-engineered for what it does — M-05 via mechanical_crafting is already enough. Scale depth with power — this violates that rule.
- from: create_tweaked_controllers gamepad-mapped contraptions | via: config tie | to: survival | motif: no-motif | verdict: REJECT | reason: "gamepad control of farms reduces survival labor" is ambient QoL, not a system connection. No motif fits; no method to route through.
OK — aeronautics anchor is sound (controller for Create vehicles/contraptions). The Create anchor via M-05 above is the one addition needed.




