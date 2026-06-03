# Finding Ores: Prospecting

Derpack X uses GregTech-style ore generation. Ores are concentrated in large veins of
related materials instead of being scattered evenly through the world, and most vanilla
overworld ore generation is turned off. Veins, plus a thin layer of small ores, are the
only sources. Prospecting is how you find the veins.

## The short version

Break an ore block to reveal nearby veins of that material on your map, then travel to the
vein and dig it out.

## Small ores are indicators

Single ore blocks are scattered across the overworld: coal, iron, copper, tin, zinc, gold,
silver, nickel, redstone, lapis, and the occasional diamond. They are enough to get a first
set of tools, but their real job is to point at veins. When you find one, break it and check
your map.

## Step by step

1. Find and break an ore block. A scattered small ore works, or any vein ore you have already
   exposed.
2. A chat message confirms how many veins were located ("Prospected N new veins").
3. Open Xaero's minimap or world map and enable the "Show GT Ore Veins" option.
4. Located veins appear as ore icons. Set a waypoint on the one you want.
5. Travel there and dig down. Veins are several blocks tall and hold a few related ores in
   layers, so one shaft into a vein usually returns more than the headline ore.
6. When a vein is mined out, mark it as depleted so it stops cluttering the map.

How far each broken block scans is controlled by the `oreBlockProspectRange` setting.

## Sharing with your group

Run `/gtmogs share_prospection_data <player>` to send the veins you have located to a
teammate. On a shared world this is part of how the group divides work: a player who has
mapped a region can pass that knowledge on, or trade it.

## Where to look

Veins are regional, so the biome decides what you find. A rough guide:

- Mountains and hills: iron, magnetite, lead, silver, nickel, palladium (deep).
- Badlands and savanna: copper, gold, thorium, uranium (deep).
- Desert: redstone, lithium.
- Forest and taiga: coal.
- Plains: zinc, tin.
- Jungle: diamond (deep), jade.
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
