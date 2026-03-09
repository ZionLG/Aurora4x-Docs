**Popup Menu Fix**

Popup menu no longer reappears with previous items when right-clicking on a blank location.

**Commander Search Fix**

Changing between Administrators and Naval Officers on the search function of the Commanders Window no longer causes incorrect text in the rank drop downs.

**Auto Assign FC ECCM Fix**

Fixed auto-assign fire controls when there are more ECCM systems than fire controls.

**Area PD Multi-Fire Fix**

Beam weapons using Area PD can no longer fire multiple times within the same 5s tick.

**Area PD Impact Display Fix**

When Area PD hits targets, the location of the energy impacts are now shown correctly on the tactical map.

**Negative Spare Berths Fix**

Fixed occasional negative spare berths.

**Medal Save Fix**

Medals can no longer be saved without an image.

**Medal Deletion Fix**

Deleting a medal now deletes any associated conditions. Otherwise they could still be awarded until the game is restarted.

**Species Temperature Display Fix**

Fixed display for species on System View where the species' acceptable temperature range is in the triple digits.

**Lagrange Point Order Display Fix**

Fixed bug in order time and distance display for orders including Lagrange point jumps.

**SM Fill Ship Fix**

SM: Fill Ship updates the display after adding missiles.

**Galactic Map Position Fix**

Fixed occasional weird positioning of systems on Galactic Map.

**AI Point Defence Estimate Fix**

Fixed AI estimate of hostile point defence strength (AI was firing in some situations when it was futile).

**Fire Delay Fix**

Taking an action that results in a Fire Delay can no longer shorten an existing Fire Delay.

**Resurrecting Population Fix**

Fixed the 'Resurrecting Population' bug.

**New Game Exit Fix**

Prevented New Game process being exited without using Create or Cancel.

**AI Ram Fix**

Fixed bug where AI would continue to attempt to ram a ship that had left the system.

**Single System Multiples Fix**

Fixed bug where you could add multiples of a 'single only' system by using x5, x20, etc.

**Overhaul No Maintenance Fix**

Added code to automatically remove ships from overhaul if 'no maintenance' is set.

**Second-Stage Missile Magazine Fix**

Warheads of second-stage missiles will now contribute to magazine explosions.

**Ground Force Queue Fix**

It is no longer possible to queue ground force construction on a population without ground force construction complexes.

**ELINT Passive Sensor Fix**

Fixed bug that prevented ELINT working as passive sensor unless other passive sensors were present on the same ship.

**Missile Shipyard Target Fix**

Fixed bug that prevented missiles from targeting shipyards.

**Gas Giant Colony Fix**

Prevented creation of colonies on gas giant on the Minerals window.

**SM Partial Refuel Fix**

Fixed SM Partial Refuel so it cannot exceed ship max fuel.

**Shipyard Slipway Destruction Fix**

Fixed problem that caused random shipyard task from any shipyard in game to be deleted when a slipway was destroyed.

**Fire Control Refit Fix**

Fire control assignments will be cleared if a refit changes fire control components.

**Underway Replenishment Reset Fix**

Fixed the bug that reset underway replenishment to zero after closing and restarting game.

**SM Random Ruins Fix**

Prevented SM random ruins being created on gas giants.

**Foreign Fighter Ground Support Fix**

Prevented fighters of other races appearing as available for ground support.

**Inherent Supply Fire Rate Fix**

Fixed bug that caused ground formation elements with only inherent supply to fire at 1/4 rate.

**Unload Max Items Fix**

Fixed 'unload max items' bug for installations and minerals.

**Ground Unit Capability Fix**

Fixed problem with changes in capabilities during ground unit design affecting units created earlier. Workaround until 1.12 is to close window between units if changing capabilities.

**Passive Sensor Buoy Fix**

Fixed problem where passive sensor buoys can't detect anything unless an active missile or buoy sensor is also present in the same system.

**Tug Fuel Consumption Fix**

Fixed fuel consumption bug for tugs towing shipyards.

**Missile Project Creation Fix**

Fixed errors in creation of missile projects while Create Component Project window is open.

**Turret Research Project Fix**

Fixed weird bug that happened when turret, create project and economics window were open together and resulted in wrong research project being linked to a new component.

**Ground Combat Intel Fix**

Fixed bug that caused intel modifier for ground combat to reset after game load.

**Inherent Supply Replenishment Fix**

Fixed bug that prevented replenishment of inherent supply from parent formation.

**Missile PD Mode Fix**

Fixed bug that prevented removal of missile point defence modes.

**Non-Active Research Fix**

