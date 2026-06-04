# Phase 2 candidates — chunk-09 (pass-12, context-fed)

---

## create   [anchors: Create (1 — is the pillar)]

LEAVE — Create is the method hub; it has no 2nd pillar to earn. By design it IS the spine. All prior passes
correctly record this; no new observation adds value here.

---

## extradelight   [anchors: survival, Create (2)]

Prior coverage: M-12 (create:milling grain→flour into extradelight chain) and M-09 (feasts→coin) both
well-established. No new edge needed.

NEW: CHALLENGE to the M-09 ACCEPT rows — several passes accept "feasts→numismatics sell" as extradelight's
economy anchor, but the *from* is ambiguous. Extradelight feasts are assembled in the Oven from intermediate
ingredients; they aren't a discrete item one player makes surplus of like cheese. The more reliable M-09
surface is `extradelight:apple_cider` (a fluid reduced via the Evaporator — Create can fill a bucket, the
cider is a discrete sellable luxury) or the dried-herb outputs of the Drying Rack (small, fungible, stackable
trade goods). Feast blocks are hard to price fairly. Recommend the accepted rows be narrowed to:
  - from: extradelight:apple_cider / fruit_syrup (evaporator fluid output) | via: numismatics vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: reduce a bucket of orchard juice into sellable bottled cider — the tavern stocks it
  - from: extradelight feast dishes (e.g. roast_chicken) | via: numismatics vendor | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: REJECT | reason: feasts are multi-step multi-ingredient assembled pieces; pricing a vendored feast is a balance trap and it's already consumed by the colony restaurant pipeline, not the player-run market

NEW: unnoticed method surface — `extradelight:mortar` grinds seeds/coffee/flowers; foreign magic-mod herbs
(e.g. ars_nouveau archwood leaves, occultism silver-moon-grass) could route through the Mortar as a
plausible grinding step before ritual/imbuement. This is an M-12 processing-chain pull opening a magic
bridge that no prior pass mentioned.
  - from: magic-mod herb/petal (ars_nouveau archwood leaves / occultism silverleaf) | via: extradelight:mortar | to: magic | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: grind archwood leaves in the mortar to yield a powdered arcane reagent — culinary kit doing occult prep work; player finds this in JEI and makes the connection

---

## occultengineering   [anchors: Create, magic (2)]

Prior coverage: sole existing row is a weak ACCEPT for sterling_silver→numismatics M-08. Well-covered.

NEW: CHALLENGE to the M-08 sterling_silver row (marked WEAK in the dossier and only appears once at times=0
in the table). The challenge: `occultengineering:sterling_silver` is already tagged `c:ingots/sterling_silver`
which is the *same* metal occultism uses as a key reagent (`occultism` silver ingots for rituals). Routing
it to the numismatics mint would drain a magic reagent into the coin economy — potential soft-locking if
players arbitrage. This is a reagent-ownership risk (occultism silver is a ritual input; minting it to coin
could deplete ritual supply). Verdict: keep this row as REJECT until the 0.9 economy update explicitly
reviews silver-coin denominations. No new ACCEPT for occultengineering needed; at 2 pillars it's complete.
  - NEW: from: occultengineering:sterling_silver_ingot (c:ingots/sterling_silver) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: sterling_silver is also occultism's primary ritual reagent; minting it to coin risks soft-locking ritual progression if the coin economy drains ritual supply — reagent conflict, not just tone

---

## numismatics   [anchors: economy, Create (2)]

LEAVE — numismatics is the economy hub/destination. No new edge needed; it is the sink. All prior passes
correctly identify this. No new observation.

---

## aeronautics_bundled   [anchors: aeronautics (1) — bundle wrapper]

Prior coverage: none in CANDIDATES.md (0 items registered under this ns). Correct: the bundle jar registers
nothing; real weaving belongs on the `aeronautics` dossier.

NEW: OBSERVATION — the bundle has 0 candidates across all 12 passes, which is correct behavior. However,
one risk worth flagging: aeronautics_bundled's de-facto Create 2nd pillar claim (component crafting routes
through Create) only holds if the `aeronautics` namespace actually has M-06/M-23/M-24 edges authored. If
those edges sit on aeronautics_bundled in the audit, the wrong namespace gets credit. No action needed here
but the merge should verify aeronautics (not aeronautics_bundled) carries the ACCEPT rows.

LEAVE — no candidates to add; correct.

---

## aeronautics_dyeable_components   [anchors: aeronautics (1) — cosmetic skin layer]

Prior coverage: one times=1 REJECT: colored levitite via create:toolbox_dyeing — correctly rejected (the
dye step is already vanilla crafting + offhand; adding a toolbox_dyeing recipe is gilding with no player
benefit).

