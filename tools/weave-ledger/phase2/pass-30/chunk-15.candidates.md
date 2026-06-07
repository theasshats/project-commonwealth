# Phase 2 candidates — chunk-15

## dtterralith   [anchors: survival (1)]
- LEAVE — pure worldgen-compat bridge (Dynamic Trees × Terralith); its log/sapling outputs are already vanilla-material items that reach Create milling and cooking webs without any bespoke edge. Forcing a new connection to a compat adapter rather than to the content mods it serves would be arbitrary. Dossier's own recommendation: leave.

---

## netmusic   [anchors: support/QoL (1)]
- LEAVE — cosmetic audio only; no material I/O. Already has one recipe crossing through the TLM altar for the music_cd; that's the full extent of its content surface. No further weave is coherent.

---

## mushroomquest   [anchors: survival (1)]

- from: edible mushroom caps (common/rare) | via: farmersdelight:cooking + cutting | to: survival | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: foraged mushrooms go straight into the cooking pot — the fungi join the food-processing chain and contribute to diet variety pressure
- from: rare/mythical mushroom caps (effect-bearing) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: a toxic or mythical mushroom transmuted through spirit-fire becomes a magic reagent — the deadly ones are worth more as inputs than as food
- from: rare mushroom drops (loot tables, structures) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: rare mythical caps drop from Mushroom Island structures; a forager-specialist supplies them to magic/cooking players who can't get to the island — combat-route supply for a non-combat material
- from: rare mushroom caps | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: REJECT | reason: M-11 via spirit_fire already covers the rare-cap→reagent sink and is the cleaner routing for organic→magic; adding a second imbuement path redundantly doubles the edge without meaningful differentiation
- from: ordinary mushrooms → coin | to: economy | motif: bare sell link | verdict: REJECT | reason: "forager sells mushrooms" is the ambient loop endpoint — not a demand-gating edge; M-09 retired; no M-26/M-29/M-30/M-33 mechanism to hang it on

---

## cbc_at   [anchors: Create, aeronautics (2)]
OK — connections sound. Both anchors are well-grounded: Create-machined munition pipeline (create:cutting + CBC assembly types) and direct Aeronautics-ship armament role. Dossier flags the one useful deepening: gating the heavy-autocannon/rocket tier behind a boss drop or MineColonies unlock (M-15/M-28) for progression — that is a *design decision*, not a missing pillar; no new system anchor is needed.

- from: heavy autocannon / rocket pod barrel (top-tier) | via: KubeJS recipe gate (boss drop or colony unlock) | to: Create + survival | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: the heaviest ship-mounted weapons require a boss-drop input — you have to fight your way to top-tier ship armament, not just machine it

---

## almostunified   [anchors: support (1)]
- LEAVE — pure recipe-graph infrastructure; no items, no methods to route through. Its galosphere/silver gotcha is a config concern, not a weave surface.

---

## timm   [anchors: support/QoL client (1)]
- LEAVE — client-side UI overlay, zero items/blocks/methods. Genuine zero-content client mod; no weave possible.

---

## gnkinetics   [anchors: Create (1)]
- from: planetary/ring/worm gear parts | via: create:mechanical_crafting or create:sequenced_assembly | to: aeronautics | motif: M-24 | power: mid | tone: ok | verdict: ACCEPT | hook: an Aeronautics drivetrain control surface (gearbox/propeller coupling) requires a planetary or worm gear — the pack's expanded kinetics toolbox becomes the source of precision drive components for airships
- from: gnkinetics parts | to: magic | motif: no coherent hook | verdict: REJECT | reason: pure mechanical gear blocks have no thematic surface in magic, survival, or economy; forcing an edge here would be contrived. Create is their entire identity; a second anchor via aeronautics (M-24) is the natural reach, and that's enough.

---

## platform   [anchors: support/library (1)]
- LEAVE — zero-content code library (0 blocks, 0 items); provides registry/biome/networking helpers to ItsBlackGear mods only. Genuine zero-surface library.

---

## geckolib   [anchors: support/library (1)]
- LEAVE — animation/rendering API, 0 blocks, 0 items. Genuine zero-content library; animates many pack mobs but has no material or recipe surface.

---

## modonomicon   [anchors: support/QoL (1)]
- LEAVE — in-game guidebook engine; books are flavor items with no material sink or method. Genuine zero-gameplay-content framework mod.

---

## pantographsandwires   [anchors: Create, aeronautics (2)]
OK — connections sound. Built through six Create machine types including sequenced_assembly; serves the rail/train logistics arm. No missing anchor.

- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking or create:compacting | to: Create / aeronautics | motif: M-32 | power: everyday | tone: ok | verdict: ACCEPT | hook: coal_coke is a byproduct of the wiring process that any TFMG blast furnace or Create compactor can re-use as a fuel input — industrial circularity, the railway's own waste feeds the smelting chain
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: create_new_age:energising | to: Create | motif: M-29 | power: mid | tone: ok | verdict: ACCEPT | hook: the Energiser needs graphite as a conductor component — a rail-infrastructure material becomes a cross-route dependency linking the electric-power chain to the overhead-line chain; no single specialist holds both
- from: catenary wires / mast infra | to: survival / magic | motif: no coherent hook | verdict: REJECT | reason: overhead-line infrastructure is a pure railway aesthetic; no survival or magic angle exists that isn't a forced stretch

---

