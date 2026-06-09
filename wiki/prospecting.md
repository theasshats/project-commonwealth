# Finding Ores: Prospecting

Derpack X uses GregTech-style ore generation. Ores are concentrated in large veins of
related materials instead of being scattered evenly through the world, and most vanilla
overworld ore generation is turned off. Veins, plus a thin layer of small ores, are the
only sources. Prospecting is how you find the veins.

## The short version

Right-click an ore block to reveal nearby veins of that material on your map, then travel to
the vein and dig it out. Right-click, not break — breaking an ore does nothing for prospecting.

## Small ores are indicators

Single ore blocks are scattered across the overworld: coal, iron, copper, tin, zinc, gold,
silver, nickel, redstone, lapis, and the occasional diamond. They are enough to get a first
set of tools, but their real job is to point at veins. When you find one, right-click it and
check your map.

## Step by step

1. Find an ore block. A scattered small ore works, or any vein ore you have already exposed.
2. Right-click the ore block (an empty hand is simplest). This is the important part: breaking
   the block does nothing — prospecting only triggers on a right-click (use) on a vein ore.
3. A chat message confirms how many veins were located ("Prospected N new veins"). This message
   is the reliable confirmation that prospecting happened. If you get no message, you either
   broke the block instead of right-clicking it, or that block type is not part of any vein.
4. Travel toward the prospected vein and dig down. Veins are several blocks tall and hold a few
   related ores in layers, so one shaft into a vein usually returns more than the headline ore.
5. When a vein is mined out, you can mark it as depleted so it stops cluttering your records.

How far each right-click scans is controlled by the `oreBlockProspectRange` setting (default 24).

## Map overlay

Prospected veins can be drawn on a map if you have a supported map mod, with a "Show GT Ore
Veins" option to toggle them and waypoints you can set per vein. Note that the overlay only
shows veins you have already prospected — an empty overlay usually just means you have not
broken any ore yet, not that anything is wrong. If you have prospected veins and the option
does not appear at all, the map integration for your map mod may be off or unsupported; the
in-world chat confirmation still works regardless.

## Sharing with your group

Run `/gtmogs share_prospection_data <player>` to send the veins you have located to a
teammate. On a shared world this is part of how the group divides work: a player who has
mapped a region can pass that knowledge on, or trade it.

## Where to look

Veins are regional, so the biome decides what you find. A rough guide:

- Mountains and hills: iron, magnetite, lead, silver, nickel, palladium (deep).
- Badlands and savanna: copper, gold, thorium, uranium (deep), bauxite (savanna).
- Desert: redstone, lithium.
- Forest and taiga: coal.
- Plains: zinc, tin, lignite, fireclay.
- Swamps: lignite, fireclay.
- Jungle: diamond (deep), jade, bauxite.
- Snowy biomes: lapis.
- Mountain peaks: emerald.
- Coasts and oceans: salt.

Depth matters as much as biome. Marquee ores such as diamond, uranium, and mithril sit deep;
emerald sits high in peaks. If you have a recipe viewer open, you can also look up an ore to
see the vein it belongs to and its spawn range.

## Tips

- Veins generate on a regular grid, roughly every few chunks. Once you find one, others sit
  at predictable intervals.
- A single vertical shaft through the center of a vein chunk covers every depth a vein could
  be at, so there is no need to strip-mine.
- Caves cut through veins too. Prospecting works the same on ore you find while caving.
