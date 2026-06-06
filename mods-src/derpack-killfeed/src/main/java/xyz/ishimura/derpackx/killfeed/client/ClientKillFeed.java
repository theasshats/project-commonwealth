/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 * Queue + aging ported from Superb Warfare's KillMessageHandler (GPL-3.0).
 */
package xyz.ishimura.derpackx.killfeed.client;

import net.minecraft.network.chat.Component;
import xyz.ishimura.derpackx.killfeed.Config;

import java.util.ArrayDeque;
import java.util.Queue;

/**
 * Holds the live feed entries and ages them once per client tick. The timing
 * constants (tick 82 fast-remove / tick 100 expiry, the freeze guard) are SBW's.
 */
public final class ClientKillFeed {

    public static final Queue<KillRecord> QUEUE = new ArrayDeque<>();

    public static void add(Component line) {
        QUEUE.add(new KillRecord(line));
        // Cap the backlog so a kill streak can't grow the queue without bound.
        while (QUEUE.size() > Config.MAX_LINES.get()) {
            QUEUE.poll();
        }
    }

    /** Port of SBW KillMessageHandler.onClientTick. */
    public static void tick() {
        // Iterating the same way SBW does: age everything, then poll the head when it expires.
        for (KillRecord record : QUEUE) {
            if (record.freeze && record.tick >= 3) {
                continue;
            }
            record.tick++;
            if ((record.fastRemove && record.tick >= 82) || record.tick >= 100) {
                QUEUE.poll();
            }
        }
    }

    private ClientKillFeed() {}
}
