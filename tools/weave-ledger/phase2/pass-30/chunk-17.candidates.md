# Phase 2 candidates — chunk-17

## dndesires   [anchors: create (1)]

**Power-read:** Create add-on. Its five fan-processing methods (dragon_breathing, freezing, hydraulic_compacting, sanding, seething) are mid-tier new processing surfaces — the hydraulic press (rubber production) is flagship-ish; the fan sails and milkshakes are mid/everyday. Already deeply inbound-woven through Create's own methods.

- from: dndesires:raw_rubber / milkshake items | via: farmersdelight:cooking or appleseed diet loop | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: rubber tapping is a jungle harvest → hydraulic press loop; milkshakes add a sugar+dairy diet group that pairs naturally with the AppleSeed nutrition system, giving the D&D food items a standing demand signal.
- from: dndesires:freezing fan process | via: dndesires:freezing (fan-catalyst) → seasonal crop prep | to: survival | motif: M-16 | power: mid | tone: ok | verdict: ACCEPT | hook: a freezing-sail belt line could preserve Serene-Season summer crops as frozen intermediates, gating a winter-food recipe behind seasonal harvest timing — survival pressure meets Create processing.
- from: dndesires:cardboard_package_* | via: aeronautics cargo/logistics | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: ACCEPT | hook: cardboard packaging is the physical unit of bulk-cargo shipping — a Create-processed logistic form that pairs naturally with the airship cargo arm as standardized freight blocks.
- from: dndesires:seething (heat fan) as smelting-tier step | via: dndesires:seething → magic reagent calcination | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: a seething-sail calcination step turning raw metal/crystal into an arcane intermediate (ars_nouveau imbuement-prepped input) — the industrial heat furnace as an arcane refinery is thematically coherent for a tech-magic pack.
- from: dndesires rubber → Create sub-assembly sealing material | via: create:mechanical_crafting | to: Create (depth) | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: rubber as a sequenced-assembly input is fine in principle but dndesires is already firmly Create (anchor 1); this adds depth within the existing anchor rather than a second system. Not a second-anchor weave — no new pillar gained.
- from: dndesires asphalt | via: aeronautics road/land-vehicle surface | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: asphalt as a surface block for offroad vehicles is thematically coherent but the motif M-23 is structural-alloy → airframe; asphalt is a terrain deco/road block, not a hull material. The link is too weak/cosmetic to count as a second anchor. LEAVE as deco.

REWORK: No existing connections beyond Create to flag; single-anchor mod. OK at Create depth — the four accepted candidates above (survival/M-12, survival/M-16, aeronautics/M-31, magic/M-10) represent the real second-anchor options.

## appleseed   [anchors: survival (1)]

**Power-read:** Zero items/blocks — pure diet-mechanic HUD mod. Its output is a demand signal (not a material), so method-pull produces nothing to route. The survival anchor is correct and deep; second anchor must be framed as "what does the diet pull on" not a recipe edge.

- from: appleseed diet demand signal | via: config/demand — balanced diet requires diverse food groups → pulls farmersdelight / extradelight / vinery / bakery production | to: Create/production | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the diet system is an ongoing consumption loop — players must continuously eat diverse foods, so demand for multi-group cooking never zeroes out; this is the loop's closing arrow (M-26 consumption sink, but the consumption is food diversity rather than a single fuel item).
- from: appleseed high-nutrition multi-group foods as a scarce regional specialty | via: M-30 regional-scarcity gate | to: economy | motif: M-30 | power: mid | tone: ok | verdict: REJECT | reason: AppleSeed itself doesn't create regional scarcity; it creates demand. The scarcity is in the food crops, not the diet mod's mechanic. The link can't be attributed to appleseed specifically — it's a pack-wide interaction. No-motif as a weave *for this mod*; defer to individual food-mod weaves.
- from: appleseed sugar/protein buff interaction with magic focus-charging | via: config tie | to: magic | motif: no-motif | power: everyday | tone: clash | verdict: REJECT | reason: no existing mechanic in the magic pillar keys off diet buffs. Forced/no-motif.

