/*
 * Derpack Kill Feed — an on-screen kill feed for Derpack X.
 * Copyright (C) 2026 Derpack X
 *
 * Portions adapted from Superb Warfare (https://github.com/Mercurows/SuperbWarfare)
 * by Atsuishio / Roki27 / Light_Quanta, used under the GNU General Public License v3.
 * Specifically the kill-message queue and entry slide/fade animation timing
 * (their KillMessageHandler + KillMessageOverlay). Their gun/vehicle/dog-tag and
 * custom-damage-type features and all art assets are NOT included.
 *
 * This program is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software Foundation,
 * version 3 only (GPL-3.0-only). See the LICENSE file for the full text.
 */
package xyz.ishimura.derpackx.killfeed;

import net.neoforged.api.distmarker.Dist;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.config.ModConfig;
import net.neoforged.fml.loading.FMLEnvironment;
import net.neoforged.neoforge.common.NeoForge;
import xyz.ishimura.derpackx.killfeed.client.DerpackKillFeedClient;
import xyz.ishimura.derpackx.killfeed.network.NetworkHandler;
import xyz.ishimura.derpackx.killfeed.server.KillEventHandler;

@Mod(DerpackKillFeed.MODID)
public class DerpackKillFeed {
    public static final String MODID = "derpack_killfeed";

    public DerpackKillFeed(IEventBus modBus, ModContainer container) {
        // Network payload is registered on both sides; the kill detection runs on the server.
        modBus.addListener(NetworkHandler::register);
        NeoForge.EVENT_BUS.register(new KillEventHandler());

        // Display options (corner, margins, timing) are a client preference.
        container.registerConfig(ModConfig.Type.CLIENT, Config.SPEC);

        if (FMLEnvironment.dist == Dist.CLIENT) {
            DerpackKillFeedClient.init(modBus);
        }
    }
}
