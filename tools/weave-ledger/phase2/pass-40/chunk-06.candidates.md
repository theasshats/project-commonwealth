# Phase 2 candidates — chunk-06 (context-fed)

---

## curios   [anchors: support (1)]
LEAVE — pure equipment-slot API; zero items/blocks/methods. Existing rows: none needed. Sanctioned support role.

---

## yet_another_config_lib_v3   [anchors: support (1)]
LEAVE — config-screen library; zero content surface. No weave possible.

---

## controlling   [anchors: support (1)]
LEAVE — client keybind-UI mod; zero items/methods. No weave possible.

---

## bigsignwriter   [anchors: support (1)]
LEAVE — client sign-GUI utility; zero gameplay surface. No weave possible.

---

## durabilitytooltip   [anchors: support (1)]
LEAVE — client tooltip overlay; zero items/methods. No weave possible.

---

## alternate_current   [anchors: support (1)]
LEAVE — redstone-propagation perf patch; zero content. No weave possible.

---

## fzzy_config   [anchors: support (1)]
LEAVE — Kotlin config-engine library; zero items/methods. No weave possible.

---

## lootr   [anchors: support (1)]
LEAVE — per-player loot-instancing fairness wrapper; reads existing loot tables, adds no new drops. The loot-seed proposals in existing rows were correctly rejected: lootr only reads the loot tables that other mods (betterstrongholds, valarian_conquest, etc.) define — seeding drops is a choice made on *those* mods' tables, not on lootr. No weave possible here.

---

## midnightthoughts   [anchors: survival (1)]
LEAVE — well-rested buff mechanic; zero items/blocks/methods. All attempted weaves in existing rows fail on the same blocker: no material surface to route through any method. The thematic alignment with Cold Sweat/Serene Seasons is real but entirely behavioral, and no motif covers behavior-only links. OK — existing rows sufficient on this verdict.

---

## ars_n_spells   [anchors: magic (1)]

Existing rows are comprehensive. The one M-29 accept (cross-cast tablet requiring both source gems AND arcane essence simultaneously) and one M-37 accept (colony research unlocks cross-cast) are the most defensible. Before adding anything, one challenge:

- CHALLENGE | from: ars_n_spells unified mana bridge | via: ars_nouveau:enchanting_apparatus (co-catalyst tablet) | to: magic | motif: M-29 | verdict: REJECT | hook: the cross-cast ritual is already a magic↔magic internal weave; requiring co-catalysts from both systems is a depth note on M-01, not a genuine cross-*system* (production↔production) dependency in the M-29 sense — M-29 requires the two routes to be *different production pillars* (Create and magic), not two sub-systems within magic. This row should stay as a design note but is not a true M-29 advance on the loop.

OK — existing rows sufficient once the M-29 nuance above is recorded as a challenge. The mod correctly stays at 1 anchor (magic internal).

---

## solmaiddream   [anchors: survival (1)]
OK — existing rows sufficient. The dossier's own verdict (leave — tiny flavour addon) is correct. The M-26 food-consumption rows accepted elsewhere show the food loop feeds maid growth, but that is the ambient food loop, not a new anchor. No coherent 2nd system anchor exists without forcing it.

---

## stylecolonies   [anchors: support (1)]

Existing rows cover the key cases: Steampunk style pulling Create blocks (M-28, accepted), High Magic style pulling Ars/Occultism blocks (M-28, accepted), and regional-scarcity gate on style materials (M-30, accepted). One nuance not explored:

- NEW | from: stylecolonies Steampunk blueprint build-material demand | via: MineColonies colony construction (block consumption at build time) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: a player who specializes in Create manufacture becomes the supplier for any colony running the Steampunk style — the style generates recurring demand for fabricated blocks that no colony can self-supply cheaply, making the Create specialist the de-facto colony contractor; this is M-33 labor/supply-for-hire at the block-goods level, emergent from the blueprint spec.

This is subtly different from the M-28 rows (which anchor stylecolonies → Create/magic demand) in that it also surfaces the *economy* pillar: the style creates a service relationship between a Create specialist and a colony builder. The M-28 rows don't capture the economy arm. One new row.

