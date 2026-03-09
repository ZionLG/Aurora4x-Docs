**Command & Control Rules**

I am introducing new command and control rules for C# Aurora. The commander of a ship will only apply half his bonus for Crew Training, Survey, Fighter Operations, Engineering (new skill) and Tactical (new skill). However, additional officers can be assigned to the ship with each officer applying his full bonus for his chosen speciality (more on that later). The commander of the ship is now a jack-of-all-trades, applying a portion of his bonus while the specialists provide the larger bonuses. Larger ships gain an advantage as they can afford the space to accommodate the specialists, while smaller ships have to make do with the commander handling everything (at half efficiency). Any bonuses not mentioned here (such as Reaction or Production) will still be at full value for the commander.

Five new command and control modules have been added, the cost of the bridge has been doubled and the role of the flag bridge has been changed. Each module adds one to the Control Rating of the ship.

1.  Bridge is 1 HS and costs 20 BP. The required rank for the ship commander is the racial minimum.
    
2.  Auxiliary control is 1 HS and 15 BP. Allows the assignment of an Executive Officer to the ship who will apply his full Crew Training Bonus. The required rank for the ship commander is one above the racial minimum.
    
3.  Science Department is 2 HS and 50 BP. Allows the assignment of a Science Officer to the ship who will apply his full Survey Bonus. The required rank for the ship commander is one above the racial minimum.
    
4.  Main Engineering is 3 HS and 75 BP. Allows the assignment of a Chief Engineer to the ship who will apply his Engineering Bonus to affect maintenance and damage control. The required rank for the ship commander is two above the racial minimum.
    
5.  Combat Information Centre (CIC) is 3 HS and 75 BP. Allows the assignment of a Tactical Officer to the ship who will apply his Tactical Bonus to various combat-related function (TBD). The required rank for the ship commander is two above racial minimum.
    
6.  Primary Flight Control is 4 HS and 100 BP. Allows the assignment of a Commander Air Group to the ship who will apply his full Fighter Operations Bonus. The required rank for the ship commander is one above the racial minimum.
    
7.  Flag Bridge is 5 HS and 125 BP. A fleet that includes a ship with a flag bridge can assign a ‘fleet commander’ senior to the commander of the ship. If a fleet has multiple flag bridges, the most senior officer assigned to any of them will be the fleet commander. The fleet commander will improve the fleet’s overall reaction rating by his Reaction Bonus. If there are no flag bridges in a fleet, the senior ship commander will be the de facto fleet commander, but his reaction bonus will not affect other ships. The required rank for the ship commander of the ship with the flag bridge is two above the racial minimum. There are no longer any task forces or staff officers. Any commander assigned to a flag bridge who is not the most senior in the fleet will be referred to as a ‘Flag Officer’.
    

In cases where different control stations have different required ranks for the ship commander, the highest rank takes precedence.

An officer can be killed if his station is damaged. I may also add ‘temporary promotions’ if the commander is killed, with the most senior surviving officer taking over as commander until relieved or promoted.

Except for the ship commander and the executive officer, the bonus from each specialist will only apply if their associated module is undamaged. Bonuses from the commander and XO will only apply if the ship has a control rating greater than zero (they can command the ship from any of the surviving control spaces). Ships smaller than 1000 tons automatically have a control rating of 1, even without a bridge. This is to simulate that small ships do not require a dedicated centralised command function.

I don’t plan to scale the modules to ship size or add extra crew. That would add extra complexity and make designing ships more difficult. For small ships, most command and control modules won’t be used, and once you get past a certain size of ship, they will probably all be used. I am not trying to create a decision as to whether a battleship should have a CIC or Main Engineering, but rather to create meaningful choices for mid-range ships.

For auto-assignment purposes, each ship class now has a specific rank requirement for its commander, based on its command and control modules. The rank requirement for the XO, CAG and Science Officer is one lower than for the ship commander. The rank requirement for the Chief Engineer and Tactical Office is two lower than the ship commander. The rank requirement for a fleet commander is one higher than for the ship commander. You can manually assign higher-ranked ship commanders and fleet commanders if desired but other officers can only be assigned at the specified rank. The commander priority setting for each class of ship remains as before and is still set manually. It also applies to the other officer types as well. Auto-assignment will work in the following sort order:

1.  Class Priority
2.  Survey Ships by descending size
3.  Warships by descending PPV
4.  Unarmed Military Ships by descending size
5.  Construction Ships by descending construction speed
6.  Terraformers by descending terraforming capacity
7.  Sorium Harvesters by descending harvesting capacity
8.  Asteroid Miners by descending mining capacity
9.  Salvage Ships by descending salvage capacity
10.  All other ships (primarily freighters and colony ships) by descending size

Ship commanders will be assigned first (checking every category above), followed by executive officers, science officers, air group commanders, chief engineers and tactical officers. The ships will cycle through in priority order and commanders will be assigned if they meet the criteria for the ship type (correct rank and suitable bonus).

These changes should make ship design more interesting, create better histories for commanders (as they progress through different roles) and provide lots of potential roles for the junior commanders.

  

**Commander Careers**

In C# Aurora, the rules for accidental death and commander health remain as they are in VB6 Aurora.

Retirements are handled differently. An naval officer will be checked for the potential for retirement from service once the length of his career exceeds the minimum retirement time for his rank. The minimum retirement point is 10 years for the lowest rank. For other ranks it is equal to 10, plus 5 years for every level of rank above the minimum. So assuming lieutenant commander was the lowest rank, minimum retirement would be 10 years after career start for a lieutenant commander, 15 years for a commander, 20 years for a captain, etc..

For ground forces commanders the minimum retirement is 20 years for the minimum rank. For other ranks it is equal to 20, plus 5 years for every level of rank above the minimum.

For scientists and administrators the minimum retirement is 40 years.

The chance of the retirement occurring is 20% for each year beyond the minimum retirement date. This is doubled if the commander has no assignment. Each increment the chance is checked using: (Increment Length / One Year) \* Retirement Chance.

The VB6 concept of ‘tour length’ does not exist in C# Aurora, so there will no longer be mass-reassignments every couple of years. In addition, the removal of officers after six years with no command will no longer happen. Instead, C# should have a more realistic progression because of the different mechanics. Firstly, inactive or low ranked commanders will tend to retire relatively early, which will keep overall officer numbers down and open up their commands (if one exists) for new assignments. Secondly, ships can potentially have multiple officers, which creates many more assignments. Thirdly, each ship (or other officer position) can only be assigned to an officer of a specific rank. As soon as that officer is promoted, he has to leave that position, which opens it up for another officer. Finally, naval officers in non-command positions (XO, Tactical Officer, CAG, Chief Engineer, Science Officer), will be automatically assigned to any ship command position that becomes available, assuming they have suitable bonuses, opening up their previous role.

Ship commander ranks are based on the following rules:

1.  Assume lowest rank if none of the following conditions exist. Otherwise use the highest applicable rank for any condition.
2.  Lowest rank + 1 for any ship class equipped with any of the following: Geological or Gravitational Sensors, Auxiliary Control, Science Department, Jump Drive
3.  Lowest rank + 2 for any ship equipped with any of the following: Weapons, Military Hangar Bay, Main Engineering, CIC, Flag Bridge
4.  Regardless of the above, any ship of 1000 tons or less will be the lowest rank, unless it has one of the control stations (Auxiliary Control, Science Department, Main Engineering, CIC)

Additional officers on the same ship have the following rank requirements:

1.  One rank lower than required ship commander rank: Executive Officer, Science Officer, Commander Air Group
2.  Two ranks lower than required ship commander rank: Chief Engineer, Tactical Officer

For example, the executive officer on a warship would be lowest rank + 1 (one lower than commander requirement) while the executive officer on an unarmed geological survey ship would be the lowest rank.

Overall, the variety of positions available at different ranks, combined with the positions opening up due to retirements, promotions and assignment of junior officers to ship command, should provide a more interesting career progression.

  

**Auto-Assignment of Naval Commanders**

Auto-Assignment of naval commanders is similar to VB6, although the process is now more detailed.

