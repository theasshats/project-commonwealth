// Mining-speed tooltip — in-pack replacement for the removed Mining Speed Tooltips mod.
//
// That mod was cut in 0.6.3 along with txnilib, whose jar secretly bundled the broken
// Forgified Fabric API behind the death-screen disconnect (#286, #297), and the one
// replacement candidate surveyed (item-tooltips) doesn't show mining speed. This script
// is the whole feature: every mining tool (anything extending DiggerItem — pickaxes,
// axes, shovels, hoes, and modded paxels/hammers that subclass it) gets a tooltip line
// with its base mining speed, read from the `minecraft:tool` data component where
// 1.21.1 keeps it.
//
// API note (verified against the shipped kubejs-neoforge-2101.7.2-build.368 bytecode —
// the KubeJS 6 `ItemEvents.tooltip` event does NOT exist in the 1.21 rewrite and fails
// the script with "Unknown event"):
//   - `ItemEvents.modifyTooltips` (EventGroup.common) collects static per-ingredient
//     lines once per client reload — `event.add(ingredient, lines)`. Used here: base
//     mining speed is a property of the item TYPE, so one registry pass at reload
//     precomputes every line; hovering costs nothing extra.
//   - `ItemEvents.dynamicTooltips` (the per-hover event) requires a per-item-id target
//     (`requiredTarget(STRING)`, posted with the stack's id) — no global form, so it
//     would need the same registry enumeration anyway, plus per-hover work. Not used.
//
// Notes:
//   - Base speed only — Efficiency and haste are not folded in (matches the old mod).
//   - Swords and shears also carry tool components (cobweb/leaf speeds) but aren't
//     mining tools; the DiggerItem filter keeps the line off them on purpose.
//   - A digger's component keeps defaultMiningSpeed at 1.0 and carries the real tier
//     speed in its mineable-tag rule, so the fastest rule speed is the number shown.
//   - Defensive: per-item try/catch — one odd modded item skips its line, never breaks
//     the pass, and a tooltip can never crash the client.
//
// VERIFY IN PLAYTEST (static CI can't check this): iron pickaxe shows "Mining speed: 8",
// netherite 9; a sword/shears shows no line; a modded tool shows one; no kubejs errors
// in the client log on load or on hover.

const $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
const $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
const $DiggerItem = Java.loadClass('net.minecraft.world.item.DiggerItem')

ItemEvents.modifyTooltips(event => {
  $BuiltInRegistries.ITEM.forEach(item => {
    try {
      if (!(item instanceof $DiggerItem)) return
      const tool = item.components().get($DataComponents.TOOL)
      if (!tool) return
      let speed = tool.defaultMiningSpeed()
      tool.rules().forEach(rule => {
        const s = rule.speed()
        if (s.isPresent() && s.get() > speed) speed = s.get()
      })
      if (speed <= 1) return
      speed = Math.round(speed * 10) / 10
      const id = $BuiltInRegistries.ITEM.getKey(item).toString()
      event.add(id, [Text.gray(`Mining speed: ${speed}`)])
    } catch (err) {
      // swallow — worst case this one item is missing its line, never a load failure
    }
  })
})
