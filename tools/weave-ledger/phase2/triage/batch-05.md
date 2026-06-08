# Batch 05 — Triage Slate

## betterstrongholds  — slate: 2 KEEP / 8 CUT / 4 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | betterstrongholds loot→magic | motif M-02 | delivery: loot-seed (datapack, deepest room/library chests) | milestone: v0.11.0 | ancient scholars left behind arcane reagents; the dungeon's lore calls it

KEEP  | betterstrongholds loot→economy | motif M-08 | delivery: loot-seed (datapack, deep-treasure room chests only — not every chest) | milestone: v0.9.0 | wealth from an abandoned civilisation seeds early coin circulation without an NPC faucet

MERGE | stronghold chest loot→magic M-02 (5×) | into: betterstrongholds loot→magic | reason: same loot-seed/magic anchor, weaker phrasing
MERGE | betterstrongholds loot chests→economy M-34 (5×) | into: betterstrongholds loot→economy | reason: combat-supply framing on same dungeon loot — the M-08 coin seed already captures the exploration payoff; M-34 surface (rare tradeable component seeded) folds into the kept coin-seed KEEP
MERGE | stronghold chest loot→economy M-08 (3×) | into: betterstrongholds loot→economy | reason: duplicate phrasing, lower confidence
MERGE | betterstrongholds dungeon loot→economy M-08 (1×, 1×, 1×) | into: betterstrongholds loot→economy | reason: all duplicates of the coin-seed KEEP at lower times_suggested

CUT   | betterstrongholds loot→create M-15 (12× REJECT dominant + 3× REJECT + 1×) | motif M-15 | reason: betterstrongholds has no boss entity — M-15 requires a boss drop to gate a recipe; the dungeon is a structure not a boss encounter; REJECT majority confirms
CUT   | betterstrongholds loot→magic M-15 (2×) | motif M-15 | reason: same — M-15 mis-applied to a structure loot table; not a boss key
CUT   | betterstrongholds loot→economy M-15 (1× ACCEPT) | motif M-15 | reason: same structural mis-application; re-tagged correctly in the M-08 KEEP above
CUT   | betterstrongholds loot→economy M-37 (1×) | motif M-37 | reason: seeding an ancienttome into the stronghold is thematically plausible but doesn't add a distinct anchor beyond the M-02 magic-seed already kept; one-off single pass, not worth a separate weave
CUT   | betterstrongholds loot→survival M-26 (1× REJECT) | motif M-26 | reason: everyday-item loot seed doesn't close any production loop; REJECT verdict confirmed
CUT   | betterstrongholds loot→magic M-34 (1×) | motif M-34 | reason: M-34 framing on a structure with no combat-specialist drop surface; already folded into M-08 KEEP
CUT   | betterstrongholds generic coin drop seeding (1× REJECT) | motif M-08 | reason: same as M-08 KEEP but the reject variant that warned against every-chest seeding; constraint absorbed into the KEEP's "deep room only" condition

---

## comforts  — LEAVE (pure QoL / travel gear — all candidate rows are REJECT; the 2 weakly-accepted rows (M-22 hammock moon-event 1A/1R, M-28 colony sleeping bag 1A) are single-pass, no opus corroboration, and add no cross-system material routing; comforts ships no machine, no reagent, no crop)

---

## copperagebackport  — slate: 1 KEEP / 10 CUT / 2 MERGE / 0 DEFER   | anchors after: create (now 1)

KEEP  | copperagebackport deco/blocks→create | motif M-04 | delivery: recipe (create:crushing — copper bars, chests, lanterns, oxidized variants; lossy; vanilla smelt path stays) | milestone: v0.7.0 | weathered copper ornaments feed back into the copper economy via a mechanical crusher — the same recycle the rest of Create's deco palette uses

MERGE | copper tools/armor→create M-04 (2×) | into: copperagebackport deco/blocks→create | reason: tools/armor crush-to-nuggets is the same M-04 motif; consolidate under one KEEP (delivery note: include tools/armor as sub-case)
MERGE | oxidized copper splashing (2× mixed, 1× M-04 ACCEPT) | into: copperagebackport deco/blocks→create | reason: create:splashing de-oxidise is a natural companion to the M-04 crush-recycle; folds into same delivery; not a separate anchor

CUT   | Copper Golem→aeronautics M-24 (1× Opus ACCEPT) | motif M-24 | reason: the Golem is a passive chest-sorter mob, not a propulsion or drivetrain component; no method routes it into Aeronautics; REJECT majority on all Golem-aeronautics rows
CUT   | Copper Golem→create M-05 (1× + 1×) | motif M-05 | reason: gating a vanilla-id copper chest or the Golem behind Create brass is a depth violation on an everyday early item
CUT   | Copper Golem logistics→economy M-28 (1× + 1×) | motif M-28 | reason: the Golem is an autonomous mob, not a colony-work-assignable job; no method routes it; no-motif confirmed
CUT   | Copper Golem→create M-06 (1×) | motif M-06 | reason: sequenced-assembly for a passive chest-sorter mob violates depth-scales-with-power; the Golem is early-game convenience
CUT   | Copper Golem→economy M-33 (1× + 1×) | motif M-33 | reason: M-33 is player-to-player labor; an autonomous Golem mob is not a player providing a service
CUT   | Copper Golem→aeronautics M-31 / M-23 (multiple rows) | motif M-31/M-23 | reason: no-motif; Golem's chest-sorting radius is not a bulk-freight operation
CUT   | copper ingot→economy M-08 (2×) | motif M-08 | reason: copper is abundant vanilla ore, not a scarce regional metal; M-08 requires scarcity as a precondition
CUT   | copper tools→create M-29 pressing (2× mixed) | motif M-29 | reason: gating copper tools on a create:pressing step adds depth to a basic low-tier item; depth guardrail violated
CUT   | oxidized copper→magic M-10 (1× + 1×) | motif M-10 | reason: weathering is aesthetic, not arcane; no thematic valence in Ars Nouveau; REJECT confirmed
CUT   | Copper Golem→create M-20 deployer waxing (1×) | motif M-20 | reason: wax-application via deployer is a thin single-step that doesn't add a second anchor; already partially covered by splashing MERGE above

*Note: copperagebackport reaches only 1 anchor (create). Its Golem has no viable motif tie to a second system — the mod is deco/recycle only. Flag for potential second-weave authoring in v0.7.0 review if a colony or economy tie surfaces.*

---

## createmechanicalcompanion  — slate: 3 KEEP / 14 CUT / 5 MERGE / 0 DEFER   | anchors after: create + survival + economy (now 3)

KEEP  | mechanical wolf modules→create M-06 | motif M-06 | delivery: recipe (create:sequenced_assembly — derpack:incomplete_mechanical_wolf_motherboard chain; netherite plates + quantum_drive as keystone parts) | milestone: v0.7.0 | the mechanical wolf is the pack's flagship Create endgame personal build; a sequenced-assembly chain through incomplete_* parts makes it a real Create milestone

