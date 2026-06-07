# Phase 2 candidates — chunk-12

## pantographsandwires   [anchors: create, aeronautics (2)]
- REWORK check: OK — connections sound. Built through Create machines (compacting/mixing/milling/sequenced_assembly) and exists solely to serve electric train infrastructure (aeronautics/logistics arm). Both anchors are load-bearing.
- from: pantographsandwires:graphite (c:item/ingots/graphite) | via: tfmg:winding or create:mixing | to: create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: graphite feeding TFMG/Create electrode chains is a Create↔Create hop — both source and sink are the same pillar; the loop gains no new node.
- from: pantographsandwires:coal_coke (c:item/dusts/coal_coke) | via: tfmg:coking (tag sharing) | to: create | motif: M-32 | power: mid | tone: ok | verdict: REJECT | reason: same within-Create issue — the coal_coke c: tag is already shared with TFMG's coke chain; no cross-system advancement.
- from: pantographsandwires:graphite | via: ars_nouveau:imbuement | to: magic | motif: M-10 | power: mid | tone: clash | verdict: REJECT | reason: tone clash — graphite is an industrial conductor; routing it through an arcane infusion ritual is narratively incoherent; a player finds no hook.

