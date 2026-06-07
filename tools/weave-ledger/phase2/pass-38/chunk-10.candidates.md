# Phase 2 candidates — chunk-10

## cloth_config   [anchors: support/library (1)]
LEAVE — genuine zero-content config-screen API library; no items, no blocks, no recipe methods, no material surface to route. Config screens for other mods, nothing to weave.

## cataclysm   [anchors: survival (1)]

Already-proposed connections in dossier are good starting points. Cataclysm has loot=yes, 301 items, registered `cataclysm:weapon_fusion` and `cataclysm:amethyst_bless` methods, and boss-drop materials (Witherite, Ignitium, Cursium, ancient_metal_ingot, Void Core). It sits at 1 anchor (survival/danger) — the goal is ≥2.

**Method-pull pass:**
- Witherite/Ignitium/ancient_metal are novel ingot-tier materials. Who wants ingots? `create:crushing` → M-03 ore-doubling (reward path); `create:pressing` for sheets → M-05 native-method gating. The dossier explicitly names these as the canonical DESIGN.md boss-drop→Create-tech gate.
- Cursium (cursed/dark thematic) → `occultism:spirit_fire` for transmutation; `ars_nouveau:imbuement` → M-11/M-10 mob-drop reagent sink.
- Boss-drop loot-table side: `cataclysm:weapon_fusion` requires Witherite Ingots — that method is owned by cataclysm, but Phase 3 could seed Witherite/Ignitium into Create processing recipes as inputs for high-tier components, gating them behind the boss fight. This is M-15 boss-key unlock.
- `amethyst_bless` (Altar of Amethyst) consumes amethyst — cosmetically, the Cataclysm altars themselves could be seeded with Ars `source_gem` or Occultism ritual catalysts as construction materials, but that crosses into forcing Create/magic onto Cataclysm's own altars — tone-check: the altars are physical structures in dungeons, not workshop equipment. Red-team: seeding Ars gems INTO the Cataclysm altars as a construction input is awkward (the altar is looted, not crafted). Reject that direction.
- Economy angle: `cataclysm:ancient_metal_ingot` as M-08 coin-feedstock? Power-check: ancient_metal is boss-drop, endgame — putting it into Numismatics as a minting feedstock means the hardest-to-get material mints the strongest coin. That fits M-08 (scarce regional metal → Create-processed → mint), but ancient metal is not a regional ore — it's a boss drop, not GTMOGS regional. The M-08 motif specifically calls out "scarce regional metal" → Create → mint. Using a boss drop instead of a regional ore is off-motif. However: the combat specialist farms boss drops → trades them (M-34 combat-route supply) to others who lack the combat skill. That is coherent and advances the loop.

**Candidates:**

- from: cataclysm:ancient_metal_ingot / witherite_ingot / ignitium_ingot | via: create:pressing → create:sequenced_assembly | to: create | motif: M-15 | power: endgame | tone: ok | verdict: ACCEPT | hook: Only a player who has cleared Cataclysm's dungeon bosses holds the ingots needed to unlock the deepest Create machine tier — the fighter's victory key opens the engineer's door.

- from: cataclysm:ancient_metal_ingot (processed sheet/rod) | via: create:mechanical_crafting | to: aeronautics | motif: M-23 | power: endgame | tone: ok | verdict: ACCEPT | hook: The rarest structural metal in the world — forged from an ancient boss's corpse — is exactly the material an endgame airship hull deserves; it makes the largest/highest-tier airframe builds demand a dungeon-cleared supply chain.

- from: cataclysm:cursium (cursed drop) | via: occultism:spirit_fire | to: magic | motif: M-11 | power: mid | tone: ok | verdict: ACCEPT | hook: The corrupted essence extracted from a cursed boss drop is the occult world's premium necromantic input — dungeon-diving feeds the Occultism lab.

- from: cataclysm:witherite_ingot | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Ars Nouveau's imbuement refines the wither-metal's latent void energy into a high-tier arcane reagent; the magic specialist would pay well for it.

- from: cataclysm boss drops (loot tables) | via: loot-seed | to: economy | motif: M-34 | power: mid–endgame | tone: ok | verdict: ACCEPT | hook: A combat specialist who can clear Cataclysm dungeons becomes the server's supplier of boss-drop materials that all production routes need — the fighter's loot is everyone's feedstock, and trade is the bridge.

- from: cataclysm:ignitium_ingot | via: create:crushing (ore-doubling processing reward) | to: create | motif: M-03 | power: mid | tone: ok | verdict: REJECT | reason: Ignitium is a boss drop, not an ore — M-03 is specifically the ore→crushed→byproduct reward for mining scarcity. Applying it to a boss-drop ingot misrepresents the motif (there is no ore form to double). The correct motif for gating Create tech behind boss drops is M-15. REJECT, log for review.

- from: cataclysm:amethyst_crab_shell | via: create:crushing | to: create | motif: M-04 | power: everyday | tone: clash | verdict: REJECT | reason: Amethyst crab shell is a combat-loot drop, not a decorative block — M-04 covers deco blocks back to raw materials. Routing mob-drop shells through M-04 is motif misapplication. Also tone clash: amethyst shell as industrial feedstock is contrived. REJECT.

REWORK: Dossier candidate "economy via numismatics — boss-material ingots or trophy drops as high-value sellable scarcity (M-08 coin-from-processed-scarcity)" is mis-motif. Boss drops are not regional ores; M-08 specifically anchors to regional scarce ores processed through Create → mint. The correct frame is M-34 (combat-route supply) — flagging REWORK on that dossier suggestion. The accepted M-34 above supersedes it.



