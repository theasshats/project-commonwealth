# Phase 2 candidates — chunk-04

## controlling   [anchors: support/QoL (1)]
LEAVE — pure client keybind-menu UI; zero items/blocks/methods; nothing to route through any system.

---

## ritchiesprojectilelib   [anchors: support (1)]
LEAVE — zero-content ballistics API; no items/blocks; no weave surface. Indirectly serves Create/aeronautics via Big Cannons but has no node of its own to hang an edge on.

---

## touhou_little_maid   [anchors: survival (1)]
- from: TLM altar recipe-type | via: touhou_little_maid:altar_recipe_serializers | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The altar is a KubeJS-extensible ritual multiblock — gate a maid summon or signature tool (Hakurei Gohei / Broom) behind an Ars Nouveau source_gem + a magic-relevant material (e.g. irons_spellbooks arcane essence + lapis), so the altar reads as a shrine-maiden invocation circle, not a vanilla craft. Costs power-points + magic currency; shrine aesthetic matches Ars/Iron's ritual vocabulary.
- from: power-point bottles (village loot / maid-fairy drops) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: power-point bottles are not a desirable trade good — they're a consumable TLM-internal currency with no appeal to a player who doesn't run maids; the economy anchor is too thin and arbitrary.
- from: maid-automation labor output (crops/fish/shear) | via: farm_and_charm:mincer or create:milling (downstream) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: maid automation is input to farming, not an ingredient for Create; the link would be indirect (maid harvests barley → barley milled by Create) — that's the farm_and_charm/spawn weave, not TLM's own edge. Forcing TLM as a "Create feeder" is mediated by too many hops; the label would be misleading.

REWORK: existing anchor is "survival (1)" — the altar ACCEPT above lifts it to survival+magic (2).

---

