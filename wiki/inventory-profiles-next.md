# Why Your Inventory Behaves Differently: Inventory Profiles Next

Derpack X ships **Inventory Profiles Next** (IPN), a client-side mod that adds sorting,
auto-refill, locked slots, and one-click item moving on top of vanilla. None of it changes
the server or your saves, but several features are on by default, which is usually why a new
player thinks their inventory is "acting weird." This page explains what IPN does out of the
box and how to turn pieces off if you don't want them.

Everything here is local to your client. Changing these settings affects only you.

## The short version

IPN does not silently reorganize your inventory on its own. Sorting only happens when you
press the sort key or click a sort button. The behaviors that surprise people are **auto-refill**
(your hotbar item gets topped up automatically) and the **extra buttons** that appear on
inventory and chest screens. All of it is configurable.

## Opening the settings

Press **R + C** (hold R, tap C) to open the IPN configuration screen. This is where every
feature below can be toggled or rebound. The "R" here is IPN's modifier key; it is held
alongside a letter to trigger IPN actions, and it can be changed in that same screen if it
clashes with another mod.

## What's on by default

### Sorting

When you open your inventory or a chest, IPN adds small **sort buttons** near the top of the
slot grid. Clicking one sorts that container. You can also sort the container your cursor is
over by pressing the sort hotkey (the **R** modifier combo shown in the settings screen).

Sorting is **manual**. IPN does not reorder items while you play; it only acts when you press
the key or click the button. If your inventory got rearranged, something pressed sort, it did
not happen by itself.

### Auto-refill

This is the feature most likely to feel strange. When a stack you are holding runs out, such
as the last block in a stack while building or a tool that breaks, IPN automatically pulls a
matching item from elsewhere in your inventory into that hotbar slot. It is meant to keep you
from stopping mid-task.

Side effects to expect:

- A tool about to break may be swapped for a fresh duplicate, so the old one survives in your
  inventory instead of breaking. Some players like this, some find it confusing.
- The hotbar slot refills from your main inventory, so items appear to "move on their own."

Turn it off in **R + C** under the auto-refill section if you would rather manage this yourself.

### Locked slots

You can lock any slot so sorting ignores it and its contents stay put. Hover a slot in the
inventory screen and use the lock toggle that appears, or set it in the settings. A locked
slot can also be set to **stay empty**, which keeps shift-clicked and picked-up items from
landing there.

In vanilla IPN, empty locked slots show a small arrow indicator. **Derpack X blanks that
indicator** so it does not clutter the hotbar, but the feature itself still works if you set
it up. (Pack note: this is the arrow that earlier versions of the pack showed on every empty
hotbar slot; it is now hidden by a bundled texture override.)

### Moving items in and out of containers

When a chest or other container is open, IPN adds buttons for bulk moving:

- **Move matching items** transfers items you are carrying that already exist in the open
  container, so restocking a chest is one click.
- **Dump / move all** sends everything (or everything non-locked) into the container at once.

These are buttons on the container screen, not automatic, so they only fire when clicked.

### Profiles and gear sets

IPN can save inventory and hotbar layouts as profiles, including gear sets you can re-equip
quickly. This is opt-in: nothing happens until you create a profile, and the in-game profile
manager is still rough, so most players ignore it at first. The save/swap shortcuts are listed
in the settings screen.

## Common "what just happened" cases

- **My items rearranged.** A sort button was clicked or the sort hotkey was pressed. Sorting
  is never automatic.
- **A new tool appeared in my hand when the old one was about to break.** Auto-refill swapped
  in a duplicate. Disable auto-refill if you don't want this.
- **Blocks keep topping up while I build.** Also auto-refill, pulling matching stacks from
  your inventory.
- **There are extra buttons on my chest and inventory screens.** Those are IPN's sort and
  move buttons. They can be hidden in the settings if you find them distracting.
- **A keypress did something unexpected.** You likely held **R** (the IPN modifier) while
  pressing another key. Rebind the modifier in **R + C** if it conflicts with how you play.

## Turning it down or off

Everything above lives in the **R + C** settings screen and toggles independently, so you can
keep the parts you like (sorting buttons, say) and disable the rest (auto-refill). If you want
none of it, disabling every feature there leaves your inventory behaving like vanilla without
removing the mod. The mod is client-side, so your choices never affect other players or the
server.
