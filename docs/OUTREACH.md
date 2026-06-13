# Project Commonwealth — Public-relations, community & launch strategy

> **Status: DRAFT for maintainer review** (Xela112233 + zagwar). This is the "PR" (public
> *relations*, not pull request) plan for the run-up to a public **1.0 / beta** release — positioning,
> audience, distribution, channels, cadence, and the launch sequence. It's a **planning doc** (like
> `ROADMAP.md` / `WEAVING-STRATEGY.md`), not player-facing copy, so it uses the normal internal
> formatting. Any *example player-facing copy* inside it is written in the professional plain-prose
> voice the real copy must use (`CLAUDE.md` → "Player-facing copy"), and is marked **(draft copy)**.
>
> **Why this exists.** The roadmap takes the pack from `v0.6.1` to `v1.0.0` across nine milestones —
> all of which are gameplay, performance, or infrastructure. **There is no outreach track anywhere in
> the plan, and no marketing/community milestone.** The pack decided to go public (`docs/DESIGN.md` →
> "Audience & distribution — now public") but nothing schedules the *going-public* work. This doc is
> that track.
>
> **Name note.** The name is **decided** — the pack will be **Project Commonwealth** (motto *Magna
> Communitas*; handle `pcmc`), and this strategy uses it throughout. The mechanical repo-wide rename
> (pack files, datapack namespace, repos, hostnames) is a **separate task tracked as #78**, not done
> here — so the repo itself still reads "Derpack X" until that lands.

---

## TL;DR

**The thesis.** Project Commonwealth has something most Create packs don't: a *design thesis* — an Eco-style
emergent player economy (scarcity → specialization → trade), with Create Aeronautics airships as the
visual hook. That thesis is the entire PR angle. Lead with **"the Create pack with a real player
economy,"** not **"another big Create pack."**

**The constraint that orders everything.** PR amplifies whatever state the pack is in, and the roadmap
**front-loads features (0.7–0.13) and back-loads the things that make a good first impression** —
wiki, in-game onboarding, perf freeze, even the pack's *name* (all 0.15 / 1.0). So the sequencing rule
is: **build a small following quietly now; hold the loud, wide push until the polish/perf milestones
land.** Going loud before then spends first-impression capital you can't get back.

**The five highest-leverage moves**, in order:

1. **Name — decided.** The pack will be **Project Commonwealth** (motto *Magna Communitas*; handle
   `pcmc`). The identity is locked, so every downstream asset — logo, store copy, trailer — can proceed.
   (The mechanical repo-wide rename is a separate task, #78, not done here.)
2. **Resolve the discoverability problem** (§3). The pack is invisible to the normal modded-MC discovery
   funnel (Modrinth/CurseForge browse). The CF-only license audit (§3) now clears the way — both a
   CurseForge and a Modrinth listing are viable — so this is the single biggest structural limiter on
   reach left undecided. Decide the path deliberately.
3. **Stand up the owned channels** — a real Discord and the existing site as a landing page — because
   if the storefront front-door is closed (it largely is, §3), discovery has to run through channels you
   control plus word-of-mouth.
4. **Build a screenshot/clip habit now.** Airships, regional vein biomes, colony+Create builds. They
   cost nothing during normal playtesting and they're the raw material for every later post, the store
   page, and the trailer.
5. **Court content creators near 1.0**, not before. A single mid-size YouTuber or streamer doing a
   "let's play" is worth more than any amount of self-posting — but only once the pack makes a good
   first impression (§9).

**Two open decisions this doc still needs** (the name is now decided — §5): the
**distribution/storefront path** (§3) and **how public to go, how early** (§6).

---

## 0. Reality check — the constraints that shape all of it

Be honest about the starting position; the strategy is built around these, not in spite of them.

- **Two-person volunteer team.** Every tactic here is weighed for leverage-per-hour. No campaign that
  needs a marketing budget or daily posting. Favor things that compound (a Discord, a screenshot habit,
  one good trailer) over things that need constant feeding.
- **Pre-alpha, and perf is the tightest budget.** The Sodium-via-Sable bridge is still a *trial* with a
  known invisible-textures failure mode (`CLAUDE.md`), and the stabilization-even milestones exist
  precisely because perf is fragile. **Broad-hardware support is a stated, first-class concern** now
  that strangers on unknown rigs will install it. A wide push before the pack boots reliably on mid
  hardware will generate exactly the wrong first impression.
- **Distribution is GitHub-release + a self-hosted site only** — no one-click storefront presence
  (§3). The install path (Prism + packwiz installer) is more involved than a Modrinth/CurseForge
  one-click import. That's friction at the top of the funnel.
- **The name is decided** — **Project Commonwealth** (motto *Magna Communitas*; handle `pcmc`).
  Branding, logo, store copy, and the trailer can be built on a locked identity. (The repo-wide rename
  itself is the separate #78 task, still pending — the repo reads "Derpack X" until it lands.)
- **The design targets ~10-person co-op groups, but the audience is now "anyone."** The economy is
  *load-bearing* by design — "nobody can do everything alone" (`docs/SYSTEMS.md`). For a server crew
  that's the whole appeal; for a soloist it can read as a *wall*. Positioning has to send the right
  players to the pack (§1–§2) so the design lands as a feature, not a frustration.

The throughline: **the pack is not yet in a state to amplify widely. The job between now and ~0.15 is
to get it there and to quietly build an audience that's ready when it is.**

---

## 1. Positioning — what Project Commonwealth is, in one line

Most Create packs are "kitchen sink, now with Create." Project Commonwealth's differentiator is that it's built
around *one idea* and every system serves it. That's the hook, and it's rare enough to lead with.

**The core identity:** a **cooperative Create pack where no one can build everything alone.** Regional
scarcity forces players to specialize, trade, and haul goods by airship — so a real player economy
*emerges* instead of being scripted in.

**Elevator pitch (draft copy):**

> Project Commonwealth is a cooperative Create modpack for small servers, built around one idea borrowed from the
> game Eco: no one can make everything. Ore is scarce and regional, so where you settle decides what you
> can build and what you have to trade for. One player runs a Create factory, another a MineColonies
> settlement, another the magic lines — and Create Aeronautics airships move the goods between them. The
> economy isn't a vendor menu bolted on; it's what the whole pack pushes you toward.

**Three angles, for three audiences** (use the one that fits the venue):

- **The design angle** (r/feedthebeast, modded-MC forums): the Eco-inspired systems loop — scarcity →
  pressure → production → economy. This crowd respects a pack with a thesis. `docs/SYSTEMS.md` is
  basically the press kit for this angle.
- **The spectacle angle** (anywhere visual — store page, trailer, social): **airships.** Create
  Aeronautics is the most screenshot-able thing in the pack and the easiest "what is this?" hook.
- **The server angle** (r/admincraft, server-list sites, Discord server-owner circles): "a pack
  *designed* for a co-op group, where trading and specialization happen on their own." This is the
  audience the design actually fits, and the one most likely to bring 5–10 players at once.

**Honesty in the positioning.** Say plainly, everywhere, that this is a pack **for groups / servers**,
not a singleplayer experience. It's not a disclaimer — it's *targeting*. It sends the right players in
(who'll love it) and keeps the wrong ones out (who'd bounce off the interdependence and leave a sour
review). The design doc's own framing — "tuned for small-group cooperative play (~10)" — is the line.

**Taglines (draft copy — pick one when the name lands):**

- "No one survives alone."
- "Specialize. Trade. Fly it home."
- "A Create pack with a real economy."

---

## 2. Audience — who this is for, and where they are

Concentric circles, innermost = best fit and easiest to reach:

1. **Small co-op server crews & their admins.** The bullseye. They bring multiple players at once and
   the design is built for them. **Where:** r/admincraft, r/feedthebeast, server-hosting Discords,
   Minecraft server-list sites, the Create Discord's server-promo channels.
2. **Create enjoyers who want more depth / a reason to build.** Large, active, visual community.
   **Where:** r/CreateMod, the official Create Discord, Create-focused YouTube/Twitch.
3. **"Designed pack" / GregTech-curious players** who like progression with a point and are tired of
   bloated kitchen-sink packs. The systems-loop thesis is aimed straight at them. **Where:**
   r/feedthebeast, modded-MC Discords, the Modrinth/CurseForge comment ecosystems.
4. **General modded-MC players** browsing for "the next pack." Largest pool, lowest intent, hardest to
   convert — and the one most gated by the discoverability problem (§3).

**Implication:** spend effort in--out. The crew/admin and Create audiences are reachable *without* a
storefront listing (they live in Reddit/Discord/YouTube), which matters a lot given §3. The general-pool
players are mostly reached *through* a storefront — the channel the pack currently can't use well.

---

## 3. The discoverability problem (decision needed)

**This is the most important structural finding in this doc.** The normal way a modded-MC player finds a
pack is browsing/searching **Modrinth or CurseForge**. Project Commonwealth is on **neither** — it ships as a
packwiz installer zip from GitHub Releases, surfaced via the self-hosted site. So the pack is invisible
to the single biggest discovery funnel in the ecosystem.

That was the right call for a private friend group (`docs/DESIGN.md` §4, #73 dropped the `.mrpack`). But
"public release, advertised on the open internet" changes the inputs. The hard part used to be **the
pack's own mod-sourcing** — but v0.7.1's re-sourcing and the license audit below have largely cleared it.

**The technical reality (measured — v0.7.1):**

- 345 mod manifests: **331 Modrinth-sourced, 12 CurseForge-sourced** (+2 self-hosted custom mods —
  `ars-n-spells`, `gtmogs`). **This changed in v0.7.1:** 20 mods were **re-sourced from CurseForge to
  Modrinth** — including the formerly-blocking `create-aeronautics-compatability` and the Sable/Create
  compat addons — dropping the CF-only set from 30 to **12**. So aeronautics-compat is **no longer a CF
  blocker**, and the only load-bearing CF-only mods left are the **MineColonies family**.
- A **Modrinth modpack** (`.mrpack`) index may only reference whitelisted CDNs — it **cannot** point at a
  CurseForge download. So each of the 12 CF-only jars would have to live on a whitelisted host (i.e. be
  uploaded to Modrinth). Whether that's *allowed* is a per-mod license question — audited below.
- A **CurseForge modpack** *can* reference CF mods directly (the 12 are already on CF) plus Modrinth mods
  that permit third-party distribution — so CF remains the **more straightforward storefront**, needing
  the *reverse* audit (which Modrinth authors forbid CF redistribution) rather than any rehosting.

**CF-only license audit — can the 12 be rehosted?** (declared jar license; the gating question for a
Modrinth listing.) Verified against v0.7.1's manifests — these are exactly its 12 CF-sourced mods:

| Mod(s) | License | Rehost / redistribute? |
|---|---|---|
| minecolonies, blockui, structurize, domum-ornamentum, multi-piston | GPL-3.0 | **Yes** — mirror unmodified + link source (ldtteam repos are public) |
| minecolonies-compatibility, minecolonies-tweaks | GPL-3.0 | **Yes**, but verify their source repos are public first (GPL needs source availability) |
| configured | LGPL-3.0 | **Yes** |
| veil-lib | LGPL-3.0 | **Yes** (same terms as the gtmogs fork) |
| dynamic-trees-ars-nouveau | MIT | **Yes**, unconditionally |
| stylecolonies | ARR | **No** — needs author permission |
| towntalk | ARR | **No** — needs author permission |

**What the audit changes:** **10 of the 12** CF-only mods are GPL/LGPL/MIT and **legally rehostable** (so
they could be uploaded to a whitelisted CDN for a `.mrpack` — shipping unmodified + linking source where
GPL requires). The only two holdouts are **`stylecolonies` and `towntalk`** (All-Rights-Reserved) — and
both are **optional MineColonies cosmetic/chat addons, not load-bearing**, so they can be dropped or have
permission asked. The old "can't drop Aeronautics-compat or MineColonies" blocker is **gone**:
aeronautics-compat is now Modrinth-sourced, and the MineColonies family is GPL (rehostable, not
drop-required).

**Modrinth-compatible sourcing (researched).** A `.mrpack` index isn't limited to Modrinth's own CDN —
the format **whitelists `github.com`, `raw.githubusercontent.com`, and `gitlab.com`** alongside
`cdn.modrinth.com`, so a jar hosted on any of those can be referenced **directly**, with no need to get
it onto Modrinth itself. (Other launchers may widen the list, but these are the safe set.) Mapping the 12
CF-only mods against that — same rows as the license audit, with the actual sourcing path:

| Mod(s) | License | Modrinth-compatible source |
|---|---|---|
| minecolonies, blockui, structurize, domum-ornamentum, multi-piston | GPL-3.0 | **Self-mirror** — not on Modrinth (page is 1.18.2 only); ldtteam ships CF + own maven, **no release jars**. Mirror to our own GitHub release (unmodified + source link) |
| minecolonies-compatibility, minecolonies-tweaks | GPL-3.0 | **Self-mirror** — same; verify source repos public first |
| configured (MrCrayfish) | LGPL-3.0 | **Self-mirror** — Modrinth `configured` is a *different* mod (`fooeyround`, MIT, server-side); MrCrayfish's isn't on Modrinth |
| veil-lib | LGPL-3.0 | **Self-mirror, don't swap** — pinned 4.1.3 fork; not on Modrinth (upstream Veil skips 4.1.3→goes 4.1.2/4.1.4); swapping risks the Sable bridge (`CLAUDE.md`) |
| dynamic-trees-ars-nouveau | MIT | **Own GitHub release** (DynamicTreesTeam) if it attaches jars — verify; else self-mirror (unconditional) |
| stylecolonies | ARR | **Blocked** — drop or ask author permission |
| towntalk | ARR | **Substitute** — Talking Colonists (Minecolonies Addon), on Modrinth, 1.21.1 (#342) |

**Net:** still no hard dead-end — the permissively-licensed mods can always be **self-mirrored** to a
whitelisted host, so the only true blockers are the 2 optional ARR addons. But the cost is higher than a
re-source: option A means **hosting our own mirror of ~10 GPL/LGPL/MIT jars** (none are cleanly on
Modrinth, and ldtteam offers no release-jar URL), not just repointing a few manifests.

**So the options are:**

| Path | What it takes | Verdict |
|---|---|---|
| **A. Modrinth listing** | Stand up our own whitelisted mirror (GitHub release) for ~10 GPL/LGPL/MIT jars — none are cleanly on Modrinth and ldtteam offers no release-jar URL; `dynamic-trees-ars-nouveau` may be referenceable from its own release; drop/substitute (#342) the 2 ARR addons | **No hard blocker, but real plumbing** — self-mirroring covers every permissive mod; only the 2 optional ARR addons need dropping/substituting. Cost is maintaining a ~10-jar mirror, not a format dead-end |
| **B. CurseForge listing** | Build a CF modpack export; reverse-audit that the 331 Modrinth mods permit CF distribution | **The most straightforward storefront** — the 12 CF-only mods are already on CF; open work is the Modrinth→CF audit + clunkier CF tooling |
| **C. Stay installer-native** | Accept no storefront browse; lean entirely on owned channels + creators + word-of-mouth (§4) | **The fallback** — still valid, but A is no longer ruled out, so this is a choice now, not a forced hand |

**Recommendation:** the CF-only audit + per-mod sourcing research (above) are now **done** — that removes
the biggest unknown. The sourcing dig tilted the balance toward **B (CurseForge)**: with the 12 CF-only
mods already hosted on CF, B only needs the reverse redistribution audit of the 331 Modrinth mods, whereas
**A (Modrinth)** now means **standing up and maintaining our own mirror of ~10 GPL/LGPL/MIT jars** (none
are cleanly on Modrinth, ldtteam publishes no release-jar URL, and `veil-lib`'s pinned fork can't be
swapped for upstream) plus handling the 2 ARR addons. A is still feasible — self-mirroring is legal and
the format allows it — but it's the higher-maintenance path for the larger funnel. Either beats drifting
into **C by inaction** — that's how the pack ends up public-but-undiscoverable. (#73's `.mrpack` drop was
about GitHub's 2 GiB asset cap + "nobody used it" — neither applies to a storefront listing.)

> Whichever path: a thin landing on the site with one-click-ish install instructions and a prominent
> "what is this" remains the canonical home, because it's the one channel that works regardless of
> storefront outcome.

---

## 4. Channels — ranked by leverage for *this* pack

Because the storefront front-door is largely closed (§3), the channels that *don't* need a listing carry
more weight than they would for a typical pack.

1. **Content creators (YouTube / Twitch).** Highest virality-per-unit-effort in modded MC, and it needs
   no storefront. One mid-size creator doing a series can do more than a year of self-posting. **But
   timing is everything** — pitch them only once the pack makes a good first impression (post-0.13,
   ideally near 1.0). A creator hitting a crash-on-world-create (the pack's own history — see 0.4.4/0.4.6
   in `PATCHNOTES.md`) is a disaster on camera. The airship spectacle is tailor-made for a thumbnail.
   *Tactic:* a short, no-friction "creator install + overview" page and a standing offer of a test
   server / direct support.
2. **Reddit.** r/feedthebeast (pack showcases, devlogs), r/CreateMod (the airship + Create-build
   spectacle), r/admincraft (the server angle). Free, high-intent, and where the bullseye audience
   already is. *Tactic:* a single strong "we built a Create pack with a real player economy" showcase
   post when there's something polished to show — not repeated low-effort posts.
3. **Owned Discord.** For a co-op/server pack, the community *is* part of the product. This is where
   crews coordinate, where feedback lands, and where early adopters become advocates. Stand it up early
   (it compounds), keep it small and real until there's something to invite people to. (#78's checklist
   already assumes a Discord exists — make it a real front door, not just a maintainer back-channel.)
4. **The site** (`derpack-org/derpack-site`, already shipped — #67). Owned, controllable, already has
   server status + the release download. Grow it into the canonical landing page: the pitch, the
   screenshots/trailer, install steps, and a link to Discord. The planned **in-site issue submission**
   (#77) doubles as a no-GitHub feedback channel.
5. **Modded-MC Discords & forums** (the Create server's promo channels, pack-discovery servers). Low
   effort, modest reach, good for the design-angle crowd.
6. **Storefront listing** (CurseForge, if §3-B is chosen). Would jump to #1–2 for raw reach if it
   happens, because it reopens the browse funnel. Ranked low here only because it's currently *blocked/
   undecided*, not because it's unimportant.

**What to skip:** paid ads, cross-posting spam, anything that needs daily cadence. Two people can't feed
it and it doesn't fit the audience.

---

## 5. Assets — what you need before going loud

Rough priority. "Blocking" = a wide push shouldn't happen without it.

> **Full production plan in [`docs/ASSETS.md`](ASSETS.md)** — exact specs per surface, the
> reference-image → brief workflow (zagwar's references drive the direction), tools, and sequencing.
> The table below is the summary; ASSETS.md is the how.

| Asset | Status / source | Priority |
|---|---|---|
| **The name** (#78) | **Decided — Project Commonwealth** (motto *Magna Communitas*, handle `pcmc`) | Decision made — unblocks logo, copy, trailer, store page. (Mechanical rename pending, #78.) |
| **A stable boot + perf baseline on mid hardware** | Sodium bridge is a trial; even-milestone work | **Blocking** for the loud push (§9). |
| **Screenshots / short clips** | Free byproduct of playtesting — start now | **High** — raw material for everything else. Airships, vein biomes, colony+Create builds. |
| **A tight store/landing description** | Draft in §1; finalize when named | **High** |
| **Logo / pack icon** | None yet | **High** — needed for any listing, the launcher, social. |
| **A 60–90s trailer** | None yet; assemble from the clip habit | **Medium** — high impact, do once near launch. Airships are the money shot. |
| **Player wiki** (#115) | Planned v0.15.0 | **Medium** — onboarding = retention = word-of-mouth. |
| **In-game onboarding / guide** (#148) | Planned v0.15.0 | **Medium** — first-30-minutes experience is what reviews are written about. |
| **No-GitHub feedback channel** (#77, Discord) | Site issue submission planned v0.15.0 | **Medium** |

**The pattern to notice:** the assets that most shape a first impression (wiki, onboarding, name, perf
freeze) are all clustered at **0.15 / 1.0** — the very end. That's fine *if* the loud push waits for
them, and it's the core reason for the sequencing rule (§6). The one cheap thing to start **today** is
the screenshot/clip habit; it has no dependencies and feeds every other asset.

---

## 6. Cadence — build in public, mapped to the odd/even rhythm (decision needed)

The roadmap's odd/even cadence is a *ready-made content calendar*:

- **Odd = feature pillars** (0.7 Create spine, 0.9 Economy & airships, 0.11 Magic, 0.13 Survival, 0.15
  Polish) — natural **"here's something new"** beats. A short devlog per pillar: what it is, a clip, the
  thinking behind it. The design-angle audience (§2) likes the *why*, and `docs/SYSTEMS.md` already
  writes most of it.
- **Even = stabilization** (0.8, 0.10, …) — natural **"now it's solid"** beats. Less flashy, but these
  are the releases that earn the "is it stable?" trust a wide audience needs.

**The 0.9 (Economy & logistics/aeronautics) milestone is the single best content beat** — it's where the
pack's two headline hooks (the emergent economy *and* the airships) both land. Plan the strongest devlog
push around it.

**The recommended posture (the decision):** **build in public, quietly, with a loud finish.**

- **Now → ~0.13:** low-key devlogs on each pillar to a small Discord + the occasional r/feedthebeast
  showcase when there's something genuinely shippable. Goal: seed a few hundred interested people and a
  clip library — *not* peak attention. Set expectations honestly ("pre-alpha, building toward a public
  1.0").
- **~0.15 → 1.0:** the polish/onboarding/perf work lands → assemble the trailer, finalize the store
  page/landing, and *then* do the wide push (creators, the big Reddit posts, the storefront listing if
  §3-B). This is when first impressions are good enough to spend.

The alternative postures, for the record: **(a) go dark until 1.0, then big-bang** — risks launching to
silence with no audience primed; **(b) go loud now** — burns first-impression capital on a perf-fragile,
unnamed pre-alpha. Build-in-public-with-a-loud-finish is the middle path and the one this doc
recommends, but it's the maintainers' call on appetite.

---

## 7. The 1.0 / beta launch sequence

When the pack is actually ready (0.15 done, perf frozen, named):

1. **Soft launch (T-2 to T-4 weeks).** Invite the primed Discord + a small set of trusted players/
   creators to a fresh world. Treat it as the final playtest at *audience* scale — fresh installs on
   varied hardware are exactly what the sandbox can't test (`CLAUDE.md` → "Green CI ≠ it loads"). Fix what
   surfaces. This is the real safety net against a bad public first impression.
2. **Assets final.** Trailer cut, landing page live, store listing (if any) submitted and *approved*
   (CF review can take days — don't let it gate launch day).
3. **Launch day.** Coordinated, not scattered: the r/feedthebeast + r/CreateMod + r/admincraft showcase
   posts, the site/Discord announcement, the storefront listing goes live, and any committed creators
   drop their videos in the same window. One concentrated wave beats a slow trickle.
4. **Be present for 72 hours.** The launch window is when bug reports and questions spike. Two people
   watching Discord/Reddit/issues and turning fixes fast is worth more than any pre-launch polish — a
   responsive maintainer is itself a selling point in modded MC.
5. **Capitalize on the wave.** Pin the good feedback, screenshot it for the site, and convert active
   players into Discord regulars / advocates. The first cohort is where word-of-mouth starts.

---

## 8. Community — for a co-op pack, it's part of the product

- **Discord is the hub.** Minimal structure to start: announcements, general, help/support,
  screenshots-and-builds (the airship/build crowd will fill it and that content *is* marketing), and a
  looking-for-group / server-recruitment channel (the design wants ~10-person crews — *help them
  form*). Don't over-engineer it.
- **A public or semi-public test server** is worth considering near 1.0. The pack's whole thesis —
  emergent trade between specialized players — **can only be felt with a group**, and a single soloist
  install will never experience it. A server where strangers can try the real loop is the most honest
  demo the pack has. (Weigh against the maintainers' hosting/moderation capacity — `ishimura` is a
  residential box.)
- **The feedback loop is a feature.** The no-GitHub suggestion channel (#77 / Discord) lowers the bar
  for non-developer players to be heard — exactly the audience a public release adds. Visible
  responsiveness compounds into reputation.
- **Mod-author goodwill.** Already handled structurally — packwiz means no jar redistribution
  (`docs/DESIGN.md` §4), which keeps the pack on the right side of mod licenses. Worth *crediting* mods
  prominently on the site/listing; it's cheap goodwill in a community that watches for it.

---

## 9. Risks & honesty

- **First impressions in modded MC are brutal and permanent.** A crash on world-create, invisible
  textures (the live Sodium-bridge failure mode), or 20 FPS at spawn = uninstall + a public negative.
  The pack has *already shipped a world-create crash once* (0.4.4 → fixed 0.4.6). **This is the #1
  argument for the sequencing rule** (§6): don't aim attention at the pack until it boots clean on mid
  hardware.
- **Perf on unknown hardware is the make-or-break variable.** "Broad-hardware support" is a stated goal;
  the wide push must wait for the even-milestone perf work and a real baseline. Be upfront about system
  requirements (the install docs already ship a RAM-to-heap table — surface it).
- **Don't overpromise the pre-alpha.** "Building toward a public 1.0" is an honest, appealing frame.
  "The best Create pack ever" is a setup for disappointment and violates the no-hype copy rule
  (`CLAUDE.md`). The professional-prose voice isn't just for patch notes — it's a trust signal.
- **The interdependence cuts both ways.** A soloist who installs it expecting a normal pack will hit the
  "can't do everything alone" design as a wall. **Mitigated by positioning** (§1) — relentlessly frame
  it as a *group/server* pack so the wrong players self-select out before they leave a review.
- **Scope discipline.** Two people can't run a campaign. Every tactic here is chosen to compound or to
  be a one-time effort. The failure mode is committing to a cadence (daily posts, weekly streams) that
  can't be sustained and dies visibly.

---

## 10. Action plan — now → 1.0

**Now (during 0.7 Create spine):**
- [x] **Name decided — Project Commonwealth** (motto *Magna Communitas*, handle `pcmc`). Identity work (logo, store copy, trailer) is unblocked. (Mechanical repo-wide rename: separate #78 task, not done here.)
- [ ] **Start the screenshot/clip habit** — capture during every playtest. Zero dependencies, feeds
      everything.
- [x] **CF-only license audit done** (§3) — the 12 CF-only mods are 10 rehostable (GPL/LGPL/MIT) + 2 ARR
      addons (`stylecolonies`, `towntalk`, droppable). Reopened option A.
- [ ] **Scope the remaining distribution decision** (§3) — for option B, the reverse spike (how many of
      the 331 Modrinth mods forbid CF redistribution?); for option A, the rehost effort. Then pick A/B/C.
- [ ] **Make the Discord a real front door** — minimal channels, set up to grow.

**Mid (0.9 Economy & airships — the best content beat):**
- [ ] First substantive devlog(s): the emergent economy + airships. Strongest push of the build-out.
- [ ] Grow the site into a landing page (pitch + clips + install + Discord link).

**Late (0.15 Polish & 1.0):**
- [ ] Wiki (#115) + in-game onboarding (#148) — the retention/first-impression assets.
- [ ] Trailer cut from the clip library; logo; final store/landing copy.
- [ ] Perf baseline confirmed on mid hardware → green-light the wide push.
- [ ] Run the launch sequence (§7).

**Tracking.** There's no outreach track on GitHub today. Recommend either a few issues under the
existing **v0.15.0 (Polish & site)** milestone — which already houses the wiki/onboarding/site work —
plus **Backlog / living** for the ongoing-cadence items, **or** a dedicated "Launch / outreach"
milestone if the maintainers want it visible as its own bar. Concretely, candidate issues: *name
decision (pull #78 forward)*, *distribution/storefront spike (§3)*, *Discord + site landing page*,
*screenshot/clip library*, *trailer*, *creator-outreach list + kit*, *launch runbook (§7)*. (I can file
these on request — not filing unprompted, per `CLAUDE.md`.)

---

_Refs: `docs/DESIGN.md` (public-distribution decision, why-packwiz, #73 `.mrpack` drop), `docs/SYSTEMS.md`
(the Eco systems loop — the press kit for the design angle), `docs/ROADMAP.md` (the odd/even cadence =
the content calendar), `docs/PATCHNOTES.md` (the professional player-facing voice), `CLAUDE.md`
(player-facing-copy rule, perf/Sodium caveats, "green CI ≠ it loads"). Related issues: #78 (rename —
release-blocking), #115 (wiki), #148 (onboarding), #77 (in-site feedback), #67 (site — shipped)._
