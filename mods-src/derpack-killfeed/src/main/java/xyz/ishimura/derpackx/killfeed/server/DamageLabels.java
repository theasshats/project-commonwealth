/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 */
package xyz.ishimura.derpackx.killfeed.server;

import java.util.Map;

/**
 * Maps a vanilla damage-source message id to a short label shown in the feed.
 * SBW renders these as icons (which are art, not GPL code, so not reused here);
 * we use words instead. Unmapped ids fall through to the raw id.
 */
public final class DamageLabels {

    private static final Map<String, String> LABELS = Map.ofEntries(
            Map.entry("player", "melee"),
            Map.entry("mob", "mauled"),
            Map.entry("arrow", "shot"),
            Map.entry("trident", "impaled"),
            Map.entry("fireball", "fireball"),
            Map.entry("thrown", "thrown"),
            Map.entry("explosion", "explosion"),
            Map.entry("explosion.player", "explosion"),
            Map.entry("fireworks", "fireworks"),
            Map.entry("fall", "fall"),
            Map.entry("flyIntoWall", "kinetic"),
            Map.entry("lava", "lava"),
            Map.entry("inFire", "burned"),
            Map.entry("onFire", "burned"),
            Map.entry("hotFloor", "burned"),
            Map.entry("lightningBolt", "lightning"),
            Map.entry("magic", "magic"),
            Map.entry("indirectMagic", "magic"),
            Map.entry("wither", "wither"),
            Map.entry("witherSkull", "wither"),
            Map.entry("thorns", "thorns"),
            Map.entry("drown", "drowned"),
            Map.entry("cactus", "cactus"),
            Map.entry("sweetBerryBush", "berry bush"),
            Map.entry("sting", "stung"),
            Map.entry("starve", "starved"),
            Map.entry("freeze", "froze"),
            Map.entry("fellOutOfWorld", "the void"),
            Map.entry("cramming", "crammed"),
            Map.entry("sonic_boom", "sonic boom"),
            Map.entry("dryout", "dried out"));

    public static String label(String msgId) {
        if (msgId == null) return null;
        return LABELS.getOrDefault(msgId, msgId);
    }

    private DamageLabels() {}
}
