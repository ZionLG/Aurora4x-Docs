**v3.0.0 Bug Fixes**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/1)

*   Missile ECM requires electronic warfare as a pre-requisite.

*   Direct Fire research field abbreviation changed from EW to DF.

*   CIWS components now researched under direct-fire, not missiles.

*   For jump drives in the create project window, prevented the drive type changing back to military when a different size multiplier is selected.

*   Overhaul now possible at deep space location.

*   Missile fire controls of 50 tons or less correctly identified as military.

*   Scrap Ordnance button appears when a missile is selected.

*   Double-clicking Ground Unit Unload event will open the correct population on the GU/Stockpile tab.

*   Double-clicking Factory Restored event will open the correct population summary, or the GU/Stockpile tab for recovered components.

*   Fixed text in warning message for Ground Unit Series tab, when you try to rename without selecting a series.

*   Academy name themes will no longer ignore the checkbox state.

*   Planetary cargo shuttle capability added to ship capability before logistics bonuses are calculated (previously bonus was calculated only on ship capability).

*   Ruins Exploited events will open the correct population.

*   Fixed #3988 enumeration error. The trigger seems to be damaged NPR ships that leave their fleet and cannot find a new home.

*   Fixed #3822 null reference error (probably). If this appears, try changing POWs to Empire view rather than Population.

*   The game will only retain one year of mineral usage data in memory to avoid #3938 out of memory errors in long sessions.

*   The game will only retain one year of wealth usage data on save.

*   The terraforming capacity on the Environment tab of the Economics window includes the governor bonus.

*   The ‘Join Fleet and Begin Overhaul’ order will be available if you target a fleet in orbit of a population that has other fleets with maintenance modules, but no maintenance facilities of its own.

*   Fixed the #1558 error that occasionally appeared on system generation and was blocking the creation of Rakhas.

*   Fixed error in civilian shipping line logic that caused the building of many more freighters than colony ships

*   Improved loading speed of Galactic Map

*   Fixed error #883 caused by crew effects when NPRs capture ships

*   The Fleet Commander option has been removed from Assignments on the Commanders window.

*   Fixed the problems with the Galactic Map Full Screenshot. It works normally now every time.

*   Fixed a problem with conditional fuel orders being triggered for ships with zero fuel capacity.

*   Fixed a problem with conditional orders being triggered by ships in a hangar bay.

*   Fixed a few bugs that were preventing NPR carriers launching missile fighters.

*   Fixed a problem with shipyards not allowing the ‘Class Name Only’ theme.

*   Fixed single-weapon fire controls so you cannot assign more than one weapon.

*   Detecting explosions requires some form of passive detection capability (missile, ship or population) in the same system.

*   Fixed fuel storage mineral costs so they match wealth cost.

*   Fixed the bug that causes a towed shipyard to be detected as a new alien race

*   Deep Space Populations will no longer appear on the tactical map if they do not belong to the viewing race.

*   Tractoring a ship within a hangar will remove the link to the current mothership

*   Fixed #1951 error caused by the game re-using a ShipID from a destroyed ship for a new ship, then a race with an alien ship record for the destroyed ship encounters the new one.

*   CMC will no longer be created if orbital miners are present.

*   An orbital drop order will no longer also drop ground forces in non-drop bays.

*   Life pods will no longer be generated with 0 crew.

*   Removal of missile salvos with zero missiles has been updated to fix a few missing cases.

*   Population growth rate fixed for ark modules.

**v3.0.0 Minor Changes**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/1)

*   For Trade, Contracts and Standing Orders, fleets are checked from newest to oldest.

*   NPRs will eliminate any sensor buoys of neutral races they find in their territory.

*   TL6 ruins may appear occasionally. The max research cost of a ruin technology is equal to 2^(TL +1) \* 1000.

*   Development cost for a component will never be lower than the build cost, regardless of research speed.

*   The tails of comets heading outward in their orbits will face toward the star.

*   15cm Meson and High Power Microwave changed from 200 tons to 250 tons (as 12cm is also 200 tons).

*   Recharge weapons moved before movement in the sequence of play, so that fast-firing weapons cannot be used for both point defence and attack in the same increment.

*   Ships suffering from jump shock will have a J in the status column of the ship list on the Naval Organisation window.

*   Ground Geological Survey Complete is now an interrupt event.

*   Prototype components will be shown in cyan on the class design window.

*   Added an ‘All Minerals Exhausted’ interrupt event.

*   Added ‘Centre on Map’ option for double-clicking ships on the Class Design window.

*   Reduced Laser Size 75% and 50% are now starting systems and do not need research.

*   Double-clicking a research project will change the research field dropdown box to the same research field as the selected project.

*   Electronic hardening no longer increases cost .

*   New Alien Ship event split into four events for hostile, neutral, friendly and allied ships.

*   Crew Quarter components in a ship will be shown in orange if the crew design efficiency is lower than current racial technology

*   Added ctrl-F as a shortcut for System Search on the Galactic Map

*   System Bodies checkbox on Naval Organisation window will display population system body for fleet location and for movement complete events.

*   Shield strength increases (after initial contact) no longer generate events. Decreases will still generate events.

*   Added Egyptian Rank Theme

*   Added WH40K naming themes for infantry regiments, armour regiments, space marine chapters and titan legions

*   Split Civilian Mining Colony event into two, with a separate update event for expansion rather than creation or disbanding.

*   Using ctrl-C on the Naval Organization treeview will copy the name of the selected ship, fleet, naval admin, etc. to the clipboard.

*   Minor Races will generally be higher tech than in the past.

**Ground Support Fighters Removed**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/1)

The concept of ground support by fighters or other small craft has been entirely removed from the game.

There are no longer any orders for fighter-based missions, such as flak suppression and search and destroy. Fighter pods have been removed from research and from missile design.

Orbital bombardment support is unaffected.

New options will be added in future versions for ‘ground units’ to provide close air support.

**Civilian Contract Standing Order**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/1)

A new ‘Civilian Contract’ standing order has been added for v3.0.

A fleet with this standing order will seek out civilian contracts to fulfil. The contract fulfilment will function exactly as if a civilian ship took the contract, with three exceptions:

*   There is no contract payment

*   The fleet will use fuel while fulfilling the contract

*   The fleet will refuel at the destination if that destination has the ‘Destination for Automated Refuel’ checkbox ticked.

**Load All Ship Components**

[Source: Aurora forum, post 1](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/1)

Load All Ship Components is a new fleet order.

This order will load as many ship components as possible from a destination population, in descending order of component size.

**Dynamic Lagrange Point Orders**

[Source: Aurora forum, post 2](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/2)

The ‘Auto-Include Lagrange Points’ checkbox on the Fleet movement orders tab of the Naval Organization window has been replaced by the following radio buttons:

### Manual LP
Fleet orders will ignore Lagrange Points, unless the order is manually plotted. This is the same as leaving the existing option unchecked.

### Plotted LP
Any fleet orders created for this fleet will check for Lagrange points at the time of order creation. This is the same as checking the existing option.

### Dynamic LP
The fleet will check the first order in its order list to determine if the destination can be reached more quickly via a Lagrange Point. This check will happen when an order is assigned to a fleet with no orders, or at the end of any sub-pulse in which an order is completed and orders still remain to be executed.

The dynamic option means that the fleet will be taking into account the position of Lagrange Points in its current system when an order is being executed, rather than when it is originally plotted. It is not perfect, as a fleet can complete an order and begin a second during a sub-pulse, before that second order is checked at the end of the sub-pulse, but this will generally be a matter of a few minutes or hours, compared to orders plotted days, weeks or months earlier.

**Using Buoys in Alien-Controlled Space**

[Source: Aurora forum, post 3](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/3)

In v2.7.1 and earlier, the AI will tolerate the presence of sensor buoys from neutral races. That changes in v3.0

Any sensor buoy belonging to a neutral race will be eliminated by the AI if detected within what it regards as its territory. This follows the same mechanics as eliminating hostile buoys in any system.

The tonnage of detected sensor buoys will be included for the purposes of affecting diplomatic relations in a given system, with the existing minimum of 1000 tons. So a single sensor buoy will count as a 1000 ton ship if there are no other detected assets in the system.

As an alien race cannot directly contact a sensor buoy, if there are no other player assets in the same system and communications have been established, it will instead send a message to a detected population or ship in a different system to register a protest about the buoy. If there are no detected populations or ships in other systems, or communication have not been established, there will be no warning that relations are deteriorating.

**Lost Colonies**

[Source: Aurora forum, post 4](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/4)

v3.0 adds a new starting option called Lost Colonies.

During a jump point exploration when the following conditions are true, there is a chance that a lost colony of the exploring race will be found:

*   The Lost Colonies option is active.

*   A new system is generated.

*   The exploring race is a player race.

*   The check for an NPR to be generated on a system body is passed.

*   The NPR that would be generated is a minor race, industrial or pre-industrial.

*   The body is suitable for the starting species of the exploring race.