## spawn   [anchors: survival (1)]
- from: spawn:clam / crab / angler_fish (exotic seafood) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Clams and anglerfish are exotic aquatic catches — rare enough to be a luxury good for the Trading Floor; fishing becomes a niche production trade with clear sell value. Supports the scarcity → economy leg.
- from: spawn:clam / crab drops | via: create:milling or farmersdelight:cutting | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crab shell or clam grinds into a calcium-powder / shell-grit intermediate usable in a nutrient-rich food recipe or as a Create mixing input (e.g. for a diet supplement or a polish/abrasive). One light step; everyday power — correctly shallow.
- from: spawn exotic seafood (angler_fish, sea_cow, seal) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: the theme clash is real — anglerfish as a magic reagent is conceptually forced; deep-sea creatures do have an arcane vibe but none of Spawn's drops are presented as mystical. A mob-drop reagent path would need a thematic hook (e.g. "angler's bioluminescent lure") that the dossier doesn't ground. Mark for re-evaluation if the magic web ever explicitly needs a bioluminescent catalyst.
- from: spawn:date_log / date_planks | via: create:crushing (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the dossier already notes FD cooking/cutting inbound weave; adding Create crush on a generic wood type gives negligible new connectivity and is a wholesale deco-family pass item, not Spawn-specific. Park for a wood-family batch pass.

OK — existing FD cooking/cutting inbound weave is the primary connection; two ACCEPTs above bring it to survival+economy (±Create via milling).

---

## friendsandfoes   [anchors: survival (1)]
- from: friendsandfoes:crab_claw | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: The crab claw already makes a reach-extending potion via vanilla brewing — it has established alchemical precedent. Routing it into occultism spirit-fire or ars imbuement as a reagent for a reach/extension enchant or scroll reads as natural alchemy escalation (vanilla brewing → arcane distillation). A mob drop with a pre-existing potion use is exactly the M-02 target.
- from: friendsandfoes:copper_golem_head / copper_button / lightning_rod variants | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the copper-deco M-04 edge is genuine but thin; it's acknowledged in the dossier as WEAK and should be folded into a wholesale copper-deco batch pass rather than singled out here. Record rejected: not wrong, just not worth a standalone weave.
- from: Wildfire / Illusioner hostile drops (loot=yes) | via: loot-seed (Bountiful bounty board) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: Wildfire and Illusioner are rare hostile mobs — a bounty board that pays coin for eliminating them ties combat danger back to the economy (fight → loot → trade). Clean M-14 loop: scarcity-of-mobs generates bounty demand.

REWORK: existing anchor survival(1) — two ACCEPTs above give magic + economy, lifting to survival+magic+economy (3). The copper-deco REJECT is recorded; revisit in a deco batch pass.

---

## supermartijn642corelib   [anchors: support (1)]
LEAVE — invisible GUI/block/packet library; zero player-facing content; no weave surface.

---

## mffs   [anchors: Create + survival (2)]
OK — connections sound. The existing authored weave (M-05 focus_matrix gated on create:electron_tube; M-06 projector/interdiction_matrix sequenced_assembly chains; TFMG steel mid-tier) is the gold-standard pattern. No additional edge is needed; surfacing one would risk over-weaving a deliberate endgame design.

---

## farm_and_charm   [anchors: survival (1)]
- from: farm_and_charm:barley / oat (grains) | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Barley and oat are everyday grains — milling them into flour on a Millstone is the natural Create spine touch-point. The grain → Create → food chain is a core loop beat: farm produces raw grain, Create processes it, the meal feeds diet variety. Shallow single step, correct for everyday power.
- from: farm_and_charm surplus meats / eggs / butter (animal-husbandry output) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: The "feed animals → more drops" husbandry loop is a production machine; its surplus meats/butter/eggs are naturally tradeable goods at the Trading Floor. A dedicated rancher selling bulk butter/eggs to a baker or colony is the classic Eco specialization beat.
- from: farm_and_charm:butter or farm_and_charm:cream variants | via: create_factory mixing/pressing | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: create_factory already consumes cream and dairy via create:mixing — this edge exists implicitly through create_factory's own recipes. Routing FAC butter explicitly into create_factory adds one recipe but would be authored on create_factory's side, not farm_and_charm's. Not a distinct farm_and_charm weave.

REWORK: survival(1) → two ACCEPTs lift to survival + Create + economy (3). The butter REJECT is recorded; it may be authored as part of create_factory's recipe pass.

---

## prickle   [anchors: support (1)]
LEAVE — pure JSON-config-format library (Darkhax); zero items/blocks/methods; no weave surface.

---

## create_dragons_plus   [anchors: Create (1)]
- from: create_dragons_plus:ending fan-catalyst (Dragon's Breath fluid / Dragon Head) | via: create_dragons_plus:ending | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: Bulk Ending is a Create fan-processing mode that uses End-energy (dragon breath) to infuse items. Routing an Ars Nouveau or Iron's Spellbooks arcane material through bulk-ending applies an End-infusion step — a mid-chain arcane refinement. Dragon breath as an "End-essence" catalyst reads as thematically consistent with both Create's industrial processing and magic's elemental vocabulary. Endgame power: dragon's breath is locked behind the End, correctly deep.
- from: create_dragons_plus:freezing fan-catalyst (Powder Snow) | via: create_dragons_plus:freezing | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: Powder Snow is a seasonal/environmental resource (winter/cold biomes). Routing a Serene Seasons-relevant material or a Cold Sweat-temperature item through bulk-freezing ties the seasonal survival pressure into Create processing — "freeze a biome-specific material to unlock its concentrated form." Survives red-team: powder snow is already worldgen-gated (cold biomes), so the freezing method is gated by exploration/season, not trivially available.
- from: create_dragons_plus:bulk-ending output | via: create_dragons_plus:ending → ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: this would chain two exotic methods (bulk-ending then ars imbuement) on a single material — the first ACCEPT already establishes the Create↔magic link; adding a second step on the same edge is over-engineering. One bridging edge per system pair is the right granularity at Phase 2.

REWORK: Create(1) — two ACCEPTs add magic + survival, lifting to Create + magic + survival (3). The fan-catalyst methods are also weave-targets that other mods route through; that role is separate from this mod's own anchor needs.

---

## incontrol   [anchors: server-util/support (1)]
LEAVE — JSON-rule spawn/loot engine; no items/blocks/methods; purely a design-tool surface. It can enforce scarcity/mob-economy design (enabling M-02/M-14 patterns) but has no node of its own to anchor.

---

## craftingtweaks   [anchors: support/QoL (1)]
LEAVE — crafting-grid button UI with no items, methods, or weave surface.

---

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (iron/bastion/acorn/cathedral/etc.) | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Metal fences crush back to iron nuggets + xp nugget — the standard lossy M-04 deco-recycle. A decoration mod with clear metal content is the canonical M-04 use case; correct shallow depth for everyday items.
- from: mcwfences:*_hedge blocks (leaf variants) | via: ars_nouveau:crush or create:milling | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: hedge blocks are pure deco leaves — routing them into a magic system as arcane plant material is a tone clash (no thematic justification; a hedge is not an arcane ingredient). Forcing the edge is exactly the "don't force edges onto deliberately vanilla content" guardrail.

REWORK: decoration-support(1) → ACCEPT gives a Create anchor (M-04), lifting to decoration+Create (2). The hedge REJECT is recorded.

---

## create_factory   [anchors: Create + survival (2)]
- from: create_factory sweets (waffles, candy apples, rolls) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: Assembled Create-processed sweets are the prototypical luxury good — high-effort desserts produced by a confectionery specialist and sold at the Trading Floor. The "dessert factory" theme is a direct fit for economy trade-goods.
- from: create_factory:cream_bucket (cream fluid) | via: create:mixing → farm_and_charm:pot_cooking or extradelight | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the cream fluid feeds inward back to create_factory's own recipes and adjacent food mods implicitly — but this mod already anchors survival via its food chain. Adding a cream→FD/ExtraDelight edge is correct but trivially covered by the existing "Create + survival" anchoring; not a new cross-system lift.

OK — existing Create+survival (2) is sound; ACCEPT above adds economy (3). No rework needed on existing connections.

---

## kubejs_create   [anchors: support (1)]
LEAVE — KubeJS scripting bridge for Create recipe-types; no items/blocks; a tool, not a node.

---

## lionfishapi   [anchors: support (1)]
LEAVE — entity-animation library; zero player-facing content; no weave surface.

---

## accessories_compat_layer   [anchors: support (1)]
LEAVE — Curios/Trinkets→Accessories compat shim; no items/blocks/methods; nothing to weave.

---

## kiwi   [anchors: support (1)]
LEAVE — Snownee modding library; zero items/blocks; no weave surface.

---

## xaerominimap   [anchors: support/QoL (1)]
LEAVE — client minimap UI; no items/blocks/methods; nothing to weave.

---

## dtterralith   [anchors: survival (1)]
- from: dtterralith exotic species seeds (amethyst_seed, jacaranda_seed, maple_seed, cedar_seed) | via: create:milling or dynamictrees:seed_conversion | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: these are worldgen sapling seeds, not processed food/material crops — milling a tree seed adds negligible gameplay value and no believable player motivation (seeds exist purely for regrowth, not processing). The log output from felling dynamic trees already reaches Create/cooking as vanilla wood without any bespoke edge.
- from: dtterralith exotic logs (kapok, cedar, jacaranda) | via: create:crushing (M-04) | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: these are compat-generated wood types, not Spawn/farm wood with a crafted-item identity. A wholesale wood-family crush pass could cover them, but singling out dtterralith's compat logs as a distinct weave is not warranted. Same rationale as the dossier's own "no bespoke edge warranted."

LEAVE — worldgen compatibility bridge for Terralith × Dynamic Trees; log/sapling outputs are vanilla-wood tier already in the Create/cooking web. No bespoke weave warranted; REJECTs above recorded for the archive.

== CHUNK COMPLETE ==
