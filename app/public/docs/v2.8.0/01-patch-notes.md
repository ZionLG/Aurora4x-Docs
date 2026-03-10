**v2.8.0 Bug Fixes**

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

*   The 'Join Fleet and Begin Overhaul' order will be available if you target a fleet in orbit of a population that has other fleets with maintenance modules, but no maintenance facilities of its own.

*   Fixed the #1558 error that occasionally appeared on system generation and was blocking the creation of Rakhas.

*   Fixed error in civilian shipping line logic that caused the building of many more freighters than colony ships.

*   Improved loading speed of Galactic Map.

*   Fixed error #883 caused by crew effects when NPRs capture ships.

*   The Fleet Commander option has been removed from Assignments on the Commanders window.

*   Fixed the problems with the Galactic Map Full Screenshot. It just works normally now every time.

*   Fixed a problem with conditional fuel orders being triggered for ships with zero fuel capacity.

*   Fixed a problem with conditional orders being triggered by ships in a hangar bay.

**v2.8.0 Minor Changes**

*   For Trade, Contracts and Standing Orders, fleets are checked from newest to oldest.

*   NPRs will eliminate any sensor buoys of neutral races they find in their territory.

*   TL6 ruins may appear occasionally. The max research cost of a ruin technology is equal to 2^(TL +1) \* 1000.

*   Development cost for a component will never be lower than the build cost, regardless of research speed.

*   The tails of comets heading outward in their orbits will face toward the star.

*   15cm Meson and High Power Microwave changed from 200 tons to 250 tons (as 12cm is also 200 tons).

*   Recharge weapons moved before movement in the sequence of play, so that fast-firing weapons cannot be used for both point defence and attack in the same increment.

*   Ships suffering from jump shock will have a J in the status column of the ship list on the Naval Organisation window.

*   'Inactive Lab' is no longer an interrupt event.

*   Ground Geological Survey Complete is now an interrupt event.

**Ground Support Fighters Removed**

The concept of ground support by fighters or other small craft has been entirely removed from the game.

There are no longer any orders for fighter-based missions, such as flak suppression and search and destroy. Fighter pods have been removed from research and from missile design.

Orbital bombardment support is unaffected.

New options will be added in future versions for 'ground units' to provide close air support.

**Civilian Contract Standing Order**

A new 'Civilian Contract' standing order has been added for v2.8.

A fleet with this standing order will seek out civilian contracts to fulfil. The contract fulfilment will function exactly as if a civilian ship took the contract, with three exceptions:

*   There is no contract payment

*   The fleet will use fuel while fulfilling the contract

*   The fleet will refuel at the destination if that destination has the 'Destination for Automated Refuel' checkbox ticked.

**Load All Ship Components**

Load All Ship Components is a new fleet order.

This order will load as many ship components as possible from a destination population, in descending order of component size.

**Dynamic Lagrange Point Orders**

The 'Auto-Include Lagrange Points' checkbox on the Fleet movement orders tab of the Naval Organization window has been replaced by the following radio buttons:

### Manual LP
Fleet orders will ignore Lagrange Points, unless the order is manually plotted. This is the same as leaving the existing option unchecked.

### Plotted LP
Any fleet orders created for this fleet will check for Lagrange points at the time of order creation. This is the same as checking the existing option.

### Dynamic LP
The fleet will check the first order in its order list to determine if the destination can be reached more quickly via a Lagrange Point. This check will happen when an order is assigned to a fleet with no orders, or at the end of any sub-pulse in which an order is completed and orders still remain to be executed.

The dynamic option means that the fleet will be taking into account the position of Lagrange Points in its current system when an order is being executed, rather than when it is originally plotted. It is not perfect, as a fleet can complete an order and begin a second during a sub-pulse, before that second order is checked at the end of the sub-pulse, but this will generally be a matter of a few minutes or hours, compared to orders plotted days, weeks or months earlier.

**Using Buoys in Alien-Controlled Space**

In v2.7.1 and earlier, the AI will tolerate the presence of sensor buoys from neutral races. That changes in v2.8.

Any sensor buoy belonging to a neutral race will be eliminated by the AI if detected within what it regards as its territory. This follows the same mechanics as eliminating hostile buoys in any system.

The tonnage of detected sensor buoys will be included for the purposes of affecting diplomatic relations in a given system, with the existing minimum of 1000 tons. So a single sensor buoy will count as a 1000 ton ship if there are no other detected assets in the system.

