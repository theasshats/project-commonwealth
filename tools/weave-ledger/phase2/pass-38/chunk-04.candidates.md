# Phase 2 candidates — chunk-04

## upgrade_aquatic   [anchors: survival (1)]

Method-pull: `upgrade_aquatic` exports a full food-tag surface (`c:foods/raw_fish`, `cooked_pike`, `cooked_perch`, `cooked_lionfish`, `pie`, `berry`), prismarine rods, and kelp/deco blocks. It already routes wood through `woodworks:sawmill`. Key method candidates: `farmersdelight:cooking` / `create:milling` (fish → processed food), `create:crushing` (coralstone → gravel + XP nugget), `occultism:spirit_fire` / `ars_nouveau:crush` (marine mob drops / prismarine).

Power-read: raw fish = everyday; cooked fish dishes = mid; jellyfish/thrasher mob drops would be mid-tier loot. Coralstone deco = everyday construction material.

- from: upgrade_aquatic cooked/raw fish foods (pike, perch, lionfish) | via: farmersdelight:cooking (cutting board → pan → serving) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: A kinetic slicer (Slice & Dice) portioning lionfish fillets into an FD cooking pot is an obvious, intuitive automation — ocean fish join the food-production web the same way land animals do, and the diet system creates ongoing demand for their unique fish protein.

- from: upgrade_aquatic coralstone deco family | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Coral-limestone is stone — of course a crusher pulverizes it back to gravel and a dust byproduct (calcium-lime aggregate). Feeds the "deco recycles to raw" circuit already established for other stone families, with no tone break: a builder's excess coralstone returns something useful rather than being voided.

- from: upgrade_aquatic raw fish / jellyfish drops | via: ars_nouveau:crush → source_gem dust or ars_nouveau:imbuement with a prismarine component | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Prismarine and aquatic mob essences as arcane infusion reagents — the deep ocean is already coded as mysterious/arcane in vanilla (elder guardian beams). Running ocean-sourced material through an Ars apparatus slots naturally, and prismarine rods have no current sink.

- from: upgrade_aquatic upgrade_aquatic:* kelp storage blocks / berry foods | via: numismatics mint / bare sell | to: economy | motif: M-09 (RETIRED) | power: everyday | tone: ok | verdict: REJECT | reason: Bare sell link — M-09 is retired; "cooked fish is sellable" is the ambient endpoint of the loop, not a weave. Demand for fish comes from diet pressure (M-12 already covers the production edge); the economy link is real but ambient, not a gating edge.

- from: upgrade_aquatic driftwood/riverwood wood | via: create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: driftwood already routes through `woodworks:sawmill` (established inbound weave per dossier). Adding a redundant Create-cutting path for the same wood family adds noise without advancing the loop — the sawmill covers the role.

REWORK check: upgrade_aquatic has 1 anchor (survival) with the dossier candidate for economy as "bare sell" (M-09, correctly noted as WEAK in the dossier). The dossier's second candidate `create:cutting / crushing` is marked WEAK/M-04 and the dossier itself marks it secondary. No existing connections to audit beyond the woodworks sawmill inbound. OK — the woodworks sawmill inbound is the sensible existing weave; it stands.

---

## blockui   [anchors: support (library / UI API) (1)]

Zero blocks, zero items, zero loot. Pure UI framework — a hard dependency of MineColonies. No material surface, no processing methods, no loot tables. Nothing to route through any method.

- LEAVE — genuine zero-content code library; provides XML window/callback API only. No items, no loot, no mechanics of its own.

---

## buildguide   [anchors: support (QoL/client) (1)]

Zero blocks, zero items, zero loot. Client-only render overlay (ghost-block shapes). No world interaction, no materials.

- LEAVE — genuine zero-content client-side render utility. No items, no loot, no weave surface.

---

## drones   [anchors: aeronautics (1)]

Method-pull: `drones` assembles personal quadcopters from blocks at a multiblock controller. Key items: `wood_rotor` (entry tier), `iron_rotor` (mid), `ion_thruster` (high tier), `controller`, `frame`, `pocket_drone`, `drill`. The mod has loot=yes but no registered recipe types — its crafting is via vanilla table. No existing inbound weaves.

