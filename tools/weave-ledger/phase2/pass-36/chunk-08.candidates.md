# Phase 2 candidates — chunk-08

## mcwstairs   [anchors: support/decoration (1)]

Macaw's Stairs — 224 stair/railing/balcony/platform variants per wood and stone material. Pure decoration palette, vanilla-table crafted, no recipe-type of its own.

**Method-pull:** The only viable route-through is `create:crushing` on stone/brick variants (M-04, lossy recycle). The dossier already flags this as WEAK. Let me red-team it:
- Crushing a decorative stair back to gravel/raw + XP nugget is defensible (it's how M-04 works for any deco block) but it's one of the lightest possible connections — the player experience is "I can reclaim material from a mis-built stair," not a meaningful loop contribution.
- The wood variants don't add anything crushing can't already do via vanilla planks.
- As a decoration palette mod, it is a sanctioned support anchor. The dossier itself notes "only weave as part of a wholesale deco-family pass."
- Tone: industrial crushing of fancy railings is coherent enough (M-04 is exactly this — deco recycling).
- But the signal is thin: this is one optional lossy recycle on stone variants, not a loop advancement.

**Verdict:** ACCEPT M-04 on stone/brick stair variants only (it's genuinely the right motif; M-04 explicitly targets deco recycling); REJECT the wood-variant crushing as redundant (vanilla planks handle it and the wood path adds no new system linkage); note this is a low-priority pass-level candidate, worth only at the tail of a broader deco-family batch.

- from: mcwstairs:*_stone/brick/blackstone variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: mis-placed fancy stone railings crush back to their raw material plus a XP nugget — the same lossy-recycle contract Create applies to all stone deco
- from: mcwstairs:*_wood variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: redundant — vanilla planks already satisfy the recycle path; wood stair crushing adds no new system node and the everyday/low-power rule says one light step, not duplicating vanilla
- REWORK: existing anchor is "support/decoration (1)" which is correct and sanctioned; no existing weave connections to REWORK.

## trashcans   [anchors: support/automation QoL (1)]

Four void-blocks that delete items/fluids/FE at unlimited rate. Pure QoL sink; the dossier correctly notes it's anti-economy by nature (voiding destroys value rather than cycling it).

**Method-pull:** No recipe type of its own, no outputs to pull through another mod's method. The blocks themselves aren't materials — they're the final deletion point of an automation line.

**Scarcity-pack concern:** The dossier flags this accurately — in a scarcity-driven pack, an unlimited void sink trivialises byproduct value (M-32 byproduct→input would want byproducts routed to another process, not deleted). However, trashcans is QoL for overflow management in large Create lines, and preventing all deletion would frustrate players. This is a balance/config concern, not a weave opportunity.

**Red-team:** Could we weave the trash-can block itself — make its recipe require Create-processed parts? That would be M-05 (native-method gating), but the block is an automation utility, not a power-scaled item. The everyday/low-power rule says "one light step, not a complex chain." A Create-made trash can isn't unreasonable, but the block's core function is deletion — making it harder to craft doesn't create a loop link. No motif fits.

**Verdict:** LEAVE — genuine zero-game-loop-value support block; voiding is anti-scarcity by nature and no motif applies; balance concern is a config/curation note, not a weave opportunity.

- LEAVE — automation QoL void sink; no items/outputs to route through any method; adding a crafting requirement to the block itself finds no motif and creates no loop advancement; the balance concern (voiding byproducts in a scarcity pack) is a curation/config note, not a weave

## ponderjs   [anchors: support/Create tooling (1)]

KubeJS addon for authoring custom Create Ponder scenes. Zero player-facing items, zero blocks, no recipe types. It is documentation/dev infrastructure — it documents the Create spine rather than contributing a material or method.

**Method-pull:** No content surface whatsoever (0 blocks, 0 items, loot=no). There is nothing to route through any method and nothing for another method to pull. This is the definition of a zero-surface code library.

**Verdict:** LEAVE — pure code/authoring library with zero player-facing content surface; a genuine zero-anchor library where LEAVE is correct.

- LEAVE — pure KubeJS scripting API for Create Ponder scene authoring; 0 blocks, 0 items, no loot, no recipe types; no player content surface exists to weave

## playeranimator   [anchors: support/library (1)]

Player Animation Library — client animation API. Zero blocks, zero items, no recipe types, no gameplay mechanics. Pure code library.

**Verdict:** LEAVE — genuine zero-content code library (0 blocks, 0 items, loot=no); nothing to anchor or weave.

- LEAVE — pure animation API library (0 blocks, 0 items, no recipe types); zero content surface; shipped as a silent dependency of animation-driven mods

## createblockchain   [anchors: economy + Create (2)]

Currency Miner block fed FE mints Numismatics coins; Mining Cores from geodes gate the rate; piggy banks seed loot coins in chests. Already has 2 anchors (economy + Create via mechanical_crafting/mixing).

**Existing connections review:** The economy anchor (it *is* a coin faucet — M-08 adjacent) and the Create anchor (built via `create:mechanical_crafting` + `create:mixing`) are sound. The Mining Core geode worldgen scarcity is a genuine gate. The FE input creates a meaningful dependency on Create's electrical sub-system (via createaddition). Let me check if the existing connections are weak or arbitrary — they aren't: the coin faucet directly implements the player-minted-currency concept and the Create dependency is mechanical.

**REWORK check:** The dossier flags this as "the money FAUCET for Numismatics." M-08 requires coins to trace back to regional scarcity. Currently the FE source is unconstrained — any FE supply feeds the miner. The dossier's own 2nd-anchor deepening note is: "feed the miner FE that itself comes from scarce processed metal, so coins trace back to regional scarcity rather than free FE." This is correct as a REWORK flag — the existing economy anchor is real but weakened because the FE supply has no scarcity gating; without that, the coin faucet rate is only Mining Core-gated, not ore-scarcity-gated at the energy level.

**Method-pull for new links:** Can we add a third anchor? The mod already sits at economy + Create. Looking for survival or magic links:
- The cryotheum_coolant_bucket is thematically a cold/ice substance — could route through `create_dragons_plus:freezing` or `northstar:freezing` as a coolant source. But cryotheum is a minor support item for the miner, not a flagship material, so a freezing-method link would be thin/forced.
- Mining Cores from geodes: geodes are worldgen, so there's a scarcity/regional gate here (M-30 regional scarcity gate concept). But Mining Cores are already the gate for the miner itself; a separate M-30 weave would be redundant.
- Piggy banks seeding loot coins in chests: this is a loot-seed mechanism that puts coins into structures — a form of M-08 distribution but already covered by the economy anchor.

**Red-team on deepening:** The FE→scarcity-trace suggestion (making FE itself come from scarce metal) is a deepening of M-08, not a new anchor. It's valid but it belongs to the authoring layer.

**Verdict:** OK on existing economy + Create anchors (both real); REWORK on the FE supply — flag that without ore-scarcity-traced FE the M-08 coin chain is incomplete (Mining Core gate alone is insufficient to root coins in regional scarcity; the FE supply should trace back to a scarce processed metal); no strong new 3rd anchor found.

- REWORK: FE supply to the Currency Miner is currently unconstrained — any FE source mints coins; this weakens M-08 because coins don't trace back to regional ore scarcity (only Mining Cores gate it, not the energy input); a Phase-3 config or recipe tightening should prefer a scarce-metal-sourced FE route (e.g. via createaddition generator fueled by a region-locked ore product) to close the M-08 loop properly
- OK — economy + Create anchors are both mechanically real and sound; no forced or lore-clashing connections
- from: createblockchain:mining_core (geode drop) | via: loot-seed (geode worldgen placement) | to: scarcity | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: the Mining Core only comes from geodes ~every 30 chunks — its regional rarity naturally zones where heavy coin minting is possible, tying the money supply to the geographic map
- from: createblockchain:currency_miner (FE→coin chain) | via: createaddition:charging / FE from scarce ore product | to: scarcity→economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: coins are only as common as the energy to mint them — if that FE traces back to a region-locked processed metal, the money supply has geographic roots
- from: createblockchain:piggy_bank | via: loot-seed (overworld chests) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: REJECT | reason: piggy banks seeding random coins into world chests is an NPC-adjacent faucet (coins appear "from nowhere" rather than from player minting effort); this weakens M-08's player-minted-currency framing; the ambient chest loot is flavour, not a weave node

## createshufflefilter   [anchors: Create (1)]

Two filter items (shuffle + weighted shuffle) that randomise which item a Create Deployer places from its inventory. Purely a Create filter utility — no materials of its own, no recipe type registered.

**Method-pull:** The items themselves (`shuffle_filter`, `weighted_shuffle_filter`) are filter tools, not materials. They don't output anything; they control which items a Deployer picks. There is no coherent second system this connects to:
- They can't route through a magic method (a filter isn't a reagent).
- They can't route through survival (no food/combat role).
- They can't route through economy (they don't produce or distribute value; they distribute *placement effort* within a Create contraption, which is all already Create-side).
- Could make the filter itself require a magic reagent as an ingredient (M-10/M-29 cross-route)? The item is a low-mid everyday utility for builders; gating it behind magic would be disproportionate — the everyday/low-power rule says one light step, and a magic-gated filter has no thematic reason.