If all of the above is true, there is a 40% chance that a lost colony will be discovered. It could be Trans-Newtonian, industrial or pre-industrial, depending on the original NPR generation check, and on average about 25% smaller than an equivalent NPR population of the same type.

Note that this is a different option than the existing ‘Human NPRs’ option, which allows for all types of NPRs, including multi-system, to be based on the human species (1/3rd chance if the environment allows). Either option can be used in a game or both in the same game. In general, ‘lost colonies’ represent populations that did not possess or maintain the necessary logistical infrastructure to support an active military or to declare and defend their independence. They welcome the return of their parent civilization.

None of the lost colonies will have any military forces, either in space or on the ground, nor any of the supporting military infrastructure, such as shipyards, fuel refineries, maintenance facilities, military academies, etc.. The Trans-Newtonian version will have about half of the construction factories, mines, financial centres expected for the population size, a small number of research facilities and tracking stations, probably one or two ground force construction facilities and a spaceport. Industrial lost colonies will have conventional industry, a tracking station and perhaps a spaceport. Pre-industrial will have nothing but the population itself.

If both the Human NPRs and Lost Colonies options are active in the same game, the former represents those colonies that became independent and forged their own path. They might not be hostile, but neither are they willing to give up their sovereignty. Human NPRs will be checked after the check for Lost Colonies.

**Repeat Shipyard Tasks**

[Source: Aurora forum, post 5](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/5)

For v3.0, any sort of shipyard task, except auto-refit, can be set to repeat a fixed number of times.

A small text entry field has been added to the right of the Create Task button on the Shipyards tab of the Economics window. This defaults to “1”.

If a task is created with a repeat number greater than 1, the following happens after the completion of the task:

*   Construction. Another ship of the same type is laid down, using the same parameters as the original task. A name will be generated from the class theme..

*   Refit. Another ship of the same original class will be refitted to the same target class. This functions the same as auto-refit but with a fixed amount of tasks.

*   Scrap. Another ship of the same class will be scrapped.

*   Repair. Another damaged ship of the same class will be repaired.

For all tasks except construction, the repeat task will be abandoned if a suitable ship is not available. Any task that uses alien components will only be repeated if the required components are available. Events will be generated to notify the player in both cases. The ‘Use Components’ flag will be carried forward for construction and refit tasks.

On the SY Tasks tab, any repeating tasks (with a repeat number greater than 1), will have the number of tasks displayed as part of the task description. As each repeat task is completed, the number will be decremented by 1. The Completion Date column is based on the total time required for all ships in the task.

**Light Naval Shipyards**

[Source: Aurora forum, post 6](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/6)

The Light Naval Shipyard is a fourth type of shipyard (after Naval, Commercial and Repair). It is displayed with an L designation.

The Light Naval Shipyard can be built in the same way (and for the same cost) as a Naval Shipyard. It functions as a Naval Shipyard, except for the following differences:

*   The capacity per slipway is fixed at 1000 tons and cannot be increased through upgrades (or via SM).

*   The only upgrade options available are Add Slipway and SM Modification.

*   Any ship of 1000 tons of less can be built or refitted without the need for retooling

*   There is no size restriction for refitting, so you can refit any 1000-ton or less ship to any other. The cost for size difference still applies.

**Fighter and FAC Updates**

[Source: Aurora forum, post 7](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/7)

The differences between fighters and FACs are being removed from the game in terms of mechanics, although they will likely persist in terminology.

The 500-ton limit for ships that can interact directly with a planetary surface is raised to 1000 tons.

Fighter Factories are renamed as Light Naval Factories. They can build any ship of 1000 tons or less. In effect, they are a ground-based version of Light Naval Shipyards.

The Fighter Combat bonus (which didn’t really do anything) has been removed.

Any ship of 1000 tons or less in size will use the full bonus values of its commander. Ships greater than 1000 tons will continue to use the existing mechanics where they only receive half of the following bonuses from the ship commander: Crew Training, Survey, Engineering, Tactical, Carrier Ops, Ground Support.

Ship commanders of light naval units (a combined designation for FACs and Fighters) will be assigned based on their Light Tactical bonus (see below), rather than the defunct Fighter Combat bonus.

**Light Tactical Bonus**

[Source: Aurora forum, post 8](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/8)

v3.0 has a new commander bonus called ‘Light Tactical’.

This functions in the same way as the Tactical Bonus (boosting chance to hit), but it only affects Light Naval units (1000 tons or less). The existing Tactical bonus will not affect Light Naval units.

The Tactical Bonus is for commanders of larger warships (half effect) and tactical officers (full effect), while Light Tactical is for the commanders (full effect) of Light Naval units.

Commanders of Light Naval units will be assigned based on their Light Tactical bonus. When they gain experience, it will be weighted toward Light Tactical in the same way that commanders of larger warships have their experience weighted toward Crew Training.

The chance of a newly generated commander having a Light Tactical bonus is double that of a Tactical Bonus. It has the same initial generation chance as Survey.

**Alien Artifact Changes**

[Source: Aurora forum, post 9](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/9)

### Artifact Stockpile
Alien Artifacts are no longer a trade good and will no longer be traded by civilians. Instead, any alien artifacts recovered from ruins, or the artifact reserve, will be held directly at the population.

They are displayed near the top of the third column, below any construct or ruins and above the capability Yes/No section.

### Alien Artifact Reserve
In v2.7.1, when all items have been recovered from a ruin, the ruin is removed and plays no further part in the game.

For v3.0, the ruin will still be removed but it will leave behind an ‘alien artifact reserve’. This represents the scattered minor artifacts that were not detected by the main survey. The number of alien artifacts in the reserve will be random, anything from a few hundred to tens of thousands, but that number will be heavily influenced by the size and scope of the original ruin. The size of the reserve is not known to the player, but it can be inferred from the rate of recovery.

Construction units can continue to search for these artifacts after the ruin is removed. They follow the normal recovery check process, followed by a second check with a percentage success chance equal to: artifact reserve / 50000.

If this second check is successful, a number of alien artifacts equal to four rolls of D50 (4 - 200) will be recovered and the reserve will be reduced by this amount. Over time, the remaining artifacts will become harder to find.

Construction units will be more effective working on unexploited ruins, but this provides a potential use for those units when no other tasks are available. The recovery of artifacts also becomes more important due to the changes in Xenoarchaeology (see next post).

**Xenoarchaeology Update**

[Source: Aurora forum, post 10](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/10)

Xenoarchaeology units gain some new abilities in v3.0. They are able to generate research points from ancient constructs and ancient artifacts.

As in v2.7.1, a Medium Vehicle with 2 XEN components (218 tons) has 1 Xenoarchaeology Point (XP). The cost for that vehicle is 8.72 Wealth and 8.72 Vendarite.

### Constructs
*   Each XP in a ground unit formation will produce a baseline 1 Research Point (RP) per year. This output is modified by game research speed, (Race Research Rate / 200) and by any penalty due to radiation.

*   Each construction phase, the RP output from all the XEN units at a population on a body with an surveyed ancient construct is assigned to an accruing total.

*   After the accrual, there is a 10% chance that all accrued points will be assigned to a random background tech system from the same field as the construct that is currently available to the parent race. The accrued total is then reset to zero.

*   The maximum annual XP conversion into RP for any given construct is equal to: Race Research Rate \* Construct Bonus \* 20. So a construct with a 50% bonus combined with a 240 RP racial research rate would result in a maximum of 2400 RP.

*   The XEN units benefit from the Xenoarchaeology bonus of the formation commander, but not from the bonus of the construct. The construct bonus affects the maximum output instead.

*   The construct will have to be surveyed before it can used for XP to RP conversion.

*   XP from XEN units do not accumulate if unused.

*   The current and maximum XP conversion is shown on the Economics Summary tab just under the construct line.

The first table below shows the output of a single research facility, based on the bonus of the scientist and the bonus of the construct - assuming the research field of the scientist matches that of the construct. The base research rate is 200.

The second table shows the highlighted research point outputs, along with the build point (BP) and size (tons) of the XEN units required to match that RP output, based on 0%, 20% and 40% commander bonuses.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/58239b4bbfa0569fb68e4adad18609ad09721cae.png)

In general, it is much more expensive to build the XEN than the research facility. Even so, there are situations where the XEN are a better option.

*   There are a few marginal cases (low bonus construct and low bonus scientist vs high bonus XEN) where the XEN formation is cheaper than the research facility.

*   The XEN are ideal for ‘No Background Research’ empires. Although in that case, it is harder to increase background research so they will become less effective in BP terms vs RF as the game progresses.

*   The XEN can be used on hostile worlds

*   The XEN can make use of constructs with duplicate research fields but lower bonuses, that are not ideal for Research Facilities.

*   The XEN do not require population, so they can be deployed earlier to gain some use from constructs while a colony is being established

*   The XEN are built with Vendarite, not Duranium and Mercassium, so they can be used as a more expensive alternative if those minerals are in short supply

*   On the downside, the XEN will have to built instead of other ground units, leading to a loss of capability in other areas, and they have a maintenance cost. More GFCC will help, but at some point Vendarite will become a problem.

