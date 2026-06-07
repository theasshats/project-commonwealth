# Performance — profiling routine, baseline & budget

Establishes the standard `spark` routine, the v0.6.0 baseline, and the release TPS/FPS budget
(issue #147). Principle, per `CLAUDE.md`: **measure, don't analogize** — every perf claim cites a
spark profile, not intuition. Old-pack tuning lessons (1.7.10 / Java 8) do not carry to 1.21.1 /
Java 21 / G1GC.

There are two independent axes: **server tick (TPS)** and **client frame (FPS, #98)**.

## The routine

`spark` runs on the live server. Always profile **under test conditions** — settled ≥3 min,
surrounding chunks pre-generated (Chunky), realistic load — so you measure steady state, not
load-in transients.

### Server tick (TPS)
Prefer the **dedicated server**; the integrated single-player server shares the client process and
is the worst case.
- **Steady state:** `/spark profiler --timeout 60` (capture all threads; a `--thread "Server thread"`
  filter has in practice matched nothing and returned an empty profile — drop it if so).
- **Spikes:** `/spark profiler --only-ticks-over 100 --timeout 120` — records only ticks over 100 ms,
  so the whole profile *is* the lag cause.
- **Vitals:** `/spark tps` (1m/5m/15m TPS + MSPT mean/max/p95), `/spark gc` and `/spark healthreport`
  (GC pause frequency/length, heap).
- Attach the share link to the issue.

### Reading a profile
The share link's call tree renders client-side. For programmatic **per-mod self-time**, run
`tools/spark-selftime.py <bytebin-id>` (decodes the spark proto → self-time by mod + by method), or
use the web viewer's **Sources** view. **Substring frequency misleads** — a mod's class on the stack
usually means it *triggered* vanilla work below it, not that it burned cycles. Always rank by
self-time.

### Client frame (FPS) — see #98
F3 + the GPU% reading (GPU-bound vs CPU-bound is the first fork); NVIDIA overlay / CapFrameX for
**avg + 1% low** over ~60 s. RD32 / SIM16, no shaders, settled.

## Baseline (v0.6.0, settled, pre-generated)

**Server tick is vanilla-bound — there is no mod CPU hotspot.** Self-time:
- ~**73% vanilla Minecraft** — chunk management (`ServerChunkCache`, `ChunkMap`), entity ticking,
  `NaturalSpawner`, codec/NBT serialization.
- ~**20% JVM** — thread wait/lock + GC.
- **Every mod < ~0.6% self-time.** (Accessories/Cold Sweat appeared in stacks only as *serialized
  data* during chunk save, not as tick cost — a substring-frequency red herring.)

Baseline tick **~19-24 ms** settled, **TPS 20**. The pain is **spikes**, not the baseline:
- **Severe spikes** (293 ms / 746 ms / one 2110 ms) = **chunk-save serialization of Create /
  Aeronautics (Sable sub-level) block entities** → **#151**.
- **Medium spikes** = **mob-AI pathfinding** (Born in Chaos / Mowzie's / Grimoire of Gaia) → **#83**
  (first-pass spawn throttle landed). A `/kill @e` test dropped baseline only ~25%, confirming mobs
  are a topping, not the main cost.
- **GC:** young ~33 ms every ~3.3 s, allocation ~**1.5 GB/s** → **#48**. Not a TPS cause; shows up as
  client frame micro-stutter only.

**Caveat:** measured on the **integrated single-player** server (worst case). The dedicated box (own
thread) should be gentler — which is why the release gate (#205) verifies there.

**Client render: solved** — Sodium took the spawn frame **37 → 69 FPS, GPU 49% → 12%** (#98).

## Budget (gates release)

- **Server: 20 TPS** steady on the **dedicated** server under realistic load (built bases, airships,
  colonies); tick spikes localized and bounded.
- **Client: > 60 FPS average** at a built spawn, RD32 / SIM16, no shaders (#98).
- Re-measured each **stabilization** release (#200-204); the **v1.0.0** no-regression gate is **#205**.

Refs: #98 (client), #151 (chunk-save spikes), #83 (mob load), #48 (GC/RAM), #200-205 (re-checks).
