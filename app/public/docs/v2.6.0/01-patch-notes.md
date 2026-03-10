**Major Changes**

[Multi-System NPRs](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/15)

[NPR Carriers](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/16)

[Enhanced Invaders](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/17)

[Enhanced Precursors](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/18)

[Enhanced Star Swarm](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/19)

[Starting Research for Spoiler Races](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/29)

[Raiders vs NPRs Update](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/30)

[Pre-Industrial and Industrial Races](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/32)

[Standing and Conditional Order Updates](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/26)

[Updated POW Mechanics](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/14)

[Change to ECM](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/33)

[Mineral Tracking](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/31)

[Ground Unit Training Costs per Population](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/20)

[Shipping Line and Colony Changes](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/3)

[Shipping Line New Ship Selection](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/4)

[Ship Construction and Instant Build into Admin Commands](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/6)

[Researching and Converting Alien Components / Missiles](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/11)

[Undermanned and Captured Ship Penalties](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/12)

[Ramming Update](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/13)

[Flag Bridges and Naval Admin Commands](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/27)

[Population Transfer](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/7)

[Limited Planet Distance](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/2)

[Galactic Map Zoom](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/22)

[Galactic Map Full Screenshot](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/9)

[Alien Race Territory Display](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/10)

[Galactic Map Class/Admin Display](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/21)

[Crew Quarters Design Efficiency](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/23)

[Class Design UI Updates](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/25)

[Refuelling Changes](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/24)

[Population Fuel and Maintenance Warnings](https://aurora4x.com/t/aurora-v2-6-0-patch-notes/23/5)

**v2.6.0 Bug Fixes**
*   Centre on Selected Body and Create Colony on the Minerals window work on Wide View.
    
*   Fixed error sequence #1954, #1943, #478, caused by an Alien Race without a class naming theme.
    
*   Move Waypoint now functioning correctly.
    
*   Parasites dragged into a different fleet or sub-fleet will be launched.
    
*   Species characteristics, such as growth rate, research rate, etc. are passed on when used as a base species for a new species design.
    
*   ‘Redo minerals’ works correctly for comets.
    
*   Lagrange stabilisation time no longer displayed for comets.
    
*   If a class has no valid hull type, it will be saved as a cruiser.
    
*   Fixed plasma carronade tech cost at 70cm and above.
    
*   Wreck text uses same tonnage rounding as class summary.
    
*   Fixed bug that could result in new race being created on a planet with less than 20% water.
    
*   Fixed bug that duplicated parasites attached to a fleet when using drag-drop on the Fleet window, without being visible to the player. This could cause deletion problems in certain situations.
    
*   Fixed bug in the selection of nearby systems for new system generation. Credit to ISN for doing the math to identify this one.
    
*   Prevented Copy + Upgrade from duplicating ground unit classes where only weapon strength has changed and they do not have ground-based weapons.
    
*   Fixed a bug that prevented laser torpedoes from detonating at the correct range.
    
*   Fixed a bug that caused tractored ships to consume fuel.
    
*   Fixed the text of thermal reduction 24% technology (from 25%).
    
*   The explosion contacts for the detonations of laser torpedoes will now also include those hitting the target, rather than only those that missed.
    
*   Point defence impacts on laser torpedoes shown at the missile location, rather than the ship.
    
*   FAC exclusion option on fuel, logistics and repair tabs of the Naval Organization window now working correctly.
    
*   Cryogenic transport was ignored for survivors after total life support failure. Now fixed.
    
*   Fixed a bug that prevented weapon ‘special functions’, such as Bio-Acid, being passed on to a turret using that weapon.
    
*   Fixed a bug that could result in ships have a negative amount of crew.
    
*   Fixed a bug that could result in survey ships with hangar bays being classed as carriers.
    
*   Fixed a bug that prevented successful ramming attacks.
    
*   Fixed a bug that removed wealth costs for research if research speed was set to greater than 100%.
    
*   Double-clicking events for mineral shortages, mineral exhaustion, civilian mining colonies, unrest increasing and inactive labs will now select the correct population, instead of the home world.
    
*   Double-clicking events for over-allocation of labs will now select the research tab, rather than the mining tab.
    
*   Genetic modification centres will be stopped if you turn them off on the industry tab.
    
*   Construction units can no longer recover more abandoned installations than exist, during the increment when the number of abandoned installations is reduced to zero.
    
*   CIWS ECCM correctly displayed on Technology window.
    
*   Range and Speed text boxes on Class window are no longer multi-line.
    
*   Ship components in cargo holds now take up correct amount of space.
    
*   NPR terraforming now works correctly.
    
*   Fixed rare problem with ruin recovery that could cause a #1429 error and subsequently corrupt the database on save. Workaround is to go back to previous save and edit the DB to ensure RuinRaceID and RuinID are 0 in FCT\_SystemBody if AbandonedFactories is 0.
    
*   Fixed rare bug in automated ship design that could cause a hang during game creation.
    
*   Fixed rare bug in automated ship design that could result in a ship design a few tons larger than its jump drive capability.
    

  

**v2.6.0 Minor Changes**
*   Population requirement removed for Spaceports. This is line with population being required for ‘producing’ installations, rather than ‘facilities’ installations.
    
*   Removed crew requirement for maintenance storage bays.
    
*   You can only tractor inactive shipyards.
    
*   If a ship is transferred to another race, including via capture, any trade goods on board are removed.
    
*   NPRs should improve their coordination of missile fire from ships in the same location.
    
*   The number of terraforming installations and/or orbital terraforming modules will be shown on the environment tab.
    
*   Added a ‘Delete All’ button to the Waypoints tab of the Tactical Map sidebar.
    
*   Alien Autopsy research cost reduced from 5000 to 1000 RP.
    
*   Shortened Tech system names where necessary so they all fit within the left-hand column on the Research tab.
    
*   \[N\] suffix on Research tab changed to a prefix.
    
*   Added non-interrupt event for each ground unit unloaded.
    
*   Ground force templates are now obsoleted instead of being deleted. Obsolete templates can be viewed and toggled back to non-obsolete. This will prevent issues with formations lacking templates.
    
*   Added a game option to use a system naming theme in a real stars game.
    
*   Black hole systems on the Galactic Map have a purple background, rather than green.
    
*   Missile contacts will be grouped in the same way as ships.
    
*   The AI will consider more factors when allocating missiles to targets.
    
*   The current jump point suffix of (JG) is replaced with (S) for stable, instead of the legacy reference to ‘jump gate’.
    
*   The “Class cannot be modified while locked” message will only popup if a component in a class is double-clicked, rather than selected.
    
*   Added a blank line between shipyard types on the shipyard tab of the Economics window.
    
*   Added total fleet fuel (excluding harvesters) and maintenance capacity to the Race window.
    
*   Increased maximum missile size to 200 MSP (500 tons).
    
*   Distance display on the Galactic Map finds the shortest route in billions of kilometres, rather than number of transits.
    
*   When refuelling from tanker fleets (such as fuel harvesters), the tankers will be accessed in order of which has the most fuel relative to capacity.
    
*   On the Commander window, ship classes with the ‘No Officers’ flag set will be excluded from potential ship assignments.
    
*   When using the Load Installations order on the Naval Organization window, the number of cargo holds required is displayed in parentheses after each installation.
    
*   When using the Load Ground Units order on the Naval Organization window, the size of each formation in tons is displayed in a new column.
    
*   Ground combat summaries are now by planet or ship, rather than Empire-wide.
    
*   The treeview nodes for Naval Admin Commands retain their expanded or closed status on save.
    
*   Double-clicking a ship in the Ship List for the Parent Class will select that Ship (or parent fleet if that option is selected) in the Naval Organization Window.
    
*   Only player race populations count toward reduction in Aether Rift growth.
    
*   Wealth cost of research now modified by 1 / Species Research Speed. For example, this means that if the species research is 50% of normal, the cost per RP will be 2 wealth.
    
*   NPRs will analyse any ground formations gifted by the player and assign them one of their own templates, so they can use them effectively.
    
*   Added a Clear Queue button to the Ground Construction tab on the Economics window.
    
*   Added a Collapse All button to the Naval Organization window. This closes every node in the tree, including admin commands, fleets, sub-fleets, ships and squadrons.
    
*   Added capacity remaining to the parasite, ordnance and troop lists on the Ordnance & Fighters tab of the Class Design window.
    
*   Added a Non-Combat button to the Formation Templates tab of the Ground Forces window. This allows you to toggle the non-combat status of each Ground Unit Class.
    
*   The research point cost for player-designed components is multipled by the research speed. For example, if research speed is 50%, RP is halved for player-designed components.
    
*   When drag-dropping a fleet on to another fleet in the Naval Organization window, if you hold shift the dragged fleet will become a sub-fleet of the target fleet.
    

  

**Updated Missile Salvo Display**

I have updated the Missile Salvos tab on the Naval Organization window to show System and Location, with the latter using the same method as the fleet location description. It also sorts by system and then order of salvo creation.

I’ve also added a new sidebar tab to the Galactic Map display that shows salvos in a selected system, with just the missile name, amount and location. This is primarily for checking buoy placements.

  

**Join Fleet and Begin Overhaul**

I’ve added a new order called ‘Join Fleet and Begin Overhaul’.

This functions as a combination of the Join Fleet and Begin Overhaul orders, with the moving fleet joining the target fleet and immediately entering overhaul. This order will only be available if the target fleet is in a maintenance location and the overhaul will only start if the target fleet is still in a maintenance location when the moving fleet joins it.

  

**Galactic Map Right-click Menu Update**

Currently, right-clicking on a system on the Galactic Map allows you to select Fleets or Populations in that system and launch the Naval Organization or Economics windows respectively with the target item selected.

For v2.6, I have added a menu item to open the Tactical Map for that system, plus separate menu items for each fleet to centre on them in the Tactical Map, rather than opening the Naval Organization window.

  

**Galactic Map Search**

Added a ‘System Search’ button to the Galactic Map.

You click the button and it pops up a text entry box. Type the system name, press enter and the galactic map will centre on the desired system (if one can be found with the search text).

I’ve also added a ‘Centre on Selected System’ checkbox to the Mineral Search window. If this option is selected and the galactic map is open, it will be centered on the system containing the selected system body.

  

**Maintenance Failure Event**

I’ve added a new ‘Maintenance Failure’ event. This occurs in three situations:

1.  Replaces the ‘Maintenance Problem’ event after a weapon failure that cannot be repaired.
    
2.  Replaces the ‘Maintenance Problem’ event after a life support failure that cannot be repaired.
    
3.  Replaces the ‘Damage Report’ event after a maintenance failure that cannot be repaired.
    

  

**Auto Route Update**

On the Naval Organization Window, the Autoroute by System option displays system destinations based on the same priority as System Locations. Populated systems will be displayed first, then those with automated mines, civilian mining colonies, terraforming capability or deep space tracking stations, followed by all other systems in name order.

  

**Galactic Map Sidebar Update**

The Galactic Map sidebar tab for jump point locations has been updated.

The dots displaying jump point locations will show orange for stable jump points and the existing red colour for non-stable jump points. The list of jump points shows an (S) suffix for stable jump points.

  

**Variable-Range Laser Torpedoes**

Laser Torpedoes can be assigned a minimum and maximum detonation range. These can be the same value.

When launched, a salvo of laser torpedoes will generate a random detonation range between the minimum and maximum values and detonate when it reaches that range. The strength of any successful hits will depend on the range at detonation.

All laser torpedoes of the same type launched at the same time, even in separate salvos, will have the same randomly generated range. This is to avoid torpedoes from the same wave detonating during different increments.

This mechanic should introduce a new factor into point-defence planning.

  

**Research Project Display Update**

I’ve added two read-only display options to the Research tab. They are visible on the bottom right.

The Population and Empire options change the view between projects at the currently selected population, or all projects in the Empire. Those at different populations have an (E) prefix. In the Empire view, you cannot interact with projects at other populations.

The Normal and Project Only options change between a ‘normal’ view, which is the standard UI and a read-only list of projects using the whole tab and hiding most of the UI - useful for when you have a lot of projects.

  

**More Granular Beam Fire Controls**

I’ve changed beam fire control design to have much more granular size options for modifying range and tracking speed.

There are now generated numbers from 0.1x to 4x in 0.01 increments, rather than the current method of using tech systems.

  

**Contact Updates in Alien-Controlled Space**

The Neutral, Friendly and Allied Contact Update events have been split into two types.

1.  A ‘Neutral Contact Update - AC’ is reported when a contact is updated in a system which has been flagged by the detecting race as controlled by the detected race.
    
2.  A ‘Neutral Contact Update’ is reported when a contact is updated in any other system.
    

This is to allow hiding of less important contact update events if desired, to prevent too many events being reported.

  

**Maximum Geological Survey Radius**

Currently, Fleets with standing orders to conduct geological surveys will only consider bodies within ten billion kilometres. This is from their current location (if they have no existing orders), from the last location in their orders list, or from the last surveyed body if they have a standing order to survey multiple bodies.

For v2.6, this range can be changed. There is a new text entry field in the Misc tab of the Fleet tab of the Naval Organization window called Maximum Geological Survey Radius, where the range can be set. A 0 value will be ignored and the default 10b km used instead.

The radius could be increased for very large systems, or used to restrict surveys to a small area - for example, a gas giant and its moons - if the system contains hostile forces.

  

**Boarding Swarm No Longer Possible**

I’ve removed the ability to board swarm ships.

This is for two main reasons. Firstly, they are living creatures so there isn’t anything to board - no rooms or corridors, etc. - and nothing a human or alien crew could control once on board. Secondly, there is no Swarm ‘crew’ so any boarding is instantly successful, even if a single marine makes it on board. There is a third consideration as well, which is that easy boarding also means easy access to higher tech.

I could have added ‘crew’ instead of removing the ability to board, but that didn’t seem to fit in with the flavour of the swarm.

In terms of mechanics, you won’t have an ‘Attempt Boarding Action’ move order when you select a swarm contact. I also fixed a bug where you could attempt to board non-ship contacts.

  

**Boat Bay Update**

The Boat Bay has been renamed ‘Hangar Bay - Small’. The Small Boat Bay has been renamed ‘Hangar Bay - Tiny’. Both will be researched automatically when the Hangar Bay is researched.

The nomenclature is a 20-year old holdover from Starfire and it could be confusing for new players that two components that did the same thing had different names.

  

**Missile To-Hit Summary**

The missile summary displayed on both the Missile Design window and the Class Design window has been updated. Currently, it displays the chance to hit against targets with speed of 3000 km/s, 5000 km/s and 10,000 km/s.

For v2.6, it will show the target speed at which the missile has a 100%, 50% and 25% chance to hit.

  

**Scrap All Components**

The Stockpile tab of the Economics windows now has a Scrap All button.

This will scrap all components in the stockpile, with the usual wealth and mineral refunds, except for those components that are researched and not obsolete, or those that can be disassembled.

  

**Scrap Components in Cargo Hold**

Any fleet that contains a ship with a salvage module can scrap any ship components in the hold of any ship in the fleet.

After selecting a fleet and navigating to the Transported Items tab, there are two options.

1.  Select a specific component type and scrap only that.
    
2.  Scrap all components, except for those that can be disassembled and those that are researched, non-obsolete components.
    

The component list for the fleet uses the same colours as the population component list.

  

**Chat GPT Naming Themes**

I’ve added some ship name, system name and commander name themes that I generated using ChatGPT. I’ve found it to be very useful for generating theme-based names when you run out of ideas ![:)](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/30958a87cf55f4d9ce8060f11f5189deddc2f423.png)

