# Phase 2 candidates — chunk-17

## smartbrainlib   [anchors: support/library (1)]
LEAVE — pure code library; 0 items/blocks, no recipe types, no material surface. Nothing to weave.

---

## spyglass_improvements   [anchors: support/client QoL (1)]
LEAVE — client-only zoom/UI mod; 0 items/blocks, no recipe types, no material surface. Nothing to weave.

---

## byzantine   [anchors: survival (1)]
LEAVE — pure MineColonies schematic style pack; 0 items/blocks, no recipe types. Its weave is entirely mediated through MineColonies itself (which has its own anchors). Forcing a second edge onto a schematic pack would be incoherent.

---

## charta   [anchors: survival (1)]
- from: charta:empty_wine_glass / charta:empty_beer_glass | via: create:pressing (M-04 deco-through-Create) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: glassware gets crushed back to sand/glass pane on the Create depot — a tavern set that feeds the production line when torn down
- from: charta bar furniture (wooden variants) | via: create:crushing M-04 | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood deco-crush is extremely common across all Macaw/MCW/charta family; low-signal unless done as a whole deco-family pass, not per-mod. Defer to a wholesale deco-crush pass.
- from: charta:card_table / loot tables in generated village/dungeon structures | via: loot-seed (M-14) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Card-table gambling as a coin sink would require a custom mechanic Charta doesn't natively support; without that hook it's just "a sellable item in a chest."
- from: charta bar furniture as Vinery/ExtraDelight cross-prop | via: recipe — bar shelf/stool used as a placed prop triggering a Vinery wine-glass fill interaction | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: Charta's glasses are decorative, not fluid containers; Vinery has its own glass items. Conflation without an actual fluid-API bridge is incoherent.

OK — the one accepted M-04 glass-crush is a light second anchor; the mod's primary value is social/deco (survival). The accepted candidate gives it a thin Create weave.

---

## polymorph   [anchors: support/compat QoL (1)]
LEAVE — recipe-conflict resolver; 0 items/blocks, no recipe types, no material surface. Nothing to weave.

---

## mru   [anchors: support/library (1)]
LEAVE — pure shared-code library; 0 items/blocks. Nothing to weave.

---

## particlerain   [anchors: support/client atmosphere (1)]
LEAVE — client-side weather/particle rendering; 0 items/blocks, no recipe types. Nothing to weave. Thematic adjacency to Serene Seasons is flavor only, not a method edge.

---

## immersivearmorhud   [anchors: support/client UI (1)]
LEAVE — client HUD overlay; 0 items/blocks, no recipe types. Nothing to weave.

---

## rhino   [anchors: support/library (1)]
LEAVE — KubeJS JavaScript engine; 0 items/blocks. Nothing to weave.

---

## create_pattern_schematics   [anchors: create (1)]
- from: create_pattern_schematics:empty_pattern_schematic | via: create:mechanical_crafting (M-05 native-method gating — the schematic itself built in a Create method) | to: create | motif: M-05 | power: mid | tone: ok | verdict: REJECT | reason: the schematic items are already vanilla-crafted Create tooling; gating them behind mechanical crafting would be arbitrary added cost on a QoL item without depth payoff. No foreign material to pull in. Tone fine but no genuine second pillar.
- from: create_pattern_schematics (build-automation tooling) | via: config/design tie — pattern schematics used to lay track for Aeronautics/train deployments | to: aeronautics | motif: no-motif | verdict: REJECT | reason: no-motif (thematic adjacency to train-building via Schematiccannon, but there is no method edge; this is design flavor, not a recipe link). Reserve for LEAVE.
LEAVE — single Create-internal QoL tool; no foreign materials, no recipe types, no viable second-pillar method edge without forcing.

---

## formations   [anchors: survival (1)]
- from: formations generated structures (altars, ruins, pedestals) | via: loot-seed — seed weave-relevant drops (magic reagents per M-02, or boss-key components per M-15) into the loot tables of formations-spawned chests | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: an altar in the woods holds a fragment of raw arcane material — the ruin is the first hint that magic exists; player loots it and follows the thread into Ars Nouveau / Iron's Spellbooks
- from: formations structures loot tables | via: loot-seed — seed coin fragments (M-08/M-14) | to: economy | motif: M-14 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Coin in every ruin chest is low-signal; the magic-reagent seed (above) is the higher-value tie for a scattered-ruin mod.

REWORK: formations currently has 1 anchor (survival/exploration). The accepted loot-seed gives it a magic second anchor. OK with that one addition.

---

