# Phase 2 candidates — chunk-11

## naturalist   [anchors: survival (1)]
- from: naturalist:antler | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: deer antler as a bone-analog reagent channeled into Ars imbuement — horn of an animal attuned to nature, feeding druidic magic; players nod at "wild relic → arcane ingredient"
- from: naturalist:glow_goop | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: firefly glow-goop as a bioluminescent reagent for imbuement rituals — everyday drop but thematically rich (light-affinity magic); sized as one light step
- from: naturalist:venison / naturalist:bushmeat | via: farmersdelight:cutting → extradelight:oven/drying_rack | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wild game drops processed through the FarmersDelight/ExtraDelight culinary chain, feeding the pack's deep-cuisine production web; Create's milling/pressing upstream (grain for marinade) ties it further
- from: naturalist:shellstone | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: shellstone deco set crushes back to sand/gravel + XP nugget — lossy but sensible (sedimentary stone); gives the deco a recycle path through Create
- from: cooked venison/bushmeat as trade good | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; meat is trivially sellable and adds no structural loop

REWORK: none — existing survival anchor is sound.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure code library (projectile/physics API for Create Big Cannons); zero player-facing items, blocks, or methods. No coherent weave.

## dragonlib   [anchors: support/library (1)]
- LEAVE — pure code library (shared framework for MrJulsen mods); lone dragonlib:dragon block is a dev artifact with no gameplay surface. No coherent weave.

## recipe_integration   [anchors: support/bridge (1)]
- LEAVE — this mod IS the connective layer; it authors recipes rather than being a material node. It has no items/blocks and is itself a weaving tool. Its active recipe coverage for this modlist is worth auditing separately (many of its 82 c:tags reference uninstalled mods and are inert), but that is a maintenance task, not a weave candidate.

## illagerinvasion   [anchors: survival (1)]
- from: illagerinvasion:hallowed_gem | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Invoker boss drop (hallowed gem) is already thematically arcane — funneling it through ars imbuement as a powerful reagent makes the boss fight a magic-progression gate; "I finally beat the Invoker, now I can unlock the next Ars tier"
- from: illagerinvasion:illusionary_dust | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: illusionary dust (illusioner drop) transmuted through an Occultism ritual into a spirit essence — illusion magic feeding dark summoning; thematically tight
- from: illagerinvasion:platinum_chunk | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: platinum chunk is a drop-sourced ore-analog; crushing it yields a processed metal intermediate that feeds Create's fabrication chain — a boss-combat-gated metal not obtainable by ore alone
- from: hallowed_gem as bounty payout | via: bountiful board | to: economy | motif: M-14 | power: endgame | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; bounty/coin is saturated; the gem's real value is as a magic-gated reagent (M-02 above)
- from: illagerinvasion:hallowed_gem | via: create:sequenced_assembly (as boss-key gate input) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: hallowed gem as a boss-key unlock gates a high-tier Create recipe (e.g. an advanced machine component), making the Invoker fight a mandatory step in the tech tree — combat → production gate

REWORK: none — existing survival anchor is sound. The magic foot (Imbuing Table) is latent; anchoring it to magic via M-02/M-11 above gives it a proper second pillar.

## create_confectionery   [anchors: Create, survival (2)]
- OK — connections sound (Create + survival both established). M-09 luxury-economy sell is a plausible 3rd link but generic for this pass; no structural weave missing.
- from: create_confectionery:bar_of_ruby_chocolate / hot_chocolate as colonial food supply | via: minecolonies colony provisioning | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: high-effort processed chocolate supplied to a MineColonies tavern/cook as a luxury ration — the colony's morale buffer requires a Create-produced good; structurally distinctive because it ties a production chain to the colony demand loop, not just "sell for coins"
- from: create_confectionery candies (Speed/Saturation/Phantom-repel effects) | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: chocolate/candy as an alchemical base — a mage distills confectionery effects into a concentrated potion; sugar-alchemy is sensible thematically and connects a food-chain output to the Iron's Spellbooks cauldron

REWORK: OK — Create + survival connections are sound.

## followersteleporttoo   [anchors: support/QoL (1)]
- LEAVE — behavior-only QoL fix (no items, blocks, or methods); nothing to weave.

## spark   [anchors: support/performance (1)]
- LEAVE — performance profiler tool (no items, blocks, or methods); nothing to weave.

## createadditionallogistics   [anchors: Create, aeronautics (2)]
- OK — connections sound. Lazy kinetics (Create infrastructure) + Stock Keeper seats (aeronautics/transport) are both solid. No new edge needed.

## sound_physics_remastered   [anchors: support/client (1)]
- LEAVE — client-only audio simulation (no items, blocks, or methods); nothing to weave.

