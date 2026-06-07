# Phase 2 candidates — chunk-11

## create   [anchors: create (1)]
- LEAVE — Create IS the method library and the pack's tech spine; it is the hub every other mod weaves INTO, not a recipient mod. Its dossier explicitly notes "do not author edges that consume Create itself." No weave needed and none coherent.
- OK — connections sound (by design: Create is the universal pull-target, not a second-pillar candidate)

## mcwfences   [anchors: support/decoration (1)]
- from: mcwfences metal fence variants | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: ok | verdict: ACCEPT | hook: a salvaged metal fence crushes to iron/copper nuggets + xp — the standard deco-recycle loop, coherent for any metal block
- from: mcwfences:acorn/bastion/cathedral metal fence → build ingredient for colony walls (stylecolonies/MineColonies) | via: recipe (bench crafting) | to: survival | motif: no-motif | power: everyday | tone: ok | verdict: REJECT | reason: no-motif — the link is "metal fence used in a schematic," but that's a passive placement, not a routable method; no motif supports a crafting-only gate on a deco block to a colony system
- REWORK: dossier labels only M-04 as "WEAK" — the metal-fence crushing is actually the canonical use (it's the standard M-04 application), so its weakness note should be read as "low priority to author, not actually incoherent." The WEAK label is cosmetic; the candidate is sound.

## supermartijn642configlib   [anchors: support/library (1)]
- LEAVE — pure config API library, zero blocks/items/behavior. Genuine zero-content surface.

## modulargolems   [anchors: create (1)]
- from: modulargolems golem bodies (mid-tier iron/copper, high-tier boss metals) | via: modulargolems:golem_assemble | to: survival | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: mob-drop metals (Cataclysm cursium, Ice&Fire dragonsteel) are required body materials — combat drops feed the golemancy tier, turning kills into constructs
- from: modulargolems golem-core upgrade slot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: imbueing a blank golem core with Source Gems attuning it grants a magic-cast upgrade slot — golems as arcane constructs is a natural pairing with Ars Nouveau
- from: modulargolems upgrade item (blank_upgrade) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: REJECT | reason: prefer M-10 through Ars imbuement — the spirit_fire transmutation can produce a magic-attuned upgrade, but that's a direct competitor to the Ars path above; having both is redundant; the Ars path is thematically stronger (Ars is golem-adjacent lore-wise) and the occultism path would fragment the magic reagent story
- REWORK: existing 2nd-anchor candidates in the dossier list Create as anchor-1, but the mod already has create:crushing/mechanical_crafting/sequenced_assembly as its inbound weave methods — those are the existing Create ties. The dossier correctly notes survival (boss metals, M-02) and magic (M-10/M-11) as the candidates; both of the accepted rows above are the obvious Phase 3 actions.

## trading_floor   [anchors: create, economy (2)]
- OK — connections sound. Already at 2 pillars (Create + economy) by its nature as a Create-gated automated villager-trade depot. No new weave needed; the dossier correctly notes it as a natural M-08 keystone (processed goods → depot → emeralds/Numismatics value).

## stylecolonies   [anchors: support/decoration (1)]
- LEAVE — pure MineColonies blueprint pack, zero own blocks/items. The Steampunk style passively consumes Create blocks at build time, which is already the strongest tie possible without registry items. No coherent new weave surface.

## born_in_chaos_v1   [anchors: survival (1)]
- from: born_in_chaos_v1:dark_metal_deposit | via: create:crushing | to: create | motif: M-03 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal ore run through the Create crusher doubles the yield and produces experience nuggets — the survival danger loop feeds the Create production spine
- from: born_in_chaos_v1:dark_metal (ingot/pile) | via: bountiful + numismatics payout | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: dark metal is scarce and tied to dangerous undead — a bounty board that pays coin for dark metal drops converts monster pressure into trade currency, exactly the scarcity→economy link
- from: born_in_chaos_v1:bundle_of_bones | via: occultism:spirit_fire | to: magic | motif: M-11 | power: everyday | tone: ok | verdict: ACCEPT | hook: a bundle of cursed bones is a thematically perfect necromantic reagent — spirit-fire transmutes it into a spirit intermediate, tying the spooky-gothic BiC aesthetic directly to Occultism
- from: born_in_chaos_v1:soul_saber / pumpkin_staff (boss drops) | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: endgame | tone: ok | verdict: REJECT | reason: boss weapons as imbuement inputs is awkward — they are signature combat items, not raw reagents; absorbing them in a magic ritual feels destructive of the item's identity. A loot-seed or bounty approach is more coherent than melting the boss's sword into a source gem.
- from: born_in_chaos_v1 structures (seasonal pumpkin/graveyard) | via: loot-seed (datapack edit) | to: economy | motif: M-14 | power: mid | tone: ok | verdict: REJECT | reason: loot=yes but born_in_chaos adds mob/structure loot, not dedicated chest loot tables — the bounty-board path (already accepted above) covers the economy link more cleanly; a separate loot-seed is redundant and would require knowing which specific loot tables BIC ships (not fully verified in the dossier)
- REWORK: dossier already identifies M-03 (STRONG) and M-02/M-14 (MED) as candidates. All three accepted rows are expansions of those — M-11 is new and warranted by the spooky-gothic vibe. The M-10 boss weapon row above is correctly rejected.

## accelerateddecay   [anchors: support (1)]
- LEAVE — pure performance behavior mod (leaf-decay timer); zero items, blocks, or material flow. Genuine zero-content surface.

## supplementaries   [anchors: create, survival (2)]
- OK — connections sound. Already at 2 pillars with deep cross-weaving (haunting/mixing/splashing inbound from Create, Farmer's Delight cutting, flax crop, ash/soap). The dossier notes no further weave is needed; that assessment is correct.
- (latent: M-09 via jars-as-sellable-goods or flags-as-shop-signs is possible but unnecessary given the existing web depth)

## revelationary   [anchors: support (1)]
- LEAVE — pure progression-gating library/API. No blocks, items, or material flow. Acts as an enabler for native-method gating (M-05) by dependent mods but has no weave surface of its own.

## notenoughcrashes   [anchors: support (1)]
- LEAVE — stability/crash-recovery utility, zero gameplay content. Genuine zero-surface mod.

## fusion   [anchors: support/client (1)]
- LEAVE — rendering/texture library. Zero blocks, items, or game-logic surface. Genuine zero-content code library.

## betteroceanmonuments   [anchors: survival (1)]
- from: betteroceanmonuments monument chests | via: loot-seed | to: economy | motif: M-14 | power: mid | tone: ok | verdict: ACCEPT | hook: seeding a Numismatics coin drop (spur/cog) or a tradeable reagent into the monument's new chest loot tables turns an aquatic exploration milestone into an economic reward — exploration drives the market
- from: betteroceanmonuments monument chests | via: loot-seed | to: magic | motif: M-02 | power: mid | tone: ok | verdict: ACCEPT | hook: adding a rare Ars/Occultism reagent (e.g. source gem fragment or ritual component) to monument loot makes ocean-depth exploration a magic-progression driver — the aquatic theme maps to water-affiliated spells/rituals
- from: betteroceanmonuments monument chests | via: loot-seed | to: create | motif: M-15 | power: endgame | tone: ok | verdict: REJECT | reason: a Create boss-key unlock (M-15) requires a boss *fight* as the thematic gate; the ocean monument is a dungeon exploration challenge, not a boss drop in the intended sense. Using it for M-15 would dilute the boss-key signal. The M-14 coin seed is the right economy link; M-15 is reserved for boss kills.

## travelersbackpack   [anchors: survival (1)]
- from: travelersbackpack:blank_upgrade | via: create:sequenced_assembly | to: create | motif: M-06 | power: mid | tone: ok | verdict: ACCEPT | hook: the mid-tier tank/crafting upgrade is assembled on a sequenced-assembly line — integrating a fluid-handling component into Create's production chain makes sense for an adventure mod that lives alongside engineering
- from: travelersbackpack themed packs (dragon, netherite, enderman variants) | via: create:mechanical_crafting | to: create | motif: M-20 | power: endgame | tone: ok | verdict: REJECT | reason: the themed packs are cosmetic/status items; gating them behind mechanical crafting adds depth only to aesthetics, not to any system the loop needs. One Create tie (the upgrade module via M-06) is sufficient; stacking another on visual variants is over-weaving deco.
- from: travelersbackpack (fluid tanks, portable logistics) | via: thematic co-use with Aeronautics | to: aeronautics | motif: no-motif | power: mid | tone: ok | verdict: REJECT | reason: no-motif — the aeronautics co-use is a flavor narrative ("explorers need backpacks on airships") not a routable method connection; no motif covers passive equipment co-use. Dossier correctly flagged this as WEAK.

## edf-remastered-5.0-beta4   [anchors: survival (1)]
- LEAVE — pure behavior datapack (Ender Dragon difficulty rewrite). No items, no drop-table changes, no material flow. The dossier explicitly confirms it does not add rewards. Genuine zero-content surface.

## miningspeedtooltips   [anchors: support (1)]
- LEAVE — client UI tooltip tweak. Zero items, blocks, game logic. Genuine zero-content surface.

## netmusic   [anchors: support/flavor (1)]
- LEAVE — cosmetic audio mod; already touches TLM altar method for music_cd. No material surface to route through any system method; any further weave would be contrived. Correctly assessed as leave in the dossier.

## beachparty   [anchors: survival (1)]
- from: beachparty cocktails (coconut_cocktail, honey_cocktail, melon_cocktail, cocoa_cocktail) | via: numismatics sell / bountiful trade | to: economy | motif: M-09 | power: everyday | tone: ok | verdict: ACCEPT | hook: a finished tropical cocktail is a sellable luxury good — beachside tavern stock, carried by traders, priced in coin; food→economy is the canonical M-09 route
- from: beachparty:mini_fridge_freezing (ice production) | via: create:mixing or create:compacting as cold input | to: create | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: the Mini Fridge produces vanilla ice blocks, not a distinct Create-compatible intermediate; routing vanilla ice through Create mixing is already possible without any weave — there's no exclusive ingredient the fridge supplies that Create couldn't source otherwise. The tie is mechanically redundant.
- from: beachparty cocktails | via: farmersdelight:cooking or extradelight:vat | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: REJECT | reason: cocktails are already produced at the Palm Bar (beachparty:palm_bar_mixing); routing them through an additional FD/ExtraDelight step is an unnecessary double-processing layer for a simple luxury drink. The M-09 sell-good path is the right weave; adding a second production path complicates without deepening.

## cloth_config   [anchors: support (1)]
- LEAVE — pure config-screen library, zero items/blocks/gameplay. Genuine zero-content surface.

## byzantine   [anchors: survival (1)]
- LEAVE — pure MineColonies schematic style pack. Zero own blocks/items. Same class as stylecolonies: no independent weave surface.

== CHUNK COMPLETE ==
