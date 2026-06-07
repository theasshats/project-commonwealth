# Phase 2 candidates — chunk-04 (context-fed)

## cbc_at   [anchors: create, aeronautics (2)]

Existing rows cover M-15, M-34, M-26, M-28, M-30, M-31, M-37, M-29, M-05, M-06, M-19, M-02. Coverage is broad. Two gaps and one structural challenge noted.

- CHALLENGE | from: cbc_at heavy-autocannon/rocket-pod tier (several accepted rows labelled M-05 for the boss-drop gate) | via: native-method gating on Create parts | to: create | motif: M-05 | verdict: REJECT | hook: M-05 is "mod's flagship item built in its own machine, gated on Create parts as inputs"; the heavy autocannon already uses create:cutting + CBC assembly as its method — the boss-drop gate is M-15 (the trophy is the gate item, not a Create part). Filing the same boss-gate under M-05 misapplies the motif; M-05 should be reserved for the TFMG steel/hot-blast barrel-material-upgrade weave (which is a distinct, legitimately M-05 edge), not the trophy-gate.
- NEW | from: cbc_at barrel blanks / TFMG steel casting slag | via: tfmg:hot_blast → create:crushing (slag byproduct recycle) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: the industrial blast furnace that hardens nethersteel barrels produces slag — Crushing Wheels recover iron grit that feeds back into the munitions line, closing the arms-factory waste loop

## steves_lava_chicken_music_disc   [anchors: support (1)]

Existing rows: two REJECT attempts (loot-seed, M-34). Both correctly refused. Single-item easter-egg with zero gameplay surface — no item processing, no loot tables that could introduce pack-relevant drops. Prior passes exhausted plausible angles.

LEAVE — a single meme music disc; zero content surface; forcing any weave is noise.

## particlerain   [anchors: support (1)]

No prior rows. Zero items, zero blocks, zero loot, client-only rendering mod. No material to route through any method.

LEAVE — pure client visual layer; no content surface whatsoever.

## wits   [anchors: support (1)]

No prior rows. Zero items, zero blocks, server-side command utility only. No material, no loot.

LEAVE — debug command mod; no content surface.

## tide   [anchors: survival (1)]

Existing rows cover M-12/M-16/M-22/M-28/M-30/M-26/M-32/M-34/M-35/M-11 and M-05 (Angling Table). Coverage is strong. One nuance the existing rows miss entirely: M-33 (fishing-as-service). All existing economy rows frame tide fish as traded goods (M-30/M-28/M-34), but the Angling Table's customization work (rod tuning for lure/void fishing, seasonal-catch optimization) is a skilled service, not a sold product. Separately, the M-26 bait-consumption row is accepted but frames bait as "crop inputs consumed per cast" — the deeper version is that biome-rare bait (crafted from exotic inputs) creates a *demand chain* that can't be collapsed by the fisher alone.

- NEW | from: tide angling-table customization expertise (void-fishing rod setup, biome-matched bait loading) | via: service-for-hire (player performs rod setup on another player's materials at the Angling Table) | to: economy | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: the fishing specialist who has grinded the void-bobber unlock and biome bait tables tunes your rod for you — knowledge the builder doesn't have and can't simply buy off a stall

## createaddoncompatibility   [anchors: support (1)]

One prior row: REJECT (weave belongs on the plastic-producing mod, not this shim). Correct. Support/glue layer with zero material throughput of its own; only tag unification rules.

LEAVE — support compat shim; nothing to route through any method.

## cristellib   [anchors: support (1)]

No prior rows. Library with zero blocks, items, loot. Provides structure-config framework only.

LEAVE — pure code library; no content surface.

## create_ltab-3.9.2   [anchors: create, survival (2)]

Already ≥2. Existing rows cover M-08 (coin loot-seed, strong accept 13×), M-23 (airship-fragment loot-seed, accepted 2×), M-02 (magic reagent loot-seed, mixed). The M-34 row (combat/exploration specialist loots fabricated components) is accepted only 1× and deserves a cleaner framing: the existing M-08 coin-seed already anchors the structure to the economy loop. The M-34 angle is real but redundant with M-08's narrative unless the loot type is explicitly non-coin fabricated goods (combat drops vs. coin is a distinction worth preserving).

- NEW | from: create_ltab structure loot tables (rare chest in Create-era ruins) | via: loot-seed (seed a mid-tier cbc_at or createbigcannons damaged-munition component — an inert shell casing or a bent barrel) | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: whoever ran this abandoned workshop didn't just leave behind coins — they left behind a warhead that didn't go off; finding a dud AP shell in a Create ruin tells you the military tier exists before you've built your first cannon