### Alien Artifacts
*   If XEN units do not use all of their XP (because there is no construct or they are limited in their conversion to RP), they may use that excess XP to convert alien artifacts at ruin sites into RP instead.

*   XEN units that are studying a dormant construct in an attempt to activate it cannot convert artifacts during the same increment.

*   Each population has a new checkbox on the Miscellaneous tab of the Economics window entitled ‘Construct is Xenoarchaeology Priority’. This is checked by default. Unchecking this box means that if artifacts are available, the Xenoarchaeology units will prioritise artifact conversion in preference to construct research, or activating the construct.

*   Each XP in a ground unit formation will produce a baseline 2 Research Point (RP) per year when converting artifacts. This output is modified by game research speed, (Race Research Rate / 200) and by any penalty due to radiation.

*   Each RP created by this conversion requires the consumption of 1 alien artifact.

*   Each construction phase, the RP output from all the XEN units at a population with available artifacts is assigned to an accruing total. This is separate to the construct accrual.

*   After the accrual, there is a 20% chance that all accrued points will be assigned to a random background tech system from any field that is currently available to the parent race and is within the development cost limitation of the original ruin race. The accrued total for artifacts is then reset to zero.

*   The development cost limitation has the following formula: (2 ^ (Ruin Level + 1)) \* 1000

*   There is no maximum conversion amount as the artifacts are a limited resource.

*   The research production rate is higher for artifacts because they are physical examples of technology, they are a limited resource, the results are extremely random and engineer units are required to locate the artifacts.

*   The XEN units benefit from the Xenoarchaeology bonus of the formation commander.

Ultimately, the new XEN abilities will be useful for all Empires in certain situations, and vital for No Background Research Empires, but will remain less useful overall than research facilities due to their higher cost, deployment constraints and lack of directed research.

**Engineering Projects**

[Source: Aurora forum, post 11](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/11)

Engineering Projects are an alternative way to develop race-designed components, rather than using research facilities.

On the Industry tab of the Economics window, a sixth project type called “Engineering Projects” has been added to the project type dropdown. Selecting this will display a list of race-designed components that have yet to be researched.

These “Engineering Project” components can be selected and constructed in the same way as researched components, with the following differences.

*   The build cost of the component will be twice the development cost

*   The mineral requirements will be scaled accordingly to match the build cost

*   The project will be built by construction factories

*   Only one component will be constructed

For example, assume a newly-designed component is 20 BP, using 10 Duranium and 10 Gallicite, with a development cost of 200. The Engineering Project cost will be 400 BP, using 200 Duranium and 200 Gallicite.

Once this first component is completed, it will appear in the population stockpile. That component will be classed as ‘researched’ and becomes available to build normally.

Engineering Projects simulate an engineering-led, trial-and-error process to develop new components, rather than using research facilities to perfect the build process. It can be used by any empire, but is particularly important for empires that have no normal research capability.

**No Research Projects**

[Source: Aurora forum, post 12](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/12)

v3.0 adds a new option during Race Creation called ‘No Research Projects’

This option represents a stagnant empire that is either incapable of advancing its general level of technology, or is unwilling to do so for political, societal or religious reasons. An example is the WH40k Imperium of Man. This option creates the following restrictions for this race:

*   Research projects cannot be created.

*   Research facilities cannot be constructed.

*   The number of starting research facilities is reduced to 0.

*   Academies do not create scientists.

*   New components must be developed using Engineering Projects (see Engineering Projects post).

*   New ordnance must be developed using Ordnance Projects (see Ordnance Projects post).

*   Research facilities gained from captured populations cannot be used.

*   There are no warnings for inactive research facilities.

*   Ruins will yield a ground force construction complex if a research facility is rolled.

*   All technology can still be researched using the Instant button - either with Starting Tech Points or in SM mode.

*   Components can only be disassembled at a colony with at least ten million population.

*   Tech data can only be downloaded to a colony with at least ten million population.

Despite the restrictions above, there are a variety of ways in which new technology can be acquired, including:

*   Technical data can be directly recovered from ruins.

*   Xenoarchaeology units can discover technical information from ancient constructs (see Xenoarchaeology Update post).

*   Xenoarchaeology units can discover technical information from alien artifacts (see Xenoarchaeology Update post).

*   Wrecks may provide instant research points upon being salvaged

*   Components from wrecks, ruins or captured ships can be disassembled.

*   Conquered Populations may yield research data

*   ELINT modules can gain technical information from alien populations

*   Friendly alien races may provide technical information.

This option is not suitable for a ‘turtle’ approach, as a race without an inherent ability to develop new technology has to explore and find ways to advance its tech base, before alien Empires advance too far beyond it.

**Mass STO Target Type Reassignment**

[Source: Aurora forum, post 13](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/13)

There are six new buttons on the STO Targeting tab of the Ground Forces window. If you select an STO element and click a button, they will copy the ‘_target type_’ and ‘_weapon selected per target_’ parameters of the selected element to other STO elements, based on the following criteria:

*   Copy Pop: All STO Elements at the same population.
*   Copy System: All STO Elements in the same system.
*   Copy All: All STO Elements in the empire.
*   Copy Type Pop: All STO Elements at the same population with the same unit class.
*   Copy Type Sys: All STO Elements in the same system with the same unit class.
*   Copy Type All: All STO Elements in the empire with the same unit class.

**Orbital Bombardment Support Update**

[Source: Aurora forum, post 14](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/14)

In v2.7.1, during ground combat, ships in orbit may provide fire support to friendly forces on the surface. This requires the friendly formation to have one Forward Fire Direction component for each ship providing support. The supporting ships fire once per ground combat phase.

in v3.0, the mechanics are identical, except for the following two changes:

1.  The supporting ships will fire four times per ground combat phase, which quadruples the effect of orbital bombardment support. They will check for weapon failure each time they fire and will cease firing if a weapon fails and cannot be repaired.

2.  If there are more ships in support than Forward Fire Direction components in the supported formation, the ships will still fire but their chance to hit will be multipled by: Number of FFD Components / Number of Firing Ships

**'Narrow Text' Class Summary**

[Source: Aurora forum, post 15](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/15)

v3.0 adds a new ‘Narrow Text’ option on the Class Design window that allows you to view (or copy) a more compact class summary, where the text width is narrower than the standard summary. This is primarily intended for copy and paste into campaign reports or forums posts where text width is a constraint.

The ‘Narrow Text’ option does not change the names of components, so components with particularly long names will render this option less effective.

Below is a comparison between the normal view and the ‘narrow text’ view.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b3f735e0e164082a5dd87fe0d0e71bc3ab784ef2.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3f5a8bc321bfcc88f9e7face17cb8fd4aa874401.png)

**Estimated Future Temperature**

[Source: Aurora forum, post 16](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/16)

I’ve added two new lines to the atmosphere data on the Environment tab of the Economics window.

*   Estimated Temperature with Aestusium added for one year at the current rate.
*   Estimated Temperature with Frigusium added for one year at the current rate.

I’ve also added the Dominant Terrain above the colony cost on the Environment tab.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b0208ffba772589bb472deb1f4fb8dfa4ddef819.png)

**Ground Forces Window Update**

[Source: Aurora forum, post 18](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/18)

I’ve added Delete Hierarchy and Scrap Hierarchy buttons to the Ground Forces window.

If you select a formation and use either button, you will receive a warning. If you click Yes, the selected formation and every other formation in its hierarchy will be deleted or scrapped, depending on the button selected.

You can also select a population and use the same buttons to delete or scrap all formations at that population.

I’ve also replaced the element sort buttons with radio buttons.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/3de409a5ab75817b6b513382fb4ebacd6dbe7163.png)

**Aether Gate Detection and Prevention**

[Source: Aurora forum, post 19](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/19)

Two new technologies are available in v3.0

*   Aether Gate Detection. 10,000 RP
*   Aether Gate Prevention. 25,000 RP

These technologies cannot be researched normally. Instead, progress toward these technologies is gained by capturing raider ships, salvaging raider wrecks and recovering the tech from ruins.

When a raider wreck is salvaged, there is a chance that technical data between 1% and 20% of the total research points required for the respective technologies will be recovered. The chance of recovery is 20% for detection technology and 8% for prevention technology

When a raider ship is captured, there is a chance that technical data between 1% and 20% of the total research points required for the respective technologies will be recovered. The chance of recovery is 25% for detection technology and 10% for prevention technology

Technical data may also be recovered from ruins, in the same way as an other ruin-only technology.

### Aether Gate Monitoring Station
Once Aether Gate Detection technology is available, the Aether Gate Monitoring Station may be constructed. This has a build cost of 3600 BP, requiring 1200 Corbomite and 2400 Uridium. It has a transport requirement of forty standard cargo holds, the same as a spaceport.

If an Aether Gate forms in a system with a monitoring station, the owning race is notified and the Aether Gate will be displayed on the tactical map, similar to a jump point but in Crimson.

