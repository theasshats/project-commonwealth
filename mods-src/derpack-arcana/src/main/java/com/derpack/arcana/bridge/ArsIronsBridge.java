package com.derpack.arcana.bridge;

import com.derpack.arcana.DerpackArcana;
import net.minecraft.core.registries.Registries;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.CreativeModeTabs;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.MapColor;
import net.minecraft.world.level.material.PushReaction;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent;
import net.neoforged.neoforge.registries.DeferredBlock;
import net.neoforged.neoforge.registries.DeferredHolder;
import net.neoforged.neoforge.registries.DeferredItem;
import net.neoforged.neoforge.registries.DeferredRegister;

/**
 * P1 — the Source ⇄ mana bridge. Holds the registrations for the Attunement Font and wires them onto
 * the mod bus. This class (and everything it references — the block/BE that touch Ars + Iron's API)
 * is only ever loaded from {@link com.derpack.arcana.DerpackArcana} <em>inside</em> a
 * {@code loaded("ars_nouveau") && loaded("irons_spellbooks")} guard, so the JVM never classloads an
 * absent-mod type. All Ars/Iron's access is via their static API (no class extension).
 */
public final class ArsIronsBridge {
    public static final DeferredRegister.Blocks BLOCKS = DeferredRegister.createBlocks(DerpackArcana.MODID);
    public static final DeferredRegister.Items ITEMS = DeferredRegister.createItems(DerpackArcana.MODID);
    public static final DeferredRegister<BlockEntityType<?>> BLOCK_ENTITIES =
        DeferredRegister.create(Registries.BLOCK_ENTITY_TYPE, DerpackArcana.MODID);

    public static final DeferredBlock<AttunementFontBlock> ATTUNEMENT_FONT =
        BLOCKS.registerBlock("attunement_font", AttunementFontBlock::new,
            BlockBehaviour.Properties.of()
                .mapColor(MapColor.COLOR_PURPLE)
                .strength(2.0f)
                .requiresCorrectToolForDrops()
                .pushReaction(PushReaction.BLOCK));

    public static final DeferredItem<BlockItem> ATTUNEMENT_FONT_ITEM =
        ITEMS.registerSimpleBlockItem("attunement_font", ATTUNEMENT_FONT);

    public static final DeferredHolder<BlockEntityType<?>, BlockEntityType<AttunementFontBlockEntity>> ATTUNEMENT_FONT_BE =
        BLOCK_ENTITIES.register("attunement_font",
            () -> BlockEntityType.Builder.of(AttunementFontBlockEntity::new, ATTUNEMENT_FONT.get()).build(null));

    public static void init(IEventBus modBus) {
        BLOCKS.register(modBus);
        ITEMS.register(modBus);
        BLOCK_ENTITIES.register(modBus);
        modBus.addListener(ArsIronsBridge::addToCreativeTab);
        DerpackArcana.LOGGER.info("[Derpack Arcana] P1 Source<->mana bridge active — Attunement Font registered.");
    }

    private static void addToCreativeTab(BuildCreativeModeTabContentsEvent event) {
        if (event.getTabKey() == CreativeModeTabs.FUNCTIONAL_BLOCKS) {
            event.accept(ATTUNEMENT_FONT_ITEM.get());
        }
    }

    private ArsIronsBridge() {}
}