- CHALLENGE | from: stylecolonies generic styles | via: MineColonies colony construction | to: economy | motif: M-33 | verdict: REJECT | hook: the existing M-33 row (blueprint style variety → build material demand → M-33 service, accepted 1×) already captures this; the new row above is more specific (Steampunk + Create-specialist framing) — if both are accepted they should be merged into one row at Phase 3, not two.

---

## createshufflefilter   [anchors: Create (1)]
OK — existing rows sufficient. All attempts to anchor it to a second system were correctly rejected. The dossier verdict (leave — single-purpose builder utility) is right. No coherent 2nd anchor.

---

## jakes-build-tools-2.0.1.5   [anchors: QoL/support (1)]

Existing rows are comprehensive and correct. One gap the blind passes missed: the `minecraft:experience_flask_*` items as a specific delivery mechanism for `create:enchantment_industry:grinding`. One accepted row exists (XP flask → enchantment grinder, M-12). That's the only defensible link. One challenge on it:

- CHALLENGE | from: minecraft:experience_flask_* (XP storage) | via: create_enchantment_industry:grinding | to: create | motif: M-12 | verdict: REJECT | hook: the experience flasks are datapack items in the `minecraft:` namespace — their interaction with `create_enchantment_industry:grinding` (which consumes enchanted books into liquid XP) is directionally backwards: the grinder *produces* liquid XP from enchanted books; the flask *stores* XP from kills. The two are not directly linked by the grinding method. This makes the link a thematic association, not a method-routing. Drop to no-motif.

OK — existing rows sufficient after that challenge. The mod correctly stays leave/support.

---

## ctl   [anchors: Create + aeronautics (2)]
OK — existing rows sufficient. Already at 2-pillar goal. The M-28 colony request row (1 accept, 1 row total) is the one potentially interesting addition — a MineColonies Station or Rail hut requesting ctl lamps as construction materials. This is plausible but the row is low-confidence (the colony blueprint may not include lighting in its materials list). No new proposal warranted; flag M-28 row as BALANCE-PENDING pending blueprint verification.

---

## betterstrongholds   [anchors: survival (1)]

Existing rows cover the main loot-seed candidates: M-02 (magic reagents in deep chests, strong consensus), M-08 (coin in treasure rooms, strong consensus), M-34 (tradeable combat-specialist drops, accepted). The M-15 (boss-key from strongholds) was correctly rejected — no boss, so M-15 is wrong.

Two gaps:

- NEW | from: betterstrongholds loot tables (deepest vault/library rooms) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: seed `cold_sweat:soul_stalk` seeds into the stronghold's lowest-level Nether-adjacent rooms — the stalk is a Nether-biome plant normally gated behind portal access; finding seeds in the pre-Nether stronghold gives survival specialists an alternate route to the ingredient before they open a portal, and makes the dungeon delve materially rewarding to the survival pillar specifically (not just magic or economy).

This is different from the existing M-34 rows, which seed combat-supply tradeable items. This specifically creates a survival-pillar loot link (a hard-to-find plant seed as survival pressure reward) that none of the existing rows cover.

