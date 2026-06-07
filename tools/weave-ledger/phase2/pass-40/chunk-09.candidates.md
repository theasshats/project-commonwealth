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

