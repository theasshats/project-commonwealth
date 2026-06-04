# Phase 2 candidates — chunk-03

## bosses_of_mass_destruction   [anchors: survival (1)]
- from: bosses_of_mass_destruction:ancient_anima | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Night Lich's soul-essence is precisely the occult binding agent a high-tier sequenced-assembly keystone demands — nobody builds the top Create machine until they've killed for it
- from: bosses_of_mass_destruction:blazing_eye | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: ACCEPT | hook: a Nether Gauntlet's blazing eye is a natural arcane catalyst for a tier-3 Ars Nouveau infusion — fiery essence refined into a magic reagent
- from: bosses_of_mass_destruction:void_thorns | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: REJECT | reason: blazing_eye already covers the magic-pillar ACCEPT for this mod; stacking two magic weaves on different drops is not wrong, but void_thorns → spirit_fire duplicates the "boss drop → magic" pattern — hold as lower-priority to avoid over-rewiring a small mod's drops; the M-11 transmutation is coherent if an editor wants a second magic connection, but not needed to establish the 2nd pillar
- from: bosses_of_mass_destruction:obsidian_heart | via: numismatics (bounty board / premium sale) | to: economy | motif: M-14 | power: endgame | tone: ok | verdict: REJECT | reason: M-14 is provisional (maintainer leans no); and the obsidian_heart is better reserved as a potential boss-key ingredient (M-15) per the pack's existing "boss drops gate Create tech" design rule — double-spend risk on a signature drop

## cold_sweat   [anchors: survival (1)]
- from: cold_sweat:hearth (crafting components — brass casing, copper casing) | via: create:pressing / create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: you can't build a climate-control Hearth without the brass fittings your Create workshop produces — cold survival forces the tech spine
- from: cold_sweat:chameleon_molt / goat_fur / hoglin_hide | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: insulating hides are a passive drop — they lack the effort-investment that makes M-09 (luxury good → coin) feel earned; selling raw mob drops for coin is weak economic design and doesn't earn the second pillar cleanly
- from: cold_sweat:filled_waterskin (already uses create:filling inbound) | via: create:filling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the inbound create:filling weave already exists per the dossier's "made-by methods" field — this is an existing connection, not a new 2nd-pillar proposal; noting here so it isn't re-proposed as novel

## createoreexcavation   [anchors: Create (1)]
- from: createoreexcavation vein-table (scarce regional metals → drilling output) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: infinite-but-slow ore from a single-chunk vein feeds the Create crushing line and then the mint — the drilling rig is the economy's foundation, not just a convenience
- from: createoreexcavation:diamond_drill / netherite_drill (drill head items) | via: create:sequenced_assembly | to: Create (depth) | motif: M-06 | power: endgame | tone: ok | verdict: REJECT | reason: the drilling_machine itself is already built via Create methods (mechanical_crafting, milling etc. per dossier inbound); adding a further sequenced-assembly gate on the drill heads doubles down on the same pillar rather than adding a second one — not a 2nd-pillar connection

## createmechanicalcompanion   [anchors: Create (1)]
- LEAVE — the dossier's own assessment is sound: a clockwork pet with no tradeable output, no magic surface, and no logistics/transport function. Combat is not a pillar. Forcing the companion into economy (sell mechanical wolves?) or magic (wolf attuned to spirit fire?) would be a contrived stretch. No coherent 2nd-pillar candidate survives red-team.

## betterendisland   [anchors: survival (1)]
- LEAVE — zero items, zero blocks, zero loot tables; structure-overhaul only. There is no material to route through any method. No weave is possible.

## direct_chute   [anchors: Create (1)]
- LEAVE — a single zinc logistics block; it transports items but does not produce, transform, or consume anything beyond its crafting cost (already zinc-based Create material). The aeronautics-logistics thematic tie is nominal only — chutes work on ships by default without any recipe edge. No coherent 2nd-pillar candidate.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:backpack (tank upgrade tier) | via: travelersbackpack:backpack_upgrade (Create brass / copper ingot as ingredient) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the tank upgrade that lets you carry Create fluids on your back logically calls for the same brass fittings Create uses for its own fluid pipes — a light one-step recipe weave that ties logistics gear to the tech spine
- from: travelersbackpack (themed explorer packs as trade goods) | via: numismatics sell | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: a backpack sold for coin is a convenience good, not a luxury with earned effort; the mod's own loot-drops already distribute packs; this doesn't earn M-09's "high-effort consumable" threshold cleanly

## createlowheated   [anchors: Create (1)]
- LEAVE — a single Create-mechanic block (basic_burner) with no outward surface. It deepens the heat-management loop within Create but has no tradeable output, no magic adjacency, and no survival/economy join point. A mechanic tweak, not a material source. No coherent 2nd-pillar candidate.

## mushroomquest   [anchors: survival (1)]
- from: mushroomquest rare/mythical mushroom caps (e.g. agarikon, artist_conk) | via: farmersdelight:cooking / extradelight:oven | to: Create/survival (processing chain) | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraging rare fungi and slow-cooking them into medicinal broths or effect-potent dishes is exactly what the pack's food-processing web is for — mushrooms become part of the survival cooking chain, not an isolated harvest
- from: mushroomquest rare/mythical caps | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a poisonous death-cap or mythical glowshroom transmuted through spirit-fire into an occult reagent — the deadly/mystical mushroom as magic ingredient is an obvious thematic fit players would nod at immediately
- from: mushroomquest rare mushrooms | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: the cooking-chain ACCEPT (M-12) and the spirit-fire ACCEPT (M-11) already establish two pillars; the economy edge is a lower-priority third connection; also, raw foraged goods sold for coin without processing effort sit below M-09's "high-effort consumable" bar unless paired with cooking output — flag as a possible follow-on in the 0.9 economy pass, not a Phase 2 primary

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies (processed strain products) | via: numismatics sell (dealer/stoner trade → coin economy) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully processed strain extract is exactly the kind of high-effort consumable the player-run coin economy wants — the grow-process-sell loop already mirrors a real trade good pipeline; the mod's own dealer villager confirms the trade fiction
- from: smokeleafindustries:generator (FE output) | via: createaddition:charging (FE↔kinetic bridge) | to: Create | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: routing the hemp farm's FE generator through a Create-Addition kinetic converter ties an isolated FE island to the rotational-power spine — your SU windmill can drive the grinder, or the hemp generator charges a Create-Addition accumulator; the farm joins the tech web instead of floating beside it
- from: smokeleafindustries raw hemp/buds | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the createaddition FE↔kinetic ACCEPT (M-17) already covers the Create pillar; adding a second Create route via milling doubles up on the same pillar and the mod's own grinder already covers the grinding step — the milling route is redundant, not additive

== CHUNK COMPLETE ==