Fixed 'Object reference' bug when gaining tech points to complete a non-active research project.

**Small Comet Orbit Fix**

Added code to prevent creation of comets with very small Orbital Distance to prevent a very rare but serious bug.

**Refit Overhead Display Fix**

Fixed display bug that showed wrong 'Refit Overhead' cost in Refit Details display.

**Cargo Shuttle Maintenance Fix**

Ships with cargo shuttles can now load maintenance supply from a colony without needing a cargo shuttle station or a maintenance facility.

**Refit Ordnance Adjustment**

A refit will adjust the amount of ordnance on a ship if the new design has insufficient capacity to hold them. Any excess ordnance will be offloaded to the population.

**Maintenance Explosion Fix**

Maintenance failures will only be checked against components that can fail, in order to avoid the maintenance explosion bug for carriers, fuel tankers, etc.

**Delete Empty Populations Fix**

Delete Empty Populations will not delete populations that have mineral stockpiles.

**Wreck Salvage Display Fix**

Fixed bug that displayed 'Unknown Class' in wreck salvage event when salvaging own ships.

**Spinal Weapon Type Fix**

You can no longer add spinal weapons of different types to the same design.

**Station No Armour Fix**

Stations with 'No Armour' no longer function with a single armour layer in combat.

**C&C Disassembly Fix**

In v.1.11, command and control systems are treated as a single tech line for disassembly, so CIC might give points for AUX. In v1.12, all C&C systems are treated individually.

**Required Power Display Fix**

Fixed bug in Required Power field in Ship Design Display tab on Naval Organization window.

**Repair Damage Control Fix**

Repairing a ship will now clear the damage control queue.

**Admin Command Deletion Fix**

Deleting an admin command will now unassign any assigned commander.

**Overhaul Fleet Position Fix**

Fixed a bug where beginning an overhaul at a fleet (rather than a colony) caused the overhauling fleet to stop in space while the system body moved on.

**Moon Numbering Fix**

Fixed the moon-numbering bug for gas giants that also have Trojan asteroids.

**Shipyard Scrap Fix**

When choosing the "Scrap" options for a shipyard, you can no longer choose civilian ships.

**Ground Survey Speed Fix**

Ground-based and buoy-based geological surveys now use the game-level survey speed modifier.

**Scrapping Wealth Fix**

Fixed a bug with scrapping that returned full wealth and minerals, plus components.

**SM Race Customization**

Spacemaster can change flags, hull icons and race image for AI races on the Diplomacy window.

**Dust and Radiation Editing**

Dust and Radiation Levels can be changed in the Modify Body window.

**Change Capital Population**

Added button to Economics window to allow a change of capital population.

**Parasites on Transported Items**

Parasites are included on the Transported Items tabs for Fleets and Ships on the Naval Organization window.

**Auto Queue Ground Construction**

When new ground formation construction complexes are built, queued tasks will be added automatically.

**AI System Withdrawal**

In v1.11, the AI will withdraw from systems that are alien-controlled and relations are neutral or better. For v.1.12, they will also withdraw from systems that are isolated due to the alien control.

**NPR Active Sensors**

NPR ground forces will always use their active sensors.

**Missile FC AMM Launch**

Missile fire controls with point defence modes set will launch AMMs without a specific 'Open Fire' order.

**Fighter Cargo Loading**

Fighter-sized craft do not require cargo shuttles to load / unload colonists or cargo. Due to their size they can land and load/unload directly.

**Earth Death Spiral**

A new disaster scenario where the Earth begins to slowly spiral into the Sun, with three available speeds of 0.01, 0.02 and 0.03 AU per year.

Temperature, year length, etc. will be adjusted as the distance to the Sun decreases.

When Earth moves within one million kilometres of the Sun, it is destroyed due to the tidal stresses. Any remaining populations will also be destroyed.

**Move Fleet to Waypoint**

You can already use SM mode to move a fleet instantly to any population.

v1.12 adds the option to use SM mode to move a fleet instantly to any rendezvous waypoint. Existing rendezvous waypoints are listed next to the populations on the Misc tab of the Naval Organization window. New ones can be created from the waypoint tab of the Tactical Map.

This gives a lot more flexibility to SM mode for initial setup or fixing problems.

**Rakhas Generation Change**

in V1.11, Rakhas need to be within a temperature band about a hundred degrees wide, some oxygen, no dangerous gases, available water, high accessibility minerals and no ruins. The chance of them appearing is based on a random number generated from 1-8. If that is higher than total accessibility, with Duranium counting double, they are generated.