Every class of ship has a Commander Priority, a Primary Assignment Priority and a Secondary Assignment Priority. The Commander Priority, is set by the player, with 0 being the highest priority (until v1.12 when 0 is lowest), while the others are set by Aurora. Each class also has a Primary Bonus Type. When the list of ships without commanders is created every construction phase (during the auto-assignment phase) it is ordered by Commander Priority then by Primary Assignment Priority and then by Secondary Assignment Priority.

The ships are cycled through in that order, searching the available commanders (which is any unassigned commander or any commander assigned to a non-command position on a ship) for a suitable match for each ship. During the first run through of all ships, a suitable commander must have the primary bonus for the ship or they will not be assigned. In C# Aurora, unassigned commanders still have a small chance of gaining experience, including new bonuses, so they may be assigned in the future even if they currently do not have a suitable bonus.

Primary and Secondary Assignment Priorities and the Primary Bonus are set based on the following rules. Secondary Assignment Priorities are based on descending order for the ship class and the Primary Bonus is based on descending order for the commander.

**Geo Survey or Grav Survey**  
Primary: 1  
Secondary: Size  
Bonus: Survey

**Protection Values > 0**  
Primary: 2  
Secondary: Protection Value  
Bonus: Crew Training

**Military Vessel**  
Primary: 3  
Secondary: Size  
Bonus: Crew Training

**Construction Ship**  
Primary: 4  
Secondary: Class Cost  
Bonus: Production

**Terraformer**  
Primary: 5  
Secondary: Number of Terraforming Modules  
Bonus: Terraforming

**Harvester**  
Primary: 6  
Secondary: Number of Harvesting Modules  
Bonus: Mining

**Asteroid Miner**  
Primary: 7  
Secondary: Number of Mining Modules  
Bonus: Mining

**Salvager**  
Primary: 8  
Secondary: Number of Salvage Modules  
Bonus: Production

**All Others**  
Primary: 9  
Secondary: Size  
Bonus: Logistics

Bear in mind that all of the above is secondary to the priority given to each class by the player, so if you want a particular type of ship to get the best commanders assigned, give it a high priority.

After ship commanders are assigned, the non-command positions are assigned. Ships must have the appropriate command module for each non-command position in order for a commander to be assigned and the commander must have the required bonus. For each of the non-command positions (in the order below), the ships with an available position are ordered using the same rules as above, including the player priority. The positions and requirements are as follows:

**Executive Officer**  
Command Module: Auxiliary Control  
Bonus: Crew Training

**Science Officer**  
Command Module: Science Department  
Bonus: Survey

**Commander, Air Group**  
Command Module: Primary Flight Control  
Bonus: Fighter Operations

**Chief Engineer**  
Command Module: Main Engineering  
Bonus: Engineering

**Tactical Officer**  
Command Module: CIC  
Bonus: Tactical

  

**Crew Grade**

In VB6 Aurora, each ship crew receives grade points during each construction phase. The number of grade points received per year is equal to the commander’s crew training rating. The maximum number of points is 2000.

In C# Aurora, each ship crew receives grade points during each construction phase. The number of grade points received per year is equal to 50% of the commander’s crew training rating, plus 100% of the executive officer’s crew training rating. This training will only happen if the ship has at least one command & control system undamaged. The maximum number of points is 1000.

A ship’s crew grade bonus is equal to SQRT(Grade Points) - 10. So for VB6 Aurora the maximum is 34% and for C# Aurora it is 21.6%.

The net effect is that the grade bonus will be received more quickly but has a lower maximum value. The gap will be made up by the bonuses of other officers, such as the Tactical Officer or Chief Engineer.

  

**Crew Morale**

An issue in VB6 is that crew morale is checked for all ships, yet for many ships (anything that is not a military ship or doesn’t mount survey sensors), the morale is effectively irrelevant.

Therefore in C# Aurora, only ships for which morale is a potential issue will be checked for exceeding deployment time. This check is indicated by the addition of ‘MCR’ to the end of the Intended Deployment Time row of the class summary.

The requirement for a ship to have at least a 3 month deployment time in order to be classed as a non-military vessel still remains.

  

**Flight Crew Berths**

In VB6 Aurora, the player has to remember to add additional accommodation for the crews of parasite warships when designing a carrier, even without knowing the potential future parasites. These are known as Flight Crew Berths.

