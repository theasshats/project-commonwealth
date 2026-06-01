package com.derpack.arcana.bridge;

import com.derpack.arcana.Config;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.item.ItemEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.item.Items;
import net.neoforged.neoforge.common.NeoForge;
import net.neoforged.neoforge.event.entity.living.LivingDropsEvent;

/**
 * P3 — Soul Reaping. Weaves Born in Chaos's necromancy into Occultism's spirit economy at the
 * gameplay level: slaying a Born in Chaos mob has a chance to yield Occultism spirit essence, so the
 * dark-mob mod feeds the occult progression in-world (complementing the crafting-bench bridge in the
 * magic web). Implemented with a plain {@link LivingDropsEvent} + a namespace check + an item-registry
 * lookup, so it needs NO compile-time dependency on either mod — it just no-ops if the essence item or
 * Born-in-Chaos mobs aren't present.
 */
public final class SoulReaping {
    private static final String BIC_NAMESPACE = "born_in_chaos_v1";
    private static final ResourceLocation ESSENCE_ID =
        ResourceLocation.fromNamespaceAndPath("occultism", "demons_dream_essence");

    public static void register() {
        NeoForge.EVENT_BUS.addListener(SoulReaping::onLivingDrops);
        com.derpack.arcana.DerpackArcana.LOGGER.info("[Derpack Arcana] P3 soul reaping active (Born in Chaos -> Occultism essence).");
    }

    private static void onLivingDrops(LivingDropsEvent event) {
        if (!Config.BORN_IN_CHAOS_SOUL_REAP.get()) {
            return;
        }
        LivingEntity dead = event.getEntity();
        // Only Born in Chaos mobs, and only on a player kill (reaping is the player's doing).
        ResourceLocation typeKey = BuiltInRegistries.ENTITY_TYPE.getKey(dead.getType());
        if (!BIC_NAMESPACE.equals(typeKey.getNamespace())) {
            return;
        }
        Entity killer = event.getSource().getEntity();
        if (!(killer instanceof Player)) {
            return;
        }
        if (dead.getRandom().nextDouble() >= Config.SOUL_REAP_CHANCE.get()) {
            return;
        }
        Item essence = BuiltInRegistries.ITEM.get(ESSENCE_ID);
        if (essence == Items.AIR) {
            return; // occultism absent — nothing to reap
        }
        ItemEntity drop = new ItemEntity(dead.level(), dead.getX(), dead.getY(), dead.getZ(), new ItemStack(essence, 1));
        event.getDrops().add(drop);
    }

    private SoulReaping() {}
}
