**New Maintenance Rules**

In VB6 Aurora, the maintenance facilities of a population, aided by ships in orbit with maintenance modules, have a maximum maintenance capacity measured in tons. Any ship of that size or less can be maintained. Fighters cannot be maintained in this way and have to be stored in hangars.

In C# Aurora, maintenance facilities and modules are handled differently:

1.  Each maintenance facility or maintenance module has a basic capacity of 1000 tons. A new tech line exists that can raise this capacity in increments, starting with 1250 capacity for 2000 RP. The 2000 ton capacity is at 8,000 RP and the max is currently 6250 tons at 250,000 RP.
    
2.  Any location that contains a population with maintenance facilities or a ship with maintenance modules is known as a ‘Maintenance Location’. This does not need to be in the same location as a population. A Maintenance Location consisting only of ships with maintenance modules could be in deep space.
    
3.  The maintenance capacities of all populations and maintenance ships of the same race in the same Maintenance Location are added together to create a ‘Total Maintenance Capacity’.
    
4.  A Maintenance Location can fully maintain ships in its location if the total tonnage of those ships is equal to or less than the Total Maintenance Capacity. In other words, maintenance is now based on summing the tonnage of ships to be maintained, rather than supporting all ships under a set tonnage.
    
5.  If the total tonnage of the ships to be maintained is greater than the Total Maintenance Capacity, each ship will be partially maintained. This is known as the ‘Effective Maintenance Rate (EMR)’ For example, if the Total Maintenance Capacity is 80,000 tons and the total tonnage of the ships requiring maintenance is 100,000 tons, the EMR is 80%. Each ship will use 80% of the normal amount of MSP required for maintenance. Each’s ship maintenance clock will advance at 20% of normal and their chance of system failure will be 20% of normal.
    
6.  The maintenance capacity of maintenance facilities on a population is modified by the population’s Manufacturing Efficiency (available worker / required workers), Radiation Production Modifier, Political Stability Modifier (based on unrest) and Political Status Production Modifier (Conquered / Subjugated, etc.). The capacity of both maintenance facilities and maintenance modules is modified by the racial Economic Production Modifier (amount of debt vs annual income).
    
7.  Ships can enter overhaul in the same way as they do now, except they can also do this at a deep space Maintenance Location as well as at a population. Overhauls will proceed at a slower rate (and use fewer MSP) if the total tonnage of the ships being maintained exceeds the Total Maintenance Capacity. However, ships undergoing overhaul will not suffer maintenance failures in this situation.
    
8.  Fighters can be maintained by Maintenance Locations and do not need to be stored in hangars (because now they use capacity whereas the VB6 rule was implemented to prevent unlimited fighters being maintained).
    

Use of Maintenance Supply Points (MSP):

1.  MSP are used in a very similar way to VB6 Aurora. While a ship is being maintained, it requires total MSP per year equal to Class Cost / 4. A ship undergoing overhaul requires total MSP per year equal to Class Cost.
    
2.  If the ship is being maintained in a situation where the total tonnage of the ships being maintained is greater than the Total Maintenance Capacity (EMR less than 100%), the MSP requirement will be reduced accordingly (see above).
    
3.  The ship being maintained will use up MSP from any racial populations in the same location, in descending order of MSP stockpile. If no populations are available, or have no MSP, the maintained ship will use MSP from any Supply Ships in the same location, in descending order of available MSP. Finally, if no other option is available, the maintained ship will consume its own MSP. A ship can use a combination of the above to locate sufficient MSP.
    
4.  If the ship cannot locate sufficient MSP to meet the requirements for maintenance, this also has an impact on the Effective Maintenance Rate (EMR) for that specific ship. For example, assume a Maintenance Location with a capacity of 80,000 tons is maintaining 100,000 tons of shipping. The EMR for that Maintenance Location is 80%. A ship with a class cost of 1500 BP is being normally maintained and will require annual MSP equal to (Class Cost / 4) \* EMR or (1500 / 4) \* 80% = 300 MSP. If the ship can only locate 240 MSP, the EMR will be reduced by the proportion of available MSP to required MSP: (240 / 300) \* 80% = 64%. The ship will now consume 240 MSP, the maintenance clock will be advanced at 36% of normal and the chance of system failure will be 36% of normal. (in reality the MSP numbers will be much smaller as during a single increment the ship is being maintained for only a small fraction of a year).
    
5.  The order in which ships are checked for available MSP is based on Class Maintenance Priority, then by Overhaul vs. Normal Maintenance, then by highest maintenance clock.
    
