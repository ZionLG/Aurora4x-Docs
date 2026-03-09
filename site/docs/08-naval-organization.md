**Naval Organization**

Instead of the Task Forces and Task Groups in VB6 Aurora, C# Aurora takes an approach similar to the optional functionality of the VB6 Naval Organisation tab, albeit with much easier and more flexible UI. There are four primary components of Naval Organisation; Admin Commands, Fleets (VB6 Task Groups), Sub-Fleets and Ships. Every race starts with a single top level Admin Command (which can’t be deleted but can be renamed). All other Admin Commands descend in a tree from this one. You can only attach an Admin Command to another Admin Command but you can have an unlimited number of levels in the Admin Command hierarchy.

Fleets can only be attached to Admin Commands. Many fleets can be attached to the same Admin Command but each fleet can only be attached to one Admin Command

Sub-Fleets can only be attached to a Fleet, or to another sub-fleet. You can have an unlimited number of levels within the sub-fleet hierarchy. These are used to organise the ships within the larger fleets. Sub-fleets have no on-map function and all ships within the sub-fleet hierarchy move within the parent fleet. You can detach a sub-fleet, at which point it becomes a full fleet in its own right. Any sub-fleets further down the sub-fleet hierarchy become sub-fleets of this new fleet. A new ‘join as sub-fleet’ order is available. When one fleet joins another using this order, its ships will automatically form a sub-fleet within the joined fleet, allowing them to subsequently detach as a whole unit.

A Ship can be attached to a Fleet or to a sub-fleet. When attached to a sub-fleet, it is still a member of the parent Fleet at the top of the sub-fleet hierarchy.

The sidebar tree of the new Naval Organisation window (see Screenshots thread) has full drag and drop functionality so you can move Admin Commands, Fleets, Sub-Fleets and Ships around as long as the above rules are followed. You can also drag ships and sub-fleets between different fleets as long as they are in the same physical location. Entire sections of the tree can be moved with a single drag-drop. Also, you can open up multiple Fleet windows and drag and drop between the trees in two different windows.

  

**Admin Commands**

This post provides more details. Every race starts with a single top level Admin Command (which can’t be deleted but can be renamed). All other Admin Commands descend in a tree from this one. You can only attach an Admin Command to another Admin Command but you can have an unlimited number of levels in the Admin Command hierarchy. Fleets can only be attached to Admin Commands. Many fleets can be attached to the same Admin Command but each fleet can only be attached to one Admin Command.

An Admin Command can be created at a population with a Naval Headquarters (a new installation). Each level of a Naval Headquarters costs 1200 BP and can be moved with the same cargo requirement as a research facility. Naval Headquarters function in a similar way to Sector Commands, with each doubling of the level adding +1 to the command radius. For example, level 1 has a Radius of 1, level 2 has a radius of 2, level 4 has a radius of 3, level 8 has a radius of 4, etc.. The command radius of the Admin Command is based on the Naval Headquarters in which it is based (with modifications for certain types of Admin Command). A single Naval Headquarters can support multiple Admin Commands.

If a fleet is within the command radius of its parent Admin Command, each ship within the fleet gains benefits based on the type of command and the bonus of the commander assigned to the Admin Command. There are seven different types of Admin Command, with the following capabilities.

Naval: Provides 25% of the Admin Command commander bonus for Crew Training, Reaction, Engineering and Tactical. (For example, if the commander has a 20% Reaction Bonus, a 5% bonus would be provided).

Patrol: Provides 25% of the Admin Command commander bonus for Reaction and Engineering. This command type operates at twice the command radius of the parent naval headquarters.

Survey: Provides 25% of the Admin Command commander bonus for Survey and Engineering. This command type operates at twice the command radius of the parent naval headquarters.

Logistics: Provides 25% of the Admin Command commander bonus for Logistics (cargo load/unload speed) and 10% of the bonus for Mining (including Harvesting) and Terraforming.

Industrial: Provides 25% of the Admin Command commander bonus for Mining and Terraforming, plus 10% of the bonus for Logistics.

