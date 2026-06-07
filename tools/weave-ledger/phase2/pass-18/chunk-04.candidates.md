# Phase 2 candidates — chunk-04

## createthreadedtrains   [anchors: support/performance (1)]

LEAVE — pure performance mod; 0 items, 0 blocks, 0 recipe-types. Its only surface is tick-scheduling for Create's train network. It indirectly enables the aeronautics/logistics pillar by making large train networks viable, but that is a technical precondition, not a weave-worthy material link. Nothing to route through any method.

---

## spawn   [anchors: survival (1)]

Power-read: spawn has 165 blocks, 296 items, 34 biome-modifiers, loot=yes. The primary content surfaces are (a) seafood drops — clam variants, crab/barnacle, anglerfish, seal — all raw biological materials; (b) date-palm wood (a second wood species with full block family); (c) the casting_net_clam mechanic; (d) existing FD cooking/cutting integration. Everyday items — fish drops, clams. Mid-tier: the date-palm wood set (scarce new biome wood). The mod already has one real inbound weave (farmersdelight:cooking/cutting), which is the floor.

**Candidate A — economy anchor via Numismatics (M-09)**
- from: spawn:clam / spawn:cooked_crab / exotic seafood catches | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: clams as luxury bivalves and exotic deep-sea fish (anglerfish buckets, seal milk) are naturally scarce/desirable goods that a player would sell to a Numismatics vendor. The fishing-to-coin loop rewards specializing in aquatic harvesting. Red-team: crab/clam are common enough to flood the market — counter: the casting_net mechanic is effort-gated (net use), keeping yield moderate. Survives.
- verdict: ACCEPT | hook: Freshwater pearl-clams and deep-sea catches fetch good prices at the trading floor — fishing pays.

**Candidate B — Create processing pull (M-12)**
- from: spawn:clam_case_* / spawn:crab (mob drop) | via: create:milling or farmersdelight:cutting | to: create | motif: M-12 | power: everyday | tone: ok
- Theme-fit: crushing a clamshell in a millstone to yield a shell-dust/lime byproduct (calcium byproduct from shells is a real industrial process), or a FD cutting board recipe for crab meat, deepens the seafood processing chain. Red-team: this is light but coherent. The milling depth for a clamshell is clearly "everyday" — one light step, not gated.
- verdict: ACCEPT | hook: Run crab shells through the millstone for lime dust — a Create byproduct that feeds stonecutting chains or fertiliser.

**Candidate C — Create fishery industry pull (M-12)**
- from: spawn fish/clam drops | via: createfisheryindustry:peeling / bait_trap | to: aeronautics (logistics) | motif: M-12 | power: mid | tone: ok
- Theme-fit: spawn's new fish and clams are natural bait/peel inputs for the Create Fishery Industry machine — mechanized aquatic harvesting of spawn's critters. The mod already interacts with vanilla fishing; routing its unique critters through a Create-driven fishery is a plausible automation weave. Red-team: createfisheryindustry is a narrower mod; the pairing is a "nice-if-it-loads" not a load-bearing weave. Keep as secondary.
- verdict: REJECT | reason: Weak — createfisheryindustry integration is not load-bearing for the loop; the FD cooking and Numismatics pair already handle the seafood chain. Don't add a third parallel chain for the same material.

