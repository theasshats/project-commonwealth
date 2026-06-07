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





