# Phase 2 candidates — chunk-03

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux:oak_plow / oak_reaper blade (implement head) | via: create:pressing (iron sheet → plow blade) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A horse-drawn plow head is pressed sheet steel — the draft-animal farming tier naturally depends on the Create metal-working tier for its iron parts.
- from: astikorcartsredux carts (supply/animal) | via: bare "sellable logistics flavor" | to: economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: M-09 retired; "you can trade cart rides" is the ambient endpoint, not a demand-gating weave.
- from: astikorcartsredux:oak_seed_drill + seasonal seed stock | via: config/game-mechanic — seed-drill operated during Serene Seasons planting window only yields full output | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: REJECT | reason: the seed-drill itself doesn't *consume* a season-locked reagent, it just operates in a field; coupling a seasonal mechanic to it would be a config/behavior change, not a method-routing — no implementing method in the pack; forced.
REWORK: dossier candidate "Create via create:crushing — gate metal implements on Create-processed iron sheets [WEAK, M-05]" — this framing (crushing as gate) is wrong-method; the correct routing is create:pressing (sheet) or create:mechanical_crafting for the implement head. Rewrite as M-05 via pressing. Existing connection: none authored yet — OK directionally, just method needs correction.

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — zero items/blocks, no recipe surface; pure MineColonies blueprint pack. The Steampunk style's passive consumption of Create blocks at colony build time is the natural weave and it is already the ambient behavior — no recipe authoring possible or needed.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction boss/elite loot (shields, knight armor, ballista items) | via: loot-seed into faction structure chests | to: economy | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: A combat specialist raids faction keeps, loots knight gear, and trades it to crafters or colony builders who lack the combat capability — the classic combat-route supply chain.
- from: valarian_conquest:armorsmith / builder station | via: KubeJS recipe gating — station-crafted faction gear requires Create-processed brass plates or iron sheets as input | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Faction armorers work hot-pressed metal — a medieval smith's armor is still sheet-formed, just at a battlefield scale; the armorsmith station consuming Create sheets reads naturally.
- from: valarian_conquest faction structure loot (shields, banners, ballista arrows) | via: loot-seed | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: loot-seeding coin into faction chests is an NPC coin faucet (M-14 territory) — cut; faction loot should flow as goods that players trade for coin, not pre-minted coin from a structure.
- from: valarian_conquest citizen/mercenary labor | via: emergent — recruited citizens fill colony professions (confirmed by dossier "NPC labor adjacency") | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: A combat specialist frees and recruits mercenaries who can then take MineColonies professions; their labor is the service, payment is emergent between players.
- from: valarian_conquest citizen/mercenary hire | via: bare Numismatics coin payment | to: economy | motif: M-09 (retired) | power: mid | tone: ok | verdict: REJECT | reason: dossier candidate proposed M-09 which is retired; mercenary "hire for coin" is ambient, not demand-gating. The M-33 service link is the valid economy anchor.
REWORK: dossier's "economy via numismatics — seat faction trades on coins [M-09]" is using the retired motif. Reframe as M-33 (service/labor: citizens + mercenary work) which is the live demand-gating economy link. The M-05 armorsmith station gate is a valid Create link.

## collective   [anchors: support/library (1)]
- LEAVE — pure Serilum shared-code library; 0 blocks, 0 items, no recipe surface. Nothing to weave.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
- LEAVE — Kotlin language adapter; 0 blocks, 0 items, no player-facing content. Nothing to weave.

## smartbrainlib   [anchors: support/library (1)]
- LEAVE — AI framework library for mob mods; 0 items, no gameplay surface. Nothing to weave.

## ding   [anchors: support/client QoL (1)]
- LEAVE — client audio cue on load; 0 items, no game content. Nothing to weave.

## playeranimator   [anchors: support/library (1)]
- LEAVE — animation API library; 0 items, no game content. Nothing to weave.

