# Phase 2 candidates — chunk-03

## sounds   [anchors: support/polish (1)]
- LEAVE — pure client-side audio overlay; 0 items, 0 recipe-types, no materials. Genuine zero-content-surface library.

## resourcefulconfig   [anchors: support/library (1)]
- LEAVE — config-framework API; 0 items, 0 recipe-types, no gameplay surface. Genuine zero-content library.

## gravestone   [anchors: survival (1)]
- from: gravestone:gravestone (loot=yes) | via: loot-seed | to: economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: The loot table entry is for the gravestone block itself (dropped with Silk Touch), not a dungeon loot table — there is no chest loot to seed into. gravestone:obituary is a generated death log, not a dungeon drop. No structure/dungeon context from which to seed combat-supply or boss-key drops. Forcing a loot-seed here is contrived; the mod's only material surface is its own death-event items which have no weave-coherent use.
- LEAVE — death-QoL utility. Two items both tied to the death event with no material role outside it; no coherent 2nd anchor available.

## wits   [anchors: support/debug (1)]
- LEAVE — zero items, zero recipe-types, pure server-side /wits command. Genuine zero-content-surface utility.

## astikorcartsredux   [anchors: survival (1)]
- from: astikorcartsredux cart (plow/reaper/seed-drill implement tier) | via: recipe (crafting) | to: create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: A working plow blade needs a Create iron sheet — the farm-cart tier is gated on the tech spine, making the smith's output visible in every field.
- from: astikorcartsredux supply cart (bulk hauling) | via: config / emergent | to: aeronautics | motif: M-31 | power: everyday | tone: ok | verdict: REJECT | reason: M-31 requires that trading at scale physically *requires* the aeronautics/logistics arm; supply carts are pre-aeronautics land transport and could *substitute* for it over short distances. The link would describe the same distribution pressure but carts and aeronautics overlap as alternatives, making it a competitor framing, not a dependency. No method to author this; no clean route.
- REWORK: dossier candidate "Create via create:crushing — gate implements on iron sheets" is slightly mis-stated (M-05 gating via the mod's own recipe requiring Create-processed input is correct; it's not a crushing step on the cart itself). The ACCEPT above corrects this — it's a crafting-recipe gate requiring `create:iron_sheet` as an input for the metal-implement tier (plow/reaper blades). OK otherwise, 1-anchor floor.

## craftingtweaks   [anchors: support/QoL (1)]
- LEAVE — crafting-grid button overlay; 0 items, 0 recipe-types, no material surface. Genuine zero-content library.

## chat_heads   [anchors: support/QoL (1)]
- LEAVE — client-side chat UI rendering; 0 items, 0 recipe-types. Genuine zero-content-surface client mod.

## toomanypaintings   [anchors: support/decoration (1)]
- LEAVE — pure decoration; 0 items in the jar (the painting entity has no item beyond vanilla's), 0 recipe-types. The dossier confirms no material to route.

## aeronautics_dyeable_components   [anchors: aeronautics (1)]
- from: dyed levitite / dyed tires | via: recipe (crafting — dye + base component) | to: economy | motif: M-29 | power: everyday | tone: ok | verdict: REJECT | reason: M-29 requires a cross-route *dependency* where one production route needs input from another, forcing specialists to trade. Dyed levitite/tires are cosmetic variants made with a vanilla dye in a crafting table — this is a one-step cosmetic permutation, not a dependency forcing distinct specializations. No cross-route dependency here; REJECT.
- from: dyed levitite / dyed tires | via: recipe (create:mixing — combine dye + levitite in mixer) | to: create | motif: M-20 | power: everyday | tone: ok | verdict: REJECT | reason: M-20 (deploy-application upgrade) applies a woven *part* onto a base to *upgrade* it — dye coloring is cosmetic, not an upgrade in any functional sense. Rerouting to create:mixing is possible but gilding for a cosmetic step; no real depth gained.
- LEAVE — cosmetic dye-variant skin layer for aeronautics components; no functional progression surface to weave. Aeronautics anchor stands.

## alcohol_industry   [anchors: Create, survival (2)]
- OK — connections sound. Already Create + survival (2-anchor). The dossier's own 3rd-anchor suggestion invokes M-09 (retired "luxury → coin"), which is explicitly rejected under the player-run ruling. Real check below.
- from: beer/vodka/whiskey/tequila (drinkable buffs) | via: emergent trade (status-effect consumable demanded by combat/exploration specialists) | to: economy | motif: M-26 | power: mid | tone: ok | verdict: ACCEPT | hook: Spirits give real combat/saturation buffs — a distillery that specializes in them becomes the supplier for raid groups who can't brew their own, closing the consumption→demand loop without any NPC vendor.
- from: alcohol_base fluid (intermediate) | via: create:mixing → external process | to: create | motif: M-32 | power: everyday | tone: ok | verdict: REJECT | reason: The base is already the *input* to the boiler (inbound Create weave established); using it as a byproduct/input in a *different* process would require naming that process. No specific method in the palette clearly wants alcohol base as a feedstock aside from the boiler. The connection already exists via create:filling/mixing in the established web; M-32 byproduct loop needs a distinct consuming process, not a re-statement of the existing one.
- from: bottled spirits | via: alcohol_industry:alcohol_boiling | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Arcane infusion of spirits into a magic reagent has no thematic grounding in the pack's magic (Ars/Iron's/Occultism); liquor as a magic input feels arbitrary. Tone clash — distillery ≠ arcane laboratory.
- REWORK: dossier's 3rd-anchor candidate cites M-09 (luxury→coin) which is retired — the ACCEPT above (M-26 consumption sink via combat-buff demand) replaces it correctly.

