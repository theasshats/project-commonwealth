#!/usr/bin/env bash
# create-audit-issues.sh
#
# Creates GitHub issues from the May 2026 mod audit on Derpack X.
# Uses the standard Derpack X label scheme.
#
# Run setup-labels.sh first — the labels must exist.
#
# Usage:
#   ./create-audit-issues.sh           # DRY RUN (default)
#   ./create-audit-issues.sh --apply   # actually create the issues
#
# Re-running --apply will create duplicates (GitHub doesn't dedupe by title).
# To skip specific issues, comment out the corresponding add_issue block.

set -euo pipefail

APPLY=false
if [[ "${1:-}" == "--apply" ]]; then
    APPLY=true
elif [[ -n "${1:-}" ]]; then
    echo "Unknown argument: $1"
    echo "Usage: $0 [--apply]"
    exit 2
fi

# --- preflight --------------------------------------------------------------

if ! command -v gh >/dev/null 2>&1; then
    echo "ERROR: gh CLI not installed."; exit 1
fi
if ! gh auth status >/dev/null 2>&1; then
    echo "ERROR: gh CLI not authenticated. Run: gh auth login"; exit 1
fi
if ! gh repo view >/dev/null 2>&1; then
    echo "ERROR: not inside a GitHub repo accessible to gh."; exit 1
fi

REQUIRED=("discussion" "remove-mod" "update-mod" "content" "low-priority")
EXISTING="$(gh label list --limit 200 --json name -q '.[].name' 2>/dev/null || echo '')"
MISSING=()
for L in "${REQUIRED[@]}"; do
    grep -qFx "$L" <<<"$EXISTING" || MISSING+=("$L")
