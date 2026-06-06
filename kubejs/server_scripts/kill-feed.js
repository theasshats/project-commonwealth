// Kill feed — a clean-room reimplementation of the feature we liked from Superb Warfare
// (GPL-3.0-only). No code is copied from that mod; this only reproduces the *idea* (announce a kill
// with a short line), which isn't copyrightable. So this ships under the pack's own terms and
// carries no GPL obligation. (Superb Warfare's version is a client-side HUD overlay driven by a
// custom server->client packet, with a fading queue and per-weapon/damage-type icons — none of
// which KubeJS can do. This is the KubeJS-feasible register: chat. A faithful HUD match would be a
// small custom client mod under GPL-3.0.)
//
// Visibility rule:
//   - A player death, or the death of a NAMED creature, is broadcast to everyone (global).
//   - Any other player-caused kill (a regular mob killed by a player) is sent only to the killer.
//   - Mob-on-mob deaths of unnamed creatures are ignored (no spam).

// Map a vanilla damage-source message id to a short label shown in the feed. Anything unmapped
// falls through to the raw id, so new/modded sources still read sensibly.
const DAMAGE_LABELS = {
  player: 'melee',
  mob: 'mauled',
  arrow: 'shot',
  trident: 'impaled',
  fireball: 'fireball',
  thrown: 'thrown',
  explosion: 'explosion',
  'explosion.player': 'explosion',
  fireworks: 'fireworks',
  fall: 'fall',
  'fall.assist': 'fall',
  flyIntoWall: 'kinetic',
  lava: 'lava',
  inFire: 'burned',
  onFire: 'burned',
  hotFloor: 'burned',
  lightningBolt: 'lightning',
  magic: 'magic',
  indirectMagic: 'magic',
  wither: 'wither',
  witherSkull: 'wither',
  thorns: 'thorns',
  drown: 'drowned',
  cactus: 'cactus',
  sweetBerryBush: 'berry bush',
  sting: 'stung',
  starve: 'starved',
  freeze: 'froze',
  fellOutOfWorld: 'the void',
  cramming: 'crammed',
  sonic_boom: 'sonic boom',
  dryout: 'dried out',
}

function damageLabel(source) {
  try {
    const id = source.getMsgId()
    if (!id) return null
    return DAMAGE_LABELS[id] || id
  } catch (ignored) {
    return null
  }
}

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
  const isNamed = (e) => {
    try { return e && e.hasCustomName() } catch (ignored) { return false }
  }

  const victimIsPlayer = isPlayer(victim)
  const killerIsPlayer = isPlayer(killer)
  const global = victimIsPlayer || isNamed(victim)

  // Skip unnamed mob deaths that no player caused — that's just ambient mob churn.
  if (!global && !killerIsPlayer) return

  const feed = Component.empty()
  feed.append(Component.gray('☠ ')) // ☠

  const dmg = damageLabel(source)

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
    // No killer entity — environmental death. (Reaches here only when global, i.e. a player or a
    // named creature, since unnamed ambient deaths were filtered above.)
    feed.append(victimIsPlayer ? Component.red(victim.displayName) : Component.gray(victim.displayName))
    feed.append(Component.darkGray(' died'))
  }

  // Append the damage type, e.g. "(explosion)".
  if (dmg) feed.append(Component.darkGray(' (').append(Component.gray(dmg)).append(Component.darkGray(')')))

  if (global) {
    server.tell(feed)
  } else {
    // Player-caused kill of a regular mob — show only to the killer.
    killer.tell(feed)
  }
})