REWORK: No existing cross-system connections to REWORK. Single-anchor; the M-26 ACCEPT above (diet→food-production demand loop) is the viable second pillar. One accepted, two rejected.

## touhou_little_maid   [anchors: survival (1)]

**Power-read:** The Altar is a ritual multiblock requiring power-point bottles (drops/loot) + materials. Maid = lapis+diamond+gold+redstone+iron+coal; power-points from village loot/fairy drops. KubeJS-extensible. Companion automation (farm/fish/fight) is mid-tier value, Altar is the progression gate.

- from: touhou_little_maid:altar (ritual multiblock) | via: touhou_little_maid:altar_recipe_serializers → gate altar recipes behind boss drops | to: magic | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the Altar is a shrine-summoning ritual — requiring a boss-drop as a power-point catalyst (e.g. a Cataclysm boss essence) to summon higher-tier maids reads as earning a companion through proving yourself in battle; thematically clean and the altar recipe type is KubeJS-extensible.
- from: power-point bottles (fairy drop / village loot) | via: loot-seed: seed power-point bottles into structure loot (betterstrongholds / other dungeon mods) | to: survival/economy | motif: M-34 | power: everyday | tone: ok | verdict: ACCEPT | hook: power-points are the maid economy's currency — seeding them into stronghold/dungeon loot makes exploration the supply route for maid-summoning, tying combat-survival to the companion system (a combat specialist farms dungeons and trades power-points to farmers who want maid farm-hands).
- from: maid farming automation | via: colony/MineColonies-parallel — maids as a non-colony farming route | to: economy | motif: M-28 | power: mid | tone: ok | verdict: REJECT | reason: M-28 is specifically the MineColonies huts/research route. Maids are a parallel labor system; conflating them with M-28 would blur the colony/maid distinction. The maid automation is a survival convenience, not an economy gate. Reject as M-28; the link exists as a pack tension but not as a weave.
- from: altar recipe requiring Ars Nouveau source_gem as power-point supplement | via: touhou_little_maid:altar_recipe_serializers (KubeJS) | to: magic | motif: M-01 | power: mid | tone: ok | verdict: REJECT | reason: source_gem is the universal magic currency (M-01, reserved reagent). Adding it as an altar input is coherent, but it's a reagent-ownership question — using source_gem here is fine in principle but the motif link is M-01 "arcane currency," which is already established and reserved. This would be a recipe authoring decision, not a new weave motif. Record as POSSIBLE recipe note, not a new weave row.

REWORK: No existing weaves to REWORK. Two accepted (magic/M-15, survival-economy/M-34), two rejected.

## bettermodsbutton   [anchors: support/client-UI (1)]

LEAVE — pure client UI mod, zero items/blocks/recipe-types; a pause-screen button restoring mod access. No content surface to weave.

## rechiseled   [anchors: support/decoration (1)]

**Power-read:** 3627 blocks but all are 1:1 variants of existing blocks. Chisel mechanic is zero-material-cost (reversible). No new items or processing paths of its own. The rechiseledcreate companion already bridges it to Create (M-04). Its dossier flags this as STRONG existing coverage.

- from: rechiseled decorative blocks | via: rechiseledcreate Mechanical Chisel (already in pack) → runs chiseling on Create power | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: this weave is flagged in the dossier as existing/strong; noting it for completeness. The Mechanical Chisel makes the decoration palette a Create-production output, not just a player hand-tool use.
- from: chiseled stone variants used as airship hull cosmetic material | via: aeronautics (copycat/hull decoration) | to: aeronautics | motif: M-23 | power: everyday | tone: ok | verdict: REJECT | reason: M-23 requires a structural alloy as a load-bearing hull ingredient. Chiseled deco blocks are purely cosmetic, not structural; the link is aesthetic, not a real second anchor.

REWORK: The rechiseledcreate bridge is the one noted candidate; it's handled externally. OK — connections sound for a deco-support mod; stays single-anchor+support by design.

