**v2.1.1 Bug Fixes**

Fixed bug that causes raider ground forces to teleport to a system body

Fixed bug that prevented restoration of scientists and administrators

Fixed rare research field assignment issue where you alter missile design, then change stats on Create Project window and then click Create on missile window without changing anything else.

Fixed bug that causes naming in random stars to be System ###.

Classes in unit series are now displayed on the right when you click on them.

Fixed a bug that prevented Swarm appearing more than about 45 years into the game.

Reduced-size lasers now have correct sizes (no longer rounded up).

Fixed occasional problem with civilians not using max colony cost.

Fleets at a deep space population at a gas giant will now move with the DSP when the gas giant moves in orbit.

Ground units with Construction components will now add to population construction capacity once all ground units at the population are fortified.

Refits will now clear all existing combat assignments (weapons, fire controls, etc.).

Using Random Ruin on the System View window to remove a ruin will now refresh the system body list.

Fixed error popup when transferring a fleet to a player race.

Fixed "Land on Assigned Mothership" standing order for fleets with multiple ships.

Fixed problem that prevents independence working correctly.

'Clear Minerals' button on the System Generation and Display window now works for Gas Giants and Superjovians.

Fixed display error on the dropdown on the Missile Design window that shows the missile engine boost fuel consumption modifier.

Added code to handle the #1170 and #3040 error combination caused by null values in the MeanOrbitalSpeed field of the FCT_SystemBody. Not yet figured out how the nulls were created.

Fixed visibility of Recall Escorts button.

When releasing a tractored ship at a fleet destination in orbit or releasing a shipyard at a population, the tug will move into orbit.

System View now clears geo survey, atmosphere and colony cost information when a system with no system bodies is displayed.

Fixed error on spoiler tech points. They will now be adjusted accordingly if the player changes their starting tech points to a high number.

Added max colony cost calculation to follow terraforming. Currently happens in orbital movement only.

Fixed total population amount on Race window.

Secondary explosions resulting from maintenance failures will now cause additional damage (secondary explosions were only causing extra damage when they were the result of combat).

Fixed problem with Galactic Map selecting capital system after clicking the max colony cost display option.

Completion of auto-refit tasks will no longer generate a new auto-refit task if the shipyard is no longer capable of building the refitted class.

Blue highlight for CMCs that are providing minerals will now also work in 'by function' mode.

Removed display of 100% chance to hit from component display on class window. Should only display if weapon with less than 100% chance to hit.

**v2.1.1 Minor Changes**

Changed Swarm fleet sizes to have a wider range and to be less affected by time. This will mean generally smaller fleets early on, but with a small chance of larger fleets than before. Very large fleets will be more common in the later game.

Commanders of STO formations will receive the same tracking of ship kills as ship commanders, including medal awards.

Ground Forces officers may have tactical bonuses. The chance is about half that of naval officers.

Ships in Training Commands can be placed into overhaul without leaving the command. While in overhaul they will not gain fleet training points, but they will no longer suffer usage of fuel and MSP and penalties to deployment time.

Default starting population for player races changed to one billion (from 500m).

Raiders will only start generating additional ships after the player reaches the trigger for the number of systems.

**Civilian Repairs**

Civilian ships will instantly repair themselves if they are in orbit of a population with shipyards. NPRs do repairs in the same way as players but they have shipyards to do that. As civilian 'shipyards' are abstracted, I didn't want them to require player shipyards or have to add actual civilian shipyards and this is a rare situation anyway, I decided to abstract it.

Civilian ships in deep space with no movement capability will be abandoned by the shipping line. In this case, they will be transferred to the parent player race, which can choose to retrieve and repair for its own use, or just abandon ship.

**Avoidance of Closed Universe**

I've added a check to jump point exploration to avoid a situation where the last possible exit from known space leads to an existing system.

Normally, when jump point exploration takes place, there is a small chance to link to an existing system. However, for v2.1.1, this check will be skipped if the jump point being explored is the only one in known space that does not have an existing link. This check includes jump points that the race hasn't yet discovered via survey.

Random stars games can be setup with a small number of systems and/or settings that lead to a lot of loops. Therefore, if this situation occurs in a random stars game, the code will make 20 attempts to find a new system before accepting a link to an existing system.

Any new system generated with the last un-linked jump point in known space will have a minimum of two jump points.

These changes should ensure that at least one avenue of exploration will always exist.