KEEP  | mechanical_wolf_link→survival M-15 | motif M-15 | delivery: loot-seed (boss loot table — e.g. Cataclysm-tier boss drop gates the final quantum_drive/motherboard assembly step) | milestone: v0.7.0 | the wolf's "brain" is gated behind a boss drop — the companion's peak capability is the pack's boss-route on-ramp

KEEP  | quantum_drive/optical_sensor→magic M-29 | motif M-29 | delivery: recipe (KubeJS — gate the quantum_drive or optical_sensor behind an Occultism spirit-infused sub-part or Ars imbuement step, forcing trade between Create specialist and magic specialist) | milestone: v0.11.0 | the wolf's clockwork brain needs an arcane timing crystal the smithy cannot forge — the Create builder must trade with the occultist

MERGE | mechanical wolf modules M-15 (3× + 2× Opus mixed) | into: mechanical_wolf_link→survival M-15 | reason: same boss-key gate on the wolf; prefer the 5× ACCEPT phrasing (wolf-link / quantum_drive boss gate); consolidate
MERGE | booster_rocket→aeronautics M-24 (3× + 1×) | into: mechanical_wolf_link→survival M-15 note | reason: booster_rocket is a wolf-companion module, not a loose propulsion component; REJECT majority confirms it's not a viable Aeronautics drivetrain input; fold as rejected note
MERGE | quantum_drive M-29 cross-route (multiple 1× ACCEPT rows) | into: quantum_drive/optical_sensor→magic M-29 | reason: all express the same cross-route: Create wolf-builder needs a magic-route input; consolidate under single KEEP
MERGE | optical_sensor M-17 FE-charging (2×) | into: mechanical wolf modules→create M-06 | reason: FE-charging of the optical_sensor is a step within the Create assembly chain, not a separate anchor; incorporate as a delivery note (create_new_age:energising as a step in the sequenced chain)
MERGE | mechanical wolf service M-33 (3× 1A rows) | into: quantum_drive/optical_sensor→magic M-29 | reason: M-33 (service-for-hire wolf-building) is valid flavor but doesn't add a distinct anchor — the cross-route dependency already forces specialist trade; collapse as a delivery note

CUT   | quantum_drive/optical_sensor→magic M-10 (6× REJECT dominant) | motif M-10 | reason: clockwork precision parts through arcane imbuement is a tone clash; REJECT majority; mechanical-vs-arcane conflict
CUT   | illager_engineer→economy M-08 (1× blueprint painting) | motif M-08 | reason: seeding a blueprint that mints to coin is the ambient economy endpoint; M-09-style reasoning; no demand-gate
CUT   | illager_engineer→magic M-02 (1× + 1×) | motif M-02 | reason: the illager_engineer has no thematic magic identity; seeding arcane reagents in a tech-workshop mob dilutes both; no hook
CUT   | mechanical_wolf_link→magic M-11 (1×) | motif M-11 | reason: tone clash — a clockwork wolf soul-fused via spirit_fire is lore-incoherent; spirit_fire transmutes organic materials
CUT   | mechanical_wolf_link→magic M-18 (1×) | motif M-18 | reason: spirit_trade acquires scarce materials; the wolf-link is a craftable, not a dimension-sourced rare; mis-motif
CUT   | mob_radar→magic M-19 (1×) | motif M-19 | reason: haunting a radar into a soul vessel is tonal stretch; no natural method surface
CUT   | endgame modules M-37 MineColonies research (1×) | motif M-37 | reason: MineColonies research gating the most advanced wolf modules is plausible but the mod isn't a colony mod; no existing research tree; author-new content risk; single pass
CUT   | booster_rocket→aeronautics M-24 all aeronautics rows | motif M-24 | reason: the booster_rocket is a wolf-companion module; REJECT majority; no structural propulsion surface
CUT   | mechanical_wolf→economy M-34 (1×) | motif M-34 | reason: the wolf is owner-locked personal companion, not a tradeable combat-route supply good; M-34 requires the fighter to supply goods to other players
CUT   | quantum_drive M-06 (2× already-inbound) | motif M-06 | reason: already captured in the M-06 KEEP above; these are duplicates
CUT   | illager_engineer loot M-15 (1×) | motif M-15 | reason: the illager_engineer is a non-boss mob with no signature material; M-15 requires a boss entity; mis-applied
CUT   | optical_sensor M-20 deploy-application (1×) | motif M-20 | reason: the wolf is endgame flagship gear; M-20 (light single-step sibling of M-06) is not appropriate for the deepest companion chain — already captured in M-06 KEEP
CUT   | wolf modules bare sell / ambient economy (multiple) | motif various | reason: retired-economy / ambient endpoint; not demand-gating weaves
CUT   | Illager Workshop magic M-02 loot-seed (1×) | motif M-02 | reason: seeding a magic reagent into a tech-workshop structure is a tone clash; the engineer loot context is already cut above

---

## dungeons-and-taverns-v4.4.4  — slate: 3 KEEP / 8 CUT / 5 MERGE / 0 DEFER   | anchors after: magic + economy (now 2)