There are 24 ship name themes based on Babylon 5 and Star Trek races, with between 60 and 100 names per theme. I’ll attach some examples.

The 13 system name themes and 11 commander name themes, all for Babylon 5 races, are a similar size. They are more generic, but suitably ‘alien-sounding’

  

**Larger Parasites**

I’ve added a ‘Larger Parasites’ checkbox to the Class Design window. If this is clicked, the potential parasite list will include any class design small enough to fit in the hangar bay of the currently selected class. These can be added to the strikegroup if desired.

Fighters and FAC designs will always be displayed in the list, regardless of which class is selected.

  

**Removal of Low Gravity Infrastructure**

I’ve removed low gravity infrastructure from the game. Instead, a population on a body with a lower gravity than its species minimum will require twice as much infrastructure as an equivalent colony cost planet with tolerable gravity. Low gravity bodies will still have a minimum colony cost of 1.

This should make it easier to manage infrastructure, especially for the civilians and NPRs, and reduce micromanagement, while retaining the same principle of low gravity being a more difficult environment for colonists.

  

**Random Wrecks**

Systems may occasionally contain one or more random wrecks. These will generally be old precursor wrecks, although the type will be unknown unless you have detected an intact version of the same type.

While the player may salvage these wrecks, they may also draw the attention of NPRs and certain spoiler races.

  

**Alien Race Portraits**

Currently, Alien Race portraits are shown on the Intelligence window as soon as a new race is detected. For v2.6, the portrait will remain blank until one of the following events occurs:

*   Communication is established
    
*   A populated colony of the alien is captured or transferred to the viewing race.
    
*   A ship of the alien race surrenders or is captured
    
*   A lifepod of that race is rescued.
    
*   A boarding action takes place involving the alien race.
    
*   Sufficient ELINT data is gathered to generate an Intelligence Event
    

Ships and Flags will still be displayed as normal.

  

**Alien Sensor Update**

There are a few bugs around detection of alien class sensor types, so I have fixed the code and added some new features.

*   There will no longer be duplications of sensors, or the same sensor on different ships showing with a different name.
    
*   The display on the alien class window is fixed so that it doesn’t create a horizontal scroll bar.
    
*   When sufficient ELINT data is gathered for an alien active sensor, an intelligence event will display the sensor range and resolution.
    
*   In addition to being listed on each class, active sensors with at least 100 intelligence points will have their own section on the intelligence treeview, showing range, resolution and known classes. The sensor name can be changed
    
*   Alien sensors with at least 100 intelligence points will be drawn on the map in the same way as friendly active sensors, if the Display Active option is on.
    

  

**Officer Graduation Age**

On the Create Race window and the Race Information window, you can set the ‘Graduation Age’ for each Species.

This sets the starting age for each new commander and replaces the default 21.

  

**New Conventional Systems**

The following systems will be treated as conventional for v2.6:

*   Laser 10cm Focal Size
    
*   Infrared Laser
    
*   10cm Railgun
    
*   Railgun Launch Velocity 10,000
    
*   Particle Beam Strength 2
    
*   Particle Beam Range 60,000 km
    
*   15cm Carronade
    

This provides a few basic weapons for conventional races and reduces start-up RP costs a little.

All the second steps on the above progressions, as well as Capacitor Recharge Rate 2, will need Trans-Newtonian Technology.

  

**Spinal Particle Beam**

Particle beams can use Spinal and Advanced Spinal Mounts in v2.6, including for the particle lance variant.

The Spinal / Advanced Spinal mounts result in the following changes to the standard weapon.

*   Weapon Damage and Power Requirements are increased by 50% / 100%
    
*   Weapon Size is increased by 25% / 50%
    
*   Range is increased by 12.5% / 25%
    

  

**Ex-Civilian Mining Complex**

v2.6 adds a new type of mining installation - the Ex-Civilian Mining Complex (XCM). This has the following characteristics:

