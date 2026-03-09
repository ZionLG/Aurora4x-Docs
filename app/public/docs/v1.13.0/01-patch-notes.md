**Colony Governor Protection Fix**

Sector governors and academy commandants are now protected from auto-assignment to a colony.

**Colony Importance Error Fix**

Clearing the colony importance field will no longer cause an error.

**Obsolete Class Copy Fix**

Copying an obsolete class without Show Obsolete checked will no longer cause an error.

**Short Name Contact Grouping Fix**

Fixed the error caused by grouping contacts with short names (less than 5 characters).

**Buoy Orbit Fix**

Buoys launched while in orbit will now remain in orbit.

**Mass Driver Error Fix**

Fixed error caused by active mass driver and no mining production.

**Set Specific Threat Fix**

Clicking on 'Set Specific Threat' without a target selected will no longer throw an error.

**Low Gravity Habitable World Display Fix**

Low gravity habitable worlds will be shown correctly on the galactic map.

**Refuel Resupply Overhaul Standing Order Fix**

Fixed an error caused by the refuel, resupply and overhaul standing order when destination in a different system.

**Survey Percentage Display Fix**

Percentage of system body survey completed is now shown correctly on the system view window.

**Spinal Weapon Fix**

Fixed bug allowing multiple spinal weapons.

**Cloak Research Fix**

Fixed bug that allowed cloak size 25 before research completed.

**Missile Launcher Ammo Check Fix**

Missile launchers will now check for ammo before checking weapon failure.

**Boat Bay Design Fix**

Fixed a bug that caused the ship designer to treat boat bays like hangar bays when considering flight berth requirements.

**Tractor Link Fix**

Tractor links to ships that are deleted or destroyed will now be broken.

**Minerva Trojan Naming Fix**

Fixed bug that named Minerva Trojans as moons.

**Ground Unit Series Creation Fix**

Fixed bug that prevented creation of new ground unit series.

**Surrender Strength Fix**

Fixed bug that meant that strength required to force populations to surrender was 100x more than intended.

**STO Fighter Fix**

Fixed bug that allowed STO units to fire at fighters on ground support missions.

**Fighter Search and Destroy Fix**

Fixed bug that prevented fighters on search and destroy missions from attacking planets without friendly populations.

**STO Target Dropdown Fix**

Fixed bug in STO Targeting tab of Ground Forces window that caused text in target type dropdown to have no spaces.

**STO Weapon Error Fix**

Fixed error popup when firing STO weapons against populations, shipyards or ground forces.

**Civilian Harvester Fix**

Civilian harvesters will no longer use banned bodies.

**Tracking Station Range Fix**

Fixed a bug that meant populations with very high tracking station strengths would not display range circles.

**Waypoint Name Fix**

Fixed the bug that caused Rendezvous Waypoint names to be obfuscated.

**Trojan Asteroid Orbit Fix**

Trojan asteroids will now change location when their parent body orbital distance is changed.

**Ground Unit Series Deletion Fix**

Deleting a ground unit series now works correctly.

**Beam FC Option Fix**

Fixed a problem with the beam fire control option of "1.25 Size 1.25 Range".

**Sector Governor Bonus Fix**

Sector governors will now apply their population growth bonus to pop growth, rather than their terraforming bonus.

**Sector Assignment Fix**

Fixed a problem with systems being assigned to a sector and then set to no sector.

**Jump Drive Cost Fix**

Jump drive costs are no longer affected by squadron size if the drive is self-jump only.

**Spinal Railgun Removal**

Removed spinal railgun option as it was included in error.

**Sorium Gas Giant Survey Fix**

The standing order for Move to Gas Giant With Sorium will now only consider gas giants that have been surveyed.

**C&C Disassembly Fix**

Fixed some issues around disassembly of command and control components.

**Commercial Overhaul Penalty Fix**

Commercial vessels in a fleet that abandons an overhaul will no longer suffer abandon overhaul penalties.

