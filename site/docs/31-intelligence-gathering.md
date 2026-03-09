**Electronic Intelligence Gathering**

A new concept in C# Aurora is ELINT, or Electronic Intelligence Gathering. This is performed by a new line of ship components, the Electronic Intelligence and Analysis Modules. These start at strength 5 and follow a similar strength progression to EM Sensors. One of the prerequisites for each module is the corresponding EM Sensor strength technology.

The ELINT Modules are 10 HS, require 15 crew and cost 20x their strength (this is subject to change as a result of play test). They have a secondary function as an EM Sensor, although a dedicated EM sensor of the same size would be far more effective. Their primary function is to gather electronic and signals intelligence on alien populations and active sensors (and I will add ground forces at some point). Increased strength, through research or multiple modules, can increase the range at which intelligence is gathered but the base rate is fixed. Multiple ships cannot increase the intelligence gathered from a single source, although a single ELINT module can gather intelligence from multiple sources.

If the target can be detected by the ELINT modules’ built-in EM Sensors, intelligence can be gathered. The rate is 1 intelligence point per day, boosted by the Intelligence bonus of the ELINT ship commander. For populations, the intelligence is also multiplied by (100 - Population Species Xenophobia) / 100. In other words, it is much harder to gain intelligence when a population has high xenophobia. If the alien language is not translated, all intelligence is reduced by 80%.

Intelligence is gathered per population and per active sensor design (if multiple sensors of the same type are monitored, you only gain intelligence at the same rate as one sensor). Specific alien sensors will now be associated with specific alien classes.

Alien active sensors will initially be displayed with just a strength and not a range or resolution. Once 100 intelligence points have been gathered for a particular design of active sensor, its range and resolution will be displayed. Note that in VB6 you only have an approximation of the alien sensor range. I plan to add active jammers and passive stealth capability, both of which will become more effective against alien sensors based on the intelligence gathered on those sensors (no limit to intel points). I’ll provide the detail for this when I post the jammer and stealth rules.

Alien populations will be initially be displayed as they are now, with EM and thermal signatures. Once 100 intelligence points have been gathered, the population size in millions and the number of installations will be displayed. Additional information becomes available at higher intelligence levels:

200 Points:  
Number of factories and mines and whether a spaceport and/or a cargo shuttle station are present.

300 Points  
Number of refineries and maintenance facilities and whether a refuelling station and/or an ordnance transfer station are present.

500 Points  
Number of research facilities and ground force training facilities and whether a naval headquarters and/or a sector command are present.

The intelligence points for a specific population will reduce at approximately 25% per year if ELINT monitoring ends. The information that was gained while intelligence points were at their highest point will remain and is shown in red when viewing the alien population on the Diplomacy window. Current information is shown in green.

Any intelligence gained on a population is also used at the racial level for the purposes of espionage. Each Alien Population Intelligence Point adds one Alien Race Intelligence Point. If the population is less than 100m, the translation of Population Intelligence to Race Intelligence is modified by Population in millions / 100. When 100 Alien Race Intelligence Points have accumulated, a check is made for any intelligence gained. This is the same check as in VB6 for espionage teams and can result in new technology, survey data, new system knowledge or details of an enemy ship class. I will probably add information on alien sensors, ground units and populations to that list.

As a result of these changes, espionage teams have been removed from C# Aurora.

A couple of design examples for the ELINT Module

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/d8cded108a010fbe7de0f1aa2dd113df02c9db3d_2_690x433.jpeg)

image940×590 181 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/d8cded108a010fbe7de0f1aa2dd113df02c9db3d.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/c4618b6997dbbe91623c39effe514fc7651bda8c_2_690x432.jpeg)

image940×589 157 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/c4618b6997dbbe91623c39effe514fc7651bda8c.jpeg "image")

  

**Interrogation of Survivors**

In VB6 Aurora, you can gain espionage points from interrogating the survivors picked up from life pods. In C# Aurora, the same principle applies, although they are now Race Intelligence Points and are added to those gained via ELINT.

The rate at which Race Intelligence points are gained from survivors is Crew / 10 + the cube of the rank number of any captured officer (so R3 would provide 27 points). This is more important than the same algorithm in VB6, because there are now potentially multiple officers per ship.

However, unlike VB6, this point gain is reduced if the survivors are from a non-hostile power. The intelligence points gained from neutrals is halved, friendly reduced by 80% and allied by 90%. This is to simulate that aggressive interrogation is unlikely to be used against survivors from a friendly power.

As with other intelligence gains, there is a further 80% reduction if the alien language has not been translated.

  