## voicechat   [anchors: support (1)]
- LEAVE — proximity voice comms infrastructure; 0 items, no material surface. Nothing to weave. (Social layer value is real but not a recipe/method weave.)

## bettercombat   [anchors: support/combat framework (1)]
- LEAVE — melee-behavior framework (JSON-driven movesets); 0 items, no material to route. Nothing to weave.

## chat_heads   [anchors: support/QoL client (1)]
- LEAVE — chat-UI cosmetic; 0 items. Nothing to weave.

## companions   [anchors: survival (1)]
- from: companions:crystallized_blood (soul furnace output from mob drops) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: Crystallized Blood extracted from rotten flesh in a Soul Furnace is exactly what spirit-fire transmutation is for — a mob-derived fluid that feeds the occult web rather than sitting as a private island.
- from: companions:soul_gem (diamond → soul gem via soul furnace) | via: ars_nouveau:imbuement | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A crystalline soul vessel formed from a diamond in alchemical fire is a natural Ars Nouveau imbuement reagent — magic players need it, combat/exploration players farm the diamonds that feed the Soul Furnace.
- from: companions boss drop: Old Cloth + Relic Gold (Sacred Pontiff) | via: loot-seed (already in loot=yes) | to: economy | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Sacred Pontiff's Relic Gold is a trophy that only a combat specialist can acquire; crafters and colony builders buy it rather than face the boss themselves.
- from: companions:copper_coin / nether_coin / end_coin (internal coin system) | via: Numismatics bridge recipe — companions coins convert to Numismatics cogs at a set rate | to: economy | motif: M-08 | power: everyday | tone: clash | verdict: REJECT | reason: companions runs its own three-tier coin system; bridging it into Numismatics creates a parallel faucet (effectively an NPC coin source) and the tone clash between gothic-alchemical and the pack's industrial economy is real. Two coin systems competing is a design defect, not a weave.
- from: companions Tesla/voltaic deco blocks (copper-intensive) | via: create:crushing → copper scrap | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: the deco-recycle weave (M-04) is valid in principle but the Tesla blocks are functional (active in the Tesla power network) not merely decorative; crushing functional machines back to scrap is incoherent — players won't recycle working infrastructure. Dossier flagged this as WEAK and it is.
REWORK: dossier's "economy via numismatics [M-09]" is retired. The valid economy anchor is M-34 (boss drop combat-route supply: Relic Gold / Old Cloth). Magic anchor via M-11 + M-02 is the strong 2nd weave.

## moreculling   [anchors: support/performance (1)]
- LEAVE — render culling optimization; 0 items, no content surface. Nothing to weave.

## create_sa   [anchors: Create, aeronautics (2)]
- OK — connections sound. Already anchors Create (built through sequenced_assembly + mechanical_crafting) and aeronautics (jetpacks + drones = personal flight/logistics). No new weave needed; dossier correctly flags no edge needed.

## createmechanicalcompanion   [anchors: Create (1)]
- from: createmechanicalcompanion:mechanical_wolf_link (flagship companion item) | via: boss-drop gate — require a signature boss drop (e.g. from Cataclysm or companions:sacred_pontiff) as one input in its sequenced_assembly chain | to: survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: A mechanical wolf that fights alongside you in the depths logically requires proof of combat mastery (a boss trophy) to unlock — the boss-key gate turns the wolf into a reward for dangerous exploration, not just resource grinding.
- from: createmechanicalcompanion:quantum_drive (endgame module part) | via: create:sequenced_assembly already present; could add occultism:spirit_trade or ars imbuement as a required step to get the quantum substrate | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: A quantum drive processing information at speed needs an arcane substrate that Create's machines alone cannot forge — magic players become a required supplier for the wolf's top-tier movement module.
- from: createmechanicalcompanion all modules (everyday combat use) | via: bare "it's useful in combat" | to: survival | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: "companion helps in combat" is ambient survival use, not a weave — no demand-gating, no method routing. No motif fits.

