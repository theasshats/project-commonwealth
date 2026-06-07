# Mod review × weave ledger — integrated analysis

> Integrates the **pre-1.0 mod-review sweep** (`docs/MOD-REVIEW.md`) with the **weave ledger**
> (`docs/WEAVE-LEDGER.md` + `tools/weave-ledger/`). The reviews **are the thunderdomes** — the
> odd-milestone curation-by-merit (`docs/ROADMAP.md`): each per-mod review is a **keep / cut / weave**
> judgement, and the weave candidates below are the evidence it judges against. A mod that earns ≥2
> coherent anchors is a *keep+weave*; one that earns none after this scrutiny is a *cut*.

## These reviews are the thunderdome

The roadmap runs a curation "thunderdome" (merit review) on each odd version. This doc operationalizes
it: per milestone, that pillar's mods come up with their full weave evidence, and the human verdict is
recorded by ticking the mod in its `docs/MOD-REVIEW.md` issue (the schedule) — keep, cut, or author the
listed weaves. The Gate-2 sign-off on the weave candidates and the thunderdome keep/cut call are the
**same decision**, made once, per mod, in that mod's milestone.

## How to read an entry

For each mod: `modid (packwiz-slug) — NA/NR · motifs` (accept/reject counts + the motifs its ACCEPTs
ride), then a **DX:** line — my own take (agree/disagree, risk, priority, cross-links, cut/Gate-0
flags) — then the top consensus-**ACCEPT** weaves, each as `motif ×N → pillar · from · via method`,
where `×N` = how many independent passes proposed it (confidence). Motif definitions live in
`docs/WEAVE-LEDGER.md` §1.

## The signal: consensus, not volume

Of the full corpus, the actionable set is the high-`times` ACCEPTs — a weave proposed once is noise; one
proposed by 20-30 passes (`dynamictreesplus` saguaro-milling, `deeperdarker` soul→spirit_fire,
`tfmg` diesel→engine, `cold_sweat` hearth-gate) is a near-certain author. Spend review attention there.

## Authoring rides a different milestone than review

A weave is **reviewed** in its mod's milestone but often **authored** in the pillar it reaches *into* —
a Create mod whose best weave is an aeronautics hull part is reviewed in v0.7.0, authored in v0.9.0. The
DX notes call this out per mod.

## v0.7.0 Create batch — synthesis

The Create batch's weaves split: a few are **spine-internal, author now**; most are **cross-pillar supply
edges** into aeronautics/magic, correctly queued to v0.9/v0.11. Three load-bearing points for *this*
milestone:

1. **The ledger independently validates the power-ladder spec (#145).** Its power-motif mods map 1:1 onto
   the proposed rungs — `createtreadmill` (M-26 player-labor) = r0, `createaddition` (M-17 SU↔FE) = r4,
   `create_new_age` + `createnuclear` (M-30 regional reactor fuel) = r5. Two methods, same ladder.
2. **`create_ultimate_factory` is a scarcity-foundation risk, not just a weave.** Its renewable
   diamond/blaze synthesis undermines the loop's axiom — escalate to a v0.7.0 trim/gate/cut (and it
   overlaps `create_factory`).
3. **The plate/metal mods (`tfmg`, `create_ironworks`, `createmetalwork`, `createnuclear`) all feed
   aeronautics airframes via M-23 — the argument to *unify, not cut* them** (#103). Their steel/bronze/
   aluminum is the structural supply line; the dedup must preserve those tagged outputs.

**v0.7.0 author-now shortlist:** power ladder (#145) against r0/r4/r5 mods · step-depth (#219) on
`create-connected` battery/chip and `tfmg` constantan · the boss fork (#92) on the netherite jetpack ·
resolve the `create_ultimate_factory` scarcity risk · preserve M-23 plate outputs (#103/#102) ·
Gate-0 first on `create-enchantment-industry` M-29/M-33.

---