Once Aether Gate Prevention has been researched, Aether Gates will be unable to form in any system with an Aether Gate Monitoring Station.

**Summary Highlighting for Obsolete Components**

[Source: Aurora forum, post 20](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/20)

In v2.7.1, obsolete components are highlighted in orange on the class component treeview, while alien components are highlighted in red.

For v3.0. those highlights will also apply to the component summary section, such as Propulsion, or Combat - Beam, so you can see the affected sections without having to open every summary node.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9449e75e0153fbf8886706fa3dbb62034d277e40.png)

**Class Summary to Clipboard**

[Source: Aurora forum, post 21](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/21)

With the move to the new Discourse forums, everyone is re-learning how to post content. One of the initial challenges for me was finding the best way to post class summaries. Simply selecting with a mouse and pasting into the topic text will result in Discourse converting each line into a paragraph. That can be overcome by using Shift-Enter to format the lines, but that is a very messy option.

Instead, I have started to post screenshots of the summary, using the Windows snipping tool. That is a lot easier than the old forums because you can past directly into the topic body, but sometimes the text in consecutive summary screenshots doesn’t always line up exactly.

So I have added a new button on the Class window called Summary image. Clicking the button takes a screenshot of the class summary, removing any excess open space to the right and below, and puts that screenshot on the Windows clipboard. Then you select a space in your text on Discourse (or anywhere else) and press ctrl-V. Like this…

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/93c4da1dad434ebad91cde8e574f080bb95c27fe.png)

There are two checkbox options, which allow you to remove the classification text at the bottom (missile to hit… and this design is classed as…) and to change the screenshot to the same colours as the default forum colours. Like this…

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/bcf3e883376ab1742effbf1817ff8efdde3512f7.png)

So with v3.0, posting class summaries is as simple as click a button in Aurora, then press ctrl-V in Discourse.

In addition to the screenshot generation, I have added a small 4 pixel margin to the left side of the summary display, to make it clearer in both normal usage of the class window and for summary images.

**New Hull Numbers**

[Source: Aurora forum, post 22](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/22)

Any ship moving to a new race, through capture, surrender or transfer, will be assigned a new hull number appropriate to that hull type for the receiving race.

**Communications Update**

[Source: Aurora forum, post 23](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/23)

For Race A to attempt communication with Race B, at least one of the following must be true

1.  Both sides have a status of “Attempting Communication” and both sides are able to detect each other in the same system. See [Diplomacy](https://aurora4x.com/t/aurora-v1-0-0-launch-documentation/40/35) for details.

2.  Race A has prisoners of Race B.

Each construction phase, if either of the above is true, a check is made to determine the ‘Contact Rating’.

*   If you have a mutual contact involving a diplomacy ship, with a commander who has a communication bonus, the Contact Rating is 1 + Bonus. So 30% Bonus results in a 1.3 Contact Rating.
*   If you have a mutual contact involving a diplomacy ship, but the commander does not have a communication bonus, the Contact Rating is 1.
*   If you have a mutual contact without a diplomacy ship, the Contact Rating is 0.5.
*   If there is no mutual contact, the Contact Rating is 0.
*   If there are any processed prisoners and the contact rating is less than 1, the Contact Rating is increased by processed prisoners / 200, to a maximum of 1.

A Communication Attempt Roll (CAR) is made from 1-100. This is modified by the average translation skill of the two races involved and the Communications Modifier (CM). The CM starts at 0 when an alien race is first detected.

If the CAR is 100 or greater, full communication is established. Otherwise, a varying amount is add to, or subtracted from, the Communications Modifier, depending on the results of the CAR. This updated CM will be used for future communication attempts. The results are as follows:

| Comm Roll | CM Addition |
| --- | --- |
| 91 - 99 | 10 x Contact Rating |
| 81 - 90 | 5 x Contact Rating |
| 71 - 80 | 3 x Contact Rating |
| 51 - 70 | 2 x Contact Rating |
| 26 - 50 | 1 x Contact Rating |
| 1 - 25 | \-1 x Contact Rating |
| \-24 to 0 | \-2 x Contact Rating |
| \-49 to -25 | \-3 x Contact Rating |
| <= -50 | \-500 |

The result of the communication attempt is reported to the player based on the update to the Communication Modifier

| CM Change | Event Text |
| --- | --- |
| \>= 10 | Significant progress |
| \>= 5 | Moderate progress |
| \>= 3 | Minor progress |
| \>= 2 | Limited progress |
| \>= 1 | Minimal progress |
| \>= 0 | Glacial progress |
| \>= -1 | No progress. The contact team is struggling to make a breakthrough. |
| \>= -2 | No progress. The contact team has begun to consider that communication may prove impossible. |
| \>= -3 | No progress. The contact team is advising that communication may prove impossible. |
| < -3 | Communication impossible. The contact team believe the race is too alien for communication to ever be established. |

In v2.7.1, prisoners would not be processed unless communications had been established.

In v3.0, populations will process prisoners without comms being established, if less than 200 have already been processed.

_Note: The basic principles of communication remain unchanged from v1.00. v3.0 introduces the use of prisoners to establish communication and more informative reporting of progress._

**Senior Ship Commanders**

[Source: Aurora forum, post 24](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/24)

V2.7.1 has a Senior CO checkbox on the Class Design window. Checking that box allows you to set a class design to require a commander one rank higher than would normally be the case. That required class rank then determines the required ranks of any junior officers.

For v3.0, I have added a Ship Senior CO checkbox that applies only to a single ship. That ship will be assigned a commander one rank higher than normal for the class, allowing you to designate a flagship for a fleet or sub-fleet. This is addition to any senior CO flag for the class. You can do this for as many ships as desired, although having multiple Ship Senior COs in the same fleet would make it more difficult to ensure a particular ship is the flagship.

The junior officers will still be assigned using the required rank for the class. For example, if you have a ship class with a Captain as the CO, the executive officer will be a Commander. If that ship is selected for a Senior CO, the exec will still be a Commander, even if the CO is now a Commodore. This is to maintain consistency of rank and prevent a lot of changes every time a different ship is assigned as the flagship.

For example, the Formidable class battleship is normally commanded by a Captain. In this case, HMS Victorious will be commanded by a Commodore.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/932030f538c77c5a619dc8b9d819a93545c74578.png)

Because the ship is commanded by an officer one rank higher, it will always be the flagship (assuming no higher-ranked ships are present)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/16ffab430d3f38615fb08d5c38de503bc098158d.png)

Automated assignment will treat the ship accordingly, as will manual commander assignment.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/31a59b9a287a01c5f2129ef57434ddfa95eab9db.png)

I’ve added a Promote CO button to the Miscellaneous tab, so you can keep the same CO if required.

I’ve also added a Replace CO button, which will unassign the current CO then carry out automated assignment for the ship. It is possible this might result in the previous CO being promoted and reassigned.

**Civilian Mining Summary**

[Source: Aurora forum, post 25](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/25)

The Economics window has a new tab called CMC. This lists all systems with the necessary bodies and mineral deposits to support at least one civilian mining colony.

The data includes:

*   System: Name of the system
*   Alien: The name of any alien race flagged as controlling the system
*   Max Pop: The largest population (as 10m is required for CMC to be created)
*   Active: Number of bodies with a current CMC
*   Available: Number of bodies without a CMC that could support one
*   Blocked: Number of bodies that would support a CMC but cannot (banned, existing pop, etc.)
*   Income: Wealth earned from CMC taxation
*   Expenditure: Wealth paid for minerals from CMC

The table can be sorted by Name, Active, Available, Income and Expenditure.

As well as providing a summary of current civilian mining operations, the tab also provides the necessary data to determine the best systems to place colonies to trigger CMC creation

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/5d4e48a5bbdd590c426aa9e35cae8d12c2de7c13.png)

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/79389c0d0826a0aa4fef1e5142a5d24b4ecf1efb.png)

**Ordnance Series**

[Source: Aurora forum, post 26](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/26)

Ordnance Series is similar in concept to Unit Series. You specify a connected group of missiles, or other ordnance, along with the priority of each one. When a ship tries to load its normal ordnance loadout and cannot, it will look instead for lower priority ordnance in the same series.

Ordnance Series are created on a new tab in the Class Design window by clicking the Create Series button. They can be renamed or deleted. The top item of ordnance in the series is the highest priority, with the others shown in descending priority.

Three sections are shown on the new tab. The left-hand section contains a treeview of existing ordnance series. The centre section contains a list of ordnance available to the viewing race that has not been assigned to a series. This can be filtered by removing obsolete ordnance, or by showing all ordnance, regardless of series assignment. Clicking on an item of ordnance in the centre section will display the details of that item in the right-hand section.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c21cb16bcbee250b0d2c4d44c2a1f4d70b02297b.png)

To assign ordnance to a series, drag and drop any ordnance item to that series.

*   Dragging an item to the name of the series will place the item at the top of the priority list.
*   Dragging an item to an existing item in the list will place the new item just below the existing item.
*   You can drag an item from the centre section, or from another series.
*   You can drag items within a series to change priority.
*   An item can only be in one series at once, so dragging an item from an existing series to a new one will remove it from the old one.

