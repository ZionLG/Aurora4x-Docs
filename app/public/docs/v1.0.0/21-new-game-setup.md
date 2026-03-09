**New Game Settings**

1.  Percentage modifier for Research Speed (for all races)
2.  Percentage modifier for Terraforming Speed (for all races)
3.  Percentage modifier for starting minerals on Sol.
4.  Flag for Active Civilian Shipping Lines. When this is disabled, shipping lines will not produce ships.
5.  Flag for Civilian Harvesters. When this is disabled, shipping lines will not build fuel harvesters.
6.  Flag for recovering tech due to conquest. You can disable this so no new tech is gained via conquest.
7.  LY entry to limit Starting NPR Locations to within a specific range of Sol
8.  Option for Planet X in the Sol System

You can specify a number of Earth-based player races on the Game Setup window. You will cycle through a number of Race Creation windows equal to the number of races selected. You will still need to create any non-Earth-based races after the main game creation process.

  

**Starting Build Points**

A new player race in Aurora receives a number of Starting Build Points equal to two years wealth. These can be spent on instant build for Ships and Ground Formations.

If the available Instant Build Point total is greater than zero, the Instant Build section will be shown on the Miscellaneous tab of the Class window, including the current Instant Build Point total, plus selection options for destination fleet and number of ships to be built. This section will also appear if SM Mode is active, so additional ships can be instantly built if required by the game setup.

If the available Instant Build Point total is greater than zero, that total, plus the Instant Build button, will be shown on the GU Training tab of the Economics window. When the Instant Build button is clicked, a popup box will allow entry of the number of formations to be built. This button will also appear if SM Mode is active, so additional formations can be instantly built if required by the game setup.

If you choose to have automatically constructed ground formations at game start, their cost will be deducted from the starting build points.

The ship options replace the VB6 Fast OOB window, while the ground options are new for C# Aurora.

  

**Starting NPR Locations**

There is a new option on the New Game window that allows you to specify the minimum and maximum distance (in light years) of starting NPRs in Known Stars games. The NPR starting location will be selected from the list of known star systems within that distance range from Sol. This gives you some control over how fast you will run into the starting NPRs.

Once a known system is selected, the system bodies for that system will be generated and checked for a suitable planet or moon to establish the NPR. This potential body needs to be in the acceptable range for gravity, temperate and hydro extent. The atmosphere will be changed to something suitable. If nothing is found, the system is generated again and again until a suitable location appears (this won’t take long).

A check is also made to see if the NPR location is within reasonable range of the primary star; either by orbiting within about 12 billion kilometres or orbiting within 12b km of a star that allows travel by Lagrange point to the primary (with the LPs also within 12b of each star). I’ve even checked for the planet/moon orbiting a star with no Lagrange points but that star is within 12b km of the primary, or orbiting a star with no Lagrange points but that star is within 12b km of another star that does have LPs to the primary ![:)](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/30958a87cf55f4d9ce8060f11f5189deddc2f423.png) This is to ensure no NPRs created that are unlikely to interact with the player.

  

**Planet X in the Sol System**

In recent years, several theories have been published regarding a potential planet affecting some Kuiper Belt objects, possibly a distant but undetected gas giant. Therefore, a new game option is to “Add Planet X to the Sol System”.

The planet will be located at a distance between 125% and 225% of the orbit of the most distant dwarf planet. 10% of the time it will be a terrestrial body, 60% a gas giant and 30% a superjovian. Moons, Trojan asteroids and a Lagrange point may also be generated depending on the type of planet generated. If Planet X has a Lagrange point, a Lagrange point will also be generated for Jupiter. While very distant from the inner system, this could add an interesting variation to the Sol system.

Currently Planet X is named Minerva, although I haven’t created any moon or Trojan asteroid names. Suggestions welcome.

Here is one version of Minerva - a superjovian with eight moons, orbiting at 145 AU.

![image](https://canada1.discourse-cdn.com/flex011/uploads/aurora4x/original/1X/ab27adb33c3833de2cd6341d9cf3556ca547e52e.png)

  

**Conventional Start**

There are no longer any missile bases or ICBMs for a conventional start. The player now receives:

1,000 ton Naval Shipyard  
10,000 ton Commercial Shipyard  
Spaceport  
Military Academy  
Naval Headquarters  
Deep Space Tracking Station  
5x Maintenance Facility  
Conventional Industry equal to eight times the Manufacturing population in millions.  
Research Facilities equal to one twelfth of the Manufacturing population in millions. This is more research facilities than in VB6.

For example, a starting population of one billion will have 1600 conventional factories and 16 research facilities

  

**Starting Financial Centres**

New Trans-Newtonian Races will start with a number of financial centres equal to one quarter of the number of construction factories.
