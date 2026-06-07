# Phase 2 candidates — chunk-09 (context-fed)

## moreoverlays   [anchors: support/QoL (1)]
LEAVE — pure client HUD overlay (light-level, chunk-boundary, JEI-search); zero items/blocks/methods; no material surface to route.

## sounds   [anchors: support/polish (1)]
LEAVE — client audio-overhaul only; 0 items, 0 blocks, no recipe types; nothing to weave.

## bookshelf   [anchors: support/library (1)]
LEAVE — modder utility library; no player-facing items or recipe types; sanctioned support role.

## sable_sa_compat   [anchors: support/compat (1)]
LEAVE — zero-content compat patch (Create Stuff 'N Additions ↔ Sable ship physics); no items, no methods; serves the aeronautics pillar already.

## staaaaaaaaaaaack   [anchors: support/QoL (1)]
LEAVE — drop-merge QoL (entity coalescing); 0 items, 0 methods; generic behavior mod with no material graph.

## voicechat   [anchors: support/comms (1)]
LEAVE — proximity voice infrastructure; 0 items, 0 blocks, 0 methods; sanctioned social-layer support role.

## modelfix   [anchors: support/bugfix (1)]
LEAVE — client render-fix only; 0 items, 0 blocks; nothing to route.

## rightclickharvest   [anchors: support/QoL (1)]
LEAVE — interaction QoL (right-click harvest/replant); 0 items, 0 methods; purely behavioral, no material graph.

## blood_n_particles_datapack   [anchors: support/cosmetic (1)]
LEAVE — cosmetic blood particle emission on hit; the 184 "items" are particle-holder internal entries (minecraft:blood1..blood15 etc.), not collectible/craftable items; no recipe types; no weave surface.

## createtreadmill   [anchors: Create (1)]
Existing rows: M-26 ACCEPT (player-effort-as-consumption), M-33 ACCEPT (SU-as-a-service). Both are sound. The pile of TLM/soul-orb REJECTs is correct. One gap worth examining: the M-28 colony route has never been tried, and a treadmill loop does have a MineColonies adjacency — a colony's Guard or Worker hut running treadmills as cheap early power before windmills/waterwheels are viable. But the treadmill produces generic SU; it has no item surface MineColonies can request, and a colony hut doesn't "consume" a treadmill's output in a recipe-requestable way. That's a gameplay-flavor link, not a ledger-level weave. No missing motif candidate found.

CHALLENGE | from: createtreadmill:treadmill (player-powered SU source) | via: create:* network consumption | to: survival | motif: M-26 | verdict: WEAKEN — existing M-26 ACCEPT (5/7 votes) is the right call but the hook is thin: "effort as consumption" stretches M-26 (which is normally a material/food/fuel *spent*; player effort isn't an item consumed against pressure). The weave is defensible but borderline — flag for Gate 2 review. Existing rows sufficient otherwise; no new candidates.

## beachparty   [anchors: survival (1)]
Existing strong ACCEPTs: M-12 coconut → create:milling/extradelight:juicer, M-26 cocktail consumption, M-30 regional scarcity (beach biome), M-16 seasonal melon cocktail, M-35 maturation path. The M-33 Palm Bar service ACCEPT (2/3 votes) is weak — the hook of "a specialist builds a Palm Bar on an Aeronautics ship tavern" is a nice image but speculative; a Palm Bar doesn't inherently require player-labour-on-another's-materials the way enchanting-for-hire does.

One gap not covered: the `beachparty:mussel` / `cooked_mussel_meat` and the `crocs`/`beach_hat`/`bikini` cosmetics. Mussels are a mid-tier seafood with no explicit Create or economy routing in existing rows. Also: the `message_in_a_bottle` as a **loot-seed** carrier was (correctly) rejected for M-08, but a **M-34 combat-supply** re-read was also rejected. There's a subtler un-examined loot angle: seeding a **Northstar astronomical_reading** or **Cataclysm dungeon clue** inside message_in_a_bottle as exploration loot (M-37 research/knowledge gate variant). But no current motif covers "exploration document as found loot leading to knowledge." M-37 requires MineColonies research or Ars knowledge, not a found document. REJECT-for-review (no-motif).

One genuinely missing link: the **diet-system pull** on cocktails. Cocktail buffs were mapped via M-26 (consumption sink), but the diet-variety system (Diet – AppleSeed Edition) creates a specific demand for *Fruits/Sugars* group items. Cocktails span fruit+sugar combos (coconut, cocoa/honey/melon). This is a deeper reading of M-26 — not just "drinks are consumed" but "the diet pressure specifically pulls on the Fruits+Sugars groups that beach cocktails satisfy, so off-season or land-locked players buy them." This is an elaboration of existing M-26, not a new row, but the hook should be sharpened.

CHALLENGE | from: beachparty cocktails (coconut/honey/melon/cocoa) | via: beachparty:palm_bar_mixing | to: survival | motif: M-26 | verdict: SHARPEN — the existing M-26 ACCEPT rows are correct but under-specify the diet hook. The compelling hook is not just "buffs are consumable" but "cocktails satisfy Fruits+Sugars diet groups that no winter-available food covers — the beach bar feeds a dietary gap created by seasonal scarcity." This is a stronger weave than generic consumption; should be the canonical hook at Gate 2.

NEW | from: beachparty:cooked_mussel_meat | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: mussel meat is a coastal seafood not covered by any other mod; routing it through farmersdelight:cooking into a seafood chowder or stew adds a protein-group food from the beach biome, meaning the coastal settler supplies something the inland farmer cannot — a small but concrete cross-biome food dependency.