- CHALLENGE | from: betterstrongholds loot tables | via: loot-seed | to: economy | motif: M-08 | verdict: REJECT | hook: the consensus M-08 accept is sound but needs a quantity constraint: if coin drops appear in every stronghold chest type, the stronghold becomes a reliable coin farm rather than a rare find, inflating supply and undermining the player-minted-currency model (M-08's anti-inflation design). The Phase 3 author must restrict the coin seed to the *deepest* room type only (the treasure vault, 1 per stronghold), not to the library or corridor chests. Record as BALANCE-PENDING.

---

## cold_sweat   [anchors: survival (1)]

Existing rows are deep. Confirmed accepts include: M-05 (Hearth gating on Create brass/casing — strong consensus), M-12 (insulation materials through cutting/milling — accepted), M-16 (seasonal temperature tie), M-26 (waterskin/hearth consumption), M-33 (insulation-armor service), M-20 (deployer insulation application), M-19 (soul_stalk haunting), M-29 (mob-hide cross-route), M-28 (colony insulation gear request).

Three genuine gaps:

- NEW | from: cold_sweat:soul_stalk (Nether-biome plant from Create haunting — M-19 row) | via: create:haunting → ars_nouveau:imbuement | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the haunting step converts soul_stalk into a cold-essence intermediate; that intermediate is then the required catalyst in an Ars Nouveau imbuement recipe — forcing the survivalist who farms soul_stalk AND the Create operator who runs the haunting kiln AND the Ars specialist to form a supply chain for a single magic reagent; this is the strongest possible advance on the loop (scarcity → survival harvest → Create process → magic consumption) and no existing row captures it as a M-29 cross-route dependency (the M-19 row accepted soul_stalk→haunting as a standalone; M-29 extends it to force magic cross-dependency).

- NEW | from: cold_sweat:chameleon_molt / goat_fur (insulating mob drops) | via: create:mixing (fur + tallow → insulation compound) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Create mixer combines organic insulation with rendered tallow (a Farmer's Delight cutting byproduct) into an "insulation paste" that *also* serves as a required input in an Ars Nouveau ritual or Iron's Spellbooks cauldron brew — making the insulation specialist's processed intermediate a cross-route requirement for the magic pillar; existing M-12 rows only route the furs back into Create (create:milling → insulation fiber for the sewing table), not onward into magic. This forces survival + Create + magic cooperation on one recipe.

- CHALLENGE | from: cold_sweat insulated armor (goat_fur/chameleon/hoglin set) | via: any | to: economy | motif: M-34 | verdict: REJECT | hook: insulated armor is not a boss/danger drop — it comes from farming passive/semi-hostile mobs (goats, chameleons) and from the sewing table; M-34 is specifically "boss/danger output farmed by a combat specialist and traded to non-combat players." Insulating gear is everyday-survivalist production, not combat-specialist output. The M-34 row accepted 2× should be reclassified as M-33 (service-for-hire: the player with hides and a sewing table does the work for other players — the service motif, not the combat-supply motif).

---

## dndesires   [anchors: Create (1)]

Existing rows are very deep. Confirmed accepts: M-12 (fan-processing foreign crops/drops — strong consensus), M-16 (seasonal crop via freezing sail), M-23 (rubber as hull/gasket material), M-24 (hydraulic motors/industrial_fan as drivetrain/propeller), M-19 (haunting_sail as bulk Create→occult transmute), M-32 (rubber as captured byproduct/feedstock), M-29 (rubber as cross-route input forcing trade).

Two genuine gaps not covered by existing rows:

- NEW | from: dndesires:rubber (hydraulic_compacting output) | via: dndesires:hydraulic_compacting → irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: rubber-sealed alchemist cauldron — an Iron's Spellbooks higher-tier brew requires a processed rubber gasket as a sealing component (the cauldron won't hold volatile reagents without it); this forces the rubber specialist (dndesires + hydraulic press) and the Iron's spellbooks alchemist to trade, and it's thematically coherent (industrial precision + magical chemistry); no existing row routes rubber specifically into a magic method as a cross-route dependency — the M-29 accepts so far express it as "rubber in Create/aeronautics recipes" not "rubber in magic recipes."

- NEW | from: dndesires:cardboard_package_* (logistics packaging) | via: recipe (vanilla crafting) | to: economy | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: cardboard packages are the standard shipping unit for aeronautics bulk cargo — the packaging chain (paper → cardboard → sized box) is the economy's logistics arm's *consumable*, and shipping at scale (trade goods between colony and workshop) requires packaging them first; M-31 (logistics-required bulk good) is the right motif — the packages are *consumed* by the logistics process, not just placed; existing M-31 accepts (2–3 rows) exist but were accepted at 2 counts each, all framed as "aeronautics cargo" without specifying the consumption/economy angle; this row specifically anchors to *economy* (the distribution arm needing packaging as consumable infrastructure), which is the correct second pillar for a Create-native logistics mod.

- CHALLENGE | from: dndesires:haunting_sail (bulk haunting fan) | via: create:haunting (native bridge) | to: magic | motif: M-19 | verdict: REJECT | hook: the haunting_sail IS create:haunting at bulk scale — it's a *method provider*, not a mod that needs a weave. Routing "magic mob drops through the haunting sail" is other mods using D&D as a method target, which is their weave, not dndesires's. The accepted M-19 row treats dndesires as the destination ("pass a Wither rose through it") — but this is backwards: dndesires provides the processing method, foreign mods route their materials through it. The correct framing is that D&D's haunting_sail is *listed in the methods palette* as the delivery mechanism for other mods' M-19 weaves; D&D itself doesn't gain a second anchor from being a method target.

---

## ribbits   [anchors: survival (1)]

Existing rows cover: M-02 (toadstool as magic reagent via spirit_fire/imbuement — several accepts), M-08 (amethyst shard → coin, several routing variants), M-11 (toadstool in spirit fire), M-12 (toadstool cooking), M-29 (amethyst-shard trade bridge to Numismatics).

Two gaps:

- NEW | from: ribbits village chests (swamp village loot tables — loot=yes) | via: loot-seed | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: seed a small Ars Nouveau source gem or Iron's Spellbooks scroll fragment into Ribbit village chest loot (the sorcerer's hut chest in particular) — the swamp sorcerer's dwelling yields a fragment of real arcane knowledge, giving exploration of swamp biomes a magic-pillar payoff distinct from the recipe-based M-02 rows; this is a *loot-seed* delivery route for M-02, which the existing M-02 rows propose as recipe methods (toadstool → spirit_fire) but *not* as structure loot; betterstrongholds loot-seed accepted the same pattern for its structure, but nobody applied it to the Ribbit village specifically.