Power-read: wood_rotor = everyday entry drone; iron_rotor = mid; ion_thruster = endgame miniaturised FE drive. The controller and frame are everyday structural. Deep sequenced-assembly makes sense only at ion_thruster tier.

- from: drones:iron_rotor + drones:controller (mid-tier drone parts) | via: create:mechanical_crafting (a precision-assembled rotor array) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A drone rotor is a precision rotary component — it should be built on the Create mechanical-crafting table, not punched from a crafting grid. The kinetic tech spine building its own aerial assistant is thematically coherent and consistent with the pack's "Create gates the tech path" design.

- from: drones:ion_thruster (endgame thruster) | via: create:sequenced_assembly (multi-stage: wind coil → energise → assemble thruster housing) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: An ion thruster is the highest-fidelity component in the drone tree — it belongs behind a sequenced fabrication chain that includes a Create-New-Age energizing step (electric winding → ionisation stage). Mechanically demanding, thematically rigorous, scales depth correctly with the part's power.

- from: drones:wood_rotor (entry tier) | via: create:sequenced_assembly | to: create | motif: M-06 | power: everyday | tone: clash | verdict: REJECT | reason: Over-gating basics. A wooden rotor is the entry point; demanding a sequenced chain for the cheapest tier violates the "depth scales with power, never gate basics behind complex recipes" rule. Wood rotors stay on the crafting table.

- from: drones:pocket_drone (equipped drone item) | via: bare sell / numismatics | to: economy | motif: M-09 (RETIRED) | power: mid | tone: ok | verdict: REJECT | reason: M-09 retired. "Drones are sellable" is ambient. An economy link here would require demand-gating (M-26/M-29/M-30) — the drone is a personal tool, not a consumption commodity that closes a loop, so no valid economy motif applies cleanly without forcing.

- from: drones:drill block (ability module) | via: create:deploying (deploy a Create drill head onto the drone frame as an ability upgrade) | to: create | motif: M-20 | power: mid | tone: ok | verdict: ACCEPT | hook: Deploying a Create precision drill head onto a drone frame upgrades it with mining assistance — the drone's ability system is literally designed for this: "drill block = assists mining." Deploy-application is the clean, light single-step form (M-20) at mid tier, not a full sequenced chain.

REWORK check: drones has 1 anchor (aeronautics). The dossier's M-09 "luxury good → coin" candidate is correctly tagged WEAK, and M-09 is retired — consistent. The M-05/M-06 candidates from the dossier map directly to what I've accepted. OK — the dossier's assessment is sound; the three ACCEPT weaves above fill the 2nd anchor (Create) via method-pull.

---

## mowziesmobs   [anchors: survival (1)]

Method-pull: mowziesmobs outputs boss-drop artifacts: `ice_crystal` (Frostmaw), `sol_visage` (Barako), `wrought helm / earthrend_gauntlet` (Wroughtnaut), `elokosa_paw` (moon-wolf), blowgun + darts, `captured_grottol`. loot=yes, biome-modifier=1. No registered recipe types. The Grottol is a rare ore-eating mob that emits gems on kill.

Power-read: `ice_crystal` = endgame (boss artifact); `sol_visage` = endgame; `wrought helm` = endgame; `elokosa_paw` = mid-to-endgame (moon wolf claw); blowgun + darts = mid; captured_grottol = rare curiosity / possible reagent.

- from: mowziesmobs:ice_crystal (Frostmaw boss drop) | via: occultism:ritual / spirit_fire (transmute into an icy arcane essence or spirit-infused reagent) | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: The Frostmaw is a frozen colossus; its ice crystal is literally crystallised supernatural cold. Transmuting it through Occultism spirit-fire into a glacial spirit-reagent reads as cosmically obvious — ice myth + spirit-world is a natural pairing, and it sinks an endgame boss drop into the magic production spine.

