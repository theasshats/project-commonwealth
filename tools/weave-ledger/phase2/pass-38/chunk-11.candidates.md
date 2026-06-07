# Phase 2 candidates — chunk-11

## cold_sweat   [anchors: survival (1)]

**Existing connections review:** 1 anchor (survival). The dossier lists M-09 as a candidate — that motif is retired; ignore it. The `create:filling` inbound edge for waterskins exists but is just a recipe inbound, not a system anchor.

- from: cold_sweat:hearth (fuel-burning multiblock) | via: create:filling / native-method gating | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth and Boiler are fuel-burning climate machines that beg for Create brass casings/pipe inputs — gating the Hearth on Create-processed brass piping or routing Create steam/lava as a piped fuel source makes surviving hostile biomes cost real tech progression.

- from: cold_sweat insulating materials (goat_fur, chameleon_molt, hoglin_hide) | via: farmersdelight:cutting or create:milling | to: create/survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Running pelts through a Create mill or FD cutting board shreds them into insulation fiber — a processing step that turns mob-hunting into both food (for naturalist/FD mods) and a supply chain for the sewing table, linking the survival pressure directly to the production spine.

- from: cold_sweat:goat_fur / chameleon_molt (exotic-biome mob drops) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: A chameleon's molt or frosted goat fur carries inherent elemental affinity (cold/fire); imbuement refines it into a thermal reagent — the mage's temperature problem becomes a magic-material source.

- from: cold_sweat (general gear loop) | via: numismatics sell link | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired; bare "sell cold-resistant gear for coin" is the ambient loop endpoint, not a weave. Demand-gating (M-26) would be viable if a consumption mechanic existed, but Cold Sweat uses sewing-table durability, not a recurring burn; no accepted motif cleanly fits a pure sell link here.

- from: cold_sweat:hearth (boiler/icebox) | via: M-26 consumption sink | to: survival/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: The Hearth burns fuel (wood, coal, lava) continuously to maintain safe temperatures — a reliable consumption sink whose upkeep keeps the fuel-production loop turning; a player running a heated workshop or heated trading post is a recurring fuel buyer.

OK — the dossier's surviving candidates are sound; the M-09 entry was correctly weak/retired and is rejected above.

## kleeslabs   [anchors: support/QoL (1)]

Zero content surface — no items, no blocks, no loot tables, pure slab-break behavior. There is genuinely nothing to route through any method.

- LEAVE — pure behavior QoL (single-slab-break interaction); registers no items, no blocks, no loot; no content surface to weave.

## sky_whale_ship   [anchors: survival (1)]

Zero jar-registered items/blocks — content is worldgen/structure data. The dossier correctly identifies loot tables as the weave surface. The dossier's M-09 "economy via numismatics" candidate is retired; the M-05 "aeronautics via loot" candidate is the real opportunity, but M-05 (native-method gating) isn't quite right for a loot-seed route — the correct delivery is `via: loot-seed`.

- from: sky_whale_ship loot tables (loot chests on whale backs) | via: loot-seed | to: aeronautics | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Sky whales are only reachable by airship — seeding their chests with Aeronautics build components (control surfaces, engine parts, compressed air canisters) makes them a flagship destination that rewards the aeronautics investment, turning an exploration set-piece into a supply run that feeds the logistics arm.

- from: sky_whale_ship loot tables | via: loot-seed | to: survival (danger/exploration) | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: A combat specialist who can reach (and clear) hostile whale-back mobs farms rare drops that non-combat players need — the whale is both a danger zone and a supply source, completing M-34's dual role of boss/danger as a trade-feeding production route.

- from: sky_whale_ship loot tables → numismatics coin | via: loot-seed (M-08) | to: economy | motif: M-08 | power: mid | tone: ok | verdict: ACCEPT | hook: Seeding whale chests with a small quantity of pre-minted coin (or a rare metal players can press into coin) gives the economy a scarce, distance-gated injection point — you only get it if you can fly there, so the coin supply is region-/skill-gated without being an NPC faucet.

- from: sky_whale_ship loot (luxury rarities) | via: numismatics "sellable" bare link | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired. Bare "whale loot is sellable for coin" is the ambient endpoint; accepted above is the demand-gating form (loot-seed with a scarce rare metal → M-08 player mint), which is the correct weave.

