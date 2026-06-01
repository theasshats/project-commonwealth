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
    public static final ModConfigSpec.DoubleValue SPELL_CROSSOVER_FACTOR;

    // P3 — Born in Chaos souls feed Occultism (Soul Reaping)
    public static final ModConfigSpec.BooleanValue BORN_IN_CHAOS_SOUL_REAP;
    public static final ModConfigSpec.DoubleValue SOUL_REAP_CHANCE;

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
        SPELL_CROSSOVER_FACTOR = b
            .comment("P2: fraction (0..1) of one school's spell-power that carries to the other. Tune in playtest.")
            .defineInRange("spellCrossoverFactor", 0.5, 0.0, 1.0);

        BORN_IN_CHAOS_SOUL_REAP = b
            .comment("P3: slaying a Born in Chaos mob can drop Occultism spirit essence (Soul Reaping).")
            .define("bornInChaosSoulReap", true);
        SOUL_REAP_CHANCE = b
            .comment("P3: chance (0..1) for a player-slain Born in Chaos mob to drop Occultism essence.")
            .defineInRange("soulReapChance", 0.25, 0.0, 1.0);

        b.pop();
        SPEC = b.build();
    }

    private Config() {}
}
