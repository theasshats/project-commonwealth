/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 */
package xyz.ishimura.derpackx.killfeed;

import net.neoforged.neoforge.common.ModConfigSpec;

/** Client-side display options. Mirrors Superb Warfare's KillMessageConfig (position + margins). */
public final class Config {

    public enum Corner { TOP_RIGHT, TOP_LEFT, BOTTOM_RIGHT, BOTTOM_LEFT }

    public static final ModConfigSpec SPEC;
    public static final ModConfigSpec.EnumValue<Corner> CORNER;
    public static final ModConfigSpec.IntValue MARGIN_X;
    public static final ModConfigSpec.IntValue MARGIN_Y;
    public static final ModConfigSpec.IntValue LINE_SPACING;
    public static final ModConfigSpec.IntValue MAX_LINES;

    static {
        ModConfigSpec.Builder b = new ModConfigSpec.Builder();
        b.push("display");
        CORNER = b.comment("Which screen corner the kill feed anchors to.")
                .defineEnum("corner", Corner.TOP_RIGHT);
        MARGIN_X = b.comment("Horizontal margin from the screen edge, in pixels.")
                .defineInRange("marginX", 4, 0, 2000);
        MARGIN_Y = b.comment("Vertical margin from the screen edge, in pixels.")
                .defineInRange("marginY", 4, 0, 2000);
        LINE_SPACING = b.comment("Vertical gap between entries, in pixels.")
                .defineInRange("lineSpacing", 11, 9, 40);
        MAX_LINES = b.comment("Maximum entries shown at once.")
                .defineInRange("maxLines", 6, 1, 20);
        b.pop();
        SPEC = b.build();
    }

    private Config() {}
}
