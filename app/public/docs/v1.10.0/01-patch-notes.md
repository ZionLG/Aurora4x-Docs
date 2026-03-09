**Random Stars Fix**

Fixed the ‘All Roads Lead to Sol’ bug for Random Stars. For v1.9.5 you can avoid this bug by setting Local Chance to 0 or 100. Also fixed occasional #3232 error in system generation for random stars.

**Overhaul and Station Fixes**

Overhauls now working at deep space stations. Partial stations can no longer refuel or transfer ordnance.

**Terraforming Fix**

Changing the target atm on the Environment tab of the Economics window and then immediately closing the window did not save the atm value. Fixed now. Condensation will no longer take place at temperatures above 96C. Water Vapour will no longer disappear from the atmosphere for temperatures above 500C.

**Fire Control Fixes**

The player is notified when ship-based fire controls are targeting ground forces or STO units that no longer exist. Bug fixed that allowed auto-assign FC to assign missiles to launchers that were smaller than the missile.

**Fleet Order Fixes**

Join sub-fleet order now working correctly. Cancel Sub-fleet now working correctly. Fleets salvaging a wreck that is in orbit will move with the planet while salvaging.

**Deployment Fix**

Fixed crew quarters bug for very short deployment times.

**Ship Design Fixes**

The bug caused by Copy Class followed by changing hull type is fixed. Prevented the exploit where you can prototype a weapon, then use that prototype in a turret, then prototype the turret, and then research the turret without ever researching the component weapon. Class Window now remembers which component nodes were collapsed, not just those that were expanded. Missile ships refitted to non-missile class will unload their ordnance.

**Civilian Shipping Fixes**

Shipping Lines will no longer be formed when Civilian Shipping is off. The parent shipping line for captured civilian ships is removed, so you can scrap them. Negative fuel bug fixed. Shipping Lines can be deleted.

**Ground Formation Fixes**

Ground Formations display field position correctly after renaming. Formation Medal button now working correctly.

**Sector and System Fixes**

Sector will be generated at new location if Sector Command moved by freighter. Delete System button no longer visible unless SM mode is on. Jump point positions can no longer be changed to be outside the survey location coverage.

**Hangar and Parasite Fix**

Commercial hangars will reload parasites.

**Commander Fixes**

Academy commandant positions will no longer be displayed where a Commandant is assigned and “Available Only” is checked. Reassign Naval will not affect naval commanders assigned to admin commands or academy commandant as they are manually assigned positions.

**Population and Colony Fixes**

Survivors are listed as transported items for fleets. POWs are displayed in the population summary. Edit Pop no longer allows negative values. Extreme negative pop growth will no longer result in negative population. Life pods will not be created if crew is zero or negative. Autopsy projects are no longer created when you rescue ‘alien’ survivors that are the same species as your primary race species. Fractional values can be set for contract supply and demand.

**NPR Design Variety**

There should be greater variety in NPRs design and fleet composition, plus energy-only NPRs have been added.

**UI Display Improvements**

The display options ‘All Windows Linked to Race’ and ‘Keep Tactical in Background’ will retain their status after save and reload. Cancel Select Name now working correctly. The species environmental tolerances shown on the System View window have been added to the Environment tab of the Economics window. “Hide CMC” button on the Economics window will only hide colonies that have civilian mining complexes but do not have a population > 0 and do not have any other installations except tracking stations and mass drivers.

**Railgun Point Defence**

10cm Railguns will be treated as a point defence weapon by Auto-Assign Fire Controls.

**Maintenance Report Additions**

Average Class Maintenance Life and % of Deployment Time have been added to maintenance reports when a component requires repair.

**Hit Chance Fix**

In v1.9.5, the ‘to hit’ roll only considers integers, so if the chance to hit is 0.9%, it is effectively zero. The hit check code for v1.10 checks the hit chance to two decimal places.

**Sorium Depletion Event**

An event will be generated when a gas giant or superjovian runs out of Sorium.

**Scrap and Refit Display**

Scrap and Refit tasks will only display target classes for scrap/refit if at least one ship of that class is in orbit.
    

  

**Automatic Research**

Some Tech Systems are now flagged as ‘automatic research’. When a tech system is researched, any other tech system with that tech as a pre-requisite that is also flagged as ‘automatic research’ will be researched immediately.

For v1.10 (so far) this will apply to the three types of Troop Transport Bay. When the standard troop transport bay is researched, the other bay sizes will become available automatically (large, small, very small). The same applies to the standard drop bay and the standard boarding bay.

  

**Queued Ground Formation Training Tasks**

Training Tasks can be queued for ground formations.

Using Create Task when no GFCC is available will add the formation to the queue for the population. Items can be moved up and down the queue, deleted from the queue and renamed while in the queue.

