// Kill feed — a clean-room reimplementation of the feature we liked from Superb Warfare
// (GPL-3.0-only). No code is copied from that mod; this only reproduces the *idea* (broadcast a
// short line whenever a kill involves a player), which isn't copyrightable. So this ships under
// the pack's own terms and carries no GPL obligation.
//
// Scope on purpose: KubeJS can't draw Superb Warfare's corner-HUD overlay (that needs client-side
// rendering), so this is a server-side CHAT feed instead — one line, broadcast to everyone, only
// when a player is the killer or the victim (mob-on-mob deaths are skipped so it isn't spam).
// If we ever want the literal HUD overlay, that's a small custom client mod, not KubeJS.

EntityEvents.death(event => {
  const victim = event.entity
  if (!victim) return

  const server = victim.server
  if (!server) return // safety: only run server-side

  const source = event.source

  // The entity responsible for the kill (the player who shot, the mob that bit, …). May be null
  // for environmental deaths (fall, lava, drowning).
  let killer = null
  try { killer = source ? source.getEntity() : null } catch (ignored) { killer = null }

  const isPlayer = (e) => e && String(e.type) === 'minecraft:player'
  const victimIsPlayer = isPlayer(victim)
  const killerIsPlayer = isPlayer(killer)

  // Only surface kills that involve a player on at least one side.
  if (!victimIsPlayer && !killerIsPlayer) return

  // Don't double-report a player's own non-combat death as a "kill" line — but a player dying to a
  // mob, another player, or an environmental cause is all worth a feed entry.
  const feed = Component.empty()
  feed.append(Component.gray('☠ ')) // ☠

  if (killer && killer !== victim) {
    feed.append(killerIsPlayer ? Component.red(killer.displayName) : Component.gray(killer.displayName))

    // Show the killer's held item when it's a player (the "weapon"), if they have one.
    let weapon = null
    if (killerIsPlayer) {
      try {
        const held = killer.mainHandItem
        if (held && !held.isEmpty()) weapon = held.displayName
      } catch (ignored) { weapon = null }
    }
    feed.append(Component.darkGray(weapon ? ' ⚔ ' : ' → ')) // ⚔ with weapon, → without
    if (weapon) feed.append(Component.darkGray('[').append(weapon).append(Component.darkGray('] ')))

    feed.append(victimIsPlayer ? Component.red(victim.displayName) : Component.gray(victim.displayName))
  } else {
    // No killer entity — environmental death. Only report it for players.
    if (!victimIsPlayer) return
    feed.append(Component.red(victim.displayName))
    feed.append(Component.darkGray(' died'))
  }

  server.tell(feed)
})
