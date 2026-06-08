## betteroceanmonuments  — slate: 2 KEEP / 10 CUT / 3 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | betteroceanmonuments loot→magic | motif M-02 | delivery: loot-seed (datapack — seed Ars source gem cluster or Iron's scroll into monument chests + elder guardian drop) | milestone: v0.11.0 | why "of course": the expanded monument's deepest vault is thematically arcane; arcane reagents in prismarine depths are the obvious reward for conquering an ocean dungeon (12+5+3+1+1 corroborating rows; strong ACCEPT consensus)
KEEP  | betteroceanmonuments loot→economy | motif M-08 | delivery: loot-seed (datapack — seed a handful of Numismatics coins into monument chest rooms) | milestone: v0.9.0 | why "of course": the expanded monument adds true chest rooms; a dungeon hoard containing actual currency gives the aquatic-dungeon route a concrete economy payoff (10+4+4+1+1 rows; ACCEPT consensus)
CUT   | betteroceanmonuments loot→create (M-15 boss-key) | motif M-15 | reason: consensus REJECT (7 REJECT vs 3 ACCEPT across three rows); monuments add rooms/chests not a boss — using the elder guardian as a boss-key-source for a Create tech recipe is thematically strained; tone mismatch; the magic loot-seed (KEEP above) already gives exploration a payoff
MERGE | betteroceanmonuments loot→magic (M-02, times_suggested=3) | into: KEEP magic M-02 | reason: near-duplicate of the accepted higher-confidence row; same from→to via same motif
MERGE | betteroceanmonuments loot→economy (M-34, times_suggested=3) | into: KEEP economy M-08 | reason: M-34 is "combat-route supply" (boss drops traded to non-combat); monument chests are not boss drops; the economic payoff is already captured by M-08 KEEP; retag rejected
MERGE | betteroceanmonuments loot→economy (M-30, times_suggested=2) | into: KEEP economy M-08 | reason: regional-scarcity framing (ocean-biome lock) is a valid design note but does not require a separate weave action — the loot-seed already delivers the ocean-exclusive payoff; no additional Phase-3 work
CUT   | betteroceanmonuments loot→create (M-15, times_suggested=1, REJECT) | motif M-15 | reason: duplicate-of cut above; REJECT consensus
CUT   | betteroceanmonuments loot→survival (M-34, times_suggested=1) | motif M-34 | reason: M-34 is combat-specialist-trades-boss-loot; monument chests are not boss drops; no-method fit
CUT   | betteroceanmonuments loot→survival (M-02, times_suggested=1) | motif M-02 | reason: M-02 applies to mob drops feeding magic/economy; this is a survival-pillar version with no distinct hook beyond the KEEP; duplicate framing, lower confidence
CUT   | betteroceanmonuments loot→magic (M-15, times_suggested=1) | motif M-15 | reason: M-15 is boss-key gate; elder guardian is not a pack boss in the design sense; wrong motif for chest loot; REJECT
CUT   | betteroceanmonuments elder-guardian boss drop (M-02, times_suggested=1) | motif M-02 | reason: folded into KEEP magic M-02 above which already covers elder guardian drop as a loot-seed surface
CUT   | betteroceanmonuments no-registry-items row | reason: REJECT; correctly identifies the method constraint (loot-table only) — both KEEPs route via loot-seed, so this observation is satisfied
CUT   | betteroceanmonuments loot→magic (untagged opus REJECT) | reason: opus REJECT; correctly notes seeding coin/reagent is a datapack edit not a mod weave — the accepted weaves are datapack-delivered; no additional action
CUT   | betteroceanmonuments loot→economy (opus REJECT M-08) | reason: opus REJECT; same reasoning as above; already captured by KEEP

---

## cmpackagepipebomb  — slate: 0 KEEP / 13 CUT / 0 MERGE / 0 DEFER   | anchors after: none (mod is a PvP gag; no loop-advancing hook found)

CUT   | pipebomb→create (M-29, times_suggested=2) | motif M-29 | reason: consensus REJECT (2 REJECT); a pipebomb-as-cartridge-filler is a tone clash; prank items don't belong in CBC's military-munitions assembly chain
CUT   | pipebomb→create (untagged, times_suggested=1) | reason: no-motif; REJECT
CUT   | pipebomb→survival (M-06, times_suggested=1) | reason: REJECT; no accepted motif for explosive-trap output; M-06 is for endgame Create flagship items
CUT   | pipebomb→economy (untagged, times_suggested=1) | reason: no-motif; "trap as trade good" has no method routing
CUT   | pipebomb→create (M-20, times_suggested=1) | reason: REJECT; M-20 is deploy-application upgrade, not deploy-arms-an-explosive
CUT   | pipebomb→create (opus untagged, times_suggested=1) | reason: REJECT; one-shot PvP gag, no loop-advancing method
CUT   | pipebomb→survival (M-02, times_suggested=1) | reason: REJECT; M-02 is mob-drop→magic/economy reagent; a trap item seeded into loot does not fit
CUT   | pipebomb→create (M-24, times_suggested=1) | reason: REJECT; the pipebomb is a trap not a propulsion component; M-24 is drivetrain/control
CUT   | pipebomb→create (nitropowder M-29, times_suggested=1 ACCEPT) | motif M-29 | reason: single ACCEPT with no corroboration; upgrading a prank bomb via industrial chemistry crosses the tone line; depth scales with power — a gag item gets no complex chain; CUT (tone + depth guardrail)
CUT   | pipebomb→create (CBC caseless-munition M-29, times_suggested=1 ACCEPT) | motif M-29 | reason: same as above; tone clash; the pack's CBC integration is for serious artillery, not novelty traps
CUT   | pipebomb→economy (M-34, times_suggested=1 ACCEPT) | motif M-34 | reason: M-34 is boss/danger output farmed by a combat specialist and sold; pipebombs are crafted prank items, not boss drops; motif mismatch; single ACCEPT no corroboration
CUT   | pipebomb→survival (M-20 deployer-arms, times_suggested=1 ACCEPT) | reason: a Create Deployer pre-arming a prank trap stretches M-20 past its intended use; single ACCEPT; no-method fit
CUT   | pipebomb→create (M-12 TFMG chemistry, times_suggested=1 REJECT) | reason: REJECT; gating a gag item behind industrial chemistry violates depth-scales-with-power guardrail

---

## createadditionallogistics  — slate: 2 KEEP / 8 CUT / 1 MERGE / 0 DEFER   | anchors after: create + aeronautics (now 2)

KEEP  | createadditionallogistics flexible-shafts→aeronautics | motif M-24 | delivery: recipe (aeronautics construction recipe requiring flexible shaft variants) | milestone: v0.9.0 | why "of course": flexible shafts that connect any direction are exactly what a ship's mechanical drivetrain needs to route power to propellers and control linkages (times_suggested=4, ACCEPT 3/4; opus-corroborated row also ACCEPT)
KEEP  | createadditionallogistics lazy-cogwheels→economy (colony route) | motif M-28 | delivery: config / KubeJS — MineColonies Blacksmith/Mechanic hut produces lazy shafts/cogwheels more cheaply | milestone: v0.9.0 | why "of course": a large Create factory needs dozens of lazy cogwheels; bulk production from a colony specialist is natural and gives the logistics mod an economy anchor (times_suggested=2, ACCEPT 1; strong thematic fit)
CUT   | createadditionallogistics flexible-shafts→aeronautics (M-23, times_suggested=2) | motif M-23 | reason: REJECT consensus; M-23 is for structural alloy/hull material; flexible shafts are kinetic QoL parts, not hull structural members; wrong motif; use M-24 (KEEP above)
MERGE | createadditionallogistics brass-lazy-cogwheel→aeronautics M-24 (times_suggested=1 ACCEPT) | into: KEEP flexible-shafts→aeronautics | reason: near-duplicate; same M-24 drivetrain motif, lower confidence row
MERGE | createadditionallogistics andesite-lazy-cogwheel M-20 (times_suggested=1 ACCEPT) | into: KEEP flexible-shafts→aeronautics | reason: M-20 deploy-application upgrade is an acceptable light delivery for this; absorbed into the aeronautics anchor
CUT   | createadditionallogistics brass-lazy-shaft→aeronautics M-24 (times_suggested=1 REJECT) | reason: REJECT; lazy shafts are general kinetics; not distinctly a drivetrain feed; absorbed by the stronger flexible-shaft KEEP
CUT   | createadditionallogistics flexible-shaft→aeronautics M-24 (times_suggested=1 REJECT) | reason: REJECT; duplicate of above
CUT   | createadditionallogistics andesite-cogwheel→create M-04 (times_suggested=1 REJECT) | reason: REJECT; cogwheels are functional kinetics parts not decorative blocks; M-04 crush-recycle does not apply
CUT   | createadditionallogistics brass-lazy-shaft as structural M-23 (times_suggested=1 REJECT) | reason: REJECT; lazy shafts are not airframe structural members; M-23 wrong motif
CUT   | createadditionallogistics flexible-shafts M-20 (times_suggested=1 REJECT) | reason: REJECT; shafts are already crafted from Create parts; second deploy step is double-gating a QoL component
CUT   | createadditionallogistics lazy-shafts ambient consumption (untagged REJECT) | reason: ambient use, no-method routing; correctly rejected
CUT   | createadditionallogistics bare MineColonies M-28 (times_suggested=1 REJECT) | reason: REJECT; the lazy shaft is a kinetics convenience block, not a colony-required exclusive; the stronger KEEP M-28 row above already covers the colony anchor at the right level
DEFER | createadditionallogistics seats→aeronautics M-31 (times_suggested=1 ACCEPT) | motif M-31 | →playtest: seat-sizing for Stock Keeper logistics mobs is a flavour detail; confirm whether aeronautics train logistics actually uses these seats in practice before authoring a weave