That is proving to be a very difficult combination. Mainly because a lot of accessible minerals don't tend to appear on planets that meet the other requirements and water is often not present.

For v1.12, the requirements for water, no dangerous gas and high mineral accessibility have been dropped. Instead, if the planet meets the other requirements and there is at least one mineral present, there is a 30% chance Rakhas will be present. The total mineral accessibility will determine the size of their forces.

**Load All Minerals Until Full**

A new movement order called 'Load All Minerals Until Full'. This is exactly the same as the Load All Minerals order except that the same order will remain until the fleet's cargo capacity is full. Reserve levels will be observed for this order.

In mechanics terms, when the loading timer runs down to zero the order is completed if the cargo capacity is full. If not, the fleet movement ends for the sub-pulse and the loading clock is reset. The cycle repeats until the cargo holds are full.

This will allow players to set up freighter runs to bring minerals from outlying colonies without micromanagement or fuel waste.

**Pickup Nearest Lifepod**

Fleets can be assigned 'Pickup Nearest Lifepod' as a standing order. This will apply to any lifepods in the same system as the fleet.

Different fleets will coordinate their pickups, so that two fleets do not attempt to pickup the same lifepod.

**Assign New Labs**

An 'Assign New' button has been added to the Research tab of the Economics window. This is used to toggle an 'Assign New' status to one or more research projects, indicated by (N) after the project name.

When new research facilities are constructed, or become available through completion of other projects that do not have associated queued projects, those facilities will automatically be assigned to projects flagged as 'Assign New' in descending order of existing facilities. Each project in the list will be assigned available facilities until it reaches maximum, then any remaining available facilities will go to the next project in the list, etc.

When research facilities are removed from a population and the number of assigned facilities has to be reduced, they will be taken first from research projects without the 'Assign New' flag. You can toggle 'Assign New' for projects that already have maximum facilities for this purpose.

**Deployment Exceeded Condition**

A new 'Deployment Exceeded' condition has been added. It will trigger the associated conditional order as soon as a ship exceeds the planned deployment for its class.

**Repeat Orders X Times**

A small text box has been added next to the Repeat Orders button. Whatever number is in the box is the number of times the orders will repeat, with 1 being the default. 0 or negative numbers will be treated as 1.

For example, if you type 3 in the box, the orders will happen four times; the original orders plus three repeats.

As with all repeat orders, they have to start and finish in the same system to be valid.

**Refuel, Resupply and Overhaul Conditional Order**

A new conditional order named 'Refuel, Resupply and Overhaul'.

If the associated condition is met, the fleet will be given a Refuel and Resupply order followed by an Overhaul order, with both issued for the population at which the overhaul will take place. The destination check is only made for the existence of sufficient maintenance capacity, not the presence of fuel and supplies. This is to avoid a situation where running out of fuel will prevent conditional overhauls taking place.

**Commander Assignment Priority**

There has been some confusion about the commander priority for ship classes. Commander Priority is the most important factor in determining which ships are checked first for auto-assignment purposes, followed by the fixed primary and secondary priorities explained in the original v1.00 rules post.

Originally, zero was the highest commander priority, as it was in VB6. Then it was mentioned that it would change so that 0 was the lowest priority. However, it was only changed for assignment to warships where no commander with crew training was available. Everything else still used 0 = high.

From v.1.12 onward, zero will be the lowest priority for all assignments, so it matches colony auto-assignment. The label for the commander priority text box now includes (0 = Low) to make it clear. The default priority is now 10, so that it is easy to make one class lower priority without having to change all the others.

**Survey Next Three Bodies or Locations**

A new standing order to 'Survey Next Three Bodies or Locations'. This is intended for survey ships that mount both geological and gravitational sensors. The ship will conduct either geological or gravitational surveys depending on whether survey locations or system bodies are closer.

This is mixed, so the order list may be a system body, then a survey location and then another system body.

This should save time and fuel when ships are handling both types of survey in a system.

**Resupply from Stationary Supply Ship**

A new order to "Resupply from Stationary Supply Ship".

This functions exactly like Refuel from a Stationary Tanker, except for supplies instead of fuel. The order will not work if the target fleet is moving when the fleet arrives.

**Occupation Strength and Police Modifiers**

As a result of gameplay testing, two problems were found in the occupation and police code.

The first is that the Resistance Modifier of a population used for occupation or reducing unrest should be (Determination + Militancy + Xenophobia) / 300, but was actually Determination + Militancy + (Xenophobia / 300). Assuming all stats were 50, that meant the result would be 100.6 rather than the correct 0.5, creating a resistance modifier 200x higher than intended.

