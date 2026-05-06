// KubeJS Server Script - Reduce Hostile Mob Spawn Rates
// Place in kubejs/server_scripts/reduce_hostile_spawns.js
// Delete any old versions first!

// ============================================================
// CONFIGURATION
// ============================================================

const HOSTILE_REMOVE_CHANCE = 0.5
const PASSIVE_REMOVE_CHANCE = 0.3

const DEBUG = false

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
]

const WHITELIST_SET = {}
for (let i = 0; i < WHITELIST.length; i++) {
  WHITELIST_SET[WHITELIST[i]] = true
}

// ============================================================
// Registry lookup for getting MobCategory from entity type ID
// ============================================================
const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')

const categoryCache = {}

function getCategoryForType(typeId) {
  if (categoryCache[typeId] !== undefined) return categoryCache[typeId]

  try {
    let rl = $ResourceLocation.parse(typeId)
    let entityType = $BuiltInRegistries.ENTITY_TYPE.get(rl)
    if (entityType) {
      let cat = '' + entityType.getCategory()
      categoryCache[typeId] = cat
      return cat
    }
  } catch (e) {
    // ignore
  }

  categoryCache[typeId] = 'UNKNOWN'
  return 'UNKNOWN'
}

// ============================================================
// SCRIPT
// ============================================================

EntityEvents.checkSpawn(event => {
  // Determine if we should cancel - do all logic first, cancel last
  let shouldCancel = false
  let typeId = ''
  let category = ''

  try {
    let entity = event.entity
    if (!entity) return

    typeId = '' + entity.type

    if (WHITELIST_SET[typeId]) return

    let spawnType = '' + event.type
    if (spawnType !== 'NATURAL' && spawnType !== 'CHUNK_GENERATION') return

    category = getCategoryForType(typeId)

    if (category === 'MISC' || category === 'UNKNOWN') return

    let removeChance = 0
    if (category === 'MONSTER') {
      removeChance = HOSTILE_REMOVE_CHANCE
    } else {
      removeChance = PASSIVE_REMOVE_CHANCE
    }

    if (Math.random() < removeChance) {
      shouldCancel = true
    }
  } catch (err) {
    console.error('[SpawnReduce] Error: ' + err)
  }

  // Cancel OUTSIDE try/catch so EventExit exception propagates
  if (shouldCancel) {
    if (DEBUG) console.log('[SpawnReduce] Cancelled ' + typeId + ' (' + category + ')')
    event.cancel()
  }
})

console.log('[SpawnReduce] Loaded (checkSpawn + registry lookup)')
