# Phase 2 candidates — chunk-20

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure blueprint-pack add-on for MineColonies; ships no items or recipe-types. The Steampunk style already pulls Create blocks at construction time (via MineColonies colony-build supply) — that emergent tie is the extent of its cross-pillar contact, and it requires no recipe wiring. Forcing a recipe edge here would be contrived.

## solonion   [anchors: survival (1)]
- from: solonion:golden_lunchbox | via: create:mechanical_crafting | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The golden lunchbox auto-serves the optimal food — fitting that the best food-management tool needs a gear-tier component off the mechanical crafter, not just a crafting table.
- from: solonion:golden_lunchbox | via: create:sequenced_assembly | to: Create | motif: M-06 | power: mid | tone: ok | verdict: REJECT | reason: M-06 is reserved for endgame keystones; the lunchbox is a QoL mid-tier item — sequenced assembly is too deep for it. M-05 single-step gating is the right size.
- from: solonion:lunchbox upgrade chain | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: lunchboxes are personal carry items, not trade goods; selling them for coin has no narrative pull (players wouldn't "of course" trade lunchboxes). No coherent economy hook.

## jeresources   [anchors: support/client-UI (1)]
- LEAVE — pure display mod (mob-drop / worldgen / dungeon-loot viewer in JEI). Zero items, zero recipe-types, zero processing surfaces. Useful for the pack's scarcity-design communication (players can look up where regional ores spawn) but that is documentation, not a weave node. No coherent 2nd-pillar edge exists.

## just_blahaj   [anchors: decoration/friend-group flavor (1)]
- LEAVE — 31 plush variants crafted from vanilla wool/dye; no recipe-types, no material outputs, no processing surface. Forcing a weave onto decorative plushies is the exact failure mode the guardrails warn against. Friend-group flavor justifies inclusion; no second pillar possible without being contrived.

## chat_heads   [anchors: support/QoL-client (1)]
- LEAVE — client-side chat-UI cosmetic; zero items/blocks/recipe-types. Pure network-rendering utility. No material, no method, no weave surface.

## gravestone   [anchors: survival (1)]
- LEAVE — death-recovery utility (gravestone block + obituary item); no processing recipe-types, no material inputs/outputs. Any weave would require inventing a use for the gravestone block that isn't in the mod's design. The obituary is a record, not a reagent. Genuinely no coherent 2nd-pillar edge.

## packetfixer   [anchors: support/compat-infra (1)]
- LEAVE — zero-content network fix mod; relaxes packet-size limits. No items, no recipe-types, no player-facing mechanics. Pure infrastructure; cannot be woven.

## securitycraft   [anchors: support (1)]
- from: securitycraft reinforcing materials (scarce modded metals → reinforced blocks) | via: create:mechanical_crafting (gate the Universal Block Reinforcer's assembly behind a Create-made component) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: Reinforcing a block to be unbreakable-by-others should demand more than a crafting table — a Create-fabricated reinforcement plate as a required ingredient makes base-defense a tech-tier investment.
- from: securitycraft:sentry / keycard_reader (high-tier security gear) | via: numismatics sell/price | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: sentry/keycard gear is functional PvP/anti-grief equipment, not a luxury consumable. M-09 is for luxury goods / trade goods (wine, cheese, processed crops). Routing security hardware through the coin economy has no "of course" pull; it would feel arbitrary.
- from: securitycraft reinforced blocks | via: create:crushing | to: Create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: M-04 is for *decoration* crushing back to raw — reinforced blocks are functional security blocks, not deco. Crushing a reinforced block to scrap doesn't make thematic sense for a security mod and trivializes the reinforcing investment.
- REWORK note: existing dossier candidate "Create via crushing/mechanical_crafting — gate reinforcing or sentry components behind Create-made parts" is listed WEAK but the mechanical_crafting gate (M-05) is actually sound — the accepted ACCEPT row above promotes it. The crushing/recycling direction (M-04) is the weaker half and is correctly REJECT above.

## ritchiesprojectilelib   [anchors: support/library (1)]
- LEAVE — pure projectile/ballistics API for Create: Big Cannons and similar; zero items, zero recipe-types, no gameplay content. Indirectly serves the Create + aeronautics pillars through CBC, but the library itself has no weavable surface.

## irons_lib   [anchors: library/API (1)]
- LEAVE — shared framework library for Iron's Spellbooks; only player-facing content is the transmog table (cosmetic armor reskin, no item output) and the player statue (decorative multiblock). No material processing, no recipe-types registered, nothing foreign to route through. The magic-pillar connection is inherited entirely by irons_spellbooks proper.

== CHUNK COMPLETE ==
