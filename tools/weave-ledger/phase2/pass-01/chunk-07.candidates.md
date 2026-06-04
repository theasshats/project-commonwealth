# Phase 2 candidates — chunk-07

## alexsmobs   [anchors: survival (1)]

<!-- Method-pull: alexsmobs outputs a large catalogue of exotic mob-drop reagents (ambergris, bear_dust,
     ender_residue, void_worm parts, elokosa_paw, etc.). Cross these against the methods palette:
     occultism:spirit_fire and occultism:ritual want organic/exotic drops (M-11). ars_nouveau:imbuement
     wants reagents with strong lore (M-10). Numismatics bounty boards want notable kills (M-14).
     Create:crushing can process bones/shells/dust into intermediates (M-03).
     Power-read: most drops are mid (from biome mobs) or endgame (void_worm parts); a few are everyday
     (banana, bear_dust from non-boss bears). Scale depth accordingly.
     Theme-fit: alexsmobs is naturalist-adventurous — magic is a natural destination for exotic fauna
     (ender_residue = end-touched, ambergris = ancient sea biology). Economy via bounty boards also
     reads well (hunting rare creatures). No tone clash.
     Red-team M-02+M-11: does Occultism spirit_fire eating exotic drops feel arbitrary?
     No — spirit_fire is literally "transmute organic material into occult essence"; ambergris (whale
     byproduct) and ender_residue (end-dimension matter) have clear spirit/essence connotations. Survives.
     Red-team M-14 bounty: provisional motif, and player-run-currency caveat applies. Surface only.
     Red-team Create crushing: processing bear_dust or elokosa_paw into an intermediate via create:crushing
     could feel forced unless the output is a coherent intermediate (crushed bone → bonemeal is fine;
     crushing a paw → nothing useful reads as a stretch). Keep only where the output is natural.
     Conclusion: primary 2nd-pillar is magic via M-02+M-11. Secondary is economy via M-14 (provisional).
     Create angle is available but lower priority. -->

- from: alexsmobs:ambergris (mid drop, whale-type mob) | via: occultism:spirit_fire | to: magic | motif: M-02 + M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: ambergris is ancient sea-creature biology; spirit-fire distilling it into an occult essence reads as obviously right — whale oil has alchemical history and the material already feels arcane.
- from: alexsmobs:ender_residue (mid/endgame drop, end-touched mob) | via: occultism:spirit_fire | to: magic | motif: M-02 + M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: ender_residue is literally end-dimension matter condensed; spirit-fire transmuting it into a void/ender essence is exactly what spirit-fire is for.
- from: alexsmobs:void_worm_beak (endgame — void worm is a mini-boss) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the void worm is the most alien creature in the mod; its beak infused in the enchanting apparatus as a high-tier arcane catalyst (fuelled by source) earns its power-level; one step but expensive, scaling M-10's depth rule.
- from: alexsmobs:bear_dust (everyday — common bear drop) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok | verdict: REJECT | reason: crushing bear_dust → generic bonemeal equivalent is a red-herring; bonemeal already exists and the intermediate adds nothing. Depth rule: everyday items need only a light step, but if that step produces nothing the pack doesn't already have, it's wasted noise. Drop.
- from: alexsmobs rare drops (general mob bounties) | via: bountiful board → numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: M-14 is provisional (leans-no, player-run currency review in 0.9). Surface candidate but do not accept; file for Gate 2 review.

## drones   [anchors: aeronautics (1)]