- from: sky_whale_ship (vanilla-only blocks; no block namespace) | via: create:crushing as deco recycle | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Sky whale structures are vanilla blocks (no foreign block ids to recycle); the M-04 route only applies when the structure mod registers its own block namespace. Forced edge.

REWORK: dossier's "M-05 native-method gating" label on the aeronautics candidate is wrong — M-05 requires routing through a mod's own machine. Correct motif is M-15 (boss-key/loot unlock) delivered via loot-seed, as filed above.

## notenoughcrashes   [anchors: support/stability (1)]

Pure crash-recovery utility. Zero items, blocks, loot. Genuine zero-content code mod.

- LEAVE — pure stability/crash-recovery mod; registers no items, no blocks, no loot; zero content surface.

## naturalist   [anchors: survival (1)]

Rich content surface: venison, bushmeat, antler, glow_goop, shellstone/froglass deco, loot=yes. The dossier has M-09 (retired), M-04, and M-12 candidates, and notes antler as a potential M-02 reagent.

- from: naturalist:venison / naturalist:bushmeat (raw meat drops) | via: farmersdelight:cutting + farmersdelight:cooking | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Venison and bushmeat routed through FD cutting board (butchery step) then cooking pot slots Naturalist's hunting into the broader food-processing chain — a hunter supplies raw cuts to a cook who produces diet-variety foods, separating the hunting and cooking specializations.

- from: naturalist:antler (bone-analog drop) | via: ars_nouveau:imbuement or occultism:spirit_fire | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: A deer antler is a natural arcane material — imbuement converts it into a verdant/earth-elemental reagent, giving the woodland hunter a trade good the magic specialist can't self-source without hunting.

- from: naturalist:glow_goop (firefly drop; bioluminescent material) | via: ars_nouveau:imbuement or occultism:ritual | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: Firefly glow_goop is the canonical "captured light" material — imbuement into a light-affinity source shard or as a ritual fuel for summoning light-aligned spirits ties ambient firefly hunting to the magic production route.

- from: naturalist shellstone / froglass deco blocks | via: create:crushing (lossy recycle) | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: Shellstone and froglass are decorative blocks; crushing them back to sand/gravel + an XP nugget (lossy, value-destructive) gives the deco set a Create outlet and keeps the material from being a dead end if you overbuild.

- from: naturalist:venison / bushmeat (cooked) | via: numismatics sell as luxury meat | to: economy | motif: M-09 (RETIRED) | power: everyday | tone: — | verdict: REJECT | reason: M-09 retired. Meat's demand is the ambient diet-pressure loop (M-26 consumption via eating); bare "sell venison for coin" is not a demand-gating weave. A cook buying raw cuts from a hunter is the player-economy form, but that's emergent trade, not a motif edge to author.

REWORK: dossier lists M-04 as WEAK for shellstone deco recycle — upgrading to ACCEPT above; the deco set is real registered blocks (not vanilla-only) so M-04 applies cleanly. The M-02 antler note ("leave unless a magic mod wants it") is promoted to ACCEPT with imbuement routing.

## oceansdelight   [anchors: survival (1)]

Already routes through farmersdelight:cooking and farmersdelight:cutting (inbound weaves exist). Both candidates in the dossier are M-09/M-12 — M-09 is retired; M-12 is the right framing.

- from: oceansdelight raw drops (guardian flesh, tentacles, fugu) | via: farmersdelight:cutting + create:milling/pressing | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Guardian tentacles and elder-guardian flesh are rich marine ingredients; routing them through Create milling (dried salt-flakes, fish paste) or pressing (tentacle ink) before FD cooking deepens the processing chain — a coast-base player mills and presses raw ocean drops into intermediate ingredients that a cooking specialist assembles into high-value dishes, splitting ocean harvesting from culinary production.

- from: oceansdelight:fugu_slice / elder_guardian_roll (high-effort, effect-granting dishes) | via: M-26 consumption sink | to: survival/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Effect-granting seafood (fugu's poison-risk, guardian soup's strength) is consumed to solve survival pressure (boss fights, cold biome exploration) — perishable high-value dishes are spent against danger, keeping demand for coast-fishing production live.

- from: oceansdelight ocean dishes as luxury goods | via: numismatics trade | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired. The coast-to-inland trade is real emergent economy but not a motif edge to author; the demand-gating form is M-26 (dishes consumed against pressure), already accepted above.

