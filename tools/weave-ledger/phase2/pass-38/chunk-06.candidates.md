# Phase 2 candidates — chunk-06

## bagus_lib   [anchors: support/library (1)]
LEAVE — pure code library (baguchi's shared utilities); 0 blocks, 0 items, no recipe types, loot=no. No content surface to weave. Genuine zero-surface case.

## bakery   [anchors: survival (1)]
Existing connections: 1 anchor (survival — food/satiety via Farm & Charm cooking chain). One anchor is the floor; needs a second.

Power-read: bakery outputs are mid-to-high tier processed foods (cakes, tarts, cupcakes, jams, baguettes). The blank_cake_interaction is a light unique mechanic. The food items grant saturation + short-duration speed+strength buffs on sweet stacking. Mid tier overall — a specialist baking chain, not endgame but well above raw crop.

Candidates:

- from: wheat / berries / fruit (bakery inputs) | via: create:milling | to: create | motif: M-12 | power: everyday | tone: ok | verdict: ACCEPT | hook: Create's millstone grinds grain to flour that feeds the baker's station — the bakery chain runs on the tech spine's output, not just hand-grinding.

  Red-team: Is flour production coherent with a Create millstone? Yes — milling grain is exactly its documented use case. Risk is scale mismatch (bakery is artisanal, Create is industrial) but the coupling is light (one processing step, not a full chain) and appropriate for everyday tier. Tone ok.

- from: bakery:beer / bakery bread products | via: alcohol_industry:alcohol_boiling | to: create | motif: M-12 | power: mid | tone: clash | verdict: REJECT | reason: alcohol_industry produces spirits, not beer-from-bread; forcing a bread→alcohol bridge when alcohol_industry already has its own input chain is arbitrary and the two mods' themes don't overlap naturally. No clear method link.

- from: bakery finished goods (cakes/tarts/jams) | via: minecolonies colony supply | to: economy | motif: M-28 | power: mid | tone: ok | verdict: ACCEPT | hook: A MineColonies Cook or Tavern Worker requests bakery-quality pastries as colony supply — settlement-scale demand that a baking specialist fills, gating colony happiness/tier without the goods being NPC-sold.

  Red-team: Is this just "bakery goods are food, colonies need food"? MineColonies does request specific cooked/prepared foods from its cook hut, and bakery's high-saturation cakes/tarts are a natural "luxury food" tier the colony would request above basic bread. The link gates colony demand on a specialist production chain — that's M-28 (colony route as demand). Not arbitrary. Tone ok.

- from: bakery:strawberry_cake / bakery:apple_jam (seasonal fruit inputs) | via: config tie to Serene Seasons | to: survival | motif: M-16 | power: everyday | tone: ok | verdict: ACCEPT | hook: Strawberry/apple-based bakery items are only craftable when the seasonal crop is available (spring/autumn gated), making the bakery's luxury tier follow the harvest calendar — bakers are seasonal specialists.

  Red-team: Does bakery use crops whose seasonal availability is controlled by Serene Seasons? The dossier lists fruit/berries as inputs. Serene Seasons gates crop growth by season; if berry/apple crops are season-sensitive, then bakery's premium recipes inherit that gating without a recipe change — it's a config-tie/worldgen read, not forced. Tone fits the cozy-bakery vibe perfectly. M-16 accepted.

- from: bakery loot (loot=yes) | via: loot-seed | to: survival / economy | motif: M-34 | power: everyday | tone: ok | verdict: REJECT | reason: bakery's loot=yes is likely chest-loot for the decorative blocks/foods, not a boss/structure loot scenario. M-34 is combat-route supply from dangerous sources; a bakery doesn't fit the combat-supply frame. No-motif for a bare loot-seed here; the seasonal and colony links above are stronger.

REWORK: The dossier lists M-09 as the candidate economy link ("luxury sell-goods"). M-09 is retired — "sellable" is the ambient endpoint, not a weave. The colony demand link (M-28) is the correct reframe. Flag the dossier's M-09 economy candidate as superseded by M-28.

Summary: 3 ACCEPT (M-12 milling, M-28 colony demand, M-16 seasonal), 2 REJECT.

## voicechat   [anchors: support (1)]
LEAVE — proximity voice communication infrastructure; 0 blocks, 0 items, no recipe types, loot=no. Pure communication layer with no gameplay material surface. Genuine zero-surface case.

## aileron   [anchors: aeronautics (1)]
Existing connections: 1 anchor (aeronautics — Elytra flight rebalance). One anchor is the floor; needs a second.

Power-read: aileron adds Elytra enchantments (loot=yes) and reworks flight physics. The enchantments are mid tier — they're refinements to an existing item, not a new endgame unlock. No item namespace (0 blocks, 0 items under aileron:) — the content surface is the Elytra enchants (loot) and behavior changes.

Candidates:

- from: aileron Elytra enchantments | via: ars_nouveau:enchanting_apparatus | to: magic | motif: M-10 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's flight enchantments (higher durability, glide-speed, pull) are imbued through the Enchanting Apparatus using source — a magic-route unlock to the premium personal-flight tier that requires a mage's setup to access.

  Red-team: Are aileron's enchants accessible to the apparatus? The dossier notes enchants are "datapack-exposed" as a condition; if they're standard Minecraft enchantments registered under vanilla's enchantment system, the apparatus can target them via an imbuement recipe. If they're a closed system, this fails at authoring — flag as BALANCE-PENDING. The thematic pairing is coherent: flight magic imbued through arcane apparatus feels right; it's not a forced edge. M-10 (arcane infusion pull) fits: a foreign enchantment pulled into the magic route. Only mid-depth treatment (one apparatus recipe per enchant), appropriate for the tier.

- from: aileron Elytra enchantments (loot=yes) | via: loot-seed | to: survival | motif: M-34 | power: mid | tone: ok | verdict: ACCEPT | hook: Aileron's premium Elytra enchant books seed into end-structure / stronghold loot — rare endgame exploration drops that reward adventuring into dangerous space, giving the combat specialist a tradeable commodity (the flight-enchanted Elytra) that the aerial logistics player wants.

  Red-team: Does this feel forced? The Elytra already drops from End Ships; aileron's enchantments extending that loot tier is thematically tight. The combat/exploration specialist farms the enchantment books; the aeronautics player buys them. M-34 (combat-route supply) is the right motif. Tone ok. This is a loot-seed delivery, not a recipe — valid per briefing.

- from: aileron Elytra enchantments | via: irons_spellbooks:alchemist_cauldron_brew | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: Iron's cauldron brews potions, not enchantments; routing Elytra enchantments through a potion-brewing mechanic is a category mismatch. The apparatus route (above) covers the magic angle more coherently.

REWORK: Dossier notes "leave is acceptable" — but loot=yes is a real surface, and the two ACCEPT candidates above (apparatus enchantment, loot-seed) are coherent without forcing. Flag dossier's dismissal of the apparatus link as overly conservative.

Summary: 2 ACCEPT (M-10 apparatus enchant, M-34 loot-seed), 1 REJECT.




