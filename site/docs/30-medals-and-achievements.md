**Automated Medal Awards**

In terms of basic concept, Medals in C# have a similar function to VB6. You can create a medal with a name and description, associate a medal image and assign a promotion score boost (or penalty). You can assign that medal as desired to different officers for role-playing reasons. A minor addition for C# is that you can flag a medal as allowing only a single award, or allowing multiple awards.

The major change for C# is that medals can now be assigned automatically. A lengthy default list of conditions for medal awards will be available and, within the constraints of the available measurement types, additional conditions can be added. Medals can be associated with one or more conditions and the medal will be awarded if a commander meets one of those conditions (unless it is a single-award only and the commander already has it).

This first screenshot shows the Medal Window, with the first medal on the list selected. At the bottom of the window are options for changing text or image, setting promotion score and the multiple award flag and adding/removing conditions for the medal.

The second screenshot shows a list of available conditions. This is only an initial list to show examples of what is possible. All these conditions are already working. I will also add to this window the ability to create new conditions. They will have to use one of the existing measurement types, but you can choose different measurement amounts. This thread is open for suggestions of different measurement.

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/6979b0c99feb2d99650860e5b3e70364219e9aff_2_690x491.png)

image940×669 157 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/6979b0c99feb2d99650860e5b3e70364219e9aff.png "image")

  

**Manual Medal Awards**

The previous post on medals covered automated medal assignment. This covers manual awards, for which there are two options:

1.  An award to an individual commander on the Commanders window using the Award Medal button (as per VB6).
2.  Mass Awards to large numbers of commanders at once, primarily for the purposes of ‘Campaign Medals’.

On the Fleet window, you can select a Ship, a Sub-Fleet, a Fleet or a Naval Admin Command and click Award Medal. The following window pops up:

[![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/optimized/1X/f4b6618448247d2502c55ce16c7ec96b2f20b1e7_2_350x500.png)

image702×1002 124 KB

](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/f4b6618448247d2502c55ce16c7ec96b2f20b1e7.png "image")

You choose the medal and the type of command positions to which the medal will be awarded. Every commander with a command included in the selected types that is on a ship included in the selected organisation will be awarded the selected medal. This would include commanders of any ground formations present on the ships if that command type is selected. If a fleet is selected, all ships in the fleet are included, including any in sub-fleets. If an Admin Command is selected, every ship in the complete hierarchy of that Admin Command will be selected. Mass Awards use a confirmation popup after you close the Medal Award window, as a mistaken mass award would require some sorting out ![:)](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/30958a87cf55f4d9ce8060f11f5189deddc2f423.png)

On the Naval Forces window of the Galactic Map there is an Award Medal button. This will pop up the same Award Medal window. The selected medal will be awarded to every commander with one of the selected command types in the system currently selected on the Galactic map, including commanders of ground formations at populations in the system if that command type is selected.

On the Ground Forces window in the Order of Battle tab are two new buttons; Formation Medal and Hierarchy Medal. Formation Medal functions in a similar way to the Award Medal on the Commander window. The medal is awarded to the single commander of the currently selected formation. Hierarchy Medal is a Mass Award option with two functions, depending on whether a formation or a population is selected. When a formation is selected, the mass award is to all commanders in the downward hierarchy of the currently selected formation, included the commander of the selected formation. When a population is selected the mass award is to the commanders of all formations at that population.

When awarded medals manually, a popup box will appear after the medal is chosen, allowing you to enter an optional medal citation. This citation will appear if you mouse-over the medal in the commander view.

This new Mass Award option should result in a much more visual history of different commanders with the display of their various campaign medals.

  

**Ship Achievements**

All the medal conditions that potentially apply to ship commanders are recorded for the ship as well. This is maintained separately from the ship commander, so when a commander moves on to a new ship, the current ship retains its achievements, which will continue to increase under the next commander. A ship does not need a commander for the achievements to be recorded. Currently the recorded ship achievements include the following:

Hostile Ships Destroyed  
Military Shipping Tonnage Destroyed  
Commercial Shipping Tonnage Destroyed  
Hostile Missiles Destroyed  
Ground Forces Tonnage Destroyed  
Armour Damage Taken  
Internal Damage Taken  
Star Systems Discovered  
Ruins Discovered  
Bodies With Minerals Discovered  
Jump Points Discovered  
Habitable World Discovered  
Combat Drop - Transport  
Tons Salvaged  
Stablisations Completed

The ship total for each of the above is displayed on the Ship Design Display tab, under the Ship Overview tab on the Naval Organization window.

EDIT: If a ship has an assigned mothership, the parasite still gets the credit, but the assigned mothership receives a separate credit flagged with (SG) for strike group. Separate achievement entries are shown for the carrier itself and the strike group, even if they are the same achievement. So if a Battlestar has destroyed 10,000 tons of shipping directly and its Vipers have destroyed 20,000 tons, the achievement list for the Battlestar will show:

Military Shipping Tonnage Destroyed: 10,000 tons  
Military Shipping Tonnage Destroyed (SG): 20,000 tons.