- from: oceansdelight:guardian_soup block (a pot of soup, like FD's feast blocks) | via: farmersdelight:food_serving + extradelight:feast | to: survival | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Guardian soup is a block-form feast — wiring its serving through extradelight:feast mechanics lets a tavern/ship galley serve multiple players at once, reinforcing the co-op feeding loop without adding a new weave type.

OK — existing FD inbound connections are sound; what's missing is the Create processing step upstream of FD cooking, filed above.

## particlerain   [anchors: support/client (1)]

Pure client rendering — no items, no blocks, no loot, no gameplay mechanics. Zero content surface.

- LEAVE — pure client atmospheric visual mod (particle-based weather rendering); registers no items, no blocks, no loot; no gameplay surface to weave.

## followersteleporttoo   [anchors: support/QoL (1)]

Pure behavior patch — no items, no blocks, no loot. Genuine zero-content mod.

- LEAVE — pure QoL behavior mod (pet teleport fix); registers no items, no blocks, no loot; zero content surface.

## tidal-towns-1.3.4   [anchors: survival/exploration (1)]

Structure-only worldgen datapack; loot=no (digest), no registered items/blocks. Built from vanilla blocks — no namespace to weave through. The dossier already says leave, and the jar confirms 0 blocks, 0 items, no loot.

One genuine surface: being a floating ocean settlement, it's a natural *destination* for aeronautics sea travel. However it registers no loot tables to seed, and the villages themselves are vanilla-inhabitant NPCs with vanilla trade tables — no custom content to hook. A thematic note is worth logging for the design record, but the delivery would require authoring custom loot/structure templates, which is a build task not a weave.

- from: tidal-towns ocean village structures (exploration destination) | via: loot-seed | to: aeronautics | motif: M-15 | power: mid | tone: ok | verdict: REJECT | reason: The mod registers no loot tables (digest loot=no) and uses vanilla blocks throughout. A loot-seed weave here requires authoring a new structure loot table from scratch — that is structure authoring, not a recipe/loot seeding weave against an existing table. No surface to weave against without first creating content this mod doesn't ship.

- LEAVE — structure datapack using vanilla blocks only, loot=no; no item/block namespace and no custom loot table to seed; weaving would require authoring structure content this mod doesn't provide.

## lithostitched   [anchors: support/library (1)]

Pure worldgen library/API. No items, no blocks, no loot. Zero gameplay content surface.

- LEAVE — worldgen library (biome injectors / density functions); registers no items, no blocks, no loot; zero content surface to weave.

## everycomp   [anchors: support/decoration (1)]

Runtime block generator — outputs into host mods' namespaces (Create, Macaw's, Blockus). Registers no items under its own namespace worth weaving. Content belongs to the host mods. The dossier's assessment is correct.

