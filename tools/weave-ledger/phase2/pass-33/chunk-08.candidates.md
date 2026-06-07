# Phase 2 candidates — chunk-08

## entity_model_features   [anchors: support/client-rendering (1)]
LEAVE — zero-surface code library; renders custom entity models via OptiFine CEM format. No items, no loot, no recipes. Genuine zero-content rendering engine.

## createlowheated   [anchors: Create (1)]
- from: solid furnace fuel (coal/charcoal/wood/etc.) | via: createlowheated:basic_burner (fuel consumption mechanic) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: heat is now a managed resource — you burn real fuel to process, so fuel specialists (charcoal farms, coal traders) have perpetual demand from any Create producer
- from: basic_burner block (crafted via create:mixing) | via: M-28 colony route | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: REJECT | reason: the basic_burner is a single-block mechanic tweak, not a production-route item; routing it through MineColonies adds no loop value — the weave point is the *fuel consumption*, not the burner itself
- REWORK: dossier lists no 2nd-anchor candidate and says "leave." The fuel-consumption surface (M-26) is a genuine demand-renewal link: createlowheated makes Create heat cost real solid fuel, which feeds back into the survival/scarcity loop as continuous demand for burnable materials. This is a light, coherent second anchor (Create → survival via M-26) — the dossier undersells it.

## spyglass_improvements   [anchors: support/QoL-client (1)]
LEAVE — pure client input/render behavior; no items, no loot, no recipe surface. Genuine zero-content QoL mod.

## just_blahaj   [anchors: decoration/flavor (1)]
- from: just_blahaj plush variants (31 items, loot=yes) | via: loot-seed | to: survival/exploration | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: M-02 requires a mob/boss drop given a *use as magic/economy input* — seeding plushies into loot is thematically incoherent (nobody expects an IKEA shark as a dungeon reward in a dark-fantasy combat pack); tone clash kills it
- from: just_blahaj:glowhaj (glowing variant) | via: ars_nouveau:imbuement or create:haunting | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: forcing a plush shark through arcane infusion is exactly the "contrived edge" the brief warns against; the mod's entire value is wholesome cozy flavor, not a magic reagent surface
- LEAVE — pure decoration palette / curated flavor. 31 wool-crafted plush blocks, no routing coherence. Forcing any edge here is a defect.

## wits   [anchors: support/debug (1)]
LEAVE — server-side command utility (/wits reports structure names); 0 items, 0 loot. Genuine zero-content debug tool.

## railways   [anchors: Create, aeronautics (2)]
OK — connections sound. Already anchors Create (inbound create:mechanical_crafting + create:sequenced_assembly) and aeronautics (rail/logistics transport). No coherent 3rd anchor without forcing. Checking for missed depth:
- from: railways:incomplete_conductor_cap (sequenced-assembly intermediate, loot=yes) | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: this is already the existing Create-spine connection; it's not a new cross-system link, just confirming the anchor already exists — not a weave candidate, it's the current state
- from: railways locometal building stock (boiler/pillar/smokebox blocks — large bulk) | via: aeronautics/logistics arm | to: economy | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: a full train-station build requires large volumes of locometal panels and track — bulk enough that moving materials to build distant stations makes aeronautics cargo runs a genuine requirement, not a shortcut
- from: railways conductor cap | via: M-33 service-for-hire | to: economy | motif: M-33 | power: mid | tone: ok | verdict: REJECT | reason: the conductor cap is a craftable item, not a labor service; M-33 applies to a specialist *performing work*, not a craftable tool — misapplied motif
REWORK: dossier note "No coherent magic/economy/survival routing without forcing" is broadly right, but the M-31 bulk-logistics link above is real. The aeronautics anchor is currently described as nominal ("rail/logistics transport pillar") — it would benefit from an explicit M-31 hook in the dossier to sharpen it.

## kotlinforforge-5.11.0-all   [anchors: support/library (1)]
LEAVE — Kotlin runtime language adapter; 0 items, 0 loot, no content surface whatsoever. Genuine zero-content library.

