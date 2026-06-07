# Phase 2 candidates — chunk-05

## beachparty   [anchors: survival (1)]

Power-read: The mod's two registered methods (`beachparty:mini_fridge_freezing`, `beachparty:palm_bar_mixing`) are mid-tier convenience appliances, not industrial machines. The cocktail buffs are everyday-grade consumables (short status effects, cheap fruit/honey inputs). Ice output from the mini fridge is an everyday material.

**Candidate 1 — mini_fridge ice → Create cooling / cold-chain input (M-12)**
The mini_fridge_freezing method produces packed ice / ice cheaply at any biome without farming frozen oceans. Create uses ice as a cooling reactant in several recipes (e.g. `create:mixing` cooling — recipes involving frozen/chilled intermediates). Routing this as a cheap ice feedstock into Create's cold-mixing chain is a plausible processing-chain pull. Red-team: Create can freeze things via `create:deploying` into a snow/ice biome or with snowballs; the fridge is not strictly required and the integration is thin. It also only works if there are ice-consuming Create mixing recipes in this modlist worth pointing at; there's no special Create ice-processing chain here that demands a dedicated source. Verdict: reject — the link is weak and not motif-compelling; it's "ice is convenient" not a real system edge.

- from: beachparty:mini_fridge ice output | via: beachparty:mini_fridge_freezing → create:mixing (cold feedstock) | to: Create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: thin convenience link — Create doesn't depend on beachparty ice specifically; no demand-gating; the fridge is a duplicate of other cold-block acquisition routes.

**Candidate 2 — cocktail buffs as diet/nutrition filler (M-26)**
The Pack uses Diet–AppleSeed Edition; its five groups include Sugars and Fruits. Cocktails made at the Palm Bar (honey, melon, cocoa, coconut) pull from Fruits/Sugars food groups, contributing to diet variety. The demand is real: players who lack tropical-biome access lack coconuts and thus one food-diversity vector. Red-team: this is thematically sound but the "weave" is purely ambient — diet demand already covers all food, and cocktails aren't different in kind from any other sweet/fruit food. The motif M-26 (consumption sink) applies because cocktails are consumed against survival pressure (diet buffs), but the demand-gating is the diet system already doing it universally, not a specific created hook. The action is "cocktails pull from scarce tropical ingredients → diet demand" which is already inherent to the mod being a food mod. This is the ambient endpoint, not a new weave.

- from: beachparty cocktails | via: beachparty:palm_bar_mixing | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: REJECT | reason: ambient loop endpoint — all foods already hit M-26 via diet system; no distinctive demand-gating action beyond beachparty simply being food. Not a new weave edge.