Clicking an item of ordnance in a series and clicking the Replace Lower button will check every class loadout for any lower item in the same series and replace it with the selected item. There is a waning popup before this executes. For example, if you clicked Theseus II-E and clicked Replace Lower, any class that currently has Theseus or Theseus II missiles in its standard loadout will replace those missiles in the standard loadout with the Theseus II-E, consolidating any duplicates. Note this is only changing class templates, not missiles loaded into magazines.

When a ship tries to load ordnance, through movement orders, loading from a mothership or loading from a collier in the fleet, it will cycle through the ordnance in the class default (or the ship default if an override is in place). For each item, it will try to load the specified item first. if that is unavailable, it will work through the other items in the same ordnance series that have a lower priority, in descending order of priority, to see if they can be loaded instead.

A ship will not load a higher priority item, even if it is in the same series as a standard loadout item that is not available. This allows you to control which ships will have access to each item in an ordnance series.

**Manual Jump Point Connections**

[Source: Aurora forum, post 27](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/27)

v3.0 adds the option to modify jump point connections while in Spacemaster mode.

Two new buttons, Break Link and Connect JP, have been added to the System View window when in SM mode.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/4ca5e430b398bce841f4115f98caf369bf8135f9.png)

Break Link will disconnect both ends of a jump point

Connect JP will launch a small popup box to select from a list of destination jump points. Once selected, the two jump points are linked.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/2fa1ff5ec610b089cfb2e9eebdae282800b2e201.png)

Only jump points without an existing link can be connected, although you can break the link first and then connect it. You cannot connect a jump point if there are no other unlinked jump points.

Once the connection is made, the viewing race will see both ends as explored.

**Empire Logistics Summary**

[Source: Aurora forum, post 28](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/28)

v3.0 introduces a new tab on the Economics window that summarises the maintenance and fuel situation for all colonies. For each colony, the following information is displayed

*   M-CAP: Maintenance capacity (surface only)
*   M-CIO: Maintenance capacity including orbital
*   M-TONS: Total maintained tonnage in orbit
*   M-YEAR: The amount of MSP required per year by the maintained tonnage
*   M-MSP: The current population stockpile of MSP
*   M-PROD: Amount of MSP produced per year
*   F-MLT: Fuel stockpile in millions of litres
*   F-PRDM: Annual fuel production in millions of litres
*   REF: You can refuel at the colony, or transfer fuel to the colony
*   RES: You can resupply at the colony, or transfer MSP to the colony
*   ORD: You can reload at the colony, or transfer ordnance to the colony

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/9436d99f820b46828b5ae8c90c2e22be6163d039.png)

If the M-TONS value is orange, there is more tonnage in orbit than can be maintained by the current M-CIO value.

If the M-PROD or F-PRDM values are red, the population has maintenance or fuel production (respectively) turned off.

If the M-PROD value is orange, the M-YEAR value exceeds the M-PROD

There are eight radio buttons at the bottom that allow you to sort by each of the quantity columns.

**Ship Selection Summary**

[Source: Aurora forum, post 29](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/29)

On the Ship List tab, within the Fleet tab, on the Naval Organization window, I’ve added a summary line at the bottom for the ships currently selected. This is to make it easier to select the correct number of ship within large groups.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/7f97d650c8f14302fa6630eadb7fa5ca188ac31d.png)

**Lagrange Point Update**

[Source: Aurora forum, post 30](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/30)

Lagrange Points are now permanent locations, like system bodies.

This means that any fleet, wreck, missile salvo, waypoint or deep space population located at a Lagrange Point will remain at that Lagrange Point as it moves along its orbital path.

**Configurable Interrupts**

[Source: Aurora forum, post 31](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/31)

There are two new buttons and a checkbox on the Events window.

### Toggle Interrupt Button
This works in a similar way to Hide Event. You click on an event and click the ‘Toggle Interrupt’ button. The selected type of event will change its interrupt status from on to off or vice versa.

So if you no longer want ‘Research Completed’ or ‘Ship Combat - Energy’ to stop automated turns, you can turn off that interrupt. If you want ‘Commander Promoted’ or ‘Maintenance Problem’ to stop automated turns, you can turn that event into an interrupt event.

### Default Interrupts Button
This button will change the interrupt status of all event types to their default setting.

### Show Interrupts Checkbox
When this checkbox is checked, any type of event that generates an interrupt will show (I) before the event name.

### Save Behaviour
When you change the interrupt status of an event, or restore events to their default state, that change will immediately be reflected in the database. Changes will apply to all player races and all games in the same database.

_I’ve used this particular save behaviour to avoid any form of catastrophic error wiping out the events table and corrupting the database. For tables like ship or system body, I remove all the data in the table, then save the data from the game. Any serious error affects only that game. Events is a static table with data that applies to every game, so in this case I am just changing a single 0/1 value in a row and doing it immediately._

_I have been considering this change for a while, but was prompted into action by clicking through ten minutes of 5-second increments, due to an 800-ton ship with a single 10cm railgun attacking a 160,000-ton armoured troop transport. It still hasn’t penetrated the armour, so its time to turn off the interrupts_ ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:")

**No Short Increments for NPR vs NPR Interceptions**

[Source: Aurora forum, post 32](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/32)

In a previous version of Aurora, I added a check at the start of each increment. If a fleet is following a hostile contact, the increment will be shortened so that the following fleet doesn’t immediately move to point-blank range, but instead moves most of the distance.

This also applies to ships moving to jump points or waypoints, where a check is made for hostile ships at that location. The waypoint aspect is mainly for NPRs who use waypoints to keep track of places to investigate once they handle higher priority tasks.

However, this can lead to mysterious ever-shortening increments where an NPR is trying to attack another NPR, but has really short-ranged weapons and can never quite get into range.

Therefore, for v3.0, this logic will only be used when either the moving fleet, or the hostile fleet at the target, belongs to a player race. NPR vs NPR interactions of this type will no longer cause shortened increments.

_This might mean occasionally odd AI behaviour when you are directly observing both sides, but 99% of the time you will never notice. I think this is a better option than the current situation._

**Display Improvement for Tactical and Galactic Maps**

[Source: Aurora forum, post 33](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/33)

I’ve added some code that should make the Tactical and Galactic maps display in a much smoother way, without any jagged elements to circles for example. I’ve added a checkbox to turn off anti-aliasing if required for performance reasons.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/d/dc146d36f9ef10b859f20b17b2af23f2806cc6da.png)

**Background Colour and Map Fonts**

[Source: Aurora forum, post 34](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/34)

I’ve added a Display Settings option that pops up from a button on the Tactical Map.

You can set the background colour for the whole of Aurora and set a font for the Tactical and Galactic Maps.

Any colour can be selected for the background. The fonts are restricted (for now) to five options: Microsoft Sans Serif (default), Segoe UI, Arial, Calibri and Verdana.

The fonts only apply to the maps because different fonts have different text lengths for the same word, so they can cause controls to misalign.

Here is the Tactical map with a black background and Segoe UI font.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/5/5b94094b2300b4f46812cd594a0ae5f323e2b328.png)

The same options on the Galactic Map.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/b/b818c3ec8ddafe51c8494dcb0710d71afa923775.png)

This is something of an experiment, so I will see how it works post-release before adding anything else on the same lines.

**Galactic Map Search Update**

[Source: Aurora forum, post 35](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/35)

The Galactic Map System Search can be accessed via ctrl-F as well as the existing button.

Partial searches are now possible (typing only part of a system name) and it is no longer case-sensitive.

**Class Main Function**

[Source: Aurora forum, post 36](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/36)

The game already automatically assigns each ship class a ‘main function’, such as warship, terraformer or troop transport. This ‘main function’ is used for auto-assignment purposes and is shown at the bottom of the class summary.

For v3.0, you can override this manually using a dropdown on the Miscellaneous tab of the Class Design window.

Once this is set by a user, it will no longer update automatically with class design changes.

**Removing Unused Hull Types**

[Source: Aurora forum, post 37](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/37)

I’ve added a button to the Miscellaneous tab of the Tactical Map called ‘Remove Unused Hull Types’

Clicking this button will remove any hull types except those currently used by ship class designs, or available to be used by NPRs in automated designs.

The hull types are universal, so this will affect all games in the same database.

if a class is loaded on game start and the previous hull type is not available, it will be classed as a ‘Destroyer’.

**Non-Oxygen Species**

[Source: Aurora forum, post 40](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/40)

v3.0 introduces new species types that breathe methane, ammonia and sulphur dioxide. There is an option on the game window to enable/disable these new species types from appearing.

Each species type has its own set of dangerous gases, so all of the new types have oxygen as a dangerous gas, but none of them have hydrogen for example. Each of the four breathable gases is dangerous to species that breathe the other three.

The requirement for a 20% hydrosphere will only apply to oxygen breathers. Methane breathers simply ignore it, while water is actively dangerous for ammonia and sulphur dioxide breathers, particularly for the latter, due to the reaction between water and the two gases. While Aurora is not a chemistry simulator, it is still worth including this factor as part of colony cost for those species.