*   The XCM can only be created by capturing enemy Civilian Mining Complexes, in which case each CMC becomes an XCM.
    
*   The XCM has the same mining output as the CMC, equal to ten automated mines.
    
*   Unlike the CMC, the XCM can be transported by freighter. It requires the same transport capacity as a research facility, which is double the capacity required for ten automated mines.
    
*   The XCM is not a civilian installation and cannot be converted back into CMC
    

  

**Fleet Treeview Suffixes**

On the Naval Organization window, you can toggle suffixes to show whether a fleet has movement orders, one or more ships in overhaul or has one or more jump-capable ships.

*   Overhauls have a \[OV\] suffix.
    
*   Movement Orders have an \[MO\] suffix.
    
*   Jump Drives have \[JM\] for military, \[JC\] for commercial and \[JB\] for both.
    

The toggles are stored at the game level and retain their status on save.

**Limited Planet Distance**

A new game-level option for v2.6 is Limited Planet Distance. This option has the following effects.

*   No planets or asteroids will be created if their perihelion is more than twice the distance of the outer ring of survey locations. That is 12 billion kilometres for Sol.
    
*   Bodies with eccentric orbits that have a perihelion within the limit and an aphelion outside will still be created, but their starting position will be somewhere on the portion of their orbit that lies within the limit.
    
*   Companion stars with a perihelion more than 24 billion kilometres from the primary will be deleted unless they have a planet with a LaGrange Point and either the primary star, or another star within 24 billion kilometers of the primary, has at least one gas giant or superjovian.
    
*   Companion stars with eccentric orbits that have a perihelion within the 24 billion kilometre limit and an aphelion outside will still be created, but their starting position will be somewhere on the portion of their orbit that lies within the limit.
    

Every current system body in Sol will still be created as they all have perihelions less than 12 billion kilometres.

**Shipping Line and Colony Changes**

**New Shipping Line Income**  
0.0001 per colonist per billion kilometres travelled  
0.004 per passenger per billion kilometres travelled  
0.25 per trade good per billion kilometres travelled  
0.0001 per cargo point per billion kilometres travelled

Export payments are removed.  
Dividends are removed.

**Shipping Line Tax**  
Each race can set a tax rate for its shipping lines from 0 to 100%. This starts at zero and can be updated at any time on the Wealth tab of the Economics window. This tax will be deducted from the income of the shipping line and assigned to the race. With 100% tax, the shipping line does not generate any profit and cannot buy new ships. The tax will also be applied to income from player contracts, which means the player could effectively use shipping lines for free in an emergency, again with the downside of no new ships.

While in reality the shipping line would have overheads for fuel, etc. this is assumed to be included in the mechanics. Otherwise I would have a slightly higher income, maintenance charge, lower max tax rate and end up back in the same place with extra coding involved.

**Trade Good Changes**  
The base production of Trade Goods is halved. In addition, the production is multiplied by the manufacturing percentage of the colony, so smaller colonies will generally produce more trade goods per capita. For a homeworld, trade good production is likely to be about 1/8th of the existing level (halved and then multiplied by 25%).

**Colonization Pressure**  
An entirely new mechanic called Colonization Pressure has been added. This determines the percentage of any given population that is willing to pay for passage on shipping line colony ships or liners. This is calculated as follows:

*   The base rate is 2%
    
*   Colony Cost is added as a percentage, so a Colony Cost 2 world would add 2% to colonization pressure.
    
*   Each 50 points of radiation adds 1% pressure
    
*   Where a colony has insufficient infrastructure
    
    *   Modified Colony Cost = Colony Cost \* ((Required Inf - Actual Inf) / Required Inf). If Inf is required and zero is present, then MCC = CC
        
    *   \+ 25% is added to pressure for each point of modified colony cost (so CC2 with no infrastructure adds 50%)
        
*   If the population for a system body exceeds the max pop the added pressure = excess pop / total pop. So if a colony was on a planet with max pop 100m and actual pop 125m, 20% would be added to pressure.
    
*   If a colony has insufficient protection (which only applies at 10m+), the added pressure is (1 - (Population PPV / Required Protection)) \* 10. So completely unprotected will add 10%.
    

Ideal habitable worlds with no issues around security or radiation will generally have low rates - usually 2%. Colonies with high colony costs, or that are overcrowded or unprotected, or that have suffered recent bombardment, will have higher pressure.

Available Colonists will be tracked for all populations, but only displayed for those selected as a Source population.

**New Colonists**  
Each construction phase, more colonists will become available at the rate of:  
(Length of Construction Phase / Year) \* Population \* Colonization Pressure

For example, if colonization pressure was 5% and the population was 100m, then a 5-day construction phase would generate (5 / 365) \* 100m \* 5% = 68,493 colonists. A population of 1 billion with 2% pressure would generate 274,000 colonists every construction phase.

The max number of available colonists at any time will be equal to the annual amount generated. This ‘production’ of colonists has a side effect of breaking up the shipping line colony ships so they all don’t move everywhere together. As shipping line colony ships load colonists they will be deducted from the available colonists total.

**Shipping Line Restrictions**  
Shipping line colony ships will only select a colony as a source of colonists if the currently available number of colonists, minus the capacity of shipping line colony ships already en route to load colonists, is greater than or equal to the ship’s capacity.

Shipping lines will not deliver colonists to a population with a pressure of 10 or greater. This simulates that potential colonists are unlikely to pay to move to a planet where undesirable factors are causing a notable portion of the existing population to leave.

**Government-owned Colony Ships.**  
None of the above affects player-controlled ships and player ships will not reduce available colonists. Essentially, people will go where the government tells them, but they won’t pay to go anywhere undesirable.

**Why Change?**  
These changes are to prevent shipping lines overwhelming the game by growing too large. They can end up with hundreds of huge ships, that strip planets of colonists or generate so much wealth as to make it irrelevant. Income based on distance, player taxes and a much smaller supply of colonists and goods should restrict their growth without any ‘artificial’ restrictions. Also they will no longer deliver colonists to unprotected colonies, which gives the player a new problem to solve.

**Shipping Line New Ship Selection**

For v2.6, when a shipping line considers building a new ship, it will use the rules below. For the purposes of those rules, a liner can only be selected if there are at least two systems with surface population greater than zero. A fuel harvester can only be selected if harvester tech is available, there is a Sorium deposit in a player system with a population of 10m+ and the civilian harvester option is on.

*   If there are less than six civilian ships, or if all existing colony ships and freighters have orders, a freighter or a colony ship will be selected. If there are fewer of one type, that type will be built. Otherwise it will be random.
    
*   Else if all freighters have orders, a freighter will be built
    
*   Else if all colony ships have orders, a colony ship will be built
    
*   Else if all liners have orders (or there are no liners) and they are permitted, a liner will be built.
    
*   Else a ship type will be randomly chosen, with liners and harvesters included if permitted. Freighters have double the chance of the other types to be selected.

**Population Fuel and Maintenance Warnings**

Each population now has two ‘warning levels’, one for fuel and one for maintenance. You can enter these amounts in two fields in the Governor/Misc tab of the Economics window (the Governor tab in v2.5.1)

If the amount falls below the specified fuel or MSP level during a construction phase, a ‘stockpile warning’ event will be generated with the current amount and warning level of fuel or MPS.

If the Single Warning option is selected, this event will only be displayed once and will not be displayed again unless the stockpile increases above the warning level and then decreases again.

If the Constant option is selected, this event will displayed in every construction phase where the stockpile is below the warning level.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/816b118e10e8665571c676c72d1440eb14b996d7.png)

**Ship Construction into Admin Commands**

The shipyard tab has an extra checkbox called Use Admin (next to Use Components).

If you click this, the Fleet list (where you select the fleet that receives the new ship) is replaced by a list of Naval Admin Commands. You can select an admin command as the destination of the new ship. When it is built, it will be created in a single-ship fleet under that admin command.

There is a Default Admin button (replacing Default Fleet when the checkbox is clicked), so that the shipyard will remember the destination admin command in the same way as Default Fleet

The checkbox retains its value independently for each shipyard. So if you are using Shipyard A to build into an admin command and Shipyard B to build into a fleet, the UI will swap between the admin command list and the fleet list when you select the different shipyards, along with their respective defaults.

Only construction tasks can have an admin command destination. It does not apply to refit, repair or scrap.

This does not affect (for now), the destination fleets for fighters and space stations.

**Instant Build into Admin Commands**

This works in a similar way to Ship Construction into Admin Commands.

On the Priorities/Misc tab of the Class window, you can choose to build into a fleet or an admin command. The location of the new fleet will be the location of the admin command.

If you build multiple ships at once, they will be created as individual fleets within that admin command.

All the normal options apply, such as naming up front, including missiles, strikegroup, etc..

**Population Transfer**

I’ve added the option to transfer one of your populations to any known ‘alien race’, which is effectively any race you have detected, either player or NPR. This is a player option, not SM.

On the Governor/Misc tab of the Economics window, there is a dropdown to select the target race and a button to activate, followed by an ‘are you sure’ warning.

Only the surface population will be transferred, with any orbital habitats remaining with the current race. Shipyards will be transferred. The status of the transferred population will be ‘Imperial Population’.

When the population is transferred, the following will happen:

*   Research projects will be cancelled and the research queue cleared.
    
*   Industrial projects will be cancelled and the queue cleared.
    
*   Any shipyard tasks will be cancelled
    
*   Ground unit training will be cancelled and the queue cleared.
    
*   Supply and Demand requests will be cancelled
    
*   The population will be removed from any sector assignment
    
*   Naval Admin Commands at that population will be deleted.
    
*   Any associated alien population records will be deleted.
    
*   Any races with a current contact on the population will be informed of the transfer
    