## ichunutil   [anchors: support/library (1)]

LEAVE — pure shared-class library for iChun's mods; 0 blocks, 0 items, 0 recipe-types; no gameplay content to weave.

## l2library   [anchors: support/library (1)]

LEAVE — shared library/API for LightLand mods (l2hostility etc.); 0 blocks, 0 items, 0 recipe-types; no content surface.

## puzzleslib   [anchors: support/library (1)]

LEAVE — multi-loader library (Fuzs); 0 blocks, 0 items, 0 recipe-types; no gameplay content.

## spawn   [anchors: survival (1)]

**Power-read:** 165 blocks / 296 items, 34 biome-modifiers. Loot=yes. Has the casting_net_clam method. Existing inbound weaves: farmersdelight:cooking + farmersdelight:cutting. Seafood/critters + date-palm wood + ant-farm/clam content. Rich surface; clearly one-anchor and underdeveloped.

- from: spawn seafood drops (crab, clam, anglerfish) | via: create:milling or farmersdelight:cutting → multi-step seafood ingredient chain | to: Create/survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: crab meat → create:milling (shell fragments as byproduct for building material) → extradelight chiller for seafood dish chain; clam → milled for pearl dust used as a Create polish/abrasive input — processing-chain pull that pushes seafood beyond basic FD cooking into a longer ingredient web.
- from: spawn:clam variants (colored clam cases) | via: loot-seed + create:crushing to pearl dust → ars_nouveau:imbuement catalyst | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: pearl dust from crushed clam shells is an arcane abrasive — a mob/environment drop given a magic-reagent use; the coastal exploration required to gather clams feeds the magic pillar through M-02 (mob-drop reagent sink). Coherent: pearls/shells as magical components are a natural cultural reading.
- from: spawn:date_log / date_planks wood set | via: aeronautics airframe/structural material | to: aeronautics | motif: M-23 | power: mid | tone: ok | verdict: REJECT | reason: M-23 targets load-bearing metal plates/beams for hull structure. Date-palm wood is a lightweight deco/building material; using it as an airframe structural alloy misreads the motif's intent (it specifically targets fabricated structural alloys for depth). A wood airframe is possible for a cheap/tier-1 ship, but that's a design decision outside this motif's scope. Flag as design-option, not a weave.
- from: spawn ant-pupa / colony drops | via: occultism:spirit_fire ritual → spirit-matter intermediate | to: magic | motif: M-11 | power: everyday | tone: clash | verdict: REJECT | reason: ant pupa as a spirit-fire input is biologically themed but reads as forced — the connection between mundane insect larvae and occult spirit-fire is a stretch. Tone clash; the magic pillar works better with more arcane/supernatural mob drops (boss drops, spectral fauna). The pearl-dust route (M-02 above) is the cleaner magic seam.
- from: spawn seafood at scale (bulk crab/clam harvest) | via: aeronautics/logistics bulk transport | to: aeronautics | motif: M-31 | power: mid | tone: ok | verdict: ACCEPT | hook: bulk seafood is a regional coastal product — fishing settlements trade perishable protein to inland colonies via airship cargo; the seafood weight/volume makes logistics the natural distribution arm. Gives aeronautics a food-economy cargo role distinct from ore/metal freight.

REWORK: The existing FD:cooking/cutting inbound weaves are real but shallow (one step, no further routing). Candidate REWORK: push those drops deeper via M-12 to create a multi-step chain rather than single cooking steps. Not a flaw per se — the FD bridge is the correct entry point; the gap is there's no *second* system anchor yet. Three accepted, two rejected.

## create_connected   [anchors: create (1)]

LEAVE — pure Create-internal QoL/tooling mod. Its kinetic parts, copycat blocks, and logic components are Create-spine conveniences with no foreign material surface. Copycat blocks are a cosmetic skin for any block texture but mint no new material and add no second-anchor pull. The dossier correctly calls this a support role.

## betterstrongholds   [anchors: survival (1)]