- NEW | from: ribbits:toadstool / ribbits:brown_toadstool | via: dndesires:freezing (fan-freeze the toadstool) → ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a fresh toadstool flash-frozen on a D&D freezing-sail becomes a "crystallized spore" — the cold preservation locks the fungal arcane potential that spirit_fire alone would burn off; the frozen toadstool then feeds an Ars imbuement as a mid-tier reagent; this routes through *two* non-vanilla methods (D&D freezing then Ars imbuement), making it a genuine multi-step processing chain that forces the swamp forager, the Create operator, and the Ars specialist into a three-way supply chain; no existing row combines dndesires:freezing and ars_nouveau:imbuement on the same toadstool path — the M-10 rows propose direct imbuement and the M-12 rows propose cooking, but not the freeze-then-imbue chain.

---

## valarian_conquest   [anchors: survival (1)]

Existing rows are extensive. Confirmed accepts: M-05 (armorsmith station gating on Create parts — strong consensus), M-08 (coin seeded into faction structure loot), M-15 (faction commander drop gates a Create recipe), M-33 (mercenary hire as labor-for-hire), M-34 (faction gear as combat-specialist supply), M-02 (faction elite drops as magic reagents), M-28 (barber_surgeon colony demand), M-04 (faction gear → Create recycle).

Two gaps and one challenge:

- NEW | from: valarian_conquest:*_citizenship (faction allegiance items) | via: recipe (requires a MineColonies-research-unlocked component as ingredient) | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: joining a faction's inner circle (upgrading from basic citizenship to knight-tier membership) requires a MineColonies-researched "Letters Patent" component that only a developed colony can produce — the research is non-tradeable (M-37: knowledge gate), so the faction player who wants elite citizenship must *either* build their own colony to the required research tier *or* commission one from a colony specialist; this is the anti-erosion wall for faction advancement; no existing row uses M-37 on valarian_conquest (the M-37 reject was about station-block gating, a different angle).

- NEW | from: valarian_conquest faction commander/elite signature drop (M-15 loot-seed) | via: loot-seed → occultism:ritual | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: the faction commander's signet ring or battle standard — obtained by clearing a fortified Keep — feeds a high-tier Occultism ritual as a "martial essence" reagent; this is the *magic* arm of the M-15 gate (the boss-key rows lock a Create recipe; this row locks a magic ritual to the same drop), giving the same endgame drop two downstream uses and forcing the combat specialist to choose which specialist (Create or magic) gets the rare commodity; no existing row applies M-02 specifically to the commander's *signature drop* (the accepted M-02 rows seed magic reagents into general faction loot, not the unique commander item).

- CHALLENGE | from: valarian_conquest mercenary hire | via: config/mechanic | to: economy | motif: M-33 | verdict: REJECT | hook: the M-33 accepts (2× for mercenary hire) describe the mechanic correctly but overcount — there are two accepted rows for the same weave (one framing it as "combat escort service," another as "coin-gated hire"). Phase 3 should collapse these into one row; recording the duplicate as a challenge to avoid double-authoring the same KubeJS coin-gate config.

== CHUNK COMPLETE ==
