# Phase 2 candidates — chunk-18

## trashcans   [anchors: support (1)]

Power-read: Four blocks — item/fluid/energy/ultimate void sinks. No recipes of their own. Content surface is entirely behavioral (accepts and deletes resources). The dossier itself notes this is anti-economy/anti-scarcity by design. "Voiding" is the antithesis of the loop's closing arrows (M-26 consumption renews demand; M-32 byproduct-as-feedstock; M-35 maturation). There is nothing to route through a method.

Candidates examined:
- Could a "trash can" be used as a ritual/magic sink for corrupted or cursed items? Red-team: no — the mod is a void block, not an item-transformation block. The magic mods' ritual sinks already handle that (occultism spirit_fire, ars_nouveau imbuement). Injecting trashcans into that role would conflict with existing method ownership and is thematically clumsy (a garbage can is not a ritual). REJECT.
- Could the trash can blocks be "destructible" items produced via Create processing? Red-team: the blocks are cheap utility (iron/wood), not mid/endgame outputs. Gating them behind Create depth would be an anti-social basic-gate (BRIEFING guardrail). REJECT.
- Scarcity note: the dossier correctly flags that a free void sink can trivialize byproduct value in a scarcity pack. Worth a design note, but not a weave — it's a balance/config consideration, not a method-routing.

- LEAVE — genuine zero-content utility (void sink); anti-scarcity by nature; no coherent weave without forcing it. The balance concern (byproduct value) is noted for human review but is a config/design matter, not a Phase-3 recipe action.

## accessories_compat_layer   [anchors: support (1)]

Power-read: Zero blocks, zero items, loot=no. A pure mixin compat shim that translates Curios/Trinkets API calls into Accessories slots. No player-facing surface whatsoever.

Candidates examined:
- Could "accessory slots" be gated behind Create or magic progression? Red-team: the slots are from Accessories (a separate mod); this mod only bridges the API. Gating belongs in the Accessories mod's config, not here. Nothing to weave. REJECT.
- Could wearable items that flow through this bridge (from Curios/Trinkets mods) be given weave-relevant crafting paths? Red-team: yes, but that is a weave for the *host mods* (the ones providing the wearables), not for this compat shim. REJECT as mis-attribution.

- LEAVE — genuine zero-content infrastructure (API compat shim); the wearable weaves belong to the host mods.

## sable_sa_compat   [anchors: support — serves aeronautics (1)]

Power-read: Zero blocks, zero items, loot=no. A behavior-only compat patch making Create: Stuff 'N Additions (jetpacks, exoskeletons, movement gadgets) work correctly on Sable/Aeronautics physics ships. Same family as `aeronauticscompat`.

Candidates examined:
- Could the compat itself be gated or "unlocked" via a progression step? Red-team: it's a mixin patch, not a craftable — it operates at load time. There's no in-game object to gate. REJECT.
- Could this mod enable a new weave by making jetpacks/exoskeletons ship-compatible — e.g. a jetpack used as a ship control surface? Red-team: the weave belongs to `create_sa` (the jetpack mod itself), not to this compat shim. Mis-attribution. REJECT.

- LEAVE — genuine zero-content compat patch (behavior bridge between two installed mods); no content surface of its own.

## kotlinforforge-5.11.0-all   [anchors: support — library/API (1)]

Power-read: Zero blocks, zero items, loot=no. A Kotlin language adapter (KotlinLanguageProvider) for NeoForge. Entirely developer-facing infrastructure. No player surface.

- LEAVE — genuine zero-content code library (language runtime adapter); nothing to weave by definition.

## createshufflefilter   [anchors: Create (1)]

Power-read: Two items — `shuffle_filter` and `weighted_shuffle_filter`. Filter items slotted into Create Deployers/rollers to randomize which block/item is placed. No loot table, no loot=yes. Their own recipes are vanilla crafting table. Everyday tier — a small utility accessory for Create automation builders.

Candidates examined:

