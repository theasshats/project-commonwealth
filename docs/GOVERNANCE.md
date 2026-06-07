# Player governance — scoping (issue #260)

> **Status: SCOPING, not accepted.** This doc captures the survey + implementation options for a
> player-driven hierarchical governance system (municipalities → counties/kingdoms/empires, cascading
> laws, entity minting), milestoned **v0.9.0 — Economy & logistics** (#260). It is a *speculative
> project*, not a committed feature. Nothing here is built. **Read the "Design-stance conflict" section
> first** — #260 reverses a settled ruling in `docs/SYSTEMS.md`, and that reversal needs ratifying before
> any code.

---

## ⚠️ Design-stance conflict — resolve before building

`docs/SYSTEMS.md` ("Open / unsettled", line ~312) currently states, as a *settled* ruling:

> "(No formal governance/laws layer is planned — a deliberate divergence for a small PvPvE group.)"

It frames this as an intentional divergence from Eco (which *does* have formal governance). Issue #260
proposes exactly the formal governance/laws layer that ruling rules out. That's a legitimate pivot —
but it is a **documented reversal, not a gap-fill.** If governance is pursued:

- `SYSTEMS.md`'s "Dynamic pricing + player-minted currency" note and the Eco-divergence framing must be
  updated, or the canonical structural model contradicts itself.
- The reversal is a **maintainer call** (Xela112233 + zagwar), not something to build past silently.

**Action item before Path A/B/C work starts:** ratify the reversal and reconcile `SYSTEMS.md`.

---

## What #260 asks for

A bottom-up, *recursive* political hierarchy layered on the existing MineColonies/claims systems:

- **Municipalities (base tier, solo-founded):** settlement → village → town → city, promoted by
  population / claimed area / criteria.
- **Federations (higher tiers, composed):** county → kingdom → empire — require *multiple* member
  municipalities, so they're composed, not solo-founded.
- **Recursive sub-regions:** a large entity can carve subordinate regions beneath it (a kingdom minting
  counties).
- **Cascading laws:** every entity at every tier issues laws; a higher tier's law **takes precedence**
  over a subordinate's. Needs a conflict-resolution rule for overlapping/contradictory laws.
- **Currency minting:** entities can mint their own currency, tied into Numismatics — with rules for who
  mints, at what tier, supply controls against inflation, and how minted currency interoperates with the
  base Numismatics money.
- **MineColonies compatibility:** colonies/their borders map *into* the municipality layer rather than
  fighting it.

**Design anchor (per #260 + `SYSTEMS.md`):** **Economy** pillar (governance of the trade network + the
minting layer), second weave into **Survival** (territory, defense, PvPvE stakes). It must reinforce the
emergent economy — entities, their taxes, and their currencies become real drivers of trade — not bolt
on a parallel system.

---

## Substrate the pack already ships (the building blocks)

The base tier and the currency layer mostly *already exist*; the missing piece is the **composition +
law + minting-policy layer** above them.

| Component | Mod (in pack) | Role it can play |
| --- | --- | --- |
| **Municipality base tier** | `minecolonies` | A colony already = a foundable settlement: Town Hall (founding act), citizens (population metric), building levels (a natural promotion ladder), configurable claimed-chunk radius. A colony ≈ a settlement/town today. |
| **Claim substrate / API** | `open-parties-and-claims` (OPAC) | Ships a documented claims + parties API — the same API third-party faction mods build against. Most likely technical substrate for "an entity = a set of claims." |
| **Currency / minting backbone** | `numismatics` | Create-minted coinage, bank accounts, cards, authorized spending. The realistic minting backbone — entity currency rides on or extends this rather than a parallel money. |
| **Trade venue + town chat** | `create-trading-floor`, `towntalk` | Where minted currency and taxed goods would actually circulate. |

So MineColonies gives the *municipality*, OPAC gives the *claims*, Numismatics gives the *money*. #260's
novelty is the **federation tier, the law engine, and the minting-policy bridge** on top.

---

## Survey — existing nations/governance mods (NeoForge 1.21.1)

No off-the-shelf mod delivers the recursive municipality→federation hierarchy *with* cascading laws
*and* entity minting *and* MineColonies mapping. The closest single mod covers roughly a third of the
vision.

| Mod | Loader / version | Covers | Gap vs #260 |
| --- | --- | --- | --- |
| **PoliticsMod** | NeoForge 1.21.1 | Founding Stone → nation; capital; multiple City Stones; chunk claiming w/ 3 render styles; custom flags rendered in-world | Closest to the *hierarchy* vision, but only nation→city (2 tiers). **No recursive county/kingdom/empire, no cascading laws, no minting, no MineColonies mapping.** Brings its *own* claim system that would collide with OPAC + MineColonies borders. |
| **ForgeTowns** | NeoForge 1.21.1 (**alpha**) | Towns + nations; configurable creation cost / upkeep / size limits; town bank | Town→nation only; alpha stability; no recursive tiers / laws / minting; unknown MineColonies interop. |
| **Claim My Land** | NeoForge 1.21.1 | Nations + Zones; arbitrary-shape claims; full protection + whitelist | Protection-focused, not governance; no law cascade or minting. |
| **Territorial Dealings** | Forge (older) | Factions, chunk claims, protections | Older loader; factions, not hierarchies. |

**Survey conclusion:** PoliticsMod gives ~30% of the vision (founding + cities + claims + flags) and would
still need the federation tier, the law engine, and the Numismatics bridge — *and* its claim system
fights the two claim systems the pack already runs.

---

## Implementation paths

### Path A — Adopt PoliticsMod, weave the rest in KubeJS

Use PoliticsMod for founding / cities / claims / flags; treat MineColonies colonies as the population
source; add laws + minting as KubeJS/datapack on top.

- **Pro:** cheapest to start, fastest to playtest a "feel."
- **Con:** you build a custom layer on a *closed* mod's data model you don't control; PoliticsMod's claim
  system **doubles up against OPAC *and* MineColonies' own borders** — exactly #260's "don't fight
  MineColonies" concern. Likely ends in claim-system conflict.

### Path B — Custom NeoForge mod on the OPAC + MineColonies APIs *(recommended for the full vision)*

A purpose-built mod where an **"entity" is a record keyed to OPAC claims and MineColonies colony IDs** —
it introduces **no new claim system**, it *reads* the two that already exist. It owns:

- the **tier ladder** (settlement→…→empire) and promotion criteria (colony building level / citizen count
  / claimed-chunk count as the inputs);
- **federation composition** — invitation/consent, membership, a capital, secession;
- the **recursive sub-region tree** (parent ↔ child entity links);
- a **law engine** — laws as typed rules (PvP toggle, build/use permission, banned-item, tax rate),
  enforced via NeoForge events, with a **tier-priority resolver** (higher tier wins; document the
  same-tier and sub-region-vs-parent tie-break);
- a **minting policy** issuing Numismatics-compatible currency with supply caps / backing rules.

- **Pro:** the only path that satisfies *all* of #260 cleanly and respects the existing claim systems.
  `docs/CUSTOM-MODS.md` already sanctions custom mods as a project (their own repo under `derpack-org`,
  pulled in via the mod-mirror packwiz pattern).
- **Con:** the largest effort — genuine multi-week mod development. The web sandbox **cannot compile or
  run NeoForge**, so work here is source-only; it's built/playtested on the box. Almost certainly cannot
  *fully* land inside a single v0.9.0 release — a long-lived `claude/governance` project, not a patch.

### Path C — Pure KubeJS / datapack, no new mod

- **Pro:** cheapest in dependencies.
- **Con:** KubeJS is poorly suited to persistent *recursive political state* and custom GUI/networking.
  The law-*enforcement* half is doable (event handlers reading a data structure); the *governance / state
  / UI* half is not. In practice this collapses into "Path B's enforcement layer without the mod that
  manages the state" — incomplete.

---

## Recommendation

1. **Ratify the design reversal first** (see top) — #260 overturns a settled `SYSTEMS.md` ruling; reconcile
   the docs before building past it.
2. **Spike PoliticsMod + ForgeTowns on the box** (one playtest session) to see empirically how far an
   existing mod gets and how badly its claims collide with MineColonies/OPAC. That result decides Path A
   vs B far better than more desk research.
3. If the full vision is kept, **Path B is the only complete answer** — scoped as a long-lived
   `claude/governance` custom-mod project (per `docs/CUSTOM-MODS.md`), not a v0.9.0 patch.

---

## Open design questions (from #260, carried forward)

- [ ] Technical backing of an "entity": extend OPAC claims, key to MineColonies colony IDs, or a custom
      layer over both. *(Path B leans: a custom record keyed to **both**, owning no claims of its own.)*
- [ ] Promotion criteria between tiers (population / claimed area / member count / build reqs / economic
      output?). *(MineColonies building level + citizen count are the obvious free inputs.)*
- [ ] Federation mechanics: invitation/consent, voting, a capital, secession.
- [ ] What a "law" can mechanically *do* (PvP toggles, build/claim permissions, taxes, travel, banned
      items) and how it's enforced server-side.
- [ ] Law precedence + conflict resolution across tiers; how sub-region laws relate to parent laws.
- [ ] **Minting:** which tier(s) can mint, what (if anything) backs a currency, supply controls vs.
      inflation, exchange/competition between rival currencies and base Numismatics money.
- [ ] How taxes / tribute / trade agreements / minted currency feed the **Economy** value/matter loop so
      governance earns its place as more than flavor (the second-system weave per the design north star).
- [ ] Scope realism: confirmed no single mod covers the full vision (see survey); a custom build (Path B)
      is required for the complete feature set.

---

_Refs: issue #260; `docs/SYSTEMS.md` (the structural model this would amend); `docs/CUSTOM-MODS.md` (the
custom-mod project pattern Path B follows); `docs/DESIGN.md` (the why); `mods/minecolonies.pw.toml`,
`mods/open-parties-and-claims.pw.toml`, `mods/numismatics.pw.toml` (the substrate)._