**Candidate 3 — coconut as a scarce tropical regional crop / seasonal reagent (M-16 / M-30)**
Coconuts grow only on palm trees in beach/tropical biomes. This makes them a regionally scarce crop: a player in a taiga or mountains never has access to coconuts unless they trade for them or travel. That scarcity-to-economy edge is real and thematic. The demand endpoint: cocktails require coconut, so coconut's tropical scarcity gates cocktail production and thus trade. Red-team: this is the loop's scarcity→economy arm, which is exactly M-30 (regional scarcity gate) — but M-30 requires the key input to be region-locked by ore-gen (GTMOGS regional ore-gen → recipe input). Coconut is biome-locked not ore-gen locked; a player can always travel or use bonemeal to grow palms elsewhere. The scarcity is soft. Still, biome-restricted crops are functionally identical to regional scarcity in game feel — a northern player must import or travel. The motif is M-30 stretched to biome-crop. Also M-16 is seasonal reagent; coconuts are not Serene Seasons seasonal (they're just biome-restricted). So M-16 doesn't apply cleanly.

- from: beachparty:coconut (tropical biome crop) | via: beachparty:palm_bar_mixing | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: ACCEPT | hook: A plains or taiga player who wants cocktail buffs must source coconuts from someone near a beach — beachparty's biome restriction naturally becomes a trade good with no extra recipe authoring, just a config acknowledgment. The scarcity is soft (biome, not ore-gen) but real enough to generate import demand from land-locked players.

**Candidate 4 — sprinkler / fertilizer in the beachparty ecosystem** — Not a beachparty item; those are sliceanddice. Skip.

**Candidate 5 — palm wood as a decoration-trade commodity (M-08 / economy sell)**
Palm planks/logs are a unique wood type only found in beach biomes. This is another scarcity point for non-coastal builds. Red-team: this is bare "it's sellable" M-09 territory (retired). The trade demand is ambient, not demand-gated. Reject.

- from: beachparty palm lumber | via: biome-locked worldgen | to: economy | motif: M-09 (retired) | verdict: REJECT | reason: bare sellable link — M-09 retired; palm wood is a decorative sell-good with no demand-gating mechanic.

**Existing connections review:** Only 1 anchor (survival). The dossier's own candidate M-09 coin-sell was already retired. The one coherent new weave is the regional-scarcity read on coconuts (M-30 soft).

REWORK: The dossier's 2nd-anchor candidate lists M-09 (luxury→coin sell) — that motif is retired (#163/#240). The candidate should be redrafted as M-30 (regional scarcity gate via biome restriction) or the M-26 consumption angle. Neither is strong enough to author now but M-30 is the better framing.

## geckolib   [anchors: support/library (1)]

Zero blocks, zero items, no recipe types, no loot. Pure animation API. No content surface to route through any method. No motif applies.

- LEAVE — genuine zero-content animation/rendering library; 0 items, 0 loot, no methods. Nothing to weave.

## dynamic_fps   [anchors: support/performance (1)]

Client-only performance throttler. Zero blocks, zero items, no recipe types, no loot. No material, no method, no content.

- LEAVE — zero-content client performance utility; nothing to weave.

## jade   [anchors: support/client-UI (1)]

Client-only informational overlay. Zero items, zero blocks, no recipe types, no loot. Purely display-side; no material hooks.

- LEAVE — zero-content client UI overlay; nothing to weave.

## bettermineshafts   [anchors: survival (1)]

Structure overhaul only. Zero blocks, zero items, no recipe types. The dossier notes loot=no (uses vanilla mineshaft loot tables unchanged). No material of its own.

Power-read: It expands and enriches the mineshaft structure, making underground exploration more rewarding and more dangerous. It does not add new loot tables — it overrides the physical structure but keeps vanilla chests. The question is whether the expanded structure is a hook for loot-seeding.

**Candidate 1 — loot-seed weave-relevant drops into its expanded chests (loot-seed delivery)**
Since Better Mineshafts uses vanilla mineshaft loot (loot=no means no *new* tables, but the expanded chests still pull from `chests/abandoned_mineshaft`), a Phase 3 action could augment vanilla mineshaft loot tables with weave-relevant items (boss-key drops, magic reagents, Numismatics coin, regional scarcity clues). However: the loot=no tag means the mod doesn't register its own loot table path — any enrichment would target vanilla's `chests/abandoned_mineshaft`, which is shared with all mineshafts regardless of whether Better Mineshafts generated them. That's not specifically a bettermineshafts link; it's a vanilla loot-table edit. The structure mod's only distinct hook is its more elaborate architecture (more chests, side rooms), which increases the yield from vanilla loot but doesn't offer a targeted drop path. Red-team: loot-seeding vanilla's mineshaft table benefits all mineshafts, not specifically Better Mineshafts. The mod is a structure enhancer, not a structure that registers unique loot-table paths.

- from: bettermineshafts expanded mineshaft structure | via: loot-seed (vanilla `chests/abandoned_mineshaft`) | to: survival/economy | motif: M-02 | power: everyday | tone: ok | verdict: REJECT | reason: no unique loot table path — loot-seeding the vanilla mineshaft table is a vanilla edit, not bettermineshafts-specific; the mod offers no targetable loot hook.

The dossier's own read is correct: no items, no methods, nothing to weave beyond structure worldgen.

- LEAVE — structure overhaul with no new items/loot-table paths; loot enrichment would target vanilla tables not specific to this mod.

## azurelib   [anchors: support/library (1)]

GeckoLib 4.x fork — animation API. One utility block (`azurelib:lightblock`) that is an internal renderer helper with no player use. Zero items, no recipe types, no loot.

- LEAVE — genuine zero-content animation library (one internal render-helper block, no player items, no loot, no methods); nothing to weave.

## recipe_integration   [anchors: support/recipe-bridge (1)]

Load-conditioned cross-mod recipe datapack. Zero blocks, zero items, no loot. It authors recipes of other mods' types but registers none itself.

Power-read: This mod fires recipes conditionally when mods are present. Its `made-by` list includes `create:milling`, `create:mixing`, `create:pressing`, `createaddition:charging`, `createaddition:rolling`, `ars_nouveau:scry_ritual`, `occultism:crushing`, `farmersdelight:cutting` — all present in this pack. It may already be adding cross-mod bridges the pack needs. However: the dossier correctly identifies most of its 82 c:tags as dormant (Aether, Mekanism, MI, GT are not installed). It is itself a connective tool, not a mod to weave.

**Candidate 1 — audit which of its live recipes fire for this modlist, and flag conflicts with curated weave authoring**
This is not a weave candidate — it's a tool that may create bridges automatically. The risk is it authors bridges that contradict curated decisions (e.g. free ore-doubling that bypasses the designed scarcity model, or unifying items that should stay distinct). This is an ops concern, not a Phase 2 weave.

- from: recipe_integration auto-bridges | via: conditional recipe datapack | to: cross-system | motif: no-motif | verdict: REJECT | reason: not a content mod to weave — it is the bridge layer itself; the relevant action is an audit of which of its live recipes conflict with or duplicate curated weaves, not authoring a new weave against it.

- LEAVE — support/recipe-bridge layer; it is the connective tool, not a weave target. Recommend a modlist-active-recipes audit (outside Phase 2 scope).

## imfast   [anchors: support/QoL-compat (1)]

Server-side movement-validation patch. Zero blocks, zero items, no loot, no recipe types. Pure behavioral fix enabling fast vehicles to avoid anti-cheat kicks.

- LEAVE — zero-content behavioral patch; functionally enables the aeronautics pillar but registers nothing wireable.

## l2library   [anchors: support/library (1)]

LightLand shared code library. Zero blocks, zero items, no recipe types, no loot.

- LEAVE — genuine zero-content library/API; nothing to weave.

## kubejs   [anchors: support/modpack-tooling (1)]

The pack's scripting backbone. Zero blocks, one internal generated_bucket item, no recipe types of its own. It is the mechanism by which all weaving is authored, not a weave target.

- LEAVE — the weaving tool itself, not a content node; nothing to weave against it.

## just_blahaj   [anchors: decoration/flavor (1)]

31 plush shark variants in dye colors and pride flags. No recipe types, no loot of its own (loot=yes but it's the block-drop loot, not a structure loot source). Consumes vanilla wool/dye.

Power-read: Pure decorative placeable. Crafted from cheap vanilla wool + dye. No material to route. No method. The "loot=yes" is block-drop loot (you get the plush back), not a structure chest.

**Candidate 1 — Create dye processing → colored blahaj (M-04 / M-12)**
Create's `toolbox_dyeing` or generic crafting could dye blahaj variants. Red-team: the mod already has 31 variants craftable with vanilla dye — you just craft the color you want directly. Adding a Create dyeing recipe is pure redundancy with zero gameplay value. Reject.

- from: just_blahaj colored variants | via: create:toolbox_dyeing or create:mixing | to: Create | motif: M-04 | power: everyday | tone: clash (dye-mob-plushies via industrial mixer is absurd) | verdict: REJECT | reason: pure redundancy — 31 direct craft variants already exist; forced Create route adds no value and the tone is a clear clash.

**Candidate 2 — wool/dye scarcity → blahaj as a luxury decoration good (M-30)**
In a scarcity-driven pack, wool comes from sheep (farmable) and dye from crops/plants. Neither is regionally scarce in an interesting way for this mod specifically. The blahaj has no system role beyond decoration.

- LEAVE — pure decoration flavor mod; no content, method, or material to route into the loop. Forcing any edge here is the failure mode the briefing warns against.

## tipsmod   [anchors: support/QoL-client (1)]

Loading-screen tips display. Zero items, zero blocks, no recipe types, no loot. Client UI only.

- LEAVE — zero-content client UI utility; nothing to weave.

## modelfix   [anchors: support/bugfix (1)]

Client rendering/model fix. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content client rendering bugfix; nothing to weave.

## followersteleporttoo   [anchors: support/QoL (1)]

Pet-teleport convenience fix. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content behavioral QoL fix; nothing to weave.

## betterclouds   [anchors: support/visual (1)]

Client volumetric cloud renderer. Zero items, zero blocks, no recipe types, no loot.

- LEAVE — zero-content client visual mod; nothing to weave.