**Candidate D — date-palm wood → Create sawmill (M-12)**
- from: spawn:date_log | via: woodworks:sawmill | to: create | motif: M-12 | power: everyday | tone: ok
- Theme-fit: date logs are a new wood species that already rides woodworks:sawmill (the dossier confirms this inbound weave exists). This is an EXISTING connection — it's already woven.
- verdict: REJECT | reason: Existing inbound weave (woodworks:sawmill already processes spawn's wood per the dossier). Noting here for completeness; no new work needed.

REWORK note on existing connections: The FD cooking/cutting weave is sound and appropriate — it is the correct first anchor and correctly sized (everyday material, light step). OK — existing connections sound.

---

## zeta   [anchors: support/library (1)]

LEAVE — pure code library (Vazkii's module system framework). 0 blocks, 0 items, loot=no. One framework-scaffolding biome-modifier that has no player content. No material surface; nothing to route through any method.

---

## geckolib   [anchors: support/library (1)]

LEAVE — animation/rendering API. 0 blocks, 0 items, loot=no. Renders entities for dozens of mods (Ars Nouveau, Cataclysm, Alex's Mobs, etc.) but exposes no player-facing content or recipe surface. No material to route.

---

## upgrade_aquatic   [anchors: survival (1)]

Power-read: 319 blocks, 379 items, 20 biome-modifiers, loot=yes, 26 c:tags. Very rich — multiple food c:tags (raw_fish, cooked_fish, raw/cooked pike/perch/lionfish, pie, berry), prismarine rods, kelp storage, two new wood sets (driftwood, riverwood), coralstone deco family. The woodworks:sawmill inbound weave is already in place (the one existing connection). Everyday: raw fish, kelp, coral. Mid: cooked fish dishes, prismarine rods. The coralstone building family is mid-tier decorative.

**Candidate A — economy via Numismatics (M-09)**
- from: upgrade_aquatic:cooked_pike / cooked_perch / cooked_lionfish / upgrade_aquatic pie | via: numismatics sell | to: economy | motif: M-09 | power: mid | tone: ok
- Theme-fit: lionfish and exotic ocean fish are high-effort catches — diving/exploring ocean biomes that are dangerous (threshers, hostile jellyfish). Cooked forms as a luxury seafood commodity makes good sense; a player specializing in ocean exploration sells delicacies. Red-team: the food-to-coin M-09 pattern risks flooding if fish are too common — cooked_lionfish and cooked_perch are mid-rarity catches specifically from new ocean biomes, keeping them scarce enough. Survives.
- verdict: ACCEPT | hook: Seared lionfish from the deep ocean fetches real coin at the trading stall — a reason to go diving.

**Candidate B — Create milling pull for coralstone (M-04)**
- from: upgrade_aquatic:*_coralstone (deco blocks) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok
- Theme-fit: coralstone is a stone-type deco block; crushing it lossy back to gravel/crushed mineral (plus XP nugget per M-04) is the Create "recycles deco" motif. A player who builds with coralstone should be able to feed scraps back. Everyday step — one light crush. Red-team: coralstone is decorative, not a load-bearing material; the edge is real but minor. Still coherent.
- verdict: ACCEPT | hook: Excess coralstone goes into the crushing wheel — gravel and XP out, not wasted blocks.

**Candidate C — farmersdelight cooking chain for raw fish (M-12)**
- from: upgrade_aquatic:raw_pike / raw_perch / raw_lionfish | via: farmersdelight:cooking | to: survival | motif: M-12 | power: everyday | tone: ok
- Theme-fit: the fish explicitly export c:tags for raw/cooked variants; FD cooking is the natural pull method. This extends the cooking web with new fish species, contributing to diet diversity (Survival pressure). Red-team: this is almost certainly already wired via FD's tag-based cooking recipes — if the c:tags are in place, vanilla/FD cooking already handles it without a new recipe. REJECT as redundant unless a specific gap exists.
- verdict: REJECT | reason: The raw_fish c:tag already routes through FD's tag-based cooking generically. Authoring a new recipe would be noise over an existing tag path.

**Candidate D — Ars Nouveau imbuement for jellyfish (M-10)**
- from: upgrade_aquatic jellyfish drops (bioluminescent fluid concept) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash
- Theme-fit: jellyfish have a bioluminescent/electric vibe — a superficial thematic match to arcane infusion. Red-team: jellyfish drops are not documented in the dossier; this requires assuming a drop the sweep didn't confirm. The "bioluminescent → magic" link is a theme stretch, not a tight mechanical fit. Fails red-team on both evidence and theme.
- verdict: REJECT | reason: No documented jellyfish drop with a clear arcane use; theme connection is a stretch. Don't force.

REWORK on existing connections: woodworks:sawmill is the only current inbound weave; it's sound (driftwood/riverwood → planks via sawmill). Two ACCEPT candidates (M-09 economy, M-04 Create recycling) bring it to two anchors. OK — existing connection sound; new weaves add economy and Create.