**Alien Ground Unit Intelligence**

As you fight alien ground forces, you will gain intelligence on the alien ground unit classes. This intelligence is displayed on the Diplomacy and Intelligence window alongside intelligence on alien ships, classes, sensors and populations.

For each different type of ground unit class you engage, you may gain intelligence if you have your own ground forces on the same ship or system body. New intelligence is gained under the following circumstances.

*   If the alien unit fires on you, you will gain intelligence on its weapons
    
*   If you score twenty hits on that type of unit, you will identify its base type (infantry, light vehicle, etc.)
    
*   If you penetrate the armour of that type of unit twenty times, you will learn its armour strength
    
*   if you destroy twenty of that type, you will learn its hit points
    

  

**Ground Combat Hostile Force Intelligence**

This post covers intelligence regarding the size and composition of the hostile force in a given ground combat zone. After each combat round, an update is provided on the estimated hostile force. The estimate becomes more accurate as time passes. For each type of hostile ground unit om the combat zone, the following process is used:

The Intel Error Range is 200 / Number of Combat Rounds.  
Intel Error is 1 + (Random (Intel Error Range) / 100);  
50% of the time, the actual number of alien units is multipled by the Intel Error and 50% of the time the actual number of alien units is divided by the Intel Error.

For example, if there are 1000 units of a particular alien class, the intelligence following the second combat round could indicate between 500 and 2000 units. After 10 combat rounds, the intelligence reporting range will be 833 to 1200 units.

  

**Group Contacts**  
Similar contacts can be grouped in C# Aurora. This is done via a checkbox on the Tactical Map sidebar entitled ‘Group Contacts’. This is similar in concept to the ‘Hide Active IDs’ in VB6 Aurora but implemented a little differently.

When Group Contacts is active, any contacts with the same alien ship type, the same current coordinates, the same coordinates from the previous increment, the same active sensor emissions and the same contact status will be grouped together. The 001, 002, etc. suffix of the normal contact string will be replaced with a prefix showing how many contacts in the group. If there is only one contact in a location, the grouping is ignored and the normal contact information is displayed. The difference is shown below:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/46d3285d05ae2a3e4214d881870ad6e8db146a42_2_690x485.jpeg)

image940×662 157 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/46d3285d05ae2a3e4214d881870ad6e8db146a42.jpeg "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/cbb5c2ee77cd4c4cc33de78d33805b1aac82cab4_2_652x500.png)

image940×720 87.6 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/cbb5c2ee77cd4c4cc33de78d33805b1aac82cab4.png "image")

  

**Lost Contacts**

The ‘Lost Contacts 1 Month’ checkbox will update the tactical map to display any ship contacts less than one month old, rather than the default of current contacts only. This is more sophisticated than the VB6 equivalent and will also provide more information on current contacts where available. For example, you may be currently tracking an alien ship by its thermal emissions only, but you had an active contact a week ago. When Lost Contacts is active, you will see both the current thermal contact combined with the older active contact.

Any ship contact that is only visible because of the lost contact option will display \[LOST\] after the contact information. A ship contact with a combination of current and older information will display \[PARTIAL\] after the contact information.

There is also a ‘Lost Contacts 1 Year’ checkbox, which functions exactly as above except for the period of time. If both boxes are checked, one year takes priority.

Here is a section of my current system map with and without the Lost Contacts option active. The Hegemony of Titan ships near the bottom only appear when Lost Contacts is active. The Venusian freighters at the top left are present in both screenshots, but have more information available when Lost Contacts is active

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/5d57a6cdafa62b96420c2134a635ef70abbff959_2_460x500.png)

image940×1020 138 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/5d57a6cdafa62b96420c2134a635ef70abbff959.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/b633f1328cf2ad4843f2b8827810178679d427c5_2_460x500.jpeg)

image940×1021 206 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/b633f1328cf2ad4843f2b8827810178679d427c5.jpeg "image")

Lost Contacts can be combined with Group Contacts. Here are two screenshots of Martian ships in orbit of Mars with Group Contacts active. Lost Contacts is active in the second screenshot.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/2c2c3936015f1fe6e2dbab6f5e67af00a5d51526_2_548x500.png)

image758×691 91.4 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/2c2c3936015f1fe6e2dbab6f5e67af00a5d51526.png "image")

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/54ee6db156904be87ea75c3138c986a07ce2556d_2_690x456.jpeg)

image861×570 144 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/54ee6db156904be87ea75c3138c986a07ce2556d.jpeg "image")
