**v2.7.0 Bug Fixes**

*   Create Empire button removed from Tactical Map. It was for testing and left visible by mistake.

*   Fixed display of Current Infrastructure on the summary of the Economics window.

*   Fixed deletion of standing order templates.

*   Fixed bug that prevented triggering of second or later conditional order if the fleet already has movement orders.

*   Shipyards can build ships of the same name as an existing ship if the 'No Theme' option is set for the class.

*   Creating fighter bombardment pods in the missile design window no longer causes an error popup.

*   All references to shipping line dividends removed.

*   Removed the possibility of using the "Join fleet and begin overhaul" on a system body - which throws an error.

*   Fixed the name changes from boat bays to small and tiny hangar bays.

*   Fixed a bug that caused separation range to increase by 1000 when previous missile was selected.

*   Fixed plasma carronade research cost progression.

*   Fixed various tech system name typos.

*   Fixed squadron list in class window to only include squadrons from the viewing race.

*   Fixed missing scrap ordnance button.

*   Fixed #3656 errors after CIWS destroys all missiles and there are CIWS yet to fire.

*   Fixed bug where ground unit is created as sensor research project if you design a unit, then open a second ground window and close it, before clicking Create.

*   Class window now correctly remembers the expanded state on the components tree views.

*   Fixed research queue numbering after project completed.

*   Removed references to LG infrastructure.

*   Fixed incorrect rounding of small commercial jump drives.

*   Civilian Mining Colonies will now appear as normal in conventional starts.

*   Additional Shipping Lines will now appear as normal in conventional starts.

*   Fixed a bug in Modify for Use that deleted components instead of converting them.

*   Object reference bug in #3822 is *probably* fixed.

*   Improved distribution of civilian ship types.

*   Fixed a bug that prevented shore leave on ships with less than full crews.

*   Fixed a bug that prevented shipping lines delivering infrastructure to low gravity populations.

*   CIWS will correctly report shots fired and will engage more than one salvo.

*   Fixed current class losing focus on class design window after copy or hull change.

*   Further bug fixes in v2.7.1 released on November 19th 2025

**v2.7.0 Minor Changes**

*   Added options to turn off comets and comet names on the Tactical Map.

*   Added extra tooltips on game window.

*   Boarding combat will reveal alien race portraits on both sides.

*   The Small Jump Point Stabilisation Module will be researched automatically when the Jump Point Stabilisation Module 180 is researched.

*   Changed naming format of maintenance storage bays to the same as other components, with - Size as a Suffix.

*   Re-instated wealth cap of 2x annual wealth.

*   Removed picket move order, as it is a legacy order that is no longer needed.

*   Double-clicking a system body in the System View window will centre the tactical map on that body and change focus to the tactical map.

*   The 'Assign New' status for research projects will be carried forward into any queued project for the same scientist.

*   Extended highlighting of research projects from selected field to the research queue.

*   Added design warning to class window if the class has no cargo shuttles but does have 25k cargo capacity or 10k colonist capacity or 5k troop transport capacity.

*   Added game-level option to allow civilian mining colonies. The default is on.

**Random Class from Race Theme**

A new 'Random Class from Race Theme' checkbox has been added to the Class window. This is checked by default.

When this is checked and a new class is created, a random name for the new class will be selected from the Racial class naming theme rather than the first available name. Existing class names will still be excluded.

**Civilian Ship Retirements**

v2.7 should see significantly more civilian ship retirements.

Currently, there is a bug that means civilian ships are only retired if they have no orders at the moment when they are selected for retirement. For v2.7, they retain that retirement flag and will be retired when they complete their current orders. The flag is saved to the database.

Ships are selected for retirement when a new ship is built. The selection will be the oldest ship of the same type (colony ship, freighter, etc.) as the new ship within the same shipping line. Only ships constructed at least ten years previously can be selected.

**Decimal Separator Fix**

This version of Aurora will be fixed to GB culture settings. This means that all numbers will be displayed with a period as the decimal separator and a comma as the thousands separator. It also means dates will use a format of DD Month YYYY.

This should avoid any further issues with the local decimal separator setting.

However, whenever a user inputs a non-integer number into Aurora they will have to use the US/UK decimal separator, 12.34 rather than 12,34, or they may encounter an error.

**Max Active Sensor Resolution**

There is a new "Max Active Resolution" field on the Miscellaneous tab within the Ship Overview tab of the Naval Organization window. The default value for this field is 1000.

When a ship engages active sensors, it will only activate those sensors with a resolution equal to or below the Max Active Resolution.

So if a ship has sensors with resolutions of 100, 20 and 1, it can set this value so that only the resolution 20 and 1 sensors, or only the resolution 1 sensor, are activated.

Sensors above the max active resolution will not be able to detect other ships and will not have active emissions that can be detected by EM sensors. Only sensors that are in use (at or below max resolution) will be displayed on the tactical map.

**Experience Events**

The Commander Experience event has been split into four different events.

*   Scientist Experience. Also added research field to this event.

*   Administrator Experience.

