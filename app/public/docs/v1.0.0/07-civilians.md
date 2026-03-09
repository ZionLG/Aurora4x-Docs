**Trade Good Modifiers**

In VB6 Aurora, civilian production of trade goods is affected by the population size, the race wealth creation rate, the production rate of each specific trade good, the political status of the colony and the wealth modifier of the planetary and sector governors.

In C# Aurora, it will also be affected by radiation and unrest.

  

**Shipping Lines**

A Shipping Line will start building freighters and colony ships when the parent race has two colonies (including the capital) with populations greater than zero.

A Shipping Line will start building passengers liners when the parent race has two colonies (including the capital) with populations greater than zero in two different systems.

A Shipping Line will start building harvesters when the parent race has two colonies with populations greater than zero and there is Sorium present at any gas giant or superjovian in a system with a parent race population of at least ten million (including the capital).

The number of civilian freighters and colony ships will be kept relatively even.

Creation of new shipping lines will only be possible once the starting shipping line has created its first ship.

  

**Shipping Line Earnings and Tax**

For C# Aurora, the distance a civilian ship has travelled (in terms of systems) will affect how much the shipping line receives in payment and how much tax is generated.

All VB6 payment rates will be halved as a baseline but multiplied by the number of systems travelled. So a civilian ship travelling to a destination two transits away will receive the same payment as in VB6 Aurora. A ship travelling to a destination five transits away will receive 250% of the current payment. This applies to trading and to player contracts.

Government tax rates on civilian shipping will work in the same way, except rates will not be halved as a baseline. This will increase the overall tax revenue from civilian shipping.

A civilian ship travelling within the same system will be paid half of the one-system rate (which is half what is currently paid in VB6). This applies to both the payment to the shipping line and the tax.

This should reduce some of the early game bloating of civilian traffic but make it workable for the later game with longer distances (especially with the new jump point generation in v7.1 of VB6 Aurora).

  

**Civilian Trade**

For C# Aurora, I’ve updated civilian trade to use a better algorithm.

In VB6, civilian freighters without orders will move to a ‘Trade Location’, which is defined as a population with a balance in one or more trade goods that is greater than the capacity of the freighter. On arrival, the freighter will check the trade balances and try to find a suitable destination for one of them. If a destination is found, the move will be plotted. If not, the freighter will search for a new trade location. It could be more intelligent but not without a larger performance overhead.

In C# Aurora, a freighter without orders, regardless of current location, will search known space for the closest population that has export trade goods, taking into account any other freighters already en route to collect that trade good (and any path finding restrictions such as danger). If a suitable trade good is located, the freighter will look for the population closest to the pick up point which has an import requirement for that trade good (again taking into account any freighter already en route to drop off the same good at that destination). If no destination is found, the freighter checks the pick up point for any other trade good options with suitable destinations. If that doesn’t work, the freighter checks the next population based on distance, etc., until it has checked every possible combination of populations and trade good routes in known space. If a valid route is found, all the orders are plotted including any Lagrange short-cuts. Then the next freighter repeats the process, etc..

Infrastructure is checked first at each population before any other trade good. Freighters understand the difference between low gravity infrastructure and normal infrastructure and will move the correct type of infrastructure to appropriate destinations.

Given that every civilian freighter without orders is checking every system, population and trade good in known space to find a suitable trade route, there might be a concern regarding performance. My current campaign is an ideal test bed, as I have removed every order from every fleet due to the incompatibility of the VB6 and C# database structures. Which means in the first trade phase after program start, the code is checking all 364 civilian freighters in a universe with 495 star systems, 1343 jump points, 380 Lagrange points, 345 populations and 23 different races. That first trade phase, including identifying routes for all freighters and creating 1896 individual movement orders (including load/unload, transits and LG points) required 1.01 seconds.

Colony fleets follow similarly complex rules, explained in the link below. Routing 198 civilian colony fleets using these rules, along with every other ship with Standing Orders, added a further 619 movement orders and required 0.56 seconds.

  

**Civilian Destinations**

In VB6 Aurora, civilians will treat any population of less than 25m as an automatic destination. Once a population is above 25m, the player can choose whether the population is a destination for colonists, a source of colonists or neither.

For C#, the population level at which the player can intervene has changed to the lower of 10m or half the capacity of the system body. Since the jump point generation changes in the later versions of VB6, the universe is more ‘stretched out’, so populations are much slower to reach the 25m mark.

I’ve also changed the population at which all trade goods become available to 10m (it was 20m for five trade good types).

10m aligns with the point at which civilians will consider creating mining colonies in the same system.

  

**Civilian Movement Restrictions**

A system can be flagged as ‘Military Restricted’ on the Miscellaneous tab of the Galactic Map. Once flagged, civilians will avoid the system. Civilians will also avoid any system flagged as alien-controlled.

A population can be flagged as ‘Military Restricted’ on the Civilian Economy tab of the Galactic Map. Once flagged, civilians will avoid the population.