## extradelight   [anchors: survival, Create (2)]
- from: extradelight crop inputs (coffee, garlic, ginger, citrus) | via: create:milling / create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: dried/ground coffee via Create mill, citrus juice via Create mixing → processed intermediates feeding ExtraDelight's Evaporator/Vat upstream; the bakery and kitchen read as Create's downstream production web, not a parallel island
- from: extradelight feasts | via: minecolonies colony provisioning (cook/tavern) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: ExtraDelight feasts are the highest-tier food objects in the pack; routing them as the premium colony food supply (not just "sell for coins") is a structurally distinctive loop-closing sink — colony demand creates sustained production pressure on the culinary chain
- from: extradelight:vat / evaporator alcohol intermediates | via: alcohol_industry:alcohol_boiling | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: reduced fruit syrups / fermented vat outputs cross into the alcohol distillation chain — the Evaporator's condensed fluids are a natural upstream for distillation, threading two food-processing mods together through Create-adjacent steps
- from: dried herbs/spices (drying_rack outputs) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: exotic dried botanicals (dried garlic, ginger, herbs from the rack) as low-tier Ars imbuement catalysts — kitchen herbalism → magical reagents; everyday-sized (one light step, consistent with M-10's no-basic-gating rule)
- from: extradelight meals as economy good | via: numismatics sell | to: economy | motif: M-09 | power: everyday | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis (covered distinctively by the colony provisioning link above)

REWORK: existing Create weave (create:mixing inbound) is sound but shallow — the M-12 deepening (create:milling/pressing upstream for grain/coffee/citrus) is the key improvement.

## betterstrongholds   [anchors: survival (1)]
- from: betterstrongholds dungeon chests | via: loot-seed (datapack edit) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: seed magic reagents (Ars source gems, Iron's arcane essence) into stronghold loot — the ancient stronghold holds arcane knowledge; players venturing into the revised structure gain a magic progression seed; structurally, exploration feeds magic production
- from: betterstrongholds dungeon chests | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: seed a Numismatics coin cache in the deep treasure room — scarcity-based wealth; the stronghold is the pack's most demanding pre-End dungeon, making a coin reward a loop-closing scarcity sink (exploration difficulty → economy reward), not a generic sell
- from: generic coin drop seeding | via: loot-seed | to: economy | motif: M-08 | power: everyday | verdict: REJECT | reason: if coins appear in every chest they become trivially abundant; the above accept is conditioned on the deep-treasure room only (gated by dungeon depth, not a flat generic drop)

REWORK: existing survival anchor is sound; loot-seed weave adds the 2nd pillar without forcing it.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
- OK — connections sound. Create-package logistics delivered by an autonomous flying courier covers both pillars firmly. Economy adjacency (remote trade fulfilment across player outposts) exists naturally but does not need a new structural edge.

## create_cheese   [anchors: Create, survival (2)]
- from: create_cheese aged cheeses | via: minecolonies colony provisioning (tavern/cook) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: aged cheese as premium colony food supply — the time-gate (Calendar Page + maturing ticks) makes it genuinely scarce, not just sellable; routing it through colony demand is a loop-closing production sink that creates sustained pressure on the dairy chain (players must maintain the Cheese Cellar at scale)
- from: create_cheese:cheese_curds | via: extradelight:vat / melting_pot | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: curds fed into ExtraDelight's Vat or Melting Pot for cheese-based sauces/dishes — cross-mod culinary processing deepening the food web; everyday-sized, one step
- from: aged cheese as generic sell | via: numismatics sell | to: economy | motif: M-09 | power: mid | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; the colony-provisioning accept above is the structurally distinctive version of this idea

REWORK: existing Create + survival connections are sound.

## cmpackagepipebomb   [anchors: Create (1)]
- LEAVE — novelty PvP gag (tiny Create-package explosive trap); no coherent second-pillar weave without forcing it. One-system floor is the expected outcome for this mod.

## createshufflefilter   [anchors: Create (1)]
- LEAVE — single-item filter utility for Create Deployers (random-placement builder QoL); no material surface, no coherent 2nd-pillar weave.

## cbc_at   [anchors: Create, aeronautics (2)]
- OK — connections sound (Create-machined artillery arming Aeronautics ships). Deepening note: gate the heavy-autocannon/rocket tier behind a boss drop or MineColonies unlock (M-15 / M-05) to match the pack's scarcity-progression curve — but this is a design choice, not a missing pillar.
- from: cbc_at rocket/cannon components | via: create:sequenced_assembly (boss-key gate) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heavy autocannon or rocket pod tier requires a boss-drop component in its sequenced assembly recipe — top-tier ship weapons are gated on real combat achievement, not just resources; "kill the Cataclysm boss to unlock the rocket pod" makes the armaments tree feel earned

REWORK: existing Create + aeronautics anchors are sound.

## sounds   [anchors: support/client (1)]
- LEAVE — client SFX overhaul (no items, blocks, or methods); nothing to weave.

## multipiston   [anchors: support/MineColonies dependency (1)]
- LEAVE — internal MineColonies/Structurize dependency block; not player-surfaced content, no item processing, no coherent weave.

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: if Aileron's bespoke Elytra enchantments are exposed to the enchantment system, the Ars Enchanting Apparatus can apply them — magic as the gating method for advanced personal flight; "attune your Elytra at the apparatus to unlock the Aileron glide enchant" threads aeronautics into the magic web
- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | verdict: REJECT note: the above is ACCEPT contingent on Aileron's enchants being registered to vanilla enchantment types (not behavior-only); if they are not exposed to the apparatus method, this collapses to a behavior-only mod with no surface — ACCEPT is provisional pending a check that its enchants appear in the enchantment registry. If not confirmed, treat as LEAVE.

REWORK: existing aeronautics anchor is sound.

== CHUNK COMPLETE ==
