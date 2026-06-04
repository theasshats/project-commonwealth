# Phase 2 candidates — chunk-05

## rottencreatures   [anchors: survival (1)]
- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: frozen undead flesh dissolves in spirit-fire into a cold-essence reagent — kill-loot that feeds the occult web
- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: corrupted wart from swamp undead imbued to become a toxic Ars essence — the swampy death zone feeds spell-craft
- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: magma-infused flesh transmutes in spirit-fire to a heat/fire essence; Immortal/burn variant maps naturally
- from: rottencreatures:frozen_rotten_flesh | via: create:haunting | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: haunting is a soul-fire transmutation, not a cold/frozen one — thematic mismatch, and M-11 already routes flesh to magic more coherently; don't duplicate with a weaker-fit method

## sky_whale_ship   [anchors: survival (1)]
- from: sky_whale_ship loot tables (structures) | via: loot-table authoring (custom loot) | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: sky whale holds Aeronautics-grade loot — engine schematics, hull blueprints, or rare components — so the whole point of flying a ship is hunting whales; the aerial destination rewards the aerial method
- from: sky_whale_ship loot tables | via: numismatics sell (loot items) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: loot economy seam is real but weaker — the aeronautics hook is the load-bearing identity for this mod; a coin-loot add-on is noise that dilutes the aeronautics anchor; one pillar-seam is the right play here; economy can come later as a secondary if needed

## createaddition   [anchors: Create (1)]
- from: createaddition:charging (FE charge method) | via: createaddition:charging | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: Iron's Spellbooks arcane battery / focus gear charged at the tesla coil — the electricity layer recharges magic tools; player finds this natural (magic uses power)
- from: createaddition:seed_oil / bioethanol | via: createaddition:liquid_burning → numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: seed oil is an internal fuel for the alternator, not a luxury; making it a trade good undercuts its role as energy input and the "sellable processed good" case is weak compared to e.g. wine or cheese — depth doesn't justify a second pillar here
- from: createaddition:rolling (ingot→rod/wire) | via: createaddition:rolling | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: REJECT | reason: rolling mill makes rods/wires which COULD feed Aeronautics wiring, but the rolling method is already on the Create side — it doesn't add a second pillar, it deepens Create; M-17 (charging magic gear) is the stronger and cleaner second-pillar seam

## brazil_legends   [anchors: survival (1)]
- from: brazil_legends:capelobo_claw | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a cursed cryptid's claw dissolves in spirit-fire into a predator-essence; folklore-monster drop feeding the spirit web is immediately legible
- from: brazil_legends:amber_shard | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: amber preserves ancient energy — imbue it to unlock a nature/preservation essence for Ars; geological/folkloric material as arcane input reads cleanly
- from: brazil_legends:amber_shard / amber_pearl | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: amber as currency has surface appeal but the mod's identity is folkloric-combat, not trade; the economy tie is superficial and doesn't survive the "would a player find this sensible" bar as a *pillar*; the two magic weaves above are the right 2nd pillar
- from: brazil_legends:big_tongue | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: REJECT | reason: the big_tongue is a blunter drop — less distinctive than the claw or amber; two spirit-fire routes from the same mod is one too many; keep the claw as the more evocative reagent

## direct_chute   [anchors: Create (1)]
- LEAVE — single-item logistics block with no outputs or consumables; nothing to route to a second pillar without forcing a contrived edge; the dossier itself flags leave

## create_ironworks   [anchors: Create (1)]
- from: create_ironworks:tin_ingot (c:ingots/tin) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Tin is a regional scarce ore — crush it in Create, process into ingots, mint into Tin Coin; the pack's scarcity-economy seam runs exactly through this mod's ore
- from: create_ironworks:steel_ingot | via: aeronautics construction recipe (structural part) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: steel plate/beam is the obvious structural material for Aeronautics airframes — a hull isn't made of wood; requiring forged steel for load-bearing ship parts makes construction genuinely costly and ties the ironworks to the aeronautics pillar
- from: create_ironworks:bronze_ingot | via: create:crushing (deco recycle) | to: Create (depth) | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 recycles deco not alloy ingots; bronze is a primary alloy not a decoration; this would just add a crush-back loop which is neither the spirit of M-04 nor a meaningful second pillar

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: everyday | tone: ok | verdict: ACCEPT | hook: a crab claw from a whimsical mob-vote creature imbued as an Ars reach-reagent — it already extends reach in vanilla brewing, so an arcane infusion that adds reach/grasp magic reads as a natural upgrade of its established identity
- from: friendsandfoes copper buttons/lightning rods | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the mod is intentionally vanilla-plus in tone; routing its copper deco through a Create machine is technically valid (M-04) but the value-add is trivial and the mod's vibe resists heavy mechanization; the dossier flags this as weak and "don't force" — keep leave as a fallback
- LEAVE (copper deco path) — the M-04 crush path gives no meaningful second pillar; the crab_claw → magic weave above is the coherent 2nd-pillar seam; the copper items are flavor not reagents

## create_ultimate_factory   [anchors: Create (1)]
- LEAVE — pure recipe datapack with no items or consumables of its own; deepens the Create pillar by design; no coherent second-pillar hook without forcing edges onto vanilla materials the mod merely processes

## samurai_dynasty   [anchors: survival (1)]
- from: samurai_dynasty:jade (c:gems/jade) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: jade ore crushed in Create doubles the yield with a gem dust byproduct — folds the samurai ore tier into the Create mineral economy cleanly
- from: samurai_dynasty:akaname_tongue / yokai drops | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: yokai are spirits — akaname tongue transmutes in spirit-fire to a corruption-essence; spirit-world monsters feeding the occult ritual web is the most natural possible pairing
- from: samurai_dynasty:ruby / onyx / aquamarine | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: these gems are less structurally important than jade to the mod's identity; routing all four gem ores through crushing over-saturates M-03 for one mod; jade is the flagship and the right representative — pick one
- from: samurai_dynasty:steel_ingot (c:ingots/steel) | via: aeronautics construction (structural) | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: REJECT | reason: create_ironworks also provides c:ingots/steel (M-23 already proposed there); two sources of the same structural material is fine in-game but the weave-proposal for M-23/steel should not be duplicated here — let ironworks own that seam; samurai_dynasty's 2nd pillar is served by jade→Create + yokai→magic

## createnuclear   [anchors: Create (1)]
- from: createnuclear:uranium (c:ingots/uranium, processed) | via: numismatics mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade uranium fuel is the rarest, most processed material in the pack — minting it into a high-denomination coin makes nuclear the apex of the scarcity-economy; only late-game players can produce it, so it anchors the top of the trade hierarchy
- from: createnuclear:lead_ingot | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: lead is a secondary metal here, not the flagship; minting both lead and uranium dilutes uranium's apex position; uranium alone is the right economy seam for this mod
- from: createnuclear:reactor output (SU) | via: createaddition:charging → magic gear | to: magic | motif: M-17 | power: endgame | tone: ok | verdict: REJECT | reason: the SU→FE→magic-charging path is valid but it routes *through* createaddition, not createnuclear directly; this would be a createaddition weave credited to the nuclear source; it doesn't give createnuclear a second pillar, it just uses its power output downstream; not a direct method-routing for this mod

== CHUNK COMPLETE ==