*   Any contacts for that population will be deleted
    
*   Any movement orders targeting that population will be cancelled.
    
*   Any assignment to that population will be removed from fleets.
    
*   Any commander assignments involving the population (governor, academy) will be removed.
    
*   Any ground units at the population will be deleted.
    
*   Any inbound missiles will be deleted
    
*   POWs of the new race will be added to the academy pool.
    
*   If necessary, the capital of the transferring race will be reassigned.

**Galactic Map Screenshot**

I’ve finally got tired of piecing together multiple screenshots to create the full galactic map. Therefore, I’ve added an option to create a single screenshot of the entire galactic map with a button press, even if the map is much larger than can be displayed on the screen.

For example, here is the view of the galactic map from my current campaign, just before the screenshot button is pressed. You don’t have to set it in a particular location as the code will handle it.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/25e3a6b4fd37c764aaf28e2d556ac6f4200b5ed5.jpeg)

After pressing the Screenshot button on the sidebar (top left), you get a dialog box asking for file name and save location. When you press Save, it creates the screenshot below at full size.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/278898732cde2ac80409352ae55f02453e1f86f6.jpeg)

**Alien Race Territory Display**

I’ve added a new option at the bottom of the display tab on the Galactic Map called Flag Status. It is a dropdown menu that contains “Default View”, the name of the viewing race and the names of all known alien races.

Default is the current situation, where a flag is displayed if the viewing race has specified a system as controlled by an alien race and no flag is displayed for no control, or viewing race control.

Selecting the viewing race option will remove all alien control flags and instead display the viewing race flag for all non-alien systems.

Selecting an alien race will use the flag of that race to highlight all systems where that race has been detected, based on the tactical intelligence data for that race. Note this is NOT every system the alien race has explored, but every system in which you have detected them. Patrols or buoys, etc., will improve this intel.

This concept of this new function is to understand the true extent of known alien exploration, without having to check TacIntel, and how that view matches your own estimates of where control lies.

Here is an area of my current campaign with the default view, with my own race selected and with four different alien races selected.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9ef99bc45c3c627e87d4c739cdbb3584edec66ea.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9187c369f7916369ad57b25f3cb2006213ed125d.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9615ab9d88439258dc3bf1d40a13fe3ff40dfbfa.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/86c6710c76c5488a391d2060f52df1f2ae91dbeb.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/86c6710c76c5488a391d2060f52df1f2ae91dbeb.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/f97999ce08785f8fef2a5f63f6501d4e77043a91.png)

  

**Galactic Map Current Contacts**

In addition to displaying alien flags in systems where the selected alien race has been detected, the map will also show alien ship icons wherever there is a current contact (including populations) of the selected alien race. This can be adjusted using radio buttons to also show contacts less than one day, one week, or one month old.

This new view is intended to provide a strategic overview of the activity of a given alien race. For example, below the selected alien race is the Followers of Zharov. The flags show systems where they have been detected at any point in history, while the ship icons show systems where ships or populations are currently in contact with the Empire of Japan.

Clicking on an individual system and selecting the contacts tab will show the individual contacts. The contact treeview will now retain the open/close state for each race as you move between systems.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a97f8ffc9fe6a959a57977118b73fbdd5cb199dc.jpeg)

**Converting Alien Components**

If you have alien ship components in the stockpile list at a population that exactly match your own components, you can modify them for your own use without them being classed as ‘Alien Tech’

For example, assume you have a 15cm Near Ultraviolet Laser with capacitor recharge rate 3 and you salvage an alien laser component (or find one in ruins) with exactly the same background technology. This will be highlighted in orange on the list of components in the stockpile and a ‘Modify for Use’ button will appear when you click on it.

Clicking the button will replace the alien component in the stockpile with your own matching component, so you can use it for shipbuilding as if you produced it in construction factories.

  

**Researching Alien Components**

If you have alien ship components in a population stockpile list that do not match any of your own components, but use only background techs that you have already researched, you can flag those component for research.

Any such components will be highlighted in blue on the list of components in the stockpile. A description of the component and a ‘Research Comp’ button will appear when you click on it.

Clicking the button will create a research project for that component that can be researched in the normal way. Once that project is complete, you will be able to use the components in the stockpile and produce more. Once researched, you can rename the component, which will also change the name of the component when you view it in alien ships.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/fa658c27b71afae75086e8792a384b8fbfff99da.jpeg)

  

**Researching Alien Missiles**

If you have alien missiles in an population stockpile list, you can flag those missiles for research. Completion of the research will allow you to load those missiles, although not to build them.

Any such components will be highlighted in blue on the list of missiles in the stockpile. A brief description of the missile and a ‘Research Missile’ button will appear when you click on it.

Clicking the button will create a research project for the missile that can be researched in the normal way. Once that project is complete, you will be able to see full details of the missile and load the stockpiled missiles on to ships. You will not be able to build the missile, as it may contain more advanced components than your race is able to produce. Once researched, you can rename the missile, which will also change the name of the missile when you view it on alien ships.

**Penalties for Undermanned Ships**

In v2.5.1, the only penalty for being undermanned is an impact on morale once the current crew drops below half of the standard class crew. Morale is also affected by other factors, such as ships exceeding their deployment time. However, as morale affects chances to hit, maintenance failures, fire control delays, fleet training and surveying, it is only a factor for military vessels.

For v2.6, under-manning will have separate, specific consequences beyond its impact on morale, which are listed below. Note that the direct under-manning penalties begin as soon as the crew drops below the normal manning level (rather than less than 50% for the morale impact).

*   The rate at which shore leave reduces deployment time (normally 10 x time elapsed) will be reduced if the crew is not at full strength. This modifier is equal to Current Crew / Class Crew.
    
*   The time required for ships to load/unload cargo, colonists or ground forces is increased if the crew is not at full strength. This modifier is equal to Class Crew / Current Crew.
    
*   The ‘production rate’ of the following modules is modified on ships with less than full crews by Current Crew / Class Crew:
    
    *   Geological and Gravitational Survey Sensors
        
    *   Sorium Harvesters
        
    *   Orbital Mining Modules
        
    *   Maintenance Module
        
    *   Salvage Modules
        
    *   Terraforming Modules
        
    *   Jump Gate Stabilization Modules.
        

There is an existing order called Add Replacement Crew. This can be used at any colony with a population of at least one million. Currently, this order uses crew from the Academy pool to provide replacements. For v2.6, it will not reduce the pool if the class requiring replacements has the Conscript flag set.

  

**Captured Ship Penalties**

Currently, when a ship is captured it suffers the same penalty as a ship leaving overhaul early. This ‘overhaul penalty starts’ at 99% and gradually reduces to zero over one month. It affects engine power, shield strength, chance to hit and crew grade. However, after a month the captured ship is effectively fully functional.

For v2.6, I have added the following additional penalties:

*   The time deployed for the captured ship is set to double the max deployment for the class. So if a ship with a 12 month deployment time is captured, the deployment clock on the captured ship will be set to 24 months
    
*   The current crew is set to 1, which will trigger immediate penalties for being severely undermanned. This is to simulate that even if a prize crew is added, it will be completely unfamiliar with the ship.
    
*   If the ship is military, morale is set to 25%, as the crew and deployment penalties would result in this number anyway.
    

The ‘Add Replacement Crew’ order (see previous post) will appear in the potential orders list if a ship has less than the standard crew and the destination is a colony with a population of at least one million.

Due to the deployment penalty, even after the ship is fully manned, it will still need to spend time at a colony undergoing ‘shore leave’, which simulates the time required for the new crew to learn how to operate the ship. Unless the crew is replenished first, shore leave will be ineffective due to the penalty for being under-manned. In practice, this means the captured ship has to be taken to a population of one million to eventually become fully effective, rather than a recreational facility or the 50k population required for shore leave.

**Ramming Update**

I’ve recently discovered that ramming doesn’t work in Aurora. Or rather, it does work but no damage was being registered:)

While I was fixing the bug, I did a general tidy up for ramming. The updated ramming rules are as follows:

*   Currently, only AI races will ram. Even in this case, it is limited to certain spoilers, or AI ships that decide to take drastic action, with the chance based on determination, xenophobia and combat effectiveness.
    
*   The chance of a successful ram is equal to (Ramming Ship Speed / Target Ship Speed) \* 5. For example, a ship that is twice as fast as the target has a 10% chance to ram.
    
*   The base damage for ramming is equal to the size of a ship in tons / 50. For example, a 5000-ton ship will inflict 100 points of damage.
    
*   The ramming ship will take base damage based on the size of the target. For example, a ship ramming a 10,000 ton enemy ship will suffer 200 points of self-inflicted damage.
    
*   The base damage is increased by 10% for every 1000 km/s speed advantage of the ramming ship. For example, a ramming ship with a 10,000 km speed advantage will inflict double damage on both the target and itself. There is no penalty to damage if the ramming ship is slower.
    
*   Only one ramming attempt may be made per increment.
    

I may add player ramming in future, but it will have to be implemented carefully. Unlimited ramming would likely result in large ships with nothing but shields and boosted engines zipping around the system trying to ram everything. Currently I am thinking along the lines of implementing something similar to the AI, where player officers have some form of hidden ‘self-sacrifice’ attribute, modified by racial xenophobia. When heavily outnumbered and ‘in trouble’ (TBD), they may override player instructions and attempt to ram the nearest hostile ship. Another option is some form of overall Empire ‘self-sacrifice’ attribute, which makes ramming available more generally after the race has suffered significant military losses or high civilian casualties. The aim is to make ramming a tactical or strategic desperation measure, rather than a planned tactic for which ships are designed from the keel up (in which case they would probably have a large warhead as well).

**Updated POW Mechanics**