When a GFCC becomes available, the highest queued formation will begin training and an event will be generated. The build cost is not fixed until training begin, so you can change the templates for formations that are still in the queue.

  

**Unused Construction Capacity**

When the total capacity devoted to industrial projects is less than 100%, the unused capacity will be shown as well. This will be shown separately for Construction, Ordnance and Fighters.

  

**Land on Assigned Mothership as Sub-Fleet**

A new movement order, _Land on Assigned Mothership as Sub-Fleet_, has been added.

This order functions exactly like _Land on Assigned Mothership_, except that the landed ships will form a new sub-fleet with the name of the fleet in which they were located before landing.

For example, if a fleet named ‘Squadron 01’ uses the _Land on Assigned Mothership as Sub-Fleet_ order, the ships of Squadron 01 will be grouped into a new sub-fleet within the carrier fleet, which will also be named ‘Squadron 01’.

  

**Faster Save**

I’ve made some changes to the Save code that were discussed in the Disappearing Ground Units thread from a while ago. Essentially this involves running the entire database save within a single transaction. This has shortened the save time considerably.

My current DB has my Holy Church campaign and my new Imperium of Man campaign, so still relatively early. Even so, it saved in less than five seconds, so save times in general should come down by a factor of at least 5x and probably more.

**Ancient Constructs**

In v1.10, anomalies will become Ancient Constructs.

For the most part they will continue to function in the same way, adding a bonus to research projects of a specific research field that takes place on the system body. However, there are three new functions:

1.  Ancient Constructs will be ‘dormant’ until surveyed by a Xenoarchaeological formation. This will be the same process as for ruins. Ruins and Ancient Constructs on the same system body will be surveyed simultaneously but independently. When an Ancient Construct is surveyed, its research field and bonus will be revealed. It will not add any bonus while dormant.
    
2.  Active Ancient Constructs on system bodies where a race has a population of at least one million will add 10% of their bonus to all research projects in their field for that race, even if that project is conducted somewhere else in the empire. For example, an Ancient Construct with a propulsion bonus of 60% will add 60% to research projects on the same body and 6% to all propulsion research projects at any location (which means it will actually add 66% to projects on the same body). This is known as the racial bonus. A new tab on the economics window will summarise the benefits.
    
3.  If Invaders are active, the total % racial bonus provided by all active Ancient Constructs in the galaxy, regardless of which race has the qualifying population, will be used as a negative modifier to the growth of Aether Rifts (see later rules post). For example, if Race A has an Ancient Construct with with 50% Defensive Systems and an Ancient Construct with with 70% Propulsion, while Race B has an Ancient Construct with with 40% Biology, the growth rate of any Aether Rifts will be reduced by 16%. If the total modifier is greater than 100%, Aether Rifts will begin to decrease in size. If two races both have a qualifying population for an Ancient Construct, the bonus for the construct will only apply once for the purposes of Aether Rifts.

**Aether Rifts**

When the invaders options is active, systems may be discovered that contain Aether Rifts. Aether Rifts may also form in existing systems, although this is rare. A rift is a passageway from dimensions beyond the Aether and appears as a black zone surrounded by an indigo border.

Aether Rifts will generally start at 10m kilometres in diameter and will grow each construction phase at the rate of: (Construction Phase Length / Year Length) \* 10%. The rate of growth can be slowed down or reversed by active Ancient Constructs - see previous post.

Any system body that is inside an Aether Rift after orbital movement will suffer radiation damage equal to: (Rift Diameter / 10000) \* (Construction Phase Length / Year Length). For example, a system body spending a single 5-day phase inside a rift with a 20m km diameter will suffer 27 radiation damage. A system body spending a month (six phases) inside a 200m km diameter rift will suffer 1643 radiation damage.

As time passes, raiding forces will emerge from the Rift and attack any targets they can find. The size of the raiding force will be heavily influenced by the size of the rift, while the technology of the raiding force will depend on time passed. As a Rift grows over time, raiding forces will become larger and more effective. Raiding forces will include gravitational survey ships and possibly stabilisation ships. Rare specialised stabilisation ships may be able to open additional rifts, although there will be considerable effort involved. Future raids will retain the knowledge of earlier raids.

The only way to prevent the raids is to close the rift by activating ancient constructs. Once sufficient ancient constructs are active, new rifts will be unable to form..

Here is an example of a Aether Rift in Sol which is 50m km is diameter, which would take about 18 years from initial formation.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/01985f118b10ce01e60b183553a013acaace57b8.png)

**Hot Keys**

The following hot keys have been added.