As an alien race cannot directly contact a sensor buoy, if there are no other player assets in the same system and communications have been established, it will instead send a message to a detected population or ship in a different system to register a protest about the buoy. If there are no detected populations or ships in other systems, or communications have not been established, there will be no warning that relations are deteriorating.

**Lost Colonies**

v2.8 adds a new starting option called Lost Colonies.

During a jump point exploration when the following conditions are true, there is a chance that a lost colony of the exploring race will be found:

*   The Lost Colonies option is active.

*   A new system is generated.

*   The exploring race is a player race.

*   The check for an NPR to be generated on a system body is passed.

*   The NPR that would be generated is a minor race, industrial or pre-industrial.

*   The body is suitable for the starting species of the exploring race.

If all of the above is true, there is a 40% chance that a lost colony will be discovered. It could be Trans-Newtonian, industrial or pre-industrial, depending on the original NPR generation check, and on average about 25% smaller than an equivalent NPR population of the same type.

Note that this is a different option than the existing 'Human NPRs' option, which allows for all types of NPRs, including multi-system, to be based on the human species (1/3rd chance if the environment allows). Either option can be used in a game or both in the same game. In general, 'lost colonies' represent populations that did not possess or maintain the necessary logistical infrastructure to support an active military or to declare and defend their independence. They welcome the return of their parent civilization.

None of the lost colonies will have any military forces, either in space or on the ground, nor any of the supporting military infrastructure, such as shipyards, fuel refineries, maintenance facilities, military academies, etc.. The Trans-Newtonian version will have about half of the construction factories, mines, financial centres expected for the population size, a small number of research facilities and tracking stations, probably one or two ground force construction facilities and a spaceport. Industrial lost colonies will have conventional industry, a tracking station and perhaps a spaceport. Pre-industrial will have nothing but the population itself.

If both the Human NPRs and Lost Colonies options are active in the same game, the former represents those colonies that became independent and forged their own path. They might not be hostile, but neither are they willing to give up their sovereignty. Human NPRs will be checked after the check for Lost Colonies.

**Repeat Shipyard Tasks**

For v2.8, any sort of shipyard task, except auto-refit, can be set to repeat a fixed number of times.

A small text entry field has been added to the right of the Create Task button on the Shipyards tab of the Economics window. This defaults to "1".

If a task is created with a repeat number greater than 1, the following happens after the completion of the task:

*   Construction. Another ship of the same type is laid down, using the same parameters as the original task. A name will be generated from the class theme.

*   Refit. Another ship of the same original class will be refitted to the same target class. This functions the same as auto-refit but with a fixed amount of tasks.

*   Scrap. Another ship of the same class will be scrapped.

*   Repair. Another damaged ship of the same class will be repaired.

For all tasks except construction, the repeat task will be abandoned if a suitable ship is not available. Any task that uses alien components will only be repeated if the required components are available. Events will be generated to notify the player in both cases. The 'Use Components' flag will be carried forward for construction and refit tasks.

On the SY Tasks tab, any repeating tasks (with a repeat number greater than 1), will have the number of tasks displayed as part of the task description. As each repeat task is completed, the number will be decremented by 1. The Completion Date column is based on the total time required for all ships in the task.

**Light Naval Shipyards**

The Light Naval Shipyard is a fourth type of shipyard (after Naval, Commercial and Repair). It is displayed with an L designation.

The Light Naval Shipyard can be built in the same way (and for the same cost) as a Naval Shipyard. It functions as a Naval Shipyard, except for the following differences:

*   The capacity per slipway is fixed at 1000 tons and cannot be increased through upgrades (or via SM).

*   The only upgrade options available are Add Slipway and SM Modification.

*   Any ship of 1000 tons or less can be built or refitted without the need for retooling.

*   There is no size restriction for refitting, so you can refit any 1000-ton or less ship to any other. The cost for size difference still applies.

**Fighter and FAC Updates**

The differences between fighters and FACs are being removed from the game in terms of mechanics, although they will likely persist in terminology.

The 500-ton limit for ships that can interact directly with a planetary surface is raised to 1000 tons.

Fighter Factories are renamed as Light Naval Factories. They can build any ship of 1000 tons or less. In effect, they are a ground-based version of Light Naval Shipyards.