---

## createbigcannons  — slate: 4 KEEP / 26 CUT / 5 MERGE / 0 DEFER   | anchors after: create + economy + magic (now 3)

KEEP  | createbigcannons cannon-grade-steel→economy (mint) | motif M-08 | delivery: recipe (create:processing → numismatics mint on c:ingots/steel) | milestone: v0.9.0 | why "of course": cannon-grade steel is a scarce processed metal; a metallurgist who runs the melt+cast route mints coin — the settlement medium flows from the forge (8+2 times_suggested; opus-corroborated; strong ACCEPT)
KEEP  | createbigcannons munitions/shells→economy (combat supply) | motif M-34 | delivery: emergent trade (a munitions specialist makes shells and sells to crews who want ship cannons but haven't set up a foundry) | milestone: v0.9.0 | why "of course": shells are consumed every shot, so a combat player's demand for munitions never zeroes; the munitions specialist always has a market (6+4+1+1 times_suggested; multiple ACCEPT rows)
KEEP  | createbigcannons munitions consumption-sink | motif M-26 | delivery: native mechanic (shells consumed when fired) | milestone: v0.9.0 | why "of course": shells are spent per shot; the demand-renewal edge closes the loop for the munitions economy (3 times_suggested opus-corroborated; ACCEPT consensus) — note: this is the structural "closing arrow" of the M-34 KEEP above; keep both to document the loop
KEEP  | createbigcannons nethersteel→magic (cross-route) | motif M-10 | delivery: KubeJS recipe (occultism:spirit_fire or ars_nouveau:imbuement attunes nethersteel into a magic-hardened shell component) | milestone: v0.11.0 | why "of course": nethersteel is forged in nether soul-fire — arcane infusion that makes shells penetrate arcane wards is a coherent cross-route that forces the cannoneer to engage with the magic pillar (2 times_suggested; ACCEPT consensus)
CUT   | createbigcannons steel→aeronautics M-23 (times_suggested=4) | motif M-23 | reason: this is the *existing* aeronautics anchor (already recorded in dossier); not a new weave to file; recording as-is
CUT   | createbigcannons items→MineColonies M-28 (times_suggested=3) | motif M-28 | reason: mixed ACCEPT/REJECT; colony producing basic iron/steel is generic colony-route behavior already implied by MineColonies; cannon components are a stretch for a colony hut without a specific hook; insufficient specificity — subsumed by M-34 trade KEEP
CUT   | createbigcannons steel/cast-iron regional-scarcity M-30 (times_suggested=3) | motif M-30 | reason: valid design observation but this is a worldgen-config action, not a recipe weave; no Phase-3 recipe action on CBC items; duplicate of the economy anchor already covered
CUT   | createbigcannons loot-seed M-08 (times_suggested=2 REJECT) | reason: REJECT consensus; cannon salvage loot is not the scarcity-metal→coin minting flow; the M-08 KEEP above covers steel minting correctly
CUT   | createbigcannons cannon-barrel→aeronautics M-24 (times_suggested=2) | motif M-24 | reason: mixed; cannon mounts on ships are the existing aeronautics anchor (M-23 structural); M-24 as drivetrain — a cannon mount is a weapon not a propulsion/control surface; duplicate of existing anchor, not a new weave
CUT   | createbigcannons loot→survival M-02 (times_suggested=2) | motif M-02 | reason: seeding rare components into dungeon loot is plausible but CBC's primary loop is production→economy; a loot-seed here is a distraction from the three strong KEEPs; single-system value only
CUT   | createbigcannons cannon→ars_nouveau enchanting M-29 (times_suggested=2 REJECT) | reason: REJECT consensus; enchanting a cannon barrel is thematically absurd; tone clash
CUT   | createbigcannons bronze/cannon-barrel→aeronautics M-23 (opus, times_suggested=1) | motif M-23 | reason: existing anchor (aeronautics+create); not a new weave; subsumed
CUT   | createbigcannons nethersteel→occultism:spirit_fire M-11 (times_suggested=1 REJECT) | reason: REJECT; tonal clash; military-industrial metal routing through dark-ritual as reagent; better served by M-10 KEEP (arcane infusion of nethersteel into shell component)
CUT   | createbigcannons big_cartridge_sheet→create:pressing M-20 (times_suggested=1 REJECT) | reason: REJECT; pressing already routes through CBC's own methods; redundant
CUT   | createbigcannons nethersteel-barrel→boss-key M-15 (opus, times_suggested=1) | motif M-15 | reason: single ACCEPT; the M-10 KEEP already forces cross-route engagement; adding a separate boss-key gate on the same nethersteel would double-gate endgame content; CUT (depth guardrail)
CUT   | createbigcannons cannon-foundry recycle M-04 (opus, times_suggested=1 REJECT) | reason: REJECT; CBC already has its own melting method that recycles metal; duplicate
CUT   | createbigcannons nethersteel→occultism ritual M-11 (times_suggested=1 REJECT) | reason: REJECT; same tonal-clash issue as above
CUT   | createbigcannons cannon-mount→service-for-hire M-33 (times_suggested=1) | motif M-33 | reason: single ACCEPT; gunship fire-support as a paid service is emergent behavior, not an authored weave — it happens naturally if the cannon ecosystem works; no recipe authoring needed
CUT   | createbigcannons cast-iron/steel→create:crushing M-03 (times_suggested=1 REJECT) | reason: REJECT; CBC metals arrive as already-processed ingots, not ores; M-03 is ore-doubling, not ingot-recycling
CUT   | createbigcannons steel→sequenced-assembly M-06 (times_suggested=1) | motif M-06 | reason: mixed; cannon-grade steel does not need an additional sequenced-assembly chain on top of the foundry chain; depth would over-gate an already-deep material
CUT   | createbigcannons cannon-blocks→aeronautics M-23 (times_suggested=1 ACCEPT) | reason: cannon barrels are weapons not structural airframe members; M-23 wrong target; existing aeronautics anchor already covers steel plate
CUT   | createbigcannons nethersteel regional-scarcity M-30 (times_suggested=1) | motif M-30 | reason: valid design note but requires worldgen config, not a recipe weave; no Phase-3 action
CUT   | createbigcannons cannon-mount/barrel→create:sequenced-assembly M-06 (times_suggested=1) | reason: single ACCEPT; the foundry chain is already deep; wrapping again in sequenced-assembly would over-gate; depth guardrail
CUT   | createbigcannons shell-casings→create:crushing M-32 (times_suggested=1) | motif M-32 | reason: single ACCEPT; industrial circularity is a nice idea but CBC already has its own melting/foundry recycle path; duplicate method
CUT   | createbigcannons steel→TFMG-blast-furnace M-29 (times_suggested=1) | motif M-29 | reason: single ACCEPT; TFMG blast furnace as the steel source is a valid design choice but CBC has its own foundry; making TFMG mandatory for CBC steel would depth-gate already-gated content; defer to design discussion
CUT   | createbigcannons gunpowder→TFMG-byproduct M-32 (opus, times_suggested=1) | motif M-32 | reason: single ACCEPT; TFMG sulfur/saltpeter → propellant is a good idea but this is a separate TFMG-side weave to author against TFMG, not CBC; route to TFMG triage
MERGE | createbigcannons munitions→economy M-34 (times_suggested=1, various wordings) | into: KEEP munitions M-34 | reason: multiple 1-count rows with identical from→to ("munitions specialist sells shells"); absorbed
MERGE | createbigcannons MineColonies-gunpowder M-28 (times_suggested=1) | into: KEEP munitions M-34 | reason: colony gunpowder supply is a colony-route cheap-basics that feeds the munitions chain; near-enough the M-34 economy anchor; no separate KEEP needed
MERGE | createbigcannons advanced-munitions M-37 (times_suggested=1) | into: KEEP munitions M-34 | reason: research-gate on advanced shells is a delivery variant of the same munitions economy anchor; absorbed
MERGE | createbigcannons colony-ordnance M-37 (times_suggested=1) | into: KEEP munitions M-34 | reason: near-duplicate of above; same absorption
MERGE | createbigcannons nethersteel M-19 / M-10 (times_suggested=1) | into: KEEP nethersteel→magic M-10 | reason: occultism:spirit_fire / haunting step on nethersteel is a variant delivery for the same magic cross-route; absorbed

---

## deeperdarker  — slate: 4 KEEP / 21 CUT / 8 MERGE / 0 DEFER   | anchors after: magic + create + economy (now 3)

KEEP  | deeperdarker soul_dust/soul_crystal→magic (spirit_fire) | motif M-11 | delivery: recipe (occultism:spirit_fire transmutes soul_dust into occult essence) | milestone: v0.11.0 | why "of course": soul dust from the Otherside is the most natural spirit-fire reagent in the pack; the dark dimension's soul seam feeds the occult web (37 times_suggested, opus-corroborated; unanimous ACCEPT)
KEEP  | deeperdarker gloomslate/sculk_stone→create (crushing recycle) | motif M-04 | delivery: recipe (create:crushing returns gravel + XP nugget from gloomslate/sculk_stone block families) | milestone: v0.7.0 | why "of course": builders who hollow out the Otherside get something back from surplus deco stone; standard Create recycle loop applied to alien stonework (20+13+3+1+1 times_suggested; unanimous ACCEPT)
KEEP  | deeperdarker heart_of_the_deep→magic (boss-key reagent) | motif M-10 + M-15 | delivery: KubeJS recipe (heart_of_the_deep required as input for a high-tier Ars Nouveau or Occultism endgame ritual/spell; also seeded as boss gate on a Create tech recipe) | milestone: v0.11.0 | why "of course": the Warden's Heart is the hardest drop in the pack and the key to the Otherside portal — it earns both a magic boss-key role AND a Create gate; dual-motif allowed because it is genuinely two distinct uses (11+11+7+6 times_suggested; strong ACCEPT)
KEEP  | deeperdarker warden_carapace→create (pressing/mechanical_crafting) | motif M-05 | delivery: recipe (create:pressing or create:mechanical_crafting gates a reinforced hull/machine component on warden_carapace input) | milestone: v0.7.0 | why "of course": the Warden's armored shell is a natural high-tier structural input for a Create machine component; depth scales with power — this is endgame-tier material (4+4 times_suggested; ACCEPT consensus)
CUT   | deeperdarker crystallized_amber→magic M-10 (times_suggested=6 mixed) | reason: mixed ACCEPT/REJECT; soul_dust + heart_of_the_deep already cover the magic pillar robustly (M-11 + M-10/M-15); adding a third magic reagent from the same mod is a 3rd anchor on a dimension that already has two clean vectors; too many magic hooks
CUT   | deeperdarker sculk_bone/warden_carapace→magic M-02 (times_suggested=5 mixed) | reason: the heart_of_the_deep KEEP already covers the Warden boss-drop magic route; adding sculk_bone/carapace as a second ritual reagent is a near-duplicate with lower thematic distinctiveness
CUT   | deeperdarker warden_carapace→create M-15 (times_suggested=4) | motif M-15 | reason: warden_carapace is covered by the M-05 pressing KEEP; adding a separate boss-key gate on the same material would double-gate; depth guardrail
CUT   | deeperdarker soul materials→create:haunting M-19 (times_suggested=2+2+1 REJECT) | reason: REJECT majority; soul_crystal/soul_dust are already strong M-11 magic reagents; routing them through create:haunting as well creates a double-spend; the M-11 KEEP is cleaner and better supported
CUT   | deeperdarker sculk_bone→magic M-11 (times_suggested=2) | motif M-11 | reason: absorbed into the soul_dust M-11 KEEP above — sculk_bone is a secondary soul-adjacent material; the main reagent is soul_dust; separate KEEP not needed
CUT   | deeperdarker soul_dust/soul_crystal→economy M-34 (times_suggested=2) | motif M-34 | reason: "Otherside specialist sells soul reagents to the magic player" is an emergent behavior that follows from the M-11 KEEP with no additional authoring; ambient endpoint, not a weave
CUT   | deeperdarker warden_carapace→create:crushing M-02 (times_suggested=2) | reason: wrong motif (M-02 is mob-drop→magic; a crushing recycle is M-04); and carapace pressing is already covered by M-05 KEEP
CUT   | deeperdarker warden_carapace→aeronautics M-23 (times_suggested=2) | motif M-23 | reason: the carapace is a mob drop, not a structural alloy plate; M-23 requires fabricated structural metal; the mod already has a Create anchor via M-05; aeronautics is a stretch
CUT   | deeperdarker crystallized_amber→galosphere M-32 (times_suggested=2 REJECT) | reason: REJECT; galosphere's preserved_transform is a stretch and the connection is non-standard; CUT
CUT   | deeperdarker Otherside materials→aeronautics M-31 (times_suggested=1+1) | motif M-31 | reason: logistics-required bulk good is a delivery-layer concern; the dimension-lock and trade pressure is already captured by the scarcity framing of the M-11/M-10 KEEPs; no separate logistics weave needed
CUT   | deeperdarker crystallized_amber→magic M-07 (times_suggested=3) | motif M-07 | reason: M-07 is for Galosphere allurite/lumiere shards specifically; using amber as the attunement catalyst would double-spend M-07 reagent role; reagent-ownership conflict; CUT
CUT   | deeperdarker Otherside→economy M-30 (times_suggested=3 mixed) | motif M-30 | reason: dimension-lock is stronger than regional-lock; the scarcity is inherent to the dimension, not GTMOGS worldgen config; no Phase-3 recipe action needed; emerges from existing design
CUT   | deeperdarker echo/bloom wood→create:cutting M-12 (times_suggested=1) | motif M-12 | reason: single ACCEPT; wood-cutting from alien woods is a nice idea but this is a generic processing step any wood gets; not a distinctive weave for deeperdarker
CUT   | deeperdarker sculk_transmitter→create:mechanical_crafting M-29 (times_suggested=1 ACCEPT) | motif M-29 | reason: single ACCEPT; the cross-route dependency is plausible but the Sculk Transmitter is a QoL automation block; gating it behind Create parts adds friction to a utility item; depth guardrail (everyday-tier item); REJECT
CUT   | deeperdarker sculk_transmitter→economy M-29 (times_suggested=1 REJECT) | reason: REJECT; no motif covers "wireless-redstone block as an economy item"
CUT   | deeperdarker soul_elytra→aeronautics M-23 REJECT) | reason: REJECT; Soul Elytra is a vanilla-upgrade item, not an airframe material
CUT   | deeperdarker soul_elytra→aeronautics (no-motif, times_suggested=1 REJECT) | reason: no-motif; elytra-rebalance framing is not an authored material-through-method weave; REJECT
CUT   | deeperdarker sculk_stone→create:crushing M-03 (times_suggested=1) | reason: M-03 is ore-doubling; sculk_stone is not an ore; wrong motif; M-04 crushing recycle already covered in KEEP
MERGE | deeperdarker soul_dust/soul_crystal/heart_of_the_deep→magic M-11 (opus, times_suggested=2) | into: KEEP soul_dust M-11 | reason: near-duplicate; absorbed
MERGE | deeperdarker sculk_stone M-04 (opus, times_suggested=3) | into: KEEP gloomslate M-04 | reason: near-duplicate; same from→create via M-04
MERGE | deeperdarker cobbled_gloomslate M-04 (times_suggested=1) | into: KEEP gloomslate M-04 | reason: near-duplicate block variant; absorbed
MERGE | deeperdarker soul_dust→ars_nouveau:imbuement M-10 (times_suggested=1+1+1 ACCEPT) | into: KEEP heart_of_the_deep M-10 | reason: soul_dust via imbuement is a variant delivery for the magic cross-route; absorbed into the M-10 component of the KEEP; note that delivery can use either imbuement or spirit_fire
MERGE | deeperdarker sculk_bone→magic M-11 (times_suggested=2) | into: KEEP soul_dust M-11 | reason: sculk_bone is secondary soul-adjacent material; absorbed
MERGE | deeperdarker warden_carapace→create M-04 (times_suggested=3 mixed) | into: KEEP warden_carapace M-05 | reason: crushing carapace as a recycle step is a minor addition to the M-05 pressing weave; absorbed (the main weave is pressing for a structural component; a lossy recycle can be noted as a variant)
MERGE | deeperdarker warden_carapace→create:mechanical_crafting M-05 blank-from (times_suggested=1) | into: KEEP warden_carapace M-05 | reason: same weave, blank from-field; absorbed
MERGE | deeperdarker reinforced_echo_shard→create M-06 (times_suggested=1) | into: KEEP heart_of_the_deep M-15 | reason: echo shards are a secondary Otherside component; any Create recipe gating on them is variant delivery of the same boss-key/high-tier-Create anchor