When a system or population is flagged as restricted, any colony ships en route will be diverted to other destinations. Freighters en route will abandon their cargo and seek new trade runs. You will receive a popup warning on that basis before confirming the new status.

_N.B In the past, I have been very reluctant to have restrictions on civilians, mainly because this would allow the players to effectively exercise direct control and consequently the civilians would just become an extension of the government. For example, using the above option, you could restrict every system except the one that you would like civilians to colonise. However, there are many ways to exploit Aurora if that was the goal of the player, so I’ve decided to leave it to players to role-play their preferred way of handling civilians._

  

**Civilian Movement of Installations**

As in VB6, Civilians will still transport installations for player races. However, there are changes to the UI, the path finding and the costs for the this service.

In terms of cost, in VB6 the cost was a set fee of 10 wealth for multi-system transportation and 5 wealth for same system, regardless of freighter size. In C# Aurora, the cost is:  
5 x Number of Installations x Systems Travelled x (Installation Type Cargo Points / 25000)

So for a standard freighter (single cargo hold) transporting a construction factory to a destination four systems away, the cost would be 20 wealth. The calculation is 5 x 1 x 4 x (25,000 / 25,000). Destinations in the same system as the start point count as half a system.

For path finding, civilian ships will use the same logic as transporting trade goods. They will search for player contracts before searching for trade goods. Note this means you can effectively commandeer civilian shipping for your own needs in an emergency, but doing so will disrupt normal civilian operations such as moving infrastructure.

There is a Civilian Economy tab on the Economics window, which has three lists. To the left is a list of installations at the colony, the centre has a list of installations demanded and the right has a list of installations supplied. Above the centre list is a dropdown with all types of known installations. Above the right-hand list are the installations that the colony can supply. For both the latter lists, there is an Amount column, which is the amount Demanded or Supplied, and an Assigned Column, which is the number of the installations for which a freighter contract is already assigned (this is a sub-set of the Amount). The lists can be managed with the buttons below. Adding or editing will trigger a popup box so you can type in the amount required.

The screenshots below show:

1.  A colony in Zeta Herculis with Supply contracts for various installations. Most are already fully assigned.
    
2.  The Avalon colony with several Demand contracts. Again, most are already assigned.
    
3.  A civilian freighter has been assigned one of the above contracts and is en route to the pickup point. Note that Shipping Lines will show up on the Naval Organization window if desired, although you can’t give them orders.
    

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9a260ea06f2471b01f5e17d2c6d113982b888e4b.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a99969ca5d8a71dee012a35ea661140d965b0261.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/a081d41708fa1b133126b5febc35d49cf4afcb4a.jpeg)

  

**Civilian Mining Colonies**

**VB6 Civilian Mining Check**

In VB6, a check is made each construction phase to see if new civilian mines are checked. The chance of this check is based on a random number of one million with a successful check equal to annual wealth or less. There must also be two populations for that race.  
If a check takes place, the code orders all systems that contain a population of 10m or more (on a single body) and then steps through them in descending order of population. In each step, there is a 50% chance the system will be checked. Once a system is checked, no more will be checked in that phase.

The code then searches that system for bodies without a current population, less than 80 AU from their star, that have at least 15,000 tons of Duranium or Sorium and accessibility 0.7 or higher. The one with the highest combined amount of minerals of any type where accessibility is at least 0.5 accessibility is chosen.

The above can lead to a situations where good mining sites can be ‘blocked’ by higher population systems with no good mining sites and there are also some issues with potential locations. Therefore, C# uses a different method.

**C# Civilian Mining Check**

Each construction phase, if a race has at least two colonies with population or infrastructure, that race rolls a random number from 1 to 50,000. If that random number is less than Annual Wealth \* (Construction Phase Seconds / Year Seconds), a check is made for a potential new civilian mining complex. For example, for a race with 20,000 annual wealth checking during a construction cycle that is exactly five days, the number needed to pass would be 274 (20,000 \* 432,000 / 31,536,000), which is 0.55%. This is a lower chance for a check than in VB6 to account for the following changes.

If that check is passed, a list is made of all suitable locations for a civilian mining complex. A suitable location is a system body with at least 10,000 tons of Duranium that has an accessibility of at least 0.7. That system body must be in a system with at least one population of ten million and must be less than 80 AU from its parent star. If orbiting a non-primary star, that star must be within 80 AU of the primary or have an Lagrange Point within 80 AU that can link to a Lagrange Point within 80 AU of the primary.

Once all suitable locations are determined, each location is given a score based on the total amount of minerals with accessibility of 0.5 or higher. Duranium scores double. The new mining complex is created at the location with the highest score. Population is not a factor beyond the ten million limit required for consideration of the parent system.

For each existing civilian mining colony, a similar check is made in the construction phase to determine if an additional complex is added. For this check, the roll is 1-100,000.