<!-- Method-pull: drones outputs the pocket drone (assembled item) and its component blocks
     (wood_rotor, iron_rotor, ion_thruster, controller, drill, frame). The join surface the
     dossier identifies is that rotors/thrusters are natural Create-material sinks. Cross against
     methods palette: create:mechanical_crafting and create:sequenced_assembly take brass/precision
     parts as inputs (M-05 native-method gating / M-06 sequenced-assembly keystone). The ion_thruster
     is the natural endgame tier (more exotic, needs electrical logic → Create-Addition FE bridge
     possible M-17, but let's check fit). The pocket_drone assembled item is the output.
     Power-read: wood_rotor = early/everyday; iron_rotor = mid; ion_thruster = endgame.
     Scale depth: wood = light (vanilla craft fine); iron_rotor = one Create step (pressing/crafting);
     ion_thruster = deeper (sequenced assembly) — matches the briefing's depth-scales-with-power rule.
     Theme-fit: quadcopter drone + Create factory = obviously industrial; the Aeronautics + Create
     spine pairing is the intended design. No clash.
     Red-team M-06 on ion_thruster: sequenced_assembly for the ion thruster is "multi-step chain
     through a derpack:incomplete_* part" — appropriate for an endgame thrust unit. Does the player
     find this sensible? Yes — you'd expect factory-machined ion drives. Survives.
     Red-team M-05 on iron_rotor: gating an iron_rotor behind a create:mechanical_crafting recipe
     is one light step — iron sheet + a gear blank shaped on the crafting grid. Not over-complex for
     a mid-tier component. Survives.
     Red-team M-09 economy: pocket_drone as a sellable "crafted good" is very weak — it's a personal
     tool, not a luxury consumable; the sell-value framing doesn't fit the mod's vibe. Reject.
     Conclusion: 2nd pillar = Create via M-05 (iron_rotor mid gate) + M-06 (ion_thruster endgame gate). -->

- from: drones:iron_rotor (mid component) | via: create:mechanical_crafting (iron sheet + gear blank) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a spinning rotor is exactly the kind of precision part that comes off a Create mechanical crafter — the factory makes your flier's blades.
- from: drones:ion_thruster (endgame component) | via: create:sequenced_assembly (derpack:incomplete_thruster part chain) | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: ion thrusters need more than hammered iron — a sequenced assembly line winding coils and pressing charge plates is the obvious factory story.
- from: drones:pocket_drone (assembled item) | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: clash | verdict: REJECT | reason: the pocket drone is a personal automation tool, not a luxury trade good; framing it as a sellable commodity clashes with the mod's personal-robotics vibe. Nothing about a self-built drone says "merchant stock."

## bettermineshafts   [anchors: survival (1)]

<!-- Method-pull: zero items, zero methods, zero loot tables — pure structure overhaul of vanilla
     mineshafts (YUNG's). Nothing to route through any method. The mod's value is expanding the
     underground exploration space and giving scarcity-driven ore hunts richer terrain to operate in.
     That benefits the Create/survival pillar indirectly (deeper/richer shafts to mine) but offers
     no recipe hook, no material output, and no method the pack can pull through.
     Conclusion: LEAVE — structural-only, no materials or methods to weave. -->

- LEAVE — zero items, zero registered methods, zero loot tables; pure YUNG's mineshaft structure overhaul. Indirectly supports the ore-scarcity/survival loop (richer shafts to explore) but provides no material or method that can be woven into a second pillar.

## createpickywheels   [anchors: Create (1)]

<!-- Method-pull: zero items, zero methods, zero loot — pure behavioral patch on create:water_wheel
     and windmill power. No material in/out; nothing to route through any method.
     The mod's mechanic is a constraint rule (biome + environment gates the generator). That constraint
     IS the value: it makes the world push back on where players build Create power, which is
     survival-pillar flavor applied to Create. But it is a config/behavior mod, not a material-producing
     one, so there is no recipe edge to author.
     Candidate from dossier: "survival via biome-gated power" — the river/biome/open-air requirements
     mean the world dictates placement, which aligns with the survival pillar's "world pushes back"
     philosophy. This is a genuine conceptual 2nd anchor (Create + survival), but it is realized
     entirely by config, not by any authored weave. It is already doing its job; no edge is needed.
     Red-team: could we add a recipe using a "river current" item from this mod? No — the mod registers
     no such items. Forcing a recipe edge onto a pure-behavior mod to manufacture a 2nd-pillar count
     would be exactly the kind of forced edge the briefing warns against.
     Conclusion: LEAVE — the survival flavor is real but config-native; no recipe weave is possible
     or appropriate for a zero-item behavior patch. -->

- LEAVE — pure behavioral patch (no items, no methods, no materials). The biome/environment gating it applies to Create water wheels and windmills carries genuine survival-pillar flavor, but it is realized entirely by config, not by any authored weave; no recipe edge is possible or appropriate.

## mowziesmobs   [anchors: survival (1)]

<!-- Method-pull: mowziesmobs outputs boss-drop artifacts:
     - mowziesmobs:ice_crystal (Frostmaw, endgame boss drop)
     - mowziesmobs:earthrend_gauntlet / wrought helm (Ferrous Wroughtnaut, endgame)
     - mowziesmobs:sol_visage (Barako, endgame)
     - mowziesmobs:elokosa_paw / elokosa_paw_crescent / etc. (Elokosa, moon-linked mob — mid/endgame)
     - mowziesmobs:dart / blowgun (mid, Barakoa-area drop/craft)
     Cross against methods:
     - M-15 boss-key unlock: boss drop as gate item in a complex Create recipe. The DESIGN doc says
       "Create tech unlocks via MineColonies or boss drops" — this is the explicit design intent.
       Ice_crystal (cold/ice theme) → gates a Create Refrigeration/cooling machine, or a cryo-
       processing step in sequenced_assembly. Wroughtnaut artifacts (heavy iron/forge theme) → gate
       a high-tier forge machine or a Create-Cannons heavy cartridge assembly.
     - M-11 ritual transmutation: Occultism spirit_fire transmutes boss artifacts into a high-tier
       occult essence. Thematically: Wroughtnaut's soul is forged iron → spirit-fire extracts an
       "iron spirit" essence. Ice_crystal → spirit-fire yields a frost essence for rituals.
       But these are flagged artifacts (unbreakable gear items) — the dossier calls them "unique
       unbreakable gear". Putting them as destructible ritual reagents would consume items a player
       might wear. Need care: flag as "crafted duplicate from boss-item copy" or accept that a spare
       drop is consumed. Power-read: these are endgame drops from non-renewable (per-spawn) bosses.
       M-11 spirit_fire is appropriate in depth (one step for endgame), but consuming a unique-
       unbreakable item in a ritual could frustrate players. Weaker than M-15.
     - M-22 lunar: elokosa_paw_* items have moon-phase variants (paw, crescent, full, gibbous, half)
       which are obviously lunar-themed. Routes nicely through M-22 as a lunar reagent — the paw's
       power variant (e.g. elokosa_paw_full on a full moon) feeds a magic method or Create process.
       Theme is natural; the Elokosa howler is clearly a moon-themed mob.
     Power-read:
     - ice_crystal, sol_visage, earthrend_gauntlet: endgame (non-renewable per-spawn boss; limited supply).
     - elokosa_paw variants: mid/endgame (available once the player finds the mob at the right moon phase).
     Theme-fit:
     - M-15 (boss-key → Create gate): "of course" — a frost boss drops an ice crystal that powers a
       cryo-assembly stage in Create. Direct, clear, no tone clash.
     - M-11 (boss artifact → ritual transmutation): riskier because the artifacts are gear, not
       consumable reagents; a player might resent burning their unique drop. But if there are multiple
       boss spawns across the world, spares accumulate. The tone (mythic-tribal + occultism transmutation)
       is compatible. Flag as endgame, accept with note that a spare-drop assumption is needed.
     - M-22 (elokosa lunar paw → lunar reagent): elegant — the moon-phase paw variants become a
       moon-gated magic/Create ingredient, which is exactly what M-22 is for. Strong accept.
     Red-team M-15: does gating a Create machine behind a boss drop feel arbitrary? No — the DESIGN
     doc explicitly mandates it. The thematic pairing (ice crystal → cryo process, or wrought-iron
     artifact → forge step) should be chosen to match the boss's theme. Survives.
     Red-team M-22: the paw variants being moon-phase dependent means supply is calendar-gated.
     That's a feature (M-22 exists for this). Players hunting a full-moon paw is a compelling loop.
     Survives.
     Red-team M-11 boss artifacts: uniqueness risk noted — this is an endgame weave and supply is
     limited (per-spawn bosses). Accept but flag the supply concern for balance review. -->

- from: mowziesmobs:ice_crystal (endgame Frostmaw boss drop) | via: create:sequenced_assembly as boss-key gate | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: a crystal of concentrated frost from a glacier boss is the obvious catalyst for a Create cryo-processing stage — you fought for it, now it unlocks a machine step.
- from: mowziesmobs:earthrend_gauntlet (endgame Wroughtnaut boss drop) | via: create:sequenced_assembly as boss-key gate | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Wroughtnaut is an iron-golem-scale forge construct; its gauntlet as a key component in a high-tier Create mechanical assembly reads as "of course" — iron mastery unlocks iron mastery.
- from: mowziesmobs:elokosa_paw_full / elokosa_paw_crescent (moon-phase drops, mid/endgame) | via: ars_nouveau:imbuement or occultism:ritual as moon-gated reagent | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: the Elokosa is a moon-phase shapeshifter; its paw in the phase it was caught resonates with any moon-attuned ritual — the lunar phase you hunted in is the reagent's power.
- from: mowziesmobs:sol_visage (endgame Barako boss drop) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Sol Visage channels solar power; infusing it into the enchanting apparatus (fuelled by source) as a sun-themed arcane catalyst sits cleanly in the magic pillar at appropriate depth.
- from: mowziesmobs:ice_crystal (endgame, non-renewable boss drop) | via: occultism:spirit_fire → frost essence | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: ice_crystal is already used as a boss-key gate (M-15 above). Repurposing it as a consumable ritual reagent burns a unique gear item; supply is per-spawn limited. Double-assignment risks frustrating players. If a second magic weave is needed, prefer sol_visage (M-10 above). Defer to Gate 2.

## t_and_t   [anchors: survival (1)]

<!-- Method-pull: Towns and Towers registers zero items, zero methods. Its content is worldgen
     structures (16 biome village variants, conquerable forts, ocean sail ships) with vanilla loot
     tables. The only material "output" is what the structures contain (vanilla loot + villagers).
     The 16 biome village variants populate the world with trade-ready NPCs across biomes — that
     is a genuine hook for the economy pillar if we consider that village-type selection determines
     what professions and trades appear, which drives the Numismatics economy.
     Dossier candidate: economy via villagers/Numismatics — village structures as trade hubs,
     feeding the player-run coin economy. This is an M-21 pattern (villager trade → Numismatics),
     which is provisional and the maintainer leans no. No M-09 angle either — t_and_t produces
     no processable goods, only structures.
     Alternative angle: the conquerable forts/camps can become player bases (useful for aeronautics
     logistics hubs), but that's a play-pattern note, not a weave.
     Loot table injection: a pack could add pack-specific trade goods to t_and_t village loot
     chests, but that's a separate loot-table authoring decision (not a weave in this pass).
     Red-team: every "economy via villages" idea for a zero-item structure mod ultimately reduces
     to "more village variants → more traders → more trade". That's true but it's the same one
     pillar (survival/exploration) viewed through a trade lens, not a genuine 2nd pillar.
     The dossier itself says "the economy hook is via loot/trade tables, not a process".
     Conclusion: LEAVE — zero items, zero methods; the village-trade angle is M-21 provisional
     (leans no) and does not constitute an authored weave. Its value is world texture for
     exploration and base-seeding, which is survival pillar work. -->

- LEAVE — zero items, zero registered methods; pure worldgen structure overhaul. The 16 biome village variants enrich the world and create natural trade-hub locations, but any economy angle routes through M-21 (provisional, leans no) or requires separate loot-table authoring outside this pass. No coherent recipe weave exists.