A. Via method-pull: what methods WANT a randomized-placement filter?
   - `create:deploying` is the primary consumer — shuffle_filter slots into Deployers. The filter itself is just a controller item; it doesn't get "produced" by any method. The gap is whether the filter *item* can be woven as a craftable output of another system.
   - Could `createshufflefilter:shuffle_filter` be a *sellable crafted specialty tool* for colony/economy routing? Red-team: it's a cheap, two-ingredient crafting-table item (likely iron + a filter base). Treating a basic QoL filter as an economy good forces it. M-09 is retired; bare sell links are rejected. REJECT.
   - Could the weighted variant be an ars_nouveau imbuement (imbue a shuffle_filter with weight logic via a source-gem step)? Red-team: thematically clashing — a probabilistic filter is a mechanical concept, not a magical one. The imbuement step would be arbitrary. REJECT — tone clash.
   - Could Create-side methods produce the *weighted* variant (e.g., `create:pressing` or `create:sequenced_assembly` for precision weighting)? Power-read: the weighted filter is everyday-to-mid tier at best (just a more precise version of the same filter). The BRIEFING guardrail says don't gate basics behind complex recipes. The items are trivially craftable QoL items, not endgame outputs. A multi-step Create production chain for what is essentially "a better filter" would over-engineer a minor accessory. REJECT — depth doesn't scale with power here; the item isn't worth a complex chain.

B. Thematic adjacency: does randomized placement connect to any system naturally?
   - Randomized Deployer placement could enable automated building of varied structures (roads, walls, deco), which connects to the aeronautics/logistics arm (building landing pads, decking ships). But this is a *player behavior* (how they use the tool), not a cross-system weave.
   - The weighted variant could let a player automate crop/seed variety placement seasonally — touching survival's seasonal layer. But again, this is player-use behavior, not a method-routing weave.

No coherent motif fits. The items are too simple (everyday, cheap crafting-table items) and too narrow in function to anchor to a second system via method-pull without forcing an arbitrary edge. The single Create anchor (it's a Create filter accessory) is sufficient and honest.

- from: createshufflefilter:weighted_shuffle_filter | via: create:sequenced_assembly | to: create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: everyday/cheap QoL item; gating a basic filter behind sequenced-assembly violates the depth-scales-with-power guardrail; the item isn't a flagship output.
- from: createshufflefilter:shuffle_filter | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: tone clash — a probabilistic mechanical filter gaining "magic weighting" is incoherent; the items are industrial, not arcane.
- LEAVE (2nd anchor) — no coherent weave survives red-team; Create anchor stands alone for a pure-Create QoL utility item.

## createaddoncompatibility   [anchors: support — library/compat (1)]

Power-read: Zero blocks, zero items, loot=no. A compat layer that drives Almost Unified to merge cross-addon duplicate items (plastic, copycats, gearboxes, lubricant, kerosene). Has 5 c:tags (item/ingots/plastic being the notable one) and one inbound `tfmg:distillation` recipe to seed TFMG plastic into the unified chain. It's glue, not content.

Candidates examined:
- The `c:ingots/plastic` tag this mod provides IS the unified plastic ingot canonical item. Could plastic be woven into another system? Red-team: plastic is already a Create-ecosystem material (produced via TFMG distillation, used in Create addons). Any weave of plastic belongs to TFMG or the producing addon, not to this unification-only mod. Mis-attribution if woven here. REJECT.
- Could the unification itself be gated (e.g. "unlock the plastic unification recipe via MineColonies research")? Red-team: that's architecturally wrong — unification is a technical deduplication, not a gameplay unlock. It fires at load time. REJECT.
- Design note (not a weave): the CLAUDE.md galosphere palladium warning is directly relevant here — the `c:ingots/plastic` unification should be verified it doesn't accidentally catch galosphere's palladium (id mismatch). This is a config-correctness matter for human review, not a Phase-3 action.

- LEAVE — support/compat role; the actual material weaves belong to the mods being unified (TFMG for plastic, etc.); no standalone content surface.






