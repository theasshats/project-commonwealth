package com.derpack.arcana;

import net.neoforged.neoforge.common.ModConfigSpec;

/**
 * Config — one toggle per weave feature, so the maintainer can disable any single bridge that
 * misbehaves without removing the mod. Values are first-pass; tune in playtest.
 */
public final class Config {
    public static final ModConfigSpec SPEC;

    // P1 — Source ⇄ mana (the Attunement Font)
    public static final ModConfigSpec.BooleanValue SOURCE_MANA_BRIDGE;
    public static final ModConfigSpec.IntValue SOURCE_PER_MANA;

    // P2 — shared spell-power attributes
    public static final ModConfigSpec.BooleanValue SPELL_POWER_CROSSOVER;

    // P3 — Born in Chaos souls as Occultism ritual fuel
    public static final ModConfigSpec.BooleanValue BORN_IN_CHAOS_RITUAL_FUEL;

    static {
        ModConfigSpec.Builder b = new ModConfigSpec.Builder();
        b.push("bridges");

        SOURCE_MANA_BRIDGE = b
            .comment("P1: the Attunement Font converts Ars Nouveau Source <-> Iron's Spellbooks mana.")
            .define("sourceManaBridge", true);
        SOURCE_PER_MANA = b
            .comment("Ars Source consumed per 1 Iron's mana restored (and inverse rate). Tune in playtest.")
            .defineInRange("sourcePerMana", 10, 1, 1000);

        SPELL_POWER_CROSSOVER = b
            .comment("P2: Iron's spell-power gear contributes to Ars spell damage and vice versa.")
            .define("spellPowerCrossover", true);

        BORN_IN_CHAOS_RITUAL_FUEL = b
            .comment("P3: Born in Chaos soul items usable as Occultism ritual fuel / sacrifice.")
            .define("bornInChaosRitualFuel", true);

        b.pop();
        SPEC = b.build();
    }

    private Config() {}
}
