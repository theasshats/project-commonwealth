/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 */
package xyz.ishimura.derpackx.killfeed.network;

import net.neoforged.api.distmarker.Dist;
import net.neoforged.fml.loading.FMLEnvironment;
import net.neoforged.neoforge.network.event.RegisterPayloadHandlersEvent;
import net.neoforged.neoforge.network.registration.PayloadRegistrar;
import xyz.ishimura.derpackx.killfeed.client.ClientKillFeed;

public final class NetworkHandler {

    public static void register(RegisterPayloadHandlersEvent event) {
        PayloadRegistrar registrar = event.registrar("1");
        // The payload type must be registered identically on both sides; only the receiving
        // (client) handler does anything. The client class is referenced solely inside the
        // CLIENT branch so the dedicated server never classloads it.
        if (FMLEnvironment.dist == Dist.CLIENT) {
            registrar.playToClient(KillFeedPayload.TYPE, KillFeedPayload.STREAM_CODEC,
                    (payload, context) -> context.enqueueWork(
                            () -> ClientKillFeed.add(payload.line())));
        } else {
            registrar.playToClient(KillFeedPayload.TYPE, KillFeedPayload.STREAM_CODEC,
                    (payload, context) -> {});
        }
    }

    private NetworkHandler() {}
}
