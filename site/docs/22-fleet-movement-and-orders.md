**Fleet Movement Auto Route**

The Fleet Movement Orders section of the Naval Organization window has an option called Auto Route by System. When this option is selected, the normal movement destinations list will be replaced by a list of systems that the Fleet is capable of reaching. Clicking on a system and clicking Add Move will generate all the movement orders from the current system to the destination system. The System Locations option will be automatically selected and the destination list for the new system will be displayed, so the player can complete any specific orders.

The determination of which systems can be reached is based on three check boxes to the right hand side of the same tab.

1.  Assume Fleet is Jump Capable: If checked, the algorithm will assume the fleet will be able to transit any jump point. If not checked, the fleet will have to be jump capable to reach any system beyond a jump point without a gate.
    
2.  Check Danger Rating: If checked, the fleet will not be able to travel through any system where the danger rating is higher than the protection value of the friendly warships in that system
    
3.  Exclude Alien-Controlled: If checked, the fleet will not be able to travel through any system that the player has flagged as alien controlled (assigned a flag)
    

Fleets have two stored values, Avoid Danger and Avoid Alien Systems. These are set on by clicking the second and third check boxes above and will affect the algorithm used for Standing and Conditional Orders for that fleet in addition to the Auto Route.

A system can also be flagged on the Galactic Map as excluded from auto-route. For example, there may be a shorter route in terms of kilometres but longer in terms of transits. You can block one of the systems on the original route so the algorithm will always choose your preferred path.

The list of systems will highlight any populated systems in light green and any other colony systems in dark green. The total population will be shown (if greater than zero) or the number of the most important installation type. In order of priority these are automated mines (including asteroid miners), then terraformers (including orbital), then tracking stations. This is similar to the population tree view on the Economics window functions.

These four screenshots below show an example journey. In the first, a US fleet in the Eta Cassiopeiae system (highlighted at the bottom) wants to return to Sol. In the second, the potential system list is displayed. As the Exclude Alien-Controlled option is checked, the fleet cannot travel through the Commonwealth systems starting with EV Lacertae so none of those systems are an option. The third screenshot shows the results as the path finding algorithm takes the fleet on a longer route via Oregon then displays the destination list for Sol. The fourth screenshot shows the journey of a French survey ship. In this case, the algorithm has determined that using Lagrange points in two of the systems will make the journey shorter.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/1c01eb5bc235f4031f6e0c80851291afcd216f6a_2_577x500.png)

image940×814 174 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/1c01eb5bc235f4031f6e0c80851291afcd216f6a.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/bff316072d954b096d8378b327ba8652ba9feee9_2_690x431.png)

image940×588 158 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/bff316072d954b096d8378b327ba8652ba9feee9.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/33e1dca4ec14948ab7b2850a114bd3c6d6ca1e55_2_690x432.jpeg)

image940×589 145 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/33e1dca4ec14948ab7b2850a114bd3c6d6ca1e55.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/9bb52e22b9b8f5b98321a9abc8b7bec00ec7e0d6_2_690x427.png)

image940×583 144 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9bb52e22b9b8f5b98321a9abc8b7bec00ec7e0d6.png "image")

  

**Standing Orders**

Standing Orders are the C# equivalent of Default Orders in VB6 and function in exactly the same way. If your ship has no active movement orders, it will act on the Primary Standing Order. If that is not possible, it will act on the Secondary Standing Order.

Standing orders will only be checked if the increment length is greater than one hour. In addition, acting on the Standing Orders for “Move to Gas Giant with Sorium” and “Move to Asteroid Mineral Source” will unset the standing order (to prevent continuous issuing of the same order). Civilians and NPRs will monitor ships in this situation and reactivate the standing order if required.

Conditional Orders are Standing Orders linked to a Condition. When the condition is met, the associated conditional order will be executed where possible. Secondary conditional orders will not be executed if the fleet is already acting on the primary conditional order.

Each potential order is accompanied by an S or an A. This indicates whether the order will look at potential destinations in the same system (S) or all systems (A). When the order involves moving to a different system, the algorithm calculating the best path will take into account whether the fleet will try to Avoid Danger and try to Avoid Alien Systems. These two values are set by the Check Danger Rating and Exclude Alien-Controlled check boxes respectively, which are located on the Movement Orders tab (see Auto Route rules post for more details).

There will be some new standing orders for C#, which I will list here as I add them:

1.  Land on Assigned Mothership: Can be used for Standing or Conditional orders and will only be executed if there is a common mothership for the fleet. An example of use would be survey carrier ops, where the parasites would return to the mothership if they were low on fuel or had surveyed all potential destinations.
    
2.  Move to System Requiring GeoSurvey: Can be used for Standing Orders. The fleet will move a system where the ‘Standing Order Geo Survey Complete’ flag is not set . This flag is set when a survey ship with an order of “Survey Nearest Body” or “Survey Next Five System Bodies” cannot find a system body within ten billion kilometres. It doesn’t mean the system is completely surveyed, but that it is surveyed in practical terms. If you need to you can send a survey ship to a distant planet or star (more than 10b km) and it will still automatically survey everything within ten billion kilometres of the last surveyed body, but the earlier setting of the flag means that other survey ships will not arrive automatically to survey the very distant bodies.
    
3.  Move to System Requiring Gravsurvey: Same as above but for survey locations.
    
4.  Refuel at Hub. This is part of several different orders. A Refuelling Hub is a large module intended for space stations (although it can be used on ships) which can simultaneously refuel an unlimited number of ships (while the fuel supply lasts) if it is stationary.
    
5.  Move to Closest Rendezvous Point: A new type of waypoint (see changes post following this one) is the Rendezvous Point. This can be assigned as a destination for a Standing Order or a Conditional Order
    
6.  Investigate Closest Point of Interest: A new type of waypoint (see changes post following this one) is the Point of Interest, which is a temporary waypoint that remain in place until a fleet arrives at the location or for six months, whichever happens first. The function of this order and the new waypoint is for the player to designate areas in a system which he wishes a fleet to visit automatically. Different fleets operating with the “Investigate Closest Point of Interest” order will take account of each other’s activity to avoid duplication of destination. Points of Interest can be designated as Urgent and these will take priority over other POIs.
    

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/a84b0e023906855768df5a3cf06922b9b3a61fdf_2_690x431.jpeg)

image940×588 250 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a84b0e023906855768df5a3cf06922b9b3a61fdf.jpeg "image")

  

**Waypoints**

Waypoints will be much more useful in C# Aurora. It will be possible to add the following five types to the system map:

*   Normal: The standard waypoint from VB6 Aurora. This will appear on the map as Waypoint #1, Waypoint #2, etc. with the number unique to the system. A normal waypoint will remain until manually removed and can be assigned as a destination in movement orders.
    
*   Named: Functions as a normal waypoint with the exception that during placement you can assign a name to the waypoint, that will be displayed instead of the normal text.
    
*   Rendezvous: Functions as a normal waypoint and will also be used as a target for the new Standing / Conditional Order “Move to closest Rendezvous Point”.
    
*   Point of Interest (POI): A temporary waypoint that remain in place until a fleet arrives at the location or for six months, whichever happens first. The POI will be used as the destination for the new Standing Order “Investigate Point of Interest”. The function of this waypoint is for the player to designate areas in a system which he wishes a fleet to visit automatically. Different fleets operating with the “Investigate Point of Interest” order will take account of each other’s activity to avoid duplication of destination.
    
*   Urgent Point of Interest: Similar in function to a POI waypoint. The differences are that this waypoint type will remain in place until a fleet arrives at the location or for one year, whichever happens first, and that any fleet with the Standing Order “Investigate Point of Interest” will visit Urgent POIs before normal POIs.
    

Clicking on a system body icon when placing a waypoint of any kind will link the waypoint to the system body and it will move with that system body.

Example screenshots below:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/9d9a0dc8bb47898f3f56c6e7d5456cfcd9ad0559_2_650x500.png)

image940×722 128 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9d9a0dc8bb47898f3f56c6e7d5456cfcd9ad0559.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/51e2d4a974dbbc255e0e88a2d6100f7f1c5fd0f0_2_690x430.jpeg)

image940×586 134 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/51e2d4a974dbbc255e0e88a2d6100f7f1c5fd0f0.jpeg "image")

  

**Reaction Bonus**

A commander’s initiative bonus has been replaced by a new Reaction Bonus. This serves two functions:

1.  Fleets (both player and NPR) will move in ascending order of the average reaction bonus of the ship commanders in the fleet.
2.  Response time for orders (when hostiles are present), which is based on fleet training, will be further reduced by the average reaction bonus of the ship commanders in the fleet.
3.  Any ship without a designated commander will be treated as if it has a commander with a 0% bonus.

  