**Power-read:** 0 items/blocks registered but loot=yes — has dungeon chest loot. The structure mod rule: don't LEAVE a loot-bearing structure mod.

- from: betterstrongholds chest loot tables | via: loot-seed → seed Numismatics coins (player-minted currency as dungeon find) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: a coin or coin-blank found deep in the stronghold's hidden treasury hints at lost mercantile history and immediately gives new players a starting stake in the player economy; dungeon exploration becomes an economic on-ramp.
- from: betterstrongholds hidden rooms | via: loot-seed → seed magic reagents (ars_nouveau source gem, forbidden rune fragments, rare boss-adjacent loot) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: ancient strongholds as repositories of arcane knowledge — seeding a rare magic reagent into a hidden library room reads naturally and gives mages a reason to run strongholds beyond Eyes of Ender.
- from: betterstrongholds trapped areas | via: loot-seed → seed boss-key component that gates a complex Create/tech recipe | to: Create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 requires a boss drop as the gate item, not a structure chest find. A stronghold is not a boss; seeding a "boss-key" component here misattributes the motif. The loot-seed can add useful items (M-08/M-02 above), but not a boss-key unlock specifically. Reject as M-15; the other two are the right hooks.

REWORK: No existing cross-system weaves to REWORK. Two accepted (economy/M-08, magic/M-02), one rejected.

## appleskin   [anchors: support/client-UI (1)]

LEAVE — food HUD display mod; 0 items/blocks/recipe-types; tooltips and hunger-bar overlays only. No content surface to weave. Complements appleseed diet system informationally but contributes no material or method.

## detect-afk-1.2.2   [anchors: support/QoL (1)]

LEAVE — server-side AFK detection utility; 0 items/blocks; behavioral mod only. No content to weave.

## playeranimator   [anchors: support/library (1)]

LEAVE — client animation API library (KosmX); 0 items/blocks/recipe-types; developer infrastructure only.

## aeronautics   [anchors: aeronautics (1, Create de-facto 2nd)]

**Power-read:** The pillar spine. Physics-simulated vehicles: levitite (zinc-gated lift), propeller bearings, hot-air burner, Physics Assembler, portable engine, rope/docking. Already inbound-woven through Create (mixing, sequenced_assembly, deploying, crushing). Jar-grounded recipes confirmed. The dossier already proposes several 2nd-anchor candidates.

- from: aeronautics:levitite_blend + levitite | via: M-30 regional-scarcity (zinc is region-locked by GTMOGS ore-gen) → levitite bulk-supply specialist | to: economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite blend requires zinc nuggets (region-locked ore); the server's lift supplier must either have access to a zinc-rich region or trade for it — the lift material is the aeronautics economy's first scarcity gate. Every ship builder depends on the zinc specialist.
- from: levitite blend in-world crystallization step | via: KubeJS config → require an Ars/Occultism catalyst adjacent during the crystallization | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: levitite has a quasi-magical anti-gravity property — requiring an arcane catalyst (a source gem or allurite shard placed as a ritual catalyst during crystallization) for the final lift-crystal step makes aeronautics gated on magic expertise. The tech-magic cross-route is explicit.
- from: aeronautics:adjustable_burner | via: fuel tag config-tie → extend burner fuel tag to include tfmg:diesel / gasoline | to: Create/economy | motif: M-13 | power: mid | tone: ok | verdict: ACCEPT | hook: the hot-air burner already burns furnace fuel; extending its tag to TFMG refined fuels makes the petroleum refinery chain (a Create-industry specialist) the preferred fleet-fueler — fuel quality becomes a ship-range tradeoff and creates a Create↔aeronautics supply dependency.
- from: simulated:portable_engine | via: create:sequenced_assembly (already; jar-confirmed) → require an Occultism/boss-drop component as one engine-assembly step | to: magic | motif: M-29 | power: endgame | tone: ok | verdict: ACCEPT | hook: the portable engine is the endgame self-powered vehicle heart — requiring a spirit-infused component (cross-route dependency: occultism spirit_trade or ritual output) in the sequenced-assembly chain means vehicle engineers depend on occultists, forcing trade between pillars.
- from: aeronautics docking connectors + rope coupling | via: config/map note — docking stations at Numismatics trading-post builds = the economy's physical cargo node | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: cargo-run pilots are a service profession — they dock at trading-floor depots, load bulk goods, and fly to buyers; no recipe needed, just the logistics architecture. The docking connector is the physical economy↔aeronautics join. (M-33 service-for-hire: the cargo run is labor, not a recipe.)
- from: aeronautics dyeable tires | via: trade/cosmetic sell | to: economy | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: cosmetic tire dye variants as trade goods is the ambient-sell endpoint (M-09 retired). No demand-gating motif applies here; cosmetic variants don't gate any demand. Reject.
- from: aeronautics borehead bearing (flying drill) | via: M-08 ore extraction → minted coin | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: the borehead's ore-extraction output is already accounted for in the Create ore-doubling web (M-03); routing the borehead's ore to M-08 coin is the ambient sell endpoint again — the scarcity gate is on the ore/zinc, not the drill bit. The real gate is M-30 (regional zinc for levitite), already accepted above. Reject to avoid double-counting.

