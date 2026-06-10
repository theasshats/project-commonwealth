// Mining-speed tooltip — in-pack replacement for the removed Mining Speed Tooltips mod.
//
// That mod was cut in 0.6.3 along with txnilib, whose jar secretly bundled the broken
// Forgified Fabric API behind the death-screen disconnect (#286, #297), and the one
// replacement candidate surveyed (item-tooltips) doesn't show mining speed. This script
// is the whole feature: hovering a mining tool (anything extending DiggerItem — pickaxes,
// axes, shovels, hoes, and modded paxels/hammers that subclass it) appends the tool's
// base mining speed, read from the `minecraft:tool` data component where 1.21.1 keeps it.
//
// Notes:
//   - Base speed only — Efficiency and haste are not folded in (matches the old mod).
//   - Swords and shears also carry tool components (cobweb/leaf speeds) but aren't mining
//     tools; the DiggerItem filter keeps the line off them on purpose.
//   - A digger's component keeps defaultMiningSpeed at 1.0 and carries the real tier
//     speed in its mineable-tag rule, so the fastest rule speed is the number shown.
//   - Defensive: any failure skips the line silently — a tooltip must never crash a client.
//
// VERIFY IN PLAYTEST (static CI can't check this): iron pickaxe shows "Mining speed: 8",
// netherite 9; a sword/shears shows no line; a modded tool shows one; no kubejs errors
// in the client log on load or on hover.

const $DataComponents = Java.loadClass('net.minecraft.core.component.DataComponents')
const $DiggerItem = Java.loadClass('net.minecraft.world.item.DiggerItem')

ItemEvents.tooltip(tooltip => {
  tooltip.addAdvanced('*', (stack, advanced, text) => {
    try {
      if (!(stack.item instanceof $DiggerItem)) return
      const tool = stack.get($DataComponents.TOOL)
      if (!tool) return
      let speed = tool.defaultMiningSpeed()
      tool.rules().forEach(rule => {
        const s = rule.speed()
        if (s.isPresent() && s.get() > speed) speed = s.get()
      })
      if (speed <= 1) return
      speed = Math.round(speed * 10) / 10
      text.add(Text.gray(`Mining speed: ${speed}`))
    } catch (err) {
      // swallow — worst case the line is missing, never a render crash
    }
  })
})