**Red-team:** The dossier itself says "leave (a one-item builder QoL utility; no coherent 2nd pillar without forcing it)." I agree — there is no natural motif.

**Verdict:** LEAVE — tiny two-item Create filter utility with no materials, no outputs, no method, and no coherent 2nd anchor; the everyday/low-power rule and the "don't force edges onto utility tools" guardrail both point here.

- LEAVE — two-item Create Deployer filter utility; no recipe type, no materials/outputs to route; no coherent 2nd anchor exists without forcing an arbitrary cross-mod edge

## necronomicon   [anchors: support/library (1)]

Pure code library (Necronomicon API by ElocinDev). 0 blocks, 0 items, loot=no, no recipe types. Genuine zero-content library.

**Verdict:** LEAVE — genuine zero-content code library; nothing to weave.

- LEAVE — pure API/config library; 0 blocks, 0 items, no recipe types; zero player content surface

## moogs_structures   [anchors: support/library (1)]

Data-driven worldgen library for Moog's structure mods. 0 blocks, 0 items, loot=no, no recipe types. No standalone gameplay content.

**Verdict:** LEAVE — genuine zero-content worldgen library; nothing to weave.

- LEAVE — worldgen library/API; 0 blocks, 0 items, no recipe types; any loot/weave belongs on the dependent structure mods, not the library

