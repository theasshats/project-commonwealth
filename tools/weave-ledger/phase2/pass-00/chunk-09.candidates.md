# Phase 2 candidates — chunk-09

## create   [anchors: Create (1)]
OK — hub, weave TO it.
The `create` dossier correctly identifies this as the method-library destination that all other mods weave through — M-03, M-04, M-05, M-06, M-08, M-12, M-13, M-19, M-20 all ride Create methods. No outgoing edges should be authored onto Create itself; the direction is always inward. The dossier's "N/A as a recipient" note is sound.

## extradelight   [anchors: survival, Create (2)]
OK — connections sound.
Both existing connections are justified: survival is the primary fit (146+ meals, feast infrastructure, kitchen stations), and Create as the 2nd is well-grounded — `create:mixing` is already an inbound weave method (made-by list) delivering fluids/ingredients into ExtraDelight's kitchen chain. The dossier correctly characterises this as Create's downstream rather than a parallel kitchen. No arbitrary theme mismatch.

REWORK: None required. The dossier candidate for a 3rd pillar (feasts → economy via M-09) is coherent and noted appropriately. If pursued at milestone time, it should be restricted to the highest-tier feasts only (not everyday dishes) to respect the "depth scales with power" rule — no rework needed now, just a reminder for authoring.

## occultengineering   [anchors: Create, magic (2)]
OK — connections sound.
Both pillars are by construction: the mod IS the Create × Occultism bridge, with 8 distinct inbound Create methods (compacting, filling, haunting, item_application, mixing, pressing, plus occultism:ritual and spirit_fire). The vibe pairing is the correct industrial-eldritch fusion. The reserved reagent (`occultengineering:spirit_solution`) is correctly noted in the reagent-ownership table.

REWORK: None required. The weak M-08 3rd-pillar note (sterling_silver → coin) is tagged WEAK and not proposed as a firm candidate, which is appropriate — it would be a thin connection with no strong narrative, and sterling silver's rarity/depth doesn't warrant a minting line unless the economy pillar specifically wants a magical alloy coin.

## numismatics   [anchors: economy, Create (2)]
OK — hub, weave TO it.
Numismatics is the economy pillar's keystone and a Create addon (crafted via Create, thematically industrial brass-and-cog). The dossier correctly notes it as the weave destination, with coins reserved in the reagent-ownership table. The direction is always inward (other mods sell goods → vendors/depositors). No outgoing edges needed.

REWORK: None required. The dossier observation that weaving belongs foreign→numismatics (not numismatics→foreign) is accurate and should remain as the guiding constraint.

## aeronautics_bundled   [anchors: aeronautics (1)]
OK — connections sound (wrapper/spine note accepted).
This is the distribution wrapper: 0 blocks, 0 items, 0 registered recipe types. The dossier correctly defers weaving to the `aeronautics` namespace dossier. Its de-facto Create dependency (all ship components built through Create methods) is noted as a real but informal 2nd anchor. The observation that the bundle itself registers nothing is jar-grounded.

REWORK: None required. The note "weaving belongs on the aeronautics namespace dossier, not this bundle wrapper" is the right call. No candidates proposed here.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
REWORK: Anchor count is 1 (aeronautics only). The dossier correctly holds back on forcing a 2nd pillar given the purely cosmetic nature of this mod. However, the dossier lists it at 1 pillar with a "LEAVE" posture — that is correct. The cosmetic dye-permutation is a sanctioned support role and shouldn't be force-woven.