For v2.6, when you rescue a life pod from one of your own ships, any crew will immediately go into the academy pool (with appropriate adjustment for grade) and any officers become immediately available.

When you rescue life pods from other races, there is no longer an immediate interrogation. Instead, the prisoners remain on board until dropped off at a colony with an Imperial Population of at least 1m or transferred to another ship using a new ‘Transfer Prisoners’ order. The ‘Unload Survivors’ order has been renamed to ‘Unload Prisoners’. Prisoners will include both enlisted personnel and officers and the latter will be listed separately, including their rank level, on board ships and at populations.

When prisoners are at a colony with an Imperial Population of at least 1m and a naval headquarters, and you have established communication with the prisoner race, they will be interrogated. The enlisted prisoners are ‘processed’ at the rate of 5000 per year per naval headquarters. So a colony with four naval headquarters could process 20,000 per year. Each processed enlisted prisoner generates 0.1 intelligence points, which are combined with ELINT intelligence points for the same race. As in v2.5.1, when the intelligence points for a specific alien race reach 100, an intelligence event is generated and the total is reduced by 100. The total enlisted prisoners for each alien race at a colony are listed separately, along with the percentage that have been processed.

Officer prisoners are treated differently. All officers at a suitable colony are interrogated simultaneously, but it may take some time for them to give up useful intelligence. The percentage chance of ‘processing’ a given officer in any given increment is equal to:

Number of Naval Headquarters \* 200 \* (Increment Length / Year) \* Interrogation Modifier.

So assuming the Interrogation Modifier is 1, the chance of successful interrogation during a 5-day increment on a planet with a single naval headquarters is about 2.75%. On a planet with four naval headquarters over the course of a month, the chance is about 50%. Note this is not simulating getting someone to talk, but rather extracting useful intelligence from that discussion.

The Interrogation Modifier is equal to (Determination + Xenophobia) / (50.0 \* Rank Level)  
For example, a prisoner of rank level 2 (one above the lowest rank for that race), with determination and xenophobia of 50 each, will have a modifier of 1. Higher rank or higher determination and xenophobia will make the prisoner harder to break down and vice versa.

An officer that is ‘processed’ will generate a base intelligence level equal to (Rank Level + 1)^3. For example, the lowest ranked officer of an alien race will have a base intelligence level of 8. Level 2 officers will have a base intelligence level of 27, level 3 will have 64 and level 4 will have 125. Once that is determined, there will be two random rolls based on a range from 1 to the base intelligence level, which are added together to generate intelligence points. For example, a L2 officer will generate two rolls from 1 to 27 and the results added together will be the resulting number of intelligence points.

It is possible for a L3 officer, and likely for a L4 officer, to generate an intelligence event based on solely on their interrogation. If senior officers are captured, it may be worth transporting them to colonies with multiple naval headquarters if timely intel is required.

Non-hostile ‘prisoners’ may also be interrogated, although the value of intelligence provided is lower because the amount of persuasion involved will be correspondingly lower. Prisoners from neutral races provide 50% of normal intelligence points, friendly provide 20% and allied 10%.

Captured officers and crew will be freed if held at a planet that is subsequently liberated, or on board a ship that is captured. When a ship surrenders, its crew and any officers on board will become prisoners on their own ship.

A new tab on the Economics window shows either the prisoners at the current pop, or all prisoners in the Empire. For each officer prisoner or group of enlisted, the tab shows their current location (population or ship), number of naval headquarters (for populations), system, name and rank (including rank level) for officers or number of enlisted and the processing status.

Hostile prisoners may be executed, or spaced depending on their current location, using a button on the new POW tab. Non-hostile prisoners may be released instead. Releasing non-hostile prisoners immediately removes them from their ship or population location and will generate a diplomatic boost (from the perspective of the prisoner race) equal to 10% of their intelligence point value. This diplomacy boost will be reduced by 75% if they have already been processed.

**Multi-System Starting NPRs**

Three new parameters appear on the New Game window: NPR Base Explored Transits, NPR Random Explored Transits and NPR Max Start Systems. All three default to zero.

After the normal NPR creation process is complete, the NPR will generate a number based on the ‘NPR Base Explored Transits’ plus a random value from the ‘NPR Random Explored Transits’. This is known as the Empire Radius. For example, if the Base is 2 and the Random is 4, the NPR will generate an Empire Radius between 3 and 6. If the numbers are not set, the Empire Radius will default to 0.

If Empire Radius is 1 or greater, the NPR will start with its home system already surveyed and will explore its home system jump points. If the number is 2 or more, the newly discovered systems will be automatically surveyed and a new round of jump point explorations will happen. This expansion will be repeated a number of times equal to the Empire Radius. During the last expansion, the new systems will be geo surveyed but not grav surveyed. For example, if the Empire Radius is 5, the NPR will explore five transits out from its home system, with all systems undergoing a full geological survey and all but the outer ring of systems undergoing a full gravitational survey.

If Max Start Systems is set above zero, the process of exploring new systems will halt as soon as that number of systems is reached or the full Empire Radius is explored, whichever happens first. This may leave some systems with known, but unexplored jump points.

During this process of automated expansion, jump points may be linked to existing systems generated earlier in the process by the NPR, but they will never link to an existing system generated by the player race, or a different NPR.

Once all the new systems are generated, the NPR will determine the best sites for both automated mines and populated colonies. This is primarily based on a mining score, modified by colony cost, but will also include sites within strategic locations, such as systems with many jump points. The NPR will conduct terraforming, prioritising the best sites first, with a maximum amount equal to 50 years of production from its starting terraforming fleets.

Automated mines will be assigned to those colonies that lie outside gravitational tolerance, with the better sites receiving more mines. The max amount of automated mines for all colonies is equal to the total number of automated mines at the home world, although they are additional installations.

Populated colonies will be established for those sites that have an acceptable mining score and a low colony cost, or less than colony cost 4 but with a very high mining score. These will be created in order of descending score, with the population size based on the mining score and the distance from the home system, with a limitation on total population for all colonies, based on the home world population.

All mining colonies will be assigned mines and tracking stations based on the population (relative to the number of mines vs pop on the home world). Different categories of population size may also be assigned construction factories, various logistics installations, a naval headquarters, financial centres, maintenance facilities (with production enabled if suitable minerals are present), ordnance factories (if Gallicite, Boronide, Corbomite and Tritanium are present) and fuel refineries (with Sorium). Those colonies used for chokepoint systems will generally have logistics installations and financial centres.

Depending on the importance of each colony, it will be assigned naval and ground forces. These are in addition to the home world forces. Where a colony has naval forces, it will also start with fuel, maintenance and ordnance stockpiles. One additional harvester fleet and one additional terraforming fleet will be added to the normal starting forces and assigned to suitable locations. Additional shipping lines equal to Empire Radius / 2 will be created.

This option allows the player to face one or more well-developed NPRs, rather than the NPRs starting with a single system at the same time as the player.

  

**Post-Start Multi-System NPRs**

If either of the ‘NPR Base Explored Transits’ or ‘NPR Random Explored Transits’ game parameters is set to greater than zero, any non-Minor NPRs generated during the game will be multi-system.

If a jump point exploration leads to the discovery of an NPR home world, no link between the two systems is created. Instead, the NPR is generated using the same rules as the Multi-System Starting NPRs

Once the new NPR Empire has been created, the system from which the exploration took place is linked to one of the systems generated by the NPR during its last round of jump point explorations. If none exist (because all the jump point explorations led to existing NPR systems), the systems generated during the penultimate round will be checked. This will continue inward until at least one qualifying system is found. The qualifying systems are ordered by distance from the exploration system (by real space distance in Known Space games and system numbers otherwise) then checked in order, with a one third chance to select each system for the link. This check will continue to loop through the qualifying systems until one is selected.

Once the link is made, the game will continue as normal, with the exploring player seeing only the linked system, rather than the new NPR home system.

  

**Empire Radius for Customised NPRs**

The setup window for customised NPRs has its own values for Base Explored Transits, Random Explored Transits and Maximum Systems. During game creation, these will override the game-level settings with the settings for each specific, customised NPR.

This will allow the player to have some multi-system starting NPRs, but not all, or to control which starting NPRs have larger Empires. For example, if playing a Babylon 5 theme game, you may want major and minor races, with some minor races being multi-system and others single system, while having larger empires for the major races.

**NPR Fighters and Carriers**

For v2.6, NPRs and Precursors may sometimes deploy carriers and fighters. These can be both missile and energy-armed, with carrier designs appropriate for the type of fighter.

The fighters may be launched against targets within their operational range and will return to their carriers when in need of ordnance, fuel or repairs. If the carriers are damaged or destroyed, the fighters may relocate to a population that can support them.

I was considering not mentioning this, but given it is a complex addition - as it requires both new AI code and integration with the existing code - I think it is better for players to be aware so they can report any odd behaviour.

  

**Carriers for Customised NPRs**

Three new dropdowns have been added to the Customised NPR window, each one with options for Random, Yes and No. If Random is chosen for any option, the game will follow the normal random generation rules for that option.

*   Use Carriers.
    
*   Carriers are Hybrids
    
*   Balanced Fleet
    

Use Carriers is the basic ‘on switch’ for an NPR to include carrier forces in their fleets. If the race is a missile user, the carriers will generally be equipped with magazines and the fighters with box launchers, although it is possible for a minority of carriers to be without magazines and carrying energy-armed fighters.

Races that use energy-armed ships as their primary combatants will only use carriers without magazines that carry energy-armed fighters. Hybrid carriers are an option for these races, in which case the race will replace any carriers with hybrids, which have both offensive weaponry and hangar bays.

If the balanced option is chosen, the NPR will replace some of their major fleet formation with carrier groups (missile or energy or hybrid as appropriate) and some will be focused on ‘normal’ capital ships instead. Without the balanced option, all major offensive fleet formations will be carrier groups, although the race will still retain smaller warship groups, or jump defence forces.