done
if [[ ${#MISSING[@]} -gt 0 ]]; then
    echo "ERROR: required labels missing: ${MISSING[*]}"
    echo "       Run ./setup-labels.sh --apply first."
    exit 1
fi

REPO="$(gh repo view --json nameWithOwner -q .nameWithOwner)"
echo "Target repo: $REPO"
if $APPLY; then echo "Mode:        APPLY"; else echo "Mode:        DRY RUN"; fi
echo

# --- issue creator ----------------------------------------------------------

COUNT=0

add_issue() {
    local title="$1" labels="$2"
    local body
    body=$(cat)
    COUNT=$((COUNT + 1))

    if $APPLY; then
        echo "[$COUNT] Creating: $title"
        gh issue create --title "$title" --label "$labels" --body "$body" \
            | sed 's/^/        /'
    else
        echo "[$COUNT] would create: $title"
        echo "         labels: $labels"
    fi
}

# ===========================================================================
# Mod overlaps — pick one each
# ===========================================================================

add_issue "Overlap: Accessories vs Curios — pick one" "remove-mod,discussion" <<'EOF'
Both `mods/accessories.pw.toml` and `mods/curios.pw.toml` are present, plus `mods/accessories-compat-layer.pw.toml` which tries to bridge them.

These are competing accessory/trinket-slot systems. Mods integrate with one or the other; running both creates parallel ecosystems with split slots and a layer of compat translation in between.

**Decision needed:** keep one, drop the other (and the compat layer).

Notes:
- Curios is the incumbent. Iron's Spells, Ars Nouveau, Occultism, and many other magic/combat mods integrate with it directly.
- Accessories is newer, cleaner API, less mod support.
- Most likely answer is "keep Curios, drop Accessories + compat layer" given the rest of the mod list.

Source: mod audit, May 2026
EOF

add_issue "Disambiguate: companion vs companions-mod" "discussion" <<'EOF'
Two mods with very similar names are in the pack:
- `mods/companion.pw.toml`
- `mods/companions-mod.pw.toml`

The project glossary calls out "Sable Companion" as the API that lets mods work on physics-simulated Aeronautics ships, so one of these is probably that. The other is likely an unrelated pet/follower mod.

**Action:** open both `.pw.toml` files, check the source slugs, confirm we know what each one does. If one is redundant or misnamed, decide whether to keep it.

Source: mod audit, May 2026
EOF

add_issue "Overlap: create-new-age vs createaddition (electricity)" "remove-mod,discussion" <<'EOF'
Both `mods/create-new-age.pw.toml` and `mods/createaddition.pw.toml` add electricity to Create.

Running both gives you two parallel electric systems. They don't typically conflict directly but they confuse players and add bloat.

**Decision needed:** pick one.

- **Create: New Age** — more modern, broader scope (induction, advanced machines), maintained for recent Create versions.
- **Createaddition** — the original, focused on FE/RF bridge and basic electric power. Smaller surface area.

Source: mod audit, May 2026
EOF

add_issue "Overlap: create-industry vs create-tfmg (heavy industrial)" "remove-mod,discussion" <<'EOF'
Both `mods/create-industry.pw.toml` and `mods/create-tfmg.pw.toml` are heavy-industrial Create expansions covering similar territory: steel, oil/fluid processing, ore processing, industrial machinery.

Significant content overlap. Running both means duplicate progression chains for steel and refined fluids.

**Decision needed:** pick one, or confirm the overlap is intentional (e.g., you want TFMG's specific machines and Industry's specific machines).

Source: mod audit, May 2026
EOF

add_issue "Overlap: better-animations-collection vs not-enough-animations" "remove-mod,discussion" <<'EOF'
Both `mods/better-animations-collection.pw.toml` and `mods/not-enough-animations.pw.toml` override vanilla player and mob animations.

They will fight over the same renders. `mods/playeranimator.pw.toml` is the underlying animation library both probably depend on.

**Decision needed:** pick one (or confirm they target different things and don't actually conflict).

Source: mod audit, May 2026
EOF

add_issue "Overlap: appleskin vs food-effect-tooltips-forge" "remove-mod,discussion" <<'EOF'
Both add food info to tooltips:
- `mods/appleskin.pw.toml` — saturation values, hunger restore, full breakdown
- `mods/food-effect-tooltips-forge.pw.toml` — food-applied effects in tooltip

Some overlap on what they show. AppleSkin is the long-standing standard for food info. The other may be redundant or may add genuinely separate info (effect duration / chance specifically).

**Decision needed:** confirm the overlap is acceptable, or drop one.

Source: mod audit, May 2026
EOF

add_issue "Overlap: mutant-monsters vs mutants-and-zombies" "remove-mod,discussion" <<'EOF'
`mods/mutant-monsters.pw.toml` and `mods/mutants-and-zombies.pw.toml` both sound like they add mutant mob variants. Likely overlapping content (mutant zombies in particular).

**Action:** verify whether these are genuinely different mods covering different territory, or whether one supersedes the other. Drop the redundant one.

Source: mod audit, May 2026
EOF

add_issue "Inventory sort behavior across clientsort / mouse-tweaks / IPN" "content,discussion" <<'EOF'
Three inventory enhancement mods are in the pack:
- `mods/clientsort.pw.toml`
- `mods/mouse-tweaks.pw.toml`
- `mods/inventory-profiles-next.pw.toml` (IPN)

They mostly coexist but step on each other for sort hotkeys, double-click-to-fill behavior, and inventory-transfer modifiers. Players will see inconsistent behavior depending on which mod claims the hotkey.

**Action:** pick which mod owns "sort." Disable sort in the others (configurable in all three). IPN is usually the most feature-rich; ClientSort is lighter; Mouse Tweaks is mostly drag-to-fill.

Source: mod audit, May 2026
EOF

add_issue "Review: create-additional-logistics vs vanilla Create 6 logistics" "remove-mod,discussion" <<'EOF'
`mods/create-additional-logistics.pw.toml` was written for older Create versions that lacked native package/logistics features. Create 6 added packages, package frogports, factory gauges, etc.

**Action:** verify CAL still earns its slot on current Create. If the features it adds are duplicates of vanilla Create now, drop it.

Source: mod audit, May 2026
EOF

# ===========================================================================
# Risk / testing
# ===========================================================================

add_issue "Monitor: unofficial 1.21.1 ports for official releases" "update-mod,low-priority" <<'EOF'
Four mods have `1.21.1` literally in the slug name, which means they're community ports rather than official releases:

- `mods/alexs-mobs(1.21.1).pw.toml`
- `mods/citadel-(1.21.1-port).pw.toml` (Citadel is the dependency for Alex's Mobs and others)
- `mods/create-steam-n-rails-1.21.1.pw.toml`
- `mods/tacz-1.21.1.pw.toml` (Timeless and Classics Zero)

Community ports of major content mods carry hidden risks: unmaintained, missing features, broken textures, crashes when the original mod actually releases a 1.21.1 version.

**Action:** quarterly check whether official 1.21.1 versions have shipped; migrate when available.

Source: mod audit, May 2026
EOF

add_issue "Worldgen stack — test for terrain seams and structure density" "content,discussion" <<'EOF'
The worldgen stack is heavy:

**Terrain/biomes:** terralith, tectonic, biolith, terrablender, formations, formations-nether, oh-the-trees-youll-grow, ecologics, galosphere, enhanced-celestials, serene-seasons
**Trees:** dynamictrees, dynamictreesplus, dynamic-trees-terralith
**Structures:** towns-and-towers, tidal-towns, when-dungeons-arise-seven-seas, dungeons-and-taverns, valarian-conquest, all four YUNG's Better mods
**Underground:** underground-village-stoneholm, underground-worlds, deeperdarker, rolling-down-in-the-deep

Two specific concerns:
1. **Terralith + Tectonic** needs the official compat datapack or you'll see terrain seams.
2. **Structure density** with this many structure mods can produce worlds where vanilla terrain barely exists.

**Action:** create a test world from a fresh seed, fly around for 10 minutes, check for seams and structure spam. Adjust spawn rates in configs if structure spam is bad.

Source: mod audit, May 2026
EOF

add_issue "Investigation: TPS audit with current mob density" "discussion" <<'EOF'
Roughly 16+ mob-adding mods are in the pack:

alexs-mobs(1.21.1), mowzies-mobs, friends-and-foes-forge, mutant-monsters, mutants-and-zombies, grimoire-of-gaia, arphex, borninchaos, naturalist, bosses-of-mass-destruction-forge, l_enders-cataclysm, illager-invasion, rottencreatures, creeper-overhaul, kobolds, ribbits.

Mob density is one of the top TPS killers per the project decisions docs. Cumulative effect can be severe even at default spawn rates.

**Action:** after a few hours of play in a populated world, run `/spark profiler --thread *` for 60 seconds. Upload the flame graph. Identify hot paths in mob AI/spawning; tune mob caps or specific spawn rates in `server.properties` and individual mod configs.

Source: mod audit, May 2026
EOF

add_issue "Investigation: flight system interactions" "discussion" <<'EOF'
Multiple flight mods coexist with Create Aeronautics:

- `mods/create-aeronautics.pw.toml`
- `mods/create-jetpack.pw.toml`
- `mods/do-a-barrel-roll.pw.toml` (player rotation/aerobatics)
- `mods/gliders.pw.toml`
- `mods/sky-whale-ship.pw.toml`

These don't necessarily conflict but can produce weird physics: jumping off an Aeronautics ship with a jetpack, gliding from a moving ship, do-a-barrel-roll rotation overlaid on ship rotation.

**Action:** test scenarios manually. Note any genuinely broken combos in `docs/DESIGN-NOTES.md` (or wherever tribal knowledge ends up).

Source: mod audit, May 2026
EOF

# ===========================================================================
# Investigation / confirm intent
# ===========================================================================

add_issue "Confirm: food/cooking depth is intentional (~20 mods)" "discussion" <<'EOF'
The pack has 20+ food and cooking mods, including:

Farmer's Delight, all Let's Do mods (bakery-farmcharm-compat, beachparty, farm-charm, meadow, vinery, emi-compat, addon-compat), Create food addons (cafe, central-kitchen, food, confectionery, fishery-industry, alcohol-industry, cheese), expanded-delight, extradelight, oceans-delight, trailtales-delight, sushigocrafting, butchery, cooking-for-blockheads, spice-of-life (maids-dream + onion), foodvariations, chefs-delight.

**Question:** is this depth intentional? If yes, no action — close as confirmed. If it's drift from batch-add or wishlist days, this is the biggest single area to trim.

Source: mod audit, May 2026
EOF

add_issue "Confirm: meme/joke mods are intentional" "discussion" <<'EOF'
Several mods stand out as joke/meme/vibes additions that may not fit an Aeronautics pack intentionally:

- `777`, `boykisser`, `just-blahaj`, `mmmmmmmmmmmm`, `the-bible`, `death_note`, `touhou-little-maid`, `umapyoi`, `bloos-gacha-machine`, `create-blockchain`, `create-cheese`, `create-more-pipe-bombs-in-packages`, `brazil-legends`, `staaaaaaaaaaaack`

**Question:** are these all intentional inside jokes / friend-group additions? Or did some sneak in via batch add that should be removed?

Close as confirmed once reviewed. No action needed otherwise.

Source: mod audit, May 2026
EOF

add_issue "Identify: unfamiliar mods" "discussion" <<'EOF'
The following mods couldn't be confidently identified during the audit. Worth a quick look at each `.pw.toml` to know what they are (or remove the ones nobody remembers adding):

- `777`
- `aileron`
- `arphex`
- `bbrb`
- `bagus-lib`
- `chloride`
- `cubes-without-borders`
- `data-anchor`
- `detect-afk` (note: `afk-sleep` also present — overlap?)
- `edf-remastered`
- `mffs`
- `midnight-thoughts`
- `mmlib`
- `mru`
- `northstar-redux`
- `prickle`
- `trek`
- `wits`

**Action:** spot-check each, drop anything nobody intentionally added.

Source: mod audit, May 2026
EOF

add_issue "Multiplayer-only mods — keep or drop for friend-group use?" "remove-mod,discussion" <<'EOF'
Two mods are built for public-server use cases that may not earn their slot in a small friend-group pack:

- `mods/open-parties-and-claims.pw.toml` — land-claiming and parties. Useful when players don't trust each other; overhead when they do.
- `mods/better-compatibility-checker.pw.toml` — enforces strict client/server mod-list matching on connect. Useful for public servers; annoying when one friend is a version behind.

**Question:** are these actively used? If yes, keep. If no, drop — both add complexity that the audience description doesn't justify.

Source: mod audit, May 2026
EOF

# --- summary ----------------------------------------------------------------

echo
echo "============================================================"
if $APPLY; then
    echo "Created $COUNT issues on $REPO"
else
    echo "DRY RUN: would create $COUNT issues."
    echo "Re-run with --apply to actually create them."
fi
echo "============================================================"