**Parasite Ship Measurement Fix**

Fixed a bug in Ship Measurement for parasites that resulted in many records of the same type, instead of one.

**Shipyard Repair Capacity Fix**

Shipyards can no longer repair ships larger than their capacity.

**Commercial Shipyard Repair Fix**

Commercial shipyards can no longer repair military ships.

**Fighter Colonist Loading Fix**

Fighters can now load colonists without the requirement for cargo shuttles.

**Orbital Habitat Capacity Fix**

Orbital habitats no longer apply capacity to multiple populations.

**Boarding Hostile Act Fix**

Boarding a ship is now treated as a hostile act.

**Shipyard Class Lock Fix**

Building a ship in a shipyard will lock the parent class, even if the shipyard is not tooled for that class.

**Colony Governor Event Fix**

Events will now be displayed for the assignment of colony governors.

**Death Spiral Luna Fix**

Luna is updated and destroyed correctly in Death Spiral scenario.

**Destroyed Colony Commander Fix**

Commanders who were created on a subsequently destroyed colony are displayed correctly.

**Scrapped Carrier Parasite Fix**

Scrapped carriers no longer destroy their parasites.

**Captured Ship Class Lock Fix**

The class of captured ships will be locked.

**Fleet Creation Location Fix**

Fleets created away from the capital will remain in orbit of the body at which their parent admin command is located.

**Disassemble Refresh**

Using Disassemble or Scrap Component buttons on the Economics window will refresh the events window and the tactical map events list.

**Hide Fleets in Orbit**

New 'Hide Fleets in Orbit' option to declutter map.

**Boat Bay Size Change**

Boat Bay has changed to 5.25 HS and 25 BP cost with the same 5 HS capacity. Small Boat Bay has changed to size 1.05HS, 5 BP cost and 1 HS capacity.

**Geosurvey Missile Option Fix**

The geosurvey sensor option for missile design will not appear if you do not have geological survey sensors.

**NPR Random Ship Names**

NPRs will select names randomly from their class naming theme, rather than using alphabetical order.

**Paused Research Change**

Paused research projects are held at the Race level, rather than by population.

**Zero Hit Chance Beam Fix**

Beam weapons will not fire if they have zero chance to hit.

**Fleet Name in Events**

Fleet name added to the maintenance failure and deployment exceeded events.

**Ground Force Mothership Display**

On the ground forces window, the mothership name (if needed) has been added to the name of ships transporting ground formations.

**Commander Abbreviations**

Commanders windows show abbreviations as part of rank names.

**Class Function Display**

Function of class for auto-assignment purposes will be shown in class summary.

**Obsolete Component Button Fix**

The 'Obso Comp' button on the Class window is only visible for race-designed components. It will not appear for basic components such as Bridge, Engineering, etc.

**Insufficient Power Alert**

The 'insufficient power' alert on the Class Design window will now show the reactor power and required power in the alert message.

**Armour Repair in Hangars**

Motherships will automatically repair the armour of ships in hangars. Armour is treated like any other component in terms of cost and the chance of repair, except that on successful repair a number of armour boxes equal to the armour strength will be repaired.

Armour will be repaired from the most damaged columns first. No more than one armour point in a single column will be repaired per increment.

**Fractional Capacitors**

In v1.13, when you research each level of capacitor technology, you will gain some automatic fractional or interpolated capacitor tech. For example, researching capacitor tech 2 will also add capacitor 1.25, 1.5 and 1.75.

The 'quarter level' techs will appear up to capacitor 4. Capacitor 4.5 and 5.5 have also been added, along with 7, 9, 11, 13, 14, 15.

This will allow more efficient beam weapons and, as beam weapon cost is mostly based on a combination of power requirement, range modifier and recharge rate, will make some beam weapons slightly cheaper.

**Instant Build to Carriers**