- from: everycomp-generated wood-variant blocks | via: woodworks:sawmill / create:cutting | to: create | motif: M-04 | power: everyday | tone: ok | verdict: REJECT | reason: Any sawmill/cutting-board route is attributed to the HOST mod (Create, Woodworks, Macaw's), not to everycomp. Everycomp's generated blocks already inherit the host's recipes; giving everycomp a separate weave edge would double-count what the host already owns. Weaving belongs on the host mods.

- LEAVE — cross-mod deco palette generator; its outputs live under host-mod namespaces; no own content to weave from.

## betteranimationscollection   [anchors: support/visual (1)]

Client-side model/animation replacer. No items, no blocks, no loot. Zero content surface.

- LEAVE — pure client visual mod (animated mob models); registers no items, no blocks, no loot; zero content surface to weave.

## trashslot   [anchors: support/QoL (1)]

Client UI inventory trash slot. No items, no blocks, no loot. Zero content surface.

- LEAVE — pure client QoL UI (inventory trash slot); registers no items, no blocks, no loot; zero content surface to weave.

## endrem   [anchors: survival (1)]

Rich surface: 16 themed eye items (loot=yes, blocks=1, items=20), progression gate to the End. The dossier has M-11/M-02 and M-06 candidates. Both survive scrutiny — the key constraint is preserving exploration intent (craft paths must stay costly).

- from: endrem:undead_eye (undead-themed; sources from zombie/skeleton/wither territory) | via: occultism:ritual | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: A stuck player who can't find the undead_eye in a loot chest can transmute it through an Occultism ritual using wither rose + bone meal + a charged soul crystal — the transmutation is costly enough to stay a last resort but gives the magic specialist a unique path to End access no pure-loot player has.

- from: endrem:magical_eye / endrem:corrupted_eye (arcane-themed) | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: The magical_eye and corrupted_eye have obvious arcane affinity; routing their craft through the Enchanting Apparatus (with source gem + thematic reagents as inputs) makes the magic specialist the canonical provider of these two eyes — a locked production path for End access items that forces a magic-trade partner.

- from: endrem:guardian_eye (guardian-themed) | via: create:sequenced_assembly | to: create | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: One or two eyes (guardian, elder-themed) are assemble-able through a Create sequenced-assembly chain using prismarine shards + compressed materials + a guardian scale — End access partly gated on Create depth keeps the tech spine relevant without trivializing exploration (limit to at most 2 of 12 required eyes via craft, the rest stay loot-only).

- from: endrem eyes generally | via: create:sequenced_assembly (many eyes) | to: create | motif: M-06 | power: endgame | tone: clash | verdict: REJECT | reason: Making most/many eyes craftable via Create defeats endrem's explicit exploration-gate design — the whole point is hunting 12 of 16 distinct sources. One or two craftable eyes (accepted above) are a safety valve; more than that erodes the progression intent. Depth scales with power, and endrem's power is "gate to the End" — keep craft paths scarce.

- from: endrem eyes as magic-catalyst sinks | via: ars_nouveau:imbuement (all 16) | to: magic | motif: M-10 | power: endgame | tone: clash | verdict: REJECT | reason: Making all 16 eyes routes through the Enchanting Apparatus cheapens their exploration provenance — each eye is meant to be hunted, not crafted en masse. Only specific arcane-themed eyes (accepted above as magical/corrupted) survive the theme-fit test; the rest have non-arcane themes (nether, cold, guardian) that clash with an imbuement route.

OK — the dossier's two candidate clusters survive; the sequenced-assembly candidate is accepted with a critical scope limit (≤2 eyes, not a wholesale route).

## createfood   [anchors: survival, create (2)]

Already 2 anchors. Dossier's main 2nd-anchor candidate is M-09 (retired). Need to evaluate whether the existing 2-anchor claim is sound and find the real demand-gating economy link.

**Existing connections review:** survival (diet/nutrition) + create (processing chain) — both anchors are sound. The Create connection is deep: createfood AUTHORS recipes onto create:milling, mixing, pressing, compacting, deploying — it IS a Create processing chain. Survival anchor via food/nutrition is clear.

REWORK: dossier's "economy via numismatics" (M-09) candidate is retired — reject it.

- from: createfood finished dishes (high-effort, multi-step Create chain) | via: M-26 consumption sink | to: survival/economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Pizzas, pastries, and ice cream are consumed against hunger/diet-variety pressure (Cold Sweat warm-meal bonus; diet nutrition groups) — the Create chain output is perpetually spent against survival needs, ensuring the production loop keeps turning without a coin faucet.

- from: createfood dish processing chain (large c:tags consumer including raw_meats, doughs, cheese) | via: create:milling / farmersdelight:cooking | to: create | motif: M-12 | power: mid | tone: ok | verdict: ACCEPT | hook: Createfood already IS M-12 at scale (2424 c:tags consumed through Create methods) — reinforcing that it's the terminus of the food processing web (raw crop → mill → mix → FD cook → finished dish) is worth noting as the most complete M-12 instantiation in the pack.

- from: createfood finished dishes (pizza, cake, ice cream) | via: numismatics sell | to: economy | motif: M-09 (RETIRED) | power: — | tone: — | verdict: REJECT | reason: M-09 retired. The economy link is real (cook specialists sell processed food) but the weave form must be demand-gating — M-26 (consumption against pressure) is the correct authority here, accepted above.

- from: createfood:apple_jam_block / createfood:apple_jam_bottle (aging candidate) | via: extradelight:drying_rack or vinery ferment | to: survival/economy | motif: M-35 | power: mid | tone: ok | verdict: ACCEPT | hook: Jam and preserve items are natural aging/maturation candidates — letting them mature on an ExtraDelight drying rack or in a Vinery ferment vessel before becoming a premium trade good adds the value-adding time axis to the food chain, distinguishing basic jam from aged preserve and creating a food-aging specialist role.

OK — 2-anchor connections (survival + create) are both sound and deep. The missing edge is M-26 and M-35, not M-09.















