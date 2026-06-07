# Phase 2 candidates — chunk-13 (context-fed)

## trading_floor   [anchors: Create, economy (2)]
OK — existing rows sufficient. M-08 (belt→depot→coin), M-29 (cross-route bridge), M-05 (gate recipe on Create parts), M-28 (colony worker staffs depot), M-31 (bulk goods→aeronautics), M-33 (enchant-service labor), M-37 (knowledge-gate via book trades) cover the full surface. The NPC-faucet risk on the emerald arbitrage path is already correctly flagged (rejected in existing rows). No genuine gap remains.

## rechiseled   [anchors: support (decoration palette) → Create via rechiseledcreate (2)]
OK — existing rows sufficient. M-04 via Mechanical Chisel (Create pillar) and M-28 colony building-material requests (economy) cover the 2nd anchor. Rejected rows correctly gate out structural/aeronautics misreadings (chiseled blocks are cosmetic, not load-bearing M-23 material).

## irons_lib   [anchors: support/library (1)]
LEAVE — pure API/library (transmog table and player statue are cosmetic; no material surface to weave). Existing rows correctly REJECT all proposed routes. Confirmed LEAVE.

## platform   [anchors: support/library (1)]
LEAVE — zero items/blocks; pure developer-infrastructure library. No content surface.

## jeed   [anchors: client UI support (1)]
LEAVE — effect-documentation UI only; its two registered recipe-types are JEI display providers, not processable methods. No content surface.

## create   [anchors: Create (1 — but IS the hub)]
LEAVE — Create is the method library, not a weave target. The dossier and existing rows explicitly confirm: author edges that weave INTO Create, never edges that "consume Create itself". No new rows.

