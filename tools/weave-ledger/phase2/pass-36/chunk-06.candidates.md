# Phase 2 candidates — chunk-06

## startuptime   [anchors: support/diagnostic (1)]

LEAVE — zero-content code library. Prints a boot-timing log line; no items, no blocks, no recipe types, no in-world state. Nothing to route, no second anchor possible.

## kiwi   [anchors: support/library (1)]

LEAVE — pure developer library. Registers no items, blocks, or recipe types; provides registration helpers and GUI/font utilities for Snownee's dependent mods only. Nothing to weave; genuine zero-content library.

## travelersbackpack   [anchors: survival (1)]

Power-read: The backpack is an exploration logistics item — portable large inventory, dual fluid tanks (hose-fillable), sleeping-bag respawn, and slot-in upgrades. 84 items, 60 blocks; `travelersbackpack:backpack_upgrade` is a named recipe type. Tier: everyday (leather packs) → mid (themed mob-drop packs) → late (netherite/dragon). The fluid-tank feature makes it a portable buffer for TFMG/Create fuels, potions — a real logistics value item for airship crews. Two custom recipe types are present: backpack_shaped and backpack_upgrade.

- from: travelersbackpack themed variants (mob-drop crafted packs, e.g. blaze, dragon, netherite) | via: travelersbackpack:backpack_upgrade (upgrading a blank upgrade with Create-pressed metal plates) | to: create | motif: M-20 | power: mid | tone: ok — a kinetic upgrade applied to an existing item is exactly M-20's light deploy-application pattern; a brass/zinc upgrade plate applied via deployer is coherent industrial kit | verdict: ACCEPT | hook: a pressed brass plate is mechanically assembled into the backpack upgrade at a Deployer, turning the upgrade from a crafting-table recipe into a Create-step — the pack becomes part of the industrial supply chain

- from: travelersbackpack fluid tanks (filled with fuel/lubricant via hose) | via: passive logistics role as portable aeronautics fuel buffer | to: aeronautics | motif: M-26 | power: mid | tone: ok — airship crew needs fuel on expeditions; a tank-equipped backpack is the obvious carrier for TFMG diesel/gasoline | verdict: ACCEPT | hook: on a long-range airship run a full backpack tank becomes the difference between landing to refuel or limping home — the fuel consumption loop gains a personal logistics node

- from: travelersbackpack:backpack_upgrade crafting chain | via: travelersbackpack:backpack_upgrade recipe routed through create:pressing for a required metal plate input | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: M-20 (light deploy-application) already covers the Create weave more precisely and at the right depth for an everyday carrier item; M-05 (native-method gating for flagship items) would over-gate a common exploration tool — don't double-apply Create anchoring

- from: travelersbackpack exotic tier variants (dragon, netherite) | via: requiring a boss drop as a crafting gate | to: create | motif: M-15 | power: endgame | tone: ok — endgame pack tiers behind a boss drop is coherent; dragon pack needs dragon tooth/scale | verdict: REJECT | reason: M-15 reserved for complex Create/tech recipe gates per motif scope; applying it to a storage item tips into over-gating a survival QoL item, and the dragon backpack is cosmetic differentiation not a tech unlock — depth via M-20 plate upgrade is sufficient and correctly scaled

REWORK: The dossier's "aeronautics via portable logistics — [WEAK]" note undersells this. The fluid-tank + sleeping-bag combo is genuinely load-bearing for long-range aeronautics expeditions (field refuel + respawn anchor away from base) — this is a M-26 consumption sink link (fuel is consumed from the tank en-route) with a clear aeronautics hook. Should be upgraded from WEAK to MED/STRONG, not left as a vague comment. The Create-recipe weave candidate (M-20) is new from this pass and was missing from the dossier.

## edf-remastered-5.0-beta4   [anchors: survival/boss-difficulty (1)]

Power-read: Pure behavior datapack — rewrites the Ender Dragon encounter (500 HP, multi-phase AI, minion summons, boss music). Confirmed: does NOT change or add dragon drops (loot=yes on the jar but is the vanilla dragon loot unmodified). Zero registered items/blocks. The survivalpressure anchor is the only real one — it's a danger-pump that makes the endgame harder.

- from: Ender Dragon encounter difficulty increase (harder boss = higher demand for gear before challenging it) | via: loot-table seeding — add pack-relevant endgame reagents or components to the dragon's enhanced loot pool, so the harder fight pays out a proportionally better return | to: magic | motif: M-02 | power: endgame | tone: ok — a harder dragon should drop better magic reagents; seeding soul_crystal or ars_nouveau:source_gem fragments into the loot pool makes the revamped fight a magic-web feeder | verdict: ACCEPT | hook: beating a 500-HP raging dragon earns rare soul reagents that feed the magic web, not just the same dragon breath drop — the scaled difficulty earns a scaled magic payout

