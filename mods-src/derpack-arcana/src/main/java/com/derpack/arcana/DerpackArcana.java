package com.derpack.arcana;

import com.mojang.logging.LogUtils;
import net.neoforged.bus.api.IEventBus;
import net.neoforged.fml.ModContainer;
import net.neoforged.fml.ModList;
import net.neoforged.fml.common.Mod;
import net.neoforged.fml.config.ModConfig;
import org.slf4j.Logger;

/**
 * Derpack Arcana — the magic-weave helper mod for the Derpack X modpack.
 *
 * <p>Fills the gaps the datapack/KubeJS recipe web can't reach (energy/attribute/behaviour bridges).
 * Every feature is OPTIONAL and CONFIG-GATED: if an integrated mod is absent, that feature simply
 * does not register. See {@code docs/ARCANA-BRIDGE-MOD.md} for the roadmap (P1 Source↔mana bridge,
 * P2 spell-power crossover, P3 Born-in-Chaos ritual fuel).
 *
 * <p>This is the skeleton: it loads, registers config, and reports which integrations are present.
 * Feature wiring is added incrementally and always behind a {@link #loaded(String)} guard.
 */
@Mod(DerpackArcana.MODID)
public final class DerpackArcana {
    public static final String MODID = "derpackarcana";
    public static final Logger LOGGER = LogUtils.getLogger();

    public DerpackArcana(IEventBus modBus, ModContainer container) {
        container.registerConfig(ModConfig.Type.COMMON, Config.SPEC);
        LOGGER.info("[Derpack Arcana] loading — magic-weave helper");
        logIntegrations();

        // P1 — Source <-> mana bridge. Guarded so ArsIronsBridge (which references Ars + Iron's API
        // types) is only classloaded when BOTH mods are present; absent -> the feature simply no-ops.
        if (Config.SOURCE_MANA_BRIDGE.get() && loaded("ars_nouveau") && loaded("irons_spellbooks")) {
            com.derpack.arcana.bridge.ArsIronsBridge.init(modBus);
        } else {
            LOGGER.info("[Derpack Arcana] Source<->mana bridge inactive (config off or a target mod absent).");
        }

        // P2 — spell-power crossover (game-bus listeners). Guarded like P1 so the Ars/Iron's types
        // in SpellPowerCrossover never classload when a target mod is absent.
        if (Config.SPELL_POWER_CROSSOVER.get() && loaded("ars_nouveau") && loaded("irons_spellbooks")) {
            com.derpack.arcana.bridge.SpellPowerCrossover.register();
        }

        // Later phases wire in here, same guarded pattern:
        //   P3 BornInChaosRitualFuel.register(modBus);  // occultism + born_in_chaos_v1
    }

    private static void logIntegrations() {
        for (String id : new String[]{"ars_nouveau", "irons_spellbooks", "occultism", "born_in_chaos_v1", "galosphere"}) {
            LOGGER.info("[Derpack Arcana] integration '{}': {}", id, loaded(id) ? "present" : "absent");
        }
    }

    /** True if the given mod id is loaded — every integration is guarded by this. */
    public static boolean loaded(String modid) {
        return ModList.get().isLoaded(modid);
    }
}