If customised NPRs are not being used, the normal NPR generation will use a random chance for carriers, hybrids and balanced fleets.

**Invader Arrival Chance**

The annual chance of an invasion by the Invaders is changed to a new formula. For v2.5.1 the chance is:

5% \* (Years Since Invaders Activated / 20) \* (Increment Length / Year)

The new version is:

(Largest Rift Diameter in million km ^ (1/3))) + 2%) \* (Increment Length / Year)

For example the annual chance after 30 years of invaders (assuming usual 10% per year growth).

Old: 5% \* (30/20) = 7.5%

New: (175m km ^ (1/3))) + 2% = 7.6%

The annual chance after 50 years of invaders (assuming usual 10% per year growth).

Old: 5% \* (50/20) = 12.5%

New: (1174 km ^ (1/3))) + 2% = 12.5%

The reason for changing the calculation, even though the results appear to be similar, is that I am going to add some options for increased invader threat by increasing the size of rifts. The new formula will increase the invasion chance based on the increased rift size.

  

**Enhanced Invaders**

v2.6 adds an additional option for Invaders. This is a separate checkbox called ‘Enhanced Invaders’ and will only function when the normal ‘Invaders’ option is active.

If Enhanced Invaders is active, there is a chance that a new Aether Rift will be larger than 10m km.

The 10m rift will appear 60% of the time. For 30% of rifts, extra 2-100m km will be added to the diameter (rolled as 2 x 50m) and for the remaining 10% an extra 2-1000m km will be added (rolled as 2 x 500m).

As the chance of invaders appearing and the size of the fleets is based on rift size, this can lead to much larger invasions earlier in the game.

**Enhanced Precursors**

v2.6 adds an additional option for Precursors. This is a separate checkbox called ‘Enhanced Precursors’ and will only function when the normal ‘Precursors’ option is active.

When Enhanced Precursors are active, Precursors are not immediately deployed when a ruin is generated. Instead, they are held in ‘Tombs’ deep underground and will deploy at some point after ruin generation. This deployment is known as Emergence.

The ground forces and each operational group will have a emergence clock, generated when the ruin is created. The ground forces will always have the shortest clock and will therefore emerge first to secure the surface. The bases and ships will emerge at some point after the ground forces and not all at once. This clock is randomised, so different ruins of the same type may have very different emergence timescales. Bases will tend to have shorter clocks than ships, but not always, and the small ruins will tend to have faster clocks overall, as their forces will tend to be small and easily deployed.

The timeframe for ground force emergence can be as long as twenty years, with the ships up to five years later. However, the emergence clock will run down faster than real time if there is activity on the surface or in space close to the planet. This includes ground forces and populations. Larger forces will have a greater effect on the clock, although this is not linear. Combat with Precursor forces will have the greatest impact on speeding up the emergence clock.

Unlike normal precursors, there is a significant chance a ruin is completely undefended. This is as high as 50% for a destroyed outpost and gradually reduces for the larger ruins, but a Partially Intact Colony still has a 20% chance of being undefended. When a ruin is defended, it will tend to have larger forces than normal precursors, with a 50% greater chance of each operational group type appearing.

These changes should add some more interesting decisions to exploiting ruins. While it is certainly possible to have a defending force waiting for emergence, they could wait years and there might be no defenders anyway. As time passes and more ruins appear, it will become more difficult to have defenders stood by in every location. Maybe a quiet approach is better, risking minimal forces to quietly exploit any resources without waking the defenders? Establishing a population is also risky on ruin worlds, even if the ruin itself has been exploited, there may still be entombed ground forces and ships, so populations will need to be guarded. Even different planets in the same system may be under long-term threat.

**Enhanced Star Swarm**

v2.6 adds an additional option for Star Swarm. This is a separate checkbox called ‘Enhanced Star Swarm’ and will only function when the normal ‘Star Swarm’ option is active.

When Enhanced Star Swarm is active, the initial chance to encounter the swarm in a newly-generated qualifying system (suitable mineral source) is reduced from 1 in 30 to 1 in 50.

This first encounter will be the only one that occurs ‘normally’ via exploration, as it is just the start of a Swarm Invasion. After that point, there is a 30% chance per year that new Swarms will be generated. As this is done per 5-day increment, there could be multiple swarms in the same year, or none for several years.

If a new Swarm is generated in a real stars game, it will arrive in proximity to the original invasion system in real 3D space. This is not necessarily close in terms of transits, but due to the way connections work, it should be in the general area. The arrival system is checked by arranging all known system locations (including those that have not been generated) in order of real space distance from the original invasion site and checking each one in turn with a 20% chance of selection.

If this is a random stars game (which does not have real space coordinates), the normal system number selection process will be followed, using the invasion as a start point and using the local chance and local spread settings to generate a ‘destination’ system. This could be an existing system, or an unused system number.

If an unused known stars location or unused system number is generated, the associated system will be generated and the new Swarm placed within it. This will be completely invisible to the player and any NPRs as they will have no knowledge of the system until they discover it (or something emerging from it discovers them). If this is an existing system, the Swarm will be placed in deep space, around twice the distance of the outer survey location ring. This could be an NPR system or player system.

The new Swarm will be generated in the normal way and may have different designs and technology to the original swarm. Later arrivals will generally have better technology. When a new “Invasion Swarm” is generated, there is a 20% chance the invasion will end and no further Swarms will be generated in the game.

**Ground Unit Training Costs by Population**

For v2.6, the training costs of ground formations with special capabilities may be reduced depending on where they are trained, based on the conditions at the time training begins. If a ground unit class has special capabilities, such as desert warfare capability, high gravity gravity capability, etc., those capabilities will be provided for free if the formation is trained on a planet where those conditions occur naturally.

For example, assume a new type of infantry unit is designed (Desert Raider), with personal weapons, heavy armour (x2), desert warfare capability (x1.25) and extreme temperature capability (x1.5), which will cost 0.375 BP. A formation of 2000 Desert Raiders has a size of 10,000 tons and cost of 750 BP. If the formation is trained on a desert planet, the formation cost will be 600 BP (750 / 1.25). If it is trained on a desert planet with a temperature outside the range of the species population, the cost will be 400 BP.

This is to simulate that it is more effective to train ground forces for extreme conditions or environments, if the training takes place within those environments. It also adds interesting decisions about where to train ground forces, rather than stacking all ground force construction complexes in a single location, and should create a more interesting force mix.

It is possible that conditions on a planet may change over time, so to avoid complexity, the cost is determined at the time the task begins. If formations are in a queue, the cost will be checked at the moment they begin training.

The ‘normal’ cost for formations will be shown on the ground forces window. Any reduced cost for training will be shown on the GU training tab of each population.

The following capabilities are free under the listed environments:

*   High Gravity. Planet has gravity higher than population species maximum.
    
*   Low Gravity. Planet has gravity lower than population species minimum.
    
*   Extreme Pressure. Planet has pressure higher than population species maximum.
    
*   Extreme Temperature. Planet has temperature lower than population species minimum or higher than population species maximum
    
*   Mountain Warfare. Planet has a dominant terrain type that includes the words ‘Mountain’ or ‘Alpine’.
    
*   Desert Warfare. Planet has a dominant terrain type that includes the words ‘Desert’ or ‘Arid’.
    
*   Jungle Warfare. Planet has a dominant terrain type that includes the words ‘Jungle’ or ‘Rainforest’.
    
*   Rift Valley Warfare. Planet has a dominant terrain type that includes the word ‘Rift Valley’.

**Galactic Map Class/Admin Display**

The Galactic Map sidebar has a new tab called Icon Display. It has two check boxes called Class Icon and Admin Icon, each paired with a dropdown containing all currently active classes (1+ ship) and all admin commands respectively.

*   If the Class Icon box is ticked, the ship icons on the galactic map will only display for systems that contain ships of the class selected in the associated dropdown.
    
*   If the Admin Icon box is ticked, the ship icons on the galactic map will only display for ships within the hierarchy of the admin command selected in the associated dropdown.
    
*   If both boxes are ticked, icons will appear only where the system has ships of the selected class that are within the hierarchy of the selected admin command
    

This will allow you to quickly identify systems that contain assets of a specific type or function, such as survey ships or terraformers or combat vessels. The Naval Forces tab on the sidebar will function normally, so you will still see all ships of all types in a selected system.

The Class/Admin icon option will override any display setting for Warships or All Ships on the Display tab.

The new Flag Status and Current Alien Contacts sections have also been moved to this new Icon Display tab. The above Class/Admin icon will not function if the Current Alien Contacts option is active.

**Galactic Map Zoom**

The Galactic Map can now be zoomed in and out using the mouse-wheel, in the same way as the Tactical Map. There is no limit to the zoom beyond usability. Each click of the mouse wheel zooms in or out by 1.25x

The system graphics, ship or flag icons and text all zoom with the system locations. You can set a minimum text size if you want to make the text more readable, although at some point the text will clash with that of nearby systems.

The dragging and movement of systems, including multiple systems, centering, system search, etc. all work at different zoom levels. Here are three screenshots showing standard zoom, zoom in and zoom out.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/fd2efa9a9d4c584f03945a61599d56d1a790a785.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cc59fe4ac93e7b4728d71f1292128c6d2af2be40.jpeg)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/5989e6d10241df41145ef541e0406b5c328080bc.png)

You can also remove all text and icons simultaneously with a new ‘System Icon Only’ display option, which overrides everything else. This will make arranging larger maps much easier.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/28ce35effbc4264da168b94e588e5595a71402fa.png)

**Crew Quarter Design Efficiency**

