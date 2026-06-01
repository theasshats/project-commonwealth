package com.derpack.arcana.bridge;

import com.derpack.arcana.Config;
import com.hollingsworth.arsnouveau.api.source.ISpecialSourceProvider;
import com.hollingsworth.arsnouveau.api.util.SourceUtil;
import io.redspace.ironsspellbooks.api.magic.MagicData;
import net.minecraft.core.BlockPos;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;

/**
 * Drains nearby Ars Nouveau Source and grants it as Iron's Spellbooks mana to the nearest standing
 * player. Server-side only; runs every {@link #INTERVAL_TICKS}. Uses only the two mods' static APIs:
 *   - {@link SourceUtil#takeSourceWithParticles} — pull source from a nearby provider (jar/relay).
 *   - {@link MagicData#getPlayerMagicData} + {@code addMana} — top up the player's mana.
 * Rate is config-gated ({@link Config#SOURCE_PER_MANA}). One-directional (source → mana) for the MVP.
 */
public class AttunementFontBlockEntity extends BlockEntity {
    private static final int INTERVAL_TICKS = 20;   // act once per second
    private static final float MANA_PER_INTERVAL = 2.0f;
    private static final int RANGE = 5;

    private int timer;

    public AttunementFontBlockEntity(BlockPos pos, BlockState state) {
        super(ArsIronsBridge.ATTUNEMENT_FONT_BE.get(), pos, state);
    }

    public static void serverTick(Level level, BlockPos pos, BlockState state, AttunementFontBlockEntity be) {
        if (++be.timer < INTERVAL_TICKS) {
            return;
        }
        be.timer = 0;
        if (!Config.SOURCE_MANA_BRIDGE.get()) {
            return;
        }

        Player player = level.getNearestPlayer(pos.getX() + 0.5, pos.getY() + 0.5, pos.getZ() + 0.5, RANGE, false);
        if (player == null) {
            return;
        }
        MagicData magic = MagicData.getPlayerMagicData(player);
        if (magic == null) {
            return;
        }

        // Cost in Source for this interval's mana grant; only proceed if a provider can pay it in full.
        int sourceCost = Math.max(1, Config.SOURCE_PER_MANA.get() * (int) MANA_PER_INTERVAL);
        ISpecialSourceProvider provider = SourceUtil.takeSourceWithParticles(pos, level, RANGE, sourceCost);
        if (provider != null) {
            // addMana clamps to the player's max mana on the Iron's side.
            magic.addMana(MANA_PER_INTERVAL);
        }
    }
}