In C# Aurora, due to changes in the way crew morale and overcrowding are handled, the design process will automatically add 20 flight crew berths for each hangar bay. These berths are assumed to be sufficient for whatever parasite warships are present.

  

**Academy Commandants**

Commanders can be assigned as an Academy Commandant on any population with at least one military academy. Any type of commander can be assigned with the following restrictions:

1.  A civilian administrator must have an Admin Rating equal or greater than the number of military academies at the population
2.  A scientist must have a Research Administration rating (new bonus for C# which is the max number of labs) at least five times the number of military academies at the population
3.  A naval or ground forces officer must have a rank (with 1 being the lowest rank) at least equal to the number of military academies

The normal distribution of new commander types from the academy is 60% Naval, 25% ground, 8% Admin, 7% Scientist. While a Commandant is assigned, a check is made to see if an commander of the same type as the Commandant is generated. If the check fails, the normal distribution is followed. The chance is 14% for a Scientist Commandant to generate a Scientist, 16% for an Administrator Commandant to generate an Administrator, 40% for a Ground Forces Commandant to generate a ground forces officer and 80% for a Naval Commandant to generate a naval officer.

When a new commander is generated, a check is made to see which bonuses he receives. If the Commandant has at least 20% in any percentage-based bonus or 150 for crew training / ground unit training, all commanders graduating from the academy at that population will take two rolls for each qualifying bonus, and use the higher of the two results. If the Commandant is a scientist, there is a 25% chance any scientist from that academy will have the same research specialisation. If that check fails, the research specialisation will be chosen randomly (as normal).

This new rule should allow specialisation of academies on different worlds. Don’t forget that you can set up a military academy on any colony, not just those with a population.

  

**Fleet Training**

Fleet Training in C# Aurora provides the same benefits as VB6 Aurora. The mechanics by which it takes place are quite different.

Any fleet assigned to an Admin Command with a ‘Training’ specialisation will automatically take part in Fleet Training. Attaching a fleet to a Training Admin Command will start Fleet Training, while removing it will end Fleet Training. For details on Admin Commands, see above.

Each construction phase, each ship in a fleet assigned to a Training Admin Command will gain Fleet Training Points based on the following formula:  
Crew Training bonus of the Admin Command Commander \* Ship Crew Grade \* Ship Morale \* (Construction Phase Length / One Year)

Unlike VB6, a fleet undergoing Fleet Training can perform normal duties and can be given orders if desired (although this is not required). There are no fixed movement or locations for training. However, only military ships can benefit from Fleet Training. While in training, a ship is under the following restrictions:

1.  The parent fleet must remain in a system that is within range of its parent Training Admin Command
2.  The ship cannot use maintenance facilities
3.  The ship does not benefit from a Recreational Location
4.  Maintenance Failure Chance is 2x normal
5.  The ship’s Maintenance Clock increases by 2x time (compared to 1x for a normal ship), unless it is within a military hangar.
6.  The ship’s Shore Leave Clock increases by 2x time (compared to 1x for a normal ship), unless it is within a military hangar.
7.  Fuel is used as if the ship was running its engine at 10% power for the period of training (this is on top of any fuel used in normal movement). The fuel is consumed during each movement phase. A ‘ship’ without engines does not require fuel for this purpose
8.  Training will not take place if the ship is out of fuel or the Training Admin Command does not have a sufficiently senior commander.

These mechanics are intended to simulate that ships assigned to ‘Fleet Training’ are carrying out intensive training (drills, etc,) during the course of their normal activities. This places a strain on the ship systems and the crew, resulting in increased maintenance and fuel use and a lower overall deployment time. The ship also sacrifices the benefits that would come from a different type of Admin Command.

  

**Ground Commander Bonuses**

Ground force commanders have a much greater variety of bonuses in C# Aurora. The most straightforward are:

*   Ground Combat Defence (GCD): When elements of a formation are fortified, their fortification level is increased by the formation commander defence bonus
    
*   Ground Combat Offence (GCO): Increases the to-hit chance of all direct-fire weapons in the formation
    
*   Ground Combat Artillery (GCA): Increases the to-hit chance of all indirect-fire weapons in the formation
    
*   Ground Combat Anti-Aircraft (GCAA): Increases the to-hit chance of all anti-aircraft weapons in the formation
    
*   Ground Combat Logistics (GCL): Represents the chance that a formation element will not draw supply during a combat round.
    
*   Ground Combat Manoeuvre (GCM): Increases the chance that a formation will make a breakthrough in combat
    
*   Ground Combat Occupation (OCC): Boosts the occupation strength of a formation
    
*   Survey (SURV): Increases the output of geosurvey modules in ground units
    
*   Production (PROD): Increases the output of construction modules in ground units
    
*   Xenoarchaeology (XEN): Increases the chance of successfully recovering abandoned installations
    

In addition to the above, each ground commander has a ‘Ground Combat Command’ rating, which represents the size of the formation he can effectively command. This rating is given a relatively high score for promotional purposes so officers with high command ratings will tend to progress though the ranks.

If an officer is commanding a formation that is larger than his command rating, the effectiveness of his other bonuses will be reduced by (command rating / formation size). For example, an officer with a 20% defence bonus and a command rating of 5000 is commanding a regiment with a size of 7000. The defence bonus is reduced to 14.3%. In addition, if the largest HQ in a formation has a rating less than the formation size, the effectiveness of the formation commander’s bonuses will be reduced by (HQ rating / formation size). These penalties (command rating and HQ rating) are cumulative. Note that if all HQ capacity in a formation is eliminated, no commander bonuses will apply.

Finally, ground forces officers have a Ground Combat Training bonus, which affects morale. Each construction phase, any formation element with less than 100 morale will regain that morale at a rate of 100 per year, plus the commander training bonus (so a 20% bonus would increase morale recovery to 120 per year). Formation elements can continue to improve morale above 100, using the following process:

1.  The training bonus percentage (after any reduction for command rating and HQ rating penalties) is converted into a morale bonus at 1% = 1 morale point (so 10% training bonus = 10 morale bonus).
    
2.  Maximum formation element morale is 100 plus 5x the morale bonus
    
3.  Formation element morale increases at a rate equal to the morale bonus per year multiplied by the ‘Morale Gain Modifier’
    
4.  The ‘Morale Gain Modifier’ is calculated as 1 - ((Element Morale - 100) / (Maximum Morale - 100))
    

For example, a formation element has 140 morale and the commander of the parent formation has a Ground Combat Training bonus of 30%. However, he is commanding a formation that is slightly too large for his Ground Combat Command rating, so he has a Command Modifier of 0.8. The training bonus is 24% (30% x 0.8), which converts to a morale bonus of 24. The maximum morale for the formation is therefore (100 + (5 x 24)) = 220. The morale gain modifier is 1 - ((140-100) / (220 - 100)) = 0.667. Therefore, the formation will gain morale at 24 \* 0.667 = 16 points per year.

  

**Ship Commander Rank**

The required rank of a ship commander is set automatically by Aurora and will be the lowest race rank, unless one of the following component rules is activated. Component rules are not cumulative so only the highest requirement applies.

If a ship is greater than 1000 tons and has any of the following component, the required rank is lowest rank + 1: Weapons, survey sensors, a jump drive, a hangar deck.  
If a ship has any of the following component, the required rank is lowest rank + 1: Auxiliary Control, Science Department, Primary Flight Control.  
If a ship has any of the following component, the required rank is lowest rank + 2: Main Engineering, CIC, Flag Bridge.

The Class Window has a checkbox entitled Senior C.O. If this is checked, the class will have a required rank one higher than the above rules require (to allow the player to designate certain classes as worthy of a more senior officer than normal).

  

**Story Characters**

A commander can be flagged as a ‘Story Character’. A Story Character will not suffer accidents or ill health and will not be automatically retired. This could be abused for scientists ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:") but I will leave it up to players how they want to use this option.

You can also flag a commander as ‘Do Not Promote’. The commander will remain in his current rank and not undergo automatic promotion.

  

**Change Scientist Research Field**

There is a new option on the Commander window to change the research field of a scientist. Any field can be chosen, but the current research bonus is reduced by 75%.

This is the same effective rate at which a scientist can already operate in a different field. However, they will now start to gain experience in the new field.