REWORK: The dossier has a git-conflict marker (<<<<<<< HEAD / >>>>>>> a82b961) in the anchors block — the two conflicting candidate descriptions are near-identical in content but the conflict should be resolved. Flag for maintainer cleanup. Existing connections sound otherwise; Create is confirmed as de-facto 2nd anchor via jar-grounded recipes. Five accepted, two rejected.

## moreculling   [anchors: support/performance (1)]

LEAVE — client render-culling performance mod; depends on Sodium; 0 items/blocks/recipe-types. No content surface.

## blockui   [anchors: support/library (1)]

LEAVE — XML UI framework for MineColonies/Structurize; 0 items/blocks/recipe-types. No content surface; support role confirmed.

## controlling   [anchors: support/client-UI (1)]

LEAVE — client keybind-search UI; 0 items/blocks; pure controls-menu utility. No content surface.

## trading_floor   [anchors: create, economy (2)]

**Power-read:** Single block (trading_depot). Already at 2 anchors (Create + economy). The depot automates villager trades through Create belts/chutes. Deep create dependency (it IS a Create depot variant). Its role is the Create↔villager-trade junction.

- from: trading_floor:trading_depot as automated emerald/enchant farm feeder | via: Create belt supply → trading depot → enchanted books/emeralds | to: economy | motif: M-37 | power: mid | tone: ok | verdict: ACCEPT | hook: the Trading Depot automates access to villager knowledge (enchanted books, maps, potion ingredients) — but that knowledge is still gated on building and maintaining a Create production line to supply the trades. M-37 research/knowledge gate: the depot makes knowledge systematically accessible but not freely so, since it requires Create infrastructure investment and a villager with the right profession.
- from: trading_floor depot as a Numismatics integration point | via: Create belt → trading depot → emerald output → numismatics exchange | to: economy (depth) | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: emerald→coin arbitrage through the depot is an NPC-faucet risk (emeralds come from villager trades, which inflate from external sources). The player-run-economy rule says coin must come from player-processed scarce material, not NPC trade chains. The depot makes this too easy to exploit as an NPC faucet. REJECT as M-08 to avoid the faucet risk; the M-37 route above is the clean one.

REWORK: At 2 anchors already. The M-37 accept adds a third-system nuance (economy depth via knowledge access). The existing two anchors are sound. OK — connections sound; the depot's Create+economy dual role is correct.

## jeed   [anchors: support/client-UI (1)]

LEAVE — JEI Effects/Potion display provider; 0 items/blocks; the jeed:effect_provider and jeed:potion_provider are JEI display categories, not craftable methods. No gameplay content to weave. Part of the pack's JEI+JER+JEED recipe-viewer stack (CLAUDE.md).

== CHUNK COMPLETE ==