---

## domum_ornamentum  — slate: 2 KEEP / 12 CUT / 0 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | domum_ornamentum Create-processed-stone→create (architects_cutter) | motif M-04 | delivery: recipe (feed Create-made andesite alloy casing / processed stone into the Architect's Cutter; the cutter method is distinct from create:crushing — M-04 here extended to cover "Create outputs as cutter inputs") | milestone: v0.7.0 | why "of course": Create's industrial stone palette becomes the colony's architectural vocabulary; the cutter takes what the factory produces (9+6+5+4+3+2+2+1+1+1+1 times_suggested; strong ACCEPT, multiple phrasings)
KEEP  | domum_ornamentum colony-builder-demands-DO-blocks | motif M-28 | delivery: config (MineColonies hut upgrade requirements include specific DO ornamental blocks; Architect's Cutter is colony-adjacent/unlocked) | milestone: v0.9.0 | why "of course": the colony's fancy buildings require Architect's Cutter output — you need the cutter running before your colony looks right; the settlement specialist is the one who can supply framed panels (4+3+2+1+1+1+1+1 times_suggested; ACCEPT consensus)
CUT   | domum_ornamentum bare-sell M-28 (times_suggested=4 mixed) | reason: "pretty blocks are sellable" is the ambient endpoint (M-09 retired); the M-28 colony demand KEEP captures the real demand-gating
CUT   | domum_ornamentum framed-blocks→aeronautics M-23 (times_suggested=2) | motif M-23 | reason: DO blocks are decorative hull layer on ships — this is cosmetic, not structural; M-23 is for load-bearing hull/structural alloy; cosmetic hull panels don't earn an aeronautics anchor
CUT   | domum_ornamentum DO blocks→magic M-10 (times_suggested=1 REJECT) | reason: REJECT; pure decorative building material; imbuing a paper wall as a magic reagent is a tone clash; no motif fit
CUT   | domum_ornamentum loot-seed survival (no-motif REJECT) | reason: no-motif; DO doesn't own independent worldgen structures
CUT   | domum_ornamentum M-01 colony-hut-recipes (times_suggested=1 REJECT) | reason: REJECT; colony building material ties are a config choice, not a M-01 weave
CUT   | domum_ornamentum architectscutter M-15 (times_suggested=1 REJECT) | reason: REJECT; the cutter is already a MineColonies support dependency; making it a boss-key gate would over-gate a basic building tool
CUT   | domum_ornamentum DO loot survival M-34 (times_suggested=1 REJECT) | reason: REJECT; DO blocks in combat loot is a theme clash
CUT   | domum_ornamentum architects_cutter M-05 (times_suggested=1 REJECT) | reason: REJECT; M-05 requires a mod's flagship item built in its own machine gated on Create parts; the cutter cannot meaningfully gate itself
CUT   | domum_ornamentum magic-infused-stone→cutter M-10 (times_suggested=1) | motif M-10 | reason: single ACCEPT; the "magic mage's tower uses arcane-stone pillars" idea is charming but it requires an intermediate magic-processing step before the cutter; too many steps; depth guardrail on a decorative output; leave for future weave if magic-stone blocks become a natural intermediate
CUT   | domum_ornamentum service-for-hire M-33 (times_suggested=1) | motif M-33 | reason: single ACCEPT; "sell Architect's Cutter work as labor" is ambient player behavior; not an authored recipe weave; emergent from the mod's open-input design
CUT   | domum_ornamentum research-gate M-37 (times_suggested=1) | motif M-37 | reason: subsumed by the M-28 KEEP which already notes the colony-unlock dimension; a separate research-gate weave is not needed if colony demand is the delivery mechanism

---

## dummmmmmy  — LEAVE (pure target-dummy mod; single candidate row is no-motif config-tie, correctly REJECT; no loop-advancing hook exists)

---

## everycomp  — LEAVE (compatibility shim generating wood-variant blocks from host mod wood types; single pair of rows both correctly REJECT: wood variants don't fit M-04 metal/stone-deco scope, and any sawmill/cutting credit belongs to the host mod; no items of its own to weave)

---

## fxntstorage  — slate: 2 KEEP / 17 CUT / 2 MERGE / 0 DEFER   | anchors after: create + economy (now 2)

KEEP  | fxntstorage hardened_backpack→create (sequenced-assembly) | motif M-06 | delivery: recipe (create:sequenced_assembly for the top-tier hardened backpack; multi-stage chain through derpack:incomplete_* parts) | milestone: v0.7.0 | why "of course": the top-tier hardened backpack is the pack's highest-capacity portable storage; depth scales with power — flagship item earns a sequenced-assembly chain (3+3 times_suggested; ACCEPT consensus, matching phrasing)
KEEP  | fxntstorage hardened-tier→economy (colony cheaper-basics) | motif M-28 | delivery: config (MineColonies settlement's storage hut produces hardened crates more cheaply than hand-crafting) | milestone: v0.9.0 | why "of course": the colony's bulk-production route makes the hardened tier accessible to players who can't or won't run the full Create chain themselves — creates genuine trade pressure (2 times_suggested; ACCEPT)
CUT   | fxntstorage backpack_flight_upgrade→aeronautics M-24 (times_suggested=11 REJECT) | reason: consensus REJECT (8 REJECT); the flight upgrade is a worn Curios gadget for personal lift; it does not feed an Aeronautics airframe/drivetrain; M-24 wrong target; personal mobility ≠ ship propulsion
CUT   | fxntstorage backpack_flight_upgrade→aeronautics M-23 (times_suggested=5 REJECT) | reason: consensus REJECT; wearable backpack is not a structural airframe component; tone clash
CUT   | fxntstorage backpack_flight_upgrade (no-motif, times_suggested=2 REJECT) | reason: no-motif; personal flight has no approved motif connecting it to the aeronautics pillar; correctly rejected
CUT   | fxntstorage storage_controller→aeronautics M-31 (times_suggested=2) | motif M-31 | reason: single ACCEPT pair; the storage controller is a passive item-routing block; M-31 requires goods that genuinely need aeronautics/logistics movement; a routing block is not a "bulk good"; no-method fit; threshold not met
CUT   | fxntstorage hardened_backpack→magic M-05 (times_suggested=1 REJECT) | reason: REJECT; "hardened" connotes physical reinforcement; arcane liner is a tone mismatch
CUT   | fxntstorage brass_backpack→aeronautics M-23 (times_suggested=1) | motif M-23 | reason: single ACCEPT; outfitting crew with backpacks is emergent behavior; not a structural airframe material; threshold not met
CUT   | fxntstorage storage_controller→create M-05 (times_suggested=1 REJECT) | reason: REJECT; already has create:mechanical_crafting as inbound weave; storage_controller gating on a brass component is double-gating
CUT   | fxntstorage backpack auto-feeder→survival M-12 (times_suggested=1 REJECT) | reason: REJECT; auto-feeder accepts any food item the player loads; no specific food recipe surfaces here
CUT   | fxntstorage backpack→aeronautics M-23 (times_suggested=1 REJECT) | reason: REJECT; wearable gadget not airframe material
CUT   | fxntstorage storage_controller routing→economy (no-motif, times_suggested=1 REJECT) | reason: no-motif; storage routing as logistics has no approved motif; correctly rejected
CUT   | fxntstorage hardened_storage_box→create M-06 (times_suggested=1 REJECT) | reason: REJECT; hardened tier is already at the top of the Create-material ladder; wrapping boxes in sequenced-assembly is double-gating functional containers
CUT   | fxntstorage storage_controller→aeronautics M-24 (times_suggested=1 REJECT) | reason: REJECT; M-24 is drivetrain/propulsion/control; a storage-routing block is not a propulsion component; category error
CUT   | fxntstorage hardened boxes/backpacks→aeronautics M-23 (times_suggested=1 REJECT) | reason: REJECT; storage containers are not structural airframe materials
CUT   | fxntstorage backpack_flight_upgrade→aeronautics M-20 (times_suggested=1 REJECT) | reason: REJECT; M-20 is deploy-application upgrade; the flight upgrade is worn Curios gear not a deployed resource
CUT   | fxntstorage backpack tiers→economy M-26 (times_suggested=1 REJECT) | reason: REJECT; backpacks are durable items not consumed goods; M-26 requires spending against pressure
CUT   | fxntstorage backpack_flight_upgrade→aeronautics M-29 (times_suggested=1) | motif M-29 | reason: single ACCEPT; "flight backpack requires airship propeller component" is a cross-route idea but the backpack is personal gear, not the aeronautics loop; single-pass, no corroboration; threshold not met
CUT   | fxntstorage storage_controller→colony M-28 (times_suggested=1 REJECT) | reason: REJECT; the colony already has a citizen_grid storage bridge; second storage-network link would double-up with no distinct demand
CUT   | fxntstorage M-37 backpack-modules (times_suggested=1) | motif M-37 | reason: single ACCEPT; research-gating backpack modules is plausible but the two KEEPs already give the mod two anchors; third weave not needed
CUT   | fxntstorage backpack_flight→aeronautics sequenced M-06 (times_suggested=1) | reason: single ACCEPT; the flight upgrade is personal mobility; routing it through sequenced-assembly and calling it an aeronautics anchor is the same category error as M-24/M-23 above
MERGE | fxntstorage brass_backpack M-06 (times_suggested=2 mixed) | into: KEEP hardened_backpack M-06 | reason: near-duplicate; the brass tier is intermediate; the KEEP targets the hardened (top) tier; absorbed
MERGE | fxntstorage storage boxes→aeronautics M-31 (times_suggested=1) | into: KEEP hardened-tier M-28 | reason: "bulk storage boxes on a ship" is a thematic tie absorbed by the colony-cheaper-basics economy anchor; not a separate aeronautics weave

---

## gnkinetics  — slate: 2 KEEP / 13 CUT / 0 MERGE / 0 DEFER   | anchors after: create + aeronautics (now 2)

KEEP  | gnkinetics planetary/worm/industrial-gear→aeronautics (drivetrain) | motif M-24 | delivery: recipe (aeronautics construction recipe requiring planetary or worm gear variants for propellers and control surfaces) | milestone: v0.9.0 | why "of course": a planetary gear or worm gear is exactly the fabricated mechanical component for a ship's drivetrain — gnkinetics gears ARE gear-ratio precision parts and Aeronautics propellers need real gear assemblies (18+8+8+3 times_suggested; strong ACCEPT; opus-corroborated)
KEEP  | gnkinetics worm_gear→economy (colony specialist) | motif M-28 | delivery: config (MineColonies Blacksmith/Mechanic hut produces worm gears more cheaply; the colony's specialist smith is faster than hand-forging and the airship builder needs bulk) | milestone: v0.9.0 | why "of course": worm gears are tricky to machine; colony production at scale fills the demand from the aeronautics anchor above without forcing every player to run the full gnkinetics chain (2 times_suggested; ACCEPT)
CUT   | gnkinetics gear-types→create M-06 (times_suggested=3 REJECT) | reason: consensus REJECT; gnkinetics parts are already Create-internal; routing them through mechanical_crafting as an M-06 keystone is circular within the same pillar
CUT   | gnkinetics ring/planetary gear→aeronautics M-24 (times_suggested=3 mixed) | reason: absorbed by the planetary/worm KEEP above; near-duplicate
CUT   | gnkinetics planetary/worm→create:sequenced M-06 (times_suggested=3 REJECT) | reason: REJECT majority; the gears are Create-native; sequenced-assembly on Create-native parts is same-pillar depth with no loop advance
CUT   | gnkinetics worm_gear→magic M-10 (times_suggested=2 REJECT) | reason: REJECT consensus; precision mechanical gears have no magic-resonance; tone clash; industrial aesthetic vs arcane-scholarly
CUT   | gnkinetics industrial/large-industrial→aeronautics M-23 (times_suggested=2 REJECT) | reason: REJECT; M-23 is for structural alloy not gears; M-24 is the correct motif and is already KEEP above
CUT   | gnkinetics parts→magic/survival forced (times_suggested=2 REJECT) | reason: REJECT; no thematic or method hook into magic/survival; gnkinetics IS Create kinematics; correctly rejected
CUT   | gnkinetics worm-gear colony-locked M-28 (times_suggested=2) | reason: absorbed by KEEP colony M-28 above; near-duplicate higher-confidence row already KEEP
CUT   | gnkinetics creative_gear_motor (various rows, times_suggested=1-2 each) | reason: creative/admin item; not weave-eligible; multiple rows all correctly REJECT
CUT   | gnkinetics gears→magic M-29 cross-route (times_suggested=1 REJECT) | reason: REJECT; theme clash unless magic mods use mechanical constructs explicitly; too forced
CUT   | gnkinetics magnet_gear→create:energising M-17 (times_suggested=1 REJECT) | reason: REJECT; electromagnetic activation is speculative; no host method confirmed
CUT   | gnkinetics chainable_cogwheel complex chain (times_suggested=1 REJECT) | reason: REJECT; everyday component; depth guardrail; correctly rejected
CUT   | gnkinetics large_industrial_gear M-05 (times_suggested=1 REJECT) | reason: REJECT; M-05 requires a mod's OWN machine as the gating method; gnkinetics uses standard Create recipe types; wrong motif
CUT   | gnkinetics ring_gear→aeronautics M-23 (times_suggested=1 REJECT) | reason: REJECT; ring gears are kinetic transmission parts, not structural hull elements; M-24 already covers drivetrain; M-23 wrong
CUT   | gnkinetics planetary/worm→modulargolems M-29 (times_suggested=1) | motif M-29 | reason: single ACCEPT; precision gearing for a mechanical golem is a creative cross-route idea but requires modularGolems to be a pack mod; verify first; insufficient corroboration for KEEP; leave for future triage if golem mod confirmed

---

## irons_spellbooks  — slate: 4 KEEP / 26 CUT / 6 MERGE / 0 DEFER   | anchors after: magic + create + survival (now 3)

KEEP  | irons_spellbooks arcane_essence→magic (arcane-currency bond) | motif M-01 | delivery: recipe (ars_nouveau:imbuement — arcane_essence ↔ source_gem exchange; the two magic currencies convert) | milestone: v0.11.0 | why "of course": the ledger already reserves this bond (reagent-ownership table); M-01 is established for exactly this purpose; unifying the magic web's two currencies is the single most important cross-magic weave (22 times_suggested; opus-corroborated; unanimous ACCEPT)
KEEP  | irons_spellbooks mithril_ore→create (ore-doubling) | motif M-03 | delivery: recipe (create:crushing — mithril ore yields crushed mithril + byproduct; vanilla smelt path stays) | milestone: v0.7.0 | why "of course": mithril is a rare Y<38 ore; crushing it for a secondary pyrium/arcane-dust byproduct rewards the Create player who bothers to vertical-mine (13+5+4+2+2 times_suggested; ACCEPT consensus; opus-corroborated)
KEEP  | irons_spellbooks apothecarist-mob-drops→magic (ritual/transmutation) | motif M-02 + M-11 | delivery: recipe (occultism:spirit_fire or ars_nouveau:imbuement — apothecarist and ice_spider drops become spell-brew reagents or occult essences) | milestone: v0.11.0 | why "of course": killing magic-school enemies yields their reagents; the dangerous apothecarist carries ingredients for the alchemist cauldron — natural danger→reward loop (6+5+3+2+1+1 times_suggested; strong ACCEPT)
KEEP  | irons_spellbooks scrolls→survival (consumption sink) | motif M-26 | delivery: native mechanic (scrolls are consumed on cast, creating repeating demand for scroll materials) | milestone: v0.13.0 | why "of course": scrolls burn on use and can't be stockpiled; a magic scholar who sells scrolls to non-magic players has perpetual re-demand; this is the demand-renewal edge for the magic economy (multiple 1-count rows; ACCEPT consensus; the mechanic is native)
CUT   | irons_spellbooks arcane_essence/spell-scrolls→createaddition:charging M-17 (times_suggested=3 REJECT) | reason: REJECT majority; charging a spell scroll through Create's electric tier is a tonal stretch; no confirmed host method for arcane-scroll FE charging; single plausible row outvoted
CUT   | irons_spellbooks affinity_rings→create:sequenced M-06 (times_suggested=2 REJECT) | reason: REJECT; affinity rings are already Iron's endgame gear; additional sequenced-assembly gate adds friction without narrative payoff; depth guardrail
CUT   | irons_spellbooks alchemist-cauldron→createaddition:charging M-17 (times_suggested=2 REJECT) | reason: REJECT; the cauldron is a fluid multiblock not an electric device; charging via FE is a tonal stretch; one ACCEPT vs two REJECT
CUT   | irons_spellbooks mob-drops→alchemist_cauldron M-02 (times_suggested=2 ACCEPT) | reason: absorbed into KEEP apothecarist M-02+M-11 above; near-duplicate delivery variant
CUT   | irons_spellbooks pyrium→create:crushing M-03 (times_suggested=1 REJECT) | reason: REJECT; pyrium is a crafting alloy not a mined ore; no pyrium ore to crush
CUT   | irons_spellbooks affinity_ring→create:deploying M-20 (times_suggested=2 mixed) | reason: single ACCEPT; ring upgrading via deployer is plausible but single-corroboration; fits no strong thematic "of course"; threshold not met
CUT   | irons_spellbooks spell-scrolls→loot-seed M-34 (times_suggested=2 mixed) | reason: mixed; scroll loot-seeding is a delivery variant of the combat-supply role; emergent from the M-26 consumption KEEP; no separate weave needed
CUT   | irons_spellbooks mithril regional-scarcity M-30 (times_suggested=2 + 1 ACCEPT) | motif M-30 | reason: valid design observation (mithril at Y<38 is scarce) but this is a worldgen-config action, not a recipe weave; no Phase-3 recipe action; GTMOGS config covers it
CUT   | irons_spellbooks arcane_essence→boss-key M-15 (times_suggested=1) | reason: single ACCEPT; gating the inscription_table behind a boss key is a reasonable idea but arcane_essence is already reserved as the M-01 currency bond; adding a boss-key role on the same item creates a reagent-ownership conflict
CUT   | irons_spellbooks scroll→create:sequenced M-06 (times_suggested=1 + 1 ACCEPT) | reason: two single-ACCEPT rows; a blank arcane scroll in sequenced-assembly is plausible but M-06 targets Create-native flagship items; scrolls are magic items; cross-system gating here adds depth on a consumable that should be accessible
CUT   | irons_spellbooks pyrium→create:haunting M-19 (times_suggested=1) | reason: single ACCEPT; pyrium transmuted in soul-fire is creative but single-pass; the M-03 mithril KEEP already covers the Create ore-processing anchor; pyrium haunting would be a third Create weave on the same mod; threshold not met
CUT   | irons_spellbooks pyrium→create:mechanical_crafting M-05 (times_suggested=1) | reason: single ACCEPT; same threshold issue; pyrium is already magic's mid-tier metal; gating it further behind a Create machine would over-gate the magic progression
CUT   | irons_spellbooks pyrium/mithril→ars:enchanting M-10 (times_suggested=1 REJECT) | reason: REJECT; redundant with the M-01 arcane-essence KEEP which already bonds the magic currencies; adding pyrium as a third magic reagent via apparatus would be over-connecting the same mod
CUT   | irons_spellbooks pyrium M-17 charging (times_suggested=1) | reason: single ACCEPT; pyrium FE-charging is a stretch without a confirmed Create-Addition pyrium recipe; threshold not met
CUT   | irons_spellbooks alchemist_cauldron_brew→create:filling M-12 (times_suggested=2+1 ACCEPT) | reason: Create filling of cauldron fluids is already an inbound weave (made-by in dossier); flagging it here as a new Phase-3 weave would be redundant; it exists
CUT   | irons_spellbooks M-29 arcane_essence cross-route (times_suggested=1) | motif M-29 | reason: single ACCEPT; the currency-bond M-01 KEEP already covers the Ars→Iron's linkage; an additional M-29 cross-route would be double-weaving the same bond
CUT   | irons_spellbooks boss-loot M-34 (times_suggested=1+1) | reason: multiple single-ACCEPT rows; the scrolls consumption-sink KEEP (M-26) + apothecarist drop KEEP (M-02) already cover both sides of the combat-supply loop; no separate M-34 weave needed
CUT   | irons_spellbooks MineColonies research M-37 (times_suggested=1+1) | reason: two single-ACCEPT rows; research-gating advanced spell schools is plausible but the three KEEPs already give the mod three anchors; additional weaves not needed at this tier
CUT   | irons_spellbooks endgame-school-scroll→create M-15 (times_suggested=1+1) | reason: two single-ACCEPT rows; the boss-key gate on a Create machine gated on a master scroll is creative but single-pass each; the apothecarist KEEP already creates a boss-danger hook; threshold not met
CUT   | irons_spellbooks alchemist_cauldron_brew+ginger M-16 (times_suggested=1) | reason: single ACCEPT; seasonal winter brew requiring ginger is a good M-16 seasonal-reagent hook BUT it's authored against snowyspirit ginger as the seasonal gate, not irons_spellbooks itself; route to snowyspirit triage (covered there)
CUT   | irons_spellbooks blood-school brew M-22 (times_suggested=1) | reason: single ACCEPT; lunar-event brewing is a strong idea but single-corroboration; the M-26 consumption KEEP already captures the demand renewal; a second survival weave not required at this confidence
CUT   | irons_spellbooks endgame-gear→MineColonies M-28 (times_suggested=1) | reason: single ACCEPT; the highest Iron's gear requiring a colony-researched component is a valid M-28 hook but the mod already has three strong KEEPs; additional weave not needed
CUT   | irons_spellbooks scrolls→numismatics sell (opus REJECT) | reason: REJECT; generic-sellable; ambient endpoint; retired M-09 territory
MERGE | irons_spellbooks arcane_essence M-01 (1-count row same as KEEP) | into: KEEP arcane_essence M-01 | reason: near-duplicate; same motif and from→to; absorbed
MERGE | irons_spellbooks mithril various 1-count rows (M-03, same from→to) | into: KEEP mithril M-03 | reason: multiple near-duplicate rows with identical from→create via M-03; absorbed (5 rows)
MERGE | irons_spellbooks mob-drops→spirit_fire M-11 (times_suggested=6+1+1) | into: KEEP apothecarist M-02+M-11 | reason: spirit_fire is one valid delivery for the same mob-drop→magic weave; absorbed
MERGE | irons_spellbooks apothecarist→occultism M-02 (various 1-count ACCEPT rows) | into: KEEP apothecarist M-02+M-11 | reason: near-duplicate phrasings of the same weave; absorbed
MERGE | irons_spellbooks scrolls consumption various rows | into: KEEP scrolls M-26 | reason: multiple 1-count rows all describing the same native consumption-sink mechanic; absorbed
MERGE | irons_spellbooks alchemist_cauldron_brew exotic-drops M-02 (times_suggested=1) | into: KEEP apothecarist M-02+M-11 | reason: exotic mob drops feeding the cauldron is a variant delivery absorbed by the apothecarist KEEP

---

## naturescompass  — slate: 0 KEEP / 5 CUT / 0 MERGE / 0 DEFER   | anchors after: none — LEAVE

CUT   | naturescompass→create M-05 (times_suggested=6 REJECT) | reason: REJECT majority (4 REJECT vs 3 ACCEPT); the compass is a light QoL biome-finder (everyday-tier tool); gating it behind a Create precision_mechanism violates the depth-scales-with-power guardrail; everyday items do not get deep chains
CUT   | naturescompass→economy M-30 (times_suggested=3+1 mixed) | reason: mixed ACCEPT/REJECT; a biome compass requiring a regional-ore shard is a creative idea but the compass is a utility tool, not a scarce trade good; regional-scarcity on a QoL navigational item misapplies M-30; threshold not met
CUT   | naturescompass→survival M-16 (times_suggested=1 REJECT) | reason: REJECT; tool-use synergy with Serene Seasons is not a material flow or recipe weave; correctly rejected
CUT   | naturescompass→economy M-30 (times_suggested=1, vanilla-crafting framing) | reason: the vanilla crafting recipe is fine for an everyday utility; no Phase-3 action needed; subsumed by above
CUT   | naturescompass M-05 no-change (times_suggested=1 REJECT) | reason: REJECT; correctly notes vanilla crafting is appropriate; no weave needed

Note: naturescompass is a client-side biome-finder with no items of its own beyond the compass; all candidates correctly identify it has no loop-advancing weave. Effectively LEAVE — marking 0 KEEP.

---

## recipe_integration  — LEAVE (bridge layer, not a content mod; all candidates correctly identify this: it fires conditional cross-mod recipes, owns no items of its own, and the Phase-3 action is an audit of which of its live routes fire for this modlist — that audit is a maintenance task, not a weave to author. The two "ACCEPT" audit rows are noted below as the correct action.)

DEFER | recipe_integration active-cross-mod-routes audit | →playtest: conduct a Phase-3 audit of which recipe_integration entries fire given the pack's installed modlist (create:milling, create:pressing, ars_nouveau:scry_ritual, occultism:crushing, createaddition:charging paths); verify active entries don't conflict with KubeJS overrides; inert c:tags referencing uninstalled mods (aether, mekanism, MI, GT…) should be flagged for KubeJS tag-override conflict check

---

## securitycraft  — slate: 3 KEEP / 17 CUT / 0 MERGE / 0 DEFER   | anchors after: create + economy + survival (now 3)

KEEP  | securitycraft Universal-Block-Reinforcer→create (native-method gating) | motif M-05 | delivery: recipe (Universal Block Reinforcer requires Create-fabricated component as consumed input; the reinforcing recipe is gated on Create parts) | milestone: v0.7.0 | why "of course": reinforcing a block to be unbreakable-by-others should demand more than a crafting table; a Create-fabricated reinforcer ties base-defense to the tech spine (17+2+1+1 times_suggested; strong ACCEPT; opus-corroborated)
KEEP  | securitycraft sentry→create (sentry requires CBC/Create components) | motif M-05 | delivery: recipe (sentry crafting requires createbigcannons barrel/chassis parts or Create brass components; both security and cannon mods share the industrial-military aesthetic) | milestone: v0.7.0 | why "of course": a sentry is mechanically a static turret — natural synergy with BigCannons chassis/barrel parts; Create-precision machinery makes automated defense real (7+2+1 times_suggested; ACCEPT consensus)
KEEP  | securitycraft base-defense-installation→economy (service-for-hire) | motif M-33 | delivery: emergent trade (a security specialist installs and configures reinforced-block + sentry + keycard systems for other players' bases) | milestone: v0.9.0 | why "of course": in a PvPvE server, a dedicated security player installs and manages fortifications for others; labor value flows player-to-player; no NPC vendor (3 times_suggested; ACCEPT consensus)
CUT   | securitycraft reinforced-block→keycard-requires-coin M-08 (times_suggested=10 REJECT) | reason: REJECT consensus (9 REJECT vs 1 ACCEPT); Numismatics coins are currency, not crafting material; using coin as a recipe ingredient is a coin sink, which is a retired M-14/M-21 pattern; correctly rejected across the board
CUT   | securitycraft crystal_quartz→create:crushing M-04 (times_suggested=4 REJECT) | reason: REJECT consensus; the crystal quartz is primarily functional security deco, not loose decorative material; M-04 is for deco blocks, not functional-block recycling
CUT   | securitycraft reinforced-blocks→MineColonies M-28 (times_suggested=4) | motif M-28 | reason: ACCEPT consensus BUT subsumed: the M-33 service-for-hire KEEP already gives the economy anchor; a separate M-28 colony-cheaper-basics for reinforcing would add a third economy weave on top of M-33; redundant; CUT (mod already at 3 anchors)
CUT   | securitycraft loot-seed M-34 (times_suggested=4 mixed REJECT) | reason: REJECT majority; SC's loot tables are for its own placed mines/traps; seeding third-party drops there is a theme clash
CUT   | securitycraft reinforced-blocks→create:crushing M-04 (times_suggested=3 REJECT) | reason: REJECT; reinforced blocks are functional, not decorative; M-04 wrong motif
CUT   | securitycraft sentry→create:sequenced M-06 (times_suggested=3 REJECT) | reason: REJECT majority; M-06 is for Create's own endgame flagship items; securitycraft's sentry is better anchored via M-05 KEEP above; double-gating the sentry in both M-05 and M-06 would over-gate
CUT   | securitycraft keycard/scanner→config-tie M-16 (times_suggested=1 REJECT) | reason: no-motif; config compat link only; correctly rejected
CUT   | securitycraft crystal_quartz→ars:imbuement M-10 (times_suggested=1+1 REJECT) | reason: REJECT; securitycraft is hard-tech/dieselpunk; routing quartz through arcane infusion is a tonal clash; correctly rejected
CUT   | securitycraft reinforced-block→survival anchor (times_suggested=1 ACCEPT) | reason: single ACCEPT; "PvPvE defense is survival pressure" is emergent from the game's PvP design, not an authored weave; captured by the M-33 service KEEP
CUT   | securitycraft block-mines→loot-seed M-02 (times_suggested=1 REJECT) | reason: REJECT; mines detonate, they don't have a loot table worth seeding; correctly rejected
CUT   | securitycraft keycard-reader→create:sequenced M-06 (times_suggested=1 mixed) | reason: single ACCEPT; the keycard reader assembled via sequenced-assembly is a reasonable depth add but M-05 KEEP already covers the Create anchor; second Create weave on the same mod over-gates
CUT   | securitycraft block_reinforcing M-08 (times_suggested=1 REJECT) | reason: REJECT; per-use alloy input on the reinforcing mechanic is not how block_reinforcing works; correctly rejected
CUT   | securitycraft block_reinforcing on magic blocks (no-motif REJECT) | reason: no-motif; reinforcing an arcane shelf is arbitrary; correctly rejected
CUT   | securitycraft M-29 cross-route (opus, times_suggested=1) | motif M-29 | reason: single ACCEPT; gating strongest reinforcing on a magic reagent is a M-29 cross-route; the two Create KEEPs already tie the mod to the Create pillar; a magic cross-route would be a fourth connection; threshold not met; note for future weave if the mod needs a magic bridge
CUT   | securitycraft keycard limited-use→M-26 (times_suggested=1+1 ACCEPT) | motif M-26 | reason: two single-ACCEPT rows for the keycard's finite-use consumption mechanic; the native wear mechanic is real but keycards are a minor consumable; not load-bearing enough to earn a separate survival anchor; emergent from PvP design
CUT   | securitycraft keycard→MineColonies M-28 (times_suggested=1) | reason: single ACCEPT; subsumed by M-33 economy KEEP; the colony-request path is a delivery variant already captured
CUT   | securitycraft advanced-scanner→MineColonies-research M-28 (times_suggested=1) | reason: single ACCEPT; same as above; subsumed
CUT   | securitycraft regional-scarcity M-30 (times_suggested=1) | motif M-30 | reason: single ACCEPT; keycard circuits requiring regional ores is a valid design note but it's a worldgen-config decision, not a recipe weave; no Phase-3 action
CUT   | securitycraft block-mines consuming scarce ore M-26 (times_suggested=1+1 ACCEPT) | motif M-26 | reason: two single-ACCEPT rows; diamond mine costs a real diamond is interesting but is emergent from the trap's native recipe; no cross-system authoring needed
CUT   | securitycraft numismatics sell (opus REJECT) | reason: REJECT; generic-sellable; ambient endpoint; retired M-09 territory

---

## simplehats  — slate: 2 KEEP / 12 CUT / 1 MERGE / 0 DEFER   | anchors after: survival + economy (now 2)

KEEP  | simplehats grab-bags→survival (boss loot-seed) | motif M-34 | delivery: loot-seed (datapack — seed rare hat grab-bags into boss/hard-mob loot tables; Mowzie's / Cataclysm / Yokai boss chests) | milestone: v0.13.0 | why "of course": defeating a Tengu or an Ignis boss has a small chance to yield a themed rare hat bag — cosmetic reward from dangerous mobs that the combat specialist can trade to collectors (8+3+2+1 times_suggested; ACCEPT consensus; REJECT rows are the "rare hat as economy good" reframings, not the loot-seed itself)
KEEP  | simplehats custom_hatscraps→survival (consumption-sink recycling) | motif M-26 | delivery: native mechanic (duplicate hats feed back as hatscraps toward a new bag; the scrap-and-reroll loop sustains mob-kill demand indefinitely) | milestone: v0.13.0 | why "of course": every duplicate hat feeds the scrap loop; players keep farming mobs to upgrade bags, sustaining the hostile-mob demand renewal with no stockpile ceiling (2 times_suggested; ACCEPT)
CUT   | simplehats hat-scraps→create:crushing M-04 (times_suggested=4 REJECT) | reason: REJECT consensus; crushing a hat into raw/gravel is tonally absurd; M-04 targets metal/stone deco not fabric cosmetics; correctly rejected across four rows
CUT   | simplehats rare-hat→economy M-34 (times_suggested=4 mixed REJECT) | reason: REJECT majority; rare hat as a boss-drop that is then "sold" is ambient endpoint behavior (M-09 retired territory); the loot-seed KEEP covers the actual authoring; the "economy" framing without a distinct demand-gate is not a separate weave
CUT   | simplehats hatscraps→ars:imbuement M-10 (times_suggested=2 REJECT) | reason: REJECT; cosmetic scraps have no arcane resonance; tone clash; correctly rejected
CUT   | simplehats hat-scraps→spirit_trade M-18 (times_suggested=1 REJECT) | reason: REJECT; tonally absurd; spirits trading cosmetic fabric
CUT   | simplehats hatscraps→create:milling M-04 (times_suggested=1 REJECT) | reason: REJECT; same as crushing; cosmetic material does not fit M-04
CUT   | simplehats rare-hats→numismatics player-trade (vanity goods, ambient) | reason: "rare hats are tradeable" is the ambient endpoint; the M-34 loot-seed KEEP is the authored weave; no additional economy weave needed
CUT   | simplehats hats→MineColonies research M-37 (times_suggested=1 REJECT) | reason: REJECT; cosmetic hats behind research is a tone clash; knowledge-gate is for capabilities
CUT   | simplehats hatscraps→economy M-26 (times_suggested=1+1 REJECT) | reason: REJECT; hat-scraps are cosmetic recycling; M-26 requires spending against pressure; the self-contained scrap loop is its own KEEP not a M-26 economy weave
CUT   | simplehats hat-dyeing→create M-04 (times_suggested=1 REJECT) | reason: REJECT; dyeing a cosmetic hat through a Create method is forced and tonally wrong
CUT   | simplehats hats→any-Create/magic (times_suggested=1 REJECT) | reason: REJECT; cosmetic hats have no coherent routing through Create or magic
CUT   | simplehats hat→player-to-player trade M-33 (times_suggested=1 REJECT) | reason: REJECT; M-33 is a specialist performing *work* (enchanting, cargo run, colony contract); trading a hat is a goods sale not a labor service
MERGE | simplehats grab-bag→survival M-02 (times_suggested=2 ACCEPT) | into: KEEP grab-bags M-34 | reason: M-02 is mob-drop→magic/economy reagent; the grab-bag here is the same mob-drop delivery but tagged M-02; the loot-seed KEEP above (M-34) covers the same from→to; absorbed

Note: simplehats supplementaries:soap_clearing row (times_suggested=1 ACCEPT) — this is a dye-reset method from Supplementaries, not a survival or economy weave; a cosmetic-reset step earns no new anchor; CUT as single-pass with no system advance.

---

## snowyspirit  — slate: 3 KEEP / 19 CUT / 2 MERGE / 0 DEFER   | anchors after: create + survival (now 2)

KEEP  | snowyspirit ginger→create (milling) | motif M-12 | delivery: recipe (create:milling — ginger root milled into ground ginger spice; the seasonal crop feeds the automated food-processing chain) | milestone: v0.7.0 | why "of course": milling dried ginger on a Create millstone is the most natural processing step for a root crop; seasonal crops feeding the Create food chain is exactly what M-12 exists for (19+5 times_suggested; opus-corroborated; strong ACCEPT)
KEEP  | snowyspirit ginger/eggnog/gingerbread→survival (seasonal gate) | motif M-16 | delivery: KubeJS recipe condition (ginger is a Serene Seasons winter-harvest crop; a winter-batch recipe — Create:mixing warming tonic or FD cooking — requires ginger only available in cold months) | milestone: v0.13.0 | why "of course": ginger only ripens in cold months — stock the root cellar before the thaw or your winter tonic recipe stalls; this is precisely the seasonal lever the pack wants more of (7+5+3+2+2+1+1+1 times_suggested; strong ACCEPT; opus-corroborated)
KEEP  | snowyspirit gingerbread/eggnog→survival (food-processing chain) | motif M-12 | delivery: recipe (farmersdelight:cooking or extradelight:oven — gingerbread cookies and eggnog slot into the Farmer's Delight food web as high-effort comfort foods) | milestone: v0.13.0 | why "of course": gingerbread and eggnog are multi-ingredient festive foods that naturally belong in the Farmer's Delight cooking chain; the winter crop feeds the survival food pressure (7+3+1+1 times_suggested; ACCEPT consensus)
CUT   | snowyspirit sled→aeronautics (various, times_suggested=10+4+2+1+1 REJECT) | reason: REJECT consensus; the sled is snow terrain traversal, not an aerial vehicle; no motif covers ground-vehicle→aeronautics; correctly rejected across all rows
CUT   | snowyspirit gingerbread-blocks→create:crushing M-04 (times_suggested=4+2+1+1+1 REJECT) | reason: REJECT majority; gingerbread and candy blocks are food-palette decorative items, not stone/metal deco; M-04 applies to metal/stone blocks; food-material deco produces no valuable byproduct; correctly rejected
CUT   | snowyspirit gingerbread_golem→magic M-02/M-11 (times_suggested=2+1+1 REJECT) | reason: REJECT; the gingerbread golem is a whimsical holiday creature; routing it as a ritual reagent source or feeding it to spirit_fire is a tone clash (silly→solemn); correctly rejected
CUT   | snowyspirit eggnog→vinery/alcohol-industry M-35 (times_suggested=2+1) | motif M-35 | reason: two-three ACCEPT rows; eggnog aging is a nice M-35 hook but M-35 is for maturation/aging specialization; eggnog is already a winter-seasonal food captured by the M-16 KEEP; adding M-35 on the same output would be a third Create/survival weave on one seasonal mod; threshold not met
CUT   | snowyspirit ginger→ars:imbuement M-10 (times_suggested=1 REJECT) | reason: REJECT; ginger as arcane infusion reagent is a stretch; no magical tradition in the pack uses ginger as a catalyst
CUT   | snowyspirit gingerbread_cookie→magic M-10 (times_suggested=1 REJECT) | reason: REJECT; holiday cookie as magic infusion catalyst is thematically nonsensical
CUT   | snowyspirit eggnog→lunar-event M-22 (times_suggested=1 REJECT) | reason: REJECT; eggnog has no magical resonance; lunar-event gate on a dairy drink is arbitrary
CUT   | snowyspirit candy_cane/gumdrop→loot-seed M-34 (times_suggested=1 REJECT) | reason: REJECT; candy decor is festive flavor, not combat-supply context; M-34 is for danger/boss drops
CUT   | snowyspirit gingerbread→bountiful M-26 (times_suggested=1 REJECT) | reason: REJECT; decor blocks as bounty objectives; implausible demand; correctly rejected
CUT   | snowyspirit ginger biome-restriction M-30 (times_suggested=1) | motif M-30 | reason: single ACCEPT; ginger's biome restriction (sparse jungle/cold biomes) is a valid regional-scarcity design note but this is an in-game biome spawn behavior, not a GTMOGS ore-gen config action; emergent from world generation; no Phase-3 recipe weave needed
CUT   | snowyspirit gingerbread_cookie→ars/occultism (times_suggested=1 REJECT) | reason: REJECT; gingerbread as a magical catalyst is thematically nonsensical
CUT   | snowyspirit eggnog food-consumption M-26 (times_suggested=1) | reason: single ACCEPT; winter-only eggnog creates seasonal demand (valid M-26) but this is emergent food-consumption behavior, not a new cross-system weave; the M-16 KEEP already captures the seasonal demand pressure
CUT   | snowyspirit gingerbread→MineColonies M-28 (times_suggested=1+1) | motif M-28 | reason: two single-ACCEPT rows; colony tavern stocking winter menu is a charming idea but single-corroboration; the mod already has two anchors; the colony demand is emergent from food production
CUT   | snowyspirit gingerbread_golem drops→create M-02 (times_suggested=1 REJECT) | reason: REJECT; festive cosmetic mob drops are trivial; correctly rejected
CUT   | snowyspirit sled→create:mechanical_crafting M-05 (times_suggested=1 mixed) | reason: single mixed row; gating the sled behind Create fabrication adds friction to a whimsical snow toy; depth guardrail (everyday QoL item)
CUT   | snowyspirit ginger→farmersdelight:cutting M-12 (times_suggested=1 REJECT) | reason: single-pillar (both endpoints are survival); does not earn a new cross-system anchor; correctly rejected
CUT   | snowyspirit gingerbread seasonal deco→emergent trade M-33 (times_suggested=1 REJECT) | reason: REJECT; "seasonal deco is sellable" is ambient M-09 endpoint
MERGE | snowyspirit ginger M-16 (opus rows, times_suggested=2+1) | into: KEEP ginger M-16 | reason: near-duplicate seasonal-gate rows with identical from→to via M-16; absorbed
MERGE | snowyspirit eggnog M-12 (times_suggested=3+1+1+1) | into: KEEP gingerbread/eggnog M-12 | reason: eggnog-specific M-12 rows are variants of the same FD/ExtraDelight food-processing anchor; absorbed

== BATCH COMPLETE ==