- from: mowziesmobs boss artifacts (ice_crystal / earthrend_gauntlet / sol_visage) | via: create:sequenced_assembly (as a required keystone input — the boss drop rides as a raw-material gate for a high-tier Create component) | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: The pack's design explicitly says "complex Create tech unlocks via boss drops" (CLAUDE.md §3). Mowzie's bosses are mid-to-late-game — their unique un-craftable drops are exactly the right tier for this gate. A player who hasn't fought the Wroughtnaut cannot skip to the advanced Create assembly that needs a wrought-metal key.

- from: mowziesmobs:elokosa_paw (moon-wolf claw) | via: ars_nouveau:enchanting_apparatus or imbuement (lunar-themed attunement, as the Elokosa is tied to moon phases) | to: magic | motif: M-22 | power: mid | tone: ok | verdict: ACCEPT | hook: The Elokosa is explicitly moon-phase-tied (its paw variants cycle through moon icons: crescent/gibbous/full/half). A moon-wolf claw as a lunar reagent in Ars apparatus fits beautifully — it's the obvious hook for a lunar attunement step, and the drop is already moon-event-contextualised.

- from: mowziesmobs:earthrend_gauntlet (Wroughtnaut axe) | via: ars_nouveau:imbuement (infuse into a magic combat catalyst) | to: magic | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: Mob-drop reagent sink: the earthrend gauntlet's seismic-shockwave power is arcane. Routing it through arcane infusion converts a raw-strength artifact into a magic component — two production routes (combat → magic) interlock, which is exactly the cross-route dependency the pack targets.

- from: mowziesmobs economy bounty (coin paid for boss kills) | via: numismatics bounty board | to: economy | motif: M-08 | power: endgame | tone: ok | verdict: REJECT | reason: "Pay coin bounties for kills" is a demand-gating candidate that sounds like M-34 (combat-route supply) or M-08 (player-minted coin) but in practice would be an NPC-coin faucet (coins appear from outside the player economy when you kill a boss). M-14 (bounty → coin) is cut. M-34 is about the boss-drop being farmed and traded — that already applies via the M-15/M-02/M-11 accepted weaves above (player A kills, player B buys the drop). No additional motif needed.

- from: mowziesmobs:captured_grottol (rare ore-eating mob artifact) | via: create:crushing (grottol essence → gem dust / Create ore-doubling byproduct) | to: create | motif: M-03 | power: mid | tone: clash | verdict: REJECT | reason: The captured_grottol reads more as a novelty/curiosity item than a processing feedstock. Forcing it through a Create crusher as a "gem doubler" is thematically incoherent — it's a living captured creature, not raw ore — and the tone clashes with the mod's hand-crafted mythic vibe. LEAVE this one as ambient combat flavor.

REWORK check: mowziesmobs has 1 anchor (survival). Dossier's top-line M-05/M-06 candidate (boss-drop as Create keystone) maps to my M-15 ACCEPT. M-11/M-02 magic candidates map to my M-11 + M-02 ACCEPTs. Dossier correctly dismissed the economy/coin candidate. OK — dossier alignment is sound; the four ACCEPT weaves above establish strong multi-system grounding (survival + Create + magic).

---

## rottencreatures   [anchors: survival (1)]

Method-pull: `rottencreatures` outputs themed undead drops: `frozen_rotten_flesh`, `magma_rotten_flesh`, `corrupted_wart`, decorative mob heads, `treasure_chest`. loot=yes, 20 blocks, 30 items, no registered recipe types. Key method candidates: `occultism:spirit_fire` / `ars_nouveau:crush` (transmute themed flesh) → magic reagent; `create:haunting` (rotten flesh through soul-fire → spirit product); thematic element-coding (frozen/magma variants align with cold and fire magic schools).

Power-read: `frozen_rotten_flesh` / `magma_rotten_flesh` = everyday mob-kill drop (common once you encounter these variants); `corrupted_wart` = mid-tier (rarer, special mob). Treasure chest = one-off exploration loot. Mob heads = decorative, everyday.