Instant Build on the Class window now has an option to build straight into a carrier hangar bay (and assign). This takes away the micro of creating fighters and manually setting the move orders to land on carriers.

**Automated Hangar Resupply**

Motherships will automatically resupply ships in hangars, in the same way as automated refueling.

A mothership is assumed to have a single cargo shuttle bay for the purposes of hangar resupply only. This shuttle bay can work on all parasites simultaneously. The base transfer rate is therefore 10 MSP per hour per ship with conventional technology and 20 MSP per hour with TN technology.

A mothership can set a minimum supply amount for itself and no parasite will resupply MSP below that point.

**Carrier Operations Bonus**

The Fighter Operations bonus for commanders has been renamed to the Carrier Operations bonus.

This bonus will apply to the rate at which fuel, supplies and ordnance are transferred to parasites in the ship's hangar.

**Population Ground Units**

The Stockpiles tab of the Economics window is now the GU / Stockpiles tab.

A third section has been added that displays a treeview of all ground formations at the population, including the formation elements. This is a similar view to the Ground Forces window with the Show Elements option selected but without the elements expanded in the tree. This view is just for reference and does not have all the functionality of the Ground Forces Window.

**Distance Travelled**

All ships will now keep track of their total distance travelled. Ships in hangars won't increment distance, although towed ships will.

The total distance travelled is shown on the Ship Overview under Construction Date.

**Removal of Ground Combat Command Bonus**

The Ground Combat Command Bonus adds a restriction on the size of formation that a ground forces officer can command. However, this is a limitation that doesn't add any meaningful decisions because most assignments are automated. It has been removed for v1.13.

This means that the restriction on which ground forces officers can command which formations is now based on rank alone.

**Reduced Shot Railguns**

In v1.13, Railguns have an extra design option that allow them to operate with a reduced number of shots (from 1 to 4). This has the following effects:

- Power Requirements are reduced in line with the number of shots. So a 2-shot railgun needs only half power.
- Size is reduced by 22.5% of original size for every shot less than 4. 4 = 100%, 3 = 77.5%, 2 = 55%, 1 = 32.5%.
- The cost formula remains unchanged. As this is affected by power requirements and recharge rate, reduced shot railguns will be correspondingly cheaper.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ec1d160459b645baf9d84f2b86d6e292c3a81924.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/60034f41e68e5c865e70fedfdd5fe7c541229aac.png)

**Single Weapon Fire Controls**

Beam Fire Controls can be designed for single weapon use only. This is done via an extra dropdown on the Create Project Window, allowing the selection of either multi-weapon or single-weapon.

As the name suggests, only a single beam weapon can be assigned to a fire control designed for single weapon use.

The size, cost and crew requirements of single weapon fire controls are reduced by 50% compared to the normal multi-weapon fire control.

STO weapons already use single weapon fire controls, so this change aligns the fire controls of ship and ground-based energy weapons.

**Miscellaneous Components**

v1.13 introduces a new category of ship modules, known as Miscellaneous Components. These have no game function and are entirely for roleplaying purposes.

You design the components on the Create Research Projects window by choosing a size (from 0.1 HS to 100) and giving the component a name. Cost is equal to size in HS and the mineral requirements are split between Duranium and Mercassium. The HTK is equal to the square root of the size.

There is a new component type on the ship design window that contains all miscellaneous components, which you can add to the design in the normal way. A new line on the class summary shows all miscellaneous components in the design.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c6e1df62b10df1d556d6fd2b497573dff0631d06.png)

**Fire Delay for Point Defence**

Fire Delays are applied to ships in three situations, with the second and third delays only applying to inexperienced crews.

- Jump Point Transit
- Opening Fire
- Changing Target

Because the fire delay is at the ship level, all fire controls are affected. This leads to a situation for larger ships where a single fire control changing target will cause fire delays for all fire controls, including those dedicated to point defence.