I’ve added a new tech line called Crew Quarters Design. Researching this tech reduces the amount of space required for crew quarters, by improving the efficiency of the design, so the crew can spend months travelling in relatively small space without feeling cramped. After spending 11 of the last 14 months travelling with my wife in a 25’ motorhome, this is a technology I can relate to ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:")

The levels are similar in progression to fuel efficiency tech and start at 10% for 1000 RP, up to 75% for 120,000 RP. The HS required for crew quarters will be reduced by the specified percentage. This is a Logistics technology.

When a class is created, it uses the crew design efficiency (CDE) for the owning race at the point of creation, in the same way as armour. The class will retain that same CDE until manually updated using the Update CDE button, which functions in the same way as the Update Armour button and can only be used when the class is Unlocked.

If the CDE is greater than zero, it will be displayed on the crew deployment line of the class summary.

**Refuelling Changes**

Refuelling systems are changed from 500 tons to 2000 tons.

A ship may mount multiple refuelling systems and the total refuelling rate is equal to their combined flow rate.

The tech progression for the Refuelling System components has changed. Previously, the steps started at 50,000 litres and went up to 500,000. The same number of steps now progresses from 20,000 to 900,000, so each step is much more meaningful.

Refuelling Hubs in their current format have been removed from the game. All orders, standing orders and conditional orders relating to refuelling hubs have also been removed.

This will make orders and conditional orders more simple, as you no longer need to specify refuelling hub as a separate destination. Tankers with multiple refuelling systems are still just tankers, but with higher refuelling rate. I will also be making some changes to standing and conditional orders, which I will explain in a separate post.

  

**Transfer Fuel and Return**

The current ‘Harvester unload fuel and return to gas giant’ conditional order has been replaced by “Transfer Fuel and Return”.

This can be used by any fleet, not just harvesters. If triggered, the fleet will unload fuel at the closest colony in the same system that can receive fuel.

If the fleet starts in orbit of a system body, it will return to that system body after the fuel transfer. If not in orbit of a system body, the fleet will drop a temporary waypoint and return to that waypoint after transferring fuel.

  

**Minimum Refuel Orders**

I’ve added two new orders.

*   Refuel to Minimum from Stationary Tankers
    
*   Refuel Stationary Fleet to Minimum
    

These orders function in exactly the same way as the existing ‘Refuel from Stationary Tankers’ and ‘Refuel Stationary Fleet’, except that instead of using max fuel capacity for the ships being refueled, the minimum fuel level of their parent class is used.

For example, assume a ship has current fuel of 100k litres, fuel capacity of 1m litres and its parent class has a minimum fuel of 250k. A tanker ordered to ‘Refuel Stationary Fleet’ will add 900k litres, while a tanker ordered to ‘Refuel Stationary Fleet to Minimum’ will add 150k litres.

For the existing orders listed below, the Max Item textbox will appear. If a value above zero is entered in this box, the order will fuel each of the ships in the target fleet to that specified amount. So if a ‘Refuel Stationary Fleet’ order is given with Max Items set to 200k, every ship in the fleet will be given sufficient fuel to take their fuel amount to 200k (assuming the tanker has enough). For example, a ship with 50k in its tanks would receive 150k.

*   Refuel Stationary Fleet
    
*   Refuel from Colony
    
*   Refuel from Refuelling Hub
    
*   Refuel from Stationary Tankers

**Class Component Summary**

I have added an optional summary section to the top of the Components tab of the Class design window. This summarises various components into different types, such as Defence (shields, armour, EW, decoys), Combat - Energy (weapons, reactors, fire controls), Propulsion (engines, fuel, jump drives), etc.

There are eight summary types in total: Combat - Energy, Combat - Missile, Defence, Essential Systems, Production, Propulsion, Sensor Systems, Transport and Logistics

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/0b40ea37135c55b42dba4365cdec52145ef57eef.jpeg)

  

**Class Design UI Update**

The various component types on the class design tab of the class design window have been organized into the same summary types as the component window (see [http://aurora2.pentarch.org/index.php?topic=13463.msg173305#msg173305](https://web.archive.org/web/20250731230434/http:/aurora2.pentarch.org/index.php?PHPSESSID=fabc8f4c2e773d0fae60d8a372583ba2&topic=13463.msg173305#msg173305))

The components of the selected class are now grouped by summary type instead of component types.

These changes should make it easier to navigate the growing number of different components and to understand the systems present in a class design vs the options available. The extra nodes all remember their open/close states when the window is closed.

I have also renamed some of the component type nodes to make them more consistent in nomenclature.

There are eight summary types in total: Combat - Energy, Combat - Missile, Defence, Essential Systems, Production, Propulsion, Sensor Systems, Transport and Logistics.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/6ec0cc6dd9f46d92739286a9bdf57991c9c5702a.jpeg)

  

**Hull Categories**

I’ve added an optional Hull Category layer to the list of classes in the Class Design window. This splits up the listing into Military, Commercial, Space Stations, FAC (501 - 1000 tons) and Fighter (500 or less). Any class with no armour will be placed into space stations, regardless of size.

You can theoretically have the same hull type in two hull categories. For example, a fighter category Tanker class and a commercial category Tanker class.

Unchecking the Hull Category checkbox will remove the hull category layer.

Here is the full class design window with the latest version of all the treeview changes.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9ff460585d91e49ef324d6f148c1e2a3efa9ad2d.jpeg)

**Changes to Standing and Conditional Orders**

For v2.6, you can set unlimited Standing and Conditional Orders for each fleet. They will be checked in order of priority.

To facilitate this change, the UI of the Standing Orders tab on the Fleet Organization window has been changed. This new UI should make visualizing the order lists easier and creates the necessary space to add new order types and conditions.

To set a standing order, select one from the Tree view and click Add Standing. It will be added as the lowest priority standing order. To set a conditional order, select a standing order from the Tree view, plus a Condition from the list, and click Add Conditional. It will be added as the lowest priority conditional order. Some orders are conditional-only and cannot be using for standing orders. They have their own section on the treeview.

Both standing and conditional orders can be deleted or moved up and down their respective priority lists by the buttons on the bottom right.

In addition, checking of standing and conditional orders will occur for increments longer than one minute, rather than increments longer than one hour.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cfc719c36eafc3ce07e48d487a66398baf9a4029.jpeg)

  

**Standing & Conditional Order Templates**

You can create templates for the new unlimited standing and conditional orders.

Clicking Create Template will save all the standing and conditional orders for the current fleet and pops up a dialogue box for you to enter a name. The saved templates are displayed beneath the condition options.

Selecting a different fleet and clicking Load Template will replace the standing and conditional orders of that fleet with those in the template. There is a warning popup if the fleet already has either standing or conditional orders.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/283a8911ddd441f1a20be66778824f6265704a9c.jpeg)

  

**Fleet Waypoints**

A Fleet Waypoint is a new waypoint type that is associated with a specific fleet. A fleet can only have one Fleet Waypoint and if a new one is created, the one old disappears. The Fleet Waypoint will also disappear at the point of arrival, if the associated fleet uses a movement order with that waypoint as the destination.

A Fleet Waypoint can be created in several ways.

*   There is a new Create Fleet Waypoint movement order, that will create the waypoint at the selected destination.
    
*   On the military tab of the Tactical window, selecting a fleet and clicking ‘Create Fleet WP’ will create a Fleet Waypoint for that fleet at the fleet’s current location.
    
*   On the same military tab of the Tactical Window, ‘Set Fleet WP’ functions in the same way as Normal WP on the waypoints tab. The cursor changes to a cross and clicking on the map will create a Fleet Waypoint at the clicked location.
    
*   There is also a ‘Create Fleet WP’ on the Movement Orders tab of the Fleet Window, although this doesn’t immediately update the tactical map.
    
*   There is a checkbox called ‘Set FWP’ next to the Add Condition button (see screenshot below). If this is checked when a Condition is created, that condition will be flagged to create a Fleet Waypoint at the fleet’s current location when triggered.
    

“MV: Fleet Waypoint” is a new standing or conditional order that will cause the fleet to move to its associated ‘Fleet Waypoint’.

This new functionality provides a number of different options for fleet orders. For example, the fleet in the screenshot below has “MV: Fleet Waypoint” as its first standing order. Most of the time this will not trigger as no Fleet Waypoint will exist. If however, the fleet triggers the Refuel conditional order, that order will generate a Fleet Waypoint. Once the refuel order is completed, the first standing order will be checked and the Fleet will return to the location at which the conditional order was triggered. On arrival, the fleet waypoint will be removed.

Alternatively, a fleet with survey standing orders could add “MV: Fleet Waypoint” standing order after the survey orders, then use a movement order to drop a fleet waypoint at its entry location. Once there are no remaining survey targets, it will move to the fleet waypoint.

The “MV: Fleet Waypoint” standing orders works for multi-system journeys. If a Fleet Waypoint is created on a system body, or by a fleet in orbit of a system body, it will move with that body.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d895d3271ba68d98a323ce167c7e14fc775f01e5.jpeg)

  

**Replenish At Colony Standing Orders**

The new “LG: Replenish at Colony” standing order will trigger a refuel and resupply from colony order, followed by a load ordnance order. The order will check for colonies with fuel, refuelling capability, supplies and supply capability. It will not check for for the presence of ordnance when the orders are issued, although the ordnance will be loaded if available.

The “LG Replenish Overhaul” order replaces the previous “Refuel, Resupply and Overhaul” order. It will trigger a refuel and resupply from colony order, followed by a load ordnance order, followed by an overhaul order. The order will check for colonies with fuel, refuelling capability, supplies, supply capability and maintenance capability. It will not check for the presence of ordnance when the orders are issued, although the ordnance will be loaded if available.

  

**Replenish from Ship Standing Order**