NEW: CHALLENGE to the singleton REJECT — the prior rejection framing was "no-motif." The better rejection
reason is: this mod's entire job is a cosmetic permutation of aeronautics parts. Giving it a 2nd pillar
via any recipe edge would be a non-edge (the dossier author correctly says LEAVE). The correct answer is
LEAVE, not REJECT-for-motif-absence:
  - LEAVE — cosmetic dye-variant addon; forcing any Create/economy/magic edge would be a non-edge. The mod's
    purpose is exhausted by its single aeronautics anchor. One pillar is acceptable for a cosmetic skin.

---

## alcohol_industry   [anchors: Create, survival (2)]

Prior coverage: times=1 ACCEPT: numismatics M-09 (spirits as sellable luxury) — one pass caught it.
times=1 ACCEPT: extradelight:vat/mixing_bowl routing M-12 — one pass noted it.
times=1 REJECT: alcohol_base→ars_nouveau:imbuement M-10 — correctly rejected (alcohol isn't a magic reagent).

NEW: the M-09 ACCEPT (spirits→coin) is undersold. Alcohol Industry is the *only* Create-native distillery
in the pack; bottled beer/vodka/whiskey/tequila are exactly the kind of processed luxury good M-09 targets
(multiple Create processing steps → a finished status-effect consumable). The one-pass confidence is
artificially low. This should be a strong economy anchor — stronger than the ACCEPT confidence (times=1)
implies:
  - NEW: from: alcohol_industry:beer / vodka / whiskey / tequila (finished bottled spirits) | via: numismatics:vendor | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the local distillery puts whiskey on the vendor shelf; Create-powered brewing becomes a coin source

NEW: unnoticed integration — the Alcohol Boiler consumes Alcohol Base fluid, which is assembled via
create:filling + create:mixing. The missing link: `vinery:wine_fermentation` and `extradelight:vat` are
both in the methods palette. Beer/ale inputs (barley from farm_and_charm, hops if present) could route
through `extradelight:vat` as a fermentation pre-step before the Boiler, giving alcohol_industry a stronger
survival↔Create↔distillery chain (the wort ferments in the kitchen vat before entering the industrial
boiler). This is M-12 and already has one times=1 ACCEPT but was never articulated as a two-step chain:
  - NEW: from: farm_and_charm:barley + water (fermentable inputs) | via: extradelight:vat (fermentation pre-step) → alcohol_industry:alcohol_boiling | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mash barley in the kitchen vat, then feed the wort to the industrial boiler — the brewing chain reads as one web

---

## ars_nouveau   [anchors: magic (1)]

Prior coverage: heavy. M-02 (crop/mob surplus → vitalic/agronomic sourcelink — native, no recipe) well-
established at times=2 ACCEPT. M-01 (imbuement as arcane currency hub) established. M-09 source_gem→coin
correctly REJECTed throughout.

NEW: OBSERVATION on times=1 ACCEPT for `ars_nouveau:crush` as a Create M-12 routing — "foreign ore/mineral
→ ars_nouveau:crush → create chain." The prior pass had this right directionally but inverted the method:
ars_nouveau:crush is a *magic* crushing method (it outputs Ars crushed materials, not Create crushed_ore).
Routing foreign ore THROUGH ars_nouveau:crush is an inbound-to-magic weave (M-03 analogue on the magic
side), not an outbound-from-magic weave. This is fine IF the output feeds a magic recipe (source_gem path).
It should NOT be cited under M-12 (processing-chain pull toward Create/economy) — it's an M-01/M-10
inbound. The row should be re-tagged M-10 or M-01, not M-12:
  - CHALLENGE: from: foreign ore/mineral | via: ars_nouveau:crush | to: create | motif: M-12 | verdict: REJECT | reason: ars_nouveau:crush outputs magic crushed materials, not Create crushed_ore; this is inbound-to-magic (M-10 or M-01 territory), not a Create/economy processing chain

NEW: the Drygmy (Drygmy Charm passive mob-drop collector) is an Ars method that hasn't been explicitly
called out as a survival/economy bridge: it passively collects drops from nearby mobs (anything with a
Drygmy Charm + Mob Mantle). If the pack routes mob-drop rare reagents through the Drygmy farm (e.g.
undergroundworlds:spider_fang, rottencreatures:frozen_rotten_flesh), the Ars Drygmy becomes a magic-
automation pull on survival mob drops — a stronger M-02 integration. No prior pass named the Drygmy
explicitly as the connective mechanism:
  - NEW: from: pack mob-drop reagents (any c:mob drops in the vicinity of a Drygmy farm) | via: ars_nouveau:drygmy_charm (passive Drygmy collection — not a recipe-type, but a recognized non-recipe mechanic) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: set up a Drygmy menagerie near the mob farm; magic automation harvests the drops that feed rituals

---

## astikorcartsredux   [anchors: survival (1)]

Prior coverage: times=2 REJECT (plow/reaper iron sheets via create:pressing M-05 — weak forced edge).
times=1 REJECT (supply cart M-21 villager trade — correctly rejected, M-21 is provisional/leans no).

The dossier author says LEAVE; dossier and all prior passes agree.

NEW: CHALLENGE to the times=2 REJECT framing — the row says "REJECT" but records it under M-05
(native-method gating). It should be LEAVE, not REJECT-for-weak-edge, because M-05 would mean the cart
itself is built in its own machine gated on Create parts — that's not what's proposed. The proposal is
simply using create:pressing to make iron sheets that feed a crafting recipe, which is just normal
resource prep, not a meaningful weave. Re-framing:
  - CHALLENGE: the plow/reaper pressing row is mis-categorized as M-05 REJECT. It should be LEAVE (the
    carts/implements are crafting-table assembled from planks+iron; adding a Create pressing prerequisite
    is gratuitous cost-gating with no new connection — not a 2nd pillar weave at all).

LEAVE — no genuine 2nd pillar candidate; survival anchor stands alone. The dossier is correct.

---

## bits_n_bobs   [anchors: Create, survival (2)]

Prior coverage: times=1 ACCEPT: tile/chair blocks → create:crushing M-04. The dossier itself suggests this
as optional reinforcement.

NEW: OBSERVATION — the times=1 ACCEPT for M-04 (crushing tile/chair back to crushed stone) is valid but
trivially weak. A more interesting reinforcement: `bits_n_bobs:chain_pulley_magnet` — the magnet variant
of the chain pulley picks up items magnetically. This is a functional behavior note, not a recipe weave.
The actual new observation is about the **nixie board**: bits_n_bobs:*_nixie_board can display redstone
signals. Combined with `create:analog_lever` / `sereneseasons:season_sensor` redstone output, the nixie
board becomes the display face for a Create automation dashboard. This isn't a recipe weave, so it fits
no motif — but it is a legitimate second-pillar deepening (the Create kinetics + display functionality
reads as a CREATE mod, not survival, and the display utility is what earns the survival anchor). No new
recipe edge needed; at 2 pillars this is done.

OK — connections sound. The M-04 ACCEPT row (tile blocks → crushing) is the right reinforcing edge; no
additional candidates. At ≥2 pillars.

---

## cbc_at   [anchors: Create, aeronautics (2)]

Prior coverage: times=1 ACCEPT (heavy-autocannon/rocket-pod behind boss-drop gate M-15 for Create depth).
times=1 REJECT (munitions gunpowder/propellant via tfmg:coking M-12 — correctly rejected; TACZ not cbc_at).

NEW: CHALLENGE to the times=1 ACCEPT for M-15 (boss-drop gate on heavy autocannon). The M-15 row says
"boss-drop gate (M-15) | to: create." But cbc_at already anchors Create via create:cutting (its existing
made-by method — barrel milling is done via create:cutting). An M-15 gate would deepen the Create
pillar, not establish it. The useful framing is: does the boss gate make *thematic sense* for a gun
barrel? The heaviest artillery tier (nethersteel heavy autocannon) requiring a boss drop (e.g. a
cataclysm boss forge component) is defensible — big guns need special alloys. Accept with narrowed scope:
  - NEW: from: cbc_at:nethersteel_heavy_autocannon_barrel (top tier) | via: boss-drop ingredient gate in create:cutting or create:sequenced_assembly chain | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the nethersteel barrel needs a shard of the forge boss's alloy — heavy artillery has a price in blood

NEW: unnoticed economy angle — cbc_at produces munitions (ap_rocket_item, apds_item, armor_piercing_*
caseless rounds). Bulk munition production is exactly the M-09 luxury-good→coin surface: a stockpile of
autocannon rounds is a trade commodity for a PvPvE pack. No prior pass mentioned selling munitions as an
economy weave for cbc_at specifically (the existing M-09 ACCEPT rows are for createimmersivetacz, not
cbc_at):
  - NEW: from: cbc_at assembled munitions (ap_rocket_item / apds_item / armor_piercing_cartridge, bulk) | via: numismatics:vendor (sell stockpiled munitions) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the armory sells autocannon shells by the crate; munition specialist role in the crew economy

---

## chefsdelight   [anchors: survival, economy (2)]

Prior coverage: times=1 ACCEPT (Cook/Chef villager meal sales → numismatics M-09). times=1 REJECT (M-21
villager trade → numismatics — correctly rejected as provisional).

The ACCEPT and REJECT are for functionally the same idea: the Cook/Chef villager sales wired to
numismatics. The ACCEPT framing is the correct one (numismatics vendor price via KubeJS to make Cook
trades pay/cost coin = M-09), while M-21 (villager-trade seam) was correctly rejected as provisional.

NEW: CHALLENGE — the times=1 ACCEPT for chefsdelight M-09 is the right anchor but the implementation
note ("KubeJS trade table override") is non-trivial. There's a subtler integration that no pass captured:
chefsdelight's Cook/Chef villager profession *workstations* (the Skillet and Cooking Pot) are themselves
Farmer's Delight items already in the pack. If Create-processed ingredients (e.g. flour milled by Create,
coffee milled by Create) are the inputs Cook/Chef villagers accept in their trades, the chain reads:
Create milling → FD/extradelight ingredient → Cook villager buys it for coin → M-08/M-09 chain. This
is a two-step weave (Create mills → Chef buys it) that threads chefsdelight into the Create spine without
any recipe authoring (just price-list config):
  - NEW: from: Create-milled ingredients (flour c:foods/dough, ground_coffee) | via: chefsdelight Cook/Chef villager buy-trade (villager accepts the ingredient for coin) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: the village Cook buys freshly milled flour from the mill district; Create processing feeds village trade, not just player food

