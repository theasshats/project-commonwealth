package com.derpack.arcana.bridge;

import com.derpack.arcana.Config;
import com.hollingsworth.arsnouveau.api.source.ISourceTile;
import com.hollingsworth.arsnouveau.api.source.ISpecialSourceProvider;
import com.hollingsworth.arsnouveau.api.util.SourceUtil;
import io.redspace.ironsspellbooks.api.magic.MagicData;
import net.minecraft.core.BlockPos;
import net.minecraft.core.HolderLookup;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.state.BlockState;

/**
 * The Attunement Font's bridge logic — BI-DIRECTIONAL, toggled by right-click (mode persisted in NBT):
 *   - SOURCE → MANA (default): drain nearby Ars Source, grant it as Iron's mana to the standing player.
 *   - MANA → SOURCE: spend the standing player's Iron's mana, add Source to a nearby provider with room.
 * Server-side only; acts once per {@link #INTERVAL_TICKS}. Uses only the two mods' verified static APIs
 * (Ars {@link SourceUtil} / {@link ISourceTile}; Iron's {@link MagicData}). Conversion rate is
 * config-gated ({@link Config#SOURCE_PER_MANA}); the same rate applies in both directions.
 */
public class AttunementFontBlockEntity extends BlockEntity {
    private static final int INTERVAL_TICKS = 20;   // act once per second
    private static final float MANA_PER_INTERVAL = 2.0f;
    private static final int RANGE = 5;

    private int timer;
    /** false = Source→mana (default); true = mana→Source. Toggled by right-click; persisted in NBT. */
    private boolean manaToSource = false;

    public AttunementFontBlockEntity(BlockPos pos, BlockState state) {
        super(ArsIronsBridge.ATTUNEMENT_FONT_BE.get(), pos, state);
    }

    public boolean isManaToSource() {
        return manaToSource;
    }

    public void toggleMode() {
        manaToSource = !manaToSource;
        setChanged();
    }

    @Override
    protected void saveAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.saveAdditional(tag, registries);
        tag.putBoolean("ManaToSource", manaToSource);
    }

    @Override
    protected void loadAdditional(CompoundTag tag, HolderLookup.Provider registries) {
        super.loadAdditional(tag, registries);
        manaToSource = tag.getBoolean("ManaToSource");
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
        // Source moved per interval (same rate both directions).
        int sourceAmount = Math.max(1, Config.SOURCE_PER_MANA.get() * (int) MANA_PER_INTERVAL);
        if (be.manaToSource) {
            storeManaAsSource(level, pos, magic, sourceAmount);
        } else {
            drawSourceAsMana(level, pos, magic, sourceAmount);
        }
    }

    /** SOURCE → MANA: take Source from a nearby provider that can pay in full, then top up the player. */
    private static void drawSourceAsMana(Level level, BlockPos pos, MagicData magic, int sourceAmount) {
        ISpecialSourceProvider provider = SourceUtil.takeSourceWithParticles(pos, level, RANGE, sourceAmount);
        if (provider != null) {
            magic.addMana(MANA_PER_INTERVAL);   // clamps to the player's max mana on Iron's side
        }
    }

    /** MANA → SOURCE: if the player has mana to spend, add Source to the first nearby provider with room. */
    private static void storeManaAsSource(Level level, BlockPos pos, MagicData magic, int sourceAmount) {
        if (magic.getMana() < MANA_PER_INTERVAL) {
            return;
        }
        for (ISpecialSourceProvider provider : SourceUtil.canGiveSource(pos, level, RANGE)) {
            ISourceTile tile = provider.getSource();
            if (tile == null || !tile.canAcceptSource()) {
                continue;
            }
            int room = tile.getMaxSource() - tile.getSource();
            if (room <= 0) {
                continue;
            }
            tile.addSource(Math.min(room, sourceAmount));
            magic.setMana(magic.getMana() - MANA_PER_INTERVAL);
            return;
        }
    }
}