## born_in_chaos_v1   [anchors: survival (1)]

Halloween-themed hostile-mob mod: 50 biome-modifiers spawning aggressive undead mobs, a seasonal Pumpkinhead miniboss (Oct 25–Nov 5 or summon-gated), plus dark_metal_deposit ore/ingots, argillite build palette, bundle_of_bones, soul_saber, nightmare_scythe, bag_of_candy. 111 blocks, 355 items, loot=yes.

**This is a rich content mod — let me power-read each candidate carefully.**

**Candidate 1 — Create ore-doubling on dark_metal_deposit (M-03):**
- dark_metal_deposit is an ore block dropped ~9% from Fallen Chaos Knights and ~16% from Missionaries (not worldgen-placed ore, but a drop). The naming suggests a "deposit" that could function like a ore lump.
- Power: mid (comes from specific mob combat, not trivially mined). One crushing step is proportionate.
- Tone: a gothic dark-metal ore being crushed in Create machinery feels industrially coherent — the Create spine refines the spoils of combat. A player would understand "I can double my dark metal haul by running drops through the Crusher."
- Red-team: dark_metal_deposit is a mob drop not a worldgen ore — calling it M-03 is a slight stretch (M-03 is "ore → crushed + byproduct"). But the mechanism is identical (crush raw material to nugget/dust + byproduct); the origin (mob vs ground) doesn't change the method's fit. ACCEPT.
- Motif: M-03 (Create ore-doubling) — strict sense is for worldgen ore, but the dossier explicitly suggests it and the method is identical.