### Water Ice
0 for Ammonia  
0.05 per Hydrosphere % for Sulphur Dioxide. (so 40% = 2)

### Liquid Water Present
0.1 per % for Ammonia (so 40% = 4)  
1.0 per % for Sulphur Dioxide

### Water Vapour (Dangerous Gas)
2.0 for Ammonia  
3.0 for Sulphur Dioxide

While the new species types don’t need water, they do require an equivalent. However, tracking four different water-equivalents would over-complicate the situation. Instead, I am restricting the habitable temperature for their potential home worlds to a range where the gas they breathe can also be a liquid. This simplifies the problem and limits the potential habitable worlds. That range depends on pressure, with higher pressure worlds having a greater potential temperature range. Methane is least affected by pressure with sulphur dioxide affected most.

For anyone interested in the formula, it is:

1.0 / (1.0 / Boiling Point Kelvin - 8.314 \* logarithm(Pressure / Enthalpy Vaporisation);

That results in the following effects.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/d/d8ddc0428799bcf3aa8795c9c9209c0a04dcfddb.png)

The formula above is used only for determining whether a planet or moon is suitable as a home world. Once a species is generated, their breathable gas pressure, temperature range and maximum atmospheric pressure is set in the same way as an oxygen-breather, based on a range from their starting values, which is in turn based on the environment of their home world. This approach limits potential home worlds in a realistic way, without complicating colonisation or tracking water-equivalents.

EDIT: After testing, I have added a minimum breathable range of gas freezing point + 40K for Methane, 60K for Ammonia and 120K for Sulphur Dioxide. The range can still be greater at higher pressure, but allows a greater chance of generating a home world at lower pressures.

Once generated, the only mechanical difference between the new species types and the oxygen-breathers is the type of gas they breath, the gases they treat as dangerous and their relationship to water. Everything else functions in the same way (gravity, temperature, pressure), although the range of numbers involved is likely to be different due to their very different starting points.

Infrastructure works in the same way for all species and is interchangeable (except that different species may require different amounts for the same planet - as they do now).

Currently (in v2.7.1), when NPRs are generated at game start, the game generates and discards systems until it finds one with a planet suitable as home world. This process now includes checks for planets suitable for methane, ammonia and sulphur dioxide breathers. Similarly, as new systems are generated after game start, each planet is checked as a potential home world for each species type. Additional systems generated for multi-system NPRs will check for colony sites appropriate to the species requirements.

After game start, the AI will take account of all of the above changes when considering colony sites, planetary and system value and terraforming requirements.

It is not straightforward to determine exactly how many additional races will be generated due to the complex nature of system generation. Testing so far suggests that on average there will be a similar number of oxygen and methane races at game start, with SO2 and Ammonia appearing about half as often. This may change as I modify some of the generation parameters after further testing.

This means that overall, there may be three times more races generated during exploration. Generation now is very low so that should be fine.

**New Terrain Types**

[Source: Aurora forum, post 41](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/41)

As v3.0 introduces new species types that can exist at much lower temperatures than oxygen breathers, I have added twenty-five new dominant terrain types.

The extra terrain types extend the existing list rather than duplicating existing conditions. Most of them are for frozen or very cold worlds that would previously have just been barren, plus a few for hot worlds and those with extreme tectonics. None of the new types require water. Instead, most require the presence of specific atmospheric or frozen gas, which is not a requirement for the existing types. Several of the new terrain types are also classed as desert worlds for combat purposes.

For example, Nitrogen Ice Fields requires the presence of frozen nitrogen, which means temperatures below -210C. Ammonia Salt Flats requires ammonia to be present in the atmosphere and range from -78C to -33C. Sulphur Ice Mountains cover a range from absolute zero to -72C and require Sulphur Dioxide to be frozen on the surface, while Lava Fields are only for worlds with extreme tectonics and have a 0.5 fortification modifier, making them difficult to defend.

The Methane, Ammonia and Sulphur races will often inhabit cold or waterless worlds. As hydrosphere is not a requirement for the new types (replaced by the atmosphere requirements), they provide the new species types with a variety of terrain types for worlds that would otherwise be generally barren.

The total number of terrain types is now sixty-seven.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/6/63472f6ce7b7bd492ba21c948a4319d1fe19535e.png)

**Ruin and Ancient Construct Changes**

[Source: Aurora forum, post 42](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/42)

With the introduction of new species types, the system bodies that could theoretically support ruins has changed.

In v2.7.1, the only qualification for ruins is a temperature range between 200K and 360K (-73C to + 87C) and gravity above 0.4G. Simply expanding that range downwards would be unbalancing, so I decided to revisit the ruin generation requirements.

I’ve added an extra factor to each terrain type called ‘Atmosphere Required’. There are four possible values:

*   0: Terrain can only appear on worlds with less than 0.005 Atmospheric pressure (including zero)
*   1: Terrain requires an atmospheric pressure of at least 0.005 atm
*   2: Terrain can exist at any atmospheric pressure, including zero
*   3: Same as 2 but this is a base terrain

So if a planet has an atmosphere of 0.005 or above, it can choose anything except 0. Below that pressure it can choose anything but 1. Note that frozen gases do not count toward atmospheric pressure, so raising temperature to the point where a frozen gas melts can potentially change terrain type.

I’ve added five new terrain types classed as 0, such as Regolith Plains and Impact Craters. Some of the terrain classified as 2 also has a frozen gas requirement, such as Methane Ice Mountains.

The new requirement for ruins is a body with a dominant terrain that has an ‘Atmosphere Required’ factor of 1, gravity of at least 0.3G and atmospheric pressure below 10 (to rule out Venusian worlds). This will remove some worlds that would currently qualify and add new worlds that currently would not qualify, but should be a better representation of where ruins are likely to occur.

The Ancients are classed as an oxygen-breathing race, so the location requirement for the presence of an Ancient Construct is a body with a dominant terrain that has an ‘Atmosphere Required’ factor of 1, gravity of at least 0.3G and no requirement for an non-oxygen gas. This will reduce the number of potential locations, so I am increasing the base chance to compensate.

There are four exceptions to the above rules:

*   Rogue Planets, which have suffered some form of cataclysmic disaster that threw them into a highly eccentric orbit. These can have ruins and constructs, regardless of dominant terrain.
*   Constructs created under the ‘Stellar Anomaly’ case, which are rare situations where the Ancients positioned a construct on the innermost planet of a star to study it.
*   Ruins in Sol, which are very rare anyway.
*   Ruins manually created by the player in SM Mode.

As an aside, the Raiders can now be of any species type. The other spoilers are all classed as oxygen but that has no mechanical impact.

**Orbital Movement Update**

[Source: Aurora forum, post 43](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/43)

For v3.0, orbital movement has been moved from the construction phase to the normal sequence of play.

As a default, orbital movement will take place after the end of the movement phase, because interrupts can potentially change the length of the increment. However, you can choose to have orbital movement take place at the start of every sub-pulse instead. This should result in a more natural movement of bodies in relation to fleets, especially during combat, rather than large jumps every five days.

Orbital movement in C# Aurora executes very quickly, so there should not be any noticeable performance impact.

For example, my current game has 650 systems, 42,000 bodies and 1400 fleets. Orbital movement requires 0.03 seconds.

**Aurora Colour Configuration**

[Source: Aurora forum, post 44](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/44)

As part of an effort to make themes an integral part of Aurora, all colours displayed on maps and in forms are now loaded from an XML file when Aurora starts.

There are almost ninety different colour options within the XML, covering a huge variety of different areas. This includes map and form backgrounds, every display option on the tactical and galactic maps and the use of different text colours within forms.

Each colour has red, green and blue values, which can be edited within the XML. Changing colours is as simple as editing the file and restarting Aurora.

You can also add an optional 4th parameter opaqueness using “A = 255” (0 is transparent, 255 is fully opaque).

Players will be able to create and share different colour themes to suit their own preferences.

Below is an example of the new AuroraConfig.xml, although the colours will change before v3.0 as I am working on a more comprehensive graphical overhaul.

