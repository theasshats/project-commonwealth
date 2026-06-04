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