**Candidate 2 — Magic via occultism:spirit_fire / ars_nouveau:imbuement on bundle_of_bones / soul-flavored drops (M-11/M-10):**
- bundle_of_bones is a bone-pile drop from undead enemies. The mod's "bundle_of_the_soul" debuff and soul_saber name give a clear soul/necromancy thematic signal.
- Occultism spirit_fire transmutes drops into essences — a soul-pile transmuted into an occult intermediate is exactly the kind of necromantic organic-to-magic link M-11 targets.
- Power: everyday/mid (bundle_of_bones is a common mob drop; soul_saber is a rarer weapon).
- Tone: undead, soul-theme, gothic horror → Occultism necromancy. This is strong thematic coherence. A player would say "of course the soul-bundle goes into the occult ritual."
- Red-team: Is bundle_of_bones *just* bones? If it's functionally identical to vanilla bone meal then the weave is redundant. But the dossier gives it its own ID and lists it as a drop separate from vanilla bones — it's a distinct item with distinct flavor. Spirit fire on this specific drop (not vanilla bones) is a coherent edge.
- Motif: M-11 (ritual/spirit transmutation sink) — a mob drop transmuted into a magic intermediate via occultism:spirit_fire. ACCEPT.

**Candidate 3 — Create:crushing on dark_metal_block for deco recycle (M-04):**
- dark_metal_block is a decorative block made from dark metal ingots. Crushing it back (lossy, M-04) is the standard deco-recycle pattern.
- Power: everyday. Tone: ok — industrial recycle of a gothic block.
- This is weaker than M-03 on the ore itself; it's a consequence of having block forms, not a meaningful loop link.
- Verdict: REJECT — M-03 on the raw drop is the stronger connection; M-04 on the block form is derivative and low-value.

**Candidate 4 — Boss-key gate using Pumpkinhead boss drop (M-15):**
- Pumpkinhead is a seasonal miniboss with multi-phase fight and unique drops (Pumpkin Staff, Soul Saber). These are mid-endgame items.
- M-15: a boss drop is the gate item for a complex Create/tech recipe. The Pumpkin Staff / Soul Saber as a key ingredient for something on the Create spine (e.g., haunting a component, or gating an enchanted aeronautics part) is thematically fitting — a rare seasonal boss enabling a specific production capability.
- Power: endgame (requires defeating a summoned seasonal boss). A multi-step chain is proportionate.
- Tone: gothic horror boss enabling dark industrial capability — coherent, not clashing.
- Red-team: The boss is seasonal (Oct 25–Nov 5 or summon-gated). A boss-key that's season-locked is also M-16-adjacent (seasonal reagent). That's a dual-motif — M-15 + M-16 isn't contradictory, but note that the seasonal constraint makes this harder than a standard boss-key.
- Verdict: ACCEPT M-15. The seasonal dimension is a bonus (it's a harder gate), not a problem.

**Candidate 5 — M-34 combat-route supply (economy linkage):**
- The mod's hostile mobs produce dark_metal, soul drops, and boss items. A combat specialist farms these and trades them to non-combat players — the classic M-34 combat-route supply pattern.
- This is the economy anchor the dossier is missing. The combat-specialist who farms Chaos mobs and bosses trades their drops (dark metal, bundle_of_bones) to the Create player who needs them for M-03 crushing or to the magic player who needs them for M-11 rituals. The demand is real (both the Create and magic candidates above consume these drops).
- Tone: undead farming is a legitimate PvPvE combat specialization. Fine.
- Verdict: ACCEPT M-34 — the combat-route supply economy link is exactly what the loop needs (danger → production input → trade). This gives the mod its 2nd anchor via economy.

- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: haul dark-metal deposits from fallen Chaos Knights through the Create crusher — double the ingot yield just like any ore, making the Create spine the refinery for gothic combat spoils
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: the soul-tainted bone bundles of the undead transmute cleanly in the occult flame — gothic combat supplies the necromancer's reagent shelf
- from: born_in_chaos_v1:pumpkinhead boss drops (Pumpkin Staff / Soul Saber) | via: create:sequenced_assembly or magic infusion as gate input | to: create/magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the seasonal Pumpkinhead — only summonable or available Oct-Nov — holds the key component for a specific high-tier recipe; fighting the boss is the only path to that capability
- from: born_in_chaos_v1 mob drops (dark_metal, bundle_of_bones, boss items) | via: emergent trade | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: a combat specialist farms Chaos mobs for dark metal and soul drops; the Create player buys them for M-03 crushing, the magic player buys them for M-11 rituals — danger produces tradeable supply
- from: born_in_chaos_v1:dark_metal_block | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: derivative of M-03 on the ore drop — the lossy deco-recycle is valid in isolation but adds no new loop link; M-03 is the load-bearing connection and M-04 here is redundant noise