## irons_spellbooks   [anchors: magic, Create (2)]
OK — connections sound. Alchemist cauldron uses create:emptying/filling (Create anchor); magic-spellcasting spine anchors magic. Exploring depth candidates:
- from: irons_spellbooks mithril ore/ingot (c:ores/mithril, c:ingots/mithril) | via: create:crushing | to: Create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: mithril runs through Create's crusher for doubled yield + byproduct, weaving the magic metal into the Create ore-processing chain — mithril becomes a reason to run crushing lines
- from: irons_spellbooks:arcane_essence | via: ars_nouveau:imbuement → source_gem bond | to: magic | motif: M-01 | power: mid | tone: ok | verdict: ACCEPT | hook: arcane_essence (Iron's magic currency) bonds to source_gem (Ars' magic currency) through imbuement, letting the two magic schools share a progression ladder and forcing a trade connection between practitioners — the reagent-ownership ledger explicitly notes this as the reserved bond for arcane_essence
- from: Iron's spell scrolls (consumable, one-shot) | via: consumption mechanic | to: survival | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: scrolls are spent on use and can't be stockpiled indefinitely — a magic specialist who sells scrolls has perpetual re-demand, making the scroll-forging pipeline a real ongoing production loop rather than a one-time craft
- from: irons_spellbooks mob drops (apothecarist, ice spider etc., loot=yes) | via: occultism:spirit_fire or ars_nouveau:imbuement | to: magic | motif: M-11 / M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: boss/mob drops from Iron's hostile entities are transmuted into reagents for Occultism rituals or Ars imbuement, making Iron's mobs a farming target for magic specialists — cross-magic-mod demand
- from: irons_spellbooks:arcane_essence | via: create_new_age:energising | to: Create | motif: M-17 | power: mid | tone: ok | verdict: REJECT | reason: FE-charging a magic currency through an energising station is plausible mechanically but arbitrary — arcane_essence is already bonded to source_gem (M-01); adding a second electric-charge step creates double-weave complexity with no clear player-facing hook; redundant with existing bond
- REWORK: dossier 2nd-anchor candidates correctly flag mithril crushing (M-03), arcane_essence bond (M-01), and mob-drop reagents (M-02/M-11) but marks them "deepeners, not required." All three should be promoted to ACCEPT-level proposals — they directly advance the magic web spine and are motif-grounded.

## bakery   [anchors: survival (1)]
- from: bakery baked goods (cakes/tarts/breads — high-effort processed foods) | via: farmersdelight:cooking / farm_and_charm:stove chain | to: economy | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: luxury baked goods are consumed (eaten) and can't accumulate, so the baking pipeline has continuous demand — a bakery specialist's output is always needed, creating a standing economy role for the food producer
- from: bakery wheat/flour | via: create:milling → flour | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: wheat milled in a Create millstone produces flour that feeds directly into the bakery chain — one light step ties the bakery's raw-material input to the Create processing spine, making the tech player a natural upstream supplier to the baker
- from: bakery surplus crops (strawberries, apples, berries) | via: vinery:apple_mashing / alcohol_industry:alcohol_boiling | to: economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: bakery fruit outputs can feed fermentation (jam → wine/brandy via vinery/alcohol_industry), adding a maturation / aging step that makes bakery surplus an upstream input to the drinks economy — baker feeds brewer
- from: bakery baked goods | via: minecolonies huts (cook/baker hut) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies cook hut can produce basic breads/goods cheaper than a manual bakery run, making the colony a natural bulk-food supplier and baked goods a colony trade route — the settlement-builder feeds the server's food supply
- from: bakery finished luxury cakes/tarts | via: M-09 (bare sell) | to: economy | verdict: REJECT | reason: "luxury goods are sellable" is the ambient endpoint, not a weave — M-09 is retired; without a demand-gating mechanism this is a bare sell link
- from: bakery magic/Ars Sourcelink — surplus crops as Source feedstock | to: magic | motif: M-02 | verdict: REJECT | reason: dossier correctly flags this as weak and "better owned by farm mods"; bakery's cropping surface is thin (it consumes crops, doesn't generate novel mob/loot drops), and forcing a magic tie here is lower-quality than letting the farming mods carry that link
REWORK: dossier lists M-09 ("economy via numismatics sell") as a strong candidate — but M-09 is retired. The real economy link is M-26 (consumption creates perpetual demand) and M-28 (colony route for basics) — the dossier needs updating to retire the M-09 framing.