```

<AuroraConfig>
  <Colours>
    <Background R="12" G="12" B="12"/>
    <StandardTextColour R="210" G="210" B="210"/>
    <TextEditColour R="100" G="220" B="100"/>
    <TextHighlightColour R="0" G="255" B="255"/>
    <IconColour R="210" G="210" B="210"/>
    <ToolbarButtonColour R="23" G="26" B="39"/>
    <ButtonColour R="12" G="12" B="12"/>
    <WarningColour R="255" G="165" B="0"/>
    <CriticalColour R="255" G="0" B="0"/>
    <PositiveColour R="128" G="255" B="128"/>
    <ObsoleteColour R="255" G="165" B="0"/>
    <HostileColour R="255" G="0" B="0"/>
    <NeutralColour R="144" G="238" B="144"/>
    <FriendlyColour R="152" G="251" B="152"/>
    <AlliedColour R="34" G="139" B="34"/>
    <WreckColour R="255" G="140" B="0"/>
    <JumpPointColour R="255" G="165" B="0"/>
    <JumpPointAlienColour R="255" G="0" B="0"/>
    <MatchingComponentColour R="255" G="140" B="0"/>
    <ComponentTechDataColour R="128" G="255" B="128"/>
    <ComponentResearchColour R="0" G="255" B="255"/>
    <AlienComponentColour R="255" G="0" B="0"/>
    <PrototypeComponentColour R="0" G="255" B="255"/>
    <ArmourColour R="245" G="245" B="245"/>
    <ArmourDamagedColour R="255" G="0" B="0"/>
    <PrisonerColour R="255" G="0" B="255"/>
    <GroundForcesOrganisationColour R="128" G="255" B="128"/>
    <CivilianShippingLineColour R="128" G="255" B="128"/>
    <OrdnanceSeriesColour R="128" G="255" B="128"/>
    <TacticalScaleColour R="50" G="205" B="50"/>
    <TacMapActiveSensorColour R="176" G="226" B="255"/>
    <TacMapThermalSensorColour R="240" G="128" B="128"/>
    <TacMapEMSensorColour R="216" G="191" B="216"/>
    <TacMapELINTSensorColour R="240" G="248" B="255"/>
    <TacMapAlienSensorColour R="255" G="0" B="0"/>
    <TacMapFireControlColour R="238" G="220" B="130"/>
    <TacMapWeaponRangeColour R="255" G="185" B="15"/>
    <TacMapBodyNameColour R="50" G="205" B="50"/>
    <TacMapColonyColour R="50" G="205" B="50"/>
    <TacMapSurveyedColour R="255" G="255" B="255"/>
    <TacMapMineralsColour R="255" G="255" B="0"/>
    <TacMapSystemBodyColour R="0" G="0" B="255"/>
    <TacMapCometOutlineColour R="0" G="255" B="255"/>
    <TacMapDeepSpacePopColour R="255" G="255" B="0"/>
    <TacMapOrbitColour R="50" G="205" B="50"/>
    <TacMapAetherGateColour R="220" G="20" B="60"/>
    <TacMapRiftOutlineColour R="75" G="0" B="130"/>
    <TacMapRiftCentreColour R="0" G="0" B="0"/>
    <TacMapLagrangePointColour R="255" G="165" B="0"/>
    <TacMapSurveyLocationColour R="245" G="222" B="179"/>
    <TacMapWaypointColour R="238" G="130" B="238"/>
    <TacMapMDPacketColour R="210" G="210" B="210"/>
    <TacMapDistanceLineColour R="0" G="128" B="0"/>
    <TacMapFleetColour R="255" G="255" B="192"/>
    <TacMapLifepodColour R="255" G="215" B="0"/>
    <TacMapCivilianColour R="0" G="206" B="209"/>
    <TacMapSalvoColour R="0" G="255" B="255"/>
    <ColonyCostLessThanTwoColour R="30" G="144" B="255"/>
    <ColonyCostLessThanThreeColour R="0" G="255" B="255"/>
    <ColonyCostLessThanFiveColour R="210" G="105" B="30"/>
    <NoResearchColour R="255" G="165" B="0"/>
    <PopulatedColonyColour R="128" G="255" B="128"/>
    <MiningColonyColour R="60" G="179" B="113"/>
    <OtherColonyColour R="0" G="255" B="255"/>
    <CMCPurchaseColonyColour R="0" G="255" B="255"/>
    <NavalAdminCommandColour R="128" G="255" B="128"/>
    <NavalSubFleetColour R="0" G="255" B="255"/>
    <NavalSquadronColour R="0" G="255" B="255"/>
    <GalMapJumpPointConnectionsColour R="0" G="255" B="0"/>
    <GalMapStabilisedConnectionsColour R="255" G="165" B="0"/>
    <GalMapRestrictedColour R="255" G="0" B="255"/>
    <GalMapSurveyIncompleteColour R="255" G="0" B="0"/>
    <GalMapNavalHQColour R="255" G="255" B="0"/>
    <GalMapMaintenanceLocationColour R="0" G="191" B="255"/>
    <GalMapSystemIconColour R="0" G="128" B="0"/>
    <GalMapSystemOutlineColour R="0" G="255" B="0"/>
    <GalMapSystemSelectedColour R="0" G="255" B="0"/>
    <GalMapMultiSystemSelectColour R="255" G="0" B="0"/>
    <GalMapBlackHoleColour R="128" G="0" B="128"/>
    <GalMapSupernovaColour R="255" G="255" B="255"/>
    <GalMapCometsColour R="255" G="248" B="220"/>
    <GalMapDormantJPColour R="255" G="255" B="0"/>
    <GalMapGroundSurveyColour R="176" G="196" B="222"/>
    <GalMapMineralSearchColour R="143" G="188" B="143"/>
    <Map3DSystemIconColour R="220" G="220" B="255"/>  
    <SupportingFormationColour R="135" G="206" B="250"/>
    <SupportedFormationColour R="255" G="165" B="0"/>
  </Colours>
  <ButtonStyle>
    <FlatStyle>Standard</FlatStyle>
    <BorderSize>0</BorderSize>
  </ButtonStyle>
  <ToolbarButtonStyle>
    <FlatStyle>Flat</FlatStyle>
    <BorderSize>2</BorderSize>
  </ToolbarButtonStyle>
</AuroraConfig>

```

**Graphics Overhaul**

[Source: Aurora forum, post 45](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/45)

For v3.0, Aurora is going to look different. I believe there is general consensus that the yellow/blue combination is quite jarring for some players, which is why I introduced the custom colours above. I will be moving to a light grey / soft black combination but that can be changed at user discretion. There are likely to be alternative colour config files shared by players.

I am also changing the general appearance away from the current coloured icons to a more consistent set of black and white icons from [https://game-icons.net/](https://game-icons.net/), which is the same source as the Solaris mod, although I have used quite a few different icons. The buttons are also less prominent in general.

There are about thirty different icons on the Tactical and Galactic Maps. These are loaded at game start from a new Icons sub-directory. They are SVG files and can be substituted by using another icon with the same name. Game Icons has over 4000 to choose from, or you can find your own source.

I’ve also changed the planet icons from blue to grey and muted the name and fleet colours. I am still experimenting, so this screenshot is a work in progress but still gives a general idea of how Aurora will look for v3.0.

NOTE: The screenshot looks a little darker than the game itself unless you click to magnify.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/f/fffdb20983eedd92c3842b207a6b09e7dbf55c5f.png)

**Map Body Colony Cost Colour**

[Source: Aurora forum, post 46](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/46)

Bodies can now be shown by their colony cost, similar to the System View and using the same colours. The species used for the colony cost is selected on the Miscellaneous tab, although with the growing number of options I might re-arrange that.

Here is a brand new game showing Earth with CC < 2 and Mars/Mercury with CC < 3.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/2/2881423c4c0f8eb40b941cecd5ab17c2ad0232ce.png)

Gas Giants can be shown as a seperate colour too.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/c/c3d445235e22cb4993e1eba3b0621486a7aea7db.png)

Low gravity bodies can be included. The light blue is colony cost < 3, while the red-brown is colony cost < 5

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/9/95726204dba91c6b12dcdf0682ce6dbe8556c280.png)

All these colours are in the XML file and can be modified by the player

**Expanded Context Menu**

[Source: Aurora forum, post 47](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/47)

In v2.7.1, you can right-click on a population, fleet or jump point and a menu will pop up with those items. Clicking the fleet takes you to the Naval Org window with the fleet selected, clicking the population opens the economic window and clicking the jump point changes the tactical map to the selected system.

For v3.0, the context menu has been changed to the new colour scheme and extra functionality has been added. I’ve also included icons to avoid any confusion about the function of each item.

Right-clicking a location with alien ships will popup a list of the alien classes present. Clicking one of those will open the Intelligence window with that class selected. A location with an alien population will show the population in the list. Clicking that will open the Intelligence window with that class selected.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/c/c4289e647e1076a55e9555ad098ce25f3b1a5de5.png)

Clicking a non-gas giant body without an existing colony gives you the option to create a colony. A popup confirms the colony has been created.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/3/35ff96245e5350a26aa4f11aab87f43b7d5dc720.png)

The population, fleet and alien icons are the same as used on the toolbar buttons. The jump point icon is a new one but is held in the same Icons sub-directory and can be replaced by the player.

**Ground Formation Template Naming Themes**

[Source: Aurora forum, post 48](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/48)

Ground Forces Templates can now be assigned naming themes, in the same way as Ship Classes. To choose the theme, select the template on the ground forces window and choose from the naming theme dropdown. You can choose to have the names selected in a random order.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/1/1cc51a39b9ee231bf5bc006598e473db12089ceb.png)

When you choose a formation template to build on the Training tab of the Economics window, the next name pops up.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/f/f022bc01670634bd8521a36e51b12c1f8a1c1c72.png)

