# Phase 2.x — economy de-emphasis (applied at pass 24+)

**Why.** By pass 24 (3484 candidate links), the **economy pillar was over-represented at 27%** of all
proposed weaves, and the economy-trio dominated the motif ranking:

- **M-09** (sell/luxury → coin) — 409, the single most-proposed motif of all 24
- **M-08** (mint metal → coin) — 203
- **M-14** (bounty → coin) — 202
- → **814 links** (≈23% of the whole corpus) are "this is sellable" variants.

The cause is structural, not a discovery: economy is the **distribution stage** of the loop
(`docs/SYSTEMS.md`), so *every* product is trivially sellable. "Sellable" therefore carries almost no
information — it applies to nearly any item with zero design friction, and agents reach for it as the cheap
second anchor. That floods `times_suggested` with low-signal economy links and crowds the more
loop-structural Create / magic / aeronautics / survival weaves out of the consensus ranking.

**What changed (passes 24–29).** The blind agent prompt carries an **economy-de-emphasis clause**: a bare
"sell it for coins / mint to coin / bounty payout" link (M-08/M-09/M-14 applied *only because* an item is
sellable) is treated as **saturated and low-signal** and must be **REJECTed** ("generic-sellable,
non-distinctive — economy de-emphasis"). An economy link is only ACCEPTed when it is **structurally
distinctive**: a genuine sink that closes a loop, a scarcity-gated or specialization-defining distribution
node, or the item's *only* viable cross-system tie. Agents are told to spend the saved effort finding
Create / magic / aeronautics / survival anchors instead.

**This does not down-rank economy as a pillar** — economy/logistics is load-bearing (CLAUDE.md). It only
raises the bar for *generic* sellability so the consensus ranking surfaces distinctive weaves. The
maintainer can still mine the pre-24 economy candidates from `CANDIDATES` directly.

**Reading the curve.** Expect the pass-24+ rows to show economy's share of *new* candidates fall while
Create/magic/aeronautics/survival hold or rise. The de-emphasis is a deliberate sampling bias, so the raw
`new` count is no longer a pure saturation signal from pass 24 on — judge saturation by growth in the
**non-economy** pillars.
