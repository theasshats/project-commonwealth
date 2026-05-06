// KubeJS Server Script - Reduce Hostile Mob Spawn Rates
// Place in kubejs/server_scripts/reduce_hostile_spawns.js
// IMPORTANT: Delete any old versions of this script first!
// Reload with /reload, check errors with /kubejs errors

// ============================================================
// CONFIGURATION
// ============================================================

const HOSTILE_REMOVE_CHANCE = 0.5
const PASSIVE_REMOVE_CHANCE = 0.3

// Set to true to log each discarded spawn (turn off after testing)
const DEBUG = true

const WHITELIST = [
  'minecraft:ender_dragon',
  'minecraft:wither',
  'minecraft:elder_guardian',
  'minecraft:warden',
  'minecraft:iron_golem',
  'minecraft:snow_golem',
  'minecraft:villager',
  'minecraft:wandering_trader',
  'minecraft:cat',
  'minecraft:wolf',
  'minecraft:horse',
  'minecraft:donkey',
  'minecraft:mule',
  'minecraft:player',
  'minecraft:armor_stand',
  // Add modded bosses here as you find them:
  // 'cataclysm:netherite_monstrosity',
]

const WHITELIST_SET = {}
for (let i = 0; i < WHITELIST.length; i++) {
  WHITELIST_SET[WHITELIST[i]] = true
}

// ============================================================
// Java class references
// ============================================================
const $Monster = Java.loadClass('net.minecraft.world.entity.monster.Monster')
const $Animal = Java.loadClass('net.minecraft.world.entity.animal.Animal')
const $WaterAnimal = Java.loadClass('net.minecraft.world.entity.animal.WaterAnimal')
const $AmbientCreature = Java.loadClass('net.minecraft.world.entity.ambient.AmbientCreature')

// ============================================================
// SCRIPT
// ============================================================

EntityEvents.spawned(event => {
  try {
    let entity = event.entity
    if (!entity) return

    // Skip non-living things (items, falling blocks, projectiles, etc.)
    // Quick filter: if it's not a Monster/Animal/WaterAnimal/AmbientCreature, skip
    let isHostile = entity instanceof $Monster
    let isPassive = (entity instanceof $Animal) ||
                    (entity instanceof $WaterAnimal) ||
                    (entity instanceof $AmbientCreature)

    if (!isHostile && !isPassive) return

    // Get type ID as a string
    let typeId = '' + entity.type

    // Whitelist check
    if (WHITELIST_SET[typeId]) return

    let removeChance = isHostile ? HOSTILE_REMOVE_CHANCE : PASSIVE_REMOVE_CHANCE

    if (Math.random() < removeChance) {
      entity.discard()
      if (DEBUG) console.log('[SpawnReduce] Discarded ' + typeId)
    }
  } catch (err) {
    console.error('[SpawnReduce] Error: ' + err)
  }
})

console.log('[SpawnReduce] Loaded')
