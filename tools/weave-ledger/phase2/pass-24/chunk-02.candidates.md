# Phase 2 candidates — chunk-02

## securitycraft   [anchors: support (1)]
- from: securitycraft sentry / mine devices | via: recipe (native-method gating) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A sentry requires a Create-machined brass gear + steel frame — base defense costs the same tech spine that runs production, so securing a factory earns its price.
- from: securitycraft keycard / reinforced-block set | via: recipe | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; reinforcing gear is useful to the owning player, not a trade commodity.
- from: securitycraft block-mines (diamond_mine, ancient_debris_mine) | via: loot-seed | to: survival | motif: M-02 | power: mid | tone: ok | verdict: REJECT | reason: mines don't drop loot to weave; they just detonate — no loot table surface worth seeding.

## dragonlib   [anchors: support/library (1)]
- LEAVE — pure code library; 1 dev-artifact block/item, no player-facing methods or materials.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single joke music disc; no item surface, no method, no loot table of consequence. Forcing any weave would be noise.

## stylecolonies   [anchors: support/decoration palette (1)]
- LEAVE — pure MineColonies blueprint pack; registers no items or blocks. The Steampunk style already implicitly pulls Create blocks at build time (a natural, recipe-free tie). No weave action possible.

## meadow   [anchors: survival (1)]
- from: meadow:cheese_wheel / alpine_dish | via: numismatics sell/bounty | to: economy | motif: M-09 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis; cheese being sellable is trivially true of any food item.
- from: meadow:alpine_salt + meadow:cheese_wheel | via: create:mixing / farmersdelight:cooking chain | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Alpine salt dissolved in a Create mixer brines the cheese mass into a preserve; the dairy pipeline runs through the Create kitchen tier, not just a campfire.
- from: meadow:alpine_salt_ore | via: create:crushing | to: create | motif: M-03 | power: everyday | tone: ok | verdict: ACCEPT | hook: Crushing alpine salt ore in a millstone yields refined salt + a small chance of trace mineral byproduct — routes the regional ore into the Create production tier.
- from: meadow:chambray_wool (felted textile) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Chambray is a woven alpine textile — imbuing it with source creates a soft arcane focus cloth (spell component). The pastoral/natural vibe reads as "of course a shepherd's weave could hold a spell."
REWORK: existing survival anchor is sound (food/biome content clearly pressure/survival). No existing multi-system connections to rework — mod is 1-anchor (survival only); the three accepts above add Create (×2) and magic.

## mcwstairs   [anchors: support/decoration palette (1)]
- from: mcwstairs stone/brick stair-family blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone railings and balcony blocks grind back to cobble/gravel + an XP nugget — deco blocks aren't a dead end, they feed the Create material loop (lossy, as intended by M-04).
- from: mcwstairs wood railing / platform blocks | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: wood crushed to planks adds nothing distinctive over vanilla planks; stone/brick variants are the only useful feedstock here. Keep one M-04 entry (stone only), don't blanket-apply to wood.

## letmefeedyou   [anchors: support/QoL (1)]
- LEAVE — behavior-only (player-to-player feeding); registers no items, blocks, or methods. Nothing to weave.

## cubes_without_borders   [anchors: support/client QoL (1)]
- LEAVE — client display mode (borderless fullscreen); zero material surface. Nothing to weave.

