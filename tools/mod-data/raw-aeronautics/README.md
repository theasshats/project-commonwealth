# raw-aeronautics — drop zone for the Create Aeronautics extraction (issue #179)

Put the **raw extracted files** here and commit them — do NOT hand-format anything. A Derpack agent will parse
whatever lands here into the proper `tools/mod-data/by-mod/`, `recipes/`, `loot/` format, regenerate the
aeronautics dossier, and continue the weave passes (see the resume prompt in
`tools/weave-ledger/phase2/AERONAUTICS-DATA-GAP.md`).

## What to drop (any/all of these — more is better)
- **`en_us.json`** — the lang file from the jar. The single most useful one (complete item/block ID list):
  `unzip -p <create-aeronautics-bundled jar> assets/aeronautics/lang/en_us.json > tools/mod-data/raw-aeronautics/en_us.json`
  (also grab `assets/aeronautics_dyeable_components/lang/en_us.json` if present)
- **`registries.json`** — if you ran the vanilla data-generator `--reports` (gives authoritative registered IDs).
- **recipe JSONs** — anything under `data/aeronautics/recipe/` in the jar, or the `--reports` `recipes/` folder.
- **loot JSONs** — anything under `data/aeronautics/loot_table/` in the jar.
- the **jar itself** is also fine if it's easier — drop `create-aeronautics-bundled-*.jar` here and the agent
  will `unzip` what it needs.

Keep original filenames; don't merge or edit. Just commit. That's it.