Therefore, for v1.13, fire delay will only apply to point defence fire if it is caused by jump point transit. This will allow ships to change offensive targets and suffer any associated delays, without compromising automated point defence fire.

**Constellation Names**

When playing with Known Stars, many of the actual star names are from Star Catalogues, such as Gliese, Wolf, HIP, etc., or from sky surveys such as WISE. This results in some non-mnemonic and repetitive system names. Therefore, an optional alternative naming system for catalogue stars has been created, called Constellation Names.

In 1603, the German astronomer Johann Bayer created the Bayer Designation in his star atlas Uranometria. A Bayer designation identifies a specific star using a Greek or Latin letter followed by the genitive form of its parent constellation's Latin name. For example, Alpha Centauri or Tau Ceti.

A century later John Flamsteed, the first Astronomer Royal, created his own designation using a number followed by the genitive Latin name for each constellation. The Flamsteed designation tends to be in popular usage where Bayer used a Latin letter rather than Greek.

For Aurora, the system extends those centuries-old star catalogues. For all 88 modern constellations, unused Greek letters and Flamsteed numbers have been identified. Known Stars are ordered by distance from Earth, and each catalogue star is renamed using the first unused Greek letter plus the genitive Latin name. If Greek letters run out for a constellation, numbers above the maximum Flamsteed number are used.

Examples within 20 LY of Sol:

DEN 1048-3956 = Beta Antliae
DEN 0255-4700 = Sigma Eridani
GJ 1061 = Epsilon Horologii
LHS 288 = Gamma Carinae
WISE 0350-5658 = Lambda Reticuli
WISE 0855-0714 = 61 Hydrae
WISE 1541-2250 = Rho Librae
2M1540 = Alpha Normae
LHS 1723 = 70 Eridani

This is optional in game settings, so you can use the existing names if you prefer.

**Repair Yards**

v1.13 introduces a third type of shipyard, known as a Repair Yard.

- A Repair Yard is constructed in the same way as a naval or commercial shipyard and has the same build cost.
- A Repair Yard starts with 10,000 tons of capacity and is upgraded (including additional slipways) at the same rate and cost as a commercial shipyard.
- A Repair Yard has the same population requirement as a commercial shipyard.
- Repair Yards are listed after commercial shipyards and denoted with an 'R'.
- Repair Yards cannot be tooled for construction and therefore cannot conduct refits either.
- They can repair or scrap any ship up to their capacity.

Note that as Repair Yards are upgraded like commercial shipyards, they are faster and cheaper to construct than a naval shipyard with the same capacity. They provide a much cheaper option for military repair capacity, allowing naval shipyards to focus on construction.

**Fire At Will**

A new Fire At Will option allows ships to reduce fire delays by half, at the expense of targeting choice. This can be applied to a single fire control, a ship or a fleet.

When the order is given, each fire control is assigned a random target. Each ship is then assigned a fire delay with a modifier of -50% vs normal. This fire delay will override any existing fire delay (even if the current delay is longer), except if the command is assigned to a specific fire control, in which case the new fire delay will only override any existing fire delay if the new delay is longer.

Normal fire delays only apply once in an increment. For 'Fire-at-Will' fire delays, this does not apply and it is reset each time. This is to prevent someone using fire-at-will to reduce delay and then overriding with a specific target.

For beam fire controls, the random target is selected using a weighting of average probable damage. Each weapon assigned to a fire control is checked against all potential targets, using chance to hit and damage at current range to determine average damage.

For missile fire control, the same random, weighted selection process is followed. In this case though, the weight is equal to the target size in HS divided by the target range in km. Only targets in range, including ECM, are checked.

Fire at Will is intended for those situations where a fleet is ambushed and firing early is more important than coordinating fire with other ships.

**Random Second Stage Targeting**

If a missile releases its second stage and has no assigned parent fire control, the second stage missiles will select a target randomly using the following guidelines:

- The target must be detectable by the sensors on the second stage missile.
- The target must be hostile and not have friendly boarders.
- The target must be within the second stage missile's range, even if the target moved away at maximum speed.
- The salvo will choose a target that meets all of the above criteria using the same selection process as Fire At Will.

**NPR Generation of Spoilers**

In v1.12 there is a game-level option to allow NPRs to generate spoilers.

For v1.13, this has been split into three separate options:

- NPRs generate Precursors
- NPRs generate Swarm
- NPRs generate Aether Rifts

This change is to allow the option for NPRs to engage in some combat, with less of an overall impact on the campaign. For example, NPRs fighting precursors has minimal impact on the player, with the exception of weakening both. NPRs activating swarm, especially multiple swarms that grow before player contact, can have a major impact on a campaign.

**Import and Export Event Colours**

You can import event colours on the Events Window by using the Import Colours button. This requires a CSV file with three values per row: Event ID, Background Colour, and Text Colour.

The Event ID can be found in DIM_EventType. The colours should be integers in the same format as FCT_EventColour.

When the file is imported, only the colours of Event Types referenced in the file will be added or updated. Event Types that are not included in the imported file will retain any existing colours.

The Export Colours button allows you to export the event colours of the currently selected race. The file can be used for subsequent import to a different race, including races in other games.

**Export Medals**

A new Export Medals button on the Events window allows you to export the medals and associated medal conditions of the currently selected race.

The file will be a CSV with six values for each medal: Name, Description, Abbreviation, Points, Multiple Awards (Y/N), and File Name for Medal Image. All IDs for conditions associated with the medal will be added to the same row.

This file can be used for subsequent import to a different race, including races in other games.

**Ordinal Numbers for Ground Formation Templates**

Ordinal Numbers for ground formations will increment on a per-template basis rather than for all ground formations. For example, if you have an infantry regiment template and an armoured regiment template and build one of each, they will be the 1st Infantry Regiment and the 1st Armoured Regiment.

A new checkbox entitled 'Use Roman' will use a Roman numeral suffix rather than an Arabic numeral prefix. So the infantry would be Infantry Regiment I, Infantry Regiment II, etc.

The numbering for both Arabic and Roman will be used for multiple formations in Instant Build.

As Roman Numerals do not work well with alphabetical order, there is a new 'Sort Creation' option on the Ground Design and Economics windows which will sort any units using the same abbreviation in order of creation rather than alphabetical order.

**Component Development Cost Changes**

The current formulae for component development costs have a couple of problems. Firstly, they are not always consistent between different component types. Secondly, because of the linear ratio between build cost and development cost for most components, very large components can be prohibitively expensive to research.

For Missiles and non-STO Ground Units, the Development Cost has been changed to: SQRT(Cost \* 25000)

For the following components, the Development Cost has been changed to: SQRT(Cost \* 5000):
Active Sensors, Beam Fire Controls, CIWS, Cloaks, EM Sensors, Engines, Fighter Pods Bays, Gauss Cannon, Jump Engines, Lasers, Magazines, Meson Cannon, Microwaves, Missile Fire Controls, Missile Launchers, Particle Beams, Plasma Carronades, Power Plants, Railguns, Shield Generators, STO Ground Units, Thermal Sensors, Turrets.

In general, components with a build cost of 50 will have the same development cost as before, while more expensive components will be cheaper to develop and vice versa.

**Fleet Window UI Additions**

If you have a fleet selected in the treeview and double-click on the fleet commander in the fleet summary, the Commanders window will open with that officer selected.

If you have a ship selected in the treeview and double-click on one of the ship's officers in the ship summary, the Commanders window will open with that officer selected.

If you have a fleet selected in the treeview and double-click on a ship in the Ship List tab, the selection on the treeview will change to that ship.

If you have a fleet selected and double-click on a ship in the Ship List tab while holding down the Control key, the Commanders window will open with that ship's commander selected.