KEEP  | dungeons-and-taverns loot→magic | motif M-02 | delivery: loot-seed (datapack — seed Ars source_gem, Iron's scroll, or Occultism soul-gear recipe into tavern/hideout/trial chamber chests; scarce, not every chest) | milestone: v0.11.0 | the dungeon's deeper vaults yield arcane fragments — combat and exploration feed the magic web directly

KEEP  | dungeons-and-taverns loot→economy M-08 | motif M-08 | delivery: loot-seed (datapack — seed Numismatics coin into tavern and tower loot, exclusive trial vaults weighted higher) | milestone: v0.9.0 | cracking open a Dungeons & Taverns chest drops actual currency — exploration has a monetary payoff that circulates back into player trade

KEEP  | dungeons-and-taverns structure loot→create M-15 | motif M-15 | delivery: loot-seed (datapack — ominous trial vault seeds a rare boss-key or Create-tier component; the hardest vault content gates a complex recipe) | milestone: v0.7.0 | the deepest locked vault seeds the fragment that gates a high-tier Create recipe — dungeon-delving motivates tech progression

MERGE | trial chamber key loot→magic M-02 (3×) | into: dungeons-and-taverns loot→magic | reason: same loot-seed/magic M-02 on trial vault; consolidate
MERGE | dungeon/tavern loot→magic M-02 (2× + 2× + 1×) | into: dungeons-and-taverns loot→magic | reason: duplicates at lower times_suggested
MERGE | structure loot→economy M-08 (6× + 2× + 1×) | into: dungeons-and-taverns loot→economy M-08 | reason: coin-seed duplicates; consolidate under highest times_suggested
MERGE | structure loot→economy M-34 (3× + 3× + 1×) | into: dungeons-and-taverns loot→economy M-08 | reason: M-34 (combat supply) on structure loot folds into the economy loot-seed KEEP — exploration payoff already captured; distinct M-34 surface (tradeable drop farmed by specialist) is weak here since the mod has no boss enemy
MERGE | dungeons-and-taverns loot→create M-15 (1×) | into: dungeons-and-taverns structure loot→create M-15 | reason: duplicate phrasing; consolidate

CUT   | dungeons-and-taverns tavern cartographer M-33 (4× mixed → 2R/2A net; 1×) | motif M-33 | reason: the cartographer uses vanilla emerald trades, not Numismatics; M-33 requires player-to-player labor; vanilla NPC faucet — REJECT majority; the 1× M-33 accept for "scout player sells coordinates" is ambient emergent economy, not a recipe/loot weave
CUT   | tavern cartographer→economy M-37 (1× REJECT) | motif M-37 | reason: map-as-knowledge is not a recipe unlock; REJECT confirmed
CUT   | trial vault unique drops→magic M-11 (1× REJECT) | motif M-11 | reason: mod ships no custom items (vanilla minecraft: namespace only); nothing to transmute via spirit_fire
CUT   | dungeons-and-taverns trial keys→magic M-10 (1×) | motif M-10 | reason: trial keys are vanilla progression items; arcane infusion of a key is a tone clash; no material hook
CUT   | trial vault→survival M-34 (1×) | motif M-34 | reason: seeding potions/food into trial vaults is ambient survival; doesn't add a new anchor; already merged
CUT   | structure loot→create M-15 (1× REJECT) | motif M-15 | reason: REJECT — M-15 requires a boss drop; dungeon loot is not a boss drop; kept variant uses the ominous vault specifically
CUT   | dungeon/tavern loot→economy M-08 REJECT (1×) | motif M-08 | reason: the rejected variant warned against trivially abundant coin in every chest — constraint absorbed into the KEEP's sparing distribution condition
CUT   | cartographer villager trade (2× REJECT) | motif M-33 | reason: vanilla NPC emerald trade; not player-run economy; duplicate REJECT confirmed

---

## endermoon  — slate: 1 KEEP / 6 CUT / 2 MERGE / 0 DEFER   | anchors after: magic (now 1)

KEEP  | endermoon event→magic M-22 | motif M-22 | delivery: config/datapack (declare the Ender Moon night as the gate condition for bulk ender pearl farming feeding an ars_nouveau:imbuement or occultism:ritual requiring pearl volume — delivery is event-gate configuration, not a loot table, since endermoon owns no items) | milestone: v0.11.0 | an Ender Moon night yields the pearl surplus needed to power a lunar-keyed ritual — the celestial event becomes a production gate

MERGE | endermoon event→magic M-22 (10× + 1×Opus ACCEPT + 1×Opus + 1×) | into: endermoon event→magic M-22 | reason: all are the same M-22 lunar gate on ender pearls; consolidate; prefer the 14× Opus-corroborated phrasing
MERGE | endermoon ender pearl windfall→magic M-11 (1×) | into: endermoon event→magic M-22 | reason: spirit_fire transmutation of the pearl windfall is a downstream delivery variant of the same M-22 event gate; not a separate anchor

CUT   | endermoon event→economy M-22 bountiful decree (2×) | motif M-22 | reason: the bountiful-decree bounty-board framing would be M-14 (cut — NPC coin faucet) if the board pays coin; the M-22 event-gate is already captured in the KEEP; no distinct second anchor added
CUT   | endermoon Super Ender Moon→survival M-34 (1× + 1× ACCEPT) | motif M-34 | reason: the all-mob surge is a pressure event, not a tradeable specialist drop; endermoon owns no loot table (loot=no); M-34 requires a farmable combat-route good
CUT   | endermoon event→create M-22 (1× REJECT) | motif M-22 | reason: no established motif connects spawn-event gate to Create pillar; REJECT confirmed
CUT   | endermoon event→create M-02 (1× REJECT) | motif M-02 | reason: endermoon owns no items; ender pearl is vanilla; no new connection belongs on endermoon
CUT   | endermoon event→survival M-26 (1× REJECT) | motif M-26 | reason: an untargeted mob-surge doesn't close a production→demand loop; M-26 is for produced goods spent against pressure; no-motif
CUT   | endermoon has no items (1× Opus REJECT) | motif M-22 | reason: confirmed — the weave belongs on the pearl commodity/downstream method, not this mod directly; the KEEP is correctly delivery=event-gate-config on pearls, which is the right surface

*Note: endermoon reaches only 1 anchor (magic). The mod owns no items and no loot tables; its sole connective surface is the event trigger. A second anchor is not viable without inventing new mechanics. Accept as 1-anchor with note.*

---

## galosphere  — slate: 4 KEEP / 9 CUT / 4 MERGE / 0 DEFER   | anchors after: create + magic + economy (now 3)

KEEP  | galosphere deco blocks→create M-04 | motif M-04 | delivery: recipe (create:crushing — allurite/lumiere bricks, pink salt blocks, crystal deco sets; lossy; XP nugget byproduct) | milestone: v0.7.0 | mis-placed crystal bricks feed back into the crusher for a gravel return and XP nugget — standard deco-recycle

KEEP  | galosphere:allurite_shard / lumiere_shard→magic M-07 | motif M-07 | delivery: recipe (existing reserved role; confirm not displaced by future updates) | milestone: v0.11.0 | the shards already gate magic conversions as attunement catalysts — this is galosphere's established magic anchor; record to prevent future accidental override

KEEP  | galosphere palladium ore→create M-03 | motif M-03 | delivery: recipe (create:crushing — raw_palladium / deepslate_palladium_ore yields crushed palladium + byproduct nugget; vanilla smelt path stays) | milestone: v0.7.0 | regional palladium ore feeds the Create crushing chain for ore-doubling — the standard tech spine extension for a secondary metal (⚠ galosphere:silver_ingot = PALLADIUM, tagged c:ingots/palladium, never c:ingots/silver)

KEEP  | galosphere palladium→economy M-08 | motif M-08 | delivery: recipe (Create-processed palladium → numismatics mint; player presses coin from the scarce cave metal) | milestone: v0.9.0 | scarce regional palladium, once crushed and smelted in Create's arc furnace, mints into Numismatics coins — the Crystal Canyon region's mint specialisation

MERGE | galosphere:silver_ingot / raw palladium / deepslate_palladium_ore→create M-03 (4× Opus + 2× + 2× + 1×) | into: galosphere palladium ore→create M-03 | reason: all M-03 palladium crushing rows; consolidate under 13× ACCEPT dominant
MERGE | palladium ingot→economy M-08 (5× + 3× Opus + 2× + 2× Opus + 1× + 1×) | into: galosphere palladium→economy M-08 | reason: all M-08 palladium coin-mint rows; consolidate under 10× ACCEPT dominant
MERGE | galosphere allurite/lumiere bricks deco M-04 (3× + 1× Opus + 1× Opus) | into: galosphere deco blocks→create M-04 | reason: same deco-crush motif; subsets of the 20× Opus ACCEPT dominant row
MERGE | palladium as coin metal M-30 (1×Opus + 1× + 1×) | into: galosphere palladium→economy M-08 | reason: M-30 regional scarcity is the underlying reason palladium has value as M-08 coin; the mint-KEEP already implies regional scarcity; no separate anchor needed (M-30 is the foundation, M-08 is the expression); absorbed as delivery context

CUT   | galosphere:silver_ingot unified as c:ingots/silver (2× REJECT + 1×) | motif (none) | reason: CLAUDE.md hard guardrail — galosphere:silver_ingot is PALLADIUM (c:ingots/palladium); never unify as silver; hard cut
CUT   | amber preservation→magic M-10 (6× REJECT dominant + 1×) | motif M-10 | reason: amber preservation encases, not refines; no arcane valence; REJECT majority; the 1× ACCEPT (amber as stable reagent in magic) is a stretch without established motif; amber M-29 cross-route also cut (1× ACCEPT) — same reasoning, single pass
CUT   | galosphere:preserved_transform_recipe→magic M-11 / M-29 (1× + 1× ACCEPT) | motif M-11/M-29 | reason: preserved_transform_recipe is Galosphere's own type; routing spirit_trade or cross-route through it would require authoring new content; single-pass; no method surface established
CUT   | galosphere:silver_ingot→magic M-10 (2× REJECT) | motif M-10 | reason: palladium's reserved role is M-08; routing into arcane infusion would double-spend the reagent; REJECT confirmed
CUT   | galosphere:allurite/lumiere shards→create M-19 (1×) | motif M-19 | reason: shards are RESERVED M-07 attunement catalysts; routing through haunting risks conflicting with reserved role; REJECT
CUT   | galosphere:echo_altar / combustion_table→create M-05 (1×) | motif M-05 | reason: M-05 requires the mod's own machine gated on Create parts; these native methods are not Create-gated; mis-applied
CUT   | galosphere:silver_bomb→economy M-34 (2× REJECT) | motif M-34 | reason: silver bomb is a thrown weapon, not a farmed drop; M-34 requires a combat specialist supplying tradeable goods; REJECT confirmed
CUT   | galosphere:silver_bomb→economy M-26 (1× Opus REJECT) | motif M-26 | reason: too-ambient as standalone; native consumption of a thrown item is M-26 baseline but doesn't add a new anchor
CUT   | galosphere loot→economy M-34 (1× REJECT) | motif M-34 | reason: cave-exploration ambient drops are not combat-specialist farming; REJECT confirmed
CUT   | galosphere:silver_ingot (palladium)→create M-20 (1×) | motif M-20 | reason: sterling armour is a smithing-table upgrade already; a deployer path duplicates the vanilla flow; REJECT confirmed

---

## inventoryprofilesnext  — LEAVE (pure client-side QoL UI mod — 1 candidate row, all REJECT, no item/recipe/method surface; the only row is a behavioral/UI synergy with no material hook; no weave is possible)

---

## meadow  — slate: 5 KEEP / 11 CUT / 7 MERGE / 0 DEFER   | anchors after: create + economy + magic + survival (now 4)

KEEP  | meadow:alpine_salt→create M-12 | motif M-12 | delivery: recipe (create:milling — alpine_salt_ore through millstone yields fine alpine salt; the Create processing chain makes salt a manufactured good, not just a pick-up) | milestone: v0.7.0 | salt ore through the millstone is the obvious Create entry for an alpine mineral — gives alpine regions a Create production good

KEEP  | meadow:cheese_wheel→economy M-35 | motif M-35 | delivery: recipe/config (cheese_form pressing + maturing step via create_cheese:maturing; certify as M-35 aging-specialist good) | milestone: v0.9.0 | meadow cheese already has a native aging step — it's a genuine maturation good and a cheese specialist has a time-locked product to trade

KEEP  | meadow:cheese_wheel→economy M-28 | motif M-28 | delivery: config (MineColonies Tavern/Restaurant hut requests cheese wheels as colony food; dairy farming becomes a viable colony supply route) | milestone: v0.9.0 | colony workers request alpine cheeses — the meadow biome's dairy output finds a guaranteed demand sink in the colony food request system

KEEP  | meadow:chambray_wool→aeronautics M-23 | motif M-23 | delivery: recipe (create:mechanical_crafting or aeronautics envelope recipe — felted chambray wool as a required airship envelope/gasbag lining material; wool → felt → envelope) | milestone: v0.9.0 | felted alpine wool is the natural envelope and lining for a lighter-than-air airship — the mountain textile specialist supplies the shipwright

KEEP  | meadow alpine herbs (lavender/yarrow)→magic M-10 | motif M-10 | delivery: recipe (ars_nouveau:imbuement or irons_spellbooks:alchemist_cauldron_brew — alpine herbs as infusion inputs for biome-specific glyphs or healing brews) | milestone: v0.11.0 | alpine herbs gathered from meadow biomes are arcane infusion inputs — lavender and yarrow link the high-altitude biome to the magic web

MERGE | meadow:alpine_salt_ore→create M-12 (2× + 1× + 1× M-03 accepted variant) | into: meadow:alpine_salt→create M-12 | reason: all are the same mill-salt-ore delivery; consolidate under 23× dominant; the 2× M-03 crush variant folds in (note: M-03 is for ore-doubling rewards, not food ingredients — milling is correct motif; M-03 cut below)
MERGE | meadow:cheese_wheel→create M-35 (3×) | into: meadow:cheese_wheel→economy M-35 | reason: same maturation anchor; economy/trade is the right to_pillar for a time-locked specialist product; Create is delivery not anchor
MERGE | meadow:cheese_wheel→economy M-26 (1× + 1×) | into: meadow:cheese_wheel→economy M-35 | reason: cheese consumed against diet pressure is already the M-35 demand-renewal mechanism; fold into aging-specialist KEEP as delivery note
MERGE | meadow alpine crops→survival M-16 (4× + 2× + 1× + 1×) | into: meadow alpine herbs→magic M-10 | reason: seasonal M-16 gating on alpine crops is a delivery variant of the same biome-specific herb anchor — the magic KEEP already captures season-sensitive supply; M-16 herbs as magic reagents implies season gating; fold as context; no separate anchor
MERGE | meadow:cheese_wheel→economy M-28 colony (1× alpine dishes) | into: meadow:cheese_wheel→economy M-28 | reason: duplicate; consolidate
MERGE | meadow:climbing_rope→aeronautics M-23 (2×) | into: meadow:chambray_wool→aeronautics M-23 | reason: rope rigging is a companion delivery to the envelope/lining KEEP; folds in as additional structural material note (rope as rigging, felt as envelope)
MERGE | meadow:alpine_salt→economy M-30 (3× + 1× + 1×) | into: meadow:alpine_salt→create M-12 | reason: M-30 regional scarcity is the foundational reason alpine salt has trade value; the M-12 processing KEEP already implies regional lock; absorbed as delivery context (note: salt is biome-locked to meadow biomes)

CUT   | meadow:chambray_wool→create M-12 milling (11× REJECT dominant) | motif M-12 | reason: milling felt/wool is not a natural Create operation — milling is for stone/ore, not textiles; REJECT majority
CUT   | meadow:chambray_wool→magic M-10 (5× REJECT dominant) | motif M-10 | reason: feltwork is peasant agrarian craft; arcane infusion of wool cloth has no thematic anchor in Ars Nouveau; REJECT majority
CUT   | meadow:cheese_wheel→create M-06 sequenced_assembly (1× REJECT) | motif M-06 | reason: routing a food item through sequenced assembly violates the depth-scales-with-power guardrail; cheese is everyday food, not endgame machinery
CUT   | meadow:cheese_wheel→magic M-11 (1× REJECT) | motif M-11 | reason: burning dairy as a ritual reagent has no thematic grounding; forced
CUT   | meadow:alpine_salt→economy M-08 (1× REJECT) | motif M-08 | reason: salt is an everyday regional material, not a precious metal; M-08 requires scarce processed metal for coin; REJECT confirmed
CUT   | meadow:amethyst_cheese_wheel→magic M-10 (1×) | motif M-10 | reason: the amethyst cheese is a specific food variant; routing it through arcane infusion stretches the "no basic component behind infusion" guardrail — a cheese wheel is everyday food; single pass, no corroboration
CUT   | meadow:alpine_salt→create M-35 maturation (1×) | motif M-35 | reason: salt as a required create_cheese maturing input is a M-29 cross-route dependency framing, not M-35 (which is value added by time); the M-29 framing (1× ACCEPT) folds into the cheese M-35 KEEP as a delivery note — salt required for maturing step is implicit in the aged-cheese chain
CUT   | meadow:alpine_salt→create M-16 seasonal (1× REJECT) | motif M-16 | reason: alpine_salt_ore is worldgen, not a seasonal crop; REJECT confirmed
CUT   | meadow:chambray_wool→create M-05 (2× mixed) | motif M-05 | reason: M-05 requires the mod's flagship item built in its own machine gated on Create parts; the sleeping bag/hammock is not built in a Create machine; mis-applied; also depth guardrail (wool textile is everyday)
CUT   | meadow:chambray_wool→economy M-29 cross-route (2×) | motif M-29 | reason: colony upholstery demand is speculative; no method established; the aeronautics KEEP already captures the textile's primary cross-system use
CUT   | meadow:cheese_wheel→economy M-30 (1×) | motif M-30 | reason: the cheese M-35 KEEP already implies the cheese is regionalized (alpine biome); a separate M-30 row adds noise without a new weave; fold into M-35 delivery context

---

## midnightthoughts  — LEAVE (pure behavioral / event mod — all 9 candidate rows REJECT; ships no items, no loot tables, no material outputs; the only surface is a buff event (well-rested) with no material hook that any motif M-01..M-38 can route through)

---

## minecolonies_compatibility  — slate: 3 KEEP / 8 CUT / 4 MERGE / 0 DEFER   | anchors after: economy + create (now 2)

KEEP  | minecolonies_compatibility colony outputs→economy M-28 | motif M-28 | delivery: config (colony Butcher/Cook/Orchardist jobs produce goods — butchered meat, modded crops — that enter the shared supply line; colony as the cheaper-basics route for food/raw goods) | milestone: v0.9.0 | colony workers produce goods that non-colony players can source — the M-28 colony route for basics, making the colony specialist an economy node

KEEP  | minecolonies_compatibility TaCZ Gunner job→economy M-37 | motif M-37 | delivery: config (MineColonies research tree gates the Gunner hut — the TaCZ armed-guard job requires research that can't be purchased, only unlocked through colony progression) | milestone: v0.9.0 | the TaCZ Gunner job is gated behind colony research — you can't buy the capability, only its product; a colony-runner holds the knowledge lock

KEEP  | citizen_terminal/citizen_stock_keeper→create M-05 | motif M-05 | delivery: recipe (KubeJS — gate the citizen_terminal or citizen_stock_keeper behind a create:mechanical_crafting step requiring a Create component — e.g. brass casing or zinc mesh — so the colony storage bridge has a Create fabrication cost) | milestone: v0.7.0 | the colony network storage terminal is a precision interface device; it should require Create fabrication like any other network block — the colony route runs through the tech spine

MERGE | minecolonies_compatibility colonial-job outputs M-28 (5× + 2× + 1×) | into: minecolonies_compatibility colony outputs→economy M-28 | reason: all M-28 colony-supply rows; consolidate under highest times_suggested
MERGE | Courier↔Create Stock Link M-29 / M-18 (1× + 1×) | into: citizen_terminal→create M-05 | reason: the courier-stock-link bridge is an expression of the same colony-Create integration; fold as delivery context (courier uses the terminal that requires Create fabrication)
MERGE | Orchardist M-16 seasonal (1×) | into: minecolonies_compatibility colony outputs→economy M-28 | reason: Orchardist buffering seasonal crop supply is a colony-route delivery variant of the M-28 anchor; fold as context note
MERGE | Butcher/Cook M-12 FD integration (2×) | into: minecolonies_compatibility colony outputs→economy M-28 | reason: Butcher job routing carcasses through FD cutting boards is a delivery detail of the colony-supply KEEP; not a separate anchor

CUT   | tacz_dummy_gun→create M-05 (2× mixed) | motif M-05 | reason: the dummy gun is a job-assignment item, not a functional weapon; gating it on Create parts would confuse the colony job system; REJECT confirmed; M-05 is better expressed via citizen_terminal (kept above)
CUT   | Courier↔aeronautics M-31 / M-18 aeronautics (2× REJECT + 1×) | motif M-31/M-18 | reason: no-motif for the courier→aeronautics link; the courier is a colony logistics actor, not an aeronautics component; REJECT confirmed
CUT   | colony Fluid Manager→aeronautics M-13 (1×) | motif M-13 | reason: M-13 is fuel→engine; the Fluid Manager handles fluid routing but doesn't feed Aeronautics propulsion; mis-motif
CUT   | minecolonies_compatibility magic Caster/Scholar hut (1× REJECT) | motif M-29 | reason: authoring new colony jobs (Ars imbuement, spirit_fire) doesn't exist in this mod's scope; REJECT confirmed
CUT   | citizen_terminal M-20 deploy-application (1× REJECT) | motif M-20 | reason: M-20 requires applying a woven part onto a base; the terminal is functional infrastructure, not an upgradeable item; REJECT confirmed
CUT   | tacz_dummy_gun→economy M-34 (3× ACCEPT but motif issue) | motif M-34 | reason: the dummy gun is a job token, not a farmable combat drop; the M-34 framing (colony gunners as combat-supply) has no tradeable output from gunner job kills; the M-37 research-gate KEEP is the cleaner anchor for the Gunner job
CUT   | colony Gunner M-28 TaCZ ammo supply (1× ACCEPT) | motif M-28 | reason: the Gunner hut producing ammo cheaper than solo crafting is the M-28 cheaper-basics path, but the M-37 research-gate KEEP already captures the Gunner job's economy anchor and is the stronger motif (knowledge lock, not just cheaper production); absorb into M-37 KEEP delivery notes
CUT   | minecolonies_compatibility M-33 colony Courier service (1×) | motif M-33 | reason: a colony player renting courier runs to non-colony players is M-33 service framing, but the courier's logistics function is better expressed through the M-28/M-05 colony-Create integration KEEPs; single pass, no corroboration

---

## mutantszombies  — slate: 1 KEEP / 5 CUT / 1 MERGE / 0 DEFER   | anchors after: survival (now 1)

KEEP  | mutant zombie variants→survival M-34 | motif M-34 | delivery: loot-seed (datapack — add a rare drop to mutant brute / rotten mutant loot tables: a "mutated flesh" or "biotic reagent" that a combat specialist farms and trades; note: dossier says loot=no for mod-registered loot, but standard zombie drops remain; confirm whether a datapack can add drops to this mod's mobs before authoring) | milestone: v0.13.0 | harder zombie variants should drop something a regular zombie doesn't — a combat specialist farms the surge and trades the rare biological material to magic players needing it

MERGE | mutant mob drops→magic M-11 spirit_fire (3×, 2A/1R) | into: mutant zombie variants→survival M-34 | reason: spirit_fire transmutation of the mutant drop is the downstream delivery of the M-34 combat-supply KEEP — the magic tie is implicit in the biotic reagent hook; fold as delivery context (the farmed material feeds Occultism spirit_fire)

CUT   | mutantszombies as magic-drop source M-02 (2× Opus REJECT dominant) | motif M-02 | reason: loot=no confirmed — the mod registers no loot tables; a loot-seed on non-existent tables is impossible without authoring new content; REJECT majority confirmed
CUT   | mutant zombie variants→magic M-02 (1×) | motif M-02 | reason: same loot=no constraint; but NOTE: the M-34 KEEP above proposes adding drops via datapack — if that succeeds, the M-02 (magic reagent drop) is a valid delivery variant; fold as note on the M-34 KEEP delivery
CUT   | mutantszombies→create M-15 (1× REJECT) | motif M-15 | reason: zombie variants are not thematically a gate to Create engineering progression; tone clash; REJECT confirmed
CUT   | mutantszombies survival M-26 config (1× REJECT) | motif M-26 | reason: raising threat baseline is already the survival anchor; a second survival link adds no new pillar; REJECT confirmed
CUT   | mutantszombies economy M-34 (1× REJECT — no drops) | motif M-34 | reason: M-34 requires a tradeable drop; loot=no means no trade surface without the datapack addition being confirmed; REJECT of the bare "harder mobs drive demand" framing

*Note: mutantszombies reaches only 1 anchor (survival). The mod owns no loot tables (loot=no). The M-34 KEEP is conditional on confirming a datapack can inject drops into this mod's mob tables — flag for playtest verification. A second anchor is not viable without new content authoring.*

---

## s_a_b  — slate: 3 KEEP / 9 CUT / 3 MERGE / 0 DEFER   | anchors after: create + aeronautics + economy (now 3)

KEEP  | s_a_b:hardsteelblock/doublesteelblock→create M-06 | motif M-06 | delivery: recipe (create:sequenced_assembly — multi-step hull-plate chain: press → compacting → weld → harden; top-tier hard/double steel plate through a derpack:incomplete_hull_panel intermediate) | milestone: v0.7.0 | the toughest armor plating earns a sequenced-assembly chain — it doesn't spring from a mixing bowl; the machine that builds the hull is a Create milestone

KEEP  | s_a_b steel plates→aeronautics M-23 | motif M-23 | delivery: recipe (aeronautics construction — hard/light steel plates as required structural ingredients in hull/airframe blocks, scaling depth with tier: lightsteelblock = basic frame, hardsteelblock = armored hull) | milestone: v0.9.0 | armored hulls require fabricated steel plating — you can't bolt raw iron onto a pressure hull; the armor chain feeds the shipwright

KEEP  | s_a_b steel plates→economy M-34 | motif M-34 | delivery: recipe/trade (a Create steel-armor specialist produces hull panels that ship-builders and fort-builders who lack the steel pipeline must source; the combat-grade armor chain feeds both the PvP fortification economy and the aeronautics supply chain) | milestone: v0.9.0 | the player who runs the Create steel-armor chain becomes the hull-plate supplier — combat-grade material traded to builders and shipwrights

MERGE | s_a_b:hardsteelblock sequenced_assembly (6× + 3× + 2× + 1× Opus) | into: s_a_b:hardsteelblock→create M-06 | reason: all M-06 sequenced-assembly hull-plate rows; consolidate under 9× ACCEPT dominant
MERGE | s_a_b:lightsteelblock/hardsteelblock→aeronautics M-23 (6× + 4× + 2× + 1× Opus + 1× + 1×) | into: s_a_b steel plates→aeronautics M-23 | reason: all M-23 structural plating rows; consolidate; include tiered delivery note (light=basic, hard=armored)
MERGE | s_a_b:hardsteelblock bulk freight M-31 (2× mixed) | into: s_a_b steel plates→economy M-34 | reason: heavy bulk freight of armor plate requiring aeronautics (M-31) is a delivery mechanism for the same economy anchor — the plate that must be shipped is the plate that fuels the M-34 trade; fold as delivery context

CUT   | s_a_b colored steel plates→create M-04 crush (3× REJECT dominant + 1× + 1×) | motif M-04 | reason: crushing armor plate back to steel undercuts the fortification purpose; M-04 is primarily for deco/stone sets; REJECT majority; the colored variants are aesthetic fills
CUT   | s_a_b:hardsteelblock→economy M-08 (1× Opus ACCEPT) | motif M-08 | reason: M-08 is for raw-metal-to-coin chains (M-08 = player-minted currency from scarce ore); selling construction blocks is a player choice captured by M-34 KEEP; double-counting; re-expressed correctly in M-34
CUT   | s_a_b:lightsteelblock→create M-06 (1× REJECT) | motif M-06 | reason: light steel is an everyday building block; sequenced assembly on the base tier violates depth-scales-with-power; REJECT confirmed
CUT   | s_a_b:lightsteelblock→create M-23 compacting (1× — marked M-23 but delivery is compacting, not aeronautics) | motif M-23 | reason: duplicate of aeronautics M-23 KEEP's base-tier entry; consolidate into M-23 KEEP
CUT   | s_a_b:hardsteelblock→survival M-15 boss-drop gate (1× + 1× mixed) | motif M-15 | reason: armor blocks are structural/decorative; gating the hardest tier behind a boss drop frustrates builders who don't have a combat specialist; the M-06 depth chain is the appropriate gate; REJECT confirmed
CUT   | s_a_b:steelblock→economy M-30 (1× ACCEPT) | motif M-30 | reason: regional scarcity belongs on steel's source mod (the ore/ingot owner), not on this downstream block sink; double-gating the same scarcity on a secondary consumer adds noise; REJECT confirmed
CUT   | s_a_b:lightsteelblock→economy M-28 colony blacksmith (1×) | motif M-28 | reason: a colony blacksmith producing basic light-steel blocks is plausible but steel is not a basic colonial craft (it requires blast furnace); depth vs. cost guardrail; single pass; weak motif fit
CUT   | s_a_b:brass_* glyph sign blocks→create M-04 / M-12 (2× 1A rows) | motif M-04/M-12 | reason: the brass typeface set from s_a_b is a deco set; M-12 / M-04 on deco signage adds no loop value; "Create brass makes signs" is ambient decoration, not a weave that closes a loop
CUT   | s_a_b steel plating survival M-26 (1×) | motif M-26 | reason: armor blocks consumed as fortification cost is real pressure but M-26 is better expressed as the trade demand in M-34; no separate anchor added

---

## supplementaries  — slate: 3 KEEP / 10 CUT / 2 MERGE / 0 DEFER   | anchors after: create + magic + aeronautics (now 3)

KEEP  | supplementaries:flax→create M-12 | motif M-12 | delivery: recipe (create:milling — flax → linen fiber / flaxseed oil; linen → rope or pressed oil) | milestone: v0.7.0 | flax is Supplementaries' farmable crop; milling it into linen fiber is the natural Create pull — the textile specialist's output feeds rope and oil chains

KEEP  | supplementaries:ash→magic M-10 | motif M-10 | delivery: recipe (ars_nouveau:imbuement — ash as a ritual purity/cleansing catalyst; sourced from burning/haunting) | milestone: v0.11.0 | ash is a Create/haunting byproduct that attunes into a minor purification catalyst — players burning things already produce it; routes an otherwise-wasted byproduct into the magic web

KEEP  | supplementaries:flax/rope→aeronautics M-23 | motif M-23 | delivery: recipe (aeronautics structural — linen fiber / rope as a required rigging/sail material for basic-tier airship envelopes or rope-ladder gangways; create:milling already produces the fiber) | milestone: v0.9.0 | linen from flax is the natural canvas for a lighter-than-air envelope — the farm specialist's crop output feeds the shipwright

MERGE | supplementaries:flax seasonal M-16 (4× + 1×) | into: supplementaries:flax→create M-12 | reason: Serene Seasons flax fertility window is a delivery context for the milling KEEP (seasonal scarcity on the rope supply tightens in winter) — fold as delivery note; not a separate anchor
MERGE | supplementaries:ash M-11 spirit_fire (1×) | into: supplementaries:ash→magic M-10 | reason: ash spirit_fire transmutation (M-11) and ash imbuement (M-10) both express the same magic anchor for ash; the M-10 phrasing (ash as catalyst) is the stronger hook with 10× backing; fold M-11 as alternative delivery note

CUT   | supplementaries:ash→create M-12 flux (6× REJECT dominant) | motif M-12 | reason: ash as metallurgical flux in Create mixing is a deeper Create-internal edge; supplementaries already anchors Create; REJECT majority; doesn't add a second pillar
CUT   | supplementaries:jar/faucet→create M-12 (4× REJECT dominant) | motif M-12 | reason: jar/faucet ↔ Create fluid logic is an existing behavior-level integration; no new recipe edge needed; REJECT majority
CUT   | supplementaries:ash→create M-32 byproduct (1× ACCEPT) | motif M-32 | reason: ash as TFMG hot-blast flux is a reasonable M-32 byproduct route but it doesn't add a new pillar anchor (Create is already kept); single pass; fold as a potential authoring note in v0.7.0 TFMG weave
CUT   | supplementaries:ash_bricks→create M-04 crush (1×) | motif M-04 | reason: ash-brick crushing is a thin recycle with no loop value; doesn't add a second anchor; Create is already anchored via M-12 flax
CUT   | supplementaries:candy→economy M-28 colony (1×) | motif M-28 | reason: candy is a sugar-tier food; while colony child happiness is documented, candy is not a load-bearing colony supply item; single pass; weak motif surface
CUT   | supplementaries:flax→magic M-10 rope imbuement (1× REJECT) | motif M-10 | reason: flax rope as arcane reagent is too arbitrary; rope is mundane; Ars Nouveau uses nature/gem/essence ingredients; REJECT confirmed
CUT   | supplementaries:cannon→aeronautics createbigcannons (1× REJECT) | motif (none) | reason: the supplementaries cannon is a decorative toy; routing it into Create Big Cannons' industrial system is a tone clash; no motif
CUT   | supplementaries:safe→economy M-33 (2× REJECT) | motif M-33 | reason: a safe as market-stall infrastructure is ambient decoration behavior; M-33 requires a player performing work on another player's materials; REJECT confirmed
CUT   | supplementaries:soap→create M-04 splashing (1× REJECT) | motif M-04 | reason: splashing already produces soap (inbound weave per dossier); re-proposing it is circular; REJECT confirmed
CUT   | supplementaries:jar/faucet→aeronautics M-31 (1× REJECT) | motif M-31 | reason: a gravity-fed faucet is not a bulk cargo mover; M-31 is for heavy/bulk goods requiring freight aeronautics; mis-motif; REJECT confirmed
CUT   | supplementaries:flax→magic M-12 Agronomic Sourcelink (1×) | motif M-12 | reason: Ars Agronomic Sourcelink passively harvesting Source from crop growth is an emergent behavior, not a recipe weave; no method routing; fold as design note (flax farm doubles as Source farm — no authoring needed)

---

## tfmg  — slate: 7 KEEP / 15 CUT / 7 MERGE / 0 DEFER   | anchors after: aeronautics + create + economy (now 3)

KEEP  | tfmg fuels→aeronautics M-13 | motif M-13 | delivery: recipe/config (TFMG combustion engine → Aeronautics engine/generator fuel intake; diesel / gasoline / LPG from distillation tower directly power airship engines — the fuel supply line) | milestone: v0.9.0 | the distillation tower refines crude into the exact fuels that power Aeronautics engines — airship propulsion runs on industrial chemistry

KEEP  | tfmg:steel→aeronautics M-23 | motif M-23 | delivery: recipe (aeronautics construction — steel plate/beams as load-bearing airframe and pressure hull structural ingredients; two-tier: aluminum for lighter craft, steel for armored freighters) | milestone: v0.9.0 | steel plate is the obvious structural alloy for load-bearing airframes — building a ship without going through the blast furnace first feels wrong

KEEP  | tfmg:combustion_engine→aeronautics M-24 | motif M-24 | delivery: recipe (aeronautics drivetrain — TFMG combustion engine block as a required propulsion/engine mount component; the factory-built powerplant that drives the propeller) | milestone: v0.9.0 | a TFMG combustion engine bolted into a Create Aeronautics engine mount is exactly the factory-builds-the-plane fantasy; the drivetrain side of the same supply line

KEEP  | tfmg:steel→economy M-08 | motif M-08 | delivery: recipe (numismatics mint — steel ingot Create-processed → player-pressed coin; steel as a premium trade commodity; note: steel is abundant-iron-derived but the multi-step blast furnace chain makes it a processed-scarcity good worth minting) | milestone: v0.9.0 | smelted steel is a high-effort multi-step output (ore→coke→blast furnace→ingot) — a natural Numismatics trade currency for a player who runs the full industrial chain

KEEP  | tfmg:plastic→create M-29 | motif M-29 | delivery: recipe (KubeJS — TFMG plastic required as an insulation/housing input in a Create or magic-adjacent recipe, forcing the magic/tech specialist to source from the industrial chain) | milestone: v0.7.0 | TFMG plastic is required in some Create or magic-adjacent recipes — the magic specialist can't make the insulated component without the industrial chemist's polymer output

KEEP  | tfmg ore byproducts (sulfur/saltpeter/coke)→create M-32 | motif M-32 | delivery: recipe (createbigcannons:big_cartridge_filling — sulfur + saltpeter + charcoal → gunpowder → propellant; coal coke routed back as blast-furnace fuel; industrial circularity) | milestone: v0.7.0 | coke-oven byproducts aren't waste — sulfur and saltpeter feed the cannon propellant chain; coke re-enters the blast furnace; industrial byproducts become inputs

KEEP  | tfmg regional ores→economy M-30 | motif M-30 | delivery: config (GTMOGS ore-gen — crude oil deposit placement, bauxite biome lock, lithium region lock; these gate refined fuel, aluminum, and FE storage to specific regions) | milestone: v0.9.0 | oil and bauxite only generate in certain regions — refined fuel and aluminum must be traded across the map; whoever controls the oil region controls everyone's fuel supply

MERGE | tfmg diesel/gasoline/LPG→aeronautics M-13 (18×Opus + 14× + 6× + 2×Opus + 1×Opus) | into: tfmg fuels→aeronautics M-13 | reason: all fuel-to-engine rows; consolidate under 36×Opus dominant
MERGE | tfmg:steel aluminum hull M-23 (6×Opus + 5× + 2×Opus + 1×Opus + 1×) | into: tfmg:steel→aeronautics M-23 | reason: all structural alloy M-23 rows; aluminum is folded as the lighter-tier variant
MERGE | tfmg:combustion_engine drivetrain M-24 (9× + 3×Opus + 2×Opus + 1×) | into: tfmg:combustion_engine→aeronautics M-24 | reason: all M-24 drivetrain rows; consolidate; aluminum flywheel/cogwheel included as lightweight variant delivery note
MERGE | tfmg steel/fuel M-08 (13×Opus + 11×Opus + 3×Opus) | into: tfmg:steel→economy M-08 | reason: all M-08 processed-metal coin rows; consolidate; aluminum/plastic M-08 (3×, 1R) cut as steel is sufficient flagship
MERGE | tfmg byproducts M-32 (4×Opus + 1×Opus + 1×) | into: tfmg ore byproducts→create M-32 | reason: all byproduct-feed-chain rows; consolidate; cast_iron offcut M-32 (1×) folded as sub-case
MERGE | tfmg regional scarcity M-30 (3×Opus MIXED + 1×Opus + 1×) | into: tfmg regional ores→economy M-30 | reason: all GTMOGS regional ore-gen rows; the M-30 rows flagged bare-sell are correctly cut below; the genuine scarcity-gate rows consolidate here
MERGE | tfmg:saltpeter/sulfur→createbigcannons M-34 / M-29 (2×Opus + 1×Opus + 1× + 1×) | into: tfmg ore byproducts→create M-32 | reason: the gunpowder chain from industrial byproducts is the same byproduct-to-input KEEP; M-34 / M-29 framings express the same cannon propellant delivery; fold as delivery note

CUT   | tfmg Voltage/FE→magic M-17 (7× REJECT dominant) | motif M-17 | reason: TFMG's dieselpunk industrial power grid charging arcane foci is a tone clash; the "industrial smog powers the wizard" image conflicts; REJECT majority; M-17 is better expressed via Create Addition's own charging station without pulling TFMG's heavy-industry aesthetic in
CUT   | tfmg:sulfur/saltpeter→magic M-10 (5× REJECT dominant + 2×) | motif M-10 | reason: industrial chemistry inputs have no thematic magic resonance; REJECT majority confirmed
CUT   | tfmg biomass/crop vat M-12 survival (4× REJECT dominant) | motif M-12 | reason: TFMG already deeply anchors Create; a survival crop-biomass route spreads too thin; REJECT majority
CUT   | tfmg:aluminum/plastic M-08 (3× REJECT dominant) | motif M-08 | reason: one economy weave on TFMG's processed metals (steel) is sufficient; aluminum and plastic are secondary; REJECT confirmed
CUT   | tfmg steel mint M-30 bare sell (3×Opus MIXED) | motif M-30 | reason: bare sell link — "steel/fuel is valuable and sellable" is the ambient endpoint; the real demand-gating is M-30 regional ore-gen (captured in KEEP) and M-29 cross-route (captured in plastic KEEP); cut the sell-framing rows
CUT   | tfmg combustion engine→create M-06 sequenced_assembly (1× REJECT) | motif M-06 | reason: TFMG is already Create-anchored; routing sequenced_assembly through the engine deepens Create-internal but adds no second pillar; REJECT confirmed
CUT   | tfmg concrete/asphalt→create M-04 (1× + 1× REJECT) | motif M-04 | reason: industrial concrete is cheap; M-04 recovery edge adds noise without loop advancement; REJECT confirmed
CUT   | tfmg:lubricant→create M-26 / M-32 (1× REJECT + 1× REJECT) | motif M-26/M-32 | reason: lubricant upkeep is not a motif in M-01..M-38; M-32 item_application of lubricant is conceptually sound but no clear method tie; single pass; cut
CUT   | tfmg:diesel/gasoline bare sell M-08 / M-13 (1× REJECT) | motif M-08 | reason: "fuel is valuable and sellable" is the ambient endpoint; the M-13 aeronautics-demand KEEP is the valid gating route; REJECT confirmed
CUT   | tfmg flamethrower/napalm combat (5×Opus REJECT + 1× + 1×) | motif (none) | reason: dossier flags WEAK; combat-flavor without structural method hook; no motif applies; REJECT majority
CUT   | tfmg:lithium→magic M-17 FE-charging (2× + 1× + 1×) | motif M-17 | reason: FE-charging foci via TFMG lithium is the tone-clash M-17 problem again — TFMG's industrial electric tier charging arcane items; the lithium M-30 regional scarcity is captured in the KEEP; M-17 FE-charge is better via Create Addition, not TFMG
CUT   | tfmg:steel_ingot→economy M-28 colony blacksmith (2×) | motif M-28 | reason: a colony blacksmith needing steel is plausible but steel requires a blast furnace that a colony can't naturally produce — depth guardrail; the M-08 coin KEEP already makes steel a trade good; colony demand is ambient
CUT   | tfmg:plastic→aeronautics M-23 canopy (1× REJECT) | motif M-23 | reason: plastic-as-cockpit-canopy is a stretch; M-23 requires structural alloy/load-bearing hull material; plastic canopy is aesthetic; REJECT confirmed
CUT   | tfmg:constantan M-06 precision (1× ACCEPT) | motif M-06 | reason: constantan precision sequenced_assembly is a deeper Create-internal edge; TFMG already has Create anchor; doesn't add a second pillar; single pass
CUT   | tfmg createblockchain currency miner M-08 (1×) | motif M-08 | reason: createblockchain isn't in the pack; no method surface; invalid delivery

== BATCH COMPLETE ==
