# The weave project — TL;DR (start here)

Plain-language orientation for anyone (esp. zagwar) who hasn't been following this. Everything below is
**proposal-only, on the `claude/weaving-plan` branch — nothing touches the live server or the pack.**

## What it is
A problem with the pack: lots of mods just *sit there* — they add items/mobs that don't plug into anything,
so the "scarcity → specialize → trade → economy" loop doesn't actually turn for much of the modlist. This
project maps, for **every** mod (~350), what it *should* connect to: a mob drop that should feed Occultism,
a metal that should be a Create input, a crop that should run a processing chain, etc. The goal is the
recipe graph reading as one or two connected webs instead of dozens of isolated islands.

## How it was done
An automated pass read every mod's profile and proposed cross-system connections, citing a shared list of
connection "types" (motifs). It ran the full modlist **35 times** so good ideas recur and one-off noise
filters out. Result: **~5,850 distinct proposed connections**, ~400 that came up strongly and consistently.
All written to files; **no recipes/configs changed.**

## The one big design call made along the way
**The economy is player-driven.** Nothing should be "sold to an NPC for coins" — a thing has value only
because *another player* needs it and can't make it themselves. That killed a whole category of lazy
"just sell it" suggestions and pushed everything toward real interdependence (you consume it, it's region-
locked, a colony makes it cheaper, you hire a specialist, it ages like wine, etc.). A few ideas that need
*new mechanics* rather than just recipes were split into their own GitHub issues (#238 food spoilage,
#239 tool wear, #240 player-run economy, #222 industry-damages-the-world) so they're tracked separately.

## Where it's at right now
- **Phase 2 (mapping): done.** The big proposal list exists (`CANDIDATES.tsv`) plus the updated connection
  vocabulary (`docs/WEAVE-LEDGER.md`, motifs M-01…M-38).
- **Phase 2.5 (triage): not started — this is the next step, and it needs human eyes.** The raw list is too
  big and noisy to act on. The plan is to go **mod by mod**, boil each down to a short "here are the 2-3
  things this mod should hook into" slate, and keep/cut. Mostly gut-check calls, but real volume — so it'll
  come in batches, not one dump. (Method: `TRIAGE-PLAN.md` in this folder.)
- **Phase 3 (actually building the kept weaves): later**, and only after we've signed off on what's worth it.

## What's NOT happening
- Nothing is live. Nothing in the pack changed. No PR is open.
- This isn't a commitment to build all 5,850 things — most get cut. It's a menu to pick from.

## If you only remember one thing
It's a giant "here's everything that *could* be connected" map, proposal-stage, waiting on us to pick the
keepers. No pressure and nothing at risk — just deciding which good ideas are worth building down the line.
