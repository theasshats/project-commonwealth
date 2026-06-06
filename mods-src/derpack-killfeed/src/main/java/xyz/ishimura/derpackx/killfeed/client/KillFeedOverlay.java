/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 *
 * The entry slide-in / hold / quintic slide-and-fade-out timing and the burst-collapse
 * (freeze / fastRemove) logic are ported from Superb Warfare's KillMessageOverlay
 * (GPL-3.0). SBW renders each entry as right-to-left icon segments (gun icon, damage
 * icon, dog tag); since this build has no such art, each entry is a single pre-rendered
 * text component instead, so the per-segment layout collapses to one drawString.
 */
package xyz.ishimura.derpackx.killfeed.client;

import com.mojang.blaze3d.platform.GlStateManager;
import com.mojang.blaze3d.systems.RenderSystem;
import net.minecraft.client.DeltaTracker;
import net.minecraft.client.Minecraft;
import net.minecraft.client.gui.Font;
import net.minecraft.client.gui.GuiGraphics;
import net.minecraft.client.gui.LayeredDraw;
import xyz.ishimura.derpackx.killfeed.Config;

import java.util.ArrayList;
import java.util.List;

public class KillFeedOverlay implements LayeredDraw.Layer {

    @Override
    public void render(GuiGraphics guiGraphics, DeltaTracker deltaTracker) {
        Minecraft mc = Minecraft.getInstance();
        if (mc.player == null || mc.options.hideGui) return;
        if (ClientKillFeed.QUEUE.isEmpty()) return;

        Config.Corner corner = Config.CORNER.get();
        boolean left = corner == Config.Corner.TOP_LEFT || corner == Config.Corner.BOTTOM_LEFT;
        boolean bottom = corner == Config.Corner.BOTTOM_LEFT || corner == Config.Corner.BOTTOM_RIGHT;

        int marginX = Config.MARGIN_X.get();
        int spacing = Config.LINE_SPACING.get();
        int screenWidth = guiGraphics.guiWidth();
        int screenHeight = guiGraphics.guiHeight();

        int posX = left ? marginX : screenWidth - marginX;
        float posY = bottom
                ? screenHeight - Config.MARGIN_Y.get() - 10f
                : Config.MARGIN_Y.get();

        float partialTick = deltaTracker.getGameTimeDeltaPartialTick(false);

        // --- Burst-collapse, ported from SBW KillMessageOverlay.render ---
        List<KillRecord> arr = new ArrayList<>(ClientKillFeed.QUEUE);
        KillRecord head = arr.get(0);
        if (head.freeze) {
            for (KillRecord r : arr) r.freeze = false;
        }
        if (head.tick >= 80 && arr.size() > 1
                && head.tick - arr.get(1).tick < (head.fastRemove ? 2 : 20)) {
            arr.get(1).fastRemove = true;
            head.fastRemove = true;
            for (int j = 1; j < arr.size(); j++) arr.get(j).freeze = true;
        }

        Font font = mc.font;
        for (KillRecord r : arr) {
            posY = renderEntry(r, guiGraphics, font, partialTick, posX, posY, left, bottom, spacing);
        }
    }

    /** Port of SBW renderKillMessages, reduced to a single text component per entry. */
    private float renderEntry(KillRecord record, GuiGraphics g, Font font, float partialTick,
                              int anchorX, float baseTop, boolean left, boolean bottom, int spacing) {
        float top = baseTop;
        int width = font.width(record.line);

        g.pose().pushPose();

        RenderSystem.disableDepthTest();
        RenderSystem.depthMask(false);
        RenderSystem.enableBlend();
        RenderSystem.blendFuncSeparate(
                GlStateManager.SourceFactor.ONE, GlStateManager.DestFactor.ONE,
                GlStateManager.SourceFactor.ONE, GlStateManager.DestFactor.ONE);

        // Slide-in for the first 3 ticks.
        if (record.tick < 3) {
            g.pose().translate((3 - record.tick - partialTick) * 33 * (left ? -1 : 1), 0f, 0f);
        }

        // After 4s (tick 80) slide out and fade with a quintic ease.
        if (record.tick >= 80) {
            int animationTickCount = record.fastRemove ? 2 : 20;
            float rate = (float) Math.pow((record.tick + partialTick - 80) / animationTickCount, 5.0);
            g.pose().translate(rate * 100 * (left ? -1 : 1), 0f, 0f);
            g.setColor(1f, 1f, 1f, 1 - rate);
            baseTop += spacing * (1 - rate) * (bottom ? -1 : 1);
        } else {
            baseTop += spacing * (bottom ? -1 : 1);
        }

        int x = left ? anchorX : anchorX - width;
        g.drawString(font, record.line, x, (int) top, 0xFFFFFFFF, true);

        RenderSystem.defaultBlendFunc();
        RenderSystem.disableBlend();
        RenderSystem.depthMask(true);
        RenderSystem.enableDepthTest();

        g.setColor(1f, 1f, 1f, 1f);
        g.pose().popPose();

        return baseTop;
    }
}