## minecolonies_tweaks   [anchors: support (QoL + tag harmonization) (1)]
OK — existing rows sufficient. The core value is the c:crops/* and c:foods/* tag injection enabling food-web weaves elsewhere (M-12 milling ACCEPT), and the inventory/copyscroll gated on Create brass (M-05 ACCEPT). The two-line summary: this mod is the *enabler* node, not a weavable item node of its own — and the accepted M-12 + M-05 rows capture the actual content hooks.

## kobolds   [anchors: economy, survival (2)]
- NEW | from: kobolds:kobold_wither_skull | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: the skull of a pirate captain kobold carries a wither charge — spirit-fire transmutes it into a rarer occult essence than the common skull, giving mid-tier dungeon raiding a magic-side payoff distinct from the ordinary skull reagent
- CHALLENGE | from: kobolds:kobold_wither_skull | via: recipe gating | to: create | motif: M-15 | verdict: REJECT | hook: the existing M-15 ACCEPT row (1 vote) treats the wither skull as a boss-key gate for complex Create tech; kobold pirate captains are not boss-tier threats — they're mid-difficulty structure mobs, so gating Create tech behind them violates M-15's "boss drop" requirement; the wither skull is better consumed as a rarer M-11 reagent (above) than as a tech gate
- NEW | from: kobolds engineer redstone trades (redstone goods from kobold:engineer) | via: config tie — KubeJS recipe that requires kobold-trade-sourced redstone dust as a specific input in a Create/TFMG circuit recipe | to: create | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: the kobold engineer's curated redstone supply becomes a named cross-route input in a Create or TFMG wiring recipe — a regular dungeon-trade run keeps the automated factory stocked, linking the underground-civilization economy node to the tech production spine

## createaddition   [anchors: Create (1)]
- NEW | from: createaddition:seed_oil / bioethanol (liquid fuel) | via: createaddition:liquid_blaze_burner (the blaze-equivalent block that burns liquid fuel to superheat Create basins) | to: survival | motif: M-26 | power: everyday | tone: ok | verdict: ACCEPT | hook: the liquid blaze burner consumes seed oil or bioethanol as a continuous fuel, making the agricultural surplus (oilseeds → pressed oil → burner) a permanent demand sink that closes the farm→factory loop; farming the land literally keeps the machines hot
- CHALLENGE | from: createaddition:biomass / biomass_pellet | via: createaddition:liquid_burning | to: economy | motif: M-26 | verdict: REJECT | hook: the biomass liquid-burning ACCEPT rows (multiple, low-vote) treat burning biomass as a distinct M-26 entry from the seed-oil rows — it is not; biomass pellets are an intermediate in the same seed→oil→fuel chain already captured by the accepted M-26 seed-oil rows; a separate biomass row double-counts the single agricultural-fuel consumption sink

## followersteleporttoo   [anchors: support/QoL (1)]
LEAVE — behavior-only patch (pet teleport); zero items/blocks/methods; no content surface to weave.

## moreculling   [anchors: support/performance (1)]
LEAVE — client-side render-culling optimization; zero items/blocks; no content surface.

## ldlib2   [anchors: support/library (1)]
LEAVE — developer-infrastructure library (UI/rendering/sync for dependents); its two registered "blocks" are dev/test entries, not player content. No weavable surface.

## create_enchantment_industry   [anchors: Create (1)]
- NEW | from: create_enchantment_industry:blaze_enchanter (consumes blaze rods / Nether materials) | via: worldgen/scarcity — Nether blaze rods are a regional Nether-bound resource; the Blaze Enchanter's fuel dependency gates the industrial enchanting tier on Nether access | to: survival | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: you cannot run the Blaze Enchanter without blaze fuel — and blazes are a Nether-regional resource, not a simple overworld farm; the industrial enchanting tier is gated on Nether reach, which is itself a survival-pressure milestone, stitching the enchanting economy to the scarcity foundation
- NEW | from: create_enchantment_industry:experience_bucket (liquid XP fluid) | via: createaddition:liquid_burning (burn liquid XP for FE as a high-density exotic fuel) | to: create | motif: M-32 | power: mid | tone: ok | verdict: ACCEPT | hook: oversaturated liquid XP (from a mob-farm running faster than the Blaze Enchanter can consume) can be fed to a liquid burner as a high-density FE fuel — the enchanting factory's waste heat powers the electric grid; a byproduct→input loop inside the Create/CEI spine that rewards running both systems together
- CHALLENGE | from: create_enchantment_industry liquid XP | via: ars_nouveau:imbuement / forbidden_arcanus infusion | to: magic | motif: M-10 | verdict: REJECT | hook: the existing high-vote M-10 ACCEPT row (liquid XP → ars_nouveau:imbuement, 16–19 votes) and the irons_spellbooks cauldron row (8 votes) already cover the liquid-XP-as-arcane-fuel seam from two angles; a third variant routing the same fluid through a different arcane method adds no new pillar connection — it subdivides the same weave without broadening the loop; the pack needs one clean liquid-XP→magic link, not three competing instances

## imfast   [anchors: support/QoL (1)]
LEAVE — server-side movement-validation patch; zero items/blocks; enables aeronautics speed but is not itself weavable.

## modelfix   [anchors: support/bugfix (1)]
LEAVE — client-side rendering fix; zero items/blocks; no content surface.

## jei   [anchors: client UI support (1)]
LEAVE — recipe viewer; zero items/blocks; load-bearing for Create recipe visibility (CLAUDE.md: JEI not EMI) but not a weavable surface.

## openpartiesandclaims   [anchors: support/server protection (1)]
LEAVE — chunk-claim + party protection framework; zero items/blocks/methods; existing rows correctly REJECT M-30 and M-28 misreadings. No weavable content.

## upgrade_aquatic   [anchors: survival (1)]
- NEW | from: upgrade_aquatic:flare_jellyfish drop / bioluminescent material | via: ars_nouveau:imbuement (under M-22 lunar event condition) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: flare jellyfish are bioluminescent ocean creatures; during a lunar event (Enhanced Celestials full/blood moon) their luminescent gel drops at higher rate and feeds an Ars imbuement as a celestial-light reagent — the ocean specialist who harvests at the right moon phase holds a time-locked magic input that nobody inland can source
- NEW | from: upgrade_aquatic raw fish (c:foods/raw_pike, raw_perch, raw_lionfish) | via: a KubeJS recipe cross-route dependency — a specific ars_nouveau or occultism ritual requires a raw aquatic fish as a non-trivial ingredient (protein component, "life from the deep water") | to: magic | motif: M-29 | power: everyday | tone: ok | verdict: ACCEPT | hook: one Ars imbuement or Occultism ritual consumes a raw pike or lionfish as a reagent (fresh-caught creature as a life-energy component), making the ocean-biome specialist a mandatory supplier for the magic route — the fish aren't just food, they're a ritual material the landlocked mage must trade for
- CHALLENGE | from: upgrade_aquatic:raw_lionfish / cooked_lionfish | via: occultism:spirit_fire | to: magic | motif: M-11 | verdict: REJECT | hook: the existing M-11 ACCEPT row (1 vote, "spirit-fire transmutes toxic flesh into occult essence") is plausible but redundant against the stronger M-02 ACCEPT row that seeds lionfish as a loot/mob-drop magic reagent; both rows route lionfish into magic via the same pillar link — keep M-02 (loot-seed / mob-drop reagent) as the canonical form and drop the M-11 spirit-fire variant, which doesn't distinguish itself meaningfully; the M-29 cross-route row above (requiring raw fish in a ritual) is the sharper version of the same impulse

## createmetalwork   [anchors: Create (1)]
- NEW | from: createmetalwork-processed magic-mod metals (molten occultism silver → cast ingot / crushed_raw_materials/quicksilver) | via: KubeJS cross-route recipe — a specific Ars Nouveau or Occultism ritual requires a createmetalwork-cast form of the magic metal as a mandatory input (not raw ore — the cast form, forcing the foundry step) | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the occultist needs not raw silver but *cast* silver — poured in a Create basin from the molten flow — forcing the magic specialist to either run a foundry or trade with someone who does; the metallurgy step becomes a cross-route prerequisite, not just a yield bonus
- CHALLENGE | from: createmetalwork:molten_brass_bucket | via: recipe (create:compacting → aeronautics control-surface fitting) | to: aeronautics | motif: M-24 | verdict: REJECT | hook: the existing split-vote M-24 row (1 ACCEPT, 1 REJECT) for molten brass → cast gearings for airship control surfaces should resolve ACCEPT, not hang in split — cast brass gearings are the natural drivetrain-side material for steering mechanisms; molten brass is already the intermediate for Create's own brass parts (cogwheels, casings), so the aeronautics control-surface read is coherent and thematically tight; the split REJECT reason ("brass is already Create material — redundant") misunderstands M-24: it precisely routes a Create-produced cast form into the aeronautics drivetrain as a required step, which is the motif's intent

## voicechat   [anchors: support (1)]
LEAVE — proximity voice comms infrastructure; zero items/blocks; no weavable content.

== CHUNK COMPLETE ==