**Standing Order for Unload Colonists**

I’ve completely rewritten the standing order (VB6 default order) for unloading colonists (used by shipping lines, NPRs and your own ships if desired). The process is as follows:

1.  Colony fleet looks for a suitable population that is set as a destination with no other colony fleets inbound, checking its current system first and then using the path finding algorithm to search everywhere else in the empire.
2.  Same as 1) but without the check for inbound colony ships.

When determining if a population is a suitable destination, the fleet checks the following:

1.  How many colonists it is carrying.
2.  If the species is the same as the colonists.
3.  The available capacity of the system body on which the population is situated, taking into account other populations.
4.  The available capacity of the infrastructure (normal or LG depending on the gravity), taking into account the current population size.
5.  The lesser of 2) and 3) is used as the base capacity of the population to accept new colonists.
6.  Any available space in orbital habitats is added to that capacity.
7.  The total number of colonists on ships already inbound to the colony is deducted from that capacity.
8.  if the capacity exceeds the number of colonists in the checking fleet and the species match, the colony is suitable.

This should prevent the current problem of many colony ships delivering to a colony without the capacity to support them all. As soon as a fleet determines a colony is suitable, the orders are issued, which means other fleets checking in the same increment will be aware of the extra inbound colonists.

Because of these changes, Passenger Liners will no longer search their current system for a potential destination (otherwise they could load and unload at the same population).

  

**Standard transits by Fleets with Commercial and Military Ships**

In VB6 Aurora, fleets that included at least one ship with military engines could only use military jump drives for standard transits, which meant you had to split out commercial-engined ships into a separate fleet and escort them with a commercial jump drive ship.

In C# Aurora, commercial-engined and military-engined ships are treated separately. So if you have a fleet with mixed engine types that also includes ships with commercial and military jump drives, it will still carry out a standard transit if the respective jump drives are large enough for the ships with the matching respective engine types. However, if any ship with either engine type can’t jump, the whole fleet will fail to transit.

Squadron jumps are handled differently so I will cover that in a separate post.

  

**Jump Point Stabilisation**

For C# Aurora, Jump Gates have been replaced by Stabilised Jump Points. This is purely a technobabble change and there is no change in function.

Anything associated with VB6 Jump Gates will be changed accordingly. For example, Jump Gate Construction Modules have been replaced with Jump Point Stabilisation Modules and the Build Jump Gate order is now Stabilise Jump Point.

  

**Fleet Maximum Speed**

Fleets have a checkbox on the Naval Organization window entitled ‘Use Maximum Speed’.

If this is checked, Fleets will automatically recheck their speed at the start of each movement sub-pulse and use the maximum available

  

**Jump Drive Size Requirements**

When using a jump drive to open a jump point for other ships, the only requirement is that the jump drive capacity is large enough for the transiting ship. There is no requirement in C# Aurora for ship mounting the jump drive to be as large as the transiting ship.

Relatively small jump tenders or bases will now be able to open a jump point for much larger ships.

  

**Jump Point Transit Shock**

When a ship transits a jump point, it will suffer jump shock. This temporarily disables active sensors, fire control systems and jump drives.

A ship making a standard transit will suffer a delay equal to: (120 seconds + Random 1 to 60 seconds) \* Ship Bonus.  
A ship making a squadron transit will suffer a delay equal to: (20 seconds + Random 1 to 10 seconds) \* Ship Bonus.

The ship bonus is equal to: 2 - ((1 + Crew Grade) \* Morale \* Overhaul Factor).

For example, if a ship has 100% morale, an overhaul factor of 1 (which is normal) and crew grade of 10%, the ship bonus would be (2 - (1.1 \* 1 \* 1) = 0.9. So any delay would be multipled by 90%.

The length of jump shock for NPRs is halved. This is to compensate for the fact that humans can make much better decisions in this situation, in particular with regard to ensuring the right mix of jump ships and warships is available in the right place at the right time to take advantage of squadron transits. If I get around to coding more detailed strategic decision-making in this situation for NPRs (not a priority for V1), I’ll make them the same as player races.

  

**Fleet Order Templates**

When a fleet is given a set of orders on the Naval Organization window, those orders can be saved as an ‘Order Template’. This is as simple as clicking the Save Template button and typing a name into a popup box.

When the Order Templates option is chosen in the top left of the Movement Orders tab, all Order templates that start in the same system as the currently selected fleet are displayed (see first screenshot). To use a template, select it from the list and click Add Move. All the orders are created accordingly (see second screenshot). This is similar to the same functionality in VB6 but the UI allows a lot more templates to be easily accessible.

Templates can be deleted with the Delete Template button.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d903558a25d10b5da68dfa680995726cb031d2d6_2_690x429.jpeg)

