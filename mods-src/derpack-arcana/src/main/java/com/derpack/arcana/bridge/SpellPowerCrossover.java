package com.derpack.arcana.bridge;

import com.derpack.arcana.Config;
import com.hollingsworth.arsnouveau.api.perk.PerkAttributes;
import io.redspace.ironsspellbooks.api.registry.AttributeRegistry;
import io.redspace.ironsspellbooks.damage.SpellDamageSource;
import net.minecraft.world.entity.Entity;
import net.minecraft.world.entity.LivingEntity;
import net.minecraft.world.entity.ai.attributes.AttributeInstance;
import net.neoforged.neoforge.common.NeoForge;

/**
 * P2 — spell-power crossover. Makes each spellcasting school's gear matter to the other, so a hybrid
 * caster isn't penalised for splitting between Ars Nouveau and Iron's Spellbooks. Implemented the
 * sound way (both mods expose a moddable {@code SpellDamageEvent}): each listener reads the caster's
 * <em>other</em>-mod spell-power attribute and scales the damage by a configurable fraction.
 *
 *   - Ars spell damage   += a fraction of the caster's Iron's {@code SPELL_POWER} bonus.
 *   - Iron's spell damage += a fraction of the caster's Ars  {@code SPELL_DAMAGE_BONUS}.
 *
 * Listeners sit on the game bus and are only registered when both mods are present (guarded in the
 * main class), so the Ars/Iron's types here never classload otherwise.
 */
public final class SpellPowerCrossover {

    public static void register() {
        NeoForge.EVENT_BUS.addListener(SpellPowerCrossover::onArsSpellDamage);
        NeoForge.EVENT_BUS.addListener(SpellPowerCrossover::onIronsSpellDamage);
        com.derpack.arcana.DerpackArcana.LOGGER.info("[Derpack Arcana] P2 spell-power crossover active.");
    }

    /** Ars spell hit — boost it by the caster's Iron's spell power. */
    private static void onArsSpellDamage(com.hollingsworth.arsnouveau.api.event.SpellDamageEvent event) {
        if (!Config.SPELL_POWER_CROSSOVER.get()) {
            return;
        }
        LivingEntity caster = event.caster;
        if (caster == null) {
            return;
        }
        AttributeInstance inst = caster.getAttribute(AttributeRegistry.SPELL_POWER);
        if (inst == null) {
            return;
        }
        // Iron's SPELL_POWER is a x1.0 multiplier; (value - 1) is the fractional bonus from gear/effects.
        double bonusFraction = inst.getValue() - 1.0;
        if (bonusFraction <= 0) {
            return;
        }
        event.damage += (float) (event.damage * bonusFraction * Config.SPELL_CROSSOVER_FACTOR.get());
    }

    /** Iron's spell hit — boost it by the caster's Ars spell-damage bonus. */
    private static void onIronsSpellDamage(io.redspace.ironsspellbooks.api.events.SpellDamageEvent event) {
        if (!Config.SPELL_POWER_CROSSOVER.get()) {
            return;
        }
        SpellDamageSource source = event.getSpellDamageSource();
        Entity casterEntity = source != null ? source.getEntity() : null;
        if (!(casterEntity instanceof LivingEntity caster)) {
            return;
        }
        AttributeInstance inst = caster.getAttribute(PerkAttributes.SPELL_DAMAGE_BONUS);
        if (inst == null) {
            return;
        }
        double arsBonus = inst.getValue(); // Ars spell-damage bonus (flat-ish, default 0)
        if (arsBonus <= 0) {
            return;
        }
        event.setAmount(event.getAmount() + (float) (arsBonus * Config.SPELL_CROSSOVER_FACTOR.get()));
    }

    private SpellPowerCrossover() {}
}