## ferritecore   [anchors: support/perf (1)]
- LEAVE — memory-optimization runtime mod; 0 items, 0 recipe-types. Genuine zero-content-surface perf library.

## dummmmmmy   [anchors: support/QoL (1)]
- LEAVE — single target-dummy entity for damage testing; no material outputs, no recipe-types, nothing to route into a production system without fabrication.

## puzzleslib   [anchors: support/library (1)]
- LEAVE — pure code library/API; 0 items, 0 recipe-types. Genuine zero-content-surface library.

## cmparallelpipes   [anchors: Create (1)]
- from: cmparallelpipes:pipe_wrench | via: recipe (crafting) | to: economy | motif: M-33 | power: everyday | tone: ok | verdict: REJECT | reason: M-33 is service-for-hire labor (a specialist performs work on another player's materials). The pipe wrench is a personal tool for your own plumbing layout — it does not represent a labor service offered to others. No service-economy weave here.
- from: cmparallelpipes:pipe_wrench | via: recipe | to: create | motif: M-05 | power: everyday | tone: ok | verdict: REJECT | reason: M-05 is for a mod's flagship item built *in its own machine* gated on Create parts. The pipe_wrench is crafted in a crafting table and is already native to Create plumbing — it *is* the Create QoL tool; no gating on a Create machine is needed or coherent. The mod is already a Create anchor.
- LEAVE — Create fluid-plumbing QoL tool; supports the Create spine directly; no coherent second anchor without fabrication.

## sablecollisiondamage   [anchors: support/aeronautics-adjacent (1)]
- LEAVE — behavior-only addon (ship collision damage rules); 0 items, 0 recipe-types. No material surface; genuine zero-content mod.

## opacpvp   [anchors: support/PvP-rules (1)]
- LEAVE — PvP-rules command addon; 0 items, 0 recipe-types. Genuine zero-content-surface support mod.

## steves_lava_chicken_music_disc   [anchors: support/flavor (1)]
- LEAVE — single joke music disc; loot=yes but it's a hand-placed disc item, not a dungeon/structure loot table. No structure context to seed. Forcing a coin/recipe edge is noise.

## appleskin   [anchors: support/HUD (1)]
- LEAVE — food HUD overlay; 0 items, 0 recipe-types. Genuine zero-content-surface client mod.

## modelfix   [anchors: support/perf (1)]
- LEAVE — client-side rendering bugfix; 0 items, 0 recipe-types. Genuine zero-content-surface client fix.

## openpartiesandclaims   [anchors: support/territory (1)]
- from: chunk-claim system | via: config tie / emergent design | to: economy | motif: M-30 | power: everyday | tone: ok | verdict: REJECT | reason: M-30 (regional-scarcity gate) requires a *recipe input* that is region-locked by ore-gen. OPAC's claims gate *territory*, not a craftable material — the link is thematic ("claims enforce regional scarcity") but has no authoring path via any method in the palette. No recipe-type, no item output, no method to route through.
- LEAVE — server protection/territory framework; 0 items, 0 recipe-types; no material surface to weave. Support anchor stands.

== CHUNK COMPLETE ==