## valarian_conquest   [anchors: survival (1)]
- from: valarian_conquest faction armor / knight gear | via: create:mechanical_crafting or native armorsmith station gated on Create parts | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A knight's plate needs machine-forged steel parts — the faction forge station gates on a Create-made iron sheet + andesite alloy so medieval martial gear costs the industrial spine.
- from: valarian_conquest boss/elite loot (signature faction drop — e.g. knight captain's seal or named weapon) | via: loot-seed → boss-key gate | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The faction warlord's insignia unlocks the Create sequenced-assembly recipe for a heavy machine component — conquering a faction yields a rare tech gate, not just armor.
- from: valarian_conquest mercenary hire / citizen trade | via: villager trade → numismatics | to: economy | motif: M-21 | power: mid | tone: ok | verdict: ACCEPT (provisional) | hook: Mercenaries cost Numismatics coin — recruiting a swordsman drains your treasury, making war a real economic expense and tying the faction system into the player-currency loop. (Provisional motif M-21 — surface for review.)
- from: valarian_conquest citizenship / faction banner items | via: recipe sell/bounty | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Faction banners are cosmetic loot, not a distinctive economy node.
REWORK: survival anchor is sound (combat exploration). 1-anchor currently; accepts above add create (×2) + economy (provisional).

## immersivearmorhud   [anchors: client UI/support (1)]
- LEAVE — client-only HUD display (no items, no world effect). Nothing to weave.

## clumps   [anchors: support/performance (1)]
- LEAVE — entity-merging performance mod (no items, no loot, no methods). Nothing to weave.

## comforts   [anchors: survival (1)]
- from: comforts:sleeping_bag_* | via: meadow:felting or create:milling (wool → batting material) | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A portable sleeping bag needs felted alpine batting (meadow:felting → felt layer) or mechanically-milled wool fluff from a Create millstone — survival travel gear costs a small production step rather than raw wool.
- from: comforts:hammock_* | via: ars_nouveau:imbuement or create:item_application | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: theme clash — a hammock is mundane camping gear; imbuement to add a "dream" effect is conceptually strained and would gate a basic survival QoL item behind magic. Red-team: "why does my hammock need a ritual?" — no convincing answer.
REWORK: survival anchor is sound. 1-anchor; the M-12 accept above ties in a light Create production step.

## immersive_paintings   [anchors: support/decoration palette (1)]
- LEAVE — decorative-expression mod; no material with a coherent Create/magic/economy routing. Four item ids (painting/graffiti variants) crafted from vanilla mats; forcing a weave would be busywork.

## yungsapi   [anchors: support/library (1)]
- LEAVE — pure API library (jigsaw/structure tooling for YUNG's mods); no player-facing items, no loot, no methods.

## bits_n_bobs   [anchors: create, survival (2)]
- from: bits_n_bobs tile blocks (andesite_tiles, crimsite_tiles, etc.) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create-stone tile blocks grind back to crushed-stone + XP nugget — the deco tier feeds the material loop (lossy), so decorating with Create stones isn't a dead end.
OK — connections sound (already create + survival at 2 anchors; M-04 accept above reinforces the Create loop without adding a forced new pillar).

## invtweaksemuforipn   [anchors: client QoL/compat (1)]
- LEAVE — InvTweaks keybind-emulation shim for IPN; pure client compat glue, no items, no methods.

## mcwwindows   [anchors: support/decoration palette (1)]
- from: mcwwindows stone parapet / arrow_slit / gothic variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Stone-variant window blocks (parapets, arrow slits) grind lossy back to gravel + XP nugget — the deco palette doesn't orphan Create's stone resource loop.
- from: mcwwindows mosaic glass (colored) | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: crushing mosaic glass to sand/glass shards is M-04-adjacent but results in a material vanilla already provides freely; the recovery loop is too thin to justify.

## occultengineering   [anchors: create, magic (2)]
- from: occultengineering:sterling_silver ingot (c:ingots/sterling_silver) | via: numismatics mint | to: economy | motif: M-08 | power: mid | tone: ok | verdict: REJECT | reason: generic-sellable, non-distinctive — economy de-emphasis. Sterling silver is a Create+Occult processed material; making it a coin stock is generic and adds no structural loop. Stick to the existing create/magic weave which already achieves the 2-pillar goal.
OK — connections sound. Already create + magic (2 pillars); M-19 (create:haunting → spirit output) and M-11 (spirit_solution reagent) are its natural next steps if further depth is wanted, but not needed this pass.

## jei   [anchors: client UI/support (1)]
- LEAVE — recipe-viewer UI; no items, no methods, no loot. Load-bearing for the pack (renders Create processing recipes — EMI dropped for this reason) but not a weave target.

## aileron   [anchors: aeronautics (1)]
- from: aileron Elytra enchantments (new enchant types from loot=yes loot tables) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchantments (e.g. improved glide, burst) require the Enchanting Apparatus — Elytra is an exploration tool, and having the magic tier unlock higher flight performance is a sensible "of course." Red-team: enchantment IDs must be datapack-/registry-exposed for this to work; if they're hardcoded behavior tweaks only, this falls through — flag as verification-required before authoring.
- from: aileron Elytra flight + aeronautics airship parity | via: config tie (no new recipe needed) | to: aeronautics | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif; behavioral parity between Elytra and airships is a design balance note, not a weave. Config-only ties have no recipe-graph visibility and don't advance the loop.
REWORK: aeronautics anchor is sound (personal flight in the logistics pillar). 1-anchor; M-10 accept above adds magic.

== CHUNK COMPLETE ==