*   Commander Experience. This is for naval and ground commanders with a current assignment.

*   Unassigned Experience. Naval and ground commanders without a current assignment.

This change is to highlight the (usually) more important updates to scientists and administrators, while allowing players to filter out unassigned experience if required.

**Academy Name Themes**

There is a new 'Academy Name Theme' dropdown on the Governor/Misc tab of the Economics windows, containing all commander naming themes, along with a 'Use Academy Name Theme' checkbox. These default to no selected theme and unchecked respectively.

If an Academy Name Theme is currently selected for the population and the checkbox is checked, then any commanders produced by an Academy at that population will use the selected name theme. Otherwise, they will use the commander name themes set for the parent race.

This is to allow specific populations to represent specific ethnicities for commander naming purposes.

**Rogue Planets**

v2.6 includes larger-than-normal comets. For v2.7, these are expanded to 'Rogue Planets'.

About around 1 in 60 comets will exceed normal size and be anything up to 2000 km in diameter. Approximately one in 250 will be anything from 2000 km to 16,000 km (Earth is 12,000).

This latter category is classed as a 'rogue planet' and will generally be very long-period, high eccentricity bodies. They are assumed to have been thrown out of a more conventional orbit by a close interaction with a high-gravity body. The mineral generation for rogue planets will be the same as a planet or a moon, although their orbital profile matches a comet. If the rogue planet has at least 0.4G gravity, it may have ruins. This is based on the normal ruin chance, but without the restrictions for temperature and distance.

**Auto-include Lagrange Points**

In v2.6 and earlier, the 'Auto-include Lagrange Points' checkbox on the fleet window is used to enable or disable a check for a shorter route for fleets via Lagrange Points. However, this only applies to a single order and does not retain its status.

For v2.7, this becomes a permanent on/off flag for the fleet and will apply to all newly-generated orders, including manually applied, auto-route, standing and conditional. The only exception will be template orders, as they are already generated.

**Direct-Fire Weapons**

v2.7 has the following changes related to direct-fire research.

*   The Energy Weapons research field is renamed as Direct Fire Weapons.

*   The Missiles/Kinetic research field is renamed to Missiles.

*   Railgun and Gauss Cannon research is moved from the old Missiles/Kinetic field into the Direct Fire Weapons field.

*   The 'Beam Fire Control Range' tech is renamed as 'Fire Control Range'.

*   The 'Beam Fire Control' research project is renamed as 'Direct Fire Control'.

**Missile Self-Targeting**

In v2.6, when a missile has onboard sensors but no current target, it will use those active, thermal or EM sensors (in that order) to search for a ship target. The closest valid target is selected.

For v2.7, the target selection will be a random valid target within sensor range, weighted by chance to hit.

**Meson Update**

For v2.7, the armour retardation element of mesons is built into the calibre tech, rather than being a separate tech system. The starting point for armour retardation is now 40%, rather than 50%, and the rate of improvement has been increased.

The new tech levels for focal size are as follows:

1.  10cm Meson Focal Size (40% AR)
2.  12cm Meson Focal Size (32% AR)
3.  15cm Meson Focal Size (25% AR)
4.  20cm Meson Focal Size (20% AR)
5.  25cm Meson Focal Size (16% AR)
6.  30cm Meson Focal Size (12.5% AR)
7.  35cm Meson Focal Size (10% AR)
8.  40cm Meson Focal Size (8% AR)
9.  50cm Meson Focal Size (6.4% AR)
10. 60cm Meson Focal Size (5% AR)
11. 70cm Meson Focal Size (4% AR)
12. 80cm Meson Focal Size (3.2% AR)

**Solar System Destruction Scenario**

A new disaster scenario has been added. Exotic matter has interacted with the sun and caused a disruption that starts as barely noticeable but increases exponentially over decades.

The immediate effect is additional radiation emitting from the Sun. This radiation affects all bodies in the system with an annual amount equal to:
((Years since game start) ^ 3) \* (1 / (Body Distance in AU ^ 2)) \* Scenario Factor

The three available options for the Scenario Factor are 0.005, 0.0075 and 0.01.

### Examples

*   With the 0.005 variant, the total radiation received by Earth in year 20 is 10^3 \* (1/1) \* 0.005 = 40. This will not be noticeable from a population perspective because Earth will absorb 100 radiation per year (or 10% of the current radiation, whichever is greater, as per the normal radiation reduction rules).

*   In year 30, Earth will receive 30^3 \* 0.005 = 135 radiation, but will not be able to absorb it all so 35 will be added to the background radiation.

*   In year 40, Earth will receive 30^3 \* 0.005 = 320 radiation. By this point, background radiation will be around 1350, reducing production by 13% and the population is likely to be shrinking.

*   In year 50, background radiation will be over 5,000 and by year 60 it will be almost 13,000, making the Earth unusable for industry. Population decline will be close to -30%.

Mercury and Venus will be in worse shape than Earth due to their proximity to the Sun. Mars will receive around half the radiation of Earth, while the Galilean moons will receive less than 5% of Earth, so they can provide safe harbour for a while. However, the radiation isn't the biggest problem. Due to the massive disruption at the Sun's core, it will eventually explode. The chance of this happening is (Game Years - 50) \* 2%.

