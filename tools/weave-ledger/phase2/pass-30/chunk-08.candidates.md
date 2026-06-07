# Phase 2 candidates — chunk-08

## solmaiddream   [anchors: survival (1)]
- LEAVE — pure flavour addon layered on top of Touhou Little Maid + the food-variety system; its only surface is the food pool the pack already defines (every food mod feeds it passively). No items produced, no processing method, no material to route. Forcing a second anchor would be artificial.

## justenoughbreeding   [anchors: support (1)]
- LEAVE — pure JEI-category plugin (breeding-info display). Zero items, zero material flows, zero methods. Sanctioned support role; no weave possible.

## mutantszombies   [anchors: survival (1)]
- from: mutantszombies mobs (zombie_brute / crawler / spitter / blister / split_head / mutant_brute / rotten_mutant) — loot=no per dossier; these mobs register only spawn-eggs, no item drops | via: loot-seed (KubeJS loot-table injection to add custom drops) | to: magic | motif: M-02 | power: mid | tone: ok — mutation/horror mob with no drops is a dead-end; seeding a visceral fluid or tissue fragment drop fits the horror vibe and feeds occultism:spirit_fire or ars_nouveau:imbuement as a reagent | verdict: ACCEPT | hook: a Mutant Brute's cortex fluid becomes a spirit-fire reagent — the more dangerous the zombie, the rarer the occult catalyst
- from: mutantszombies mobs — same pool | via: loot-seed | to: economy | motif: M-34 | power: mid | tone: ok — a combat specialist farms the harder variants and sells the dropped reagent to magic/tech players who can't safely fight tier-2 zombies | verdict: ACCEPT | hook: mutant-drop reagents flow player-to-player; the combat specialist supplies the magic supplier

REWORK: current anchor is survival(1) only. The two ACCEPT candidates above add magic (via M-02 loot-seed) and economy (via M-34 combat-route supply), bringing it to 3 anchors contingent on the loot-seed being authored. Note that the dossier's own 2nd-anchor section said "leave — no drops," but the briefing explicitly requires reaching for a loot-seed before LEAVE when the mod contributes danger content. The loot=no fact is the *current* state; adding drops is the Phase-3 action.

## do_a_barrel_roll   [anchors: support — client QoL (1)]
- LEAVE — client-only flight-feel mod (camera/movement behavior for elytra). No items, no blocks, no methods, no material. Pure support role.

## notenoughcrashes   [anchors: support — stability (1)]
- LEAVE — crash-recovery utility; zero content surface. Pure support role.