F2 Population Summary  
F3 Commanders Window  
F4 Naval Organization  
F5 Class Design  
F6 Diplomacy and Intelligence  
F7 Race Window  
F8 Ground Forces  
F9 System View  
F10 Create Project  
F11 Galactic Map  
F12 Toggle Automated Turns

With control pressed:

F2 Events  
F3 Medals  
F4 Industry  
F5 Research  
F6 Mining  
F7 Wealth  
F8 View Technology  
F9 Sectors  
F10 Missile Design  
F11 Turret Design  
F12 SM Mode

Holding Shift will function as it does when clicking a toolbar button and create a second window. So Ctrl+Shift+F4 will create a second Economics window open at the industry tab if one is already open. The hot keys will function in the following windows.

Class Design  
Commanders Window  
Create Project  
Diplomacy and Intelligence  
Economics  
Events  
Galactic Map  
Ground Forces  
Medals  
Minerals  
Missile Design  
Naval Organization  
Race Comparison  
Race Window  
Sectors  
System View  
Tactical Map  
Technology View  
Turret Design

**Medal Import**

There is a new Medal Import button on the Medal Window that allows you to load a CSV to setup medals and associated conditions.

The format of the file is one medal per line with the fields separated by commas. The first 6 fields are fixed with the following values:

1.  Medal Name
    
2.  Description
    
3.  Abbreviation
    
4.  Points
    
5.  Multiple Awards - use Y or N
    
6.  Image File Name - needs to be in Medals sub-directory
    

Following those fields, you can have an unlimited number of additional numeric fields. Each number represents a condition that will apply to the medal. For example, here is a sample row from a medal import file:

Silver Star,Gallantry in Action,SSM,200,Y,Silver Star Ribbon.png,17,40,42

The IDs for the conditions can be found in the AuroraDB file in the DIM\_MedalCondition table. Here is the current list. These are in ID order rather than display order.

1 Discover New Star System  
2 Discover Alien Ruins  
3 Survive Ship Destruction  
4 Destroy Hostile Ship  
5 Destroy 100,000 tons of Commercial Shipping  
6 Destroy 250,000 tons of Commercial Shipping  
7 Destroy 1,000,000 tons of Commercial Shipping  
8 Destroy 10 Hostile Missiles  
9 Destroy 10,000 tons of Military Shipping  
10 Destroy 25,000 tons of Military Shipping  
11 Destroy 100,000 tons of Military Shipping  
12 Destroy 100 Hostile Missiles  
13 Suffer Armour Damage  
14 Suffer Internal Damage  
15 Destroy Hostile Ground Unit  
16 Destroy 1000 tons of Hostile Ground Forces  
17 Destroy 10,000 tons of Hostile Ground Forces  
18 Discover 100 System Bodies With Minerals  
19 Discover 1000 System Bodies With Minerals  
20 Discover 10 Jump Points  
21 Discover 100 Jump Points  
22 Discover 10 New Star Systems  
23 Destroy 1000 Hostile Missiles  
24 Generate 10,000 Research Points  
25 Generate 100,000 Research Points  
26 Completed Research Project  
27 Completed Five Research Projects  
28 Ten Years of Service  
29 Twenty Years of Service  
30 Thirty Years of Service  
31 Capture Hostile Ship in Boarding Combat  
32 Habitable World Discovered  
33 Three Habitable Worlds Discovered  
34 Participate in Combat Drop - Formation  
35 Participate in Five Combat Drops - Formation  
36 Participate in Combat Drop - Transport  
37 Participate in Five Combat Drops - Transport  
38 Recover 10 Abandoned Installations  
39 Recover 100 Abandoned Installations  
40 Destroy 50,000 tons of Military Shipping  
41 Destroy 250,000 tons of Military Shipping  
42 Destroy 500,000 tons of Commercial Shipping  
43 Destroy 2,500,000 tons of Commercial Shipping  
44 Destroy 2500 tons of Hostile Ground Forces  
45 Destroy 5000 tons of Hostile Ground Forces  
46 Destroy 25000 tons of Hostile Ground Forces  
47 Stabilise 1 Jump Point or Lagrange Point  
48 Stabilise 3 Jump Points or Lagrange Points  
49 Stabilise 10 Jump Points or Lagrange Points  
50 Salvage 25,000 tons (Commercial / 10)  
51 Salvage 100,000 tons (Commercial / 10)  
52 Salvage 250,000 tons (Commercial / 10)  
53 Discover Three Alien Ruins  
54 Generate 25,000 Research Points  
55 Generate 250,000 Research Points  
56 Recover 25 Abandoned Installations  
57 Recover 250 Abandoned Installations  
58 Discover 25 New Star Systems  
59 Discover 100 New Star Systems  
60 Destroy 100,000 tons of Hostile Ground Forces