- from: Ender Dragon boss fight (endgame challenge) | via: loot-seed — drop a unique boss-key component in the enhanced dragon loot (e.g. a Fragment of Draconic Will) gating a high-tier Aeronautics controller or Create Sequenced-Assembly part | to: create | motif: M-15 | power: endgame | tone: ok — the dragon is the canonical Minecraft endgame boss; making it gate a high-tier Create component is thematically sensible and proportional to the fight's new difficulty | verdict: ACCEPT | hook: the revamped dragon drops the one component that gates the top-tier Aeronautics hull assembly — beating the End earns your airship

- from: edf boss difficulty | via: loot-seed to magic | to: magic | motif: M-34 | power: endgame | tone: ok — a combat-route specialist farms the revamped dragon and trades the rare drops to non-combat players | verdict: REJECT | reason: M-34 (combat-route supply) is the correct motif for boss-drop economy role, but it's structurally a consequence of the M-02/M-15 loot-seed rather than a separate Phase-3 action; the combat-supply economy role is already baked into the dragon being a boss — listing M-34 as an additional candidate here is redundant, not additive

REWORK: The dossier writes "none — leave" for 2nd-anchor candidates because the mod adds no items and doesn't touch the drop table. This misreads the Phase 2 loot-seed rule: a behavior overhaul that makes a boss significantly harder is exactly the case where loot-seeding the enhanced fight is the correct delivery — the dragon is harder and should pay out more to the magic/Create webs proportionally. Both M-02 and M-15 loot-seed candidates are coherent additions. The dossier's LEAVE recommendation is overly conservative by the briefing's own criteria ("a boss/structure feeding coin, magic reagents, or a progression key is a REAL candidate — do NOT LEAVE a loot-bearing structure mod").

## yet_another_config_lib_v3   [anchors: support/library (1)]

LEAVE — pure config-screen API library. No items, no blocks, no recipe types, no in-world effects. Generates settings GUIs for dependent mods. Genuine zero-content library with nothing to route.

## imfast   [anchors: support/QoL-compat (1)]

LEAVE — server-side movement-validation mixin. Zero items, zero blocks, zero recipe types. A behavioral patch (raises vanilla anti-cheat speed threshold) that enables aeronautics/vehicles to run at speed. No content surface; nothing to weave. Not "leaving" for convenience — the mod is genuinely zero-surface and correctly classified as support.

## rechiseledcreate   [anchors: create, decoration (2)]

Power-read: 242 blocks + 242 items — chiseled variants of Create decorative stone and wood window types; the Mechanical Chisel is a new kinetic block. It already has 2 anchors (Create-kinetic method + decoration palette). The dossier correctly flags it as already ≥2. Let me look for a third connection now.

Method-pull on the output: the 242 chiseled blocks are fine architectural finishes — andesite cut polished, asurine cut bricks, wood window patterns. Could these feed an economy/service angle? A player specializing in the Mechanical Chisel (requires Create power) producing premium building material to trade would be an M-33 service-for-hire candidate. But the chisel process is a 1:1 transformation with no value added beyond shape — not a true service-for-hire in the M-33 sense (the "service" would be trivial given how cheap it is to set up a Mechanical Chisel once). No strong 3rd anchor.

- from: rechiseledcreate chiseled stone/window blocks (produced via Mechanical Chisel) | via: M-33 service — a Create specialist running the Mechanical Chisel produces premium decorative blocks for trade, since they require Create power others may not have set up | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: the Mechanical Chisel's barrier is trivially low — anyone with basic Create automation can run it; M-33 service-for-hire requires a meaningful specialization lock (e.g. enchanting-for-hire, a complex Create chain). 1:1 block-reshape at low cost is not a real economy service, just reshaping vanilla deco. A weak "economy" anchor here would dilute M-33.

- from: chiseled Create stone variants | via: create:crushing — chisel output is a polished/shaped stone that could crush back to stone dust + XP nugget; a lossy recycle loop | to: create | motif: M-04 | power: everyday | tone: ok — it IS a Create deco block family, M-04 is the canonical method for this | verdict: REJECT | reason: rechiseledcreate IS already anchored in Create as its primary pillar (the Mechanical Chisel block is a Create kinetic block); M-04 is the inbound weave for the dossier's existing Rechiseled blocks — applying it here too would be redundant self-wiring within the same Create anchor. The two-anchor state is sound; no new anchor is forced.

OK — connections sound. Dossier's "already ≥2 (Create kinetic method + decoration)" is correct. The mod IS the bridge providing Rechiseled its Create pillar. No coherent 3rd system anchor that doesn't reduce to trivially weak. Decoration/Create at depth 2 is the appropriate end state.






