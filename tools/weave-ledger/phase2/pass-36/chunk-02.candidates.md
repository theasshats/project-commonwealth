# Phase 2 candidates — chunk-02

## tacz   [anchors: support/combat-flavor (1)]

Current state: 1 anchor (support — PvPvE flavor). No content-pillar wiring yet. Has loot=yes, and the gun_smith_table is a distinct registered recipe-type. The key join surfaces are: (a) metal/component inputs to the Gun Smith Table, (b) ammo as a consumable output, (c) boss-drop gate potential for high-tier firearms.

- from: metals/components → gun_smith_table_crafting | via: recipe (replace vanilla inputs with Create-pressed sheets, mechanical-crafted casings, brass gears) | to: create | motif: M-05 | power: mid | tone: ok — guns requiring machined parts is the obvious industrial step; players nod at "of course a Gun Smith Table needs Create parts" | verdict: ACCEPT | hook: The Gun Smith Table consuming Create-pressed iron sheets and mechanical-crafted components ties firearms to the Create spine — a TACZ gun is a precision product, not a vanilla bench craft.

- from: high-tier firearms (e.g. endgame rifles/LMGs) | via: recipe gating (boss drop as required component) | to: create | motif: M-15 | power: endgame | tone: ok — a boss drop unlocking military-grade hardware is coherent; the boss IS the gatekeeping danger | verdict: ACCEPT | hook: The highest-tier TACZ firearms need a boss-drop component, so the fighter playstyle (M-34 supplier) gates weapon access, not just a crafting table.

- from: tacz:ammo / ammo_box (consumable projectiles) | via: M-26 consumption mechanic | to: survival (pressure/demand) | motif: M-26 | power: everyday | tone: ok — ammo is literally consumed on use; zero stockpile problem; continuous demand is automatic | verdict: ACCEPT | hook: Ammo is a self-renewing demand sink — players in PvPvE loops burn through it constantly, so TACZ feeds the economic loop's consumption edge without any recipe tweak needed.

- from: tacz:ammo/ammo_box as trade goods | via: emergent trade between combat-specialists and non-combat players | to: economy | motif: M-34 | power: everyday | tone: ok — a combat specialist farms boss drops and ammo materials; crafts ammo to sell to others is the supply side of the combat-route | verdict: ACCEPT | hook: A dedicated TACZ gunsmith produces ammo in bulk for the non-combat players who want protection — a natural PvPvE supply chain.

- from: tacz:ammo as aeronautics-mounted armament supply | via: conceptual link — airship carries tactical firearms; aeronauticscompat already ships turret compat | to: aeronautics | motif: no-motif | power: mid | tone: clash — TACZ guns are handheld; aeronauticscompat covers turret mods, not gun-mod mounts; there's no mechanical mounting surface | verdict: REJECT | reason: no-motif; handheld firearms have no hook into Aeronautics construction methods; aeronauticscompat explicitly handles turret mods, not handheld-gun mods — thematic stretch, no method.

REWORK: existing dossier anchor "support (combat/PvPvE flavour)" — OK as a starting anchor, but the dossier's M-08/M-09 coin candidate should be retired (M-09 is retired; bare sell is not a weave); the strong path is M-05 + M-15 + M-26 + M-34 as shown above.

