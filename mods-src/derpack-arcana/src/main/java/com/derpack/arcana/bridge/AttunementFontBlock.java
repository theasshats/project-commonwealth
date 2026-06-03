package com.derpack.arcana.bridge;

import com.mojang.serialization.MapCodec;
import net.minecraft.core.BlockPos;
import net.minecraft.network.chat.Component;
import net.minecraft.world.InteractionResult;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.BaseEntityBlock;
import net.minecraft.world.level.block.RenderShape;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityTicker;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;
import net.minecraft.world.phys.BlockHitResult;

/**
 * The Attunement Font — a placed converter that bridges Ars Nouveau Source and Iron's Spellbooks mana
 * for a standing player. Right-click toggles the direction (Source→mana ⇄ mana→Source); all the actual
 * conversion lives in {@link AttunementFontBlockEntity}.
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

    /** Right-click (empty hand) flips the conversion direction; feedback goes to the action bar. */
    @Override
    protected InteractionResult useWithoutItem(BlockState state, Level level, BlockPos pos, Player player, BlockHitResult hit) {
        if (!level.isClientSide && level.getBlockEntity(pos) instanceof AttunementFontBlockEntity be) {
            be.toggleMode();
            player.displayClientMessage(Component.translatable(be.isManaToSource()
                ? "block.derpackarcana.attunement_font.mode.mana_to_source"
                : "block.derpackarcana.attunement_font.mode.source_to_mana"), true);
        }
        return InteractionResult.SUCCESS;
    }

    @Override
    public <T extends BlockEntity> BlockEntityTicker<T> getTicker(Level level, BlockState state, BlockEntityType<T> type) {
        if (level.isClientSide) {
            return null;
        }
        return createTickerHelper(type, ArsIronsBridge.ATTUNEMENT_FONT_BE.get(), AttunementFontBlockEntity::serverTick);
    }
}
