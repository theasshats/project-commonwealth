/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 * Adapted from Superb Warfare's tools/LivingKillRecord (GPL-3.0): the per-entry
 * animation bookkeeping (tick / freeze / fastRemove). The entity/weapon/damage-type
 * fields are replaced with pre-rendered text components, since this build doesn't
 * carry SBW's guns, dog tags, or custom damage types.
 */
package xyz.ishimura.derpackx.killfeed.client;

import net.minecraft.network.chat.Component;

/** A single line in the feed, plus the animation state SBW uses to slide/fade it. */
public class KillRecord {
    public final Component line;

    // Animation bookkeeping, ported from SBW's LivingKillRecord.
    public int tick = 0;
    public boolean freeze = false;
    public boolean fastRemove = false;

    public KillRecord(Component line) {
        this.line = line;
    }
}