## ctl   [anchors: Create, aeronautics (2)]
- OK — connections sound. Train/contraption lighting built through create:sequenced_assembly; aeronautics pillar is its whole purpose. Already at goal; no new weave needed.

## modonomicon   [anchors: support/documentation (1)]
- LEAVE — guidebook framework, no material surface; 6 book items but they are flavor containers with no recipe-method role. Nothing to weave.

## mru   [anchors: support/library (1)]
- LEAVE — code-sharing library; 0 items. Nothing to weave.

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants (acorn_metal_fence, bastion_metal_fence, cathedral_metal_fence, etc.) | via: create:crushing → iron/gold nuggets + xp nugget, lossy | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Scrap a rusted iron fence back to raw metal — the same logic that makes metal deco recoverable in any Create pack, locking the deco tier into the resource loop.
- from: mcwfences wood fences (the majority — ~170 wood variants) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: crushing wood fence back to planks/sticks is technically valid M-04 but the majority of the mod is wooden fences that vanilla-crush fine already (planks→sticks); doing this wholesale for 170 wood types adds noise without a real loop contribution. Limit to the metal variants only where the Create-recovery payoff is real.
REWORK: dossier candidate "Create via create:crushing metal fences [M-04 WEAK]" — not actually weak; the metal subset is a valid M-04 candidate and should be ACCEPT-ed for the metal fence subset. The "decoration is a sanctioned support anchor" note is fine but the metal subset has a real recycle hook.

## touhou_little_maid   [anchors: survival (1)]
- from: touhou_little_maid maid summoning (altar recipe) — require an Ars Nouveau source gem or occultism spirit-infused bottle as one altar input | via: touhou_little_maid:altar_recipe_serializers (KubeJS) | to: magic | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Summoning a spirit companion through a shrine-altar ritual naturally draws on arcane source — the Touhou shrine-maiden aesthetic is already mystical, so Ars Nouveau source_gem as the altar's "spiritual charge" reads immediately.
- from: touhou_little_maid power-point bottles (fairy drops / village loot) | via: loot-seed — seed power-point bottles into mob/dungeon loot tables so combat/exploration feeds the altar economy | to: survival | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: Power-point bottles dropping from fairies and dungeon chests means adventurers supply the shrine's operating fuel — exploration feeds the summoning system.
- from: touhou_little_maid:broom (rideable flight item, hay + ender eye) | via: ars_nouveau:imbuement — require an attuned Ars component in the broom recipe to make flight a magic-tier reward | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A magical broom that flies when a shrine-maiden sits on it is an arcane tool, not a straw broom — infusing it with Ars source makes the flight-enable a magic-pillar gate rather than a cheap ender-eye recipe.
- from: touhou_little_maid maids as colony-adjacent labor (farm/fish/ranch tasks mirror MineColonies worker roles) | via: MineColonies research gate — unlock the highest-tier maid task modes (ranching/combat) only after a specific MineColonies research | to: economy | motif: M-37 | power: endgame | tone: ok | verdict: ACCEPT | hook: Advanced maid task modes (livestock management, combat escort) represent specialized knowledge that colony research codifies — a player who has built out their colony to ranching/combat research tier can unlock corresponding maid modes, linking the two automation systems.
- from: touhou_little_maid internal coin system (copper/nether/end coins not applicable — this mod doesn't have coins; clarification: companions had coins, not this mod) | via: n/a | to: n/a | motif: n/a | verdict: REJECT | reason: no coin system in touhou_little_maid; misfiled candidate from cross-reading companions dossier. Not applicable.
- from: touhou_little_maid altar + power-point bottles as a "just sellable" service | via: bare economy | motif: M-09 (retired) | power: everyday | tone: ok | verdict: REJECT | reason: "maids are useful so people will pay coin for broom service" is ambient endpoint, not demand-gating. Rejected.

== CHUNK COMPLETE ==
