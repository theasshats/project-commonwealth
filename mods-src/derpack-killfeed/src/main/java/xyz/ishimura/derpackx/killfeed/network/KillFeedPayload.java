/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 */
package xyz.ishimura.derpackx.killfeed.network;

import net.minecraft.network.RegistryFriendlyByteBuf;
import net.minecraft.network.chat.Component;
import net.minecraft.network.chat.ComponentSerialization;
import net.minecraft.network.codec.StreamCodec;
import net.minecraft.network.protocol.common.custom.CustomPacketPayload;
import net.minecraft.resources.ResourceLocation;
import xyz.ishimura.derpackx.killfeed.DerpackKillFeed;

/** One fully-styled feed line, sent server -> client. */
public record KillFeedPayload(Component line) implements CustomPacketPayload {

    public static final Type<KillFeedPayload> TYPE =
            new Type<>(ResourceLocation.fromNamespaceAndPath(DerpackKillFeed.MODID, "kill_feed"));

    public static final StreamCodec<RegistryFriendlyByteBuf, KillFeedPayload> STREAM_CODEC =
            StreamCodec.composite(
                    ComponentSerialization.STREAM_CODEC, KillFeedPayload::line,
                    KillFeedPayload::new);

    @Override
    public Type<KillFeedPayload> type() {
        return TYPE;
    }
}