The Fighter Combat bonus (which didn't really do anything) has been removed.

Any ship of 1000 tons or less in size will use the full bonus values of its commander. Ships greater than 1000 tons will continue to use the existing mechanics where they only receive half of the following bonuses from the ship commander: Crew Training, Survey, Engineering, Tactical, Carrier Ops, Ground Support.

Ship commanders of light naval units (a combined designation for FACs and Fighters) will be assigned based on their Light Tactical bonus (see below), rather than the defunct Fighter Combat bonus.

**Light Tactical Bonus**

v2.8 has a new commander bonus called 'Light Tactical'.

This functions in the same way as the Tactical Bonus (boosting chance to hit), but it only affects Light Naval units (1000 tons or less). The existing Tactical bonus will not affect Light Naval units.

The Tactical Bonus is for commanders of larger warships (half effect) and tactical officers (full effect), while Light Tactical is for the commanders (full effect) of Light Naval units.

Commanders of Light Naval units will be assigned based on their Light Tactical bonus. When they gain experience, it will be weighted toward Light Tactical in the same way that commanders of larger warships have their experience weighted toward Crew Training.

The chance of a newly generated commander having a Light Tactical bonus is double that of a Tactical Bonus. It has the same initial generation chance as Survey.

**Alien Artifact Changes**

### Artifact Stockpile
Alien Artifacts are no longer a trade good and will no longer be traded by civilians. Instead, any alien artifacts recovered from ruins, or the artifact reserve, will be held directly at the population.

They are displayed near the top of the third column, below any construct or ruins and above the capability Yes/No section.

### Alien Artifact Reserve
In v2.7.1, when all items have been recovered from a ruin, the ruin is removed and plays no further part in the game.

For v2.8, the ruin will still be removed but it will leave behind an 'alien artifact reserve'. This represents the scattered minor artifacts that were not detected by the main survey. The number of alien artifacts in the reserve will be random, anything from a few hundred to tens of thousands, but that number will be heavily influenced by the size and scope of the original ruin. The size of the reserve is not known to the player, but it can be inferred from the rate of recovery.

Construction units can continue to search for these artifacts after the ruin is removed. They follow the normal recovery check process, followed by a second check with a percentage success chance equal to: artifact reserve / 50000.

If this second check is successful, a number of alien artifacts equal to four rolls of D50 (4 - 200) will be recovered and the reserve will be reduced by this amount. Over time, the remaining artifacts will become harder to find.

Construction units will be more effective working on unexploited ruins, but this provides a potential use for those units when no other tasks are available. The recovery of artifacts also becomes more important due to the changes in Xenoarchaeology (see next post).

**Xenoarchaeology Update**

Xenoarchaeology units gain some new abilities in v2.8. They are able to generate research points from ancient constructs and ancient artifacts.

As in v2.7.1, a Medium Vehicle with 2 XEN components (218 tons) has 1 Xenoarchaeology Point (XP). The cost for that vehicle is 8.72 Wealth and 8.72 Vendarite.

### Constructs

*   Each XP in a ground unit formation will produce a baseline 1 Research Point (RP) per year. This output is modified by game research speed, (Race Research Rate / 200) and by any penalty due to radiation.

*   Each construction phase, the RP output from all the XEN units at a population on a body with a surveyed ancient construct is assigned to an accruing total.

*   After the accrual, there is a 10% chance that all accrued points will be assigned to a random background tech system from the same field as the construct that is currently available to the parent race. The accrued total is then reset to zero.

*   The maximum annual XP conversion into RP for any given construct is equal to: Race Research Rate \* Construct Bonus \* 20. So a construct with a 50% bonus combined with a 240 RP racial research rate would result in a maximum of 2400 RP.

*   The XEN units benefit from the Xenoarchaeology bonus of the formation commander, but not from the bonus of the construct. The construct bonus affects the maximum output instead.

*   The construct will have to be surveyed before it can be used for XP to RP conversion.

*   XP from XEN units do not accumulate if unused.

*   The current and maximum XP conversion is shown on the Economics Summary tab just under the construct line.

In general, it is much more expensive to build the XEN than the research facility. Even so, there are situations where the XEN are a better option.

*   There are a few marginal cases (low bonus construct and low bonus scientist vs high bonus XEN) where the XEN formation is cheaper than the research facility.

*   The XEN are ideal for 'No Background Research' empires. Although in that case, it is harder to increase background research so they will become less effective in BP terms vs RF as the game progresses.

*   The XEN can be used on hostile worlds.

*   The XEN can make use of constructs with duplicate research fields but lower bonuses, that are not ideal for Research Facilities.

*   The XEN do not require population, so they can be deployed earlier to gain some use from constructs while a colony is being established.

*   The XEN are built with Vendarite, not Duranium and Mercassium, so they can be used as a more expensive alternative if those minerals are in short supply.

*   On the downside, the XEN will have to be built instead of other ground units, leading to a loss of capability in other areas, and they have a maintenance cost. More GFCC will help, but at some point Vendarite will become a problem.

### Alien Artifacts

*   If XEN units do not use all of their XP (because there is no construct or they are limited in their conversion to RP), they may use that excess XP to convert alien artifacts at ruin sites into RP instead.

*   XEN units that are studying a dormant construct in an attempt to activate it cannot convert artifacts during the same increment.

*   Each population has a new checkbox on the Miscellaneous tab of the Economics window entitled 'Construct is Xenoarchaeology Priority'. This is checked by default. Unchecking this box means that if artifacts are available, the Xenoarchaeology units will prioritise artifact conversion in preference to construct research, or activating the construct.

*   Each XP in a ground unit formation will produce a baseline 2 Research Points (RP) per year when converting artifacts. This output is modified by game research speed, (Race Research Rate / 200) and by any penalty due to radiation.

*   Each RP created by this conversion requires the consumption of 1 alien artifact.

*   Each construction phase, the RP output from all the XEN units at a population with available artifacts is assigned to an accruing total. This is separate to the construct accrual.

*   After the accrual, there is a 20% chance that all accrued points will be assigned to a random background tech system from any field that is currently available to the parent race and is within the development cost limitation of the original ruin race. The accrued total for artifacts is then reset to zero.

*   The development cost limitation has the following formula: (2 ^ (Ruin Level + 1)) \* 1000

*   There is no maximum conversion amount as the artifacts are a limited resource.

*   The research production rate is higher for artifacts because they are physical examples of technology, they are a limited resource, the results are extremely random and engineer units are required to locate the artifacts.

*   The XEN units benefit from the Xenoarchaeology bonus of the formation commander.

Ultimately, the new XEN abilities will be useful for all Empires in certain situations, and vital for No Background Research Empires, but will remain less useful overall than research facilities due to their higher cost, deployment constraints and lack of directed research.

**Engineering Projects**

Engineering Projects are an alternative way to develop race-designed components, rather than using research facilities.

On the Industry tab of the Economics window, a sixth project type called "Engineering Projects" has been added to the project type dropdown. Selecting this will display a list of race-designed components that have yet to be researched.

These "Engineering Project" components can be selected and constructed in the same way as researched components, with the following differences.

*   The build cost of the component will be twice the development cost.

*   The mineral requirements will be scaled accordingly to match the build cost.

*   The project will be built by construction factories.

*   Only one component will be constructed.

For example, assume a newly-designed component is 20 BP, using 10 Duranium and 10 Gallicite, with a development cost of 200. The Engineering Project cost will be 400 BP, using 200 Duranium and 200 Gallicite.

Once this first component is completed, it will appear in the population stockpile. That component will be classed as 'researched' and becomes available to build normally.

Engineering Projects simulate an engineering-led, trial-and-error process to develop new components, rather than using research facilities to perfect the build process. It can be used by any empire, but is particularly important for empires that have no normal research capability.

**No Research Projects**

v2.8 adds a new option during Race Creation called 'No Research Projects'.

This option represents a stagnant empire that is either incapable of advancing its general level of technology, or is unwilling to do so for political, societal or religious reasons. This option creates the following restrictions for this race:

*   Research projects cannot be created.

*   Research facilities cannot be constructed.

*   The number of starting research facilities is reduced to 0.

*   Academies do not create scientists.

*   New components must be developed using Engineering Projects.

*   New ordnance must be developed using Ordnance Projects.

*   Research facilities gained from captured populations cannot be used.

*   There are no warnings for inactive research facilities.

*   Ruins will yield a ground force construction complex if a research facility is rolled.

*   All technology can still be researched using the Instant button - either with Starting Tech Points or in SM mode.

*   Components can only be disassembled at a colony with at least ten million population.

*   Tech data can only be downloaded to a colony with at least ten million population.

Despite the restrictions above, there are a variety of ways in which new technology can be acquired, including:

*   Technical data can be directly recovered from ruins.

*   Xenoarchaeology units can discover technical information from ancient constructs.

*   Xenoarchaeology units can discover technical information from alien artifacts.

*   Wrecks may provide instant research points upon being salvaged.

*   Components from wrecks, ruins or captured ships can be disassembled.

*   Conquered Populations may yield research data.

*   ELINT modules can gain technical information from alien populations.

*   Friendly alien races may provide technical information.

This option is not suitable for a 'turtle' approach, as a race without an inherent ability to develop new technology has to explore and find ways to advance its tech base, before alien Empires advance too far beyond it.

**Mass STO Target Type Reassignment**

There are six new buttons on the STO Targeting tab of the Ground Forces window. If you select an STO element and click a button, they will copy the 'target type' and 'weapon selected per target' parameters of the selected element to other STO elements, based on the following criteria:

*   Copy Pop: All STO Elements at the same population.
*   Copy System: All STO Elements in the same system.
*   Copy All: All STO Elements in the empire.
*   Copy Type Pop: All STO Elements at the same population with the same unit class.
*   Copy Type Sys: All STO Elements in the same system with the same unit class.
*   Copy Type All: All STO Elements in the empire with the same unit class.

**Orbital Bombardment Support Update**

In v2.7.1, during ground combat, ships in orbit may provide fire support to friendly forces on the surface. This requires the friendly formation to have one Forward Fire Direction component for each ship providing support. The supporting ships fire once per ground combat phase.

In v2.8, the mechanics are identical, except for the following two changes:

1.  The supporting ships will fire four times per ground combat phase, which quadruples the effect of orbital bombardment support. They will check for weapon failure each time they fire and will cease firing if a weapon fails and cannot be repaired.

2.  If there are more ships in support than Forward Fire Direction components in the supported formation, the ships will still fire but their chance to hit will be multiplied by: Number of FFD Components / Number of Firing Ships

**'Narrow Text' Class Summary**

v2.8 adds a new 'Narrow Text' option on the Class Design window that allows you to view (or copy) a more compact class summary, where the text width is narrower than the standard summary. This is primarily intended for copy and paste into campaign reports or forum posts where text width is a constraint.

The 'Narrow Text' option does not change the names of components, so components with particularly long names will render this option less effective.

**Estimated Future Temperature**

Two new lines have been added to the atmosphere data on the Environment tab of the Economics window.

*   Estimated Temperature with 0.1 atm of Aestusium added
*   Estimated Temperature with 0.1 atm of Frigusium added

**Ground Forces Window Update**

Delete Hierarchy and Scrap Hierarchy buttons have been added to the Ground Forces window.

If you select a formation and use either button, you will receive a warning. If you click Yes, the selected formation and every other formation in its hierarchy will be deleted or scrapped, depending on the button selected.

You can also select a population and use the same buttons to delete or scrap all formations at that population.

The element sort buttons have been replaced with radio buttons.

**Aether Gate Detection and Prevention**

Two new technologies are available in v2.8:

*   Aether Gate Detection. 10,000 RP
*   Aether Gate Prevention. 25,000 RP

These technologies cannot be researched normally. Instead, progress toward these technologies is gained by capturing raider ships, salvaging raider wrecks and recovering the tech from ruins.

When a raider wreck is salvaged, there is a chance that technical data between 1% and 20% of the total research points required for the respective technologies will be recovered. The chance of recovery is 20% for detection technology and 8% for prevention technology.

When a raider ship is captured, there is a chance that technical data between 1% and 20% of the total research points required for the respective technologies will be recovered. The chance of recovery is 25% for detection technology and 10% for prevention technology.

Technical data may also be recovered from ruins, in the same way as any other ruin-only technology.

### Aether Gate Monitoring Station
Once Aether Gate Detection technology is available, the Aether Gate Monitoring Station may be constructed. This has a build cost of 3600 BP, requiring 1200 Corbomite and 2400 Uridium. It has a transport requirement of forty standard cargo holds, the same as a spaceport.

If an Aether Gate forms in a system with a monitoring station, the owning race is notified and the Aether Gate will be displayed on the tactical map, similar to a jump point but in Crimson.

Once Aether Gate Prevention has been researched, Aether Gates will be unable to form in any system with an Aether Gate Monitoring Station.

**Summary Highlighting for Obsolete Components**

In v2.7.1, obsolete components are highlighted in orange on the class component treeview, while alien components are highlighted in red.

For v2.8, those highlights will also apply to the component summary section, such as Propulsion, or Combat - Beam, so you can see the affected sections without having to open every summary node.

**Class Summary to Clipboard**

A new button on the Class window called Summary Image has been added. Clicking the button takes a screenshot of the class summary, removing any excess open space to the right and below, and puts that screenshot on the Windows clipboard. Then you can paste directly into Discourse or anywhere else.

There are two checkbox options, which allow you to remove the classification text at the bottom (missile to hit and class designations) and to change the screenshot to the same colours as the default forum colours.

In addition to the screenshot generation, a small 4 pixel margin has been added to the left side of the summary display, to make it clearer in both normal usage of the class window and for summary images.