The new “LG: Refuel from Tanker” standing/conditional order will trigger a ‘refuel from stationary tanker’, if one is available. The order will check for the nearest tanker with fuel, refuelling capability and no movement orders. This will work across multiple systems.

The “LG Replenish from Ship” standing/conditional order will trigger a ‘refuel from stationary tanker’ order, followed by a resupply from stationary supply ship order’, if a suitable fleet is available. The order will check for a fleet with no movement orders that has both a tanker with fuel and refuelling capability, plus a supply ship with supplies and a cargo shuttle bay. This can be the same ship for both cases. This will work across multiple systems.

  

**Standing Orders for Detachments**

I’ve added three checkboxes under the standing and conditional orders list. These checkboxes will retain their state after the game is shut down and restarted.

*   Copy Standing on Detach
    
*   Copy Conditional on Detach
    
*   Include Squadrons
    

When using the Detach button on the Naval Organization window, or the Divide Fleet order, the standing orders of the parent fleet will be copied to the newly created detached fleet if the ‘Copy Standing on Detach’ checkbox is ticked. The conditional orders of the parent fleet will be copied to the newly created detached fleet if the ‘Copy Conditional on Detach’ checkbox is ticked.

This applies to detachments of individual ships, sub-fleets and squadrons directly from the Treeview, plus ships selected from the ship list tab associated with fleet, sub-fleets and squadrons. However, fleets created from a Squadron, or from ships selected from the ship list tab when a Squadron is selected, will only have the orders copied if the ‘Include Squadron’ checkbox is checked.

  

**Ignore Standing and Conditional Orders**

I’ve added two checkboxes named “Ignore Standing Orders” and “Ignore Conditional Orders” to the Standing Orders tab of the Naval Organization window. If either is checked, the fleet will ignore any orders of the respective type until the checkbox is unclicked.

This is for situations where you have multiple orders set up and don’t want to remove them during a period when they might be inapplicable.

**Flag Bridges and Naval Admin Commands**

The role of flag bridges is changing for v2.6. Previously, an officer assigned to a flag bridge added a reaction bonus to the fleet under his command. For v2.6, the flag bridge can instead host a naval admin command.

On the Naval Admin tab of the Naval Organization window, the potential location list for a Naval Admin Command now shows ships with flag bridges as well as populations with naval headquarters. These can be assigned on creation or via updating the admin command. Multiple admin commands can be assigned to the same flag bridge. Admin commands on ships function in the same way as admin commands on planets, with two major restrictions:

*   They have a zero radius, so they will only have an effect in the same system
    
*   They cannot have subordinate commands. This is checked on creation, update, drag-drop, etc.
    

Because the admin command is based on the ship, its commander may be killed if the flag bridge is hit, or the ship is destroyed. He may also end up in a lifepod and subsequently be captured by another Empire.

**Starting Research Points for Spoiler Races**

On the New Game window, there are four new text boxes that allow you to specify minimum research points for the Precursors, Raiders, Invaders and Swarm, giving you the option to make the various space-based spoiler races more or less of a challenge.

These options have default values of 600k, 400k, 1.5m and 600k respectively. These match the current defaults in v2.5.1, except that Invaders has been increased from 1.2m to 1.5m.

The specified minimum research points for each spoiler race will be overridden in the cases specified below (as are the current defaults):

*   Precursors will always have at least 20% more research points than the player race with the most starting research points.
    
*   Invaders will always have at least 50% more research points than the player race with the most starting research points.
    
*   For research point purposes, Raiders are generated in the same way as a starting NPR. This will override any lower minimum RP and be overridden by any higher minimum RP.
    
*   For research point purposes, Swarm are generated in the same way as a mid-game NPR, plus a research time boost. This will override any lower minimum RP and be overridden by any higher minimum RP.
    

In general, Swarm will be the least affected by any minimum research as they naturally generate stronger swarms as the game progresses.

**Change to Raider vs NPR Encounters**

One of the game-level options is for NPRs to encounter raiders. Currently, if this is set then Raiders will randomly select any system known to any race. In games with many NPRs, this can reduce the raiders to a very occasional threat for a single player race. This will be even more true in v2.6 with the addition of multi-system NPRs.

Therefore, for v2.6, the ‘NPRs Encounter Raiders’ option will work differently. If this is set, there is a 50% chance the Raiders will choose any system and a 50% chance they will choose a system known to a player race. Note that in the former case, this could still be a player system and in the latter case, the raiders could still enter an NPR system that is known to the player.

This should add some variety to raiders by allowing NPR vs Raider battles, without minimizing the threat to players.

**Mineral Tracking**

Aurora now tracks all mineral production, usage and transport for player races. The only exception is civilian mining production that is not purchased in place or sent via mass driver.

This can be viewed on a colony or Empire basis, and over periods of one, three, six or twelve months. When minerals move around, via freighter or mass driver, they are tracked on departure, in-transit and on arrival.

The following types of mineral production, usage and transport are tracked:

**Inflow**  
Mining  
Civilian Mining (in place)  
Starting Stockpile  
Recovered from Ruins  
Scrapping Components  
Scrapping Ground Units  
Scrapping Installations  
Scrapping Ordnance  
Unloaded from Freighter  
Received from Mass Driver

**Outflow**  
Installation Construction  
Space Station Construction  
Ship Component Construction  
Ordnance Production  
Fighter Production  
Shipbuilding  
Shipyard Upgrades  
Ground Unit Training  
Fuel Refining  
Maintenance Production  
Loaded into Freighter  
Sent by Mass Driver

**In Transit**  
Freighter Cargo Holds  
Mass Driver Packets

For example, below there are minerals from mining, minerals recovered from ruins and minerals arriving via freighter and mass driver. In this case the same minerals are tracked at the Empire level as recovered from ruins and arriving by freighter. They are also tracked as departing by freighter so the net inflow amount is the amount recovered from ruins. While this might seem odd at an Empire level, it is similar to double-entry book-keeping and allows you to more easily track minerals at individual populations.

In addition to the inflow and outflow, any minerals currently on freighters or in mass driver packets are tracked separately.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/8cea661b8533649e49781af17c2a22c27f6b5261.png)

**Pre-Industrial Races**

In v2.5.1, there is a checkbox for generating NPRs as pre-industrial races. For v2.6, this is replaced by a percentage field in the same way as minor races, with a default of 10%.

The chance for pre-industrials is checked before minor races, but this is adjusted for by checking for the minor race percentage vs (100% - pre-industrial chance). For example, if pre-industrial is 10% and minor races is 25%, the pre-industrial is checked on 10/100 and then the minor race is checked on 25/90. This will lead to the long-term distribution being accurate vs the selected percentages. Otherwise, the minor race would be 22.5%, not 25%.

Because of the above, the chances for pre-industrial and minor races cannot add up to more than 100%. If they are set to greater than 100% in game setting, it will be adjusted by automatically lowering the minor race percentage.

Pre-industrial races will be generated with an average population of about 1/8th that of a full NPR (not minor race) generated at the same point in the campaign. They do not have industry or ships, but they do have ground forces.

  

**Industrial Age NPRs**

‘Industrial NPRs’ have been added for v2.6. These are conventional races, but are not on the path to Trans-Newtonian Technology.

They have a population similar to minor races and have conventional industry, ground force construction complexes, tracking stations and ground forces, including primitive STOs. They do not have shipyards or research facilities. although they may have conventional-engined freighters and colony ships and might colonise a suitable body in their home system. They are effectively 20th Century or early 21st century civilizations. They can train additional ground forces and build additional academies, tracking stations, ground force construction complexes and conventional industry. The latter cost 240 BP and require a variety of minerals (for balance purposes).

There are effectively five different starting levels now:

1.  Pre-Industrial
    
2.  Conventional Only (Industrial)
    
3.  Conventional Progressing to TN (Player Conventional Start)
    
4.  Minor TN Race
    
5.  Major TN Race
    

Player Races can be 3 or 5. NPRs can be 1, 2, 4 or 5. The process of 3 becoming 5 would be very complex for the AI to handle, so I am adding 2 now and I might add an NPR version of 3 at some point in the future.

Industrial NPRs have a percentage field on the Game Details window in the same way as Pre-Industrial races, with a default of 10%. The chance for industrials is checked after pre-industrials and before minor races, with the same adjustments made as for pre-industrial so that they are true percentages. The total for pre-industrial, industrial and minor races cannot add up to more than 100%

Industrial NPRs present a more interesting situation than the ‘speed-bump’ Pre-Industrials and can engage in diplomatic relations, become friendly, declare war, etc. If you conquer them, they provide a source of conventional industry that can be converted into TN factories. In this regard, they fulfil a similar function to ruins, albeit with without the Precursor guardians. On that basis, a high % of Industrials will tend to make the game easier.

Because Industrial NPRs are now possible, the Conventional Option on the Create Race window can be applied to NPRs, allowing you to manually create an Industrial NPR,

**Change to ECM**

In v2.5.1, you receive a 20% to-hit penalty for each point by which enemy ECM exceeds your ECCM. With a difference of 5, you cannot hit the enemy.

For v2.6, the effect of ECM is to multiply your chance to hit by 75%, to the power of the number by which enemy ECM exceeds your ECCM.

For example. If you have a base chance to hit of 80% but your opponent has ECCM 3 vs your ECM 1:

*   v2.5.1: 80% x (1 - 0.2 - 0.2) = 48%
    
*   v2.6: 80% \* (75%^2) = 45%
    

This makes the penalty slightly higher for small gaps and progressively lower for higher gaps. There is no longer a situation in which it is impossible to target a high tech enemy ship - just very difficult

  

**Change to Sensor Jammers**

Sensor Jammers are modified in the same way as Fire Control Jammers, using the 0.75^(ECM Advantage) formula to affect the sensor and fire control range of other races.