- from: rottencreatures:frozen_rotten_flesh | via: occultism:spirit_fire (transmute into a cold-aligned spirit reagent — e.g. frostbound spirit dust) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Flesh from a zombie frozen to death in powder snow carries a cold imprint — Occultism spirit-fire reads its residual essence and transmutes it. The thematic pairing is immediately legible: cold-elemental zombie → ice-spirit reagent. Light single-step, appropriate for an everyday drop.

- from: rottencreatures:magma_rotten_flesh | via: occultism:spirit_fire (fire-aligned spirit reagent — e.g. ember spirit essence) | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: Magma zombies spawn in heat; their flesh is laced with magmatic energy. Spirit-fire transmutes it into an ember reagent for Occultism rituals — the fire-magic connection is obvious and requires no explanation to a player.

- from: rottencreatures:corrupted_wart | via: ars_nouveau:imbuement (arcane corruption as an imbuement catalyst — the wart is already "corrupted", i.e. tainted arcane matter) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A wart grown on undead-swamp zombies that carry blindness and poison is already coded as arcane-contaminated. Running it through an Ars infusion apparatus as a corruption-aligned catalyst reads naturally — the corruption IS the arcane property.

- from: rottencreatures mob-variant drops (frozen/magma flesh) | via: create:haunting (soul-fire conversion — rotten flesh → soul-infused byproduct) | to: create | motif: M-19 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's haunting uses soul-fire to transmute organic matter into spectral outputs. Themed rotten flesh — particularly frozen flesh from cold-death zombies — passing through haunting to yield a soul-inflected material (e.g. soul-shred) is a coherent Create→occult bridge. The cold-death theme maps directly: these undead perished by an elemental force, leaving a soul residue.

- from: rottencreatures:corrupted_wart | via: create:crushing | to: create | motif: M-02 | power: everyday | tone: clash | verdict: REJECT | reason: A corrupted wart running through a crusher is tonally wrong — the plant-like wart has arcane contamination, not mineral structure. Crushing it into gravel-equivalent is incoherent when its actual use is as an arcane reagent (M-10 above). Route through imbuement instead.