The second bug is that the occupation strength of ground units was far higher than intended. A ground element should have occupation strength of SQRT(Size) \* Units \* (Morale/100) \* 0.01. However, the 0.01 was missing, so the actual occupation strength was 100x higher than intended. So the occupation strength bug countered half the effect of the resistance bug.

For v1.12.0 the following formulae are used for occupation and police:

**Occupation**

- Required Occupation Strength = ((Determination + Militancy + Xenophobia) / 300) \* Population Amount \* Political Status Occupation Modifier.
- Political Status Occupation Modifier = Slave Colony 1.5, Conquered 1.0, Occupied 0.75, Subjugated 0.25, All Others 0
- Actual Occupation Strength is the sum of the individual element occupations strengths.
- Element Occupation Strength = (SQRT(Size) \* Units \* Morale) / 10000

**Reduction in Unrest**

- Police Strength = Actual Occupation Strength - Required Occupation Strength
- Effective Population Size = ((Determination + Militancy + Xenophobia) / 300) \* Population Amount
- Police Modifier = Police Strength / Effective Population Size
- Unrest points are reduced by 100 \* Police Modifier per year

**Change to Greenhouse Gas and Dust Mechanics**

The new mechanics for the effect of greenhouses gases and dust on temperature are calculated using the following formulae:

Greenhouse Factor = 1 + (Atmospheric Pressure / 10) + Pressure of Greenhouse Gases
If Greenhouse Factor > 3 Then Greenhouse Factor = 3

Anti-Greenhouse Factor = 1 + (Dust Level / 20000) + Pressure of Anti-Greenhouse Gases
If Anti-Greenhouse Factor > 3 Then Anti-Greenhouse Factor = 3

Surface Temperature (K) = (Base Temperature (K) \* Greenhouse Factor \* Albedo) / Anti-Greenhouse Factor

This change was made because in v1.11, anti-greenhouse pressure is deducted from greenhouse gas pressure. However, this gives anti-greenhouse gas a potentially much greater impact than greenhouse gas. For example, assume a planet with no atmosphere to which is added 1 atm of anti-greenhouse gas. The calculation would be:

Greenhouse Factor = 1 + (1/10) -1 = 0.1

In other words, 1 atm of greenhouse gas would reduce the temperature to just 10% of the base temp. Adding 1.2 atm would reduce temp below 0K. The root cause of this problem is that temperature has a minimum value (0K) but no maximum. The new mechanics avoid this by making anti-greenhouse gases a divisor, rather than a subtraction. As dust is effectively a temporary anti-greenhouse gas, it makes sense to treat it as such for the new mechanics. However, that doesn't mean that terraformers can remove dust.

**Tactical Map Events**

When Events are active on the Tactical Map, the first line will show the date and increment length, as per the Events Window. This will be shown even if there is no event in the increment.

Events on the Tactical Map will display the same text and background colours as on the Events Window.

Double-clicking an event on the tactical map will centre on the event in the same way as on the Events Window.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/1f6764f30721465aefe9a934aa16b410cc33fec0.png)

**Cycle Previous Locations**

In v1.12, Aurora keeps track every time the system map is centred. This can be because you clicked on something, used the 'Centre On' options for fleets and mineral search or double-clicked an event related to the map. The locations are tracked in the order in which they were selected.

You can use Alt-F11 and Alt-F12 to cycle back and forth through the list of all centred locations since the game was loaded. This works across all systems. Every time you change locations in this way, the location you move to will be the 'current location'.

If the map is centred again for any reason other than cycling through the list, everything in the list after the 'current location' is lost and the new location is added after the 'current location'. The new location will then become the current location. This is to ensure the list stays relevant to your current activity and doesn't get too long to be useful.

**Automated Assignment for Colony Governors**

Assignment of colony governors has always been manual, due to the difficulty in knowing a players intentions for a given colony. For v1.12, the option has been added for players to specify what type of commander they need for a colony and then let auto-assignment handle the selection. A new Governor tab on the economics window shows details of the current colony governor and provides options for selection. The options work as follows:

- Automated Assignment Checkbox: Toggles automated assignment for the specific colony, which has two effects. Firstly, if no governor is assigned, the colony will undergo automated assignment checks during the construction phase. Secondly, if the current governor increases their admin rating, they will be unassigned. They may also be immediately reassigned, but this allows the auto-assignment code to check for higher priority assignments for that administrator first.
- Colony Importance: When automated assignment takes place, colonies are checked in descending order of importance.
- Required Bonus: A potential governor must have this bonus to be assigned to the colony.
- Secondary/Tertiary Bonus: Governors with the Required Bonus are ranked based on descending value of the required bonus, then by descending value of the secondary bonus, then by descending value of the tertiary bonus. The secondary and tertiary bonuses are not required for an administrator to be assigned. They are used for ranking purposes only.
- Assign Colony Governor: Clicking this button removes the current governor and then assigns the highest ranked available candidate, which may result in re-assignment of the current governor.
- Assign Governor Vacancies: Checks every colony without a governor in descending order of importance and assigns the best candidate. This is effectively a manual triggering of the construction phase auto-assignment.
- Reassign All Colony Governors: Removes all existing governors then checks every colony in descending order of importance and assigns the best candidate to each.

Manual assignment will still be the best option for important colonies, but the above should significantly reduce micromanagement in governor assignment.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/4eb5772ba8fe0f973de591c06a6c6e38c69f7942.png)

**Fleet Escort Orders**

Each fleet can be set to act in relation to another friendly fleet, designated the 'Anchor Fleet', and the presence of 'threats'. For example, you can order fleet A to place itself a million kilometres from fleet B in the direction of alien ship C. As fleet A and alien ship C manoeuvre, fleet B will attempt to maintain that position.

Once an Anchor Fleet is set, there is a descending order of potential threats. Firstly, you can specify a specific alien ship, even if that ship is not currently on sensors, in the same system or hostile. However, that threat will be ignored unless the specific alien ship is on sensors in the same system. Secondly, you can toggle the fleet to use the nearest hostile warship as the threat. A 'warship' in this context is an alien ship that you know has weapons (as per the Intelligence for the parent alien class). So if the specific threat is destroyed or moves out of sensor range, the fleet will use the nearest hostile warship as the threat instead. Third is the toggle for the nearest hostile contact. So with no specific threat or warship, the fleet will use any hostile contact as the threat. Finally, you can use the Anchor Fleet's destination as the 'threat'.

You set a distance from the Anchor fleet and can also set an offset bearing. For example, you could have two fleets set to be 30 degrees either side and ahead of an Anchor Fleet to act as sensor pickets, or you might have your support ships set at 180 degrees so they follow the Anchor fleet.

The second and third panels on the screenshot allow you to choose anchor fleets and specific threats.

Finally, if a fleet joins another fleet using the 'Join as Sub-Fleet' order, the sub-fleet will retain its formation settings. While they won't be used by the sub-fleet while it is part of a fleet, the setting will become active again if the sub-fleet is detached and becomes a fleet again. This will allow easy detachment of escorts.

A new Detach Escorts button for Fleets will detach all sub-fleets with an Anchor Fleet set. A new Recall Escorts button will issue 'Join As Sub-Fleet' orders to any fleets in the same system that have the current fleet set as their Anchor fleet.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a7a56510fc49fc6579e7844de9c0d25ae87c780c.jpeg)

**Ground Forces Replacements**

There can be a lot of micromanagement involved in re-organising ground forces after combat, especially if you have a very detailed OOB. Therefore, an automated replacement process has been added for v1.12.

Each formation can be assigned a Replacement Template. By default, this is the template used to construct the formation initially. It can be changed using the 'Change Temp' button on the Order of Battle tab of the Ground Forces window. The current Replacement Template for each formation is shown on the same tab when it is selected. When you change to a different template, you have the option to change all formations with the same current template to the new template. Note the new template may have a different composition of units than the original template. You might do this to add extra capabilities or even stop replacing certain types of unit.

Each formation can be assigned a replacement priority on the same tab. When replacements are available, they are assigned to formations in descending order of priority. The default priority for a new formation is 10.

You can also flag a formation as 'Use for Replacements', in which case the Replacement Template is removed for that formation. During the Ground Replacement Phase, which happens in each construction phase and after ground combat, units are moved from designated replacement formations to any formations at the same population that are in need of replacements.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c31405f867d839842e537130f498f63ce81a0aee.jpeg)

Over time, new ground units will be designed and will often be improved versions of existing designs. Therefore you can organise similar ground unit designs into Unit Series using a new tab for that purpose. To do so, just drag and drop from the list of non-assigned units to the desired Unit Series. Dropping on to the series name will place the unit at the top of the series. Dropping on to an existing unit in the series will place the dropped unit below the target unit. Dragging an assigned unit into empty space will remove it from a Unit Series.

When replacements are required, the replacement process will use the Unit Series of each unit in the Replacement Template, rather than the actual unit. This means you don't have to update Replacement Templates when you create a new version of a build template with upgraded designs.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ca90dc85597e880063245f6edd53b544b6669703.png)
