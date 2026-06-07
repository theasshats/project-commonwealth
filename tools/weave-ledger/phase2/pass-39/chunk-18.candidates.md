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