image940×585 135 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d903558a25d10b5da68dfa680995726cb031d2d6.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/44d2463c53c90ce6b30421a7db2ddcfce89951f9_2_690x430.jpeg)

image940×587 151 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/44d2463c53c90ce6b30421a7db2ddcfce89951f9.jpeg "image")

  

**Fleet Distance and Time**

When a fleet is given orders, the Naval Org window will show both the distance and time required for those orders, so you now know (for example) when vital Gallicite shipments will reach your home world. See at the top of the screenshot below.

There are a few other enhancement, such as military tonnage in the fleet (which helps with checking maintenance requirements) and total fleet cost.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d7a6b5981e9fec04db5c34c688521240b52326f7_2_690x430.jpeg)

image940×586 190 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d7a6b5981e9fec04db5c34c688521240b52326f7.jpeg "image")

  

**Create New Lagrange Points**

Ships designed for jump point stabilisation (creating jump gates in VB6) can also stabilise new Lagrange points.

Any planet with a mass of at least 150 will already have a stable Lagrange point that allows any numbers of ships to jump to other stable Lagrange points. Planets less than 150 mass also have Lagrange points but they are not stable and therefore not visible on the map. A ship with a stabilisation module can stabilise these Lagrange points so that all ships can use them. It is much easier to stabilise high mass planets, so gas giants are commonly used for this purpose, but it is possible even for larger terrestrial worlds given sufficient time. It is not possible to stabilise the Lagrange point of a planet with less than 0.25 mass.

The time in months required to stabilise a Lagrange point for a given planet is equal to: 60 / SQRT (Planet Mass). The production bonus of the ship commander will reduce this time.

For the solar system:  
Jupiter has a mass of 317 so it already has a stable Lagrange point.  
Saturn has a mass of 95 and would require six months.  
Uranus has a mass of 14 and would require 1.3 years.  
Neptune has a mass of 17 and would require 1.2 years.  
Earth has a mass of 1 and would require 5 years.  
Venus has a mass of 0.82 and would require 5.5 years.

Mars has a mass of 0.11 and Mercury has a mass of 0.055 so they are too small.

A new ‘Stabilise Lagrange Point’ order is available for planets where stabilisation is possible. The stabilisation ship remains at the associated planet while the task is carried out. Apart from the location and different required time, this is very similar to a jump point stabilisation task.

The time required for any given planet can be found on the System View in the very last column (you will need to scroll right).

  

**Lagrange Points for Moons**

In C#, it will be possible to have Lagrange Points for moons. These will not occur naturally, but there are two situations where it is possible. Firstly, you can use a ship equipped with a Stabilisation Module on any moon with a mass of at least 0.25 Earth masses. The time required will depend on the mass of the moon but it is likely to be several years. Secondly, you can place the Lagrange Point manually using the new System Design functionality. The latter option does not have any mass restriction.

This will provide a way to have ships jump very close to the parent planet of the moon, which is very useful in logistics terms but very dangerous if you are at war.

  

**Salvage in Orbit**

When a wreck is salvaged in VB6, the recovered minerals and components so to freighters in the same fleet as the salvage ship.

In C#, the same is true. However, if the wreck is in orbit of a population from the same race as the salvage ship, there are no freighters available and either a ship in the salvage fleet or the population has cargo shuttles, the recovered minerals and components are added to the population stockpile.

  

**Tractor Any Ship**

I’ve added a new order to “Tractor Any Ship in Fleet”. A tug with this order will tractor the largest ship in the target fleet, without you having to specify the ship.

This allows you to create an order cycle to move a group of space stations (terraformers, fuel harvesters, orbital miners, etc.) from one location to another without having to specify each ship individually. With the new space station rules in C# Aurora, this will happen a lot, so this new order is designed to protect my sanity ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:")

  

**Survey Speed**

The game details window has an option to change survey speed in the game. 100 is the normal rate. For example, if survey speed is changed to 50, all surveys will take twice as long, whereas if survey speed is changed to 125, surveys will happen 20% faster.

The survey speed modifier is applied to the survey points produced by survey ships. Everything else remains the same.