General: Provides 10% of the Admin Command commander bonus for Crew Training, Fleet Training, Reaction, Engineering, Tactical and Survey, plus 5% for Industrial and Logistics.

Training: Functions differently to the others. Fleet Training can only take place within the command radius of a Training Admin Command (see later rules post for details). The crew training rating of the Admin Command commander is used as the basis for the speed of training.

Each Admin Command also gains additional bonuses if it is within the command radius of its own parent command. For example, if a survey fleet is within the command radius of a Survey Admin Command it will provide 25% of the bonus of the commander of that Survey Admin Command. If that Survey Admin Command is within the command radius of a parent Survey Admin Command, that bonus would be multiplied by 25% of the parent admin command commander bonus. So if both Admin Commands each had a commander with a 30% survey bonus, the total provided bonus to ships in the command radius of the lower Admin Command would be 15.56% (1.075 \* 1.075). If a third layer existed above those two and that also had a commander with a 30% bonus, the overall bonus would rise to 24.23%.

This isn’t as easy to achieve as it might seem as each of these Admin Commands will need an assigned commander or the chain will be broken. Also each superior Admin Command requires a commander of higher rank than the inferior Admin Command and any Admin Command with fleets directly attached requires a higher rank than the highest-ranked ship captain in those fleets. If an Admin Command does not have a commander of sufficient rank, it will not provide bonuses. Therefore, large hierarchies are difficult to achieve. However, this does give meaningful commands for those higher ranked commanders that currently are used as the captains of major warships. It also means that if you establish the necessary command infrastructure required to support your fleets across your territory, it can have substantial benefits.

The required rank for each admin command is updated when the commander or naval organisation windows are loaded and during each construction phase. The check for the required level of commander is performed during each construction phase. If this check fails, the player will be notified and the admin command will be ineffective until the next construction phase.

Each increment, the command radius of all admin commands is checked so that all activity within that increment will use up-to-date information. This is dynamic during the turn, so the position of a ship or fleet at the moment it checks a bonus is used to determine the effect of the command network. The command hierarchy is checked each increment and whenever you modify that hierarchy so that you will always have up to date information on what rank is required for each Admin Command.

This command network is created using the new Admin Command tab on the Naval Organization window (see below). The Admin Commands are in green on the main structure chart. Each one is prefixed by the type abbreviation and suffixed by the required rank and current location. Selecting an Admin Command shows the systems within range and any Naval Headquarters in those systems. There is also a list of all Naval Headquarters within your Empire and a breakdown of the different Admin Command types. New commands can be created by selecting a parent Admin Command, a host population and an Admin Command Type. Fleets can be dragged and dropped between Admin Commands as desired. I will also add a movement order specifying a change in Admin Command.

None of this functionality has to be used as all new fleets will be assigned to the single, starting Admin Command. However, for those players who wish to set up their own command structures, I hope this will add an interesting extra dimension to the game. As with all these changes, I may modify things a little as a result of play testing but the essential principles should remain the same.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/f5b88a954f0af29b46f6bd3d1c263f4cf7f26110_2_690x430.jpeg)

image940×586 159 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/f5b88a954f0af29b46f6bd3d1c263f4cf7f26110.jpeg "image")

  

**Assignment of Ships to Populations**

In VB6 Aurora, ships such as terraformers or asteroid miners have to be assigned to populations in order to provide that population with any applicable production. This is because an empire may have multiple populations on the same world and the ships can only provide support to one of them. When a fleet reaches a population, the ships within it are automatically assigned. However, there are still situations (such as transferring between fleets) when this assignment is not always picked up. While the problem can easily be fixed by ordering the fleet to the population, it is not always obvious it needs to be fixed. This can lead to ships sitting idle in orbit.

In C# Aurora, the assignment to the population will be at the fleet level, rather than by ship, and the same auto-assignment will happen when a fleet moves to a population. However, when a population checks orbital space for any assigned fleets during production, it will automatically grab any unassigned fleets in orbit and assign them to itself. This should avoid any situations where ships remain idle.