If the explosion of Sol is triggered, everything in the Sol system will be destroyed and all the Sol jump point connections will be broken. The Sol System will be deleted from the game.

This is an apocalyptic scenario, but does provide a suitable impetus for exploring the galaxy. Also, much more fun as a conventional start :)

**Updates to Shipping Lines**

There are two major issues with the new shipping lines changes in v2.6. The rate of growth for players is too slow and the rate of growth for NPRs is too high. The rate of growth for players is a relatively easy fix. The current payouts for civilian activity have been increased by 50% and will be monitored in v2.7.

0.00015 per colonist per billion kilometres travelled
0.006 per passenger per billion kilometres travelled
0.375 per trade good per billion kilometres travelled
0.00015 per cargo point per billion kilometres travelled

The issue with NPRs is different, because NPRs use shipping lines for all their cargo and colony requirements, rather than building 'government owned'. This is to avoid replicating the AI logic for two essentially identical functions, plus it was intended to grow their commercial traffic organically, depending on need rather than adding a further layer of AI to assess and prioritise commercial needs.

In v2.6, NPRs receive one freighter, one colony ship and one harvester for every 100m population in their first shipping line (not subsequent ones). For v2.7, this has been changed to one freighter and colony ship for each 200m population. Harvesters have been removed as they build those normally and the civilian ones were a legacy function.

That still means they will grow much faster than human player races because they have an immediate income stream from their starting ships. A line of old code that boosted NPR shipping line payments by 1.5x has also been found and the modifier changed to 0.5 (which is effectively 0.75 in real terms due to the 50% extra baseline income).

In summary, NPRs will start with half as many ships in their shipping lines and their rate of growth from that lower base will be halved. That should result in a significant decrease in the number of NPR civilian ships. This may be modified further based on testing.

**Automated Ground Force Replacements**

The GU Training tab of the Economics window has a new checkbox named 'Build Replacements'.

When the population has no existing tasks and the 'Build Replacements' checkbox is ticked, the ground force construction complexes at that population will build new units for any 'damaged' ground unit formations with a replacement template. A 'damaged' formation is identified as one that is smaller in tons than its replacement template. The damaged formations are ordered by descending replacement priority.

Replacement templates and priorities are explained in the v1.12 changes post. Building of new units takes place immediately after re-assignment from replacement formations.

For each selected formation, the number of units in each element in the formation will be compared to the same element in the replacement template. Any missing units will be built and added to the formation. The rate of construction for new units will be equal to the available build capacity divided by the cost of units. Only whole units will be constructed. When there is insufficient capacity remaining for a full unit, other elements will be checked for less expensive units.

At the end of the construction phase, any remaining capacity will be carried forward to the next construction phase. If a normal build order is assigned, or there are no damaged formations, this remaining capacity will be set to zero.

If the unit class related to the formation template element is part of a unit series, all units of that series within the damaged formation will be counted when determining if additional units should be built. For example, assume the template element has 60 MK II Tanks and those are in a unit series with the MK I Tank. If the damaged formation has 20 MK I Tanks and 30 MK II Tanks, then 10 MK II tanks will be built.

If the replacement flag is set and all formations have reached their designated TOE, an event will be generated.

**The Ancients**

v2.7 adds a new, non-hostile spoiler race called the 'Ancients'.

### Background

This is the race that built the ancient constructs and pre-dates the precursors. At some point in the distant past, they vanished. Their departure meant the ancient constructs became dormant and no longer prevented the formation of aether rifts, allowing the Invaders to enter the milky way galaxy.

When the ancients departed, they left behind many artifacts. Some of these were colonies, with intact factories, research facilities and other installations, including orbital habitats. Others were large harvester stations, terraforming stations, maintenance bases or asteroid mining stations, or even a rare ancient warship. Over time, many of these artifacts were destroyed by alien races, precursors, invaders, raiders or star swarm or succumbed to the ravages of time, but some still survive, hidden away in systems that have seen no alien presence in thousands of years. These ancient colonies have no populations or defence forces and the ships and stations have no crews. They await the first intrepid explorer to discover them.

### Details

*   Ancient colonies and ships have a very small random chance to appear. This chance is much greater on bodies with an ancient construct and in systems containing an ancient construct.

*   Ancient colonies or stations will not appear in any system generated with an NPR or other spoiler race.

*   Ancient colonies can be captured with ground forces.

*   Ancient ships and stations can be captured by boarding parties. Like any captured ship, they will be of little use until provided with a crew.

*   If an ancient harvester, mining station, etc. is captured, it will use the technology of the capturing race when determining its production capacity.

*   The various spoiler races will destroy or capture any ancient relics if given the chance. Ancient stations tend to be large, so this is of particular benefit to the swarm.

*   Any ruin with an ancient construct will have the Ancients as the ruin race and will be TL5.

*   There is a very small chance that a random wreck will be an ancient ship or station.
