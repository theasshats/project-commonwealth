/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 *
 * Attacker resolution (direct entity, or the owner of a projectile/ownable — what makes
 * ranged kills like guns and arrows attribute correctly) is ported from Superb Warfare's
 * LivingEventHandler kill path (GPL-3.0).
 */
package xyz.ishimura.derpackx.killfeed.server;

import net.minecraft.ChatFormatting;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.MutableComponent;
import net.minecraft.server.level.ServerPlayer;
import net.minecraft.world.damagesource.DamageSource;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.OwnableEntity;
import net.minecraft.world.entity.player.Player;
import net.minecraft.world.entity.projectile.Projectile;
import net.minecraft.world.item.ItemStack;
import net.neoforged.bus.api.SubscribeEvent;
import net.neoforged.neoforge.event.entity.living.LivingDeathEvent;
import net.neoforged.neoforge.network.PacketDistributor;
import xyz.ishimura.derpackx.killfeed.network.KillFeedPayload;

public class KillEventHandler {

    @SubscribeEvent
    public void onDeath(LivingDeathEvent event) {
        LivingEntity victim = event.getEntity();
        if (victim.level().isClientSide()) return;

        DamageSource source = event.getSource();
        LivingEntity attacker = resolveAttacker(source);

        boolean victimIsPlayer = victim instanceof Player;
        boolean killerIsPlayer = attacker instanceof ServerPlayer;
        // Player deaths and named-creature deaths are public; other player-made kills are private.
        boolean global = victimIsPlayer || victim.hasCustomName();

        if (!global && !killerIsPlayer) return;

        MutableComponent line = Component.literal("☠ ").withStyle(ChatFormatting.GRAY); // skull

        if (attacker != null && attacker != victim) {
            line.append(name(attacker, attacker instanceof Player));

            ItemStack weapon = attacker.getMainHandItem();
            boolean hasWeapon = killerIsPlayer && !weapon.isEmpty();
            line.append(Component.literal(hasWeapon ? " ⚔ " : " → ") // crossed swords / arrow
                    .withStyle(ChatFormatting.DARK_GRAY));
            if (hasWeapon) {
                line.append(Component.literal("[").withStyle(ChatFormatting.DARK_GRAY))
                        .append(weapon.getHoverName())
                        .append(Component.literal("] ").withStyle(ChatFormatting.DARK_GRAY));
            }
            line.append(name(victim, victimIsPlayer));
        } else {
            line.append(name(victim, victimIsPlayer));
            line.append(Component.literal(" died").withStyle(ChatFormatting.DARK_GRAY));
        }

        String label = DamageLabels.label(source.getMsgId());
        if (label != null) {
            line.append(Component.literal(" (").withStyle(ChatFormatting.DARK_GRAY))
                    .append(Component.literal(label).withStyle(ChatFormatting.GRAY))
                    .append(Component.literal(")").withStyle(ChatFormatting.DARK_GRAY));
        }

        KillFeedPayload payload = new KillFeedPayload(line);
        if (global) {
            PacketDistributor.sendToAllPlayers(payload);
        } else {
            PacketDistributor.sendToPlayer((ServerPlayer) attacker, payload);
        }
    }

    /** Port of SBW's attacker resolution: direct attacker, else the owner of a projectile/pet. */
    private static LivingEntity resolveAttacker(DamageSource source) {
        LivingEntity attacker = null;
        Entity sourceEntity = source.getEntity();
        if (sourceEntity instanceof LivingEntity living) {
            attacker = living;
        }
        Entity directEntity = source.getDirectEntity();
        if (directEntity instanceof Projectile projectile && projectile.getOwner() instanceof LivingEntity owner) {
            if (owner instanceof ServerPlayer) {
                attacker = owner;
            } else if (owner instanceof OwnableEntity ownable && ownable.getOwner() instanceof ServerPlayer) {
                attacker = owner;
            }
        }
        return attacker;
    }

    private static Component name(Entity entity, boolean isPlayer) {
        return entity.getDisplayName().copy().withStyle(isPlayer ? ChatFormatting.RED : ChatFormatting.GRAY);
    }
}
