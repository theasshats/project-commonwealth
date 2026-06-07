# Phase 2 candidates — chunk-17

## recipe_integration   [anchors: support/library (1)]
LEAVE — pure connective-recipe datapack; no items/blocks of its own, no methods to route through.
Its 82 c:tags largely reference uninstalled mods (aether, mekanism, MI, GT) and are inert in this
modlist. It IS the weaving layer, not a node. No second anchor possible; role is sanctioned support.

---

## galosphere   [anchors: survival, magic (2)]
- from: galosphere:silver_ingot (=palladium) | via: create:crushing (ore → crushed ore + byproduct) | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: the only regional palladium deposit gets doubled in the ore-crusher, rewarding the spelunking trip — exactly what M-03 is for
- from: palladium (c:ingots/palladium) | via: numismatics mint (Create-processed → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: scarce cave metal, refined by Create, minted to coin — palladium as the pack's premium precious-metal currency metal
- from: galosphere:allurite_block / lumiere_block deco variants | via: create:crushing (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-mined crystal bricks grind back to raw shards + xp, keeping the material loop tight
- from: galosphere:silver_ingot (palladium) as armour/smithing ingredient | via: create:deploying / item_application | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: sterling armour is a smithing-table upgrade already; a deployer path would duplicate the vanilla flow without adding depth — and palladium isn't flagged as an aeronautics or tech structural component, so no natural destination
REWORK: dossier marks magic (via M-07) as the existing 2nd anchor — that connection is sound (allurite/lumiere as reserved attunement catalysts, established in scripts 33/80/97). OK — connections sound.

---

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux:oak_plow / reaper (iron blade) | via: recipe (require Create iron sheet / mechanical component as ingredient) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: a reaper blade isn't a whittled stick — making the metal implements depend on Create-processed iron sheets puts early farm-tool upgrades on the Create supply chain, a natural one-step tie-in
- from: astikorcartsredux:oak_supply_cart (bulk-storage hauling) | via: aeronautics logistics integration (config/recipe) | to: aeronautics | motif: M-23 | power: everyday | tone: clash | verdict: REJECT | reason: carts are horse-drawn ground vehicles; forcing them onto airship hulls is a tone mismatch and the mod has no structural-material output — M-23 is for load-bearing alloys, not carts
- from: astikorcartsredux:oak_supply_cart | via: numismatics bounty (haul crops → colony supply → coin) | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: the cart itself isn't a consumable sell-good, and the loop "haul crops, sell crops" happens without a recipe-level weave — there's no join key to anchor on. Thematic adjacency only, no method routing possible.

---

## minecolonies_tweaks   [anchors: support (1)]
LEAVE — pure tag/QoL glue (c:crops/*, c:foods/* harmonization + colony scrolls). No methods, items,
or materials to route. Its value is ENABLING food-web weaves by making crop tags pack-wide; it IS the
harmonization layer. A second anchor would be forced.

---

## supplementaries   [anchors: create, survival (2)]
- from: supplementaries:flax (c:crops/flax) | via: create:milling (fibre → thread/linen intermediate) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: supplementaries already sits at create anchor via haunting/mixing/splashing. Adding milling-of-flax is valid M-12 but is incremental depth within the existing create anchor, not a *new* system connection — no net anchor gain, and the existing 2 anchors are sound. File as dossier-known latent.
- from: supplementaries:ash (c:dusts/ash) | via: smokeleafindustries extractor or create:mixing | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: ash as a mixing input is already implied by the established create:mixing inbound weave; no new pillar.
OK — connections sound. Already ≥2 anchors and deeply woven. No new cross-system edge required; existing Create + survival anchors are justified and tight.

---

## letsdocompat   [anchors: survival (1)]
LEAVE — pure recipe/tag bridge for the Let's Do food family; registers no items/methods of its own.
Its existence enacts M-12-style food-chain unification across farm_and_charm/bakery/vinery etc.
A second anchor would mean routing the *bridge itself*, not its output foods — that belongs in the
constituent food mods (bakery, vinery, etc.).

---

## midnightthoughts   [anchors: survival (1)]
LEAVE — behavior-only rest mechanic (well-rested buff + sleep overlay). Zero items/blocks/tags;
no material join key. Nothing to route through any method. Survival anchor is a behavior anchor, not
a production node.

---

## bakery   [anchors: survival (1)]
- from: bakery:strawberry_cake / chocolate_gateau / linzer_tart (high-effort finished baked goods) | via: numismatics sell/price (luxury good → coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: a fully-built cake tier takes wheat→flour→dough→bake→decorate; selling the finished luxury to a trader closes the food-chain→coin loop that M-09 is designed for
- from: bakery ingredient: wheat / grain | via: create:milling (wheat → flour as Create-milled intermediate, replacing the crafting_bowl flour step) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mills already grind grain — routing the bakery's flour demand through a Create millstone makes the bakery literally downstream of the Create production line; everyday depth, one step, correctly sized
- from: bakery:apple_jam / glowberry_jam (fruit preserve) | via: ars_nouveau:imbuement (fruit preserve as potion catalyst / M-10 flavour) | to: magic | motif: M-10 | power: everyday | tone: clash | verdict: REJECT | reason: jam-as-arcane-catalyst is a stretch; M-10 is for materials that have an arcane logic (exotic ores, monster drops) — a food preserve imbuement reads as arbitrary. Theme clash kills it.
REWORK: existing inbound weaves are only farm_and_charm cooking methods — the bakery is purely a survival/food node. The M-09 and M-12 candidates above add the needed 2nd anchor (economy and create respectively) so no existing connection is wrong; they just need augmentation.

---

## cubes_without_borders   [anchors: support (1)]
LEAVE — client-only Video Settings option (borderless window); zero items/blocks/tags/methods.
Sanctioned client-QoL support role.

---

## ctov   [anchors: survival (1)]
- from: ctov structure loot (added chest loot in the 23 village variants) | via: loot-seed (inject Numismatics coin / bounty item into ctov village chest loot tables) | to: economy | motif: M-08 | power: everyday | tone: ok | verdict: ACCEPT | hook: stumbling on a biome-themed village and finding a handful of coins in the treasure chest — the trading-post feeling comes naturally; finding wealth drives players toward the economy pillar
- from: ctov structure loot | via: loot-seed (inject magic reagent — e.g. ars_nouveau:source_gem or occultism scroll fragment) | to: magic | motif: M-02 | power: everyday | tone: ok | verdict: ACCEPT | hook: a hidden crypt-shrine in the village holds a fragment of something arcane — exploration rewards connect to the magic web; the biome-themed variants (e.g. mushroom, Halloween) make it especially natural
- from: ctov village structures | via: loot-seed (inject boss-key precursor component) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: M-15 is for boss drops gating complex recipes; a village chest is not a boss context and the theme doesn't fit. A coin/reagent seed (M-08/M-02 above) captures the exploration→economy/magic link without forcing a tech-gating angle.

---

## crash_assistant   [anchors: support (1)]
LEAVE — client crash-diagnostics utility; no items/blocks/methods/tags. Sanctioned support role.

---

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments loot chests (monument loot tables, loot=yes) | via: loot-seed (inject Numismatics coin into monument chest loot tables) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: raiding an expanded ocean fortress and finding a cache of coin among the prismarine treasure — aquatic dungeon → economy loop feels earned
- from: betteroceanmonuments loot chests | via: loot-seed (inject magic reagent or occultism spirit-crystal) | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: the deep oceanic ruins harbour something arcane — a spirit fragment or source shard — making the aquatic adventure feed the magic web
- from: betteroceanmonuments loot | via: loot-seed (boss-key gating component, guardian-drop tier) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: the monument already has a vanilla boss (elder guardian); adding a Create-gate boss-key here competes with that framing and would need the elder guardian drop, not a chest drop. Reserve M-15 for actual boss-drop items, not chest loot.
REWORK: existing dossier flags "defer to loot-table edit" as a reason not to candidate — that was overly conservative; loot-seed via: loot-seed is an explicit delivery in the briefing. The ACCEPT candidates above revise this.

---

## mcwstairs   [anchors: support (1)]
- from: mcwstairs stone/brick stair variants | via: create:crushing (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: over-built stone railings and balconies should crush back to raw/gravel + an xp nugget — consistent with M-04 across all deco-family stone blocks; keeps the material loop honest
- from: mcwstairs wooden railing variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is established for metal/stone deco (the motif notes "stone/brick stair-family variants"); wooden crushing is outside the motif's scope (wood already returns planks trivially via crafting, not a Create job) and would add noise without advancing the loop

---

## smokeleafindustries   [anchors: survival (1)]
- from: smokeleafindustries refined extracts / gummies (high-processing output) | via: numismatics sell/price (luxury consumable → coin) | to: economy | motif: M-09 | power: mid | tone: ok | verdict: ACCEPT | hook: the dealer villager already proves a sell-loop; formalizing refined extract → Numismatics coin makes the grow-and-refine chain fund the economy, not just stay isolated
- from: smokeleafindustries:generator (FE power from burnt inputs) → createaddition FE↔kinetic bridge | via: createaddition:liquid_burning or charging | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the hemp farm's generator powers Create machines via the FE↔kinetic bridge — the isolated FE island joins the Create spine; mid-tier depth appropriate to a self-contained farm
- from: smokeleafindustries raw hemp bud | via: create:milling (hemp → milled fiber, alt path to grinding) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the mod's own grinder/manual_grinder already handles this step; a Create milling route is redundant and erodes the mod's machine identity. Better to bridge at the energy/economy layer than to shortcut its own processing chain.
- from: smokeleafindustries refined oil/extract | via: create:mixing (solvent in a mixing recipe) | to: create | motif: M-12 | power: mid | tone: ok | verdict: REJECT | reason: without a specific consuming recipe defined, this is theme-adjacency only (oils go in mixers — so do many things). No clear join key for what it produces as an intermediate; reject until a specific target recipe is identified.

---

## jade   [anchors: support (1)]
LEAVE — client HUD overlay; zero items/blocks/methods/tags. Sanctioned support role.

---

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchantments (loot=yes, injected via loot tables) | via: ars_nouveau:enchanting_apparatus (apply Aileron's custom enchants through the Enchanting Apparatus as an arcane method) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: the arcane apparatus attunes the Elytra's flight enchantment — magic grants mastery of the skies; Ars' enchanting methods already handle complex enchant application and flight-gear is a natural target
- from: aileron Elytra enchantments | via: create:deploying / item_application (apply an enchant-scroll to the Elytra via deployer) | to: create | motif: M-20 | power: mid | tone: ok | verdict: REJECT | reason: M-20 is for woven parts assembled onto a base to upgrade it; an enchantment isn't a crafted physical part — it's an enchant, and the create:deploying approach would need an enchanted scroll item that doesn't exist in this mod. Theme fit is weak; the M-10 route via Ars is cleaner.

---

## accessories   [anchors: support (1)]
LEAVE — accessory-slot API library (no items/blocks/methods/tags of its own). Sanctioned support role.

---

## curios   [anchors: support (1)]
LEAVE — Curios accessory-slot API; no items/blocks/methods/tags. Sanctioned support role. Quietly
underpins the magic pillar (Ars/Iron's rings/amulets register here) but has no surface of its own.

---

## prickle   [anchors: support (1)]
LEAVE — config-format library (Prickle JSON format); no items/blocks/methods/tags. Genuine
zero-surface code library. Sanctioned support role.

---

## opacpvp   [anchors: support (1)]
LEAVE — PvP-rules toggle addon (damage cancel between party members); no items/blocks/methods/tags.
Sanctioned support role serving the cooperative premise.

---

== CHUNK COMPLETE ==
