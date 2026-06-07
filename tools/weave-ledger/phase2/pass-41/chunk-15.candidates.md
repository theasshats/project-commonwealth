# Phase 2 candidates — chunk-15 (context-fed)

## aileron   [anchors: aeronautics (1)]

Existing rows cover: M-10 enchanting-apparatus (conditional, split consensus), M-34 loot-seed to survival/economy (accepted), M-02 loot-seed to magic (accepted). The M-10 enchanting-apparatus path is the only live 2nd-anchor candidate; loot-seed rows are well-staked.

Gap spotted: no row evaluates aileron's loot=yes tables as a *combat-supply → economy* chain specifically shaped around the aeronautics context — i.e. advanced Elytra enchant books as endgame rewards that a combat specialist hunts and trades to aeronautics pilots who want personal-flight upgrades alongside their ships. The M-34 survival rows come close but don't articulate the economy demand side. Also: no row has examined whether aileron's stamina/recharge behaviour already implies a consumable (M-26) — it doesn't register items, so this is a genuine zero.

- NEW | from: aileron Elytra enchant books (loot=yes, end-tier) | via: loot-seed | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: a combat specialist who clears End Cities holds premium Boost/Glide books that aeronautics pilots need but can't safely farm — the loot-seed makes the enchant a traded good, not just a lucky find
- NEW | from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus (applying aileron's enchant IDs if they are standard MC enchantment registry entries, which they are as of 1.1.x) | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the arcanist's apparatus is the only station that can inscribe a Stability or Boost glyph onto membrane — enchanting aileron's Elytra through the Apparatus makes magic the gatekeeper of premium flight; CONDITION: verify aileron enchants appear in the standard enchantment registry and are applicable via apparatus; if not, REJECT this row at authoring

Note on existing M-10 split: the 15-ACCEPT / 13-REJECT split in the blind passes reflects the "conditional" problem. The context-fed refinement above restates it as conditional-ACCEPT with an explicit authoring gate (verify registry exposure) rather than a bare ACCEPT, which is the nuance the existing rows lack.

---

## architectury   [anchors: support (1)]

LEAVE — pure cross-platform modding API; 0 items, 0 blocks, 0 recipe types, no game surface. No weave possible.

---

## recipe_integration   [anchors: support (1)]

Existing rows: M-12 audit (accepted), M-03 pressing (accepted), M-10 scry_ritual (accepted), M-11 occultism:crushing (accepted), M-17 createaddition:charging paths (accepted once). The "it IS the bridge layer, not a content node" read is correct and consistently upheld.

Gap: one row challenges whether the inert c:tags (aether/mekanism/MI/GT references) could conflict with KubeJS tag-overrides — this is flagged as a concern but not formally CHALLENGED as a mis-framed accept. The M-17 charging row (1 accept) is the only candidate not yet stress-tested.

- CHALLENGE | from: recipe_integration createaddition:charging paths | via: createaddition:charging | to: create | motif: M-17 | verdict: REJECT | hook: recipe_integration's charging entries target mods NOT installed in this pack (energizedpower, oritech, etc. — see the made-by list); unless a pack-installed mod's ingot carries the c:tag recipe_integration fires its charging recipe against, this row is inert. The audit action is correct but the ACCEPT overstates it — it fires only IF the c:tags overlap with installed mods' materials, and the dossier says most c:tags reference uninstalled mods. Downgrade to: audit whether any charging entry fires for an installed mod's material; until confirmed, treat as dormant.

---

## emojitype   [anchors: support (1)]

LEAVE — client-side chat input helper; 0 items, 0 blocks, no game surface whatsoever.

---

## quark   [anchors: support/decoration (1)]

Existing rows cover: M-04 deco-crushing (strong consensus), M-12 crate processing (accepted), M-10 ancient bookshelf/ancient wood imbuement (accepted), M-19 ancient wood haunting (accepted), M-28 colony storage crates (accepted), M-31 aeronautics cargo crates (accepted once). Very broad coverage.

Gap: `quark:elytra_duplication` is Quark's own registered recipe type — the one row proposing magic-gating on it (M-29: require a source crystal to duplicate the Elytra) has only 1 accept and no rejection reasoning. This is a genuinely strong weave: the Elytra is hard to obtain in quantity, Quark provides a duplication path, and requiring an Ars Nouveau source gem as the binding agent creates a real cross-route dependency. Also: no row assesses the `quark:slab_to_block` type (trivial, internal — correctly ignored). The ancient_bookshelf as an Enchanting Apparatus power source (M-10) is a strong row but under-differentiated from the plain wood imbuement row — worth a nuance.

- NEW | from: quark:elytra_duplication (Quark's own registered recipe type) | via: quark:elytra_duplication (modified to require ars_nouveau:source_gem as a consumed catalyst) | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: duplicating an Elytra consumes a source gem — the magic specialist holds the only key to mass-produced wings; a Create-tech pilot and a magic-user must cooperate for an aerial fleet
- NEW | from: quark:ancient_bookshelf (Glimmering Weald variant, loot=yes) | via: ars_nouveau:enchanting_apparatus (ancient bookshelves boost apparatus power above standard bookshelf threshold — a tiered power source) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the ancient bookshelf grants the Apparatus a deeper mana pool than vanilla bookshelves — a spelunker who descends to the Glimmering Weald upgrades the arcanist's reach, tying exploration pressure into magic progression

---

## mcwfences   [anchors: support/decoration (1)]

Existing rows: M-04 metal fence crush (strong consensus, accepted), M-28 MineColonies colony construction (1 accept), M-12 Create saw for wooden fences (1 accept). Metal-crush is the only well-supported weave; the others are thin.

The M-28 colony construction angle is the most viable 2nd anchor and only has 1 accept. No row challenges whether the metal-fence M-04 crush is actually worth authoring vs. being noise (the existing CHALLENGEs say "wholesale deco-family pass only"). Also: loot=yes on mcwfences — the existing row correctly notes it's furniture loot (not combat-relevant), so loot-seed is correctly rejected.

- NEW | from: mcwfences:acorn_metal_fence / bastion_metal_fence / cathedral_metal_fence (the three distinct metal fence designs) | via: minecolonies hut construction requests (MineColonies builder huts and guard towers include perimeter fencing in their schematics — a colony-request pull on the decoration layer) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony builder requests metal fence lengths for the guard post perimeter — the fence-maker's specialization feeds settlement construction, not just personal builds
- CHALLENGE | from: mcwfences metal fence variants | via: create:crushing | to: create | motif: M-04 | verdict: REJECT | hook: the existing M-04 metal-fence crush accept carries a dossier caveat "only as part of a wholesale Macaw deco-family pass"; authoring it standalone for mcwfences alone (180 fence items) is high noise-to-signal — the crushing payoff is nuggets + XP, available via countless other sources. This should remain gated on a "wholesale Macaw crushing pass" decision, not authored modularly. The accept consensus overstates how actionable this is in isolation.

---

## l2library   [anchors: support (1)]

LEAVE — shared library for LightLand's mods (player-attribute/Curios tab APIs); 0 items, 0 blocks, no recipe types, no game surface.

---

## moonlight   [anchors: support (1)]

LEAVE — shared library for MehVahdJukaar's mods (Supplementaries, Map Atlases etc.); 1 internal helper block (moonlight:spawn_box) with no weave surface, no recipe types.

---

## biolith   [anchors: support (1)]

LEAVE — worldgen API library (biome placement framework); 0 items, 0 blocks, no in-world item surface.

---

## cookingforblockheads   [anchors: survival (1)]

Existing rows: M-05 appliance gating on Create parts (32 accepts — very strong), M-28 colony Cook hut (6 accepts), M-23 airship galley fridge (1 accept). Extremely well-covered on Create tie and colony route. The fridge-in-airship galley (M-23) only has 1 accept and no rejection — worth stress-testing.

- CHALLENGE | from: cookingforblockheads:fridge | via: aeronautics build recipe | to: aeronautics | motif: M-23 | verdict: REJECT | hook: M-23 is for load-bearing structural metals/parts in airframe construction (plates, beams, alloys). A fridge is kitchen appliance furniture — mounting one on a ship is plausible flavor but it's a decoration choice, not a structural aeronautics build requirement. Forcing it as a required aeronautics recipe component would be arbitrary (why would the airframe need a fridge, not an oven or counter?). The weave would be more coherent as a "ship provisioning kit" advisory (flavor/guide), not a recipe gate. REJECT as an authoring target.
- NEW | from: cookingforblockheads:cooking_table (the kitchen hub, aggregates all food recipes from connected storage) | via: minecolonies:zero_waste or minecolonies colony Cook-hut recipe requirement | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the MineColonies Cook hut requires a Cooking Table as its hub — players who want a colony restaurant must build the kitchen first, making the survival food-hub a colony-construction prerequisite and tying the two systems without touching food logic

(Note: this is a nuance refinement of existing M-28 rows — the accepted rows reference the colony cook generally; this pins the Cooking Table specifically as the hut-recipe ingredient, which is the authoring detail that matters.)

---

## blueprint   [anchors: support (1)]

LEAVE — Team Abnormals library (registry helper, animation API, biome/trim APIs); 1 trivial item (blueprint:template_chest) with no weave surface, 13 internal c:tags.

---

## sparsestructures   [anchors: support (1)]

LEAVE — config-only mod that multiplies structure spacing/separation; 0 items, 0 blocks, 0 recipe types. Pure worldgen density tuning, no content surface.

---

## ctl   [anchors: Create, aeronautics (2)]

Existing rows: already at goal (2 anchors). All attempts at a 3rd anchor correctly rejected. The M-28 colony (Station hut) row has 1 accept and no rejection — worth a light challenge since the mod is already well-connected.

OK — existing rows sufficient. The mod is at its 2-anchor goal (Create via sequenced_assembly, aeronautics as the functional target). The M-17 charging challenge and M-28 colony accept are thin but the overall picture is sound.

---

## kotlinforforge-5.11.0-all   [anchors: support (1)]

LEAVE — Kotlin language adapter for NeoForge; 0 items, 0 blocks, 0 recipe types, no game surface.

---

## notenoughcrashes   [anchors: support (1)]

LEAVE — crash-recovery UI mod; 0 items, 0 blocks, pure stability utility.

---

## alternate_current   [anchors: support (1)]

LEAVE — redstone-dust performance rewrite; 0 items, 0 blocks, transparently patches vanilla behavior.

---

## letsdocompat   [anchors: survival (1)]

Existing rows: all attempts to add a 2nd anchor correctly rejected (the mod IS the glue layer for food; its 2nd anchor accrues to the food mods it connects). The one accepted row (leafy_green → Create milling for dried herbs) is the only candidate, but it's a circular attribution. CHALLENGE:

- CHALLENGE | from: letsdocompat items/foods/leafy_green tag | via: create:milling | to: create | motif: M-12 | verdict: REJECT | hook: letsdocompat does not produce leafy greens — it standardizes the c:tag across mods that already produce them. The milling edge belongs to whichever Let's Do food mod grows the actual leafy crop (e.g. the salad-green farm in farm_and_charm or bakery), not to the compat glue. Attributing a Create weave to the compat bridge is a category error; the anchor accrues downstream.

OK on all other rows for letsdocompat.

---

## brazil_legends   [anchors: survival (1)]

Existing rows cover: M-11 capelobo_claw spirit_fire (29 accepts — very strong), M-10 amber_shard imbuement (21 accepts — strong), M-22 bloodmoon_sickle lunar gate (several accepts), M-15 boss-key (2 accepts), M-34 combat-supply chain (several accepts), M-03 amber crushing → dust (3 accepts), M-08 amber → coin (1 accept). Extremely well-mapped.

Gap 1: `brazil_legends:cachimbo` (a tobacco pipe item in the item sample) has not been evaluated by any pass. It's a unique flavor item that could be a smoking mechanic or aesthetic — worth checking if it has a coherent method-pull.

Gap 2: The M-08 amber → coin path (amber_shard crush → dust → Numismatics mint) has only 1 accept and no formal rejection or challenge. The chain is: amber_shard (scarce regional mob drop) → create:crushing → amber_dust (processed material) → Numismatics mint → player-minted coin. This is a genuine M-08 candidate.

Gap 3: The M-22 bloodmoon sickle lunar gate is split — some rows accept spawn-condition gating, others accept crafting-gate under bloodmoon. The deeper nuance: the sickle should be the *output* of a bloodmoon event (drop-rate spike or exclusive loot), not a crafting recipe that happens to require bloodmoon timing, because the mod registers no crafting recipe types. A spawn/loot-condition config is the coherent delivery.

- NEW | from: brazil_legends:cachimbo (tobacco pipe — unique flavor item) | via: farm_and_charm:drying or extradelight:drying_rack (drying tobacco leaves into a smoking blend, if a tobacco crop is present in the pack — check Farm&Charm/Vinery crop lists) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the cachimbo is a cultural artifact that deserves its own supply chain — dried tobacco from the farm feeds a folk craft that completes the Brazil Legends flavor loop; CONDITION: only author if a tobacco/herb crop exists in an installed farm mod; otherwise REJECT as no-input
- NEW | from: brazil_legends:amber_shard (scarce regional mob drop — biome-locked cryptid loot) | via: create:crushing → amber_dust → numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: amber from a folkloric creature, refined in the crusher to powder, pressed into coin — a regional scarce material becomes a mint-able settlement medium; the combat specialist who farms capelobo holds the regional currency supply
- CHALLENGE | from: brazil_legends:bloodmoon_sickle | via: M-22 lunar/celestial reagent (crafting-gate variant: craft only during bloodmoon) | to: survival | motif: M-22 | verdict: REJECT | hook: brazil_legends registers no recipe types and the sickle is a mob drop / loot-table item; gating its *crafting* behind a bloodmoon event requires authoring a custom recipe with a temporal condition the pack has no existing method for. The coherent M-22 delivery is spawn/loot-condition config (drop rate spikes or exclusive loot table activates during Enhanced Celestials bloodmoon), not a crafting gate. The accepted "loot-condition" variant rows are correct; this crafting-gate variant is no-method and should be rejected.

== CHUNK COMPLETE ==