## terralith   [anchors: survival (1)]
- from: terralith biomes (loot=yes, 65 c:tags) — distinct biomes enable seasonal/lunar gating | via: worldgen/config tie — M-16 seasonal reagent sources are more diverse when Serene Seasons keys off Terralith biomes (e.g., a Terralith-exclusive biome as the only spawn for a rare seasonal flower that feeds a magic ritual) | to: magic | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: only in the "Moonlight Grove" biome does the night-bloom herb grow, and only in autumn — the alchemist needs the biome chart before they can finish the ritual
- from: terralith c:tags (65 biome tags) | via: config/worldgen — regional ore scarcity foundation: Terralith biome tags are the hooks CreateOreExcavation / ore-gen datapacks use to scatter regional metals into distinct biome clusters | to: create | motif: no-motif | verdict: REJECT | reason: no-motif — this is the scarcity foundation layer (already the pack's design intent), not a distinct recipe-motif edge. Terralith already serves this indirectly; calling it a Create anchor would overstate the connection.

REWORK: terralith currently 1 anchor (survival). The accepted M-16 candidate gives it a survival→magic second anchor (seasonal reagent sourcing riding Terralith biomes). OK otherwise.

---

## pantographsandwires   [anchors: create, aeronautics (2)]
OK — connections sound. Already 2 anchors: deep Create machine chain (6 inbound recipe types including sequenced_assembly) and aeronautics (overhead lines for electric trains, pantographs for Aeronautics trains). Coal_coke/graphite tags are a shared-material node available to other mods but no forced third edge needed. REWORK note: if a future magic pass wants a graphite electrode as a component in an arcane machine (M-10 or M-17 electric bridge), the `item/ingots/graphite` tag is a clean hook — flag for that pass, no action here.

---

## createbigcannons   [anchors: create, aeronautics (2)]
- from: createbigcannons:nethersteel_ingot (c:ingots/nethersteel) | via: occultism:spirit_fire or ars_nouveau:imbuement — nether-origin alloy attuned into a magic-hardened shell component | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: nethersteel came from the Nether and responds to arcane infusion — the mage's blessing is what makes the shell penetrate enchanted armor
- from: createbigcannons boss/shell drop → bounty payout | via: bountiful bounty board | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Munitions-as-trade-good is the obvious read; the M-10 nether infusion is the structurally stronger link.
- from: createbigcannons:cast_iron_ingot (c:ingots/cast_iron) | via: createbigcannons:melting — melt foreign cast-iron items (from other mods that provide c:ingots/cast_iron) into cannon castings | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: M-12 is processing-chain pull; this is more of an M-03 ore-doubling sibling (melt, not process). The existing Create anchor already covers this; no new pillar added. The melting method is already internal to CBC.

REWORK: existing Create + aeronautics anchors are sound. The M-10 nethersteel infusion adds a magic third anchor (endgame, appropriate depth). Flag: boss-drop cannon components are natural M-15 gate items for the higher cannon tiers — propose as a separate M-15 entry in the boss-key pass.

---

## shulkerboxtooltip   [anchors: support/QoL client (1)]
LEAVE — client tooltip mod; 0 items/blocks, no recipe types. Nothing to weave.

---

## collective   [anchors: support/library (1)]
LEAVE — pure shared-code library; 0 items/blocks. Nothing to weave.

---

## solmaiddream   [anchors: survival (1)]
- from: solmaiddream food-variety mechanic → maid stat growth | via: config/design tie — every food mod in the pack (FarmersDelight, Vinery, ExtraDelight, Farm&Charm, etc.) is an automatic feeder for this mechanic; the maid becomes a living food-diversity pressure gauge | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: this is already the mod's primary survival anchor — it's not a second-pillar routing, just naming the existing connection. No new system added.
- from: solmaiddream maid stat milestones (max-health, armor, attack) → maid as a capable production/combat assistant | via: design tie — a high-favorability maid (fed diverse meals) could be assigned to guard a MineColonies outpost or a Create factory; indirect create/economy weave | to: create | motif: no-motif | verdict: REJECT | reason: no-motif — thematic adjacency (maid as production worker) but no recipe or method edge; Touhou Little Maid's altar recipe is the actual hook, not this addon.
LEAVE — tiny companion-food addon with no items of its own and no method surface beyond the TLM altar (which belongs to touhou_little_maid, not this addon).

---

## bundle_recipe   [anchors: support/vanilla-parity (1)]
LEAVE — datapack that adds a crafting recipe for vanilla bundles; no new items/blocks, no recipe types. Nothing to weave.

---

## mcwfences   [anchors: support/decoration palette (1)]
- from: mcwfences metal fence variants (acorn, bastion, cathedral, etc.) | via: create:crushing (M-04) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: iron-bar fencing gets reclaimed as iron nuggets and gravel in the crusher — scrap metal from demolished infrastructure flows back into the Create supply chain
- from: mcwfences wooden fence variants | via: create:crushing (M-04) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crush is abundant across every Macaw/MCW mod; do not duplicate per-mod — defer to a deco-family wholesale pass that handles all Macaw wood variants in one script. Metal is the distinctive weave here.

REWORK: mcwfences is currently support/deco only. The accepted M-04 metal-fence-crush gives it a thin Create second anchor, consistent with the M-04 deco-family pattern.

---

## sablecollisiondamage   [anchors: support/aeronautics physics (1)]
LEAVE — pure physics behavior addon for Sable; 0 items/blocks, no recipe types. Nothing to weave; its value is entirely in the aeronautics pillar as a ramming/PvPvE realism layer.

---

== CHUNK COMPLETE ==
