package com.derpack.arcana.bridge;

import com.mojang.serialization.MapCodec;
import net.minecraft.core.BlockPos;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.BaseEntityBlock;
import net.minecraft.world.level.block.RenderShape;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityTicker;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;

/**
 * The Attunement Font — a placed converter that drains nearby Ars Nouveau Source and feeds it to a
 * standing player's Iron's Spellbooks mana. All the actual bridging lives in the block entity.
 */
public class AttunementFontBlock extends BaseEntityBlock {
    public static final MapCodec<AttunementFontBlock> CODEC = simpleCodec(AttunementFontBlock::new);

    public AttunementFontBlock(Properties properties) {
        super(properties);
    }

    @Override
    protected MapCodec<? extends BaseEntityBlock> codec() {
        return CODEC;
    }

    @Override
    public BlockEntity newBlockEntity(BlockPos pos, BlockState state) {
        return new AttunementFontBlockEntity(pos, state);
    }

    @Override
    public RenderShape getRenderShape(BlockState state) {
        return RenderShape.MODEL;
    }

    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {
        if (level.isClientSide) {
            return null;
        }
        return createTickerHelper(type, ArsIronsBridge.ATTUNEMENT_FONT_BE.get(), AttunementFontBlockEntity::serverTick);
    }
}