## citadel   [anchors: support — library/API (1)]
- LEAVE — animation + spawn framework for sbom_xela mods (Alex's Mobs etc.). No gameplay items or methods of its own. The weave lives in its dependents, not here.

## betterdungeons   [anchors: survival (1)]
- from: YUNG's Better Dungeons loot tables (Catacombs / Undead Fortress / Spider Cave) | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok — dungeon chests are a classic reagent discovery site; seeding Ars/Occultism/Iron's materials into undead-themed dungeons (bone-related spirit components, source shards) is thematically coherent and gates magic progression behind exploration | verdict: ACCEPT | hook: clearing the Catacombs yields spirit reagents the magic specialist can't easily farm otherwise — the dungeon earns its danger
- from: YUNG's Better Dungeons loot tables | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok — seed a modest quantity of minted Numismatics coin (or a rare coin-blank) into dungeon chests; first-finder is rewarded and the coin enters the player economy from exploration (player found it, not NPC-granted) | verdict: ACCEPT | hook: coin in a deep dungeon is treasure, not a vendor reward — consistent with player-run currency entering via player effort
- from: YUNG's Better Dungeons danger pressure | via: n/a (structural) | to: survival | motif: n/a | power: n/a | tone: n/a | verdict: REJECT | reason: danger-content anchor is already the existing survival anchor — this would be a circular re-statement, not a new weave

## modernfix   [anchors: support — performance (1)]
- LEAVE — JVM/loader-level performance patches; no items, no methods, no content surface. Pure support role.

## vinery   [anchors: survival (1)]
- from: vinery:grape_juice / vinery:apple_juice / vinery:apple_mash | via: create:pressing or create:milling | to: Create | motif: M-12 | power: everyday | tone: ok — grapes/apples pressed in a Create press yield juice as an alt to the manual grapevine_pot stomp; a light one-step integration on an everyday ingredient | verdict: ACCEPT | hook: the mechanical press does in seconds what the barrel takes jumps — an obvious automation for any Create-side player who grows grapes
- from: vinery wines / ciders (finished effect-bearing consumables) | via: vinery:wine_fermentation → output feeds create:mixing or farmersdelight:cooking as an ingredient | to: Create | motif: M-12 | power: mid | tone: ok — a wine or cider is used as a liquid ingredient in a Create mixing recipe (e.g. mulled wine in a mixer produces a food buff consumable); advances the processing chain | verdict: ACCEPT | hook: the mixer turns a fermented wine into a brewed tonic — automation rewards the vintner's output
- from: vinery wines (aged, effect-bearing) | via: vinery:wine_fermentation maturation mechanic | to: economy | motif: M-35 | power: mid | tone: ok — wines age in-world over ~20 real days for stronger effects; the aging specialist holds sitting stock that gains value passively, creating a trade good with a time premium (the vintner and the impatient buyer) | verdict: ACCEPT | hook: an aged vintage is worth more than a fresh bottle — the vintner's patience is their specialization
- from: vinery wines / ciders → bare "sell for coin" | via: numismatics stall | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; "wine is sellable" is the ambient endpoint, not a weave. The M-35 aging link above is the real economy anchor (gates demand on time + specialization)
- REWORK: dossier's 2nd-anchor candidate listed M-09 luxury→coin as STRONG — that motif is retired. Replace with M-35 aging (ACCEPTED above) and M-12 processing-chain pull (ACCEPTED above). OK on M-12 direction but method call in dossier was too vague; clarified as create:pressing on everyday raw produce.

## structurize   [anchors: support — library (1)]
- LEAVE — MineColonies' build engine. No standalone items or methods; its weave is entirely carried by MineColonies.

## grimoireofgaia   [anchors: survival (1)]
- from: grimoireofgaia mob-drop fragments/nuggets (material drops from tier-1 hostile mobs) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok — the bestiary's broad drop catalogue (creature fragments) transmuted through spirit-fire into occult essences; the mythic mob flavour (harpies, gorgons, dryads) fits occultism's spirit-transmutation aesthetic naturally | verdict: ACCEPT | hook: a harpy's feather-fragment in spirit-fire yields a wind-attuned essence — the bestiary feeds the spirit web
- from: grimoireofgaia boss drops (bust_gorgon / bust_valkyrie / bust_minotaur / bust_sphinx / bust_vampire / rings) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: endgame | tone: ok — mini-boss busts/rings as rare high-tier imbuement ingredients for Ars Nouveau top-tier spells/foci; endgame mobs unlock endgame magic | verdict: ACCEPT | hook: the gorgon's bust, crushed through the enchanting apparatus, unlocks a petrification glyph — you earn the spell by killing the source
- from: grimoireofgaia boss drops (busts / rare rings) | via: loot drop → emergent trade | to: economy | motif: M-34 | power: endgame | tone: ok — a combat specialist farms mini-bosses for busts/rings that a magic specialist needs as imbuement inputs; the fighter supplies the mage who supplies the tech player | verdict: ACCEPT | hook: only someone who survives the Grimoire's tier-3 mobs can supply the rarest magic reagents — forcing a specialist
- from: grimoireofgaia metal nuggets (c:nuggets/diamond, c:nuggets/emerald via Looting) | via: create:crushing | to: Create | motif: M-03 | power: everyday | tone: ok — mob-drop diamond/emerald nuggets fed through a crushing wheel compound into fragments or yield XP byproduct, tying routine bestiary drops to the Create ore-processing chain | verdict: ACCEPT | hook: the ore-doubling logic extends to dropped nuggets — the mechanic player turns combat spoils into processed material without wasting any
- REWORK: existing dossier candidates all look sound in direction; the M-09 economy candidate should be replaced with M-34 (ACCEPTED above). The Create:crushing candidate is already in the dossier — ACCEPT here as M-03.

## clumps   [anchors: support — performance (1)]
- LEAVE — XP-orb merging; server TPS aid, no items/blocks/methods. Pure support role.

## ldlib2   [anchors: support — library (1)]
- LEAVE — UI/rendering/sync library for GregTech-lineage mods; zero gameplay surface. Pure support role.

## bigsignwriter   [anchors: support — client UI (1)]
- LEAVE — GUI typing utility for signs; no items, no methods, no material. Pure support role.

## create_ltab-3.9.2   [anchors: Create, survival (2)]
- OK — connections sound. Already ≥2 anchors (Create worldgen structures + survival/exploration danger). The only incremental option is loot-seeding magic reagents or coins, which the dossier already flags as WEAK/leave. No stronger weave surface available (no items, no methods of its own).

## pingwheel   [anchors: support — multiplayer QoL (1)]
- LEAVE — keybind team-ping utility; no items, no methods. Pure support role.

## nochatreports   [anchors: support — privacy/QoL (1)]
- LEAVE — chat-signing intercept; no items, no methods. Pure support role.

## create_central_kitchen   [anchors: Create, survival (2)]
- OK — connections sound. Already ≥2 anchors (Create automation spine + survival food pillar bridge). The dossier correctly flags any economy angle as weak M-09 and defers it; the existing connections are the load-bearing ones.
- from: blaze_stove (powered Blaze cooking booster) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok — the Blaze Stove is a multi-step Create-compat appliance that boosts cooking output up to 4×; framing it as a sequenced assembly keystone item (blaze rod + Create parts → stove) deepens the Create production link | verdict: ACCEPT | hook: the automated kitchen earns its throughput by building the stove through a proper Create assembly chain, not a crafting-table recipe
- from: create_central_kitchen automated dishes / feast outputs | via: farmersdelight:cooking or create_central_kitchen automation → finished feast | to: economy | motif: M-26 | power: mid | tone: ok — finished feasts and automated dishes are consumed under survival pressure (food demand never zeroes); the automation specialist produces at scale, and consumption pressure keeps demand alive | verdict: ACCEPT | hook: the industrial kitchen's feasts feed the colony — consumption draws goods back down and restates demand for the next batch

## moogs_structures   [anchors: support — library (1)]
- LEAVE — worldgen framework library for Moog's structure mods; zero gameplay surface of its own. Pure support role.

## fusion   [anchors: support — client/library (1)]
- LEAVE — connected-texture rendering library; no items, no methods, no material surface. Pure support role.

== CHUNK COMPLETE ==