OK — at ≥2 pillars; the Cook→numismatics M-09 ACCEPT plus this new M-12 Create-ingredient trade gives
chefsdelight a clear two-web read.

---

## cmpackagecouriers   [anchors: Create, aeronautics (2)]

Prior coverage: zero rows in CANDIDATES.md. The dossier says LEAVE (already ≥2, no extra edge needed).

NEW: OBSERVATION — the absence from CANDIDATES.md is correct (11 prior passes all agreed LEAVE). Validating
this is the right call: cmpackagecouriers adds the cardboard plane, which is a *logistics* layer on top of
Create packages. Forcing it into economy (sell packages?) or magic would be non-edges. The Create + aero-
nautics anchors are clean and established via made-by (create:cutting + create:deploying). No new edge.

LEAVE — correct at ≥2 pillars. No candidate needed.

---

## companions   [anchors: survival (1)]

Prior coverage: well-represented.
- Crystallized Blood → occultism:spirit_fire / ars imbuement: times=2 ACCEPT (M-11 + M-10)
- soul_gem → ars_nouveau:imbuement: times=1 ACCEPT (M-10)
- relic_gold → numismatics M-09: times=2 ACCEPT
- relic_gold → create:sequenced_assembly M-15: times=1 ACCEPT
- copper/nether/end coin → numismatics bridge: times=1 REJECT (correctly — two coin systems competing)
- Tesla/voltaic deco → create:crushing M-04: times=2 REJECT (correctly — no thematic basis)
- crystallized_blood → createaddition:charging M-17: times=1 REJECT (correctly — blood isn't electricity)

NEW: unnoticed method surface — the companions:soul_furnace recipe type is registered (it's in the methods
palette). No prior pass proposed routing a *foreign mod's* material INTO the Soul Furnace. The Soul Furnace
converts mob-drops into soul-state reagents. Foreign drops already in the pack (e.g. rottencreatures mob
drops, mowziesmobs drops) could have Soul Furnace recipes, extending the Soul Furnace beyond companions'
own drops and threading it into the M-02/M-11 web. This is methodologically sound (M-02: mob-drop reagent
sink, consumed via the mod's own method = companions:soul_furnace):
  - NEW: from: foreign mob drops from pack combat mods (e.g. rottencreatures:frozen_rotten_flesh, mowziesmobs variants) | via: companions:soul_furnace | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: any creature with a corrupted essence distills in the Soul Furnace — the alchemist finds uses for every kill

NEW: CHALLENGE to the relic_gold → M-15 (boss-key gate into Create recipe) ACCEPT. The relic_gold item
drops from the Sacred Pontiff boss. Using it as an ingredient in a Create recipe (M-15) is mechanically
sound, but thematically: the Sacred Pontiff is a gothic-alchemy boss; its relic_gold should gate a magic-
tier recipe (Occultism ritual or Ars apparatus) before a Create one. M-15's own caveat says "must stay
thematically sensible." Relic Gold → Create gate is a slight tone mismatch (alchemy boss → industrial
machine part). Prefer relic_gold → ars_nouveau:enchanting_apparatus or occultism:ritual as the primary
gate, with M-15 reserved for the mechanical-tier unlock:
  - CHALLENGE: from: companions:relic_gold → create:sequenced_assembly M-15 | verdict: soft-reject for tone | reason: relic_gold is the Sacred Pontiff's alchemical relic; a Create machine gate is a tone mismatch — prefer routing it through ars_nouveau:enchanting_apparatus (M-10) as the high-value arcane reagent first

== CHUNK COMPLETE ==