One optional note: the dye step could be routed through `create:toolbox_dyeing` (Create's native dye method, already registered) to give it a light Create touch — the Create Toolbox already dyes certain items. This would be a cosmetic-only micro-integration rather than a real pillar weave.
- from: colored levitite/tire | via: create:toolbox_dyeing | to: Create | motif: no-motif (cosmetic dye routing doesn't fit any motif cleanly) | power: everyday | tone: ok | verdict: REJECT | reason: cosmetic dye steps via Create toolbox are marginal; no motif applies; forced Create edge just to hit a pillar count would be a defect per guardrails.

LEAVE — purely cosmetic dye-palette layer for aeronautics; no coherent 2nd pillar without forcing.

## alcohol_industry   [anchors: Create, survival (2)]
OK — connections sound.
Both existing connections are well-grounded: Create as the processing spine (made-by `create:filling` + `create:mixing` for the Alcohol Base) and survival as the consumable output (drinkable buffs). The industrial distillery vibe is authentic to both.

REWORK: None required. The dossier's 3rd-pillar candidate (bottled spirits → economy via M-09) is the clean extension: finished liquors are a natural high-effort trade commodity with a strong "of course you'd sell this" hook. This is STRONG and correctly identified. At authoring time, the key anti-arbitrage consideration is that the sell price should reflect the multi-step Create processing chain (not cheap), keeping it out of the "basic everyday component" guardrail — this is a mid-tier processed good.

Additional candidate (not in dossier, clean M-12 pass):
- from: spirits/beer | via: extradelight:vat or extradelight:mixing_bowl | to: survival (food chain) | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: the Vat/evaporator as a reduction step — reduce spirits → spirit reduction/glaze as a cooking ingredient, tying the distillery into the kitchen chain organically. (Requires verifying extradelight accepts spirit fluids — plausible given its broad fluid tag surface, but flag as BALANCE-PENDING.)

## ars_nouveau   [anchors: magic (1)]
OK — connections noted at 1 pillar, with strong 2nd-pillar candidates in dossier; no existing 2nd connection yet so this is an opportunity audit rather than a quality check on something already in place.

The 18 registered recipe types make this the richest method-library in the magic cluster (imbuement, enchanting_apparatus, summon_ritual, scry_ritual, etc.). The dossier's Vitalic/Agronomic sourcelinks note is the most natural organic→magic sink — it's a real non-recipe mechanic that needs no authoring.

Quality check on proposed connections (dossier):
- M-01 (source_gem as universal magic currency hub) — sound; already the reserved reagent. OK.
- M-02 (mob-drop reagent sink via Vitalic Sourcelink) — sound; survival surplus feeds Source passively. This is a light-touch weave with no fabricated edge. OK.
- M-10 (foreign essences → source_gem via imbuement) — sound and well-bounded. The "don't gate basics" caveat is correctly flagged. OK.
- M-09 weak candidate (source_gem/scrolls → Numismatics) — correctly deprioritised; a source_gem has its own economy as magic currency; converting it to coin would dilute both. The dossier correctly tags this WEAK. OK.

No REWORK items on dossier-proposed connections. Existing connections are thematically tight.

One additional candidate the dossier didn't foreground:
- from: ars_nouveau:archwood_log (archwood burns; Volcanic Sourcelink bonus for archwood) | via: ars_nouveau:imbuement (or haunting as a Create bridge) | to: Create | motif: M-19 | power: everyday | tone: ok | verdict: REJECT | reason: archwood-as-fuel is a passive Source mechanic, not a material that Create's haunting method wants — no meaningful Create output; forced edge.
- from: ars_nouveau:source_gem | via: create:crushing (crush spent source blocks) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: source_gem is the reserved magic currency (reagent-ownership); routing it through create:crushing recycle loop would undermine its role as the magic-pillar anchor material. Do not repurpose.

## astikorcartsredux   [anchors: survival (1)]
The dossier places this at 1 pillar (survival) with a "LEAVE" posture on the 2nd. This is a quality-audit entry for an anchored mod with one pillar — the question is whether the existing single connection is sound, and whether a 2nd is available without forcing.

Existing connection quality: survival is the correct and only anchor — horse-drawn carts and field implements are purely agrarian/rustic flavor. The connection is thematically clean and not over-claimed.

2nd-pillar candidates:
- from: plow/reaper (iron-bearing implements) | via: create:pressing → iron sheets as crafting ingredient | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier tags this WEAK and correctly so — gating a wooden cart's plow blade behind Create-processed iron sheets is disproportionate for an everyday low-tech tool. These implements are intentionally pre-Create tier (draft animals precede steam engines); forcing a Create gate inverts the progression logic. The "depth scales with power" guardrail kills this.
- from: astikorcartsredux supply cart (cargo hauling) | via: numismatics vendor — a filled supply cart as a deliverable trade good | to: economy | motif: M-21 (provisional) | power: everyday | tone: clash | verdict: REJECT | reason: M-21 is provisional and leans no; a supply cart is a vehicle, not a vendored consumable; the pairing is contrived. No economy hook is coherent here.

LEAVE — rustic agrarian cart mod; its single survival pillar is clean and correctly sized to its content. Forcing a Create gate or economy edge would violate tone (pre-industrial) and the depth-scales-with-power rule. One pillar is the floor; the floor is met.

## bits_n_bobs   [anchors: Create, survival (2)]
OK — connections sound.
Both existing connections are grounded: Create as the primary (it IS a Create addon — depends Create, 2 inbound Create methods: `create:item_application` and `create:splashing`) and survival/decoration as the 2nd (broad deco tile palette serving builders). The chain-pulley and nixie-board items serve real kinetic/display needs inside Create builds.

REWORK: None required. The M-04 candidate (tile blocks crushed back to material) is correctly identified as a reinforcing deepening, not a missing pillar. At authoring time, apply M-04 selectively — stone-type tiles back to crushed stone/gravel is coherent; wooden chairs back to planks is less so (chairs are not deco in the M-04 sense). The dossier's assessment is sound.

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound.
Both existing connections are by construction: Create (all barrels/breeches built via `create:cutting` + CBC munition assembly, itself Create-adjacent) and aeronautics (the entire purpose is arming Aeronautics ships/contraptions for PvPvE combat). The 10 registered recipe types (munition assembly/fuzing chains) are all inbound from Create and CBC — the mod IS a specialized Create-aviation munitions factory.

REWORK: None required. The dossier's deepening note (M-15 boss-drop gate for the heavy autocannon/rocket tier) is a design/progression call, not a missing pillar weave. It remains a good candidate for the 0.9 or later progression milestone. The current 2-pillar state is fully justified. No forced edges needed.

## chefsdelight   [anchors: survival, economy (2)]
OK — connections sound.
Both existing connections are well-grounded: survival via the Farmer's Delight food/meal content the Cook/Chef villagers sell, and economy via the villager-trade layer (emerald-based commerce, adding a soft food-source trade economy). The mod's content (village structures, cook professions) is coherent with both anchors.

REWORK: One minor point worth flagging. The economy pillar here rides on emerald-based villager trades, which operates outside the pack's Numismatics coin system. This is not a defect — emerald trades are vanilla-compatible — but it means the Cook/Chef villager economy is *disconnected* from the player-run Numismatics economy. The dossier notes the optional deepening (route trades onto Numismatics coins via M-09), and that observation is correct. At authoring time this should be evaluated: if the pack's vision is that all meaningful trade routes through Numismatics, a KubeJS trade-price override would unify the food economy. This is a polish/milestone item, not a current defect.

No REWORK items on the connections themselves.

## cmpackagecouriers   [anchors: Create, aeronautics (2)]
OK — connections sound.
Both existing connections are by construction: Create (the mod extends Create's package/logistics layer — built via `create:cutting` + `create:deploying`, both confirmed inbound methods) and aeronautics/logistics (the cardboard plane is a flying autonomous courier, a direct extension of the aeronautics logistics pillar). The design vibe is industrial-logistics, fully Create-native.

REWORK: None required. The dossier correctly notes that a light economy adjacency (remote trade fulfillment) exists but should be left unless the trade tooling wants it. That restraint is sound — the cardboard plane doesn't itself trade goods; it moves packages, and routing it formally into the economy pillar would be a thin narrative stretch. The 2-pillar state is clean and stable.

## companions   [anchors: survival (1)]
This is a 1-pillar mod; the quality audit covers whether the single anchor is correct and whether the proposed 2nd-pillar candidates in the dossier are sound.

Existing connection quality: survival as the single anchor is the right call — tamable companions, hostile mobs, boss content, and the internal Soul Furnace/Tesla loops are all organic/mob flavor. The mod's self-contained coin system (copper/nether/end coins) does NOT automatically grant an economy anchor since these are not Numismatics coins.

Proposed 2nd-pillar candidates (dossier assessment):

- from: Crystallized Blood / soul gems | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: a Soul Furnace that converts mob-drops into crystallized essences is a natural upstream supplier for the Occultism/Ars spirit-and-reagent economy — players farming companion mobs to feed the magic web is exactly the cross-pillar loop the pack wants.

- from: companions:relic_gold (boss drop of the Sacred Pontiff) | via: numismatics vendor (sell for coin) | to: economy | motif: M-09 | power: endgame | tone: ok | verdict: ACCEPT | hook: a rare boss relic priced as a luxury collectible/currency good is a natural sell; endgame drops earning meaningful coin keeps the economy tied to challenge, not just automation.

- from: companions:copper_coin / nether_coin / end_coin | via: numismatics exchange (bridge to pack currency) | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: bridging two coin systems would require inventing a conversion recipe with no existing motif; the "no-motif → REJECT-for-review" rule applies; also risk of arbitrage between currency systems. Flag for Gate-0 if the coin-unification question is revisited in the 0.9 economy update.

- from: voltaic pillar / tesla coil deco blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the Tesla electrical aesthetic clashes tonally with Create's clockwork-steam vibe — industrial electricity as a Create recycling feedstock is forced. The dossier correctly tags this WEAK. The mod's deco set is small and not thematically aligned with Create stones/metals in the way M-04 targets.

Top accepted candidate: magic via M-11 (Crystallized Blood/soul gems → occultism:spirit_fire / imbuement) is the cleanest and most thematically coherent 2nd pillar for this mod.

== CHUNK COMPLETE ==