6.  The chance of system failure, whether away from a Maintenance Location or while being partially maintained, is reduced by the crew grade bonus (or increased for crews with a negative bonus) and the ship’s Engineering bonus (50% of commander bonus and 100% of Chief Engineer bonus).
    

These new rules remove many of the maintenance restrictions on larger ships and make maintenance of FACs and fighters more realistic. They introduce the same economic factors to maintenance that exist for production. In addition, I believe this creates a more realistic environment where the required maintenance facilities / modules are tied to the absolute amount of ships to be maintained, rather than just their maximum size. Finally, maintenance can now be carried out away from population centres, making deep space bases a possibility.

  

**Maintenance Locations View**

There is a new display option on the galactic map to highlight Maintenance Locations. They are displayed as a dashed blue circle.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/672d465cedd06c516d0d97b23632aa1e661d0b48_2_690x489.png)

image940×667 145 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/672d465cedd06c516d0d97b23632aa1e661d0b48.png "image")

  

**Change to Maintenance Facility Cost**

Because of the changes to maintenance in C#, maintenance facilities have become much more important for two reasons:

1.  You can no longer use the same maintenance facilities to support multiple ships, so you need far more maintenance facilities in general. For example, if you build a 20,000 ton ship, you also need 20,000 tons of extra maintenance facility capacity to support it.
2.  The only source of maintenance supply points is from maintenance facilities as you can no longer build them with construction factories.

Because of the above, the cost of maintenance facilities has been reduced to 60 BP. They remain the same in other aspects, such as transport size, manning requirements, target size, etc.

_Note: In general I am very happy with the maintenance changes. They allow you to setup distant bases capable of handling larger ships much more easily and, together with the new shipyard worker requirements and the need for more financial centres, they are putting much more pressure on the number of available workers._

  

**Minerals for Maintenance Supplies**

One of the major practical game play changes I have found through play-testing C# Aurora is the ease with which new naval bases can be created (because of the new maintenance system).

However, that brings a new issue. As you can no longer build MSP using construction factories in C#, you need to make full use of the MSP production of maintenance facilities or you start to run out of MSP (which is happening to me now because I am not doing that). The reason I am struggling to build MSP at the new bases is that MSP require eight different minerals. 1 MSP costs 0.25 BP and requires the following minerals (in tons): Duranium 0.05, Neutronium 0.025, Tritanium 0.025, Boronide 0.025, Mercassium 0.025, Uridium 0.025, Corundium 0.025, Gallicite 0.05. There is a lot of micromanagement required in either mining those minerals locally or moving them manually.

Therefore, for game play reasons and my own sanity I’ve decided to reduce the number of minerals required. I summed all ship components subject to maintenance for all military ships in my current game (including AI) to determine the most common minerals. Duranium and Gallicite were about the same, Uridium was about half of those and everything else was much lower, around one sixth or less of Duranium. Therefore I am going to change MSP minerals to Duranium 0.1, Uridium 0.05, Gallicite 0.1. That is much easier to remember and more reflective of reality. While that does increase overall Duranium consumption a little, I have also changed some buildings to use less Duranium, which I will post about separately.

  

**Abandon Overhaul**

In VB6, a fleet can issue an Abandon Overhaul order and one month later, any ships in overhaul within that fleet will be returned to a normal maintenance state.

For C#, each individual ship (or a whole fleet) can choose to abandon overhaul at any point. It immediately returns to a normal maintenance state but suffers severe after-effects as the crew try to return the ship to normal working order. The ship has an ‘Overhaul Factor’ that starts at 0.01 immediately following the abandon overhaul decision and increases to 1.00 over the course of thirty days. The increase takes place in each movement phase sub-pulse, following movement in that sub-pulse. The ‘Overhaul Factor’ is used in a similar way to crew grade and morale and affects the following:

1.  Weapon Chance to Hit.
2.  Engine Power
3.  Maximum Shield Strength
4.  Maintenance Failure Chance
5.  Jump Shock Length
6.  Fleet Training

For example, a ship six days after abandoning overhaul will have an overhaul factor of 0.2. Assuming no crew grade or morale modifier, engine power and maximum shield strength will be 20% of normal, combat to hit chance will be 80% lower than normal. Maintenance Failure will be 80% higher, Jump Shock length will be 80% longer and Fleet Training will be at 20% of normal.

This rule allow ships to leave overhaul immediately if absolutely necessary (such as hostile vessels closing in), but the short-term penalties are considerable. The Abandon Overhaul order has been removed.

Ships undergoing overhaul in C# Aurora are zero speed for purposes of incoming missile or weapon fire, cannot fire weapons or launch missiles and have zero shield strength.
