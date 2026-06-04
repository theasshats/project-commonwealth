# Phase 2 candidates — chunk-17

## createnuclear   [anchors: Create (1)]
- from: `createnuclear:steel_block` (c:ingots/steel) | via: `create:crushing` ore-doubling into Create metal web | to: Create (depth) | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the reactor's own structural steel gets doubled like any other ore — the Create spine processes what it powers
- from: refined uranium dust / steel ingot | via: `numismatics` mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor-grade fuel and the scarce steel it produces are exactly the kind of high-value processed metals that become hard currency — a player working the reactor becomes the pack's uranium economy node
- from: `createnuclear:autunite` (decorative/radioactive ore block) | via: `ars_nouveau:imbuement` or `occultism:spirit_fire` | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: autunite is a glowing industrial mineral — routing it as a magic reagent into Ars/Occultism feels like a forced theme seam; the reactor is hard sci-fi, not arcane; no natural player "of course" moment
- from: lead ingot (c:ingots/lead) | via: `occultism:spirit_fire` transmutation | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: lead-as-occult is historically thematic (alchemy) but Create Nuclear's lead is an industrial radiation shielding material, not a mystical ore; mixing the tone would read as arbitrary in this context; a flat alchemical shortcut would also undercut the survival scarcity of lead as a rare ore
- from: reactor SU output (endgame power surplus) | via: `createaddition:charging` | to: magic (tool charging) | motif: M-17 | power: endgame | tone: ok | verdict: ACCEPT | hook: a player who built the reactor has power to spare — using that massive SU to charge Iron's Spellbooks focuses or Create New Age gear is a natural endgame dividend; the reactor becomes the pack's ultimate charging station
- REWORK: no existing cross-pillar connections to audit (mod is 1-pillar; the above are all new proposals)

## dtterralith   [anchors: survival (1)]
- LEAVE — pure worldgen compat bridge (Terralith × Dynamic Trees); no items, no registered methods, no bespoke material surface. Its log/sapling output flows into vanilla wood webs already handled by Create/cooking downstream. Forcing an edge here would be arbitrary.

## coroutil   [anchors: support/library (1)]
- LEAVE — zero-content code library; no blocks, no items, no recipe types. Nothing to weave.

## trek-b0.6.1.1   [anchors: survival (1)]
- LEAVE — structure-only worldgen datapack with no items and no registered methods. The only integration surface is loot-table seeding (inserting pack-relevant reagents / Create components into structure chests) — that is a data-tweak, not a mod-level edge, and belongs in a KubeJS/datapack pass, not here.

## samurai_dynasty   [anchors: survival (1)]
- from: jade / ruby / onyx / aquamarine ores | via: `create:crushing` | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the feudal-Japan gem tier runs through Create's ore line like any other regional metal — doubling output makes exploration worthwhile and ties combat loot to the tech spine
- from: `samurai_dynasty:akaname_tongue` / Yokai drop reagents | via: `occultism:spirit_fire` | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Yokai are supernatural spirits — it's entirely coherent that their drops feed Occultism's spirit-fire rituals; a player hunting Oni for weapon upgrades also harvests magic currency
- from: `samurai_dynasty:akaname_tongue` / Yokai drops | via: `ars_nouveau:imbuement` | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau draws power from exotic creatures; Yokai drop essence as a natural imbuement input — the folklore resonance is immediate ("yokai essence charges the arcane apparatus")
- from: jade gem (c:gems/jade) | via: `numismatics` mint / sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: jade is a prestige gem — it makes a natural luxury-good trade currency, exactly the kind of regional scarcity that drives the pack's emergent economy
- from: samurai steel (c:ingots/steel) | via: `create:mechanical_crafting` or `create:pressing` → aeronautics structural component | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: ACCEPT | hook: samurai steel is tag-unified with other c:ingots/steel; it silently feeds airframe fabrication — the combat region's ore becomes the airship's hull
- ⚠ silver tag warning: samurai_dynasty tags its silver as c:* silver but this is a separate ore from occultism silver and galosphere palladium — any unification auto-rule must NOT merge samurai silver into galosphere's palladium (see CLAUDE.md). Not a weave candidate; flagged for the unification pass.
- REWORK: no existing cross-pillar connections to audit (mod is 1-pillar)

## sable_sa_compat   [anchors: support/compat (1)]
- LEAVE — zero-content compat behavior patch (Create: Stuff 'N Additions × Sable Aeronautics); no items, no blocks, no methods. Weaving is not applicable.

## trading_floor   [anchors: Create, economy (2)]
- OK — connections sound. The Trading Depot is a hard Create dependency and its entire function is automating villager trades, which maps directly onto the economy pillar. Two-pillar positioning is correct and firm.
- from: `trading_floor:trading_depot` | via: MineColonies merchant hall + Numismatics coin loop | to: economy (depth) | motif: M-21 | power: mid | tone: ok | verdict: REJECT (provisional motif) | reason: M-21 is provisional (maintainer leans no); the trading_floor→Numismatics link is strong mechanically but the villager-trade-to-coin loop is exactly the pattern under review; surface for the 0.9 economy update decision
- from: Create-processed reagents (e.g. crushed samurai jade, milled crops) delivered by belt to depot | via: `trading_floor` depot → villager trade → emerald loop | to: economy (reinforcement) | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: the depot is the natural exit valve for the Create ore-processing line — refined scarce goods become emeralds, which enter the coin economy; the belt → depot → emerald path is the pack's trade-floor spine

## dataanchor   [anchors: support/library (1)]
- LEAVE — zero-content developer library (entity/chunk data attachment, packet handling); no player-facing content, no blocks, no items, no recipe types. Nothing to weave.

## recipe_integration   [anchors: support/recipe-bridge (1)]
- LEAVE — this mod IS connective tissue; it ships cross-mod recipes authored by others. It advances the pack's "one web" goal passively. No pillar weave of its own is coherent. Note: an audit of which of its ~3,700 recipes actually fire against this modlist (most of its 82 c:tags reference uninstalled mods like Mekanism, MI, GT, IE and are inert) would be useful before Phase 3 to avoid conflicts — but that is a maintenance task, not a Phase 2 weave.

## buildguide   [anchors: support/QoL-client (1)]
- LEAVE — pure client-side render overlay; no items, no blocks, no methods, no gameplay material surface. Build-assist tool only.

== CHUNK COMPLETE ==