- from: rottencreatures mob heads (decorative) | via: any processing chain | to: create or magic | motif: n/a | power: everyday | tone: clash | verdict: REJECT | reason: Mob heads are cosmetic placement items; forcing them through a processing chain serves no logical purpose (you can't mill a zombie head into flour). No-motif, forced edge — skip.

REWORK check: rottencreatures has 1 anchor (survival). The dossier's two candidate routes (magic via spirit_fire/crush, Create via haunting/crushing) are exactly what I've accepted — M-11 (spirit_fire) twice, M-10 (imbuement), M-19 (haunting). The dossier did not distinguish the elemental thematics of each flesh type, which the above does. OK — dossier assessment is sound; the accepted weaves above are sound and add specificity.

---

## moogs_structures   [anchors: support — library/API (1)]

Zero blocks, zero items, zero loot. Pure worldgen framework/API library consumed by dependent mods (e.g. Moog's Voyager Structures). No standalone gameplay surface.

- LEAVE — genuine zero-content worldgen-framework library. No items, no loot tables, no mechanics of its own. Any weave target is the dependent structures mod, not this library.

---

## afk-sleep-1.3.2   [anchors: support (QoL) (1)]

Zero blocks, zero items, zero loot. Pure server-side behavior mod adjusting the sleep quorum calculation to exclude AFK players.

- LEAVE — genuine zero-content server-behavior QoL utility. Nothing to route material through; no weave surface.

---

## sliceanddice   [anchors: Create, survival (2)]

Already 2-anchor. Method-pull for any new link: `sliceanddice` provides the Slicer (auto-runs `farmersdelight:cutting`), Sprinkler (fluid distribution over crops), and Fertilizer (crop growth acceleration). The Sprinkler notably accepts any piped fluid, not just water.

Power-read: Slicer = mid-tier Create automation; Sprinkler = mid; Fertilizer = everyday. The Sprinkler's "any fluid" intake is an underexplored seam.

New link candidates:

- from: sliceanddice:sprinkler accepting any piped fluid | via: Sprinkler + Ars Nouveau source-fluid (if Ars exposes a fluid) or an Occultism-processed liquid | to: magic | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: The Sprinkler was designed to accept modded fluids. Piping an Ars-infused or Occultism-produced liquid through it to accelerate crop growth or trigger a unique crop-interaction crosses two production routes (magic fluid → Create-automated farming machine) — a cross-route dependency where the magic specialist provides the premium input for the Create kitchen. Nobody is self-sufficient: the Create farmer needs the magic specialist's fluid.

- from: sliceanddice:fertilizer (crop-growth accelerator) | via: minecolonies composting (colony produces fertilizer cheaper / in bulk, feeding the Slice & Dice automated kitchen) | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: A colony's composter produces fertilizer as a cheaper bulk route than hand-crafting it — the Create-automated slicer/kitchen then consumes it at scale. Colony produces → Create consumes: a clean colony-route dependency that keeps the kitchen loop running without a Create player being self-sufficient on compost.

REWORK: sliceanddice already has 2 sound anchors (Create as its spine, survival as its FD food-layer bridge — the dossier correctly identifies it as a M-12 bridge by design). The existing connections are coherent. OK — connections sound.

---

## toomanypaintings   [anchors: support (decoration palette / client UI) (1)]

Zero blocks, zero items, zero loot. Pure painting-selection GUI expansion — adds 50+ painting variants with a placement picker. No material surface whatsoever.

- LEAVE — genuine zero-content decoration UI mod; its "content" is visual/cultural (painting art), not material. No items, no methods to route through, no loot.

---

## trek-b0.6.1.1   [anchors: survival (1)]

Method-pull: trek has `loot=yes` (chest loot tables in its 150+ vanilla-block structures) but zero registry items and zero registered recipe types. The only weave hook is loot-table seeding.

Power-read: The structures themselves span all tiers (ruins = everyday exploration; fortresses/pyramids = mid to endgame). Loot tables in Trek structures are the delivery mechanism.

- from: trek structure chest loot tables | via: loot-seed (seed weave-relevant drops — Numismatics coin, magic reagents, Create components — into Trek's structure loot tables as contextual rewards) | to: economy + magic + create (varies by structure type) | motif: M-15 (boss-key / progression key as exploration reward) | power: mid | tone: ok | verdict: ACCEPT | hook: Exploring a Trek fortress and finding an Ars Nouveau glyph scroll or a Numismatics coin purse in the chest is exactly how exploration-pressure (survival) feeds into progression and economy. The structure acts as an adventure destination; the loot seeds the player into a production route. Thematically vanilla-faithful — no tone clash.

- from: trek ocean/ship structures (themed) | via: loot-seed (seed upgrade_aquatic fish/seafood, prismarine rods, aquatic magic reagents — cross-linking two aquatic content mods by exploration reward) | to: survival | motif: M-12 (processing-chain pull — an aquatic exploration yield feeds the food/processing web) | power: everyday | tone: ok | verdict: ACCEPT | hook: Finding a cache of exotic aquatic ingredients (cooked lionfish, prismarine rods) in a shipwreck-style Trek structure creates a direct loop: explore → harvest aquatic loot → cook/process. Elevation of upgrade_aquatic fish into exploration rewards closes a loop between the two aquatic mods.

REWORK check: trek has 1 anchor (survival). Dossier says "leave — loot-table seed only a data tweak, not a mod weave, defer." The PHASE2-BRIEFING.md is explicit: "do NOT LEAVE a loot-bearing structure mod just because it has no recipes — tag via: loot-seed." The dossier's LEAVE guidance was too conservative; the briefing overrules it. The two loot-seed candidates above are real Phase-3 datapack edits, not forced edges. REWORK: dossier's LEAVE recommendation should be revised to ACCEPT(loot-seed) per the briefing's explicit instruction.

---

## accessories_compat_layer   [anchors: support (library/compat shim) (1)]

Zero blocks, zero items, zero loot. Pure mixin-bridge translating Curios/Trinkets API calls to Accessories. No gameplay surface of its own.

- LEAVE — genuine zero-content compat shim. No items, no loot, no mechanics. Weave targets are the host mods (Curios/Trinkets-consuming mods that equip accessories via this bridge).

---

## s_a_b   [anchors: Create, aeronautics (2)]

Already 2-anchor. Method-pull for review and any new link: `s_a_b` outputs armored plating blocks (light/steel/double/hard steel, 16 colors, 387 blocks) built via `create:compacting` + `create:mixing` (inbound weaves confirmed). 388 items, loot=yes.

Power-read: lightsteelblock = mid-tier (regular steel); hardsteelblock = endgame (multi-step Create chain implied). The 16-color family is a deco variant set, but the armor tiers have mechanical significance (blast resistance tiers for CBC combat).

New link candidates:

- from: s_a_b:hardsteelblock (endgame armor plating) | via: create:sequenced_assembly (multi-stage fabrication: steel ingot → rolled plate → hardened via heat treatment → assembled into hard armor) | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: Hard steel plating is the highest-tier blast-resistant material — it earns a deep Create fabrication chain (GregTech-style: roll → heat-treat → assemble). The resulting block gates high-tier ship armor behind real Create-spine investment, which deepens the aeronautics build milestone correctly.

- from: s_a_b armor plating as structural hull material | via: Aeronautics construction recipes (structural block for ship frame/hull) | to: aeronautics | motif: M-23 | power: mid/endgame | tone: ok | verdict: ACCEPT | hook: Steel armor blocks were literally designed for this — Big Cannons combat ships and Aeronautics airframes need blast-resistant hulls. M-23 (structural alloy → airframe/hull) is the exact motif: fabricated armor plate as a required hull ingredient, making airframe construction cost real Create-chain material. The pairing is the canonical use case.

REWORK: s_a_b already has 2 anchors (Create inbound via compacting/mixing + aeronautics role). The existing connections are coherent and correctly identified. The M-06 sequenced-assembly candidate for hardsteelblock deepens the existing Create anchor rather than adding a new system — this is an "optional depth" addition on the existing connection rather than a new system anchor. OK — connections sound; the M-23 loot-seed/construction seam is the primary new contribution.

---

## resourcefulconfig   [anchors: support (library/API) (1)]

Zero blocks, zero items, zero loot. Cross-platform config framework — a hard dependency of Resourceful-family mods.

- LEAVE — genuine zero-content config library. No items, no methods, no weave surface.

---

## pingwheel   [anchors: support (QoL / multiplayer) (1)]

Zero blocks, zero items, zero loot. Keybind-driven team ping markers — transient world markers shared over the server.

- LEAVE — genuine zero-content multiplayer QoL utility. No items, no loot, no mechanics to weave.

---

## dtterralith   [anchors: survival (worldgen flavor — compat bridge) (1)]

Method-pull: `dtterralith` outputs unique biome-specific seeds and leaves (amethyst_seed, cedar_seed, jacaranda_seed, kapok_seed, maple_seed, giga_spruce_seed) and 104 blocks of biome-specific Dynamic Trees leaf/sapling types. loot=yes. The seeds produce logs on growth (downstream vanilla/DT mechanics).

Power-read: dtterralith seeds = everyday farming/gathering items; biome-specific woods = everyday building material; exotic species (amethyst tree, giga spruce) = mid-tier rarity.

- from: dtterralith:amethyst_seed / amethyst_sapling (Terralith amethyst tree) | via: create:milling (grind amethyst leaves/drops → fine amethyst dust for use as an attunement catalyst or Ars reagent) | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: An amethyst-crystal tree is already a magical object — Terralith's amethyst groves are dream-like. Milling amethyst-tree leaf/wood byproducts into a fine crystalline dust that serves as a weak Ars attunement catalyst reads naturally: the amethyst genome is in the wood. This gives an otherwise-aesthetic biome tree a functional processing output.

- from: dtterralith biome-specific seeds (cedar_seed, maple_seed, kapok_seed, etc.) | via: create:milling (each seed mills to a distinct wood-flour or oil-meal, feeding the cooking web with biome-regional ingredients) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Regional seeds milling into distinctive cooking inputs (maple seeds → maple flour, kapok → fiber meal) tie biome exploration to food-crafting variety. A Terralith-biome you settle shapes what specialty flour you can produce, giving the food web regional flavor without requiring hand-tagging (Create milling is generic over seeds).

- from: dtterralith exotic log species (jacaranda, cedar, maple, ebony) | via: create:cutting or woodworks:sawmill (already the established pattern — but these are DT-specific logs not yet in the sawmill registry) | to: survival / create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: dtterralith logs ARE vanilla wood types under DT's dynamic mechanism — they yield standard plank/log outputs through vanilla mechanics and already route via woodworks:sawmill where registered. Adding a redundant Create-cutting pass for each DT species would create recipe noise without advancing the loop. The wood output is the ambient endpoint; no bespoke Create edge needed per the LEAVE guidance for "vanilla wood."

REWORK check: dtterralith has 1 anchor (survival). Dossier recommends LEAVE: "log output already reaches Create/cooking webs as vanilla wood." The amethyst tree and regional seed candidates above use the specific non-vanilla surface that makes them distinct (amethyst crystalline drops, biome-regional seed milling), which is different from generic log output. The LEAVE recommendation in the dossier is appropriate for the *generic log* edge but too broad for the seed/amethyst surface. The two ACCEPT candidates target the non-vanilla residue specifically.

---

## inventoryprofilesnext   [anchors: client-only QoL (support) (1)]

Zero blocks, zero items, zero loot. Client-side inventory sort/lock/dump UI. No materials, no world interaction.

- LEAVE — genuine zero-content client-only QoL utility. No items, no loot, no methods. (Note: the pack already ships a custom KubeJS texture override to suppress IPN's empty-slot arrow, per CLAUDE.md — that's a config/texture fix, not a weave.)

---

## betteroceanmonuments   [anchors: survival (1)]

Method-pull: `betteroceanmonuments` adds `loot=yes` (chest loot in the expanded monument rooms) but zero registry items and zero registered recipe types. A structure overhaul with no items of its own — the weave hook is exclusively loot-table seeding, same pattern as trek.

Power-read: Ocean monuments are mid-to-endgame dungeons — prismarine, guardians, elder guardian. Loot found there should reflect that tier (mid to high value). Thematically: aquatic, arcane, ancient.

- from: betteroceanmonuments chest loot tables | via: loot-seed (seed upgrade_aquatic exotic fish, Ars Nouveau water-affinity glyphs/scrolls, prismarine-based crafting components, Numismatics coin as dungeon hoard) | to: economy + magic + survival | motif: M-15 | power: mid | tone: ok | verdict: ACCEPT | hook: The YUNG's overhaul adds proper rooms and chests — they should contain things worth finding. Seeding Ars water glyphs (the deep ocean is arcane), upgrade_aquatic materials, and a coin cache into the monument's chest loot converts an exploration dungeon into a progression reward that pulls on three systems simultaneously. "Of course the ancient ocean monument contains aquatic magic."

- from: betteroceanmonuments elder-guardian fight (enhanced monument) | via: loot-seed on the elder guardian's drop (seed a unique aquatic boss reagent or prismarine-arc component as a rare drop) | to: magic + create | motif: M-02 | power: endgame | tone: ok | verdict: ACCEPT | hook: The elder guardian is the monument's boss. Adding a unique aquatic-essence drop (elder prismarine shard, deep-current crystal) as a rare loot-seeded item gives the monument fight a reason beyond the Conduit — it feeds both a magic reagent sink (M-02) and potentially a Create/Aeronautics coastal-expedition component. Exploration pressure → rare drops → production route.

REWORK check: betteroceanmonuments has 1 anchor (survival). Dossier recommends LEAVE ("a loot-table seed is a datapack edit, not a mod weave — defer"). Same situation as trek — the PHASE2-BRIEFING.md explicitly overrules LEAVE for loot-bearing structure mods. Both ACCEPT candidates are valid loot-seed proposals. REWORK: dossier's LEAVE recommendation is too conservative per briefing §Delivery mechanisms.

---

## dragonlib   [anchors: support (library/API) (1)]

Zero blocks (1 dev/test artifact block that is not player-facing), zero real items, zero loot. Architectury-based shared-code library for MrJulsen's mods.

- LEAVE — genuine zero-content developer library. The lone `dragonlib:dragon` block is a dev/test artifact, not a player-facing item. No weave surface.

---

## ribbits   [anchors: survival (1)]

Method-pull: `ribbits` registers 14 blocks (toadstool family, mossy_oak_planks, swamp_lantern, giant_lilypad) and 21 items including `maraca`, ribbit spawn eggs, and swamp deco. loot=yes. Its trade system runs on Amethyst Shards (not emeralds) — this is the primary economy hook. Five professions including a sorcerer (magic tie) and fisherman (food tie).

Power-read: Ribbit village goods = everyday to mid; Amethyst Shards = mid-tier currency. Sorcerer's buffs = mid-tier service. Toadstool blocks = everyday deco. The maraca = a unique social instrument (everyday QoL).

- from: ribbits Amethyst Shard trade economy | via: Numismatics mint bridge (KubeJS trade override: shard↔coin exchange rate set by players at a Numismatics mint; Create-milled amethyst dust → coin) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Ribbits already run their own Amethyst Shard economy — it's an in-world mini-economy waiting to be connected to the main trade loop. Bridging the shard→coin rate through Numismatics (minted by a Create-processing step: amethyst → dust → pressed coin) ties the frog-village market into the player economy. Players mint amethyst coinage that Ribbit merchants accept, creating a regional swamp trade node.

- from: ribbits:brown_toadstool / red_toadstool / toadstool_stem (mushroom structural blocks) | via: farmersdelight:cooking or extradelight:melting_pot (toadstool → mushroom stew ingredient, wild toadstool soup) | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Toadstool blocks from Ribbit villages are mushrooms — they obviously go in a pot. Running swamp toadstools through a cooking chain (FD or ExtraDelight) as a wild-foraged ingredient adds them to the food web: survive in swamp biomes → harvest toadstools → cook wild mushroom stew. Everyday, one-step, thematically grounded.

- from: ribbits:ribbit_sorcerer (sorcerer profession grants temporary buffs) | via: ars_nouveau:enchanting_apparatus or similar (the sorcerer's buff as a service powered by Ars source — a magic service-for-hire from a swamp village entity) | to: magic | motif: M-33 | power: mid | tone: ok | verdict: ACCEPT | hook: The Ribbit sorcerer is literally a magic-service NPC — players can trade with it for buffs (a magical service). Tying its buff-grant to Ars Nouveau source consumption (the sorcerer draws on Source to cast) integrates the swamp village into the magic spine: the sorcerer is an ambient source consumer, and players who trade with it indirectly create demand for magic production. Service-for-hire (M-33): the sorcerer performs magical labor; payment is the trade loop.

- from: ribbits mossy_oak_planks woodset | via: create:cutting or woodworks:sawmill | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Mossy oak is a vanilla-style wood variant — its outputs would be mossy oak planks/slabs through sawmill, which is generic wood-recycling. The dossier correctly tagged this WEAK (M-04 generic woods). The wood surface here is not distinctive enough to warrant a dedicated weave edge; vanilla sawmill pulls it in automatically once registered. Not a meaningful loop-advancer.

REWORK check: ribbits has 1 anchor (survival). Dossier candidate for economy (M-08 coin bridge) maps to my ACCEPT. Dossier candidate for Create (M-04 toadstool wood) maps to my REJECT. New additions: M-12 toadstool food and M-33 sorcerer-as-magic-service not present in the dossier. OK — the accepted weaves add meaningful cross-system connections beyond the dossier's view.

---

== CHUNK COMPLETE ==
