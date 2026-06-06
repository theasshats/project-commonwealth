/*
 * Derpack Kill Feed — GPL-3.0-only. See LICENSE.
 */
package xyz.ishimura.derpackx.killfeed.client;

import net.minecraft.resources.ResourceLocation;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.neoforge.client.event.ClientTickEvent;
import net.neoforged.neoforge.client.event.RegisterGuiLayersEvent;
import net.neoforged.neoforge.client.gui.VanillaGuiLayers;
import net.neoforged.neoforge.common.NeoForge;
import xyz.ishimura.derpackx.killfeed.DerpackKillFeed;

/** Client wiring: register the HUD layer and tick the feed queue. */
public final class DerpackKillFeedClient {

    public static void init(IEventBus modBus) {
        modBus.addListener(DerpackKillFeedClient::registerLayers);
        NeoForge.EVENT_BUS.addListener(DerpackKillFeedClient::onClientTick);
    }

    private static void registerLayers(RegisterGuiLayersEvent event) {
        event.registerAbove(
                VanillaGuiLayers.CHAT,
                ResourceLocation.fromNamespaceAndPath(DerpackKillFeed.MODID, "kill_feed"),
                new KillFeedOverlay());
    }

    private static void onClientTick(ClientTickEvent.Post event) {
        ClientKillFeed.tick();
    }

    private DerpackKillFeedClient() {}
}