## gamediscs   [anchors: survival/flavor (1)]
- from: gamediscs:processor / redstone_circuit | via: create:mechanical_crafting | to: Create | motif: M-05 | power: everyday | tone: ok | verdict: ACCEPT | hook: the console's processor and circuit board are machined on the mechanical crafter — the gaming gadget requires Create's precision fabrication as its supply chain, grounding a novelty item in the tech spine
- from: game_disc (disc drops from skeleton-kill) | to: economy/trade | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: the skeleton-kill disc gimmick is cosmetic; a "combat specialist farms discs to trade" edge is a stretch — discs have no functional value to the receiving player beyond novelty, so this is a bare sell link in disguise, not demand-gating
- REWORK: existing survival anchor is thin (dossier calls it "curated friend-group novelty/flavor") — accepting the M-05 recipe edge would tighten it to a genuine Create anchor, making the anchor pair survival+Create, which is sounder than survival alone.

---

## multipiston   [anchors: support/colony-dep (1)]
- LEAVE — MineColonies/Structurize dependency block; functional block mover with no item I/O of its own. Zero material or recipe surface beyond vanilla crafting of its own block.

---

## create_tweaked_controllers   [anchors: aeronautics (1)]
- from: tweaked_lectern_controller | via: create:mechanical_crafting (precision mechanism + electron tubes) | to: Create | motif: M-05 | power: mid | tone: ok | verdict: ACCEPT | hook: the vehicle controller is assembled on the mechanical crafter from precision mechanisms — the control interface is a Create-crafted product, rooting it in the tech spine rather than floating as a standalone recipe
- from: tweaked controller | to: magic/survival | motif: no coherent hook | verdict: REJECT | reason: a redstone-signal control device has no thematic surface in magic or survival pressure; the Create anchor is the natural second and is enough.

---

## polymorph   [anchors: support/QoL (1)]
- LEAVE — recipe-conflict resolver; 0 blocks, 0 items, no material I/O. Genuine infrastructure mod with no weave surface.

---

## create_new_age   [anchors: Create (1)]

- from: create_new_age:thorium_ore (regional ore, 2 biome-modifiers) | via: GTMOGS regional ore-gen | to: scarcity/economy | motif: M-30 | power: mid | tone: ok | verdict: ACCEPT | hook: Thorium is region-locked — only players settled in the right biome can mine it; reactor fuel must be traded, creating a nuclear-specialist dependency
- from: magic focus / Ars Nouveau source apparatus | via: create_new_age:energising | to: magic | motif: M-17 | power: mid | tone: ok | verdict: ACCEPT | hook: charging a magic focus through the Energiser bridges Create's electrical tier into magic gear — an electric-charge step that the magic specialist needs from the tech specialist
- from: aeronautics control component (e.g. flight-controller board) | via: create_new_age:energising + create:sequenced_assembly | to: aeronautics | motif: M-06 | power: endgame | tone: ok | verdict: ACCEPT | hook: the most advanced Aeronautics electronics are energised in the electric tier before sequenced assembly — the reactor-era of Create is the gate for top-tier ship components
- from: create_new_age:corium (reactor waste) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: endgame | tone: ok | verdict: ACCEPT | hook: reactor waste (Corium) is transmuted through spirit-fire into an occult reagent — the nuclear chain produces a magic input, forcing the nuclear technician and the occultism specialist to trade
- from: energised outputs | to: economy bare sell | motif: bare sell link | verdict: REJECT | reason: "high-tier sellable" is the ambient endpoint; there is no demand-gating mechanism here beyond ambient trade — M-09 retired
- REWORK: the dossier's "2nd-anchor: economy via numismatics" candidate is a bare sell link (M-09 retired) — correctly pre-rejected in the dossier.

---

## farmersdelight   [anchors: survival, Create (2)]
OK — connections sound. Core food-processing hub; already woven into Create via milling/mixing/filling. Two anchors well-grounded.

- from: prepared meals (stews, pies) | via: minecolonies:composting or MineColonies provisioning | to: economy | motif: M-28 | power: everyday | tone: ok | verdict: ACCEPT | hook: the colony's Cook hut demands provisioned food and consumes prepared meals — the kitchen becomes a colony supplier, turning cooking output into a colony-route dependency and closing the food→economy link without an NPC coin faucet
- from: farmersdelight crops (cabbage/tomato/onion/rice) | via: serene seasons gate (seasonal planting windows) | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: specific FD crops only grow in certain seasons — cabbage thrives in autumn, tomato in summer — feeding the diet-variety pressure loop with seasonal rhythm
- REWORK: dossier's "economy via numismatics — high-tier dishes as sellable goods" is a bare sell link (M-09 retired) — correctly noted; the M-28 colony-provisioning edge above is the right replacement that actually gates demand.

---

## opacpvp   [anchors: support/QoL (1)]
- LEAVE — pure PvP rules/social addon; 0 blocks, 0 items, no material or recipe surface. Sanctioned support role by design (cooperative PvPvE premise); no weave possible.

---

## libipn   [anchors: support/library (1)]
- LEAVE — GUI/config library for IPN; 0 blocks, 0 items. Genuine zero-content dependency library.

---

## architectury   [anchors: support/library (1)]
- LEAVE — cross-platform modding API; 0 blocks, 0 items. Genuine zero-content library; pulled in transitively.

---

== CHUNK COMPLETE ==