The formation names will also be assigned automatically, based om the template theme, if you SM new formations or create them using the Organisations tab on the Ground Forces window.

If you want the traditional format of 1st Infantry, 2nd Infantry, etc. you can choose the Name + Number theme, which is the default for new templates.

**Orbital Temperature Dampening**

[Source: Aurora forum, post 49](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/49)

In v2.7.1 Aurora calculates temperature based on star luminosity, distance of the body from the star, albedo (how much heat is reflected into space), greenhouse and anti-greenhouse factors and any dust in the atmosphere.

For v3.0, a new ‘dampening factor’ has been added.

In the real world, thick atmospheres and large oceans act as thermal buffers, storing heat and moderating temperature extremes. A planet with a highly eccentric orbit but a dense atmosphere and vast oceans will experience less dramatic temperature swings than a barren airless world in the same orbit.

Aurora now simulates this effect. When determining surface temperatures for planets with eccentric orbits, a dampening factor is calculated that moves the temperature closer to the temperature that would exist for a perfectly circular orbit. This factor is expressed as a percentage and is based on the Kelvin temperature (0C = 273K)

The size of the dampening factor is determined by three properties of the planet:

*   **Atmospheric pressure:** A thicker atmosphere stores more heat. Each 1 atm adds 10% to dampening, with a maximum of 50%

*   **Ocean coverage:** Oceans (not ice) act as heat reservoirs, with each 1% of hydro extent adding 0.3% to dampening, with a maximum of 30%

*   Orbital Period: The dampening factor is reduced for orbits longer than one Earth year, as they have more time to heat up or cool down. The effect on dampening is:  
    1 / SQRT(Orbital Period in Years)

Moons use the orbital mechanics of their parent body, but their own atmosphere and hydrosphere.

Barren worlds, without atmospheres or oceans, will continue to experience the full temperature extremes of their orbits.

For example, if the dampening factor is 40%, the temperature at any given distance would be moved 40% closer to the temperature with a circular orbit (the semi-major axis distance). A planet with a circular orbit temp of 300K and a temp at its current distance of 250K (without dampening), would be 270K after dampening.

There are two major impacts of this change:

1.  Planets with water and atmosphere will generally have less extreme temperature ranges and therefore the number of potential habitable worlds will increase to some degree. This aids both colonisation and the chance of generating NPRs, ruins, etc..

2.  Dampening adds some new terraforming considerations and options. Adding atmosphere and water will have more of an effect on extremes temperatures than in v2.7.1, plus when you have exhausted the temperature change effects of greenhouse gases, you can still affect the extreme temperatures of eccentric bodies by adding/removing water and atmosphere.

_**Notes**_

_The ‘average’ between perihelion and aphelion temperatures is not the same as the semi-major axis (circular orbit) temperature, because the effect of solar luminosity on planetary temperature does not change at a linear rate as distance increases. I only mention this here in case someone tries to calculate the effect of dampening and it appears to be slightly different than they expected._

_There are some minor edge cases where the atmospheric pressure might change as a result of the dampening and therefore change greenhouse factors, but I decided to ignore it - because it ends up being a circular problem, it has no effect in the vast majority of cases and no one will notice anyway ![:slight_smile:](https://emoji.discourse-cdn.com/twitter/slight_smile.png?v=15 ":slight_smile:")_

**Jump Point Buoy Icons**

[Source: Aurora forum, post 50](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/50)

The Galactic Map now includes an option to show the presence of jump point buoys.

A buoy for this definition is a missile salvo comprising one or more missiles with no engine.

If you have a buoy located within 1000 km of the jump point (to account for potential placing errors), a small hemispherical icon will appear on the map where the jump point connection line exits the system icon.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/8/88972f778a656e5b5f83ad3ea4a0a2d086eb4844.png)

**Disable Hostile Interrupts at the NPR/System Level**

[Source: Aurora forum, post 51](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/51)

For v3.0, you can already disable interrupts for specific events (see the earlier post in this thread).

I’ve also added a check box to the Intelligence window that allows you to disable hostile contact interrupts (New and Updated) for a specific NPR in a specific system. The check box is on the Known Systems tab.

This is intended for situations where you are monitoring hostile traffic in a system and wish to avoid constant interrupts.

**Stabilisation Time for Lagrange Points in Fleet Orders**

[Source: Aurora forum, post 52](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/52)

When a fleet with a stabilisation ship is selected in the Naval Organization window, the list of possible population and system body destinations will include the time in years required to stabilise a Lagrange point for that planet or moon.

Note that it must have a mass of at least 0.25.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/7/7336f85e4c84fae9f031c240943676bbb97ee6c7.png)

**No Shield Technology Game**

[Source: Aurora forum, post 53](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/53)

For v3.0, a game can be set to exclude shield generators as a technology. This has the following effects:

*   NPR and spoiler designs will not include shields

*   Shield type, size and regeneration rate will not be available for research.

*   Shields will not be found in ruins.

This is intended as a ‘hard mode’ option as players will generally be better at incorporating shields into designs and using them effectively in combat.

Player ships will be more likely to be damaged or destroyed and there will be a greater need for a distributed, armour-repair capability.

**Missile Lurker Mode**

[Source: Aurora forum, post 54](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/54)

For v3.0, Missiles can include a new Lurker Mode component in their design. This is intended for use on missiles that have both engines and onboard sensors. It is selected via a checkbox in the same way as Retargeting.

The Lurker Mode component is 0.5 MSP in size, costs 0.5 BP and uses 0.5 Boronide.

When a missile with the Lurker Mode component is launched without a target (using the Launch Ready Ordnance order), it will remain at that location until a target is detected. At that point, it will deactivate lurker mode, engage its engines and attempt to intercept the target.

A Lurker Mode missile can also be used a second stage missile. When released by the first stage, it will ignore the targeting of its parent missile and begin searching for its own targets.

Once a Lurker Mode missile engages engines, it can no longer return to lurker mode and will run down its endurance normally.

**Short Increments and Active Fire Controls**

[Source: Aurora forum, post 55](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/55)

Currently, if an increment is shortened because a ship is due to fire weapons, you receive the event text…

_“Increment length adjusted due to imminent action. This could be due to action involving a non-player race, or due to fire controls set to open fire without active targets”_

For v3.0, if you are the owner of the ship causing the shortened increment, you will see the event text…

_“Increment length adjusted due to active fire controls on XX Ship Name”_

**Copy Naval Admin**

[Source: Aurora forum, post 56](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/56)

I’ve added a Copy Admin button to the Naval Organisation window.

This allows you to create a copy of any admin command, plus the entire hierarchy below it, including the required rank, auto-assign status and required bonus.

For example, I have copied the hierarchy for Legio Astrorum I, then renamed the new one Legio Astorum II

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/2X/d/d03a5090d3d084777db7ca7b3db2914167f6e159.png)

**Alien Class Type**

[Source: Aurora forum, post 57](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/57)

On the Intelligence window, alien classes on the treeview are now split into four separate tree branches, based on a new ‘Type’ designation. Every alien class starts as ‘Unknown’ until it passes one of the following checks.:

If it is detected on thermal sensors, has military engines and no existing classification, it is classed as Military

If it is detected on thermal sensors, has commercial engines and no existing classification, it is classed as Commercial

If it is detected on active sensors, is less than 1000 tons and has never had a previous detection with a larger signature, it is classed as Light Naval, regardless of current designation.

If shields are detected, it is classed as Military.

If a weapon is detected and the current designation is Unknown or Commercial, it is classed as Military

If a ship currently designated as Light Naval is destroyed and the resulting wreck is larger than 1000 tons, the known size for the parent class is updated and the parent class designation changes to military (this is to cover cloaked ships).

**Low Gravity with Atmosphere Retention**

[Source: Aurora forum, post 58](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/58)

In v2.7.1, bodies with a lower gravity than the viewing species minimum have an “LG” suffix appended to their colony cost.

The default minimum gravity for humans in a new game is 0.1G, which is also the gravity at which a body can retain atmosphere. However, if you are playing a species with a different gravitational tolerance, there is a need to distinguish bodies between their low gravity status and their ability to retain an atmospheric.

in v3.0, if a body is above the atmospheric retention threshold but below the species minimum gravity, the suffix will be “LGR” (low gravity, retained)

If a body is above the the species minimum gravity but below the atmospheric retention threshold, the suffix will be “N” (no retention)

I have used different suffix lengths for the three cases because that is easier to see in a list of system bodies than the actual letters.

**Automated Turns for Shortened Increments Only**

[Source: Aurora forum, post 59](https://aurora4x.com/t/aurora-v3-0-0-patch-notes-unreleased/49/59)

I’ve added a checkbox to the miscellaneous tab of the Tactical window called _“Run Automated Turns for Shortened Increments Only”_

When this checkbox is checked, automated turns will end if the actual length of an increment is equal to the length of increment selected by the player.

_For example, if have automated turns turned on and choose a 1 day increment, automated turns will only continue if the actual increments are shorter than 1 day. As soon as a full day increment runs, automated turns will cease._