## cataclysm   [anchors: survival (1)]
- from: cataclysm boss drops (Witherite ingot, Ignitium ingot, ancient_metal_ingot, Void Core, Cursium) | via: create:crushing / create:pressing | to: Create | motif: M-03 + M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss-material ingots are processed through Create's crusher/press into sheets/plates required for advanced Create machinery — killing cataclysm's bosses becomes the gate to unlocking high-tier Create fabrication, exactly the "boss-key unlock" CLAUDE.md names as the canonical tech-gate model
- from: cataclysm:witherite_ingot / cursium | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: Witherite (forged from wither essence) and Cursium (a cursed boss metal) transmute under occultism spirit-fire into powerful dark reagents — the boss-drop feeds the occult magic path, giving combat specialists a direct supply route into the dark-magic system
- from: cataclysm boss-drop ingots (loot=yes) | via: cataclysm:weapon_fusion | to: survival | motif: M-34 | power: endgame | tone: ok | verdict: ACCEPT | hook: boss drops are farmed by the combat specialist and traded to other players — the weapon_fusion mechanic consumes multiple boss mats from different bosses, making a solo player who has only farmed one boss need to trade for the rest; the combat route has an economy face (supply the rest of the server with high-tier components)
- from: cataclysm ancient_metal_ingot | via: create:sequenced_assembly | to: Create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: ancient_metal as a keystone input in a sequenced-assembly chain for the highest-tier Aeronautics controller or Create machinery — gates the top-end tech behind exploring cataclysm's dungeons
- from: cataclysm boss mats | via: numismatics player-mint | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: minting coin from boss mats would make the combat specialist the sole currency minter — while M-08 is about players minting currency from scarce regional metal via Create, boss-drop minting would make currency availability combat-gated rather than regionally-scarce, which conflicts with M-08's intent (Create-processed regional metal → coin); the boss mats are better routed as M-15/M-34 gate items than as a mint feedstock
- from: cataclysm:amethyst_crab_meat / blessed variant | via: farmersdelight:cooking | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: amethyst crab meat from the Sunken City boss fight is a rare protein source processed through a FarmersDelight cooking chain into a high-tier exotic dish — connects the boss loot to the food/diet system (unusual protein = diet variety demand)
- REWORK: dossier flags the M-08 coin candidate as MED — this should be REJECT for the reason above (combat-gated currency conflicts with M-08's regional-scarcity framing). The Create-boss-gate (M-03/M-15/M-06) and magic-transmutation (M-11) candidates are correctly identified as strong and should be promoted.

## kubejs   [anchors: support/modpack-tooling (1)]
LEAVE — the scripting backbone that authors weaves; 0 items (1 placeholder bucket), no game-content surface. It is the weaving tool, not a weave target.

## creativecore   [anchors: support/library (1)]
LEAVE — GUI/packet/event API library, no player-facing content, 0 blocks/items/loot. Genuine zero-content library.

## direct_chute   [anchors: Create (1)]
- from: direct_chute:direct_chute (zinc-crafted logistics block) | via: aeronautics/logistics framing | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 requires a good be "heavy/bulky enough that trading at scale *requires* aeronautics/logistics" — a chute block is a logistics infrastructure piece, not a tradeable good that moves via aeronautics; the connection is circular (a logistics block isn't itself logistics cargo). No real second anchor available without forcing.
- LEAVE — single Create logistics block (zinc-based item conduit); no tradeable surface, no processing method, no magic/survival face. Genuinely single-anchor support within Create.

## notenoughanimations   [anchors: support/visual (1)]
LEAVE — pure client-side procedural animation override, 0 blocks/items/loot. Genuine zero-content visual polish mod.

## create_integrated_farming   [anchors: Create, survival (2)]
OK — connections sound. Roost/net outputs are automated survival food sources built through Create contraptions (Create anchor) feeding the food/diet pillar (survival anchor).
- from: roost product outputs (eggs, feathers, raw poultry) | via: farmersdelight:cooking / cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: roost egg/poultry output feeds directly into FarmersDelight cutting boards and cooking pots for processed protein — the automated roost is an upstream production node in the food processing chain, tying Create automation to the diet-variety demand loop
- from: roost/fishing-net bulk output | via: minecolonies huts | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: a MineColonies farmer/fisher hut produces eggs/fish cheaper than a manually-managed roost, but the Create-automation roost scales volume far higher — creates a natural division: colony for basics, Create for bulk, and bulk output creates a trading surface (eggs/fish as colony supply goods)
- from: fishing-net aquatic drops | via: create:milling | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: milling fish/aquatic drops into meal is mechanically possible but weak — the fishing net already has a clear survival↔Create anchor; adding a milling step for fish is thin and the method-pull is forced (milling is for dry goods, not aquatic drops)
- from: roost product (feathers) | via: ars_nouveau:imbuement or quill-component | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: feathers are a commodity with no special magic signature; routing generic feathers into magic imbuement is arbitrary — M-02 requires the drop to be *isolated* (unique to a mob/boss) and given a specific use. Common roost feathers don't qualify; no motif survives the red-team.
REWORK: dossier 2nd-anchor candidate (economy via M-09) is retired. Replace with M-28 colony route and M-12 processing-chain pull as the real economy/Create deepeners.

## better_climbing   [anchors: support/QoL (1)]
LEAVE — client-side climbing-physics tweak, 0 items/blocks/loot. Genuine zero-content movement feel mod.

## glitchcore   [anchors: support/library (1)]
LEAVE — loader-abstraction library for Glitchfiend mods; 0 items, 0 loot. Genuine zero-content API dependency.

## searchables   [anchors: support/UI-library (1)]
LEAVE — search/filter API for dependent UI screens; 0 items, 0 loot. Genuine zero-content UI library.

## dummmmmmy   [anchors: support/QoL (1)]
LEAVE — combat damage-display test dummy; 1 item (target_dummy), no loot table, no processing surface. Genuinely single-surface utility with no routing coherence — forcing a magic/Create edge on a damage-test prop is the contrived-edge failure mode.

## moreculling   [anchors: support/performance (1)]
LEAVE — client render-culling optimization, 0 items/loot. Genuine zero-content performance mod.

== CHUNK COMPLETE ==
